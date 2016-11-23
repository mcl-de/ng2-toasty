import { TestBed } from '@angular/core/testing';
import { ToastComponent } from '../src/toast.component';
describe('ToastComponent', function () {
    var componentFixture;
    var toast = {
        id: 1,
        title: null,
        msg: null,
        showClose: false,
        type: 'toasty-type-default',
        theme: 'toasty-theme-default',
        timeout: null,
        onAdd: null,
        onRemove: null,
        onClick: null
    };
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [ToastComponent]
        });
        TestBed.compileComponents();
    });
    beforeEach(function () {
        componentFixture = TestBed.createComponent(ToastComponent);
        componentFixture.componentInstance.toast = toast;
        componentFixture.detectChanges();
    });
    it('should be defined', function () {
        var element = componentFixture.elementRef.nativeElement;
        expect(element.querySelector('.toast')).toBeDefined();
    });
    it('should has all classes', function () {
        var element = componentFixture.nativeElement;
        var className = element.querySelector('.toast').className;
        expect(className.indexOf('toast')).toBeGreaterThan(-1);
        expect(className.indexOf('toasty-type-default')).toBeGreaterThan(-1);
        expect(className.indexOf('toasty-theme-default')).toBeGreaterThan(-1);
    });
    it('should show close button', function () {
        var element = componentFixture.nativeElement;
        expect(element.querySelector('.close-button')).toBeNull();
        componentFixture.componentInstance.toast.showClose = true;
        componentFixture.detectChanges();
        expect(element.querySelector('.close-button')).not.toBeNull();
    });
    it('should show only title', function () {
        var element = componentFixture.nativeElement;
        expect(element.querySelector('.toast-text')).toBeNull();
        componentFixture.componentInstance.toast.title = 'title';
        componentFixture.detectChanges();
        expect(element.querySelector('.toast-text')).not.toBeNull();
        expect(element.querySelector('.toast-title')).not.toBeNull();
        expect(element.querySelector('.toast-title').innerHTML).toBe('title');
        expect(element.querySelector('.toast-msg')).toBeNull();
        componentFixture.componentInstance.toast.title = null;
        componentFixture.componentInstance.toast.msg = null;
    });
    it('should show only message', function () {
        var element = componentFixture.nativeElement;
        expect(element.querySelector('.toast-text')).toBeNull();
        componentFixture.componentInstance.toast.msg = 'msg';
        componentFixture.detectChanges();
        expect(element.querySelector('.toast-text')).not.toBeNull();
        expect(element.querySelector('.toast-title')).toBeNull();
        expect(element.querySelector('.toast-msg')).not.toBeNull();
        expect(element.querySelector('.toast-msg').innerHTML).toBe('msg');
        componentFixture.componentInstance.toast.title = null;
        componentFixture.componentInstance.toast.msg = null;
    });
    it('should show title and message', function () {
        var element = componentFixture.nativeElement;
        expect(element.querySelector('.toast-text')).toBeNull();
        componentFixture.componentInstance.toast.title = 'title';
        componentFixture.componentInstance.toast.msg = 'msg';
        componentFixture.detectChanges();
        expect(element.querySelector('.toast-text')).not.toBeNull();
        expect(element.querySelector('.toast-title')).not.toBeNull();
        expect(element.querySelector('.toast-title').innerHTML).toBe('title');
        expect(element.querySelector('.toast-msg')).not.toBeNull();
        expect(element.querySelector('.toast-msg').innerHTML).toBe('msg');
        componentFixture.componentInstance.toast.title = null;
        componentFixture.componentInstance.toast.msg = null;
    });
});
//# sourceMappingURL=toast.component.spec.js.map