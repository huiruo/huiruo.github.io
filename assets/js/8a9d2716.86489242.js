"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8240],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,d=u["".concat(s,".").concat(g)]||u[g]||f[g]||i;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},31381:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,l={unversionedId:"regular-string/string-indexOf-lastIndexOf",id:"regular-string/string-indexOf-lastIndexOf",title:"string-indexOf-lastIndexOf",description:"indexOf: \u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u68c0\u7d22\u6307\u5b9a\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e",source:"@site/programming-tech/regular-string/08-string-indexOf-lastIndexOf.md",sourceDirName:"regular-string",slug:"/regular-string/string-indexOf-lastIndexOf",permalink:"/regular-string/string-indexOf-lastIndexOf",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/regular-string/08-string-indexOf-lastIndexOf.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"docs",previous:{title:"string-replace-\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u503c",permalink:"/regular-string/string-replace-\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u503c"},next:{title:"string-\u622a\u53d6\u5b57\u7b26\u4e32",permalink:"/regular-string/string-\u622a\u53d6\u5b57\u7b26\u4e32"}},s={},c=[{value:"indexOf: \u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u68c0\u7d22\u6307\u5b9a\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"indexof-\u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u68c0\u7d22\u6307\u5b9a\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2}],p={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"indexof-\u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u68c0\u7d22\u6307\u5b9a\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e"},"indexOf: \u8fd4\u56de\u5b57\u7b26\u4e32\u4e2d\u68c0\u7d22\u6307\u5b9a\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,o.kt)("p",null,"lastIndexOf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const str = 'hello world'\n\nconsole.log('test:',str.indexOf('o')) // 4\n// search \u4e5f\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u6548\u679c\nconsole.log(str.search(/[o]/g)); // 4\nconsole.log('\u622a\u53d6',str.slice(0,str.indexOf('o'))) // hell\n")))}f.isMDXComponent=!0}}]);