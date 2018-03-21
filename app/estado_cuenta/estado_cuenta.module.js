"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var estado_cuenta_routing_module_1 = require("./estado_cuenta-routing.module");
var estado_cuenta_component_1 = require("./estado_cuenta.component");
var EstadoCuentaModule = /** @class */ (function () {
    function EstadoCuentaModule() {
    }
    EstadoCuentaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                estado_cuenta_routing_module_1.EstadoCuentaRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                estado_cuenta_component_1.EstadoCuentaComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], EstadoCuentaModule);
    return EstadoCuentaModule;
}());
exports.EstadoCuentaModule = EstadoCuentaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0YWRvX2N1ZW50YS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlc3RhZG9fY3VlbnRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELCtFQUEyRTtBQUMzRSxxRUFBa0U7QUFlbEU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQWI5QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix3REFBeUI7Z0JBQ3pCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IEVzdGFkb0N1ZW50YVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9lc3RhZG9fY3VlbnRhLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBFc3RhZG9DdWVudGFDb21wb25lbnQgfSBmcm9tIFwiLi9lc3RhZG9fY3VlbnRhLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBFc3RhZG9DdWVudGFSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBFc3RhZG9DdWVudGFDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXN0YWRvQ3VlbnRhTW9kdWxlIHsgfVxuIl19