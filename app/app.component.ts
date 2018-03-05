import { Component } from "@angular/core";
import { SessionService } from "./services/session/session.services";
import { Router } from "@angular/router";
import { MyHttpGetService } from "./services/http-get/http-get.services";
import statusBar = require("nativescript-status-bar");
import * as dialogs from "ui/dialogs";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [SessionService, MyHttpGetService]
})
export class AppComponent { 
    constructor(private session: SessionService, private router: Router, private myGetService: MyHttpGetService){
        this.session = session;
        this.router = router;
        console.log("FIRST RUN", this.session.getFirstRun());
        console.log("SESSION", this.session.loggedIn());
        if (this.session.loggedIn()) {
            console.log("USER --> ", this.session.getCorreoColaborador());
            console.log("PASS --> ", this.session.getPassColaborador());
            this.GetTalonarios();
            if(this.session.getFirstRun() == true){
                this.router.navigate(["privacidad"]);
            }else{
                this.router.navigate(["talonarios"]);
            }
        }
        else {
            this.router.navigate([""]);
        }
        
    }

     //GET INICIO SESION-------->
    private GetTalonarios() {
        //this.loader.display(true);
        this.myGetService  
            .getDataAuthorization('api/Colaborador/GetCorreo/' + this.session.getCorreoColaborador() + '/')
            .subscribe((result) => {
                console.log("RESULTADO RESPUESTA -----> ", result);
                this.onGetData(result);
            }, (error) => {
                console.log("Error talonarios", error);
                //this.loader.display(false);
                this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios. El token expiro favor de iniciar sesion.');
            });
    }

    private onGetData(data: Response | any) {
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
    }

    public mostrarMensaje (titulo, mensaje) {
        dialogs.alert({
            title:titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    }
    
}
