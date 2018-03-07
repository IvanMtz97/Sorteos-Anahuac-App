"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var session_services_1 = require("../services/session/session.services");
var NotificacionesComponent = /** @class */ (function () {
    function NotificacionesComponent(session) {
        this.session = session;
        this.hideButtonDelete = true;
        this.count = 0;
        this.PilaMensajes = [];
        this.mensajes = [
            {
                messageId: "001",
                from: "Juan Jose Hernandez",
                message: "Saludos cordiales"
            },
            {
                messageId: "002",
                from: "Pedro Alberto Garcia",
                message: "Saludos cordialesx2"
            }
        ];
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    NotificacionesComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    NotificacionesComponent.prototype.eliminarSeleccion = function () {
    };
    NotificacionesComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    NotificacionesComponent.prototype.countCheck = function (band) {
        var bandera = true;
        this.count = (band) ? this.count + 1 : this.count - 1;
        if (this.count == 0)
            bandera = false;
        return bandera;
    };
    NotificacionesComponent.prototype.toggleCheck = function (eventData, mensaje, index) {
        if (this.countCheck(eventData.checked))
            this.hideButtonDelete = true;
        else
            this.hideButtonDelete = false;
        if (eventData.checked) {
            this.PilaMensajes.push(mensaje);
        }
        else {
            this.PilaMensajes.splice(index, 1);
        }
        console.log("hideButtonDelete: " + this.hideButtonDelete);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], NotificacionesComponent.prototype, "drawerComponent", void 0);
    NotificacionesComponent = __decorate([
        core_1.Component({
            selector: 'notificaciones',
            moduleId: module.id,
            templateUrl: './notificaciones.component.html'
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService])
    ], NotificacionesComponent);
    return NotificacionesComponent;
}());
exports.NotificacionesComponent = NotificacionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYseUVBQXNFO0FBT3RFO0lBU0UsaUNBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTHBDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQXVDbEMsYUFBUSxHQUNmO1lBQ0U7Z0JBQ0ksU0FBUyxFQUFDLEtBQUs7Z0JBQ2YsSUFBSSxFQUFDLHFCQUFxQjtnQkFDMUIsT0FBTyxFQUFFLG1CQUFtQjthQUMvQjtZQUNEO2dCQUNJLFNBQVMsRUFBQyxLQUFLO2dCQUNmLElBQUksRUFBQyxzQkFBc0I7Z0JBQzNCLE9BQU8sRUFBRSxxQkFBcUI7YUFDakM7U0FDRixDQUFBO1FBOUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxtREFBaUIsR0FBakI7SUFFQSxDQUFDO0lBRUQsbURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLDRDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsQ0FBQztJQUVJLDZDQUFXLEdBQWxCLFVBQW1CLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSztRQUMxQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDcEUsSUFBSTtZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExQ3NCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7b0VBQUM7SUFGbEQsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQy9DLENBQUM7eUNBVTZCLGlDQUFjO09BVGhDLHVCQUF1QixDQTBEbkM7SUFBRCw4QkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuIFxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25vdGlmaWNhY2lvbmVzJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYWNpb25lcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IHsgIFxyXG5cclxuICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgcHVibGljIGhpZGVCdXR0b25EZWxldGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIFBpbGFNZW5zYWplczogQXJyYXk8b2JqZWN0PiA9IFtdO1xyXG4gIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSlcclxuICB7XHJcbiAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAgeyAgICBcclxuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIGVsaW1pbmFyU2VsZWNjaW9uKClcclxuICB7ICAgICAgXHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkgXHJcbiAge1xyXG4gICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3VudCA9IChiYW5kKSA/IHRoaXMuY291bnQgKyAxIDogdGhpcy5jb3VudCAtIDE7XHJcbiAgICBpZih0aGlzLmNvdW50ID09IDApIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgIHJldHVybiBiYW5kZXJhOyBcclxuICAgIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUNoZWNrKGV2ZW50RGF0YSwgbWVuc2FqZSwgaW5kZXgpe1xyXG4gICAgaWYodGhpcy5jb3VudENoZWNrKGV2ZW50RGF0YS5jaGVja2VkKSkgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gdHJ1ZTtcclxuICAgIGVsc2UgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gZmFsc2U7XHJcbiAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy5QaWxhTWVuc2FqZXMucHVzaChtZW5zYWplKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuUGlsYU1lbnNhamVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImhpZGVCdXR0b25EZWxldGU6IFwiICsgdGhpcy5oaWRlQnV0dG9uRGVsZXRlKTtcclxufSBcclxuICBwdWJsaWMgbWVuc2FqZXMgPSBcclxuICBbXHJcbiAgICB7XHJcbiAgICAgICAgbWVzc2FnZUlkOlwiMDAxXCIsXHJcbiAgICAgICAgZnJvbTpcIkp1YW4gSm9zZSBIZXJuYW5kZXpcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlNhbHVkb3MgY29yZGlhbGVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbWVzc2FnZUlkOlwiMDAyXCIsXHJcbiAgICAgICAgZnJvbTpcIlBlZHJvIEFsYmVydG8gR2FyY2lhXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJTYWx1ZG9zIGNvcmRpYWxlc3gyXCJcclxuICAgIH1cclxuICBdXHJcbn0iXX0=