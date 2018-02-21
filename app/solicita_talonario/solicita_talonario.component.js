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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdGFfdGFsb25hcmlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXRhX3RhbG9uYXJpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsb0NBQXNDO0FBT3RDO0lBTEE7UUFNRSxVQUFLLEdBQVcsNkJBQTZCLENBQUM7UUFDOUMsVUFBSyxHQUFXLDBEQUEwRCxDQUFDO1FBQzNFLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsVUFBSyxHQUFXLHFCQUFxQixDQUFDO0lBZXhDLENBQUM7SUFaUSxzREFBaUIsR0FBeEI7UUFFRSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsS0FBSyxFQUFFLDZCQUE2QjtZQUNwQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDViw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFsQlUsMEJBQTBCO1FBTHRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSw4REFBOEQ7WUFDM0UsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQW1CdEM7SUFBRCxpQ0FBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2xpY2l0YXRhbG9uYXJpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NvbGljaXRhX3RhbG9uYXJpby9zb2xpY2l0YV90YWxvbmFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0YVRhbG9uYXJpb0NvbXBvbmVudCB7XHJcbiAgdGV4dDE6IHN0cmluZyA9ICfCoUFwcmVjaWFtb3MgbXVjaG8gdHUgYXBveW8hJztcclxuICB0ZXh0Mjogc3RyaW5nID0gJ0hheiBjbGljayBlbiBlbCBib3RvbiBwYXJhIHNvbGljaXRhciB1biBudWV2byB0YWxvbmFyaW8uJztcclxuICB0ZXh0Mzogc3RyaW5nID0gJ8KhR1JBQ0lBUyEnO1xyXG4gIHRleHQ0OiBzdHJpbmcgPSAnU09MSUNJVEFSIFRBTE9OQVJJTyc7XHJcblxyXG5cclxuICBwdWJsaWMgc29saWNpdGFUYWxvbmFyaW8oKVxyXG4gIHsgXHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogXCLCoVRJRU5FUyBVTiBOVUVWTyBUQUxPTkFSSU8hXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiwr9EZXNlYXMgZGVzY2FyZ2FybG8/XCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCJcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19