"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3058],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),k=l,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||r;return t?a.createElement(d,p(p({ref:n},c),{},{components:t})):a.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=k;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[s]="string"==typeof e?e:l,p[1]=o;for(var u=2;u<r;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},67042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(87462),l=(t(67294),t(3905));const r={title:"\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",sidebar_position:1},p=void 0,o={unversionedId:"build-webpack/\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",id:"build-webpack/\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",title:"\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",description:"\u524d\u8a00",source:"@site/programming-tech/build-webpack/03-\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316.md",sourceDirName:"build-webpack",slug:"/build-webpack/\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",permalink:"/build-webpack/\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/build-webpack/03-\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",sidebar_position:1},sidebar:"docs",previous:{title:"dynamic-import-\u52a8\u6001-\u5f02\u6b65",permalink:"/build-webpack/dynamic-import-\u52a8\u6001-\u5f02\u6b65"},next:{title:"\u6784\u5efa\u901f\u5ea6\u4f18\u5316",permalink:"/build-webpack/\u6784\u5efa\u901f\u5ea6\u4f18\u5316"}},i={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4f18\u53161.\u53bb\u6389\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u914d\u7f6e,\u4e0d\u9700\u8981\u70ed\u52a0\u8f7d\u8fd9\u7c7b\u53ea\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u4e1c\u897f",id:"\u4f18\u53161\u53bb\u6389\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u4e0d\u9700\u8981\u70ed\u52a0\u8f7d\u8fd9\u7c7b\u53ea\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u4e1c\u897f",level:2},{value:"\u4f18\u53162.\u9009\u62e9\u5408\u9002\u7684SourceMap",id:"\u4f18\u53162\u9009\u62e9\u5408\u9002\u7684sourcemap",level:2},{value:"\u5982\u4f55\u9009\u62e9 devtool? production\u5b98\u65b9\u63a8\u8350\u7684 devtool \u67094\u79cd\uff1a",id:"\u5982\u4f55\u9009\u62e9-devtool-production\u5b98\u65b9\u63a8\u8350\u7684-devtool-\u67094\u79cd",level:3},{value:"development\u73af\u5883",id:"development\u73af\u5883",level:3},{value:"SourceMap\u5b9e\u6218\uff1a\u8bbe\u7f6edevtool:false",id:"sourcemap\u5b9e\u6218\u8bbe\u7f6edevtoolfalse",level:3},{value:"\u4f18\u53163.\u5f00\u542ftree shaking,\u4e0d\u4f1a\u6253\u5305\u6253\u5305\u672a\u4f7f\u7528\u7684es6\u6a21\u5757",id:"\u4f18\u53163\u5f00\u542ftree-shaking\u4e0d\u4f1a\u6253\u5305\u6253\u5305\u672a\u4f7f\u7528\u7684es6\u6a21\u5757",level:2},{value:"\u4f18\u53164.js \u538b\u7f29",id:"\u4f18\u53164js-\u538b\u7f29",level:2},{value:"\u4f18\u53165.\u538b\u7f29 CSS",id:"\u4f18\u53165\u538b\u7f29-css",level:2},{value:"\u4f18\u53166.\u56fe\u7247\u538b\u7f29",id:"\u4f18\u53166\u56fe\u7247\u538b\u7f29",level:2},{value:"BundleAnalyzer",id:"bundleanalyzer",level:2},{value:"webpack\u63a8\u8350\u7684\u5206\u6790\u8f85\u52a9\u63d2\u4ef6webpack-bundle-analyzer\uff1a",id:"webpack\u63a8\u8350\u7684\u5206\u6790\u8f85\u52a9\u63d2\u4ef6webpack-bundle-analyzer",level:3},{value:"\u4ee3\u7801\u5206\u5272:webpack\u7684 code-splitting\u5c5e\u6027",id:"\u4ee3\u7801\u5206\u5272webpack\u7684-code-splitting\u5c5e\u6027",level:3},{value:"\u61d2\u52a0\u8f7d",id:"\u61d2\u52a0\u8f7d",level:3}],c={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f71\u54cd\u5f00\u53d1\u4f53\u9a8c\u7684\u5730\u65b9\u662f\u9996\u6b21\u7f16\u8bd1\u548c\u540e\u7eed\u7684\u589e\u91cf\u7f16\u8bd1"),(0,l.kt)("li",{parentName:"ol"},"\u7f51\u7ad9\u6027\u80fd\u4f18\u5316\u4e3b\u8981\u5728\u6784\u5efa\u4f53\u79ef\u4e0a")),(0,l.kt)("h2",{id:"\u4f18\u53161\u53bb\u6389\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u4e0d\u9700\u8981\u70ed\u52a0\u8f7d\u8fd9\u7c7b\u53ea\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u4e1c\u897f"},"\u4f18\u53161.\u53bb\u6389\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u914d\u7f6e,\u4e0d\u9700\u8981\u70ed\u52a0\u8f7d\u8fd9\u7c7b\u53ea\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u4e1c\u897f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/guides/production/"},"https://www.webpackjs.com/guides/production/")),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u533a\u5206\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684 Webpack \u914d\u7f6e\u65f6\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webpack.dev.js"),(0,l.kt)("li",{parentName:"ul"},"webpack.prod.js\n\u4ee5\u5206\u522b\u9002\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'\u5c06\u901a\u7528\u914d\u7f6e\u63d0\u53d6\u4e3a\u5171\u4eab\u914d\u7f6e\uff1a\u5c06\u90a3\u4e9b\u5728\u4e24\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u76f8\u540c\u7684\u914d\u7f6e\u9009\u9879\u63d0\u53d6\u5230\u4e00\u4e2a\u5171\u4eab\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u901a\u5e38\u79f0\u4e3a "webpack.common.js"\u3002\u8fd9\u4e9b\u9009\u9879\u5305\u62ec\u5165\u53e3\u70b9\uff08entry\uff09\u3001\u8f93\u51fa\uff08output\uff09\u3001\u52a0\u8f7d\u5668\uff08loaders\uff09\u3001\u63d2\u4ef6\uff08plugins\uff09\u7b49\u3002'),(0,l.kt)("li",{parentName:"ol"},'\u5408\u5e76\u914d\u7f6e\uff1a\u4f7f\u7528 webpack-merge \u7b49\u5de5\u5177\u5c06\u5171\u4eab\u914d\u7f6e\u548c\u73af\u5883\u7279\u5b9a\u914d\u7f6e\u5408\u5e76\u3002\u4f8b\u5982\uff0c\u5728 "webpack.dev.js" \u548c "webpack.prod.js" \u4e2d\uff1a',(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},'"webpack.dev.js" \u914d\u7f6e\u53ef\u4ee5\u5305\u62ec\u5f00\u53d1\u73af\u5883\u7279\u5b9a\u7684\u9009\u9879\uff0c\u5982\u70ed\u6a21\u5757\u66ff\u6362\uff08Hot Module Replacement\uff09\uff1a')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.dev.js\nconst { merge } = require('webpack-merge');\nconst common = require('./webpack.common.js');\n\nmodule.exports = merge(common, {\n  mode: 'development',\n  devtool: 'inline-source-map',\n  devServer: {\n    contentBase: './dist',\n  },\n  // \u6dfb\u52a0\u5176\u4ed6\u5f00\u53d1\u73af\u5883\u9009\u9879\n});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.prod.js\nconst { merge } = require('webpack-merge');\nconst common = require('./webpack.common.js');\n\nmodule.exports = merge(common, {\n  mode: 'production',\n  // \u6dfb\u52a0\u5176\u4ed6\u751f\u4ea7\u73af\u5883\u9009\u9879\n});\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 package.json \u4e2d\u7684\u811a\u672c\uff1a\u5728 package.json \u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u811a\u672c\u547d\u4ee4\u6765\u6307\u5b9a\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "start": "webpack serve --config webpack.dev.js",\n  "build": "webpack --config webpack.prod.js"\n}\n')),(0,l.kt)("h2",{id:"\u4f18\u53162\u9009\u62e9\u5408\u9002\u7684sourcemap"},"\u4f18\u53162.\u9009\u62e9\u5408\u9002\u7684SourceMap"),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u524d\u7aef\u9879\u76ee\u7684\u6027\u80fd\u548c\u4e0d\u540c\u6d4f\u89c8\u5668\u4e0a\u7684\u517c\u5bb9\u6027\uff0c\u6211\u4eec\u7ebf\u4e0a\u73af\u5883\u7684\u4ee3\u7801\u4e00\u822c\u90fd\u8981\u7ecf\u8fc7\u5982\u4e0b\u7b49\u5904\u7406\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u6df7\u6dc6\uff0c\u51cf\u5c0f\u4f53\u79ef"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u6587\u4ef6\u5408\u5e76\uff0c\u51cf\u5c11 HTTP \u8bf7\u6c42\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5c06 es6+\u4ee3\u7801\u8f6c\u6362\u6210\u6d4f\u89c8\u5668\u80fd\u591f\u8bc6\u522b\u7684 es5 \u4ee3\u7801")),(0,l.kt)("p",null,"\u7ecf\u8fc7\u5982\u4e0a\u7684\u6b65\u9aa4\u4e4b\u540e\uff0c\u6211\u4eec\u4ee3\u7801\u7684\u6027\u80fd\u548c\u517c\u5bb9\u6027\u63d0\u9ad8\u4e86\uff0c\u7136\u540e\u7531\u4e8e\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u548c\u6e90\u4ee3\u7801\u7684\u4e0d\u540c\uff0c\u4f1a\u5bfc\u81f4\u6211\u4eec\u7684\u5f00\u53d1\u8c03\u8bd5\u53d8\u5f97\u5f88\u56f0\u96be\uff0cSourceMap \u7684\u8bde\u751f\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u5982\u4e0a\u95ee\u9898\u7684\u3002"),(0,l.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cSourceMap \u5c31\u662f\u4e00\u4e2a\u50a8\u5b58\u7740\u4ee3\u7801\u4f4d\u7f6e\u4fe1\u606f\u7684\u6587\u4ef6\uff0c\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u7684\u6bcf\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u6240\u5bf9\u5e94\u7684\u8f6c\u6362\u524d\u7684\u4f4d\u7f6e\u3002\u6709\u4e86\u5b83\uff0c\u70b9\u51fb\u6d4f\u89c8\u5668\u7684\u63a7\u5236\u53f0\u62a5\u9519\u4fe1\u606f\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u663e\u793a\u51fa\u9519\u6e90\u4ee3\u7801\u4f4d\u7f6e\u800c\u4e0d\u662f\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"devtool: false; // \u4e00\u822c\u7528\u4e8eproduction\u73af\u5883\uff0c\u6ca1\u6709sourcemap\u6620\u5c04\u3002\n")),(0,l.kt)("h3",{id:"\u5982\u4f55\u9009\u62e9-devtool-production\u5b98\u65b9\u63a8\u8350\u7684-devtool-\u67094\u79cd"},"\u5982\u4f55\u9009\u62e9 devtool? production\u5b98\u65b9\u63a8\u8350\u7684 devtool \u67094\u79cd\uff1a"),(0,l.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u7684\u76ee\u6807\u5219\u8f6c\u5411\u4e8e\u5173\u6ce8\u66f4\u5c0f\u7684 bundle\uff0c\u66f4\u8f7b\u91cf\u7684 source map\u3002\n\u7ebf\u4e0a\u73af\u5883\u6ca1\u6709\u7edd\u5bf9\u7684\u6700\u4f18\u9009\u62e9\u4e00\u8bf4\uff0c\u6839\u636e\u81ea\u5df1\u4e1a\u52a1\u9700\u8981\u53bb\u9009\u62e9\u5373\u53ef\uff0c\u5f88\u591a\u9879\u76ee\u4e5f\u662f\u9009\u62e9\u9664\u4e0a\u8ff04\u79cd\u4e4b\u5916\u7684 cheap-module-source-map \u9009\u9879\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"none"),(0,l.kt)("li",{parentName:"ul"},"source-map"),(0,l.kt)("li",{parentName:"ul"},"hidden-source-map"),(0,l.kt)("li",{parentName:"ul"},"nosources-source-map")),(0,l.kt)("h3",{id:"development\u73af\u5883"},"development\u73af\u5883"),(0,l.kt)("p",null,"\u5f00\u53d1\u73af\u5883(development)\u548c\u751f\u4ea7\u73af\u5883(production)\u7684\u6784\u5efa\u76ee\u6807\u5dee\u5f02\u5f88\u5927\u3002\u5728\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5177\u6709\u5f3a\u5927\u7684\u3001\u5177\u6709\u5b9e\u65f6\u91cd\u65b0\u52a0\u8f7d(live reloading)\u6216\u70ed\u6a21\u5757\u66ff\u6362(hot module replacement)\u80fd\u529b\u7684 source map \u548c localhost server\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"source-map\uff1a\u4f1a\u5355\u72ec\u751f\u6210\u76f8\u5e94\u7684main.js.map\u6587\u4ef6\u3002\u5982\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cheap-source-map\uff1a\u6ca1\u6709\u5217\u7684\u6620\u5c04\uff0c\u5ffd\u7565loader\u7684sourcemap\u3002"),(0,l.kt)("li",{parentName:"ul"},"cheap-module-source-map\uff1a\u6ca1\u6709\u5217\u6620\u5c04\u7684.map\u6587\u4ef6\uff0c\u4e14loader\u7684sourcemap\u53ea\u5305\u542b\u5bf9\u5e94\u884c\u7684\u3002")))),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u8003\u8651\u6253\u5305\u901f\u5ea6\u5feb\u3001\u8c03\u8bd5\u65b9\u4fbf\uff0c\u5b98\u65b9\u63a8\u8350\u4ee5\u4e0b4\u79cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eval"),(0,l.kt)("li",{parentName:"ul"},"eval-source-map"),(0,l.kt)("li",{parentName:"ul"},"eval-cheap-source-map"),(0,l.kt)("li",{parentName:"ul"},"eval-cheap-module-source-map\n\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u9009\u62e9 eval-cheap-module-source-map \u5373\u53ef\u3002")),(0,l.kt)("h3",{id:"sourcemap\u5b9e\u6218\u8bbe\u7f6edevtoolfalse"},"SourceMap\u5b9e\u6218\uff1a\u8bbe\u7f6edevtool:false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (webpackEnv) {\n  const isEnvDevelopment = webpackEnv === 'development';\n  const isEnvProduction = webpackEnv === 'production';\n\n  ...\n\n  return {\n    target: ['browserslist'],\n    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',\n    // Stop compilation early in production\n    bail: isEnvProduction,\n    devtool: false,\n    /*\n    devtool: isEnvProduction\n      ? shouldUseSourceMap\n        ? 'source-map'\n        : false\n      : isEnvDevelopment && 'cheap-module-source-map',\n    */\n  }\n\n  ...\n\n}\n")),(0,l.kt)("h2",{id:"\u4f18\u53163\u5f00\u542ftree-shaking\u4e0d\u4f1a\u6253\u5305\u6253\u5305\u672a\u4f7f\u7528\u7684es6\u6a21\u5757"},"\u4f18\u53163.\u5f00\u542ftree shaking,\u4e0d\u4f1a\u6253\u5305\u6253\u5305\u672a\u4f7f\u7528\u7684es6\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/tree-shaking/"},"\u5b98\u65b9\u6587\u6863\uff1atree-shaking")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import"),"\u4f46\u672a\u5b9e\u9645\u4f7f\u7528\u7684\u6a21\u5757\u4f7f\u7528webpack\u8fd8\u4f1a\u5bf9\u5b83\u6253\u5305?"),(0,l.kt)("p",null,"tree shaking\u626b\u63cf\u6240\u6709 ES6 \u7684 export\uff0c\u627e\u51fa\u88ab import \u7684\u5185\u5bb9\u5e76\u6dfb\u52a0\u5230\u6700\u7ec8\u4ee3\u7801\u4e2d\u3002tree shaking\u7684\u4f7f\u7528\u65f6\u6e90\u7801\u5fc5\u987b\u9075\u5faaES6\u7684\u6a21\u5757\u89c4\u8303",(0,l.kt)("inlineCode",{parentName:"p"},"import & export"),"\uff0cCommonJS \u89c4\u8303",(0,l.kt)("inlineCode",{parentName:"p"},"require"),'\u5219\u65e0\u6cd5\u4f7f\u7528\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u9700\u8981\u7ed9babel\u91cc\u9762\u914d\u7f6e\u4e00\u4e0b"es6\u4e0d\u8981\u89e3\u6790"\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// .babelrc\n{\n    "presets": [\n        ["es2015", {"modules": false}]\n    ]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"tree shaking\u5bf9\u4e8e\u65b9\u6cd5\u7684\u5904\u7406"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7tree shaking\u8bbe\u7f6e\u540e\uff0cwebpack\u91cc\u9762\u4f1a\u5c06\u6ca1\u6709\u4f7f\u7528\u7684\u65b9\u6cd5\u6807\u8bb0\u4e3a\uff1a\nunused harmony export xxx\uff0c\u4f46\u4ee3\u7801\u4ecd\u7136\u4fdd\u7559\u3002\uff08webpack\u7f16\u8bd1\u540e\u7684\u6e90\u7801\u91cc\u9762\u4ecd\u7136\u5305\u542b\u6ca1\u6709\u4f7f\u7528\u7684\u65b9\u6cd5\uff09\u3002\u968f\u540e\u4f7f\u7528UglifyJSPlugin\u8fdb\u884c\u7b2c\u4e8c\u6b65\uff0c\u5c06\u5df2\u7ecf\u6807\u8bb0\u7684\u6ca1\u6709\u4f7f\u7528\u7684\u65b9\u6cd5\u8fdb\u884c\u5220\u9664\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"tree shaking\u5bf9\u4e8e\u7c7b\u7684\u5904\u7406"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4e0e\u6807\u8bb0\u65b9\u6cd5\u4e0d\u540c\uff0cwebpack\u6253\u5305\u65f6\u4f1a\u5c06\u6574\u4e2a\u7c7b\u8fdb\u884c\u6807\u8bb0\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5373\u4f7f\u7c7b\u91cc\u9762\u7684\u65b9\u6cd5\u6ca1\u6709\u88ab\u4f7f\u7528\u4e5f\u4f1a\u8fdb\u884c\u6253\u5305\u7f16\u8bd1\u3002 \u8fd9\u8868\u660e webpack tree shaking \u53ea\u5904\u7406\u9876\u5c42\u5185\u5bb9\uff0c\u4f8b\u5982\u7c7b\u548c\u5bf9\u8c61\u5185\u90e8\u90fd\u4e0d\u4f1a\u518d\u88ab\u5206\u522b\u5904\u7406\u3002\n\u7efc\u4e0a\u6240\u8ff0\uff0c\u53ef\u4ee5\u5f97\u51fa \u201c\u5bf9\u4e8e\u5df2\u7ecf import \u4f46\u672a\u5b9e\u9645\u4f7f\u7528\u7684\u6a21\u5757\u4f7f\u7528 webpack \u8fd8\u4f1a\u5bf9\u5b83\u6253\u5305\u201d \u3002")))),(0,l.kt)("h2",{id:"\u4f18\u53164js-\u538b\u7f29"},"\u4f18\u53164.js \u538b\u7f29"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5b9e\u9645\u4e0a webpack4.0 \u9ed8\u8ba4\u662f\u4f7f\u7528 terser-webpack-plugin \u8fd9\u4e2a\u538b\u7f29\u63d2\u4ef6\uff0c\u5728\u6b64\u4e4b\u524d\u662f\u4f7f\u7528 uglifyjs-webpack-plugin\uff0c\n\n\u4e24\u8005\u7684\u533a\u522b\u662f\u540e\u8005\u5bf9 ES6 \u7684\u538b\u7f29\u4e0d\u662f\u5f88\u597d\uff0c\u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u5f00\u542f parallel \u53c2\u6570\uff0c\u4f7f\u7528\u591a\u8fdb\u7a0b\u538b\u7f29\uff0c\u52a0\u5feb\u538b\u7f29\u3002\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// config/webpack.common.js\nconst TerserPlugin = require("terser-webpack-plugin");\n// ...\nconst commonConfig = {\n  // ...\n  optimization: {\n    minimize: true,\n    minimizer: [\n      new TerserPlugin({\n        parallel: 4, // \u5f00\u542f\u51e0\u4e2a\u8fdb\u7a0b\u6765\u5904\u7406\u538b\u7f29\uff0c\u9ed8\u8ba4\u662f os.cpus().length - 1\n      }),\n    ],\n  },\n  // ...\n};\n')),(0,l.kt)("h2",{id:"\u4f18\u53165\u538b\u7f29-css"},"\u4f18\u53165.\u538b\u7f29 CSS"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 optimize-css-assets-webpack-plugin \u63d2\u4ef6\u6765\u538b\u7f29 css\uff0c\u5176\u9ed8\u8ba4\u4f7f\u7528\u7684\u538b\u7f29\u5f15\u64ce\u662f cssnano\u3002 \u5177\u4f53\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// config/webpack.prod.js\nconst OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");\n// ...\nconst prodConfig = {\n  // ...\n  optimization: {\n    minimizer: [\n      new OptimizeCSSAssetsPlugin({\n        assetNameRegExp: /\\.optimize\\.css$/g,\n        cssProcessor: require("cssnano"),\n        cssProcessorPluginOptions: {\n          preset: ["default", { discardComments: { removeAll: true } }],\n        },\n        canPrint: true,\n      }),\n    ],\n  },\n};\n')),(0,l.kt)("h2",{id:"\u4f18\u53166\u56fe\u7247\u538b\u7f29"},"\u4f18\u53166.\u56fe\u7247\u538b\u7f29"),(0,l.kt)("p",null,"\u501f\u52a9 image-webpack-loader \u5e2e\u52a9\u6211\u4eec\u6765\u5b9e\u73b0\u3002\u5b83\u662f\u57fa\u4e8e imagemin \u8fd9\u4e2a Node \u5e93\u6765\u5b9e\u73b0\u56fe\u7247\u538b\u7f29\u7684\u3002\n\u53ea\u8981\u5728 file-loader \u4e4b\u540e\u52a0\u5165 image-webpack-loader \u5373\u53ef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// config/webpack.common.js\n// ...\nmodule: {\n  rules: [\n    {\n      test: /\\.(png|jpg|gif)$/,\n      use: [\n        {\n          loader: "file-loader",\n          options: {\n            name: "[name]_[hash].[ext]",\n            outputPath: "images/",\n          },\n        },\n        {\n          loader: "image-webpack-loader",\n          options: {\n            // \u538b\u7f29 jpeg \u7684\u914d\u7f6e\n            mozjpeg: {\n              progressive: true,\n              quality: 65,\n            },\n            // \u4f7f\u7528 imagemin**-optipng \u538b\u7f29 png\uff0cenable: false \u4e3a\u5173\u95ed\n            optipng: {\n              enabled: false,\n            },\n            // \u4f7f\u7528 imagemin-pngquant \u538b\u7f29 png\n            pngquant: {\n              quality: "65-90",\n              speed: 4,\n            },\n            // \u538b\u7f29 gif \u7684\u914d\u7f6e\n            gifsicle: {\n              interlaced: false,\n            },\n            // \u5f00\u542f webp\uff0c\u4f1a\u628a jpg \u548c png \u56fe\u7247\u538b\u7f29\u4e3a webp \u683c\u5f0f\n            webp: {\n              quality: 75,\n            },\n          },\n        },\n      ],\n    },\n  ];\n}\n')),(0,l.kt)("h2",{id:"bundleanalyzer"},"BundleAnalyzer"),(0,l.kt)("h3",{id:"webpack\u63a8\u8350\u7684\u5206\u6790\u8f85\u52a9\u63d2\u4ef6webpack-bundle-analyzer"},"webpack\u63a8\u8350\u7684\u5206\u6790\u8f85\u52a9\u63d2\u4ef6webpack-bundle-analyzer\uff1a"),(0,l.kt)("p",null,"\u8fd0\u884cNODE_ENV=production ANALYZ=true npm_config_report=true npm run build\u540e\u5219\u4f1a\u4e3a\u6211\u4eec\u751f\u6210\u4e00\u4e2a\u76f4\u89c2\u7684build\u62a5\u544a:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f97\u5230\u76ee\u524d\u5360\u7528\u4f53\u79ef\u6700\u5927\u7684\u7ec4\u4ef6\u662f\u54ea\u51e0\u4e2a\uff0c\u5982\u679c\u8fc7\u591a\u7684\u5360\u7528\u4e86\u6211\u4eec\u7684\u52a0\u8f7d\u65f6\u95f4\uff0c\u5219\u5e94\u8be5\u8fdb\u884c\u7ee7\u7eed\u5206\u5272\u4f18\u5316\u3002\u4e0d\u8db310KB\u5c31\u4e0d\u7528\u8fdb\u884c\u62c6\u5206\u4e86\uff0c\u548c\u5176\u7236\u7ec4\u4ef6\u5728\u4e00\u8d77\u5c31\u53ef\u4ee5\uff0c\u5426\u5219\u8fd9\u79cd\u7ec6\u788e\u7ec4\u4ef6\u62c6\u5206\u8fc7\u591a\uff0c\u52a0\u8f7d\u6027\u80fd\u4e0a\u6ca1\u6709\u592a\u591a\u63d0\u5347\u53cd\u800c\u52a0\u5927\u4e86http\u8bf7\u6c42\u7684\u538b\u529b"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    new BundleAnalyzerPlugin({\n      analyzerMode: 'server',\n      analyzerHost: '0.0.0.0',\n      analyzerPort: 8181,\n      reportFilename: 'report.html',\n      defaultSizes: 'parsed',\n      openAnalyzer: true,\n      generateStatsFile: false,\n      statsFilename: 'stats.json',\n      statsOptions: null,\n      logLevel: 'info'\n    })\n  ]\n}\n"))),(0,l.kt)("h3",{id:"\u4ee3\u7801\u5206\u5272webpack\u7684-code-splitting\u5c5e\u6027"},"\u4ee3\u7801\u5206\u5272:webpack\u7684 code-splitting\u5c5e\u6027"),(0,l.kt)("p",null,"\u53ea\u8981\u6709\u4e00\u4e2a\u5e93\u6211\u4eec\u5347\u7ea7\u6216\u8005\u5f15\u5165\u4e00\u4e2a\u65b0\u5e93,\u8fd9\u4e2a chunk \u5c31\u4f1a\u53d8\u52a8,\u90a3\u4e48\u8fd9\u4e2achunk \u7684\u53d8\u52a8\u6027\u4f1a\u5f88\u9ad8,\u5e76\u4e0d\u9002\u5408\u957f\u671f\u7f13\u5b58,\u8fd8\u6709\u4e00\u70b9,\u6211\u4eec\u8981\u63d0\u9ad8\u9996\u9875\u52a0\u8f7d\u901f\u5ea6,\u7b2c\u4e00\u8981\u52a1\u662f\u51cf\u5c11\u9996\u9875\u52a0\u8f7d\u4f9d\u8d56\u7684\u4ee3\u7801\u91cf,\u8bf7\u95ee\u50cf react vue reudx \u8fd9\u79cd\u6574\u4e2a\u5e94\u7528\u7684\u57fa\u7840\u5e93\u6211\u4eec\u662f\u9996\u9875\u5fc5\u987b\u8981\u4f9d\u8d56\u7684\u4e4b\u5916,\u50cf d3.js three.js\u8fd9\u79cd\u7279\u5b9a\u9875\u9762\u624d\u4f1a\u51fa\u73b0\u7684\u7279\u6b8a\u5e93\u662f\u6ca1\u5fc5\u8981\u5728\u9996\u5c4f\u52a0\u8f7d\u7684,\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06\u5e94\u7528\u57fa\u7840\u5e93\u548c\u7279\u5b9a\u4f9d\u8d56\u7684\u5e93\u8fdb\u884c\u5206\u79bb\u3002"),(0,l.kt)("p",null,"\u5f53 chunk \u5728\u5f3a\u7f13\u5b58\u671f\uff0c\u4f46\u662f\u670d\u52a1\u5668\u4ee3\u7801\u5df2\u7ecf\u53d8\u52a8\u4e86\u6211\u4eec\u600e\u4e48\u901a\u77e5\u5ba2\u6237\u7aef\uff1f\u4e0a\u9762\u6211\u4eec\u7684\u793a\u610f\u56fe\u5df2\u7ecf\u770b\u5230\u4e86\uff0c\u5f53\u547d\u4e2d\u7684\u8d44\u6e90\u5728\u7f13\u5b58\u671f\u5185\uff0c\u6d4f\u89c8\u5668\u662f\u76f4\u63a5\u8bfb\u53d6\u7f13\u5b58\u800c\u4e0d\u4f1a\u5411\u670d\u52a1\u5668\u786e\u8ba4\u7684\uff0c\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u670d\u52a1\u5668\u4ee3\u7801\u5df2\u7ecf\u53d8\u52a8\u4e86\uff0c\u600e\u4e48\u529e\uff1f\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u4e0d\u80fd\u5c06 index.html \u7f13\u5b58(\u53cd\u6b63webpack\u65f6\u4ee3\u7684 html \u9875\u9762\u5c0f\u5230\u6ca1\u6709\u7f13\u5b58\u7684\u5fc5\u8981),\u9700\u8981\u6bcf\u6b21\u5f15\u5165 script \u811a\u672c\u7684\u65f6\u5019\u53bb\u670d\u52a1\u5668\u66f4\u65b0,\u5e76\u5f00\u542f hashchunk,\u5b83\u7684\u4f5c\u7528\u662f\u5f53 chunk \u53d1\u751f\u6539\u53d8\u7684\u65f6\u5019\u4f1a\u751f\u6210\u65b0\u7684 hash \u503c,\u5982\u679c\u4e0d\u53d8\u5c31\u4e0d\u53d1\u751f\u53d8\u52a8,\u8fd9\u6837\u5f53 index \u52a0\u8f7d\u540e\u7eed script\u8d44\u6e90\u65f6\u5982\u679c hashchunk \u6ca1\u53d8\u5c31\u4f1a\u547d\u4e2d\u7f13\u5b58,\u5982\u679c\u6539\u53d8\u4e86\u90a3\u4e48\u4f1a\u91cd\u65b0\u53bb\u670d\u52a1\u7aef\u52a0\u8f7d\u65b0\u8d44\u6e90\u3002"),(0,l.kt)("p",null,"vue-router \u8def\u7531\u61d2\u52a0\u8f7d"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/code-splitting/"},"code-splitting\u5b98\u65b9\u6587\u6863")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u5206\u79bb\u662f webpack \u4e2d\u6700\u5f15\u4eba\u6ce8\u76ee\u7684\u7279\u6027\u4e4b\u4e00\u3002\u6b64\u7279\u6027\u80fd\u591f\u628a\u4ee3\u7801\u5206\u79bb\u5230\u4e0d\u540c\u7684 bundle \u4e2d\uff0c\u7136\u540e\u53ef\u4ee5\u6309\u9700\u52a0\u8f7d\u6216\u5e76\u884c\u52a0\u8f7d\u8fd9\u4e9b\u6587\u4ef6\u3002\u4ee3\u7801\u5206\u79bb\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u66f4\u5c0f\u7684 bundle\u3001\u63a7\u5236\u8d44\u6e90\u52a0\u8f7d\u4f18\u5148\u7ea7\uff0c\u5982\u679c\u4f7f\u7528\u5408\u7406\uff0c\u4f1a\u6781\u5927\u51cf\u5c0f\u52a0\u8f7d\u65f6\u95f4\u3002")),(0,l.kt)("p",null,"Webpack\u63d0\u4f9b\u4e86\u591a\u79cd\u4ee3\u7801\u5206\u5272\u7684\u65b9\u5f0f\uff0c\u5305\u62ec\u4f7f\u7528\u52a8\u6001import\u8bed\u6cd5\u3001SplitChunks\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u52a8\u6001import\u8bed\u6cd5\u53ef\u4ee5\u6309\u9700\u52a0\u8f7d\u6a21\u5757\u3002\u901a\u8fc7\u5c06\u6a21\u5757\u653e\u5728\u52a8\u6001import\u51fd\u6570\u4e2d\uff0cWebpack\u4f1a\u5c06\u5176\u62c6\u5206\u4e3a\u5355\u72ec\u7684\u5757\uff0c\u5e76\u5728\u9700\u8981\u65f6\u6309\u9700\u52a0\u8f7d\u3002\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\uff0c\u5e76\u5728\u9700\u8981\u65f6\u5ef6\u8fdf\u52a0\u8f7d\u5176\u4ed6\u6a21\u5757\u3002"),(0,l.kt)("p",null,"SplitChunks\u63d2\u4ef6\u662fWebpack\u63d0\u4f9b\u7684\u4e00\u4e2a\u5185\u7f6e\u63d2\u4ef6\uff0c\u53ef\u4ee5\u6839\u636e\u914d\u7f6e\u5c06\u516c\u5171\u6a21\u5757\u62c6\u5206\u6210\u5355\u72ec\u7684\u5757\u3002\u901a\u8fc7\u5408\u7406\u914d\u7f6eSplitChunks\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5c06\u516c\u5171\u4f9d\u8d56\u63d0\u53d6\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u907f\u514d\u91cd\u590d\u52a0\u8f7d\uff0c\u4ece\u800c\u51cf\u5c0f\u6253\u5305\u6587\u4ef6\u7684\u4f53\u79ef\u3002"),(0,l.kt)("p",null,"\u9700\u52a0\u8f7d\u5b9e\u9645\u4e0a\u548c\u4ee3\u7801\u5206\u5272\u7684\u8f85\u52a9\u529f\u80fd\u662f\u76f8\u8f85\u76f8\u6210\u7684\uff0c\u5728\u6ca1\u6709\u4ee3\u7801\u5206\u5272\u4e4b\u4e0b\uff0c\u6240\u6709\u7684\u6309\u9700\u52a0\u8f7d\u5b9e\u9645\u4e0a\u4ecd\u7136\u4f1a\u5c06\u6240\u6709\u7684\u7b2c\u4e09\u65b9\u5e93\u5168\u90e8\u538b\u7f29\u5230\u4e00\u4e2a\u5de5\u7a0b\u6587\u4ef6\u4e2d\uff0c\u5bfc\u81f4\u8be5\u6587\u4ef6\u4e0b\u8f7d\u7f13\u6162\uff0c\u8fd0\u884c\u7f13\u6162\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackChunkName: \"lodash\" */ 'lodash');\n")),(0,l.kt)("p",null,"\u5e2e\u6211\u4eec\u5c06\u5f15\u5165\u7684\u6587\u4ef6\u5355\u72ec\u8fdb\u884c\u4e00\u4e2a\u6587\u4ef6\u7684\u5206\u5272\u6253\u5305\uff0c\u8fd9\u6837\u6211\u4eec\u5e9e\u5927\u7684\u5e94\u7528\u5c31\u4f1a\u88ab\u6211\u4eec\u7cbe\u5fc3\u5730\u62c6\u6210\u4e00\u4e2a\u4e2a\u5355\u72ec\u7684js\u6587\u4ef6\uff0c\u4e92\u4e0d\u5f71\u54cd\uff0c\u5f02\u6b65\u52a0\u8f7d\uff0c\u6781\u5927\u5730\u8282\u7701\u4e86\u6211\u4eec\u7684\u9996\u5c4f\u52a0\u8f7d\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u548c\u6309\u9700\u52a0\u8f7d\u662f\u76f8\u8f85\u76f8\u6210\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6211\u4eec\u9700\u8981\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u5206\u5e03\u5728\u6211\u4eec\u7684\u5404\u4e2a\u5c0f\u7ec4\u4ef6\u4e2d\uff0c\u5e76\u8ba9\u8fd9\u4e9b\u7ec4\u4ef6\u8fdb\u884c\u4ee3\u7801\u5206\u5272\uff0c\u4ece\u800c\u8fbe\u5230\u6700\u5927\u5316\u4f18\u5316\u6548\u679c\u7684\u76ee\u7684\u3002"),(0,l.kt)("h3",{id:"\u61d2\u52a0\u8f7d"},"\u61d2\u52a0\u8f7d"),(0,l.kt)("p",null,"\u539f\u7406\uff1a\u628a\u4e00\u4e9bjs\u6a21\u5757\u7ed9\u72ec\u7acb\u51fa\u4e00\u4e2a\u4e2ajs\u6587\u4ef6\uff0c\u7136\u540e\u9700\u8981\u7528\u5230\u7684\u65f6\u5019\uff0c\u5229\u7528jsonp:\u5728\u521b\u5efa\u4e00\u4e2ascript\u5bf9\u8c61\uff0c\u52a0\u5165\u5230document.head\u5bf9\u8c61\u4e2d\u5373\u53ef\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5e2e\u6211\u4eec\u53d1\u8d77\u8bf7\u6c42\uff0c\u53bb\u8bf7\u6c42\u8fd9\u4e2ajs\u6587\u4ef6\uff0c\u5728\u5199\u4e2a\u56de\u8c03\uff0c\u53bb\u5b9a\u4e49\u5f97\u5230\u8fd9\u4e2ajs\u6587\u4ef6\u540e\uff0c\u9700\u8981\u505a\u4ec0\u4e48\u4e1a\u52a1\u903b\u8f91\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import\u8bed\u6cd5\n\nReact.lazy()\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u52a8\u6001import\u8bed\u6cd5\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u6309\u9700\u52a0\u8f7d\u6a21\u5757\u3002\u901a\u8fc7\u5c06\u6a21\u5757\u653e\u5728\u52a8\u6001import\u51fd\u6570\u4e2d\uff0cWebpack\u4f1a\u81ea\u52a8\u5c06\u5176\u62c6\u5206\u4e3a\u5355\u72ec\u7684\u5757\uff0c\u5e76\u5728\u9700\u8981\u65f6\u8fdb\u884c\u52a0\u8f7d\u3002\u8fd9\u6837\u53ef\u4ee5\u5ef6\u8fdf\u52a0\u8f7d\u6a21\u5757\uff0c\u51cf\u5c11\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"React.lazy()\u662fReact\u6846\u67b6\u63d0\u4f9b\u7684\u4e00\u4e2a\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u4f7f\u7528React.lazy()\u51fd\u6570\uff0c\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u7684\u52a0\u8f7d\u63a8\u8fdf\u5230\u6e32\u67d3\u65f6\u518d\u8fdb\u884c\uff0c\u4ece\u800c\u63d0\u9ad8\u9875\u9762\u7684\u54cd\u5e94\u901f\u5ea6\u3002"))),(0,l.kt)("p",null,"\u53ef\u4ee5\u51cf\u5c11\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\uff0c\u5e76\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002Webpack\u63d0\u4f9b\u4e86\u591a\u79cd\u61d2\u52a0\u8f7d\u7684\u65b9\u5f0f"),(0,l.kt)("p",null,"\u61d2\u52a0\u8f7d\u6280\u672f\u53ef\u4ee5\u6839\u636e\u7528\u6237\u5b9e\u9645\u9700\u6c42\u8fdb\u884c\u6a21\u5757\u52a0\u8f7d\uff0c\u51cf\u5c11\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\uff0c\u5e76\u63d0\u5347\u9875\u9762\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\nWebpack\u4e2d\u7684\u4ee3\u7801\u5206\u5272\u548c\u61d2\u52a0\u8f7d\u6280\u672f\u662f\u4f18\u5316\u9879\u76ee\u6027\u80fd\u7684\u91cd\u8981\u624b\u6bb5\u3002\u901a\u8fc7\u5408\u7406\u914d\u7f6e\u4ee3\u7801\u5206\u5272\u7b56\u7565\u548c\u61d2\u52a0\u8f7d\u65b9\u5f0f\uff0c\u53ef\u4ee5\u51cf\u5c11\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\u3001\u4f18\u5316\u6253\u5305\u6587\u4ef6\u4f53\u79ef"))}m.isMDXComponent=!0}}]);