import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import statusBar = require("nativescript-status-bar");
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { SessionService } from "../services/session/session.services";

@Component({
    selector: "Estado_Cuenta",
    moduleId: module.id,
    templateUrl: "./estado_cuenta.component.html"
})
export class EstadoCuentaComponent implements OnInit {
    
    constructor(private myGetService: MyHttpGetService)
    {
        console.log("ESTADO CUENTA");
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    public statusBarState: boolean=true;
    
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();                            
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
      
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    // private getEstadoCuenta() {
    //     //this.loader.display(true);
    //     this.myGetService
    //         .getData('api/Colaborador'+'prueba.sorteo@anahuac.mx')
    //         .subscribe((result) => {
    //             console.log("RESULTADO RESPUESTA -----> ", result);
    //         }, (error) => {
    //             console.log("ERROR", error);                
    //         });
    // }
}
