import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { SolicitaTalonarioRoutingModule } from "./solicita_talonario-routing.module";
import { SolicitaTalonarioComponent } from "./solicita_talonario.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SolicitaTalonarioRoutingModule,
        SharedModule
    ],
    declarations: [
        SolicitaTalonarioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SolicitaTalonarioModule { }
