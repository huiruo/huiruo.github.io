"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2538],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>b});var o=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var f=o.createContext({}),c=function(e){var n=o.useContext(f),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},m=function(e){var n=c(e.components);return o.createElement(f.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,f=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=t,b=p["".concat(f,".").concat(u)]||p[u]||s[u]||l;return r?o.createElement(b,a(a({ref:n},m),{},{components:r})):o.createElement(b,a({ref:n},m))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var f in n)hasOwnProperty.call(n,f)&&(i[f]=n[f]);i.originalType=e,i[p]="string"==typeof e?e:t,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37433:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=r(87462),t=(r(67294),r(3905));const l={},a=void 0,i={unversionedId:"JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",id:"JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",title:"for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",description:"for...of\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386Object\u5bf9\u8c61",source:"@site/programming-tech/JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/00-for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4.md",sourceDirName:"JavaScript/A-3-for\u5e38\u7528\u5faa\u73af",slug:"/JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",permalink:"/JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/00-for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"docs",previous:{title:"for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",permalink:"/JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d"},next:{title:"forEach",permalink:"/JavaScript/A-3-for\u5e38\u7528\u5faa\u73af/forEach"}},f={},c=[{value:"for...of\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386Object\u5bf9\u8c61",id:"forof\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386object\u5bf9\u8c61",level:2},{value:"for in\u4f1a\u904d\u5386\u6570\u7ec4/\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b;\u56e0\u6b64\uff0c\u6807\u51c6\u59d4\u5458\u4f1a\u5728ES6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898\u3002",id:"for-in\u4f1a\u904d\u5386\u6570\u7ec4\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u5305\u62ec\u539f\u578b\u56e0\u6b64\u6807\u51c6\u59d4\u5458\u4f1a\u5728es6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898",level:3},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3},{value:"for-of \u548c for-in\u7684\u533a\u522b",id:"for-of-\u548c-for-in\u7684\u533a\u522b",level:2},{value:"2\u3001\u533a\u522b\uff1a\u5bf9\u4e8e\u666e\u901a\u5bf9\u8c61\uff0c\u6ca1\u6709\u90e8\u7f72\u539f\u751f\u7684 iterator \u63a5\u53e3\uff0c\u76f4\u63a5\u4f7f\u7528 for...of \u4f1a\u62a5\u9519",id:"2\u533a\u522b\u5bf9\u4e8e\u666e\u901a\u5bf9\u8c61\u6ca1\u6709\u90e8\u7f72\u539f\u751f\u7684-iterator-\u63a5\u53e3\u76f4\u63a5\u4f7f\u7528-forof-\u4f1a\u62a5\u9519",level:3},{value:"\u533a\u522bfor...in \u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\uff0c\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e\uff0c \u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe\u3002",id:"\u533a\u522bforin-\u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e-\u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe",level:3},{value:"4\u3001forEach \u5faa\u73af\u65e0\u6cd5\u4e2d\u9014\u8df3\u51fa\uff0cbreak \u547d\u4ee4\u6216 return \u547d\u4ee4\u90fd\u4e0d\u80fd\u594f\u6548",id:"4foreach-\u5faa\u73af\u65e0\u6cd5\u4e2d\u9014\u8df3\u51fabreak-\u547d\u4ee4\u6216-return-\u547d\u4ee4\u90fd\u4e0d\u80fd\u594f\u6548",level:3}],m={toc:c},p="wrapper";function s(e){let{components:n,...r}=e;return(0,t.kt)(p,(0,o.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"forof\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386object\u5bf9\u8c61"},"for...of\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u904d\u5386Object\u5bf9\u8c61"),(0,t.kt)("p",null,"\u80fd\u591f\u88abfor...of\u6b63\u5e38\u904d\u5386\u7684\uff0c\u90fd\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u904d\u5386\u5668Iterator,\u5b83\u4eec\u7684\u539f\u578b\u4e2d\u90fd\u6709\u4e00\u4e2aSymbol.iterator\u65b9\u6cd5\uff0c\u800cObject\u5bf9\u8c61\u5e76\u6ca1\u6709\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3"),(0,t.kt)("h3",{id:"for-in\u4f1a\u904d\u5386\u6570\u7ec4\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u5305\u62ec\u539f\u578b\u56e0\u6b64\u6807\u51c6\u59d4\u5458\u4f1a\u5728es6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898"},"for in\u4f1a\u904d\u5386\u6570\u7ec4/\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b;\u56e0\u6b64\uff0c\u6807\u51c6\u59d4\u5458\u4f1a\u5728ES6\u4e2d\u589e\u52a0\u4e86\u4e00\u79cd\u65b0\u7684\u5faa\u73af\u8bed\u6cd5\u6765\u89e3\u51b3\u76ee\u524d\u7684\u95ee\u9898\u3002"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"for-of\u5faa\u73af\u7528\u6765\u904d\u5386\u6570\u636e\u2014\u4f8b\u5982\u6570\u7ec4\u4e2d\u7684\u503c\u3002")),(0,t.kt)("p",null,"\u8fd9\u662f\u6700\u7b80\u6d01\u3001\u6700\u76f4\u63a5\u7684\u904d\u5386\u6570\u7ec4\u5143\u7d20\u7684\u8bed\u6cd5\n\u8fd9\u4e2a\u65b9\u6cd5\u907f\u5f00\u4e86for-in\u5faa\u73af\u7684\u6240\u6709\u7f3a\u9677\n\u4e0eforEach()\u4e0d\u540c\u7684\u662f\uff0c\u5b83\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94break\u3001continue\u548creturn\u8bed\u53e5"),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"for...of \u5faa\u73af\u53ef\u4ee5\u7528\u6765\u904d\u5386\u6570\u7ec4\u3001\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u5b57\u7b26\u4e32\u3001Set\u3001Map \u4ee5\u53ca Generator \u5bf9\u8c61")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"for...in \u5faa\u73af\u4e3b\u8981\u662f\u4e3a\u4e86\u904d\u5386\u5bf9\u8c61\u800c\u751f\uff0c\u4e0d\u9002\u7528\u4e8e\u904d\u5386\u6570\u7ec4"))),(0,t.kt)("ol",{start:4},(0,t.kt)("li",{parentName:"ol"},"for-of\u5faa\u73af\u4e5f\u53ef\u4ee5\u904d\u5386\u5176\u5b83\u7684\u96c6\u5408\nfor-of\u5faa\u73af\u4e0d\u4ec5\u652f\u6301\u6570\u7ec4\uff0c\u8fd8\u652f\u6301\u5927\u591a\u6570\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u4f8b\u5982DOM NodeList\u5bf9\u8c61\u3002\nfor-of\u5faa\u73af\u4e5f\u652f\u6301\u5b57\u7b26\u4e32\u904d\u5386")),(0,t.kt)("p",null,"for-of\u540c\u6837\u652f\u6301Set\u548cMap\u7684\u904d\u5386"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"function forOfTest(res) {\n  for (const value of res) {\n    const {\n      orderId,\n      price,\n      qty,\n      quoteQty,\n      time,\n      isBuyer,\n      isMaker,\n    } = value\n\n    console.log('price:', price);\n  }\n}\n\nforOfTest(order)\n\n\nconst map = new Map();\nmap.set('name', 'kepler');\nmap.set('number', '12138');\n\n//\u8f93\u51fakey val\nconsole.log('for...of \u8f93\u51fakey val');\nfor (let [key, val] of map) {\n  console.log(key + \"'s phone number is: \" + val);\n}\n\n// \u8f93\u51fakey\nconsole.log('for...of \u8f93\u51fakey');\nfor (let [key] of map) {\n  console.log(key);\n}\n\n//\u8f93\u51faval\nlog('for...of \u8f93\u51faval');\nfor (let [, val] of map) {\n  console.log(val);\n}\n")),(0,t.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const order = [\n  {\n    id: '636a6f7fac6f9e15a6855bf4',\n    botId: null,\n    orderId: '15206073096',\n    clientOrderId: null,\n    symbol: 'BTCUSDT',\n    side: null,\n    status: 'NEW',\n    price: '20460.16000000',\n    qty: '0.00202000',\n    quoteQty: '41.32952320',\n    realizedProfit: null,\n    isBuyer: true,\n    isMaker: false,\n    orderTime: 1667876554528n,\n    type: null,\n    orderType: 1,\n    userId: '6369df5f47ea1466b1d24b3b',\n    operationType: null,\n  },\n  {\n    id: '636a6f7fac6f9e15a6855bf5',\n    botId: null,\n    orderId: '15206073096',\n    clientOrderId: null,\n    symbol: 'BTCUSDT',\n    side: null,\n    status: 'NEW',\n    price: '20460.19000000',\n    qty: '0.00326000',\n    quoteQty: '66.70021940',\n    realizedProfit: null,\n    isBuyer: true,\n    isMaker: false,\n    orderTime: 1667876554528n,\n    type: null,\n    orderType: 1,\n    userId: '6369df5f47ea1466b1d24b3b',\n    operationType: null,\n  },\n]\n")),(0,t.kt)("br",null),(0,t.kt)("h2",{id:"for-of-\u548c-for-in\u7684\u533a\u522b"},"for-of \u548c for-in\u7684\u533a\u522b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// 1\u3001for...in \u5faa\u73af\uff1a\u53ea\u80fd\u83b7\u5f97\u5bf9\u8c61\u7684\u952e\u540d\uff0c\u4e0d\u80fd\u83b7\u5f97\u952e\u503c\n//       for...of \u5faa\u73af\uff1a\u5141\u8bb8\u904d\u5386\u83b7\u5f97\u952e\u503c\nvar arr = ['red', 'green', 'blue']\n\nfor (let item in arr) {\n  console.log('for in item', item)\n}\n/*\n  for in item 0\n  for in item 1\n  for in item 2\n*/\n\nfor (let item of arr) {\n  console.log('for of item', item)\n}\n/*\n  for of item red\n  for of item green\n  for of item blue\n*/\n")),(0,t.kt)("h3",{id:"2\u533a\u522b\u5bf9\u4e8e\u666e\u901a\u5bf9\u8c61\u6ca1\u6709\u90e8\u7f72\u539f\u751f\u7684-iterator-\u63a5\u53e3\u76f4\u63a5\u4f7f\u7528-forof-\u4f1a\u62a5\u9519"},"2\u3001\u533a\u522b\uff1a\u5bf9\u4e8e\u666e\u901a\u5bf9\u8c61\uff0c\u6ca1\u6709\u90e8\u7f72\u539f\u751f\u7684 iterator \u63a5\u53e3\uff0c\u76f4\u63a5\u4f7f\u7528 for...of \u4f1a\u62a5\u9519"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {\n  'name': 'Jim Green',\n  'age': 12\n}\n\nfor (let key of obj) {\n  console.log('for of obj', key)\n}\n// Uncaught TypeError: obj is not iterable\n\n\n// \u4f46\u662f\u53ef\u4ee5\u4f7f\u7528 for...in \u5faa\u73af\u904d\u5386\u952e\u540d\nfor (let key in obj) {\n  console.log('for in key', key)\n}\n/*\n  for in key name\n  for in key age\n*/\n")),(0,t.kt)("h3",{id:"\u533a\u522bforin-\u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e-\u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe"},"\u533a\u522bfor...in \u5faa\u73af\u4e0d\u4ec5\u904d\u5386\u6570\u5b57\u952e\u540d\uff0c\u8fd8\u4f1a\u904d\u5386\u624b\u52a8\u6dfb\u52a0\u7684\u5176\u5b83\u952e\uff0c \u4e5f\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u6574\u4e2a\u539f\u578b\u94fe\u3002"),(0,t.kt)("p",null,"for...of \u5219\u4e0d\u4f1a\u8fd9\u6837\uff0c\u5b83\u53ea\u904d\u5386\u5f53\u524d\u5bf9\u8c61\u4e0d\u4f1a\u904d\u5386\u539f\u578b\u94fe\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1, 2, 3]\narr.set = 'world'  // \u624b\u52a8\u6dfb\u52a0\u7684\u952e\nArray.prototype.name = 'hello'  // \u539f\u578b\u94fe\u4e0a\u7684\u952e\n\nfor (let item in arr) {\n  console.log('item', item)\n}\n\n/*\n  item 0\n  item 1\n  item 2\n  item set\n  item name\n*/\n\nfor (let value of arr) {\n  console.log('value', value)\n}\n\n/*\n  value 1\n  value 2\n  value 3\n*/\n\n")),(0,t.kt)("h3",{id:"4foreach-\u5faa\u73af\u65e0\u6cd5\u4e2d\u9014\u8df3\u51fabreak-\u547d\u4ee4\u6216-return-\u547d\u4ee4\u90fd\u4e0d\u80fd\u594f\u6548"},"4\u3001forEach \u5faa\u73af\u65e0\u6cd5\u4e2d\u9014\u8df3\u51fa\uff0cbreak \u547d\u4ee4\u6216 return \u547d\u4ee4\u90fd\u4e0d\u80fd\u594f\u6548"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1, 2, 3, 5, 9]\narr.forEach(item => {\n  if (item % 2 === 0) {\n    return\n  }\n  console.log('item', item)\n})\n/*\n  item 1\n  item 3\n  item 5\n  item 9\n*/\n\n// for...of \u5faa\u73af\u53ef\u4ee5\u4e0ebreak\u3001continue \u548c return \u914d\u5408\u4f7f\u7528\uff0c\u8df3\u51fa\u5faa\u73af\nfor (let item of arr) {\n  if (item % 2 === 0) {\n    break\n  }\n  console.log('item', item)\n}\n// item 1\n\n// 5\u3001\u65e0\u8bba\u662f for...in \u8fd8\u662f for...of \u90fd\u4e0d\u80fd\u904d\u5386\u51fa Symbol \u7c7b\u578b\u7684\u503c\uff0c\u904d\u5386 Symbol \u7c7b\u578b\u7684\u503c\u9700\u8981\u7528 Object.getOwnPropertySymbols() \u65b9\u6cd5\n{\n  let a = Symbol('a')\n  let b = Symbol('b')\n\n  let obj = {\n    [a]: 'hello',\n    [b]: 'world',\n    c: 'es6',\n    d: 'dom'\n  }\n\n  for (let key in obj) {\n    console.info(key + ' --\x3e ' + obj[key])\n  }\n\n  /*\n    c --\x3e es6\n    d --\x3e dom\n  */\n\n  let objSymbols = Object.getOwnPropertySymbols(obj)\n  console.info(objSymbols)    //  [Symbol(a), Symbol(b)]\n  objSymbols.forEach(item => {\n    console.info(item.toString() + ' --\x3e ' + obj[item])\n  })\n\n  /*\n    Symbol(a) --\x3e hello\n    Symbol(b) --\x3e world\n  */\n\n  // Reflect.ownKeys \u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u6240\u6709\u7c7b\u578b\u7684\u952e\u540d\uff0c\u5305\u62ec\u5e38\u89c4\u952e\u540d\u548cSymbol\u952e\u540d\n  let keyArray = Reflect.ownKeys(obj)\n  console.log(keyArray)      //  [\"c\", \"d\", Symbol(a), Symbol(b)]\n}\n")))}s.isMDXComponent=!0}}]);