import{c as v,h as r,J as B,E as _,g as M}from"./index.a6008c6d.js";const j={xs:18,sm:24,md:32,lg:38,xl:46},k={size:String};function p(e,s=j){return v(()=>e.size!==void 0?{fontSize:e.size in s?`${s[e.size]}px`:e.size}:null)}function F(e,s){return e!==void 0&&e()||s}function c(e,s){return e!==void 0?s.concat(e()):s}function U(e,s,a,l,u,o){s.key=l+u;const n=r(e,s,a);return u===!0?B(n,o()):n}const h="0 0 24 24",b=e=>e,m=e=>`ionicons ${e}`,y={"mdi-":e=>`mdi ${e}`,"icon-":b,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":m,"ion-ios":m,"ion-logo":m,"iconfont ":b,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},E={o_:"-outlined",r_:"-round",s_:"-sharp"},R={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},D=new RegExp("^("+Object.keys(y).join("|")+")"),I=new RegExp("^("+Object.keys(E).join("|")+")"),x=new RegExp("^("+Object.keys(R).join("|")+")"),O=/^[Mm]\s?[-+]?\.?\d/,Q=/^img:/,q=/^svguse:/,C=/^ion-/,J=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var V=_({name:"QIcon",props:{...k,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:s}){const{proxy:{$q:a}}=M(),l=p(e),u=v(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=v(()=>{let n,t=e.name;if(t==="none"||!t)return{none:!0};if(a.iconMapFn!==null){const i=a.iconMapFn(t);if(i!==void 0)if(i.icon!==void 0){if(t=i.icon,t==="none"||!t)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(O.test(t)===!0){const[i,g=h]=t.split("|");return{svg:!0,viewBox:g,nodes:i.split("&&").map(S=>{const[$,w,z]=S.split("@@");return r("path",{style:w,d:$,transform:z})})}}if(Q.test(t)===!0)return{img:!0,src:t.substring(4)};if(q.test(t)===!0){const[i,g=h]=t.split("|");return{svguse:!0,src:i.substring(7),viewBox:g}}let f=" ";const d=t.match(D);if(d!==null)n=y[d[1]](t);else if(J.test(t)===!0)n=t;else if(C.test(t)===!0)n=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(x.test(t)===!0){n="notranslate material-symbols";const i=t.match(x);i!==null&&(t=t.substring(6),n+=R[i[1]]),f=t}else{n="notranslate material-icons";const i=t.match(I);i!==null&&(t=t.substring(2),n+=E[i[1]]),f=t}return{cls:n,content:f}});return()=>{const n={class:u.value,style:l.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,n,F(s.default)):o.value.img===!0?r(e.tag,n,c(s.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r(e.tag,n,c(s.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r(e.tag,n,c(s.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(n.class+=" "+o.value.cls),r(e.tag,n,c(s.default,[o.value.content])))}}});export{V as Q,F as a,c as b,k as c,p as d,U as h,j as u};
