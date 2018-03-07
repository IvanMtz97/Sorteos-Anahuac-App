import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";
import { isAndroid, isIOS } from "platform";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "AsignacionExitosa",
    moduleId: module.id,
    templateUrl: "./asignacionexitosa.component.html",
    styleUrls: ["./asignacionexitosa.css"]
})

export class AsignacionExitosaComponent implements OnInit{
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;
    public imagenPublicitaria: string;      
    boleto: boolean = false;
    Datos: any = [];

    toggle(){
        this.boleto = !this.boleto;
    }
    constructor(private session: SessionService, private router: ActivatedRoute, private Router: Router, private GET: MyHttpGetService){
        console.log("ASIGNACION COMPONENT");
          
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }

    ngOnInit(){
        this.router.params.subscribe(params => {
            this.Datos = JSON.parse(params["data"]);
        });
    }

    onDrawerButtonTap(): void {
        if(isIOS){
            this.Router.navigate(["talonarios"]);
        }else if (isAndroid){
            this.drawerComponent.sideDrawer.showDrawer();
        }
    }
    
    EnviarCorreo(){
        var Boleto = this.Datos.Boletos.Boleto.Boleto.clave;
        console.dir(this.Datos.Boletos);
        this.GET.getDataAuthorization("api/Boleto/Notificar?clave=" + Boleto).subscribe(res => {
            dialogs.alert({
                title:"AVISO",
                message: "Se ha notificado exitosamente al correo " + this.Datos.Info.Correoelectronico,
                okButtonText: "Ok"
            });
            console.log("2OO CORREO");
            console.log(res);
        }, error => {
            console.log("500 CORREO");
            console.log(error);
        });
    }
}