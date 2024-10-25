import{c as o,E as J,h,u as te,$ as D,y as ne,D as ae,B as Y,C as re,g as Z,r as I,k as le,a0 as ue,J as ie,p as R,m as oe,A as se,d as ce,Q as de,X as fe,U as K,f as ve}from"./index.d57c55f1.js";import{u as Q,c as me,d as ge,Q as V,b as be}from"./QIcon.df82ddf2.js";import{c as he,v as ye}from"./dom.150c7186.js";const ke={size:{type:[String,Number],default:"1em"},color:String};function pe(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var qe=J({name:"QSpinner",props:{...ke,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=pe(e);return()=>h("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function xe(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function H(e,t,r,n){r.modifiers.stop===!0&&Y(e);const u=r.modifiers.color;let g=r.modifiers.center;g=g===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),S=re(e),{left:y,top:v,width:E,height:l}=t.getBoundingClientRect(),k=Math.sqrt(E*E+l*l),m=k/2,p=`${(E-k)/2}px`,i=g?p:`${S.left-y-m}px`,b=`${(l-k)/2}px`,P=g?b:`${S.top-v-m}px`;d.className="q-ripple__inner",he(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${P},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${u?" text-"+u:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const _=()=>{f.remove(),clearTimeout(B)};r.abort.push(_);let B=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,B=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,B=setTimeout(()=>{f.remove(),r.abort.splice(r.abort.indexOf(_),1)},275)},250)},50)}function F(e,{modifiers:t,value:r,arg:n}){const u=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var Ee=te({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&H(u,e,n,u.qKeyEvent===!0)},keystart:xe(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&D(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&H(u,e,n,!0)},300)};F(n,t),e.__qripple=n,ne(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&F(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ae(t,"main"),delete e._qripple)}});const ee={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Le=Object.keys(ee),$e={align:{type:String,validator:e=>Le.includes(e)}};function Ce(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ee[t]}`})}function U(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Se(e,t){for(const r in t){const n=t[r],u=e[r];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((g,f)=>g!==u[f]))return!1}return!0}function X(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function we(e,t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function _e(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(we(e[r],t[r])===!1)return!1;return!0}const Be={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Pe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=Z(),{props:n,proxy:u,emit:g}=r,f=ye(r),d=o(()=>n.disable!==!0&&n.href!==void 0),S=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=o(()=>S.value===!0?P(n.to):null),v=o(()=>y.value!==null),E=o(()=>d.value===!0||v.value===!0),l=o(()=>n.type==="a"||E.value===!0?"a":n.tag||e||"div"),k=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),m=o(()=>{if(v.value===!1)return-1;const{matched:s}=y.value,{length:q}=s,L=s[q-1];if(L===void 0)return-1;const C=u.$route.matched;if(C.length===0)return-1;const w=C.findIndex(W.bind(null,L));if(w!==-1)return w;const N=U(s[q-2]);return q>1&&U(L)===N&&C[C.length-1].path!==N?C.findIndex(W.bind(null,s[q-2])):w}),p=o(()=>v.value===!0&&m.value!==-1&&Se(u.$route.params,y.value.params)),i=o(()=>p.value===!0&&m.value===u.$route.matched.length-1&&_e(u.$route.params,y.value.params)),b=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function P(s){try{return u.$router.resolve(s)}catch{}return null}function _(s,{returnRouterError:q,to:L=n.to,replace:C=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const w=u.$router[C===!0?"replace":"push"](L);return q===!0?w:w.then(()=>{}).catch(()=>{})}function B(s){if(v.value===!0){const q=L=>_(s,L);g("click",s,q),s.defaultPrevented!==!0&&q()}else g("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:E,linkTag:l,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:b,linkAttrs:k,getLink:P,navigateToRouterLink:_,navigateOnClick:B}}const G={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Re={xs:8,sm:10,md:14,lg:20,xl:24},Te=["button","submit","reset"],Ae=/[^\s]\/[^\s]/,Oe=["flat","outline","push","unelevated"];function Me(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const je={...me,...Be,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Oe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...$e.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Ne={...je,round:Boolean};function ze(e){const t=ge(e,Re),r=Ce(e),{hasRouterLink:n,hasLink:u,linkTag:g,linkAttrs:f,navigateOnClick:d}=Pe({fallbackTag:"button"}),S=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in G?G[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),y=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),E=o(()=>v.value===!0?e.tabindex||0:-1),l=o(()=>Me(e,"standard")),k=o(()=>{const i={tabindex:E.value};return u.value===!0?Object.assign(i,f.value):Te.includes(e.type)===!0&&(i.type=e.type),g.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Ae.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),m=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:S,innerClasses:p,attributes:k,hasLink:u,linkTag:g,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=oe;let T=null,A=null,O=null;var Ke=J({name:"QBtn",props:{...Ne,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=Z(),{classes:u,style:g,innerClasses:f,attributes:d,hasLink:S,linkTag:y,navigateOnClick:v,isActionable:E}=ze(e),l=I(null),k=I(null);let m=null,p,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:S.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=o(()=>({center:e.round})),B=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(E.value===!0){const a={onClick:L,onKeydown:C,onMousedown:N};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=w}return a}return{onClick:R}}),q=o(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:g.value,...d.value,...s.value}));function L(a){if(l.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&l.value.contains(c)===!1&&c.contains(l.value)===!1){l.value.focus();const z=()=>{document.removeEventListener("keydown",R,!0),document.removeEventListener("keyup",z,x),l.value!==null&&l.value.removeEventListener("blur",z,x)};document.addEventListener("keydown",R,!0),document.addEventListener("keyup",z,x),l.value.addEventListener("blur",z,x)}}v(a)}}function C(a){l.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&A!==l.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(l.value.focus(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",$,!0),l.value.addEventListener("blur",$,x)),R(a)))}function w(a){l.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&M(),T=l.value,m=a.target,m.addEventListener("touchcancel",$,x),m.addEventListener("touchend",$,x)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function N(a){l.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==l.value&&(O!==null&&M(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",$,x)))}function $(a){if(l.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===l.value)){if(a!==void 0&&a.type==="keyup"){if(A===l.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&se(c),a.cancelBubble===!0&&Y(c),l.value.dispatchEvent(c),R(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const c=k.value;a!==!0&&(T===l.value||O===l.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),T===l.value&&(m!==null&&(m.removeEventListener("touchcancel",$,x),m.removeEventListener("touchend",$,x)),T=m=null),O===l.value&&(document.removeEventListener("mouseup",$,x),O=null),A===l.value&&(document.removeEventListener("keyup",$,!0),l.value!==null&&l.value.removeEventListener("blur",$,x),A=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(a){R(a),a.qSkipRipple=!0}return le(()=>{M(!0)}),Object.assign(n,{click:a=>{E.value===!0&&L(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(h(V,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=be(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(V,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const c=[h("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(h(ue,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(qe)])]:null)),ie(h(y.value,q.value,c),[[Ee,P.value,void 0,_.value]])}}});const De={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},He=ce({name:"ErrorNotFound",__name:"ErrorNotFound",setup(e){return(t,r)=>(de(),fe("div",De,[K("div",null,[r[0]||(r[0]=K("div",{style:{"font-size":"30vh"}}," 404 ",-1)),r[1]||(r[1]=K("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1)),ve(Ke,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])]))}});export{He as default};
