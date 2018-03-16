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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy1yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFsb25hcmlvcy1yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSwrREFBNkQ7QUFFN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztDQUM5QyxDQUFBO0FBT0Q7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUxuQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUM7U0FDdkMsQ0FBQztPQUVXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRhbG9uYXJpb3NDb21wb25lbnQgfSBmcm9tIFwiLi90YWxvbmFyaW9zLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogVGFsb25hcmlvc0NvbXBvbmVudH1cbl1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYWxvbmFyaW9zUm91dGluZ01vZHVsZSB7IH0iXX0=