import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { ActivatedRoute } from "@angular/router";
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
    private Datos: any = [];   

    constructor(private router: ActivatedRoute)
    {
        console.log("BOLETO VENDIDO COMPONENT");
    }
    
    ngOnInit(): void 
    {
        console.log("BOLETOVENDIDO");
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.router.params.subscribe((params) => {
            this.Datos = JSON.parse(params["data"]);
            console.dir(this.Datos);
        });
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
