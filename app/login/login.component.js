"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var http_get_services_1 = require("../services/http-get/http-get.services");
var session_services_1 = require("../services/session/session.services");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.Correo = "";
        this.Clave = "";
        this.avisoPrivacidad = "http://www.sorteoanahuac.mx/aviso-de-privacidad.pdf";
        page.actionBarHidden = true;
    }
    //GET -------->
    LoginComponent.prototype.IniciarSesion = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador')
            .subscribe(function (result) {
            console.log("RESULTADO RESPUESTA -----> ", result);
            _this.onGetData(result);
        }, function (error) {
            //this.loader.display(false);
            _this.mostrarMensaje('Autenticación', 'Usuario o contraseña invalidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
        });
    };
    LoginComponent.prototype.onGetData = function (data) {
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
        this.session.setToken(data.json().token);
        //this.router.navigate(["talonarios", JSON.stringify(data.json())], { clearHistory: true });
        this.router.navigate(["home"]);
    };
    //END GET --------->
    LoginComponent.prototype.Avisos = function () {
        utils.openUrl(this.avisoPrivacidad);
    };
    LoginComponent.prototype.ConoceSorteo = function () {
        console.log("CONOCE TU SORTEO");
        this.router.navigate(["consorteo"]);
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
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, http_get_services_1.MyHttpGetService, session_services_1.SessionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBUzdEO0lBQUE7SUFPQSxDQUFDO0lBTkc7O2tFQUU4RDtJQUM5RCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQU5RLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7T0FDVyxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxufVxuIl19
