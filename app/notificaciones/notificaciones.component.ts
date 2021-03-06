import { Component, ViewChild, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");
import { SessionService } from "../services/session/session.services";
 
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
  public imagenPublicitaria: string;

  constructor(private session: SessionService)
  {
    this.imagenPublicitaria = this.session.getImagenPublicidad();
  }

  ngOnInit()
  {    
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  eliminarSeleccion()
  {      
  }

  onDrawerButtonTap(): void {
    this.drawerComponent.sideDrawer.showDrawer();
  }

  public countCheck(band) 
  {
    var bandera = true;
    this.count = (band) ? this.count + 1 : this.count - 1;
    if(this.count == 0) bandera = false;
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