import{S as t,i as e,n,c as s,a as o,m as c,u as a,y as l,t as i,b as $,d as r,j as d,g as u,k as p,l as f,h as m,q as g,o as y,E as h,C as b,v as k,x,e as w,Q as v,f as A,R as E,O as _,z as S,H as T,I as D,J as N,K as V,V as P,W as I,X as j,T as H,M,A as z,Y as B,P as C,w as R,F as q,D as F,Z as J,s as K}from"./client.82990e35.js";import{H as O,M as Q,a as W,b as X}from"./Heading.4d47df06.js";function Y(t,e,n){const s=t.slice();return s[27]=e[n],s}const Z=t=>({opened:64&t,timeout:32&t}),G=t=>({opened:t[6],timeout:t[5]});function L(t){let e,n,d,u;function p(e){t[19].call(null,e)}function f(e){t[20].call(null,e)}let m={class:[t[8],a("mdc-snackbar",{opening:t[0],open:t[1],closing:t[2],leading:t[12],stacked:t[13]})],style:[t[9]],use:[t[11]],attributes:{...t[10]},on:{component:t[16]},$$slots:{default:[st]},$$scope:{ctx:t}};return void 0!==t[4]&&(m.tag=t[4]),void 0!==t[3]&&(m.node=t[3]),e=new b({props:m}),k.push(()=>x(e,"tag",p)),k.push(()=>x(e,"node",f)),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){c(e,t,n),u=!0},p(t,s){const o={};12551&s&&(o.class=[t[8],a("mdc-snackbar",{opening:t[0],open:t[1],closing:t[2],leading:t[12],stacked:t[13]})]),512&s&&(o.style=[t[9]]),2048&s&&(o.use=[t[11]]),1024&s&&(o.attributes={...t[10]}),2113760&s&&(o.$$scope={dirty:s,ctx:t}),!n&&16&s&&(n=!0,o.tag=t[4],l(()=>n=!1)),!d&&8&s&&(d=!0,o.node=t[3],l(()=>d=!1)),e.$set(o)},i(t){u||(i(e.$$.fragment,t),u=!0)},o(t){$(e.$$.fragment,t),u=!1},d(t){r(e,t)}}}function U(t){let e,n;return{c(){e=w(t[14]),n=v()},l(s){e=A(s,t[14]),n=E(s)},m(t,s){u(t,e,s),u(t,n,s)},p(t,n){16384&n&&_(e,t[14])},d(t){t&&m(e),t&&m(n)}}}function tt(t){let e,n,s=t[7],o=[];for(let e=0;e<s.length;e+=1)o[e]=nt(Y(t,s,e));const c=t=>$(o[t],1,1,()=>{o[t]=null});return{c(){e=T("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=D(t,"DIV",{class:!0});var n=N(e);for(let t=0;t<o.length;t+=1)o[t].l(n);n.forEach(m),this.h()},h(){V(e,"class","mdc-snackbar__actions")},m(t,s){u(t,e,s);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(131200&n){let a;for(s=t[7],a=0;a<s.length;a+=1){const c=Y(t,s,a);o[a]?(o[a].p(c,n),i(o[a],1)):(o[a]=nt(c),o[a].c(),i(o[a],1),o[a].m(e,null))}for(p(),a=s.length;a<o.length;a+=1)c(a);f()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)i(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)$(o[t]);n=!1},d(t){t&&m(e),H(o,t)}}}function et(t){let e,n,a;const l=[{class:"mdc-snackbar__action"},t[27]];var g=ct[t[27].type];function y(t){let e={};for(let t=0;t<l.length;t+=1)e=J(e,l[t]);return{props:e}}return g&&(e=new g(y()),e.$on("click",(function(){j(t[27].click||t[17])&&(t[27].click||t[17]).apply(this,arguments)}))),{c(){e&&s(e.$$.fragment),n=d()},l(t){e&&o(e.$$.fragment,t),n=d()},m(t,s){e&&c(e,t,s),u(t,n,s),a=!0},p(o,a){t=o;const d=128&a?P(l,[l[0],I(t[27])]):{};if(g!==(g=ct[t[27].type])){if(e){p();const t=e;$(t.$$.fragment,1,0,()=>{r(t,1)}),f()}g?(e=new g(y()),e.$on("click",(function(){j(t[27].click||t[17])&&(t[27].click||t[17]).apply(this,arguments)})),s(e.$$.fragment),i(e.$$.fragment,1),c(e,n.parentNode,n)):e=null}else g&&e.$set(d)},i(t){a||(e&&i(e.$$.fragment,t),a=!0)},o(t){e&&$(e.$$.fragment,t),a=!1},d(t){t&&m(n),e&&r(e,t)}}}function nt(t){let e,n,s=t[27].type in ct&&et(t);return{c(){s&&s.c(),e=d()},l(t){s&&s.l(t),e=d()},m(t,o){s&&s.m(t,o),u(t,e,o),n=!0},p(t,n){t[27].type in ct?s?(s.p(t,n),128&n&&i(s,1)):(s=et(t),s.c(),i(s,1),s.m(e.parentNode,e)):s&&(p(),$(s,1,1,()=>{s=null}),f())},i(t){n||(i(s),n=!0)},o(t){$(s),n=!1},d(t){s&&s.d(t),t&&m(e)}}}function st(t){let e,n,s,o,c=t[14]&&U(t);const a=t[18].default,l=S(a,t,t[21],G);let r=t[7].length&&tt(t);return{c(){e=T("div"),n=T("div"),c&&c.c(),s=d(),l&&l.c(),r&&r.c(),this.h()},l(t){e=D(t,"DIV",{class:!0});var o=N(e);n=D(o,"DIV",{class:!0,role:!0,"aria-live":!0});var a=N(n);c&&c.l(a),s=d(),l&&l.l(a),a.forEach(m),r&&r.l(o),o.forEach(m),this.h()},h(){V(n,"class","mdc-snackbar__label"),V(n,"role","status"),V(n,"aria-live","polite"),V(e,"class","mdc-snackbar__surface")},m(t,a){u(t,e,a),M(e,n),c&&c.m(n,null),M(n,s),l&&l.m(n,null),r&&r.m(e,null),o=!0},p(t,o){t[14]?c?c.p(t,o):(c=U(t),c.c(),c.m(n,s)):c&&(c.d(1),c=null),l&&l.p&&2097248&o&&z(l,a,t,t[21],o,Z,G),t[7].length?r?(r.p(t,o),128&o&&i(r,1)):(r=tt(t),r.c(),i(r,1),r.m(e,null)):r&&(p(),$(r,1,1,()=>{r=null}),f())},i(t){o||(i(l,t),i(r),o=!0)},o(t){$(l,t),$(r),o=!1},d(t){t&&m(e),c&&c.d(),l&&l.d(t),r&&r.d()}}}function ot(t){let e,n,s=(!t[15]||t[0]||t[1]||t[2])&&L(t);return{c(){s&&s.c(),e=d()},l(t){s&&s.l(t),e=d()},m(t,o){s&&s.m(t,o),u(t,e,o),n=!0},p(t,[n]){!t[15]||t[0]||t[1]||t[2]?s?(s.p(t,n),32775&n&&i(s,1)):(s=L(t),s.c(),i(s,1),s.m(e.parentNode,e)):s&&(p(),$(s,1,1,()=>{s=null}),f())},i(t){n||(i(s),n=!0)},o(t){$(s),n=!1},d(t){s&&s.d(t),t&&m(e)}}}const ct={button:B,icon:C},at=R([]);function lt(t,e,n){let s;g(t,at,t=>n(24,s=t));const o=y();let c,a,{class:l=""}=e,{style:i=""}=e,{props:$={}}=e,{use:r}=e,{opening:d}=e,{open:u}=e,{closing:p}=e,{leading:f}=e,{stacked:m}=e,{node:b}=e,{tag:k="div"}=e,{label:x}=e,{timeout:w=0}=e,{hiding:v=!0}=e,{opened:A=!1}=e;function E(t,e){!function(t){"undefined"!=typeof window&&t&&t.parentElement!==document.body&&document.body.append(t)}(t),F(at,s=[t,...s].filter(n=>!(!n||n.parentElement!==document.body)&&(n!==t||!!e)))}const _=t=>console.log("Snackbar click",t);let{actions:S=[{type:"icon",icon:"close",label:"close",click:_},{type:"button",icon:"close",label:"close",click:_}]}=e;h(()=>{n(22,c=!0);const t=at.subscribe(t=>{if(!b)return;let e=0;t.some(t=>{if(t===b)return!0;const{height:n}=t.getBoundingClientRect();e+=n+15}),n(3,b.style.bottom=e+"px",b)});return()=>t()});let{$$slots:T={},$$scope:D}=e;return t.$$set=t=>{"class"in t&&n(8,l=t.class),"style"in t&&n(9,i=t.style),"props"in t&&n(10,$=t.props),"use"in t&&n(11,r=t.use),"opening"in t&&n(0,d=t.opening),"open"in t&&n(1,u=t.open),"closing"in t&&n(2,p=t.closing),"leading"in t&&n(12,f=t.leading),"stacked"in t&&n(13,m=t.stacked),"node"in t&&n(3,b=t.node),"tag"in t&&n(4,k=t.tag),"label"in t&&n(14,x=t.label),"timeout"in t&&n(5,w=t.timeout),"hiding"in t&&n(15,v=t.hiding),"opened"in t&&n(6,A=t.opened),"actions"in t&&n(7,S=t.actions),"$$scope"in t&&n(21,D=t.$$scope)},t.$$.update=()=>{32&t.$$.dirty&&n(5,w=+w||0),32&t.$$.dirty&&w<100&&n(5,w*=1e3),12583008&t.$$.dirty&&c&&A&&w&&(clearTimeout(a),n(23,a=setTimeout(()=>n(6,A=!1),w))),64&t.$$.dirty&&async function(t){c&&(n(0,d=!1),n(2,p=!1),await q(),t?(n(0,d=!0),n(2,p=!1),await q(),setTimeout(()=>n(1,u=!0),125),setTimeout(()=>n(0,d=!1),500)):(n(0,d=!1),n(2,p=!0),await q(),setTimeout(()=>n(1,u=!1),125),setTimeout(()=>n(2,p=!1),500)))}(A),10&t.$$.dirty&&E(b,u),128&t.$$.dirty&&(Array.isArray(S)||n(7,S=[]))},[d,u,p,b,k,w,A,S,l,i,$,r,f,m,x,v,o,_,T,function(t){k=t,n(4,k)},function(t){b=t,n(3,b)},D]}class it extends t{constructor(t){super(),e(this,t,lt,ot,n,{class:8,style:9,props:10,use:11,opening:0,open:1,closing:2,leading:12,stacked:13,node:3,tag:4,label:14,timeout:5,hiding:15,opened:6,actions:7})}}function $t(t){let e;return{c(){e=w("Snackbar")},l(t){e=A(t,"Snackbar")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function rt(t){let e;return{c(){e=w("open snackbars")},l(t){e=A(t,"open snackbars")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function dt(t){let e,n,a,l;return a=new B({props:{raised:!0,$$slots:{default:[rt]},$$scope:{ctx:t}}}),a.$on("click",t[3]),{c(){e=T("p"),n=w("Variables: label, stacked, leading, timeout"),s(a.$$.fragment)},l(t){e=D(t,"P",{});var s=N(e);n=A(s,"Variables: label, stacked, leading, timeout"),s.forEach(m),o(a.$$.fragment,t)},m(t,s){u(t,e,s),M(e,n),c(a,t,s),l=!0},p(t,e){const n={};512&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){l||(i(a.$$.fragment,t),l=!0)},o(t){$(a.$$.fragment,t),l=!1},d(t){t&&m(e),r(a,t)}}}function ut(t){let e,n;return e=new X({props:{s:"12",$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){c(e,t,s),n=!0},p(t,n){const s={};519&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function pt(t){let e,n;return e=new W({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){c(e,t,s),n=!0},p(t,n){const s={};519&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function ft(t){let e,n,s,o,c=+t[8]/1e3+"";return{c(){e=T("span"),n=w("Default. Autoclosed by "),s=w(c),o=w(" seconds")},l(t){e=D(t,"SPAN",{});var a=N(e);n=A(a,"Default. Autoclosed by "),s=A(a,c),o=A(a," seconds"),a.forEach(m)},m(t,c){u(t,e,c),M(e,n),M(e,s),M(e,o)},p(t,e){256&e&&c!==(c=+t[8]/1e3+"")&&_(s,c)},d(t){t&&m(e)}}}function mt(t){let e;return{c(){e=w("stacked")},l(t){e=A(t,"stacked")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function gt(t){let e,n,s,o,c=+t[8]/1e3+"";return{c(){e=T("span"),n=w("leading. Autoclosed by "),s=w(c),o=w(" seconds")},l(t){e=D(t,"SPAN",{});var a=N(e);n=A(a,"leading. Autoclosed by "),s=A(a,c),o=A(a," seconds"),a.forEach(m)},m(t,c){u(t,e,c),M(e,n),M(e,s),M(e,o)},p(t,e){256&e&&c!==(c=+t[8]/1e3+"")&&_(s,c)},d(t){t&&m(e)}}}function yt(t){let e;return{c(){e=w("leading")},l(t){e=A(t,"leading")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function ht(t){let e,n,s,o,c=+t[8]/1e3+"";return{c(){e=T("span"),n=w("stacked. Autoclosed by "),s=w(c),o=w(" seconds")},l(t){e=D(t,"SPAN",{});var a=N(e);n=A(a,"stacked. Autoclosed by "),s=A(a,c),o=A(a," seconds"),a.forEach(m)},m(t,c){u(t,e,c),M(e,n),M(e,s),M(e,o)},p(t,e){256&e&&c!==(c=+t[8]/1e3+"")&&_(s,c)},d(t){t&&m(e)}}}function bt(t){let e,n,a,d,u,p,f,m,g,y,h;function b(e){t[5].call(null,e)}e=new O({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),n=new O({props:{h:"6",z:"0"}}),a=new Q({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),d=new it({props:{opened:t[0],timeout:6,actions:[],$$slots:{default:[ft,({timeout:t})=>({8:t}),({timeout:t})=>t?256:0]},$$scope:{ctx:t}}});let w={stacked:!0,actions:[{type:"icon",icon:"close",click:t[4]}],$$slots:{default:[mt]},$$scope:{ctx:t}};function v(e){t[7].call(null,e)}void 0!==t[1]&&(w.opened=t[1]),u=new it({props:w}),k.push(()=>x(u,"opened",b)),f=new it({props:{opened:t[0],leading:!0,timeout:2,actions:[],$$slots:{default:[gt,({timeout:t})=>({8:t}),({timeout:t})=>t?256:0]},$$scope:{ctx:t}}});let A={leading:!0,actions:[{type:"button",icon:"close",outlined:!0,label:"close",click:t[6]}],$$slots:{default:[yt]},$$scope:{ctx:t}};return void 0!==t[2]&&(A.opened=t[2]),m=new it({props:A}),k.push(()=>x(m,"opened",v)),y=new it({props:{opened:t[0],stacked:!0,timeout:4,actions:[],$$slots:{default:[ht,({timeout:t})=>({8:t}),({timeout:t})=>t?256:0]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),s(n.$$.fragment),s(a.$$.fragment),s(d.$$.fragment),s(u.$$.fragment),s(f.$$.fragment),s(m.$$.fragment),s(y.$$.fragment)},l(t){o(e.$$.fragment,t),o(n.$$.fragment,t),o(a.$$.fragment,t),o(d.$$.fragment,t),o(u.$$.fragment,t),o(f.$$.fragment,t),o(m.$$.fragment,t),o(y.$$.fragment,t)},m(t,s){c(e,t,s),c(n,t,s),c(a,t,s),c(d,t,s),c(u,t,s),c(f,t,s),c(m,t,s),c(y,t,s),h=!0},p(t,[n]){const s={};512&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};519&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o);const c={};1&n&&(c.opened=t[0]),768&n&&(c.$$scope={dirty:n,ctx:t}),d.$set(c);const i={};2&n&&(i.actions=[{type:"icon",icon:"close",click:t[4]}]),512&n&&(i.$$scope={dirty:n,ctx:t}),!p&&2&n&&(p=!0,i.opened=t[1],l(()=>p=!1)),u.$set(i);const $={};1&n&&($.opened=t[0]),768&n&&($.$$scope={dirty:n,ctx:t}),f.$set($);const r={};4&n&&(r.actions=[{type:"button",icon:"close",outlined:!0,label:"close",click:t[6]}]),512&n&&(r.$$scope={dirty:n,ctx:t}),!g&&4&n&&(g=!0,r.opened=t[2],l(()=>g=!1)),m.$set(r);const h={};1&n&&(h.opened=t[0]),768&n&&(h.$$scope={dirty:n,ctx:t}),y.$set(h)},i(t){h||(i(e.$$.fragment,t),i(n.$$.fragment,t),i(a.$$.fragment,t),i(d.$$.fragment,t),i(u.$$.fragment,t),i(f.$$.fragment,t),i(m.$$.fragment,t),i(y.$$.fragment,t),h=!0)},o(t){$(e.$$.fragment,t),$(n.$$.fragment,t),$(a.$$.fragment,t),$(d.$$.fragment,t),$(u.$$.fragment,t),$(f.$$.fragment,t),$(m.$$.fragment,t),$(y.$$.fragment,t),h=!1},d(t){r(e,t),r(n,t),r(a,t),r(d,t),r(u,t),r(f,t),r(m,t),r(y,t)}}}function kt(t,e,n){let s=!1,o=!1,c=!1;return[s,o,c,()=>n(0,s=n(1,o=n(2,c=Math.random()))),()=>n(1,o=!1),function(t){o=t,n(1,o)},()=>n(2,c=!1),function(t){c=t,n(2,c)}]}export default class extends t{constructor(t){super(),e(this,t,kt,bt,K,{})}}
