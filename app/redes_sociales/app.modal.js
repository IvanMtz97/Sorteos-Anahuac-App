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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0Qsa0RBQW9EO0FBQ3BELDBDQUE0QztBQUM1Qyx1REFBeUQ7QUFPekQ7SUFLSSx3QkFBb0IsTUFBd0IsRUFBVSxNQUF5QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQzNFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDaEQsQ0FBQztZQUNHLFdBQVcsQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUUsc0JBQXNCLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztRQUM1SCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDckQsQ0FBQztZQUNHLFdBQVcsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztRQUM3RyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQXJDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQU04Qix5QkFBZ0IsRUFBa0IsMkJBQWlCO09BTHRFLGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBDbGlwYm9hcmQgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1tb2RhbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5tb2RhbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy51cmwgPSBcImh0dHBzOi8vamFqYS5jb20vXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlQ29tcGFydGlyIC0+IFwiICsgcGFyYW1zLmNvbnRleHQucXVlQ29tcGFydGlyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcGFydGlyKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMucGFyYW1zLmNvbnRleHQucXVlQ29tcGFydGlyID09ICdzb3J0ZW8nKVxuICAgICAgICB7XG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCIsIFwiSG9tZSBvZiBOYXRpdmVTY3JpcHRcIiwgXCLCv0NvbW8gdGUgZ3VzdGFyaWEgY29tcGFydGlyIHR1IHNvcnRlbz9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnBhcmFtcy5jb250ZXh0LnF1ZUNvbXBhcnRpciA9PSAnYm9sZXRvJylcbiAgICAgICAge1xuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoXCJodHRwczovL2FuZ3VsYXIuaW8vXCIsIFwiSG9tZSBvZiBBbmd1bGFyXCIsIFwiwr9Db21vIHRlIGd1c3RhcmlhIGNvbXBhcnRpciB0dSBib2xldG8/XCIpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgdGhpcy5jbG9zZSgpOyAgICAgICAgXG4gICAgfVxuXG4gICAgY29waWFyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09QSUFSIENMSVBCT0FSRFwiLCB0aGlzLnVybCk7XG4gICAgICAgIENsaXBib2FyZC5zZXRUZXh0KHRoaXMudXJsKS50aGVuKGZ1bmN0aW9uKCkge30pO1xuICAgICAgICBUb2FzdC5tYWtlVGV4dChcIkNvcGlhZG8gYWwgcG9ydGFwYXBlbGVzXCIsIFwibG9uZ1wiKS5zaG93KCk7XG4gICAgfVxuXG4gICAgY29tcHJhZG9yZXMoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wcmFkb3Jlc1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29tcHJhZG9yZXNcIl0pO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgfVxuXG59Il19