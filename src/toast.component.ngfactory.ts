/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './toast.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import12 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/common/src/directives/ng_class';
export class Wrapper_ToastComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ToastComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.ToastComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_toast(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.toast = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.closeToastEvent.subscribe(_eventHandler.bind(view,'closeToast'))); }
  }
}
var renderType_ToastComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ToastComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ToastComponent>;
  _ToastComponent_0_3:Wrapper_ToastComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ToastComponent_Host0,renderType_ToastComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng2-toast',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ToastComponent0(this.viewUtils,this,0,this._el_0);
    this._ToastComponent_0_3 = new Wrapper_ToastComponent();
    this.compView_0.create(this._ToastComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ToastComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ToastComponent) && (0 === requestNodeIndex))) { return this._ToastComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ToastComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ToastComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ToastComponentNgFactory:import7.ComponentFactory<import0.ToastComponent> = new import7.ComponentFactory<import0.ToastComponent>('ng2-toast',View_ToastComponent_Host0,import0.ToastComponent);
const styles_ToastComponent:any[] = ([] as any[]);
var renderType_ToastComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_ToastComponent,{});
export class View_ToastComponent0 extends import2.AppView<import0.ToastComponent> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import8.Wrapper_NgClass;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import9.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import10.Wrapper_NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import9.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import10.Wrapper_NgIf;
  _text_6:any;
  _arr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ToastComponent0,renderType_ToastComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._arr_14 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','toast'),(null as any));
    this._NgClass_1_3 = new import8.Wrapper_NgClass(this.parentView.injectorGet(import11.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import12.KeyValueDiffers,this.parentIndex),new import13.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import9.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import14.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import10.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_5 = new import9.ViewContainer(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import14.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import10.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import15.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import14.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import15.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import16.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = 'toast';
    this._NgClass_1_3.check_klass(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this._arr_14(this.context.toast.type,this.context.toast.theme);
    this._NgClass_1_3.check_ngClass(currVal_1_0_1,throwOnChange,false);
    this._NgClass_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = this.context.toast.showClose;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = (this.context.toast.title || this.context.toast.msg);
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_5.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_ToastComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 5)) { return new View_ToastComponent2(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
}
class View_ToastComponent1 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ToastComponent1,renderType_ToastComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','close-button'),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.close($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_ToastComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import9.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import10.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import9.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import10.Wrapper_NgIf;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import9.ViewContainer;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import10.Wrapper_NgIf;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ToastComponent2,renderType_ToastComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','toast-text'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import9.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import10.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import9.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import14.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import10.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_6 = new import9.ViewContainer(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import14.TemplateRef_(this,6,this._anchor_6);
    this._NgIf_6_6 = new import10.Wrapper_NgIf(this._vc_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import15.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import15.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import14.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import15.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.toast.title;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = (this.parentView.context.toast.title && this.parentView.context.toast.msg);
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    const currVal_6_0_0:any = this.parentView.context.toast.msg;
    this._NgIf_6_6.check_ngIf(currVal_6_0_0,throwOnChange,false);
    this._NgIf_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
    this._vc_6.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_ToastComponent3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_ToastComponent4(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    if ((nodeIndex == 6)) { return new View_ToastComponent5(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    return (null as any);
  }
}
class View_ToastComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ToastComponent3,renderType_ToastComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','toast-title'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.toast.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ToastComponent4 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ToastComponent4,renderType_ToastComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ToastComponent5 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ToastComponent5,renderType_ToastComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','toast-msg'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.parentView.context.toast.msg,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}