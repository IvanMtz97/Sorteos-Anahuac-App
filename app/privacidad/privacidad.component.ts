import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { SessionService } from "../services/session/session.services";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
var utilityModule = require("utils/utils");

@Component({
    selector: "Privacidad",
    moduleId: module.id,
    templateUrl: "./privacidad.component.html"
})

export class PrivacidadComponent implements OnInit {
    private Politicas: string;
    private Aceptacion: string;
    private Reglamento: string;
    private Condiciones: string;
    public imagenPublicitaria: string;


    constructor(private page: Page, private session: SessionService, private router: RouterExtensions){
        this.page.actionBarHidden = true;
        this.imagenPublicitaria = this.session.getImagenPublicidad();        
    }

    ngOnInit(){
        this.Politicas = this.session.getPoliticas();
        this.Aceptacion = this.session.getAceptacionTalonarios();
        this.Reglamento = this.session.getReglamento();
        this.Condiciones = this.session.getCondiciones();        
        this.Politicas = JSON.parse(this.Politicas);          
        this.Aceptacion = JSON.parse(this.Aceptacion);  
        this.Reglamento = JSON.parse(this.Reglamento);  
        this.Condiciones = JSON.parse(this.Condiciones); 
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
        this.router.navigate(["talonarios"], { clearHistory: true });
    }
}