"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
var loading_1 = require("../../services/loading/loading");
var timer = require("timer");
element_registry_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
var MyDrawerItemComponent = /** @class */ (function () {
    function MyDrawerItemComponent(routerExtensions, drawer, loader) {
        this.routerExtensions = routerExtensions;
        this.drawer = drawer;
        this.loader = loader;
        this.clean = false;
        this.cleanArray = { '/login': true };
    }
    MyDrawerItemComponent.prototype.ngOnInit = function () {
    };
    MyDrawerItemComponent.prototype.onNavItemTap = function (navItemRoute) {
        var _this = this;
        if (this.cleanArray[navItemRoute])
            this.clean = true;
        this.drawer.sideDrawer.toggleDrawerState();
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            },
            clearHistory: this.clean
        });
        this.loader.display(true);
        var id = timer.setTimeout(function () {
            _this.setTimer();
        }, 2000);
    };
    MyDrawerItemComponent.prototype.setTimer = function () {
        console.log("setTimer");
        this.loader.display(false);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerItemComponent.prototype, "route", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerItemComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyDrawerItemComponent.prototype, "isSelected", void 0);
    MyDrawerItemComponent = __decorate([
        core_1.Component({
            selector: "MyDrawerItem",
            moduleId: module.id,
            templateUrl: "./my-drawer-item.component.html",
            styleUrls: ["./my-drawer-item.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, angular_1.RadSideDrawerComponent, loading_1.LoadingService])
    ], MyDrawerItemComponent);
    return MyDrawerItemComponent;
}());
exports.MyDrawerItemComponent = MyDrawerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUUvRCxrRUFBZ0Y7QUFDaEYsMEVBQXNFO0FBQ3RFLDBEQUFnRTtBQUVoRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0Isa0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0FBUXZFO0lBU0ksK0JBQW9CLGdCQUFrQyxFQUFVLE1BQThCLEVBQVUsTUFBc0I7UUFBMUcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFKdEgsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQVcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLENBQUM7SUFLakQsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQVksR0FBWixVQUFhLFlBQW9CO1FBQWpDLGlCQWVDO1FBZEcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzNDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1lBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRzFCLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBdENRO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt1REFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOzs2REFBcUI7SUFKcEIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO3lDQVV3Qyx5QkFBZ0IsRUFBa0IsZ0NBQXNCLEVBQWtCLHdCQUFjO09BVHJILHFCQUFxQixDQXdDakM7SUFBRCw0QkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIHNldFRpbWVvdXQsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidGltZXJcIjtcclxudmFyIHRpbWVyID0gcmVxdWlyZShcInRpbWVyXCIpO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VySXRlbVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktZHJhd2VyLWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXItaXRlbS5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSByb3V0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgY2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2xlYW5BcnJheTogb2JqZWN0ID0geyAnL2xvZ2luJyA6IHRydWUgfTtcclxuICAgIHB1YmxpYyBpZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBwcml2YXRlIGxvYWRlcjogTG9hZGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQgeyAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jbGVhbkFycmF5W25hdkl0ZW1Sb3V0ZV0pIHRoaXMuY2xlYW4gPSB0cnVlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2lkZURyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdGhpcy5jbGVhblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7IFxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSB0aW1lci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaW1lcigpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVyKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFRpbWVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=