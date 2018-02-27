import { Component, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

@Component({
    selector: "Compradores",
    moduleId: module.id,
    templateUrl: "./compradores.component.html",
    styleUrls: ["./compradores.css"]
})

export class CompradoresComponent {
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    constructor(){
        console.log("COMPRADORES");
    }

    onDrawerButtonTap(): void {
      this.drawerComponent.sideDrawer.showDrawer();
    }
}