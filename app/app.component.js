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
        this.Info = {
            token: "",
            correo: "",
            sistema: ""
        };
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
                //console.log("Title: " + message.title);
                //console.log("Body: " + message.body);
                // if your server passed a custom property called 'foo', then do this:
                //console.log("Value of 'foo': " + message.data.foo);
                dialogs_1.alert("Message " + message.title + message.body);
            }
        }).then(function (instance) {
            //console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        firebase.getCurrentPushToken().then(function (token) {
            // may be null if not known yet
            //console.log("Current push token: " + token);
            _this.loading.display(true);
            _this.PostRegistroDispositivo(token);
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
                dialogs_1.alert("Message received!\n" + JSON.stringify(message));
            },
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                dialogs_1.alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
            }
        };
        pushPlugin.register(settingsDevice, function (token) {
            //console.log("Device registered. Access token: " + token);
            //console.log("Platform: " + platformModule.device.os);
            if (platformModule.device.os == "iOS") {
                // Register the interactive settings
                if (settingsDevice.interactiveSettings) {
                    pushPlugin.registerUserNotificationSettings(function () {
                        //console.log('Successfully registered for interactive push.');
                    }, function (err) {
                        console.log('Error registering for interactive push: ' + JSON.stringify(err));
                    });
                }
            }
        }, function (errorMessage) {
            dialogs_1.alert("Device NOT registered! " + JSON.stringify(errorMessage));
        });
    };
    //POST REGISTRO DISPOSITIVO
    AppComponent.prototype.PostRegistroDispositivo = function (token) {
        var _this = this;
        //console.log("<------ REGISTRAR DEVICE --------->");
        //console.log("<<<<<<<<<<<<<TOKEN DEVICE -> ", token);
        this.Info.token = token;
        this.Info.sistema = platformModule.device.os;
        this.Info.correo = this.session.getCorreoColaborador();
        //console.log("<<<<<<<<<<<<DATA ENVIO DISPOSITIVO>>>>>>>>>>>>>>>", JSON.stringify(this.Info));
        this.API.postNoAuth(this.Info, "api/Dispositivos/Agregar").subscribe(function (res) {
            _this.loading.display(false);
            // dialogs.alert({
            //     title: "AVISO",
            //     message: "Dispositivo agregado exitosamente",
            //     okButtonText: "Ok"
            // }).then(() => {
            // });
        }, function (error) {
            console.log("ERROR AL REGISTRAR DISPOSITIVO");
            console.log(error);
            _this.loading.display(false);
        });
    };
    //END POST
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBQ3pFLDhFQUE0RTtBQUM1RSwyRUFBeUU7QUFFekUsb0NBQXNDO0FBQ3RDLG1GQUFpRjtBQUNqRiwwREFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELHNDQUFtQztBQUNuQyxpQ0FBbUM7QUFDbkMsMkNBQXNGO0FBQ3RGLHVEQUF5QztBQUN6QywwQ0FBZ0Q7QUFFaEQsc0RBQTREO0FBRTVELDREQUE4RDtBQUU5RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU96RDtJQVFJLHNCQUFvQixHQUFxQixFQUFVLEtBQW1CLEVBQVUsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQyxFQUFVLE9BQXVCLEVBQVUsR0FBc0I7UUFBbFIsaUJBZ0NDO1FBaENtQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTjFRLGNBQVMsR0FBRyw2REFBNkQsQ0FBQztRQUMzRSxTQUFJLEdBQVE7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFD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cmVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE15SHR0cFB1dFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLXB1dC9odHRwLXB1dC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbi8vIGltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBleGl0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1leGl0XCI7XHJcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1V0aWxzXCI7XHJcblxyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgcHVzaFBsdWdpbiBmcm9tIFwibmF0aXZlc2NyaXB0LXB1c2gtbm90aWZpY2F0aW9uc1wiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1Nlc3Npb25TZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlLCBMb2FkaW5nU2VydmljZSwgTXlIdHRwUG9zdFNlcnZpY2UsIFV0aWxzU2VydmljZSwgTXlIdHRwUHV0U2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgcHVibGljIEluZm86IGFueSA9IHtcclxuICAgICAgICB0b2tlbjogXCJcIixcclxuICAgICAgICBjb3JyZW86IFwiXCIsXHJcbiAgICAgICAgc2lzdGVtYTogXCJcIlxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgUFVUOiBNeUh0dHBQdXRTZXJ2aWNlLCBwcml2YXRlIHV0aWxzOiBVdGlsc1NlcnZpY2UgLHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvYWRpbmc6IExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIEFQSTogTXlIdHRwUG9zdFNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldFVSTCh0aGlzLnNlcnZlclVybCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLkdldFRhbG9uYXJpb3MoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGh0dHAuZ2V0SW1hZ2UoXCJodHRwczovL3NvcnRlb2FuYWh1YWMubXgvYXBwL2Jhbm5lcl8xLmpwZ1wiKS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PSAnQW5kcm9pZCcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCk7ICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQodGhpcy5pbWFnZW5QdWJsaWNpZGFkKTsgICAgICAgICAgXHJcbiAgICAgICAgfSwgKGVycikgPT4geyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tXFxuRXJyb3IgZW4gbGEgaW1hZ2VuIGRlIHB1YmxpY2lkYWRcXG4tLS0tLS0tLS0tXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnV0aWxzLkFjdHVhbGl6YXJUYWxvbmFyaW9zVG9rZW4oKTtcclxuICAgICAgICBpZihwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MgPT0gJ0FuZHJvaWQnKXtcclxuICAgICAgICAgICAgYXBwLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi9cIiwgdHJ1ZSkgfHwgdGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCIvdGFsb25hcmlvc1wiLCB0cnVlKSB8fCB0aGlzLnJvdXRlci5pc0FjdGl2ZShcIlwiLCB0cnVlKSB8fCB0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi9sb2dpblwiLCB0cnVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLCv0Rlc2VhcyBzYWxpciBkZSBsYSBhcGxpY2FjacOzbj9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTk9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVGl0bGU6IFwiICsgbWVzc2FnZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQm9keTogXCIgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgeW91ciBzZXJ2ZXIgcGFzc2VkIGEgY3VzdG9tIHByb3BlcnR5IGNhbGxlZCAnZm9vJywgdGhlbiBkbyB0aGlzOlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlZhbHVlIG9mICdmb28nOiBcIiArIG1lc3NhZ2UuZGF0YS5mb28pO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNZXNzYWdlIFwiICsgbWVzc2FnZS50aXRsZSArIG1lc3NhZ2UuYm9keSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4geyAgIFxyXG4gICAgICAgICAgICAvLyBtYXkgYmUgbnVsbCBpZiBub3Qga25vd24geWV0XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDdXJyZW50IHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5Qb3N0UmVnaXN0cm9EaXNwb3NpdGl2byh0b2tlbik7XHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICBjb25zdCBzZXR0aW5nc0RldmljZSA9IHtcclxuICAgICAgICAgICAgc2VuZGVySUQ6IFwiODcwOTk0Mjk4NDM4XCIsIC8vIFJlcXVpcmVkOiBzZXR0aW5nIHdpdGggdGhlIHNlbmRlci9wcm9qZWN0IG51bWJlclxyXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcclxuICAgICAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBzYW5kYm94OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ0NBTkNFTF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0ZvckRlZmF1bHRDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JNaW5pbWFsQ29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAoc3RyaW5naWZpZWREYXRhOiBTdHJpbmcsIGZjbU5vdGlmaWNhdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZmljYXRpb25Cb2R5ID0gZmNtTm90aWZpY2F0aW9uICYmIGZjbU5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk1lc3NhZ2UgcmVjZWl2ZWQhXFxuXCIgKyBub3RpZmljYXRpb25Cb2R5ICsgXCJcXG5cIiArIHN0cmluZ2lmaWVkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyKHNldHRpbmdzRGV2aWNlLCAodG9rZW46IFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQbGF0Zm9ybTogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYocGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zID09IFwiaU9TXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBpbnRlcmFjdGl2ZSBzZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgaWYoc2V0dGluZ3NEZXZpY2UuaW50ZXJhY3RpdmVTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXJVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgaW50ZXJhY3RpdmUgcHVzaC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWdpc3RlcmluZyBmb3IgaW50ZXJhY3RpdmUgcHVzaDogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRGV2aWNlIE5PVCByZWdpc3RlcmVkISBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUE9TVCBSRUdJU1RSTyBESVNQT1NJVElWT1xyXG4gICAgcHJpdmF0ZSBQb3N0UmVnaXN0cm9EaXNwb3NpdGl2byh0b2tlbikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCI8LS0tLS0tIFJFR0lTVFJBUiBERVZJQ0UgLS0tLS0tLS0tPlwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiPDw8PDw8PDw8PDw8PFRPS0VOIERFVklDRSAtPiBcIiwgdG9rZW4pO1xyXG4gICAgICAgIHRoaXMuSW5mby50b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIHRoaXMuSW5mby5zaXN0ZW1hID0gcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zO1xyXG4gICAgICAgIHRoaXMuSW5mby5jb3JyZW8gPSB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiPDw8PDw8PDw8PDw8REFUQSBFTlZJTyBESVNQT1NJVElWTz4+Pj4+Pj4+Pj4+Pj4+PlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLkluZm8pKTtcclxuICAgICAgICB0aGlzLkFQSS5wb3N0Tm9BdXRoKHRoaXMuSW5mbywgXCJhcGkvRGlzcG9zaXRpdm9zL0FncmVnYXJcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogXCJEaXNwb3NpdGl2byBhZ3JlZ2FkbyBleGl0b3NhbWVudGVcIixcclxuICAgICAgICAgICAgLy8gICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIC8vIH0pLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBSRUdJU1RSQVIgRElTUE9TSVRJVk9cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9FTkQgUE9TVFxyXG5cclxuICAgICAvL0dFVCBJTklDSU8gU0VTSU9OLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIEdldFRhbG9uYXJpb3MoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlICBcclxuICAgICAgICAgICAgLmdldERhdGFBdXRob3JpemF0aW9uKCdhcGkvQ29sYWJvcmFkb3IvR2V0Q29ycmVvLycgKyB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSArICcvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubW9zdHJhck1lbnNhamUoJ0Vycm9yJywgJ0ZhbGzDsyBhbCB0cmF0YXIgZGUgb2J0ZW5lciBsb3MgdGFsb25hcmlvcy4gRWwgdG9rZW4gZXhwaXJvIGZhdm9yIGRlIGluaWNpYXIgc2VzaW9uLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15R2V0U2VydmljZS5nZXRMb2dpbih7ZW1haWw6IHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW9Db2xhYm9yYWRvcigpLCBwYXNzd29yZDogdGhpcy5zZXNzaW9uLmdldFBhc3NDb2xhYm9yYWRvcigpfSwgXCJhcGkvQ29sYWJvcmFkb3IvXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRPS0VOIEVYUElSQURPXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIocmVzdWx0Lmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKHJlc3VsdC5qc29uKCkudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJZENvbGFib3JhZG9yKHJlc3VsdC5qc29uKCkuaWRlbnRpZmljYWRvcik7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnVXN1YXJpbyB5L28gY29udHJhc2XDsWEgaW5jb3JyZWN0b3MsIGZhdm9yIGRlIGluaWNpYXIgc2VzacOzbi4nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YShkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShkYXRhLmpzb24oKSkpO1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==