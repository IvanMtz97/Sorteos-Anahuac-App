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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUZBQWtFO0FBSTlEO0lBREo7UUFFZ0IsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQVc7WUFDckIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixjQUFjLEVBQUUsVUFBUyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDckUsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3BCLEtBQUssRUFBRyxTQUFTO2dCQUNqQixlQUFlLEVBQUcsTUFBTTthQUN6QjtZQUNELEdBQUcsRUFBRTtnQkFDSCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLGVBQWUsRUFBRSxRQUFRO2dCQUN6QixzQkFBc0IsRUFBRSxLQUFLO2dCQUM3QixTQUFTLEVBQUUsSUFBSTthQUNoQjtTQUNGLENBQUM7SUFTUixDQUFDO0lBUEssZ0NBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFsQ00sY0FBYztRQUQ5QixpQkFBVSxFQUFFO09BQ0ksY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xuaW1wb3J0IHsgbG9hZEFwcENzcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uXCI7XG5cbkBJbmplY3RhYmxlKClcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2V7XG4gICAgICAgIHByaXZhdGUgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICAgICAgcHVibGljIG9wdGlvbnM6IE9iamVjdCA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFc3BlcmUuLi4nLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAuNjUsXG4gICAgICAgICAgICBhbmRyb2lkOiB7XG4gICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbihkaWFsb2cpIHsgY29uc29sZS5sb2coXCJMb2FkaW5nIGNhbmNlbGxlZFwiKSB9LFxuICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxuICAgICAgICAgICAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXG4gICAgICAgICAgICAgIHByb2dyZXNzU3R5bGU6IDEsXG4gICAgICAgICAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxLFxuICAgICAgICAgICAgICBjb2xvciA6IFwiI2VhNzIwMFwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBcIiMwMDBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICBkZXRhaWxzOiBcIk9idGVuaWVuZG8gSW5mb3JtYWNpw7NuIVwiLFxuICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjZWE3MjAwXCIsIC8vIGNvbG9yIG9mIGluZGljYXRvciBhbmQgbGFiZWxzXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsIC8vIGRlZmF1bHQgdHJ1ZS4gU2V0IGZhbHNlIHNvIHRoYXQgdGhlIHRvdWNoZXMgd2lsbCBmYWxsIHRocm91Z2ggaXQuXG4gICAgICAgICAgICAgIGhpZGVCZXplbDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBkaXNwbGF5KGJvb2wpe1xuICAgICAgICAgICAgICBpZihib29sKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9Il19