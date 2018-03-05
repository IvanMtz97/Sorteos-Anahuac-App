"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var http_post_services_1 = require("../services/http-post/http-post.services");
var session_services_1 = require("../services/session/session.services");
var SolicitaTalonarioComponent = /** @class */ (function () {
    function SolicitaTalonarioComponent(myPostService, session) {
        this.myPostService = myPostService;
        this.session = session;
        this.text1 = '¡Apreciamos mucho tu apoyo!';
        this.text2 = 'Haz click en el boton para solicitar un nuevo talonario.';
        this.text3 = '¡GRACIAS!';
        this.text4 = 'SOLICITAR TALONARIO';
        this.message = "";
        this.contador = 0;
        this.validaPagina = true;
        var data = JSON.parse(this.session.getInformation());
        if (data.talonarios.length > 0) {
            for (var i in data.talonarios) {
                if (data.talonarios[i].Boletos.pendientes.length == 0) {
                    this.contador = this.contador + 1;
                }
                if (this.contador == data.talonarios.length) {
                    this.validaPagina = false;
                }
            }
        }
        console.log("validaPagina123 -> " + this.validaPagina);
    }
    SolicitaTalonarioComponent.prototype.makePostSolitarTalonario = function () {
        console.log("ENTRA AQUI ---> ");
        this.myPostService
            .postData({}, 'api/Talonario/Solicitar')
            .subscribe(function (res) {
            console.log("RES --->", res);
            //this.message = (<any>res).json.data.username;
        });
    };
    SolicitaTalonarioComponent.prototype.solicitaTalonario = function () {
        console.log("ESPERE SOLICITANDO...........>");
        this.makePostSolitarTalonario();
    };
    SolicitaTalonarioComponent.prototype.ngOnInit = function () {
        console.log("SOLICITA TALONARIO");
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    SolicitaTalonarioComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SolicitaTalonarioComponent.prototype, "drawerComponent", void 0);
    SolicitaTalonarioComponent = __decorate([
        core_1.Component({
            selector: 'solicitatalonario',
            moduleId: module.id,
            templateUrl: './solicita_talonario.component.html',
            providers: [http_post_services_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [http_post_services_1.MyHttpPostService, session_services_1.SessionService])
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsa0VBQWdGO0FBQ2hGLDZEQUE4RjtBQUU5RiwrRUFBNkU7QUFDN0UseUVBQXNFO0FBUXRFO0lBU0Usb0NBQW9CLGFBQWdDLEVBQVUsT0FBdUI7UUFBakUsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFSckYsVUFBSyxHQUFXLDZCQUE2QixDQUFDO1FBQzlDLFVBQUssR0FBVywwREFBMEQsQ0FBQztRQUMzRSxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBQzVCLFVBQUssR0FBVyxxQkFBcUIsQ0FBQztRQUN0QyxZQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFJM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQzlCLENBQUM7WUFDQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUM7Z0JBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FDckQsQ0FBQztvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDM0MsQ0FBQztvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUtNLDZEQUF3QixHQUEvQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLCtDQUErQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTSxzREFBaUIsR0FBeEI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQTNCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQTlCbEQsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7eUNBVW1DLHNDQUFpQixFQUFtQixpQ0FBYztPQVQxRSwwQkFBMEIsQ0EwRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29saWNpdGF0YWxvbmFyaW8nLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0YVRhbG9uYXJpb0NvbXBvbmVudCB7XHJcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcclxuICB0ZXh0Mjogc3RyaW5nID0gJ0hheiBjbGljayBlbiBlbCBib3RvbiBwYXJhIHNvbGljaXRhciB1biBudWV2byB0YWxvbmFyaW8uJztcclxuICB0ZXh0Mzogc3RyaW5nID0gJ8KhR1JBQ0lBUyEnO1xyXG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XHJcbiAgbWVzc2FnZSA6IHN0cmluZyA9IFwiXCI7ICBcclxuICBjb250YWRvcjogbnVtYmVyID0gMDtcclxuICB2YWxpZGFQYWdpbmE6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSBcclxuICB7IFxyXG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTsgICAgXHJcbiAgICBpZihkYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkgICAgXHJcbiAgICB7XHJcbiAgICAgIGZvcihsZXQgaSBpbiBkYXRhLnRhbG9uYXJpb3MpIFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZihkYXRhLnRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKSAgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgPSB0aGlzLmNvbnRhZG9yICsgMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IGRhdGEudGFsb25hcmlvcy5sZW5ndGgpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhUGFnaW5hID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwidmFsaWRhUGFnaW5hMTIzIC0+IFwiICsgdGhpcy52YWxpZGFQYWdpbmEpO1xyXG4gIH1cclxuICBcclxuICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gIHB1YmxpYyBtYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVOVFJBIEFRVUkgLS0tPiBcIik7XHJcbiAgICB0aGlzLm15UG9zdFNlcnZpY2VcclxuICAgICAgICAucG9zdERhdGEoe30sICdhcGkvVGFsb25hcmlvL1NvbGljaXRhcicpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFUyAtLS0+XCIsIHJlcyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gKDxhbnk+cmVzKS5qc29uLmRhdGEudXNlcm5hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgXHJcbiAgICBjb25zb2xlLmxvZyhcIkVTUEVSRSBTT0xJQ0lUQU5ETy4uLi4uLi4uLi4uPlwiKVxyXG4gICAgdGhpcy5tYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KClcclxuICB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNPTElDSVRBIFRBTE9OQVJJT1wiKTtcclxuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG4vLyAgIGlmKHRoaXMudGFsb25hcmlvcy5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAvL0JPTEVUT1MgUEVORElFTlRFU1xyXG4vLyAgICAgaWYodGhpcy50YWxvbmFyaW9zW2ldLnBlbmRpZW50ZXMubGVuZ3RoID09IDApXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdGhpcy5zcmNJY29ub1RhbG9uYXJpb1tpXSA9IFwicmVzOi8vaWNvbm9fdGFsb25hcmlvX2dyaXNcIjtcclxuLy8gICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gZmFsc2U7XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdGhpcy5zcmNJY29ub1RhbG9uYXJpb1tpXSA9IFwicmVzOi8vaWNvbm9fdGFsb25hcmlvXCI7XHJcbi8vICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IHRydWU7XHJcbi8vICAgICAgICAgdGhpcy5jYW50Qm9sUGVuZGllbnRlc1tpXSA9IHRoaXMudGFsb25hcmlvc1tpXS5wZW5kaWVudGVzLmxlbmd0aDtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkVOVFJPIEFRVUlcIik7XHJcbi8vICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRhbG9uYXJpb3ModHJ1ZSk7XHJcbi8vICAgICB9XHJcblxyXG59Il19