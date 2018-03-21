"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var conocesorteo_routing_1 = require("./conocesorteo-routing");
var conocesorteo_component_1 = require("./conocesorteo.component");
var ConoceSorteoModule = /** @class */ (function () {
    function ConoceSorteoModule() {
    }
    ConoceSorteoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                conocesorteo_routing_1.ConoceSorteoRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                conocesorteo_component_1.ConoceSorteoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ConoceSorteoModule);
    return ConoceSorteoModule;
}());
exports.ConoceSorteoModule = ConoceSorteoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ub2Nlc29ydGVvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm9jZXNvcnRlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCwrREFBbUU7QUFHbkUsbUVBQWlFO0FBZ0JqRTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBZDlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGdEQUF5QjtnQkFDekIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDViw4Q0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUVXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IENvbm9jZVNvcnRlb1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jb25vY2Vzb3J0ZW8tcm91dGluZ1wiO1xuXG5cbmltcG9ydCB7IENvbm9jZVNvcnRlb0NvbXBvbmVudCB9IGZyb20gXCIuL2Nvbm9jZXNvcnRlby5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29ub2NlU29ydGVvUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29ub2NlU29ydGVvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29ub2NlU29ydGVvTW9kdWxlIHsgfSJdfQ==