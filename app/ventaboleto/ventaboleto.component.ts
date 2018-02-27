import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import {  ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { confirm } from "ui/dialogs";
import * as dialogs from "ui/dialogs";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";

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
    private PilaBoletos: any = [];
    private Info: any = {
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

    constructor(private route: ActivatedRoute, private router: RouterExtensions){ }

    ngOnInit(){
        this.route.params.subscribe(params => {
            this.Datos = JSON.parse(params["data"]);
        });
    }

    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
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
            this.PilaBoletos.push({Boleto: this.Datos.Boletos[this.cont], Info: this.Info});
            this.cont++;
            if(this.cont == this.Datos.Boletos.length){

                var Param = {
                    Tipo: "Varios",
                    Boletos: this.PilaBoletos,
                    Talonario: this.Datos.Talonario
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