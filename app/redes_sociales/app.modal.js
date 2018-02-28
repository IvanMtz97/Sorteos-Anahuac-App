"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var Clipboard = require("nativescript-clipboard");
var Toast = require("nativescript-toast");
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
        this.url = "https://jaja.com/";
    }
    ModalComponent.prototype.compartir = function () {
        console.log("compartir()");
        this.close();
    };
    ModalComponent.prototype.copiar = function () {
        console.log("COPIAR CLIPBOARD", this.url);
        Clipboard.setText(this.url).then(function () { });
        Toast.makeText("Copiado al portapapeles", "long").show();
    };
    ModalComponent.prototype.compradores = function () {
        console.log("compradores");
        this.router.navigate(["compradores"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0Qsa0RBQW9EO0FBQ3BELDBDQUE0QztBQU81QztJQUtJLHdCQUFvQixNQUF3QixFQUFVLE1BQXlCO1FBQTNELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLGNBQWM7WUFDZCxTQUFTO1lBQ1QsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixjQUFjO1NBQ2pCLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDO0lBQ25DLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQXBDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQU04Qix5QkFBZ0IsRUFBa0IsMkJBQWlCO09BTHRFLGNBQWMsQ0FzQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBDbGlwYm9hcmQgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbW9kYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLm1vZGFsLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgICAgIHRoaXMuZnJhbWV3b3JrcyA9IFtcclxuICAgICAgICAgICAgXCJOYXRpdmVTY3JpcHRcIixcclxuICAgICAgICAgICAgXCJYYW1hcmluXCIsXHJcbiAgICAgICAgICAgIFwiT25zZW4gVUlcIixcclxuICAgICAgICAgICAgXCJJb25pYyBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJSZWFjdCBOYXRpdmVcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy51cmwgPSBcImh0dHBzOi8vamFqYS5jb20vXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBhcnRpcigpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wYXJ0aXIoKVwiKTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb3BpYXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNPUElBUiBDTElQQk9BUkRcIiwgdGhpcy51cmwpO1xyXG4gICAgICAgIENsaXBib2FyZC5zZXRUZXh0KHRoaXMudXJsKS50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiQ29waWFkbyBhbCBwb3J0YXBhcGVsZXNcIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wcmFkb3Jlcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcHJhZG9yZXNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29tcHJhZG9yZXNcIl0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==