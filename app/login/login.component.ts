import { Component, ViewChild } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    constructor(page: Page) {
        page.actionBarHidden = true;  
    }
}
