"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[6091],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,s=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),u=c(t),h=o,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?a.createElement(g,l(l({ref:e},p),{},{components:t})):a.createElement(g,l({ref:e},p))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[u]="string"==typeof n?n:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},75050:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={title:"this-\u7bad\u5934\u51fd\u6570",sidebar_position:8},l=void 0,i={unversionedId:"JavaScript/this-\u7bad\u5934\u51fd\u6570",id:"JavaScript/this-\u7bad\u5934\u51fd\u6570",title:"this-\u7bad\u5934\u51fd\u6570",description:"this--\x3e\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5c5e\u7684\u4f5c\u7528\u57df",source:"@site/programming-tech/JavaScript/04-this-\u7bad\u5934\u51fd\u6570.md",sourceDirName:"JavaScript",slug:"/JavaScript/this-\u7bad\u5934\u51fd\u6570",permalink:"/JavaScript/this-\u7bad\u5934\u51fd\u6570",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/04-this-\u7bad\u5934\u51fd\u6570.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"this-\u7bad\u5934\u51fd\u6570",sidebar_position:8},sidebar:"docs",previous:{title:"set\u6570\u636e\u7c7b\u578b",permalink:"/JavaScript/set\u6570\u636e\u7c7b\u578b"},next:{title:"window.history",permalink:"/JavaScript/window.history"}},s={},c=[{value:"this--&gt;\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5c5e\u7684\u4f5c\u7528\u57df",id:"this--\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5c5e\u7684\u4f5c\u7528\u57df",level:2},{value:"this\u8bbe\u8ba1\u548c\u6570\u636e\u7ed3\u6784\u7684\u5173\u7cfb",id:"this\u8bbe\u8ba1\u548c\u6570\u636e\u7ed3\u6784\u7684\u5173\u7cfb",level:2},{value:"JavaScript \u8bed\u8a00\u4e4b\u6240\u4ee5\u6709this\u7684\u8bbe\u8ba1\uff0c\u8ddf\u5185\u5b58\u91cc\u9762\u7684\u6570\u636e\u7ed3\u6784\u6709\u5173\u7cfb\u3002",id:"javascript-\u8bed\u8a00\u4e4b\u6240\u4ee5\u6709this\u7684\u8bbe\u8ba1\u8ddf\u5185\u5b58\u91cc\u9762\u7684\u6570\u636e\u7ed3\u6784\u6709\u5173\u7cfb",level:3},{value:"\u95ee\u9898\u5728\u4e8e\u5c5e\u6027\u7684\u503c\u53ef\u80fd\u662f\u4e00\u4e2a\u51fd\u6570",id:"\u95ee\u9898\u5728\u4e8e\u5c5e\u6027\u7684\u503c\u53ef\u80fd\u662f\u4e00\u4e2a\u51fd\u6570",level:3},{value:"this\u6307\u5411",id:"this\u6307\u5411",level:2},{value:"\u7bad\u5934\u51fd\u6570\u7684this",id:"\u7bad\u5934\u51fd\u6570\u7684this",level:3},{value:"\u51fd\u6570\u4f5c\u4e3a\u666e\u901a\u51fd\u6570,\u5728\u5168\u5c40\u73af\u5883\u4e0b\u8fdb\u884c\u8c03\u7528\u65f6\uff0cthis\u6307\u7684\u65f6window",id:"\u51fd\u6570\u4f5c\u4e3a\u666e\u901a\u51fd\u6570\u5728\u5168\u5c40\u73af\u5883\u4e0b\u8fdb\u884c\u8c03\u7528\u65f6this\u6307\u7684\u65f6window",level:3},{value:"\u5728\u4e8b\u4ef6\u4e2d\uff0cthis \u6307\u5411\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u5bf9\u8c61",id:"\u5728\u4e8b\u4ef6\u4e2dthis-\u6307\u5411\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u5bf9\u8c61",level:3},{value:"\u4f5c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u65b9\u6cd5\u8c03\u7528\u65f6\uff0cthis \u6307\u5411\u8be5\u5bf9\u8c61\u3002",id:"\u4f5c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u65b9\u6cd5\u8c03\u7528\u65f6this-\u6307\u5411\u8be5\u5bf9\u8c61",level:3},{value:"\u5728\u8c03\u7528\u51fd\u6570\u65f6\u4f7f\u7528new,this \u6307\u5411 new \u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61\u3002",id:"\u5728\u8c03\u7528\u51fd\u6570\u65f6\u4f7f\u7528newthis-\u6307\u5411-new-\u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61",level:3},{value:"\u901a\u8fc7\u5bf9\u8c61\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\u7684\u8fc7\u7a0b",id:"\u901a\u8fc7\u5bf9\u8c61\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\u7684\u8fc7\u7a0b",level:3},{value:"\u5982\u679c apply\u3001call \u6216 bind \u65b9\u6cd5",id:"\u5982\u679c-applycall-\u6216-bind-\u65b9\u6cd5",level:3},{value:"\u7bad\u5934\u51fd\u6570\u548c\u51fd\u6570\u79cd\u7c7b",id:"\u7bad\u5934\u51fd\u6570\u548c\u51fd\u6570\u79cd\u7c7b",level:2},{value:"\u4e09\u79cd\u51fd\u6570",id:"\u4e09\u79cd\u51fd\u6570",level:3},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:3},{value:"this\u9898\u76ee",id:"this\u9898\u76ee",level:2}],p={toc:c},u="wrapper";function d(n){let{components:e,...r}=n;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"this--\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5c5e\u7684\u4f5c\u7528\u57df"},"this--\x3e\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5c5e\u7684\u4f5c\u7528\u57df"),(0,o.kt)("p",null,"JavaScript\u4e2dthis \u6307\u7684\u662f\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5c5e\u7684\u4f5c\u7528\u57df\u3002\u6240\u4ee5\u51fd\u6570\u4e2d\u7684this\u662f\u5728\u8fd0\u884c\u65f6\u51b3\u5b9a\u7684\u800c\u4e0d\u662f\u5b9a\u4e49\u65f6\u3002\u6ce8\u610f\u4e0d\u662f\u4e0a\u4e0b\u6587\uff0c\u56e0\u4e3a\u4e0a\u4e0b\u6587\u8fd8\u5305\u62ec\u5176\u4ed6\u7684"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"../parsing-interpretation-compilation/%E6%AD%A5%E9%AA%A43-%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87-%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E6%A0%88-this"},"\u6267\u884c\u4e0a\u4e0b\u6587-\u51fd\u6570\u8c03\u7528\u6808-this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var a1 = 1\nvar fn = function () {\n  let b1 = 1\n  debugger\n  var b2 = 1\n  console.log(a1); // 1\n  console.log(this.a1); // 1\n  console.log(this); // window\n};\nfn()\n\nvar obj = {\n  foo: function () { \n    var test1 = 1\n    debugger\n    console.log(this) \n    console.log(this.bar) \n  },\n  test:'hello'\n}\n\nobj.foo()\n")),(0,o.kt)("p",null,"\u5b9e\u4f8b\u4ee3\u7801\u4e2d\uff0c\u51fd\u6570\u4f53\u91cc\u9762\u4f7f\u7528\u4e86\u53d8\u91cfa1\u3002\u8be5\u53d8\u91cf\u7531\u8fd0\u884c\u73af\u5883\u63d0\u4f9b\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u95ee\u9898\u5c31\u6765\u4e86\uff0c\u7531\u4e8e\u51fd\u6570\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u8fd0\u884c\u73af\u5883\u6267\u884c\uff0c\u6240\u4ee5\u9700\u8981\u6709\u4e00\u79cd\u673a\u5236\uff0c\u80fd\u591f\u5728\u51fd\u6570\u4f53\u5185\u90e8\u83b7\u5f97\u5f53\u524d\u7684\u8fd0\u884c\u73af\u5883\uff08context\uff09\u3002\u6240\u4ee5\uff0cthis\u5c31\u51fa\u73b0\u4e86\uff0c\u5b83\u7684\u8bbe\u8ba1\u76ee\u7684\u5c31\u662f\u5728\u51fd\u6570\u4f53\u5185\u90e8\uff0c\u6307\u4ee3\u51fd\u6570\u6240\u5c5e\u7684\u4f5c\u7528\u57df\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(31408).Z,width:"1056",height:"333"})),(0,o.kt)("h2",{id:"this\u8bbe\u8ba1\u548c\u6570\u636e\u7ed3\u6784\u7684\u5173\u7cfb"},"this\u8bbe\u8ba1\u548c\u6570\u636e\u7ed3\u6784\u7684\u5173\u7cfb"),(0,o.kt)("p",null,"\u56e0\u4e3afunction\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4e0d\u540c\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u770b\u5230this\u8868\u793a\u8fd0\u884c\u73af\u5883\uff0c\u4f46\u4e0d\u662f\u6267\u884c\u4e0a\u4e0b\u6587,\u56e0\u4e3athis\u4e0d\u5305\u62ectest1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {\n  foo: function () { \n    var test1 = 1\n    console.log(this.bar) \n  },\n  bar: 1\n};\n\nvar fn = obj.foo;\nvar bar = 2;\n\ndebugger\nobj.foo() // 1\nfn() // 2\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(59378).Z,width:"926",height:"615"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eobj.foo()\u6765\u8bf4\uff0cfoo\u8fd0\u884c\u5728obj\u73af\u5883\uff0c\u6240\u4ee5this\u6307\u5411obj\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8efoo()\u6765\u8bf4\uff0cfoo\u8fd0\u884c\u5728\u5168\u5c40\u73af\u5883\uff0c\u6240\u4ee5this\u6307\u5411\u5168\u5c40\u73af\u5883\u3002\u6240\u4ee5\uff0c\u4e24\u8005\u7684\u8fd0\u884c\u7ed3\u679c\u4e0d\u4e00\u6837\u3002")),(0,o.kt)("p",null,"\u8fd9\u79cd\u89e3\u91ca\u6ca1\u9519\uff0c\u4f46\u662f\u6559\u79d1\u4e66\u5f80\u5f80\u4e0d\u544a\u8bc9\u4f60\uff0c\u4e3a\u4ec0\u4e48\u4f1a\u8fd9\u6837\uff1f\u4e5f\u5c31\u662f\u8bf4\uff0c\u51fd\u6570\u7684\u8fd0\u884c\u73af\u5883\u5230\u5e95\u662f\u600e\u4e48\u51b3\u5b9a\u7684\uff1f\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4e3a\u4ec0\u4e48obj.foo()\u5c31\u662f\u5728obj\u73af\u5883\u6267\u884c\uff0c\u800c\u4e00\u65e6var foo = obj.foo\uff0cfoo()\u5c31\u53d8\u6210\u5728\u5168\u5c40\u73af\u5883\u6267\u884c\uff1f"),(0,o.kt)("h3",{id:"javascript-\u8bed\u8a00\u4e4b\u6240\u4ee5\u6709this\u7684\u8bbe\u8ba1\u8ddf\u5185\u5b58\u91cc\u9762\u7684\u6570\u636e\u7ed3\u6784\u6709\u5173\u7cfb"},"JavaScript \u8bed\u8a00\u4e4b\u6240\u4ee5\u6709this\u7684\u8bbe\u8ba1\uff0c\u8ddf\u5185\u5b58\u91cc\u9762\u7684\u6570\u636e\u7ed3\u6784\u6709\u5173\u7cfb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var obj = { foo:  5 };\n")),(0,o.kt)("p",null,"JavaScript \u5f15\u64ce\u4f1a\u5148\u5728\u5185\u5b58\u91cc\u9762\uff0c\u751f\u6210\u4e00\u4e2a\u5bf9\u8c61{ foo: 5 }\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5185\u5b58\u5730\u5740\u8d4b\u503c\u7ed9\u53d8\u91cfobj\u3002"),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u53d8\u91cfobj\u662f\u4e00\u4e2a\u5730\u5740\uff08reference\uff09\u3002\u540e\u9762\u5982\u679c\u8981\u8bfb\u53d6obj.foo\uff0c\u5f15\u64ce\u5148\u4eceobj\u62ff\u5230\u5185\u5b58\u5730\u5740\uff0c\u7136\u540e\u518d\u4ece\u8be5\u5730\u5740\u8bfb\u51fa\u539f\u59cb\u7684\u5bf9\u8c61\uff0c\u8fd4\u56de\u5b83\u7684foo\u5c5e\u6027\u3002"),(0,o.kt)("p",null,"\u539f\u59cb\u7684\u5bf9\u8c61\u4ee5\u5b57\u5178\u7ed3\u6784\u4fdd\u5b58\uff0c\u6bcf\u4e00\u4e2a\u5c5e\u6027\u540d\u90fd\u5bf9\u5e94\u4e00\u4e2a\u5c5e\u6027\u63cf\u8ff0\u5bf9\u8c61\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4e0a\u9762\u4f8b\u5b50\u7684foo\u5c5e\u6027\uff0c\u5b9e\u9645\u4e0a\u662f\u4ee5\u4e0b\u9762\u7684\u5f62\u5f0f\u4fdd\u5b58\u7684\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff0cfoo\u5c5e\u6027\u7684\u503c\u4fdd\u5b58\u5728\u5c5e\u6027\u63cf\u8ff0\u5bf9\u8c61\u7684value\u5c5e\u6027\u91cc\u9762\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  foo: {\n    [[value]]: 5\n    [[writable]]: true\n    [[enumerable]]: true\n    [[configurable]]: true\n  }\n}\n")),(0,o.kt)("h3",{id:"\u95ee\u9898\u5728\u4e8e\u5c5e\u6027\u7684\u503c\u53ef\u80fd\u662f\u4e00\u4e2a\u51fd\u6570"},"\u95ee\u9898\u5728\u4e8e\u5c5e\u6027\u7684\u503c\u53ef\u80fd\u662f\u4e00\u4e2a\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var obj = { foo: function () {} };\n")),(0,o.kt)("p",null,"\u8fd9\u65f6\uff0c\u5f15\u64ce\u4f1a\u5c06\u51fd\u6570\u5355\u72ec\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u7136\u540e\u518d\u5c06\u51fd\u6570\u7684\u5730\u5740\u8d4b\u503c\u7ed9foo\u5c5e\u6027\u7684value\u5c5e\u6027\u3002\n",(0,o.kt)("img",{src:t(77497).Z,width:"774",height:"349"}),"\n\u518d\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var f = function () {};\nvar obj = { f: f };\n\n// \u5355\u72ec\u6267\u884c\nf()\n\n// obj \u73af\u5883\u6267\u884c\nobj.f()\n")),(0,o.kt)("h2",{id:"this\u6307\u5411"},"this\u6307\u5411"),(0,o.kt)("h3",{id:"\u7bad\u5934\u51fd\u6570\u7684this"},"\u7bad\u5934\u51fd\u6570\u7684this"),(0,o.kt)("p",null,"\u4f1a\u76f4\u63a5\u5c06\u5f53\u524d\u8fd0\u884c\u73af\u5883\u7684this\u4f5c\u4e3a\u81ea\u5df1\u7684this\u3002\u6ce8\u610f: \u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684\u4e0a\u4e0b\u6587\uff0c\u6ca1\u6709arguments\uff0c\u7bad\u5934\u51fd\u6570\u5c31\u662f\u8d4b\u503c\u7ed9\u53d8\u91cf\u7684\u533f\u540d\u51fd\u6570,\u6240\u4ee5\u533f\u540d\u51fd\u6570\u4e0d\u4f1a\u63d0\u5347"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fn = (val) => {\n  var test2 = '2'\n  var test3 = '3'\n  // debugger\n  // window/undefined {val: 1, test2: '2', test3: '3'}\n  console.log(this, { val, test2, test3 })\n}\n\nconsole.log(\"fn\",fn.prototype) // undefined prototype(\u539f\u578b)\u662f\u51fd\u6570\u624d\u6709\u7684\uff0cprototype\u662f\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\uff0c\u6307\u5411\u5c5e\u4e8e\u8be5\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u3002\nconsole.log(\"fn\",fn.__proto__) // fn \u0192 () { [native code] } \u6307\u5411\u8be5\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\n\nfn(1)\n\n// to es5\nvar fn = function fn(val) {\n  var test2 = '2';\n  var test3 = '3';\n  // debugger;\n  console.log(undefined, { val: val, test2: test2, test3: test3 });\n};\n\nconsole.log(\"fn\",fn.prototype) // \u51fd\u6570\u8868\u8fbe\u5f0f\u6709\u539f\u578b,\u5e76\u4e14\u53ef\u4ee5\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\nconst a = new fn()\nconsole.log('a',a)\nfn(1);\n")),(0,o.kt)("h3",{id:"\u51fd\u6570\u4f5c\u4e3a\u666e\u901a\u51fd\u6570\u5728\u5168\u5c40\u73af\u5883\u4e0b\u8fdb\u884c\u8c03\u7528\u65f6this\u6307\u7684\u65f6window"},"\u51fd\u6570\u4f5c\u4e3a\u666e\u901a\u51fd\u6570,\u5728\u5168\u5c40\u73af\u5883\u4e0b\u8fdb\u884c\u8c03\u7528\u65f6\uff0cthis\u6307\u7684\u65f6window"),(0,o.kt)("h3",{id:"\u5728\u4e8b\u4ef6\u4e2dthis-\u6307\u5411\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u5bf9\u8c61"},"\u5728\u4e8b\u4ef6\u4e2d\uff0cthis \u6307\u5411\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u5bf9\u8c61"),(0,o.kt)("h3",{id:"\u4f5c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u65b9\u6cd5\u8c03\u7528\u65f6this-\u6307\u5411\u8be5\u5bf9\u8c61"},"\u4f5c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u65b9\u6cd5\u8c03\u7528\u65f6\uff0cthis \u6307\u5411\u8be5\u5bf9\u8c61\u3002"),(0,o.kt)("h3",{id:"\u5728\u8c03\u7528\u51fd\u6570\u65f6\u4f7f\u7528newthis-\u6307\u5411-new-\u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61"},"\u5728\u8c03\u7528\u51fd\u6570\u65f6\u4f7f\u7528new,this \u6307\u5411 new \u51fa\u6765\u7684\u5b9e\u4f8b\u5bf9\u8c61\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u6307\u5411\u6784\u9020\u51fd\u6570\u7684prototype\u5c5e\u6027\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u6784\u9020\u51fd\u6570\u7684\u4f5c\u7528\u57df\u8d4b\u503c\u7ed9\u65b0\u5bf9\u8c61\uff08\u56e0\u6b64this\u6307\u5411\u65b0\u5bf9\u8c61\uff09\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u6784\u9020\u51fd\u6570\u4e2d\u7684\u4ee3\u7801\uff0c\u4ee5\u521d\u59cb\u5316\u65b0\u5bf9\u8c61\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u6784\u9020\u51fd\u6570\u6709\u8fd4\u56de\u503c\u5e76\u4e14\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de\u8be5\u5bf9\u8c61\uff1b",(0,o.kt)("inlineCode",{parentName:"li"},"\u5982\u679c\u8fd9\u4e2a\u51fd\u6570\u4e0d\u8fd4\u56de\u4efb\u4f55\u4e1c\u897f\uff0c\u90a3\u4e48\u5c31\u4f1a\u9ed8\u8ba4 return this"),",\u5373\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5982\u679c\u4e0d\u5199\uff0c\u76f4\u63a5\u8fd4\u56de\u9ed8\u8ba4\u521b\u5efa\u7684\u65b0\u5bf9\u8c61\nreturn\u7684\u662fthis\uff0c\u76f4\u63a5\u8fd4\u56de\u9ed8\u8ba4\u521b\u5efa\u7684\u65b0\u5bf9\u8c61\nreturn\u7684\u662fnull\u6216\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u5219\u8fd4\u56de\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u3002\nreturn\u7684\u662f\u5bf9\u8c61\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u8be5\u5bf9\u8c61\uff0c\u53d6\u800c\u4ee3\u4e4b\u672c\u8be5\u9ed8\u8ba4\u8fd4\u56de\u7684\u65b0\u5bf9\u8c61\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// \u4f7f\u7528new\u5173\u952e\u5b57\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u5bf9\u8c61person1\n// \u5b83\u7684\u539f\u578b\u6307\u5411Person.prototype\uff0c\u5e76\u8c03\u7528Person\u6784\u9020\u51fd\u6570\u6765\u521d\u59cb\u5316\u65b0\u5bf9\u8c61\u3002\nvar person1 = new Person('John', 30);\nconsole.log(person1.name); // \"John\"\nconsole.log(person1.age); // 30\n")),(0,o.kt)("h3",{id:"\u901a\u8fc7\u5bf9\u8c61\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\u7684\u8fc7\u7a0b"},"\u901a\u8fc7\u5bf9\u8c61\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\u7684\u8fc7\u7a0b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"new\u5173\u952e\u5b57\u521b\u5efa\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u7ee7\u627f\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bf9\u8c61\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\u5219\u4e0d\u652f\u6301\u7ee7\u627f\u539f\u578b\u94fe\u3002\u800c\u662f\u4eceObject.prototype\u7ee7\u627f\u800c\u6765\u7684\u5c5e\u6027\u548c\u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var person = {};\n")),(0,o.kt)("h3",{id:"\u5982\u679c-applycall-\u6216-bind-\u65b9\u6cd5"},"\u5982\u679c apply\u3001call \u6216 bind \u65b9\u6cd5"),(0,o.kt)("p",null,"\u7528\u4e8e\u8c03\u7528\u3001\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u5185\u7684 this \u5c31\u662f\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u8fd9\u4e9b\u65b9\u6cd5\u7684\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"./bind-call-apply"},"bind-call-apply")),(0,o.kt)("h2",{id:"\u7bad\u5934\u51fd\u6570\u548c\u51fd\u6570\u79cd\u7c7b"},"\u7bad\u5934\u51fd\u6570\u548c\u51fd\u6570\u79cd\u7c7b"),(0,o.kt)("h3",{id:"\u4e09\u79cd\u51fd\u6570"},"\u4e09\u79cd\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function add3(){} // 1.\u8fd9\u79cd\u5199\u6cd5\u53eb\u505a\u51fd\u6570\u58f0\u660e\n\n// 2-1.\u5355\u72ec\u8fd0\u884c\u4e00\u4e2a\u533f\u540d\u51fd\u6570\uff0c\u4e0d\u7b26\u5408\u8bed\u6cd5\u8981\u6c42\uff0c\u9700\u8981\u5305\u88f9\nfunction (){ }  // 2.\u8fd9\u79cd\u662f\u533f\u540d\u51fd\u6570\n(function (){\n    // \u7531\u4e8e\u6ca1\u6709\u6267\u884c\u8be5\u533f\u540d\u51fd\u6570\uff0c\u6240\u4ee5\u4e0d\u4f1a\u6267\u884c\u533f\u540d\u51fd\u6570\u4f53\u5185\u7684\u8bed\u53e5\u3002\n    console.log("\u533f\u540d\u51fd\u6570");\n})\n// 2-2.\u5982\u679c\u9700\u8981\u6267\u884c\u533f\u540d\u51fd\u6570\n(function (){\n    console.log("\u533f\u540d\u51fd\u6570");\n})()\n\nvar add2 = function(){} // 3.\u8fd9\u79cd\u5199\u6cd5\u53eb\u505a\u51fd\u6570\u8868\u8fbe\u5f0f\nconst add = (a, b) => a + b // \u7bad\u5934\uff08\u540c\u6837\u4e5f\u662f\u8868\u8fbe\u5f0f\uff09\n')),(0,o.kt)("h3",{id:"\u7bad\u5934\u51fd\u6570"},"\u7bad\u5934\u51fd\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f"),"\u7684\u8bed\u6cd5\u6bd4\u51fd\u6570\u8868\u8fbe\u5f0f\u66f4\u7b80\u6d01\uff0c\u5e76\u4e14\u6ca1\u6709\u81ea\u5df1\u7684this\uff0carguments\uff0csuper\u6216new.target\u3002\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f\u66f4\u9002\u7528\u4e8e\u90a3\u4e9b\u672c\u6765\u9700\u8981\u533f\u540d\u51fd\u6570\u7684\u5730\u65b9\uff0c\u5e76\u4e14\u5b83\u4e0d\u80fd\u7528\u4f5c\u6784\u9020\u51fd\u6570\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6ca1\u6709 prototype \u5c5e\u6027\uff0c\u6ca1\u529e\u6cd5\u8fde\u63a5\u5b83\u7684\u5b9e\u4f8b\u7684\u539f\u578b\u94fe\uff0c\u6240\u4ee5\u7bad\u5934\u51fd\u6570\u5c31\u65e0\u6cd5\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u3002\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570\u7684\u7279\u5f81\u4e4b\u4e00\u662f\u5b83\u4eec\u4e0d\u521b\u5efa\u4e0a\u4e0b\u6587\uff0c\u56e0\u6b64\u7bad\u5934\u51fd\u6570\u7684\u5185\u90e8this\u4e0e\u5916\u90e8\u7684this\u76f8\u540c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5728JavaScript\u4e2d\uff0c\u51fd\u6570\u4f1a\u521b\u5efa\u81ea\u5df1\u7684\u4f5c\u7528\u57df\u3002\u8fd9\u610f\u5473\u7740JavaScript\u51fd\u6570\u4f1a\u521b\u5efa\u81ea\u5df1\u7684\u4e0a\u4e0b\u6587this\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u51fd\u6570\u4f46\u662f\u8fd9\u4e2a\u51fd\u6570\u5374\u6ca1\u6709\u81ea\u5df1\u7684\u4e0a\u4e0bthis\uff0c\u90a3\u4e48\u5c31\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002\n\n\u7bad\u5934\u51fd\u6570\u5185\u90e8\u7684this\u8bcd\u6cd5\u505a\u7528\u57df\u7531\u4e0a\u4e0b\u6587\u80af\u5b9a\uff0c\u56e0\u6b64\uff0c\u7528call()\u6216apply()\u8c03\u7528\u7bad\u5934\u51fd\u6570\u65f6\uff0c\u6ca1\u6cd5\u5bf9this\u8fdb\u884c\u7ed1\u5b9a\uff0c\u5373\u4f20\u5165\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u88ab\u5ffd\u7565\u3002\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/*\n * \u7531\u4e8e\u7bad\u5934\u51fd\u6570\u7684this\u7531\u5916\u90e8\u975e\u7bad\u5934\u51fd\u6570\u7684this\u51b3\u5b9a\uff0c\u56e0\u6b64\uff0c\u82e5\u9700\u8981\u5c06\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u53bb\u6267\u884c\uff0c\n * \u5e76\u4e14\u4e0d\u5e0c\u671b\u51fd\u6570\u4e2d\u7684this\u53d1\u751f\u6539\u53d8\uff0c\u8fd9\u65f6\u7528\u7bad\u5934\u51fd\u6570\u6700\u9002\u5408\u4e0d\u8fc7\u3002\u5982\u679c\u662f\u666e\u901a\u51fd\u6570\uff0c\u5219\u9700\u8981\u7528bind()\u8fdb\u884cthis\u7ed1\u5b9a\u3002\n * */\nclass Fn {\n  constructor(name) {\n    this.consName = name;\n  }\n  arrowLog = () => {\n    console.log(this.consName);\n  };\n  normalLog() {\n    console.log(this.consName);\n  }\n}\nconst construct = new Fn(\"arrow\");\nsetTimeout(construct.arrowLog, 1000); // 1s\u540e => 'arrow'\nsetTimeout(construct.normalLog, 1000); // 1s\u540e => 'undefined'\nsetTimeout(construct.normalLog.bind(construct), 1000); // 1s\u540e => 'arrow'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u672a\u89e3\u6790 \nconst test1 = 'hello world'\nconst add = (a, b) => a + b\n\nvar add2 = function (a, b) {\n  return a + b\n}\n\nfunction add3(a, b) {\n  return a + b\n}\n\n// \u7ecf\u8fc7babel \u89e3\u6790\u540e\n\"use strict\";\nvar test1 = 'hello world';\nvar add = function add(a, b) {\n  return a + b;\n};\n\nvar add2 = function add2(a, b) {\n  return a + b;\n};\n\nfunction add3(a, b) {\n  return a + b;\n}\n")),(0,o.kt)("h2",{id:"this\u9898\u76ee"},"this\u9898\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var length = 10;\n\nfunction fn() {\n    console.log('1:', this, '-:', this.length)\n}\n\nvar obj = {\n    length: 5,\n    callApi: function (fn) {\n        console.log('2:', this.length) // test:  5 \u8fd9\u91cc\u533f\u540d\u51fd\u6570\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u88ab\u8c03\u7528\uff0c\u6240\u4ee5this\u4e3aobj\n        console.log('3:', arguments[0])\n\n        fn()  // \u8fd9\u91cc\u7b49\u4e8efn()\u4f5c\u4e3a\u666e\u901a\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u6240\u4ee5this\u4e3awindow,\u6240\u4ee5\u4e3a10\n\n        // \u8fd9\u91ccarguments\u4e3a\u7c7b\u6570\u7ec4\uff0c\u5b83\u7684\u5c5e\u6027\u540d\u4e3a\u4e0b\u6807\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u4ee5\u6570\u5b57\n        // \u4e3a\u5c5e\u6027\u540d\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48arguments[0]\u4e2d\u7684this\u5c31\u6307\u5411arguments,\u800carguments\u672c\u8eab\u5177\u6709length\u5c5e\u6027\uff0c\u8868\u793a\u53c2\u6570\u7684\u4e2a\u6570\n        arguments[0]()\n    }\n}\n\nobj.callApi(fn, 3)\n/*\n2: 5\n\n3: \u0192 fn() {\n    console.log('1:', this, '-:', this.length)\n}\n\n1: Window\xa0{window: Window, self: Window, document: document, name: '', location: Location,\xa0\u2026} -: 10\n\n1: Arguments(2)\xa0[\u0192, 3, callee: \u0192, Symbol(Symbol.iterator): \u0192]0: \u0192 fn()1: 3callee: \u0192 (fn)length: 2Symbol(Symbol.iterator): \u0192 values()[[Prototype]]: Object -: 2\n*/\n")))}d.isMDXComponent=!0},77497:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/this\u548c\u51fd\u65701-1c9e6d1768e5f7aa70db365401de3bd9.png"},59378:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/this\u548c\u51fd\u65702-\u4f8b\u5b50-99d749682e2317093167de0975c73387.png"},31408:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/this\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u6267\u884c\u73af\u5883-612987c1a5dcdb593eed3763470d32fe.png"}}]);