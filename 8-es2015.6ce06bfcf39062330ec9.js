(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xala:function(e,t,s){"use strict";s.r(t);var r=s("8Y7J");class n{}var o=s("pMnS"),a=s("SVse"),i=s("mrSG"),l=s("CoC1"),h=s("8nyR"),u=s("e1JD"),d=s("vkgz"),p=s("lJxs");class c{constructor(e){this.httpService=e}fetchAll(){return this.httpService.get("./app/json/person.json").pipe(Object(p.a)(e=>e.data))}}let b=(()=>{let e=class extends h.a{constructor(e){super(),this.personService=e}getContent(){return this.personService.fetchAll().pipe(Object(d.a)(e=>this.setState(e)))}};return e=Object(i.a)([Object(l.g)(),Object(u.e)({name:"person",defaults:{title:null,description:null}})],e),e})();class m{constructor(e){this.person=e}}var y=r.pb({encapsulation:2,styles:[],data:{}});function f(e){return r.Ib(0,[(e()(),r.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),r.rb(1,0,null,null,1,"h4",[],null,null,null,null,null)),(e()(),r.Gb(2,null,["",""])),(e()(),r.rb(3,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.Gb(4,null,["",""]))],null,(function(e,t){e(t,2,0,t.context.ngIf.title),e(t,4,0,t.context.ngIf.description)}))}function g(e){return r.Ib(2,[(e()(),r.rb(0,0,null,null,1,"a",[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts"],["target","_blank"]],null,null,null,null,null)),(e()(),r.rb(1,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(e()(),r.rb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),r.Gb(-1,null,["Person state"])),(e()(),r.gb(16777216,null,null,2,null,f)),r.qb(5,16384,null,0,a.k,[r.N,r.K],{ngIf:[0,"ngIf"]},null),r.Db(131072,a.b,[r.i])],(function(e,t){var s=t.component;e(t,5,0,r.Hb(t,5,0,r.Bb(t,6).transform(s.person.state$)))}),null)}function w(e){return r.Ib(0,[(e()(),r.rb(0,0,null,null,1,"person",[],null,null,null,g,y)),r.qb(1,49152,null,0,m,[b],null,null)],null,null)}var v=r.nb("person",m,w,{},{},[]),T=s("LRne"),A=s("HDdC"),x=s("bOdf"),C=s("pLZG");class E{}class k{}class O{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof O?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new O;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof O?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class S{encodeKey(e){return j(e)}encodeValue(e){return j(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function j(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class N{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new S,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.split("&").forEach(e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).join("&")}clone(e){const t=new N({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat([e]),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(e.value);-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function P(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function z(e){return"undefined"!=typeof Blob&&e instanceof Blob}function R(e){return"undefined"!=typeof FormData&&e instanceof FormData}class U{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new O),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new N,this.urlWithParams=t}serializeBody(){return null===this.body?null:P(this.body)||z(this.body)||R(this.body)||"string"==typeof this.body?this.body:this.body instanceof N?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||R(this.body)?null:z(this.body)?this.body.type||null:P(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof N?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,l=e.params||this.params;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),i)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),l)),new U(t,s,n,{params:l,headers:i,reportProgress:a,responseType:r,withCredentials:o})}}const L=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}();class H{constructor(e,t=200,s="OK"){this.headers=e.headers||new O,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class F extends H{constructor(e={}){super(e),this.type=L.ResponseHeader}clone(e={}){return new F({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class I extends H{constructor(e={}){super(e),this.type=L.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new I({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class q extends H{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function D(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}class M{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof U)r=e;else{let n=void 0;n=s.headers instanceof O?s.headers:new O(s.headers);let o=void 0;s.params&&(o=s.params instanceof N?s.params:new N({fromObject:s.params})),r=new U(e,t,void 0!==s.body?s.body:null,{headers:n,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const n=Object(T.a)(r).pipe(Object(x.a)(e=>this.handler.handle(e)));if(e instanceof U||"events"===s.observe)return n;const o=n.pipe(Object(C.a)(e=>e instanceof I));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return o.pipe(Object(p.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return o.pipe(Object(p.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return o.pipe(Object(p.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return o.pipe(Object(p.a)(e=>e.body))}case"response":return o;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new N).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,D(s,t))}post(e,t,s={}){return this.request("POST",e,D(s,t))}put(e,t,s={}){return this.request("PUT",e,D(s,t))}}class B{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const J=new r.p("HTTP_INTERCEPTORS");class K{intercept(e,t){return t.handle(e)}}const G=/^\)\]\}',?\n/;class X{}class V{constructor(){}build(){return new XMLHttpRequest}}class ${constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new A.a(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const o=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",o=new O(s.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new F({headers:o,status:t,statusText:r,url:a}),n},a=()=>{let{headers:r,status:n,statusText:a,url:i}=o(),l=null;204!==n&&(l=void 0===s.response?s.responseText:s.response),0===n&&(n=l?200:0);let h=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof l){const e=l;l=l.replace(G,"");try{l=""!==l?JSON.parse(l):null}catch(u){l=e,h&&(h=!1,l={error:u,text:l})}}h?(t.next(new I({body:l,headers:r,status:n,statusText:a,url:i||void 0})),t.complete()):t.error(new q({error:l,headers:r,status:n,statusText:a,url:i||void 0}))},i=e=>{const{url:r}=o(),n=new q({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let l=!1;const h=r=>{l||(t.next(o()),l=!0);let n={type:L.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},u=e=>{let s={type:L.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",a),s.addEventListener("error",i),e.reportProgress&&(s.addEventListener("progress",h),null!==r&&s.upload&&s.upload.addEventListener("progress",u)),s.send(r),t.next({type:L.Sent}),()=>{s.removeEventListener("error",i),s.removeEventListener("load",a),e.reportProgress&&(s.removeEventListener("progress",h),null!==r&&s.upload&&s.upload.removeEventListener("progress",u)),s.abort()}})}}const _=new r.p("XSRF_COOKIE_NAME"),W=new r.p("XSRF_HEADER_NAME");class Z{}class Y{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(a.t)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}class Q{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}class ee{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(J,[]);this.chain=e.reduceRight((e,t)=>new B(e,t),this.backend)}return this.chain.handle(e)}}class te{static disable(){return{ngModule:te,providers:[{provide:Q,useClass:K}]}}static withOptions(e={}){return{ngModule:te,providers:[e.cookieName?{provide:_,useValue:e.cookieName}:[],e.headerName?{provide:W,useValue:e.headerName}:[]]}}}class se{}class re{constructor(e){this.personState=e}resolve(){return this.personState.getContent()}}var ne=s("Mrqg"),oe=s("iInd");s.d(t,"PersonModuleNgFactory",(function(){return ae}));var ae=r.ob(n,[],(function(e){return r.zb([r.Ab(512,r.k,r.Z,[[8,[o.a,v]],[3,r.k],r.w]),r.Ab(4608,a.m,a.l,[r.t,[2,a.s]]),r.Ab(4608,Z,Y,[a.d,r.A,_]),r.Ab(4608,Q,Q,[Z,W]),r.Ab(5120,J,(function(e){return[e]}),[Q]),r.Ab(4608,V,V,[]),r.Ab(6144,X,null,[V]),r.Ab(4608,$,$,[X]),r.Ab(6144,k,null,[$]),r.Ab(4608,E,ee,[k,r.q]),r.Ab(4608,M,M,[E]),r.Ab(4608,u.D,u.D,[[3,u.D],[2,u.c]]),r.Ab(4608,c,c,[M]),r.Ab(4608,b,b,[c]),r.Ab(4608,re,re,[b]),r.Ab(1073742336,a.c,a.c,[]),r.Ab(1073742336,te,te,[]),r.Ab(1073742336,se,se,[]),r.Ab(512,u.y,u.y,[r.q,u.v,[3,u.y],u.n,u.z,u.B,[2,ne.a]]),r.Ab(1024,u.s,(function(){return[[b]]}),[]),r.Ab(1073742336,u.p,u.p,[u.h,u.C,u.y,[2,u.s],u.o]),r.Ab(1073742336,oe.m,oe.m,[[2,oe.r],[2,oe.k]]),r.Ab(1073742336,n,n,[]),r.Ab(256,_,"XSRF-TOKEN",[]),r.Ab(256,W,"X-XSRF-TOKEN",[]),r.Ab(1024,oe.i,(function(){return[[{path:"",component:m,resolve:{content:re}}]]}),[])])}))}}]);