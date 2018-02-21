import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { GanadoresRoutingModule } from "./ganadores-routing";


import { GanadoresComponent } from "./ganadores.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        GanadoresRoutingModule,
        SharedModule
    ],
    declarations: [
        GanadoresComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GanadoresModule { }