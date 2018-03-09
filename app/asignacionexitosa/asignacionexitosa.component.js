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
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent(Utils, session, router, Router, GET) {
        this.Utils = Utils;
        this.session = session;
        this.router = router;
        this.Router = Router;
        this.GET = GET;
        this.boleto = false;
        this.Datos = [];
        console.log("ASIGNACION COMPONENT");
        this.imagenPublicitaria = this.session.getImagenPublicidad();
        this.token = this.Datos.Boletos.Boleto.Boleto.token;
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
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
        });
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
        console.dir(this.Datos.Boletos);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsMkNBQWlEO0FBQ2pELG9DQUFzQztBQVV0QztJQVVJLG9DQUFvQixLQUFtQixFQUFVLE9BQXVCLEVBQVUsTUFBc0IsRUFBVSxNQUFjLEVBQVUsR0FBcUI7UUFBM0ksVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFOL0osV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBTVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakUsQ0FBQztJQVBELDJDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBT0QsNkNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELHNEQUFpQixHQUFqQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLGdCQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBWSxHQUFaO1FBQUEsaUJBZUM7UUFkRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQy9FLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFDLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLDBDQUEwQyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtnQkFDdkYsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0NvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBRHBELDBCQUEwQjtRQVJ0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBRSxpQ0FBYyxFQUFFLG9CQUFZLEVBQUUsb0NBQWdCLENBQUU7U0FDaEUsQ0FBQzt5Q0FZNkIsb0JBQVksRUFBbUIsaUNBQWMsRUFBa0IsdUJBQWMsRUFBa0IsZUFBTSxFQUFlLG9DQUFnQjtPQVZ0SiwwQkFBMEIsQ0ErQ3RDO0lBQUQsaUNBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvVXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBc2lnbmFjaW9uRXhpdG9zYVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hc2lnbmFjaW9uZXhpdG9zYS5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFsgU2Vzc2lvblNlcnZpY2UsIFV0aWxzU2VydmljZSwgTXlIdHRwR2V0U2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXNpZ25hY2lvbkV4aXRvc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDsgICAgXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7ICAgICAgXHJcbiAgICBib2xldG86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIERhdG9zOiBhbnkgPSBbXTtcclxuXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICB0aGlzLmJvbGV0byA9ICF0aGlzLmJvbGV0bztcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgVXRpbHM6IFV0aWxzU2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFJvdXRlcjogUm91dGVyLCBwcml2YXRlIEdFVDogTXlIdHRwR2V0U2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBU0lHTkFDSU9OIENPTVBPTkVOVFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5VdGlscy5BY3R1YWxpemFyVGFsb25hcmlvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKGlzSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5Sb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKGlzQW5kcm9pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgRW52aWFyQ29ycmVvKCl7XHJcbiAgICAgICAgdmFyIEJvbGV0byA9IHRoaXMuRGF0b3MuQm9sZXRvcy5Cb2xldG8uQm9sZXRvLmNsYXZlO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuRGF0b3MuQm9sZXRvcyk7XHJcbiAgICAgICAgdGhpcy5HRVQuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQm9sZXRvL05vdGlmaWNhcj9jbGF2ZT1cIiArIEJvbGV0bykuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBub3RpZmljYWRvIGV4aXRvc2FtZW50ZSBhbCBjb3JyZW8gXCIgKyB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyT08gQ09SUkVPXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI1MDAgQ09SUkVPXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
