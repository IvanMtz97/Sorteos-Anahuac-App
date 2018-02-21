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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZXRvdmVuZGlkby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2xldG92ZW5kaWRvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELCtFQUE0RTtBQUM1RSxxRUFBbUU7QUFlbkU7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQWIvQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5REFBMEI7Z0JBQzFCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0RBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUEsQUFBcEMsSUFBb0M7QUFBdkIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQm9sZXRvVmVuZGlkb1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ib2xldG92ZW5kaWRvLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEJvbGV0b1ZlbmRpZG9Db21wb25lbnQgfSBmcm9tIFwiLi9ib2xldG92ZW5kaWRvLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQm9sZXRvVmVuZGlkb1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQm9sZXRvVmVuZGlkb0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb2xldG9WZW5kaWRvTW9kdWxlIHsgfVxyXG4iXX0=