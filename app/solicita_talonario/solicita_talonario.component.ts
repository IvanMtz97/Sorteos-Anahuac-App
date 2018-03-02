import { Component, ViewChild, OnInit } from '@angular/core';
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");
import { MyHttpPostService } from "../services/http-post/http-post.services";
import { SessionService } from "../services/session/session.services";

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
  contador: number = 0;
  validaPagina: boolean = true;

  constructor(private myPostService: MyHttpPostService, private session: SessionService) 
  { 
    var data = JSON.parse(this.session.getInformation());
    console.log("-----------------data-----------------\n\n" + JSON.stringify(data) + "\n\n--------------------------------------");
    // var data =
    // {
    //   "monto_deudor": 3200,
    //   "monto_abonado": 0,
    //   "monto_total": 3200,
    //   "expira": "2018-03-02T00:09:29.7244616Z",
    //   "clave": 1,
    //   "talonarios": [
    //       {
    //           "clave": 8,
    //           "boletos": null,
    //           "Boletos": {
    //               "pendientes": [],
    //               "asignados":[],
    //               "vendidos":[]
    //           }
    //       }
    //     ]
    // }    

    if(data.talonarios.length > 0)    
    {
      for(let i in data.talonarios) 
      {
          if(data.talonarios[i].Boletos.pendientes.length == 0)
          {
            this.contador = this.contador + 1;
          }

          if(this.contador == data.talonarios.length)
          {
            this.validaPagina = false;
          }
      }
    }
    console.log("validaPagina123 -> " + this.validaPagina);
  }
  
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
    console.log("ESPERE SOLICITANDO...........>")
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
//   if(this.talonarios.length > 0) {
//     //BOLETOS PENDIENTES
//     if(this.talonarios[i].pendientes.length == 0)
//     {
//         this.srcIconoTalonario[i] = "res://icono_talonario_gris";
//         this.validaStackBolPen[i] = false;
//     }
//     else
//     {
//         this.srcIconoTalonario[i] = "res://icono_talonario";
//         this.validaStackBolPen[i] = true;
//         this.cantBolPendientes[i] = this.talonarios[i].pendientes.length;
//         console.log("ENTRO AQUI");
//         this.session.setTalonarios(true);
//     }

}