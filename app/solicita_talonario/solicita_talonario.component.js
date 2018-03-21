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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYsK0VBQTZFO0FBQzdFLHlFQUFzRTtBQUN0RSxtRkFBaUY7QUFVakY7SUFZRSxvQ0FBb0IsYUFBZ0MsRUFBVSxPQUF1QixFQUFVLE1BQXdCO1FBQW5HLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFYdkgsVUFBSyxHQUFXLDZCQUE2QixDQUFDO1FBQzlDLFVBQUssR0FBVyx5REFBeUQsQ0FBQztRQUMxRSxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBQzVCLFVBQUssR0FBVyxxQkFBcUIsQ0FBQztRQUN0QyxVQUFLLEdBQVcsMEJBQTBCLENBQUM7UUFDM0MsVUFBSyxHQUFXLGlHQUFpRyxDQUFDO1FBQ2xILFlBQU8sR0FBWSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUszQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzdELGFBQWE7UUFDYixJQUFJO1FBQ0osMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsOENBQThDO1FBQzlDLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsVUFBVTtRQUNWLHdCQUF3QjtRQUN4Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFDaEMsOEJBQThCO1FBQzlCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsUUFBUTtRQUNSLFFBQVE7UUFFUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztZQUNDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDN0IsQ0FBQztnQkFDRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUNyRCxDQUFDO29CQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUMzQyxDQUFDO29CQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBS00sNkRBQXdCLEdBQS9CO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7WUFDM0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHNEQUFpQixHQUF4QjtRQUVFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLG1EQUFjLEdBQXJCLFVBQXVCLE1BQU0sRUFBRSxPQUFPO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQ3NCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7dUVBQUM7SUF6RGxELDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDO3lDQWFtQyxzQ0FBaUIsRUFBbUIsaUNBQWMsRUFBa0Isb0NBQWdCO09BWjVHLDBCQUEwQixDQTZHdEM7SUFBRCxpQ0FBQztDQUFBLEFBN0dELElBNkdDO0FBN0dZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG4gIFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29saWNpdGF0YWxvbmFyaW8nLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0YVRhbG9uYXJpb0NvbXBvbmVudCB7XHJcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcclxuICB0ZXh0Mjogc3RyaW5nID0gJ0hheiBjbGljIGVuIGVsIGJvdMOzbiBwYXJhIHNvbGljaXRhciB1biBudWV2byB0YWxvbmFyaW8uJztcclxuICB0ZXh0Mzogc3RyaW5nID0gJ8KhR1JBQ0lBUyEnO1xyXG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XHJcbiAgdGV4dDU6IHN0cmluZyA9ICfCoUFncmFkZWNlbW9zIHR1IGludGVyw6lzISc7XHJcbiAgdGV4dDY6IHN0cmluZyA9ICdQb2Ryw6FzIHNvbGljaXRhciBvdHJvIHRhbG9uYXJpbyBoYXN0YSB2ZW5kZXIgbGEgdG90YWxpZGFkIGRlIHR1cyBib2xldG9zIGFzaWduYWRvcyBhY3R1YWxtZW50ZS4nO1xyXG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiOyAgXHJcbiAgY29udGFkb3I6IG51bWJlciA9IDA7XHJcbiAgdmFsaWRhUGFnaW5hOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgXHJcbiAgeyBcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnNlc3Npb24uZ2V0SW5mb3JtYXRpb24oKSk7ICAgICAgICBcclxuICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuICAgIC8vIHZhciBkYXRhID1cclxuICAgIC8vIHtcclxuICAgIC8vICAgXCJtb250b19kZXVkb3JcIjogMzIwMCxcclxuICAgIC8vICAgXCJtb250b19hYm9uYWRvXCI6IDAsXHJcbiAgICAvLyAgIFwibW9udG9fdG90YWxcIjogMzIwMCxcclxuICAgIC8vICAgXCJleHBpcmFcIjogXCIyMDE4LTAzLTAyVDAwOjA5OjI5LjcyNDQ2MTZaXCIsXHJcbiAgICAvLyAgIFwiY2xhdmVcIjogMSxcclxuICAgIC8vICAgXCJ0YWxvbmFyaW9zXCI6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICBcImNsYXZlXCI6IDgsXHJcbiAgICAvLyAgICAgICAgICAgXCJib2xldG9zXCI6IG51bGwsXHJcbiAgICAvLyAgICAgICAgICAgXCJCb2xldG9zXCI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgXCJwZW5kaWVudGVzXCI6IFtdLFxyXG4gICAgLy8gICAgICAgICAgICAgICBcImFzaWduYWRvc1wiOltdLFxyXG4gICAgLy8gICAgICAgICAgICAgICBcInZlbmRpZG9zXCI6W11cclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgXVxyXG4gICAgLy8gfSAgICBcclxuICAgIFxyXG4gICAgaWYoZGF0YS50YWxvbmFyaW9zLmxlbmd0aCA+IDApICAgIFxyXG4gICAge1xyXG4gICAgICBmb3IobGV0IGkgaW4gZGF0YS50YWxvbmFyaW9zKSBcclxuICAgICAge1xyXG4gICAgICAgICAgaWYoZGF0YS50YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yID0gdGhpcy5jb250YWRvciArIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSBkYXRhLnRhbG9uYXJpb3MubGVuZ3RoKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYVBhZ2luYSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsaWRhUGFnaW5hID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgcHVibGljIG1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpIHtcclxuICAgIHRoaXMubXlQb3N0U2VydmljZVxyXG4gICAgICAgIC5wb3N0RGF0YSh7fSwgJ2FwaS9UYWxvbmFyaW8vU29saWNpdGFyJylcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7ICAgXHJcbiAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKFwiU29saWNpdHVkXCIsIFwiTGEgc29saWNpdHVkIGhhIHNpZG8gZW52aWFkYS4gR3JhY2lhcy5cIik7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoXCJTb2xpY2l0dWRcIiwgXCJMYSBzb2xpY2l0dWQgbm8gaGEgcG9kaWRvIHNlciBlbnZpYWRhLlwiKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgICAgIFxyXG4gICAgdGhpcy5tYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKTsgICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAgeyAgICBcclxuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgdGl0bGU6dGl0dWxvLFxyXG4gICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgIH0pLnRoZW4oKCkgPT4geyAgICAgICBcclxuICAgIH0pO1xyXG59XHJcbi8vICAgaWYodGhpcy50YWxvbmFyaW9zLmxlbmd0aCA+IDApIHtcclxuLy8gICAgIC8vQk9MRVRPUyBQRU5ESUVOVEVTXHJcbi8vICAgICBpZih0aGlzLnRhbG9uYXJpb3NbaV0ucGVuZGllbnRlcy5sZW5ndGggPT0gMClcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9fZ3Jpc1wiO1xyXG4vLyAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSBmYWxzZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2VcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9cIjtcclxuLy8gICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gdHJ1ZTtcclxuLy8gICAgICAgICB0aGlzLmNhbnRCb2xQZW5kaWVudGVzW2ldID0gdGhpcy50YWxvbmFyaW9zW2ldLnBlbmRpZW50ZXMubGVuZ3RoO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRU5UUk8gQVFVSVwiKTtcclxuLy8gICAgICAgICB0aGlzLnNlc3Npb24uc2V0VGFsb25hcmlvcyh0cnVlKTtcclxuLy8gICAgIH1cclxuXHJcbn0iXX0=