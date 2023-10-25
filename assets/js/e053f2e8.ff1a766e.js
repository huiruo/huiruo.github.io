"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,p={unversionedId:"backend/nest/nest",id:"backend/nest/nest",title:"nest",description:"NestJS \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u9ad8\u5ea6\u53ef\u6269\u5c55\u3001\u677e\u6563\u8026\u5408\u3001\u5bb9\u6613\u7ef4\u62a4\u7684Node.js\u5e94\u7528\u7a0b\u5e8f\u7684\u73b0\u4ee3\u3001\u57fa\u4e8e TypeScript \u7684\u6846\u67b6\u3002",source:"@site/programming-tech/backend/nest/01-nest.md",sourceDirName:"backend/nest",slug:"/backend/nest/nest",permalink:"/backend/nest/nest",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/backend/nest/01-nest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{}},c={},l=[],s={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NestJS \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u9ad8\u5ea6\u53ef\u6269\u5c55\u3001\u677e\u6563\u8026\u5408\u3001\u5bb9\u6613\u7ef4\u62a4\u7684Node.js\u5e94\u7528\u7a0b\u5e8f\u7684\u73b0\u4ee3\u3001\u57fa\u4e8e TypeScript \u7684\u6846\u67b6\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u57fa\u4e8e TypeScript\uff1a NestJS \u662f\u57fa\u4e8e TypeScript \u6784\u5efa\u7684\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u4f7f\u7528\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u548c\u5f3a\u7c7b\u578b\u7f16\u7a0b\u6765\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf\u548c\u53ef\u7ef4\u62a4\u6027\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6a21\u5757\u5316\uff1a NestJS \u9f13\u52b1\u5c06\u5e94\u7528\u7a0b\u5e8f\u5212\u5206\u4e3a\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u5305\u542b\u76f8\u5173\u7684\u7ec4\u4ef6\u3001\u63a7\u5236\u5668\u548c\u670d\u52a1\u3002\u8fd9\u6709\u52a9\u4e8e\u4fdd\u6301\u5e94\u7528\u7a0b\u5e8f\u7684\u7ed3\u6784\u6e05\u6670\uff0c\u5e76\u652f\u6301\u53ef\u91cd\u7528\u6027\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u88c5\u9970\u5668\uff1a NestJS \u4f7f\u7528\u88c5\u9970\u5668\u6765\u5b9a\u4e49\u63a7\u5236\u5668\u3001\u670d\u52a1\u3001\u8def\u7531\u3001\u4e2d\u95f4\u4ef6\u7b49\u5143\u7d20\uff0c\u8fd9\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u76f4\u89c2\u548c\u6613\u4e8e\u7406\u89e3\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u6ce8\u5165\uff1a NestJS \u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165\u6765\u7ba1\u7406\u7ec4\u4ef6\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u8fd9\u6709\u52a9\u4e8e\u5b9e\u73b0\u677e\u6563\u8026\u5408\uff0c\u6d4b\u8bd5\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e2d\u95f4\u4ef6\uff1a NestJS \u652f\u6301\u4e2d\u95f4\u4ef6\uff0c\u5141\u8bb8\u60a8\u6267\u884c\u9884\u5904\u7406\u64cd\u4f5c\uff0c\u5982\u8eab\u4efd\u9a8c\u8bc1\u3001\u65e5\u5fd7\u8bb0\u5f55\u7b49\uff0c\u4ee5\u53ca\u5904\u7406\u8bf7\u6c42\u548c\u54cd\u5e94\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8def\u7531\uff1a NestJS \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u8def\u7531\u7cfb\u7edf\uff0c\u4f7f\u60a8\u53ef\u4ee5\u5b9a\u4e49 API \u7aef\u70b9\u548c\u8def\u7531\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\uff1a NestJS \u5141\u8bb8\u60a8\u4e0e\u5404\u79cd\u6570\u636e\u5e93\u8fdb\u884c\u96c6\u6210\uff0c\u5305\u62ec\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08\u5982 PostgreSQL\u3001MySQL\uff09\u3001NoSQL \u6570\u636e\u5e93\uff08\u5982 MongoDB\uff09\u7b49\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"WebSocket \u652f\u6301\uff1a NestJS \u652f\u6301 WebSocket \u548c WebSockets \u7684\u5b9e\u65f6\u901a\u4fe1\u3002"))))}u.isMDXComponent=!0}}]);