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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1nZXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWdldC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFFM0Msc0NBQXdEO0FBQ3hELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFDOUIsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQUM3QixnRUFBNEQ7QUFHNUQ7SUFJSSwrQ0FBK0M7SUFFL0MsMEJBQW9CLElBQVUsRUFBVSxPQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFML0QsZ0VBQWdFO1FBQ3hELGNBQVMsR0FBRyw2REFBNkQsQ0FBQztJQUlmLENBQUM7SUFFcEUsa0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxJQUFJO1FBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0NBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUssT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLDJEQUFnQyxHQUF4QztRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyw4Q0FBbUIsR0FBM0I7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLHdCQUF3QjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVPLG9EQUF5QixHQUFqQyxVQUFrQyxJQUFJO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFDSixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDakMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFyRFEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBT2lCLFdBQUksRUFBbUIsaUNBQWM7T0FOdEQsZ0JBQWdCLENBc0Q1QjtJQUFELHVCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksNENBQWdCO0FBdUQ3QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBodHRwLWdldC1zZXJ2aWNlXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xyXG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBHZXRTZXJ2aWNlIHtcclxuICAgIC8vcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vd2ViLWNsYXJhLXAxLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vc29ydGVvYW5haHVhYy1zZXJ2aWNpb3MtbW9iaWxlLXAuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XHJcblxyXG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoyMzkzL1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0RGF0YShwYXRoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoZW5jb2RlVVJJKHRoaXMuc2VydmVyVXJsICsgcGF0aCkpLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2dpbihkYXRhOiBhbnksIHBhdGgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnNMb2dpbihkYXRhKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgoZW5jb2RlVVJJKHRoaXMuc2VydmVyVXJsICsgcGF0aCkpLCB7IGhlYWRlcnM6IG9wdGlvbnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhQXV0aG9yaXphdGlvbihwYXRoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXJBdXRob3JpemF0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoKGVuY29kZVVSSSh0aGlzLnNlcnZlclVybCArIHBhdGgpKSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+ICByZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlckF1dGhvcml6YXRpb24oKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuc2Vzc2lvbi5nZXRUb2tlbigpKTtcclxuICAgICAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zTG9naW4oZGF0YSkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwgPSBtb2RlbC5lbWFpbC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gbW9kZWwucGFzc3dvcmQ7XHJcbiAgICAgICAgdmFyIHN0ciA9IGVtYWlsICsgXCI6XCIgKyBwYXNzd29yZDtcclxuICAgICAgICB2YXIgYnl0ZXMgPSB1dGY4LmVuY29kZShzdHIpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBcIiArIGJhc2U2NC5lbmNvZGUoYnl0ZXMpKTtcclxuICAgICAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcbn1cclxuLy8gPDwgaHR0cC1nZXQtc2VydmljZSJdfQ==