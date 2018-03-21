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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsMkVBQXdFO0FBQ3hFLHlEQUFrRTtBQUNsRSxvREFBcUU7QUFDckUsd0NBQTZDO0FBRTdDLGlFQUErRDtBQUUvRCw2RUFBeUU7QUFDekUsa0VBQXVFO0FBcUJ2RTtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBbkI3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLHFEQUF3QjtnQkFDeEIsNEJBQVk7Z0JBQ1osMkJBQWlCO2dCQUNqQixtQkFBVzthQUNkO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRDQUFvQjtnQkFDcEIsdURBQXlCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELGVBQWUsRUFBRSxDQUFFLHVEQUF5QixDQUFFO1lBQzlDLFNBQVMsRUFBRSxDQUFFLGlDQUFrQixDQUFFO1NBQ3BDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBWZW50YUJvbGV0b1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgVmVudGFCb2xldG9Db21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by1tb2RhbC5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBWZW50YUJvbGV0b1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVmVudGFCb2xldG9Db21wb25lbnQsXHJcbiAgICAgICAgVmVudGFCb2xldG9Nb2RhbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbIFZlbnRhQm9sZXRvTW9kYWxDb21wb25lbnQgXSxcclxuICAgIHByb3ZpZGVyczogWyBNb2RhbERpYWxvZ1NlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Nb2R1bGUgeyB9Il19