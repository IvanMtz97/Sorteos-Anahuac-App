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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsa0VBQWdGO0FBQ2hGLDZEQUE4RjtBQUU5RiwrRUFBNkU7QUFDN0UseUVBQXNFO0FBVXRFO0lBVUUsb0NBQW9CLGFBQWdDLEVBQVUsT0FBdUI7UUFBakUsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFUckYsVUFBSyxHQUFXLDZCQUE2QixDQUFDO1FBQzlDLFVBQUssR0FBVywwREFBMEQsQ0FBQztRQUMzRSxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBQzVCLFVBQUssR0FBVyxxQkFBcUIsQ0FBQztRQUN0QyxZQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFLM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLDRDQUE0QyxDQUFDLENBQUM7UUFDaEksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxhQUFhO1FBQ2IsSUFBSTtRQUNKLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLDhDQUE4QztRQUM5QyxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5QixjQUFjO1FBQ2QsVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBRVIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQzlCLENBQUM7WUFDQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUM7Z0JBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FDckQsQ0FBQztvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDM0MsQ0FBQztvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUtNLDZEQUF3QixHQUEvQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLCtDQUErQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTSxzREFBaUIsR0FBeEI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQTNCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQXJEbEQsMEJBQTBCO1FBTnRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7eUNBV21DLHNDQUFpQixFQUFtQixpQ0FBYztPQVYxRSwwQkFBMEIsQ0FpR3RDO0lBQUQsaUNBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuICBcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvbGljaXRhdGFsb25hcmlvJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW015SHR0cFBvc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29saWNpdGFUYWxvbmFyaW9Db21wb25lbnQge1xyXG4gIHRleHQxOiBzdHJpbmcgPSAnwqFBcHJlY2lhbW9zIG11Y2hvIHR1IGFwb3lvISc7XHJcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XHJcbiAgdGV4dDM6IHN0cmluZyA9ICfCoUdSQUNJQVMhJztcclxuICB0ZXh0NDogc3RyaW5nID0gJ1NPTElDSVRBUiBUQUxPTkFSSU8nO1xyXG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiOyAgXHJcbiAgY29udGFkb3I6IG51bWJlciA9IDA7XHJcbiAgdmFsaWRhUGFnaW5hOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7IFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSBcclxuICB7IFxyXG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS1kYXRhLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5cIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpICsgXCJcXG5cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgIHRoaXMuaW1hZ2VuUHVibGljaXRhcmlhID0gdGhpcy5zZXNzaW9uLmdldEltYWdlblB1YmxpY2lkYWQoKTtcclxuICAgIC8vIHZhciBkYXRhID1cclxuICAgIC8vIHtcclxuICAgIC8vICAgXCJtb250b19kZXVkb3JcIjogMzIwMCxcclxuICAgIC8vICAgXCJtb250b19hYm9uYWRvXCI6IDAsXHJcbiAgICAvLyAgIFwibW9udG9fdG90YWxcIjogMzIwMCxcclxuICAgIC8vICAgXCJleHBpcmFcIjogXCIyMDE4LTAzLTAyVDAwOjA5OjI5LjcyNDQ2MTZaXCIsXHJcbiAgICAvLyAgIFwiY2xhdmVcIjogMSxcclxuICAgIC8vICAgXCJ0YWxvbmFyaW9zXCI6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICBcImNsYXZlXCI6IDgsXHJcbiAgICAvLyAgICAgICAgICAgXCJib2xldG9zXCI6IG51bGwsXHJcbiAgICAvLyAgICAgICAgICAgXCJCb2xldG9zXCI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgXCJwZW5kaWVudGVzXCI6IFtdLFxyXG4gICAgLy8gICAgICAgICAgICAgICBcImFzaWduYWRvc1wiOltdLFxyXG4gICAgLy8gICAgICAgICAgICAgICBcInZlbmRpZG9zXCI6W11cclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgXVxyXG4gICAgLy8gfSAgICBcclxuXHJcbiAgICBpZihkYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkgICAgXHJcbiAgICB7XHJcbiAgICAgIGZvcihsZXQgaSBpbiBkYXRhLnRhbG9uYXJpb3MpIFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZihkYXRhLnRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhZG9yID0gdGhpcy5jb250YWRvciArIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYodGhpcy5jb250YWRvciA9PSBkYXRhLnRhbG9uYXJpb3MubGVuZ3RoKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYVBhZ2luYSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbGlkYVBhZ2luYTEyMyAtPiBcIiArIHRoaXMudmFsaWRhUGFnaW5hKTtcclxuICB9XHJcbiAgXHJcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICBwdWJsaWMgbWFrZVBvc3RTb2xpdGFyVGFsb25hcmlvKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJFTlRSQSBBUVVJIC0tLT4gXCIpO1xyXG4gICAgdGhpcy5teVBvc3RTZXJ2aWNlXHJcbiAgICAgICAgLnBvc3REYXRhKHt9LCAnYXBpL1RhbG9uYXJpby9Tb2xpY2l0YXInKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVMgLS0tPlwiLCByZXMpO1xyXG4gICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNvbGljaXRhVGFsb25hcmlvKClcclxuICB7IFxyXG4gICAgY29uc29sZS5sb2coXCJFU1BFUkUgU09MSUNJVEFORE8uLi4uLi4uLi4uLj5cIilcclxuICAgIHRoaXMubWFrZVBvc3RTb2xpdGFyVGFsb25hcmlvKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAge1xyXG4gICAgY29uc29sZS5sb2coXCJTT0xJQ0lUQSBUQUxPTkFSSU9cIik7XHJcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuLy8gICBpZih0aGlzLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgLy9CT0xFVE9TIFBFTkRJRU5URVNcclxuLy8gICAgIGlmKHRoaXMudGFsb25hcmlvc1tpXS5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb19ncmlzXCI7XHJcbi8vICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xyXG4vLyAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4vLyAgICAgICAgIHRoaXMuY2FudEJvbFBlbmRpZW50ZXNbaV0gPSB0aGlzLnRhbG9uYXJpb3NbaV0ucGVuZGllbnRlcy5sZW5ndGg7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSTyBBUVVJXCIpO1xyXG4vLyAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4vLyAgICAgfVxyXG5cclxufSJdfQ==