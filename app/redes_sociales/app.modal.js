"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var SocialShare = require("nativescript-social-share");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(router, params) {
        this.router = router;
        this.params = params;
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
    ModalComponent.prototype.compradores = function () {
        if (this.params.context.queCompartir == 'sorteo') {
            this.router.navigate(["compradores", JSON.stringify({ url: "https://www.nativescript.org/" })]);
        }
        else if (this.params.context.queCompartir == 'boleto') {
            this.router.navigate(["compradores", JSON.stringify({ url: "https://angular.io/" })]);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsdURBQXlEO0FBT3pEO0lBSUksd0JBQW9CLE1BQXdCLEVBQVUsTUFBeUI7UUFBM0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFJLENBQUM7SUFFN0Usa0NBQVMsR0FBaEI7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQ2hELENBQUM7WUFDRyxXQUFXLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFLHNCQUFzQixFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDNUgsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQ3JELENBQUM7WUFDRyxXQUFXLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDN0csQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDaEQsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDckQsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBakNRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUM7eUNBSzhCLHlCQUFnQixFQUFrQiwyQkFBaUI7T0FKdEUsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1tb2RhbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAubW9kYWwuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGFydGlyKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnBhcmFtcy5jb250ZXh0LnF1ZUNvbXBhcnRpciA9PSAnc29ydGVvJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVXJsKFwiaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9cIiwgXCJIb21lIG9mIE5hdGl2ZVNjcmlwdFwiLCBcIsK/Q29tbyB0ZSBndXN0YXJpYSBjb21wYXJ0aXIgdHUgc29ydGVvP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnBhcmFtcy5jb250ZXh0LnF1ZUNvbXBhcnRpciA9PSAnYm9sZXRvJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVXJsKFwiaHR0cHM6Ly9hbmd1bGFyLmlvL1wiLCBcIkhvbWUgb2YgQW5ndWxhclwiLCBcIsK/Q29tbyB0ZSBndXN0YXJpYSBjb21wYXJ0aXIgdHUgYm9sZXRvP1wiKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3NlKCk7ICAgICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgY29tcHJhZG9yZXMoKXtcclxuICAgICAgICBpZih0aGlzLnBhcmFtcy5jb250ZXh0LnF1ZUNvbXBhcnRpciA9PSAnc29ydGVvJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNvbXByYWRvcmVzXCIsIEpTT04uc3RyaW5naWZ5KHt1cmw6IFwiaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9cIn0pXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wYXJhbXMuY29udGV4dC5xdWVDb21wYXJ0aXIgPT0gJ2JvbGV0bycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb21wcmFkb3Jlc1wiLCBKU09OLnN0cmluZ2lmeSh7dXJsOiBcImh0dHBzOi8vYW5ndWxhci5pby9cIn0pXSk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbn0iXX0=