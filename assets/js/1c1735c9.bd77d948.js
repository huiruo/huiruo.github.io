"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5792],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>y});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(r),g=o,y=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return r?t.createElement(y,s(s({ref:n},p),{},{components:r})):t.createElement(y,s({ref:n},p))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2313:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=r(87462),o=(r(67294),r(3905));const a={title:"async",sidebar_position:15},s=void 0,c={unversionedId:"JavaScript/async",id:"JavaScript/async",title:"async",description:"async\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2aPromise",source:"@site/programming-tech/JavaScript/12-async.md",sourceDirName:"JavaScript",slug:"/JavaScript/async",permalink:"/JavaScript/async",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/12-async.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"async",sidebar_position:15},sidebar:"docs",previous:{title:"class-super",permalink:"/JavaScript/class-super"},next:{title:"\u4fee\u9970\u5668",permalink:"/JavaScript/\u4fee\u9970\u5668"}},l={},i=[{value:"\u5bf9\u5f02\u5e38\u7684\u5904\u7406",id:"\u5bf9\u5f02\u5e38\u7684\u5904\u7406",level:2},{value:"promise \u5bf9\u5f02\u5e38\u7684\u5904\u7406",id:"promise-\u5bf9\u5f02\u5e38\u7684\u5904\u7406",level:3},{value:"async\u5bf9\u5f02\u5e38\u7684\u5904\u7406\u76f4\u63a5\u7528.catch()\u6355\u6349",id:"async\u5bf9\u5f02\u5e38\u7684\u5904\u7406\u76f4\u63a5\u7528catch\u6355\u6349",level:3},{value:"\u4e0eGenerator\u7684\u5173\u7cfb",id:"\u4e0egenerator\u7684\u5173\u7cfb",level:2}],p={toc:i},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"async\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2aPromise"),(0,o.kt)("p",null,"\u5982\u679casync\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u540c\u6b65\u7684\u503c\uff0c\u8fd9\u4e2a\u503c\u5c06\u88ab\u5305\u88c5\u6210\u4e00\u4e2a\u7406\u89e3resolve\u7684Promise\uff0c\u7b49\u540c\u4e8ereturn Promise.resolve(value)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//async await\n//\u8fd4\u56dePromise\nlet timer = async function timer() {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve('a');\n        }, 1000);\n    })\n}\ntimer().then(result => {\n    console.log(result);\n}).catch(err => {\n    console.log(err.message);\n})\n\n//\u8fd4\u56de\u540c\u6b65\u7684\u503c\nlet sayHello = async function sayHello() {\n    let hi = 'hello world'//\u7b49\u540c\u4e8ereturn Promise.resolve(hi);\n    return hi\n}\nsayHello().then(res => {\n    console.log(res)\n}).catch(err => {\n    console.log(err.message);\n})\n")),(0,o.kt)("h2",{id:"\u5bf9\u5f02\u5e38\u7684\u5904\u7406"},"\u5bf9\u5f02\u5e38\u7684\u5904\u7406"),(0,o.kt)("h3",{id:"promise-\u5bf9\u5f02\u5e38\u7684\u5904\u7406"},"promise \u5bf9\u5f02\u5e38\u7684\u5904\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// 1.\u4f7f\u7528reject\nlet promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject('promise\u4f7f\u7528reject\u629b\u51fa\u5f02\u5e38')  \n  }, 1000)\n})\npromise().then(res => {\n  console.log(res)\n})\n.catch(err => {\n  console.log(err)     //'promise\u4f7f\u7528reject\u629b\u51fa\u5f02\u5e38'\n})\n\n// 2.\u4f7f\u7528new Error() \nlet promise = new Promise((resolve, reject) => {\n    throw new Error('promise\u4f7f\u7528Error\u629b\u51fa\u5f02\u5e38') //\u4f7f\u7528throw\u5f02\u5e38\u4e0d\u652f\u6301\u653e\u5728\u5b9a\u65f6\u5668\u4e2d\n})\npromise().then(res => {\n  console.log(res)\n})\n.catch(err => {\n  console.log(err.message)     //'promise\u4f7f\u7528Error\u629b\u51fa\u5f02\u5e38'\n})\n\n// 3.reject\u4e00\u4e2anew Error()\nlet promise = new Promise((resolve, reject) => {\n\n    setTimeout(() => {\n        reject(new Error('promise\u629b\u51fa\u5f02\u5e38'));\n    }, 1000);\n})\n\npromise.then(res => {\n    console.log(res);\n})\n.catch(err => {\n    console.log(err.message);  //'promise\u629b\u51fa\u5f02\u5e38'\n})\n")),(0,o.kt)("h3",{id:"async\u5bf9\u5f02\u5e38\u7684\u5904\u7406\u76f4\u63a5\u7528catch\u6355\u6349"},"async\u5bf9\u5f02\u5e38\u7684\u5904\u7406\u76f4\u63a5\u7528.catch()\u6355\u6349"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// async\u629b\u51fa\u5f02\u5e38\nlet sayHi = async sayHi => {\n    throw new Error('async\u629b\u51fa\u5f02\u5e38');\n}\nsayHi().then(res => {\n    console.log(res);\n})\n.catch(err => {\n    console.log(err.message);\n})\n")),(0,o.kt)("h2",{id:"\u4e0egenerator\u7684\u5173\u7cfb"},"\u4e0eGenerator\u7684\u5173\u7cfb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/*\n\u867d\u7136Generator\u5c06\u5f02\u6b65\u64cd\u4f5c\u8868\u793a\u5f97\u5f88\u7b80\u6d01\uff0c\u4f46\u662f\u6d41\u7a0b\u7ba1\u7406\u5374\u4e0d\u65b9\u4fbf\uff08\u5373\u4f55\u65f6\u6267\u884c\u7b2c\u4e00\u9636\u6bb5\u3001\u4f55\u65f6\u6267\u884c\u7b2c\u4e8c\u9636\u6bb5\uff09\u3002\n*/\nfunction* getList() {\n    const c = yield count()\n    const l = yield list()\n    return 'end'\n}\nvar gl = getList()\nconsole.log(gl.next()) // {value: Promise, done: false}\nconsole.log(gl.next()) // {value: Promise, done: false}\nconsole.log(gl.next()) // {value: 'end', done: true}\n\n// \u6b64\u65f6\uff0c\u6211\u4eec\u4fbf\u5e0c\u671b\u80fd\u51fa\u73b0\u4e00\u79cd\u80fd\u81ea\u52a8\u6267\u884cGenerator\u51fd\u6570\u7684\u65b9\u6cd5\u3002\u6211\u4eec\u7684\u4e3b\u89d2\u6765\u4e86\uff1aasync/await\u3002 \u5b83\u5c31\u662fGenerator\u51fd\u6570\u7684\u8bed\u6cd5\u7cd6\u3002\nlet getList = async () => {\n  const c = await count()\n  const l = await list()\n}\n")))}u.isMDXComponent=!0}}]);