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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYWNpb25lcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsdUVBQXFFO0FBRXJFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7Q0FDbEQsQ0FBQTtBQU9EO0lBQUE7SUFBMkMsQ0FBQztJQUEvQiwyQkFBMkI7UUFMdkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDO1NBQ3ZDLENBQUM7T0FFVywyQkFBMkIsQ0FBSTtJQUFELGtDQUFDO0NBQUEsQUFBNUMsSUFBNEM7QUFBL0Isa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB9IGZyb20gXCIuL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTm90aWZpY2FjaW9uZXNDb21wb25lbnR9XG5dXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlIHsgfSJdfQ==