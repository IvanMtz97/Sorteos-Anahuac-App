import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import statusBar = require("nativescript-status-bar");

@Component({
    selector: "Estado_Cuenta",
    moduleId: module.id,
    templateUrl: "./estado_cuenta.component.html"
})
export class EstadoCuentaComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    constructor()
    {
        console.log("ESTADO CUENTA");
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    public statusBarState: boolean=true;
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();                            
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
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
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
