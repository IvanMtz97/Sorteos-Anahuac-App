"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var session_services_1 = require("../services/session/session.services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var utilityModule = require("utils/utils");
var PrivacidadComponent = /** @class */ (function () {
    function PrivacidadComponent(page, session, router) {
        this.page = page;
        this.session = session;
        this.router = router;
        this.page.actionBarHidden = true;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    PrivacidadComponent.prototype.ngOnInit = function () {
        this.Politicas = this.session.getPoliticas();
        this.Aceptacion = this.session.getAceptacionTalonarios();
        this.Reglamento = this.session.getReglamento();
        this.Condiciones = this.session.getCondiciones();
        this.Politicas = JSON.parse(this.Politicas);
        this.Aceptacion = JSON.parse(this.Aceptacion);
        this.Reglamento = JSON.parse(this.Reglamento);
        this.Condiciones = JSON.parse(this.Condiciones);
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
        this.router.navigate(["talonarios"], { clearHistory: true });
    };
    PrivacidadComponent = __decorate([
        core_1.Component({
            selector: "Privacidad",
            moduleId: module.id,
            templateUrl: "./privacidad.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, session_services_1.SessionService, router_extensions_1.RouterExtensions])
    ], PrivacidadComponent);
    return PrivacidadComponent;
}());
exports.PrivacidadComponent = PrivacidadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjaWRhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcml2YWNpZGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFFL0IseUVBQXNFO0FBQ3RFLG1GQUFpRjtBQUNqRixJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFRM0M7SUFRSSw2QkFBb0IsSUFBVSxFQUFVLE9BQXVCLEVBQVUsTUFBd0I7UUFBN0UsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQTNDUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBVTRCLFdBQUksRUFBbUIsaUNBQWMsRUFBa0Isb0NBQWdCO09BUnhGLG1CQUFtQixDQTRDL0I7SUFBRCwwQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xudmFyIHV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByaXZhY2lkYWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJpdmFjaWRhZC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgUHJpdmFjaWRhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBQb2xpdGljYXM6IHN0cmluZztcbiAgICBwcml2YXRlIEFjZXB0YWNpb246IHN0cmluZztcbiAgICBwcml2YXRlIFJlZ2xhbWVudG86IHN0cmluZztcbiAgICBwcml2YXRlIENvbmRpY2lvbmVzOiBzdHJpbmc7XG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKXtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTsgICAgICAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuUG9saXRpY2FzID0gdGhpcy5zZXNzaW9uLmdldFBvbGl0aWNhcygpO1xuICAgICAgICB0aGlzLkFjZXB0YWNpb24gPSB0aGlzLnNlc3Npb24uZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKTtcbiAgICAgICAgdGhpcy5SZWdsYW1lbnRvID0gdGhpcy5zZXNzaW9uLmdldFJlZ2xhbWVudG8oKTtcbiAgICAgICAgdGhpcy5Db25kaWNpb25lcyA9IHRoaXMuc2Vzc2lvbi5nZXRDb25kaWNpb25lcygpOyAgICAgICAgXG4gICAgICAgIHRoaXMuUG9saXRpY2FzID0gSlNPTi5wYXJzZSh0aGlzLlBvbGl0aWNhcyk7ICAgICAgICAgIFxuICAgICAgICB0aGlzLkFjZXB0YWNpb24gPSBKU09OLnBhcnNlKHRoaXMuQWNlcHRhY2lvbik7ICBcbiAgICAgICAgdGhpcy5SZWdsYW1lbnRvID0gSlNPTi5wYXJzZSh0aGlzLlJlZ2xhbWVudG8pOyAgXG4gICAgICAgIHRoaXMuQ29uZGljaW9uZXMgPSBKU09OLnBhcnNlKHRoaXMuQ29uZGljaW9uZXMpOyBcbiAgICB9XG5cbiAgICBidG5Qb2xpdGljYSgpe1xuICAgICAgICB1dGlsaXR5TW9kdWxlLm9wZW5VcmwodGhpcy5Qb2xpdGljYXMpO1xuICAgIH1cblxuICAgIGJ0bkNvbmRpY2lvbmVzKCl7XG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLkNvbmRpY2lvbmVzKTtcbiAgICB9XG5cbiAgICBidG5SZWdsYW1lbnRvKCl7XG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLlJlZ2xhbWVudG8pO1xuICAgIH1cblxuICAgIGJ0bkFjZXB0YWNpb24oKXtcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuQWNlcHRhY2lvbik7XG4gICAgfVxuXG4gICAgQWNlcHRhcigpe1xuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Rmlyc3RSdW4oZmFsc2UpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59Il19