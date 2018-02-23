import { Component, ViewChild, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import * as dialogs from "ui/dialogs";
import * as utils from "utils/utils";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { SessionService } from "../services/session/session.services";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    providers: [MyHttpGetService, SessionService]
})
export class LoginComponent implements OnInit {
    public Correo: string = "";
    public Clave: string = "";
    public nextLibAvailable: boolean = false;
    public avisoPrivacidad: string = "http://www.sorteoanahuac.mx/aviso-de-privacidad.pdf"; 

    constructor(page: Page, private router: RouterExtensions, private myGetService: MyHttpGetService, private session: SessionService) {
        page.actionBarHidden = true; 
    }

    ngOnInit() {
        if (this.session.loggedIn()) { this.session.setLoggedIn(false); }
        this.SorteoActivo();
    }


    //GET INICIO SESION-------->
    private IniciarSesion() {
        //this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador')
            .subscribe((result) => {
                console.log("RESULTADO RESPUESTA -----> ", result);
                this.onGetDataSesion(result);
            }, (error) => {
                //this.loader.display(false);
                this.mostrarMensaje('Autenticación', 'Usuario o contraseña invalidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
            });
    }

    private onGetDataSesion(data: Response | any) {
        if(data.json().talonarios.length > 0) this.setInfo(data);
        else this.solicitaTalonario(data);
    }
    //END GET --------->

    //GET SORTEO -------->
    private SorteoActivo() {
        //this.loader.display(true);
        this.myGetService
            .getData('api/Sorteo/Activo')
            .subscribe((result) => {
                this.session.setSorteoActivo(JSON.stringify(result.json()));
                this.session.setPoliticas(JSON.stringify(result.json().url_terminos));
                this.session.setReglamento(JSON.stringify(result.json().url_aviso));
                this.session.setAceptacionTalonarios(JSON.stringify(result.json().url_tips));
                this.session.setGanadores(JSON.stringify(result.json().ganadores));
                this.session.setConoceSorteo(JSON.stringify(result.json().url_conoce));
            }, (error) => {
                //this.loader.display(false);
                this.mostrarMensaje('Error', 'Falló al tratar obtener el sorteo activo.');  
            });
    }
    //END GET --------->

    public setInfo(data) { 
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
        this.session.setToken(data.json().token);
        this.router.navigate(["talonarios"], { clearHistory: true });
    }
    public Avisos() {
        utils.openUrl(this.avisoPrivacidad);
    }

    public ConoceSorteo() {
        console.log("CONOCE TU SORTEO");
        this.router.navigate(["conocesorteo"]);
    }

    public ListaGanadores() {
        console.log("LISTA DE GANADORES");
        this.router.navigate(["ganadores"]);
    }

    public handleCorreoChange(evt){    
        let txtCorreo = <TextField> evt.object;
        this.Correo = txtCorreo.text;
    }

    public handlePasswordChange(evt){
        let txtClave = <TextField> evt.object;
        this.Clave = txtClave.text;
    }

    public mostrarMensaje (titulo, mensaje) {
        dialogs.alert({
            title:titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    }

    public Entrar() {
        if(this.Correo.length == 0 || this.Clave.length == 0){
            dialogs.alert({
                title: "Aviso",
                message: "Debes llenar todos los campos.",
                okButtonText: "Ok"
            });
        }else{
            this.IniciarSesion();
        }
    }

    public solicitaTalonario(data)
    { 
        dialogs.confirm({
        title: "¡TIENES UN NUEVO TALONARIO!",
        message: "¿Deseas descargarlo?",
        cancelButtonText: "No",
        okButtonText: "Si"
        }).then(result => {
            // result argument is boolean
            if(result) {
                data.json().talonarios = this.talonarios;
            }
            this.setInfo(data); 
            console.log("Dialog result: " + result);
        });
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
