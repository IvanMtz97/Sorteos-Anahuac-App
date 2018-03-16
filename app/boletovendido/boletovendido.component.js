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
        this.token = this.Datos.Boleto.token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxrRUFBZ0Y7QUFDaEYsNkRBQThGO0FBQzlGLDBDQUF5RDtBQUV6RCx5RUFBc0U7QUFDdEUsbUZBQWlGO0FBQ2pGLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsdURBQTZEO0FBQzdELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyx5REFBMkQ7QUFDM0QsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBUTNDO0lBWUksZ0NBQW9CLE9BQXVCLEVBQVUsTUFBc0IsRUFBVSxLQUFhLEVBQVUsZ0JBQWtDLEVBQVUsR0FBcUIsRUFBVSxPQUF1QjtRQUExTCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBWHZNLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBTTVCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQU0vQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQXFDQztRQW5DRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxN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O3lDQWErQixpQ0FBYyxFQUFrQix1QkFBYyxFQUFpQixlQUFNLEVBQTRCLG9DQUFnQixFQUFlLG9DQUFnQixFQUFtQix3QkFBYztPQVpyTSxzQkFBc0IsQ0FpR2xDO0lBQUQsNkJBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbnZhciBaWGluZyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC16eGluZycpO1xuaW1wb3J0ICogYXMgaW1nU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkJvbGV0b1ZlbmRpZG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYm9sZXRvdmVuZGlkby5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogWyBNeUh0dHBHZXRTZXJ2aWNlLCBMb2FkaW5nU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEJvbGV0b1ZlbmRpZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBzZWxlY3RCb2xldG86IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTsgXG4gICAgcHJpdmF0ZSBEYXRvczogYW55ID0gW107ICBcbiAgICBwcml2YXRlIHZpc2liaWxpdHk6IGJvb2xlYW4gPSB0cnVlOyBcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxuICAgIHB1YmxpYyB1cmxCb2xldG86IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZTogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQVBJOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIGxvYWRpbmc6IExvYWRpbmdTZXJ2aWNlKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCT0xFVE8gVkVORElETyBDT01QT05FTlRcIik7XG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogdm9pZCBcbiAgICB7ICAgICAgICBcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLnJvdXRlci5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuRGF0b3MgPSBKU09OLnBhcnNlKHBhcmFtc1tcImRhdGFcIl0pOyAgICAgICAgICAgIFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgICBpZih0aGlzLkRhdG9zICE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuRGF0b3MuQm9sZXRvLnRva2VuO1xuICAgICAgICB2YXIgc2VydmVyVVJMID0gdGhpcy5zZXNzaW9uLmdldFVSTCgpXG4gICAgICAgIHZhciB6eCA9IG5ldyBaWGluZygpOyAgICBcbiAgICAgICAgdmFyIGltZyA9IHp4LmNyZWF0ZUJhcmNvZGUoe2VuY29kZTogc2VydmVyVVJMICsgXCJib2xldG8vXCIgKyB0aGlzLnRva2VuLCBoZWlnaHQ6IDEwMCwgd2lkdGg6IDEwMCwgZm9ybWF0OiBaWGluZy5RUl9DT0RFfSk7XG4gICAgICAgIFxuICAgIFxuICAgICAgICB0aGlzLmltZ1NyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICsgaW1nU291cmNlLmZyb21OYXRpdmVTb3VyY2UoaW1nKS50b0Jhc2U2NFN0cmluZyhcInBuZ1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmltZ1NyYyAtPiBcIiArIHRoaXMuaW1nU3JjKTsgICAgXG4gICAgICAgICAgICBjb25zb2xlLmRpcihpbWcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKTtcbiAgICBcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge3RyeUhhcmRlcjogdHJ1ZSwgZm9ybWF0czogW1pYaW5nLlFSX0NPREUsIFpYaW5nLklURl19O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB6eC5kZWNvZGVCYXJjb2RlKGltZywgb3B0aW9ucyk7XG4gICAgICAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZGVjb2RlIGJhcmNvZGVcIik7ICAgICAgICAgICBcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSBmb3JtYXRcIiwgcmVzdWx0cy5mb3JtYXQpO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIHZhbHVlXCIsIHJlc3VsdHMuYmFyY29kZSk7IFxuICAgICAgICAgICAgICAgdGhpcy51cmxCb2xldG8gPSByZXN1bHRzLmJhcmNvZGU7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKClcbiAgICB7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0Qm9sZXRvID0gIXRoaXMuc2VsZWN0Qm9sZXRvO1xuICAgICAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFsndGFsb25hcmlvcyddKTtcbiAgICB9XG5cbiAgICBMYXVuY2goKVxuICAgIHtcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMudXJsQm9sZXRvLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBpZihpc0lPUyl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgICAgICB9ZWxzZSBpZihpc0FuZHJvaWQpe1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBFbnZpYXJDb3JyZW8oKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkodHJ1ZSk7XG4gICAgICAgIHRoaXMuQVBJLmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0JvbGV0by9Ob3RpZmljYXI/Y2xhdmU9XCIrdGhpcy5EYXRvcy5Cb2xldG8uY2xhdmUpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDAgRU5WSUFSIENPUlJFTyBCT0xFVE8gVkVORElET1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2UgaGEgbm90aWZpY2FkbyBhbCBjb21wcmFkb3JcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNTAwIEJPTEVUTyBWRU5ESURPXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkhhIG9jdXJyaWRvIHVuIGVycm9yIGFsIG5vdGlmaWNhciBhbCBjb21wcmFkb3JcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==