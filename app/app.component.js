"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var http_post_services_1 = require("./services/http-post/http-post.services");
var http_put_services_1 = require("./services/http-put/http-put.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var platformModule = require("tns-core-modules/platform");
// import { Message } from "nativescript-plugin-firebase";
var dialogs_1 = require("ui/dialogs");
var app = require("application");
var application_1 = require("application");
var nativescript_exit_1 = require("nativescript-exit");
var Utils_1 = require("./services/Utils");
var loading_1 = require("./services/loading/loading");
var pushPlugin = require("nativescript-push-notifications");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = /** @class */ (function () {
    function AppComponent(PUT, utils, session, router, myGetService, routeExtension, loading, API) {
        var _this = this;
        this.PUT = PUT;
        this.utils = utils;
        this.session = session;
        this.router = router;
        this.myGetService = myGetService;
        this.routeExtension = routeExtension;
        this.loading = loading;
        this.API = API;
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
        this.tokenDevice = "";
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
        this.utils.ActualizarTalonariosToken();
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
                //console.log("Value of 'foo': " + message.data.foo);
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
            _this.tokenDevice = token;
            _this.session.setTokenDevice(_this.tokenDevice);
        });
        var settingsDevice = {
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
                console.log("CALLBACK IOS -------->" + JSON.stringify(message));
                dialogs_1.alert("Message received!\n" + JSON.stringify(message));
            },
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                dialogs_1.alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
            }
        };
        pushPlugin.register(settingsDevice, function (token) {
            console.log("Device registered. Access token: " + token);
            console.log("Platform: " + platformModule.device.os);
            if (platformModule.device.os == "iOS") {
                // Register the interactive settings
                if (settingsDevice.interactiveSettings) {
                    pushPlugin.registerUserNotificationSettings(function () {
                        console.log('Successfully registered for interactive push.');
                    }, function (err) {
                        console.log('Error registering for interactive push: ' + JSON.stringify(err));
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
                //console.log("TOKEN EXPIRADO");
                //console.dir(result.json());
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
            //console.log("Dialog closed!");
            _this.routeExtension.navigate(['/login'], { clearHistory: true });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            providers: [session_services_1.SessionService, http_get_services_1.MyHttpGetService, loading_1.LoadingService, http_post_services_1.MyHttpPostService, Utils_1.UtilsService, http_put_services_1.MyHttpPutService]
        }),
        __metadata("design:paramtypes", [http_put_services_1.MyHttpPutService, Utils_1.UtilsService, session_services_1.SessionService, router_1.Router, http_get_services_1.MyHttpGetService, router_extensions_1.RouterExtensions, loading_1.LoadingService, http_post_services_1.MyHttpPostService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBQ3pFLDhFQUE0RTtBQUM1RSwyRUFBeUU7QUFFekUsb0NBQXNDO0FBQ3RDLG1GQUFpRjtBQUNqRiwwREFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELHNDQUFtQztBQUNuQyxpQ0FBbUM7QUFDbkMsMkNBQXNGO0FBQ3RGLHVEQUF5QztBQUN6QywwQ0FBZ0Q7QUFFaEQsc0RBQTREO0FBRTVELDREQUE4RDtBQUU5RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU96RDtJQUlJLHNCQUFvQixHQUFxQixFQUFVLEtBQW1CLEVBQVUsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQyxFQUFVLE9BQXVCLEVBQVUsR0FBc0I7UUFBbFIsaUJBZ0NDO1FBaENtQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRjFRLGNBQVMsR0FBRyw2REFBNkQsQ0FBQztRQUMzRSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsT0FBTyxDQUFD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O1lBQ2hDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsTFEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBYyxFQUFFLG9DQUFnQixFQUFFLHdCQUFjLEVBQUUsc0NBQWlCLEVBQUUsb0JBQVksRUFBRSxvQ0FBZ0IsQ0FBRTtTQUNwSCxDQUFDO3lDQUsyQixvQ0FBZ0IsRUFBaUIsb0JBQVksRUFBbUIsaUNBQWMsRUFBa0IsZUFBTSxFQUF3QixvQ0FBZ0IsRUFBMEIsb0NBQWdCLEVBQW1CLHdCQUFjLEVBQWUsc0NBQWlCO09BSnpRLFlBQVksQ0FvTHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBMRCxJQW9MQztBQXBMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE15SHR0cFB1dFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLXB1dC9odHRwLXB1dC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbi8vIGltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBleGl0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1leGl0XCI7XHJcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1V0aWxzXCI7XHJcblxyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgcHVzaFBsdWdpbiBmcm9tIFwibmF0aXZlc2NyaXB0LXB1c2gtbm90aWZpY2F0aW9uc1wiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1Nlc3Npb25TZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlLCBMb2FkaW5nU2VydmljZSwgTXlIdHRwUG9zdFNlcnZpY2UsIFV0aWxzU2VydmljZSwgTXlIdHRwUHV0U2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgcHVibGljIHRva2VuRGV2aWNlOiBTdHJpbmcgPSBcIlwiO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBQVVQ6IE15SHR0cFB1dFNlcnZpY2UsIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSAscHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgcm91dGVFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgQVBJOiBNeUh0dHBQb3N0U2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0VVJMKHRoaXMuc2VydmVyVXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbi5sb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR2V0VGFsb25hcmlvcygpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNlc3Npb24uZ2V0Rmlyc3RSdW4oKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaHR0cC5nZXRJbWFnZShcImh0dHBzOi8vc29ydGVvYW5haHVhYy5teC9hcHAvYmFubmVyXzEuanBnXCIpLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgaWYocGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zID09ICdBbmRyb2lkJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpZGFkID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIrIHIudG9CYXNlNjRTdHJpbmcoKTsgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpZGFkID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMubXgvYXBwL2Jhbm5lcl8xLmpwZ1wiO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW1hZ2VuUHVibGljaWRhZCh0aGlzLmltYWdlblB1YmxpY2lkYWQpOyAgICAgICAgICBcclxuICAgICAgICB9LCAoZXJyKSA9PiB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1cXG5FcnJvciBlbiBsYSBpbWFnZW4gZGUgcHVibGljaWRhZFxcbi0tLS0tLS0tLS1cIik7ICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMudXRpbHMuQWN0dWFsaXphclRhbG9uYXJpb3NUb2tlbigpO1xyXG4gICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PSAnQW5kcm9pZCcpe1xyXG4gICAgICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucm91dGVyLmlzQWN0aXZlKFwiL1wiLCB0cnVlKSB8fCB0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi90YWxvbmFyaW9zXCIsIHRydWUpIHx8IHRoaXMucm91dGVyLmlzQWN0aXZlKFwiXCIsIHRydWUpIHx8IHRoaXMucm91dGVyLmlzQWN0aXZlKFwiL2xvZ2luXCIsIHRydWUpKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIsK/RGVzZWFzIHNhbGlyIGRlIGxhIGFwbGljYWNpw7NuP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU0lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOT1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGl0bGU6IFwiICsgbWVzc2FnZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJvZHk6IFwiICsgbWVzc2FnZS5ib2R5KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ2ZvbycsIHRoZW4gZG8gdGhpczpcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJWYWx1ZSBvZiAnZm9vJzogXCIgKyBtZXNzYWdlLmRhdGEuZm9vKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSBcIiArIG1lc3NhZ2UudGl0bGUgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7ICAgXHJcbiAgICAgICAgICAgIC8vIG1heSBiZSBudWxsIGlmIG5vdCBrbm93biB5ZXRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuRGV2aWNlID0gdG9rZW47XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbkRldmljZSh0aGlzLnRva2VuRGV2aWNlKTtcclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzRGV2aWNlID0ge1xyXG4gICAgICAgICAgICBzZW5kZXJJRDogXCI4NzA5OTQyOTg0MzhcIiwgLy8gUmVxdWlyZWQ6IHNldHRpbmcgd2l0aCB0aGUgc2VuZGVyL3Byb2plY3QgbnVtYmVyXHJcbiAgICAgICAgICAgIGJhZGdlOiB0cnVlLFxyXG4gICAgICAgICAgICBzb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgYWxlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNhbmRib3g6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfSURFTlRJRklFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZWFkJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0aW9uTW9kZTogXCJmb3JlZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnQ0FOQ0VMX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0aW9uTW9kZTogXCJmb3JlZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0NBVEVHT1JZJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zRm9yRGVmYXVsdENvbnRleHQ6IFsnUkVBRF9JREVOVElGSUVSJywgJ0NBTkNFTF9JREVOVElGSUVSJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQUxMQkFDSyBJT1MgLS0tLS0tLS0+XCIrSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNZXNzYWdlIHJlY2VpdmVkIVxcblwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQ6IChzdHJpbmdpZmllZERhdGE6IFN0cmluZywgZmNtTm90aWZpY2F0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkJvZHkgPSBmY21Ob3RpZmljYXRpb24gJiYgZmNtTm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXIoc2V0dGluZ3NEZXZpY2UsICh0b2tlbjogU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxhdGZvcm06IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PSBcImlPU1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciB0aGUgaW50ZXJhY3RpdmUgc2V0dGluZ3NcclxuICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzRGV2aWNlLmludGVyYWN0aXZlU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyVXNlck5vdGlmaWNhdGlvblNldHRpbmdzKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIGZvciBpbnRlcmFjdGl2ZSBwdXNoLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJlZ2lzdGVyaW5nIGZvciBpbnRlcmFjdGl2ZSBwdXNoOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJEZXZpY2UgTk9UIHJlZ2lzdGVyZWQhIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgIC8vR0VUIElOSUNJTyBTRVNJT04tLS0tLS0tLT5cclxuICAgIHByaXZhdGUgR2V0VGFsb25hcmlvcygpIHtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2UgIFxyXG4gICAgICAgICAgICAuZ2V0RGF0YUF1dGhvcml6YXRpb24oJ2FwaS9Db2xhYm9yYWRvci9HZXRDb3JyZW8vJyArIHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW9Db2xhYm9yYWRvcigpICsgJy8nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBkZSBvYnRlbmVyIGxvcyB0YWxvbmFyaW9zLiBFbCB0b2tlbiBleHBpcm8gZmF2b3IgZGUgaW5pY2lhciBzZXNpb24uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlLmdldExvZ2luKHtlbWFpbDogdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCksIHBhc3N3b3JkOiB0aGlzLnNlc3Npb24uZ2V0UGFzc0NvbGFib3JhZG9yKCl9LCBcImFwaS9Db2xhYm9yYWRvci9cIiArIHBsYXRmb3JtTW9kdWxlLmRldmljZS51dWlkKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVE9LRU4gRVhQSVJBRE9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmRpcihyZXN1bHQuanNvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4ocmVzdWx0Lmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldElkQ29sYWJvcmFkb3IocmVzdWx0Lmpzb24oKS5pZGVudGlmaWNhZG9yKTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdVc3VhcmlvIHkvbyBjb250cmFzZcOxYSBpbmNvcnJlY3RvcywgZmF2b3IgZGUgaW5pY2lhciBzZXNpw7NuLicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhKGRhdGE6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19
