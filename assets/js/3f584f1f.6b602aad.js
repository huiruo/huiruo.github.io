"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[811],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||g[m]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73887:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={},c=void 0,i={unversionedId:"JavaScript/A-2-String\u65b9\u6cd5/search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c",id:"JavaScript/A-2-String\u65b9\u6cd5/search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c",title:"search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c",description:"str.search(regexp)",source:"@site/programming-tech/JavaScript/A-2-String\u65b9\u6cd5/01-search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c.md",sourceDirName:"JavaScript/A-2-String\u65b9\u6cd5",slug:"/JavaScript/A-2-String\u65b9\u6cd5/search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c",permalink:"/JavaScript/A-2-String\u65b9\u6cd5/search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/A-2-String\u65b9\u6cd5/01-search-\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u8fd4\u56de-1\u6216\u503c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"replace-\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u503c",permalink:"/JavaScript/A-2-String\u65b9\u6cd5/replace-\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u503c"},next:{title:"trim",permalink:"/JavaScript/A-2-String\u65b9\u6cd5/trim"}},p={},s=[{value:"str.search(regexp)",id:"strsearchregexp",level:2}],l={toc:s},u="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strsearchregexp"},"str.search(regexp)"),(0,a.kt)("p",null,"search() \u65b9\u6cd5\u662f JavaScript \u4e2d\u7528\u4e8e\u5728\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u503c\u3002\u5b83\u53ef\u4ee5\u5728\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u4e0e\u7ed9\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5339\u914d\u7684\u503c\uff0c\u5e76\u8fd4\u56de\u5339\u914d\u5230\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u503c\uff0c\u5219\u8fd4\u56de -1\u3002"),(0,a.kt)("p",null,"regexp \u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff08regular expression\uff09\u5bf9\u8c61\u3002\u5982\u679c\u4f20\u5165\u4e00\u4e2a\u975e\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61 regexp\uff0c\u5219\u4f1a\u4f7f\u7528 new RegExp(regexp) \u9690\u5f0f\u5730\u5c06\u5176\u8f6c\u6362\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const str = "hey JudE";\nconst re = /[A-Z]/g;\nconsole.log(str.search(re)); // returns 4\nconsole.log(str.search(/h/)); // returns 0\nconsole.log(str.search(/hy/)); // returns -1\nconsole.log(str[str.search(re)]) // J\n')))}g.isMDXComponent=!0}}]);