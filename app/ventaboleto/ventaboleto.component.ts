import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: "VentaBoleto",
    moduleId: module.id,
    templateUrl: "./ventaboleto.component.html",
    styleUrls: ["./ventaboleto.scss"]
})

export class VentaBoletoComponent implements OnInit {
    @ViewChild("CB1") ATodos: ElementRef;
    private txtBtnVender: string;

    constructor(){
        console.log("VENTA BOLETO");
    }

    ngOnInit(){
        this.ATodos.nativeElement.checked = false;
        this.txtBtnVender = "siguiente";
    }

    public toggleCheck(){
        if(this.ATodos.nativeElement.checked){
            this.txtBtnVender = "siguiente";
        }else{
            this.txtBtnVender = "vender boletos";
        }
        //this.ATodos.nativeElement.toggle();
        console.log(this.ATodos.nativeElement.checked);
    }
}