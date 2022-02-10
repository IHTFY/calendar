import{W as te,X as ne,Y as ae,S as oe,i as le,s as ie,Z as se,k as g,e as c,w as re,t as i,V as de,d as o,m,c as p,a as h,x as ce,h as s,b as V,g as G,y as pe,K as e,R as he,q as ue,o as fe,B as ge,_ as me}from"../chunks/vendor-a72b8ec8.js";const ve=!0,_e=!1;function ye(v){let r,t,l,$,d,x,P,w,F,K,u,O,_,B,J,q,b,D,H,T,M,Y,f,C,y,I,L,k,R,j,ee={name:we,oninit:be,onaddfile:Te,allowMultiple:!0};return l=new se({props:ee}),v[0](l),{c(){r=g(),t=c("div"),re(l.$$.fragment),$=g(),d=c("button"),x=i("Files"),P=g(),w=c("h1"),F=i("About this app"),K=g(),u=c("p"),O=i("This is a "),_=c("a"),B=i("SvelteKit"),J=i(` app. You can make your own by typing the
		following into your command line and following the prompts:`),q=g(),b=c("pre"),D=i("npm init svelte@next"),H=g(),T=c("p"),M=i(`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`),Y=g(),f=c("p"),C=i("The "),y=c("a"),I=i("TODOs"),L=i(` page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!`),this.h()},l(a){de('[data-svelte="svelte-1ine71f"]',document.head).forEach(o),r=m(a),t=p(a,"DIV",{class:!0});var n=h(t);ce(l.$$.fragment,n),$=m(n),d=p(n,"BUTTON",{});var N=h(d);x=s(N,"Files"),N.forEach(o),P=m(n),w=p(n,"H1",{});var U=h(w);F=s(U,"About this app"),U.forEach(o),K=m(n),u=p(n,"P",{});var S=h(u);O=s(S,"This is a "),_=p(S,"A",{href:!0});var W=h(_);B=s(W,"SvelteKit"),W.forEach(o),J=s(S,` app. You can make your own by typing the
		following into your command line and following the prompts:`),S.forEach(o),q=m(n),b=p(n,"PRE",{});var X=h(b);D=s(X,"npm init svelte@next"),X.forEach(o),H=m(n),T=p(n,"P",{});var Z=h(T);M=s(Z,`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`),Z.forEach(o),Y=m(n),f=p(n,"P",{});var A=h(f);C=s(A,"The "),y=p(A,"A",{href:!0});var z=h(y);I=s(z,"TODOs"),z.forEach(o),L=s(A,` page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!`),A.forEach(o),n.forEach(o),this.h()},h(){document.title="About",V(_,"href","https://kit.svelte.dev"),V(y,"href","/todos"),V(t,"class","content svelte-cf77e8")},m(a,E){G(a,r,E),G(a,t,E),pe(l,t,null),e(t,$),e(t,d),e(d,x),e(t,P),e(t,w),e(w,F),e(t,K),e(t,u),e(u,O),e(u,_),e(_,B),e(u,J),e(t,q),e(t,b),e(b,D),e(t,H),e(t,T),e(T,M),e(t,Y),e(t,f),e(f,C),e(f,y),e(y,I),e(f,L),k=!0,R||(j=he(d,"click",v[1]),R=!0)},p(a,[E]){const n={};l.$set(n)},i(a){k||(ue(l.$$.fragment,a),k=!0)},o(a){fe(l.$$.fragment,a),k=!1},d(a){a&&o(r),a&&o(t),v[0](null),ge(l),R=!1,j()}}}const Ee=_e,Se=ve,Ae=!0;te(ne,ae);let Q,we="filepond";function be(){console.log("FilePond has initialised")}function Te(v,r){console.log("A file has been added",r)}function $e(v,r,t){function l(d){me[d?"unshift":"push"](()=>{Q=d})}return[l,()=>console.log(Q.getFiles())]}class xe extends oe{constructor(r){super();le(this,r,$e,ye,ie,{})}}export{xe as default,Ee as hydrate,Ae as prerender,Se as router};
