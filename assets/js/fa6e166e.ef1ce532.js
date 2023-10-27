"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4248],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>h});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},k=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=u(l),m=a,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return l?n.createElement(h,p(p({ref:t},k),{},{components:l})):n.createElement(h,p({ref:t},k))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,p=new Array(r);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<r;u++)p[u]=l[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},1053:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=l(87462),a=(l(67294),l(3905));const r={title:"http1.1-\u62a5\u6587",sidebar_position:2},p=void 0,i={unversionedId:"http-browserCache/http1.1-\u62a5\u6587",id:"http-browserCache/http1.1-\u62a5\u6587",title:"http1.1-\u62a5\u6587",description:"http\u5b9a\u4e49\u548c\u7279\u70b9",source:"@site/programming-tech/http-browserCache/02-http1.1-\u62a5\u6587.md",sourceDirName:"http-browserCache",slug:"/http-browserCache/http1.1-\u62a5\u6587",permalink:"/http-browserCache/http1.1-\u62a5\u6587",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/http-browserCache/02-http1.1-\u62a5\u6587.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"http1.1-\u62a5\u6587",sidebar_position:2},sidebar:"docs",previous:{title:"service-worker",permalink:"/http-browserCache/service-worker"},next:{title:"reflow-repaint",permalink:"/http-browserCache/reflow-repaint"}},o={},u=[{value:"http\u5b9a\u4e49\u548c\u7279\u70b9",id:"http\u5b9a\u4e49\u548c\u7279\u70b9",level:2},{value:"HTTP\u534f\u8bae\u4f7f\u7528TCP/IP\u534f\u8bae\u8fdb\u884c\u901a\u4fe1",id:"http\u534f\u8bae\u4f7f\u7528tcpip\u534f\u8bae\u8fdb\u884c\u901a\u4fe1",level:3},{value:"http \u6301\u4e45\u94fe\u63a5",id:"http-\u6301\u4e45\u94fe\u63a5",level:3},{value:"tcp\u8fde\u63a5\u4f55\u65f6\u5173\u95ed\uff1f",id:"tcp\u8fde\u63a5\u4f55\u65f6\u5173\u95ed",level:4},{value:"2.\u62a5\u6587\u4e09\u4e2a\u90e8\u5206:\u62a5\u6587\u9996\u90e8(\u8bf7\u6c42\u884c)+header+body+\u7a7a\u884c",id:"2\u62a5\u6587\u4e09\u4e2a\u90e8\u5206\u62a5\u6587\u9996\u90e8\u8bf7\u6c42\u884cheaderbody\u7a7a\u884c",level:2},{value:"2-1.\u8bf7\u6c42\u62a5\u6587",id:"2-1\u8bf7\u6c42\u62a5\u6587",level:2},{value:"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u62a5\u6587\u9996\u90e8",id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u62a5\u6587\u9996\u90e8",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u4e4b-req header",id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-req-header",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u4e4b-res body:res body\u4e0d\u5728 GET \u65b9\u6cd5\u4e2d\u4f7f\u7528",id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-res-bodyres-body\u4e0d\u5728-get-\u65b9\u6cd5\u4e2d\u4f7f\u7528",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u7a7a\u884c:\u53d1\u9001\u56de\u8f66\u7b26\u548c\u6362\u884c\u7b26\uff0c\u901a\u77e5\u670d\u52a1\u5668\u4ee5\u4e0b\u4e0d\u518d\u6709\u8bf7\u6c42\u5934",id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u7a7a\u884c\u53d1\u9001\u56de\u8f66\u7b26\u548c\u6362\u884c\u7b26\u901a\u77e5\u670d\u52a1\u5668\u4ee5\u4e0b\u4e0d\u518d\u6709\u8bf7\u6c42\u5934",level:3},{value:"2-3.\u54cd\u5e94\u62a5\u6587",id:"2-3\u54cd\u5e94\u62a5\u6587",level:2},{value:"\u54cd\u5e94\u62a5\u6587\u4e4b-\u72b6\u6001\u884c",id:"\u54cd\u5e94\u62a5\u6587\u4e4b-\u72b6\u6001\u884c",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u4e4b-res header",id:"\u54cd\u5e94\u62a5\u6587\u4e4b-res-header",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u4e4b-req body",id:"\u54cd\u5e94\u62a5\u6587\u4e4b-req-body",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u4e4b-\u7a7a\u884c\u8868\u793a\u7ed3\u675f",id:"\u54cd\u5e94\u62a5\u6587\u4e4b-\u7a7a\u884c\u8868\u793a\u7ed3\u675f",level:3},{value:"2-a.Request headers",id:"2-arequest-headers",level:2},{value:"1.\u6388\u6743\u548c\u94fe\u63a5\u76f8\u5173:",id:"1\u6388\u6743\u548c\u94fe\u63a5\u76f8\u5173",level:3},{value:"2.\u6587\u4ef6\u76f8\u5173\uff1a",id:"2\u6587\u4ef6\u76f8\u5173",level:3},{value:"3.\u7f13\u5b58\u76f8\u5173",id:"3\u7f13\u5b58\u76f8\u5173",level:3},{value:"4.\u5176\u4ed6",id:"4\u5176\u4ed6",level:3},{value:"2-b.Response headers",id:"2-bresponse-headers",level:2},{value:"1.\u8bf7\u6c42\u76f8\u5173",id:"1\u8bf7\u6c42\u76f8\u5173",level:3},{value:"2.\u7f13\u5b58\u76f8\u5173",id:"2\u7f13\u5b58\u76f8\u5173",level:3},{value:"2.\u6587\u4ef6",id:"2\u6587\u4ef6",level:3},{value:"3.\u72b6\u6001\u7801",id:"3\u72b6\u6001\u7801",level:2},{value:"\u6ce8\u610f3xx",id:"\u6ce8\u610f3xx",level:3},{value:"401\u548c403",id:"401\u548c403",level:3},{value:"http\u548c\u5176\u4ed6\u534f\u8bae",id:"http\u548c\u5176\u4ed6\u534f\u8bae",level:2},{value:"UDP\u534f\u8bae",id:"udp\u534f\u8bae",level:3},{value:"DNS\u534f\u8bae",id:"dns\u534f\u8bae",level:3},{value:"HTTP\u4e0eFTP\u7684\u5f02\u540c\u70b9",id:"http\u4e0eftp\u7684\u5f02\u540c\u70b9",level:3},{value:"\u901a\u4fe1\u6570\u636e\u8f6c\u53d1\u7a0b\u5e8f\uff1a\u4ee3\u7406\uff0c\u7f51\u5173\uff0c\u96a7\u9053",id:"\u901a\u4fe1\u6570\u636e\u8f6c\u53d1\u7a0b\u5e8f\u4ee3\u7406\u7f51\u5173\u96a7\u9053",level:3}],k={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"http\u5b9a\u4e49\u548c\u7279\u70b9"},"http\u5b9a\u4e49\u548c\u7279\u70b9"),(0,a.kt)("p",null,"\u5b9a\u4e49\uff1a HTTP\u662f\u4e00\u79cd\u57fa\u4e8e\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u534f\u8bae\uff0c\u5373\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u63a5\u6536\u8be5\u8bf7\u6c42\u5e76\u8fd4\u56de\u4e00\u4e2a\u54cd\u5e94\u3002"),(0,a.kt)("p",null,"HTTP\u534f\u8bae\u901a\u5e38\u627f\u8f7d\u4e8eTCP\u534f\u8bae\u4e4b\u4e0a\uff0c\u6709\u65f6\u4e5f\u627f\u8f7d\u4e8eTLS\u6216SSL\u534f\u8bae\u5c42\u4e4b\u4e0a--\x3eHTTPS"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u4f1a\u5411Web\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u62a5\u6587\uff0c\u8be5\u62a5\u6587\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(\u62a5\u6587\u9996\u90e8)\u8bf7\u6c42\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2aheader"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7a7a\u884c")),(0,a.kt)("h3",{id:"http\u534f\u8bae\u4f7f\u7528tcpip\u534f\u8bae\u8fdb\u884c\u901a\u4fe1"},"HTTP\u534f\u8bae\u4f7f\u7528TCP/IP\u534f\u8bae\u8fdb\u884c\u901a\u4fe1"),(0,a.kt)("p",null,"\u5728TCP/IP\u7684\u6a21\u578b\u56fe\u4e2d , HTTP\u534f\u8bae\u4f4d\u4e8e\u6700\u4e0a\u5c42\u7684\u5e94\u7528\u5c42\uff0c\u4f9d\u9760tcp\u5b9e\u73b0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65e0\u5dee\u9519\u7684\u6570\u636e\u4f20\u8f93"),(0,a.kt)("li",{parentName:"ol"},"\u6309\u5e8f\u4f20\u8f93:\u6570\u636e\u603b\u662f\u4f1a\u6309\u7167\u53d1\u9001\u7684\u987a\u5e8f\u5230\u8fbe"),(0,a.kt)("li",{parentName:"ol"},"\u672a\u5206\u6bb5\u7684\u6570\u636e\u6d41:\u4efb\u610f\u65f6\u523b\u4ee5\u4efb\u610f\u5c3a\u5bf8\u53d1\u9001\u6570\u636e")),(0,a.kt)("p",null,"\u4e00\u4e2aTCP\u8fde\u63a5\u53ef\u53d1\u9001\u591a\u4e2aHTTP\u8bf7\u6c42\uff0c\u53ef\u4fdd\u6301TCP\u8fde\u63a5\uff0c\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d HTTP \u8bf7\u6c42\u4f9d\u6b21\u53d1\u9001\u3002\u6d4f\u89c8\u5668\u4e2d\u4e00\u4e2a\u57df\u540d\u4e0b\u7cfb\u7edf\u4f1a\u540c\u65f6\u5efa\u7acb\u591a\u4e2aTCP\u8bf7\u6c42\uff08\u6700\u591a\u652f\u63016\u4e2a\uff09"),(0,a.kt)("h3",{id:"http-\u6301\u4e45\u94fe\u63a5"},"http \u6301\u4e45\u94fe\u63a5"),(0,a.kt)("p",null,"\u65e0\u72b6\u6001\uff1aHTTP\u534f\u8bae\u662f\u65e0\u72b6\u6001\u534f\u8bae\u3002",(0,a.kt)("br",null),"\nconnection: keep-alive\n\u4eceHTTP/1.1\u8d77\uff0c\u9ed8\u8ba4\u90fd\u5f00\u542f\u4e86Keep-Alive\uff0c\u4fdd\u6301\u8fde\u63a5\u7279\u6027\uff0c\u7b80\u5355\u5730\u8bf4\uff0c\u5f53\u4e00\u4e2a\u7f51\u9875\u6253\u5f00\u5b8c\u6210\u540e\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7528\u4e8e\u4f20\u8f93HTTP\u6570\u636e\u7684TCP\u8fde\u63a5\u4e0d\u4f1a\u5173\u95ed\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u518d\u6b21\u8bbf\u95ee\u8fd9\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u7f51\u9875\uff0c\u4f1a\u7ee7\u7eed\u4f7f\u7528\u8fd9\u4e00\u6761\u5df2\u7ecf\u5efa\u7acb\u7684\u8fde\u63a5\u3002\nKeep-Alive\u4e0d\u4f1a\u6c38\u4e45\u4fdd\u6301\u8fde\u63a5\uff0c\u5b83\u6709\u4e00\u4e2a\u4fdd\u6301\u65f6\u95f4\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u670d\u52a1\u5668\u8f6f\u4ef6\uff08\u5982Apache\uff09\u4e2d\u8bbe\u5b9a\u8fd9\u4e2a\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6bcf\u4e2a\u8bf7\u6c42\u54cd\u5e94\u5bf9\uff0c\u90fd\u662f\u7ecf\u4e00\u4e2a\u5355\u72ec\u7684TCP\u8fde\u63a5\u53d1\u9001\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u88ab\u79f0\u4e3a\u4f7f\u7528\u975e\u6301\u4e45\u8fde\u63a5\uff1b\u5982\u679c\u6240\u6709\u7684\u8bf7\u6c42\u53ca\u76f8\u5e94\u7684\u54cd\u5e94\u90fd\u7ecf\u76f8\u540c\u7684TCP\u8fde\u63a5\u53d1\u9001\uff0c\u5219\u8be5\u5e94\u7528\u7a0b\u5e8f\u88ab\u79f0\u4e3a \u4f7f\u7528\u6301\u4e45\u8fde\u63a5\u3002 "),(0,a.kt)("p",null,"  HTTP\u65e2\u53ef\u4ee5\u4f7f\u7528\u975e\u6301\u4e45\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6301\u4e45\u8fde\u63a5\uff0c\u9ed8\u8ba4\u65b9\u5f0f\u4e0b\uff0cHTTP\u4f7f\u7528\u6301\u4e45\u8fde\u63a5\u3002\nHTTP1.1\uff0c\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u90fd\u9ed8\u8ba4\u5f00\u542f\u6301\u4e45\u5316\u8fde\u63a5\uff0c\u5373\u4f7f\u4f60\u5728\u5934\u90e8\u6ca1\u770b\u5230connection:keep-alive\uff0c\u5982\u679c\u4f60\u6709\u770b\u5230\uff0c\u90a3\u662f\u4e3a\u4e86\u517c\u5bb9HTTP1.0"),(0,a.kt)("h4",{id:"tcp\u8fde\u63a5\u4f55\u65f6\u5173\u95ed"},"tcp\u8fde\u63a5\u4f55\u65f6\u5173\u95ed\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fde\u63a5\u662fkeep-alive\u7684\uff0c\u90a3\u4e48tcp\u8fde\u63a5\u4e0d\u4f1a\u4e3b\u52a8\u65ad\u5f00\uff0c\u9664\u975e\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u7aef\u81f3\u5c11\u6709\u4e00\u7aef\u58f0\u660e\u4e86")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"connection:close\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u53ef\u4ee5\u4e3akeep-alive\u8bbe\u5b9atcp\u6700\u957f\u4fdd\u6301\u65f6\u95f4\uff0c\u8fd4\u56de\u5934\u90e8\u7c7b\u4f3c\u8fd9\u6837\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Connection: Keep-Alive\nKeep-Alive: max=5, timeout=120\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0cnginx\u4e3a75s")),(0,a.kt)("h2",{id:"2\u62a5\u6587\u4e09\u4e2a\u90e8\u5206\u62a5\u6587\u9996\u90e8\u8bf7\u6c42\u884cheaderbody\u7a7a\u884c"},"2.\u62a5\u6587\u4e09\u4e2a\u90e8\u5206:\u62a5\u6587\u9996\u90e8(\u8bf7\u6c42\u884c)+header+body+\u7a7a\u884c"),(0,a.kt)("p",null,"\u5982\u679chttp\u662f\u5feb\u9012\u5458\uff0c\u62a5\u6587\u5c31\u662f\u5305\u88f9"),(0,a.kt)("p",null,"A:\u8bf7\u6c42\u62a5\u6587\u7531\u4ee5\u4e0b\u5143\u7d20\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u62a5\u6587\u9996\u90e8:\u8bf7\u6c42\u884c+\u72b6\u6001\u884c")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.\u8bf7\u6c42\u884c\n\u8bf7\u6c42\u884c\u7531\u8bf7\u6c42\u65b9\u6cd5\u548cURL\u548cHTTP\u534f\u8bae\u7248\u672c\u6784\u6210\u3002\nGET / HTTP/1.1\n\n\u65b9\u6cd5\nurl\n\u7aef\u53e3\u53f7:Remote Address: 124.237.176.160:443\nHTTP \u534f\u8bae\u7248\u672c\u53f7\u3002\n\n2.\u72b6\u6001\u884c\nStatus Code: 200 OK\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3.\u5bf9\u4e8e\u4e00\u4e9b\u50cf POST \u8fd9\u6837\u7684\u65b9\u6cd5\uff0c\u62a5\u6587\u7684 body \u5c31\u5305\u542b\u4e86\u53d1\u9001\u7684\u8d44\u6e90\uff0c\u8fd9\u4e0e\u54cd\u5e94\u62a5\u6587\u7684 body \u7c7b\u4f3c\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7a7a\u884c\u4e4b\u540e\u5c31\u662f\u53ef\u9009\u7684\u62a5\u6587\u4e3b\u4f53\u4e86\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u6240\u6709\u7c7b\u578b\u7684\u6570\u636e\u3002\n\n\u8bf7\u6c42\u4e3b\u4f53\u4e2d\u5305\u62ec\u4e86\u8981\u53d1\u9001\u7ed9Web \u670d\u52a1\u5668\u7684\u6570\u636e\uff1b\n\n\u54cd\u5e94\u4e3b\u4f53\u4e2d\u88c5\u8f7d\u4e86\u8981\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u6570\u636e\u3002\u8d77\u59cb\u884c\u548c\u9996\u90e8\u90fd\u662f\u6587\u672c\u5f62\u5f0f\u4e14\u90fd\u662f\u7ed3\u6784\u5316\u7684\uff0c\u800c\u4e3b\u4f53\u5219\u4e0d\u540c\uff0c\u4e3b\u4f53\u4e2d\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff08\u6bd4\u5982\u56fe\u7247\u3001\u89c6\u9891\u3001\u97f3\u8f68\u3001\u8f6f\u4ef6\u7a0b\u5e8f\uff09\u3002\u5f53\u7136\uff0c\u4e3b\u4f53\u4e2d\u4e5f\u53ef\u4ee5\u5305\u542b\u6587\u672c\u3002\n")),(0,a.kt)("p",null,"B:\u54cd\u5e94\u62a5\u6587\u5305\u542b\u4e86\u4e0b\u9762\u7684\u5143\u7d20\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.\u62a5\u6587\u9996\u90e8\uff1a\u72b6\u6001\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4e00\u4e2a\u72b6\u6001\u7801\uff08status code\uff09\uff0c\u6765\u544a\u77e5\u5bf9\u5e94\u8bf7\u6c42\u6267\u884c\u6210\u529f\u6216\u5931\u8d25\uff0c\u4ee5\u53ca\u5931\u8d25\u7684\u539f\u56e0\u3002\n\u4e00\u4e2a\u72b6\u6001\u4fe1\u606f\uff0c\u8fd9\u4e2a\u4fe1\u606f\u662f\u975e\u6743\u5a01\u7684\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\uff0c\u53ef\u4ee5\u7531\u670d\u52a1\u7aef\u81ea\u884c\u8bbe\u5b9a\u3002\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2.headers\uff0c\u4e0e\u8bf7\u6c42\u5934\u90e8\u7c7b\u4f3c"),(0,a.kt)("li",{parentName:"ul"},"3.\u8d44\u6e90 body\u3002")),(0,a.kt)("h2",{id:"2-1\u8bf7\u6c42\u62a5\u6587"},"2-1.\u8bf7\u6c42\u62a5\u6587"),(0,a.kt)("mermaid",{value:"flowchart BT\na(\u8bf7\u6c42\u62a5\u6587)\nA1(\u62a5\u6587\u9996\u90e8)--\x3ea\nA2(req header)--\x3ea\nA3(req body:post\u624d\u6709)--\x3ea\nA4(\u7a7a\u884c)--\x3ea\n\na2(\u54cd\u5e94\u62a5\u6587)\nB1(\u62a5\u6587\u9996\u90e8)--\x3ea2\nB2(res header)--\x3ea2\nB3(res body)--\x3ea2\nB4(\u7a7a\u884c)--\x3ea2"}),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u62a5\u6587\u9996\u90e8"},"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u62a5\u6587\u9996\u90e8"),(0,a.kt)("p",null,"\u62a5\u6587\u9996\u90e8\u7531\u65b9\u6cd5\u5b57\u6bb5\u3001URL \u5b57\u6bb5 \u548cHTTP \u534f\u8bae\u7248\u672c\u5b57\u6bb5 3 \u4e2a\u90e8\u5206\u7ec4\u6210\uff0c\u4ed6\u4eec\u4e4b\u95f4\u4f7f\u7528\u7a7a\u683c\u9694\u5f00\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4f8b\u5982\uff1aGET /index.html HTTP/1.1\n  get\u65b9\u6cd5\u5c06\u6570\u636e\u62fc\u63a5\u5728url\u540e\u9762\uff0c\u4f20\u9012\u53c2\u6570\u53d7\u9650\n\u8bf7\u6c42\u65b9\u6cd5\uff1a\n  GET\u3001POST\u3001HEAD\u3001PUT\u3001DELETE\u3001OPTIONS\u3001TRACE\u3001CONNECT\n")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-req-header"},"\u8bf7\u6c42\u62a5\u6587\u4e4b-req header"),(0,a.kt)("p",null,"\u8be6\u7ec6\u89c1:\n\u8bf7\u6c42\u62a5\u6587\u4e4breq header-\u54cd\u5e94\u62a5\u6587res header"),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-res-bodyres-body\u4e0d\u5728-get-\u65b9\u6cd5\u4e2d\u4f7f\u7528"},"\u8bf7\u6c42\u62a5\u6587\u4e4b-res body:res body\u4e0d\u5728 GET \u65b9\u6cd5\u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u800c\u662f\u5728POST \u65b9\u6cd5\u4e2d\u4f7f\u7528,post\u65b9\u6cd5\u4e2d\uff0c\u4f1a\u628a\u6570\u636e\u4ee5key value\u5f62\u5f0f\u53d1\u9001\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'GET\u65b9\u5f0f\u7684\u8bf7\u6c42\u4e00\u822c\u4e0d\u5305\u542b\u201d\u8bf7\u6c42\u5185\u5bb9\u201d\u90e8\u5206\uff0c\u8bf7\u6c42\u6570\u636e\u4ee5\u5730\u5740\u7684\u5f62\u5f0f\u8868\u73b0\u5728\u8bf7\u6c42\u884c\u3002\n\nGET /search?hl=zh-CN&source=hp&q=domety&aq=f&oq= HTTP/1.1  \nAccept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/vnd.ms-powerpoint, \napplication/msword, application/x-silverlight, application/x-shockwave-flash, */*  \nReferer: <a href="http://www.google.cn/">http://www.google.cn/</a>  \nAccept-Language: zh-cn  \nAccept-Encoding: gzip, deflate  \nUser-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; TheWorld)  \nHost: <a href="http://www.google.cn">www.google.cn</a>  \nConnection: Keep-Alive  \nCookie: PREF=ID=80a06da87be9ae3c:U=f7167333e2c3b714:NW=1:TM=1261551909:LM=1261551917:S=ybYcq2wpfefs4V9g; \nNID=31=ojj8d-IygaEtSxLgaJmqSjVhCspkviJrB6omjamNrSm8lZhKy_yMfO2M4QMRKcH1g0iQv9u-2hfBW7bUFwVh7pGaRUb0RnHcJU37y-\nFxlRugatx63JLv7CWMD6UB_O_r \n')),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u7a7a\u884c\u53d1\u9001\u56de\u8f66\u7b26\u548c\u6362\u884c\u7b26\u901a\u77e5\u670d\u52a1\u5668\u4ee5\u4e0b\u4e0d\u518d\u6709\u8bf7\u6c42\u5934"},"\u8bf7\u6c42\u62a5\u6587\u4e4b-\u7a7a\u884c:\u53d1\u9001\u56de\u8f66\u7b26\u548c\u6362\u884c\u7b26\uff0c\u901a\u77e5\u670d\u52a1\u5668\u4ee5\u4e0b\u4e0d\u518d\u6709\u8bf7\u6c42\u5934"),(0,a.kt)("h2",{id:"2-3\u54cd\u5e94\u62a5\u6587"},"2-3.\u54cd\u5e94\u62a5\u6587"),(0,a.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u4e4b-\u72b6\u6001\u884c"},"\u54cd\u5e94\u62a5\u6587\u4e4b-\u72b6\u6001\u884c"),(0,a.kt)("p",null,"\u75313\u90e8\u5206\u7ec4\u6210\uff1a\u534f\u8bae\u7248\u672c\uff0c\u72b6\u6001\u7801\uff0c\u72b6\u6001\u7801\u63cf\u8ff0\uff0c\u4e4b\u95f4\u7531\u7a7a\u683c\u5206\u9694"),(0,a.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u4e4b-res-header"},"\u54cd\u5e94\u62a5\u6587\u4e4b-res header"),(0,a.kt)("p",null,"\u8be6\u7ec6\u89c1:\n2-4/2-5/\u8bf7\u6c42\u62a5\u6587\u4e4breq header-\u54cd\u5e94\u62a5\u6587res header"),(0,a.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u4e4b-req-body"},"\u54cd\u5e94\u62a5\u6587\u4e4b-req body"),(0,a.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u4e4b-\u7a7a\u884c\u8868\u793a\u7ed3\u675f"},"\u54cd\u5e94\u62a5\u6587\u4e4b-\u7a7a\u884c\u8868\u793a\u7ed3\u675f"),(0,a.kt)("h2",{id:"2-arequest-headers"},"2-a.Request headers"),(0,a.kt)("h3",{id:"1\u6388\u6743\u548c\u94fe\u63a5\u76f8\u5173"},"1.\u6388\u6743\u548c\u94fe\u63a5\u76f8\u5173:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cookie\uff1a\u6700\u91cd\u8981\u7684\u8bf7\u6c42\u5934\u4e4b\u4e00, \u5c06cookie\u7684\u503c\u53d1\u9001\u7ed9HTTP\u670d\u52a1\u5668\u3002",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"github\u7684cookie:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"cookie: _octo=GH1.1.1688576136.1669619642; preferred_color_mode=dark; tz=Asia%2FShanghai; _device_id=394f17aff8daf3e4dcfbbe990bfbc23f; user_session=KiTT2ivG; tz=Asia%2FShanghai; color_mode=%7B%22color_mode; logged_in=yes; dotcom_user=huiruo; has_recent_activity=1; _gh_sess=TTgSlbj%2FhcZyfYy6Y\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authorization\uff1a\u6388\u6743\u4fe1\u606f\uff0c\u901a\u5e38\u51fa\u73b0\u5728\u5bf9\u670d\u52a1\u5668\u53d1\u9001\u7684WWW-Authenticate\u5934\u7684\u5e94\u7b54\u4e2d\u3002\u4e3b\u8981\u7528\u4e8e\u8bc1\u660e\u5ba2\u6237\u7aef\u6709\u6743\u67e5\u770b\u67d0\u4e2a\u8d44\u6e90\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"connection\uff1a\u8fde\u63a5\u65b9\u5f0f(close \u6216 keepalive);\n\u767e\u5ea6connection:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Connection: keep-alive\n")),(0,a.kt)("p",null,"Connection: Keep-Alive \u662f\u7528\u4e8e HTTP\u6301\u4e45\u8fde\u63a5 \u7684\u5b57\u6bb5\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 HTTP 1.1 \u4e2d \u6240\u6709\u7684\u8fde\u63a5\u9ed8\u8ba4\u90fd\u662f\u6301\u7eed\u8fde\u63a5\uff0c\u9664\u975e\u7279\u6b8a\u58f0\u660e\u4e0d\u652f\u6301\u3002\u76ee\u524d\u670d\u52a1\u5668\u7aef\u9ed8\u8ba4\u4e3a 5-15 \u79d2\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f00\u542f\u540e\u7684\u4f18\u70b9\uff1aTCP \u8fde\u63a5\u6570\u6bd4\u8f83\u5c11\uff0c\u6240\u4ee5\u968f\u4e4b\u800c\u6765\u548c TCP \u76f8\u5173\u7684\u4f18\u70b9\u5168\u90fd\u6765\u4e86\u3002\u5176\u5b9e\u548c HTTP \u6ca1\u4ec0\u4e48\u5173\u7cfb\uff0c\u4e3b\u8981\u662f\u5927\u5e45\u964d\u4f4e\u670d\u52a1\u5668\u7aef\u56e0\u5927\u91cf\u65b0\u5efa TCP \u8fde\u63a5\u9020\u6210\u7684 CPU\u8d1f\u8f7d\uff0c\u4ee5\u53ca TCP \u4f20\u8f93\u76f8\u5173\u7684\u62e5\u585e\u63a7\u5236\u95ee\u9898\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f00\u542f\u540e\u7684\u7f3a\u70b9\uff1a\u8fd9\u4e2a\u534f\u8bae\u662f\u4e3a HTTP1.1 \u800c\u5b58\u5728\u7684\uff0c\u5df2\u7ecf\u4e0d\u5b8c\u5168\u9002\u5408\u73b0\u6709\u7684\u7f51\u7edc\u72b6\u51b5\u3002\u4ee5\u524d\u5e26\u5bbd\u5c0f\uff0c\u77ac\u65f6\u8bf7\u6c42\u9ad8\uff0c\u6240\u4ee5\u7528\u8fd9\u4e2a\u65b9\u6cd5\u964d\u4f4e TCP \u65b0\u5efa\u3002\u4f46\u73b0\u5728\u5e26\u5bbd\u5927\uff0c\u5e76\u53d1\u9ad8\u3002\u5982\u679c HTTP \u670d\u52a1\u5b58\u5728\u957f\u8f6e\u8bad\u6216\u8f83\u957f\u95f4\u9694\u8bf7\u6c42\uff0c\u800c\u4e14\u8d85\u8fc7 Keep-Alive \u7684\u8bbe\u7f6e\uff08\u6bd4\u5982 Keep-Alive 5 \u79d2\uff0c\u4f46\u8f6e\u8bad\u5468\u671f\u662f 6 \u79d2\uff09\uff0c\u5219\u53ef\u80fd\u4f1a\u9020\u6210\u5927\u91cf\u7684\u65e0\u7528\u9014\u8fde\u63a5\uff0c\u767d\u767d\u5360\u7528\u7cfb\u7edf\u8d44\u6e90\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PS: HTTP/2 \u6ca1\u6709\u8fd9\u4e2a\u5934\u90e8\uff0c\u7528\u7684\u662f\u66f4\u5148\u8fdb\u7684\u76f4\u63a5\u57fa\u4e8eTCP\u5c42\u6b21\u7684\u8fde\u63a5\u7ba1\u7406\u3002")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Keep-Alive \u662f\u4e00\u4e2a\u901a\u7528\u6d88\u606f\u5934\uff0c\u5141\u8bb8\u6d88\u606f\u53d1\u9001\u8005\u6697\u793a\u8fde\u63a5\u7684\u72b6\u6001\uff0c\u8fd8\u53ef\u4ee5\u7528\u6765\u8bbe\u7f6e\u8d85\u65f6\u65f6\u957f\u548c\u6700\u5927\u8bf7\u6c42\u6570\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Keep-Alive: timeout=5, max=1000\n")),(0,a.kt)("h3",{id:"2\u6587\u4ef6\u76f8\u5173"},"2.\u6587\u4ef6\u76f8\u5173\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Content-type\u53d1\u9001\u6570\u636e\u7684\u683c\u5f0f\uff0c\u5982application/json"),(0,a.kt)("li",{parentName:"ol"},"Accept \u6d4f\u89c8\u5668\u7aef\u53ef\u4ee5\u63a5\u53d7\u7684MIME\u7c7b\u578b\u3002\u4f8b\u5982\uff1aAccept: text/html \u4ee3\u8868\u6d4f\u89c8\u5668\u53ef\u4ee5\u63a5\u53d7\u670d\u52a1\u5668\u56de\u53d1\u7684\u7c7b\u578b\u4e3a text/html \u4e5f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684html\u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u767e\u5ea6\uff1a\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\n")),(0,a.kt)("h3",{id:"3\u7f13\u5b58\u76f8\u5173"},"3.\u7f13\u5b58\u76f8\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cache-control")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u767e\u5ea6\uff1a\nCache-Control: max-age=0\n\n\u6307\u5b9a\u8bf7\u6c42\u548c\u54cd\u5e94\u9075\u5faa\u7684\u7f13\u5b58\u673a\u5236\u3002\u7f13\u5b58\u6307\u4ee4\u662f\u5355\u5411\u7684\uff08\u54cd\u5e94\u4e2d\u51fa\u73b0\u7684\u7f13\u5b58\u6307\u4ee4\u5728\u8bf7\u6c42\u4e2d\u672a\u5fc5\u4f1a\u51fa\u73b0\uff09\uff0c\u4e14\u662f\u72ec\u7acb\u7684\uff08\u5728\u8bf7\u6c42\u6d88\u606f\u6216\u54cd\u5e94\u6d88\u606f\u4e2d\u8bbe\u7f6eCache-Control\u5e76\u4e0d\u4f1a\u4fee\u6539\u53e6\u4e00\u4e2a\u6d88\u606f\u5904\u7406\u8fc7\u7a0b\u4e2d\u7684\u7f13\u5b58\u5904\u7406\u8fc7\u7a0b\uff09\u3002\u8bf7\u6c42\u65f6\u7684\u7f13\u5b58\u6307\u4ee4\u5305\u62ecno-cache\u3001no-store\u3001max-age\u3001max-stale\u3001min-fresh\u3001only-if-cached\uff0c\u54cd\u5e94\u6d88\u606f\u4e2d\u7684\u6307\u4ee4\u5305\u62ecpublic\u3001private\u3001no-cache\u3001no-store\u3001no-transform\u3001must-revalidate\u3001proxy-revalidate\u3001max-age\u3001s-maxage\u3002\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"expires ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6307\u660e\u5e94\u8be5\u5728\u4ec0\u4e48\u65f6\u5019\u8ba4\u4e3a\u6587\u6863\u5df2\u7ecf\u8fc7\u671f\uff0c\u4ece\u800c\u4e0d\u518d\u7f13\u5b58\u5b83\uff0c\u91cd\u65b0\u4ece\u670d\u52a1\u5668\u83b7\u53d6\uff0c\u4f1a\u66f4\u65b0\u7f13\u5b58\u3002\u8fc7\u671f\u4e4b\u524d\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u3002HTTP1.1\u7684\u5ba2\u6237\u7aef\u548c\u7f13\u5b58\u4f1a\u5c06\u975e\u6cd5\u7684\u65e5\u671f\u683c\u5f0f\uff08\u5305\u62ec0\uff09\u770b\u4f5c\u5df2\u7ecf\u8fc7\u671f\u3002\n\neg\uff1a\u4e3a\u4e86\u8ba9\u6d4f\u89c8\u5668\u4e0d\u8981\u7f13\u5b58\u9875\u9762\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06Expires\u5b9e\u4f53\u62a5\u5934\u57df\uff0c\u8bbe\u7f6e\u4e3a0\u3002\n")),(0,a.kt)("h3",{id:"4\u5176\u4ed6"},"4.\u5176\u4ed6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Host \u6307\u5b9a\u539f\u59cb\u7684 URL \u4e2d\u7684\u4e3b\u673a\u548c\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"User-Agent\uff08\u7b80\u79f0UA\uff09\u6d4f\u89c8\u5668\u5185\u6838\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"Accept-Encoding   \u6d4f\u89c8\u5668\u53ef\u4ee5\u63a5\u6536\u7684\u7b97\u6cd5\uff0c\u5982gzip"),(0,a.kt)("li",{parentName:"ul"},"Accept-Language \u6d4f\u89c8\u5668\u53ef\u63a5\u6536\u7684\u8bed\u8a00\uff0c\u5982zh-CN"),(0,a.kt)("li",{parentName:"ul"},"Accept-Encoding",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u6d4f\u89c8\u5668\u7533\u660e\u81ea\u5df1\u53ef\u63a5\u6536\u7684\u7f16\u7801\u65b9\u6cd5\uff0c\u901a\u5e38\u6307\u5b9a\u538b\u7f29\u65b9\u6cd5\uff0c\u662f\u5426\u652f\u6301\u538b\u7f29\uff0c\u652f\u6301\u4ec0\u4e48\u538b\u7f29\u65b9\u6cd5\uff08gzip\uff0cdeflate\uff09;Servlet\u80fd\u591f\u5411\u652f\u6301gzip\u7684\u6d4f\u89c8\u5668\u8fd4\u56de\u7ecfgzip\u7f16\u7801\u7684HTML\u9875\u9762\u3002"))),(0,a.kt)("li",{parentName:"ul"},"Accept-Charset\uff1a\u53ef\u63a5\u53d7\u7684\u5e94\u7b54\u7684\u5b57\u7b26\u96c6;"),(0,a.kt)("li",{parentName:"ul"},"Content-Length\uff1a\u8868\u793a\u8bf7\u6c42\u6d88\u606f\u6b63\u6587\u7684\u957f\u5ea6\u3002")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2-bresponse-headers"},"2-b.Response headers"),(0,a.kt)("h3",{id:"1\u8bf7\u6c42\u76f8\u5173"},"1.\u8bf7\u6c42\u76f8\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access-Control-Allow-Origin \u8868\u793a\u63a5\u53d7\u90a3\u4e9b\u57df\u540d\u7684\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"Set-Cookie\t\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u8bbe\u7f6ecookie\uff0c\u53ef\u89c1\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u8bbe\u7f6e\u4e86\u591a\u4e2a cookie\n",(0,a.kt)("img",{src:l(56139).Z,width:"1741",height:"553"})),(0,a.kt)("li",{parentName:"ul"},"Allow\uff1a\u670d\u52a1\u5668\u652f\u6301\u54ea\u4e9b\u8bf7\u6c42\u65b9\u6cd5\uff08\u5982GET\u3001POST\u7b49\uff09\u3002")),(0,a.kt)("h3",{id:"2\u7f13\u5b58\u76f8\u5173"},"2.\u7f13\u5b58\u76f8\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cache-control: max-age=0, private, must-revalidate"),(0,a.kt)("li",{parentName:"ul"},'etag: W/"58a1839d41effc52b5e3054974c977b3"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ETag/Last-Modified \u54cd\u5e94\u5934\n\u91cd\u70b9\u8fd9\u4e8c\u8005\u5728\u534f\u5546\u7f13\u5b58\u4e2d\u5bf9\u5e94\nif-none-match/If-Modified-Since \u8bf7\u6c42\u5934\n")),(0,a.kt)("h3",{id:"2\u6587\u4ef6"},"2.\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Content-type\t\u8fd4\u56de\u6570\u636e\u7684\u683c\u5f0f\uff0c\u5982application/json"),(0,a.kt)("li",{parentName:"ul"},"Content-length\t\u8fd4\u56de\u6570\u636e\u7684\u5927\u5c0f\uff0c\u591a\u5c11\u5b57\u8282"),(0,a.kt)("li",{parentName:"ul"},"Content-Encoding\t\u8fd4\u56de\u6570\u636e\u7684\u538b\u7f29\u7b97\u6cd5\uff0c\u5982gzip")),(0,a.kt)("h2",{id:"3\u72b6\u6001\u7801"},"3.\u72b6\u6001\u7801"),(0,a.kt)("h3",{id:"\u6ce8\u610f3xx"},"\u6ce8\u610f3xx"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1xx \u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\u6536\u5230\n1xx\u5f00\u5934\u7684\u8bf7\u6c42\u8868\u793a\u670d\u52a1\u7aef\u5df2\u7ecf\u6536\u5230\u8bf7\u6c42\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709\u8fd4\u56de\u4fe1\u606f\u7ed9\u5ba2\u6237\u7aef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2xx \u8bf7\u6c42\u6210\u529f\uff0c\u5982200\u8868\u793a\u5ba2\u6237\u7aef\u5df2\u7ecf\u6210\u529f\u8bf7\u6c42\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3xx \u91cd\u5b9a\u5411\uff0c\u5982302\n\u5ba2\u6237\u7aef\u6536\u52303xx\u5f00\u5934\u7684\u72b6\u6001\u7801\u65f6\uff0c\u8868\u793a\u6b64\u65f6\u670d\u52a1\u7aef\u5df2\u7ecf\u4e0d\u518d\u7ba1\u5ba2\u6237\u7aef\u6240\u8bf7\u6c42\u5730\u5740\uff0c\u8ba9\u5ba2\u6237\u7aef\u53bb\u8bf7\u6c42\u53e6\u5916\u7684\u5730\u5740"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"301\tRedirect Permanently \u6c38\u4e45\u91cd\u5b9a\u5411\t\u914d\u5408location\uff0c\u6d4f\u89c8\u5668\u81ea\u52a8\u5904\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"302\tFound \u4e34\u65f6\u91cd\u5b9a\u5411\t\u914d\u5408location\uff0c\u6d4f\u89c8\u5668\u81ea\u52a8\u5904\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"304\tNot Modified \u8d44\u6e90\u672a\u88ab\u4fee\u6539\t\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u672a\u4fee\u6539\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u72b6\u6001\u7801\u65f6\uff0c\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u8d44\u6e90\u3002\u5ba2\u6237\u7aef\u901a\u5e38\u4f1a\u7f13\u5b58\u8bbf\u95ee\u8fc7\u7684\u8d44\u6e90\uff0c\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u5934\u4fe1\u606f\u6307\u51fa\u5ba2\u6237\u7aef\u5e0c\u671b\u53ea\u8fd4\u56de\u5728\u6307\u5b9a\u65e5\u671f\u4e4b\u540e\u4fee\u6539\u7684\u8d44\u6e90")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4xx \u5ba2\u6237\u7aef\u9519\u8bef:404\u8868\u793a\u5f53\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e86\u4e00\u4e2a\u670d\u52a1\u7aef\u5b8c\u5168\u4e0d\u8ba4\u8bc6\u7684\u5730\u5740\u65f6\uff0c\u5c31\u4f1a\u62a5\u51fa4xx\u7684\u9519\u8bef"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"404\tNot Found \u8d44\u6e90\u672a\u627e\u5230\t\u670d\u52a1\u5668\u65e0\u6cd5\u6839\u636e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u627e\u5230\u8d44\u6e90\uff08\u7f51\u9875\uff09"),(0,a.kt)("li",{parentName:"ul"},"403\tForbidden \u6ca1\u6709\u6743\u9650\t\u670d\u52a1\u5668\u7406\u89e3\u8bf7\u6c42\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u4f46\u662f\u62d2\u7edd\u6267\u884c\u6b64\u8bf7\u6c42"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"5xx \u670d\u52a1\u7aef\u9519\u8bef:500\u8868\u793a\u6b64\u9519\u8bef\u6765\u6e90\u4e8e\u670d\u52a1\u7aef\uff0c\u6bd4\u5982\u670d\u52a1\u7aef\u5199\u7684\u63a5\u53e3\u51fa\u73b0\u4e86bug\u7b49\u95ee\u9898"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"500\tInternal server Error \u670d\u52a1\u5668\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"504\tGateway Time-out\u7f51\u5173\u8d85\u65f6\t")))),(0,a.kt)("h3",{id:"401\u548c403"},"401\u548c403"),(0,a.kt)("p",null,"401\u8868\u793a\u7528\u6237\u672a\u901a\u8fc7\u8eab\u4efd\u6388\u6743\u3001\u9a8c\u8bc1\uff0c403\u8868\u793a\u7528\u6237\u53ef\u80fd\u901a\u8fc7\u4e86\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f46\u7f3a\u5c11\u6307\u5b9a\u6743\u9650"),(0,a.kt)("p",null,"401 Unauthorized"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7801401\u6807\u8bc6\u8ba4\u8bc1\u5931\u8d25\uff0c\u8868\u793a\u8bf7\u6c42\u6ca1\u6709\u88ab\u8ba4\u8bc1\u6216\u8005\u8ba4\u8bc1\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7531web\u670d\u52a1\u5668\u8fd4\u56de\uff0c\u800c\u4e0d\u662fweb\u5e94\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u573a\u666f\uff1atoken\u5931\u6548\u3001token\u7f3a\u5931\u3001token\u4f2a\u9020\uff0c\u5bfc\u81f4\u670d\u52a1\u7aef\u65e0\u6cd5\u8bc6\u522b\u8eab\u4efd\u3002")),(0,a.kt)("p",null,"403 Forbidden"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7801403\u8868\u793a\u6388\u6743\u5931\u8d25\uff0c\u901a\u5e38\u8868\u793a\u7528\u6237\u901a\u8fc7\u4e86\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f46\u7f3a\u5c11\u6743\u9650\u5bf9\u7ed9\u5b9a\u7684\u8d44\u6e90\u8fdb\u884c\u8bbf\u95ee\u6216\u8005\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7531web\u5e94\u7528\u8fd4\u56de\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u573a\u666f\uff1a\u7528\u6237\u767b\u5f55\u6210\u529f\uff0c\u4f46\u662f\u65e0\u6743\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u3002")),(0,a.kt)("h2",{id:"http\u548c\u5176\u4ed6\u534f\u8bae"},"http\u548c\u5176\u4ed6\u534f\u8bae"),(0,a.kt)("h3",{id:"udp\u534f\u8bae"},"UDP\u534f\u8bae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"UDP\uff08User Datagram Protocol\uff09\uff1a\u7528\u6237\u62a5\u6587\u534f\u8bae\n\u6ca1\u6709\u4efb\u4f55\u7279\u70b9\n\u548cTCP\u5bf9\u6bd4\uff1a\u4e0d\u53ef\u9760\u3001\u65e0\u8fde\u63a5\u3001\u9762\u5411\u62a5\u6587\n1. \u7f51\u7edc\u7684\u57fa\u672c\u60c5\u51b5\u5c31\u662f\u4e0d\u53ef\u9760\u7684\n")),(0,a.kt)("p",null,"\u573a\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"UDP\u534f\u8bae\u7684\u6700\u9002\u7528\u573a\u666f\n\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u8f83\u9ad8\uff0c\u5bf9\u53ef\u9760\u6027\u8981\u6c42\u8f83\u4f4e\u7684\u573a\u666f\n\u5b9e\u65f6\u804a\u5929\uff08\u8bed\u97f3\u3001\u89c6\u9891\u804a\u5929)\nUDP\u652f\u6301\u5e7f\u64ad\u3002\u5982\u679c\u6709\u5e7f\u64ad\u9700\u6c42\uff0c\u4e5f\u53ef\u4ee5\u8003\u8651\u7528UDP\u3002\n")),(0,a.kt)("p",null,"UDP\u6709\u70b9\u50cf\u8857\u5934\u7684\u90ae\u7b52\uff0c\u5e94\u7528\u7a0b\u5e8f\u7684\u6570\u636e\u5305\u6254\u8fdb\u90ae\u7b52\u5c31\u597d\u4e86\uff0c\u5c31\u8010\u5fc3\u5730\u7b49\u5f85\u6570\u636e\u5305\u5230\u8fbe\u76ee\u7684\u5730\u3002\u4f46\u6254\u8fdb\u90ae\u7b52\u4e4b\u524d\uff0c\u9700\u8981\u5199\u597d\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6536\u4ef6\u4eba\u7684\u5730\u5740\uff08\u76ee\u7684IP\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6536\u4ef6\u4eba\u7684\u59d3\u540d\uff08\u76ee\u7684\u7aef\u53e3\u53f7\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5bc4\u4ef6\u4eba\u5730\u5740\uff08\u6e90IP\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5bc4\u4ef6\u4eba\u59d3\u540d\uff08\u6e90\u7aef\u53e3\u53f7\uff09")),(0,a.kt)("p",null,"IP\u53f8\u673a\u4f1a\u77ac\u95f4\u5730\u5c06\u90ae\u7b52\u91cc\u7684\u4fe1\u4ef6\uff0c\u8fd0\u5f80\u4e16\u754c\u5404\u4e2a\u89d2\u843d\u3002"),(0,a.kt)("p",null,"\u6bd4\u8f83\u5962\u4f88\u7684\u662f\uff0c\u4e00\u4e2aIP\u53f8\u673a\u8fd0\u4e00\u4ef6\u4fe1\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u6d4f\u89c8\u5668\u3001\u90ae\u4ef6\u5ba2\u6237\u7aef\u5374\u4e00\u76f4\u548cUDP\u534f\u8bae\u76f4\u63a5\u6253\u4ea4\u9053\u3002\u8981\u4e0b\u8f7d\u6587\u4ef6\uff0c\u9996\u5148\u8981\u57df\u540d\u89e3\u6790\u83b7\u5f97\u670d\u52a1\u5668\u7684IP\u5730\u5740\uff0c\u800c\u5b8c\u6210\u57df\u540d\u89e3\u6790\u4efb\u52a1\u7684\u662fDNS\u534f\u8bae\u3002"),(0,a.kt)("h3",{id:"dns\u534f\u8bae"},"DNS\u534f\u8bae"),(0,a.kt)("p",null,"DNS\u534f\u8bae\u5c06\u81ea\u5df1\u7684\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u62a5\u6587\u6254\u5230UDP\u90ae\u7b52\u91cc\uff0c\u88abIP\u53f8\u673a\u8fd0\u8f93\u5230\u57df\u540d\u670d\u52a1\u5668\u5bb6\u4e2d\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u57df\u540d\u89e3\u6790\u5e94\u7b54\uff0c\u540c\u6837\u901a\u8fc7UDP\u90ae\u7b52\u90ae\u5bc4\u670d\u52a1\u3002"),(0,a.kt)("h3",{id:"http\u4e0eftp\u7684\u5f02\u540c\u70b9"},"HTTP\u4e0eFTP\u7684\u5f02\u540c\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540c:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f\u5e94\u7528\u5c42\u534f\u8bae\uff1b\u8fd0\u884c\u5728TCP\u4e0a\uff0c\u5373\u90fd\u4f7f\u7528TCP\uff08\u800c\u4e0d\u662fUDP\uff09\u4f5c\u4e3a\u5176\u652f\u6491\u7684\u8fd0\u8f93\u5c42\u534f\u8bae\u3002 "))),(0,a.kt)("li",{parentName:"ul"},"\u5f02\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP\u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff0c\u662f\u9762\u5411\u7f51\u9875\u7684\uff1bFTP\u662f\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff0c\u662f\u9762\u5411\u6587\u4ef6\u7684\u3002 "),(0,a.kt)("li",{parentName:"ul"},"HTTP\u534f\u8bae\u9ed8\u8ba4\u7aef\u53e3\uff1a80\u53f7\u7aef\u53e3\u3002FTP\u534f\u8bae\u9ed8\u8ba4\u7aef\u53e3\uff1a21\u53f7\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"FTP\u7684\u63a7\u5236\u4fe1\u606f\u662f\u5e26\u5916\uff08out-of-band\uff09\u4f20\u9001\u7684\uff0c\u800cHTTP\u7684\u63a7\u5236\u4fe1\u606f\u662f\u5e26\u5185\uff08in-band\uff09\u4f20\u9001\u7684"),(0,a.kt)("li",{parentName:"ul"},"FTP\u670d\u52a1\u5668\u5fc5\u987b\u5728\u6574\u4e2a\u4f1a\u8bdd\u671f\u95f4\u4fdd\u7559\u7528\u6237\u7684\u72b6\u6001\uff08state\uff09\u4fe1\u606f\uff0c\u800cHTTP\u662f\u65e0\u72b6\u6001\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"FTP\u7684\u63a7\u5236\u8fde\u63a5\u662f\u6301\u4e45\u8fde\u63a5\uff0c\u6570\u636e\u8fde\u63a5\u662f\u975e\u6301\u4e45\u8fde\u63a5\uff1b\u800cHTTP\u65e2\u53ef\u4ee5\u4f7f\u7528\u975e\u6301\u4e45\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6301\u4e45\u8fde\u63a5\uff0c\u9ed8\u8ba4\u65b9\u5f0f\u4e0b\uff0cHTTP\u4f7f\u7528\u6301\u4e45\u8fde\u63a5\u3002 ")))),(0,a.kt)("h3",{id:"\u901a\u4fe1\u6570\u636e\u8f6c\u53d1\u7a0b\u5e8f\u4ee3\u7406\u7f51\u5173\u96a7\u9053"},"\u901a\u4fe1\u6570\u636e\u8f6c\u53d1\u7a0b\u5e8f\uff1a\u4ee3\u7406\uff0c\u7f51\u5173\uff0c\u96a7\u9053"),(0,a.kt)("p",null,"http\u901a\u4fe1\u65f6\u5019\uff0c\u9664\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4ee5\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u7528\u4e8e\u901a\u4fe1\u6570\u636e\u8f6c\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f8b\u5982\u4ee3\u7406\uff0c\u7f51\u5173\uff0c\u96a7\u9053\u3002"),(0,a.kt)("p",null,"\u4ee3\u7406:\u4e2d\u95f4\u4eba\n\u7f51\u5173\uff1a\u53ef\u4ee5\u7531http\u8f6c\u5316\u4e3a\u5176\u4ed6\u901a\u4fe1\n\u96a7\u9053\uff1a\u786e\u4fdd\u5b89\u5168\u901a\u4fe1\uff0c\u4e0d\u4f1a\u89e3\u6790http\u8bf7\u6c42\uff0c\u96a7\u9053\u5728\u53cc\u65b9\u65ad\u5f00\u8fde\u63a5\u4e2d\u65ad"))}d.isMDXComponent=!0},56139:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/setCookie\u5b57\u6bb5-ce2a5fce5f9956c6408c97e3c7786c73.png"}}]);