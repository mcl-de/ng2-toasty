"use strict";
var testing_1 = require('@angular/core/testing');
var toasty_service_1 = require('../src/toasty.service');
var toasty_component_1 = require('../src/toasty.component');
var toast_component_1 = require('../src/toast.component');
describe('ToastyComponent', function () {
    var componentFixture;
    var toast1 = {
        id: 1,
        title: 'title1',
        msg: 'message1',
        showClose: false,
        type: 'toasty-type-default',
        theme: 'toasty-theme-default',
        timeout: null,
        onAdd: null,
        onRemove: null,
        onClick: null
    };
    var toast2 = {
        id: 2,
        title: 'title2',
        msg: 'message2',
        showClose: false,
        type: 'toasty-type-default',
        theme: 'toasty-theme-default',
        timeout: null,
        onAdd: null,
        onRemove: null,
        onClick: null
    };
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [toast_component_1.ToastComponent, toasty_component_1.ToastyComponent],
            providers: [toasty_service_1.ToastyService, toasty_service_1.ToastyConfig]
        });
        testing_1.TestBed.compileComponents();
    });
    beforeEach(function () {
        componentFixture = testing_1.TestBed.createComponent(toasty_component_1.ToastyComponent);
        componentFixture.detectChanges();
    });
    it('should be defined', function () {
        var element = componentFixture.elementRef.nativeElement;
        expect(element.querySelector('#toasty')).toBeDefined();
    });
    it('should update class if position property was not defined', function () {
        var element = componentFixture.nativeElement;
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').className).toBe('toasty-position-bottom-right');
    });
    it('should update class if position property was defined with wrong value', function () {
        var element = componentFixture.nativeElement;
        componentFixture.componentInstance.position = 'left';
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').className).toBe('toasty-position-bottom-right');
    });
    it('should update class if position property was defined with right value', function () {
        var element = componentFixture.nativeElement;
        componentFixture.componentInstance.position = 'bottom-center';
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').className).toBe('toasty-position-bottom-center');
    });
    it('should provide the child toast component if it was created via service', function () {
        var element = componentFixture.nativeElement;
        expect(componentFixture.componentInstance.toasts.length).toBe(0);
        expect(element.querySelector('#toasty').children.length).toBe(0);
        componentFixture.componentInstance.toasts.push(toast1);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(1);
        expect(element.querySelector('#toasty').children[0].tagName).toBe('NG2-TOAST');
    });
    it('should clear specific toast by id', function () {
        var element = componentFixture.nativeElement;
        componentFixture.componentInstance.toasts.push(toast1);
        componentFixture.componentInstance.toasts.push(toast2);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(2);
        componentFixture.componentInstance.clear(1);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(1);
    });
    it('should clear all toasts', function () {
        var element = componentFixture.nativeElement;
        componentFixture.componentInstance.toasts.push(toast1);
        componentFixture.componentInstance.toasts.push(toast2);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(2);
        componentFixture.componentInstance.clearAll();
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(0);
    });
    it('should call onRemove when clear specific toast by id', function () {
        var element = componentFixture.nativeElement;
        toast1.onRemove = function (toast) {
            expect(toast).toBe(toast1);
        };
        componentFixture.componentInstance.toasts.push(toast1);
        componentFixture.componentInstance.toasts.push(toast2);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(2);
        componentFixture.componentInstance.clear(1);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(1);
    });
    it('should clear toast by closeToast method', function () {
        var element = componentFixture.nativeElement;
        toast1.onRemove = function (toast) {
            expect(toast).toBe(toast1);
        };
        componentFixture.componentInstance.toasts.push(toast1);
        componentFixture.componentInstance.toasts.push(toast2);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(2);
        componentFixture.componentInstance.closeToast(toast1);
        componentFixture.detectChanges();
        expect(element.querySelector('#toasty').children.length).toBe(1);
    });
    // describe('work with timeout', () => {
    //     function createComponent(tcb: TestComponentBuilder): Promise<ComponentFixture> {
    //         return tcb.createAsync(ToastyContainer).then((cf:ComponentFixture) => {
    //             cf.detectChanges();
    //             return cf;
    //         });
    //     }
    //     it('should close toast after timeout', inject([TestComponentBuilder],
    //         fakeAsync((tcb:TestComponentBuilder) => {
    //             createComponent(tcb).then((fixture:ComponentFixture) => {
    //                 const element = fixture.nativeElement;
    //                 toast1.onRemove = (toast:Toast) => {
    //                     expect(toast).toBe(toast1);
    //                 };
    //                 toast1.timeout = 1000;
    //                 fixture.componentInstance.toasts.push(toast1);
    //                 fixture.componentInstance.toasts.push(toast2);
    //                 fixture.detectChanges();
    //                 expect(element.querySelector('#toasty').children.length).toBe(2);
    //                 tick();
    //                 fixture.detectChanges();
    //                 expect(element.querySelector('#toasty').children.length).toBe(1);
    //             });
    //         })
    //     ));
    // });
});
