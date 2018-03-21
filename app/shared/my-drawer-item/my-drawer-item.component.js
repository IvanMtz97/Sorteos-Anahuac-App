"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
var loading_1 = require("../../services/loading/loading");
var timer = require("timer");
var dialogs = require("ui/dialogs");
var session_services_1 = require("../../services/session/session.services");
element_registry_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
var MyDrawerItemComponent = /** @class */ (function () {
    function MyDrawerItemComponent(routerExtensions, drawer, loader, session) {
        this.routerExtensions = routerExtensions;
        this.drawer = drawer;
        this.loader = loader;
        this.session = session;
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
        if (navItemRoute == "/login" && this.session.loggedIn()) {
            timer.setTimeout(function () {
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
            }, 1000);
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
        __metadata("design:paramtypes", [router_1.RouterExtensions, angular_1.RadSideDrawerComponent, loading_1.LoadingService, session_services_1.SessionService])
    ], MyDrawerItemComponent);
    return MyDrawerItemComponent;
}());
exports.MyDrawerItemComponent = MyDrawerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUUvRCxrRUFBZ0Y7QUFDaEYsMEVBQXNFO0FBQ3RFLDBEQUFnRTtBQUVoRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0Isb0NBQXNDO0FBQ3RDLDRFQUF5RTtBQUV6RSxrQ0FBZSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7QUFRdkU7SUFTSSwrQkFBb0IsZ0JBQWtDLEVBQVUsTUFBOEIsRUFBVSxNQUFzQixFQUFVLE9BQXVCO1FBQTNJLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFKdkosVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQVcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLENBQUM7SUFLakQsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQVksR0FBWixVQUFhLFlBQW9CO1FBQWpDLGlCQTBDQztRQXpDRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQSxDQUFDLFlBQVksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUN2RCxDQUFDO1lBQ0csS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDYixPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNaLEtBQUssRUFBQyxPQUFPO29CQUNiLE9BQU8sRUFBRSwyQkFBMkI7b0JBQ3BDLFlBQVksRUFBRSxJQUFJO29CQUNsQixnQkFBZ0IsRUFBRSxJQUFJO2lCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQkFDVixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTs0QkFDM0MsVUFBVSxFQUFFO2dDQUNSLElBQUksRUFBRSxNQUFNOzZCQUNmOzRCQUNELFlBQVksRUFBRSxLQUFJLENBQUMsS0FBSzt5QkFDM0IsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjtnQkFDRCxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDM0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDNUIsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRzFCLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFqRVE7UUFBUixZQUFLLEVBQUU7O3dEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7O3dEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7O3VEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7OzZEQUFxQjtJQUpwQixxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7eUNBVXdDLHlCQUFnQixFQUFrQixnQ0FBc0IsRUFBa0Isd0JBQWMsRUFBbUIsaUNBQWM7T0FUdEoscUJBQXFCLENBbUVqQztJQUFELDRCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgc2V0VGltZW91dCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0aW1lclwiO1xyXG52YXIgdGltZXIgPSByZXF1aXJlKFwidGltZXJcIik7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJSaXBwbGVcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1yaXBwbGVcIikuUmlwcGxlKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJJdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXItaXRlbS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci1pdGVtLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeURyYXdlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHJvdXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBjbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjbGVhbkFycmF5OiBvYmplY3QgPSB7ICcvbG9naW4nIDogdHJ1ZSB9O1xyXG4gICAgcHVibGljIGlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nU2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7ICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmNsZWFuQXJyYXlbbmF2SXRlbVJvdXRlXSkgdGhpcy5jbGVhbiA9IHRydWU7ICAgICAgICBcclxuICAgICAgICB0aGlzLmRyYXdlci5zaWRlRHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuYXZJdGVtUm91dGUgLT4gXCIgKyBuYXZJdGVtUm91dGUpOyBcclxuICAgICAgICBpZihuYXZJdGVtUm91dGUgPT0gXCIvbG9naW5cIiAmJiB0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSlcclxuICAgICAgICB7ICBcclxuICAgICAgICAgICAgdGltZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQVZJU09cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIsK/RGVzZWFzIGNlcnJhciBsYSBzZXNpw7NuP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTSVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTk9cIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0aGlzLmNsZWFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7ICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdGhpcy5jbGVhblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmF2SXRlbVJvdXRlICE9IFwiL2xvZ2luXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpOyBcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHRpbWVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lcigpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZXIoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0VGltZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==