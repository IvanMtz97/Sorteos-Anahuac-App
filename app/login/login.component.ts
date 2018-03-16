import { Component, ViewChild, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import * as dialogs from "ui/dialogs";
var utils = require("utils/utils");
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { SessionService } from "../services/session/session.services";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import * as platformModule from "tns-core-modules/platform";
import { LoadingService } from "../services/loading/loading";
var http = require("http");
import * as connectivity from "tns-core-modules/connectivity";
import { setInterval, setTimeout, clearInterval } from "timer";
var timer = require("timer");

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    providers: [MyHttpGetService, SessionService, LoadingService]
})
export class LoginComponent implements OnInit {
    public Correo: string = "";
    public Clave: string = "";
    public nextLibAvailable: boolean = false;
    private politicas: string;
    private condiciones: string;
    public imagenPublicitaria: string;
    Check: boolean = false;

    constructor(page: Page, private router: RouterExtensions, private myGetService: MyHttpGetService, private session: SessionService, private loader: LoadingService) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        if (this.session.loggedIn()) { this.session.setLoggedIn(false); }
        this.SorteoActivo();
        this.downloadImage();
        console.log("Correo: " + this.session.getCorreo() + ", Clave: " + this.session.getClave());
        this.Correo = this.session.getCorreo();
        this.Clave = this.session.getClave();                 
    }

    public toggleCheck(eventData){
        this.Check = eventData.checked;
    }

    private downloadImage() {
        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then((r) => {
            this.imagenPublicitaria = "data:image/png;base64,"+ r.toBase64String();
            this.session.setImagenPublicidad("data:image/png;base64,"+ r.toBase64String());
        }, (err) => {
        });
    }


    //GET INICIO SESION-------->
    private IniciarSesion() {        
        this.loader.display(true);        
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador/' + platformModule.device.uuid)
            .subscribe((result) => {
                this.onGetDataSesion(result);
            }, (error) => {
                this.loader.display(false);
                this.validarConexion();
            });
    }

    private onGetDataSesion(data: Response | any) {
        console.log("CHECKBOX " + this.Check);
        if(this.Check){
            console.log("ENTRA TRUE");
            this.session.setClave(this.Clave);
            this.session.setCorreo(this.Correo);
        }else{
            console.log("ENTRA FALSE");
            this.session.setClave("");
            this.session.setCorreo("");
        }
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
                this.session.setPoliticas(JSON.stringify(result.json().url_politicas));
                this.session.setReglamento(JSON.stringify(result.json().url_reglamento));
                this.session.setAceptacionTalonarios(JSON.stringify(result.json().url_aceptacion));
                this.session.setGanadores(JSON.stringify(result.json().url_lista_ganadores));
                this.session.setConoceSorteo(JSON.stringify(result.json().url_conoce));
                this.session.setCondiciones(JSON.stringify(result.json().url_condiciones));
            }, (error) => {
                //this.loader.display(false);
                //this.mostrarMensaje('Error', 'Falló al tratar obtener el sorteo activo.');
                console.log("Error al tratar de obtener servicio");
                console.log(error);
            });

            this.politicas = this.session.getPoliticas();
            this.condiciones = this.session.getCondiciones();
    }
    //END GET --------->

    public setInfo(data) {
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));        
        this.session.setToken(data.json().token);
        this.session.setIdColaborador(data.json().identificador);
        this.session.setCorreoColaborador(data.json().correo)
        this.session.setPassColaborador(this.Clave);

        const id = timer.setTimeout(() => {
            this.setTimer();
        }, 3500);

        if(this.session.getFirstRun() == true){
            this.router.navigate(["privacidad"], { clearHistory: true });
        }else{
            this.router.navigate(["talonarios"], { clearHistory: true });
        }
    }
    public Politicas() {
        utils.openUrl(JSON.parse(this.politicas));
    }
    public Condiciones() {
        utils.openUrl(JSON.parse(this.condiciones));
    }
    public ConoceSorteo() {
        this.router.navigate(["conocesorteo"]);
    }

    public ListaGanadores() {
        this.router.navigate(["ganadores"]);
    }

    public mostrarMensaje (titulo, mensaje) {
        dialogs.alert({
            title:titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
    }

    public Entrar() {
        console.log("CORREO: " + this.Correo + ", CLAVE: " + this.Clave);
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

    public validarConexion()
    {
        var connectionType = connectivity.getConnectionType();
        if (connectionType == connectivity.connectionType.none)
        {
            this.mostrarMensaje('Autenticación', 'No se encontro una conexión a internet.');
        }
        else
        {
            this.mostrarMensaje('Autenticación', 'Usuario o contraseña inválidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
        }
    }

    public setTimer()
    {
        this.loader.display(false);
    }
}
