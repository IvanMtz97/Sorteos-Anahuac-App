import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ConfirmarComponent } from "./confirmar.component";

const routes: Routes = [
    {path: "", component: ConfirmarComponent}
];

@NgModule({
    imports: [ NativeScriptRouterModule.forChild(routes)],
    exports: [ NativeScriptRouterModule ]
})

export class ConfirmarRoutingModule { }