import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AsignacionExitosaComponent } from "./asignacionexitosa.component";

const routes: Routes = [
    { path: "", component: AsignacionExitosaComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class AsignacionExitosaRoutingModule { }