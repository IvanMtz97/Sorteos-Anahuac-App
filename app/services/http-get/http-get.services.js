"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> http-get-service
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var base64 = require("base-64");
var utf8 = require("utf8");
var MyHttpGetService = /** @class */ (function () {
    function MyHttpGetService(http) {
        this.http = http;
        this.serverUrl = "http://web-clara-p1.azurewebsites.net/";
    }
    MyHttpGetService.prototype.getData = function (path) {
        var headers = this.createRequestHeader();
        return this.http.get((this.serverUrl + path), { headers: headers })
            .map(function (res) { return res; });
    };
    MyHttpGetService.prototype.getLogin = function (data, path) {
        var options = this.createRequestOptionsLogin(data);
        return this.http.get((this.serverUrl + path), { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpGetService.prototype.getResponseInfo = function (path) {
        var headers = this.createRequestHeader();
        return this.http.get((this.serverUrl + path), { headers: headers })
            .do(function (res) { return res; });
    };
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
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
        __metadata("design:paramtypes", [http_1.Http])
    ], MyHttpGetService);
    return MyHttpGetService;
}());
exports.MyHttpGetService = MyHttpGetService;
// << http-get-service 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1nZXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWdldC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFFM0Msc0NBQXdEO0FBQ3hELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQUc3QjtJQUdJLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixjQUFTLEdBQUcsd0NBQXdDLENBQUM7SUFFM0IsQ0FBQztJQUVuQyxrQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDOUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsSUFBUyxFQUFFLElBQUk7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDOUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUM5RCxFQUFFLENBQUMsVUFBQSxHQUFHLElBQUssT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLDhDQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sb0RBQXlCLEdBQWpDLFVBQWtDLElBQUk7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUNKLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNqQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQTNDUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSTtPQUhyQixnQkFBZ0IsQ0E0QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSw0Q0FBZ0I7QUE2QzdCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGh0dHAtZ2V0LXNlcnZpY2VcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUh0dHBHZXRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovL3dlYi1jbGFyYS1wMS5henVyZXdlYnNpdGVzLm5ldC9cIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXREYXRhKHBhdGgpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKHRoaXMuc2VydmVyVXJsICsgcGF0aCksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcbiAgICB9XG5cbiAgICBnZXRMb2dpbihkYXRhOiBhbnksIHBhdGgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zTG9naW4oZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCh0aGlzLnNlcnZlclVybCArIHBhdGgpLCB7IGhlYWRlcnM6IG9wdGlvbnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XG4gICAgfVxuXG4gICAgZ2V0UmVzcG9uc2VJbmZvKHBhdGgpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKHRoaXMuc2VydmVyVXJsICsgcGF0aCksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLmRvKHJlcyA9PiAgcmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIm15LWtleVwiKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnNMb2dpbihkYXRhKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsID0gbW9kZWwuZW1haWwudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSBtb2RlbC5wYXNzd29yZDtcbiAgICAgICAgdmFyIHN0ciA9IGVtYWlsICsgXCI6XCIgKyBwYXNzd29yZDtcbiAgICAgICAgdmFyIGJ5dGVzID0gdXRmOC5lbmNvZGUoc3RyKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJhc2U2NC5lbmNvZGUoYnl0ZXMpKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG4vLyA8PCBodHRwLWdldC1zZXJ2aWNlIl19