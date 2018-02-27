import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { SessionService } from "../services/session/session.services";
var utilityModule = require("utils/utils");

@Component({
    selector: "Privacidad",
    moduleId: module.id,
    templateUrl: "./privacidad.component.html"
})

export class PrivacidadComponent implements OnInit {
    private Politicas: string = "";
    private Aceptacion: string = "";
    private Reglamento: string = "";
    private Condiciones: string = "";


    constructor(private page: Page, private session: SessionService, private router: Router){
        this.page.actionBarHidden = true;
        console.log("PRIVACIDAD COMPONENT");
    }

    ngOnInit(){
        this.Politicas = "https://www.facebook.com/";
        this.Aceptacion = "https://www.npmjs.com/package/nativescript-openurl";
        this.Reglamento = "https://web.skype.com/en/";
        this.Condiciones = "https://google.com/";
        console.log(this.Politicas);
        console.log(this.Aceptacion);
        console.log(this.Reglamento);
        console.log(this.Condiciones);
    }

    btnPolitica(){
        utilityModule.openUrl(this.Politicas);
    }

    btnCondiciones(){
        utilityModule.openUrl(this.Condiciones);
    }

    btnReglamento(){
        utilityModule.openUrl(this.Reglamento);
    }

    btnAceptacion(){
        utilityModule.openUrl(this.Aceptacion);
    }

    Aceptar(){
        this.session.setFirstRun(false);
        this.router.navigate(["login"]);
    }
}