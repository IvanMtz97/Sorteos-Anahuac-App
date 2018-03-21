"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var micuenta_component_1 = require("./micuenta.component");
var routes = [
    { path: "", component: micuenta_component_1.MiCuentaComponent }
];
var MiCuentaRoutingModule = /** @class */ (function () {
    function MiCuentaRoutingModule() {
    }
    MiCuentaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], MiCuentaRoutingModule);
    return MiCuentaRoutingModule;
}());
exports.MiCuentaRoutingModule = MiCuentaRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEtcm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pY3VlbnRhLXJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLDJEQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDO0NBQzVDLENBQUE7QUFPRDtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBTGpDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQztTQUN2QyxDQUFDO09BRVcscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBLEFBQXRDLElBQXNDO0FBQXpCLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTWlDdWVudGFDb21wb25lbnQgfSBmcm9tIFwiLi9taWN1ZW50YS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IE1pQ3VlbnRhQ29tcG9uZW50fVxuXVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIE1pQ3VlbnRhUm91dGluZ01vZHVsZSB7IH0iXX0=