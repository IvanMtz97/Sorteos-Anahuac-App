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
        console.log("TALONARIOS");
        this.tieneTalonarios = false;
        this.imagenPublicitaria = this.session.getImagenPublicidad();
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
        console.log("VENTA BOLETO");
        console.dir(boleto);
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
    TalonariosComponent.prototype.ConsultaPagado = function (boleto, talonario) {
        var Data = { Tipo: "pagado", Boleto: boleto, Talonario: talonario };
        console.log("TALONARIOS CONSULTA PAGADO");
        console.dir(Data.Boleto);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFDdEUsNEVBQTBFO0FBRTFFLG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBUzNCO0lBd0JJLDZCQUFvQixPQUF1QixFQUFVLEtBQXFCLEVBQVcsTUFBYyxFQUFVLFlBQThCO1FBQXZILFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBdkJwSSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUNyQywyQkFBc0IsR0FBVyxrQ0FBa0MsQ0FBQztRQUNwRSxvQkFBZSxHQUFrQixFQUFFLENBQUM7UUFDcEMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFtQixFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixzQkFBaUIsR0FBa0IsRUFBRSxDQUFDO1FBQ3RDLHNCQUFpQixHQUFtQixFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQW1CLEVBQUUsQ0FBQztRQUN4QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixH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LFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQTdJb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjtnRUFBQztJQS9CcEQsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBRSxpQ0FBYyxFQUFFLG9DQUFnQixDQUFFO1NBQ2xELENBQUM7eUNBMEIrQixpQ0FBYyxFQUFpQix1QkFBYyxFQUFtQixlQUFNLEVBQXdCLG9DQUFnQjtPQXhCbEksbUJBQW1CLENBZ1ovQjtJQUFELDBCQUFDO0NBQUEsQUFoWkQsSUFnWkM7QUFoWlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxudmFyIHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJUYWxvbmFyaW9zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWxvbmFyaW9zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFsgU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhbG9uYXJpb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNob3dEZXRhaWxzOiBPYmplY3QgPSB7fTtcclxuICAgIHB1YmxpYyB0aWVuZVRhbG9uYXJpb3M6IGJvb2xlYW4gPSBmYWxzZTsgXHJcbiAgICBwdWJsaWMgaGlkZUJvdHRvblNhbGVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGlkZUJvdHRvbjogYm9vbGVhbiA9IGZhbHNlOyAgXHJcbiAgICBwdWJsaWMgdGllbmVQZW5kaWVudGVzOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIG5vVGllbmVUYWxvbmFyaW9zVGV4dG86IHN0cmluZyA9IFwiTm8gZXhpc3RlbiB0YWxvbmFyaW9zIGFzaWduYWRvcy5cIjtcclxuICAgIHB1YmxpYyBsaXN0YVRhbG9uYXJpb3M6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBzcmNGbGVjaGE6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHB1YmxpYyBmbGVjaGE6IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgY29udGFkb3I6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzcmNJY29ub1RhbG9uYXJpbzogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sUGVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sQXNpZzogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyB2YWxpZGFTdGFja0JvbFZlbjogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyBjYW50Qm9sUGVuZGllbnRlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHVibGljIGNhbnRCb2xBc2lnbmFkb3M6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHB1YmxpYyBjYW50Qm9sVmVuZGlkb3M6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIC8vcHJpdmF0ZSB0YWxvbmFyaW9zOiBBcnJheTxvYmplY3Q+ID0gW107XHJcbiAgICBwcml2YXRlIFBpbGFCb2xldG9zOiBBcnJheTxvYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTsgICAgXHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7ICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15R2V0U2VydmljZTogTXlIdHRwR2V0U2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUQUxPTkFSSU9TXCIpO1xyXG4gICAgICAgIHRoaXMudGllbmVUYWxvbmFyaW9zID0gZmFsc2U7ICBcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIERhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gQXJyYXkoRGF0YS50YWxvbmFyaW9zLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRBVE9TIC0tLS0+IFwiLCBEYXRhKTtcclxuICAgICAgICBpZihEYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gRGF0YS50YWxvbmFyaW9zO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVN0YXR1c0JhcigpXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gdGhpcy50YWxvbmFyaW9zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YShkYXRhOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShkYXRhLmpzb24oKSkpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUb2tlbihkYXRhLmpzb24oKS50b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvdW50Q2hlY2soYmFuZCkge1xyXG4gICAgICAgIHZhciBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gKGJhbmQpID8gdGhpcy5jb3VudCArIDEgOiB0aGlzLmNvdW50IC0gMTtcclxuICAgICAgICBpZih0aGlzLmNvdW50ID09IDApIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gYmFuZGVyYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlKGluZGV4KXtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxzW2luZGV4XSA9ICF0aGlzLnNob3dEZXRhaWxzW2luZGV4XTsgICBcclxuICAgICAgICB0aGlzLmZsZWNoYVtpbmRleF0gPSAhdGhpcy5mbGVjaGFbaW5kZXhdOyAgICBcclxuICAgICAgICBpZih0aGlzLmZsZWNoYVtpbmRleF0gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpbmRleF0gPSBcInJlczovL2Fycm93X3VwXCI7ICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpbmRleF0gPSBcInJlczovL2Fycm93X2Rvd25cIjsgICAgICAgIFxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soZXZlbnREYXRhLCBib2xldG8sIGluZGV4KXtcclxuICAgICAgICBpZih0aGlzLmNvdW50Q2hlY2soZXZlbnREYXRhLmNoZWNrZWQpKSB0aGlzLmhpZGVCb3R0b25TYWxlcyA9IHRydWU7XHJcbiAgICAgICAgZWxzZSB0aGlzLmhpZGVCb3R0b25TYWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPj0gMikgdGhpcy5oaWRlQm90dG9uID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIHRoaXMuaGlkZUJvdHRvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmKGV2ZW50RGF0YS5jaGVja2VkKXtcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5wdXNoKGJvbGV0byk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuUGlsYUJvbGV0b3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFZlbmRlckJvbGV0b3MoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJ2ZW50YWJvbGV0b1wiLCBKU09OLnN0cmluZ2lmeSh7VGlwbzogXCJWYXJpb3NcIiwgVGFsb25hcmlvOiAxMDAwMDAyLCBCb2xldG9zOiB0aGlzLlBpbGFCb2xldG9zfSldKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5pdGlhbFZhbHVlKGksIHRhbG9uYXJpb3MpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5jb250YWRvcltpXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2ldID0gXCJyZXM6Ly9hcnJvd19kb3duXCI7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFkb3JbaV0gPSAodGhpcy5jb250YWRvcltpXSsxKTtcclxuXHJcbiAgICAgICAgaWYodGFsb25hcmlvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vQk9MRVRPUyBQRU5ESUVOVEVTXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9fZ3Jpc1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWVuZVBlbmRpZW50ZXNbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3JjSWNvbm9UYWxvbmFyaW9baV0gPSBcInJlczovL2ljb25vX3RhbG9uYXJpb1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFBlbltpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpZW5lUGVuZGllbnRlc1tpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xQZW5kaWVudGVzW2ldID0gdGFsb25hcmlvc1tpXS5Cb2xldG9zLnBlbmRpZW50ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLnNldFRhbG9uYXJpb3ModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vQk9MRVRPUyBBU0lHTkFET1NcclxuICAgICAgICAgICAgaWYodGFsb25hcmlvc1tpXS5Cb2xldG9zLmFzaWduYWRvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbEFzaWdbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudEJvbEFzaWduYWRvc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5hc2lnbmFkb3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbEFzaWdbaV0gPSB0cnVlOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0JPTEVUT1MgVkVORElET1NcclxuICAgICAgICAgICAgaWYodGFsb25hcmlvc1tpXS5Cb2xldG9zLnZlbmRpZG9zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sVmVuW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xWZW5kaWRvc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYVN0YWNrQm9sVmVuW2ldID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVmVudGFCb2xldG8oYm9sZXRvLCB0YWxvbmFyaW8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVkVOVEEgQk9MRVRPXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKGJvbGV0byk7XHJcbiAgICAgICAgaWYoYm9sZXRvLnZlbmRpZG8pe1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOlwiQXZpc29cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0ZSBib2xldG8geWEgc2UgdmVuZGlvXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBUaXBvOiBcIlVub1wiLFxyXG4gICAgICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXHJcbiAgICAgICAgICAgICAgICBUYWxvbmFyaW86IHRhbG9uYXJpby5jbGF2ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZlbnRhYm9sZXRvJywgSlNPTi5zdHJpbmdpZnkoRGF0YSldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBDb25zdWx0YVBhZ2Fkbyhib2xldG8sIHRhbG9uYXJpbyl7XHJcbiAgICAgICAgdmFyIERhdGEgPSB7IFRpcG86IFwicGFnYWRvXCIsIEJvbGV0bzogYm9sZXRvLCBUYWxvbmFyaW86IHRhbG9uYXJpb307XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUQUxPTkFSSU9TIENPTlNVTFRBIFBBR0FET1wiKTtcclxuICAgICAgICBjb25zb2xlLmRpcihEYXRhLkJvbGV0byk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYm9sZXRvdmVuZGlkb1wiLCBKU09OLnN0cmluZ2lmeShEYXRhKV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDb25zdWx0YUJvbGV0byhib2xldG8sIHRhbG9uYXJpbyl7XHJcbiAgICAgICAgdmFyIEluZm9Cb2xldG8gPSB7XHJcbiAgICAgICAgICAgIEJvbGV0bzogYm9sZXRvLFxyXG4gICAgICAgICAgICBUYWxvbmFyaW86IHRhbG9uYXJpby50YWxvbmFyaW9cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGV0YWxsZWJvbGV0b3ZlbmRpZG8nLCBKU09OLnN0cmluZ2lmeShJbmZvQm9sZXRvKV0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0YWxvbmFyaW9zID0gW1xyXG4gICAgICAgIHsgICAgXHJcbiAgICAgICAgXCJ0YWxvbmFyaW9cIjogXCIxMDAwMDAxXCIsXHJcbiAgICAgICAgXCJ2ZW5kaWRvc1wiOiBbe1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiOiBcIjQ1NjRcIixcclxuICAgICAgICAgICAgXCJpbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjAzMTkxMDM0OTU1OTIwNjg2OTA5MDQ2OTM4MTIzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjAzMjE0MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDBGQTJFMjNcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIk1pbHRvbiBJdmFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJNaWx0b24gSXZhbiBNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIml2YW5tYXJ0aW5lei5nb256YWxlejk3QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ1NjVcIixcclxuICAgICAgICAgICAgXCJpbmZvXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjI3NjYzNTI0MjE1Njc2ODY3ODQ1XCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjU2MjM0NlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJBeEMwRTJlOU0yMzBSMEYzZGYyXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMEZBTVAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMTIwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJKb3NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJKb3NlIFBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiam9zZXBlcmV6LnBlcmV6QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTIzMTM0NTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJwZW5kaWVudGVzXCIgOiBbXSxcclxuICAgICAgICBcImFzaWduYWRvc1wiIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm51bWVyb1wiOiBcIjQ1NjRcIixcclxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIjAzMjE0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXgxMjl4Y3hhMTkxbTAyMzRtcHNkUE1BZHFtd2QxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMjkwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIk1pbHRvbiBJdmFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIk1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIml2YW5tYXJ0aW5lei5nb256YWxlejk3QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRhbG9uYXJpb1wiOiBcIjEwMDAwMDJcIixcclxuICAgICAgICBcInZlbmRpZG9zXCI6IFt7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDU2NVwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjc2NjM1MjQyMTU2NzY4Njc4NDVcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiNTYyMzQ2XCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcIkF4QzBFMmU5TTIzMFIwRjNkZjJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwRkFNUDJcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIxMjAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIkpvc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIkpvc2UgUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJqb3NlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICBcInBlbmRpZW50ZXNcIiA6IFt7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjQ2NjRcIixcclxuICAgICAgICAgICAgXCJpbmZvXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjg0NTYyMzU4NDI0NTU4OVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCJGMzI0NkVSMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheGNtcDBXRFFtMDBxbXNwZFEyM1NxXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMDMxMjNTRlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCI1NjAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIlBlZHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZV9jb21wbGV0b1wiIDogXCJQZWRybyBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcInBlZHJvcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDY2NVwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMTU0Njc0ODM0MTQyMTUzMTQyXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIkYxMzFUV0VcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXhjbXAwV0RRbTAwcW1zcGRRMjNTcVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjM0MjVHU1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCI3NjAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIlBlcGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIlBlcGUgUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJQZXBlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgzNTI3ODYyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFwiYXNpZ25hZG9zXCIgOiBbXVxyXG4gICAgfVxyXG4gICAgXTtcclxuXHJcbn1cclxuXHJcbiJdfQ==