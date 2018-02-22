"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var solicita_talonario_component_1 = require("./solicita_talonario.component");
var routes = [
    { path: "", component: solicita_talonario_component_1.SolicitaTalonarioComponent }
];
var SolicitaTalonarioRoutingModule = /** @class */ (function () {
    function SolicitaTalonarioRoutingModule() {
    }
    SolicitaTalonarioRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], SolicitaTalonarioRoutingModule);
    return SolicitaTalonarioRoutingModule;
}());
exports.SolicitaTalonarioRoutingModule = SolicitaTalonarioRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29saWNpdGFfdGFsb25hcmlvLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSwrRUFBNEU7QUFFNUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBRTtDQUN0RCxDQUFDO0FBTUY7SUFBQTtJQUE4QyxDQUFDO0lBQWxDLDhCQUE4QjtRQUoxQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLDhCQUE4QixDQUFJO0lBQUQscUNBQUM7Q0FBQSxBQUEvQyxJQUErQztBQUFsQyx3RUFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU29saWNpdGFUYWxvbmFyaW9Db21wb25lbnQgfSBmcm9tIFwiLi9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBTb2xpY2l0YVRhbG9uYXJpb0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0YVRhbG9uYXJpb1JvdXRpbmdNb2R1bGUgeyB9Il19