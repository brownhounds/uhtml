self.uhtml=function(e){"use strict";var t=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},n=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,a=/<[a-z][^>]+$/i,o=/>[^<>]*$/,u=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,c=/\s+$/,i=function e(t,n){return 0<n--&&(a.test(t[n])||!o.test(t[n])&&e(t,n))},l=function(e,t,n){return r.test(t)?e:"<".concat(t).concat(n.replace(c,""),"></").concat(t,">")},f=function(e,t,r){for(var a=[],o=e.length,c=function(r){var o=e[r-1];a.push(n.test(o)&&i(e,r)?o.replace(n,(function(e,n,a){return"".concat(t).concat(r-1,"=").concat(a||'"').concat(n).concat(a?"":'"')})):"".concat(o,"\x3c!--").concat(t).concat(r-1,"--\x3e"))},f=1;f<o;f++)c(f);a.push(e[o-1]);var s=a.join("").trim();return r?s:s.replace(u,l)},s=Array.isArray,d=[],v=d.indexOf,p=d.slice,h=function(e,t){return 111===e.nodeType?1/t<0?t?function(e){var t=e.firstChild,n=e.lastChild,r=document.createRange();return r.setStartAfter(t),r.setEndAfter(n),r.deleteContents(),t}(e):e.lastChild:t?e.valueOf():e.firstChild:e},m=function(e){var t="fragment",n="template",r="content"in o(n)?function(e){var t=o(n);return t.innerHTML=e,t.content}:function(e){var r=o(t),u=o(n),c=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;u.innerHTML="<table>"+e+"</table>",c=u.querySelectorAll(i)}else u.innerHTML=e,c=u.childNodes;return a(r,c),r};return function(e,t){return("svg"===t?u:r)(e)};function a(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function u(e){var n=o(t),r=o("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",a(n,r.firstChild.childNodes),n}}(document),g=function(e,t){return e.childNodes[t]},y=function(e){for(var t=[],n=e.parentNode;n;)t.push(v.call(n.childNodes,e)),n=(e=n).parentNode;return t},w=document,b=w.createTreeWalker,N=w.importNode,x=1!=N.length,C=x?function(e,t,n){return N.call(document,m(e,t,n),!0)}:m,A=x?function(e){return b.call(document,e,129,null,!1)}:function(e){return b.call(document,e,129)},k=function(e,t,n){return function(e,t,n,r,a){for(var o=n.length,u=t.length,c=o,i=0,l=0,f=null;i<u||l<c;)if(u===i)for(var s=c<o?l?r(n[l-1],-0).nextSibling:r(n[c-l],0):a;l<c;)e.insertBefore(r(n[l++],1),s);else if(c===l)for(;i<u;)f&&f.has(t[i])||e.removeChild(r(t[i],-1)),i++;else if(t[i]===n[l])i++,l++;else if(t[u-1]===n[c-1])u--,c--;else if(t[i]===n[c-1]&&n[l]===t[u-1]){var d=r(t[--u],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[i++],-1).nextSibling),e.insertBefore(r(n[--c],1),d),t[u]=n[c]}else{if(!f){f=new Map;for(var v=l;v<c;)f.set(n[v],v++)}if(f.has(t[i])){var p=f.get(t[i]);if(l<p&&p<c){for(var h=i,m=1;++h<u&&h<c&&f.get(t[h])===p+m;)m++;if(m>p-l)for(var g=r(t[i],0);l<p;)e.insertBefore(r(n[l++],1),g);else e.replaceChild(r(n[l++],1),r(t[i++],-1))}else i++}else e.removeChild(r(t[i++],-1))}return n}(e.parentNode,t,n,h,e)},E=function(e,t){switch(t[0]){case"?":return function(e,t,n){return function(r){n!==!!r&&((n=!!r)?e.setAttribute(t,""):e.removeAttribute(t))}}(e,t.slice(1),!1);case".":return function(e,t){return"dataset"===t?function(e){var t=e.dataset;return function(e){for(var n in e){var r=e[n];null==r?delete t[n]:t[n]=r}}}(e):function(n){e[t]=n}}(e,t.slice(1));case"o":if("n"===t[1])return function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var a=s(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}}(e,t)}switch(t){case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);case"aria":return function(e){return function(t){for(var n in t){var r="role"===n?n:"aria-".concat(n),a=t[n];null==a?e.removeAttribute(r):e.setAttribute(r,a)}}}(e)}return function(e,t){var n,r=!0,a=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNode(a),r=!0):(a.value=t,r&&(e.setAttributeNodeNS(a),r=!1)))}}(e,t)};function T(e){var t=e.type,n=e.path.reduceRight(g,this);return"node"===t?function(e){var t,n,r=[];return function a(o){switch(typeof o){case"string":case"number":case"boolean":t!==o&&(t=o,n?n.nodeValue=o:n=document.createTextNode(o),r=k(e,r,[n]));break;case"object":case"undefined":if(null==o){t!=o&&(t=o,r=k(e,r,[]));break}if(s(o)){t=o,0===o.length?r=k(e,r,[]):"object"==typeof o[0]?r=k(e,r,o):a(String(o));break}"ELEMENT_NODE"in o&&t!==o&&(t=o,r=k(e,r,11===o.nodeType?p.call(o.childNodes):[o]))}}}(n):"attr"===t?E(n,e.name):function(e){var t;return function(n){t!=n&&(t=n,e.textContent=null==n?"":n)}}(n)}var L="isµ",M=t(new WeakMap),S=/^(?:plaintext|script|style|textarea|title|xmp)$/i,O=function(e,t){var n=M.get(t)||M.set(t,function(e,t){for(var n=f(t,L,"svg"===e),r=C(n,e),a=A(r),o=[],u=t.length-1,c=0,i="".concat(L).concat(c);c<u;){var l=a.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.nodeValue===i&&(o.push({type:"node",path:y(l)}),i="".concat(L).concat(++c));else{for(;l.hasAttribute(i);)o.push({type:"attr",path:y(l),name:l.getAttribute(i)}),l.removeAttribute(i),i="".concat(L).concat(++c);S.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(i,"--\x3e")&&(l.textContent="",o.push({type:"text",path:y(l)}),i="".concat(L).concat(++c))}}return{content:r,nodes:o}}(e,t)),r=n.content,a=n.nodes,o=N.call(document,r,!0);return{content:o,updates:a.map(T,o)}},$=function(e,t){var n=t.type,r=t.template,a=t.values,o=a.length;j(e,a,o);var u=e.entry;u&&u.template===r&&u.type===n||(e.entry=u=function(e,t){var n=O(e,t);return{type:e,template:t,content:n.content,updates:n.updates,wire:null}}(n,r));for(var c=u,i=c.content,l=c.updates,f=c.wire,s=0;s<o;s++)l[s](a[s]);return f||(u.wire=function(e){var t=e.childNodes,n=t.length;if(n<2)return n?t[0]:e;var r=p.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var a=0;a<n;)e.appendChild(r[a++]);return e}}}(i))},j=function e(t,n,r){for(var a=t.stack,o=0;o<r;o++){var u=n[o];u instanceof H?n[o]=$(a[o]||(a[o]={stack:[],entry:null,wire:null}),u):s(u)?e(a[o]||(a[o]={stack:[],entry:null,wire:null}),u,u.length):a[o]=null}r<a.length&&a.splice(r)};function H(e,t,n){this.type=e,this.template=t,this.values=n}var B=Object.create,W=Object.defineProperties,z=function(e){var n=t(new WeakMap);return W((function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return new H(e,t,r)}),{for:{value:function(t,r){var a=n.get(t)||n.set(t,B(null));return a[r]||(a[r]=function(t){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return $(t,{type:e,template:n,values:a})}}({stack:[],entry:null,wire:null}))}},node:{value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return $({stack:[],entry:null,wire:null},{type:e,template:t,values:r}).valueOf()}}})},D=t(new WeakMap),R=z("html"),_=z("svg");return e.Hole=H,e.html=R,e.render=function(e,t){var n="function"==typeof t?t():t,r=D.get(e)||D.set(e,{stack:[],entry:null,wire:null}),a=n instanceof H?$(r,n):n;return a!==r.wire&&(r.wire=a,e.textContent="",e.appendChild(a.valueOf())),e},e.svg=_,e}({});