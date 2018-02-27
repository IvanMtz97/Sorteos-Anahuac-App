"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var router_1 = require("@angular/router");
var BoletoVendidoComponent = /** @class */ (function () {
    function BoletoVendidoComponent(router) {
        this.router = router;
        this.selectBoleto = true;
        this.Datos = [];
        console.log("BOLETO VENDIDO COMPONENT");
    }
    BoletoVendidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("BOLETOVENDIDO");
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.router.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
            console.dir(_this.Datos);
        });
    };
    BoletoVendidoComponent.prototype.toggle = function () {
        this.selectBoleto = !this.selectBoleto;
    };
    BoletoVendidoComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], BoletoVendidoComponent.prototype, "drawerComponent", void 0);
    BoletoVendidoComponent = __decorate([
        core_1.Component({
            selector: "BoletoVendido",
            moduleId: module.id,
            templateUrl: "./boletovendido.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], BoletoVendidoComponent);
    return BoletoVendidoComponent;
}());
exports.BoletoVendidoComponent = BoletoVendidoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxrRUFBZ0Y7QUFDaEYsNkRBQThGO0FBQzlGLDBDQUFpRDtBQVFqRDtJQU9JLGdDQUFvQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQU5uQyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUk1QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHVDQUFNLEdBQWI7UUFFSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsa0RBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQTFCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjttRUFBQztJQUZwRCxzQkFBc0I7UUFMbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBUThCLHVCQUFjO09BUGpDLHNCQUFzQixDQTRDbEM7SUFBRCw2QkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuICAgIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkJvbGV0b1ZlbmRpZG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2JvbGV0b3ZlbmRpZG8uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9sZXRvVmVuZGlkb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc2VsZWN0Qm9sZXRvOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTsgXHJcbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTsgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCT0xFVE8gVkVORElETyBDT01QT05FTlRcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCT0xFVE9WRU5ESURPXCIpO1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuRGF0b3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Qm9sZXRvID0gIXRoaXMuc2VsZWN0Qm9sZXRvO1xyXG4gICAgfVxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbiBcclxuICAgIC8vIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOy8vIHN0YXR1c0Jhci5zaG93KCk7KHN3aXBlKT1cImhpZGVTdGF0dXNCYXIoKVwiXHJcbiAgICAvLyBoaWRlU3RhdHVzQmFyKClcclxuICAgIC8vIHsgICAgICAgIFxyXG4gICAgLy8gICAgIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gdHJ1ZSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHN0YXR1c0Jhci5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdHVzQmFyU3RhdGUgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IGZhbHNlKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgc3RhdHVzQmFyLnNob3coKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGF0dXNCYXJTdGF0ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==