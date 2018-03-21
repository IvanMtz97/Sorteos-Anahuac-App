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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjaWRhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcml2YWNpZGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFFL0IseUVBQXNFO0FBQ3RFLG1GQUFpRjtBQUNqRixJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFRM0M7SUFRSSw2QkFBb0IsSUFBVSxFQUFVLE9BQXVCLEVBQVUsTUFBd0I7UUFBN0UsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQTNDUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBVTRCLFdBQUksRUFBbUIsaUNBQWMsRUFBa0Isb0NBQWdCO09BUnhGLG1CQUFtQixDQTRDL0I7SUFBRCwwQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQcml2YWNpZGFkXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcml2YWNpZGFkLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YWNpZGFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgUG9saXRpY2FzOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIEFjZXB0YWNpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgUmVnbGFtZW50bzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBDb25kaWNpb25lczogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuUG9saXRpY2FzID0gdGhpcy5zZXNzaW9uLmdldFBvbGl0aWNhcygpO1xyXG4gICAgICAgIHRoaXMuQWNlcHRhY2lvbiA9IHRoaXMuc2Vzc2lvbi5nZXRBY2VwdGFjaW9uVGFsb25hcmlvcygpO1xyXG4gICAgICAgIHRoaXMuUmVnbGFtZW50byA9IHRoaXMuc2Vzc2lvbi5nZXRSZWdsYW1lbnRvKCk7XHJcbiAgICAgICAgdGhpcy5Db25kaWNpb25lcyA9IHRoaXMuc2Vzc2lvbi5nZXRDb25kaWNpb25lcygpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Qb2xpdGljYXMgPSBKU09OLnBhcnNlKHRoaXMuUG9saXRpY2FzKTsgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5BY2VwdGFjaW9uID0gSlNPTi5wYXJzZSh0aGlzLkFjZXB0YWNpb24pOyAgXHJcbiAgICAgICAgdGhpcy5SZWdsYW1lbnRvID0gSlNPTi5wYXJzZSh0aGlzLlJlZ2xhbWVudG8pOyAgXHJcbiAgICAgICAgdGhpcy5Db25kaWNpb25lcyA9IEpTT04ucGFyc2UodGhpcy5Db25kaWNpb25lcyk7IFxyXG4gICAgfVxyXG5cclxuICAgIGJ0blBvbGl0aWNhKCl7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuUG9saXRpY2FzKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5Db25kaWNpb25lcygpe1xyXG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLkNvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5SZWdsYW1lbnRvKCl7XHJcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHRoaXMuUmVnbGFtZW50byk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQWNlcHRhY2lvbigpe1xyXG4gICAgICAgIHV0aWxpdHlNb2R1bGUub3BlblVybCh0aGlzLkFjZXB0YWNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIEFjZXB0YXIoKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0Rmlyc3RSdW4oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59Il19