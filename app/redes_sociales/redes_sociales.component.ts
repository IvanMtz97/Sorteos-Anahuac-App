import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { ModalComponent } from "./app.modal";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { SessionService } from "../services/session/session.services";

@Component({
  selector: 'redessociales',
  moduleId: module.id,
  templateUrl: './redes_sociales.component.html'
})
export class RedesSocialesComponent {
  public imagenPublicitaria: string; 
  
  constructor(private session: SessionService, private modal: ModalDialogService, private vcRef: ViewContainerRef)
  {
    this.imagenPublicitaria = this.session.getImagenPublicidad();
  }
  
  public showModal(queCompartir) {
    let options = {
        context: {queCompartir},
        fullscreen: true,
        viewContainerRef: this.vcRef
    };
    this.modal.showModal(ModalComponent, options).then(res => {        
    });    
  } 

  @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;

  ngOnInit()
  {    
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }
}