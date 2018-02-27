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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhZG9yZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcHJhZG9yZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQseUVBQXVFO0FBQ3ZFLHlEQUFrRTtBQUVsRSxpRUFBK0Q7QUFpQi9EO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFmN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRCQUFZO2dCQUNaLGlDQUF3QjtnQkFDeEIsb0RBQXdCO2dCQUN4QiwyQkFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBDb21wcmFkb3Jlc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jb21wcmFkb3Jlcy1yb3RpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyXCI7XHJcblxyXG5pbXBvcnQgeyBDb21wcmFkb3Jlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXByYWRvcmVzLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIENvbXByYWRvcmVzUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENvbXByYWRvcmVzQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wcmFkb3Jlc01vZHVsZSB7IH0iXX0=