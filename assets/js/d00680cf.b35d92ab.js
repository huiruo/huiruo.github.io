"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"set\u6570\u636e\u7c7b\u578b",sidebar_position:5},l=void 0,i={unversionedId:"JavaScript/set\u6570\u636e\u7c7b\u578b",id:"JavaScript/set\u6570\u636e\u7c7b\u578b",title:"set\u6570\u636e\u7c7b\u578b",description:"\u7279\u70b9\u662f\u4e0d\u80fd\u5b58\u653e\u76f8\u540c\u7684\u5143\u7d20",source:"@site/programming-tech/JavaScript/08-set\u6570\u636e\u7c7b\u578b.md",sourceDirName:"JavaScript",slug:"/JavaScript/set\u6570\u636e\u7c7b\u578b",permalink:"/JavaScript/set\u6570\u636e\u7c7b\u578b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/08-set\u6570\u636e\u7c7b\u578b.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"set\u6570\u636e\u7c7b\u578b",sidebar_position:5},sidebar:"docs",previous:{title:"map\u6570\u636e\u7c7b\u578b-\u54c8\u5e0c\u8868",permalink:"/JavaScript/map\u6570\u636e\u7c7b\u578b-\u54c8\u5e0c\u8868"},next:{title:"\u8fd0\u7b97\u7b26i++\u8868\u793a\u5148\u8d4b\u503c",permalink:"/JavaScript/\u8fd0\u7b97\u7b26i++\u8868\u793a\u5148\u8d4b\u503c"}},s={},c=[{value:"\u7279\u70b9\u662f\u4e0d\u80fd\u5b58\u653e\u76f8\u540c\u7684\u5143\u7d20",id:"\u7279\u70b9\u662f\u4e0d\u80fd\u5b58\u653e\u76f8\u540c\u7684\u5143\u7d20",level:2},{value:"WeakSet\uff1a",id:"weakset",level:2},{value:"set\u65b9\u6cd5\u548c\u4f7f\u7528",id:"set\u65b9\u6cd5\u548c\u4f7f\u7528",level:2},{value:"set\u5728\u6570\u7ec4\u53bb\u91cd\u4e2d\u4f7f\u7528",id:"set\u5728\u6570\u7ec4\u53bb\u91cd\u4e2d\u4f7f\u7528",level:2},{value:"\u4f7f\u7528 Set \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9e\u73b0\u5e76\u96c6\uff08Union\uff09\u3001\u4ea4\u96c6\uff08Intersect\uff09\u548c\u5dee\u96c6",id:"\u4f7f\u7528-set-\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9e\u73b0\u5e76\u96c6union\u4ea4\u96c6intersect\u548c\u5dee\u96c6",level:2},{value:"\u5e76\u96c6",id:"\u5e76\u96c6",level:3},{value:"\u4ea4\u96c6",id:"\u4ea4\u96c6",level:3},{value:"\u5dee\u96c6",id:"\u5dee\u96c6",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7279\u70b9\u662f\u4e0d\u80fd\u5b58\u653e\u76f8\u540c\u7684\u5143\u7d20"},"\u7279\u70b9\u662f\u4e0d\u80fd\u5b58\u653e\u76f8\u540c\u7684\u5143\u7d20"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6210\u5458\u552f\u4e00\u3001\u65e0\u5e8f\u4e14\u4e0d\u91cd\u590d"),(0,a.kt)("li",{parentName:"ol"},"[value, value]","\uff0c\u952e\u503c\u4e0e\u952e\u540d\u662f\u4e00\u81f4\u7684\uff08\u6216\u8005\u8bf4\u53ea\u6709\u952e\u503c\uff0c\u6ca1\u6709\u952e\u540d\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u904d\u5386\uff0c\u65b9\u6cd5\u6709\uff1aadd\u3001delete\u3001has")),(0,a.kt)("h2",{id:"weakset"},"WeakSet\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.\u6210\u5458\u90fd\u662f\u5bf9\u8c61\u3002\n2.\u6210\u5458\u90fd\u662f\u5f31\u5f15\u7528\uff0c\u53ef\u4ee5\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u56de\u6536\uff0c\u53ef\u4ee5\u7528\u6765\u4fdd\u5b58DOM\u8282\u70b9\uff0c\u4e0d\u5bb9\u6613\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002\n3.\u4e0d\u80fd\u904d\u5386\uff0c\u65b9\u6cd5\u6709add\u3001delete\u3001has\u3002\n")),(0,a.kt)("h2",{id:"set\u65b9\u6cd5\u548c\u4f7f\u7528"},"set\u65b9\u6cd5\u548c\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set \u6709add\u6dfb\u52a0\uff0cdelete\u5220\u9664\uff0cclear\u6e05\u695a\u6240\u6709\uff0csize\u957f\u5ea6\n\n// \u5c06set\u8f6c\u6362\u4e3a\u6570\u7ec4\u5bf9\u8c61\nset=Array.from(set)\n")),(0,a.kt)("p",null,"set \u548c arr \u76f8\u4e92\u8f6c\u5316:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const setArray = new Set([1, 1, 2, 2, 3]);\nfor (let value of setArray) {\n    console.log('set\u4f7f\u7528', value);\n}\n\n// 1.array ---\x3e set\nlet arr = [1, 2, 3, 4]\nconsole.log('array ---\x3e set:', new Set(arr))\n\n// 2.set ---\x3earr\nlet setTem = new Set([1, 2, 3, 4])\nconsole.log('set ---\x3earr:', Array.form(setTem))\n")),(0,a.kt)("h2",{id:"set\u5728\u6570\u7ec4\u53bb\u91cd\u4e2d\u4f7f\u7528"},"set\u5728\u6570\u7ec4\u53bb\u91cd\u4e2d\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const unique = (arr) => Array.from(new Set(arr));\n\nconst arr = ['apple', 'banana', 'apple', 'pear', 'strawberry'];\n\nconsole.log('\u5728\u6570\u7ec4\u53bb\u91cd\u4e2d\u4f7f\u7528:', unique(arr));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let myArray = [1, 2, 2, 3, 4, 4, 5];\n\n// \u5c06\u6570\u7ec4\u8f6c\u6362\u4e3aSet\nlet mySet = new Set(myArray);\n\n// \u5c06Set\u8f6c\u6362\u56de\u6570\u7ec4\nlet uniqueArray = Array.from(mySet);\n\n// \u8f93\u51fa\u53bb\u91cd\u540e\u7684\u6570\u7ec4\nconsole.log(uniqueArray); // [1, 2, 3, 4, 5]\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-set-\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9e\u73b0\u5e76\u96c6union\u4ea4\u96c6intersect\u548c\u5dee\u96c6"},"\u4f7f\u7528 Set \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9e\u73b0\u5e76\u96c6\uff08Union\uff09\u3001\u4ea4\u96c6\uff08Intersect\uff09\u548c\u5dee\u96c6"),(0,a.kt)("h3",{id:"\u5e76\u96c6"},"\u5e76\u96c6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const aBing = new Set([1, 2, 3]);\nconst bBing = new Set([4, 3, 2]);\nconst union = new Set([...aBing, ...bBing]);\nconsole.log("union:", union);\n// union: Set(4) {1, 2, 3, 4}\n')),(0,a.kt)("h3",{id:"\u4ea4\u96c6"},"\u4ea4\u96c6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const aArr = new Set([1, 2, 3]);\nconst bArr = new Set([4, 3, 2]);\nconst intersect = new Set([...aArr].filter(x => bArr.has(x)));\nconsole.log("intersect:", intersect);\n// intersect: Set(2) {2, 3}\n')),(0,a.kt)("h3",{id:"\u5dee\u96c6"},"\u5dee\u96c6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const aCha = new Set([1, 2, 3]);\nconst bCha = new Set([4, 3, 2]);\nconst difference = new Set([...aCha].filter(x => !bCha.has(x)));\nconsole.log("difference:", difference);\n// difference: Set(1) {1}\n')))}m.isMDXComponent=!0}}]);