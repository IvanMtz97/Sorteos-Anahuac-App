"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
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
    SolicitaTalonarioComponent = __decorate([
        core_1.Component({
            selector: 'solicitatalonario',
            templateUrl: 'modules/solicita_talonario/solicita_talonario.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], SolicitaTalonarioComponent);
    return SolicitaTalonarioComponent;
}());
exports.SolicitaTalonarioComponent = SolicitaTalonarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsb0NBQXNDO0FBT3RDO0lBTEE7UUFNRSxVQUFLLEdBQVcsNkJBQTZCLENBQUM7UUFDOUMsVUFBSyxHQUFXLDBEQUEwRCxDQUFDO1FBQzNFLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsVUFBSyxHQUFXLHFCQUFxQixDQUFDO0lBZXhDLENBQUM7SUFaUSxzREFBaUIsR0FBeEI7UUFFRSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsS0FBSyxFQUFFLDZCQUE2QjtZQUNwQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDViw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFsQlUsMEJBQTBCO1FBTHRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSw4REFBOEQ7WUFDM0UsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQW1CdEM7SUFBRCxpQ0FBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29saWNpdGF0YWxvbmFyaW8nLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc29saWNpdGFfdGFsb25hcmlvL3NvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNvbGljaXRhVGFsb25hcmlvQ29tcG9uZW50IHtcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcbiAgdGV4dDI6IHN0cmluZyA9ICdIYXogY2xpY2sgZW4gZWwgYm90b24gcGFyYSBzb2xpY2l0YXIgdW4gbnVldm8gdGFsb25hcmlvLic7XG4gIHRleHQzOiBzdHJpbmcgPSAnwqFHUkFDSUFTISc7XG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XG5cblxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxuICB7IFxuICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICB0aXRsZTogXCLCoVRJRU5FUyBVTiBOVUVWTyBUQUxPTkFSSU8hXCIsXG4gICAgICBtZXNzYWdlOiBcIsK/RGVzZWFzIGRlc2NhcmdhcmxvP1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgIH0pO1xuICB9XG59Il19