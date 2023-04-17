"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[62],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const s={title:"Generator",sidebar_position:2},a=void 0,l={unversionedId:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/Generator",id:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/Generator",title:"Generator",description:"\u534f\u7a0b",source:"@site/programming-tech/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/03-Generator.md",sourceDirName:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise",slug:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/Generator",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/Generator",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/03-Generator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Generator",sidebar_position:2},sidebar:"docs",previous:{title:"\u524d\u7aefrequire",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/\u6a21\u5757\u5316/nodejs\u4e3a\u4ec0\u4e48require\u4e0d\u80fd\u5f15\u5165\u56fe\u7247\u800cvue_require\u53ef\u4ee5\u5f15\u5165\u56fe\u7247"},next:{title:"async-await",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/async-await"}},i={},c=[{value:"\u534f\u7a0b",id:"\u534f\u7a0b",level:2},{value:"async/await\u662fGenerator\u548c\u81ea\u52a8\u6267\u884c\u5668\u7684\u8bed\u6cd5\u7cd6\uff0c\u5199\u6cd5\u548c\u5b9e\u73b0\u539f\u7406\u90fd\u7c7b\u4f3cco\u6a21\u5757\u7684promise\u6a21\u5f0f",id:"asyncawait\u662fgenerator\u548c\u81ea\u52a8\u6267\u884c\u5668\u7684\u8bed\u6cd5\u7cd6\u5199\u6cd5\u548c\u5b9e\u73b0\u539f\u7406\u90fd\u7c7b\u4f3cco\u6a21\u5757\u7684promise\u6a21\u5f0f",level:2},{value:"\u57fa\u672c\u5e94\u7528",id:"\u57fa\u672c\u5e94\u7528",level:2},{value:"\u751f\u6210\u5668\u51fd\u6570\u8fd0\u884c\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u5373iterator",id:"\u751f\u6210\u5668\u51fd\u6570\u8fd0\u884c\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61\u5373iterator",level:3},{value:"\u5173\u4e8e\u4f20\u53c2",id:"\u5173\u4e8e\u4f20\u53c2",level:3},{value:"yield",id:"yield",level:3},{value:"\u5f02\u6b65\u4f7f\u7528",id:"\u5f02\u6b65\u4f7f\u7528",level:2},{value:"promise",id:"promise",level:3},{value:"\u4f7f\u7528Generator\u6765\u89e3\u51b3\u201c\u56de\u8c03\u5730\u72f1\u201d",id:"\u4f7f\u7528generator\u6765\u89e3\u51b3\u56de\u8c03\u5730\u72f1",level:3},{value:"async\u5199\u6cd5",id:"async\u5199\u6cd5",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u534f\u7a0b"},"\u534f\u7a0b"),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fdb\u7a0b\u53ef\u4ee5\u6709\u591a\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u6709\u591a\u4e2a\u534f\u7a0b\uff0c\u4f46\u662f\u4e00\u4e2a\u7ebf\u7a0b\u540c\u65f6\u53ea\u80fd\u6709\u4e00\u4e2a\u534f\u7a0b\u5728\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u610f\u601d\u5c31\u662f\u8bf4\u5982\u679c\u5f53\u524d\u534f\u7a0b\u53ef\u4ee5\u6267\u884c\uff0c\u6bd4\u5982\u540c\u6b65\u4ee3\u7801\uff0c\u90a3\u5c31\u6267\u884c\u5b83\uff0c\u5982\u679c\u5f53\u524d\u534f\u7a0b\u6682\u65f6\u4e0d\u80fd\u7ee7\u7eed\u6267\u884c\uff0c\u6bd4\u5982\u4ed6\u662f\u4e00\u4e2a\u5f02\u6b65\u8bfb\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u90a3\u5c31\u5c06\u5b83\u6302\u8d77\uff0c\u7136\u540e\u53bb\u6267\u884c\u5176\u4ed6\u534f\u7a0b\uff0c\u7b49\u8fd9\u4e2a\u534f\u7a0b\u7ed3\u679c\u56de\u6765\u4e86\uff0c\u53ef\u4ee5\u7ee7\u7eed\u4e86\u518d\u6765\u6267\u884c\u5b83\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"yield\u5176\u5b9e\u5c31\u76f8\u5f53\u4e8e\u5c06\u5f53\u524d\u4efb\u52a1\u6302\u8d77\u4e86\uff0c\u4e0b\u6b21\u8c03\u7528\u518d\u4ece\u8fd9\u91cc\u5f00\u59cb\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fed\u4ee3\u5668\u9700\u8981\u624b\u52a8\u8c03next\u624d\u80fd\u4e00\u6761\u4e00\u6761\u6267\u884cyield")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"next\u7684\u8fd4\u56de\u503c\u662f{value, done}\uff0cvalue\u662fyield\u540e\u9762\u8868\u8fbe\u5f0f\u7684\u503c"))),(0,o.kt)("h2",{id:"asyncawait\u662fgenerator\u548c\u81ea\u52a8\u6267\u884c\u5668\u7684\u8bed\u6cd5\u7cd6\u5199\u6cd5\u548c\u5b9e\u73b0\u539f\u7406\u90fd\u7c7b\u4f3cco\u6a21\u5757\u7684promise\u6a21\u5f0f"},"async/await\u662fGenerator\u548c\u81ea\u52a8\u6267\u884c\u5668\u7684\u8bed\u6cd5\u7cd6\uff0c\u5199\u6cd5\u548c\u5b9e\u73b0\u539f\u7406\u90fd\u7c7b\u4f3cco\u6a21\u5757\u7684promise\u6a21\u5f0f"),(0,o.kt)("p",null,"Generator\u81ea\u5df1\u4e0d\u80fd\u81ea\u52a8\u6267\u884c\uff0c\u8981\u81ea\u52a8\u6267\u884c\u9700\u8981\u5f15\u5165\u5176\u4ed6\u65b9\u6848\uff0c\u524d\u9762\u8bb2thunk\u7684\u65f6\u5019\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u6848\uff0cco\u6a21\u5757\u4e5f\u662f\u4e00\u4e2a\u5f88\u53d7\u6b22\u8fce\u7684\u81ea\u52a8\u6267\u884c\u65b9\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u601d\u8def\uff1a\u5148\u5199\u4e00\u4e2a\u5c40\u90e8\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u53bb\u8c03\u7528gen.next\uff0c\u540c\u65f6\u8fd9\u4e2a\u65b9\u6cd5\u672c\u8eab\u53c8\u4f1a\u4f20\u5230\u56de\u8c03\u51fd\u6570\u6216\u8005promise\u7684\u6210\u529f\u5206\u652f\u91cc\u9762\uff0c\u5f02\u6b65\u7ed3\u675f\u540e\u53c8\u7ee7\u7eed\u8c03\u7528\u8fd9\u4e2a\u5c40\u90e8\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u5c40\u90e8\u65b9\u6cd5\u53c8\u8c03\u7528gen.next\uff0c\u8fd9\u6837\u4e00\u76f4\u8fed\u4ee3\uff0c\u76f4\u5230\u8fed\u4ee3\u5668\u6267\u884c\u5b8c\u6bd5\u3002\n")),(0,o.kt)("h2",{id:"\u57fa\u672c\u5e94\u7528"},"\u57fa\u672c\u5e94\u7528"),(0,o.kt)("h3",{id:"\u751f\u6210\u5668\u51fd\u6570\u8fd0\u884c\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61\u5373iterator"},"\u751f\u6210\u5668\u51fd\u6570\u8fd0\u884c\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u5373iterator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function* testFn() {\n  yield 1;\n  yield 2;\n  yield 3;\n  return 4;\n}\nconst fn = testFn()\nconsole.log('1-',fn.next())\nconsole.log('2-',fn.next())\nconsole.log('3-',fn.next())\nconsole.log('4-',fn.next())\n")),(0,o.kt)("h3",{id:"\u5173\u4e8e\u4f20\u53c2"},"\u5173\u4e8e\u4f20\u53c2"),(0,o.kt)("p",null,"next\u91cc\u9762\u7684\u53c2\u6570\u7ed9\u5230\u4e86\u4e0a\u4e00\u6b21yield\u7684\u6267\u884c\u7ed3\u679c"),(0,o.kt)("p",null,"\u8fed\u4ee3\u5668\u8fd8\u6709\u4e2areturn\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u76f4\u63a5\u7ec8\u6b62\u5f53\u524d\u8fed\u4ee3\u5668\uff0c\u5c06done\u7f6e\u4e3atrue\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u7684\u53c2\u6570\u5c31\u662f\u8fed\u4ee3\u5668\u7684value\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function* testFn() {\n  const test1 = yield 1;\n  console.log(\"test1:\",test1)\n  const test2 = yield 2;\n  const test3 = yield 3;\n  return test3;\n}\nconst fn = testFn()\nconsole.log('1-',fn.next(21))\nconsole.log('2-',fn.next(22))\nconsole.log('3-',fn.next(23))\nconsole.log('4-',fn.next(24))\nconsole.log(fn);\n")),(0,o.kt)("h3",{id:"yield"},"yield"),(0,o.kt)("p",null,"\u5b9e\u4f8b\u4e2d\u7b2c\u4e00\u6b21\u8c03\u7528next\uff0c\u503c:10 + 5\uff0c\u537315\uff0c\u7136\u540e\u7b2c\u4e8c\u6b21\u8c03\u7528next\uff0c\u5176\u5b9e\u5c31\u8d70\u5230\u4e86yield*\u4e86\uff0c\u8fd9\u5176\u5b9e\u5c31\u76f8\u5f53\u4e8e\u8c03\u7528\u4e86gen\uff0c\u7136\u540e\u6267\u884c\u4ed6\u7684\u7b2c\u4e00\u4e2ayield\uff0c\u503c\u5c31\u662f1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function* gen() {\n  let a = yield 1;\n  let b = yield a + 2;\n}\n\nfunction* gen2() {\n  yield 10 + 5;\n  yield* gen();\n}\n\nlet iterator = gen2();\nconsole.log('iterator2:',iterator.next()) // iterator2 {value: 15, done: false}\n\nconsole.log('\u7b2c\u4e8c\u6b21\u8c03\u7528next:',iterator.next()) // {value: 1, done: false}\n")),(0,o.kt)("h2",{id:"\u5f02\u6b65\u4f7f\u7528"},"\u5f02\u6b65\u4f7f\u7528"),(0,o.kt)("p",null,"\u4e09\u4e2a\u7f51\u7edc\u8bf7\u6c42\uff0c\u8bf7\u6c423\u4f9d\u8d56\u8bf7\u6c422\u7684\u7ed3\u679c\uff0c\u8bf7\u6c422\u4f9d\u8d56\u8bf7\u6c421;"),(0,o.kt)("h3",{id:"promise"},"promise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const request = require(\"request\");\n\nconst request1 = function() {\n  const promise = new Promise((resolve) => {\n    request('https://www.baidu.com', function (error, response) {\n      if (!error && response.statusCode == 200) {\n        resolve('request1 success');\n      }\n    });\n  });\n\n  return promise;\n}\n\nconst request2 = function() {\n  const promise = new Promise((resolve) => {\n    request('https://www.baidu.com', function (error, response) {\n      if (!error && response.statusCode == 200) {\n        resolve('request2 success');\n      }\n    });\n  });\n\n  return promise;\n}\n\nconst request3 = function() {\n  const promise = new Promise((resolve) => {\n    request('https://www.baidu.com', function (error, response) {\n      if (!error && response.statusCode == 200) {\n        resolve('request3 success');\n      }\n    });\n  });\n\n  return promise;\n}\n\nrequest1().then((data) => {\n  console.log(data);\n  return request2();\n})\n.then((data) => {\n  console.log(data);\n  return request3();\n})\n.then((data) => {\n  console.log(data);\n})\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528generator\u6765\u89e3\u51b3\u56de\u8c03\u5730\u72f1"},"\u4f7f\u7528Generator\u6765\u89e3\u51b3\u201c\u56de\u8c03\u5730\u72f1\u201d"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://dennisgo.cn/Articles/JavaScript/Generator.html"},"Generator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const request = require(\"request\");\n\nfunction* requestGen() {\n  function sendRequest(url) {\n    request(url, function (error, response) {\n      if (!error && response.statusCode == 200) {\n        console.log(response.body);\n\n        // \u6ce8\u610f\u8fd9\u91cc\uff0c\u5f15\u7528\u4e86\u5916\u90e8\u7684\u8fed\u4ee3\u5668iterator\n        iterator.next(response.body);\n      }\n    })\n  }\n\n  const url = 'https://www.baidu.com';\n\n  // \u4f7f\u7528yield\u53d1\u8d77\u4e09\u4e2a\u8bf7\u6c42\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u6210\u529f\u540e\u518d\u7ee7\u7eed\u8c03next\n  yield sendRequest(url);\n  yield sendRequest(url);\n  yield sendRequest(url);\n}\n\nconst iterator = requestGen();\n\n// \u624b\u52a8\u8c03\u7b2c\u4e00\u4e2anext\niterator.next();\n")),(0,o.kt)("h3",{id:"async\u5199\u6cd5"},"async\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fetch = require('node-fetch');\n\nasync function sendRequest () {\n  const r1 = await fetch('https://www.baidu.com');\n  const r2 = await fetch('https://www.baidu.com');\n  const r3 = await fetch('https://www.baidu.com');\n\n  return {\n    r1,\n    r2,\n    r3,\n  }\n}\n\nsendRequest().then((res) => {\n  console.log('res', res);\n});\n")))}d.isMDXComponent=!0}}]);