"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var http_get_services_1 = require("../services/http-get/http-get.services");
var http_post_services_1 = require("../services/http-post/http-post.services");
var session_services_1 = require("../services/session/session.services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var platformModule = require("tns-core-modules/platform");
var loading_1 = require("../services/loading/loading");
var http = require("http");
var connectivity = require("tns-core-modules/connectivity");
var timer = require("timer");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session, loader, API) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.loader = loader;
        this.API = API;
        this.Correo = "";
        this.Clave = "";
        this.nextLibAvailable = false;
        this.Check = false;
        this.Info = {
            token: "",
            correo: "",
            sistema: ""
        };
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.session.loggedIn()) {
            this.session.setLoggedIn(false);
        }
        this.SorteoActivo();
        this.downloadImage();
        console.log("Correo: " + this.session.getCorreo() + ", Clave: " + this.session.getClave());
        this.Correo = this.session.getCorreo();
        this.Clave = this.session.getClave();
    };
    LoginComponent.prototype.toggleCheck = function (eventData) {
        this.Check = eventData.checked;
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
            _this.validarConexion();
        });
    };
    LoginComponent.prototype.onGetDataSesion = function (data) {
        console.log("CHECKBOX " + this.Check);
        if (this.Check) {
            console.log("ENTRA TRUE");
            this.session.setClave(this.Clave);
            this.session.setCorreo(this.Correo);
        }
        else {
            console.log("ENTRA FALSE");
            this.session.setClave("");
            this.session.setCorreo("");
        }
        this.setInfo(data);
        this.PostRegistroDispositivo(this.session.getTokenDevice());
    };
    //END GET --------->
    //POST REGISTRO DISPOSITIVO
    LoginComponent.prototype.PostRegistroDispositivo = function (token) {
        var _this = this;
        console.log("<------ REGISTRAR DEVICE --------->");
        console.log("<<<<<<<<<<<<<TOKEN DEVICE -> ", token);
        this.Info.token = token;
        this.Info.sistema = platformModule.device.os;
        this.Info.correo = this.session.getCorreoColaborador();
        console.log("<<<<<<<<<<<<DATA ENVIO DISPOSITIVO>>>>>>>>>>>>>>>", JSON.stringify(this.Info));
        this.API.postNoAuth(this.Info, "api/Dispositivos/Agregar").subscribe(function (res) {
            _this.loader.display(false);
            dialogs.alert({
                title: "AVISO",
                message: "Dispositivo agregado exitosamente",
                okButtonText: "Ok"
            }).then(function () {
            });
        }, function (error) {
            console.log("ERROR AL REGISTRAR DISPOSITIVO");
            console.log(error);
        });
    };
    //END POST
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
            //this.mostrarMensaje('Error', 'Falló al tratar obtener el sorteo activo.');
            console.log("Error al tratar de obtener servicio");
            console.log(error);
        });
        this.politicas = this.session.getPoliticas();
        this.condiciones = this.session.getCondiciones();
    };
    //END GET --------->
    LoginComponent.prototype.setInfo = function (data) {
        var _this = this;
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        this.session.setToken(data.json().token);
        this.session.setIdColaborador(data.json().identificador);
        this.session.setCorreoColaborador(data.json().correo);
        this.session.setPassColaborador(this.Clave);
        var id = timer.setTimeout(function () {
            _this.setTimer();
        }, 3500);
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
    LoginComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    };
    LoginComponent.prototype.Entrar = function () {
        console.log("CORREO: " + this.Correo + ", CLAVE: " + this.Clave);
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
    LoginComponent.prototype.validarConexion = function () {
        var connectionType = connectivity.getConnectionType();
        if (connectionType == connectivity.connectionType.none) {
            this.mostrarMensaje('Autenticación', 'No se encontro una conexión a internet.');
        }
        else {
            this.mostrarMensaje('Autenticación', 'Usuario o contraseña inválidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
        }
    };
    LoginComponent.prototype.setTimer = function () {
        this.loader.display(false);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            providers: [http_get_services_1.MyHttpGetService, session_services_1.SessionService, loading_1.LoadingService, http_post_services_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_extensions_1.RouterExtensions, http_get_services_1.MyHttpGetService, session_services_1.SessionService, loading_1.LoadingService, http_post_services_1.MyHttpPostService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFFdEUsbUZBQWlGO0FBQ2pGLDBEQUE0RDtBQUM1RCx1REFBNkQ7QUFDN0QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLDREQUE4RDtBQVE5RDtJQVNJLHdCQUFZLElBQVUsRUFBVSxNQUF3QixFQUFVLFlBQThCLEVBQVUsT0FBdUIsRUFBVSxNQUFzQjtRQUFqSSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFSMUosV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUl6QyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBR25CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FB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LFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FDdkQsQ0FBQztZQUNHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLHlDQUF5QyxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsbUhBQW1ILENBQUMsQ0FBQztRQUM5SixDQUFDO0lBQ0wsQ0FBQztJQXhKUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxpQ0FBYyxFQUFFLHdCQUFjLENBQUM7U0FDaEUsQ0FBQzt5Q0FVb0IsV0FBSSxFQUFrQixvQ0FBZ0IsRUFBd0Isb0NBQWdCLEVBQW1CLGlDQUFjLEVBQWtCLHdCQUFjO09BVHhKLGNBQWMsQ0F5SjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpKRCxJQXlKQztBQXpKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSwgU2Vzc2lvblNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIENvcnJlbzogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBDbGF2ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBuZXh0TGliQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHBvbGl0aWNhczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjb25kaWNpb25lczogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xyXG4gICAgQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHsgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKGZhbHNlKTsgfVxyXG4gICAgICAgIHRoaXMuU29ydGVvQWN0aXZvKCk7XHJcbiAgICAgICAgdGhpcy5kb3dubG9hZEltYWdlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3JyZW86IFwiICsgdGhpcy5zZXNzaW9uLmdldENvcnJlbygpICsgXCIsIENsYXZlOiBcIiArIHRoaXMuc2Vzc2lvbi5nZXRDbGF2ZSgpKTtcclxuICAgICAgICB0aGlzLkNvcnJlbyA9IHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW8oKTtcclxuICAgICAgICB0aGlzLkNsYXZlID0gdGhpcy5zZXNzaW9uLmdldENsYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKGV2ZW50RGF0YSl7XHJcbiAgICAgICAgdGhpcy5DaGVjayA9IGV2ZW50RGF0YS5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG93bmxvYWRJbWFnZSgpIHtcclxuICAgICAgICBodHRwLmdldEltYWdlKFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIikudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbWFnZW5QdWJsaWNpZGFkKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCkpO1xyXG4gICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBJbmljaWFyU2VzaW9uKCkgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0TG9naW4oeyBlbWFpbDogdGhpcy5Db3JyZW8sIHBhc3N3b3JkOiB0aGlzLkNsYXZlIH0sICdhcGkvQ29sYWJvcmFkb3IvJyArIHBsYXRmb3JtTW9kdWxlLmRldmljZS51dWlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhU2VzaW9uKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXJDb25leGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YVNlc2lvbihkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tCT1ggXCIgKyB0aGlzLkNoZWNrKTtcclxuICAgICAgICBpZih0aGlzLkNoZWNrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSQSBUUlVFXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q2xhdmUodGhpcy5DbGF2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb3JyZW8odGhpcy5Db3JyZW8pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVOVFJBIEZBTFNFXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q2xhdmUoXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb3JyZW8oXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW5mbyhkYXRhKTtcclxuICAgIH1cclxuICAgIC8vRU5EIEdFVCAtLS0tLS0tLS0+XHJcblxyXG4gICAgLy9HRVQgU09SVEVPIC0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBTb3J0ZW9BY3Rpdm8oKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXREYXRhKCdhcGkvU29ydGVvL0FjdGl2bycpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFNvcnRlb0FjdGl2byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0UG9saXRpY2FzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX3BvbGl0aWNhcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFJlZ2xhbWVudG8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfcmVnbGFtZW50bykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2FjZXB0YWNpb24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRHYW5hZG9yZXMoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfbGlzdGFfZ2FuYWRvcmVzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ub2NlU29ydGVvKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2Nvbm9jZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvbmRpY2lvbmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2NvbmRpY2lvbmVzKSk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBvYnRlbmVyIGVsIHNvcnRlbyBhY3Rpdm8uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGFsIHRyYXRhciBkZSBvYnRlbmVyIHNlcnZpY2lvXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9saXRpY2FzID0gdGhpcy5zZXNzaW9uLmdldFBvbGl0aWNhcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpY2lvbmVzID0gdGhpcy5zZXNzaW9uLmdldENvbmRpY2lvbmVzKCk7XHJcbiAgICB9XHJcbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxyXG5cclxuICAgIHB1YmxpYyBzZXRJbmZvKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKGRhdGEuanNvbigpLnRva2VuKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SWRDb2xhYm9yYWRvcihkYXRhLmpzb24oKS5pZGVudGlmaWNhZG9yKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ycmVvQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuY29ycmVvKVxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRQYXNzQ29sYWJvcmFkb3IodGhpcy5DbGF2ZSk7XHJcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9saXRpY2FzKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoSlNPTi5wYXJzZSh0aGlzLnBvbGl0aWNhcykpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENvbmRpY2lvbmVzKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoSlNPTi5wYXJzZSh0aGlzLmNvbmRpY2lvbmVzKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQ29ub2NlU29ydGVvKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNvbm9jZXNvcnRlb1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIExpc3RhR2FuYWRvcmVzKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImdhbmFkb3Jlc1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6dGl0dWxvLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFbnRyYXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDT1JSRU86IFwiICsgdGhpcy5Db3JyZW8gKyBcIiwgQ0xBVkU6IFwiICsgdGhpcy5DbGF2ZSk7XHJcbiAgICAgICAgaWYodGhpcy5Db3JyZW8ubGVuZ3RoID09IDAgfHwgdGhpcy5DbGF2ZS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQXZpc29cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MuXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5JbmljaWFyU2VzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGFyQ29uZXhpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb25uZWN0aW9uVHlwZSA9IGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRhckNvbmV4aW9uKClcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub25lIC0+IFwiICsgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlIC0+IFwiICsgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aWZpIC0+IFwiICsgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmkpO1xyXG4gICAgICAgIGlmIChjb25uZWN0aW9uVHlwZSA9PSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0F1dGVudGljYWNpw7NuJywgJ05vIHNlIGVuY29udHJvIHVuYSBjb25leGnDs24gYSBpbnRlcm5ldC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnQXV0ZW50aWNhY2nDs24nLCAnVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGludsOhbGlkb3MuIFJlY3VlcmRhIHF1ZSBlc3RhIGFwbGljYWNpw7NuIGVzIMO6bmljYW1lbnRlIHBhcmEgY29sYWJvcmFkb3JlcyBkZSBTb3J0ZW9zIEFuw6FodWFjLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
