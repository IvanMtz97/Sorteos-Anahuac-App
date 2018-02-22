"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AsignacionExitosaComponent = /** @class */ (function () {
    function AsignacionExitosaComponent() {
        this.boleto = false;
        this.DataBoletos = [{
                numero: "004560",
                nombres: "Juan José",
                apellidos: "Martínez González",
                nombre_completo: "Juan José Martínez González"
            },
            {
                numero: "004561",
                nombres: "Milton Ivan",
                apellidos: "Martínez González",
                nombre_completo: "Milton Ivan Martínez González"
            },
            {
                numero: "004562",
                nombres: "Pedro",
                apellidos: "Pereira Perez",
                nombre_completo: "Pedro Pereira Perez"
            },
            {
                numero: "004563",
                nombres: "Pablo Pedro",
                apellidos: "Jimenez Juarez",
                nombre_completo: "Pablo Pedro Jimenez Juarez"
            }];
        console.log("ASIGNACION EXITOSA");
        console.log("TAMAÑO ARRAY", this.DataBoletos.length);
    }
    AsignacionExitosaComponent.prototype.toggle = function () {
        this.boleto = !this.boleto;
    };
    AsignacionExitosaComponent = __decorate([
        core_1.Component({
            selector: "AsignacionExitosa",
            moduleId: module.id,
            templateUrl: "./asignacionexitosa.component.html",
            styleUrls: ["./asignacionexitosa.css"]
        }),
        __metadata("design:paramtypes", [])
    ], AsignacionExitosaComponent);
    return AsignacionExitosaComponent;
}());
exports.AsignacionExitosaComponent = AsignacionExitosaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUzFDO0lBaUNJO1FBL0JBLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZ0JBQVcsR0FBRyxDQUFDO2dCQUNDLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsV0FBVztnQkFDcEIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsZUFBZSxFQUFFLDZCQUE2QjthQUNqRDtZQUNEO2dCQUNJLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsZUFBZSxFQUFFLCtCQUErQjthQUNuRDtZQUNEO2dCQUNJLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsU0FBUyxFQUFFLGVBQWU7Z0JBQzFCLGVBQWUsRUFBRSxxQkFBcUI7YUFDekM7WUFDRDtnQkFDSSxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLGVBQWUsRUFBRSw0QkFBNEI7YUFDaEQsQ0FBQyxDQUFDO1FBT1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQVBELDJDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBL0JRLDBCQUEwQjtRQVB0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUVXLDBCQUEwQixDQXFDdEM7SUFBRCxpQ0FBQztDQUFBLEFBckNELElBcUNDO0FBckNZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkFzaWduYWNpb25FeGl0b3NhXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hc2lnbmFjaW9uZXhpdG9zYS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FzaWduYWNpb25leGl0b3NhLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFzaWduYWNpb25FeGl0b3NhQ29tcG9uZW50e1xyXG5cclxuICAgIGJvbGV0bzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIERhdGFCb2xldG9zID0gW3tcclxuICAgICAgICAgICAgICAgICAgICBudW1lcm86IFwiMDA0NTYwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlczogXCJKdWFuIEpvc8OpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zOiBcIk1hcnTDrW5leiBHb256w6FsZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IFwiSnVhbiBKb3PDqSBNYXJ0w61uZXogR29uesOhbGV6XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBcIjAwNDU2MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXM6IFwiTWlsdG9uIEl2YW5cIixcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3M6IFwiTWFydMOtbmV6IEdvbnrDoWxlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZV9jb21wbGV0bzogXCJNaWx0b24gSXZhbiBNYXJ0w61uZXogR29uesOhbGV6XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBcIjAwNDU2MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXM6IFwiUGVkcm9cIixcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3M6IFwiUGVyZWlyYSBQZXJlelwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZV9jb21wbGV0bzogXCJQZWRybyBQZXJlaXJhIFBlcmV6XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBcIjAwNDU2M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXM6IFwiUGFibG8gUGVkcm9cIixcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3M6IFwiSmltZW5leiBKdWFyZXpcIixcclxuICAgICAgICAgICAgICAgICAgICBub21icmVfY29tcGxldG86IFwiUGFibG8gUGVkcm8gSmltZW5leiBKdWFyZXpcIlxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5ib2xldG8gPSAhdGhpcy5ib2xldG87XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFTSUdOQUNJT04gRVhJVE9TQVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRBTUHDkU8gQVJSQVlcIiwgdGhpcy5EYXRhQm9sZXRvcy5sZW5ndGgpO1xyXG4gICAgfVxyXG59Il19