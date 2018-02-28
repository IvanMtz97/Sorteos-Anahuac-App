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
        this.router.navigate(["talonarios"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjaWRhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcml2YWNpZGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLHlFQUFzRTtBQUN0RSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFRM0M7SUFPSSw2QkFBb0IsSUFBVSxFQUFVLE9BQXVCLEVBQVUsTUFBYztRQUFuRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTi9FLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBSTdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0RBQW9ELENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTFDUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBUzRCLFdBQUksRUFBbUIsaUNBQWMsRUFBa0IsZUFBTTtPQVA5RSxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG52YXIgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJpdmFjaWRhZFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJpdmFjaWRhZC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmFjaWRhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIFBvbGl0aWNhczogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgQWNlcHRhY2lvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgUmVnbGFtZW50bzogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgQ29uZGljaW9uZXM6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQUklWQUNJREFEIENPTVBPTkVOVFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuUG9saXRpY2FzID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI7XHJcbiAgICAgICAgdGhpcy5BY2VwdGFjaW9uID0gXCJodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uYXRpdmVzY3JpcHQtb3BlbnVybFwiO1xyXG4gICAgICAgIHRoaXMuUmVnbGFtZW50byA9IFwiaHR0cHM6Ly93ZWIuc2t5cGUuY29tL2VuL1wiO1xyXG4gICAgICAgIHRoaXMuQ29uZGljaW9uZXMgPSBcImh0dHBzOi8vZ29vZ2xlLmNvbS9cIjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlBvbGl0aWNhcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5BY2VwdGFjaW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlJlZ2xhbWVudG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuQ29uZGljaW9uZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0blBvbGl0aWNhKCl7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuUG9saXRpY2FzKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5Db25kaWNpb25lcygpe1xyXG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLkNvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5SZWdsYW1lbnRvKCl7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuUmVnbGFtZW50byk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQWNlcHRhY2lvbigpe1xyXG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLkFjZXB0YWNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIEFjZXB0YXIoKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Rmlyc3RSdW4oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0pO1xyXG4gICAgfVxyXG59Il19