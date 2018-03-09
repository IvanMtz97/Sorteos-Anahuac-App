"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_services_1 = require("./services/session/session.services");
var router_1 = require("@angular/router");
var http = require("http");
var http_get_services_1 = require("./services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var pushPlugin = require("nativescript-push-notifications");
var platformModule = require("tns-core-modules/platform");
var dialogs_1 = require("ui/dialogs");
var app = require("application");
var application_1 = require("application");
var nativescript_exit_1 = require("nativescript-exit");
var loading_1 = require("./services/loading/loading");
var AppComponent = /** @class */ (function () {
    function AppComponent(session, router, myGetService, routeExtension, loading) {
        var _this = this;
        this.session = session;
        this.router = router;
        this.myGetService = myGetService;
        this.routeExtension = routeExtension;
        this.loading = loading;
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
        var _this = this;
        app.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            if (_this.router.isActive("/", true) || _this.router.isActive("/talonarios", true) || _this.router.isActive("", true) || _this.router.isActive("/login", true)) {
                data.cancel = true;
                dialogs.confirm({
                    title: "AVISO",
                    message: "Deseas salir de la aplicacion?",
                    okButtonText: "SI",
                    cancelButtonText: "NO"
                }).then(function (result) {
                    if (result) {
                        nativescript_exit_1.exit();
                    }
                });
            }
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
            //alert("Device registered. Access token: " + token);
            //console.log("TOKEN DEVICE ---> ", token);
            //console.log("OS: " + platformModule.device.os);
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
            //this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios. El token expiro favor de iniciar sesion.');
            _this.loading.display(true);
            _this.myGetService.getLogin({ email: _this.session.getCorreoColaborador(), password: _this.session.getPassColaborador() }, "api/Colaborador/" + platformModule.device.uuid).subscribe(function (result) {
                _this.loading.display(false);
                console.log("TOKEN EXPIRADO");
                console.dir(result.json());
                _this.session.setLoggedIn(true);
                _this.session.setInformation(JSON.stringify(result.json()));
                _this.session.setToken(result.json().token);
                _this.session.setIdColaborador(result.json().identificador);
            }, function (error) {
                _this.loading.display(false);
                _this.mostrarMensaje('Error', 'Usuario y/o contraseña incorrectos, favor de iniciar sesion.');
            });
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
            providers: [session_services_1.SessionService, http_get_services_1.MyHttpGetService, loading_1.LoadingService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.Router, http_get_services_1.MyHttpGetService, router_extensions_1.RouterExtensions, loading_1.LoadingService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0VBQXFFO0FBQ3JFLDBDQUF5QztBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsMkVBQXlFO0FBRXpFLG9DQUFzQztBQUN0QyxtRkFBaUY7QUFDakYsNERBQThEO0FBQzlELDBEQUE0RDtBQUM1RCxzQ0FBbUM7QUFDbkMsaUNBQW1DO0FBQ25DLDJDQUFzRjtBQUN0Rix1REFBeUM7QUFFekMsc0RBQTREO0FBUTVEO0lBRUksc0JBQW9CLE9BQXVCLEVBQVUsTUFBYyxFQUFVLFlBQThCLEVBQVUsY0FBZ0MsRUFBVSxPQUF1QjtRQUF0TCxpQkFxQkM7UUFyQm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ2xMLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FB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ckIsVUFBdUIsTUFBTSxFQUFFLE9BQU87UUFBdEMsaUJBU0M7UUFSRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0SVEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBYyxFQUFFLG9DQUFnQixFQUFFLHdCQUFjLENBQUM7U0FDaEUsQ0FBQzt5Q0FHK0IsaUNBQWMsRUFBa0IsZUFBTSxFQUF3QixvQ0FBZ0IsRUFBMEIsb0NBQWdCLEVBQW1CLHdCQUFjO09BRjdLLFlBQVksQ0F3SXhCO0lBQUQsbUJBQUM7Q0FBQSxBQXhJRCxJQXdJQztBQXhJWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBwdXNoUGx1Z2luIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IGV4aXQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWV4aXRcIjtcclxuXHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9hZGluZy9sb2FkaW5nXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpZGFkOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15R2V0U2VydmljZTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSByb3V0ZUV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBsb2FkaW5nOiBMb2FkaW5nU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmxvZ2dlZEluKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRUYWxvbmFyaW9zKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2Vzc2lvbi5nZXRGaXJzdFJ1bigpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicHJpdmFjaWRhZFwiXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBodHRwLmdldEltYWdlKFwiaHR0cHM6Ly9zb3J0ZW9hbmFodWFjLm14L2FwcC9iYW5uZXJfMS5qcGdcIikudGhlbigocikgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlblB1YmxpY2lkYWQgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgci50b0Jhc2U2NFN0cmluZygpOyBcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldEltYWdlblB1YmxpY2lkYWQodGhpcy5pbWFnZW5QdWJsaWNpZGFkKTtcclxuICAgICAgICB9LCAoZXJyKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBhcHAuYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCIvXCIsIHRydWUpIHx8IHRoaXMucm91dGVyLmlzQWN0aXZlKFwiL3RhbG9uYXJpb3NcIiwgdHJ1ZSkgfHwgdGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCJcIiwgdHJ1ZSkgfHwgdGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCIvbG9naW5cIiwgdHJ1ZSkpe1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIkFWSVNPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZXNlYXMgc2FsaXIgZGUgbGEgYXBsaWNhY2lvbj9cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU0lcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5PXCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgICAgIHZhciBwdXNoU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHNlbmRlcklEOiBcIjg3MDk5NDI5ODQzOFwiLCAvLyBSZXF1aXJlZDogc2V0dGluZyB3aXRoIHRoZSBzZW5kZXIvcHJvamVjdCBudW1iZXJcclxuICAgICAgICAgICAgYmFkZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGVydDogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmVTZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdDQU5DRUxfSURFTlRJRklFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfQ0FURUdPUlknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zRm9yTWluaW1hbENvbnRleHQ6IFsnUkVBRF9JREVOVElGSUVSJywgJ0NBTkNFTF9JREVOVElGSUVSJ11cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrQW5kcm9pZDogZnVuY3Rpb24gKHN0cmluZ2lmaWVkRGF0YSwgZmNtTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm90aWZpY2F0aW9uQm9keSA9IGZjbU5vdGlmaWNhdGlvbiAmJiBmY21Ob3RpZmljYXRpb24uZ2V0Qm9keSgpO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgcmVjZWl2ZWQhXFxuXCIgKyBub3RpZmljYXRpb25Cb2R5ICsgXCJcXG5cIiArIHN0cmluZ2lmaWVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXIocHVzaFNldHRpbmdzLCAodG9rZW46IFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUT0tFTiBERVZJQ0UgLS0tPiBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiT1M6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zKTtcclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIGludGVyYWN0aXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgIC8vIGlmKHB1c2hTZXR0aW5ncy5pbnRlcmFjdGl2ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyVXNlck5vdGlmaWNhdGlvblNldHRpbmdzKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgZm9yIGludGVyYWN0aXZlIHB1c2guJyk7XHJcbiAgICAgICAgICAgIC8vICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYWxlcnQoJ0Vycm9yIHJlZ2lzdGVyaW5nIGZvciBpbnRlcmFjdGl2ZSBwdXNoOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIkRldmljZSBOT1QgcmVnaXN0ZXJlZCEgXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgLy9HRVQgSU5JQ0lPIFNFU0lPTi0tLS0tLS0tPlxyXG4gICAgcHJpdmF0ZSBHZXRUYWxvbmFyaW9zKCkge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkZXIuZGlzcGxheSh0cnVlKTtcclxuICAgICAgICB0aGlzLm15R2V0U2VydmljZSAgXHJcbiAgICAgICAgICAgIC5nZXREYXRhQXV0aG9yaXphdGlvbignYXBpL0NvbGFib3JhZG9yL0dldENvcnJlby8nICsgdGhpcy5zZXNzaW9uLmdldENvcnJlb0NvbGFib3JhZG9yKCkgKyAnLycpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGEocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9hZGVyLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm1vc3RyYXJNZW5zYWplKCdFcnJvcicsICdGYWxsw7MgYWwgdHJhdGFyIGRlIG9idGVuZXIgbG9zIHRhbG9uYXJpb3MuIEVsIHRva2VuIGV4cGlybyBmYXZvciBkZSBpbmljaWFyIHNlc2lvbi4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teUdldFNlcnZpY2UuZ2V0TG9naW4oe2VtYWlsOiB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSwgcGFzc3dvcmQ6IHRoaXMuc2Vzc2lvbi5nZXRQYXNzQ29sYWJvcmFkb3IoKX0sIFwiYXBpL0NvbGFib3JhZG9yL1wiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnV1aWQpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BsYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVE9LRU4gRVhQSVJBRE9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzdWx0Lmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldExvZ2dlZEluKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShyZXN1bHQuanNvbigpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKHJlc3VsdC5qc29uKCkudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJZENvbGFib3JhZG9yKHJlc3VsdC5qc29uKCkuaWRlbnRpZmljYWRvcik7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyTWVuc2FqZSgnRXJyb3InLCAnVXN1YXJpbyB5L28gY29udHJhc2XDsWEgaW5jb3JyZWN0b3MsIGZhdm9yIGRlIGluaWNpYXIgc2VzaW9uLicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhKGRhdGE6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUV4dGVuc2lvbi5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==