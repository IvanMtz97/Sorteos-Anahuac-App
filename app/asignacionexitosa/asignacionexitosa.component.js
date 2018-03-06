"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var platform_1 = require("platform");
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent(session, router, Router) {
        this.session = session;
        this.router = router;
        this.Router = Router;
        this.boleto = false;
        this.Datos = [];
        console.log("ASIGNACION COMPONENT");
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    AsignacionExitosaComponent.prototype.toggle = function () {
        this.boleto = !this.boleto;
    };
    AsignacionExitosaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
            console.dir(_this.Datos);
        });
    };
    AsignacionExitosaComponent.prototype.onDrawerButtonTap = function () {
        if (platform_1.isIOS) {
            this.Router.navigate(["talonarios"]);
        }
        else if (platform_1.isAndroid) {
            this.drawerComponent.sideDrawer.showDrawer();
        }
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
            styleUrls: ["./asignacionexitosa.css"]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute, router_1.Router])
    ], AsignacionExitosaComponent);
    return AsignacionExitosaComponent;
}());
exports.AsignacionExitosaComponent = AsignacionExitosaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBQ3RFLHFDQUE0QztBQVM1QztJQVVJLG9DQUFvQixPQUF1QixFQUFVLE1BQXNCLEVBQVUsTUFBYztRQUEvRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5uRyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFNWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBUEQsMkNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFPRCw2Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzREFBaUIsR0FBakI7UUFDSSxFQUFFLENBQUEsQ0FBQyxnQkFBSyxDQUFDLENBQUEsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pELENBQUM7SUFDTCxDQUFDO0lBNUJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBRHBELDBCQUEwQjtRQVB0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQVkrQixpQ0FBYyxFQUFrQix1QkFBYyxFQUFrQixlQUFNO09BVjFGLDBCQUEwQixDQThCdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBc2lnbmFjaW9uRXhpdG9zYVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hc2lnbmFjaW9uZXhpdG9zYS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50OyAgICBcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgICAgICBcclxuICAgIGJvbGV0bzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgRGF0b3M6IGFueSA9IFtdO1xyXG5cclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuYm9sZXRvID0gIXRoaXMuYm9sZXRvO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIFJvdXRlcjogUm91dGVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFTSUdOQUNJT04gQ09NUE9ORU5UXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5EYXRvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoaXNJT1Mpe1xyXG4gICAgICAgICAgICB0aGlzLlJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICB9ZWxzZSBpZiAoaXNBbmRyb2lkKXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19