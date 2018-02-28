"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var ClickStopPropagation = /** @class */ (function () {
    function ClickStopPropagation() {
    }
    ClickStopPropagation.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        core_1.HostListener("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickStopPropagation.prototype, "onClick", null);
    ClickStopPropagation = __decorate([
        core_1.Directive({ selector: "[click-stop-propagation]" })
    ], ClickStopPropagation);
    return ClickStopPropagation;
}());
exports.ClickStopPropagation = ClickStopPropagation;
var IfAndroidDirective = /** @class */ (function () {
    function IfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    IfAndroidDirective = __decorate([
        core_1.Directive({ selector: "[sdkIfAndroid]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)),
        __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
    ], IfAndroidDirective);
    return IfAndroidDirective;
}());
exports.IfAndroidDirective = IfAndroidDirective;
var IfIosDirective = /** @class */ (function () {
    function IfIosDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    IfIosDirective = __decorate([
        core_1.Directive({ selector: "[sdkIfIos]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)),
        __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
    ], IfIosDirective);
    return IfIosDirective;
}());
exports.IfIosDirective = IfIosDirective;
var NgInit = /** @class */ (function () {
    function NgInit() {
        this.values = {};
    }
    NgInit.prototype.ngOnInit = function () {
        if (this.ngInit) {
            this.ngInit();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgInit.prototype, "values", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgInit.prototype, "ngInit", void 0);
    NgInit = __decorate([
        core_1.Directive({
            selector: 'ngInit',
            exportAs: 'ngInit'
        })
    ], NgInit);
    return NgInit;
}());
exports.NgInit = NgInit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpSDtBQUNqSCxxQ0FBaUQ7QUFDakQsOEVBQWlFO0FBR2pFO0lBQUE7SUFNQSxDQUFDO0lBSlUsc0NBQU8sR0FBZCxVQUFlLEtBQVU7UUFFckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFIRDtRQURDLG1CQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7dURBSWpDO0lBTFEsb0JBQW9CO1FBRGhDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQztPQUN2QyxvQkFBb0IsQ0FNaEM7SUFBRCwyQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9EQUFvQjtBQVNqQztJQUNJLDRCQUE2QixNQUFjLEVBQUUsU0FBMkIsRUFBRSxXQUFnQztRQUN0RyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLHdCQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QyxTQUFTLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFMUSxrQkFBa0I7UUFEOUIsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLFdBQUEsYUFBTSxDQUFDLDJCQUFNLENBQUMsQ0FBQTtpREFBNEIsdUJBQWdCLEVBQWUsa0JBQVc7T0FEekYsa0JBQWtCLENBTTlCO0lBQUQseUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxnREFBa0I7QUFTL0I7SUFDSSx3QkFBNkIsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0M7UUFDdEcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyx3QkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBTFEsY0FBYztRQUQxQixnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO1FBRXBCLFdBQUEsYUFBTSxDQUFDLDJCQUFNLENBQUMsQ0FBQTtpREFBNEIsdUJBQWdCLEVBQWUsa0JBQVc7T0FEekYsY0FBYyxDQU0xQjtJQUFELHFCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksd0NBQWM7QUFZekI7SUFKRjtRQUthLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFNOUIsQ0FBQztJQUhHLHlCQUFRLEdBQVI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDcEMsQ0FBQztJQUxRO1FBQVIsWUFBSyxFQUFFOzswQ0FBa0I7SUFFakI7UUFBUixZQUFLLEVBQUU7OzBDQUFRO0lBSEwsTUFBTTtRQUpwQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQztPQUNXLE1BQU0sQ0FPcEI7SUFBRCxhQUFDO0NBQUEsQUFQQyxJQU9EO0FBUGMsd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIEluamVjdCwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERldmljZSwgcGxhdGZvcm1OYW1lcyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBERVZJQ0UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tcHJvdmlkZXJzXCI7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW2NsaWNrLXN0b3AtcHJvcGFnYXRpb25dXCIgfSlcclxuZXhwb3J0IGNsYXNzIENsaWNrU3RvcFByb3BhZ2F0aW9uIHtcclxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW3Nka0lmQW5kcm9pZF1cIiB9KVxyXG5leHBvcnQgY2xhc3MgSWZBbmRyb2lkRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KERFVklDRSkgZGV2aWNlOiBEZXZpY2UsIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4pIHtcclxuICAgICAgICBpZiAoZGV2aWNlLm9zID09PSBwbGF0Zm9ybU5hbWVzLmFuZHJvaWQpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW3Nka0lmSW9zXVwiIH0pXHJcbmV4cG9ydCBjbGFzcyBJZklvc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChERVZJQ0UpIGRldmljZTogRGV2aWNlLCBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KSB7XHJcbiAgICAgICAgaWYgKGRldmljZS5vcyA9PT0gcGxhdGZvcm1OYW1lcy5pb3MpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnbmdJbml0JyxcclxuICAgIGV4cG9ydEFzOiAnbmdJbml0J1xyXG4gIH0pIFxyXG4gIGV4cG9ydCBjbGFzcyBOZ0luaXQge1xyXG4gICAgQElucHV0KCkgdmFsdWVzOiBhbnkgPSB7fTtcclxuICBcclxuICAgIEBJbnB1dCgpIG5nSW5pdDtcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICBpZih0aGlzLm5nSW5pdCkgeyB0aGlzLm5nSW5pdCgpOyB9XHJcbiAgICB9ICBcclxufSJdfQ==