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
        //private serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
        this.serverUrl = "http://localhost:2393/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wb3N0LnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wb3N0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGlDQUErQjtBQUMvQixzQ0FBd0Q7QUFHeEQsZ0VBQTREO0FBRzVEO0lBS0ksMkJBQW9CLElBQVUsRUFBVSxPQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFKL0QsZ0VBQWdFO1FBQ2hFLG9GQUFvRjtRQUM1RSxjQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFFc0IsQ0FBQztJQUVwRSxvQ0FBUSxHQUFSLFVBQVMsSUFBUyxFQUFFLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDcEYsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxnREFBb0IsR0FBNUI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFuQlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBTWlCLFdBQUksRUFBbUIsaUNBQWM7T0FMdEQsaUJBQWlCLENBb0I3QjtJQUFELHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XHJcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCJcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cFBvc3RTZXJ2aWNlIHtcclxuICAgIC8vcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vd2ViLWNsYXJhLXAxLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG4gICAgLy9wcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLXNlcnZpY2lvcy1tb2JpbGUtcC5henVyZXdlYnNpdGVzLm5ldC9cIjtcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjIzOTMvXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwb3N0RGF0YShkYXRhOiBhbnksIHBhdGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxMQU1BIEEgTEEgQVBJIFwiLCBwYXRoLCBkYXRhKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoKGVuY29kZVVSSSh0aGlzLnNlcnZlclVybCArIHBhdGgpKSwgeyBkYXRhIH0sIHsgaGVhZGVyczogb3B0aW9ucyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuc2Vzc2lvbi5nZXRUb2tlbigpKTtcclxuICAgICAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcbn0iXX0=