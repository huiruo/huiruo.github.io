"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=l,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const i={},a=void 0,o={unversionedId:"html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/flex",id:"html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/flex",title:"flex",description:"\u5e03\u5c40\u539f\u7406\u7684\u4e0d\u540c",source:"@site/programming-tech/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/01-flex.md",sourceDirName:"html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40",slug:"/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/flex",permalink:"/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/flex",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/01-flex.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{}},c={},s=[{value:"\u5e03\u5c40\u539f\u7406\u7684\u4e0d\u540c",id:"\u5e03\u5c40\u539f\u7406\u7684\u4e0d\u540c",level:2},{value:"flex-direction",id:"flex-direction",level:2},{value:"\u4e3b\u8f74\u4e0a:justify-content",id:"\u4e3b\u8f74\u4e0ajustify-content",level:2},{value:"\u63a7\u5236\u4ea4\u53c9\u8f74\uff1aalign-items",id:"\u63a7\u5236\u4ea4\u53c9\u8f74align-items",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5e03\u5c40\u539f\u7406\u7684\u4e0d\u540c"},"\u5e03\u5c40\u539f\u7406\u7684\u4e0d\u540c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Flexbox\uff08\u5f39\u6027\u76d2\u5b50\u6a21\u578b\uff09\uff1a\u662f\u4e00\u79cd\u4e00\u7ef4\u5e03\u5c40\u6a21\u578b\uff0c\u7528\u4e8e\u5728\u4e00\u4e2a\u7ef4\u5ea6\uff08\u884c\u6216\u5217\uff09\u4e0a\u6392\u5217\u5143\u7d20\u3002Flexbox\u4f7f\u5f97\u5728\u4e3b\u8f74\uff08\u6c34\u5e73\u6216\u5782\u76f4\uff09\u4e0a\u7684\u5143\u7d20\u5bf9\u9f50\u3001\u7a7a\u95f4\u5206\u914d\u53d8\u5f97\u7b80\u5355\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Grid\uff08\u7f51\u683c\u5e03\u5c40\uff09\uff1a\u63d0\u4f9b\u4e86\u4e8c\u7ef4\u5e03\u5c40\u7684\u80fd\u529b\uff0c\u5141\u8bb8\u540c\u65f6\u63a7\u5236\u884c\u548c\u5217\u3002Grid\u5e03\u5c40\u80fd\u591f\u521b\u5efa\u590d\u6742\u7684\u5e03\u5c40\u7ed3\u6784\uff0c\u5982\u7f51\u683c\u548c\u77e9\u9635\u3002"))),(0,l.kt)("h2",{id:"flex-direction"},"flex-direction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5305\u62ec row(\u9ed8\u8ba4\u503c),\u4e3b\u8f74\u662f\u6c34\u5e73\u7684\uff0c\u4ea4\u53c9\u8f74\u662f\u5782\u76f4\u7684\n",(0,l.kt)("img",{alt:"alt text",src:r(31172).Z,width:"593",height:"270"}))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u7531\u4e8e row \u662f\u9ed8\u8ba4\u503c\uff0c\u5982\u679c\u5c06\u5bb9\u5668\u8bbe\u7f6e\u4e3a flex\uff0c\u4f46\u672a\u6307\u5b9a flex-direction\uff0c\u5219\u5f39\u6027\u5b50\u5143\u7d20\u5c06\u81ea\u52a8\u6392\u5217\u4e3a\u4e00\u884c\u3002\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"row-reverse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"column: \u5f53 flex-direction \u5c5e\u6027\u7684\u503c\u4e3a column \u65f6\uff0c\u4e3b\u8f74\u662f\u5782\u76f4\u7684\uff0c\u4ea4\u53c9\u8f74\u662f\u6c34\u5e73\u7684\uff0c\u5982\u56fe\u6240\u793a\u3002\u8fd9\u610f\u5473\u7740\u5f39\u6027\u9879\u76ee\u5c06\u5782\u76f4\u6392\u5217\u3002\n",(0,l.kt)("img",{alt:"alt text",src:r(17022).Z,width:"548",height:"322"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"column-reverse\u3002"))),(0,l.kt)("h2",{id:"\u4e3b\u8f74\u4e0ajustify-content"},"\u4e3b\u8f74\u4e0a:justify-content"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u54cd\u5e94\u5f0f\u5e03\u5c40\uff0cjustify-content \u5c5e\u6027\u6709\u52a9\u4e8e\u5206\u914d\u5269\u4f59\u7684\u591a\u4f59\u7a7a\u95f4\uff0c\u5373\u5728 flex \u5b50\u5143\u7d20\u6392\u5217\u5b8c\u6210\u540e\u5269\u4e0b\u7684\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt text",src:r(93827).Z,width:"531",height:"314"})),(0,l.kt)("h2",{id:"\u63a7\u5236\u4ea4\u53c9\u8f74align-items"},"\u63a7\u5236\u4ea4\u53c9\u8f74\uff1aalign-items"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ex-start"),(0,l.kt)("li",{parentName:"ul"},"flex-end"),(0,l.kt)("li",{parentName:"ul"},"center")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt text",src:r(65190).Z,width:"586",height:"162"})))}f.isMDXComponent=!0},31172:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/flex1-0b3e2f8ed182e75615e46af99e53c692.png"},17022:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/flex2-ba421d77d26b77773bada9921581b6b5.png"},65190:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/flex3-288e315218910fde462901848fcd3de9.png"},93827:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/flex4-7ad9514746a29824b10487a29cf7a8d6.png"}}]);