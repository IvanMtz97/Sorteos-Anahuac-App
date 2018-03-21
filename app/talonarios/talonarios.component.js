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
        //console.log("Se imprime talonarios---->");
        //console.log(JSON.stringify(talonarios.Boletos));
        //console.log("Separador _____________");
        //console.log(JSON.stringify(talonarios[i].Boletos.pendientes == undefined));
        if (talonarios.length > 0) {
            //BOLETOS PENDIENTES
            //console.log(talonarios[i].boletos.length);
            if (talonarios[i].Boletos.pendientes == null || talonarios[i].Boletos.pendientes == undefined || this.cantBolPendientes[i] == 0) {
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
            if (talonarios[i].Boletos.asignados == null || talonarios[i].Boletos.asignados == undefined || this.cantBolAsignados[i] == 0) {
                this.validaStackBolAsig[i] = false;
            }
            else {
                this.cantBolAsignados[i] = talonarios[i].Boletos.asignados.length;
                this.validaStackBolAsig[i] = true;
            }
            //BOLETOS VENDIDOS
            if (talonarios[i].Boletos.vendidos == null || talonarios[i].Boletos.vendidos == undefined || this.cantBolVendidos[i] == 0) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFDdEUsNEVBQTBFO0FBRTFFLG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbkMseUVBQXlFO0FBQ3pFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVMzQjtJQXdCSSw2QkFBb0IsT0FBdUIsRUFBVSxLQUFxQixFQUFXLE1BQWMsRUFBVSxZQUE4QjtRQUF2SCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQXZCcEksZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsb0JBQWUsR0FBbUIsRUFBRSxDQUFDO1FBQ3JDLDJCQUFzQixHQUFXLGtDQUFrQyxDQUFDO1FBQ3BFLG9CQUFlLEdBQWtCLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQW1CLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFDdEMsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUN2Qyx1QkFBa0IsR0FBbUIsRUFBRSxDQUFDO1FBQ3hDLHNCQUFpQixHQUFtQixFQUFFLENBQUM7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ckIsVUFBc0IsTUFBTTtRQUN4QixJQUFJLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSw0Q0FBYyxHQUFyQixVQUFzQixNQUFNLEVBQUUsU0FBUztRQUNuQyxJQUFJLFVBQVUsR0FBRztZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFuSm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7Z0VBQUM7SUE5QnBELG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUUsaUNBQWMsRUFBRSxvQ0FBZ0IsQ0FBRTtTQUNsRCxDQUFDO3lDQTBCK0IsaUNBQWMsRUFBaUIsdUJBQWMsRUFBbUIsZUFBTSxFQUF3QixvQ0FBZ0I7T0F4QmxJLG1CQUFtQixDQXFaL0I7SUFBRCwwQkFBQztDQUFBLEFBclpELElBcVpDO0FBclpZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XG5pbXBvcnQgc3RhdHVzQmFyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdGF0dXMtYmFyXCIpO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xudmFyIHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG4vL3JlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGFsb25hcmlvc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWxvbmFyaW9zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbIFNlc3Npb25TZXJ2aWNlLCBNeUh0dHBHZXRTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYWxvbmFyaW9zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgc2hvd0RldGFpbHM6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBwdWJsaWMgdGllbmVUYWxvbmFyaW9zOiBib29sZWFuID0gZmFsc2U7IFxuICAgIHB1YmxpYyBoaWRlQm90dG9uU2FsZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaGlkZUJvdHRvbjogYm9vbGVhbiA9IGZhbHNlOyAgXG4gICAgcHVibGljIHRpZW5lUGVuZGllbnRlczogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcbiAgICBwdWJsaWMgbm9UaWVuZVRhbG9uYXJpb3NUZXh0bzogc3RyaW5nID0gXCJObyBleGlzdGVuIHRhbG9uYXJpb3MgYXNpZ25hZG9zLlwiO1xuICAgIHB1YmxpYyBsaXN0YVRhbG9uYXJpb3M6IEFycmF5PG9iamVjdD4gPSBbXTtcbiAgICBwdWJsaWMgc3JjRmxlY2hhOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIGZsZWNoYTogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcbiAgICBwdWJsaWMgY29udGFkb3I6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHNyY0ljb25vVGFsb25hcmlvOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sUGVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xuICAgIHB1YmxpYyB2YWxpZGFTdGFja0JvbEFzaWc6IEFycmF5PGJvb2xlYW4+ID0gW107XG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sVmVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xuICAgIHB1YmxpYyBjYW50Qm9sUGVuZGllbnRlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHB1YmxpYyBjYW50Qm9sQXNpZ25hZG9zOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHVibGljIGNhbnRCb2xWZW5kaWRvczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIC8vcHJpdmF0ZSB0YWxvbmFyaW9zOiBBcnJheTxvYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBQaWxhQm9sZXRvczogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlOyAgICBcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7ICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlHZXRTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy50aWVuZVRhbG9uYXJpb3MgPSBmYWxzZTsgIFxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XG4gICAgfVxuXG5cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIHZhciBEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnNlc3Npb24uZ2V0SW5mb3JtYXRpb24oKSk7XG4gICAgICAgIHRoaXMuY29udGFkb3IgPSBBcnJheShEYXRhLnRhbG9uYXJpb3MubGVuZ3RoKS5maWxsKDApO1xuICAgICAgICBpZihEYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50aWVuZVRhbG9uYXJpb3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXN0YVRhbG9uYXJpb3MgPSBEYXRhLnRhbG9uYXJpb3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlU3RhdHVzQmFyKClcbiAgICB7ICAgICAgICBcbiAgICAgICAgaWYodGhpcy5zdGF0dXNCYXJTdGF0ZSA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RhVGFsb25hcmlvcyA9IHRoaXMudGFsb25hcmlvcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldEluZm9ybWF0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEuanNvbigpKSk7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XG4gICAgfVxuXG4gICAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkge1xuICAgICAgICB2YXIgYmFuZGVyYSA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnQgPSAoYmFuZCkgPyB0aGlzLmNvdW50ICsgMSA6IHRoaXMuY291bnQgLSAxO1xuICAgICAgICBpZih0aGlzLmNvdW50ID09IDApIGJhbmRlcmEgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGJhbmRlcmE7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZShpbmRleCl7XG4gICAgICAgIHRoaXMuUGlsYUJvbGV0b3MgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTx0aGlzLnNob3dEZXRhaWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGkgIT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RldGFpbHNbaV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpXSA9IFwicmVzOi8vYXJyb3dfZG93blwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbHNbaW5kZXhdID0gIXRoaXMuc2hvd0RldGFpbHNbaW5kZXhdOyAgIFxuICAgICAgICB0aGlzLmZsZWNoYVtpbmRleF0gPSAhdGhpcy5mbGVjaGFbaW5kZXhdOyAgICBcbiAgICAgICAgaWYodGhpcy5mbGVjaGFbaW5kZXhdID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2luZGV4XSA9IFwicmVzOi8vYXJyb3dfdXBcIjsgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcmNGbGVjaGFbaW5kZXhdID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7ICAgICAgICBcbiAgICAgICAgfSAgICAgXG4gICAgfSBcblxuICAgIHB1YmxpYyB0b2dnbGVDaGVjayhldmVudERhdGEsIGJvbGV0bywgaW5kZXgpe1xuICAgICAgICBpZih0aGlzLmNvdW50Q2hlY2soZXZlbnREYXRhLmNoZWNrZWQpKSB0aGlzLmhpZGVCb3R0b25TYWxlcyA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy5oaWRlQm90dG9uU2FsZXMgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5jb3VudCA+PSAyKSB0aGlzLmhpZGVCb3R0b24gPSB0cnVlO1xuICAgICAgICBlbHNlIHRoaXMuaGlkZUJvdHRvbiA9IGZhbHNlO1xuICAgICAgICBpZihldmVudERhdGEuY2hlY2tlZCl7XG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnB1c2goYm9sZXRvKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgVmVuZGVyQm9sZXRvcygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ2ZW50YWJvbGV0b1wiLCBKU09OLnN0cmluZ2lmeSh7VGlwbzogXCJWYXJpb3NcIiwgVGFsb25hcmlvOiAxMDAwMDAyLCBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zfSldKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW5pdGlhbFZhbHVlKGksIHRhbG9uYXJpb3MpXG4gICAge1xuICAgICAgICBpZih0aGlzLmNvbnRhZG9yW2ldID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2ldID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7ICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWRvcltpXSA9ICh0aGlzLmNvbnRhZG9yW2ldKzEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2UgaW1wcmltZSB0YWxvbmFyaW9zLS0tLT5cIik7XG4gICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGFsb25hcmlvcy5Cb2xldG9zKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJTZXBhcmFkb3IgX19fX19fX19fX19fX1wiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcyA9PSB1bmRlZmluZWQpKTtcbiAgICAgICAgaWYodGFsb25hcmlvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvL0JPTEVUT1MgUEVORElFTlRFU1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0YWxvbmFyaW9zW2ldLmJvbGV0b3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcyA9PSBudWxsIHx8IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzID09IHVuZGVmaW5lZCB8fCB0aGlzLmNhbnRCb2xQZW5kaWVudGVzW2ldID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmNJY29ub1RhbG9uYXJpb1tpXSA9IFwicmVzOi8vaWNvbm9fdGFsb25hcmlvX2dyaXNcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpZW5lUGVuZGllbnRlc1tpXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sUGVuW2ldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWVuZVBlbmRpZW50ZXNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xQZW5kaWVudGVzW2ldID0gdGFsb25hcmlvc1tpXS5Cb2xldG9zLnBlbmRpZW50ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uc2V0VGFsb25hcmlvcyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL0JPTEVUT1MgQVNJR05BRE9TXG4gICAgICAgICAgICAgICAgaWYodGFsb25hcmlvc1tpXS5Cb2xldG9zLmFzaWduYWRvcyA9PSBudWxsIHx8IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5hc2lnbmFkb3MgPT0gdW5kZWZpbmVkIHx8IHRoaXMuY2FudEJvbEFzaWduYWRvc1tpXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sQXNpZ25hZG9zW2ldID0gdGFsb25hcmlvc1tpXS5Cb2xldG9zLmFzaWduYWRvcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gdHJ1ZTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9CT0xFVE9TIFZFTkRJRE9TXG4gICAgICAgICAgICAgICAgaWYodGFsb25hcmlvc1tpXS5Cb2xldG9zLnZlbmRpZG9zID09IG51bGwgfHwgdGFsb25hcmlvc1tpXS5Cb2xldG9zLnZlbmRpZG9zID09IHVuZGVmaW5lZCB8fCB0aGlzLmNhbnRCb2xWZW5kaWRvc1tpXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xWZW5baV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xWZW5kaWRvc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xWZW5baV0gPSB0cnVlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgVmVudGFCb2xldG8oYm9sZXRvLCB0YWxvbmFyaW8pe1xuICAgICAgICBpZihib2xldG8udmVuZGlkbyl7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkF2aXNvXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RlIGJvbGV0byB5YSBzZSB2ZW5kacOzLlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBUaXBvOiBcIlVub1wiLFxuICAgICAgICAgICAgICAgIEJvbGV0bzogYm9sZXRvLFxuICAgICAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLmNsYXZlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd2ZW50YWJvbGV0bycsIEpTT04uc3RyaW5naWZ5KERhdGEpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIENvbnN1bHRhUGFnYWRvKGJvbGV0byl7XG4gICAgICAgIHZhciBEYXRhID0geyBUaXBvOiBcInBhZ2Fkb1wiLCBCb2xldG86IGJvbGV0b307XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImJvbGV0b3ZlbmRpZG9cIiwgSlNPTi5zdHJpbmdpZnkoRGF0YSldKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQ29uc3VsdGFCb2xldG8oYm9sZXRvLCB0YWxvbmFyaW8pe1xuICAgICAgICB2YXIgSW5mb0JvbGV0byA9IHtcbiAgICAgICAgICAgIEJvbGV0bzogYm9sZXRvLFxuICAgICAgICAgICAgVGFsb25hcmlvOiB0YWxvbmFyaW8udGFsb25hcmlvXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGV0YWxsZWJvbGV0b3ZlbmRpZG8nLCBKU09OLnN0cmluZ2lmeShJbmZvQm9sZXRvKV0pO1xuICAgIH1cbiAgICBwcml2YXRlIHRhbG9uYXJpb3MgPSBbXG4gICAgICAgIHsgICAgXG4gICAgICAgIFwidGFsb25hcmlvXCI6IFwiMTAwMDAwMVwiLFxuICAgICAgICBcInZlbmRpZG9zXCI6IFt7XG4gICAgICAgICAgICBcIm51bWVyb1wiOiBcIjQ1NjRcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjAzMjE0MFwiLFxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXgxMjl4Y3hhMTkxbTAyMzRtcHNkUE1BZHFtd2QxMFwiLFxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMjkwMC4wMFwiLFxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIk1pbHRvbiBJdmFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIk1hcnRpbmV6IEdvbnphbGV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIml2YW5tYXJ0aW5lei5nb256YWxlejk3QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyNjUyMjEwNVwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LHtcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ1NjVcIixcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjc2NjM1MjQyMTU2NzY4Njc4NDVcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjU2MjM0NlwiLFxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiQXhDMEUyZTlNMjMwUjBGM2RmMlwiLFxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwRkFNUDJcIixcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjEyMDAuMDBcIixcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJKb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIkpvc2UgUGVyZXogUGVyZXpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiam9zZXBlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgXCJwZW5kaWVudGVzXCIgOiBbXSxcbiAgICAgICAgXCJhc2lnbmFkb3NcIiA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm51bWVyb1wiOiBcIjQ1NjRcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjAzMjE0MFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIk1pbHRvbiBJdmFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIml2YW5tYXJ0aW5lei5nb256YWxlejk3QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxuICAgICAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRhbG9uYXJpb1wiOiBcIjEwMDAwMDJcIixcbiAgICAgICAgXCJ2ZW5kaWRvc1wiOiBbe1xuICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXG4gICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjAzMTkxMDM0OTU1OTIwNjg2OTA5MDQ2OTM4MTIzXCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDBGQTJFMjNcIixcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJNaWx0b24gSXZhbiBNYXJ0aW5leiBHb256YWxlelwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSx7XG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NTY1XCIsXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjI3NjYzNTI0MjE1Njc2ODY3ODQ1XCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCI1NjIzNDZcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcIkF4QzBFMmU5TTIzMFIwRjNkZjJcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMEZBTVAyXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIxMjAwLjAwXCIsXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiSm9zZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJKb3NlIFBlcmV6IFBlcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcImpvc2VwZXJlei5wZXJlekBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFwicGVuZGllbnRlc1wiIDogW3tcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ2NjRcIixcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiODQ1NjIzNTg0MjQ1NTg5XCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCJGMzI0NkVSMlwiLFxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXhjbXAwV0RRbTAwcW1zcGRRMjNTcVwiLFxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMzEyM1NGXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiNTYwMC4wMFwiLFxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIlBlZHJvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIlBlZHJvIFBlcmV6IFBlcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcInBlZHJvcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTIzMTM0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0se1xuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDY2NVwiLFxuICAgICAgICAgICAgXCJpbmZvXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIxNTQ2NzQ4MzQxNDIxNTMxNDJcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIkYxMzFUV0VcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4Y21wMFdEUW0wMHFtc3BkUTIzU3FcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMzQyNUdTXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiNzYwMC4wMFwiLFxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIlBlcGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiUGVyZXogUGVyZXpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiUGVwZSBQZXJleiBQZXJlelwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJQZXBlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MzUyNzg2MlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFwiYXNpZ25hZG9zXCIgOiBbXVxuICAgIH1cbiAgICBdO1xuXG59XG5cbiJdfQ==