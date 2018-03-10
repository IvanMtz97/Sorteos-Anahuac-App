import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import {registerElement} from "nativescript-angular/element-registry";
import { LoadingService } from "../../services/loading/loading";
import { setInterval, setTimeout, clearInterval } from "timer";
var timer = require("timer");

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

    constructor(private routerExtensions: RouterExtensions, private drawer: RadSideDrawerComponent, private loader: LoadingService) {

    }

    ngOnInit(): void {    
    }

    onNavItemTap(navItemRoute: string): void {        
        if(this.cleanArray[navItemRoute]) this.clean = true;        
        this.drawer.sideDrawer.toggleDrawerState();        
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            },
            clearHistory: this.clean
        });
        this.loader.display(true); 


        const id = timer.setTimeout(() => {
            this.setTimer();
        }, 2000);
    }

    setTimer()
    {
        console.log("setTimer");

        this.loader.display(false);
        
    }
}
