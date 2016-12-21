// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
__export(require('./src/toasty.service'));
__export(require('./src/toasty.component'));
var toasty_component_2 = require('./src/toasty.component');
var toast_component_1 = require('./src/toast.component');
var toasty_service_2 = require('./src/toasty.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    providers: [toasty_service_2.ToastyConfig, toasty_service_2.ToastyService],
    directives: [toasty_component_2.ToastyComponent, toast_component_1.ToastComponent]
};
var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: [toasty_service_2.ToastyConfig, toasty_service_2.ToastyService]
        };
    };
    ToastyModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [toast_component_1.ToastComponent, toasty_component_2.ToastyComponent],
                    exports: [toast_component_1.ToastComponent, toasty_component_2.ToastyComponent]
                },] },
    ];
    /** @nocollapse */
    ToastyModule.ctorParameters = function () { return []; };
    return ToastyModule;
}());
exports.ToastyModule = ToastyModule;
