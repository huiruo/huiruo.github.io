"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"JavaScript/String\u65b9\u6cd5/match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4",id:"JavaScript/String\u65b9\u6cd5/match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4",title:"match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4",description:"js match()\u65b9\u6cd5",source:"@site/programming-tech/JavaScript/02-String\u65b9\u6cd5/02-match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4.md",sourceDirName:"JavaScript/02-String\u65b9\u6cd5",slug:"/JavaScript/String\u65b9\u6cd5/match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4",permalink:"/JavaScript/String\u65b9\u6cd5/match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/02-String\u65b9\u6cd5/02-match-\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"indexOf-lastIndexOf",permalink:"/JavaScript/String\u65b9\u6cd5/indexOf-lastIndexOf"},next:{title:"replace-\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u503c",permalink:"/JavaScript/String\u65b9\u6cd5/replace-\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u503c"}},c={},s=[{value:"js match()\u65b9\u6cd5",id:"js-match\u65b9\u6cd5",level:2},{value:"\u8fd4\u56de\u503c\uff1a\u5b83\u7684\u8f93\u51fa\u7ed3\u5728\u4e0d\u662f\u5168\u5c40\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u548cexec\u65b9\u6cd5\u7684\u7ed3\u679c\u4e00\u81f4",id:"\u8fd4\u56de\u503c\u5b83\u7684\u8f93\u51fa\u7ed3\u5728\u4e0d\u662f\u5168\u5c40\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u548cexec\u65b9\u6cd5\u7684\u7ed3\u679c\u4e00\u81f4",level:3},{value:"\u5982\u679c\u91c7\u7528\u5168\u5c40\u5339\u914d\uff0c\u5219\u4e0d\u8fd4\u56de\u4efb\u4f55\u548c\u5176\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u53ea\u8fd4\u56de\u5339\u914d\u7684\u7ed3\u679c\u3002",id:"\u5982\u679c\u91c7\u7528\u5168\u5c40\u5339\u914d\u5219\u4e0d\u8fd4\u56de\u4efb\u4f55\u548c\u5176\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u4fe1\u606f\u53ea\u8fd4\u56de\u5339\u914d\u7684\u7ed3\u679c",level:3},{value:"\u91c7\u7528\u5168\u5c40\u5339\u914d,\u4e0d\u91c7\u7528\u5168\u5c40\u5339\u914d",id:"\u91c7\u7528\u5168\u5c40\u5339\u914d\u4e0d\u91c7\u7528\u5168\u5c40\u5339\u914d",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"js-match\u65b9\u6cd5"},"js match()\u65b9\u6cd5"),(0,a.kt)("p",null,"match()\u53ef\u4ee5\u5728\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u7684\u503c\uff0c\u6216\u8005\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5f0f\u6765\u641c\u7d22\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u5339\u914d\u7684\u503c\u7684\u6570\u7ec4\uff0c\u5982\u679c\u6ca1\u6709\u5339\u914d\u7684\u503c\uff0c\u5219\u8fd4\u56de null\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a\u6b63\u5219\u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u6765\u5339\u914d\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u503c\u5b83\u7684\u8f93\u51fa\u7ed3\u5728\u4e0d\u662f\u5168\u5c40\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u548cexec\u65b9\u6cd5\u7684\u7ed3\u679c\u4e00\u81f4"},"\u8fd4\u56de\u503c\uff1a\u5b83\u7684\u8f93\u51fa\u7ed3\u5728\u4e0d\u662f\u5168\u5c40\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u548cexec\u65b9\u6cd5\u7684\u7ed3\u679c\u4e00\u81f4"),(0,a.kt)("p",null,"\u5373\u4e00\u4e2a\u6570\u7ec4\u5e76\u5e26\u6709\u989d\u5916\u7684\u5c5e\u6027:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"result\u8fd4\u56de\u503c\u6709\u4e24\u4e2a\u5c5e\u6027\u53ef\u4ee5\u8bb0\u4e0b\uff1a\ninput: \u539f\u59cb\u5b57\u7b26\u4e32\uff0c\u5373 str;\nindex: \u5339\u914d\u5230\u7684\u5b57\u7b26\u4f4d\u4e8e\u539f\u59cb\u5b57\u7b26\u4e32\u7684\u7d22\u5f15\u503c, \u7d22\u5f15\u521d\u59cb\u503c\u4e3a0\uff1b\nlastIndex: \u6b63\u5219\u8868\u8fbe\u5f0f\u5c5e\u6027,\u4e0b\u4e00\u6b21\u5339\u914d\u5f00\u59cb\u7684\u4f4d\u7f6e\n")),(0,a.kt)("h3",{id:"\u5982\u679c\u91c7\u7528\u5168\u5c40\u5339\u914d\u5219\u4e0d\u8fd4\u56de\u4efb\u4f55\u548c\u5176\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u4fe1\u606f\u53ea\u8fd4\u56de\u5339\u914d\u7684\u7ed3\u679c"},"\u5982\u679c\u91c7\u7528\u5168\u5c40\u5339\u914d\uff0c\u5219\u4e0d\u8fd4\u56de\u4efb\u4f55\u548c\u5176\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u53ea\u8fd4\u56de\u5339\u914d\u7684\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nlet str = 'hello huxiao6, balabala, hello huDi, 724';\nlet re = /hello hu(\\w+)/g;\n\nlet result = str.match(re);\nconsole.log('\u52a0\u4e86g\u5168\u5c40\u5339\u914d\uff1a',result) // [ 'hello huxiao6', 'hello huDi' ]\n")),(0,a.kt)("h3",{id:"\u91c7\u7528\u5168\u5c40\u5339\u914d\u4e0d\u91c7\u7528\u5168\u5c40\u5339\u914d"},"\u91c7\u7528\u5168\u5c40\u5339\u914d,\u4e0d\u91c7\u7528\u5168\u5c40\u5339\u914d"),(0,a.kt)("p",null,"\u5b83\u7684\u8f93\u51fa\u7ed3\u679c\u5728\u4e0d\u662f\u5168\u5c40\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u548cexec\u65b9\u6cd5\u7684\u7ed3\u679c\u4e00\u81f4\u5373\u4e00\u4e2a\u6570\u7ec4\u5e76\u5e26\u6709\u989d\u5916\u7684\u5c5e\u6027\uff0c"),(0,a.kt)("p",null,"\u5982\u679c\u91c7\u7528\u5168\u5c40\u5339\u914d\uff0c\u5219\u4e0d\u8fd4\u56de\u4efb\u4f55\u548c\u5176\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u53ea\u8fd4\u56de\u5339\u914d\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5168\u5c40\u5339\u914d\u4e0b\u7684\u65f6\u5019\uff0c\u5b83\u4e0d\u540c\u4e8eexec\u65b9\u6cd5\uff0c\u5b83\u4f1a\u4e00\u6b21\u6027\u5c06\u6240\u6709\u5339\u914d\u7ed3\u679c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\uff0c"),(0,a.kt)("p",null,"\u4e14\u8fd9\u4e2a\u6570\u7ec4\u6ca1\u6709\u5176\u4ed6\u5c5e\u6027\u7528\u6765\u6307\u5411\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u7684\u4fe1\u606f\uff0c\u800cexec\u65b9\u6cd5\u5728\u5168\u5c40\u5339\u914d\u4e0b\u6bcf\u6b21\u8fd4\u56de\u7684\u4f9d\u7136\u662f\u672c\u6b21\u5339\u914d\u7684\u7ed3\u679c\u6570\u7ec4\uff0c"),(0,a.kt)("p",null,"\u4e14\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u53ea\u5305\u542b\u672c\u6b21\u5339\u914d\u4fe1\u606f\uff0c\u540c\u65f6\u53c8\u62e5\u6709\u6307\u5411\u88ab\u5339\u914d\u5b57\u7b26\u4e32\u7684\u4fe1\u606f\uff0c\u5373match\u65b9\u6cd5\u5728\u5168\u5c40\u5339\u914d\u4e0b\u4e00\u6b21\u6027\u8fd4\u56de\u4e86\u6240\u6709\u5339\u914d\u7ed3\u679c\uff0c"),(0,a.kt)("p",null,"\u800cexec\u5728\u5168\u5c40\u5339\u914d\u4e0b\u8fd4\u56de\u7684\u4f9d\u7136\u662f\u5f53\u6b21\u5339\u914d\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const reg3=/(\\w)s(\\w)/g;\nconst str4=\"ws1estqsa\";\nconsole.log('\u5168\u5c40\u5339\u914d\uff1a',str4.match(reg3));\n/*\n\u5168\u5c40\u5339\u914d\uff1a (3)\xa0['ws1', 'est', 'qsa']\n*/\n\nconsole.log('\u975e\u5168\u5c40\u5339\u914d\u4ee3\u7801===>')\n\nconst reg2=/(\\w)s(\\w)/;\nconst str2=\"ws1esr\";\nconst result2=str2.match(reg2);\nlet i=0;\n\nwhile(result2){\n    i++;\n    if(i<=4){\n        console.log(result2);\n        console.log(\"lastIndex:\"+reg2.lastIndex);\n    }else{\n        break;\n    }\n}\n\n/*\n\u975e\u5168\u5c40\u5339\u914d\u4ee3\u7801===>\n[ 'ws1', 'w', '1', index: 0, input: 'ws1esr', groups: undefined ]\nlastIndex:0\n[ 'ws1', 'w', '1', index: 0, input: 'ws1esr', groups: undefined ]\nlastIndex:0\n[ 'ws1', 'w', '1', index: 0, input: 'ws1esr', groups: undefined ]\nlastIndex:0\n[ 'ws1', 'w', '1', index: 0, input: 'ws1esr', groups: undefined ]\nlastIndex:0\n* */\n")))}m.isMDXComponent=!0}}]);