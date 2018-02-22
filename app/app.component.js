"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(session, router) {
        this.session = session;
        this.router = router;
        this.session = session;
        this.router = router;
        //this.session.setLoggedIn(false);
        console.log("FIRST RUN", this.session.getFirstRun());
        if (this.session.getFirstRun() == true) {
            this.router.navigate(["privacidad"]);
        }
        else {
            if (this.session.loggedIn()) {
                this.router.navigate(["talonarios"]);
            }
            else {
                this.router.navigate([""]);
            }
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            providers: [session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQU96QztJQUNJLHNCQUFvQixPQUF1QixFQUFVLE1BQWM7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUVMLENBQUM7SUFFTCxDQUFDO0lBbEJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsaUNBQWMsQ0FBQztTQUM5QixDQUFDO3lDQUUrQixpQ0FBYyxFQUFrQixlQUFNO09BRDFELFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1Nlc3Npb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIC8vdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJUlNUIFJVTlwiLCB0aGlzLnNlc3Npb24uZ2V0Rmlyc3RSdW4oKSk7XHJcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uLmdldEZpcnN0UnVuKCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByaXZhY2lkYWRcIl0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=