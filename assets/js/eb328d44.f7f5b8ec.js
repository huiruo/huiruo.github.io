"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3258],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,f=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},43197:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"JavaScript/array\u65b9\u6cd5/some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",id:"JavaScript/array\u65b9\u6cd5/some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",title:"some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",description:"some() \u4f9d\u636e\u5224\u65ad\u6761\u4ef6\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5426\u6709\u4e00\u4e2a\u6ee1\u8db3\uff0c\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/16-some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",permalink:"/JavaScript/array\u65b9\u6cd5/some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/01-array\u65b9\u6cd5/16-some-\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"docs",previous:{title:"slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4",permalink:"/JavaScript/array\u65b9\u6cd5/slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4"},next:{title:"splice\u4efb\u610f\u4f4d\u7f6e\u5220\u9664",permalink:"/JavaScript/array\u65b9\u6cd5/splice\u4efb\u610f\u4f4d\u7f6e\u5220\u9664"}},l={},c=[{value:"some() \u4f9d\u636e\u5224\u65ad\u6761\u4ef6\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5426\u6709\u4e00\u4e2a\u6ee1\u8db3\uff0c\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",id:"some-\u4f9d\u636e\u5224\u65ad\u6761\u4ef6\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5426\u6709\u4e00\u4e2a\u6ee1\u8db3\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue",level:2},{value:"some\u65b9\u6cd5:\u5b83\u548cevery\u7684\u884c\u4e3a\u76f8\u53cd\uff0c\u4f1a\u8fed\u4ee3\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u76f4\u5230\u51fd\u6570\u8fd4\u56detrue\u3002",id:"some\u65b9\u6cd5\u5b83\u548cevery\u7684\u884c\u4e3a\u76f8\u53cd\u4f1a\u8fed\u4ee3\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u76f4\u5230\u51fd\u6570\u8fd4\u56detrue",level:2},{value:"\u5b9e\u6218\uff1a",id:"\u5b9e\u6218",level:2}],p={toc:c},m="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(m,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"some-\u4f9d\u636e\u5224\u65ad\u6761\u4ef6\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5426\u6709\u4e00\u4e2a\u6ee1\u8db3\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue"},"some() \u4f9d\u636e\u5224\u65ad\u6761\u4ef6\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5426\u6709\u4e00\u4e2a\u6ee1\u8db3\uff0c\u82e5\u6709\u4e00\u4e2a\u6ee1\u8db3\u5219\u8fd4\u56detrue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1, 2, 3, 4, 5]\nlet arr1 = arr.some((i, v) => i < 3)\nconsole.log(arr1)    // true\n\nlet arr2 = arr.some((i, v) => i > 10)\nconsole.log(arr2)    // false\n")),(0,a.kt)("h2",{id:"some\u65b9\u6cd5\u5b83\u548cevery\u7684\u884c\u4e3a\u76f8\u53cd\u4f1a\u8fed\u4ee3\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u76f4\u5230\u51fd\u6570\u8fd4\u56detrue"},"some\u65b9\u6cd5:\u5b83\u548cevery\u7684\u884c\u4e3a\u76f8\u53cd\uff0c\u4f1a\u8fed\u4ee3\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u76f4\u5230\u51fd\u6570\u8fd4\u56detrue\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isEven = x => x % 2 === 0;\nconst numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\nconsole.log('numbers.some(isEven)', numbers.some(isEven));\n")),(0,a.kt)("h2",{id:"\u5b9e\u6218"},"\u5b9e\u6218\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const data = [\n  {\n    "assemblyInfo": {\n        "id": "YxSpellGroup",\n        "iconType": "iconshangpintuijian",\n        "title": "\u62fc\u56e2",\n        "onlyCode": 539187388\n    },\n    "assemblyParam": {}\n  },\n  {\n    "assemblyInfo": {\n        "id": "YxPages",\n        "iconType": "iconshangpintuijian",\n        "title": "\u62fc\u56e2",\n        "onlyCode": 539187388\n    },\n    "assemblyParam": {}\n  },\n];\n\n// \u4f7f\u7528Array.some()\u65b9\u6cd5\u68c0\u67e5\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u5143\u7d20\nconst containsYxPages = data.some(item => item.assemblyInfo.id === \'YxPages\');\n\nif (containsYxPages) {\n  console.log(\'\u5305\u542bassemblyInfo = YxPages\u7684\u5143\u7d20\');\n} else {\n  console.log(\'\u4e0d\u5305\u542bassemblyInfo = YxPages\u7684\u5143\u7d20\');\n}\n')))}u.isMDXComponent=!0}}]);