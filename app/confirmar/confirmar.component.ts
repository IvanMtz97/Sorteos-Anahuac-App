import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { MyHttpPostService } from "../services/http-post/http-post.services";
import { MyHttpPutService } from "../services/http-put/http-put.services";
import { SessionService } from "../services/session/session.services";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { LoadingService } from "../services/loading/loading";
import * as dialogs from "ui/dialogs";
 
@Component({
    selector: "Confirmar",
    moduleId: module.id,
    templateUrl: "./confirmar.component.html",
    styleUrls: ["./confirmar.css"],
    providers: [ MyHttpPostService, MyHttpPutService, SessionService, LoadingService ]
})

export class ConfirmarComponent implements OnInit{
    private Datos: any = [];
    private Boleto: Object = {};
    private Boletos: Array<Object> = [];
    public imagenPublicitaria: string;

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private route: ActivatedRoute, private router: RouterExtensions, private API: MyHttpPostService, private PUT: MyHttpPutService, private session: SessionService, private loading: LoadingService){        
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }

    ngOnInit(){
        this.route.params.subscribe((params) => {
            this.Datos = JSON.parse(params["data"]);
            

            if(this.Datos.Tipo == "Varios"){
                this.Datos.Boletos.forEach(function(Item) {
                    this.Boletos.push({
                            comprador: {
                                    direccion: {
                                    telefono: Item.Info.Telefonofijo,
                                    municipio: Item.Info.Municipio,
                                    estado: Item.Info.Estado,
                                    codigo_postal: Item.Info.Codigopostal,
                                    colonia: Item.Info.Colonia,
                                    numero: Item.Info.Numero,
                                    calle: Item.Info.Calle
                                },
                                nombre_completo: Item.Info.Nombre + " " + Item.Info.Appat + " " + Item.Info.Apmat,
                                celular: Item.Info.Telefonomovil,
                                correo: Item.Info.Correoelectronico,
                                apellidos: Item.Info.Appat + " " + Item.Info.Apmat,
                                nombre: Item.Info.Nombre
                            },
                            folio_talonario: String(this.Datos.Talonario),
                            folio: Item.Boleto.folio,
                            clave: String(Item.Boleto.clave)
                        });
                }.bind(this));
            }
            else if(this.Datos.Boleto.Tipo == "Uno"){
                this.Boleto = {
                    comprador: {
                        direccion: {
                            telefono: this.Datos.Info.Telefonofijo,
                            municipio: this.Datos.Info.Municipio,
                            estado: this.Datos.Info.Estado,
                            codigo_postal: this.Datos.Info.Codigopostal,
                            colonia: this.Datos.Info.Colonia,
                            numero: this.Datos.Info.Numero,
                            calle: this.Datos.Info.Calle
                        },
                        nombre_completo: this.Datos.Info.Nombre + " " + this.Datos.Info.Appat + " " + this.Datos.Info.Apmat,
                        celular: this.Datos.Info.Telefonomovil,
                        correo: this.Datos.Info.Correoelectronico,
                        apellidos: this.Datos.Info.Appat + " " + this.Datos.Info.Apmat,
                        nombre: this.Datos.Info.Nombre
                    },
                    folio_talonario: String(this.Datos.Talonario),
                    folio: this.Datos.Boleto.Boleto.folio,
                    clave: String(this.Datos.Boleto.Boleto.clave)
                }
            }



        });
    }

    Si(){
        this.loading.display(true);
        if(this.Datos.Tipo == "Uno"){
            this.API.postData(this.Boleto, "api/Boleto/Vender").subscribe(res => {
                this.PUT.putData({}, "api/Colaborador").subscribe(res => {
                    console.log("PUT TOKEN");
                    console.log(res.json().token);
                    this.session.setToken(res.json().token);
                }, error => {
                    console.log("ERROR AL RENOVAR TOKEN");
                    console.log(error);
                });
                this.loading.display(false);
                dialogs.alert({
                    title: "AVISO",
                    message: "Boleto vendido exitosamente",
                    okButtonText: "Ok"
                }).then(() => {
                    this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: this.Datos } )], { clearHistory: true });
                });

            }, error => {
            });
            
        }else{
            var contador = 0;
            this.Boletos.forEach(function(boleto) {
                this.API.postData(boleto, "api/Boleto/Vender").subscribe(res => {
                    if(contador == this.Boletos.length-1){
                        this.loading.display(false);
                        dialogs.alert({
                            title: "AVISO",
                            message: "Se han vendido exitosamente los boletos",
                            okButtonText: "Ok"
                        }).then(()=>{
                            this.router.navigate(["talonarios"], { clearHistory : true});
                        });
                    }
                    contador++;
                }, error => {
                });
            }.bind(this));
        }
    }

    Siasdasd(){
        if(this.Datos.Tipo == "Uno"){
            this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: this.Datos } )], { clearHistory: true });
        }else{
            this.router.navigate(["talonarios"], { clearHistory : true});
        }
    }

    Varios(){
        this.router.navigate(["talonarios"], { clearHistory: true });
    }

    onDrawerButtonTap(): void {
      this.drawerComponent.sideDrawer.showDrawer();
    }
}