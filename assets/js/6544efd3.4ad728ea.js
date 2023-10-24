"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7285],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,p(p({ref:n},u),{},{components:t})):a.createElement(k,p({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"AST",sidebar_position:1},p=void 0,i={unversionedId:"build-AST-Babel/AST",id:"build-AST-Babel/AST",title:"AST",description:"\u7f16\u8bd1\u539f\u7406\u548cAST",source:"@site/programming-tech/build-AST-Babel/01-AST.md",sourceDirName:"build-AST-Babel",slug:"/build-AST-Babel/AST",permalink:"/build-AST-Babel/AST",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/build-AST-Babel/01-AST.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AST",sidebar_position:1},sidebar:"docs",previous:{title:"vite",permalink:"/build-webpack/vite"},next:{title:"babel",permalink:"/build-AST-Babel/babel"}},s={},o=[{value:"\u7f16\u8bd1\u539f\u7406\u548cAST",id:"\u7f16\u8bd1\u539f\u7406\u548cast",level:2},{value:"\u4f8b\u5982php\u662f\u5982\u4f55\u6267\u884c?",id:"\u4f8b\u5982php\u662f\u5982\u4f55\u6267\u884c",level:3},{value:"\u7f16\u8bd1\u539f\u7406",id:"\u7f16\u8bd1\u539f\u7406",level:3},{value:"\u62c6\u89e3Javascript",id:"\u62c6\u89e3javascript",level:2},{value:"\u7ee7\u7eed\u6253\u5f00ReturnStatement",id:"\u7ee7\u7eed\u6253\u5f00returnstatement",level:3},{value:"AST\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u6811\u5f62\u7ed3\u6784\u6765\u8868\u793a\u7f16\u7a0b\u8bed\u53e5,\u5bf9\u8ba1\u7b97\u673a\u6765\u8bf4\u66f4\u52a0\u53cb\u597d\u7684\u8868\u73b0\u5f62\u5f0f",id:"ast\u62bd\u8c61\u8bed\u6cd5\u6811\u6811\u5f62\u7ed3\u6784\u6765\u8868\u793a\u7f16\u7a0b\u8bed\u53e5\u5bf9\u8ba1\u7b97\u673a\u6765\u8bf4\u66f4\u52a0\u53cb\u597d\u7684\u8868\u73b0\u5f62\u5f0f",level:2},{value:"JS Parser\u89e3\u6790\u5668,\u5c06JavaScript\u6e90\u7801<code>\u8f6c\u5316\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811(AST)\u7684\u5de5\u5177\u53eb\u505aJS Parser\u89e3\u6790\u5668\u3002</code>",id:"js-parser\u89e3\u6790\u5668\u5c06javascript\u6e90\u7801\u8f6c\u5316\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811ast\u7684\u5de5\u5177\u53eb\u505ajs-parser\u89e3\u6790\u5668",level:2},{value:"\u5e38\u89c1\u7684AST parser",id:"\u5e38\u89c1\u7684ast-parser",level:3},{value:"JS Parser\u7684\u89e3\u6790\u8fc7\u7a0b\u5305\u62ec\u4e24\u90e8\u5206:",id:"js-parser\u7684\u89e3\u6790\u8fc7\u7a0b\u5305\u62ec\u4e24\u90e8\u5206",level:3},{value:"JS Parser\u7684\u89e3\u6790\uff1a\u8bcd\u6cd5\u5206\u6790(Lexical Analysis)",id:"js-parser\u7684\u89e3\u6790\u8bcd\u6cd5\u5206\u6790lexical-analysis",level:3},{value:"JS Parser\u7684\u89e3\u6790:\u8bed\u6cd5\u5206\u6790(Syntax Analysis)",id:"js-parser\u7684\u89e3\u6790\u8bed\u6cd5\u5206\u6790syntax-analysis",level:3}],u={toc:o},c="wrapper";function d(e){let{components:n,...l}=e;return(0,r.kt)(c,(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u539f\u7406\u548cast"},"\u7f16\u8bd1\u539f\u7406\u548cAST"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"./babel"},"babel\u7f16\u8bd1\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://astexplorer.net/"},"astexplorer:\u67e5\u770bjs\u88ab\u8f6c\u6362\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811")),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u4e1c\u897f\u90fd\u662f \u5d4c\u5957\u7ed3\u6784\uff1a"),(0,r.kt)("p",null,"\u5404\u79cd\u7f51\u7edc\u534f\u8bae\u7684\u5305\u683c\u5f0f\uff0c\u97f3\u9891\u7f16\u7801\u683c\u5f0f\uff0c\u89c6\u9891h264......, html,xml, json, \u6587\u4ef6\u5939\uff0c\u547d\u4ee4\u884c\uff0cwindows\u6ce8\u518c\u8868\uff0cini\u6587\u4ef6... \u5bf9\u8c61\uff0c\u5b57\u5178,snmp oid.... "),(0,r.kt)("p",null,"\u6240\u6709\u7684\u8fd9\u4e9b\u4e1c\u897f\u672c\u8d28\u90fd\u662f\u4e00\u56de\u4e8b\u3002\u5982\u679c\u4f60\u638c\u63a7\u80fd\u529b\u8db3\u591f\u5f3a\u662f\u53ef\u4ee5\u5b8c\u5168\u7528if/else \u52a0for \u5faa\u73af \u52a0\u6570\u7ec4 \u8fd9\u4e09\u4e2a\u57fa\u672c\u7684\u4e1c\u897f\u5b9e\u73b0\u4e0a\u9762\u7684\u4e00\u5207\uff0c\u4f46\u662f\u9057\u61be\u7684\u4e8b\u5927\u591a\u4eba\u786c\u5199\u7684\u8bdd\u638c\u63a7\u4e0d\u4f4f\u590d\u6742\u7684\u5c42\u5c42\u5d4c\u5957\u7ed3\u6784\uff0c\u8fdb\u4e00\u6b65\u7684\u6280\u5de7\u5c31\u662f\u72b6\u6001\u673a\uff0c\u518d\u8fdb\u4e00\u6b65\u60f3\u505a\u7684\u66f4\u52a0\u4f53\u7cfb\u5316\uff0c\u5c31\u8981\u6709\u7f16\u8bd1\u539f\u7406\u7684\u652f\u6301\u3002  "),(0,r.kt)("p",null,"AST\u4ec0\u4e48\u7684\u8bf4\u76f4\u767d\u4e86\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5bf9\u6574\u4e2a\u4ee3\u7801\u6587\u672c\u4e2d\u6bcf\u4e00\u4e2a\u62ec\u53f7\uff0ctoken,\u8fdb\u884c\u4e00\u4e2a\u63cf\u8ff0\uff0c\u5305\u62eclocation(\u5728\u6587\u672c\u4e2d\u7684\u4f4d\u7f6e\uff09 \uff0c\u7c7b\u578b\uff08\u51fd\u6570\u8fd8\u662f\u53d8\u91cf....\uff09\uff0c\u62ec\u53f7\u7684\u914d\u5bf9\u8005\u4f4d\u7f6e\uff08block scope).....\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c1d\u8bd5\u786c\u5199\u4e00\u4e2apng\u7684\u683c\u5f0f\u89e3\u6790\u5668\uff1b\u80fd\u638c\u63a7\u4f4f\u7684\u8bdd\uff0c\u5c1d\u8bd5\u4e0bh264\u683c\u5f0f\u89e3\u6790\uff1b\u5982\u679c\u8fd8\u80fd\u638c\u63a7\u4f4f\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c1d\u8bd5html\uff1b\u5982\u679c\u4f9d\u7136\u6ca1\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5pdf,\u6216\u8005\u89e3\u6790js,\u603b\u4f1a\u5230\u8fbe\u4e00\u4e2a\u9700\u8981\u7f16\u8bd1\u539f\u7406\u7406\u8bba\u652f\u6491\u7684\u9636\u6bb5\u3002"),(0,r.kt)("h3",{id:"\u4f8b\u5982php\u662f\u5982\u4f55\u6267\u884c"},"\u4f8b\u5982php\u662f\u5982\u4f55\u6267\u884c?"),(0,r.kt)("p",null,"php\u662f\u7531\u89e3\u91ca\u5668\u5c06\u811a\u672c\u6587\u4ef6\u5148\u7ffb\u8bd1\u4e3a\u64cd\u4f5c\u7801\uff08opcode\uff09, \u7136\u540e\u4eceopcode\u627e\u5230\u5bf9\u5e94\u7684C\u51fd\u6570\uff0c\u53bb\u6267\u884c\u8be5C\u51fd\u6570\u3002(\u8fd9\u91cc\u7684C\u51fd\u6570\u5728php\u5b89\u88c5\u6210\u529f\u4e4b\u540e\u5c31\u5df2\u7ecf\u662f\u673a\u5668\u7801\u4e86\u3002\u8fd9\u5757\u8981\u5206\u6e05\u695a\u3002\u4e0d\u8981\u8ddfopcode\u6df7\u6dc6)"),(0,r.kt)("h3",{id:"\u7f16\u8bd1\u539f\u7406"},"\u7f16\u8bd1\u539f\u7406"),(0,r.kt)("p",null,"\u7f16\u8bd1\u539f\u7406\u5728\u57fa\u7840\u8f6f\u4ef6\u548c\u5e73\u53f0\u7c7b\u8f6f\u4ef6\u4e2d\u8fd0\u7528\u5f97\u6bd4\u8f83\u591a\u3002\u57fa\u7840\u8f6f\u4ef6\u5982\u7f16\u8bd1\u5668\u548c\u6570\u636e\u5e93\uff0c\u5e73\u53f0\u7c7b\u8f6f\u4ef6\u5982\u5927\u6570\u636e\u6846\u67b6\u7b49\u3002"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u6570\u636e\u5e93\u548c\u5927\u6570\u636e\u6846\u67b6\u5982Spark SQL\u7b49\u5404\u79cdxx sql\uff0c\u672c\u8d28\u90fd\u662f\u5c06\u67d0\u79cdDSL\uff0c\u5148\u7ecf\u8fc7\u8bcd\u6cd5\u5206\u6790\uff0c\u8bed\u6cd5\u5206\u6790\uff0c\u8bed\u4e49\u5206\u6790\u7b49\u8f6c\u5316\u4e3a\u67d0\u79cd\u4e2d\u95f4\u8868\u8fbe\uff0c\u518d\u5c06\u8fd9\u79cd\u4e2d\u95f4\u8868\u8fbe\u751f\u6210\u5177\u4f53\u7684\u6267\u884c\u4efb\u52a1\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4f1a\u7528\u5404\u79cd\u4f18\u5316\u7b97\u6cd5\uff0c\u6765\u8ba9\u4efb\u52a1\u6267\u884c\u7684\u6027\u80fd\u66f4\u9ad8\u3002\u8fd9\u91cc\u9762\u90fd\u4f1a\u4f7f\u7528\u5230\u7f16\u8bd1\u6280\u672f\u3002"),(0,r.kt)("p",null,"\u518d\u6bd4\u5982\uff0cJava\u540e\u7aef\u9762\u8bd5\u4e2d\u5e38\u89c1\u7684\u6846\u67b6\u548c\u4e2d\u95f4\u4ef6\u4e5f\u7528\u5230\u4e86\u7f16\u8bd1\u6280\u672f\uff0cHibernate\u4e2dHQL\u7684\u89e3\u6790\uff0c\u5206\u5e93\u5206\u8868\u4e2d\u95f4\u4ef6\u5982shardingsphere\u5bf9DSL\u7684\u89e3\u6790\uff0cSpring\u4e2d\u5bf9\u6ce8\u89e3\u7684\u652f\u6301\uff0cJava\u5b57\u8282\u7801\u52a8\u6001\u751f\u6210\u90fd\u4f7f\u7528\u4e86\u7f16\u8bd1\u539f\u7406\u7684\u77e5\u8bc6\u3002"),(0,r.kt)("p",null,"\u5b66\u597d\u7f16\u8bd1\u539f\u7406\uff0c\u80fd\u8ba9\u4f60\u66f4\u597d\u66f4\u5feb\u66f4\u5f3a\u5730\u8bbe\u8ba1\u548c\u5b9e\u73b0\u8fd9\u4e9b\u8f6f\u4ef6\u3002\u80fd\u8ba9\u4f60\u5728\u770b\u4e00\u4e9b\u9762\u8bd5\u516b\u80a1\u6587\u65f6\uff0c\u4e0d\u4ec5\u4ec5\u662f\u80cc\u8bf5\uff0c\u4e5f\u66f4\u52a0\u6e05\u695a\u600e\u4e48\u8bbe\u8ba1\uff08\u5373\u4f7f\u4f60\u539f\u5148\u4e0d\u77e5\u9053\u8fd9\u4e2a\u8f6f\u4ef6\uff0c\u4f46\u4f60\u77e5\u9053\u8fd9\u4e2a\u8f6f\u4ef6\u7684\u529f\u80fd\uff0c\u5c31\u80fd\u731c\u51fa\u5b83\u7684\u5927\u6982\u5b9e\u73b0\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java\u7a0b\u5e8f\u5458\u9762\u8bd5\u5fc5\u5907JVM\u5e95\u5c42\u539f\u7406\uff0c\u5b66\u597d\u4e86\u7f16\u8bd1\u539f\u7406\uff0cJVM\uff0cV8\uff0cGo\u8fd0\u884c\u65f6\u7b49\u7b49\uff0c\u90fd\u662f\u7f16\u8bd1\u539f\u7406\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u4e0d\u7528\u80cc\uff0c\u90fd\u80fd\u4e3e\u4e00\u53cd\u4e09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u4e00\u6b65\u52a0\u6df1\u5bf9\u7b97\u6cd5\u7684\u7406\u89e3\u3002\u6bd4\u5982\u7f16\u8bd1\u539f\u7406\u4e2d\u4f7f\u7528\u4e86\u5927\u91cf\u7684\u6811\u548c\u56fe\u76f8\u5173\u7684\u7b97\u6cd5\uff0c\u7f16\u8bd1\u540e\u7aef\u6307\u4ee4\u9009\u62e9\u7b97\u6cd5BURS \u7b97\u6cd5\u662f\u4e00\u79cd\u52a8\u6001\u89c4\u5212\u7b97\u6cd5\u7b49\u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u539f\u7406\u662f\u8fde\u63a5\uff1a\u7a0b\u5e8f\uff0c\u64cd\u4f5c\u7cfb\u7edf\u548c\u8ba1\u7b97\u673a\u7ec4\u6210\u539f\u7406\uff08\u4e5f\u5c31\u662f\u8f6f\u786c\u4ef6\u63a5\u53e3\uff09\u7684\u6865\u6881"))),(0,r.kt)("h2",{id:"\u62c6\u89e3javascript"},"\u62c6\u89e3Javascript"),(0,r.kt)("p",null,"\u901a\u8fc7\u62bd\u8c61\u8bed\u6cd5\u6811\u89e3\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u7ae5\u5e74\u65f6\u62c6\u89e3\u73a9\u5177\u4e00\u6837\uff0c\u900f\u89c6Javascript\u8fd9\u53f0\u673a\u5668\u7684\u8fd0\u8f6c\uff0c\u5e76\u4e14\u91cd\u65b0\u6309\u7740\u4f60\u7684\u610f\u613f\u6765\u7ec4\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n    return a + b\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Program",\n  "start": 0,\n  "end": 39,\n  "body": [\n    {\n      "type": "FunctionDeclaration",\n      "start": 0,\n      "end": 39,\n      "id": {\n        "type": "Identifier",\n        "start": 9,\n        "end": 12,\n        "name": "add"\n      },\n      "expression": false,\n      "generator": false,\n      "async": false,\n      "params": [\n        {\n          "type": "Identifier",\n          "start": 13,\n          "end": 14,\n          "name": "a"\n        },\n        {\n          "type": "Identifier",\n          "start": 16,\n          "end": 17,\n          "name": "b"\n        }\n      ],\n      "body": {\n        "type": "BlockStatement",\n        "start": 19,\n        "end": 39,\n        "body": [\n          {\n            "type": "ReturnStatement",\n            "start": 25,\n            "end": 37,\n            "argument": {\n              "type": "BinaryExpression",\n              "start": 32,\n              "end": 37,\n              "left": {\n                "type": "Identifier",\n                "start": 32,\n                "end": 33,\n                "name": "a"\n              },\n              "operator": "+",\n              "right": {\n                "type": "Identifier",\n                "start": 36,\n                "end": 37,\n                "name": "b"\n              }\n            }\n          }\n        ]\n      }\n    }\n  ],\n  "sourceType": "module"\n}\n')),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a\n\u4e00\u4e2aid\uff0c\u5c31\u662f\u5b83\u7684\u540d\u5b57\uff0c\u5373add\n\u4e24\u4e2aparams\uff0c\u5c31\u662f\u5b83\u7684\u53c2\u6570\uff0c\u5373","[a, b]","\n\u4e00\u5757body\uff0c\u4e5f\u5c31\u662f\u5927\u62ec\u53f7\u5185\u7684\u4e00\u5806\u4e1c\u897f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"add\u6ca1\u529e\u6cd5\u7ee7\u7eed\u62c6\u4e0b\u53bb\u4e86\uff0c\u5b83\u662f\u4e00\u4e2a\u6700\u57fa\u7840Identifier\uff08\u6807\u5fd7\uff09\u5bf9\u8c61\uff0c\u7528\u6765\u4f5c\u4e3a\u51fd\u6570\u7684\u552f\u4e00\u6807\u5fd7\uff0c\u5c31\u50cf\u4eba\u7684\u59d3\u540d\u4e00\u6837\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n    name: 'add'\n    type: 'identifier'\n    ...\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"params\u7ee7\u7eed\u62c6\u4e0b\u53bb\uff0c\u5176\u5b9e\u662f\u4e24\u4e2aIdentifier\u7ec4\u6210\u7684\u6570\u7ec4\u3002\u4e4b\u540e\u4e5f\u6ca1\u529e\u6cd5\u62c6\u4e0b\u53bb\u4e86\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[\n    {\n        name: 'a'\n        type: 'identifier'\n        ...\n    },\n    {\n        name: 'b'\n        type: 'identifier'\n        ...\n    }\n]\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"body\u5176\u5b9e\u662f\u4e00\u4e2aBlockStatement\uff08\u5757\u72b6\u57df\uff09\u5bf9\u8c61\uff0c\u7528\u6765\u8868\u793a\u662f{return a + b}",(0,r.kt)("br",null),"\u6253\u5f00Blockstatement\uff0c\u91cc\u9762\u85cf\u7740\u4e00\u4e2aReturnStatement\uff08Return\u57df\uff09\u5bf9\u8c61\uff0c\u7528\u6765\u8868\u793areturn a + b")),(0,r.kt)("h3",{id:"\u7ee7\u7eed\u6253\u5f00returnstatement"},"\u7ee7\u7eed\u6253\u5f00ReturnStatement"),(0,r.kt)("p",null,"\u91cc\u9762\u662f\u4e00\u4e2aBinaryExpression(\u4e8c\u9879\u5f0f)\u5bf9\u8c61\uff0c\u7528\u6765\u8868\u793aa + b"),(0,r.kt)("p",null,"\u7ee7\u7eed\u6253\u5f00BinaryExpression\uff0c\u5b83\u6210\u4e86\u4e09\u90e8\u5206\uff0cleft\uff0coperator\uff0cright"),(0,r.kt)("p",null,"operator \u5373+,left \u91cc\u9762\u88c5\u7684\uff0c\u662fIdentifier\u5bf9\u8c61 a right \u91cc\u9762\u88c5\u7684\uff0c\u662fIdentifer\u5bf9\u8c61 b"),(0,r.kt)("p",null,"\u5c31\u8fd9\u6837\uff0c\u6211\u4eec\u628a\u4e00\u4e2a\u7b80\u5355\u7684add\u51fd\u6570\u62c6\u89e3\u5b8c\u6bd5\uff0c\u7528\u56fe\u8868\u793a\u5c31\u662f"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(51944).Z,width:"1080",height:"712"})),(0,r.kt)("h2",{id:"ast\u62bd\u8c61\u8bed\u6cd5\u6811\u6811\u5f62\u7ed3\u6784\u6765\u8868\u793a\u7f16\u7a0b\u8bed\u53e5\u5bf9\u8ba1\u7b97\u673a\u6765\u8bf4\u66f4\u52a0\u53cb\u597d\u7684\u8868\u73b0\u5f62\u5f0f"},"AST\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u6811\u5f62\u7ed3\u6784\u6765\u8868\u793a\u7f16\u7a0b\u8bed\u53e5,\u5bf9\u8ba1\u7b97\u673a\u6765\u8bf4\u66f4\u52a0\u53cb\u597d\u7684\u8868\u73b0\u5f62\u5f0f"),(0,r.kt)("p",null,"\u62bd\u8c61\u8bed\u6cd5\u6811(Abstract Syntax Tree)\uff0c\u662f\u4e00\u79cd\u6807\u51c6\u7684\u6811\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7406\u89e3\u4e3a\u53ef\u4ee5\u5c06\u4e00\u4e32\u4ee3\u7801\u89e3\u6790\u6210\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784\uff0c\u8fd9\u4e2a\u6811\u5f62\u7ed3\u6784\u4e0a\u9762\u6bcf\u4e2a\u8282\u70b9\u4ee3\u8868\u4e00\u79cd\u8bed\u6cd5\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a AST \u53ef\u4ee5\u7531\u5355\u4e00\u7684\u8282\u70b9\u6216\u662f\u6210\u767e\u4e0a\u5343\u4e2a\u8282\u70b9\u6784\u6210\u3002\u5b83\u4eec\u7ec4\u5408\u5728\u4e00\u8d77\u53ef\u4ee5\u63cf\u8ff0\u7528\u4e8e\u9759\u6001\u5206\u6790\u7684\u7a0b\u5e8f\u8bed\u6cd5\u3002"),(0,r.kt)("p",null,"\u5355\u5c42AST\u8282\u70b9\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  type: "BinaryExpression",\n  operator: ...,\n  left: {...},\n  right: {...}\n}\n \n// type\u662f\u8282\u70b9\u7684\u7c7b\u578b\uff0c\u6bd4\u5982"Program"\u3001"FunctionDeclaration"\u3001"ExpressionStatement"\u7b49\uff0c\u7c7b\u578b\n// \u6709\u5f88\u591a\u79cd\uff0c\u79cd\u8282\u70b9\u7c7b\u578b\u4f1a\u6709\u4e00\u4e9b\u9644\u52a0\u7684\u5c5e\u6027\u7528\u4e8e\u8fdb\u4e00\u6b65\u63cf\u8ff0\u8be5\u8282\u70b9\u7c7b\u578b\u3002\n// \u8282\u70b9\u7c7b\u578b\u79cd\u7c7b\u53c2\u89c1\uff1ahttps://blog.csdn.net/weixin_30576827/article/details/94938016\n')),(0,r.kt)("p",null,"\u6bcf\u4e2ajs\u5f15\u64ce\u90fd\u6709\u81ea\u5df1\u7684AST\u8bed\u6cd5\u89e3\u6790\u5668\uff0c\u6bd4\u5982chrome\u662fv8\u5f15\u64ce\uff0cnode\u4e5f\u662fv8\u5f15\u64ce\nAST\u8bed\u6cd5\u6811\u6bcf\u4e00\u5c42\u90fd\u62e5\u6709\u76f8\u540c\u7684\u7ed3\u6784\uff0c\u8fd9\u6837\u7684\u6bcf\u4e00\u5c42\u7ed3\u6784\u4e5f\u88ab\u53eb\u505a \u8282\u70b9\uff08Node\uff09\u3002"),(0,r.kt)("h2",{id:"js-parser\u89e3\u6790\u5668\u5c06javascript\u6e90\u7801\u8f6c\u5316\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811ast\u7684\u5de5\u5177\u53eb\u505ajs-parser\u89e3\u6790\u5668"},"JS Parser\u89e3\u6790\u5668,\u5c06JavaScript\u6e90\u7801",(0,r.kt)("inlineCode",{parentName:"h2"},"\u8f6c\u5316\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811(AST)\u7684\u5de5\u5177\u53eb\u505aJS Parser\u89e3\u6790\u5668\u3002")),(0,r.kt)("h3",{id:"\u5e38\u89c1\u7684ast-parser"},"\u5e38\u89c1\u7684AST parser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V8\u5185\u7f6e\u7684parser"),(0,r.kt)("li",{parentName:"ul"},"Espree\uff0c\u57fa\u4e8eesprima\uff0c\u7528\u4e8eeslint"),(0,r.kt)("li",{parentName:"ul"},"Acorn\uff0c\u53f7\u79f0\u662f\u76f8\u5bf9\u4e8eesprima\u6027\u80fd\u66f4\u4f18\uff0c\u4f53\u79ef\u66f4\u5c0f"),(0,r.kt)("li",{parentName:"ul"},"Babylon\uff0c\u51fa\u81eaacorn\uff0c\u7528\u4e8ebabel"),(0,r.kt)("li",{parentName:"ul"},"Babel-eslint\uff0cbabel\u56e2\u961f\u7ef4\u62a4\uff0c\u7528\u4e8e\u914d\u5408\u4f7f\u7528ESLint")),(0,r.kt)("p",null,"\u51e0\u4e2a\u91cd\u8981\u7684\u5305\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.babylon \u5c06js\u4ee3\u7801\u8f6c\u5316\u4e3aast\u8bed\u6cd5\u6811")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Babylon \u662f\u4e00\u4e2a\u89e3\u6790\u5668\uff0c\u5b83\u53ef\u4ee5\u5c06 JavaScript \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.\u8f6c\u6362 babel-traverse ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babel-traverse \u6a21\u5757\u5141\u8bb8\u4f60\u6d4f\u89c8\u3001\u5206\u6790\u548c\u4fee\u6539\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u3002\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3.\u751f\u6210 babel-generator\n\u6700\u540e\uff0cbabel-generator \u6a21\u5757\u7528\u6765\u5c06\u8f6c\u6362\u540e\u7684\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u8f6c\u6362\u4e3a JavaScript \u5b57\u7b26\u4e32\u3002")),(0,r.kt)("h3",{id:"js-parser\u7684\u89e3\u6790\u8fc7\u7a0b\u5305\u62ec\u4e24\u90e8\u5206"},"JS Parser\u7684\u89e3\u6790\u8fc7\u7a0b\u5305\u62ec\u4e24\u90e8\u5206:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.\u8bcd\u6cd5\u5206\u6790(Lexical Analysis)\uff1a\u5c06\u6574\u4e2a\u4ee3\u7801\u5b57\u7b26\u4e32\u5206\u5272\u6210\u6700\u5c0f\u8bed\u6cd5\u5355\u5143\u6570\u7ec4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8bed\u6cd5\u5355\u5143\u662f\u88ab\u89e3\u6790\u8bed\u6cd5\u5f53\u4e2d\u5177\u5907\u5b9e\u9645\u610f\u4e49\u7684\u6700\u5c0f\u5355\u5143\uff0c\u7b80\u5355\u7684\u6765\u7406\u89e3\u5c31\u662f\u81ea\u7136\u8bed\u8a00\u4e2d\u7684\u8bcd\u8bed\u3002\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.\u8bed\u6cd5\u5206\u6790(Syntax Analysis)\uff1a\u5728\u5206\u8bcd\u57fa\u7840\u4e0a\u5efa\u7acb\u5206\u6790\u8bed\u6cd5\u5355\u5143\u4e4b\u95f4\u7684\u5173\u7cfb")),(0,r.kt)("h3",{id:"js-parser\u7684\u89e3\u6790\u8bcd\u6cd5\u5206\u6790lexical-analysis"},"JS Parser\u7684\u89e3\u6790\uff1a\u8bcd\u6cd5\u5206\u6790(Lexical Analysis)"),(0,r.kt)("p",null,"Javascript \u4ee3\u7801\u4e2d\u7684\u8bed\u6cd5\u5355\u5143\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u8fd9\u4e48\u51e0\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5173\u952e\u5b57\uff1a\u4f8b\u5982 var\u3001let\u3001const\u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6807\u8bc6\u7b26\uff1a\u6ca1\u6709\u88ab\u5f15\u53f7\u62ec\u8d77\u6765\u7684\u8fde\u7eed\u5b57\u7b26\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u53d8\u91cf\uff0c\u4e5f\u53ef\u80fd\u662f if\u3001else \u8fd9\u4e9b\u5173\u952e\u5b57\uff0c\u53c8\u6216\u8005\u662f true\u3001false \u8fd9\u4e9b\u5185\u7f6e\u5e38\u91cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u7b97\u7b26\uff1a +\u3001-\u3001 *\u3001/ \u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u5b57\uff1a\u50cf\u5341\u516d\u8fdb\u5236\uff0c\u5341\u8fdb\u5236\uff0c\u516b\u8fdb\u5236\u4ee5\u53ca\u79d1\u5b66\u8868\u8fbe\u5f0f\u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b57\u7b26\u4e32\uff1a\u56e0\u4e3a\u5bf9\u8ba1\u7b97\u673a\u800c\u8a00\uff0c\u5b57\u7b26\u4e32\u7684\u5185\u5bb9\u4f1a\u53c2\u4e0e\u8ba1\u7b97\u6216\u663e\u793a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7a7a\u683c\uff1a\u8fde\u7eed\u7684\u7a7a\u683c\uff0c\u6362\u884c\uff0c\u7f29\u8fdb\u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u91ca\uff1a\u884c\u6ce8\u91ca\u6216\u5757\u6ce8\u91ca\u90fd\u662f\u4e00\u4e2a\u4e0d\u53ef\u62c6\u5206\u7684\u6700\u5c0f\u8bed\u6cd5\u5355\u5143")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\uff1a\u5927\u62ec\u53f7\u3001\u5c0f\u62ec\u53f7\u3001\u5206\u53f7\u3001\u5192\u53f7\u7b49"))),(0,r.kt)("h3",{id:"js-parser\u7684\u89e3\u6790\u8bed\u6cd5\u5206\u6790syntax-analysis"},"JS Parser\u7684\u89e3\u6790:\u8bed\u6cd5\u5206\u6790(Syntax Analysis)"),(0,r.kt)("p",null,"\u7ec4\u5408\u5206\u8bcd\u7684\u7ed3\u679c\uff0c\u786e\u5b9a\u8bcd\u8bed\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u786e\u5b9a\u8bcd\u8bed\u6700\u7ec8\u7684\u8868\u8fbe\u542b\u4e49\uff0c\u751f\u6210\u62bd\u8c61\u8bed\u6cd5\u6811\u3002"),(0,r.kt)("p",null,"\u4ee5\u8d4b\u503c\u8bed\u53e5\u4e3a\u4f8b\uff0c\u4f7f\u7528esprima\u6765\u89e3\u6790\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var a = 1;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1.\u8bcd\u6cd5\u5206\u6790\u7ed3\u679c\u5982\u4e0b"),"\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5206\u8bcd\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u6700\u5c0f\u7684\u8bed\u6cd5\u5355\u5143\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{\n        "type": "Keyword",\n        "value": "var"\n    },\n    {\n        "type": "Identifier",\n        "value": "a"\n    },\n    {\n        "type": "Punctuator",\n        "value": "="\n    },\n    {\n        "type": "Numeric",\n        "value": "1"\n    },\n    {\n        "type": "Punctuator",\n        "value": ";"\n    }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"2.\u8bed\u6cd5\u5206\u6790\u7ed3\u679c\u5982\u4e0b"),"\uff0c\u628a\u5206\u8bcd\u7684\u7ed3\u679c\u6309\u7167\u76f8\u4e92\u7684\u5173\u7cfb\u7ec4\u6210\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "Program",\n    "body": [{\n        "type": "VariableDeclaration",\n        "declarations": [{\n            "type": "VariableDeclarator",\n            "id": {\n                "type": "Identifier",\n                "name": "a"\n            },\n            "init": {\n                "type": "Literal",\n                "value": 1,\n                "raw": "1"\n            }\n        }],\n        "kind": "var"\n    }],\n    "sourceType": "script"\n}\n')))}d.isMDXComponent=!0},51944:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/\u56fe1-\u628a\u51fd\u6570\u62c6\u6210AST-7e9686f748266a55d85bf265b153b92d.png"}}]);