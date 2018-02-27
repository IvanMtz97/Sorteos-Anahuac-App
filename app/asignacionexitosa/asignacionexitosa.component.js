"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent(router) {
        this.router = router;
        this.boleto = false;
        this.Datos = [];
        console.log("ASIGNACION COMPONENT");
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AsignacionExitosaComponent);
    return AsignacionExitosaComponent;
}());
exports.AsignacionExitosaComponent = AsignacionExitosaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUFpRDtBQUNqRCxrRUFBZ0Y7QUFVaEY7SUFVSSxvQ0FBb0IsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFOMUMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBTVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFMRCwyQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUtELDZDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUF0Qm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7dUVBQUM7SUFEcEQsMEJBQTBCO1FBUHRDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBWThCLHVCQUFjO09BVmpDLDBCQUEwQixDQXdCdEM7SUFBRCxpQ0FBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQXNpZ25hY2lvbkV4aXRvc2FcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FzaWduYWNpb25leGl0b3NhLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYXNpZ25hY2lvbmV4aXRvc2EuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXNpZ25hY2lvbkV4aXRvc2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDsgICAgXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgYm9sZXRvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBEYXRvczogYW55ID0gW107XHJcblxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5ib2xldG8gPSAhdGhpcy5ib2xldG87XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVNJR05BQ0lPTiBDT01QT05FTlRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0b3MgPSBKU09OLnBhcnNlKHBhcmFtc1tcImRhdGFcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLkRhdG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==