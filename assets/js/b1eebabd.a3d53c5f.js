"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9423],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>s});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,s=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?t.createElement(s,o(o({ref:n},c),{},{components:r})):t.createElement(s,o({ref:n},c))}));function s(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[f]="string"==typeof e?e:i,o[1]=d;for(var p=2;p<a;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51879:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var t=r(87462),i=(r(67294),r(3905));const a={},o=void 0,d={unversionedId:"JavaScript/array\u65b9\u6cd5/findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1",id:"JavaScript/array\u65b9\u6cd5/findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1",title:"findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1",description:"ES6\u65b0\u589e",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/05-findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1",permalink:"/JavaScript/array\u65b9\u6cd5/findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/01-array\u65b9\u6cd5/05-findIndex-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"find-\u8fd4\u56de\u7b2c\u4e00\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u662f\u5bf9\u8c61",permalink:"/JavaScript/array\u65b9\u6cd5/find-\u8fd4\u56de\u7b2c\u4e00\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u662f\u5bf9\u8c61"},next:{title:"indexOf-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1",permalink:"/JavaScript/array\u65b9\u6cd5/indexOf-\u627e\u5230\u8fd4\u56deindex-\u5426\u5219\u8fd4\u56de-1"}},l={},p=[{value:"ES6\u65b0\u589e",id:"es6\u65b0\u589e",level:2},{value:"findIndex()\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u6b21\u51fd\u6570\u6267\u884c\uff1a",id:"findindex\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u6b21\u51fd\u6570\u6267\u884c",level:2},{value:"findIndex \u548c indexOf \u5bf9\u6bd4",id:"findindex-\u548c-indexof-\u5bf9\u6bd4",level:2}],c={toc:p},f="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(f,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"es6\u65b0\u589e"},"ES6\u65b0\u589e"),(0,i.kt)("h2",{id:"findindex\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u6b21\u51fd\u6570\u6267\u884c"},"findIndex()\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u6b21\u51fd\u6570\u6267\u884c\uff1a"),(0,i.kt)("p",null,"\u5f53\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u5728\u6d4b\u8bd5\u6761\u4ef6\u65f6\u8fd4\u56de true \u65f6,\nfindIndex() \u8fd4\u56de\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u7684\u7d22\u5f15\u4f4d\u7f6e\uff0c\u4e4b\u540e\u7684\u503c\u4e0d\u4f1a\u518d\u8c03\u7528\u6267\u884c\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u8fd4\u56de -1"),(0,i.kt)("h2",{id:"findindex-\u548c-indexof-\u5bf9\u6bd4"},"findIndex \u548c indexOf \u5bf9\u6bd4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"findIndex()\u548cindexOf\u65b9\u6cd5\u5b9e\u73b0\u90fd\u662f\u901a\u8fc7\u5faa\u73af\u904d\u5386\u67e5\u627e\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"findIndex()\u7684\u5e94\u7528\u573a\u666f\u8981\u6bd4indexOf\u5e7f\u6cdb\u4e00\u4e9b\uff0c\u53ef\u4ee5\u67e5\u627e\u5927\u4e8e\u7b49\u4e8e\u5c0f\u4e8e\uff0c\u8868\u8fbe\u5f0f\u53ef\u4ee5\u968f\u4fbf\u5199\uff0c\nindexOf\u5c31\u53ea\u80fd\u5728\u7b2c\u4e00\u5c42\u67e5\u627e\u76f8\u7b49\u7684\u503c\u3002\nfindIndex\u662f\u4f20\u5165\u4e00\u4e2a\u6d4b\u8bd5\u6761\u4ef6,\u4e5f\u5c31\u662f\u51fd\u6570,\u627e\u5230\u4e86\u8fd4\u56de\u5f53\u524d\u9879\u7d22\u5f15,\u6ca1\u6709\u627e\u5230\u8fd4\u56de-1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"findIndex()\u5b9e\u9645\u4e0a\u76f8\u5f53\u4e8e\u4e00\u4e2afor\u5faa\u73af\uff0c\u53ea\u4e0d\u8fc7\u627e\u5230\u4e86\u4f60\u4e0d\u9700\u8981\u81ea\u5df1\u9000\u51fa\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"indexOf\u662f\u5224\u65ad\u6570\u7ec4\u4e2d\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728,\u4e0d\u5b58\u5728\u5219\u8fd4\u56de-1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"findIndex\u662f\u7528\u6765\u67e5\u627e\u7d22\u5f15\u7684,\u8fd4\u56de\u7684\u67e5\u627e\u5230\u7684\u7b26\u5408\u9879\u7684\u7d22\u5f15."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const testArr = [{ id: 1, name: '\u5f20\u4e09' }, { id: 2, name: '\u674e\u56db' }, { id: 3, name: '\u738b\u4e94' }, { id: 2, name: '\u8d75\u516d' }]\n\nlet arrIndex = testArr.findIndex(item => {\n    return item.name === '\u5f20\u4e09';\n});\n\nif (arrIndex > -1) {\n    console.log(\"\u5305\u542b\", testArr[arrIndex]);\n} else {\n    console.log(\"\u4e0d\u5305\u542b\");\n}\n")))}u.isMDXComponent=!0}}]);