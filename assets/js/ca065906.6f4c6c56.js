"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),y=l(r),m=o,g=y["".concat(s,".").concat(m)]||y[m]||u[m]||a;return r?n.createElement(g,c(c({ref:t},i),{},{components:r})):n.createElement(g,c({ref:t},i))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[y]="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,p={unversionedId:"JavaScript/for\u5e38\u7528\u5faa\u73af/keys-getOwnPropertyNames",id:"JavaScript/for\u5e38\u7528\u5faa\u73af/keys-getOwnPropertyNames",title:"keys-getOwnPropertyNames",description:"Object.keys()",source:"@site/programming-tech/JavaScript/03-for\u5e38\u7528\u5faa\u73af/03-keys-getOwnPropertyNames.md",sourceDirName:"JavaScript/03-for\u5e38\u7528\u5faa\u73af",slug:"/JavaScript/for\u5e38\u7528\u5faa\u73af/keys-getOwnPropertyNames",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/keys-getOwnPropertyNames",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/03-for\u5e38\u7528\u5faa\u73af/03-keys-getOwnPropertyNames.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"forin-\u904d\u5386\u5bf9\u8c61",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/forin-\u904d\u5386\u5bf9\u8c61"},next:{title:"typeScript",permalink:"/JavaScript/ts/typeScript"}},s={},l=[{value:"Object.keys()",id:"objectkeys",level:2},{value:"Object.getOwnPropertyNames()",id:"objectgetownpropertynames",level:2}],i={toc:l},y="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objectkeys"},"Object.keys()"),(0,o.kt)("p",null,"keys() \u662f Object \u7684\u9759\u6001\u51fd\u6570\uff0c\u4e13\u95e8\u7528\u6765\u904d\u5386\u5bf9\u8c61\u83b7\u53d6\u952e\u540d\u3002Object.keys() \u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c"),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5143\u7d20\u662f\u8be5\u5bf9\u8c61\u6240\u4ee5\u672c\u5730\u5c5e\u6027\u540d\u3002\u5982\u679c\u4f7f\u7528\u8be5\u51fd\u6570\u8fed\u4ee3\u6570\u7ec4\uff0c\u53ef\u4ee5\u6c47\u96c6\u6570\u7ec4\u7684\u6240\u6709\u5143\u7d20\u4e0b\u6807\u503c\u3002"),(0,o.kt)("p",null,"keys \u529f\u80fd\u6bd4\u8f83\u4e13\u4e00\uff0c\u5e94\u7528\u8303\u56f4\u6bd4\u8f83\u7a84\uff0c\u4f46\u662f\u6267\u884c\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\nObject \u7c7b\u578b\u6ca1\u6709\u5b9a\u4e49 length \u539f\u578b\u5c5e\u6027\uff0c\u53ef\u4ee5\u5229\u7528 keys \u65b9\u6cd5\u83b7\u53d6\u5bf9\u8c61\u7684\u957f\u5ea6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [\"A\", \"B\", \"C\"];\nconsole.log(Object.keys(arr));  // ['0', '1', '2']\n\nvar obj = { a: \"A\", b: \"B\", c: \"C\" };\nconsole.log(Object.keys(obj));  // ['a', 'b', 'c']\n")),(0,o.kt)("h2",{id:"objectgetownpropertynames"},"Object.getOwnPropertyNames()"),(0,o.kt)("p",null,"Object \u8fd8\u6709\u4e00\u4e2a\u7c7b\u4f3c\u7684\u9759\u6001\u51fd\u6570\uff1agetOwnPropertyNames(),\u4e0e keys \u7528\u6cd5\u76f8\u540c\uff0c\u53c2\u6570\u90fd\u662f\u5bf9\u8c61\uff0c\u8fd4\u56de\u503c\u90fd\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u90fd\u662f\u5c5e\u6027\u540d\u3002"),(0,o.kt)("p",null,"\u4e0d\u540c\u70b9\uff1akeys \u4ec5\u80fd\u8fed\u4ee3\u672c\u5730\u3001\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\uff0cgetOwnPropertyNames \u53ef\u4ee5\u8fed\u4ee3\u6240\u6709\u672c\u5730\u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var o = { a: "A", b: "B", c: "C" };\nconsole.log(Object.keys(o));  // \u8fd4\u56de["a","b","c"]\nconsole.log(Object.getOwnPropertyNames(o));  //\u8fd4\u56de["a","b","c"]\n\nvar a = ["A", "B", "C"];\nconsole.log(Object.keys(a));  // \u8fd4\u56de["0","1","2"]\nconsole.log(Object.getOwnPropertyNames(a));  //\u8fd4\u56de["0","1","2"]\n')))}u.isMDXComponent=!0}}]);