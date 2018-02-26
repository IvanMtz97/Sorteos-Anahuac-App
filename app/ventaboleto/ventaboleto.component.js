"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var VentaBoletoComponent = /** @class */ (function () {
    function VentaBoletoComponent(route) {
        this.route = route;
    }
    VentaBoletoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ATodos.nativeElement.checked = false;
        this.txtBtnVender = "siguiente";
        this.route.params.subscribe(function (params) {
            _this.Datos = JSON.parse(params["data"]);
        });
    };
    VentaBoletoComponent.prototype.toggleCheck = function () {
        if (this.ATodos.nativeElement.checked) {
            this.txtBtnVender = "siguiente";
        }
        else {
            this.txtBtnVender = "vender boletos";
        }
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], VentaBoletoComponent);
    return VentaBoletoComponent;
}());
exports.VentaBoletoComponent = VentaBoletoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUFpRDtBQVNqRDtJQUtJLDhCQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUV6QyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQXRCaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFENUIsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQU82Qix1QkFBYztPQUxoQyxvQkFBb0IsQ0F3QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVmVudGFCb2xldG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmVudGFib2xldG8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVudGFib2xldG8uc2Nzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbnRhQm9sZXRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwiQ0IxXCIpIEFUb2RvczogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHR4dEJ0blZlbmRlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgRGF0b3M6IE9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5BVG9kb3MubmF0aXZlRWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHh0QnRuVmVuZGVyID0gXCJzaWd1aWVudGVcIjtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLkRhdG9zID0gSlNPTi5wYXJzZShwYXJhbXNbXCJkYXRhXCJdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XG4gICAgICAgIGlmKHRoaXMuQVRvZG9zLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCl7XG4gICAgICAgICAgICB0aGlzLnR4dEJ0blZlbmRlciA9IFwic2lndWllbnRlXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy50eHRCdG5WZW5kZXIgPSBcInZlbmRlciBib2xldG9zXCI7XG4gICAgICAgIH1cbiAgICB9XG59Il19