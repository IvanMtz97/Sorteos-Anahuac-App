"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var dialogs = require("ui/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var Toast = require("nativescript-toast");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var session_services_1 = require("../services/session/session.services");
var http_get_services_1 = require("../services/http-get/http-get.services");
var VentaBoletoComponent = /** @class */ (function () {
    function VentaBoletoComponent(GET, session, route, router, modal, vcRef) {
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
    VentaBoletoComponent.prototype.BuscarChange = function (evt) {
        var _this = this;
        if (evt.object.text.length > 1) {
            this.GET.getDataAuthorization("api/Comprador/Buscar/" + this.PK1 + "/" + evt.object.text).subscribe(function (res) {
                console.log("200 COMPRADOR");
                console.dir(res.json());
                _this.Compradores = res.json();
            }, function (error) {
                console.log("500 COMPRADOR");
                console.log(error);
            });
        }
    };
    VentaBoletoComponent.prototype.onTapList = function (evt) {
        console.log("ON TAP LIST");
        console.log(evt.index);
        console.dir(this.Compradores[evt.index]);
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
        this.PK1 = JSON.parse(this.session.getInformation()).clave;
        console.log("NG ON INIT VENTA BOLETO");
        console.log(this.PK1);
    };
    VentaBoletoComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
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
            this.router.navigate(["confirmar", JSON.stringify({
                    Talonario: this.Datos.Talonario,
                    Boleto: this.Datos,
                    Info: this.Info,
                    Tipo: "Uno"
                })], { clearHistory: true });
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
                this.router.navigate(["confirmar", JSON.stringify(Param)], { clearHistory: true });
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
            styleUrls: ["./ventaboleto.scss"]
        }),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService, session_services_1.SessionService, router_1.ActivatedRoute, router_extensions_1.RouterExtensions, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], VentaBoletoComponent);
    return VentaBoletoComponent;
}());
exports.VentaBoletoComponent = VentaBoletoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUVoRiwwQ0FBNEM7QUFHNUMsbUVBQTZFO0FBRTdFLHlFQUFzRTtBQUN0RSw0RUFBMEU7QUFZMUU7SUFpRkksOEJBQW9CLEdBQXFCLEVBQVUsT0FBdUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsS0FBeUIsRUFBVSxLQUF1QjtRQUEzTCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUE3RXZNLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFaEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBR3hDLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixrQ0FBa0M7UUFDbEMseUJBQXlCO1FBQ3pCLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyxvQ0FBb0M7UUFDcEMsdUNBQXVDO1FBQ3ZDLGtFQUFrRTtRQUNsRSxnQ0FBZ0M7UUFFaEMsU0FBUztRQUNULFFBQVE7UUFDUiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsMEJBQTBCO1FBQzFCLGlDQUFp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QUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLGlCQUFpQixDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDcEYsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksWUFBWSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdB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dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyAgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcblxyXG5pbXBvcnQgeyBWZW50YUJvbGV0b01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG4gXHJcbiBcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlZlbnRhQm9sZXRvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92ZW50YWJvbGV0by5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3ZlbnRhYm9sZXRvLnNjc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWZW50YUJvbGV0b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiQ0IxXCIpIEFUb2RvczogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgRGF0b3M6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBjb250ID0gMDtcclxuICAgIHByaXZhdGUgUGlsYUJvbGV0b3M6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuICAgIFxyXG4gICAgUEsxOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gQ29tcHJhZG9yZXM6IGFueSA9IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIE5vbWJyZTogXCJNaWx0b24gSXZhblwiLFxyXG4gICAgLy8gICAgICAgICBBcHBhdDogXCJNYXJ0aW5lelwiLFxyXG4gICAgLy8gICAgICAgICBBcG1hdDogXCJHb256YWxlelwiLFxyXG4gICAgLy8gICAgICAgICBDYWxsZTogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAvLyAgICAgICAgIE51bWVybzogXCIzMDZcIixcclxuICAgIC8vICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY2MDg3XCIsXHJcbiAgICAvLyAgICAgICAgIENvbG9uaWE6IFwiRXN0YW5jaWFcIixcclxuICAgIC8vICAgICAgICAgRXN0YWRvOiBcIk51ZXZvIExlb25cIixcclxuICAgIC8vICAgICAgICAgTXVuaWNpcGlvOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxyXG4gICAgLy8gICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcclxuICAgIC8vICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAvLyAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxyXG4gICAgLy8gICAgICAgICBBcHBhdDogXCJWYXpxdWV6XCIsXHJcbiAgICAvLyAgICAgICAgIEFwbWF0OiBcIkRlIExhIE9cIixcclxuICAgIC8vICAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXHJcbiAgICAvLyAgICAgICAgIE51bWVybzogXCIxMzMyXCIsXHJcbiAgICAvLyAgICAgICAgIENvZGlnb3Bvc3RhbDogXCI2NDI1M1wiLFxyXG4gICAgLy8gICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxyXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxyXG4gICAgLy8gICAgICAgICBNdW5pY2lwaW86IFwiRXNjb21pZWRvXCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxyXG4gICAgLy8gICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcclxuICAgIC8vICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IFwiZWxlZHVhcmRvamFqYTc3N3lvdXR1YmVAdmVnZXRhLmNvbVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIF07XHJcblxyXG4gICAgQ29tcHJhZG9yZXM6IGFueSA9IFtdO1xyXG5cclxuICAgIEZvcm11bGFyaW86IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgTm9tYnJlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIEluZm8yOiBhbnkgPSB7XHJcbiAgICAgICAgTm9tYnJlOiBcIkVkdWFyZG9cIixcclxuICAgICAgICBBcHBhdDogXCJWYXpxdWV6XCIsXHJcbiAgICAgICAgQXBtYXQ6IFwiRGUgTGEgT1wiLFxyXG4gICAgICAgIENhbGxlOiBcIkNhbGxlIGRvc1wiLFxyXG4gICAgICAgIE51bWVybzogXCIxMzMyXCIsXHJcbiAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY0MjUzXCIsXHJcbiAgICAgICAgQ29sb25pYTogXCJKYWphdGxcIixcclxuICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgIE11bmljaXBpbzogXCJFc2NvbWllZG9cIixcclxuICAgICAgICBUZWxlZm9ub2Zpam86IFwiODMzNDAzNTlcIixcclxuICAgICAgICBUZWxlZm9ub21vdmlsOiBcIjgxMjY1MjIxMDVcIixcclxuICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJlbGVkdWFyZG9qYWphNzc3eW91dHViZUB2ZWdldGEuY29tXCIsXHJcbiAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuICAgIH07XHJcbiAgICBwdWJsaWMgSW5mbzogYW55ID0ge1xyXG4gICAgICAgIE5vbWJyZTogXCJcIixcclxuICAgICAgICBBcHBhdDogXCJcIixcclxuICAgICAgICBBcG1hdDogXCJcIixcclxuICAgICAgICBDYWxsZTogXCJcIixcclxuICAgICAgICBOdW1lcm86IFwiXCIsXHJcbiAgICAgICAgQ29kaWdvcG9zdGFsOiBcIlwiLFxyXG4gICAgICAgIENvbG9uaWE6IFwiXCIsXHJcbiAgICAgICAgRXN0YWRvOiBcIlwiLFxyXG4gICAgICAgIE11bmljaXBpbzogXCJcIixcclxuICAgICAgICBUZWxlZm9ub2Zpam86IFwiXCIsXHJcbiAgICAgICAgVGVsZWZvbm9tb3ZpbDogXCJcIixcclxuICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJcIixcclxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIEdFVDogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpXHJcbiAgICB7IFxyXG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgQWJyaXJNb2RhbCgpe1xyXG4gICAgICAgIC8vIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIC8vICAgICBjb250ZXh0OiBcIlhkZFwiLFxyXG4gICAgICAgIC8vICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyB0aGlzLm1vZGFsLnNob3dNb2RhbChWZW50YUJvbGV0b01vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8gfSk7ICAgIFxyXG4gICAgICAgIHRoaXMuQ29tcHJhZG9yZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSAhdGhpcy5Gb3JtdWxhcmlvO1xyXG4gICAgfVxyXG5cclxuICAgIEJ1c2NhckNoYW5nZShldnQpe1xyXG4gICAgICAgIGlmKGV2dC5vYmplY3QudGV4dC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgdGhpcy5HRVQuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQ29tcHJhZG9yL0J1c2Nhci9cIiArIHRoaXMuUEsxICsgXCIvXCIgKyBldnQub2JqZWN0LnRleHQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDAgQ09NUFJBRE9SXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXByYWRvcmVzID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI1MDAgQ09NUFJBRE9SXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMaXN0KGV2dCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBUQVAgTElTVFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQuaW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XSk7XHJcbiAgICAgICAgdmFyIEFwZWxsaWRvcyA9IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5hcGVsbGlkb3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHRoaXMuSW5mbyA9IHtcclxuICAgICAgICAgICAgTm9tYnJlOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0ubm9tYnJlLFxyXG4gICAgICAgICAgICBBcHBhdDogQXBlbGxpZG9zWzBdLFxyXG4gICAgICAgICAgICBBcG1hdDogQXBlbGxpZG9zWzFdLFxyXG4gICAgICAgICAgICBDYWxsZTogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jYWxsZSxcclxuICAgICAgICAgICAgTnVtZXJvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm51bWVybyxcclxuICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmNvZGlnb19wb3N0YWwsXHJcbiAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uY29sb25pYSxcclxuICAgICAgICAgICAgRXN0YWRvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmVzdGFkbyxcclxuICAgICAgICAgICAgTXVuaWNpcGlvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm11bmljaXBpbyxcclxuICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLnRlbGVmb25vLFxyXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uY2VsdWxhcixcclxuICAgICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5jb3JyZW8sXHJcbiAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIENhbmNlbGFyKCl7XHJcbiAgICAgICAgdGhpcy5Gb3JtdWxhcmlvID0gIXRoaXMuRm9ybXVsYXJpbztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5QSzEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKS5jbGF2ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5HIE9OIElOSVQgVkVOVEEgQk9MRVRPXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUEsxKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE5vbWJyZVwiKSB0aGlzLkluZm8uTm9tYnJlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBwYXRcIikgdGhpcy5JbmZvLkFwcGF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBtYXRcIikgdGhpcy5JbmZvLkFwbWF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q2FsbGVcIikgdGhpcy5JbmZvLkNhbGxlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0TnVtZXJvXCIpIHRoaXMuSW5mby5OdW1lcm8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb2RpZ29wb3N0YWxcIikgdGhpcy5JbmZvLkNvZGlnb3Bvc3RhbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvbG9uaWFcIikgdGhpcy5JbmZvLkNvbG9uaWEgPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRFc3RhZG9cIikgdGhpcy5JbmZvLkVzdGFkbyA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE11bmljaXBpb1wiKSB0aGlzLkluZm8uTXVuaWNpcGlvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9maWpvXCIpIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRUZWxlZm9ub21vdmlsXCIpIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvZWxlY3Ryb25pY29cIikgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvYWx0ZXJuYXRpdm9cIikgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBWZW5kZXJCb2xldG8oKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgVGFsb25hcmlvOiB0aGlzLkRhdG9zLlRhbG9uYXJpbyxcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcyxcclxuICAgICAgICAgICAgICAgIEluZm86IHRoaXMuSW5mbyxcclxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCJcclxuICAgICAgICAgICAgfSldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBBbnRlcmlvcigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZSh0aGlzLmNvbnQsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQtLTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2lndWllbnRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcy5Cb2xldG9zW3RoaXMuY29udF0sIFxyXG4gICAgICAgICAgICAgICAgSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vbWJyZTogdGhpcy5JbmZvLk5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBBcHBhdDogdGhpcy5JbmZvLkFwcGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIEFwbWF0OiB0aGlzLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FsbGU6IHRoaXMuSW5mby5DYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBOdW1lcm86IHRoaXMuSW5mby5OdW1lcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzdGFkbzogdGhpcy5JbmZvLkVzdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuSW5mby5NdW5pY2lwaW8sXHJcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IHRoaXMuSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiQm9sZXRvIGFzaWduYWRvXCIsIFwic2hvcnRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udCA9PSB0aGlzLkRhdG9zLkJvbGV0b3MubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgUGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGlwbzogXCJWYXJpb3NcIixcclxuICAgICAgICAgICAgICAgICAgICBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGhpcy5EYXRvcy5UYWxvbmFyaW9cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoUGFyYW0pXSwgIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVmVuZGVyVG9kb3MoKXtcclxuICAgICAgICBpZih0aGlzLlZhbGlkYXJDYW1wb3MoKSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHtUaXBvOiBcIlRvZG9zXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MsIEluZm86IHRoaXMuSW5mbyB9KV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zIG1hcmNhZG9zICpcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFZhbGlkYXJDYW1wb3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5JbmZvLk5vbWJyZSAmJiB0aGlzLkluZm8uQXBwYXQgJiYgdGhpcy5JbmZvLkFwbWF0ICYmIHRoaXMuSW5mby5DYWxsZSAmJiB0aGlzLkluZm8uTnVtZXJvICYmIHRoaXMuSW5mby5Db2RpZ29wb3N0YWwgJiYgdGhpcy5JbmZvLkNvbG9uaWEgJiYgdGhpcy5JbmZvLkVzdGFkbyAmJiB0aGlzLkluZm8uTXVuaWNpcGlvICYmIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gJiYgdGhpcy5JbmZvLlRlbGVmb25vbW92aWwgJiYgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvKXtcclxuICAgICAgICAgICAgaWYodGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvLmxlbmd0aCA8IDEpIHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2byA9IFwibi9hXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIExpbXBpYXJDYW1wb3MoKXtcclxuICAgICAgICB0aGlzLkluZm8gPSB7XHJcbiAgICAgICAgICAgIE5vbWJyZTogXCJcIixcclxuICAgICAgICAgICAgQXBwYXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgICAgICAgICBDYWxsZTogXCJcIixcclxuICAgICAgICAgICAgTnVtZXJvOiBcIlwiLFxyXG4gICAgICAgICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAgICAgICAgIENvbG9uaWE6IFwiXCIsXHJcbiAgICAgICAgICAgIEVzdGFkbzogXCJcIixcclxuICAgICAgICAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgICAgICAgICBUZWxlZm9ub2Zpam86IFwiXCIsXHJcbiAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiXCIsXHJcbiAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=