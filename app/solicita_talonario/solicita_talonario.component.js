"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var http_post_services_1 = require("../services/http-post/http-post.services");
var session_services_1 = require("../services/session/session.services");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var SolicitaTalonarioComponent = /** @class */ (function () {
    function SolicitaTalonarioComponent(myPostService, session, router) {
        this.myPostService = myPostService;
        this.session = session;
        this.router = router;
        this.text1 = '¡Apreciamos mucho tu apoyo!';
        this.text2 = 'Haz clic en el botón para solicitar un nuevo talonario.';
        this.text3 = '¡GRACIAS!';
        this.text4 = 'SOLICITAR TALONARIO';
        this.text5 = '¡Agradecemos tu interés!';
        this.text6 = 'Podrás solicitar otro talonario hasta vender la totalidad de tus boletos asignados actualmente.';
        this.message = "";
        this.contador = 0;
        this.validaPagina = true;
        var data = JSON.parse(this.session.getInformation());
        this.imagenPublicitaria = this.session.getImagenPublicidad();
        // var data =
        // {
        //   "monto_deudor": 3200,
        //   "monto_abonado": 0,
        //   "monto_total": 3200,
        //   "expira": "2018-03-02T00:09:29.7244616Z",
        //   "clave": 1,
        //   "talonarios": [
        //       {
        //           "clave": 8,
        //           "boletos": null,
        //           "Boletos": {
        //               "pendientes": [],
        //               "asignados":[],
        //               "vendidos":[]
        //           }
        //       }
        //     ]
        // }    
        if (data.talonarios.length > 0) {
            for (var i in data.talonarios) {
                if (data.talonarios[i].Boletos.pendientes.length == 0) {
                    this.contador = this.contador + 1;
                }
                if (this.contador == data.talonarios.length) {
                    this.validaPagina = false;
                }
            }
        }
        else {
            this.validaPagina = false;
        }
    }
    SolicitaTalonarioComponent.prototype.makePostSolitarTalonario = function () {
        var _this = this;
        this.myPostService
            .postData({}, 'api/Talonario/Solicitar')
            .subscribe(function (res) {
            _this.mostrarMensaje("Solicitud", "La solicitud ha sido enviada. Gracias.");
            _this.router.navigate(["talonarios"], { clearHistory: true });
        }, function (error) {
            _this.mostrarMensaje("Solicitud", "La solicitud no ha podido ser enviada.");
        });
    };
    SolicitaTalonarioComponent.prototype.solicitaTalonario = function () {
        this.makePostSolitarTalonario();
    };
    SolicitaTalonarioComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    SolicitaTalonarioComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SolicitaTalonarioComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        }).then(function () {
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SolicitaTalonarioComponent.prototype, "drawerComponent", void 0);
    SolicitaTalonarioComponent = __decorate([
        core_1.Component({
            selector: 'solicitatalonario',
            moduleId: module.id,
            templateUrl: './solicita_talonario.component.html',
            providers: [http_post_services_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [http_post_services_1.MyHttpPostService, session_services_1.SessionService, router_extensions_1.RouterExtensions])
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYsK0VBQTZFO0FBQzdFLHlFQUFzRTtBQUN0RSxtRkFBaUY7QUFVakY7SUFZRSxvQ0FBb0IsYUFBZ0MsRUFBVSxPQUF1QixFQUFVLE1BQXdCO1FBQW5HLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFYdkgsVUFBSyxHQUFXLDZCQUE2QixDQUFDO1FBQzlDLFVBQUssR0FBVyx5REFBeUQsQ0FBQztRQUMxRSxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBQzVCLFVBQUssR0FBVyxxQkFBcUIsQ0FBQztRQUN0QyxVQUFLLEdBQVcsMEJBQTBCLENBQUM7UUFDM0MsVUFBSyxHQUFXLGlHQUFpRyxDQUFDO1FBQ2xILFlBQU8sR0FBWSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUszQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzdELGFBQWE7UUFDYixJQUFJO1FBQ0osMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsOENBQThDO1FBQzlDLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFDaEMsOEJBQThCO1FBQzlCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsUUFBUTtRQUNSLFFBQVE7UUFFUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztZQUNDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDN0IsQ0FBQztnQkFDRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUNyRCxDQUFDO29CQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUMzQyxDQUFDO29CQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBS00sNkRBQXdCLEdBQS9CO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7WUFDM0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHNEQUFpQixHQUF4QjtRQUVFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLG1EQUFjLEdBQXJCLFVBQXVCLE1BQU0sRUFBRSxPQUFPO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQ3NCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7dUVBQUM7SUF6RGxELDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDO3lDQWFtQyxzQ0FBaUIsRUFBbUIsaUNBQWMsRUFBa0Isb0NBQWdCO09BWjVHLDBCQUEwQixDQTZHdEM7SUFBRCxpQ0FBQztDQUFBLEFBN0dELElBNkdDO0FBN0dZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcG9zdC9odHRwLXBvc3Quc2VydmljZXNcIjtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcbiAgXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29saWNpdGF0YWxvbmFyaW8nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNvbGljaXRhVGFsb25hcmlvQ29tcG9uZW50IHtcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpYyBlbiBlbCBib3TDs24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XG4gIHRleHQzOiBzdHJpbmcgPSAnwqFHUkFDSUFTISc7XG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XG4gIHRleHQ1OiBzdHJpbmcgPSAnwqFBZ3JhZGVjZW1vcyB0dSBpbnRlcsOpcyEnO1xuICB0ZXh0Njogc3RyaW5nID0gJ1BvZHLDoXMgc29saWNpdGFyIG90cm8gdGFsb25hcmlvIGhhc3RhIHZlbmRlciBsYSB0b3RhbGlkYWQgZGUgdHVzIGJvbGV0b3MgYXNpZ25hZG9zIGFjdHVhbG1lbnRlLic7XG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiOyAgXG4gIGNvbnRhZG9yOiBudW1iZXIgPSAwO1xuICB2YWxpZGFQYWdpbmE6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlQb3N0U2VydmljZTogTXlIdHRwUG9zdFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSBcbiAgeyBcbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpOyAgICAgICAgXG4gICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xuICAgIC8vIHZhciBkYXRhID1cbiAgICAvLyB7XG4gICAgLy8gICBcIm1vbnRvX2RldWRvclwiOiAzMjAwLFxuICAgIC8vICAgXCJtb250b19hYm9uYWRvXCI6IDAsXG4gICAgLy8gICBcIm1vbnRvX3RvdGFsXCI6IDMyMDAsXG4gICAgLy8gICBcImV4cGlyYVwiOiBcIjIwMTgtMDMtMDJUMDA6MDk6MjkuNzI0NDYxNlpcIixcbiAgICAvLyAgIFwiY2xhdmVcIjogMSxcbiAgICAvLyAgIFwidGFsb25hcmlvc1wiOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgICBcImNsYXZlXCI6IDgsXG4gICAgLy8gICAgICAgICAgIFwiYm9sZXRvc1wiOiBudWxsLFxuICAgIC8vICAgICAgICAgICBcIkJvbGV0b3NcIjoge1xuICAgIC8vICAgICAgICAgICAgICAgXCJwZW5kaWVudGVzXCI6IFtdLFxuICAgIC8vICAgICAgICAgICAgICAgXCJhc2lnbmFkb3NcIjpbXSxcbiAgICAvLyAgICAgICAgICAgICAgIFwidmVuZGlkb3NcIjpbXVxuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICBdXG4gICAgLy8gfSAgICBcbiAgICBcbiAgICBpZihkYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkgICAgXG4gICAge1xuICAgICAgZm9yKGxldCBpIGluIGRhdGEudGFsb25hcmlvcykgXG4gICAgICB7XG4gICAgICAgICAgaWYoZGF0YS50YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFkb3IgPSB0aGlzLmNvbnRhZG9yICsgMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09IGRhdGEudGFsb25hcmlvcy5sZW5ndGgpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52YWxpZGFQYWdpbmEgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYVBhZ2luYSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICBwdWJsaWMgbWFrZVBvc3RTb2xpdGFyVGFsb25hcmlvKCkge1xuICAgIHRoaXMubXlQb3N0U2VydmljZVxuICAgICAgICAucG9zdERhdGEoe30sICdhcGkvVGFsb25hcmlvL1NvbGljaXRhcicpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHsgICBcbiAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKFwiU29saWNpdHVkXCIsIFwiTGEgc29saWNpdHVkIGhhIHNpZG8gZW52aWFkYS4gR3JhY2lhcy5cIik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoXCJTb2xpY2l0dWRcIiwgXCJMYSBzb2xpY2l0dWQgbm8gaGEgcG9kaWRvIHNlciBlbnZpYWRhLlwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNvbGljaXRhVGFsb25hcmlvKClcbiAgeyAgICAgXG4gICAgdGhpcy5tYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKTsgICAgXG4gIH1cblxuICBuZ09uSW5pdCgpXG4gIHsgICAgXG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xuICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICB0aXRsZTp0aXR1bG8sXG4gICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgfSkudGhlbigoKSA9PiB7ICAgICAgIFxuICAgIH0pO1xufVxuLy8gICBpZih0aGlzLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xuLy8gICAgIC8vQk9MRVRPUyBQRU5ESUVOVEVTXG4vLyAgICAgaWYodGhpcy50YWxvbmFyaW9zW2ldLnBlbmRpZW50ZXMubGVuZ3RoID09IDApXG4vLyAgICAge1xuLy8gICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9fZ3Jpc1wiO1xuLy8gICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gZmFsc2U7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Vcbi8vICAgICB7XG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xuLy8gICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gdHJ1ZTtcbi8vICAgICAgICAgdGhpcy5jYW50Qm9sUGVuZGllbnRlc1tpXSA9IHRoaXMudGFsb25hcmlvc1tpXS5wZW5kaWVudGVzLmxlbmd0aDtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSTyBBUVVJXCIpO1xuLy8gICAgICAgICB0aGlzLnNlc3Npb24uc2V0VGFsb25hcmlvcyh0cnVlKTtcbi8vICAgICB9XG5cbn0iXX0=