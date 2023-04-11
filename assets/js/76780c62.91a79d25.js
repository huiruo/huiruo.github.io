"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7351],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24696:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={},i=void 0,c={unversionedId:"JavaScript/A-1-array\u65b9\u6cd5/entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",id:"JavaScript/A-1-array\u65b9\u6cd5/entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",title:"entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",description:"arr.entries() \u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",source:"@site/programming-tech/JavaScript/A-1-array\u65b9\u6cd5/17-entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c.md",sourceDirName:"JavaScript/A-1-array\u65b9\u6cd5",slug:"/JavaScript/A-1-array\u65b9\u6cd5/entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",permalink:"/JavaScript/A-1-array\u65b9\u6cd5/entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/A-1-array\u65b9\u6cd5/17-entries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"docs",previous:{title:"A-string.search",permalink:"/JavaScript/A-1-array\u65b9\u6cd5/A-string.search"},next:{title:"filter-\u8fc7\u6ee4\u51fd\u6570",permalink:"/JavaScript/A-1-array\u65b9\u6cd5/filter-\u8fc7\u6ee4\u51fd\u6570"}},l={},p=[{value:"arr.entries() \u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",id:"arrentries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c",level:3}],s={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"arrentries-\u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c"},"arr.entries() \u904d\u5386\u6570\u7ec4\u7684\u952e\u540d\u548c\u952e\u503c"),(0,a.kt)("p",null,"\u8fed\u4ee3\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u503c\u524d\u4e00\u4e2a\u662f\u7d22\u5f15\u503c\u4f5c\u4e3a key\uff0c\u6570\u7ec4\u540e\u4e00\u4e2a\u503c\u4f5c\u4e3a value\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1, 2, 3, 4]\nlet arr1 = arr.entries()\nconsole.log('arr1:',arr1)\nfor (let e of arr1) {\n    console.log(e);   // [0,1] [1,2] [2,3] [3,4]\n}\n")))}f.isMDXComponent=!0}}]);