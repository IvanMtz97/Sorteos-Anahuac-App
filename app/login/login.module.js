"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var shared_module_1 = require("../shared/shared.module");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var angular_1 = require("nativescript-checkbox/angular");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                login_routing_module_1.LoginRoutingModule,
                shared_module_1.SharedModule,
                angular_1.TNSCheckBoxModule
            ],
            declarations: [
                login_component_1.LoginComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFFckUseURBQXVEO0FBQ3ZELCtEQUE0RDtBQUM1RCxxREFBbUQ7QUFDbkQseURBQWtFO0FBaUJsRTtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBZnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIseUNBQWtCO2dCQUNsQiw0QkFBWTtnQkFDWiwyQkFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTG9naW5Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XG4iXX0=