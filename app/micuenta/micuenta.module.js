"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var micuenta_routing_1 = require("./micuenta-routing");
var micuenta_component_1 = require("./micuenta.component");
var MiCuentaModule = /** @class */ (function () {
    function MiCuentaModule() {
    }
    MiCuentaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                micuenta_routing_1.MiCuentaRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                micuenta_component_1.MiCuentaComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], MiCuentaModule);
    return MiCuentaModule;
}());
exports.MiCuentaModule = MiCuentaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljdWVudGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsdURBQTJEO0FBRzNELDJEQUF5RDtBQWdCekQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFkMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsd0NBQXFCO2dCQUNyQiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTWlDdWVudGFSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbWljdWVudGEtcm91dGluZ1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IE1pQ3VlbnRhQ29tcG9uZW50IH0gZnJvbSBcIi4vbWljdWVudGEuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBNaUN1ZW50YVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWlDdWVudGFDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1pQ3VlbnRhTW9kdWxlIHsgfSJdfQ==