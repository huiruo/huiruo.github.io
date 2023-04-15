"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7549],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(a,".").concat(f)]||m[f]||u[f]||i;return r?t.createElement(d,s(s({ref:n},p),{},{components:r})):t.createElement(d,s({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7973:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const i={title:"promise\u57fa\u7840",sidebar_position:1},s=void 0,l={unversionedId:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/promise\u57fa\u7840",id:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/promise\u57fa\u7840",title:"promise\u57fa\u7840",description:"1.Promise\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8fd0\u884c\u8fd9\u4e2a\u51fd\u6570",source:"@site/programming-tech/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/01-promise\u57fa\u7840.md",sourceDirName:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise",slug:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/promise\u57fa\u7840",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/promise\u57fa\u7840",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/01-promise\u57fa\u7840.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"promise\u57fa\u7840",sidebar_position:1},sidebar:"docs",previous:{title:"\u9898\u76ee",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee"},next:{title:"\u5b9e\u73b0-promise\u65b9\u6cd5",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u5b9e\u73b0-promise\u65b9\u6cd5"}},a={},c=[{value:"1.Promise\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8fd0\u884c\u8fd9\u4e2a\u51fd\u6570",id:"1promise\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8fd0\u884c\u8fd9\u4e2a\u51fd\u6570",level:2},{value:"promise \u548cawait",id:"promise-\u548cawait",level:2},{value:"04.\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5",id:"04\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5",level:2},{value:"promise all",id:"promise-all",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1promise\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8fd0\u884c\u8fd9\u4e2a\u51fd\u6570"},"1.Promise\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8fd0\u884c\u8fd9\u4e2a\u51fd\u6570"),(0,o.kt)("p",null,"Promise\u7684\u6784\u9020\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u662f\u51fd\u6570\uff0c\u5e76\u4e14\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff1aresolve\uff0creject\uff0c\u5206\u522b\u8868\u793a\u5f02\u6b65\u64cd\u4f5c\u6267\u884c\u6210\u529f\u540e\u7684\u56de\u8c03\u51fd\u6570\u548c"),(0,o.kt)("p",null,"promise\u6709\u4e09\u4e2a\u72b6\u6001\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"pending","[\u5f85\u5b9a]","\u521d\u59cb\u72b6\u6001"),(0,o.kt)("li",{parentName:"ol"},"fulfilled","[\u5b9e\u73b0]","\u64cd\u4f5c\u6210\u529f"),(0,o.kt)("li",{parentName:"ol"},"rejected","[\u88ab\u5426\u51b3]","\u64cd\u4f5c\u5931\u8d25\n\u5f53promise\u72b6\u6001\u53d1\u751f\u6539\u53d8\uff0c\u5c31\u4f1a\u89e6\u53d1then()\u91cc\u7684\u54cd\u5e94\u51fd\u6570\u5904\u7406\u540e\u7eed\u6b65\u9aa4\uff1b")),(0,o.kt)("p",null,"Promise\u4e0a\u8fd8\u6709then\u65b9\u6cd5\uff0cthen \u65b9\u6cd5\u5c31\u662f\u7528\u6765\u6307\u5b9aPromise \u5bf9\u8c61\u7684\u72b6\u6001\u6539\u53d8\u65f6\u786e\u5b9a\u6267\u884c\u7684\u64cd\u4f5c\uff0cresolve \u65f6\u6267\u884c\u7b2c\u4e00\u4e2a\u51fd\u6570\uff08onFulfilled\uff09\uff0creject\u65f6\u6267\u884c\u7b2c\u4e8c\u4e2a\u51fd\u6570\uff08onRejected\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getNumber() {\n  const p = new Promise(function (resolve, reject) {\n    // \u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n    setTimeout(function () {\n      const num = Math.ceil(Math.random() * 10); //\u751f\u62101-10\u7684\u968f\u673a\u6570\n      if (num <= 5) {\n        resolve(num);\n      }\n      else {\n        reject('\u6570\u5b57\u592a\u5927\u4e86');\n      }\n    }, 2000);\n  });\n  return p;\n}\n\ngetNumber().then(\n  function (data) {\n    console.log('resolved');\n    console.log(data);\n  },\n  function (reason, data) {\n    console.log('rejected');\n    console.log(reason);\n  }\n);\n")),(0,o.kt)("h2",{id:"promise-\u548cawait"},"promise \u548cawait"),(0,o.kt)("p",null,"await \u5728\u7b49\u4ec0\u4e48\uff1f\n\u4e00\u53e5\u8bdd\u6982\u62ec\uff1a await\u7b49\u7684\u662f\u53f3\u4fa7\u300c\u8868\u8fbe\u5f0f\u300d\u7684\u7ed3\u679c"),(0,o.kt)("h2",{id:"04\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5"},"04.\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece\u8868\u9762\u4e0a\u770b\uff0cPromise\u53ea\u662f\u80fd\u591f\u7b80\u5316\u5c42\u5c42\u56de\u8c03\u7684\u5199\u6cd5\uff0c\u800c\u5b9e\u8d28\u4e0a\uff0cPromise\u7684\u7cbe\u9ad3\u662f\u201c\u72b6\u6001\u201d\uff0c\u7528\u7ef4\u62a4\u72b6\u6001\u3001\u4f20\u9012\u72b6\u6001\u7684\u65b9\u5f0f\u6765\u4f7f\u5f97\u56de\u8c03\u51fd\u6570\u80fd\u591f\u53ca\u65f6\u8c03\u7528\uff0c\u5b83\u6bd4\u4f20\u9012callback\u51fd\u6570\u8981\u7b80\u5355\u3001\u7075\u6d3b\u7684\u591a\u3002\u6240\u4ee5\u4f7f\u7528Promise\u7684\u6b63\u786e\u573a\u666f\u662f\u8fd9\u6837\u7684\uff1a")),(0,o.kt)("p",null,"promise\u94fe\u5f0f\u8c03\u7528\uff1a\u56e0\u4e3athen()\u65b9\u6cd5\u5185\u90e8\u8fd4\u56de\u4e86\u4e00\u4e2aPromise\u5b9e\u4f8b\uff0c\u800c\u8fd4\u56de\u7684\u8fd9\u4e2aPromise\u5b9e\u4f8b\u5728\u7ee7\u7eed\u8c03\u7528\u4e86\u7b2c\u4e8c\u4e2athen()\u65b9\u6cd5\u3002\u5e76\u4e14\u7b2c\u4e8c\u4e2athen\u7684resolve\u56de\u8c03\u7684\u53c2\u6570\uff0c\u662f\u4e0a\u4e00\u4e2athen\u7684resolve\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise((resolve, reject) => {\n    resolve(123)\n}).then((res) => {\n    console.log(res)\n    return 456\n}).then((res) => {\n    console.log(res)\n    return 789\n}).then((res) => {\n    console.log(res)\n})\n/*\n123\n456\n789\n*/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function runAsync1(){\n    var p = new Promise(function(resolve, reject){\n        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5f02\u6b65\u4efb\u52a11\u6267\u884c\u5b8c\u6210');\n            resolve('\u968f\u4fbf\u4ec0\u4e48\u6570\u636e1');\n        }, 1000);\n    });\n    return p;            \n}\nfunction runAsync2(){\n    var p = new Promise(function(resolve, reject){\n        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5f02\u6b65\u4efb\u52a12\u6267\u884c\u5b8c\u6210');\n            resolve('\u968f\u4fbf\u4ec0\u4e48\u6570\u636e2');\n        }, 2000);\n    });\n    return p;            \n}\nfunction runAsync3(){\n    var p = new Promise(function(resolve, reject){\n        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5f02\u6b65\u4efb\u52a13\u6267\u884c\u5b8c\u6210');\n            resolve('\u968f\u4fbf\u4ec0\u4e48\u6570\u636e3');\n        }, 2000);\n    });\n    return p;            \n}\n\nrunAsync1()\n.then(function(data){\n    console.log(data);\n    return runAsync2();\n})\n.then(function(data){\n    console.log(data);\n    return runAsync3();\n})\n.then(function(data){\n    console.log(data);\n});\n\u8fd9\u6837\u80fd\u591f\u6309\u987a\u5e8f\uff0c\u6bcf\u9694\u4e24\u79d2\u8f93\u51fa\u6bcf\u4e2a\u5f02\u6b65\u56de\u8c03\u4e2d\u7684\u5185\u5bb9\uff0c\u5728runAsync2\u4e2d\u4f20\u7ed9resolve\u7684\u6570\u636e\uff0c\u80fd\u5728\u63a5\u4e0b\u6765\u7684then\u65b9\u6cd5\u4e2d\u62ff\u5230.\n")),(0,o.kt)("h2",{id:"promise-all"},"promise all"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function test(val){\n    return new Promise((resolve,reject)=>{\n    setTimeout(() => {\n       let res=Math.random()+1\n       if(res<1.5){\n           resolve('<0.5')\n       }else{\n           reject('>0.5')\n       }\n        resolve(res)\n    }, 1000);\n })\n}\n\nPromise.all([test(1),test(2)]).then((x)=>{console.log(x)},(y)=>{console.log(y)})\n")))}u.isMDXComponent=!0}}]);