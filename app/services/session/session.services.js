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
    SessionService.prototype.setImagenPublicidad = function (Publicidad) {
        application_settings_1.setString("Publicidad", Publicidad);
    };
    SessionService.prototype.getImagenPublicidad = function () {
        return application_settings_1.getString("Publicidad");
    };
    SessionService = __decorate([
        core_1.Injectable()
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUF1SkEsQ0FBQztJQXJKRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLGdDQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7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LENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxlQUFlO1FBRXpCLGlDQUFVLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFFSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNmLGlDQUFVLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsVUFBVTtRQUUxQixnQ0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBRUksTUFBTSxDQUFDLGdDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXRKUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBdUoxQjtJQUFELHFCQUFDO0NBQUEsQUF2SkQsSUF1SkM7QUF2Slksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgZ2V0TnVtYmVyLCBzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHsgICBcclxuXHJcbiAgICBzZXRMb2dnZWRJbihzdGF0dXMpe1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJsb2dnZWRJblwiLCBzdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJsb2dnZWRJblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbmZvcm1hdGlvbihEYXRhKXtcclxuICAgICAgICBpZihEYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiLCBkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3coXCJEZWJlcyBlc3BlY2lmaWNhciB1biBwYXJhbWV0cm8gbm8gdmFjaW9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluZm9ybWF0aW9uKCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIkluZm9ybWF0aW9uXCIpKTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNvcnRlb0FjdGl2byhEYXRhKXtcclxuICAgICAgICBpZihEYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0ZW9BY3Rpdm8oKXtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIpKTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuKFRva2VuKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIFRva2VuKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gaWYoVG9rZW4ubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgLy8gICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhyb3coXCJEZWJlcyBpbmdyZXNhciB1biB0b2tlbiB2w6FsaWRvXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJUb2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJZENvbGFib3JhZG9yKElkQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIHNldFN0cmluZyhcIklkQ29sYWJvcmFkb3JcIiwgSWRDb2xhYm9yYWRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWRDb2xhYm9yYWRvcigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJJZENvbGFib3JhZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvcnJlb0NvbGFib3JhZG9yKENvcnJlb0NvbGFib3JhZG9yKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb3JyZW9Db2xhYm9yYWRvclwiLCBDb3JyZW9Db2xhYm9yYWRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ycmVvQ29sYWJvcmFkb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFzc0NvbGFib3JhZG9yKFBhc3NDb2xhYm9yYWRvcil7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUGFzc0NvbGFib3JhZG9yXCIsIFBhc3NDb2xhYm9yYWRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc0NvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlBhc3NDb2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHYW5hZG9yZXMoR2FuYWRvcmVzKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJHYW5hZG9yZXNcIiwgR2FuYWRvcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYW5hZG9yZXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiR2FuYWRvcmVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvbGl0aWNhcyhQb2xpdGljYXMpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIlBvbGl0aWNhc1wiLCBQb2xpdGljYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvbGl0aWNhcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQb2xpdGljYXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVnbGFtZW50byhSZWdsYW1lbnRvKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIsIFJlZ2xhbWVudG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlZ2xhbWVudG8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY2VwdGFjaW9uVGFsb25hcmlvcyhBY2VwdGFjaW9uVGFsb25hcmlvcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIiwgQWNlcHRhY2lvblRhbG9uYXJpb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjZXB0YWNpb25UYWxvbmFyaW9zKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbm9jZVNvcnRlbyhDb25vY2VTb3J0ZW8pe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvbm9jZVNvcnRlb1wiLCBDb25vY2VTb3J0ZW8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbm9jZVNvcnRlbygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldENvbmRpY2lvbmVzKENvbmRpY2lvbmVzKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb25kaWNpb25lc1wiLCBDb25kaWNpb25lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZGljaW9uZXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29uZGljaW9uZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFsb25hcmlvcyh0aWVuZVRhbG9uYXJpb3MpXHJcbiAgICB7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiLCB0aWVuZVRhbG9uYXJpb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhbG9uYXJpb3MoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpcnN0UnVuKGJvb2xlYW4pe1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCBib29sZWFuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJzdFJ1bigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VuUHVibGljaWRhZChQdWJsaWNpZGFkKVxyXG4gICAge1xyXG4gICAgICAgIHNldFN0cmluZyhcIlB1YmxpY2lkYWRcIiwgUHVibGljaWRhZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VuUHVibGljaWRhZCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlB1YmxpY2lkYWRcIik7XHJcbiAgICB9XHJcbn0iXX0=