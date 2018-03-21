"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var session_services_1 = require("../session/session.services");
var MyHttpPostService = /** @class */ (function () {
    //private serverUrl = "http://localhost:2393/";
    function MyHttpPostService(http, session) {
        this.http = http;
        this.session = session;
        //private serverUrl = "https://web-clara-p1.azurewebsites.net/";
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    }
    MyHttpPostService.prototype.postNoAuth = function (data, path) {
        console.log("LLAMA A LA API " + path);
        var options = this.createRequestOptionsNoAuth();
        return this.http.post((encodeURI(this.serverUrl + path)), data, { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpPostService.prototype.postData = function (data, path) {
        console.log("LLAMA A LA API " + path);
        var options = this.createRequestOptions();
        return this.http.post((encodeURI(this.serverUrl + path)), data, { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpPostService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.set("Authorization", "Bearer " + this.session.getToken());
        headers.set("Content-Type", "application/json");
        return headers;
    };
    MyHttpPostService.prototype.createRequestOptionsNoAuth = function () {
        var headers = new http_1.Headers();
        headers.set("Content-Type", "application/json");
        return headers;
    };
    MyHttpPostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, session_services_1.SessionService])
    ], MyHttpPostService);
    return MyHttpPostService;
}());
exports.MyHttpPostService = MyHttpPostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wb3N0LnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wb3N0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGlDQUErQjtBQUMvQixzQ0FBd0Q7QUFHeEQsZ0VBQTREO0FBRzVEO0lBR0ksK0NBQStDO0lBRS9DLDJCQUFvQixJQUFVLEVBQVUsT0FBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSi9ELGdFQUFnRTtRQUN4RCxjQUFTLEdBQUcsNkRBQTZELENBQUM7SUFHZixDQUFDO0lBRXBFLHNDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBSTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUcsSUFBSSxFQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ2xGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLElBQVksRUFBRSxJQUFJO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRyxJQUFJLEVBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbEYsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxnREFBb0IsR0FBNUI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxzREFBMEIsR0FBbEM7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBaENRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQU1pQixXQUFJLEVBQW1CLGlDQUFjO09BTHRELGlCQUFpQixDQWlDN0I7SUFBRCx3QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUh0dHBQb3N0U2VydmljZSB7XG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly93ZWItY2xhcmEtcDEuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vc29ydGVvYW5haHVhYy1zZXJ2aWNpb3MtbW9iaWxlLXAuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoyMzkzL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7IH1cblxuICAgIHBvc3ROb0F1dGgoZGF0YTogT2JqZWN0LCBwYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTExBTUEgQSBMQSBBUEkgXCIgKyBwYXRoKTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zTm9BdXRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgoZW5jb2RlVVJJKHRoaXMuc2VydmVyVXJsICsgcGF0aCkpLCAgZGF0YSAsIHsgaGVhZGVyczogb3B0aW9ucyB9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzKTtcbiAgICB9XG5cbiAgICBwb3N0RGF0YShkYXRhOiBPYmplY3QsIHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMTEFNQSBBIExBIEFQSSBcIiArIHBhdGgpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KChlbmNvZGVVUkkodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSksICBkYXRhICwgeyBoZWFkZXJzOiBvcHRpb25zIH0pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdGhpcy5zZXNzaW9uLmdldFRva2VuKCkpO1xuICAgICAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnNOb0F1dGgoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59Il19