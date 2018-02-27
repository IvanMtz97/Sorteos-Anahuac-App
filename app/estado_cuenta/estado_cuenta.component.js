"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var dialogs = require("ui/dialogs");
var statusBar = require("nativescript-status-bar");
var http_get_services_1 = require("../services/http-get/http-get.services");
var session_services_1 = require("../services/session/session.services");
var EstadoCuentaComponent = /** @class */ (function () {
    function EstadoCuentaComponent(myGetService, session) {
        this.myGetService = myGetService;
        this.session = session;
        this.idColaborador = "";
        this.infoColaborador = {};
        this.statusBarState = true;
        this.idColaborador = this.session.getIdColaborador();
        console.log("IDCOLABORADOR ---> ", this.idColaborador);
    }
    //GET SORTEO -------->
    EstadoCuentaComponent.prototype.datosColaborador = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getDataAuthorization('api/Colaborador/' + this.idColaborador)
            .subscribe(function (result) {
            console.log("DATOS COLABORADOR -----> ", result);
            _this.infoColaborador = JSON.parse(result.json());
        }, function (error) {
            //this.loader.display(false);
            _this.infoColaborador = JSON.parse(_this.session.getInformation());
            _this.mostrarMensaje('Error', 'Falló al tratar obtener los datos del colaborador');
        });
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    EstadoCuentaComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        statusBar.show();
        this.datosColaborador();
    };
    Object.defineProperty(EstadoCuentaComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    // public statusBarState: boolean=true;// statusBar.show();(swipe)="hideStatusBar()"
    // hideStatusBar()
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
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    EstadoCuentaComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    EstadoCuentaComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], EstadoCuentaComponent.prototype, "drawerComponent", void 0);
    EstadoCuentaComponent = __decorate([
        core_1.Component({
            selector: "Estado_Cuenta",
            moduleId: module.id,
            templateUrl: "./estado_cuenta.component.html",
            providers: [http_get_services_1.MyHttpGetService, session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService, session_services_1.SessionService])
    ], EstadoCuentaComponent);
    return EstadoCuentaComponent;
}());
exports.EstadoCuentaComponent = EstadoCuentaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWRvX2N1ZW50YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3RhZG9fY3VlbnRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLG9DQUFzQztBQUV0QyxtREFBc0Q7QUFDdEQsNEVBQTBFO0FBQzFFLHlFQUFzRTtBQVF0RTtJQUlJLCtCQUFvQixZQUE4QixFQUFVLE9BQXVCO1FBQS9ELGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSDVFLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBOEI3QixtQkFBYyxHQUFVLElBQUksQ0FBQztRQTNCaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHNCQUFzQjtJQUNkLGdEQUFnQixHQUF4QjtRQUFBLGlCQVlDO1FBWEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxZQUFZO2FBQ1osb0JBQW9CLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBV0Q7O2tFQUU4RDtJQUM5RCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLHVEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxvRkFBb0Y7SUFDcEYsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsUUFBUTtJQUNSLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsUUFBUTtJQUNSLDRDQUE0QztJQUM1QyxRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsSUFBSTtJQUNKOzs7a0VBRzhEO0lBQzlELGlEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFTSw4Q0FBYyxHQUFyQixVQUF1QixNQUFNLEVBQUUsT0FBTztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0NvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2tFQUFDO0lBN0JwRCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLENBQUM7U0FDaEQsQ0FBQzt5Q0FLb0Msb0NBQWdCLEVBQW1CLGlDQUFjO09BSjFFLHFCQUFxQixDQTJFakM7SUFBRCw0QkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJFc3RhZG9fQ3VlbnRhXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9lc3RhZG9fY3VlbnRhLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzdGFkb0N1ZW50YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaWRDb2xhYm9yYWRvcjogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBpbmZvQ29sYWJvcmFkb3I6IG9iamVjdCA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pZENvbGFib3JhZG9yID0gdGhpcy5zZXNzaW9uLmdldElkQ29sYWJvcmFkb3IoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklEQ09MQUJPUkFET1IgLS0tPiBcIiwgdGhpcy5pZENvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dFVCBTT1JURU8gLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIGRhdG9zQ29sYWJvcmFkb3IoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXREYXRhQXV0aG9yaXphdGlvbignYXBpL0NvbGFib3JhZG9yLycgKyB0aGlzLmlkQ29sYWJvcmFkb3IpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRPUyBDT0xBQk9SQURPUiAtLS0tLT4gXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Db2xhYm9yYWRvciA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24oKSk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0NvbGFib3JhZG9yID0gSlNPTi5wYXJzZSh0aGlzLnNlc3Npb24uZ2V0SW5mb3JtYXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIG9idGVuZXIgbG9zIGRhdG9zIGRlbCBjb2xhYm9yYWRvcicpOyAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9FTkQgR0VUIC0tLS0tLS0tLT5cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cclxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcbiAgICBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTtcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICBzdGF0dXNCYXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuZGF0b3NDb2xhYm9yYWRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTsvLyBzdGF0dXNCYXIuc2hvdygpOyhzd2lwZSk9XCJoaWRlU3RhdHVzQmFyKClcIlxyXG4gICAgLy8gaGlkZVN0YXR1c0JhcigpXHJcbiAgICAvLyB7ICAgICAgICBcclxuICAgIC8vICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBzdGF0dXNCYXIuaGlkZSgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2UgaWYodGhpcy5zdGF0dXNCYXJTdGF0ZSA9PSBmYWxzZSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHN0YXR1c0Jhci5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhdHVzQmFyU3RhdGUgPSB0cnVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXHJcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=