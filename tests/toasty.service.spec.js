"use strict";
var testing_1 = require('@angular/core/testing');
var Observable_1 = require('rxjs/Observable');
var toasty_service_1 = require('../src/toasty.service');
describe('ToastyService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [toasty_service_1.ToastyService, toasty_service_1.ToastyConfig]
        });
    });
    it('is defined', testing_1.inject([toasty_service_1.ToastyService], function (service) {
        expect(toasty_service_1.ToastyService).toBeDefined();
        expect(service instanceof toasty_service_1.ToastyService).toBeTruthy();
    }));
    it('should return Observable from getToasts method', testing_1.inject([toasty_service_1.ToastyService], function (service) {
        expect(service.getToasts instanceof Observable_1.Observable);
    }));
    describe('create default toasty', function () {
        it('with string title', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('Hi');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-default');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.default('Hi');
        }));
        it('with number title', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('1000');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-default');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.default(1000);
        }));
        it('with ToastyOptions', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // Create options
            var options = {
                title: 'Title',
                msg: 'message',
            };
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe(options.title);
                expect(toast.msg).toBe(options.msg);
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-default');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.default(options);
        }));
        it('and call onAdd function', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // Create options
            var options = {
                title: 'Title',
                msg: 'message',
                onAdd: function (toast) {
                    expect(toast).toBeDefined();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe(options.title);
                    expect(toast.msg).toBe(options.msg);
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-default');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).not.toBeNull();
                    expect(toast.onRemove).toBeNull();
                }
            };
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) { });
            service.default(options);
        }));
    });
    describe('create toasty', function () {
        it('of info type', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('Hi');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-info');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.info('Hi');
        }));
        it('of success type', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('Hi');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-success');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.success('Hi');
        }));
        it('of wait type', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('Hi');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-wait');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.wait('Hi');
        }));
        it('of error type', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('Hi');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-error');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.error('Hi');
        }));
        it('of warning type', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe('Hi');
                expect(toast.msg).not.toBeDefined();
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-warning');
                expect(toast.theme).toBe('toasty-theme-default');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.warning('Hi');
        }));
    });
    describe('create toasty', function () {
        it('of material theme', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            var options = {
                title: 'Title',
                msg: 'message',
                theme: 'material'
            };
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe(options.title);
                expect(toast.msg).toBe(options.msg);
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-default');
                expect(toast.theme).toBe('toasty-theme-material');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.default(options);
        }));
        it('of bootstrap theme', testing_1.inject([toasty_service_1.ToastyService], function (service) {
            var options = {
                title: 'Title',
                msg: 'message',
                theme: 'bootstrap'
            };
            // We listen our service to recieve new toasts from it
            service.getToasts().subscribe(function (toast) {
                expect(toast).not.toBeNull();
                expect(toast.id).not.toBeNull();
                expect(toast.title).toBe(options.title);
                expect(toast.msg).toBe(options.msg);
                expect(toast.showClose).toBe(true);
                expect(toast.type).toBe('toasty-type-default');
                expect(toast.theme).toBe('toasty-theme-bootstrap');
                expect(toast.onAdd).toBeNull();
                expect(toast.onRemove).toBeNull();
            });
            service.default(options);
        }));
    });
});
