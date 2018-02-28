"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var http_post_services_1 = require("../services/http-post/http-post.services");
var SolicitaTalonarioComponent = /** @class */ (function () {
    function SolicitaTalonarioComponent(myPostService) {
        this.myPostService = myPostService;
        this.text1 = '¡Apreciamos mucho tu apoyo!';
        this.text2 = 'Haz click en el boton para solicitar un nuevo talonario.';
        this.text3 = '¡GRACIAS!';
        this.text4 = 'SOLICITAR TALONARIO';
        this.message = "";
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
        __metadata("design:paramtypes", [http_post_services_1.MyHttpPostService])
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsa0VBQWdGO0FBQ2hGLDZEQUE4RjtBQUU5RiwrRUFBNkU7QUFRN0U7SUFPRSxvQ0FBb0IsYUFBZ0M7UUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBTnBELFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcsMERBQTBELENBQUM7UUFDM0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7UUFDdEMsWUFBTyxHQUFZLEVBQUUsQ0FBQztJQUVrQyxDQUFDO0lBS2xELDZEQUF3QixHQUEvQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLCtDQUErQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTSxzREFBaUIsR0FBeEI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQTNCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQVRsRCwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7U0FDL0IsQ0FBQzt5Q0FRbUMsc0NBQWlCO09BUHpDLDBCQUEwQixDQWtEdEM7SUFBRCxpQ0FBQztDQUFBLEFBbERELElBa0RDO0FBbERZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcG9zdC9odHRwLXBvc3Quc2VydmljZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29saWNpdGF0YWxvbmFyaW8nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNvbGljaXRhVGFsb25hcmlvQ29tcG9uZW50IHtcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XG4gIHRleHQzOiBzdHJpbmcgPSAnwqFHUkFDSUFTISc7XG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlQb3N0U2VydmljZTogTXlIdHRwUG9zdFNlcnZpY2UpIHsgfVxuICBcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICBwdWJsaWMgbWFrZVBvc3RTb2xpdGFyVGFsb25hcmlvKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRU5UUkEgQVFVSSAtLS0+IFwiKTtcbiAgICB0aGlzLm15UG9zdFNlcnZpY2VcbiAgICAgICAgLnBvc3REYXRhKHt9LCAnYXBpL1RhbG9uYXJpby9Tb2xpY2l0YXInKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFUyAtLS0+XCIsIHJlcyk7XG4gICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzb2xpY2l0YVRhbG9uYXJpbygpXG4gIHsgXG4gICAgY29uc29sZS5sb2coXCJFU1BFUkUgU09MSUNJVEFORE8uLi4uLi4uLi4uLj5cIilcbiAgICB0aGlzLm1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpO1xuICB9XG5cbiAgbmdPbkluaXQoKVxuICB7XG4gICAgY29uc29sZS5sb2coXCJTT0xJQ0lUQSBUQUxPTkFSSU9cIik7XG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbi8vIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOy8vIHN0YXR1c0Jhci5zaG93KCk7KHN3aXBlKT1cImhpZGVTdGF0dXNCYXIoKVwiXG4gIC8vIHsgICAgICAgIFxuICAvLyAgICAgaWYodGhpcy5zdGF0dXNCYXJTdGF0ZSA9PSB0cnVlKVxuICAvLyAgICAge1xuICAvLyAgICAgICAgIHN0YXR1c0Jhci5oaWRlKCk7XG4gIC8vICAgICAgICAgdGhpcy5zdGF0dXNCYXJTdGF0ZSA9IGZhbHNlO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxzZSBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IGZhbHNlKVxuICAvLyAgICAge1xuICAvLyAgICAgICAgIHN0YXR1c0Jhci5zaG93KCk7XG4gIC8vICAgICAgICAgdGhpcy5zdGF0dXNCYXJTdGF0ZSA9IHRydWU7XG4gIC8vICAgICB9XG4gIC8vIH1cbn0iXX0=