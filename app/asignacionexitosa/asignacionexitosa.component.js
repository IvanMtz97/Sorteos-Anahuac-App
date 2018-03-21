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
        /*var zx = new ZXing();
        var img = zx.createBarcode({encode: serverURL + "boleto/" + this.token, height: 200, width: 200, format: ZXing.QR_CODE});
        
    
        this.imgSrc = "data:image/png;base64," + imgSource.fromNativeSource(img).toBase64String("png");
        console.log("this.imgSrc -> " + this.imgSrc);
            console.dir(img);
            console.log(img);
    
            var options = {tryHarder: true, formats: [ZXing.QR_CODE, ZXing.ITF]};
            
            
           var results = zx.decodeBarcode(img, options);
           if (!results) {
               console.log("Unable to decode barcode");
           } else {
               console.log("Barcode format", results.format);
               console.log("Barcode value", results.barcode);
               this.urlBoleto = results.barcode;
           }*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsMkNBQWlEO0FBQ2pELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUUxQyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFVM0M7SUFjSSxvQ0FBb0IsS0FBbUIsRUFBVSxPQUF1QixFQUFVLE1BQXNCLEVBQVUsTUFBYyxFQUFVLEdBQXFCO1FBQS9KLGlCQWdDQztRQWhDbUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFUL0osV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBU1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBbUJNO0lBQ1YsQ0FBQztJQW5DRCwyQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQW1DRCw2Q0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0ksRUFBRSxDQUFBLENBQUMsZ0JBQUssQ0FBQyxDQUFBLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqRCxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFZLEdBQVo7UUFBQSxpQkFjQztRQWJHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNuRixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBQyxPQUFPO2dCQUNiLE9BQU8sRUFBRSwwQ0FBMEMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3ZGLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDJDQUFNLEdBQU47UUFFSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBL0VvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBRHBELDBCQUEwQjtRQVJ0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBRSxpQ0FBYyxFQUFFLG9CQUFZLEVBQUUsb0NBQWdCLENBQUU7U0FDaEUsQ0FBQzt5Q0FnQjZCLG9CQUFZLEVBQW1CLGlDQUFjLEVBQWtCLHVCQUFjLEVBQWtCLGVBQU0sRUFBZSxvQ0FBZ0I7T0FkdEosMEJBQTBCLENBaUZ0QztJQUFELGlDQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9VdGlsc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xudmFyIFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJyk7XG5pbXBvcnQgKiBhcyBpbWdTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQXNpZ25hY2lvbkV4aXRvc2FcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogWyBTZXNzaW9uU2VydmljZSwgVXRpbHNTZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDsgICAgXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXG4gICAgcHVibGljIHFySW1hZ2U6IHN0cmluZzsgICAgIFxuICAgIGJvbGV0bzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIERhdG9zOiBhbnkgPSBbXTtcbiAgICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7IFxuICAgIHB1YmxpYyB1cmxCb2xldG87XG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5ib2xldG8gPSAhdGhpcy5ib2xldG87XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgVXRpbHM6IFV0aWxzU2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFJvdXRlcjogUm91dGVyLCBwcml2YXRlIEdFVDogTXlIdHRwR2V0U2VydmljZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVNJR05BQ0lPTiBDT01QT05FTlRcIik7XG4gICAgICAgICAgXG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuRGF0b3MuQm9sZXRvcy5Cb2xldG8uQm9sZXRvLnRva2VuO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIC0+XCIgKyB0aGlzLnRva2VuKTtcbiAgICAgICAgdmFyIHNlcnZlclVSTCA9IHRoaXMuc2Vzc2lvbi5nZXRVUkwoKVxuICAgICAgICAvKnZhciB6eCA9IG5ldyBaWGluZygpOyAgICAgICAgICAgXG4gICAgICAgIHZhciBpbWcgPSB6eC5jcmVhdGVCYXJjb2RlKHtlbmNvZGU6IHNlcnZlclVSTCArIFwiYm9sZXRvL1wiICsgdGhpcy50b2tlbiwgaGVpZ2h0OiAyMDAsIHdpZHRoOiAyMDAsIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgdGhpcy5pbWdTcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGltZ1NvdXJjZS5mcm9tTmF0aXZlU291cmNlKGltZykudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbWdTcmMgLT4gXCIgKyB0aGlzLmltZ1NyYyk7ICAgIFxuICAgICAgICAgICAgY29uc29sZS5kaXIoaW1nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZyk7XG4gICAgXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt0cnlIYXJkZXI6IHRydWUsIGZvcm1hdHM6IFtaWGluZy5RUl9DT0RFLCBaWGluZy5JVEZdfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgIHZhciByZXN1bHRzID0genguZGVjb2RlQmFyY29kZShpbWcsIG9wdGlvbnMpO1xuICAgICAgICAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGRlY29kZSBiYXJjb2RlXCIpOyAgICAgICAgICAgXG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhcmNvZGUgZm9ybWF0XCIsIHJlc3VsdHMuZm9ybWF0KTtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSB2YWx1ZVwiLCByZXN1bHRzLmJhcmNvZGUpOyAgXG4gICAgICAgICAgICAgICB0aGlzLnVybEJvbGV0byA9IHJlc3VsdHMuYmFyY29kZTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICB9Ki9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdHVhbGl6YXJUYWxvbmFyaW9zXCIpO1xuICAgICAgICB0aGlzLlV0aWxzLkFjdHVhbGl6YXJUYWxvbmFyaW9zKCk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGlmKGlzSU9TKXtcbiAgICAgICAgICAgIHRoaXMuUm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0pO1xuICAgICAgICB9ZWxzZSBpZiAoaXNBbmRyb2lkKXtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEVudmlhckNvcnJlbygpe1xuICAgICAgICB2YXIgQm9sZXRvID0gdGhpcy5EYXRvcy5Cb2xldG9zLkJvbGV0by5Cb2xldG8uY2xhdmU7XG4gICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0JvbGV0by9Ob3RpZmljYXI/Y2xhdmU9XCIgKyBCb2xldG8pLnN1YnNjcmliZShyZXMgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBub3RpZmljYWRvIGV4aXRvc2FtZW50ZSBhbCBjb3JyZW8gXCIgKyB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIyT08gQ09SUkVPXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCI1MDAgQ09SUkVPXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gICAgfVxuXG4gICAgTGF1bmNoKClcbiAgICB7XG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLnVybEJvbGV0by50b1N0cmluZygpKTtcbiAgICB9XG59Il19