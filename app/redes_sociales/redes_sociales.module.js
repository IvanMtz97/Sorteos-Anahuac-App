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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZXNfc29jaWFsZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZXNfc29jaWFsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsaUZBQTZFO0FBQzdFLHVFQUFvRTtBQUVwRSx5Q0FBNkM7QUFDN0Msa0VBQXVFO0FBbUJ2RTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBakIvQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwwREFBMEI7Z0JBQzFCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaURBQXNCLEVBQUUsMEJBQWM7YUFDekM7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsMEJBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUNBQWtCLENBQUM7U0FDbEMsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSZWRlc1NvY2lhbGVzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JlZGVzX3NvY2lhbGVzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJlZGVzU29jaWFsZXNDb21wb25lbnQgfSBmcm9tIFwiLi9yZWRlc19zb2NpYWxlcy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLm1vZGFsXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlZGVzU29jaWFsZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFJlZGVzU29jaWFsZXNDb21wb25lbnQsIE1vZGFsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTW9kYWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW01vZGFsRGlhbG9nU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZGVzU29jaWFsZXNNb2R1bGUgeyB9Il19