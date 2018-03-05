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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUF5SkEsQ0FBQztJQXZKRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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MUI7SUFBRCxxQkFBQztDQUFBLEFBekpELElBeUpDO0FBekpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7ICAgXHJcblxyXG4gICAgc2V0TG9nZ2VkSW4oc3RhdHVzKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwibG9nZ2VkSW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5mb3JtYXRpb24oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvcm1hdGlvbigpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkZPUk1BQ0lPTlwiLCBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U29ydGVvQWN0aXZvKERhdGEpe1xyXG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiLCBkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3coXCJEZWJlcyBlc3BlY2lmaWNhciB1biBwYXJhbWV0cm8gbm8gdmFjaW9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnRlb0FjdGl2bygpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT1JNQUNJT05cIiwgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuKFRva2VuKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIFRva2VuKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gaWYoVG9rZW4ubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgLy8gICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhyb3coXCJEZWJlcyBpbmdyZXNhciB1biB0b2tlbiB2w6FsaWRvXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJUb2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJZENvbGFib3JhZG9yKElkQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSWRDb2xhYm9yYWRvclwiLCBJZENvbGFib3JhZG9yKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJJZENvbGFib3JhZG9yXCIsIElkQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkQ29sYWJvcmFkb3IoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb3JyZW9Db2xhYm9yYWRvcihDb3JyZW9Db2xhYm9yYWRvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3JyZW9Db2xhYm9yYWRvclwiLCBDb3JyZW9Db2xhYm9yYWRvcik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ycmVvQ29sYWJvcmFkb3JcIiwgQ29ycmVvQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvcnJlb0NvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdhbmFkb3JlcyhHYW5hZG9yZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FuYWRvcmVzXCIsIEdhbmFkb3Jlcyk7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiR2FuYWRvcmVzXCIsIEdhbmFkb3Jlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FuYWRvcmVzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkdhbmFkb3Jlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb2xpdGljYXMoUG9saXRpY2FzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBvbGl0aWNhc1wiLCBQb2xpdGljYXMpO1xyXG4gICAgICAgIHNldFN0cmluZyhcIlBvbGl0aWNhc1wiLCBQb2xpdGljYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvbGl0aWNhcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQb2xpdGljYXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVnbGFtZW50byhSZWdsYW1lbnRvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiLCBSZWdsYW1lbnRvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWdsYW1lbnRvKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlJlZ2xhbWVudG9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoQWNlcHRhY2lvblRhbG9uYXJpb3Mpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIiwgQWNlcHRhY2lvblRhbG9uYXJpb3MpO1xyXG4gICAgICAgIHNldFN0cmluZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIsIEFjZXB0YWNpb25UYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2VwdGFjaW9uVGFsb25hcmlvcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25vY2VTb3J0ZW8oQ29ub2NlU29ydGVvKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm9jZVNvcnRlb1wiLCBDb25vY2VTb3J0ZW8pO1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvbm9jZVNvcnRlb1wiLCBDb25vY2VTb3J0ZW8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbm9jZVNvcnRlbygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldENvbmRpY2lvbmVzKENvbmRpY2lvbmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbmRpY2lvbmVzXCIsIENvbmRpY2lvbmVzKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb25kaWNpb25lc1wiLCBDb25kaWNpb25lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZGljaW9uZXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29uZGljaW9uZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFsb25hcmlvcyh0aWVuZVRhbG9uYXJpb3MpXHJcbiAgICB7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiLCB0aWVuZVRhbG9uYXJpb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhbG9uYXJpb3MoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpcnN0UnVuKGJvb2xlYW4pe1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCBib29sZWFuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJzdFJ1bigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VuUHVibGljaWRhZChQdWJsaWNpZGFkKVxyXG4gICAge1xyXG4gICAgICAgIHNldFN0cmluZyhcIlB1YmxpY2lkYWRcIiwgUHVibGljaWRhZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VuUHVibGljaWRhZCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlB1YmxpY2lkYWRcIik7XHJcbiAgICB9XHJcbn0iXX0=