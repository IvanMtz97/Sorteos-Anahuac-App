"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var dialogs = require("ui/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var session_services_1 = require("../services/session/session.services");
var http_get_services_1 = require("../services/http-get/http-get.services");
var loading_1 = require("../services/loading/loading");
var platform_1 = require("platform");
var app = require("application");
var application_1 = require("application");
var Toast = require("nativescript-toast");
var VentaBoletoComponent = /** @class */ (function () {
    function VentaBoletoComponent(loading, GET, session, route, router, modal, vcRef) {
        this.loading = loading;
        this.GET = GET;
        this.session = session;
        this.route = route;
        this.router = router;
        this.modal = modal;
        this.vcRef = vcRef;
        this.Datos = [];
        this.status = true;
        this.cont = 0;
        this.PilaBoletos = [];
        this.Cargando = false;
        this.PK1 = 0;
        // Compradores: any = [
        //     {
        //         Nombre: "Milton Ivan",
        //         Appat: "Martinez",
        //         Apmat: "Gonzalez",
        //         Calle: "Mina de cobre",
        //         Numero: "306",
        //         Codigopostal: "66087",
        //         Colonia: "Estancia",
        //         Estado: "Nuevo Leon",
        //         Municipio: "San Nicolas",
        //         Telefonofijo: "83340359",
        //         Telefonomovil: "8126522105",
        //         Correoelectronico: "ivanmartinez.gonzalez97@gmail.com",
        //         Correoalternativo: ""
        //     },
        //     {
        //         Nombre: "Eduardo",
        //         Appat: "Vazquez",
        //         Apmat: "De La O",
        //         Calle: "Calle dos",
        //         Numero: "1332",
        //         Codigopostal: "64253",
        //         Colonia: "Jajatl",
        //         Estado: "Nuevo Leon",
        //         Municipio: "Escomiedo",
        //         Telefonofijo: "83340359",
        //         Telefonomovil: "8126522105",
        //         Correoelectronico: "eleduardojaja777youtube@vegeta.com",
        //         Correoalternativo: ""
        //     }
        // ];
        this.Compradores = [];
        this.Formulario = true;
        this.Nombre = "";
        this.Info2 = {
            Nombre: "Eduardo",
            Appat: "Vazquez",
            Apmat: "De La O",
            Calle: "Calle dos",
            Numero: "1332",
            Codigopostal: "64253",
            Colonia: "Jajatl",
            Estado: "Nuevo Leon",
            Municipio: "Escomiedo",
            Telefonofijo: "83340359",
            Telefonomovil: "8126522105",
            Correoelectronico: "eleduardojaja777youtube@vegeta.com",
            Correoalternativo: ""
        };
        this.Info = {
            Nombre: "",
            Appat: "",
            Apmat: "",
            Calle: "",
            Numero: "",
            Codigopostal: "",
            Colonia: "",
            Estado: "",
            Municipio: "",
            Telefonofijo: "",
            Telefonomovil: "",
            Correoelectronico: "",
            Correoalternativo: ""
        };
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    VentaBoletoComponent.prototype.AbrirModal = function () {
        // let options = {
        //     context: "Xdd",
        //     fullscreen: true,
        //     viewContainerRef: this.vcRef
        // };
        // this.modal.showModal(VentaBoletoModalComponent, options).then(res => {
        //     console.log(res);
        // });    
        this.Compradores = [];
        this.Formulario = !this.Formulario;
    };
    VentaBoletoComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        if (platform_1.isAndroid) {
            searchbar.android.clearFocus();
        }
    };
    VentaBoletoComponent.prototype.BuscarChange = function (evt) {
        var _this = this;
        if (evt.object.text.length > 1) {
            this.Cargando = true;
            this.GET.getDataAuthorization("api/Comprador/Buscar/" + this.PK1 + "/" + evt.object.text).subscribe(function (res) {
                _this.Cargando = false;
                _this.Compradores = res.json();
            }, function (error) {
                _this.Cargando = false;
            });
        }
    };
    VentaBoletoComponent.prototype.onTapList = function (evt) {
        var Apellidos = this.Compradores[evt.index].apellidos.split(" ");
        this.Info = {
            Nombre: this.Compradores[evt.index].nombre,
            Appat: Apellidos[0],
            Apmat: Apellidos[1],
            Calle: this.Compradores[evt.index].direccion.calle,
            Numero: this.Compradores[evt.index].direccion.numero,
            Codigopostal: this.Compradores[evt.index].direccion.codigo_postal,
            Colonia: this.Compradores[evt.index].direccion.colonia,
            Estado: this.Compradores[evt.index].direccion.estado,
            Municipio: this.Compradores[evt.index].direccion.municipio,
            Telefonofijo: this.Compradores[evt.index].direccion.telefono,
            Telefonomovil: this.Compradores[evt.index].celular,
            Correoelectronico: this.Compradores[evt.index].correo,
            Correoalternativo: ""
        };
        this.Formulario = true;
    };
    VentaBoletoComponent.prototype.Cancelar = function () {
        this.Formulario = !this.Formulario;
    };
    VentaBoletoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
        });
        this.PilaBoletos = [];
        this.PK1 = JSON.parse(this.session.getInformation()).clave;
        app.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            data.cancel = true;
            _this.router.navigate(["talonarios"]);
        });
    };
    VentaBoletoComponent.prototype.onDrawerButtonTap = function () {
        if (platform_1.isIOS) {
            this.router.back();
        }
        else if (platform_1.isAndroid) {
            this.drawerComponent.sideDrawer.showDrawer();
        }
    };
    VentaBoletoComponent.prototype.handleInputChanged = function (event) {
        if (event.object.id == "txtNombre")
            this.Info.Nombre = event.object.text;
        if (event.object.id == "txtAppat")
            this.Info.Appat = event.object.text;
        if (event.object.id == "txtApmat")
            this.Info.Apmat = event.object.text;
        if (event.object.id == "txtCalle")
            this.Info.Calle = event.object.text;
        if (event.object.id == "txtNumero")
            this.Info.Numero = event.object.text;
        if (event.object.id == "txtCodigopostal")
            this.Info.Codigopostal = event.object.text;
        if (event.object.id == "txtColonia")
            this.Info.Colonia = event.object.text;
        if (event.object.id == "txtEstado")
            this.Info.Estado = event.object.text;
        if (event.object.id == "txtMunicipio")
            this.Info.Municipio = event.object.text;
        if (event.object.id == "txtTelefonofijo")
            this.Info.Telefonofijo = event.object.text;
        if (event.object.id == "txtTelefonomovil")
            this.Info.Telefonomovil = event.object.text;
        if (event.object.id == "txtCorreoelectronico")
            this.Info.Correoelectronico = event.object.text;
        if (event.object.id == "txtCorreoalternativo")
            this.Info.Correoalternativo = event.object.text;
    };
    VentaBoletoComponent.prototype.toggleCheck = function () {
        this.status = !this.status;
    };
    VentaBoletoComponent.prototype.VenderBoleto = function () {
        if (!this.SoloLetras()) {
            dialogs.alert({
                title: "AVISO",
                message: "El nombre, apellido materno y apellido paterno no pueden contener numeros",
                okButtonText: "Ok"
            });
            return false;
        }
        if (this.ValidarCampos()) {
            this.router.navigate(["confirmar", JSON.stringify({
                    Talonario: this.Datos.Talonario,
                    Boleto: this.Datos,
                    Info: this.Info,
                    Tipo: "Uno"
                })]);
        }
        else {
            dialogs.alert({
                title: "AVISO",
                message: "Debes llenar todos los campos marcados *",
                okButtonText: "Ok"
            });
        }
    };
    VentaBoletoComponent.prototype.Anterior = function () {
        if (this.cont > 0) {
            this.PilaBoletos.splice(this.cont, 1);
            this.cont--;
        }
    };
    VentaBoletoComponent.prototype.Siguiente = function () {
        if (this.ValidarCampos()) {
            this.PilaBoletos.push({
                Boleto: this.Datos.Boletos[this.cont],
                Info: {
                    Nombre: this.Info.Nombre,
                    Appat: this.Info.Appat,
                    Apmat: this.Info.Apmat,
                    Calle: this.Info.Calle,
                    Numero: this.Info.Numero,
                    Codigopostal: this.Info.Codigopostal,
                    Colonia: this.Info.Colonia,
                    Estado: this.Info.Estado,
                    Municipio: this.Info.Municipio,
                    Telefonofijo: this.Info.Telefonofijo,
                    Telefonomovil: this.Info.Telefonomovil,
                    Correoelectronico: this.Info.Correoelectronico,
                    Correoalternativo: this.Info.Correoalternativo
                }
            });
            Toast.makeText("Boleto asignado", "short").show();
            this.cont++;
            if (this.cont == this.Datos.Boletos.length) {
                var Param = {
                    Tipo: "Varios",
                    Boletos: this.PilaBoletos,
                    Talonario: this.Datos.Talonario
                };
                this.router.navigate(["confirmar", JSON.stringify(Param)]);
            }
        }
        else {
            dialogs.alert({
                title: "AVISO",
                message: "Debes llenar todos los campos marcados *",
                okButtonText: "Ok"
            });
        }
    };
    VentaBoletoComponent.prototype.VenderTodos = function () {
        if (this.ValidarCampos()) {
            this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Todos", Boletos: this.Datos, Info: this.Info })]);
        }
        else {
            dialogs.alert({
                title: "AVISO",
                message: "Debes llenar todos los campos marcados *",
                okButtonText: "Ok"
            });
        }
    };
    VentaBoletoComponent.prototype.ValidarCampos = function () {
        if (this.Info.Nombre && this.Info.Appat && this.Info.Apmat && this.Info.Calle && this.Info.Numero && this.Info.Codigopostal && this.Info.Colonia && this.Info.Estado && this.Info.Municipio && this.Info.Telefonofijo && this.Info.Telefonomovil && this.Info.Correoelectronico) {
            if (this.Info.Correoalternativo.length < 1)
                this.Info.Correoalternativo = "n/a";
            return true;
        }
        else {
            return false;
        }
    };
    VentaBoletoComponent.prototype.SoloLetras = function () {
        for (var i = 0; i < this.Info.Appat.length; i++) {
            if (!isNaN(this.Info.Appat[i])) {
                console.log("APPAT CON NUMERO");
                return false;
            }
        }
        for (var i = 0; i < this.Info.Apmat.length; i++) {
            if (!isNaN(this.Info.Apmat[i])) {
                console.log("APPAT CON NUMERO");
                return false;
            }
        }
        var Nombre = this.Info.Nombre;
        if (!isNaN(Nombre)) {
            console.log("NOMBRE CON NUMERO");
            return false;
        }
        // for(var i = 0; i < Nombre.length; i++){
        //     if(!isNaN(this.Info.Nombre[i])){
        //         console.log("NOMBRE CON NUMERO");
        //         return false;
        //     }
        // }
        return true;
    };
    VentaBoletoComponent.prototype.LimpiarCampos = function () {
        this.Info = {
            Nombre: "",
            Appat: "",
            Apmat: "",
            Calle: "",
            Numero: "",
            Codigopostal: "",
            Colonia: "",
            Estado: "",
            Municipio: "",
            Telefonofijo: "",
            Telefonomovil: "",
            Correoelectronico: "",
            Correoalternativo: ""
        };
    };
    VentaBoletoComponent.prototype.onSubmit = function (args) {
        var _this = this;
        this.loading.display(true);
        var searchBar = args.object;
        searchBar.dismissSoftInput();
        searchBar.android.clearFocus();
        if (searchBar.text.length > 5) {
            dialogs.alert({
                title: "AVISO",
                message: "El codigo postal no debe llevar mas de 5 caracteres",
                okButtonText: "Ok"
            });
        }
        else {
            this.GET.getDataAuthorization("api/Comprador/Buscar/" + searchBar.text).subscribe(function (res) {
                _this.loading.display(false);
                console.log("200 COD POSTAL");
                if (res.json().length == 0) {
                    dialogs.alert({
                        title: "AVISO",
                        message: "No se encontraron datos para el codigo postal proporcionado",
                        okButtonText: "Ok"
                    });
                }
                else {
                    var Datos = res.json();
                    _this.Info.Estado = Datos[0].estado;
                    _this.Info.Municipio = Datos[0].municipio;
                    Toast.makeText("Estado y municipio cargado.", "short").show();
                }
            }, function (error) {
                console.log("500 COD POSTAL");
                console.log(error);
                _this.loading.display(false);
                dialogs.alert({
                    title: "AVISO",
                    message: "No se encontraron datos para el codigo postal proporcionado",
                    okButtonText: "Ok"
                });
            });
        }
    };
    VentaBoletoComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], VentaBoletoComponent.prototype, "ATodos", void 0);
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], VentaBoletoComponent.prototype, "drawerComponent", void 0);
    VentaBoletoComponent = __decorate([
        core_1.Component({
            selector: "VentaBoleto",
            moduleId: module.id,
            templateUrl: "./ventaboleto.component.html",
            styleUrls: ["./ventaboleto.scss"],
            providers: [http_get_services_1.MyHttpGetService, loading_1.LoadingService]
        }),
        __metadata("design:paramtypes", [loading_1.LoadingService, http_get_services_1.MyHttpGetService, session_services_1.SessionService, router_1.ActivatedRoute, router_extensions_1.RouterExtensions, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], VentaBoletoComponent);
    return VentaBoletoComponent;
}());
exports.VentaBoletoComponent = VentaBoletoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUloRixtRUFBNkU7QUFFN0UseUVBQXNFO0FBQ3RFLDRFQUEwRTtBQUMxRSx1REFBNkQ7QUFDN0QscUNBQTRDO0FBQzVDLGlDQUFtQztBQUNuQywyQ0FBc0Y7QUFJdEYsMENBQTRDO0FBVTVDO0lBa0ZJLDhCQUFvQixPQUF1QixFQUFVLEdBQXFCLEVBQVUsT0FBdUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsS0FBeUIsRUFBVSxLQUF1QjtRQUE1TixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQTlFeE8sVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUVoQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFFeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2Qyxr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WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBRSxvQ0FBZ0IsRUFBRSx3QkFBYyxDQUFFO1NBQ2xELENBQUM7eUNBb0YrQix3QkFBYyxFQUFlLG9DQUFnQixFQUFtQixpQ0FBYyxFQUFpQix1QkFBYyxFQUFrQixvQ0FBZ0IsRUFBaUIsNEJBQWtCLEVBQWlCLHVCQUFnQjtPQWxGdk8sb0JBQW9CLENBMFhoQztJQUFELDJCQUFDO0NBQUEsQUExWEQsSUEwWEM7QUExWFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7ICBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcblxyXG5pbXBvcnQgeyBWZW50YUJvbGV0b01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXSxcclxuICAgIHByb3ZpZGVyczogWyBNeUh0dHBHZXRTZXJ2aWNlLCBMb2FkaW5nU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBBVG9kb3M6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHByaXZhdGUgc3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgY29udCA9IDA7XHJcbiAgICBwcml2YXRlIFBpbGFCb2xldG9zOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XHJcbiAgICBDYXJnYW5kbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBQSzE6IG51bWJlciA9IDA7XHJcbiAgICAvLyBDb21wcmFkb3JlczogYW55ID0gW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgTm9tYnJlOiBcIk1pbHRvbiBJdmFuXCIsXHJcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIk1hcnRpbmV6XCIsXHJcbiAgICAvLyAgICAgICAgIEFwbWF0OiBcIkdvbnphbGV6XCIsXHJcbiAgICAvLyAgICAgICAgIENhbGxlOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjMwNlwiLFxyXG4gICAgLy8gICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjYwODdcIixcclxuICAgIC8vICAgICAgICAgQ29sb25pYTogXCJFc3RhbmNpYVwiLFxyXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxyXG4gICAgLy8gICAgICAgICBNdW5pY2lwaW86IFwiU2FuIE5pY29sYXNcIixcclxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgIC8vICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIE5vbWJyZTogXCJFZHVhcmRvXCIsXHJcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgIC8vICAgICAgICAgQXBtYXQ6IFwiRGUgTGEgT1wiLFxyXG4gICAgLy8gICAgICAgICBDYWxsZTogXCJDYWxsZSBkb3NcIixcclxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgIC8vICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY0MjUzXCIsXHJcbiAgICAvLyAgICAgICAgIENvbG9uaWE6IFwiSmFqYXRsXCIsXHJcbiAgICAvLyAgICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAvLyAgICAgICAgIE11bmljaXBpbzogXCJFc2NvbWllZG9cIixcclxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJlbGVkdWFyZG9qYWphNzc3eW91dHViZUB2ZWdldGEuY29tXCIsXHJcbiAgICAvLyAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gXTtcclxuXHJcbiAgICBDb21wcmFkb3JlczogYW55ID0gW107XHJcblxyXG4gICAgRm9ybXVsYXJpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBOb21icmU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgSW5mbzI6IGFueSA9IHtcclxuICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxyXG4gICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgICAgICBBcG1hdDogXCJEZSBMYSBPXCIsXHJcbiAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXHJcbiAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjQyNTNcIixcclxuICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxyXG4gICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIkVzY29taWVkb1wiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxyXG4gICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcImVsZWR1YXJkb2phamE3Nzd5b3V0dWJlQHZlZ2V0YS5jb21cIixcclxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgfTtcclxuICAgIHB1YmxpYyBJbmZvOiBhbnkgPSB7XHJcbiAgICAgICAgTm9tYnJlOiBcIlwiLFxyXG4gICAgICAgIEFwcGF0OiBcIlwiLFxyXG4gICAgICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgICAgIENhbGxlOiBcIlwiLFxyXG4gICAgICAgIE51bWVybzogXCJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAgICAgQ29sb25pYTogXCJcIixcclxuICAgICAgICBFc3RhZG86IFwiXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCJcIixcclxuICAgICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcclxuICAgIHsgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBBYnJpck1vZGFsKCl7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnRleHQ6IFwiWGRkXCIsXHJcbiAgICAgICAgLy8gICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvLyB9KTsgICAgXHJcbiAgICAgICAgdGhpcy5Db21wcmFkb3JlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRm9ybXVsYXJpbyA9ICF0aGlzLkZvcm11bGFyaW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNCTG9hZGVkKGFyZ3Mpe1xyXG4gICAgICAgIHZhciBzZWFyY2hiYXI6U2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZihpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICBzZWFyY2hiYXIuYW5kcm9pZC5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEJ1c2NhckNoYW5nZShldnQpe1xyXG4gICAgICAgIGlmKGV2dC5vYmplY3QudGV4dC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgdGhpcy5DYXJnYW5kbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0NvbXByYWRvci9CdXNjYXIvXCIgKyB0aGlzLlBLMSArIFwiL1wiICsgZXZ0Lm9iamVjdC50ZXh0KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2FyZ2FuZG8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcHJhZG9yZXMgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNhcmdhbmRvID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRhcExpc3QoZXZ0KXtcclxuICAgICAgICB2YXIgQXBlbGxpZG9zID0gdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmFwZWxsaWRvcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgdGhpcy5JbmZvID0ge1xyXG4gICAgICAgICAgICBOb21icmU6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5ub21icmUsXHJcbiAgICAgICAgICAgIEFwcGF0OiBBcGVsbGlkb3NbMF0sXHJcbiAgICAgICAgICAgIEFwbWF0OiBBcGVsbGlkb3NbMV0sXHJcbiAgICAgICAgICAgIENhbGxlOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmNhbGxlLFxyXG4gICAgICAgICAgICBOdW1lcm86IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24ubnVtZXJvLFxyXG4gICAgICAgICAgICBDb2RpZ29wb3N0YWw6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uY29kaWdvX3Bvc3RhbCxcclxuICAgICAgICAgICAgQ29sb25pYTogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jb2xvbmlhLFxyXG4gICAgICAgICAgICBFc3RhZG86IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uZXN0YWRvLFxyXG4gICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24ubXVuaWNpcGlvLFxyXG4gICAgICAgICAgICBUZWxlZm9ub2Zpam86IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24udGVsZWZvbm8sXHJcbiAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5jZWx1bGFyLFxyXG4gICAgICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmNvcnJlbyxcclxuICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuRm9ybXVsYXJpbyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgQ2FuY2VsYXIoKXtcclxuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSAhdGhpcy5Gb3JtdWxhcmlvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLlBpbGFCb2xldG9zID0gW107XHJcbiAgICAgICAgdGhpcy5QSzEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKS5jbGF2ZTsgICAgICAgIFxyXG4gICAgICAgIGFwcC5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKGlzSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgIH1lbHNlIGlmKGlzQW5kcm9pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE5vbWJyZVwiKSB0aGlzLkluZm8uTm9tYnJlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBwYXRcIikgdGhpcy5JbmZvLkFwcGF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBtYXRcIikgdGhpcy5JbmZvLkFwbWF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q2FsbGVcIikgdGhpcy5JbmZvLkNhbGxlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0TnVtZXJvXCIpIHRoaXMuSW5mby5OdW1lcm8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb2RpZ29wb3N0YWxcIikgdGhpcy5JbmZvLkNvZGlnb3Bvc3RhbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvbG9uaWFcIikgdGhpcy5JbmZvLkNvbG9uaWEgPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRFc3RhZG9cIikgdGhpcy5JbmZvLkVzdGFkbyA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE11bmljaXBpb1wiKSB0aGlzLkluZm8uTXVuaWNpcGlvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9maWpvXCIpIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRUZWxlZm9ub21vdmlsXCIpIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvZWxlY3Ryb25pY29cIikgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvYWx0ZXJuYXRpdm9cIikgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBWZW5kZXJCb2xldG8oKXtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuU29sb0xldHJhcygpKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBub21icmUsIGFwZWxsaWRvIG1hdGVybm8geSBhcGVsbGlkbyBwYXRlcm5vIG5vIHB1ZWRlbiBjb250ZW5lciBudW1lcm9zXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgVGFsb25hcmlvOiB0aGlzLkRhdG9zLlRhbG9uYXJpbyxcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcyxcclxuICAgICAgICAgICAgICAgIEluZm86IHRoaXMuSW5mbyxcclxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCJcclxuICAgICAgICAgICAgfSldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBBbnRlcmlvcigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZSh0aGlzLmNvbnQsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQtLTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2lndWllbnRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcy5Cb2xldG9zW3RoaXMuY29udF0sIFxyXG4gICAgICAgICAgICAgICAgSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vbWJyZTogdGhpcy5JbmZvLk5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBBcHBhdDogdGhpcy5JbmZvLkFwcGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIEFwbWF0OiB0aGlzLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FsbGU6IHRoaXMuSW5mby5DYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBOdW1lcm86IHRoaXMuSW5mby5OdW1lcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzdGFkbzogdGhpcy5JbmZvLkVzdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuSW5mby5NdW5pY2lwaW8sXHJcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IHRoaXMuSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiQm9sZXRvIGFzaWduYWRvXCIsIFwic2hvcnRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udCA9PSB0aGlzLkRhdG9zLkJvbGV0b3MubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgUGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGlwbzogXCJWYXJpb3NcIixcclxuICAgICAgICAgICAgICAgICAgICBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGhpcy5EYXRvcy5UYWxvbmFyaW9cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoUGFyYW0pXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MgbWFyY2Fkb3MgKlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFZlbmRlclRvZG9zKCl7XHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7VGlwbzogXCJUb2Rvc1wiLCBCb2xldG9zOiB0aGlzLkRhdG9zLCBJbmZvOiB0aGlzLkluZm8gfSldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBWYWxpZGFyQ2FtcG9zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuSW5mby5Ob21icmUgJiYgdGhpcy5JbmZvLkFwcGF0ICYmIHRoaXMuSW5mby5BcG1hdCAmJiB0aGlzLkluZm8uQ2FsbGUgJiYgdGhpcy5JbmZvLk51bWVybyAmJiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsICYmIHRoaXMuSW5mby5Db2xvbmlhICYmIHRoaXMuSW5mby5Fc3RhZG8gJiYgdGhpcy5JbmZvLk11bmljaXBpbyAmJiB0aGlzLkluZm8uVGVsZWZvbm9maWpvICYmIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsICYmIHRoaXMuSW5mby5Db3JyZW9lbGVjdHJvbmljbyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2by5sZW5ndGggPCAxKSB0aGlzLkluZm8uQ29ycmVvYWx0ZXJuYXRpdm8gPSBcIm4vYVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU29sb0xldHJhcygpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuSW5mby5BcHBhdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKCFpc05hTih0aGlzLkluZm8uQXBwYXRbaV0pKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVBQQVQgQ09OIE5VTUVST1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuSW5mby5BcG1hdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKCFpc05hTih0aGlzLkluZm8uQXBtYXRbaV0pKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVBQQVQgQ09OIE5VTUVST1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIE5vbWJyZSA9IHRoaXMuSW5mby5Ob21icmU7XHJcbiAgICAgICAgaWYoIWlzTmFOKE5vbWJyZSkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PTUJSRSBDT04gTlVNRVJPXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCBOb21icmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBpZighaXNOYU4odGhpcy5JbmZvLk5vbWJyZVtpXSkpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJOT01CUkUgQ09OIE5VTUVST1wiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBMaW1waWFyQ2FtcG9zKCl7XHJcbiAgICAgICAgdGhpcy5JbmZvID0ge1xyXG4gICAgICAgICAgICBOb21icmU6IFwiXCIsXHJcbiAgICAgICAgICAgIEFwcGF0OiBcIlwiLFxyXG4gICAgICAgICAgICBBcG1hdDogXCJcIixcclxuICAgICAgICAgICAgQ2FsbGU6IFwiXCIsXHJcbiAgICAgICAgICAgIE51bWVybzogXCJcIixcclxuICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIlwiLFxyXG4gICAgICAgICAgICBDb2xvbmlhOiBcIlwiLFxyXG4gICAgICAgICAgICBFc3RhZG86IFwiXCIsXHJcbiAgICAgICAgICAgIE11bmljaXBpbzogXCJcIixcclxuICAgICAgICAgICAgVGVsZWZvbm9maWpvOiBcIlwiLFxyXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxyXG4gICAgICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJcIixcclxuICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgc2VhcmNoQmFyLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgICBzZWFyY2hCYXIuYW5kcm9pZC5jbGVhckZvY3VzKCk7XHJcbiAgICAgICAgaWYoc2VhcmNoQmFyLnRleHQubGVuZ3RoID4gNSl7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb2RpZ28gcG9zdGFsIG5vIGRlYmUgbGxldmFyIG1hcyBkZSA1IGNhcmFjdGVyZXNcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkdFVC5nZXREYXRhQXV0aG9yaXphdGlvbihcImFwaS9Db21wcmFkb3IvQnVzY2FyL1wiKyBzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMCBDT0QgUE9TVEFMXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLmpzb24oKS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gc2UgZW5jb250cmFyb24gZGF0b3MgcGFyYSBlbCBjb2RpZ28gcG9zdGFsIHByb3BvcmNpb25hZG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBEYXRvcyA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmZvLkVzdGFkbyA9IERhdG9zWzBdLmVzdGFkbztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZm8uTXVuaWNpcGlvID0gRGF0b3NbMF0ubXVuaWNpcGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiRXN0YWRvIHkgbXVuaWNpcGlvIGNhcmdhZG8uXCIsIFwic2hvcnRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjUwMCBDT0QgUE9TVEFMXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk5vIHNlIGVuY29udHJhcm9uIGRhdG9zIHBhcmEgZWwgY29kaWdvIHBvc3RhbCBwcm9wb3JjaW9uYWRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxufSJdfQ==