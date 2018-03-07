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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYsK0VBQTZFO0FBQzdFLHlFQUFzRTtBQVV0RTtJQVVFLG9DQUFvQixhQUFnQyxFQUFVLE9BQXVCO1FBQWpFLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBVHJGLFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcsMERBQTBELENBQUM7UUFDM0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7UUFDdEMsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBSzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0QsYUFBYTtRQUNiLElBQUk7UUFDSiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qiw4Q0FBOEM7UUFDOUMsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1Ysd0JBQXdCO1FBQ3hCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsa0NBQWtDO1FBQ2xDLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLFVBQVU7UUFDVixRQUFRO1FBQ1IsUUFBUTtRQUVSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUM5QixDQUFDO1lBQ0MsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUM3QixDQUFDO2dCQUNHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQ3JELENBQUM7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQzNDLENBQUM7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFLTSw2REFBd0IsR0FBL0I7UUFDRSxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLHNEQUFpQixHQUF4QjtRQUVFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxzREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sbURBQWMsR0FBckIsVUFBdUIsTUFBTSxFQUFFLE9BQU87UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhDc0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQW5EbEQsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7eUNBV21DLHNDQUFpQixFQUFtQixpQ0FBYztPQVYxRSwwQkFBMEIsQ0FvR3RDO0lBQUQsaUNBQUM7Q0FBQSxBQXBHRCxJQW9HQztBQXBHWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuICBcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvbGljaXRhdGFsb25hcmlvJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW015SHR0cFBvc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29saWNpdGFUYWxvbmFyaW9Db21wb25lbnQge1xyXG4gIHRleHQxOiBzdHJpbmcgPSAnwqFBcHJlY2lhbW9zIG11Y2hvIHR1IGFwb3lvISc7XHJcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XHJcbiAgdGV4dDM6IHN0cmluZyA9ICfCoUdSQUNJQVMhJztcclxuICB0ZXh0NDogc3RyaW5nID0gJ1NPTElDSVRBUiBUQUxPTkFSSU8nO1xyXG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiOyAgXHJcbiAgY29udGFkb3I6IG51bWJlciA9IDA7XHJcbiAgdmFsaWRhUGFnaW5hOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSBcclxuICB7IFxyXG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTsgICAgXHJcbiAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICAvLyB2YXIgZGF0YSA9XHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibW9udG9fZGV1ZG9yXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwibW9udG9fYWJvbmFkb1wiOiAwLFxyXG4gICAgLy8gICBcIm1vbnRvX3RvdGFsXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwiZXhwaXJhXCI6IFwiMjAxOC0wMy0wMlQwMDowOToyOS43MjQ0NjE2WlwiLFxyXG4gICAgLy8gICBcImNsYXZlXCI6IDEsXHJcbiAgICAvLyAgIFwidGFsb25hcmlvc1wiOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgXCJjbGF2ZVwiOiA4LFxyXG4gICAgLy8gICAgICAgICAgIFwiYm9sZXRvc1wiOiBudWxsLFxyXG4gICAgLy8gICAgICAgICAgIFwiQm9sZXRvc1wiOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIFwicGVuZGllbnRlc1wiOiBbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJhc2lnbmFkb3NcIjpbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJ2ZW5kaWRvc1wiOltdXHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vIH0gICAgXHJcblxyXG4gICAgaWYoZGF0YS50YWxvbmFyaW9zLmxlbmd0aCA+IDApICAgIFxyXG4gICAge1xyXG4gICAgICBmb3IobGV0IGkgaW4gZGF0YS50YWxvbmFyaW9zKSBcclxuICAgICAge1xyXG4gICAgICAgICAgaWYoZGF0YS50YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yID0gdGhpcy5jb250YWRvciArIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSBkYXRhLnRhbG9uYXJpb3MubGVuZ3RoKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYVBhZ2luYSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgcHVibGljIG1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpIHtcclxuICAgIHRoaXMubXlQb3N0U2VydmljZVxyXG4gICAgICAgIC5wb3N0RGF0YSh7fSwgJ2FwaS9UYWxvbmFyaW8vU29saWNpdGFyJylcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgICAgIFxyXG4gICAgdGhpcy5tYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKTtcclxuICAgIHRoaXMubW9zdHJhck1lbnNhamUoXCJTb2xpY2l0dWRcIiwgXCJMYSBzb2xpY2l0dWQgaGEgc2lkbyBlbnZpYWRhLiBHcmFjaWFzLlwiKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KClcclxuICB7ICAgIFxyXG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgfSkudGhlbigoKSA9PiB7ICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuLy8gICBpZih0aGlzLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgLy9CT0xFVE9TIFBFTkRJRU5URVNcclxuLy8gICAgIGlmKHRoaXMudGFsb25hcmlvc1tpXS5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb19ncmlzXCI7XHJcbi8vICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xyXG4vLyAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4vLyAgICAgICAgIHRoaXMuY2FudEJvbFBlbmRpZW50ZXNbaV0gPSB0aGlzLnRhbG9uYXJpb3NbaV0ucGVuZGllbnRlcy5sZW5ndGg7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSTyBBUVVJXCIpO1xyXG4vLyAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4vLyAgICAgfVxyXG5cclxufSJdfQ==
