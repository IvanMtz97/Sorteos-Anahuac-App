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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELGtFQUFnRjtBQUNoRiw2REFBOEY7QUFROUY7SUFMQTtRQVNTLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQW9DekMsb0ZBQW9GO1FBQ3BGLFlBQVk7UUFDWixzQ0FBc0M7UUFDdEMsUUFBUTtRQUNSLDRCQUE0QjtRQUM1Qix1Q0FBdUM7UUFDdkMsUUFBUTtRQUNSLDRDQUE0QztRQUM1QyxRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLHNDQUFzQztRQUN0QyxRQUFRO1FBQ1IsS0FBSztRQUNFLGFBQVEsR0FDZjtZQUNFO2dCQUNJLFNBQVMsRUFBQyxLQUFLO2dCQUNmLElBQUksRUFBQyxxQkFBcUI7Z0JBQzFCLE9BQU8sRUFBRSxtQkFBbUI7YUFDL0I7WUFDRDtnQkFDSSxTQUFTLEVBQUMsS0FBSztnQkFDZixJQUFJLEVBQUMsc0JBQXNCO2dCQUMzQixPQUFPLEVBQUUscUJBQXFCO2FBQ2pDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUE1REMsMENBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxtREFBaUIsR0FBakI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG1EQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSw0Q0FBVSxHQUFqQixVQUFrQixJQUFJO1FBRXBCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDZixDQUFDO0lBRUksNkNBQVcsR0FBbEIsVUFBbUIsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLO1FBQzFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNwRSxJQUFJO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQXZDc0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjtvRUFBQztJQUZsRCx1QkFBdUI7UUFMbkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQztPQUNXLHVCQUF1QixDQW9FbkM7SUFBRCw4QkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWZpY2FjaW9uZXMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IHsgIFxuXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gIHB1YmxpYyBoaWRlQnV0dG9uRGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIFBpbGFNZW5zYWplczogQXJyYXk8b2JqZWN0PiA9IFtdO1xuXG4gIG5nT25Jbml0KClcbiAge1xuICAgIGNvbnNvbGUubG9nKFwiTk9USUZJQ0FDSU9ORVNcIik7XG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICB9XG5cbiAgZWxpbWluYXJTZWxlY2Npb24oKVxuICB7XG4gICAgICBjb25zb2xlLmxvZyhcImVsaW1pbmFyU2VsZWNjaW9uKClcIik7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb3VudENoZWNrKGJhbmQpIFxuICB7XG4gICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xuICAgIHRoaXMuY291bnQgPSAoYmFuZCkgPyB0aGlzLmNvdW50ICsgMSA6IHRoaXMuY291bnQgLSAxO1xuICAgIGlmKHRoaXMuY291bnQgPT0gMCkgYmFuZGVyYSA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKFwiQ09VTlQgLS0tPlwiLCB0aGlzLmNvdW50KTtcbiAgICByZXR1cm4gYmFuZGVyYTsgXG4gICAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDaGVjayhldmVudERhdGEsIG1lbnNhamUsIGluZGV4KXtcbiAgICBpZih0aGlzLmNvdW50Q2hlY2soZXZlbnREYXRhLmNoZWNrZWQpKSB0aGlzLmhpZGVCdXR0b25EZWxldGUgPSB0cnVlO1xuICAgIGVsc2UgdGhpcy5oaWRlQnV0dG9uRGVsZXRlID0gZmFsc2U7XG4gICAgaWYoZXZlbnREYXRhLmNoZWNrZWQpe1xuICAgICAgICB0aGlzLlBpbGFNZW5zYWplcy5wdXNoKG1lbnNhamUpO1xuICAgIH1lbHNle1xuICAgICAgICB0aGlzLlBpbGFNZW5zYWplcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImhpZGVCdXR0b25EZWxldGU6IFwiICsgdGhpcy5oaWRlQnV0dG9uRGVsZXRlKTtcbn1cbiAgLy8gcHVibGljIHN0YXR1c0JhclN0YXRlOiBib29sZWFuPXRydWU7Ly8gc3RhdHVzQmFyLnNob3coKTsoc3dpcGUpPVwiaGlkZVN0YXR1c0JhcigpXCJcbiAgLy8geyAgICAgICAgXG4gIC8vICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXG4gIC8vICAgICB7XG4gIC8vICAgICAgICAgc3RhdHVzQmFyLmhpZGUoKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gZmFsc2U7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbHNlIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gZmFsc2UpXG4gIC8vICAgICB7XG4gIC8vICAgICAgICAgc3RhdHVzQmFyLnNob3coKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gfSBcbiAgcHVibGljIG1lbnNhamVzID0gXG4gIFtcbiAgICB7XG4gICAgICAgIG1lc3NhZ2VJZDpcIjAwMVwiLFxuICAgICAgICBmcm9tOlwiSnVhbiBKb3NlIEhlcm5hbmRlelwiLFxuICAgICAgICBtZXNzYWdlOiBcIlNhbHVkb3MgY29yZGlhbGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWVzc2FnZUlkOlwiMDAyXCIsXG4gICAgICAgIGZyb206XCJQZWRybyBBbGJlcnRvIEdhcmNpYVwiLFxuICAgICAgICBtZXNzYWdlOiBcIlNhbHVkb3MgY29yZGlhbGVzeDJcIlxuICAgIH1cbiAgXVxufSJdfQ==