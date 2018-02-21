import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { VentaBoletoRoutingModule } from "./ventaboleto-routing.module";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";

import { VentaBoletoComponent } from "./ventaboleto.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VentaBoletoRoutingModule,
        SharedModule,
        TNSCheckBoxModule
    ],
    declarations: [
        VentaBoletoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VentaBoletoModule { }