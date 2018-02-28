"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var statusBar = require("nativescript-status-bar");
var ConoceSorteoComponent = /** @class */ (function () {
    function ConoceSorteoComponent() {
        this.statusBarState = true;
        console.log("CONOCE SORTEO");
        statusBar.show();
    }
    ConoceSorteoComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ConoceSorteoComponent.prototype, "drawerComponent", void 0);
    ConoceSorteoComponent = __decorate([
        core_1.Component({
            selector: "ConoceSorteo",
            moduleId: module.id,
            templateUrl: "./conocesorteo.component.html",
            styleUrls: ["./estilos.css"]
        }),
        __metadata("design:paramtypes", [])
    ], ConoceSorteoComponent);
    return ConoceSorteoComponent;
}());
exports.ConoceSorteoComponent = ConoceSorteoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ub2Nlc29ydGVvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm9jZXNvcnRlby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsa0VBQWdGO0FBRWhGLG1EQUFzRDtBQVN0RDtJQUtJO1FBRk8sbUJBQWMsR0FBVSxJQUFJLENBQUM7UUFHaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFWb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjtrRUFBQztJQURwRCxxQkFBcUI7UUFQakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMvQixDQUFDOztPQUVXLHFCQUFxQixDQTBCakM7SUFBRCw0QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDb25vY2VTb3J0ZW9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29ub2Nlc29ydGVvLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2VzdGlsb3MuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29ub2NlU29ydGVvQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDsgICAgXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJDT05PQ0UgU09SVEVPXCIpO1xuICAgICAgICBzdGF0dXNCYXIuc2hvdygpO1xuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIC8vIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOy8vIHN0YXR1c0Jhci5zaG93KCk7KHN3aXBlKT1cImhpZGVTdGF0dXNCYXIoKVwiXG4gICAgLy8gaGlkZVN0YXR1c0JhcigpXG4gICAgLy8geyAgICAgICAgXG4gICAgLy8gICAgIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gdHJ1ZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgc3RhdHVzQmFyLmhpZGUoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdHVzQmFyU3RhdGUgPSBmYWxzZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gZmFsc2UpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHN0YXR1c0Jhci5zaG93KCk7XG4gICAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gdHJ1ZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iXX0=