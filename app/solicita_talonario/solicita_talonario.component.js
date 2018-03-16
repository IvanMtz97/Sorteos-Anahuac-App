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
        __metadata("design:paramtypes", [http_post_services_1.MyHttpPostService, session_services_1.SessionService])
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFFOUYsK0VBQTZFO0FBQzdFLHlFQUFzRTtBQVV0RTtJQVlFLG9DQUFvQixhQUFnQyxFQUFVLE9BQXVCO1FBQWpFLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBWHJGLFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcseURBQXlELENBQUM7UUFDMUUsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7UUFDdEMsVUFBSyxHQUFXLDBCQUEwQixDQUFDO1FBQzNDLFVBQUssR0FBVyxpR0FBaUcsQ0FBQztRQUNsSCxZQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFLM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxhQUFhO1FBQ2IsSUFBSTtRQUNKLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLDhDQUE4QztRQUM5QyxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5QixjQUFjO1FBQ2QsVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBRVIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQzlCLENBQUM7WUFDQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUM7Z0JBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FDckQsQ0FBQztvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDM0MsQ0FBQztvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDRyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUtNLDZEQUF3QixHQUEvQjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGFBQWE7YUFDYixRQUFRLENBQUMsRUFBRSxFQUFFLHlCQUF5QixDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHNEQUFpQixHQUF4QjtRQUVFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLG1EQUFjLEdBQXJCLFVBQXVCLE1BQU0sRUFBRSxPQUFPO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsQ3NCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7dUVBQUM7SUF6RGxELDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDO3lDQWFtQyxzQ0FBaUIsRUFBbUIsaUNBQWM7T0FaMUUsMEJBQTBCLENBNEd0QztJQUFELGlDQUFDO0NBQUEsQUE1R0QsSUE0R0M7QUE1R1ksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcG9zdC9odHRwLXBvc3Quc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbiAgXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2xpY2l0YXRhbG9uYXJpbycsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vc29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtNeUh0dHBQb3N0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvbGljaXRhVGFsb25hcmlvQ29tcG9uZW50IHtcclxuICB0ZXh0MTogc3RyaW5nID0gJ8KhQXByZWNpYW1vcyBtdWNobyB0dSBhcG95byEnO1xyXG4gIHRleHQyOiBzdHJpbmcgPSAnSGF6IGNsaWMgZW4gZWwgYm90w7NuIHBhcmEgc29saWNpdGFyIHVuIG51ZXZvIHRhbG9uYXJpby4nO1xyXG4gIHRleHQzOiBzdHJpbmcgPSAnwqFHUkFDSUFTISc7XHJcbiAgdGV4dDQ6IHN0cmluZyA9ICdTT0xJQ0lUQVIgVEFMT05BUklPJztcclxuICB0ZXh0NTogc3RyaW5nID0gJ8KhQWdyYWRlY2Vtb3MgdHUgaW50ZXLDqXMhJztcclxuICB0ZXh0Njogc3RyaW5nID0gJ1BvZHLDoXMgc29saWNpdGFyIG90cm8gdGFsb25hcmlvIGhhc3RhIHZlbmRlciBsYSB0b3RhbGlkYWQgZGUgdHVzIGJvbGV0b3MgYXNpZ25hZG9zIGFjdHVhbG1lbnRlLic7XHJcbiAgbWVzc2FnZSA6IHN0cmluZyA9IFwiXCI7ICBcclxuICBjb250YWRvcjogbnVtYmVyID0gMDtcclxuICB2YWxpZGFQYWdpbmE6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlQb3N0U2VydmljZTogTXlIdHRwUG9zdFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIFxyXG4gIHsgXHJcbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpOyAgICAgICAgXHJcbiAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICAvLyB2YXIgZGF0YSA9XHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibW9udG9fZGV1ZG9yXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwibW9udG9fYWJvbmFkb1wiOiAwLFxyXG4gICAgLy8gICBcIm1vbnRvX3RvdGFsXCI6IDMyMDAsXHJcbiAgICAvLyAgIFwiZXhwaXJhXCI6IFwiMjAxOC0wMy0wMlQwMDowOToyOS43MjQ0NjE2WlwiLFxyXG4gICAgLy8gICBcImNsYXZlXCI6IDEsXHJcbiAgICAvLyAgIFwidGFsb25hcmlvc1wiOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgXCJjbGF2ZVwiOiA4LFxyXG4gICAgLy8gICAgICAgICAgIFwiYm9sZXRvc1wiOiBudWxsLFxyXG4gICAgLy8gICAgICAgICAgIFwiQm9sZXRvc1wiOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIFwicGVuZGllbnRlc1wiOiBbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJhc2lnbmFkb3NcIjpbXSxcclxuICAgIC8vICAgICAgICAgICAgICAgXCJ2ZW5kaWRvc1wiOltdXHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vIH0gICAgXHJcbiAgICBcclxuICAgIGlmKGRhdGEudGFsb25hcmlvcy5sZW5ndGggPiAwKSAgICBcclxuICAgIHtcclxuICAgICAgZm9yKGxldCBpIGluIGRhdGEudGFsb25hcmlvcykgXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlmKGRhdGEudGFsb25hcmlvc1tpXS5Cb2xldG9zLnBlbmRpZW50ZXMubGVuZ3RoID09IDApICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWRvciA9IHRoaXMuY29udGFkb3IgKyAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT0gZGF0YS50YWxvbmFyaW9zLmxlbmd0aClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGFQYWdpbmEgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbGlkYVBhZ2luYSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gIHB1YmxpYyBtYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKSB7XHJcbiAgICB0aGlzLm15UG9zdFNlcnZpY2VcclxuICAgICAgICAucG9zdERhdGEoe30sICdhcGkvVGFsb25hcmlvL1NvbGljaXRhcicpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4geyAgIFxyXG4gICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZShcIlNvbGljaXR1ZFwiLCBcIkxhIHNvbGljaXR1ZCBoYSBzaWRvIGVudmlhZGEuIEdyYWNpYXMuXCIpO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZShcIlNvbGljaXR1ZFwiLCBcIkxhIHNvbGljaXR1ZCBubyBoYSBwb2RpZG8gc2VyIGVudmlhZGEuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzb2xpY2l0YVRhbG9uYXJpbygpXHJcbiAgeyAgICAgXHJcbiAgICB0aGlzLm1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpOyAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KClcclxuICB7ICAgIFxyXG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgfSkudGhlbigoKSA9PiB7ICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuLy8gICBpZih0aGlzLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgLy9CT0xFVE9TIFBFTkRJRU5URVNcclxuLy8gICAgIGlmKHRoaXMudGFsb25hcmlvc1tpXS5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb19ncmlzXCI7XHJcbi8vICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xyXG4vLyAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4vLyAgICAgICAgIHRoaXMuY2FudEJvbFBlbmRpZW50ZXNbaV0gPSB0aGlzLnRhbG9uYXJpb3NbaV0ucGVuZGllbnRlcy5sZW5ndGg7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJFTlRSTyBBUVVJXCIpO1xyXG4vLyAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4vLyAgICAgfVxyXG5cclxufSJdfQ==