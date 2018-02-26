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
    //private serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    function MyHttpGetService(http, session) {
        this.http = http;
        this.session = session;
        this.serverUrl = "https://web-clara-p1.azurewebsites.net/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1nZXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWdldC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFFM0Msc0NBQXdEO0FBQ3hELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQUM3QixnRUFBNEQ7QUFHNUQ7SUFFSSxvRkFBb0Y7SUFFcEYsMEJBQW9CLElBQVUsRUFBVSxPQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFIdkQsY0FBUyxHQUFHLHlDQUF5QyxDQUFDO0lBR0ssQ0FBQztJQUVwRSxrQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsSUFBUyxFQUFFLElBQUk7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSyxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU8sMkRBQWdDLEdBQXhDO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLDhDQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sb0RBQXlCLEdBQWpDLFVBQWtDLElBQUk7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUNKLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNqQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQW5EUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSSxFQUFtQixpQ0FBYztPQUp0RCxnQkFBZ0IsQ0FvRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSw0Q0FBZ0I7QUFxRDdCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGh0dHAtZ2V0LXNlcnZpY2VcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XHJcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCJcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cEdldFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vd2ViLWNsYXJhLXAxLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLXNlcnZpY2lvcy1tb2JpbGUtcC5henVyZXdlYnNpdGVzLm5ldC9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHsgfVxyXG5cclxuICAgIGdldERhdGEocGF0aCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKGVuY29kZVVSSSh0aGlzLnNlcnZlclVybCArIHBhdGgpKSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9naW4oZGF0YTogYW55LCBwYXRoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zTG9naW4oZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKGVuY29kZVVSSSh0aGlzLnNlcnZlclVybCArIHBhdGgpKSwgeyBoZWFkZXJzOiBvcHRpb25zIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUF1dGhvcml6YXRpb24ocGF0aCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyQXV0aG9yaXphdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KChlbmNvZGVVUkkodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiAgcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXJBdXRob3JpemF0aW9uKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0aGlzLnNlc3Npb24uZ2V0VG9rZW4oKSk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9uc0xvZ2luKGRhdGEpIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsID0gbW9kZWwuZW1haWwudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9IG1vZGVsLnBhc3N3b3JkO1xyXG4gICAgICAgIHZhciBzdHIgPSBlbWFpbCArIFwiOlwiICsgcGFzc3dvcmQ7XHJcbiAgICAgICAgdmFyIGJ5dGVzID0gdXRmOC5lbmNvZGUoc3RyKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgXCIgKyBiYXNlNjQuZW5jb2RlKGJ5dGVzKSk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG59XHJcbi8vIDw8IGh0dHAtZ2V0LXNlcnZpY2UiXX0=
