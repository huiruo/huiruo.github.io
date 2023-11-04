"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"js",sidebar_position:1},o=void 0,i={unversionedId:"qu/js",id:"qu/js",title:"js",description:"\u4e8b\u4ef6\u5faa\u73af",source:"@site/programming-tech/qu/02-js.md",sourceDirName:"qu",slug:"/qu/js",permalink:"/qu/js",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/qu/02-js.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"js",sidebar_position:1}},p={},s=[{value:"\u4e8b\u4ef6\u5faa\u73af",id:"\u4e8b\u4ef6\u5faa\u73af",level:3},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:3},{value:"\u95ed\u5305",id:"\u95ed\u5305",level:3},{value:"ts\u719f\u6089?",id:"ts\u719f\u6089",level:3},{value:"axios\u5c01\u88c5",id:"axios\u5c01\u88c5",level:3},{value:"ES6\u65b0\u589e\u54ea\u4e9b\u7279\u6027",id:"es6\u65b0\u589e\u54ea\u4e9b\u7279\u6027",level:3},{value:"\u524d\u7aef\u7f13\u5b58",id:"\u524d\u7aef\u7f13\u5b58",level:3},{value:"\u539f\u578b\u548c\u539f\u578b\u94fe",id:"\u539f\u578b\u548c\u539f\u578b\u94fe",level:3},{value:"\u5782\u76f4\u5c45\u4e2d\u7684\u65b9\u5f0f",id:"\u5782\u76f4\u5c45\u4e2d\u7684\u65b9\u5f0f",level:3},{value:"\u600e\u4e48\u7406\u89e3\u56de\u6d41\u548c\u91cd\u7ed8",id:"\u600e\u4e48\u7406\u89e3\u56de\u6d41\u548c\u91cd\u7ed8",level:3},{value:"promise",id:"promise",level:3},{value:"\u4e8b\u4ef6\u5faa\u73af\u8bf4\u8bf4\uff0c\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\u6709\u54ea\u4e9b",id:"\u4e8b\u4ef6\u5faa\u73af\u8bf4\u8bf4\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\u6709\u54ea\u4e9b",level:3},{value:"\u8bb2\u4e00\u4e0b\u4f60\u5bf9 EventLoop \u7684\u7406\u89e3",id:"\u8bb2\u4e00\u4e0b\u4f60\u5bf9-eventloop-\u7684\u7406\u89e3",level:3},{value:"\u4e86\u89e3axios\u7684\u539f\u7406\u5417? \u600e\u4e48\u5b9e\u73b0\u7684",id:"\u4e86\u89e3axios\u7684\u539f\u7406\u5417-\u600e\u4e48\u5b9e\u73b0\u7684",level:3},{value:"\u8bb2\u4e00\u4e0b\u4f60\u6240\u77e5\u9053\u7684\u8bbe\u8ba1\u6a21\u5f0f",id:"\u8bb2\u4e00\u4e0b\u4f60\u6240\u77e5\u9053\u7684\u8bbe\u8ba1\u6a21\u5f0f",level:3},{value:"\u8bf4\u8bf4\u4f60\u5bf9\u4f5c\u7528\u57df\u94fe\u7684\u7406\u89e3",id:"\u8bf4\u8bf4\u4f60\u5bf9\u4f5c\u7528\u57df\u94fe\u7684\u7406\u89e3",level:3},{value:"\u81ea\u5b9a\u4e49hooks",id:"\u81ea\u5b9a\u4e49hooks",level:3},{value:"type\u548c interface\u7684\u533a\u522b",id:"type\u548c-interface\u7684\u533a\u522b",level:3},{value:"javaScript\u4e2d\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u6267\u884c\u6808\u662f\u4ec0\u4e48\uff1f",id:"javascript\u4e2d\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u6267\u884c\u6808\u662f\u4ec0\u4e48",level:3},{value:"new\u64cd\u4f5c\u7b26\u5177\u4f53\u5e72\u4e86\u4ec0\u4e48",id:"new\u64cd\u4f5c\u7b26\u5177\u4f53\u5e72\u4e86\u4ec0\u4e48",level:3},{value:"\u5b9e\u73b0\u4e00\u4e0bnew",id:"\u5b9e\u73b0\u4e00\u4e0bnew",level:3},{value:"\u6df1\u62f7\u8d1d\u548c\u6d45\u62f7\u8d1d\uff0c\u600e\u4e48\u5b9e\u73b0\u4e00\u4e2a\u6df1\u62f7\u8d1d\u8bf4\u601d\u8def",id:"\u6df1\u62f7\u8d1d\u548c\u6d45\u62f7\u8d1d\u600e\u4e48\u5b9e\u73b0\u4e00\u4e2a\u6df1\u62f7\u8d1d\u8bf4\u601d\u8def",level:3},{value:"\u6570\u7ec4\u5408\u5e76\u6709\u54ea\u4e9b\u65b9\u6cd5",id:"\u6570\u7ec4\u5408\u5e76\u6709\u54ea\u4e9b\u65b9\u6cd5",level:3},{value:"\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u6cd5?",id:"\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u6cd5",level:3},{value:"\u5982\u4f55\u5199\u4e00\u4e2asplit\u65b9\u6cd5\u5e76\u8986\u76d6\u6570\u7ec4\u7684\u539f\u65b9\u6cd5",id:"\u5982\u4f55\u5199\u4e00\u4e2asplit\u65b9\u6cd5\u5e76\u8986\u76d6\u6570\u7ec4\u7684\u539f\u65b9\u6cd5",level:3},{value:"forEach\u5faa\u73af\u548cfor\u5faa\u73af\u54ea\u4e2a\u6027\u80fd\u9ad8? forEach\u5faa\u73af\u53ef\u4ee5\u4e2d\u65ad\u5417?",id:"foreach\u5faa\u73af\u548cfor\u5faa\u73af\u54ea\u4e2a\u6027\u80fd\u9ad8-foreach\u5faa\u73af\u53ef\u4ee5\u4e2d\u65ad\u5417",level:3},{value:"\u5c01\u88c5\u7684\u6309\u94ae\u6743\u9650\u7ec4\u4ef6\u600e\u4e48\u5b9e\u73b0\u7684?",id:"\u5c01\u88c5\u7684\u6309\u94ae\u6743\u9650\u7ec4\u4ef6\u600e\u4e48\u5b9e\u73b0\u7684",level:3},{value:"\u8bf4\u8bf4\u8f6e\u64ad\u56fe\u7684\u601d\u8def",id:"\u8bf4\u8bf4\u8f6e\u64ad\u56fe\u7684\u601d\u8def",level:3},{value:"\u524d\u7aef\u5f02\u6b65\u4efb\u52a1\u5206\u4e3a\u54ea\u4e9b",id:"\u524d\u7aef\u5f02\u6b65\u4efb\u52a1\u5206\u4e3a\u54ea\u4e9b",level:3},{value:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2anew",id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2anew",level:3},{value:"\u5047\u8bbe\u8981\u8bbe\u8ba1\u4e00\u4e2a\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1\uff1f",id:"\u5047\u8bbe\u8981\u8bbe\u8ba1\u4e00\u4e2a\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1",level:3},{value:"\u7528js\u5199\u4e00\u4e2a\u901a\u7528\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u5730\u5740\u680f\u7684\u67d0\u4e2a\u53c2\u6570\u5bf9\u5e94\u7684\u503c\uff0c\u4e0d\u80fd\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f",id:"\u7528js\u5199\u4e00\u4e2a\u901a\u7528\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u5730\u5740\u680f\u7684\u67d0\u4e2a\u53c2\u6570\u5bf9\u5e94\u7684\u503c\u4e0d\u80fd\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u5faa\u73af"},"\u4e8b\u4ef6\u5faa\u73af"),(0,r.kt)("h3",{id:"\u7bad\u5934\u51fd\u6570"},"\u7bad\u5934\u51fd\u6570"),(0,r.kt)("h3",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,r.kt)("h3",{id:"ts\u719f\u6089"},"ts\u719f\u6089?"),(0,r.kt)("h3",{id:"axios\u5c01\u88c5"},"axios\u5c01\u88c5"),(0,r.kt)("h3",{id:"es6\u65b0\u589e\u54ea\u4e9b\u7279\u6027"},"ES6\u65b0\u589e\u54ea\u4e9b\u7279\u6027"),(0,r.kt)("h3",{id:"\u524d\u7aef\u7f13\u5b58"},"\u524d\u7aef\u7f13\u5b58"),(0,r.kt)("h3",{id:"\u539f\u578b\u548c\u539f\u578b\u94fe"},"\u539f\u578b\u548c\u539f\u578b\u94fe"),(0,r.kt)("h3",{id:"\u5782\u76f4\u5c45\u4e2d\u7684\u65b9\u5f0f"},"\u5782\u76f4\u5c45\u4e2d\u7684\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u600e\u4e48\u7406\u89e3\u56de\u6d41\u548c\u91cd\u7ed8"},"\u600e\u4e48\u7406\u89e3\u56de\u6d41\u548c\u91cd\u7ed8"),(0,r.kt)("h3",{id:"promise"},"promise"),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u5faa\u73af\u8bf4\u8bf4\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\u6709\u54ea\u4e9b"},"\u4e8b\u4ef6\u5faa\u73af\u8bf4\u8bf4\uff0c\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\u6709\u54ea\u4e9b"),(0,r.kt)("h3",{id:"\u8bb2\u4e00\u4e0b\u4f60\u5bf9-eventloop-\u7684\u7406\u89e3"},"\u8bb2\u4e00\u4e0b\u4f60\u5bf9 EventLoop \u7684\u7406\u89e3"),(0,r.kt)("h3",{id:"\u4e86\u89e3axios\u7684\u539f\u7406\u5417-\u600e\u4e48\u5b9e\u73b0\u7684"},"\u4e86\u89e3axios\u7684\u539f\u7406\u5417? \u600e\u4e48\u5b9e\u73b0\u7684"),(0,r.kt)("h3",{id:"\u8bb2\u4e00\u4e0b\u4f60\u6240\u77e5\u9053\u7684\u8bbe\u8ba1\u6a21\u5f0f"},"\u8bb2\u4e00\u4e0b\u4f60\u6240\u77e5\u9053\u7684\u8bbe\u8ba1\u6a21\u5f0f"),(0,r.kt)("h3",{id:"\u8bf4\u8bf4\u4f60\u5bf9\u4f5c\u7528\u57df\u94fe\u7684\u7406\u89e3"},"\u8bf4\u8bf4\u4f60\u5bf9\u4f5c\u7528\u57df\u94fe\u7684\u7406\u89e3"),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49hooks"},"\u81ea\u5b9a\u4e49hooks"),(0,r.kt)("h3",{id:"type\u548c-interface\u7684\u533a\u522b"},"type\u548c interface\u7684\u533a\u522b"),(0,r.kt)("h3",{id:"javascript\u4e2d\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u6267\u884c\u6808\u662f\u4ec0\u4e48"},"javaScript\u4e2d\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u6267\u884c\u6808\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("h3",{id:"new\u64cd\u4f5c\u7b26\u5177\u4f53\u5e72\u4e86\u4ec0\u4e48"},"new\u64cd\u4f5c\u7b26\u5177\u4f53\u5e72\u4e86\u4ec0\u4e48"),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u4e00\u4e0bnew"},"\u5b9e\u73b0\u4e00\u4e0bnew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function mynew(Func, ...args) {\n    // 1.\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\n    const obj = {}\n    // 2.\u65b0\u5bf9\u8c61\u539f\u578b\u6307\u5411\u6784\u9020\u51fd\u6570\u539f\u578b\u5bf9\u8c61\n    obj.__proto__ = Func.prototype\n    // 3.\u5c06\u6784\u5efa\u51fd\u6570\u7684this\u6307\u5411\u65b0\u5bf9\u8c61\n    let result = Func.apply(obj, args)\n    // 4.\u6839\u636e\u8fd4\u56de\u503c\u5224\u65ad\n    return result instanceof Object ? result : obj\n}\n")),(0,r.kt)("h3",{id:"\u6df1\u62f7\u8d1d\u548c\u6d45\u62f7\u8d1d\u600e\u4e48\u5b9e\u73b0\u4e00\u4e2a\u6df1\u62f7\u8d1d\u8bf4\u601d\u8def"},"\u6df1\u62f7\u8d1d\u548c\u6d45\u62f7\u8d1d\uff0c\u600e\u4e48\u5b9e\u73b0\u4e00\u4e2a\u6df1\u62f7\u8d1d\u8bf4\u601d\u8def"),(0,r.kt)("p",null,"\u6d45\u62f7\u8d1d\uff0c\u6307\u7684\u662f\u521b\u5efa\u65b0\u7684\u6570\u636e\uff0c\u8fd9\u4e2a\u6570\u636e\u6709\u7740\u539f\u59cb\u6570\u636e\u5c5e\u6027\u503c\u7684\u4e00\u4efd\u7cbe\u786e\u62f7\u8d1d"),(0,r.kt)("p",null,"\u5982\u679c\u5c5e\u6027\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u62f7\u8d1d\u7684\u5c31\u662f\u57fa\u672c\u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u5c5e\u6027\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u62f7\u8d1d\u7684\u5c31\u662f\u5185\u5b58\u5730\u5740"),(0,r.kt)("p",null,"\u5373\u6d45\u62f7\u8d1d\u662f\u62f7\u8d1d\u4e00\u5c42\uff0c\u6df1\u5c42\u6b21\u7684\u5f15\u7528\u7c7b\u578b\u5219\u5171\u4eab\u5185\u5b58\u5730\u5740"),(0,r.kt)("p",null,"\u5b58\u5728\u6d45\u62f7\u8d1d\u7684\u73b0\u8c61\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object.assign")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const target = {};\n// \u590d\u5236\u6e90\u5bf9\u8c61\u7684\u5c5e\u6027\u5230\u76ee\u6807\u5bf9\u8c61\nconst source1 = { name: 'Alice', age: 30 };\nObject.assign(target, source1);\nconsole.log(target); // \u8f93\u51fa\uff1a{ name: 'Alice', age: 30 }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array.prototype.slice(), Array.prototype.concat()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst arr3 = [7, 8, 9];\n\n// \u5408\u5e76\u591a\u4e2a\u6570\u7ec4\nconst mergedArray = arr1.concat(arr2, arr3);\nconsole.log(mergedArray); // \u8f93\u51fa\uff1a[1, 2, 3, 4, 5, 6, 7, 8, 9]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u62d3\u5c55\u8fd0\u7b97\u7b26\u5b9e\u73b0\u7684\u590d\u5236")),(0,r.kt)("h3",{id:"\u6570\u7ec4\u5408\u5e76\u6709\u54ea\u4e9b\u65b9\u6cd5"},"\u6570\u7ec4\u5408\u5e76\u6709\u54ea\u4e9b\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// concat\nconst array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nconst newArray = array1.concat(array2);\n\n// ...\nconst array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nconst newArray = [...array1, ...array2];\n\n// push() \u65b9\u6cd5\u7528\u4e8e\u5411\u4e00\u4e2a\u6570\u7ec4\u7684\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u4fee\u6539\u540e\u7684\u6570\u7ec4:\nconst array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nfor (const item of array2) {\n  array1.push(item);\n}\n\n// Array.from() \u65b9\u6cd5:\nconst array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nconst newArray = Array.from(array1).concat(array2);\n\n// Array.prototype.push.apply():\nconst array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nArray.prototype.push.apply(array1, array2);\n")),(0,r.kt)("h3",{id:"\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u6cd5"},"\u6570\u7ec4\u53bb\u91cd\u7684\u65b9\u6cd5?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// set\nconst arr = [1, 2, 2, 3, 4, 4, 5];\nconst uniqueArr = [...new Set(arr)];\nconsole.log(uniqueArr); // \u8f93\u51fa [1, 2, 3, 4, 5]\n\n// filter\nconst arr = [1, 2, 2, 3, 4, 4, 5];\nconst uniqueArr = arr.filter((value, index, self) => {\n  return self.indexOf(value) === index;\n});\nconsole.log(uniqueArr); // \u8f93\u51fa [1, 2, 3, 4, 5]\n\n// reduce\nconst arr = [1, 2, 2, 3, 4, 4, 5];\nconst uniqueArr = arr.reduce((acc, currentValue) => {\n  if (!acc.includes(currentValue)) {\n    acc.push(currentValue);\n  }\n  return acc;\n}, []);\nconsole.log(uniqueArr); // \u8f93\u51fa [1, 2, 3, 4, 5]\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u5199\u4e00\u4e2asplit\u65b9\u6cd5\u5e76\u8986\u76d6\u6570\u7ec4\u7684\u539f\u65b9\u6cd5"},"\u5982\u4f55\u5199\u4e00\u4e2asplit\u65b9\u6cd5\u5e76\u8986\u76d6\u6570\u7ec4\u7684\u539f\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u6269\u5c55 Array \u539f\u578b\nArray.prototype.split = function(separator) {\n\n};\n\n// \u793a\u4f8b\u7528\u6cd5\nconst inputArray = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 0, 10];\nconst separatorFunction = (item) => item === 0;\nconst result = inputArray.split(separatorFunction);\nconsole.log(result);\n")),(0,r.kt)("h3",{id:"foreach\u5faa\u73af\u548cfor\u5faa\u73af\u54ea\u4e2a\u6027\u80fd\u9ad8-foreach\u5faa\u73af\u53ef\u4ee5\u4e2d\u65ad\u5417"},"forEach\u5faa\u73af\u548cfor\u5faa\u73af\u54ea\u4e2a\u6027\u80fd\u9ad8? forEach\u5faa\u73af\u53ef\u4ee5\u4e2d\u65ad\u5417?"),(0,r.kt)("p",null,"forEach \u5faa\u73af\u662f\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u3002\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528 return \u8bed\u53e5\u6765\u9000\u51fa\u5faa\u73af\u3002\u4f46\u9700\u8981\u6ce8\u610f\uff0creturn \u53ea\u4f1a\u9000\u51fa\u5f53\u524d\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\uff0c\u800c\u4e0d\u662f\u9000\u51fa\u6574\u4e2a forEach \u5faa\u73af\u3002\u8fd9\u610f\u5473\u7740 forEach \u5faa\u73af\u672c\u8eab\u4e0d\u652f\u6301\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u8fdb\u884c\u4e2d\u65ad\u64cd\u4f5c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u793a\u4f8b\u4e2d\uff0c\u5f53 number \u7684\u503c\u7b49\u4e8e 3 \u65f6\uff0creturn \u4f1a\u4e2d\u65ad\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\uff0c\u4e0d\u4f1a\u6267\u884c console.log(number)\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [1, 2, 3, 4, 5];\n\nnumbers.forEach((number) => {\n  if (number === 3) {\n    return; // \u4e2d\u65ad\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\n  }\n  console.log(number);\n});\n")),(0,r.kt)("h3",{id:"\u5c01\u88c5\u7684\u6309\u94ae\u6743\u9650\u7ec4\u4ef6\u600e\u4e48\u5b9e\u73b0\u7684"},"\u5c01\u88c5\u7684\u6309\u94ae\u6743\u9650\u7ec4\u4ef6\u600e\u4e48\u5b9e\u73b0\u7684?"),(0,r.kt)("p",null,"\u6309\u94ae\u7ec4\u4ef6\u901a\u8fc7 map \u65b9\u6cd5\u904d\u5386\u6309\u94ae\u6743\u9650\u6570\u636e\uff0c\u7136\u540e\u6839\u636e\u6570\u636e\u6e32\u67d3\u6309\u94ae\u3002\u6309\u94ae\u7684 disabled \u5c5e\u6027\u6839\u636e\u6743\u9650\u6570\u636e\u6765\u63a7\u5236\u662f\u5426\u53ef\u70b9\u51fb\u3002\u5f53\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\uff0c\u4f1a\u8c03\u7528 handleButtonClick \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4f1a\u68c0\u67e5\u6309\u94ae\u662f\u5426\u53ef\u70b9\u51fb\uff0c\u5982\u679c\u53ef\u4ee5\u70b9\u51fb\uff0c\u5219\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5b83\u63a5\u53d7\u6309\u94ae\u6743\u9650\u6570\u636e\uff0c\u5e76\u6839\u636e\u6743\u9650\u6570\u636e\u6765\u6e32\u67d3\u6309\u94ae\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default class ButtonPermissions extends React.Component {\n  handleButtonClick = (button) => {\n    if (!button.disabled) {\n      if (this.props.onButtonClick) {\n        this.props.onButtonClick(button);\n      }\n    }\n  };\n\n  render() {\n    const { buttons } = this.props;\n\n    return (\n      <div>\n        {buttons.map((button) => (\n          <button\n            key={button.id}\n            onClick={() => this.handleButtonClick(button)}\n            disabled={button.disabled}\n          >\n            {button.label}\n          </button>\n        ))}\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import ButtonPermissions from './ButtonPermissions';\n\nclass App extends React.Component {\n  handleButtonClick = (button) => {\n    // \u5904\u7406\u6309\u94ae\u70b9\u51fb\u903b\u8f91\n    console.log('Button clicked:', button.label);\n  };\n\n  render() {\n    const buttonPermissions = [\n      { id: 1, label: '\u7f16\u8f91', disabled: false },\n      { id: 2, label: '\u5220\u9664', disabled: true }\n    ];\n\n    return (\n      <div>\n        <ButtonPermissions buttons={buttonPermissions} onButtonClick={this.handleButtonClick} />\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"\u8bf4\u8bf4\u8f6e\u64ad\u56fe\u7684\u601d\u8def"},"\u8bf4\u8bf4\u8f6e\u64ad\u56fe\u7684\u601d\u8def"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JavaScript \u903b\u8f91"),"\uff1a\u4f7f\u7528 JavaScript \u6765\u5b9e\u73b0\u8f6e\u64ad\u56fe\u7684\u903b\u8f91\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5173\u952e\u601d\u8def\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316"),"\uff1a\u9996\u5148\uff0c\u786e\u5b9a\u8f6e\u64ad\u56fe\u7684\u5f53\u524d\u7d22\u5f15\uff0c\u901a\u5e38\u8bbe\u7f6e\u4e3a0\u3002\u8fd9\u4e2a\u7d22\u5f15\u5c06\u7528\u4e8e\u8ddf\u8e2a\u5f53\u524d\u663e\u793a\u7684\u56fe\u7247\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u64ad\u653e"),"\uff1a\u5982\u679c\u9700\u8981\u81ea\u52a8\u64ad\u653e\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b9a\u65f6\u5668\u6765\u5b9a\u671f\u8c03\u7528\u5207\u6362\u56fe\u7247\u51fd\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5faa\u73af\u64ad\u653e"),"\uff1a\u5982\u679c\u8f6e\u64ad\u56fe\u5230\u8fbe\u6700\u540e\u4e00\u5f20\u540e\uff0c\u8fd4\u56de\u5230\u7b2c\u4e00\u5f20\u3002\u786e\u4fdd\u7d22\u5f15\u5faa\u73af\uff0c\u4ee5\u5b9e\u73b0\u5faa\u73af\u64ad\u653e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8fc7\u6e21\u6548\u679c"),"\uff1a\u4f7f\u7528 CSS \u8fc7\u6e21\u6548\u679c\u6765\u5b9e\u73b0\u56fe\u7247\u4e4b\u95f4\u7684\u5e73\u6ed1\u5207\u6362\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u5904\u7406"),"\uff1a\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6765\u5904\u7406\u7528\u6237\u7684\u4ea4\u4e92\u64cd\u4f5c\uff0c\u5982\u70b9\u51fb\u4e0b\u4e00\u4e2a/\u524d\u4e00\u4e2a\u6309\u94ae\u3001\u70b9\u51fb\u6307\u793a\u5668\u3001\u9f20\u6807\u60ac\u505c\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4f18\u5316\u548c\u6027\u80fd"),"\uff1a\u786e\u4fdd\u4ee3\u7801\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u53ef\u4ee5\u91c7\u7528\u4e00\u4e9b\u4f18\u5316\u63aa\u65bd\uff0c\u5982\u61d2\u52a0\u8f7d\u56fe\u7247\u3001\u9884\u52a0\u8f7d\u56fe\u7247\u3001\u5ef6\u8fdf\u52a0\u8f7d\u3001\u56fe\u7247\u538b\u7f29\u7b49\u3002"))),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u6f14\u793a\u4e86\u4e00\u4e2a\u57fa\u672c\u7684\u8f6e\u64ad\u56fe\u5b9e\u73b0\u7684\u601d\u8def\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n  <div class="carousel-container">\n    <div class="carousel-slide">\n      <img src="image1.jpg" alt="Image 1">\n    </div>\n    <div class="carousel-slide">\n      <img src="image2.jpg" alt="Image 2">\n    </div>\n    <div class="carousel-slide">\n      <img src="image3.jpg" alt="Image 3">\n    </div>\n  </div>\n  <button id="prevButton">Previous</button>\n  <button id="nextButton">Next</button>\n  <script>\n    // JavaScript \u903b\u8f91\n    const slides = document.querySelectorAll(\'.carousel-slide\');\n    let currentIndex = 0;\n    const interval = 3000; // \u81ea\u52a8\u5207\u6362\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\n\n    function showSlide(index) {\n      slides.forEach((slide, i) => {\n        if (i === index) {\n          slide.style.display = \'block\';\n        } else {\n          slide.style.display = \'none\';\n        }\n      });\n    }\n\n    function nextSlide() {\n      currentIndex = (currentIndex + 1) % slides.length;\n      showSlide(currentIndex);\n    }\n\n    function startAutoPlay() {\n      setInterval(nextSlide, interval);\n    }\n\n    showSlide(currentIndex);\n    startAutoPlay();\n  <\/script>\n</body>\n</html>\n')),(0,r.kt)("h3",{id:"\u524d\u7aef\u5f02\u6b65\u4efb\u52a1\u5206\u4e3a\u54ea\u4e9b"},"\u524d\u7aef\u5f02\u6b65\u4efb\u52a1\u5206\u4e3a\u54ea\u4e9b"),(0,r.kt)("p",null,"\u524d\u7aef\u5f02\u6b65\u4efb\u52a1\u901a\u5e38\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u56de\u8c03\u51fd\u6570\uff08Callbacks\uff09"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u51fd\u6570\u662f\u6700\u57fa\u672c\u7684\u5f02\u6b65\u6a21\u5f0f\uff0c\u901a\u5e38\u7528\u4e8e\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u3002\u5f53\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u8c03\u7528\u9884\u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u6765\u5904\u7406\u7ed3\u679c\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Promise"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Promise \u662f\u4e00\u79cd\u66f4\u7075\u6d3b\u548c\u53ef\u8bfb\u6027\u66f4\u597d\u7684\u5f02\u6b65\u6a21\u5f0f\u3002\u5b83\u5141\u8bb8\u4f60\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u7684\u6210\u529f\u6216\u5931\u8d25\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u5904\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"Promise \u6709\u4e09\u79cd\u72b6\u6001\uff1a\u5f85\u5b9a\uff08pending\uff09\u3001\u5df2\u89e3\u51b3\uff08fulfilled\uff09\u3001\u5df2\u62d2\u7edd\uff08rejected\uff09\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Async/Await"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Async/Await \u662f\u57fa\u4e8e Promise \u7684\u8bed\u6cd5\u7cd6\uff0c\u63d0\u4f9b\u4e86\u66f4\u6e05\u6670\u7684\u65b9\u5f0f\u6765\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"async")," \u58f0\u660e\u5f02\u6b65\u51fd\u6570\uff0c\u7136\u540e\u5728\u51fd\u6570\u5185\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"await")," \u6765\u7b49\u5f85 Promise \u7684\u89e3\u51b3\u6216\u62d2\u7edd\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ajax/HTTP \u8bf7\u6c42"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\uff08\u5982 GET \u6216 POST \u8bf7\u6c42\uff09\u662f\u4e00\u79cd\u5f02\u6b65\u64cd\u4f5c\uff0c\u901a\u5e38\u4f7f\u7528 XMLHttpRequest \u6216 Fetch API \u6765\u6267\u884c\u3002\u670d\u52a1\u5668\u54cd\u5e94\u5c06\u5728\u672a\u6765\u7684\u67d0\u4e2a\u65f6\u95f4\u70b9\u8fd4\u56de\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u3001Promise \u6216 async/await \u6765\u5904\u7406\u54cd\u5e94\u6570\u636e\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Web Workers"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Web Workers \u5141\u8bb8\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u8fd0\u884c JavaScript \u4ee3\u7801\uff0c\u4ece\u800c\u5728\u4e3b\u7ebf\u7a0b\u4e0d\u88ab\u963b\u585e\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u8ba1\u7b97\u5bc6\u96c6\u578b\u4efb\u52a1\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u6a21\u5757\u52a0\u8f7d\uff08AMD\uff0cCommonJS\uff0cES6 Modules\uff09"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u52a0\u8f7d\u7cfb\u7edf\u5141\u8bb8\u5f02\u6b65\u52a0\u8f7d JavaScript \u6a21\u5757\uff0c\u8fd9\u5bf9\u4e8e\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u53ef\u7ef4\u62a4\u6027\u975e\u5e38\u91cd\u8981\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IndexedDB \u548c\u672c\u5730\u5b58\u50a8"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 IndexedDB \u6216\u672c\u5730\u5b58\u50a8 API \u65f6\uff0c\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u901a\u5e38\u662f\u5f02\u6b65\u7684\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u65f6\u5668\uff08Timers\uff09"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u65f6\u5668\u662f\u4e00\u79cd\u7528\u4e8e\u5728\u672a\u6765\u7684\u67d0\u4e2a\u65f6\u95f4\u70b9\u6267\u884c\u4ee3\u7801\u7684\u5f02\u6b65\u673a\u5236\u3002\u5e38\u89c1\u7684\u5b9a\u65f6\u5668\u51fd\u6570\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"setInterval"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u5728\u6307\u5b9a\u65f6\u95f4\u540e\u6267\u884c\u4e00\u6b21\u51fd\u6570\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"li"},"setInterval")," \u5728\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u5185\u91cd\u590d\u6267\u884c\u51fd\u6570\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u76d1\u542c\uff08Event Listeners\uff09"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c\u7528\u4e8e\u5728\u53d1\u751f\u4e8b\u4ef6\u65f6\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u76d1\u542c\u9f20\u6807\u70b9\u51fb\u3001\u952e\u76d8\u8f93\u5165\u3001\u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\u7b49\u4e8b\u4ef6\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a8\u753b\u548c\u8fc7\u6e21"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u524d\u7aef\u5f00\u53d1\u4e2d\uff0cCSS \u52a8\u753b\u548c\u8fc7\u6e21\u901a\u5e38\u662f\u5f02\u6b65\u64cd\u4f5c\uff0c\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u6765\u5b9e\u73b0\u52a8\u753b\u6548\u679c\u3002")))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u5f02\u6b65\u4efb\u52a1\u5728\u524d\u7aef\u5f00\u53d1\u4e2d\u975e\u5e38\u5e38\u89c1\uff0c\u4e86\u89e3\u5982\u4f55\u5904\u7406\u5b83\u4eec\u662f\u5f00\u53d1\u8005\u7684\u57fa\u672c\u6280\u80fd\u3002\u6839\u636e\u4e0d\u540c\u7684\u60c5\u51b5\u548c\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u9002\u5f53\u7684\u5f02\u6b65\u6a21\u5f0f\u6216\u5de5\u5177\u6765\u5904\u7406\u5f02\u6b65\u4efb\u52a1\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2anew"},"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2anew"),(0,r.kt)("p",null,"new \u64cd\u4f5c\u7b26\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u5c06\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0e\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u8fde\u63a5\uff0c\u5e76\u5c06\u6784\u9020\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u7ed1\u5b9a\u5230\u65b0\u5bf9\u8c61\u4e0a\u3002"),(0,r.kt)("p",null,"customNew \u51fd\u6570\u6a21\u62df\u4e86 new \u64cd\u4f5c\u7b26\u7684\u884c\u4e3a\u3002\u5b83\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61 instance\uff0c\u5e76\u5c06\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u4e0e\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u8fde\u63a5\u3002\u7136\u540e\uff0c\u5b83\u5c06\u6784\u9020\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u7ed1\u5b9a\u5230\u65b0\u5bf9\u8c61\u4e0a\uff0c\u5e76\u8c03\u7528\u6784\u9020\u51fd\u6570\uff0c\u5c06\u53c2\u6570\u4f20\u9012\u7ed9\u6784\u9020\u51fd\u6570\u3002\u6700\u540e\uff0c\u5b83\u8fd4\u56de\u6784\u9020\u51fd\u6570\u7684\u7ed3\u679c\uff0c\u5982\u679c\u7ed3\u679c\u662f\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de\u8be5\u5bf9\u8c61\uff0c\u5426\u5219\u8fd4\u56de\u65b0\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u975e\u5e38\u57fa\u672c\u7684 new \u64cd\u4f5c\u7b26\u6a21\u62df\uff0c\u5b9e\u9645\u4e0a\uff0cnew \u64cd\u4f5c\u7b26\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u590d\u6742\u7684\u884c\u4e3a\uff0c\u5982\u6784\u9020\u51fd\u6570\u8fd4\u56de\u5bf9\u8c61\u65f6\u7684\u5904\u7406\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function customNew(constructor, ...args) {\n  // \u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0e\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u8fde\u63a5\n  const instance = Object.create(constructor.prototype);\n\n  // \u5c06\u6784\u9020\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u7ed1\u5b9a\u5230\u65b0\u5bf9\u8c61\u4e0a\n  const result = constructor.apply(instance, args);\n\n  // \u5982\u679c\u6784\u9020\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de\u8be5\u5bf9\u8c61\uff0c\u5426\u5219\u8fd4\u56de\u65b0\u5bf9\u8c61\n  return result instanceof Object ? result : instance;\n}\n\n// \u793a\u4f8b\u6784\u9020\u51fd\u6570\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 new \u64cd\u4f5c\u7b26\u521b\u5efa\u5bf9\u8c61\nconst person = customNew(Person, "Alice", 30);\n\nconsole.log(person.name); // \u8f93\u51fa "Alice"\nconsole.log(person.age);  // \u8f93\u51fa 30\n')),(0,r.kt)("h3",{id:"\u5047\u8bbe\u8981\u8bbe\u8ba1\u4e00\u4e2a\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1"},"\u5047\u8bbe\u8981\u8bbe\u8ba1\u4e00\u4e2a\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\u4f60\u4f1a\u600e\u4e48\u8bbe\u8ba1\uff1f"),(0,r.kt)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\u5728React\u4e2d\u901a\u5e38\u5305\u62ec\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u7ed3\u6784\u8bbe\u8ba1"),"\uff1a\u9996\u5148\uff0c\u8bbe\u8ba1\u5f39\u7a97\u7ec4\u4ef6\u7684\u7ed3\u6784\uff0c\u5305\u62ec\u5f39\u7a97\u5185\u5bb9\u3001\u6807\u9898\u3001\u6309\u94ae\u3001\u5173\u95ed\u6309\u94ae\u7b49\u5143\u7d20\u3002\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684React\u7ec4\u4ef6\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Modal"),"\uff0c\u5e76\u5728\u5176\u4e2d\u6e32\u67d3\u8fd9\u4e9b\u5143\u7d20\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u72b6\u6001\u7ba1\u7406"),"\uff1a\u4e3a\u4e86\u5728\u5e94\u7528\u7684\u4e0d\u540c\u90e8\u5206\u89e6\u53d1\u548c\u63a7\u5236\u5f39\u7a97\u7684\u663e\u793a\uff0c\u9700\u8981\u8bbe\u8ba1\u4e00\u4e2a\u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\u3002\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528React\u7684\u72b6\u6001\u6216\u8005Redux\u7b49\u72b6\u6001\u7ba1\u7406\u5e93\u6765\u7ba1\u7406\u5f39\u7a97\u7684\u663e\u793a\u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40\u72b6\u6001"),"\uff1a\u5982\u679c\u8981\u5b9e\u73b0\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\uff0c\u9700\u8981\u8003\u8651\u5982\u4f55\u5728\u5e94\u7528\u7684\u4e0d\u540c\u7ec4\u4ef6\u4e2d\u89e6\u53d1\u5f39\u7a97\u7684\u663e\u793a\u3002\u53ef\u4ee5\u5c06\u5f39\u7a97\u7684\u663e\u793a\u72b6\u6001\u653e\u5728\u5168\u5c40\u72b6\u6001\u4e2d\uff0c\u4f8b\u5982Redux\u7684store\u4e2d\uff0c\u4ee5\u4fbf\u5168\u5c40\u5171\u4eab\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f39\u7a97\u89e6\u53d1"),"\uff1a\u8bbe\u8ba1\u4e00\u79cd\u65b9\u5f0f\u6765\u89e6\u53d1\u5f39\u7a97\u7684\u663e\u793a\u3002\u53ef\u4ee5\u901a\u8fc7\u5728\u5168\u5c40\u72b6\u6001\u4e2d\u8bbe\u7f6e\u6807\u5fd7\u6765\u63a7\u5236\u5f39\u7a97\u7684\u663e\u793a\u4e0e\u9690\u85cf\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6216\u4e0a\u4e0b\u6587API\u6765\u5b9e\u73b0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),"\uff1a\u4e3a\u5f39\u7a97\u7ec4\u4ef6\u63d0\u4f9b\u81ea\u5b9a\u4e49\u914d\u7f6e\u9009\u9879\uff0c\u5141\u8bb8\u4f20\u9012\u4e0d\u540c\u7684\u5f39\u7a97\u6807\u9898\u3001\u5185\u5bb9\u3001\u6309\u94ae\u7b49\u5c5e\u6027\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u7ec4\u4ef6\u5c5e\u6027\uff08props\uff09\u6216\u51fd\u6570\u53c2\u6570\u6765\u5b9e\u73b0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6837\u5f0f\u8bbe\u8ba1"),"\uff1a\u8bbe\u8ba1\u5f39\u7a97\u7684\u6837\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528CSS\u6216CSS-in-JS\u5e93\u6765\u5b9a\u4e49\u6837\u5f0f\u3002\u786e\u4fdd\u5f39\u7a97\u53ef\u4ee5\u5c45\u4e2d\u663e\u793a\u5e76\u5728\u9700\u8981\u65f6\u8986\u76d6\u6574\u4e2a\u9875\u9762\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u5904\u7406"),"\uff1a\u5904\u7406\u5f39\u7a97\u5185\u90e8\u7684\u4e8b\u4ef6\uff0c\u4f8b\u5982\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\u3001\u5173\u95ed\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002\u53ef\u4ee5\u901a\u8fc7React\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6765\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a8\u753b\u6548\u679c"),"\uff1a\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u4e3a\u5f39\u7a97\u6dfb\u52a0\u52a8\u753b\u6548\u679c\uff0c\u4f7f\u5176\u66f4\u5438\u5f15\u4eba\u3002\u53ef\u4ee5\u4f7f\u7528React\u52a8\u753b\u5e93\uff0c\u5982React Transition Group\uff0c\u6765\u5b9e\u73b0\u52a8\u753b\u6548\u679c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5"),"\uff1a\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\uff0c\u4ee5\u786e\u4fdd\u5f39\u7a97\u7ec4\u4ef6\u7684\u529f\u80fd\u6b63\u5e38\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5f15\u5165\u6f5c\u5728\u7684bug\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6587\u6863\u548c\u793a\u4f8b"),"\uff1a\u4e3a\u5f39\u7a97\u7ec4\u4ef6\u7f16\u5199\u6587\u6863\uff0c\u63d0\u4f9b\u793a\u4f8b\u4ee3\u7801\u548c\u7528\u6cd5\u8bf4\u660e\uff0c\u4ee5\u4fbf\u5176\u4ed6\u5f00\u53d1\u8005\u80fd\u591f\u8f7b\u677e\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u96c6\u6210\u5230\u5e94\u7528"),"\uff1a\u5c06\u5f39\u7a97\u7ec4\u4ef6\u96c6\u6210\u5230\u4f60\u7684React\u5e94\u7528\u4e2d\uff0c\u6839\u636e\u9700\u8981\u5728\u5e94\u7528\u7684\u4e0d\u540c\u90e8\u5206\u89e6\u53d1\u5f39\u7a97\u7684\u663e\u793a\u3002"))),(0,r.kt)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u5168\u5c40\u7684\u5f39\u7a97\u7ec4\u4ef6\u9700\u8981\u8003\u8651\u4f17\u591a\u7ec6\u8282\uff0c\u4f46\u5b83\u53ef\u4ee5\u589e\u52a0\u5e94\u7528\u7684\u4ea4\u4e92\u6027\u548c\u7528\u6237\u53cb\u597d\u6027\u3002\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u7684\u9700\u6c42\u548c\u89c4\u6a21\u6765\u786e\u5b9a\u5177\u4f53\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"\u7528js\u5199\u4e00\u4e2a\u901a\u7528\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u5730\u5740\u680f\u7684\u67d0\u4e2a\u53c2\u6570\u5bf9\u5e94\u7684\u503c\u4e0d\u80fd\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u7528js\u5199\u4e00\u4e2a\u901a\u7528\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u5730\u5740\u680f\u7684\u67d0\u4e2a\u53c2\u6570\u5bf9\u5e94\u7684\u503c\uff0c\u4e0d\u80fd\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getQueryParam(parameterName) {\n  const urlParams = new URLSearchParams(window.location.search);\n  return urlParams.get(parameterName);\n}\n")))}m.isMDXComponent=!0}}]);