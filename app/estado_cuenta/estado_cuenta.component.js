"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var EstadoCuentaComponent = /** @class */ (function () {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    function EstadoCuentaComponent() {
        this.statusBarState = true;
        console.log("ESTADO CUENTA");
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
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
    // public statusBarState: boolean=true;// statusBar.show();(swipe)="hideStatusBar()"
    // hideStatusBar()
    // {        
    //     if(this.statusBarState == true)
    //     {
    //         statusBar.hide();
    //         this.statusBarState = false;
    //     }
    //     else if(this.statusBarState == false)
    //     {
    //         statusBar.show();
    //         this.statusBarState = true;
    //     }
    // }
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
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
        __metadata("design:paramtypes", [])
    ], EstadoCuentaComponent);
    return EstadoCuentaComponent;
}());
exports.EstadoCuentaComponent = EstadoCuentaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWRvX2N1ZW50YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3RhZG9fY3VlbnRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBUWhGO0lBQ0k7OztrRUFHOEQ7SUFDOUQ7UUFPTyxtQkFBYyxHQUFVLElBQUksQ0FBQztRQUxoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFLRDs7a0VBRThEO0lBQzlELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxzQkFBSSx1REFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsb0ZBQW9GO0lBQ3BGLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLFFBQVE7SUFDUiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixzQ0FBc0M7SUFDdEMsUUFBUTtJQUNSLElBQUk7SUFDSjs7O2tFQUc4RDtJQUM5RCxpREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBbkNvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2tFQUFDO0lBVHBELHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzs7T0FDVyxxQkFBcUIsQ0E2Q2pDO0lBQUQsNEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiRXN0YWRvX0N1ZW50YVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZXN0YWRvX2N1ZW50YS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc3RhZG9DdWVudGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXHJcbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVNUQURPIENVRU5UQVwiKTtcclxuICAgIH1cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlO1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gcHVibGljIHN0YXR1c0JhclN0YXRlOiBib29sZWFuPXRydWU7Ly8gc3RhdHVzQmFyLnNob3coKTsoc3dpcGUpPVwiaGlkZVN0YXR1c0JhcigpXCJcclxuICAgIC8vIGhpZGVTdGF0dXNCYXIoKVxyXG4gICAgLy8geyAgICAgICAgXHJcbiAgICAvLyAgICAgaWYodGhpcy5zdGF0dXNCYXJTdGF0ZSA9PSB0cnVlKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgc3RhdHVzQmFyLmhpZGUoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGF0dXNCYXJTdGF0ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gZmFsc2UpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBzdGF0dXNCYXIuc2hvdygpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xyXG4gICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=