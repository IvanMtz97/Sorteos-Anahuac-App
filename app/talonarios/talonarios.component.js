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
        this.showDetails = [];
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
        this.PilaBoletos = [];
        for (var i = 0; i < this.showDetails.length; i++) {
            if (i != index) {
                this.showDetails[i] = false;
                this.srcFlecha[i] = "res://arrow_down";
            }
        }
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
        console.log("Se imprime talonarios---->");
        console.log(JSON.stringify(talonarios.Boletos));
        console.log("Separador _____________");
        console.log(JSON.stringify(talonarios[i].Boletos.pendientes == undefined));
        if (talonarios.length > 0) {
            //BOLETOS PENDIENTES
            //console.log(talonarios[i].boletos.length);
            if (talonarios[i].Boletos.pendientes == null || talonarios[i].Boletos.pendientes == undefined) {
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
            if (talonarios[i].Boletos.asignados == null || talonarios[i].Boletos.asignados == {}) {
                this.validaStackBolAsig[i] = false;
            }
            else {
                this.cantBolAsignados[i] = talonarios[i].Boletos.asignados.length;
                this.validaStackBolAsig[i] = true;
            }
            //BOLETOS VENDIDOS
            if (talonarios[i].Boletos.vendidos == null || talonarios[i].Boletos.vendidos == {}) {
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
                message: "Este boleto ya se vendió.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFDdEUsNEVBQTBFO0FBRTFFLG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbkMseUVBQXlFO0FBQ3pFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVMzQjtJQXdCSSw2QkFBb0IsT0FBdUIsRUFBVSxLQUFxQixFQUFXLE1BQWMsRUFBVSxZQUE4QjtRQUF2SCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQXZCcEksZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsb0JBQWUsR0FBbUIsRUFBRSxDQUFDO1FBQ3JDLDJCQUFzQixHQUFXLGtDQUFrQyxDQUFDO1FBQ3BFLG9CQUFlLEdBQWtCLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFDdEMsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUN2Qyx1QkFBa0IsR0FBbUIsRUFBRSxDQUFDO1FBQ3hDLHNCQUFpQixHQUFtQixFQUFFLENBQUM7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RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLE1BQU07UUFDeEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sNENBQWMsR0FBckIsVUFBc0IsTUFBTSxFQUFFLFNBQVM7UUFDbkMsSUFBSSxVQUFVLEdBQUc7WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztTQUNqQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBbkpvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2dFQUFDO0lBOUJwRCxtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFFLGlDQUFjLEVBQUUsb0NBQWdCLENBQUU7U0FDbEQsQ0FBQzt5Q0EwQitCLGlDQUFjLEVBQWlCLHVCQUFjLEVBQW1CLGVBQU0sRUFBd0Isb0NBQWdCO09BeEJsSSxtQkFBbUIsQ0FxWi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJaRCxJQXFaQztBQXJaWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1nZXQvaHR0cC1nZXQuc2VydmljZXNcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG4vL3JlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJUYWxvbmFyaW9zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWxvbmFyaW9zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFsgU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhbG9uYXJpb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNob3dEZXRhaWxzOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgdGllbmVUYWxvbmFyaW9zOiBib29sZWFuID0gZmFsc2U7IFxyXG4gICAgcHVibGljIGhpZGVCb3R0b25TYWxlczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGhpZGVCb3R0b246IGJvb2xlYW4gPSBmYWxzZTsgIFxyXG4gICAgcHVibGljIHRpZW5lUGVuZGllbnRlczogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyBub1RpZW5lVGFsb25hcmlvc1RleHRvOiBzdHJpbmcgPSBcIk5vIGV4aXN0ZW4gdGFsb25hcmlvcyBhc2lnbmFkb3MuXCI7XHJcbiAgICBwdWJsaWMgbGlzdGFUYWxvbmFyaW9zOiBBcnJheTxvYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgc3JjRmxlY2hhOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwdWJsaWMgZmxlY2hhOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIGNvbnRhZG9yOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3JjSWNvbm9UYWxvbmFyaW86IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHB1YmxpYyB2YWxpZGFTdGFja0JvbFBlbjogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyB2YWxpZGFTdGFja0JvbEFzaWc6IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgdmFsaWRhU3RhY2tCb2xWZW46IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgY2FudEJvbFBlbmRpZW50ZXM6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHB1YmxpYyBjYW50Qm9sQXNpZ25hZG9zOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwdWJsaWMgY2FudEJvbFZlbmRpZG9zOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAvL3ByaXZhdGUgdGFsb25hcmlvczogQXJyYXk8b2JqZWN0PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBQaWxhQm9sZXRvczogQXJyYXk8b2JqZWN0PiA9IFtdO1xyXG4gICAgcHVibGljIHN0YXR1c0JhclN0YXRlOiBib29sZWFuPXRydWU7ICAgIFxyXG4gICAgcHVibGljIGltYWdlblB1YmxpY2l0YXJpYTogc3RyaW5nOyAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBteUdldFNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMudGllbmVUYWxvbmFyaW9zID0gZmFsc2U7ICBcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIERhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gQXJyYXkoRGF0YS50YWxvbmFyaW9zLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgICBpZihEYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gRGF0YS50YWxvbmFyaW9zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlU3RhdHVzQmFyKClcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdHVzQmFyU3RhdGUgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGllbmVUYWxvbmFyaW9zID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0YVRhbG9uYXJpb3MgPSB0aGlzLnRhbG9uYXJpb3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhKGRhdGE6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRva2VuKGRhdGEuanNvbigpLnRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnRDaGVjayhiYW5kKSB7XHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAoYmFuZCkgPyB0aGlzLmNvdW50ICsgMSA6IHRoaXMuY291bnQgLSAxO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPT0gMCkgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBiYW5kZXJhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuUGlsYUJvbGV0b3MgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHRoaXMuc2hvd0RldGFpbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihpICE9IGluZGV4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RldGFpbHNbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2ldID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsc1tpbmRleF0gPSAhdGhpcy5zaG93RGV0YWlsc1tpbmRleF07ICAgXHJcbiAgICAgICAgdGhpcy5mbGVjaGFbaW5kZXhdID0gIXRoaXMuZmxlY2hhW2luZGV4XTsgICAgXHJcbiAgICAgICAgaWYodGhpcy5mbGVjaGFbaW5kZXhdID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcmNGbGVjaGFbaW5kZXhdID0gXCJyZXM6Ly9hcnJvd191cFwiOyAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcmNGbGVjaGFbaW5kZXhdID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7ICAgICAgICBcclxuICAgICAgICB9ICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKGV2ZW50RGF0YSwgYm9sZXRvLCBpbmRleCl7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudENoZWNrKGV2ZW50RGF0YS5jaGVja2VkKSkgdGhpcy5oaWRlQm90dG9uU2FsZXMgPSB0cnVlO1xyXG4gICAgICAgIGVsc2UgdGhpcy5oaWRlQm90dG9uU2FsZXMgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLmNvdW50ID49IDIpIHRoaXMuaGlkZUJvdHRvbiA9IHRydWU7XHJcbiAgICAgICAgZWxzZSB0aGlzLmhpZGVCb3R0b24gPSBmYWxzZTtcclxuICAgICAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuUGlsYUJvbGV0b3MucHVzaChib2xldG8pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBWZW5kZXJCb2xldG9zKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widmVudGFib2xldG9cIiwgSlNPTi5zdHJpbmdpZnkoe1RpcG86IFwiVmFyaW9zXCIsIFRhbG9uYXJpbzogMTAwMDAwMiwgQm9sZXRvczogdGhpcy5QaWxhQm9sZXRvc30pXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluaXRpYWxWYWx1ZShpLCB0YWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3JbaV0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpXSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhZG9yW2ldID0gKHRoaXMuY29udGFkb3JbaV0rMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZSBpbXByaW1lIHRhbG9uYXJpb3MtLS0tPlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWxvbmFyaW9zLkJvbGV0b3MpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcGFyYWRvciBfX19fX19fX19fX19fXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzID09IHVuZGVmaW5lZCkpO1xyXG4gICAgICAgIGlmKHRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvL0JPTEVUT1MgUEVORElFTlRFU1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRhbG9uYXJpb3NbaV0uYm9sZXRvcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYodGFsb25hcmlvc1tpXS5Cb2xldG9zLnBlbmRpZW50ZXMgPT0gbnVsbCB8fCB0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9fZ3Jpc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpZW5lUGVuZGllbnRlc1tpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9cIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpZW5lUGVuZGllbnRlc1tpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sUGVuZGllbnRlc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VGFsb25hcmlvcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0JPTEVUT1MgQVNJR05BRE9TXHJcbiAgICAgICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MuYXNpZ25hZG9zID09IG51bGwgfHwgdGFsb25hcmlvc1tpXS5Cb2xldG9zLmFzaWduYWRvcyA9PSB7fSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudEJvbEFzaWduYWRvc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5hc2lnbmFkb3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vQk9MRVRPUyBWRU5ESURPU1xyXG4gICAgICAgICAgICAgICAgaWYodGFsb25hcmlvc1tpXS5Cb2xldG9zLnZlbmRpZG9zID09IG51bGwgfHwgdGFsb25hcmlvc1tpXS5Cb2xldG9zLnZlbmRpZG9zID09IHt9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xWZW5kaWRvc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBWZW50YUJvbGV0byhib2xldG8sIHRhbG9uYXJpbyl7XHJcbiAgICAgICAgaWYoYm9sZXRvLnZlbmRpZG8pe1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOlwiQXZpc29cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0ZSBib2xldG8geWEgc2UgdmVuZGnDsy5cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIFRpcG86IFwiVW5vXCIsXHJcbiAgICAgICAgICAgICAgICBCb2xldG86IGJvbGV0byxcclxuICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLmNsYXZlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndmVudGFib2xldG8nLCBKU09OLnN0cmluZ2lmeShEYXRhKV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIENvbnN1bHRhUGFnYWRvKGJvbGV0byl7XHJcbiAgICAgICAgdmFyIERhdGEgPSB7IFRpcG86IFwicGFnYWRvXCIsIEJvbGV0bzogYm9sZXRvfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJib2xldG92ZW5kaWRvXCIsIEpTT04uc3RyaW5naWZ5KERhdGEpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvbnN1bHRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB2YXIgSW5mb0JvbGV0byA9IHtcclxuICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXHJcbiAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLnRhbG9uYXJpb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkZXRhbGxlYm9sZXRvdmVuZGlkbycsIEpTT04uc3RyaW5naWZ5KEluZm9Cb2xldG8pXSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRhbG9uYXJpb3MgPSBbXHJcbiAgICAgICAgeyAgICBcclxuICAgICAgICBcInRhbG9uYXJpb1wiOiBcIjEwMDAwMDFcIixcclxuICAgICAgICBcInZlbmRpZG9zXCI6IFt7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDU2NVwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjc2NjM1MjQyMTU2NzY4Njc4NDVcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiNTYyMzQ2XCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcIkF4QzBFMmU5TTIzMFIwRjNkZjJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwRkFNUDJcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIxMjAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIkpvc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIkpvc2UgUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJqb3NlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICBcInBlbmRpZW50ZXNcIiA6IFtdLFxyXG4gICAgICAgIFwiYXNpZ25hZG9zXCIgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGFsb25hcmlvXCI6IFwiMTAwMDAwMlwiLFxyXG4gICAgICAgIFwidmVuZGlkb3NcIjogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXgxMjl4Y3hhMTkxbTAyMzRtcHNkUE1BZHFtd2QxMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMjkwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIk1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NTY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyNzY2MzUyNDIxNTY3Njg2Nzg0NVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCI1NjIzNDZcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiQXhDMEUyZTlNMjMwUjBGM2RmMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjBGQU1QMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjEyMDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiSm9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiSm9zZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcImpvc2VwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFwicGVuZGllbnRlc1wiIDogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDY2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiODQ1NjIzNTg0MjQ1NTg5XCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIkYzMjQ2RVIyXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4Y21wMFdEUW0wMHFtc3BkUTIzU3FcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMzEyM1NGXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjU2MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiUGVkcm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIlBlZHJvIFBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwicGVkcm9wZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NjY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIxNTQ2NzQ4MzQxNDIxNTMxNDJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiRjEzMVRXRVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheGNtcDBXRFFtMDBxbXNwZFEyM1NxXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMzQyNUdTXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjc2MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiUGVwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiUGVwZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIlBlcGVwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODM1Mjc4NjJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJhc2lnbmFkb3NcIiA6IFtdXHJcbiAgICB9XHJcbiAgICBdO1xyXG5cclxufVxyXG5cclxuIl19