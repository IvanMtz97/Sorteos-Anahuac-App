"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var app = require("application");
var application_1 = require("application");
var nativescript_exit_1 = require("nativescript-exit");
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
    AppComponent.prototype.ngOnInit = function () {
        app.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            data.cancel = true;
            dialogs.confirm({
                title: "AVISO",
                message: "Deseas salir de la aplicacion?",
                okButtonText: "SI",
                cancelButtonText: "NO"
            }).then(function (result) {
                if (result) {
                    nativescript_exit_1.exit();
                }
            });
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFPekM7SUFFSSxzQkFBb0IsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQztRQUFySixpQkFxQkM7UUFyQm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNqSixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxD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bSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgZXhpdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZXhpdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLkdldFRhbG9uYXJpb3MoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcml2YWNpZGFkXCJdKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGh0dHAuZ2V0SW1hZ2UoXCJodHRwczovL3NvcnRlb2FuYWh1YWMubXgvYXBwL2Jhbm5lcl8xLmpwZ1wiKS50aGVuKChyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VuUHVibGljaWRhZCA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyByLnRvQmFzZTY0U3RyaW5nKCk7IFxyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW1hZ2VuUHVibGljaWRhZCh0aGlzLmltYWdlblB1YmxpY2lkYWQpO1xyXG4gICAgICAgIH0sIChlcnIpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGFwcC5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlc2VhcyBzYWxpciBkZSBsYSBhcGxpY2FjaW9uP1wiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5PXCJcclxuICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICBleGl0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAvL0dFVCBJTklDSU8gU0VTSU9OLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIEdldFRhbG9uYXJpb3MoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlICBcclxuICAgICAgICAgICAgLmdldERhdGFBdXRob3JpemF0aW9uKCdhcGkvQ29sYWJvcmFkb3IvR2V0Q29ycmVvLycgKyB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSArICcvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIGRlIG9idGVuZXIgbG9zIHRhbG9uYXJpb3MuIEVsIHRva2VuIGV4cGlybyBmYXZvciBkZSBpbmljaWFyIHNlc2lvbi4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6dGl0dWxvLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19