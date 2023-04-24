"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),v=o,d=s["".concat(c,".").concat(v)]||s[v]||m[v]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=v;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},32437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},l=void 0,a={unversionedId:"Vue/vue3/vue3-\u5e38\u7528",id:"Vue/vue3/vue3-\u5e38\u7528",title:"vue3-\u5e38\u7528",description:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f",source:"@site/programming-tech/Vue/vue3/01-vue3-\u5e38\u7528.md",sourceDirName:"Vue/vue3",slug:"/Vue/vue3/vue3-\u5e38\u7528",permalink:"/Vue/vue3/vue3-\u5e38\u7528",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/vue3/01-vue3-\u5e38\u7528.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"api-reactive\u548cref\u4f7f\u7528\u533a\u522b",permalink:"/Vue/vue3/api-reactive\u548cref\u4f7f\u7528\u533a\u522b"},next:{title:"baseCompile\u751f\u6210ast-\u9759\u6001\u63d0\u5347-vnode-patch",permalink:"/Vue/baseCompile\u751f\u6210ast-\u9759\u6001\u63d0\u5347-vnode-patch"}},c={},p=[{value:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f",id:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f",level:2},{value:"class",id:"class",level:2},{value:"vue3\u7684emit($emit, emits-options)",id:"vue3\u7684emitemit-emits-options",level:2},{value:"vue2 emit",id:"vue2-emit",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f"},"vue\u52a8\u6001\u6dfb\u52a0style\u6837\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5bf9\u8c61\n:style=\"{ color: activeColor, fontSize: fontSize + 'px' }\"\n\n\u6570\u7ec4\n:style=\"[{color:(index==0?conFontColor:'#000')},{fontSize:'20px'}]\n\n\u4e09\u76ee\n:style=\"{color:(index==0?conFontColor:'#000')}\"\n")),(0,o.kt)("h2",{id:"class"},"class"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/lwming/p/10925318.html"},"https://www.cnblogs.com/lwming/p/10925318.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5bf9\u8c61\n:class=\"{'p1' : true}\"\n\n\u6570\u7ec4\n:class=\"[{'p1': false}, 'p2']\"\n\n\u4e09\u76ee\n:class=\"[ 1 < 2 ? 'p1' : 'p' ]\"\n")),(0,o.kt)("h2",{id:"vue3\u7684emitemit-emits-options"},"vue3\u7684emit($emit, emits-options)"),(0,o.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <button @click="clickBtn" class="btn-item">hi~</button>\n  </div>\n</template>\n<script>\nimport { defineComponent } from \'vue\'\nexport default defineComponent({\n  setup (props, ctx) {\n    const clickBtn = () => {\n      ctx.emit("on-change", "hi~");\n    };\n    return { clickBtn}\n  }\n})\n<\/script>\n')),(0,o.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div>\n    <emit-child @on-change="emitFn" />\n  </div>\n</template>\n')),(0,o.kt)("h3",{id:"vue2-emit"},"vue2 emit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n<div>\n  <button @click="onEmit"> \u5b50\u7ec4\u4ef6\u900f\u4f20\u4e8b\u4ef6 </button>\n</div>\n</template>\n<script>\nexport default {\n  methods: {\n    onEmit() {\n      this.$emit("on-change", "hi~");\n    }\n  }\n}\n<\/script>\n\n\u7236\u7ec4\u4ef6\n<template>\n<div>\n  < child @on-change="onChildChange" />\n</div>\n</template>\n<script>\nimport Child from "./Child.vue";\nexport default {\n  components: {\n    Child\n  },\n  methods: {\n    onChildChange(v) {\n      console.log(v); // hi~\n    }\n  }\n}\n<\/script>\n')))}m.isMDXComponent=!0}}]);