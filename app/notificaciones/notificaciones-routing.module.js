"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var notificaciones_component_1 = require("./notificaciones.component");
var routes = [
    { path: "", component: notificaciones_component_1.NotificacionesComponent }
];
var NotificacionesRoutingModule = /** @class */ (function () {
    function NotificacionesRoutingModule() {
    }
    NotificacionesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], NotificacionesRoutingModule);
    return NotificacionesRoutingModule;
}());
exports.NotificacionesRoutingModule = NotificacionesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYWNpb25lcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsdUVBQXFFO0FBRXJFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7Q0FDbEQsQ0FBQTtBQU9EO0lBQUE7SUFBMkMsQ0FBQztJQUEvQiwyQkFBMkI7UUFMdkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDO1NBQ3ZDLENBQUM7T0FFVywyQkFBMkIsQ0FBSTtJQUFELGtDQUFDO0NBQUEsQUFBNUMsSUFBNEM7QUFBL0Isa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBOb3RpZmljYWNpb25lc0NvbXBvbmVudH1cclxuXVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlIHsgfSJdfQ==