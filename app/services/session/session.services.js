"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setLoggedIn = function (status) {
        application_settings_1.setBoolean("loggedIn", status);
    };
    SessionService.prototype.loggedIn = function () {
        return application_settings_1.getBoolean("loggedIn");
    };
    SessionService.prototype.setInformation = function (Data) {
        if (Data.length > 0) {
            var data = JSON.stringify(Data);
            application_settings_1.setString("Information", data);
        }
        else {
            throw ("Debes especificar un parametro no vacio");
        }
    };
    SessionService.prototype.getInformation = function () {
        var data = JSON.parse(application_settings_1.getString("Information"));
        console.log("INFORMACION", data.length);
        return data;
    };
    SessionService.prototype.setSorteoActivo = function (Data) {
        if (Data.length > 0) {
            var data = JSON.stringify(Data);
            application_settings_1.setString("SorteoActivo", data);
        }
        else {
            throw ("Debes especificar un parametro no vacio");
        }
    };
    SessionService.prototype.getSorteoActivo = function () {
        var data = JSON.parse(application_settings_1.getString("SorteoActivo"));
        console.log("INFORMACION", data.length);
        return data;
    };
    SessionService.prototype.setToken = function (Token) {
        console.log("TOKEN", Token);
        application_settings_1.setString("Token", Token);
        // if(Token.length < 1){
        //     setString("Token", Token);
        // }else{
        //     throw("Debes ingresar un token válido");
        // }
    };
    SessionService.prototype.getToken = function () {
        return application_settings_1.getString("Token");
    };
    SessionService.prototype.setIdColaborador = function (IdColaborador) {
        console.log("IdColaborador", IdColaborador);
        application_settings_1.setString("IdColaborador", IdColaborador);
    };
    SessionService.prototype.getIdColaborador = function () {
        return application_settings_1.getString("IdColaborador");
    };
    SessionService.prototype.setCorreoColaborador = function (CorreoColaborador) {
        console.log("CorreoColaborador", CorreoColaborador);
        application_settings_1.setString("CorreoColaborador", CorreoColaborador);
    };
    SessionService.prototype.getCorreoColaborador = function () {
        return application_settings_1.getString("CorreoColaborador");
    };
    SessionService.prototype.setGanadores = function (Ganadores) {
        console.log("Ganadores", Ganadores);
        application_settings_1.setString("Ganadores", Ganadores);
    };
    SessionService.prototype.getGanadores = function () {
        return application_settings_1.getString("Ganadores");
    };
    SessionService.prototype.setPoliticas = function (Politicas) {
        console.log("Politicas", Politicas);
        application_settings_1.setString("Politicas", Politicas);
    };
    SessionService.prototype.getPoliticas = function () {
        return application_settings_1.getString("Politicas");
    };
    SessionService.prototype.setReglamento = function (Reglamento) {
        console.log("Reglamento", Reglamento);
        application_settings_1.setString("Reglamento", Reglamento);
    };
    SessionService.prototype.getReglamento = function () {
        return application_settings_1.getString("Reglamento");
    };
    SessionService.prototype.setAceptacionTalonarios = function (AceptacionTalonarios) {
        console.log("AceptacionTalonarios", AceptacionTalonarios);
        application_settings_1.setString("AceptacionTalonarios", AceptacionTalonarios);
    };
    SessionService.prototype.getAceptacionTalonarios = function () {
        return application_settings_1.getString("AceptacionTalonarios");
    };
    SessionService.prototype.setConoceSorteo = function (ConoceSorteo) {
        console.log("ConoceSorteo", ConoceSorteo);
        application_settings_1.setString("ConoceSorteo", ConoceSorteo);
    };
    SessionService.prototype.getConoceSorteo = function () {
        return application_settings_1.getString("ConoceSorteo");
    };
    SessionService.prototype.setCondiciones = function (Condiciones) {
        console.log("Condiciones", Condiciones);
        application_settings_1.setString("Condiciones", Condiciones);
    };
    SessionService.prototype.getCondiciones = function () {
        return application_settings_1.getString("Condiciones");
    };
    SessionService.prototype.setTalonarios = function (tieneTalonarios) {
        application_settings_1.setBoolean("tieneTalonarios", tieneTalonarios);
    };
    SessionService.prototype.getTalonarios = function () {
        return application_settings_1.getBoolean("tieneTalonarios");
    };
    SessionService.prototype.setFirstRun = function (boolean) {
        application_settings_1.setBoolean("firstrun", boolean);
    };
    SessionService.prototype.getFirstRun = function () {
        return application_settings_1.getBoolean("firstrun", true);
    };
    SessionService = __decorate([
        core_1.Injectable()
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUErSUEsQ0FBQztJQTdJRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxnQ0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCwrQ0FBK0M7UUFDL0MsSUFBSTtJQUNSLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixhQUFhO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLGdDQUFTLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCLFVBQXFCLGlCQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEQsZ0NBQVMsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCw2Q0FBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwQyxnQ0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwQyxnQ0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsVUFBVTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0QyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnREFBdUIsR0FBdkIsVUFBd0Isb0JBQW9CO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMxRCxnQ0FBUyxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGdEQUF1QixHQUF2QjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsWUFBWTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMxQyxnQ0FBUyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsV0FBVztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4QyxnQ0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsZUFBZTtRQUV6QixpQ0FBVSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBRUksTUFBTSxDQUFDLGlDQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQU87UUFDZixpQ0FBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBOUlRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0ErSTFCO0lBQUQscUJBQUM7Q0FBQSxBQS9JRCxJQStJQztBQS9JWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2UgeyAgIFxyXG5cclxuICAgIHNldExvZ2dlZEluKHN0YXR1cyl7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihcImxvZ2dlZEluXCIsIHN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VkSW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImxvZ2dlZEluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluZm9ybWF0aW9uKERhdGEpe1xyXG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZyhcIkluZm9ybWF0aW9uXCIsIGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mb3JtYXRpb24oKXtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT1JNQUNJT05cIiwgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNvcnRlb0FjdGl2byhEYXRhKXtcclxuICAgICAgICBpZihEYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0ZW9BY3Rpdm8oKXtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklORk9STUFDSU9OXCIsIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2tlbihUb2tlbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0tFTlwiLCBUb2tlbik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xyXG4gICAgICAgIC8vIGlmKFRva2VuLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIC8vICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRocm93KFwiRGViZXMgaW5ncmVzYXIgdW4gdG9rZW4gdsOhbGlkb1wiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWRDb2xhYm9yYWRvcihJZENvbGFib3JhZG9yKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklkQ29sYWJvcmFkb3JcIiwgSWRDb2xhYm9yYWRvcik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiLCBJZENvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZENvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIklkQ29sYWJvcmFkb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ycmVvQ29sYWJvcmFkb3IoQ29ycmVvQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ycmVvQ29sYWJvcmFkb3JcIiwgQ29ycmVvQ29sYWJvcmFkb3IpO1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIsIENvcnJlb0NvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3JyZW9Db2xhYm9yYWRvcigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb3JyZW9Db2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHYW5hZG9yZXMoR2FuYWRvcmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xyXG4gICAgICAgIHNldFN0cmluZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbmFkb3Jlcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJHYW5hZG9yZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9saXRpY2FzKFBvbGl0aWNhcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2xpdGljYXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUG9saXRpY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZ2xhbWVudG8oUmVnbGFtZW50byl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWdsYW1lbnRvXCIsIFJlZ2xhbWVudG8pO1xyXG4gICAgICAgIHNldFN0cmluZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVnbGFtZW50bygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEFjZXB0YWNpb25UYWxvbmFyaW9zKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIsIEFjZXB0YWNpb25UYWxvbmFyaW9zKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiLCBBY2VwdGFjaW9uVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ub2NlU29ydGVvKENvbm9jZVNvcnRlbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25vY2VTb3J0ZW8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRDb25kaWNpb25lcyhDb25kaWNpb25lcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25kaWNpb25lc1wiLCBDb25kaWNpb25lcyk7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29uZGljaW9uZXNcIiwgQ29uZGljaW9uZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmRpY2lvbmVzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvbmRpY2lvbmVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhbG9uYXJpb3ModGllbmVUYWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIiwgdGllbmVUYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWxvbmFyaW9zKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaXJzdFJ1bihib29sZWFuKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgYm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RSdW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIHRydWUpO1xyXG4gICAgfVxyXG59Il19