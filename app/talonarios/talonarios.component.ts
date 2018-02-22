import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../services/session/session.services";

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
    public noTieneTalonariosTexto: string = "No cuentas con talonarios asignados.";
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

    constructor(private session: SessionService, private route: ActivatedRoute,  private router: Router){
        console.log("TALONARIOS");
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.tieneTalonarios = true;
        var Data = JSON.parse(this.session.getInformation());
        this.contador = Array(Data.talonarios.length).fill(0); 
        if(Data.talonarios.length > 0) {
            this.tieneTalonarios = true;
            this.listaTalonarios = Data.talonarios;
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

    public toggleCheck(eventData){
        if(this.countCheck(eventData.checked)) this.hideBottonSales = true;
        else this.hideBottonSales = false;
        console.log("CHECKED --->", eventData.checked);
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
            if(talonarios[i].pendientes.length == 0) {
                this.srcIconoTalonario[i] = "res://icono_talonario_gris";
                this.validaStackBolPen[i] = false;
                this.tienePendientes[i] = false;
            } else {
                this.srcIconoTalonario[i] = "res://icono_talonario";
                this.validaStackBolPen[i] = true;
                this.tienePendientes[i] = true;
                this.cantBolPendientes[i] = talonarios[i].pendientes.length;
                this.session.setTalonarios(true);
            }

            //BOLETOS ASIGNADOS
            if(talonarios[i].asignados.length == 0) {
                this.validaStackBolAsig[i] = false;
            } else {
                this.cantBolAsignados[i] = talonarios[i].asignados.length;
                this.validaStackBolAsig[i] = true;            
            }

            //BOLETOS VENDIDOS
            if(talonarios[i].vendidos.length == 0) {
                this.validaStackBolVen[i] = false;
            } else {
                this.cantBolVendidos[i] = talonarios[i].vendidos.length;
                this.validaStackBolVen[i] = true;            
            }
        }
    }

    public VentaBoleto(boleto, talonario){
        var Data = {
            Boleto: boleto.numero,
            Talonario: talonario.talonario
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