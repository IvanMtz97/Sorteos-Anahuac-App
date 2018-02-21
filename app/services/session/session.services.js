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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQWlJO0FBR2pJO0lBQUE7SUFnREEsQ0FBQztJQTlDRyxvQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLGlDQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsd0JBQXdCO1FBQ3hCLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsK0NBQStDO1FBQy9DLElBQUk7SUFDUixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsZUFBZTtRQUV6QixpQ0FBVSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBRUksTUFBTSxDQUFDLGlDQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBL0NRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FnRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlciwgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2UgeyAgIFxyXG5cclxuICAgIHNldExvZ2dlZEluKHN0YXR1cyl7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihcImxvZ2dlZEluXCIsIHN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VkSW4oKXtcclxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcImxvZ2dlZEluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluZm9ybWF0aW9uKERhdGEpe1xyXG4gICAgICAgIGlmKERhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoRGF0YSk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZyhcIkluZm9ybWF0aW9uXCIsIGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyhcIkRlYmVzIGVzcGVjaWZpY2FyIHVuIHBhcmFtZXRybyBubyB2YWNpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mb3JtYXRpb24oKXtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwiSW5mb3JtYXRpb25cIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT1JNQUNJT05cIiwgZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRva2VuKFRva2VuKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIsIFRva2VuKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJUb2tlblwiLCBUb2tlbik7XHJcbiAgICAgICAgLy8gaWYoVG9rZW4ubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgLy8gICAgIHNldFN0cmluZyhcIlRva2VuXCIsIFRva2VuKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhyb3coXCJEZWJlcyBpbmdyZXNhciB1biB0b2tlbiB2w6FsaWRvXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2tlbigpe1xyXG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJUb2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYWxvbmFyaW9zKHRpZW5lVGFsb25hcmlvcylcclxuICAgIHtcclxuICAgICAgICBzZXRCb29sZWFuKFwidGllbmVUYWxvbmFyaW9zXCIsIHRpZW5lVGFsb25hcmlvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFsb25hcmlvcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW4oXCJ0aWVuZVRhbG9uYXJpb3NcIik7XHJcbiAgICB9XHJcbn0iXX0=