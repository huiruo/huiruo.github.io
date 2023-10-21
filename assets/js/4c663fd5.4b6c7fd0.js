"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=s(n),d=l,m=b["".concat(p,".").concat(d)]||b[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[b]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={title:"babel",sidebar_position:2},i=void 0,o={unversionedId:"build-AST-Babel/babel",id:"build-AST-Babel/babel",title:"babel",description:"\u4f8b\u5b50\uff1aes6--\x3ees5",source:"@site/programming-tech/build-AST-Babel/02-babel.md",sourceDirName:"build-AST-Babel",slug:"/build-AST-Babel/babel",permalink:"/build-AST-Babel/babel",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/build-AST-Babel/02-babel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"babel",sidebar_position:2},sidebar:"docs",previous:{title:"AST",permalink:"/build-AST-Babel/AST"},next:{title:"babel-\u7f16\u8bd1\u6784\u5efa\u4e4bmodules",permalink:"/build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa\u4e4bmodules"}},p={},s=[{value:"\u4f8b\u5b50\uff1a<code>es6--&gt;es5</code>",id:"\u4f8b\u5b50es6--es5",level:2},{value:"Babel\u662f\u4e00\u4e2a JavaScript \u7f16\u8bd1\u5668",id:"babel\u662f\u4e00\u4e2a-javascript-\u7f16\u8bd1\u5668",level:2},{value:"1.\u7b2c1\u6b65:Parser",id:"1\u7b2c1\u6b65parser",level:3},{value:"2.\u7b2c2\u6b65:transforming\u9636\u6bb5",id:"2\u7b2c2\u6b65transforming\u9636\u6bb5",level:3},{value:"3.Generator \u628a\u8f6c\u6362\u540e\u7684 AST \u751f\u6210\u65b0\u7684\u4ee3\u7801",id:"3generator-\u628a\u8f6c\u6362\u540e\u7684-ast-\u751f\u6210\u65b0\u7684\u4ee3\u7801",level:3},{value:"\u4e3e\u4f8b\u5b50",id:"\u4e3e\u4f8b\u5b50",level:3},{value:"\u7ecf\u8fc7\u7b2c1\u6b65\u5f97\u5230\u4e00\u4e2a\u5982\u4e0b\u7684\u5bf9\u8c61\uff1a",id:"\u7ecf\u8fc7\u7b2c1\u6b65\u5f97\u5230\u4e00\u4e2a\u5982\u4e0b\u7684\u5bf9\u8c61",level:3},{value:"\u4f8b,\u7b2c2\u6b65\u9aa4:plugins",id:"\u4f8b\u7b2c2\u6b65\u9aa4plugins",level:3},{value:"presets",id:"presets",level:3}],u={toc:s},b="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f8b\u5b50es6--es5"},"\u4f8b\u5b50\uff1a",(0,l.kt)("inlineCode",{parentName:"h2"},"es6--\x3ees5")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/huiruo/es6-to-es5"},"es6-to-es5")),(0,l.kt)("h2",{id:"babel\u662f\u4e00\u4e2a-javascript-\u7f16\u8bd1\u5668"},"Babel\u662f\u4e00\u4e2a JavaScript \u7f16\u8bd1\u5668"),(0,l.kt)("p",null,"Babel \u5de5\u4f5c\u8fc7\u7a0b\uff1a\u89e3\u6790\uff0c\u8f6c\u6362\uff0c\u751f\u6210,\u5c06ES6+\u8bed\u6cd5\u8f6c\u6362\u6210\u6d4f\u89c8\u5668\u80fd\u8bc6\u522b\u7684 ES5 \u8bed\u6cd5\n\u7528\u7b80\u4fbf\u7684\u56de\u7b54\u5c31\u662f\u4ee5\u4e0b\u8fd9\u4e2a\u601d\u8def\uff1a"),(0,l.kt)("h3",{id:"1\u7b2c1\u6b65parser"},"1.\u7b2c1\u6b65:Parser"),(0,l.kt)("p",null,"\u7b2c1\u6b65\u8f6c\u6362\u7684\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u9a8c\u8bc1\u8bed\u6cd5\u7684\u6b63\u786e\u6027\uff0c\u540c\u65f6\u7531\u5b57\u7b26\u4e32\u53d8\u4e3a\u5bf9\u8c61\u7ed3\u6784\u540e\u66f4\u6709\u5229\u4e8e\u7cbe\u51c6\u5730\u5206\u6790\u4ee5\u53ca\u8fdb\u884c\u4ee3\u7801\u7ed3\u6784\u8c03\u6574\u3002"),(0,l.kt)("p",null,"Parser \u89e3\u6790\u6211\u4eec\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a AST"),(0,l.kt)("mermaid",{value:"flowchart LR\nES6\u4ee3\u7801\u8f93\u5165--\x3ebabylon\u8fdb\u884c\u89e3\u6790--\x3e\u5f97\u5230AST"}),(0,l.kt)("h3",{id:"2\u7b2c2\u6b65transforming\u9636\u6bb5"},"2.\u7b2c2\u6b65:transforming\u9636\u6bb5"),(0,l.kt)("p",null,"plugin\u7528babel-traverse\u5bf9AST\u6811\u8fdb\u884c\u904d\u5386\u8f6c\u8bd1--\x3e\u5f97\u5230\u65b0\u7684AST\u6811"),(0,l.kt)("p",null,"\u7b2c2\u6b65\u539f\u7406\u662f\u904d\u5386\u8fd9\u4e2a\u5bf9\u8c61\u6240\u63cf\u8ff0\u7684\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u9047\u5230\u54ea\u91cc\u9700\u8981\u505a\u4e00\u4e0b\u6539\u53d8\uff0c\u5c31\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u8fdb\u884c\u64cd\u4f5c"),(0,l.kt)("p",null,"Transformer \u5229\u7528\u6211\u4eec\u914d\u7f6e\u597d\u7684 plugins/presets \u628a Parser \u751f\u6210\u7684 AST \u8f6c\u53d8\u4e3a \u65b0\u7684 AST\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5728.babelrc \u91cc\u914d\u7f6e\u7684 presets \u548c plugins \u90fd\u662f\u5728\u7b2c 2 \u6b65\u5de5\u4f5c\u7684\u3002\n")),(0,l.kt)("h3",{id:"3generator-\u628a\u8f6c\u6362\u540e\u7684-ast-\u751f\u6210\u65b0\u7684\u4ee3\u7801"},"3.Generator \u628a\u8f6c\u6362\u540e\u7684 AST \u751f\u6210\u65b0\u7684\u4ee3\u7801"),(0,l.kt)("p",null,"\u9012\u5f52\u904d\u5386\u8fd9\u9897\u8bed\u6cd5\u6811\uff0c\u7136\u540e\u751f\u6210\u76f8\u5e94\u7684\u4ee3\u7801,\u4ee3\u7801\u751f\u6210\u6b65\u9aa4\u628a\u6700\u7ec8\uff08\u7ecf\u8fc7\u4e00\u7cfb\u5217\u8f6c\u6362\u4e4b\u540e\uff09\u7684AST\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684\u4ee3\u7801\uff0c\u540c\u65f6\u8fd8\u4f1a\u521b\u5efa\u6e90\u7801\u6620\u5c04\uff08source maps\uff09;",(0,l.kt)("br",null),"\u4ee3\u7801\u751f\u6210\u5176\u5b9e\u5f88\u7b80\u5355\uff1a\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u6574\u4e2a AST\uff0c\u7136\u540e\u6784\u5efa\u53ef\u4ee5\u8868\u793a\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("h3",{id:"\u4e3e\u4f8b\u5b50"},"\u4e3e\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"if (1 > 0) {\n    alert('hi');\n}\n")),(0,l.kt)("h3",{id:"\u7ecf\u8fc7\u7b2c1\u6b65\u5f97\u5230\u4e00\u4e2a\u5982\u4e0b\u7684\u5bf9\u8c61"},"\u7ecf\u8fc7\u7b2c1\u6b65\u5f97\u5230\u4e00\u4e2a\u5982\u4e0b\u7684\u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "Program",                          // \u7a0b\u5e8f\u6839\u8282\u70b9\n  "body": [                                   // \u4e00\u4e2a\u6570\u7ec4\u5305\u542b\u6240\u6709\u7a0b\u5e8f\u7684\u9876\u5c42\u8bed\u53e5\n    {\n      "type": "IfStatement",                  // \u4e00\u4e2aif\u8bed\u53e5\u8282\u70b9\n      "test": {                               // if\u8bed\u53e5\u7684\u5224\u65ad\u6761\u4ef6\n        "type": "BinaryExpression",           // \u4e00\u4e2a\u53cc\u5143\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8282\u70b9\n        "operator": ">",                      // \u8fd0\u7b97\u8868\u8fbe\u5f0f\u7684\u8fd0\u7b97\u7b26\n        "left": {                             // \u8fd0\u7b97\u7b26\u5de6\u4fa7\u503c\n          "type": "Literal",                  // \u4e00\u4e2a\u5e38\u91cf\u8868\u8fbe\u5f0f\n          "value": 1                          // \u5e38\u91cf\u8868\u8fbe\u5f0f\u7684\u5e38\u91cf\u503c\n        },\n        "right": {                            // \u8fd0\u7b97\u7b26\u53f3\u4fa7\u503c\n          "type": "Literal",\n          "value": 0\n        }\n      },\n      "consequent": {                         // if\u8bed\u53e5\u6761\u4ef6\u6ee1\u8db3\u65f6\u7684\u6267\u884c\u5185\u5bb9\n        "type": "BlockStatement",             // \u7528{}\u5305\u56f4\u7684\u4ee3\u7801\u5757\n        "body": [                             // \u4ee3\u7801\u5757\u5185\u7684\u8bed\u53e5\u6570\u7ec4\n          {\n            "type": "ExpressionStatement",    // \u4e00\u4e2a\u8868\u8fbe\u5f0f\u8bed\u53e5\u8282\u70b9\n            "expression": {\n              "type": "CallExpression",       // \u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u8868\u8fbe\u5f0f\u8282\u70b9\n              "callee": {                     // \u88ab\u8c03\u7528\u8005\n                "type": "Identifier",         // \u4e00\u4e2a\u6807\u8bc6\u7b26\u8868\u8fbe\u5f0f\u8282\u70b9\n                "name": "alert"\n              },\n              "arguments": [                  // \u8c03\u7528\u53c2\u6570\n                {\n                  "type": "Literal",\n                  "value": "hi"\n                }\n              ]\n            }\n          }\n        ]\n      },\n      "alternative": null                     // if\u8bed\u53e5\u6761\u4ef6\u672a\u6ee1\u8db3\u65f6\u7684\u6267\u884c\u5185\u5bb9\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"\u7528\u56fe\u50cf\u66f4\u7b80\u5355\u5730\u8868\u8fbe\u4e0a\u9762\u7684\u7ed3\u6784\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(28081).Z,width:"455",height:"280"})),(0,l.kt)("h3",{id:"\u4f8b\u7b2c2\u6b65\u9aa4plugins"},"\u4f8b,\u7b2c2\u6b65\u9aa4:plugins"),(0,l.kt)("p",null,"\u63d2\u4ef6\u5e94\u7528\u4e8e babel \u7684\u8f6c\u8bd1\u8fc7\u7a0b\uff0c\u5c24\u5176\u662f\u7b2c\u4e8c\u4e2a\u9636\u6bb5 transforming\uff0c\u5982\u679c\u8fd9\u4e2a\u9636\u6bb5\u4e0d\u4f7f\u7528\u4efb\u4f55\u63d2\u4ef6\uff0c\u90a3\u4e48 babel \u4f1a\u539f\u6837\u8f93\u51fa\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"transforming\u9636\u6bb5\u4f7f\u7528\u7684\u63d2\u4ef6\uff0c\u56e0\u4e3a transform \u63d2\u4ef6\u4f1a\u81ea\u52a8\u4f7f\u7528\u5bf9\u5e94\u7684\u8bcd\u6cd5\u63d2\u4ef6\uff0c\u6240\u4ee5 parsing \u9636\u6bb5\u7684\u63d2\u4ef6\u4e0d\u9700\u8981\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"presets"},"presets"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u81ea\u884c\u914d\u7f6e\u8f6c\u8bd1\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u5404\u7c7b\u63d2\u4ef6\uff0c\u90a3\u592a\u75db\u82e6\u4e86\uff0c\u6240\u4ee5 babel \u5b98\u65b9\u5e2e\u6211\u4eec\u505a\u4e86\u4e00\u4e9b\u9884\u8bbe\u7684\u63d2\u4ef6\u96c6\uff0c"),(0,l.kt)("p",null,"\u79f0\u4e4b\u4e3a preset\uff0c\u8fd9\u6837\u6211\u4eec\u53ea\u9700\u8981\u4f7f\u7528\u5bf9\u5e94\u7684 preset \u5c31\u53ef\u4ee5\u4e86\u3002\nes20xx \u7684 preset \u53ea\u8f6c\u8bd1\u8be5\u5e74\u4efd\u6279\u51c6\u7684\u6807\u51c6\uff0c\u800c env \u5219\u4ee3\u6307\u6700\u65b0\u7684\u6807\u51c6\uff0c\u5305\u62ec\u4e86 latest \u548c es20xx \u5404\u5e74\u4efd,\u4ee5 JS \u6807\u51c6\u4e3a\u4f8b\uff0cbabel \u63d0\u4f9b\u4e86\u5982\u4e0b\u7684\u4e00\u4e9b preset\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* es2015\n* es2016\n* es2017\n* env\n")))}c.isMDXComponent=!0},28081:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u56fe2-\u63cf\u8ff0AST-43d9b491a71b4018a88283c7a61dca1b.png"}}]);