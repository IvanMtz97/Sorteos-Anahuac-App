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
        // public statusBarState: boolean=true;// statusBar.show();(swipe)="hideStatusBar()"
        // {        
        //     if(this.statusBarState == true)
        //     {
        //         statusBar.hide();
        //         this.statusBarState = false;
        //     }
        //     else if(this.statusBarState == false)
        //     {
        //         statusBar.show();
        //         this.statusBarState = true;
        //     }
        // } 
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
        console.log("NOTIFICACIONES");
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    NotificacionesComponent.prototype.eliminarSeleccion = function () {
        console.log("eliminarSeleccion()");
    };
    NotificacionesComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    NotificacionesComponent.prototype.countCheck = function (band) {
        var bandera = true;
        this.count = (band) ? this.count + 1 : this.count - 1;
        if (this.count == 0)
            bandera = false;
        console.log("COUNT --->", this.count);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYseUVBQXNFO0FBT3RFO0lBU0UsaUNBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTHBDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQTBDekMsb0ZBQW9GO1FBQ3BGLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsUUFBUTtRQUNSLDRCQUE0QjtRQUM1Qix1Q0FBdUM7UUFDdkMsUUFBUTtRQUNSLDRDQUE0QztRQUM1QyxRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QyxRQUFRO1FBQ1IsS0FBSztRQUNFLGFBQVEsR0FDZjtZQUNFO2dCQUNJLFNBQVMsRUFBQyxLQUFLO2dCQUNmLElBQUksRUFBQyxxQkFBcUI7Z0JBQzFCLE9BQU8sRUFBRSxtQkFBbUI7YUFDL0I7WUFDRDtnQkFDSSxTQUFTLEVBQUMsS0FBSztnQkFDZixJQUFJLEVBQUMsc0JBQXNCO2dCQUMzQixPQUFPLEVBQUUscUJBQXFCO2FBQ2pDO1NBQ0YsQ0FBQTtRQTlEQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELG1EQUFpQixHQUFqQjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLDRDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNmLENBQUM7SUFFSSw2Q0FBVyxHQUFsQixVQUFtQixTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDMUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3BFLElBQUk7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBN0NzQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO29FQUFDO0lBRmxELHVCQUF1QjtRQUxuQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztTQUMvQyxDQUFDO3lDQVU2QixpQ0FBYztPQVRoQyx1QkFBdUIsQ0EwRW5DO0lBQUQsOEJBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3RpZmljYWNpb25lcycsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB7ICBcclxuXHJcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gIHB1YmxpYyBoaWRlQnV0dG9uRGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBQaWxhTWVuc2FqZXM6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpXHJcbiAge1xyXG4gICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTk9USUZJQ0FDSU9ORVNcIik7XHJcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBlbGltaW5hclNlbGVjY2lvbigpXHJcbiAge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsaW1pbmFyU2VsZWNjaW9uKClcIik7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkgXHJcbiAge1xyXG4gICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3VudCA9IChiYW5kKSA/IHRoaXMuY291bnQgKyAxIDogdGhpcy5jb3VudCAtIDE7XHJcbiAgICBpZih0aGlzLmNvdW50ID09IDApIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ09VTlQgLS0tPlwiLCB0aGlzLmNvdW50KTtcclxuICAgIHJldHVybiBiYW5kZXJhOyBcclxuICAgIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUNoZWNrKGV2ZW50RGF0YSwgbWVuc2FqZSwgaW5kZXgpe1xyXG4gICAgaWYodGhpcy5jb3VudENoZWNrKGV2ZW50RGF0YS5jaGVja2VkKSkgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gdHJ1ZTtcclxuICAgIGVsc2UgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gZmFsc2U7XHJcbiAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy5QaWxhTWVuc2FqZXMucHVzaChtZW5zYWplKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuUGlsYU1lbnNhamVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImhpZGVCdXR0b25EZWxldGU6IFwiICsgdGhpcy5oaWRlQnV0dG9uRGVsZXRlKTtcclxufVxyXG4gIC8vIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOy8vIHN0YXR1c0Jhci5zaG93KCk7KHN3aXBlKT1cImhpZGVTdGF0dXNCYXIoKVwiXHJcbiAgLy8geyAgICAgICAgXHJcbiAgLy8gICAgIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gdHJ1ZSlcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgICAgc3RhdHVzQmFyLmhpZGUoKTtcclxuICAvLyAgICAgICAgIHRoaXMuc3RhdHVzQmFyU3RhdGUgPSBmYWxzZTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBlbHNlIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gZmFsc2UpXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICAgIHN0YXR1c0Jhci5zaG93KCk7XHJcbiAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gdHJ1ZTtcclxuICAvLyAgICAgfVxyXG4gIC8vIH0gXHJcbiAgcHVibGljIG1lbnNhamVzID0gXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICAgIG1lc3NhZ2VJZDpcIjAwMVwiLFxyXG4gICAgICAgIGZyb206XCJKdWFuIEpvc2UgSGVybmFuZGV6XCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJTYWx1ZG9zIGNvcmRpYWxlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1lc3NhZ2VJZDpcIjAwMlwiLFxyXG4gICAgICAgIGZyb206XCJQZWRybyBBbGJlcnRvIEdhcmNpYVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiU2FsdWRvcyBjb3JkaWFsZXN4MlwiXHJcbiAgICB9XHJcbiAgXVxyXG59Il19