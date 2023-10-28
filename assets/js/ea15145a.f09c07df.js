"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2796],{3905:(e,n,t)=>{t.d(n,{Zo:()=>x,kt:()=>u});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},x=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,x=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,u=c["".concat(s,".").concat(d)]||c[d]||f[d]||i;return t?l.createElement(u,a(a({ref:n},x),{},{components:t})):l.createElement(u,a({ref:n},x))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=t(87462),r=(t(67294),t(3905));const i={title:"flex",sidebar_position:7},a=void 0,o={unversionedId:"html-css/flex",id:"html-css/flex",title:"flex",description:"flex\u5b9e\u73b0\u5de6\u53f3\u6d6e\u52a8",source:"@site/programming-tech/html-css/02-flex.md",sourceDirName:"html-css",slug:"/html-css/flex",permalink:"/html-css/flex",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/html-css/02-flex.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"flex",sidebar_position:7},sidebar:"docs",previous:{title:"js-DOM\u64cd\u4f5c",permalink:"/html-css/js-DOM\u64cd\u4f5c"},next:{title:"\u6c34\u5e73\u5782\u76f4-\u5c45\u4e2d",permalink:"/html-css/\u6c34\u5e73\u5782\u76f4-\u5c45\u4e2d"}},s={},p=[{value:"flex\u5b9e\u73b0\u5de6\u53f3\u6d6e\u52a8",id:"flex\u5b9e\u73b0\u5de6\u53f3\u6d6e\u52a8",level:2},{value:"flex xy-center",id:"flex-xy-center",level:2},{value:"align-items \u548c align-content\u7684\u533a\u522b",id:"align-items-\u548c-align-content\u7684\u533a\u522b",level:3},{value:"flex-flow \u5c5e\u6027\u662f flex-direction \u548c flex-wrap \u5c5e\u6027\u7684\u590d\u5408\u5c5e\u6027",id:"flex-flow-\u5c5e\u6027\u662f-flex-direction-\u548c-flex-wrap-\u5c5e\u6027\u7684\u590d\u5408\u5c5e\u6027",level:2},{value:"flex-direction \u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u7684\u65b9\u5411",id:"flex-direction-\u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u7684\u65b9\u5411",level:3},{value:"flex-wrap \u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u662f\u5426\u62c6\u884c\u6216\u62c6\u5217",id:"flex-wrap-\u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u662f\u5426\u62c6\u884c\u6216\u62c6\u5217",level:3},{value:"flex\u662f:flex-grow,flex-shrink,flex-basis",id:"flex\u662fflex-growflex-shrinkflex-basis",level:2},{value:"1.flex-basis",id:"1flex-basis",level:3},{value:"2.flex-grow",id:"2flex-grow",level:3},{value:"3.flex-shrink",id:"3flex-shrink",level:3},{value:"flex\u5b9e\u73b0:\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94\u5e76\u53ef\u6eda\u52a8",id:"flex\u5b9e\u73b0\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94\u5e76\u53ef\u6eda\u52a8",level:2},{value:"flex\u5b9e\u73b0\u4e0a-\u4e2d-\u4e0b-\u5e03\u5c40",id:"flex\u5b9e\u73b0\u4e0a-\u4e2d-\u4e0b-\u5e03\u5c40",level:2},{value:"\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94-\u7edd\u5bf9\u5b9a\u4f4d",id:"\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94-\u7edd\u5bf9\u5b9a\u4f4d",level:2}],x={toc:p},c="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,l.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"flex\u5b9e\u73b0\u5de6\u53f3\u6d6e\u52a8"},"flex\u5b9e\u73b0\u5de6\u53f3\u6d6e\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'.container {\n  display: flex;\n  justify-content: space-between;\n}\n\n<div class="container">\n  <div class="left-floated-element">Left Floated</div>\n  <div class="right-floated-element">Right Floated</div>\n</div>\n')),(0,r.kt)("h2",{id:"flex-xy-center"},"flex xy-center"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n.center-container {\n  display: flex;\n  justify-content: center; /* Center horizontally - \u6c34\u5e73 */\n  align-items: center; /* Center vertically */\n  /* You can also use \'center\' as a shorthand for both properties: \n  justify-content: center;\n  align-items: center;\n  */\n  height: 100vh; /* Adjust the height as needed */\n}\n\n</style>\n<div class="center-container">\n  <div class="centered-element">\n    \x3c!-- Content to be centered --\x3e\n  </div>\n</div>\n')),(0,r.kt)("h3",{id:"align-items-\u548c-align-content\u7684\u533a\u522b"},"align-items \u548c align-content\u7684\u533a\u522b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"align-items\u662f\u9488\u5bf9\u5355\u884c\u7684\uff0c\u662f\u628a\u5355\u884c\u6765\u5f53\u505a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c\u5bf9\u9f50\u65b9\u5f0f\u64cd\u4f5c\uff0c\u800calign-content\u662f\u9488\u5bf9\u591a\u884c\u7684\uff0c\u662f\u628a\u591a\u884c\u6765\u5f53\u505a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c\u5bf9\u9f50\u65b9\u5f0f\u64cd\u4f5c")),(0,r.kt)("p",null,"align-items\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\uff1aFlexbox \u5bb9\u5668\uff08\u7236\u5143\u7d20\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e86\u5982\u4f55\u5728\u4ea4\u53c9\u8f74\u4e0a\uff08\u4e0e\u4e3b\u8f74\u5782\u76f4\u7684\u8f74\uff09\u5bf9\u9f50\u4f38\u7f29\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ul"},"align-items \u7684\u5e38\u89c1\u503c\u5305\u62ec flex-start\u3001flex-end\u3001center\u3001baseline \u548c stretch\u3002"),(0,r.kt)("li",{parentName:"ul"},"align-items \u5bf9\u5bb9\u5668\u5185\u7684\u5404\u4e2a\u9879\u76ee\u8fdb\u884c\u5bf9\u9f50\u3002")),(0,r.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0a"),(0,r.kt)("p",null,"align-content\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\uff1a\u5177\u6709\u591a\u884c\u4f38\u7f29\u9879\u76ee\u7684 Flexbox \u5bb9\u5668\u6216 grid \u5bb9\u5668\uff08\u7236\u5143\u7d20\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e86\u5982\u4f55\u5728\u4f38\u7f29\u6216\u7f51\u683c\u5bb9\u5668\u4e2d\u7684\u4ea4\u53c9\u8f74\u4e0a\u5bf9\u9f50\u591a\u884c\u4f38\u7f29\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ec5\u5728\u5b58\u5728\u591a\u884c\u4f38\u7f29\u9879\u76ee\u65f6\u4ea7\u751f\u6548\u679c\uff08\u4f8b\u5982\uff0c\u7531\u4e8e\u5728 flex \u5bb9\u5668\u4e2d\u4f7f\u7528\u4e86 flex-wrap: wrap\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"align-content \u7528\u4e8e\u5bf9\u9f50\u5bb9\u5668\u5185\u7684\u4f38\u7f29\u9879\u76ee\u884c\uff0c\u800c\u4e0d\u662f\u5bf9\u9f50\u8fd9\u4e9b\u884c\u5185\u7684\u5404\u4e2a\u9879\u76ee\u3002\n\u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  display: flex;\n  flex-wrap: wrap; /* \u5141\u8bb8\u4f38\u7f29\u9879\u76ee\u6362\u884c\u6210\u591a\u884c\u3002 */\n  align-content: space-between; /* \u5bf9\u9f50\u4f38\u7f29\u9879\u76ee\u884c\u4e4b\u95f4\u7684\u7a7a\u95f4\u3002 */\n}\n")),(0,r.kt)("h2",{id:"flex-flow-\u5c5e\u6027\u662f-flex-direction-\u548c-flex-wrap-\u5c5e\u6027\u7684\u590d\u5408\u5c5e\u6027"},"flex-flow \u5c5e\u6027\u662f flex-direction \u548c flex-wrap \u5c5e\u6027\u7684\u590d\u5408\u5c5e\u6027"),(0,r.kt)("h3",{id:"flex-direction-\u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u7684\u65b9\u5411"},"flex-direction \u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u7684\u65b9\u5411"),(0,r.kt)("p",null,"flex-direction\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'row\nrow-reverse\ncolumn\ncolumn-reverse\ninitial\ninherit\n\u9ed8\u8ba4\u503c\u662f "row"\u3002\n\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u7684\u65b9\u5411\u3002\n')),(0,r.kt)("h3",{id:"flex-wrap-\u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u662f\u5426\u62c6\u884c\u6216\u62c6\u5217"},"flex-wrap \u5c5e\u6027\u89c4\u5b9a\u7075\u6d3b\u9879\u76ee\u662f\u5426\u62c6\u884c\u6216\u62c6\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nowrap  \u9ed8\u8ba4\u503c\u3002\u89c4\u5b9a\u7075\u6d3b\u7684\u9879\u76ee\u4e0d\u62c6\u884c\u6216\u4e0d\u62c6\u5217\u3002\nwrap  \u89c4\u5b9a\u7075\u6d3b\u7684\u9879\u76ee\u5728\u5fc5\u8981\u7684\u65f6\u5019\u62c6\u884c\u6216\u62c6\u5217\u3002\nwrap-reverse  \u89c4\u5b9a\u7075\u6d3b\u7684\u9879\u76ee\u5728\u5fc5\u8981\u7684\u65f6\u5019\u62c6\u884c\u6216\u62c6\u5217\uff0c\u4f46\u662f\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u3002\ninitial \u8bbe\u7f6e\u8be5\u5c5e\u6027\u4e3a\u5b83\u7684\u9ed8\u8ba4\u503c\u3002\u8bf7\u53c2\u9605 initial\u3002\ninherit \u4ece\u7236\u5143\u7d20\u7ee7\u627f\u8be5\u5c5e\u6027\u3002\u8bf7\u53c2\u9605 inherit\u3002\n")),(0,r.kt)("h2",{id:"flex\u662fflex-growflex-shrinkflex-basis"},"flex\u662f:flex-grow,flex-shrink,flex-basis"),(0,r.kt)("p",null,"flex: 0 1 auto; // \u9ed8\u8ba4  \u4e0d\u6269\u5927\uff0c\u4f1a\u7f29\u5c0f\uff0c\u7a7a\u95f4\u81ea\u52a8\u586b\u5145"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u7b2c\u4e00\u4e2a\u662f flex-grow \u5c5e\u6027\uff0c \u9ed8\u8ba4\u4e3a0\uff1b \u8868\u793a\u5982\u679c\u5b58\u5728\u5269\u4f59\u7a7a\u95f4\uff0c\u4e5f\u4e0d\u653e\u5927\n\u7b2c\u4e8c\u4e2a\u662f flex-shrink\u5c5e\u6027\uff0c \u9ed8\u8ba4\u4e3a1\uff1b\u8868\u793a\u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8be5\u9879\u76ee\u4f1a\u7f29\u5c0f\n\u7b2c\u4e09\u4e2a\u662f flex-basis\u5c5e\u6027\uff0c  \u9ed8\u8ba4\u4e3aauto\uff1b \n\n\u8868\u793a\u6d4f\u89c8\u5668\u4f1a\u6839\u636e\u8fd9\u4e2a\u5c5e\u6027\u81ea\u52a8\u63a8\u6f14\u9879\u76ee\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff1b \u8fd9\u4e2a\u503c\u53ef\u4ee5\u5199 auto, 10%, 50px\n")),(0,r.kt)("p",null,"\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u4e00\u822c\u8fd9\u4e2aflex \u5c5e\u6027\u5199\u5feb\u6377\u503c\uff0c \u8ba9\u6d4f\u89c8\u5668\u53bb\u81ea\u52a8\u63a8\u7b97\u9879\u76ee\u7684\u76f8\u5173\u503c:\n\nflex: none;  // \u7b49\u4ef7\u4e8e  flex:0 0 auto  \u8868\u793a\u4e0d\u6269\u5927\uff0c\u4e0d\u7f29\u5c0f\uff0c\u81ea\u52a8\u5bbd\u9ad8\nflex: auto;  //\u7b49\u4ef7\u4e8e   flex: 1 1 auto  \u8868\u793a\u53ef\u6269\u5927\uff0c\u53ef\u7f29\u5c0f\uff0c\u81ea\u52a8\u8ba1\u7b97\u5bbd\u9ad8\nflex: 1;     //\u7b49\u4ef7\u4e8e   flex: 1 1 0% \u8868\u793a\u53ef\u6269\u5927\uff0c \u53ef\u7f29\u5c0f\uff0c\u5c3a\u5bf8\u81ea\u52a8\u8ba1\u7b97\n")),(0,r.kt)("p",null,"\u4e0d\u63a8\u8350\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8fd8\u6709\u5176\u4ed6\u7684\u5199\u6cd5\u76ee\u524d\u4e0d\u63a8\u8350\nflex: 1 1;\nflex: 8;  // === flex: 8 1 0%;\n")),(0,r.kt)("p",null,"1.\u5f53 flex\u53d6\u503c\u4e3a auto\uff0c\u5219\u8ba1\u7b97\u503c\u4e3a 1 1 auto\uff0c\u5982\u4e0b\u662f\u7b49\u540c\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".item {\n  flex: auto;\n}\n.item {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n}\n")),(0,r.kt)("h3",{id:"1flex-basis"},"1.flex-basis"),(0,r.kt)("p",null,"basis\u82f1\u6587\u610f\u601d\u662f<\u4e3b\u8981\u6210\u5206>\uff0c\u6240\u4ee5\u4ed6\u548cwidth\u653e\u5728\u4e00\u8d77\u65f6,\u80af\u5b9a\u628awidth\u5e72\u6389\uff0cbasis\u9047\u5230width\u65f6\u5c31\u4f1a\u8bf4\u6211\u624d\u662f\u6700\u4e3b\u8981\u7684\u6210\u5206\uff0c\u4f60\u662f\u6b21\u8981\u6210\u5206\uff0c\u6240\u4ee5\u89c1\u5230\u6211\u7684\u65f6\u5019\u4f60\u8981\u9760\u8fb9\u7ad9"),(0,r.kt)("p",null,"flex-basis \u548cwidth \u5982\u679c\u540c\u65f6\u8bbe\u7f6e\uff0c \u4ee5flex-basis\u4e3a\u51c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"item {\n    width: 30px;\n    flex-basis: 200px;\n}\n")),(0,r.kt)("p",null,"flex-basis \u548c max-width/min-width \u5982\u679c\u540c\u65f6\u8bbe\u7f6e, \u8fd9\u4f1a\u88ab\u9650\u5236:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"item1 {\n    flex-basis: 250px;\n    max-width: 100px;\n}\n\n\u6700\u540e\u5bbd\u5ea6\u4e3a100px (\u5373max-width\u6700\u5927\u5bbd\u5ea6\u6216\u6700\u5c0f\u5bbd\u5ea6)\n")),(0,r.kt)("h3",{id:"2flex-grow"},"2.flex-grow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"grow\u82f1\u6587\u610f\u601d\u662f<\u6269\u5927\uff0c\u6269\u5c55\uff0c\u589e\u52a0>,\u8fd9\u5c31\u4ee3\u8868\u5f53\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u5927\u4e8e\u5b50\u5143\u7d20\u5bbd\u5ea6\u4e4b\u548c\u65f6\uff0c\u5e76\u4e14\u7236\u5143\u7d20\u6709\u5269\u4f59\uff0c\u8fd9\u65f6\uff0cflex-grow\u5c31\u4f1a\u8bf4\u6211\u8981\u6210\u957f\uff0c\u6211\u8981\u957f\u5927\uff0c\u600e\u4e48\u6837\u624d\u80fd\u6210\u957f\u5462\uff0c\u5f53\u7136\u662f\u5206\u4eab\u7236\u5143\u7d20\u7684\u7a7a\u95f4\u4e86\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8be5\u5c5e\u6027\u7528\u6765\u8bbe\u7f6e\u5f53\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u5927\u4e8e\u6240\u6709\u5b50\u5143\u7d20\u7684\u5bbd\u5ea6\u7684\u548c\u65f6\uff08\u5373\u7236\u5143\u7d20\u4f1a\u6709\u5269\u4f59\u7a7a\u95f4\uff09\uff0c\u5b50\u5143\u7d20\u5982\u4f55\u5206\u914d\u7236\u5143\u7d20\u7684\u5269\u4f59\u7a7a\u95f4\u3002 flex-grow\u7684\u9ed8\u8ba4\u503c\u4e3a0\uff0c\u610f\u601d\u662f\u8be5\u5143\u7d20\u4e0d\u7d22\u53d6\u7236\u5143\u7d20\u7684\u5269\u4f59\u7a7a\u95f4\uff0c\u5982\u679c\u503c\u5927\u4e8e0\uff0c\u8868\u793a\u7d22\u53d6\u3002\u503c\u8d8a\u5927\uff0c\u7d22\u53d6\u7684\u8d8a\u5389\u5bb3\u3002\n\n \u4e3e\u4e2a\u4f8b\u5b50: \u7236\u5143\u7d20\u5bbd400px\uff0c\u6709\u4e24\u4e2a\u5b50\u5143\u7d20\uff1aA\u548cB\u3002A\u5bbd\u4e3a100px\uff0cB\u5bbd\u4e3a200px\u3002 \u5219\u7a7a\u4f59\u7a7a\u95f4\u4e3a 400-\uff08100+200\uff09= 100px\u3002 \u5982\u679cA\uff0cB\u90fd\u4e0d\u7d22\u53d6\u5269\u4f59\u7a7a\u95f4\uff0c\u5219\u6709100px\u7684\u7a7a\u4f59\u7a7a\u95f4\n\n\n\u4f8b\u5b501\uff1a\n\u5982\u679cA\u7d22\u53d6\u5269\u4f59\u7a7a\u95f4:\u8bbe\u7f6eflex-grow\u4e3a1\uff0cB\u4e0d\u7d22\u53d6\u3002\u5219\u6700\u7ec8A\u7684\u5927\u5c0f\u4e3a \u81ea\u8eab\u5bbd\u5ea6\uff08100px\uff09+ \u5269\u4f59\u7a7a\u95f4\u7684\u5bbd\u5ea6\uff08100px\uff09= 200px \u3002\n\n.inner{\n    flex-basis:100px;\n    height:100px;\n    background:pink;\n    flex-grow:1;\n}\n\n.inner1{\n    flex-basis:200px;\n    height:100px;\n    background:blue;\n}\n\n\n\n\u4f8b\u5b502\uff1a\n\u5982\u679cA\uff0cB\u90fd\u8bbe\u7d22\u53d6\u5269\u4f59\u7a7a\u95f4\uff0cA\u8bbe\u7f6eflex-grow\u4e3a1\uff0cB\u8bbe\u7f6eflex-grow\u4e3a2\u3002\u5219\u6700\u7ec8A\u7684\u5927\u5c0f\u4e3a \u81ea\u8eab\u5bbd\u5ea6\uff08100px\uff09+ A\u83b7\u5f97\u7684\u5269\u4f59\u7a7a\u95f4\u7684\u5bbd\u5ea6\uff08100px (1/(1+2))\uff09,\u6700\u7ec8B\u7684\u5927\u5c0f\u4e3a \u81ea\u8eab\u5bbd\u5ea6\uff08200px\uff09+ B\u83b7\u5f97\u7684\u5269\u4f59\u7a7a\u95f4\u7684\u5bbd\u5ea6\uff08100px (2/(1+2))\uff09\n.inner{\n    flex-basis:100px;\n    height:100px;\n    background:pink;\n    flex-grow:1;\n}\n.inner1{\n    flex-basis:200px;\n    height:100px;\n    background:blue;\n    flex-grow:2;\n}\n")),(0,r.kt)("h3",{id:"3flex-shrink"},"3.flex-shrink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flex-shrink\uff0c shrink\u82f1\u6587\u610f\u601d\u662f<\u6536\u7f29>\uff0c\u8fd9\u5c31\u4ee3\u8868\u5f53\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u5c0f\u4e8e\u5b50\u5143\u7d20\u5bbd\u5ea6\u4e4b\u548c\u65f6\uff0c\u5e76\u4e14\u8d85\u51fa\u4e86\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\uff0c\u8fd9\u65f6\uff0cflex-shrink\u5c31\u4f1a\u8bf4\u5916\u9762\u7684\u4e16\u754c\u592a\u82e6\u4e86\uff0c\u6211\u8fd8\u662f\u56de\u5230\u7236\u4eb2\u7684\u6000\u62b1\u4e2d\u53bb\u5427\uff01\u56e0\u6b64\uff0cflex-shrink\u5c31\u4f1a\u6309\u7167\u4e00\u5b9a\u7684\u6bd4\u4f8b\u8fdb\u884c\u6536\u7f29\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8be5\u5c5e\u6027\u7528\u6765\u8bbe\u7f6e\uff0c\u5f53\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u5c0f\u4e8e\u6240\u6709\u5b50\u5143\u7d20\u7684\u5bbd\u5ea6\u7684\u548c\u65f6\uff08\u5373\u5b50\u5143\u7d20\u4f1a\u8d85\u51fa\u7236\u5143\u7d20\uff09\uff0c\u5b50\u5143\u7d20\u5982\u4f55\u7f29\u5c0f\u81ea\u5df1\u7684\u5bbd\u5ea6\u7684\u3002 flex-shrink\u7684\u9ed8\u8ba4\u503c\u4e3a1\uff0c\u5f53\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u5c0f\u4e8e\u6240\u6709\u5b50\u5143\u7d20\u7684\u5bbd\u5ea6\u7684\u548c\u65f6\uff0c\u5b50\u5143\u7d20\u7684\u5bbd\u5ea6\u4f1a\u51cf\u5c0f\u3002\u503c\u8d8a\u5927\uff0c\u51cf\u5c0f\u7684\u8d8a\u5389\u5bb3\u3002\u5982\u679c\u503c\u4e3a0\uff0c\u8868\u793a\u4e0d\u51cf\u5c0f\u3002\n")),(0,r.kt)("p",null,"\u4f8b\u5b501\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4e3e\u4e2a\u4f8b\u5b50: \u7236\u5143\u7d20\u5bbd400px\uff0c\u6709\u4e24\u5b50\u5143\u7d20\uff1aA\u548cB\u3002A\u5bbd\u4e3a200px\uff0cB\u5bbd\u4e3a300px\u3002 \u5219A\uff0cB\u603b\u5171\u8d85\u51fa\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u4e3a(200+300)- 400 = 100px\u3002 \u5982\u679cA\uff0cB\u90fd\u4e0d\u51cf\u5c0f\u5bbd\u5ea6\uff0c\u5373\u90fd\u8bbe\u7f6eflex-shrink\u4e3a0\uff0c\u5219\u4f1a\u6709100px\u7684\u5bbd\u5ea6\u8d85\u51fa\u7236\u5143\u7d20\u3002 \n\n.box{\n  display: flex;\n  flex-direction: row;\n  margin:100px auto;\n  width:400px;\n  height:200px;\n  border:1px solid red;\n}\n.inner{\n  flex-basis:200px;\n  height:100px;\n  background:black;\n  flex-shrink:0;\n}\n.inner1{\n flex-basis:300px;\n height:100px;\n background:blue;\n flex-shrink:0;\n}\n\n\n\u5982\u679cA\u4e0d\u51cf\u5c0f\u5bbd\u5ea6:\u8bbe\u7f6eflex-shrink\u4e3a0\uff0cB\u51cf\u5c0f\u3002\u5219\u6700\u7ec8B\u7684\u5927\u5c0f\u4e3a \u81ea\u8eab\u5bbd\u5ea6(300px)- \u603b\u5171\u8d85\u51fa\u7236\u5143\u7d20\u7684\u5bbd\u5ea6(100px)= 200px \n.inner{\n    flex-basis:200px;\n    height:100px;\n    background:black;\n    flex-shrink:0;\n}\n.inner1{\n    flex-basis:300px;\n    height:100px;\n    background:blue;\n    flex-shrink:1;\n}\n\n\n\u5982\u679cA\uff0cB\u90fd\u51cf\u5c0f\u5bbd\u5ea6\uff0cA\u8bbe\u7f6eflex-shirk\u4e3a3\uff0cB\u8bbe\u7f6eflex-shirk\u4e3a2\u3002\u5219\u6700\u7ec8A\u7684\u5927\u5c0f\u4e3a \u81ea\u8eab\u5bbd\u5ea6(200px)- A\u51cf\u5c0f\u7684\u5bbd\u5ea6(100px * (200px * 3/(200 * 3 + 300 * 2))) = 150px,\u6700\u7ec8B\u7684\u5927\u5c0f\u4e3a \u81ea\u8eab\u5bbd\u5ea6(300px)- B\u51cf\u5c0f\u7684\u5bbd\u5ea6(100px * (300px * 2/(200 * 3 + 300 * 2))) = 250px;\n.inner{\n    flex-basis:200px;\n    height:100px;\n    background:black;\n    flex-shrink:3;\n}\n.inner1{\n    flex-basis:300px;\n    height:100px;\n    background:blue;\n    flex-shrink:2;\n}\n")),(0,r.kt)("h2",{id:"flex\u5b9e\u73b0\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94\u5e76\u53ef\u6eda\u52a8"},"flex\u5b9e\u73b0:\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94\u5e76\u53ef\u6eda\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <title>index</title>\n    <style>\n        html,\n        body {\n            height: 100%;\n            margin: 0px;\n        }\n\n        .wrap {\n            width: 100%;\n            /* \u5f88\u91cd\u8981\uff0c\u5982\u679c\u8bbe\u7f6e\u6210100%\uff0c\u9875\u9762\u5185\u5bb9\u8fc7\u591a\u65f6\u4e0d\u4f1a\u56fa\u5b9a */\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            font-size: 16px;\n        }\n\n        .header {\n            background: aquamarine;\n            height: 60px;\n        }\n\n        .content {\n            display: block;\n            /* \u5f88\u91cd\u8981\uff0c\u5426\u5219\u5f53\u8be5\u5185\u5bb9\u8d85\u8fc7\u4e00\u5c4f\u65f6\uff0c\u5c3e\u90e8\u533a\u57df\u4e0d\u4f1a\u56fa\u5b9a */\n            overflow-y: auto;\n            background: #4CAF50;\n        }\n\n        .footer {\n            background: tan;\n            height: 40px;\n        }\n    </style>\n</head>\n\n<body>\n    <div class="wrap">\n        <div class="header">\u5934\u90e8</div>\n        <div class="content">\n            <div style=\'height:600px\'>test</div>\n            <div style=\'height:600px\'>test</div>\n            <div style=\'height:600px\'>test</div>\n            <div style=\'height:600px\'>test</div>\n        </div>\n        <div class="footer">\u5c3e\u90e8</div>\n    </div>\n</body>\n\n</html>\n')),(0,r.kt)("h2",{id:"flex\u5b9e\u73b0\u4e0a-\u4e2d-\u4e0b-\u5e03\u5c40"},"flex\u5b9e\u73b0\u4e0a-\u4e2d-\u4e0b-\u5e03\u5c40"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n<style type="text/css">\n    body {\n        margin: 0;\n    }\n\n    .container {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n        background: grey;\n    }\n\n    .header {\n        width: 100%;\n        height: 88px;\n        background: yellow;\n    }\n\n    .content {\n        width: 100%;\n        flex: 1 1 auto;\n        background: red;\n    }\n\n    .footer {\n        height: 100px;\n        width: 100%;\n        background: gold;\n    }\n</style>\n\n<body>\n    <div class="container">\n        <div class="header"></div>\n        <div class="content">\n            <div>hello world</div>\n            <div>msg</div>\n        </div>\n        <div class="footer"></div>\n    </div>\n</body>\n\n</html>\n')),(0,r.kt)("h2",{id:"\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94-\u7edd\u5bf9\u5b9a\u4f4d"},"\u5934\u90e8\u5e95\u90e8\u56fa\u5b9a-\u4e2d\u95f4\u81ea\u9002\u5e94-\u7edd\u5bf9\u5b9a\u4f4d"),(0,r.kt)("p",null,"\u7565"))}f.isMDXComponent=!0}}]);