"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var session_services_1 = require("../services/session/session.services");
var http_get_services_1 = require("../services/http-get/http-get.services");
var loading_1 = require("../services/loading/loading");
var dialogs = require("ui/dialogs");
var CompradoresComponent = /** @class */ (function () {
    function CompradoresComponent(session, API, loading) {
        this.session = session;
        this.API = API;
        this.loading = loading;
        this.Compradores = [];
        this.Claves = [];
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    CompradoresComponent.prototype.ngOnInit = function () {
        console.log("OnInit COMPRADORES");
        var Data = JSON.parse(this.session.getInformation());
        Data.talonarios.forEach(function (talonario) {
            talonario.Boletos.asignados.forEach(function (boleto) {
                this.Compradores.push({ Comprador: boleto.comprador, Clave: boleto.clave });
            }.bind(this));
        }.bind(this));
        console.dir(this.Compradores);
    };
    CompradoresComponent.prototype.toggleCheck = function (eventData, clave, correo) {
        if (eventData.checked) {
            console.log(correo);
            console.log(clave);
            this.Claves.push(clave);
        }
        else {
            var index = this.Claves.indexOf(clave);
            this.Claves.splice(index, 1);
        }
    };
    CompradoresComponent.prototype.Compartir = function () {
        this.loading.display(true);
        var i = 1;
        this.Claves.forEach(function (clave) {
            var _this = this;
            this.API.getDataAuthorization("api/Boleto/Notificar?clave=" + clave).subscribe(function (res) {
                console.log("200 COMPARTIR");
                console.log(res);
                i++;
                if (i == _this.Claves.length) {
                    _this.loading.display(false);
                    dialogs.alert({
                        title: "AVISO",
                        message: "Se han notificado a los compradores",
                        okButtonText: "Ok"
                    });
                }
            }, function (error) {
                console.log("500 COMPARTIR");
                console.log(error);
            });
        }.bind(this));
    };
    CompradoresComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], CompradoresComponent.prototype, "drawerComponent", void 0);
    CompradoresComponent = __decorate([
        core_1.Component({
            selector: "Compradores",
            moduleId: module.id,
            templateUrl: "./compradores.component.html",
            styleUrls: ["./compradores.css"],
            providers: [loading_1.LoadingService, http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, http_get_services_1.MyHttpGetService, loading_1.LoadingService])
    ], CompradoresComponent);
    return CompradoresComponent;
}());
exports.CompradoresComponent = CompradoresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhZG9yZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcHJhZG9yZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELGtFQUFnRjtBQUVoRix5RUFBc0U7QUFDdEUsNEVBQTBFO0FBQzFFLHVEQUE2RDtBQUM3RCxvQ0FBc0M7QUFVdEM7SUFPSSw4QkFBb0IsT0FBdUIsRUFBVSxHQUFxQixFQUFVLE9BQXVCO1FBQXZGLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUgzRyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR2IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFTLFNBQVM7WUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsTUFBTTtnQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDdkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUs7WUFBZCxpQkFpQm5CO1lBaEJHLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEdBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQ1YsS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLHFDQUFxQzt3QkFDOUMsWUFBWSxFQUFFLElBQUk7cUJBQ3JCLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBMURvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2lFQUFDO0lBRHBELG9CQUFvQjtRQVJoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUUsd0JBQWMsRUFBRSxvQ0FBZ0IsQ0FBRTtTQUNsRCxDQUFDO3lDQVMrQixpQ0FBYyxFQUFlLG9DQUFnQixFQUFtQix3QkFBYztPQVBsRyxvQkFBb0IsQ0E0RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ29tcHJhZG9yZXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcHJhZG9yZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY29tcHJhZG9yZXMuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogWyBMb2FkaW5nU2VydmljZSwgTXlIdHRwR2V0U2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcHJhZG9yZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XG4gICAgQ29tcHJhZG9yZXM6IGFueSA9IFtdO1xuICAgIENsYXZlczogYW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIEFQSTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSBsb2FkaW5nOiBMb2FkaW5nU2VydmljZSl7ICAgICAgICBcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25Jbml0IENPTVBSQURPUkVTXCIpO1xuICAgICAgICB2YXIgRGF0YSA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpO1xuICAgICAgICBEYXRhLnRhbG9uYXJpb3MuZm9yRWFjaChmdW5jdGlvbih0YWxvbmFyaW8pe1xuICAgICAgICAgICAgdGFsb25hcmlvLkJvbGV0b3MuYXNpZ25hZG9zLmZvckVhY2goZnVuY3Rpb24oYm9sZXRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db21wcmFkb3Jlcy5wdXNoKHsgQ29tcHJhZG9yOiBib2xldG8uY29tcHJhZG9yLCBDbGF2ZTogYm9sZXRvLmNsYXZlIH0pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBjb25zb2xlLmRpcih0aGlzLkNvbXByYWRvcmVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soZXZlbnREYXRhLCBjbGF2ZSwgY29ycmVvKXtcbiAgICAgICAgaWYoZXZlbnREYXRhLmNoZWNrZWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29ycmVvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsYXZlKTtcbiAgICAgICAgICAgIHRoaXMuQ2xhdmVzLnB1c2goY2xhdmUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuQ2xhdmVzLmluZGV4T2YoY2xhdmUpO1xuICAgICAgICAgICAgdGhpcy5DbGF2ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENvbXBhcnRpcigpe1xuICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheSh0cnVlKTtcbiAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICB0aGlzLkNsYXZlcy5mb3JFYWNoKGZ1bmN0aW9uKGNsYXZlKXtcbiAgICAgICAgICAgIHRoaXMuQVBJLmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0JvbGV0by9Ob3RpZmljYXI/Y2xhdmU9XCIrIGNsYXZlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMCBDT01QQVJUSVJcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYoaSA9PSB0aGlzLkNsYXZlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVZJU09cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2UgaGFuIG5vdGlmaWNhZG8gYSBsb3MgY29tcHJhZG9yZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjUwMCBDT01QQVJUSVJcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59Il19