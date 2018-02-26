import { Component, ViewChild, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");

@Component({
  selector: 'redessociales',
  moduleId: module.id,
  templateUrl: './redes_sociales.component.html'
})
export class RedesSocialesComponent {

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
  // public statusBarState: boolean=true;// statusBar.show();(swipe)="hideStatusBar()"
  // {        
  //     if(this.statusBarState == true)
  //     {
  //         statusBar.hide();
  //         this.statusBarState = false;
  //     }
  //     else if(this.statusBarState == false)
  //     {
  //         statusBar.show();
  //         this.statusBarState = true;
  //     }
  // }
}