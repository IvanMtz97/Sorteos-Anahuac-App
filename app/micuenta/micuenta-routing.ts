import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MiCuentaComponent } from "./micuenta.component";

const routes: Routes = [
    { path: "", component: MiCuentaComponent}
]

@NgModule({
    imports: [ NativeScriptRouterModule.forChild(routes)],
    exports: [ NativeScriptRouterModule]
})

export class MiCuentaRoutingModule { }