import{h as Be,a as Ge,b as wt,Q as B}from"./QIcon.df82ddf2.js";import{k as I,H as He,w as S,o as j,g as Q,n as K,l as O,m as V,p as Je,q as bt,t as Ct,c as p,P as St,u as Tt,v as qe,x as Lt,y as le,z as pe,A as Oe,B as ge,C as ke,D as ye,E as te,i as Ze,G as U,I as Ee,r as E,J as xt,h as P,K as et,L as kt,M as tt,N as ie,a as qt,d as Et,O as Ve,Q as we,R as _t,S as q,U as x,f as b,V as H,W as zt,X as De,Y as Pt}from"./index.d57c55f1.js";import{v as Mt,c as We,g as $t,a as Bt}from"./dom.150c7186.js";import{u as Ht}from"./use-quasar.b5f29096.js";import{_ as Ot}from"./plugin-vue_export-helper.21dcd24c.js";function Vt(e,o,l){let i;function t(){i!==void 0&&(He.remove(i),i=void 0)}return I(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>l.value===!0,handler:o},He.add(i)}}}const Dt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Wt=["beforeShow","show","beforeHide","hide"];function At({showing:e,canShow:o,hideOnRouteChange:l,handleShow:i,handleHide:t,processOnMount:n}){const s=Q(),{props:c,emit:d,proxy:u}=s;let a;function C(f){e.value===!0?m(f):w(f)}function w(f){if(c.disable===!0||f!==void 0&&f.qAnchorHandled===!0||o!==void 0&&o(f)!==!0)return;const M=c["onUpdate:modelValue"]!==void 0;M===!0&&(d("update:modelValue",!0),a=f,K(()=>{a===f&&(a=void 0)})),(c.modelValue===null||M===!1)&&g(f)}function g(f){e.value!==!0&&(e.value=!0,d("beforeShow",f),i!==void 0?i(f):d("show",f))}function m(f){if(c.disable===!0)return;const M=c["onUpdate:modelValue"]!==void 0;M===!0&&(d("update:modelValue",!1),a=f,K(()=>{a===f&&(a=void 0)})),(c.modelValue===null||M===!1)&&_(f)}function _(f){e.value!==!1&&(e.value=!1,d("beforeHide",f),t!==void 0?t(f):d("hide",f))}function L(f){c.disable===!0&&f===!0?c["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):f===!0!==e.value&&(f===!0?g:_)(a)}S(()=>c.modelValue,L),l!==void 0&&Mt(s)===!0&&S(()=>u.$route.fullPath,()=>{l.value===!0&&e.value===!0&&m()}),n===!0&&j(()=>{L(c.modelValue)});const y={show:w,hide:m,toggle:C};return Object.assign(u,y),y}const Rt=[Element,String],Ft=[null,document,document.body,document.scrollingElement,document.documentElement];function Nt(e,o){let l=$t(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ft.includes(l)?window:l}function ot(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function nt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function be(){if(re!==void 0)return re;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return l===i&&(i=o.clientWidth),o.remove(),re=l-i,re}function Qt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,Ce,Se,ee,Te=!1,Ae,Re,Fe,N=null;function Xt(e){Yt(e)&&Je(e)}function Yt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=bt(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||i?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const s=o[n];if(Qt(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ne(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Te!==!0&&(Te=!0,requestAnimationFrame(()=>{Te=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(ee===void 0||o!==window.innerHeight)&&(ee=l-o,document.scrollingElement.scrollTop=i),i>ee&&(document.scrollingElement.scrollTop-=Math.ceil((i-ee)/8))}))}function Qe(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);Ce=nt(window),Se=ot(window),Ae=o.style.left,Re=o.style.top,Fe=window.location.href,o.style.left=`-${Ce}px`,o.style.top=`-${Se}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,V.passiveCapture),window.visualViewport.addEventListener("scroll",ae,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ne,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",Xt,V.notPassive),e==="remove"&&(O.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ae,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,V.passiveCapture)):window.removeEventListener("scroll",Ne,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ae,o.style.top=Re,window.location.href===Fe&&window.scrollTo(Ce,Se),ee=void 0)}function Ut(e){let o="add";if(e===!0){if(Z++,N!==null){clearTimeout(N),N=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){N!==null&&clearTimeout(N),N=setTimeout(()=>{Qe(o),N=null},100);return}}Qe(o)}function It(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Ut(o))}}}function jt(){let e=null;const o=Q();function l(){e!==null&&(clearTimeout(e),e=null)}return Ct(l),I(l),{removeTimeout:l,registerTimeout(i,t){l(),Bt(o)===!1&&(e=setTimeout(()=>{e=null,i()},t))}}}const Kt={dark:{type:Boolean,default:null}};function Gt(e,o){return p(()=>e.dark===null?o.dark.isActive:e.dark)}const _e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Jt=Object.keys(_e);_e.all=!0;function Xe(e){const o={};for(const l of Jt)e[l]===!0&&(o[l]=!0);return Object.keys(o).length===0?_e:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Zt=["INPUT","TEXTAREA"];function Ye(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Zt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function eo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),St.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,o,l){const i=ke(e);let t,n=i.left-o.event.x,s=i.top-o.event.y,c=Math.abs(n),d=Math.abs(s);const u=o.direction;u.horizontal===!0&&u.vertical!==!0?t=n<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",c>d&&(u.left===!0&&n<0?t="left":u.right===!0&&n>0&&(t="right"))):u.down===!0&&s>0?(t="down",c>d&&(u.left===!0&&n<0?t="left":u.right===!0&&n>0&&(t="right"))):u.left===!0&&n<0?(t="left",c<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&n>0&&(t="right",c<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=n,c=0,n=0):(i.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:c,y:d},offset:{x:n,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let to=0;var xe=Tt({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&O.has.touch!==!0)return;function i(n,s){l.mouse===!0&&s===!0?Je(n):(l.stop===!0&&ge(n),l.prevent===!0&&Oe(n))}const t={uid:"qvtp_"+to++,handler:o,modifiers:l,direction:Xe(l),noop:qe,mouseStart(n){Ye(n,t)&&Lt(n)&&(le(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Ye(n,t)){const s=n.target;le(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(O.is.firefox===!0&&pe(e,!0),t.lastEvt=n,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Oe(u),n.cancelBubble===!0&&ge(u),Object.assign(u,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:u}}ge(n)}const{left:c,top:d}=ke(n);t.event={x:c,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:d}},move(n){if(t.event===void 0)return;const s=ke(n),c=s.left-t.event.x,d=s.top-t.event.y;if(c===0&&d===0)return;t.lastEvt=n;const u=t.event.mouse===!0,a=()=>{i(n,u);let g;l.preserveCursor!==!0&&l.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),eo(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),u===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{_(),m()},50):_()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(n,t.event.mouse);const{payload:g,synthetic:m}=Le(n,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=m===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(n);return}const C=Math.abs(c),w=Math.abs(d);C!==w&&(t.direction.horizontal===!0&&C>w||t.direction.vertical===!0&&C<w||t.direction.up===!0&&C<w&&d<0||t.direction.down===!0&&C<w&&d>0||t.direction.left===!0&&C>w&&c<0||t.direction.right===!0&&C>w&&c>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(ye(t,"temp"),O.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(n===void 0?t.lastEvt:n,t).payload);const{payload:c}=Le(n===void 0?t.lastEvt:n,t,!0),d=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";le(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}O.has.touch===!0&&le(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Xe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ye(o,"main"),ye(o,"temp"),O.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function se(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const Ue=150;var oo=te({name:"QDrawer",inheritAttrs:!1,props:{...Dt,...Kt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Wt,"onLayout","miniState"],setup(e,{slots:o,emit:l,attrs:i}){const t=Q(),{proxy:{$q:n}}=t,s=Gt(e,n),{preventBodyScroll:c}=It(),{registerTimeout:d,removeTimeout:u}=jt(),a=Ze(Ee,U);if(a===U)return console.error("QDrawer needs to be child of QLayout"),U;let C,w=null,g;const m=E(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),_=p(()=>e.mini===!0&&m.value!==!0),L=p(()=>_.value===!0?e.miniWidth:e.width),y=E(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),f=p(()=>e.persistent!==!0&&(m.value===!0||it.value===!0));function M(r,v){if(R(),r!==!1&&a.animate(),$(0),m.value===!0){const k=a.instances[oe.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),W(1),a.isContainer.value!==!0&&c(!0)}else W(0),r!==!1&&ve(!1);d(()=>{r!==!1&&ve(!0),v!==!0&&l("show",r)},Ue)}function h(r,v){G(),r!==!1&&a.animate(),W(0),$(X.value*L.value),me(),v!==!0?d(()=>{l("hide",r)},Ue):u()}const{show:T,hide:z}=At({showing:y,hideOnRouteChange:f,handleShow:M,handleHide:h}),{addToHistory:R,removeFromHistory:G}=Vt(y,z,f),F={belowBreakpoint:m,hide:z},D=p(()=>e.side==="right"),X=p(()=>(n.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),ze=E(0),Y=E(!1),ue=E(!1),Pe=E(L.value*X.value),oe=p(()=>D.value===!0?"left":"right"),de=p(()=>y.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ce=p(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(D.value?"R":"L")!==-1||n.platform.is.ios===!0&&a.isContainer.value===!0),J=p(()=>e.overlay===!1&&y.value===!0&&m.value===!1),it=p(()=>e.overlay===!0&&y.value===!0&&m.value===!1),rt=p(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&Y.value===!1?" hidden":"")),at=p(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),Me=p(()=>D.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),st=p(()=>D.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ut=p(()=>{const r={};return a.header.space===!0&&Me.value===!1&&(ce.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&st.value===!1&&(ce.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),dt=p(()=>{const r={width:`${L.value}px`,transform:`translateX(${Pe.value}px)`};return m.value===!0?r:Object.assign(r,ut.value)}),ct=p(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ft=p(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ce.value===!0||J.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Me.value===!0?" q-drawer--top-padding":""))),vt=p(()=>{const r=n.lang.rtl===!0?e.side:oe.value;return[[xe,gt,void 0,{[r]:!0,mouse:!0}]]}),mt=p(()=>{const r=n.lang.rtl===!0?oe.value:e.side;return[[xe,$e,void 0,{[r]:!0,mouse:!0}]]}),ht=p(()=>{const r=n.lang.rtl===!0?oe.value:e.side;return[[xe,$e,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){yt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}S(m,r=>{r===!0?(C=y.value,y.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(y.value===!0?($(0),W(0),me()):T(!1))}),S(()=>e.side,(r,v)=>{a.instances[v]===F&&(a.instances[v]=void 0,a[v].space=!1,a[v].offset=0),a.instances[r]=F,a[r].size=L.value,a[r].space=J.value,a[r].offset=de.value}),S(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),S(()=>e.behavior+e.breakpoint,fe),S(a.isContainer,r=>{y.value===!0&&c(r!==!0),r===!0&&fe()}),S(a.scrollbarWidth,()=>{$(y.value===!0?0:void 0)}),S(de,r=>{A("offset",r)}),S(J,r=>{l("onLayout",r),A("space",r)}),S(D,()=>{$()}),S(L,r=>{$(),he(e.miniToOverlay,r)}),S(()=>e.miniToOverlay,r=>{he(r,L.value)}),S(()=>n.lang.rtl,()=>{$()}),S(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(pt(),a.animate())}),S(_,r=>{l("miniState",r)});function $(r){r===void 0?K(()=>{r=y.value===!0?0:L.value,$(X.value*r)}):(a.isContainer.value===!0&&D.value===!0&&(m.value===!0||Math.abs(r)===L.value)&&(r+=X.value*a.scrollbarWidth.value),Pe.value=r)}function W(r){ze.value=r}function ve(r){const v=r===!0?"remove":a.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function pt(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,w=setTimeout(()=>{w=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function gt(r){if(y.value!==!1)return;const v=L.value,k=se(r.distance.x,0,v);if(r.isFinal===!0){k>=Math.min(75,v)===!0?T():(a.animate(),W(0),$(X.value*v)),Y.value=!1;return}$((n.lang.rtl===!0?D.value!==!0:D.value)?Math.max(v-k,0):Math.min(0,k-v)),W(se(k/v,0,1)),r.isFirst===!0&&(Y.value=!0)}function $e(r){if(y.value!==!0)return;const v=L.value,k=r.direction===e.side,ne=(n.lang.rtl===!0?k!==!0:k)?se(r.distance.x,0,v):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,v)===!0?(a.animate(),W(1),$(0)):z(),Y.value=!1;return}$(X.value*ne),W(se(1-ne/v,0,1)),r.isFirst===!0&&(Y.value=!0)}function me(){c(!1),ve(!0)}function A(r,v){a.update(e.side,r,v)}function yt(r,v){r.value!==v&&(r.value=v)}function he(r,v){A("size",r===!0?e.miniWidth:v)}return a.instances[e.side]=F,he(e.miniToOverlay,L.value),A("space",J.value),A("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),j(()=>{l("onLayout",J.value),l("miniState",_.value),C=e.showIfAbove===!0;const r=()=>{(y.value===!0?M:h)(!1,!0)};if(a.totalWidth.value!==0){K(r);return}g=S(a.totalWidth,()=>{g(),g=void 0,y.value===!1&&e.showIfAbove===!0&&m.value===!1?T(!1):r()})}),I(()=>{g!==void 0&&g(),w!==null&&(clearTimeout(w),w=null),y.value===!0&&me(),a.instances[e.side]===F&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];m.value===!0&&(e.noSwipeOpen===!1&&r.push(xt(P("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),vt.value)),r.push(Be("div",{ref:"backdrop",class:rt.value,style:at.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>ht.value)));const v=_.value===!0&&o.mini!==void 0,k=[P("div",{...i,key:""+v,class:[ct.value,i.class]},v===!0?o.mini():Ge(o.default))];return e.elevated===!0&&y.value===!0&&k.push(P("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Be("aside",{ref:"content",class:ft.value,style:dt.value},k,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>mt.value)),P("div",{class:"q-drawer-container"},r)}}}),no=te({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=Q(),i=Ze(Ee,U);if(i===U)return console.error("QPageContainer needs to be child of QLayout"),U;et(kt,!0);const t=p(()=>{const n={};return i.header.space===!0&&(n.paddingTop=`${i.header.size}px`),i.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(n.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),n});return()=>P("div",{class:"q-page-container",style:t.value},Ge(o.default))}});const{passive:Ie}=V,lo=["both","horizontal","vertical"];var io=te({name:"QScrollObserver",props:{axis:{type:String,validator:e=>lo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Rt},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,n;S(()=>e.scrollTarget,()=>{d(),c()});function s(){i!==null&&i();const C=Math.max(0,ot(t)),w=nt(t),g={top:C-l.position.top,left:w-l.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const m=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";l.position={top:C,left:w},l.directionChanged=l.direction!==m,l.delta=g,l.directionChanged===!0&&(l.direction=m,l.inflectionPoint=l.position),o("scroll",{...l})}function c(){t=Nt(n,e.scrollTarget),t.addEventListener("scroll",u,Ie),u(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",u,Ie),t=void 0)}function u(C){if(C===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[w,g]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{g(w),i=null}}}const{proxy:a}=Q();return S(()=>a.$q.lang.rtl,s),j(()=>{n=a.$el.parentNode,c()}),I(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:u,getPosition:()=>l}),qe}});function ro(){const e=E(!tt.value);return e.value===!1&&j(()=>{e.value=!0}),{isHydrated:e}}const lt=typeof ResizeObserver!="undefined",je=lt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ke=te({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,i,t={width:-1,height:-1};function n(d){d===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),i){const{offsetWidth:d,offsetHeight:u}=i;(d!==t.width||u!==t.height)&&(t={width:d,height:u},o("resize",t))}}const{proxy:c}=Q();if(c.trigger=n,lt===!0){let d;const u=a=>{i=c.$el.parentNode,i?(d=new ResizeObserver(n),d.observe(i),s()):a!==!0&&K(()=>{u(!0)})};return j(()=>{u()}),I(()=>{l!==null&&clearTimeout(l),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),qe}else{let a=function(){l!==null&&(clearTimeout(l),l=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",n,V.passive),u=void 0)},C=function(){a(),i&&i.contentDocument&&(u=i.contentDocument.defaultView,u.addEventListener("resize",n,V.passive),s())};const{isHydrated:d}=ro();let u;return j(()=>{K(()=>{i=c.$el,i&&C()})}),I(a),()=>{if(d.value===!0)return P("object",{class:"q--avoid-card-border",style:je.style,tabindex:-1,type:"text/html",data:je.url,"aria-hidden":"true",onLoad:C})}}}}),ao=te({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=Q(),t=E(null),n=E(i.screen.height),s=E(e.container===!0?0:i.screen.width),c=E({position:0,direction:"down",inflectionPoint:0}),d=E(0),u=E(tt.value===!0?0:be()),a=p(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=p(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),w=p(()=>u.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),g=p(()=>u.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function m(h){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};c.value=T,e.onScroll!==void 0&&l("scroll",T)}}function _(h){const{height:T,width:z}=h;let R=!1;n.value!==T&&(R=!0,n.value=T,e.onScrollHeight!==void 0&&l("scrollHeight",T),y()),s.value!==z&&(R=!0,s.value=z),R===!0&&e.onResize!==void 0&&l("resize",h)}function L({height:h}){d.value!==h&&(d.value=h,y())}function y(){if(e.container===!0){const h=n.value>d.value?be():0;u.value!==h&&(u.value=h)}}let f=null;const M={instances:{},view:p(()=>e.view),isContainer:p(()=>e.container),rootRef:t,height:n,containerHeight:d,scrollbarWidth:u,totalWidth:p(()=>s.value+u.value),rows:p(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:c,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,T,z){M[h][T]=z}};if(et(Ee,M),be()>0){let z=function(){h=null,T.classList.remove("hide-scrollbar")},R=function(){if(h===null){if(T.scrollHeight>i.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(z,300)},G=function(F){h!==null&&F==="remove"&&(clearTimeout(h),z()),window[`${F}EventListener`]("resize",R)},h=null;const T=document.body;S(()=>e.container!==!0?"add":"remove",G),e.container!==!0&&G("add"),qt(()=>{G("remove")})}return()=>{const h=wt(o.default,[P(io,{onScroll:m}),P(Ke,{onResize:_})]),T=P("div",{class:a.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},h);return e.container===!0?P("div",{class:"q-layout-container overflow-hidden",ref:t},[P(Ke,{onResize:L}),P("div",{class:"absolute-full",style:w.value},[P("div",{class:"scroll",style:g.value},[T])])]):T}}});const so={class:"logo"},uo={key:0},co={class:"menu"},fo={key:1},vo={class:"menu menu__drawer"},mo=Et({__name:"MainLayout",setup(e){const o=Ht(),l=E(!1),i=()=>{l.value=!l.value};return(t,n)=>{const s=Ve("router-link"),c=Ve("router-view");return we(),_t(ao,{class:"glb"},{default:q(()=>[x("header",null,[x("h1",so,[b(s,{class:"logo-text",to:"/"},{default:q(()=>n[1]||(n[1]=[H("Buckle"),x("span",{class:"logo-second"},"UP",-1)])),_:1})]),zt(o).screen.lt.md?(we(),De("nav",fo,[b(B,{class:Pt(["hamburger",l.value?"text-accent":""]),name:"menu",onClick:i},null,8,["class"]),b(oo,{side:"right",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),class:"drawer bg-primary"},{default:q(()=>[x("ul",vo,[x("li",null,[b(B,{class:"icon",name:"home"}),b(s,{to:"/",class:"subpage-link"},{default:q(()=>n[7]||(n[7]=[H("Home")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"star"}),b(s,{to:"classes",class:"subpage-link"},{default:q(()=>n[8]||(n[8]=[H("Classes")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"credit_card"}),b(s,{to:"membership",class:"subpage-link"},{default:q(()=>n[9]||(n[9]=[H("Membership")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"fitness_center"}),b(s,{to:"showcase",class:"subpage-link"},{default:q(()=>n[10]||(n[10]=[H("Showcase")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"pin_drop"}),b(s,{to:"location",class:"subpage-link"},{default:q(()=>n[11]||(n[11]=[H("Location")])),_:1})])])]),_:1},8,["modelValue"])])):(we(),De("nav",uo,[x("ul",co,[x("li",null,[b(B,{class:"icon",name:"home"}),b(s,{to:"/",class:"subpage-link"},{default:q(()=>n[2]||(n[2]=[H("Home")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"star"}),b(s,{to:"classes",class:"subpage-link"},{default:q(()=>n[3]||(n[3]=[H("Classes")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"credit_card"}),b(s,{to:"membership",class:"subpage-link"},{default:q(()=>n[4]||(n[4]=[H("Membership")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"fitness_center"}),b(s,{to:"showcase",class:"subpage-link"},{default:q(()=>n[5]||(n[5]=[H("Showcase")])),_:1})]),x("li",null,[b(B,{class:"icon",name:"pin_drop"}),b(s,{to:"location",class:"subpage-link"},{default:q(()=>n[6]||(n[6]=[H("Location")])),_:1})])])]))]),b(no,{class:"content"},{default:q(()=>[b(c)]),_:1}),n[12]||(n[12]=x("footer",null,null,-1))]),_:1})}}});var Co=Ot(mo,[["__scopeId","data-v-5b884aa3"]]);export{Co as default};
