"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var solicita_talonario_routing_module_1 = require("./solicita_talonario-routing.module");
var solicita_talonario_component_1 = require("./solicita_talonario.component");
var SolicitaTalonarioModule = /** @class */ (function () {
    function SolicitaTalonarioModule() {
    }
    SolicitaTalonarioModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                solicita_talonario_routing_module_1.SolicitaTalonarioRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                solicita_talonario_component_1.SolicitaTalonarioComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SolicitaTalonarioModule);
    return SolicitaTalonarioModule;
}());
exports.SolicitaTalonarioModule = SolicitaTalonarioModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHlEQUF1RDtBQUN2RCx5RkFBcUY7QUFDckYsK0VBQTRFO0FBZTVFO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUFibkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsa0VBQThCO2dCQUM5Qiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHlEQUEwQjthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csdUJBQXVCLENBQUk7SUFBRCw4QkFBQztDQUFBLEFBQXhDLElBQXdDO0FBQTNCLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBTb2xpY2l0YVRhbG9uYXJpb1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zb2xpY2l0YV90YWxvbmFyaW8tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFNvbGljaXRhVGFsb25hcmlvQ29tcG9uZW50IH0gZnJvbSBcIi4vc29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBTb2xpY2l0YVRhbG9uYXJpb1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNvbGljaXRhVGFsb25hcmlvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNvbGljaXRhVGFsb25hcmlvTW9kdWxlIHsgfVxuIl19