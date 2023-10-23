"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),v=a,f=m["".concat(p,".").concat(v)]||m[v]||s[v]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b",id:"Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b",title:"api-reactive\u548cref\u4f7f\u7528\u533a\u522b",description:"1. \u539f\u7406\u89d2\u5ea6\u5bf9\u6bd4\uff1a",source:"@site/programming-tech/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b.md",sourceDirName:"Vue/vue3",slug:"/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b",permalink:"/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c",permalink:"/Vue/vue3/api-provide\u548cinject-\u8de8\u7ec4\u4ef6\u4f20\u503c"},next:{title:"vue3-\u5e38\u7528",permalink:"/Vue/vue3/vue3-\u5e38\u7528"}},p={},u=[{value:"1. \u539f\u7406\u89d2\u5ea6\u5bf9\u6bd4\uff1a",id:"1-\u539f\u7406\u89d2\u5ea6\u5bf9\u6bd4",level:2},{value:"2. \u4f7f\u7528\u89d2\u5ea6\u5bf9\u6bd4\uff1a",id:"2-\u4f7f\u7528\u89d2\u5ea6\u5bf9\u6bd4",level:2},{value:"3. \u5b9a\u4e49\u6570\u636e\u89d2\u5ea6\u5bf9\u6bd4\uff1a",id:"3-\u5b9a\u4e49\u6570\u636e\u89d2\u5ea6\u5bf9\u6bd4",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u539f\u7406\u89d2\u5ea6\u5bf9\u6bd4"},"1. \u539f\u7406\u89d2\u5ea6\u5bf9\u6bd4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ref \u901a\u8fc7 Class \u7684 get \u4e0e set \u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\u7684\uff08\u6570\u636e\u52ab\u6301\uff09"),(0,a.kt)("li",{parentName:"ul"},"reactive \u901a\u8fc7\u4f7f\u7528 Proxy \u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff08\u6570\u636e\u52ab\u6301\uff09\uff0c\u5e76\u901a\u8fc7Reflect \u64cd\u4f5c\u6e90\u5bf9\u8c61\u5185\u90e8\u7684\u6570\u636e\u3002")),(0,a.kt)("h2",{id:"2-\u4f7f\u7528\u89d2\u5ea6\u5bf9\u6bd4"},"2. \u4f7f\u7528\u89d2\u5ea6\u5bf9\u6bd4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ref \u5b9a\u4e49\u7684\u6570\u636e\uff1a\u64cd\u4f5c\u6570\u636e\u9700\u8981 .value,\u8bfb\u53d6\u6570\u636e\u65f6\u6a21\u7248\u4e2d\u76f4\u63a5\u8bfb\u53d6\u4e0d\u9700\u8981 .value"),(0,a.kt)("li",{parentName:"ul"},"reactive \u5b9a\u4e49\u7684\u6570\u636e\uff1a\u64cd\u4f5c\u6570\u636e\u4e0e\u8bfb\u53d6\u6570\u636e\uff0c\u5747\u4e0d\u9700\u8981 .value")),(0,a.kt)("h2",{id:"3-\u5b9a\u4e49\u6570\u636e\u89d2\u5ea6\u5bf9\u6bd4"},"3. \u5b9a\u4e49\u6570\u636e\u89d2\u5ea6\u5bf9\u6bd4\uff1a"),(0,a.kt)("p",null,"ref\u4f20\u5165\u7684\u662f\u57fa\u672c\u6570\u636e\uff0c\u4f46\u662f\u5982\u679c\u4f20\u5165\u5bf9\u8c61\u7c7b\u578b\u6570\u636e\uff0c\u5c31\u56de\u53bb\u6c42\u52a9reactive\u51fd\u6570 "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ref \u7528\u6765\u5b9a\u4e49\uff1a\u57fa\u672c\u7c7b\u578b\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"reactive \u7528\u6765\u5b9a\u4e49\uff1a\u5f15\u7528\u7c7b\u578b\uff0c\u4f8b\u5982\u5bf9\u8c61\u3001\u6216\u6570\u7ec4\u7c7b\u578b\u7684\u6570\u636e")),(0,a.kt)("p",null,"\u5907\u6ce8\uff1aref\u4e5f\u53ef\u4ee5\u7528\u6765\u5b9a\u4e49\u5bf9\u8c61\u6216\u6570\u7ec4\u7c7b\u578b\u6570\u636e\uff0c\u5b83\u5185\u90e8\u4f1a\u81ea\u52a8\u901a\u8fc7 reactive \u8f6c\u4e3a\u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("p",null,"ref.value \u8fd4\u56de\u7684\u662f\u4e00\u4e2a proxy \u5bf9\u8c61\uff0c\u4ed6\u662f\u901a\u8fc7\u4ee3\u7406 reactive \u5b9e\u73b0\u7684\uff0c\u4e0b\u9762\u8ba9\u6211\u4eec\u770b\u770b\u6e90\u7801:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u9009\u9879\u5f0f API \u4e2d\uff0c\u54cd\u5e94\u5f0f\u6570\u636e\u662f\u7528 data() \u9009\u9879\u58f0\u660e\u7684\u3002\u5728\u5185\u90e8\uff0cdata() \u7684\u8fd4\u56de\u503c\u5bf9\u8c61\u4f1a\u901a\u8fc7 reactive() \u8fd9\u4e2a\u516c\u5f00\u7684 API \u51fd\u6570\u8f6c\u4e3a\u54cd\u5e94\u5f0f\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api"},"https://cn.vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u90e8\u5206\u72b6\u6001\u9700\u8981\u5728\u591a\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u95f4\u5171\u4eab\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 reactive() \u6765\u521b\u5efa\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u5e76\u5c06\u5b83\u5bfc\u5165\u5230\u591a\u4e2a\u7ec4\u4ef6\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// store.js\nimport { reactive } from 'vue'\n\nexport const store = reactive({\n  count: 0\n})\n\n\x3c!-- ComponentA.vue --\x3e\n<script>\nimport { store } from './store.js'\n\nexport default {\n  data() {\n    return {\n      store\n    }\n  }\n}\n<\/script>\n\n<template>From A: {{ store.count }}</template>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- ComponentB.vue --\x3e\n<script>\nimport { store } from './store.js'\n\nexport default {\n  data() {\n    return {\n      store\n    }\n  }\n}\n<\/script>\n\n<template>From B: {{ store.count }}</template>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u73b0\u5728\u6bcf\u5f53 store \u5bf9\u8c61\u88ab\u66f4\u6539\u65f6\uff0c<ComponentA> \u4e0e <ComponentB> \u90fd\u4f1a\u81ea\u52a8\u66f4\u65b0\u5b83\u4eec\u7684\u89c6\u56fe\u3002\u73b0\u5728\u6211\u4eec\u6709\u4e86\u5355\u4e00\u7684\u6570\u636e\u6e90\u3002\n")),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u4efb\u610f\u4e00\u4e2a\u5bfc\u5165\u4e86 store \u7684\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u968f\u610f\u4fee\u6539\u5b83\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <button @click="store.count++">\n    From B: {{ store.count }}\n  </button>\n</template>\n')),(0,a.kt)("p",null,"\u867d\u7136\u8fd9\u5728\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\u662f\u53ef\u884c\u7684\uff0c\u4f46\u4ece\u957f\u8fdc\u6765\u770b\uff0c\u53ef\u4ee5\u88ab\u4efb\u4f55\u7ec4\u4ef6\u4efb\u610f\u6539\u53d8\u7684\u5168\u5c40\u72b6\u6001\u662f\u4e0d\u592a\u5bb9\u6613\u7ef4\u62a4\u7684\u3002\u4e3a\u4e86\u786e\u4fdd\u6539\u53d8\u72b6\u6001\u7684\u903b\u8f91\u50cf\u72b6\u6001\u672c\u8eab\u4e00\u6837\u96c6\u4e2d\uff0c\u5efa\u8bae\u5728 store \u4e0a\u5b9a\u4e49\u65b9\u6cd5\uff0c\u65b9\u6cd5\u7684\u540d\u79f0\u5e94\u8be5\u8981\u80fd\u8868\u8fbe\u51fa\u884c\u52a8\u7684\u610f\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// store.js\nimport { reactive } from 'vue'\n\nexport const store = reactive({\n  count: 0,\n  increment() {\n    this.count++\n  }\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <button @click="store.increment()">\n    From B: {{ store.count }}\n  </button>\n</template>\n')))}s.isMDXComponent=!0}}]);