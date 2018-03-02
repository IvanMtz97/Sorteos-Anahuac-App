"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var http_post_services_1 = require("../services/http-post/http-post.services");
var session_services_1 = require("../services/session/session.services");
var SolicitaTalonarioComponent = /** @class */ (function () {
    function SolicitaTalonarioComponent(myPostService, session) {
        this.myPostService = myPostService;
        this.session = session;
        this.text1 = '¡Apreciamos mucho tu apoyo!';
        this.text2 = 'Haz click en el boton para solicitar un nuevo talonario.';
        this.text3 = '¡GRACIAS!';
        this.text4 = 'SOLICITAR TALONARIO';
        this.message = "";
        this.contador = 0;
        this.validaPagina = true;
        var data = JSON.parse(this.session.getInformation());
        console.log("-----------------data-----------------\n\n" + JSON.stringify(data) + "\n\n--------------------------------------");
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
        console.log("validaPagina123 -> " + this.validaPagina);
    }
    SolicitaTalonarioComponent.prototype.makePostSolitarTalonario = function () {
        console.log("ENTRA AQUI ---> ");
        this.myPostService
            .postData({}, 'api/Talonario/Solicitar')
            .subscribe(function (res) {
            console.log("RES --->", res);
            //this.message = (<any>res).json.data.username;
        });
    };
    SolicitaTalonarioComponent.prototype.solicitaTalonario = function () {
        console.log("ESPERE SOLICITANDO...........>");
        this.makePostSolitarTalonario();
    };
    SolicitaTalonarioComponent.prototype.ngOnInit = function () {
        console.log("SOLICITA TALONARIO");
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    SolicitaTalonarioComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsa0VBQWdGO0FBQ2hGLDZEQUE4RjtBQUU5RiwrRUFBNkU7QUFDN0UseUVBQXNFO0FBUXRFO0lBU0Usb0NBQW9CLGFBQWdDLEVBQVUsT0FBdUI7UUFBakUsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFSckYsVUFBSyxHQUFXLDZCQUE2QixDQUFDO1FBQzlDLFVBQUssR0FBVywwREFBMEQsQ0FBQztRQUMzRSxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBQzVCLFVBQUssR0FBVyxxQkFBcUIsQ0FBQztRQUN0QyxZQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFJM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLDRDQUE0QyxDQUFDLENBQUM7UUFDaEksYUFBYTtRQUNiLElBQUk7UUFDSiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qiw4Q0FBOEM7UUFDOUMsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1Ysd0JBQXdCO1FBQ3hCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsa0NBQWtDO1FBQ2xDLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIsY0FBYztRQUNkLFVBQVU7UUFDVixRQUFRO1FBQ1IsUUFBUTtRQUVSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUM5QixDQUFDO1lBQ0MsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUM3QixDQUFDO2dCQUNHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQ3JELENBQUM7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQzNDLENBQUM7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFLTSw2REFBd0IsR0FBL0I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWE7YUFDYixRQUFRLENBQUMsRUFBRSxFQUFFLHlCQUF5QixDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3QiwrQ0FBK0M7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU0sc0RBQWlCLEdBQXhCO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELHNEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUEzQm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7dUVBQUM7SUFuRGxELDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDO3lDQVVtQyxzQ0FBaUIsRUFBbUIsaUNBQWM7T0FUMUUsMEJBQTBCLENBK0Z0QztJQUFELGlDQUFDO0NBQUEsQUEvRkQsSUErRkM7QUEvRlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcG9zdC9odHRwLXBvc3Quc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvbGljaXRhdGFsb25hcmlvJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW015SHR0cFBvc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29saWNpdGFUYWxvbmFyaW9Db21wb25lbnQge1xyXG4gIHRleHQxOiBzdHJpbmcgPSAnwqFBcHJlY2lhbW9zIG11Y2hvIHR1IGFwb3lvISc7XHJcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XHJcbiAgdGV4dDM6IHN0cmluZyA9ICfCoUdSQUNJQVMhJztcclxuICB0ZXh0NDogc3RyaW5nID0gJ1NPTElDSVRBUiBUQUxPTkFSSU8nO1xyXG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiOyAgXHJcbiAgY29udGFkb3I6IG51bWJlciA9IDA7XHJcbiAgdmFsaWRhUGFnaW5hOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBteVBvc3RTZXJ2aWNlOiBNeUh0dHBQb3N0U2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSkgXHJcbiAgeyBcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnNlc3Npb24uZ2V0SW5mb3JtYXRpb24oKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tZGF0YS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSArIFwiXFxuXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAvLyB2YXIgZGF0YSA9XHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibW9udG9fZGV1ZG9yXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwibW9udG9fYWJvbmFkb1wiOiAwLFxyXG4gICAgLy8gICBcIm1vbnRvX3RvdGFsXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwiZXhwaXJhXCI6IFwiMjAxOC0wMy0wMlQwMDowOToyOS43MjQ0NjE2WlwiLFxyXG4gICAgLy8gICBcImNsYXZlXCI6IDEsXHJcbiAgICAvLyAgIFwidGFsb25hcmlvc1wiOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgXCJjbGF2ZVwiOiA4LFxyXG4gICAgLy8gICAgICAgICAgIFwiYm9sZXRvc1wiOiBudWxsLFxyXG4gICAgLy8gICAgICAgICAgIFwiQm9sZXRvc1wiOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIFwicGVuZGllbnRlc1wiOiBbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJhc2lnbmFkb3NcIjpbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJ2ZW5kaWRvc1wiOltdXHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vIH0gICAgXHJcblxyXG4gICAgaWYoZGF0YS50YWxvbmFyaW9zLmxlbmd0aCA+IDApICAgIFxyXG4gICAge1xyXG4gICAgICBmb3IobGV0IGkgaW4gZGF0YS50YWxvbmFyaW9zKSBcclxuICAgICAge1xyXG4gICAgICAgICAgaWYoZGF0YS50YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciA9IHRoaXMuY29udGFkb3IgKyAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gZGF0YS50YWxvbmFyaW9zLmxlbmd0aClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGFQYWdpbmEgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ2YWxpZGFQYWdpbmExMjMgLT4gXCIgKyB0aGlzLnZhbGlkYVBhZ2luYSk7XHJcbiAgfVxyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgcHVibGljIG1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRU5UUkEgQVFVSSAtLS0+IFwiKTtcclxuICAgIHRoaXMubXlQb3N0U2VydmljZVxyXG4gICAgICAgIC5wb3N0RGF0YSh7fSwgJ2FwaS9UYWxvbmFyaW8vU29saWNpdGFyJylcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTIC0tLT5cIiwgcmVzKTtcclxuICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2UgPSAoPGFueT5yZXMpLmpzb24uZGF0YS51c2VybmFtZTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzb2xpY2l0YVRhbG9uYXJpbygpXHJcbiAgeyBcclxuICAgIGNvbnNvbGUubG9nKFwiRVNQRVJFIFNPTElDSVRBTkRPLi4uLi4uLi4uLi4+XCIpXHJcbiAgICB0aGlzLm1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU09MSUNJVEEgVEFMT05BUklPXCIpO1xyXG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcbi8vICAgaWYodGhpcy50YWxvbmFyaW9zLmxlbmd0aCA+IDApIHtcclxuLy8gICAgIC8vQk9MRVRPUyBQRU5ESUVOVEVTXHJcbi8vICAgICBpZih0aGlzLnRhbG9uYXJpb3NbaV0ucGVuZGllbnRlcy5sZW5ndGggPT0gMClcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9fZ3Jpc1wiO1xyXG4vLyAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSBmYWxzZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2VcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9cIjtcclxuLy8gICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gdHJ1ZTtcclxuLy8gICAgICAgICB0aGlzLmNhbnRCb2xQZW5kaWVudGVzW2ldID0gdGhpcy50YWxvbmFyaW9zW2ldLnBlbmRpZW50ZXMubGVuZ3RoO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRU5UUk8gQVFVSVwiKTtcclxuLy8gICAgICAgICB0aGlzLnNlc3Npb24uc2V0VGFsb25hcmlvcyh0cnVlKTtcclxuLy8gICAgIH1cclxuXHJcbn0iXX0=