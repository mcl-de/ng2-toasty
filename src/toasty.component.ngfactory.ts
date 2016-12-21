/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './toasty.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './toasty.service';
import * as import10 from '../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from './toast.component';
import * as import20 from './toast.component.ngfactory';
export class Wrapper_ToastyComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ToastyComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.ToastyComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_position(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.position = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ToastyComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ToastyComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ToastyComponent>;
  _ToastyComponent_0_3:Wrapper_ToastyComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ToastyComponent_Host0,renderType_ToastyComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng2-toasty',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ToastyComponent0(this.viewUtils,this,0,this._el_0);
    this._ToastyComponent_0_3 = new Wrapper_ToastyComponent(this.injectorGet(import9.ToastyConfig,this.parentIndex),this.injectorGet(import9.ToastyService,this.parentIndex));
    this.compView_0.create(this._ToastyComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ToastyComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ToastyComponent) && (0 === requestNodeIndex))) { return this._ToastyComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ToastyComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ToastyComponentNgFactory:import8.ComponentFactory<import0.ToastyComponent> = new import8.ComponentFactory<import0.ToastyComponent>('ng2-toasty',View_ToastyComponent_Host0,import0.ToastyComponent);
const styles_ToastyComponent:any[] = ([] as any[]);
var renderType_ToastyComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_ToastyComponent,{});
export class View_ToastyComponent0 extends import2.AppView<import0.ToastyComponent> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import10.Wrapper_NgClass;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import11.ViewContainer;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import12.Wrapper_NgFor;
  _text_4:any;
  _arr_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ToastyComponent0,renderType_ToastyComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._arr_9 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'id','toasty'),(null as any));
    this._NgClass_1_3 = new import10.Wrapper_NgClass(this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import11.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import16.TemplateRef_(this,3,this._anchor_3);
    this._NgFor_3_6 = new import12.Wrapper_NgFor(this._vc_3.vcRef,this._TemplateRef_3_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import17.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    if (((token === import18.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_9(this.context.position);
    this._NgClass_1_3.check_ngClass(currVal_1_0_0,throwOnChange,false);
    this._NgClass_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = this.context.toasts;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    this._NgFor_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_ToastyComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}
class View_ToastyComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import19.ToastComponent>;
  _ToastComponent_0_3:import20.Wrapper_ToastComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_ToastyComponent1,renderType_ToastyComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ng2-toast',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import20.View_ToastComponent0(this.viewUtils,this,0,this._el_0);
    this._ToastComponent_0_3 = new import20.Wrapper_ToastComponent();
    this.compView_0.create(this._ToastComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'closeToast',(null as any)),this.eventHandler(this.handleEvent_0));
    this._ToastComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.ToastComponent) && (0 === requestNodeIndex))) { return this._ToastComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._ToastComponent_0_3.check_toast(currVal_0_0_0,throwOnChange,false);
    this._ToastComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._ToastComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'closeToast')) {
      const pd_sub_0:any = ((<any>this.parentView.context.closeToast(this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}