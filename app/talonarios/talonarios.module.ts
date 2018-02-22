import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { TalonariosRoutingModule } from "./talonarios-routing";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";


import { TalonariosComponent } from "./talonarios.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TalonariosRoutingModule,
        SharedModule,
        TNSCheckBoxModule
    ],
    declarations: [
        TalonariosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class TalonariosModule { }