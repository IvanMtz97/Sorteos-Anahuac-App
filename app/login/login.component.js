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
var http = require("http");
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
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.session.loggedIn()) {
            this.session.setLoggedIn(false);
        }
        this.SorteoActivo();
        this.downloadImage();
    };
    LoginComponent.prototype.downloadImage = function () {
        var _this = this;
        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then(function (r) {
            _this.imagenPublicitaria = "data:image/png;base64," + r.toBase64String();
            _this.session.setImagenPublicidad("data:image/png;base64," + r.toBase64String());
        }, function (err) {
        });
    };
    //GET INICIO SESION-------->
    LoginComponent.prototype.IniciarSesion = function () {
        var _this = this;
        this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador/' + platformModule.device.uuid)
            .subscribe(function (result) {
            _this.onGetDataSesion(result);
        }, function (error) {
            _this.loader.display(false);
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
    };
    LoginComponent.prototype.Condiciones = function () {
        utils.openUrl(JSON.parse(this.condiciones));
    };
    LoginComponent.prototype.ConoceSorteo = function () {
        this.router.navigate(["conocesorteo"]);
    };
    LoginComponent.prototype.ListaGanadores = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBQ2pGLDBEQUE0RDtBQUM1RCx1REFBNkQ7QUFDN0QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBUTNCO0lBUUksd0JBQVksSUFBVSxFQUFVLE1BQXdCLEVBQVUsWUFBOEIsRUFBVSxPQUF1QixFQUFVLE1BQXNCO1FBQWpJLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVAxSixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBTXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sc0NBQWEsR0FBckI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxJQUFJLENB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QU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBNUhRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLEVBQUUsd0JBQWMsQ0FBQztTQUNoRSxDQUFDO3lDQVNvQixXQUFJLEVBQWtCLG9DQUFnQixFQUF3QixvQ0FBZ0IsRUFBbUIsaUNBQWMsRUFBa0Isd0JBQWM7T0FSeEosY0FBYyxDQTZIMUI7SUFBRCxxQkFBQztDQUFBLEFBN0hELElBNkhDO0FBN0hZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSwgU2Vzc2lvblNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIENvcnJlbzogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBDbGF2ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBuZXh0TGliQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHBvbGl0aWNhczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjb25kaWNpb25lczogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHsgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKGZhbHNlKTsgfVxyXG4gICAgICAgIHRoaXMuU29ydGVvQWN0aXZvKCk7ICBcclxuICAgICAgICB0aGlzLmRvd25sb2FkSW1hZ2UoKTsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvd25sb2FkSW1hZ2UoKSB7XHJcbiAgICAgICAgaHR0cC5nZXRJbWFnZShcImh0dHBzOi8vc29ydGVvYW5haHVhYy5teC9hcHAvYmFubmVyXzEuanBnXCIpLnRoZW4oKHIpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgci50b0Jhc2U2NFN0cmluZygpOyBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIrIHIudG9CYXNlNjRTdHJpbmcoKSk7XHJcbiAgICAgICAgfSwgKGVycikgPT4geyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vR0VUIElOSUNJTyBTRVNJT04tLS0tLS0tLT5cclxuICAgIHByaXZhdGUgSW5pY2lhclNlc2lvbigpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRMb2dpbih7IGVtYWlsOiB0aGlzLkNvcnJlbywgcGFzc3dvcmQ6IHRoaXMuQ2xhdmUgfSwgJ2FwaS9Db2xhYm9yYWRvci8nICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4geyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhU2VzaW9uKHJlc3VsdCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnQXV0ZW50aWNhY2nDs24nLCAnVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGludmFsaWRvcy4gUmVjdWVyZGEgcXVlIGVzdGEgYXBsaWNhY2nDs24gZXMgw7puaWNhbWVudGUgcGFyYSBjb2xhYm9yYWRvcmVzIGRlIFNvcnRlb3MgQW7DoWh1YWMuJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhU2VzaW9uKGRhdGE6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbmZvKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLy9FTkQgR0VUIC0tLS0tLS0tLT5cclxuXHJcbiAgICAvL0dFVCBTT1JURU8gLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIFNvcnRlb0FjdGl2bygpIHtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldERhdGEoJ2FwaS9Tb3J0ZW8vQWN0aXZvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0U29ydGVvQWN0aXZvKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRQb2xpdGljYXMoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfcG9saXRpY2FzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0UmVnbGFtZW50byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9yZWdsYW1lbnRvKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfYWNlcHRhY2lvbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEdhbmFkb3JlcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9saXN0YV9nYW5hZG9yZXMpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb25vY2VTb3J0ZW8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfY29ub2NlKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29uZGljaW9uZXMoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfY29uZGljaW9uZXMpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0Vycm9yJywgJ0ZhbGzDsyBhbCB0cmF0YXIgb2J0ZW5lciBlbCBzb3J0ZW8gYWN0aXZvLicpOyAgXHJcbiAgICAgICAgICAgIH0pOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb2xpdGljYXMgPSB0aGlzLnNlc3Npb24uZ2V0UG9saXRpY2FzKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbmRpY2lvbmVzID0gdGhpcy5zZXNzaW9uLmdldENvbmRpY2lvbmVzKCk7ICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxyXG5cclxuICAgIHB1YmxpYyBzZXRJbmZvKGRhdGEpIHsgXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShkYXRhLmpzb24oKSkpO1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpOyAgXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKGRhdGEuanNvbigpLnRva2VuKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SWRDb2xhYm9yYWRvcihkYXRhLmpzb24oKS5pZGVudGlmaWNhZG9yKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ycmVvQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuY29ycmVvKVxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRQYXNzQ29sYWJvcmFkb3IodGhpcy5DbGF2ZSk7XHJcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9saXRpY2FzKCkgeyAgICAgICAgXHJcbiAgICAgICAgdXRpbHMub3BlblVybChKU09OLnBhcnNlKHRoaXMucG9saXRpY2FzKSk7ICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQ29uZGljaW9uZXMoKSB7ICAgICAgICBcclxuICAgICAgICB1dGlscy5vcGVuVXJsKEpTT04ucGFyc2UodGhpcy5jb25kaWNpb25lcykpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENvbm9jZVNvcnRlbygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25vY2Vzb3J0ZW9cIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBMaXN0YUdhbmFkb3JlcygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJnYW5hZG9yZXNcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVDb3JyZW9DaGFuZ2UoZXZ0KXsgICAgXHJcbiAgICAgICAgbGV0IHR4dENvcnJlbyA9IDxUZXh0RmllbGQ+IGV2dC5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5Db3JyZW8gPSB0eHRDb3JyZW8udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZXZ0KXtcclxuICAgICAgICBsZXQgdHh0Q2xhdmUgPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuQ2xhdmUgPSB0eHRDbGF2ZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRW50cmFyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuQ29ycmVvLmxlbmd0aCA9PSAwIHx8IHRoaXMuQ2xhdmUubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkF2aXNvXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zLlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pY2lhclNlc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=