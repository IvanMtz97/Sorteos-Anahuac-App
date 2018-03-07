"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var AppComponent = /** @class */ (function () {
    function AppComponent(session, router, myGetService, routeExtension) {
        var _this = this;
        this.session = session;
        this.router = router;
        this.myGetService = myGetService;
        this.routeExtension = routeExtension;
        this.session = session;
        this.router = router;
        if (this.session.loggedIn()) {
            this.GetTalonarios();
            if (this.session.getFirstRun() == true) {
                this.router.navigate(["privacidad"]);
            }
            else {
                this.router.navigate(["talonarios"]);
            }
        }
        else {
            this.router.navigate([""]);
        }
        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then(function (r) {
            _this.imagenPublicidad = "data:image/png;base64," + r.toBase64String();
            _this.session.setImagenPublicidad(_this.imagenPublicidad);
        }, function (err) {
        });
    }
    //GET INICIO SESION-------->
    AppComponent.prototype.GetTalonarios = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getDataAuthorization('api/Colaborador/GetCorreo/' + this.session.getCorreoColaborador() + '/')
            .subscribe(function (result) {
            _this.onGetData(result);
        }, function (error) {
            //this.loader.display(false);
            _this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios. El token expiro favor de iniciar sesion.');
        });
    };
    AppComponent.prototype.onGetData = function (data) {
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
    };
    AppComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        var _this = this;
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        }).then(function () {
            console.log("Dialog closed!");
            _this.routeExtension.navigate(['/login'], { clearHistory: true });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            providers: [session_services_1.SessionService, http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.Router, http_get_services_1.MyHttpGetService, router_extensions_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFPakY7SUFFSSxzQkFBb0IsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQztRQUFySixpQkFxQkM7UUFyQm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNqSixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFHRCxJQUFJLENBQUMsUUFBUSxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCLEdBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxFQUFFLFVBQUMsR0FBRztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVBLDRCQUE0QjtJQUNyQixvQ0FBYSxHQUFyQjtRQUFBLGlCQVVDO1FBVEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxZQUFZO2FBQ1osb0JBQW9CLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEdBQUcsQ0FBQzthQUM5RixTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLHFGQUFxRixDQUFDLENBQUM7UUFDeEgsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sZ0NBQVMsR0FBakIsVUFBa0IsSUFBb0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELCtCQUErQjtJQUNuQyxDQUFDO0lBRU0scUNBQWMsR0FBckIsVUFBdUIsTUFBTSxFQUFFLE9BQU87UUFBdEMsaUJBU0M7UUFSRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwRFEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBYyxFQUFFLG9DQUFnQixDQUFDO1NBQ2hELENBQUM7eUNBRytCLGlDQUFjLEVBQWtCLGVBQU0sRUFBd0Isb0NBQWdCLEVBQTBCLG9DQUFnQjtPQUY1SSxZQUFZLENBc0R4QjtJQUFELG1CQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtTZXNzaW9uU2VydmljZSwgTXlIdHRwR2V0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLkdldFRhbG9uYXJpb3MoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGh0dHAuZ2V0SW1hZ2UoXCJodHRwczovL3NvcnRlb2FuYWh1YWMubXgvYXBwL2Jhbm5lcl8xLmpwZ1wiKS50aGVuKChyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCk7IFxyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW1hZ2VuUHVibGljaWRhZCh0aGlzLmltYWdlblB1YmxpY2lkYWQpO1xyXG4gICAgICAgIH0sIChlcnIpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBHZXRUYWxvbmFyaW9zKCkge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZSAgXHJcbiAgICAgICAgICAgIC5nZXREYXRhQXV0aG9yaXphdGlvbignYXBpL0NvbGFib3JhZG9yL0dldENvcnJlby8nICsgdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCkgKyAnLycpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGEocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBkZSBvYnRlbmVyIGxvcyB0YWxvbmFyaW9zLiBFbCB0b2tlbiBleHBpcm8gZmF2b3IgZGUgaW5pY2lhciBzZXNpb24uJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhKGRhdGE6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==