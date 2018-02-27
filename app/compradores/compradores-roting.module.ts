import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CompradoresComponent } from "./compradores.component";

const routes: Routes = [
    { path: "", component: CompradoresComponent }
];

@NgModule({
    imports: [ NativeScriptRouterModule.forChild(routes)],
    exports: [ NativeScriptRouterModule ]
})

export class CompradoresRoutingModule { }