"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var session_services_1 = require("../session/session.services");
var MyHttpPostService = /** @class */ (function () {
    function MyHttpPostService(http, session) {
        this.http = http;
        this.session = session;
        //private serverUrl = "https://web-clara-p1.azurewebsites.net/";
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    }
    MyHttpPostService.prototype.postData = function (data, path) {
        console.log("LLAMA A LA API ", path, data);
        var options = this.createRequestOptions();
        return this.http.post((encodeURI(this.serverUrl + path)), { data: data }, { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpPostService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.set("Authorization", "Bearer " + this.session.getToken());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wb3N0LnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wb3N0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGlDQUErQjtBQUMvQixzQ0FBd0Q7QUFHeEQsZ0VBQTREO0FBRzVEO0lBSUksMkJBQW9CLElBQVUsRUFBVSxPQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFIL0QsZ0VBQWdFO1FBQ3hELGNBQVMsR0FBRyw2REFBNkQsQ0FBQztJQUVmLENBQUM7SUFFcEUsb0NBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3BGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sZ0RBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBbEJRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQUtpQixXQUFJLEVBQW1CLGlDQUFjO09BSnRELGlCQUFpQixDQW1CN0I7SUFBRCx3QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeUh0dHBQb3N0U2VydmljZSB7XG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly93ZWItY2xhcmEtcDEuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vc29ydGVvYW5haHVhYy1zZXJ2aWNpb3MtbW9iaWxlLXAuYXp1cmV3ZWJzaXRlcy5uZXQvXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHsgfVxuXG4gICAgcG9zdERhdGEoZGF0YTogYW55LCBwYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTExBTUEgQSBMQSBBUEkgXCIsIHBhdGgsIGRhdGEpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KChlbmNvZGVVUkkodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSksIHsgZGF0YSB9LCB7IGhlYWRlcnM6IG9wdGlvbnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0aGlzLnNlc3Npb24uZ2V0VG9rZW4oKSk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufSJdfQ==