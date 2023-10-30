"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,c={unversionedId:"JavaScript/ts/\u6cdb\u578b\u53c2\u6570",id:"JavaScript/ts/\u6cdb\u578b\u53c2\u6570",title:"\u6cdb\u578b\u53c2\u6570",description:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570",source:"@site/programming-tech/JavaScript/06-ts/\u6cdb\u578b\u53c2\u6570.md",sourceDirName:"JavaScript/06-ts",slug:"/JavaScript/ts/\u6cdb\u578b\u53c2\u6570",permalink:"/JavaScript/ts/\u6cdb\u578b\u53c2\u6570",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/06-ts/\u6cdb\u578b\u53c2\u6570.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u4f7f\u7528keyof\u89e3\u51b3\u5bf9\u8c61ts\u9650\u5b9a",permalink:"/JavaScript/ts/\u4f7f\u7528keyof\u89e3\u51b3\u5bf9\u8c61ts\u9650\u5b9a"},next:{title:"react\u4e2d\u7684ts",permalink:"/JavaScript/ts/react\u4e2d\u7684ts"}},l={},s=[{value:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570",id:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570",level:2},{value:"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\uff0c\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\uff0c\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b\u3002",id:"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b",level:2},{value:"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528",id:"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570"},"\u4e00\u4e2a\u51fd\u6570\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u6cdb\u578b\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function createMan<T,K>(name:T,age:K):[T,K]{\n    return [name,age];\n}\nlet result=createMan<string,number>("\u5f20\u4e09",30);\nconsole.log(result[0],result[1]);//\u7ed3\u679c\uff1a\u5f20\u4e09 30\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b9a\u4e49\u591a\u4e2a\u6cdb\u578b\u53c2\u6570\u4f7f\u7528\u9017\u53f7\u505a\u5206\u9694\u7b26<T,K>\uff0c\u5206\u522b\u5c06\u6cdb\u578b\u7684T\u548cK\u8bbe\u7f6e\u4e3a\u53c2\u6570name\u548cage\u7684\u7c7b\u578b\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5143\u7ec4\uff0c\u6240\u4ee5\u8fd4\u56de\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a","[T,K]","\uff0cT\u5bf9\u5e94\u7684name\uff0cK\u5bf9\u5e94\u7684age")),(0,a.kt)("h2",{id:"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b"},"\u5728\u5b9a\u4e49\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u4e3a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u5b9a\u4e49\u6cdb\u578b\u7c7b\u578b\uff0c\u5728\u4f7f\u7528\u63a5\u53e3\u65f6\uff0c\u5728\u6307\u5b9a\u5177\u4f53\u7684\u6cdb\u578b\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u51fd\u6570\u4e2d\u5982\u4f55\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'interface ICreate{\n    <T>(name:string,age:T):string\n}\nlet func:ICreate=function<T>(name:string,age:T):string{\n    return name+","+age\n}\n\nfunc<number>("\u674e\u56db",20);//\u7ed3\u679c\uff1a\u674e\u56db,20\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u521b\u5efa\u4e00\u4e2aICreate\u63a5\u53e3\uff0c\u91cc\u9762\u5b9a\u4e49\u4e86\u4e00\u4e2a\u6cdb\u578b\u51fd\u6570\u7684\u7ea6\u675f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"<T>"),"\u8868\u793a\u58f0\u660e\u51fd\u6570\u65f6\u5fc5\u987b\u662f\u6cdb\u578b\u683c\u5f0f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"(name:string,age:T)"),"\u8868\u793a\u58f0\u660e\u51fd\u6570\u65f6\u5fc5\u987b\u6709name\u548cage\u4e24\u4e2a\u53c2\u6570\uff0c\u4e24\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u5206\u522b\u4e3astring\u548c\u6cdb\u578bT\uff0c\u58f0\u660e\u53d8\u91cffunc\u4f7f\u7528\u63a5\u53e3ICreate\u8fdb\u884c\u7ea6\u675f\uff0c\u8d4b\u503c\u51fd\u6570\u65f6\u5fc5\u987b\u6309\u7167\u63a5\u53e3\u7684\u89c4\u8303\u58f0\u660e\u51fd\u6570\u3002\u4f7f\u7528func\u51fd\u6570\u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"<number>"),"\u8868\u793a\u6cdb\u578bT\u4e3anumber\u7c7b\u578b\uff0c\u8fd9\u65f6\u53c2\u6570age:T\u4f1a\u6620\u5c04\u4e3aage:number\uff0c\u6240\u4ee5\u4f20\u5165\u7684\u503c\u5fc5\u987b\u662fnumber\u7c7b\u578b\u5373\u201c20\u201d")),(0,a.kt)("h2",{id:"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528"},"\u518d\u6765\u770b\u4e00\u4e0b\u6cdb\u578b\u63a5\u53e3\u5728\u7c7b\u4e2d\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u6cdb\u578b\u63a5\u53e3\ninterface IUser<T>{\n    name:string;\n    age:number;\n    getUserInfo:()=>T\n}\n\n//\u5b9a\u4e49\u4e00\u4e2a\u7528\u6237\u7c7b\nclass User implements IUser<string>{\n    public name:string;\n    public age:number;\n    constructor(name:string,age:number){\n        this.name=name;\n        this.age=age;\n    }\n    getUserInfo(){\n        return `\u59d3\u540d${this.name}\uff0c\u5e74\u9f84${this.age}`;\n    }\n}\nlet user=new User("\u5f20\u4e09",30);\nconsole.log(user.getUserInfo());//\u7ed3\u679c\uff1a\u59d3\u540d\u5f20\u4e09\uff0c\u5e74\u9f8430\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u6cdb\u578b\u63a5\u53e3",(0,a.kt)("inlineCode",{parentName:"p"},"IUser<T>"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"<T>"),"\u8868\u793a\u7c7b\u7ee7\u627f\u63a5\u53e3\u65f6\u4f20\u5165\u7684\u7c7b\u578b\uff0cT\u53ef\u4ee5\u60f3\u8c61\u6210\u63a5\u53e3\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u63a5\u53e3\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u4e2d\u4f7f\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u8be5\u63a5\u53e3\u5185\u90e8\u7684\u65b9\u6cd5getUserInfo\u7ea6\u675f\u7684\u7c7b\u578b\u662f\u4e00\u4e2a\u65b9\u6cd5\u5e76\u4e14\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e3a\u6cdb\u578bT\u3002\u63a5\u4e0b\u6765\u5728User\u7c7b\u4e2d\u7ee7\u627fIUser\u63a5\u53e3\u5e76\u4f20\u5165\u6307\u5b9a\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"}," <string>"),"\uff0c\u8868\u793agetUserInfo\u65b9\u6cd5\u8fd4\u56de\u7684\u503c\u5fc5\u987b\u662fstring\u7c7b\u578b\u3002")))}m.isMDXComponent=!0}}]);