(()=>{var G=Object.create;var j=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var tt=(m,l)=>()=>(l||m((l={exports:{}}).exports,l),l.exports);var et=(m,l,v,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let u of Q(l))!q.call(m,u)&&u!==v&&j(m,u,{get:()=>l[u],enumerable:!(a=K(l,u))||a.enumerable});return m};var nt=(m,l,v)=>(v=m!=null?G(Z(m)):{},et(l||!m||!m.__esModule?j(v,"default",{value:m,enumerable:!0}):v,m));var M=tt((w,P)=>{(function(l,v){typeof w=="object"&&typeof P=="object"?P.exports=v():typeof define=="function"&&define.amd?define([],v):typeof w=="object"?w.ClipboardJS=v():l.ClipboardJS=v()})(w,function(){return function(){var m={686:function(a,u,t){"use strict";t.d(u,{default:function(){return $}});var f=t(279),s=t.n(f),d=t(370),b=t.n(d),g=t(817),E=t.n(g);function p(i){try{return document.execCommand(i)}catch{return!1}}var h=function(n){var e=E()(n);return p("cut"),e},y=h;function _(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var R=function(n,e){var r=_(n);e.container.appendChild(r);var o=E()(r);return p("copy"),r.remove(),o},I=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=R(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=R(n.value,e):(r=E()(n),p("copy")),r},O=I;function x(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(i)}var F=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,c=n.target,S=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0)if(c&&x(c)==="object"&&c.nodeType===1){if(r==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(S)return O(S,{container:o});if(c)return r==="cut"?y(c):O(c,{container:o})},H=F;function T(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}function z(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function N(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function J(i,n,e){return n&&N(i.prototype,n),e&&N(i,e),i}function U(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&L(i,n)}function L(i,n){return L=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},L(i,n)}function V(i){var n=W();return function(){var r=A(i),o;if(n){var c=A(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return Y(this,o)}}function Y(i,n){return n&&(T(n)==="object"||typeof n=="function")?n:B(i)}function B(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function W(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(i){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(i)}function k(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var X=function(i){U(e,i);var n=V(e);function e(r,o){var c;return z(this,e),c=n.call(this),c.resolveOptions(o),c.listenClick(r),c}return J(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=T(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var c=this;this.listener=b()(o,"click",function(S){return c.onClick(S)})}},{key:"onClick",value:function(o){var c=o.delegateTarget||o.currentTarget,S=this.action(c)||"copy",C=H({action:S,container:this.container,target:this.target(c),text:this.text(c)});this.emit(C?"success":"error",{action:S,text:C,trigger:c,clearSelection:function(){c&&c.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return k("action",o)}},{key:"defaultTarget",value:function(o){var c=k("target",o);if(c)return document.querySelector(c)}},{key:"defaultText",value:function(o){return k("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(o,c)}},{key:"cut",value:function(o){return y(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],c=typeof o=="string"?[o]:o,S=!!document.queryCommandSupported;return c.forEach(function(C){S=S&&!!document.queryCommandSupported(C)}),S}}]),e}(s()),$=X},828:function(a){var u=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function f(s,d){for(;s&&s.nodeType!==u;){if(typeof s.matches=="function"&&s.matches(d))return s;s=s.parentNode}}a.exports=f},438:function(a,u,t){var f=t(828);function s(g,E,p,h,y){var _=b.apply(this,arguments);return g.addEventListener(p,_,y),{destroy:function(){g.removeEventListener(p,_,y)}}}function d(g,E,p,h,y){return typeof g.addEventListener=="function"?s.apply(null,arguments):typeof p=="function"?s.bind(null,document).apply(null,arguments):(typeof g=="string"&&(g=document.querySelectorAll(g)),Array.prototype.map.call(g,function(_){return s(_,E,p,h,y)}))}function b(g,E,p,h){return function(y){y.delegateTarget=f(y.target,E),y.delegateTarget&&h.call(g,y)}}a.exports=d},879:function(a,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var f=Object.prototype.toString.call(t);return t!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var f=Object.prototype.toString.call(t);return f==="[object Function]"}},370:function(a,u,t){var f=t(879),s=t(438);function d(p,h,y){if(!p&&!h&&!y)throw new Error("Missing required arguments");if(!f.string(h))throw new TypeError("Second argument must be a String");if(!f.fn(y))throw new TypeError("Third argument must be a Function");if(f.node(p))return b(p,h,y);if(f.nodeList(p))return g(p,h,y);if(f.string(p))return E(p,h,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function b(p,h,y){return p.addEventListener(h,y),{destroy:function(){p.removeEventListener(h,y)}}}function g(p,h,y){return Array.prototype.forEach.call(p,function(_){_.addEventListener(h,y)}),{destroy:function(){Array.prototype.forEach.call(p,function(_){_.removeEventListener(h,y)})}}}function E(p,h,y){return s(document.body,p,h,y)}a.exports=d},817:function(a){function u(t){var f;if(t.nodeName==="SELECT")t.focus(),f=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),f=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var d=window.getSelection(),b=document.createRange();b.selectNodeContents(t),d.removeAllRanges(),d.addRange(b),f=d.toString()}return f}a.exports=u},279:function(a){function u(){}u.prototype={on:function(t,f,s){var d=this.e||(this.e={});return(d[t]||(d[t]=[])).push({fn:f,ctx:s}),this},once:function(t,f,s){var d=this;function b(){d.off(t,b),f.apply(s,arguments)}return b._=f,this.on(t,b,s)},emit:function(t){var f=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),d=0,b=s.length;for(d;d<b;d++)s[d].fn.apply(s[d].ctx,f);return this},off:function(t,f){var s=this.e||(this.e={}),d=s[t],b=[];if(d&&f)for(var g=0,E=d.length;g<E;g++)d[g].fn!==f&&d[g].fn._!==f&&b.push(d[g]);return b.length?s[t]=b:delete s[t],this}},a.exports=u,a.exports.TinyEmitter=u}},l={};function v(a){if(l[a])return l[a].exports;var u=l[a]={exports:{}};return m[a](u,u.exports,v),u.exports}return function(){v.n=function(a){var u=a&&a.__esModule?function(){return a.default}:function(){return a};return v.d(u,{a:u}),u}}(),function(){v.d=function(a,u){for(var t in u)v.o(u,t)&&!v.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:u[t]})}}(),function(){v.o=function(a,u){return Object.prototype.hasOwnProperty.call(a,u)}}(),v(686)}().default})});var D=nt(M());new D.default(".color-copy",{text:l=>l.getAttribute("data-clipboard-text")}).on("success",l=>{let v=oudsWeb.Tooltip.getInstance(l.trigger),a=l.trigger.getAttribute("data-bs-title");v.setContent({".tooltip-inner":"Copied!"}),l.trigger.addEventListener("hidden.bs.tooltip",()=>{v.setContent({".tooltip-inner":a}),l.trigger.title=a},{once:!0}),l.trigger.addEventListener("mouseleave",()=>{v.hide()},{once:!0}),l.clearSelection()});})();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)
*/
