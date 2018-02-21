import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

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
}
