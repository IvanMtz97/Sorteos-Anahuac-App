import { Injectable } from "@angular/core";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { loadAppCss } from "tns-core-modules/application/application";

@Injectable()
    export class LoadingService{
        private loader = new LoadingIndicator();
        public options: Object = {
            message: 'Espere...',
            progress: 0.65,
            android: {
              indeterminate: true,
              cancelable: true,
              cancelListener: function(dialog) { console.log("Loading cancelled") },
              max: 100,
              progressNumberFormat: "%1d/%2d",
              progressPercentFormat: 0.53,
              progressStyle: 1,
              secondaryProgress: 1,
              color : "#ea7200",
              backgroundColor : "#000"
            },
            ios: {
              details: "Obteniendo Información!",
              margin: 10,
              dimBackground: true,
              color: "#ea7200", // color of indicator and labels
              backgroundColor: "yellow",
              userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
              hideBezel: true
            }
          };

          display(bool){
              if(bool){
                this.loader.show(this.options);
              }else{
                this.loader.hide();
              }
          }
    }