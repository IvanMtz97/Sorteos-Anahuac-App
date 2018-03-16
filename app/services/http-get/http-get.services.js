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
    //private serverUrl = "http://localhost:2393/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1nZXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWdldC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFFM0Msc0NBQXdEO0FBQ3hELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQUM3QixnRUFBNEQ7QUFHNUQ7SUFJSSwrQ0FBK0M7SUFFL0MsMEJBQW9CLElBQVUsRUFBVSxPQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFML0QsZ0VBQWdFO1FBQ3hELGNBQVMsR0FBRyw2REFBNkQsQ0FBQztJQUlmLENBQUM7SUFFcEUsa0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxJQUFJO1FBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0NBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUssT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLDJEQUFnQyxHQUF4QztRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyw4Q0FBbUIsR0FBM0I7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLHdCQUF3QjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLG9EQUF5QixHQUFqQyxVQUFrQyxJQUFJO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFDSixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDakMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFyRFEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBT2lCLFdBQUksRUFBbUIsaUNBQWM7T0FOdEQsZ0JBQWdCLENBc0Q1QjtJQUFELHVCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksNENBQWdCO0FBdUQ3QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBodHRwLWdldC1zZXJ2aWNlXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xuaW1wb3J0ICogYXMgdXRmOCBmcm9tIFwidXRmOFwiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15SHR0cEdldFNlcnZpY2Uge1xuICAgIC8vcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vd2ViLWNsYXJhLXAxLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xuXG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoyMzkzL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7IH1cblxuICAgIGdldERhdGEocGF0aCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoZW5jb2RlVVJJKHRoaXMuc2VydmVyVXJsICsgcGF0aCkpLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XG4gICAgfVxuXG4gICAgZ2V0TG9naW4oZGF0YTogYW55LCBwYXRoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9uc0xvZ2luKGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoZW5jb2RlVVJJKHRoaXMuc2VydmVyVXJsICsgcGF0aCkpLCB7IGhlYWRlcnM6IG9wdGlvbnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YUF1dGhvcml6YXRpb24ocGF0aCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlckF1dGhvcml6YXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKGVuY29kZVVSSSh0aGlzLnNlcnZlclVybCArIHBhdGgpKSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiAgcmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXJBdXRob3JpemF0aW9uKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxuICAgICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0aGlzLnNlc3Npb24uZ2V0VG9rZW4oKSk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zTG9naW4oZGF0YSkge1xuICAgICAgICB2YXIgbW9kZWwgPSBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IG1vZGVsLmVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gbW9kZWwucGFzc3dvcmQ7XG4gICAgICAgIHZhciBzdHIgPSBlbWFpbCArIFwiOlwiICsgcGFzc3dvcmQ7XG4gICAgICAgIHZhciBieXRlcyA9IHV0ZjguZW5jb2RlKHN0cik7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgXCIgKyBiYXNlNjQuZW5jb2RlKGJ5dGVzKSk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufVxuLy8gPDwgaHR0cC1nZXQtc2VydmljZSJdfQ==