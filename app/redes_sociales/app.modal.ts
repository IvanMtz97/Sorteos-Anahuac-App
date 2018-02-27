import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "app-modal",
    moduleId: module.id,
    templateUrl: './app.modal.html'
})
export class ModalComponent {

    public frameworks: Array<string>;

    constructor(private router: RouterExtensions, private params: ModalDialogParams) {
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
    }

    public compartir()
    {
        console.log("compartir()");
        this.router.navigate(["compradores"], { clearHistory: true });
        this.close();        
    }

    public close() {
        this.params.closeCallback();
    }

}