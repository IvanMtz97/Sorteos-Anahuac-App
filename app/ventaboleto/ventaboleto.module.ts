import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { VentaBoletoRoutingModule } from "./ventaboleto-routing.module";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FormsModule } from "@angular/forms";

import { VentaBoletoComponent } from "./ventaboleto.component";

import { VentaBoletoModalComponent } from "./ventaboleto-modal.component"
import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        VentaBoletoRoutingModule,
        SharedModule,
        TNSCheckBoxModule,
        FormsModule
    ],
    declarations: [
        VentaBoletoComponent,
        VentaBoletoModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ VentaBoletoModalComponent ],
    providers: [ ModalDialogService ]
})
export class VentaBoletoModule { }