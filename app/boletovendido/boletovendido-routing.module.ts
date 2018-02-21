import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BoletoVendidoComponent } from "./boletovendido.component";

const routes: Routes = [
    { path: "", component: BoletoVendidoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BoletoVendidoRoutingModule { }
