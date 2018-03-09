"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var app = require("application");
var application_1 = require("application");
var nativescript_exit_1 = require("nativescript-exit");
var platformModule = require("tns-core-modules/platform");
// import { Message } from "nativescript-plugin-firebase";
var dialogs_1 = require("ui/dialogs");
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
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (platformModule.device.os == 'Android') {
        var _this = this;
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
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            onMessageReceivedCallback: function (message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
                // if your server passed a custom property called 'foo', then do this:
                console.log("Value of 'foo': " + message.data.foo);
                dialogs_1.alert("Message Receivable: " + message.title + message.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFDekMsMERBQTREO0FBQzVELDBEQUEwRDtBQUMxRCxzQ0FBbUM7QUFFbkMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFPekQ7SUFFSSxzQkFBb0IsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQztRQUFySixpQkFxQkM7UUFyQm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNqSixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFHRCxJQUFJLENBQUMsUUFBUSxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCLEdBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxFQUFFLFVBQUMsR0FBRztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBeUM7Z0JBQ2xHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNaLEtBQUssRUFBQyxPQUFPO29CQUNiLE9BQU8sRUFBRSxnQ0FBZ0M7b0JBQ3pDLFlBQVksRUFBRSxJQUFJO29CQUNsQixnQkFBZ0IsRUFBRSxJQUFJO2lCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQkFDVixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUNQLHdCQUFJLEVBQUUsQ0FBQztvQkFDWCxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNWLGtGQUFrRjtZQUNsRiw2QkFBNkI7WUFDN0IseUJBQXlCLEVBQUUsVUFBUyxPQUFPO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsc0VBQXNFO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELGVBQUssQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRSxDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVE7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUM5QywrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFQSw0QkFBNEI7SUFDckIsb0NBQWEsR0FBckI7UUFBQSxpQkFVQztRQVRHLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsWUFBWTthQUNaLG9CQUFvQixDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDOUYsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxxRkFBcUYsQ0FBQyxDQUFDO1FBQ3hILENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLGdDQUFTLEdBQWpCLFVBQWtCLElBQW9CO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCwrQkFBK0I7SUFDbkMsQ0FBQztJQUVNLHFDQUFjLEdBQXJCLFVBQXVCLE1BQU0sRUFBRSxPQUFPO1FBQXRDLGlCQVNDO1FBUkcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOUZRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsaUNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNoRCxDQUFDO3lDQUcrQixpQ0FBYyxFQUFrQixlQUFNLEVBQXdCLG9DQUFnQixFQUEwQixvQ0FBZ0I7T0FGNUksWUFBWSxDQWdHeEI7SUFBRCxtQkFBQztDQUFBLEFBaEdELElBZ0dDO0FBaEdZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBleGl0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1leGl0XCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbi8vIGltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLkdldFRhbG9uYXJpb3MoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGh0dHAuZ2V0SW1hZ2UoXCJodHRwczovL3NvcnRlb2FuYWh1YWMubXgvYXBwL2Jhbm5lcl8xLmpwZ1wiKS50aGVuKChyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCk7IFxyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW1hZ2VuUHVibGljaWRhZCh0aGlzLmltYWdlblB1YmxpY2lkYWQpO1xyXG4gICAgICAgIH0sIChlcnIpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGlmKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PSAnQW5kcm9pZCcpe1xyXG4gICAgICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGVzZWFzIHNhbGlyIGRlIGxhIGFwbGljYWNpb24/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOT1wiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgICAgICAgICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaXRsZTogXCIgKyBtZXNzYWdlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9keTogXCIgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgeW91ciBzZXJ2ZXIgcGFzc2VkIGEgY3VzdG9tIHByb3BlcnR5IGNhbGxlZCAnZm9vJywgdGhlbiBkbyB0aGlzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWYWx1ZSBvZiAnZm9vJzogXCIgKyBtZXNzYWdlLmRhdGEuZm9vKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSBSZWNlaXZhYmxlOiBcIiArIG1lc3NhZ2UudGl0bGUgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4oKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAvLyBtYXkgYmUgbnVsbCBpZiBub3Qga25vd24geWV0XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgICAvL0dFVCBJTklDSU8gU0VTSU9OLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIEdldFRhbG9uYXJpb3MoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlICBcclxuICAgICAgICAgICAgLmdldERhdGFBdXRob3JpemF0aW9uKCdhcGkvQ29sYWJvcmFkb3IvR2V0Q29ycmVvLycgKyB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSArICcvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIGRlIG9idGVuZXIgbG9zIHRhbG9uYXJpb3MuIEVsIHRva2VuIGV4cGlybyBmYXZvciBkZSBpbmljaWFyIHNlc2lvbi4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6dGl0dWxvLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19
