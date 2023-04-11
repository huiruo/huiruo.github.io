"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||v[m]||i;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,p[1]=a;for(var u=2;u<i;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={},p=void 0,a={unversionedId:"Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c",id:"Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c",title:"api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c",description:"Vue3\u4e2d\u7684Provide\u548cInject \u7956\u5b59\u7ec4\u4ef6\u4f20\u503c",source:"@site/programming-tech/Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c.md",sourceDirName:"Vue/vue3",slug:"/Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c",permalink:"/Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"api-props",permalink:"/Vue/vue3/api-props"},next:{title:"api-reactive\u548cref\u4f7f\u7528\u533a\u522b",permalink:"/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b"}},c={},u=[{value:"Vue3\u4e2d\u7684Provide\u548cInject \u7956\u5b59\u7ec4\u4ef6\u4f20\u503c",id:"vue3\u4e2d\u7684provide\u548cinject-\u7956\u5b59\u7ec4\u4ef6\u4f20\u503c",level:2}],l={toc:u},s="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vue3\u4e2d\u7684provide\u548cinject-\u7956\u5b59\u7ec4\u4ef6\u4f20\u503c"},"Vue3\u4e2d\u7684Provide\u548cInject \u7956\u5b59\u7ec4\u4ef6\u4f20\u503c"),(0,o.kt)("p",null,"provide \u53ef\u4ee5\u5728\u7956\u5148\u7ec4\u4ef6\u4e2d\u6307\u5b9a\u6211\u4eec\u60f3\u8981\u63d0\u4f9b\u7ed9\u540e\u4ee3\u7ec4\u4ef6\u7684\u6570\u636e\u6216\u65b9\u6cd5\uff0c\u800c\u5728\u4efb\u4f55\u540e\u4ee3\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u4f7f\u7528 inject \u6765\u63a5\u6536 provide \u63d0\u4f9b\u7684\u6570\u636e\u6216\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u7236\u7ec4\u4ef6\u4ee3\u7801\n<script>\nimport { provide } from "vue"\nexport default {\n  setup(){\n    provide(\'test\',"val")\n  }\n}\n<\/script>\n\n// \u5b50\u7ec4\u4ef6\u4ee3\u7801\n<template>\n {{test}}\n</template>\n<script>\nimport { inject } from "vue"\nexport default {\n  setup(){\n    const info = inject(\'test\')\n    return{\n      info\n    }\n  }\n}\n<\/script>\n')))}v.isMDXComponent=!0}}]);