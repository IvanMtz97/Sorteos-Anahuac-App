import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PrivacidadComponent } from "./privacidad.component";

const routes: Routes = [
    { path: "", component: PrivacidadComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class PrivacidadRoutingModule { }