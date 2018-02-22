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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNpZ25hY2lvbmV4aXRvc2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUzFDO0lBaUNJO1FBL0JBLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZ0JBQVcsR0FBRyxDQUFDO2dCQUNDLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsV0FBVztnQkFDcEIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsZUFBZSxFQUFFLDZCQUE2QjthQUNqRDtZQUNEO2dCQUNJLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsZUFBZSxFQUFFLCtCQUErQjthQUNuRDtZQUNEO2dCQUNJLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsU0FBUyxFQUFFLGVBQWU7Z0JBQzFCLGVBQWUsRUFBRSxxQkFBcUI7YUFDekM7WUFDRDtnQkFDSSxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLGVBQWUsRUFBRSw0QkFBNEI7YUFDaEQsQ0FBQyxDQUFDO1FBT1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQVBELDJDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBL0JRLDBCQUEwQjtRQVB0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUVXLDBCQUEwQixDQXFDdEM7SUFBRCxpQ0FBQztDQUFBLEFBckNELElBcUNDO0FBckNZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkFzaWduYWNpb25FeGl0b3NhXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FzaWduYWNpb25leGl0b3NhLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FzaWduYWNpb25leGl0b3NhLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEFzaWduYWNpb25FeGl0b3NhQ29tcG9uZW50e1xuXG4gICAgYm9sZXRvOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBEYXRhQm9sZXRvcyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIG51bWVybzogXCIwMDQ1NjBcIixcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlczogXCJKdWFuIEpvc8OpXCIsXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogXCJNYXJ0w61uZXogR29uesOhbGV6XCIsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZV9jb21wbGV0bzogXCJKdWFuIEpvc8OpIE1hcnTDrW5leiBHb256w6FsZXpcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudW1lcm86IFwiMDA0NTYxXCIsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXM6IFwiTWlsdG9uIEl2YW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zOiBcIk1hcnTDrW5leiBHb256w6FsZXpcIixcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlX2NvbXBsZXRvOiBcIk1pbHRvbiBJdmFuIE1hcnTDrW5leiBHb256w6FsZXpcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudW1lcm86IFwiMDA0NTYyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXM6IFwiUGVkcm9cIixcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zOiBcIlBlcmVpcmEgUGVyZXpcIixcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlX2NvbXBsZXRvOiBcIlBlZHJvIFBlcmVpcmEgUGVyZXpcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudW1lcm86IFwiMDA0NTYzXCIsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXM6IFwiUGFibG8gUGVkcm9cIixcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zOiBcIkppbWVuZXogSnVhcmV6XCIsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZV9jb21wbGV0bzogXCJQYWJsbyBQZWRybyBKaW1lbmV6IEp1YXJlelwiXG4gICAgICAgICAgICAgICAgfV07XG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5ib2xldG8gPSAhdGhpcy5ib2xldG87XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJBU0lHTkFDSU9OIEVYSVRPU0FcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEFNQcORTyBBUlJBWVwiLCB0aGlzLkRhdGFCb2xldG9zLmxlbmd0aCk7XG4gICAgfVxufSJdfQ==