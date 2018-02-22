"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var session_services_1 = require("../services/session/session.services");
var PrivacidadComponent = /** @class */ (function () {
    function PrivacidadComponent(page, session, router) {
        this.page = page;
        this.session = session;
        this.router = router;
        this.page.actionBarHidden = true;
        console.log("PRIVACIDAD COMPONENT");
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjaWRhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcml2YWNpZGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLHlFQUFzRTtBQVF0RTtJQUNJLDZCQUFvQixJQUFVLEVBQVUsT0FBdUIsRUFBVSxNQUFjO1FBQW5FLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBVFEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQUc0QixXQUFJLEVBQW1CLGlDQUFjLEVBQWtCLGVBQU07T0FEOUUsbUJBQW1CLENBVS9CO0lBQUQsMEJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQcml2YWNpZGFkXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcml2YWNpZGFkLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YWNpZGFkQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQUklWQUNJREFEIENPTVBPTkVOVFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBBY2VwdGFyKCl7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEZpcnN0UnVuKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJsb2dpblwiXSk7XHJcbiAgICB9XHJcbn0iXX0=