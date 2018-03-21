"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var compradores_roting_module_1 = require("./compradores-roting.module");
var angular_1 = require("nativescript-checkbox/angular");
var compradores_component_1 = require("./compradores.component");
var CompradoresModule = /** @class */ (function () {
    function CompradoresModule() {
    }
    CompradoresModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                common_1.NativeScriptCommonModule,
                compradores_roting_module_1.CompradoresRoutingModule,
                angular_1.TNSCheckBoxModule
            ],
            declarations: [
                compradores_component_1.CompradoresComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CompradoresModule);
    return CompradoresModule;
}());
exports.CompradoresModule = CompradoresModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhZG9yZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcHJhZG9yZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQseUVBQXVFO0FBQ3ZFLHlEQUFrRTtBQUVsRSxpRUFBK0Q7QUFpQi9EO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFmN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRCQUFZO2dCQUNaLGlDQUF3QjtnQkFDeEIsb0RBQXdCO2dCQUN4QiwyQkFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21wcmFkb3Jlc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jb21wcmFkb3Jlcy1yb3RpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBDb21wcmFkb3Jlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXByYWRvcmVzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIENvbXByYWRvcmVzUm91dGluZ01vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb21wcmFkb3Jlc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXByYWRvcmVzTW9kdWxlIHsgfSJdfQ==