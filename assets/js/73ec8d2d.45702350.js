"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,s=p["".concat(u,".").concat(m)]||p[m]||v[m]||l;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"Vue/api-v-bind",id:"Vue/api-v-bind",title:"api-v-bind",description:"\u5b9a\u4e49",source:"@site/programming-tech/Vue/api-v-bind.md",sourceDirName:"Vue",slug:"/Vue/api-v-bind",permalink:"/Vue/api-v-bind",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/api-v-bind.md",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"v-bind\u4e0ev-model\u90fd\u662f\u7ed1\u5b9avue\u4e2ddata\u4e2d\u7684\u5c5e\u6027\u7684",id:"v-bind\u4e0ev-model\u90fd\u662f\u7ed1\u5b9avue\u4e2ddata\u4e2d\u7684\u5c5e\u6027\u7684",level:2},{value:"v-on:\u4e8b\u4ef6\u7ed1\u5b9a(\u7b80\u5199@)",id:"v-on\u4e8b\u4ef6\u7ed1\u5b9a\u7b80\u5199",level:2},{value:"Vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6.sync\uff1a",id:"vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6sync",level:2},{value:"Vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86.sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879",id:"vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879",level:2},{value:"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26",id:"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26",level:2}],d={toc:c},p="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"v-bind\u6307\u4ee4\u7528\u4e8e\u54cd\u5e94\u66f4\u65b0HTML\u7279\u6027\uff0c\u5c06\u4e00\u4e2a\u6216\u591a\u4e2aattribute\uff0c\u6216\u8005\u4e00\u4e2a\u7ec4\u4ef6prop\u52a8\u6001\u7ed1\u5b9a\u5230\u8868\u8fbe\u5f0f\u3002v-bind\u53ef\u4ee5\u7b80\u5199\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u7ed1\u5b9a attribute --\x3e\n<img v-bind:src="imageSrc">\n\n\x3c!-- \u7f29\u5199 --\x3e\n<img :src="imageSrc" >\n')),(0,a.kt)("h2",{id:"v-bind\u4e0ev-model\u90fd\u662f\u7ed1\u5b9avue\u4e2ddata\u4e2d\u7684\u5c5e\u6027\u7684"},"v-bind\u4e0ev-model\u90fd\u662f\u7ed1\u5b9avue\u4e2ddata\u4e2d\u7684\u5c5e\u6027\u7684"),(0,a.kt)("p",null,"\u4e3b\u8981\u7684\u533a\u522b\u662fv-bind\u7684\u7ed1\u5b9a\u53ea\u662f\u5355\u5411\u7684,v-bind\u4f1a\u5c06data\u4e2d\u7684\u6570\u636e\u5230\u7ed1\u5b9a\u7684\u5730\u65b9,\u5728\u88ab\u7ed1\u5b9a\u7684\u5730\u65b9\u5bf9\u6570\u636e\u4fee\u6539\u65f6,data\u4e2d\u7684\u539f\u59cb\u6570\u636e\u662f\u4e0d\u4f1a\u6539\u53d8\u7684"),(0,a.kt)("p",null,"\u800cv-model\u7684\u7ed1\u5b9a\u662f\u53cc\u5411\u7684,\u4e0d\u4ec5\u5c06data\u4e2d\u7684\u6570\u636e\u5bf9\u6807\u7b7e\u5185\u8fdb\u884c\u7ed1\u5b9a,\u8fd8\u4f1a\u5c06\u6807\u7b7e\u4e2d\u7684\u6570\u636e\u53cd\u5411\u7ed1\u5b9a\u5230data\u4e2d,\u6807\u7b7e\u6570\u636e\u6539\u53d8\u540edata\u4e2d\u7684\u6570\u636e\u4e5f\u4f1a\u540c\u6b65\u6539\u53d8\u3002"),(0,a.kt)("h2",{id:"v-on\u4e8b\u4ef6\u7ed1\u5b9a\u7b80\u5199"},"v-on:\u4e8b\u4ef6\u7ed1\u5b9a(\u7b80\u5199@)"),(0,a.kt)("h2",{id:"vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6sync"},"Vue2\u4e2d\u7684\u8bed\u6cd5\u7cd6.sync\uff1a"),(0,a.kt)("p",null,"\u5728\u7236\u7ec4\u4ef6\u4e2d\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div :title.sync="visible" ></div>\n\u7b49\u540c\u4e8e: / .sync\u5c06\u9488\u5bf9\u4e8etitle\u7684\u76d1\u542c\u4e8b\u4ef6\u7f29\u5199 /\n<div :title="visible" @update:title="visible = $event" ></div>\n\u5728\u5b50\u7ec4\u4ef6\u7684methods\u4e2d\u4f7f\u7528\u5982\u4e0b\u5c06\u65b0\u7684value\u4f20\u7ed9\u7236\u7ea7\uff1a\n\nhandleClose() {\n this.$emit(\'update:title\', newValue)\n}\n')),(0,a.kt)("h2",{id:"vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879"},"Vue3\u4e2d\u7528v-model\u66ff\u4ee3\u4e86.sync\u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684model\u9009\u9879"),(0,a.kt)("h2",{id:"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26"},"v-model\u7684\u4e09\u4e2a\u4fee\u9970\u7b26"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lazy \u52a0\u4e0a.lazy\u540e\u76f8\u5f53\u4e8e \u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u4e0d\u8d77\u4f5c\u7528\u4e86\uff0c\u5b9e\u73b0\u61d2\u52a0\u8f7d\uff0c\u8ba9\u5176\u53ea\u5728 change \u4e8b\u4ef6\u4e2d\u518d\u52a0\u8f7d\u8f93\u5165\u6846\u4e2d\u7684\u6570\u636e\uff0c\u5373\u53ea\u6709\u5728\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u6216\u8005\u6309\u56de\u8f66\u952e\u65f6\u624d\u4f1a\u66f4\u65b0 Vue \u5b9e\u4f8b\u4e2d\u7684\u503c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'lazy\uff1a\u5c06\u89e6\u53d1input\u4e8b\u4ef6\u8f6c\u4e3a\u89e6\u53d1change\u4e8b\u4ef6\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u6765\u964d\u4f4e\u6570\u636e\u540c\u6b65\u9891\u7387\u63d0\u5347\u6027\u80fd\u3002\n\n\u4f7f\u7528lazy\u53ef\u4ee5\u4f7f\u6570\u636e\u4e0d\u9700\u8981\u591a\u6b21\u91cd\u5199\uff0c\u51cf\u5c11\u6d88\u8017\u3002\n\u4f7f\u6a21\u578b\u7ed1\u5b9a\u7684\u6570\u636e\u53ea\u6709\u5728\u5931\u53bb\u7126\u70b9\u6216\u8005\u662f\u6309\u4e0b\u56de\u8f66\u65f6\u624d\u4f1a\u66f4\u65b0\n<input type="text" id="inp" v-model.lazy="message">\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"number,\u81ea\u52a8\u5c06\u7528\u6237\u7684\u8f93\u5165\u503c\u8f6c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"trim\u53bb\u9664\u9996\u5c3e\u4e24\u7aef\u7684\u7a7a\u683c")))}v.isMDXComponent=!0}}]);