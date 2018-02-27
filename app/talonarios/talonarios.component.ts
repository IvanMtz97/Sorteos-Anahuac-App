import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../services/session/session.services";
import statusBar = require("nativescript-status-bar");


@Component({
    selector: "Talonarios",
    moduleId: module.id,
    templateUrl: "./talonarios.component.html",
    providers: [ SessionService ]
})

export class TalonariosComponent implements OnInit {
    public showDetails: Object = {};
    public tieneTalonarios: boolean = false; 
    public hideBottonSales: boolean = false; 
    public tienePendientes: Array<boolean> = [];
    public noTieneTalonariosTexto: string = "No existen talonarios asignados.";
    public listaTalonarios: Array<object> = [];
    public srcFlecha: Array<string> = [];
    public flecha: Array<boolean> = [];
    public contador: Array<number> = [];
    public count: number = 0;
    public srcIconoTalonario: Array<string> = [];
    public validaStackBolPen: Array<boolean> = [];
    public validaStackBolAsig: Array<boolean> = [];
    public validaStackBolVen: Array<boolean> = [];
    public cantBolPendientes: Array<number> = [];
    public cantBolAsignados: Array<number> = [];
    public cantBolVendidos: Array<number> = [];
    private talonarios: Array<object> = [];
    private PilaBoletos: Array<object> = [];
    public statusBarState: boolean=true;

    constructor(private session: SessionService, private route: ActivatedRoute,  private router: Router){
        console.log("TALONARIOS");
        this.tieneTalonarios = false;          
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        var Data = JSON.parse(this.session.getInformation());
        this.contador = Array(Data.talonarios.length).fill(0);
        console.log("DATOS ----> ", Data);
        if(Data.talonarios.length > 0) {
            this.tieneTalonarios = true;
            this.listaTalonarios = Data.talonarios;
        } 
    }

    hideStatusBar()
    {        
        if(this.statusBarState == true)
        {
            statusBar.hide();
            this.statusBarState = false;
        }
        else if(this.statusBarState == false)
        {
            statusBar.show();
            this.statusBarState = true;
        }
    }

    get sideDrawerTransition(): DrawerTransitionBase {              
        return this._sideDrawerTransition;
    }

    onDrawerButtonTap(): void {        
        this.drawerComponent.sideDrawer.showDrawer();
    }

    public countCheck(band) {
        var bandera = true;
        this.count = (band) ? this.count + 1 : this.count - 1;
        if(this.count == 0) bandera = false;
        console.log("COUNt --->", this.count);
        return bandera;
    }

    public toggle(index){
        this.showDetails[index] = !this.showDetails[index];   
        this.flecha[index] = !this.flecha[index];    
        if(this.flecha[index] == true) {
            this.srcFlecha[index] = "res://arrow_up";        
        } else {
            this.srcFlecha[index] = "res://arrow_down";        
        }     
    } 

    public toggleCheck(eventData, boleto, index){
        if(this.countCheck(eventData.checked)) this.hideBottonSales = true;
        else this.hideBottonSales = false;
        if(eventData.checked){
            this.PilaBoletos.push(boleto);
        }else{
            this.PilaBoletos.splice(index, 1);
        }
    }

    public VenderBoletos(){
        this.router.navigate(["ventaboleto", JSON.stringify({Tipo: "Dos", Talonario: 1000002, Boletos: this.PilaBoletos})]);
    }

    public setInitialSelected (i) {

    }

    public setInitialValue(i, talonarios)
    {
        if(this.contador[i] == 0) {
            this.srcFlecha[i] = "res://arrow_down";   
        }
        this.contador[i] = (this.contador[i]+1);

        if(talonarios.length > 0) {
            //BOLETOS PENDIENTES
            if(talonarios[i].Boletos.pendientes.length == 0) {
                this.srcIconoTalonario[i] = "res://icono_talonario_gris";
                this.validaStackBolPen[i] = false;
                this.tienePendientes[i] = false;
            } else {
                this.srcIconoTalonario[i] = "res://icono_talonario";
                this.validaStackBolPen[i] = true;
                this.tienePendientes[i] = true;
                this.cantBolPendientes[i] = talonarios[i].Boletos.pendientes.length;
                this.session.setTalonarios(true);
            }

            //BOLETOS ASIGNADOS
            if(talonarios[i].Boletos.asignados.length == 0) {
                this.validaStackBolAsig[i] = false;
            } else {
                this.cantBolAsignados[i] = talonarios[i].Boletos.asignados.length;
                this.validaStackBolAsig[i] = true;            
            }

            //BOLETOS VENDIDOS
            if(talonarios[i].Boletos.vendidos.length == 0) {
                this.validaStackBolVen[i] = false;
            } else {
                this.cantBolVendidos[i] = talonarios[i].Boletos.vendidos.length;
                this.validaStackBolVen[i] = true;            
            }
        }
    }

    public VentaBoleto(boleto, talonario){
        var Data = {
            Tipo: "Uno",
            Boleto: boleto.clave,
            Talonario: talonario.clave
        };
        this.router.navigate(['ventaboleto', JSON.stringify(Data)]);
    }
    
    
    public ConsultaBoleto(boleto, talonario){
        var InfoBoleto = {
            Boleto: boleto,
            Talonario: talonario.talonario
        };
        this.router.navigate(['detalleboletovendido', JSON.stringify(InfoBoleto)]);
    }

}