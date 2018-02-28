"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var app_modal_1 = require("./app.modal");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var RedesSocialesComponent = /** @class */ (function () {
    function RedesSocialesComponent(modal, vcRef) {
        this.modal = modal;
        this.vcRef = vcRef;
    }
    RedesSocialesComponent.prototype.showModal = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(app_modal_1.ModalComponent, options).then(function (res) {
            console.log(res);
        });
    };
    RedesSocialesComponent.prototype.comparteSorteo = function () {
        console.log("comparteSorteo()");
    };
    RedesSocialesComponent.prototype.comparteBoletos = function () {
        console.log("comparteBoletos()");
    };
    RedesSocialesComponent.prototype.ngOnInit = function () {
        console.log("REDES SOCIALES");
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    RedesSocialesComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], RedesSocialesComponent.prototype, "drawerComponent", void 0);
    RedesSocialesComponent = __decorate([
        core_1.Component({
            selector: 'redessociales',
            moduleId: module.id,
            templateUrl: './redes_sociales.component.html'
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], RedesSocialesComponent);
    return RedesSocialesComponent;
}());
exports.RedesSocialesComponent = RedesSocialesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZXNfc29jaWFsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZXNfc29jaWFsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRS9FLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFDOUYseUNBQTZDO0FBQzdDLG1FQUE2RTtBQU83RTtJQUVFLGdDQUEyQixLQUF5QixFQUFVLEtBQXVCO1FBQTFELFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFHckYsQ0FBQztJQUVNLDBDQUFTLEdBQWhCO1FBQ0UsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQkFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLTSwrQ0FBYyxHQUFyQjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZ0RBQWUsR0FBdEI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXJCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjttRUFBQztJQWxCbEQsc0JBQXNCO1FBTGxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztTQUMvQyxDQUFDO3lDQUdrQyw0QkFBa0IsRUFBaUIsdUJBQWdCO09BRjFFLHNCQUFzQixDQXdDbEM7SUFBRCw2QkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAubW9kYWxcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmVkZXNzb2NpYWxlcycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWRlc19zb2NpYWxlcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVkZXNTb2NpYWxlc0NvbXBvbmVudCB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZilcbiAge1xuXG4gIH1cbiAgXG4gIHB1YmxpYyBzaG93TW9kYWwoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pO1xuICB9IFxuXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgcHVibGljIGNvbXBhcnRlU29ydGVvKClcbiAgeyBcbiAgICBjb25zb2xlLmxvZyhcImNvbXBhcnRlU29ydGVvKClcIik7XG4gIH1cblxuICBwdWJsaWMgY29tcGFydGVCb2xldG9zKClcbiAgeyBcbiAgICBjb25zb2xlLmxvZyhcImNvbXBhcnRlQm9sZXRvcygpXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKVxuICB7XG4gICAgY29uc29sZS5sb2coXCJSRURFUyBTT0NJQUxFU1wiKTtcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxufSJdfQ==