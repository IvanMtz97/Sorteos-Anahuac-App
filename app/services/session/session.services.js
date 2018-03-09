"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setClave = function (Clave) {
        application_settings_1.setString("ClaveLogin", Clave);
    };
    SessionService.prototype.getClave = function () {
        return application_settings_1.getString("ClaveLogin");
    };
    SessionService.prototype.setCorreo = function (Correo) {
        application_settings_1.setString("CorreoLogin", Correo);
    };
    SessionService.prototype.getCorreo = function () {
        return application_settings_1.getString("CorreoLogin");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUF1S0EsQ0FBQztJQXJLRyxpQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixnQ0FBUyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLGdDQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLE1BQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsd0JBQXdCO1FBQ3hCLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsK0NBQStDO1FBQy9DLElBQUk7SUFDUixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsYUFBYTtRQUMxQixnQ0FBUyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDZDQUFvQixHQUFwQixVQUFxQixpQkFBaUI7UUFDbEMsZ0NBQVMsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCw2Q0FBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsZUFBZTtRQUM5QixnQ0FBUyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixnQ0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixnQ0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsVUFBVTtRQUNwQixnQ0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxnREFBdUIsR0FBdkIsVUFBd0Isb0JBQW9CO1FBQ3hDLGdDQUFTLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZ0RBQXVCLEdBQXZCO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixZQUFZO1FBQ3hCLGdDQUFTLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxXQUFXO1FBQ3RCLGdDQUFTLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxlQUFlO1FBRXpCLGlDQUFVLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFFSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNmLGlDQUFVLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsVUFBVTtRQUUxQixnQ0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBRUksTUFBTSxDQUFDLGdDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXRLUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBdUsxQjtJQUFELHFCQUFDO0NBQUEsQUF2S0QsSUF1S0M7QUF2S1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgZ2V0TnVtYmVyLCBzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHsgICBcclxuXHJcbiAgICBzZXRDbGF2ZShDbGF2ZTogc3RyaW5nKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDbGF2ZUxvZ2luXCIsIENsYXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGF2ZSgpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDbGF2ZUxvZ2luXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvcnJlbyhDb3JyZW86IHN0cmluZyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ycmVvTG9naW5cIiwgQ29ycmVvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3JyZW8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ycmVvTG9naW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9nZ2VkSW4oc3RhdHVzKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwibG9nZ2VkSW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5mb3JtYXRpb24oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvcm1hdGlvbigpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3J0ZW9BY3Rpdm8oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIsIGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydGVvQWN0aXZvKCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2tlbihUb2tlbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0tFTlwiLCBUb2tlbik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xyXG4gICAgICAgIC8vIGlmKFRva2VuLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIC8vICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRocm93KFwiRGViZXMgaW5ncmVzYXIgdW4gdG9rZW4gdsOhbGlkb1wiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWRDb2xhYm9yYWRvcihJZENvbGFib3JhZG9yKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJJZENvbGFib3JhZG9yXCIsIElkQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkQ29sYWJvcmFkb3IoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb3JyZW9Db2xhYm9yYWRvcihDb3JyZW9Db2xhYm9yYWRvcil7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ycmVvQ29sYWJvcmFkb3JcIiwgQ29ycmVvQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvcnJlb0NvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhc3NDb2xhYm9yYWRvcihQYXNzQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIHNldFN0cmluZyhcIlBhc3NDb2xhYm9yYWRvclwiLCBQYXNzQ29sYWJvcmFkb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3NDb2xhYm9yYWRvcigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQYXNzQ29sYWJvcmFkb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2FuYWRvcmVzKEdhbmFkb3Jlcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiR2FuYWRvcmVzXCIsIEdhbmFkb3Jlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FuYWRvcmVzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkdhbmFkb3Jlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb2xpdGljYXMoUG9saXRpY2FzKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQb2xpdGljYXNcIiwgUG9saXRpY2FzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2xpdGljYXMoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUG9saXRpY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZ2xhbWVudG8oUmVnbGFtZW50byl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiLCBSZWdsYW1lbnRvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWdsYW1lbnRvKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlJlZ2xhbWVudG9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoQWNlcHRhY2lvblRhbG9uYXJpb3Mpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkFjZXB0YWNpb25UYWxvbmFyaW9zXCIsIEFjZXB0YWNpb25UYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2VwdGFjaW9uVGFsb25hcmlvcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25vY2VTb3J0ZW8oQ29ub2NlU29ydGVvKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIiwgQ29ub2NlU29ydGVvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25vY2VTb3J0ZW8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRDb25kaWNpb25lcyhDb25kaWNpb25lcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29uZGljaW9uZXNcIiwgQ29uZGljaW9uZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmRpY2lvbmVzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvbmRpY2lvbmVzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhbG9uYXJpb3ModGllbmVUYWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIHNldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIiwgdGllbmVUYWxvbmFyaW9zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWxvbmFyaW9zKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaXJzdFJ1bihib29sZWFuKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgYm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RSdW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlblB1YmxpY2lkYWQoUHVibGljaWRhZClcclxuICAgIHtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQdWJsaWNpZGFkXCIsIFB1YmxpY2lkYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlblB1YmxpY2lkYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQdWJsaWNpZGFkXCIpO1xyXG4gICAgfVxyXG59Il19