"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,v=c["".concat(l,".").concat(k)]||c[k]||s[k]||a;return n?o.createElement(v,p(p({ref:t},m),{},{components:n})):o.createElement(v,p({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Vue",sidebar_position:2},p=void 0,i={unversionedId:"web-optimization/Vue",id:"web-optimization/Vue",title:"Vue",description:"\u4ee3\u7801\u5c42\u9762",source:"@site/programming-tech/web-optimization/02-Vue.md",sourceDirName:"web-optimization",slug:"/web-optimization/Vue",permalink:"/web-optimization/Vue",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/web-optimization/02-Vue.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Vue",sidebar_position:2},sidebar:"docs",previous:{title:"React",permalink:"/web-optimization/React"},next:{title:"CDN-\u5185\u5bb9\u5206\u53d1\u7f51\u7edc",permalink:"/web-optimization/CDN-\u5185\u5bb9\u5206\u53d1\u7f51\u7edc"}},l={},u=[{value:"\u4ee3\u7801\u5c42\u9762",id:"\u4ee3\u7801\u5c42\u9762",level:2},{value:"\u62c6\u5206\u7ec4\u4ef6",id:"\u62c6\u5206\u7ec4\u4ef6",level:3},{value:"\u5408\u7406\u8bbe\u7f6e key,\u4f5c\u7528\u4e3b\u8981\u662f\u4e3a\u4e86\u9ad8\u6548\u7684\u66f4\u65b0\u865a\u62df DOM",id:"\u5408\u7406\u8bbe\u7f6e-key\u4f5c\u7528\u4e3b\u8981\u662f\u4e3a\u4e86\u9ad8\u6548\u7684\u66f4\u65b0\u865a\u62df-dom",level:3},{value:"\u7eaf\u5c55\u793a\u6027\u7684\u9759\u6001\u6570\u636e\u4e0d\u8981\u653e data\uff0c\u5408\u7406\u7684\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u7eaf\u5c55\u793a\u6027\u7684\u9759\u6001\u6570\u636e\u4e0d\u8981\u653e-data\u5408\u7406\u7684\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u6570\u636e",level:3},{value:"\u5408\u7406\u4f7f\u7528 api",id:"\u5408\u7406\u4f7f\u7528-api",level:2},{value:"v-show(\u9891\u7e41\u5207\u6362\u6027\u80fd\u9ad8)\u548c v-if \u7684\u5408\u7406\u4f7f\u7528",id:"v-show\u9891\u7e41\u5207\u6362\u6027\u80fd\u9ad8\u548c-v-if-\u7684\u5408\u7406\u4f7f\u7528",level:3},{value:"v-for \u904d\u5386\u907f\u514d\u540c\u65f6\u4f7f\u7528 v-if",id:"v-for-\u904d\u5386\u907f\u514d\u540c\u65f6\u4f7f\u7528-v-if",level:3},{value:"\u865a\u62df\u6eda\u52a8\u3001\u65f6\u95f4\u5206\u7247\u7b49\u7b56\u7565",id:"\u865a\u62df\u6eda\u52a8\u65f6\u95f4\u5206\u7247\u7b49\u7b56\u7565",level:2},{value:"webpack \u914d\u7f6e\u5c42",id:"webpack-\u914d\u7f6e\u5c42",level:2},{value:"\u7ec4\u4ef6\u7684\u5f02\u6b65\u52a0\u8f7d\uff08\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6\uff09",id:"\u7ec4\u4ef6\u7684\u5f02\u6b65\u52a0\u8f7d\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6",level:3},{value:"vue \u4ee3\u7801\u5c42:\u8def\u7531\u61d2\u52a0\u8f7d",id:"vue-\u4ee3\u7801\u5c42\u8def\u7531\u61d2\u52a0\u8f7d",level:3}],m={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ee3\u7801\u5c42\u9762"},"\u4ee3\u7801\u5c42\u9762"),(0,r.kt)("h3",{id:"\u62c6\u5206\u7ec4\u4ef6"},"\u62c6\u5206\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5f53\u89e6\u53d1\u66f4\u65b0\u7684\u65f6\u5019\u8282\u70b9\u90fd\u4f1a patch--\x3ediff,\u6240\u4ee5\u5c3d\u91cf\u628a\u5927\u7ec4\u4ef6\u62bd\u79bb\u6210\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5728 Vue.js \u4e2d\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u7684\u6e32\u67d3\u548c\u66f4\u65b0\u662f\u7531\u6570\u636e\u9a71\u52a8\u7684\uff0c\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0cVue \u4f1a\u91cd\u65b0\u6e32\u67d3\u76f8\u5173\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5c06\u6240\u6709\u7684\u5e03\u5c40\u548c\u89c6\u56fe\u903b\u8f91\u90fd\u5199\u5728\u4e00\u4e2a\u5927\u7684\u7ec4\u4ef6\u4e2d\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u53d8\u5f97\u975e\u5e38\u5e9e\u5927\uff0c\u5176\u4e2d\u5305\u542b\u5927\u91cf\u7684\u6a21\u677f\u4ee3\u7801\u3001\u8ba1\u7b97\u5c5e\u6027\u3001\u65b9\u6cd5\u7b49\u3002\u5f53\u6570\u636e\u53d8\u66f4\u65f6\uff0cVue \u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u6574\u4e2a\u7ec4\u4ef6\u7684\u865a\u62df DOM\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u9645 DOM \u8fdb\u884c\u6bd4\u8f83\uff0c\u4ee5\u786e\u5b9a\u9700\u8981\u66f4\u65b0\u7684\u90e8\u5206\uff0c\u7136\u540e\u8fdb\u884c\u66f4\u65b0\u64cd\u4f5c\u3002\u5982\u679c\u7ec4\u4ef6\u592a\u5927\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u80fd\u4f1a\u53d8\u5f97\u76f8\u5bf9\u8f83\u6162\uff0c\u5bfc\u81f4\u9875\u9762\u6e32\u67d3\u901f\u5ea6\u4e0b\u964d\uff0c\u4ece\u800c\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002"),(0,r.kt)("p",null,"\u5c06\u7ec4\u4ef6\u62c6\u5206\u6210\u5c0f\u7684\u3001\u53ef\u91cd\u7528\u7684\u90e8\u5206\u6709\u52a9\u4e8e\u63d0\u9ad8\u6027\u80fd\uff0c\u56e0\u4e3a\u8fd9\u6837\u53ea\u6709\u76f8\u5173\u7684\u7ec4\u4ef6\u4f1a\u5728\u6570\u636e\u53d8\u66f4\u65f6\u91cd\u65b0\u6e32\u67d3\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u5927\u7ec4\u4ef6\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7 Vue \u7684\u7ec4\u4ef6\u5316\u7279\u6027\u6765\u5b9e\u73b0\uff0c\u5c06\u9875\u9762\u5206\u89e3\u4e3a\u591a\u4e2a\u5c0f\u7ec4\u4ef6\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u8d1f\u8d23\u7279\u5b9a\u7684\u529f\u80fd\u6216\u89c6\u56fe\u3002\u8fd9\u6837\u53ef\u4ee5\u66f4\u5bb9\u6613\u7ef4\u62a4\u548c\u4f18\u5316\u5e94\u7528\u7a0b\u5e8f\uff0c\u63d0\u9ad8\u6e32\u67d3\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002"),(0,r.kt)("h3",{id:"\u5408\u7406\u8bbe\u7f6e-key\u4f5c\u7528\u4e3b\u8981\u662f\u4e3a\u4e86\u9ad8\u6548\u7684\u66f4\u65b0\u865a\u62df-dom"},"\u5408\u7406\u8bbe\u7f6e key,\u4f5c\u7528\u4e3b\u8981\u662f\u4e3a\u4e86\u9ad8\u6548\u7684\u66f4\u65b0\u865a\u62df DOM"),(0,r.kt)("p",null,"Vue \u5728 patch \u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7 key \u53ef\u4ee5\u5224\u65ad\u4e24\u4e2a\u865a\u62df\u8282\u70b9\u662f\u5426\u662f\u76f8\u540c\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u6ca1\u6709 key \u4f1a\u5bfc\u81f4\u66f4\u65b0\u7684\u65f6\u5019\u51fa\u95ee\u9898,\u5c3d\u91cf\u4e0d\u8981\u91c7\u7528\u7d22\u5f15\u4f5c\u4e3a key\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u4f7f\u7528 key \u6765\u7ed9\u6bcf\u4e2a\u8282\u70b9\u505a\u4e00\u4e2a\u552f\u4e00\u6807\u8bc6\uff0cDiff \u7b97\u6cd5\u5c31\u53ef\u4ee5\u6b63\u786e\u7684\u8bc6\u522b\u6b64\u8282\u70b9\u3002"),(0,r.kt)("h3",{id:"\u7eaf\u5c55\u793a\u6027\u7684\u9759\u6001\u6570\u636e\u4e0d\u8981\u653e-data\u5408\u7406\u7684\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u6570\u636e"},"\u7eaf\u5c55\u793a\u6027\u7684\u9759\u6001\u6570\u636e\u4e0d\u8981\u653e data\uff0c\u5408\u7406\u7684\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u6570\u636e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7eaf\u5c55\u793a\u6027\u7684\u9759\u6001\u6570\u636e\u4e0d\u8981\u653e data"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u90a3\u4e9b\u7eaf\u5c55\u793a\u6027\u7684\u9759\u6001\u6570\u636e\uff0c\u5c06\u5b83\u4eec\u653e\u5728 data \u4e2d\u53ef\u80fd\u4f1a\u6d6a\u8d39\u6027\u80fd\u548c\u5185\u5b58\uff0c\u56e0\u4e3a Vue \u4f1a\u76d1\u89c6\u8fd9\u4e9b\u6570\u636e\u7684\u53d8\u5316\uff0c\u5c3d\u7ba1\u5b83\u4eec\u5b9e\u9645\u4e0a\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u653e\u8fdb computed \u4e2d:\n\u56e0\u4e3a\u6211\u4eec\u7684 computedList \u4e2d\uff0c\u6ca1\u6709\u4f9d\u8d56\uff0c\u5373\u6ca1\u6709\u4efb\u4f55\u8bbf\u95ee\u54cd\u5e94\u5f0f\u6570\u636e\uff08\u5982 data/props \u4e0a\u7684\u5c5e\u6027/\u5176\u4ed6\u4f9d\u8d56\u8fc7\u7684 computed \u7b49\uff09\u7684\u64cd\u4f5c\uff0c\u6839\u636e Vue \u7684\u4f9d\u8d56\u6536\u96c6\u673a\u5236\uff0c\n\u53ea\u6709\u5728 computed \u4e2d\u5f15\u7528\u4e86\u5b9e\u4f8b\u5c5e\u6027\uff0c\u89e6\u53d1\u4e86\u5c5e\u6027\u7684 getter\uff0cgetter \u4f1a\u628a\u4f9d\u8d56\u6536\u96c6\u8d77\u6765\uff0c\u7b49\u5230 setter \u8c03\u7528\u540e\uff0c\u66f4\u65b0\u76f8\u5173\u7684\u4f9d\u8d56\u9879"))),(0,r.kt)("h2",{id:"\u5408\u7406\u4f7f\u7528-api"},"\u5408\u7406\u4f7f\u7528 api"),(0,r.kt)("h3",{id:"v-show\u9891\u7e41\u5207\u6362\u6027\u80fd\u9ad8\u548c-v-if-\u7684\u5408\u7406\u4f7f\u7528"},"v-show(\u9891\u7e41\u5207\u6362\u6027\u80fd\u9ad8)\u548c v-if \u7684\u5408\u7406\u4f7f\u7528"),(0,r.kt)("h3",{id:"v-for-\u904d\u5386\u907f\u514d\u540c\u65f6\u4f7f\u7528-v-if"},"v-for \u904d\u5386\u907f\u514d\u540c\u65f6\u4f7f\u7528 v-if"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../Vue/%E9%97%AE%E9%A2%98-v-if%E5%92%8Cv-for-%E5%89%8D%E8%80%85%E4%BC%98%E5%85%88%E7%BA%A7%E6%9B%B4%E9%AB%98"},"v-if \u548c v-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8")),(0,r.kt)("h2",{id:"\u865a\u62df\u6eda\u52a8\u65f6\u95f4\u5206\u7247\u7b49\u7b56\u7565"},"\u865a\u62df\u6eda\u52a8\u3001\u65f6\u95f4\u5206\u7247\u7b49\u7b56\u7565"),(0,r.kt)("p",null,"vue-virtual-scroll-list,\u865a\u62df\u6eda\u52a8\u5217\u8868\u6765\u652f\u6301\u5927\u6570\u636e"),(0,r.kt)("h2",{id:"webpack-\u914d\u7f6e\u5c42"},"webpack \u914d\u7f6e\u5c42"),(0,r.kt)("p",null,"\u91c7\u7528\u5f02\u6b65\u7ec4\u4ef6 -> \u501f\u52a9 webpack \u7684\u5206\u5305\u7b56\u7565"),(0,r.kt)("h3",{id:"\u7ec4\u4ef6\u7684\u5f02\u6b65\u52a0\u8f7d\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6"},"\u7ec4\u4ef6\u7684\u5f02\u6b65\u52a0\u8f7d\uff08\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6\uff09"),(0,r.kt)("p",null,"\u7528 require \u8fd9\u79cd\u65b9\u5f0f\u5f15\u5165\u7684\u65f6\u5019\uff0c\u4f1a\u5c06\u4f60\u7684 component \u5206\u522b\u6253\u5305\u6210\u4e0d\u540c\u7684 js\uff0c\u52a0\u8f7d\u7684\u65f6\u5019\u4e5f\u662f\u6309\u9700\u52a0\u8f7d\uff0c\u53ea\u7528\u8bbf\u95ee\u8fd9\u4e2a\u8def\u7531\u7f51\u5740\u65f6\u624d\u4f1a\u52a0\u8f7d\u8fd9\u4e2a js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  component: (resolve) => require(["@/view/index.vue"], resolve);\n}\n')),(0,r.kt)("p",null,"\u975e\u61d2\u52a0\u8f7d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  component: index;\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u7528 import \u5f15\u5165\u7684\u8bdd\uff0c\u5f53\u9879\u76ee\u6253\u5305\u65f6\u8def\u7531\u91cc\u7684\u6240\u6709 component \u90fd\u4f1a\u6253\u5305\u5728\u4e00\u4e2a js \u4e2d\uff0c\u9020\u6210\u8fdb\u5165\u9996\u9875\u65f6\uff0c\u9700\u8981\u52a0\u8f7d\u7684\u5185\u5bb9\u8fc7\u591a\uff0c\u65f6\u95f4\u76f8\u5bf9\u6bd4\u8f83\u957f\nvue \u7684\u8def\u7531\u914d\u7f6e\u6587\u4ef6(routers.js)\uff0c\u4e00\u822c\u4f7f\u7528 import \u5f15\u5165\u7684\u5199\u6cd5\uff0c\u5f53\u9879\u76ee\u6253\u5305\u65f6\u8def\u7531\u91cc\u7684\u6240\u6709 component \u90fd\u4f1a\u6253\u5305\u5728\u4e00\u4e2a js \u4e2d\uff0c\u5728\u9879\u76ee\u521a\u8fdb\u5165\u9996\u9875\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u52a0\u8f7d\u6240\u6709\u7684\u7ec4\u4ef6\uff0c\u6240\u4ee5\u5bfc\u81f4\u9996\u9875\u52a0\u8f7d\u8f83\u6162\uff0c\n\u800c\u7528 require \u4f1a\u5c06 component \u5206\u522b\u6253\u5305\u6210\u4e0d\u540c\u7684 js\uff0c\u6309\u9700\u52a0\u8f7d\uff0c\u8bbf\u95ee\u6b64\u8def\u7531\u65f6\u624d\u4f1a\u52a0\u8f7d\u8fd9\u4e2a js\uff0c\u6240\u4ee5\u5c31\u907f\u514d\u8fdb\u5165\u9996\u9875\u65f6\u52a0\u8f7d\u5185\u5bb9\u8fc7\u591a\u3002"),(0,r.kt)("h3",{id:"vue-\u4ee3\u7801\u5c42\u8def\u7531\u61d2\u52a0\u8f7d"},"vue \u4ee3\u7801\u5c42:\u8def\u7531\u61d2\u52a0\u8f7d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"require: \u8fd0\u884c\u65f6\u8c03\u7528\uff0c\u7406\u8bba\u4e0a\u53ef\u4ee5\u8fd0\u7528\u5728\u4ee3\u7801\u7684\u4efb\u4f55\u5730\u65b9\uff0c"),(0,r.kt)("li",{parentName:"ul"},"import\uff1a\u7f16\u8bd1\u65f6\u8c03\u7528\uff0c\u5fc5\u987b\u653e\u5728\u6587\u4ef6\u5f00\u5934")),(0,r.kt)("p",null,"Vue \u662f\u5355\u9875\u9762\u5e94\u7528\uff0c\u53ef\u80fd\u4f1a\u6709\u5f88\u591a\u7684\u8def\u7531\u5f15\u5165 \uff0c\u8fd9\u6837\u4f7f\u7528 webpcak \u6253\u5305\u540e\u7684\u6587\u4ef6\u5f88\u5927\uff0c\u5f53\u8fdb\u5165\u9996\u9875\u65f6\uff0c\u52a0\u8f7d\u7684\u8d44\u6e90\u8fc7\u591a\uff0c\u9875\u9762\u4f1a\u51fa\u73b0\u767d\u5c4f\u7684\u60c5\u51b5\uff0c\u4e0d\u5229\u4e8e\u7528\u6237\u4f53\u9a8c\u3002"),(0,r.kt)("p",null,"\u8def\u7531\u61d2\u52a0\u8f7d\u65b9\u6cd5:\u901a\u8fc7\u5f02\u6b65\u7ec4\u4ef6\u548c webpack \u4ee3\u7801\u5206\u5272\uff0c\u5b9e\u73b0\u8def\u7531\u61d2\u52a0\u8f7d\uff0c\u6309\u9700\u52a0\u8f7d\uff0c\u63d0\u5347\u8def\u7531\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u3002\n\u901a\u8fc7\u5de5\u5382\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u5f02\u6b65\u52a0\u8f7d\u7ec4\u4ef6\nimport() \u8fd4\u56de\u4e00\u4e2a promise \u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Foo = () => import("./Foo.vue");\nconst router = new VueRouter({\n  routes: [\n    {\n      path: "/foo",\n      component: () => import("./Foo.vue"),\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"\u5f53\u9875\u9762\u5f88\u591a\uff0c\u7ec4\u4ef6\u5f88\u591a\u7684\u65f6\u5019\uff0cSPA \u9875\u9762\u5728\u9996\u6b21\u52a0\u8f7d\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u53d8\u7684\u5f88\u6162\u3002\u8fd9\u662f\u56e0\u4e3a vue \u9996\u6b21\u52a0\u8f7d\u7684\u65f6\u5019\u628a\u53ef\u80fd\u4e00\u5f00\u59cb\u770b\u4e0d\u89c1\u7684\u7ec4\u4ef6\u4e5f\u4e00\u6b21\u52a0\u8f7d\u4e86\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u5bf9\u9875\u9762\u8fdb\u884c\u4f18\u5316\uff0c\u5c31\u9700\u8981\u5f02\u6b65\u7ec4\u4ef6\u4e86\n\u4ec0\u4e48\u662f\u5f02\u6b65\u7ec4\u4ef6\uff1f\n\u5f02\u6b65\u7ec4\u4ef6\u5c31\u662f\u5b9a\u4e49\u7684\u65f6\u5019\u4ec0\u4e48\u90fd\u4e0d\u505a\uff0c\u53ea\u5728\u7ec4\u4ef6\u9700\u8981\u6e32\u67d3\uff08\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u663e\u793a\uff09\u7684\u65f6\u5019\u8fdb\u884c\u52a0\u8f7d\u6e32\u67d3\u5e76\u7f13\u5b58\uff0c\u7f13\u5b58\u662f\u4ee5\u5907\u4e0b\u6b21\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u7528\u5f02\u6b65\u7ec4\u4ef6?"),(0,r.kt)("p",null,"\u5728\u5927\u578b\u5e94\u7528\u4e2d\uff0c\u529f\u80fd\u4e0d\u505c\u5730\u7d2f\u52a0\u540e\uff0c\u6838\u5fc3\u9875\u9762\u5df2\u7ecf\u4e0d\u582a\u91cd\u8d1f\uff0c\u8bbf\u95ee\u901f\u5ea6\u6108\u6765\u6108\u6162\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6211\u4eec\u9700\u8981\u5c06\u5e94\u7528\u5206\u5272\u6210\u5c0f\u4e00\u4e9b\u7684\u4ee3\u7801\u5757\uff0c\u5e76\u4e14\u53ea\u5728\u9700\u8981\u7684\u65f6\u5019\u624d\u4ece\u670d\u52a1\u5668\u52a0\u8f7d\u4e00\u4e2a\u6a21\u5757\uff0c\u4ece\u800c\u63d0\u9ad8\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"webpack \u548c ES6 \u8fd4\u56de\u4e00\u4e2a Promise\uff08\u63a8\u8350\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u4e0b\u97622\u884c\u4ee3\u7801\uff0c\u6ca1\u6709\u6307\u5b9awebpackChunkName\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u6253\u5305\u6210\u4e00\u4e2ajs\u6587\u4ef6\u3002\n// \u5982\u679c\u6211\u4eec\u60f3\u628a\u4e00\u4e9b\u7ec4\u4ef6\u548c\u67d0\u4e00\u4e2a\u5b50\u7ec4\u4ef6\u4e00\u8d77\u6253\u5305\u4e3a\u4ee3\u7801\u5757\uff0c\u901a\u8fc7\u6dfb\u52a0\u6ce8\u91ca\u7684\u65b9\u5f0f\u5373\u53ef\nconst ImportFuncDemo1 = () => import("../components/ImportFuncDemo1");\nconst ImportFuncDemo2 = () => import("../components/ImportFuncDemo2");\n// \u4e0b\u97622\u884c\u4ee3\u7801\uff0c\u6307\u5b9a\u4e86\u76f8\u540c\u7684webpackChunkName\uff0c\u4f1a\u5408\u5e76\u6253\u5305\u6210\u4e00\u4e2ajs\u6587\u4ef6\u3002\n// const ImportFuncDemo = () => import(/* webpackChunkName: \'ImportFuncDemo\' */ \'../components/ImportFuncDemo\')\n// const ImportFuncDemo2 = () => import(/* webpackChunkName: \'ImportFuncDemo\' */ \'../components/ImportFuncDemo2\')\nexport default new Router({\n  routes: [\n    {\n      path: "/importfuncdemo1",\n      name: "ImportFuncDemo1",\n      component: ImportFuncDemo1,\n    },\n    {\n      path: "/importfuncdemo2",\n      name: "ImportFuncDemo2",\n      component: ImportFuncDemo2,\n    },\n  ],\n});\n')))}s.isMDXComponent=!0}}]);