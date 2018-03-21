"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var ganadores_routing_1 = require("./ganadores-routing");
var ganadores_component_1 = require("./ganadores.component");
var GanadoresModule = /** @class */ (function () {
    function GanadoresModule() {
    }
    GanadoresModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                ganadores_routing_1.GanadoresRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                ganadores_component_1.GanadoresComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], GanadoresModule);
    return GanadoresModule;
}());
exports.GanadoresModule = GanadoresModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FuYWRvcmVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbmFkb3Jlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCx5REFBNkQ7QUFHN0QsNkRBQTJEO0FBZTNEO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBYjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDBDQUFzQjtnQkFDdEIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVix3Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IEdhbmFkb3Jlc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9nYW5hZG9yZXMtcm91dGluZ1wiO1xuXG5cbmltcG9ydCB7IEdhbmFkb3Jlc0NvbXBvbmVudCB9IGZyb20gXCIuL2dhbmFkb3Jlcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgR2FuYWRvcmVzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgR2FuYWRvcmVzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEdhbmFkb3Jlc01vZHVsZSB7IH0iXX0=