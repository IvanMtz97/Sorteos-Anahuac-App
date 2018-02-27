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
        // this._sideDrawerTransition = new SlideInOnTopTransition();
        // var Data = JSON.parse(this.session.getInformation());
        // this.contador = Array(Data.talonarios.length).fill(0); 
        // if(Data.talonarios.length > 0) {
        //     this.tieneTalonarios = true;
        //     this.listaTalonarios = Data.talonarios;
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFVdEU7SUFzQkksNkJBQW9CLE9BQXVCLEVBQVUsS0FBcUIsRUFBVyxNQUFjO1FBQS9FLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckI1RixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFtQixFQUFFLENBQUM7UUFDckMsMkJBQXNCLEdBQVcsa0NBQWtDLENBQUM7UUFDcEUsb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBQ3BDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBbUIsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsc0JBQWlCLEdBQWtCLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFtQixFQUFFLENBQUM7UUFDeEMsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBa0IsRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFrQixFQUFFLENBQUM7UUFDckMsb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBQzNDLHlDQUF5QztRQUNqQyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDakMsbUJBQWMsR0FBVSxJQUFJLENBQUM7UUEySTVCLGVBQVUsR0FBRztZQUNqQjtnQkFDQSxXQUFXLEVBQUUsU0FB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QUFRLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBcElvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO2dFQUFDO0lBMUJwRCxtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFFLGlDQUFjLENBQUU7U0FDaEMsQ0FBQzt5Q0F3QitCLGlDQUFjLEVBQWlCLHVCQUFjLEVBQW1CLGVBQU07T0F0QjFGLG1CQUFtQixDQWtZL0I7SUFBRCwwQkFBQztDQUFBLEFBbFlELElBa1lDO0FBbFlZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXNzaW9uL3Nlc3Npb24uc2VydmljZXNcIjtcclxuaW1wb3J0IHN0YXR1c0JhciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3RhdHVzLWJhclwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVGFsb25hcmlvc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFsb25hcmlvcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbIFNlc3Npb25TZXJ2aWNlIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWxvbmFyaW9zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzaG93RGV0YWlsczogT2JqZWN0ID0ge307XHJcbiAgICBwdWJsaWMgdGllbmVUYWxvbmFyaW9zOiBib29sZWFuID0gZmFsc2U7IFxyXG4gICAgcHVibGljIGhpZGVCb3R0b25TYWxlczogYm9vbGVhbiA9IGZhbHNlOyBcclxuICAgIHB1YmxpYyB0aWVuZVBlbmRpZW50ZXM6IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgbm9UaWVuZVRhbG9uYXJpb3NUZXh0bzogc3RyaW5nID0gXCJObyBleGlzdGVuIHRhbG9uYXJpb3MgYXNpZ25hZG9zLlwiO1xyXG4gICAgcHVibGljIGxpc3RhVGFsb25hcmlvczogQXJyYXk8b2JqZWN0PiA9IFtdO1xyXG4gICAgcHVibGljIHNyY0ZsZWNoYTogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHVibGljIGZsZWNoYTogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyBjb250YWRvcjogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHNyY0ljb25vVGFsb25hcmlvOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwdWJsaWMgdmFsaWRhU3RhY2tCb2xQZW46IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgdmFsaWRhU3RhY2tCb2xBc2lnOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sVmVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIGNhbnRCb2xQZW5kaWVudGVzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwdWJsaWMgY2FudEJvbEFzaWduYWRvczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHVibGljIGNhbnRCb2xWZW5kaWRvczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgLy9wcml2YXRlIHRhbG9uYXJpb3M6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICAgIHByaXZhdGUgUGlsYUJvbGV0b3M6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBzdGF0dXNCYXJTdGF0ZTogYm9vbGVhbj10cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUQUxPTkFSSU9TXCIpO1xyXG4gICAgICAgIHRoaXMudGllbmVUYWxvbmFyaW9zID0gZmFsc2U7ICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcclxuICAgICAgICAvLyB2YXIgRGF0YSA9IEpTT04ucGFyc2UodGhpcy5zZXNzaW9uLmdldEluZm9ybWF0aW9uKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFkb3IgPSBBcnJheShEYXRhLnRhbG9uYXJpb3MubGVuZ3RoKS5maWxsKDApOyBcclxuICAgICAgICAvLyBpZihEYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gRGF0YS50YWxvbmFyaW9zO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIERhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gQXJyYXkoRGF0YS50YWxvbmFyaW9zLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRBVE9TIC0tLS0+IFwiLCBEYXRhKTtcclxuICAgICAgICBpZihEYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gRGF0YS50YWxvbmFyaW9zO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVN0YXR1c0JhcigpXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gdGhpcy50YWxvbmFyaW9zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnRDaGVjayhiYW5kKSB7XHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAoYmFuZCkgPyB0aGlzLmNvdW50ICsgMSA6IHRoaXMuY291bnQgLSAxO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPT0gMCkgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBiYW5kZXJhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbHNbaW5kZXhdID0gIXRoaXMuc2hvd0RldGFpbHNbaW5kZXhdOyAgIFxyXG4gICAgICAgIHRoaXMuZmxlY2hhW2luZGV4XSA9ICF0aGlzLmZsZWNoYVtpbmRleF07ICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZmxlY2hhW2luZGV4XSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2luZGV4XSA9IFwicmVzOi8vYXJyb3dfdXBcIjsgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2luZGV4XSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgICAgICAgXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDaGVjayhldmVudERhdGEsIGJvbGV0bywgaW5kZXgpe1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRDaGVjayhldmVudERhdGEuY2hlY2tlZCkpIHRoaXMuaGlkZUJvdHRvblNhbGVzID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIHRoaXMuaGlkZUJvdHRvblNhbGVzID0gZmFsc2U7XHJcbiAgICAgICAgaWYoZXZlbnREYXRhLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnB1c2goYm9sZXRvKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVmVuZGVyQm9sZXRvcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInZlbnRhYm9sZXRvXCIsIEpTT04uc3RyaW5naWZ5KHtUaXBvOiBcIlZhcmlvc1wiLCBUYWxvbmFyaW86IDEwMDAwMDIsIEJvbGV0b3M6IHRoaXMuUGlsYUJvbGV0b3N9KV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbml0aWFsU2VsZWN0ZWQgKGkpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluaXRpYWxWYWx1ZShpLCB0YWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3JbaV0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpXSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhZG9yW2ldID0gKHRoaXMuY29udGFkb3JbaV0rMSk7XHJcblxyXG4gICAgICAgIGlmKHRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvL0JPTEVUT1MgUEVORElFTlRFU1xyXG4gICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcmNJY29ub1RhbG9uYXJpb1tpXSA9IFwicmVzOi8vaWNvbm9fdGFsb25hcmlvX2dyaXNcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGllbmVQZW5kaWVudGVzW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWVuZVBlbmRpZW50ZXNbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sUGVuZGllbnRlc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0JPTEVUT1MgQVNJR05BRE9TXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5hc2lnbmFkb3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xBc2lnbmFkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MuYXNpZ25hZG9zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9CT0xFVE9TIFZFTkRJRE9TXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sVmVuZGlkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MudmVuZGlkb3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFZlbnRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB2YXIgRGF0YSA9IHtcclxuICAgICAgICAgICAgVGlwbzogXCJVbm9cIixcclxuICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXHJcbiAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLmNsYXZlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZlbnRhYm9sZXRvJywgSlNPTi5zdHJpbmdpZnkoRGF0YSldKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIENvbnN1bHRhUGFnYWRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJib2xldG92ZW5kaWRvXCIsIEpTT04uc3RyaW5naWZ5KHsgVGlwbzogXCJwYWdhZG9cIiwgQm9sZXRvOiBib2xldG8sIFRhbG9uYXJpbzogdGFsb25hcmlvfSldKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ29uc3VsdGFCb2xldG8oYm9sZXRvLCB0YWxvbmFyaW8pe1xyXG4gICAgICAgIHZhciBJbmZvQm9sZXRvID0ge1xyXG4gICAgICAgICAgICBCb2xldG86IGJvbGV0byxcclxuICAgICAgICAgICAgVGFsb25hcmlvOiB0YWxvbmFyaW8udGFsb25hcmlvXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2RldGFsbGVib2xldG92ZW5kaWRvJywgSlNPTi5zdHJpbmdpZnkoSW5mb0JvbGV0byldKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdGFsb25hcmlvcyA9IFtcclxuICAgICAgICB7ICAgIFxyXG4gICAgICAgIFwidGFsb25hcmlvXCI6IFwiMTAwMDAwMVwiLFxyXG4gICAgICAgIFwidmVuZGlkb3NcIjogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXgxMjl4Y3hhMTkxbTAyMzRtcHNkUE1BZHFtd2QxMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMjkwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIk1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NTY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyNzY2MzUyNDIxNTY3Njg2Nzg0NVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCI1NjIzNDZcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiQXhDMEUyZTlNMjMwUjBGM2RmMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjBGQU1QMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjEyMDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiSm9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiSm9zZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcImpvc2VwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFwicGVuZGllbnRlc1wiIDogW10sXHJcbiAgICAgICAgXCJhc2lnbmFkb3NcIiA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXHJcbiAgICAgICAgICAgICAgICBcImluZm9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjAzMTkxMDM0OTU1OTIwNjg2OTA5MDQ2OTM4MTIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDBGQTJFMjNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJNaWx0b24gSXZhbiBNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0YWxvbmFyaW9cIjogXCIxMDAwMDAyXCIsXHJcbiAgICAgICAgXCJ2ZW5kaWRvc1wiOiBbe1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiOiBcIjQ1NjRcIixcclxuICAgICAgICAgICAgXCJpbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjAzMTkxMDM0OTU1OTIwNjg2OTA5MDQ2OTM4MTIzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjAzMjE0MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDBGQTJFMjNcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIk1pbHRvbiBJdmFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJNaWx0b24gSXZhbiBNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIml2YW5tYXJ0aW5lei5nb256YWxlejk3QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ1NjVcIixcclxuICAgICAgICAgICAgXCJpbmZvXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjI3NjYzNTI0MjE1Njc2ODY3ODQ1XCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjU2MjM0NlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJBeEMwRTJlOU0yMzBSMEYzZGYyXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMEZBTVAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMTIwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJKb3NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJKb3NlIFBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiam9zZXBlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTIzMTM0NTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJwZW5kaWVudGVzXCIgOiBbe1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NjY0XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCI4NDU2MjM1ODQyNDU1ODlcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiRjMyNDZFUjJcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXhjbXAwV0RRbTAwcW1zcGRRMjNTcVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAzMTIzU0ZcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiNTYwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJQZWRyb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiUGVkcm8gUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJwZWRyb3BlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTIzMTM0NTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ2NjVcIixcclxuICAgICAgICAgICAgXCJpbmZvXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjE1NDY3NDgzNDE0MjE1MzE0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCJGMTMxVFdFXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4Y21wMFdEUW0wMHFtc3BkUTIzU3FcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIzNDI1R1NcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiNzYwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJQZXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJQZXBlIFBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiUGVwZXBlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MzUyNzg2MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICBcImFzaWduYWRvc1wiIDogW11cclxuICAgIH1cclxuICAgIF07XHJcblxyXG59XHJcblxyXG4iXX0=