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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUErTEEsQ0FBQztJQTdMRywrQkFBTSxHQUFOLFVBQU8sR0FBRztRQUVOLGdDQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBRUksTUFBTSxDQUFDLGdDQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLGdDQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3BCLGdDQUFTLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxnQ0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCwrQ0FBK0M7UUFDL0MsSUFBSTtJQUNSLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxXQUFXO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLGdDQUFTLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLDhCQUE4QjtRQUM5Qiw2Q0FBNkM7UUFDN0MsU0FBUztRQUNULHFEQUFxRDtRQUNyRCxJQUFJO0lBQ1IsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLGFBQWE7UUFDMUIsZ0NBQVMsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsaUJBQWlCO1FBQ2xDLGdDQUFTLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLGVBQWU7UUFDOUIsZ0NBQVMsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLFNBQVM7UUFDbEIsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLFNBQVM7UUFDbEIsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLFVBQVU7UUFDcEIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0RBQXVCLEdBQXZCLFVBQXdCLG9CQUFvQjtRQUN4QyxnQ0FBUyxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGdEQUF1QixHQUF2QjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsWUFBWTtRQUN4QixnQ0FBUyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsV0FBVztRQUN0QixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsZUFBZTtRQUV6QixpQ0FBVSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBRUksTUFBTSxDQUFDLGlDQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQU87UUFDZixpQ0FBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxpQ0FBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNENBQW1CLEdBQW5CLFVBQW9CLFVBQVU7UUFFMUIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUVJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUE5TFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQStMMUI7SUFBRCxxQkFBQztDQUFBLEFBL0xELElBK0xDO0FBL0xZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2UgeyBcbiAgICBcbiAgICBzZXRVUkwodXJsKVxuICAgIHtcbiAgICAgICAgc2V0U3RyaW5nKFwidXJsXCIsIHVybCk7XG4gICAgfVxuXG4gICAgZ2V0VVJMKClcbiAgICB7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJ1cmxcIik7XG4gICAgfVxuXG4gICAgc2V0Q2xhdmUoQ2xhdmU6IHN0cmluZyl7XG4gICAgICAgIHNldFN0cmluZyhcIkNsYXZlTG9naW5cIiwgQ2xhdmUpO1xuICAgIH1cblxuICAgIGdldENsYXZlKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDbGF2ZUxvZ2luXCIpO1xuICAgIH1cblxuICAgIHNldENvcnJlbyhDb3JyZW86IHN0cmluZyl7XG4gICAgICAgIHNldFN0cmluZyhcIkNvcnJlb0xvZ2luXCIsIENvcnJlbyk7XG4gICAgfVxuXG4gICAgZ2V0Q29ycmVvKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb3JyZW9Mb2dpblwiKTtcbiAgICB9XG5cbiAgICBzZXRMb2dnZWRJbihzdGF0dXMpe1xuICAgICAgICBzZXRCb29sZWFuKFwibG9nZ2VkSW5cIiwgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImxvZ2dlZEluXCIpO1xuICAgIH1cblxuICAgIHNldEluZm9ybWF0aW9uKERhdGEpe1xuICAgICAgICBpZihEYXRhLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShEYXRhKTtcbiAgICAgICAgICAgIHNldFN0cmluZyhcIkluZm9ybWF0aW9uXCIsIGRhdGEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5mb3JtYXRpb24oKXtcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGdldFN0cmluZyhcIkluZm9ybWF0aW9uXCIpKTsgICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBzZXRTb3J0ZW9BY3Rpdm8oRGF0YSl7XG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwiU29ydGVvQWN0aXZvXCIsIGRhdGEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRocm93KFwiRGViZXMgZXNwZWNpZmljYXIgdW4gcGFyYW1ldHJvIG5vIHZhY2lvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U29ydGVvQWN0aXZvKCl7XG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJTb3J0ZW9BY3Rpdm9cIikpOyAgICAgICAgXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHNldFRva2VuKFRva2VuKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0tFTlwiLCBUb2tlbik7XG4gICAgICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcbiAgICAgICAgLy8gaWYoVG9rZW4ubGVuZ3RoIDwgMSl7XG4gICAgICAgIC8vICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgdGhyb3coXCJEZWJlcyBpbmdyZXNhciB1biB0b2tlbiB2w6FsaWRvXCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlRva2VuXCIpO1xuICAgIH1cblxuICAgIHNldFRva2VuRGV2aWNlKFRva2VuRGV2aWNlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2tlbkRldmljZVwiLCBUb2tlbkRldmljZSk7XG4gICAgICAgIHNldFN0cmluZyhcIlRva2VuRGV2aWNlXCIsIFRva2VuRGV2aWNlKTtcbiAgICAgICAgLy8gaWYoVG9rZW5EZXZpY2UubGVuZ3RoIDwgMSl7XG4gICAgICAgIC8vICAgICBzZXRTdHJpbmcoXCJUb2tlbkRldmljZVwiLCBUb2tlbkRldmljZSk7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgdGhyb3coXCJEZWJlcyBpbmdyZXNhciB1biBUb2tlbkRldmljZSB2w6FsaWRvXCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0VG9rZW5EZXZpY2UoKXtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlRva2VuRGV2aWNlXCIpO1xuICAgIH1cblxuICAgIHNldElkQ29sYWJvcmFkb3IoSWRDb2xhYm9yYWRvcil7XG4gICAgICAgIHNldFN0cmluZyhcIklkQ29sYWJvcmFkb3JcIiwgSWRDb2xhYm9yYWRvcik7XG4gICAgfVxuXG4gICAgZ2V0SWRDb2xhYm9yYWRvcigpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiSWRDb2xhYm9yYWRvclwiKTtcbiAgICB9XG5cbiAgICBzZXRDb3JyZW9Db2xhYm9yYWRvcihDb3JyZW9Db2xhYm9yYWRvcil7XG4gICAgICAgIHNldFN0cmluZyhcIkNvcnJlb0NvbGFib3JhZG9yXCIsIENvcnJlb0NvbGFib3JhZG9yKTtcbiAgICB9XG5cbiAgICBnZXRDb3JyZW9Db2xhYm9yYWRvcigpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiQ29ycmVvQ29sYWJvcmFkb3JcIik7XG4gICAgfVxuXG4gICAgc2V0UGFzc0NvbGFib3JhZG9yKFBhc3NDb2xhYm9yYWRvcil7XG4gICAgICAgIHNldFN0cmluZyhcIlBhc3NDb2xhYm9yYWRvclwiLCBQYXNzQ29sYWJvcmFkb3IpO1xuICAgIH1cblxuICAgIGdldFBhc3NDb2xhYm9yYWRvcigpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiUGFzc0NvbGFib3JhZG9yXCIpO1xuICAgIH1cblxuICAgIHNldEdhbmFkb3JlcyhHYW5hZG9yZXMpe1xuICAgICAgICBzZXRTdHJpbmcoXCJHYW5hZG9yZXNcIiwgR2FuYWRvcmVzKTtcbiAgICB9XG5cbiAgICBnZXRHYW5hZG9yZXMoKXtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIkdhbmFkb3Jlc1wiKTtcbiAgICB9XG5cbiAgICBzZXRQb2xpdGljYXMoUG9saXRpY2FzKXtcbiAgICAgICAgc2V0U3RyaW5nKFwiUG9saXRpY2FzXCIsIFBvbGl0aWNhcyk7XG4gICAgfVxuXG4gICAgZ2V0UG9saXRpY2FzKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJQb2xpdGljYXNcIik7XG4gICAgfVxuXG4gICAgc2V0UmVnbGFtZW50byhSZWdsYW1lbnRvKXtcbiAgICAgICAgc2V0U3RyaW5nKFwiUmVnbGFtZW50b1wiLCBSZWdsYW1lbnRvKTtcbiAgICB9XG5cbiAgICBnZXRSZWdsYW1lbnRvKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJSZWdsYW1lbnRvXCIpO1xuICAgIH1cblxuICAgIHNldEFjZXB0YWNpb25UYWxvbmFyaW9zKEFjZXB0YWNpb25UYWxvbmFyaW9zKXtcbiAgICAgICAgc2V0U3RyaW5nKFwiQWNlcHRhY2lvblRhbG9uYXJpb3NcIiwgQWNlcHRhY2lvblRhbG9uYXJpb3MpO1xuICAgIH1cblxuICAgIGdldEFjZXB0YWNpb25UYWxvbmFyaW9zKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJBY2VwdGFjaW9uVGFsb25hcmlvc1wiKTtcbiAgICB9XG5cbiAgICBzZXRDb25vY2VTb3J0ZW8oQ29ub2NlU29ydGVvKXtcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29ub2NlU29ydGVvXCIsIENvbm9jZVNvcnRlbyk7XG4gICAgfVxuXG4gICAgZ2V0Q29ub2NlU29ydGVvKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb25vY2VTb3J0ZW9cIik7XG4gICAgfVxuICAgIFxuICAgIHNldENvbmRpY2lvbmVzKENvbmRpY2lvbmVzKXtcbiAgICAgICAgc2V0U3RyaW5nKFwiQ29uZGljaW9uZXNcIiwgQ29uZGljaW9uZXMpO1xuICAgIH1cblxuICAgIGdldENvbmRpY2lvbmVzKCl7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJDb25kaWNpb25lc1wiKTtcbiAgICB9XG5cbiAgICBzZXRUYWxvbmFyaW9zKHRpZW5lVGFsb25hcmlvcylcbiAgICB7XG4gICAgICAgIHNldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIiwgdGllbmVUYWxvbmFyaW9zKTtcbiAgICB9XG5cbiAgICBnZXRUYWxvbmFyaW9zKClcbiAgICB7XG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIpO1xuICAgIH1cblxuICAgIHNldEZpcnN0UnVuKGJvb2xlYW4pe1xuICAgICAgICBzZXRCb29sZWFuKFwiZmlyc3RydW5cIiwgYm9vbGVhbik7XG4gICAgfVxuXG4gICAgZ2V0Rmlyc3RSdW4oKXtcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJmaXJzdHJ1blwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzZXRJbWFnZW5QdWJsaWNpZGFkKFB1YmxpY2lkYWQpXG4gICAge1xuICAgICAgICBzZXRTdHJpbmcoXCJQdWJsaWNpZGFkXCIsIFB1YmxpY2lkYWQpO1xuICAgIH1cblxuICAgIGdldEltYWdlblB1YmxpY2lkYWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcIlB1YmxpY2lkYWRcIik7XG4gICAgfVxufSJdfQ==