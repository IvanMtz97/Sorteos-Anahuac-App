"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var http_post_services_1 = require("../services/http-post/http-post.services");
var http_put_services_1 = require("../services/http-put/http-put.services");
var session_services_1 = require("../services/session/session.services");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var loading_1 = require("../services/loading/loading");
var dialogs = require("ui/dialogs");
var Utils_1 = require("../services/Utils");
var ConfirmarComponent = /** @class */ (function () {
    function ConfirmarComponent(Utils, route, router, API, PUT, session, loading) {
        this.Utils = Utils;
        this.route = route;
        this.router = router;
        this.API = API;
        this.PUT = PUT;
        this.session = session;
        this.loading = loading;
        this.Datos = [];
        this.Boleto = {};
        this.Boletos = [];
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    ConfirmarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
            if (_this.Datos.Tipo == "Varios") {
                _this.Datos.Boletos.forEach(function (Item) {
                    this.Boletos.push({
                        comprador: {
                            direccion: {
                                telefono: Item.Info.Telefonofijo,
                                municipio: Item.Info.Municipio,
                                estado: Item.Info.Estado,
                                codigo_postal: Item.Info.Codigopostal,
                                colonia: Item.Info.Colonia,
                                numero: Item.Info.Numero,
                                calle: Item.Info.Calle
                            },
                            nombre_completo: Item.Info.Nombre + " " + Item.Info.Appat + " " + Item.Info.Apmat,
                            celular: Item.Info.Telefonomovil,
                            correo: Item.Info.Correoelectronico,
                            apellidos: Item.Info.Appat + " " + Item.Info.Apmat,
                            nombre: Item.Info.Nombre
                        },
                        folio_talonario: String(this.Datos.Talonario),
                        folio: Item.Boleto.folio,
                        clave: String(Item.Boleto.clave)
                    });
                }.bind(_this));
            }
            else if (_this.Datos.Boleto.Tipo == "Uno") {
                _this.Boleto = {
                    comprador: {
                        direccion: {
                            telefono: _this.Datos.Info.Telefonofijo,
                            municipio: _this.Datos.Info.Municipio,
                            estado: _this.Datos.Info.Estado,
                            codigo_postal: _this.Datos.Info.Codigopostal,
                            colonia: _this.Datos.Info.Colonia,
                            numero: _this.Datos.Info.Numero,
                            calle: _this.Datos.Info.Calle
                        },
                        nombre_completo: _this.Datos.Info.Nombre + " " + _this.Datos.Info.Appat + " " + _this.Datos.Info.Apmat,
                        celular: _this.Datos.Info.Telefonomovil,
                        correo: _this.Datos.Info.Correoelectronico,
                        apellidos: _this.Datos.Info.Appat + " " + _this.Datos.Info.Apmat,
                        nombre: _this.Datos.Info.Nombre
                    },
                    folio_talonario: String(_this.Datos.Talonario),
                    folio: _this.Datos.Boleto.Boleto.folio,
                    clave: String(_this.Datos.Boleto.Boleto.clave)
                };
            }
        });
        this.folio = this.Datos.Boleto.Boleto.folio;
    };
    ConfirmarComponent.prototype.Si = function () {
        var _this = this;
        this.loading.display(true);
        if (this.Datos.Tipo == "Uno") {
            this.API.postData(this.Boleto, "api/Boleto/Vender").subscribe(function (res) {
                _this.loading.display(false);
                dialogs.alert({
                    title: "AVISO",
                    message: "Boleto vendido exitosamente",
                    okButtonText: "Ok"
                }).then(function () {
                    _this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: _this.Datos })], { clearHistory: true });
                });
            }, function (error) {
                console.log("ERROR AL VENDER BOLETO");
                console.log(error);
            });
        }
        else {
            var contador = 0;
            this.Boletos.forEach(function (boleto) {
                var _this = this;
                this.API.postData(boleto, "api/Boleto/Vender").subscribe(function (res) {
                    if (contador == _this.Boletos.length - 1) {
                        _this.loading.display(false);
                        dialogs.alert({
                            title: "AVISO",
                            message: "Se han vendido exitosamente los boletos",
                            okButtonText: "Ok"
                        }).then(function () {
                            _this.Utils.ActualizarTalonarios();
                            _this.router.navigate(["talonarios"], { clearHistory: true });
                        });
                    }
                    contador++;
                }, function (error) {
                    console.log("ERROR AL VENDER VARIOS BOLETOS");
                    console.log(error);
                });
            }.bind(this));
        }
    };
    ConfirmarComponent.prototype.Siasdasd = function () {
        if (this.Datos.Tipo == "Uno") {
            this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: this.Datos })], { clearHistory: true });
        }
        else {
            this.router.navigate(["talonarios"], { clearHistory: true });
        }
    };
    ConfirmarComponent.prototype.Varios = function () {
        this.router.navigate(["talonarios"], { clearHistory: true });
    };
    ConfirmarComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ConfirmarComponent.prototype, "drawerComponent", void 0);
    ConfirmarComponent = __decorate([
        core_1.Component({
            selector: "Confirmar",
            moduleId: module.id,
            templateUrl: "./confirmar.component.html",
            styleUrls: ["./confirmar.css"],
            providers: [http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService, loading_1.LoadingService, Utils_1.UtilsService]
        }),
        __metadata("design:paramtypes", [Utils_1.UtilsService, router_1.ActivatedRoute, router_extensions_1.RouterExtensions, http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService, loading_1.LoadingService])
    ], ConfirmarComponent);
    return ConfirmarComponent;
}());
exports.ConfirmarComponent = ConfirmarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFDN0UsNEVBQTBFO0FBQzFFLHlFQUFzRTtBQUN0RSxrRUFBZ0Y7QUFFaEYsdURBQTZEO0FBQzdELG9DQUFzQztBQUN0QywyQ0FBaUQ7QUFVakQ7SUFTSSw0QkFBb0IsS0FBbUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsR0FBc0IsRUFBVSxHQUFxQixFQUFVLE9BQXVCLEVBQVUsT0FBdUI7UUFBck4sVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVJqTyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFPaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQXlEQztRQXhERyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUd4QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMs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LE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUUsc0NBQWlCLEVBQUUsb0NBQWdCLEVBQUUsaUNBQWMsRUFBRSx3QkFBYyxFQUFFLG9CQUFZLENBQUU7U0FDbkcsQ0FBQzt5Q0FXNkIsb0JBQVksRUFBaUIsdUJBQWMsRUFBa0Isb0NBQWdCLEVBQWUsc0NBQWlCLEVBQWUsb0NBQWdCLEVBQW1CLGlDQUFjLEVBQW1CLHdCQUFjO09BVGhPLGtCQUFrQixDQWlJOUI7SUFBRCx5QkFBQztDQUFBLEFBaklELElBaUlDO0FBaklZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTXlIdHRwUHV0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXB1dC9odHRwLXB1dC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1V0aWxzXCI7XG4gXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDb25maXJtYXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29uZmlybWFyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NvbmZpcm1hci5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbIE15SHR0cFBvc3RTZXJ2aWNlLCBNeUh0dHBQdXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZSwgTG9hZGluZ1NlcnZpY2UsIFV0aWxzU2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHByaXZhdGUgRGF0b3M6IGFueSA9IFtdO1xuICAgIHByaXZhdGUgQm9sZXRvOiBPYmplY3QgPSB7fTtcbiAgICBwcml2YXRlIEJvbGV0b3M6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XG5cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIFV0aWxzOiBVdGlsc1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBBUEk6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIFBVVDogTXlIdHRwUHV0U2VydmljZSwgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSBsb2FkaW5nOiBMb2FkaW5nU2VydmljZSl7ICAgICAgICBcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZih0aGlzLkRhdG9zLlRpcG8gPT0gXCJWYXJpb3NcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5EYXRvcy5Cb2xldG9zLmZvckVhY2goZnVuY3Rpb24oSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkJvbGV0b3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJhZG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vOiBJdGVtLkluZm8uVGVsZWZvbm9maWpvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvOiBJdGVtLkluZm8uTXVuaWNpcGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBJdGVtLkluZm8uRXN0YWRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvX3Bvc3RhbDogSXRlbS5JbmZvLkNvZGlnb3Bvc3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6IEl0ZW0uSW5mby5Db2xvbmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBJdGVtLkluZm8uTnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IEl0ZW0uSW5mby5DYWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IEl0ZW0uSW5mby5Ob21icmUgKyBcIiBcIiArIEl0ZW0uSW5mby5BcHBhdCArIFwiIFwiICsgSXRlbS5JbmZvLkFwbWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWx1bGFyOiBJdGVtLkluZm8uVGVsZWZvbm9tb3ZpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiBJdGVtLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogSXRlbS5JbmZvLkFwcGF0ICsgXCIgXCIgKyBJdGVtLkluZm8uQXBtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogSXRlbS5JbmZvLk5vbWJyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGlvOiBJdGVtLkJvbGV0by5mb2xpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGF2ZTogU3RyaW5nKEl0ZW0uQm9sZXRvLmNsYXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5EYXRvcy5Cb2xldG8uVGlwbyA9PSBcIlVub1wiKXtcbiAgICAgICAgICAgICAgICB0aGlzLkJvbGV0byA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHJhZG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWxlZm9ubzogdGhpcy5EYXRvcy5JbmZvLlRlbGVmb25vZmlqbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdW5pY2lwaW86IHRoaXMuRGF0b3MuSW5mby5NdW5pY2lwaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiB0aGlzLkRhdG9zLkluZm8uRXN0YWRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGlnb19wb3N0YWw6IHRoaXMuRGF0b3MuSW5mby5Db2RpZ29wb3N0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb25pYTogdGhpcy5EYXRvcy5JbmZvLkNvbG9uaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiB0aGlzLkRhdG9zLkluZm8uTnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlOiB0aGlzLkRhdG9zLkluZm8uQ2FsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IHRoaXMuRGF0b3MuSW5mby5Ob21icmUgKyBcIiBcIiArIHRoaXMuRGF0b3MuSW5mby5BcHBhdCArIFwiIFwiICsgdGhpcy5EYXRvcy5JbmZvLkFwbWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsdWxhcjogdGhpcy5EYXRvcy5JbmZvLlRlbGVmb25vbW92aWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZW86IHRoaXMuRGF0b3MuSW5mby5Db3JyZW9lbGVjdHJvbmljbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy5EYXRvcy5JbmZvLkFwcGF0ICsgXCIgXCIgKyB0aGlzLkRhdG9zLkluZm8uQXBtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmU6IHRoaXMuRGF0b3MuSW5mby5Ob21icmVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxuICAgICAgICAgICAgICAgICAgICBmb2xpbzogdGhpcy5EYXRvcy5Cb2xldG8uQm9sZXRvLmZvbGlvLFxuICAgICAgICAgICAgICAgICAgICBjbGF2ZTogU3RyaW5nKHRoaXMuRGF0b3MuQm9sZXRvLkJvbGV0by5jbGF2ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFNpKCl7XG4gICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KHRydWUpO1xuICAgICAgICBpZih0aGlzLkRhdG9zLlRpcG8gPT0gXCJVbm9cIil7XG4gICAgICAgICAgICB0aGlzLkFQSS5wb3N0RGF0YSh0aGlzLkJvbGV0bywgXCJhcGkvQm9sZXRvL1ZlbmRlclwiKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFWSVNPXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQm9sZXRvIHZlbmRpZG8gZXhpdG9zYW1lbnRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHsgVGlwbzogXCJVbm9cIiwgQm9sZXRvczogdGhpcy5EYXRvcyB9ICldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgQUwgVkVOREVSIEJPTEVUT1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBjb250YWRvciA9IDA7XG4gICAgICAgICAgICB0aGlzLkJvbGV0b3MuZm9yRWFjaChmdW5jdGlvbihib2xldG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLkFQSS5wb3N0RGF0YShib2xldG8sIFwiYXBpL0JvbGV0by9WZW5kZXJcIikuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRhZG9yID09IHRoaXMuQm9sZXRvcy5sZW5ndGgtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2UgaGFuIHZlbmRpZG8gZXhpdG9zYW1lbnRlIGxvcyBib2xldG9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlV0aWxzLkFjdHVhbGl6YXJUYWxvbmFyaW9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3RvcnkgOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250YWRvcisrO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBWRU5ERVIgVkFSSU9TIEJPTEVUT1NcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTaWFzZGFzZCgpe1xuICAgICAgICBpZih0aGlzLkRhdG9zLlRpcG8gPT0gXCJVbm9cIil7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7IFRpcG86IFwiVW5vXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MgfSApXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3RvcnkgOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBWYXJpb3MoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59Il19
