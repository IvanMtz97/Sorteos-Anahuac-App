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
                console.log("RESPUESTA BUSCAR COMPRADOR");
                console.dir(_this.Compradores);
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
        console.log("CLAVE VENTA BOLETO: " + this.PK1);
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
        if (this.ValidarCampos()) {
            if (!this.SoloLetras()) {
                dialogs.alert({
                    title: "AVISO",
                    message: "El nombre, apellido paterno y apellido materno no pueden contener números",
                    okButtonText: "Ok"
                });
                return false;
            }
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
            if (!this.SoloLetras()) {
                dialogs.alert({
                    title: "AVISO",
                    message: "El nombre, apellido paterno y apellido materno no pueden contener números",
                    okButtonText: "Ok"
                });
                return false;
            }
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
                message: "El código postal no debe llevar más de 5 caracteres",
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
                        message: "No se encontraron datos para el código postal proporcionado",
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
                    message: "No se encontraron datos para el código postal proporcionado",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUloRixtRUFBNkU7QUFFN0UseUVBQXNFO0FBQ3RFLDRFQUEwRTtBQUMxRSx1REFBNkQ7QUFDN0QscUNBQTRDO0FBQzVDLGlDQUFtQztBQUNuQywyQ0FBc0Y7QUFJdEYsMENBQTRDO0FBVTVDO0lBa0ZJLDhCQUFvQixPQUF1QixFQUFVLEdBQXFCLEVBQVUsT0FBdUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsS0FBeUIsRUFBVSxLQUF1QjtRQUE1TixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQTlFeE8sVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUVoQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFFeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2Qyxr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TUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsb0JBQVMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBa0IsR0FBbEIsVUFBbUIsS0FBSztRQUNwQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4RSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4RSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJ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LE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBM1hpQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBUyxpQkFBVTt3REFBQztJQUNoQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2lFQUFDO0lBRnBELG9CQUFvQjtRQVJoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUUsb0NBQWdCLEVBQUUsd0JBQWMsQ0FBRTtTQUNsRCxDQUFDO3lDQW9GK0Isd0JBQWMsRUFBZSxvQ0FBZ0IsRUFBbUIsaUNBQWMsRUFBaUIsdUJBQWMsRUFBa0Isb0NBQWdCLEVBQWlCLDRCQUFrQixFQUFpQix1QkFBZ0I7T0FsRnZPLG9CQUFvQixDQTZYaEM7SUFBRCwyQkFBQztDQUFBLEFBN1hELElBNlhDO0FBN1hZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7ICBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcblxuaW1wb3J0IHsgVmVudGFCb2xldG9Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3ZlbnRhYm9sZXRvLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlZlbnRhQm9sZXRvXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3ZlbnRhYm9sZXRvLnNjc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbIE15SHR0cEdldFNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWZW50YUJvbGV0b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBBVG9kb3M6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gICAgcHJpdmF0ZSBzdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgY29udCA9IDA7XG4gICAgcHJpdmF0ZSBQaWxhQm9sZXRvczogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcbiAgICBDYXJnYW5kbzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIFBLMTogbnVtYmVyID0gMDtcbiAgICAvLyBDb21wcmFkb3JlczogYW55ID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBOb21icmU6IFwiTWlsdG9uIEl2YW5cIixcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIk1hcnRpbmV6XCIsXG4gICAgLy8gICAgICAgICBBcG1hdDogXCJHb256YWxlelwiLFxuICAgIC8vICAgICAgICAgQ2FsbGU6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjMwNlwiLFxuICAgIC8vICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY2MDg3XCIsXG4gICAgLy8gICAgICAgICBDb2xvbmlhOiBcIkVzdGFuY2lhXCIsXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxuICAgIC8vICAgICAgICAgTXVuaWNpcGlvOiBcIlNhbiBOaWNvbGFzXCIsXG4gICAgLy8gICAgICAgICBUZWxlZm9ub2Zpam86IFwiODMzNDAzNTlcIixcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxuICAgIC8vICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXG4gICAgLy8gICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxuXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIE5vbWJyZTogXCJFZHVhcmRvXCIsXG4gICAgLy8gICAgICAgICBBcHBhdDogXCJWYXpxdWV6XCIsXG4gICAgLy8gICAgICAgICBBcG1hdDogXCJEZSBMYSBPXCIsXG4gICAgLy8gICAgICAgICBDYWxsZTogXCJDYWxsZSBkb3NcIixcbiAgICAvLyAgICAgICAgIE51bWVybzogXCIxMzMyXCIsXG4gICAgLy8gICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjQyNTNcIixcbiAgICAvLyAgICAgICAgIENvbG9uaWE6IFwiSmFqYXRsXCIsXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxuICAgIC8vICAgICAgICAgTXVuaWNpcGlvOiBcIkVzY29taWVkb1wiLFxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXG4gICAgLy8gICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcbiAgICAvLyAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcImVsZWR1YXJkb2phamE3Nzd5b3V0dWJlQHZlZ2V0YS5jb21cIixcbiAgICAvLyAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXG4gICAgLy8gICAgIH1cbiAgICAvLyBdO1xuXG4gICAgQ29tcHJhZG9yZXM6IGFueSA9IFtdO1xuXG4gICAgRm9ybXVsYXJpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgTm9tYnJlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBJbmZvMjogYW55ID0ge1xuICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxuICAgICAgICBBcHBhdDogXCJWYXpxdWV6XCIsXG4gICAgICAgIEFwbWF0OiBcIkRlIExhIE9cIixcbiAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXG4gICAgICAgIE51bWVybzogXCIxMzMyXCIsXG4gICAgICAgIENvZGlnb3Bvc3RhbDogXCI2NDI1M1wiLFxuICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxuICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxuICAgICAgICBNdW5pY2lwaW86IFwiRXNjb21pZWRvXCIsXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxuICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcbiAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiZWxlZHVhcmRvamFqYTc3N3lvdXR1YmVAdmVnZXRhLmNvbVwiLFxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxuICAgIH07XG4gICAgcHVibGljIEluZm86IGFueSA9IHtcbiAgICAgICAgTm9tYnJlOiBcIlwiLFxuICAgICAgICBBcHBhdDogXCJcIixcbiAgICAgICAgQXBtYXQ6IFwiXCIsXG4gICAgICAgIENhbGxlOiBcIlwiLFxuICAgICAgICBOdW1lcm86IFwiXCIsXG4gICAgICAgIENvZGlnb3Bvc3RhbDogXCJcIixcbiAgICAgICAgQ29sb25pYTogXCJcIixcbiAgICAgICAgRXN0YWRvOiBcIlwiLFxuICAgICAgICBNdW5pY2lwaW86IFwiXCIsXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCJcIixcbiAgICAgICAgVGVsZWZvbm9tb3ZpbDogXCJcIixcbiAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiXCIsXG4gICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcbiAgICB7IFxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7IFxuICAgIH1cblxuICAgIEFicmlyTW9kYWwoKXtcbiAgICAgICAgdGhpcy5Db21wcmFkb3JlcyA9IFtdO1xuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSAhdGhpcy5Gb3JtdWxhcmlvO1xuICAgIH1cblxuICAgIHB1YmxpYyBzQkxvYWRlZChhcmdzKXtcbiAgICAgICAgdmFyIHNlYXJjaGJhcjpTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZihpc0FuZHJvaWQpe1xuICAgICAgICAgICAgc2VhcmNoYmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQnVzY2FyQ2hhbmdlKGV2dCl7XG4gICAgICAgIGlmKGV2dC5vYmplY3QudGV4dC5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIHRoaXMuQ2FyZ2FuZG8gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5HRVQuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQ29tcHJhZG9yL0J1c2Nhci9cIiArIHRoaXMuUEsxICsgXCIvXCIgKyBldnQub2JqZWN0LnRleHQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FyZ2FuZG8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXByYWRvcmVzID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BVRVNUQSBCVVNDQVIgQ09NUFJBRE9SXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuQ29tcHJhZG9yZXMpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FyZ2FuZG8gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UYXBMaXN0KGV2dCl7XG4gICAgICAgIHZhciBBcGVsbGlkb3MgPSB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uYXBlbGxpZG9zLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5JbmZvID0ge1xuICAgICAgICAgICAgTm9tYnJlOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0ubm9tYnJlLFxuICAgICAgICAgICAgQXBwYXQ6IEFwZWxsaWRvc1swXSxcbiAgICAgICAgICAgIEFwbWF0OiBBcGVsbGlkb3NbMV0sXG4gICAgICAgICAgICBDYWxsZTogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jYWxsZSxcbiAgICAgICAgICAgIE51bWVybzogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5udW1lcm8sXG4gICAgICAgICAgICBDb2RpZ29wb3N0YWw6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uY29kaWdvX3Bvc3RhbCxcbiAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uY29sb25pYSxcbiAgICAgICAgICAgIEVzdGFkbzogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5lc3RhZG8sXG4gICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24ubXVuaWNpcGlvLFxuICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLnRlbGVmb25vLFxuICAgICAgICAgICAgVGVsZWZvbm9tb3ZpbDogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmNlbHVsYXIsXG4gICAgICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmNvcnJlbyxcbiAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuRm9ybXVsYXJpbyA9IHRydWU7XG4gICAgfVxuXG4gICAgQ2FuY2VsYXIoKXtcbiAgICAgICAgdGhpcy5Gb3JtdWxhcmlvID0gIXRoaXMuRm9ybXVsYXJpbztcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuUGlsYUJvbGV0b3MgPSBbXTtcbiAgICAgICAgdGhpcy5QSzEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKS5jbGF2ZTsgICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIkNMQVZFIFZFTlRBIEJPTEVUTzogXCIgKyB0aGlzLlBLMSk7XG4gICAgICAgIGFwcC5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBpZihpc0lPUyl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gICAgICAgIH1lbHNlIGlmKGlzQW5kcm9pZCl7XG4gICAgICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlZChldmVudCl7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE5vbWJyZVwiKSB0aGlzLkluZm8uTm9tYnJlID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dEFwcGF0XCIpIHRoaXMuSW5mby5BcHBhdCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRBcG1hdFwiKSB0aGlzLkluZm8uQXBtYXQgPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q2FsbGVcIikgdGhpcy5JbmZvLkNhbGxlID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE51bWVyb1wiKSB0aGlzLkluZm8uTnVtZXJvID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvZGlnb3Bvc3RhbFwiKSB0aGlzLkluZm8uQ29kaWdvcG9zdGFsID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvbG9uaWFcIikgdGhpcy5JbmZvLkNvbG9uaWEgPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0RXN0YWRvXCIpIHRoaXMuSW5mby5Fc3RhZG8gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0TXVuaWNpcGlvXCIpIHRoaXMuSW5mby5NdW5pY2lwaW8gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9maWpvXCIpIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9tb3ZpbFwiKSB0aGlzLkluZm8uVGVsZWZvbm9tb3ZpbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb3JyZW9lbGVjdHJvbmljb1wiKSB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvYWx0ZXJuYXRpdm9cIikgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgVmVuZGVyQm9sZXRvKCl7XG5cbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xuICAgICAgICAgICAgaWYoIXRoaXMuU29sb0xldHJhcygpKXtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBub21icmUsIGFwZWxsaWRvIHBhdGVybm8geSBhcGVsbGlkbyBtYXRlcm5vIG5vIHB1ZWRlbiBjb250ZW5lciBuw7ptZXJvc1wiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNvbmZpcm1hclwiLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgVGFsb25hcmlvOiB0aGlzLkRhdG9zLlRhbG9uYXJpbyxcbiAgICAgICAgICAgICAgICBCb2xldG86IHRoaXMuRGF0b3MsXG4gICAgICAgICAgICAgICAgSW5mbzogdGhpcy5JbmZvLFxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCJcbiAgICAgICAgICAgIH0pXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zIG1hcmNhZG9zICpcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIEFudGVyaW9yKCl7XG4gICAgICAgIGlmKHRoaXMuY29udCA+IDApe1xuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5zcGxpY2UodGhpcy5jb250LCAxKTtcbiAgICAgICAgICAgIHRoaXMuY29udC0tO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIHByaXZhdGUgU2lndWllbnRlKCl7XG4gICAgICAgIGlmKHRoaXMuVmFsaWRhckNhbXBvcygpKXtcblxuICAgICAgICAgICAgaWYoIXRoaXMuU29sb0xldHJhcygpKXtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBub21icmUsIGFwZWxsaWRvIHBhdGVybm8geSBhcGVsbGlkbyBtYXRlcm5vIG5vIHB1ZWRlbiBjb250ZW5lciBuw7ptZXJvc1wiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBCb2xldG86IHRoaXMuRGF0b3MuQm9sZXRvc1t0aGlzLmNvbnRdLCBcbiAgICAgICAgICAgICAgICBJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIE5vbWJyZTogdGhpcy5JbmZvLk5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgQXBwYXQ6IHRoaXMuSW5mby5BcHBhdCxcbiAgICAgICAgICAgICAgICAgICAgQXBtYXQ6IHRoaXMuSW5mby5BcG1hdCxcbiAgICAgICAgICAgICAgICAgICAgQ2FsbGU6IHRoaXMuSW5mby5DYWxsZSxcbiAgICAgICAgICAgICAgICAgICAgTnVtZXJvOiB0aGlzLkluZm8uTnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICBDb2RpZ29wb3N0YWw6IHRoaXMuSW5mby5Db2RpZ29wb3N0YWwsXG4gICAgICAgICAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuSW5mby5Db2xvbmlhLFxuICAgICAgICAgICAgICAgICAgICBFc3RhZG86IHRoaXMuSW5mby5Fc3RhZG8sXG4gICAgICAgICAgICAgICAgICAgIE11bmljaXBpbzogdGhpcy5JbmZvLk11bmljaXBpbyxcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkluZm8uVGVsZWZvbm9maWpvLFxuICAgICAgICAgICAgICAgICAgICBUZWxlZm9ub21vdmlsOiB0aGlzLkluZm8uVGVsZWZvbm9tb3ZpbCxcbiAgICAgICAgICAgICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IHRoaXMuSW5mby5Db3JyZW9lbGVjdHJvbmljbyxcbiAgICAgICAgICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2b1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIkJvbGV0byBhc2lnbmFkb1wiLCBcInNob3J0XCIpLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuY29udCsrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmNvbnQgPT0gdGhpcy5EYXRvcy5Cb2xldG9zLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICB2YXIgUGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIFRpcG86IFwiVmFyaW9zXCIsXG4gICAgICAgICAgICAgICAgICAgIEJvbGV0b3M6IHRoaXMuUGlsYUJvbGV0b3MsXG4gICAgICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGhpcy5EYXRvcy5UYWxvbmFyaW9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoUGFyYW0pXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zIG1hcmNhZG9zICpcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgVmVuZGVyVG9kb3MoKXtcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXNpZ25hY2lvbmV4aXRvc2FcIiwgSlNPTi5zdHJpbmdpZnkoe1RpcG86IFwiVG9kb3NcIiwgQm9sZXRvczogdGhpcy5EYXRvcywgSW5mbzogdGhpcy5JbmZvIH0pXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zIG1hcmNhZG9zICpcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIFZhbGlkYXJDYW1wb3MoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHRoaXMuSW5mby5Ob21icmUgJiYgdGhpcy5JbmZvLkFwcGF0ICYmIHRoaXMuSW5mby5BcG1hdCAmJiB0aGlzLkluZm8uQ2FsbGUgJiYgdGhpcy5JbmZvLk51bWVybyAmJiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsICYmIHRoaXMuSW5mby5Db2xvbmlhICYmIHRoaXMuSW5mby5Fc3RhZG8gJiYgdGhpcy5JbmZvLk11bmljaXBpbyAmJiB0aGlzLkluZm8uVGVsZWZvbm9maWpvICYmIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsICYmIHRoaXMuSW5mby5Db3JyZW9lbGVjdHJvbmljbyl7XG4gICAgICAgICAgICBpZih0aGlzLkluZm8uQ29ycmVvYWx0ZXJuYXRpdm8ubGVuZ3RoIDwgMSkgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gXCJuL2FcIjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTb2xvTGV0cmFzKCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLkluZm8uQXBwYXQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoIWlzTmFOKHRoaXMuSW5mby5BcHBhdFtpXSkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVBQQVQgQ09OIE5VTUVST1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5JbmZvLkFwbWF0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKCFpc05hTih0aGlzLkluZm8uQXBtYXRbaV0pKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFQUEFUIENPTiBOVU1FUk9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIE5vbWJyZSA9IHRoaXMuSW5mby5Ob21icmU7XG4gICAgICAgIGlmKCFpc05hTihOb21icmUpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9NQlJFIENPTiBOVU1FUk9cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IE5vbWJyZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vICAgICBpZighaXNOYU4odGhpcy5JbmZvLk5vbWJyZVtpXSkpe1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9NQlJFIENPTiBOVU1FUk9cIik7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBMaW1waWFyQ2FtcG9zKCl7XG4gICAgICAgIHRoaXMuSW5mbyA9IHtcbiAgICAgICAgICAgIE5vbWJyZTogXCJcIixcbiAgICAgICAgICAgIEFwcGF0OiBcIlwiLFxuICAgICAgICAgICAgQXBtYXQ6IFwiXCIsXG4gICAgICAgICAgICBDYWxsZTogXCJcIixcbiAgICAgICAgICAgIE51bWVybzogXCJcIixcbiAgICAgICAgICAgIENvZGlnb3Bvc3RhbDogXCJcIixcbiAgICAgICAgICAgIENvbG9uaWE6IFwiXCIsXG4gICAgICAgICAgICBFc3RhZG86IFwiXCIsXG4gICAgICAgICAgICBNdW5pY2lwaW86IFwiXCIsXG4gICAgICAgICAgICBUZWxlZm9ub2Zpam86IFwiXCIsXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxuICAgICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiXCIsXG4gICAgICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KHRydWUpO1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgc2VhcmNoQmFyLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgc2VhcmNoQmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICBpZihzZWFyY2hCYXIudGV4dC5sZW5ndGggPiA1KXtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiQVZJU09cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIGPDs2RpZ28gcG9zdGFsIG5vIGRlYmUgbGxldmFyIG3DoXMgZGUgNSBjYXJhY3RlcmVzXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0NvbXByYWRvci9CdXNjYXIvXCIrIHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDAgQ09EIFBPU1RBTFwiKTtcbiAgICAgICAgICAgICAgICBpZihyZXMuanNvbigpLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJObyBzZSBlbmNvbnRyYXJvbiBkYXRvcyBwYXJhIGVsIGPDs2RpZ28gcG9zdGFsIHByb3BvcmNpb25hZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgRGF0b3MgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZm8uRXN0YWRvID0gRGF0b3NbMF0uZXN0YWRvO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZm8uTXVuaWNpcGlvID0gRGF0b3NbMF0ubXVuaWNpcGlvO1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIkVzdGFkbyB5IG11bmljaXBpbyBjYXJnYWRvLlwiLCBcInNob3J0XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI1MDAgQ09EIFBPU1RBTFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk5vIHNlIGVuY29udHJhcm9uIGRhdG9zIHBhcmEgZWwgY8OzZGlnbyBwb3N0YWwgcHJvcG9yY2lvbmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxufSJdfQ==