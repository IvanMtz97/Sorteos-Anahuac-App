import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import * as Clipboard from "nativescript-clipboard";
import * as Toast from "nativescript-toast";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "app-modal",
    moduleId: module.id,
    templateUrl: './app.modal.html'
})
export class ModalComponent {

    public frameworks: Array<string>;
    public url: string;

    constructor(private router: RouterExtensions, private params: ModalDialogParams) {        
        this.url = "https://jaja.com/";
        console.log("queCompartir -> " + params.context.queCompartir);
    }

    public compartir()
    {
        if(this.params.context.queCompartir == 'sorteo')
        {
            SocialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "¿Como te gustaria compartir tu sorteo?");
        }
        else if(this.params.context.queCompartir == 'boleto')
        {
            SocialShare.shareUrl("https://angular.io/", "Home of Angular", "¿Como te gustaria compartir tu boleto?");
        }        
        this.close();        
    }

    copiar(){
        console.log("COPIAR CLIPBOARD", this.url);
        Clipboard.setText(this.url).then(function() {});
        Toast.makeText("Copiado al portapapeles", "long").show();
    }

    compradores(){
        console.log("compradores");
        this.router.navigate(["compradores"]);
        this.close();
    }

    public close() {
        this.params.closeCallback();
    }

}