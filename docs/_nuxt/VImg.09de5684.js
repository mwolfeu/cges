import{G as R,H as N,b as r,C as h,x as L,a6 as O,W as G,ac as W,_ as X,X as y,r as J,h as I,ad as K,A as Q,j as Y,T as U,U as Z,F as p,ae as ee,a3 as te}from"./entry.ccd7e3b1.js";import{m as $,b as ne,c as re,a as F}from"./intersectionObserver.aab72029.js";function ae(e){return{aspectStyles:h(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const x=R({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...$(),...ne()},"VResponsive"),k=N()({name:"VResponsive",props:x(),setup(e,l){let{slots:i}=l;const{aspectStyles:n}=ae(e),{dimensionStyles:c}=re(e);return F(()=>{var v;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(v=i.additional)==null?void 0:v.call(i),i.default&&r("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ie=R({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,l)=>{let{slots:i}=l;const{transition:n,disabled:c,...v}=e,{component:s=G,...a}=typeof n=="object"?n:{};return L(s,O(typeof n=="string"?{name:c?"":n}:a,v,{disabled:c}),i)};function se(e,l){if(!W)return;const i=l.modifiers||{},n=l.value,{handler:c,options:v}=typeof n=="object"?n:{handler:n,options:{}},s=new IntersectionObserver(function(){var g;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const d=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!d)return;const o=a.some(S=>S.isIntersecting);c&&(!i.quiet||d.init)&&(!i.once||o||d.init)&&c(o,a,f),o&&i.once?A(e,l):d.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:s},s.observe(e)}function A(e,l){var n;const i=(n=e._observe)==null?void 0:n[l.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const le={mounted:se,unmounted:A},oe=le,ue=R({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...x(),...$(),...ie()},"VImg"),de=N()({name:"VImg",directives:{intersect:oe},props:ue(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:n}=l;const c=X("VImg"),v=y(""),s=J(),a=y(e.eager?"loading":"idle"),f=y(),d=y(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=h(()=>o.value.aspect||f.value/d.value||0);I(()=>e.src,()=>{S(a.value!=="idle")}),I(g,(t,u)=>{!t&&u&&s.value&&_(s.value)}),K(()=>S());function S(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(a.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,_(u,null)}o.value.src&&Q(()=>{var u;i("loadstart",((u=s.value)==null?void 0:u.currentSrc)||o.value.src),setTimeout(()=>{var m;if(!c.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||T(),a.value==="error")return;g.value||_(s.value,null),a.value==="loading"&&P()}else g.value||_(s.value),V()})})}}function P(){var t;c.isUnmounted||(V(),_(s.value),a.value="loaded",i("load",((t=s.value)==null?void 0:t.currentSrc)||o.value.src))}function T(){var t;c.isUnmounted||(a.value="error",i("error",((t=s.value)==null?void 0:t.currentSrc)||o.value.src))}function V(){const t=s.value;t&&(v.value=t.currentSrc||t.src)}let z=-1;Y(()=>{clearTimeout(z)});function _(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(z),c.isUnmounted)return;const{naturalHeight:B,naturalWidth:C}=t;B||C?(f.value=C,d.value=B):!t.complete&&a.value==="loading"&&u!=null?z=window.setTimeout(m,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,d.value=1)};m()}const w=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var m;if(!o.value.src||a.value==="idle")return null;const t=r("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:P,onError:T},null),u=(m=n.sources)==null?void 0:m.call(n);return r(b,{transition:e.transition,appear:!0},{default:()=>[U(u?r("picture",{class:"v-img__picture"},[u,t]):t,[[te,a.value==="loaded"]])]})},E=()=>r(b,{transition:e.transition},{default:()=>[o.value.lazySrc&&a.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>n.placeholder?r(b,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,M=()=>n.error?r(b,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,q=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=y(!1);{const t=I(g,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return F(()=>{const t=k.filterProps(e);return U(r(k,O({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:ee(e.width==="auto"?f.value:e.width)},e.style]},t,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(p,null,[r(D,null,null),r(E,null,null),r(q,null,null),r(H,null,null),r(M,null,null)]),default:n.default}),[[Z("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:s,state:a,naturalWidth:f,naturalHeight:d}}});export{b as M,de as V};
