import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { ModalComponent } from "./app.modal";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'redessociales',
  moduleId: module.id,
  templateUrl: './redes_sociales.component.html'
})
export class RedesSocialesComponent {

  public constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef)
  {

  }
  
  public showModal() {
    let options = {
        context: {},
        fullscreen: true,
        viewContainerRef: this.vcRef
    };
    this.modal.showModal(ModalComponent, options).then(res => {
        console.log(res);
    });
  } 

  @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;

  public comparteSorteo()
  { 
    console.log("comparteSorteo()");
  }

  public comparteBoletos()
  { 
    console.log("comparteBoletos()");
  }

  ngOnInit()
  {
    console.log("REDES SOCIALES");
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }
}