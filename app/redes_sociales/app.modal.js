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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsdURBQXlEO0FBT3pEO0lBSUksd0JBQW9CLE1BQXdCLEVBQVUsTUFBeUI7UUFBM0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFJLENBQUM7SUFFN0Usa0NBQVMsR0FBaEI7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQ2hELENBQUM7WUFDRyxXQUFXLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFLHNCQUFzQixFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDNUgsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQ3JELENBQUM7WUFDRyxXQUFXLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDN0csQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDaEQsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsQ0FDckQsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBakNRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUM7eUNBSzhCLHlCQUFnQixFQUFrQiwyQkFBaUI7T0FKdEUsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1tb2RhbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5tb2RhbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxuXG4gICAgcHVibGljIGNvbXBhcnRpcigpXG4gICAge1xuICAgICAgICBpZih0aGlzLnBhcmFtcy5jb250ZXh0LnF1ZUNvbXBhcnRpciA9PSAnc29ydGVvJylcbiAgICAgICAge1xuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoXCJodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL1wiLCBcIkhvbWUgb2YgTmF0aXZlU2NyaXB0XCIsIFwiwr9Db21vIHRlIGd1c3RhcmlhIGNvbXBhcnRpciB0dSBzb3J0ZW8/XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5wYXJhbXMuY29udGV4dC5xdWVDb21wYXJ0aXIgPT0gJ2JvbGV0bycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVXJsKFwiaHR0cHM6Ly9hbmd1bGFyLmlvL1wiLCBcIkhvbWUgb2YgQW5ndWxhclwiLCBcIsK/Q29tbyB0ZSBndXN0YXJpYSBjb21wYXJ0aXIgdHUgYm9sZXRvP1wiKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIHRoaXMuY2xvc2UoKTsgICAgICAgIFxuICAgIH0gICAgXG5cbiAgICBjb21wcmFkb3Jlcygpe1xuICAgICAgICBpZih0aGlzLnBhcmFtcy5jb250ZXh0LnF1ZUNvbXBhcnRpciA9PSAnc29ydGVvJylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29tcHJhZG9yZXNcIiwgSlNPTi5zdHJpbmdpZnkoe3VybDogXCJodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL1wifSldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMucGFyYW1zLmNvbnRleHQucXVlQ29tcGFydGlyID09ICdib2xldG8nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb21wcmFkb3Jlc1wiLCBKU09OLnN0cmluZ2lmeSh7dXJsOiBcImh0dHBzOi8vYW5ndWxhci5pby9cIn0pXSk7XG4gICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICB9XG5cbn0iXX0=