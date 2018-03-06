import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");
import { SessionService } from "../services/session/session.services";
  
@Component({
    selector: "ConoceSorteo",
    moduleId: module.id,
    templateUrl: "./conocesorteo.component.html",
    styleUrls: ["./estilos.css"]
})

export class ConoceSorteoComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;
    public statusBarState: boolean=true;
    public conocesorteo: string;
    public imagenPublicitaria: string;

    constructor(private session: SessionService){        
        this.conocesorteo = this.session.getConoceSorteo();
        this.conocesorteo = JSON.parse(this.conocesorteo);  
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}