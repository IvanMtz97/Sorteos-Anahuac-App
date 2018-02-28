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
        this.visibility = true;
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
        if (this.Datos != undefined) {
            this.visibility = true;
        }
        else {
            this.visibility = false;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxrRUFBZ0Y7QUFDaEYsNkRBQThGO0FBQzlGLDBDQUFpRDtBQVFqRDtJQVFJLGdDQUFvQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVBuQyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUk1QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFJL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBZkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FDM0IsQ0FBQztZQUNHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRU0sdUNBQU0sR0FBYjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUFDRCxrREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBcENvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO21FQUFDO0lBRnBELHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FTOEIsdUJBQWM7T0FSakMsc0JBQXNCLENBc0RsQztJQUFELDZCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcbiAgICBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkJvbGV0b1ZlbmRpZG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYm9sZXRvdmVuZGlkby5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEJvbGV0b1ZlbmRpZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBzZWxlY3RCb2xldG86IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlOyBcbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTsgIFxuICAgIHByaXZhdGUgdmlzaWJpbGl0eTogYm9vbGVhbiA9IHRydWU7IFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCT0xFVE8gVkVORElETyBDT01QT05FTlRcIik7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQgXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJPTEVUT1ZFTkRJRE9cIik7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuRGF0b3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLkRhdG9zICE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdEJvbGV0byA9ICF0aGlzLnNlbGVjdEJvbGV0bztcbiAgICB9XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiBcbiAgICAvLyBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTsvLyBzdGF0dXNCYXIuc2hvdygpOyhzd2lwZSk9XCJoaWRlU3RhdHVzQmFyKClcIlxuICAgIC8vIGhpZGVTdGF0dXNCYXIoKVxuICAgIC8vIHsgICAgICAgIFxuICAgIC8vICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHN0YXR1c0Jhci5oaWRlKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gZmFsc2U7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IGZhbHNlKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBzdGF0dXNCYXIuc2hvdygpO1xuICAgIC8vICAgICAgICAgdGhpcy5zdGF0dXNCYXJTdGF0ZSA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iXX0=