import { Component, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";

@Component({
    selector: "Compradores",
    moduleId: module.id,
    templateUrl: "./compradores.component.html",
    styleUrls: ["./compradores.css"]
})

export class CompradoresComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    public imagenPublicitaria: string; 

    constructor(private session: SessionService){        
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }

    onDrawerButtonTap(): void {
      this.drawerComponent.sideDrawer.showDrawer();
    }
}