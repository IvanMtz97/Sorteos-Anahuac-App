import { Component } from "@angular/core";

@Component({
    selector: "AsignacionExitosa",
    moduleId: module.id,
    templateUrl: "./asignacionexitosa.component.html",
    styleUrls: ["./asignacionexitosa.css"]
})

export class AsignacionExitosaComponent{

    boleto: boolean = false;

    DataBoletos = [{
                    numero: "004560",
                    nombres: "Juan José",
                    apellidos: "Martínez González",
                    nombre_completo: "Juan José Martínez González"
                },
                {
                    numero: "004561",
                    nombres: "Milton Ivan",
                    apellidos: "Martínez González",
                    nombre_completo: "Milton Ivan Martínez González"
                },
                {
                    numero: "004562",
                    nombres: "Pedro",
                    apellidos: "Pereira Perez",
                    nombre_completo: "Pedro Pereira Perez"
                },
                {
                    numero: "004563",
                    nombres: "Pablo Pedro",
                    apellidos: "Jimenez Juarez",
                    nombre_completo: "Pablo Pedro Jimenez Juarez"
                }];

    toggle(){
        this.boleto = !this.boleto;
    }

    constructor(){
        console.log("ASIGNACION EXITOSA");
        console.log("TAMAÑO ARRAY", this.DataBoletos.length);
    }
}