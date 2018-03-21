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
    SessionService.prototype.setTokenDevice = function (TokenDevice) {
        console.log("TokenDevice", TokenDevice);
        application_settings_1.setString("TokenDevice", TokenDevice);
        // if(TokenDevice.length < 1){
        //     setString("TokenDevice", TokenDevice);
        // }else{
        //     throw("Debes ingresar un TokenDevice válido");
        // }
    };
    SessionService.prototype.getTokenDevice = function () {
        return application_settings_1.getString("TokenDevice");
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
    SessionService.prototype.getMiCuenta = function () {
        return application_settings_1.getString("MiCuenta");
    };
    SessionService.prototype.setMiCuenta = function (MiCuenta) {
        application_settings_1.setString("MiCuenta", MiCuenta);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUEyTUEsQ0FBQztJQXpNRywrQkFBTSxHQUFOLFVBQU8sR0FBRztRQUVOLGdDQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBRUksTUFBTSxDQUFDLGdDQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLGdDQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLGdDQUFTLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxn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QUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBRUksTUFBTSxDQUFDLGlDQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQU87UUFDZixpQ0FBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQW1CLEdBQW5CLFVBQW9CLFVBQVU7UUFFMUIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUVJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUExTVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQTJNMUI7SUFBRCxxQkFBQztDQUFBLEFBM01ELElBMk1DO0FBM01ZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLCBnZXRTdHJpbmcsIHNldFN0cmluZywgaGFzS2V5LCByZW1vdmUsIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7IFxyXG4gICAgXHJcbiAgICBzZXRVUkwodXJsKVxyXG4gICAge1xyXG4gICAgICAgIHNldFN0cmluZyhcInVybFwiLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVSTCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcInVybFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDbGF2ZShDbGF2ZTogc3RyaW5nKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJDbGF2ZUxvZ2luXCIsIENsYXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGF2ZSgpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDbGF2ZUxvZ2luXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvcnJlbyhDb3JyZW86IHN0cmluZyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ycmVvTG9naW5cIiwgQ29ycmVvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3JyZW8oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ycmVvTG9naW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9nZ2VkSW4oc3RhdHVzKXtcclxuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwibG9nZ2VkSW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5mb3JtYXRpb24oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIiwgZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvcm1hdGlvbigpe1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJJbmZvcm1hdGlvblwiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3J0ZW9BY3Rpdm8oRGF0YSl7XHJcbiAgICAgICAgaWYoRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIsIGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydGVvQWN0aXZvKCl7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIlNvcnRlb0FjdGl2b1wiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2tlbihUb2tlbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0tFTlwiLCBUb2tlbik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xyXG4gICAgICAgIC8vIGlmKFRva2VuLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIC8vICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIHRocm93KFwiRGViZXMgaW5ncmVzYXIgdW4gdG9rZW4gdsOhbGlkb1wiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG9rZW5EZXZpY2UoVG9rZW5EZXZpY2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW5EZXZpY2VcIiwgVG9rZW5EZXZpY2UpO1xyXG4gICAgICAgIHNldFN0cmluZyhcIlRva2VuRGV2aWNlXCIsIFRva2VuRGV2aWNlKTtcclxuICAgICAgICAvLyBpZihUb2tlbkRldmljZS5sZW5ndGggPCAxKXtcclxuICAgICAgICAvLyAgICAgc2V0U3RyaW5nKFwiVG9rZW5EZXZpY2VcIiwgVG9rZW5EZXZpY2UpO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICB0aHJvdyhcIkRlYmVzIGluZ3Jlc2FyIHVuIFRva2VuRGV2aWNlIHbDoWxpZG9cIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRva2VuRGV2aWNlKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlRva2VuRGV2aWNlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElkQ29sYWJvcmFkb3IoSWRDb2xhYm9yYWRvcil7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiLCBJZENvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZENvbGFib3JhZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIklkQ29sYWJvcmFkb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ycmVvQ29sYWJvcmFkb3IoQ29ycmVvQ29sYWJvcmFkb3Ipe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIsIENvcnJlb0NvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3JyZW9Db2xhYm9yYWRvcigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb3JyZW9Db2xhYm9yYWRvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXNzQ29sYWJvcmFkb3IoUGFzc0NvbGFib3JhZG9yKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJQYXNzQ29sYWJvcmFkb3JcIiwgUGFzc0NvbGFib3JhZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXNzQ29sYWJvcmFkb3IoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUGFzc0NvbGFib3JhZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdhbmFkb3JlcyhHYW5hZG9yZXMpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkdhbmFkb3Jlc1wiLCBHYW5hZG9yZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbmFkb3Jlcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJHYW5hZG9yZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWlDdWVudGEoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJNaUN1ZW50YVwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0TWlDdWVudGEoTWlDdWVudGEpXHJcbiAgICB7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiTWlDdWVudGFcIiwgTWlDdWVudGEpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgc2V0UG9saXRpY2FzKFBvbGl0aWNhcyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUG9saXRpY2FzXCIsIFBvbGl0aWNhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9saXRpY2FzKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlBvbGl0aWNhc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWdsYW1lbnRvKFJlZ2xhbWVudG8pe1xyXG4gICAgICAgIHNldFN0cmluZyhcIlJlZ2xhbWVudG9cIiwgUmVnbGFtZW50byk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVnbGFtZW50bygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEFjZXB0YWNpb25UYWxvbmFyaW9zKXtcclxuICAgICAgICBzZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiLCBBY2VwdGFjaW9uVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNlcHRhY2lvblRhbG9uYXJpb3MoKXtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29ub2NlU29ydGVvKENvbm9jZVNvcnRlbyl7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIsIENvbm9jZVNvcnRlbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29ub2NlU29ydGVvKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkNvbm9jZVNvcnRlb1wiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0Q29uZGljaW9uZXMoQ29uZGljaW9uZXMpe1xyXG4gICAgICAgIHNldFN0cmluZyhcIkNvbmRpY2lvbmVzXCIsIENvbmRpY2lvbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25kaWNpb25lcygpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb25kaWNpb25lc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYWxvbmFyaW9zKHRpZW5lVGFsb25hcmlvcylcclxuICAgIHtcclxuICAgICAgICBzZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIsIHRpZW5lVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFsb25hcmlvcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rmlyc3RSdW4oYm9vbGVhbil7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihcImZpcnN0cnVuXCIsIGJvb2xlYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpcnN0UnVuKCl7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZW5QdWJsaWNpZGFkKFB1YmxpY2lkYWQpXHJcbiAgICB7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwiUHVibGljaWRhZFwiLCBQdWJsaWNpZGFkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZW5QdWJsaWNpZGFkKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUHVibGljaWRhZFwiKTtcclxuICAgIH1cclxufSJdfQ==