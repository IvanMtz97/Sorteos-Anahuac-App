"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent(session, router) {
        this.session = session;
        this.router = router;
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
        this.drawerComponent.sideDrawer.showDrawer();
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
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute])
    ], AsignacionExitosaComponent);
    return AsignacionExitosaComponent;
}());
exports.AsignacionExitosaComponent = AsignacionExitosaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUFpRDtBQUNqRCxrRUFBZ0Y7QUFFaEYseUVBQXNFO0FBU3RFO0lBVUksb0NBQW9CLE9BQXVCLEVBQVUsTUFBc0I7UUFBdkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQU4zRSxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFNWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBUEQsMkNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFPRCw2Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBeEJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBRHBELDBCQUEwQjtRQVB0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQVkrQixpQ0FBYyxFQUFrQix1QkFBYztPQVZsRSwwQkFBMEIsQ0EwQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBc2lnbmFjaW9uRXhpdG9zYVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hc2lnbmFjaW9uZXhpdG9zYS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50OyAgICBcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgICAgICBcclxuICAgIGJvbGV0bzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgRGF0b3M6IGFueSA9IFtdO1xyXG5cclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuYm9sZXRvID0gIXRoaXMuYm9sZXRvO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFTSUdOQUNJT04gQ09NUE9ORU5UXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5EYXRvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=