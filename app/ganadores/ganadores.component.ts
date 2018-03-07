import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";

@Component({
    selector: "Ganadores",
    moduleId: module.id,
    templateUrl: "./ganadores.component.html",
    styleUrls: ["./ganadores.scss"]
})

export class GanadoresComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;
    public ganadores: string;
    public imagenPublicitaria: string;

    constructor(private session: SessionService){        
        this.ganadores = this.session.getGanadores();
        this.ganadores = JSON.parse(this.ganadores);
        this.imagenPublicitaria = this.session.getImagenPublicidad();    
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}