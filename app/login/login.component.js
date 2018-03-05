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
        page.actionBarHidden = true;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
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
            _this.session.setPoliticas(JSON.stringify(result.json().url_politicas));
            _this.session.setReglamento(JSON.stringify(result.json().url_reglamento));
            _this.session.setAceptacionTalonarios(JSON.stringify(result.json().url_aceptacion));
            _this.session.setGanadores(JSON.stringify(result.json().url_lista_ganadores));
            _this.session.setConoceSorteo(JSON.stringify(result.json().url_conoce));
            _this.session.setCondiciones(JSON.stringify(result.json().url_condiciones));
        }, function (error) {
            //this.loader.display(false);
            _this.mostrarMensaje('Error', 'Falló al tratar obtener el sorteo activo.');
        });
        this.politicas = this.session.getPoliticas();
        this.condiciones = this.session.getCondiciones();
    };
    //END GET --------->
    LoginComponent.prototype.setInfo = function (data) {
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
        this.session.setToken(data.json().token);
        this.session.setIdColaborador(data.json().identificador);
        this.session.setCorreoColaborador(data.json().correo);
        if (this.session.getFirstRun() == true) {
            this.router.navigate(["privacidad"], { clearHistory: true });
        }
        else {
            this.router.navigate(["talonarios"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.Politicas = function () {
        utils.openUrl(JSON.parse(this.politicas));
        console.log("this.politicas -> " + this.politicas);
    };
    LoginComponent.prototype.Condiciones = function () {
        utils.openUrl(JSON.parse(this.condiciones));
        console.log("this.condiciones -> " + this.condiciones);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBUWpGO0lBUUksd0JBQVksSUFBVSxFQUFVLE1BQXdCLEVBQVUsWUFBOEIsRUFBVSxPQUF1QjtRQUFqRyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBUDFILFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFNckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsNEJBQTRCO0lBQ3BCLHNDQUFhLEdBQXJCO1FBQUEsaUJBWUM7UUFYRyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFlBQVk7YUFDWixRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFB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LENBQUMsb0NBQWdCLEVBQUUsaUNBQWMsQ0FBQztTQUNoRCxDQUFDO3lDQVNvQixXQUFJLEVBQWtCLG9DQUFnQixFQUF3QixvQ0FBZ0IsRUFBbUIsaUNBQWM7T0FSeEgsY0FBYyxDQXlIMUI7SUFBRCxxQkFBQztDQUFBLEFBekhELElBeUhDO0FBekhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBDb3JyZW86IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgQ2xhdmU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgbmV4dExpYkF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBwb2xpdGljYXM6IHN0cmluZztcclxuICAgIHByaXZhdGUgY29uZGljaW9uZXM6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyBcclxuICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHsgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKGZhbHNlKTsgfVxyXG4gICAgICAgIHRoaXMuU29ydGVvQWN0aXZvKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBJbmljaWFyU2VzaW9uKCkge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0TG9naW4oeyBlbWFpbDogdGhpcy5Db3JyZW8sIHBhc3N3b3JkOiB0aGlzLkNsYXZlIH0sICdhcGkvQ29sYWJvcmFkb3InKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUQURPIFJFU1BVRVNUQSAtLS0tLT4gXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YVNlc2lvbihyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5JQ0lBUiBTRVNJT05cIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0F1dGVudGljYWNpw7NuJywgJ1VzdWFyaW8gbyBjb250cmFzZcOxYSBpbnZhbGlkb3MuIFJlY3VlcmRhIHF1ZSBlc3RhIGFwbGljYWNpw7NuIGVzIMO6bmljYW1lbnRlIHBhcmEgY29sYWJvcmFkb3JlcyBkZSBTb3J0ZW9zIEFuw6FodWFjLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YVNlc2lvbihkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5mbyhkYXRhKTtcclxuICAgIH1cclxuICAgIC8vRU5EIEdFVCAtLS0tLS0tLS0+XHJcblxyXG4gICAgLy9HRVQgU09SVEVPIC0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBTb3J0ZW9BY3Rpdm8oKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXREYXRhKCdhcGkvU29ydGVvL0FjdGl2bycpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFNvcnRlb0FjdGl2byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0UG9saXRpY2FzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX3BvbGl0aWNhcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFJlZ2xhbWVudG8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfcmVnbGFtZW50bykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2FjZXB0YWNpb24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRHYW5hZG9yZXMoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfbGlzdGFfZ2FuYWRvcmVzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ub2NlU29ydGVvKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2Nvbm9jZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvbmRpY2lvbmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2NvbmRpY2lvbmVzKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIG9idGVuZXIgZWwgc29ydGVvIGFjdGl2by4nKTsgIFxyXG4gICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9saXRpY2FzID0gdGhpcy5zZXNzaW9uLmdldFBvbGl0aWNhcygpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb25kaWNpb25lcyA9IHRoaXMuc2Vzc2lvbi5nZXRDb25kaWNpb25lcygpOyAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9FTkQgR0VUIC0tLS0tLS0tLT5cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5mbyhkYXRhKSB7IFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbih0cnVlKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpOyAgXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKGRhdGEuanNvbigpLnRva2VuKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SWRDb2xhYm9yYWRvcihkYXRhLmpzb24oKS5pZGVudGlmaWNhZG9yKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ycmVvQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuY29ycmVvKVxyXG4gICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvbGl0aWNhcygpIHsgICAgICAgIFxyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoSlNPTi5wYXJzZSh0aGlzLnBvbGl0aWNhcykpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucG9saXRpY2FzIC0+IFwiICsgdGhpcy5wb2xpdGljYXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENvbmRpY2lvbmVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgdXRpbHMub3BlblVybChKU09OLnBhcnNlKHRoaXMuY29uZGljaW9uZXMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY29uZGljaW9uZXMgLT4gXCIgKyB0aGlzLmNvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBDb25vY2VTb3J0ZW8oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29ub2Nlc29ydGVvXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTGlzdGFHYW5hZG9yZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMSVNUQSBERSBHQU5BRE9SRVNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ2FuYWRvcmVzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQ29ycmVvQ2hhbmdlKGV2dCl7ICAgIFxyXG4gICAgICAgIGxldCB0eHRDb3JyZW8gPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuQ29ycmVvID0gdHh0Q29ycmVvLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGV2dCl7XHJcbiAgICAgICAgbGV0IHR4dENsYXZlID0gPFRleHRGaWVsZD4gZXZ0Lm9iamVjdDtcclxuICAgICAgICB0aGlzLkNsYXZlID0gdHh0Q2xhdmUudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVudHJhcigpIHtcclxuICAgICAgICBpZih0aGlzLkNvcnJlby5sZW5ndGggPT0gMCB8fCB0aGlzLkNsYXZlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBdmlzb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcy5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkluaWNpYXJTZXNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19