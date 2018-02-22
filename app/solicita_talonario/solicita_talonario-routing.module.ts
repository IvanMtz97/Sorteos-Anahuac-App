import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SolicitaTalonarioComponent } from "./solicita_talonario.component";

const routes: Routes = [
    { path: "", component: SolicitaTalonarioComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SolicitaTalonarioRoutingModule { }