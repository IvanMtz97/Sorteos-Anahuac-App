import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import statusBar = require("nativescript-status-bar");
    
@Component({
    selector: "BoletoVendido",
    moduleId: module.id,
    templateUrl: "./boletovendido.component.html"
})
export class BoletoVendidoComponent implements OnInit {
    public selectBoleto: boolean = true;
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;    

    constructor()
    {

    }
    
    ngOnInit(): void 
    {
        console.log("BOLETOVENDIDO");
        this._sideDrawerTransition = new SlideInOnTopTransition();        
    }

    public toggle()
    {
        this.selectBoleto = !this.selectBoleto;
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
