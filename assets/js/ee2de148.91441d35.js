"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[35],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,y=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={},i=void 0,c={unversionedId:"JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165",id:"JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165",title:"unshift\u5f00\u5934\u63d2\u5165",description:"",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/11-unshift\u5f00\u5934\u63d2\u5165.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165",permalink:"/JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/01-array\u65b9\u6cd5/11-unshift\u5f00\u5934\u63d2\u5165.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",permalink:"/JavaScript/array\u65b9\u6cd5/sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5"},next:{title:"shift\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20",permalink:"/JavaScript/array\u65b9\u6cd5/shift\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20"}},p={},s=[],l={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// unshift -> array <- push\nconst testArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]\n\n// \u5e76\u8fd4\u56de\u65b0\u7684\u957f\u5ea6\nconsole.log('\u5f53\u524d\u957f\u5ea6\uff1a', testArr.unshift({ id: 66 }))\nconsole.log('testArr\uff1a', testArr)\n")))}f.isMDXComponent=!0}}]);