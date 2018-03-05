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
var loading_1 = require("../services/loading/loading");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session, loader) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.loader = loader;
        this.Correo = "";
        this.Clave = "";
        this.nextLibAvailable = false;
        page.actionBarHidden = true;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
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
        this.loader.display(true);
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
        this.loader.display(false);
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
            providers: [http_get_services_1.MyHttpGetService, session_services_1.SessionService, loading_1.LoadingService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_extensions_1.RouterExtensions, http_get_services_1.MyHttpGetService, session_services_1.SessionService, loading_1.LoadingService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBQ2pGLDBEQUE0RDtBQUM1RCx1REFBNkQ7QUFRN0Q7SUFRSSx3QkFBWSxJQUFVLEVBQVUsTUFBd0IsRUFBVSxZQUE4QixFQUFVLE9BQXVCLEVBQVUsTUFBc0I7UUFBakksV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBUDFKLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFNckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHRCw0QkFBNEI7SUFDcEIs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bEQsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDVixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUExSFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsaUNBQWMsRUFBRSx3QkFBYyxDQUFDO1NBQ2hFLENBQUM7eUNBU29CLFdBQUksRUFBa0Isb0NBQWdCLEVBQXdCLG9DQUFnQixFQUFtQixpQ0FBYyxFQUFrQix3QkFBYztPQVJ4SixjQUFjLENBMkgxQjtJQUFELHFCQUFDO0NBQUEsQUEzSEQsSUEySEM7QUEzSFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSwgU2Vzc2lvblNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIENvcnJlbzogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgQ2xhdmU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIG5leHRMaWJBdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHBvbGl0aWNhczogc3RyaW5nO1xuICAgIHByaXZhdGUgY29uZGljaW9uZXM6IHN0cmluZztcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxuXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIGxvYWRlcjogTG9hZGluZ1NlcnZpY2UpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyBcbiAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVVJRCAtLT4gXCIsIHBsYXRmb3JtTW9kdWxlLmRldmljZS51dWlkKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbi5sb2dnZWRJbigpKSB7IHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbihmYWxzZSk7IH1cbiAgICAgICAgdGhpcy5Tb3J0ZW9BY3Rpdm8oKTsgICAgICAgIFxuICAgIH1cblxuXG4gICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxuICAgIHByaXZhdGUgSW5pY2lhclNlc2lvbigpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2VcbiAgICAgICAgICAgIC5nZXRMb2dpbih7IGVtYWlsOiB0aGlzLkNvcnJlbywgcGFzc3dvcmQ6IHRoaXMuQ2xhdmUgfSwgJ2FwaS9Db2xhYm9yYWRvci8nICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1VMVEFETyBSRVNQVUVTVEEgLS0tLS0+IFwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhU2VzaW9uKHJlc3VsdCk7XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOSUNJQVIgU0VTSU9OXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0F1dGVudGljYWNpw7NuJywgJ1VzdWFyaW8gbyBjb250cmFzZcOxYSBpbnZhbGlkb3MuIFJlY3VlcmRhIHF1ZSBlc3RhIGFwbGljYWNpw7NuIGVzIMO6bmljYW1lbnRlIHBhcmEgY29sYWJvcmFkb3JlcyBkZSBTb3J0ZW9zIEFuw6FodWFjLicpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGFTZXNpb24oZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXRJbmZvKGRhdGEpO1xuICAgIH1cbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxuXG4gICAgLy9HRVQgU09SVEVPIC0tLS0tLS0tPlxuICAgIHByaXZhdGUgU29ydGVvQWN0aXZvKCkge1xuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0RGF0YSgnYXBpL1NvcnRlby9BY3Rpdm8nKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFNvcnRlb0FjdGl2byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFBvbGl0aWNhcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9wb2xpdGljYXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0UmVnbGFtZW50byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9yZWdsYW1lbnRvKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2FjZXB0YWNpb24pKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0R2FuYWRvcmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2xpc3RhX2dhbmFkb3JlcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb25vY2VTb3J0ZW8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfY29ub2NlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvbmRpY2lvbmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2NvbmRpY2lvbmVzKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIG9idGVuZXIgZWwgc29ydGVvIGFjdGl2by4nKTsgIFxuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9saXRpY2FzID0gdGhpcy5zZXNzaW9uLmdldFBvbGl0aWNhcygpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY29uZGljaW9uZXMgPSB0aGlzLnNlc3Npb24uZ2V0Q29uZGljaW9uZXMoKTsgICAgICAgICBcbiAgICB9XG4gICAgLy9FTkQgR0VUIC0tLS0tLS0tLT5cblxuICAgIHB1YmxpYyBzZXRJbmZvKGRhdGEpIHsgXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XG4gICAgICAgIHRoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpOyAgXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJZENvbGFib3JhZG9yKGRhdGEuanNvbigpLmlkZW50aWZpY2Fkb3IpO1xuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ycmVvQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuY29ycmVvKVxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0UGFzc0NvbGFib3JhZG9yKHRoaXMuQ2xhdmUpO1xuICAgICAgICBpZih0aGlzLnNlc3Npb24uZ2V0Rmlyc3RSdW4oKSA9PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBQb2xpdGljYXMoKSB7ICAgICAgICBcbiAgICAgICAgdXRpbHMub3BlblVybChKU09OLnBhcnNlKHRoaXMucG9saXRpY2FzKSk7IFxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucG9saXRpY2FzIC0+IFwiICsgdGhpcy5wb2xpdGljYXMpO1xuICAgIH1cbiAgICBwdWJsaWMgQ29uZGljaW9uZXMoKSB7ICAgICAgICBcbiAgICAgICAgdXRpbHMub3BlblVybChKU09OLnBhcnNlKHRoaXMuY29uZGljaW9uZXMpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbmRpY2lvbmVzIC0+IFwiICsgdGhpcy5jb25kaWNpb25lcyk7XG4gICAgfVxuICAgIHB1YmxpYyBDb25vY2VTb3J0ZW8oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNvbm9jZXNvcnRlb1wiXSk7XG4gICAgfVxuXG4gICAgcHVibGljIExpc3RhR2FuYWRvcmVzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxJU1RBIERFIEdBTkFET1JFU1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ2FuYWRvcmVzXCJdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlQ29ycmVvQ2hhbmdlKGV2dCl7ICAgIFxuICAgICAgICBsZXQgdHh0Q29ycmVvID0gPFRleHRGaWVsZD4gZXZ0Lm9iamVjdDtcbiAgICAgICAgdGhpcy5Db3JyZW8gPSB0eHRDb3JyZW8udGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZXZ0KXtcbiAgICAgICAgbGV0IHR4dENsYXZlID0gPFRleHRGaWVsZD4gZXZ0Lm9iamVjdDtcbiAgICAgICAgdGhpcy5DbGF2ZSA9IHR4dENsYXZlLnRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIEVudHJhcigpIHtcbiAgICAgICAgaWYodGhpcy5Db3JyZW8ubGVuZ3RoID09IDAgfHwgdGhpcy5DbGF2ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBdmlzb1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuSW5pY2lhclNlc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19