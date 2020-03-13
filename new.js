var uhtml=function(e){"use strict";var t=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const n=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,l=/<[a-z][^>]+$/i,s=/>[^<>]*$/,o=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,i=/\s+$/,a=(e,t)=>{for(;t--;){const n=e[t];if(l.test(n))return!0;if(s.test(n))return!1}return!1},c=(e,t,n)=>r.test(t)?e:`<${t}${n.replace(i,"")}></${t}>`;const{isArray:u}=Array,{indexOf:d,slice:f}=[],p=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;const h=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),m=(e,t)=>("svg"===t?w:g)(e),g=e=>{const t=h("template");return t.innerHTML=e,t.content},w=e=>{const{content:t}=h("template"),n=h("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:l}=r;for(;l--;)t.appendChild(r[0]);return t},y=(e,t)=>e.childNodes[t],v=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(d.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:b,importNode:C}=document,$=1!=C.length,x=$?(e,t)=>C.call(document,m(e,t),!0):m,N=$?e=>b.call(document,e,129,null,!1):e=>b.call(document,e,129),k=(e,t,n)=>((e,t,n,r,l)=>{const s=n.length;let o=t.length,i=s,a=0,c=0,u=null;for(;a<o||c<i;)if(o===a){const t=i<s?c?r(n[c-1],-0).nextSibling:r(n[i-c],0):l;for(;c<i;)e.insertBefore(r(n[c++],1),t)}else if(i===c)for(;a<o;)u&&u.has(t[a])||e.removeChild(r(t[a],-1)),a++;else if(t[a]===n[c])a++,c++;else if(t[o-1]===n[i-1])o--,i--;else{if(o-a==1&&i-c==1){u&&u.has(t[a])?e.insertBefore(r(n[c],1),r(i<s?n[i]:l,0)):e.replaceChild(r(n[c],1),r(t[a],-1));break}if(t[a]===n[i-1]&&n[c]===t[o-1]){const l=r(t[--o],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[a++],-1).nextSibling),e.insertBefore(r(n[--i],1),l),t[o]=n[i]}else{if(!u){u=new Map;let e=c;for(;e<i;)u.set(n[e],e++)}if(u.has(t[a])){const l=u.get(t[a]);if(c<l&&l<i){let s=a,d=1;for(;++s<o&&s<i&&u.has(t[s])&&u.get(t[s])===l+d;)d++;if(d>l-c){const s=r(t[a],0);for(;c<l;)e.insertBefore(r(n[c++],1),s)}else e.replaceChild(r(n[c++],1),r(t[a++],-1))}else a++}else e.removeChild(r(t[a++],-1))}}return n})(e.parentNode,t,n,p,e);function E(e){const{type:t,path:n}=e,r=n.reduce(y,this);return"node"===t?((e,t)=>{let n,r;const l=s=>{switch(typeof s){case"string":case"number":case"boolean":n!==s&&(n=s,r||(r=document.createTextNode("")),r.textContent=s,t=k(e,t,[r]));break;case"object":case"undefined":if(null==s){n&&(n=s,t=k(e,t,[]));break}default:u(s)?(n=s,0===s.length?t=k(e,t,[]):"object"==typeof s[0]?t=k(e,t,s):l(String(s))):"ELEMENT_NODE"in s&&s!==n&&(n=s,t=k(e,t,11===s.nodeType?f.call(s.childNodes):[s]))}};return l})(r,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const l=u(t)?t:[t,!1];n!==l[0]&&(n&&e.removeEventListener(r,n,l[1]),(n=l[0])&&e.addEventListener(r,n,l[1]))}}let r=!0;const l=document.createAttribute(t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(l),r=!0):(l.value=t,r&&(e.setAttributeNode(l),r=!1)))}})(r,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(r)}const A=t(new WeakMap),T=(e,t)=>{const r=((e,t)=>{const r=[];for(let l=0,{length:s}=e;l<s;l++){const o=e[l];n.test(o)&&a(e,l+1)?r.push(o.replace(n,(e,n,r)=>`${t}${l}=${r||'"'}${n}${r?"":'"'}`)):l+1<s?r.push(o,`\x3c!--${t}${l}--\x3e`):r.push(o)}return r.join("").trim().replace(o,c)})(t,"isµ"),l=x(r,e),s=N(l),i=[],u=t.length-1;let d=0,f=`isµ${d}`;for(;d<u;){const e=s.nextNode();if(!e)throw`bad template: ${r}`;if(8===e.nodeType)e.textContent===f&&(i.push({type:"node",path:v(e)}),f=`isµ${++d}`);else{for(;e.hasAttribute(f);)i.push({type:"attr",path:v(e),name:e.getAttribute(f)}),e.removeAttribute(f),f=`isµ${++d}`;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${f}--\x3e`&&(i.push({type:"text",path:v(e)}),f=`isµ${++d}`)}}return{content:l,nodes:i}},L=(e,t)=>{const{content:n,nodes:r}=A.get(t)||A.set(t,T(e,t)),l=C.call(document,n,!0);return{content:l,updates:r.map(E,l)}},M=(e,{type:t,template:n,values:r})=>{const{length:l}=r;O(e,r,l);let{entry:s}=e;s&&s.template===n&&s.type===t||(e.entry=s=((e,t)=>{const{content:n,updates:r}=L(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:o,updates:i,wire:a}=s;for(let e=0;e<l;e++)i[e](r[e]);return a||(s.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const r=f.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(o))},O=({stack:e},t,n)=>{for(let r=0;r<n;r++){const n=t[r];n instanceof S?t[r]=M(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):u(n)?O(e[r]||(e[r]={stack:[],entry:null,wire:null}),n,n.length):e[r]=null}n<e.length&&e.splice(n)};function S(e,t,n){this.type=e,this.template=t,this.values=n}const{create:B,defineProperties:j}=Object,W=t(new WeakMap),z=e=>{const n=t(new WeakMap);return j((t,...n)=>new S(e,t,n),{for:{value(t,r){const l=n.get(t)||n.set(t,B(null));return l[r]||(l[r]=(t=>(n,...r)=>M(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>M({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},_=z("html"),D=z("svg");return e.html=_,e.render=(e,t)=>{const n="function"==typeof t?t():t,r=W.get(e)||W.set(e,{stack:[],entry:null,wire:null}),l=n instanceof S?M(r,n):n;return l!==r.wire&&(r.wire=l,e.textContent="",e.appendChild(l.valueOf())),e},e.svg=D,e}({});
