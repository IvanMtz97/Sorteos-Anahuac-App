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
import { isIOS, isAndroid } from "platform";

import * as Toast from "nativescript-toast";
 


@Component({
    selector: "VentaBoleto",
    moduleId: module.id,
    templateUrl: "./ventaboleto.component.html",
    styleUrls: ["./ventaboleto.scss"]
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

    constructor(private GET: MyHttpGetService, private session: SessionService, private route: ActivatedRoute, private router: RouterExtensions, private modal: ModalDialogService, private vcRef: ViewContainerRef)
    { 
        this.imagenPublicitaria = this.session.getImagenPublicidad(); 
    }

    AbrirModal(){
        // let options = {
        //     context: "Xdd",
        //     fullscreen: true,
        //     viewContainerRef: this.vcRef
        // };
        // this.modal.showModal(VentaBoletoModalComponent, options).then(res => {
        //     console.log(res);
        // });    
        this.Compradores = [];
        this.Formulario = !this.Formulario;
    }

    BuscarChange(evt){
        if(evt.object.text.length > 1){
            this.GET.getDataAuthorization("api/Comprador/Buscar/" + this.PK1 + "/" + evt.object.text).subscribe(res => {
                this.Compradores = res.json();
            }, error => {
            });
        }
    }

    onTapList(evt){
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
        this.PK1 = JSON.parse(this.session.getInformation()).clave;
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
            this.router.navigate(["confirmar", JSON.stringify({
                Talonario: this.Datos.Talonario,
                Boleto: this.Datos,
                Info: this.Info,
                Tipo: "Uno"
            })], { clearHistory: true });
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
                    Talonario: this.Datos.Talonario
                }

                this.router.navigate(["confirmar", JSON.stringify(Param)],  { clearHistory: true } );
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
        }else {
            return false;
        }
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
}