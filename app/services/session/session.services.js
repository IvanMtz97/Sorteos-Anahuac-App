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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUFvSEEsQ0FBQztJQWxIRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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O0lBQ3BDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFuSFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQW9IMUI7SUFBRCxxQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7ICAgXHJcblxyXG4gICAgc2V0TG9nZ2VkSW4oc3RhdHVzKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwibG9nZ2VkSW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5mb3JtYXRpb24oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvcm1hdGlvbigpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkZPUk1BQ0lPTlwiLCBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U29ydGVvQWN0aXZvKERhdGEpe1xyXG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiLCBkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhyb3coXCJEZWJlcyBlc3BlY2lmaWNhciB1biBwYXJhbWV0cm8gbm8gdmFjaW9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnRlb0FjdGl2bygpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT1JNQUNJT05cIiwgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuKFRva2VuKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIFRva2VuKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gaWYoVG9rZW4ubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgLy8gICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhyb3coXCJEZWJlcyBpbmdyZXNhciB1biB0b2tlbiB2w6FsaWRvXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJUb2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHYW5hZG9yZXMoR2FuYWRvcmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xyXG4gICAgICAgIHNldFN0cmluZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbmFkb3Jlcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJHYW5hZG9yZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9saXRpY2FzKFBvbGl0aWNhcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2xpdGljYXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUG9saXRpY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZ2xhbWVudG8oUmVnbGFtZW50byl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWdsYW1lbnRvXCIsIFJlZ2xhbWVudG8pO1xyXG4gICAgICAgIHNldFN0cmluZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVnbGFtZW50bygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEFjZXB0YWNpb25UYWxvbmFyaW9zKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIsIEFjZXB0YWNpb25UYWxvbmFyaW9zKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiLCBBY2VwdGFjaW9uVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ub2NlU29ydGVvKENvbm9jZVNvcnRlbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25vY2VTb3J0ZW8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhbG9uYXJpb3ModGllbmVUYWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIiwgdGllbmVUYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWxvbmFyaW9zKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaXJzdFJ1bihib29sZWFuKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgYm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RSdW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIHRydWUpO1xyXG4gICAgfVxyXG59Il19