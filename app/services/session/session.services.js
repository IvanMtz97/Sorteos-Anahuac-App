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
        application_settings_1.setString("IdColaborador", IdColaborador);
    };
    SessionService.prototype.getIdColaborador = function () {
        return application_settings_1.getString("IdColaborador");
    };
    SessionService.prototype.setCorreoColaborador = function (CorreoColaborador) {
        application_settings_1.setString("CorreoColaborador", CorreoColaborador);
    };
    SessionService.prototype.getCorreoColaborador = function () {
        return application_settings_1.getString("CorreoColaborador");
    };
    SessionService.prototype.setPassColaborador = function (PassColaborador) {
        application_settings_1.setString("PassColaborador", PassColaborador);
    };
    SessionService.prototype.getPassColaborador = function () {
        return application_settings_1.getString("PassColaborador");
    };
    SessionService.prototype.setGanadores = function (Ganadores) {
        application_settings_1.setString("Ganadores", Ganadores);
    };
    SessionService.prototype.getGanadores = function () {
        return application_settings_1.getString("Ganadores");
    };
    SessionService.prototype.setPoliticas = function (Politicas) {
        application_settings_1.setString("Politicas", Politicas);
    };
    SessionService.prototype.getPoliticas = function () {
        return application_settings_1.getString("Politicas");
    };
    SessionService.prototype.setReglamento = function (Reglamento) {
        application_settings_1.setString("Reglamento", Reglamento);
    };
    SessionService.prototype.getReglamento = function () {
        return application_settings_1.getString("Reglamento");
    };
    SessionService.prototype.setAceptacionTalonarios = function (AceptacionTalonarios) {
        application_settings_1.setString("AceptacionTalonarios", AceptacionTalonarios);
    };
    SessionService.prototype.getAceptacionTalonarios = function () {
        return application_settings_1.getString("AceptacionTalonarios");
    };
    SessionService.prototype.setConoceSorteo = function (ConoceSorteo) {
        application_settings_1.setString("ConoceSorteo", ConoceSorteo);
    };
    SessionService.prototype.getConoceSorteo = function () {
        return application_settings_1.getString("ConoceSorteo");
    };
    SessionService.prototype.setCondiciones = function (Condiciones) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUErSUEsQ0FBQztJQTdJRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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QWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLGVBQWU7UUFFekIsaUNBQVUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUVJLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2YsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTlJUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBK0kxQjtJQUFELHFCQUFDO0NBQUEsQUEvSUQsSUErSUM7QUEvSVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgZ2V0TnVtYmVyLCBzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHsgICBcclxuXHJcbiAgICBzZXRMb2dnZWRJbihzdGF0dXMpe1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJsb2dnZWRJblwiLCBzdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJsb2dnZWRJblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbmZvcm1hdGlvbihEYXRhKXtcclxuICAgICAgICBpZihEYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiLCBkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3coXCJEZWJlcyBlc3BlY2lmaWNhciB1biBwYXJhbWV0cm8gbm8gdmFjaW9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluZm9ybWF0aW9uKCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIkluZm9ybWF0aW9uXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklORk9STUFDSU9OXCIsIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3J0ZW9BY3Rpdm8oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIsIGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydGVvQWN0aXZvKCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkZPUk1BQ0lPTlwiLCBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG9rZW4oVG9rZW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVE9LRU5cIiwgVG9rZW4pO1xyXG4gICAgICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcclxuICAgICAgICAvLyBpZihUb2tlbi5sZW5ndGggPCAxKXtcclxuICAgICAgICAvLyAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICB0aHJvdyhcIkRlYmVzIGluZ3Jlc2FyIHVuIHRva2VuIHbDoWxpZG9cIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElkQ29sYWJvcmFkb3IoSWRDb2xhYm9yYWRvcil7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiLCBJZENvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZENvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIklkQ29sYWJvcmFkb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ycmVvQ29sYWJvcmFkb3IoQ29ycmVvQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIsIENvcnJlb0NvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3JyZW9Db2xhYm9yYWRvcigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb3JyZW9Db2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXNzQ29sYWJvcmFkb3IoUGFzc0NvbGFib3JhZG9yKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQYXNzQ29sYWJvcmFkb3JcIiwgUGFzc0NvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXNzQ29sYWJvcmFkb3IoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUGFzc0NvbGFib3JhZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdhbmFkb3JlcyhHYW5hZG9yZXMpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbmFkb3Jlcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJHYW5hZG9yZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9saXRpY2FzKFBvbGl0aWNhcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUG9saXRpY2FzXCIsIFBvbGl0aWNhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9saXRpY2FzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlBvbGl0aWNhc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWdsYW1lbnRvKFJlZ2xhbWVudG8pe1xyXG4gICAgICAgIHNldFN0cmluZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVnbGFtZW50bygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEFjZXB0YWNpb25UYWxvbmFyaW9zKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiLCBBY2VwdGFjaW9uVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ub2NlU29ydGVvKENvbm9jZVNvcnRlbyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIsIENvbm9jZVNvcnRlbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29ub2NlU29ydGVvKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvbm9jZVNvcnRlb1wiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0Q29uZGljaW9uZXMoQ29uZGljaW9uZXMpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvbmRpY2lvbmVzXCIsIENvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25kaWNpb25lcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb25kaWNpb25lc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYWxvbmFyaW9zKHRpZW5lVGFsb25hcmlvcylcclxuICAgIHtcclxuICAgICAgICBzZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIsIHRpZW5lVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFsb25hcmlvcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rmlyc3RSdW4oYm9vbGVhbil7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIGJvb2xlYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpcnN0UnVuKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCB0cnVlKTtcclxuICAgIH1cclxufSJdfQ==