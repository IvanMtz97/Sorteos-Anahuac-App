import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import * as Clipboard from "nativescript-clipboard";
import * as Toast from "nativescript-toast";

@Component({
    selector: "app-modal",
    moduleId: module.id,
    templateUrl: './app.modal.html'
})
export class ModalComponent {

    public frameworks: Array<string>;
    public url: string;

    constructor(private router: RouterExtensions, private params: ModalDialogParams) {
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
        this.url = "https://jaja.com/";
    }

    public compartir()
    {
        console.log("compartir()");
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