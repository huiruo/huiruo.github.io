"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),u=i(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||s[b]||p;return n?a.createElement(m,l(l({ref:t},k),{},{components:n})):a.createElement(m,l({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<p;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const p={title:"webpack4-\u589e\u91cf\u6784\u5efa",sidebar_position:1},l=void 0,c={unversionedId:"webpack-AST-Babel/webpack4-\u589e\u91cf\u6784\u5efa",id:"webpack-AST-Babel/webpack4-\u589e\u91cf\u6784\u5efa",title:"webpack4-\u589e\u91cf\u6784\u5efa",description:"webpack 4\u7279\u6027",source:"@site/programming-tech/webpack-AST-Babel/05-webpack4-\u589e\u91cf\u6784\u5efa.md",sourceDirName:"webpack-AST-Babel",slug:"/webpack-AST-Babel/webpack4-\u589e\u91cf\u6784\u5efa",permalink:"/webpack-AST-Babel/webpack4-\u589e\u91cf\u6784\u5efa",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/webpack-AST-Babel/05-webpack4-\u589e\u91cf\u6784\u5efa.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"webpack4-\u589e\u91cf\u6784\u5efa",sidebar_position:1},sidebar:"docs",previous:{title:"\u6784\u5efa\u901f\u5ea6\u4f18\u5316",permalink:"/webpack-AST-Babel/\u6784\u5efa\u901f\u5ea6\u4f18\u5316"},next:{title:"webpack5-Persistent-Caching",permalink:"/webpack-AST-Babel/webpack5-Persistent-Caching"}},o={},i=[{value:"webpack 4\u7279\u6027",id:"webpack-4\u7279\u6027",level:2},{value:"\u4e3a\u4ec0\u4e48\u6211\u53ea\u6539\u4e86\u4e00\u884c\u4ee3\u7801\uff0c\u5374\u9700\u8981\u82b1 5 \u5206\u949f\u624d\u80fd\u6784\u5efa\u5b8c\u6210\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u53ea\u6539\u4e86\u4e00\u884c\u4ee3\u7801\u5374\u9700\u8981\u82b1-5-\u5206\u949f\u624d\u80fd\u6784\u5efa\u5b8c\u6210",level:2},{value:"\u600e\u4e48\u914d\u7f6e\uff1a\u589e\u91cf\u6784\u5efa",id:"\u600e\u4e48\u914d\u7f6e\u589e\u91cf\u6784\u5efa",level:3},{value:"\u589e\u91cf\u6784\u5efa\u7684\u5f71\u54cd\u56e0\u7d20",id:"\u589e\u91cf\u6784\u5efa\u7684\u5f71\u54cd\u56e0\u7d20",level:2},{value:"watch \u914d\u7f6e:\u589e\u91cf\u6784\u5efa\u8fc7\u7a0b\u4e2d-\u76d1\u63a7\u6587\u4ef6\u7684\u53d8\u5316",id:"watch-\u914d\u7f6e\u589e\u91cf\u6784\u5efa\u8fc7\u7a0b\u4e2d-\u76d1\u63a7\u6587\u4ef6\u7684\u53d8\u5316",level:3},{value:"cache\u914d\u7f6e",id:"cache\u914d\u7f6e",level:3},{value:"\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528\u589e\u91cf\u6784\u5efa\u7684\u963b\u788d",id:"\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528\u589e\u91cf\u6784\u5efa\u7684\u963b\u788d",level:3}],k={toc:i},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"webpack-4\u7279\u6027"},"webpack 4\u7279\u6027"),(0,r.kt)("p",null,"Webpack 4 \u662f\u4e00\u4e2a\u5728\u6211\u6240\u77e5\u622a\u6b62\u65e5\u671f\uff082022\u5e741\u6708\uff09\u4e4b\u524d\u53d1\u5e03\u7684\u7248\u672c\uff0c\u5b83\u5f15\u5165\u4e86\u4e00\u4e9b\u91cd\u8981\u7684\u7279\u6027\u548c\u6539\u8fdb\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3001\u6784\u5efa\u901f\u5ea6\u548c\u5f00\u53d1\u4f53\u9a8c\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b Webpack 4 \u7684\u4e3b\u8981\u7279\u6027\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5f0f\uff08Mode\uff09"),"\uff1a\nWebpack 4 \u5f15\u5165\u4e86\u6784\u5efa\u6a21\u5f0f\u7684\u6982\u5ff5\uff0c\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," \u6a21\u5f0f\u3002\u4e0d\u540c\u7684\u6a21\u5f0f\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e00\u7ec4\u9ed8\u8ba4\u9009\u9879\uff0c\u4ee5\u4fbf\u5728\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u4e2d\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0cWebpack \u4f1a\u542f\u7528\u6709\u7528\u7684\u5de5\u5177\uff0c\u5982\u66f4\u8be6\u7ec6\u7684\u9519\u8bef\u6d88\u606f\u548c\u6e90\u6620\u5c04\u3002\u751f\u4ea7\u6a21\u5f0f\u4e0b\uff0cWebpack \u4f1a\u8fdb\u884c\u4ee3\u7801\u538b\u7f29\u548c\u5176\u4ed6\u4f18\u5316\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tree Shaking"),"\uff1a\nWebpack 4 \u5f15\u5165\u4e86\u591a\u79cd\u4f18\u5316\uff0c\u5305\u62ec\u6a21\u5757\u6811\u7684Tree Shaking\u4ee5\u51cf\u5c0f bundle \u5927\u5c0f\uff0c\u4ee5\u53ca\u5bf9\u5f02\u6b65\u5757\u7684\u81ea\u52a8\u4ee3\u7801\u62c6\u5206\u4ee5\u51cf\u5c11\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u6587\u4ef6\u7b80\u5316"),"\uff1a\nWebpack 4 \u7b80\u5316\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u7f16\u5199\uff0c\u4e0d\u518d\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"CommonsChunkPlugin")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleConcatenationPlugin")," \u7b49\u63d2\u4ef6\uff0c\u8bb8\u591a\u529f\u80fd\u90fd\u88ab\u6574\u5408\u5230\u914d\u7f6e\u4e2d\uff0c\u4f7f\u5f97\u914d\u7f6e\u66f4\u7b80\u6d01\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Webpack 4\u5bf9\u5757\u56fe\u8fdb\u884c\u4e86\u5de8\u5927\u6539\u8fdb\uff0c\u5e76\u4f7f\u7528\u4e86\u65b0\u7684\u5757\u62c6\u5206\u6280\u672f\u3002\u5728\u65b0\u7684\u6539\u8fdb\u8fc7\u7a0b\u4e2d\uff0c\u8bde\u751f\u4e86\u65b0\u7684\u63d2\u4ef6---SplitChunksPlugin\u3002\u8fd9\u4e2a\u63d2\u4ef6\u80fd\u591f\u81ea\u52a8\u8bc6\u522b\u54ea\u4e9b\u6a21\u5757\u9700\u8981\u62c6\u5206\u4e3a\u542f\u53d1\u5f0f\u7684(heuristics)\uff0c\u54ea\u4e9b\u9700\u8981\u62c6\u5206\u4e3a\u5757\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"webpack-cli"),"\uff1a\nWebpack 4 \u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack-cli")," \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4ee5\u63d0\u4f9b\u66f4\u591a\u7684 CLI \u529f\u80fd\uff0c\u4f7f\u5f97\u5728\u7ec8\u7aef\u4e2d\u66f4\u5bb9\u6613\u8fd0\u884c Webpack\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5757\u70ed\u66ff\u6362\uff08Hot Module Replacement\uff09"),"\uff1a\nWebpack 4 \u6539\u8fdb\u4e86\u6a21\u5757\u70ed\u66ff\u6362\u7684\u652f\u6301\uff0c\u4f7f\u5f97\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u66f4\u5bb9\u6613\u8fdb\u884c\u70ed\u66ff\u6362\u4ee5\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"))),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u6211\u53ea\u6539\u4e86\u4e00\u884c\u4ee3\u7801\u5374\u9700\u8981\u82b1-5-\u5206\u949f\u624d\u80fd\u6784\u5efa\u5b8c\u6210"},"\u4e3a\u4ec0\u4e48\u6211\u53ea\u6539\u4e86\u4e00\u884c\u4ee3\u7801\uff0c\u5374\u9700\u8981\u82b1 5 \u5206\u949f\u624d\u80fd\u6784\u5efa\u5b8c\u6210\uff1f"),(0,r.kt)("p",null,"\u4e86\u89e3 Webpack \u6784\u5efa\u539f\u7406\uff0c\u76f8\u4fe1\u5df2\u7ecf\u53ef\u4ee5\u89e3\u7b54\u3002\u5c3d\u7ba1\u53ea\u6539\u52a8\u4e86\u4e00\u884c\u4ee3\u7801\uff0c\u4f46\u662f\u5728\u6267\u884c\u6784\u5efa\u65f6\uff0c\u8981\u5b8c\u6574\u6267\u884c\u6240\u6709\u6a21\u5757\u7684\u7f16\u8bd1\u3001\u4f18\u5316\u548c\u751f\u6210\u4ea7\u7269\u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u800c\u4e0d\u662f\u53ea\u9700\u8981\u5904\u7406\u6240\u6539\u52a8\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u53ea\u7f16\u8bd1\u6253\u5305\u6240\u6539\u52a8\u7684\u6587\u4ef6\u771f\u7684\u4e0d\u80fd\u5b9e\u73b0\u5417?"),(0,r.kt)("h3",{id:"\u600e\u4e48\u914d\u7f6e\u589e\u91cf\u6784\u5efa"},"\u600e\u4e48\u914d\u7f6e\uff1a\u589e\u91cf\u6784\u5efa"),(0,r.kt)("p",null,"\u90a3\u5c31\u662f\u5728\u5f00\u542f devServer\u7684\u65f6\u5019\uff0c\u5f53\u6211\u4eec\u6267\u884c webpack-dev-server \u547d\u4ee4\u540e\uff0cWebpack \u4f1a\u8fdb\u884c\u4e00\u6b21\u521d\u59cb\u5316\u7684\u6784\u5efa\uff0c\u6784\u5efa\u5b8c\u6210\u540e\u542f\u52a8\u670d\u52a1\u5e76\u8fdb\u5165\u5230\u7b49\u5f85\u66f4\u65b0\u7684\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install webpack-dev-server --save-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist'),\n  },\n  devServer: {\n    contentBase: './dist', // \u6307\u5b9a\u670d\u52a1\u7684\u6839\u76ee\u5f55\n    port: 8080, // \u6307\u5b9a\u7aef\u53e3\u53f7\n  },\n};\n")),(0,r.kt)("p",null,"\u5f53\u672c\u5730\u6587\u4ef6\u6709\u53d8\u66f4\u65f6\uff0cWebpack \u51e0\u4e4e\u77ac\u95f4\u5c06\u53d8\u66f4\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\uff0c\u5e76\u5c06\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u5185\u5bb9\u63a8\u9001\u5230\u6d4f\u89c8\u5668\u7aef\u3002\u4f60\u4f1a\u53d1\u73b0\uff0c\u8fd9\u4e2a\u6587\u4ef6\u53d8\u66f4\u540e\u7684\u5904\u7406\u8fc7\u7a0b\u5c31\u7b26\u5408\u4e0a\u9762\u6240\u8bf4\u7684\u53ea\u7f16\u8bd1\u6253\u5305\u6539\u52a8\u7684\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u8fd9\u5c31\u79f0\u4e3a\u201c\u589e\u91cf\u6784\u5efa\u201d\u3002"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u670d\u52a1\u6a21\u5f0f\u4e0b\uff0c\u521d\u6b21\u6784\u5efa\u7f16\u8bd1\u4e86 47 \u4e2a\u6a21\u5757\uff0c\u5b8c\u6574\u7684\u6784\u5efa\u65f6\u95f4\u4e3a 3306ms\u3002\u5f53\u6211\u4eec\u6539\u52a8\u5176\u4e2d\u4e00\u4e2a\u6e90\u7801\u6587\u4ef6\u540e\uff0c\u65e5\u5fd7\u663e\u793a Webpack \u53ea\u518d\u6b21\u6784\u5efa\u4e86\u8fd9\u4e00\u4e2a\u6a21\u5757\uff0c\u56e0\u6b64\u518d\u6b21\u6784\u5efa\u7684\u65f6\u95f4\u975e\u5e38\u77ed\uff0824ms\uff09\u3002\u90a3\u4e48\u4e3a\u4ec0\u4e48\u5728\u5f00\u53d1\u670d\u52a1\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u5b9e\u73b0\u589e\u91cf\u6784\u5efa\u7684\u6548\u679c\uff0c\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u4e0d\u884c\u5462\uff1f"),(0,r.kt)("h2",{id:"\u589e\u91cf\u6784\u5efa\u7684\u5f71\u54cd\u56e0\u7d20"},"\u589e\u91cf\u6784\u5efa\u7684\u5f71\u54cd\u56e0\u7d20"),(0,r.kt)("h3",{id:"watch-\u914d\u7f6e\u589e\u91cf\u6784\u5efa\u8fc7\u7a0b\u4e2d-\u76d1\u63a7\u6587\u4ef6\u7684\u53d8\u5316"},"watch \u914d\u7f6e:\u589e\u91cf\u6784\u5efa\u8fc7\u7a0b\u4e2d-\u76d1\u63a7\u6587\u4ef6\u7684\u53d8\u5316"),(0,r.kt)("p",null,"\u77e5\u53d8\u66f4\u7684\u662f\u54ea\u4e2a\u6587\u4ef6\u540e\uff0c\u624d\u80fd\u8fdb\u884c\u540e\u7eed\u7684\u9488\u5bf9\u6027\u5904\u7406\u3002\u5728 Webpack \u4e2d\u542f\u7528 watch \u914d\u7f6e\u5373\u53ef\uff0c\u6b64\u5916\u5728\u4f7f\u7528 devServer \u7684\u60c5\u51b5\u4e0b\uff0c\u8be5\u9009\u9879\u4f1a\u9ed8\u8ba4\u5f00\u542f\u3002"),(0,r.kt)("p",null,"\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u5f00\u542f watch \u914d\u7f6e\u540e\uff0c\u76f8\u6bd4\u521d\u6b21\u6784\u5efa\uff0c\u518d\u6b21\u6784\u5efa\u6240\u7f16\u8bd1\u7684\u6a21\u5757\u6570\u91cf\u5e76\u672a\u51cf\u5c11\uff0c\u5373\u4f7f\u53ea\u6539\u52a8\u4e86\u4e00\u4e2a\u6587\u4ef6\uff0c\u4e5f\u4ecd\u7136\u4f1a\u5bf9\u6240\u6709\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\u3002\u56e0\u6b64\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u53ea\u5f00\u542f watch \u914d\u7f6e\u540e\u7684\u518d\u6b21\u6784\u5efa\u5e76\u4e0d\u80fd\u5b9e\u73b0\u589e\u91cf\u6784\u5efa\u3002"),(0,r.kt)("p",null,"\u542f\u7528 Watch \u6a21\u5f0f\u3002\u8fd9\u610f\u5473\u7740\u5728\u521d\u59cb\u6784\u5efa\u4e4b\u540e\uff0cwebpack \u5c06\u7ee7\u7eed\u76d1\u542c\u4efb\u4f55\u5df2\u89e3\u6790\u6587\u4ef6\u7684\u66f4\u6539\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v4.webpack.docschina.org/configuration/watch/#watch"},"https://v4.webpack.docschina.org/configuration/watch/#watch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  watch: true\n};\n")),(0,r.kt)("h3",{id:"cache\u914d\u7f6e"},"cache\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v4.webpack.docschina.org/configuration/other-options/#cache"},"https://v4.webpack.docschina.org/configuration/other-options/#cache")),(0,r.kt)("p",null,"Webpack 5 \u4e2d\u8fd9\u4e00\u9009\u9879\u4f1a\u6709\u5927\u7684\u6539\u53d8\uff0c\u4f1a\u5728\u4e0b\u4e00\u8282\u8bfe\u4e2d\u5c55\u5f00\u8ba8\u8bba\u3002cache\u4e00\u822c\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4e3afalse\uff0c\u5373\u4e0d\u4f7f\u7528\u7f13\u5b58\uff0c\u4f46\u5728\u5f00\u53d1\u6a21\u5f0f\u5f00\u542f watch \u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\uff0ccache \u7684\u9ed8\u8ba4\u503c\u53d8\u66f4\u4e3atrue\u3002\u6b64\u5916\uff0c\u5982\u679c cache \u4f20\u503c\u4e3a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5219\u8868\u793a\u4f7f\u7528\u8be5\u5bf9\u8c61\u6765\u4f5c\u4e3a\u7f13\u5b58\u5bf9\u8c61\uff0c\u8fd9\u5f80\u5f80\u7528\u4e8e\u591a\u4e2a\u7f16\u8bd1\u5668 compiler \u7684\u8c03\u7528\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"\u7f13\u5b58\u751f\u6210\u7684 webpack \u6a21\u5757\u548c chunk\uff0c\u6765\u6539\u5584\u6784\u5efa\u901f\u5ea6\u3002\u7f13\u5b58\u9ed8\u8ba4\u5728\u89c2\u5bdf\u6a21\u5f0f(watch mode)\u542f\u7528\u3002\u7981\u7528\u7f13\u5b58\u53ea\u9700\u7b80\u5355\u4f20\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  cache: false\n};\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6240\u671f\u671b\u7684\uff0c\u518d\u6b21\u6784\u5efa\u65f6\uff0c\u5728\u7f16\u8bd1\u6a21\u5757\u9636\u6bb5\u53ea\u5bf9\u6709\u53d8\u5316\u7684\u6587\u4ef6\u8fdb\u884c\u4e86\u91cd\u65b0\u7f16\u8bd1\uff0c\u5b9e\u73b0\u4e86\u589e\u91cf\u7f16\u8bd1\u7684\u6548\u679c\u3002\n\u4f46\u662f\u7f8e\u4e2d\u4e0d\u8db3\u7684\u662f\uff0c\u5728\u4f18\u5316\u9636\u6bb5\u538b\u7f29\u4ee3\u7801\u65f6\u4ecd\u7136\u8017\u8d39\u4e86\u8f83\u591a\u7684\u65f6\u95f4\u3002\u8fd9\u4e00\u70b9\u5f88\u5bb9\u6613\u7406\u89e3\uff1a"),(0,r.kt)("p",null,"\u4f53\u79ef\u6700\u5927\u7684 react\u3001react-dom \u7b49\u6a21\u5757\u548c\u5165\u53e3\u6a21\u5757\u6253\u5165\u4e86\u540c\u4e00\u4e2a Chunk \u4e2d\uff0c\u5373\u4f7f\u4fee\u6539\u7684\u6a21\u5757\u662f\u5355\u72ec\u5206\u79bb\u7684 bar.js\uff0c\u4f46\u5b83\u7684\u4ea7\u7269\u540d\u79f0\u7684\u53d8\u5316\u4ecd\u7136\u9700\u8981\u53cd\u6620\u5728\u5165\u53e3 Chunk \u7684 runtime \u6a21\u5757\u4e2d\u3002\u56e0\u6b64\u5165\u53e3 Chunk \u4e5f\u9700\u8981\u8ddf\u7740\u91cd\u65b0\u538b\u7f29\u800c\u65e0\u6cd5\u590d\u7528\u538b\u7f29\u7f13\u5b58\u6570\u636e\u3002\u6839\u636e\u524d\u9762\u51e0\u8282\u8bfe\u7684\u77e5\u8bc6\u70b9\uff0c\u6211\u4eec\u5bf9\u914d\u7f6e\u518d\u505a\u4e00\u4e9b\u4f18\u5316\uff0c\u5c06vendor \u5206\u79bb\u540e\u518d\u6765\u770b\u770b\u6548\u679c\uff0c\u5982\u4e0b\u9762\u7684\u56fe\u7247\u6240\u793a\uff1a"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7\u4e0a\u9762\u8fd9\u4e00\u7cfb\u5217\u7684\u914d\u7f6e\u540e\uff08watch + cache\uff09\uff0c\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\uff0c\u6700\u7ec8\u5448\u73b0\u51fa\u4e86\u6211\u4eec\u671f\u671b\u7684\u589e\u91cf\u6784\u5efa\u6548\u679c\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6709\u6587\u4ef6\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u81ea\u52a8\u7f16\u8bd1\u53d8\u66f4\u7684\u6a21\u5757\uff0c\u5e76\u53ea\u5bf9\u8be5\u6a21\u5757\u5f71\u54cd\u5230\u7684\u5c11\u91cf Chunk \u8fdb\u884c\u4f18\u5316\u5e76\u66f4\u65b0\u4ea7\u7269\u6587\u4ef6\u7248\u672c\uff0c\u800c\u5176\u4ed6\u4ea7\u7269\u6587\u4ef6\u5219\u4fdd\u6301\u4e4b\u524d\u7684\u7248\u672c\u3002\u5982\u6b64\uff0c\u6574\u4e2a\u6784\u5efa\u8fc7\u7a0b\u7684\u901f\u5ea6\u5927\u5927\u63d0\u5347\u3002")),(0,r.kt)("h3",{id:"\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528\u589e\u91cf\u6784\u5efa\u7684\u963b\u788d"},"\u751f\u4ea7\u73af\u5883\u4e0b\u4f7f\u7528\u589e\u91cf\u6784\u5efa\u7684\u963b\u788d"),(0,r.kt)("p",null,"\u589e\u91cf\u6784\u5efa\u4e4b\u6240\u4ee5\u5feb\u662f\u56e0\u4e3a\u5c06\u6784\u5efa\u6240\u9700\u7684\u6570\u636e\uff08\u9879\u76ee\u6587\u4ef6\u3001node_modules \u4e2d\u7684\u6587\u4ef6\u6570\u636e\u3001\u5386\u53f2\u6784\u5efa\u540e\u7684\u7f13\u5b58\u6570\u636e\u7b49\uff09\u90fd\u4fdd\u7559\u5728\u5185\u5b58\u4e2d\u3002\u5728 watch \u6a21\u5f0f\u4e0b\u4fdd\u7559\u7740\u6784\u5efa\u4f7f\u7528\u7684 Node \u8fdb\u7a0b\uff0c\u4f7f\u5f97\u4e0b\u4e00\u6b21\u6784\u5efa\u65f6\u53ef\u4ee5\u76f4\u63a5\u8bfb\u53d6\u5185\u5b58\u4e2d\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u800c\u751f\u4ea7\u73af\u5883\u4e0b\u7684\u6784\u5efa\u901a\u5e38\u5728\u96c6\u6210\u90e8\u7f72\u7cfb\u7edf\u4e2d\u8fdb\u884c\u3002\u5bf9\u4e8e\u7ba1\u7406\u591a\u9879\u76ee\u7684\u6784\u5efa\u7cfb\u7edf\u800c\u8a00\uff0c\u6784\u5efa\u8fc7\u7a0b\u662f\u4efb\u52a1\u5f0f\u7684\uff1a\u4efb\u52a1\u7ed3\u675f\u540e\u5373\u7ed3\u675f\u8fdb\u7a0b\u5e76\u56de\u6536\u7cfb\u7edf\u8d44\u6e90\u3002\u5bf9\u4e8e\u8fd9\u6837\u7684\u7cfb\u7edf\u800c\u8a00\uff0c\u589e\u91cf\u6784\u5efa\u6240\u9700\u7684\u4fdd\u7559\u8fdb\u7a0b\u4e0e\u957f\u65f6\u95f4\u5360\u7528\u5185\u5b58\uff0c\u901a\u5e38\u90fd\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u57fa\u4e8e\u5185\u5b58\u7684\u7f13\u5b58\u6570\u636e\u6ce8\u5b9a\u65e0\u6cd5\u8fd0\u7528\u5230\u751f\u4ea7\u73af\u5883\u4e2d\u3002\u8981\u60f3\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u63d0\u5347\u6784\u5efa\u901f\u5ea6\uff0c\u9996\u8981\u6761\u4ef6\u662f\u5c06\u7f13\u5b58\u5199\u5165\u5230\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002\u53ea\u6709\u5c06\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u7f13\u5b58\u6570\u636e\u6301\u4e45\u5316\uff0c\u624d\u80fd\u8131\u79bb\u5bf9\u4fdd\u6301\u8fdb\u7a0b\u7684\u4f9d\u8d56\uff0c\u4f60\u53ea\u9700\u8981\u5728\u6bcf\u6b21\u6784\u5efa\u65f6\u5c06\u7f13\u5b58\u6570\u636e\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\u8fdb\u884c\u5904\u7406\u5373\u53ef\u3002\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u4e5f\u662f\u4e0a\u4e00\u8bfe\u65f6\u4e2d\u8bb2\u5230\u7684\u90a3\u4e9b Loader \u4e0e\u63d2\u4ef6\u4e2d\u7684\u7f13\u5b58\u6570\u636e\u7684\u5b58\u50a8\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u9057\u61be\u7684\u662f\uff0cWebpack 4 \u4e2d\u7684 cache \u914d\u7f6e\u53ea\u652f\u6301\u57fa\u4e8e\u5185\u5b58\u7684\u7f13\u5b58\uff0c\u5e76\u4e0d\u652f\u6301\u6587\u4ef6\u7cfb\u7edf\u7684\u7f13\u5b58\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ea\u80fd\u901a\u8fc7\u4e0a\u8282\u8bfe\u8bb2\u5230\u7684\u4e00\u4e9b\u652f\u6301\u7f13\u5b58\u7684\u7b2c\u4e09\u65b9\u5904\u7406\u63d2\u4ef6\u5c06\u5c40\u90e8\u7684\u6784\u5efa\u73af\u8282\u5e94\u7528\u201c\u589e\u91cf\u5904\u7406\u201d\u3002")),(0,r.kt)("p",null,"\u4e0d\u8fc7\u597d\u6d88\u606f\u662f Webpack 5 \u4e2d\u6b63\u5f0f\u652f\u6301\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u6301\u4e45\u5316\u7f13\u5b58\uff08Persistent Cache\uff09\u3002"),(0,r.kt)("p",null,"\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F"},"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F")))}s.isMDXComponent=!0}}]);