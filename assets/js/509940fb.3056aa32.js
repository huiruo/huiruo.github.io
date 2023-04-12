"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={title:"reflow-repaint",sidebar_position:1},a=void 0,i={unversionedId:"http-\u6d4f\u89c8\u5668\u7f13\u5b58/reflow-repaint",id:"http-\u6d4f\u89c8\u5668\u7f13\u5b58/reflow-repaint",title:"reflow-repaint",description:"reflow(\u56de\u6d41):\u6839\u636e\u751f\u6210\u7684\u6e32\u67d3\u6811\uff0c\u8fdb\u884c\u56de\u6d41\uff0c\u5f97\u5230\u8282\u70b9\u7684\u51e0\u4f55\u4fe1\u606f\uff08\u4f4d\u7f6e\uff0c\u5927\u5c0f\uff09",source:"@site/programming-tech/http-\u6d4f\u89c8\u5668\u7f13\u5b58/reflow-repaint.md",sourceDirName:"http-\u6d4f\u89c8\u5668\u7f13\u5b58",slug:"/http-\u6d4f\u89c8\u5668\u7f13\u5b58/reflow-repaint",permalink:"/http-\u6d4f\u89c8\u5668\u7f13\u5b58/reflow-repaint",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/http-\u6d4f\u89c8\u5668\u7f13\u5b58/reflow-repaint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"reflow-repaint",sidebar_position:1},sidebar:"docs",previous:{title:"http1.1-http2.0-\u62a5\u6587",permalink:"/http-\u6d4f\u89c8\u5668\u7f13\u5b58/http1.1-http2.0-\u62a5\u6587"},next:{title:"TCP-IP-\u63e1\u624b",permalink:"/http-\u6d4f\u89c8\u5668\u7f13\u5b58/TCP-IP-\u63e1\u624b"}},p={},c=[{value:"reflow(\u56de\u6d41):\u6839\u636e\u751f\u6210\u7684\u6e32\u67d3\u6811\uff0c\u8fdb\u884c\u56de\u6d41\uff0c\u5f97\u5230\u8282\u70b9\u7684\u51e0\u4f55\u4fe1\u606f\uff08\u4f4d\u7f6e\uff0c\u5927\u5c0f\uff09",id:"reflow\u56de\u6d41\u6839\u636e\u751f\u6210\u7684\u6e32\u67d3\u6811\u8fdb\u884c\u56de\u6d41\u5f97\u5230\u8282\u70b9\u7684\u51e0\u4f55\u4fe1\u606f\u4f4d\u7f6e\u5927\u5c0f",level:2},{value:"\u56de\u6d41\u8fd9\u4e00\u9636\u6bb5\u4e3b\u8981\u662f\u8ba1\u7b97\u8282\u70b9\u7684\u4f4d\u7f6e\u548c\u51e0\u4f55\u4fe1\u606f\uff0c\u5f53\u9875\u9762\u5e03\u5c40\u548c\u51e0\u4f55\u4fe1\u606f\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u56de\u6d41",id:"\u56de\u6d41\u8fd9\u4e00\u9636\u6bb5\u4e3b\u8981\u662f\u8ba1\u7b97\u8282\u70b9\u7684\u4f4d\u7f6e\u548c\u51e0\u4f55\u4fe1\u606f\u5f53\u9875\u9762\u5e03\u5c40\u548c\u51e0\u4f55\u4fe1\u606f\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u5c31\u9700\u8981\u56de\u6d41",level:3},{value:"repaint(\u91cd\u7ed8):\u6839\u636e\u6e32\u67d3\u6811\u4ee5\u53ca\u56de\u6d41\u5f97\u5230\u7684\u51e0\u4f55\u4fe1\u606f\uff0c\u5f97\u5230\u8282\u70b9\u7684\u7edd\u5bf9\u50cf\u7d20",id:"repaint\u91cd\u7ed8\u6839\u636e\u6e32\u67d3\u6811\u4ee5\u53ca\u56de\u6d41\u5f97\u5230\u7684\u51e0\u4f55\u4fe1\u606f\u5f97\u5230\u8282\u70b9\u7684\u7edd\u5bf9\u50cf\u7d20",level:2},{value:"\u56de\u6d41\u548c\u91cd\u7ed8\u4f18\u5316\u76f8\u5173-\u5229\u7528\u6d4f\u89c8\u5668\u4f18\u5316\u7b56\u7565",id:"\u56de\u6d41\u548c\u91cd\u7ed8\u4f18\u5316\u76f8\u5173-\u5229\u7528\u6d4f\u89c8\u5668\u4f18\u5316\u7b56\u7565",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"reflow\u56de\u6d41\u6839\u636e\u751f\u6210\u7684\u6e32\u67d3\u6811\u8fdb\u884c\u56de\u6d41\u5f97\u5230\u8282\u70b9\u7684\u51e0\u4f55\u4fe1\u606f\u4f4d\u7f6e\u5927\u5c0f"},"reflow(\u56de\u6d41):\u6839\u636e\u751f\u6210\u7684\u6e32\u67d3\u6811\uff0c\u8fdb\u884c\u56de\u6d41\uff0c\u5f97\u5230\u8282\u70b9\u7684\u51e0\u4f55\u4fe1\u606f\uff08\u4f4d\u7f6e\uff0c\u5927\u5c0f\uff09"),(0,l.kt)("p",null,"\u89c4\u5219\u6ce8\u610f\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56de\u6d41\u4e00\u5b9a\u4f1a\u89e6\u53d1\u91cd\u7ed8\uff0c\u800c\u91cd\u7ed8\u4e0d\u4e00\u5b9a\u4f1a\u56de\u6d41;\u5728\u6027\u80fd\u4f18\u5148\u7684\u524d\u63d0\u4e0b\uff0c\u6027\u80fd\u6d88\u8017 \u56de\u6d41 \u5927\u4e8e \u91cd\u7ed8\u3002\n\u4f53\u73b0\uff1a\u91cd\u7ed8 \u662f\u67d0\u4e2a DOM \u5143\u7d20\u8fdb\u884c\u91cd\u7ed8\uff1b\u56de\u6d41 \u662f\u6574\u4e2a\u9875\u9762\u8fdb\u884c\u91cd\u6392\uff0c\u4e5f\u5c31\u662f\u9875\u9762\u6240\u6709 DOM \u5143\u7d20\u6e32\u67d3\u3002")),(0,l.kt)("p",null,"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,"\u5f53render tree\u4e2d\u7684\u4e00\u90e8\u5206(\u6216\u5168\u90e8)\u56e0\u4e3a\u5143\u7d20\u7684\u89c4\u6a21\u5c3a\u5bf8\uff0c\u5e03\u5c40\uff0c\u9690\u85cf\u7b49\u6539\u53d8\u800c\u9700\u8981\u91cd\u65b0\u6784\u5efa\u3002\u8ba1\u7b97\u7684\u8fc7\u7a0b\u79f0\u4e3a\u56de\u6d41(reflow)\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u9875\u9762\u81f3\u5c11\u9700\u8981\u4e00\u6b21\u56de\u6d41\uff0c\u5c31\u662f\u5728\u9875\u9762\u7b2c\u4e00\u6b21\u52a0\u8f7d\u7684\u65f6\u5019\u3002 \u5728\u56de\u6d41\u7684\u65f6\u5019\uff0c\u6d4f\u89c8\u5668\u4f1a\u4f7f\u6e32\u67d3\u6811\u4e2d\u53d7\u5230\u5f71\u54cd\u7684\u90e8\u5206\u5931\u6548\uff0c\u5e76\u91cd\u65b0\u6784\u9020\u8fd9\u90e8\u5206\u6e32\u67d3\u6811\uff0c"),(0,l.kt)("h3",{id:"\u56de\u6d41\u8fd9\u4e00\u9636\u6bb5\u4e3b\u8981\u662f\u8ba1\u7b97\u8282\u70b9\u7684\u4f4d\u7f6e\u548c\u51e0\u4f55\u4fe1\u606f\u5f53\u9875\u9762\u5e03\u5c40\u548c\u51e0\u4f55\u4fe1\u606f\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u5c31\u9700\u8981\u56de\u6d41"},"\u56de\u6d41\u8fd9\u4e00\u9636\u6bb5\u4e3b\u8981\u662f\u8ba1\u7b97\u8282\u70b9\u7684\u4f4d\u7f6e\u548c\u51e0\u4f55\u4fe1\u606f\uff0c\u5f53\u9875\u9762\u5e03\u5c40\u548c\u51e0\u4f55\u4fe1\u606f\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u56de\u6d41"),(0,l.kt)("p",null,"\u6bd4\u5982\u4ee5\u4e0b\u60c5\u51b5:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9875\u9762\u6e32\u67d3\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u6539\u53d8\uff08\u56e0\u4e3a\u56de\u6d41\u662f\u6839\u636e\u89c6\u53e3\u7684\u5927\u5c0f\u6765\u8ba1\u7b97\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u7684\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u3001\u5220\u9664\u53ef\u89c1\u7684dom\u5143\u7d20"),(0,l.kt)("li",{parentName:"ol"},"\u5143\u7d20\u7684\u4f4d\u7f6e\u6539\u53d8"),(0,l.kt)("li",{parentName:"ol"},"\u5143\u7d20\u7684\u5c3a\u5bf8\u6539\u53d8\uff08\u5305\u62ec\u5916\u8fb9\u8ddd\u3001\u5185\u8fb9\u6846\u3001\u8fb9\u6846\u5927\u5c0f\u3001\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u7b49\uff09,width/height/border/margin/padding \u7684\u4fee\u6539\uff0c\u5982 width=778px\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6estyle\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ol"},"\u6539\u53d8\u6587\u5b57\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0/\u5220\u9664\u6837\u5f0f\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u64cd\u4f5cclass\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ol"},"\u5185\u5bb9\u7684\u6539\u53d8\uff0c(\u7528\u6237\u5728\u8f93\u5165\u6846\u4e2d\u5199\u5165\u5185\u5bb9\u4e5f\u4f1a,\u6bd4\u5982\u6587\u672c\u53d8\u5316\u6216\u56fe\u7247\u88ab\u53e6\u4e00\u4e2a\u4e0d\u540c\u5c3a\u5bf8\u7684\u56fe\u7247\u6240\u66ff\u4ee3)")),(0,l.kt)("h2",{id:"repaint\u91cd\u7ed8\u6839\u636e\u6e32\u67d3\u6811\u4ee5\u53ca\u56de\u6d41\u5f97\u5230\u7684\u51e0\u4f55\u4fe1\u606f\u5f97\u5230\u8282\u70b9\u7684\u7edd\u5bf9\u50cf\u7d20"},"repaint(\u91cd\u7ed8):\u6839\u636e\u6e32\u67d3\u6811\u4ee5\u53ca\u56de\u6d41\u5f97\u5230\u7684\u51e0\u4f55\u4fe1\u606f\uff0c\u5f97\u5230\u8282\u70b9\u7684\u7edd\u5bf9\u50cf\u7d20"),(0,l.kt)("p",null,"\u5b9a\u4e49\uff1a\n\u901a\u8fc7\u6784\u9020\u6e32\u67d3\u6811\u548c\u56de\u6d41\u9636\u6bb5\uff0c\u6211\u4eec\u77e5\u9053\u4e86\u54ea\u4e9b\u8282\u70b9\u662f\u53ef\u89c1\u7684\uff0c\u4ee5\u53ca\u53ef\u89c1\u8282\u70b9\u7684\u6837\u5f0f\u548c\u5177\u4f53\u7684\u51e0\u4f55\u4fe1\u606f(\u4f4d\u7f6e\u3001\u5927\u5c0f)\uff0c"),(0,l.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6e32\u67d3\u6811\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u8f6c\u6362\u4e3a\u5c4f\u5e55\u4e0a\u7684\u5b9e\u9645\u50cf\u7d20\uff0c\u8fd9\u4e2a\u9636\u6bb5\u5c31\u53eb\u505a\u91cd\u7ed8\u8282\u70b9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"color \u7684\u4fee\u6539\uff0c\u5982 color=#ddd\uff1b"),(0,l.kt)("li",{parentName:"ul"},"text-align \u7684\u4fee\u6539\uff0c\u5982 text-align=center\uff1b")),(0,l.kt)("p",null,"\u5f15\u8d77Repaint\u7684\u5c5e\u6027:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"color   border-style    visibility  background\ntext-decoration background-image    background-position background-repeat\noutline-color   outline outline-style   border-radius\noutline-width   box-shadow  background-size\n")),(0,l.kt)("h2",{id:"\u56de\u6d41\u548c\u91cd\u7ed8\u4f18\u5316\u76f8\u5173-\u5229\u7528\u6d4f\u89c8\u5668\u4f18\u5316\u7b56\u7565"},"\u56de\u6d41\u548c\u91cd\u7ed8\u4f18\u5316\u76f8\u5173-\u5229\u7528\u6d4f\u89c8\u5668\u4f18\u5316\u7b56\u7565"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4f18\u5316\u7b56\u7565:"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4f1a\u7ef4\u62a4\u4e00\u4e2a\u961f\u5217\uff0c\u628a\u6240\u6709\u5f15\u8d77\u91cd\u6392\u3001\u91cd\u7ed8\u7684\u64cd\u4f5c\u653e\u5165\u8fd9\u4e2a\u961f\u5217\uff0c\u7b49\u961f\u5217\u4e2d\u7684\u64cd\u4f5c\u5230\u4e86\u4e00\u5b9a\u6570\u91cf\u6216\u65f6\u95f4\u95f4\u9694\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1aflush\u961f\u5217\uff0c\u8fdb\u884c\u4e00\u4e2a\u6279\u5904\u7406\u3002\u8fd9\u6837\u8ba9\u591a\u6b21\u7684\u91cd\u6392\u91cd\u7ed8\u53d8\u6210\u4e00\u6b21\u3002"),(0,l.kt)("p",null,"\u4f46\u6709\u65f6\u5019\u4e00\u4e9b\u7279\u6b8a\u7684style\u5c5e\u6027\u4f1a\u4f7f\u8fd9\u79cd\u4f18\u5316\u5931\u6548\u3002\n\u4f8b\u5982offsetTop, scrollTop, clientTop, getComputedStyle()\uff08IE\u4e2dcurrentStyle\uff09\u7b49\u5c5e\u6027\uff0c\u8fd9\u4e9b\u5c5e\u6027\u90fd\u662f\u9700\u8981\u5b9e\u65f6\u56de\u9988\u7ed9\u7528\u6237\u7684\u51e0\u4f55\u5c5e\u6027\u6216\u5e03\u5c40\u5c5e\u6027\uff0c\u56e0\u6b64\u6d4f\u89c8\u5668\u4e0d\u5f97\u4e0d\u7acb\u5373\u6267\u884c\uff0c\u5e76\u968f\u4e4b\u89e6\u53d1\u91cd\u6392\u8fd4\u56de\u6b63\u786e\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u5c31\u8981"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u907f\u514d\u8bbe\u7f6e\u591a\u9879\u5185\u8054\u6837\u5f0f\uff1a\u4f7f\u7528\u5e38\u7528\u7684 class \u7684\u65b9\u5f0f\u8fdb\u884c\u8bbe\u7f6e\u6837\u5f0f\uff0c\u4ee5\u907f\u514d\u8bbe\u7f6e\u6837\u5f0f\u65f6\u8bbf\u95ee DOM \u7684\u4f4e\u6548\u7387\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51cf\u5c11\u56de\u6d41\u3001\u91cd\u7ed8,\u53ef\u4ee5\u5408\u5e76\u591a\u6b21\u5bf9DOM\u548c\u6837\u5f0f\u7684\u4fee\u6539\uff0c\u7136\u540e\u4e00\u6b21\u5904\u7406\u6389\u3002  "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var el = document.querySelector('.el');\nel.style.borderLeft = '1px';\nel.style.borderRight = '2px';\nel.style.padding = '5px';\n\n\u53ef\u4ee5\u4f7f\u7528\u5185\u8054\u6837\u5f0f\u7684cssText\u65b9\u6cd5\u5b9e\u73b0\uff1a\nvar el = document.querySelector('.el');\nel.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px';\n\n\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5207\u6362\u7c7b\u540d\u7684\u65b9\u6cd5\uff1a\n//css\n.active {\npadding: 5px;\nborder-left: 1px;\nborder-right: 2px;\n}\n\n// javascript\nvar el = document.querySelector('.el');\nel.className = 'active';\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u590d\u6742\u52a8\u753b\u6548\u679c,\u4f7f\u7528\u7edd\u5bf9\u5b9a\u4f4d\u8ba9\u5176\u8131\u79bb\u6587\u6863\u6d41\n\u8bbe\u7f6e\u52a8\u753b\u5143\u7d20 position \u5c5e\u6027\u4e3a fixed \u6216\u8005 absolute\uff1a\u7531\u4e8e\u5f53\u524d\u5143\u7d20\u4ece DOM \u6d41\u4e2d\u72ec\u7acb\u51fa\u6765\uff0c\u56e0\u6b64\u53d7\u5f71\u54cd\u7684\u53ea\u6709\u5f53\u524d\u5143\u7d20\uff0c\u5143\u7d20 repaint\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u907f\u514d\u5728 CSS \u4e2d\u4f7f\u7528\u8fd0\u7b97\u5f0f"))))}d.isMDXComponent=!0}}]);