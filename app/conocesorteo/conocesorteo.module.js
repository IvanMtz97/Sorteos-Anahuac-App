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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ub2Nlc29ydGVvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm9jZXNvcnRlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCwrREFBbUU7QUFHbkUsbUVBQWlFO0FBZ0JqRTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBZDlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGdEQUF5QjtnQkFDekIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDViw4Q0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUVXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IENvbm9jZVNvcnRlb1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jb25vY2Vzb3J0ZW8tcm91dGluZ1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IENvbm9jZVNvcnRlb0NvbXBvbmVudCB9IGZyb20gXCIuL2Nvbm9jZXNvcnRlby5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIENvbm9jZVNvcnRlb1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29ub2NlU29ydGVvQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25vY2VTb3J0ZW9Nb2R1bGUgeyB9Il19