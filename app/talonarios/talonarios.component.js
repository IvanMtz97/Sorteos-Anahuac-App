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
        this.GetTalonarios();
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
    //GET INICIO SESION-------->
    TalonariosComponent.prototype.GetTalonarios = function () {
        var _this = this;
        //this.loader.display(true);
        this.myGetService
            .getDataAuthorization('api/Colaborador/' + this.session.getCorreoColaborador() + '/')
            .subscribe(function (result) {
            console.log("RESULTADO RESPUESTA -----> ", result);
            _this.onGetData(result);
        }, function (error) {
            console.log("Error talonarios", error);
            //this.loader.display(false);
            _this.mostrarMensaje('Error', 'Falló al tratar de obtener los talonarios.');
        });
    };
    TalonariosComponent.prototype.onGetData = function (data) {
        this.session.setInformation(JSON.stringify(data.json()));
        this.session.setToken(data.json().token);
    };
    TalonariosComponent.prototype.mostrarMensaje = function (titulo, mensaje) {
        dialogs.alert({
            title: titulo,
            message: mensaje,
            okButtonText: "Ok"
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsb25hcmlvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWxvbmFyaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLDBDQUF5RDtBQUN6RCx5RUFBc0U7QUFDdEUsNEVBQTBFO0FBRTFFLG9DQUFzQztBQUN0QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBUzNCO0lBd0JJLDZCQUFvQixPQUF1QixFQUFVLEtBQXFCLEVBQVcsTUFBYyxFQUFVLFlBQThCO1FBQXZILFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBdkJwSSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUNyQywyQkFBc0IsR0FBVyxrQ0FBa0MsQ0FBQztRQUNwRSxvQkFBZSxHQUFrQixFQUFFLENBQUM7UUFDcEMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFtQixFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixzQkFBaUIsR0FBa0IsRUFBRSxDQUFDO1FBQ3RDLHNCQUFpQixHQUFtQixFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQW1CLEVBQUUsQ0FBQztRQUN4QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixH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QztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLE1BQU0sRUFBRSxTQUFTO1FBQ25DLElBQUksVUFBVSxHQUFHO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7U0FDakMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQS9Kb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjtnRUFBQztJQS9CcEQsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBRSxpQ0FBYyxFQUFFLG9DQUFnQixDQUFFO1NBQ2xELENBQUM7eUNBMEIrQixpQ0FBYyxFQUFpQix1QkFBYyxFQUFtQixlQUFNLEVBQXdCLG9DQUFnQjtPQXhCbEksbUJBQW1CLENBa2EvQjtJQUFELDBCQUFDO0NBQUEsQUFsYUQsSUFrYUM7QUFsYVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCBzdGF0dXNCYXIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXN0YXR1cy1iYXJcIik7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxudmFyIHV0aWxzID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJUYWxvbmFyaW9zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWxvbmFyaW9zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFsgU2Vzc2lvblNlcnZpY2UsIE15SHR0cEdldFNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhbG9uYXJpb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNob3dEZXRhaWxzOiBPYmplY3QgPSB7fTtcclxuICAgIHB1YmxpYyB0aWVuZVRhbG9uYXJpb3M6IGJvb2xlYW4gPSBmYWxzZTsgXHJcbiAgICBwdWJsaWMgaGlkZUJvdHRvblNhbGVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGlkZUJvdHRvbjogYm9vbGVhbiA9IGZhbHNlOyAgXHJcbiAgICBwdWJsaWMgdGllbmVQZW5kaWVudGVzOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIG5vVGllbmVUYWxvbmFyaW9zVGV4dG86IHN0cmluZyA9IFwiTm8gZXhpc3RlbiB0YWxvbmFyaW9zIGFzaWduYWRvcy5cIjtcclxuICAgIHB1YmxpYyBsaXN0YVRhbG9uYXJpb3M6IEFycmF5PG9iamVjdD4gPSBbXTtcclxuICAgIHB1YmxpYyBzcmNGbGVjaGE6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHB1YmxpYyBmbGVjaGE6IEFycmF5PGJvb2xlYW4+ID0gW107XHJcbiAgICBwdWJsaWMgY29udGFkb3I6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzcmNJY29ub1RhbG9uYXJpbzogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sUGVuOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgcHVibGljIHZhbGlkYVN0YWNrQm9sQXNpZzogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyB2YWxpZGFTdGFja0JvbFZlbjogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIHB1YmxpYyBjYW50Qm9sUGVuZGllbnRlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgcHVibGljIGNhbnRCb2xBc2lnbmFkb3M6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIHB1YmxpYyBjYW50Qm9sVmVuZGlkb3M6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgIC8vcHJpdmF0ZSB0YWxvbmFyaW9zOiBBcnJheTxvYmplY3Q+ID0gW107XHJcbiAgICBwcml2YXRlIFBpbGFCb2xldG9zOiBBcnJheTxvYmplY3Q+ID0gW107XHJcbiAgICBwdWJsaWMgc3RhdHVzQmFyU3RhdGU6IGJvb2xlYW49dHJ1ZTsgICAgXHJcbiAgICBwdWJsaWMgaW1hZ2VuUHVibGljaXRhcmlhOiBzdHJpbmc7ICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15R2V0U2VydmljZTogTXlIdHRwR2V0U2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUQUxPTkFSSU9TXCIpO1xyXG4gICAgICAgIHRoaXMudGllbmVUYWxvbmFyaW9zID0gZmFsc2U7ICBcclxuICAgICAgICB0aGlzLmltYWdlblB1YmxpY2l0YXJpYSA9IHRoaXMuc2Vzc2lvbi5nZXRJbWFnZW5QdWJsaWNpZGFkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5HZXRUYWxvbmFyaW9zKCk7XHJcbiAgICAgICAgdmFyIERhdGEgPSBKU09OLnBhcnNlKHRoaXMuc2Vzc2lvbi5nZXRJbmZvcm1hdGlvbigpKTtcclxuICAgICAgICB0aGlzLmNvbnRhZG9yID0gQXJyYXkoRGF0YS50YWxvbmFyaW9zLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRBVE9TIC0tLS0+IFwiLCBEYXRhKTtcclxuICAgICAgICBpZihEYXRhLnRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gRGF0YS50YWxvbmFyaW9zO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVN0YXR1c0JhcigpXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXR1c0JhclN0YXRlID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRpZW5lVGFsb25hcmlvcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGFUYWxvbmFyaW9zID0gdGhpcy50YWxvbmFyaW9zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dFVCBJTklDSU8gU0VTSU9OLS0tLS0tLS0+XHJcbiAgICBwcml2YXRlIEdldFRhbG9uYXJpb3MoKSB7XHJcbiAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KHRydWUpO1xyXG4gICAgICAgIHRoaXMubXlHZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXREYXRhQXV0aG9yaXphdGlvbignYXBpL0NvbGFib3JhZG9yLycgKyB0aGlzLnNlc3Npb24uZ2V0Q29ycmVvQ29sYWJvcmFkb3IoKSArICcvJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1VMVEFETyBSRVNQVUVTVEEgLS0tLS0+IFwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdldERhdGEocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHRhbG9uYXJpb3NcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRlci5kaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhck1lbnNhamUoJ0Vycm9yJywgJ0ZhbGzDsyBhbCB0cmF0YXIgZGUgb2J0ZW5lciBsb3MgdGFsb25hcmlvcy4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoZGF0YTogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0SW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YS5qc29uKCkpKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0VG9rZW4oZGF0YS5qc29uKCkudG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyTWVuc2FqZSAodGl0dWxvLCBtZW5zYWplKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOnRpdHVsbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVuc2FqZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnRDaGVjayhiYW5kKSB7XHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAoYmFuZCkgPyB0aGlzLmNvdW50ICsgMSA6IHRoaXMuY291bnQgLSAxO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPT0gMCkgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBiYW5kZXJhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGUoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbHNbaW5kZXhdID0gIXRoaXMuc2hvd0RldGFpbHNbaW5kZXhdOyAgIFxyXG4gICAgICAgIHRoaXMuZmxlY2hhW2luZGV4XSA9ICF0aGlzLmZsZWNoYVtpbmRleF07ICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZmxlY2hhW2luZGV4XSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2luZGV4XSA9IFwicmVzOi8vYXJyb3dfdXBcIjsgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3JjRmxlY2hhW2luZGV4XSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgICAgICAgXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDaGVjayhldmVudERhdGEsIGJvbGV0bywgaW5kZXgpe1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRDaGVjayhldmVudERhdGEuY2hlY2tlZCkpIHRoaXMuaGlkZUJvdHRvblNhbGVzID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIHRoaXMuaGlkZUJvdHRvblNhbGVzID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudCA+PSAyKSB0aGlzLmhpZGVCb3R0b24gPSB0cnVlO1xyXG4gICAgICAgIGVsc2UgdGhpcy5oaWRlQm90dG9uID0gZmFsc2U7XHJcbiAgICAgICAgaWYoZXZlbnREYXRhLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICB0aGlzLlBpbGFCb2xldG9zLnB1c2goYm9sZXRvKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5QaWxhQm9sZXRvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVmVuZGVyQm9sZXRvcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInZlbnRhYm9sZXRvXCIsIEpTT04uc3RyaW5naWZ5KHtUaXBvOiBcIlZhcmlvc1wiLCBUYWxvbmFyaW86IDEwMDAwMDIsIEJvbGV0b3M6IHRoaXMuUGlsYUJvbGV0b3N9KV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbml0aWFsU2VsZWN0ZWQgKGkpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluaXRpYWxWYWx1ZShpLCB0YWxvbmFyaW9zKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGFkb3JbaV0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNyY0ZsZWNoYVtpXSA9IFwicmVzOi8vYXJyb3dfZG93blwiOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhZG9yW2ldID0gKHRoaXMuY29udGFkb3JbaV0rMSk7XHJcblxyXG4gICAgICAgIGlmKHRhbG9uYXJpb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvL0JPTEVUT1MgUEVORElFTlRFU1xyXG4gICAgICAgICAgICBpZih0YWxvbmFyaW9zW2ldLkJvbGV0b3MucGVuZGllbnRlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcmNJY29ub1RhbG9uYXJpb1tpXSA9IFwicmVzOi8vaWNvbm9fdGFsb25hcmlvX2dyaXNcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGllbmVQZW5kaWVudGVzW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNyY0ljb25vVGFsb25hcmlvW2ldID0gXCJyZXM6Ly9pY29ub190YWxvbmFyaW9cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xQZW5baV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWVuZVBlbmRpZW50ZXNbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sUGVuZGllbnRlc1tpXSA9IHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5wZW5kaWVudGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5zZXRUYWxvbmFyaW9zKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0JPTEVUT1MgQVNJR05BRE9TXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy5hc2lnbmFkb3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRCb2xBc2lnbmFkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MuYXNpZ25hZG9zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhU3RhY2tCb2xBc2lnW2ldID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9CT0xFVE9TIFZFTkRJRE9TXHJcbiAgICAgICAgICAgIGlmKHRhbG9uYXJpb3NbaV0uQm9sZXRvcy52ZW5kaWRvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Qm9sVmVuZGlkb3NbaV0gPSB0YWxvbmFyaW9zW2ldLkJvbGV0b3MudmVuZGlkb3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGFTdGFja0JvbFZlbltpXSA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFZlbnRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB2YXIgRGF0YSA9IHtcclxuICAgICAgICAgICAgVGlwbzogXCJVbm9cIixcclxuICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXHJcbiAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLmNsYXZlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ZlbnRhYm9sZXRvJywgSlNPTi5zdHJpbmdpZnkoRGF0YSldKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIENvbnN1bHRhUGFnYWRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB2YXIgRGF0YSA9IHsgVGlwbzogXCJwYWdhZG9cIiwgQm9sZXRvOiBib2xldG8sIFRhbG9uYXJpbzogdGFsb25hcmlvfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRBTE9OQVJJT1MgQ09OU1VMVEEgUEFHQURPXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKERhdGEuQm9sZXRvKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJib2xldG92ZW5kaWRvXCIsIEpTT04uc3RyaW5naWZ5KERhdGEpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvbnN1bHRhQm9sZXRvKGJvbGV0bywgdGFsb25hcmlvKXtcclxuICAgICAgICB2YXIgSW5mb0JvbGV0byA9IHtcclxuICAgICAgICAgICAgQm9sZXRvOiBib2xldG8sXHJcbiAgICAgICAgICAgIFRhbG9uYXJpbzogdGFsb25hcmlvLnRhbG9uYXJpb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkZXRhbGxlYm9sZXRvdmVuZGlkbycsIEpTT04uc3RyaW5naWZ5KEluZm9Cb2xldG8pXSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRhbG9uYXJpb3MgPSBbXHJcbiAgICAgICAgeyAgICBcclxuICAgICAgICBcInRhbG9uYXJpb1wiOiBcIjEwMDAwMDFcIixcclxuICAgICAgICBcInZlbmRpZG9zXCI6IFt7XHJcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyMDMxOTEwMzQ5NTU5MjA2ODY5MDkwNDY5MzgxMjNcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4MTI5eGN4YTE5MW0wMjM0bXBzZFBNQWRxbXdkMTBcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMEZBMkUyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjI5MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJNYXJ0aW5leiBHb256YWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIk1pbHRvbiBJdmFuIE1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjY1MjIxMDVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDU2NVwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiMjc2NjM1MjQyMTU2NzY4Njc4NDVcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiNTYyMzQ2XCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcIkF4QzBFMmU5TTIzMFIwRjNkZjJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwRkFNUDJcIixcclxuICAgICAgICAgICAgICAgIFwidmVuZGlkb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIxMjAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbXByYWRvclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlXCIgOiBcIkpvc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIkpvc2UgUGVyZXogUGVyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJqb3NlcGVyZXoucGVyZXpAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZWx1bGFyXCIgOiBcIjgxMjMxMzQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICBcInBlbmRpZW50ZXNcIiA6IFtdLFxyXG4gICAgICAgIFwiYXNpZ25hZG9zXCIgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibnVtZXJvXCI6IFwiNDU2NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiMDMyMTQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheDEyOXhjeGExOTFtMDIzNG1wc2RQTUFkcW13ZDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3N0b1wiIDogXCIyOTAwLjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcGVsbGlkb3NcIiA6IFwiTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwiaXZhbm1hcnRpbmV6LmdvbnphbGV6OTdAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2VsdWxhclwiIDogXCI4MTI2NTIyMTA1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGFsb25hcmlvXCI6IFwiMTAwMDAwMlwiLFxyXG4gICAgICAgIFwidmVuZGlkb3NcIjogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIjogXCI0NTY0XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXZlXCIgOiBcIjIwMzE5MTAzNDk1NTkyMDY4NjkwOTA0NjkzODEyM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCIwMzIxNDBcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiYXgxMjl4Y3hhMTkxbTAyMzRtcHNkUE1BZHFtd2QxMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjAwRkEyRTIzXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiY29zdG9cIiA6IFwiMjkwMC4wMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21wcmFkb3JcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vbWJyZVwiIDogXCJNaWx0b24gSXZhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIk1hcnRpbmV6IEdvbnphbGV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiTWlsdG9uIEl2YW4gTWFydGluZXogR29uemFsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvcnJlb1wiIDogXCJpdmFubWFydGluZXouZ29uemFsZXo5N0BnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyNjUyMjEwNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWNjaW9uXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbGVcIiA6IFwiTWluYSBkZSBjb2JyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWVyb1wiIDogXCIzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvbmlhXCIgOiBcIkVzdGFuY2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kaWdvX3Bvc3RhbFwiIDogXCI2NjA4N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVzdGFkb1wiIDogXCJOdWV2byBMZW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXVuaWNpcGlvXCIgOiBcIlNhbiBOaWNvbGFzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGVsZWZvbm9cIiA6IFwiODMzNDAzNTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX3RhbG9uYXJpb1wiIDogXCIxOTBmYXMxMTNcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfc29ydGVvXCIgOiBcIjk1NTA2ODAzODMxOTM1MjFcIixcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVfY29sYWJvcmFkb3JcIiA6IFwiMTg0NTM5MjgzNDk1MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJfY29uVG9rZW5cIiA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NTY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIyNzY2MzUyNDIxNTY3Njg2Nzg0NVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb1wiIDogXCI1NjIzNDZcIixcclxuICAgICAgICAgICAgICAgIFwidG9rZW5cIiA6IFwiQXhDMEUyZTlNMjMwUjBGM2RmMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb19kaWdpdGFsXCIgOiBcIjBGQU1QMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5kaWRvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjEyMDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiSm9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiSm9zZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcImpvc2VwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFwicGVuZGllbnRlc1wiIDogW3tcclxuICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiNDY2NFwiLFxyXG4gICAgICAgICAgICBcImluZm9cIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiY2xhdmVcIiA6IFwiODQ1NjIzNTg0MjQ1NTg5XCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvXCIgOiBcIkYzMjQ2RVIyXCIsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCIgOiBcImF4Y21wMFdEUW0wMHFtc3BkUTIzU3FcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fZGlnaXRhbFwiIDogXCIwMzEyM1NGXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjU2MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiUGVkcm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImFwZWxsaWRvc1wiIDogXCJQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm9tYnJlX2NvbXBsZXRvXCIgOiBcIlBlZHJvIFBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb3JyZW9cIiA6IFwicGVkcm9wZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODEyMzEzNDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY2Npb25cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsZVwiIDogXCJNaW5hIGRlIGNvYnJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtZXJvXCIgOiBcIjMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9uaWFcIiA6IFwiRXN0YW5jaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RpZ29fcG9zdGFsXCIgOiBcIjY2MDg3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXN0YWRvXCIgOiBcIk51ZXZvIExlb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdW5pY2lwaW9cIiA6IFwiU2FuIE5pY29sYXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZWxlZm9ub1wiIDogXCI4MzM0MDM1OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZm9saW9fdGFsb25hcmlvXCIgOiBcIjE5MGZhczExM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9zb3J0ZW9cIiA6IFwiOTU1MDY4MDM4MzE5MzUyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZV9jb2xhYm9yYWRvclwiIDogXCIxODQ1MzkyODM0OTUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIl9jb25Ub2tlblwiIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBcIm51bWVyb1wiIDogXCI0NjY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5mb1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJjbGF2ZVwiIDogXCIxNTQ2NzQ4MzQxNDIxNTMxNDJcIixcclxuICAgICAgICAgICAgICAgIFwiZm9saW9cIiA6IFwiRjEzMVRXRVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiIDogXCJheGNtcDBXRFFtMDBxbXNwZFEyM1NxXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbGlvX2RpZ2l0YWxcIiA6IFwiMzQyNUdTXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmRpZG9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImNvc3RvXCIgOiBcIjc2MDAuMDBcIixcclxuICAgICAgICAgICAgICAgIFwiY29tcHJhZG9yXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVcIiA6IFwiUGVwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXBlbGxpZG9zXCIgOiBcIlBlcmV6IFBlcmV6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub21icmVfY29tcGxldG9cIiA6IFwiUGVwZSBQZXJleiBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29ycmVvXCIgOiBcIlBlcGVwZXJlei5wZXJlekBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNlbHVsYXJcIiA6IFwiODM1Mjc4NjJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjY2lvblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxlXCIgOiBcIk1pbmEgZGUgY29icmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1lcm9cIiA6IFwiMzA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb25pYVwiIDogXCJFc3RhbmNpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvZGlnb19wb3N0YWxcIiA6IFwiNjYwODdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIiA6IFwiTnVldm8gTGVvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm11bmljaXBpb1wiIDogXCJTYW4gTmljb2xhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlbGVmb25vXCIgOiBcIjgzMzQwMzU5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmb2xpb190YWxvbmFyaW9cIiA6IFwiMTkwZmFzMTEzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX3NvcnRlb1wiIDogXCI5NTUwNjgwMzgzMTkzNTIxXCIsXHJcbiAgICAgICAgICAgICAgICBcImNsYXZlX2NvbGFib3JhZG9yXCIgOiBcIjE4NDUzOTI4MzQ5NTFcIixcclxuICAgICAgICAgICAgICAgIFwiX2NvblRva2VuXCIgOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJhc2lnbmFkb3NcIiA6IFtdXHJcbiAgICB9XHJcbiAgICBdO1xyXG5cclxufVxyXG5cclxuIl19