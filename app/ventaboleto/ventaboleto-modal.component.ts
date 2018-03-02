import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { VentaBoletoComponent } from "./ventaboleto.component";

@Component({
    selector: "venta-modal",
    moduleId: module.id,
    templateUrl: "./ventaboleto-modal.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ MyHttpGetService ]
})

export class VentaBoletoModalComponent {
    Compradores: Array<Comprador>;
    constructor(private GET: MyHttpGetService){
        console.log("MODAL VENTA BOLETO");

        this.Compradores = [];
        for(var i = 0; i<=5; i++){
            this.Compradores.push(new Comprador(i, "Milton Ivan", "Martinez", "Gonzalez"));
        }

    }

    onItemTap(evt){
        console.dir(evt.index);
    }

    handleInputChanged(evt){
        if(evt.object.text.length > 3){
            console.log(evt.object.text);
            //TRAER COMPRADOR
        }
    }
}

class Comprador {
    public id: number;
    public nombre: string;
    public appat: string;
    public apmat: string;
    public nombre_completo: string;
    constructor(id, nombre, appat, apmat){
        this.id = id;
        this.nombre = nombre;
        this.appat = appat;
        this.apmat = apmat;
        this.nombre_completo = nombre + " " + appat + " " + apmat; 
    }
}