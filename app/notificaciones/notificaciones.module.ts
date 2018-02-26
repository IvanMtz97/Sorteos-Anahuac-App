import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { NotificacionesRoutingModule } from "./notificaciones-routing.module";
import { NotificacionesComponent } from "./notificaciones.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NotificacionesRoutingModule,
        SharedModule
    ],
    declarations: [
        NotificacionesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NotificacionesModule { }