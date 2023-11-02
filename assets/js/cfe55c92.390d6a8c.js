"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),v=n,k=d["".concat(p,".").concat(v)]||d[v]||s[v]||a;return r?l.createElement(k,i(i({ref:t},c),{},{components:r})):l.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}v.displayName="MDXCreateElement"},85720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={},i=void 0,o={unversionedId:"webpack-AST-Babel/vite",id:"webpack-AST-Babel/vite",title:"vite",description:"\u4ecb\u7ecd",source:"@site/programming-tech/webpack-AST-Babel/20-vite.md",sourceDirName:"webpack-AST-Babel",slug:"/webpack-AST-Babel/vite",permalink:"/webpack-AST-Babel/vite",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/webpack-AST-Babel/20-vite.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"docs",previous:{title:"resolve-devServer-\u7b49\u53c2\u6570",permalink:"/webpack-AST-Babel/resolve-devServer-\u7b49\u53c2\u6570"},next:{title:"react-ssr\u6e32\u67d3",permalink:"/SSR-Nodejs/react-ssr\u6e32\u67d3"}},p={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"prod\u73af\u5883\u6253\u5305\u533a\u522b",id:"prod\u73af\u5883\u6253\u5305\u533a\u522b",level:2},{value:"vite\u5728\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa\u76ee\u524d\u7528\u7684Rollup",id:"vite\u5728\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa\u76ee\u524d\u7528\u7684rollup",level:3},{value:"\u9996\u5c4f\u3001\u61d2\u52a0\u8f7d\u6027\u80fd\u4f18\u5316",id:"\u9996\u5c4f\u61d2\u52a0\u8f7d\u6027\u80fd\u4f18\u5316",level:3},{value:"\u670d\u52a1\u542f\u52a8\u901f\u5ea6",id:"\u670d\u52a1\u542f\u52a8\u901f\u5ea6",level:2},{value:"\u70ed\u66f4\u65b0\u901f\u5ea6",id:"\u70ed\u66f4\u65b0\u901f\u5ea6",level:2},{value:"webpack",id:"webpack",level:3},{value:"vite",id:"vite",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.kt)("p",null,"adv. \u6025\u901f\u5730\uff1b\u8f7b\u5feb\u5730\n/vi\u02d0t/"),(0,n.kt)("p",null,"vite:\u5c31\u662f\u501f\u52a9\u6d4f\u89c8\u5668\u539f\u751f ES Modules \u80fd\u529b\uff0c\u5f53\u6d4f\u89c8\u5668\u53d1\u51fa\u8bf7\u6c42\u65f6\uff0c\u4e3a\u6d4f\u89c8\u5668\u6309\u9700\u63d0\u4f9b ES Module \u6587\u4ef6\uff0c\u6d4f\u89c8\u5668\u83b7\u53d6 ES Module \u6587\u4ef6\u4f1a\u76f4\u63a5\u6267\u884c\uff0c\u5373\u4f7f\u9996\u6b21\u542f\u52a8\u7684\u9884\u6784\u5efa\u4e5f\u662f\u4f7f\u7528\u901f\u5ea6\u60ca\u4eba\u7684esbuild\u5b8c\u6210\uff0c\u4f46\u662f\u8981\u4f18\u5316\u7684\u70b9\uff1a\u9996\u5c4f\u3001\u61d2\u52a0\u8f7d\u6027\u80fd"),(0,n.kt)("p",null,"webpack:\u9700\u8981\u6784\u5efa\u5b8c\u6574\u7684\u4f9d\u8d56\u5173\u7cfb,\u6253\u5305\u6210\u4e00\u4e2abundle.js"),(0,n.kt)("h2",{id:"prod\u73af\u5883\u6253\u5305\u533a\u522b"},"prod\u73af\u5883\u6253\u5305\u533a\u522b"),(0,n.kt)("h3",{id:"vite\u5728\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa\u76ee\u524d\u7528\u7684rollup"},"vite\u5728\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa\u76ee\u524d\u7528\u7684Rollup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"vite\u5728\u751f\u4ea7\u73af\u5883\uff0c\u5982\u679c\u4f7f\u7528ESM\u4f1a\u5b58\u5728\u5927\u91cf\u989d\u5916\u7f51\u7edc\u8bf7\u6c42\u95ee\u9898\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u5c3d\u7ba1\u539f\u751fESM\u73b0\u5728\u5f97\u5230\u4e86\u5e7f\u6cdb\u652f\u6301\uff0c\u4f46\u7531\u4e8e\u5d4c\u5957\u5bfc\u5165\u4f1a\u5bfc\u81f4\u989d\u5916\u7684\u7f51\u7edc\u5f80\u8fd4\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u53d1\u5e03\u672a\u6253\u5305\u7684ESM\u4ecd\u7136\u6548\u7387\u4f4e\u4e0b\uff1b\n\u6700\u597d\u7684\u65b9\u5f0f\u8fd8\u662f\u4ee3\u7801\u8fdb\u884c tree-shaking\u3001\u61d2\u52a0\u8f7d\u3001\u548c chunk \u5206\u9694\u7b49\uff1b\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 rollup\u6253\u5305\u800c\u4e0d\u662f\u901f\u5ea6\u60ca\u4eba\u7684esbuild\uff0c\u8fd9\u662f\u56e0\u4e3aesbuild\u9488\u5bf9\u6784\u5efa\u5e94\u7528\u7684\u91cd\u8981\u529f\u80fd\u4ecd\u7136\u8fd8\u5728\u6301\u7eed\u5f00\u53d1\u4e2d \u2014\u2014 \u7279\u522b\u662f\u4ee3\u7801\u5206\u5272\u548ccss\u5904\u7406\u65b9\u9762\uff0crollup\u5728\u5e94\u7528\u6253\u5305\u65b9\u9762\u66f4\u52a0\u7684\u6210\u719f")),(0,n.kt)("h3",{id:"\u9996\u5c4f\u61d2\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"},"\u9996\u5c4f\u3001\u61d2\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"),(0,n.kt)("p",null,"webpack bundle\u5f97\u5230\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u6a21\u5757\u5173\u7cfb\u4f9d\u8d56\u5305;vite\u7531\u4e8eunbundle\u673a\u5236\uff0c\u9996\u5c4f\u3001\u61d2\u52a0\u8f7d\u4f1a\u5b58\u5728\u4e00\u5b9a\u7684\u95ee\u9898\uff0c\u5904\u7406\u65f6\u9700\u8981\u989d\u5916\u505a\u4ee5\u4e0b\u5de5\u4f5c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u672a\u5bf9\u6e90\u6587\u4ef6\u505a\u5408\u5e76\u6346\u7ed1\u64cd\u4f5c\uff0c\u5bfc\u81f4\u5927\u91cf\u7684http\u8bf7\u6c42\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u52a0\u8f7d\u7684\u6587\u4ef6\u9700\u8981\u5bf9\u6e90\u6587\u4ef6\u8fdb\u884c\u8f6c\u6362\u64cd\u4f5c\uff1aresolve\u3001load\u3001transform\u3001parse\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9884\u6784\u5efa\u3001\u4e8c\u6b21\u9884\u6784\u5efa\u64cd\u4f5c\u4e5f\u4f1a\u963b\u585e\u9996\u5c4f\u8bf7\u6c42\uff0c\u76f4\u5230\u9884\u6784\u5efa\u5b8c\u6210\u4e3a\u6b62\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u662f\u7531\u4e8e\u7f13\u5b58\u7684\u5b58\u5728\uff0c\u5f53\u7b2c\u4e00\u6b21\u52a0\u8f7d\u5b8c\u6210(\u9884\u6784\u5efa)\u4e4b\u540e\uff0c\u518d\u6b21reload\u7684\u65f6\u5019\u6027\u80fd\u4f1a\u6709\u8f83\u5927\u7684\u63d0\u5347;")),(0,n.kt)("h2",{id:"\u670d\u52a1\u542f\u52a8\u901f\u5ea6"},"\u670d\u52a1\u542f\u52a8\u901f\u5ea6"),(0,n.kt)("p",null,"webpack\u9700\u8981\u5148\u628a\u6240\u6709\u7684\u6a21\u5757\u5efa\u7acb\u4f9d\u8d56\u5173\u7cfb\u6253\u5305\u6210\u4e00\u4e2a\u5927\u6587\u4ef6\uff0c\u901f\u5ea6\u76f8\u5bf9\u8f83\u6162\uff1b"),(0,n.kt)("p",null,"vite\u5c06\u5e94\u7528\u4e2d\u7684\u6a21\u5757\u533a\u5206\u4e3a \u4f9d\u8d56(node_modules) \u548c \u6e90\u7801(\u9879\u76ee\u4ee3\u7801) \u4e24\u7c7b\uff0c\u8fdb\u884c\u9884\u6784\u5efa\uff0c\u901f\u5ea6\u4f1a\u5feb\u5f88\u591a\uff1b"),(0,n.kt)("p",null,"\u4f9d\u8d56\uff1a\u4f7f\u7528esbuild\u9884\u6784\u5efa\uff0cesbuild\u4f7f\u7528Go\u7f16\u5199\uff0c\u6bd4\u4ee5Node.js\u7f16\u5199\u7684\u6253\u5305\u5668\u9884\u6784\u5efa\u4f9d\u8d56\u5feb10-100\u500d\uff1b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u521d\u6b21\u9884\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u5728node_modules\u4e2d\u751f\u6210 .vite\u6587\u4ef6\uff0c\u540e\u671f\u4e0d\u9700\u8981\u518d\u6b21\u8fdb\u884c\u4f9d\u8d56\u7684\u9884\u6784\u5efa\uff1b\n")),(0,n.kt)("p",null,"\u6e90\u7801\uff1a\u5728\u6d4f\u89c8\u5668\u8bf7\u6c42\u65f6\u6309\u9700\u8f6c\u6362\u5e76\u4ee5\u539f\u751fESM\u65b9\u5f0f\u63d0\u4f9b\u6e90\u7801\uff0c\u8ba9\u6d4f\u89c8\u5668\u63a5\u7ba1\u4e86\u6253\u5305\u7a0b\u5e8f\u7684\u90e8\u5206\u5de5\u4f5c\uff1b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u7531\u4e8e\u662f\u6309\u9700\u63d0\u4f9b\uff0c\u6240\u4ee5\u5728\u9996\u5c4f\u3001\u61d2\u52a0\u8f7d\u65b9\u9762\u76f8\u6bd4\u4e8ewebpack\u4f1a\u5b58\u5728\u4e00\u5b9a\u7684\u5dee\u5f02\uff1b\n")),(0,n.kt)("h2",{id:"\u70ed\u66f4\u65b0\u901f\u5ea6"},"\u70ed\u66f4\u65b0\u901f\u5ea6"),(0,n.kt)("h3",{id:"webpack"},"webpack"),(0,n.kt)("p",null,"\u7f16\u8f91\u6587\u4ef6\u540e\u5c06\u91cd\u65b0\u6784\u5efa\u6587\u4ef6\u672c\u8eab;\u6240\u4ee5webpack\u652f\u6301\u4e86\u52a8\u6001\u6a21\u5757\u70ed\u91cd\u8f7dHMR(Hot Module Replacing)\uff0c\u8fd9\u8f83\u5927\u7684\u63d0\u5347\u4e86\u5f00\u53d1\u4f53\u9a8c"),(0,n.kt)("h3",{id:"vite"},"vite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728vite\u4e2d\uff0cHMR\u662f\u5728\u539f\u751fESM\u4e0a\u6267\u884c\u7684\uff0c\u5f53\u7f16\u8f91\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u53ea\u9700\u8981\u7cbe\u786e\u5730\u4f7f\u5df2\u7f16\u8f91\u7684\u6a21\u5757\u4e0e\u5176\u6700\u8fd1\u7684 HMR\u8fb9\u754c\u4e4b\u95f4\u7684\u94fe\u5931\u6548(\u5927\u591a\u6570\u65f6\u5019\u53ea\u9700\u8981\u6a21\u5757\u672c\u8eab)\uff0c\u4f7fHMR\u66f4\u65b0\u59cb\u7ec8\u5feb\u901f\uff0c\u65e0\u8bba\u5e94\u7528\u7684\u5927\u5c0f\uff1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"vite\u540c\u65f6\u5229\u7528HTTP\u5934\u6765\u52a0\u901f\u6574\u4e2a\u9875\u9762\u7684\u91cd\u65b0\u52a0\u8f7d(\u518d\u6b21\u8ba9\u6d4f\u89c8\u5668\u4e3a\u6211\u4eec\u505a\u66f4\u591a\u4e8b\u60c5)\uff1a",(0,n.kt)("br",null),"\u6e90\u7801\u6a21\u5757\u7684\u8bf7\u6c42\u4f1a\u6839\u636e304 Not Modified\u8fdb\u884c\u534f\u5546\u7f13\u5b58\uff1b",(0,n.kt)("br",null),"\u4f9d\u8d56\u6a21\u5757\u8bf7\u6c42\u5219\u4f1a\u901a\u8fc7 Cache-Control: max-age=31536000,immutable\u8fdb\u884c\u5f3a\u7f13\u5b58;"))))}s.isMDXComponent=!0}}]);