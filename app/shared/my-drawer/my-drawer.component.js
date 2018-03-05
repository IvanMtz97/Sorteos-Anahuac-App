"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("../../services/session/session.services");
var MyDrawerComponent = /** @class */ (function () {
    function MyDrawerComponent(session) {
        this.session = session;
        this.menuAUX = true;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
        if (this.session.loggedIn()) {
            this.menuAUX = true;
        }
        else {
            this.menuAUX = false;
        }
        console.log("session.loggedIn -> " + this.session.loggedIn());
        console.log("this.menuAUX -> " + this.session.loggedIn());
    }
    MyDrawerComponent.prototype.ngOnInit = function () {
    };
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.scss"]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsNEVBQXlFO0FBVXpFO0lBTUksMkJBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSHBDLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFLM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQzNCLENBQUM7WUFDRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDRyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLFNBQWlCO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBMUJRO1FBQVIsWUFBSyxFQUFFOzsyREFBc0I7SUFEckIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQU8rQixpQ0FBYztPQU5sQyxpQkFBaUIsQ0E0QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuIFxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlEcmF3ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWRyYXdlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWRyYXdlci5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyAgICBcclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBtZW51QVVYOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVBVVggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVBVVggPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24ubG9nZ2VkSW4gLT4gXCIgKyB0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1lbnVBVVggLT4gXCIgKyB0aGlzLnNlc3Npb24ubG9nZ2VkSW4oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaXNQYWdlU2VsZWN0ZWQocGFnZVRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcclxuICAgIH1cclxufVxyXG4iXX0=