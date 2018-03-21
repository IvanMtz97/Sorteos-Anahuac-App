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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhZG9yZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcHJhZG9yZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELGtFQUFnRjtBQUVoRix5RUFBc0U7QUFDdEUsNEVBQTBFO0FBQzFFLHVEQUE2RDtBQUM3RCxvQ0FBc0M7QUFVdEM7SUFPSSw4QkFBb0IsT0FBdUIsRUFBVSxHQUFxQixFQUFVLE9BQXVCO1FBQXZGLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUgzRyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR2IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFTLFNBQVM7WUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsTUFBTTtnQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDdkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUs7WUFBZCxpQkFpQm5CO1lBaEJHLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEdBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQ1YsS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLHFDQUFxQzt3QkFDOUMsWUFBWSxFQUFFLElBQUk7cUJBQ3JCLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBMURvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2lFQUFDO0lBRHBELG9CQUFvQjtRQVJoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUUsd0JBQWMsRUFBRSxvQ0FBZ0IsQ0FBRTtTQUNsRCxDQUFDO3lDQVMrQixpQ0FBYyxFQUFlLG9DQUFnQixFQUFtQix3QkFBYztPQVBsRyxvQkFBb0IsQ0E0RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ29tcHJhZG9yZXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXByYWRvcmVzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY29tcHJhZG9yZXMuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbIExvYWRpbmdTZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wcmFkb3Jlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuICAgIENvbXByYWRvcmVzOiBhbnkgPSBbXTtcclxuICAgIENsYXZlczogYW55ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSBBUEk6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkluaXQgQ09NUFJBRE9SRVNcIik7XHJcbiAgICAgICAgdmFyIERhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgICAgICBEYXRhLnRhbG9uYXJpb3MuZm9yRWFjaChmdW5jdGlvbih0YWxvbmFyaW8pe1xyXG4gICAgICAgICAgICB0YWxvbmFyaW8uQm9sZXRvcy5hc2lnbmFkb3MuZm9yRWFjaChmdW5jdGlvbihib2xldG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcHJhZG9yZXMucHVzaCh7IENvbXByYWRvcjogYm9sZXRvLmNvbXByYWRvciwgQ2xhdmU6IGJvbGV0by5jbGF2ZSB9KTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmRpcih0aGlzLkNvbXByYWRvcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soZXZlbnREYXRhLCBjbGF2ZSwgY29ycmVvKXtcclxuICAgICAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvcnJlbyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsYXZlKTtcclxuICAgICAgICAgICAgdGhpcy5DbGF2ZXMucHVzaChjbGF2ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuQ2xhdmVzLmluZGV4T2YoY2xhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLkNsYXZlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDb21wYXJ0aXIoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgdGhpcy5DbGF2ZXMuZm9yRWFjaChmdW5jdGlvbihjbGF2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuQVBJLmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0JvbGV0by9Ob3RpZmljYXI/Y2xhdmU9XCIrIGNsYXZlKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAwIENPTVBBUlRJUlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IHRoaXMuQ2xhdmVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlIGhhbiBub3RpZmljYWRvIGEgbG9zIGNvbXByYWRvcmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNTAwIENPTVBBUlRJUlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=