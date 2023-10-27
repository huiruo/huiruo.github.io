"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[6282],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>k});var t=o(67294);function l(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){l(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,l=function(e,n){if(null==e)return{};var o,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(l[o]=e[o]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var u=t.createContext({}),s=function(e){var n=t.useContext(u),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},m=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=s(o),c=l,k=i["".concat(u,".").concat(c)]||i[c]||d[c]||r;return o?t.createElement(k,a(a({ref:n},m),{},{components:o})):t.createElement(k,a({ref:n},m))}));function k(e,n){var o=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[i]="string"==typeof e?e:l,a[1]=p;for(var s=2;s<r;s++)a[s]=o[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},12783:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=o(87462),l=(o(67294),o(3905));const r={title:"cjs-amd",sidebar_position:6},a=void 0,p={unversionedId:"parsing-interpretation-compilation/\u6a21\u5757\u5316/cjs",id:"parsing-interpretation-compilation/\u6a21\u5757\u5316/cjs",title:"cjs-amd",description:"\u6a21\u5757\u5316",source:"@site/programming-tech/parsing-interpretation-compilation/\u6a21\u5757\u5316/02-cjs.md",sourceDirName:"parsing-interpretation-compilation/\u6a21\u5757\u5316",slug:"/parsing-interpretation-compilation/\u6a21\u5757\u5316/cjs",permalink:"/parsing-interpretation-compilation/\u6a21\u5757\u5316/cjs",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/parsing-interpretation-compilation/\u6a21\u5757\u5316/02-cjs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"cjs-amd",sidebar_position:6},sidebar:"docs",previous:{title:"esm",permalink:"/parsing-interpretation-compilation/\u6a21\u5757\u5316/esm"},next:{title:"\u6a21\u5757\u5316\u548c\u95ed\u5305",permalink:"/parsing-interpretation-compilation/\u6a21\u5757\u5316/\u6a21\u5757\u5316\u548c\u95ed\u5305"}},u={},s=[{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:2},{value:"\u8d44\u6e90\u7684\u6a21\u5757\u5316",id:"\u8d44\u6e90\u7684\u6a21\u5757\u5316",level:3},{value:"AMD",id:"amd",level:2},{value:"CommonJS",id:"commonjs",level:2},{value:"CommonJS \u52a0\u8f7d\u539f\u7406",id:"commonjs-\u52a0\u8f7d\u539f\u7406",level:3},{value:"CommonJS\u4f7f\u7528",id:"commonjs\u4f7f\u7528",level:2},{value:"JavaScript\u6a21\u5757\u7f16\u8bd1",id:"javascript\u6a21\u5757\u7f16\u8bd1",level:2},{value:"module \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c require \u662f\u4e00\u4e2a\u51fd\u6570",id:"module-\u662f\u4e00\u4e2a\u5bf9\u8c61-require-\u662f\u4e00\u4e2a\u51fd\u6570",level:2},{value:"exports\u4e0emodule.exports\u7684\u533a\u522b",id:"exports\u4e0emoduleexports\u7684\u533a\u522b",level:3},{value:"commonjs \u8f93\u51fa\u62f7\u8d1d\u7684\u4f8b\u5b50",id:"commonjs-\u8f93\u51fa\u62f7\u8d1d\u7684\u4f8b\u5b50",level:2},{value:"\u6a21\u5757\u7684\u8f93\u51famodule.exports\u600e\u4e48\u5b9e\u73b0\uff1f",id:"\u6a21\u5757\u7684\u8f93\u51famoduleexports\u600e\u4e48\u5b9e\u73b0",level:3},{value:"import\u52a0\u8f7dCommonJS\u6a21\u5757",id:"import\u52a0\u8f7dcommonjs\u6a21\u5757",level:2},{value:"\u540c\u65f6\u652f\u6301\u4e24\u79cd\u683c\u5f0f\u7684\u6a21\u5757",id:"\u540c\u65f6\u652f\u6301\u4e24\u79cd\u683c\u5f0f\u7684\u6a21\u5757",level:2},{value:"module.exports\u548cexports\u533a\u522b",id:"moduleexports\u548cexports\u533a\u522b",level:2}],m={toc:s},i="wrapper";function d(e){let{components:n,...o}=e;return(0,l.kt)(i,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,l.kt)("p",null,"\u6a21\u5757\u5316\u5c31\u662f\u5c06\u4e00\u4e2a\u5927\u6587\u4ef6\u62c6\u5206\u6210\u76f8\u4e92\u4f9d\u8d56\u7684\u5c0f\u6587\u4ef6\uff0c\u518d\u8fdb\u884c\u7edf\u4e00\u7684\u62fc\u88c5\u548c\u52a0\u8f7d\u3002"),(0,l.kt)("p",null,"\u6a21\u5757\u89c4\u8303:\n\u5728 ES6 \u4e4b\u524d\uff0cJavaScript \u4e00\u76f4\u6ca1\u6709\u6a21\u5757\u7cfb\u7edf\uff0c\u5bf9\u6b64\u793e\u533a\u5236\u5b9a\u4e86\u4e00\u4e9b\u6a21\u5757\u52a0\u8f7d\u65b9\u6848\uff0c\u5982 CommonJS\u3001AMD \u548c CMD \u7b49"),(0,l.kt)("p",null,"\u73b0\u5728 ES6 \u5df2\u7ecf\u5728\u8bed\u8a00\u5c42\u9762\u4e0a\u89c4\u5b9a\u4e86\u6a21\u5757\u7cfb\u7edf\uff0c\u5b8c\u5168\u53ef\u4ee5\u53d6\u4ee3\u73b0\u6709\u7684 CommonJS \u548c AMD \u89c4\u8303\uff0c\u800c\u4e14\u4f7f\u7528\u8d77\u6765\u76f8\u5f53\u7b80\u6d01\uff0c\u5e76\u4e14\u6709\u9759\u6001\u52a0\u8f7d\u7684\u7279\u6027\u3002"),(0,l.kt)("p",null,"\u89c4\u8303\u786e\u5b9a\u4e86\uff0c\u7136\u540e\u5c31\u662f\u6a21\u5757\u7684\u6253\u5305\u548c\u52a0\u8f7d\u95ee\u9898\uff1awebpack"),(0,l.kt)("h3",{id:"\u8d44\u6e90\u7684\u6a21\u5757\u5316"},"\u8d44\u6e90\u7684\u6a21\u5757\u5316"),(0,l.kt)("p",null,"Webpack\uff1a\u5c06\u5404\u79cd\u7c7b\u578b\u7684\u8d44\u6e90\uff0c\u5305\u62ec\u56fe\u7247\u3001css\u3001js\u7b49\uff0c\u8f6c\u8bd1\u3001\u7ec4\u5408\u3001\u62fc\u63a5\u3001\u751f\u6210 JS \u683c\u5f0f\u7684 bundler \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8d44\u6e90\u6a21\u5757\u5316\u540e\uff0c\u6709\u4e09\u4e2a\u597d\u5904\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1.\u4f9d\u8d56\u5173\u7cfb\u5355\u4e00\u5316\u3002\u6240\u6709 CSS \u548c\u56fe\u7247\u7b49\u8d44\u6e90\u7684\u4f9d\u8d56\u5173\u7cfb\u7edf\u4e00\u8d70 JS \u8def\u7ebf\uff0c\u65e0\u9700\u989d\u5916\u5904\u7406 CSS \u9884\u5904\u7406\u5668\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4e5f\u4e0d\u9700\u5904\u7406\u4ee3\u7801\u8fc1\u79fb\u65f6\u7684\u56fe\u7247\u5408\u5e76\u3001\u5b57\u4f53\u56fe\u7247\u7b49\u8def\u5f84\u95ee\u9898\uff1b"),(0,l.kt)("li",{parentName:"ul"},"2.\u8d44\u6e90\u5904\u7406\u96c6\u6210\u5316\u3002\u73b0\u5728\u53ef\u4ee5\u7528 loader \u5bf9\u5404\u79cd\u8d44\u6e90\u505a\u5404\u79cd\u4e8b\u60c5\uff0c\u6bd4\u5982\u590d\u6742\u7684 vue-loader \u7b49\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"3.\u9879\u76ee\u7ed3\u6784\u6e05\u6670\u5316\u3002\u4f7f\u7528 Webpack \u540e\uff0c\u4f60\u7684\u9879\u76ee\u7ed3\u6784\u603b\u53ef\u4ee5\u8868\u793a\u6210\u8fd9\u6837\u7684\u51fd\u6570\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"dest = webpack(src, config)\n")),(0,l.kt)("h2",{id:"amd"},"AMD"),(0,l.kt)("p",null,"\u7528\u4e8e\u670d\u52a1\u5668,\u73b0\u5728\u5f88\u5c11\u7528\u4e86,Asynchronous Module Definition\u7684\u7f29\u5199\uff0c\u91c7\u7528\u5f02\u6b65\u65b9\u5f0f\u52a0\u8f7d\u6a21\u5757\uff0c\u6a21\u5757\u7684\u52a0\u8f7d\u4e0d\u5f71\u54cd\u5b83\u540e\u9762\u8bed\u53e5\u7684\u8fd0\u884c\u3002\u6240\u6709\u4f9d\u8d56\u8fd9\u4e2a\u6a21\u5757\u7684\u8bed\u53e5\uff0c\u90fd\u5b9a\u4e49\u5728\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u7b49\u5230\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u624d\u4f1a\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"commonjs"},"CommonJS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let { stat, exists, readFile } = require('fs');\n")),(0,l.kt)("p",null,"\u5176\u5b9e\u4e0a\u9762\u4ee3\u7801\u662f\u5148\u6267\u884c fs \u6a21\u5757\uff0c\u5f97\u5230\u4e00\u4efd\u4ee3\u7801\u62f7\u8d1d\uff0c\u518d\u83b7\u53d6\u5bf9\u5e94\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u7684\u3002\nCommonJS\u7528\u4e8e\u6d4f\u89c8\u5668,\u5e76\u4e0d\u662f ECMAScript \u6807\u51c6\u7684\u4e00\u90e8\u5206\uff0c\u5176\u4e2dapi:module\u548crequire,\u5e76\u4e0d\u662fJS\u7684\u5173\u952e\u5b57\uff0c\u4ec5\u4ec5\u662f\u5bf9\u8c61\u6216\u8005\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// commonjs \u5199\u6cd5\nvar clock = require('clock.js')\nclock.start();\n")),(0,l.kt)("h3",{id:"commonjs-\u52a0\u8f7d\u539f\u7406"},"CommonJS \u52a0\u8f7d\u539f\u7406"),(0,l.kt)("p",null,"CommonJS\u4e00\u4e2a\u6a21\u5757\u5bf9\u5e94\u4e00\u4e2a\u811a\u672c\u6587\u4ef6\uff0crequire \u547d\u4ee4\u6bcf\u6b21\u52a0\u8f7d\u4e00\u4e2a\u6a21\u5757\u5c31\u4f1a\u6267\u884c\u6574\u4e2a\u811a\u672c\uff0c\u7136\u540e\u751f\u6210\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8be5\u89c4\u8303\u7684\u6838\u5fc3\u601d\u60f3\u662f\uff1a \u5141\u8bb8\u6a21\u5757\u901a\u8fc7require\u65b9\u6cd5\u6765\u540c\u6b65\u52a0\u8f7d\u6240\u8981\u4f9d\u8d56\u7684\u5176\u4ed6\u6a21\u5757\uff0c\u901a\u8fc7 exports \u6216 module.exports \u6765\u5bfc\u51fa\u9700\u8981\u66b4\u9732\u7684\u63a5\u53e3\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5bf9\u8c61\u4e00\u65e6\u751f\u6210\uff0c\u4ee5\u540e\u518d\u6b21\u6267\u884c\u76f8\u540c\u7684 require \u547d\u4ee4\u90fd\u4f1a\u76f4\u63a5\u5230\u7f13\u5b58\u4e2d\u53d6\u503c\u3002\u4e5f\u5c31\u662f\u8bf4\uff1aCommonJS \u6a21\u5757\u65e0\u8bba\u52a0\u8f7d\u591a\u5c11\u6b21\uff0c\u90fd\u53ea\u4f1a\u5728\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\u8fd0\u884c\u4e00\u6b21\uff0c\u4ee5\u540e\u518d\u52a0\u8f7d\u65f6\u5c31\u8fd4\u56de\u7b2c\u4e00\u6b21\u8fd0\u884c\u7684\u7ed3\u679c\uff0c\u9664\u975e\u624b\u52a8\u6e05\u9664\u7cfb\u7edf\u7f13\u5b58\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n    id: '',  // \u6a21\u5757\u540d\uff0c\u552f\u4e00\n    exports: {  // \u6a21\u5757\u8f93\u51fa\u7684\u5404\u4e2a\u63a5\u53e3\n        ...\n    },\n    loaded: true, // \u6a21\u5757\u7684\u811a\u672c\u662f\u5426\u6267\u884c\u5b8c\u6bd5\n    ...\n}\n")),(0,l.kt)("p",null,"\u4ee5\u540e\u7528\u5230\u8fd9\u4e2a\u6a21\u5757\u65f6\uff0c\u5c31\u4f1a\u5230\u5bf9\u8c61\u7684exports\u5c5e\u6027\u4e2d\u53d6\u503c\u3002\u5373\u4f7f\u518d\u6b21\u6267\u884crequire\u547d\u4ee4\uff0c\u4e5f\u4e0d\u4f1a\u518d\u6b21\u6267\u884c\u8be5\u6a21\u5757\uff0c\u800c\u662f\u5230\u7f13\u5b58\u4e2d\u53d6\u503c\u3002"),(0,l.kt)("h2",{id:"commonjs\u4f7f\u7528"},"CommonJS\u4f7f\u7528"),(0,l.kt)("p",null,"cjs\u89c4\u8303\u4e0b\uff0c\u6bcf\u4e2a.js\u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u4eec\u5185\u90e8\u5404\u81ea\u4f7f\u7528\u7684\u53d8\u91cf\u540d\u548c\u51fd\u6570\u540d\u90fd\u4e92\u4e0d\u51b2\u7a81"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nvar s = 'Hello';\n\nfunction greet(name) {\n    console.log(s + ', ' + name + '!');\n}\n\nmodule.exports = greet;\n")),(0,l.kt)("p",null,"\u5176\u4ed6\u6a21\u5757\u4e2d\u5f15\u5165\u5e76\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\n/*\n\u5f15\u5165hello\u6a21\u5757:\n\u5176\u5b9e\u53d8\u91cfgreet\u5c31\u662f\u5728hello.js\u4e2d \u7528 module.exports = greet \u8f93\u51fa\u7684greet\u51fd\u6570\n*/ \nvar greet = require('./hello');\n\nvar s = 'Michael';\n\ngreet(s); // Hello, Michael!\n")),(0,l.kt)("p",null,"require/exports \u7684\u7528\u6cd5\u53ea\u6709\u4ee5\u4e0b\u4e09\u79cd\u7b80\u5355\u7684\u5199\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5bfc\u5165\nconst fs = require('fs')\n\n// \u5bfc\u51fa\nexports.fs = fs\n\n/*\n\u5bfc\u51fa\u65b9\u6cd52:\n\u6211\u4eec\u5efa\u8bae\u4f7f\u7528: module.exports = xxx\n\u65b9\u5f0f\u6765\u8f93\u51fa\u6a21\u5757\u53d8\u91cf\uff0c\u8fd9\u6837\uff0c\u4f60\u53ea\u9700\u8981\u8bb0\u5fc6\u4e00\u79cd\u65b9\u6cd5\u3002\n*/\nmodule.exports = fs\n")),(0,l.kt)("p",null,"require\u80fd\u770b\u5230\u7684\u53ea\u6709module.exports\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u5b83\u662f\u770b\u4e0d\u5230exports\u5bf9\u8c61\u7684,\u800c\u6211\u4eec\u5728\u7f16\u5199\u6a21\u5757\u65f6\u7528\u5230\u7684exports\u5bf9\u8c61\u5b9e\u9645\u4e0a\u53ea\u662f\u5bf9module.exports\u7684\u5f15\u7528"),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e00\uff1a\u5bf9module.exports\u8d4b\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// hello.js\n\nfunction hello() {\n    console.log('Hello, world!');\n}\n\nfunction greet(name) {\n    console.log('Hello, ' + name + '!');\n}\n\nmodule.exports = {\n    hello: hello,\n    greet: greet\n};\n")),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e8c\uff1a\u76f4\u63a5\u4f7f\u7528exports\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// hello.js\n\nfunction hello() {\n    console.log('Hello, world!');\n}\n\nfunction greet(name) {\n    console.log('Hello, ' + name + '!');\n}\n\nfunction hello() {\n    console.log('Hello, world!');\n}\n\nexports.hello = hello;\nexports.greet = greet;\n")),(0,l.kt)("p",null,"\u4f46\u662f\u4f60\u4e0d\u53ef\u4ee5\u76f4\u63a5\u5bf9exports\u8d4b\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ee3\u7801\u53ef\u4ee5\u6267\u884c\uff0c\u4f46\u662f\u6a21\u5757\u5e76\u6ca1\u6709\u8f93\u51fa\u4efb\u4f55\u53d8\u91cf:\nexports = {\n    hello: hello,\n    greet: greet\n};\n")),(0,l.kt)("h2",{id:"javascript\u6a21\u5757\u7f16\u8bd1"},"JavaScript\u6a21\u5757\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5728\u7f16\u8bd1\u7684\u8fc7\u7a0b\u4e2d\uff0cNode\u5bf9JavaScript\u6587\u4ef6\u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u5934\u5c3e\u5305\u88c5\u3002\n\u5728\u5934\u90e8\u52a0\u4e0a\u4e86(function(exports, require, module, ",(0,l.kt)("strong",{parentName:"p"},"filename, "),"dirname) {\uff0c\u5728\u5c3e\u90e8\u52a0\u4e0a\u4e86})\u3002\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a\n\u8fd9\u6837\u505a\u8fd8\u6709\u4e00\u4e2a\u597d\u5904\uff0c\u6bcf\u4e2a\u6a21\u5757\u4e4b\u95f4\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u4e0d\u4f1a\u5f15\u8d77\u53d8\u91cf\u6c61\u67d3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(function(exports, require, module, __filename, __dirname) {\n// \u6a21\u5757\u6587\u4ef6\u5185\u5bb9\n})\n")),(0,l.kt)("p",null,"node\u5728\u5f15\u5165\u6a21\u5757\u65f6\u4f1a\u7ecf\u5386\u4ee5\u4e0b\u9636\u6bb5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8def\u5f84\u5206\u6790")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8def\u5f84\u5206\u6790\u5c31\u662f\u67e5\u627e\u6a21\u5757\u6240\u5728\u7684\u8def\u5f84\uff0c\u7531\u4e8e\u6807\u8bc6\u7b26\u7684\u5f62\u5f0f\u6709\u591a\u79cd\uff0c\u56e0\u6b64\u9488\u5bf9\u4e0d\u7528\u5f62\u5f0f\u7684\u6807\u8bc6\u7b26\u5728\u67e5\u627e\u548c\u5b9a\u4f4d\u4e0a\u6709\u4e0d\u540c\u7a0b\u5ea6\u7684\u5dee\u5f02\u3002\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u5b9a\u4f4d"),(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u6267\u884c")),(0,l.kt)("p",null,"\u6a21\u5757\u7684\u52a0\u8f7d\u8fc7\u7a0b\nnode\u5728\u52a0\u8f7d\u6a21\u5757\u65f6\u4f1a\u4f18\u5148\u4ece\u7f13\u5b58\u4e2d\u52a0\u8f7d\uff0c\u4efb\u4f55\u6a21\u5757\u5728\u7b2c\u4e00\u6b21\u88ab\u5f15\u5165\u540e\u5c31\u4f1a\u88ab\u7f13\u5b58\u8d77\u6765\uff0c\u5f53\u7b2c\u4e8c\u6b21\u5f15\u5165\u65f6\uff0c\u4f1a\u4f18\u5148\u4ece\u7f13\u5b58\u52a0\u8f7d\uff0c\n\u4e0e\u524d\u7aef\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u6587\u4ef6\u4e00\u6837\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002\u4e0d\u540c\u7684\u662f\u6d4f\u89c8\u5668\u4ec5\u4ec5\u7f13\u5b58\u6587\u4ef6\uff0c\u800cnode\u7f13\u5b58\u7684\u662f\u7f16\u8bd1\u548c\u6267\u884c\u540e\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"Node\u4e2d\u76843\u79cd\u7c7b\u6a21\u5757"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6838\u5fc3\u6a21\u5757\n\u6838\u5fc3\u6a21\u5757\u52a0\u8f7d\u7684\u4f18\u5148\u7ea7\u4ec5\u6b21\u4e8e\u7f13\u5b58\u52a0\u8f7d\uff0c\u5176\u52a0\u8f7d\u901f\u5ea6\u662f\u6700\u5feb\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u6a21\u5757\u5728node\u6e90\u4ee3\u7801\u7684\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c31\u5df2\u7ecf\u7f16\u8bd1\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\n\u5982\u679c\u6211\u4eec\u81ea\u5df1\u7f16\u5199\u4e00\u4e2a\u6a21\u5757\uff0c\u53d6\u540d\u4e3a\u4e0e\u6838\u5fc3\u6a21\u5757\u76f8\u540c\uff08\u5982\uff1afs\uff09\uff0c\u5f53\u6211\u4eec\u53bb\u5f15\u5165\u65f6\u81ea\u7136\u662f\u4e0d\u4f1a\u6210\u529f\u7684\uff0c\u9664\u975e\u6362\u6210\u5176\u4ed6\u7684\u6807\u8bc6\u7b26\u5f62\u5f0f\u5f15\u5165\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6838\u5fc3\u6a21\u5757\u7684\u7f16\u8bd1\u8fc7\u7a0b:\nnode\u5728\u7f16\u8bd1\u6838\u5fc3\u6a21\u5757\u65f6\uff0c\u9996\u5148\u628aJavaScript\u4ee3\u7801\u8f6c\u5b58\u4e3aC/C++\u4ee3\u7801\uff0c\u91c7\u7528V8\u9644\u5e26\u7684js2c.py\u5de5\u5177\uff0c\u8f6c\u6210node_natives.h\u5934\u6587\u4ef6\u3002\n\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cJavaScript\u4ee3\u7801\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u5b58\u50a8\u5728node\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u662f\u4e0d\u80fd\u76f4\u63a5\u6267\u884c\u7684\u3002\u5728\u542f\u52a8node\u8fdb\u7a0b\u65f6\uff0cJavaScript\u4ee3\u7801\u76f4\u63a5\u52a0\u8f7d\u8fdb\u5185\u5b58\u4e2d\u3002\u5728\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\uff0cJavaScript\u6838\u5fc3\u6a21\u5757\u7ecf\u5386\u6807\u8bc6\u7b26\u5206\u6790\u540e\u76f4\u63a5\u5b9a\u4f4d\u5230\u5185\u5b58\u4e2d\uff0c\u6bd4\u666e\u901a\u6587\u4ef6\u6a21\u5757\u67e5\u627e\u8981\u5feb\u5f88\u591a\u3002\nlib\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6a21\u5757\u6587\u4ef6\u4e5f\u662f\u6ca1\u6709\u5b9a\u4e49require\u3001module\u3001exports\u8fd9\u4e9b\u53d8\u91cf\u7684\u3002\u5728\u5f15\u5165\u6838\u5fc3\u6a21\u5757\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u7ecf\u5386\u4e86\u5934\u5c3e\u5305\u88c5\u7684\u8fc7\u7a0b\uff0c\u7136\u540e\u624d\u6267\u884c\u548c\u5bfc\u51fa\u4e86exports\u5bf9\u8c61\u3002\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8def\u5f84\u5f62\u5f0f\u7684\u6587\u4ef6\u6a21\u5757\n\u4ee5\u2026/\u3001./\u6216/\u5f00\u59cb\u7684\u6807\u8bc6\u7b26\uff0c\u5728\u5206\u6790\u8def\u5f84\u6a21\u5757\u65f6\uff0crequire()\u65b9\u6cd5\u4f1a\u5c06\u8def\u5f84\u8f6c\u4e3a\u771f\u5b9e\u8def\u5f84\uff0c\u5e76\u4ee5\u771f\u5b9e\u8def\u5f84\u4f5c\u4e3a\u7d22\u5f15\u3002\u7531\u4e8e\u6587\u4ef6\u6a21\u5757\u77e5\u9053\u4e86\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u56e0\u6b64\u52a0\u8f7d\u901f\u5ea6\u4e5f\u662f\u6bd4\u8f83\u5feb\u7684\uff0c\u4ec5\u6b21\u4e8e\u6838\u5fc3\u6a21\u5757\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u6a21\u5757\n\u81ea\u5b9a\u4e49\u6a21\u5757\u662f\u4e00\u7c7b\u7279\u6b8a\u7684\u6587\u4ef6\u6a21\u5757\uff0c\u5b83\u53ef\u80fd\u662f\u4e00\u4e2a\u6587\u4ef6\u6216\u8005\u5305\u7684\u5f62\u5f0f\uff0c\u8fd9\u7c7b\u6a21\u5757\u7684\u67e5\u627e\u662f\u6700\u8d39\u65f6\u7684\uff0c\u4e5f\u662f\u6700\u6162\u7684\u4e00\u79cd\u3002node\u5728\u67e5\u627e\u6a21\u5757\u65f6\u6309\u7167\u6a21\u5757\u8def\u5f84\u7684\u67e5\u627e\u7b56\u7565\uff0c\u6709\u70b9\u7c7b\u4f3c\u4e8eJavaScript\u7684\u539f\u578b\u94fe\u4e00\u6837\uff0c\u9010\u7ea7\u5411\u4e0a\u67e5\u627e\uff0c\u76f4\u5230\u9876\u7ea7\u4e3a\u6b62\u3002"))),(0,l.kt)("h2",{id:"module-\u662f\u4e00\u4e2a\u5bf9\u8c61-require-\u662f\u4e00\u4e2a\u51fd\u6570"},"module \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c require \u662f\u4e00\u4e2a\u51fd\u6570"),(0,l.kt)("p",null,"module \u4e2d\u7684\u4e00\u4e9b\u5c5e\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"exports\uff1a\u8fd9\u5c31\u662f module.exports \u5bf9\u5e94\u7684\u503c\uff0c\u7531\u4e8e\u8fd8\u6ca1\u6709\u8d4b\u4efb\u4f55\u503c\u7ed9\u5b83\uff0c\u5b83\u76ee\u524d\u662f\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"loaded\uff1a\u8868\u793a\u5f53\u524d\u7684\u6a21\u5757\u662f\u5426\u52a0\u8f7d\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},"paths\uff1anode \u6a21\u5757\u7684\u52a0\u8f7d\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"require \u51fd\u6570\u4e2d\u4e5f\u6709\u4e00\u4e9b\u503c\u5f97\u6ce8\u610f\u7684\u5c5e\u6027\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"main \u6307\u5411\u5f53\u524d\u5f53\u524d\u5f15\u7528\u81ea\u5df1\u7684\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"extensions \u8868\u793a\u76ee\u524d node \u652f\u6301\u7684\u51e0\u79cd\u52a0\u8f7d\u6a21\u5757\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"cache \u8868\u793a node \u4e2d\u6a21\u5757\u52a0\u8f7d\u7684\u7f13\u5b58\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u4e00\u4e2a\u6a21\u5757\u52a0\u8f7d\u4e00\u6b21\u540e\uff0c\u4e4b\u540e require \u4e0d\u4f1a\u518d\u52a0\u8f7d\u4e00\u6b21\uff0c\u800c\u662f\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u3002")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u8981\u5b9e\u73b0\u6a21\u5757\u8fd9\u4e2a\u529f\u80fd\uff0c\u5e76\u4e0d\u9700\u8981\u8bed\u6cd5\u5c42\u9762\u7684\u652f\u6301\u3002\u5b9e\u73b0\u201c\u6a21\u5757\u201d\u529f\u80fd\u7684\u5965\u5999\u5c31\u5728\u4e8eJavaScript\u662f\u4e00\u79cd\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u652f\u6301\u95ed\u5305\u3002")),(0,l.kt)("p",null,"\u628a\u4e00\u6bb5JavaScript\u4ee3\u7801\u7528\u4e00\u4e2a\u51fd\u6570\u5305\u88c5\u8d77\u6765\uff0c\u8fd9\u6bb5\u4ee3\u7801\u7684\u6240\u6709\u201c\u5168\u5c40\u201d\u53d8\u91cf\u5c31\u53d8\u6210\u4e86\u51fd\u6570\u5185\u90e8\u7684\u5c40\u90e8\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"hello.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var a1 = 'Hello';\nvar name = 'world';\nconsole.log(a1 + ' ' + name + '!');\n")),(0,l.kt)("p",null,"Node.js\u52a0\u8f7d\u4e86hello.js\u540e\uff0c\u5b83\u53ef\u4ee5\u628a\u4ee3\u7801\u5305\u88c5\u4e00\u4e0b\u3002\n\u8fd9\u6837\u4e00\u6765\uff0c\u539f\u6765\u7684\u5168\u5c40\u53d8\u91cfs\u73b0\u5728\u53d8\u6210\u4e86\u533f\u540d\u51fd\u6570\u5185\u90e8\u7684\u5c40\u90e8\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u5982\u679cNode.js\u7ee7\u7eed\u52a0\u8f7d\u5176\u4ed6\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u4e2d\u5b9a\u4e49\u7684\u201c\u5168\u5c40\u201d\u53d8\u91cfa1\u4e5f\u4e92\u4e0d\u5e72\u6270\u3002\n\u6240\u4ee5\uff0cNode\u5229\u7528JavaScript\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7279\u6027\uff0c\u8f7b\u800c\u6613\u4e3e\u5730\u5b9e\u73b0\u4e86\u6a21\u5757\u7684\u9694\u79bb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(function () {\n    // \u8bfb\u53d6\u7684hello.js\u4ee3\u7801:\n    var a1 = 'Hello';\n    var name = 'world';\n    console.log(a1 + ' ' + name + '!');\n})();\n")),(0,l.kt)("p",null,"\u6a21\u5757\u7684\u8f93\u51famodule.exports\u600e\u4e48\u5b9e\u73b0\uff1f\nhello.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Node\u53ef\u4ee5\u5148\u51c6\u5907\u4e00\u4e2a\u5bf9\u8c61module\uff1a\n/*\n\u53ef\u89c1\uff0c\u53d8\u91cfmodule\u662fNode\u5728\u52a0\u8f7djs\u6587\u4ef6\u524d\u51c6\u5907\u7684\u4e00\u4e2a\u53d8\u91cf\uff0c\u5e76\u5c06\u5176\u4f20\u5165\u52a0\u8f7d\u51fd\u6570\uff0c\u6211\u4eec\u5728hello.js\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u53d8\u91cfmodule\u539f\u56e0\u5c31\u5728\u4e8e\u5b83\u5b9e\u9645\u4e0a\u662f\u51fd\u6570\u7684\u4e00\u4e2a\u53c2\u6570\uff1a\nmodule.exports = greet;\n*/\nvar module = {\n    id: 'hello',\n    exports: {}\n};\n\nvar load = function (module) {\n    // \u8bfb\u53d6\u7684hello.js\u4ee3\u7801:\n    function greet(name) {\n        console.log('Hello, ' + name + '!');\n    }\n    \n    module.exports = greet;\n    // hello.js\u4ee3\u7801\u7ed3\u675f\n    return module.exports;\n};\n\nvar exported = load(module);\n// \u4fdd\u5b58module:\nsave(module, exported);\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u628a\u53c2\u6570module\u4f20\u9012\u7ed9load()\u51fd\u6570\uff0chello.js\u5c31\u987a\u5229\u5730\u628a\u4e00\u4e2a\u53d8\u91cf\u4f20\u9012\u7ed9\u4e86Node\u6267\u884c\u73af\u5883\uff0cNode\u4f1a\u628amodule\u53d8\u91cf\u4fdd\u5b58\u5230\u67d0\u4e2a\u5730\u65b9\u3002"),(0,l.kt)("p",null,"\u7531\u4e8eNode\u4fdd\u5b58\u4e86\u6240\u6709\u5bfc\u5165\u7684module\uff0c\u5f53\u6211\u4eec\u7528require()\u83b7\u53d6module\u65f6\uff0cNode\u627e\u5230\u5bf9\u5e94\u7684module\uff0c\u628a\u8fd9\u4e2amodule\u7684exports\u53d8\u91cf\u8fd4\u56de\uff0c\n\u8fd9\u6837\uff0c\u53e6\u4e00\u4e2a\u6a21\u5757\u5c31\u987a\u5229\u62ff\u5230\u4e86\u6a21\u5757\u7684\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var greet = require('./hello');\n")),(0,l.kt)("h3",{id:"exports\u4e0emoduleexports\u7684\u533a\u522b"},"exports\u4e0emodule.exports\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u9996\u5148Node\u4f1a\u628a\u6574\u4e2a\u5f85\u52a0\u8f7d\u7684hello.js\u6587\u4ef6\u653e\u5165\u4e00\u4e2a\u5305\u88c5\u51fd\u6570load\u4e2d\u6267\u884c\u3002load()\u51fd\u6570\u6700\u7ec8\u8fd4\u56demodule.exports"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u6267\u884c\u8fd9\u4e2aload()\u51fd\u6570\u524d\uff0cNode\u51c6\u5907\u597d\u4e86module\u53d8\u91cf\uff1a\nvar module = {\n    id: 'hello',\n    exports: {}\n};\n\nvar load = function (exports, module) {\n    // hello.js\u7684\u6587\u4ef6\u5185\u5bb9\n    ...\n    // load\u51fd\u6570\u8fd4\u56de:\n    return module.exports;\n};\n\nvar exported = load(module.exports, module);\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNode\u51c6\u5907\u7684exports\u53d8\u91cf\u548cmodule.exports\u53d8\u91cf\u5b9e\u9645\u4e0a\u662f\u540c\u4e00\u4e2a\u53d8\u91cf\uff0c\u5e76\u4e14\u521d\u59cb\u5316\u4e3a\u7a7a\u5bf9\u8c61{}\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"exports.foo = function () {\n  return 'foo';\n};\nexports.bar = function () {\n  return 'bar';\n};\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u628aexports\u770b\u6210\u662f\u5bf9module.exports\u7684\u5f15\u7528, \u53ef\u4ee5\u7528exports.foo\u5f80\u91cc\u9762\u589e\u52a0\u65b0\u7684\u5c5e\u6027,\u5982\u679c\u8981\u8f93\u51fa\u4e00\u4e2a\u952e\u503c\u5bf9\u8c61{}\uff0c\u53ef\u4ee5\u5229\u7528exports\u8fd9\u4e2a\u5df2\u5b58\u5728\u7684\u7a7a\u5bf9\u8c61{}\uff0c\u5e76\u7ee7\u7eed\u5728\u4e0a\u9762\u6dfb\u52a0\u65b0\u7684\u952e\u503c\uff1b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6ce8\u610f\uff1a\n\u4f46\u662f\u5982\u679c\u76f4\u63a5\u5bf9exports\u8d4b\u503c,exports\u5c31\u4e0d\u518d\u662fmodule.exports\u7684\u5f15\u7528\u4e86, \u6240\u4ee5module.exports\u4ecd\u7136\u4e3a\u7a7a\u5bf9\u8c61{}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u8981\u8f93\u51fa\u7684\u662f\u4e00\u4e2a\u51fd\u6570\u6216\u6570\u7ec4\uff0c\u90a3\u4e48\uff0c\u53ea\u80fd\u7ed9module.exports\u8d4b\u503c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function () { return 'foo'; };\n")),(0,l.kt)("p",null,"\u7ed9exports\u8d4b\u503c\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u8d4b\u503c\u540e\uff0cmodule.exports\u4ecd\u7136\u662f\u7a7a\u5bf9\u8c61{}\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff1a\u76f4\u63a5\u5bf9module.exports\u8d4b\u503c\uff0c\u53ef\u4ee5\u5e94\u5bf9\u4efb\u4f55\u60c5\u51b5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    foo: function () { return 'foo'; }\n};\n\n// \u6216\u8005\uff1a\nmodule.exports = function () { return 'foo'; };\n")),(0,l.kt)("h2",{id:"commonjs-\u8f93\u51fa\u62f7\u8d1d\u7684\u4f8b\u5b50"},"commonjs \u8f93\u51fa\u62f7\u8d1d\u7684\u4f8b\u5b50"),(0,l.kt)("p",null,"exports \u5bf9\u8c61\u662f\u6a21\u5757\u5185\u5916\u7684\u552f\u4e00\u5173\u8054\uff0c commonjs \u8f93\u51fa\u7684\u5185\u5bb9\uff0c\u5c31\u662f exports \u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u6a21\u5757\u8fd0\u884c\u7ed3\u675f\uff0c\u5c5e\u6027\u5c31\u786e\u5b9a\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// a.js\nlet a = 1;\nlet b = { num: 1 }\nsetTimeout(() => {\n    a = 2;\n    b = { num: 2 };\n}, 200);\nmodule.exports = {\n    a,\n    b,\n};\n\n// main.js\n// node main.js\nlet {a, b} = require('./a');\nconsole.log(a);  // 1\nconsole.log(b);  // { num: 1 }\nsetTimeout(() => {\n    console.log(a);  // 1\n    console.log(b);  // { num: 1 }\n}, 500);\n")),(0,l.kt)("p",null,"require\uff1a\u8f93\u51fa\u662f\u503c\u7684\u62f7\u8d1d\uff0c\u6a21\u5757\u5c31\u662f\u5bf9\u8c61\uff0c\u8f93\u5165\u65f6\u5fc5\u987b\u67e5\u627e\u5bf9\u8c61\u5c5e\u6027\n\u6ce8\u610f\uff1aCommonJS \u6a21\u5757\u8f93\u51fa\u7684\u662f\u503c\u7684\u62f7\u8d1d\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u65e6\u8f93\u51fa\u4e00\u4e2a\u503c\uff0c\u6a21\u5757\u5185\u90e8\u7684\u53d8\u5316\u5c31\u5f71\u54cd\u4e0d\u5230\u8fd9\u4e2a\u503c"),(0,l.kt)("p",null,"\u4fee\u6539\u503c\u540e\u518d\u6b21\u5f15\u7528\u5e76\u4e0d\u4f1a\u83b7\u53d6\u6700\u65b0\u503c,CommonJS \u6a21\u5757\u8f93\u51fa\u7684\u662f\u503c\u7684\u62f7\u8d1d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// lib.js\nvar counter = 3;\nfunction incCounter() {\n  counter++;\n}\nmodule.exports = {\n  counter: counter,\n  incCounter: incCounter,\n};\n\n\n// main.js\nvar mod = require('./lib');\n\nconsole.log(mod.counter);  // 3\nmod.incCounter();\n\nconsole.log(mod.counter); // 3\n// lib.js\u6a21\u5757\u52a0\u8f7d\u4ee5\u540e\uff0c\u5b83\u7684\u5185\u90e8\u53d8\u5316\u5c31\u5f71\u54cd\u4e0d\u5230\u8f93\u51fa\u7684mod.counter\u4e86\u3002\n// \u8fd9\u662f\u56e0\u4e3amod.counter\u662f\u4e00\u4e2a\u539f\u59cb\u7c7b\u578b\u7684\u503c\uff0c\u4f1a\u88ab\u7f13\u5b58\u3002\n\n// \u9664\u975e\u5199\u6210\u4e00\u4e2a\u51fd\u6570\uff0c\u624d\u80fd\u5f97\u5230\u5185\u90e8\u53d8\u52a8\u540e\u7684\u503c\u3002\n// lib.js\nvar counter = 3;\nfunction incCounter() {\n  counter++;\n}\nmodule.exports = {\n  get counter() {\n    return counter\n  },\n  incCounter: incCounter,\n};\n")),(0,l.kt)("h3",{id:"\u6a21\u5757\u7684\u8f93\u51famoduleexports\u600e\u4e48\u5b9e\u73b0"},"\u6a21\u5757\u7684\u8f93\u51famodule.exports\u600e\u4e48\u5b9e\u73b0\uff1f"),(0,l.kt)("p",null,"hello.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Node\u53ef\u4ee5\u5148\u51c6\u5907\u4e00\u4e2a\u5bf9\u8c61module\uff1a\n/*\n\n\u53ef\u89c1\uff0c\u53d8\u91cfmodule\u662fNode\u5728\u52a0\u8f7djs\u6587\u4ef6\u524d\u51c6\u5907\u7684\u4e00\u4e2a\u53d8\u91cf\uff0c\u5e76\u5c06\u5176\u4f20\u5165\u52a0\u8f7d\u51fd\u6570\uff0c\u6211\u4eec\u5728hello.js\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u53d8\u91cfmodule\u539f\u56e0\u5c31\u5728\u4e8e\u5b83\u5b9e\u9645\u4e0a\u662f\u51fd\u6570\u7684\u4e00\u4e2a\u53c2\u6570\uff1a\nmodule.exports = greet;\n*/\nvar module = {\n    id: 'hello',\n    exports: {}\n};\n\nvar load = function (module) {\n    // \u8bfb\u53d6\u7684hello.js\u4ee3\u7801:\n    function greet(name) {\n        console.log('Hello, ' + name + '!');\n    }\n    \n    module.exports = greet;\n    // hello.js\u4ee3\u7801\u7ed3\u675f\n    return module.exports;\n};\n\nvar exported = load(module);\n// \u4fdd\u5b58module:\nsave(module, exported);\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u628a\u53c2\u6570module\u4f20\u9012\u7ed9load()\u51fd\u6570\uff0chello.js\u5c31\u987a\u5229\u5730\u628a\u4e00\u4e2a\u53d8\u91cf\u4f20\u9012\u7ed9\u4e86Node\u6267\u884c\u73af\u5883\uff0cNode\u4f1a\u628amodule\u53d8\u91cf\u4fdd\u5b58\u5230\u67d0\u4e2a\u5730\u65b9\u3002"),(0,l.kt)("p",null,"\u7531\u4e8eNode\u4fdd\u5b58\u4e86\u6240\u6709\u5bfc\u5165\u7684module\uff0c\u5f53\u6211\u4eec\u7528require()\u83b7\u53d6module\u65f6\uff0cNode\u627e\u5230\u5bf9\u5e94\u7684module\uff0c\u628a\u8fd9\u4e2amodule\u7684exports\u53d8\u91cf\u8fd4\u56de\uff0c\n\u8fd9\u6837\uff0c\u53e6\u4e00\u4e2a\u6a21\u5757\u5c31\u987a\u5229\u62ff\u5230\u4e86\u6a21\u5757\u7684\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var greet = require('./hello');\n")),(0,l.kt)("h2",{id:"import\u52a0\u8f7dcommonjs\u6a21\u5757"},"import\u52a0\u8f7dCommonJS\u6a21\u5757"),(0,l.kt)("p",null,"\u4f7f\u7528import\u547d\u4ee4\u52a0\u8f7dCommonJS\u6a21\u5757\uff0cNode\u4f1a\u81ea\u52a8\u5c06module.exports\u5c5e\u6027\u5f53\u505a\u6a21\u5757\u7684\u9ed8\u8ba4\u8f93\u51fa\uff0c\u5373\u7b49\u540c\u4e8eexport default"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// a.js\nmodule.exports = {\n  foo: 'hello',\n  bar: 'world'\n}\n\n// \u5728import\u5f15\u5165\u65f6\u7b49\u540c\u4e8e\nexport default {\n  foo: 'hello',\n  bar: 'world'\n}\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a ES6 \u6a21\u5757\u9700\u8981\u652f\u6301\u9759\u6001\u4ee3\u7801\u5206\u6790\uff0c\u800c CommonJS \u6a21\u5757\u7684\u8f93\u51fa\u63a5\u53e3\u662fmodule.exports\uff0c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u65e0\u6cd5\u88ab\u9759\u6001\u5206\u6790\uff0c\u6240\u4ee5\u53ea\u80fd\u6574\u4f53\u52a0\u8f7d\u3002"),(0,l.kt)("p",null,"ES6 \u6a21\u5757\u7684import\u547d\u4ee4\u53ef\u4ee5\u52a0\u8f7d CommonJS \u6a21\u5757\uff0c\u4f46\u662f\u53ea\u80fd\u6574\u4f53\u52a0\u8f7d\uff0c\u4e0d\u80fd\u53ea\u52a0\u8f7d\u5355\u4e00\u7684\u8f93\u51fa\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6b63\u786e \nimport packageMain from 'commonjs-package'; \n\n// \u62a5\u9519 \nimport { method } from 'commonjs-package';\n\n\n// \u52a0\u8f7d\u5355\u4e00\u7684\u8f93\u51fa\u9879\uff0c\u53ef\u4ee5\u5199\u6210\u4e0b\u9762\u8fd9\u6837\u3002\nimport packageMain from 'commonjs-package'; \nconst { method } = packageMain;\n")),(0,l.kt)("h2",{id:"\u540c\u65f6\u652f\u6301\u4e24\u79cd\u683c\u5f0f\u7684\u6a21\u5757"},"\u540c\u65f6\u652f\u6301\u4e24\u79cd\u683c\u5f0f\u7684\u6a21\u5757"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6a21\u5757\u540c\u65f6\u8981\u652f\u6301 CommonJS \u548c ES6 \u4e24\u79cd\u683c\u5f0f\uff0c\u4e5f\u5f88\u5bb9\u6613\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u539f\u59cb\u6a21\u5757\u662f ES6 \u683c\u5f0f\uff0c\u90a3\u4e48\u9700\u8981\u7ed9\u51fa\u4e00\u4e2a\u6574\u4f53\u8f93\u51fa\u63a5\u53e3\uff0c\u6bd4\u5982export default obj\uff0c\u4f7f\u5f97 CommonJS \u53ef\u4ee5\u7528import()\u8fdb\u884c\u52a0\u8f7d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u539f\u59cb\u6a21\u5757\u662f CommonJS \u683c\u5f0f\uff0c\u90a3\u4e48\u53ef\u4ee5\u52a0\u4e00\u4e2a\u5305\u88c5\u5c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5148\u6574\u4f53\u8f93\u5165 CommonJS \u6a21\u5757\uff0c\u7136\u540e\u518d\u6839\u636e\u9700\u8981\u8f93\u51fa\u5177\u540d\u63a5\u53e3\u3002\nimport cjsModule from '../index.js';\nexport const foo = cjsModule.foo;\n")),(0,l.kt)("h2",{id:"moduleexports\u548cexports\u533a\u522b"},"module.exports\u548cexports\u533a\u522b"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNode\u51c6\u5907\u7684exports\u53d8\u91cf\u548cmodule.exports\u53d8\u91cf\u5b9e\u9645\u4e0a\u662f\u540c\u4e00\u4e2a\u53d8\u91cf\uff0c\u5e76\u4e14\u521d\u59cb\u5316\u4e3a\u7a7a\u5bf9\u8c61{}\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e8e\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5199\nexports.foo = function () {\n  return 'foo';\n};\nexports.bar = function () {\n  return 'bar';\n};\n\n// \u4e5f\u53ef\u4ee5\u5199\uff1a\nmodule.exports.foo = function () { \n  return 'foo';\n};\nmodule.exports.bar = function () {\n  return 'bar';\n};\n")),(0,l.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0cNode\u9ed8\u8ba4\u7ed9\u4f60\u51c6\u5907\u4e86\u4e00\u4e2a\u7a7a\u5bf9\u8c61{}\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u76f4\u63a5\u5f80\u91cc\u9762\u52a0\u4e1c\u897f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u53ef\u4ee5\u628aexports\u770b\u6210\u662f\u5bf9module.exports\u7684\u5f15\u7528, \u53ef\u4ee5\u7528exports.foo\u5f80\u91cc\u9762\u589e\u52a0\u65b0\u7684\u5c5e\u6027,\u5982\u679c\u8981\u8f93\u51fa\u4e00\u4e2a\u952e\u503c\u5bf9\u8c61{}\uff0c\u53ef\u4ee5\u5229\u7528exports\u8fd9\u4e2a\u5df2\u5b58\u5728\u7684\u7a7a\u5bf9\u8c61{}\uff0c\u5e76\u7ee7\u7eed\u5728\u4e0a\u9762\u6dfb\u52a0\u65b0\u7684\u952e\u503c\uff1b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6ce8\u610f\uff1a\n\u4f46\u662f\u5982\u679c\u76f4\u63a5\u5bf9exports\u8d4b\u503c,exports\u5c31\u4e0d\u518d\u662fmodule.exports\u7684\u5f15\u7528\u4e86, \u6240\u4ee5module.exports\u4ecd\u7136\u4e3a\u7a7a\u5bf9\u8c61{}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u8981\u8f93\u51fa\u7684\u662f\u4e00\u4e2a\u51fd\u6570\u6216\u6570\u7ec4\uff0c\u90a3\u4e48\uff0c\u53ea\u80fd\u7ed9module.exports\u8d4b\u503c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function () { return 'foo'; };\n")),(0,l.kt)("p",null,"\u7ed9exports\u8d4b\u503c\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u8d4b\u503c\u540e\uff0cmodule.exports\u4ecd\u7136\u662f\u7a7a\u5bf9\u8c61{}\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff1a\u76f4\u63a5\u5bf9module.exports\u8d4b\u503c\uff0c\u53ef\u4ee5\u5e94\u5bf9\u4efb\u4f55\u60c5\u51b5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    foo: function () { return 'foo'; }\n};\n\n// \u6216\u8005\uff1a\nmodule.exports = function () { return 'foo'; };\n")))}d.isMDXComponent=!0}}]);