!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`),o=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let s=-1,n=0;const a=[],l=e=>{const h=e.content,u=document.createTreeWalker(h,133,null,!1);let p,f;for(;u.nextNode();){s++,p=f;const e=f=u.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(i)>=0&&l++;for(;l-- >0;){const i=t.strings[n],a=d.exec(i)[2],l=o&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),c=e.getAttribute(l).split(r);this.parts.push({type:"attribute",index:s,name:a,strings:c}),e.removeAttribute(l),n+=c.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(i)<0)continue;const o=e.parentNode,l=t.split(r),d=l.length-1;n+=d;for(let t=0;t<d;t++)o.insertBefore(""===l[t]?c():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:s++});o.insertBefore(""===l[d]?c():document.createTextNode(l[d]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===i){const t=e.parentNode,i=e.previousSibling;null===i||i!==p||i.nodeType!==Node.TEXT_NODE?t.insertBefore(c(),e):s--,this.parts.push({type:"node",index:s++}),a.push(e),null===e.nextSibling?t.insertBefore(c(),e):s--,f=p,n++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(i,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,h=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function u(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,h,null,!1);let r=f(i),o=i[r],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,o=i[r=f(i,r)]}c.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const s=document.createTreeWalker(t,h,null,!1);for(;s.nextNode();)e++;return e},f=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,_=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},g=new WeakMap,y=t=>"function"==typeof t&&g.has(t),v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this._getTemplate=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=m?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const r=document.createTreeWalker(t,133,null,!1);let o=r.nextNode();for(;s<e.length&&null!==o;){const t=e[s];if(l(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this._getTemplate);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings));s++}else i++,"TEMPLATE"===o.nodeName&&n(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return n(t),m&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class P{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!0;for(let r=0;r<t;r++){const t=this.strings[r];e+=t;const a=t.lastIndexOf(">");!(s=(a>-1||s)&&-1===t.indexOf("<",a+1))&&o&&(e=e.replace(d,(t,e,s,i)=>"style"===s?`${e}style$${i}`:t)),e+=s?n:i}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>null===t||!("object"==typeof t||"function"==typeof t);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||x(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this._pendingValue=void 0,this.templateFactory=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=c()),t._insert(this.endNode=c())}insertAfterPart(t){t._insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=v,t(this)}const t=this._pendingValue;t!==v&&(x(t)?t!==this.value&&this._commitText(t):t instanceof P?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new b(e,t.processor,this.templateFactory),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new N(this.templateFactory),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){_(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=v,t(this)}if(this._pendingValue===v)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=v}}class E extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new V(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class V extends w{}class A{constructor(t,e){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=v,t(this)}this._pendingValue!==v&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=v)}handleEvent(t){"function"==typeof this.value?this.value.call(this.element,t):"function"==typeof this.value.handleEvent&&this.value.handleEvent(t)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function M(t,e,s=function(t){let e=C.get(t.type);void 0===e&&(e=new Map,C.set(t.type,e));let s=e.get(t.strings);return void 0===s&&(s=new a(t,t.getTemplateElement()),e.set(t.strings,s)),s}){let i=O.get(e);void 0===i&&(_(e,e.firstChild),O.set(e,i=new N(s)),i.appendInto(e)),i.setValue(t),i.commit()}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new class{handleAttributeExpressions(t,e,s){const i=e[0];return"."===i?new E(t,e.slice(1),s).parts:"@"===i?[new A(t,e.slice(1))]:"?"===i?[new T(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new N(t)}},R=(t,...e)=>new P(t,e,"html",j),F=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),U=!1);const k=t=>e=>{const s=F(e.type,t);let i=C.get(s);void 0===i&&(i=new Map,C.set(s,i));let n=i.get(e.strings);if(void 0===n){const s=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(s,t),n=new a(e,s),i.set(e.strings,n)}return n},q=["html","svg"];const $=new Set,z=(t,e,s)=>{$.add(s);const i=t.querySelectorAll("style");if(0===i.length)return;const n=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}if(function(t){q.forEach(e=>{const s=C.get(F(e,t));void 0!==s&&s.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),u(t,s)})})}(s),function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null===s||void 0===s)return void i.appendChild(e);const r=document.createTreeWalker(i,h,null,!1);let o=f(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=p(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=f(n,o);return}o=f(n,o)}}(e,n,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(n,e.element.content.firstChild);const t=new Set;t.add(n),u(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=t=>null!==t,B=t=>t?"":null,L=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,reflect:!1,hasChanged:L},H=new Promise(t=>t(!0)),D=1,X=4,G=8;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=H,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,s]of this._classProperties){const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=W){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(i){const n=this[t];this[s]=i,this._requestPropertyUpdate(t,n,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,s=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of s)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const s=void 0!==e&&e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=L){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e&&e.type;if(void 0===s)return t;const i=s===Boolean?I:"function"==typeof s?s:s.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?B:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&D?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=W){const i=this.constructor,n=i._propertyValueToAttribute(e,s);if(void 0!==n){const e=i._attributeNameForProperty(t,s);void 0!==e&&(this._updateState=this._updateState|G,null===n?this.removeAttribute(e):this.setAttribute(e,n),this._updateState=this._updateState&~G)}}_attributeToProperty(t,e){if(!(this._updateState&G)){const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i);this[i]=s._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const s=this.constructor._classProperties.get(t)||W;return this._requestPropertyUpdate(t,e,s)}return this._invalidate()}_requestPropertyUpdate(t,e,s){return this.constructor._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===s.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|X;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&X}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&D||(this._updateState=this._updateState|D,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}Z._attributeToPropertyMap=new Map,Z._finalized=!0,Z._classProperties=new Map,Z.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
J((t,e)=>t.querySelector(e)),J((t,e)=>t.querySelectorAll(e));function J(t){return e=>(s,i)=>{Object.defineProperty(s,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}class K extends Z{update(t){if(super.update(t),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}K.render=function(t,e,s){const i=O.has(e);if(M(t,e,k(s)),e instanceof ShadowRoot&&U&&t instanceof P){if(!$.has(s)){const t=O.get(e).value;z(e,t.template,s)}i||window.ShadyCSS.styleElement(e.host)}};class Q extends K{constructor(){super(...arguments),this.value=""}render(){return R`
        <style>
            button {
                color: white;
                background-color: #1989cb;
                border-radius: 3px;
                padding: 0.8rem 2rem;
                cursor: pointer;
            }
            button:hover {
                background-color: #5aa8d6;
            }
        </style>
        <button>
            <slot></slot>
        </button>
        `}}(function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);r>3&&o&&Object.defineProperty(e,s,o)})([(t=>(e,s)=>{e.constructor.createProperty(s,t)})({reflect:!1})],Q.prototype,"value",void 0),window.customElements.define("my-button",Q)}]);