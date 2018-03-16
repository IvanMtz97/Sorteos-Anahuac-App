"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var redes_sociales_routing_module_1 = require("./redes_sociales-routing.module");
var redes_sociales_component_1 = require("./redes_sociales.component");
var app_modal_1 = require("./app.modal");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var RedesSocialesModule = /** @class */ (function () {
    function RedesSocialesModule() {
    }
    RedesSocialesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                redes_sociales_routing_module_1.RedesSocialesRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                redes_sociales_component_1.RedesSocialesComponent, app_modal_1.ModalComponent
            ],
            entryComponents: [
                app_modal_1.ModalComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [modal_dialog_1.ModalDialogService]
        })
    ], RedesSocialesModule);
    return RedesSocialesModule;
}());
exports.RedesSocialesModule = RedesSocialesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZXNfc29jaWFsZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZXNfc29jaWFsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsaUZBQTZFO0FBQzdFLHVFQUFvRTtBQUVwRSx5Q0FBNkM7QUFDN0Msa0VBQXVFO0FBbUJ2RTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBakIvQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwwREFBMEI7Z0JBQzFCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaURBQXNCLEVBQUUsMEJBQWM7YUFDekM7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsMEJBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUNBQWtCLENBQUM7U0FDbEMsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgUmVkZXNTb2NpYWxlc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9yZWRlc19zb2NpYWxlcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgUmVkZXNTb2NpYWxlc0NvbXBvbmVudCB9IGZyb20gXCIuL3JlZGVzX3NvY2lhbGVzLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5tb2RhbFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBSZWRlc1NvY2lhbGVzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUmVkZXNTb2NpYWxlc0NvbXBvbmVudCwgTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtNb2RhbERpYWxvZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlZGVzU29jaWFsZXNNb2R1bGUgeyB9Il19