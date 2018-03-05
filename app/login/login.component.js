"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var http_get_services_1 = require("../services/http-get/http-get.services");
var session_services_1 = require("../services/session/session.services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var platformModule = require("tns-core-modules/platform");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.Correo = "";
        this.Clave = "";
        this.nextLibAvailable = false;
        page.actionBarHidden = true;
        console.log("UUID --> ", platformModule.device.uuid);
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
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador/' + platformModule.device.uuid)
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
        this.session.setPassColaborador(this.Clave);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBQ2pGLDBEQUE0RDtBQVE1RDtJQU9JLHdCQUFZLElBQVUsRUFBVSxNQUF3QixFQUFVLFlBQThCLEVBQVUsT0FBdUI7UUFBakcsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQU4xSCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBS3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELDRCQUE0QjtJQUNwQixzQ0FBYSxHQUFyQjtRQUFBLGlCQVlDO1FBWEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxZQUFZO2FBQ1osUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFF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LGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLENBQUM7U0FDaEQsQ0FBQzt5Q0FRb0IsV0FBSSxFQUFrQixvQ0FBZ0IsRUFBd0Isb0NBQWdCLEVBQW1CLGlDQUFjO09BUHhILGNBQWMsQ0F5SDFCO0lBQUQscUJBQUM7Q0FBQSxBQXpIRCxJQXlIQztBQXpIWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSwgU2Vzc2lvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgQ29ycmVvOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIENsYXZlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIG5leHRMaWJBdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcG9saXRpY2FzOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNvbmRpY2lvbmVzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVVSUQgLS0+IFwiLCBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbi5sb2dnZWRJbigpKSB7IHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbihmYWxzZSk7IH1cclxuICAgICAgICB0aGlzLlNvcnRlb0FjdGl2bygpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vR0VUIElOSUNJTyBTRVNJT04tLS0tLS0tLT5cclxuICAgIHByaXZhdGUgSW5pY2lhclNlc2lvbigpIHtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldExvZ2luKHsgZW1haWw6IHRoaXMuQ29ycmVvLCBwYXNzd29yZDogdGhpcy5DbGF2ZSB9LCAnYXBpL0NvbGFib3JhZG9yLycgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1VMVEFETyBSRVNQVUVTVEEgLS0tLS0+IFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGFTZXNpb24ocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOSUNJQVIgU0VTSU9OXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdBdXRlbnRpY2FjacOzbicsICdVc3VhcmlvIG8gY29udHJhc2XDsWEgaW52YWxpZG9zLiBSZWN1ZXJkYSBxdWUgZXN0YSBhcGxpY2FjacOzbiBlcyDDum5pY2FtZW50ZSBwYXJhIGNvbGFib3JhZG9yZXMgZGUgU29ydGVvcyBBbsOhaHVhYy4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGFTZXNpb24oZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNldEluZm8oZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxyXG5cclxuICAgIC8vR0VUIFNPUlRFTyAtLS0tLS0tLT5cclxuICAgIHByaXZhdGUgU29ydGVvQWN0aXZvKCkge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0RGF0YSgnYXBpL1NvcnRlby9BY3Rpdm8nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRTb3J0ZW9BY3Rpdm8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFBvbGl0aWNhcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9wb2xpdGljYXMpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRSZWdsYW1lbnRvKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX3JlZ2xhbWVudG8pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRBY2VwdGFjaW9uVGFsb25hcmlvcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9hY2VwdGFjaW9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0R2FuYWRvcmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2xpc3RhX2dhbmFkb3JlcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvbm9jZVNvcnRlbyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9jb25vY2UpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb25kaWNpb25lcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9jb25kaWNpb25lcykpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBvYnRlbmVyIGVsIHNvcnRlbyBhY3Rpdm8uJyk7ICBcclxuICAgICAgICAgICAgfSk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvbGl0aWNhcyA9IHRoaXMuc2Vzc2lvbi5nZXRQb2xpdGljYXMoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY29uZGljaW9uZXMgPSB0aGlzLnNlc3Npb24uZ2V0Q29uZGljaW9uZXMoKTsgICAgICAgICBcclxuICAgIH1cclxuICAgIC8vRU5EIEdFVCAtLS0tLS0tLS0+XHJcblxyXG4gICAgcHVibGljIHNldEluZm8oZGF0YSkgeyBcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldElkQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuaWRlbnRpZmljYWRvcik7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvcnJlb0NvbGFib3JhZG9yKGRhdGEuanNvbigpLmNvcnJlbylcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0UGFzc0NvbGFib3JhZG9yKHRoaXMuQ2xhdmUpO1xyXG4gICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvbGl0aWNhcygpIHsgICAgICAgIFxyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoSlNPTi5wYXJzZSh0aGlzLnBvbGl0aWNhcykpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucG9saXRpY2FzIC0+IFwiICsgdGhpcy5wb2xpdGljYXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENvbmRpY2lvbmVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgdXRpbHMub3BlblVybChKU09OLnBhcnNlKHRoaXMuY29uZGljaW9uZXMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY29uZGljaW9uZXMgLT4gXCIgKyB0aGlzLmNvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBDb25vY2VTb3J0ZW8oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29ub2Nlc29ydGVvXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTGlzdGFHYW5hZG9yZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMSVNUQSBERSBHQU5BRE9SRVNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ2FuYWRvcmVzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQ29ycmVvQ2hhbmdlKGV2dCl7ICAgIFxyXG4gICAgICAgIGxldCB0eHRDb3JyZW8gPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuQ29ycmVvID0gdHh0Q29ycmVvLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGV2dCl7XHJcbiAgICAgICAgbGV0IHR4dENsYXZlID0gPFRleHRGaWVsZD4gZXZ0Lm9iamVjdDtcclxuICAgICAgICB0aGlzLkNsYXZlID0gdHh0Q2xhdmUudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVudHJhcigpIHtcclxuICAgICAgICBpZih0aGlzLkNvcnJlby5sZW5ndGggPT0gMCB8fCB0aGlzLkNsYXZlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBdmlzb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcy5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkluaWNpYXJTZXNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19