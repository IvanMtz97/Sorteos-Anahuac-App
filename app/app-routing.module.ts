import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
<<<<<<< HEAD
    { path: "", redirectTo: "/boletovendido", pathMatch: "full" },
=======
    { path: "", redirectTo: "/conocesorteo", pathMatch: "full" },
>>>>>>> e1c7f1b0be3b6cbea63597eb0a4feefda131c73b
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "boletovendido", loadChildren: "./boletovendido/boletovendido.module#BoletoVendidoModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "ventaboleto", loadChildren: "./ventaboleto/ventaboleto.module#VentaBoletoModule"},
    { path: "conocesorteo", loadChildren: "./conocesorteo/conocesorteo.module#ConoceSorteoModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
