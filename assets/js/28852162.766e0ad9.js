"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9377],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,p=function(t,e){if(null==t)return{};var n,l,p={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},T="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var n=t.components,p=t.mdxType,r=t.originalType,o=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),T=u(n),h=p,m=T["".concat(o,".").concat(h)]||T[h]||k[h]||r;return n?l.createElement(m,i(i({ref:e},c),{},{components:n})):l.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var r=n.length,i=new Array(r);i[0]=h;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a[T]="string"==typeof t?t:p,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56244:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var l=n(87462),p=(n(67294),n(3905));const r={},i=void 0,a={unversionedId:"web-optimization/\u5347\u7ea7http2",id:"web-optimization/\u5347\u7ea7http2",title:"\u5347\u7ea7http2",description:"http2\u7279\u70b9",source:"@site/programming-tech/web-optimization/\u5347\u7ea7http2.md",sourceDirName:"web-optimization",slug:"/web-optimization/\u5347\u7ea7http2",permalink:"/web-optimization/\u5347\u7ea7http2",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/web-optimization/\u5347\u7ea7http2.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u603b\u7ed3",permalink:"/web-optimization/\u603b\u7ed3"},next:{title:"React",permalink:"/web-optimization/React"}},o={},u=[{value:"http2\u7279\u70b9",id:"http2\u7279\u70b9",level:3},{value:"\u591a\u8def\u590d\u7528",id:"\u591a\u8def\u590d\u7528",level:3},{value:"\u4f18\u5316http\u8bf7\u6c42\u6570",id:"\u4f18\u5316http\u8bf7\u6c42\u6570",level:2},{value:"\u4e00\u4e2atcp\u8fde\u63a5\u540c\u65f6\u53ef\u4ee5\u53d1\u9001\u51e0\u4e2ahttp\u8bf7\u6c42\uff1f",id:"\u4e00\u4e2atcp\u8fde\u63a5\u540c\u65f6\u53ef\u4ee5\u53d1\u9001\u51e0\u4e2ahttp\u8bf7\u6c42",level:2},{value:"\u91cd\u70b9:http1.1\u548chttp2\u5bf9\u6bd4",id:"\u91cd\u70b9http11\u548chttp2\u5bf9\u6bd4",level:2},{value:"http1.1\u548chttp2.0\u8bf7\u6c42\u8d44\u6e90\u5bf9\u6bd4",id:"http11\u548chttp20\u8bf7\u6c42\u8d44\u6e90\u5bf9\u6bd4",level:3},{value:"HTTP/1.1 \u5b58\u5728\u4e00\u4e2a\u95ee\u9898,\u9ed8\u8ba4\u4e0d\u80fd\u5e76\u53d1\u8bf7\u6c42\u53d1\u9001http",id:"http11-\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\u9ed8\u8ba4\u4e0d\u80fd\u5e76\u53d1\u8bf7\u6c42\u53d1\u9001http",level:3},{value:"HTTP2.0\u5bf9HTTP1.1\u7684\u4f18\u5316\u7b56\u7565",id:"http20\u5bf9http11\u7684\u4f18\u5316\u7b56\u7565",level:2},{value:"\u4e00\u4e2a\u57df\u540d\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a TCP \u8fde\u63a5",id:"\u4e00\u4e2a\u57df\u540d\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a-tcp-\u8fde\u63a5",level:3},{value:"\u591a\u8def\u590d\u7528",id:"\u591a\u8def\u590d\u7528-1",level:3},{value:"\u8bf7\u6c42\u4f18\u5148\u7ea7",id:"\u8bf7\u6c42\u4f18\u5148\u7ea7",level:3},{value:"\u5934\u90e8\u538b\u7f29\uff1a\u53ea\u53d1\u9001\u5934\u90e8\u6570\u636e\u7684\u5dee\u5f02\u6570\u636e\uff0c\u800c\u4e0d\u662f\u5168\u90e8\u53d1\u9001\uff0c\u51cf\u5c11\u5934\u90e8\u7684\u4fe1\u606f\u91cf",id:"\u5934\u90e8\u538b\u7f29\u53ea\u53d1\u9001\u5934\u90e8\u6570\u636e\u7684\u5dee\u5f02\u6570\u636e\u800c\u4e0d\u662f\u5168\u90e8\u53d1\u9001\u51cf\u5c11\u5934\u90e8\u7684\u4fe1\u606f\u91cf",level:3},{value:"\u670d\u52a1\u7aef\u63a8\u9001",id:"\u670d\u52a1\u7aef\u63a8\u9001",level:3}],c={toc:u},T="wrapper";function k(t){let{components:e,...r}=t;return(0,p.kt)(T,(0,l.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h3",{id:"http2\u7279\u70b9"},"http2\u7279\u70b9"),(0,p.kt)("p",null,"http/2\u6700\u5927\u7684\u7279\u70b9\u662f\u4f7f\u7528\u591a\u8def\u590d\u7528\uff0c\u5bf9\u540c\u4e00\u4e2a\u57df\u7684\u670d\u52a1\u5668\u53ea\u5efa\u7acb\u4e00\u6b21TCP\u8fde\u63a5\uff0c\u52a0\u8f7d\u591a\u4e2a\u8d44\u6e90\uff0c\u4f7f\u7528\u4e8c\u8fdb\u5236\u5e27\u4f20\u8f93\uff0c\u540c\u65f6\u4f1a\u5bf9http\u5934\u90e8\u8fdb\u884c\u538b\u7f29\u3002\u4f7f\u7528http2\u4f1a\u6bd4http/1.1\u66f4\u52a0\u5730\u9ad8\u6548"),(0,p.kt)("h3",{id:"\u591a\u8def\u590d\u7528"},"\u591a\u8def\u590d\u7528"),(0,p.kt)("p",null,"\u591a\u8def\u590d\u7528\u7684\u610f\u4e49\u5728\u4e8e\u53ef\u4ee5\u7528\u540c\u4e00\u4e2a\u8fde\u63a5\u4f20\u8f93\u591a\u4e2a\u8d44\u6e90\uff0c\u8fdb\u800c\u4f7f\u5f97\u4ee5\u524d\u5728http 1.1\u6240\u505a\u4e00\u4e9b\u4f18\u5316\u5c31\u6ca1\u6709\u5fc5\u8981\u4e86\uff0c\u5982\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u96ea\u78a7\u56fe\u6280\u672f\uff0c\u628a\u591a\u5f20\u5c0f\u56fe\u5408\u6210\u4e00\u5f20\u5927\u56fe\uff0c\u51cf\u5c11\u8bf7\u6c42\u6570\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u5408\u5e76JS\u548cCSS\uff0c\u51cf\u5c11\u8bf7\u6c42\u6570\u3002")),(0,p.kt)("p",null,"http 1.1\u65f6\u4ee3\uff0c\u7531\u4e8e\u9700\u8981\u5efa\u7acb\u591a\u4e2aTCP\u8fde\u63a5\uff0c\u670d\u52a1\u5668\u9700\u8981\u66f4\u591a\u7684\u7ebf\u7a0b\u6765\u5904\u7406\u8bf7\u6c42\uff0c\u540c\u6837\u5730\uff0c\u6d4f\u89c8\u5668\u4e5f\u9700\u8981\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u4f1a\u9650\u5236\u540c\u4e00\u4e2a\u57df\u7684\u540c\u65f6\u8bf7\u6c42\u6570\uff0cChrome\u662f\u9650\u52366\u4e2a\uff0c\u603b\u8fde\u63a5\u6570\u662f17\u4e2a\u3002\n\u53ef\u4ee5\u5b9e\u9645\u5bf9\u6bd4\u4e00\u4e0b\uff0chttp 1.1\u4f1a\u8ba9\u8d44\u6e90\u6392\u961f\u52a0\u8f7d"),(0,p.kt)("p",null,"\u5982\u679c\u4f7f\u7528http2\n\u4f60\u4f1a\u53d1\u73b0\u8fd9\u4e9b\u8d44\u6e90\u90fd\u662f\u540c\u65f6\u52a0\u8f7d\u7684\uff0c\u540e\u9762\u52a0\u8f7d\u7684\u8d44\u6e90\u4e0d\u9700\u8981\u8fdb\u884c\u6392\u961f\u3002\u4e5f\u5c31\u662f\u8bf4\u7406\u8bba\u4e0a\u5e26\u5bbd\u6709\u591a\u5927\uff0c\u5c31\u80fd\u4f20\u591a\u5feb\u3002"),(0,p.kt)("h2",{id:"\u4f18\u5316http\u8bf7\u6c42\u6570"},"\u4f18\u5316http\u8bf7\u6c42\u6570"),(0,p.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8d44\u6e90\u5e76\u53d1\u6bd4\u8f83\u591a\u7684\u7f51\u7ad9\uff0c\u7528\u6237\u4f53\u9a8c\u5f88\u5dee\uff0c\u5982\u9875\u9762\u521d\u59cb\u5316\u8bf7\u6c42\u5927\u91cf\u9759\u6001\u8d44\u6e90\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06\u8d44\u6e90\u5206\u5e03\u5728\u4e0d\u7528\u57df\u540d\uff0c\u6bd4\u5982\u8bf4CDN"),"\uff0c\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")),(0,p.kt)("p",null,"\u4f46\u662f\u5176\u5b9e\u6d4f\u89c8\u5668\u5bf9\u6240\u6709\u57df\u540d\u7684\u603b\u8fde\u63a5\u6570\u4e5f\u6709\u9650\u5236\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u9664\u4e86\u8d44\u6e90\u5206\u5e03\u5728\u4e0d\u540c\u57df\u540d\u4e0a\u4e4b\u5916\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"\u53ef\u4ee5\u5c06\u8d44\u6e90\u5408\u5e76"),"\u3002\u603b\u6240\u5468\u77e5\u7684\u96ea\u78a7\u56fe\u3001webpack\u8d44\u6e90\u6253\u5305\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528http2"),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"HTTP2 \u63d0\u4f9b\u4e86 Multiplexing \u591a\u8def\u4f20\u8f93\u7279\u6027\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d\u540c\u65f6\u5b8c\u6210\u591a\u4e2a HTTP \u8bf7\u6c42\uff0c\u76ee\u524d\u90e8\u5206\u4e3b\u6d41\u7f51\u7ad9\u5f00\u59cb\u90e8\u5206\u652f\u6301http2.0\u3002")))),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(90686).Z,width:"980",height:"938"})),(0,p.kt)("p",null,"\u524d\u7aef\u6027\u80fd\u4e4bChrome\u7684Waterfall"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6d45\u7070\uff1a\u67e5\u8be2\u4e2d"),(0,p.kt)("li",{parentName:"ul"},"\u6df1\u7070\uff1a\u505c\u6ede\uff0c\u4ee3\u7406\u8f6c\u53d1\uff0c\u8bf7\u6c42\u53d1\u9001"),(0,p.kt)("li",{parentName:"ul"},"\u6a59\u8272\uff1a\u521d\u59cb\u8fde\u63a5"),(0,p.kt)("li",{parentName:"ul"},"\u7eff\u8272\uff1a\u7b49\u5f85\u4e2d"),(0,p.kt)("li",{parentName:"ul"},"\u84dd\u8272\uff1a\u5185\u5bb9\u4e0b\u8f7d")),(0,p.kt)("h2",{id:"\u4e00\u4e2atcp\u8fde\u63a5\u540c\u65f6\u53ef\u4ee5\u53d1\u9001\u51e0\u4e2ahttp\u8bf7\u6c42"},"\u4e00\u4e2atcp\u8fde\u63a5\u540c\u65f6\u53ef\u4ee5\u53d1\u9001\u51e0\u4e2ahttp\u8bf7\u6c42\uff1f"),(0,p.kt)("p",null,"\u6d4f\u89c8\u5668\u6700\u5927\u8fde\u63a5\u6570\uff0c\u5373\u6d4f\u89c8\u5668\u652f\u6301\u5bf9\u540c\u4e00\u4e2a\u57df\u540d\u540c\u65f6\u5efa\u7acb\u591a\u5c11\u4e2ahttp\u8fde\u63a5\u3002\n\u4eceHTTP1.1\u8003\u8651\u7684\u8bdd\uff0c\u5b83\u5176\u5b9e\u7b49\u540c\u4e8e\u6d4f\u89c8\u5668\u5bf9\u540c\u4e00\u4e2a\u57df\u540d\u652f\u6301\u540c\u65f6\u5efa\u7acb\u591a\u5c11\u4e2atcp\u8fde\u63a5\u6570\uff0c\u6bd5\u7adfHTTP1.1\u7248\u672c\u4e00\u4e2atcp\u8fde\u63a5\u53ea\u80fd\u540c\u65f6\u5904\u7406\u4e00\u4e2ahttp\u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"HTTP1.1\u53ca\u4ee5\u4e0b\u7684\u7248\u672c\uff0c\u4e00\u4e2atcp\u8fde\u63a5\u4e0d\u80fd\u5e76\u53d1\u5904\u7406\u591a\u4e2ahttp\u8bf7\u6c42\u3002\u5373\uff0c\u5982\u679c\u4e00\u4e2ahttp\u8bf7\u6c42\u672a\u7ed3\u675f\uff0c\u8be5tcp\u8fde\u63a5\u65e0\u6cd5\u53d1\u8d77\u4e0b\u4e00\u4e2ahttp\u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6211\u7684\u6d4f\u89c8\u5668\u53ef\u4ee5\u540c\u65f6\u8bf7\u6c42\u4e86\u591a\u4e2a\u76f8\u540c\u670d\u52a1\u5668\u7684\u8d44\u6e90\uff1f"),(0,p.kt)("p",null,"\u6d4f\u89c8\u5668\u662f\u53ef\u4ee5\u9488\u5bf9\u540c\u4e00\u4e2a\u8d44\u6e90\u5730\u5740\u5efa\u7acb\u591a\u4e2atcp\u8fde\u63a5\u7684\u3002\u9a8c\u8bc1\u65b9\u5f0f\u5c31\u662f\u5173\u6389\u6d4f\u89c8\u5668\uff08\u5f3a\u884c\u65ad\u5f00\u6301\u4e45\u5316\u8fde\u63a5\uff09\u518d\u6253\u5f00\u8be5\u9875\u9762\uff0c\u67e5\u770bNetwork \u7684waterfall\uff0c\u770b\u770b\u662f\u5426\u67092\u4e2a\u4ee5\u4e0a\u7684\u540c\u57df\u8d44\u6e90\u5efa\u7acb\u4e86Initial connection\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{src:n(63216).Z,width:"1908",height:"770"})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Firefox 2:  2\nFirefox 3+: 6\nOpera 9.26: 4\nOpera 12:   6\nSafari 3:   4\nSafari 5:   6\nIE 7:       2\nIE 8:       6\nIE 10:      8\nChrome:     6\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"TCP/2.0 \u6d4f\u89c8\u5668\u4e3a\u6bcf\u4e2a\u57df\u540d\u7ef4\u62a41\u4e2aTCP\u6301\u4e45\u8fde\u63a5,\u5728\u540c\u4e00\u8fde\u63a5\u4e0a\u987a\u5e8f\u5904\u7406\u591a\u4e2a\u8bf7\u6c42\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"TCP/1.1 \u6d4f\u89c8\u5668\u4e3a\u6bcf\u4e00\u4e2a\u57df\u540d\u7ef4\u62a4\u4e866\u4e2aTCP\u8fde\u63a5",(0,p.kt)("br",null)))),(0,p.kt)("p",null,"\u5728\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d\u53ef\u4ee5\u4f20\u8f93\u591a\u4e2a HTTP \u8bf7\u6c42\uff0c \u4e00\u4e2a\u57df\u540d\u4e0b\u7cfb\u7edf\u4f1a\u540c\u65f6\u5efa\u7acb\u591a\u4e2a TCP \u8bf7\u6c42\uff08\u6700\u591a\u652f\u63016\u4e2a\uff09, \u4f46\u662f TCP \u5bf9\u8bf7\u6c42\u7684\u5904\u7406\u662f\u540c\u6b65\u7684\uff0c\u4e5f\u5c31\u662f\u53ea\u80fd\u4e00\u4e2a\u4e00\u4e2a\u7684\u5904\u7406\uff0c\u5728\u4e00\u4e2a HTTP \u8bf7\u6c42\u6ca1\u6709\u7ed3\u675f\u524d\uff0c\u5176\u4ed6\u8bf7\u6c42\u90fd\u662f\u5904\u4e8e\u963b\u585e\u72b6\u6001\uff0c\u8fd9\u5927\u5927\u5f71\u54cd\u6211\u4eec\u7684\u9996\u5c4f\u6e32\u67d3\u3002"),(0,p.kt)("p",null,"\u4f46\u662f\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u591a\u4e2atcp\u94fe\u63a5\u8981\u662f\u6709 1000 \u5f20\u56fe\u7247\u7684\u8bdd\u603b\u5f00 1000\u4e2aTCP\u8fde\u63a5\uff0c\u663e\u7136\u6027\u80fd\u4f1a\u5dee\u3002"),(0,p.kt)("h2",{id:"\u91cd\u70b9http11\u548chttp2\u5bf9\u6bd4"},"\u91cd\u70b9:http1.1\u548chttp2\u5bf9\u6bd4"),(0,p.kt)("h3",{id:"http11\u548chttp20\u8bf7\u6c42\u8d44\u6e90\u5bf9\u6bd4"},"http1.1\u548chttp2.0\u8bf7\u6c42\u8d44\u6e90\u5bf9\u6bd4"),(0,p.kt)("p",null,"HTML \u5982\u679c\u5305\u542b\u51e0\u5341\u4e2a\u56fe\u7247\u6807\u7b7e\uff0c\u8fd9\u4e9b\u56fe\u7247\u662f\u4ee5\u4ec0\u4e48\u65b9\u5f0f\u3001\u4ec0\u4e48\u987a\u5e8f\u3001\u5efa\u7acb\u4e86\u591a\u5c11\u8fde\u63a5\u3001\u4f7f\u7528\u4ec0\u4e48\u534f\u8bae\u88ab\u4e0b\u8f7d\u4e0b\u6765\u7684\u5462\uff1f"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"1.\u4f7f\u7528http2",(0,p.kt)("br",null),"\n\u5982\u679c\u56fe\u7247\u90fd\u662f HTTPS \u8fde\u63a5\u5e76\u4e14\u5728\u540c\u4e00\u4e2a\u57df\u540d\u4e0b\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u5728 SSL \u63e1\u624b\u4e4b\u540e\u4f1a\u548c\u670d\u52a1\u5668\u5546\u91cf\u80fd\u4e0d\u80fd\u7528 HTTP2\u3002",(0,p.kt)("br",null),"\n\u5982\u679c\u80fd\u7684\u8bdd\u5c31\u4f7f\u7528 Multiplexing \u529f\u80fd\u5728\u8fd9\u4e2a\u8fde\u63a5\u4e0a\u8fdb\u884c\u591a\u8def\u4f20\u8f93\u3002",(0,p.kt)("br",null),"\n\u4e0d\u8fc7\u4e5f\u672a\u5fc5\u4f1a\u6240\u6709\u6302\u5728\u8fd9\u4e2a\u57df\u540d\u7684\u8d44\u6e90\u90fd\u4f1a\u4f7f\u7528\u4e00\u4e2a TCP \u8fde\u63a5\u53bb\u83b7\u53d6\uff0c\u4f46\u662f\u53ef\u4ee5\u786e\u5b9a\u7684\u662f Multiplexing \u5f88\u53ef\u80fd\u4f1a\u88ab\u7528\u5230\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"2.\u5982\u679c\u53d1\u73b0\u7528\u4e0d\u4e86 HTTP2 \u800c\u53bb\u4f7f\u7528HTTP/1.1\u5462\uff1f",(0,p.kt)("br",null),"\n\u6d4f\u89c8\u5668\u5c31\u4f1a\u5728\u4e00\u4e2a HOST \u4e0a\u5efa\u7acb\u591a\u4e2a TCP \u8fde\u63a5\uff0c\u8fde\u63a5\u6570\u91cf\u7684\u6700\u5927\u9650\u5236\u53d6\u51b3\u4e8e\u6d4f\u89c8\u5668\u8bbe\u7f6e\uff0c\u8fd9\u4e9b\u8fde\u63a5\u4f1a\u5728\u7a7a\u95f2\u7684\u65f6\u5019\u88ab\u6d4f\u89c8\u5668\u7528\u6765\u53d1\u9001\u65b0\u7684\u8bf7\u6c42\uff0c\u5982\u679c\u6240\u6709\u7684\u8fde\u63a5\u90fd\u6b63\u5728\u53d1\u9001\u8bf7\u6c42\u5462\uff1f\u90a3\u5176\u4ed6\u7684\u8bf7\u6c42\u5c31\u53ea\u80fd\u7b49\u7b49\u4e86\u3002"))),(0,p.kt)("h3",{id:"http11-\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\u9ed8\u8ba4\u4e0d\u80fd\u5e76\u53d1\u8bf7\u6c42\u53d1\u9001http"},"HTTP/1.1 \u5b58\u5728\u4e00\u4e2a\u95ee\u9898,\u9ed8\u8ba4\u4e0d\u80fd\u5e76\u53d1\u8bf7\u6c42\u53d1\u9001http"),(0,p.kt)("p",null,"HTTP/1.1\u4e2d TCP \u8fde\u63a5\u4e2d HTTP \u8bf7\u6c42\u53d1\u9001\u53ef\u4ee5\u4e00\u8d77\u53d1\u9001\u4e48\uff08\u6bd4\u5982\u4e00\u8d77\u53d1\u4e09\u4e2a\u8bf7\u6c42\uff0c\u518d\u4e09\u4e2a\u54cd\u5e94\u4e00\u8d77\u63a5\u6536\uff09\uff1f"),(0,p.kt)("p",null,"HTTP/1.1 \u5355\u4e2a TCP \u8fde\u63a5\u5728\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42\uff0c\u610f\u601d\u662f\u8bf4\uff1a\u4e24\u4e2a\u8bf7\u6c42\u7684\u751f\u547d\u5468\u671f\u4e0d\u80fd\u91cd\u53e0\uff0c\u4efb\u610f\u4e24\u4e2a HTTP \u8bf7\u6c42\u4ece\u5f00\u59cb\u5230\u7ed3\u675f\u7684\u65f6\u95f4\u5728\u540c\u4e00\u4e2a TCP \u8fde\u63a5\u91cc\u4e0d\u80fd\u91cd\u53e0\u3002"),(0,p.kt)("p",null,"\u867d\u7136 HTTP/1.1 \u89c4\u8303\u4e2d\u89c4\u5b9a\u4e86 Pipelining \u6765\u8bd5\u56fe\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u662f\u8fd9\u4e2a\u529f\u80fd\u5728\u6d4f\u89c8\u5668\u4e2d\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"}," \u4e00\u4e2a\u652f\u6301\u6301\u4e45\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u4e00\u4e2a\u8fde\u63a5\u4e2d\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\uff08\u4e0d\u9700\u8981\u7b49\u5f85\u4efb\u610f\u8bf7\u6c42\u7684\u54cd\u5e94\uff09\u3002\u6536\u5230\u8bf7\u6c42\u7684\u670d\u52a1\u5668\u5fc5\u987b\u6309\u7167\u8bf7\u6c42\u6536\u5230\u7684\u987a\u5e8f\u53d1\u9001\u54cd\u5e94\u3002")),(0,p.kt)("p",null,"Pipelining \u8fd9\u79cd\u8bbe\u60f3\u770b\u8d77\u6765\u6bd4\u8f83\u7f8e\u597d\uff0c\u4f46\u662f\u5728\u5b9e\u8df5\u4e2d\u4f1a\u51fa\u73b0\u8bb8\u591a\u95ee\u9898\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u4e00\u4e9b\u4ee3\u7406\u670d\u52a1\u5668\u4e0d\u80fd\u6b63\u786e\u7684\u5904\u7406 HTTP Pipelining\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u6b63\u786e\u7684\u6d41\u6c34\u7ebf\u5b9e\u73b0\u662f\u590d\u6742\u7684\u3002"),(0,p.kt)("li",{parentName:"ol"},"Head-of-line Blocking \u8fde\u63a5\u5934\u963b\u585e\uff1a\u5728\u5efa\u7acb\u8d77\u4e00\u4e2a TCP \u8fde\u63a5\u4e4b\u540e\uff0c\u5047\u8bbe\u5ba2\u6237\u7aef\u5728\u8fd9\u4e2a\u8fde\u63a5\u8fde\u7eed\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e86\u51e0\u4e2a\u8bf7\u6c42\u3002\u6309\u7167\u6807\u51c6\uff0c\u670d\u52a1\u5668\u5e94\u8be5\u6309\u7167\u6536\u5230\u8bf7\u6c42\u7684\u987a\u5e8f\u8fd4\u56de\u7ed3\u679c\uff0c\u5047\u8bbe\u670d\u52a1\u5668\u5728\u5904\u7406\u9996\u4e2a\u8bf7\u6c42\u65f6\u82b1\u8d39\u4e86\u5927\u91cf\u65f6\u95f4\uff0c\u90a3\u4e48\u540e\u9762\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u9700\u8981\u7b49\u7740\u9996\u4e2a\u8bf7\u6c42\u7ed3\u675f\u624d\u80fd\u54cd\u5e94\u3002")),(0,p.kt)("p",null,"\u6240\u4ee5\u73b0\u4ee3\u6d4f\u89c8\u5668\u9ed8\u8ba4\u662f\u4e0d\u5f00\u542f HTTP Pipelining \u7684\u3002"),(0,p.kt)("p",null,"\u6700\u540e\uff0cHTTP2 \u63d0\u4f9b\u4e86 Multiplexing \u591a\u8def\u4f20\u8f93\u7279\u6027\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d\u540c\u65f6\u5b8c\u6210\u591a\u4e2a HTTP \u8bf7\u6c42\u3002"),(0,p.kt)("h2",{id:"http20\u5bf9http11\u7684\u4f18\u5316\u7b56\u7565"},"HTTP2.0\u5bf9HTTP1.1\u7684\u4f18\u5316\u7b56\u7565"),(0,p.kt)("h3",{id:"\u4e00\u4e2a\u57df\u540d\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a-tcp-\u8fde\u63a5"},"\u4e00\u4e2a\u57df\u540d\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a TCP \u8fde\u63a5"),(0,p.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1 TCP \u53ea\u4f1a\u8fde\u63a5\u4ee5\u53ca\u6162\u542f\u52a8\u4e00\u6b21\uff0c\u540c\u65f6\u4e5f\u89e3\u51b3\u4e86\u7ade\u4e89\u5e26\u5bbd\u7684\u95ee\u9898"),(0,p.kt)("h3",{id:"\u591a\u8def\u590d\u7528-1"},"\u591a\u8def\u590d\u7528"),(0,p.kt)("p",null,"HTTP/2 \u5b9e\u73b0\u4e86\u8d44\u6e90\u7684\u5e76\u884c\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u670d\u52a1\u5668\uff0c\u800c\u5e76\u4e0d\u9700\u8981\u7b49\u5f85\u5176\u4ed6\u8bf7\u6c42\u7684\u5b8c\u6210\uff0c\u7136\u540e\u670d\u52a1\u5668\u4e5f\u53ef\u4ee5\u968f\u65f6\u8fd4\u56de\u5904\u7406\u597d\u7684\u8bf7\u6c42\u8d44\u6e90\u7ed9\u6d4f\u89c8\u5668"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"\u7eff\u8272\u662f\u53d1\u8d77\u8bf7\u6c42\u5230\u8bf7\u6c42\u8fd4\u56de\u7684\u7b49\u5f85\u65f6\u95f4\uff0c\u84dd\u8272\u662f\u54cd\u5e94\u7684\u4e0b\u8f7d\u65f6\u95f4\uff0c\u53ef\u4ee5\u770b\u5230\u90fd\u662f\u5728\u540c\u4e00\u4e2a Connection\uff0c\u5e76\u884c\u5b8c\u6210\u7684\n\u5728 HTTP2 \u4e2d\u7531\u4e8e Multiplexing \u7279\u70b9\u7684\u5b58\u5728\uff0c\u591a\u4e2a HTTP \u8bf7\u6c42\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d\u5e76\u884c\u8fdb\u884c\u3002\n")),(0,p.kt)("p",null,"HTTP2\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u4f20\u8f93\uff0c\u53d6\u4ee3\u4e86HTTP1.x\u7684\u6587\u672c\u683c\u5f0f\uff0c\u4e8c\u8fdb\u5236\u683c\u5f0f\u89e3\u6790\u66f4\u9ad8\u6548\u3002"),(0,p.kt)("p",null,"\u591a\u8def\u590d\u7528\u4ee3\u66ff\u4e86HTTP1.x\u7684\u5e8f\u5217\u548c\u963b\u585e\u673a\u5236\uff0c\u6240\u6709\u7684\u76f8\u540c\u57df\u540d\u8bf7\u6c42\u90fd\u901a\u8fc7\u540c\u4e00\u4e2aTCP\u8fde\u63a5\u5e76\u53d1\u5b8c\u6210\u3002\u5728HTTP1.x\u4e2d\uff0c\u5e76\u53d1\u591a\u4e2a\u8bf7\u6c42\u9700\u8981\u591a\u4e2aTCP\u8fde\u63a5\uff0c\u6d4f\u89c8\u5668\u4e3a\u4e86\u63a7\u5236\u8d44\u6e90\u4f1a\u67096-8\u4e2aTCP\u8fde\u63a5\u90fd\u9650\u5236\u3002\nHTTP2\u4e2d"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u540c\u57df\u540d\u4e0b\u6240\u6709\u901a\u4fe1\u90fd\u5728\u5355\u4e2a\u8fde\u63a5\u4e0a\u5b8c\u6210\uff0c\u6d88\u9664\u4e86\u56e0\u591a\u4e2a TCP \u8fde\u63a5\u800c\u5e26\u6765\u7684\u5ef6\u65f6\u548c\u5185\u5b58\u6d88\u8017\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u8fde\u63a5\u4e0a\u53ef\u4ee5\u5e76\u884c\u4ea4\u9519\u7684\u8bf7\u6c42\u548c\u54cd\u5e94\uff0c\u4e4b\u95f4\u4e92\u4e0d\u5e72\u6270")),(0,p.kt)("h3",{id:"\u8bf7\u6c42\u4f18\u5148\u7ea7"},"\u8bf7\u6c42\u4f18\u5148\u7ea7"),(0,p.kt)("p",null,"HTTP/2 \u63d0\u4f9b\u4e86\u8bf7\u6c42\u4f18\u5148\u7ea7\uff0c\u53ef\u4ee5\u5728\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u6807\u4e0a\u8be5\u8bf7\u6c42\u7684\u4f18\u5148\u7ea7\uff0c\u8fd9\u6837\u670d\u52a1\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u4e4b\u540e\uff0c\u4f1a\u4f18\u5148\u5904\u7406\u4f18\u5148\u7ea7\u9ad8\u7684\u8bf7\u6c42\u3002"),(0,p.kt)("h3",{id:"\u5934\u90e8\u538b\u7f29\u53ea\u53d1\u9001\u5934\u90e8\u6570\u636e\u7684\u5dee\u5f02\u6570\u636e\u800c\u4e0d\u662f\u5168\u90e8\u53d1\u9001\u51cf\u5c11\u5934\u90e8\u7684\u4fe1\u606f\u91cf"},"\u5934\u90e8\u538b\u7f29\uff1a\u53ea\u53d1\u9001\u5934\u90e8\u6570\u636e\u7684\u5dee\u5f02\u6570\u636e\uff0c\u800c\u4e0d\u662f\u5168\u90e8\u53d1\u9001\uff0c\u51cf\u5c11\u5934\u90e8\u7684\u4fe1\u606f\u91cf"),(0,p.kt)("h3",{id:"\u670d\u52a1\u7aef\u63a8\u9001"},"\u670d\u52a1\u7aef\u63a8\u9001"),(0,p.kt)("p",null,"\u670d\u52a1\u7aef\u53ef\u4ee5\u5728\u53d1\u9001\u9875\u9762HTML\u65f6\u4e3b\u52a8\u63a8\u9001\u5176\u5b83\u8d44\u6e90\uff0c\u800c\u4e0d\u7528\u7b49\u5230\u6d4f\u89c8\u5668\u89e3\u6790\u5230\u76f8\u5e94\u4f4d\u7f6e\uff0c\u53d1\u8d77\u8bf7\u6c42\u518d\u54cd\u5e94\u3002\u4f8b\u5982\u670d\u52a1\u7aef\u53ef\u4ee5\u4e3b\u52a8\u628aJS\u548cCSS\u6587\u4ef6\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef\uff0c\u800c\u4e0d\u9700\u8981\u5ba2\u6237\u7aef\u89e3\u6790HTML\u65f6\u518d\u53d1\u9001\u8fd9\u4e9b\u8bf7\u6c42\u3002\u670d\u52a1\u7aef\u53ef\u4ee5\u4e3b\u52a8\u63a8\u9001\uff0c\u5ba2\u6237\u7aef\u4e5f\u6709\u6743\u5229\u9009\u62e9\u662f\u5426\u63a5\u6536\u3002\u5982\u679c\u670d\u52a1\u7aef\u63a8\u9001\u7684\u8d44\u6e90\u5df2\u7ecf\u88ab\u6d4f\u89c8\u5668\u7f13\u5b58\u8fc7\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001RST_STREAM\u5e27\u6765\u62d2\u6536\u3002\u4e3b\u52a8\u63a8\u9001\u4e5f\u9075\u5b88\u540c\u6e90\u7b56\u7565\uff0c\u670d\u52a1\u5668\u4e0d\u4f1a\u968f\u4fbf\u63a8\u9001\u7b2c\u4e09\u65b9\u8d44\u6e90\u7ed9\u5ba2\u6237\u7aef\u3002"))}k.isMDXComponent=!0},63216:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/01-\u67e5\u770bhttp\u6301\u4e45\u94fe\u63a5-7759cae11f0f0ef4dbc6c3b2d410f346.png"},90686:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/02-\u67e5\u770bhttp\u7248\u672c\u53f7-c5a39793496d951ac5e538751dc7a118.png"}}]);