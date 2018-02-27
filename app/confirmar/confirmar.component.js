"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var http_post_services_1 = require("../services/http-post/http-post.services");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFVN0U7SUFHSSw0QkFBb0IsS0FBcUIsRUFBVSxNQUF3QixFQUFVLEdBQXNCO1FBQXZGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUZuRyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBR3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQUUsR0FBRjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25HLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUcsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQTNCUSxrQkFBa0I7UUFSOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLFNBQVMsRUFBRSxDQUFFLHNDQUFpQixDQUFFO1NBQ25DLENBQUM7eUNBSzZCLHVCQUFjLEVBQWtCLG9DQUFnQixFQUFlLHNDQUFpQjtPQUhsRyxrQkFBa0IsQ0E0QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNvbmZpcm1hclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29uZmlybWFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY29uZmlybWFyLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogWyBNeUh0dHBQb3N0U2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJpdmF0ZSBEYXRvczogYW55ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIEFQSTogTXlIdHRwUG9zdFNlcnZpY2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09ORklSTUFSIENPTVBPTkVOVFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0b3MgPSBKU09OLnBhcnNlKHBhcmFtc1tcImRhdGFcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLkRhdG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTaSgpe1xyXG4gICAgICAgIGlmKHRoaXMuRGF0b3MuVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXNpZ25hY2lvbmV4aXRvc2FcIiwgSlNPTi5zdHJpbmdpZnkoeyBUaXBvOiBcIlVub1wiLCBCb2xldG9zOiB0aGlzLkRhdG9zIH0gKV0pO1xyXG4gICAgICAgICAgICB0aGlzLkFQSS5wb3N0RGF0YSh0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG9zLkluZm8uY29tcHJhZG9yLCBcImFwaS9Cb2xldG8vVmVuZGVyXCIpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5IDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBWYXJpb3MoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxufSJdfQ==