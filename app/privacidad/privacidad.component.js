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
        this.Politicas = this.session.getPoliticas();
        this.Aceptacion = this.session.getAceptacionTalonarios();
        this.Reglamento = this.session.getReglamento();
        this.Condiciones = this.session.getReglamento();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjaWRhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcml2YWNpZGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLHlFQUFzRTtBQUN0RSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFRM0M7SUFPSSw2QkFBb0IsSUFBVSxFQUFVLE9BQXVCLEVBQVUsTUFBYztRQUFuRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTi9FLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBSTdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUExQ1EsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQVM0QixXQUFJLEVBQW1CLGlDQUFjLEVBQWtCLGVBQU07T0FQOUUsbUJBQW1CLENBMkMvQjtJQUFELDBCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlByaXZhY2lkYWRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ByaXZhY2lkYWQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhY2lkYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBQb2xpdGljYXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIEFjZXB0YWNpb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIFJlZ2xhbWVudG86IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIENvbmRpY2lvbmVzOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUFJJVkFDSURBRCBDT01QT05FTlRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLlBvbGl0aWNhcyA9IHRoaXMuc2Vzc2lvbi5nZXRQb2xpdGljYXMoKTtcclxuICAgICAgICB0aGlzLkFjZXB0YWNpb24gPSB0aGlzLnNlc3Npb24uZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKTtcclxuICAgICAgICB0aGlzLlJlZ2xhbWVudG8gPSB0aGlzLnNlc3Npb24uZ2V0UmVnbGFtZW50bygpO1xyXG4gICAgICAgIHRoaXMuQ29uZGljaW9uZXMgPSB0aGlzLnNlc3Npb24uZ2V0UmVnbGFtZW50bygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUG9saXRpY2FzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkFjZXB0YWNpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUmVnbGFtZW50byk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Db25kaWNpb25lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuUG9saXRpY2EoKXtcclxuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy5Qb2xpdGljYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNvbmRpY2lvbmVzKCl7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuQ29uZGljaW9uZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0blJlZ2xhbWVudG8oKXtcclxuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy5SZWdsYW1lbnRvKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5BY2VwdGFjaW9uKCl7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuQWNlcHRhY2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgQWNlcHRhcigpe1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRGaXJzdFJ1bihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICB9XHJcbn0iXX0=