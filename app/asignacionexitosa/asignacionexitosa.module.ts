import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AsignacionExitosaRoutingModule } from "./asignacionexitosa-routing";


import { AsignacionExitosaComponent } from "./asignacionexitosa.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AsignacionExitosaRoutingModule,
        SharedModule
    ],
    declarations: [
        AsignacionExitosaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AsignacionExitosaModule { }