"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5558],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},s="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),s=u(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||g[m]||o;return t?r.createElement(f,c(c({ref:e},p),{},{components:t})):r.createElement(f,c({ref:e},p))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[s]="string"==typeof n?n:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8407:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={},c=void 0,i={unversionedId:"backend/golang/03-1-function",id:"backend/golang/03-1-function",title:"03-1-function",description:"\u53c2\u6570",source:"@site/programming-tech/backend/08-golang/03-1-function.md",sourceDirName:"backend/08-golang",slug:"/backend/golang/03-1-function",permalink:"/backend/golang/03-1-function",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/backend/08-golang/03-1-function.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"redis",permalink:"/backend/pm2-Docker/redis"},next:{title:"03-2-\u51fd\u6570\u62e5\u6709\u8005",permalink:"/backend/golang/03-2-\u51fd\u6570\u62e5\u6709\u8005"}},l={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"B1.\u8fd4\u56de\u503c",id:"b1\u8fd4\u56de\u503c",level:2},{value:"B2:\u591a\u4e2a\u8fd4\u56de\u503c\u4f7f\u7528\u5b9e\u4f8b",id:"b2\u591a\u4e2a\u8fd4\u56de\u503c\u4f7f\u7528\u5b9e\u4f8b",level:2},{value:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570",id:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570",level:2}],p={toc:u},s="wrapper";function g(n){let{components:e,...t}=n;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//\u591a\u4e2a\u540c\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u53ef\u7701\u7565\u524d\u9762\u7684\u7c7b\u578b\n\nfunc testFn(x, y int){\n\n    fmt.Println(x, y)\n\n}\n\n\n\n//\u591a\u4e2a\u540c\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u53ef\u7701\u7565\u524d\u9762\u7684\u7c7b\u578b\nfunc testSum(x int, y int)int{\n\n    ret := x + y\n\n    return ret\n\n}\n")),(0,a.kt)("h2",{id:"b1\u8fd4\u56de\u503c"},"B1.\u8fd4\u56de\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \u591a\u4e2a\u8fd4\u56de\u503c\uff0c\u4e5f\u652f\u6301\u53c2\u6570\u7b80\u5199\nfunc calc(a, b int)(sum, sub int){\n\n    sum = a + b\n\n    sub = a - b\n\n    return\n}\n\n\n//\u5982\u4e0d\u9700\u8981\u7b2c\u4e8c\u53c2\u6570,\u76f4\u63a5\u4f7f\u7528\u4e0b\u5212\u7ebf\u6765\u5360\u4f4d\ni, _ := div(11, 3)\n")),(0,a.kt)("h2",{id:"b2\u591a\u4e2a\u8fd4\u56de\u503c\u4f7f\u7528\u5b9e\u4f8b"},"B2:\u591a\u4e2a\u8fd4\u56de\u503c\u4f7f\u7528\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//\u5229\u7528golang\u4e2d\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u503c\u7684\u7279\u6027\u6765\u76f4\u63a5\u5c06a b\u4e24\u4e2a\u503c\u76f8\u53cd\u8fd4\u56de,\u7136\u540e\u518d\u8ba9\u8c03\u7528\u51fd\u6570\u4e2d\u7684a ,b\u4e24\u4e2a\u53d8\u91cf\u63a5\u6536.\nfunc swapByReturn(a,b int) (c,d int)  {\n    return b,a\n}\n \nfunc main() {\n    a, b := 1, 2\n \n    a, b = swapByReturn(a, b)\n \n    fmt.Println(a, b)\n}\n")),(0,a.kt)("h2",{id:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570"},"\u53ef\u53d8\u53c2\u6570\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"/**\n\u5728\u5199\u51fd\u6570\u5f97\u8fc7\u7a0b\u4e2d,\u53d1\u73b0golang\u662f\u6ca1\u6709\u51fd\u6570\u91cd\u8f7d,\u6ca1\u6709\u9ed8\u8ba4\u53c2\u6570,\u53ef\u9009\u53c2\u6570\u8fd9\u4e9b\u4e1c\u897f\n\u53ea\u6709\u4e00\u4e2a \u5c31\u662f\u53ef\u53d8\u53c2\u6570 \u65e2...\u4e09\u4e2a\u70b9\u4ee3\u8868\n*/\nfunc addAll(sum ...int) int {\n \n    s := 0\n    for e := range sum {\n        s += sum[e]\n    }\n \n    return s\n}\n")))}g.isMDXComponent=!0}}]);