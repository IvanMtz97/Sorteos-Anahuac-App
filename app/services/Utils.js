"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_get_services_1 = require("./http-get/http-get.services");
var session_services_1 = require("./session/session.services");
var UtilsService = /** @class */ (function () {
    function UtilsService(GET, session) {
        this.GET = GET;
        this.session = session;
    }
    UtilsService.prototype.ActualizarTalonarios = function () {
        var _this = this;
        var Correo = this.session.getCorreoColaborador();
        this.GET.getDataAuthorization("api/Colaborador/GetCorreo/" + Correo + "/").subscribe(function (res) {
            console.log("TALONARIOS ACTUALIZADOS");
            _this.session.setInformation(JSON.stringify(res.json()));
        }, function (error) {
            console.log("ERROR AL ACTUALIZAR TALONARIOS");
            console.log(error);
        });
    };
    UtilsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService, session_services_1.SessionService])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxrRUFBZ0U7QUFDaEUsK0RBQTREO0FBRzVEO0lBQ0ksc0JBQW9CLEdBQXFCLEVBQVUsT0FBdUI7UUFBdEQsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUUxRSxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyw0QkFBNEIsR0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFkUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBRWdCLG9DQUFnQixFQUFtQixpQ0FBYztPQURqRSxZQUFZLENBZXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIEdFVDogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEFjdHVhbGl6YXJUYWxvbmFyaW9zKCl7XHJcbiAgICAgICAgdmFyIENvcnJlbyA9IHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW9Db2xhYm9yYWRvcigpO1xyXG4gICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0NvbGFib3JhZG9yL0dldENvcnJlby9cIitDb3JyZW8rXCIvXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBTE9OQVJJT1MgQUNUVUFMSVpBRE9TXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkocmVzLmpzb24oKSkpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBBQ1RVQUxJWkFSIFRBTE9OQVJJT1NcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==