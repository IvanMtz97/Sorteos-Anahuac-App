import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "BoletoVendido",
    moduleId: module.id,
    templateUrl: "./boletovendido.component.html"
})
export class BoletoVendidoComponent implements OnInit {
    public selectBoleto: boolean = true;
    constructor()
    {

    }
    
    ngOnInit(): void 
    {
        console.log("BOLETOVENDIDO");
    }

    public toggle()
    {
        this.selectBoleto = !this.selectBoleto;
    }
}
