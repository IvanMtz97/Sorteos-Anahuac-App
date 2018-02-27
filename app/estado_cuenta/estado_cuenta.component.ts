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
    public idColaborador: string = "";
    public infoColaborador: object = {};

    constructor(private myGetService: MyHttpGetService, private session: SessionService) {
        this.idColaborador = this.session.getIdColaborador();
        console.log("IDCOLABORADOR ---> ", this.idColaborador);
    }

    //GET SORTEO -------->
    private datosColaborador() {
        //this.loader.display(true);
        this.myGetService
            .getDataAuthorization('api/Colaborador/' + this.idColaborador)
            .subscribe((result) => {
                console.log("DATOS COLABORADOR -----> ", result);
                this.infoColaborador = JSON.parse(result.json());
            }, (error) => {
                //this.loader.display(false);
                this.infoColaborador = JSON.parse(this.session.getInformation());
                this.mostrarMensaje('Error', 'Falló al tratar obtener los datos del colaborador');  
            });
    }
    //END GET --------->

    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    public statusBarState: boolean=true;
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.datosColaborador();
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

    public mostrarMensaje (titulo, mensaje) {
        dialogs.alert({
            title:titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    }
}
