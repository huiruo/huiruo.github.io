"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[6939],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return t?n.createElement(g,c(c({ref:r},m),{},{components:t})):n.createElement(g,c({ref:r},m))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91222:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},c=void 0,i={unversionedId:"JavaScript/URLSearchParams-decodeURIComponent",id:"JavaScript/URLSearchParams-decodeURIComponent",title:"URLSearchParams-decodeURIComponent",description:"URLSearchParams",source:"@site/programming-tech/JavaScript/97-URLSearchParams-decodeURIComponent.md",sourceDirName:"JavaScript",slug:"/JavaScript/URLSearchParams-decodeURIComponent",permalink:"/JavaScript/URLSearchParams-decodeURIComponent",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/97-URLSearchParams-decodeURIComponent.md",tags:[],version:"current",sidebarPosition:97,frontMatter:{},sidebar:"docs",previous:{title:"js\u9519\u8bef\u5904\u7406",permalink:"/JavaScript/js\u9519\u8bef\u5904\u7406"},next:{title:"api-eval",permalink:"/JavaScript/api-eval"}},p={},l=[{value:"URLSearchParams",id:"urlsearchparams",level:2},{value:"decodeURIComponent",id:"decodeuricomponent",level:2}],m={toc:l},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"urlsearchparams"},"URLSearchParams"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javaScript"},"const testObj = {\n    'timeStamp':'123',\n    'nonceStr':'23',\n    'wxPackage':'45',\n    'signType':'58',\n    'paySign':'89'\n}\n\nconst params = new URLSearchParams(testObj).toString(); \nconsole.log(params);\n")),(0,a.kt)("h2",{id:"decodeuricomponent"},"decodeURIComponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var encodedString = "/qu/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E9%A1%BA%E5%BA%8F%E6%90%9C%E7%B4%A2-%E6%9C%80%E5%9F%BA%E6%9C%AC%E7%9A%84%E6%90%9C%E7%B4%A2";\nvar decodedString = decodeURIComponent(encodedString);\n\nconsole.log(decodedString);\n')))}d.isMDXComponent=!0}}]);