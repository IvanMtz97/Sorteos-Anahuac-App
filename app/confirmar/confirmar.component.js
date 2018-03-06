"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var http_post_services_1 = require("../services/http-post/http-post.services");
var http_put_services_1 = require("../services/http-put/http-put.services");
var session_services_1 = require("../services/session/session.services");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var ConfirmarComponent = /** @class */ (function () {
    function ConfirmarComponent(route, router, API, PUT, session) {
        this.route = route;
        this.router = router;
        this.API = API;
        this.PUT = PUT;
        this.session = session;
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
        if (this.Datos.Tipo == "Uno") {
            this.API.postData(this.Boleto, "api/Boleto/Vender").subscribe(function (res) {
                _this.router.navigate(["asignacionexitosa", JSON.stringify({ Tipo: "Uno", Boletos: _this.Datos })], { clearHistory: true });
                _this.PUT.putData({}, "api/Colaborador").subscribe(function (res) {
                    _this.session.setToken(res.json().token);
                }, function (error) {
                });
            }, function (error) {
            });
        }
        else {
            var contador = 0;
            this.Boletos.forEach(function (boleto) {
                var _this = this;
                this.API.postData(boleto, "api/Boleto/Vender").subscribe(function (res) {
                    if (contador == _this.Boletos.length - 1) {
                        _this.router.navigate(["talonarios"], { clearHistory: true });
                        _this.PUT.putData({}, "api/Colaborador").subscribe(function (res) {
                            _this.session.setToken(res.json().token);
                        }, function (error) {
                        });
                    }
                    contador++;
                }, function (error) {
                });
            }.bind(this));
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
            providers: [http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_extensions_1.RouterExtensions, http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService])
    ], ConfirmarComponent);
    return ConfirmarComponent;
}());
exports.ConfirmarComponent = ConfirmarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFDN0UsNEVBQTBFO0FBQzFFLHlFQUFzRTtBQUN0RSxrRUFBZ0Y7QUFXaEY7SUFTSSw0QkFBb0IsS0FBcUIsRUFBVSxNQUF3QixFQUFVLEdBQXNCLEVBQVUsR0FBcUIsRUFBVSxPQUF1QjtRQUF2SixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBUm5LLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQU9oQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBeURDO1FBeERHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBR3hDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUk7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNWLFNBQVMsRUFBRTs0QkFDSCxTQUFTLEVBQUU7Z0NBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQ0FDaEMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQ0FDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQ0FDeEIsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQ0FDckMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztnQ0FDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQ0FDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzs2QkFDekI7NEJBQ0QsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzRCQUNqRixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhOzRCQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7NEJBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzRCQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3lCQUMzQjt3QkFDRCxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO3dCQUM3QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUNuQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUc7b0JBQ1YsU0FBUyxFQUFFO3dCQUNQLFNBQVMsRUFBRTs0QkFDUCxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWTs0QkFDdEMsU0FBUyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7NEJBQ3BDLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNOzRCQUM5QixhQUFhLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWTs0QkFDM0MsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87NEJBQ2hDLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNOzRCQUM5QixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSzt5QkFDL0I7d0JBQ0QsZUFBZSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUNuRyxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYTt3QkFDdEMsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjt3QkFDekMsU0FBUyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDOUQsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07cUJBQ2pDO29CQUNELGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7b0JBQzdDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNoRCxDQUFBO1lBQ0wsQ0FBQztRQUlMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFFLEdBQUY7UUFBQSxpQkEyQkM7UUExQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDN0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFFLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMzSCxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO29CQUNqRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ1IsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBUyxNQUFNO2dCQUFmLGlCQVlwQjtnQkFYRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO29CQUN4RCxFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRyxJQUFJLEVBQUMsQ0FBQyxDQUFDO3dCQUM3RCxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHOzRCQUNqRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVDLENBQUMsRUFBRSxVQUFBLEtBQUs7d0JBQ1IsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztvQkFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDZixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXJHb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjsrREFBQztJQU5wRCxrQkFBa0I7UUFSOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLFNBQVMsRUFBRSxDQUFFLHNDQUFpQixFQUFFLG9DQUFnQixFQUFFLGlDQUFjLENBQUU7U0FDckUsQ0FBQzt5Q0FXNkIsdUJBQWMsRUFBa0Isb0NBQWdCLEVBQWUsc0NBQWlCLEVBQWUsb0NBQWdCLEVBQW1CLGlDQUFjO09BVGxLLGtCQUFrQixDQTRHOUI7SUFBRCx5QkFBQztDQUFBLEFBNUdELElBNEdDO0FBNUdZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wb3N0L2h0dHAtcG9zdC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBQdXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcHV0L2h0dHAtcHV0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ29uZmlybWFyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb25maXJtYXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jb25maXJtYXIuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbIE15SHR0cFBvc3RTZXJ2aWNlLCBNeUh0dHBQdXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJpdmF0ZSBEYXRvczogYW55ID0gW107XHJcbiAgICBwcml2YXRlIEJvbGV0bzogT2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIEJvbGV0b3M6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQVBJOiBNeUh0dHBQb3N0U2VydmljZSwgcHJpdmF0ZSBQVVQ6IE15SHR0cFB1dFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5EYXRvcy5UaXBvID09IFwiVmFyaW9zXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRvcy5Cb2xldG9zLmZvckVhY2goZnVuY3Rpb24oSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm86IEl0ZW0uSW5mby5UZWxlZm9ub2Zpam8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bmljaXBpbzogSXRlbS5JbmZvLk11bmljaXBpbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBJdGVtLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RpZ29fcG9zdGFsOiBJdGVtLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBJdGVtLkluZm8uQ29sb25pYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBJdGVtLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogSXRlbS5JbmZvLkNhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IEl0ZW0uSW5mby5Ob21icmUgKyBcIiBcIiArIEl0ZW0uSW5mby5BcHBhdCArIFwiIFwiICsgSXRlbS5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbHVsYXI6IEl0ZW0uSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlbzogSXRlbS5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogSXRlbS5JbmZvLkFwcGF0ICsgXCIgXCIgKyBJdGVtLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBJdGVtLkluZm8uTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW86IEl0ZW0uQm9sZXRvLmZvbGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyhJdGVtLkJvbGV0by5jbGF2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5EYXRvcy5Cb2xldG8uVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvOiB0aGlzLkRhdG9zLkluZm8uTXVuaWNpcGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiB0aGlzLkRhdG9zLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvX3Bvc3RhbDogdGhpcy5EYXRvcy5JbmZvLkNvZGlnb3Bvc3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6IHRoaXMuRGF0b3MuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiB0aGlzLkRhdG9zLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMuRGF0b3MuSW5mby5DYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IHRoaXMuRGF0b3MuSW5mby5Ob21icmUgKyBcIiBcIiArIHRoaXMuRGF0b3MuSW5mby5BcHBhdCArIFwiIFwiICsgdGhpcy5EYXRvcy5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWx1bGFyOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9tb3ZpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy5EYXRvcy5JbmZvLkFwcGF0ICsgXCIgXCIgKyB0aGlzLkRhdG9zLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogdGhpcy5EYXRvcy5JbmZvLk5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGlvOiB0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uZm9saW8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyh0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uY2xhdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTaSgpe1xyXG4gICAgICAgIGlmKHRoaXMuRGF0b3MuVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEodGhpcy5Cb2xldG8sIFwiYXBpL0JvbGV0by9WZW5kZXJcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7IFRpcG86IFwiVW5vXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MgfSApXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBVVC5wdXREYXRhKHt9LCBcImFwaS9Db2xhYm9yYWRvclwiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4ocmVzLmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjb250YWRvciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5mb3JFYWNoKGZ1bmN0aW9uKGJvbGV0bykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEoYm9sZXRvLCBcImFwaS9Cb2xldG8vVmVuZGVyXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRhZG9yID09IHRoaXMuQm9sZXRvcy5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5IDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBVVC5wdXREYXRhKHt9LCBcImFwaS9Db2xhYm9yYWRvclwiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihyZXMuanNvbigpLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFkb3IrKztcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBWYXJpb3MoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=