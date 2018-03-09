"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setURL = function (url) {
        application_settings_1.setString("url", url);
    };
    SessionService.prototype.getURL = function () {
        return application_settings_1.getString("url");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUFpS0EsQ0FBQztJQS9KRywrQkFBTSxHQUFOLFVBQU8sR0FBRztRQUVOLGdDQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBRUksTUFBTSxDQUFDLGdDQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxnQ0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsRUFBRSxDQUFBLENBQUMsSUFB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Q0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLGVBQWU7UUFFekIsaUNBQVUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUVJLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2YsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDRDQUFtQixHQUFuQixVQUFvQixVQUFVO1FBRTFCLGdDQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFFSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBaEtRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FpSzFCO0lBQUQscUJBQUM7Q0FBQSxBQWpLRCxJQWlLQztBQWpLWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2UgeyBcclxuICAgIFxyXG4gICAgc2V0VVJMKHVybClcclxuICAgIHtcclxuICAgICAgICBzZXRTdHJpbmcoXCJ1cmxcIiwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVUkwoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJ1cmxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9nZ2VkSW4oc3RhdHVzKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwibG9nZ2VkSW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5mb3JtYXRpb24oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvcm1hdGlvbigpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3J0ZW9BY3Rpdm8oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIsIGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydGVvQWN0aXZvKCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2tlbihUb2tlbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0tFTlwiLCBUb2tlbik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xyXG4gICAgICAgIC8vIGlmKFRva2VuLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIC8vICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRocm93KFwiRGViZXMgaW5ncmVzYXIgdW4gdG9rZW4gdsOhbGlkb1wiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWRDb2xhYm9yYWRvcihJZENvbGFib3JhZG9yKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJJZENvbGFib3JhZG9yXCIsIElkQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkQ29sYWJvcmFkb3IoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb3JyZW9Db2xhYm9yYWRvcihDb3JyZW9Db2xhYm9yYWRvcil7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ycmVvQ29sYWJvcmFkb3JcIiwgQ29ycmVvQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvcnJlb0NvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhc3NDb2xhYm9yYWRvcihQYXNzQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIHNldFN0cmluZyhcIlBhc3NDb2xhYm9yYWRvclwiLCBQYXNzQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3NDb2xhYm9yYWRvcigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQYXNzQ29sYWJvcmFkb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2FuYWRvcmVzKEdhbmFkb3Jlcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiR2FuYWRvcmVzXCIsIEdhbmFkb3Jlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FuYWRvcmVzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkdhbmFkb3Jlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb2xpdGljYXMoUG9saXRpY2FzKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2xpdGljYXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUG9saXRpY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZ2xhbWVudG8oUmVnbGFtZW50byl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiLCBSZWdsYW1lbnRvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWdsYW1lbnRvKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlJlZ2xhbWVudG9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoQWNlcHRhY2lvblRhbG9uYXJpb3Mpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIsIEFjZXB0YWNpb25UYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2VwdGFjaW9uVGFsb25hcmlvcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25vY2VTb3J0ZW8oQ29ub2NlU29ydGVvKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25vY2VTb3J0ZW8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRDb25kaWNpb25lcyhDb25kaWNpb25lcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29uZGljaW9uZXNcIiwgQ29uZGljaW9uZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmRpY2lvbmVzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvbmRpY2lvbmVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhbG9uYXJpb3ModGllbmVUYWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIiwgdGllbmVUYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWxvbmFyaW9zKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaXJzdFJ1bihib29sZWFuKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgYm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RSdW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlblB1YmxpY2lkYWQoUHVibGljaWRhZClcclxuICAgIHtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQdWJsaWNpZGFkXCIsIFB1YmxpY2lkYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlblB1YmxpY2lkYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQdWJsaWNpZGFkXCIpO1xyXG4gICAgfVxyXG59Il19