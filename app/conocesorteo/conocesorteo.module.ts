import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { ConoceSorteoRoutingModule } from "./conocesorteo-routing";


import { ConoceSorteoComponent } from "./conocesorteo.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ConoceSorteoRoutingModule,
        SharedModule
    ],
    declarations: [
        ConoceSorteoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ConoceSorteoModule { }