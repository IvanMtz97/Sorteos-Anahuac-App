import { Component } from "@angular/core";
import { SessionService } from "./services/session/session.services";
import { Router } from "@angular/router";
var http = require("http");
import { MyHttpGetService } from "./services/http-get/http-get.services";
import statusBar = require("nativescript-status-bar");
import * as dialogs from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [SessionService, MyHttpGetService]
})
export class AppComponent { 
    public imagenPublicidad: string;
    constructor(private session: SessionService, private router: Router, private myGetService: MyHttpGetService, private routeExtension: RouterExtensions){
        this.session = session;
        this.router = router;
        if (this.session.loggedIn()) {
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
        

        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then((r) => {            
            this.imagenPublicidad = "data:image/png;base64,"+ r.toBase64String(); 
            this.session.setImagenPublicidad(this.imagenPublicidad);
        }, (err) => {            
        });            
    }

     //GET INICIO SESION-------->
    private GetTalonarios() {
        //this.loader.display(true);
        this.myGetService  
            .getDataAuthorization('api/Colaborador/GetCorreo/' + this.session.getCorreoColaborador() + '/')
            .subscribe((result) => {
                this.onGetData(result);
            }, (error) => {
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
        }).then(() => {
            console.log("Dialog closed!");
            this.routeExtension.navigate(['/login'], {clearHistory: true})
        });
    }
    
}
