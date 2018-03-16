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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCxzREFBdUU7QUFDdkUseUVBQTZFO0FBRzdFLDZFQUEyRTtBQWUzRTtJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBYm5DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDBEQUE4QjtnQkFDOUIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVix3REFBMEI7YUFDN0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEFzaWduYWNpb25FeGl0b3NhUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FzaWduYWNpb25leGl0b3NhLXJvdXRpbmdcIjtcblxuXG5pbXBvcnQgeyBBc2lnbmFjaW9uRXhpdG9zYUNvbXBvbmVudCB9IGZyb20gXCIuL2FzaWduYWNpb25leGl0b3NhLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBBc2lnbmFjaW9uRXhpdG9zYVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFzaWduYWNpb25FeGl0b3NhQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFzaWduYWNpb25FeGl0b3NhTW9kdWxlIHsgfSJdfQ==