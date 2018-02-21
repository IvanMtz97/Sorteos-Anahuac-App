import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { GanadoresComponent } from "./ganadores.component";

const routes: Routes = [
    { path: "", component: GanadoresComponent}
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class GanadoresRoutingModule { }

