import { Component, Input, OnInit } from "@angular/core";
import { SessionService } from "../../services/session/session.services";

@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.scss"]
})
export class MyDrawerComponent implements OnInit {    
    @Input() selectedPage: string;

    public menuAUX: boolean = true;

    constructor(private session: SessionService)
    {
        if(this.session.loggedIn())
        {
            this.menuAUX = true;
        }
        else
        {
            this.menuAUX = false
        }
        console.log("session.loggedIn -> " + this.session.loggedIn());
        console.log("this.menuAUX -> " + this.session.loggedIn());
    }

    ngOnInit(): void {
        
    }

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
