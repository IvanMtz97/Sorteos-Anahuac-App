import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {registerElement} from "nativescript-angular/element-registry";
import { LoadingService } from "../../services/loading/loading";
import { setInterval, setTimeout, clearInterval } from "timer";
var timer = require("timer");
import * as dialogs from "ui/dialogs";
import { SessionService } from "../../services/session/session.services";

registerElement("Ripple", () => require("nativescript-ripple").Ripple);

@Component({
    selector: "MyDrawerItem",
    moduleId: module.id,
    templateUrl: "./my-drawer-item.component.html",
    styleUrls: ["./my-drawer-item.component.scss"]
})
export class MyDrawerItemComponent implements OnInit {
    @Input() title: string;
    @Input() route: string;
    @Input() icon: string;
    @Input() isSelected: boolean;
    private clean: boolean = false;
    private cleanArray: object = { '/login' : true };
    public id;

    constructor(private routerExtensions: RouterExtensions, private drawer: RadSideDrawerComponent, private loader: LoadingService, private session: SessionService) {

    }

    ngOnInit(): void {    
    }

    onNavItemTap(navItemRoute: string): void {        
        if(this.cleanArray[navItemRoute]) this.clean = true;        
        this.drawer.sideDrawer.toggleDrawerState();
        console.log("navItemRoute -> " + navItemRoute); 
        if(navItemRoute == "/login" && this.session.loggedIn())
        {  
            timer.setTimeout(() => {
                dialogs.confirm({
                    title:"AVISO",
                    message: "¿Deseas cerrar la sesión?",
                    okButtonText: "SI",
                    cancelButtonText: "NO"
                }).then(result => {
                    if(result){
                        this.routerExtensions.navigate([navItemRoute], {
                            transition: {
                                name: "fade"
                            },
                            clearHistory: this.clean
                        });
                    }
                });
            }, 1000);          
        }
        else
        {       
            this.routerExtensions.navigate([navItemRoute], {
                transition: {
                    name: "fade"
                },
                clearHistory: this.clean
            });
        }
        if(navItemRoute != "/login")
        {
            this.loader.display(true); 


            const id = timer.setTimeout(() => {
                this.setTimer();
            }, 2000);
        }
    }

    setTimer()
    {
        console.log("setTimer");

        this.loader.display(false);
        
    }
}
