(this["webpackJsonpseven-card-game"]=this["webpackJsonpseven-card-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,c=n(0),l=n(1),s=n.n(l),r=n(6),i=n.n(r),u=(n(13),n(2)),o=n(7),d=(n(14),function(e){var t=e.card,n=e.forvardedRef,a=e.onTransitionEnd,l=e.isBack,s=e.isEnableHint;return Object(c.jsxs)("div",{className:"card",ref:n,onTransitionEnd:a,style:t?{color:t.color}:void 0,children:[l&&Object(c.jsx)("div",{className:"card__back"}),t&&!l&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"card__mark",children:t.value}),s&&Object(c.jsx)("div",{className:"card__rule",children:t.rule}),Object(c.jsx)("div",{className:"card__mark card__mark--revert",children:t.value})]})]})});!function(e){e.Black="#000",e.Red="#f00"}(a||(a={}));var j,b,v=[{value:"\u2660",color:a.Black},{value:"\u2663",color:a.Black},{value:"\u2665",color:a.Red},{value:"\u2666",color:a.Red}],f=[{value:"2",rule:"\u041d\u0438\u0447\u0435\u0433\u043e"},{value:"3",rule:"\u041d\u0438\u0447\u0435\u0433\u043e"},{value:"4",rule:"\u041d\u0438\u0447\u0435\u0433\u043e"},{value:"5",rule:"\u041d\u0438\u0447\u0435\u0433\u043e"}],O=[{value:"6",rule:"\u041d\u0438\u0447\u0435\u0433\u043e"},{value:"7",rule:"\u0421\u0447\u0438\u0442\u0430\u0435\u043c (\u043a\u0440\u043e\u043c\u0435 \u0441\u0435\u043c\u0435\u0440\u043e\u043a)"},{value:"8",rule:"\u041f\u0435\u0439 \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0439 \u0441 \u043a\u0435\u043c"},{value:"9",rule:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c \u043a\u0430\u043a \u0432\u044b\u043f\u0438\u0442\u044c"},{value:"10",rule:"\u0417\u0430\u0434\u0430\u0432\u0430\u0439 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0437\u043b\u043e \u0434\u0440\u0443\u0433\u0438\u043c"},{value:"J",rule:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"},{value:"Q",rule:"\u0420\u0435\u0430\u043a\u0446\u0438\u044f. \u041a\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439, \u0442\u043e\u0442 \u043f\u044c\u0435\u0442"},{value:"K",rule:"\u0412\u044b\u0431\u0438\u0440\u0430\u0439 \u043a\u0442\u043e \u043f\u044c\u0435\u0442"},{value:"A",rule:"\u041f\u0435\u0439 \u0441\u0430\u043c"}],h=[],m=function(){for(var e,t,n=h.length-1;n>0;n--)e=Math.floor(Math.random()*(n+1)),t=h[e],h[e]=h[n],h[n]=t},x=(n(15),function(e){var t=e.isExtendedDeck,n=void 0!==t&&t,a=e.isEnableHint,s=void 0===a||a,r=Object(l.useState)([]),i=Object(u.a)(r,2),j=i[0],b=i[1],x=Object(l.useState)(!0),_=Object(u.a)(x,2),g=_[0],E=_[1],C=Object(l.useRef)(null),N=function(){!function(e){h=[];var t=e?[].concat(f,O):O;v.forEach((function(e){t.forEach((function(t){h.push({value:"".concat(t.value).concat(e.value),rule:t.rule,color:e.color})}))})),m()}(n),b(h)},k=function(){E(!0),N()};Object(l.useEffect)(N,[]),Object(l.useEffect)(k,[n]);return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("button",{className:"game__reload",onClick:k,children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430"}),j.length>0&&Object(c.jsxs)("div",{className:"game__card",onClick:function(){C.current&&(C.current.style.transform="translateX(110%)",C.current.style.transition="transform 200ms ease-in-out")},children:[j[1]&&Object(c.jsx)(d,{card:j[1],isEnableHint:s}),j[0]&&Object(c.jsx)(d,{card:j[0],forvardedRef:C,onTransitionEnd:function(){C.current&&(C.current.style.transform="",C.current.style.transition="");var e=Object(o.a)(j);e.splice(0,1),b(e)},isEnableHint:s})]}),g&&Object(c.jsx)("div",{className:"game__card",onClick:function(){E(!1)},children:Object(c.jsx)(d,{isBack:!0})}),Object(c.jsx)("div",{className:"game__card-counter",children:j.length})]})});n(16);!function(e){e.Extended="cardValue52",e.Default="cardValue36"}(j||(j={})),function(e){e.Enable="cardHintEnable",e.Disable="cardHintDisable"}(b||(b={}));var _=function(e){var t=e.isExtended,n=e.isEnableHint,a=e.onChangeCardValues,s=e.onChangeCardHint,r=e.onClose,i=Object(l.useState)(!1),o=Object(u.a)(i,2),d=o[0],v=o[1],f=Object(l.useState)(t?j.Extended:j.Default),O=Object(u.a)(f,2),h=O[0],m=O[1],x=Object(l.useState)(n?b.Enable:b.Disable),_=Object(u.a)(x,2),g=_[0],E=_[1];return Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("button",{className:"settings__close",onClick:r,children:"\xd7"}),Object(c.jsx)("div",{className:"settings__hint ".concat(d&&"settings__hint--show"),onAnimationEnd:function(){return v(!1)},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b"}),Object(c.jsxs)("form",{className:"settings__form",children:[Object(c.jsxs)("label",{className:"settings__lebel",children:["\u041a\u043e\u043b-\u0432\u043e \u043a\u0430\u0440\u0442 \u0432 \u043a\u043e\u043b\u043e\u0434\u0435:",Object(c.jsxs)("select",{value:h,onChange:function(e){var t=e.target,n=t.value===j.Extended;m(t.value),null===a||void 0===a||a(n),v(!0)},className:"settings__select",children:[Object(c.jsx)("option",{value:j.Default,children:"36"}),Object(c.jsx)("option",{value:j.Extended,children:"52"})]})]}),Object(c.jsxs)("label",{className:"settings__lebel",children:["\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a:",Object(c.jsxs)("select",{value:g,onChange:function(e){var t=e.target,n=t.value===b.Enable;E(t.value),null===s||void 0===s||s(n),v(!0)},className:"settings__select",children:[Object(c.jsx)("option",{value:b.Enable,children:"\u0412\u043a\u043b"}),Object(c.jsx)("option",{value:b.Disable,children:"\u0412\u044b\u043a\u043b"})]})]})]})]})},g=(n(17),function(){var e=Object(l.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(l.useState)(!0),r=Object(u.a)(s,2),i=r[0],o=r[1],d=Object(l.useState)(!1),j=Object(u.a)(d,2),b=j[0],v=j[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("button",{className:"app__settings",onClick:function(){return v(!0)},children:"\u2699"}),Object(c.jsx)(x,{isExtendedDeck:n,isEnableHint:i}),b&&Object(c.jsx)(_,{isExtended:n,isEnableHint:i,onChangeCardHint:function(e){return o(e)},onChangeCardValues:function(e){return a(e)},onClose:function(){return v(!1)}})]})}),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),E()}],[[18,1,2]]]);
//# sourceMappingURL=main.7f9a6788.chunk.js.map