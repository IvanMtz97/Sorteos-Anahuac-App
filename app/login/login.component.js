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
        console.log("UUID --> ", platformModule.device.uuid);
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
            console.log("-----r-----");
            _this.imagenPublicitaria = "data:image/png;base64," + r.toBase64String();
            _this.session.setImagenPublicidad("data:image/png;base64," + r.toBase64String());
        }, function (err) {
            console.log("-----e-----");
        });
    };
    //GET INICIO SESION-------->
    LoginComponent.prototype.IniciarSesion = function () {
        var _this = this;
        this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador/' + platformModule.device.uuid)
            .subscribe(function (result) {
            console.log("LOGIN ON SUCCESS");
            _this.onGetDataSesion(result);
            console.dir(result);
        }, function (error) {
            console.log("INICIAR SESION", error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBQ2pGLDBEQUE0RDtBQUM1RCx1REFBNkQ7QUFDN0QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBUTNCO0lBUUksd0JBQVksSUFBVSxFQUFVLE1BQXdCLEVBQVUsWUFBOEIsRUFBVSxPQUF1QixFQUFVLE1BQXNCO1FBQWpJLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVAxSixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBTXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxz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QUFBLEFBdElELElBc0lDO0FBdElZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSwgU2Vzc2lvblNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIENvcnJlbzogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBDbGF2ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBuZXh0TGliQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHBvbGl0aWNhczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjb25kaWNpb25lczogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVVUlEIC0tPiBcIiwgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSkgeyB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4oZmFsc2UpOyB9XHJcbiAgICAgICAgdGhpcy5Tb3J0ZW9BY3Rpdm8oKTsgIFxyXG4gICAgICAgIHRoaXMuZG93bmxvYWRJbWFnZSgpOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG93bmxvYWRJbWFnZSgpIHtcclxuICAgICAgICBodHRwLmdldEltYWdlKFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIikudGhlbigocikgPT4geyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLXItLS0tLVwiKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgci50b0Jhc2U2NFN0cmluZygpOyBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIrIHIudG9CYXNlNjRTdHJpbmcoKSk7XHJcbiAgICAgICAgfSwgKGVycikgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tZS0tLS0tXCIpO1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vR0VUIElOSUNJTyBTRVNJT04tLS0tLS0tLT5cclxuICAgIHByaXZhdGUgSW5pY2lhclNlc2lvbigpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRMb2dpbih7IGVtYWlsOiB0aGlzLkNvcnJlbywgcGFzc3dvcmQ6IHRoaXMuQ2xhdmUgfSwgJ2FwaS9Db2xhYm9yYWRvci8nICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMT0dJTiBPTiBTVUNDRVNTXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGFTZXNpb24ocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTklDSUFSIFNFU0lPTlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0F1dGVudGljYWNpw7NuJywgJ1VzdWFyaW8gbyBjb250cmFzZcOxYSBpbnZhbGlkb3MuIFJlY3VlcmRhIHF1ZSBlc3RhIGFwbGljYWNpw7NuIGVzIMO6bmljYW1lbnRlIHBhcmEgY29sYWJvcmFkb3JlcyBkZSBTb3J0ZW9zIEFuw6FodWFjLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YVNlc2lvbihkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5mbyhkYXRhKTtcclxuICAgIH1cclxuICAgIC8vRU5EIEdFVCAtLS0tLS0tLS0+XHJcblxyXG4gICAgLy9HRVQgU09SVEVPIC0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBTb3J0ZW9BY3Rpdm8oKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXREYXRhKCdhcGkvU29ydGVvL0FjdGl2bycpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFNvcnRlb0FjdGl2byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0UG9saXRpY2FzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX3BvbGl0aWNhcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFJlZ2xhbWVudG8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfcmVnbGFtZW50bykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2FjZXB0YWNpb24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRHYW5hZG9yZXMoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfbGlzdGFfZ2FuYWRvcmVzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ub2NlU29ydGVvKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2Nvbm9jZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvbmRpY2lvbmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2NvbmRpY2lvbmVzKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIG9idGVuZXIgZWwgc29ydGVvIGFjdGl2by4nKTsgIFxyXG4gICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9saXRpY2FzID0gdGhpcy5zZXNzaW9uLmdldFBvbGl0aWNhcygpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb25kaWNpb25lcyA9IHRoaXMuc2Vzc2lvbi5nZXRDb25kaWNpb25lcygpOyAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9FTkQgR0VUIC0tLS0tLS0tLT5cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5mbyhkYXRhKSB7IFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbih0cnVlKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldElkQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuaWRlbnRpZmljYWRvcik7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvcnJlb0NvbGFib3JhZG9yKGRhdGEuanNvbigpLmNvcnJlbylcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0UGFzc0NvbGFib3JhZG9yKHRoaXMuQ2xhdmUpO1xyXG4gICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvbGl0aWNhcygpIHsgICAgICAgIFxyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoSlNPTi5wYXJzZSh0aGlzLnBvbGl0aWNhcykpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucG9saXRpY2FzIC0+IFwiICsgdGhpcy5wb2xpdGljYXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENvbmRpY2lvbmVzKCkgeyAgICAgICAgXHJcbiAgICAgICAgdXRpbHMub3BlblVybChKU09OLnBhcnNlKHRoaXMuY29uZGljaW9uZXMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY29uZGljaW9uZXMgLT4gXCIgKyB0aGlzLmNvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBDb25vY2VTb3J0ZW8oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29ub2Nlc29ydGVvXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTGlzdGFHYW5hZG9yZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMSVNUQSBERSBHQU5BRE9SRVNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ2FuYWRvcmVzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlQ29ycmVvQ2hhbmdlKGV2dCl7ICAgIFxyXG4gICAgICAgIGxldCB0eHRDb3JyZW8gPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuQ29ycmVvID0gdHh0Q29ycmVvLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGV2dCl7XHJcbiAgICAgICAgbGV0IHR4dENsYXZlID0gPFRleHRGaWVsZD4gZXZ0Lm9iamVjdDtcclxuICAgICAgICB0aGlzLkNsYXZlID0gdHh0Q2xhdmUudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVudHJhcigpIHtcclxuICAgICAgICBpZih0aGlzLkNvcnJlby5sZW5ndGggPT0gMCB8fCB0aGlzLkNsYXZlLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBdmlzb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcy5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkluaWNpYXJTZXNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19