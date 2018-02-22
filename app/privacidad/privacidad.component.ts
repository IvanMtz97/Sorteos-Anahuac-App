import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { SessionService } from "../services/session/session.services";

@Component({
    selector: "Privacidad",
    moduleId: module.id,
    templateUrl: "./privacidad.component.html"
})

export class PrivacidadComponent {
    constructor(private page: Page, private session: SessionService, private router: Router){
        this.page.actionBarHidden = true;
        console.log("PRIVACIDAD COMPONENT");
    }

    Aceptar(){
        this.session.setFirstRun(false);
        this.router.navigate(["login"]);
    }
}