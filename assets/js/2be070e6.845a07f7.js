"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),b=l,k=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},40118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",sidebar_position:9},i=void 0,o={unversionedId:"React/fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",id:"React/fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",title:"fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",description:"1. \u6e32\u67d3\u5e27",source:"@site/programming-tech/React/09-fiberNode-fiber\u7ed3\u6784-RequestIdleCallback.md",sourceDirName:"React",slug:"/React/fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",permalink:"/React/fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/09-fiberNode-fiber\u7ed3\u6784-RequestIdleCallback.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",sidebar_position:9},sidebar:"docs",previous:{title:"fiber",permalink:"/React/fiber"},next:{title:"\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",permalink:"/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6"}},s={},c=[{value:"1. \u6e32\u67d3\u5e27",id:"1-\u6e32\u67d3\u5e27",level:2},{value:"\u4e0b\u9762\u6765\u770b\u5b8c\u6574\u7684\u4e00\u5e27\u4e2d\uff0c\u5177\u4f53\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5",id:"\u4e0b\u9762\u6765\u770b\u5b8c\u6574\u7684\u4e00\u5e27\u4e2d\u5177\u4f53\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5",level:3},{value:"2. RequestIdleCallback",id:"2-requestidlecallback",level:2},{value:"requestIdleCallback \u603b\u7ed3",id:"requestidlecallback-\u603b\u7ed3",level:3},{value:"fiber\u7ed3\u6784",id:"fiber\u7ed3\u6784",level:2},{value:"react fiber\u7684\u4efb\u52a1",id:"react-fiber\u7684\u4efb\u52a1",level:3},{value:"\u57fa\u78402:fiberRoot\u548crootFiber",id:"\u57fa\u78402fiberroot\u548crootfiber",level:2},{value:"1.\u6ce8\u610fFiberRootNode \u548c FiberNode \u7684\u4e0d\u540c",id:"1\u6ce8\u610ffiberrootnode-\u548c-fibernode-\u7684\u4e0d\u540c",level:2},{value:"FiberNode",id:"fibernode",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u6e32\u67d3\u5e27"},"1. \u6e32\u67d3\u5e27"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u9875\u9762\u662f\u4e00\u5e27\u4e00\u5e27\u7ed8\u5236\u51fa\u6765\u7684\uff0c\u6e32\u67d3\u7684\u5e27\u7387\u4e0e\u8bbe\u5907\u7684\u5237\u65b0\u7387\u4fdd\u6301\u4e00\u81f4\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8bbe\u5907\u7684\u5c4f\u5e55\u5237\u65b0\u7387\u4e3a 1s 60\u6b21\uff0c\u5f53\u6bcf\u79d2\u5185\u7ed8\u5236\u7684\u5e27\u6570\uff08FPS\uff09\u8d85\u8fc760\u65f6\uff0c\u9875\u9762\u6e32\u67d3\u662f\u6d41\u7545\u7684\uff1b\u800c\u5f53 FPS \u5c0f\u4e8e60\u65f6\uff0c\u4f1a\u51fa\u73b0\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5361\u987f\u73b0\u8c61\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e3a\u4ec0\u4e48JS\u957f\u65f6\u95f4\u6267\u884c\u4f1a\u5f71\u54cd\u4ea4\u4e92\u54cd\u5e94\u3001\u52a8\u753b\uff1f\u56e0\u4e3aJavaScript\u5728\u6d4f\u89c8\u5668\u7684\u4e3b\u7ebf\u7a0b\u4e0a\u8fd0\u884c\uff0c\u6070\u597d\u4e0e\u6837\u5f0f\u8ba1\u7b97\u3001\u5e03\u5c40\u4ee5\u53ca\u8bb8\u591a\u60c5\u51b5\u4e0b\u7684\u7ed8\u5236\u4e00\u8d77\u8fd0\u884c\u3002\u5982\u679cJavaScript\u8fd0\u884c\u65f6\u95f4\u8fc7\u957f\uff0c\u5c31\u4f1a\u963b\u585e\u8fd9\u4e9b\u5176\u4ed6\u5de5\u4f5c\uff0c\u53ef\u80fd\u5bfc\u81f4\u6389\u5e27\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u7684\u75db\u70b9\u95ee\u9898\uff0cReact\u5e0c\u671b\u80fd\u591f\u5f7b\u5e95\u89e3\u51b3\u4e3b\u7ebf\u7a0b\u957f\u65f6\u95f4\u5360\u7528\u95ee\u9898\uff0c\u4e8e\u662f\u5f15\u5165\u4e86 Fiber \u6765\u6539\u53d8\u8fd9\u79cd\u4e0d\u53ef\u63a7\u7684\u73b0\u72b6\uff0c\u628a\u6e32\u67d3/\u66f4\u65b0\u8fc7\u7a0b\u62c6\u5206\u4e3a\u4e00\u4e2a\u4e2a\u5c0f\u5757\u7684\u4efb\u52a1\uff0c\u901a\u8fc7\u5408\u7406\u7684\u8c03\u5ea6\u673a\u5236\u6765\u8c03\u63a7\u65f6\u95f4\uff0c\u6307\u5b9a\u4efb\u52a1\u6267\u884c\u7684\u65f6\u673a\uff0c\u4ece\u800c\u964d\u4f4e\u9875\u9762\u5361\u987f\u7684\u6982\u7387\uff0c\u63d0\u5347\u9875\u9762\u4ea4\u4e92\u4f53\u9a8c\u3002\u901a\u8fc7Fiber\u67b6\u6784\uff0c\u8ba9reconcilation\u8fc7\u7a0b\u53d8\u5f97\u53ef\u88ab\u4e2d\u65ad\u3002\u9002\u65f6\u5730\u8ba9\u51faCPU\u6267\u884c\u6743\uff0c\u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u53ca\u65f6\u5730\u54cd\u5e94\u7528\u6237\u7684\u4ea4\u4e92\u3002"),(0,l.kt)("h3",{id:"\u4e0b\u9762\u6765\u770b\u5b8c\u6574\u7684\u4e00\u5e27\u4e2d\u5177\u4f53\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"},"\u4e0b\u9762\u6765\u770b\u5b8c\u6574\u7684\u4e00\u5e27\u4e2d\uff0c\u5177\u4f53\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(69141).Z,width:"1042",height:"308"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9996\u5148\u9700\u8981\u5904\u7406\u8f93\u5165\u4e8b\u4ef6\uff0c\u80fd\u591f\u8ba9\u7528\u6237\u5f97\u5230\u6700\u65e9\u7684\u53cd\u9988")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\u662f\u5904\u7406\u5b9a\u65f6\u5668\uff0c\u9700\u8981\u68c0\u67e5\u5b9a\u65f6\u5668\u662f\u5426\u5230\u65f6\u95f4\uff0c\u5e76\u6267\u884c\u5bf9\u5e94\u7684\u56de\u8c03")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\u5904\u7406 Begin Frame\uff08\u5f00\u59cb\u5e27\uff09\uff0c\u5373\u6bcf\u4e00\u5e27\u7684\u4e8b\u4ef6\uff0c\u5305\u62ec window.resize\u3001scroll\u3001media query change \u7b49")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\u6267\u884c\u8bf7\u6c42\u52a8\u753b\u5e27 requestAnimationFrame\uff08rAF\uff09\uff0c\u5373\u5728\u6bcf\u6b21\u7ed8\u5236\u4e4b\u524d\uff0c\u4f1a\u6267\u884c rAF \u56de\u8c03")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7d27\u63a5\u7740\u8fdb\u884c Layout \u64cd\u4f5c\uff0c\u5305\u62ec\u8ba1\u7b97\u5e03\u5c40\u548c\u66f4\u65b0\u5e03\u5c40\uff0c\u5373\u8fd9\u4e2a\u5143\u7d20\u7684\u6837\u5f0f\u662f\u600e\u6837\u7684\uff0c\u5b83\u5e94\u8be5\u5728\u9875\u9762\u5982\u4f55\u5c55\u793a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u7740\u8fdb\u884c Paint \u64cd\u4f5c\uff0c\u5f97\u5230\u6811\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u5c3a\u5bf8\u4e0e\u4f4d\u7f6e\u7b49\u4fe1\u606f\uff0c\u6d4f\u89c8\u5668\u9488\u5bf9\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u5185\u5bb9\u586b\u5145"))),(0,l.kt)("p",null,"\u5230\u8fd9\u65f6\u4ee5\u4e0a\u7684\u516d\u4e2a\u9636\u6bb5\u90fd\u5df2\u7ecf\u5b8c\u6210\u4e86\uff0c\u63a5\u4e0b\u6765\u5904\u4e8e\u7a7a\u95f2\u9636\u6bb5\uff08Idle Peroid\uff09\uff0c\u53ef\u4ee5\u5728\u8fd9\u65f6\u6267\u884crequestIdleCallback\u91cc\u6ce8\u518c\u7684\u4efb\u52a1\uff08\u5b83\u5c31\u662f React Fiber \u4efb\u52a1\u8c03\u5ea6\u5b9e\u73b0\u7684\u57fa\u7840\uff09"),(0,l.kt)("h2",{id:"2-requestidlecallback"},"2. RequestIdleCallback"),(0,l.kt)("p",null,"RequestIdleCallback \u662f react Fiber \u5b9e\u73b0\u7684\u57fa\u7840 api \u3002\u8be5\u65b9\u6cd5\u5c06\u5728\u6d4f\u89c8\u5668\u7684\u7a7a\u95f2\u65f6\u6bb5\u5185\u8c03\u7528\u7684\u51fd\u6570\u6392\u961f\uff0c\u4f7f\u5f00\u53d1\u8005\u5728\u4e3b\u4e8b\u4ef6\u5faa\u73af\u4e0a\u6267\u884c\u540e\u53f0\u548c\u4f4e\u4f18\u5148\u7ea7\u7684\u5de5\u4f5c\uff0c\u800c\u4e0d\u5f71\u54cd\u5ef6\u8fdf\u5173\u952e\u4e8b\u4ef6\uff0c\u5982\u52a8\u753b\u548c\u8f93\u5165\u54cd\u5e94\u3002\u6b63\u5e38\u5e27\u4efb\u52a1\u5b8c\u6210\u540e\u6ca1\u8d85\u8fc716ms\uff0c\u8bf4\u660e\u6709\u591a\u4f59\u7684\u7a7a\u95f2\u65f6\u95f4\uff0c\u6b64\u65f6\u5c31\u4f1a\u6267\u884crequestIdleCallback\u91cc\u6ce8\u518c\u7684\u4efb\u52a1\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f4e\u4f18\u5148\u7ea7\u4efb\u52a1\u7531requestIdleCallback\u5904\u7406\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u9ad8\u4f18\u5148\u7ea7\u4efb\u52a1\uff0c\u5982\u52a8\u753b\u76f8\u5173\u7684\u7531requestAnimationFrame\u5904\u7406\uff1b"),(0,l.kt)("li",{parentName:"ol"},"requestIdleCallback\u53ef\u4ee5\u5728\u591a\u4e2a\u7a7a\u95f2\u671f\u8c03\u7528\u7a7a\u95f2\u671f\u56de\u8c03\uff0c\u6267\u884c\u4efb\u52a1\uff1b")),(0,l.kt)("p",null,"window.requestIdleCallback(callback)\u7684callback\u4e2d\u4f1a\u63a5\u6536\u5230\u9ed8\u8ba4\u53c2\u6570 deadline \uff0c\u5176\u4e2d\u5305\u542b\u4e86\u4ee5\u4e0b\u4e24\u4e2a\u5c5e\u6027\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"timeRamining \u8fd4\u56de\u5f53\u524d\u5e27\u8fd8\u5269\u591a\u5c11\u65f6\u95f4\u4f9b\u7528\u6237\u4f7f\u7528\ndidTimeout \u8fd4\u56de callback \u4efb\u52a1\u662f\u5426\u8d85\u65f6\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const sleep = (delay) => {\n  const start = Date.now();\n  while (Date.now() - start <= delay) {}\n};\nconst taskQueue = [\n  () => {\n    console.log("task1 start");\n    sleep(3);\n    console.log("task1 end");\n  },\n  () => {\n    console.log("task2 start");\n    sleep(3);\n    console.log("task2 end");\n  },\n  () => {\n    console.log("task3 start");\n    sleep(3);\n    console.log("task3 end");\n  },\n];\nconst performUnitWork = () => {\n  // \u53d6\u51fa\u7b2c\u4e00\u4e2a\u961f\u5217\u4e2d\u7684\u7b2c\u4e00\u4e2a\u4efb\u52a1\u5e76\u6267\u884c\n  taskQueue.shift()();\n};\nconst workloop = (deadline) => {\n  console.log(`\u6b64\u5e27\u7684\u5269\u4f59\u65f6\u95f4\u4e3a: ${deadline.timeRemaining()}`);\n  // \u5982\u679c\u6b64\u5e27\u5269\u4f59\u65f6\u95f4\u5927\u4e8e0\u6216\u8005\u5df2\u7ecf\u5230\u4e86\u5b9a\u4e49\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u4e0a\u6587\u5b9a\u4e49\u4e86timeout\u65f6\u95f4\u4e3a1000\uff0c\u5230\u8fbe\u65f6\u95f4\u65f6\u5fc5\u987b\u5f3a\u5236\u6267\u884c\uff09\uff0c\u4e14\u5f53\u65f6\u5b58\u5728\u4efb\u52a1\uff0c\u5219\u76f4\u63a5\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\n  // \u5982\u679c\u6ca1\u6709\u5269\u4f59\u65f6\u95f4\uff0c\u5219\u5e94\u8be5\u653e\u5f03\u6267\u884c\u4efb\u52a1\u63a7\u5236\u6743\uff0c\u628a\u6267\u884c\u6743\u4ea4\u8fd8\u7ed9\u6d4f\u89c8\u5668\n  while (\n    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&\n    taskQueue.length > 0\n  ) {\n    performUnitWork();\n  }\n  // \u5982\u679c\u8fd8\u6709\u672a\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u7ee7\u7eed\u8c03\u7528requestIdleCallback\u7533\u8bf7\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\n  if (taskQueue.length > 0) {\n    window.requestIdleCallback(workloop, { timeout: 1000 });\n  }\n};\nrequestIdleCallback(workloop, { timeout: 1000 });\n/*\n\u4e0a\u9762\u5b9a\u4e49\u4e86\u4e00\u4e2a\u4efb\u52a1\u961f\u5217taskQueue\uff0c\u5e76\u5b9a\u4e49\u4e86workloop\u51fd\u6570\uff0c\u5176\u4e2d\u91c7\u7528window.requestIdleCallback(workloop, { timeout: 1000 })\u53bb\u6267\u884ctaskQueue\u4e2d\u7684\u4efb\u52a1\u3002\u6bcf\u4e2a\u4efb\u52a1\u4e2d\u4ec5\u4ec5\u505a\u4e86console.log\u3001sleep(3)\u7684\u5de5\u4f5c\uff0c\u65f6\u95f4\u662f\u975e\u5e38\u77ed\u7684\uff08\u5927\u7ea63ms\u591a\u4e00\u70b9\uff09\uff0c\u6d4f\u89c8\u5668\u8ba1\u7b97\u6b64\u5e27\u4e2d\u8fd8\u5269\u4f5915.5ms\uff0c\u8db3\u4ee5\u4e00\u6b21\u6267\u884c\u5b8c\u8fd9\u4e09\u4e2a\u4efb\u52a1\uff0c\u56e0\u6b64\u5728\u6b64\u5e27\u7684\u7a7a\u95f2\u65f6\u95f4\u4e2d\uff0ctaskQueue\u4e2d\u5b9a\u4e49\u7684\u4e09\u4e2a\u4efb\u52a1\u5747\u6267\u884c\u5b8c\u6bd5\u3002\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff1a \n\u6b64\u5e27\u7684\u5269\u4f59\u65f6\u95f4\u4e3a: 49.8\ntask1 start\ntask1 end\ntask2 start\ntask2 end\ntask3 start\ntask3 end\n*/\n')),(0,l.kt)("h3",{id:"requestidlecallback-\u603b\u7ed3"},"requestIdleCallback \u603b\u7ed3"),(0,l.kt)("p",null,"\u5e94\u8be5\u907f\u514d\u5728requestIdleCallback\u4e2d\u6267\u884c\u8fc7\u957f\u65f6\u95f4\u7684\u4efb\u52a1\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u963b\u585e\u9875\u9762\u6e32\u67d3\uff0c\u4ee5\u53ca\u9875\u9762\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\u4e5f\u4e0d\u5efa\u8bae\u5728requestIdleCallback \u91cc\u518d\u64cd\u4f5c DOM\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u9875\u9762\u518d\u6b21\u91cd\u7ed8\u3002DOM \u64cd\u4f5c\u5efa\u8bae\u5728 rAF \u4e2d\u8fdb\u884c\u3002\u540c\u65f6\uff0c\u64cd\u4f5c DOM \u6240\u9700\u8981\u7684\u8017\u65f6\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u56e0\u4e3a\u4f1a\u5bfc\u81f4\u91cd\u65b0\u8ba1\u7b97\u5e03\u5c40\u548c\u89c6\u56fe\u7684\u7ed8\u5236\uff0c\u6240\u4ee5\u8fd9\u7c7b\u64cd\u4f5c\u4e0d\u5177\u5907\u53ef\u9884\u6d4b\u6027\u3002"),(0,l.kt)("p",null,"Promise \u4e5f\u4e0d\u5efa\u8bae\u5728\u8fd9\u91cc\u9762\u8fdb\u884c\uff0c\u56e0\u4e3a Promise \u7684\u56de\u8c03\u5c5e\u6027 Event loop \u4e2d\u4f18\u5148\u7ea7\u8f83\u9ad8\u7684\u4e00\u79cd\u5fae\u4efb\u52a1\uff0c\u4f1a\u5728 requestIdleCallback \u7ed3\u675f\u65f6\u7acb\u5373\u6267\u884c\uff0c\u4e0d\u7ba1\u6b64\u65f6\u662f\u5426\u8fd8\u6709\u5bcc\u4f59\u7684\u65f6\u95f4\uff0c\u8fd9\u6837\u6709\u5f88\u5927\u53ef\u80fd\u4f1a\u8ba9\u4e00\u5e27\u8d85\u8fc7 16 ms\u3002"),(0,l.kt)("p",null,"requestIdleCallback \u7684\u57fa\u672c\u4fe1\u606f\u4e5f\u4ecb\u7ecd\u5b8c\u4e86\uff0c\u540e\u9762\u5f00\u59cb\u91cd\u70b9\u8bb2\u8bb2react fiber\u662f\u5982\u4f55\u642d\u914drequestIdleCallback\u6784\u5efa\u51fafiber tree\u7684\u3002"),(0,l.kt)("h2",{id:"fiber\u7ed3\u6784"},"fiber\u7ed3\u6784"),(0,l.kt)("p",null,"\u662fReact\u7684\u6700\u5c0f\u5de5\u4f5c\u5355\u5143\uff08fiber tree\u4e0a\u7684\u4e00\u4e2a\u8282\u70b9\uff09\uff0c\u5728React\u7684\u4e16\u754c\u4e2d\uff0c\u4e00\u5207\u90fd\u53ef\u4ee5\u662f\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u5728\u666e\u901a\u7684HTML\u9875\u9762\u4e0a\uff0c\u4eba\u4e3a\u5730\u5c06\u591a\u4e2aDOM\u5143\u7d20\u6574\u5408\u5728\u4e00\u8d77\u53ef\u4ee5\u7ec4\u6210\u4e00\u4e2a\u7ec4\u4ef6\uff0cHTML\u6807\u7b7e\u53ef\u4ee5\u662f\u7ec4\u4ef6\uff08HostComponent\uff09\uff0c\u666e\u901a\u7684\u6587\u672c\u8282\u70b9\u4e5f\u53ef\u4ee5\u662f\u7ec4\u4ef6\uff08HostText\uff09\u3002\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u5c31\u5bf9\u5e94\u7740\u4e00\u4e2afiber\u8282\u70b9\uff0c\u8bb8\u591a\u4e2afiber\u8282\u70b9\u4e92\u76f8\u5d4c\u5957\u3001\u5173\u8054\uff0c\u5c31\u7ec4\u6210\u4e86fiber\u6811"),(0,l.kt)("p",null,"\u4e00\u4e2aDOM\u8282\u70b9\u4e00\u5b9a\u5bf9\u5e94\u7740\u4e00\u4e2aFiber\u8282\u70b9\uff0c\u4f46\u4e00\u4e2aFiber\u8282\u70b9\u5374\u4e0d\u4e00\u5b9a\u6709\u5bf9\u5e94\u7684DOM\u8282\u70b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    Fiber\u6811                    DOM\u6811\n\n   div#root                  div#root\n      |                         |\n    <App/>                     div\n      |                       /   \\\n     div                     p     a\n    /   \u2196\n   /      \u2196\n  p ----\x3e <Child/>\n             |\n             a\n")),(0,l.kt)("p",null,"\u7ed3\u6784\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"return\uff1a \u6307\u5411\u7236\u7ea7 Fiber \u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"child\uff1a\u6307\u5411\u5b50 Fiber \u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"sibling\uff1a\u6307\u5411\u5144\u5f1f fiber \u8282\u70b9\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default class Index extends React.Component{\n   state={ number:666 } \n   handleClick=()=>{\n     this.setState({\n         number:this.state.number + 1\n     })\n   }\n   render(){\n     return <div>\n       hello\uff0cworld\n       <p > \u300aReact\u8fdb\u9636\u5b9e\u8df5\u6307\u5357\u300b { this.state.number }   </p>\n       <button onClick={ this.handleClick } >\u70b9\u8d5e</button>\n     </div>\n   }\n}\n")),(0,l.kt)("mermaid",{value:"%% flowchart TB\nflowchart LR\n  fiberRoot--current--\x3eRootFiber\n  RootFiber--stateNode--\x3efiberRoot\n\n  subgraph RootFiber [RootFiber]\n    RootFiber1[RootFiber]\n  end\n\n  subgraph workInProgress[rootFiber workInProgress]\n    _RootFiber<--alternate--\x3eRootFiber1\n    _RootFiber--child--\x3e 4index[index tag1] --child--\x3e div((div tag5)) --child--\x3e hello((hello,world tag=6))\n\n    p((p tag=5)) ---sibling--\x3e button((button tag=5))--return--\x3e\u70b9\u8d5e((\u70b9\u8d5e tag=6))\n    4index --return--\x3e _RootFiber\n    div --return--\x3e 4index\n    hello --return--\x3e div\n    hello --return--\x3e p\n\n    \u70b9\u8d5e --return--\x3e button\n    button --return--\x3e div\n    p --return--\x3e div\n  end"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(38549).Z,width:"674",height:"540"})),(0,l.kt)("p",null,"\u5728\u66f4\u65b0\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u66f4\u65b0\u5927\u91cf\u7684dom\uff0c\u6240\u4ee5react\u5728\u5e94\u7528\u5c42\u548cdom\u5c42\u4e4b\u95f4\u589e\u52a0\u4e86\u4e00\u5c42Fiber\uff0c\u800cFiber\u662f\u5728\u5185\u5b58\u4e2d\u5de5\u4f5c\u7684\uff0c\u6240\u4ee5\u5728\u66f4\u65b0\u7684\u65f6\u5019\u53ea\u9700\u8981\u5728\u5185\u5b58\u4e2d\u8fdb\u884cdom\u66f4\u65b0\u7684\u6bd4\u8f83\uff0c\u6700\u540e\u518d\u5e94\u7528\u5230\u9700\u8981\u66f4\u65b0\u771f\u5b9e\u8282\u70b9\u4e0a"),(0,l.kt)("p",null,"\u5728react15\u4e4b\u524d\uff0c\u8fd9\u4e2a\u5bf9\u6bd4\u7684\u8fc7\u7a0b\u88ab\u79f0\u4e4b\u4e3astack reconcile\uff0c\u5b83\u7684\u5bf9\u6bd4\u65b9\u5f0f\u662f\u2018\u4e00\u6761\u8def\u8d70\u5230\u9ed1\u2019\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd9\u4e2a\u5bf9\u6bd4\u7684\u8fc7\u7a0b\u662f\u4e0d\u80fd\u88ab\u4e2d\u65ad\u7684\uff0c\u8fd9\u4f1a\u51fa\u73b0\u4ec0\u4e48\u60c5\u51b5\u5462\uff0c\u6bd4\u5982\u5728\u9875\u9762\u6e32\u67d3\u4e00\u4e2a\u6bd4\u8f83\u6d88\u8017\u6027\u80fd\u64cd\u4f5c\uff0c\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u5982\u679c\u7528\u6237\u8fdb\u884c\u4e00\u4e9b\u64cd\u4f5c\u5c31\u4f1a\u51fa\u73b0\u5361\u987f\uff0c\u5e94\u7528\u5c31\u4f1a\u663e\u5f97\u4e0d\u6d41\u7545\u3002"),(0,l.kt)("p",null,"react16\u4e4b\u540e\u51fa\u73b0\u4e86scheduler\uff0c\u4ee5\u53careact17\u7684Lane\u6a21\u578b\uff0c\u5b83\u4eec\u53ef\u4ee5\u914d\u5408\u7740\u5de5\u4f5c\uff0c\u5c06\u6bd4\u8f83\u8017\u65f6\u7684\u4efb\u52a1\u6309\u7167Fiber\u8282\u70b9\u5212\u5206\u6210\u5de5\u4f5c\u5355\u5143\uff0c\u5e76\u4e14\u904d\u5386Fiber\u6811\u8ba1\u7b97\u6216\u8005\u66f4\u65b0\u8282\u70b9\u4e0a\u7684\u72b6\u6001\u53ef\u4ee5\u88ab\u4e2d\u65ad\u3001\u7ee7\u7eed\uff0c\u4ee5\u53ca\u53ef\u4ee5\u88ab\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u6253\u65ad\uff0c\u6bd4\u5982\u7528\u6237\u89e6\u53d1\u7684\u66f4\u65b0\u5c31\u662f\u4e00\u4e2a\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\uff0c\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u4f18\u5148\u6267\u884c\uff0c\u5e94\u7528\u5c31\u4e0d\u4f1a\u592a\u5361\u987f\u3002"),(0,l.kt)("p",null,"\u628a\u4efb\u52a1\u62c6\u5206\u6210\u4e00\u4e2a\u4e2a\u7ec6\u5c0f\u7684\u5de5\u4f5c\u5355\u5143\uff0c\u968f\u7740\u4efb\u52a1\u8c03\u5ea6\u62bd\u7a7a\u6267\u884c\uff0c\u76f4\u5230\u6574\u9897\u6811\u6784\u5efa\u5b8c\u6210\u3002\u6240\u4ee5react fiber\u6240\u8c13\u7684\u6027\u80fd\u63d0\u5347\u53ea\u662f\u5c06reconciliation\u4e2ddiff\u8fc7\u7a0b\u7684\u4f18\u5148\u7ea7\u5f80\u540e\u8c03\u4e86\uff0c\u53ea\u5728\u6d4f\u89c8\u5668\u7a7a\u95f2\u65f6\u6267\u884c\uff0c\u4ece\u800c\u63d0\u5347\u4e86\u7528\u6237\u4ea4\u4e92\u3001\u52a8\u753b\u6e32\u67d3\u76f8\u5173\u7684\u4f18\u5148\u7ea7\uff0c\u4f7f\u6d4f\u89c8\u5668\u80fd\u591f\u66f4\u5feb\u53cd\u9988\u7528\u6237\u64cd\u4f5c\uff0c\u4f7f\u9875\u9762\u51cf\u5c11\u5361\u987f\u611f\uff0c\u4f46\u5e76\u4e0d\u4f1a\u51cf\u5c11react\u6e32\u67d3\u6240\u9700\u7684\u5de5\u4f5c\u91cf\uff0c\u56e0\u6b64\u60f3\u8981\u771f\u6b63\u63d0\u5347\u5e94\u7528\u6027\u80fd\u8fd8\u662f\u5f97\u9760\u5199\u597d\u4ee3\u7801\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u624d\u884c\u3002"),(0,l.kt)("h3",{id:"react-fiber\u7684\u4efb\u52a1"},"react fiber\u7684\u4efb\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u628a\u6e32\u67d3/\u66f4\u65b0\u8fc7\u7a0b\u62c6\u5206\u4e3a\u66f4\u5c0f\u7684\u3001\u53ef\u4e2d\u65ad\u7684\u5de5\u4f5c\u5355\u5143"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6d4f\u89c8\u5668\u7a7a\u95f2\u65f6\u6267\u884c\u5de5\u4f5c\u5faa\u73af"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6240\u6709\u6267\u884c\u7ed3\u679c\u6c47\u603bpatch\u5230\u771f\u5b9eDOM\u4e0a")),(0,l.kt)("h2",{id:"\u57fa\u78402fiberroot\u548crootfiber"},"\u57fa\u78402:fiberRoot\u548crootFiber"),(0,l.kt)("p",null,"\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\uff1a\u4f1a\u521b\u5efafiberRoot\u548crootFiber\uff0c\u7136\u540e\u6839\u636ejsx\u5bf9\u8c61\u521b\u5efaFiber\u8282\u70b9\uff0c\u8282\u70b9\u8fde\u63a5\u6210current Fiber\u6811"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"fiberRoot(fiberRoot\u53ea\u80fd\u6709\u4e00\u4e2a)\uff1a \u9996\u6b21\u6784\u5efa\u5e94\u7528\uff0c \u521b\u5efa\u4e00\u4e2a fiberRoot \uff0c\u6574\u4e2a\u5e94\u7528\u7684\u6839\u8282\u70b9\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rootFiber(rootFiber\u53ef\u4ee5\u6709\u591a\u4e2a): \u901a\u8fc7 ReactDOM.render \u6e32\u67d3\u51fa\u6765\u7684\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6bd4\u5982\u4e00\u4e2a\u7ec4\u4ef6\u4f1a\u6e32\u67d3\u4e00\u4e2arootFiber\u3002 \n")),(0,l.kt)("h2",{id:"1\u6ce8\u610ffiberrootnode-\u548c-fibernode-\u7684\u4e0d\u540c"},"1.\u6ce8\u610fFiberRootNode \u548c FiberNode \u7684\u4e0d\u540c"),(0,l.kt)("p",null,"FiberRootNode\u662f\u521d\u59cb\u5316 \u53ea\u8c03\u7528\u4e00\u6b21,\u4e00\u4e2a\u662ffiber \u534f\u8c03"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  function FiberRootNode(containerInfo, tag, hydrate) {\n    console.log('==FiberRootNode \u662f\u521d\u59cb\u5316\u76f8\u5173\u53ea\u8c03\u7528\u4e00\u6b21===')\n    this.tag = tag;\n    this.containerInfo = containerInfo;\n    this.pendingChildren = null;\n    this.current = null;\n    this.pingCache = null;\n    this.finishedWork = null;\n    this.timeoutHandle = noTimeout;\n    this.context = null;\n    this.pendingContext = null;\n    this.hydrate = hydrate;\n    this.callbackNode = null;\n    this.callbackPriority = NoLanePriority;\n    this.eventTimes = createLaneMap(NoLanes);\n    this.expirationTimes = createLaneMap(NoTimestamp);\n    this.pendingLanes = NoLanes;\n    this.suspendedLanes = NoLanes;\n    this.pingedLanes = NoLanes;\n    this.expiredLanes = NoLanes;\n    this.mutableReadLanes = NoLanes;\n    this.finishedLanes = NoLanes;\n    this.entangledLanes = NoLanes;\n    this.entanglements = createLaneMap(NoLanes);\n    ...\n")),(0,l.kt)("h2",{id:"fibernode"},"FiberNode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function FiberNode(\n  tag: WorkTag,\n  pendingProps: mixed,\n  key: null | string,\n  mode: TypeOfMode,\n) {\n\n  // \u7528\u6765\u8868\u793a\u5f53\u524dFiber\u5bf9\u5e94\u7684\u662f\u90a3\u79cd\u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u5982ClassComponent\u3001FunctionComponent\u7b49\n  this.tag = tag;\n  // \u901a\u8fc7\u4e0d\u540c\u8fc7\u671f\u65f6\u95f4\uff0c\u5224\u65ad\u4efb\u52a1\u662f\u5426\u8fc7\u671f,\u4ee5\u524d\u7248\u672c\u7528\uff1aexpirationTime\n  this.lanes = NoLanes;\n  // \u7ec4\u4ef6\u7684key,\u8c03\u548c\u5b50\u8282\u70b9\u65f6\u5019\u7528\u5230\n  this.key = key; // fiber\u7684key\n  // \u7ec4\u4ef6\u5bf9\u5e94\u7684ReactElement\u91cc\u7684type\uff0c\u6bd4\u5982class\u7ec4\u4ef6\u5bf9\u5e94\u90a3\u4e2aclass\n  this.elementType = null;\n  // \u4e00\u822c\u90fd\u7b49\u4e8eelementType\uff0c\u4f46\u662f\u901a\u8fc7lazy\u52a0\u8f7d\u7684\u7ec4\u4ef6\uff0c\u4e00\u5f00\u59cb\u4f1a\u4e3anull\uff0c\u76f4\u5230\u52a0\u8f7d\u5b8c\u6210\u624d\u4f1a\u8bbe\u7f6e\u4e3a\u6b63\u786e\u7684type\n  // fiber\u5bf9\u5e94\u7684DOM\u5143\u7d20\u7684\u6807\u7b7e\u7c7b\u578b\uff0cdiv\u3001p...\n  this.type = null; \n\n  //\u771f\u5b9edom\u8282\u70b9,\u7ba1\u7406 instance \u81ea\u8eab\u7684\u7279\u6027\n  // \u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u6bd4\u5982class\u7ec4\u4ef6\u5bf9\u5e94class\u5b9e\u4f8b\uff0c\u539f\u751f\u7684\u7ec4\u4ef6\u5bf9\u5e94dom\n  this.stateNode = null; // fiber\u7684\u5b9e\u4f8b\uff0c\u7c7b\u7ec4\u4ef6\u573a\u666f\u4e0b\uff0c\u662f\u7ec4\u4ef6\u7684\u7c7b\uff0cHostComponent\u573a\u666f\uff0c\u662fdom\u5143\u7d20\n\n  // Fiber \u94fe\u8868\u76f8\u5173\n  this.return = null; // \u6307\u5411\u7236\u7ea7fiber\n  this.child = null; // \u6307\u5411\u5b50fiber\n  this.sibling = null; // \u540c\u7ea7\u5144\u5f1ffiber\n  this.index = 0;\n\n  this.ref = null; // ref\u76f8\u5173\n\n  // Fiber\u66f4\u65b0\u76f8\u5173\n  /*\u7528\u4f5c\u4e3a\u5de5\u4f5c\u5355\u5143 \u6765\u8ba1\u7b97state*/\n\n  // \u7b49\u5f85\u88ab\u66f4\u65b0\u7684\u5c5e\u6027\n  // \u5f53\u524d\u5904\u7406\u8fc7\u7a0b\u4e2d\u7684\u7ec4\u4ef6props\u5bf9\u8c61\n  this.pendingProps = pendingProps;\n  // \u4e0a\u4e00\u6b21\u6e32\u67d3\u5b8c\u6210\u4e4b\u540e\u7684props\n  this.memoizedProps = null;\n  // \u7b49\u5f85\u66f4\u65b0\u7684\u4efb\u52a1\u961f\u5217\n  this.updateQueue = null; // \u5b58\u50a8update\u7684\u94fe\u8868\n  // \u4e0a\u4e00\u6b21\u6e32\u67d3\u5b8c\u6210\u7684state\n  this.memoizedState = null; // \u7c7b\u7ec4\u4ef6\u5b58\u50a8fiber\u7684\u72b6\u6001\uff0c\u51fd\u6570\u7ec4\u4ef6\u5b58\u50a8hooks\u94fe\u8868\n  this.dependencies = null;\n  // \u5f53\u524d\u7ec4\u4ef6\u7684mode\uff0c\u9ed8\u8ba4\u7ee7\u627f\u592b\u8282\u70b9\u3002\u6bd4\u5982\u662f\u5426\u5904\u4e8e\u5f02\u6b65\u6e32\u67d3\u7b49\n  this.mode = mode;\n\n  // Effects\n  /*\n effectTag\u3001nextEffect\u3001firstEffect\u3001lastEffect\u4e3aeffect\u76f8\u5173\u4fe1\u606f\uff0c\u4fdd\u5b58\u5f53\u524ddiff\u7684\u6210\u679c\u3002\u8fd9\u4e9b\u53c2\u6570\u5171\u540c\u4e3a\u540e\u7eed\u7684\u5de5\u4f5c\u5faa\u73af\u63d0\u4f9b\u4e86\u53ef\u80fd\uff0c\u4f7freact\u53ef\u4ee5\u5728\u6267\u884c\u5b8c\u6bcf\u4e2afiber\u65f6\u505c\u4e0b\uff0c\u6839\u636e\u6d4f\u89c8\u5668\u7684\u7e41\u5fd9\u60c5\u51b5\u5224\u65ad\u662f\u5426\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\uff0c\u56e0\u6b64\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06fiber\u7406\u89e3\u6210\u4e00\u4e2a\u5de5\u4f5c\u5355\u5143\u3002 \n  */\n  // flags\u539f\u4e3aeffectTag\uff0c\u8868\u793a\u5f53\u524d\u8fd9\u4e2afiber\u8282\u70b9\u53d8\u5316\u7684\u7c7b\u578b\uff1a\u589e\u3001\u5220\u3001\u6539\n  // \u7528\u6765\u8bb0\u5f55\u672c\u6b21\u66f4\u65b0\u5728\u5f53\u524d\u7ec4\u4ef6\u4ea7\u751f\u7684\u526f\u4f5c\u7528\uff0c\u6bd4\u5982\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u7b49\n  this.flags = NoFlags;\n\n  /*\u5355\u94fe\u8868\u7ed3\u6784\uff0c\u65b9\u4fbf\u904d\u5386 Fiber Tree \u4e0a\u6709\u526f\u4f5c\u7528\u7684\u8282\u70b9*/ \n  // \u7528\u94fe\u8868\u8bb0\u5f55\u4ea7\u751f\u7684\u526f\u4f5c\u7528\n  this.nextEffect = null;\n  // \u526f\u4f5c\u7528\u94fe\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\n  this.firstEffect = null;\n  // \u6700\u540e\u4e00\u4e2a\n  this.lastEffect = null;\n\n\n  // \u8c03\u5ea6\u4f18\u5148\u7ea7\u76f8\u5173\n  // \u8be5fiber\u4e2d\u7684\u4f18\u5148\u7ea7\uff0c\u5b83\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u8282\u70b9\u662f\u5426\u9700\u8981\u66f4\u65b0\n  this.lanes = NoLanes; \n  this.childLanes = NoLanes;// \u5b50\u6811\u4e2d\u7684\u4f18\u5148\u7ea7\uff0c\u5b83\u53ef\u4ee5\u5224\u65ad\u5f53\u524d\u8282\u70b9\u7684\u5b50\u6811\u662f\u5426\u9700\u8981\u66f4\u65b0\n\n  /*\n  * \u53ef\u4ee5\u770b\u6210\u662fworkInProgress\uff08\u6216current\uff09\u6811\u4e2d\u7684\u548c\u5b83\u4e00\u6837\u7684\u8282\u70b9\uff0c\n  * \u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5b57\u6bb5\u662f\u5426\u4e3anull\u5224\u65ad\u5f53\u524d\u8fd9\u4e2afiber\u5904\u5728\u66f4\u65b0\u8fd8\u662f\u521b\u5efa\u8fc7\u7a0b\n  * */\n  // \u53cc\u7f13\u5b58\u6811\uff0c\u6307\u5411\u7f13\u5b58\u7684fiber\u3002\u66f4\u65b0\u9636\u6bb5\uff0c\u4e24\u9897\u6811\u4e92\u76f8\u4ea4\u66ff\u3002\n  // \u6307\u5411\u5f53\u524dfiber\u5bf9\u5e94\u7684\u4e00\u4e2a\u62f7\u8d1d,fiber\u7684\u7248\u672c\u6c60\uff0c\u5373\u8bb0\u5f55fiber\u66f4\u65b0\u8fc7\u7a0b\uff0c\u4fbf\u4e8e\u6062\u590d\n  this.alternate = null;\n}\n")))}p.isMDXComponent=!0},69141:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u56fe1-\u6d4f\u89c8\u5668\u4e00\u5e27-8b098c05d067cefda450f35fbcfaf999.png"},38549:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u56fe3-\u4f8b\u5b50\u6e32\u67d3\u6d41\u7a0b-workInProgress\u6811-5a6eb169c3ef0b8d3e142c3681e8543b.png"}}]);