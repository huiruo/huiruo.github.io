"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"qu/ag",id:"qu/ag",title:"ag",description:"\u7528\u9012\u5f52\u5b9e\u73b0\u9636\u4e58\u6bd4\u5982\u4f20\u51655\uff0c\u5c31\u8fd4\u56de54321\u7684\u7ed3\u679c",source:"@site/programming-tech/qu/04-ag.md",sourceDirName:"qu",slug:"/qu/ag",permalink:"/qu/ag",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/qu/04-ag.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{}},l={},u=[{value:"\u7528\u9012\u5f52\u5b9e\u73b0\u9636\u4e58\u6bd4\u5982\u4f20\u51655\uff0c\u5c31\u8fd4\u56de5<em>4</em>3<em>2</em>1\u7684\u7ed3\u679c",id:"\u7528\u9012\u5f52\u5b9e\u73b0\u9636\u4e58\u6bd4\u5982\u4f20\u51655\u5c31\u8fd4\u56de54321\u7684\u7ed3\u679c",level:2}],p={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7528\u9012\u5f52\u5b9e\u73b0\u9636\u4e58\u6bd4\u5982\u4f20\u51655\u5c31\u8fd4\u56de54321\u7684\u7ed3\u679c"},"\u7528\u9012\u5f52\u5b9e\u73b0\u9636\u4e58\u6bd4\u5982\u4f20\u51655\uff0c\u5c31\u8fd4\u56de5",(0,o.kt)("em",{parentName:"h2"},"4"),"3",(0,o.kt)("em",{parentName:"h2"},"2"),"1\u7684\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function factorial(n) {\n  // \u57fa\u672c\u60c5\u51b5\uff1a\u9636\u4e58\u7684\u5b9a\u4e49\u4e2d 0 \u548c 1 \u7684\u9636\u4e58\u90fd\u662f 1\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  // \u9012\u5f52\u60c5\u51b5\uff1an \u7684\u9636\u4e58\u7b49\u4e8e n \u4e58\u4ee5 (n - 1) \u7684\u9636\u4e58\n  return n * factorial(n - 1);\n}\n\n// \u4f8b\u5982\uff0c\u8ba1\u7b97 5 \u7684\u9636\u4e58\nconst result = factorial(5);\nconsole.log(result); // \u8f93\u51fa 120\n")))}s.isMDXComponent=!0}}]);