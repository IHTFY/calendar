import{D as he,S as z,i as Z,s as G,e as g,t as S,k as w,c as y,a as D,h as Y,d as m,m as B,b as _,I as ve,g as C,K as c,R as _e,j as te,L as ae,w as K,x as X,y as J,z as ke,A as $e,q as L,o as j,B as Q,n as Ie,p as we,Y as me,C as Be,Z as He,f as fe,M as pe,_ as Ae,X as Se,V as Ye}from"../chunks/vendor-40ff77f4.js";const ne=he([]),le=he({});function Me(s){let t,a,n=new Date(s[0]).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})+"",r,o,h,i,v,u,E,l,d,e,f,p,$;return{c(){t=g("tr"),a=g("td"),r=S(n),o=w(),h=g("td"),i=S(s[1]),v=w(),u=g("td"),E=S(s[2]),l=w(),d=g("td"),e=g("img"),this.h()},l(T){t=y(T,"TR",{class:!0});var b=D(t);a=y(b,"TD",{class:!0});var R=D(a);r=Y(R,n),R.forEach(m),o=B(b),h=y(b,"TD",{class:!0});var A=D(h);i=Y(A,s[1]),A.forEach(m),v=B(b),u=y(b,"TD",{class:!0});var V=D(u);E=Y(V,s[2]),V.forEach(m),l=B(b),d=y(b,"TD",{class:!0});var q=D(d);e=y(q,"IMG",{src:!0,alt:!0,class:!0}),q.forEach(m),b.forEach(m),this.h()},h(){_(a,"class","svelte-ikn64x"),_(h,"class","svelte-ikn64x"),_(u,"class","svelte-ikn64x"),ve(e.src,f=s[3])||_(e,"src",f),_(e,"alt",s[2]),_(e,"class","svelte-ikn64x"),_(d,"class","svelte-ikn64x"),_(t,"class","svelte-ikn64x")},m(T,b){C(T,t,b),c(t,a),c(a,r),c(t,o),c(t,h),c(h,i),c(t,v),c(t,u),c(u,E),c(t,l),c(t,d),c(d,e),p||($=_e(t,"click",s[4]),p=!0)},p(T,[b]){b&1&&n!==(n=new Date(T[0]).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})+"")&&te(r,n),b&2&&te(i,T[1]),b&4&&te(E,T[2]),b&8&&!ve(e.src,f=T[3])&&_(e,"src",f),b&4&&_(e,"alt",T[2])},i:ae,o:ae,d(T){T&&m(t),p=!1,$()}}}function Oe(s,t,a){let{date:n}=t,{type:r}=t,{name:o}=t,{image:h}=t;const i=()=>le.set({date:n,type:r,name:o,image:h});return s.$$set=v=>{"date"in v&&a(0,n=v.date),"type"in v&&a(1,r=v.type),"name"in v&&a(2,o=v.name),"image"in v&&a(3,h=v.image)},[n,r,o,h,i]}class Ne extends z{constructor(t){super();Z(this,t,Oe,Me,G,{date:0,type:1,name:2,image:3})}}function ge(s,t,a){const n=s.slice();return n[2]=t[a],n}function ye(s,t,a){const n=s.slice();return n[5]=t[a],n}function Ee(s){let t,a=s[5]+"",n;return{c(){t=g("th"),n=S(a)},l(r){t=y(r,"TH",{});var o=D(t);n=Y(o,a),o.forEach(m)},m(r,o){C(r,t,o),c(t,n)},p:ae,d(r){r&&m(t)}}}function be(s){let t,a;const n=[s[2]];let r={};for(let o=0;o<n.length;o+=1)r=Be(r,n[o]);return t=new Ne({props:r}),{c(){K(t.$$.fragment)},l(o){X(t.$$.fragment,o)},m(o,h){J(t,o,h),a=!0},p(o,h){const i=h&1?ke(n,[$e(o[2])]):{};t.$set(i)},i(o){a||(L(t.$$.fragment,o),a=!0)},o(o){j(t.$$.fragment,o),a=!1},d(o){Q(t,o)}}}function Ue(s){let t,a,n,r,o,h=s[1],i=[];for(let l=0;l<h.length;l+=1)i[l]=Ee(ye(s,h,l));let v=s[0],u=[];for(let l=0;l<v.length;l+=1)u[l]=be(ge(s,v,l));const E=l=>j(u[l],1,1,()=>{u[l]=null});return{c(){t=g("table"),a=g("thead");for(let l=0;l<i.length;l+=1)i[l].c();n=w(),r=g("tbody");for(let l=0;l<u.length;l+=1)u[l].c();this.h()},l(l){t=y(l,"TABLE",{class:!0});var d=D(t);a=y(d,"THEAD",{});var e=D(a);for(let p=0;p<i.length;p+=1)i[p].l(e);e.forEach(m),n=B(d),r=y(d,"TBODY",{});var f=D(r);for(let p=0;p<u.length;p+=1)u[p].l(f);f.forEach(m),d.forEach(m),this.h()},h(){_(t,"class","svelte-1w5bhrs")},m(l,d){C(l,t,d),c(t,a);for(let e=0;e<i.length;e+=1)i[e].m(a,null);c(t,n),c(t,r);for(let e=0;e<u.length;e+=1)u[e].m(r,null);o=!0},p(l,[d]){if(d&2){h=l[1];let e;for(e=0;e<h.length;e+=1){const f=ye(l,h,e);i[e]?i[e].p(f,d):(i[e]=Ee(f),i[e].c(),i[e].m(a,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=h.length}if(d&1){v=l[0];let e;for(e=0;e<v.length;e+=1){const f=ge(l,v,e);u[e]?(u[e].p(f,d),L(u[e],1)):(u[e]=be(f),u[e].c(),L(u[e],1),u[e].m(r,null))}for(Ie(),e=v.length;e<u.length;e+=1)E(e);we()}},i(l){if(!o){for(let d=0;d<v.length;d+=1)L(u[d]);o=!0}},o(l){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)j(u[d]);o=!1},d(l){l&&m(t),me(i,l),me(u,l)}}}function Fe(s,t,a){let n=["Date","Type","Name","Image"],{entries:r}=t;return s.$$set=o=>{"entries"in o&&a(0,r=o.entries)},[r,n]}class Pe extends z{constructor(t){super();Z(this,t,Fe,Ue,G,{entries:0})}}function Le(s){let t,a,n,r,o,h,i,v,u,E,l,d,e,f,p,$,T,b,R,A,V,q,P,W,x,O,N,U,ee,se;return N=new He({props:{accept:"image/*",multiple:!1,containerStyles:`;
        padding: 0;
        height: 196px;
        width: 196px;
        background-color:var(--background-color);
        `}}),N.$on("drop",s[2]),{c(){t=g("div"),a=g("form"),n=g("div"),r=g("input"),h=w(),i=g("input"),u=w(),E=g("input"),d=w(),e=g("datalist"),f=g("option"),p=S("Type"),$=g("option"),T=S("Holiday"),b=g("option"),R=S("Birthday"),A=g("option"),V=S("Anniversary"),q=w(),P=g("button"),W=S("Save"),x=w(),O=g("div"),K(N.$$.fragment),this.h()},l(k){t=y(k,"DIV",{});var H=D(t);a=y(H,"FORM",{class:!0});var M=D(a);n=y(M,"DIV",{class:!0});var I=D(n);r=y(I,"INPUT",{id:!0,type:!0,name:!0,class:!0}),h=B(I),i=y(I,"INPUT",{id:!0,type:!0,list:!0,class:!0}),u=B(I),E=y(I,"INPUT",{id:!0,type:!0,name:!0,placeholder:!0,class:!0}),d=B(I),e=y(I,"DATALIST",{id:!0});var F=D(e);f=y(F,"OPTION",{});var re=D(f);p=Y(re,"Type"),re.forEach(m),$=y(F,"OPTION",{});var oe=D($);T=Y(oe,"Holiday"),oe.forEach(m),b=y(F,"OPTION",{});var ie=D(b);R=Y(ie,"Birthday"),ie.forEach(m),A=y(F,"OPTION",{});var ce=D(A);V=Y(ce,"Anniversary"),ce.forEach(m),F.forEach(m),q=B(I),P=y(I,"BUTTON",{type:!0});var ue=D(P);W=Y(ue,"Save"),ue.forEach(m),I.forEach(m),x=B(M),O=y(M,"DIV",{class:!0,style:!0});var de=D(O);X(N.$$.fragment,de),de.forEach(m),M.forEach(m),H.forEach(m),this.h()},h(){var k,H,M;_(r,"id","event-date"),_(r,"type","date"),_(r,"name","date"),r.value=o=(H=(k=s[1].date)==null?void 0:k.slice(0,10))!=null?H:"YYYY-MM-DD",_(r,"class","svelte-18y0otl"),_(i,"id","event-type"),_(i,"type","text"),_(i,"list","types"),i.value=v=(M=s[1].type)!=null?M:"",_(i,"class","svelte-18y0otl"),_(E,"id","event-name"),_(E,"type","text"),_(E,"name","name"),_(E,"placeholder","Name"),E.value=l=s[1].name,_(E,"class","svelte-18y0otl"),f.__value="",f.value=f.__value,$.__value="Holiday",$.value=$.__value,b.__value="Birthday",b.value=b.__value,A.__value="Anniversary",A.value=A.__value,_(e,"id","types"),_(P,"type","button"),_(n,"class","text-input svelte-18y0otl"),_(O,"class","image-input svelte-18y0otl"),fe(O,"background-image","url("+(s[0]||s[1].image)+")"),_(a,"class","svelte-18y0otl")},m(k,H){C(k,t,H),c(t,a),c(a,n),c(n,r),c(n,h),c(n,i),c(n,u),c(n,E),c(n,d),c(n,e),c(e,f),c(f,p),c(e,$),c($,T),c(e,b),c(b,R),c(e,A),c(A,V),c(n,q),c(n,P),c(P,W),c(a,x),c(a,O),J(N,O,null),U=!0,ee||(se=_e(P,"click",s[3]),ee=!0)},p(k,[H]){var M,I,F;(!U||H&2&&o!==(o=(I=(M=k[1].date)==null?void 0:M.slice(0,10))!=null?I:"YYYY-MM-DD"))&&(r.value=o),(!U||H&2&&v!==(v=(F=k[1].type)!=null?F:"")&&i.value!==v)&&(i.value=v),(!U||H&2&&l!==(l=k[1].name)&&E.value!==l)&&(E.value=l),(!U||H&3)&&fe(O,"background-image","url("+(k[0]||k[1].image)+")")},i(k){U||(L(N.$$.fragment,k),U=!0)},o(k){j(N.$$.fragment,k),U=!1},d(k){k&&m(t),Q(N),ee=!1,se()}}}function Re(s,t,a){let n;pe(s,le,i=>a(1,n=i));let r=null;function o(i){const v=i.detail.acceptedFiles[0],u=new FileReader;u.onload=E=>{a(0,r=E.target.result),ne.update(l=>(l[Math.floor(Math.random()*10)].image=E.target.result,l))},u.readAsDataURL(v)}return[r,n,o,()=>{le.set({date:document.getElementById("event-date").value,type:document.getElementById("event-type").value,name:document.getElementById("event-name").value,image:r})}]}class Ve extends z{constructor(t){super();Z(this,t,Re,Le,G,{})}}const De=new Ae;De.init("US");const qe=De.getHolidays(new Date().getFullYear()).map(s=>({date:s.date,type:"Holiday",name:s.name,image:"https://picsum.photos/100/100"}));function Ce(s){let t,a,n,r,o,h,i,v,u,E,l,d;return h=new Ve({}),l=new Pe({props:{entries:s[0]}}),l.$on("message",Ge),{c(){t=w(),a=g("div"),n=g("h1"),r=S("Event Editor"),o=w(),K(h.$$.fragment),i=w(),v=g("h1"),u=S("Holidays"),E=w(),K(l.$$.fragment),this.h()},l(e){Ye('[data-svelte="svelte-kbjtp0"]',document.head).forEach(m),t=B(e),a=y(e,"DIV",{class:!0});var p=D(a);n=y(p,"H1",{});var $=D(n);r=Y($,"Event Editor"),$.forEach(m),o=B(p),X(h.$$.fragment,p),i=B(p),v=y(p,"H1",{});var T=D(v);u=Y(T,"Holidays"),T.forEach(m),E=B(p),X(l.$$.fragment,p),p.forEach(m),this.h()},h(){document.title="Data",_(a,"class","content svelte-cf77e8")},m(e,f){C(e,t,f),C(e,a,f),c(a,n),c(n,r),c(a,o),J(h,a,null),c(a,i),c(a,v),c(v,u),c(a,E),J(l,a,null),d=!0},p(e,[f]){const p={};f&1&&(p.entries=e[0]),l.$set(p)},i(e){d||(L(h.$$.fragment,e),L(l.$$.fragment,e),d=!0)},o(e){j(h.$$.fragment,e),j(l.$$.fragment,e),d=!1},d(e){e&&m(t),e&&m(a),Q(h),Q(l)}}}const Je=Se;let je=qe,ze=[{date:"1960-01-02 00:00:00",type:"Birthday",name:"Dad",image:"https://picsum.photos/100/100"},{date:"1961-03-04 00:00:00",type:"Birthday",name:"Mom",image:"https://picsum.photos/100/100"},{date:"1962-05-06 00:00:00",type:"Birthday",name:"Zoey",image:"https://picsum.photos/100/100"},{date:"1963-07-08 00:00:00",type:"Birthday",name:"Frankie",image:"https://picsum.photos/100/100"}],Ze=[{date:"1961-09-10 00:00:00",type:"Anniversary",name:"Mom & Dad",image:"https://picsum.photos/100/100"},{date:"1910-11-12 00:00:00",type:"Anniversary",name:"Aunt & Uncle",image:"https://picsum.photos/100/100"}],Te=[...je,...ze,...Ze];ne.set(Te);Te.sort((s,t)=>{const a=s.date.replace(/^(\d{4})/,"2022"),n=t.date.replace(/^(\d{4})/,"2022");return new Date(a)-new Date(n)});function Ge(s){preload=s}function Ke(s,t,a){let n;return pe(s,ne,r=>a(0,n=r)),[n]}class Qe extends z{constructor(t){super();Z(this,t,Ke,Ce,G,{})}}export{Qe as default,Je as router};
