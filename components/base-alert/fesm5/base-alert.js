import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseAlertComponent = /** @class */ (function () {
    function BaseAlertComponent() {
    }
    /**
     * @return {?}
     */
    BaseAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-alert',
                    template: "<div [class]=\"'alert alert-'+color\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseAlertComponent.ctorParameters = function () { return []; };
    BaseAlertComponent.propDecorators = {
        color: [{ type: Input }],
        dark: [{ type: Input }]
    };
    return BaseAlertComponent;
}());
if (false) {
    /** @type {?} */
    BaseAlertComponent.prototype.color;
    /** @type {?} */
    BaseAlertComponent.prototype.dark;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseAlertModule = /** @class */ (function () {
    function BaseAlertModule() {
    }
    BaseAlertModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseAlertComponent],
                    imports: [],
                    exports: [BaseAlertComponent]
                },] }
    ];
    return BaseAlertModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseAlertComponent, BaseAlertModule };
//# sourceMappingURL=base-alert.js.map
