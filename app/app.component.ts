import { Component } from "@angular/core";
import { SessionService } from "./services/session/session.services";
import { Router } from "@angular/router";
var http = require("http");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [SessionService]
})
export class AppComponent { 
    public imagenPublicidad: string;

    constructor(private session: SessionService, private router: Router){
        this.session = session;
        this.router = router;
        console.log("FIRST RUN", this.session.getFirstRun());
        console.log("SESSION", this.session.loggedIn());
        if (this.session.loggedIn()) {
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
            console.log("-----r-----");            
            this.imagenPublicidad = "data:image/png;base64,"+ r.toBase64String(); 
            this.session.setImagenPublicidad(this.imagenPublicidad);
            console.log("-----------");
        }, (err) => {            
            console.log("-----e-----");
            console.log("-----------");
        });

    }        
}
