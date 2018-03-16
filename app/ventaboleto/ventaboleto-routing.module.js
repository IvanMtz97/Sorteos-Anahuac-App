"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ventaboleto_component_1 = require("./ventaboleto.component");
var routes = [
    { path: "", component: ventaboleto_component_1.VentaBoletoComponent }
];
var VentaBoletoRoutingModule = /** @class */ (function () {
    function VentaBoletoRoutingModule() {
    }
    VentaBoletoRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], VentaBoletoRoutingModule);
    return VentaBoletoRoutingModule;
}());
exports.VentaBoletoRoutingModule = VentaBoletoRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW50YWJvbGV0by1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsaUVBQStEO0FBRS9ELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7Q0FDL0MsQ0FBQTtBQU9EO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix3QkFBd0I7UUFMcEMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FFVyx3QkFBd0IsQ0FBSTtJQUFELCtCQUFDO0NBQUEsQUFBekMsSUFBeUM7QUFBNUIsNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBWZW50YUJvbGV0b0NvbXBvbmVudCB9IGZyb20gXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogVmVudGFCb2xldG9Db21wb25lbnR9XG5dXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvUm91dGluZ01vZHVsZSB7IH0iXX0=