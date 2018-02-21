import { Component, ViewChild } from "@angular/core";
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
export class LoginComponent {
    public Correo: string = "";
    public Clave: string = "";
    public avisoPrivacidad: string = "http://www.sorteoanahuac.mx/aviso-de-privacidad.pdf"; 

    constructor(page: Page, private router: RouterExtensions, private myGetService: MyHttpGetService, private session: SessionService) {
        page.actionBarHidden = true; 
    }

    //GET -------->
    private IniciarSesion() {
        //this.loader.display(true);
        this.myGetService
            .getLogin({ email: this.Correo, password: this.Clave }, 'api/Colaborador')
            .subscribe((result) => {
                console.log("RESULTADO RESPUESTA -----> ", result);
                this.onGetData(result);
            }, (error) => {
                //this.loader.display(false);
                this.mostrarMensaje('Autenticación', 'Usuario o contraseña invalidos. Recuerda que esta aplicación es únicamente para colaboradores de Sorteos Anáhuac.');
            });
    }

    private onGetData(data: Response | any) {
        this.session.setLoggedIn(true);
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
        this.session.setToken(data.json().token);
        //this.router.navigate(["talonarios", JSON.stringify(data.json())], { clearHistory: true });
        this.router.navigate(["home"]);
    }
    //END GET --------->
    public Avisos() {
        utils.openUrl(this.avisoPrivacidad);
    }

    public ConoceSorteo() {
        console.log("CONOCE TU SORTEO");
        this.router.navigate(["consorteo"]);
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
