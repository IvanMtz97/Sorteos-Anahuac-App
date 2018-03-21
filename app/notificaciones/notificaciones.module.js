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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2FjaW9uZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2FjaW9uZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsaUZBQThFO0FBQzlFLHVFQUFxRTtBQWVyRTtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBYmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJEQUEyQjtnQkFDM0IsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixrREFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYWNpb25lc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ub3RpZmljYWNpb25lcy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB9IGZyb20gXCIuL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhY2lvbmVzTW9kdWxlIHsgfSJdfQ==