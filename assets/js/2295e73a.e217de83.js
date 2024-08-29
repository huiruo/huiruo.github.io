"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2719],{3905:(e,r,t)=>{t.d(r,{Zo:()=>g,kt:()=>m});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),d=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=d(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=d(t),s=l,m=u["".concat(o,".").concat(s)]||u[s]||c[s]||a;return t?n.createElement(m,i(i({ref:r},g),{},{components:t})):n.createElement(m,i({ref:r},g))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},85679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=t(87462),l=(t(67294),t(3905));const a={},i=void 0,p={unversionedId:"html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/Grid",id:"html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/Grid",title:"Grid",description:"\u603b\u7ed3",source:"@site/programming-tech/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/02-Grid.md",sourceDirName:"html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40",slug:"/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/Grid",permalink:"/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/Grid",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/html-css/B-grid\u5e03\u5c40\u548cflex\u5e03\u5c40/02-Grid.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{}},o={},d=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"grid-template-columns",id:"grid-template-columns",level:2},{value:"grid-template-rows \u5c5e\u6027\u4e0e\u4e4b\u76f8\u53cd",id:"grid-template-rows-\u5c5e\u6027\u4e0e\u4e4b\u76f8\u53cd",level:2},{value:"repeat() \u51fd\u6570",id:"repeat-\u51fd\u6570",level:2},{value:"auto-fill \u5173\u952e\u5b57",id:"auto-fill-\u5173\u952e\u5b57",level:3},{value:"fr \u5173\u952e\u5b57",id:"fr-\u5173\u952e\u5b57",level:3},{value:"minmax() \u51fd\u6570\uff1a\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u5bbd\u5ea6\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c",id:"minmax-\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\u5bbd\u5ea6\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c",level:2},{value:"grid-row-gap \u5c5e\u6027\u3001grid-column-gap \u5c5e\u6027\u4ee5\u53ca grid-gap \u5c5e\u6027",id:"grid-row-gap-\u5c5e\u6027grid-column-gap-\u5c5e\u6027\u4ee5\u53ca-grid-gap-\u5c5e\u6027",level:2},{value:"\u5728CSS\u7f51\u683c\u4e2d\u5bf9\u9f50\u548c\u8c03\u6574",id:"\u5728css\u7f51\u683c\u4e2d\u5bf9\u9f50\u548c\u8c03\u6574",level:2},{value:"\u5bf9\u4e8e grid \u5e03\u5c40\u6765\u8bf4\uff0c\u63a7\u5236\u65b9\u5411\u7684\u5c5e\u6027\u662f grid-auto-flow\uff0c\u9ed8\u8ba4\u662f row\u3002",id:"\u5bf9\u4e8e-grid-\u5e03\u5c40\u6765\u8bf4\u63a7\u5236\u65b9\u5411\u7684\u5c5e\u6027\u662f-grid-auto-flow\u9ed8\u8ba4\u662f-row",level:2}],g={toc:d},u="wrapper";function c(e){let{components:r,...a}=e;return(0,l.kt)(u,(0,n.Z)({},g,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"Flexbox \u53ef\u4ee5\u4f7f\u60a8\u5728\u6c34\u5e73\u65b9\u5411\uff08\u884c\uff09\u6216\u5782\u76f4\u65b9\u5411\uff08\u5217\uff09\u4e0a\u6392\u5217\u5143\u7d20\u3002"),(0,l.kt)("p",null,"CSS Grid \u5219\u53ef\u4ee5\u540c\u65f6\u5728\u5782\u76f4\u548c\u6c34\u5e73\u65b9\u5411\u4e0a\u5bf9\u5143\u7d20\u8fdb\u884c\u5bf9\u9f50\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 grid-template-rows \u548c grid-template-columns \u5c5e\u6027\uff0c\u53ef\u4ee5\u5206\u522b\u786e\u5b9a\u7f51\u683c\u884c\u548c\u5217\u7684\u5927\u5c0f\u3002"),(0,l.kt)("h2",{id:"grid-template-columns"},"grid-template-columns"),(0,l.kt)("p",null,"grid-template-columns \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u7f51\u683c\u4e2d\u5217\u7684\u6570\u91cf\u548c\u5bbd\u5ea6\uff0c\u901a\u8fc7\u5b9a\u4e49\u7f51\u683c\u5bb9\u5668\u7684\u5217\u6765\u6307\u5b9a\u8f68\u9053\uff08track\uff09\u7684\u5927\u5c0f\u548c\u7ebf\u540d\uff08line names\uff09\u3002"),(0,l.kt)("h2",{id:"grid-template-rows-\u5c5e\u6027\u4e0e\u4e4b\u76f8\u53cd"},"grid-template-rows \u5c5e\u6027\u4e0e\u4e4b\u76f8\u53cd"),(0,l.kt)("p",null,"\u5b83\u7528\u4e8e\u6307\u5b9a\u7f51\u683c\u4e2d\u884c\u7684\u6570\u91cf\u548c\u9ad8\u5ea6\uff0c\u901a\u8fc7\u5b9a\u4e49\u7f51\u683c\u5bb9\u5668\u7684\u884c\u6765\u6307\u5b9a\u8f68\u9053\uff08track\uff09\u7684\u5927\u5c0f\u548c\u7ebf\u540d\uff08line names\uff09\u3002"),(0,l.kt)("p",null,"\u6b63\u5982\u60a8\u5728\u4e0b\u9762\u7684\u56fe\u7247\u4e2d\u6240\u770b\u5230\u7684\uff0cgrid-template-rows \u5c06\u5143\u7d20\u4ece\u8bbe\u5907\u5c4f\u5e55\u7684\u9876\u90e8\u6392\u5217\u5230\u5e95\u90e8\u3002"),(0,l.kt)("p",null,"\u800c grid-template-columns \u5219\u5c06\u5143\u7d20\u4ece\u8bbe\u5907\u5c4f\u5e55\u7684\u5de6\u4fa7\u6392\u5217\u5230\u53f3\u4fa7\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt text",src:t(96706).Z,width:"582",height:"331"})),(0,l.kt)("p",null,"\u9664\u4e86\u76f4\u63a5\u4e66\u5199\u50cf\u7d20\u4f5c\u4e3a\u884c\u9ad8\u5217\u5bbd\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570"),(0,l.kt)("h2",{id:"repeat-\u51fd\u6570"},"repeat() \u51fd\u6570"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7b80\u5316\u91cd\u590d\u7684\u503c\u3002\u8be5\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u91cd\u590d\u7684\u6b21\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6240\u8981\u91cd\u590d\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n  display: grid;\n  grid-template-columns: 200px 100px 200px;\n  grid-gap: 5px;\n  /*  2\u884c\uff0c\u800c\u4e14\u884c\u9ad8\u90fd\u4e3a 50px  */\n  grid-template-rows: repeat(2, 50px);\n}\n")),(0,l.kt)("h3",{id:"auto-fill-\u5173\u952e\u5b57"},"auto-fill \u5173\u952e\u5b57"),(0,l.kt)("p",null,"\u8868\u793a\u81ea\u52a8\u586b\u5145\uff0c\u5bb9\u5668\u4e00\u884c\uff08\u6216\u8005\u4e00\u5217\uff09\u7a7a\u6321\u8db3\u591f\u5c31\u5f80\u91cc\u9762\u585e\u5143\u7d20\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 200px);/* \u8868\u793a\u5217\u5bbd\u662f 200 px\uff0c\u4f46\u5217\u7684\u6570\u91cf\u662f\u4e0d\u56fa\u5b9a\u7684\uff0c\u53ea\u8981\u6d4f\u89c8\u5668\u80fd\u591f\u5bb9\u7eb3\u5f97\u4e0b\uff0c\u5c31\u53ef\u4ee5\u653e\u7f6e\u5143\u7d20 */\n  grid-gap: 5px;\n  grid-auto-rows: 50px;\n}\n")),(0,l.kt)("h3",{id:"fr-\u5173\u952e\u5b57"},"fr \u5173\u952e\u5b57"),(0,l.kt)("p",null,"\u957f\u5ea6\u5355\u4f4d\uff0c\u8868\u793a\u6309\u6bd4\u4f8b\u5206\u914d\u3002fr \u5355\u4f4d\u4ee3\u8868\u7f51\u683c\u5bb9\u5668\u4e2d\u53ef\u7528\u7a7a\u95f4\u7684\u4e00\u7b49\u4efd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n  display: grid;\n  grid-template-columns: 1fr 2fr 200px;/*\u7b2c\u4e09\u5217\u5bbd\u662f\u56fa\u5b9a\u4e3a200px\uff0c\u524d\u4e24\u52171:2\u5206\u914d*/\n  grid-gap: 5px;\n  grid-auto-rows: 50px;\n}\n")),(0,l.kt)("h2",{id:"minmax-\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\u5bbd\u5ea6\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c"},"minmax() \u51fd\u6570\uff1a\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u5bbd\u5ea6\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr minmax(300px, 2fr);\n  grid-gap: 5px;\n  grid-auto-rows: 50px;\n}\n")),(0,l.kt)("h2",{id:"grid-row-gap-\u5c5e\u6027grid-column-gap-\u5c5e\u6027\u4ee5\u53ca-grid-gap-\u5c5e\u6027"},"grid-row-gap \u5c5e\u6027\u3001grid-column-gap \u5c5e\u6027\u4ee5\u53ca grid-gap \u5c5e\u6027"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u884c\u5217\u95f4\u95f4\u9694"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grid-row-gap: 10px\u8868\u793a\u884c\u95f4\u8ddd\u662f 10px"),(0,l.kt)("li",{parentName:"ul"},"grid-column-gap: 20px\u8868\u793a\u5217\u95f4\u8ddd\u662f 20px\u3002"),(0,l.kt)("li",{parentName:"ul"},"grid-gap: 10px 20px\u5b9e\u73b0\u7684\u6548\u679c\u662f\u4e00\u6837")),(0,l.kt)("h2",{id:"\u5728css\u7f51\u683c\u4e2d\u5bf9\u9f50\u548c\u8c03\u6574"},"\u5728CSS\u7f51\u683c\u4e2d\u5bf9\u9f50\u548c\u8c03\u6574"),(0,l.kt)("p",null,"align-items \u548c justify-content \u5e76\u9002\u7528\u4e8e Flexbox\u548cGrid\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u5728\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u5b9a\u4f4d\u5143\u7d20\u3002"),(0,l.kt)("h2",{id:"\u5bf9\u4e8e-grid-\u5e03\u5c40\u6765\u8bf4\u63a7\u5236\u65b9\u5411\u7684\u5c5e\u6027\u662f-grid-auto-flow\u9ed8\u8ba4\u662f-row"},"\u5bf9\u4e8e grid \u5e03\u5c40\u6765\u8bf4\uff0c\u63a7\u5236\u65b9\u5411\u7684\u5c5e\u6027\u662f grid-auto-flow\uff0c\u9ed8\u8ba4\u662f row\u3002"))}c.isMDXComponent=!0},96706:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/grid1-10a65ce76197dd428a2fb6a81d17b1f3.png"}}]);