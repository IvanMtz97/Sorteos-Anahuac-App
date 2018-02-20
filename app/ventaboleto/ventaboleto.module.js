"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var ventaboleto_routing_module_1 = require("./ventaboleto-routing.module");
var angular_1 = require("nativescript-checkbox/angular");
var ventaboleto_component_1 = require("./ventaboleto.component");
var VentaBoletoModule = /** @class */ (function () {
    function VentaBoletoModule() {
    }
    VentaBoletoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                ventaboleto_routing_module_1.VentaBoletoRoutingModule,
                shared_module_1.SharedModule,
                angular_1.TNSCheckBoxModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsMkVBQXdFO0FBQ3hFLHlEQUFrRTtBQUVsRSxpRUFBK0Q7QUFnQi9EO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFkN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIscURBQXdCO2dCQUN4Qiw0QkFBWTtnQkFDWiwyQkFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBWZW50YUJvbGV0b1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgVmVudGFCb2xldG9Db21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgVmVudGFCb2xldG9Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmVudGFCb2xldG9Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Nb2R1bGUgeyB9Il19