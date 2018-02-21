"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/ganadores", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "boletovendido", loadChildren: "./boletovendido/boletovendido.module#BoletoVendidoModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "ventaboleto", loadChildren: "./ventaboleto/ventaboleto.module#VentaBoletoModule" },
    { path: "conocesorteo", loadChildren: "./conocesorteo/conocesorteo.module#ConoceSorteoModule" },
    { path: "ganadores", loadChildren: "./ganadores/ganadores.module#GanadoresModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
