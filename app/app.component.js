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
        this.serverUrl = "https://sorteoanahuac-servicios-mobile-p.azurewebsites.net/";
        this.session = session;
        this.router = router;
        this.session.setURL(this.serverUrl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFDekMsNERBQThEO0FBQzlELDBEQUE0RDtBQUM1RCxzQ0FBbUM7QUFPbkM7SUFJSSxzQkFBb0IsT0FBdUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFBVSxjQUFnQztRQUFySixpQkF3QkM7UUF4Qm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUY3SSxjQUFTLEdBQUcsNkRBQTZELENBQUM7UUFHOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQUEs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O1FBUkcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0hRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsaUNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNoRCxDQUFDO3lDQUsrQixpQ0FBYyxFQUFrQixlQUFNLEVBQXdCLG9DQUFnQixFQUEwQixvQ0FBZ0I7T0FKNUksWUFBWSxDQStIeEI7SUFBRCxtQkFBQztDQUFBLEFBL0hELElBK0hDO0FBL0hZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBleGl0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1leGl0XCI7XHJcbmltcG9ydCAqIGFzIHB1c2hQbHVnaW4gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2lkYWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL3NvcnRlb2FuYWh1YWMtc2VydmljaW9zLW1vYmlsZS1wLmF6dXJld2Vic2l0ZXMubmV0L1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRVUkwodGhpcy5zZXJ2ZXJVcmwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRUYWxvbmFyaW9zKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicHJpdmFjaWRhZFwiXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBodHRwLmdldEltYWdlKFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIikudGhlbigocikgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlblB1YmxpY2lkYWQgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgci50b0Jhc2U2NFN0cmluZygpOyBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQodGhpcy5pbWFnZW5QdWJsaWNpZGFkKTtcclxuICAgICAgICB9LCAoZXJyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCLCv0Rlc2VhcyBzYWxpciBkZSBsYSBhcGxpY2FjacOzbj9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTSVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOT1wiXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHZhciBwdXNoU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHNlbmRlcklEOiBcIjg3MDk5NDI5ODQzOFwiLCAvLyBSZXF1aXJlZDogc2V0dGluZyB3aXRoIHRoZSBzZW5kZXIvcHJvamVjdCBudW1iZXJcclxuICAgICAgICAgICAgYmFkZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGVydDogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmVTZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdDQU5DRUxfSURFTlRJRklFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfQ0FURUdPUlknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zRm9yTWluaW1hbENvbnRleHQ6IFsnUkVBRF9JREVOVElGSUVSJywgJ0NBTkNFTF9JREVOVElGSUVSJ11cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrQW5kcm9pZDogZnVuY3Rpb24gKHN0cmluZ2lmaWVkRGF0YSwgZmNtTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm90aWZpY2F0aW9uQm9keSA9IGZjbU5vdGlmaWNhdGlvbiAmJiBmY21Ob3RpZmljYXRpb24uZ2V0Qm9keSgpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgcmVjZWl2ZWQhXFxuXCIgKyBub3RpZmljYXRpb25Cb2R5ICsgXCJcXG5cIiArIHN0cmluZ2lmaWVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXIocHVzaFNldHRpbmdzLCAodG9rZW46IFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkRldmljZSByZWdpc3RlcmVkLiBBY2Nlc3MgdG9rZW46IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOIERFVklDRSAtLS0+IFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1M6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zKTtcclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIGludGVyYWN0aXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgIC8vIGlmKHB1c2hTZXR0aW5ncy5pbnRlcmFjdGl2ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyVXNlck5vdGlmaWNhdGlvblNldHRpbmdzKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgZm9yIGludGVyYWN0aXZlIHB1c2guJyk7XHJcbiAgICAgICAgICAgIC8vICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYWxlcnQoJ0Vycm9yIHJlZ2lzdGVyaW5nIGZvciBpbnRlcmFjdGl2ZSBwdXNoOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkRldmljZSBOT1QgcmVnaXN0ZXJlZCEgXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBHZXRUYWxvbmFyaW9zKCkge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZSAgXHJcbiAgICAgICAgICAgIC5nZXREYXRhQXV0aG9yaXphdGlvbignYXBpL0NvbGFib3JhZG9yL0dldENvcnJlby8nICsgdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCkgKyAnLycpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGEocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnRmFsbMOzIGFsIHRyYXRhciBkZSBvYnRlbmVyIGxvcyB0YWxvbmFyaW9zLiBFbCB0b2tlbiBleHBpcsOzIGZhdm9yIGRlIGluaWNpYXIgc2VzacOzbi4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vc3RyYXJNZW5zYWplICh0aXR1bG8sIG1lbnNhamUpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6dGl0dWxvLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZW5zYWplLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19