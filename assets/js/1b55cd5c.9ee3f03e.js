"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),i=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(n),c=r,v=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return n?l.createElement(v,o(o({ref:t},s),{},{components:n})):l.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:r,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var l=n(87462),r=(n(67294),n(3905));const a={title:"api-vue3-vue2\u533a\u522b",sidebar_position:10},o=void 0,u={unversionedId:"Vue/api-vue3-vue2\u533a\u522b",id:"Vue/api-vue3-vue2\u533a\u522b",title:"api-vue3-vue2\u533a\u522b",description:"\u603b\u7ed3",source:"@site/programming-tech/Vue/api-vue3-vue2\u533a\u522b.md",sourceDirName:"Vue",slug:"/Vue/api-vue3-vue2\u533a\u522b",permalink:"/Vue/api-vue3-vue2\u533a\u522b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/api-vue3-vue2\u533a\u522b.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"api-vue3-vue2\u533a\u522b",sidebar_position:10},sidebar:"docs",previous:{title:"api-nextTick",permalink:"/Vue/api-nextTick"},next:{title:"api-vue-router",permalink:"/Vue/api-vue-router"}},p={},i=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u6ce8\u610f\u54cd\u5e94\u5f0f\u66f4\u65b0",id:"\u6ce8\u610f\u54cd\u5e94\u5f0f\u66f4\u65b0",level:2},{value:"vue3\u54cd\u5e94\u5f0f-Reactive",id:"vue3\u54cd\u5e94\u5f0f-reactive",level:2},{value:"Object.defineProperty\u7f3a\u70b9:",id:"objectdefineproperty\u7f3a\u70b9",level:3},{value:"vue3 Proxy\u6709\u4ee5\u4e0b\u4f18\u70b9:",id:"vue3-proxy\u6709\u4ee5\u4e0b\u4f18\u70b9",level:3},{value:"vue2\u548cvue3\u751f\u547d\u5468\u671f\u94a9\u5b50\u4e0d\u540c",id:"vue2\u548cvue3\u751f\u547d\u5468\u671f\u94a9\u5b50\u4e0d\u540c",level:2},{value:"beforeCreate -&gt; created:\u521d\u59cb\u5316vue\u5b9e\u4f8b\uff0c\u8fdb\u884c\u6570\u636e\u89c2\u6d4b",id:"beforecreate---created\u521d\u59cb\u5316vue\u5b9e\u4f8b\u8fdb\u884c\u6570\u636e\u89c2\u6d4b",level:3},{value:"vue2-beforemount\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u4e4b\u524d\u6267\u884c",id:"vue2-beforemount\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u4e4b\u524d\u6267\u884c",level:3},{value:"vue2-mounted\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c",id:"vue2-mounted\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c",level:3},{value:"\u6309\u9700\u5f15\u7528\u7684\u6709\u4e86\u66f4\u7ec6\u5fae\u7684\u53ef\u63a7\u6027\uff0c\u8ba9\u9879\u76ee\u7684\u6027\u80fd\u548c\u6253\u5305\u5927\u5c0f\u6709\u66f4\u597d\u7684\u63a7\u5236",id:"\u6309\u9700\u5f15\u7528\u7684\u6709\u4e86\u66f4\u7ec6\u5fae\u7684\u53ef\u63a7\u6027\u8ba9\u9879\u76ee\u7684\u6027\u80fd\u548c\u6253\u5305\u5927\u5c0f\u6709\u66f4\u597d\u7684\u63a7\u5236",level:2},{value:"\u63a5\u6536 Props \u4e0d\u540c,setup,this",id:"\u63a5\u6536-props-\u4e0d\u540csetupthis",level:2},{value:"\u4e8b\u4ef6-emit",id:"\u4e8b\u4ef6-emit",level:2},{value:"\u5728Vue2\u4e2d\u6211\u4eec\u4f1a\u8c03\u7528\u5230<code>this.$emit</code>\u7136\u540e\u4f20\u5165\u4e8b\u4ef6\u540d\u548c\u53c2\u6570\u5bf9\u8c61",id:"\u5728vue2\u4e2d\u6211\u4eec\u4f1a\u8c03\u7528\u5230thisemit\u7136\u540e\u4f20\u5165\u4e8b\u4ef6\u540d\u548c\u53c2\u6570\u5bf9\u8c61",level:3},{value:"Vue3\u4e2d\u4f7f\u7528emit",id:"vue3\u4e2d\u4f7f\u7528emit",level:3},{value:"\u8def\u7531\u65b9\u9762,\u975e\u91cd\u70b9",id:"\u8def\u7531\u65b9\u9762\u975e\u91cd\u70b9",level:2},{value:"keep-alive",id:"keep-alive",level:2},{value:"keep-alive\u5e73\u65f6\u5728\u54ea\u91cc\u4f7f\u7528?\u539f\u7406\u662f\u4ec0\u4e48?",id:"keep-alive\u5e73\u65f6\u5728\u54ea\u91cc\u4f7f\u7528\u539f\u7406\u662f\u4ec0\u4e48",level:3},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",level:3},{value:"\u5b9e\u4f8b\uff1a",id:"\u5b9e\u4f8b",level:3},{value:"vue-router\u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570?\u6267\u884c\u6d41\u7a0b\u5982\u4f55?",id:"vue-router\u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570\u6267\u884c\u6d41\u7a0b\u5982\u4f55",level:3},{value:"Vue.use\u662f\u5e72\u4ec0\u4e48\u7684?",id:"vueuse\u662f\u5e72\u4ec0\u4e48\u7684",level:2},{value:"\u7ec4\u4ef6\u5199name\u6709\u5565\u597d\u5904?",id:"\u7ec4\u4ef6\u5199name\u6709\u5565\u597d\u5904",level:2},{value:"vue\u7684\u4fee\u9970\u7b26\u6709\u54ea\u4e9b?",id:"vue\u7684\u4fee\u9970\u7b26\u6709\u54ea\u4e9b",level:2},{value:"\u5982\u4f55\u7406\u89e3\u81ea\u5b9a\u4e49\u6307\u4ee4?",id:"\u5982\u4f55\u7406\u89e3\u81ea\u5b9a\u4e49\u6307\u4ee4",level:2}],s={toc:i},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u63d0\u53471\uff1aVue.js 3 \u901a\u8fc7\u66f4\u597d\u7684\u6a21\u677f\u7f16\u8bd1\u5668\u548c\u4f18\u5316\u7b97\u6cd5\uff0cVue3\u7f16\u8bd1\u5668\u4e2d\u589e\u52a0\u4e86\u9759\u6001\u63d0\u5347\u6280\u672f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u63d0\u53472\uff1aVue.js 3 \u7684\u54cd\u5e94\u5f0f\u7cfb\u7edf\u8fdb\u884c\u4e86\u5347\u7ea7\uff0c\u73b0\u5728\u652f\u6301 Proxy\uff0c\u53ef\u4ee5\u66f4\u52a0\u7cbe\u7ec6\u5730\u63a7\u5236\u54cd\u5e94\u5f0f\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684 TypeScript \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u7ec4\u5408 API,Vue3 \u7684\u8bbe\u8ba1\u6a21\u5f0f\u7ed9\u4e88\u5f00\u53d1\u8005\u4eec\u6309\u9700\u5f15\u5165\u9700\u8981\u4f7f\u7528\u7684\u4f9d\u8d56\u5305\u3002\u8fd9\u6837\u4e00\u6765\u5c31\u4e0d\u9700\u8981\u591a\u4f59\u7684\u5f15\u7528\u5bfc\u81f4\u6027\u80fd\u6216\u8005\u6253\u5305\u540e\u592a\u5927\u7684\u95ee\u9898\u3002",(0,r.kt)("br",null),"\n\u5168\u65b0\u7684\u5408\u6210\u5f0fAPI\uff08Composition API\uff09\u53ef\u4ee5\u63d0\u5347\u4ee3\u7801\u7684\u89e3\u8026\u7a0b\u5ea6 \u2014\u2014 \u7279\u522b\u662f\u5927\u578b\u7684\u524d\u7aef\u5e94\u7528\uff0c\u6548\u679c\u4f1a\u66f4\u52a0\u660e\u663e\u3002\u8fd8\u6709\u5c31\u662f\u6309\u9700\u5f15\u7528\u7684\u6709\u4e86\u66f4\u7ec6\u5fae\u7684\u53ef\u63a7\u6027\uff0c\u8ba9\u9879\u76ee\u7684\u6027\u80fd\u548c\u6253\u5305\u5927\u5c0f\u6709\u66f4\u597d\u7684\u63a7\u5236\u3002"),(0,r.kt)("li",{parentName:"ul"},"Tree-shaking\u4f18\u5316\uff1aVue3\u4e2d\u5bf9\u4e8eTree-shaking\u505a\u4e86\u4f18\u5316\uff0c\u4f7f\u5f97\u53ea\u6709\u4f7f\u7528\u5230\u7684\u4ee3\u7801\u4f1a\u88ab\u6253\u5305\uff0c\u51cf\u5c0f\u5e94\u7528\u7a0b\u5e8f\u7684\u4f53\u79ef\u3002"),(0,r.kt)("li",{parentName:"ul"},"Fragments\uff08\u7247\u6bb5\uff09\uff1aVue3\u4e2d\u652f\u6301\u4f7f\u7528Fragments\uff08\u7247\u6bb5\uff09\u6765\u5305\u88f9\u591a\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u800c\u65e0\u9700\u521b\u5efa\u989d\u5916\u7684\u5305\u88c5\u5668div\u3002\u53ea\u9700\u8981\u5728template\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"<template>"),"\u6807\u7b7e\u6765\u5305\u88f9\u5373\u53ef")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <div>\n    <h1>Hello World</h1>\n    <template v-if="showSubTitle">\n      <h2>Sub Title</h2>\n    </template>\n    <p>Some content here</p>\n  </div>\n</template>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teleport\u7ec4\u4ef6\uff1aVue3\u4e2d\u589e\u52a0\u4e86Teleport\u7ec4\u4ef6\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5c06\u7ec4\u4ef6\u63d2\u5165\u5230DOM\u7684\u4efb\u610f\u4f4d\u7f6e\uff0c\u8fd9\u5bf9\u4e8e\u6a21\u6001\u6846\u548c\u5f39\u51fa\u83dc\u5355\u7b49\u7ec4\u4ef6\u975e\u5e38\u6709\u7528\u3002",(0,r.kt)("br",null),"\nTeleport\u7ec4\u4ef6\u6709\u4e24\u4e2a\u5c5e\u6027\uff1ato\u548cdisabled\u3002to\u5c5e\u6027\u6307\u5b9a\u4e86Teleport\u7ec4\u4ef6\u7684\u76ee\u6807\u5143\u7d20\uff0c\u53ef\u4ee5\u662fCSS\u9009\u62e9\u5668\u5b57\u7b26\u4e32\u3001DOM\u5143\u7d20\u6216\u4e00\u4e2a\u8fd4\u56deDOM\u5143\u7d20\u7684\u51fd\u6570\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <div>\n    <button @click="showModal = true">Show Modal</button>\n    <teleport to="body" v-if="showModal">\n      <div class="modal">\n        <h2>Modal Title</h2>\n        <p>Modal Content</p>\n        <button @click="showModal = false">Close Modal</button>\n      </div>\n    </teleport>\n  </div>\n</template>\n')),(0,r.kt)("h2",{id:"\u6ce8\u610f\u54cd\u5e94\u5f0f\u66f4\u65b0"},"\u6ce8\u610f\u54cd\u5e94\u5f0f\u66f4\u65b0"),(0,r.kt)("p",null,"\u5f53\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u5176\u5b50\u7ec4\u4ef6\u4f9d\u8d56\u9879\u6ca1\u53d8\u5316\u7684\u8bdd\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u5b9e\u4f8b\uff1a\n05-vue3-\u6d4b\u8bd5\u7236\u5b50\u7ec4\u4ef6-\u66f4\u65b0.html"),(0,r.kt)("h2",{id:"vue3\u54cd\u5e94\u5f0f-reactive"},"vue3\u54cd\u5e94\u5f0f-Reactive"),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u4e09\u6b65\u6765\u5efa\u7acb\u53cd\u5e94\u6027\u6570\u636e:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ecevue\u5f15\u5165reactive"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528reactive()\u65b9\u6cd5\u6765\u58f0\u540d\u6211\u4eec\u7684\u6570\u636e\u4e3a\u53cd\u5e94\u6027\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528setup()\u65b9\u6cd5\u6765\u8fd4\u56de\u6211\u4eec\u7684\u53cd\u5e94\u6027\u6570\u636e\uff0c\u4ece\u800c\u6211\u4eec\u7684template\u53ef\u4ee5\u83b7\u53d6\u8fd9\u4e9b\u53cd\u5e94\u6027\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { reactive } from 'vue'\n\nexport default {\n  props: {\n    title: String\n  },\n  setup () {\n    const state = reactive({\n      username: '',\n      password: ''\n    })\n\n    return { state }\n  }\n}\n")),(0,r.kt)("h3",{id:"objectdefineproperty\u7f3a\u70b9"},"Object.defineProperty\u7f3a\u70b9:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Object.defineProperty\u65e0\u6cd5\u76d1\u63a7\u5230\u6570\u7ec4\u4e0b\u6807\u7684\u53d8\u5316\uff0c\u5bfc\u81f4\u76f4\u63a5\u901a\u8fc7\u6570\u7ec4\u7684\u4e0b\u6807\u7ed9\u6570\u7ec4\u8bbe\u7f6e\u503c\uff0c\u4e0d\u80fd\u5b9e\u65f6\u54cd\u5e94\u3002 \u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u7ecf\u8fc7vue\u5185\u90e8\u5904\u7406\u540e\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\u6765\u76d1\u542c\u6570\u7ec4:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"push()\npop()\nshift()\nunshift()\nsplice()\nsort()\nreverse()\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u53ea\u9488\u5bf9\u4e86\u4ee5\u4e0a\u516b\u79cd\u65b9\u6cd5\u8fdb\u884c\u4e86hack\u5904\u7406,\u6240\u4ee5\u5176\u4ed6\u6570\u7ec4\u7684\u5c5e\u6027\u4e5f\u662f\u68c0\u6d4b\u4e0d\u5230\u7684\uff0c\u8fd8\u662f\u5177\u6709\u4e00\u5b9a\u7684\u5c40\u9650\u6027\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Object.defineProperty\u53ea\u80fd\u52ab\u6301\u5bf9\u8c61\u7684\u5c5e\u6027,\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5bf9\u6bcf\u4e2a\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u8fdb\u884c\u904d\u5386\u3002Vue 2.x\u91cc\uff0c\u662f\u901a\u8fc7 \u9012\u5f52 + \u904d\u5386 data \u5bf9\u8c61\u6765\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u76d1\u63a7\u7684\nObject.defineProperty\u53ea\u80fd\u52ab\u6301\u5bf9\u8c61\u7684\u5c5e\u6027,\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5bf9\u6bcf\u4e2a\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u8fdb\u884c\u904d\u5386")),(0,r.kt)("h3",{id:"vue3-proxy\u6709\u4ee5\u4e0b\u4f18\u70b9"},"vue3 Proxy\u6709\u4ee5\u4e0b\u4f18\u70b9:"),(0,r.kt)("p",null,"Vue 3 \u5c06\u4f7f\u7528 ES2015 Proxy \u4f5c\u4e3a\u5176\u89c2\u5bdf\u673a\u5236\u3002\u8fd9\u6d88\u9664\u4e86\u4ee5\u524d\u5b58\u5728\u7684\u8b66\u544a\uff0c\u4f7f\u901f\u5ea6\u52a0\u500d\uff0c\u5e76\u51cf\u5c11\u4f7f\u7528\u4e86\u4e00\u534a\u7684\u5185\u5b58\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u52ab\u6301\u6574\u4e2a\u5bf9\u8c61\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61,\u670913\u79cd\u52ab\u6301\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528reactive\u6ce8\u518c\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u5bf9\u51fd\u6570\u8fd4\u56de\u503c\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528Proxy\u52ab\u6301\u6570\u636e\u7684get,set,deleteProperty,has,own"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528WeakMap,Map,Set\u6765\u5b9e\u73b0\u4f9d\u8d56\u6536\u96c6")),(0,r.kt)("p",null,"\u7f3a\u70b9\uff1a\u4f7f\u7528\u5927\u91cfES6\u65b0\u589e\u7279\u6027\uff0c\u65e7\u7248\u672c\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u5dee\u3002Proxy\u662fes6\u63d0\u4f9b\u7684\u65b0\u7279\u6027\uff0c\u517c\u5bb9\u6027\u4e0d\u597d\uff0c\u6700\u4e3b\u8981\u7684\u662f\u8fd9\u4e2a\u5c5e\u6027\u65e0\u6cd5\u7528polyfill\u6765\u517c\u5bb9"),(0,r.kt)("p",null,"Proxy \u548c Reflect\u662fES6\u65b0\u589e\u7684\u4e24\u4e2a\u7c7b\uff0cProxy\u76f8\u6bd4Object.defineProperty\u66f4\u52a0\u597d\u7528\uff0c\u89e3\u51b3\u4e86\u540e\u8005\u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u6539\u53d8\u7684\u7f3a\u70b9\uff0c\u5e76\u4e14\u8fd8\u652f\u6301\u52ab\u6301\u6574\u4e2a\u5bf9\u8c61,\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61,\u4e0d\u7ba1\u662f\u64cd\u4f5c\u4fbf\u5229\u7a0b\u5ea6\u8fd8\u662f\u5e95\u5c42\u529f\u80fd\u4e0a\u90fd\u8fdc\u5f3a\u4e8eObject.defineProperty\uff0cReflect\u7684\u4f5c\u7528\u662f\u53ef\u4ee5\u62ff\u5230Object\u5185\u90e8\u7684\u65b9\u6cd5\uff0c\u5e76\u4e14\u5728\u64cd\u4f5c\u5bf9\u8c61\u51fa\u9519\u65f6\u8fd4\u56defalse\u4e0d\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("h2",{id:"vue2\u548cvue3\u751f\u547d\u5468\u671f\u94a9\u5b50\u4e0d\u540c"},"vue2\u548cvue3\u751f\u547d\u5468\u671f\u94a9\u5b50\u4e0d\u540c"),(0,r.kt)("p",null,"vue2:\nbeforeCreate--\x3ecreated--\x3ebeforeMount--\x3emounted"),(0,r.kt)("p",null,"vue3:\nsetup--\x3eonBeforeMount--\x3eonMounted"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"beforeCreate()    <--\x3e setup()\ncreated()         <--\x3e setup()\nbeforeMount()     <--\x3e onBeforeMount()\nmounted()         <--\x3e onMounted()\n\n// \u754c\u9762\u8fd8\u6ca1\u66f4\u65b0 \u4f46\u662fdata\u91cc\u9762\u7684\u6570\u636e\u662f\u6700\u65b0\u7684\u3002\u5373\u9875\u9762\u5c1a\u672a\u548c\u6700\u65b0\u7684data\u91cc\u9762\u7684\u6570\u636e\u5305\u540c\u6b65\nbeforeUpdate()    <--\x3e onBeforeUpdate()\n// \u8868\u793a\u9875\u9762\u548cdata\u91cc\u9762\u7684\u6570\u636e\u5df2\u7ecf\u4fdd\u6301\u540c\u6b65\u4e86 \u90fd\u662f\u6700\u65b0\u7684\nupdated()         <--\x3e onUpdated()\n\n// \u5f53\u6267\u884c\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\u7684\u65f6\u5019 vue\u7684\u5b9e\u4f8b\u4ece\u8fd0\u884c\u9636\u6bb5\u8fdb\u5165\u9500\u6bc1\u9636\u6bb5 \u6b64\u65f6\u5b9e\u4f8b\u8eab\u4e0a\u7684data \u8fd8\u6709 methods\u5904\u4e8e\u53ef\u7528\u7684\u72b6\u6001\nbeforeDestroy()   <--\x3e onBeforeUnmount()\n// \u8868\u793a\u7ec4\u4ef6\u5df2\u7ecf\u5b8c\u5168\u88ab\u9500\u6bc1\u4e86 \u7ec4\u4ef6\u4e2d\u6240\u6709\u7684\u5b9e\u4f8b\u65b9\u6cd5\u90fd\u662f\u4e0d\u80fd\u7528\u4e86\ndestroyed()       <--\x3e onUnmounted()\nerrorCaptured()   <--\x3e onErrorCaptured()\n")),(0,r.kt)("p",null,"vue3\u5b8c\u6574\u94a9\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"onBeforeMount(() => {\n  console.log('\u7ec4\u4ef6\u6302\u8f7d\u524donBeforeMount')\n})\n\nonMounted(() => {\n  console.log('\u7ec4\u4ef6\u6302\u8f7d\u540eonMounted')\n})\n\nonBeforeUpdate(() => {\n  console.log('\u521d\u6b21\u6e32\u67d3\u4e0d\u4f1a\u6267\u884c:\u7ec4\u4ef6\u66f4\u65b0\u524donBeforeUpdate')\n})\n\nonUpdated(() => {\n  console.log('\u521d\u6b21\u6e32\u67d3\u4e0d\u4f1a\u6267\u884c:\u7ec4\u4ef6\u66f4\u65b0\u540eonUpdated')\n})\n\nonBeforeUnmount(() => {\n  console.log('\u7ec4\u4ef6\u9500\u6bc1\u524donBeforeUnmount')\n})\nonUnmounted(() => {\n  console.log('\u7ec4\u4ef6\u9500\u6bc1\u540eonUnmounted')\n})\n")),(0,r.kt)("h3",{id:"beforecreate---created\u521d\u59cb\u5316vue\u5b9e\u4f8b\u8fdb\u884c\u6570\u636e\u89c2\u6d4b"},"beforeCreate -> created:\u521d\u59cb\u5316vue\u5b9e\u4f8b\uff0c\u8fdb\u884c\u6570\u636e\u89c2\u6d4b"),(0,r.kt)("p",null,"created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5b8c\u6210\u6570\u636e\u89c2\u6d4b\uff0c\u5c5e\u6027\u4e0e\u65b9\u6cd5\u7684\u8fd0\u7b97\uff0cwatch\u3001event\u4e8b\u4ef6\u56de\u8c03\u7684\u914d\u7f6e\n\n\u53ef\u8c03\u7528methods\u4e2d\u7684\u65b9\u6cd5\uff0c\u8bbf\u95ee\u548c\u4fee\u6539data\u6570\u636e\u89e6\u53d1\u54cd\u5e94\u5f0f\u6e32\u67d3dom\uff0c\u53ef\u901a\u8fc7computed\u548cwatch\u5b8c\u6210\u6570\u636e\u8ba1\u7b97\n\n\u6b64\u65f6vm.$el \u5e76\u6ca1\u6709\u88ab\u521b\u5efa\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vue2\u4e13\u6709:beforeCreate()\u548ccreated()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. \u8fd0\u884c\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570 beforeCreate,\u5728\u6267\u884c\u7684\u65f6\u5019\uff0cdata\u8fd8\u6709methods\u90fd\u6ca1\u6709\u88ab\u521d\u59cb\u5316\n2. \u8fdb\u5165\u6ce8\u5165\u6d41\u7a0b\uff0c\u5904\u7406\u5c5e\u6027\uff0ccomputed\uff0cmethods\uff0cdata\uff0cprovide\uff0cinject\uff0c\u6700\u540e\u4f7f\u7528\u4ee3\u7406\u6a21\u5f0f\u5c06\u8fd9\u4e9b\u5c5e\u6027\u6302\u8f7d\u5230\u5b9e\u4f8b\u4e2d\u3002\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vue3\u4e13\u6709:setup()\uff0c\u5728\u7ec4\u4ef6\u88ab\u6302\u8f7d\u4e4b\u524d\u88ab\u8c03\u7528\u3002\u521b\u5efa\u7684\u662fdata\u548cmethod")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setup\u76f8\u5f53\u4e8e\u7ec4\u4ef6\u7f16\u8bd1\u7684\u5165\u53e3\uff0csetup\u5728beforeCreate\u94a9\u5b50\u6267\u884c\u524d\u8fd0\u884c\uff0c\u6b64\u65f6\u53ea\u521d\u59cb\u5316\u4e86prop\uff08\u5c5e\u6027\uff09\u548ccontext\u7b49\uff0c\u800cdata\u662f\u5728beforeCreate\u94a9\u5b50\u4e4b\u540ecreated\u4e4b\u524d\u6267\u884c\u7684\u3002\n\n\u6ce8\u610f\uff1aonMounted\u867d\u7136\u5199\u5728setup\u51fd\u6570\u4e2d\uff0c\u4f46\u5374\u662f\u5728\u7ec4\u4ef6\u6302\u8f7d\u5230\u7236\u7ec4\u4ef6\u65f6\u624d\u88ab\u8c03\u7528\u7684\u3002\n\n\u7531\u4e8esetup\u4e2d\u4e0d\u80fd\u4f7f\u7528this\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528getCurrentInstance \u65b9\u6cd5\u83b7\u5f97\u5f53\u524d\u6d3b\u8dc3\u7684\u7ec4\u4ef6\n")),(0,r.kt)("h3",{id:"vue2-beforemount\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u4e4b\u524d\u6267\u884c"},"vue2-beforemount\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u4e4b\u524d\u6267\u884c"),(0,r.kt)("p",null,"\u6b64\u9636\u6bb5vm.el\u5df2\u5b8c\u6210DOM\u521d\u59cb\u5316\uff0c\u4f46\u5e76\u672a\u6302\u8f7d\u5728el\u9009\u9879\u4e0a,\u7ec4\u4ef6\u7684\u6a21\u677f\u5c1a\u672a\u6e32\u67d3\u5230DOM\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f5c\u7528:\u5728\u6e32\u67d3\u4e4b\u524d\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5fc5\u8981\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u6302\u8f7d\u524d vue3:onBeforeMount()/vue2:beforeMount()\nupdateComponent\uff0c\u8be5\u51fd\u6570\u4f1a\u8fd0\u884crender\u51fd\u6570\uff0c\u5e76\u628arender\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679cvnode\u4f5c\u4e3a\u53c2\u6570\u7ed9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"onBeforeMount()/beforeMount() \u8868\u793a\u6a21\u677f\u5df2\u7ecf\u5728\u5185\u5b58\u4e2d\u7f16\u8f91\u5b8c\u6210\u4e86\uff0c\u4f46\u662f\u5c1a\u672a\u6e32\u67d3\u5230\u6a21\u677f\u9875\u9762\u4e2d\u3002\u5373\u9875\u9762\u4e2d\u7684\u5143\u7d20\uff0c\u6ca1\u6709\u88ab\u771f\u6b63\u7684\u66ff\u6362\u8fc7\u6765\uff0c\u53ea\u662f\u4e4b\u524d\u5199\u7684\u4e00\u4e9b\u6a21\u677f\u5b57\u7b26\u4e32\u3002\n")),(0,r.kt)("h3",{id:"vue2-mounted\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c"},"vue2-mounted\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c"),(0,r.kt)("p",null,"vm.el\u5df2\u5b8c\u6210DOM\u7684\u6302\u8f7d\u4e0e\u6e32\u67d3, \u6b64\u65f6\u7ec4\u4ef6\u7684\u6a21\u677f\u5df2\u7ecf\u6e32\u67d3\u5230DOM\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f5c\u7528:\u5728\u7ec4\u4ef6\u7684\u6e32\u67d3\u5b8c\u6210\u540e\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5fc5\u8981\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u6302\u8f7d\u540e vue3:onMounted()/ vue2:mounted()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8868\u793a\u5185\u5b58\u4e2d\u6a21\u677f\u5df2\u7ecf\u771f\u5b9e\u7684\u6302\u8f7d\u5230\u9875\u9762\u4e2d\u53bb\u4e86\uff0c\u7528\u6237\u53ef\u4ee5\u770b\u5230\u6e32\u67d3\u597d\u7684\u754c\u9762\u4e86\n\u6267\u884c\u5b8c\u8fd9\u4e2a\u51fd\u6570\u8868\u793a \u6574\u4e2avue\u5b9e\u4f8b\u5df2\u7ecf\u521d\u59cb\u5316\u5b8c\u6210\u4e86\uff0c\u7ec4\u4ef6\u8131\u79bb\u4e86\u521b\u5efa\u9636\u6bb5\uff0c\u8fdb\u5165\u8fd0\u884c\u9636\u6bb5\u3002\n")),(0,r.kt)("h2",{id:"\u6309\u9700\u5f15\u7528\u7684\u6709\u4e86\u66f4\u7ec6\u5fae\u7684\u53ef\u63a7\u6027\u8ba9\u9879\u76ee\u7684\u6027\u80fd\u548c\u6253\u5305\u5927\u5c0f\u6709\u66f4\u597d\u7684\u63a7\u5236"},"\u6309\u9700\u5f15\u7528\u7684\u6709\u4e86\u66f4\u7ec6\u5fae\u7684\u53ef\u63a7\u6027\uff0c\u8ba9\u9879\u76ee\u7684\u6027\u80fd\u548c\u6253\u5305\u5927\u5c0f\u6709\u66f4\u597d\u7684\u63a7\u5236"),(0,r.kt)("h2",{id:"\u63a5\u6536-props-\u4e0d\u540csetupthis"},"\u63a5\u6536 Props \u4e0d\u540c,setup,this"),(0,r.kt)("p",null,"\u63a5\u6536\u7ec4\u4ef6props\u53c2\u6570\u4f20\u9012\u8fd9\u4e00\u5757\u4e3a\u6211\u4eec\u5e26\u6765\u4e86Vue2\u548cVue3\u4e4b\u95f4\u6700\u5927\u7684\u533a\u522b\u3002\n\u2014this\u5728vue3\u4e2d\u4e0evue2\u4ee3\u8868\u7740\u5b8c\u5168\u4e0d\u4e00\u6837\u7684\u4e1c\u897f\u3002"),(0,r.kt)("p",null,"\u5728 Vue2\uff0cthis\u4ee3\u8868\u7684\u662f\u5f53\u524d\u7ec4\u4ef6\uff0c\u4e0d\u662f\u67d0\u4e00\u4e2a\u7279\u5b9a\u7684\u5c5e\u6027\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528this\u8bbf\u95eeprop\u5c5e\u6027\u503c\u3002\u5c31\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u5728\u6302\u8f7d\u5b8c\u6210\u540e\u6253\u5370\u5904\u5f53\u524d\u4f20\u5165\u7ec4\u4ef6\u7684\u53c2\u6570title\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"mounted () {\n    console.log('title: ' + this.title)\n}\n")),(0,r.kt)("p",null,"\u4f46\u662f\u5728 Vue3 \u4e2d\uff0cthis\u65e0\u6cd5\u76f4\u63a5\u62ff\u5230props\u5c5e\u6027\uff0cemit events\uff08\u89e6\u53d1\u4e8b\u4ef6\uff09\u548c\u7ec4\u4ef6\u5185\u7684\u5176\u4ed6\u5c5e\u6027\u3002setup()\u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"props - \u4e0d\u53ef\u53d8\u7684\u7ec4\u4ef6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ol"},"context - Vue3 \u66b4\u9732\u51fa\u6765\u7684\u5c5e\u6027\uff08emit\uff0cslots\uff0cattrs\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n  <div>{{ props.text }}</div>\n</template>\n\n<script>\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  props: {\n    text: { type: String, required: true },\n    listSubProject: {\n      type: Array,\n      default: () => [],\n    },\n    isPm: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  setup(props) {\n    // do something with `props.text` here\n    onMounted(() => {\n      console.log('title: ' + props.type)\n    })\n  }\n})\n<\/script>\n")),(0,r.kt)("h2",{id:"\u4e8b\u4ef6-emit"},"\u4e8b\u4ef6-emit"),(0,r.kt)("p",null,"\u5728 Vue2 \u4e2d\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u662f\u975e\u5e38\u76f4\u63a5\u7684\uff0c\u4f46\u662f\u5728 Vue3 \u7684\u8bdd\uff0c\u6211\u4eec\u4f1a\u6709\u66f4\u591a\u7684\u63a7\u5236\u7684\u81ea\u7531\u5ea6\u3002\n\u4e3e\u4f8b\uff0c\u73b0\u5728\u6211\u4eec\u60f3\u5728\u70b9\u51fb\u63d0\u4ea4\u6309\u94ae\u65f6\u89e6\u53d1\u4e00\u4e2alogin\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u5728vue2\u4e2d\u6211\u4eec\u4f1a\u8c03\u7528\u5230thisemit\u7136\u540e\u4f20\u5165\u4e8b\u4ef6\u540d\u548c\u53c2\u6570\u5bf9\u8c61"},"\u5728Vue2\u4e2d\u6211\u4eec\u4f1a\u8c03\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"h3"},"this.$emit"),"\u7136\u540e\u4f20\u5165\u4e8b\u4ef6\u540d\u548c\u53c2\u6570\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"login () {\n  this.$emit('login', {\n    username: this.username,\n    password: this.password\n  })\n}\n")),(0,r.kt)("h3",{id:"vue3\u4e2d\u4f7f\u7528emit"},"Vue3\u4e2d\u4f7f\u7528emit"),(0,r.kt)("p",null,"this\u5df2\u7ecf\u4e0d\u662f\u548cvue2\u4ee3\u8868\u7740\u8fd9\u4e2a\u7ec4\u4ef6\u4e86\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e0d\u4e00\u6837\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5728setup()\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570content\u5bf9\u8c61\u4e2d\u5c31\u6709emit\uff0c\u8fd9\u4e2a\u662f\u548cthis.$emit\u662f\u4e00\u6837\u7684\u3002\u90a3\u4e48\u6211\u4eec\u53ea\u8981\u5728setup()\u63a5\u6536\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u4f7f\u7528\u5206\u89e3\u5bf9\u8c61\u6cd5\u53d6\u51faemit\u5c31\u53ef\u4ee5\u5728setup\u65b9\u6cd5\u4e2d\u968f\u610f\u4f7f\u7528\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setup (props, { emit }) {\n    const login = () => {\n      emit('login', {\n        username: state.username,\n        password: state.password\n      })\n    }\n}\n")),(0,r.kt)("h2",{id:"\u8def\u7531\u65b9\u9762\u975e\u91cd\u70b9"},"\u8def\u7531\u65b9\u9762,\u975e\u91cd\u70b9"),(0,r.kt)("p",null,"1.\u9700\u8981\u5b89\u88c5 router4"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5bfc\u5165\u5b83\u5e76Vue.use(router)\uff0c\u4f46\u8fd9\u5728Vue3\u4e2d\u4e0d\u4e00\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import router from './router'\n\nconst app = createApp(App)\napp.use(router)\napp.mount('#app')\n")),(0,r.kt)("p",null,"vue2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue'\nimport axios from 'axios'\nimport App from './App.vue'\nimport router from './router'\nimport store from './store'\nimport { initMutual } from \"./utils/PCmutual.js\";\nimport './index.less'\n\nVue.config.productionTip = false\nVue.prototype.axios = axios\ninitMutual();\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n")),(0,r.kt)("p",null,"vue3\u521b\u5efa"),(0,r.kt)("p",null,"createWebHashHistory hash \u8def\u7531"),(0,r.kt)("p",null,"createWebHistory history \u8def\u7531"),(0,r.kt)("p",null,"createMemoryHistory \u5e26\u7f13\u5b58 history \u8def\u7531"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const router = createRouter({\n  history: createWebHistory(),\n  // history: createWebHashHistory(),\n  routes\n})\nexport default router\n")),(0,r.kt)("p",null,"vue2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import VueRouter from 'vue-router'\nconst router = new VueRouter({\n  // mode: 'history',\n  // base: process.env.BASE_URL,\n  routes\n})\n\nexport default router\n")),(0,r.kt)("h2",{id:"keep-alive"},"keep-alive"),(0,r.kt)("h3",{id:"keep-alive\u5e73\u65f6\u5728\u54ea\u91cc\u4f7f\u7528\u539f\u7406\u662f\u4ec0\u4e48"},"keep-alive\u5e73\u65f6\u5728\u54ea\u91cc\u4f7f\u7528?\u539f\u7406\u662f\u4ec0\u4e48?"),(0,r.kt)("p",null,"\u4f7f\u7528keep-alive\u5305\u88f9\u52a8\u6001\u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u7f13\u5b58\uff0c\u907f\u514d\u7ec4\u4ef6\u91cd\u65b0\u521b\u5efa"),(0,r.kt)("p",null,"\u4f7f\u7528\u6709\u4e24\u4e2a\u573a\u666f\uff0c\u4e00\u4e2a\u662f\u52a8\u6001\u7ec4\u4ef6\uff0c\u4e00\u4e2a\u662frouter-view"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5982\u679c\u4e0d\u9700\u8981\u7f13\u5b58\uff0c\u76f4\u63a5\u8fd4\u56de\u865a\u62df\u8282\u70b9\u3002\n\n\u5982\u679c\u9700\u8981\u7f13\u5b58\uff0c\u5c31\u7528\u7ec4\u4ef6\u7684id\u548c\u6807\u7b7e\u540d\uff0c\u751f\u6210\u4e00\u4e2akey\uff0c\u628a\u5f53\u524dvnode\u7684instance\u4f5c\u4e3avalue\uff0c\u5b58\u6210\u4e00\u4e2a\u5bf9\u8c61\u3002\u8fd9\u5c31\u662f\u7f13\u5b58\u5217\u8868\n\n\u5982\u679c\u8bbe\u7f6e\u4e86\u6700\u5927\u7684\u7f13\u5b58\u6570\uff0c\u5c31\u5220\u9664\u7b2c0\u4e2a\u7f13\u5b58\u3002\u65b0\u589e\u6700\u65b0\u7684\u7f13\u5b58\u3002\n\n\u5e76\u4e14\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4e00\u4e2akeepAlive\u53d8\u91cf\u4e3atrue\uff0c\u5f53\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u4e0d\u518d\u521d\u59cb\u5316\u3002\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"include \u4f7f\u8be5\u6807\u7b7e\u4f5c\u7528\u4e8e\u6240\u6709name\u5c5e\u6027\u7684\u503c\u8ddf\u6b64\u6807\u7b7e include\u7684\u5c5e\u6027\u503c\u4e00\u81f4\u7684vue\u9875\u9762"),(0,r.kt)("li",{parentName:"ul"},"exclude \u4f7f\u8be5\u6807\u7b7e\u4e0d\u4f5c\u7528\u4e8e\u6240\u6709name\u5c5e\u6027\u7684\u503c\u8ddf\u6b64\u6807\u7b7e exclude\u7684\u5c5e\u6027\u503c\u4e00\u81f4\u7684vue\u9875\u9762")),(0,r.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"activated,deactivated\u8fd9\u4e24\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u4e00\u5b9a\u662f\u8981\u5728\u4f7f\u7528\u4e86keep-alive\u7ec4\u4ef6\u540e\u624d\u4f1a\u6709\u7684\uff0c\u5426\u5219\u5219\u4e0d\u5b58\u5728\u3002"),(0,r.kt)("li",{parentName:"ul"},"exclude\u4e0d\u662f\u7528 route\u7684name\uff1b\u800c\u662f\u7ec4\u4ef6\u7684name;")),(0,r.kt)("p",null,"\u6ce8\u610f\u4e00\u5b9a\u8981\u7ed9\u9700\u8981\u7f13\u5b58\u7684\u7ec4\u4ef6\u90fd\u5199name\u5c5e\u6027\u7684\u503c\u3002\u6211\u4e00\u5f00\u59cb\u8fd8\u4ee5\u4e3a\u662f\u8def\u7531\u7684name\u503c\uff0c\u540e\u6765\u53d1\u73b0\u641e\u9519\u4e86\n\u5f53\u5f15\u5165keep-alive\u7684\u65f6\u5019\uff0c\u9875\u9762\u7b2c\u4e00\u6b21\u8fdb\u5165\uff0c\u94a9\u5b50\u7684\u89e6\u53d1\u987a\u5e8fcreated-> mounted-> activated\uff0c\u9000\u51fa\u65f6\u89e6\u53d1deactivated\u3002\n\u5f53\u518d\u6b21\u8fdb\u5165\uff08\u524d\u8fdb\u6216\u8005\u540e\u9000\uff09\u65f6\uff0c\u53ea\u89e6\u53d1activated\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4f7f\u7528include/exclude \u5c5e\u6027\u9700\u8981\u7ed9\u6240\u6709vue\u7c7b\u7684name\u8d4b\u503c\uff08\u6ce8\u610f\u4e0d\u662f\u7ed9route\u7684name\u8d4b\u503c\uff09\uff0c\u5426\u5219 include/exclude\u4e0d\u751f\u6548\u3002\nexport default {\n name:'a', // include \u6216 exclude\u6240\u4f7f\u7528\u7684name\n data () {\n return{\n    }\n  },\n}\n")),(0,r.kt)("p",null,"\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'// \u4fdd\u6301 name\u4e3aa\u548cb\u7684\u7ec4\u4ef6\n<keep-alive include="a,b">\n    <router-view/>\n</keep-alive>\n')),(0,r.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<keep-alive include="test-keep-alive">\n  \x3c!-- \u5c06\u7f13\u5b58name\u4e3atest-keep-alive\u7684\u7ec4\u4ef6 --\x3e\n  <component></component>\n</keep-alive>\n \n<keep-alive include="a,b">\n  \x3c!-- \u5c06\u7f13\u5b58name\u4e3aa\u6216\u8005b\u7684\u7ec4\u4ef6\uff0c\u7ed3\u5408\u52a8\u6001\u7ec4\u4ef6\u4f7f\u7528 --\x3e\n  <component :is="view"></component>\n</keep-alive>\n \n\x3c!-- \u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u9700\u4f7f\u7528v-bind --\x3e\n<keep-alive :include="/a|b/">\n  <component :is="view"></component>\n</keep-alive>\n \n\x3c!-- \u52a8\u6001\u5224\u65ad --\x3e\n<keep-alive :include="includedComponents">\n  <router-view></router-view>\n</keep-alive>\n \n<keep-alive exclude="test-keep-alive">\n  \x3c!-- \u5c06\u4e0d\u7f13\u5b58name\u4e3atest-keep-alive\u7684\u7ec4\u4ef6 --\x3e\n  <component></component>\n</keep-alive>\n')),(0,r.kt)("h3",{id:"vue-router\u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570\u6267\u884c\u6d41\u7a0b\u5982\u4f55"},"vue-router\u6709\u51e0\u79cd\u94a9\u5b50\u51fd\u6570?\u6267\u884c\u6d41\u7a0b\u5982\u4f55?"),(0,r.kt)("p",null,"\u94a9\u5b50\u51fd\u6570\u6709\u4e09\u79cd\uff1a"),(0,r.kt)("p",null,"\u5168\u5c40\u5b88\u536b"),(0,r.kt)("p",null,"\u8def\u7531\u5b88\u536b"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u5b88\u536b"),(0,r.kt)("h2",{id:"vueuse\u662f\u5e72\u4ec0\u4e48\u7684"},"Vue.use\u662f\u5e72\u4ec0\u4e48\u7684?"),(0,r.kt)("p",null,"Vue.use\u662f\u7528\u6765\u4f7f\u7528\u63d2\u4ef6\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u63d2\u4ef6\u4e2d\u6269\u5c55\u5168\u5c40\u7ec4\u4ef6\u3001\u6307\u4ee4\u3001\u539f\u578b\u65b9\u6cd5\u7b49\u3002 \u4f1a\u8c03\u7528install\u65b9\u6cd5\u5c06Vue\u7684\u6784\u5efa\u51fd\u6570\u9ed8\u8ba4\u4f20\u5165\uff0c\u5728\u63d2\u4ef6\u4e2d\u53ef\u4ee5\u4f7f\u7528vue\uff0c\u65e0\u9700\u4f9d\u8d56vue\u5e93"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5199name\u6709\u5565\u597d\u5904"},"\u7ec4\u4ef6\u5199name\u6709\u5565\u597d\u5904?"),(0,r.kt)("p",null,"\u589e\u52a0name\u5c5e\u6027\uff0c\u4f1a\u5728components\u5c5e\u6027\u4e2d\u589e\u52a0\u7ec4\u4ef6\u672c\u8eab\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u7684\u9012\u5f52\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u8868\u793a\u7ec4\u4ef6\u7684\u5177\u4f53\u540d\u79f0\uff0c\u65b9\u4fbf\u8c03\u8bd5\u548c\u67e5\u627e\u5bf9\u5e94\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"vue\u7684\u4fee\u9970\u7b26\u6709\u54ea\u4e9b"},"vue\u7684\u4fee\u9970\u7b26\u6709\u54ea\u4e9b?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".stop\n\n.prevent\n\n.capture\n\n.self\n\n.once\n\n.passive\n\n.right\n\n.center\n\n.middle\n\n.alt\n")),(0,r.kt)("h2",{id:"\u5982\u4f55\u7406\u89e3\u81ea\u5b9a\u4e49\u6307\u4ee4"},"\u5982\u4f55\u7406\u89e3\u81ea\u5b9a\u4e49\u6307\u4ee4?"),(0,r.kt)("p",null,"\u5728\u751f\u6210ast\u8bed\u6cd5\u6811\u65f6\uff0c\u9047\u5230\u6307\u4ee4\u4f1a\u7ed9\u5f53\u524d\u5143\u7d20\u6dfb\u52a0directives\u5c5e\u6027"),(0,r.kt)("p",null,"\u901a\u8fc7genDirectives\u751f\u6210\u6307\u4ee4\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728patch\u524d\uff0c\u5c06\u6307\u4ee4\u7684\u94a9\u5b50\u63d0\u53d6\u5230cbs\u4e2d\uff0c\u5728patch\u8fc7\u7a0b\u4e2d\u8c03\u7528\u5bf9\u5e94\u7684\u94a9\u5b50"),(0,r.kt)("p",null,"\u5f53\u6267\u884ccbs\u5bf9\u5e94\u7684\u94a9\u5b50\u65f6\uff0c\u8c03\u7528\u5bf9\u5e94\u6307\u4ee4\u5b9a\u4e49\u65b9\u6cd5"))}m.isMDXComponent=!0}}]);