import { Component, ViewChild, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");
import { MyHttpPostService } from "../services/http-post/http-post.services";

@Component({
  selector: 'solicitatalonario',
  moduleId: module.id,
  templateUrl: './solicita_talonario.component.html',
  providers: [MyHttpPostService]
})
export class SolicitaTalonarioComponent {
  text1: string = '¡Apreciamos mucho tu apoyo!';
  text2: string = 'Haz click en el boton para solicitar un nuevo talonario.';
  text3: string = '¡GRACIAS!';
  text4: string = 'SOLICITAR TALONARIO';
  message : string = "";

  constructor(private myPostService: MyHttpPostService) { }
  
  @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;

  public makePostSolitarTalonario() {
    console.log("ENTRA AQUI ---> ");
    this.myPostService
        .postData({}, 'api/Talonario/Solicitar')
        .subscribe(res => {
            console.log("RES --->", res);
            //this.message = (<any>res).json.data.username;
        });
  }

  public solicitaTalonario()
  { 
    console.log("ESPERE SOLICITANDO...........")
    this.makePostSolitarTalonario();
  }

  ngOnInit()
  {
    console.log("SOLICITA TALONARIO");
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