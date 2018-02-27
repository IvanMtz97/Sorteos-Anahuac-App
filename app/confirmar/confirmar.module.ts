import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ConfirmarRoutingModule } from "./confirmar-routing.module";

import { ConfirmarComponent } from "./confirmar.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptCommonModule,
        ConfirmarRoutingModule
    ],
    declarations: [
        ConfirmarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ConfirmarModule { }