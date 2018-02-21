"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var boletovendido_routing_module_1 = require("./boletovendido-routing.module");
var boletovendido_component_1 = require("./boletovendido.component");
var BoletoVendidoModule = /** @class */ (function () {
    function BoletoVendidoModule() {
    }
    BoletoVendidoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                boletovendido_routing_module_1.BoletoVendidoRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                boletovendido_component_1.BoletoVendidoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BoletoVendidoModule);
    return BoletoVendidoModule;
}());
exports.BoletoVendidoModule = BoletoVendidoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELCtFQUE0RTtBQUM1RSxxRUFBbUU7QUFlbkU7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQWIvQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5REFBMEI7Z0JBQzFCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0RBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IEJvbGV0b1ZlbmRpZG9Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYm9sZXRvdmVuZGlkby1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQm9sZXRvVmVuZGlkb0NvbXBvbmVudCB9IGZyb20gXCIuL2JvbGV0b3ZlbmRpZG8uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEJvbGV0b1ZlbmRpZG9Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCb2xldG9WZW5kaWRvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJvbGV0b1ZlbmRpZG9Nb2R1bGUgeyB9XG4iXX0=