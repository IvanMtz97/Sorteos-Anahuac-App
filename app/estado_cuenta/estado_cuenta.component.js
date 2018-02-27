"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var http_get_services_1 = require("../services/http-get/http-get.services");
var EstadoCuentaComponent = /** @class */ (function () {
    function EstadoCuentaComponent(myGetService) {
        this.myGetService = myGetService;
        this.statusBarState = true;
        console.log("ESTADO CUENTA");
    }
    EstadoCuentaComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(EstadoCuentaComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    EstadoCuentaComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], EstadoCuentaComponent.prototype, "drawerComponent", void 0);
    EstadoCuentaComponent = __decorate([
        core_1.Component({
            selector: "Estado_Cuenta",
            moduleId: module.id,
            templateUrl: "./estado_cuenta.component.html"
        }),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService])
    ], EstadoCuentaComponent);
    return EstadoCuentaComponent;
}());
exports.EstadoCuentaComponent = EstadoCuentaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWRvX2N1ZW50YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3RhZG9fY3VlbnRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBRWhGLDRFQUEwRTtBQVExRTtJQUVJLCtCQUFvQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFPM0MsbUJBQWMsR0FBVSxJQUFJLENBQUM7UUFMaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBTUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELHNCQUFJLHVEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxpREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBZm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7a0VBQUM7SUFOcEQscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQUdvQyxvQ0FBZ0I7T0FGekMscUJBQXFCLENBaUNqQztJQUFELDRCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkVzdGFkb19DdWVudGFcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2VzdGFkb19jdWVudGEuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXN0YWRvQ3VlbnRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFU1RBRE8gQ1VFTlRBXCIpO1xyXG4gICAgfVxyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHVibGljIHN0YXR1c0JhclN0YXRlOiBib29sZWFuPXRydWU7XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBnZXRFc3RhZG9DdWVudGEoKSB7XHJcbiAgICAvLyAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgLy8gICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAvLyAgICAgICAgIC5nZXREYXRhKCdhcGkvQ29sYWJvcmFkb3InKydwcnVlYmEuc29ydGVvQGFuYWh1YWMubXgnKVxyXG4gICAgLy8gICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUQURPIFJFU1BVRVNUQSAtLS0tLT4gXCIsIHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiLCBlcnJvcik7ICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=