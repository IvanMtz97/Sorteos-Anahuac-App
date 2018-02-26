"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var NotificacionesComponent = /** @class */ (function () {
    function NotificacionesComponent() {
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
        })
    ], NotificacionesComponent);
    return NotificacionesComponent;
}());
exports.NotificacionesComponent = NotificacionesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtFQUFnRjtBQUNoRiw2REFBOEY7QUFROUY7SUFMQTtRQVNTLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQW9DekMsb0ZBQW9GO1FBQ3BGLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsUUFBUTtRQUNSLDRCQUE0QjtRQUM1Qix1Q0FBdUM7UUFDdkMsUUFBUTtRQUNSLDRDQUE0QztRQUM1QyxRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QyxRQUFRO1FBQ1IsS0FBSztRQUNFLGFBQVEsR0FDZjtZQUNFO2dCQUNJLFNBQVMsRUFBQyxLQUFLO2dCQUNmLElBQUksRUFBQyxxQkFBcUI7Z0JBQzFCLE9BQU8sRUFBRSxtQkFBbUI7YUFDL0I7WUFDRDtnQkFDSSxTQUFTLEVBQUMsS0FBSztnQkFDZixJQUFJLEVBQUMsc0JBQXNCO2dCQUMzQixPQUFPLEVBQUUscUJBQXFCO2FBQ2pDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUE1REMsMENBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxtREFBaUIsR0FBakI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG1EQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSw0Q0FBVSxHQUFqQixVQUFrQixJQUFJO1FBRXBCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDZixDQUFDO0lBRUksNkNBQVcsR0FBbEIsVUFBbUIsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLO1FBQzFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNwRSxJQUFJO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQXZDc0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjtvRUFBQztJQUZsRCx1QkFBdUI7UUFMbkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQztPQUNXLHVCQUF1QixDQW9FbkM7SUFBRCw4QkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3RpZmljYWNpb25lcycsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB7ICBcclxuXHJcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gIHB1YmxpYyBoaWRlQnV0dG9uRGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBQaWxhTWVuc2FqZXM6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuXHJcbiAgbmdPbkluaXQoKVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTk9USUZJQ0FDSU9ORVNcIik7XHJcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBlbGltaW5hclNlbGVjY2lvbigpXHJcbiAge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsaW1pbmFyU2VsZWNjaW9uKClcIik7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkgXHJcbiAge1xyXG4gICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgdGhpcy5jb3VudCA9IChiYW5kKSA/IHRoaXMuY291bnQgKyAxIDogdGhpcy5jb3VudCAtIDE7XHJcbiAgICBpZih0aGlzLmNvdW50ID09IDApIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ09VTlQgLS0tPlwiLCB0aGlzLmNvdW50KTtcclxuICAgIHJldHVybiBiYW5kZXJhOyBcclxuICAgIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUNoZWNrKGV2ZW50RGF0YSwgbWVuc2FqZSwgaW5kZXgpe1xyXG4gICAgaWYodGhpcy5jb3VudENoZWNrKGV2ZW50RGF0YS5jaGVja2VkKSkgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gdHJ1ZTtcclxuICAgIGVsc2UgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gZmFsc2U7XHJcbiAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XHJcbiAgICAgICAgdGhpcy5QaWxhTWVuc2FqZXMucHVzaChtZW5zYWplKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuUGlsYU1lbnNhamVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImhpZGVCdXR0b25EZWxldGU6IFwiICsgdGhpcy5oaWRlQnV0dG9uRGVsZXRlKTtcclxufVxyXG4gIC8vIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOy8vIHN0YXR1c0Jhci5zaG93KCk7KHN3aXBlKT1cImhpZGVTdGF0dXNCYXIoKVwiXHJcbiAgLy8geyAgICAgICAgXHJcbiAgLy8gICAgIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gdHJ1ZSlcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgICAgc3RhdHVzQmFyLmhpZGUoKTtcclxuICAvLyAgICAgICAgIHRoaXMuc3RhdHVzQmFyU3RhdGUgPSBmYWxzZTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBlbHNlIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gZmFsc2UpXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICAgIHN0YXR1c0Jhci5zaG93KCk7XHJcbiAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gdHJ1ZTtcclxuICAvLyAgICAgfVxyXG4gIC8vIH0gXHJcbiAgcHVibGljIG1lbnNhamVzID0gXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICAgIG1lc3NhZ2VJZDpcIjAwMVwiLFxyXG4gICAgICAgIGZyb206XCJKdWFuIEpvc2UgSGVybmFuZGV6XCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJTYWx1ZG9zIGNvcmRpYWxlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1lc3NhZ2VJZDpcIjAwMlwiLFxyXG4gICAgICAgIGZyb206XCJQZWRybyBBbGJlcnRvIEdhcmNpYVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiU2FsdWRvcyBjb3JkaWFsZXN4MlwiXHJcbiAgICB9XHJcbiAgXVxyXG59Il19