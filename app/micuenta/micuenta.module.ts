import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { MiCuentaRoutingModule } from "./micuenta-routing";


import { MiCuentaComponent } from "./micuenta.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MiCuentaRoutingModule,
        SharedModule
    ],
    declarations: [
        MiCuentaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class MiCuentaModule { }