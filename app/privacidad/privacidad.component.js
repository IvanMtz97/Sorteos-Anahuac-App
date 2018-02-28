"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var session_services_1 = require("../services/session/session.services");
var utilityModule = require("utils/utils");
var PrivacidadComponent = /** @class */ (function () {
    function PrivacidadComponent(page, session, router) {
        this.page = page;
        this.session = session;
        this.router = router;
        this.Politicas = "";
        this.Aceptacion = "";
        this.Reglamento = "";
        this.Condiciones = "";
        this.page.actionBarHidden = true;
        console.log("PRIVACIDAD COMPONENT");
    }
    PrivacidadComponent.prototype.ngOnInit = function () {
        this.Politicas = "https://www.facebook.com/";
        this.Aceptacion = "https://www.npmjs.com/package/nativescript-openurl";
        this.Reglamento = "https://web.skype.com/en/";
        this.Condiciones = "https://google.com/";
        console.log(this.Politicas);
        console.log(this.Aceptacion);
        console.log(this.Reglamento);
        console.log(this.Condiciones);
    };
    PrivacidadComponent.prototype.btnPolitica = function () {
        utilityModule.openUrl(this.Politicas);
    };
    PrivacidadComponent.prototype.btnCondiciones = function () {
        utilityModule.openUrl(this.Condiciones);
    };
    PrivacidadComponent.prototype.btnReglamento = function () {
        utilityModule.openUrl(this.Reglamento);
    };
    PrivacidadComponent.prototype.btnAceptacion = function () {
        utilityModule.openUrl(this.Aceptacion);
    };
    PrivacidadComponent.prototype.Aceptar = function () {
        this.session.setFirstRun(false);
        this.router.navigate(["login"]);
    };
    PrivacidadComponent = __decorate([
        core_1.Component({
            selector: "Privacidad",
            moduleId: module.id,
            templateUrl: "./privacidad.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, session_services_1.SessionService, router_1.Router])
    ], PrivacidadComponent);
    return PrivacidadComponent;
}());
exports.PrivacidadComponent = PrivacidadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjaWRhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcml2YWNpZGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLHlFQUFzRTtBQUN0RSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFRM0M7SUFPSSw2QkFBb0IsSUFBVSxFQUFVLE9BQXVCLEVBQVUsTUFBYztRQUFuRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTi9FLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBSTdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0RBQW9ELENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTFDUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBUzRCLFdBQUksRUFBbUIsaUNBQWMsRUFBa0IsZUFBTTtPQVA5RSxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByaXZhY2lkYWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJpdmFjaWRhZC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgUHJpdmFjaWRhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBQb2xpdGljYXM6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBBY2VwdGFjaW9uOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgUmVnbGFtZW50bzogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIENvbmRpY2lvbmVzOiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQUklWQUNJREFEIENPTVBPTkVOVFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLlBvbGl0aWNhcyA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiO1xuICAgICAgICB0aGlzLkFjZXB0YWNpb24gPSBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL25hdGl2ZXNjcmlwdC1vcGVudXJsXCI7XG4gICAgICAgIHRoaXMuUmVnbGFtZW50byA9IFwiaHR0cHM6Ly93ZWIuc2t5cGUuY29tL2VuL1wiO1xuICAgICAgICB0aGlzLkNvbmRpY2lvbmVzID0gXCJodHRwczovL2dvb2dsZS5jb20vXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUG9saXRpY2FzKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5BY2VwdGFjaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5SZWdsYW1lbnRvKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Db25kaWNpb25lcyk7XG4gICAgfVxuXG4gICAgYnRuUG9saXRpY2EoKXtcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuUG9saXRpY2FzKTtcbiAgICB9XG5cbiAgICBidG5Db25kaWNpb25lcygpe1xuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy5Db25kaWNpb25lcyk7XG4gICAgfVxuXG4gICAgYnRuUmVnbGFtZW50bygpe1xuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy5SZWdsYW1lbnRvKTtcbiAgICB9XG5cbiAgICBidG5BY2VwdGFjaW9uKCl7XG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLkFjZXB0YWNpb24pO1xuICAgIH1cblxuICAgIEFjZXB0YXIoKXtcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEZpcnN0UnVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibG9naW5cIl0pO1xuICAgIH1cbn0iXX0=