import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

@Component({
    selector: "Ganadores",
    moduleId: module.id,
    templateUrl: "./ganadores.component.html",
    styleUrls: ["./ganadores.scss"]
})

export class GanadoresComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(){
        console.log("GANADORES COMPONENT");
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}