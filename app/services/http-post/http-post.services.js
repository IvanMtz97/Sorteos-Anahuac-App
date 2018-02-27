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
        return this.http.post((this.serverUrl + path), { data: data }, { headers: options })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wb3N0LnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wb3N0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGlDQUErQjtBQUMvQixzQ0FBd0Q7QUFHeEQsZ0VBQTREO0FBRzVEO0lBSUksMkJBQW9CLElBQVUsRUFBVSxPQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFIL0QsZ0VBQWdFO1FBQ3hELGNBQVMsR0FBRyw2REFBNkQsQ0FBQztJQUVmLENBQUM7SUFFcEUsb0NBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sZ0RBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBbEJRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQUtpQixXQUFJLEVBQW1CLGlDQUFjO09BSnRELGlCQUFpQixDQW1CN0I7SUFBRCx3QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xyXG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBQb3N0U2VydmljZSB7XHJcbiAgICAvL3ByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3dlYi1jbGFyYS1wMS5henVyZXdlYnNpdGVzLm5ldC9cIjtcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSkgeyB9XHJcblxyXG4gICAgcG9zdERhdGEoZGF0YTogYW55LCBwYXRoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMTEFNQSBBIExBIEFQSSBcIiwgcGF0aCwgZGF0YSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLnNlcnZlclVybCArIHBhdGgpLCB7IGRhdGEgfSwgeyBoZWFkZXJzOiBvcHRpb25zIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdGhpcy5zZXNzaW9uLmdldFRva2VuKCkpO1xyXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxufSJdfQ==