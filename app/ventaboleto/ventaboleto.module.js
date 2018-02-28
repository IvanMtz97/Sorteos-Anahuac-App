"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var ventaboleto_routing_module_1 = require("./ventaboleto-routing.module");
var angular_1 = require("nativescript-checkbox/angular");
var ventaboleto_component_1 = require("./ventaboleto.component");
var forms_1 = require("@angular/forms");
var VentaBoletoModule = /** @class */ (function () {
    function VentaBoletoModule() {
    }
    VentaBoletoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                ventaboleto_routing_module_1.VentaBoletoRoutingModule,
                shared_module_1.SharedModule,
                angular_1.TNSCheckBoxModule,
                forms_1.FormsModule
            ],
            declarations: [
                ventaboleto_component_1.VentaBoletoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], VentaBoletoModule);
    return VentaBoletoModule;
}());
exports.VentaBoletoModule = VentaBoletoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsMkVBQXdFO0FBQ3hFLHlEQUFrRTtBQUVsRSxpRUFBK0Q7QUFDL0Qsd0NBQTZDO0FBaUI3QztJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBZjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHFEQUF3QjtnQkFDeEIsNEJBQVk7Z0JBQ1osMkJBQWlCO2dCQUNqQixtQkFBVzthQUNkO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgVmVudGFCb2xldG9Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdmVudGFib2xldG8tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IFZlbnRhQm9sZXRvQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBWZW50YUJvbGV0b1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmVudGFCb2xldG9Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Nb2R1bGUgeyB9Il19