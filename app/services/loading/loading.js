"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.options = {
            message: 'Espere...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: true,
                cancelListener: function (dialog) { console.log("Loading cancelled"); },
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1,
                color: "#ea7200",
                backgroundColor: "#000"
            },
            ios: {
                details: "Obteniendo Información!",
                margin: 10,
                dimBackground: true,
                color: "#ea7200",
                backgroundColor: "yellow",
                userInteractionEnabled: false,
                hideBezel: true
            }
        };
    }
    LoadingService.prototype.display = function (bool) {
        if (bool) {
            this.loader.show(this.options);
        }
        else {
            this.loader.hide();
        }
    };
    LoadingService = __decorate([
        core_1.Injectable()
    ], LoadingService);
    return LoadingService;
}());
exports.LoadingService = LoadingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUZBQWtFO0FBSTlEO0lBREo7UUFFZ0IsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQVc7WUFDckIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixjQUFjLEVBQUUsVUFBUyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDckUsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3BCLEtBQUssRUFBRyxTQUFTO2dCQUNqQixlQUFlLEVBQUcsTUFBTTthQUN6QjtZQUNELEdBQUcsRUFBRTtnQkFDSCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLGVBQWUsRUFBRSxRQUFRO2dCQUN6QixzQkFBc0IsRUFBRSxLQUFLO2dCQUM3QixTQUFTLEVBQUUsSUFBSTthQUNoQjtTQUNGLENBQUM7SUFTUixDQUFDO0lBUEssZ0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFsQ00sY0FBYztRQUQ5QixpQkFBVSxFQUFFO09BQ0ksY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IGxvYWRBcHBDc3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNle1xyXG4gICAgICAgIHByaXZhdGUgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgICAgICBwdWJsaWMgb3B0aW9uczogT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXNwZXJlLi4uJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICAgICAgICAgIGFuZHJvaWQ6IHtcclxuICAgICAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgY2FuY2VsTGlzdGVuZXI6IGZ1bmN0aW9uKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxyXG4gICAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxLFxyXG4gICAgICAgICAgICAgIGNvbG9yIDogXCIjZWE3MjAwXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogXCIjMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW9zOiB7XHJcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJPYnRlbmllbmRvIEluZm9ybWFjacOzbiFcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2VhNzIwMFwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSwgLy8gZGVmYXVsdCB0cnVlLiBTZXQgZmFsc2Ugc28gdGhhdCB0aGUgdG91Y2hlcyB3aWxsIGZhbGwgdGhyb3VnaCBpdC5cclxuICAgICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBkaXNwbGF5KGJvb2wpe1xyXG4gICAgICAgICAgICAgIGlmKGJvb2wpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIH0iXX0=