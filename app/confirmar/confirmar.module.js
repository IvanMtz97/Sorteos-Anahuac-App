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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QseURBQXVEO0FBQ3ZELHNEQUF1RTtBQUN2RSx1RUFBb0U7QUFFcEUsNkRBQTJEO0FBZ0IzRDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWQzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCO2dCQUN4QixpREFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysd0NBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDb25maXJtYXJSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlybWFyLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maXJtYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maXJtYXIuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQ29uZmlybWFyUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENvbmZpcm1hckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyTW9kdWxlIHsgfSJdfQ==