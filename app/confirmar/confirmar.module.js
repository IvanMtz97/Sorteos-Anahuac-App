"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var common_1 = require("nativescript-angular/common");
var confirmar_routing_module_1 = require("./confirmar-routing.module");
var confirmar_component_1 = require("./confirmar.component");
var ConfirmarModule = /** @class */ (function () {
    function ConfirmarModule() {
    }
    ConfirmarModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                common_1.NativeScriptCommonModule,
                confirmar_routing_module_1.ConfirmarRoutingModule
            ],
            declarations: [
                confirmar_component_1.ConfirmarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ConfirmarModule);
    return ConfirmarModule;
}());
exports.ConfirmarModule = ConfirmarModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QseURBQXVEO0FBQ3ZELHNEQUF1RTtBQUN2RSx1RUFBb0U7QUFFcEUsNkRBQTJEO0FBZ0IzRDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWQzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCO2dCQUN4QixpREFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb25maXJtYXJSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlybWFyLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IENvbmZpcm1hckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpcm1hci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBDb25maXJtYXJSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uZmlybWFyQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyTW9kdWxlIHsgfSJdfQ==