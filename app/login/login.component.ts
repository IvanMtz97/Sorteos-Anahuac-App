import { Component, ViewChild, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import * as dialogs from "ui/dialogs";
import * as utils from "utils/utils";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { SessionService } from "../services/session/session.services";
import { ActivatedRoute, Router } from "@angular/router";

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

    constructor(page: Page, private router: Router, private myGetService: MyHttpGetService, private session: SessionService) {
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
                console.log("INICIAR SESION", error);
                //this.loader.display(false);
                this.mostrarMensaje('Autenticación', 'Usuario o contraseña invalidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
            });
    }

    private onGetDataSesion(data: Response | any) {
        this.setInfo(data);
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
        this.session.setIdColaborador(data.json().identificador);
        this.router.navigate(["talonarios"]);
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
}
