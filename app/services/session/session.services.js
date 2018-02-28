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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUE2SEEsQ0FBQztJQTNIRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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YixVQUFjLGVBQWU7UUFFekIsaUNBQVUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUVJLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2YsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTVIUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBNkgxQjtJQUFELHFCQUFDO0NBQUEsQUE3SEQsSUE2SEM7QUE3SFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7ICAgXG5cbiAgICBzZXRMb2dnZWRJbihzdGF0dXMpe1xuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImxvZ2dlZEluXCIpO1xuICAgIH1cblxuICAgIHNldEluZm9ybWF0aW9uKERhdGEpe1xuICAgICAgICBpZihEYXRhLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcbiAgICAgICAgICAgIHNldFN0cmluZyhcIkluZm9ybWF0aW9uXCIsIGRhdGEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5mb3JtYXRpb24oKXtcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIkluZm9ybWF0aW9uXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkZPUk1BQ0lPTlwiLCBkYXRhLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHNldFNvcnRlb0FjdGl2byhEYXRhKXtcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIiwgZGF0YSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhyb3coXCJEZWJlcyBlc3BlY2lmaWNhciB1biBwYXJhbWV0cm8gbm8gdmFjaW9cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTb3J0ZW9BY3Rpdm8oKXtcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT1JNQUNJT05cIiwgZGF0YS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBzZXRUb2tlbihUb2tlbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVE9LRU5cIiwgVG9rZW4pO1xuICAgICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XG4gICAgICAgIC8vIGlmKFRva2VuLmxlbmd0aCA8IDEpe1xuICAgICAgICAvLyAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIHRocm93KFwiRGViZXMgaW5ncmVzYXIgdW4gdG9rZW4gdsOhbGlkb1wiKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldFRva2VuKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJUb2tlblwiKTtcbiAgICB9XG5cbiAgICBzZXRJZENvbGFib3JhZG9yKElkQ29sYWJvcmFkb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcIklkQ29sYWJvcmFkb3JcIiwgSWRDb2xhYm9yYWRvcik7XG4gICAgICAgIHNldFN0cmluZyhcIklkQ29sYWJvcmFkb3JcIiwgSWRDb2xhYm9yYWRvcik7XG4gICAgfVxuXG4gICAgZ2V0SWRDb2xhYm9yYWRvcigpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiKTtcbiAgICB9XG5cbiAgICBzZXRHYW5hZG9yZXMoR2FuYWRvcmVzKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW5hZG9yZXNcIiwgR2FuYWRvcmVzKTtcbiAgICAgICAgc2V0U3RyaW5nKFwiR2FuYWRvcmVzXCIsIEdhbmFkb3Jlcyk7XG4gICAgfVxuXG4gICAgZ2V0R2FuYWRvcmVzKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJHYW5hZG9yZXNcIik7XG4gICAgfVxuXG4gICAgc2V0UG9saXRpY2FzKFBvbGl0aWNhcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUG9saXRpY2FzXCIsIFBvbGl0aWNhcyk7XG4gICAgICAgIHNldFN0cmluZyhcIlBvbGl0aWNhc1wiLCBQb2xpdGljYXMpO1xuICAgIH1cblxuICAgIGdldFBvbGl0aWNhcygpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUG9saXRpY2FzXCIpO1xuICAgIH1cblxuICAgIHNldFJlZ2xhbWVudG8oUmVnbGFtZW50byl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVnbGFtZW50b1wiLCBSZWdsYW1lbnRvKTtcbiAgICAgICAgc2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiLCBSZWdsYW1lbnRvKTtcbiAgICB9XG5cbiAgICBnZXRSZWdsYW1lbnRvKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIpO1xuICAgIH1cblxuICAgIHNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEFjZXB0YWNpb25UYWxvbmFyaW9zKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiLCBBY2VwdGFjaW9uVGFsb25hcmlvcyk7XG4gICAgICAgIHNldFN0cmluZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIsIEFjZXB0YWNpb25UYWxvbmFyaW9zKTtcbiAgICB9XG5cbiAgICBnZXRBY2VwdGFjaW9uVGFsb25hcmlvcygpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIik7XG4gICAgfVxuXG4gICAgc2V0Q29ub2NlU29ydGVvKENvbm9jZVNvcnRlbyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ub2NlU29ydGVvXCIsIENvbm9jZVNvcnRlbyk7XG4gICAgICAgIHNldFN0cmluZyhcIkNvbm9jZVNvcnRlb1wiLCBDb25vY2VTb3J0ZW8pO1xuICAgIH1cblxuICAgIGdldENvbm9jZVNvcnRlbygpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIpO1xuICAgIH1cblxuICAgIHNldFRhbG9uYXJpb3ModGllbmVUYWxvbmFyaW9zKVxuICAgIHtcbiAgICAgICAgc2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiLCB0aWVuZVRhbG9uYXJpb3MpO1xuICAgIH1cblxuICAgIGdldFRhbG9uYXJpb3MoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIik7XG4gICAgfVxuXG4gICAgc2V0Rmlyc3RSdW4oYm9vbGVhbil7XG4gICAgICAgIHNldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCBib29sZWFuKTtcbiAgICB9XG5cbiAgICBnZXRGaXJzdFJ1bigpe1xuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIHRydWUpO1xuICAgIH1cbn0iXX0=