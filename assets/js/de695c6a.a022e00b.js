"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3644],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,y=s["".concat(l,".").concat(m)]||s[m]||f[m]||i;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20728:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},o=void 0,c={unversionedId:"JavaScript/array\u65b9\u6cd5/\u5e94\u75281-\u53bb\u91cd",id:"JavaScript/array\u65b9\u6cd5/\u5e94\u75281-\u53bb\u91cd",title:"\u5e94\u75281-\u53bb\u91cd",description:"1.\u4f7f\u7528 filter,\u89c1 01_filter.js",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/\u5e94\u75281-\u53bb\u91cd.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/\u5e94\u75281-\u53bb\u91cd",permalink:"/JavaScript/array\u65b9\u6cd5/\u5e94\u75281-\u53bb\u91cd",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/01-array\u65b9\u6cd5/\u5e94\u75281-\u53bb\u91cd.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5176\u4ed6-ECMAScript 6\u548c\u6570\u7ec4\u7684\u65b0\u529f\u80fd",permalink:"/JavaScript/array\u65b9\u6cd5/\u5176\u4ed6-ECMAScript 6\u548c\u6570\u7ec4\u7684\u65b0\u529f\u80fd"},next:{title:"\u5e94\u75282-\u5408\u5e76\u6570\u7ec4-concat-apply",permalink:"/JavaScript/array\u65b9\u6cd5/\u5e94\u75282-\u5408\u5e76\u6570\u7ec4-concat-apply"}},l={},p=[{value:"1.\u4f7f\u7528 filter,\u89c1 01_filter.js",id:"1\u4f7f\u7528-filter\u89c1-01_filterjs",level:3},{value:"2.\u7b80\u5355\u6570\u7ec4 \u89c1set",id:"2\u7b80\u5355\u6570\u7ec4-\u89c1set",level:3},{value:"3.\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",id:"3\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",level:3},{value:"reduce",id:"reduce",level:3}],u={toc:p},s="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1\u4f7f\u7528-filter\u89c1-01_filterjs"},"1.\u4f7f\u7528 filter,\u89c1 01_filter.js"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./filter-%E8%BF%87%E6%BB%A4%E5%87%BD%E6%95%B0"},"filter-\u8fc7\u6ee4\u51fd\u6570")),(0,a.kt)("h3",{id:"2\u7b80\u5355\u6570\u7ec4-\u89c1set"},"2.\u7b80\u5355\u6570\u7ec4 \u89c1set"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../set%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"},"set\u6570\u636e\u7c7b\u578b")),(0,a.kt)("h3",{id:"3\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd"},"3.\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nconst uniqueArr = (array, key) => {\n    let obj = {}\n    const arrays = array.reduce((setArr, item) => {\n        obj[item[key]] ? '' : (obj[item[key]] = true && setArr.push(item))\n        return setArr\n    }, [])\n    return arrays\n}\n")),(0,a.kt)("h3",{id:"reduce"},"reduce"),(0,a.kt)("p",null,"\u53c2\u6570\uff1a reduce(\u4e0a\u4e00\u4e2a\u5e76\u5f52\u503c\uff0c\u5f53\u524d\u9879\uff0c\u5f53\u524d\u9879\u7684\u7d22\u5f15\uff0c\u6570\u7ec4\u672c\u8eab\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4f8b\uff1a\u4f7f\u7528reduce()\u51fd\u6570\u6267\u884c\u7d2f\u52a0\u6570\u7ec4\u4e2d\u6240\u6709\u6570\u7ec4\u7684\u64cd\u4f5c\nlet values = [1,2,3,4,5,6];\nlet sum = values.reduce((prev, cur, index, array) => prev + cur);\nconsole.log(sum) // \u6253\u5370\u51fa21\n")))}f.isMDXComponent=!0}}]);