"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9465],{3905:(e,r,n)=>{n.d(r,{Zo:()=>f,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},f=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?t.createElement(y,a(a({ref:r},f),{},{components:n})):t.createElement(y,a({ref:r},f))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7852:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const i={},a=void 0,c={unversionedId:"JavaScript/for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61",id:"JavaScript/for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61",title:"forin-\u904d\u5386\u5bf9\u8c61",description:"",source:"@site/programming-tech/JavaScript/03-for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61.md",sourceDirName:"JavaScript/03-for\u5e38\u7528\u5faa\u73af",slug:"/JavaScript/for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/03-for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4"},next:{title:"keys-getOwnPropertyNames",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/keys-getOwnPropertyNames"}},l={},p=[],f={toc:p},u="wrapper";function s(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function func() {\n  const coinlist = {\n    "SUSHIUSDT": {\n      "symbol": "SUSHIUSDT",\n      "amount": 0,\n      "initialMargin": 0,\n      "maintMargin": 0,\n      "entryPrice": 0,\n      "unrealizedProfit": 0,\n      "leverage": 20\n    },\n    "BTSUSDT": {\n      "symbol": "BTSUSDT",\n      "amount": 0,\n      "initialMargin": 0,\n      "maintMargin": 0,\n      "entryPrice": 0,\n      "unrealizedProfit": 0,\n      "leverage": 20\n    }\n  }\n\n  for (let key in coinlist) {\n    const { amount } = coinlist[key]\n    if (amount !== 0) {\n      console.log(\'key:\', key, \'price:\', coinlist[key]);\n    }\n  }\n}\n\nfunc();\n')))}s.isMDXComponent=!0}}]);