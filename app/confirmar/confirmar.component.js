"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var http_post_services_1 = require("../services/http-post/http-post.services");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var ConfirmarComponent = /** @class */ (function () {
    function ConfirmarComponent(route, router, API) {
        this.route = route;
        this.router = router;
        this.API = API;
        this.Datos = [];
        console.log("CONFIRMAR COMPONENT");
    }
    ConfirmarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
            console.dir(_this.Datos);
        });
    };
    ConfirmarComponent.prototype.Si = function () {
        if (this.Datos.Tipo == "Uno") {
            this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: this.Datos })]);
            this.API.postData(this.Datos.Boleto.Boletos.Info.comprador, "api/Boleto/Vender").subscribe(function (response) {
                console.log(response);
            });
        }
        else {
            this.router.navigate(["talonarios"], { clearHistory: true });
        }
    };
    ConfirmarComponent.prototype.Varios = function () {
        this.router.navigate(["talonarios"], { clearHistory: true });
    };
    ConfirmarComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ConfirmarComponent.prototype, "drawerComponent", void 0);
    ConfirmarComponent = __decorate([
        core_1.Component({
            selector: "Confirmar",
            moduleId: module.id,
            templateUrl: "./confirmar.component.html",
            styleUrls: ["./confirmar.css"],
            providers: [http_post_services_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_extensions_1.RouterExtensions, http_post_services_1.MyHttpPostService])
    ], ConfirmarComponent);
    return ConfirmarComponent;
}());
exports.ConfirmarComponent = ConfirmarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFDN0Usa0VBQWdGO0FBV2hGO0lBS0ksNEJBQW9CLEtBQXFCLEVBQVUsTUFBd0IsRUFBVSxHQUFzQjtRQUF2RixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFKbkcsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUtwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFFLEdBQUY7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUNuRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFHLElBQUksRUFBQyxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCw4Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBL0JvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOytEQUFDO0lBRnBELGtCQUFrQjtRQVI5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUUsc0NBQWlCLENBQUU7U0FDbkMsQ0FBQzt5Q0FPNkIsdUJBQWMsRUFBa0Isb0NBQWdCLEVBQWUsc0NBQWlCO09BTGxHLGtCQUFrQixDQWtDOUI7SUFBRCx5QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNvbmZpcm1hclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb25maXJtYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY29uZmlybWFyLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFsgTXlIdHRwUG9zdFNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1hckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBwcml2YXRlIERhdG9zOiBhbnkgPSBbXTtcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQVBJOiBNeUh0dHBQb3N0U2VydmljZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09ORklSTUFSIENPTVBPTkVOVFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLkRhdG9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgU2koKXtcbiAgICAgICAgaWYodGhpcy5EYXRvcy5UaXBvID09IFwiVW5vXCIpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXNpZ25hY2lvbmV4aXRvc2FcIiwgSlNPTi5zdHJpbmdpZnkoeyBUaXBvOiBcIlVub1wiLCBCb2xldG9zOiB0aGlzLkRhdG9zIH0gKV0pO1xuICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEodGhpcy5EYXRvcy5Cb2xldG8uQm9sZXRvcy5JbmZvLmNvbXByYWRvciwgXCJhcGkvQm9sZXRvL1ZlbmRlclwiKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3RvcnkgOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYXJpb3MoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59Il19