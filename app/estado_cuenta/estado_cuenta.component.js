"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var dialogs = require("ui/dialogs");
var http_get_services_1 = require("../services/http-get/http-get.services");
var session_services_1 = require("../services/session/session.services");
var EstadoCuentaComponent = /** @class */ (function () {
    function EstadoCuentaComponent(myGetService, session) {
        this.myGetService = myGetService;
        this.session = session;
        this.infoColaborador = {};
        this.cantBoletosAsignados = 0;
        this.statusBarState = true;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    EstadoCuentaComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.infoColaborador = JSON.parse(this.session.getInformation());
        var infoColaboradorAux = JSON.parse(this.session.getInformation());
        console.log("----------\n" + JSON.stringify(this.infoColaborador) + "\n----------");
        var contadorAux = infoColaboradorAux.talonarios.length;
        for (var i = 0; i < contadorAux; i++) {
            this.cantBoletosAsignados = this.cantBoletosAsignados + infoColaboradorAux.talonarios[i].Boletos.asignados.length;
            console.log("cantBoletosAsignados -> " + this.cantBoletosAsignados);
        }
    };
    Object.defineProperty(EstadoCuentaComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWRvX2N1ZW50YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3RhZG9fY3VlbnRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLG9DQUFzQztBQUd0Qyw0RUFBMEU7QUFDMUUseUVBQXNFO0FBUXRFO0lBS0ksK0JBQW9CLFlBQThCLEVBQVUsT0FBdUI7UUFBL0QsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFKNUUsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0IseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBU2pDLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBTmhDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakUsQ0FBQztJQU9ELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztRQUVwRixJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3ZELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUMvQixDQUFDO1lBQ0csSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDbEgsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4RSxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLHVEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxpREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRU0sOENBQWMsR0FBckIsVUFBdUIsTUFBTSxFQUFFLE9BQU87UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxDb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjtrRUFBQztJQVRwRCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLENBQUM7U0FDaEQsQ0FBQzt5Q0FNb0Msb0NBQWdCLEVBQW1CLGlDQUFjO09BTDFFLHFCQUFxQixDQTRDakM7SUFBRCw0QkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJFc3RhZG9fQ3VlbnRhXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9lc3RhZG9fY3VlbnRhLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBHZXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzdGFkb0N1ZW50YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaW5mb0NvbGFib3JhZG9yOiBvYmplY3QgPSB7fTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcbiAgICBwdWJsaWMgY2FudEJvbGV0b3NBc2lnbmFkb3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlO1xyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbmZvQ29sYWJvcmFkb3IgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgICAgICB2YXIgaW5mb0NvbGFib3JhZG9yQXV4ID0gSlNPTi5wYXJzZSh0aGlzLnNlc3Npb24uZ2V0SW5mb3JtYXRpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLVxcblwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5pbmZvQ29sYWJvcmFkb3IpICsgXCJcXG4tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjb250YWRvckF1eCA9IGluZm9Db2xhYm9yYWRvckF1eC50YWxvbmFyaW9zLmxlbmd0aDtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxjb250YWRvckF1eDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW50Qm9sZXRvc0FzaWduYWRvcyA9IHRoaXMuY2FudEJvbGV0b3NBc2lnbmFkb3MgKyBpbmZvQ29sYWJvcmFkb3JBdXgudGFsb25hcmlvc1tpXS5Cb2xldG9zLmFzaWduYWRvcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudEJvbGV0b3NBc2lnbmFkb3MgLT4gXCIgKyB0aGlzLmNhbnRCb2xldG9zQXNpZ25hZG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6dGl0dWxvLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxufVxyXG4iXX0=