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
        //this.session.setLoggedIn(false);
        if (this.session.loggedIn()) {
            this.router.navigate(["talonarios"]);
        }
        else {
            this.router.navigate([""]);
        }
    }
    
}
