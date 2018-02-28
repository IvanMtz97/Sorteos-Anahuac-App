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
    EstadoCuentaComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.datosColaborador();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWRvX2N1ZW50YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3RhZG9fY3VlbnRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLG9DQUFzQztBQUd0Qyw0RUFBMEU7QUFDMUUseUVBQXNFO0FBUXRFO0lBSUksK0JBQW9CLFlBQThCLEVBQVUsT0FBdUI7UUFBL0QsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFINUUsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUE4QjdCLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBM0JoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsc0JBQXNCO0lBQ2QsZ0RBQWdCLEdBQXhCO1FBQUEsaUJBWUM7UUFYRyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFlBQVk7YUFDWixvQkFBb0IsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzdELFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDakUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsbURBQW1ELENBQUMsQ0FBQztRQUN0RixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFZRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQUksdURBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELGlEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFTSw4Q0FBYyxHQUFyQixVQUF1QixNQUFNLEVBQUUsT0FBTztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2tFQUFDO0lBN0JwRCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLENBQUM7U0FDaEQsQ0FBQzt5Q0FLb0Msb0NBQWdCLEVBQW1CLGlDQUFjO09BSjFFLHFCQUFxQixDQXNEakM7SUFBRCw0QkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRXN0YWRvX0N1ZW50YVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9lc3RhZG9fY3VlbnRhLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSwgU2Vzc2lvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEVzdGFkb0N1ZW50YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlkQ29sYWJvcmFkb3I6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGluZm9Db2xhYm9yYWRvcjogb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15R2V0U2VydmljZTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmlkQ29sYWJvcmFkb3IgPSB0aGlzLnNlc3Npb24uZ2V0SWRDb2xhYm9yYWRvcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklEQ09MQUJPUkFET1IgLS0tPiBcIiwgdGhpcy5pZENvbGFib3JhZG9yKTtcbiAgICB9XG5cbiAgICAvL0dFVCBTT1JURU8gLS0tLS0tLS0+XG4gICAgcHJpdmF0ZSBkYXRvc0NvbGFib3JhZG9yKCkge1xuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkodHJ1ZSk7XG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0RGF0YUF1dGhvcml6YXRpb24oJ2FwaS9Db2xhYm9yYWRvci8nICsgdGhpcy5pZENvbGFib3JhZG9yKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRPUyBDT0xBQk9SQURPUiAtLS0tLT4gXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvQ29sYWJvcmFkb3IgPSBKU09OLnBhcnNlKHJlc3VsdC5qc29uKCkpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Db2xhYm9yYWRvciA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0Vycm9yJywgJ0ZhbGzDsyBhbCB0cmF0YXIgb2J0ZW5lciBsb3MgZGF0b3MgZGVsIGNvbGFib3JhZG9yJyk7ICBcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlO1xuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZGF0b3NDb2xhYm9yYWRvcigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG4gICAgICBcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19