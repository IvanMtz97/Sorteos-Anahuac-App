import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

@Component({
    selector: "ConoceSorteo",
    moduleId: module.id,
    templateUrl: "./conocesorteo.component.html",
    styleUrls: ["./estilos.css"]
})

export class ConoceSorteoComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(){
        console.log("CONOCE SORTEO");
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}