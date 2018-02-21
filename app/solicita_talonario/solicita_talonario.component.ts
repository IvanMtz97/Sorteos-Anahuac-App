import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as dialogs from "ui/dialogs";

@Component({
  selector: 'solicitatalonario',
  templateUrl: 'modules/solicita_talonario/solicita_talonario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitaTalonarioComponent {
  text1: string = '¡Apreciamos mucho tu apoyo!';
  text2: string = 'Haz click en el boton para solicitar un nuevo talonario.';
  text3: string = '¡GRACIAS!';
  text4: string = 'SOLICITAR TALONARIO';


  public solicitaTalonario()
  { 
    dialogs.confirm({
      title: "¡TIENES UN NUEVO TALONARIO!",
      message: "¿Deseas descargarlo?",
      cancelButtonText: "No",
      okButtonText: "Si"
    }).then(result => {
        // result argument is boolean
        console.log("Dialog result: " + result);
    });
  }
}