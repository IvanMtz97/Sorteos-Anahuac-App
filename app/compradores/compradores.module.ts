import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { CompradoresRoutingModule } from "./compradores-roting.module";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";

import { CompradoresComponent } from "./compradores.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptCommonModule,
        CompradoresRoutingModule,
        TNSCheckBoxModule
    ],
    declarations: [
        CompradoresComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CompradoresModule { }