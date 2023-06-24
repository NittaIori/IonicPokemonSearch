"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8577],{8577:(ge,Q,f)=>{f.r(Q),f.d(Q,{ion_modal:()=>me});var A=f(5861),h=f(6953),T=f(4435),$=f(9439),u=f(544),z=f(7690),x=f(7643),l=f(645),b=f(4237),S=f(8354),Y=f(7876),F=f(2624),p=f(6506),ie=f(278),se=f(8077),O=(f(6884),f(4587),(()=>((O=O||{}).Dark="DARK",O.Light="LIGHT",O.Default="DEFAULT",O))());const Z={getEngine(){var e;return(null===(e=null==x.w?void 0:x.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("StatusBar"))&&(null==x.w?void 0:x.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var e;return!(null===(e=null==x.w?void 0:x.w.Capacitor)||void 0===e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(e=(0,A.Z)(function*(){const t=this.getEngine();if(!t)return O.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},te=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},ae=()=>{!x.w||x.w.innerWidth>=768||!Z.supportsDefaultStatusBarStyle()||Z.setStyle({style:O.Dark})},de=(e=O.Default)=>{!x.w||x.w.innerWidth>=768||!Z.supportsDefaultStatusBarStyle()||Z.setStyle({style:e})},le=function(){var e=(0,A.Z)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,l.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,r){return e.apply(this,arguments)}}(),ne=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,ce=(e,t)=>(0,u.l)(400,e/Math.abs(1.1*t),500),pe=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,r=void 0===n||n<t,i=r?`calc(var(--backdrop-opacity) * ${t})`:"0",o=(0,p.c)("backdropAnimation").fromTo("opacity",0,i);return r&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:o}},he=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,r=`calc(var(--backdrop-opacity) * ${te(t,n)})`,i=[{offset:0,opacity:r},{offset:1,opacity:0}],o=[{offset:0,opacity:r},{offset:n,opacity:0},{offset:1,opacity:0}],a=(0,p.c)("backdropAnimation").keyframes(0!==n?o:i);return{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},fe=(e,t)=>{const{presentingEl:n,currentBreakpoint:r}=t,i=(0,u.g)(e),{wrapperAnimation:o,backdropAnimation:a}=void 0!==r?pe(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,p.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(n){const d=window.innerWidth<768,y="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,v=(0,u.g)(n),B=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),w=document.body;if(d){const E=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",_=`translateY(${y?"-10px":E}) scale(0.93)`;B.afterStyles({transform:_}).beforeAddWrite(()=>w.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:_,borderRadius:"10px 10px 0 0"}]),s.addAnimation(B)}else if(s.addAnimation(a),y){const k=`translateY(-10px) scale(${y?.93:1})`;B.afterStyles({transform:k}).addElement(v.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:k}]);const c=(0,p.c)().afterStyles({transform:k}).addElement(v.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:k}]);s.addAnimation([B,c])}else o.fromTo("opacity","0","1")}else s.addAnimation(a);return s},ue=(e,t,n=500)=>{const{presentingEl:r,currentBreakpoint:i}=t,o=(0,u.g)(e),{wrapperAnimation:a,backdropAnimation:s}=void 0!==i?he(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,p.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(a);if(r){const y=window.innerWidth<768,v="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,B=(0,u.g)(r),w=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(k=>{1===k&&(r.style.setProperty("overflow",""),Array.from(E.querySelectorAll("ion-modal")).filter(_=>void 0!==_.presentingElement).length<=1&&E.style.setProperty("background-color",""))}),E=document.body;if(y){const k=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",N=`translateY(${v?"-10px":k}) scale(0.93)`;w.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:N,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(w)}else if(d.addAnimation(s),v){const c=`translateY(-10px) scale(${v?.93:1})`;w.addElement(B.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const _=(0,p.c)().addElement(B.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([w,_])}else a.fromTo("opacity","1","0")}else d.addAnimation(s);return d},ve=(e,t)=>{const{currentBreakpoint:n}=t,r=(0,u.g)(e),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?pe(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,p.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])},Se=(e,t)=>{const{currentBreakpoint:n}=t,r=(0,u.g)(e),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?he(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,p.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},me=class{constructor(e){(0,h.r)(this,e),this.didPresent=(0,h.d)(this,"ionModalDidPresent",7),this.willPresent=(0,h.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,h.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,h.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,h.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,h.d)(this,"didPresent",7),this.willPresentShorthand=(0,h.d)(this,"willPresent",7),this.willDismissShorthand=(0,h.d)(this,"willDismiss",7),this.didDismissShorthand=(0,h.d)(this,"didDismiss",7),this.ionMount=(0,h.d)(this,"ionMount",7),this.triggerController=(0,l.e)(),this.coreDelegate=(0,$.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,l.B)},this.onLifecycle=t=>{const n=this.usersElement,r=Ae[t.type];if(n&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,l.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,el:n}=this,r=this.isSheetModal=void 0!==e&&void 0!==t;this.inheritedAttributes=(0,u.k)(n,["aria-label","role"]),r&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,z.p)("Your breakpoints array must include the initialBreakpoint value."),(0,l.k)(n)}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,A.Z)(function*(){const{canDismiss:r}=n;return"function"==typeof r?r(e,t):r})()}present(){var e=this;return(0,A.Z)(function*(){if(e.presented)return;const{presentingElement:t,el:n}=e;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const{inline:r,delegate:i}=e.getDelegate(!0);e.usersElement=yield(0,$.a)(i,n,e.component,["ion-page"],e.componentProps,r),e.ionMount.emit(),(0,u.m)(n)?yield(0,S.e)(e.usersElement):e.keepContentsMounted||(yield(0,S.w)()),(0,h.w)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,l.f)(e,"modalEnter",fe,ve,{presentingEl:t,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,u.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(F.KEYBOARD_DID_OPEN,e.keyboardOpenCallback));const o=void 0!==t;o&&"ios"===(0,Y.b)(e)&&(e.statusBarStyle=yield Z.getStyle(),ae()),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():o&&e.initSwipeToClose(),e.currentTransition=void 0})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,Y.b)(this))return;const{el:n}=this,r=this.leaveAnimation||Y.c.get("modalLeave",ue),i=this.animation=r(n,{presentingEl:this.presentingElement});if(!(0,T.a)(n))return void(0,T.p)(n);const a=null!==(t=this.statusBarStyle)&&void 0!==t?t:O.Default;this.gesture=((e,t,n,r)=>{const o=e.offsetHeight;let a=!1,s=!1,d=null,y=null,B=!0,w=0;const V=(0,se.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:g=>{const m=g.event.target;return null===m||!m.closest||(d=(0,T.f)(m),d?(y=(0,T.i)(d)?(0,u.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===y.scrollTop):null===m.closest("ion-footer"))},onStart:g=>{const{deltaY:m}=g;B=!d||!(0,T.i)(d)||d.scrollY,s=void 0!==e.canDismiss&&!0!==e.canDismiss,m>0&&d&&(0,T.d)(d),t.progressStart(!0,a?1:0)},onMove:g=>{const{deltaY:m}=g;m>0&&d&&(0,T.d)(d);const C=g.deltaY/o,I=C>=0&&s,L=I?.2:.9999,G=I?ne(C/L):C,M=(0,u.l)(1e-4,G,L);t.progressStep(M),M>=.5&&w<.5?de(n):M<.5&&w>=.5&&ae(),w=M},onEnd:g=>{const m=g.velocityY,C=g.deltaY/o,I=C>=0&&s,L=I?.2:.9999,G=I?ne(C/L):C,M=(0,u.l)(1e-4,G,L),W=!I&&(g.deltaY+1e3*m)/o>=.5;let J=W?-.001:.001;W?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),J+=(0,ie.g)([0,0],[.32,.72],[0,1],[1,1],M)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),J+=(0,ie.g)([0,0],[1,0],[.68,.28],[1,1],M)[0]);const q=ce(W?C*o:(1-M)*o,m);a=W,V.enable(!1),d&&(0,T.r)(d,B),t.onFinish(()=>{W||V.enable(!0)}).progressEnd(W?1:0,J,q),I&&M>L/4?le(e,t):W&&r()}});return V})(n,i,a,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,A.Z)(function*(){yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const r=this.enterAnimation||Y.c.get("modalEnter",fe),i=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:o,moveSheetToBreakpoint:a}=((e,t,n,r,i,o,a=[],s,d,y)=>{const w={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},E=e.querySelector("ion-content"),k=n.clientHeight;let c=r,_=0,N=!1;const g=o.childAnimations.find(D=>"wrapperAnimation"===D.id),m=o.childAnimations.find(D=>"backdropAnimation"===D.id),C=a[a.length-1],I=a[0],L=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},G=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};g&&m&&(g.keyframes([...w.WRAPPER_KEYFRAMES]),m.keyframes([...w.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-c),c>i?L():G()),E&&c!==C&&(E.scrollY=!1);const q=D=>{const{breakpoint:j,canDismiss:R,breakpointOffset:K}=D,U=R&&0===j,P=U?c:j,H=0!==P;return c=0,g&&m&&(g.keyframes([{offset:0,transform:`translateY(${100*K}%)`},{offset:1,transform:`translateY(${100*(1-P)}%)`}]),m.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${te(1-K,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${te(P,i)})`}]),o.progressStep(0)),ee.enable(!1),U?le(e,o):H||d(),new Promise(oe=>{o.onFinish(()=>{H?g&&m?(0,u.r)(()=>{g.keyframes([...w.WRAPPER_KEYFRAMES]),m.keyframes([...w.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-P),c=P,y(c),E&&c===a[a.length-1]&&(E.scrollY=!0),c>i?L():G(),ee.enable(!0),oe()}):(ee.enable(!0),oe()):oe()},{oneTimeCallback:!0}).progressEnd(1,0,500)})},ee=(0,se.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:D=>{const j=D.event.target.closest("ion-content");return c=s(),!(1===c&&j)},onStart:()=>{N=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===I,E&&(E.scrollY=!1),(0,u.r)(()=>{e.focus()}),o.progressStart(!0,1-c)},onMove:D=>{const R=a.length>1?1-a[1]:void 0,K=1-c+D.deltaY/k,U=void 0!==R&&K>=R&&N,P=U?.95:.9999,H=U&&void 0!==R?R+ne((K-R)/(P-R)):K;_=(0,u.l)(1e-4,H,P),o.progressStep(_)},onEnd:D=>{const K=c-(D.deltaY+350*D.velocityY)/k,U=a.reduce((P,H)=>Math.abs(H-K)<Math.abs(P-K)?H:P);q({breakpoint:U,breakpointOffset:_,canDismiss:N})}});return{gesture:ee,moveSheetToBreakpoint:q}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var s;return null!==(s=this.currentBreakpoint)&&void 0!==s?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=o,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,A.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,A.Z)(function*(){var r;if(n.gestureAnimationDismissing&&t!==l.G||"handler"!==t&&!(yield n.checkCanDismiss(e,t)))return!1;const{presentingElement:i}=n;void 0!==i&&"ios"===(0,Y.b)(n)&&de(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(F.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0),void 0!==n.currentTransition&&(yield n.currentTransition);const a=l.n.get(n)||[];n.currentTransition=(0,l.g)(n,e,t,"modalLeave",ue,Se,{presentingEl:i,currentBreakpoint:null!==(r=n.currentBreakpoint)&&void 0!==r?r:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});const s=yield n.currentTransition;if(s){const{delegate:d}=n.getDelegate();yield(0,$.d)(d,n.usersElement),(0,h.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),a.forEach(y=>y.destroy())}return n.currentBreakpoint=void 0,n.currentTransition=void 0,n.animation=void 0,s})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,A.Z)(function*(){if(!t.isSheetModal)return void(0,z.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,z.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:r,canDismiss:i,breakpoints:o}=t;n!==e&&r&&(t.sheetTransition=r({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===o[0]}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,A.Z)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,A.Z)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const r=t.filter(s=>0!==s),o=(r.indexOf(n)+1)%r.length,a=r[o];return yield e.setCurrentBreakpoint(a),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:r,handleBehavior:i,inheritedAttributes:o}=this,a=!1!==e&&t,s=(0,Y.b)(this),d=void 0!==n&&"ios"===s,y="cycle"===i;return(0,h.h)(h.H,Object.assign({"no-router":!0,tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[s]:!0,"modal-default":!d&&!t,"modal-card":d,"modal-sheet":t,"overlay-hidden":!0},(0,b.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,h.h)("ion-backdrop",{ref:v=>this.backdropEl=v,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===s&&(0,h.h)("div",{class:"modal-shadow"}),(0,h.h)("div",Object.assign({role:"dialog"},o,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:v=>this.wrapperEl=v}),a&&(0,h.h)("button",{class:"modal-handle",tabIndex:y?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:y?this.onHandleClick:void 0,part:"handle"}),(0,h.h)("slot",null)))}get el(){return(0,h.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Ae={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;me.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},4237:(ge,Q,f)=>{f.d(Q,{c:()=>T,g:()=>u,h:()=>h,o:()=>x});var A=f(5861);const h=(l,b)=>null!==b.closest(l),T=(l,b)=>"string"==typeof l&&l.length>0?Object.assign({"ion-color":!0,[`ion-color-${l}`]:!0},b):b,u=l=>{const b={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(S=>null!=S).map(S=>S.trim()).filter(S=>""!==S):[])(l).forEach(S=>b[S]=!0),b},z=/^[a-z][a-z0-9+\-.]*:/,x=function(){var l=(0,A.Z)(function*(b,S,Y,F){if(null!=b&&"#"!==b[0]&&!z.test(b)){const p=document.querySelector("ion-router");if(p)return null!=S&&S.preventDefault(),p.push(b,Y,F)}return!1});return function(S,Y,F,p){return l.apply(this,arguments)}}()}}]);