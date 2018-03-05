"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var GanadoresComponent = /** @class */ (function () {
    function GanadoresComponent(session) {
        this.session = session;
        console.log("GANADORES COMPONENT");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FuYWRvcmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbmFkb3Jlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsa0VBQWdGO0FBRWhGLHlFQUFzRTtBQVN0RTtJQU1JLDRCQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQWRvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOytEQUFDO0lBRHBELGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDbEMsQ0FBQzt5Q0FRK0IsaUNBQWM7T0FObEMsa0JBQWtCLENBZ0I5QjtJQUFELHlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJHYW5hZG9yZXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dhbmFkb3Jlcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2dhbmFkb3Jlcy5zY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2FuYWRvcmVzQ29tcG9uZW50IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50OyAgICBcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBnYW5hZG9yZXM6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdBTkFET1JFUyBDT01QT05FTlRcIik7XHJcbiAgICAgICAgdGhpcy5nYW5hZG9yZXMgPSB0aGlzLnNlc3Npb24uZ2V0R2FuYWRvcmVzKCk7XHJcbiAgICAgICAgdGhpcy5nYW5hZG9yZXMgPSBKU09OLnBhcnNlKHRoaXMuZ2FuYWRvcmVzKTtcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59Il19