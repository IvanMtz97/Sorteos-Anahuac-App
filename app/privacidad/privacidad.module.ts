import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { PrivacidadRoutingModule } from "./privacidad-routing";

import { PrivacidadComponent } from "./privacidad.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PrivacidadRoutingModule,
        SharedModule
    ],
    declarations: [
        PrivacidadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PrivacidadModule { }