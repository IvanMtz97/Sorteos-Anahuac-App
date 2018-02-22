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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBU3pFO0lBSUk7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsQ0FBQztRQUNELHFDQUFxQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFwQmlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFTLGlCQUFVO3dEQUFDO0lBRDVCLG9CQUFvQjtRQVBoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzs7T0FFVyxvQkFBb0IsQ0FzQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmVudGFib2xldG8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiQ0IxXCIpIEFUb2RvczogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHR4dEJ0blZlbmRlcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJWRU5UQSBCT0xFVE9cIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5BVG9kb3MubmF0aXZlRWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHh0QnRuVmVuZGVyID0gXCJzaWd1aWVudGVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soKXtcbiAgICAgICAgaWYodGhpcy5BVG9kb3MubmF0aXZlRWxlbWVudC5jaGVja2VkKXtcbiAgICAgICAgICAgIHRoaXMudHh0QnRuVmVuZGVyID0gXCJzaWd1aWVudGVcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnR4dEJ0blZlbmRlciA9IFwidmVuZGVyIGJvbGV0b3NcIjtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuQVRvZG9zLm5hdGl2ZUVsZW1lbnQudG9nZ2xlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuQVRvZG9zLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCk7XG4gICAgfVxufSJdfQ==