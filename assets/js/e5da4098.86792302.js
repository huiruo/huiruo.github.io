"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4026],{3905:(e,n,l)=>{l.d(n,{Zo:()=>c,kt:()=>k});var a=l(67294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function t(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function s(e,n){if(null==e)return{};var l,a,r=function(e,n){if(null==e)return{};var l,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)l=t[a],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)l=t[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},c=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var l=e.components,r=e.mdxType,t=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(l),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||t;return l?a.createElement(k,o(o({ref:n},c),{},{components:l})):a.createElement(k,o({ref:n},c))}));function k(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=l.length,o=new Array(t);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<t;i++)o[i]=l[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},28965:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var a=l(87462),r=(l(67294),l(3905));const t={title:"\u6784\u5efa\u901f\u5ea6\u4f18\u5316",sidebar_position:1},o=void 0,s={unversionedId:"build-webpack/\u4f18\u5316-\u6784\u5efa\u901f\u5ea6\u4f18\u5316",id:"build-webpack/\u4f18\u5316-\u6784\u5efa\u901f\u5ea6\u4f18\u5316",title:"\u6784\u5efa\u901f\u5ea6\u4f18\u5316",description:"\u53c2\u8003\uff1ahttps://cloud.tencent.com/developer/article/1405259?from=15425",source:"@site/programming-tech/build-webpack/03-\u4f18\u5316-\u6784\u5efa\u901f\u5ea6\u4f18\u5316.md",sourceDirName:"build-webpack",slug:"/build-webpack/\u4f18\u5316-\u6784\u5efa\u901f\u5ea6\u4f18\u5316",permalink:"/build-webpack/\u4f18\u5316-\u6784\u5efa\u901f\u5ea6\u4f18\u5316",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/build-webpack/03-\u4f18\u5316-\u6784\u5efa\u901f\u5ea6\u4f18\u5316.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6784\u5efa\u901f\u5ea6\u4f18\u5316",sidebar_position:1},sidebar:"docs",previous:{title:"\u4f18\u5316-\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316",permalink:"/build-webpack/\u4f18\u5316-\u6784\u5efa\u5305\u5927\u5c0f\u4f18\u5316"},next:{title:"\u52a8\u6001\u52a0\u8f7d",permalink:"/build-webpack/B-2-dynamic-import/\u52a8\u6001\u52a0\u8f7d"}},p={},i=[{value:"webpack \u6784\u5efa\u901f\u5ea6\u4f18\u5316",id:"webpack-\u6784\u5efa\u901f\u5ea6\u4f18\u5316",level:2},{value:"\u65b9\u5f0f 1 \u5220\u9664\u6ca1\u6709\u4f7f\u7528\u7684\u4f9d\u8d56",id:"\u65b9\u5f0f-1-\u5220\u9664\u6ca1\u6709\u4f7f\u7528\u7684\u4f9d\u8d56",level:2},{value:"\u65b9\u5f0f 1 \u4f18\u5316 Loader \u914d\u7f6e",id:"\u65b9\u5f0f-1-\u4f18\u5316-loader-\u914d\u7f6e",level:2},{value:"\u65b9\u5f0f 2 \u4f18\u5316 resolve \u914d\u7f6e",id:"\u65b9\u5f0f-2-\u4f18\u5316-resolve-\u914d\u7f6e",level:2},{value:"\u65b9\u5f0f 3 \u4f18\u5316 resolve.extensions \u914d\u7f6e:\u5408\u7406\u4f7f\u7528 resolve.extensions",id:"\u65b9\u5f0f-3-\u4f18\u5316-resolveextensions-\u914d\u7f6e\u5408\u7406\u4f7f\u7528-resolveextensions",level:2},{value:"\u65b9\u5f0f 4 \u4f7f\u7528 DllPlugin \u4f18\u5316",id:"\u65b9\u5f0f-4-\u4f7f\u7528-dllplugin-\u4f18\u5316",level:2},{value:"\u65b9\u5f0f 5.HappyPack \u5e76\u884c\u6784\u5efa\u4f18\u5316",id:"\u65b9\u5f0f-5happypack-\u5e76\u884c\u6784\u5efa\u4f18\u5316",level:2},{value:"\u65b9\u5f0f 6 \u4ee3\u7801\u538b\u7f29\u7528 ParallelUglifyPlugin \u4ee3\u66ff\u81ea\u5e26\u7684 UglifyJsPlugin \u63d2\u4ef6",id:"\u65b9\u5f0f-6-\u4ee3\u7801\u538b\u7f29\u7528-paralleluglifyplugin-\u4ee3\u66ff\u81ea\u5e26\u7684-uglifyjsplugin-\u63d2\u4ef6",level:2}],c={toc:i},u="wrapper";function d(e){let{components:n,...l}=e;return(0,r.kt)(u,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1405259?from=15425"},"https://cloud.tencent.com/developer/article/1405259?from=15425")),(0,r.kt)("h2",{id:"webpack-\u6784\u5efa\u901f\u5ea6\u4f18\u5316"},"webpack \u6784\u5efa\u901f\u5ea6\u4f18\u5316"),(0,r.kt)("p",null,"\u4f46\u662f\u968f\u7740\u9879\u76ee\u6d89\u53ca\u5230\u7684\u9875\u9762\u8d8a\u6765\u8d8a\u591a\uff0c\u529f\u80fd\u548c\u4e1a\u52a1\u4ee3\u7801\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u591a\uff0c\u76f8\u5e94\u7684 webpack \u7684\u6784\u5efa\u65f6\u95f4\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u4e45\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"webpack \u5728\u542f\u52a8\u65f6\u4f1a\u4ece\u914d\u7f6e\u7684 Entry \u51fa\u53d1\uff0c\u89e3\u6790\u51fa\u6587\u4ef6\u4e2d\u7684\u5bfc\u5165\u8bed\u53e5\uff0c\u518d\u9012\u5f52\u89e3\u6790\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5bfc\u5165\u8bed\u53e5 Webpack \u4f1a\u505a\u51fa\u4ee5\u4e0b\u64cd\u4f5c\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","1.\u6839\u636e\u5bfc\u5165\u8bed\u53e5\u5bfb\u627e\u5bf9\u5e94\u7684\u8981\u5bfc\u5165\u7684\u6587\u4ef6\uff1b"),(0,r.kt)("p",{parentName:"li"},"2.\u5728\u6839\u636e\u8981\u5bfc\u5165\u7684\u6587\u4ef6\u540e\u7f00\uff0c\u4f7f\u7528\u914d\u7f6e\u4e2d\u7684 Loader \u53bb\u5904\u7406\u6587\u4ef6\uff08\u5982\u4f7f\u7528 ES6 \u9700\u8981\u4f7f\u7528 babel-loader \u5904\u7406\uff09"))),(0,r.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e24\u70b9\u53ef\u4ee5\u4f18\u5316\u67e5\u627e\u9014\u5f84"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"DllPlugin \u628a\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\uff0c\u4e0d\u4f1a\u6539\u6539\u52a8\u7684\u901a\u8fc7 dll \u5904\u7406\uff0c\u8ba9\u6bcf\u4e00\u6b21 rebuild \u7684\u65f6\u5019\u8df3\u8fc7\u8fd9\u4e9b\u6a21\u5757\u7684\u7f16\u8bd1\u3002"),(0,r.kt)("li",{parentName:"ol"},"Happypack \u591a\u7ebf\u7a0b\u6253\u5305\uff0c\u901a\u8fc7\u591a\u7ebf\u7a0b\u5e76\u884c\u5904\u7406\uff0c\u52a0\u5feb\u7f16\u8bd1\u901f\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ol"},"Webpack 5 , \u591a\u7ea7\u201c\u7f13\u5b58\u201d\u63d0\u9ad8\u8fd0\u884c\u6548\u7387\u3002")),(0,r.kt)("h2",{id:"\u65b9\u5f0f-1-\u5220\u9664\u6ca1\u6709\u4f7f\u7528\u7684\u4f9d\u8d56"},"\u65b9\u5f0f 1 \u5220\u9664\u6ca1\u6709\u4f7f\u7528\u7684\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6587\u4ef6\u5f15\u5165\u8fdb\u6765\u7684\u5e93\u6ca1\u6709\u88ab\u4f7f\u7528\u5230\u4e5f\u6ca1\u6709\u53ca\u65f6\u5220\u9664"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import get from 'lodash';\n")),(0,r.kt)("p",null,"\u5728\u4e1a\u52a1\u4e2d\u5e76\u6ca1\u6709\u4f7f\u7528\u5230a \u6a21\u5757\uff0c\u4f46webpack \u4f1a\u9488\u5bf9\u8be5import \u8fdb\u884c\u6253\u5305\u4e00\u904d"),(0,r.kt)("h2",{id:"\u65b9\u5f0f-1-\u4f18\u5316-loader-\u914d\u7f6e"},"\u65b9\u5f0f 1 \u4f18\u5316 Loader \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\u7f29\u5c0f\u6784\u5efa\u76ee\u6807\nwebpack \u5728\u6253\u5305\u8fc7\u7a0b\u4e2d\u4f1a\u9488\u5bf9\u4e0d\u540c\u7684\u8d44\u6e90\u7c7b\u578b\u4f7f\u7528\u4e0d\u540c\u7684loader\u5904\u7406; \u6392\u9664 Webpack \u4e0d\u9700\u8981\u89e3\u6790\u7684\u6a21\u5757\uff0c\u5373\u4f7f\u7528 loader \u7684\u65f6\u5019\uff0c\u5728\u5c3d\u91cf\u5c11\u7684\u6a21\u5757\u4e2d\u53bb\u4f7f\u7528\u3002 \u6211\u4eec\u53ef\u4ee5\u501f\u52a9 include \u548c exclude \u8fd9\u4e24\u4e2a\u53c2\u6570\uff0c\u89c4\u5b9a loader \u53ea\u5728\u90a3\u4e9b\u6a21\u5757\u5e94\u7528\u548c\u5728\u54ea\u4e9b\u6a21\u5757\u4e0d\u5e94\u7528\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  module: {\n    rules: [\n      {\n        test: /\\.js|jsx$/,\n        exclude: /node_modules/,\n        include: path.resolve(__dirname, '../src'),\n        use: ['babel-loader']\n      },\n      // ...\n    ]\n  },\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2.\u51cf\u5c11\u67e5\u627e\u8fc7\u7a0b\nLoader \u5904\u7406\u6587\u4ef6\u7684\u8f6c\u6362\u64cd\u4f5c\u662f\u5f88\u8017\u65f6\u7684\uff0c\u6240\u4ee5\u9700\u8981\u8ba9\u5c3d\u53ef\u80fd\u5c11\u7684\u6587\u4ef6\u88ab Loader \u5904\u7406")),(0,r.kt)("p",null,"1.\u4f8b\u5982\u5728\u914d\u7f6e Loader \u65f6\u901a\u8fc7 include \u53bb\u7f29\u5c0f\u547d\u4e2d\u8303\u56f4\n\u4f8b\u5982\u6307\u5b9a\u6587\u4ef6\u76ee\u5f55:babel-loader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    module: {\n        loaders: [{\n            test: /\\.js$/,\n            loader: \'babel-loader\',\n            include: [\n                path.resolve(__dirname, "app/src"),\n                path.resolve(__dirname, "app/test")\n            ],\n            exclude: /node_modules/\n        }]\n    }\n}\n')),(0,r.kt)("p",null,"\u4e00\u4e9b\u5e93\u5982 jq,chartJS \u5927\u800c\u6ca1\u91c7\u7528\u6a21\u5757\u5316\u6807\u51c6\u8ba9 webpack \u89e3\u6790\u8017\u65f6\u53c8\u6ca1\u610f\u4e49:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parser:\u7ec6\u7c92\u5ea6\u5730\u914d\u7f6e\u54ea\u4e9b\u6a21\u5757\u88ab\u54ea\u4e9b\u6a21\u5757\u89e3\u6790"),(0,r.kt)("li",{parentName:"ul"},"noParse:\u5ffd\u7565\u5bf9\u90e8\u5206\u6ca1\u91c7\u7528\u6a21\u5757\u5316\u7684\u6587\u4ef6\u7684\u9012\u5f52\u89e3\u6790\u548c\u5904\u7406\u3002\u63d0\u9ad8\u6784\u5efa\u6027\u80fd\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module:{\n        noParse:/jquery/, //\u4e0d\u53bb\u89e3\u6790jquery\u4e2d\u7684\u4f9d\u8d56\u5e93\n    {\n      test: /\\.js$/,\n      use: [ 'babel-loader?cacheDirectory'],//\u5f00\u542f\u8f6c\u6362\u7ed3\u679c\u7f13\u5b58\n      include: path.resolve(__dirname, 'src'),//\u53ea\u5bf9src\u76ee\u5f55\u4e2d\u6587\u4ef6\u91c7\u7528babel-loader\n      exclude: path.resolve(__dirname,' ./node_modules'),//\u6392\u9664node_modules\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n    },\n}\n")),(0,r.kt)("h2",{id:"\u65b9\u5f0f-2-\u4f18\u5316-resolve-\u914d\u7f6e"},"\u65b9\u5f0f 2 \u4f18\u5316 resolve \u914d\u7f6e"),(0,r.kt)("p",null,"Resolve\uff1aWebpack \u5728\u542f\u52a8\u540e\u4f1a\u4ece\u914d\u7f6e\u7684\u5165\u53e3\u6a21\u5757\u51fa\u53d1\u627e\u51fa\u6240\u6709\u4f9d\u8d56\u7684\u6a21\u5757,\u8fd9\u4e2a\u5c5e\u6027\u544a\u8bc9 webpack \u89e3\u6790\u6a21\u5757\u65f6\u5e94\u8be5\u641c\u7d22\u7684\u76ee\u5f55\uff0c\u7edd\u5bf9\u8def\u5f84\u548c\u76f8\u5bf9\u8def\u5f84\u90fd\u80fd\u4f7f\u7528\u3002\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u4e4b\u540e\uff0c\u5c06\u53ea\u5728\u7ed9\u5b9a\u76ee\u5f55\u4e2d\u641c\u7d22\uff0c\u4ece\u800c\u51cf\u5c11\u6a21\u5757\u7684\u641c\u7d22\u5c42\u7ea7"),(0,r.kt)("p",null,"webpack \u5185\u7f6e js \u6a21\u5757\u5316\u8bed\u6cd5\u89e3\u6790\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u89c4\u5219\uff1a\n1.alias:\u901a\u8fc7\u522b\u540d\u6765\u5c06\u5bfc\u5165\u8def\u5f84\u6620\u5c04\u6210\u4e00\u4e2a\u65b0\u7684\u5bfc\u5165\u8def\u5f84\n2.mainFields\n3.extensions:\u5f53\u6ca1\u6709\u6587\u4ef6\u540e\u7f00\uff0cwebpack \u914d\u7f6e\u5728\u5c1d\u8bd5\u8fc7\u7a0b\u4e2d\u7528\u5230\u5730\u540e\u7f00\u5217\u8868\uff1a"),(0,r.kt)("p",null,"\u7528\u4e8e\u914d\u7f6e webpack \u53bb\u54ea\u4e9b\u76ee\u5f55\u4e0b\u5bfb\u627e\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u9ed8\u8ba4\u662f","['node_modules']","\uff0c\u4f46\u662f\uff0c\u5b83\u4f1a\u5148\u53bb\u5f53\u524d\u76ee\u5f55\u7684./node_modules \u67e5\u627e\uff0c\u6ca1\u6709\u7684\u8bdd\u518d\u53bb../node_modules \u6700\u540e\u5230\u6839\u76ee\u5f55\uff1b"),(0,r.kt)("p",null,"\u6240\u4ee5\u5f53\u5b89\u88c5\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\u90fd\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65f6\uff0c\u5c31\u6ca1\u6709\u5fc5\u8981\u5b89\u9ed8\u8ba4\u7684\u4e00\u5c42\u4e00\u5c42\u7684\u67e5\u627e\uff0c\u76f4\u63a5\u6307\u660e\u5b58\u653e\u7684\u7edd\u5bf9\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// config/webpack.common.js\n\n/*\n\u4f18\u5316 resolve.extensions \u914d\u7f6e\n1.\u540e\u7f00\u5c1d\u8bd5\u5217\u8868\u8981\u5c3d\u53ef\u80fd\u7684\u5c0f\uff0c\u4e0d\u8981\u628a\u9879\u76ee\u4e2d\u4e0d\u53ef\u80fd\u5b58\u5728\u7684\u60c5\u51b5\u5199\u5230\u540e\u7f00\u5c1d\u8bd5\u5217\u8868\u4e2d\u3002\n2.\u9891\u7387\u51fa\u73b0\u6700\u9ad8\u7684\u6587\u4ef6\u540e\u7f00\u8981\u4f18\u5148\u653e\u5728\u6700\u524d\u9762\uff0c\u4ee5\u505a\u5230\u5c3d\u5feb\u7684\u9000\u51fa\u5bfb\u627e\u8fc7\u7a0b\u3002\n3.\u5728\u6e90\u7801\u4e2d\u5199\u5bfc\u5165\u8bed\u53e5\u65f6\uff0c\u8981\u5c3d\u53ef\u80fd\u7684\u5e26\u4e0a\u540e\u7f00\uff0c\u4ece\u800c\u53ef\u4ee5\u907f\u514d\u5bfb\u627e\u8fc7\u7a0b\u3002\n*/\n// ...\n\nconst commonConfig = {\n  // ...\n  resolve: {\n    extensions: ['.js', '.jsx'],\n    mainFiles: ['index', 'list'],\n    alias: {\n        'com': resolve('src/components'),\n        'mod': resolve('src/modules'),\n        'util': resolve('src/util'),\n      '@': resolve('src')\n    },\n    modules: [\n      path.resolve(__dirname, 'node_modules'), // \u6307\u5b9a\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 node_modules \u4f18\u5148\u67e5\u627e\n      'node_modules', // \u5c06\u9ed8\u8ba4\u5199\u6cd5\u653e\u5728\u540e\u9762\n    ]\n  },\n  // ...\n}\n// ...\n")),(0,r.kt)("h2",{id:"\u65b9\u5f0f-3-\u4f18\u5316-resolveextensions-\u914d\u7f6e\u5408\u7406\u4f7f\u7528-resolveextensions"},"\u65b9\u5f0f 3 \u4f18\u5316 resolve.extensions \u914d\u7f6e:\u5408\u7406\u4f7f\u7528 resolve.extensions"),(0,r.kt)("p",null,"\u5728\u5bfc\u5165\u6ca1\u5e26\u6587\u4ef6\u540e\u7f00\u7684\u8def\u5f84\u65f6\uff0cwebpack \u4f1a\u81ea\u52a8\u5e26\u4e0a\u540e\u7f00\u53bb\u5c1d\u8bd5\u8be2\u95ee\u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u800c resolve.extensions \u7528\u4e8e\u914d\u7f6e\u5c1d\u8bd5\u540e\u7f00\u5217\u8868\uff1b\n\u9ed8\u8ba4\u4e3a extensions:","['js','json']",";"),(0,r.kt)("p",null,"\u5f53\u9047\u5230 require('./data')\u65f6 webpack \u4f1a\u5148\u5c1d\u8bd5\u5bfb\u627e data.js\uff0c\u6ca1\u6709\u518d\u53bb\u627e data.json\uff1b\u5982\u679c\u5217\u8868\u8d8a\u957f\uff0c\u6216\u8005\u6b63\u786e\u7684\u540e\u7f00\u8d8a\u5f80\u540e\uff0c\u5c1d\u8bd5\u7684\u6b21\u6570\u5c31\u4f1a\u8d8a\u591a\uff1b"),(0,r.kt)("p",null,"\u6240\u4ee5\u5728\u914d\u7f6e\u65f6\u4e3a\u63d0\u5347\u6784\u5efa\u4f18\u5316\u9700\u9075\u5b88\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9891\u7387\u51fa\u73b0\u9ad8\u7684\u6587\u4ef6\u540e\u7f00\u4f18\u5148\u653e\u5728\u524d\u9762\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5217\u8868\u5c3d\u53ef\u80fd\u7684\u5c0f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4e66\u5199\u5bfc\u5165\u8bed\u53e5\u65f6\uff0c\u5c3d\u91cf\u5199\u4e0a\u540e\u7f00\u540d")),(0,r.kt)("p",null,"\u56e0\u4e3a\u9879\u76ee\u4e2d\u7528\u7684 jsx \u8f83\u591a\uff0c\u6240\u4ee5\u914d\u7f6e extensions: ",'[".jsx",".js"]',","),(0,r.kt)("h2",{id:"\u65b9\u5f0f-4-\u4f7f\u7528-dllplugin-\u4f18\u5316"},"\u65b9\u5f0f 4 \u4f7f\u7528 DllPlugin \u4f18\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4f7f\u7528 webpack \u8fdb\u884c\u6253\u5305\u65f6\u5019\uff0c\u5bf9\u4e8e\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u5982 react\uff0creact-dom \u7b49\u8fd9\u4e9b\u4e0d\u4f1a\u4fee\u6539\u7684\u4f9d\u8d56\uff0c\u53ef\u4ee5\u8ba9\u5b83\u548c\u4e1a\u52a1\u4ee3\u7801\u5206\u5f00\u6253\u5305\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u8981\u4e0d\u5347\u7ea7\u4f9d\u8d56\u5e93\u7248\u672c\uff0c\u4e4b\u540e webpack \u5c31\u53ea\u9700\u8981\u6253\u5305\u9879\u76ee\u4e1a\u52a1\u4ee3\u7801\uff0c\u9047\u5230\u9700\u8981\u5bfc\u5165\u7684\u6a21\u5757\u5728\u67d0\u4e2a\u52a8\u6001\u94fe\u63a5\u5e93\u4e2d\u65f6\uff0c\u5c31\u76f4\u63a5\u53bb\u5176\u4e2d\u83b7\u53d6\uff1b\u800c\u4e0d\u7528\u518d\u53bb\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\uff0c\u8fd9\u6837\u7b2c\u4e09\u65b9\u5e93\u5c31\u53ea\u9700\u8981\u6253\u5305\u4e00\u6b21\u3002"))),(0,r.kt)("p",null,"\u63a5\u5165\u9700\u8981\u5b8c\u6210\u7684\u4e8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5c06\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u6a21\u5757\u62bd\u79bb\uff0c\u6253\u5305\u5230\u4e00\u4e2a\u4e2a\u5355\u72ec\u7684\u52a8\u6001\u94fe\u63a5\u5e93\u4e2d\n\u5f53\u9700\u8981\u5bfc\u5165\u7684\u6a21\u5757\u5b58\u5728\u52a8\u6001\u94fe\u63a5\u5e93\u4e2d\u65f6\uff0c\u8ba9\u5176\u76f4\u63a5\u4ece\u94fe\u63a5\u5e93\u4e2d\u83b7\u53d6\n\u9879\u76ee\u4f9d\u8d56\u7684\u6240\u6709\u52a8\u6001\u94fe\u63a5\u5e93\u90fd\u9700\u8981\u88ab\u52a0\u8f7d\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u5165\u5de5\u5177(webpack \u5df2\u5185\u7f6e)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," DllPlugin\u63d2\u4ef6\uff1a\u7528\u4e8e\u6253\u5305\u51fa\u4e00\u4e2a\u4e2a\u5355\u72ec\u7684\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6\uff1b\n DllReferencePlugin:\u7528\u4e8e\u5728\u4e3b\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f15\u5165DllPlugin\u63d2\u4ef6\u6253\u5305\u597d\u7684\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e webpack_dll.config.js \u6784\u5efa\u52a8\u6001\u94fe\u63a5\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst DllPlugin = require('webpack/lib/DllPlugin');\n\nmodule.exports = {\n    mode: 'production',\n    entry: {\n        // \u5c06React\u76f8\u5173\u6a21\u5757\u653e\u5165\u4e00\u4e2a\u52a8\u6001\u94fe\u63a5\u5e93\n        react: ['react','react-dom','react-router-dom','react-loadable'],\n        librarys: ['wangeditor'],\n        utils: ['axios','js-cookie']\n    },\n    output: {\n        filename: '[name]-dll.js',\n        path: path.resolve(__dirname, 'dll'),\n        // \u5b58\u653e\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u5168\u5c40\u53d8\u91cf\u540d\uff0c\u52a0\u4e0a_dll_\u9632\u6b62\u5168\u5c40\u53d8\u91cf\u51b2\u7a81\n        library: '_dll_[name]'\n    },\n    // \u52a8\u6001\u94fe\u63a5\u5e93\u7684\u5168\u5c40\u53d8\u91cf\u540d\u79f0\uff0c\u9700\u8981\u53efoutput.library\u4e2d\u4fdd\u6301\u4e00\u81f4\uff0c\u4e5f\u662f\u8f93\u51fa\u7684manifest.json\u6587\u4ef6\u4e2dname\u7684\u5b57\u6bb5\u503c\n    // \u5982react.manifest.json\u5b57\u6bb5\u4e2d\u5b58\u5728\"name\":\"_dll_react\"\n    plugins: [\n        new DllPlugin({\n            name: '_dll_[name]',\n            path: path.join(__dirname, 'dll', '[name].manifest.json')\n        })\n    ]\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"webpack.pro.config.js \u4e2d\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');\nplugins: [\n    // \u544a\u8bc9webpack\u4f7f\u7528\u4e86\u54ea\u4e9b\u52a8\u6001\u94fe\u63a5\u5e93\n        new DllReferencePlugin({\n            manifest: require('./dll/react.manifest.json')\n        }),\n        new DllReferencePlugin({\n            manifest: require('./dll/librarys.manifest.json')\n        }),\n        new DllReferencePlugin({\n            manifest: require('./dll/utils.manifest.json')\n        }),\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6ce8\u610f\uff1a\u5728webpack_dll.config.js\u6587\u4ef6\u4e2d\uff0cDllPlugin\u4e2d\u7684name\u53c2\u6570\u5fc5\u987b\u548coutput.library\u4e2d\u7684\u4e00\u81f4\uff1b\u56e0\u4e3aDllPlugin\u7684name\u53c2\u6570\u5f71\u54cd\u8f93\u51fa\u7684manifest.json\u7684name\uff1b\u800cwebpack.pro.config.js\u4e2d\u7684DllReferencePlugin\u4f1a\u8bfb\u53d6manifest.json\u7684name\uff0c\u5c06\u503c\u4f5c\u4e3a\u4ece\u5168\u5c40\u53d8\u91cf\u4e2d\u83b7\u53d6\u52a8\u6001\u94fe\u63a5\u5e93\u5185\u5bb9\u65f6\u7684\u5168\u5c40\u53d8\u91cf\u540d\n\n\u6267\u884c\u6784\u5efa\n  webpack --progress --colors --config ./webpack.dll.config.js\n\n  webpack --progress --colors --config ./webpack.prod.js\n\nhtml\u4e2d\u5f15\u5165dll.js\u6587\u4ef6\n")),(0,r.kt)("h2",{id:"\u65b9\u5f0f-5happypack-\u5e76\u884c\u6784\u5efa\u4f18\u5316"},"\u65b9\u5f0f 5.HappyPack \u5e76\u884c\u6784\u5efa\u4f18\u5316"),(0,r.kt)("p",null,"\u6838\u5fc3\u539f\u7406\uff1a\u5c06 webpack \u4e2d\u6700\u8017\u65f6\u7684 loader \u6587\u4ef6\u8f6c\u6362\u64cd\u4f5c\u4efb\u52a1\uff0c\u5206\u89e3\u5230\u591a\u4e2a\u8fdb\u7a0b\u4e2d\u5e76\u884c\u5904\u7406\uff0c\u4ece\u800c\u51cf\u5c11\u6784\u5efa\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u7531\u4e8enode\u662f\u5355\u7ebf\u7a0b\u8fd0\u884c\u7684\uff0c\u6240\u4ee5 webpack \u5728\u6253\u5305\u7684\u8fc7\u7a0b\u4e2d\u4e5f\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u7279\u522b\u662f\u5728\u6267\u884c loader \u7684\u65f6\u5019\uff0c\u957f\u65f6\u95f4\u7f16\u8bd1\u7684\u4efb\u52a1\u5f88\u591a\uff0c\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\u7b49\u5f85\u7684\u60c5\u51b5\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u65b9\u6cd5\u5c06 loader \u7684\u540c\u6b65\u6267\u884c\u8f6c\u6362\u4e3a\u5e76\u884c\uff0c\u8fd9\u6837\u5c31\u80fd\u5145\u5206\u5229\u7528\u7cfb\u7edf\u8d44\u6e90\u6765\u63d0\u9ad8\u6253\u5305\u901f\u5ea6\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5b89\u88c5\uff1anpm i -D happypack\n\u91cd\u65b0\u914d\u7f6erules\u90e8\u5206,\u5c06loader\u4ea4\u7ed9happypack\u6765\u5206\u914d\uff1a\n\n\u53c2\u6570\uff1a\nthreads\uff1a\u4ee3\u8868\u5f00\u542f\u51e0\u4e2a\u5b50\u8fdb\u7a0b\u53bb\u5904\u7406\u8fd9\u4e00\u7c7b\u6587\u4ef6\uff0c\u9ed8\u8ba4\u662f3\u4e2a\uff1b\nverbose:\u662f\u5426\u8fd0\u884cHappyPack\u8f93\u51fa\u65e5\u5fd7\uff0c\u9ed8\u8ba4true\uff1b\nthreadPool\uff1a\u4ee3\u8868\u5171\u4eab\u8fdb\u7a0b\u6c60\uff0c\u5373\u591a\u4e2aHappyPack\u793a\u4f8b\u4f7f\u7528\u4e00\u4e2a\u5171\u4eab\u8fdb\u7a0b\u6c60\u4e2d\u7684\u5b50\u8fdb\u7a0b\u53bb\u5904\u7406\u4efb\u52a1\uff0c\u4ee5\u9632\u8d44\u6e90\u5360\u6709\u8fc7\u591a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HappyPack = require('happypack');\nconst happyThreadPool = HappyPack.ThreadPool({size: 5}); //\u6784\u5efa\u5171\u4eab\u8fdb\u7a0b\u6c60\uff0c\u5305\u542b5\u4e2a\u8fdb\u7a0b\n...\nplugins: [\n    // happypack\u5e76\u884c\u5904\u7406\n    new HappyPack({\n        // \u7528\u552f\u4e00ID\u6765\u4ee3\u8868\u5f53\u524dHappyPack\u662f\u7528\u6765\u5904\u7406\u4e00\u7c7b\u7279\u5b9a\u6587\u4ef6\u7684\uff0c\u4e0erules\u4e2d\u7684use\u5bf9\u5e94\n        id: 'babel',\n        loaders: ['babel-loader?cacheDirectory'],//\u9ed8\u8ba4\u8bbe\u7f6eloader\u5904\u7406\n        threadPool: happyThreadPool,//\u4f7f\u7528\u5171\u4eab\u6c60\u5904\u7406\n    }),\n    new HappyPack({\n        // \u7528\u552f\u4e00ID\u6765\u4ee3\u8868\u5f53\u524dHappyPack\u662f\u7528\u6765\u5904\u7406\u4e00\u7c7b\u7279\u5b9a\u6587\u4ef6\u7684\uff0c\u4e0erules\u4e2d\u7684use\u5bf9\u5e94\n        id: 'css',\n        loaders: [\n            'css-loader',\n            'postcss-loader',\n            'sass-loader'],\n            threadPool: happyThreadPool\n    })\n],\nmodule: {\n    rules: [\n    {\n        test: /\\.(js|jsx)$/,\n        use: ['happypack/loader?id=babel'],\n        exclude: path.resolve(__dirname,' ./node_modules'),\n    },\n    {\n        test: /\\.(scss|css)$/,\n        //\u4f7f\u7528\u7684mini-css-extract-plugin\u63d0\u53d6css\u6b64\u5904\uff0c\u5982\u679c\u653e\u5728\u4e0a\u9762\u4f1a\u51fa\u9519\n        use: [MiniCssExtractPlugin.loader,'happypack/loader?id=css'],\n        include:[\n            path.resolve(__dirname,'src'),\n            path.join(__dirname, './node_modules/antd')\n        ]\n    },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HappyPack = require('happypack');\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        //\u628a .js \u6587\u4ef6\u7684\u5904\u7406\u8f6c\u4ea4\u7ed9 id \u4e3a babel \u7684 HappyPack \u5b9e\u4f8b\n        use: ['happypack/loader?id=babel'],\n        exclude: path.resolve(__dirname, 'node_modules'),\n      },\n      {\n        test: /\\.css$/,\n        // \u628a .css \u6587\u4ef6\u7684\u5904\u7406\u8f6c\u4ea4\u7ed9 id \u4e3a css \u7684 HappyPack \u5b9e\u4f8b\n        use: ['happypack/loader?id=css']\n      }\n    ]\n  },\n  plugins: [\n    new HappyPack({\n      id: 'js', //ID\u662f\u6807\u8bc6\u7b26\u7684\u610f\u601d\uff0cID\u7528\u6765\u4ee3\u7406\u5f53\u524d\u7684happypack\u662f\u7528\u6765\u5904\u7406\u4e00\u7c7b\u7279\u5b9a\u7684\u6587\u4ef6\u7684\n      threads: 2, //\u4f60\u8981\u5f00\u542f\u591a\u5c11\u4e2a\u5b50\u8fdb\u7a0b\u53bb\u5904\u7406\u8fd9\u4e00\u7c7b\u578b\u7684\u6587\u4ef6\n      loaders: [ 'babel-loader' ]\n    }),\n    new HappyPack({\n      id: 'css',\n      threads: 2,\n      loaders: [ 'style-loader', 'css-loader' ]\n    })\n  ],\n}\n")),(0,r.kt)("h2",{id:"\u65b9\u5f0f-6-\u4ee3\u7801\u538b\u7f29\u7528-paralleluglifyplugin-\u4ee3\u66ff\u81ea\u5e26\u7684-uglifyjsplugin-\u63d2\u4ef6"},"\u65b9\u5f0f 6 \u4ee3\u7801\u538b\u7f29\u7528 ParallelUglifyPlugin \u4ee3\u66ff\u81ea\u5e26\u7684 UglifyJsPlugin \u63d2\u4ef6"),(0,r.kt)("p",null,"\u81ea\u5e26\u7684 JS \u538b\u7f29\u63d2\u4ef6\u662f\u5355\u7ebf\u7a0b\u6267\u884c\u7684\uff0c\u800c webpack-parallel-uglify-plugin \u53ef\u4ee5\u5e76\u884c\u7684\u6267\u884c\n\u914d\u7f6e\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," uglifyJS: {}\uff1a\u7528\u4e8e\u538b\u7f29 ES5 \u4ee3\u7801\u65f6\u7684\u914d\u7f6e\uff0cObject \u7c7b\u578b\n test: /.js$/g:\u4f7f\u7528\u6b63\u5219\u53bb\u5339\u914d\u54ea\u4e9b\u6587\u4ef6\u9700\u8981\u88ab ParallelUglifyPlugin \u538b\u7f29\uff0c\u9ed8\u8ba4\u662f /.js$/\n include: []:\u4f7f\u7528\u6b63\u5219\u53bb\u5305\u542b\u88ab\u538b\u7f29\u7684\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a [].\n exclude: []: \u4f7f\u7528\u6b63\u5219\u53bb\u5305\u542b\u4e0d\u88ab\u538b\u7f29\u7684\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a []\n cacheDir: ''\uff1a\u7f13\u5b58\u538b\u7f29\u540e\u7684\u7ed3\u679c\uff0c\u4e0b\u6b21\u9047\u5230\u4e00\u6837\u7684\u8f93\u5165\u65f6\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u538b\u7f29\u540e\u7684\u7ed3\u679c\u5e76\u8fd4\u56de\uff0c\u9ed8\u8ba4\u4e0d\u4f1a\u7f13\u5b58\uff0c\u5f00\u542f\u7f13\u5b58\u8bbe\u7f6e\u4e00\u4e2a\u76ee\u5f55\u8def\u5f84\n workerCount: ''\uff1a\u5f00\u542f\u51e0\u4e2a\u5b50\u8fdb\u7a0b\u53bb\u5e76\u53d1\u7684\u6267\u884c\u538b\u7f29\u3002\u9ed8\u8ba4\u662f\u5f53\u524d\u8fd0\u884c\u7535\u8111\u7684 CPU \u6838\u6570\u51cf\u53bb1\n sourceMap: false\uff1a\u662f\u5426\u4e3a\u538b\u7f29\u540e\u7684\u4ee3\u7801\u751f\u6210\u5bf9\u5e94\u7684Source Map, \u9ed8\u8ba4\u4e0d\u751f\u6210\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\nminimizer: [\n    // webpack:production\u6a21\u5f0f\u9ed8\u8ba4\u6709\u914d\u6709js\u538b\u7f29\uff0c\u4f46\u662f\u5982\u679c\u8fd9\u91cc\u8bbe\u7f6e\u4e86css\u538b\u7f29\uff0cjs\u538b\u7f29\u4e5f\u8981\u91cd\u65b0\u8bbe\u7f6e,\u56e0\u4e3a\u4f7f\u7528minimizer\u4f1a\u81ea\u52a8\u53d6\u6d88webpack\u7684\u9ed8\u8ba4\u914d\u7f6e\n    new optimizeCssPlugin({\n        assetNameRegExp: /\\.css$/g,\n        cssProcessor: require('cssnano'),\n        cssProcessorOptions: { discardComments: { removeAll: true } },\n        canPrint: true\n    }),\n    new ParallelUglifyPlugin({\n        cacheDir: '.cache/',\n        uglifyJS:{\n            output: {\n           // \u662f\u5426\u8f93\u51fa\u53ef\u8bfb\u6027\u8f83\u5f3a\u7684\u4ee3\u7801\uff0c\u5373\u4f1a\u4fdd\u7559\u7a7a\u683c\u548c\u5236\u8868\u7b26\uff0c\u9ed8\u8ba4\u4e3a\u8f93\u51fa\uff0c\u4e3a\u4e86\u8fbe\u5230\u66f4\u597d\u7684\u538b\u7f29\u6548\u679c\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3afalse\n                beautify: false,\n        //\u662f\u5426\u4fdd\u7559\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca\uff0c\u9ed8\u8ba4\u4e3a\u4fdd\u7559\uff0c\u4e3a\u4e86\u8fbe\u5230\u66f4\u597d\u7684\u538b\u7f29\u6548\u679c\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3afalse\n                comments: false\n            },\n            compress: {\n            //\u662f\u5426\u5728UglifyJS\u5220\u9664\u6ca1\u6709\u7528\u5230\u7684\u4ee3\u7801\u65f6\u8f93\u51fa\u8b66\u544a\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u8f93\u51fa\n                warnings: false,\n            //\u662f\u5426\u5220\u9664\u4ee3\u7801\u4e2d\u6240\u6709\u7684console\u8bed\u53e5\uff0c\u9ed8\u8ba4\u4e3a\u4e0d\u5220\u9664\uff0c\u5f00\u542f\u540e\uff0c\u4f1a\u5220\u9664\u6240\u6709\u7684console\u8bed\u53e5\n                drop_console: true,\n            //\u662f\u5426\u5185\u5d4c\u867d\u7136\u5df2\u7ecf\u5b9a\u4e49\u4e86\uff0c\u4f46\u662f\u53ea\u7528\u5230\u4e00\u6b21\u7684\u53d8\u91cf\uff0c\u6bd4\u5982\u5c06 var x = 1; y = x, \u8f6c\u6362\u6210 y = 1, \u9ed8\u8ba4\u4e3a\u5426\n                collapse_vars: true,\n            }\n        }\n}),\n]\n")))}d.isMDXComponent=!0}}]);