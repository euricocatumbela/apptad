(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/qGT":function(e,t,n){"use strict";var r=n("q1tI"),i=n("5AJ6");t.a=Object(i.a)(r.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},"03C3":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("Wbzz"),i=n("q1tI"),o=n.n(i),a=n("vOnD"),c=n("720A");function u(){return o.a.createElement(l,null,c.b.map((function(e,t){return o.a.createElement(r.a,{to:e.link,key:t},o.a.createElement(s,null,o.a.createElement(p,null,o.a.createElement("img",{alt:e.title,src:e.icon})),e.title))})))}var l=a.b.div.withConfig({displayName:"AdminTool__Wrapper",componentId:"sj2jc7-0"})(["width:250px;height:1168px;background:#ffff;box-shadow:1px 1px 1px #c4c4c4;padding:10px 10px 0 10px;margin-top:50px;"]),s=a.b.div.withConfig({displayName:"AdminTool__MenuItens",componentId:"sj2jc7-1"})(["color:black;display:grid;grid-template-columns:24px auto;gap:30px;align-items:center;padding:14px;transition:0.5s ease-in-out;border-bottom:1px solid rgb(255,255,255,0.2);font:500 13px/1 Gotham Pro,Proxima Nova,arial,serif;font-size:16px;font-weight:520;:hover{background-color:lightgrey;box-shadow:0px 10px 20px rgba(0,0,0,0.1),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);border-radius:10px;}"]),p=a.b.div.withConfig({displayName:"AdminTool__IconWrapper",componentId:"sj2jc7-2"})(["width:40px;height:40px;background:green;border-radius:50%;display:grid;justify-content:center;align-items:center;"])},"0PSK":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r);t.a=i.a.createContext(null)},"5AJ6":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("wx14"),i=n("q1tI"),o=n.n(i),a=n("HR5l");function c(e,t){var n=function(t,n){return o.a.createElement(a.a,Object(r.a)({ref:n},t),e)};return n.muiName=a.a.muiName,o.a.memo(o.a.forwardRef(n))}},"8k0H":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=n("720A"),c=n("Wbzz");function u(e){var t=e.toolRef,n=e.ref;return i.a.createElement(l,{ref:n},a.a.map((function(e,n){return i.a.createElement(c.a,{ref:t,key:e.title,to:e.link},i.a.createElement(s,{ref:t},i.a.createElement("img",{src:e.icon}),e.title))})))}var l=o.b.div.withConfig({displayName:"Menu__Wrapper",componentId:"tye3n4-0"})(["position:absolute;right:5px;top:60px;height:200px;background:#16145a;box-shadow:0px 50px 100px rgba(0,0,0,0.25),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(40px);border-radius:20px;padding:20px;display:grid;gap:10px;grid-template-columns:150px;z-index:1;"]),s=o.b.div.withConfig({displayName:"Menu__MenuItems",componentId:"tye3n4-1"})(["display:grid;grid-template-columns:24px auto;align-items:center;font-size:14px;font-weight:normal;font-style:normal;gap:20px;color:rgb(255,255,255);:hover{background:rgba(255,255,255,0.1);box-shadow:0px 10px 20px rgba(0,0,0,0.1),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);border-radius:10px;}"]);function p(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useRef)(),c=Object(r.useRef)();function l(e){n(!t),e.preventDefault()}function s(e){(o.current&&!o.current.contains(e.target)||c.current&&!c.current.contains(e.target))&&(console.log("Document is clicked"),n(!1))}return Object(r.useEffect)((function(){return document.addEventListener("mousedown",s),function(){document.removeEventListener("mousedown",s)}}),[]),i.a.createElement(d,{ref:o},i.a.createElement(b,null,"TakeAnyDoubt"),i.a.createElement(f,null,a.c.map((function(e){return i.a.createElement(m,{key:e.title,onClick:l},t?i.a.createElement(u,{ref:c}):"",i.a.createElement("img",{src:e.icon}),e.title)}))))}var d=o.b.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1ltnh27-0"})(["position:absolute;top:0px;width:100%;display:grid;grid-template-columns:44px auto;justify-content:space-between;padding:5px 5px;@media (max-width:648px){grid-template-columns:100px 100px;}background:#ffff;box-shadow:0px 1px 1px #c4c4c4;"]),f=o.b.div.withConfig({displayName:"Header__ItemGroup",componentId:"sc-1ltnh27-1"})(["display:grid;justify-content:center;margin:0 auto;width:144px;cursor:pointer;:hover{border-radius:5px;height:44px;background:lightgrey;width:144px;}"]),m=o.b.div.withConfig({displayName:"Header__Items",componentId:"sc-1ltnh27-2"})(["display:grid;grid-template-columns:40px auto;align-items:center;color:black;img{width:30px;height:30px;}"]),b=o.b.h1.withConfig({displayName:"Header__Title",componentId:"sc-1ltnh27-3"})(["text-align:center;padding:10px;width:134px;height:44px;background:linear-gradient(200.44deg,#4316db 13.57%,#9076e7 98.38%);box-shadow:0px 10px 20px rgba(0,0,0,0.1),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);border-radius:10px;color:white;"]);var h={text1:"black",text2:"rgba(0, 0, 0, 0.7)",backgroundColor:"#F2F6FF"},g={text1:"white",text2:"rgba(250, 250, 250, 0.7)",backgroundColor:"#1F1F47"};function v(){var e,t,n=(e=["\nbody{\n    background:",";\n\n    @media (prefers-color-scheme: light){\n        background: ","\n    }\n}\n"],t||(t=e.slice(0)),e.raw=t,e);return v=function(){return n},n}var x=Object(o.a)(v(),h.backgroundColor,g.backgroundColor);n("EgAo");t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null),i.a.createElement(p,null),i.a.createElement("main",null,t))}},EgAo:function(e,t,n){},G7As:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),i=n("i8i4"),o=!0,a=!1,c=null,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function s(){o=!1}function p(){"hidden"===this.visibilityState&&a&&(o=!0)}function d(e){var t,n,r,i=e.target;try{return i.matches(":focus-visible")}catch(a){}return o||(n=(t=i).type,!("INPUT"!==(r=t.tagName)||!u[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function f(){a=!0,window.clearTimeout(c),c=window.setTimeout((function(){a=!1}),100)}function m(){return{isFocusVisible:d,onBlurVisible:f,ref:r.useCallback((function(e){var t,n=i.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",p,!0))}),[])}}},GIek:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},Ovef:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function o(e){var t=r.useRef(e);return i((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},"VD++":function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),o=n("q1tI"),a=n.n(o),c=n("i8i4"),u=n("iuhU"),l=n("bfFb"),s=n("Ovef"),p=n("H2TA"),d=n("G7As"),f=n("KQm4"),m=n("zLVn"),b=n("JX7q"),h=n("dI71"),g=n("0PSK");function v(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function x(e,t,n){return null!=n[t]?n[t]:e.props[t]}function y(e,t,n){var r=v(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var c={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var l=i[u][r];c[i[u][r]]=n(l)}c[u]=n(u)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}(t,r);return Object.keys(i).forEach((function(a){var c=i[a];if(Object(o.isValidElement)(c)){var u=a in t,l=a in r,s=t[a],p=Object(o.isValidElement)(s)&&!s.props.in;!l||u&&!p?l||!u||p?l&&u&&Object(o.isValidElement)(s)&&(i[a]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:s.props.in,exit:x(c,"exit",e),enter:x(c,"enter",e)})):i[a]=Object(o.cloneElement)(c,{in:!1}):i[a]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:x(c,"exit",e),enter:x(c,"enter",e)})}})),i}var E=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},w=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(Object(b.a)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}Object(h.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,v(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",n),enter:x(e,"enter",n),exit:x(e,"exit",n)})}))):y(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(r.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(m.a)(e,["component","childFactory"]),i=this.state.contextValue,o=E(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?a.a.createElement(g.a.Provider,{value:i},o):a.a.createElement(g.a.Provider,{value:i},a.a.createElement(t,r,o))},t}(a.a.Component);w.defaultProps={component:"div",childFactory:function(e){return e}};var k=w,j="undefined"==typeof window?o.useEffect:o.useLayoutEffect;var O=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,i=e.rippleX,a=e.rippleY,c=e.rippleSize,l=e.in,p=e.onExited,d=void 0===p?function(){}:p,f=e.timeout,m=o.useState(!1),b=m[0],h=m[1],g=Object(u.a)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),v={width:c,height:c,top:-c/2+a,left:-c/2+i},x=Object(u.a)(t.child,b&&t.childLeaving,r&&t.childPulsate),y=Object(s.a)(d);return j((function(){if(!l){h(!0);var e=setTimeout(y,f);return function(){clearTimeout(e)}}}),[y,l,f]),o.createElement("span",{className:g,style:v},o.createElement("span",{className:x}))},M=o.forwardRef((function(e,t){var n=e.center,a=void 0!==n&&n,c=e.classes,l=e.className,s=Object(i.a)(e,["center","classes","className"]),p=o.useState([]),d=p[0],m=p[1],b=o.useRef(0),h=o.useRef(null);o.useEffect((function(){h.current&&(h.current(),h.current=null)}),[d]);var g=o.useRef(!1),v=o.useRef(null),x=o.useRef(null),y=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(v.current)}}),[]);var E=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,i=e.rippleSize,a=e.cb;m((function(e){return[].concat(Object(f.a)(e),[o.createElement(O,{key:b.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i})])})),b.current+=1,h.current=a}),[c]),w=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,i=void 0!==r&&r,o=t.center,c=void 0===o?a||t.pulsate:o,u=t.fakeElement,l=void 0!==u&&u;if("mousedown"===e.type&&g.current)g.current=!1;else{"touchstart"===e.type&&(g.current=!0);var s,p,d,f=l?null:y.current,m=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(m.width/2),p=Math.round(m.height/2);else{var b=e.touches?e.touches[0]:e,h=b.clientX,w=b.clientY;s=Math.round(h-m.left),p=Math.round(w-m.top)}if(c)(d=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(d+=1);else{var k=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,j=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(k,2)+Math.pow(j,2))}e.touches?null===x.current&&(x.current=function(){E({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:n})},v.current=setTimeout((function(){x.current&&(x.current(),x.current=null)}),80)):E({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:n})}}),[a,E]),j=o.useCallback((function(){w({},{pulsate:!0})}),[w]),M=o.useCallback((function(e,t){if(clearTimeout(v.current),"touchend"===e.type&&x.current)return e.persist(),x.current(),x.current=null,void(v.current=setTimeout((function(){M(e,t)})));x.current=null,m((function(e){return e.length>0?e.slice(1):e})),h.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:j,start:w,stop:M}}),[j,w,M]),o.createElement("span",Object(r.a)({className:Object(u.a)(c.root,l),ref:y},s),o.createElement(k,{component:null,exit:!0},d))})),R=Object(p.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(M)),I=o.forwardRef((function(e,t){var n=e.action,a=e.buttonRef,p=e.centerRipple,f=void 0!==p&&p,m=e.children,b=e.classes,h=e.className,g=e.component,v=void 0===g?"button":g,x=e.disabled,y=void 0!==x&&x,E=e.disableRipple,w=void 0!==E&&E,k=e.disableTouchRipple,j=void 0!==k&&k,O=e.focusRipple,M=void 0!==O&&O,I=e.focusVisibleClassName,T=e.onBlur,C=e.onClick,N=e.onFocus,D=e.onFocusVisible,V=e.onKeyDown,A=e.onKeyUp,F=e.onMouseDown,L=e.onMouseLeave,S=e.onMouseUp,z=e.onTouchEnd,_=e.onTouchMove,P=e.onTouchStart,q=e.onDragLeave,K=e.tabIndex,H=void 0===K?0:K,X=e.TouchRippleProps,U=e.type,W=void 0===U?"button":U,B=Object(i.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),G=o.useRef(null);var Y=o.useRef(null),J=o.useState(!1),$=J[0],Q=J[1];y&&$&&Q(!1);var Z=Object(d.a)(),ee=Z.isFocusVisible,te=Z.onBlurVisible,ne=Z.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j;return Object(s.a)((function(r){return t&&t(r),!n&&Y.current&&Y.current[e](r),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){Q(!0),G.current.focus()}}}),[]),o.useEffect((function(){$&&M&&!w&&Y.current.pulsate()}),[w,M,$]);var ie=re("start",F),oe=re("stop",q),ae=re("stop",S),ce=re("stop",(function(e){$&&e.preventDefault(),L&&L(e)})),ue=re("start",P),le=re("stop",z),se=re("stop",_),pe=re("stop",(function(e){$&&(te(e),Q(!1)),T&&T(e)}),!1),de=Object(s.a)((function(e){G.current||(G.current=e.currentTarget),ee(e)&&(Q(!0),D&&D(e)),N&&N(e)})),fe=function(){var e=c.findDOMNode(G.current);return v&&"button"!==v&&!("A"===e.tagName&&e.href)},me=o.useRef(!1),be=Object(s.a)((function(e){M&&!me.current&&$&&Y.current&&" "===e.key&&(me.current=!0,e.persist(),Y.current.stop(e,(function(){Y.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!y&&(e.preventDefault(),C&&C(e))})),he=Object(s.a)((function(e){M&&" "===e.key&&Y.current&&$&&!e.defaultPrevented&&(me.current=!1,e.persist(),Y.current.stop(e,(function(){Y.current.pulsate(e)}))),A&&A(e),C&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&C(e)})),ge=v;"button"===ge&&B.href&&(ge="a");var ve={};"button"===ge?(ve.type=W,ve.disabled=y):("a"===ge&&B.href||(ve.role="button"),ve["aria-disabled"]=y);var xe=Object(l.a)(a,t),ye=Object(l.a)(ne,G),Ee=Object(l.a)(xe,ye),we=o.useState(!1),ke=we[0],je=we[1];o.useEffect((function(){je(!0)}),[]);var Oe=ke&&!w&&!y;return o.createElement(ge,Object(r.a)({className:Object(u.a)(b.root,h,$&&[b.focusVisible,I],y&&b.disabled),onBlur:pe,onClick:C,onFocus:de,onKeyDown:be,onKeyUp:he,onMouseDown:ie,onMouseLeave:ce,onMouseUp:ae,onDragLeave:oe,onTouchEnd:le,onTouchMove:se,onTouchStart:ue,ref:Ee,tabIndex:y?-1:H},ve,B),m,Oe?o.createElement(R,Object(r.a)({ref:Y,center:f},X)):null)}));t.a=Object(p.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(I)},bfFb:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),i=n("GIek");function o(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){Object(i.a)(e,n),Object(i.a)(t,n)}}),[e,t])}},mymT:function(e,t,n){"use strict";var r=n("q1tI"),i=n("5AJ6");t.a=Object(i.a)(r.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=fe2d3b9801d80cfd80fbb0d501e7f03061aa73e7-3e028d7d0570950906c2.js.map