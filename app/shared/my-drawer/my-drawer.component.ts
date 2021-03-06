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
    public imagenPublicitaria: string; 

    constructor(private session: SessionService)
    {
        this.imagenPublicitaria = this.session.getImagenPublicidad();
        if(this.session.loggedIn())
        {
            this.menuAUX = true;
        }
        else
        {
            this.menuAUX = false
        }
    }

    ngOnInit(): void {
        
    }

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
