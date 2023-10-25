"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,v=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,u={unversionedId:"Vue/vue3/api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b",id:"Vue/vue3/api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b",title:"api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b",description:"\u524d\u8a00",source:"@site/programming-tech/Vue/vue3/api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b.md",sourceDirName:"Vue/vue3",slug:"/Vue/vue3/api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b",permalink:"/Vue/vue3/api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/vue3/api-vue3\u4e2demits\u548cattrs\u7684\u533a\u522b.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b98\u65b9\u5efa\u8bae",id:"\u5b98\u65b9\u5efa\u8bae",level:2},{value:"emit\u548cAttrs\u4f7f\u7528\u4f8b\u5b50",id:"emit\u548cattrs\u4f7f\u7528\u4f8b\u5b50",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"emits\u662f\u9996\u5148\u5728\u5b50\u7ec4\u4ef6\u58f0\u660e\uff0c\u7236\u7ec4\u4ef6\u5f15\u7528"),(0,a.kt)("li",{parentName:"ul"},"attrs\u5219\u662f\u5148\u7531\u7236\u7ec4\u4ef6\u5728\u5b50\u7ec4\u4ef6\u4e0a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u901a\u8fc7\u67e5\u770b\u7236\u7ec4\u4ef6\u7684attrs\u6765\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u5dee\u5f02\u8ba9\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e00\u4e2a\u4e8b\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u548c\u7279\u70b9\u6765\u51b3\u5b9a\u4f7f\u7528\u54ea\u79cd\u65b9\u6cd5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u4e00\u4e2a\u7ec4\u4ef6\u7ecf\u5e38\u9700\u8981\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u548c\u7236\u7ec4\u4ef6\u901a\u4fe1\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528emits")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u4e00\u4e2a\u7236\u7ec4\u4ef6\u53ef\u80fd\u9700\u8981\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u548c\u5b50\u7ec4\u4ef6\u901a\u8baf\u4e14\u5e76\u4e0d\u662f\u7ecf\u5e38\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528attrs\u3002\u4f46\u662f\u6ce8\u610f\uff0c\u7531\u4e8e\u7236\u7ec4\u4ef6\u53ef\u80fd\u4e0d\u4f1a\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u548c\u5b50\u7ec4\u4ef6\u901a\u4fe1\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\u662f\u5426\u5b58\u5728\u76f8\u5e94\u7684attrs\uff08\u4e0d\u5224\u65ad\u4f1a\u51fa\u73b0undefined\u7684\u9519\u8bef\uff09"))),(0,a.kt)("h2",{id:"\u5b98\u65b9\u5efa\u8bae"},"\u5b98\u65b9\u5efa\u8bae"),(0,a.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528 emits \u8bb0\u5f55\u6bcf\u4e2a\u7ec4\u4ef6\u6240\u89e6\u53d1\u7684\u6240\u6709\u4e8b\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u56e0\u4e3a\u6211\u4eec\u79fb\u9664\u4e86 .native \u4fee\u9970\u7b26\u3002\u4efb\u4f55\u672a\u5728 emits \u4e2d\u58f0\u660e\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u90fd\u4f1a\u88ab\u7b97\u5165\u7ec4\u4ef6\u7684 $attrs\uff0c\u5e76\u5c06\u9ed8\u8ba4\u7ed1\u5b9a\u5230\u7ec4\u4ef6\u7684\u6839\u8282\u70b9\u4e0a\u3002\n")),(0,a.kt)("p",null,"\u5728Vue3\u4e2d\uff0c\u79fb\u9664.native\u4fee\u9970\u7b26\u540e\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u5176\u5b9e\u90fd\u4f1a\u8bb0\u5f55\u5728\u90fd\u7ec4\u4ef6\u7684attrs\u4e0a\uff0c\u65e0\u8bba\u662f\u4e0d\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5982\u679c\u9700\u8981\u533a\u5206\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u548c\u539f\u751f\u4e8b\u4ef6\uff0c\u6700\u597d\u8fd8\u662f\u4f7f\u7528emits\u6765\u5b9a\u4e49\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u89e6\u53d1\u7684\u4e8b\u4ef6\u3002\u540c\u65f6\uff0c\u5176\u5b9e\u6240\u6709\u7684\u4e8b\u4ef6\uff0c\u53ea\u8981\u4e0d\u5728emits\u4e2d\u58f0\u660e\uff0c\u90fd\u4f1a\u9ed8\u8ba4\u7ed1\u5b9a\u5728\u7236\u7ec4\u4ef6\u7684attrs\u4e0a\uff0c\u5e76\u4e0d\u4ec5\u9650\u4e8e\u81ea\u5b9a\u4e49\u7684\u4e8b\u4ef6\u3002"),(0,a.kt)("h2",{id:"emit\u548cattrs\u4f7f\u7528\u4f8b\u5b50"},"emit\u548cAttrs\u4f7f\u7528\u4f8b\u5b50"),(0,a.kt)("p",null,"\u7236\u7ec4\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javaScript"},"<template>\n  <div>\n    \u7ec4\u4ef61\uff08\u52a0\u4e0afun\u4e8b\u4ef6\uff0c\u4f46\u4e0d\u5728emits\u4e2d\u58f0\u660e\uff09\n    <com-one-vue @fun = 'call'/>\n  </div>\n  <div>\n    \u7ec4\u4ef61\uff08\u52a0\u4e0afun2\u4e8b\u4ef6\uff0c\u5728emits\u4e2d\u58f0\u660e\uff09\n    <com-one-vue @fun2 = 'call'/>\n  </div>\n</template>\n\u200b\n<script setup>\n  import { provide, ref } from '@vue/runtime-core';\n  import comOneVue from './components/comOne.vue';\n  const call = () => {\n  \xa0console.log('xx')\n  }\n<\/script>\n")),(0,a.kt)("p",null,"\u5b50\u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javaScript"},"<template>\n \xa0 \xa0<button @click=\"f\">hello</button>\n</template>\n\u200b\n<script setup>\n  import { useAttrs } from \"@vue/runtime-core\";\n  const emits = defineEmits(['fun2'])\n  const { onFun } = useAttrs()\n  const f = () => {\n  \xa0 \xa0if (onFun) {\n        onFun()\n      }\n  \xa0 \xa0emits('fun2')\n  }\n\n  console.log(useAttrs())\n<\/script> \n")),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e24\u79cd\u7528\u6cd5\u5e26\u6765\u7684\u6548\u679c\u662f\u6ca1\u6709\u4ec0\u4e48\u4e0d\u540c\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u70b9\u51fb\u4e24\u4e2a\u6309\u94ae\uff0c\u53ef\u4ee5\u53d1\u73b0\uff0cfun\u548cfun2\u65b9\u6cd5\u90fd\u6253\u5370\u51fa\u4e86\u7ed3\u679c"),(0,a.kt)("p",null,"\u5728\u4e24\u4e2a\u7ec4\u4ef61\u4e2d\uff0c\u7531\u4e8e\u7b2c\u4e00\u4e2a\u7ec4\u4ef61\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5fun\u6ca1\u6709\u5728emits\u4e2d\u58f0\u660e\uff0c\u6240\u4ee5\u5728\u5176\u7684$attrs\u4e0a\u51fa\u73b0\u4e86onFun\uff0c\u5176\u7c7b\u578b\u662f\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u800c\u5728\u7b2c\u4e8c\u4e2a\u7684\u7ec4\u4ef61\u4e0a,\u6211\u4eec\u5b9a\u4e49\u4e86\u81ea\u5b9a\u4e49\u65b9\u6cd5fun2\uff0c\u7531\u4e8e\u5728\u4e00\u5f00\u59cb\u6211\u4eec\u5df2\u7ecf\u5728\u5b50\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e86fun2\uff0c\u6240\u4ee5\u5728\u7b2c\u4e8c\u4e2a\u7ec4\u4ef61\u4e0a\u6ca1\u6709\u5c06fun2\u6dfb\u52a0\u5230$attrs\u4e0a\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u867d\u7136\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u662f\u7ec4\u4ef61\uff0c\u4f46\u662f\u5176\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u662f\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\u7684\uff0c\u8fd9\u4e5f\u662ffun\u81ea\u5b9a\u4e49\u65b9\u6cd5\u6ca1\u6709\u51fa\u73b0\u5728\u7b2c\u4e8c\u4e2a\u7ec4\u4ef61\u4e0a\u7684$attrs\u4e0a\u7684\u539f\u56e0\u3002"))}m.isMDXComponent=!0}}]);