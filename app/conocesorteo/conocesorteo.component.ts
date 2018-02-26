import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");

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

    constructor(){
        console.log("CONOCE SORTEO");
        statusBar.show();
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    // public statusBarState: boolean=true;// statusBar.show();(swipe)="hideStatusBar()"
    // hideStatusBar()
    // {        
    //     if(this.statusBarState == true)
    //     {
    //         statusBar.hide();
    //         this.statusBarState = false;
    //     }
    //     else if(this.statusBarState == false)
    //     {
    //         statusBar.show();
    //         this.statusBarState = true;
    //     }
    // }
}