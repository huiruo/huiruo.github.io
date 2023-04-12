"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1715],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},59470:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"TypeORM\u548cPrisma",sidebar_position:1},i=void 0,p={unversionedId:"ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/TypeORM\u548cPrisma",id:"ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/TypeORM\u548cPrisma",title:"TypeORM\u548cPrisma",description:"TypeORM\u548cPrisma",source:"@site/programming-tech/ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/01-TypeORM\u548cPrisma.md",sourceDirName:"ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs",slug:"/ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/TypeORM\u548cPrisma",permalink:"/ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/TypeORM\u548cPrisma",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/01-TypeORM\u548cPrisma.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TypeORM\u548cPrisma",sidebar_position:1},sidebar:"docs",previous:{title:"nodejs\u4e8b\u4ef6\u5faa\u73af",permalink:"/ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/nodejs\u4e8b\u4ef6\u5faa\u73af"},next:{title:"React\u4f18\u5316",permalink:"/\u4f18\u5316/React"}},s={},c=[{value:"Prisma",id:"prisma",level:2},{value:"typeOrm",id:"typeorm",level:2}],l={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TypeORM\u548cPrisma"),(0,o.kt)("h2",{id:"prisma"},"Prisma"),(0,o.kt)("p",null,"/prizma/"),(0,o.kt)("p",null,"Prisma \u7684\u4e3b\u8981\u76ee\u7684\u662f\u4f7f\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u5728\u4e0e\u6570\u636e\u5e93\u6253\u4ea4\u9053\u65f6\u80fd\u591f\u66f4\u52a0\u9ad8\u6548"),(0,o.kt)("p",null,"\u53ea\u9700\u7ef4\u62a4\u4e00\u4efdschema.prisma\u6587\u4ef6\uff0c\u6bcf\u6b21\u6570\u636e\u5e93\u53d8\u66f4\u6267\u884c\u4e00\u4e2a\u6307\u4ee4\uff0c\u5c31\u4f1a\u5b8c\u6210\u6570\u636e\u5e93\u7684\u66f4\u65b0\uff0c\u5e76\u4e14\u751f\u6210\u4e00\u7ec4migration\u6587\u4ef6\uff0c\u5305\u62ec\u672c\u6b21\u7684\u53d8\u66f4\u540e\u7684\u6570\u636e\u5e93\u7248\u672c\uff0c\u53ca\u53d8\u66f4\u4e4b\u5904\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u72ec\u7279\u7684Schema\u5b9a\u4e49\u65b9\u5f0f\u3001\n\n\u6bd4TypeORM\u66f4\u52a0\u4e25\u8c28\u5168\u9762\u7684TS\u7c7b\u578b\u5b9a\u4e49\uff08\u5c24\u5176\u662f\u5728\u7ea7\u8054\u5173\u7cfb\u4e2d\uff09\u3001\n\n\u66f4\u5bb9\u6613\u4e0a\u624b\u548c\u66f4\u8d34\u8fd1\u539f\u751fSQL\u7684\u5404\u79cd\u64cd\u4f5c\u7b26\u7b49\n\nPrisma \u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u5e72\u51c0\uff08clean\uff09\u548c\u7c7b\u578b\u5b89\u5168\uff08type-safe\uff09\u7684 API \u6765\u63d0\u4ea4\u6570\u636e\u5e93\u67e5\u8be2\uff0c\u540c\u65f6\u8fd4\u56de\u4e00\u4e2a\u666e\u901a JavaScript \u5bf9\u8c61\uff08plain old JavaScript object\uff09\uff0c\u6765\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u5bb9\u6613\u5730\u8fdb\u884c\u6570\u636e\u5e93\u67e5\u8be2\n\n\u63d0\u4f9bVS Code\u7f16\u8f91\u5668\u6269\u5c55\u63d2\u4ef6\u3001\u8bed\u6cd5\u9ad8\u4eae\u3001\u667a\u80fd\u81ea\u52a8\u8865\u5168\n\nPrisma \u662f TypeScript \u751f\u6001\u4e2d\u552f\u4e00\u4e00\u4e2a\xa0\u5f7b\u5e95\xa0\u7684\u7c7b\u578b\u5b89\u5168 ORM\n")),(0,o.kt)("h2",{id:"typeorm"},"typeOrm"),(0,o.kt)("p",null,"\u4eae\u70b9\u5728\u57fa\u4e8e\u88c5\u9970\u5668\u8bed\u6cd5\u58f0\u660e\u8868\u7ed3\u6784\u3001\u4e8b\u52a1\u3001\u7ea7\u8054\u7b49\uff0c\u4ee5\u53ca\u5f88\u68d2\u7684TS\u652f\u6301"))}u.isMDXComponent=!0}}]);