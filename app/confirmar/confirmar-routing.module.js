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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlybWFyLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSw2REFBMkQ7QUFFM0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztDQUM1QyxDQUFDO0FBT0Y7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQUxsQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUU7U0FDeEMsQ0FBQztPQUVXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztBQUExQix3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IENvbmZpcm1hckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpcm1hci5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIGNvbXBvbmVudDogQ29uZmlybWFyQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyUm91dGluZ01vZHVsZSB7IH0iXX0=