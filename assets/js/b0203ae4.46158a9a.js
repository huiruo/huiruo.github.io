"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),y=a,g=c["".concat(i,".").concat(y)]||c[y]||u[y]||o;return n?r.createElement(g,p(p({ref:t},s),{},{components:n})):r.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,p[1]=l;for(var m=2;m<o;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"weakmap\u548cmap",sidebar_position:1},p=void 0,l={unversionedId:"structure-algorithm/\u5b57\u5178\u548c\u6563\u5217\u8868/weakmap\u548cmap",id:"structure-algorithm/\u5b57\u5178\u548c\u6563\u5217\u8868/weakmap\u548cmap",title:"weakmap\u548cmap",description:"\u5f31\u5316\u7248\u672c\u7684\u533a\u522b",source:"@site/programming-tech/structure-algorithm/06-\u5b57\u5178\u548c\u6563\u5217\u8868/03-weakmap\u548cmap.md",sourceDirName:"structure-algorithm/06-\u5b57\u5178\u548c\u6563\u5217\u8868",slug:"/structure-algorithm/\u5b57\u5178\u548c\u6563\u5217\u8868/weakmap\u548cmap",permalink:"/structure-algorithm/\u5b57\u5178\u548c\u6563\u5217\u8868/weakmap\u548cmap",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/06-\u5b57\u5178\u548c\u6563\u5217\u8868/03-weakmap\u548cmap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"weakmap\u548cmap",sidebar_position:1},sidebar:"structureAlgorithm",previous:{title:"\u6563\u5217\u8868",permalink:"/structure-algorithm/\u5b57\u5178\u548c\u6563\u5217\u8868/\u6563\u5217\u8868"},next:{title:"\u5173\u4e8e\u6570\u636e\u7ed3\u6784",permalink:"/structure-algorithm/\u6570\u636e\u7ed3\u6784/\u5173\u4e8e\u6570\u636e\u7ed3\u6784"}},i={},m=[{value:"\u5f31\u5316\u7248\u672c\u7684\u533a\u522b",id:"\u5f31\u5316\u7248\u672c\u7684\u533a\u522b",level:2},{value:"map \u548c\u5bf9\u8c61",id:"map-\u548c\u5bf9\u8c61",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f31\u5316\u7248\u672c\u7684\u533a\u522b"},"\u5f31\u5316\u7248\u672c\u7684\u533a\u522b"),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\uff0cMap\u548cSet\u4e0e\u5176\u5f31\u5316\u7248\u672c\u4e4b\u95f4\u4ec5\u6709\u7684\u533a\u522b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WeakSet\u6216WeakMap\u7c7b\u6ca1\u6709entries\u3001keys\u548cvalues\u7b49\u65b9\u6cd5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7528\u5bf9\u8c61\u4f5c\u4e3a\u952e\u3002")),(0,a.kt)("p",null,"\u7531\u4e8eWeakSet\u6216WeakMap\u7c7b\u6ca1\u6709\u5f3a\u5f15\u7528\u7684\u952e\uff0c\u80fd\u591f\u63d0\u5347JavaScript\u5783\u573e\u56de\u6536\u7684\u6027\u80fd\uff0c\u5e76\u4e14\u56e0\u4e3a\u6ca1\u6709\u8fed\u4ee3\u5668\u65b9\u6cd5\uff0c\u5728\u4e0d\u77e5\u9053\u952e\u7684\u60c5\u51b5\u4e0b\uff0c\u65e0\u6cd5\u53d6\u51fa\u503c\u3002"),(0,a.kt)("p",null,"\uff08\u53ef\u4ee5\u4f7f\u7528WeakMap \u7c7b\u5c01\u88c5 ES2015 \u7c7b\u7684\u79c1\u6709\u5c5e\u6027\uff09"),(0,a.kt)("h2",{id:"map-\u548c\u5bf9\u8c61"},"map \u548c\u5bf9\u8c61"),(0,a.kt)("p",null,"size map\u5927\u5c0f\u786e\u5b9amap\u53ea\u9700\u8981o\uff081\uff09,\u666e\u901a\u5bf9\u8c61\u9700\u8981o(n)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const map = new Map();\nmap.set('someKey1', 1);\nmap.set('someKey2', 1);\n...\nmap.set('someKey100', 1);\n\nconsole.log(map.size) // 100, Runtime: O(1)\n\nconst plainObjMap = {};\nplainObjMap['someKey1'] = 1;\nplainObjMap['someKey2'] = 1;\n...\nplainObjMap['someKey100'] = 1;\n\nconsole.log(Object.keys(plainObjMap).length) // 100, Runtime: O(n)\n")),(0,a.kt)("p",null,"\u589e\u5220\u6027\u80fd\nmap\u4e0d\u9700\u8981\u628a\u6240\u6709\u7684\u952e\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u8282\u7701\u4e86\u5927\u91cf\u7684\u6027\u80fd\n\u904d\u5386"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const map = new Map();\nmap.set('someKey1', 1);\nmap.set('someKey2', 2);\nmap.set('someKey3', 3);\n\nfor (let [key, value] of map) {\n  console.log(`${key} = ${value}`);\n}\n// someKey1 = 1\n// someKey2 = 2\n// someKey3 = 3\n\nconst plainObjMap = {};\nplainObjMap['someKey1'] = 1;\nplainObjMap['someKey2'] = 2;\nplainObjMap['someKey3'] = 3;\n\nfor (let key of Object.keys(plainObjMap)) {\n  const value = plainObjMap[key];\n  console.log(`${key} = ${value}`);\n}\n// someKey1 = 1\n// someKey2 = 2\n// someKey3 = 3\n")),(0,a.kt)("p",null,"\u987a\u5e8f\u95ee\u9898\n\u5bf9\u8c61\u4e2d\u7684key \u662f\u4e0d\u4fdd\u8bc1\u987a\u5e8f\u7684\uff0c\u56e0\u4e3a\u5bf9\u4e8e number \u662f\u5b58\u653e\u5230 elements \u4e2d\uff0c\u4f1a\u6309\u7167\u4ece\u5c0f\u5230\u5927\uff0c\u5bf9\u4e8e\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u662f\u5b58\u653e\u5230 properties \u4e2d\uff0c\u4f1a\u6309\u7167\u6dfb\u52a0\u7684\u987a\u3002\nmap \u662f\u4fdd\u8bc1\u987a\u5e8f\u7684\uff0c\u6309\u7167\u6dfb\u52a0\u7684\u987a\u5e8f\u4f9d\u6b21\u51fa\u6765\u7684\u3002"),(0,a.kt)("p",null,"\u539f\u578b\u94fe\u95ee\u9898\n\u666e\u901a\u5bf9\u8c61\u7ee7\u627f\u4e86\u5f88\u591a\u539f\u578b\u65b9\u6cd5\uff0c\u5982toString\n\u800cmap\u662f\u5e72\u51c0\u7684\uff01"),(0,a.kt)("p",null,"\u4ece ECMAScript 2015 \u5f00\u59cb\uff0c\u5982\u679c\u4f60\u575a\u6301\u4f7f\u7528\u539f\u751f\u7684\u5bf9\u8c61\uff0c \u4f60\u53ef\u4ee5 Object.create(null) \u6765\u751f\u6210\u4e00\u4e2a\u5e72\u51c0\u7684 object"))}u.isMDXComponent=!0}}]);