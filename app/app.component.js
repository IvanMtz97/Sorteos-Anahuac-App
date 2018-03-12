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
        this.loading = loading;
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
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
            if (platformModule.device.os == 'Android') {
                _this.imagenPublicidad = "data:image/png;base64," + r.toBase64String();
            }
            else {
                _this.imagenPublicidad = "https://sorteoanahuac.mx/app/banner_1.jpg";
            }
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
                        message: "¿Deseas salir de la aplicación?",
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
            senderID: "870994298438",
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
            console.log("Platform: " + platformModule.device.os);
            if (platformModule.device.os == "iOS") {
                // Register the interactive settings
                if (iosSettings.interactiveSettings) {
                    pushPlugin.registerUserNotificationSettings(function () {
                        dialogs_1.alert('Successfully registered for interactive push.');
                    }, function (err) {
                        dialogs_1.alert('Error registering for interactive push: ' + JSON.stringify(err));
                    });
                }
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
                _this.mostrarMensaje('Error', 'Usuario y/o contraseña incorrectos, favor de iniciar sesión.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsMERBQTREO0FBQzVELDBEQUEwRDtBQUMxRCxzQ0FBbUM7QUFDbkMsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFFekMsc0RBQTREO0FBRTVELDREQUE4RDtBQUU5RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU96RDtJQUdJLHNCQUFvQixPQUF1QixFQUFVLE1BQWMsRUFBVSxZQUE4QixFQUFVLGNBQWdDLEVBQVUsT0FBdUI7UUFBdEwsaUJBZ0NDO1FBaENtQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUQ5SyxjQUFTLEdBQUcsNkRBQTZELENBQUM7UUFFOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdB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aEUsQ0FBQzt5Q0FJK0IsaUNBQWMsRUFBa0IsZUFBTSxFQUF3QixvQ0FBZ0IsRUFBMEIsb0NBQWdCLEVBQW1CLHdCQUFjO09BSDdLLFlBQVksQ0E4S3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTlLRCxJQThLQztBQTlLWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG4vLyBpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgZXhpdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZXhpdFwiO1xyXG5cclxuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcclxuXHJcbmltcG9ydCAqIGFzIHB1c2hQbHVnaW4gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtTZXNzaW9uU2VydmljZSwgTXlIdHRwR2V0U2VydmljZSwgTG9hZGluZ1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgcm91dGVFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldFVSTCh0aGlzLnNlcnZlclVybCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLkdldFRhbG9uYXJpb3MoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGh0dHAuZ2V0SW1hZ2UoXCJodHRwczovL3NvcnRlb2FuYWh1YWMubXgvYXBwL2Jhbm5lcl8xLmpwZ1wiKS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PSAnQW5kcm9pZCcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCk7ICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQodGhpcy5pbWFnZW5QdWJsaWNpZGFkKTsgICAgICAgICAgXHJcbiAgICAgICAgfSwgKGVycikgPT4geyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tXFxuRXJyb3IgZW4gbGEgaW1hZ2VuIGRlIHB1YmxpY2lkYWRcXG4tLS0tLS0tLS0tXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MgPT0gJ0FuZHJvaWQnKXtcclxuICAgICAgICAgICAgYXBwLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi9cIiwgdHJ1ZSkgfHwgdGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCIvdGFsb25hcmlvc1wiLCB0cnVlKSB8fCB0aGlzLnJvdXRlci5pc0FjdGl2ZShcIlwiLCB0cnVlKSB8fCB0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi9sb2dpblwiLCB0cnVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLCv0Rlc2VhcyBzYWxpciBkZSBsYSBhcGxpY2FjacOzbj9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTk9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGl0bGU6IFwiICsgbWVzc2FnZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJvZHk6IFwiICsgbWVzc2FnZS5ib2R5KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ2ZvbycsIHRoZW4gZG8gdGhpczpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmFsdWUgb2YgJ2Zvbyc6IFwiICsgbWVzc2FnZS5kYXRhLmZvbyk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk1lc3NhZ2UgXCIgKyBtZXNzYWdlLnRpdGxlICsgbWVzc2FnZS5ib2R5KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4oKHRva2VuOiBzdHJpbmcpID0+IHsgICBcclxuICAgICAgICAgICAgICAvLyBtYXkgYmUgbnVsbCBpZiBub3Qga25vd24geWV0XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICBjb25zdCBpb3NTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgc2VuZGVySUQ6IFwiODcwOTk0Mjk4NDM4XCIsIC8vIFJlcXVpcmVkOiBzZXR0aW5nIHdpdGggdGhlIHNlbmRlci9wcm9qZWN0IG51bWJlclxyXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcclxuICAgICAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBzYW5kYm94OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ0NBTkNFTF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0ZvckRlZmF1bHRDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JNaW5pbWFsQ29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAoc3RyaW5naWZpZWREYXRhOiBTdHJpbmcsIGZjbU5vdGlmaWNhdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZmljYXRpb25Cb2R5ID0gZmNtTm90aWZpY2F0aW9uICYmIGZjbU5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk1lc3NhZ2UgcmVjZWl2ZWQhXFxuXCIgKyBub3RpZmljYXRpb25Cb2R5ICsgXCJcXG5cIiArIHN0cmluZ2lmaWVkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyKGlvc1NldHRpbmdzLCAodG9rZW46IFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSByZWdpc3RlcmVkLiBBY2Nlc3MgdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXRmb3JtOiBcIiArIHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MgPT0gXCJpT1NcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIGludGVyYWN0aXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICBpZihpb3NTZXR0aW5ncy5pbnRlcmFjdGl2ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVzaFBsdWdpbi5yZWdpc3RlclVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgaW50ZXJhY3RpdmUgcHVzaC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvciByZWdpc3RlcmluZyBmb3IgaW50ZXJhY3RpdmUgcHVzaDogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRGV2aWNlIE5PVCByZWdpc3RlcmVkISBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAvL0dFVCBJTklDSU8gU0VTSU9OLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIEdldFRhbG9uYXJpb3MoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlICBcclxuICAgICAgICAgICAgLmdldERhdGFBdXRob3JpemF0aW9uKCdhcGkvQ29sYWJvcmFkb3IvR2V0Q29ycmVvLycgKyB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSArICcvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubW9zdHJhck1lbnNhamUoJ0Vycm9yJywgJ0ZhbGzDsyBhbCB0cmF0YXIgZGUgb2J0ZW5lciBsb3MgdGFsb25hcmlvcy4gRWwgdG9rZW4gZXhwaXJvIGZhdm9yIGRlIGluaWNpYXIgc2VzaW9uLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15R2V0U2VydmljZS5nZXRMb2dpbih7ZW1haWw6IHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW9Db2xhYm9yYWRvcigpLCBwYXNzd29yZDogdGhpcy5zZXNzaW9uLmdldFBhc3NDb2xhYm9yYWRvcigpfSwgXCJhcGkvQ29sYWJvcmFkb3IvXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUT0tFTiBFWFBJUkFET1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4ocmVzdWx0Lmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldElkQ29sYWJvcmFkb3IocmVzdWx0Lmpzb24oKS5pZGVudGlmaWNhZG9yKTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdVc3VhcmlvIHkvbyBjb250cmFzZcOxYSBpbmNvcnJlY3RvcywgZmF2b3IgZGUgaW5pY2lhciBzZXNpw7NuLicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhKGRhdGE6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==