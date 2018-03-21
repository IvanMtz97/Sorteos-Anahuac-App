"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var compradores_component_1 = require("./compradores.component");
var routes = [
    { path: "", component: compradores_component_1.CompradoresComponent }
];
var CompradoresRoutingModule = /** @class */ (function () {
    function CompradoresRoutingModule() {
    }
    CompradoresRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CompradoresRoutingModule);
    return CompradoresRoutingModule;
}());
exports.CompradoresRoutingModule = CompradoresRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhZG9yZXMtcm90aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXByYWRvcmVzLXJvdGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLGlFQUErRDtBQUUvRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO0NBQ2hELENBQUM7QUFPRjtJQUFBO0lBQXdDLENBQUM7SUFBNUIsd0JBQXdCO1FBTHBDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBRTtTQUN4QyxDQUFDO09BRVcsd0JBQXdCLENBQUk7SUFBRCwrQkFBQztDQUFBLEFBQXpDLElBQXlDO0FBQTVCLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb21wcmFkb3Jlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXByYWRvcmVzLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQ29tcHJhZG9yZXNDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXByYWRvcmVzUm91dGluZ01vZHVsZSB7IH0iXX0=