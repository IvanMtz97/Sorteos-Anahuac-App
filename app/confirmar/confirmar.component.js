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
            providers: [http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_extensions_1.RouterExtensions, http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService])
    ], ConfirmarComponent);
    return ConfirmarComponent;
}());
exports.ConfirmarComponent = ConfirmarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFDN0UsNEVBQTBFO0FBQzFFLHlFQUFzRTtBQUN0RSxrRUFBZ0Y7QUFXaEY7SUFTSSw0QkFBb0IsS0FBcUIsRUFBVSxNQUF3QixFQUFVLEdBQXNCLEVBQVUsR0FBcUIsRUFBVSxPQUF1QjtRQUF2SixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBUm5LLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQU9oQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQXlEQztRQXhERyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUd4QyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJO29C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LElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUcsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUE5SG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7K0RBQUM7SUFOcEQsa0JBQWtCO1FBUjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixTQUFTLEVBQUUsQ0FBRSxzQ0FBaUIsRUFBRSxvQ0FBZ0IsRUFBRSxpQ0FBYyxDQUFFO1NBQ3JFLENBQUM7eUNBVzZCLHVCQUFjLEVBQWtCLG9DQUFnQixFQUFlLHNDQUFpQixFQUFlLG9DQUFnQixFQUFtQixpQ0FBYztPQVRsSyxrQkFBa0IsQ0FxSTlCO0lBQUQseUJBQUM7Q0FBQSxBQXJJRCxJQXFJQztBQXJJWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcG9zdC9odHRwLXBvc3Quc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTXlIdHRwUHV0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXB1dC9odHRwLXB1dC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNvbmZpcm1hclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29uZmlybWFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY29uZmlybWFyLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogWyBNeUh0dHBQb3N0U2VydmljZSwgTXlIdHRwUHV0U2VydmljZSwgU2Vzc2lvblNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgRGF0b3M6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBCb2xldG86IE9iamVjdCA9IHt9O1xyXG4gICAgcHJpdmF0ZSBCb2xldG9zOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIEFQSTogTXlIdHRwUG9zdFNlcnZpY2UsIHByaXZhdGUgUFVUOiBNeUh0dHBQdXRTZXJ2aWNlLCBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNPTkZJUk1BUiBDT01QT05FTlRcIik7XHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5EYXRvcy5UaXBvID09IFwiVmFyaW9zXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRvcy5Cb2xldG9zLmZvckVhY2goZnVuY3Rpb24oSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm86IEl0ZW0uSW5mby5UZWxlZm9ub2Zpam8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bmljaXBpbzogSXRlbS5JbmZvLk11bmljaXBpbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBJdGVtLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RpZ29fcG9zdGFsOiBJdGVtLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBJdGVtLkluZm8uQ29sb25pYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBJdGVtLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogSXRlbS5JbmZvLkNhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IEl0ZW0uSW5mby5Ob21icmUgKyBcIiBcIiArIEl0ZW0uSW5mby5BcHBhdCArIFwiIFwiICsgSXRlbS5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbHVsYXI6IEl0ZW0uSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlbzogSXRlbS5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogSXRlbS5JbmZvLkFwcGF0ICsgXCIgXCIgKyBJdGVtLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBJdGVtLkluZm8uTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW86IEl0ZW0uQm9sZXRvLmZvbGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyhJdGVtLkJvbGV0by5jbGF2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5EYXRvcy5Cb2xldG8uVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvOiB0aGlzLkRhdG9zLkluZm8uTXVuaWNpcGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiB0aGlzLkRhdG9zLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvX3Bvc3RhbDogdGhpcy5EYXRvcy5JbmZvLkNvZGlnb3Bvc3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6IHRoaXMuRGF0b3MuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiB0aGlzLkRhdG9zLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMuRGF0b3MuSW5mby5DYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IHRoaXMuRGF0b3MuSW5mby5Ob21icmUgKyBcIiBcIiArIHRoaXMuRGF0b3MuSW5mby5BcHBhdCArIFwiIFwiICsgdGhpcy5EYXRvcy5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWx1bGFyOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9tb3ZpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy5EYXRvcy5JbmZvLkFwcGF0ICsgXCIgXCIgKyB0aGlzLkRhdG9zLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogdGhpcy5EYXRvcy5JbmZvLk5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGlvOiB0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uZm9saW8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyh0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uY2xhdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTaSgpe1xyXG4gICAgICAgIGlmKHRoaXMuRGF0b3MuVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEodGhpcy5Cb2xldG8sIFwiYXBpL0JvbGV0by9WZW5kZXJcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MgQVBJXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHsgVGlwbzogXCJVbm9cIiwgQm9sZXRvczogdGhpcy5EYXRvcyB9ICldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUFVULnB1dERhdGEoe30sIFwiYXBpL0NvbGFib3JhZG9yXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4ocmVzLmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIEFQSVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgY29udGFkb3IgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLkJvbGV0b3MuZm9yRWFjaChmdW5jdGlvbihib2xldG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQVBJLnBvc3REYXRhKGJvbGV0bywgXCJhcGkvQm9sZXRvL1ZlbmRlclwiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJPTEVUTyBWRU5ESURPXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRhZG9yID09IHRoaXMuQm9sZXRvcy5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09OVEFET1I6IFwiICsgY29udGFkb3IgKyBcIixMRU5HVEg6IFwiICsgdGhpcy5Cb2xldG9zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5IDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBVVC5wdXREYXRhKHt9LCBcImFwaS9Db2xhYm9yYWRvclwiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyBQVVRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKHJlcy5qc29uKCkudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIFBVVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250YWRvcisrO1xyXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgQVBJIFZBUklPU1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2lhc2Rhc2QoKXtcclxuICAgICAgICBpZih0aGlzLkRhdG9zLlRpcG8gPT0gXCJVbm9cIil7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFzaWduYWNpb25leGl0b3NhXCIsIEpTT04uc3RyaW5naWZ5KHsgVGlwbzogXCJVbm9cIiwgQm9sZXRvczogdGhpcy5EYXRvcyB9ICldLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3RvcnkgOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFZhcmlvcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==
