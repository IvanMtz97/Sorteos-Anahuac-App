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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxrRUFBZ0U7QUFDaEUsa0VBQWdFO0FBQ2hFLCtEQUE0RDtBQUM1RCwwREFBNEQ7QUFHNUQ7SUFDSSxzQkFBb0IsR0FBcUIsRUFBVSxPQUF1QixFQUFVLEdBQXFCO1FBQXJGLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtJQUV6RyxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyw0QkFBNEIsR0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBeUIsR0FBekI7UUFBQSxpQkFXQztRQVZHLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBRWdCLG9DQUFnQixFQUFtQixpQ0FBYyxFQUFlLG9DQUFnQjtPQURoRyxZQUFZLENBNEJ4QjtJQUFELG1CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE15SHR0cFB1dFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwLXB1dC9odHRwLXB1dC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIFBVVDogTXlIdHRwUHV0U2VydmljZSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEFjdHVhbGl6YXJUYWxvbmFyaW9zKCl7XHJcbiAgICAgICAgdmFyIENvcnJlbyA9IHRoaXMuc2Vzc2lvbi5nZXRDb3JyZW9Db2xhYm9yYWRvcigpO1xyXG4gICAgICAgIHRoaXMuR0VULmdldERhdGFBdXRob3JpemF0aW9uKFwiYXBpL0NvbGFib3JhZG9yL0dldENvcnJlby9cIitDb3JyZW8rXCIvXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBTE9OQVJJT1MgQUNUVUFMSVpBRE9TXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkocmVzLmpzb24oKSkpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBBQ1RVQUxJWkFSIFRBTE9OQVJJT1NcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBBY3R1YWxpemFyVGFsb25hcmlvc1Rva2VuKCl7XHJcbiAgICAgICAgLy92YXIgQ29ycmVvID0gdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCk7XHJcbiAgICAgICAgdGhpcy5QVVQucHV0RGF0YSh7fSwgXCJhcGkvQ29sYWJvcmFkb3IvXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2UudXVpZCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUNUVUFMSVpBUiBUQUwgQ09OIFRPS0VOXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihyZXMuanNvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KHJlcy5qc29uKCkpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKHJlcy5qc29uKCkudG9rZW4pO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBBQ1RVQUxJWkFSIFRBTCBDT04gVE9LRU5cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19