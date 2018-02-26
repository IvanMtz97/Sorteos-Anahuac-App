"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var redes_sociales_routing_module_1 = require("./redes_sociales-routing.module");
var redes_sociales_component_1 = require("./redes_sociales.component");
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
                redes_sociales_component_1.RedesSocialesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], RedesSocialesModule);
    return RedesSocialesModule;
}());
exports.RedesSocialesModule = RedesSocialesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZXNfc29jaWFsZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZXNfc29jaWFsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsaUZBQTZFO0FBQzdFLHVFQUFvRTtBQWVwRTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBYi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDBEQUEwQjtnQkFDMUIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixpREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSZWRlc1NvY2lhbGVzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JlZGVzX3NvY2lhbGVzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJlZGVzU29jaWFsZXNDb21wb25lbnQgfSBmcm9tIFwiLi9yZWRlc19zb2NpYWxlcy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJlZGVzU29jaWFsZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFJlZGVzU29jaWFsZXNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVkZXNTb2NpYWxlc01vZHVsZSB7IH0iXX0=