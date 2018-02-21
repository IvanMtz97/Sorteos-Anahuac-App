"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var common_1 = require("nativescript-angular/common");
var asignacionexitosa_routing_1 = require("./asignacionexitosa-routing");
var asignacionexitosa_component_1 = require("./asignacionexitosa.component");
var AsignacionExitosaModule = /** @class */ (function () {
    function AsignacionExitosaModule() {
    }
    AsignacionExitosaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                asignacionexitosa_routing_1.AsignacionExitosaRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                asignacionexitosa_component_1.AsignacionExitosaComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AsignacionExitosaModule);
    return AsignacionExitosaModule;
}());
exports.AsignacionExitosaModule = AsignacionExitosaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCxzREFBdUU7QUFDdkUseUVBQTZFO0FBRzdFLDZFQUEyRTtBQWUzRTtJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBYm5DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDBEQUE4QjtnQkFDOUIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVix3REFBMEI7YUFDN0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEFzaWduYWNpb25FeGl0b3NhUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FzaWduYWNpb25leGl0b3NhLXJvdXRpbmdcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCB9IGZyb20gXCIuL2FzaWduYWNpb25leGl0b3NhLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQXNpZ25hY2lvbkV4aXRvc2FSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFzaWduYWNpb25FeGl0b3NhQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFzaWduYWNpb25FeGl0b3NhTW9kdWxlIHsgfSJdfQ==