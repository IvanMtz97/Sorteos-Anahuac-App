import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "app-modal",
    moduleId: module.id,
    templateUrl: './app.modal.html'
})
export class ModalComponent {

    public frameworks: Array<string>;

    constructor(private router: RouterExtensions, private params: ModalDialogParams) { }

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

    compradores(){
        if(this.params.context.queCompartir == 'sorteo')
        {
            this.router.navigate(["compradores", JSON.stringify({url: "https://www.nativescript.org/"})]);
        }
        else if(this.params.context.queCompartir == 'boleto')
        {
            this.router.navigate(["compradores", JSON.stringify({url: "https://angular.io/"})]);
        }                
        this.close();
    }

    public close() {
        this.params.closeCallback();
    }

}