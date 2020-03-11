function _defineProperty(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],r=!0,o=!1,u=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done)&&(e.push(l.value),!n||e.length!==n);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return e}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _construct(t,n,e){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&_setPrototypeOf(o,e.prototype),o}).apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,n,e){t.exports=e("Ea2l")},"5Q4k":function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return u}));var r=e("sXi/"),o=e("zqRF"),u=function(){return new r.a},l={provide:o.a,useFactory:u}},Ea2l:function(t,n,e){"use strict";e.r(n);var r=e("8Y7J"),o=function t(){_classCallCheck(this,t)},u=e("e1JD"),l=function(){function t(n){_classCallCheck(this,t),this.store=n,this.snapshot=this.store.select((function(t){return t}))}return _createClass(t,[{key:"ngOnInit",value:function(){console.log("[isDevMode]",Object(r.V)())}}]),t}(),i=e("pMnS"),a=e("SVse"),c=e("iInd"),s=r.pb({encapsulation:2,styles:[],data:{}});function f(t){return r.Ib(2,[(t()(),r.rb(0,0,null,null,8,"div",[["class","panel"]],null,null,null,null,null)),(t()(),r.rb(1,0,null,null,0,"img",[["class","logo"],["src","https://habrastorage.org/webt/k7/ih/pc/k7ihpcg6w-jz-rzksmiyuip5_so.png"]],null,null,null,null,null)),(t()(),r.rb(2,0,null,null,6,"div",[["class","panel-content"]],null,null,null,null,null)),(t()(),r.rb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),r.Gb(-1,null,["Store:"])),(t()(),r.rb(5,0,null,null,3,"pre",[],null,null,null,null,null)),(t()(),r.Gb(6,null,["",""])),r.Db(131072,a.b,[r.i]),r.Db(0,a.f,[]),(t()(),r.rb(9,0,null,null,17,"div",[["class","menu"]],null,null,null,null,null)),(t()(),r.Gb(-1,null,[" Examples: "])),(t()(),r.rb(11,0,null,null,3,"span",[],null,null,null,null,null)),(t()(),r.Gb(-1,null,["\ud83d\ude80 "])),(t()(),r.rb(13,0,null,null,1,"a",[["class","link"],["href","https://stackblitz.io/github/ngxs-labs/data"],["target","_blank"]],null,null,null,null,null)),(t()(),r.Gb(-1,null,["Stackblitz"])),(t()(),r.rb(15,0,null,null,5,"span",[],null,null,null,null,null)),(t()(),r.Gb(-1,null,["\ud83c\udfc0 "])),(t()(),r.rb(17,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,e){var o=!0;return"click"===n&&(o=!1!==r.Bb(t,18).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),r.qb(18,671744,null,0,c.l,[c.k,c.a,a.i],{routerLink:[0,"routerLink"]},null),r.Cb(19,1),(t()(),r.Gb(-1,null,["CountState"])),(t()(),r.rb(21,0,null,null,5,"span",[],null,null,null,null,null)),(t()(),r.Gb(-1,null,["\ud83e\udded "])),(t()(),r.rb(23,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,e){var o=!0;return"click"===n&&(o=!1!==r.Bb(t,24).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),r.qb(24,671744,null,0,c.l,[c.k,c.a,a.i],{routerLink:[0,"routerLink"]},null),r.Cb(25,1),(t()(),r.Gb(-1,null,["TodoState"])),(t()(),r.rb(27,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),r.rb(28,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(t()(),r.rb(29,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(t()(),r.rb(30,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r.qb(31,212992,null,0,c.n,[c.b,r.N,r.k,[8,null],r.i],null,null)],(function(t,n){var e=t(n,19,0,"count");t(n,18,0,e);var r=t(n,25,0,"todo");t(n,24,0,r),t(n,31,0)}),(function(t,n){var e=n.component;t(n,6,0,r.Hb(n,6,0,r.Bb(n,8).transform(r.Hb(n,6,0,r.Bb(n,7).transform(e.snapshot))))),t(n,17,0,r.Bb(n,18).target,r.Bb(n,18).href),t(n,23,0,r.Bb(n,24).target,r.Bb(n,24).href)}))}var b=r.nb("app-root",l,(function(t){return r.Ib(0,[(t()(),r.rb(0,0,null,null,1,"app-root",[],null,null,null,f,s)),r.qb(1,114688,null,0,l,[u.h],null,null)],(function(t,n){t(n,1,0)}),null)}),{},{},[]),h=e("cUpR"),p=e("s7LF"),d=e("Mrqg"),y=e("zqRF"),_=e("5Q4k"),A=function(){return Promise.all([e.e(1),e.e(7)]).then(e.bind(null,"cY3I")).then((function(t){return t.CountModuleNgFactory}))},v=function(){return Promise.all([e.e(1),e.e(8)]).then(e.bind(null,"xG8Z")).then((function(t){return t.TodoModuleNgFactory}))},S=function t(){_classCallCheck(this,t)},g=e("ZArt"),E=e("F7qv"),O=e("oSDt"),C=e("q6Pm"),N=e("NZHw"),m=function(){function t(n,e){_classCallCheck(this,t),this.accessor=n,this.injector=e}return _createClass(t,null,[{key:"forRoot",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{ngModule:t,providers:[N.b,N.c].concat(_toConsumableArray(n))}}}]),t}(),w=e("lLvT"),T=r.ob(o,[l],(function(t){return r.zb([r.Ab(512,r.k,r.Z,[[8,[i.a,b]],[3,r.k],r.w]),r.Ab(5120,r.t,r.lb,[[3,r.t]]),r.Ab(4608,a.l,a.k,[r.t,[2,a.r]]),r.Ab(5120,r.hb,r.mb,[r.y]),r.Ab(5120,r.c,r.ib,[]),r.Ab(5120,r.r,r.jb,[]),r.Ab(5120,r.s,r.kb,[]),r.Ab(4608,h.b,h.k,[a.d]),r.Ab(6144,r.F,null,[h.b]),r.Ab(4608,h.e,h.g,[]),r.Ab(5120,h.c,(function(t,n,e,r,o,u,l,i){return[new h.i(t,n,e),new h.n(r),new h.m(o,u,l,i)]}),[a.d,r.y,r.A,a.d,a.d,h.e,r.ab,[2,h.f]]),r.Ab(4608,h.d,h.d,[h.c,r.y]),r.Ab(135680,h.l,h.l,[a.d]),r.Ab(4608,h.j,h.j,[h.d,h.l,r.c]),r.Ab(6144,r.D,null,[h.j]),r.Ab(6144,h.o,null,[h.l]),r.Ab(4608,r.L,r.L,[r.y]),r.Ab(4608,p.i,p.i,[]),r.Ab(5120,c.a,c.x,[c.k]),r.Ab(4608,c.d,c.d,[]),r.Ab(6144,c.f,null,[c.d]),r.Ab(135680,c.o,c.o,[c.k,r.v,r.j,r.q,c.f]),r.Ab(4608,c.e,c.e,[]),r.Ab(5120,c.C,c.t,[c.k,a.o,c.g]),r.Ab(5120,c.h,c.A,[c.y]),r.Ab(5120,r.b,(function(t,n){return[t,u.d.appBootstrapListenerFactory(n)]}),[c.h,d.e]),r.Ab(4608,u.a,u.a,[u.n,u.E]),r.Ab(5120,y.a,_.b,[]),r.Ab(1073742336,a.c,a.c,[]),r.Ab(1024,r.m,h.p,[]),r.Ab(1024,r.x,(function(){return[c.s()]}),[]),r.Ab(512,c.y,c.y,[r.q]),r.Ab(1024,r.d,(function(t,n){return[h.q(t),c.z(n)]}),[[2,r.x],c.y]),r.Ab(512,r.e,r.e,[[2,r.d]]),r.Ab(131584,r.g,r.g,[r.y,r.ab,r.q,r.m,r.k,r.e]),r.Ab(1073742336,r.f,r.f,[r.g]),r.Ab(1073742336,h.a,h.a,[[3,h.a]]),r.Ab(1073742336,p.h,p.h,[]),r.Ab(1073742336,p.c,p.c,[]),r.Ab(1024,c.r,c.v,[[3,c.k]]),r.Ab(512,c.q,c.c,[]),r.Ab(512,c.b,c.b,[]),r.Ab(256,c.g,{useHash:!0},[]),r.Ab(1024,a.i,c.u,[a.n,[2,a.a],c.g]),r.Ab(512,a.h,a.h,[a.i,a.n]),r.Ab(512,r.j,r.j,[]),r.Ab(512,r.v,r.I,[r.j,[2,r.J]]),r.Ab(1024,c.i,(function(){return[[{path:"",redirectTo:"count",pathMatch:"full"},{path:"count",loadChildren:A},{path:"todo",loadChildren:v}]]}),[]),r.Ab(1024,c.k,c.w,[r.g,c.q,c.b,a.h,r.q,r.v,r.j,c.i,c.g,[2,c.p],[2,c.j]]),r.Ab(1073742336,c.m,c.m,[[2,c.r],[2,c.k]]),r.Ab(1073742336,S,S,[]),r.Ab(256,u.d.ROOT_OPTIONS,{developmentMode:!1},[]),r.Ab(1024,u.v,u.d.ngxsConfigFactory,[u.d.ROOT_OPTIONS]),r.Ab(512,u.n,u.n,[]),r.Ab(512,u.z,u.z,[]),r.Ab(512,u.f,u.f,[]),r.Ab(256,g.d,void 0,[]),r.Ab(1024,g.a,g.e,[g.d]),r.Ab(1024,u.c,(function(t,n,e,r){return[new g.b(t,n),new E.a(e,r)]}),[g.a,r.q,r.A,[4,r.q]]),r.Ab(512,u.D,u.D,[[3,u.D],[2,u.c]]),r.Ab(512,u.w,u.q,[r.y,r.A]),r.Ab(512,u.E,u.E,[u.w]),r.Ab(512,u.A,u.A,[r.m,u.n,u.z,u.D,u.f,u.E]),r.Ab(256,u.u,r.V,[]),r.Ab(256,u.t,d.f,[]),r.Ab(512,u.G,u.G,[u.u,u.t]),r.Ab(512,u.F,u.F,[u.G,u.v]),r.Ab(512,u.C,u.C,[u.f,u.A,u.v,u.F]),r.Ab(512,u.B,u.B,[u.C]),r.Ab(1024,d.a,u.d.getInitialState,[]),r.Ab(512,u.y,u.y,[r.q,u.v,[3,u.y],u.n,u.z,u.B,[2,d.a]]),r.Ab(512,u.h,u.h,[u.f,u.C,u.v,u.E,u.y,[2,d.a]]),r.Ab(512,u.H,u.H,[u.h,u.v]),r.Ab(256,u.r,[],[]),r.Ab(512,d.e,d.e,[]),r.Ab(512,u.o,u.o,[u.C,u.B,d.e]),r.Ab(1073742336,u.x,u.x,[u.y,u.C,u.h,u.H,[2,u.r],u.o]),r.Ab(1073742336,g.c,g.c,[]),r.Ab(512,O.a,O.a,[]),r.Ab(2048,d.d,null,[u.y]),r.Ab(2048,d.c,null,[u.B]),r.Ab(512,C.a,C.a,[r.q,d.d,d.c]),r.Ab(1073742336,m,m,[[4,O.a],[4,C.a]]),r.Ab(1073742336,w.a,w.a,[]),r.Ab(1073742336,o,o,[]),r.Ab(256,r.Y,!0,[])])}));Object(r.R)(),h.h().bootstrapModuleFactory(T).catch((function(t){return console.error(t)}))},F7qv:function(t,n,e){"use strict";var r=e("SVse"),o=e("NZHw"),u=e("UFJs"),l=e("e1JD"),i=e("xgIS"),a=e("vkgz"),c=e("zqRF"),s=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"missing key 'data' or it's value not serializable."))}return _inherits(n,_wrapNativeSuper(Error)),n}(),f=function(t){function n(t){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"lastChanged key not found in object ".concat(t,".")))}return _inherits(n,_wrapNativeSuper(Error)),n}(),b=function(t){function n(t){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"".concat(t,". \nIncorrect structure for deserialization!!! Your structure should be like this: \n").concat(JSON.stringify({lastChanged:"2020-01-01T12:00:00.000Z",data:"{}",version:1},null,4))))}return _inherits(n,_wrapNativeSuper(Error)),n}(),h=function(t){function n(t){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"It's not possible to determine version (".concat(t,"), since it must be a integer type and must equal or more than 1.")))}return _inherits(n,_wrapNativeSuper(Error)),n}();function p(t){return"".concat(t.prefixKey).concat(t.path)}var d=function(t){function n(t){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"".concat(u.a.NGXS_PERSISTENCE_ENGINE," \nMetadata { key: '").concat(t,"' }")))}return _inherits(n,_wrapNativeSuper(Error)),n}(),y=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"StorageEngine instance should be implemented by DataStorageEngine interface"))}return _inherits(n,_wrapNativeSuper(Error)),n}();function _(t,n){var e=t.existingEngine||n.get(t.useClass,null);if(!e)throw new d(p(t));if(!("getItem"in e))throw new y;return e}function A(t,n){console.warn("".concat(u.a.NGXS_PERSISTENCE_SERIALIZE," from metadata { key: '").concat(t,"' }. \nError serialize: ").concat(n))}e.d(n,"a",(function(){return S}));var v,S=((v=function(){function t(n,e){_classCallCheck(this,t),this._platformId=n,t.injector=e,this.listenWindowEvents()}return _createClass(t,[{key:"handle",value:function(t,n,e){var r=this;if(this.skipStorageInterceptions)return e(t,n);var o=function(t){var n=Object(l.j)(t);return n(l.b)||n(l.i)}(n);return e(t=this.firstSynchronizationWithStorage(t,n,o),n).pipe(Object(a.a)((function(n){return r.nextSynchronizationWithStorage(t,n,o)})))}},{key:"serialize",value:function(t,n){return JSON.stringify({lastChanged:(new Date).toISOString(),version:n.version,data:Object(o.m)(t)?t:null})}},{key:"deserialize",value:function(t){return function(t,n){if(Object(o.n)(t)){if(function(t){return!("lastChanged"in t&&t.lastChanged)}(t))throw new f(n);if(function(t){var n=parseFloat(t.version);return isNaN(n)||n<1||parseInt(t.version)!==n}(t))throw new h(t.version);if(function(t){return!("data"in t)}(t))throw new s;return t.data}throw new b('"'.concat(n,'" not an object'))}(function(t){try{return JSON.parse(t)}catch(n){throw new b(n.message)}}(t),t)}},{key:"nextSynchronizationWithStorage",value:function(n,e,r){var o=!0,u=!1,i=void 0;try{for(var a,c=this.entries[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var s=_slicedToArray(a.value,1)[0],f=Object(l.l)(n,s.path),b=Object(l.l)(e,s.path);if(f!==b||r){var h=_(s,t.injector),d=p(s);try{var y=this.serialize(b,s);h.setItem(d,y),this.keys.set(d)}catch(v){A(d,v.message)}}}}catch(S){u=!0,i=S}finally{try{o||null==c.return||c.return()}finally{if(u)throw i}}}},{key:"firstSynchronizationWithStorage",value:function(t,n,e){if(this.canBeSyncStoreWithStorage(n,e)){var r=!0,o=!1,u=void 0;try{for(var l,i=this.entries[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var a=_slicedToArray(l.value,1)[0];t=this.whenValueExistDeserializeIt(t,a)}}catch(c){o=!0,u=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}}return t}},{key:"canBeSyncStoreWithStorage",value:function(t,n){return this.size>0&&(n||t.type===u.c)}},{key:"whenValueExistDeserializeIt",value:function(n,e){var r=p(e),i=_(e,t.injector),a=i.getItem(r);if(Object(o.m)(a))try{var c=this.deserialize(a);Object(o.m)(c)||e.nullable?(this.keys.set(r),n=Object(l.m)(n,e.path,c)):(i.removeItem(r),this.keys.delete(r))}catch(s){!function(t,n,e){console.warn("".concat(u.a.NGXS_PERSISTENCE_DESERIALIZE," from metadata { key: '").concat(t,"', value: '").concat(n,"' }. \nError deserialize: ").concat(e))}(r,a,s.message)}return n}},{key:"listenWindowEvents",value:function(){var n,e=this;Object(r.p)(this._platformId)||(null===(n=t.eventsSubscriptions)||void 0===n||n.unsubscribe(),t.eventsSubscriptions=Object(i.a)(window,"storage").subscribe((function(t){t.key&&e.keys.has(t.key)&&e.store.dispatch({type:u.c})})))}},{key:"store",get:function(){return t.injector.get(l.h,null)}},{key:"size",get:function(){return this.providers.size}},{key:"container",get:function(){return t.injector.get(c.a)}},{key:"providers",get:function(){return this.container.providers}},{key:"keys",get:function(){return this.container.keys}},{key:"entries",get:function(){return this.providers.entries()}},{key:"skipStorageInterceptions",get:function(){return 0===this.size||Object(r.p)(this._platformId)}}]),t}()).injector=null,v.eventsSubscriptions=null,v)},NZHw:function(t,n,e){"use strict";function r(t){return"undefined"!==t&&null!=t}function o(t){return"object"==typeof t&&!Array.isArray(t)&&null!==t}function u(t){return t.NGXS_OPTIONS_META||{}}var l=e("UFJs"),i=function(t){function n(t){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,"".concat(l.a.NGXS_DATA_CHILDREN_CONVERT,". Cannot convert ").concat(t&&t.constructor?t.constructor.name:t," to PlainObject")))}return _inherits(n,_wrapNativeSuper(Error)),n}();function a(t){var n,e=u(t),r=e.children||[],c=(n=e.defaults,JSON.parse(JSON.stringify(void 0===n?{}:n)));if(r.length){if(o(c))return function(t,n){return n.reduce((function(t,n){var e=u(n);if(!e.name)throw new Error(l.a.NGXS_DATA_STATE_NAME_NOT_FOUND);return t[e.name.toString()]=a(n),t}),t)}(c,r);throw new i(c)}return c}function c(t,n,e){return"@".concat(t,".").concat(n,"(").concat(e.join(", "),")")}function s(t){return(t+"").replace(/[/][/].*$/gm,"").replace(/\s+/g,"").replace(/[/][*][^/*]*[*][/]/g,"").split("){",1)[0].replace(/^[^(]*[(]/,"").replace(/=[^,]+/g,"").split(",").filter(Boolean)}function f(t){if(!t.hasOwnProperty(l.d)){var n={name:null,actions:{},defaults:{},path:null,makeRootSelector:function(t){return t.getStateGetter(n.name)},children:[]};Object.defineProperty(t,l.d,{value:n})}return function(t){return t[l.d]}(t)}var b=e("Oa3G"),h=function t(n){var e=n instanceof Date;if("object"!=typeof n||null===n||e)return n;Object.freeze(n);var r="function"==typeof n,o=Object.prototype.hasOwnProperty;return Object.getOwnPropertyNames(n).forEach((function(e){!o.call(n,e)||r&&("caller"===e||"callee"===e||"arguments"===e)||null===n[e]||"object"!=typeof n[e]&&"function"!=typeof n[e]||Object.isFrozen(n[e])||t(n[e])})),n},p=e("q6Pm"),d=e("oSDt");function y(t){return{enumerable:!0,configurable:!0,get:function(){var n=Object(b.a)(t),e=d.a.ensureMappedState(n.stateMeta);return d.a.createStateContext(e)}}}function _(t,n){(function(t){var n,e,r=null!=(n=Object(b.a)(t))?n:null;return(!r||(null===(e=r)||void 0===e?void 0:e.stateClass)!==t)&&function(t){Object.defineProperty(t,l.b,{writable:!0,configurable:!0,enumerable:!0,value:{stateMeta:null,operations:{},stateClass:t}})}(t),Object(b.a)(t)}(t)).stateMeta=n}var A=e("8Y7J"),v=e("lJxs"),S=e("UXun");function g(t){var n=Object(b.a)(t),e=n.stateMeta&&n.stateMeta.name||null;if(e){var r,o="__".concat(e,"__selector");Object.defineProperties(t.prototype,(_defineProperty(r={},o,{writable:!0,enumerable:!1,configurable:!0}),_defineProperty(r,"state$",{enumerable:!0,configurable:!0,get:function(){if(this[o])return this[o];if(!p.a.store)throw new Error(l.a.NGXS_DATA_MODULE_EXCEPTION);return this[o]=p.a.store.select(t).pipe(Object(v.a)((function(t){return Object(A.V)()?h(t):t})),Object(S.a)({refCount:!0,bufferSize:1})),this[o]}}),r))}}function E(t,n){if(t.hasOwnProperty("prototype"))throw new Error(l.a.NGXS_DATA_STATIC_ACTION);if(void 0===n)throw new Error(l.a.NGXS_DATA_ACTION)}function O(){if(!p.a.ngZone)throw new Error(l.a.NGXS_DATA_MODULE_EXCEPTION)}var C=e("cp0P");function N(t,n){return Object(C.a)([t,n]).pipe(Object(v.a)((function(t){return t.pop()})))}e.d(n,"m",(function(){return r})),e.d(n,"n",(function(){return o})),e.d(n,"e",(function(){return a})),e.d(n,"d",(function(){return c})),e.d(n,"a",(function(){return s})),e.d(n,"k",(function(){return f})),e.d(n,"o",(function(){return h})),e.d(n,"l",(function(){return b.a})),e.d(n,"c",(function(){return p.a})),e.d(n,"b",(function(){return d.a})),e.d(n,"h",(function(){return y})),e.d(n,"i",(function(){return _})),e.d(n,"j",(function(){return g})),e.d(n,"p",(function(){return E})),e.d(n,"f",(function(){return O})),e.d(n,"g",(function(){return N}))},Oa3G:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("UFJs");function o(t){return t[r.b]}},"U+rF":function(t,n){function e(t){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}))}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="U+rF"},UFJs:function(t,n,e){"use strict";var r=function(t){return t.NGXS_PERSISTENCE_STATE="@Persistence should be add before decorator @State and @StateRepository",t.NGXS_DATA_STATE="@StateRepository should be add before decorator @State",t.NGXS_DATA_STATE_NAME_NOT_FOUND="State name not provided in class",t.NGXS_DATA_MODULE_EXCEPTION="Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!",t.NGXS_DATA_STATE_DECORATOR="You forgot add decorator @StateRepository or initialize state!\nExample: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])",t.NGXS_DATA_STATIC_ACTION="Cannot support static methods with @action",t.NGXS_DATA_ACTION="@action can only decorate a method implementation",t.NGXS_DATA_ASYNC_ACTION_RETURN_TYPE="WARNING: If you use asynchronous actions `@debounce(300) @action()` the return result type should only void instead:",t.NGXS_PERSISTENCE_CONTAINER="You forgot provide NGXS_DATA_STORAGE_CONTAINER or NGXS_DATA_STORAGE_EXTENSION!!! Example: \n\n@NgModule({\n imports: [ \n   NgxsDataPluginModule.forRoot([NGXS_DATA_STORAGE_PLUGIN]) \n ]\n})\nexport class AppModule {} \n\n",t.NGXS_PERSISTENCE_ENGINE="Not found storage engine from `existingEngine` or not found instance after injecting by `useClass`.",t.NGXS_PERSISTENCE_SERIALIZE="Error occurred while serializing value",t.NGXS_PERSISTENCE_DESERIALIZE="Error occurred while deserializing value",t.NGXS_DATA_CHILDREN_CONVERT="Child states can only be added to an object",t}({}),o={cancelUncompleted:!0};e.d(n,"c",(function(){return"NGXS_DATA_STORAGE_EVENT_TYPE"})),e.d(n,"b",(function(){return"NGXS_DATA_META"})),e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return"NGXS_META"})),e.d(n,"e",(function(){return o}))},lLvT:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function t(){_classCallCheck(this,t)}},oSDt:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e("UFJs"),o=e("Oa3G"),u=e("q6Pm"),l=function(){var t=function(){function t(){_classCallCheck(this,t),t.statesCachedMeta.clear()}return _createClass(t,null,[{key:"createStateContext",value:function(t){return u.a.context.createStateContext(t)}},{key:"ensureMappedState",value:function(n){if(!u.a.factory||!n)throw new Error(r.a.NGXS_DATA_MODULE_EXCEPTION);return(n.name?t.statesCachedMeta.get(n.name):null)||t.ensureMeta(n)}},{key:"getRepositoryByInstance",value:function(t){var n=(t||{}).constructor,e=Object(o.a)(n)||null;if(!e)throw new Error(r.a.NGXS_DATA_STATE_DECORATOR);return e}},{key:"createPayload",value:function(t,n){var e={},r=Array.from(t);return n.argumentsNames.forEach((function(t,n){e[t]=r[n]})),e}},{key:"ensureMeta",value:function(n){var e=n.name?u.a.factory.states.find((function(t){return t.name===n.name})):null;return e&&n.name&&t.statesCachedMeta.set(n.name,e),e}}]),t}();return t.statesCachedMeta=new Map,t}()},q6Pm:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("8Y7J"),o=e("e1JD"),u=function(){var t=function t(n,e,u){_classCallCheck(this,t),t.store=n.get(o.h),t.ngZone=n.get(r.y),t.factory=e,t.context=u};return t.store=null,t.context=null,t.factory=null,t.ngZone=null,t}()},"sXi/":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(){function t(){_classCallCheck(this,t),this.providers=new Set,this.keys=new Map}return _createClass(t,[{key:"getProvidedKeys",value:function(){return Array.from(this.keys.keys())}}]),t}()},zqRF:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=new(e("8Y7J").p)("NGXS_DATA_STORAGE_CONTAINER_TOKEN")}},[[0,0,6]]]);