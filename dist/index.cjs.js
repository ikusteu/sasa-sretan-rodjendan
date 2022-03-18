"use strict";var Cc=Object.defineProperty,bc=Object.defineProperties;var Ac=Object.getOwnPropertyDescriptors;var Ur=Object.getOwnPropertySymbols;var _c=Object.prototype.hasOwnProperty,Dc=Object.prototype.propertyIsEnumerable;var Br=(e,t,n)=>t in e?Cc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jr=(e,t)=>{for(var n in t||(t={}))_c.call(t,n)&&Br(e,n,t[n]);if(Ur)for(var n of Ur(t))Dc.call(t,n)&&Br(e,n,t[n]);return e},qr=(e,t)=>bc(e,Ac(t));Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Nc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(n[h],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),l!==64){const w=u<<6&192|l;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Rc=function(e){const t=Wi(e);return kc.encodeByteArray(t,!0)},Xi=function(e){return Rc(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function Mc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Lc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fc(){return An().indexOf("Electron/")>=0}function Pc(){const e=An();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vc(){return An().indexOf("MSAppHost/")>=0}function $c(){return typeof indexedDB=="object"}function Uc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="FirebaseError";class _n extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Bc,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?jc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new _n(r,a,s)}}function jc(e,t){return e.replace(qc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const qc=/\{\$([^}]+)}/g;function sn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Hr(i)&&Hr(o)){if(!sn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Hr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){return new Promise((n,s)=>{e.onsuccess=r=>{n(r.target.result)},e.onerror=r=>{var i;s(`${t}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class Kr{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new Qi(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Ji(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Qi{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new Ji(this._transaction.objectStore(t))}}class Ji{constructor(t){this._store=t}index(t){return new zr(this._store.index(t))}createIndex(t,n,s){return new zr(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return ae(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return ae(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ae(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ae(t,"Error clearing IndexedDB object store")}}class zr{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ae(n,"Error reading from IndexedDB")}}function Hc(e,t,n){return new Promise((s,r)=>{try{const i=indexedDB.open(e,t);i.onsuccess=o=>{s(new Kr(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Kr(i.result),o.oldVersion,o.newVersion,new Qi(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class ge{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Oc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gc(t))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wt){return this.instances.has(t)}getOptions(t=wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=wt){return this.component?this.component.multipleInstances?t:wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zc(e){return e===wt?void 0:e}function Gc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Kc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const Xc={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Yc=_.INFO,Qc={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Jc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Qc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zi{constructor(t){this.name=t,this._logLevel=Yc,this._logHandler=Jc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ls="@firebase/app",Gr="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Zi("@firebase/app"),eu="@firebase/app-compat",nu="@firebase/analytics-compat",su="@firebase/analytics",ru="@firebase/app-check-compat",iu="@firebase/app-check",ou="@firebase/auth",au="@firebase/auth-compat",cu="@firebase/database",uu="@firebase/database-compat",hu="@firebase/functions",lu="@firebase/functions-compat",fu="@firebase/installations",du="@firebase/installations-compat",pu="@firebase/messaging",gu="@firebase/messaging-compat",mu="@firebase/performance",yu="@firebase/performance-compat",vu="@firebase/remote-config",wu="@firebase/remote-config-compat",Eu="@firebase/storage",Tu="@firebase/storage-compat",Su="@firebase/firestore",Iu="@firebase/firestore-compat",Cu="firebase",bu="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="[DEFAULT]",Au={[ls]:"fire-core",[eu]:"fire-core-compat",[su]:"fire-analytics",[nu]:"fire-analytics-compat",[iu]:"fire-app-check",[ru]:"fire-app-check-compat",[ou]:"fire-auth",[au]:"fire-auth-compat",[cu]:"fire-rtdb",[uu]:"fire-rtdb-compat",[hu]:"fire-fn",[lu]:"fire-fn-compat",[fu]:"fire-iid",[du]:"fire-iid-compat",[pu]:"fire-fcm",[gu]:"fire-fcm-compat",[mu]:"fire-perf",[yu]:"fire-perf-compat",[vu]:"fire-rc",[wu]:"fire-rc-compat",[Eu]:"fire-gcs",[Tu]:"fire-gcs-compat",[Su]:"fire-fst",[Iu]:"fire-fst-compat","fire-js":"fire-js",[Cu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Map,fs=new Map;function _u(e,t){try{e.container.addComponent(t)}catch(n){Ps.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function on(e){const t=e.name;if(fs.has(t))return Ps.debug(`There were multiple attempts to register component ${t}.`),!1;fs.set(t,e);for(const n of rn.values())_u(n,e);return!0}function eo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ct=new Yi("app","Firebase",Du);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=bu;function Ru(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:to,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});const r=rn.get(s);if(r){if(sn(e,r.options)&&sn(n,r.config))return r;throw Ct.create("duplicate-app",{appName:s})}const i=new Wc(s);for(const a of fs.values())i.addComponent(a);const o=new Nu(e,n,i);return rn.set(s,o),o}function Vs(e=to){const t=rn.get(e);if(!t)throw Ct.create("no-app",{appName:e});return t}function he(e,t,n){var s;let r=(s=Au[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ps.warn(a.join(" "));return}on(new ge(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="firebase-heartbeat-database",xu=1,me="firebase-heartbeat-store";let Qn=null;function no(){return Qn||(Qn=Hc(Ou,xu,(e,t)=>{switch(t){case 0:e.createObjectStore(me)}}).catch(e=>{throw Ct.create("storage-open",{originalErrorMessage:e.message})})),Qn}async function Mu(e){try{return(await no()).transaction(me).objectStore(me).get(so(e))}catch(t){throw Ct.create("storage-get",{originalErrorMessage:t.message})}}async function Wr(e,t){try{const s=(await no()).transaction(me,"readwrite");return await s.objectStore(me).put(t,so(e)),s.complete}catch(n){throw Ct.create("storage-set",{originalErrorMessage:n.message})}}function so(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=1024,Fu=30*24*60*60*1e3;class Pu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $u(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Fu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xr(),{heartbeatsToSend:n,unsentEntries:s}=Vu(this._heartbeatsCache.heartbeats),r=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xr(){return new Date().toISOString().substring(0,10)}function Vu(e,t=Lu){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Yr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $u{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $c()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Yr(e){return Xi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(e){on(new ge("platform-logger",t=>new Zc(t),"PRIVATE")),on(new ge("heartbeat",t=>new Pu(t),"PRIVATE")),he(ls,Gr,e),he(ls,Gr,"esm2017"),he("fire-js","")}Uu("");var Bu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,$s=$s||{},T=Bu||self;function an(){}function ds(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function De(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ju(e){return Object.prototype.hasOwnProperty.call(e,Jn)&&e[Jn]||(e[Jn]=++qu)}var Jn="closure_uid_"+(1e9*Math.random()>>>0),qu=0;function Hu(e,t,n){return e.call.apply(e.bind,arguments)}function Ku(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function j(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?j=Hu:j=Ku,j.apply(null,arguments)}function He(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function yt(){this.s=this.s,this.o=this.o}var zu=0,Gu={};yt.prototype.s=!1;yt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),zu!=0)){var e=ju(this);delete Gu[e]}};yt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ro=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},io=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function Wu(e){t:{var t=$h;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Qr(e){return Array.prototype.concat.apply([],arguments)}function Us(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function cn(e){return/^[\s\xa0]*$/.test(e)}var Jr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function X(e,t){return e.indexOf(t)!=-1}function Zn(e,t){return e<t?-1:e>t?1:0}var Y;t:{var Zr=T.navigator;if(Zr){var ti=Zr.userAgent;if(ti){Y=ti;break t}}Y=""}function Bs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function oo(e){const t={};for(const n in e)t[n]=e[n];return t}var ei="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ao(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<ei.length;i++)n=ei[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function js(e){return js[" "](e),e}js[" "]=an;function Xu(e){var t=Ju;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Yu=X(Y,"Opera"),Ut=X(Y,"Trident")||X(Y,"MSIE"),co=X(Y,"Edge"),ps=co||Ut,uo=X(Y,"Gecko")&&!(X(Y.toLowerCase(),"webkit")&&!X(Y,"Edge"))&&!(X(Y,"Trident")||X(Y,"MSIE"))&&!X(Y,"Edge"),Qu=X(Y.toLowerCase(),"webkit")&&!X(Y,"Edge");function ho(){var e=T.document;return e?e.documentMode:void 0}var un;t:{var ts="",es=function(){var e=Y;if(uo)return/rv:([^\);]+)(\)|;)/.exec(e);if(co)return/Edge\/([\d\.]+)/.exec(e);if(Ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Qu)return/WebKit\/(\S+)/.exec(e);if(Yu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(es&&(ts=es?es[1]:""),Ut){var ns=ho();if(ns!=null&&ns>parseFloat(ts)){un=String(ns);break t}}un=ts}var Ju={};function Zu(){return Xu(function(){let e=0;const t=Jr(String(un)).split("."),n=Jr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Zn(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Zn(r[2].length==0,i[2].length==0)||Zn(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var gs;if(T.document&&Ut){var ni=ho();gs=ni||parseInt(un,10)||void 0}else gs=void 0;var th=gs,eh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",an,t),T.removeEventListener("test",an,t)}catch{}return e}();function W(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};function ye(e,t){if(W.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(uo){t:{try{js(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:nh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ye.Z.h.call(this)}}z(ye,W);var nh={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),sh=0;function rh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++sh,this.ca=this.fa=!1}function Dn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Nn(e){this.src=e,this.g={},this.h=0}Nn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ys(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new rh(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function ms(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=ro(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Dn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ys(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var qs="closure_lm_"+(1e6*Math.random()|0),ss={};function lo(e,t,n,s,r){if(s&&s.once)return po(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)lo(e,t[i],n,s,r);return null}return n=zs(n),e&&e[Ne]?e.N(t,n,De(s)?!!s.capture:!!s,r):fo(e,t,n,!1,s,r)}function fo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=De(r)?!!r.capture:!!r,a=Ks(e);if(a||(e[qs]=a=new Nn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=ih(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)eh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(mo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ih(){function e(n){return t.call(e.src,e.listener,n)}var t=oh;return e}function po(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)po(e,t[i],n,s,r);return null}return n=zs(n),e&&e[Ne]?e.O(t,n,De(s)?!!s.capture:!!s,r):fo(e,t,n,!0,s,r)}function go(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)go(e,t[i],n,s,r);else s=De(s)?!!s.capture:!!s,n=zs(n),e&&e[Ne]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ys(i,n,s,r),-1<n&&(Dn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ks(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ys(t,n,s,r)),(n=-1<e?t[e]:null)&&Hs(n))}function Hs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ne])ms(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(mo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ks(t))?(ms(n,e),n.h==0&&(n.src=null,t[qs]=null)):Dn(e)}}}function mo(e){return e in ss?ss[e]:ss[e]="on"+e}function oh(e,t){if(e.ca)e=!0;else{t=new ye(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Hs(e),e=n.call(s,t)}return e}function Ks(e){return e=e[qs],e instanceof Nn?e:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(e){return typeof e=="function"?e:(e[rs]||(e[rs]=function(t){return e.handleEvent(t)}),e[rs])}function $(){yt.call(this),this.i=new Nn(this),this.P=this,this.I=null}z($,yt);$.prototype[Ne]=!0;$.prototype.removeEventListener=function(e,t,n,s){go(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new W(t,e);else if(t instanceof W)t.target=t.target||e;else{var r=t;t=new W(s,e),ao(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Ke(o,s,!0,t)&&r}if(o=t.g=e,r=Ke(o,s,!0,t)&&r,r=Ke(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Ke(o,s,!1,t)&&r}$.prototype.M=function(){if($.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Dn(n[s]);delete e.g[t],e.h--}}this.I=null};$.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};$.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ke(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ms(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Gs=T.JSON.stringify;function ah(){var e=vo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ch{constructor(){this.h=this.g=null}add(t,n){const s=yo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var yo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new uh,e=>e.reset());class uh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hh(e){T.setTimeout(()=>{throw e},0)}function Ws(e,t){vs||lh(),ws||(vs(),ws=!0),vo.add(e,t)}var vs;function lh(){var e=T.Promise.resolve(void 0);vs=function(){e.then(fh)}}var ws=!1,vo=new ch;function fh(){for(var e;e=ah();){try{e.h.call(e.g)}catch(n){hh(n)}var t=yo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ws=!1}function kn(e,t){$.call(this),this.h=e||1,this.g=t||T,this.j=j(this.kb,this),this.l=Date.now()}z(kn,$);g=kn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(Xs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){kn.Z.M.call(this),Xs(this),delete this.g};function Ys(e,t,n){if(typeof e=="function")n&&(e=j(e,n));else if(e&&typeof e.handleEvent=="function")e=j(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function wo(e){e.g=Ys(()=>{e.g=null,e.i&&(e.i=!1,wo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dh extends yt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wo(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ve(e){yt.call(this),this.h=e,this.g={}}z(ve,yt);var si=[];function Eo(e,t,n,s){Array.isArray(n)||(n&&(si[0]=n.toString()),n=si);for(var r=0;r<n.length;r++){var i=lo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function To(e){Bs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Hs(t)},e),e.g={}}ve.prototype.M=function(){ve.Z.M.call(this),To(this)};ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rn(){this.g=!0}Rn.prototype.Aa=function(){this.g=!1};function ph(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function gh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+yh(e,n)+(s?" "+s:"")})}function mh(e,t){e.info(function(){return"TIMEOUT: "+t})}Rn.prototype.info=function(){};function yh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gs(n)}catch{return t}}var Rt={},ri=null;function On(){return ri=ri||new $}Rt.Ma="serverreachability";function So(e){W.call(this,Rt.Ma,e)}z(So,W);function we(e){const t=On();q(t,new So(t,e))}Rt.STAT_EVENT="statevent";function Io(e,t){W.call(this,Rt.STAT_EVENT,e),this.stat=t}z(Io,W);function Q(e){const t=On();q(t,new Io(t,e))}Rt.Na="timingevent";function Co(e,t){W.call(this,Rt.Na,e),this.size=t}z(Co,W);function ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var xn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},bo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qs(){}Qs.prototype.h=null;function ii(e){return e.h||(e.h=e.i())}function Ao(){}var Re={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Js(){W.call(this,"d")}z(Js,W);function Zs(){W.call(this,"c")}z(Zs,W);var Es;function Mn(){}z(Mn,Qs);Mn.prototype.g=function(){return new XMLHttpRequest};Mn.prototype.i=function(){return{}};Es=new Mn;function Oe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ve(this),this.P=vh,e=ps?125:void 0,this.W=new kn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _o}function _o(){this.i=null,this.g="",this.h=!1}var vh=45e3,Ts={},hn={};g=Oe.prototype;g.setTimeout=function(e){this.P=e};function Ss(e,t,n){e.K=1,e.v=Fn(lt(t)),e.s=n,e.U=!0,Do(e,null)}function Do(e,t){e.F=Date.now(),xe(e),e.A=lt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Lo(n.h,"t",s),e.C=0,n=e.l.H,e.h=new _o,e.g=ea(e.l,n?t:null,!e.s),0<e.O&&(e.L=new dh(j(e.Ia,e,e.g),e.O)),Eo(e.V,e.g,"readystatechange",e.gb),t=e.H?oo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),we(1),ph(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ut(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const h=ut(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||ps||this.g&&(this.h.h||this.g.ga()||ui(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?we(3):we(2)),Ln(this);var n=this.g.ba();this.N=n;e:if(No(this)){var s=ui(this.g);e="";var r=s.length,i=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),le(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,gh(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cn(a)){var u=a;break e}}u=null}if(n=u)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Is(this,n);else{this.i=!1,this.o=3,Q(12),Et(this),le(this);break t}}this.U?(ko(this,h,o),ps&&this.i&&h==3&&(Eo(this.V,this.W,"tick",this.fb),this.W.start())):(Mt(this.j,this.m,o,null),Is(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?Qo(this.l,this):(this.i=!1,xe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),Et(this),le(this)}}}catch{}finally{}};function No(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function ko(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=wh(e,n),r==hn){t==4&&(e.o=4,Q(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Ts){e.o=4,Q(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,r,null),Is(e,r);No(e)&&r!=hn&&r!=Ts&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),cr(t),t.L=!0,Q(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),le(e))}g.fb=function(){if(this.g){var e=ut(this.g),t=this.g.ga();this.C<t.length&&(Ln(this),ko(this,e,t),this.i&&e!=4&&xe(this))}};function wh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?hn:(n=Number(t.substring(n,s)),isNaN(n)?Ts:(s+=1,s+n>t.length?hn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Et(this)};function xe(e){e.Y=Date.now()+e.P,Ro(e,e.P)}function Ro(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ke(j(e.eb,e),t)}function Ln(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(mh(this.j,this.A),this.K!=2&&(we(3),Q(17)),Et(this),this.o=2,le(this)):Ro(this,this.Y-e)};function le(e){e.l.G==0||e.I||Qo(e.l,e)}function Et(e){Ln(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Xs(e.W),To(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Is(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Cs(n.i,e))){if(n.I=e.N,!e.J&&Cs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)pn(n),$n(n);else break t;ar(n),Q(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ke(j(n.ab,n),6e3));if(1>=Vo(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Tt(n,11)}else if((e.J||n.g==e)&&pn(n),!cn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.i;!i.g&&(X(w,"spdy")||X(w,"quic")||X(w,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(nr(i,i.h),i.h=null))}if(s.D){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,O(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=ta(s,s.H?s.la:null,s.W),o.J){$o(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ln(a),xe(a)),s.g=o}else Xo(s);0<n.l.length&&Un(n)}else u[0]!="stop"&&u[0]!="close"||Tt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Tt(n,7):or(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}we(4)}catch{}}function Eh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(ds(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function tr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ds(e)||typeof e=="string")io(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(ds(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=Eh(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function Wt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Wt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Wt.prototype;g.R=function(){er(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return er(this),this.g.concat()};function er(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];bt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],bt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}g.get=function(e,t){return bt(this.h,e)?this.h[e]:t};g.set=function(e,t){bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Oo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Th(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function At(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof At){this.g=t!==void 0?t:e.g,ln(this,e.j),this.s=e.s,fn(this,e.i),dn(this,e.m),this.l=e.l,t=e.h;var n=new Ee;n.i=t.i,t.g&&(n.g=new Wt(t.g),n.h=t.h),oi(this,n),this.o=e.o}else e&&(n=String(e).match(Oo))?(this.g=!!t,ln(this,n[1]||"",!0),this.s=fe(n[2]||""),fn(this,n[3]||"",!0),dn(this,n[4]),this.l=fe(n[5]||"",!0),oi(this,n[6]||"",!0),this.o=fe(n[7]||"")):(this.g=!!t,this.h=new Ee(null,this.g))}At.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ce(t,ai,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ce(t,ai,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ce(n,n.charAt(0)=="/"?Ah:bh,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ce(n,Dh)),e.join("")};function lt(e){return new At(e)}function ln(e,t,n){e.j=n?fe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function fn(e,t,n){e.i=n?fe(t,!0):t}function dn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function oi(e,t,n){t instanceof Ee?(e.h=t,Nh(e.h,e.g)):(n||(t=ce(t,_h)),e.h=new Ee(t,e.g))}function O(e,t,n){e.h.set(t,n)}function Fn(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Sh(e){return e instanceof At?lt(e):new At(e,void 0)}function Ih(e,t,n,s){var r=new At(null,void 0);return e&&ln(r,e),t&&fn(r,t),n&&dn(r,n),s&&(r.l=s),r}function fe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ce(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ch),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ch(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ai=/[#\/\?@]/g,bh=/[#\?:]/g,Ah=/[#\?]/g,_h=/[#\?@]/g,Dh=/#/g;function Ee(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Wt,e.h=0,e.i&&Th(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Ee.prototype;g.add=function(e,t){vt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xo(e,t){vt(e),t=Xt(e,t),bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&er(e)))}function Mo(e,t){return vt(e),t=Xt(e,t),bt(e.g.h,t)}g.forEach=function(e,t){vt(this),this.g.forEach(function(n,s){io(n,function(r){e.call(t,r,s,this)},this)},this)};g.T=function(){vt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};g.R=function(e){vt(this);var t=[];if(typeof e=="string")Mo(this,e)&&(t=Qr(t,this.g.get(Xt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Qr(t,e[n])}return t};g.set=function(e,t){return vt(this),this.i=null,e=Xt(this,e),Mo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Lo(e,t,n){xo(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),Us(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Nh(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(xo(this,s),Lo(this,r,n))},e)),e.j=t}var kh=class{constructor(e,t){this.h=e,this.g=t}};function Fo(e){this.l=e||Rh,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rh=10;function Po(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Vo(e){return e.h?1:e.g?e.g.size:0}function Cs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function nr(e,t){e.g?e.g.add(t):e.h=t}function $o(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Fo.prototype.cancel=function(){if(this.i=Uo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Uo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Us(e.i)}function sr(){}sr.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};sr.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Oh(){this.g=new sr}function xh(e,t,n){const s=n||"";try{tr(e,function(r,i){let o=r;De(r)&&(o=Gs(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Mh(e,t){const n=new Rn;if(T.Image){const s=new Image;s.onload=He(ze,n,s,"TestLoadImage: loaded",!0,t),s.onerror=He(ze,n,s,"TestLoadImage: error",!1,t),s.onabort=He(ze,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=He(ze,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ze(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Me(e){this.l=e.$b||null,this.j=e.ib||!1}z(Me,Qs);Me.prototype.g=function(){return new Pn(this.l,this.j)};Me.prototype.i=function(e){return function(){return e}}({});function Pn(e,t){$.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=rr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Pn,$);var rr=0;g=Pn.prototype;g.open=function(e,t){if(this.readyState!=rr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Te(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Le(this)),this.readyState=rr};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Te(this)),this.g&&(this.readyState=3,Te(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Bo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Le(this):Te(this),this.readyState==3&&Bo(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Le(this))};g.Ta=function(e){this.g&&(this.response=e,Le(this))};g.ha=function(){this.g&&Le(this)};function Le(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Te(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Te(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Lh=T.JSON.parse;function F(e){$.call(this),this.headers=new Wt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jo,this.K=this.L=!1}z(F,$);var jo="",Fh=/^https?$/i,Ph=["POST","PUT"];g=F.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Es.g(),this.C=this.u?ii(this.u):ii(Es),this.g.onreadystatechange=j(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){ci(this,i);return}e=n||"";const r=new Wt(this.headers);s&&tr(s,function(i,o){r.set(o,i)}),s=Wu(r.T()),n=T.FormData&&e instanceof T.FormData,!(0<=ro(Ph,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ko(this),0<this.B&&((this.K=Vh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=j(this.pa,this)):this.A=Ys(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ci(this,i)}};function Vh(e){return Ut&&Zu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function $h(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof $s!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function ci(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qo(e),Vn(e)}function qo(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),Vn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),F.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Ho(this):this.cb())};g.cb=function(){Ho(this)};function Ho(e){if(e.h&&typeof $s!="undefined"&&(!e.C[1]||ut(e)!=4||e.ba()!=2)){if(e.v&&ut(e)==4)Ys(e.Fa,0,e);else if(q(e,"readystatechange"),ut(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Oo)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!Fh.test(r?r.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",qo(e)}}finally{Vn(e)}}}}function Vn(e,t){if(e.g){Ko(e);const n=e.g,s=e.C[0]?an:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ko(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ut(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Lh(t)}};function ui(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uh(e){let t="";return Bs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ir(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Uh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function oe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zo(e){this.za=0,this.l=[],this.h=new Rn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=oe("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=oe("baseRetryDelayMs",5e3,e),this.$a=oe("retryDelaySeedMs",1e4,e),this.Ya=oe("forwardChannelMaxRetries",2,e),this.ra=oe("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Fo(e&&e.concurrentRequestLimit),this.Ca=new Oh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=zo.prototype;g.ma=8;g.G=1;function or(e){if(Go(e),e.G==3){var t=e.V++,n=lt(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),Fe(e,n),t=new Oe(e,e.h,t,void 0),t.K=2,t.v=Fn(lt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ea(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xe(t)}Zo(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function $n(e){e.g&&(cr(e),e.g.cancel(),e.g=null)}function Go(e){$n(e),e.u&&(T.clearTimeout(e.u),e.u=null),pn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function is(e,t){e.l.push(new kh(e.Za++,t)),e.G==3&&Un(e)}function Un(e){Po(e.i)||e.m||(e.m=!0,Ws(e.Ha,e),e.C=0)}function Bh(e,t){return Vo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=ke(j(e.Ha,e,t),Jo(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Oe(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=oo(i),ao(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Wo(this,r,t),n=lt(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),Fe(this,n),this.o&&i&&ir(n,this.o,i),nr(this.i,r),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),r.$=!0,Ss(r,n,null)):Ss(r,n,t),this.G=2}}else this.G==3&&(e?hi(this,e):this.l.length==0||Po(this.i)||hi(this))};function hi(e,t){var n;t?n=t.m:n=e.V++;const s=lt(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),Fe(e,s),e.o&&e.s&&ir(s,e.o,e.s),n=new Oe(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Wo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),nr(e.i,n),Ss(n,s,t)}function Fe(e,t){e.j&&tr({},function(n,s){O(t,s,n)})}function Wo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?j(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{xh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Xo(e){e.g||e.u||(e.Y=1,Ws(e.Ga,e),e.A=0)}function ar(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=ke(j(e.Ga,e),Jo(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Yo(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ke(j(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Q(10),$n(this),Yo(this))};function cr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Yo(e){e.g=new Oe(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=lt(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),Fe(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&ir(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Fn(lt(t)),n.s=null,n.U=!0,Do(n,e)}g.ab=function(){this.v!=null&&(this.v=null,$n(this),ar(this),Q(19))};function pn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Qo(e,t){var n=null;if(e.g==t){pn(e),cr(e),e.g=null;var s=2}else if(Cs(e.i,t))n=t.D,$o(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=On(),q(s,new Co(s,n,t,r)),Un(e)}else Xo(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Bh(e,t)||s==2&&ar(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Tt(e,5);break;case 4:Tt(e,10);break;case 3:Tt(e,6);break;default:Tt(e,2)}}}function Jo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Tt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=j(e.jb,e);n||(n=new At("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||ln(n,"https"),Fn(n)),Mh(n.toString(),s)}else Q(2);e.G=0,e.j&&e.j.va(t),Zo(e),Go(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Q(2)):(this.h.info("Failed to ping google.com"),Q(1))};function Zo(e){e.G=0,e.I=-1,e.j&&((Uo(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Us(e.l),e.l.length=0),e.j.ua())}function ta(e,t,n){let s=Sh(n);if(s.i!="")t&&fn(s,t+"."+s.i),dn(s,s.m);else{const r=T.location;s=Ih(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Bs(e.aa,function(r,i){O(s,i,r)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),Fe(e,s),s}function ea(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new F(new Me({ib:!0})):new F(e.qa),t.L=e.H,t}function na(){}g=na.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function gn(){if(Ut&&!(10<=Number(th)))throw Error("Environmental error: no available transport.")}gn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){$.call(this),this.g=new zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!cn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yt(this)}z(nt,$);nt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ws(j(e.hb,e,t))),Q(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ta(e,null,e.W),Un(e)};nt.prototype.close=function(){or(this.g)};nt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,is(this.g,t)}else this.v?(t={},t.__data__=Gs(e),is(this.g,t)):is(this.g,e)};nt.prototype.M=function(){this.g.j=null,delete this.j,or(this.g),delete this.g,nt.Z.M.call(this)};function sa(e){Js.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(sa,Js);function ra(){Zs.call(this),this.status=1}z(ra,Zs);function Yt(e){this.g=e}z(Yt,na);Yt.prototype.xa=function(){q(this.g,"a")};Yt.prototype.wa=function(e){q(this.g,new sa(e))};Yt.prototype.va=function(e){q(this.g,new ra(e))};Yt.prototype.ua=function(){q(this.g,"b")};gn.prototype.createWebChannel=gn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;xn.NO_ERROR=0;xn.TIMEOUT=8;xn.HTTP_ERROR=6;bo.COMPLETE="complete";Ao.EventType=Re;Re.OPEN="a";Re.CLOSE="b";Re.ERROR="c";Re.MESSAGE="d";$.prototype.listen=$.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var jh=function(){return new gn},qh=function(){return On()},os=xn,Hh=bo,Kh=Rt,li={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},zh=Me,Ge=Ao,Gh=F;const fi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt="9.6.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Zi("@firebase/firestore");function di(){return _t.logLevel}function y(e,...t){if(_t.logLevel<=_.DEBUG){const n=t.map(ur);_t.debug(`Firestore (${Qt}): ${e}`,...n)}}function pt(e,...t){if(_t.logLevel<=_.ERROR){const n=t.map(ur);_t.error(`Firestore (${Qt}): ${e}`,...n)}}function pi(e,...t){if(_t.logLevel<=_.WARN){const n=t.map(ur);_t.warn(`Firestore (${Qt}): ${e}`,...n)}}function ur(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Qt}) INTERNAL ASSERTION FAILED: `+e;throw pt(t),new Error(t)}function k(e,t){e||S()}function I(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends _n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Yh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new St;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new St,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new St)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(k(typeof s.accessToken=="string"),new Wh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new J(t)}}class Qh{constructor(t,n,s){this.type="FirstParty",this.user=J.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Jh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Qh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tl{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.p=n.token,new Zh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr.A=-1;class ia{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=el(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function Bt(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new et(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Jt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function oa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Se.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Se?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Se{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new x(n)}static emptyPath(){return new x([])}}const nl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Se{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return nl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.fields=t,t.sort(Z.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Bt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new K(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new K(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const sl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(e){if(k(!!e),typeof e=="string"){let t=0;const n=sl.exec(e);if(k(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jt(e){return typeof e=="string"?K.fromBase64String(e):K.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ca(e){const t=e.mapValue.fields.__previous_value__;return aa(t)?ca(t):t}function Ie(e){const t=gt(e.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return e==null}function mn(e){return e===0&&1/e==-1/0}function il(e){return typeof e=="number"&&Number.isInteger(e)&&!mn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function Dt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?aa(e)?4:ol(e)?9:10:S()}function ot(e,t){if(e===t)return!0;const n=Dt(e);if(n!==Dt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ie(e).isEqual(Ie(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=gt(s.timestampValue),o=gt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return jt(s.bytesValue).isEqual(jt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return L(s.geoPointValue.latitude)===L(r.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return L(s.integerValue)===L(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=L(s.doubleValue),o=L(r.doubleValue);return i===o?mn(i)===mn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Bt(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(gi(i)!==gi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ot(i[a],o[a])))return!1;return!0}(e,t);default:return S()}}function Ce(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function Ht(e,t){if(e===t)return 0;const n=Dt(e),s=Dt(t);if(n!==s)return D(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=L(r.integerValue||r.doubleValue),a=L(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return mi(e.timestampValue,t.timestampValue);case 4:return mi(Ie(e),Ie(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(r,i){const o=jt(r),a=jt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=D(L(r.latitude),L(i.latitude));return o!==0?o:D(L(r.longitude),L(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ht(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=D(a[h],u[h]);if(l!==0)return l;const p=Ht(o[a[h]],c[u[h]]);if(p!==0)return p}return D(a.length,u.length)}(e.mapValue,t.mapValue);default:throw S()}}function mi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=gt(e),s=gt(t),r=D(n.seconds,s.seconds);return r!==0?r:D(n.nanos,s.nanos)}function Ft(e){return As(e)}function As(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=gt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=As(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${As(s.fields[a])}`;return i+"}"}(e.mapValue):S();var t,n}function _s(e){return!!e&&"integerValue"in e}function lr(e){return!!e&&"arrayValue"in e}function yi(e){return!!e&&"nullValue"in e}function vi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ye(e){return!!e&&"mapValue"in e}function de(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Jt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=de(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=de(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ol(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ye(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=de(n)}setAll(t){let n=Z.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=de(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Ye(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Ye(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Jt(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new it(de(this.value))}}function ua(e){const t=[];return Jt(e.fields,(n,s)=>{const r=new Z([n]);if(Ye(s)){const i=ua(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new bs(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new G(t,0,C.min(),C.min(),it.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,C.min(),it.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,C.min(),it.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function wi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new al(e,t,n,s,r,i,o)}function fr(e){const t=I(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ft(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Zt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ft(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ft(s)).join(",")),t.P=n}return t.P}function cl(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ft(s.value)}`;var s}).join(", ")}]`),Zt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ft(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ft(n)).join(",")),`Target(${t})`}function dr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!ml(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ti(e.startAt,t.startAt)&&Ti(e.endAt,t.endAt)}function Ds(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new ul(t,n,s):n==="array-contains"?new fl(t,s):n==="in"?new dl(t,s):n==="not-in"?new pl(t,s):n==="array-contains-any"?new gl(t,s):new tt(t,n,s)}static V(t,n,s){return n==="in"?new hl(t,s):new ll(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ht(n,this.value)):n!==null&&Dt(this.value)===Dt(n)&&this.v(Ht(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ul extends tt{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class hl extends tt{constructor(t,n){super(t,"in",n),this.keys=ha("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ll extends tt{constructor(t,n){super(t,"not-in",n),this.keys=ha("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ha(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class fl extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return lr(n)&&Ce(n.arrayValue,this.value)}}class dl extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ce(this.value.arrayValue,n)}}class pl extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ce(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ce(this.value.arrayValue,n)}}class gl extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!lr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ce(this.value.arrayValue,s))}}class yn{constructor(t,n){this.position=t,this.inclusive=n}}class pe{constructor(t,n="asc"){this.field=t,this.dir=n}}function ml(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ei(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Ht(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ti(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function yl(e,t,n,s,r,i,o,a){return new Bn(e,t,n,s,r,i,o,a)}function pr(e){return new Bn(e)}function Qe(e){return!Zt(e.limit)&&e.limitType==="F"}function vn(e){return!Zt(e.limit)&&e.limitType==="L"}function vl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wl(e){for(const t of e.filters)if(t.S())return t.field;return null}function El(e){return e.collectionGroup!==null}function be(e){const t=I(e);if(t.D===null){t.D=[];const n=wl(t),s=vl(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new pe(n)),t.D.push(new pe(Z.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new pe(Z.keyField(),i))}}}return t.D}function Nt(e){const t=I(e);if(!t.C)if(t.limitType==="F")t.C=wi(t.path,t.collectionGroup,be(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of be(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new pe(i.field,o))}const s=t.endAt?new yn(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new yn(t.startAt.position,!t.startAt.inclusive):null;t.C=wi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.C}function Tl(e,t,n){return new Bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function jn(e,t){return dr(Nt(e),Nt(t))&&e.limitType===t.limitType}function la(e){return`${fr(Nt(e))}|lt:${e.limitType}`}function Ns(e){return`Query(target=${cl(Nt(e))}; limitType=${e.limitType})`}function gr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ei(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,be(n),s)||n.endAt&&!function(r,i,o){const a=Ei(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,be(n),s))}(e,t)}function fa(e){return(t,n)=>{let s=!1;for(const r of be(e)){const i=Sl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Sl(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ht(a,c):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mn(t)?"-0":t}}function pa(e){return{integerValue:""+e}}function Il(e,t){return il(t)?pa(t):da(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this._=void 0}}function Cl(e,t,n){return e instanceof wn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ae?ma(e,t):e instanceof _e?ya(e,t):function(s,r){const i=ga(s,r),o=Si(i)+Si(s.k);return _s(i)&&_s(s.k)?pa(o):da(s.M,o)}(e,t)}function bl(e,t,n){return e instanceof Ae?ma(e,t):e instanceof _e?ya(e,t):n}function ga(e,t){return e instanceof En?_s(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class wn extends qn{}class Ae extends qn{constructor(t){super(),this.elements=t}}function ma(e,t){const n=va(t);for(const s of e.elements)n.some(r=>ot(r,s))||n.push(s);return{arrayValue:{values:n}}}class _e extends qn{constructor(t){super(),this.elements=t}}function ya(e,t){let n=va(t);for(const s of e.elements)n=n.filter(r=>!ot(r,s));return{arrayValue:{values:n}}}class En extends qn{constructor(t,n){super(),this.M=t,this.k=n}}function Si(e){return L(e.integerValue||e.doubleValue)}function va(e){return lr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Al(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ae&&s instanceof Ae||n instanceof _e&&s instanceof _e?Bt(n.elements,s.elements,ot):n instanceof En&&s instanceof En?ot(n.k,s.k):n instanceof wn&&s instanceof wn}(e.transform,t.transform)}class _l{constructor(t,n){this.version=t,this.transformResults=n}}class Pt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Je(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hn{}function Dl(e,t,n){e instanceof Kn?function(s,r,i){const o=s.value.clone(),a=bi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Pe?function(s,r,i){if(!Je(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=bi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(wa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function ks(e,t,n){e instanceof Kn?function(s,r,i){if(!Je(s.precondition,r))return;const o=s.value.clone(),a=Ai(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Ci(r),o).setHasLocalMutations()}(e,t,n):e instanceof Pe?function(s,r,i){if(!Je(s.precondition,r))return;const o=Ai(s.fieldTransforms,i,r),a=r.data;a.setAll(wa(s)),a.setAll(o),r.convertToFoundDocument(Ci(r),a).setHasLocalMutations()}(e,t,n):function(s,r){Je(s.precondition,r)&&r.convertToNoDocument(C.min())}(e,t)}function Nl(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=ga(s.transform,r||null);i!=null&&(n==null&&(n=it.empty()),n.set(s.field,i))}return n||null}function Ii(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bt(n,s,(r,i)=>Al(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ci(e){return e.isFoundDocument()?e.version:C.min()}class Kn extends Hn{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Pe extends Hn{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function wa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function bi(e,t,n){const s=new Map;k(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,bl(o,a,n[r]))}return s}function Ai(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Cl(i,o,t))}return s}class kl extends Hn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Rl extends Hn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,b;function xl(e){switch(e){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ea(e){if(e===void 0)return pt("GRPC error has no .code"),f.UNKNOWN;switch(e){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(b=M||(M={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Jt(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return oa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new We(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new We(this.root,t,this.comparator,!1)}getReverseIterator(){return new We(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new We(this.root,t,this.comparator,!0)}}class We{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=r!=null?r:B.EMPTY,this.right=i!=null?i:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return B.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,r){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _i(this.data.getIterator())}getIteratorFrom(t){return new _i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof H)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new H(this.comparator);return n.data=t,n}}class _i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new U(E.comparator);function kt(){return Ml}const Ll=new U(E.comparator);function Rs(){return Ll}function as(){return new te(e=>e.toString(),(e,t)=>e.isEqual(t))}const Fl=new U(E.comparator),Pl=new H(E.comparator);function R(...e){let t=Pl;for(const n of e)t=t.add(n);return t}const Vl=new H(D);function Ta(){return Vl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ve.createSynthesizedTargetChangeForCurrentChange(t,n)),new zn(C.min(),s,Ta(),kt(),R())}}class Ve{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ve(K.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n,s,r){this.O=t,this.removedTargetIds=n,this.key=s,this.$=r}}class Sa{constructor(t,n){this.targetId=t,this.F=n}}class Ia{constructor(t,n,s=K.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Di{constructor(){this.B=0,this.L=ki(),this.q=K.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.q=t)}H(){let t=R(),n=R(),s=R();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:S()}}),new Ve(this.q,this.U,t,n,s)}J(){this.K=!1,this.L=ki()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class $l{constructor(t){this.nt=t,this.st=new Map,this.it=kt(),this.rt=Ni(),this.ot=new H(D)}at(t){for(const n of t.O)t.$&&t.$.isFoundDocument()?this.ut(n,t.$):this.ct(n,t.key,t.$);for(const n of t.removedTargetIds)this.ct(n,t.key,t.$)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(t){const n=t.targetId,s=t.F.count,r=this.wt(n);if(r){const i=r.target;if(Ds(i))if(s===0){const o=new E(i.path);this.ct(n,o,G.newNoDocument(o,C.min()))}else k(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ds(a.target)){const c=new E(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,G.newNoDocument(c,t))}i.j&&(n.set(o,i.H()),i.J())}});let s=R();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(t));const r=new zn(t,n,this.ot,this.it,s);return this.it=kt(),this.rt=Ni(),this.ot=new H(D),r}ut(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const r=this.lt(t);this.It(t,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Di,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new H(D),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Di),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Ni(){return new U(E.comparator)}function ki(){return new U(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jl{constructor(t,n){this.databaseId=t,this.N=n}}function Tn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ca(e,t){return e.N?t.toBase64():t.toUint8Array()}function ql(e,t){return Tn(e,t.toTimestamp())}function ht(e){return k(!!e),C.fromTimestamp(function(t){const n=gt(t);return new et(n.seconds,n.nanos)}(e))}function mr(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ba(e){const t=x.fromString(e);return k(Da(t)),t}function Os(e,t){return mr(e.databaseId,t.path)}function cs(e,t){const n=ba(t);if(n.get(1)!==e.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Aa(n))}function xs(e,t){return mr(e.databaseId,t)}function Hl(e){const t=ba(e);return t.length===4?x.emptyPath():Aa(t)}function Ms(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Aa(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ri(e,t,n){return{name:Os(e,t),fields:n.value.mapValue.fields}}function Kl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.N?(k(u===void 0||typeof u=="string"),K.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),K.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Ea(c.code);return new v(u,c.message||"")}(o);n=new Ia(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=cs(e,s.document.name),i=ht(s.document.updateTime),o=new it({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ze(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=cs(e,s.document),i=s.readTime?ht(s.readTime):C.min(),o=G.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ze([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=cs(e,s.document),i=s.removedTargetIds||[];n=new Ze([],i,r,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Ol(r),o=s.targetId;n=new Sa(o,i)}}return n}function zl(e,t){let n;if(t instanceof Kn)n={update:Ri(e,t.key,t.value)};else if(t instanceof kl)n={delete:Os(e,t.key)};else if(t instanceof Pe)n={update:Ri(e,t.key,t.data),updateMask:nf(t.fieldMask)};else{if(!(t instanceof Rl))return S();n={verify:Os(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof wn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ae)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _e)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof En)return{fieldPath:i.field.canonicalString(),increment:o.k};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ql(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(e,t.precondition)),n}function Gl(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ht(s.updateTime):ht(r);return i.isEqual(C.min())&&(i=ht(r)),new _l(i,s.transformResults||[])}(n,t))):[]}function Wl(e,t){return{documents:[xs(e,t.path)]}}function Xl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=xs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=xs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(vi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NAN"}};if(yi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(vi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NAN"}};if(yi(l.value))return{unaryFilter:{field:xt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xt(l.field),op:Zl(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:xt(h.field),direction:Jl(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.N||Zt(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Yl(e){let t=Hl(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){k(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=_a(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new pe(Lt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Zt(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,p=h.values||[];return new yn(p,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,p=h.values||[];return new yn(p,l)}(n.endAt)),yl(t,r,o,i,a,"F",c,u)}function Ql(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function _a(e){return e?e.unaryFilter!==void 0?[ef(e)]:e.fieldFilter!==void 0?[tf(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>_a(t)).reduce((t,n)=>t.concat(n)):S():[]}function Jl(e){return Ul[e]}function Zl(e){return Bl[e]}function xt(e){return{fieldPath:e.canonicalString()}}function Lt(e){return Z.fromServerFormat(e.fieldPath)}function tf(e){return tt.create(Lt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}function ef(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lt(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Lt(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lt(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Lt(e.unaryFilter.field);return tt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}function nf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Da(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(r=>r?d.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function $e(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Dl(i,t,s[r])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&ks(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&ks(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&Bt(this.mutations,t.mutations,(n,s)=>Ii(n,s))&&Bt(this.baseMutations,t.baseMutations,(n,s)=>Ii(n,s))}}class yr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){k(t.mutations.length===s.length);let r=Fl;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new yr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n,s,r,i=C.min(),o=C.min(),a=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new It(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.Jt=t}}function uf(e){const t=Yl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Tl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Ue=new lf}addToCollectionParentIndex(t,n){return this.Ue.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.Ue.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getFieldIndex(t,n){return d.resolve(null)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class lf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new H(x.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new H(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Kt(0)}static gn(){return new Kt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==sf)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.changes=new te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,n,s){this.ls=t,this.Fs=n,this.indexManager=s}Bs(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.ls.getEntry(t,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(t,n){t.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Us(t,n){return this.ls.getEntries(t,n).next(s=>this.Ks(t,s).next(()=>s))}Ks(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Gs(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Qs(t,n.path):El(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new E(n)).next(s=>{let r=Rs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}js(t,n,s){const r=n.collectionGroup;let i=Rs();return this.indexManager.getCollectionParents(t,r).next(o=>d.forEach(o,a=>{const c=function(u,h){return new Bn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.Ws(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}Ws(t,n,s){let r;return this.ls.getAll(t,n.path,s).next(i=>(r=i,this.Fs.getAllMutationBatchesAffectingQuery(t,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=r.get(c);u==null&&(u=G.newInvalidDocument(c),r=r.insert(c,u)),ks(a,u,o.localWriteTime),u.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{gr(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=r}static Js(t,n){let s=R(),r=R();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new vr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{Ys(t){this.Xs=t}Gs(t,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(C.min())?this.Zs(t,n):this.Xs.Us(t,r).next(i=>{const o=this.ti(n,i);return(Qe(n)||vn(n))&&this.ei(n.limitType,o,r,s)?this.Zs(t,n):(di()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ns(n)),this.Xs.Gs(t,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(t,n){let s=new H(fa(t));return n.forEach((r,i)=>{gr(t,i)&&(s=s.add(i))}),s}ei(t,n,s,r){if(s.size!==n.size)return!0;const i=t==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(t,n){return di()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ns(n)),this.Xs.Gs(t,n,C.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,n,s,r){this.persistence=t,this.ni=n,this.M=r,this.si=new U(D),this.ii=new te(i=>fr(i),dr),this.ri=C.min(),this.oi=t.getRemoteDocumentCache(),this.hs=t.getTargetCache(),this.fs=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Fs=this.persistence.getMutationQueue(t,this.indexManager),this.ui=new df(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function mf(e,t,n,s){return new gf(e,t,n,s)}async function Na(e,t){const n=I(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Fs.getAllMutationBatches(s).next(i=>(r=i,n.ai(t),n.Fs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=R();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.ui.Us(s,c).next(u=>({ci:u,removedBatchIds:o,addedBatchIds:a}))})})}function yf(e,t){const n=I(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let p=d.resolve();return l.forEach(m=>{p=p.next(()=>u.getEntry(a,m)).next(w=>{const N=c.docVersions.get(m);k(N!==null),w.version.compareTo(N)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),p.next(()=>o.Fs.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.Fs.performConsistencyCheck(s)).next(()=>n.ui.Us(s,r))})}function ka(e){const t=I(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hs.getLastRemoteSnapshotVersion(n))}function vf(e,t){const n=I(e),s=t.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const a=[];t.targetChanges.forEach((u,h)=>{const l=r.get(h);if(!l)return;a.push(n.hs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.hs.addMatchingKeys(i,u.addedDocuments,h)));let p=l.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?p=p.withResumeToken(K.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,w,N){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(l,p,u)&&a.push(n.hs.updateTargetData(i,p))});let c=kt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(wf(i,o,t.documentUpdates).next(u=>{c=u})),!s.isEqual(C.min())){const u=n.hs.getLastRemoteSnapshotVersion(i).next(h=>n.hs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.ui.Ks(i,c)).next(()=>c)}).then(i=>(n.si=r,i))}function wf(e,t,n){let s=R();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let i=kt();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(C.min())?(t.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),i=i.insert(o,a)):y("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Ef(e,t){const n=I(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Fs.getNextMutationBatchAfterBatchId(s,t)))}function Tf(e,t){const n=I(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.hs.getTargetData(s,t).next(i=>i?(r=i,d.resolve(r)):n.hs.allocateTargetId(s).next(o=>(r=new It(t,o,0,s.currentSequenceNumber),n.hs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.si.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function Ls(e,t,n){const s=I(e),r=s.si.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!$e(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(r.target)}function Oi(e,t,n){const s=I(e);let r=C.min(),i=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=I(a),l=h.ii.get(u);return l!==void 0?d.resolve(h.si.get(l)):h.hs.getTargetData(c,u)}(s,o,Nt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.hs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ni.Gs(o,t,n?r:C.min(),n?i:R())).next(a=>({documents:a,hi:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return d.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:uf(s.bundledQuery),readTime:ht(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.overlays=new U(E.comparator),this.mi=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.Xt(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.mi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const r=as(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return d.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new U((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=as(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=as(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return d.resolve(a)}Xt(t,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.mi.get(r.largestBatchId).delete(s.key);this.mi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new af(n,s));let i=this.mi.get(n);i===void 0&&(i=R(),this.mi.set(n,i)),this.mi.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.gi=new H(V.yi),this.pi=new H(V.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new V(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new V(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new E(new x([])),s=new V(n,t),r=new V(n,t+1),i=[];return this.pi.forEachInRange([s,r],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new E(new x([])),s=new V(n,t),r=new V(n,t+1);let i=R();return this.pi.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new V(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class V{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return E.comparator(t.key,n.key)||D(t.Vi,n.Vi)}static Ii(t,n){return D(t.Vi,n.Vi)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Fs=[],this.vi=1,this.Si=new H(V.yi)}checkEmpty(t){return d.resolve(this.Fs.length===0)}addMutationBatch(t,n,s,r){const i=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const o=new of(i,n,s,r);this.Fs.push(o);for(const a of r)this.Si=this.Si.add(new V(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.Ci(s),i=r<0?0:r;return d.resolve(this.Fs.length>i?this.Fs[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.Fs.length===0?-1:this.vi-1)}getAllMutationBatches(t){return d.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new V(n,0),r=new V(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([s,r],o=>{const a=this.Di(o.Vi);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new H(D);return n.forEach(r=>{const i=new V(r,0),o=new V(r,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{s=s.add(a.Vi)})}),d.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new V(new E(i),0);let a=new H(D);return this.Si.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Vi)),!0)},o),d.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const r=this.Di(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){k(this.Ni(n.batchId,"removed")===0),this.Fs.shift();let s=this.Si;return d.forEach(n.mutations,r=>{const i=new V(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new V(n,0),r=this.Si.firstAfterOrEqual(s);return d.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Fs.length,d.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.Fs.length===0?0:t-this.Fs[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.Fs.length?null:this.Fs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this.ki=t,this.docs=new U(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=kt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():G.newInvalidDocument(r))}),d.resolve(s)}getAll(t,n,s){let r=kt();const i=new E(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return d.resolve(r)}Mi(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Af(this)}getSize(t){return d.resolve(this.size)}}class Af extends ff{constructor(t){super(),this.Un=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Un.addEntry(t,r)):this.Un.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Un.getEntry(t,n)}getAllFromCache(t,n){return this.Un.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.persistence=t,this.Oi=new te(n=>fr(n),dr),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.$i=0,this.Fi=new wr,this.targetCount=0,this.Bi=Kt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,r)=>n(r)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),d.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new Kt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.In(n),d.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.Fi.Ri(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),d.waitFor(i).next(()=>r)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Fi.Ti(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Fi.Ai(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Fi.Ri(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Fi.Pi(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Fi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n){this.Li={},this.overlays={},this.Zn=new hr(0),this.ts=!1,this.ts=!0,this.referenceDelegate=t(this),this.hs=new _f(this),this.indexManager=new hf,this.ls=function(s){return new bf(s)}(s=>this.referenceDelegate.qi(s)),this.M=new cf(n),this.fs=new Sf(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new If,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new Cf(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const r=new Nf(this.Zn.next());return this.referenceDelegate.Ui(),s(r).next(i=>this.referenceDelegate.Ki(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gi(t,n){return d.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class Nf extends rf{constructor(t){super(),this.currentSequenceNumber=t}}class Er{constructor(t){this.persistence=t,this.Qi=new wr,this.ji=null}static Wi(t){return new Er(t)}get zi(){if(this.ji)return this.ji;throw S()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),d.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(r=>this.zi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.zi.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ui(){this.ji=new Set}Ki(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.zi,s=>{const r=E.fromPath(s);return this.Hi(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}qi(t){return 0}Hi(t,n){return d.or([()=>d.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gi(t,n)])}}class xi{constructor(){this.activeTargetIds=Ta()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kf{constructor(){this.Or=new xi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Or.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Or.Zi(t)}isLocalQueryTarget(t){return this.Or.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(t){return this.Or.activeTargetIds.has(t)}start(){return this.Or=new xi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{Fr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Ur(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.Qr=t.Qr,this.jr=t.jr}Wr(t){this.zr=t}Hr(t){this.Jr=t}onMessage(t){this.Yr=t}close(){this.jr()}send(t){this.Qr(t)}Xr(){this.zr()}Zr(t){this.Jr(t)}eo(t){this.Yr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.no=n+"://"+t.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(t,n,s,r,i){const o=this.ro(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.oo(a,r,i),this.ao(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw pi("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}uo(t,n,s,r,i){return this.io(t,n,s,r,i)}oo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ro(t,n){const s=Of[t];return`${this.no}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,r){return new Promise((i,o)=>{const a=new Gh;a.listenOnce(Hh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case os.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),i(u);break;case os.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(w)>=0?w:f.UNKNOWN}(l.status);o(new v(p,l.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}co(t,n,s){const r=[this.no,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=jh(),o=qh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zh({})),this.oo(a.initMessageHeaders,n,s),xc()||Lc()||Fc()||Pc()||Vc()||Mc()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");y("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const p=new xf({Qr:w=>{l?y("Connection","Not sending because WebChannel is closed:",w):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",w),u.send(w))},jr:()=>u.close()}),m=(w,N,P)=>{w.listen(N,at=>{try{P(at)}catch(ct){setTimeout(()=>{throw ct},0)}})};return m(u,Ge.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(u,Ge.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),p.Zr())}),m(u,Ge.EventType.ERROR,w=>{l||(l=!0,pi("Connection","WebChannel transport errored:",w),p.Zr(new v(f.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ge.EventType.MESSAGE,w=>{var N;if(!l){const P=w.data[0];k(!!P);const at=P,ct=at.error||((N=at[0])===null||N===void 0?void 0:N.error);if(ct){y("Connection","WebChannel received error:",ct);const re=ct.status;let ie=function(Ic){const $r=M[Ic];if($r!==void 0)return Ea($r)}(re),Vr=ct.message;ie===void 0&&(ie=f.INTERNAL,Vr="Unknown error status: "+re+" with message "+ct.message),l=!0,p.Zr(new v(ie,Vr)),u.close()}else y("Connection","WebChannel received:",P),p.eo(P)}}),m(o,Kh.STAT_EVENT,w=>{w.stat===li.PROXY?y("Connection","Detected buffering proxy"):w.stat===li.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Xr()},0),p}}function us(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e){return new jl(e,!0)}class Ra{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hn=t,this.timerId=n,this.ho=s,this.lo=r,this.fo=i,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(t){this.cancel();const n=Math.floor(this._o+this.Io()),s=Math.max(0,Date.now()-this.mo),r=Math.max(0,n-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this._o} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,r,()=>(this.mo=Date.now(),t())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){this.wo!==null&&(this.wo.skipDelay(),this.wo=null)}cancel(){this.wo!==null&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,n,s,r,i,o,a,c){this.Hn=t,this.Eo=s,this.Ao=r,this.Ro=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new Ra(t,n)}So(){return this.state===1||this.state===5||this.Do()}Do(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&this.Po===null&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(t){this.Oo(),this.stream.send(t)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,t!==4?this.vo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Fo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Hr(n)}Fo(){}auth(){this.state=1;const t=this.Bo(this.bo),n=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.bo===n&&this.Lo(s,r)},s=>{t(()=>{const r=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Lo(t,n){const s=this.Bo(this.bo);this.stream=this.Uo(t,n),this.stream.Wr(()=>{s(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Bo(t){return n=>{this.Hn.enqueueAndForget(()=>this.bo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lf extends Oa{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Uo(t,n){return this.Ro.co("Listen",t,n)}onMessage(t){this.vo.reset();const n=Kl(this.M,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?ht(i.readTime):C.min()}(t);return this.listener.Ko(n,s)}Go(t){const n={};n.database=Ms(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Ds(a)?{documents:Wl(r,a)}:{query:Xl(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ca(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Tn(r,i.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Ql(this.M,t);s&&(n.labels=s),this.Mo(n)}Qo(t){const n={};n.database=Ms(this.M),n.removeTarget=t,this.Mo(n)}}class Ff extends Oa{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.jo=!1}get Wo(){return this.jo}start(){this.jo=!1,this.lastStreamToken=void 0,super.start()}Fo(){this.jo&&this.zo([])}Uo(t,n){return this.Ro.co("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.jo){this.vo.reset();const n=Gl(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.Ho(s,n)}return k(!t.writeResults||t.writeResults.length===0),this.jo=!0,this.listener.Jo()}Yo(){const t={};t.database=Ms(this.M),this.Mo(t)}zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>zl(this.M,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Ro=s,this.M=r,this.Xo=!1}Zo(){if(this.Xo)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}io(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Ro.io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}uo(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Ro.uo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.Xo=!0}}class Vf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){this.ta===0&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(t){this.state==="Online"?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ia("Offline")))}set(t){this.aa(),this.ta=0,t==="Online"&&(this.na=!1),this.ia(t)}ia(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(pt(n),this.na=!1):y("OnlineStateTracker",n)}aa(){this.ea!==null&&(this.ea.cancel(),this.ea=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=i,this.fa.Fr(o=>{s.enqueueAndForget(async()=>{Ot(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c.ha.add(4),await Be(c),c.da.set("Unknown"),c.ha.delete(4),await Wn(c)}(this))})}),this.da=new Vf(s,r)}}async function Wn(e){if(Ot(e))for(const t of e.la)await t(!0)}async function Be(e){for(const t of e.la)await t(!1)}function xa(e,t){const n=I(e);n.ca.has(t.targetId)||(n.ca.set(t.targetId,t),Ir(n)?Sr(n):ee(n).Do()&&Tr(n,t))}function Ma(e,t){const n=I(e),s=ee(n);n.ca.delete(t),s.Do()&&La(n,t),n.ca.size===0&&(s.Do()?s.No():Ot(n)&&n.da.set("Unknown"))}function Tr(e,t){e._a.Z(t.targetId),ee(e).Go(t)}function La(e,t){e._a.Z(t),ee(e).Qo(t)}function Sr(e){e._a=new $l({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.ca.get(t)||null}),ee(e).start(),e.da.sa()}function Ir(e){return Ot(e)&&!ee(e).So()&&e.ca.size>0}function Ot(e){return I(e).ha.size===0}function Fa(e){e._a=void 0}async function Uf(e){e.ca.forEach((t,n)=>{Tr(e,t)})}async function Bf(e,t){Fa(e),Ir(e)?(e.da.oa(t),Sr(e)):e.da.set("Unknown")}async function jf(e,t,n){if(e.da.set("Online"),t instanceof Ia&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.ca.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.ca.delete(o),s._a.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Sn(e,s)}else if(t instanceof Ze?e._a.at(t):t instanceof Sa?e._a._t(t):e._a.ht(t),!n.isEqual(C.min()))try{const s=await ka(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r._a.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.ca.get(c);u&&r.ca.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.ca.get(a);if(!c)return;r.ca.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),La(r,a);const u=new It(c.target,a,1,c.sequenceNumber);Tr(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Sn(e,s)}}async function Sn(e,t,n){if(!$e(t))throw t;e.ha.add(1),await Be(e),e.da.set("Offline"),n||(n=()=>ka(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.ha.delete(1),await Wn(e)})}function Pa(e,t){return t().catch(n=>Sn(e,n,t))}async function Xn(e){const t=I(e),n=mt(t);let s=t.ua.length>0?t.ua[t.ua.length-1].batchId:-1;for(;qf(t);)try{const r=await Ef(t.localStore,s);if(r===null){t.ua.length===0&&n.No();break}s=r.batchId,Hf(t,r)}catch(r){await Sn(t,r)}Va(t)&&$a(t)}function qf(e){return Ot(e)&&e.ua.length<10}function Hf(e,t){e.ua.push(t);const n=mt(e);n.Do()&&n.Wo&&n.zo(t.mutations)}function Va(e){return Ot(e)&&!mt(e).So()&&e.ua.length>0}function $a(e){mt(e).start()}async function Kf(e){mt(e).Yo()}async function zf(e){const t=mt(e);for(const n of e.ua)t.zo(n.mutations)}async function Gf(e,t,n){const s=e.ua.shift(),r=yr.from(s,t,n);await Pa(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Xn(e)}async function Wf(e,t){t&&mt(e).Wo&&await async function(n,s){if(r=s.code,xl(r)&&r!==f.ABORTED){const i=n.ua.shift();mt(n).xo(),await Pa(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xn(n)}var r}(e,t),Va(e)&&$a(e)}async function Li(e,t){const n=I(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ot(n);n.ha.add(3),await Be(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.ha.delete(3),await Wn(n)}async function Xf(e,t){const n=I(e);t?(n.ha.delete(2),await Wn(n)):t||(n.ha.add(2),await Be(n),n.da.set("Unknown"))}function ee(e){return e.wa||(e.wa=function(t,n,s){const r=I(t);return r.Zo(),new Lf(n,r.Ro,r.authCredentials,r.appCheckCredentials,r.M,s)}(e.datastore,e.asyncQueue,{Wr:Uf.bind(null,e),Hr:Bf.bind(null,e),Ko:jf.bind(null,e)}),e.la.push(async t=>{t?(e.wa.xo(),Ir(e)?Sr(e):e.da.set("Unknown")):(await e.wa.stop(),Fa(e))})),e.wa}function mt(e){return e.ma||(e.ma=function(t,n,s){const r=I(t);return r.Zo(),new Ff(n,r.Ro,r.authCredentials,r.appCheckCredentials,r.M,s)}(e.datastore,e.asyncQueue,{Wr:Kf.bind(null,e),Hr:Wf.bind(null,e),Jo:zf.bind(null,e),Ho:Gf.bind(null,e)}),e.la.push(async t=>{t?(e.ma.xo(),await Xn(e)):(await e.ma.stop(),e.ua.length>0&&(y("RemoteStore",`Stopping write stream with ${e.ua.length} pending writes`),e.ua=[]))})),e.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Cr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function br(e,t){if(pt("AsyncQueue",`${t}: ${e}`),$e(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Rs(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Vt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Vt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Vt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.ga=new U(E.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):S():this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class zt{constructor(t,n,s,r,i,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new zt(t,n,Vt.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.pa=void 0,this.listeners=[]}}class Qf{constructor(){this.queries=new te(t=>la(t),jn),this.onlineState="Unknown",this.Ia=new Set}}async function Jf(e,t){const n=I(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Yf),r)try{i.pa=await n.onListen(s)}catch(o){const a=br(o,`Initialization of query '${Ns(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Ta(n.onlineState),i.pa&&t.Ea(i.pa)&&Ar(n)}async function Zf(e,t){const n=I(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function td(e,t){const n=I(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ea(r)&&(s=!0);o.pa=r}}s&&Ar(n)}function ed(e,t,n){const s=I(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Ar(e){e.Ia.forEach(t=>{t.next()})}class nd{constructor(t,n,s){this.query=t,this.Aa=n,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=s||{}}Ea(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new zt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Ra?this.Pa(t)&&(this.Aa.next(t),n=!0):this.Va(t,this.onlineState)&&(this.va(t),n=!0),this.ba=t,n}onError(t){this.Aa.error(t)}Ta(t){this.onlineState=t;let n=!1;return this.ba&&!this.Ra&&this.Va(this.ba,t)&&(this.va(this.ba),n=!0),n}Va(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Sa||!s)&&(!t.docs.isEmpty()||n==="Offline")}Pa(t){if(t.docChanges.length>0)return!0;const n=this.ba&&this.ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}va(t){t=zt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Ra=!0,this.Aa.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class sd{constructor(t,n){this.query=t,this.ka=n,this.Ma=null,this.current=!1,this.Oa=R(),this.mutatedKeys=R(),this.$a=fa(t),this.Fa=new Vt(this.$a)}get Ba(){return this.ka}La(t,n){const s=n?n.qa:new Fi,r=n?n.Fa:this.Fa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Qe(this.query)&&r.size===this.query.limit?r.last():null,u=vn(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const p=r.get(h),m=gr(this.query,l)?l:null,w=!!p&&this.mutatedKeys.has(p.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;p&&m?p.data.isEqual(m.data)?w!==N&&(s.track({type:3,doc:m}),P=!0):this.Ua(p,m)||(s.track({type:2,doc:m}),P=!0,(c&&this.$a(m,c)>0||u&&this.$a(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),P=!0):p&&!m&&(s.track({type:1,doc:p}),P=!0,(c||u)&&(a=!0)),P&&(m?(o=o.add(m),i=N?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),Qe(this.query)||vn(this.query))for(;o.size>this.query.limit;){const h=Qe(this.query)?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Fa:o,qa:s,ei:a,mutatedKeys:i}}Ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Fa;this.Fa=t.Fa,this.mutatedKeys=t.mutatedKeys;const i=t.qa.ya();i.sort((u,h)=>function(l,p){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return m(l)-m(p)}(u.type,h.type)||this.$a(u.doc,h.doc)),this.Ka(s);const o=n?this.Ga():[],a=this.Oa.size===0&&this.current?1:0,c=a!==this.Ma;return this.Ma=a,i.length!==0||c?{snapshot:new zt(this.query,t.Fa,r,i,t.mutatedKeys,a===0,c,!1),Qa:o}:{Qa:o}}Ta(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new Fi,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(t){return!this.ka.has(t)&&!!this.Fa.has(t)&&!this.Fa.get(t).hasLocalMutations}Ka(t){t&&(t.addedDocuments.forEach(n=>this.ka=this.ka.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ka=this.ka.delete(n)),this.current=t.current)}Ga(){if(!this.current)return[];const t=this.Oa;this.Oa=R(),this.Fa.forEach(s=>{this.ja(s.key)&&(this.Oa=this.Oa.add(s.key))});const n=[];return t.forEach(s=>{this.Oa.has(s)||n.push(new Ba(s))}),this.Oa.forEach(s=>{t.has(s)||n.push(new Ua(s))}),n}Wa(t){this.ka=t.hi,this.Oa=R();const n=this.La(t.documents);return this.applyChanges(n,!0)}za(){return zt.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,this.Ma===0)}}class rd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class id{constructor(t){this.key=t,this.Ha=!1}}class od{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ja={},this.Ya=new te(a=>la(a),jn),this.Xa=new Map,this.Za=new Set,this.tu=new U(E.comparator),this.eu=new Map,this.nu=new wr,this.su={},this.iu=new Map,this.ru=Kt.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return this.ou===!0}}async function ad(e,t){const n=yd(e);let s,r;const i=n.Ya.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.za();else{const o=await Tf(n.localStore,Nt(t));n.isPrimaryClient&&xa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await cd(n,t,s,a==="current")}return r}async function cd(e,t,n,s){e.au=(h,l,p)=>async function(m,w,N,P){let at=w.view.La(N);at.ei&&(at=await Oi(m.localStore,w.query,!1).then(({documents:ie})=>w.view.La(ie,at)));const ct=P&&P.targetChanges.get(w.targetId),re=w.view.applyChanges(at,m.isPrimaryClient,ct);return Vi(m,w.targetId,re.Qa),re.snapshot}(e,h,l,p);const r=await Oi(e.localStore,t,!0),i=new sd(t,r.hi),o=i.La(r.documents),a=Ve.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=i.applyChanges(o,e.isPrimaryClient,a);Vi(e,n,c.Qa);const u=new rd(t,n,i);return e.Ya.set(t,u),e.Xa.has(n)?e.Xa.get(n).push(t):e.Xa.set(n,[t]),c.snapshot}async function ud(e,t){const n=I(e),s=n.Ya.get(t),r=n.Xa.get(s.targetId);if(r.length>1)return n.Xa.set(s.targetId,r.filter(i=>!jn(i,t))),void n.Ya.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ls(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ma(n.remoteStore,s.targetId),Fs(n,s.targetId)}).catch(Ue)):(Fs(n,s.targetId),await Ls(n.localStore,s.targetId,!0))}async function hd(e,t,n){const s=vd(e);try{const r=await function(i,o){const a=I(i),c=et.now(),u=o.reduce((l,p)=>l.add(p.key),R());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.ui.Us(l,u).next(p=>{h=p;const m=[];for(const w of o){const N=Nl(w,h.get(w.key));N!=null&&m.push(new Pe(w.key,N,ua(N.value.mapValue),Pt.exists(!0)))}return a.Fs.addMutationBatch(l,c,m,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.su[i.currentUser.toKey()];c||(c=new U(D)),c=c.insert(o,a),i.su[i.currentUser.toKey()]=c}(s,r.batchId,n),await je(s,r.changes),await Xn(s.remoteStore)}catch(r){const i=br(r,"Failed to persist write");n.reject(i)}}async function ja(e,t){const n=I(e);try{const s=await vf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.eu.get(i);o&&(k(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ha=!0:r.modifiedDocuments.size>0?k(o.Ha):r.removedDocuments.size>0&&(k(o.Ha),o.Ha=!1))}),await je(n,s,t)}catch(s){await Ue(s)}}function Pi(e,t,n){const s=I(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Ya.forEach((i,o)=>{const a=o.view.Ta(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Ta(o)&&(c=!0)}),c&&Ar(a)}(s.eventManager,t),r.length&&s.Ja.Ko(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ld(e,t,n){const s=I(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.eu.get(t),i=r&&r.key;if(i){let o=new U(E.comparator);o=o.insert(i,G.newNoDocument(i,C.min()));const a=R().add(i),c=new zn(C.min(),new Map,new H(D),o,a);await ja(s,c),s.tu=s.tu.remove(i),s.eu.delete(t),_r(s)}else await Ls(s.localStore,t,!1).then(()=>Fs(s,t,n)).catch(Ue)}async function fd(e,t){const n=I(e),s=t.batch.batchId;try{const r=await yf(n.localStore,t);Ha(n,s,null),qa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await je(n,r)}catch(r){await Ue(r)}}async function dd(e,t,n){const s=I(e);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Fs.lookupMutationBatch(c,o).next(h=>(k(h!==null),u=h.keys(),a.Fs.removeMutationBatch(c,h))).next(()=>a.Fs.performConsistencyCheck(c)).next(()=>a.ui.Us(c,u))})}(s.localStore,t);Ha(s,t,n),qa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await je(s,r)}catch(r){await Ue(r)}}function qa(e,t){(e.iu.get(t)||[]).forEach(n=>{n.resolve()}),e.iu.delete(t)}function Ha(e,t,n){const s=I(e);let r=s.su[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.su[s.currentUser.toKey()]=r}}function Fs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Xa.get(t))e.Ya.delete(s),n&&e.Ja.uu(s,n);e.Xa.delete(t),e.isPrimaryClient&&e.nu.Ri(t).forEach(s=>{e.nu.containsKey(s)||Ka(e,s)})}function Ka(e,t){e.Za.delete(t.path.canonicalString());const n=e.tu.get(t);n!==null&&(Ma(e.remoteStore,n),e.tu=e.tu.remove(t),e.eu.delete(n),_r(e))}function Vi(e,t,n){for(const s of n)s instanceof Ua?(e.nu.addReference(s.key,t),pd(e,s)):s instanceof Ba?(y("SyncEngine","Document no longer in limbo: "+s.key),e.nu.removeReference(s.key,t),e.nu.containsKey(s.key)||Ka(e,s.key)):S()}function pd(e,t){const n=t.key,s=n.path.canonicalString();e.tu.get(n)||e.Za.has(s)||(y("SyncEngine","New document in limbo: "+n),e.Za.add(s),_r(e))}function _r(e){for(;e.Za.size>0&&e.tu.size<e.maxConcurrentLimboResolutions;){const t=e.Za.values().next().value;e.Za.delete(t);const n=new E(x.fromString(t)),s=e.ru.next();e.eu.set(s,new id(n)),e.tu=e.tu.insert(n,s),xa(e.remoteStore,new It(Nt(pr(n.path)),s,2,hr.A))}}async function je(e,t,n){const s=I(e),r=[],i=[],o=[];s.Ya.isEmpty()||(s.Ya.forEach((a,c)=>{o.push(s.au(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=vr.Js(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.Ja.Ko(r),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(c,l=>d.forEach(l.zs,p=>u.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>d.forEach(l.Hs,p=>u.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!$e(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const p=u.si.get(l),m=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(m);u.si=u.si.insert(l,w)}}}(s.localStore,i))}async function gd(e,t){const n=I(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Na(n.localStore,t);n.currentUser=t,function(r,i){r.iu.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,i))})}),r.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await je(n,s.ci)}}function md(e,t){const n=I(e),s=n.eu.get(t);if(s&&s.Ha)return R().add(s.key);{let r=R();const i=n.Xa.get(t);if(!i)return r;for(const o of i){const a=n.Ya.get(o);r=r.unionWith(a.view.Ba)}return r}}function yd(e){const t=I(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ja.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=md.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ld.bind(null,t),t.Ja.Ko=td.bind(null,t.eventManager),t.Ja.uu=ed.bind(null,t.eventManager),t}function vd(e){const t=I(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dd.bind(null,t),t}class wd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Gn(t.databaseInfo.databaseId),this.sharedClientState=this.hu(t),this.persistence=this.lu(t),await this.persistence.start(),this.gcScheduler=this.fu(t),this.localStore=this.du(t)}fu(t){return null}du(t){return mf(this.persistence,new pf,t.initialUser,this.M)}lu(t){return new Df(Er.Wi,this.M)}hu(t){return new kf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ed{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gd.bind(null,this.syncEngine),await Xf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qf}createDatastore(t){const n=Gn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Mf(r));var r;return function(i,o,a,c){return new Pf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Pi(this.syncEngine,a,0),o=Mi.vt()?new Mi:new Rf,new $f(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new od(s,r,i,o,a,c);return u&&(h.ou=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=I(t);y("RemoteStore","RemoteStore shutting down."),n.ha.add(5),await Be(n),n.fa.shutdown(),n.da.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.wu(this.observer.next,t)}error(t){this.observer.error?this.wu(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}mu(){this.muted=!0}wu(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=J.UNAUTHENTICATED,this.clientId=ia.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=br(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Id(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Na(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Cd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bd(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Li(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Li(t.remoteStore,i)),e.onlineComponents=t}async function bd(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Id(e,new wd)),e.offlineComponents}async function za(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Cd(e,new Ed)),e.onlineComponents}function Ad(e){return za(e).then(t=>t.syncEngine)}async function $i(e){const t=await za(e),n=t.eventManager;return n.onListen=ad.bind(null,t.syncEngine),n.onUnlisten=ud.bind(null,t.syncEngine),n}const Ui=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _d(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Bi(e){if(!E.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ji(e){if(E.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Dr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function tn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dr(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,_d("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qi({}),this._settingsFrozen=!1,t instanceof qt?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qt(r.options.projectId)}(t))}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xh;switch(n.type){case"gapi":const s=n.client;return k(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Jh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ui.get(t);n&&(y("ComponentProvider","Removing Datastore"),Ui.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class Yn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Yn(this.firestore,t,this._query)}}class dt extends Yn{constructor(t,n,s){super(t,n,pr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new E(t))}withConverter(t){return new dt(this.firestore,t,this._path)}}function Wa(e,t,...n){if(e=$t(e),Ga("collection","path",t),e instanceof Nr){const s=x.fromString(t,...n);return ji(s),new dt(e,null,s)}{if(!(e instanceof st||e instanceof dt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return ji(s),new dt(e.firestore,null,s)}}function Dd(e,t,...n){if(e=$t(e),arguments.length===1&&(t=ia.R()),Ga("doc","path",t),e instanceof Nr){const s=x.fromString(t,...n);return Bi(s),new st(e,null,new E(s))}{if(!(e instanceof st||e instanceof dt))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Bi(s),new st(e.firestore,e instanceof dt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new Ra(this,"async_queue_retry"),this.Fu=()=>{const n=us();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.vo.To()};const t=us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Bu(),this.Lu(t)}enterRestrictedMode(t){if(!this.xu){this.xu=!0,this.Ou=t||!1;const n=us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Fu)}}enqueue(t){if(this.Bu(),this.xu)return new Promise(()=>{});const n=new St;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Cu.push(t),this.qu()))}async qu(){if(this.Cu.length!==0){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(t){if(!$e(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(t){const n=this.Du.then(()=>(this.Mu=!0,t().catch(s=>{this.ku=s,this.Mu=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Mu=!1,s))));return this.Du=n,n}enqueueAfterDelay(t,n,s){this.Bu(),this.$u.indexOf(t)>-1&&(n=0);const r=Cr.createAndSchedule(this,t,n,s,i=>this.Uu(i));return this.Nu.push(r),r}Bu(){this.ku&&S()}verifyOperationInProgress(){}async Ku(){let t;do t=this.Du,await t;while(t!==this.Du)}Gu(t){for(const n of this.Nu)if(n.timerId===t)return!0;return!1}Qu(t){return this.Ku().then(()=>{this.Nu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ku()})}ju(t){this.$u.push(t)}Uu(t){const n=this.Nu.indexOf(t);this.Nu.splice(n,1)}}function Hi(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class In extends Nr{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Nd,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Qa(this),this._firestoreClient.terminate()}}function kd(e,t){const n=eo(e,"firestore");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(sn(r,t))return s;throw new v(f.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t})}function Xa(e=Vs()){return eo(e,"firestore").getImmediate()}function Ya(e){return e._firestoreClient||Qa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qa(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new rl(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Sd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gt(K.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Gt(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=/^__.*__$/;class Od{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,n,this.fieldTransforms):new Kn(t,this.data,n,this.fieldTransforms)}}function Za(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Or{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Wu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(t){return new Or(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Hu({path:s,Yu:!1});return r.Xu(t),r}Zu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Hu({path:s,Yu:!1});return r.Wu(),r}tc(t){return this.Hu({path:void 0,Yu:!0})}ec(t){return Cn(t,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Wu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Xu(this.path.get(t))}Xu(t){if(t.length===0)throw this.ec("Document fields must not be empty");if(Za(this.zu)&&Rd.test(t))throw this.ec('Document fields cannot begin and end with "__"')}}class xd{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Gn(t)}ic(t,n,s,r=!1){return new Or({zu:t,methodName:n,sc:s,path:Z.emptyPath(),Yu:!1,nc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Md(e){const t=e._freezeSettings(),n=Gn(e._databaseId);return new xd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ld(e,t,n,s,r,i={}){const o=e.ic(i.merge||i.mergeFields?2:0,t,n,r);sc("Data must be an object, but it was:",o,s);const a=ec(s,o);let c,u;if(i.merge)c=new bs(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const p=Fd(t,l,n);if(!o.contains(p))throw new v(f.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Vd(h,p)||h.push(p)}c=new bs(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Od(new it(a),c,u)}function tc(e,t){if(nc(e=$t(e)))return sc("Unsupported field value:",t,e),ec(e,t);if(e instanceof Ja)return function(n,s){if(!Za(s.zu))throw s.ec(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ec(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Yu&&t.zu!==4)throw t.ec("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=tc(o,s.tc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Il(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=et.fromDate(n);return{timestampValue:Tn(s.M,r)}}if(n instanceof et){const r=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Tn(s.M,r)}}if(n instanceof Rr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gt)return{bytesValue:Ca(s.M,n._byteString)};if(n instanceof st){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ec(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:mr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ec(`Unsupported field value: ${Dr(n)}`)}(e,t)}function ec(e,t){const n={};return oa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Jt(e,(s,r)=>{const i=tc(r,t.Ju(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function nc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof et||e instanceof Rr||e instanceof Gt||e instanceof st||e instanceof Ja)}function sc(e,t,n){if(!nc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Dr(n);throw s==="an object"?t.ec(e+" a custom object"):t.ec(e+" "+s)}}function Fd(e,t,n){if((t=$t(t))instanceof kr)return t._internalPath;if(typeof t=="string")return rc(e,t);throw Cn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Pd=new RegExp("[~\\*/\\[\\]]");function rc(e,t,n){if(t.search(Pd)>=0)throw Cn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kr(...t.split("."))._internalPath}catch{throw Cn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}function Vd(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $d(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $d extends ic{data(){return super.data()}}function oc(e,t){return typeof t=="string"?rc(e,t):t instanceof kr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ac extends ic{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new en(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(oc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class en extends ac{data(t={}){return super.data(t)}}class Ud{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new ue(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new en(this._firestore,this._userDataWriter,s.key,s,new ue(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new en(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new en(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Bd(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Bd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(e){if(vn(e)&&e.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{convertValue(t,n="none"){switch(Dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){const s={};return Jt(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Rr(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ca(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ie(t));default:return null}}convertTimestamp(t){const n=gt(t);return new et(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);k(Da(s));const r=new qt(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class cc extends qd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Kd(e,t){const n=tn(e.firestore,In),s=Dd(e),r=Hd(e.converter,t);return Gd(n,[Ld(Md(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Pt.exists(!1))]).then(()=>s)}function zd(e,...t){var n,s,r;e=$t(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Hi(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Hi(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(e instanceof st)u=tn(e.firestore,In),h=pr(e._key.path),c={next:l=>{t[o]&&t[o](Wd(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=tn(e,Yn);u=tn(l.firestore,In),h=l._query;const p=new cc(u);c={next:m=>{t[o]&&t[o](new Ud(u,p,l,m))},error:t[o+1],complete:t[o+2]},jd(e._query)}return function(l,p,m,w){const N=new Td(w),P=new nd(p,N,m);return l.asyncQueue.enqueueAndForget(async()=>Jf(await $i(l),P)),()=>{N.mu(),l.asyncQueue.enqueueAndForget(async()=>Zf(await $i(l),P))}}(Ya(u),h,a,c)}function Gd(e,t){return function(n,s){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>hd(await Ad(n),s,r)),r.promise}(Ya(e),t)}function Wd(e,t,n){const s=n.docs.get(t._key),r=new cc(e);return new ac(e,r,t._key,s,new ue(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Qt=n})(ku),on(new ge("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new In(r,new Yh(n.getProvider("auth-internal")),new tl(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),he(fi,"3.4.6",e),he(fi,"3.4.6","esm2017")})();const bn="sasa-sretan-rodjendan",Xd=async e=>{const t=Wa(Xa(Vs(bn)),bn),n=Date.now().toString(),s=qr(jr({},e),{timestamp:n});try{return await Kd(t,s),{success:!0}}catch{return{success:!1}}};var uc={exports:{}},A={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ki=Object.getOwnPropertySymbols,Yd=Object.prototype.hasOwnProperty,Qd=Object.prototype.propertyIsEnumerable;function Jd(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Zd(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var s=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(s.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(i){r[i]=i}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var tp=Zd()?Object.assign:function(e,t){for(var n,s=Jd(e),r,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var o in n)Yd.call(n,o)&&(s[o]=n[o]);if(Ki){r=Ki(n);for(var a=0;a<r.length;a++)Qd.call(n,r[a])&&(s[r[a]]=n[r[a]])}}return s};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=tp,ne=60103,hc=60106;A.Fragment=60107;A.StrictMode=60108;A.Profiler=60114;var lc=60109,fc=60110,dc=60112;A.Suspense=60113;var pc=60115,gc=60116;if(typeof Symbol=="function"&&Symbol.for){var rt=Symbol.for;ne=rt("react.element"),hc=rt("react.portal"),A.Fragment=rt("react.fragment"),A.StrictMode=rt("react.strict_mode"),A.Profiler=rt("react.profiler"),lc=rt("react.provider"),fc=rt("react.context"),dc=rt("react.forward_ref"),A.Suspense=rt("react.suspense"),pc=rt("react.memo"),gc=rt("react.lazy")}var zi=typeof Symbol=="function"&&Symbol.iterator;function ep(e){return e===null||typeof e!="object"?null:(e=zi&&e[zi]||e["@@iterator"],typeof e=="function"?e:null)}function qe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yc={};function se(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||mc}se.prototype.isReactComponent={};se.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(qe(85));this.updater.enqueueSetState(this,e,t,"setState")};se.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vc(){}vc.prototype=se.prototype;function Mr(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||mc}var Lr=Mr.prototype=new vc;Lr.constructor=Mr;xr(Lr,se.prototype);Lr.isPureReactComponent=!0;var Fr={current:null},wc=Object.prototype.hasOwnProperty,Ec={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,n){var s,r={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)wc.call(t,s)&&!Ec.hasOwnProperty(s)&&(r[s]=t[s]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}if(e&&e.defaultProps)for(s in a=e.defaultProps,a)r[s]===void 0&&(r[s]=a[s]);return{$$typeof:ne,type:e,key:i,ref:o,props:r,_owner:Fr.current}}function np(e,t){return{$$typeof:ne,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pr(e){return typeof e=="object"&&e!==null&&e.$$typeof===ne}function sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gi=/\/+/g;function hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sp(""+e.key):t.toString(36)}function nn(e,t,n,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ne:case hc:o=!0}}if(o)return o=e,r=r(o),e=s===""?"."+hs(o,0):s,Array.isArray(r)?(n="",e!=null&&(n=e.replace(Gi,"$&/")+"/"),nn(r,t,n,"",function(u){return u})):r!=null&&(Pr(r)&&(r=np(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Gi,"$&/")+"/")+e)),t.push(r)),1;if(o=0,s=s===""?".":s+":",Array.isArray(e))for(var a=0;a<e.length;a++){i=e[a];var c=s+hs(i,a);o+=nn(i,t,n,c,r)}else if(c=ep(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=s+hs(i,a++),o+=nn(i,t,n,c,r);else if(i==="object")throw t=""+e,Error(qe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function Xe(e,t,n){if(e==null)return e;var s=[],r=0;return nn(e,s,"","",function(i){return t.call(n,i,r++)}),s}function rp(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Sc={current:null};function ft(){var e=Sc.current;if(e===null)throw Error(qe(321));return e}var ip={ReactCurrentDispatcher:Sc,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Fr,IsSomeRendererActing:{current:!1},assign:xr};A.Children={map:Xe,forEach:function(e,t,n){Xe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xe(e,function(){t++}),t},toArray:function(e){return Xe(e,function(t){return t})||[]},only:function(e){if(!Pr(e))throw Error(qe(143));return e}};A.Component=se;A.PureComponent=Mr;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;A.cloneElement=function(e,t,n){if(e==null)throw Error(qe(267,e));var s=xr({},e.props),r=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Fr.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)wc.call(t,c)&&!Ec.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];s.children=a}return{$$typeof:ne,type:e.type,key:r,ref:i,props:s,_owner:o}};A.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:fc,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:lc,_context:e},e.Consumer=e};A.createElement=Tc;A.createFactory=function(e){var t=Tc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:dc,render:e}};A.isValidElement=Pr;A.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:rp}};A.memo=function(e,t){return{$$typeof:pc,type:e,compare:t===void 0?null:t}};A.useCallback=function(e,t){return ft().useCallback(e,t)};A.useContext=function(e,t){return ft().useContext(e,t)};A.useDebugValue=function(){};A.useEffect=function(e,t){return ft().useEffect(e,t)};A.useImperativeHandle=function(e,t,n){return ft().useImperativeHandle(e,t,n)};A.useLayoutEffect=function(e,t){return ft().useLayoutEffect(e,t)};A.useMemo=function(e,t){return ft().useMemo(e,t)};A.useReducer=function(e,t,n){return ft().useReducer(e,t,n)};A.useRef=function(e){return ft().useRef(e)};A.useState=function(e){return ft().useState(e)};A.version="17.0.2";uc.exports=A;const op=[{title:"Hello world",message:"Lorem ipsum",timestamp:"2022-03-18T16:34:000"},{title:"Ivan Ku\u0161t",message:"Ne znam Sa\u0161u, ali \u010Dujem dobar \u010Dovjek skroz.",timestamp:"2022-03-18T16:20:000"}],ap=()=>{const[e,t]=uc.exports.useState(op),n=Wa(Xa(Vs(bn)),bn);return zd(n,s=>{const r=s.docs.map(i=>i.data()).sort((i,o)=>i.timestamp<o.timestamp?-1:1);t(r)}),e},cp={apiKey:"AIzaSyBcnKLSFK5kzEE1sUtFG0fDiEja_IlCx8k",authDomain:"sasa-sretan-rodjendan.firebaseapp.com",projectId:"sasa-sretan-rodjendan",storageBucket:"sasa-sretan-rodjendan.appspot.com",messagingSenderId:"843107906749",appId:"1:843107906749:web:1429be7e389e120870b3d4"},up=Ru(cp);kd(up,{});exports.postSasaSretanRodjendan=Xd;exports.useSasaSretanRodjendan=ap;
