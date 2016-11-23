// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
'use strict';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
export * from './src/toasty.service';
export * from './src/toasty.component';
import { ToastyComponent } from './src/toasty.component';
import { ToastComponent } from './src/toast.component';
import { ToastyConfig, ToastyService } from './src/toasty.service';
export default {
    providers: [ToastyConfig, ToastyService],
    directives: [ToastyComponent, ToastComponent]
};
export var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: [ToastyConfig, ToastyService]
        };
    };
    ToastyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ToastComponent, ToastyComponent],
                    exports: [ToastComponent, ToastyComponent]
                },] },
    ];
    /** @nocollapse */
    ToastyModule.ctorParameters = [];
    return ToastyModule;
}());
//# sourceMappingURL=index.js.map