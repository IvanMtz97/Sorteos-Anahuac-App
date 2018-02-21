import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { EstadoCuentaRoutingModule } from "./estado_cuenta-routing.module";
import { EstadoCuentaComponent } from "./estado_cuenta.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EstadoCuentaRoutingModule,
        SharedModule
    ],
    declarations: [
        EstadoCuentaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EstadoCuentaModule { }
