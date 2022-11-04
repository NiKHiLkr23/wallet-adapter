"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{7418:function(e,t,n){n.r(t),n.d(t,{WalletConnectButton:function(){return c},WalletDisconnectButton:function(){return m},WalletIcon:function(){return i.o},WalletModal:function(){return s.x},WalletModalButton:function(){return u},WalletModalContext:function(){return o.g},WalletModalProvider:function(){return p.s},WalletMultiButton:function(){return re},useWalletModal:function(){return o.h}});var o=n(5177),a=n(5593),l=n(9085),r=n(2363),i=n(9007);const c=({type:e="primary",size:t="large",htmlType:n="button",children:o,disabled:c,onClick:s,...u})=>{const{wallet:p,connect:m,connecting:d,connected:f}=(0,a.O)(),v=(0,r.useCallback)((e=>{s&&s(e),e.defaultPrevented||m().catch((()=>{}))}),[s,m]),g=(0,r.useMemo)((()=>o||(d?"Connecting ...":f?"Connected":p?"Connect":"Connect Wallet")),[o,d,f,p]);return r.createElement(l.Z,{onClick:v,disabled:c||!p||d||f,icon:r.createElement(i.o,{wallet:p}),type:e,size:t,htmlType:n,...u},g)};var s=n(504);const u=({children:e="Select Wallet",type:t="primary",size:n="large",htmlType:a="button",onClick:i,...c})=>{const{setVisible:s}=(0,o.h)(),u=(0,r.useCallback)((e=>{i&&i(e),e.defaultPrevented||s(!0)}),[i,s]);return r.createElement(l.Z,{onClick:u,type:t,size:n,htmlType:a,...c},e)};var p=n(4910);const m=({type:e="primary",size:t="large",htmlType:n="button",children:o,disabled:c,onClick:s,...u})=>{const{wallet:p,disconnect:m,disconnecting:d}=(0,a.O)(),f=(0,r.useCallback)((e=>{s&&s(e),e.defaultPrevented||m().catch((()=>{}))}),[s,m]),v=(0,r.useMemo)((()=>o||(d?"Disconnecting ...":p?"Disconnect":"Disconnect Wallet")),[o,d,p]);return r.createElement(l.Z,{onClick:f,disabled:c||!p,icon:r.createElement(i.o,{wallet:p}),type:e,size:t,htmlType:n,...u},v)};var d=n(8955),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},v=n(7137),g=function(e,t){return r.createElement(v.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:t,icon:f}))};g.displayName="CopyOutlined";var y=r.forwardRef(g),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},h=function(e,t){return r.createElement(v.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:t,icon:b}))};h.displayName="SwapOutlined";var C=r.forwardRef(h),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 00-11.3 0L209.4 249a8.03 8.03 0 000 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z"}}]},name:"disconnect",theme:"outlined"},E=function(e,t){return r.createElement(v.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:t,icon:w}))};E.displayName="DisconnectOutlined";var Z=r.forwardRef(E),N=n(439),O=n(6477),k=n(6787),P=n(7582),T=n(9483),x=n(8920),M=n.n(x),z=n(1913),L=n(3245),R={adjustX:1,adjustY:1},V=[0,0],D={topLeft:{points:["bl","tl"],overflow:R,offset:[0,-4],targetOffset:V},topCenter:{points:["bc","tc"],overflow:R,offset:[0,-4],targetOffset:V},topRight:{points:["br","tr"],overflow:R,offset:[0,-4],targetOffset:V},bottomLeft:{points:["tl","bl"],overflow:R,offset:[0,4],targetOffset:V},bottomCenter:{points:["tc","bc"],overflow:R,offset:[0,4],targetOffset:V},bottomRight:{points:["tr","br"],overflow:R,offset:[0,4],targetOffset:V}},W=n(8921),A=n(587),S=n(2143),H=W.Z.ESC,B=W.Z.TAB;var _=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function j(e,t){var n=e.arrow,o=void 0!==n&&n,a=e.prefixCls,l=void 0===a?"rc-dropdown":a,i=e.transitionName,c=e.animation,s=e.align,u=e.placement,p=void 0===u?"bottomLeft":u,m=e.placements,f=void 0===m?D:m,v=e.getPopupContainer,g=e.showAction,y=e.hideAction,b=e.overlayClassName,h=e.overlayStyle,C=e.visible,w=e.trigger,E=void 0===w?["hover"]:w,Z=e.autoFocus,N=(0,z.Z)(e,_),O=r.useState(),T=(0,P.Z)(O,2),x=T[0],R=T[1],V="visible"in e?C:x,W=r.useRef(null);r.useImperativeHandle(t,(function(){return W.current})),function(e){var t=e.visible,n=e.setTriggerVisible,o=e.triggerRef,a=e.onVisibleChange,l=e.autoFocus,i=r.useRef(!1),c=function(){var e,l,r,i;t&&o.current&&(null===(e=o.current)||void 0===e||null===(l=e.triggerRef)||void 0===l||null===(r=l.current)||void 0===r||null===(i=r.focus)||void 0===i||i.call(r),n(!1),"function"===typeof a&&a(!1))},s=function(){var e,t,n,a,l=(0,S.tS)(null===(e=o.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(n=t.current)||void 0===n||null===(a=n.getElement)||void 0===a?void 0:a.call(n))[0];return!!(null===l||void 0===l?void 0:l.focus)&&(l.focus(),i.current=!0,!0)},u=function(e){switch(e.keyCode){case H:c();break;case B:var t=!1;i.current||(t=s()),t?e.preventDefault():c()}};r.useEffect((function(){return t?(window.addEventListener("keydown",u),l&&(0,A.Z)(s,3),function(){window.removeEventListener("keydown",u),i.current=!1}):function(){i.current=!1}}),[t])}({visible:V,setTriggerVisible:R,triggerRef:W,onVisibleChange:e.onVisibleChange,autoFocus:Z});var j=function(){var t=function(){var t=e.overlay;return"function"===typeof t?t():t}();return r.createElement(r.Fragment,null,o&&r.createElement("div",{className:"".concat(l,"-arrow")}),t)},I=y;return I||-1===E.indexOf("contextMenu")||(I=["click"]),r.createElement(L.Z,(0,d.Z)((0,d.Z)({builtinPlacements:f},N),{},{prefixCls:l,ref:W,popupClassName:M()(b,(0,k.Z)({},"".concat(l,"-show-arrow"),o)),popupStyle:h,action:E,showAction:g,hideAction:I||[],popupPlacement:p,popupAlign:s,popupTransitionName:i,popupAnimation:c,popupVisible:V,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?j:j(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;R(t),"function"===typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;R(!1),n&&n(t)},getPopupContainer:v}),function(){var t=e.children,n=t.props?t.props:{},o=M()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(l,"-open")}());return V&&t?r.cloneElement(t,{className:o}):t}())}var I=r.forwardRef(j),F=n(9262),G=n(4748),J=n(6650),K=n(5957),U=n(7098),X=n(1894),Y=n(8148),q=n(2629),Q=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},$=l.Z.Group,ee=function(e){var t=r.useContext(J.E_),n=t.getPopupContainer,o=t.getPrefixCls,a=t.direction,i=e.prefixCls,c=e.type,s=void 0===c?"default":c,u=e.danger,p=e.disabled,m=e.loading,d=e.onClick,f=e.htmlType,v=e.children,g=e.className,y=e.overlay,b=e.trigger,h=e.align,C=e.visible,w=e.open,E=e.onVisibleChange,Z=e.onOpenChange,O=e.placement,k=e.getPopupContainer,T=e.href,x=e.icon,z=void 0===x?r.createElement(q.Z,null):x,L=e.title,R=e.buttonsRender,V=void 0===R?function(e){return e}:R,D=e.mouseEnterDelay,W=e.mouseLeaveDelay,A=e.overlayClassName,S=e.overlayStyle,H=e.destroyPopupOnHide,B=Q(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","open","onVisibleChange","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),_=o("dropdown-button",i),j={align:h,overlay:y,disabled:p,trigger:p?[]:b,onOpenChange:Z||E,getPopupContainer:k||n,mouseEnterDelay:D,mouseLeaveDelay:W,overlayClassName:A,overlayStyle:S,destroyPopupOnHide:H};"open"in e?j.open=w:"visible"in e&&(j.open=C),j.placement="placement"in e?O:"rtl"===a?"bottomLeft":"bottomRight";var I=V([r.createElement(l.Z,{type:s,danger:u,disabled:p,loading:m,onClick:d,htmlType:f,href:T,title:L},v),r.createElement(l.Z,{type:s,danger:u,icon:z})]),F=(0,P.Z)(I,2),G=F[0],K=F[1];return r.createElement($,(0,N.Z)({},B,{className:M()(_,g)}),G,r.createElement(oe,(0,N.Z)({},j),K))};ee.__ANT_BUTTON=!0;var te=ee,ne=((0,Y.b)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom"),function(e){var t=r.useContext(J.E_),n=t.getPopupContainer,o=t.getPrefixCls,a=t.direction;var l,i=e.arrow,c=e.prefixCls,s=e.children,u=e.trigger,p=e.disabled,m=e.getPopupContainer,d=e.overlayClassName,f=e.visible,v=e.open,g=e.onVisibleChange,y=e.onOpenChange,b=e.mouseEnterDelay,h=void 0===b?.15:b,C=e.mouseLeaveDelay,w=void 0===C?.1:C,E=o("dropdown",c),Z=r.Children.only(s),x=(0,X.Tm)(Z,{className:M()("".concat(E,"-trigger"),(0,k.Z)({},"".concat(E,"-rtl"),"rtl"===a),Z.props.className),disabled:p}),z=p?[]:u;z&&z.includes("contextMenu")&&(l=!0);var L=(0,G.Z)(!1,{value:void 0!==v?v:f}),R=(0,P.Z)(L,2),V=R[0],D=R[1],W=(0,F.Z)((function(e){null===g||void 0===g||g(e),null===y||void 0===y||y(e),D(e)})),A=M()(d,(0,k.Z)({},"".concat(E,"-rtl"),"rtl"===a)),S=(0,U.Z)({arrowPointAtCenter:"object"===(0,O.Z)(i)&&i.pointAtCenter,autoAdjustOverflow:!0}),H=r.useCallback((function(){D(!1)}),[]);return r.createElement(I,(0,N.Z)({alignPoint:l},e,{mouseEnterDelay:h,mouseLeaveDelay:w,visible:V,builtinPlacements:S,arrow:!!i,overlayClassName:A,prefixCls:E,getPopupContainer:m||n,transitionName:function(){var t=o(),n=e.placement,a=void 0===n?"":n,l=e.transitionName;return void 0!==l?l:a.includes("top")?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")}(),trigger:z,overlay:function(){var t,n=e.overlay;return t="function"===typeof n?n():n,t=r.Children.only("string"===typeof t?r.createElement("span",null,t):t),r.createElement(K.J,{prefixCls:"".concat(E,"-menu"),expandIcon:r.createElement("span",{className:"".concat(E,"-menu-submenu-arrow")},r.createElement(T.Z,{className:"".concat(E,"-menu-submenu-arrow-icon")})),mode:"vertical",selectable:!1,onClick:H,validator:function(e){e.mode}},t)},placement:function(){var t=e.placement;return t?t.includes("Center")?t.slice(0,t.indexOf("Center")):t:"rtl"===a?"bottomRight":"bottomLeft"}(),onVisibleChange:W}),x)});ne.Button=te;var oe=ne,ae=oe,le=n(5005);const re=({type:e="primary",size:t="large",htmlType:n="button",children:s,...p})=>{const{publicKey:m,wallet:d,disconnect:f}=(0,a.O)(),{setVisible:v}=(0,o.h)(),g=(0,r.useMemo)((()=>m?.toBase58()),[m]),b=(0,r.useMemo)((()=>s||(d&&g?g.slice(0,4)+".."+g.slice(-4):null)),[s,d,g]);return d?g?r.createElement(ae,{overlay:r.createElement(le.Z,{className:"wallet-adapter-multi-button-menu"},r.createElement(le.Z.Item,{className:"wallet-adapter-multi-button-menu-item"},r.createElement(l.Z,{icon:r.createElement(i.o,{wallet:d}),type:e,size:t,htmlType:n,className:"wallet-adapter-multi-button-menu-button",block:!0,...p},d.adapter.name)),r.createElement(le.Z.Item,{onClick:async()=>{await navigator.clipboard.writeText(g)},icon:r.createElement(y,{className:".wallet-adapter-multi-button-icon"}),className:"wallet-adapter-multi-button-item"},"Copy address"),r.createElement(le.Z.Item,{onClick:()=>setTimeout((()=>v(!0)),100),icon:r.createElement(C,{className:".wallet-adapter-multi-button-icon"}),className:"wallet-adapter-multi-button-item"},"Change wallet"),r.createElement(le.Z.Item,{onClick:()=>{f().catch((()=>{}))},icon:r.createElement(Z,{className:".wallet-adapter-multi-button-icon"}),className:"wallet-adapter-multi-button-item"},"Disconnect")),trigger:["click"]},r.createElement(l.Z,{icon:r.createElement(i.o,{wallet:d}),type:e,size:t,htmlType:n,...p},b)):r.createElement(c,{type:e,size:t,htmlType:n,...p},s):r.createElement(u,{type:e,size:t,htmlType:n,...p},s)}}}]);