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
        //Colonias: Array<Object> = [{ colonia: "Estancia"},{colonia: "Reales"},{colonia: "Costas"}];
        this.Colonias = [];
        this.idComprador = -1;
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
                //this.idComprador = res.json().comprador.id;
                console.log("RESPUESTA BUSCAR COMPRADOR");
                console.dir(_this.Compradores);
                //console.log("ID COMPRADOR: " + this.idComprador);
            }, function (error) {
                _this.Cargando = false;
            });
        }
    };
    VentaBoletoComponent.prototype.onTapList = function (evt) {
        this.idComprador = this.Compradores[evt.index].pk1 == "" ? -1 : this.Compradores[evt.index].pk1;
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
        if (platform_1.isAndroid) {
            app.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
                data.cancel = true;
                _this.router.navigate(["talonarios"]);
            });
        }
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
            if (!this.validateEmail(this.Info.Correoelectronico)) {
                dialogs.alert({
                    title: "AVISO",
                    message: "Debe introducir un correo válido.",
                    okButtonText: "Ok"
                });
                return false;
            }
            this.router.navigate(["confirmar", JSON.stringify({
                    Talonario: this.Datos.Talonario,
                    Boleto: this.Datos,
                    Info: this.Info,
                    Tipo: "Uno",
                    id: this.idComprador
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
            if (!this.validateEmail(this.Info.Correoelectronico)) {
                dialogs.alert({
                    title: "AVISO",
                    message: "Debe introducir un correo válido.",
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
                    Talonario: this.Datos.Talonario,
                    id: this.idComprador
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
        //        searchBar.android.clearFocus();
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
                    _this.Colonias = [];
                    var Datos = res.json();
                    console.dir(Datos);
                    if (Datos.length == 1) {
                        _this.Info.Colonia = Datos[0].colonia;
                    }
                    else {
                        Datos.forEach(function (item) {
                            this.Colonias.push({ colonia: item.colonia });
                        }.bind(_this));
                    }
                    _this.Info.Estado = Datos[0].estado;
                    _this.Info.Municipio = Datos[0].municipio;
                    dialogs.alert({
                        title: "AVISO",
                        message: "Estado y municipio cargado.",
                        okButtonText: "Ok"
                    });
                    //Toast.makeText("Estado y municipio cargado.", "short").show();
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
    VentaBoletoComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    };
    VentaBoletoComponent.prototype.onColoniaTap = function (evt) {
        console.log("ON COLONIA TAP");
        console.log(evt.index);
        this.Info.Colonia = this.Colonias[evt.index].colonia;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUloRixtRUFBNkU7QUFFN0UseUVBQXNFO0FBQ3RFLDRFQUEwRTtBQUMxRSx1REFBNkQ7QUFDN0QscUNBQTRDO0FBQzVDLGlDQUFtQztBQUNuQywyQ0FBc0Y7QUFJdEYsMENBQTRDO0FBVTVDO0lBcUZJLDhCQUFvQixPQUF1QixFQUFVLEdBQXFCLEVBQVUsT0FBdUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsS0FBeUIsRUFBVSxLQUF1QjtRQUE1TixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWpGeE8sVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUVoQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFFeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQiw2RkFBNkY7UUFDN0YsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXpCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixrQ0FBa0M7UUFDbEMseUJBQXlCO1FBQ3pCLGlDQUFpQztR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QW9CO1FBUmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBRSxvQ0FBZ0IsRUFBRSx3QkFBYyxDQUFFO1NBQ2xELENBQUM7eUNBdUYrQix3QkFBYyxFQUFlLG9DQUFnQixFQUFtQixpQ0FBYyxFQUFpQix1QkFBYyxFQUFrQixvQ0FBZ0IsRUFBaUIsNEJBQWtCLEVBQWlCLHVCQUFnQjtPQXJGdk8sb0JBQW9CLENBaWJoQztJQUFELDJCQUFDO0NBQUEsQUFqYkQsSUFpYkM7QUFqYlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuXG5pbXBvcnQgeyBWZW50YUJvbGV0b01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmVudGFib2xldG8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXSxcbiAgICBwcm92aWRlcnM6IFsgTXlIdHRwR2V0U2VydmljZSwgTG9hZGluZ1NlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiQ0IxXCIpIEFUb2RvczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgRGF0b3M6IGFueSA9IFtdO1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgICBwcml2YXRlIHN0YXR1czogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBjb250ID0gMDtcbiAgICBwcml2YXRlIFBpbGFCb2xldG9zOiBBcnJheTxPYmplY3Q+ID0gW107XG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xuICAgIENhcmdhbmRvOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy9Db2xvbmlhczogQXJyYXk8T2JqZWN0PiA9IFt7IGNvbG9uaWE6IFwiRXN0YW5jaWFcIn0se2NvbG9uaWE6IFwiUmVhbGVzXCJ9LHtjb2xvbmlhOiBcIkNvc3Rhc1wifV07XG4gICAgQ29sb25pYXM6IGFueSA9IFtdO1xuICAgIGlkQ29tcHJhZG9yOiBOdW1iZXIgPSAtMTtcblxuICAgIFBLMTogbnVtYmVyID0gMDtcbiAgICAvLyBDb21wcmFkb3JlczogYW55ID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBOb21icmU6IFwiTWlsdG9uIEl2YW5cIixcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIk1hcnRpbmV6XCIsXG4gICAgLy8gICAgICAgICBBcG1hdDogXCJHb256YWxlelwiLFxuICAgIC8vICAgICAgICAgQ2FsbGU6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjMwNlwiLFxuICAgIC8vICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY2MDg3XCIsXG4gICAgLy8gICAgICAgICBDb2xvbmlhOiBcIkVzdGFuY2lhXCIsXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxuICAgIC8vICAgICAgICAgTXVuaWNpcGlvOiBcIlNhbiBOaWNvbGFzXCIsXG4gICAgLy8gICAgICAgICBUZWxlZm9ub2Zpam86IFwiODMzNDAzNTlcIixcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxuICAgIC8vICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXG4gICAgLy8gICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxuXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIE5vbWJyZTogXCJFZHVhcmRvXCIsXG4gICAgLy8gICAgICAgICBBcHBhdDogXCJWYXpxdWV6XCIsXG4gICAgLy8gICAgICAgICBBcG1hdDogXCJEZSBMYSBPXCIsXG4gICAgLy8gICAgICAgICBDYWxsZTogXCJDYWxsZSBkb3NcIixcbiAgICAvLyAgICAgICAgIE51bWVybzogXCIxMzMyXCIsXG4gICAgLy8gICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjQyNTNcIixcbiAgICAvLyAgICAgICAgIENvbG9uaWE6IFwiSmFqYXRsXCIsXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxuICAgIC8vICAgICAgICAgTXVuaWNpcGlvOiBcIkVzY29taWVkb1wiLFxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXG4gICAgLy8gICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcbiAgICAvLyAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcImVsZWR1YXJkb2phamE3Nzd5b3V0dWJlQHZlZ2V0YS5jb21cIixcbiAgICAvLyAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXG4gICAgLy8gICAgIH1cbiAgICAvLyBdO1xuXG4gICAgQ29tcHJhZG9yZXM6IGFueSA9IFtdO1xuXG4gICAgRm9ybXVsYXJpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgTm9tYnJlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBJbmZvMjogYW55ID0ge1xuICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxuICAgICAgICBBcHBhdDogXCJWYXpxdWV6XCIsXG4gICAgICAgIEFwbWF0OiBcIkRlIExhIE9cIixcbiAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXG4gICAgICAgIE51bWVybzogXCIxMzMyXCIsXG4gICAgICAgIENvZGlnb3Bvc3RhbDogXCI2NDI1M1wiLFxuICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxuICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxuICAgICAgICBNdW5pY2lwaW86IFwiRXNjb21pZWRvXCIsXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxuICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcbiAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiZWxlZHVhcmRvamFqYTc3N3lvdXR1YmVAdmVnZXRhLmNvbVwiLFxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxuICAgIH07XG4gICAgcHVibGljIEluZm86IGFueSA9IHtcbiAgICAgICAgTm9tYnJlOiBcIlwiLFxuICAgICAgICBBcHBhdDogXCJcIixcbiAgICAgICAgQXBtYXQ6IFwiXCIsXG4gICAgICAgIENhbGxlOiBcIlwiLFxuICAgICAgICBOdW1lcm86IFwiXCIsXG4gICAgICAgIENvZGlnb3Bvc3RhbDogXCJcIixcbiAgICAgICAgQ29sb25pYTogXCJcIixcbiAgICAgICAgRXN0YWRvOiBcIlwiLFxuICAgICAgICBNdW5pY2lwaW86IFwiXCIsXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCJcIixcbiAgICAgICAgVGVsZWZvbm9tb3ZpbDogXCJcIixcbiAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiXCIsXG4gICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcbiAgICB7IFxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7IFxuICAgIH1cblxuICAgIEFicmlyTW9kYWwoKXtcbiAgICAgICAgdGhpcy5Db21wcmFkb3JlcyA9IFtdO1xuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSAhdGhpcy5Gb3JtdWxhcmlvO1xuICAgIH1cblxuICAgIHB1YmxpYyBzQkxvYWRlZChhcmdzKXtcbiAgICAgICAgdmFyIHNlYXJjaGJhcjpTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZihpc0FuZHJvaWQpe1xuICAgICAgICAgICAgc2VhcmNoYmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQnVzY2FyQ2hhbmdlKGV2dCl7XG4gICAgICAgIGlmKGV2dC5vYmplY3QudGV4dC5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIHRoaXMuQ2FyZ2FuZG8gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5HRVQuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQ29tcHJhZG9yL0J1c2Nhci9cIiArIHRoaXMuUEsxICsgXCIvXCIgKyBldnQub2JqZWN0LnRleHQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FyZ2FuZG8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXByYWRvcmVzID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuaWRDb21wcmFkb3IgPSByZXMuanNvbigpLmNvbXByYWRvci5pZDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BVRVNUQSBCVVNDQVIgQ09NUFJBRE9SXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuQ29tcHJhZG9yZXMpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJRCBDT01QUkFET1I6IFwiICsgdGhpcy5pZENvbXByYWRvcik7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5DYXJnYW5kbyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRhcExpc3QoZXZ0KXtcbiAgICAgICAgdGhpcy5pZENvbXByYWRvciA9IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5wazEgPT0gXCJcIiA/IC0xIDogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLnBrMTtcbiAgICAgICAgdmFyIEFwZWxsaWRvcyA9IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5hcGVsbGlkb3Muc3BsaXQoXCIgXCIpO1xuICAgICAgICB0aGlzLkluZm8gPSB7XG4gICAgICAgICAgICBOb21icmU6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5ub21icmUsXG4gICAgICAgICAgICBBcHBhdDogQXBlbGxpZG9zWzBdLFxuICAgICAgICAgICAgQXBtYXQ6IEFwZWxsaWRvc1sxXSxcbiAgICAgICAgICAgIENhbGxlOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmNhbGxlLFxuICAgICAgICAgICAgTnVtZXJvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm51bWVybyxcbiAgICAgICAgICAgIENvZGlnb3Bvc3RhbDogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jb2RpZ29fcG9zdGFsLFxuICAgICAgICAgICAgQ29sb25pYTogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jb2xvbmlhLFxuICAgICAgICAgICAgRXN0YWRvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmVzdGFkbyxcbiAgICAgICAgICAgIE11bmljaXBpbzogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5tdW5pY2lwaW8sXG4gICAgICAgICAgICBUZWxlZm9ub2Zpam86IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24udGVsZWZvbm8sXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uY2VsdWxhcixcbiAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uY29ycmVvLFxuICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5Gb3JtdWxhcmlvID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBDYW5jZWxhcigpe1xuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSAhdGhpcy5Gb3JtdWxhcmlvO1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuRGF0b3MgPSBKU09OLnBhcnNlKHBhcmFtc1tcImRhdGFcIl0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5QaWxhQm9sZXRvcyA9IFtdO1xuICAgICAgICB0aGlzLlBLMSA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpLmNsYXZlOyAgICAgICAgXG4gICAgICAgIGlmKGlzQW5kcm9pZCl7XG4gICAgICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBpZihpc0lPUyl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gICAgICAgIH1lbHNlIGlmKGlzQW5kcm9pZCl7XG4gICAgICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlZChldmVudCl7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE5vbWJyZVwiKSB0aGlzLkluZm8uTm9tYnJlID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dEFwcGF0XCIpIHRoaXMuSW5mby5BcHBhdCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRBcG1hdFwiKSB0aGlzLkluZm8uQXBtYXQgPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q2FsbGVcIikgdGhpcy5JbmZvLkNhbGxlID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE51bWVyb1wiKSB0aGlzLkluZm8uTnVtZXJvID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvZGlnb3Bvc3RhbFwiKSB0aGlzLkluZm8uQ29kaWdvcG9zdGFsID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvbG9uaWFcIikgdGhpcy5JbmZvLkNvbG9uaWEgPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0RXN0YWRvXCIpIHRoaXMuSW5mby5Fc3RhZG8gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0TXVuaWNpcGlvXCIpIHRoaXMuSW5mby5NdW5pY2lwaW8gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9maWpvXCIpIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9tb3ZpbFwiKSB0aGlzLkluZm8uVGVsZWZvbm9tb3ZpbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb3JyZW9lbGVjdHJvbmljb1wiKSB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28gPSBldmVudC5vYmplY3QudGV4dDtcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvYWx0ZXJuYXRpdm9cIikgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gZXZlbnQub2JqZWN0LnRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgVmVuZGVyQm9sZXRvKCl7XG5cbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xuICAgICAgICAgICAgaWYoIXRoaXMuU29sb0xldHJhcygpKXtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBub21icmUsIGFwZWxsaWRvIHBhdGVybm8geSBhcGVsbGlkbyBtYXRlcm5vIG5vIHB1ZWRlbiBjb250ZW5lciBuw7ptZXJvc1wiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXRoaXMudmFsaWRhdGVFbWFpbCh0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28pKXtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlIGludHJvZHVjaXIgdW4gY29ycmVvIHbDoWxpZG8uXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29uZmlybWFyXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBUYWxvbmFyaW86IHRoaXMuRGF0b3MuVGFsb25hcmlvLFxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcyxcbiAgICAgICAgICAgICAgICBJbmZvOiB0aGlzLkluZm8sXG4gICAgICAgICAgICAgICAgVGlwbzogXCJVbm9cIixcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZENvbXByYWRvclxuICAgICAgICAgICAgfSldKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MgbWFyY2Fkb3MgKlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgQW50ZXJpb3IoKXtcbiAgICAgICAgaWYodGhpcy5jb250ID4gMCl7XG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZSh0aGlzLmNvbnQsIDEpO1xuICAgICAgICAgICAgdGhpcy5jb250LS07XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTaWd1aWVudGUoKXtcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xuXG4gICAgICAgICAgICBpZighdGhpcy5Tb2xvTGV0cmFzKCkpe1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIG5vbWJyZSwgYXBlbGxpZG8gcGF0ZXJubyB5IGFwZWxsaWRvIG1hdGVybm8gbm8gcHVlZGVuIGNvbnRlbmVyIG7Dum1lcm9zXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy52YWxpZGF0ZUVtYWlsKHRoaXMuSW5mby5Db3JyZW9lbGVjdHJvbmljbykpe1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmUgaW50cm9kdWNpciB1biBjb3JyZW8gdsOhbGlkby5cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuUGlsYUJvbGV0b3MucHVzaCh7XG4gICAgICAgICAgICAgICAgQm9sZXRvOiB0aGlzLkRhdG9zLkJvbGV0b3NbdGhpcy5jb250XSwgXG4gICAgICAgICAgICAgICAgSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBOb21icmU6IHRoaXMuSW5mby5Ob21icmUsXG4gICAgICAgICAgICAgICAgICAgIEFwcGF0OiB0aGlzLkluZm8uQXBwYXQsXG4gICAgICAgICAgICAgICAgICAgIEFwbWF0OiB0aGlzLkluZm8uQXBtYXQsXG4gICAgICAgICAgICAgICAgICAgIENhbGxlOiB0aGlzLkluZm8uQ2FsbGUsXG4gICAgICAgICAgICAgICAgICAgIE51bWVybzogdGhpcy5JbmZvLk51bWVybyxcbiAgICAgICAgICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsLFxuICAgICAgICAgICAgICAgICAgICBDb2xvbmlhOiB0aGlzLkluZm8uQ29sb25pYSxcbiAgICAgICAgICAgICAgICAgICAgRXN0YWRvOiB0aGlzLkluZm8uRXN0YWRvLFxuICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuSW5mby5NdW5pY2lwaW8sXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25vZmlqbzogdGhpcy5JbmZvLlRlbGVmb25vZmlqbyxcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbm9tb3ZpbDogdGhpcy5JbmZvLlRlbGVmb25vbW92aWwsXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiB0aGlzLkluZm8uQ29ycmVvYWx0ZXJuYXRpdm9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJCb2xldG8gYXNpZ25hZG9cIiwgXCJzaG9ydFwiKS5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmNvbnQrKztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5jb250ID09IHRoaXMuRGF0b3MuQm9sZXRvcy5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgdmFyIFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICBUaXBvOiBcIlZhcmlvc1wiLFxuICAgICAgICAgICAgICAgICAgICBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zLFxuICAgICAgICAgICAgICAgICAgICBUYWxvbmFyaW86IHRoaXMuRGF0b3MuVGFsb25hcmlvLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZENvbXByYWRvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNvbmZpcm1hclwiLCBKU09OLnN0cmluZ2lmeShQYXJhbSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MgbWFyY2Fkb3MgKlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBWZW5kZXJUb2Rvcygpe1xuICAgICAgICBpZih0aGlzLlZhbGlkYXJDYW1wb3MoKSl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7VGlwbzogXCJUb2Rvc1wiLCBCb2xldG9zOiB0aGlzLkRhdG9zLCBJbmZvOiB0aGlzLkluZm8gfSldKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MgbWFyY2Fkb3MgKlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgVmFsaWRhckNhbXBvcygpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5JbmZvLk5vbWJyZSAmJiB0aGlzLkluZm8uQXBwYXQgJiYgdGhpcy5JbmZvLkFwbWF0ICYmIHRoaXMuSW5mby5DYWxsZSAmJiB0aGlzLkluZm8uTnVtZXJvICYmIHRoaXMuSW5mby5Db2RpZ29wb3N0YWwgJiYgdGhpcy5JbmZvLkNvbG9uaWEgJiYgdGhpcy5JbmZvLkVzdGFkbyAmJiB0aGlzLkluZm8uTXVuaWNpcGlvICYmIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gJiYgdGhpcy5JbmZvLlRlbGVmb25vbW92aWwgJiYgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvKXtcbiAgICAgICAgICAgIGlmKHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2by5sZW5ndGggPCAxKSB0aGlzLkluZm8uQ29ycmVvYWx0ZXJuYXRpdm8gPSBcIm4vYVwiO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIFNvbG9MZXRyYXMoKTogYm9vbGVhbiB7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuSW5mby5BcHBhdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZighaXNOYU4odGhpcy5JbmZvLkFwcGF0W2ldKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBUFBBVCBDT04gTlVNRVJPXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLkluZm8uQXBtYXQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoIWlzTmFOKHRoaXMuSW5mby5BcG1hdFtpXSkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVBQQVQgQ09OIE5VTUVST1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgTm9tYnJlID0gdGhpcy5JbmZvLk5vbWJyZTtcbiAgICAgICAgaWYoIWlzTmFOKE5vbWJyZSkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT01CUkUgQ09OIE5VTUVST1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgTm9tYnJlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy8gICAgIGlmKCFpc05hTih0aGlzLkluZm8uTm9tYnJlW2ldKSl7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJOT01CUkUgQ09OIE5VTUVST1wiKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIExpbXBpYXJDYW1wb3MoKXtcbiAgICAgICAgdGhpcy5JbmZvID0ge1xuICAgICAgICAgICAgTm9tYnJlOiBcIlwiLFxuICAgICAgICAgICAgQXBwYXQ6IFwiXCIsXG4gICAgICAgICAgICBBcG1hdDogXCJcIixcbiAgICAgICAgICAgIENhbGxlOiBcIlwiLFxuICAgICAgICAgICAgTnVtZXJvOiBcIlwiLFxuICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIlwiLFxuICAgICAgICAgICAgQ29sb25pYTogXCJcIixcbiAgICAgICAgICAgIEVzdGFkbzogXCJcIixcbiAgICAgICAgICAgIE11bmljaXBpbzogXCJcIixcbiAgICAgICAgICAgIFRlbGVmb25vZmlqbzogXCJcIixcbiAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiXCIsXG4gICAgICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJcIixcbiAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkodHJ1ZSk7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBzZWFyY2hCYXIuZGlzbWlzc1NvZnRJbnB1dCgpO1xuLy8gICAgICAgIHNlYXJjaEJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgaWYoc2VhcmNoQmFyLnRleHQubGVuZ3RoID4gNSl7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkFWSVNPXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjw7NkaWdvIHBvc3RhbCBubyBkZWJlIGxsZXZhciBtw6FzIGRlIDUgY2FyYWN0ZXJlc1wiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLkdFVC5nZXREYXRhQXV0aG9yaXphdGlvbihcImFwaS9Db21wcmFkb3IvQnVzY2FyL1wiKyBzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAwIENPRCBQT1NUQUxcIik7XG4gICAgICAgICAgICAgICAgaWYocmVzLmpzb24oKS5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gc2UgZW5jb250cmFyb24gZGF0b3MgcGFyYSBlbCBjw7NkaWdvIHBvc3RhbCBwcm9wb3JjaW9uYWRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvbmlhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgRGF0b3MgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihEYXRvcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKERhdG9zLmxlbmd0aCA9PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5mby5Db2xvbmlhID0gRGF0b3NbMF0uY29sb25pYTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdG9zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvbmlhcy5wdXNoKHtjb2xvbmlhOiBpdGVtLmNvbG9uaWF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmZvLkVzdGFkbyA9IERhdG9zWzBdLmVzdGFkbztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmZvLk11bmljaXBpbyA9IERhdG9zWzBdLm11bmljaXBpbztcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhZG8geSBtdW5pY2lwaW8gY2FyZ2Fkby5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL1RvYXN0Lm1ha2VUZXh0KFwiRXN0YWRvIHkgbXVuaWNpcGlvIGNhcmdhZG8uXCIsIFwic2hvcnRcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjUwMCBDT0QgUE9TVEFMXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gc2UgZW5jb250cmFyb24gZGF0b3MgcGFyYSBlbCBjw7NkaWdvIHBvc3RhbCBwcm9wb3JjaW9uYWRvXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlRW1haWwoZW1haWwpe1xuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgfVxuXG4gICAgb25Db2xvbmlhVGFwKGV2dCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gQ09MT05JQSBUQVBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2dC5pbmRleCk7XG4gICAgICAgIHRoaXMuSW5mby5Db2xvbmlhID0gdGhpcy5Db2xvbmlhc1tldnQuaW5kZXhdLmNvbG9uaWE7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cbn0iXX0=