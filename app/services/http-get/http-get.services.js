"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> http-get-service
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var base64 = require("base-64");
var utf8 = require("utf8");
var session_services_1 = require("../session/session.services");
var MyHttpGetService = /** @class */ (function () {
    function MyHttpGetService(http, session) {
        this.http = http;
        this.session = session;
        //private serverUrl = "https://web-clara-p1.azurewebsites.net/";
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    }
    MyHttpGetService.prototype.getData = function (path) {
        var headers = this.createRequestHeader();
        return this.http.get((encodeURI(this.serverUrl + path)), { headers: headers })
            .map(function (res) { return res; });
    };
    MyHttpGetService.prototype.getLogin = function (data, path) {
        var options = this.createRequestOptionsLogin(data);
        return this.http.get((encodeURI(this.serverUrl + path)), { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpGetService.prototype.getDataAuthorization = function (path) {
        var headers = this.createRequestHeaderAuthorization();
        return this.http.get((encodeURI(this.serverUrl + path)), { headers: headers })
            .map(function (res) { return res; });
    };
    MyHttpGetService.prototype.createRequestHeaderAuthorization = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        headers.set("Authorization", "Bearer " + this.session.getToken());
        headers.set("Content-Type", "application/json");
        return headers;
    };
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        headers.set("Content-Type", "application/json");
        return headers;
    };
    MyHttpGetService.prototype.createRequestOptionsLogin = function (data) {
        var model = data, email = model.email.toLowerCase(), password = model.password;
        var str = email + ":" + password;
        var bytes = utf8.encode(str);
        var headers = new http_1.Headers();
        headers.set("Authorization", "Basic " + base64.encode(bytes));
        headers.set("Content-Type", "application/json");
        return headers;
    };
    MyHttpGetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, session_services_1.SessionService])
    ], MyHttpGetService);
    return MyHttpGetService;
}());
exports.MyHttpGetService = MyHttpGetService;
// << http-get-service 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1nZXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWdldC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFFM0Msc0NBQXdEO0FBQ3hELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQUM3QixnRUFBNEQ7QUFHNUQ7SUFJSSwwQkFBb0IsSUFBVSxFQUFVLE9BQXVCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUgvRCxnRUFBZ0U7UUFDeEQsY0FBUyxHQUFHLDZEQUE2RCxDQUFDO0lBRWYsQ0FBQztJQUVwRSxrQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsSUFBUyxFQUFFLElBQUk7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSyxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU8sMkRBQWdDLEdBQXhDO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLDhDQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sb0RBQXlCLEdBQWpDLFVBQWtDLElBQUk7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUNKLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNqQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQW5EUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSSxFQUFtQixpQ0FBYztPQUp0RCxnQkFBZ0IsQ0FvRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSw0Q0FBZ0I7QUFxRDdCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGh0dHAtZ2V0LXNlcnZpY2VcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlIdHRwR2V0U2VydmljZSB7XG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly93ZWItY2xhcmEtcDEuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vc29ydGVvYW5haHVhYy1zZXJ2aWNpb3MtbW9iaWxlLXAuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0RGF0YShwYXRoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KChlbmNvZGVVUkkodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcbiAgICB9XG5cbiAgICBnZXRMb2dpbihkYXRhOiBhbnksIHBhdGgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zTG9naW4oZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KChlbmNvZGVVUkkodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSksIHsgaGVhZGVyczogb3B0aW9ucyB9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcbiAgICB9XG5cbiAgICBnZXREYXRhQXV0aG9yaXphdGlvbihwYXRoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyQXV0aG9yaXphdGlvbigpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoZW5jb2RlVVJJKHRoaXMuc2VydmVyVXJsICsgcGF0aCkpLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+ICByZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlckF1dGhvcml6YXRpb24oKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuc2Vzc2lvbi5nZXRUb2tlbigpKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnNMb2dpbihkYXRhKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsID0gbW9kZWwuZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSBtb2RlbC5wYXNzd29yZDtcbiAgICAgICAgdmFyIHN0ciA9IGVtYWlsICsgXCI6XCIgKyBwYXNzd29yZDtcbiAgICAgICAgdmFyIGJ5dGVzID0gdXRmOC5lbmNvZGUoc3RyKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJhc2U2NC5lbmNvZGUoYnl0ZXMpKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG4vLyA8PCBodHRwLWdldC1zZXJ2aWNlIl19