"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[6317],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"dynamic-import-\u52a8\u6001-\u5f02\u6b65",sidebar_position:1},l=void 0,o={unversionedId:"build-webpack/dynamic-import-\u52a8\u6001-\u5f02\u6b65",id:"build-webpack/dynamic-import-\u52a8\u6001-\u5f02\u6b65",title:"dynamic-import-\u52a8\u6001-\u5f02\u6b65",description:"\u61d2\u52a0\u8f7d\u5728\u9875\u9762\u4e0a\u7684\u5e94\u7528",source:"@site/programming-tech/build-webpack/02-dynamic-import-\u52a8\u6001-\u5f02\u6b65.md",sourceDirName:"build-webpack",slug:"/build-webpack/dynamic-import-\u52a8\u6001-\u5f02\u6b65",permalink:"/build-webpack/dynamic-import-\u52a8\u6001-\u5f02\u6b65",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/build-webpack/02-dynamic-import-\u52a8\u6001-\u5f02\u6b65.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"dynamic-import-\u52a8\u6001-\u5f02\u6b65",sidebar_position:1},sidebar:"docs",previous:{title:"\u6d4f\u89c8\u5668\u6b63\u5e38\u8fd0\u884c\u6d41\u7a0b-\u9759\u6001-\u540c\u6b65",permalink:"/build-webpack/\u6d4f\u89c8\u5668\u6b63\u5e38\u8fd0\u884c\u6d41\u7a0b-\u9759\u6001-\u540c\u6b65"},next:{title:"\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",permalink:"/build-webpack/\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316"}},p={},c=[{value:"\u61d2\u52a0\u8f7d\u5728\u9875\u9762\u4e0a\u7684\u5e94\u7528",id:"\u61d2\u52a0\u8f7d\u5728\u9875\u9762\u4e0a\u7684\u5e94\u7528",level:2},{value:"\u5728Webpack\u4e2d\u5e38\u7528\u7684\u4ee3\u7801\u5206\u79bb\u65b9\u6cd5\u6709\u4e09\u79cd\uff1a",id:"\u5728webpack\u4e2d\u5e38\u7528\u7684\u4ee3\u7801\u5206\u79bb\u65b9\u6cd5\u6709\u4e09\u79cd",level:3},{value:"Webpack\u63d0\u4f9b\u4e24\u79cd\u65b9\u6cd5\u52a8\u6001\u4ee3\u7801\u62c6\u5206",id:"webpack\u63d0\u4f9b\u4e24\u79cd\u65b9\u6cd5\u52a8\u6001\u4ee3\u7801\u62c6\u5206",level:3},{value:"\u61d2\u52a0\u8f7d\u5206\u6790",id:"\u61d2\u52a0\u8f7d\u5206\u6790",level:2},{value:"import\u548crequire \u533a\u522b",id:"import\u548crequire-\u533a\u522b",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u70b9\u51fb\u540e\u6309\u94ae\u7b2c\u4e00\u6b65",id:"\u70b9\u51fb\u540e\u6309\u94ae\u7b2c\u4e00\u6b65",level:3},{value:"\u7ed9promises\u6570\u7ec4\u8d4b\u503c\uff0c\u5e76\u901a\u8fc7jsonp\u53bb\u52a0\u8f7d\u6587\u4ef6",id:"\u7ed9promises\u6570\u7ec4\u8d4b\u503c\u5e76\u901a\u8fc7jsonp\u53bb\u52a0\u8f7d\u6587\u4ef6",level:3},{value:"\u6700\u540e\uff1a\u6267\u884c<code>\u4f20\u5165\u7684\u56de\u8c03loadingEnded</code>\u548c\u6267\u884c<code>document.head.appendChild(script)</code>",id:"\u6700\u540e\u6267\u884c\u4f20\u5165\u7684\u56de\u8c03loadingended\u548c\u6267\u884cdocumentheadappendchildscript",level:3}],u={toc:c},d="wrapper";function s(e){let{components:n,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u61d2\u52a0\u8f7d\u5728\u9875\u9762\u4e0a\u7684\u5e94\u7528"},"\u61d2\u52a0\u8f7d\u5728\u9875\u9762\u4e0a\u7684\u5e94\u7528"),(0,a.kt)("p",null,"\u6ca1\u6709\u5e94\u7528\u61d2\u52a0\u8f7d\uff0cwebpack\u6253\u5305\u540e\uff0c\u4f1a\u653e\u5728\u4e00\u4e2a\u5355\u72ec\u7684js\u6587\u4ef6\u4e2d\u4f1a\u9020\u6210\u8fd9\u4e2a\u9875\u9762\u975e\u5e38\u5927\uff0c\u9020\u6210\u8fdb\u5165\u9996\u9875\u65f6\uff0c\u4f1a\u51fa\u73b0\u957f\u65f6\u95f4\u7684\u767d\u5c4f;"),(0,a.kt)("p",null,"\u8fd0\u7528\u61d2\u52a0\u8f7d\u5219\u53ef\u4ee5\u5c06\u9875\u9762\u8fdb\u884c\u5212\u5206\uff0c\u9700\u8981\u7684\u65f6\u5019\u52a0\u8f7d\u9875\u9762\uff0c\u53ef\u4ee5\u6709\u6548\u7684\u5206\u62c5\u9996\u9875\u6240\u627f\u62c5\u7684\u52a0\u8f7d\u538b\u529b\uff0c\u51cf\u5c11\u9996\u9875\u52a0\u8f7d\u7528\u65f6\u3002"),(0,a.kt)("h3",{id:"\u5728webpack\u4e2d\u5e38\u7528\u7684\u4ee3\u7801\u5206\u79bb\u65b9\u6cd5\u6709\u4e09\u79cd"},"\u5728Webpack\u4e2d\u5e38\u7528\u7684\u4ee3\u7801\u5206\u79bb\u65b9\u6cd5\u6709\u4e09\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5165\u53e3\u8d77\u70b9\uff1a\u4f7f\u7528 entry \u914d\u7f6e\u624b\u52a8\u5730\u5206\u79bb\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9632\u6b62\u91cd\u590d\uff1a\u4f7f\u7528 Entry dependencies \u6216\u8005 SplitChunksPlugin \u53bb\u91cd\u548c\u5206\u79bb chunk\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u52a8\u6001\u5bfc\u5165\uff1a\u901a\u8fc7\u6a21\u5757\u7684\u5185\u8054\u51fd\u6570\u8c03\u7528\u6765\u5206\u79bb\u4ee3\u7801\u3002")),(0,a.kt)("h3",{id:"webpack\u63d0\u4f9b\u4e24\u79cd\u65b9\u6cd5\u52a8\u6001\u4ee3\u7801\u62c6\u5206"},"Webpack\u63d0\u4f9b\u4e24\u79cd\u65b9\u6cd5\u52a8\u6001\u4ee3\u7801\u62c6\u5206"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\u501f\u52a9ES6\u7684\u52a8\u6001\u52a0\u8f7d\u6a21\u5757 - import\uff08\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import() \u7684\u8bed\u6cd5\u5341\u5206\u7b80\u5355\u3002\u8be5\u51fd\u6570\u53ea\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u5c31\u662f\u5f15\u7528\u6a21\u5757\u7684\u5730\u5740\uff0c\u5e76\u4e14\u4f7f\u7528\xa0promise\xa0\u5f0f\u7684\u56de\u8c03\u83b7\u53d6\u52a0\u8f7d\u7684\u6a21\u5757\u3002\n\n\u901a\u8fc7import()\u5f15\u7528\u7684\u5b50\u6a21\u5757\u4f1a\u88ab\u5355\u72ec\u5206\u79bb\u51fa\u6765\uff0c\u6253\u5305\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u3002\n")),(0,a.kt)("p",null,"\u501f\u52a9import\uff08\uff09\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u5b50\u6a21\u5757\uff08\u5b50\u7ec4\u4ef6\uff09\u7684\u72ec\u7acb\u6253\u5305\uff08children chunk\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\uff0cWebpack \u7684\u9057\u7559\u529f\u80fd\uff0c\u4f7f\u7528 Webpack \u7279\u5b9a\u7684 require.ensure (\u4e0d\u63a8\u8350\u4f7f\u7528) \uff0c\u672c\u6587\u4e0d\u505a\u63a2\u8ba8\n\u73b0\u5728\uff0c\u8ddd\u79bb\u5b9e\u73b0\u61d2\u52a0\u8f7d\uff08\u6309\u9700\u52a0\u8f7d\uff09\u8fd8\u5dee\u5173\u952e\u7684\u4e00\u6b65 -- \u5982\u4f55\u6b63\u786e\u4f7f\u7528\u72ec\u7acb\u6253\u5305\u7684\u5b50\u6a21\u5757\u6587\u4ef6\uff08children chunk\uff09\u5b9e\u73b0\u61d2\u52a0\u8f7d\u3002")),(0,a.kt)("h2",{id:"\u61d2\u52a0\u8f7d\u5206\u6790"},"\u61d2\u52a0\u8f7d\u5206\u6790"),(0,a.kt)("h3",{id:"import\u548crequire-\u533a\u522b"},"import\u548crequire \u533a\u522b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"import \u662f\u89e3\u6784\u8fc7\u7a0b\u5e76\u4e14\u662f\u7f16\u8bd1\u65f6\u6267\u884c"),(0,a.kt)("li",{parentName:"ol"},"require \u662f\u8d4b\u503c\u8fc7\u7a0b\u5e76\u4e14\u662f\u8fd0\u884c\u65f6\u624d\u6267\u884c\uff0c\u4e5f\u5c31\u662f\u5f02\u6b65\u52a0\u8f7d")),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u61d2\u52a0\u8f7d\uff08\u6309\u9700\u52a0\u8f7d\uff09\u539f\u7406\u5206\u4e3a\u4e24\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06\u9700\u8981\u8fdb\u884c\u61d2\u52a0\u8f7d\u7684\u5b50\u6a21\u5757\u6253\u5305\u6210\u72ec\u7acb\u7684\u6587\u4ef6\uff08children chunk\uff09\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u501f\u52a9\u51fd\u6570\u6765\u5b9e\u73b0\u5ef6\u8fdf\u6267\u884c\u5b50\u6a21\u5757\u7684\u52a0\u8f7d\u4ee3\u7801\uff1b\u8fd9\u91cc\u7684\u6280\u672f\u96be\u70b9\u5c31\u662f\u5982\u4f55\u5c06\u61d2\u52a0\u8f7d\u7684\u5b50\u6a21\u5757\u6253\u5305\u6210\u72ec\u7acb\u7684\u6587\u4ef6\u3002\u597d\u5728ES6\u63d0\u4f9b\u4e86import()\u3002")),(0,a.kt)("p",null,"JavaScript\u51fd\u6570\u7684\u7279\u6027\uff1a\n\u65e0\u8bba\u4f7f\u7528\u51fd\u6570\u58f0\u660e\u8fd8\u662f\u51fd\u6570\u8868\u8fbe\u5f0f\u521b\u5efa\u51fd\u6570\uff0c\u51fd\u6570\u88ab\u521b\u5efa\u540e\u5e76\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u53ea\u6709\u7b49\u5230\u51fd\u6570\u88ab\u8c03\u7528\u4e4b\u540e\uff0c\u624d\u53ea\u8981\u5c06\u9700\u8981\u8fdb\u884c\u61d2\u52a0\u8f7d\u7684\u5b50\u6a21\u5757\u6587\u4ef6\uff08children chunk\uff09\u7684\u5f15\u5165\u8bed\u53e5\uff08\u672c\u6587\u7279\u6307import\uff08\uff09\uff09\u653e\u5230\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u3002\u7136\u540e\u518d\u9700\u8981\u52a0\u8f7d\u7684\u65f6\u5019\u6267\u884c\u8be5\u51fd\u6570\u3002\u5728\u6d4f\u89c8\u5668\u8fd0\u884c\u5230\u8fd9\u4e00\u884c\u4ee3\u7801\u65f6\uff0c\u5c31\u4f1a\u81ea\u52a8\u8bf7\u6c42\u8fd9\u4e2a\u8d44\u6e90\uff0c\u5b9e\u73b0\u5f02\u6b65\u52a0\u8f7d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"button.onclick = e => import(/* webpackChunkName: \"print\" */ './print').then(module => {\n  const print = module.default;\n\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\uff1a\u5f53\u70b9\u51fb\u6309\u94ae\u65f6\uff0c\u62fc\u63a5\u8bf7\u6c42\u5730\u5740\u5730\u5740,\u901a\u8fc7 jsonp\u53bb\u52a0\u8f7d print.js \u6a21\u5757\u6240\u5bf9\u5e94\u7684\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b65\uff1a\u52a0\u8f7d\u56de\u6765\u540e\u5728\u6d4f\u89c8\u5668\u4e2d\u6267\u884c\u6b64JS\u811a\u672c\uff0c\u5c06\u8bf7\u6c42\u8fc7\u6765\u7684\u6a21\u5757\u5b9a\u4e49\u5408\u5e76\u5230 index.js \u4e2d\u7684 modules \u4e2d\u53bb"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b65\uff1a\u5408\u5e76\u5b8c\u540e\uff0c\u53bb\u52a0\u8f7d\u8fd9\u4e2a\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u6b65\uff1a\u62ff\u5230\u8be5\u6a21\u5757\u5bfc\u51fa\u7684\u5185\u5bb9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import _ from 'lodash';\n\nfunction component() {\n  const element = document.createElement('div');\n  const button = document.createElement('button');\n  const br = document.createElement('br');\n\n  button.innerHTML = 'Click me and look at the console!';\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n  element.appendChild(br);\n  element.appendChild(button);\n\n  button.onclick = e => import(/* webpackChunkName: \"print\" */ './print').then(module => {\n    const print = module.default;\n\n    print();\n  });\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n")),(0,a.kt)("p",null,"\u6253\u5305\u540e\u540e\u53ef\u4ee5\u770b\u5230\u70b9\u51fb\u6309\u94ae\u8c03\u7528",(0,a.kt)("strong",{parentName:"p"},"webpack_require"),".e()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\n        \"use strict\";\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \\\"./node_modules/lodash/lodash.js\\\");\\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\\n\\r\\n\\r\\nfunction component() {\\r\\n  const element = document.createElement('div');\\r\\n  const button = document.createElement('button');\\r\\n  const br = document.createElement('br');\\r\\n\\r\\n  button.innerHTML = 'Click me and look at the console!';\\r\\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');\\r\\n  element.appendChild(br);\\r\\n  element.appendChild(button);\\r\\n\\r\\n  // Note that because a network request is involved, some indication\\r\\n  // of loading would need to be shown in a production-level site/app.\\r\\n  button.onclick = e => __webpack_require__.e(/*! import() | print */ \\\"print\\\").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ \\\"./src/print.js\\\")).then(module => {\\r\\n    const print = module.default;\\r\\n\\r\\n    print();\\r\\n  });\\r\\n\\r\\n  return element;\\r\\n}\\r\\n\\r\\ndocument.body.appendChild(component());\\n\\n//# sourceURL=webpack://webpack-helloworld/./src/index.js?\");\n})\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(29761).Z,width:"1725",height:"237"})),(0,a.kt)("h3",{id:"\u70b9\u51fb\u540e\u6309\u94ae\u7b2c\u4e00\u6b65"},"\u70b9\u51fb\u540e\u6309\u94ae\u7b2c\u4e00\u6b65"),(0,a.kt)("p",null,"\u5bf9\u5e94\u6784\u5efa\u6e90\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"./dynamic-import/%E6%9E%84%E5%BB%BA%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E6%BA%90%E7%A0%81"},"\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801")),(0,a.kt)("p",null,"build\u751f\u6210index.bundle.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    /* webpack/runtime/ensure chunk */\n    (() => {\n        __webpack_require__.f = {};\n        // This file contains only the entry chunk.\n        // The chunk loading function for additional chunks\n        __webpack_require__.e = (chunkId) => {\n      console.log('__webpack_require__.e\u88ab\u8c03\u7528')\n            return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {\n        console.log('__webpack_require__.f\u88ab\u8c03\u7528')\n                __webpack_require__.f[key](chunkId, promises);\n                return promises;\n        \n      }, []));\n      \n    };\n    \n  })();\n")),(0,a.kt)("h3",{id:"\u7ed9promises\u6570\u7ec4\u8d4b\u503c\u5e76\u901a\u8fc7jsonp\u53bb\u52a0\u8f7d\u6587\u4ef6"},"\u7ed9promises\u6570\u7ec4\u8d4b\u503c\uff0c\u5e76\u901a\u8fc7jsonp\u53bb\u52a0\u8f7d\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"__webpack_require__.f.j"),"\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"__webpack_require__.l")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"        __webpack_require__.f.j = (chunkId, promises) => {\n                // JSONP chunk loading for javascript\n                var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;\n                if (installedChunkData !== 0) { // 0 means \"already installed\".\n\n                    // a Promise means \"currently loading\".\n                    if (installedChunkData) {\n                        promises.push(installedChunkData[2]);\n          \n        } else {\n                        if (true) { // all chunks have JS\n                            // setup Promise in chunk cache\n                            var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));\n                            promises.push(installedChunkData[2] = promise);\n\n                            // start chunk loading\n                            var url = __webpack_require__.p + __webpack_require__.u(chunkId);\n                            // create error before stack unwound to get useful stacktrace later\n                            var error = new Error();\n                            var loadingEnded = (event) => {\n                                if (__webpack_require__.o(installedChunks, chunkId)) {\n                                    installedChunkData = installedChunks[chunkId];\n                                    if (installedChunkData !== 0) installedChunks[chunkId] = undefined;\n                                    if (installedChunkData) {\n                                        var errorType = event && (event.type === 'load' ? 'missing' : event.type);\n                                        var realSrc = event && event.target && event.target.src;\n                                        error.message = 'Loading chunk ' + chunkId + ' failed.\\n(' + errorType + ': ' + realSrc + ')';\n                                        error.name = 'ChunkLoadError';\n                                        error.type = errorType;\n                                        error.request = realSrc;\n                                        installedChunkData[1](error);\n                  \n                }\n                \n              }\n              \n            };\n                            __webpack_require__.l(url, loadingEnded, \"chunk-\" + chunkId, chunkId);\n            \n          } else installedChunks[chunkId] = 0;\n          \n        }\n        \n      }\n      \n    };\n")),(0,a.kt)("h3",{id:"\u6700\u540e\u6267\u884c\u4f20\u5165\u7684\u56de\u8c03loadingended\u548c\u6267\u884cdocumentheadappendchildscript"},"\u6700\u540e\uff1a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"h3"},"\u4f20\u5165\u7684\u56de\u8c03loadingEnded"),"\u548c\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"h3"},"document.head.appendChild(script)")),(0,a.kt)("p",null,"\u901a\u8fc7 JSONP \u53bb\u52a8\u6001\u5f15\u5165 chunk \u6587\u4ef6\uff0c\u5e76\u6839\u636e\u5f15\u5165\u7684\u7ed3\u679c\u72b6\u6001\u8fdb\u884c\u5904\u7406\uff0c\u90a3\u4e48\u6211\u4eec\u600e\u4e48\u77e5\u9053\u5f15\u5165\u4e4b\u540e\u7684\u72b6\u6001\u5462\uff1f\u6211\u4eec\u6765\u770b\u5f02\u6b65\u52a0\u8f7d\u7684 chunk \u662f\u600e\u6837\u7684"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u6bd4\u5982\u5f53\u70b9\u51fb\u6309\u94ae\u65f6\uff0c\u53ea\u9700\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\u53bb\u8bf7\u6c42\u6587\u4ef6\uff0c\u540e\u9762\u52a0\u8f7d\u65f6\u5e94\u8be5\u8981\u53bb\u4f7f\u7528\u7f13\u5b58\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u5e94build\u6e90\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"./dynamic-import/%E6%9E%84%E5%BB%BA%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E6%BA%90%E7%A0%81"},"\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"build\u4e4b\u540e\u7684\u6e90\u7801\uff1aindex.bundle.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u7ed3\u679c --\x3e\n<script charset="utf-8" data-webpack="webpack-helloworld:chunk-print" src="file:///D:/user_ws/project-learning/webpack-place/dynamic-import/dist/print.bundle.js"><\/script>\n')),(0,a.kt)("p",null,"\u53ef\u89c1\u8d4b\u503c\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"__webpack_require__.l"),"\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'    (() => {\n        var inProgress = {};\n        var dataWebpackPrefix = "webpack-helloworld:";\n        // loadScript function to load a script via script tag\n        __webpack_require__.l = (url, done, key, chunkId) => {\n            if (inProgress[url]) { inProgress[url].push(done); return; }\n            var script, needAttach;\n            if (key !== undefined) {\n                var scripts = document.getElementsByTagName("script");\n                for (var i = 0; i < scripts.length; i++) {\n                    var s = scripts[i];\n                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }\n        }\n      }\n            if (!script) {\n                needAttach = true;\n                script = document.createElement(\'script\');\n\n                script.charset = \'utf-8\';\n                script.timeout = 120;\n                if (__webpack_require__.nc) {\n                    script.setAttribute("nonce", __webpack_require__.nc);\n          \n        }\n                script.setAttribute("data-webpack", dataWebpackPrefix + key);\n                script.src = url;\n        console.log(\'load script===>\', script)\n        \n      }\n            inProgress[url] = [done];\n            var onScriptComplete = (prev, event) => {\n                // avoid mem leaks in IE.\n                script.onerror = script.onload = null;\n                clearTimeout(timeout);\n                var doneFns = inProgress[url];\n                delete inProgress[url];\n                script.parentNode && script.parentNode.removeChild(script);\n                doneFns && doneFns.forEach((fn) => (fn(event)));\n                if (prev) return prev(event);\n        \n      }\n            var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: \'timeout\', target: script }), 120000);\n            script.onerror = onScriptComplete.bind(null, script.onerror);\n            script.onload = onScriptComplete.bind(null, script.onload);\n            needAttach && document.head.appendChild(script);\n      \n    };\n  })();\n')))}s.isMDXComponent=!0},29761:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/\u70b9\u51fb\u6309\u94ae\u540e\u8c03\u7528\u6d41\u7a0b-a39cc007783613aa0b0b2fb676b12e29.png"}}]);