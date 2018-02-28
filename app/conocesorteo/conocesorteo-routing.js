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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ub2Nlc29ydGVvLXJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25vY2Vzb3J0ZW8tcm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsbUVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUM7Q0FDaEQsQ0FBQTtBQU9EO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFMckMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELE9BQU8sRUFBRSxDQUFFLGlDQUF3QixDQUFDO1NBQ3ZDLENBQUM7T0FFVyx5QkFBeUIsQ0FBSTtJQUFELGdDQUFDO0NBQUEsQUFBMUMsSUFBMEM7QUFBN0IsOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvbm9jZVNvcnRlb0NvbXBvbmVudCB9IGZyb20gXCIuL2Nvbm9jZXNvcnRlby5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IENvbm9jZVNvcnRlb0NvbXBvbmVudH1cclxuXVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogWyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29ub2NlU29ydGVvUm91dGluZ01vZHVsZSB7IH0iXX0=