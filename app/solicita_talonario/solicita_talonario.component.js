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
        // public statusBarState: boolean=true;// statusBar.show();(swipe)="hideStatusBar()"
        // {        
        //     if(this.statusBarState == true)
        //     {
        //         statusBar.hide();
        //         this.statusBarState = false;
        //     }
        //     else if(this.statusBarState == false)
        //     {
        //         statusBar.show();
        //         this.statusBarState = true;
        //     }
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0NBQXNDO0FBQ3RDLGtFQUFnRjtBQUNoRiw2REFBOEY7QUFROUY7SUFMQTtRQU1FLFVBQUssR0FBVyw2QkFBNkIsQ0FBQztRQUM5QyxVQUFLLEdBQVcsMERBQTBELENBQUM7UUFDM0UsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQUM1QixVQUFLLEdBQVcscUJBQXFCLENBQUM7UUE0QnhDLG9GQUFvRjtRQUNsRixZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLFFBQVE7UUFDUiw0QkFBNEI7UUFDNUIsdUNBQXVDO1FBQ3ZDLFFBQVE7UUFDUiw0Q0FBNEM7UUFDNUMsUUFBUTtRQUNSLDRCQUE0QjtRQUM1QixzQ0FBc0M7UUFDdEMsUUFBUTtRQUNSLElBQUk7SUFDTixDQUFDO0lBbkNRLHNEQUFpQixHQUF4QjtRQUVFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsNkJBQTZCO1lBQ3BDLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLDZCQUE2QjtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXhCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjt1RUFBQztJQVBsRCwwQkFBMEI7UUFMdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7U0FDbkQsQ0FBQztPQUNXLDBCQUEwQixDQTZDdEM7SUFBRCxpQ0FBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2xpY2l0YXRhbG9uYXJpbycsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vc29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU29saWNpdGFUYWxvbmFyaW9Db21wb25lbnQge1xyXG4gIHRleHQxOiBzdHJpbmcgPSAnwqFBcHJlY2lhbW9zIG11Y2hvIHR1IGFwb3lvISc7XHJcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XHJcbiAgdGV4dDM6IHN0cmluZyA9ICfCoUdSQUNJQVMhJztcclxuICB0ZXh0NDogc3RyaW5nID0gJ1NPTElDSVRBUiBUQUxPTkFSSU8nO1xyXG4gIFxyXG5cclxuICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gIHB1YmxpYyBzb2xpY2l0YVRhbG9uYXJpbygpXHJcbiAgeyBcclxuICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiBcIsKhVElFTkVTIFVOIE5VRVZPIFRBTE9OQVJJTyFcIixcclxuICAgICAgbWVzc2FnZTogXCLCv0Rlc2VhcyBkZXNjYXJnYXJsbz9cIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiU2lcIlxyXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KClcclxuICB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNPTElDSVRBIFRBTE9OQVJJT1wiKTtcclxuICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG4vLyBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTsvLyBzdGF0dXNCYXIuc2hvdygpOyhzd2lwZSk9XCJoaWRlU3RhdHVzQmFyKClcIlxyXG4gIC8vIHsgICAgICAgIFxyXG4gIC8vICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICAgIHN0YXR1c0Jhci5oaWRlKCk7XHJcbiAgLy8gICAgICAgICB0aGlzLnN0YXR1c0JhclN0YXRlID0gZmFsc2U7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgZWxzZSBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IGZhbHNlKVxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgICBzdGF0dXNCYXIuc2hvdygpO1xyXG4gIC8vICAgICAgICAgdGhpcy5zdGF0dXNCYXJTdGF0ZSA9IHRydWU7XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcbn0iXX0=