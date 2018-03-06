import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { ActivatedRoute, Router } from "@angular/router";
import statusBar = require("nativescript-status-bar");
import { SessionService } from "../services/session/session.services";
  
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
    private visibility: boolean = true; 
    public imagenPublicitaria: string; 

    constructor(private session: SessionService, private router: ActivatedRoute, private route: Router)
    {        
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    
    ngOnInit(): void 
    {        
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.router.params.subscribe((params) => {
            this.Datos = JSON.parse(params["data"]);
            console.dir(this.Datos);
        });

        if(this.Datos != undefined)
        {
            this.visibility = true;
        }
        else
        {
            this.visibility = false;
        }
    }

    public toggle()
    {
        // this.selectBoleto = !this.selectBoleto;
        this.route.navigate(['talonarios']);
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
