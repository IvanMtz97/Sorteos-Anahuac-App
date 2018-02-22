import { Component, Directive, ViewContainerRef, TemplateRef, Inject, HostListener, Input } from "@angular/core";
import { Device, platformNames } from "platform";
import { DEVICE } from "nativescript-angular/platform-providers";

@Directive({ selector: "[click-stop-propagation]" })
export class ClickStopPropagation {
    @HostListener("click", ["$event"])
    public onClick(event: any): void
    {
        event.stopPropagation();
    }
}

@Directive({ selector: "[sdkIfAndroid]" })
export class IfAndroidDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({ selector: "[sdkIfIos]" })
export class IfIosDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({
    selector: 'ngInit',
    exportAs: 'ngInit'
  }) 
  export class NgInit {
    @Input() values: any = {};
  
    @Input() ngInit;
    ngOnInit() {
      if(this.ngInit) { this.ngInit(); }
    }  
}