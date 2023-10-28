"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1481],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>k});var r=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function f(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?f(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},f=Object.keys(e);for(r=0;r<f.length;r++)o=f[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(r=0;r<f.length;r++)o=f[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=r.createContext({}),c=function(e){var n=r.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,f=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=t,k=p["".concat(i,".").concat(m)]||p[m]||u[m]||f;return o?r.createElement(k,a(a({ref:n},s),{},{components:o})):r.createElement(k,a({ref:n},s))}));function k(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var f=o.length,a=new Array(f);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:t,a[1]=l;for(var c=2;c<f;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},70077:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>f,metadata:()=>l,toc:()=>c});var r=o(87462),t=(o(67294),o(3905));const f={},a=void 0,l={unversionedId:"JavaScript/for\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",id:"JavaScript/for\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",title:"for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",description:"for...of\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386Object\u5bf9\u8c61",source:"@site/programming-tech/JavaScript/03-for\u5faa\u73af/00-for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4.md",sourceDirName:"JavaScript/03-for\u5faa\u73af",slug:"/JavaScript/for\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",permalink:"/JavaScript/for\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/03-for\u5faa\u73af/00-for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"docs",previous:{title:"forof-forEach-\u5b9e\u73b0\u539f\u7406",permalink:"/JavaScript/for\u5faa\u73af/forof-forEach-\u5b9e\u73b0\u539f\u7406"},next:{title:"for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",permalink:"/JavaScript/for\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d"}},i={},c=[{value:"for...of\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386Object\u5bf9\u8c61",id:"forof\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386object\u5bf9\u8c61",level:2},{value:"\u8981\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 for...in \u5faa\u73af\u6216\u4f7f\u7528 Object.keys(),\u7136\u540e\u518d\u7528for of",id:"\u8981\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\u60a8\u53ef\u4ee5\u4f7f\u7528-forin-\u5faa\u73af\u6216\u4f7f\u7528-objectkeys\u7136\u540e\u518d\u7528for-of",level:3},{value:"for in\u4f1a\u904d\u5386\u6570\u7ec4/\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b,\u6240\u4ee5ES6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898",id:"for-in\u4f1a\u904d\u5386\u6570\u7ec4\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u5305\u62ec\u539f\u578b\u6240\u4ee5es6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898",level:2},{value:"\u6700\u5e38\u7528\u7684\uff0c\u904d\u5386\u5bf9\u8c61\u6570\u7ec4",id:"\u6700\u5e38\u7528\u7684\u904d\u5386\u5bf9\u8c61\u6570\u7ec4",level:3},{value:"\u4f8b\u5b50for-of Set\u548cMap\u7684\u904d\u5386",id:"\u4f8b\u5b50for-of-set\u548cmap\u7684\u904d\u5386",level:3},{value:"for-of \u548c for-in\u7684\u533a\u522b",id:"for-of-\u548c-for-in\u7684\u533a\u522b",level:2},{value:"for of \u533a\u522bfor...in \u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\uff0c\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e\uff0c \u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe\u3002",id:"for-of-\u533a\u522bforin-\u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e-\u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe",level:3},{value:"for...of \u5faa\u73af\uff1a\u80fd\u904d\u5386\u83b7\u5f97\u952e\u503c",id:"forof-\u5faa\u73af\u80fd\u904d\u5386\u83b7\u5f97\u952e\u503c",level:3},{value:"for-of-\u904d\u5386\u5f02\u6b65\u6570\u7ec4",id:"for-of-\u904d\u5386\u5f02\u6b65\u6570\u7ec4",level:2}],s={toc:c},p="wrapper";function u(e){let{components:n,...o}=e;return(0,t.kt)(p,(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"forof\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386object\u5bf9\u8c61"},"for...of\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386Object\u5bf9\u8c61"),(0,t.kt)("p",null,"\u80fd\u591f\u88abfor...of\u6b63\u5e38\u904d\u5386\u7684\uff0c\u90fd\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u904d\u5386\u5668Iterator,\u5b83\u4eec\u7684\u539f\u578b\u4e2d\u90fd\u6709\u4e00\u4e2aSymbol.iterator\u65b9\u6cd5\uff0c\u800cObject\u5bf9\u8c61\u5e76\u6ca1\u6709\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {\n  'name': 'Jim Green',\n  'age': 12\n}\n\nfor (let key of obj) {\n  console.log('for of obj', key)\n}\n// Uncaught TypeError: obj is not iterable\n\n\n// \u4f46\u662f\u53ef\u4ee5\u4f7f\u7528 for...in \u5faa\u73af\u904d\u5386\u952e\u540d\nfor (let key in obj) {\n  console.log('for in key', key)\n}\n/*\n  for in key name\n  for in key age\n*/\n")),(0,t.kt)("h3",{id:"\u8981\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\u60a8\u53ef\u4ee5\u4f7f\u7528-forin-\u5faa\u73af\u6216\u4f7f\u7528-objectkeys\u7136\u540e\u518d\u7528for-of"},"\u8981\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 for...in \u5faa\u73af\u6216\u4f7f\u7528 Object.keys(),\u7136\u540e\u518d\u7528for of"),(0,t.kt)("p",null,"for...of \u5faa\u73af\u901a\u5e38\u7528\u4e8e\u904d\u5386\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08\u4f8b\u5982\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001Map\u3001Set\u7b49\uff09\uff0c\u4f46\u5b83\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u904d\u5386\u666e\u901a\u7684\u5bf9\u8c61\uff08Object\uff09\u3002\u8981\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 for...in \u5faa\u73af\u6216\u4f7f\u7528 Object.keys(), Object.values(), \u6216 Object.entries() \u65b9\u6cd5\uff0c\u7136\u540e\u518d\u4f7f\u7528 for...of \u5faa\u73af\u6765\u904d\u5386\u5b83\u4eec\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const myObject = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\n// \u4f7f\u7528Object.keys()\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\nfor (const key of Object.keys(myObject)) {\n  console.log(key, myObject[key]);\n}\n\n// \u4f7f\u7528Object.values()\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u503c\nfor (const value of Object.values(myObject)) {\n  console.log(value);\n}\n\n// \u4f7f\u7528Object.entries()\u904d\u5386\u952e\u503c\u5bf9\nfor (const [key, value] of Object.entries(myObject)) {\n  console.log(key, value);\n}\n')),(0,t.kt)("h2",{id:"for-in\u4f1a\u904d\u5386\u6570\u7ec4\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u5305\u62ec\u539f\u578b\u6240\u4ee5es6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898"},"for in\u4f1a\u904d\u5386\u6570\u7ec4/\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b,\u6240\u4ee5ES6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"for-of\u5faa\u73af\u7528\u6765\u904d\u5386\u6570\u636e\u2014\u4f8b\u5982\u6570\u7ec4\u4e2d\u7684\u503c\u3002"),(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u6700\u7b80\u6d01\u3001\u6700\u76f4\u63a5\u7684\u904d\u5386\u6570\u7ec4\u5143\u7d20\u7684\u8bed\u6cd5,\u8fd9\u4e2a\u65b9\u6cd5\u907f\u5f00\u4e86for-in\u5faa\u73af\u7684\u6240\u6709\u7f3a\u9677,\u4e0eforEach()\u4e0d\u540c\u7684\u662f\uff0c\u5b83\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94break\u3001continue\u548creturn\u8bed\u53e5"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"for...of \u5faa\u73af\u53ef\u4ee5\u7528\u6765\u904d\u5386\u6570\u7ec4\u3001\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u5b57\u7b26\u4e32\u3001Set\u3001Map \u4ee5\u53ca Generator \u5bf9\u8c61")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"for...in \u5faa\u73af\u4e3b\u8981\u662f\u4e3a\u4e86\u904d\u5386\u5bf9\u8c61\u800c\u751f\uff0c\u4e0d\u9002\u7528\u4e8e\u904d\u5386\u6570\u7ec4"))),(0,t.kt)("ol",{start:4},(0,t.kt)("li",{parentName:"ol"},"for-of\u5faa\u73af\u4e5f\u53ef\u4ee5\u904d\u5386\u5176\u5b83\u7684\u96c6\u5408",(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},"for-of\u5faa\u73af\u4e0d\u4ec5\u652f\u6301\u6570\u7ec4\uff0c\u8fd8\u652f\u6301\u5927\u591a\u6570\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u4f8b\u5982DOM NodeList\u5bf9\u8c61\u3002\nfor-of\u5faa\u73af\u4e5f\u652f\u6301\u5b57\u7b26\u4e32\u904d\u5386")))),(0,t.kt)("h3",{id:"\u6700\u5e38\u7528\u7684\u904d\u5386\u5bf9\u8c61\u6570\u7ec4"},"\u6700\u5e38\u7528\u7684\uff0c\u904d\u5386\u5bf9\u8c61\u6570\u7ec4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const objectArray = [\n  { name: "John", age: 30 },\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 35 }\n];\n\nfor (const obj of objectArray) {\n  console.log(obj.name, obj.age);\n}\n')),(0,t.kt)("h3",{id:"\u4f8b\u5b50for-of-set\u548cmap\u7684\u904d\u5386"},"\u4f8b\u5b50for-of Set\u548cMap\u7684\u904d\u5386"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"function forOfTest(res) {\n  for (const value of res) {\n    const {\n      orderId,\n      price,\n      qty,\n      quoteQty,\n      time,\n      isBuyer,\n      isMaker,\n    } = value\n\n    console.log('price:', price);\n  }\n}\n\nforOfTest(order)\n\n\nconst map = new Map();\nmap.set('name', 'kepler');\nmap.set('number', '12138');\n\n// \u8f93\u51fakey val\nconsole.log('for...of \u8f93\u51fakey val');\nfor (let [key, val] of map) {\n  console.log(key + \"'s phone number is: \" + val);\n}\n\n// \u8f93\u51fakey\nconsole.log('for...of \u8f93\u51fakey');\nfor (let [key] of map) {\n  console.log(key);\n}\n\n//\u8f93\u51faval\nlog('for...of \u8f93\u51faval');\nfor (let [, val] of map) {\n  console.log(val);\n}\n")),(0,t.kt)("h2",{id:"for-of-\u548c-for-in\u7684\u533a\u522b"},"for-of \u548c for-in\u7684\u533a\u522b"),(0,t.kt)("h3",{id:"for-of-\u533a\u522bforin-\u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e-\u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe"},"for of \u533a\u522bfor...in \u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\uff0c\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e\uff0c \u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe\u3002"),(0,t.kt)("p",null,"for...of \u5219\u4e0d\u4f1a\u8fd9\u6837\uff0c\u5b83\u53ea\u904d\u5386\u5f53\u524d\u5bf9\u8c61\u4e0d\u4f1a\u904d\u5386\u539f\u578b\u94fe\u3002"),(0,t.kt)("p",null,"\u53c2\u8003for in"),(0,t.kt)("h3",{id:"forof-\u5faa\u73af\u80fd\u904d\u5386\u83b7\u5f97\u952e\u503c"},"for...of \u5faa\u73af\uff1a\u80fd\u904d\u5386\u83b7\u5f97\u952e\u503c"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"for...in \u5faa\u73af\uff1a\u53ea\u80fd\u83b7\u5f97\u5bf9\u8c61\u7684\u952e\u540d\uff0c\u4e0d\u80fd\u83b7\u5f97\u952e\u503c"),(0,t.kt)("li",{parentName:"ol"},"for...of \u5faa\u73af\uff1a\u5141\u8bb8\u904d\u5386\u83b7\u5f97\u952e\u503c")),(0,t.kt)("p",null,"\u53c2\u8003 for in"),(0,t.kt)("h2",{id:"for-of-\u904d\u5386\u5f02\u6b65\u6570\u7ec4"},"for-of-\u904d\u5386\u5f02\u6b65\u6570\u7ec4"),(0,t.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u6b63\u5e38\u7684for\u5faa\u73af\u6216\u8005for...of... \u6765\u904d\u5386\u6570\u7ec4\uff0c\u5e76\u4e14\u4f7f\u7528async await\u6765\u6267\u884c\u4ee3\u7801:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// for\u5faa\u73af\n(async function(){\n    for(let i = 0; i < taskList.length; i++) {\n        await taskList[i]();\n    }\n})();\n\n// for..of..\n(async function(){\n    for(let fn of taskList) {\n        await fn();\n    }\n})();\n\n\nconst fn1 = function() {\n    return new Promise( resolve => {\n        setTimeout(function(){\n            console.log('fn1');\n            resolve();\n        }, 2000);\n    });\n};\nconst fn2 = function() {\n    return new Promise( resolve => {\n        setTimeout(function(){\n            console.log('fn2');\n            resolve();\n        }, 1000);\n    });\n};\nconst fn3 = function() {\n    console.log('fn3');\n    return Promise.resolve(1);\n};\nconst taskList = [fn1, fn2, fn3];\n")))}u.isMDXComponent=!0}}]);