"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var app = require("application");
var application_1 = require("application");
var nativescript_exit_1 = require("nativescript-exit");
var pushPlugin = require("nativescript-push-notifications");
var platformModule = require("tns-core-modules/platform");
var dialogs_1 = require("ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent(session, router, myGetService, routeExtension) {
        var _this = this;
        this.session = session;
        this.router = router;
        this.myGetService = myGetService;
        this.routeExtension = routeExtension;
        this.session = session;
        this.router = router;
        if (this.session.loggedIn()) {
            this.GetTalonarios();
            if (this.session.getFirstRun() == true) {
                this.router.navigate(["privacidad"]);
            }
            else {
                this.router.navigate(["talonarios"]);
            }
        }
        else {
            this.router.navigate([""]);
        }
        http.getImage("https://sorteoanahuac.mx/app/banner_1.jpg").then(function (r) {
            _this.imagenPublicidad = "data:image/png;base64," + r.toBase64String();
            _this.session.setImagenPublicidad(_this.imagenPublicidad);
        }, function (err) {
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        app.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            data.cancel = true;
            dialogs.confirm({
                title: "AVISO",
                message: "¿Deseas salir de la aplicación?",
                okButtonText: "SI",
                cancelButtonText: "NO"
            }).then(function (result) {
                if (result) {
                    nativescript_exit_1.exit();
                }
            });
        });
        var pushSettings = {
            senderID: "870994298438",
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                        identifier: 'READ_IDENTIFIER',
                        title: 'Read',
                        activationMode: "foreground",
                        destructive: false,
                        authenticationRequired: true
                    }, {
                        identifier: 'CANCEL_IDENTIFIER',
                        title: 'Cancel',
                        activationMode: "foreground",
                        destructive: true,
                        authenticationRequired: true
                    }],
                categories: [{
                        identifier: 'READ_CATEGORY',
                        actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                        actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                    }]
            },
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                console.log("Message received!\n" + notificationBody + "\n" + stringifiedData);
                dialogs_1.alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
            },
            notificationCallbackIOS: function (message) {
                dialogs_1.alert("Message received!\n" + JSON.stringify(message));
            }
        };
        pushPlugin.register(pushSettings, function (token) {
            dialogs_1.alert("Device registered. Access token: " + token);
            console.log("TOKEN DEVICE ---> ", token);
            console.log("OS: " + platformModule.device.os);
            // Register the interactive settings
            // if(pushSettings.interactiveSettings) {
            //     pushPlugin.registerUserNotificationSettings(() => {
            //         alert('Successfully registered for interactive push.');
            //     }, (err) => {
            //         alert('Error registering for interactive push: ' + JSON.stringify(err));
            //     });
            // }
        }, function (errorMessage) {
            dialogs_1.alert("Device NOT registered! " + JSON.stringify(errorMessage));
        });
    };
    //GET INICIO SESION-------->
    AppComponent.prototype.GetTalonarios = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getDataAuthorization('api/Colaborador/GetCorreo/' + this.session.getCorreoColaborador() + '/')
            .subscribe(function (result) {
            _this.onGetData(result);
        }, function (error) {
            //this.loader.display(false);
            _this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios. El token expiró favor de iniciar sesión.');
        });
    };
    AppComponent.prototype.onGetData = function (data) {
        this.session.setInformation(JSON.stringify(data.json()));
        //this.loader.display(false);  
    };
    AppComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        var _this = this;
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        }).then(function () {
            console.log("Dialog closed!");
            _this.routeExtension.navigate(['/login'], { clearHistory: true });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            providers: [session_services_1.SessionService, http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.Router, http_get_services_1.MyHttpGetService, router_extensions_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFDekMsNERBQThEO0FBQzlELDBEQUE0RDtBQUM1RCxzQ0FBbUM7QUFPbkM7SUFFSSxzQkFBb0IsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQztRQUFySixpQkFxQkM7UUFyQm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNqSixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFHRCxJQUFJLENBQUMsUUFBUSxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCLEdBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxFQUFFLFVBQUMsR0FBRztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLElBQXlDO1lBQ2xHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ1osS0FBSyxFQUFDLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGdCQUFnQixFQUFFLElBQUk7YUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1YsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztvQkFDUCx3QkFBSSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksR0FBRztZQUNmLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLG1CQUFtQixFQUFFO2dCQUNqQixPQUFPLEVBQUUsQ0FBQzt3QkFDTixVQUFVLEVBQUUsaUJBQWlCO3dCQUM3QixLQUFLLEVBQUUsTUFBTTt3QkFDYixjQUFjLEVBQUUsWUFBWTt3QkFDNUIsV0FBVyxFQUFFLEtBQUs7d0JBQ2xCLHNCQUFzQixFQUFFLElBQUk7cUJBQy9CLEVBQUU7d0JBQ0MsVUFBVSxFQUFFLG1CQUFtQjt3QkFDL0IsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixDQUFDO2dCQUNGLFVBQVUsRUFBRSxDQUFDO3dCQUNULFVBQVUsRUFBRSxlQUFlO3dCQUMzQix3QkFBd0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3dCQUNsRSx3QkFBd0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3FCQUNyRSxDQUFDO2FBQ0w7WUFDRCwyQkFBMkIsRUFBRSxVQUFVLGVBQWUsRUFBRSxlQUFlO2dCQUNuRSxJQUFJLGdCQUFnQixHQUFHLGVBQWUsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDO2dCQUMvRSxlQUFLLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDO1lBQzVFLENBQUM7WUFDRCx1QkFBdUIsRUFBRSxVQUFDLE9BQVk7Z0JBQ2xDLGVBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQztTQUNKLENBQUM7UUFFRixVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQWE7WUFDNUMsZUFBSyxDQUFDLG1DQUFtQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQyxvQ0FBb0M7WUFDcEMseUNBQXlDO1lBQ3pDLDBEQUEwRDtZQUMxRCxrRUFBa0U7WUFDbEUsb0JBQW9CO1lBQ3BCLG1GQUFtRjtZQUNuRixVQUFVO1lBQ1YsSUFBSTtRQUNSLENBQUMsRUFBRSxVQUFDLFlBQWlCO1lBQ2pCLGVBQUssQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUEsNEJBQTRCO0lBQ3JCLG9DQUFhLEdBQXJCO1FBQUEsaUJBVUM7UUFURyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFlBQVk7YUFDWixvQkFBb0IsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQzlGLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDZCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCw2QkFBNkI7WUFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUscUZBQXFGLENBQUMsQ0FBQztRQUN4SCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTyxnQ0FBUyxHQUFqQixVQUFrQixJQUFvQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsK0JBQStCO0lBQ25DLENBQUM7SUFFTSxxQ0FBYyxHQUFyQixVQUF1QixNQUFNLEVBQUUsT0FBTztRQUF0QyxpQkFTQztRQVJHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXZIUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLGlDQUFjLEVBQUUsb0NBQWdCLENBQUM7U0FDaEQsQ0FBQzt5Q0FHK0IsaUNBQWMsRUFBa0IsZUFBTSxFQUF3QixvQ0FBZ0IsRUFBMEIsb0NBQWdCO09BRjVJLFlBQVksQ0F5SHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXpIRCxJQXlIQztBQXpIWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgZXhpdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZXhpdFwiO1xyXG5pbXBvcnQgKiBhcyBwdXNoUGx1Z2luIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1Nlc3Npb25TZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpZGFkOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15R2V0U2VydmljZTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSByb3V0ZUV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucyl7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRUYWxvbmFyaW9zKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicHJpdmFjaWRhZFwiXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBodHRwLmdldEltYWdlKFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIikudGhlbigocikgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlblB1YmxpY2lkYWQgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgci50b0Jhc2U2NFN0cmluZygpOyBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQodGhpcy5pbWFnZW5QdWJsaWNpZGFkKTtcclxuICAgICAgICB9LCAoZXJyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCLCv0Rlc2VhcyBzYWxpciBkZSBsYSBhcGxpY2FjacOzbj9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTSVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOT1wiXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHB1c2hTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgc2VuZGVySUQ6IFwiODcwOTk0Mjk4NDM4XCIsIC8vIFJlcXVpcmVkOiBzZXR0aW5nIHdpdGggdGhlIHNlbmRlci9wcm9qZWN0IG51bWJlclxyXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcclxuICAgICAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ0NBTkNFTF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0ZvckRlZmF1bHRDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JNaW5pbWFsQ29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiBmdW5jdGlvbiAoc3RyaW5naWZpZWREYXRhLCBmY21Ob3RpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBub3RpZmljYXRpb25Cb2R5ID0gZmNtTm90aWZpY2F0aW9uICYmIGZjbU5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICAgICAgICAgYWxlcnQoXCJNZXNzYWdlIHJlY2VpdmVkIVxcblwiICsgbm90aWZpY2F0aW9uQm9keSArIFwiXFxuXCIgKyBzdHJpbmdpZmllZERhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNZXNzYWdlIHJlY2VpdmVkIVxcblwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVzaFBsdWdpbi5yZWdpc3RlcihwdXNoU2V0dGluZ3MsICh0b2tlbjogU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVE9LRU4gREVWSUNFIC0tLT4gXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPUzogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MpO1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RlciB0aGUgaW50ZXJhY3RpdmUgc2V0dGluZ3NcclxuICAgICAgICAgICAgLy8gaWYocHVzaFNldHRpbmdzLmludGVyYWN0aXZlU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgLy8gICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXJVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgaW50ZXJhY3RpdmUgcHVzaC4nKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBhbGVydCgnRXJyb3IgcmVnaXN0ZXJpbmcgZm9yIGludGVyYWN0aXZlIHB1c2g6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRGV2aWNlIE5PVCByZWdpc3RlcmVkISBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAvL0dFVCBJTklDSU8gU0VTSU9OLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIEdldFRhbG9uYXJpb3MoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlICBcclxuICAgICAgICAgICAgLmdldERhdGFBdXRob3JpemF0aW9uKCdhcGkvQ29sYWJvcmFkb3IvR2V0Q29ycmVvLycgKyB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSArICcvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIGRlIG9idGVuZXIgbG9zIHRhbG9uYXJpb3MuIEVsIHRva2VuIGV4cGlyw7MgZmF2b3IgZGUgaW5pY2lhciBzZXNpw7NuLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YShkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShkYXRhLmpzb24oKSkpO1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheShmYWxzZSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9zdHJhck1lbnNhamUgKHRpdHVsbywgbWVuc2FqZSkge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTp0aXR1bG8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lbnNhamUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVFeHRlbnNpb24ubmF2aWdhdGUoWycvbG9naW4nXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=