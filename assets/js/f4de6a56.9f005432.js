"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8093],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[p]="string"==typeof t?t:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19075:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},o="\u5b58\u50a8\u7c7b",c={unversionedId:"C++-V8/C++/\u5b58\u50a8\u7c7b",id:"C++-V8/C++/\u5b58\u50a8\u7c7b",title:"\u5b58\u50a8\u7c7b",description:"\u5b58\u50a8\u7c7b\u5b9a\u4e49 c \u7a0b\u5e8f\u4e2d\u53d8\u91cf/\u51fd\u6570\u7684\u8303\u56f4\uff08\u53ef\u89c1\u6027\uff09\u548c\u751f\u547d\u5468\u671f\u3002\u8fd9\u4e9b\u8bf4\u660e\u7b26\u653e\u7f6e\u5728\u5b83\u4eec\u6240\u4fee\u9970\u7684\u7c7b\u578b\u4e4b\u524d\u3002\u4e0b\u9762\u5217\u51fa c \u7a0b\u5e8f\u4e2d\u53ef\u7528\u7684\u5b58\u50a8\u7c7b\uff1a",source:"@site/programming-tech/C++-V8/C++/02-\u5b58\u50a8\u7c7b.md",sourceDirName:"C++-V8/C++",slug:"/C++-V8/C++/\u5b58\u50a8\u7c7b",permalink:"/C++-V8/C++/\u5b58\u50a8\u7c7b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/C++-V8/C++/02-\u5b58\u50a8\u7c7b.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"start",permalink:"/C++-V8/C++/start"},next:{title:"\u8fd0\u7b97\u7b26",permalink:"/C++-V8/C++/\u8fd0\u7b97\u7b26"}},i={},u=[{value:"auto \u5b58\u50a8\u7c7b,\u5728 c17 \u4e2d\u5df2\u5220\u9664\u8fd9\u4e00\u7528\u6cd5\u3002",id:"auto-\u5b58\u50a8\u7c7b\u5728-c17-\u4e2d\u5df2\u5220\u9664\u8fd9\u4e00\u7528\u6cd5",level:2},{value:"register \u5b58\u50a8\u7c7b \u5e9f\u5f03",id:"register-\u5b58\u50a8\u7c7b-\u5e9f\u5f03",level:2},{value:"static \u5b58\u50a8\u7c7b",id:"static-\u5b58\u50a8\u7c7b",level:2},{value:"extern \u5b58\u50a8\u7c7b",id:"extern-\u5b58\u50a8\u7c7b",level:2},{value:"mutable \u5b58\u50a8\u7c7b",id:"mutable-\u5b58\u50a8\u7c7b",level:2},{value:"thread_local \u5b58\u50a8\u7c7b",id:"thread_local-\u5b58\u50a8\u7c7b",level:2}],s={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b58\u50a8\u7c7b"},"\u5b58\u50a8\u7c7b"),(0,a.kt)("p",null,"\u5b58\u50a8\u7c7b\u5b9a\u4e49 c \u7a0b\u5e8f\u4e2d\u53d8\u91cf/\u51fd\u6570\u7684\u8303\u56f4\uff08\u53ef\u89c1\u6027\uff09\u548c\u751f\u547d\u5468\u671f\u3002\u8fd9\u4e9b\u8bf4\u660e\u7b26\u653e\u7f6e\u5728\u5b83\u4eec\u6240\u4fee\u9970\u7684\u7c7b\u578b\u4e4b\u524d\u3002\u4e0b\u9762\u5217\u51fa c \u7a0b\u5e8f\u4e2d\u53ef\u7528\u7684\u5b58\u50a8\u7c7b\uff1a\nauto\nregister\nstatic\nextern\nmutable\nthread_local (c11)"),(0,a.kt)("p",null,"\u4ece c 17 \u5f00\u59cb\uff0cauto \u5173\u952e\u5b57\u4e0d\u518d\u662f c \u5b58\u50a8\u7c7b\u8bf4\u660e\u7b26\uff0c\u4e14 register \u5173\u952e\u5b57\u88ab\u5f03\u7528\u3002"),(0,a.kt)("h2",{id:"auto-\u5b58\u50a8\u7c7b\u5728-c17-\u4e2d\u5df2\u5220\u9664\u8fd9\u4e00\u7528\u6cd5"},"auto \u5b58\u50a8\u7c7b,\u5728 c17 \u4e2d\u5df2\u5220\u9664\u8fd9\u4e00\u7528\u6cd5\u3002"),(0,a.kt)("p",null,"\u81ea c 11 \u4ee5\u6765\uff0cauto \u5173\u952e\u5b57\u7528\u4e8e\u4e24\u79cd\u60c5\u51b5\uff1a\u58f0\u660e\u53d8\u91cf\u65f6\u6839\u636e\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\u81ea\u52a8\u63a8\u65ad\u8be5\u53d8\u91cf\u7684\u7c7b\u578b\u3001\u58f0\u660e\u51fd\u6570\u65f6\u51fd\u6570\u8fd4\u56de\u503c\u7684\u5360\u4f4d\u7b26\u3002"),(0,a.kt)("p",null,"c98\u6807\u51c6\u4e2dauto\u5173\u952e\u5b57\u7528\u4e8e\u81ea\u52a8\u53d8\u91cf\u7684\u58f0\u660e\uff0c\u4f46\u7531\u4e8e\u4f7f\u7528\u6781\u5c11\u4e14\u591a\u4f59\uff0c\u5728 c17 \u4e2d\u5df2\u5220\u9664\u8fd9\u4e00\u7528\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"auto f=3.14;      //double\nauto s(\"hello\");  //const char*\nauto z = new auto(9); // int*\nauto x1 = 5, x2 = 5.0, x3='r';//\u9519\u8bef\uff0c\u5fc5\u987b\u662f\u521d\u59cb\u5316\u4e3a\u540c\u4e00\u7c7b\u578b\n")),(0,a.kt)("h2",{id:"register-\u5b58\u50a8\u7c7b-\u5e9f\u5f03"},"register \u5b58\u50a8\u7c7b \u5e9f\u5f03"),(0,a.kt)("p",null,"register \u5b58\u50a8\u7c7b\u7528\u4e8e\u5b9a\u4e49\u5b58\u50a8\u5728\u5bc4\u5b58\u5668\u4e2d\u800c\u4e0d\u662f RAM \u4e2d\u7684\u5c40\u90e8\u53d8\u91cf\u3002\u8fd9\u610f\u5473\u7740\u53d8\u91cf\u7684\u6700\u5927\u5c3a\u5bf8\u7b49\u4e8e\u5bc4\u5b58\u5668\u7684\u5927\u5c0f\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u8bcd\uff09\uff0c\u4e14\u4e0d\u80fd\u5bf9\u5b83\u5e94\u7528\u4e00\u5143\u7684 '&' \u8fd0\u7b97\u7b26\uff08\u56e0\u4e3a\u5b83\u6ca1\u6709\u5185\u5b58\u4f4d\u7f6e\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"{\n   register int  miles;\n}\n")),(0,a.kt)("h2",{id:"static-\u5b58\u50a8\u7c7b"},"static \u5b58\u50a8\u7c7b"),(0,a.kt)("p",null,"static \u5b58\u50a8\u7c7b\u6307\u793a\u7f16\u8bd1\u5668\u5728\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u5185\u4fdd\u6301\u5c40\u90e8\u53d8\u91cf\u7684\u5b58\u5728\uff0c\u800c\u4e0d\u9700\u8981\u5728\u6bcf\u6b21\u5b83\u8fdb\u5165\u548c\u79bb\u5f00\u4f5c\u7528\u57df\u65f6\u8fdb\u884c\u521b\u5efa\u548c\u9500\u6bc1\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u4f7f\u7528 static \u4fee\u9970\u5c40\u90e8\u53d8\u91cf\u53ef\u4ee5\u5728\u51fd\u6570\u8c03\u7528\u4e4b\u95f4\u4fdd\u6301\u5c40\u90e8\u53d8\u91cf\u7684\u503c\u3002\nstatic \u4fee\u9970\u7b26\u4e5f\u53ef\u4ee5\u5e94\u7528\u4e8e\u5168\u5c40\u53d8\u91cf\u3002\u5f53 static \u4fee\u9970\u5168\u5c40\u53d8\u91cf\u65f6\uff0c\u4f1a\u4f7f\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u9650\u5236\u5728\u58f0\u660e\u5b83\u7684\u6587\u4ef6\u5185\u3002"),(0,a.kt)("p",null,"\u5728 c \u4e2d\uff0c\u5f53 static \u7528\u5728\u7c7b\u6570\u636e\u6210\u5458\u4e0a\u65f6\uff0c\u4f1a\u5bfc\u81f4\u4ec5\u6709\u4e00\u4e2a\u8be5\u6210\u5458\u7684\u526f\u672c\u88ab\u7c7b\u7684\u6240\u6709\u5bf9\u8c61\u5171\u4eab\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <iostream>\n \n// \u51fd\u6570\u58f0\u660e \nvoid func(void);\n \nstatic int count = 10; /* \u5168\u5c40\u53d8\u91cf */\n \nint main()\n{\n    while(count--)\n    {\n       func();\n    }\n    return 0;\n}\n// \u51fd\u6570\u5b9a\u4e49\nvoid func( void )\n{\n    static int i = 5; // \u5c40\u90e8\u9759\u6001\u53d8\u91cf\n    i++;\n    std::cout << "\u53d8\u91cf i \u4e3a " << i ;\n    std::cout << " , \u53d8\u91cf count \u4e3a " << count << std::endl;\n}\n/*\n\u53d8\u91cf i \u4e3a 6 , \u53d8\u91cf count \u4e3a 9\n\u53d8\u91cf i \u4e3a 7 , \u53d8\u91cf count \u4e3a 8\n\u53d8\u91cf i \u4e3a 8 , \u53d8\u91cf count \u4e3a 7\n\u53d8\u91cf i \u4e3a 9 , \u53d8\u91cf count \u4e3a 6\n\u53d8\u91cf i \u4e3a 10 , \u53d8\u91cf count \u4e3a 5\n\u53d8\u91cf i \u4e3a 11 , \u53d8\u91cf count \u4e3a 4\n\u53d8\u91cf i \u4e3a 12 , \u53d8\u91cf count \u4e3a 3\n\u53d8\u91cf i \u4e3a 13 , \u53d8\u91cf count \u4e3a 2\n\u53d8\u91cf i \u4e3a 14 , \u53d8\u91cf count \u4e3a 1\n\u53d8\u91cf i \u4e3a 15 , \u53d8\u91cf count \u4e3a 0\n*/\n')),(0,a.kt)("h2",{id:"extern-\u5b58\u50a8\u7c7b"},"extern \u5b58\u50a8\u7c7b"),(0,a.kt)("p",null,"extern \u5b58\u50a8\u7c7b\u7528\u4e8e\u63d0\u4f9b\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u7684\u5f15\u7528\uff0c\u5168\u5c40\u53d8\u91cf\u5bf9\u6240\u6709\u7684\u7a0b\u5e8f\u6587\u4ef6\u90fd\u662f\u53ef\u89c1\u7684\u3002\u5f53\u60a8\u4f7f\u7528 'extern' \u65f6\uff0c\u5bf9\u4e8e\u65e0\u6cd5\u521d\u59cb\u5316\u7684\u53d8\u91cf\uff0c\u4f1a\u628a\u53d8\u91cf\u540d\u6307\u5411\u4e00\u4e2a\u4e4b\u524d\u5b9a\u4e49\u8fc7\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5f53\u60a8\u6709\u591a\u4e2a\u6587\u4ef6\u4e14\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u4f7f\u7528\u7684\u5168\u5c40\u53d8\u91cf\u6216\u51fd\u6570\u65f6\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d\u4f7f\u7528 extern \u6765\u5f97\u5230\u5df2\u5b9a\u4e49\u7684\u53d8\u91cf\u6216\u51fd\u6570\u7684\u5f15\u7528\u3002\u53ef\u4ee5\u8fd9\u4e48\u7406\u89e3\uff0cextern \u662f\u7528\u6765\u5728\u53e6\u4e00\u4e2a\u6587\u4ef6\u4e2d\u58f0\u660e\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u6216\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"mutable-\u5b58\u50a8\u7c7b"},"mutable \u5b58\u50a8\u7c7b"),(0,a.kt)("p",null,"mutable \u8bf4\u660e\u7b26\u4ec5\u9002\u7528\u4e8e\u7c7b\u7684\u5bf9\u8c61\uff0c\u8fd9\u5c06\u5728\u672c\u6559\u7a0b\u7684\u6700\u540e\u8fdb\u884c\u8bb2\u89e3\u3002\u5b83\u5141\u8bb8\u5bf9\u8c61\u7684\u6210\u5458\u66ff\u4ee3\u5e38\u91cf\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cmutable \u6210\u5458\u53ef\u4ee5\u901a\u8fc7 const \u6210\u5458\u51fd\u6570\u4fee\u6539\u3002"),(0,a.kt)("h2",{id:"thread_local-\u5b58\u50a8\u7c7b"},"thread_local \u5b58\u50a8\u7c7b"),(0,a.kt)("p",null,"\u4f7f\u7528 thread_local \u8bf4\u660e\u7b26\u58f0\u660e\u7684\u53d8\u91cf\u4ec5\u53ef\u5728\u5b83\u5728\u5176\u4e0a\u521b\u5efa\u7684\u7ebf\u7a0b\u4e0a\u8bbf\u95ee\u3002 \u53d8\u91cf\u5728\u521b\u5efa\u7ebf\u7a0b\u65f6\u521b\u5efa\uff0c\u5e76\u5728\u9500\u6bc1\u7ebf\u7a0b\u65f6\u9500\u6bc1\u3002 \u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u6709\u5176\u81ea\u5df1\u7684\u53d8\u91cf\u526f\u672c\u3002"),(0,a.kt)("p",null,"thread_local \u8bf4\u660e\u7b26\u53ef\u4ee5\u4e0e static \u6216 extern \u5408\u5e76\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06 thread_local \u4ec5\u5e94\u7528\u4e8e\u6570\u636e\u58f0\u660e\u548c\u5b9a\u4e49\uff0cthread_local \u4e0d\u80fd\u7528\u4e8e\u51fd\u6570\u58f0\u660e\u6216\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6f14\u793a\u4e86\u53ef\u4ee5\u88ab\u58f0\u660e\u4e3a thread_local \u7684\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"thread_local int x;  // \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u5168\u5c40\u53d8\u91cf\nclass X\n{\n    static thread_local std::string s; // \u7c7b\u7684static\u6210\u5458\u53d8\u91cf\n};\nstatic thread_local std::string X::s;  // X::s \u662f\u9700\u8981\u5b9a\u4e49\u7684\n \nvoid foo()\n{\n    thread_local std::vector<int> v;  // \u672c\u5730\u53d8\u91cf\n}\n")))}d.isMDXComponent=!0}}]);