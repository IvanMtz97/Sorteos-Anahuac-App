import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { MyHttpPostService } from "../services/http-post/http-post.services";

@Component({
    selector: "Confirmar",
    moduleId: module.id,
    templateUrl: "./confirmar.component.html",
    styleUrls: ["./confirmar.css"],
    providers: [ MyHttpPostService ]
})

export class ConfirmarComponent implements OnInit{
    private Datos: any = [];

    constructor(private route: ActivatedRoute, private router: RouterExtensions, private API: MyHttpPostService){
        console.log("CONFIRMAR COMPONENT");
    }

    ngOnInit(){
        this.route.params.subscribe((params) => {
            this.Datos = JSON.parse(params["data"]);
            console.dir(this.Datos);
        });
    }

    Si(){
        if(this.Datos.Tipo == "Uno"){
            this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: this.Datos } )]);
            this.API.postData(this.Datos.Boleto.Boletos.Info.comprador, "api/Boleto/Vender").subscribe((response) => {
                console.log(response);
            });
        }else{
            this.router.navigate(["talonarios"], { clearHistory : true});
        }
    }

    Varios(){
        this.router.navigate(["talonarios"], { clearHistory: true });
    }
}