"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_get_services_1 = require("./http-get/http-get.services");
var http_put_services_1 = require("./http-put/http-put.services");
var session_services_1 = require("./session/session.services");
var platformModule = require("tns-core-modules/platform");
var UtilsService = /** @class */ (function () {
    function UtilsService(GET, session, PUT) {
        this.GET = GET;
        this.session = session;
        this.PUT = PUT;
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
    UtilsService.prototype.ActualizarTalonariosToken = function () {
        var _this = this;
        //var Correo = this.session.getCorreoColaborador();
        this.PUT.putData({}, "api/Colaborador/" + platformModule.device.uuid).subscribe(function (res) {
            console.log("ACTUALIZAR TAL CON TOKEN");
            console.dir(res.json());
            _this.session.setInformation(JSON.stringify(res.json()));
            _this.session.setToken(res.json().token);
        }, function (error) {
            console.log("ERROR AL ACTUALIZAR TAL CON TOKEN");
            console.log(error);
        });
    };
    UtilsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService, session_services_1.SessionService, http_put_services_1.MyHttpPutService])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxrRUFBZ0U7QUFDaEUsa0VBQWdFO0FBQ2hFLCtEQUE0RDtBQUM1RCwwREFBNEQ7QUFHNUQ7SUFDSSxzQkFBb0IsR0FBcUIsRUFBVSxPQUF1QixFQUFVLEdBQXFCO1FBQXJGLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtJQUV6RyxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyw0QkFBNEIsR0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBeUIsR0FBekI7UUFBQSxpQkFXQztRQVZHLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBRWdCLG9DQUFnQixFQUFtQixpQ0FBYyxFQUFlLG9DQUFnQjtPQURoRyxZQUFZLENBNEJ4QjtJQUFELG1CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTXlIdHRwUHV0U2VydmljZSB9IGZyb20gXCIuL2h0dHAtcHV0L2h0dHAtcHV0LnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBHRVQ6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgUFVUOiBNeUh0dHBQdXRTZXJ2aWNlKXtcblxuICAgIH1cblxuICAgIEFjdHVhbGl6YXJUYWxvbmFyaW9zKCl7XG4gICAgICAgIHZhciBDb3JyZW8gPSB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKTtcbiAgICAgICAgdGhpcy5HRVQuZ2V0RGF0YUF1dGhvcml6YXRpb24oXCJhcGkvQ29sYWJvcmFkb3IvR2V0Q29ycmVvL1wiK0NvcnJlbytcIi9cIikuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBTE9OQVJJT1MgQUNUVUFMSVpBRE9TXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KHJlcy5qc29uKCkpKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBBQ1RVQUxJWkFSIFRBTE9OQVJJT1NcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEFjdHVhbGl6YXJUYWxvbmFyaW9zVG9rZW4oKXtcbiAgICAgICAgLy92YXIgQ29ycmVvID0gdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCk7XG4gICAgICAgIHRoaXMuUFVULnB1dERhdGEoe30sIFwiYXBpL0NvbGFib3JhZG9yL1wiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBQ1RVQUxJWkFSIFRBTCBDT04gVE9LRU5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihyZXMuanNvbigpKTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShyZXMuanNvbigpKSk7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4ocmVzLmpzb24oKS50b2tlbik7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgQUwgQUNUVUFMSVpBUiBUQUwgQ09OIFRPS0VOXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=