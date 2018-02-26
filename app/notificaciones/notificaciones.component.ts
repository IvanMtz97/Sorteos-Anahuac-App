import { Component, ViewChild, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");

@Component({
  selector: 'notificaciones',
  moduleId: module.id,
  templateUrl: './notificaciones.component.html'
})
export class NotificacionesComponent {  

  @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;
  public hideButtonDelete: boolean = true;
  public count: number = 0;
  private PilaMensajes: Array<object> = [];

  ngOnInit()
  {
    console.log("NOTIFICACIONES");
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  eliminarSeleccion()
  {
      console.log("eliminarSeleccion()");
  }

  onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }

  public countCheck(band) 
  {
    var bandera = true;
    this.count = (band) ? this.count + 1 : this.count - 1;
    if(this.count == 0) bandera = false;
    console.log("COUNT --->", this.count);
    return bandera; 
    }

  public toggleCheck(eventData, mensaje, index){
    if(this.countCheck(eventData.checked)) this.hideButtonDelete = true;
    else this.hideButtonDelete = false;
    if(eventData.checked){
        this.PilaMensajes.push(mensaje);
    }else{
        this.PilaMensajes.splice(index, 1);
    }
    console.log("hideButtonDelete: " + this.hideButtonDelete);
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
  public mensajes = 
  [
    {
        messageId:"001",
        from:"Juan Jose Hernandez",
        message: "Saludos cordiales"
    },
    {
        messageId:"002",
        from:"Pedro Alberto Garcia",
        message: "Saludos cordialesx2"
    }
  ]
}