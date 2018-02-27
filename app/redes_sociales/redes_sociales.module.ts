import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { RedesSocialesRoutingModule } from "./redes_sociales-routing.module";
import { RedesSocialesComponent } from "./redes_sociales.component";

import { ModalComponent } from "./app.modal";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RedesSocialesRoutingModule,
        SharedModule
    ],
    declarations: [
        RedesSocialesComponent, ModalComponent
    ],
    entryComponents: [
        ModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [ModalDialogService]
})
export class RedesSocialesModule { }