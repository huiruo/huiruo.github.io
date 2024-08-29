"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9182],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),m=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=m(e.components);return t.createElement(i.Provider,{value:r},e.children)},y="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=m(n),u=a,f=y["".concat(i,".").concat(u)]||y[u]||l[u]||o;return n?t.createElement(f,c(c({ref:r},s),{},{components:n})):t.createElement(f,c({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[y]="string"==typeof e?e:a,c[1]=p;for(var m=2;m<o;m++)c[m]=n[m];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12521:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var t=n(87462),a=(n(67294),n(3905));const o={},c=void 0,p={unversionedId:"JavaScript/array\u65b9\u6cd5/\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd",id:"JavaScript/array\u65b9\u6cd5/\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd",title:"\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd",description:"",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd",permalink:"/JavaScript/array\u65b9\u6cd5/\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/01-array\u65b9\u6cd5/\u5e94\u7528-\u4f7f\u7528map\u53bb\u91cd.md",tags:[],version:"current",frontMatter:{}},i={},m=[],s={toc:m},y="wrapper";function l(e){let{components:r,...n}=e;return(0,a.kt)(y,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mergeArraysFn =(arr1: any[], arr2:any[])=>{\n  const mergedArray = [...arr1, ...arr2];\n\n  const map = new Map();\n  mergedArray.forEach(item => {\n      map.set(item.key, item);\n  });\n  \n  // \u4e0d\u6392\u5e8f\n  // return Array.from(map.values());\n\n  // \u6392\u5e8f\n  const sortedArray = Array.from(map.values()).sort((a, b) => parseInt(a.key) - parseInt(b.key));\n\n  return sortedArray\n}\n\nconst arr1 = [\n    { "key": "1", "show_name": "1\u5929" },\n    { "key": "3", "show_name": "3\u5929" },\n    { "key": "7", "show_name": "7\u5929" },\n    { "key": "30", "show_name": "30\u5929" }\n];\n\nconst arr2 = [\n    { "key": "1", "show_name": "1\u5929" },\n    { "key": "9", "show_name": "9\u5929" },\n    { "key": "90", "show_name": "90\u5929" }\n];\n\n// \u8c03\u7528\u51fd\u6570\nconst merged = mergeArrays(arr1, arr2);\n')))}l.isMDXComponent=!0}}]);