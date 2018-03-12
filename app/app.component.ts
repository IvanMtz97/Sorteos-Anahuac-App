import { Component, OnInit } from "@angular/core";
import { SessionService } from "./services/session/session.services";
import { Router } from "@angular/router";
var http = require("http");
import { MyHttpGetService } from "./services/http-get/http-get.services";
import statusBar = require("nativescript-status-bar");
import * as dialogs from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import * as platformModule from "tns-core-modules/platform";
// import { Message } from "nativescript-plugin-firebase";
import { alert } from "ui/dialogs";
import * as app from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { exit } from "nativescript-exit";

import { LoadingService } from "./services/loading/loading";

import * as pushPlugin from "nativescript-push-notifications";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [SessionService, MyHttpGetService, LoadingService]
})
export class AppComponent implements OnInit{ 
    public imagenPublicidad: string;
    private serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
    constructor(private session: SessionService, private router: Router, private myGetService: MyHttpGetService, private routeExtension: RouterExtensions, private loading: LoadingService){
        this.session = session;
        this.router = router;
        
        this.session.setURL(this.serverUrl);

        if (this.session.loggedIn()) {
            this.GetTalonarios();
            if(this.session.getFirstRun() == true){
                this.router.navigate(["privacidad"]);
            }else{
                this.router.navigate(["talonarios"]);
            }
        }
        else {
            this.router.navigate([""]);
        }
        

        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then((r) => {            
            this.imagenPublicidad = "data:image/png;base64,"+ r.toBase64String(); 
            this.session.setImagenPublicidad(this.imagenPublicidad);
        }, (err) => { 
            console.log("----------\nError en la imagen de publicidad\n----------");           
        });            
    }

    ngOnInit(){
        if(platformModule.device.os == 'Android'){
            app.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
                if(this.router.isActive("/", true) || this.router.isActive("/talonarios", true) || this.router.isActive("", true) || this.router.isActive("/login", true)){
                    data.cancel = true;
                    dialogs.confirm({
                        title:"AVISO",
                        message: "Deseas salir de la aplicacion?",
                        okButtonText: "SI",
                        cancelButtonText: "NO"
                    }).then(result => {
                        if(result){
                            exit();
                        }
                    });
                }
            });
        }
        
        firebase.init({
            onMessageReceivedCallback: function(message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
                // if your server passed a custom property called 'foo', then do this:
                console.log("Value of 'foo': " + message.data.foo);
                alert("Message " + message.title + message.body);
              }
        }).then(
            instance => {
              console.log("firebase.init done");
            },
            error => {
              console.log(`firebase.init error: ${error}`);  
            }
          );
          
          firebase.getCurrentPushToken().then((token: string) => {
              // may be null if not known yet
              console.log("Current push token: " + token);
          }); 

        const iosSettings = {
            senderID: "<ENTER_YOUR_PROJECT_NUMBER>", // Required: setting with the sender/project number
            badge: true,
            sound: true,
            alert: true,
            sandbox: true,
            interactiveSettings: {
                actions: [{
                    identifier: 'READ_IDENTIFIER',
                    title: 'Read',
                    activationMode: "foreground",
                    destructive: false,
                    authenticationRequired: true
                }, {
                    identifier: 'CANCEL_IDENTIFIER',
                    title: 'Cancel',
                    activationMode: "foreground",
                    destructive: true,
                    authenticationRequired: true
                }],
                categories: [{
                    identifier: 'READ_CATEGORY',
                    actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                    actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                }]
            },
            notificationCallbackIOS: (message: any) => {
                alert("Message received!\n" + JSON.stringify(message));
            },
            notificationCallbackAndroid: (stringifiedData: String, fcmNotification: any) => {
                const notificationBody = fcmNotification && fcmNotification.getBody();
                alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
            }
        };

        pushPlugin.register(iosSettings, (token: String) => {
            console.log("Device registered. Access token: " + token);
         
            // Register the interactive settings
            if(iosSettings.interactiveSettings) {
                pushPlugin.registerUserNotificationSettings(() => {
                    alert('Successfully registered for interactive push.');
                }, (err) => {
                    alert('Error registering for interactive push: ' + JSON.stringify(err));
                });
            }
        }, (errorMessage: any) => {
            alert("Device NOT registered! " + JSON.stringify(errorMessage));
        });
    }

     //GET INICIO SESION-------->
    private GetTalonarios() {
        //this.loader.display(true);
        this.myGetService  
            .getDataAuthorization('api/Colaborador/GetCorreo/' + this.session.getCorreoColaborador() + '/')
            .subscribe((result) => {
                this.onGetData(result);
            }, (error) => {
                //this.loader.display(false);
                //this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios. El token expiro favor de iniciar sesion.');
                this.loading.display(true);
                this.myGetService.getLogin({email: this.session.getCorreoColaborador(), password: this.session.getPassColaborador()}, "api/Colaborador/" + platformModule.device.uuid).subscribe((result) => {
                    this.loading.display(false);
                    console.log("TOKEN EXPIRADO");
                    console.dir(result.json());
                    this.session.setLoggedIn(true);
                    this.session.setInformation(JSON.stringify(result.json()));
                    this.session.setToken(result.json().token);
                    this.session.setIdColaborador(result.json().identificador);
                }, (error) => {
                    this.loading.display(false);
                    this.mostrarMensaje('Error', 'Usuario y/o contraseña incorrectos, favor de iniciar sesion.');
                });
            });
    }

    private onGetData(data: Response | any) {
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
    }

    public mostrarMensaje (titulo, mensaje) {
        dialogs.alert({
            title:titulo,
            message: mensaje,
            okButtonText: "Ok"
        }).then(() => {
            console.log("Dialog closed!");
            this.routeExtension.navigate(['/login'], {clearHistory: true})
        });
    }
    
}
