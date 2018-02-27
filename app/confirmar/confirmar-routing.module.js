"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var confirmar_component_1 = require("./confirmar.component");
var routes = [
    { path: "", component: confirmar_component_1.ConfirmarComponent }
];
var ConfirmarRoutingModule = /** @class */ (function () {
    function ConfirmarRoutingModule() {
    }
    ConfirmarRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ConfirmarRoutingModule);
    return ConfirmarRoutingModule;
}());
exports.ConfirmarRoutingModule = ConfirmarRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlybWFyLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSw2REFBMkQ7QUFFM0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztDQUM1QyxDQUFDO0FBT0Y7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQUxsQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDeEMsQ0FBQztPQUVXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztBQUExQix3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlybWFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlybWFyLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogXCJcIiwgY29tcG9uZW50OiBDb25maXJtYXJDb21wb25lbnR9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyUm91dGluZ01vZHVsZSB7IH0iXX0=