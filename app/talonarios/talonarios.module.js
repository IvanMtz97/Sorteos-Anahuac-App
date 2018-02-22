"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var talonarios_routing_1 = require("./talonarios-routing");
var angular_1 = require("nativescript-checkbox/angular");
var talonarios_component_1 = require("./talonarios.component");
var TalonariosModule = /** @class */ (function () {
    function TalonariosModule() {
    }
    TalonariosModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                talonarios_routing_1.TalonariosRoutingModule,
                shared_module_1.SharedModule,
                angular_1.TNSCheckBoxModule
            ],
            declarations: [
                talonarios_component_1.TalonariosComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TalonariosModule);
    return TalonariosModule;
}());
exports.TalonariosModule = TalonariosModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUseURBQXVEO0FBQ3ZELDJEQUErRDtBQUMvRCx5REFBa0U7QUFHbEUsK0RBQTZEO0FBaUI3RDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRDQUF1QjtnQkFDdkIsNEJBQVk7Z0JBQ1osMkJBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDBDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVGFsb25hcmlvc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90YWxvbmFyaW9zLXJvdXRpbmdcIjtcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXJcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBUYWxvbmFyaW9zQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFsb25hcmlvcy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFRhbG9uYXJpb3NSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFRhbG9uYXJpb3NDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhbG9uYXJpb3NNb2R1bGUgeyB9Il19