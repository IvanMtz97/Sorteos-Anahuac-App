import { Component } from "@angular/core";

@Component({
    selector: "Compradores",
    moduleId: module.id,
    templateUrl: "./compradores.component.html",
    styleUrls: ["./compradores.css"]
})

export class CompradoresComponent {
    constructor(){
        console.log("COMPRADORES");
    }
}