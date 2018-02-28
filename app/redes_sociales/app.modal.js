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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsdURBQXlEO0FBT3pEO0lBSUksd0JBQW9CLE1BQXdCLEVBQVUsTUFBeUI7UUFBM0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFJLENBQUM7SUFFN0Usa0NBQVMsR0FBaEI7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQ2hELENBQUM7WUFDRyxXQUFXLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFLHNCQUFzQixFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDNUgsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLENBQ3JELENBQUM7WUFDRyxXQUFXLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDN0csQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQTNCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDO3lDQUs4Qix5QkFBZ0IsRUFBa0IsMkJBQWlCO09BSnRFLGNBQWMsQ0E2QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbW9kYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLm1vZGFsLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykgeyB9XHJcblxyXG4gICAgcHVibGljIGNvbXBhcnRpcigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5wYXJhbXMuY29udGV4dC5xdWVDb21wYXJ0aXIgPT0gJ3NvcnRlbycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCIsIFwiSG9tZSBvZiBOYXRpdmVTY3JpcHRcIiwgXCLCv0NvbW8gdGUgZ3VzdGFyaWEgY29tcGFydGlyIHR1IHNvcnRlbz9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5wYXJhbXMuY29udGV4dC5xdWVDb21wYXJ0aXIgPT0gJ2JvbGV0bycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChcImh0dHBzOi8vYW5ndWxhci5pby9cIiwgXCJIb21lIG9mIEFuZ3VsYXJcIiwgXCLCv0NvbW8gdGUgZ3VzdGFyaWEgY29tcGFydGlyIHR1IGJvbGV0bz9cIik7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpOyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGNvbXByYWRvcmVzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wcmFkb3Jlc1wiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb21wcmFkb3Jlc1wiXSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG59Il19