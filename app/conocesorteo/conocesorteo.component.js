"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var ConoceSorteoComponent = /** @class */ (function () {
    function ConoceSorteoComponent(session) {
        this.session = session;
        this.statusBarState = true;
        this.conocesorteo = this.session.getConoceSorteo();
        this.conocesorteo = JSON.parse(this.conocesorteo);
        this.imagenPublicitaria = this.session.getImagenPublicidad();
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
        __metadata("design:paramtypes", [session_services_1.SessionService])
    ], ConoceSorteoComponent);
    return ConoceSorteoComponent;
}());
exports.ConoceSorteoComponent = ConoceSorteoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ub2Nlc29ydGVvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm9jZXNvcnRlby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsa0VBQWdGO0FBR2hGLHlFQUFzRTtBQVN0RTtJQU9JLCtCQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUpwQyxtQkFBYyxHQUFVLElBQUksQ0FBQztRQUtoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFDRCxpREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBYm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7a0VBQUM7SUFEcEQscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDL0IsQ0FBQzt5Q0FTK0IsaUNBQWM7T0FQbEMscUJBQXFCLENBZWpDO0lBQUQsNEJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbiAgXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ29ub2NlU29ydGVvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb25vY2Vzb3J0ZW8uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9lc3RpbG9zLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbm9jZVNvcnRlb0NvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDsgICAgXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTtcclxuICAgIHB1YmxpYyBjb25vY2Vzb3J0ZW86IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKXsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29ub2Nlc29ydGVvID0gdGhpcy5zZXNzaW9uLmdldENvbm9jZVNvcnRlbygpO1xyXG4gICAgICAgIHRoaXMuY29ub2Nlc29ydGVvID0gSlNPTi5wYXJzZSh0aGlzLmNvbm9jZXNvcnRlbyk7ICBcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICB9XHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==