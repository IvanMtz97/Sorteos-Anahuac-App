import { Component } from "@angular/core";

@Component({
    selector: "ConoceSorteo",
    moduleId: module.id,
    templateUrl: "./conocesorteo.component.html",
    styleUrls: ["./estilos.css"]
})

export class ConoceSorteoComponent {
    constructor(){
        console.log("CONOCE SORTEO");
    }
}