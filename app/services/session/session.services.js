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
    SessionService.prototype.setTalonarios = function (tieneTalonarios) {
        application_settings_1.setBoolean("tieneTalonarios", tieneTalonarios);
    };
    SessionService.prototype.getTalonarios = function () {
        return application_settings_1.getBoolean("tieneTalonarios");
    };
    SessionService = __decorate([
        core_1.Injectable()
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUFnREEsQ0FBQztJQTlDRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsd0JBQXdCO1FBQ3hCLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsK0NBQStDO1FBQy9DLElBQUk7SUFDUixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsZUFBZTtRQUV6QixpQ0FBVSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBRUksTUFBTSxDQUFDLGlDQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBL0NRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FnRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgZ2V0TnVtYmVyLCBzZXROdW1iZXIsIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHsgICBcblxuICAgIHNldExvZ2dlZEluKHN0YXR1cyl7XG4gICAgICAgIHNldEJvb2xlYW4oXCJsb2dnZWRJblwiLCBzdGF0dXMpO1xuICAgIH1cblxuICAgIGxvZ2dlZEluKCl7XG4gICAgICAgIHJldHVybiBnZXRCb29sZWFuKFwibG9nZ2VkSW5cIik7XG4gICAgfVxuXG4gICAgc2V0SW5mb3JtYXRpb24oRGF0YSl7XG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KERhdGEpO1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIiwgZGF0YSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhyb3coXCJEZWJlcyBlc3BlY2lmaWNhciB1biBwYXJhbWV0cm8gbm8gdmFjaW9cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbmZvcm1hdGlvbigpe1xuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklORk9STUFDSU9OXCIsIGRhdGEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc2V0VG9rZW4oVG9rZW4pe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIFRva2VuKTtcbiAgICAgICAgc2V0U3RyaW5nKFwiVG9rZW5cIiwgVG9rZW4pO1xuICAgICAgICAvLyBpZihUb2tlbi5sZW5ndGggPCAxKXtcbiAgICAgICAgLy8gICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB0aHJvdyhcIkRlYmVzIGluZ3Jlc2FyIHVuIHRva2VuIHbDoWxpZG9cIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXRUb2tlbigpe1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKFwiVG9rZW5cIik7XG4gICAgfVxuXG4gICAgc2V0VGFsb25hcmlvcyh0aWVuZVRhbG9uYXJpb3MpXG4gICAge1xuICAgICAgICBzZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIsIHRpZW5lVGFsb25hcmlvcyk7XG4gICAgfVxuXG4gICAgZ2V0VGFsb25hcmlvcygpXG4gICAge1xuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInRpZW5lVGFsb25hcmlvc1wiKTtcbiAgICB9XG59Il19