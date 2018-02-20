import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { VentaBoletoComponent } from "./ventaboleto.component";

const routes: Routes = [
    { path: "", component: VentaBoletoComponent}
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class VentaBoletoRoutingModule { }