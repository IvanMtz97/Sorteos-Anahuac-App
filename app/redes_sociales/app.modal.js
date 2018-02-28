"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var Clipboard = require("nativescript-clipboard");
var Toast = require("nativescript-toast");
var SocialShare = require("nativescript-social-share");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(router, params) {
        this.router = router;
        this.params = params;
        this.url = "https://jaja.com/";
        console.log("queCompartir -> " + params.context.queCompartir);
    }
    ModalComponent.prototype.compartir = function () {
        if (this.params.context.queCompartir == 'sorteo') {
            SocialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "¿Como te gustaria compartir tu sorteo?");
        }
        else if (this.params.context.queCompartir == 'boleto') {
            SocialShare.shareUrl("https://angular.io/", "Home of Angular", "¿Como te gustaria compartir tu boleto?");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0Qsa0RBQW9EO0FBQ3BELDBDQUE0QztBQUM1Qyx1REFBeUQ7QUFPekQ7SUFLSSx3QkFBb0IsTUFBd0IsRUFBVSxNQUF5QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQzNFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDaEQsQ0FBQztZQUNHLFdBQVcsQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUUsc0JBQXNCLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztRQUM1SCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDckQsQ0FBQztZQUNHLFdBQVcsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztRQUM3RyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQXJDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQU04Qix5QkFBZ0IsRUFBa0IsMkJBQWlCO09BTHRFLGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBDbGlwYm9hcmQgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbW9kYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLm1vZGFsLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy51cmwgPSBcImh0dHBzOi8vamFqYS5jb20vXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWVDb21wYXJ0aXIgLT4gXCIgKyBwYXJhbXMuY29udGV4dC5xdWVDb21wYXJ0aXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wYXJ0aXIoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucGFyYW1zLmNvbnRleHQucXVlQ29tcGFydGlyID09ICdzb3J0ZW8nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoXCJodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL1wiLCBcIkhvbWUgb2YgTmF0aXZlU2NyaXB0XCIsIFwiwr9Db21vIHRlIGd1c3RhcmlhIGNvbXBhcnRpciB0dSBzb3J0ZW8/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMucGFyYW1zLmNvbnRleHQucXVlQ29tcGFydGlyID09ICdib2xldG8nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoXCJodHRwczovL2FuZ3VsYXIuaW8vXCIsIFwiSG9tZSBvZiBBbmd1bGFyXCIsIFwiwr9Db21vIHRlIGd1c3RhcmlhIGNvbXBhcnRpciB0dSBib2xldG8/XCIpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvcGlhcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09QSUFSIENMSVBCT0FSRFwiLCB0aGlzLnVybCk7XHJcbiAgICAgICAgQ2xpcGJvYXJkLnNldFRleHQodGhpcy51cmwpLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICAgICAgVG9hc3QubWFrZVRleHQoXCJDb3BpYWRvIGFsIHBvcnRhcGFwZWxlc1wiLCBcImxvbmdcIikuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXByYWRvcmVzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wcmFkb3Jlc1wiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb21wcmFkb3Jlc1wiXSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG59Il19