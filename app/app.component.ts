import { Component } from "@angular/core";
import { SessionService } from "./services/session/session.services";
import { Router } from "@angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [SessionService]
})
export class AppComponent { 
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
        
    }
    
}
