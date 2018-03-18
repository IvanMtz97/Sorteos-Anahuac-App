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
        this.token = this.Datos.Boletos.Boleto.Boleto.token;
        console.log("token ->" + this.token);
        var serverURL = this.session.getURL();
        var zx = new ZXing();
        var img = zx.createBarcode({ encode: serverURL + "boleto/" + this.token, height: 200, width: 200, format: ZXing.QR_CODE });
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
    AsignacionExitosaComponent.prototype.Launch = function () {
        utilityModule.openUrl(this.urlBoleto.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsMkNBQWlEO0FBQ2pELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyx5REFBMkQ7QUFDM0QsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBVTNDO0lBY0ksb0NBQW9CLEtBQW1CLEVBQVUsT0FBdUIsRUFBVSxNQUFzQixFQUFVLE1BQWMsRUFBVSxHQUFxQjtRQUEvSixpQkFnQ0M7UUFoQ21CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVC9KLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQVNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJ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QUFPO2dCQUNiLE9BQU8sRUFBRSwwQ0FBMEMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3ZGLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDJDQUFNLEdBQU47UUFFSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBL0VvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBRHBELDBCQUEwQjtRQVJ0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBRSxpQ0FBYyxFQUFFLG9CQUFZLEVBQUUsb0NBQWdCLENBQUU7U0FDaEUsQ0FBQzt5Q0FnQjZCLG9CQUFZLEVBQW1CLGlDQUFjLEVBQWtCLHVCQUFjLEVBQWtCLGVBQU0sRUFBZSxvQ0FBZ0I7T0FkdEosMEJBQTBCLENBaUZ0QztJQUFELGlDQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxudmFyIFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJyk7XHJcbmltcG9ydCAqIGFzIGltZ1NvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkFzaWduYWNpb25FeGl0b3NhXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hc2lnbmFjaW9uZXhpdG9zYS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FzaWduYWNpb25leGl0b3NhLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogWyBTZXNzaW9uU2VydmljZSwgVXRpbHNTZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50OyAgICBcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcbiAgICBwdWJsaWMgcXJJbWFnZTogc3RyaW5nOyAgICAgXHJcbiAgICBib2xldG86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIERhdG9zOiBhbnkgPSBbXTtcclxuICAgIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nOyBcclxuICAgIHB1YmxpYyB1cmxCb2xldG87XHJcblxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5ib2xldG8gPSAhdGhpcy5ib2xldG87XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIFV0aWxzOiBVdGlsc1NlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBSb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBHRVQ6IE15SHR0cEdldFNlcnZpY2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVNJR05BQ0lPTiBDT01QT05FTlRcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLkRhdG9zLkJvbGV0b3MuQm9sZXRvLkJvbGV0by50b2tlbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIC0+XCIgKyB0aGlzLnRva2VuKTtcclxuICAgICAgICB2YXIgc2VydmVyVVJMID0gdGhpcy5zZXNzaW9uLmdldFVSTCgpXHJcbiAgICAgICAgdmFyIHp4ID0gbmV3IFpYaW5nKCk7ICAgICAgICAgICBcclxuICAgICAgICB2YXIgaW1nID0genguY3JlYXRlQmFyY29kZSh7ZW5jb2RlOiBzZXJ2ZXJVUkwgKyBcImJvbGV0by9cIiArIHRoaXMudG9rZW4sIGhlaWdodDogMjAwLCB3aWR0aDogMjAwLCBmb3JtYXQ6IFpYaW5nLlFSX0NPREV9KTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaW1nU3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIgKyBpbWdTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShpbWcpLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbWdTcmMgLT4gXCIgKyB0aGlzLmltZ1NyYyk7ICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihpbWcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge3RyeUhhcmRlcjogdHJ1ZSwgZm9ybWF0czogW1pYaW5nLlFSX0NPREUsIFpYaW5nLklURl19O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB6eC5kZWNvZGVCYXJjb2RlKGltZywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGRlY29kZSBiYXJjb2RlXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIGZvcm1hdFwiLCByZXN1bHRzLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSB2YWx1ZVwiLCByZXN1bHRzLmJhcmNvZGUpOyAgXHJcbiAgICAgICAgICAgICAgIHRoaXMudXJsQm9sZXRvID0gcmVzdWx0cy5iYXJjb2RlOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3R1YWxpemFyVGFsb25hcmlvc1wiKTtcclxuICAgICAgICB0aGlzLlV0aWxzLkFjdHVhbGl6YXJUYWxvbmFyaW9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoaXNJT1Mpe1xyXG4gICAgICAgICAgICB0aGlzLlJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICB9ZWxzZSBpZiAoaXNBbmRyb2lkKXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBFbnZpYXJDb3JyZW8oKXtcclxuICAgICAgICB2YXIgQm9sZXRvID0gdGhpcy5EYXRvcy5Cb2xldG9zLkJvbGV0by5Cb2xldG8uY2xhdmU7XHJcbiAgICAgICAgdGhpcy5HRVQuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQm9sZXRvL05vdGlmaWNhcj9jbGF2ZT1cIiArIEJvbGV0bykuc3Vic2NyaWJlKHJlcyA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlNlIGhhIG5vdGlmaWNhZG8gZXhpdG9zYW1lbnRlIGFsIGNvcnJlbyBcIiArIHRoaXMuRGF0b3MuSW5mby5Db3JyZW9lbGVjdHJvbmljbyxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjJPTyBDT1JSRU9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjUwMCBDT1JSRU9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgTGF1bmNoKClcclxuICAgIHtcclxuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy51cmxCb2xldG8udG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn0iXX0=