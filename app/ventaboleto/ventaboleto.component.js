"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VentaBoletoComponent = /** @class */ (function () {
    function VentaBoletoComponent() {
        console.log("VENTA BOLETO");
    }
    VentaBoletoComponent.prototype.ngOnInit = function () {
        this.ATodos.nativeElement.checked = false;
        this.txtBtnVender = "siguiente";
    };
    VentaBoletoComponent.prototype.toggleCheck = function () {
        if (this.ATodos.nativeElement.checked) {
            this.txtBtnVender = "siguiente";
        }
        else {
            this.txtBtnVender = "vender boletos";
        }
        //this.ATodos.nativeElement.toggle();
        console.log(this.ATodos.nativeElement.checked);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], VentaBoletoComponent.prototype, "ATodos", void 0);
    VentaBoletoComponent = __decorate([
        core_1.Component({
            selector: "VentaBoleto",
            moduleId: module.id,
            templateUrl: "./ventaboleto.component.html",
            styleUrls: ["./ventaboleto.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], VentaBoletoComponent);
    return VentaBoletoComponent;
}());
exports.VentaBoletoComponent = VentaBoletoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBU3pFO0lBSUk7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsQ0FBQztRQUNELHFDQUFxQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFwQmlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFTLGlCQUFVO3dEQUFDO0lBRDVCLG9CQUFvQjtRQVBoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzs7T0FFVyxvQkFBb0IsQ0FzQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZlbnRhYm9sZXRvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJDQjFcIikgQVRvZG9zOiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSB0eHRCdG5WZW5kZXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVkVOVEEgQk9MRVRPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5BVG9kb3MubmF0aXZlRWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50eHRCdG5WZW5kZXIgPSBcInNpZ3VpZW50ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVDaGVjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuQVRvZG9zLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHRoaXMudHh0QnRuVmVuZGVyID0gXCJzaWd1aWVudGVcIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50eHRCdG5WZW5kZXIgPSBcInZlbmRlciBib2xldG9zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5BVG9kb3MubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkFUb2Rvcy5uYXRpdmVFbGVtZW50LmNoZWNrZWQpO1xyXG4gICAgfVxyXG59Il19