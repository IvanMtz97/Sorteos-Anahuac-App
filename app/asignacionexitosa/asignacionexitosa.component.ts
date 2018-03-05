import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";

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
    constructor(private session: SessionService, private router: ActivatedRoute){
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
        this.drawerComponent.sideDrawer.showDrawer();
    }
}