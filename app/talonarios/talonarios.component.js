"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("@angular/router");
var session_services_1 = require("../services/session/session.services");
var http_get_services_1 = require("../services/http-get/http-get.services");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
//registerElement("Ripple", () => require("nativescript-ripple").Ripple);
var http = require("http");
var TalonariosComponent = /** @class */ (function () {
    function TalonariosComponent(session, route, router, myGetService) {
        this.session = session;
        this.route = route;
        this.router = router;
        this.myGetService = myGetService;
        this.showDetails = {};
        this.tieneTalonarios = false;
        this.hideBottonSales = false;
        this.hideBotton = false;
        this.tienePendientes = [];
        this.noTieneTalonariosTexto = "No existen talonarios asignados.";
        this.listaTalonarios = [];
        this.srcFlecha = [];
        this.flecha = [];
        this.contador = [];
        this.count = 0;
        this.srcIconoTalonario = [];
        this.validaStackBolPen = [];
        this.validaStackBolAsig = [];
        this.validaStackBolVen = [];
        this.cantBolPendientes = [];
        this.cantBolAsignados = [];
        this.cantBolVendidos = [];
        //private talonarios: Array<object> = [];
        this.PilaBoletos = [];
        this.statusBarState = true;
        this.talonarios = [
            {
                "talonario": "1000001",
                "vendidos": [{
                        "numero": "4564",
                        "info": {
                            "clave": "203191034955920686909046938123",
                            "folio": "032140",
                            "token": "ax129xcxa191m0234mpsdPMAdqmwd10",
                            "folio_digital": "00FA2E23",
                            "vendido": true,
                            "costo": "2900.00",
                            "comprador": {
                                "nombre": "Milton Ivan",
                                "apellidos": "Martinez Gonzalez",
                                "nombre_completo": "Milton Ivan Martinez Gonzalez",
                                "correo": "ivanmartinez.gonzalez97@gmail.com",
                                "celular": "8126522105",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": true
                        }
                    }, {
                        "numero": "4565",
                        "info": {
                            "clave": "27663524215676867845",
                            "folio": "562346",
                            "token": "AxC0E2e9M230R0F3df2",
                            "folio_digital": "0FAMP2",
                            "vendido": true,
                            "costo": "1200.00",
                            "comprador": {
                                "nombre": "Jose",
                                "apellidos": "Perez Perez",
                                "nombre_completo": "Jose Perez Perez",
                                "correo": "joseperez.perez@gmail.com",
                                "celular": "812313452",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": false
                        }
                    }],
                "pendientes": [],
                "asignados": [
                    {
                        "numero": "4564",
                        "info": {
                            "clave": "203191034955920686909046938123",
                            "folio": "032140",
                            "token": "ax129xcxa191m0234mpsdPMAdqmwd10",
                            "folio_digital": "00FA2E23",
                            "vendido": true,
                            "costo": "2900.00",
                            "comprador": {
                                "nombre": "Milton Ivan",
                                "apellidos": "Martinez Gonzalez",
                                "nombre_completo": "Milton Ivan Martinez Gonzalez",
                                "correo": "ivanmartinez.gonzalez97@gmail.com",
                                "celular": "8126522105",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": true
                        }
                    }
                ]
            },
            {
                "talonario": "1000002",
                "vendidos": [{
                        "numero": "4564",
                        "info": {
                            "clave": "203191034955920686909046938123",
                            "folio": "032140",
                            "token": "ax129xcxa191m0234mpsdPMAdqmwd10",
                            "folio_digital": "00FA2E23",
                            "vendido": true,
                            "costo": "2900.00",
                            "comprador": {
                                "nombre": "Milton Ivan",
                                "apellidos": "Martinez Gonzalez",
                                "nombre_completo": "Milton Ivan Martinez Gonzalez",
                                "correo": "ivanmartinez.gonzalez97@gmail.com",
                                "celular": "8126522105",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": true
                        }
                    }, {
                        "numero": "4565",
                        "info": {
                            "clave": "27663524215676867845",
                            "folio": "562346",
                            "token": "AxC0E2e9M230R0F3df2",
                            "folio_digital": "0FAMP2",
                            "vendido": true,
                            "costo": "1200.00",
                            "comprador": {
                                "nombre": "Jose",
                                "apellidos": "Perez Perez",
                                "nombre_completo": "Jose Perez Perez",
                                "correo": "joseperez.perez@gmail.com",
                                "celular": "812313452",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": false
                        }
                    }],
                "pendientes": [{
                        "numero": "4664",
                        "info": {
                            "clave": "845623584245589",
                            "folio": "F3246ER2",
                            "token": "axcmp0WDQm00qmspdQ23Sq",
                            "folio_digital": "03123SF",
                            "vendido": false,
                            "costo": "5600.00",
                            "comprador": {
                                "nombre": "Pedro",
                                "apellidos": "Perez Perez",
                                "nombre_completo": "Pedro Perez Perez",
                                "correo": "pedroperez.perez@gmail.com",
                                "celular": "812313452",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": false
                        }
                    }, {
                        "numero": "4665",
                        "info": {
                            "clave": "154674834142153142",
                            "folio": "F131TWE",
                            "token": "axcmp0WDQm00qmspdQ23Sq",
                            "folio_digital": "3425GS",
                            "vendido": false,
                            "costo": "7600.00",
                            "comprador": {
                                "nombre": "Pepe",
                                "apellidos": "Perez Perez",
                                "nombre_completo": "Pepe Perez Perez",
                                "correo": "Pepeperez.perez@gmail.com",
                                "celular": "83527862",
                                "direccion": {
                                    "calle": "Mina de cobre",
                                    "numero": "306",
                                    "colonia": "Estancia",
                                    "codigo_postal": "66087",
                                    "estado": "Nuevo Leon",
                                    "municipio": "San Nicolas",
                                    "telefono": "83340359"
                                }
                            },
                            "folio_talonario": "190fas113",
                            "clave_sorteo": "9550680383193521",
                            "clave_colaborador": "1845392834951",
                            "_conToken": false
                        }
                    }],
                "asignados": []
            }
        ];
        this.tieneTalonarios = false;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
    }
    TalonariosComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        var Data = JSON.parse(this.session.getInformation());
        this.contador = Array(Data.talonarios.length).fill(0);
        if (Data.talonarios.length > 0) {
            this.tieneTalonarios = true;
            this.listaTalonarios = Data.talonarios;
        }
    };
    TalonariosComponent.prototype.hideStatusBar = function () {
        if (this.statusBarState == true) {
            this.tieneTalonarios = true;
            this.listaTalonarios = this.talonarios;
        }
    };
    Object.defineProperty(TalonariosComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    TalonariosComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    TalonariosComponent.prototype.onGetData = function (data) {
        this.session.setInformation(JSON.stringify(data.json()));
        this.session.setToken(data.json().token);
    };
    TalonariosComponent.prototype.countCheck = function (band) {
        var bandera = true;
        this.count = (band) ? this.count + 1 : this.count - 1;
        if (this.count == 0)
            bandera = false;
        return bandera;
    };
    TalonariosComponent.prototype.toggle = function (index) {
        this.showDetails[index] = !this.showDetails[index];
        this.flecha[index] = !this.flecha[index];
        if (this.flecha[index] == true) {
            this.srcFlecha[index] = "res://arrow_up";
        }
        else {
            this.srcFlecha[index] = "res://arrow_down";
        }
    };
    TalonariosComponent.prototype.toggleCheck = function (eventData, boleto, index) {
        if (this.countCheck(eventData.checked))
            this.hideBottonSales = true;
        else
            this.hideBottonSales = false;
        if (this.count >= 2)
            this.hideBotton = true;
        else
            this.hideBotton = false;
        if (eventData.checked) {
            this.PilaBoletos.push(boleto);
        }
        else {
            this.PilaBoletos.splice(index, 1);
        }
    };
    TalonariosComponent.prototype.VenderBoletos = function () {
        this.router.navigate(["ventaboleto", JSON.stringify({ Tipo: "Varios", Talonario: 1000002, Boletos: this.PilaBoletos })]);
    };
    TalonariosComponent.prototype.setInitialValue = function (i, talonarios) {
        if (this.contador[i] == 0) {
            this.srcFlecha[i] = "res://arrow_down";
        }
        this.contador[i] = (this.contador[i] + 1);
        if (talonarios.length > 0) {
            //BOLETOS PENDIENTES
            if (talonarios[i].Boletos.pendientes.length == 0) {
                this.srcIconoTalonario[i] = "res://icono_talonario_gris";
                this.validaStackBolPen[i] = false;
                this.tienePendientes[i] = false;
            }
            else {
                this.srcIconoTalonario[i] = "res://icono_talonario";
                this.validaStackBolPen[i] = true;
                this.tienePendientes[i] = true;
                this.cantBolPendientes[i] = talonarios[i].Boletos.pendientes.length;
                this.session.setTalonarios(true);
            }
            //BOLETOS ASIGNADOS
            if (talonarios[i].Boletos.asignados.length == 0) {
                this.validaStackBolAsig[i] = false;
            }
            else {
                this.cantBolAsignados[i] = talonarios[i].Boletos.asignados.length;
                this.validaStackBolAsig[i] = true;
            }
            //BOLETOS VENDIDOS
            if (talonarios[i].Boletos.vendidos.length == 0) {
                this.validaStackBolVen[i] = false;
            }
            else {
                this.cantBolVendidos[i] = talonarios[i].Boletos.vendidos.length;
                this.validaStackBolVen[i] = true;
            }
        }
    };
    TalonariosComponent.prototype.VentaBoleto = function (boleto, talonario) {
        if (boleto.vendido) {
            dialogs.alert({
                title: "Aviso",
                message: "Este boleto ya se vendio",
                okButtonText: "Ok"
            });
        }
        else {
            var Data = {
                Tipo: "Uno",
                Boleto: boleto,
                Talonario: talonario.clave
            };
            this.router.navigate(['ventaboleto', JSON.stringify(Data)]);
        }
    };
    TalonariosComponent.prototype.ConsultaPagado = function (boleto) {
        var Data = { Tipo: "pagado", Boleto: boleto };
        this.router.navigate(["boletovendido", JSON.stringify(Data)]);
    };
    TalonariosComponent.prototype.ConsultaBoleto = function (boleto, talonario) {
        var InfoBoleto = {
            Boleto: boleto,
            Talonario: talonario.talonario
        };
        this.router.navigate(['detalleboletovendido', JSON.stringify(InfoBoleto)]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], TalonariosComponent.prototype, "drawerComponent", void 0);
    TalonariosComponent = __decorate([
        core_1.Component({
            selector: "Talonarios",
            moduleId: module.id,
            templateUrl: "./talonarios.component.html",
            providers: [session_services_1.SessionService, http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute, router_1.Router, http_get_services_1.MyHttpGetService])
    ], TalonariosComponent);
    return TalonariosComponent;
}());
exports.TalonariosComponent = TalonariosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFDdEUsNEVBQTBFO0FBRTFFLG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHbkMseUVBQXlFO0FBQ3pFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVMzQjtJQXdCSSw2QkFBb0IsT0FBdUIsRUFBVSxLQUFxQixFQUFXLE1BQWMsRUFBVSxZQUE4QjtRQUF2SCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQXZCcEksZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixvQkFBZSxHQUFtQixFQUFFLENBQUM7UUFDckMsMkJBQXNCLEdBQVcsa0NBQWtDLENBQUM7UUFDcEUsb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBQ3BDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBbUIsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsc0JBQWlCLEdBQWtCLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFtQixFQUFFLENBQUM7UUFDeEMsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztR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YyxFQUFtQixlQUFNLEVBQXdCLG9DQUFnQjtPQXhCbEksbUJBQW1CLENBMFkvQjtJQUFELDBCQUFDO0NBQUEsQUExWUQsSUEwWUM7QUExWVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxudmFyIHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcbi8vcmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlRhbG9uYXJpb3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhbG9uYXJpb3MuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogWyBTZXNzaW9uU2VydmljZSwgTXlIdHRwR2V0U2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFsb25hcmlvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc2hvd0RldGFpbHM6IE9iamVjdCA9IHt9O1xyXG4gICAgcHVibGljIHRpZW5lVGFsb25hcmlvczogYm9vbGVhbiA9IGZhbHNlOyBcclxuICAgIHB1YmxpYyBoaWRlQm90dG9uU2FsZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBoaWRlQm90dG9uOiBib29sZWFuID0gZmFsc2U7ICBcclxuICAgIHB1YmxpYyB0aWVuZVBlbmRpZW50ZXM6IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgbm9UaWVuZVRhbG9uYXJpb3NUZXh0bzogc3RyaW5nID0gXCJObyBleGlzdGVuIHRhbG9uYXJpb3MgYXNpZ25hZG9zLlwiO1xyXG4gICAgcHVibGljIGxpc3RhVGFsb25hcmlvczogQXJyYXk8b2JqZWN0PiA9IFtdO1xyXG4gICAgcHVibGljIHNyY0ZsZWNoYTogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHVibGljIGZsZWNoYTogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyBjb250YWRvcjogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNyY0ljb25vVGFsb25hcmlvOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwdWJsaWMgdmFsaWRhU3RhY2tCb2xQZW46IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgdmFsaWRhU3RhY2tCb2xBc2lnOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sVmVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIGNhbnRCb2xQZW5kaWVudGVzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwdWJsaWMgY2FudEJvbEFzaWduYWRvczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHVibGljIGNhbnRCb2xWZW5kaWRvczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgLy9wcml2YXRlIHRhbG9uYXJpb3M6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICAgIHByaXZhdGUgUGlsYUJvbGV0b3M6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOyAgICBcclxuICAgIHB1YmxpYyBpbWFnZW5QdWJsaWNpdGFyaWE6IHN0cmluZzsgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IGZhbHNlOyAgXHJcbiAgICAgICAgdGhpcy5pbWFnZW5QdWJsaWNpdGFyaWEgPSB0aGlzLnNlc3Npb24uZ2V0SW1hZ2VuUHVibGljaWRhZCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIHZhciBEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnNlc3Npb24uZ2V0SW5mb3JtYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5jb250YWRvciA9IEFycmF5KERhdGEudGFsb25hcmlvcy5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgICAgICAgaWYoRGF0YS50YWxvbmFyaW9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aWVuZVRhbG9uYXJpb3MgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RhVGFsb25hcmlvcyA9IERhdGEudGFsb25hcmlvcztcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVTdGF0dXNCYXIoKVxyXG4gICAgeyAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0dXNCYXJTdGF0ZSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aWVuZVRhbG9uYXJpb3MgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RhVGFsb25hcmlvcyA9IHRoaXMudGFsb25hcmlvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4oZGF0YS5qc29uKCkudG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3VudENoZWNrKGJhbmQpIHtcclxuICAgICAgICB2YXIgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IChiYW5kKSA/IHRoaXMuY291bnQgKyAxIDogdGhpcy5jb3VudCAtIDE7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudCA9PSAwKSBiYW5kZXJhID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGJhbmRlcmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZShpbmRleCl7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsc1tpbmRleF0gPSAhdGhpcy5zaG93RGV0YWlsc1tpbmRleF07ICAgXHJcbiAgICAgICAgdGhpcy5mbGVjaGFbaW5kZXhdID0gIXRoaXMuZmxlY2hhW2luZGV4XTsgICAgXHJcbiAgICAgICAgaWYodGhpcy5mbGVjaGFbaW5kZXhdID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcmNGbGVjaGFbaW5kZXhdID0gXCJyZXM6Ly9hcnJvd191cFwiOyAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcmNGbGVjaGFbaW5kZXhdID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7ICAgICAgICBcclxuICAgICAgICB9ICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKGV2ZW50RGF0YSwgYm9sZXRvLCBpbmRleCl7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudENoZWNrKGV2ZW50RGF0YS5jaGVja2VkKSkgdGhpcy5oaWRlQm90dG9uU2FsZXMgPSB0cnVlO1xyXG4gICAgICAgIGVsc2UgdGhpcy5oaWRlQm90dG9uU2FsZXMgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLmNvdW50ID49IDIpIHRoaXMuaGlkZUJvdHRvbiA9IHRydWU7XHJcbiAgICAgICAgZWxzZSB0aGlzLmhpZGVCb3R0b24gPSBmYWxzZTtcclxuICAgICAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuUGlsYUJvbGV0b3MucHVzaChib2xldG8pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBWZW5kZXJCb2xldG9zKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widmVudGFib2xldG9cIiwgSlNPTi5zdHJpbmdpZnkoe1RpcG86IFwiVmFyaW9zXCIsIFRhbG9uYXJpbzogMTAwMDAwMiwgQm9sZXRvczogdGhpcy5QaWxhQm9sZXRvc30pXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluaXRpYWxWYWx1ZShpLCB0YWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3JbaV0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpXSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhZG9yW2ldID0gKHRoaXMuY29udGFkb3JbaV0rMSk7XHJcblxyXG4gICAgICAgIGlmKHRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvL0JPTEVUT1MgUEVORElFTlRFU1xyXG4gICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcmNJY29ub1RhbG9uYXJpb1tpXSA9IFwicmVzOi8vaWNvbm9fdGFsb25hcmlvX2dyaXNcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGllbmVQZW5kaWVudGVzW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWVuZVBlbmRpZW50ZXNbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sUGVuZGllbnRlc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0JPTEVUT1MgQVNJR05BRE9TXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5hc2lnbmFkb3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xBc2lnbmFkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MuYXNpZ25hZG9zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9CT0xFVE9TIFZFTkRJRE9TXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sVmVuZGlkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MudmVuZGlkb3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFZlbnRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICBpZihib2xldG8udmVuZGlkbyl7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJBdmlzb1wiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RlIGJvbGV0byB5YSBzZSB2ZW5kaW9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCIsXHJcbiAgICAgICAgICAgICAgICBCb2xldG86IGJvbGV0byxcclxuICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLmNsYXZlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndmVudGFib2xldG8nLCBKU09OLnN0cmluZ2lmeShEYXRhKV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIENvbnN1bHRhUGFnYWRvKGJvbGV0byl7XHJcbiAgICAgICAgdmFyIERhdGEgPSB7IFRpcG86IFwicGFnYWRvXCIsIEJvbGV0bzogYm9sZXRvfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJib2xldG92ZW5kaWRvXCIsIEpTT04uc3RyaW5naWZ5KERhdGEpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvbnN1bHRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB2YXIgSW5mb0JvbGV0byA9IHtcclxuICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXHJcbiAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLnRhbG9uYXJpb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkZXRhbGxlYm9sZXRvdmVuZGlkbycsIEpTT04uc3RyaW5naWZ5KEluZm9Cb2xldG8pXSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRhbG9uYXJpb3MgPSBbXHJcbiAgICAgICAgeyAgICBcclxuICAgICAgICBcInRhbG9uYXJpb1wiOiBcIjEwMDAwMDFcIixcclxuICAgICAgICBcInZlbmRpZG9zXCI6IFt7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDU2NVwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjc2NjM1MjQyMTU2NzY4Njc4NDVcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiNTYyMzQ2XCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcIkF4QzBFMmU5TTIzMFIwRjNkZjJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwRkFNUDJcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIxMjAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIkpvc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIkpvc2UgUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJqb3NlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICBcInBlbmRpZW50ZXNcIiA6IFtdLFxyXG4gICAgICAgIFwiYXNpZ25hZG9zXCIgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGFsb25hcmlvXCI6IFwiMTAwMDAwMlwiLFxyXG4gICAgICAgIFwidmVuZGlkb3NcIjogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXgxMjl4Y3hhMTkxbTAyMzRtcHNkUE1BZHFtd2QxMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMjkwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIk1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NTY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyNzY2MzUyNDIxNTY3Njg2Nzg0NVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCI1NjIzNDZcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiQXhDMEUyZTlNMjMwUjBGM2RmMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjBGQU1QMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjEyMDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiSm9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiSm9zZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcImpvc2VwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFwicGVuZGllbnRlc1wiIDogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDY2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiODQ1NjIzNTg0MjQ1NTg5XCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIkYzMjQ2RVIyXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4Y21wMFdEUW0wMHFtc3BkUTIzU3FcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMzEyM1NGXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjU2MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiUGVkcm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIlBlZHJvIFBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwicGVkcm9wZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NjY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIxNTQ2NzQ4MzQxNDIxNTMxNDJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiRjEzMVRXRVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheGNtcDBXRFFtMDBxbXNwZFEyM1NxXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMzQyNUdTXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjc2MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiUGVwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiUGVwZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIlBlcGVwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODM1Mjc4NjJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJhc2lnbmFkb3NcIiA6IFtdXHJcbiAgICB9XHJcbiAgICBdO1xyXG5cclxufVxyXG5cclxuIl19