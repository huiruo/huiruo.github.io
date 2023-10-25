"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=l,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={},o=void 0,i={unversionedId:"JavaScript/ts/\u88c5\u9970\u5668",id:"JavaScript/ts/\u88c5\u9970\u5668",title:"\u88c5\u9970\u5668",description:"\u539f\u7406",source:"@site/programming-tech/JavaScript/06-ts/\u88c5\u9970\u5668.md",sourceDirName:"JavaScript/06-ts",slug:"/JavaScript/ts/\u88c5\u9970\u5668",permalink:"/JavaScript/ts/\u88c5\u9970\u5668",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/06-ts/\u88c5\u9970\u5668.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u6cdb\u578b\u53c2\u6570",permalink:"/JavaScript/ts/\u6cdb\u578b\u53c2\u6570"},next:{title:"es6-extends",permalink:"/JavaScript/\u7ee7\u627f/es6-extends"}},p={},u=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u539f\u578b",id:"\u539f\u578b",level:3},{value:"\u95ed\u5305",id:"\u95ed\u5305",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u5de5\u5382\u51fd\u6570\u7684\u88c5\u9970\u5668",id:"\u5de5\u5382\u51fd\u6570\u7684\u88c5\u9970\u5668",level:3},{value:"\u7c7b\u88c5\u9970\u5668",id:"\u7c7b\u88c5\u9970\u5668",level:2},{value:"\u65b9\u6cd5\u88c5\u9970\u5668",id:"\u65b9\u6cd5\u88c5\u9970\u5668",level:2},{value:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668",id:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668",level:2},{value:"\u53c2\u6570\u88c5\u9970\u5668",id:"\u53c2\u6570\u88c5\u9970\u5668",level:2},{value:"\u5c5e\u6027\u88c5\u9970\u5668",id:"\u5c5e\u6027\u88c5\u9970\u5668",level:2},{value:"\u88c5\u9970\u5668\u52a0\u8f7d\u987a\u5e8f",id:"\u88c5\u9970\u5668\u52a0\u8f7d\u987a\u5e8f",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"TypeScript \u88c5\u9970\u5668\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u58f0\u660e\uff0c\u5b83\u53ef\u4ee5\u9644\u52a0\u5230\u7c7b\u58f0\u660e\u3001\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u53c2\u6570\u4e0a\uff0c\u4ee5\u4fee\u6539\u7c7b\u7684\u884c\u4e3a"),(0,l.kt)("p",null,"\u88c5\u9970\u5668\u7684\u5b9e\u73b0\u539f\u7406\u5176\u5b9e\u662f\u57fa\u4e8e JavaScript \u7684\u539f\u578b\u548c\u95ed\u5305\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u88c5\u9970\u5668\u51fd\u6570\u4f1a\u63a5\u6536\u88ab\u88c5\u9970\u7684\u51fd\u6570\u6216\u7c7b\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u6216\u7c7b\u3002\u5728\u8fd4\u56de\u7684\u51fd\u6570\u6216\u7c7b\u4e2d\uff0c\u53ef\u4ee5\u5bf9\u88ab\u88c5\u9970\u7684\u51fd\u6570\u6216\u7c7b\u8fdb\u884c\u4fee\u6539\u6216\u589e\u5f3a\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u539f\u578b\u94fe\u548c\u95ed\u5305\u673a\u5236\uff0c\u5c06\u8fd4\u56de\u7684\u65b0\u51fd\u6570\u6216\u7c7b\u4e0e\u539f\u51fd\u6570\u6216\u7c7b\u5173\u8054\u8d77\u6765\u3002"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u88c5\u9970\u5668\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u5c06\u88c5\u9970\u5668\u51fd\u6570\u8f6c\u6362\u4e3a JavaScript \u4ee3\u7801\uff0c\u5e76\u63d2\u5165\u5230\u88ab\u88c5\u9970\u7684\u51fd\u6570\u6216\u7c7b\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u88c5\u9970\u5668\u7684\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"\u539f\u578b"},"\u539f\u578b"),(0,l.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u539f\u578b\u94fe\uff0c\u901a\u8fc7\u539f\u578b\u94fe\u53ef\u4ee5\u8bbf\u95ee\u5230\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u3002\u5728\u4f7f\u7528\u88c5\u9970\u5668\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u6216\u7c7b\uff0c\u5e76\u5c06\u5176\u4e0e\u88ab\u88c5\u9970\u7684\u51fd\u6570\u6216\u7c7b\u5173\u8054\u8d77\u6765\u3002\u8fd9\u79cd\u5173\u8054\u901a\u5e38\u662f\u901a\u8fc7\u539f\u578b\u94fe\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function(...args: any[]) {\n    console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);\n    const result = originalMethod.apply(this, args);\n    console.log(`Method ${propertyKey} returned ${JSON.stringify(result)}`);\n    return result;\n  };\n  return descriptor;\n}\n\nclass Calculator {\n  @log\n  add(x: number, y: number) {\n    return x + y;\n  }\n}\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a log \u7684\u88c5\u9970\u5668\u51fd\u6570\uff0c\u5e76\u5c06\u5176\u5e94\u7528\u5230 add \u65b9\u6cd5\u4e0a\u3002\u5f53 TypeScript \u7f16\u8bd1\u5668\u7f16\u8bd1\u8fd9\u6bb5\u4ee3\u7801\u65f6\uff0c\u5b83\u4f1a\u5c06 @log \u88c5\u9970\u5668\u8f6c\u6362\u4e3a\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class Calculator {\n  add(x: number, y: number) {\n    // ...\n  }\n}\nCalculator.prototype.add = log(Calculator.prototype, "add", Object.getOwnPropertyDescriptor(Calculator.prototype, "add"));\n')),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7f16\u8bd1\u5668\u5c06 log \u51fd\u6570\u5e94\u7528\u5230 add \u65b9\u6cd5\u4e0a\uff0c\u5e76\u901a\u8fc7\u539f\u578b\u94fe\u5c06 log \u51fd\u6570\u4e0e add \u65b9\u6cd5\u5173\u8054\u8d77\u6765\u3002"),(0,l.kt)("h3",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,l.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u51fd\u6570\u53ef\u4ee5\u4f5c\u4e3a\u8fd4\u56de\u503c\u8fd4\u56de\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002\u5728\u4f7f\u7528\u88c5\u9970\u5668\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u5b9a\u4e49\u4e00\u4e2a\u88c5\u9970\u5668\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u6216\u7c7b\uff0c\u7528\u4e8e\u5bf9\u88ab\u88c5\u9970\u7684\u51fd\u6570\u6216\u7c7b\u8fdb\u884c\u589e\u5f3a\u6216\u4fee\u6539\u3002\u8fd9\u79cd\u8fd4\u56de\u503c\u901a\u5e38\u662f\u4e00\u4e2a\u95ed\u5305\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u88c5\u9970\u5668\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function(...args: any[]) {\n    console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);\n    const result = originalMethod.apply(this, args);\n    console.log(`Method ${propertyKey} returned ${JSON.stringify(result)}`);\n    return result;\n  };\n  return descriptor;\n}\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0clog \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u95ed\u5305\uff0c\u8fd9\u4e2a\u95ed\u5305\u5305\u542b\u4e86\u5bf9 originalMethod \u53d8\u91cf\u7684\u5f15\u7528\u3002\u8fd9\u4e2a\u95ed\u5305\u5728\u88ab\u8c03\u7528\u65f6\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230 originalMethod \u53d8\u91cf\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u6216\u589e\u5f3a\u3002\u901a\u8fc7\u95ed\u5305\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u88ab\u88c5\u9970\u7684\u51fd\u6570\u6216\u7c7b\u8fdb\u884c\u52a8\u6001\u4fee\u6539\u7684\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u88c5\u9970\u5668\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u58f0\u660e\uff0c\u5b83\u80fd\u591f\u88ab\u9644\u52a0\u5230\u7c7b\u58f0\u660e\uff0c\u65b9\u6cd5\uff0c \u8bbf\u95ee\u7b26\uff0c\u5c5e\u6027\u6216\u53c2\u6570\u4e0a\u3002\u88c5\u9970\u5668\u4f7f\u7528 @expression\u8fd9\u79cd\u5f62\u5f0f\uff0cexpression\u6c42\u503c\u540e\u5fc5\u987b\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u4f1a\u5728\u8fd0\u884c\u65f6\u88ab\u8c03\u7528\uff0c\u88ab\u88c5\u9970\u7684\u58f0\u660e\u4fe1\u606f\u505a\u4e3a\u53c2\u6570\u4f20\u5165\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u591a\u4e2a\u88c5\u9970\u5668,\u5728\u8fd9\u4e2a\u6a21\u578b\u4e0b\uff0c\u5f53\u590d\u5408Contorller\u548cContorller1\u65f6\uff0c\u590d\u5408\u7684\u7ed3\u679cContorller(Contorller1(Admin))\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript"},"function Contorller (target) {  \n  // \u53ef\u4ee5\u901a\u8fc7target\uff08\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff09\u53bb\u505a\u4e9b\u4e8b\u60c5\n}\n\n@Contorller @Contorller1\nclass Admin {}\n")),(0,l.kt)("h3",{id:"\u5de5\u5382\u51fd\u6570\u7684\u88c5\u9970\u5668"},"\u5de5\u5382\u51fd\u6570\u7684\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4ee5\u4f9b\u88c5\u9970\u5668\u5728\u8fd0\u884c\u65f6\u8c03\u7528\u3002\u4e5f\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a\u51fd\u6570\u67ef\u91cc\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Contorller (path) {\n  // \u8fd4\u56de\u4e00\u4e2a\u88c5\u9970\u5668\u51fd\u6570\n  return function (target) {\n    target.prototype.root = path\n  }\n}\n\n@Contorller('//www.test.com')\nclass Admin {\n  getRoot () {\n    console.log(this.root)\n  }\n}\n")),(0,l.kt)("h2",{id:"\u7c7b\u88c5\u9970\u5668"},"\u7c7b\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u7c7b\u88c5\u9970\u5668\u5728\u7c7b\u58f0\u660e\u4e4b\u524d\u88ab\u58f0\u660e\uff08\u7d27\u9760\u7740\u7c7b\u58f0\u660e\uff09\u3002\u7c7b\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u7c7b\u6784\u9020\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\uff0c\u4fee\u6539\u6216\u66ff\u6362\u7c7b\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"\u5f53Admin\u7c7b\u88ab\u58f0\u660e\u7684\u65f6\u5019\uff0c\u4f1a\u6267\u884cContorller\u88c5\u9970\u5668\u51fd\u6570\uff0c\u7136\u540e\u6211\u4eec\u5728\u88c5\u9970\u5668\u51fd\u6570\u5185\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u4e0a\u6dfb\u52a0\u4e86\u4e00\u4e2agetName\u65b9\u6cd5;"),(0,l.kt)("p",null,"\u5f53\u7c7b\u88ab\u5b9e\u4f8b\u5316\u540e\uff0c\u5f53\u7136\u5c31\u53ef\u4ee5\u53bb\u8c03\u7528\u6211\u4eec\u901a\u8fc7\u88c5\u9970\u5668\u6ce8\u5165\u8fdb\u53bb\u7684\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\u4e00\u4e2a\u7c7b\u88c5\u9970\u5668\nfunction Contorller (target) {\n  target.prototype.getName = function () {\n    console.log('test')\n  }\n}\n\n// \u4f7f\u7528\u7c7b\u88c5\u9970\u5668\n@Contorller\nclass Admin {}\n\n// \u5b9e\u4f8b\u5316\u7c7b\nconst admin = new Admin()\nadmin.getName() // \u6253\u5370 test\n")),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u88c5\u9970\u5668"},"\u65b9\u6cd5\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u65b9\u6cd5\u88c5\u9970\u5668\u58f0\u660e\u5728\u4e00\u4e2a\u65b9\u6cd5\u7684\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u65b9\u6cd5\u58f0\u660e\uff09\u3002\u5b83\u4f1a\u88ab\u5e94\u7528\u5230\u65b9\u6cd5\u7684 \u5c5e\u6027\u63cf\u8ff0\u7b26\u4e0a\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\uff0c\u4fee\u6539\u6216\u8005\u66ff\u6362\u65b9\u6cd5\u5b9a\u4e49\u3002\u65b9\u6cd5\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u5b83\u6709\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u9759\u6001\u65b9\u6cd5\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u539f\u578b\u65b9\u6cd5\u6765\u8bf4\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u7684\u540d\u5b57\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26{value: any, writable: boolean, enumerable: boolean, configurable: boolean}\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function Get (path) {\n  return function (target, methodName, descriptor) {\n    /* \u8fd9\u91cc\u662f\u53ef\u4ee5\u6539\u5199\u65b9\u6cd5\u7684\n     let fn = attributes.value\n     attributes.value = function () { \n       console.log(`\u6539\u5199\u4e86\u4e86${methodName}\u65b9\u6cd5`)\n       \u5c06path\u4f20\u5165\n       fn.call(target, path)\n     }\n    */\n    console.log(target)\n    console.log(`method:${methodName}`)\n    console.log(`descriptor:${JSON.stringify(descriptor)}`)\n  }\n}\n\nclass Admin {\n  @Get(\'/setname\')\n  static setName () {}\n  @Get(\'/getName\')  \n  getName () {}\n}\n\n// \u8f93\u51fa\u7ed3\u679c\n/*\nAdmin { getName: [Function] }\nmethod:getName\ndescriptor:{"writable":true,"enumerable":true,"configurable":true}\n\n{ [Function: Admin] setName: [Function] }\nmethod:setName\ndesc {"writable":true,"enumerable":true,"configurable":true}\n*/\n')),(0,l.kt)("p",null,"\u6839\u636e\u6253\u5370\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5982\u679c\u88c5\u9970\u7684\u662f\u9759\u6001\u65b9\u6cd5\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u5c06\u662f\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff1b\u5982\u679c\u88c5\u9970\u7684\u4e0d\u662f\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u90a3\u4e48\u7b2c\u4e00\u4e2a\u53c2\u6570\u5c06\u4f1a\u662f\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\u3002\n\u88c5\u9970\u5668\u7684\u5b9e\u73b0\u4f7f\u7528\u4e86ES5\u7684 Object.defineProperty \u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u53c2\u6570\u4e5f\u548c\u8fd9\u4e2a\u65b9\u6cd5\u7684\u53c2\u6570\u4e00\u81f4\u3002\u88c5\u9970\u5668\u7684\u672c\u8d28\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u8bed\u6cd5\u7cd6\uff0c\u901a\u8fc7Object.defineProperty\u6765\u4fee\u6539\u7c7b\u4e2d\u4e00\u4e9b\u5c5e\u6027\uff0cdescriptor\u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u662f\u9488\u5bf9key\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\uff0c\u91cc\u9762\u6709\u63a7\u5236\u76ee\u6807\u5bf9\u8c61\u7684\u8be5\u5c5e\u6027\u662f\u5426\u53ef\u5199\u7684writable\u5c5e\u6027\u7b49"),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668"},"\u8bbf\u95ee\u5668\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u8bbf\u95ee\u5668\u88c5\u9970\u5668\u58f0\u660e\u5728\u4e00\u4e2a\u8bbf\u95ee\u5668\u7684\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u8bbf\u95ee\u5668\u58f0\u660e\uff09\u3002\u8bbf\u95ee\u5668\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u8bbf\u95ee\u5668\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u5e76\u4e14\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\uff0c\u4fee\u6539\u6216\u66ff\u6362\u4e00\u4e2a\u8bbf\u95ee\u5668\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u5b83\u7684\u53c2\u6570\u4e0e\u65b9\u6cd5\u8bbf\u95ee\u5668\u53c2\u6570\u4e00\u6837"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Point {\n    private _x: number;\n    private _y: number;\n    constructor(x: number, y: number) {\n        this._x = x;\n        this._y = y;\n    }\n\n    @configurable(false)\n    get x() { return this._x; }\n\n    @configurable(false)\n    get y() { return this._y; }\n}\n\nfunction configurable(value: boolean) {\n    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n        descriptor.configurable = value;\n    };\n}\n")),(0,l.kt)("p",null,"\u5728\u58f0\u660ex\uff0cy\u8bbf\u95ee\u5668\u7684\u65f6\u5019\uff0c\u8c03\u7528\u4e86configurable\u88c5\u9970\u5668\uff0c\u901a\u8fc7\u88c5\u9970\u5668\u8bbe\u7f6e\u4e86\u63cf\u8ff0\u7b26\u5bf9\u8c61\u4e2dconfigurable\u5c5e\u6027\u7684\u503c"),(0,l.kt)("h2",{id:"\u53c2\u6570\u88c5\u9970\u5668"},"\u53c2\u6570\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u53c2\u6570\u88c5\u9970\u5668\u58f0\u660e\u5728\u4e00\u4e2a\u53c2\u6570\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u53c2\u6570\u58f0\u660e\uff09\u3002\u53c2\u6570\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u7c7b\u6784\u9020\u51fd\u6570\u6216\u65b9\u6cd5\u58f0\u660e\u3002\n\u53c2\u6570\u88c5\u9970\u5668\u53ea\u80fd\u7528\u6765\u76d1\u89c6\u4e00\u4e2a\u65b9\u6cd5\u7684\u53c2\u6570\u662f\u5426\u88ab\u4f20\u5165\u3002"),(0,l.kt)("p",null,"\u53c2\u6570\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u5b83\u6709\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u9759\u6001\u6210\u5458\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u5b9e\u4f8b\u6210\u5458\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53c2\u6570\u7684\u540d\u5b57\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53c2\u6570\u5728\u51fd\u6570\u53c2\u6570\u5217\u8868\u4e2d\u7684\u7d22\u5f15\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function PathParam(paramName: string) {\n    return function (target, methodName: string, paramIndex: number) {\n        !target.meta && (target.meta = {});\n        target.meta[paramIndex] = paramName;\n    }\n}\n\nclass HelloService {\n    constructor() { }\n    getUser( @PathParam(\"userId\") userId: string) { }\n}\n\nconsole.log(HelloService.prototype.meta); // {'0':'userId'}\n")),(0,l.kt)("p",null,"\u5728getUser\u65b9\u6cd5\u4e2d\u4f7f\u7528\u4e86PathParam\u88c5\u9970\u5668\uff0c\u5728PathParam\u88c5\u9970\u5668\u4e2d\uff0c\u901a\u8fc7\u539f\u578b\u5bf9\u8c61\u53bb\u8bbe\u7f6e\u4e86\u4e00\u4e2ameta\u5bf9\u8c61\uff0c\u7136\u540e\u5bf9\u8fd9\u4e2ameta\u5bf9\u8c61\u4e2d\u901a\u8fc7\u53c2\u6570\u4e0b\u6807\u548c\u53c2\u6570\u540d\u79f0\u53bb\u6dfb\u52a0\u952e\u503c\uff0c\u8fd9\u6837\u5c31\u5f62\u6210\u4e86\u4e00\u4e2a\u53c2\u6570map\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027\u88c5\u9970\u5668"},"\u5c5e\u6027\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u5c5e\u6027\u88c5\u9970\u5668\u58f0\u660e\u5728\u4e00\u4e2a\u5c5e\u6027\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u5c5e\u6027\u58f0\u660e\uff09\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5c5e\u6027\u63cf\u8ff0\u7b26\u4e0d\u4f1a\u505a\u4e3a\u53c2\u6570\u4f20\u5165\u5c5e\u6027\u88c5\u9970\u5668\uff0c\u8fd9\u4e0eTypeScript\u662f\u5982\u4f55\u521d\u59cb\u5316\u5c5e\u6027\u88c5\u9970\u5668\u7684\u6709\u5173\u3002\u56e0\u4e3a\u76ee\u524d\u6ca1\u6709\u529e\u6cd5\u5728\u5b9a\u4e49\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\u7684\u6210\u5458\u65f6\u63cf\u8ff0\u4e00\u4e2a\u5b9e\u4f8b\u5c5e\u6027\uff0c\u5e76\u4e14\u6ca1\u529e\u6cd5\u76d1\u89c6\u6216\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u3002\u8fd4\u56de\u503c\u4e5f\u4f1a\u88ab\u5ffd\u7565\u3002\u56e0\u6b64\uff0c\u5c5e\u6027\u63cf\u8ff0\u7b26\u53ea\u80fd\u7528\u6765\u76d1\u89c6\u7c7b\u4e2d\u662f\u5426\u58f0\u660e\u4e86\u67d0\u4e2a\u540d\u5b57\u7684\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u5c5e\u6027\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u5b83\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u9759\u6001\u5c5e\u6027\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u539f\u578b\u5c5e\u6027\u6765\u8bf4\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u7684\u540d\u5b57\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function DefaultValue(value: string) {\n    return function (target: any, propertyName: string) {\n        target[propertyName] = value;\n    }\n}\n\nclass Hello {\n    @DefaultValue("world")\n    greeting: string;\n}\nconsole.log(new Hello().greeting); // \u8f93\u51fa: world\n')),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u7ed9greeting\u5c5e\u6027\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5de5\u5382\u88c5\u9970\u5668DefaultValue\uff0c\u88c5\u9970\u4e2d\u901a\u8fc7\u7b2c\u4e00\u53c2\u6570\u539f\u578b\u5bf9\u8c61\u548c\u7b2c\u4e8c\u53c2\u6570\u5c5e\u6027\u540d\u79f0\u7ed9greeting\u5c5e\u6027\u505a\u4e86\u8d4b\u503c\u64cd\u4f5c\uff0c\u6240\u4ee5\u5728\u6700\u540e\u5c31\u6253\u5370\u51fa\u4e86world\u3002"),(0,l.kt)("h2",{id:"\u88c5\u9970\u5668\u52a0\u8f7d\u987a\u5e8f"},"\u88c5\u9970\u5668\u52a0\u8f7d\u987a\u5e8f"),(0,l.kt)("p",null,"\u7c7b\u4e2d\u4e0d\u540c\u58f0\u660e\u4e0a\u7684\u88c5\u9970\u5668\u5c06\u6309\u4ee5\u4e0b\u89c4\u5b9a\u7684\u987a\u5e8f\u5e94\u7528\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53c2\u6570\u88c5\u9970\u5668\uff0c\u7136\u540e\u4f9d\u6b21\u662f\u65b9\u6cd5\u88c5\u9970\u5668\uff0c\u8bbf\u95ee\u7b26\u88c5\u9970\u5668\uff0c\u6216\u5c5e\u6027\u88c5\u9970\u5668\u5e94\u7528\u5230\u6bcf\u4e2a\u5b9e\u4f8b\u6210\u5458\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53c2\u6570\u88c5\u9970\u5668\uff0c\u7136\u540e\u4f9d\u6b21\u662f\u65b9\u6cd5\u88c5\u9970\u5668\uff0c\u8bbf\u95ee\u7b26\u88c5\u9970\u5668\uff0c\u6216\u5c5e\u6027\u88c5\u9970\u5668\u5e94\u7528\u5230\u6bcf\u4e2a\u9759\u6001\u6210\u5458\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53c2\u6570\u88c5\u9970\u5668\u5e94\u7528\u5230\u6784\u9020\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7c7b\u88c5\u9970\u5668\u5e94\u7528\u5230\u7c7b\u3002")))}g.isMDXComponent=!0}}]);