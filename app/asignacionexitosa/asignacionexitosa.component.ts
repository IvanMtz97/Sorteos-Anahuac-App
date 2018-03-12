import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { SessionService } from "../services/session/session.services";
import { isAndroid, isIOS } from "platform";
import { MyHttpGetService } from "../services/http-get/http-get.services";
import { UtilsService } from "../services/Utils";
import * as dialogs from "ui/dialogs";
var ZXing = require('nativescript-zxing');
import * as imgSource from "tns-core-modules/image-source";

@Component({
    selector: "AsignacionExitosa",
    moduleId: module.id,
    templateUrl: "./asignacionexitosa.component.html",
    styleUrls: ["./asignacionexitosa.css"],
    providers: [ SessionService, UtilsService, MyHttpGetService ]
})

export class AsignacionExitosaComponent implements OnInit{
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;    
    private _sideDrawerTransition: DrawerTransitionBase;
    public imagenPublicitaria: string; 
    public qrImage: string;     
    boleto: boolean = false;
    Datos: any = [];
    public imgSrc: string;
    public token: string; 
    public urlBoleto;

    toggle(){
        this.boleto = !this.boleto;
    }
    constructor(private Utils: UtilsService, private session: SessionService, private router: ActivatedRoute, private Router: Router, private GET: MyHttpGetService){
        console.log("ASIGNACION COMPONENT");
          
        this.imagenPublicitaria = this.session.getImagenPublicidad();

        
        var serverURL = this.session.getURL()
        var zx = new ZXing();    
        var img = zx.createBarcode({encode: serverURL + "boleto/" + this.token, height: 100, width: 100, format: ZXing.QR_CODE});
        
    
        this.imgSrc = "data:image/png;base64," + imgSource.fromNativeSource(img).toBase64String("png");
        console.log("this.imgSrc -> " + this.imgSrc);    
            console.dir(img);
            console.log(img);
    
            var options = {tryHarder: true, formats: [ZXing.QR_CODE, ZXing.ITF]};
            
            
           var results = zx.decodeBarcode(img, options);
           if (!results) {
               console.log("Unable to decode barcode");           
           } else {
               console.log("Barcode format", results.format);
               console.log("Barcode value", results.barcode);  
               this.urlBoleto = results.barcode;                 
           }
    }

    ngOnInit(){
        this.router.params.subscribe(params => {
            this.Datos = JSON.parse(params["data"]);
        });
        this.Utils.ActualizarTalonarios();
    }

    onDrawerButtonTap(): void {
        if(isIOS){
            this.Router.navigate(["talonarios"]);
        }else if (isAndroid){
            this.drawerComponent.sideDrawer.showDrawer();
        }
    }
    
    EnviarCorreo(){
        var Boleto = this.Datos.Boletos.Boleto.Boleto.clave;
        console.dir(this.Datos.Boletos);
        this.GET.getDataAuthorization("api/Boleto/Notificar?clave=" + Boleto).subscribe(res => {
            dialogs.alert({
                title:"AVISO",
                message: "Se ha notificado exitosamente al correo " + this.Datos.Info.Correoelectronico,
                okButtonText: "Ok"
            });
            console.log("2OO CORREO");
            console.log(res);
        }, error => {
            console.log("500 CORREO");
            console.log(error);
        });
    }
}