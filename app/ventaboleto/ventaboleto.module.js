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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsMkVBQXdFO0FBQ3hFLHlEQUFrRTtBQUVsRSxpRUFBK0Q7QUFnQi9EO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFkN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIscURBQXdCO2dCQUN4Qiw0QkFBWTtnQkFDWiwyQkFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBWZW50YUJvbGV0b1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgVmVudGFCb2xldG9Db21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFZlbnRhQm9sZXRvUm91dGluZ01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBWZW50YUJvbGV0b0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW50YUJvbGV0b01vZHVsZSB7IH0iXX0=