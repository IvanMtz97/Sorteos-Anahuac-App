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
var platform_1 = require("platform");
var Toast = require("nativescript-toast");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUloRixtRUFBNkU7QUFFN0UseUVBQXNFO0FBQ3RFLDRFQUEwRTtBQUMxRSxxQ0FBNEM7QUFFNUMsMENBQTRDO0FBVzVDO0lBaUZJLDhCQUFvQixHQUFxQixFQUFVLE9BQXVCLEVBQVUsS0FBcUIsRUFBVSxNQUF3QixFQUFVLEtBQXlCLEVBQVUsS0FBdUI7UUFBM0wsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBN0V2TSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRWhCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUd4QyxRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBQ3BDLHVDQUF1QztRQUN2QyxrRUFBa0U7UUFDbEUsZ0NBQWdDO1FBRWhDLFNBQVM7UUFDVCxRQUFRO1FBQ1IsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLDBCQUEw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QUU7WUFDVixZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsRUFBRTtZQUNoQixhQUFhLEVBQUUsRUFBRTtZQUNqQixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGlCQUFpQixFQUFFLEVBQUU7U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFuUmlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFTLGlCQUFVO3dEQUFDO0lBQ2hCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7aUVBQUM7SUFGcEQsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQW1GMkIsb0NBQWdCLEVBQW1CLGlDQUFjLEVBQWlCLHVCQUFjLEVBQWtCLG9DQUFnQixFQUFpQiw0QkFBa0IsRUFBaUIsdUJBQWdCO09BakZ0TSxvQkFBb0IsQ0FxUmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJSRCxJQXFSQztBQXJSWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuXHJcbmltcG9ydCB7IFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuXHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuIFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJDQjFcIikgQVRvZG9zOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBEYXRvczogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwcml2YXRlIHN0YXR1czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGNvbnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBQaWxhQm9sZXRvczogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBQSzE6IG51bWJlciA9IDA7XHJcbiAgICAvLyBDb21wcmFkb3JlczogYW55ID0gW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgTm9tYnJlOiBcIk1pbHRvbiBJdmFuXCIsXHJcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIk1hcnRpbmV6XCIsXHJcbiAgICAvLyAgICAgICAgIEFwbWF0OiBcIkdvbnphbGV6XCIsXHJcbiAgICAvLyAgICAgICAgIENhbGxlOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjMwNlwiLFxyXG4gICAgLy8gICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjYwODdcIixcclxuICAgIC8vICAgICAgICAgQ29sb25pYTogXCJFc3RhbmNpYVwiLFxyXG4gICAgLy8gICAgICAgICBFc3RhZG86IFwiTnVldm8gTGVvblwiLFxyXG4gICAgLy8gICAgICAgICBNdW5pY2lwaW86IFwiU2FuIE5pY29sYXNcIixcclxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgIC8vICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIE5vbWJyZTogXCJFZHVhcmRvXCIsXHJcbiAgICAvLyAgICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgIC8vICAgICAgICAgQXBtYXQ6IFwiRGUgTGEgT1wiLFxyXG4gICAgLy8gICAgICAgICBDYWxsZTogXCJDYWxsZSBkb3NcIixcclxuICAgIC8vICAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgIC8vICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIjY0MjUzXCIsXHJcbiAgICAvLyAgICAgICAgIENvbG9uaWE6IFwiSmFqYXRsXCIsXHJcbiAgICAvLyAgICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAvLyAgICAgICAgIE11bmljaXBpbzogXCJFc2NvbWllZG9cIixcclxuICAgIC8vICAgICAgICAgVGVsZWZvbm9maWpvOiBcIjgzMzQwMzU5XCIsXHJcbiAgICAvLyAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgLy8gICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJlbGVkdWFyZG9qYWphNzc3eW91dHViZUB2ZWdldGEuY29tXCIsXHJcbiAgICAvLyAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gXTtcclxuXHJcbiAgICBDb21wcmFkb3JlczogYW55ID0gW107XHJcblxyXG4gICAgRm9ybXVsYXJpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBOb21icmU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgSW5mbzI6IGFueSA9IHtcclxuICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxyXG4gICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgICAgICBBcG1hdDogXCJEZSBMYSBPXCIsXHJcbiAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXHJcbiAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjQyNTNcIixcclxuICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxyXG4gICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIkVzY29taWVkb1wiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxyXG4gICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcImVsZWR1YXJkb2phamE3Nzd5b3V0dWJlQHZlZ2V0YS5jb21cIixcclxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgfTtcclxuICAgIHB1YmxpYyBJbmZvOiBhbnkgPSB7XHJcbiAgICAgICAgTm9tYnJlOiBcIlwiLFxyXG4gICAgICAgIEFwcGF0OiBcIlwiLFxyXG4gICAgICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgICAgIENhbGxlOiBcIlwiLFxyXG4gICAgICAgIE51bWVybzogXCJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAgICAgQ29sb25pYTogXCJcIixcclxuICAgICAgICBFc3RhZG86IFwiXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCJcIixcclxuICAgICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcclxuICAgIHsgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBBYnJpck1vZGFsKCl7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnRleHQ6IFwiWGRkXCIsXHJcbiAgICAgICAgLy8gICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWwuc2hvd01vZGFsKFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvLyB9KTsgICAgXHJcbiAgICAgICAgdGhpcy5Db21wcmFkb3JlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuRm9ybXVsYXJpbyA9ICF0aGlzLkZvcm11bGFyaW87XHJcbiAgICB9XHJcblxyXG4gICAgQnVzY2FyQ2hhbmdlKGV2dCl7XHJcbiAgICAgICAgaWYoZXZ0Lm9iamVjdC50ZXh0Lmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICB0aGlzLkdFVC5nZXREYXRhQXV0aG9yaXphdGlvbihcImFwaS9Db21wcmFkb3IvQnVzY2FyL1wiICsgdGhpcy5QSzEgKyBcIi9cIiArIGV2dC5vYmplY3QudGV4dCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbXByYWRvcmVzID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMaXN0KGV2dCl7XHJcbiAgICAgICAgdmFyIEFwZWxsaWRvcyA9IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5hcGVsbGlkb3Muc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHRoaXMuSW5mbyA9IHtcclxuICAgICAgICAgICAgTm9tYnJlOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0ubm9tYnJlLFxyXG4gICAgICAgICAgICBBcHBhdDogQXBlbGxpZG9zWzBdLFxyXG4gICAgICAgICAgICBBcG1hdDogQXBlbGxpZG9zWzFdLFxyXG4gICAgICAgICAgICBDYWxsZTogdGhpcy5Db21wcmFkb3Jlc1tldnQuaW5kZXhdLmRpcmVjY2lvbi5jYWxsZSxcclxuICAgICAgICAgICAgTnVtZXJvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm51bWVybyxcclxuICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmNvZGlnb19wb3N0YWwsXHJcbiAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5kaXJlY2Npb24uY29sb25pYSxcclxuICAgICAgICAgICAgRXN0YWRvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLmVzdGFkbyxcclxuICAgICAgICAgICAgTXVuaWNpcGlvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLm11bmljaXBpbyxcclxuICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uZGlyZWNjaW9uLnRlbGVmb25vLFxyXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiB0aGlzLkNvbXByYWRvcmVzW2V2dC5pbmRleF0uY2VsdWxhcixcclxuICAgICAgICAgICAgQ29ycmVvZWxlY3Ryb25pY286IHRoaXMuQ29tcHJhZG9yZXNbZXZ0LmluZGV4XS5jb3JyZW8sXHJcbiAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkZvcm11bGFyaW8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIENhbmNlbGFyKCl7XHJcbiAgICAgICAgdGhpcy5Gb3JtdWxhcmlvID0gIXRoaXMuRm9ybXVsYXJpbztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5QSzEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKS5jbGF2ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBpZihpc0lPUyl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLmJhY2soKTtcclxuICAgICAgICB9ZWxzZSBpZihpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VkKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHROb21icmVcIikgdGhpcy5JbmZvLk5vbWJyZSA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dEFwcGF0XCIpIHRoaXMuSW5mby5BcHBhdCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dEFwbWF0XCIpIHRoaXMuSW5mby5BcG1hdCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENhbGxlXCIpIHRoaXMuSW5mby5DYWxsZSA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE51bWVyb1wiKSB0aGlzLkluZm8uTnVtZXJvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29kaWdvcG9zdGFsXCIpIHRoaXMuSW5mby5Db2RpZ29wb3N0YWwgPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb2xvbmlhXCIpIHRoaXMuSW5mby5Db2xvbmlhID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0RXN0YWRvXCIpIHRoaXMuSW5mby5Fc3RhZG8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRNdW5pY2lwaW9cIikgdGhpcy5JbmZvLk11bmljaXBpbyA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dFRlbGVmb25vZmlqb1wiKSB0aGlzLkluZm8uVGVsZWZvbm9maWpvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9tb3ZpbFwiKSB0aGlzLkluZm8uVGVsZWZvbm9tb3ZpbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvcnJlb2VsZWN0cm9uaWNvXCIpIHRoaXMuSW5mby5Db3JyZW9lbGVjdHJvbmljbyA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvcnJlb2FsdGVybmF0aXZvXCIpIHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2byA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDaGVjaygpe1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVmVuZGVyQm9sZXRvKCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuVmFsaWRhckNhbXBvcygpKXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29uZmlybWFyXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGhpcy5EYXRvcy5UYWxvbmFyaW8sXHJcbiAgICAgICAgICAgICAgICBCb2xldG86IHRoaXMuRGF0b3MsXHJcbiAgICAgICAgICAgICAgICBJbmZvOiB0aGlzLkluZm8sXHJcbiAgICAgICAgICAgICAgICBUaXBvOiBcIlVub1wiXHJcbiAgICAgICAgICAgIH0pXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MgbWFyY2Fkb3MgKlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQW50ZXJpb3IoKXtcclxuICAgICAgICBpZih0aGlzLmNvbnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5zcGxpY2UodGhpcy5jb250LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5jb250LS07XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNpZ3VpZW50ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuVmFsaWRhckNhbXBvcygpKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuUGlsYUJvbGV0b3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBCb2xldG86IHRoaXMuRGF0b3MuQm9sZXRvc1t0aGlzLmNvbnRdLCBcclxuICAgICAgICAgICAgICAgIEluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICBOb21icmU6IHRoaXMuSW5mby5Ob21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwYXQ6IHRoaXMuSW5mby5BcHBhdCxcclxuICAgICAgICAgICAgICAgICAgICBBcG1hdDogdGhpcy5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIENhbGxlOiB0aGlzLkluZm8uQ2FsbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtZXJvOiB0aGlzLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgIENvZGlnb3Bvc3RhbDogdGhpcy5JbmZvLkNvZGlnb3Bvc3RhbCxcclxuICAgICAgICAgICAgICAgICAgICBDb2xvbmlhOiB0aGlzLkluZm8uQ29sb25pYSxcclxuICAgICAgICAgICAgICAgICAgICBFc3RhZG86IHRoaXMuSW5mby5Fc3RhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgTXVuaWNpcGlvOiB0aGlzLkluZm8uTXVuaWNpcGlvLFxyXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25vZmlqbzogdGhpcy5JbmZvLlRlbGVmb25vZmlqbyxcclxuICAgICAgICAgICAgICAgICAgICBUZWxlZm9ub21vdmlsOiB0aGlzLkluZm8uVGVsZWZvbm9tb3ZpbCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2FsdGVybmF0aXZvOiB0aGlzLkluZm8uQ29ycmVvYWx0ZXJuYXRpdm9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIkJvbGV0byBhc2lnbmFkb1wiLCBcInNob3J0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5jb250Kys7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmNvbnQgPT0gdGhpcy5EYXRvcy5Cb2xldG9zLmxlbmd0aCl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIFBhcmFtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFRpcG86IFwiVmFyaW9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgQm9sZXRvczogdGhpcy5QaWxhQm9sZXRvcyxcclxuICAgICAgICAgICAgICAgICAgICBUYWxvbmFyaW86IHRoaXMuRGF0b3MuVGFsb25hcmlvXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29uZmlybWFyXCIsIEpTT04uc3RyaW5naWZ5KFBhcmFtKV0sICB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGViZXMgbGxlbmFyIHRvZG9zIGxvcyBjYW1wb3MgbWFyY2Fkb3MgKlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFZlbmRlclRvZG9zKCl7XHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7VGlwbzogXCJUb2Rvc1wiLCBCb2xldG9zOiB0aGlzLkRhdG9zLCBJbmZvOiB0aGlzLkluZm8gfSldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBWYWxpZGFyQ2FtcG9zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuSW5mby5Ob21icmUgJiYgdGhpcy5JbmZvLkFwcGF0ICYmIHRoaXMuSW5mby5BcG1hdCAmJiB0aGlzLkluZm8uQ2FsbGUgJiYgdGhpcy5JbmZvLk51bWVybyAmJiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsICYmIHRoaXMuSW5mby5Db2xvbmlhICYmIHRoaXMuSW5mby5Fc3RhZG8gJiYgdGhpcy5JbmZvLk11bmljaXBpbyAmJiB0aGlzLkluZm8uVGVsZWZvbm9maWpvICYmIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsICYmIHRoaXMuSW5mby5Db3JyZW9lbGVjdHJvbmljbyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2by5sZW5ndGggPCAxKSB0aGlzLkluZm8uQ29ycmVvYWx0ZXJuYXRpdm8gPSBcIm4vYVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBMaW1waWFyQ2FtcG9zKCl7XHJcbiAgICAgICAgdGhpcy5JbmZvID0ge1xyXG4gICAgICAgICAgICBOb21icmU6IFwiXCIsXHJcbiAgICAgICAgICAgIEFwcGF0OiBcIlwiLFxyXG4gICAgICAgICAgICBBcG1hdDogXCJcIixcclxuICAgICAgICAgICAgQ2FsbGU6IFwiXCIsXHJcbiAgICAgICAgICAgIE51bWVybzogXCJcIixcclxuICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiBcIlwiLFxyXG4gICAgICAgICAgICBDb2xvbmlhOiBcIlwiLFxyXG4gICAgICAgICAgICBFc3RhZG86IFwiXCIsXHJcbiAgICAgICAgICAgIE11bmljaXBpbzogXCJcIixcclxuICAgICAgICAgICAgVGVsZWZvbm9maWpvOiBcIlwiLFxyXG4gICAgICAgICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxyXG4gICAgICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJcIixcclxuICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19