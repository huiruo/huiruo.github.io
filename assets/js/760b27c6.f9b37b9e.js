"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2460],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(k,l(l({ref:r},c),{},{components:t})):n.createElement(k,l({ref:r},c))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49996:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={},l=void 0,i={unversionedId:"SSR-Nodejs/worker_threads",id:"SSR-Nodejs/worker_threads",title:"worker_threads",description:"worker_threads",source:"@site/programming-tech/SSR-Nodejs/03-worker_threads.md",sourceDirName:"SSR-Nodejs",slug:"/SSR-Nodejs/worker_threads",permalink:"/SSR-Nodejs/worker_threads",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/SSR-Nodejs/03-worker_threads.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"nodejs\u4e8b\u4ef6\u5faa\u73af",permalink:"/SSR-Nodejs/nodejs\u4e8b\u4ef6\u5faa\u73af"},next:{title:"TypeORM\u548cPrisma",permalink:"/SSR-Nodejs/TypeORM\u548cPrisma"}},s={},p=[{value:"worker_threads",id:"worker_threads",level:2},{value:"\u5728 Node.js \u4e2d\uff0c\u4e3b\u7ebf\u7a0b\u548c\u5de5\u4f5c\u7ebf\u7a0b\u662f\u6307\u5728\u4e0d\u540c\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684\u7ebf\u7a0b\uff0c\u5b83\u4eec\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u533a\u522b\uff1a",id:"\u5728-nodejs-\u4e2d\u4e3b\u7ebf\u7a0b\u548c\u5de5\u4f5c\u7ebf\u7a0b\u662f\u6307\u5728\u4e0d\u540c\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684\u7ebf\u7a0b\u5b83\u4eec\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u533a\u522b",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"worker_threads"},"worker_threads"),(0,o.kt)("p",null,"worker_threads \u662f Node.js \u4e2d\u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u7528\u4e8e\u521b\u5efa\u591a\u7ebf\u7a0b\u7684\u5de5\u4f5c\u7ebf\u7a0b\u3002\u5728 Node.js \u4e2d\uff0cJavaScript \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u5728\u6267\u884c\u4ee3\u7801\u65f6\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a CPU \u6838\u5fc3\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u9700\u8981\u6267\u884c\u4e00\u4e9b\u8017\u65f6\u7684\u4efb\u52a1\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528 worker_threads \u6a21\u5757\u521b\u5efa\u989d\u5916\u7684\u7ebf\u7a0b\uff0c\u4f7f\u5f97\u8fd9\u4e9b\u4efb\u52a1\u53ef\u4ee5\u5728\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u5e76\u884c\u6267\u884c\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u54cd\u5e94\u6027\u3002"),(0,o.kt)("p",null,"worker_threads \u6a21\u5757\u5141\u8bb8\u4f60\u521b\u5efa\u65b0\u7684 Node.js \u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5e76\u901a\u8fc7\u7ebf\u7a0b\u95f4\u7684\u6d88\u606f\u4f20\u9012\u8fdb\u884c\u901a\u4fe1\u3002\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u6709\u81ea\u5df1\u7684\u4e8b\u4ef6\u5faa\u73af\uff0c\u53ef\u4ee5\u6267\u884c JavaScript \u4ee3\u7801\uff0c\u4f46\u662f\u5b83\u4eec\u5728\u72ec\u7acb\u7684\u7ebf\u7a0b\u4e2d\u8fd0\u884c\uff0c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 worker_threads \u6a21\u5757\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u53ef\u4ee5\u540c\u65f6\u6267\u884c CPU \u5bc6\u96c6\u578b\u4efb\u52a1\u6216 I/O \u5bc6\u96c6\u578b\u4efb\u52a1\u3002\u8fd9\u5bf9\u4e8e\u5904\u7406\u5927\u91cf\u5e76\u53d1\u8bf7\u6c42\u6216\u6267\u884c\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8ba1\u7b97\u4efb\u52a1\u975e\u5e38\u6709\u7528\uff0c\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u5faa\u73af\u3002"),(0,o.kt)("h2",{id:"\u5728-nodejs-\u4e2d\u4e3b\u7ebf\u7a0b\u548c\u5de5\u4f5c\u7ebf\u7a0b\u662f\u6307\u5728\u4e0d\u540c\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684\u7ebf\u7a0b\u5b83\u4eec\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u533a\u522b"},"\u5728 Node.js \u4e2d\uff0c\u4e3b\u7ebf\u7a0b\u548c\u5de5\u4f5c\u7ebf\u7a0b\u662f\u6307\u5728\u4e0d\u540c\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684\u7ebf\u7a0b\uff0c\u5b83\u4eec\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u533a\u522b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e3b\u7ebf\u7a0b\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728 Node.js \u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u521b\u5efa\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8d1f\u8d23\u6267\u884c JavaScript \u4ee3\u7801\uff0c\u5e76\u4e14\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b\u8d1f\u8d23\u7ba1\u7406\u4e8b\u4ef6\u5faa\u73af\uff0c\u5904\u7406 I/O \u64cd\u4f5c\uff0c\u6267\u884c\u4ee3\u7801\u4ee5\u53ca\u4e0e\u5de5\u4f5c\u7ebf\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u6709\u4e00\u4e2a\u4e3b\u7ebf\u7a0b\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u5de5\u4f5c\u7ebf\u7a0b\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 worker_threads \u6a21\u5757\u521b\u5efa\uff0c\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u5728\u81ea\u5df1\u7684\u7ebf\u7a0b\u4e2d\u6267\u884c JavaScript \u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6267\u884c CPU \u5bc6\u96c6\u578b\u4efb\u52a1\u6216 I/O \u5bc6\u96c6\u578b\u4efb\u52a1\uff0c\u4ee5\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u54cd\u5e94\u6027\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u6709\u81ea\u5df1\u7684\u4e8b\u4ef6\u5faa\u73af\uff0c\u72ec\u7acb\u4e8e\u4e3b\u7ebf\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u53ef\u4ee5\u5e76\u884c\u6267\u884c\u4efb\u52a1\u3002")))),(0,o.kt)("p",null,"\u4e3b\u7ebf\u7a0b\u548c\u5de5\u4f5c\u7ebf\u7a0b\u7684\u4e00\u4e9b\u91cd\u8981\u533a\u522b\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9\uff0c\u800c\u5de5\u4f5c\u7ebf\u7a0b\u662f\u4e3a\u6267\u884c\u7279\u5b9a\u4efb\u52a1\u800c\u521b\u5efa\u7684\u989d\u5916\u7ebf\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b\u8d1f\u8d23\u7ba1\u7406\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u5faa\u73af\u548c\u4e3b\u8981\u903b\u8f91\uff0c\u800c\u5de5\u4f5c\u7ebf\u7a0b\u8d1f\u8d23\u6267\u884c\u7279\u5b9a\u4efb\u52a1\uff0c\u5e76\u4e14\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b\u548c\u5de5\u4f5c\u7ebf\u7a0b\u4e4b\u95f4\u901a\u8fc7\u6d88\u606f\u4f20\u9012\u8fdb\u884c\u901a\u4fe1\uff0c\u5de5\u4f5c\u7ebf\u7a0b\u53ef\u4ee5\u5411\u4e3b\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\uff0c\u4e3b\u7ebf\u7a0b\u4e5f\u53ef\u4ee5\u5411\u5de5\u4f5c\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\uff0c\u4ee5\u4fbf\u5728\u5b83\u4eec\u4e4b\u95f4\u4ea4\u6362\u6570\u636e\u6216\u547d\u4ee4\u3002")),(0,o.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u4e3b\u7ebf\u7a0b\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u6838\u5fc3\uff0c\u800c\u5de5\u4f5c\u7ebf\u7a0b\u662f\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\u800c\u521b\u5efa\u7684\u8f85\u52a9\u7ebf\u7a0b\uff0c\u7528\u4e8e\u6267\u884c\u4e00\u4e9b\u8017\u65f6\u7684\u4efb\u52a1\uff0c\u540c\u65f6\u4fdd\u6301\u4e3b\u7ebf\u7a0b\u7684\u54cd\u5e94\u6027\u3002"),(0,o.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 worker_threads \u6a21\u5757\u65f6\uff0c\u4f60\u53ef\u4ee5\u5c06\u9700\u8981\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e2d\u6267\u884c\u7684\u4ee3\u7801\u4f5c\u4e3a\u5b57\u7b26\u4e32\u4f20\u9012\u7ed9\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5e76\u901a\u8fc7\u6d88\u606f\u4f20\u9012\u673a\u5236\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u4e3b\u7ebf\u7a0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');\n\nif (isMainThread) {\n    // \u4e3b\u7ebf\u7a0b\n\n    // \u5b9a\u4e49\u8981\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e2d\u6267\u884c\u7684\u4ee3\u7801\n    const code = `console.log('hello world')`;\n\n    // \u521b\u5efa\u5de5\u4f5c\u7ebf\u7a0b\n    const worker = new Worker(__filename, {\n        workerData: { code }\n    });\n\n    // \u63a5\u6536\u5de5\u4f5c\u7ebf\u7a0b\u7684\u6d88\u606f\n    worker.on('message', (result) => {\n        console.log('Received from worker:', result);\n    });\n} else {\n    // \u5de5\u4f5c\u7ebf\u7a0b\n\n    // \u6267\u884c\u4f20\u9012\u7ed9\u5de5\u4f5c\u7ebf\u7a0b\u7684\u4ee3\u7801\n    const result = eval(workerData.code);\n\n    // \u5c06\u7ed3\u679c\u53d1\u9001\u56de\u4e3b\u7ebf\u7a0b\n    parentPort.postMessage(result);\n}\n")))}d.isMDXComponent=!0}}]);