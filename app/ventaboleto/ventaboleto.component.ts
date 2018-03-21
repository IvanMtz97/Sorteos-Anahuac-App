import { Component, ViewChild, ElementRef, OnInit, ViewContainerRef } from "@angular/core";
import { NgClass } from "@angular/common";
import {  ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { confirm } from "ui/dialogs";
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

import { VentaBoletoModalComponent } from "./ventaboleto-modal.component";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { Observable } from 'rxjs';
import { SessionService } from "../services/session/session.services";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { LoadingService } from "../services/loading/loading";
import { isIOS, isAndroid } from "platform";
import * as app from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";

import { SearchBar } from "ui/search-bar";
import { forEach } from "@angular/router/src/utils/collection";
import * as Toast from "nativescript-toast";

@Component({
    selector: "VentaBoleto",
    moduleId: module.id,
    templateUrl: "./ventaboleto.component.html",
    styleUrls: ["./ventaboleto.scss"],
    providers: [ MyHttpGetService, LoadingService ]
})

export class VentaBoletoComponent implements OnInit {
    @ViewChild("CB1") ATodos: ElementRef;
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private Datos: any = [];
    private _sideDrawerTransition: DrawerTransitionBase;
    private status: boolean = true;
    private cont = 0;
    private PilaBoletos: Array<Object> = [];
    public imagenPublicitaria: string;
    Cargando: boolean = false;
    //Colonias: Array<Object> = [{ colonia: "Estancia"},{colonia: "Reales"},{colonia: "Costas"}];
    Colonias: any = [];
    idComprador: Number = -1;

    PK1: number = 0;
    // Compradores: any = [
    //     {
    //         Nombre: "Milton Ivan",
    //         Appat: "Martinez",
    //         Apmat: "Gonzalez",
    //         Calle: "Mina de cobre",
    //         Numero: "306",
    //         Codigopostal: "66087",
    //         Colonia: "Estancia",
    //         Estado: "Nuevo Leon",
    //         Municipio: "San Nicolas",
    //         Telefonofijo: "83340359",
    //         Telefonomovil: "8126522105",
    //         Correoelectronico: "ivanmartinez.gonzalez97@gmail.com",
    //         Correoalternativo: ""

    //     },
    //     {
    //         Nombre: "Eduardo",
    //         Appat: "Vazquez",
    //         Apmat: "De La O",
    //         Calle: "Calle dos",
    //         Numero: "1332",
    //         Codigopostal: "64253",
    //         Colonia: "Jajatl",
    //         Estado: "Nuevo Leon",
    //         Municipio: "Escomiedo",
    //         Telefonofijo: "83340359",
    //         Telefonomovil: "8126522105",
    //         Correoelectronico: "eleduardojaja777youtube@vegeta.com",
    //         Correoalternativo: ""
    //     }
    // ];

    Compradores: any = [];

    Formulario: boolean = true;
    Nombre: string = "";
    public Info2: any = {
        Nombre: "Eduardo",
        Appat: "Vazquez",
        Apmat: "De La O",
        Calle: "Calle dos",
        Numero: "1332",
        Codigopostal: "64253",
        Colonia: "Jajatl",
        Estado: "Nuevo Leon",
        Municipio: "Escomiedo",
        Telefonofijo: "83340359",
        Telefonomovil: "8126522105",
        Correoelectronico: "eleduardojaja777youtube@vegeta.com",
        Correoalternativo: ""
    };
    public Info: any = {
        Nombre: "",
        Appat: "",
        Apmat: "",
        Calle: "",
        Numero: "",
        Codigopostal: "",
        Colonia: "",
        Estado: "",
        Municipio: "",
        Telefonofijo: "",
        Telefonomovil: "",
        Correoelectronico: "",
        Correoalternativo: ""
    };

    constructor(private loading: LoadingService, private GET: MyHttpGetService, private session: SessionService, private route: ActivatedRoute, private router: RouterExtensions, private modal: ModalDialogService, private vcRef: ViewContainerRef)
    { 
        this.imagenPublicitaria = this.session.getImagenPublicidad(); 
    }

    AbrirModal(){
        this.Compradores = [];
        this.Formulario = !this.Formulario;
    }

    public sBLoaded(args){
        var searchbar:SearchBar = <SearchBar>args.object;
        if(isAndroid){
            searchbar.android.clearFocus();
        }
    }

    BuscarChange(evt){
        if(evt.object.text.length > 1){
            this.Cargando = true;
            this.GET.getDataAuthorization("api/Comprador/Buscar/" + this.PK1 + "/" + evt.object.text).subscribe(res => {
                this.Cargando = false;
                this.Compradores = res.json();
                //this.idComprador = res.json().comprador.id;
                console.log("RESPUESTA BUSCAR COMPRADOR");
                console.dir(this.Compradores);
                //console.log("ID COMPRADOR: " + this.idComprador);
            }, error => {
                this.Cargando = false;
            });
        }
    }

    onTapList(evt){
        this.idComprador = this.Compradores[evt.index].pk1 == "" ? -1 : this.Compradores[evt.index].pk1;
        var Apellidos = this.Compradores[evt.index].apellidos.split(" ");
        this.Info = {
            Nombre: this.Compradores[evt.index].nombre,
            Appat: Apellidos[0],
            Apmat: Apellidos[1],
            Calle: this.Compradores[evt.index].direccion.calle,
            Numero: this.Compradores[evt.index].direccion.numero,
            Codigopostal: this.Compradores[evt.index].direccion.codigo_postal,
            Colonia: this.Compradores[evt.index].direccion.colonia,
            Estado: this.Compradores[evt.index].direccion.estado,
            Municipio: this.Compradores[evt.index].direccion.municipio,
            Telefonofijo: this.Compradores[evt.index].direccion.telefono,
            Telefonomovil: this.Compradores[evt.index].celular,
            Correoelectronico: this.Compradores[evt.index].correo,
            Correoalternativo: ""
        };
        this.Formulario = true;
    }

    Cancelar(){
        this.Formulario = !this.Formulario;
    }
    
    ngOnInit(){
        this.route.params.subscribe(params => {
            this.Datos = JSON.parse(params["data"]);
        });
        this.PilaBoletos = [];
        this.PK1 = JSON.parse(this.session.getInformation()).clave;        
        if(isAndroid){
            app.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
                data.cancel = true;
                this.router.navigate(["talonarios"]);
            });
        }
    }

    onDrawerButtonTap(): void {
        if(isIOS){
            this.router.back();
        }else if(isAndroid){
            this.drawerComponent.sideDrawer.showDrawer();
        }
    }

    handleInputChanged(event){
        if(event.object.id == "txtNombre") this.Info.Nombre = event.object.text;
        if(event.object.id == "txtAppat") this.Info.Appat = event.object.text;
        if(event.object.id == "txtApmat") this.Info.Apmat = event.object.text;
        if(event.object.id == "txtCalle") this.Info.Calle = event.object.text;
        if(event.object.id == "txtNumero") this.Info.Numero = event.object.text;
        if(event.object.id == "txtCodigopostal") this.Info.Codigopostal = event.object.text;
        if(event.object.id == "txtColonia") this.Info.Colonia = event.object.text;
        if(event.object.id == "txtEstado") this.Info.Estado = event.object.text;
        if(event.object.id == "txtMunicipio") this.Info.Municipio = event.object.text;
        if(event.object.id == "txtTelefonofijo") this.Info.Telefonofijo = event.object.text;
        if(event.object.id == "txtTelefonomovil") this.Info.Telefonomovil = event.object.text;
        if(event.object.id == "txtCorreoelectronico") this.Info.Correoelectronico = event.object.text;
        if(event.object.id == "txtCorreoalternativo") this.Info.Correoalternativo = event.object.text;
    }

    public toggleCheck(){
        this.status = !this.status;
    }

    private VenderBoleto(){

        if(this.ValidarCampos()){
            if(!this.SoloLetras()){
                dialogs.alert({
                    title: "AVISO",
                    message: "El nombre, apellido paterno y apellido materno no pueden contener números",
                    okButtonText: "Ok"
                });
                return false;
            }

            if(!this.validateEmail(this.Info.Correoelectronico)){
                dialogs.alert({
                    title: "AVISO",
                    message: "Debe introducir un correo válido.",
                    okButtonText: "Ok"
                });
                return false;
            }
            this.router.navigate(["confirmar", JSON.stringify({
                Talonario: this.Datos.Talonario,
                Boleto: this.Datos,
                Info: this.Info,
                Tipo: "Uno",
                id: this.idComprador
            })]);
        }else{
            dialogs.alert({
                title: "AVISO",
                message: "Debes llenar todos los campos marcados *",
                okButtonText: "Ok"
            });
        }
    }

    private Anterior(){
        if(this.cont > 0){
            this.PilaBoletos.splice(this.cont, 1);
            this.cont--;
        } 
    }

    private Siguiente(){
        if(this.ValidarCampos()){

            if(!this.SoloLetras()){
                dialogs.alert({
                    title: "AVISO",
                    message: "El nombre, apellido paterno y apellido materno no pueden contener números",
                    okButtonText: "Ok"
                });
                return false;
            }

            if(!this.validateEmail(this.Info.Correoelectronico)){
                dialogs.alert({
                    title: "AVISO",
                    message: "Debe introducir un correo válido.",
                    okButtonText: "Ok"
                });
                return false;
            }
            
            this.PilaBoletos.push({
                Boleto: this.Datos.Boletos[this.cont], 
                Info: {
                    Nombre: this.Info.Nombre,
                    Appat: this.Info.Appat,
                    Apmat: this.Info.Apmat,
                    Calle: this.Info.Calle,
                    Numero: this.Info.Numero,
                    Codigopostal: this.Info.Codigopostal,
                    Colonia: this.Info.Colonia,
                    Estado: this.Info.Estado,
                    Municipio: this.Info.Municipio,
                    Telefonofijo: this.Info.Telefonofijo,
                    Telefonomovil: this.Info.Telefonomovil,
                    Correoelectronico: this.Info.Correoelectronico,
                    Correoalternativo: this.Info.Correoalternativo
                }
            });

            Toast.makeText("Boleto asignado", "short").show();
            this.cont++;
            
            if(this.cont == this.Datos.Boletos.length){

                var Param = {
                    Tipo: "Varios",
                    Boletos: this.PilaBoletos,
                    Talonario: this.Datos.Talonario,
                    id: this.idComprador
                }

                this.router.navigate(["confirmar", JSON.stringify(Param)]);
            }
        
        }else{
            
            dialogs.alert({
                title: "AVISO",
                message: "Debes llenar todos los campos marcados *",
                okButtonText: "Ok"
            
            });
        }
    }

    private VenderTodos(){
        if(this.ValidarCampos()){
            this.router.navigate(["asignacionexitosa", JSON.stringify({Tipo: "Todos", Boletos: this.Datos, Info: this.Info })]);
        }else{
            dialogs.alert({
                title: "AVISO",
                message: "Debes llenar todos los campos marcados *",
                okButtonText: "Ok"
            });
        }
    }

    private ValidarCampos(): boolean {
        if(this.Info.Nombre && this.Info.Appat && this.Info.Apmat && this.Info.Calle && this.Info.Numero && this.Info.Codigopostal && this.Info.Colonia && this.Info.Estado && this.Info.Municipio && this.Info.Telefonofijo && this.Info.Telefonomovil && this.Info.Correoelectronico){
            if(this.Info.Correoalternativo.length < 1) this.Info.Correoalternativo = "n/a";
            return true;
        } else {
            return false;
        }
    }

    private SoloLetras(): boolean {

        for(var i = 0; i < this.Info.Appat.length; i++){
            if(!isNaN(this.Info.Appat[i])){
                console.log("APPAT CON NUMERO");
                return false;
            }
        }

        for(var i = 0; i < this.Info.Apmat.length; i++){
            if(!isNaN(this.Info.Apmat[i])){
                console.log("APPAT CON NUMERO");
                return false;
            }
        }

        var Nombre = this.Info.Nombre;
        if(!isNaN(Nombre)){
            console.log("NOMBRE CON NUMERO");
            return false;
        }
        // for(var i = 0; i < Nombre.length; i++){
        //     if(!isNaN(this.Info.Nombre[i])){
        //         console.log("NOMBRE CON NUMERO");
        //         return false;
        //     }
        // }

        return true;
    }

    private LimpiarCampos(){
        this.Info = {
            Nombre: "",
            Appat: "",
            Apmat: "",
            Calle: "",
            Numero: "",
            Codigopostal: "",
            Colonia: "",
            Estado: "",
            Municipio: "",
            Telefonofijo: "",
            Telefonomovil: "",
            Correoelectronico: "",
            Correoalternativo: ""
        };
    }

    public onSubmit(args) {
        this.loading.display(true);
        let searchBar = <SearchBar>args.object;
        searchBar.dismissSoftInput();
//        searchBar.android.clearFocus();
        if(searchBar.text.length > 5){
            dialogs.alert({
                title:"AVISO",
                message: "El código postal no debe llevar más de 5 caracteres",
                okButtonText: "Ok"
            });
        }else{
            this.GET.getDataAuthorization("api/Comprador/Buscar/"+ searchBar.text).subscribe(res => {
                this.loading.display(false);
                console.log("200 COD POSTAL");
                if(res.json().length == 0){
                    dialogs.alert({
                        title: "AVISO",
                        message: "No se encontraron datos para el código postal proporcionado",
                        okButtonText: "Ok"
                    });
                }else{
                    this.Colonias = [];
                    var Datos = res.json();
                    console.dir(Datos);
                    if(Datos.length == 1){
                        this.Info.Colonia = Datos[0].colonia;
                    } else {
                        Datos.forEach(function(item){
                            this.Colonias.push({colonia: item.colonia});
                        }.bind(this));
                    }
                    this.Info.Estado = Datos[0].estado;
                    this.Info.Municipio = Datos[0].municipio;
                    dialogs.alert({
                        title: "AVISO",
                        message: "Estado y municipio cargado.",
                        okButtonText: "Ok"
                    });
                    //Toast.makeText("Estado y municipio cargado.", "short").show();
                }
            }, error => {
                console.log("500 COD POSTAL");
                console.log(error);
                this.loading.display(false);
                dialogs.alert({
                    title: "AVISO",
                    message: "No se encontraron datos para el código postal proporcionado",
                    okButtonText: "Ok"
                });
            });
        }
    }

    validateEmail(email){
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }

    onColoniaTap(evt){
        console.log("ON COLONIA TAP");
        console.log(evt.index);
        this.Info.Colonia = this.Colonias[evt.index].colonia;
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }
}