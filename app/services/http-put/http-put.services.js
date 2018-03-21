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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wdXQuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLXB1dC5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxpQ0FBK0I7QUFDL0Isc0NBQXdEO0FBR3hELGdFQUE0RDtBQUc1RDtJQUlJLDBCQUFvQixJQUFVLEVBQVUsT0FBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSC9ELGdFQUFnRTtRQUN4RCxjQUFTLEdBQUcsNkRBQTZELENBQUM7SUFFZixDQUFDO0lBRXBFLGtDQUFPLEdBQVAsVUFBUSxJQUFTLEVBQUUsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLCtDQUFvQixHQUE1QjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWxCUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSSxFQUFtQixpQ0FBYztPQUp0RCxnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcclxuaW1wb3J0ICogYXMgdXRmOCBmcm9tIFwidXRmOFwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXlIdHRwUHV0U2VydmljZSB7XHJcbiAgICAvL3ByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3dlYi1jbGFyYS1wMS5henVyZXdlYnNpdGVzLm5ldC9cIjtcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHV0RGF0YShkYXRhOiBhbnksIHBhdGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxMQU1BIEEgTEEgQVBJIFwiLCBwYXRoLCBkYXRhKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgodGhpcy5zZXJ2ZXJVcmwgKyBwYXRoKSwgeyBkYXRhIH0sIHsgaGVhZGVyczogb3B0aW9ucyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuc2Vzc2lvbi5nZXRUb2tlbigpKTtcclxuICAgICAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcbn0iXX0=