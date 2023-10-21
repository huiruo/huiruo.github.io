"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8313],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>y});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),f=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=f(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=f(r),d=o,y=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return r?t.createElement(y,a(a({ref:n},p),{},{components:r})):t.createElement(y,a({ref:n},p))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var f=2;f<i;f++)a[f]=r[f];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62112:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var t=r(87462),o=(r(67294),r(3905));const i={},a=void 0,l={unversionedId:"JavaScript/for\u5e38\u7528\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",id:"JavaScript/for\u5e38\u7528\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",title:"for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",description:"for in \u4f1a\u904d\u5386\u6570\u7ec4\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b",source:"@site/programming-tech/JavaScript/03-for\u5e38\u7528\u5faa\u73af/01-for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d.md",sourceDirName:"JavaScript/03-for\u5e38\u7528\u5faa\u73af",slug:"/JavaScript/for\u5e38\u7528\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/03-for\u5e38\u7528\u5faa\u73af/01-for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"03-2-Object.keys-\u53bb\u6389\u7a7a\u503c\u5c5e\u6027",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/03-2-Object.keys-\u53bb\u6389\u7a7a\u503c\u5c5e\u6027"},next:{title:"for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4",permalink:"/JavaScript/for\u5e38\u7528\u5faa\u73af/for-of-\u904d\u5386\u5bf9\u8c61-\u6570\u7ec4"}},c={},f=[{value:"for in \u4f1a\u904d\u5386\u6570\u7ec4\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b",id:"for-in-\u4f1a\u904d\u5386\u6570\u7ec4\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u5305\u62ec\u539f\u578b",level:2},{value:"\u8fd0\u75282:\u5b9e\u73b0\u6df1\u62f7\u8d1d",id:"\u8fd0\u75282\u5b9e\u73b0\u6df1\u62f7\u8d1d",level:2}],p={toc:f},u="wrapper";function s(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"for-in-\u4f1a\u904d\u5386\u6570\u7ec4\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u5305\u62ec\u539f\u578b"},"for in \u4f1a\u904d\u5386\u6570\u7ec4\u6240\u6709\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b"),(0,o.kt)("p",null,"for \u548c for/in \u8bed\u53e5\u90fd\u53ef\u4ee5\u8fed\u4ee3\u6570\u7ec4\u3002for \u8bed\u53e5\u9700\u8981\u914d\u5408 length \u5c5e\u6027\u548c\u6570\u7ec4\u4e0b\u6807\u6765\u5b9e\u73b0\uff0c\u6267\u884c\u6548\u7387\u6ca1\u6709 for/in \u8bed\u53e5\u9ad8\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0cfor/in \u8bed\u53e5\u4f1a\u8df3\u8fc7\u7a7a\u5143\u7d20\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8d85\u957f\u6570\u7ec4\u6765\u8bf4\uff0c\u5efa\u8bae\u4f7f\u7528 for/in \u8bed\u53e5\u8fdb\u884c\u8fed\u4ee3\u3002 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const order = [\n  {\n    id: '636a6f7fac6f9e15a6855bf4',\n    botId: null,\n    orderId: '15206073096',\n    clientOrderId: null,\n    symbol: 'BTCUSDT',\n    side: null,\n    status: 'NEW',\n    price: '20460.16000000',\n    qty: '0.00202000',\n    quoteQty: '41.32952320',\n    realizedProfit: null,\n    isBuyer: true,\n    isMaker: false,\n    orderTime: 1667876554528n,\n    type: null,\n    orderType: 1,\n    userId: '6369df5f47ea1466b1d24b3b',\n    operationType: null,\n  },\n  {\n    id: '636a6f7fac6f9e15a6855bf5',\n    botId: null,\n    orderId: '15206073096',\n    clientOrderId: null,\n    symbol: 'BTCUSDT',\n    side: null,\n    status: 'NEW',\n    price: '20460.19000000',\n    qty: '0.00326000',\n    quoteQty: '66.70021940',\n    realizedProfit: null,\n    isBuyer: true,\n    isMaker: false,\n    orderTime: 1667876554528n,\n    type: null,\n    orderType: 1,\n    userId: '6369df5f47ea1466b1d24b3b',\n    operationType: null,\n  }\n]\n\nfunction forinTest(res) {\n  for (const key in res) {\n    const {\n      orderId,\n      price,\n      qty,\n      quoteQty,\n      time,\n      isBuyer,\n      isMaker,\n    } = res[key]\n\n    console.log('price:', price);\n  }\n}\n\nforinTest(order)\n")),(0,o.kt)("h2",{id:"\u8fd0\u75282\u5b9e\u73b0\u6df1\u62f7\u8d1d"},"\u8fd0\u75282:\u5b9e\u73b0\u6df1\u62f7\u8d1d"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a\n01-\u6df1-\u6d45-\u62f7\u8d1d.md"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function deepCopy(obj) {\n  let result = Array.isArray(obj) ? [] : {};\n  // for in \u4f1a\u8d70\u539f\u578b\u94fe\n  for (let key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      if (typeof obj[key] === 'object') {\n        result[key] = deepCopy(obj[key]);   // \u9012\u5f52\u590d\u5236\n      } else {\n        result[key] = obj[key];\n      }\n    }\n  }\n  return result;\n}\n")))}s.isMDXComponent=!0}}]);