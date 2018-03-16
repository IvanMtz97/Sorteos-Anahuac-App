"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var platform_1 = require("platform");
var http_get_services_1 = require("../services/http-get/http-get.services");
var Utils_1 = require("../services/Utils");
var dialogs = require("ui/dialogs");
var ZXing = require('nativescript-zxing');
var imgSource = require("tns-core-modules/image-source");
var utilityModule = require("utils/utils");
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent(Utils, session, router, Router, GET) {
        var _this = this;
        this.Utils = Utils;
        this.session = session;
        this.router = router;
        this.Router = Router;
        this.GET = GET;
        this.boleto = false;
        this.Datos = [];
        console.log("ASIGNACION COMPONENT");
        this.imagenPublicitaria = this.session.getImagenPublicidad();
        this.router.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
        });
        console.log("--------------\nDATOS EN ASIGNACION" + JSON.stringify(this.Datos) + "\n----------------");
        this.token = this.Datos.Boletos.Boleto.Boleto.token;
        console.log("token ->" + this.token);
        var serverURL = this.session.getURL();
        var zx = new ZXing();
        var img = zx.createBarcode({ encode: serverURL + "boleto/" + this.token, height: 100, width: 100, format: ZXing.QR_CODE });
        this.imgSrc = "data:image/png;base64," + imgSource.fromNativeSource(img).toBase64String("png");
        console.log("this.imgSrc -> " + this.imgSrc);
        console.dir(img);
        console.log(img);
        var options = { tryHarder: true, formats: [ZXing.QR_CODE, ZXing.ITF] };
        var results = zx.decodeBarcode(img, options);
        if (!results) {
            console.log("Unable to decode barcode");
        }
        else {
            console.log("Barcode format", results.format);
            console.log("Barcode value", results.barcode);
            this.urlBoleto = results.barcode;
        }
    }
    AsignacionExitosaComponent.prototype.toggle = function () {
        this.boleto = !this.boleto;
    };
    AsignacionExitosaComponent.prototype.ngOnInit = function () {
        console.log("ActualizarTalonarios");
        this.Utils.ActualizarTalonarios();
    };
    AsignacionExitosaComponent.prototype.onDrawerButtonTap = function () {
        if (platform_1.isIOS) {
            this.Router.navigate(["talonarios"]);
        }
        else if (platform_1.isAndroid) {
            this.drawerComponent.sideDrawer.showDrawer();
        }
    };
    AsignacionExitosaComponent.prototype.EnviarCorreo = function () {
        var _this = this;
        var Boleto = this.Datos.Boletos.Boleto.Boleto.clave;
        this.GET.getDataAuthorization("api/Boleto/Notificar?clave=" + Boleto).subscribe(function (res) {
            dialogs.alert({
                title: "AVISO",
                message: "Se ha notificado exitosamente al correo " + _this.Datos.Info.Correoelectronico,
                okButtonText: "Ok"
            });
            console.log("2OO CORREO");
            console.log(res);
        }, function (error) {
            console.log("500 CORREO");
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AsignacionExitosaComponent.prototype, "drawerComponent", void 0);
    AsignacionExitosaComponent = __decorate([
        core_1.Component({
            selector: "AsignacionExitosa",
            moduleId: module.id,
            templateUrl: "./asignacionexitosa.component.html",
            styleUrls: ["./asignacionexitosa.css"],
            providers: [session_services_1.SessionService, Utils_1.UtilsService, http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [Utils_1.UtilsService, session_services_1.SessionService, router_1.ActivatedRoute, router_1.Router, http_get_services_1.MyHttpGetService])
    ], AsignacionExitosaComponent);
    return AsignacionExitosaComponent;
}());
exports.AsignacionExitosaComponent = AsignacionExitosaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsMkNBQWlEO0FBQ2pELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyx5REFBMkQ7QUFDM0QsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBVTNDO0lBY0ksb0NBQW9CLEtBQW1CLEVBQVUsT0FBdUIsRUFBVSxNQUFzQixFQUFVLE1BQWMsRUFBVSxHQUFxQjtRQUEvSixpQkFrQ0M7UUFsQ21CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVC9KLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQVNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FB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QUFvQixDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDbkYsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDVixLQUFLLEVBQUMsT0FBTztnQkFDYixPQUFPLEVBQUUsMENBQTBDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCO2dCQUN2RixZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUE1RW9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7dUVBQUM7SUFEcEQsMEJBQTBCO1FBUnRDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFFLGlDQUFjLEVBQUUsb0JBQVksRUFBRSxvQ0FBZ0IsQ0FBRTtTQUNoRSxDQUFDO3lDQWdCNkIsb0JBQVksRUFBbUIsaUNBQWMsRUFBa0IsdUJBQWMsRUFBa0IsZUFBTSxFQUFlLG9DQUFnQjtPQWR0SiwwQkFBMEIsQ0E4RXRDO0lBQUQsaUNBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvVXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG52YXIgWlhpbmcgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtenhpbmcnKTtcclxuaW1wb3J0ICogYXMgaW1nU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQXNpZ25hY2lvbkV4aXRvc2FcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FzaWduYWNpb25leGl0b3NhLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbIFNlc3Npb25TZXJ2aWNlLCBVdGlsc1NlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFzaWduYWNpb25FeGl0b3NhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7ICAgIFxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nOyBcclxuICAgIHB1YmxpYyBxckltYWdlOiBzdHJpbmc7ICAgICBcclxuICAgIGJvbGV0bzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgRGF0b3M6IGFueSA9IFtdO1xyXG4gICAgcHVibGljIGltZ1NyYzogc3RyaW5nO1xyXG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7IFxyXG4gICAgcHVibGljIHVybEJvbGV0bztcclxuXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICB0aGlzLmJvbGV0byA9ICF0aGlzLmJvbGV0bztcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgVXRpbHM6IFV0aWxzU2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFJvdXRlcjogUm91dGVyLCBwcml2YXRlIEdFVDogTXlIdHRwR2V0U2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBU0lHTkFDSU9OIENPTVBPTkVOVFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLVxcbkRBVE9TIEVOIEFTSUdOQUNJT05cIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuRGF0b3MpICsgXCJcXG4tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5EYXRvcy5Cb2xldG9zLkJvbGV0by5Cb2xldG8udG9rZW47XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiAtPlwiICsgdGhpcy50b2tlbik7XHJcbiAgICAgICAgdmFyIHNlcnZlclVSTCA9IHRoaXMuc2Vzc2lvbi5nZXRVUkwoKVxyXG4gICAgICAgIHZhciB6eCA9IG5ldyBaWGluZygpOyAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIGltZyA9IHp4LmNyZWF0ZUJhcmNvZGUoe2VuY29kZTogc2VydmVyVVJMICsgXCJib2xldG8vXCIgKyB0aGlzLnRva2VuLCBoZWlnaHQ6IDEwMCwgd2lkdGg6IDEwMCwgZm9ybWF0OiBaWGluZy5RUl9DT0RFfSk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB0aGlzLmltZ1NyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICsgaW1nU291cmNlLmZyb21OYXRpdmVTb3VyY2UoaW1nKS50b0Jhc2U2NFN0cmluZyhcInBuZ1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuaW1nU3JjIC0+IFwiICsgdGhpcy5pbWdTcmMpOyAgICBcclxuICAgICAgICAgICAgY29uc29sZS5kaXIoaW1nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKTtcclxuICAgIFxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt0cnlIYXJkZXI6IHRydWUsIGZvcm1hdHM6IFtaWGluZy5RUl9DT0RFLCBaWGluZy5JVEZdfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHZhciByZXN1bHRzID0genguZGVjb2RlQmFyY29kZShpbWcsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgIGlmICghcmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBkZWNvZGUgYmFyY29kZVwiKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSBmb3JtYXRcIiwgcmVzdWx0cy5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhcmNvZGUgdmFsdWVcIiwgcmVzdWx0cy5iYXJjb2RlKTsgIFxyXG4gICAgICAgICAgICAgICB0aGlzLnVybEJvbGV0byA9IHJlc3VsdHMuYmFyY29kZTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWN0dWFsaXphclRhbG9uYXJpb3NcIik7XHJcbiAgICAgICAgdGhpcy5VdGlscy5BY3R1YWxpemFyVGFsb25hcmlvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKGlzSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5Sb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKGlzQW5kcm9pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgRW52aWFyQ29ycmVvKCl7XHJcbiAgICAgICAgdmFyIEJvbGV0byA9IHRoaXMuRGF0b3MuQm9sZXRvcy5Cb2xldG8uQm9sZXRvLmNsYXZlO1xyXG4gICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0JvbGV0by9Ob3RpZmljYXI/Y2xhdmU9XCIgKyBCb2xldG8pLnN1YnNjcmliZShyZXMgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOlwiQVZJU09cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBub3RpZmljYWRvIGV4aXRvc2FtZW50ZSBhbCBjb3JyZW8gXCIgKyB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIyT08gQ09SUkVPXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI1MDAgQ09SUkVPXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG59Il19