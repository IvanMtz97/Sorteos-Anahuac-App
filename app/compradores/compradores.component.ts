import { Component, ViewChild, OnInit } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { LoadingService } from "../services/loading/loading";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "Compradores",
    moduleId: module.id,
    templateUrl: "./compradores.component.html",
    styleUrls: ["./compradores.css"],
    providers: [ LoadingService, MyHttpGetService ]
})

export class CompradoresComponent implements OnInit {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    public imagenPublicitaria: string;
    Compradores: any = [];
    Claves: any = [];

    constructor(private session: SessionService, private API: MyHttpGetService, private loading: LoadingService){        
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }

    ngOnInit(){
        console.log("OnInit COMPRADORES");
        var Data = JSON.parse(this.session.getInformation());
        Data.talonarios.forEach(function(talonario){
            talonario.Boletos.asignados.forEach(function(boleto) {
                this.Compradores.push({ Comprador: boleto.comprador, Clave: boleto.clave });
            }.bind(this));
        }.bind(this));

        console.dir(this.Compradores);
    }

    public toggleCheck(eventData, clave, correo){
        if(eventData.checked){
            console.log(correo);
            console.log(clave);
            this.Claves.push(clave);
        }else{
            var index = this.Claves.indexOf(clave);
            this.Claves.splice(index, 1);
        }
    }

    Compartir(){
        this.loading.display(true);
        var i = 1;
        this.Claves.forEach(function(clave){
            this.API.getDataAuthorization("api/Boleto/Notificar?clave="+ clave).subscribe(res => {
                console.log("200 COMPARTIR");
                console.log(res);
                i++;
                if(i == this.Claves.length){
                    this.loading.display(false);
                    dialogs.alert({
                        title: "AVISO",
                        message: "Se han notificado a los compradores",
                        okButtonText: "Ok"
                    });
                }
            }, error => {
                console.log("500 COMPARTIR");
                console.log(error);
            });
        }.bind(this));
    }

    onDrawerButtonTap(): void {
      this.drawerComponent.sideDrawer.showDrawer();
    }
}