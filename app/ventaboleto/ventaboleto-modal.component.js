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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDRFQUEwRTtBQVcxRTtJQUVJLG1DQUFvQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7SUFFTCxDQUFDO0lBRUQsNkNBQVMsR0FBVCxVQUFVLEdBQUc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0RBQWtCLEdBQWxCLFVBQW1CLEdBQUc7UUFDbEIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLGlCQUFpQjtRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQXJCUSx5QkFBeUI7UUFSckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFNBQVMsRUFBRSxDQUFFLG9DQUFnQixDQUFFO1NBQ2xDLENBQUM7eUNBSTJCLG9DQUFnQjtPQUZoQyx5QkFBeUIsQ0FzQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSw4REFBeUI7QUF3QnRDO0lBTUksbUJBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSztRQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWdldC9odHRwLWdldC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgVmVudGFCb2xldG9Db21wb25lbnQgfSBmcm9tIFwiLi92ZW50YWJvbGV0by5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidmVudGEtbW9kYWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmVudGFib2xldG8tbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFsgTXlIdHRwR2V0U2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgVmVudGFCb2xldG9Nb2RhbENvbXBvbmVudCB7XG4gICAgQ29tcHJhZG9yZXM6IEFycmF5PENvbXByYWRvcj47XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBHRVQ6IE15SHR0cEdldFNlcnZpY2Upe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1PREFMIFZFTlRBIEJPTEVUT1wiKTtcblxuICAgICAgICB0aGlzLkNvbXByYWRvcmVzID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8PTU7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLkNvbXByYWRvcmVzLnB1c2gobmV3IENvbXByYWRvcihpLCBcIk1pbHRvbiBJdmFuXCIsIFwiTWFydGluZXpcIiwgXCJHb256YWxlelwiKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uSXRlbVRhcChldnQpe1xuICAgICAgICBjb25zb2xlLmRpcihldnQuaW5kZXgpO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlZChldnQpe1xuICAgICAgICBpZihldnQub2JqZWN0LnRleHQubGVuZ3RoID4gMyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldnQub2JqZWN0LnRleHQpO1xuICAgICAgICAgICAgLy9UUkFFUiBDT01QUkFET1JcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29tcHJhZG9yIHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tYnJlOiBzdHJpbmc7XG4gICAgcHVibGljIGFwcGF0OiBzdHJpbmc7XG4gICAgcHVibGljIGFwbWF0OiBzdHJpbmc7XG4gICAgcHVibGljIG5vbWJyZV9jb21wbGV0bzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGlkLCBub21icmUsIGFwcGF0LCBhcG1hdCl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5ub21icmUgPSBub21icmU7XG4gICAgICAgIHRoaXMuYXBwYXQgPSBhcHBhdDtcbiAgICAgICAgdGhpcy5hcG1hdCA9IGFwbWF0O1xuICAgICAgICB0aGlzLm5vbWJyZV9jb21wbGV0byA9IG5vbWJyZSArIFwiIFwiICsgYXBwYXQgKyBcIiBcIiArIGFwbWF0OyBcbiAgICB9XG59Il19