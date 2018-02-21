import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ConoceSorteoComponent } from "./conocesorteo.component";

const routes: Routes = [
    { path: "", component: ConoceSorteoComponent}
]

@NgModule({
    imports: [ NativeScriptRouterModule.forChild(routes)],
    exports: [ NativeScriptRouterModule]
})

export class ConoceSorteoRoutingModule { }