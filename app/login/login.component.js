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
var http_put_services_1 = require("../services/http-put/http-put.services");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session, loader, API, PUT) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.loader = loader;
        this.API = API;
        this.PUT = PUT;
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
            //  dialogs.alert({
            //      title: "AVISO",
            //      message: "Dispositivo agregado exitosamente",
            //      okButtonText: "Ok"
            //  }).then(() => {
            //  });
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
            console.log("result -> \n" + JSON.stringify(result.json()));
            _this.session.setSorteoActivo(JSON.stringify(result.json()));
            _this.session.setMiCuenta(JSON.stringify(result.json().url_cambio_contrasena));
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
        this.setPrivacidad(data.json().clave);
        console.log("Datos en sesión -> \n");
        console.log(JSON.stringify(data.json()));
        var id = timer.setTimeout(function () {
            _this.setTimer();
        }, 3500);
        // if(this.session.getFirstRun() == true){
        //     this.router.navigate(["privacidad"], { clearHistory: true });
        // }else{
        //     this.router.navigate(["talonarios"], { clearHistory: true });
        // }
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
    LoginComponent.prototype.setPrivacidad = function (PK1) {
        var _this = this;
        this.PUT.putData({}, "api/Colaborador/Actualiza/" + PK1).subscribe(function (res) {
            console.log("ACTUALIZADO EXITOSO");
            console.log(res);
            console.log("------------\n" + res.text());
            if (res.text() == "1") {
                console.log("No mostrar privacidad");
                _this.validaPrivacidad = 1;
            }
            else {
                console.log("Mostrar privacidad");
                _this.validaPrivacidad = 0;
            }
            console.log("Privacidad -> " + _this.validaPrivacidad);
            if (_this.validaPrivacidad == 0) {
                console.log("Mostrando privacidad");
                _this.router.navigate(["privacidad"], { clearHistory: true });
            }
            else if (_this.validaPrivacidad == 1) {
                console.log("No mostrando privacidad");
                _this.router.navigate(["talonarios"], { clearHistory: true });
            }
            else {
                console.log("No mostrando privacidadx2");
                _this.router.navigate(["talonarios"], { clearHistory: true });
            }
        }, function (error) {
            console.log("ACTUALIZADO FALLIDO");
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            providers: [http_get_services_1.MyHttpGetService, session_services_1.SessionService, loading_1.LoadingService, http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_extensions_1.RouterExtensions, http_get_services_1.MyHttpGetService, session_services_1.SessionService, loading_1.LoadingService, http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLDRFQUEwRTtBQUMxRSwrRUFBNkU7QUFDN0UseUVBQXNFO0FBRXRFLG1GQUFpRjtBQUNqRiwwREFBNEQ7QUFDNUQsdURBQTZEO0FBQzdELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQiw0REFBOEQ7QUFFOUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLDRFQUEwRTtBQVExRTtJQWVJLHdCQUFZLElBQVUsRUFBVSxNQUF3QixFQUFVLFlBQThCLEVBQVUsT0FBdUIsRUFBVSxNQUFzQixFQUFVLEdBQXNCLEVBQVUsR0FBcUI7UUFBaE0sV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQWR6TixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBSXpDLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFRO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUlFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ks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SixDQUFDO2dCQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBNU9RLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLEVBQUUsd0JBQWMsRUFBRSxzQ0FBaUIsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNyRyxDQUFDO3lDQWdCb0IsV0FBSSxFQUFrQixvQ0FBZ0IsRUFBd0Isb0NBQWdCLEVBQW1CLGlDQUFjLEVBQWtCLHdCQUFjLEVBQWUsc0NBQWlCLEVBQWUsb0NBQWdCO09BZnZOLGNBQWMsQ0E2TzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdPRCxJQTZPQztBQTdPWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xudmFyIHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgc2V0VGltZW91dCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0aW1lclwiO1xudmFyIHRpbWVyID0gcmVxdWlyZShcInRpbWVyXCIpO1xuaW1wb3J0IHsgTXlIdHRwUHV0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXB1dC9odHRwLXB1dC5zZXJ2aWNlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2UsIFNlc3Npb25TZXJ2aWNlLCBMb2FkaW5nU2VydmljZSwgTXlIdHRwUG9zdFNlcnZpY2UsIE15SHR0cFB1dFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgQ29ycmVvOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBDbGF2ZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgbmV4dExpYkF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcG9saXRpY2FzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb25kaWNpb25lczogc3RyaW5nO1xuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcbiAgICBDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBJbmZvOiBhbnkgPSB7XG4gICAgICAgIHRva2VuOiBcIlwiLFxuICAgICAgICBjb3JyZW86IFwiXCIsXG4gICAgICAgIHNpc3RlbWE6IFwiXCJcbiAgICB9O1xuICAgIHB1YmxpYyB2YWxpZGFQcml2YWNpZGFkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nU2VydmljZSwgcHJpdmF0ZSBBUEk6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIFBVVDogTXlIdHRwUHV0U2VydmljZSkge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7ICAgICAgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Vzc2lvbi5sb2dnZWRJbigpKSB7IHRoaXMuc2Vzc2lvbi5zZXRMb2dnZWRJbihmYWxzZSk7IH1cbiAgICAgICAgdGhpcy5Tb3J0ZW9BY3Rpdm8oKTtcbiAgICAgICAgdGhpcy5kb3dubG9hZEltYWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ycmVvOiBcIiArIHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW8oKSArIFwiLCBDbGF2ZTogXCIgKyB0aGlzLnNlc3Npb24uZ2V0Q2xhdmUoKSk7XG4gICAgICAgIHRoaXMuQ29ycmVvID0gdGhpcy5zZXNzaW9uLmdldENvcnJlbygpO1xuICAgICAgICB0aGlzLkNsYXZlID0gdGhpcy5zZXNzaW9uLmdldENsYXZlKCk7ICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soZXZlbnREYXRhKXtcbiAgICAgICAgdGhpcy5DaGVjayA9IGV2ZW50RGF0YS5jaGVja2VkO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG93bmxvYWRJbWFnZSgpIHtcbiAgICAgICAgaHR0cC5nZXRJbWFnZShcImh0dHBzOi8vc29ydGVvYW5haHVhYy5teC9hcHAvYmFubmVyXzEuanBnXCIpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIrIHIudG9CYXNlNjRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbWFnZW5QdWJsaWNpZGFkKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCkpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxuICAgIHByaXZhdGUgSW5pY2lhclNlc2lvbigpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpOyAgICAgICAgXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0TG9naW4oeyBlbWFpbDogdGhpcy5Db3JyZW8sIHBhc3N3b3JkOiB0aGlzLkNsYXZlIH0sICdhcGkvQ29sYWJvcmFkb3IvJyArIHBsYXRmb3JtTW9kdWxlLmRldmljZS51dWlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGFTZXNpb24ocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhckNvbmV4aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2V0RGF0YVNlc2lvbihkYXRhOiBSZXNwb25zZSB8IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNIRUNLQk9YIFwiICsgdGhpcy5DaGVjayk7XG4gICAgICAgIGlmKHRoaXMuQ2hlY2spe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSQSBUUlVFXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENsYXZlKHRoaXMuQ2xhdmUpO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvcnJlbyh0aGlzLkNvcnJlbyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSQSBGQUxTRVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDbGF2ZShcIlwiKTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb3JyZW8oXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJbmZvKGRhdGEpO1xuICAgICAgICB0aGlzLlBvc3RSZWdpc3Ryb0Rpc3Bvc2l0aXZvKHRoaXMuc2Vzc2lvbi5nZXRUb2tlbkRldmljZSgpKTtcbiAgICB9XG4gICAgLy9FTkQgR0VUIC0tLS0tLS0tLT5cblxuICAgICAgICAvL1BPU1QgUkVHSVNUUk8gRElTUE9TSVRJVk9cbiAgICAgICAgcHJpdmF0ZSBQb3N0UmVnaXN0cm9EaXNwb3NpdGl2byh0b2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI8LS0tLS0tIFJFR0lTVFJBUiBERVZJQ0UgLS0tLS0tLS0tPlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPDw8PDw8PDw8PDw8PFRPS0VOIERFVklDRSAtPiBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5JbmZvLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICB0aGlzLkluZm8uc2lzdGVtYSA9IHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcztcbiAgICAgICAgICAgIHRoaXMuSW5mby5jb3JyZW8gPSB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPDw8PDw8PDw8PDw8REFUQSBFTlZJTyBESVNQT1NJVElWTz4+Pj4+Pj4+Pj4+Pj4+PlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLkluZm8pKTtcbiAgICAgICAgICAgIHRoaXMuQVBJLnBvc3ROb0F1dGgodGhpcy5JbmZvLCBcImFwaS9EaXNwb3NpdGl2b3MvQWdyZWdhclwiKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgLy8gICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgIC8vICAgICAgbWVzc2FnZTogXCJEaXNwb3NpdGl2byBhZ3JlZ2FkbyBleGl0b3NhbWVudGVcIixcbiAgICAgICAgICAgICAgICAvLyAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgLy8gIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAgfSk7XG4gICAgXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBSRUdJU1RSQVIgRElTUE9TSVRJVk9cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9FTkQgUE9TVFxuXG4gICAgLy9HRVQgU09SVEVPIC0tLS0tLS0tPlxuICAgIHByaXZhdGUgU29ydGVvQWN0aXZvKCkge1xuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0RGF0YSgnYXBpL1NvcnRlby9BY3Rpdm8nKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgLT4gXFxuXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFNvcnRlb0FjdGl2byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldE1pQ3VlbnRhKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2NhbWJpb19jb250cmFzZW5hKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFBvbGl0aWNhcyhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9wb2xpdGljYXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0UmVnbGFtZW50byhKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpLnVybF9yZWdsYW1lbnRvKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2FjZXB0YWNpb24pKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0R2FuYWRvcmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2xpc3RhX2dhbmFkb3JlcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRDb25vY2VTb3J0ZW8oSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmpzb24oKS51cmxfY29ub2NlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldENvbmRpY2lvbmVzKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5qc29uKCkudXJsX2NvbmRpY2lvbmVzKSk7XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBvYnRlbmVyIGVsIHNvcnRlbyBhY3Rpdm8uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBhbCB0cmF0YXIgZGUgb2J0ZW5lciBzZXJ2aWNpb1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5wb2xpdGljYXMgPSB0aGlzLnNlc3Npb24uZ2V0UG9saXRpY2FzKCk7XG4gICAgICAgICAgICB0aGlzLmNvbmRpY2lvbmVzID0gdGhpcy5zZXNzaW9uLmdldENvbmRpY2lvbmVzKCk7XG4gICAgfVxuICAgIC8vRU5EIEdFVCAtLS0tLS0tLS0+XG4gICAgcHVibGljIHNldEluZm8oZGF0YSkge1xuICAgICAgICB0aGlzLnNlc3Npb24uc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShkYXRhLmpzb24oKSkpOyAgICAgICAgXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJZENvbGFib3JhZG9yKGRhdGEuanNvbigpLmlkZW50aWZpY2Fkb3IpO1xuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Q29ycmVvQ29sYWJvcmFkb3IoZGF0YS5qc29uKCkuY29ycmVvKVxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0UGFzc0NvbGFib3JhZG9yKHRoaXMuQ2xhdmUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRQcml2YWNpZGFkKGRhdGEuanNvbigpLmNsYXZlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRvcyBlbiBzZXNpw7NuIC0+IFxcblwiKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcblxuICAgICAgICBjb25zdCBpZCA9IHRpbWVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRUaW1lcigpO1xuICAgICAgICB9LCAzNTAwKTtcblxuICAgICAgICAvLyBpZih0aGlzLnNlc3Npb24uZ2V0Rmlyc3RSdW4oKSA9PSB0cnVlKXtcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgUG9saXRpY2FzKCkge1xuICAgICAgICB1dGlscy5vcGVuVXJsKEpTT04ucGFyc2UodGhpcy5wb2xpdGljYXMpKTtcbiAgICB9XG4gICAgcHVibGljIENvbmRpY2lvbmVzKCkge1xuICAgICAgICB1dGlscy5vcGVuVXJsKEpTT04ucGFyc2UodGhpcy5jb25kaWNpb25lcykpO1xuICAgIH1cbiAgICBwdWJsaWMgQ29ub2NlU29ydGVvKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25vY2Vzb3J0ZW9cIl0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBMaXN0YUdhbmFkb3JlcygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ2FuYWRvcmVzXCJdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRW50cmFyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNPUlJFTzogXCIgKyB0aGlzLkNvcnJlbyArIFwiLCBDTEFWRTogXCIgKyB0aGlzLkNsYXZlKTtcbiAgICAgICAgaWYodGhpcy5Db3JyZW8ubGVuZ3RoID09IDAgfHwgdGhpcy5DbGF2ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBdmlzb1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuSW5pY2lhclNlc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXJDb25leGlvbigpXG4gICAge1xuICAgICAgICB2YXIgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKTtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25UeXBlID09IGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdBdXRlbnRpY2FjacOzbicsICdObyBzZSBlbmNvbnRybyB1bmEgY29uZXhpw7NuIGEgaW50ZXJuZXQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdBdXRlbnRpY2FjacOzbicsICdVc3VhcmlvIG8gY29udHJhc2XDsWEgaW52w6FsaWRvcy4gUmVjdWVyZGEgcXVlIGVzdGEgYXBsaWNhY2nDs24gZXMgw7puaWNhbWVudGUgcGFyYSBjb2xhYm9yYWRvcmVzIGRlIFNvcnRlb3MgQW7DoWh1YWMuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGltZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFByaXZhY2lkYWQoUEsxKVxuICAgIHtcbiAgICAgICAgdGhpcy5QVVQucHV0RGF0YSh7fSwgXCJhcGkvQ29sYWJvcmFkb3IvQWN0dWFsaXphL1wiICsgUEsxKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUNUVUFMSVpBRE8gRVhJVE9TT1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLVxcblwiICsgcmVzLnRleHQoKSk7XG4gICAgICAgICAgICBpZihyZXMudGV4dCgpID09IFwiMVwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9zdHJhciBwcml2YWNpZGFkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhUHJpdmFjaWRhZCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb3N0cmFyIHByaXZhY2lkYWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFQcml2YWNpZGFkID0gMDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJpdmFjaWRhZCAtPiBcIiArIHRoaXMudmFsaWRhUHJpdmFjaWRhZCk7XG4gICAgICAgICAgICBpZih0aGlzLnZhbGlkYVByaXZhY2lkYWQgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vc3RyYW5kbyBwcml2YWNpZGFkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnZhbGlkYVByaXZhY2lkYWQgPT0gMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1vc3RyYW5kbyBwcml2YWNpZGFkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9zdHJhbmRvIHByaXZhY2lkYWR4MlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBQ1RVQUxJWkFETyBGQUxMSURPXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==