import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import * as dialogs from "ui/dialogs";
import * as utils from "utils/utils";
import statusBar = require("nativescript-status-bar");
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { SessionService } from "../services/session/session.services";

@Component({
    selector: "Estado_Cuenta",
    moduleId: module.id,
    templateUrl: "./estado_cuenta.component.html",
    providers: [MyHttpGetService, SessionService]
})
export class EstadoCuentaComponent implements OnInit {
    public infoColaborador: object = {};
    public imagenPublicitaria: string; 

    constructor(private myGetService: MyHttpGetService, private session: SessionService) {
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    public statusBarState: boolean=true;
    
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.infoColaborador = JSON.parse(this.session.getInformation());
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
      
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    public mostrarMensaje (titulo, mensaje) {
        dialogs.alert({
            title:titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    }
}
