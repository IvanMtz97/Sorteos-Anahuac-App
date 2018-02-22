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

    constructor(private session: SessionService, private route: ActivatedRoute,  private router: Router){
        console.log("TALONARIOS");
        this.contador = Array(this.talonarios.length).fill(0); 
    }
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();

        if(this.talonarios.length > 0) {
            this.tieneTalonarios = true;
            this.listaTalonarios = this.talonarios;
            //this.listaTalonarios = Data.talonarios;
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
        //this.ATodos.nativeElement.toggle();
        if(this.countCheck(eventData.checked)) this.hideBottonSales = true;
        else this.hideBottonSales = false;
        console.log("CHECKED --->", eventData.checked);
    }

    public setInitialSelected (i) {

    }

    public setInitialValue(i)
    {    
        if(this.contador[i] == 0) {
            this.srcFlecha[i] = "res://arrow_down";   
        }
        this.contador[i] = (this.contador[i]+1);

        if(this.talonarios.length > 0) {
            //BOLETOS PENDIENTES
            if(this.talonarios[i].pendientes.length == 0) {
                this.srcIconoTalonario[i] = "res://icono_talonario_gris";
                this.validaStackBolPen[i] = false;
                this.tienePendientes[i] = false;
            } else {
                this.srcIconoTalonario[i] = "res://icono_talonario";
                this.validaStackBolPen[i] = true;
                this.tienePendientes[i] = true;
                this.cantBolPendientes[i] = this.talonarios[i].pendientes.length;
                this.session.setTalonarios(true);
            }

            //BOLETOS ASIGNADOS
            if(this.talonarios[i].asignados.length == 0) {
                this.validaStackBolAsig[i] = false;
            } else {
                this.cantBolAsignados[i] = this.talonarios[i].asignados.length;
                this.validaStackBolAsig[i] = true;            
            }

            //BOLETOS VENDIDOS
            if(this.talonarios[i].vendidos.length == 0) {
                this.validaStackBolVen[i] = false;
            } else {
                this.cantBolVendidos[i] = this.talonarios[i].vendidos.length;
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

    private talonarios = [
        {    
        "talonario": "1000001",
        "vendidos": [{
            "numero": "4564",
            "info": {
                "clave" : "203191034955920686909046938123",
                "folio" : "032140",
                "token" : "ax129xcxa191m0234mpsdPMAdqmwd10",
                "folio_digital" : "00FA2E23",
                "vendido": true,
                "costo" : "2900.00",
                "comprador" : {
                    "nombre" : "Milton Ivan",
                    "apellidos" : "Martinez Gonzalez",
                    "nombre_completo" : "Milton Ivan Martinez Gonzalez",
                    "correo" : "ivanmartinez.gonzalez97@gmail.com",
                    "celular" : "8126522105",
                    "direccion" : {
                        "calle" : "Mina de cobre",
                        "numero" : "306",
                        "colonia" : "Estancia",
                        "codigo_postal" : "66087",
                        "estado" : "Nuevo Leon",
                        "municipio" : "San Nicolas",
                        "telefono" : "83340359"
                    }
                },
                "folio_talonario" : "190fas113",
                "clave_sorteo" : "9550680383193521",
                "clave_colaborador" : "1845392834951",
                "_conToken" : true
            }
        },{
            "numero" : "4565",
            "info" : {
                "clave" : "27663524215676867845",
                "folio" : "562346",
                "token" : "AxC0E2e9M230R0F3df2",
                "folio_digital" : "0FAMP2",
                "vendido": true,
                "costo" : "1200.00",
                "comprador" : {
                    "nombre" : "Jose",
                    "apellidos" : "Perez Perez",
                    "nombre_completo" : "Jose Perez Perez",
                    "correo" : "joseperez.perez@gmail.com",
                    "celular" : "812313452",
                    "direccion" : {
                        "calle" : "Mina de cobre",
                        "numero" : "306",
                        "colonia" : "Estancia",
                        "codigo_postal" : "66087",
                        "estado" : "Nuevo Leon",
                        "municipio" : "San Nicolas",
                        "telefono" : "83340359"
                    }
                },
                "folio_talonario" : "190fas113",
                "clave_sorteo" : "9550680383193521",
                "clave_colaborador" : "1845392834951",
                "_conToken" : false
            }
        }],
        "pendientes" : [],
        "asignados" : [
            {
                "numero": "4564",
                "info": {
                    "clave" : "203191034955920686909046938123",
                    "folio" : "032140",
                    "token" : "ax129xcxa191m0234mpsdPMAdqmwd10",
                    "folio_digital" : "00FA2E23",
                    "vendido": true,
                    "costo" : "2900.00",
                    "comprador" : {
                        "nombre" : "Milton Ivan",
                        "apellidos" : "Martinez Gonzalez",
                        "nombre_completo" : "Milton Ivan Martinez Gonzalez",
                        "correo" : "ivanmartinez.gonzalez97@gmail.com",
                        "celular" : "8126522105",
                        "direccion" : {
                            "calle" : "Mina de cobre",
                            "numero" : "306",
                            "colonia" : "Estancia",
                            "codigo_postal" : "66087",
                            "estado" : "Nuevo Leon",
                            "municipio" : "San Nicolas",
                            "telefono" : "83340359"
                        }
                    },
                    "folio_talonario" : "190fas113",
                    "clave_sorteo" : "9550680383193521",
                    "clave_colaborador" : "1845392834951",
                    "_conToken" : true
                }
            }
        ]
    },
    {
        "talonario": "1000002",
        "vendidos": [{
            "numero": "4564",
            "info": {
                "clave" : "203191034955920686909046938123",
                "folio" : "032140",
                "token" : "ax129xcxa191m0234mpsdPMAdqmwd10",
                "folio_digital" : "00FA2E23",
                "vendido": true,
                "costo" : "2900.00",
                "comprador" : {
                    "nombre" : "Milton Ivan",
                    "apellidos" : "Martinez Gonzalez",
                    "nombre_completo" : "Milton Ivan Martinez Gonzalez",
                    "correo" : "ivanmartinez.gonzalez97@gmail.com",
                    "celular" : "8126522105",
                    "direccion" : {
                        "calle" : "Mina de cobre",
                        "numero" : "306",
                        "colonia" : "Estancia",
                        "codigo_postal" : "66087",
                        "estado" : "Nuevo Leon",
                        "municipio" : "San Nicolas",
                        "telefono" : "83340359"
                    }
                },
                "folio_talonario" : "190fas113",
                "clave_sorteo" : "9550680383193521",
                "clave_colaborador" : "1845392834951",
                "_conToken" : true
            }
        },{
            "numero" : "4565",
            "info" : {
                "clave" : "27663524215676867845",
                "folio" : "562346",
                "token" : "AxC0E2e9M230R0F3df2",
                "folio_digital" : "0FAMP2",
                "vendido": true,
                "costo" : "1200.00",
                "comprador" : {
                    "nombre" : "Jose",
                    "apellidos" : "Perez Perez",
                    "nombre_completo" : "Jose Perez Perez",
                    "correo" : "joseperez.perez@gmail.com",
                    "celular" : "812313452",
                    "direccion" : {
                        "calle" : "Mina de cobre",
                        "numero" : "306",
                        "colonia" : "Estancia",
                        "codigo_postal" : "66087",
                        "estado" : "Nuevo Leon",
                        "municipio" : "San Nicolas",
                        "telefono" : "83340359"
                    }
                },
                "folio_talonario" : "190fas113",
                "clave_sorteo" : "9550680383193521",
                "clave_colaborador" : "1845392834951",
                "_conToken" : false
            }
        }],
        "pendientes" : [{
            "numero" : "4664",
            "info" : {
                "clave" : "845623584245589",
                "folio" : "F3246ER2",
                "token" : "axcmp0WDQm00qmspdQ23Sq",
                "folio_digital" : "03123SF",
                "vendido": false,
                "costo" : "5600.00",
                "comprador" : {
                    "nombre" : "Pedro",
                    "apellidos" : "Perez Perez",
                    "nombre_completo" : "Pedro Perez Perez",
                    "correo" : "pedroperez.perez@gmail.com",
                    "celular" : "812313452",
                    "direccion" : {
                        "calle" : "Mina de cobre",
                        "numero" : "306",
                        "colonia" : "Estancia",
                        "codigo_postal" : "66087",
                        "estado" : "Nuevo Leon",
                        "municipio" : "San Nicolas",
                        "telefono" : "83340359"
                    }
                },
                "folio_talonario" : "190fas113",
                "clave_sorteo" : "9550680383193521",
                "clave_colaborador" : "1845392834951",
                "_conToken" : false
            }
        },{
            "numero" : "4665",
            "info" : {
                "clave" : "154674834142153142",
                "folio" : "F131TWE",
                "token" : "axcmp0WDQm00qmspdQ23Sq",
                "folio_digital" : "3425GS",
                "vendido": false,
                "costo" : "7600.00",
                "comprador" : {
                    "nombre" : "Pepe",
                    "apellidos" : "Perez Perez",
                    "nombre_completo" : "Pepe Perez Perez",
                    "correo" : "Pepeperez.perez@gmail.com",
                    "celular" : "83527862",
                    "direccion" : {
                        "calle" : "Mina de cobre",
                        "numero" : "306",
                        "colonia" : "Estancia",
                        "codigo_postal" : "66087",
                        "estado" : "Nuevo Leon",
                        "municipio" : "San Nicolas",
                        "telefono" : "83340359"
                    }
                },
                "folio_talonario" : "190fas113",
                "clave_sorteo" : "9550680383193521",
                "clave_colaborador" : "1845392834951",
                "_conToken" : false
            }
        }],
        "asignados" : []
    }
    ];
}