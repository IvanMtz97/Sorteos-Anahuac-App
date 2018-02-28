"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(router, params) {
        this.router = router;
        this.params = params;
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
    }
    ModalComponent.prototype.compartir = function () {
        console.log("compartir()");
        this.router.navigate(["compradores"], { clearHistory: true });
        this.close();
    };
    ModalComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "app-modal",
            moduleId: module.id,
            templateUrl: './app.modal.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, dialogs_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFPL0Q7SUFJSSx3QkFBb0IsTUFBd0IsRUFBVSxNQUF5QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxjQUFjO1lBQ2QsU0FBUztZQUNULFVBQVU7WUFDVixpQkFBaUI7WUFDakIsY0FBYztTQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVNLGtDQUFTLEdBQWhCO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBdkJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUM7eUNBSzhCLHlCQUFnQixFQUFrQiwyQkFBaUI7T0FKdEUsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLW1vZGFsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLm1vZGFsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBmcmFtZXdvcmtzOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgICB0aGlzLmZyYW1ld29ya3MgPSBbXG4gICAgICAgICAgICBcIk5hdGl2ZVNjcmlwdFwiLFxuICAgICAgICAgICAgXCJYYW1hcmluXCIsXG4gICAgICAgICAgICBcIk9uc2VuIFVJXCIsXG4gICAgICAgICAgICBcIklvbmljIEZyYW1ld29ya1wiLFxuICAgICAgICAgICAgXCJSZWFjdCBOYXRpdmVcIlxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wYXJ0aXIoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wYXJ0aXIoKVwiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29tcHJhZG9yZXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNsb3NlKCk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB9XG5cbn0iXX0=