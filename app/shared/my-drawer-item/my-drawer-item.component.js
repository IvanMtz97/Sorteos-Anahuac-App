"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
var loading_1 = require("../../services/loading/loading");
var timer = require("timer");
var dialogs = require("ui/dialogs");
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
        console.log("navItemRoute -> " + navItemRoute);
        if (navItemRoute == "/login") {
            dialogs.confirm({
                title: "AVISO",
                message: "¿Deseas cerrar la sesión?",
                okButtonText: "SI",
                cancelButtonText: "NO"
            }).then(function (result) {
                if (result) {
                    _this.routerExtensions.navigate([navItemRoute], {
                        transition: {
                            name: "fade"
                        },
                        clearHistory: _this.clean
                    });
                }
            });
        }
        else {
            this.routerExtensions.navigate([navItemRoute], {
                transition: {
                    name: "fade"
                },
                clearHistory: this.clean
            });
        }
        if (navItemRoute != "/login") {
            this.loader.display(true);
            var id = timer.setTimeout(function () {
                _this.setTimer();
            }, 2000);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUUvRCxrRUFBZ0Y7QUFDaEYsMEVBQXNFO0FBQ3RFLDBEQUFnRTtBQUVoRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0Isb0NBQXNDO0FBRXRDLGtDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVF2RTtJQVNJLCtCQUFvQixnQkFBa0MsRUFBVSxNQUE4QixFQUFVLE1BQXNCO1FBQTFHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBSnRILFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFXLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxDQUFDO0lBS2pELENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxZQUFvQjtRQUFqQyxpQkF3Q0M7UUF2Q0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQzVCLENBQUM7WUFDRyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNaLEtBQUssRUFBQyxPQUFPO2dCQUNiLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLFlBQVksRUFBRSxJQUFJO2dCQUNsQixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNWLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7b0JBQ1AsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUMzQyxVQUFVLEVBQUU7NEJBQ1IsSUFBSSxFQUFFLE1BQU07eUJBQ2Y7d0JBQ0QsWUFBWSxFQUFFLEtBQUksQ0FBQyxLQUFLO3FCQUMzQixDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMzQyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQzVCLENBQUM7WUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUcxQixJQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUN4QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUvQixDQUFDO0lBL0RRO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt1REFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOzs2REFBcUI7SUFKcEIscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO3lDQVV3Qyx5QkFBZ0IsRUFBa0IsZ0NBQXNCLEVBQWtCLHdCQUFjO09BVHJILHFCQUFxQixDQWlFakM7SUFBRCw0QkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIHNldFRpbWVvdXQsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidGltZXJcIjtcclxudmFyIHRpbWVyID0gcmVxdWlyZShcInRpbWVyXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJSaXBwbGVcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1yaXBwbGVcIikuUmlwcGxlKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJJdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXItaXRlbS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci1pdGVtLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeURyYXdlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHJvdXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBjbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjbGVhbkFycmF5OiBvYmplY3QgPSB7ICcvbG9naW4nIDogdHJ1ZSB9O1xyXG4gICAgcHVibGljIGlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7ICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmNsZWFuQXJyYXlbbmF2SXRlbVJvdXRlXSkgdGhpcy5jbGVhbiA9IHRydWU7ICAgICAgICBcclxuICAgICAgICB0aGlzLmRyYXdlci5zaWRlRHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuYXZJdGVtUm91dGUgLT4gXCIgKyBuYXZJdGVtUm91dGUpOyBcclxuICAgICAgICBpZihuYXZJdGVtUm91dGUgPT0gXCIvbG9naW5cIilcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIsK/RGVzZWFzIGNlcnJhciBsYSBzZXNpw7NuP1wiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5PXCJcclxuICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0aGlzLmNsZWFuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgeyAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRoaXMuY2xlYW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5hdkl0ZW1Sb3V0ZSAhPSBcIi9sb2dpblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTsgXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSB0aW1lci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZXIoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVyKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFRpbWVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=