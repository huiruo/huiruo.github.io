"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>b,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),c=u(r),s=a,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(f,o(o({ref:t},b),{},{components:r})):n.createElement(f,o({ref:t},b))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},66430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"babel\u63d2\u4ef6-transform-runtime",sidebar_position:4},o=void 0,i={unversionedId:"webpack-AST-Babel/babel\u63d2\u4ef6-transform-runtime",id:"webpack-AST-Babel/babel\u63d2\u4ef6-transform-runtime",title:"babel\u63d2\u4ef6-transform-runtime",description:"\u603b\u7ed3",source:"@site/programming-tech/webpack-AST-Babel/21-babel\u63d2\u4ef6-transform-runtime.md",sourceDirName:"webpack-AST-Babel",slug:"/webpack-AST-Babel/babel\u63d2\u4ef6-transform-runtime",permalink:"/webpack-AST-Babel/babel\u63d2\u4ef6-transform-runtime",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/webpack-AST-Babel/21-babel\u63d2\u4ef6-transform-runtime.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"babel\u63d2\u4ef6-transform-runtime",sidebar_position:4},sidebar:"docs",previous:{title:"babel-\u7f16\u8bd1\u6784\u5efa\u4e4bpreset\u5c5e\u6027\u503cmodules",permalink:"/webpack-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa\u4e4bpreset\u5c5e\u6027\u503cmodules"},next:{title:"babel-standalone-babel\u8c03\u8bd5\u5de5\u5177",permalink:"/webpack-AST-Babel/babel-standalone-babel\u8c03\u8bd5\u5de5\u5177"}},p={},u=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"<code>@babel/plugin-transform-runtime</code>\u7684\u4e3b\u8981\u6709\u4e09\u4e2a\u7528\u5904",id:"babelplugin-transform-runtime\u7684\u4e3b\u8981\u6709\u4e09\u4e2a\u7528\u5904",level:2}],b={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528babel.config.js\u6765\u4f5c\u4e3a\u6574\u4e2a\u9879\u76ee\u7684babel\u914d\u7f6e\uff0c.babelrc\u66f4\u52a0\u9002\u7528\u4e8emonorepo\u9879\u76ee"),(0,a.kt)("li",{parentName:"ul"},"babel\u7684\u7f16\u8bd1\u57fa\u672c\u90fd\u662f\u4f9d\u8d56\u4e8eplugin\uff0cpreset\u662f\u4e00\u7ec4plugin\u7684\u96c6\u5408"),(0,a.kt)("li",{parentName:"ul"},"polyfill\u4e3a\u4e00\u4e9b\u8f83\u8001\u7684\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e00\u4e9b\u65b0\u7279\u6027\u7684\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"transform-runtime\u53ef\u4ee5\u63d0\u53d6\u4e00\u4e9b\u5e2e\u52a9\u51fd\u6570\u6765\u51cf\u5c0f\u6253\u5305\u7684\u4f53\u79ef\uff0c\u5728\u5f00\u53d1\u81ea\u5df1\u7684\u7c7b\u5e93\u5efa\u8bae\u5f00\u542fcorejs\u9009\u9879")),(0,a.kt)("h2",{id:"babelplugin-transform-runtime\u7684\u4e3b\u8981\u6709\u4e09\u4e2a\u7528\u5904"},(0,a.kt)("inlineCode",{parentName:"h2"},"@babel/plugin-transform-runtime"),"\u7684\u4e3b\u8981\u6709\u4e09\u4e2a\u7528\u5904"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5e2e\u52a9\u51cf\u5c0f\u8f93\u51fa\u6587\u4ef6\u5927\u5c0f\uff0c\u5e76\u89e3\u51b3\u4e00\u4e9b\u8fd0\u884c\u65f6\u95ee\u9898\uff0c\u4f8b\u5982\u751f\u6210\u5668\u51fd\u6570\u548c\u5f02\u6b65\u51fd\u6570\u7684\u652f\u6301\u3002")),(0,a.kt)("p",null,"@babel/plugin-transform-runtime \u662f Babel \u63d2\u4ef6\u4e4b\u4e00\uff0c\u7528\u4e8e\u6539\u5584 JavaScript \u4ee3\u7801\u7684\u8f6c\u8bd1\u8fc7\u7a0b\uff0c\u5e76\u51cf\u5c0f\u8f6c\u8bd1\u540e\u7684\u4ee3\u7801\u5927\u5c0f\u3002\u5b83\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u89e3\u51b3\u4e00\u4e9b\u4e0e JavaScript \u8fd0\u884c\u65f6\u76f8\u5173\u7684\u95ee\u9898\uff0c\u7279\u522b\u662f\u5728\u4f7f\u7528\u65b0\u7279\u6027\u548c\u5185\u7f6e\u51fd\u6570\u65f6\u5f15\u5165\u7684\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\uff0c\u4ee5\u53ca\u591a\u6b21\u5728\u4ee3\u7801\u4e2d\u91cd\u590d\u5f15\u5165\u8fd9\u4e9b\u8f85\u52a9\u51fd\u6570\u7684\u95ee\u9898\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u52a8\u5f15\u5165@babel/runtime/regenerator\uff0c\u5f53\u4f60\u4f7f\u7528\u4e86generator/async\n\u51fd\u6570(\u901a\u8fc7regenerator\u9009\u9879\u6253\u5f00\uff0c\u9ed8\u8ba4\u4e3atrue)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u63d0\u53d6\u4e00\u4e9bbabel\u4e2d\u7684\u5de5\u5177\u51fd\u6570\u6765\u8fbe\u5230\u51cf\u5c0f\u6253\u5305\u4f53\u79ef\u7684\u4f5c\u7528")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5f00\u542f\u4e86corejs\u9009\u9879(\u9ed8\u8ba4\u4e3afalse)\uff0c\u4f1a\u81ea\u52a8\u5efa\u7acb\u4e00\u4e2a\u6c99\u7bb1\u73af\u5883\uff0c\u907f\u514d\u548c\u5168\u5c40\u5f15\u5165\u7684polyfill\u4ea7\u751f\u51b2\u7a81\u3002"))),(0,a.kt)("p",null,"\u8fd9\u91cc\u8bf4\u4e00\u4e0b\u7b2c\u4e09\u70b9\uff0c\u5f53\u5f00\u53d1\u81ea\u5df1\u7684\u7c7b\u5e93\u65f6\uff0c\u5efa\u8bae\u5f00\u542fcorejs\u9009\u9879\uff0c\u56e0\u4e3a\u4f60\u4f7f\u7528\u7684polyfill\u53ef\u80fd\u4f1a\u548c\u7528\u6237\u671f\u5f85\u7684\u4ea7\u751f\u51b2\u7a81\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u6bd4\u55bb\uff0c\u4f60\u5f00\u53d1\u7684\u7c7b\u5e93\u662f\u5e0c\u671b\u517c\u5bb9ie11\u7684\uff0c\u4f46\u662f\u7528\u6237\u7684\u7cfb\u7edf\u662f\u4e3b\u8981\u57fa\u4e8echrome\u7684\uff0c\u6839\u672c\u5c31\u4e0d\u8981\u53bb\u517c\u5bb9ie11\u7684\u4e00\u4e9b\u529f\u80fd\uff0c\u5982\u679c\u4ea4\u7ed9\u7528\u6237\u53bbpolyfill\uff0c\u90a3\u5c31\u7684\u8981\u6c42\u7528\u6237\u4e5f\u5fc5\u987b\u8981\u517c\u5bb9ie11\uff0c\u8fd9\u6837\u5c31\u4f1a\u5f15\u5165\u989d\u5916\u7684\u4ee3\u7801\u6765\u652f\u6301\u7a0b\u5e8f\u7684\u8fd0\u884c\uff0c\u8fd9\u5f80\u5f80\u662f\u7528\u6237\u4e0d\u60f3\u770b\u5230\u7684\u3002"),(0,a.kt)("p",null,"dev dependence"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev @babel/plugin-transform-runtime\n")),(0,a.kt)("p",null,"production dependence\n\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u4e00\u4e9bruntime\u7684helpers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save @babel/runtime\n")),(0,a.kt)("p",null,".babelrc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-runtime",\n      {\n        "absoluteRuntime": false,\n        "corejs": false,\n        "helpers": true,\n        "regenerator": true,\n        "useESModules": false,\n        "version": "7.0.0-beta.0"\n      }\n    ]\n  ]\n}\n')))}m.isMDXComponent=!0}}]);