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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFDN0UsNEVBQTBFO0FBQzFFLHlFQUFzRTtBQUN0RSxrRUFBZ0Y7QUFFaEYsdURBQTZEO0FBQzdELG9DQUFzQztBQUN0QywyQ0FBaUQ7QUFVakQ7SUFTSSw0QkFBb0IsS0FBbUIsRUFBVSxLQUFxQixFQUFVLE1BQXdCLEVBQVUsR0FBc0IsRUFBVSxHQUFxQixFQUFVLE9BQXVCLEVBQVUsT0FBdUI7UUFBck4sVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVJqTyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFPaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQXlEQztRQXhERyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUd4QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMs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LE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUUsc0NBQWlCLEVBQUUsb0NBQWdCLEVBQUUsaUNBQWMsRUFBRSx3QkFBYyxFQUFFLG9CQUFZLENBQUU7U0FDbkcsQ0FBQzt5Q0FXNkIsb0JBQVksRUFBaUIsdUJBQWMsRUFBa0Isb0NBQWdCLEVBQWUsc0NBQWlCLEVBQWUsb0NBQWdCLEVBQW1CLGlDQUFjLEVBQW1CLHdCQUFjO09BVGhPLGtCQUFrQixDQWlJOUI7SUFBRCx5QkFBQztDQUFBLEFBaklELElBaUlDO0FBaklZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBQdXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcHV0L2h0dHAtcHV0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvVXRpbHNcIjtcclxuIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNvbmZpcm1hclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29uZmlybWFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY29uZmlybWFyLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogWyBNeUh0dHBQb3N0U2VydmljZSwgTXlIdHRwUHV0U2VydmljZSwgU2Vzc2lvblNlcnZpY2UsIExvYWRpbmdTZXJ2aWNlLCBVdGlsc1NlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgRGF0b3M6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBCb2xldG86IE9iamVjdCA9IHt9O1xyXG4gICAgcHJpdmF0ZSBCb2xldG9zOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBVdGlsczogVXRpbHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQVBJOiBNeUh0dHBQb3N0U2VydmljZSwgcHJpdmF0ZSBQVVQ6IE15SHR0cFB1dFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5EYXRvcy5UaXBvID09IFwiVmFyaW9zXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRvcy5Cb2xldG9zLmZvckVhY2goZnVuY3Rpb24oSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm86IEl0ZW0uSW5mby5UZWxlZm9ub2Zpam8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bmljaXBpbzogSXRlbS5JbmZvLk11bmljaXBpbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBJdGVtLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RpZ29fcG9zdGFsOiBJdGVtLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBJdGVtLkluZm8uQ29sb25pYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBJdGVtLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogSXRlbS5JbmZvLkNhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IEl0ZW0uSW5mby5Ob21icmUgKyBcIiBcIiArIEl0ZW0uSW5mby5BcHBhdCArIFwiIFwiICsgSXRlbS5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbHVsYXI6IEl0ZW0uSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlbzogSXRlbS5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogSXRlbS5JbmZvLkFwcGF0ICsgXCIgXCIgKyBJdGVtLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBJdGVtLkluZm8uTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW86IEl0ZW0uQm9sZXRvLmZvbGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyhJdGVtLkJvbGV0by5jbGF2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5EYXRvcy5Cb2xldG8uVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvOiB0aGlzLkRhdG9zLkluZm8uTXVuaWNpcGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiB0aGlzLkRhdG9zLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvX3Bvc3RhbDogdGhpcy5EYXRvcy5JbmZvLkNvZGlnb3Bvc3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6IHRoaXMuRGF0b3MuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiB0aGlzLkRhdG9zLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMuRGF0b3MuSW5mby5DYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IHRoaXMuRGF0b3MuSW5mby5Ob21icmUgKyBcIiBcIiArIHRoaXMuRGF0b3MuSW5mby5BcHBhdCArIFwiIFwiICsgdGhpcy5EYXRvcy5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWx1bGFyOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9tb3ZpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy5EYXRvcy5JbmZvLkFwcGF0ICsgXCIgXCIgKyB0aGlzLkRhdG9zLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogdGhpcy5EYXRvcy5JbmZvLk5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGlvOiB0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uZm9saW8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyh0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uY2xhdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTaSgpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIGlmKHRoaXMuRGF0b3MuVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEodGhpcy5Cb2xldG8sIFwiYXBpL0JvbGV0by9WZW5kZXJcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQm9sZXRvIHZlbmRpZG8gZXhpdG9zYW1lbnRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHsgVGlwbzogXCJVbm9cIiwgQm9sZXRvczogdGhpcy5EYXRvcyB9ICldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBTCBWRU5ERVIgQk9MRVRPXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjb250YWRvciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5mb3JFYWNoKGZ1bmN0aW9uKGJvbGV0bykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEoYm9sZXRvLCBcImFwaS9Cb2xldG8vVmVuZGVyXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRhZG9yID09IHRoaXMuQm9sZXRvcy5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBVklTT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYW4gdmVuZGlkbyBleGl0b3NhbWVudGUgbG9zIGJvbGV0b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVXRpbHMuQWN0dWFsaXphclRhbG9uYXJpb3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5IDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFkb3IrKztcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIEFMIFZFTkRFUiBWQVJJT1MgQk9MRVRPU1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2lhc2Rhc2QoKXtcclxuICAgICAgICBpZih0aGlzLkRhdG9zLlRpcG8gPT0gXCJVbm9cIil7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHsgVGlwbzogXCJVbm9cIiwgQm9sZXRvczogdGhpcy5EYXRvcyB9ICldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3RvcnkgOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFZhcmlvcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==