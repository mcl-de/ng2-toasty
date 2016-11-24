/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./index');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/common/src/localization');
var import5 = require('@angular/core/src/i18n/tokens');
var ToastyModuleInjector = (function (_super) {
    __extends(ToastyModuleInjector, _super);
    function ToastyModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(ToastyModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    ToastyModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ToastyModule_1 = new import1.ToastyModule();
        return this._ToastyModule_1;
    };
    ToastyModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.ToastyModule)) {
            return this._ToastyModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    ToastyModuleInjector.prototype.destroyInternal = function () {
    };
    return ToastyModuleInjector;
}(import0.NgModuleInjector));
exports.ToastyModuleNgFactory = new import0.NgModuleFactory(ToastyModuleInjector, import1.ToastyModule);
