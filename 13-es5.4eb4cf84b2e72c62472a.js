!function(){function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"BX/J":function(e,i,a){"use strict";a.r(i),a.d(i,"TodoModule",(function(){return lt}));var r,s,u=a("ofXK"),l=a("rDax"),f=a("+rOU"),h=a("fXoL"),d=a("FKr1"),b=a("bTqV"),p=a("XNiG"),m=a("IzEk"),v=a("1G5W"),_=a("R0Ic"),k=a("u47x"),y=a("nLfN"),g=a("itXk"),O=a("GyhO"),j=a("HDdC"),w=a("7o/Q"),x=function(){function t(e){o(this,t),this.total=e}return c(t,[{key:"call",value:function(t,e){return e.subscribe(new B(t,this.total))}}]),t}(),B=function(e){t(a,e);var i=n(a);function a(t,e){var n;return o(this,a),(n=i.call(this,t)).total=e,n.count=0,n}return c(a,[{key:"_next",value:function(t){++this.count>this.total&&this.destination.next(t)}}]),a}(w.a),S=a("Kj3r"),A=a("lJxs"),R=a("JX91"),E=a("8LU1"),P=new Set,C=((s=function(){function t(e){o(this,t),this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):T}return c(t,[{key:"matchMedia",value:function(t){return this._platform.WEBKIT&&function(t){if(!P.has(t))try{r||((r=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(r)),r.sheet&&(r.sheet.insertRule("@media ".concat(t," {.fx-query-test{ }}"),0),P.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}]),t}()).\u0275fac=function(t){return new(t||s)(h.Zb(y.a))},s.\u0275prov=Object(h.Lb)({factory:function(){return new s(Object(h.Zb)(y.a))},token:s,providedIn:"root"}),s);function T(t){return{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}var D,M=((D=function(){function t(e,n){o(this,t),this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new p.a}return c(t,[{key:"ngOnDestroy",value:function(){this._destroySubject.next(),this._destroySubject.complete()}},{key:"isMatched",value:function(t){var e=this;return Z(Object(E.b)(t)).some((function(t){return e._registerQuery(t).mql.matches}))}},{key:"observe",value:function(t){var e=this,n=Z(Object(E.b)(t)).map((function(t){return e._registerQuery(t).observable})),i=Object(g.a)(n);return(i=Object(O.a)(i.pipe(Object(m.a)(1)),i.pipe((function(t){return t.lift(new x(1))}),Object(S.a)(0)))).pipe(Object(A.a)((function(t){var e={matches:!1,breakpoints:{}};return t.forEach((function(t){e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches})),e})))}},{key:"_registerQuery",value:function(t){var e=this;if(this._queries.has(t))return this._queries.get(t);var n=this._mediaMatcher.matchMedia(t),i={observable:new j.a((function(t){var i=function(n){return e._zone.run((function(){return t.next(n)}))};return n.addListener(i),function(){n.removeListener(i)}})).pipe(Object(R.a)(n),Object(A.a)((function(e){return{query:t,matches:e.matches}})),Object(v.a)(this._destroySubject)),mql:n};return this._queries.set(t,i),i}}]),t}()).\u0275fac=function(t){return new(t||D)(h.Zb(C),h.Zb(h.B))},D.\u0275prov=Object(h.Lb)({factory:function(){return new D(Object(h.Zb)(C),Object(h.Zb)(h.B))},token:D,providedIn:"root"}),D);function Z(t){return t.map((function(t){return t.split(",")})).reduce((function(t,e){return t.concat(e)})).map((function(t){return t.trim()}))}function L(t,e){if(1&t){var n=h.Wb();h.Vb(0,"div",1),h.vc(1,"\n  "),h.Vb(2,"button",2),h.dc("click",(function(){return h.oc(n),h.fc().action()})),h.vc(3),h.Ub(),h.vc(4,"\n"),h.Ub()}if(2&t){var i=h.fc();h.Eb(3),h.wc(i.data.action)}}function z(t,e){}var I,F,V,U,q,N=Math.pow(2,31)-1,W=function(){function t(e,n){var i=this;o(this,t),this._overlayRef=n,this._afterDismissed=new p.a,this._afterOpened=new p.a,this._onAction=new p.a,this._dismissedByAction=!1,this.containerInstance=e,this.onAction().subscribe((function(){return i.dismiss()})),e._onExit.subscribe((function(){return i._finishDismiss()}))}return c(t,[{key:"dismiss",value:function(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}},{key:"dismissWithAction",value:function(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())}},{key:"closeWithAction",value:function(){this.dismissWithAction()}},{key:"_dismissAfter",value:function(t){var e=this;this._durationTimeoutId=setTimeout((function(){return e.dismiss()}),Math.min(t,N))}},{key:"_open",value:function(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}},{key:"_finishDismiss",value:function(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}},{key:"afterDismissed",value:function(){return this._afterDismissed.asObservable()}},{key:"afterOpened",value:function(){return this.containerInstance._onEnter}},{key:"onAction",value:function(){return this._onAction.asObservable()}}]),t}(),J=new h.s("MatSnackBarData"),Q=function t(){o(this,t),this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"},X=((I=function(){function t(e,n){o(this,t),this.snackBarRef=e,this.data=n}return c(t,[{key:"action",value:function(){this.snackBarRef.dismissWithAction()}},{key:"hasAction",get:function(){return!!this.data.action}}]),t}()).\u0275fac=function(t){return new(t||I)(h.Pb(W),h.Pb(J))},I.\u0275cmp=h.Jb({type:I,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:5,vars:2,consts:[["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(h.Vb(0,"span"),h.vc(1),h.Ub(),h.vc(2,"\n"),h.uc(3,L,5,1,"div",0),h.vc(4,"\n")),2&t&&(h.Eb(1),h.wc(e.data.message),h.Eb(2),h.kc("ngIf",e.hasAction))},directives:[u.k,b.a],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],encapsulation:2,changeDetection:0}),I),G={snackBarState:Object(_.m)("state",[Object(_.j)("void, hidden",Object(_.k)({transform:"scale(0.8)",opacity:0})),Object(_.j)("visible",Object(_.k)({transform:"scale(1)",opacity:1})),Object(_.l)("* => visible",Object(_.e)("150ms cubic-bezier(0, 0, 0.2, 1)")),Object(_.l)("* => void, * => hidden",Object(_.e)("75ms cubic-bezier(0.4, 0.0, 1, 1)",Object(_.k)({opacity:0})))])},K=((V=function(e){t(a,e);var i=n(a);function a(t,e,n,r){var c;return o(this,a),(c=i.call(this))._ngZone=t,c._elementRef=e,c._changeDetectorRef=n,c.snackBarConfig=r,c._destroyed=!1,c._onExit=new p.a,c._onEnter=new p.a,c._animationState="void",c.attachDomPortal=function(t){return c._assertNotAttached(),c._applySnackBarClasses(),c._portalOutlet.attachDomPortal(t)},c._role="assertive"!==r.politeness||r.announcementMessage?"off"===r.politeness?null:"status":"alert",c}return c(a,[{key:"attachComponentPortal",value:function(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}},{key:"attachTemplatePortal",value:function(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}},{key:"onAnimationEnd",value:function(t){var e=t.fromState,n=t.toState;if(("void"===n&&"void"!==e||"hidden"===n)&&this._completeExit(),"visible"===n){var i=this._onEnter;this._ngZone.run((function(){i.next(),i.complete()}))}}},{key:"enter",value:function(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}},{key:"exit",value:function(){return this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),this._onExit}},{key:"ngOnDestroy",value:function(){this._destroyed=!0,this._completeExit()}},{key:"_completeExit",value:function(){var t=this;this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(m.a)(1)).subscribe((function(){t._onExit.next(),t._onExit.complete()}))}},{key:"_applySnackBarClasses",value:function(){var t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach((function(e){return t.classList.add(e)})):t.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}},{key:"_assertNotAttached",value:function(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")}}]),a}(f.a)).\u0275fac=function(t){return new(t||V)(h.Pb(h.B),h.Pb(h.m),h.Pb(h.i),h.Pb(Q))},V.\u0275cmp=h.Jb({type:V,selectors:[["snack-bar-container"]],viewQuery:function(t,e){var n;1&t&&h.sc(f.b,!0),2&t&&h.mc(n=h.ec())&&(e._portalOutlet=n.first)},hostAttrs:[1,"mat-snack-bar-container"],hostVars:2,hostBindings:function(t,e){1&t&&h.Hb("@state.done",(function(t){return e.onAnimationEnd(t)})),2&t&&(h.Fb("role",e._role),h.yc("@state",e._animationState))},features:[h.Bb],decls:2,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&(h.uc(0,z,0,0,"ng-template",0),h.vc(1,"\n"))},directives:[f.b],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],encapsulation:2,data:{animation:[G.snackBarState]}}),V),$=((F=function t(){o(this,t)}).\u0275mod=h.Nb({type:F}),F.\u0275inj=h.Mb({factory:function(t){return new(t||F)},imports:[[l.d,f.f,u.c,b.b,d.e],d.e]}),F),H=new h.s("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new Q}}),Y=((U=function(){function t(e,n,i,a,r,c){o(this,t),this._overlay=e,this._live=n,this._injector=i,this._breakpointObserver=a,this._parentSnackBar=r,this._defaultConfig=c,this._snackBarRefAtThisLevel=null}return c(t,[{key:"openFromComponent",value:function(t,e){return this._attach(t,e)}},{key:"openFromTemplate",value:function(t,e){return this._attach(t,e)}},{key:"open",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=Object.assign(Object.assign({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage||(i.announcementMessage=t),this.openFromComponent(X,i)}},{key:"dismiss",value:function(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}},{key:"ngOnDestroy",value:function(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}},{key:"_attachSnackBarContainer",value:function(t,e){var n=new f.e(e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,new WeakMap([[Q,e]])),i=new f.c(K,e.viewContainerRef,n),a=t.attach(i);return a.instance.snackBarConfig=e,a.instance}},{key:"_attach",value:function(t,e){var n=Object.assign(Object.assign(Object.assign({},new Q),this._defaultConfig),e),i=this._createOverlay(n),a=this._attachSnackBarContainer(i,n),o=new W(a,i);if(t instanceof h.N){var r=new f.g(t,null,{$implicit:n.data,snackBarRef:o});o.instance=a.attachTemplatePortal(r)}else{var c=this._createInjector(n,o),s=new f.c(t,void 0,c),u=a.attachComponentPortal(s);o.instance=u.instance}return this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait)").pipe(Object(v.a)(i.detachments())).subscribe((function(t){var e=i.overlayElement.classList;t.matches?e.add("mat-snack-bar-handset"):e.remove("mat-snack-bar-handset")})),this._animateSnackBar(o,n),this._openedSnackBarRef=o,this._openedSnackBarRef}},{key:"_animateSnackBar",value:function(t,e){var n=this;t.afterDismissed().subscribe((function(){n._openedSnackBarRef==t&&(n._openedSnackBarRef=null),e.announcementMessage&&n._live.clear()})),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe((function(){t.containerInstance.enter()})),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe((function(){return t._dismissAfter(e.duration)})),e.announcementMessage&&this._live.announce(e.announcementMessage,e.politeness)}},{key:"_createOverlay",value:function(t){var e=new l.b;e.direction=t.direction;var n=this._overlay.position().global(),i="rtl"===t.direction,a="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!i||"end"===t.horizontalPosition&&i,o=!a&&"center"!==t.horizontalPosition;return a?n.left("0"):o?n.right("0"):n.centerHorizontally(),"top"===t.verticalPosition?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}},{key:"_createInjector",value:function(t,e){return new f.e(t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,new WeakMap([[W,e],[J,t.data]]))}},{key:"_openedSnackBarRef",get:function(){var t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel},set:function(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}}]),t}()).\u0275fac=function(t){return new(t||U)(h.Zb(l.a),h.Zb(k.d),h.Zb(h.t),h.Zb(M),h.Zb(U,12),h.Zb(H))},U.\u0275prov=Object(h.Lb)({factory:function(){return new U(Object(h.Zb)(l.a),Object(h.Zb)(k.d),Object(h.Zb)(h.q),Object(h.Zb)(M),Object(h.Zb)(U,12),Object(h.Zb)(H))},token:U,providedIn:$}),U),tt=a("tyNb"),et=a("AcyG"),nt=a("mrSG"),it=a("Fl1J"),at=a("jvVo"),ot=((q=function(e){t(a,e);var i=n(a);function a(t){var e;return o(this,a),(e=i.call(this)).snackBar=t,e.expired$=new p.a,e}return c(a,[{key:"ngxsDataAfterExpired",value:function(t,e){this.snackBar.open("Expired",t.key,{duration:5e3,verticalPosition:"top",horizontalPosition:"right"})}},{key:"addTodo",value:function(t){t&&this.ctx.setState((function(e){return e.concat(t)}))}},{key:"removeTodo",value:function(t){this.ctx.setState((function(e){return e.filter((function(e,n){return n!==t}))}))}}]),a}(at.c)).\u0275fac=function(t){return new(t||q)(h.Zb(Y))},q.\u0275prov=h.Lb({token:q,factory:q.\u0275fac}),Object(nt.a)([Object(it.b)(),Object(nt.c)(0,Object(it.e)("todo")),Object(nt.b)("design:type",Function),Object(nt.b)("design:paramtypes",[String]),Object(nt.b)("design:returntype",void 0)],q.prototype,"addTodo",null),Object(nt.a)([Object(it.b)(),Object(nt.c)(0,Object(it.e)("idx")),Object(nt.b)("design:type",Function),Object(nt.b)("design:paramtypes",[Number]),Object(nt.b)("design:returntype",void 0)],q.prototype,"removeTodo",null),q=Object(nt.a)([Object(it.f)({ttlDelay:5e3,fireInit:!1,ttl:3e4,existingEngine:localStorage}),Object(it.g)(),Object(et.e)({name:"todo",defaults:[]})],q));function rt(t,e){if(1&t){var n=h.Wb();h.Vb(0,"li",7),h.vc(1),h.Vb(2,"button",5),h.dc("click",(function(){h.oc(n);var t=e.index;return h.fc().todo.removeTodo(t)})),h.vc(3,"\ud83d\uddd1"),h.Ub(),h.vc(4,"\n    "),h.Ub()}if(2&t){var i=e.$implicit;h.Eb(1),h.xc("\n        ",i," ")}}var ct,st,ut=((st=function t(e){o(this,t),this.todo=e}).\u0275fac=function(t){return new(t||st)(h.Pb(ot))},st.\u0275cmp=h.Jb({type:st,selectors:[["todo"]],decls:26,vars:3,consts:[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts","target","_blank"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png","alt","stackblitz",1,"stackblitz"],[1,"add-todo"],["placeholder","New Todo"],["text",""],[3,"click"],["class","todo",4,"ngFor","ngForOf"],[1,"todo"]],template:function(t,e){if(1&t){var n=h.Wb();h.Vb(0,"a",0),h.vc(1,"\n    "),h.Qb(2,"img",1),h.vc(3,"\n"),h.Ub(),h.vc(4,"\n\n"),h.Vb(5,"h3"),h.vc(6,"TodoState"),h.Ub(),h.vc(7,"\n\nPS: TodoState will be persistence in localStorage (ttl: 30sec)\n\n"),h.Vb(8,"div",2),h.vc(9,"\n    "),h.Qb(10,"input",3,4),h.vc(12,"\n    "),h.Vb(13,"button",5),h.dc("click",(function(){h.oc(n);var t=h.nc(11);return e.todo.addTodo(t.value)})),h.vc(14,"Add"),h.Ub(),h.vc(15,"\n    "),h.Vb(16,"button",5),h.dc("click",(function(){return e.todo.reset()})),h.vc(17,"Reset"),h.Ub(),h.vc(18,"\n"),h.Ub(),h.vc(19,"\n"),h.Vb(20,"ul"),h.vc(21,"\n    "),h.uc(22,rt,5,1,"li",6),h.gc(23,"async"),h.vc(24,"\n"),h.Ub(),h.vc(25,"\n")}2&t&&(h.Eb(22),h.kc("ngForOf",h.hc(23,1,e.todo.state$)))},directives:[u.j],pipes:[u.b],encapsulation:2,changeDetection:0}),st),lt=((ct=function t(){o(this,t)}).\u0275mod=h.Nb({type:ct}),ct.\u0275inj=h.Mb({factory:function(t){return new(t||ct)},imports:[[u.c,$,et.c.forFeature([ot]),tt.b.forChild([{path:"",component:ut}])]]}),ct)}}])}();