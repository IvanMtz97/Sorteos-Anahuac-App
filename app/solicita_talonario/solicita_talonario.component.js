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
        console.log("ESPERE SOLICITANDO...........");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsa0VBQWdGO0FBQ2hGLDZEQUE4RjtBQUU5RiwrRUFBNkU7QUFRN0U7SUFPRSxvQ0FBb0IsYUFBZ0M7UUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBTnBELFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcsMERBQTBELENBQUM7UUFDM0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7UUFDdEMsWUFBTyxHQUFZLEVBQUUsQ0FBQztJQUVrQyxDQUFDO0lBS2xELDZEQUF3QixHQUEvQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYTthQUNiLFFBQVEsQ0FBQyxFQUFFLEVBQUUseUJBQXlCLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLCtDQUErQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTSxzREFBaUIsR0FBeEI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQTNCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQVRsRCwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7U0FDL0IsQ0FBQzt5Q0FRbUMsc0NBQWlCO09BUHpDLDBCQUEwQixDQWtEdEM7SUFBRCxpQ0FBQztDQUFBLEFBbERELElBa0RDO0FBbERZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvbGljaXRhdGFsb25hcmlvJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW015SHR0cFBvc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29saWNpdGFUYWxvbmFyaW9Db21wb25lbnQge1xyXG4gIHRleHQxOiBzdHJpbmcgPSAnwqFBcHJlY2lhbW9zIG11Y2hvIHR1IGFwb3lvISc7XHJcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XHJcbiAgdGV4dDM6IHN0cmluZyA9ICfCoUdSQUNJQVMhJztcclxuICB0ZXh0NDogc3RyaW5nID0gJ1NPTElDSVRBUiBUQUxPTkFSSU8nO1xyXG4gIG1lc3NhZ2UgOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15UG9zdFNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlKSB7IH1cclxuICBcclxuICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gIHB1YmxpYyBtYWtlUG9zdFNvbGl0YXJUYWxvbmFyaW8oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVOVFJBIEFRVUkgLS0tPiBcIik7XHJcbiAgICB0aGlzLm15UG9zdFNlcnZpY2VcclxuICAgICAgICAucG9zdERhdGEoe30sICdhcGkvVGFsb25hcmlvL1NvbGljaXRhcicpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFUyAtLS0+XCIsIHJlcyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gKDxhbnk+cmVzKS5qc29uLmRhdGEudXNlcm5hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgXHJcbiAgICBjb25zb2xlLmxvZyhcIkVTUEVSRSBTT0xJQ0lUQU5ETy4uLi4uLi4uLi4uXCIpXHJcbiAgICB0aGlzLm1ha2VQb3N0U29saXRhclRhbG9uYXJpbygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU09MSUNJVEEgVEFMT05BUklPXCIpO1xyXG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcbi8vIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOy8vIHN0YXR1c0Jhci5zaG93KCk7KHN3aXBlKT1cImhpZGVTdGF0dXNCYXIoKVwiXHJcbiAgLy8geyAgICAgICAgXHJcbiAgLy8gICAgIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gdHJ1ZSlcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgICAgc3RhdHVzQmFyLmhpZGUoKTtcclxuICAvLyAgICAgICAgIHRoaXMuc3RhdHVzQmFyU3RhdGUgPSBmYWxzZTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBlbHNlIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gZmFsc2UpXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICAgIHN0YXR1c0Jhci5zaG93KCk7XHJcbiAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gdHJ1ZTtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxufSJdfQ==