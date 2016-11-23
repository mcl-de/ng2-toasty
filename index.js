// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    ToastyModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [ToastComponent, ToastyComponent],
            exports: [ToastComponent, ToastyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ToastyModule);
    return ToastyModule;
}());
//# sourceMappingURL=index.js.map