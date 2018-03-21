"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var talonarios_component_1 = require("./talonarios.component");
var routes = [
    { path: "", component: talonarios_component_1.TalonariosComponent }
];
var TalonariosRoutingModule = /** @class */ (function () {
    function TalonariosRoutingModule() {
    }
    TalonariosRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], TalonariosRoutingModule);
    return TalonariosRoutingModule;
}());
exports.TalonariosRoutingModule = TalonariosRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy1yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFsb25hcmlvcy1yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSwrREFBNkQ7QUFFN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztDQUM5QyxDQUFBO0FBT0Q7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUxuQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUM7U0FDdkMsQ0FBQztPQUVXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgVGFsb25hcmlvc0NvbXBvbmVudCB9IGZyb20gXCIuL3RhbG9uYXJpb3MuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBUYWxvbmFyaW9zQ29tcG9uZW50fVxyXG5dXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWxvbmFyaW9zUm91dGluZ01vZHVsZSB7IH0iXX0=