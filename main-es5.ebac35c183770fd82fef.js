!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function l(t){var e=v();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){var e="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return p(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,t)})(t)}function p(t,e,n){return(p=v()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&h(o,n.prototype),o}).apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(t,e,n){t.exports=n("2v48")},"2mhZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return N})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return M})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return R})),n.d(e,"i",(function(){return T})),n.d(e,"j",(function(){return _})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return m})),n.d(e,"m",(function(){return F})),n.d(e,"n",(function(){return L})),n.d(e,"o",(function(){return V})),n.d(e,"p",(function(){return J})),n.d(e,"q",(function(){return j})),n.d(e,"r",(function(){return z})),n.d(e,"s",(function(){return E})),n.d(e,"t",(function(){return K})),n.d(e,"u",(function(){return Y})),n.d(e,"v",(function(){return P})),n.d(e,"w",(function(){return G}));var r=n("rNfh"),o=n("CIZ5"),a=n("fXoL"),f=n("AcyG"),p=n("z5Zb"),v=n("2Vo4"),h=n("cp0P"),y=n("7+OI"),b=n("lJxs"),g=n("UXun");function m(t){return JSON.parse(JSON.stringify(void 0===t?{}:t))}function S(t){return t.NGXS_OPTIONS_META||{name:""}}var O=function(t){s(n,t);var e=l(n);function n(t){return c(this,n),e.call(this,"Child states can only be added to an object. Cannot convert ".concat(t&&t.constructor?t.constructor.name:t," to PlainObject"))}return n}(d(Error));function w(t){var e=S(t),n=e.children||[],o=m(e.defaults);if(n.length){if(Object(r.b)(o))return function(t,e){return e.reduce((function(t,e){var n=S(e);if(!n.name)throw new Error("State name not provided in class");return t[n.name.toString()]=w(e),t}),t)}(o,n);throw new O(o)}return o}function k(t){for(var e=t.statePath,n=t.argumentsNames,r=t.methodName,o=t.argumentRegistry,i="",a=0;a<n.length;a++)(null==o?void 0:o.getArgumentNameByIndex(a))?i+=null==o?void 0:o.getArgumentNameByIndex(a):(null==o?void 0:o.getPayloadTypeByIndex(a))?i+=null==o?void 0:o.getPayloadTypeByIndex(a):i+="$arg"+a,a!==n.length-1&&(i+=", ");return"@".concat(e.replace(/\./g,"/"),".").concat(r,"(").concat(i,")")}function x(t){return(t+"").replace(/[/][/].*$/gm,"").replace(/\s+/g,"").replace(/[/][*][^/*]*[*][/]/g,"").split("){",1)[0].replace(/^[^(]*[(]/,"").replace(/=[^,]+/g,"").split(",").filter(Boolean)}function j(t){if(!t.hasOwnProperty(o.e)){var e={name:null,actions:{},defaults:{},path:null,makeRootSelector:function(t){return t.getStateGetter(e.name)},children:[]};Object.defineProperty(t,o.e,{value:e})}return function(t){return t[o.e]}(t)}function E(t){return t[o.c]}var I=function t(e){var n=e instanceof Date;if("object"!=typeof e||null===e||n)return e;Object.freeze(e);var r="function"==typeof e,o=Object.prototype.hasOwnProperty;return Object.getOwnPropertyNames(e).forEach((function(n){!o.call(e,n)||r&&("caller"===n||"callee"===n||"arguments"===n)||null===e[n]||"object"!=typeof e[n]&&"function"!=typeof e[n]||Object.isFrozen(e[n])||t(e[n])})),e},M=function(){var t=function(){function t(e){var n=this;c(this,t),this.sequence$=new v.a(0),this.subscription=null,e&&(this.subscription=e.subscribe((function(){return n.updateSequence()})))}return u(t,[{key:"ngOnDestroy",value:function(){var t;this.sequence$.next(0),null===(t=this.subscription)||void 0===t||t.unsubscribe()}},{key:"updateSequence",value:function(){this.sequence$.next(this.sequenceValue+1)}},{key:"sequenceValue",get:function(){return this.sequence$.getValue()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Zb(f.g,8))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac}),t}(),A=function(){var t=function t(e,n,r){c(this,t),t.store=e.get(f.g),t.ngZone=e.get(a.B),t.factory=n,t.context=r,t.computed=e.get(M)};return t.\u0275fac=function(e){return new(e||t)(a.Zb(a.t),a.Zb(p.d),a.Zb(p.c))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac}),t.store=null,t.computed=null,t.context=null,t.factory=null,t.ngZone=null,t}(),N=function(){var t=function(){function t(){c(this,t),t.statesCachedMeta.clear()}return u(t,null,[{key:"createStateContext",value:function(t){return A.context.createStateContext(t)}},{key:"ensureMappedState",value:function(e){if(!A.factory||!e)throw new Error("Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!");return(e.name?t.statesCachedMeta.get(e.name):null)||t.ensureMeta(e)}},{key:"getRepositoryByInstance",value:function(e){var n=E(t.getStateClassByInstance(e))||null;if(!n)throw new Error("You forgot add decorator @StateRepository or initialize state!\nExample: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])");return n}},{key:"getStateClassByInstance",value:function(t){return(t||{}).constructor}},{key:"clearMetaByInstance",value:function(e){var n=t.getRepositoryByInstance(e);n.stateMeta.actions={},n.operations={}}},{key:"createPayload",value:function(t,e){for(var n={},r=Array.from(t),o=0;o<r.length;o++){var i=null==e?void 0:e.getPayloadTypeByIndex(o);i&&(n[i]=r[o])}return Object.keys(n).length>0?n:null}},{key:"createAction",value:function(e,n,r){var o,i=t.createPayload(n,r);return new(o=e.type,function(){function t(e){var n=this;c(this,t),e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))}return u(t,null,[{key:"type",get:function(){return o}}]),t}())(i)}},{key:"ensureMeta",value:function(e){var n,r=e.name?null===(n=A.factory.states)||void 0===n?void 0:n.find((function(t){return t.name===e.name})):null;return r&&e.name&&t.statesCachedMeta.set(e.name,r),r}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac}),t.statesCachedMeta=new Map,t}();function T(t){return{enumerable:!0,configurable:!0,get:function(){var e=E(t),n=N.ensureMappedState(e.stateMeta);return N.createStateContext(n)}}}function _(t,e){(function(t){var e,n=null!==(e=E(t))&&void 0!==e?e:null;return(!n||(null==n?void 0:n.stateClass)!==t)&&function(t){Object.defineProperty(t,o.c,{writable:!0,configurable:!0,enumerable:!0,value:{stateMeta:null,operations:{},stateClass:t}})}(t),E(t)}(t)).stateMeta=e}function D(t){var e=E(t),n=e.stateMeta&&e.stateMeta.name||null;if(n){var r,o="__".concat(n,"__selector");Object.defineProperties(t.prototype,(i(r={},o,{writable:!0,enumerable:!1,configurable:!0}),i(r,"state$",{enumerable:!0,configurable:!0,get:function(){if(this[o])return this[o];if(!A.store)throw new Error("Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!");return this[o]=A.store.select(t).pipe(Object(b.a)((function(t){return Object(a.Y)()?I(t):t})),Object(g.a)({refCount:!0,bufferSize:1})),this[o]}}),r))}}function P(t,e){if(t.hasOwnProperty("prototype"))throw new Error("Cannot support static methods with @DataAction()");if(void 0===e)throw new Error("@DataAction() can only decorate a method implementation")}function C(){if(!A.ngZone)throw new Error("Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!")}function R(t,e){return Object(h.a)([t,e]).pipe(Object(b.a)((function(t){return t.pop()})))}var B=function(t){s(n,t);var e=l(n);function n(t,r){return c(this,n),e.call(this,"An argument with the name '".concat(t,"' already exists in the method '").concat(r,"'"))}return n}(d(Error)),U=function(){function t(){c(this,t),this.payloadMap=new Map,this.argumentMap=new Map}return u(t,[{key:"getPayloadTypeByIndex",value:function(t){var e;return null!==(e=this.payloadMap.get(t))&&void 0!==e?e:null}},{key:"getArgumentNameByIndex",value:function(t){var e;return null!==(e=this.argumentMap.get(t))&&void 0!==e?e:null}},{key:"createPayloadType",value:function(t,e,n){this.checkDuplicateName(t,e),this.payloadMap.set(n,t),this.payloadMap.set(t,t)}},{key:"createArgumentName",value:function(t,e,n){this.checkDuplicateName(t,e),this.argumentMap.set(n,t),this.argumentMap.set(t,t)}},{key:"checkDuplicateName",value:function(t,e){if(this.argumentMap.has(t)||this.payloadMap.has(t))throw new B(t,e)}}]),t}();function z(t){return t[o.a]}function V(t,e){var n=t[e];return z(n)||Object.defineProperties(n,i({},o.a,{enumerable:!0,configurable:!0,value:new U})),z(n)}function G(t,e){if(!Object(r.a)(t,null==e?void 0:e.toString()))throw new Error("The method must be a getter for the computed decorator to work properly.\nExample: \n@Computed() get ".concat(e.toString(),"() { \n\t .. \n}"))}function L(t){if(!t)throw new Error("You forgot add decorator @StateRepository or initialize state!\nExample: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])");return Object.assign(Object.assign({},t),{getState:function(){return Object(a.Y)()?I(t.getState()):t.getState()},setState:function(e){t.setState(e)},patchState:function(e){t.patchState(e)}})}function Z(){return"__".concat(o.b,"__")}function X(t){var e;return null!==(e=t[Z()])&&void 0!==e?e:null}function F(t){return X(t)||Object.defineProperties(t,i({},Z(),{enumerable:!0,configurable:!0,value:new WeakMap})),X(t)}function J(t){return Object(a.Y)()?I(t):t}function K(){var t,e;return null!==(e=null===(t=null==A?void 0:A.computed)||void 0===t?void 0:t.sequenceValue)&&void 0!==e?e:0}function Y(t){var e=!1;return Object(y.a)(t)&&(e=!0),e}},"2v48":function(t,e,r){"use strict";r.r(e);var o,i,a,s,l=r("fXoL"),f=r("3Pt+"),d=r("jhN1"),p=r("R1ws"),v=r("2mhZ"),h=((o=function(){function t(e,n){c(this,t),this.accessor=e,this.injector=n}return u(t,null,[{key:"forRoot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{ngModule:t,providers:[v.b,v.c,v.d].concat(n(e))}}}]),t}()).\u0275mod=l.Nb({type:o}),o.\u0275inj=l.Mb({factory:function(t){return new(t||o)(l.Zb(v.b,2),l.Zb(v.c,2))}}),o),y=r("BbUs"),b=r("/wON"),g=r("AcyG"),m=r("tyNb"),S=((i=function t(){c(this,t)}).\u0275mod=l.Nb({type:i}),i.\u0275inj=l.Mb({factory:function(t){return new(t||i)},imports:[[m.b.forRoot([{path:"",redirectTo:"count",pathMatch:"full"},{path:"count",loadChildren:function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"iBbY")).then((function(t){return t.CountModule}))}},{path:"todo",loadChildren:function(){return Promise.all([r.e(0),r.e(2),r.e(13)]).then(r.bind(null,"BX/J")).then((function(t){return t.TodoModule}))}},{path:"person",loadChildren:function(){return Promise.all([r.e(0),r.e(3),r.e(12)]).then(r.bind(null,"rAEy")).then((function(t){return t.PersonModule}))}},{path:"amount",loadChildren:function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"h86J")).then((function(t){return t.AmountModule}))}},{path:"article",loadChildren:function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(10)]).then(r.bind(null,"BVaH")).then((function(t){return t.ArticleModule}))}}],{useHash:!0})],m.b]}),i),O=r("ofXK"),w=function(){return["count"]},k=function(){return["todo"]},x=function(){return["person"]},j=function(){return["amount"]},E=function(){return["article"]},I=((s=function(){function t(e){c(this,t),this.store=e,this.snapshot=this.store.select((function(t){return t}))}return u(t,[{key:"ngOnInit",value:function(){console.log("[isDevMode]",Object(l.Y)())}}]),t}()).\u0275fac=function(t){return new(t||s)(l.Pb(g.g))},s.\u0275cmp=l.Jb({type:s,selectors:[["app-root"]],decls:72,vars:15,consts:[[1,"panel"],["src","https://habrastorage.org/webt/k7/ih/pc/k7ihpcg6w-jz-rzksmiyuip5_so.png",1,"logo"],[1,"panel-content"],[1,"menu"],[1,"menu-top"],["href","https://github.com/ngxs-labs/data/tree/master/docs","target","_blank",1,"link"],["href","https://stackblitz.io/github/ngxs-labs/data","target","_blank",1,"link"],[1,"ng-icon"],["src","https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",1,"img"],[1,"link",3,"routerLink"],[1,"container"],[1,"content"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.vc(1,"\n    "),l.Qb(2,"img",1),l.vc(3,"\n\n    "),l.Vb(4,"div",2),l.vc(5,"\n        "),l.Vb(6,"h2"),l.vc(7,"Store:"),l.Ub(),l.vc(8,"\n        "),l.Vb(9,"pre"),l.vc(10),l.gc(11,"json"),l.gc(12,"async"),l.Ub(),l.vc(13,"\n    "),l.Ub(),l.vc(14,"\n"),l.Ub(),l.vc(15,"\n\n"),l.Vb(16,"div",3),l.vc(17,"\n    "),l.Vb(18,"div",4),l.vc(19,"\n        "),l.Vb(20,"span"),l.vc(21,"\n            \ud83e\uddfe\n            "),l.Vb(22,"a",5),l.vc(23,"\n                Official documentation\n            "),l.Ub(),l.vc(24,"\n        "),l.Ub(),l.vc(25,"\n        "),l.Vb(26,"span"),l.vc(27,"\n            \ud83d\ude80 "),l.Vb(28,"a",6),l.vc(29,"Stackblitz"),l.Ub(),l.vc(30,"\n        "),l.Ub(),l.vc(31,"\n        "),l.Vb(32,"span",7),l.vc(33,"\n            "),l.Qb(34,"img",8),l.vc(35,"\n            Angular 8+, NGXS 3.6.2+\n        "),l.Ub(),l.vc(36,"\n    "),l.Ub(),l.vc(37,"\n\n    "),l.Vb(38,"span"),l.vc(39,"\ud83c\udfc0 "),l.Vb(40,"a",9),l.vc(41,"CountState"),l.Ub(),l.Ub(),l.vc(42,"\n    "),l.Vb(43,"span"),l.vc(44,"\ud83e\udded "),l.Vb(45,"a",9),l.vc(46,"TodoState"),l.Ub(),l.Ub(),l.vc(47,"\n    "),l.Vb(48,"span"),l.vc(49,"\ud83d\ude0b "),l.Vb(50,"a",9),l.vc(51,"PersonState"),l.Ub(),l.Ub(),l.vc(52,"\n    "),l.Vb(53,"span"),l.vc(54,"\ud83d\udcb0 "),l.Vb(55,"a",9),l.vc(56,"AmountState"),l.Ub(),l.Ub(),l.vc(57,"\n    "),l.Vb(58,"span"),l.vc(59,"\ud83d\udccb "),l.Vb(60,"a",9),l.vc(61,"ArticleEntitiesState"),l.Ub(),l.Ub(),l.vc(62,"\n"),l.Ub(),l.vc(63,"\n\n"),l.Qb(64,"br"),l.vc(65,"\n\n"),l.Vb(66,"div",10),l.vc(67,"\n    "),l.Vb(68,"div",11),l.Qb(69,"router-outlet"),l.Ub(),l.vc(70,"\n"),l.Ub(),l.vc(71,"\n")),2&t&&(l.Eb(10),l.wc(l.hc(11,6,l.hc(12,8,e.snapshot))),l.Eb(30),l.kc("routerLink",l.lc(10,w)),l.Eb(5),l.kc("routerLink",l.lc(11,k)),l.Eb(5),l.kc("routerLink",l.lc(12,x)),l.Eb(5),l.kc("routerLink",l.lc(13,j)),l.Eb(5),l.kc("routerLink",l.lc(14,E)))},directives:[m.a,m.c],pipes:[O.f,O.b],encapsulation:2,changeDetection:0}),s),M=((a=function t(){c(this,t)}).\u0275mod=l.Nb({type:a,bootstrap:[I]}),a.\u0275inj=l.Mb({factory:function(t){return new(t||a)},providers:[],imports:[[d.a,f.e,S,p.b,f.k,g.c.forRoot([],{developmentMode:!1,executionStrategy:g.d}),b.a.forRoot(),h.forRoot([y.b,y.a])]]}),a);Object(l.U)(),d.d().bootstrapModule(M).catch((function(t){return console.error(t)}))},"BS/u":function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="BS/u"},BbUs:function(n,r,o){"use strict";o.d(r,"a",(function(){return w})),o.d(r,"b",(function(){return V})),o.d(r,"c",(function(){return Z})),o.d(r,"d",(function(){return L}));var i=o("fXoL"),a=o("AcyG"),f=o("NYOz"),p=o("ofXK"),v=o("CIZ5"),h=o("l5mm"),y=o("xgIS"),b=o("vkgz"),g=o("2mhZ"),m=o("rNfh"),S=new i.s("NGXS_DATA_STORAGE_CONTAINER_TOKEN"),O=function(){function t(){c(this,t),this.providers=new Set,this.keys=new Map}return u(t,[{key:"getProvidedKeys",value:function(){return Array.from(this.keys.keys())}}]),t}(),w={provide:S,useFactory:function(){return new O}},k=new i.s("NGXS_DATA_STORAGE_DECODE_TYPE_TOKEN");function x(t){return-1!==t.ttl&&!isNaN(t.ttl)&&t.ttl>0}function j(t){return Date.now()>=t.getTime()}function E(t){return"".concat(t.prefixKey).concat(t.path)}function I(t,e){var n,r,o,i=e.provider,a={key:t,expiry:e.expiry.toISOString(),timestamp:new Date(Date.now()).toISOString()},u=i.stateInstance;null===(n=null==u?void 0:u.expired$)||void 0===n||n.next(a),(null==u?void 0:u.ngxsDataAfterExpired)&&(g.c.ngZone?null===(r=g.c.ngZone)||void 0===r||r.run((function(){var t;return null===(t=null==u?void 0:u.ngxsDataAfterExpired)||void 0===t?void 0:t.call(u,a,i)})):null===(o=null==u?void 0:u.ngxsDataAfterExpired)||void 0===o||o.call(u,a,i))}var M=function(t){s(n,t);var e=l(n);function n(t){return c(this,n),e.call(this,"".concat(t,". \nIncorrect structure for deserialization!!! Your structure should be like this: \n").concat(JSON.stringify({lastChanged:"2020-01-01T12:00:00.000Z",data:"{}",version:1},null,4)))}return n}(d(Error));function A(t){try{return JSON.parse(t)}catch(e){throw new M(e.message)}}function N(t){var e,n,r=t.provider,o=t.map;null===(e=o.get(r))||void 0===e||e.subscription.unsubscribe();var i=function(){var e=new Date(Date.now()).toISOString(),n=Object(h.a)(r.ttlDelay).subscribe((function(){return function(t,e,n){var r=e.provider,o=e.expiry,i=e.map,a=e.engine,u=E(r),c=a.getItem(u);if(c){if(j(o)){var s=new Date(Date.now()).toISOString();!function(t,e,n){var r=n.provider,o=n.engine;switch(r.ttlExpiredStrategy){case 0:o.removeItem(t);break;case 1:var i=A(e);i.data=null,o.setItem(t,JSON.stringify(i))}}(u,c,e),I(u,e),n.unsubscribe(),i.set(r,{subscription:n,startListen:t,endListen:s})}}else n.unsubscribe()}(e,t,n)}));o.set(r,{subscription:n,startListen:e,endListen:null})};g.c.ngZone?null===(n=g.c.ngZone)||void 0===n||n.runOutsideAngular((function(){return i()})):i()}var T=function(t){s(n,t);var e=l(n);function n(){return c(this,n),e.call(this,"missing key 'data' or it's value not serializable.")}return n}(d(Error)),_=function(t){s(n,t);var e=l(n);function n(t){return c(this,n),e.call(this,"lastChanged key not found in object ".concat(t,"."))}return n}(d(Error)),D=function(t){s(n,t);var e=l(n);function n(t){return c(this,n),e.call(this,"It's not possible to determine version (".concat(t,"), since it must be a integer type and must equal or more than 1."))}return n}(d(Error));function P(t,e){var n=Object(f.c)(t)?t:null;return"base64"===e.decode?btoa(JSON.stringify(n)):n}var C=function(t){s(n,t);var e=l(n);function n(t){return c(this,n),e.call(this,"Not found storage engine from `existingEngine` or not found instance after injecting by `useClass`. \nMetadata { key: '".concat(t,"' }"))}return n}(d(Error)),R=function(t){s(n,t);var e=l(n);function n(){return c(this,n),e.call(this,"StorageEngine instance should be implemented by DataStorageEngine interface")}return n}(d(Error));function B(t,e){var n=t.existingEngine||e.get(t.useClass,null);if(!n)throw new C(E(t));if(!("getItem"in n))throw new R;return n}function U(t,e){console.warn("Error occurred while serializing value from metadata { key: '".concat(t,"' }. \nError serialize: ").concat(e))}var z=function(){var n=function(){function n(t,e){c(this,n),this._platformId=t,n.injector=e,this.listenWindowEvents()}return u(n,[{key:"handle",value:function(t,e,n){var r=this;if(this.skipStorageInterceptions)return n(t,e);var o=function(t){var e=Object(a.i)(t);return e(a.a)||e(a.h)}(e);return n(t=this.pullStateFromStorage(t,{action:e,init:o}),e).pipe(Object(b.a)((function(n){return r.pushStateToStorage(t,n,{action:e,init:o})})))}},{key:"serialize",value:function(t,e){var r={version:e.version,lastChanged:(new Date).toISOString(),data:P(t,e)};if(x(e)){var o=B(e,n.injector),i=new Date(Date.now()+parseInt(e.ttl));N({provider:e,expiry:i,map:this.ttlListeners,engine:o}),r.expiry=i.toISOString()}return JSON.stringify(r)}},{key:"deserialize",value:function(t,e,n){return function(t,e,n){if(Object(m.b)(t)){if(function(t){return!("lastChanged"in t)||!t.lastChanged}(t))throw new _(e);if(function(t){var e=parseFloat(t.version);return isNaN(e)||e<1||parseInt(t.version)!==e}(t))throw new D(t.version);if(function(t){return!("data"in t)}(t))throw new T;return"base64"===n.decode?JSON.parse(atob(t.data)):t.data}throw new M('"'.concat(e,'" not an object'))}(t,e,n)}},{key:"destroyOldTasks",value:function(){var t;null===(t=n.eventsSubscriptions)||void 0===t||t.unsubscribe(),n.ttlListeners=new WeakMap}},{key:"pushStateToStorage",value:function(r,o,i){var u,c=e(this.entries);try{for(c.s();!(u=c.n()).done;){var s=t(u.value,1)[0],l=Object(a.k)(r,s.path),f=Object(a.k)(o,s.path),d=s.fireInit&&i.init;if(l!==f||d){var p=B(s,n.injector),v=E(s);try{var h=this.serialize(f,s);p.setItem(v,h),this.keys.set(v)}catch(y){U(v,y.message)}}}}catch(b){c.e(b)}finally{c.f()}}},{key:"pullStateFromStorage",value:function(n,r){var o=r.action,i=r.init;if(this.canBeSyncStoreWithStorage(o,i)){var a,u=e(this.entries);try{for(u.s();!(a=u.n()).done;){var c=t(a.value,1)[0];n=this.deserializeByProvider(n,o,c)}}catch(s){u.e(s)}finally{u.f()}}return n}},{key:"canBeSyncStoreWithStorage",value:function(t,e){return this.size>0&&(e||t.type===v.d)}},{key:"deserializeByProvider",value:function(t,e,r){var o=E(r),i=B(r,n.injector),a=i.getItem(o);return Object(f.c)(a)&&(t=this.deserializeHandler(t,{key:o,engine:i,provider:r,value:a,action:e})),t}},{key:"deserializeHandler",value:function(t,e){var r=e.key,o=e.provider,i=e.value;try{var u=A(i),c=this.deserialize(u,i,o),s=function(t){var e=t.data,n=t.provider,r=Object(f.c)(e)||n.nullable,o={canBeOverrideFromStorage:r,versionMismatch:!1,expired:!1,expiry:null};return o=function(t,e,n){var r=n.provider;if(t&&n.meta.version!==r.version){var o=r.stateInstance,i=!(r.skipMigrate||!(null==o?void 0:o.ngxsDataStorageMigrate)&&!r.migrate);e=Object.assign(Object.assign({},e),i?{versionMismatch:!0}:{canBeOverrideFromStorage:!1,versionMismatch:!0})}return e}(r,o=function(t,e,n){var r=n.meta;if(t&&x(n.provider)){var o=new Date(r.expiry);!isNaN(o.getTime())&&(e=j(o)?{canBeOverrideFromStorage:!1,expired:!0,expiry:o,versionMismatch:!1}:{canBeOverrideFromStorage:t,expired:!1,expiry:o,versionMismatch:!1})}return e}(r,o,t),t)}({provider:o,meta:u,data:c});if(s.canBeOverrideFromStorage){var l=function(t){var e,n=t.states,r=t.provider,o=t.data,i=t.info;if(!r.rehydrate)return{states:n,rehydrateIn:!1};var u=Object(a.k)(n,r.path);if(i.versionMismatch){var c=r.stateInstance,s=r.migrate||(null===(e=c.ngxsDataStorageMigrate)||void 0===e?void 0:e.bind(r.stateInstance)),l=null==s?void 0:s(u,o);return{states:n=Object(a.l)(n,r.path,l),rehydrateIn:!0}}return JSON.stringify(u)!==JSON.stringify(o)?{states:n=Object(a.l)(n,r.path,o),rehydrateIn:!0}:{states:n,rehydrateIn:!1}}({states:t,provider:o,data:c,info:s});this.keys.set(r),t=l.states,n.checkIsStorageEvent(e,l,c),n.checkExpiredInit({info:s,rehydrateInfo:l,options:e,map:this.ttlListeners})}else this.removeKeyWhenPullInvalid(s,e)}catch(d){!function(t,e,n){console.warn("Error occurred while deserializing value from metadata { key: '".concat(t,"', value: '").concat(e,"' }. \nError deserialize: ").concat(n))}(r,i,d.message)}return t}},{key:"removeKeyWhenPullInvalid",value:function(t,e){var n=e.key,r=e.engine,o=e.provider;t.expired&&I(n,{provider:o,engine:r,map:this.ttlListeners,expiry:t.expiry}),r.removeItem(n),this.keys.delete(n)}},{key:"listenWindowEvents",value:function(){var t=this;Object(p.r)(this._platformId)||(this.destroyOldTasks(),n.eventsSubscriptions=Object(y.a)(window,"storage").subscribe((function(e){e.key&&t.keys.has(e.key)&&t.store.dispatch({type:v.d})})))}},{key:"store",get:function(){return n.injector.get(a.g,null)}},{key:"size",get:function(){return this.providers.size}},{key:"ttlListeners",get:function(){return n.ttlListeners}},{key:"container",get:function(){return n.injector.get(S)}},{key:"providers",get:function(){return this.container.providers}},{key:"keys",get:function(){return this.container.keys}},{key:"entries",get:function(){return this.providers.entries()}},{key:"skipStorageInterceptions",get:function(){return 0===this.size||Object(p.r)(this._platformId)}}],[{key:"checkIsStorageEvent",value:function(t,e,n){var r,o=t.action,i=t.provider,a=t.key,u=t.value;if(e.rehydrateIn&&function(t){return t.type===v.d}(o)){var c=i.stateInstance;(null==c?void 0:c.ngxsDataAfterStorageEvent)&&(null===(r=null==c?void 0:c.ngxsDataAfterStorageEvent)||void 0===r||r.call(c,{key:a,value:u,data:n,provider:i}))}}},{key:"checkExpiredInit",value:function(t){var e=t.info,n=t.rehydrateInfo,r=t.options,o=t.map,i=r.provider,a=r.engine;n.rehydrateIn&&e.expiry&&N({provider:i,expiry:e.expiry,map:o,engine:a})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(i.Zb(i.D),i.Zb(i.t,2))},n.\u0275prov=i.Lb({token:n,factory:n.\u0275fac}),n.injector=null,n.eventsSubscriptions=null,n.ttlListeners=new WeakMap,n}(),V={provide:a.b,useClass:z,multi:!0},G=new i.s("NGXS_DATA_STORAGE_PREFIX_TOKEN");function L(t){var e;try{var n=null===(e=z.injector)||void 0===e?void 0:e.get(S);t.forEach((function(t){null==n||n.providers.add(t)}))}catch(r){throw new Error("You forgot provide NGXS_DATA_STORAGE_CONTAINER or NGXS_DATA_STORAGE_EXTENSION!!! Example: \n\n@NgModule({\n imports: [ \n   NgxsDataPluginModule.forRoot([NGXS_DATA_STORAGE_PLUGIN]) \n ]\n})\nexport class AppModule {} \n\n")}}function Z(t,e,n){var r,o,i,a,u=null!==(o=null===(r=z.injector)||void 0===r?void 0:r.get(G,"@ngxs.store."))&&void 0!==o?o:"@ngxs.store.",c=null!==(a=null===(i=z.injector)||void 0===i?void 0:i.get(k,"none"))&&void 0!==a?a:"none";return n?(Array.isArray(n)?n:[n]).map((function(n){return function(t){var e=t.option,n=t.decodeType,r=t.prefix,o=t.stateInstance;return function(t,e){return"path"in e||(e=Object.assign(Object.assign({},e),{get path(){return t.stateMeta&&t.stateMeta.path}})),e}(t.meta,Object.assign(Object.assign({},e),{ttl:Object(f.c)(e.ttl)?e.ttl:-1,version:Object(f.c)(e.version)?e.version:1,decode:Object(f.c)(e.decode)?e.decode:n,prefixKey:Object(f.c)(e.prefixKey)?e.prefixKey:r,nullable:!!Object(f.c)(e.nullable)&&e.nullable,fireInit:!Object(f.c)(e.fireInit)||e.fireInit,rehydrate:!Object(f.c)(e.rehydrate)||e.rehydrate,ttlDelay:Object(f.c)(e.ttlDelay)?e.ttlDelay:6e4,ttlExpiredStrategy:Object(f.c)(e.ttlExpiredStrategy)?e.ttlExpiredStrategy:0,stateInstance:Object(f.c)(e.stateInstance)?e.stateInstance:o,skipMigrate:!!Object(f.c)(e.skipMigrate)&&e.skipMigrate}))}({option:n,prefix:u,decodeType:c,meta:t,stateInstance:e})})):function(t){var e=t.meta;return[{get path(){return e.stateMeta&&e.stateMeta.path},existingEngine:localStorage,ttl:-1,version:1,decode:t.decodeType,prefixKey:t.prefix,nullable:!1,fireInit:!0,rehydrate:!0,ttlDelay:6e4,ttlExpiredStrategy:0,stateInstance:t.stateInstance,skipMigrate:!1}]}({meta:t,prefix:u,decodeType:c,stateInstance:e})}},CIZ5:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return i}));var r="NGXS_DATA_STORAGE_EVENT_TYPE",o="NGXS_DATA_META",i="NGXS_META",a="NGXS_ARGUMENT_REGISTRY_META",u="NGXS_COMPUTED_OPTION"}},[[0,1,8]]])}();