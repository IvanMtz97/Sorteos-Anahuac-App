"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var http_post_services_1 = require("../services/http-post/http-post.services");
var session_services_1 = require("../services/session/session.services");
var SolicitaTalonarioComponent = /** @class */ (function () {
    function SolicitaTalonarioComponent(myPostService, session) {
        this.myPostService = myPostService;
        this.session = session;
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
    }
    SolicitaTalonarioComponent.prototype.makePostSolitarTalonario = function () {
        this.myPostService
            .postData({}, 'api/Talonario/Solicitar')
            .subscribe(function (res) {
        });
    };
    SolicitaTalonarioComponent.prototype.solicitaTalonario = function () {
        this.makePostSolitarTalonario();
        this.mostrarMensaje("Solicitud", "La solicitud ha sido enviada. Gracias.");
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
        __metadata("design:paramtypes", [http_post_services_1.MyHttpPostService, session_services_1.SessionService])
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYsK0VBQTZFO0FBQzdFLHlFQUFzRTtBQVV0RTtJQVlFLG9DQUFvQixhQUFnQyxFQUFVLE9BQXVCO1FBQWpFLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBWHJGLFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcseURBQXlELENBQUM7UUFDMUUsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7UUFDdEMsVUFBSyxHQUFXLDBCQUEwQixDQUFDO1FBQzNDLFVBQUssR0FBVyxpR0FBaUcsQ0FBQztRQUNsSCxZQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFLM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxhQUFhO1FBQ2IsSUFBSTtRQUNKLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLDhDQUE4QztRQUM5QyxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5QixjQUFjO1FBQ2QsVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBRVIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQzlCLENBQUM7WUFDQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUM7Z0JBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FDckQsQ0FBQztvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDM0MsQ0FBQztvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUtNLDZEQUF3QixHQUEvQjtRQUNFLElBQUksQ0FBQyxhQUFhO2FBQ2IsUUFBUSxDQUFDLEVBQUUsRUFBRSx5QkFBeUIsQ0FBQzthQUN2QyxTQUFTLENBQUMsVUFBQSxHQUFHO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU0sc0RBQWlCLEdBQXhCO1FBRUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELHNEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSxtREFBYyxHQUFyQixVQUF1QixNQUFNLEVBQUUsT0FBTztRQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaENzQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBckRsRCwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7U0FDL0IsQ0FBQzt5Q0FhbUMsc0NBQWlCLEVBQW1CLGlDQUFjO09BWjFFLDBCQUEwQixDQXNHdEM7SUFBRCxpQ0FBQztDQUFBLEFBdEdELElBc0dDO0FBdEdZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG4gIFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29saWNpdGF0YWxvbmFyaW8nLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0YVRhbG9uYXJpb0NvbXBvbmVudCB7XHJcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcclxuICB0ZXh0Mjogc3RyaW5nID0gJ0hheiBjbGljIGVuIGVsIGJvdMOzbiBwYXJhIHNvbGljaXRhciB1biBudWV2byB0YWxvbmFyaW8uJztcclxuICB0ZXh0Mzogc3RyaW5nID0gJ8KhR1JBQ0lBUyEnO1xyXG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XHJcbiAgdGV4dDU6IHN0cmluZyA9ICfCoUFncmFkZWNlbW9zIHR1IGludGVyw6lzISc7XHJcbiAgdGV4dDY6IHN0cmluZyA9ICdQb2Ryw6FzIHNvbGljaXRhciBvdHJvIHRhbG9uYXJpbyBoYXN0YSB2ZW5kZXIgbGEgdG90YWxpZGFkIGRlIHR1cyBib2xldG9zIGFzaWduYWRvcyBhY3R1YWxtZW50ZS4nO1xyXG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiOyAgXHJcbiAgY29udGFkb3I6IG51bWJlciA9IDA7XHJcbiAgdmFsaWRhUGFnaW5hOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSBcclxuICB7IFxyXG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTsgICAgXHJcbiAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICAvLyB2YXIgZGF0YSA9XHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibW9udG9fZGV1ZG9yXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwibW9udG9fYWJvbmFkb1wiOiAwLFxyXG4gICAgLy8gICBcIm1vbnRvX3RvdGFsXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwiZXhwaXJhXCI6IFwiMjAxOC0wMy0wMlQwMDowOToyOS43MjQ0NjE2WlwiLFxyXG4gICAgLy8gICBcImNsYXZlXCI6IDEsXHJcbiAgICAvLyAgIFwidGFsb25hcmlvc1wiOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgXCJjbGF2ZVwiOiA4LFxyXG4gICAgLy8gICAgICAgICAgIFwiYm9sZXRvc1wiOiBudWxsLFxyXG4gICAgLy8gICAgICAgICAgIFwiQm9sZXRvc1wiOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIFwicGVuZGllbnRlc1wiOiBbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJhc2lnbmFkb3NcIjpbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJ2ZW5kaWRvc1wiOltdXHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vIH0gICAgXHJcblxyXG4gICAgaWYoZGF0YS50YWxvbmFyaW9zLmxlbmd0aCA+IDApICAgIFxyXG4gICAge1xyXG4gICAgICBmb3IobGV0IGkgaW4gZGF0YS50YWxvbmFyaW9zKSBcclxuICAgICAge1xyXG4gICAgICAgICAgaWYoZGF0YS50YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yID0gdGhpcy5jb250YWRvciArIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSBkYXRhLnRhbG9uYXJpb3MubGVuZ3RoKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYVBhZ2luYSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgcHVibGljIG1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpIHtcclxuICAgIHRoaXMubXlQb3N0U2VydmljZVxyXG4gICAgICAgIC5wb3N0RGF0YSh7fSwgJ2FwaS9UYWxvbmFyaW8vU29saWNpdGFyJylcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgICAgIFxyXG4gICAgdGhpcy5tYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKTtcclxuICAgIHRoaXMubW9zdHJhck1lbnNhamUoXCJTb2xpY2l0dWRcIiwgXCJMYSBzb2xpY2l0dWQgaGEgc2lkbyBlbnZpYWRhLiBHcmFjaWFzLlwiKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KClcclxuICB7ICAgIFxyXG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgfSkudGhlbigoKSA9PiB7ICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuLy8gICBpZih0aGlzLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgLy9CT0xFVE9TIFBFTkRJRU5URVNcclxuLy8gICAgIGlmKHRoaXMudGFsb25hcmlvc1tpXS5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb19ncmlzXCI7XHJcbi8vICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xyXG4vLyAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4vLyAgICAgICAgIHRoaXMuY2FudEJvbFBlbmRpZW50ZXNbaV0gPSB0aGlzLnRhbG9uYXJpb3NbaV0ucGVuZGllbnRlcy5sZW5ndGg7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSTyBBUVVJXCIpO1xyXG4vLyAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4vLyAgICAgfVxyXG5cclxufSJdfQ==