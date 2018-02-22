"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var http_get_services_1 = require("../services/http-get/http-get.services");
var session_services_1 = require("../services/session/session.services");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, myGetService, session) {
        this.router = router;
        this.myGetService = myGetService;
        this.session = session;
        this.Correo = "";
        this.Clave = "";
        this.avisoPrivacidad = "http://www.sorteoanahuac.mx/aviso-de-privacidad.pdf";
        page.actionBarHidden = true;
    }
    //GET -------->
    LoginComponent.prototype.IniciarSesion = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador')
            .subscribe(function (result) {
            console.log("RESULTADO RESPUESTA -----> ", result);
            _this.onGetData(result);
        }, function (error) {
            //this.loader.display(false);
            _this.mostrarMensaje('Autenticación', 'Usuario o contraseña invalidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
        });
    };
    LoginComponent.prototype.onGetData = function (data) {
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
        this.session.setToken(data.json().token);
        //this.router.navigate(["talonarios", JSON.stringify(data.json())], { clearHistory: true });
        this.router.navigate(["home"]);
    };
    //END GET --------->
    LoginComponent.prototype.Avisos = function () {
        utils.openUrl(this.avisoPrivacidad);
    };
    LoginComponent.prototype.ConoceSorteo = function () {
        console.log("CONOCE TU SORTEO");
        this.router.navigate(["consorteo"]);
    };
    LoginComponent.prototype.ListaGanadores = function () {
        console.log("LISTA DE GANADORES");
        this.router.navigate(["ganadores"]);
    };
    LoginComponent.prototype.handleCorreoChange = function (evt) {
        var txtCorreo = evt.object;
        this.Correo = txtCorreo.text;
    };
    LoginComponent.prototype.handlePasswordChange = function (evt) {
        var txtClave = evt.object;
        this.Clave = txtClave.text;
    };
    LoginComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.Correo.length == 0 || this.Clave.length == 0) {
            dialogs.alert({
                title: "Aviso",
                message: "Debes llenar todos los campos.",
                okButtonText: "Ok"
            });
        }
        else {
            this.IniciarSesion();
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            providers: [http_get_services_1.MyHttpGetService, session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, http_get_services_1.MyHttpGetService, session_services_1.SessionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFEO0FBRXJELGdDQUErQjtBQUMvQixvQ0FBc0M7QUFDdEMsbUNBQXFDO0FBQ3JDLDRFQUEwRTtBQUMxRSx5RUFBc0U7QUFDdEUsc0RBQStEO0FBUS9EO0lBS0ksd0JBQVksSUFBVSxFQUFVLE1BQXdCLEVBQVUsWUFBOEIsRUFBVSxPQUF1QjtRQUFqRyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSjFILFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFXLHFEQUFxRCxDQUFDO1FBR25GLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO0lBQ1Asc0NBQWEsR0FBckI7UUFBQSxpQkFXQztRQVZHLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsWUFBWTthQUNaLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsaUJBQWlCLENBQUM7YUFDekUsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLG1IQUFtSCxDQUFDLENBQUM7UUFDOUosQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsSUFBb0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELCtCQUErQjtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsNEZBQTRGO1FBQzVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0JBQW9CO0lBQ2IsK0JBQU0sR0FBYjtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxxQ0FBWSxHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHVDQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLEdBQUc7UUFDekIsSUFBSSxTQUFTLEdBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVNLDZDQUFvQixHQUEzQixVQUE0QixHQUFHO1FBQzNCLElBQUksUUFBUSxHQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFTSx1Q0FBYyxHQUFyQixVQUF1QixNQUFNLEVBQUUsT0FBTztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBMUVRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGlDQUFjLENBQUM7U0FDaEQsQ0FBQzt5Q0FNb0IsV0FBSSxFQUFrQix5QkFBZ0IsRUFBd0Isb0NBQWdCLEVBQW1CLGlDQUFjO09BTHhILGNBQWMsQ0EyRTFCO0lBQUQscUJBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2UsIFNlc3Npb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgcHVibGljIENvcnJlbzogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgQ2xhdmU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGF2aXNvUHJpdmFjaWRhZDogc3RyaW5nID0gXCJodHRwOi8vd3d3LnNvcnRlb2FuYWh1YWMubXgvYXZpc28tZGUtcHJpdmFjaWRhZC5wZGZcIjsgXG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyBcbiAgICB9XG5cbiAgICAvL0dFVCAtLS0tLS0tLT5cbiAgICBwcml2YXRlIEluaWNpYXJTZXNpb24oKSB7XG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcbiAgICAgICAgdGhpcy5teUdldFNlcnZpY2VcbiAgICAgICAgICAgIC5nZXRMb2dpbih7IGVtYWlsOiB0aGlzLkNvcnJlbywgcGFzc3dvcmQ6IHRoaXMuQ2xhdmUgfSwgJ2FwaS9Db2xhYm9yYWRvcicpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1VMVEFETyBSRVNQVUVTVEEgLS0tLS0+IFwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhKHJlc3VsdCk7XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0F1dGVudGljYWNpw7NuJywgJ1VzdWFyaW8gbyBjb250cmFzZcOxYSBpbnZhbGlkb3MuIFJlY3VlcmRhIHF1ZSBlc3RhIGFwbGljYWNpw7NuIGVzIMO6bmljYW1lbnRlIHBhcmEgY29sYWJvcmFkb3JlcyBkZSBTb3J0ZW9zIEFuw6FodWFjLicpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4oZGF0YS5qc29uKCkudG9rZW4pO1xuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgIH1cbiAgICAvL0VORCBHRVQgLS0tLS0tLS0tPlxuICAgIHB1YmxpYyBBdmlzb3MoKSB7XG4gICAgICAgIHV0aWxzLm9wZW5VcmwodGhpcy5hdmlzb1ByaXZhY2lkYWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBDb25vY2VTb3J0ZW8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09OT0NFIFRVIFNPUlRFT1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29uc29ydGVvXCJdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTGlzdGFHYW5hZG9yZXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTElTVEEgREUgR0FOQURPUkVTXCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJnYW5hZG9yZXNcIl0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVDb3JyZW9DaGFuZ2UoZXZ0KXsgICAgXG4gICAgICAgIGxldCB0eHRDb3JyZW8gPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xuICAgICAgICB0aGlzLkNvcnJlbyA9IHR4dENvcnJlby50ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVQYXNzd29yZENoYW5nZShldnQpe1xuICAgICAgICBsZXQgdHh0Q2xhdmUgPSA8VGV4dEZpZWxkPiBldnQub2JqZWN0O1xuICAgICAgICB0aGlzLkNsYXZlID0gdHh0Q2xhdmUudGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRW50cmFyKCkge1xuICAgICAgICBpZih0aGlzLkNvcnJlby5sZW5ndGggPT0gMCB8fCB0aGlzLkNsYXZlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkF2aXNvXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWJlcyBsbGVuYXIgdG9kb3MgbG9zIGNhbXBvcy5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5JbmljaWFyU2VzaW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=