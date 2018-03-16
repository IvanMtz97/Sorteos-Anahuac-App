"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var GanadoresComponent = /** @class */ (function () {
    function GanadoresComponent(session) {
        this.session = session;
        this.ganadores = this.session.getGanadores();
        this.ganadores = JSON.parse(this.ganadores);
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    GanadoresComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], GanadoresComponent.prototype, "drawerComponent", void 0);
    GanadoresComponent = __decorate([
        core_1.Component({
            selector: "Ganadores",
            moduleId: module.id,
            templateUrl: "./ganadores.component.html",
            styleUrls: ["./ganadores.scss"]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService])
    ], GanadoresComponent);
    return GanadoresComponent;
}());
exports.GanadoresComponent = GanadoresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FuYWRvcmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbmFkb3Jlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsa0VBQWdGO0FBRWhGLHlFQUFzRTtBQVN0RTtJQU1JLDRCQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCw4Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBYm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7K0RBQUM7SUFEcEQsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUNsQyxDQUFDO3lDQVErQixpQ0FBYztPQU5sQyxrQkFBa0IsQ0FlOUI7SUFBRCx5QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiR2FuYWRvcmVzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhbmFkb3Jlcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9nYW5hZG9yZXMuc2Nzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEdhbmFkb3Jlc0NvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7ICAgIFxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgICBwdWJsaWMgZ2FuYWRvcmVzOiBzdHJpbmc7XG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSl7ICAgICAgICBcbiAgICAgICAgdGhpcy5nYW5hZG9yZXMgPSB0aGlzLnNlc3Npb24uZ2V0R2FuYWRvcmVzKCk7XG4gICAgICAgIHRoaXMuZ2FuYWRvcmVzID0gSlNPTi5wYXJzZSh0aGlzLmdhbmFkb3Jlcyk7XG4gICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTsgICAgXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn0iXX0=