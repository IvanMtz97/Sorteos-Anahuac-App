"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var conocesorteo_component_1 = require("./conocesorteo.component");
var routes = [
    { path: "", component: conocesorteo_component_1.ConoceSorteoComponent }
];
var ConoceSorteoRoutingModule = /** @class */ (function () {
    function ConoceSorteoRoutingModule() {
    }
    ConoceSorteoRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ConoceSorteoRoutingModule);
    return ConoceSorteoRoutingModule;
}());
exports.ConoceSorteoRoutingModule = ConoceSorteoRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ub2Nlc29ydGVvLXJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25vY2Vzb3J0ZW8tcm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsbUVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUM7Q0FDaEQsQ0FBQTtBQU9EO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFMckMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDO1NBQ3ZDLENBQUM7T0FFVyx5QkFBeUIsQ0FBSTtJQUFELGdDQUFDO0NBQUEsQUFBMUMsSUFBMEM7QUFBN0IsOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb25vY2VTb3J0ZW9Db21wb25lbnQgfSBmcm9tIFwiLi9jb25vY2Vzb3J0ZW8uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBDb25vY2VTb3J0ZW9Db21wb25lbnR9XG5dXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29ub2NlU29ydGVvUm91dGluZ01vZHVsZSB7IH0iXX0=