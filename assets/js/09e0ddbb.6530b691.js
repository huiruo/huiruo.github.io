"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,y=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,c={unversionedId:"qu/\u6811/AVL\u6811",id:"qu/\u6811/AVL\u6811",title:"AVL\u6811",description:"AVL \u6811\u5b9a\u4e49",source:"@site/programming-tech/qu/08-\u6811/05-AVL\u6811.md",sourceDirName:"qu/08-\u6811",slug:"/qu/\u6811/AVL\u6811",permalink:"/qu/\u6811/AVL\u6811",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/qu/08-\u6811/05-AVL\u6811.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{}},l={},u=[{value:"AVL \u6811\u5b9a\u4e49",id:"avl-\u6811\u5b9a\u4e49",level:2}],p={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"avl-\u6811\u5b9a\u4e49"},"AVL \u6811\u5b9a\u4e49"),(0,o.kt)("p",null,"AVL \u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u4e8c\u53c9\u67e5\u627e\u6811\uff0c\u5b83\u80fd\u591f\u5728\u6bcf\u6b21\u63d2\u5165\u6216\u5220\u9664\u8282\u70b9\u65f6\u81ea\u52a8\u8c03\u6574\u6811\u7684\u7ed3\u6784\uff0c\u4f7f\u5f97\u6574\u68f5\u6811\u59cb\u7ec8\u4fdd\u6301\u5e73\u8861\u72b6\u6001\u3002AVL \u6811\u7684\u5e73\u8861\u6027\u662f\u901a\u8fc7\u6811\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u5e73\u8861\u56e0\u5b50\u6765\u7ef4\u62a4\u7684\uff0c\u5e73\u8861\u56e0\u5b50\u662f\u8be5\u8282\u70b9\u7684\u5de6\u5b50\u6811\u9ad8\u5ea6\u51cf\u53bb\u53f3\u5b50\u6811\u9ad8\u5ea6\u7684\u5dee\u503c\uff0c\u56e0\u6b64\u5e73\u8861\u56e0\u5b50\u7684\u53d6\u503c\u8303\u56f4\u4e3a -1\u30010\u30011\u3002"),(0,o.kt)("p",null,"AVL \u6811\u7684\u5e73\u8861\u7ef4\u62a4\u7b56\u7565\u662f\uff1a\u5bf9\u4e8e\u4efb\u610f\u8282\u70b9\uff0c\u5176\u5de6\u53f3\u5b50\u6811\u7684\u9ad8\u5ea6\u5dee\u4e0d\u8d85\u8fc71\uff0c\u5982\u679c\u4e0d\u5e73\u8861\uff0c\u5219\u901a\u8fc7\u65cb\u8f6c\u64cd\u4f5c\u4f7f\u4e4b\u6062\u590d\u5e73\u8861\u72b6\u6001\u3002AVL \u6811\u7684\u65cb\u8f6c\u64cd\u4f5c\u5305\u62ec\u5de6\u65cb\u548c\u53f3\u65cb\uff0c\u5de6\u65cb\u662f\u5c06\u67d0\u4e2a\u8282\u70b9\u7684\u53f3\u5b50\u6811\u63d0\u5347\u4e3a\u65b0\u7684\u7236\u8282\u70b9\uff0c\u800c\u53f3\u65cb\u662f\u5c06\u67d0\u4e2a\u8282\u70b9\u7684\u5de6\u5b50\u6811\u63d0\u5347\u4e3a\u65b0\u7684\u7236\u8282\u70b9\u3002"),(0,o.kt)("p",null,"AVL \u6811\u7684\u4f18\u70b9\u662f\uff1a\u67e5\u8be2\u3001\u63d2\u5165\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662f O(log n)\uff0c\u5176\u4e2d n \u662f\u6811\u4e2d\u8282\u70b9\u7684\u6570\u91cf\u3002\u7f3a\u70b9\u662f\uff0c\u7531\u4e8e AVL \u6811\u9700\u8981\u7ef4\u62a4\u5e73\u8861\u72b6\u6001\uff0c\u6240\u4ee5\u63d2\u5165\u548c\u5220\u9664\u8282\u70b9\u65f6\u9700\u8981\u8fdb\u884c\u9891\u7e41\u7684\u65cb\u8f6c\u64cd\u4f5c\uff0c\u5bfc\u81f4\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u7684\u6548\u7387\u8f83\u4f4e\u3002"))}f.isMDXComponent=!0}}]);