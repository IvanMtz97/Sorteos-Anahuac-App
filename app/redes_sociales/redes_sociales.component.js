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
    RedesSocialesComponent.prototype.showModal = function (queCompartir) {
        var options = {
            context: { queCompartir: queCompartir },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(app_modal_1.ModalComponent, options).then(function (res) {
            console.log(res);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZXNfc29jaWFsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZXNfc29jaWFsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRS9FLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFDOUYseUNBQTZDO0FBQzdDLG1FQUE2RTtBQU83RTtJQUVFLGdDQUEyQixLQUF5QixFQUFVLEtBQXVCO1FBQTFELFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFHckYsQ0FBQztJQUVNLDBDQUFTLEdBQWhCLFVBQWlCLFlBQVk7UUFDM0IsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBQyxZQUFZLGNBQUEsRUFBQztZQUN2QixVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMEJBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QseUNBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxrREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBWG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7bUVBQUM7SUFsQmxELHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQzt5Q0FHa0MsNEJBQWtCLEVBQWlCLHVCQUFnQjtPQUYxRSxzQkFBc0IsQ0E4QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAubW9kYWxcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZWRlc3NvY2lhbGVzJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWRlc19zb2NpYWxlcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZGVzU29jaWFsZXNDb21wb25lbnQge1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKVxyXG4gIHtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBzaG93TW9kYWwocXVlQ29tcGFydGlyKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7cXVlQ29tcGFydGlyfSxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KTsgICAgXHJcbiAgfSBcclxuXHJcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAge1xyXG4gICAgY29uc29sZS5sb2coXCJSRURFUyBTT0NJQUxFU1wiKTtcclxuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG59Il19