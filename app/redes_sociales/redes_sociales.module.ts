import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { RedesSocialesRoutingModule } from "./redes_sociales-routing.module";
import { RedesSocialesComponent } from "./redes_sociales.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RedesSocialesRoutingModule,
        SharedModule
    ],
    declarations: [
        RedesSocialesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RedesSocialesModule { }