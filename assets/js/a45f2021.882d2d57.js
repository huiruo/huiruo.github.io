"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4785],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=r.createContext({}),s=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(i.Provider,{value:e},n.children)},p="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,i=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=s(t),g=o,m=p["".concat(i,".").concat(g)]||p[g]||f[g]||a;return t?r.createElement(m,l(l({ref:e},u),{},{components:t})):r.createElement(m,l({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=g;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c[p]="string"==typeof n?n:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80343:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u9898\u76ee",sidebar_position:14},l=void 0,c={unversionedId:"promise-eventLoop-security/\u9898\u76ee",id:"promise-eventLoop-security/\u9898\u76ee",title:"\u9898\u76ee",description:"\u80fd\u8bbf\u95eeclosure\uff0c\u4f46this\u503c\u6539\u53d8",source:"@site/programming-tech/promise-eventLoop-security/\u9898\u76ee.md",sourceDirName:"promise-eventLoop-security",slug:"/promise-eventLoop-security/\u9898\u76ee",permalink:"/promise-eventLoop-security/\u9898\u76ee",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/promise-eventLoop-security/\u9898\u76ee.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"\u9898\u76ee",sidebar_position:14},sidebar:"docs",previous:{title:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027-\u9632\u6296\u51fd\u6570",permalink:"/promise-eventLoop-security/\u8f85-\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},next:{title:"\u52a8\u6001\u52a0\u8f7d",permalink:"/build-webpack/dynamic-import/\u52a8\u6001\u52a0\u8f7d"}},i={},s=[{value:"\u80fd\u8bbf\u95eeclosure\uff0c\u4f46this\u503c\u6539\u53d8",id:"\u80fd\u8bbf\u95eeclosure\u4f46this\u503c\u6539\u53d8",level:2},{value:"3-3.\u533f\u540d\u51fd\u6570\u7684\u4f5c\u7528",id:"3-3\u533f\u540d\u51fd\u6570\u7684\u4f5c\u7528",level:3}],u={toc:s},p="wrapper";function f(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u80fd\u8bbf\u95eeclosure\u4f46this\u503c\u6539\u53d8"},"\u80fd\u8bbf\u95eeclosure\uff0c\u4f46this\u503c\u6539\u53d8"),(0,o.kt)("p",null,'\u56e0\u4e3aobj.func("arg") = \u8fd4\u56de\u7684\u533f\u540d\u51fd\u6570\uff0c\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u660e\u663e\u662f windows'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function closure(arg) {\n  var a = \"closure\";\n  console.log('a1:',a);//(1) closure\n  console.log('a2:',this);//(2) obj\u5bf9\u8c61\n  return function () {\n    console.log('a3:',a);//(4) closure\n    console.log('a4:',arg); // (5) arg\n    console.log('a5:',this);//(6) window\u5bf9\u8c61\n  }\n}\nvar obj = {\n  func: closure\n}\nfunction func() {\n  obj.func(\"arg\")();\n  console.log(\"funcEnd\");// (3)funcEnd\n}\nfunc()\n")),(0,o.kt)("h1",{id:"\u51fd\u6570\u63d0\u5347\u9898\u76ee"},"\u51fd\u6570\u63d0\u5347\u9898\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var a = 100;  \nfunction test(){  \n  console.log("a",a);  \n  a = 10;\n  console.log("b",a);  \n}  \ntest();\nconsole.log("c",a);\n/*\n100\uff0c 10\uff0c 10\n*/\n')),(0,o.kt)("p",null,"2021.07.16\u9762\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var a=10;\n(function (){\n    console.log("1:",a)\n    a = 5;\n    console.log("2:",window.a)\n    var a = 20;\n    console.log("3:",a)\n})()\n/*\n\u81ea\u5df1\u7684\u7b54\u6848\uff1a\nundefined\n5\n20\n*/\n/*\n\u5b9e\u9645\u7b54\u6848\uff1a\n1: undefined\n2: 10\n3: 20\n*/\n')),(0,o.kt)("p",null,"\u9898\u76ee\uff1a\u7ed3\u5408this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var User = {\n count: 1,\n getCount: function() {\n  return this.count;\n }\n};\nconsole.log(User.getCount()); \nvar func = User.getCount;\nconsole.log(func());\n/*\n1\nundefined\n*/\nfunc\u662f\u5728window\u7684\u4e0a\u4e0b\u6587\u4e2d\u88ab\u6267\u884c\u7684\uff0c\u6240\u4ee5\u4e0d\u4f1a\u8bbf\u95ee\u5230count\u5c5e\u6027\u3002\n")),(0,o.kt)("h3",{id:"3-3\u533f\u540d\u51fd\u6570\u7684\u4f5c\u7528"},"3-3.\u533f\u540d\u51fd\u6570\u7684\u4f5c\u7528"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u82e5\u8981\u521b\u5efa\u4e00\u4e2a\u95ed\u5305\uff0c\u5f80\u5f80\u90fd\u9700\u8981\u7528\u5230\u533f\u540d\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6a21\u62df\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u51cf\u5c11\u5168\u5c40\u53d8\u91cf\u3002\u6267\u884c\u5b8c\u533f\u540d\u51fd\u6570\uff0c\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u76f8\u5bf9\u5e94\u7684\u53d8\u91cf\u4f1a\u88ab\u9500\u6bc1\uff0c\u4ece\u800c\u8282\u7701\u5185\u5b58\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fn(){\n    (function(){\n        var test = '\u533f\u540d\u51fd\u6570'\n    })();\n    console.log(test); // \u62a5\u9519\n}\n\nfn();\n")),(0,o.kt)("p",null,"\u573a\u666f1\uff1a\u51fd\u6570\u8868\u8fbe\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var fn = function(){\n    return "\u533f\u540d\u51fd\u6570"\n}\n// \u8c03\u7528\u65b9\u5f0f\u4e0e\u8c03\u7528\u666e\u901a\u51fd\u6570\u4e00\u6837\nconsole.log(fn());\n')),(0,o.kt)("p",null,"\u573a\u666f2\uff1a\u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'setInterval(function(){\n    console.log("\u533f\u540d\u51fd\u6570");\n},1000);\n')),(0,o.kt)("p",null,"\u573a\u666f3\uff1a\u5c06\u533f\u540d\u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fn(){\n    var test = '\u533f\u540d\u51fd\u6570'\n    return function(){\n        return test;\n    }\n}\n\n//\u8c03\u7528\u533f\u540d\u51fd\u6570\nconsole.log(fn()());\n//\u6216\nvar box = fn();\nconsole.log(box());\n")))}f.isMDXComponent=!0}}]);