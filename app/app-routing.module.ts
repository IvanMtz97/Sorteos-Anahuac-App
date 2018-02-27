import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/compradores", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "boletovendido/:data", loadChildren: "./boletovendido/boletovendido.module#BoletoVendidoModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "ventaboleto/:data", loadChildren: "./ventaboleto/ventaboleto.module#VentaBoletoModule"},
    { path: "conocesorteo", loadChildren: "./conocesorteo/conocesorteo.module#ConoceSorteoModule"},
    { path: "ganadores", loadChildren: "./ganadores/ganadores.module#GanadoresModule"},
    { path: "asignacionexitosa/:data", loadChildren: "./asignacionexitosa/asignacionexitosa.module#AsignacionExitosaModule"},
    { path: "privacidad", loadChildren: "./privacidad/privacidad.module#PrivacidadModule"},
    { path: "solicitatalonario", loadChildren: "./solicita_talonario/solicita_talonario.module#SolicitaTalonarioModule"},
    { path: "talonarios", loadChildren: "./talonarios/talonarios.module#TalonariosModule"},
    { path: "estadocuenta", loadChildren: "./estado_cuenta/estado_cuenta.module#EstadoCuentaModule"},
    { path: "redessociales", loadChildren: "./redes_sociales/redes_sociales.module#RedesSocialesModule"},
    { path: "notificaciones", loadChildren: "./notificaciones/notificaciones.module#NotificacionesModule"},
    { path: "compradores", loadChildren: "./compradores/compradores.module#CompradoresModule"},
    { path: "confirmar/:data", loadChildren: "./confirmar/confirmar.module#ConfirmarModule"}
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
