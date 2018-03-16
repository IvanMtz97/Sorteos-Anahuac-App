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
            }, 2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUUvRCxrRUFBZ0Y7QUFDaEYsMEVBQXNFO0FBQ3RFLDBEQUFnRTtBQUVoRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0Isb0NBQXNDO0FBRXRDLGtDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVF2RTtJQVNJLCtCQUFvQixnQkFBa0MsRUFBVSxNQUE4QixFQUFVLE1BQXNCO1FBQTFHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBSnRILFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFXLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxDQUFDO0lBS2pELENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxZQUFvQjtRQUFqQyxpQkEwQ0M7UUF6Q0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQzVCLENBQUM7WUFDRyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ1osS0FBSyxFQUFDLE9BQU87b0JBQ2IsT0FBTyxFQUFFLDJCQUEyQjtvQkFDcEMsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLGdCQUFnQixFQUFFLElBQUk7aUJBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNWLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ1AsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFOzRCQUMzQyxVQUFVLEVBQUU7Z0NBQ1IsSUFBSSxFQUFFLE1BQU07NkJBQ2Y7NEJBQ0QsWUFBWSxFQUFFLEtBQUksQ0FBQyxLQUFLO3lCQUMzQixDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDM0MsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO2lCQUNmO2dCQUNELFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSzthQUMzQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxDQUM1QixDQUFDO1lBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFHMUIsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQWpFUTtRQUFSLFlBQUssRUFBRTs7d0RBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7d0RBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7dURBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7NkRBQXFCO0lBSnBCLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzt5Q0FVd0MseUJBQWdCLEVBQWtCLGdDQUFzQixFQUFrQix3QkFBYztPQVRySCxxQkFBcUIsQ0FtRWpDO0lBQUQsNEJBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IHNldEludGVydmFsLCBzZXRUaW1lb3V0LCBjbGVhckludGVydmFsIH0gZnJvbSBcInRpbWVyXCI7XHJcbnZhciB0aW1lciA9IHJlcXVpcmUoXCJ0aW1lclwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VySXRlbVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktZHJhd2VyLWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXItaXRlbS5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSByb3V0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgY2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2xlYW5BcnJheTogb2JqZWN0ID0geyAnL2xvZ2luJyA6IHRydWUgfTtcclxuICAgIHB1YmxpYyBpZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBwcml2YXRlIGxvYWRlcjogTG9hZGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQgeyAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jbGVhbkFycmF5W25hdkl0ZW1Sb3V0ZV0pIHRoaXMuY2xlYW4gPSB0cnVlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2lkZURyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmF2SXRlbVJvdXRlIC0+IFwiICsgbmF2SXRlbVJvdXRlKTsgXHJcbiAgICAgICAgaWYobmF2SXRlbVJvdXRlID09IFwiL2xvZ2luXCIpXHJcbiAgICAgICAgeyAgXHJcbiAgICAgICAgICAgIHRpbWVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLCv0Rlc2VhcyBjZXJyYXIgbGEgc2VzacOzbj9cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU0lcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5PXCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdGhpcy5jbGVhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgeyAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRoaXMuY2xlYW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5hdkl0ZW1Sb3V0ZSAhPSBcIi9sb2dpblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTsgXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSB0aW1lci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZXIoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVyKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldFRpbWVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=