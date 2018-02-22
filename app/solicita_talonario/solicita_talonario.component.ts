import { Component, ViewChild, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

@Component({
  selector: 'solicitatalonario',
  moduleId: module.id,
  templateUrl: './solicita_talonario.component.html'
})
export class SolicitaTalonarioComponent {
  text1: string = '¡Apreciamos mucho tu apoyo!';
  text2: string = 'Haz click en el boton para solicitar un nuevo talonario.';
  text3: string = '¡GRACIAS!';
  text4: string = 'SOLICITAR TALONARIO';
  
  @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;

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

  ngOnInit()
  {
    console.log("SOLICITA TALONARIO");
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }
}