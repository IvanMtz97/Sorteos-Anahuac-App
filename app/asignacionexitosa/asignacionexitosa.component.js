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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQUM1Qyw0RUFBMEU7QUFDMUUsMkNBQWlEO0FBQ2pELG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyx5REFBMkQ7QUFVM0Q7SUFjSSxvQ0FBb0IsS0FBbUIsRUFBVSxPQUF1QixFQUFVLE1BQXNCLEVBQVUsTUFBYyxFQUFVLEdBQXFCO1FBQTNJLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVC9KLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQVNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRzdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDckMsSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUMsTUFBTSxFQUFFLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFF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Q0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBRHBELDBCQUEwQjtRQVJ0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBRSxpQ0FBYyxFQUFFLG9CQUFZLEVBQUUsb0NBQWdCLENBQUU7U0FDaEUsQ0FBQzt5Q0FnQjZCLG9CQUFZLEVBQW1CLGlDQUFjLEVBQWtCLHVCQUFjLEVBQWtCLGVBQU0sRUFBZSxvQ0FBZ0I7T0FkdEosMEJBQTBCLENBMEV0QztJQUFELGlDQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxudmFyIFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJyk7XHJcbmltcG9ydCAqIGFzIGltZ1NvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQXNpZ25hY2lvbkV4aXRvc2FcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FzaWduYWNpb25leGl0b3NhLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbIFNlc3Npb25TZXJ2aWNlLCBVdGlsc1NlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFzaWduYWNpb25FeGl0b3NhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7ICAgIFxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nOyBcclxuICAgIHB1YmxpYyBxckltYWdlOiBzdHJpbmc7ICAgICBcclxuICAgIGJvbGV0bzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgRGF0b3M6IGFueSA9IFtdO1xyXG4gICAgcHVibGljIGltZ1NyYzogc3RyaW5nO1xyXG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7IFxyXG4gICAgcHVibGljIHVybEJvbGV0bztcclxuXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICB0aGlzLmJvbGV0byA9ICF0aGlzLmJvbGV0bztcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgVXRpbHM6IFV0aWxzU2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFJvdXRlcjogUm91dGVyLCBwcml2YXRlIEdFVDogTXlIdHRwR2V0U2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBU0lHTkFDSU9OIENPTVBPTkVOVFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlcnZlclVSTCA9IHRoaXMuc2Vzc2lvbi5nZXRVUkwoKVxyXG4gICAgICAgIHZhciB6eCA9IG5ldyBaWGluZygpOyAgICBcclxuICAgICAgICB2YXIgaW1nID0genguY3JlYXRlQmFyY29kZSh7ZW5jb2RlOiBzZXJ2ZXJVUkwgKyBcImJvbGV0by9cIiArIHRoaXMudG9rZW4sIGhlaWdodDogMTAwLCB3aWR0aDogMTAwLCBmb3JtYXQ6IFpYaW5nLlFSX0NPREV9KTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaW1nU3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIgKyBpbWdTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShpbWcpLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbWdTcmMgLT4gXCIgKyB0aGlzLmltZ1NyYyk7ICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihpbWcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge3RyeUhhcmRlcjogdHJ1ZSwgZm9ybWF0czogW1pYaW5nLlFSX0NPREUsIFpYaW5nLklURl19O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB6eC5kZWNvZGVCYXJjb2RlKGltZywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgaWYgKCFyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGRlY29kZSBiYXJjb2RlXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIGZvcm1hdFwiLCByZXN1bHRzLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSB2YWx1ZVwiLCByZXN1bHRzLmJhcmNvZGUpOyAgXHJcbiAgICAgICAgICAgICAgIHRoaXMudXJsQm9sZXRvID0gcmVzdWx0cy5iYXJjb2RlOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLlV0aWxzLkFjdHVhbGl6YXJUYWxvbmFyaW9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoaXNJT1Mpe1xyXG4gICAgICAgICAgICB0aGlzLlJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICB9ZWxzZSBpZiAoaXNBbmRyb2lkKXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBFbnZpYXJDb3JyZW8oKXtcclxuICAgICAgICB2YXIgQm9sZXRvID0gdGhpcy5EYXRvcy5Cb2xldG9zLkJvbGV0by5Cb2xldG8uY2xhdmU7XHJcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy5EYXRvcy5Cb2xldG9zKTtcclxuICAgICAgICB0aGlzLkdFVC5nZXREYXRhQXV0aG9yaXphdGlvbihcImFwaS9Cb2xldG8vTm90aWZpY2FyP2NsYXZlPVwiICsgQm9sZXRvKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlIGhhIG5vdGlmaWNhZG8gZXhpdG9zYW1lbnRlIGFsIGNvcnJlbyBcIiArIHRoaXMuRGF0b3MuSW5mby5Db3JyZW9lbGVjdHJvbmljbyxcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjJPTyBDT1JSRU9cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjUwMCBDT1JSRU9cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==