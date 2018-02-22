import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "VentaBoleto",
    moduleId: module.id,
    templateUrl: "./ventaboleto.component.html",
    styleUrls: ["./ventaboleto.scss"]
})

export class VentaBoletoComponent implements OnInit {
    @ViewChild("CB1") ATodos: ElementRef;
    private txtBtnVender: string;
    private Datos: Object;

    constructor(private route: ActivatedRoute){
        
    }

    ngOnInit(){
        this.ATodos.nativeElement.checked = false;
        this.txtBtnVender = "siguiente";
        this.route.params.subscribe(params => {
            this.Datos = JSON.parse(params["data"]);
        });
    }

    public toggleCheck(){
        if(this.ATodos.nativeElement.checked){
            this.txtBtnVender = "siguiente";
        }else{
            this.txtBtnVender = "vender boletos";
        }
    }
}