import { Component } from "@angular/core";

@Component({
    selector: "Ganadores",
    moduleId: module.id,
    templateUrl: "./ganadores.component.html",
    styleUrls: ["./ganadores.scss"]
})

export class GanadoresComponent {
    constructor(){
        console.log("GANADORES COMPONENT");
    }
}