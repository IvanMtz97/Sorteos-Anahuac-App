"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var ventaboleto_routing_module_1 = require("./ventaboleto-routing.module");
var angular_1 = require("nativescript-checkbox/angular");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var ventaboleto_component_1 = require("./ventaboleto.component");
var ventaboleto_modal_component_1 = require("./ventaboleto-modal.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var VentaBoletoModule = /** @class */ (function () {
    function VentaBoletoModule() {
    }
    VentaBoletoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                ventaboleto_routing_module_1.VentaBoletoRoutingModule,
                shared_module_1.SharedModule,
                angular_1.TNSCheckBoxModule,
                forms_2.FormsModule
            ],
            declarations: [
                ventaboleto_component_1.VentaBoletoComponent,
                ventaboleto_modal_component_1.VentaBoletoModalComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [ventaboleto_modal_component_1.VentaBoletoModalComponent],
            providers: [modal_dialog_1.ModalDialogService]
        })
    ], VentaBoletoModule);
    return VentaBoletoModule;
}());
exports.VentaBoletoModule = VentaBoletoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsMkVBQXdFO0FBQ3hFLHlEQUFrRTtBQUNsRSxvREFBcUU7QUFDckUsd0NBQTZDO0FBRTdDLGlFQUErRDtBQUUvRCw2RUFBeUU7QUFDekUsa0VBQXVFO0FBcUJ2RTtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBbkI3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLHFEQUF3QjtnQkFDeEIsNEJBQVk7Z0JBQ1osMkJBQWlCO2dCQUNqQixtQkFBVzthQUNkO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRDQUFvQjtnQkFDcEIsdURBQXlCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELGVBQWUsRUFBRSxDQUFFLHVEQUF5QixDQUFFO1lBQzlDLFNBQVMsRUFBRSxDQUFFLGlDQUFrQixDQUFFO1NBQ3BDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBWZW50YUJvbGV0b1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBWZW50YUJvbGV0b0NvbXBvbmVudCB9IGZyb20gXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBWZW50YUJvbGV0b01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50XCJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIFZlbnRhQm9sZXRvUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWZW50YUJvbGV0b0NvbXBvbmVudCxcbiAgICAgICAgVmVudGFCb2xldG9Nb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFsgVmVudGFCb2xldG9Nb2RhbENvbXBvbmVudCBdLFxuICAgIHByb3ZpZGVyczogWyBNb2RhbERpYWxvZ1NlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBWZW50YUJvbGV0b01vZHVsZSB7IH0iXX0=