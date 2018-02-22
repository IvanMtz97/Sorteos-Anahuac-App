"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var SolicitaTalonarioComponent = /** @class */ (function () {
    function SolicitaTalonarioComponent() {
        this.text1 = '¡Apreciamos mucho tu apoyo!';
        this.text2 = 'Haz click en el boton para solicitar un nuevo talonario.';
        this.text3 = '¡GRACIAS!';
        this.text4 = 'SOLICITAR TALONARIO';
    }
    SolicitaTalonarioComponent.prototype.solicitaTalonario = function () {
        dialogs.confirm({
            title: "¡TIENES UN NUEVO TALONARIO!",
            message: "¿Deseas descargarlo?",
            cancelButtonText: "No",
            okButtonText: "Si"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
    };
    SolicitaTalonarioComponent.prototype.ngOnInit = function () {
        console.log("SOLICITA TALONARIO");
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    SolicitaTalonarioComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SolicitaTalonarioComponent.prototype, "drawerComponent", void 0);
    SolicitaTalonarioComponent = __decorate([
        core_1.Component({
            selector: 'solicitatalonario',
            moduleId: module.id,
            templateUrl: './solicita_talonario.component.html'
        })
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFPOUY7SUFMQTtRQU1FLFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcsMERBQTBELENBQUM7UUFDM0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7SUEyQnhDLENBQUM7SUF0QlEsc0RBQWlCLEdBQXhCO1FBRUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNkLEtBQUssRUFBRSw2QkFBNkI7WUFDcEMsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxzREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBeEJvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO3VFQUFDO0lBTmxELDBCQUEwQjtRQUx0QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztTQUNuRCxDQUFDO09BQ1csMEJBQTBCLENBK0J0QztJQUFELGlDQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvbGljaXRhdGFsb25hcmlvJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0YVRhbG9uYXJpb0NvbXBvbmVudCB7XHJcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcclxuICB0ZXh0Mjogc3RyaW5nID0gJ0hheiBjbGljayBlbiBlbCBib3RvbiBwYXJhIHNvbGljaXRhciB1biBudWV2byB0YWxvbmFyaW8uJztcclxuICB0ZXh0Mzogc3RyaW5nID0gJ8KhR1JBQ0lBUyEnO1xyXG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XHJcbiAgXHJcbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgXHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogXCLCoVRJRU5FUyBVTiBOVUVWTyBUQUxPTkFSSU8hXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiwr9EZXNlYXMgZGVzY2FyZ2FybG8/XCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCJcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAge1xyXG4gICAgY29uc29sZS5sb2coXCJTT0xJQ0lUQSBUQUxPTkFSSU9cIik7XHJcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxufSJdfQ==