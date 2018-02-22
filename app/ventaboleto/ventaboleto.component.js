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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUFpRDtBQVNqRDtJQUtJLDhCQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUV6QyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQXRCaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQVMsaUJBQVU7d0RBQUM7SUFENUIsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQU82Qix1QkFBYztPQUxoQyxvQkFBb0IsQ0F3QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJWZW50YUJvbGV0b1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmVudGFib2xldG8uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi92ZW50YWJvbGV0by5zY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBBVG9kb3M6IEVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHR4dEJ0blZlbmRlcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBEYXRvczogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuQVRvZG9zLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHh0QnRuVmVuZGVyID0gXCJzaWd1aWVudGVcIjtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5EYXRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiZGF0YVwiXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUNoZWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5BVG9kb3MubmF0aXZlRWxlbWVudC5jaGVja2VkKXtcclxuICAgICAgICAgICAgdGhpcy50eHRCdG5WZW5kZXIgPSBcInNpZ3VpZW50ZVwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnR4dEJ0blZlbmRlciA9IFwidmVuZGVyIGJvbGV0b3NcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=