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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYseUVBQXNFO0FBT3RFO0lBU0UsaUNBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTHBDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQXVDbEMsYUFBUSxHQUNmO1lBQ0U7Z0JBQ0ksU0FBUyxFQUFDLEtBQUs7Z0JBQ2YsSUFBSSxFQUFDLHFCQUFxQjtnQkFDMUIsT0FBTyxFQUFFLG1CQUFtQjthQUMvQjtZQUNEO2dCQUNJLFNBQVMsRUFBQyxLQUFLO2dCQUNmLElBQUksRUFBQyxzQkFBc0I7Z0JBQzNCLE9BQU8sRUFBRSxxQkFBcUI7YUFDakM7U0FDRixDQUFBO1FBOUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxtREFBaUIsR0FBakI7SUFFQSxDQUFDO0lBRUQsbURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLDRDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsQ0FBQztJQUVJLDZDQUFXLEdBQWxCLFVBQW1CLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSztRQUMxQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDcEUsSUFBSTtZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExQ3NCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7b0VBQUM7SUFGbEQsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQy9DLENBQUM7eUNBVTZCLGlDQUFjO09BVGhDLHVCQUF1QixDQTBEbkM7SUFBRCw4QkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xuIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWZpY2FjaW9uZXMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IHsgIFxuXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gIHB1YmxpYyBoaWRlQnV0dG9uRGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIFBpbGFNZW5zYWplczogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSlcbiAge1xuICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KClcbiAgeyAgICBcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBlbGltaW5hclNlbGVjY2lvbigpXG4gIHsgICAgICBcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkgXG4gIHtcbiAgICB2YXIgYmFuZGVyYSA9IHRydWU7XG4gICAgdGhpcy5jb3VudCA9IChiYW5kKSA/IHRoaXMuY291bnQgKyAxIDogdGhpcy5jb3VudCAtIDE7XG4gICAgaWYodGhpcy5jb3VudCA9PSAwKSBiYW5kZXJhID0gZmFsc2U7XG4gICAgcmV0dXJuIGJhbmRlcmE7IFxuICAgIH1cblxuICBwdWJsaWMgdG9nZ2xlQ2hlY2soZXZlbnREYXRhLCBtZW5zYWplLCBpbmRleCl7XG4gICAgaWYodGhpcy5jb3VudENoZWNrKGV2ZW50RGF0YS5jaGVja2VkKSkgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gdHJ1ZTtcbiAgICBlbHNlIHRoaXMuaGlkZUJ1dHRvbkRlbGV0ZSA9IGZhbHNlO1xuICAgIGlmKGV2ZW50RGF0YS5jaGVja2VkKXtcbiAgICAgICAgdGhpcy5QaWxhTWVuc2FqZXMucHVzaChtZW5zYWplKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5QaWxhTWVuc2FqZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJoaWRlQnV0dG9uRGVsZXRlOiBcIiArIHRoaXMuaGlkZUJ1dHRvbkRlbGV0ZSk7XG59IFxuICBwdWJsaWMgbWVuc2FqZXMgPSBcbiAgW1xuICAgIHtcbiAgICAgICAgbWVzc2FnZUlkOlwiMDAxXCIsXG4gICAgICAgIGZyb206XCJKdWFuIEpvc2UgSGVybmFuZGV6XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2FsdWRvcyBjb3JkaWFsZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBtZXNzYWdlSWQ6XCIwMDJcIixcbiAgICAgICAgZnJvbTpcIlBlZHJvIEFsYmVydG8gR2FyY2lhXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2FsdWRvcyBjb3JkaWFsZXN4MlwiXG4gICAgfVxuICBdXG59Il19