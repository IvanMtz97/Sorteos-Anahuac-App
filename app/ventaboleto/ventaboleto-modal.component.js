"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_get_services_1 = require("../services/http-get/http-get.services");
var VentaBoletoModalComponent = /** @class */ (function () {
    function VentaBoletoModalComponent(GET) {
        this.GET = GET;
        console.log("MODAL VENTA BOLETO");
        this.Compradores = [];
        for (var i = 0; i <= 5; i++) {
            this.Compradores.push(new Comprador(i, "Milton Ivan", "Martinez", "Gonzalez"));
        }
    }
    VentaBoletoModalComponent.prototype.onItemTap = function (evt) {
        console.dir(evt.index);
    };
    VentaBoletoModalComponent.prototype.handleInputChanged = function (evt) {
        if (evt.object.text.length > 3) {
            console.log(evt.object.text);
            //TRAER COMPRADOR
        }
    };
    VentaBoletoModalComponent = __decorate([
        core_1.Component({
            selector: "venta-modal",
            moduleId: module.id,
            templateUrl: "./ventaboleto-modal.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService])
    ], VentaBoletoModalComponent);
    return VentaBoletoModalComponent;
}());
exports.VentaBoletoModalComponent = VentaBoletoModalComponent;
var Comprador = /** @class */ (function () {
    function Comprador(id, nombre, appat, apmat) {
        this.id = id;
        this.nombre = nombre;
        this.appat = appat;
        this.apmat = apmat;
        this.nombre_completo = nombre + " " + appat + " " + apmat;
    }
    return Comprador;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDRFQUEwRTtBQVcxRTtJQUVJLG1DQUFvQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7SUFFTCxDQUFDO0lBRUQsNkNBQVMsR0FBVCxVQUFVLEdBQUc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0RBQWtCLEdBQWxCLFVBQW1CLEdBQUc7UUFDbEIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLGlCQUFpQjtRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQXJCUSx5QkFBeUI7UUFSckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFNBQVMsRUFBRSxDQUFFLG9DQUFnQixDQUFFO1NBQ2xDLENBQUM7eUNBSTJCLG9DQUFnQjtPQUZoQyx5QkFBeUIsQ0FzQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSw4REFBeUI7QUF3QnRDO0lBTUksbUJBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSztRQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ2V0L2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IFZlbnRhQm9sZXRvQ29tcG9uZW50IH0gZnJvbSBcIi4vdmVudGFib2xldG8uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInZlbnRhLW1vZGFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92ZW50YWJvbGV0by1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBwcm92aWRlcnM6IFsgTXlIdHRwR2V0U2VydmljZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Nb2RhbENvbXBvbmVudCB7XHJcbiAgICBDb21wcmFkb3JlczogQXJyYXk8Q29tcHJhZG9yPjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgR0VUOiBNeUh0dHBHZXRTZXJ2aWNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1PREFMIFZFTlRBIEJPTEVUT1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Db21wcmFkb3JlcyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8PTU7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuQ29tcHJhZG9yZXMucHVzaChuZXcgQ29tcHJhZG9yKGksIFwiTWlsdG9uIEl2YW5cIiwgXCJNYXJ0aW5lelwiLCBcIkdvbnphbGV6XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChldnQpe1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKGV2dC5pbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2VkKGV2dCl7XHJcbiAgICAgICAgaWYoZXZ0Lm9iamVjdC50ZXh0Lmxlbmd0aCA+IDMpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldnQub2JqZWN0LnRleHQpO1xyXG4gICAgICAgICAgICAvL1RSQUVSIENPTVBSQURPUlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29tcHJhZG9yIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5vbWJyZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGFwcGF0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXBtYXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBub21icmVfY29tcGxldG86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBub21icmUsIGFwcGF0LCBhcG1hdCl7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubm9tYnJlID0gbm9tYnJlO1xyXG4gICAgICAgIHRoaXMuYXBwYXQgPSBhcHBhdDtcclxuICAgICAgICB0aGlzLmFwbWF0ID0gYXBtYXQ7XHJcbiAgICAgICAgdGhpcy5ub21icmVfY29tcGxldG8gPSBub21icmUgKyBcIiBcIiArIGFwcGF0ICsgXCIgXCIgKyBhcG1hdDsgXHJcbiAgICB9XHJcbn0iXX0=