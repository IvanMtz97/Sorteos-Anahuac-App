"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var notificaciones_routing_module_1 = require("./notificaciones-routing.module");
var notificaciones_component_1 = require("./notificaciones.component");
var NotificacionesModule = /** @class */ (function () {
    function NotificacionesModule() {
    }
    NotificacionesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                notificaciones_routing_module_1.NotificacionesRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                notificaciones_component_1.NotificacionesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], NotificacionesModule);
    return NotificacionesModule;
}());
exports.NotificacionesModule = NotificacionesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsaUZBQThFO0FBQzlFLHVFQUFxRTtBQWVyRTtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBYmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJEQUEyQjtnQkFDM0IsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixrREFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbm90aWZpY2FjaW9uZXMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5vdGlmaWNhY2lvbmVzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTm90aWZpY2FjaW9uZXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2FjaW9uZXNNb2R1bGUgeyB9Il19