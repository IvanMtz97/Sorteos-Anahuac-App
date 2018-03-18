"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var router_1 = require("@angular/router");
var session_services_1 = require("../services/session/session.services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var platform_1 = require("platform");
var http_get_services_1 = require("../services/http-get/http-get.services");
var loading_1 = require("../services/loading/loading");
var dialogs = require("ui/dialogs");
var ZXing = require('nativescript-zxing');
var imgSource = require("tns-core-modules/image-source");
var utilityModule = require("utils/utils");
var BoletoVendidoComponent = /** @class */ (function () {
    function BoletoVendidoComponent(session, router, route, routerExtensions, API, loading) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.API = API;
        this.loading = loading;
        this.selectBoleto = true;
        this.Datos = [];
        this.visibility = true;
        console.log("BOLETO VENDIDO COMPONENT");
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    BoletoVendidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.router.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
        });
        if (this.Datos != undefined) {
            this.visibility = true;
        }
        else {
            this.visibility = false;
        }
        // this.token = this.Datos.Boleto.token; 
        console.log("--------DATOS--------");
        console.dir(this.Datos);
        console.log("---------------------");
        var serverURL = this.session.getURL();
        var zx = new ZXing();
        var img = zx.createBarcode({ encode: serverURL + "boleto/" + this.token, height: 200, width: 200, format: ZXing.QR_CODE });
        this.imgSrc = "data:image/png;base64," + imgSource.fromNativeSource(img).toBase64String("png");
        console.log("this.imgSrc -> " + this.imgSrc);
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
    };
    BoletoVendidoComponent.prototype.toggle = function () {
        // this.selectBoleto = !this.selectBoleto;
        this.route.navigate(['talonarios']);
    };
    BoletoVendidoComponent.prototype.Launch = function () {
        utilityModule.openUrl(this.urlBoleto.toString());
    };
    BoletoVendidoComponent.prototype.onDrawerButtonTap = function () {
        if (platform_1.isIOS) {
            this.routerExtensions.back();
        }
        else if (platform_1.isAndroid) {
            this.drawerComponent.sideDrawer.showDrawer();
        }
    };
    BoletoVendidoComponent.prototype.EnviarCorreo = function () {
        var _this = this;
        this.loading.display(true);
        this.API.getDataAuthorization("api/Boleto/Notificar?clave=" + this.Datos.Boleto.clave).subscribe(function (res) {
            console.log("200 ENVIAR CORREO BOLETO VENDIDO");
            console.log(res);
            _this.loading.display(false);
            dialogs.alert({
                title: "AVISO",
                message: "Se ha notificado al comprador",
                okButtonText: "Ok"
            });
        }, function (error) {
            console.log("500 BOLETO VENDIDO");
            console.log(error);
            dialogs.alert({
                title: "AVISO",
                message: "Ha ocurrido un error al notificar al comprador",
                okButtonText: "Ok"
            });
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], BoletoVendidoComponent.prototype, "drawerComponent", void 0);
    BoletoVendidoComponent = __decorate([
        core_1.Component({
            selector: "BoletoVendido",
            moduleId: module.id,
            templateUrl: "./boletovendido.component.html",
            providers: [http_get_services_1.MyHttpGetService, loading_1.LoadingService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute, router_1.Router, router_extensions_1.RouterExtensions, http_get_services_1.MyHttpGetService, loading_1.LoadingService])
    ], BoletoVendidoComponent);
    return BoletoVendidoComponent;
}());
exports.BoletoVendidoComponent = BoletoVendidoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxrRUFBZ0Y7QUFDaEYsNkRBQThGO0FBQzlGLDBDQUF5RDtBQUV6RCx5RUFBc0U7QUFDdEUsbUZBQWlGO0FBQ2pGLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsdURBQTZEO0FBQzdELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyx5REFBMkQ7QUFDM0QsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBUTNDO0lBWUksZ0NBQW9CLE9BQXVCLEVBQVUsTUFBc0IsRUFBVSxLQUFhLEVBQVUsZ0JBQWtDLEVBQVUsR0FBcUIsRUFBVSxPQUF1QjtRQUExTCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBWHZNLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBTTVCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQU0vQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQXFDQztRQW5DRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxN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QUM7eUNBYStCLGlDQUFjLEVBQWtCLHVCQUFjLEVBQWlCLGVBQU0sRUFBNEIsb0NBQWdCLEVBQWUsb0NBQWdCLEVBQW1CLHdCQUFjO09BWnJNLHNCQUFzQixDQWlHbEM7SUFBRCw2QkFBQztDQUFBLEFBakdELElBaUdDO0FBakdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbnZhciBaWGluZyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC16eGluZycpO1xyXG5pbXBvcnQgKiBhcyBpbWdTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCb2xldG9WZW5kaWRvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ib2xldG92ZW5kaWRvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFsgTXlIdHRwR2V0U2VydmljZSwgTG9hZGluZ1NlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9sZXRvVmVuZGlkb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc2VsZWN0Qm9sZXRvOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcclxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlOyBcclxuICAgIHByaXZhdGUgRGF0b3M6IGFueSA9IFtdOyAgXHJcbiAgICBwcml2YXRlIHZpc2liaWxpdHk6IGJvb2xlYW4gPSB0cnVlOyBcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcbiAgICBwdWJsaWMgdXJsQm9sZXRvOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBBUEk6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCT0xFVE8gVkVORElETyBDT01QT05FTlRcIik7XHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIFxyXG4gICAgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTsgICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuRGF0b3MgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnRva2VuID0gdGhpcy5EYXRvcy5Cb2xldG8udG9rZW47IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS1EQVRPUy0tLS0tLS0tXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuRGF0b3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpOyAgICAgICBcclxuICAgICAgICB2YXIgc2VydmVyVVJMID0gdGhpcy5zZXNzaW9uLmdldFVSTCgpXHJcbiAgICAgICAgdmFyIHp4ID0gbmV3IFpYaW5nKCk7ICAgIFxyXG4gICAgICAgIHZhciBpbWcgPSB6eC5jcmVhdGVCYXJjb2RlKHtlbmNvZGU6IHNlcnZlclVSTCArIFwiYm9sZXRvL1wiICsgdGhpcy50b2tlbiwgaGVpZ2h0OiAyMDAsIHdpZHRoOiAyMDAsIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5pbWdTcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGltZ1NvdXJjZS5mcm9tTmF0aXZlU291cmNlKGltZykudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmltZ1NyYyAtPiBcIiArIHRoaXMuaW1nU3JjKTsgICAgXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge3RyeUhhcmRlcjogdHJ1ZSwgZm9ybWF0czogW1pYaW5nLlFSX0NPREUsIFpYaW5nLklURl19O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB6eC5kZWNvZGVCYXJjb2RlKGltZywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGRlY29kZSBiYXJjb2RlXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIGZvcm1hdFwiLCByZXN1bHRzLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSB2YWx1ZVwiLCByZXN1bHRzLmJhcmNvZGUpOyBcclxuICAgICAgICAgICAgICAgdGhpcy51cmxCb2xldG8gPSByZXN1bHRzLmJhcmNvZGU7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc2VsZWN0Qm9sZXRvID0gIXRoaXMuc2VsZWN0Qm9sZXRvO1xyXG4gICAgICAgIHRoaXMucm91dGUubmF2aWdhdGUoWyd0YWxvbmFyaW9zJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIExhdW5jaCgpXHJcbiAgICB7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMudXJsQm9sZXRvLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKGlzSU9TKXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgICAgICB9ZWxzZSBpZihpc0FuZHJvaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRW52aWFyQ29ycmVvKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5BUEkuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQm9sZXRvL05vdGlmaWNhcj9jbGF2ZT1cIit0aGlzLkRhdG9zLkJvbGV0by5jbGF2ZSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAwIEVOVklBUiBDT1JSRU8gQk9MRVRPIFZFTkRJRE9cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBub3RpZmljYWRvIGFsIGNvbXByYWRvclwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjUwMCBCT0xFVE8gVkVORElET1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkhhIG9jdXJyaWRvIHVuIGVycm9yIGFsIG5vdGlmaWNhciBhbCBjb21wcmFkb3JcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==