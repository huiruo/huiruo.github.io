"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7345],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4533:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},o=void 0,c={unversionedId:"JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0",id:"JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0",title:"unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0",description:"splice\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u5b9e\u73b0",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/11-unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0",permalink:"/JavaScript/array\u65b9\u6cd5/unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/01-array\u65b9\u6cd5/11-unshift\u5f00\u5934\u63d2\u5165-splice\u4e5f\u53ef\u4ee5\u5b9e\u73b0.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"string.split-string\u8f6c\u5316\u6210\u6570\u7ec4",permalink:"/JavaScript/array\u65b9\u6cd5/string.split-string\u8f6c\u5316\u6210\u6570\u7ec4"},next:{title:"values-\u904d\u5386\u6570\u7ec4\u952e\u503c",permalink:"/JavaScript/array\u65b9\u6cd5/values-\u904d\u5386\u6570\u7ec4\u952e\u503c"}},l={},p=[{value:"<code>splice</code>\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u5b9e\u73b0",id:"splice\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u5b9e\u73b0",level:2}],s={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// unshift -> array <- push\nconst testArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]\n\n// \u5e76\u8fd4\u56de\u65b0\u7684\u957f\u5ea6\nconsole.log('\u5f53\u524d\u957f\u5ea6\uff1a', testArr.unshift({ id: 66 }))\nconsole.log('testArr\uff1a', testArr)\n")),(0,a.kt)("h2",{id:"splice\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u5b9e\u73b0"},(0,a.kt)("inlineCode",{parentName:"h2"},"splice"),"\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const array = [2, 3, 4, 5];\nconst element = 1;\n\narray.splice(0, 0, element);\n\nconsole.log(array);\n")))}f.isMDXComponent=!0}}]);