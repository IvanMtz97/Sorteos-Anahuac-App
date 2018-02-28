"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("@angular/router");
var session_services_1 = require("../services/session/session.services");
var TalonariosComponent = /** @class */ (function () {
    function TalonariosComponent(session, route, router) {
        this.session = session;
        this.route = route;
        this.router = router;
        this.showDetails = {};
        this.tieneTalonarios = false;
        this.hideBottonSales = false;
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
        console.log("TALONARIOS");
        this.tieneTalonarios = false;
    }
    TalonariosComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        var Data = JSON.parse(this.session.getInformation());
        this.contador = Array(Data.talonarios.length).fill(0);
        console.log("DATOS ----> ", Data);
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
    TalonariosComponent.prototype.setInitialSelected = function (i) {
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
        var Data = {
            Tipo: "Uno",
            Boleto: boleto,
            Talonario: talonario.clave
        };
        this.router.navigate(['ventaboleto', JSON.stringify(Data)]);
    };
    TalonariosComponent.prototype.ConsultaPagado = function (boleto, talonario) {
        this.router.navigate(["boletovendido", JSON.stringify({ Tipo: "pagado", Boleto: boleto, Talonario: talonario })]);
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
            providers: [session_services_1.SessionService]
        }),
        __metadata("design:paramtypes", [session_services_1.SessionService, router_1.ActivatedRoute, router_1.Router])
    ], TalonariosComponent);
    return TalonariosComponent;
}());
exports.TalonariosComponent = TalonariosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFVdEU7SUFzQkksNkJBQW9CLE9BQXVCLEVBQVUsS0FBcUIsRUFBVyxNQUFjO1FBQS9FLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckI1RixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFtQixFQUFFLENBQUM7UUFDckMsMkJBQXNCLEdBQVcsa0NBQWtDLENBQUM7UUFDcEUsb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBQ3BDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBbUIsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsc0JBQWlCLEdBQWtCLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFtQixFQUFFLENBQUM7UUFDeEMsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBa0IsRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFrQixFQUFFLENBQUM7UUFDckMsb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBQzNDLHlDQUF5QztRQUNqQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDakMsbUJBQWMsR0FBVSxJQUFJLENBQUM7UUFvSTVCLGVBQVUsR0FBRztZQUNqQjtnQkFDQSxXQUFXLEVBQUUsU0FB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O1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7Z0VBQUM7SUExQnBELG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUUsaUNBQWMsQ0FBRTtTQUNoQyxDQUFDO3lDQXdCK0IsaUNBQWMsRUFBaUIsdUJBQWMsRUFBbUIsZUFBTTtPQXRCMUYsbUJBQW1CLENBMlgvQjtJQUFELDBCQUFDO0NBQUEsQUEzWEQsSUEyWEM7QUEzWFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhbG9uYXJpb3NcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFsb25hcmlvcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogWyBTZXNzaW9uU2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgVGFsb25hcmlvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHNob3dEZXRhaWxzOiBPYmplY3QgPSB7fTtcbiAgICBwdWJsaWMgdGllbmVUYWxvbmFyaW9zOiBib29sZWFuID0gZmFsc2U7IFxuICAgIHB1YmxpYyBoaWRlQm90dG9uU2FsZXM6IGJvb2xlYW4gPSBmYWxzZTsgXG4gICAgcHVibGljIHRpZW5lUGVuZGllbnRlczogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcbiAgICBwdWJsaWMgbm9UaWVuZVRhbG9uYXJpb3NUZXh0bzogc3RyaW5nID0gXCJObyBleGlzdGVuIHRhbG9uYXJpb3MgYXNpZ25hZG9zLlwiO1xuICAgIHB1YmxpYyBsaXN0YVRhbG9uYXJpb3M6IEFycmF5PG9iamVjdD4gPSBbXTtcbiAgICBwdWJsaWMgc3JjRmxlY2hhOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIGZsZWNoYTogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcbiAgICBwdWJsaWMgY29udGFkb3I6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHNyY0ljb25vVGFsb25hcmlvOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sUGVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xuICAgIHB1YmxpYyB2YWxpZGFTdGFja0JvbEFzaWc6IEFycmF5PGJvb2xlYW4+ID0gW107XG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sVmVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xuICAgIHB1YmxpYyBjYW50Qm9sUGVuZGllbnRlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHB1YmxpYyBjYW50Qm9sQXNpZ25hZG9zOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHVibGljIGNhbnRCb2xWZW5kaWRvczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIC8vcHJpdmF0ZSB0YWxvbmFyaW9zOiBBcnJheTxvYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBQaWxhQm9sZXRvczogQXJyYXk8b2JqZWN0PiA9IFtdO1xuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJUQUxPTkFSSU9TXCIpO1xuICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IGZhbHNlOyAgICAgICAgICBcbiAgICB9XG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICB2YXIgRGF0YSA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpO1xuICAgICAgICB0aGlzLmNvbnRhZG9yID0gQXJyYXkoRGF0YS50YWxvbmFyaW9zLmxlbmd0aCkuZmlsbCgwKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEQVRPUyAtLS0tPiBcIiwgRGF0YSk7XG4gICAgICAgIGlmKERhdGEudGFsb25hcmlvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RhVGFsb25hcmlvcyA9IERhdGEudGFsb25hcmlvcztcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBoaWRlU3RhdHVzQmFyKClcbiAgICB7ICAgICAgICBcbiAgICAgICAgaWYodGhpcy5zdGF0dXNCYXJTdGF0ZSA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RhVGFsb25hcmlvcyA9IHRoaXMudGFsb25hcmlvcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkge1xuICAgICAgICB2YXIgYmFuZGVyYSA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnQgPSAoYmFuZCkgPyB0aGlzLmNvdW50ICsgMSA6IHRoaXMuY291bnQgLSAxO1xuICAgICAgICBpZih0aGlzLmNvdW50ID09IDApIGJhbmRlcmEgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGJhbmRlcmE7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZShpbmRleCl7XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbHNbaW5kZXhdID0gIXRoaXMuc2hvd0RldGFpbHNbaW5kZXhdOyAgIFxuICAgICAgICB0aGlzLmZsZWNoYVtpbmRleF0gPSAhdGhpcy5mbGVjaGFbaW5kZXhdOyAgICBcbiAgICAgICAgaWYodGhpcy5mbGVjaGFbaW5kZXhdID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2luZGV4XSA9IFwicmVzOi8vYXJyb3dfdXBcIjsgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcmNGbGVjaGFbaW5kZXhdID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7ICAgICAgICBcbiAgICAgICAgfSAgICAgXG4gICAgfSBcblxuICAgIHB1YmxpYyB0b2dnbGVDaGVjayhldmVudERhdGEsIGJvbGV0bywgaW5kZXgpe1xuICAgICAgICBpZih0aGlzLmNvdW50Q2hlY2soZXZlbnREYXRhLmNoZWNrZWQpKSB0aGlzLmhpZGVCb3R0b25TYWxlcyA9IHRydWU7XG4gICAgICAgIGVsc2UgdGhpcy5oaWRlQm90dG9uU2FsZXMgPSBmYWxzZTtcbiAgICAgICAgaWYoZXZlbnREYXRhLmNoZWNrZWQpe1xuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKGJvbGV0byk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFZlbmRlckJvbGV0b3MoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1widmVudGFib2xldG9cIiwgSlNPTi5zdHJpbmdpZnkoe1RpcG86IFwiVmFyaW9zXCIsIFRhbG9uYXJpbzogMTAwMDAwMiwgQm9sZXRvczogdGhpcy5QaWxhQm9sZXRvc30pXSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEluaXRpYWxTZWxlY3RlZCAoaSkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldEluaXRpYWxWYWx1ZShpLCB0YWxvbmFyaW9zKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jb250YWRvcltpXSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpXSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFkb3JbaV0gPSAodGhpcy5jb250YWRvcltpXSsxKTtcblxuICAgICAgICBpZih0YWxvbmFyaW9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vQk9MRVRPUyBQRU5ESUVOVEVTXG4gICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb19ncmlzXCI7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudGllbmVQZW5kaWVudGVzW2ldID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGllbmVQZW5kaWVudGVzW2ldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xQZW5kaWVudGVzW2ldID0gdGFsb25hcmlvc1tpXS5Cb2xldG9zLnBlbmRpZW50ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0JPTEVUT1MgQVNJR05BRE9TXG4gICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MuYXNpZ25hZG9zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbEFzaWdbaV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sQXNpZ25hZG9zW2ldID0gdGFsb25hcmlvc1tpXS5Cb2xldG9zLmFzaWduYWRvcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbEFzaWdbaV0gPSB0cnVlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0JPTEVUT1MgVkVORElET1NcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xWZW5baV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sVmVuZGlkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MudmVuZGlkb3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xWZW5baV0gPSB0cnVlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFZlbnRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcbiAgICAgICAgdmFyIERhdGEgPSB7XG4gICAgICAgICAgICBUaXBvOiBcIlVub1wiLFxuICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXG4gICAgICAgICAgICBUYWxvbmFyaW86IHRhbG9uYXJpby5jbGF2ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZlbnRhYm9sZXRvJywgSlNPTi5zdHJpbmdpZnkoRGF0YSldKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIENvbnN1bHRhUGFnYWRvKGJvbGV0bywgdGFsb25hcmlvKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYm9sZXRvdmVuZGlkb1wiLCBKU09OLnN0cmluZ2lmeSh7IFRpcG86IFwicGFnYWRvXCIsIEJvbGV0bzogYm9sZXRvLCBUYWxvbmFyaW86IHRhbG9uYXJpb30pXSk7XG4gICAgfVxuXG4gICAgcHVibGljIENvbnN1bHRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcbiAgICAgICAgdmFyIEluZm9Cb2xldG8gPSB7XG4gICAgICAgICAgICBCb2xldG86IGJvbGV0byxcbiAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLnRhbG9uYXJpb1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2RldGFsbGVib2xldG92ZW5kaWRvJywgSlNPTi5zdHJpbmdpZnkoSW5mb0JvbGV0byldKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB0YWxvbmFyaW9zID0gW1xuICAgICAgICB7ICAgIFxuICAgICAgICBcInRhbG9uYXJpb1wiOiBcIjEwMDAwMDFcIixcbiAgICAgICAgXCJ2ZW5kaWRvc1wiOiBbe1xuICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXG4gICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjAzMTkxMDM0OTU1OTIwNjg2OTA5MDQ2OTM4MTIzXCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDBGQTJFMjNcIixcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJNaWx0b24gSXZhbiBNYXJ0aW5leiBHb256YWxlelwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSx7XG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NTY1XCIsXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjI3NjYzNTI0MjE1Njc2ODY3ODQ1XCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCI1NjIzNDZcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcIkF4QzBFMmU5TTIzMFIwRjNkZjJcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMEZBTVAyXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIxMjAwLjAwXCIsXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiSm9zZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJKb3NlIFBlcmV6IFBlcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcImpvc2VwZXJlei5wZXJlekBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFwicGVuZGllbnRlc1wiIDogW10sXG4gICAgICAgIFwiYXNpZ25hZG9zXCIgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0YWxvbmFyaW9cIjogXCIxMDAwMDAyXCIsXG4gICAgICAgIFwidmVuZGlkb3NcIjogW3tcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0se1xuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDU2NVwiLFxuICAgICAgICAgICAgXCJpbmZvXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyNzY2MzUyNDIxNTY3Njg2Nzg0NVwiLFxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiNTYyMzQ2XCIsXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJBeEMwRTJlOU0yMzBSMEYzZGYyXCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjBGQU1QMlwiLFxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMTIwMC4wMFwiLFxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIkpvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiUGVyZXogUGVyZXpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiSm9zZSBQZXJleiBQZXJlelwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJqb3NlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTIzMTM0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBcInBlbmRpZW50ZXNcIiA6IFt7XG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NjY0XCIsXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjg0NTYyMzU4NDI0NTU4OVwiLFxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiRjMyNDZFUjJcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4Y21wMFdEUW0wMHFtc3BkUTIzU3FcIixcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDMxMjNTRlwiLFxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjU2MDAuMDBcIixcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJQZWRyb1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJQZWRybyBQZXJleiBQZXJlelwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJwZWRyb3BlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LHtcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ2NjVcIixcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMTU0Njc0ODM0MTQyMTUzMTQyXCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCJGMTMxVFdFXCIsXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheGNtcDBXRFFtMDBxbXNwZFEyM1NxXCIsXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjM0MjVHU1wiLFxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjc2MDAuMDBcIixcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJQZXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIlBlcGUgUGVyZXogUGVyZXpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiUGVwZXBlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODM1Mjc4NjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBcImFzaWduYWRvc1wiIDogW11cbiAgICB9XG4gICAgXTtcblxufVxuXG4iXX0=