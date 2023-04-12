"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,c={unversionedId:"JavaScript/ts/\u6cdb\u578b\u53c2\u6570",id:"JavaScript/ts/\u6cdb\u578b\u53c2\u6570",title:"\u6cdb\u578b\u53c2\u6570",description:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570",source:"@site/programming-tech/JavaScript/06-ts/02-\u6cdb\u578b\u53c2\u6570.md",sourceDirName:"JavaScript/06-ts",slug:"/JavaScript/ts/\u6cdb\u578b\u53c2\u6570",permalink:"/JavaScript/ts/\u6cdb\u578b\u53c2\u6570",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/06-ts/02-\u6cdb\u578b\u53c2\u6570.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"\u88c5\u9970\u5668",permalink:"/JavaScript/ts/\u88c5\u9970\u5668"},next:{title:"interface-\u9650\u5236\u51fd\u6570",permalink:"/JavaScript/ts/interface-\u9650\u5236\u51fd\u6570"}},s={},l=[{value:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570",id:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570",level:2},{value:"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\uff0c\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\uff0c\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b\u3002",id:"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b",level:2},{value:"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528",id:"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528",level:2}],p={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570"},"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function createMan<T,K>(name:T,age:K):[T,K]{\n    return [name,age];\n}\nlet result=createMan<string,number>("\u5f20\u4e09",30);\nconsole.log(result[0],result[1]);//\u7ed3\u679c\uff1a\u5f20\u4e09 30\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5b9a\u4e49\u591a\u4e2a\u6cdb\u578b\u53c2\u6570\u4f7f\u7528\u9017\u53f7\u505a\u5206\u9694\u7b26<T,K>\uff0c\u5206\u522b\u5c06\u6cdb\u578b\u7684T\u548cK\u8bbe\u7f6e\u4e3a\u53c2\u6570name\u548cage\u7684\u7c7b\u578b\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5143\u7ec4\uff0c\u6240\u4ee5\u8fd4\u56de\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a[T,K]\uff0cT\u5bf9\u5e94\u7684name\uff0cK\u5bf9\u5e94\u7684age\n")),(0,a.kt)("h2",{id:"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b"},"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\uff0c\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\uff0c\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u51fd\u6570\u4e2d\u5982\u4f55\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'interface ICreate{\n    <T>(name:string,age:T):string\n}\nlet func:ICreate=function<T>(name:string,age:T):string{\n    return name+","+age\n}\n\nfunc<number>("\u674e\u56db",20);//\u7ed3\u679c\uff1a\u674e\u56db,20\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u521b\u5efa\u4e00\u4e2aICreate\u63a5\u53e3\uff0c\u91cc\u9762\u5b9a\u4e49\u4e86\u4e00\u4e2a\u6cdb\u578b\u51fd\u6570\u7684\u7ea6\u675f\uff0c<T>\u8868\u793a\u58f0\u660e\u51fd\u6570\u65f6\u5fc5\u987b\u662f\u6cdb\u578b\u683c\u5f0f\uff0c(name:string,age:T)\u8868\u793a\u58f0\u660e\u51fd\u6570\u65f6\u5fc5\u987b\u6709name\u548cage\u4e24\u4e2a\u53c2\u6570\uff0c\u4e24\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u5206\u522b\u4e3astring\u548c\u6cdb\u578bT\uff0c\u58f0\u660e\u53d8\u91cffunc\u4f7f\u7528\u63a5\u53e3ICreate\u8fdb\u884c\u7ea6\u675f\uff0c\u8d4b\u503c\u51fd\u6570\u65f6\u5fc5\u987b\u6309\u7167\u63a5\u53e3\u7684\u89c4\u8303\u58f0\u660e\u51fd\u6570\u3002\u4f7f\u7528func\u51fd\u6570\u65f6<number>\u8868\u793a\u6cdb\u578bT\u4e3anumber\u7c7b\u578b\uff0c\u8fd9\u65f6\u53c2\u6570age:T\u4f1a\u6620\u5c04\u4e3aage:number\uff0c\u6240\u4ee5\u4f20\u5165\u7684\u503c\u5fc5\u987b\u662fnumber\u7c7b\u578b\u5373\u201c20\u201d\u3002\n")),(0,a.kt)("h2",{id:"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528"},"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u6cdb\u578b\u63a5\u53e3\ninterface IUser<T>{\n    name:string;\n    age:number;\n    getUserInfo:()=>T\n}\n\n//\u5b9a\u4e49\u4e00\u4e2a\u7528\u6237\u7c7b\nclass User implements IUser<string>{\n    public name:string;\n    public age:number;\n    constructor(name:string,age:number){\n        this.name=name;\n        this.age=age;\n    }\n    getUserInfo(){\n        return `\u59d3\u540d${this.name}\uff0c\u5e74\u9f84${this.age}`;\n    }\n}\nlet user=new User("\u5f20\u4e09",30);\nconsole.log(user.getUserInfo());//\u7ed3\u679c\uff1a\u59d3\u540d\u5f20\u4e09\uff0c\u5e74\u9f8430\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u6cdb\u578b\u63a5\u53e3IUser<T>\uff0c<T>\u8868\u793a\u7c7b\u7ee7\u627f\u63a5\u53e3\u65f6\u4f20\u5165\u7684\u7c7b\u578b\uff0cT\u53ef\u4ee5\u60f3\u8c61\u6210\u63a5\u53e3\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u63a5\u53e3\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u4e2d\u4f7f\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u8be5\u63a5\u53e3\u5185\u90e8\u7684\u65b9\u6cd5getUserInfo\u7ea6\u675f\u7684\u7c7b\u578b\u662f\u4e00\u4e2a\u65b9\u6cd5\u5e76\u4e14\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e3a\u6cdb\u578bT\u3002\u63a5\u4e0b\u6765\u5728User\u7c7b\u4e2d\u7ee7\u627fIUser\u63a5\u53e3\u5e76\u4f20\u5165\u6307\u5b9a\u7c7b\u578b<string>\uff0c\u8868\u793agetUserInfo\u65b9\u6cd5\u8fd4\u56de\u7684\u503c\u5fc5\u987b\u662fstring\u7c7b\u578b\u3002\n")))}m.isMDXComponent=!0}}]);