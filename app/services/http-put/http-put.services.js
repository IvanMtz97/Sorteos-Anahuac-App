"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var session_services_1 = require("../session/session.services");
var MyHttpPutService = /** @class */ (function () {
    function MyHttpPutService(http, session) {
        this.http = http;
        this.session = session;
        //private serverUrl = "https://web-clara-p1.azurewebsites.net/";
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    }
    MyHttpPutService.prototype.putData = function (data, path) {
        console.log("LLAMA A LA API ", path, data);
        var options = this.createRequestOptions();
        return this.http.put((this.serverUrl + path), { data: data }, { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpPutService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.set("Authorization", "Bearer " + this.session.getToken());
        headers.set("Content-Type", "application/json");
        return headers;
    };
    MyHttpPutService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, session_services_1.SessionService])
    ], MyHttpPutService);
    return MyHttpPutService;
}());
exports.MyHttpPutService = MyHttpPutService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wdXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLXB1dC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxpQ0FBK0I7QUFDL0Isc0NBQXdEO0FBR3hELGdFQUE0RDtBQUc1RDtJQUlJLDBCQUFvQixJQUFVLEVBQVUsT0FBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSC9ELGdFQUFnRTtRQUN4RCxjQUFTLEdBQUcsNkRBQTZELENBQUM7SUFFZixDQUFDO0lBRXBFLGtDQUFPLEdBQVAsVUFBUSxJQUFTLEVBQUUsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLCtDQUFvQixHQUE1QjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWxCUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSSxFQUFtQixpQ0FBYztPQUp0RCxnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlIdHRwUHV0U2VydmljZSB7XG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly93ZWItY2xhcmEtcDEuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vc29ydGVvYW5haHVhYy1zZXJ2aWNpb3MtbW9iaWxlLXAuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHsgfVxuXG4gICAgcHV0RGF0YShkYXRhOiBhbnksIHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMTEFNQSBBIExBIEFQSSBcIiwgcGF0aCwgZGF0YSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSwgeyBkYXRhIH0sIHsgaGVhZGVyczogb3B0aW9ucyB9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuc2Vzc2lvbi5nZXRUb2tlbigpKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59Il19