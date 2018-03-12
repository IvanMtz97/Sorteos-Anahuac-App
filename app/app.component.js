"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var platformModule = require("tns-core-modules/platform");
// import { Message } from "nativescript-plugin-firebase";
var dialogs_1 = require("ui/dialogs");
var app = require("application");
var application_1 = require("application");
var nativescript_exit_1 = require("nativescript-exit");
var loading_1 = require("./services/loading/loading");
var pushPlugin = require("nativescript-push-notifications");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = /** @class */ (function () {
    function AppComponent(session, router, myGetService, routeExtension, loading) {
        var _this = this;
        this.session = session;
        this.router = router;
        this.myGetService = myGetService;
        this.routeExtension = routeExtension;
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
        this.loading = loading;
        this.session = session;
        this.router = router;
        this.session.setURL(this.serverUrl);
        if (this.session.loggedIn()) {
            this.GetTalonarios();
            if (this.session.getFirstRun() == true) {
                this.router.navigate(["privacidad"]);
            }
            else {
                this.router.navigate(["talonarios"]);
            }
        }
        else {
            this.router.navigate([""]);
        }
        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then(function (r) {
            _this.imagenPublicidad = "data:image/png;base64," + r.toBase64String();
            _this.session.setImagenPublicidad(_this.imagenPublicidad);
        }, function (err) {
            console.log("----------\nError en la imagen de publicidad\n----------");
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (platformModule.device.os == 'Android') {
            app.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
                if (_this.router.isActive("/", true) || _this.router.isActive("/talonarios", true) || _this.router.isActive("", true) || _this.router.isActive("/login", true)) {
                    data.cancel = true;
                    dialogs.confirm({
                        title: "AVISO",
                        message: "Deseas salir de la aplicacion?",
                        okButtonText: "SI",
                        cancelButtonText: "NO"
                    }).then(function (result) {
                        if (result) {
                            nativescript_exit_1.exit();
                        }
                    });
                }
            });
        }
        firebase.init({
            onMessageReceivedCallback: function (message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
                // if your server passed a custom property called 'foo', then do this:
                console.log("Value of 'foo': " + message.data.foo);
                dialogs_1.alert("Message " + message.title + message.body);
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        firebase.getCurrentPushToken().then(function (token) {
            // may be null if not known yet
            console.log("Current push token: " + token);
        });
        var iosSettings = {
            senderID: "<ENTER_YOUR_PROJECT_NUMBER>",
            badge: true,
            sound: true,
            alert: true,
            sandbox: true,
            interactiveSettings: {
                actions: [{
                        identifier: 'READ_IDENTIFIER',
                        title: 'Read',
                        activationMode: "foreground",
                        destructive: false,
                        authenticationRequired: true
                    }, {
                        identifier: 'CANCEL_IDENTIFIER',
                        title: 'Cancel',
                        activationMode: "foreground",
                        destructive: true,
                        authenticationRequired: true
                    }],
                categories: [{
                        identifier: 'READ_CATEGORY',
                        actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                        actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                    }]
            },
            notificationCallbackIOS: function (message) {
                dialogs_1.alert("Message received!\n" + JSON.stringify(message));
            },
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                dialogs_1.alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
            }
        };
        pushPlugin.register(iosSettings, function (token) {
            console.log("Device registered. Access token: " + token);
            // Register the interactive settings
            if (iosSettings.interactiveSettings) {
                pushPlugin.registerUserNotificationSettings(function () {
                    dialogs_1.alert('Successfully registered for interactive push.');
                }, function (err) {
                    dialogs_1.alert('Error registering for interactive push: ' + JSON.stringify(err));
                });
            }
        }, function (errorMessage) {
            dialogs_1.alert("Device NOT registered! " + JSON.stringify(errorMessage));
        });
    };
    //GET INICIO SESION-------->
    AppComponent.prototype.GetTalonarios = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getDataAuthorization('api/Colaborador/GetCorreo/' + this.session.getCorreoColaborador() + '/')
            .subscribe(function (result) {
            _this.onGetData(result);
        }, function (error) {
            //this.loader.display(false);
            //this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios. El token expiro favor de iniciar sesion.');
            _this.loading.display(true);
            _this.myGetService.getLogin({ email: _this.session.getCorreoColaborador(), password: _this.session.getPassColaborador() }, "api/Colaborador/" + platformModule.device.uuid).subscribe(function (result) {
                _this.loading.display(false);
                console.log("TOKEN EXPIRADO");
                console.dir(result.json());
                _this.session.setLoggedIn(true);
                _this.session.setInformation(JSON.stringify(result.json()));
                _this.session.setToken(result.json().token);
                _this.session.setIdColaborador(result.json().identificador);
            }, function (error) {
                _this.loading.display(false);
                _this.mostrarMensaje('Error', 'Usuario y/o contraseña incorrectos, favor de iniciar sesion.');
            });
        });
    };
    AppComponent.prototype.onGetData = function (data) {
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
    };
    AppComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        var _this = this;
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        }).then(function () {
            console.log("Dialog closed!");
            _this.routeExtension.navigate(['/login'], { clearHistory: true });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            providers: [session_services_1.SessionService, http_get_services_1.MyHttpGetService, loading_1.LoadingService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.Router, http_get_services_1.MyHttpGetService, router_extensions_1.RouterExtensions, loading_1.LoadingService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsMERBQTREO0FBQzVELDBEQUEwRDtBQUMxRCxzQ0FBbUM7QUFDbkMsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFFekMsc0RBQTREO0FBRTVELDREQUE4RDtBQUU5RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU96RDtJQUVJLHNCQUFvQixPQUF1QixFQUFVLE1BQWMsRUFBVSxZQUE4QixFQUFVLGNBQWdDLEVBQVUsT0FBdUI7UUFBdEwsaUJBc0JDO1FBdEJtQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUNsTCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFD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LElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCwrQkFBK0I7SUFDbkMsQ0FBQztJQUVNLHFDQUFjLEdBQXJCLFVBQXVCLE1BQU0sRUFBRSxPQUFPO1FBQXRDLGlCQVNDO1FBUkcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOUpRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsaUNBQWMsRUFBRSxvQ0FBZ0IsRUFBRSx3QkFBYyxDQUFDO1NBQ2hFLENBQUM7eUNBRytCLGlDQUFjLEVBQWtCLGVBQU0sRUFBd0Isb0NBQWdCLEVBQTBCLG9DQUFnQixFQUFtQix3QkFBYztPQUY3SyxZQUFZLENBZ0t4QjtJQUFELG1CQUFDO0NBQUEsQUFoS0QsSUFnS0M7QUFoS1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuLy8gaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGV4aXQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWV4aXRcIjtcclxuXHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBwdXNoUGx1Z2luIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpZGFkOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15R2V0U2VydmljZTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSByb3V0ZUV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2FkaW5nOiBMb2FkaW5nU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRUYWxvbmFyaW9zKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicHJpdmFjaWRhZFwiXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBodHRwLmdldEltYWdlKFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIikudGhlbigocikgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlblB1YmxpY2lkYWQgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgci50b0Jhc2U2NFN0cmluZygpOyBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQodGhpcy5pbWFnZW5QdWJsaWNpZGFkKTtcclxuICAgICAgICB9LCAoZXJyKSA9PiB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1cXG5FcnJvciBlbiBsYSBpbWFnZW4gZGUgcHVibGljaWRhZFxcbi0tLS0tLS0tLS1cIik7ICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PSAnQW5kcm9pZCcpe1xyXG4gICAgICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucm91dGVyLmlzQWN0aXZlKFwiL1wiLCB0cnVlKSB8fCB0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi90YWxvbmFyaW9zXCIsIHRydWUpIHx8IHRoaXMucm91dGVyLmlzQWN0aXZlKFwiXCIsIHRydWUpIHx8IHRoaXMucm91dGVyLmlzQWN0aXZlKFwiL2xvZ2luXCIsIHRydWUpKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlc2VhcyBzYWxpciBkZSBsYSBhcGxpY2FjaW9uP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU0lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOT1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaXRsZTogXCIgKyBtZXNzYWdlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9keTogXCIgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgeW91ciBzZXJ2ZXIgcGFzc2VkIGEgY3VzdG9tIHByb3BlcnR5IGNhbGxlZCAnZm9vJywgdGhlbiBkbyB0aGlzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWYWx1ZSBvZiAnZm9vJzogXCIgKyBtZXNzYWdlLmRhdGEuZm9vKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSBcIiArIG1lc3NhZ2UudGl0bGUgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIG1heSBiZSBudWxsIGlmIG5vdCBrbm93biB5ZXRcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgIGNvbnN0IGlvc1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBzZW5kZXJJRDogXCI8RU5URVJfWU9VUl9QUk9KRUNUX05VTUJFUj5cIiwgLy8gUmVxdWlyZWQ6IHNldHRpbmcgd2l0aCB0aGUgc2VuZGVyL3Byb2plY3QgbnVtYmVyXHJcbiAgICAgICAgICAgIGJhZGdlOiB0cnVlLFxyXG4gICAgICAgICAgICBzb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgYWxlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNhbmRib3g6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfSURFTlRJRklFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZWFkJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0aW9uTW9kZTogXCJmb3JlZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnQ0FOQ0VMX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0aW9uTW9kZTogXCJmb3JlZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0NBVEVHT1JZJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zRm9yRGVmYXVsdENvbnRleHQ6IFsnUkVBRF9JREVOVElGSUVSJywgJ0NBTkNFTF9JREVOVElGSUVSJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNZXNzYWdlIHJlY2VpdmVkIVxcblwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQ6IChzdHJpbmdpZmllZERhdGE6IFN0cmluZywgZmNtTm90aWZpY2F0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkJvZHkgPSBmY21Ob3RpZmljYXRpb24gJiYgZmNtTm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXIoaW9zU2V0dGluZ3MsICh0b2tlbjogU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZWdpc3RlciB0aGUgaW50ZXJhY3RpdmUgc2V0dGluZ3NcclxuICAgICAgICAgICAgaWYoaW9zU2V0dGluZ3MuaW50ZXJhY3RpdmVTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgcHVzaFBsdWdpbi5yZWdpc3RlclVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1N1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIGZvciBpbnRlcmFjdGl2ZSBwdXNoLicpO1xyXG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvciByZWdpc3RlcmluZyBmb3IgaW50ZXJhY3RpdmUgcHVzaDogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJEZXZpY2UgTk9UIHJlZ2lzdGVyZWQhIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgIC8vR0VUIElOSUNJTyBTRVNJT04tLS0tLS0tLT5cclxuICAgIHByaXZhdGUgR2V0VGFsb25hcmlvcygpIHtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2UgIFxyXG4gICAgICAgICAgICAuZ2V0RGF0YUF1dGhvcml6YXRpb24oJ2FwaS9Db2xhYm9yYWRvci9HZXRDb3JyZW8vJyArIHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW9Db2xhYm9yYWRvcigpICsgJy8nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBkZSBvYnRlbmVyIGxvcyB0YWxvbmFyaW9zLiBFbCB0b2tlbiBleHBpcm8gZmF2b3IgZGUgaW5pY2lhciBzZXNpb24uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlLmdldExvZ2luKHtlbWFpbDogdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCksIHBhc3N3b3JkOiB0aGlzLnNlc3Npb24uZ2V0UGFzc0NvbGFib3JhZG9yKCl9LCBcImFwaS9Db2xhYm9yYWRvci9cIiArIHBsYXRmb3JtTW9kdWxlLmRldmljZS51dWlkKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOIEVYUElSQURPXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdC5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihyZXN1bHQuanNvbigpLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SWRDb2xhYm9yYWRvcihyZXN1bHQuanNvbigpLmlkZW50aWZpY2Fkb3IpO1xyXG4gICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0Vycm9yJywgJ1VzdWFyaW8geS9vIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zLCBmYXZvciBkZSBpbmljaWFyIHNlc2lvbi4nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YShkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShkYXRhLmpzb24oKSkpO1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVFeHRlbnNpb24ubmF2aWdhdGUoWycvbG9naW4nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=