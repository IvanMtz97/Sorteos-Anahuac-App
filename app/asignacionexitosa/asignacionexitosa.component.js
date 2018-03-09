"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var platform_1 = require("platform");
var http_get_services_1 = require("../services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var ZXing = require('nativescript-zxing');
var imgSource = require("tns-core-modules/image-source");
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent(session, router, Router, GET) {
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
        console.log("this.datos ------------\n" + JSON.stringify(this.Datos));
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
            styleUrls: ["./asignacionexitosa.css"]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute, router_1.Router, http_get_services_1.MyHttpGetService])
    ], AsignacionExitosaComponent);
    return AsignacionExitosaComponent;
}());
exports.AsignacionExitosaComponent = AsignacionExitosaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsb0NBQXNDO0FBQ3RDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzFDLHlEQUEyRDtBQVMzRDtJQWNJLG9DQUFvQixPQUF1QixFQUFVLE1BQXNCLEVBQVUsTUFBYyxFQUFVLEdBQXFCO1FBQTlHLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFUbEksV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBU1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFHN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ3JDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEdB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LENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpFb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQURwRCwwQkFBMEI7UUFQdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0FnQitCLGlDQUFjLEVBQWtCLHVCQUFjLEVBQWtCLGVBQU0sRUFBZSxvQ0FBZ0I7T0FkekgsMEJBQTBCLENBMkV0QztJQUFELGlDQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG52YXIgWlhpbmcgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtenhpbmcnKTtcclxuaW1wb3J0ICogYXMgaW1nU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBc2lnbmFjaW9uRXhpdG9zYVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hc2lnbmFjaW9uZXhpdG9zYS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50OyAgICBcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcbiAgICBwdWJsaWMgcXJJbWFnZTogc3RyaW5nOyAgICAgXHJcbiAgICBib2xldG86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIERhdG9zOiBhbnkgPSBbXTtcclxuICAgIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nOyBcclxuICAgIHB1YmxpYyB1cmxCb2xldG87XHJcblxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5ib2xldG8gPSAhdGhpcy5ib2xldG87XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgUm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFTSUdOQUNJT04gQ09NUE9ORU5UXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5EYXRvcy5Cb2xldG9zLkJvbGV0by5Cb2xldG8udG9rZW47XHJcbiAgICAgICAgdmFyIHNlcnZlclVSTCA9IHRoaXMuc2Vzc2lvbi5nZXRVUkwoKVxyXG4gICAgICAgIHZhciB6eCA9IG5ldyBaWGluZygpOyAgICBcclxuICAgICAgICB2YXIgaW1nID0genguY3JlYXRlQmFyY29kZSh7ZW5jb2RlOiBzZXJ2ZXJVUkwgKyBcImJvbGV0by9cIiArIHRoaXMudG9rZW4sIGhlaWdodDogMTAwLCB3aWR0aDogMTAwLCBmb3JtYXQ6IFpYaW5nLlFSX0NPREV9KTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaW1nU3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIgKyBpbWdTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShpbWcpLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbWdTcmMgLT4gXCIgKyB0aGlzLmltZ1NyYyk7ICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihpbWcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge3RyeUhhcmRlcjogdHJ1ZSwgZm9ybWF0czogW1pYaW5nLlFSX0NPREUsIFpYaW5nLklURl19O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB6eC5kZWNvZGVCYXJjb2RlKGltZywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGRlY29kZSBiYXJjb2RlXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIGZvcm1hdFwiLCByZXN1bHRzLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSB2YWx1ZVwiLCByZXN1bHRzLmJhcmNvZGUpOyAgXHJcbiAgICAgICAgICAgICAgIHRoaXMudXJsQm9sZXRvID0gcmVzdWx0cy5iYXJjb2RlOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5kYXRvcyAtLS0tLS0tLS0tLS1cXG5cIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuRGF0b3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBpZihpc0lPUyl7XHJcbiAgICAgICAgICAgIHRoaXMuUm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0pO1xyXG4gICAgICAgIH1lbHNlIGlmIChpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEVudmlhckNvcnJlbygpe1xyXG4gICAgICAgIHZhciBCb2xldG8gPSB0aGlzLkRhdG9zLkJvbGV0b3MuQm9sZXRvLkJvbGV0by5jbGF2ZTtcclxuICAgICAgICBjb25zb2xlLmRpcih0aGlzLkRhdG9zLkJvbGV0b3MpO1xyXG4gICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0JvbGV0by9Ob3RpZmljYXI/Y2xhdmU9XCIgKyBCb2xldG8pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOlwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2UgaGEgbm90aWZpY2FkbyBleGl0b3NhbWVudGUgYWwgY29ycmVvIFwiICsgdGhpcy5EYXRvcy5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMk9PIENPUlJFT1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNTAwIENPUlJFT1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19