import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");
import { SessionService } from "../services/session/session.services";

@Component({
    selector: "micuenta",
    moduleId: module.id,
    templateUrl: "./micuenta.component.html"
})

export class MiCuentaComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;
    public statusBarState: boolean=true;
    public micuenta: string;
    public imagenPublicitaria: string;
    
    constructor(private session: SessionService){        
        this.micuenta = this.session.getMiCuenta();
        this.micuenta = JSON.parse(this.micuenta);
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}