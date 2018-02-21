import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { BoletoVendidoRoutingModule } from "./boletovendido-routing.module";
import { BoletoVendidoComponent } from "./boletovendido.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BoletoVendidoRoutingModule,
        SharedModule
    ],
    declarations: [
        BoletoVendidoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BoletoVendidoModule { }
