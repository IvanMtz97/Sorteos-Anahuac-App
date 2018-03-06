import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";
import { isAndroid, isIOS } from "platform";

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
    constructor(private session: SessionService, private router: ActivatedRoute, private Router: Router){
        console.log("ASIGNACION COMPONENT");
          
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }

    ngOnInit(){
        this.router.params.subscribe(params => {
            this.Datos = JSON.parse(params["data"]);
            console.dir(this.Datos);
        });
    }

    onDrawerButtonTap(): void {
        if(isIOS){
            this.Router.navigate(["talonarios"]);
        }else if (isAndroid){
            this.drawerComponent.sideDrawer.showDrawer();
        }
    }
}