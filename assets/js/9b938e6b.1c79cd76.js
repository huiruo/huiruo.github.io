"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(n),v=r,d=s["".concat(u,".").concat(v)]||s[v]||m[v]||i;return n?l.createElement(d,o(o({ref:t},c),{},{components:n})):l.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}v.displayName="MDXCreateElement"},32437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const i={},o=void 0,a={unversionedId:"Vue/vue3/vue3-\u5e38\u7528",id:"Vue/vue3/vue3-\u5e38\u7528",title:"vue3-\u5e38\u7528",description:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f",source:"@site/programming-tech/Vue/vue3/01-vue3-\u5e38\u7528.md",sourceDirName:"Vue/vue3",slug:"/Vue/vue3/vue3-\u5e38\u7528",permalink:"/Vue/vue3/vue3-\u5e38\u7528",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/vue3/01-vue3-\u5e38\u7528.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"api-reactive\u548cref\u4f7f\u7528\u533a\u522b",permalink:"/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b"},next:{title:"\u54cd\u5e94\u5f0f\u539f\u7406\u4e0ereactive",permalink:"/Vue/01-3-\u54cd\u5e94\u5f0f\u539f\u7406\u4e0ereactive"}},u={},p=[{value:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f",id:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f",level:2},{value:"class",id:"class",level:2},{value:"Vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6.sync\uff1a",id:"vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6sync",level:2},{value:"Vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86.sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879",id:"vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879",level:2},{value:"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26",id:"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26",level:2},{value:"\u5728 vue3 \u4e2d\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26\uff1a",id:"\u5728-vue3-\u4e2d\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26",level:2},{value:"vue3\u7684emit($emit, emits-options)",id:"vue3\u7684emitemit-emits-options",level:2},{value:"vue 2",id:"vue-2",level:3}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f"},"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5bf9\u8c61\n:style=\"{ color: activeColor, fontSize: fontSize + 'px' }\"\n\n\u6570\u7ec4\n:style=\"[{color:(index==0?conFontColor:'#000')},{fontSize:'20px'}]\n\n\u4e09\u76ee\n:style=\"{color:(index==0?conFontColor:'#000')}\"\n")),(0,r.kt)("h2",{id:"class"},"class"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/lwming/p/10925318.html"},"https://www.cnblogs.com/lwming/p/10925318.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5bf9\u8c61\n:class=\"{'p1' : true}\"\n\n\u6570\u7ec4\n:class=\"[{'p1': false}, 'p2']\"\n\n\u4e09\u76ee\n:class=\"[ 1 < 2 ? 'p1' : 'p' ]\"\n")),(0,r.kt)("h2",{id:"vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6sync"},"Vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6.sync\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u5728\u7236\u7ec4\u4ef6\u4e2d\u7684\n<div :title.sync="visible" ></div>\n\u7b49\u540c\u4e8e: / .sync\u5c06\u9488\u5bf9\u4e8etitle\u7684\u76d1\u542c\u4e8b\u4ef6\u7f29\u5199 /\n<div :title="visible" @update:title="visible = $event" ></div>\n\u5728\u5b50\u7ec4\u4ef6\u7684methods\u4e2d\u4f7f\u7528\u5982\u4e0b\u5c06\u65b0\u7684value\u4f20\u7ed9\u7236\u7ea7\uff1a\n\nhandleClose() {\n this.$emit(\'update:title\', newValue)\n}\n')),(0,r.kt)("h2",{id:"vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879"},"Vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86.sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div v-model="visible" ></div>\n\u6ca1\u6709\u53c2\u6570\u4f46\u5374\u5b9e\u9645\u4e0a\u5728\u7236\u7ec4\u4ef6\u5185\u4f20\u5165modelValue\uff0c\u7c7b\u4f3c\u4e8e\uff1a\nv-model:modelValue="visible" @updata:modelValue="visible =$event"\n\u5728\u7236\u7ec4\u4ef6\u91cc\u662f\u8fd0\u7528visible,\u5728\u5b50\u7ec4\u4ef6\u91cc\u4f20\u5165\u7684props\u91cc\u7684\u662fmodelValue.\n\u66f4\u6539\u53c2\u6570\uff0c\u4f20\u5165\u7236\u7ea7\u4e5f\u662f\u7528modelValue\n\nthis.$emit(\'update:modelValue\', newValue)\n')),(0,r.kt)("h2",{id:"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26"},"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lazy \u52a0\u4e0a.lazy\u540e\u76f8\u5f53\u4e8e \u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u4e0d\u8d77\u4f5c\u7528\u4e86\uff0c\u5b9e\u73b0\u61d2\u52a0\u8f7d\uff0c\u8ba9\u5176\u53ea\u5728 change \u4e8b\u4ef6\u4e2d\u518d\u52a0\u8f7d\u8f93\u5165\u6846\u4e2d\u7684\u6570\u636e\uff0c\u5373\u53ea\u6709\u5728\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u6216\u8005\u6309\u56de\u8f66\u952e\u65f6\u624d\u4f1a\u66f4\u65b0 Vue \u5b9e\u4f8b\u4e2d\u7684\u503c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'lazy\uff1a\u5c06\u89e6\u53d1input\u4e8b\u4ef6\u8f6c\u4e3a\u89e6\u53d1change\u4e8b\u4ef6\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u6765\u964d\u4f4e\u6570\u636e\u540c\u6b65\u9891\u7387\u63d0\u5347\u6027\u80fd\u3002\n\n\u4f7f\u7528lazy\u53ef\u4ee5\u4f7f\u6570\u636e\u4e0d\u9700\u8981\u591a\u6b21\u91cd\u5199\uff0c\u51cf\u5c11\u6d88\u8017\u3002\n\u4f7f\u6a21\u578b\u7ed1\u5b9a\u7684\u6570\u636e\u53ea\u6709\u5728\u5931\u53bb\u7126\u70b9\u6216\u8005\u662f\u6309\u4e0b\u56de\u8f66\u65f6\u624d\u4f1a\u66f4\u65b0\n<input type="text" id="inp" v-model.lazy="message">\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"number,\u81ea\u52a8\u5c06\u7528\u6237\u7684\u8f93\u5165\u503c\u8f6c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"trim\u53bb\u9664\u9996\u5c3e\u4e24\u7aef\u7684\u7a7a\u683c")),(0,r.kt)("h2",{id:"\u5728-vue3-\u4e2d\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26"},"\u5728 vue3 \u4e2d\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://juejin.cn/post/6877745193097887751\n")),(0,r.kt)("h2",{id:"vue3\u7684emitemit-emits-options"},"vue3\u7684emit($emit, emits-options)"),(0,r.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <button @click="clickBtn" class="btn-item">hi~</button>\n  </div>\n</template>\n<script>\nimport { defineComponent } from \'vue\'\nexport default defineComponent({\n  setup (props, ctx) {\n    const clickBtn = () => {\n      ctx.emit("on-change", "hi~");\n    };\n    return { clickBtn}\n  }\n})\n<\/script>\n')),(0,r.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <emit-child @on-change="emitFn" />\n  </div>\n</template>\n')),(0,r.kt)("h3",{id:"vue-2"},"vue 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n<div>\n  <button @click="onEmit"> \u5b50\u7ec4\u4ef6\u900f\u4f20\u4e8b\u4ef6 </button>\n</div>\n</template>\n<script>\nexport default {\n  methods: {\n    onEmit() {\n      this.$emit("on-change", "hi~");\n    }\n  }\n}\n<\/script>\n\n\u7236\u7ec4\u4ef6\n<template>\n<div>\n  < child @on-change="onChildChange" />\n</div>\n</template>\n<script>\nimport Child from "./Child.vue";\nexport default {\n  components: {\n    Child\n  },\n  methods: {\n    onChildChange(v) {\n      console.log(v); // hi~\n    }\n  }\n}\n<\/script>\n')))}m.isMDXComponent=!0}}]);