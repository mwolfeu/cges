import{aA as ee,H as x,aB as Tt,aC as We,x as Se,C as d,a7 as qe,aD as Te,aE as $t,aF as Et,aG as Ot,aH as Q,G as p,aI as z,a3 as k,O,P as H,r as T,Q as j,aJ as Nt,Y as C,aK as Rt,aL as zt,b as v,F as ve,aM as $e,aN as Dt,N as Ke,ae as Xe,$ as fe,X as Ce,aO as Ft,aP as Ee,a0 as Ye,Z as ke,a4 as Mt,A as Gt,a6 as Ht,aQ as jt,aR as Oe,aS as Wt,u as ne,ab as G,y as ae,ad as W,j as Ue,_ as qt,z as Kt,ac as Xt,aT as Yt,R as Je,ag as Ut,aU as Ne,h as Jt,aV as Qt,S as Zt,W as Re,ak as en,aW as X,ah as tn}from"./entry.fd2562e0.js";import{m as $,a as N,V as nn,u as an,M as sn,b as Qe,c as Ze}from"./intersectionObserver.7bd1d6c8.js";const et=["top","bottom"],ln=["start","end","left","right"];function rn(e,a){let[t,n]=e.split(" ");return n||(n=ee(et,t)?"start":ee(ln,t)?"top":"center"),{side:ze(t,a),align:ze(n,a)}}function ze(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function na(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function aa(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function sa(e){return{side:e.align,align:e.side}}function ia(e){return ee(et,e.side)?"y":"x"}function tt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return x()({name:t??Tt(We(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...$()},setup(n,i){let{slots:s}=i;return()=>{var l;return Se(n.tag,{class:[e,n.class],style:n.style},(l=s.default)==null?void 0:l.call(s))}}})}function we(e){return qe(()=>{const a=[],t={};if(e.value.background)if(Te(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&$t(e.value.background)){const n=Et(e.value.background);if(n.a==null||n.a===1){const i=Ot(n);t.color=i,t.caretColor=i}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(Te(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:t}})}function se(e,a){const t=d(()=>({text:Q(e)?e.value:a?e[a]:null})),{colorClasses:n,colorStyles:i}=we(t);return{textColorClasses:n,textColorStyles:i}}function me(e,a){const t=d(()=>({background:Q(e)?e.value:a?e[a]:null})),{colorClasses:n,colorStyles:i}=we(t);return{backgroundColorClasses:n,backgroundColorStyles:i}}const on=["x-small","small","default","large","x-large"],nt=p({size:{type:[String,Number],default:"default"}},"size");function at(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return qe(()=>{let t,n;return ee(on,e.size)?t=`${a}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:t,sizeStyles:n}})}const D=p({tag:{type:String,default:"div"}},"tag"),un=p({color:String,start:Boolean,end:Boolean,icon:O,...$(),...nt(),...D({tag:"i"}),...H()},"VIcon"),ge=x()({name:"VIcon",props:un(),setup(e,a){let{attrs:t,slots:n}=a;const i=T(),{themeClasses:s}=j(e),{iconData:l}=Nt(d(()=>i.value||e.icon)),{sizeClasses:r}=at(e),{textColorClasses:u,textColorStyles:m}=se(C(e,"color"));return N(()=>{var o,c;const y=(o=n.default)==null?void 0:o.call(n);return y&&(i.value=(c=Rt(y).filter(f=>f.type===zt&&f.children&&typeof f.children=="string")[0])==null?void 0:c.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,r.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},m.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[y]})}),{}}}),cn=[null,"default","comfortable","compact"],_e=p({density:{type:String,default:"default",validator:e=>cn.includes(e)}},"density");function Le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{densityClasses:d(()=>`${a}--density-${e.density}`)}}const ie=p({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{roundedClasses:d(()=>{const n=Q(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${a}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const dn=["elevated","flat","tonal","outlined","text","plain"];function st(e,a){return v(ve,null,[e&&v("span",{key:"overlay",class:`${a}__overlay`},null),v("span",{key:"underlay",class:`${a}__underlay`},null)])}const xe=p({color:String,variant:{type:String,default:"elevated",validator:e=>dn.includes(e)}},"variant");function it(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();const t=d(()=>{const{variant:s}=$e(e);return`${a}--variant-${s}`}),{colorClasses:n,colorStyles:i}=we(d(()=>{const{variant:s,color:l}=$e(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:t}}const vn=p({start:Boolean,end:Boolean,icon:O,image:String,text:String,...$(),..._e(),...ie(),...nt(),...D(),...H(),...xe({variant:"flat"})},"VAvatar"),De=x()({name:"VAvatar",props:vn(),setup(e,a){let{slots:t}=a;const{themeClasses:n}=j(e),{colorClasses:i,colorStyles:s,variantClasses:l}=it(e),{densityClasses:r}=Le(e),{roundedClasses:u}=le(e),{sizeClasses:m,sizeStyles:y}=at(e);return N(()=>v(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,i.value,r.value,u.value,m.value,l.value,e.class],style:[s.value,y.value,e.style]},{default:()=>{var o;return[e.image?v(nn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?v(ge,{key:"icon",icon:e.icon},null):((o=t.default)==null?void 0:o.call(t))??e.text,st(!1,"v-avatar")]}})),{}}}),fn=p({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ye=x(!1)({name:"VDefaultsProvider",props:fn(),setup(e,a){let{slots:t}=a;const{defaults:n,disabled:i,reset:s,root:l,scoped:r}=Dt(e);return Ke(n,{reset:s,root:l,scoped:r,disabled:i}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}}),lt=p({border:[Boolean,Number,String]},"border");function rt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{borderClasses:d(()=>{const n=Q(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${a}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}const ot=p({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function ut(e){return{elevationClasses:d(()=>{const t=Q(e)?e.value:e.elevation,n=[];return t==null||n.push(`elevation-${t}`),n})}}const Fe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},mn=p({location:String},"location");function gn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Xe();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:l}=rn(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function r(m){return t?t(m):0}const u={};return s!=="center"&&(a?u[Fe[s]]=`calc(100% - ${r(s)}px)`:u[s]=0),l!=="center"?a?u[Fe[l]]=`calc(100% - ${r(l)}px)`:u[l]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const yn=p({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...$(),...mn({location:"top"}),...ie(),...D(),...H()},"VProgressLinear"),hn=x()({name:"VProgressLinear",props:yn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=fe(e,"modelValue"),{isRtl:i,rtlClasses:s}=Xe(),{themeClasses:l}=j(e),{locationStyles:r}=gn(e),{textColorClasses:u,textColorStyles:m}=se(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:o}=me(d(()=>e.bgColor||e.color)),{backgroundColorClasses:c,backgroundColorStyles:f}=me(e,"color"),{roundedClasses:g}=le(e),{intersectionRef:h,isIntersecting:A}=an(),w=d(()=>parseInt(e.max,10)),_=d(()=>parseInt(e.height,10)),P=d(()=>parseFloat(e.bufferValue)/w.value*100),R=d(()=>parseFloat(n.value)/w.value*100),E=d(()=>i.value!==e.reverse),q=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function I(b){if(!h.value)return;const{left:M,right:re,width:K}=h.value.getBoundingClientRect(),oe=E.value?K-b.clientX+(re-K):b.clientX-M;n.value=Math.round(oe/K*w.value)}return N(()=>v(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&A.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},g.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(_.value):0,"--v-progress-linear-height":k(_.value),...r.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&I},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...m.value,[E.value?"left":"right"]:k(-_.value),borderTop:`${k(_.value/2)} dotted`,opacity:F.value,top:`calc(50% - ${k(_.value/4)})`,width:k(100-P.value,"%"),"--v-progress-linear-stream-to":k(_.value*(E.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",y.value],style:[o.value,{opacity:F.value,width:k(e.stream?P.value:100,"%")}]},null),v(Ce,{name:q.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(b=>v("div",{key:b,class:["v-progress-linear__indeterminate",b,c.value],style:f.value},null))]):v("div",{class:["v-progress-linear__determinate",c.value],style:[f.value,{width:k(R.value,"%")}]},null)]}),t.default&&v("div",{class:"v-progress-linear__content"},[t.default({value:R.value,buffer:P.value})])]})),{}}}),la=p({loading:[Boolean,String]},"loader");function ra(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{loaderClasses:d(()=>({[`${a}--loading`]:e.loading}))}}function oa(e,a){var n;let{slots:t}=a;return v("div",{class:`${e.name}__loader`},[((n=t.default)==null?void 0:n.call(t,{color:e.color,isActive:e.active}))||v(hn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const pn=["static","relative","fixed","absolute","sticky"],ua=p({position:{type:String,validator:e=>pn.includes(e)}},"position");function ca(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{positionClasses:d(()=>e.position?`${a}--${e.position}`:void 0)}}function bn(){const e=ke("useRoute");return d(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function da(){var e,a;return(a=(e=ke("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function Sn(e,a){const t=Ft("RouterLink"),n=d(()=>!!(e.href||e.to)),i=d(()=>(n==null?void 0:n.value)||Ee(a,"click")||Ee(e,"click"));if(typeof t=="string")return{isLink:n,isClickable:i,href:C(e,"href")};const s=e.to?t.useLink(e):void 0,l=bn();return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var r,u,m;return e.exact?l.value?((m=s.isExactActive)==null?void 0:m.value)&&Ye(s.route.value.query,l.value.query):(u=s.isExactActive)==null?void 0:u.value:(r=s.isActive)==null?void 0:r.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Cn=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let de=!1;function va(e,a){let t=!1,n,i;Mt&&(Gt(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,r,u)=>{de?t?a(u):u():setTimeout(()=>t?a(u):u()),de=!0}),i=e==null?void 0:e.afterEach(()=>{de=!1})}),Ht(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var r;(r=l.state)!=null&&r.replaced||(t=!0,setTimeout(()=>t=!1))}}const he=Symbol("rippleStop"),kn=80;function Me(e,a){e.style.transform=a,e.style.webkitTransform=a}function pe(e){return e.constructor.name==="TouchEvent"}function ct(e){return e.constructor.name==="KeyboardEvent"}const wn=function(e,a){var o;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!ct(e)){const c=a.getBoundingClientRect(),f=pe(e)?e.touches[e.touches.length-1]:e;n=f.clientX-c.left,i=f.clientY-c.top}let s=0,l=.3;(o=a._ripple)!=null&&o.circle?(l=.15,s=a.clientWidth/2,s=t.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const r=`${(a.clientWidth-s*2)/2}px`,u=`${(a.clientHeight-s*2)/2}px`,m=t.center?r:`${n-s}px`,y=t.center?u:`${i-s}px`;return{radius:s,scale:l,x:m,y,centerX:r,centerY:u}},te={show(e,a){var f;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=a==null?void 0:a._ripple)!=null&&f.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",t.class&&(n.className+=` ${t.class}`);const{radius:s,scale:l,x:r,y:u,centerX:m,centerY:y}=wn(e,a,t),o=`${s*2}px`;i.className="v-ripple__animation",i.style.width=o,i.style.height=o,a.appendChild(n);const c=window.getComputedStyle(a);c&&c.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Me(i,`translate(${r}, ${u}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Me(i,`translate(${m}, ${y}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const t=a[a.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const n=performance.now()-Number(t.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=t.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(t.parentNode)},300)},i)}};function dt(e){return typeof e>"u"||!!e}function Y(e){const a={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[he])){if(e[he]=!0,pe(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(a.center=t._ripple.centered||ct(e),t._ripple.class&&(a.class=t._ripple.class),pe(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{te.show(e,t,a)},t._ripple.showTimer=window.setTimeout(()=>{var n;(n=t==null?void 0:t._ripple)!=null&&n.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},kn)}else te.show(e,t,a)}}function Ge(e){e[he]=!0}function L(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{L(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),te.hide(a)}}function vt(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let U=!1;function ft(e){!U&&(e.keyCode===Oe.enter||e.keyCode===Oe.space)&&(U=!0,Y(e))}function mt(e){U=!1,L(e)}function gt(e){U&&(U=!1,L(e))}function yt(e,a,t){const{value:n,modifiers:i}=a,s=dt(n);if(s||te.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,jt(n)&&n.class&&(e._ripple.class=n.class),s&&!t){if(i.stop){e.addEventListener("touchstart",Ge,{passive:!0}),e.addEventListener("mousedown",Ge);return}e.addEventListener("touchstart",Y,{passive:!0}),e.addEventListener("touchend",L,{passive:!0}),e.addEventListener("touchmove",vt,{passive:!0}),e.addEventListener("touchcancel",L),e.addEventListener("mousedown",Y),e.addEventListener("mouseup",L),e.addEventListener("mouseleave",L),e.addEventListener("keydown",ft),e.addEventListener("keyup",mt),e.addEventListener("blur",gt),e.addEventListener("dragstart",L,{passive:!0})}else!s&&t&&ht(e)}function ht(e){e.removeEventListener("mousedown",Y),e.removeEventListener("touchstart",Y),e.removeEventListener("touchend",L),e.removeEventListener("touchmove",vt),e.removeEventListener("touchcancel",L),e.removeEventListener("mouseup",L),e.removeEventListener("mouseleave",L),e.removeEventListener("keydown",ft),e.removeEventListener("keyup",mt),e.removeEventListener("dragstart",L),e.removeEventListener("blur",gt)}function _n(e,a){yt(e,a,!1)}function Ln(e){delete e._ripple,ht(e)}function xn(e,a){if(a.value===a.oldValue)return;const t=dt(a.oldValue);yt(e,a,t)}const Vn={mounted:_n,unmounted:Ln,updated:xn};const Pn=p({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function V(e,a,t){return x()({name:e,props:Pn({mode:t,origin:a}),setup(n,i){let{slots:s}=i;const l={onBeforeEnter(r){n.origin&&(r.style.transformOrigin=n.origin)},onLeave(r){if(n.leaveAbsolute){const{offsetTop:u,offsetLeft:m,offsetWidth:y,offsetHeight:o}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${u}px`,r.style.left=`${m}px`,r.style.width=`${y}px`,r.style.height=`${o}px`}n.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(n.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:u,top:m,left:y,width:o,height:c}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=u||"",r.style.top=m||"",r.style.left=y||"",r.style.width=o||"",r.style.height=c||""}}};return()=>{const r=n.group?Wt:Ce;return Se(r,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:l},s.default)}}})}function pt(e,a){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return x()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(n,i){let{slots:s}=i;return()=>Se(Ce,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:a},s.default)}})}function bt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=We(`offset-${t}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[t]:l.style[t]}},onEnter(l){const r=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const u=`${l[n]}px`;l.style[t]="0",l.offsetHeight,l.style.transition=r.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[t]=u})},onAfterEnter:s,onEnterCancelled:s,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[t]:l.style[t]},l.style.overflow="hidden",l.style[t]=`${l[n]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[t]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(l){e&&l._parent&&l._parent.classList.remove(e),s(l)}function s(l){const r=l._initialStyle[t];l.style.overflow=l._initialStyle.overflow,r!=null&&(l.style[t]=r),delete l._initialStyle}}V("fab-transition","center center","out-in");V("dialog-bottom-transition");V("dialog-top-transition");V("fade-transition");V("scale-transition");V("scroll-x-transition");V("scroll-x-reverse-transition");V("scroll-y-transition");V("scroll-y-reverse-transition");V("slide-x-transition");V("slide-x-reverse-transition");V("slide-y-transition");V("slide-y-reverse-transition");const Bn=pt("expand-transition",bt());pt("expand-x-transition",bt("",!0));const be=Symbol.for("vuetify:list");function St(){const e=ne(be,{hasPrepend:G(!1),updateHasPrepend:()=>null}),a={hasPrepend:G(!1),updateHasPrepend:t=>{t&&(a.hasPrepend.value=t)}};return ae(be,a),e}function Ct(){return ne(be,null)}const An={open:e=>{let{id:a,value:t,opened:n,parents:i}=e;if(t){const s=new Set;s.add(a);let l=i.get(a);for(;l!=null;)s.add(l),l=i.get(l);return s}else return n.delete(a),n},select:()=>null},kt={open:e=>{let{id:a,value:t,opened:n,parents:i}=e;if(t){let s=i.get(a);for(n.add(a);s!=null&&s!==a;)n.add(s),s=i.get(s);return n}else n.delete(a);return n},select:()=>null},In={open:kt.open,select:e=>{let{id:a,value:t,opened:n,parents:i}=e;if(!t)return n;const s=[];let l=i.get(a);for(;l!=null;)s.push(l),l=i.get(l);return new Set(s)}},Ve=e=>{const a={select:t=>{let{id:n,value:i,selected:s}=t;if(n=W(n),e&&!i){const l=Array.from(s.entries()).reduce((r,u)=>{let[m,y]=u;return y==="on"?[...r,m]:r},[]);if(l.length===1&&l[0]===n)return s}return s.set(n,i?"on":"off"),s},in:(t,n,i)=>{let s=new Map;for(const l of t||[])s=a.select({id:l,value:!0,selected:new Map(s),children:n,parents:i});return s},out:t=>{const n=[];for(const[i,s]of t.entries())s==="on"&&n.push(i);return n}};return a},wt=e=>{const a=Ve(e);return{select:n=>{let{selected:i,id:s,...l}=n;s=W(s);const r=i.has(s)?new Map([[s,i.get(s)]]):new Map;return a.select({...l,id:s,selected:r})},in:(n,i,s)=>{let l=new Map;return n!=null&&n.length&&(l=a.in(n.slice(0,1),i,s)),l},out:(n,i,s)=>a.out(n,i,s)}},Tn=e=>{const a=Ve(e);return{select:n=>{let{id:i,selected:s,children:l,...r}=n;return i=W(i),l.has(i)?s:a.select({id:i,selected:s,children:l,...r})},in:a.in,out:a.out}},$n=e=>{const a=wt(e);return{select:n=>{let{id:i,selected:s,children:l,...r}=n;return i=W(i),l.has(i)?s:a.select({id:i,selected:s,children:l,...r})},in:a.in,out:a.out}},En=e=>{const a={select:t=>{let{id:n,value:i,selected:s,children:l,parents:r}=t;n=W(n);const u=new Map(s),m=[n];for(;m.length;){const o=m.shift();s.set(o,i?"on":"off"),l.has(o)&&m.push(...l.get(o))}let y=r.get(n);for(;y;){const o=l.get(y),c=o.every(g=>s.get(g)==="on"),f=o.every(g=>!s.has(g)||s.get(g)==="off");s.set(y,c?"on":f?"off":"indeterminate"),y=r.get(y)}return e&&!i&&Array.from(s.entries()).reduce((c,f)=>{let[g,h]=f;return h==="on"?[...c,g]:c},[]).length===0?u:s},in:(t,n,i)=>{let s=new Map;for(const l of t||[])s=a.select({id:l,value:!0,selected:new Map(s),children:n,parents:i});return s},out:(t,n)=>{const i=[];for(const[s,l]of t.entries())l==="on"&&!n.has(s)&&i.push(s);return i}};return a},J=Symbol.for("vuetify:nested"),_t={id:G(),root:{register:()=>null,unregister:()=>null,parents:T(new Map),children:T(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:T(new Set),selected:T(new Map),selectedValues:T([])}},On=p({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Nn=e=>{let a=!1;const t=T(new Map),n=T(new Map),i=fe(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),s=d(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return $n(e.mandatory);case"leaf":return Tn(e.mandatory);case"independent":return Ve(e.mandatory);case"single-independent":return wt(e.mandatory);case"classic":default:return En(e.mandatory)}}),l=d(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return In;case"single":return An;case"multiple":default:return kt}}),r=fe(e,"selected",e.selected,o=>s.value.in(o,t.value,n.value),o=>s.value.out(o,t.value,n.value));Ue(()=>{a=!0});function u(o){const c=[];let f=o;for(;f!=null;)c.unshift(f),f=n.value.get(f);return c}const m=ke("nested"),y={id:G(),root:{opened:i,selected:r,selectedValues:d(()=>{const o=[];for(const[c,f]of r.value.entries())f==="on"&&o.push(c);return o}),register:(o,c,f)=>{c&&o!==c&&n.value.set(o,c),f&&t.value.set(o,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],o])},unregister:o=>{if(a)return;t.value.delete(o);const c=n.value.get(o);if(c){const f=t.value.get(c)??[];t.value.set(c,f.filter(g=>g!==o))}n.value.delete(o),i.value.delete(o)},open:(o,c,f)=>{m.emit("click:open",{id:o,value:c,path:u(o),event:f});const g=l.value.open({id:o,value:c,opened:new Set(i.value),children:t.value,parents:n.value,event:f});g&&(i.value=g)},openOnSelect:(o,c,f)=>{const g=l.value.select({id:o,value:c,selected:new Map(r.value),opened:new Set(i.value),children:t.value,parents:n.value,event:f});g&&(i.value=g)},select:(o,c,f)=>{m.emit("click:select",{id:o,value:c,path:u(o),event:f});const g=s.value.select({id:o,value:c,selected:new Map(r.value),children:t.value,parents:n.value,event:f});g&&(r.value=g),y.root.openOnSelect(o,c,f)},children:t,parents:n}};return ae(J,y),y.root},Lt=(e,a)=>{const t=ne(J,_t),n=Symbol(qt()),i=d(()=>e.value!==void 0?e.value:n),s={...t,id:i,open:(l,r)=>t.root.open(i.value,l,r),openOnSelect:(l,r)=>t.root.openOnSelect(i.value,l,r),isOpen:d(()=>t.root.opened.value.has(i.value)),parent:d(()=>t.root.parents.value.get(i.value)),select:(l,r)=>t.root.select(i.value,l,r),isSelected:d(()=>t.root.selected.value.get(W(i.value))==="on"),isIndeterminate:d(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:d(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,a),Ue(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),a&&ae(J,s),s},Rn=()=>{const e=ne(J,_t);ae(J,{...e,isGroupActivator:!0})};function zn(){const e=G(!1);return Kt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:Xt(e)}}const Dn=Yt({name:"VListGroupActivator",setup(e,a){let{slots:t}=a;return Rn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Fn=p({activeColor:String,baseColor:String,color:String,collapseIcon:{type:O,default:"$collapse"},expandIcon:{type:O,default:"$expand"},prependIcon:O,appendIcon:O,fluid:Boolean,subgroup:Boolean,title:String,value:null,...$(),...D()},"VListGroup"),He=x()({name:"VListGroup",props:Fn(),setup(e,a){let{slots:t}=a;const{isOpen:n,open:i,id:s}=Lt(C(e,"value"),!0),l=d(()=>`v-list-group--id-${String(s.value)}`),r=Ct(),{isBooted:u}=zn();function m(f){i(!n.value,f)}const y=d(()=>({onClick:m,class:"v-list-group__header",id:l.value})),o=d(()=>n.value?e.collapseIcon:e.expandIcon),c=d(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&o.value,appendIcon:e.appendIcon||!e.subgroup&&o.value,title:e.title,value:e.value}}));return N(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(ye,{defaults:c.value},{default:()=>[v(Dn,null,{default:()=>[t.activator({props:y.value,isOpen:n.value})]})]}),v(sn,{transition:{component:Bn},disabled:!u.value},{default:()=>{var f;return[Je(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":l.value},[(f=t.default)==null?void 0:f.call(t)]),[[Ut,n.value]])]}})]})),{}}});const Mn=tt("v-list-item-subtitle"),Gn=tt("v-list-item-title"),Hn=p({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Ne(),onClickOnce:Ne(),...lt(),...$(),..._e(),...Qe(),...ot(),...ie(),...Cn(),...D(),...H(),...xe({variant:"text"})},"VListItem"),je=x()({name:"VListItem",directives:{Ripple:Vn},props:Hn(),emits:{click:e=>!0},setup(e,a){let{attrs:t,slots:n,emit:i}=a;const s=Sn(e,t),l=d(()=>e.value===void 0?s.href.value:e.value),{select:r,isSelected:u,isIndeterminate:m,isGroupActivator:y,root:o,parent:c,openOnSelect:f}=Lt(l,!1),g=Ct(),h=d(()=>{var S;return e.active!==!1&&(e.active||((S=s.isActive)==null?void 0:S.value)||u.value)}),A=d(()=>e.link!==!1&&s.isLink.value),w=d(()=>!e.disabled&&e.link!==!1&&(e.link||s.isClickable.value||e.value!=null&&!!g)),_=d(()=>e.rounded||e.nav),P=d(()=>e.color??e.activeColor),R=d(()=>({color:h.value?P.value??e.baseColor:e.baseColor,variant:e.variant}));Jt(()=>{var S;return(S=s.isActive)==null?void 0:S.value},S=>{S&&c.value!=null&&o.open(c.value,!0),S&&f(S)},{immediate:!0});const{themeClasses:E}=j(e),{borderClasses:q}=rt(e),{colorClasses:F,colorStyles:I,variantClasses:b}=it(R),{densityClasses:M}=Le(e),{dimensionStyles:re}=Ze(e),{elevationClasses:K}=ut(e),{roundedClasses:oe}=le(_),Pt=d(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ue=d(()=>({isActive:h.value,select:r,isSelected:u.value,isIndeterminate:m.value}));function Pe(S){var Z;i("click",S),!(y||!w.value)&&((Z=s.navigate)==null||Z.call(s,S),e.value!=null&&r(!u.value,S))}function Bt(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),Pe(S))}return N(()=>{const S=A.value?"a":e.tag,Z=n.title||e.title!=null,At=n.subtitle||e.subtitle!=null,Be=!!(e.appendAvatar||e.appendIcon),It=!!(Be||n.append),Ae=!!(e.prependAvatar||e.prependIcon),ce=!!(Ae||n.prepend);return g==null||g.updateHasPrepend(ce),e.activeColor&&Qt("active-color",["color","base-color"]),Je(v(S,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ce&&(g==null?void 0:g.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},E.value,q.value,F.value,M.value,K.value,Pt.value,oe.value,b.value,e.class],style:[I.value,re.value,e.style],href:s.href.value,tabindex:w.value?g?-2:0:void 0,onClick:Pe,onKeydown:w.value&&!A.value&&Bt},{default:()=>{var Ie;return[st(w.value||h.value,"v-list-item"),ce&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(ye,{key:"prepend-defaults",disabled:!Ae,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var B;return[(B=n.prepend)==null?void 0:B.call(n,ue.value)]}}):v(ve,null,[e.prependAvatar&&v(De,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ge,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[Z&&v(Gn,{key:"title"},{default:()=>{var B;return[((B=n.title)==null?void 0:B.call(n,{title:e.title}))??e.title]}}),At&&v(Mn,{key:"subtitle"},{default:()=>{var B;return[((B=n.subtitle)==null?void 0:B.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(Ie=n.default)==null?void 0:Ie.call(n,ue.value)]),It&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(ye,{key:"append-defaults",disabled:!Be,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var B;return[(B=n.append)==null?void 0:B.call(n,ue.value)]}}):v(ve,null,[e.appendIcon&&v(ge,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(De,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[Zt("ripple"),w.value&&e.ripple]])}),{}}}),jn=p({color:String,inset:Boolean,sticky:Boolean,title:String,...$(),...D()},"VListSubheader"),Wn=x()({name:"VListSubheader",props:jn(),setup(e,a){let{slots:t}=a;const{textColorClasses:n,textColorStyles:i}=se(C(e,"color"));return N(()=>{const s=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var l;return[s&&v("div",{class:"v-list-subheader__text"},[((l=t.default)==null?void 0:l.call(t))??e.title])]}})}),{}}});const qn=p({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...$(),...H()},"VDivider"),Kn=x()({name:"VDivider",props:qn(),setup(e,a){let{attrs:t}=a;const{themeClasses:n}=j(e),{textColorClasses:i,textColorStyles:s}=se(C(e,"color")),l=d(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=k(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=k(e.thickness)),r});return N(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,i.value,e.class],style:[l.value,s.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Xn=p({items:Array,returnObject:Boolean},"VListChildren"),xt=x()({name:"VListChildren",props:Xn(),setup(e,a){let{slots:t}=a;return St(),()=>{var n,i;return((n=t.default)==null?void 0:n.call(t))??((i=e.items)==null?void 0:i.map(s=>{var c,f;let{children:l,props:r,type:u,raw:m}=s;if(u==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??v(Kn,r,null);if(u==="subheader")return((f=t.subheader)==null?void 0:f.call(t,{props:r}))??v(Wn,r,null);const y={subtitle:t.subtitle?g=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...g,item:m})}:void 0,prepend:t.prepend?g=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...g,item:m})}:void 0,append:t.append?g=>{var h;return(h=t.append)==null?void 0:h.call(t,{...g,item:m})}:void 0,title:t.title?g=>{var h;return(h=t.title)==null?void 0:h.call(t,{...g,item:m})}:void 0},o=He.filterProps(r);return l?v(He,Re({value:r==null?void 0:r.value},o),{activator:g=>{let{props:h}=g;const A={...r,...h,value:e.returnObject?m:r.value};return t.header?t.header({props:A}):v(je,A,y)},default:()=>v(xt,{items:l},t)}):t.item?t.item({props:r}):v(je,Re(r,{value:e.returnObject?m:r.value}),y)}))}}}),Yn=p({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Ye}},"list-items");function Un(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Jn(e,a){const t=X(a,e.itemType,"item"),n=Un(a)?a:X(a,e.itemTitle),i=X(a,e.itemValue,void 0),s=X(a,e.itemChildren),l=e.itemProps===!0?tn(a,["children"]):X(a,e.itemProps),r={title:n,value:i,...l};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&s?Vt(e,s):void 0,raw:a}}function Vt(e,a){const t=[];for(const n of a)t.push(Jn(e,n));return t}function Qn(e){return{items:d(()=>Vt(e,e.items))}}const Zn=p({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...On({selectStrategy:"single-leaf",openStrategy:"list"}),...lt(),...$(),..._e(),...Qe(),...ot(),itemType:{type:String,default:"type"},...Yn(),...ie(),...D(),...H(),...xe({variant:"text"})},"VList"),fa=x()({name:"VList",props:Zn(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:t}=a;const{items:n}=Qn(e),{themeClasses:i}=j(e),{backgroundColorClasses:s,backgroundColorStyles:l}=me(C(e,"bgColor")),{borderClasses:r}=rt(e),{densityClasses:u}=Le(e),{dimensionStyles:m}=Ze(e),{elevationClasses:y}=ut(e),{roundedClasses:o}=le(e),{open:c,select:f}=Nn(e),g=d(()=>e.lines?`v-list--${e.lines}-line`:void 0),h=C(e,"activeColor"),A=C(e,"baseColor"),w=C(e,"color");St(),Ke({VListGroup:{activeColor:h,baseColor:A,color:w},VListItem:{activeClass:C(e,"activeClass"),activeColor:h,baseColor:A,color:w,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const _=G(!1),P=T();function R(b){_.value=!0}function E(b){_.value=!1}function q(b){var M;!_.value&&!(b.relatedTarget&&((M=P.value)!=null&&M.contains(b.relatedTarget)))&&I()}function F(b){if(P.value){if(b.key==="ArrowDown")I("next");else if(b.key==="ArrowUp")I("prev");else if(b.key==="Home")I("first");else if(b.key==="End")I("last");else return;b.preventDefault()}}function I(b){if(P.value)return en(P.value,b)}return N(()=>v(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},i.value,s.value,r.value,u.value,y.value,g.value,o.value,e.class],style:[l.value,m.value,e.style],tabindex:e.disabled||_.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:R,onFocusout:E,onFocus:q,onKeydown:F},{default:()=>[v(xt,{items:n.value,returnObject:e.returnObject},t)]})),{open:c,select:f,focus:I}}});export{nt as A,at as B,se as C,rn as D,na as E,aa as F,sa as G,ia as H,me as I,da as J,va as K,oa as L,Kn as M,Vn as R,De as V,ye as a,lt as b,tt as c,ot as d,la as e,mn as f,ua as g,ie as h,Cn as i,D as j,xe as k,it as l,_e as m,Le as n,ut as o,ra as p,gn as q,ca as r,le as s,Sn as t,rt as u,st as v,ge as w,Gn as x,je as y,fa as z};
