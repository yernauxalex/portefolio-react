"use strict";(self.webpackChunkportefolio_react=self.webpackChunkportefolio_react||[]).push([[897],{4897:function(e,n,o){o.r(n),o.d(n,{default:function(){return X}});var a,r=o(2791),t=o(9740),s=o(885),c=o(5987),i=o(1413),l=o(1694),d=o.n(l),u=o(3070),f=o(7357),h=o(8376),m=o(6382);function g(e){if((!a&&0!==a||e)&&f.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var p=o(8633),x=o(9007),b=o(3201),v=o(1683),Z=o(3690),y=o(6137),N=o(5137),j=o(2709),E=o(6543),w=(0,E.Z)("modal-body"),F=o(9820),k=o(162),C=o(184),R=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],D=r.forwardRef((function(e,n){var o=e.bsPrefix,a=e.className,r=e.contentClassName,t=e.centered,s=e.size,l=e.fullscreen,u=e.children,f=e.scrollable,h=(0,c.Z)(e,R);o=(0,k.vE)(o,"modal");var m="".concat(o,"-dialog"),g="string"===typeof l?"".concat(o,"-fullscreen-").concat(l):"".concat(o,"-fullscreen");return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({},h),{},{ref:n,className:d()(m,a,s&&"".concat(o,"-").concat(s),t&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),l&&g),children:(0,C.jsx)("div",{className:d()("".concat(o,"-content"),r),children:u})}))}));D.displayName="ModalDialog";var H=D,T=(0,E.Z)("modal-footer"),P=o(8024),B=["bsPrefix","className"],O=r.forwardRef((function(e,n){var o=e.bsPrefix,a=e.className,r=(0,c.Z)(e,B);return o=(0,k.vE)(o,"modal-header"),(0,C.jsx)(P.Z,(0,i.Z)((0,i.Z)({ref:n},r),{},{className:d()(a,o)}))}));O.displayName="ModalHeader",O.defaultProps={closeLabel:"Close",closeButton:!1};var S=O,z=(0,o(7472).Z)("h4"),A=(0,E.Z)("modal-title",{Component:z}),I=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],M={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:H};function _(e){return(0,C.jsx)(j.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function K(e){return(0,C.jsx)(j.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var L=r.forwardRef((function(e,n){var o=e.bsPrefix,a=e.className,t=e.style,l=e.dialogClassName,j=e.contentClassName,E=e.children,w=e.dialogAs,R=e["aria-labelledby"],D=e["aria-describedby"],H=e["aria-label"],T=e.show,P=e.animation,B=e.backdrop,O=e.keyboard,S=e.onEscapeKeyDown,z=e.onShow,A=e.onHide,M=e.container,L=e.autoFocus,U=e.enforceFocus,W=e.restoreFocus,G=e.restoreFocusOptions,q=e.onEntered,J=e.onExit,Q=e.onExiting,V=e.onEnter,X=e.onEntering,Y=e.onExited,$=e.backdropClassName,ee=e.manager,ne=(0,c.Z)(e,I),oe=(0,r.useState)({}),ae=(0,s.Z)(oe,2),re=ae[0],te=ae[1],se=(0,r.useState)(!1),ce=(0,s.Z)(se,2),ie=ce[0],le=ce[1],de=(0,r.useRef)(!1),ue=(0,r.useRef)(!1),fe=(0,r.useRef)(null),he=(0,p.Z)(),me=(0,s.Z)(he,2),ge=me[0],pe=me[1],xe=(0,b.Z)(n,pe),be=(0,x.Z)(A),ve=(0,k.SC)();o=(0,k.vE)(o,"modal");var Ze=(0,r.useMemo)((function(){return{onHide:be}}),[be]);function ye(){return ee||(0,N.t)({isRTL:ve})}function Ne(e){if(f.Z){var n=ye().getScrollbarWidth()>0,o=e.scrollHeight>(0,h.Z)(e).documentElement.clientHeight;te({paddingRight:n&&!o?g():void 0,paddingLeft:!n&&o?g():void 0})}}var je=(0,x.Z)((function(){ge&&Ne(ge.dialog)}));(0,v.Z)((function(){(0,m.Z)(window,"resize",je),null==fe.current||fe.current()}));var Ee=function(){de.current=!0},we=function(e){de.current&&ge&&e.target===ge.dialog&&(ue.current=!0),de.current=!1},Fe=function(){le(!0),fe.current=(0,Z.Z)(ge.dialog,(function(){le(!1)}))},ke=function(e){"static"!==B?ue.current||e.target!==e.currentTarget?ue.current=!1:null==A||A():function(e){e.target===e.currentTarget&&Fe()}(e)},Ce=(0,r.useCallback)((function(e){return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:d()("".concat(o,"-backdrop"),$,!P&&"show")}))}),[P,$,o]),Re=(0,i.Z)((0,i.Z)({},t),re);Re.display="block";return(0,C.jsx)(F.Z.Provider,{value:Ze,children:(0,C.jsx)(y.Z,{show:T,ref:xe,backdrop:B,container:M,keyboard:!0,autoFocus:L,enforceFocus:U,restoreFocus:W,restoreFocusOptions:G,onEscapeKeyDown:function(e){O||"static"!==B?O&&S&&S(e):(e.preventDefault(),Fe())},onShow:z,onHide:A,onEnter:function(e,n){e&&Ne(e),null==V||V(e,n)},onEntering:function(e,n){null==X||X(e,n),(0,u.ZP)(window,"resize",je)},onEntered:q,onExit:function(e){null==fe.current||fe.current(),null==J||J(e)},onExiting:Q,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,m.Z)(window,"resize",je)},manager:ye(),transition:P?_:void 0,backdropTransition:P?K:void 0,renderBackdrop:Ce,renderDialog:function(e){return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Re,className:d()(a,o,ie&&"".concat(o,"-static")),onClick:B?ke:void 0,onMouseUp:we,"aria-label":H,"aria-labelledby":R,"aria-describedby":D,children:(0,C.jsx)(w,(0,i.Z)((0,i.Z)({},ne),{},{onMouseDown:Ee,className:l,contentClassName:j,children:E}))}))}})})}));L.displayName="Modal",L.defaultProps=M;var U=Object.assign(L,{Body:w,Header:S,Title:A,Footer:T,Dialog:H,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),W=o(2982);function G(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.Hz,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k.cs,a=[];return Object.entries(e).forEach((function(e){var r=(0,s.Z)(e,2),t=r[0],c=r[1];null!=c&&("object"===typeof c?n.forEach((function(e){var n=c[e];if(null!=n){var r=e!==o?"-".concat(e):"";a.push("".concat(t).concat(r,"-").concat(n))}})):a.push("".concat(t,"-").concat(c)))})),a}var q=["as","bsPrefix","className","direction","gap"],J=r.forwardRef((function(e,n){var o=e.as,a=void 0===o?"div":o,r=e.bsPrefix,t=e.className,s=e.direction,l=e.gap,u=(0,c.Z)(e,q);r=(0,k.vE)(r,"horizontal"===s?"hstack":"vstack");var f=(0,k.pi)(),h=(0,k.zG)();return(0,C.jsx)(a,(0,i.Z)((0,i.Z)({},u),{},{ref:n,className:d().apply(void 0,[t,r].concat((0,W.Z)(G({gap:l,breakpoints:f,minBreakpoint:h}))))}))}));J.displayName="Stack";var Q=J,V=o(8981);var X=function(e){var n=(0,r.useContext)(t.A).languageState,o=e.data;return(0,C.jsxs)(U,{show:e.isOpen,onHide:e.toggle,size:"lg",dialogClassName:"modal-custom","aria-labelledby":"contact us form",centered:!0,children:[(0,C.jsx)(U.Header,{closeButton:!0,children:(0,C.jsxs)(U.Title,{children:["fr-FR"===n.lang?(0,C.jsx)(C.Fragment,{children:o.nameFR}):(0,C.jsx)(C.Fragment,{children:o.nameEN}),""!=o.urlHost?(0,C.jsx)("a",{href:o.urlHost,target:"_blank",rel:"noopener noreferrer",children:(0,C.jsx)("img",{src:V,alt:"logo",width:"20",height:"20",className:"mx-2"})}):null]})}),(0,C.jsxs)(U.Body,{children:["fr-FR"===n.lang?(0,C.jsxs)(C.Fragment,{children:[o.richDescFR?(0,C.jsx)("p",{children:o.richDescFR}):(0,C.jsx)("p",{children:o.descFR}),o.hostBy?(0,C.jsxs)("p",{children:["H\xe9berg\xe9 par ",o.hostBy]}):null]}):(0,C.jsxs)(C.Fragment,{children:[o.richDescEN?(0,C.jsx)("p",{children:o.richDescEN}):(0,C.jsx)("p",{children:o.descEN}),o.hostBy?(0,C.jsxs)("p",{children:["Hosted by  ",o.hostBy]}):null]}),null!=o.tech?(0,C.jsxs)(C.Fragment,{children:["fr-FR"===n.lang?(0,C.jsx)("h3",{children:"Technos / outils utilis\xe9es"}):(0,C.jsx)("h3",{children:"Tech / tools used"}),(0,C.jsx)(Q,{gap:1,children:o.tech.map((function(e){var n=e.name,o=e.icon;return(0,C.jsxs)("div",{className:"d-flex",children:[o?(0,C.jsx)("img",{src:o,alt:"logo "+n,width:"24",height:"24",className:"mx-2"}):(0,C.jsx)("div",{style:{width:40}}),(0,C.jsx)("p",{children:n})]},n)}))})]}):null]})]})}}}]);
//# sourceMappingURL=897.971b1985.chunk.js.map