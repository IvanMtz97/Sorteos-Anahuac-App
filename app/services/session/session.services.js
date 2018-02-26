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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUFvSEEsQ0FBQztJQWxIRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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O0lBQ3BDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFuSFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQW9IMUI7SUFBRCxxQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2UgeyAgIFxuXG4gICAgc2V0TG9nZ2VkSW4oc3RhdHVzKXtcbiAgICAgICAgc2V0Qm9vbGVhbihcImxvZ2dlZEluXCIsIHN0YXR1cyk7XG4gICAgfVxuXG4gICAgbG9nZ2VkSW4oKXtcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJsb2dnZWRJblwiKTtcbiAgICB9XG5cbiAgICBzZXRJbmZvcm1hdGlvbihEYXRhKXtcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiLCBkYXRhKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEluZm9ybWF0aW9uKCl7XG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT1JNQUNJT05cIiwgZGF0YS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBzZXRTb3J0ZW9BY3Rpdm8oRGF0YSl7XG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIsIGRhdGEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U29ydGVvQWN0aXZvKCl7XG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklORk9STUFDSU9OXCIsIGRhdGEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc2V0VG9rZW4oVG9rZW4pe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIFRva2VuKTtcbiAgICAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xuICAgICAgICAvLyBpZihUb2tlbi5sZW5ndGggPCAxKXtcbiAgICAgICAgLy8gICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB0aHJvdyhcIkRlYmVzIGluZ3Jlc2FyIHVuIHRva2VuIHbDoWxpZG9cIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXRUb2tlbigpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVG9rZW5cIik7XG4gICAgfVxuXG4gICAgc2V0R2FuYWRvcmVzKEdhbmFkb3Jlcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FuYWRvcmVzXCIsIEdhbmFkb3Jlcyk7XG4gICAgICAgIHNldFN0cmluZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xuICAgIH1cblxuICAgIGdldEdhbmFkb3Jlcygpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiR2FuYWRvcmVzXCIpO1xuICAgIH1cblxuICAgIHNldFBvbGl0aWNhcyhQb2xpdGljYXMpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBvbGl0aWNhc1wiLCBQb2xpdGljYXMpO1xuICAgICAgICBzZXRTdHJpbmcoXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcbiAgICB9XG5cbiAgICBnZXRQb2xpdGljYXMoKXtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlBvbGl0aWNhc1wiKTtcbiAgICB9XG5cbiAgICBzZXRSZWdsYW1lbnRvKFJlZ2xhbWVudG8pe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XG4gICAgICAgIHNldFN0cmluZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XG4gICAgfVxuXG4gICAgZ2V0UmVnbGFtZW50bygpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiKTtcbiAgICB9XG5cbiAgICBzZXRBY2VwdGFjaW9uVGFsb25hcmlvcyhBY2VwdGFjaW9uVGFsb25hcmlvcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIiwgQWNlcHRhY2lvblRhbG9uYXJpb3MpO1xuICAgICAgICBzZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiLCBBY2VwdGFjaW9uVGFsb25hcmlvcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKXtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIpO1xuICAgIH1cblxuICAgIHNldENvbm9jZVNvcnRlbyhDb25vY2VTb3J0ZW8pe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm9jZVNvcnRlb1wiLCBDb25vY2VTb3J0ZW8pO1xuICAgICAgICBzZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcbiAgICB9XG5cbiAgICBnZXRDb25vY2VTb3J0ZW8oKXtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvbm9jZVNvcnRlb1wiKTtcbiAgICB9XG5cbiAgICBzZXRUYWxvbmFyaW9zKHRpZW5lVGFsb25hcmlvcylcbiAgICB7XG4gICAgICAgIHNldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIiwgdGllbmVUYWxvbmFyaW9zKTtcbiAgICB9XG5cbiAgICBnZXRUYWxvbmFyaW9zKClcbiAgICB7XG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIpO1xuICAgIH1cblxuICAgIHNldEZpcnN0UnVuKGJvb2xlYW4pe1xuICAgICAgICBzZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgYm9vbGVhbik7XG4gICAgfVxuXG4gICAgZ2V0Rmlyc3RSdW4oKXtcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCB0cnVlKTtcbiAgICB9XG59Il19