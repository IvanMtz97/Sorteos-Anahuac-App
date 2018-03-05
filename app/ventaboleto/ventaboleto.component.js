"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var dialogs = require("ui/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var Toast = require("nativescript-toast");
var ventaboleto_modal_component_1 = require("./ventaboleto-modal.component");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var session_services_1 = require("../services/session/session.services");
var VentaBoletoComponent = /** @class */ (function () {
    function VentaBoletoComponent(session, route, router, modal, vcRef) {
        this.session = session;
        this.route = route;
        this.router = router;
        this.modal = modal;
        this.vcRef = vcRef;
        this.Datos = [];
        this.status = true;
        this.cont = 0;
        this.PilaBoletos = [];
        this.Nombre = "";
        // private Info: any = {
        //     Nombre: "",
        //     Appat: "",
        //     Apmat: "",
        //     Calle: "",
        //     Numero: "",
        //     Codigopostal: "",
        //     Colonia: "",
        //     Estado: "",
        //     Municipio: "",
        //     Telefonofijo: "",
        //     Telefonomovil: "",
        //     Correoelectronico: "",
        //     Correoalternativo: ""
        // };
        this.Info = {
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
        this.Info2 = {
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
        var options = {
            context: "Xdd",
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ventaboleto_modal_component_1.VentaBoletoModalComponent, options).then(function (res) {
            console.log(res);
        });
    };
    VentaBoletoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
        });
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
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute, router_extensions_1.RouterExtensions, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], VentaBoletoComponent);
    return VentaBoletoComponent;
}());
exports.VentaBoletoComponent = VentaBoletoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBRTNGLDBDQUFrRDtBQUNsRCxtRkFBaUY7QUFFakYsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUVoRiwwQ0FBNEM7QUFFNUMsNkVBQTBFO0FBQzFFLG1FQUE2RTtBQUU3RSx5RUFBc0U7QUFZdEU7SUEwREksOEJBQW9CLE9BQXVCLEVBQVUsS0FBcUIsRUFBVSxNQUF3QixFQUFVLEtBQXlCLEVBQVUsS0FBdUI7UUFBNUosWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQXREeEssVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUVoQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFHeEMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLEtBQUs7UUFDRSxTQUFJLEdBQVE7WUFDZixNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsV0FBVztZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFB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QUFTLENBQUMsS0FBSyxDQUFDO2tDQUFTLGlCQUFVO3dEQUFDO0lBQ2hCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7aUVBQUM7SUFGcEQsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQTREK0IsaUNBQWMsRUFBaUIsdUJBQWMsRUFBa0Isb0NBQWdCLEVBQWlCLDRCQUFrQixFQUFpQix1QkFBZ0I7T0ExRHZLLG9CQUFvQixDQXFOaEM7SUFBRCwyQkFBQztDQUFBLEFBck5ELElBcU5DO0FBck5ZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyAgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcblxyXG5pbXBvcnQgeyBWZW50YUJvbGV0b01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuIFxyXG4gXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJWZW50YUJvbGV0b1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmVudGFib2xldG8uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi92ZW50YWJvbGV0by5zY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBBVG9kb3M6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHByaXZhdGUgc3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgY29udCA9IDA7XHJcbiAgICBwcml2YXRlIFBpbGFCb2xldG9zOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XHJcblxyXG4gICAgTm9tYnJlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy8gcHJpdmF0ZSBJbmZvOiBhbnkgPSB7XHJcbiAgICAvLyAgICAgTm9tYnJlOiBcIlwiLFxyXG4gICAgLy8gICAgIEFwcGF0OiBcIlwiLFxyXG4gICAgLy8gICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgLy8gICAgIENhbGxlOiBcIlwiLFxyXG4gICAgLy8gICAgIE51bWVybzogXCJcIixcclxuICAgIC8vICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAvLyAgICAgQ29sb25pYTogXCJcIixcclxuICAgIC8vICAgICBFc3RhZG86IFwiXCIsXHJcbiAgICAvLyAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgLy8gICAgIFRlbGVmb25vZmlqbzogXCJcIixcclxuICAgIC8vICAgICBUZWxlZm9ub21vdmlsOiBcIlwiLFxyXG4gICAgLy8gICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgLy8gICAgIENvcnJlb2FsdGVybmF0aXZvOiBcIlwiXHJcbiAgICAvLyB9O1xyXG4gICAgcHVibGljIEluZm86IGFueSA9IHtcclxuICAgICAgICBOb21icmU6IFwiRWR1YXJkb1wiLFxyXG4gICAgICAgIEFwcGF0OiBcIlZhenF1ZXpcIixcclxuICAgICAgICBBcG1hdDogXCJEZSBMYSBPXCIsXHJcbiAgICAgICAgQ2FsbGU6IFwiQ2FsbGUgZG9zXCIsXHJcbiAgICAgICAgTnVtZXJvOiBcIjEzMzJcIixcclxuICAgICAgICBDb2RpZ29wb3N0YWw6IFwiNjQyNTNcIixcclxuICAgICAgICBDb2xvbmlhOiBcIkphamF0bFwiLFxyXG4gICAgICAgIEVzdGFkbzogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgTXVuaWNpcGlvOiBcIkVzY29taWVkb1wiLFxyXG4gICAgICAgIFRlbGVmb25vZmlqbzogXCI4MzM0MDM1OVwiLFxyXG4gICAgICAgIFRlbGVmb25vbW92aWw6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcImVsZWR1YXJkb2phamE3Nzd5b3V0dWJlQHZlZ2V0YS5jb21cIixcclxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgfTtcclxuICAgIHB1YmxpYyBJbmZvMjogYW55ID0ge1xyXG4gICAgICAgIE5vbWJyZTogXCJcIixcclxuICAgICAgICBBcHBhdDogXCJcIixcclxuICAgICAgICBBcG1hdDogXCJcIixcclxuICAgICAgICBDYWxsZTogXCJcIixcclxuICAgICAgICBOdW1lcm86IFwiXCIsXHJcbiAgICAgICAgQ29kaWdvcG9zdGFsOiBcIlwiLFxyXG4gICAgICAgIENvbG9uaWE6IFwiXCIsXHJcbiAgICAgICAgRXN0YWRvOiBcIlwiLFxyXG4gICAgICAgIE11bmljaXBpbzogXCJcIixcclxuICAgICAgICBUZWxlZm9ub2Zpam86IFwiXCIsXHJcbiAgICAgICAgVGVsZWZvbm9tb3ZpbDogXCJcIixcclxuICAgICAgICBDb3JyZW9lbGVjdHJvbmljbzogXCJcIixcclxuICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcclxuICAgIHsgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpOyBcclxuICAgIH1cclxuXHJcbiAgICBBYnJpck1vZGFsKCl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiWGRkXCIsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZWQoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE5vbWJyZVwiKSB0aGlzLkluZm8uTm9tYnJlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBwYXRcIikgdGhpcy5JbmZvLkFwcGF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0QXBtYXRcIikgdGhpcy5JbmZvLkFwbWF0ID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q2FsbGVcIikgdGhpcy5JbmZvLkNhbGxlID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0TnVtZXJvXCIpIHRoaXMuSW5mby5OdW1lcm8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRDb2RpZ29wb3N0YWxcIikgdGhpcy5JbmZvLkNvZGlnb3Bvc3RhbCA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dENvbG9uaWFcIikgdGhpcy5JbmZvLkNvbG9uaWEgPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRFc3RhZG9cIikgdGhpcy5JbmZvLkVzdGFkbyA9IGV2ZW50Lm9iamVjdC50ZXh0O1xyXG4gICAgICAgIGlmKGV2ZW50Lm9iamVjdC5pZCA9PSBcInR4dE11bmljaXBpb1wiKSB0aGlzLkluZm8uTXVuaWNpcGlvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0VGVsZWZvbm9maWpvXCIpIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gPSBldmVudC5vYmplY3QudGV4dDtcclxuICAgICAgICBpZihldmVudC5vYmplY3QuaWQgPT0gXCJ0eHRUZWxlZm9ub21vdmlsXCIpIHRoaXMuSW5mby5UZWxlZm9ub21vdmlsID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvZWxlY3Ryb25pY29cIikgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICAgICAgaWYoZXZlbnQub2JqZWN0LmlkID09IFwidHh0Q29ycmVvYWx0ZXJuYXRpdm9cIikgdGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvID0gZXZlbnQub2JqZWN0LnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBWZW5kZXJCb2xldG8oKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgVGFsb25hcmlvOiB0aGlzLkRhdG9zLlRhbG9uYXJpbyxcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcyxcclxuICAgICAgICAgICAgICAgIEluZm86IHRoaXMuSW5mbyxcclxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCJcclxuICAgICAgICAgICAgfSldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBBbnRlcmlvcigpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZSh0aGlzLmNvbnQsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQtLTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2lndWllbnRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5WYWxpZGFyQ2FtcG9zKCkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIEJvbGV0bzogdGhpcy5EYXRvcy5Cb2xldG9zW3RoaXMuY29udF0sIFxyXG4gICAgICAgICAgICAgICAgSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vbWJyZTogdGhpcy5JbmZvLk5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBBcHBhdDogdGhpcy5JbmZvLkFwcGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIEFwbWF0OiB0aGlzLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FsbGU6IHRoaXMuSW5mby5DYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICBOdW1lcm86IHRoaXMuSW5mby5OdW1lcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29kaWdvcG9zdGFsOiB0aGlzLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbG9uaWE6IHRoaXMuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzdGFkbzogdGhpcy5JbmZvLkVzdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW86IHRoaXMuSW5mby5NdW5pY2lwaW8sXHJcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbm9maWpvOiB0aGlzLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IHRoaXMuSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiB0aGlzLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29ycmVvYWx0ZXJuYXRpdm86IHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2b1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiQm9sZXRvIGFzaWduYWRvXCIsIFwic2hvcnRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udCA9PSB0aGlzLkRhdG9zLkJvbGV0b3MubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgUGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGlwbzogXCJWYXJpb3NcIixcclxuICAgICAgICAgICAgICAgICAgICBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGhpcy5EYXRvcy5UYWxvbmFyaW9cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb25maXJtYXJcIiwgSlNPTi5zdHJpbmdpZnkoUGFyYW0pXSwgIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcyBtYXJjYWRvcyAqXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVmVuZGVyVG9kb3MoKXtcclxuICAgICAgICBpZih0aGlzLlZhbGlkYXJDYW1wb3MoKSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHtUaXBvOiBcIlRvZG9zXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MsIEluZm86IHRoaXMuSW5mbyB9KV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlYmVzIGxsZW5hciB0b2RvcyBsb3MgY2FtcG9zIG1hcmNhZG9zICpcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFZhbGlkYXJDYW1wb3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5JbmZvLk5vbWJyZSAmJiB0aGlzLkluZm8uQXBwYXQgJiYgdGhpcy5JbmZvLkFwbWF0ICYmIHRoaXMuSW5mby5DYWxsZSAmJiB0aGlzLkluZm8uTnVtZXJvICYmIHRoaXMuSW5mby5Db2RpZ29wb3N0YWwgJiYgdGhpcy5JbmZvLkNvbG9uaWEgJiYgdGhpcy5JbmZvLkVzdGFkbyAmJiB0aGlzLkluZm8uTXVuaWNpcGlvICYmIHRoaXMuSW5mby5UZWxlZm9ub2Zpam8gJiYgdGhpcy5JbmZvLlRlbGVmb25vbW92aWwgJiYgdGhpcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvKXtcclxuICAgICAgICAgICAgaWYodGhpcy5JbmZvLkNvcnJlb2FsdGVybmF0aXZvLmxlbmd0aCA8IDEpIHRoaXMuSW5mby5Db3JyZW9hbHRlcm5hdGl2byA9IFwibi9hXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIExpbXBpYXJDYW1wb3MoKXtcclxuICAgICAgICB0aGlzLkluZm8gPSB7XHJcbiAgICAgICAgICAgIE5vbWJyZTogXCJcIixcclxuICAgICAgICAgICAgQXBwYXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIEFwbWF0OiBcIlwiLFxyXG4gICAgICAgICAgICBDYWxsZTogXCJcIixcclxuICAgICAgICAgICAgTnVtZXJvOiBcIlwiLFxyXG4gICAgICAgICAgICBDb2RpZ29wb3N0YWw6IFwiXCIsXHJcbiAgICAgICAgICAgIENvbG9uaWE6IFwiXCIsXHJcbiAgICAgICAgICAgIEVzdGFkbzogXCJcIixcclxuICAgICAgICAgICAgTXVuaWNpcGlvOiBcIlwiLFxyXG4gICAgICAgICAgICBUZWxlZm9ub2Zpam86IFwiXCIsXHJcbiAgICAgICAgICAgIFRlbGVmb25vbW92aWw6IFwiXCIsXHJcbiAgICAgICAgICAgIENvcnJlb2VsZWN0cm9uaWNvOiBcIlwiLFxyXG4gICAgICAgICAgICBDb3JyZW9hbHRlcm5hdGl2bzogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=