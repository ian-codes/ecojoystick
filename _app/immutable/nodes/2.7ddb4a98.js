import{s as E,n as $}from"../chunks/scheduler.6b346e2e.js";import{S as I,i as w,g as m,h as p,x as z,k as g,a as T,f as d,s as b,r as V,j as y,c as C,u as j,y as h,v as k,d as x,t as S,w as q,m as H,n as A,o as M,p as P,b as B,A as N}from"../chunks/index.33e74c3d.js";function D(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function W(c){let e,t=`Try our services
    <div style="background-image: url(&#39;arrpw.png&#39;);" class="arrow svelte-1bzjboe"></div>`;return{c(){e=m("a"),e.innerHTML=t,this.h()},l(s){e=p(s,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-bjyghd"&&(e.innerHTML=t),this.h()},h(){g(e,"href","#"),g(e,"class","svelte-1bzjboe")},m(s,u){T(s,e,u)},p:$,i:$,o:$,d(s){s&&d(e)}}}class F extends I{constructor(e){super(),w(this,e,null,W,E,{})}}function G(c){let e,t,s="We help gamers set up and run their servers.",u,l,f=`And we monitor, manage &amp; optimize them continuously to ensure a great experience.
        <br/>
        Starting from as low as $10/month. 100% money-back guarantee if you aren&#39;t satisfied.`,i,n,v,r;return v=new F({}),{c(){e=m("section"),t=m("h2"),t.textContent=s,u=b(),l=m("p"),l.innerHTML=f,i=b(),n=m("div"),V(v.$$.fragment),this.h()},l(o){e=p(o,"SECTION",{class:!0});var a=y(e);t=p(a,"H2",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-s1n40h"&&(t.textContent=s),u=C(a),l=p(a,"P",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-3pzpkp"&&(l.innerHTML=f),i=C(a),n=p(a,"DIV",{class:!0});var _=y(n);j(v.$$.fragment,_),_.forEach(d),a.forEach(d),this.h()},h(){g(t,"class","svelte-18q2m76"),g(l,"class","svelte-18q2m76"),g(n,"class","incentive-container svelte-18q2m76"),g(e,"class","svelte-18q2m76")},m(o,a){T(o,e,a),h(e,t),h(e,u),h(e,l),h(e,i),h(e,n),k(v,n,null),r=!0},p:$,i(o){r||(x(v.$$.fragment,o),r=!0)},o(o){S(v.$$.fragment,o),r=!1},d(o){o&&d(e),q(v)}}}class J extends I{constructor(e){super(),w(this,e,null,G,E,{})}}function K(c){let e,t,s,u,l,f;return{c(){e=m("div"),t=m("span"),s=H(c[0]),u=b(),l=m("p"),f=H(c[1]),this.h()},l(i){e=p(i,"DIV",{class:!0});var n=y(e);t=p(n,"SPAN",{class:!0});var v=y(t);s=A(v,c[0]),v.forEach(d),u=C(n),l=p(n,"P",{class:!0});var r=y(l);f=A(r,c[1]),r.forEach(d),n.forEach(d),this.h()},h(){g(t,"class","title svelte-12yt4z4"),g(l,"class","svelte-12yt4z4"),g(e,"class","container svelte-12yt4z4")},m(i,n){T(i,e,n),h(e,t),h(t,s),h(e,u),h(e,l),h(l,f)},p(i,[n]){n&1&&M(s,i[0]),n&2&&M(f,i[1])},i:$,o:$,d(i){i&&d(e)}}}function Q(c,e,t){let{title:s}=e,{text:u}=e;return c.$$set=l=>{"title"in l&&t(0,s=l.title),"text"in l&&t(1,u=l.text)},[s,u]}class R extends I{constructor(e){super(),w(this,e,Q,K,E,{title:0,text:1})}}function L(c,e,t){const s=c.slice();return s[1]=e[t],s}function O(c){let e,t;return e=new R({props:{title:c[1],text:c[0][c[1]]}}),{c(){V(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,u){k(e,s,u),t=!0},p:$,i(s){t||(x(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){q(e,s)}}}function U(c){let e,t,s="Select a supported game:",u,l,f,i=D(Object.keys(c[0])),n=[];for(let r=0;r<i.length;r+=1)n[r]=O(L(c,i,r));const v=r=>S(n[r],1,1,()=>{n[r]=null});return{c(){e=m("section"),t=m("h2"),t.textContent=s,u=b(),l=m("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=p(r,"SECTION",{});var o=y(e);t=p(o,"H2",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-1trq19d"&&(t.textContent=s),u=C(o),l=p(o,"DIV",{class:!0});var a=y(l);for(let _=0;_<n.length;_+=1)n[_].l(a);a.forEach(d),o.forEach(d),this.h()},h(){g(t,"class","svelte-kt63h9"),g(l,"class","container svelte-kt63h9")},m(r,o){T(r,e,o),h(e,t),h(e,u),h(e,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(l,null);f=!0},p(r,[o]){if(o&1){i=D(Object.keys(r[0]));let a;for(a=0;a<i.length;a+=1){const _=L(r,i,a);n[a]?(n[a].p(_,o),x(n[a],1)):(n[a]=O(_),n[a].c(),x(n[a],1),n[a].m(l,null))}for(P(),a=i.length;a<n.length;a+=1)v(a);B()}},i(r){if(!f){for(let o=0;o<i.length;o+=1)x(n[o]);f=!0}},o(r){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)S(n[o]);f=!1},d(r){r&&d(e),N(n,r)}}}function X(c){return[{Minecraft:"Vanilla, modded, up to 64 players",Terraria:"Vanilla or modded, up to 8 players",BattleBit:"Vanilla or modded, up to 256 players"}]}class Y extends I{constructor(e){super(),w(this,e,X,U,E,{})}}function Z(c){let e,t,s,u,l;return t=new J({}),u=new Y({}),{c(){e=m("div"),V(t.$$.fragment),s=b(),V(u.$$.fragment),this.h()},l(f){e=p(f,"DIV",{class:!0});var i=y(e);j(t.$$.fragment,i),s=C(i),j(u.$$.fragment,i),i.forEach(d),this.h()},h(){g(e,"class","container svelte-17md9e6")},m(f,i){T(f,e,i),k(t,e,null),h(e,s),k(u,e,null),l=!0},p:$,i(f){l||(x(t.$$.fragment,f),x(u.$$.fragment,f),l=!0)},o(f){S(t.$$.fragment,f),S(u.$$.fragment,f),l=!1},d(f){f&&d(e),q(t),q(u)}}}class ne extends I{constructor(e){super(),w(this,e,null,Z,E,{})}}export{ne as component};
