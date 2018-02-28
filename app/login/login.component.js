"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var http_get_services_1 = require("../services/http-get/http-get.services");
var session_services_1 = require("../services/session/session.services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.Correo = "";
        this.Clave = "";
        this.nextLibAvailable = false;
        this.avisoPrivacidad = "http://www.sorteoanahuac.mx/aviso-de-privacidad.pdf";
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.session.loggedIn()) {
            this.session.setLoggedIn(false);
        }
        this.SorteoActivo();
    };
    //GET INICIO SESION-------->
    LoginComponent.prototype.IniciarSesion = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador')
            .subscribe(function (result) {
            console.log("RESULTADO RESPUESTA -----> ", result);
            _this.onGetDataSesion(result);
        }, function (error) {
            console.log("INICIAR SESION", error);
            //this.loader.display(false);
            _this.mostrarMensaje('Autenticación', 'Usuario o contraseña invalidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
        });
    };
    LoginComponent.prototype.onGetDataSesion = function (data) {
        this.setInfo(data);
    };
    //END GET --------->
    //GET SORTEO -------->
    LoginComponent.prototype.SorteoActivo = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getData('api/Sorteo/Activo')
            .subscribe(function (result) {
            _this.session.setSorteoActivo(JSON.stringify(result.json()));
            _this.session.setPoliticas(JSON.stringify(result.json().url_terminos));
            _this.session.setReglamento(JSON.stringify(result.json().url_aviso));
            _this.session.setAceptacionTalonarios(JSON.stringify(result.json().url_tips));
            _this.session.setGanadores(JSON.stringify(result.json().ganadores));
            _this.session.setConoceSorteo(JSON.stringify(result.json().url_conoce));
        }, function (error) {
            //this.loader.display(false);
            _this.mostrarMensaje('Error', 'Falló al tratar obtener el sorteo activo.');
        });
    };
    //END GET --------->
    LoginComponent.prototype.setInfo = function (data) {
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
        this.session.setToken(data.json().token);
        this.session.setIdColaborador(data.json().identificador);
        if (this.session.getFirstRun() == true) {
            this.router.navigate(["privacidad"], { clearHistory: true });
        }
        else {
            this.router.navigate(["talonarios"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.Avisos = function () {
        utils.openUrl(this.avisoPrivacidad);
    };
    LoginComponent.prototype.ConoceSorteo = function () {
        this.router.navigate(["conocesorteo"]);
    };
    LoginComponent.prototype.ListaGanadores = function () {
        console.log("LISTA DE GANADORES");
        this.router.navigate(["ganadores"]);
    };
    LoginComponent.prototype.handleCorreoChange = function (evt) {
        var txtCorreo = evt.object;
        this.Correo = txtCorreo.text;
    };
    LoginComponent.prototype.handlePasswordChange = function (evt) {
        var txtClave = evt.object;
        this.Clave = txtClave.text;
    };
    LoginComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.Correo.length == 0 || this.Clave.length == 0) {
            dialogs.alert({
                title: "Aviso",
                message: "Debes llenar todos los campos.",
                okButtonText: "Ok"
            });
        }
        else {
            this.IniciarSesion();
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            providers: [http_get_services_1.MyHttpGetService, session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_extensions_1.RouterExtensions, http_get_services_1.MyHttpGetService, session_services_1.SessionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsbUNBQXFDO0FBQ3JDLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBUWpGO0lBTUksd0JBQVksSUFBVSxFQUFVLE1BQXdCLEVBQVUsWUFBOEIsRUFBVSxPQUF1QjtRQUFqRyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTDFILFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsb0JBQWUsR0FBVyxxREFBcUQsQ0FBQztRQUduRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsNEJBQTRCO0lBQ3BCLHNDQUFhLEdBQXJCO1FBQUEsaUJBWUM7UUFYRyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFlBQVk7YUFDWixRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLGlCQUFpQixDQUFDO2FBQ3pFLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLG1IQUFtSCxDQUFDLENBQUM7UUFDOUosQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sd0NBQWUsR0FBdkIsVUFBd0IsSUFBb0I7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0JBQW9CO0lBRXBCLHNCQUFzQjtJQUNkLHFDQUFZLEdBQXBCO1FBQUEsaUJBZUM7UUFkRyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFlBQVk7YUFDWixPQUFPLENBQUMsbUJBQW1CLENBQUM7YUFDNUIsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdFLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRSxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsb0JBQW9CO0lBRWIsZ0NBQU8sR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUNNLCtCQUFNLEdBQWI7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHVDQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLEdBQUc7UUFDekIsSUFBSSxTQUFTLEdBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVNLDZDQUFvQixHQUEzQixVQUE0QixHQUFHO1FBQzNCLElBQUksUUFBUSxHQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFTSx1Q0FBYyxHQUFyQixVQUF1QixNQUFNLEVBQUUsT0FBTztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBNUdRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLENBQUM7U0FDaEQsQ0FBQzt5Q0FPb0IsV0FBSSxFQUFrQixvQ0FBZ0IsRUFBd0Isb0NBQWdCLEVBQW1CLGlDQUFjO09BTnhILGNBQWMsQ0E2RzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdHRCxJQTZHQztBQTdHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBDb3JyZW86IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgQ2xhdmU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgbmV4dExpYkF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGF2aXNvUHJpdmFjaWRhZDogc3RyaW5nID0gXCJodHRwOi8vd3d3LnNvcnRlb2FuYWh1YWMubXgvYXZpc28tZGUtcHJpdmFjaWRhZC5wZGZcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHsgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKGZhbHNlKTsgfVxyXG4gICAgICAgIHRoaXMuU29ydGVvQWN0aXZvKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vR0VUIElOSUNJTyBTRVNJT04tLS0tLS0tLT5cclxuICAgIHByaXZhdGUgSW5pY2lhclNlc2lvbigpIHtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldExvZ2luKHsgZW1haWw6IHRoaXMuQ29ycmVvLCBwYXNzd29yZDogdGhpcy5DbGF2ZSB9LCAnYXBpL0NvbGFib3JhZG9yJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1VMVEFETyBSRVNQVUVTVEEgLS0tLS0+IFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGFTZXNpb24ocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOSUNJQVIgU0VTSU9OXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdBdXRlbnRpY2FjacOzbicsICdVc3VhcmlvIG8gY29udHJhc2XDsWEgaW52YWxpZG9zLiBSZWN1ZXJkYSBxdWUgZXN0YSBhcGxpY2FjacOzbiBlcyDDum5pY2FtZW50ZSBwYXJhIGNvbGFib3JhZG9yZXMgZGUgU29ydGVvcyBBbsOhaHVhYy4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGFTZXNpb24oZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNldEluZm8oZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxyXG5cclxuICAgIC8vR0VUIFNPUlRFTyAtLS0tLS0tLT5cclxuICAgIHByaXZhdGUgU29ydGVvQWN0aXZvKCkge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0RGF0YSgnYXBpL1NvcnRlby9BY3Rpdm8nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRTb3J0ZW9BY3Rpdm8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFBvbGl0aWNhcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF90ZXJtaW5vcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFJlZ2xhbWVudG8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfYXZpc28pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRBY2VwdGFjaW9uVGFsb25hcmlvcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF90aXBzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0R2FuYWRvcmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkuZ2FuYWRvcmVzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ub2NlU29ydGVvKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2Nvbm9jZSkpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIG9idGVuZXIgZWwgc29ydGVvIGFjdGl2by4nKTsgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vRU5EIEdFVCAtLS0tLS0tLS0+XHJcblxyXG4gICAgcHVibGljIHNldEluZm8oZGF0YSkgeyBcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldElkQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuaWRlbnRpZmljYWRvcik7XHJcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQXZpc29zKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwodGhpcy5hdmlzb1ByaXZhY2lkYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDb25vY2VTb3J0ZW8oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29ub2Nlc29ydGVvXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTGlzdGFHYW5hZG9yZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMSVNUQSBERSBHQU5BRE9SRVNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ2FuYWRvcmVzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQ29ycmVvQ2hhbmdlKGV2dCl7ICAgIFxyXG4gICAgICAgIGxldCB0eHRDb3JyZW8gPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuQ29ycmVvID0gdHh0Q29ycmVvLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGV2dCl7XHJcbiAgICAgICAgbGV0IHR4dENsYXZlID0gPFRleHRGaWVsZD4gZXZ0Lm9iamVjdDtcclxuICAgICAgICB0aGlzLkNsYXZlID0gdHh0Q2xhdmUudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVudHJhcigpIHtcclxuICAgICAgICBpZih0aGlzLkNvcnJlby5sZW5ndGggPT0gMCB8fCB0aGlzLkNsYXZlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBdmlzb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcy5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkluaWNpYXJTZXNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19