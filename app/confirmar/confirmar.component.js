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
var ConfirmarComponent = /** @class */ (function () {
    function ConfirmarComponent(route, router, API, PUT, session, loading) {
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
                        _this.loading.display(false);
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_extensions_1.RouterExtensions, http_post_services_1.MyHttpPostService, http_put_services_1.MyHttpPutService, session_services_1.SessionService, loading_1.LoadingService])
    ], ConfirmarComponent);
    return ConfirmarComponent;
}());
exports.ConfirmarComponent = ConfirmarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQWlEO0FBQ2pELG1GQUFpRjtBQUNqRiwrRUFBNkU7QUFDN0UsNEVBQTBFO0FBQzFFLHlFQUFzRTtBQUN0RSxrRUFBZ0Y7QUFFaEYsdURBQTZEO0FBVTdEO0lBU0ksNEJBQW9CLEtBQXFCLEVBQVUsTUFBd0IsRUFBVSxHQUFzQixFQUFVLEdBQXFCLEVBQVUsT0FBdUIsRUFBVSxPQUF1QjtRQUF4TCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFScE0sVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBT2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkF5REM7UUF4REcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFHeEMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVMs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Qix1QkFBYyxFQUFrQixvQ0FBZ0IsRUFBZSxzQ0FBaUIsRUFBZSxvQ0FBZ0IsRUFBbUIsaUNBQWMsRUFBbUIsd0JBQWM7T0FUbk0sa0JBQWtCLENBdUg5QjtJQUFELHlCQUFDO0NBQUEsQUF2SEQsSUF1SEM7QUF2SFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXBvc3QvaHR0cC1wb3N0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE15SHR0cFB1dFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wdXQvaHR0cC1wdXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ29uZmlybWFyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb25maXJtYXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jb25maXJtYXIuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbIE15SHR0cFBvc3RTZXJ2aWNlLCBNeUh0dHBQdXRTZXJ2aWNlLCBTZXNzaW9uU2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJpdmF0ZSBEYXRvczogYW55ID0gW107XHJcbiAgICBwcml2YXRlIEJvbGV0bzogT2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIEJvbGV0b3M6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZztcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgQVBJOiBNeUh0dHBQb3N0U2VydmljZSwgcHJpdmF0ZSBQVVQ6IE15SHR0cFB1dFNlcnZpY2UsIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ1NlcnZpY2UpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5EYXRvcy5UaXBvID09IFwiVmFyaW9zXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRvcy5Cb2xldG9zLmZvckVhY2goZnVuY3Rpb24oSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm86IEl0ZW0uSW5mby5UZWxlZm9ub2Zpam8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bmljaXBpbzogSXRlbS5JbmZvLk11bmljaXBpbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBJdGVtLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RpZ29fcG9zdGFsOiBJdGVtLkluZm8uQ29kaWdvcG9zdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBJdGVtLkluZm8uQ29sb25pYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBJdGVtLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogSXRlbS5JbmZvLkNhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IEl0ZW0uSW5mby5Ob21icmUgKyBcIiBcIiArIEl0ZW0uSW5mby5BcHBhdCArIFwiIFwiICsgSXRlbS5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbHVsYXI6IEl0ZW0uSW5mby5UZWxlZm9ub21vdmlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlbzogSXRlbS5JbmZvLkNvcnJlb2VsZWN0cm9uaWNvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogSXRlbS5JbmZvLkFwcGF0ICsgXCIgXCIgKyBJdGVtLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBJdGVtLkluZm8uTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9saW86IEl0ZW0uQm9sZXRvLmZvbGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyhJdGVtLkJvbGV0by5jbGF2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5EYXRvcy5Cb2xldG8uVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQm9sZXRvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByYWRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9maWpvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvOiB0aGlzLkRhdG9zLkluZm8uTXVuaWNpcGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiB0aGlzLkRhdG9zLkluZm8uRXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvX3Bvc3RhbDogdGhpcy5EYXRvcy5JbmZvLkNvZGlnb3Bvc3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6IHRoaXMuRGF0b3MuSW5mby5Db2xvbmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiB0aGlzLkRhdG9zLkluZm8uTnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMuRGF0b3MuSW5mby5DYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IHRoaXMuRGF0b3MuSW5mby5Ob21icmUgKyBcIiBcIiArIHRoaXMuRGF0b3MuSW5mby5BcHBhdCArIFwiIFwiICsgdGhpcy5EYXRvcy5JbmZvLkFwbWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWx1bGFyOiB0aGlzLkRhdG9zLkluZm8uVGVsZWZvbm9tb3ZpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiB0aGlzLkRhdG9zLkluZm8uQ29ycmVvZWxlY3Ryb25pY28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy5EYXRvcy5JbmZvLkFwcGF0ICsgXCIgXCIgKyB0aGlzLkRhdG9zLkluZm8uQXBtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogdGhpcy5EYXRvcy5JbmZvLk5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZm9saW9fdGFsb25hcmlvOiBTdHJpbmcodGhpcy5EYXRvcy5UYWxvbmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbGlvOiB0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uZm9saW8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhdmU6IFN0cmluZyh0aGlzLkRhdG9zLkJvbGV0by5Cb2xldG8uY2xhdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTaSgpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIGlmKHRoaXMuRGF0b3MuVGlwbyA9PSBcIlVub1wiKXtcclxuICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEodGhpcy5Cb2xldG8sIFwiYXBpL0JvbGV0by9WZW5kZXJcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuZGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7IFRpcG86IFwiVW5vXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MgfSApXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBVVC5wdXREYXRhKHt9LCBcImFwaS9Db2xhYm9yYWRvclwiKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4ocmVzLmpzb24oKS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjb250YWRvciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuQm9sZXRvcy5mb3JFYWNoKGZ1bmN0aW9uKGJvbGV0bykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BUEkucG9zdERhdGEoYm9sZXRvLCBcImFwaS9Cb2xldG8vVmVuZGVyXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRhZG9yID09IHRoaXMuQm9sZXRvcy5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widGFsb25hcmlvc1wiXSwgeyBjbGVhckhpc3RvcnkgOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUFVULnB1dERhdGEoe30sIFwiYXBpL0NvbGFib3JhZG9yXCIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKHJlcy5qc29uKCkudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250YWRvcisrO1xyXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFNpYXNkYXNkKCl7XHJcbiAgICAgICAgaWYodGhpcy5EYXRvcy5UaXBvID09IFwiVW5vXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhc2lnbmFjaW9uZXhpdG9zYVwiLCBKU09OLnN0cmluZ2lmeSh7IFRpcG86IFwiVW5vXCIsIEJvbGV0b3M6IHRoaXMuRGF0b3MgfSApXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInRhbG9uYXJpb3NcIl0sIHsgY2xlYXJIaXN0b3J5IDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBWYXJpb3MoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ0YWxvbmFyaW9zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn0iXX0=