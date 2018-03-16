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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxrRUFBZ0Y7QUFDaEYsNkRBQThGO0FBQzlGLDBDQUF5RDtBQUV6RCx5RUFBc0U7QUFDdEUsbUZBQWlGO0FBQ2pGLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsdURBQTZEO0FBQzdELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyx5REFBMkQ7QUFDM0QsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBUTNDO0lBWUksZ0NBQW9CLE9BQXVCLEVBQVUsTUFBc0IsRUFBVSxLQUFhLEVBQVUsZ0JBQWtDLEVBQVUsR0FBcUIsRUFBVSxPQUF1QjtRQUExTCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBWHZNLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBTTVCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQU0vQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQXNDQztRQXBDRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxN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b0NBQWdCLEVBQUUsd0JBQWMsQ0FBRTtTQUNsRCxDQUFDO3lDQWErQixpQ0FBYyxFQUFrQix1QkFBYyxFQUFpQixlQUFNLEVBQTRCLG9DQUFnQixFQUFlLG9DQUFnQixFQUFtQix3QkFBYztPQVpyTSxzQkFBc0IsQ0FrR2xDO0lBQUQsNkJBQUM7Q0FBQSxBQWxHRCxJQWtHQztBQWxHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG52YXIgWlhpbmcgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtenhpbmcnKTtcclxuaW1wb3J0ICogYXMgaW1nU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQm9sZXRvVmVuZGlkb1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYm9sZXRvdmVuZGlkby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbIE15SHR0cEdldFNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvbGV0b1ZlbmRpZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNlbGVjdEJvbGV0bzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTsgXHJcbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTsgIFxyXG4gICAgcHJpdmF0ZSB2aXNpYmlsaXR5OiBib29sZWFuID0gdHJ1ZTsgXHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxyXG4gICAgcHVibGljIHVybEJvbGV0bzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZTogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQVBJOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIGxvYWRpbmc6IExvYWRpbmdTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQk9MRVRPIFZFTkRJRE8gQ09NUE9ORU5UXCIpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCBcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICBpZih0aGlzLkRhdG9zICE9IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy50b2tlbiA9IHRoaXMuRGF0b3MuQm9sZXRvLnRva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLkRhdG9zLkJvbGV0b3MuQm9sZXRvLkJvbGV0by50b2tlbjtcclxuICAgICAgICB2YXIgc2VydmVyVVJMID0gdGhpcy5zZXNzaW9uLmdldFVSTCgpXHJcbiAgICAgICAgdmFyIHp4ID0gbmV3IFpYaW5nKCk7ICAgIFxyXG4gICAgICAgIHZhciBpbWcgPSB6eC5jcmVhdGVCYXJjb2RlKHtlbmNvZGU6IHNlcnZlclVSTCArIFwiYm9sZXRvL1wiICsgdGhpcy50b2tlbiwgaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAsIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5pbWdTcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGltZ1NvdXJjZS5mcm9tTmF0aXZlU291cmNlKGltZykudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmltZ1NyYyAtPiBcIiArIHRoaXMuaW1nU3JjKTsgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGltZyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZyk7XHJcbiAgICBcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7dHJ5SGFyZGVyOiB0cnVlLCBmb3JtYXRzOiBbWlhpbmcuUVJfQ09ERSwgWlhpbmcuSVRGXX07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHp4LmRlY29kZUJhcmNvZGUoaW1nLCBvcHRpb25zKTtcclxuICAgICAgICAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZGVjb2RlIGJhcmNvZGVcIik7ICAgICAgICAgICBcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhcmNvZGUgZm9ybWF0XCIsIHJlc3VsdHMuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIHZhbHVlXCIsIHJlc3VsdHMuYmFyY29kZSk7IFxyXG4gICAgICAgICAgICAgICB0aGlzLnVybEJvbGV0byA9IHJlc3VsdHMuYmFyY29kZTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zZWxlY3RCb2xldG8gPSAhdGhpcy5zZWxlY3RCb2xldG87XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbJ3RhbG9uYXJpb3MnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgTGF1bmNoKClcclxuICAgIHtcclxuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy51cmxCb2xldG8udG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoaXNJT1Mpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgICAgIH1lbHNlIGlmKGlzQW5kcm9pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBFbnZpYXJDb3JyZW8oKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLkFQSS5nZXREYXRhQXV0aG9yaXphdGlvbihcImFwaS9Cb2xldG8vTm90aWZpY2FyP2NsYXZlPVwiK3RoaXMuRGF0b3MuQm9sZXRvLmNsYXZlKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDAgRU5WSUFSIENPUlJFTyBCT0xFVE8gVkVORElET1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlIGhhIG5vdGlmaWNhZG8gYWwgY29tcHJhZG9yXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNTAwIEJPTEVUTyBWRU5ESURPXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSGEgb2N1cnJpZG8gdW4gZXJyb3IgYWwgbm90aWZpY2FyIGFsIGNvbXByYWRvclwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19