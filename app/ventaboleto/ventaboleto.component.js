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
                _this.Compradores = res.json();
            }, function (error) {
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
        this.PK1 = JSON.parse(this.session.getInformation()).clave;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUVoRiwwQ0FBNEM7QUFHNUMsbUVBQTZFO0FBRTdFLHlFQUFzRTtBQUN0RSw0RUFBMEU7QUFZMUU7SUFpRkksOEJBQW9CLEdBQXFCLEVBQVUsT0FBdUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsS0FBeUIsRUFBVSxLQUF1QjtRQUEzTCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUE3RXZNLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFaEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBR3hDLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixrQ0FBa0M7UUFDbEMseUJBQXlCO1FBQ3pCLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyxvQ0FBb0M7UUFDcEMsdUNBQXVDO1FBQ3ZDLGtFQUFrRTtRQUNsRSxnQ0FBZ0M7UUFFaEMsU0FBUztRQUNULFFBQVE7UUFDUiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsMEJBQTBCO1FBQzFCLGlDQUFp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TSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFRCxnREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaURBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksVUFBVSxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEUsRUFBRSxDQUFBLENB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QUFFO1NBQ3hCLENBQUM7SUFDTixDQUFDO0lBL1FpQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBUyxpQkFBVTt3REFBQztJQUNoQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2lFQUFDO0lBRnBELG9CQUFvQjtRQVBoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FtRjJCLG9DQUFnQixFQUFtQixpQ0FBYyxFQUFpQix1QkFBYyxFQUFrQixvQ0FBZ0IsRUFBaUIsNEJBQWtCLEVBQWlCLHVCQUFnQjtPQWpGdE0sb0JBQW9CLENBaVJoQztJQUFELDJCQUFDO0NBQUEsQUFqUkQsSUFpUkM7QUFqUlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7ICBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuXHJcbmltcG9ydCB7IFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbiBcclxuIFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJDQjFcIikgQVRvZG9zOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBEYXRvczogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwcml2YXRlIHN0YXR1czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGNvbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBQaWxhQm9sZXRvczogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBQSzE6IG51bWJlciA9IDA7XHJcbiAgICAvLyBDb21wcmFkb3JlczogYW55ID0gW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgTm9tYnJlOiBcIk1pbHRvbiBJdmFuXCIsXHJcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIk1hcnRpbmV6XCIsXHJcbiAgICAvLyAgICAgICAgIEFwbWF0OiBcIkdvbnphbGV6XCIsXHJcbiAgICAvLyAgICAgICAgIENhbGxlOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjMwNlwiLFxyXG4gICAgLy8gICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjYwODdcIixcclxuICAgIC8vICAgICAgICAgQ29sb25pYTogXCJFc3RhbmNpYVwiLFxyXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxyXG4gICAgLy8gICAgICAgICBNdW5pY2lwaW86IFwiU2FuIE5pY29sYXNcIixcclxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgIC8vICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIE5vbWJyZTogXCJFZHVhcmRvXCIsXHJcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgIC8vICAgICAgICAgQXBtYXQ6IFwiRGUgTGEgT1wiLFxyXG4gICAgLy8gICAgICAgICBDYWxsZTogXCJDYWxsZSBkb3NcIixcclxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgIC8vICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY0MjUzXCIsXHJcbiAgICAvLyAgICAgICAgIENvbG9uaWE6IFwiSmFqYXRsXCIsXHJcbiAgICAvLyAgICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAvLyAgICAgICAgIE11bmljaXBpbzogXCJFc2NvbWllZG9cIixcclxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJlbGVkdWFyZG9qYWphNzc3eW91dHViZUB2ZWdldGEuY29tXCIsXHJcbiAgICAvLyAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gXTtcclxuXHJcbiAgICBDb21wcmFkb3JlczogYW55ID0gW107XHJcblxyXG4gICAgRm9ybXVsYXJpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBOb21icmU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgSW5mbzI6IGFueSA9IHtcclxuICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxyXG4gICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgICAgICBBcG1hdDogXCJEZSBMYSBPXCIsXHJcbiAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXHJcbiAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjQyNTNcIixcclxuICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxyXG4gICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIkVzY29taWVkb1wiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxyXG4gICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcImVsZWR1YXJkb2phamE3Nzd5b3V0dWJlQHZlZ2V0YS5jb21cIixcclxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgfTtcclxuICAgIHB1YmxpYyBJbmZvOiBhbnkgPSB7XHJcbiAgICAgICAgTm9tYnJlOiBcIlwiLFxyXG4gICAgICAgIEFwcGF0OiBcIlwiLFxyXG4gICAgICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgICAgIENhbGxlOiBcIlwiLFxyXG4gICAgICAgIE51bWVybzogXCJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAgICAgQ29sb25pYTogXCJcIixcclxuICAgICAgICBFc3RhZG86IFwiXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCJcIixcclxuICAgICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcclxuICAgIHsgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBBYnJpck1vZGFsKCl7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnRleHQ6IFwiWGRkXCIsXHJcbiAgICAgICAgLy8gICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvLyB9KTsgICAgXHJcbiAgICAgICAgdGhpcy5Db21wcmFkb3JlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRm9ybXVsYXJpbyA9ICF0aGlzLkZvcm11bGFyaW87XHJcbiAgICB9XHJcblxyXG4gICAgQnVzY2FyQ2hhbmdlKGV2dCl7XHJcbiAgICAgICAgaWYoZXZ0Lm9iamVjdC50ZXh0Lmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICB0aGlzLkdFVC5nZXREYXRhQXV0aG9yaXphdGlvbihcImFwaS9Db21wcmFkb3IvQnVzY2FyL1wiICsgdGhpcy5QSzEgKyBcIi9cIiArIGV2dC5vYmplY3QudGV4dCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXByYWRvcmVzID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMaXN0KGV2dCl7XHJcbiAgICAgICAgdmFyIEFwZWxsaWRvcyA9IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5hcGVsbGlkb3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHRoaXMuSW5mbyA9IHtcclxuICAgICAgICAgICAgTm9tYnJlOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0ubm9tYnJlLFxyXG4gICAgICAgICAgICBBcHBhdDogQXBlbGxpZG9zWzBdLFxyXG4gICAgICAgICAgICBBcG1hdDogQXBlbGxpZG9zWzFdLFxyXG4gICAgICAgICAgICBDYWxsZTogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jYWxsZSxcclxuICAgICAgICAgICAgTnVtZXJvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm51bWVybyxcclxuICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmNvZGlnb19wb3N0YWwsXHJcbiAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uY29sb25pYSxcclxuICAgICAgICAgICAgRXN0YWRvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmVzdGFkbyxcclxuICAgICAgICAgICAgTXVuaWNpcGlvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm11bmljaXBpbyxcclxuICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLnRlbGVmb25vLFxyXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uY2VsdWxhcixcclxuICAgICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5jb3JyZW8sXHJcbiAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIENhbmNlbGFyKCl7XHJcbiAgICAgICAgdGhpcy5Gb3JtdWxhcmlvID0gIXRoaXMuRm9ybXVsYXJpbztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5QSzEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKS5jbGF2ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE5vbWJyZVwiKSB0aGlzLkluZm8uTm9tYnJlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBwYXRcIikgdGhpcy5JbmZvLkFwcGF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBtYXRcIikgdGhpcy5JbmZvLkFwbWF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q2FsbGVcIikgdGhpcy5JbmZvLkNhbGxlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0TnVtZXJvXCIpIHRoaXMuSW5mby5OdW1lcm8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb2RpZ29wb3N0YWxcIikgdGhpcy5JbmZvLkNvZGlnb3Bvc3RhbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvbG9uaWFcIikgdGhpcy5JbmZvLkNvbG9uaWEgPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRFc3RhZG9cIikgdGhpcy5JbmZvLkVzdGFkbyA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE11bmljaXBpb1wiKSB0aGlzLkluZm8uTXVuaWNpcGlvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9maWpvXCIpIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRUZWxlZm9ub21vdmlsXCIpIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvZWxlY3Ryb25pY29cIikgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvYWx0ZXJuYXRpdm9cIikgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBWZW5kZXJCb2xldG8oKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgVGFsb25hcmlvOiB0aGlzLkRhdG9zLlRhbG9uYXJpbyxcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcyxcclxuICAgICAgICAgICAgICAgIEluZm86IHRoaXMuSW5mbyxcclxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCJcclxuICAgICAgICAgICAgfSldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBBbnRlcmlvcigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZSh0aGlzLmNvbnQsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQtLTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2lndWllbnRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcy5Cb2xldG9zW3RoaXMuY29udF0sIFxyXG4gICAgICAgICAgICAgICAgSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vbWJyZTogdGhpcy5JbmZvLk5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBBcHBhdDogdGhpcy5JbmZvLkFwcGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIEFwbWF0OiB0aGlzLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FsbGU6IHRoaXMuSW5mby5DYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBOdW1lcm86IHRoaXMuSW5mby5OdW1lcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzdGFkbzogdGhpcy5JbmZvLkVzdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuSW5mby5NdW5pY2lwaW8sXHJcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IHRoaXMuSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiQm9sZXRvIGFzaWduYWRvXCIsIFwic2hvcnRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udCA9PSB0aGlzLkRhdG9zLkJvbGV0b3MubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgUGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGlwbzogXCJWYXJpb3NcIixcclxuICAgICAgICAgICAgICAgICAgICBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGhpcy5EYXRvcy5UYWxvbmFyaW9cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoUGFyYW0pXSwgIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVmVuZGVyVG9kb3MoKXtcclxuICAgICAgICBpZih0aGlzLlZhbGlkYXJDYW1wb3MoKSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHtUaXBvOiBcIlRvZG9zXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MsIEluZm86IHRoaXMuSW5mbyB9KV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zIG1hcmNhZG9zICpcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFZhbGlkYXJDYW1wb3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5JbmZvLk5vbWJyZSAmJiB0aGlzLkluZm8uQXBwYXQgJiYgdGhpcy5JbmZvLkFwbWF0ICYmIHRoaXMuSW5mby5DYWxsZSAmJiB0aGlzLkluZm8uTnVtZXJvICYmIHRoaXMuSW5mby5Db2RpZ29wb3N0YWwgJiYgdGhpcy5JbmZvLkNvbG9uaWEgJiYgdGhpcy5JbmZvLkVzdGFkbyAmJiB0aGlzLkluZm8uTXVuaWNpcGlvICYmIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gJiYgdGhpcy5JbmZvLlRlbGVmb25vbW92aWwgJiYgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvKXtcclxuICAgICAgICAgICAgaWYodGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvLmxlbmd0aCA8IDEpIHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2byA9IFwibi9hXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIExpbXBpYXJDYW1wb3MoKXtcclxuICAgICAgICB0aGlzLkluZm8gPSB7XHJcbiAgICAgICAgICAgIE5vbWJyZTogXCJcIixcclxuICAgICAgICAgICAgQXBwYXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgICAgICAgICBDYWxsZTogXCJcIixcclxuICAgICAgICAgICAgTnVtZXJvOiBcIlwiLFxyXG4gICAgICAgICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAgICAgICAgIENvbG9uaWE6IFwiXCIsXHJcbiAgICAgICAgICAgIEVzdGFkbzogXCJcIixcclxuICAgICAgICAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgICAgICAgICBUZWxlZm9ub2Zpam86IFwiXCIsXHJcbiAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiXCIsXHJcbiAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=