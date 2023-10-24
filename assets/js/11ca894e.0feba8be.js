"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=c(r),b=n,d=k["".concat(u,".").concat(b)]||k[b]||s[b]||l;return r?o.createElement(d,a(a({ref:t},i),{},{components:r})):o.createElement(d,a({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=b;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[k]="string"==typeof e?e:n,a[1]=p;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},63830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const l={},a=void 0,p={unversionedId:"build-monorepo-turbopack/turbopack",id:"build-monorepo-turbopack/turbopack",title:"turbopack",description:"\u5f71\u54cd\u5f00\u53d1\u4f53\u9a8c\u7684\u5730\u65b9\u662f\u9996\u6b21\u7f16\u8bd1\u548c\u540e\u7eed\u7684\u589e\u91cf\u7f16\u8bd1",source:"@site/programming-tech/build-monorepo-turbopack/01-turbopack.md",sourceDirName:"build-monorepo-turbopack",slug:"/build-monorepo-turbopack/turbopack",permalink:"/build-monorepo-turbopack/turbopack",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/build-monorepo-turbopack/01-turbopack.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"monorepo",permalink:"/build-monorepo-turbopack/monorepo"},next:{title:"react-ssr\u6e32\u67d3",permalink:"/SSR-Nodejs/react-ssr\u6e32\u67d3"}},u={},c=[{value:"\u5f71\u54cd\u5f00\u53d1\u4f53\u9a8c\u7684\u5730\u65b9\u662f\u9996\u6b21\u7f16\u8bd1\u548c\u540e\u7eed\u7684\u589e\u91cf\u7f16\u8bd1",id:"\u5f71\u54cd\u5f00\u53d1\u4f53\u9a8c\u7684\u5730\u65b9\u662f\u9996\u6b21\u7f16\u8bd1\u548c\u540e\u7eed\u7684\u589e\u91cf\u7f16\u8bd1",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Turbopack",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-turbopack",level:2},{value:"Turbopack \u4e3a\u4ec0\u4e48\u5feb\uff1f",id:"turbopack-\u4e3a\u4ec0\u4e48\u5feb",level:2},{value:"\u6309\u8981\u6c42\u7f16\u8bd1",id:"\u6309\u8981\u6c42\u7f16\u8bd1",level:3},{value:"\u589e\u91cf\u8ba1\u7b97",id:"\u589e\u91cf\u8ba1\u7b97",level:3},{value:"\u60f0\u6027\u6253\u5305",id:"\u60f0\u6027\u6253\u5305",level:3},{value:"Turbopack \u7684\u529f\u80fd",id:"turbopack-\u7684\u529f\u80fd",level:3},{value:"Turbopack vs Vite",id:"turbopack-vs-vite",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5728\u5176\u4ed6\u5305\u5f15\u5165packages",id:"\u5728\u5176\u4ed6\u5305\u5f15\u5165packages",level:2},{value:"\u53c2\u8003\uff1a",id:"\u53c2\u8003",level:2}],i={toc:c},k="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5f71\u54cd\u5f00\u53d1\u4f53\u9a8c\u7684\u5730\u65b9\u662f\u9996\u6b21\u7f16\u8bd1\u548c\u540e\u7eed\u7684\u589e\u91cf\u7f16\u8bd1"},"\u5f71\u54cd\u5f00\u53d1\u4f53\u9a8c\u7684\u5730\u65b9\u662f\u9996\u6b21\u7f16\u8bd1\u548c\u540e\u7eed\u7684\u589e\u91cf\u7f16\u8bd1"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://turbo.build/pack"},"Turbopack \u5b98\u7f51")),(0,n.kt)("p",null,"\u5982\u4f55\u8bc4\u4ef7Vercel\u5f00\u6e90\u7684\u4f7f\u7528Rust\u5b9e\u73b0\u7684Turbopack?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/562349205/answers/updated"},"https://www.zhihu.com/question/562349205/answers/updated")),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-turbopack"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Turbopack"),(0,n.kt)("p",null,"\u4f20\u7edf\u7684 Monorepo \u89e3\u51b3\u65b9\u6848\u4e2d\uff0c\u9879\u76ee\u6784\u5efa\u65f6\u5982\u679c\u57fa\u4e8e\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5b58\u5728\u4f9d\u8d56\u6784\u5efa\uff0c\u8017\u65f6\u662f\u975e\u5e38\u53ef\u6015\u7684\u3002"),(0,n.kt)("p",null,"Turbopack \u662f\u9488\u5bf9 JavaScript \u548c TypeScript \u4f18\u5316\u7684\u589e\u91cf\u6253\u5305\u5de5\u5177"),(0,n.kt)("p",null,"\u6bd4\u65b9\u8bf4 Monorepo \u5b58\u5728\u4e09\u4e2a\u4f9d\u8d56\u5e94\u7528\u7a0b\u5e8f\u5305\uff0cA\u3001B\u3001C\u3002\u6b64\u65f6 A \u548c C \u5305\u90fd\u4f9d\u8d56\u4e0e B \u5305\u3002\u57fa\u4e8e Lerna \u4f60\u53ef\u4ee5\u53d1\u73b0\u4e00\u6b21\u4ec5\u80fd\u6267\u884c\u4e00\u4e2a\u4efb\u52a1\uff0c\u5f53\u6784\u5efa\u65f6\u9996\u5148\u8fd0\u884c lerna run link --parallel \u65f6\u4ec5\u652f\u6301\u5355\u4e2a\u4efb\u52a1\u7684\u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u800c\u57fa\u4e8e TurboRepo \u652f\u6301\u591a\u4e2a\u4efb\u52a1\u7684\u5e76\u884c\u5904\u7406\uff0c\u5b8c\u7f8e\u4e86\u7684\u89e3\u51b3\u4e86 Lerna \u6784\u5efa\u65f6\u7c7b\u4f3c\u201c\u5355\u7ebf\u7a0b\u201d\u7684\u4e0d\u8db3\u3002"),(0,n.kt)("p",null,"\u7531\u4e8e Turbopack \u53ea\u6253\u5305\u5f00\u53d1\u6240\u9700\u7684\u6700\u5c11\u8d44\u6e90\uff0c\u56e0\u6b64\u542f\u52a8\u65f6\u95f4\u975e\u5e38\u5feb\u3002\u5728\u5177\u6709 3000 \u4e2a\u6a21\u5757\u7684\u5e94\u7528\u4e0a\uff0cTurbopack \u9700\u8981 1.8 \u79d2\u5373\u53ef\u542f\u52a8\uff0c\u800c Vite \u5219\u9700\u8981 11.4 \u79d2\uff1a"),(0,n.kt)("h2",{id:"turbopack-\u4e3a\u4ec0\u4e48\u5feb"},"Turbopack \u4e3a\u4ec0\u4e48\u5feb\uff1f"),(0,n.kt)("p",null,"Turbopack \u6027\u80fd\u7684\u79d8\u8bc0\u6709\u4e24\u4e2a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9ad8\u5ea6\u4f18\u5316\u7684\u673a\u5668\u4ee3\u7801\u548c\u4f4e\u5c42\u7ea7\u589e\u91cf\u8ba1\u7b97\u5f15\u64ce\uff0c\u53ef\u4ee5\u7f13\u5b58\u5230\u5355\u4e2a\u51fd\u6570\u7684\u7ea7\u522b\u3002\u5b83\u7684\u67b6\u6784\u5438\u53d6\u4e86 Turborepo \u548c Google \u7684 Bazel \u7b49\u5de5\u5177\u7684\u7ecf\u9a8c\u6559\u8bad\uff0c\u5b83\u4eec\u90fd\u4e13\u6ce8\u4e8e\u4f7f\u7528\u7f13\u5b58\u6765\u907f\u514d\u91cd\u590d\u6267\u884c\u76f8\u540c\u7684\u5de5\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rust Turbo \u5f15\u64ce,\u652f\u6301\u589e\u91cf\u8ba1\u7b97\u3002\u4ee5\u4e0b\u662f\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u3002"))),(0,n.kt)("p",null,"\u5728 Turbopack \u9a71\u52a8\u7684\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u5c06\u67d0\u4e9b\u51fd\u6570\u6807\u8bb0\u4e3a\u201cto be remembered\u201d\u3002\u5f53\u8fd9\u4e9b\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0cTurbo \u5f15\u64ce\u4f1a\u8bb0\u4f4f\u5b83\u4eec\u88ab\u8c03\u7528\u7684\u5185\u5bb9\uff0c\u4ee5\u53ca\u5b83\u4eec\u8fd4\u56de\u7684\u5185\u5bb9\u3002\u7136\u540e\u5b83\u5c06\u5176\u4fdd\u5b58\u5728\u5185\u5b58\u7f13\u5b58\u4e2d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5316\u7684\u793a\u4f8b\uff1a"),(0,n.kt)("p",null,"\u7531\u4e8e sdk.ts \u7684\u7ed3\u679c\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5c31\u9700\u8981\u518d\u6b21\u6253\u5305\uff0c\u7136\u540e\u9700\u8981\u518d\u6b21\u62fc\u63a5\u3002\u91cd\u8981\u7684\u662f\uff0capi.ts \u5e76\u6ca1\u6709\u6539\u53d8\u3002 \u53ea\u9700\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u5b83\u7684\u7ed3\u679c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9 concat\u3002 \u56e0\u6b64\uff0c\u8fd9\u6837\u5c31\u901a\u8fc7\u4e0d\u8bfb\u53d6\u5e76\u91cd\u65b0\u6253\u5305\u6765\u8282\u7701\u4e86\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"Turbo \u5f15\u64ce\u5f53\u524d\u5c06\u5176\u7f13\u5b58\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002\u8fd9\u610f\u5473\u7740\u7f13\u5b58\u5c06\u4e0e\u8fd0\u884c\u5b83\u7684\u8fdb\u7a0b\u4e00\u6837\u957f\uff0c\u8fd9\u5bf9\u4e8e Dev server \u6765\u8bf4\u6548\u679c\u5f88\u597d\u3002\u5c06\u6765\uff0c\u8ba1\u5212\u5c06\u8fd9\u4e2a\u7f13\u5b58\u6301\u4e45\u5316\u2014\u2014\u8981\u4e48\u4fdd\u5b58\u5230\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u8981\u4e48\u4fdd\u5b58\u5230\u50cf Turborepo \u8fd9\u6837\u7684\u8fdc\u7a0b\u7f13\u5b58\u4e2d\u3002\u8fd9\u610f\u5473\u7740 Turbopack \u53ef\u4ee5\u8bb0\u4f4f\u8de8\u8fd0\u884c\u548c\u673a\u5668\u5b8c\u6210\u7684\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u4f7f Turbopack \u5728\u8ba1\u7b97\u5e94\u7528\u7684\u589e\u91cf\u66f4\u65b0\u65b9\u9762\u975e\u5e38\u5feb\u901f\uff0c\u4f18\u5316\u4e86 Turbopack \u4ee5\u5904\u7406\u5f00\u53d1\u4e2d\u7684\u66f4\u65b0\uff0c\u8fd9\u610f\u5473\u7740 Dev server \u5c06\u59cb\u7ec8\u5feb\u901f\u54cd\u5e94\u66f4\u6539\u3002"),(0,n.kt)("h3",{id:"\u6309\u8981\u6c42\u7f16\u8bd1"},"\u6309\u8981\u6c42\u7f16\u8bd1"),(0,n.kt)("p",null,"Turbo \u5f15\u64ce\u6709\u52a9\u4e8e\u5728 Dev server \u4e0a\u63d0\u4f9b\u6781\u5feb\u7684\u66f4\u65b0\uff0c\u4f46\u8fd8\u6709\u53e6\u4e00\u4e2a\u91cd\u8981\u6307\u6807\u9700\u8981\u8003\u8651\u2014\u2014\u542f\u52a8\u65f6\u95f4\u3002Dev server \u5f00\u59cb\u8fd0\u884c\u7684\u901f\u5ea6\u8d8a\u5feb\uff0c\u5f00\u59cb\u5de5\u4f5c\u7684\u901f\u5ea6\u5c31\u8d8a\u5feb\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u6d41\u7a0b\u66f4\u5feb\uff1a\u5de5\u4f5c\u66f4\u5feb\u6216\u505a\u5de5\u4f5c\u66f4\u5c11\u3002\u4e3a\u4e86\u542f\u52a8 Dev server\uff0c\u51cf\u5c11\u5de5\u4f5c\u91cf\u7684\u65b9\u6cd5\u5c31\u662f\u53ea\u7f16\u8bd1\u542f\u52a8\u6240\u9700\u7684\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\uff081\uff09\u9875\u9762\u7ea7\u7f16\u8bd1\n\uff082\uff09\u8bf7\u6c42\u7ea7\u7f16\u8bd1"),(0,n.kt)("h3",{id:"\u589e\u91cf\u8ba1\u7b97"},"\u589e\u91cf\u8ba1\u7b97"),(0,n.kt)("p",null,"\u901a\u5e38\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u52a0\u5feb\u8fdb\u7a0b\uff1a\u51cf\u5c11\u5de5\u4f5c\u91cf\u6216\u5e76\u884c\u5de5\u4f5c\u3002\u60f3\u8981\u6253\u9020\u6700\u5feb\u7684\u6253\u5305\u5de5\u5177\uff0c\u5c31\u8981\u7528\u529b\u62c9\u52a8\u8fd9\u4e24\u4e2a\u6760\u6746\u3002\u56e0\u6b64\u51b3\u5b9a\u4e3a\u5206\u5e03\u5f0f\u548c\u589e\u91cf\u884c\u4e3a\u521b\u5efa\u4e00\u4e2a\u53ef\u91cd\u7528\u7684 Turbo \u6784\u5efa\u5f15\u64ce\u3002Turbo \u5f15\u64ce\u5c31\u50cf\u51fd\u6570\u8c03\u7528\u7684\u8c03\u5ea6\u7a0b\u5e8f\u4e00\u6837\u5de5\u4f5c\uff0c\u5141\u8bb8\u5728\u6240\u6709\u53ef\u7528\u5185\u6838\u4e0a\u5e76\u884c\u8c03\u7528\u51fd\u6570\u3002Turbo \u5f15\u64ce\u8fd8\u4f1a\u7f13\u5b58\u5b83\u8c03\u5ea6\u7684\u6240\u6709\u51fd\u6570\u7684\u7ed3\u679c\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u6c38\u8fdc\u4e0d\u9700\u8981\u6267\u884c\u4e24\u6b21\u76f8\u540c\u7684\u5de5\u4f5c\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5b83\u4f1a\u4ee5\u6700\u5927\u901f\u5ea6\u505a\u6700\u5c11\u7684\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,"\u5176\u4ed6\u5de5\u5177\u5bf9\u201c\u505a\u66f4\u5c11\u7684\u5de5\u4f5c\u201d\u91c7\u53d6\u4e0d\u540c\u7684\u65b9\u5f0f\u3002\u6bd4\u5982\uff0cVite \u901a\u8fc7\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u4f7f\u7528\u539f\u751f ESM \u5c06\u5de5\u4f5c\u91cf\u964d\u81f3\u6700\u4f4e\u3002\u5728\u5e95\u5c42\uff0cVite \u5c06 esbuild \u7528\u4e8e\u8bb8\u591a\u4efb\u52a1\u3002esbuild \u662f\u4e00\u4e2a\u975e\u5e38\u5feb\u7684\u6253\u5305\u5668\uff0c\u5b83\u4e0d\u4f1a\u5f3a\u8feb\u6211\u4eec\u4f7f\u7528\u539f\u751f ESM\u3002\u4f46\u51fa\u4e8e\u51e0\u4e2a\u539f\u56e0\uff0c\u51b3\u5b9a\u4e0d\u91c7\u7528 esbuild\uff1a"),(0,n.kt)("p",null,"esbuild \u7684\u4ee3\u7801\u9488\u5bf9\u4e00\u9879\u4efb\u52a1\u8fdb\u884c\u4e86\u8d85\u4f18\u5316 - \u5feb\u901f\u6253\u5305\uff0c\u56e0\u6b64\u6ca1\u6709 HMR\uff08\u70ed\u66f4\u65b0\uff09\uff1b\nesbuild \u662f\u4e00\u4e2a\u975e\u5e38\u5feb\u7684\u6253\u5305\u5de5\u5177\uff0c\u4f46\u5b83\u5e76\u6ca1\u6709\u505a\u592a\u591a\u7684\u7f13\u5b58\u3002\u8fd9\u610f\u5473\u7740\u4f1a\u505a\u5f88\u591a\u91cd\u590d\u7684\u5de5\u4f5c\uff1b\n\u800c\u5177\u6709\u589e\u91cf\u8ba1\u7b97\u7684 Rust \u9a71\u52a8\u7684\u6253\u5305\u5668\u5728\u66f4\u5927\u7684\u89c4\u6a21\u4e0a\u53ef\u4ee5\u6bd4 esbuild \u66f4\u597d\u5730\u6267\u884c\u3002"),(0,n.kt)("h3",{id:"\u60f0\u6027\u6253\u5305"},"\u60f0\u6027\u6253\u5305"),(0,n.kt)("p",null,"Next.js \u7684\u65e9\u671f\u7248\u672c\u8bd5\u56fe\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u6253\u5305\u6574\u4e2a Web \u5e94\u7528\uff0c\u8fd9\u5e76\u4e0d\u662f\u6700\u4f18\u7684\u3002Next.js \u7684\u73b0\u4ee3\u7248\u672c\u4ec5\u6253\u5305 Dev server \u8bf7\u6c42\u7684\u9875\u9762\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8f6c\u5230localhost:3000\uff0c\u5b83\u5c06\u4ec5\u6253\u5305 pages/index.jsx\uff0c\u4ee5\u53ca\u5b83\u5bfc\u5165\u7684\u6a21\u5757\u3002"),(0,n.kt)("p",null,"\u8fd9\u79cd\u66f4\u201c\u60f0\u6027\u201d\u7684\u65b9\u6cd5\u662f\u5feb\u901f Dev server \u7684\u5173\u952e\u3002\u800c esbuild \u6ca1\u6709\u201c\u60f0\u6027\u201d\u6253\u5305\u7684\u6982\u5ff5\u2014\u2014\u5b83\u662f\u5168\u6709\u6216\u5168\u65e0\u7684\u3002Turbopack \u7684\u5f00\u53d1\u6a21\u5f0f\u4f1a\u6839\u636e\u6536\u5230\u7684\u8bf7\u6c42\u6784\u5efa\u5e94\u7528\u5bfc\u5165\u548c\u5bfc\u51fa\u7684\u6700\u5c0f\u56fe\uff0c\u5e76\u4e14\u53ea\u6253\u5305\u5fc5\u8981\u7684\u6700\u5c11\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u6b64\u7b56\u7565\u4f7f Turbopack \u5728\u9996\u6b21\u542f\u52a8 Dev server \u65f6\u901f\u5ea6\u6781\u5feb\u3002\u53ea\u9700\u8ba1\u7b97\u6e32\u67d3\u9875\u9762\u6240\u9700\u7684\u4ee3\u7801\uff0c\u7136\u540e\u5728\u5355\u4e2a\u5757\u4e2d\u5c06\u5176\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u3002\u5728\u5927\u89c4\u6a21\u5e94\u7528\u4e2d\uff0c\u8fd9\u6700\u7ec8\u6bd4\u539f\u751f ESM \u5feb\u5f97\u591a\u3002"),(0,n.kt)("p",null,"\u8fd9\u5c31\u662f\u6784\u5efa Turbopack \u7684\u539f\u56e0\u3002"),(0,n.kt)("h3",{id:"turbopack-\u7684\u529f\u80fd"},"Turbopack \u7684\u529f\u80fd"),(0,n.kt)("p",null,"\u6784\u5efa Web \u5e94\u7528\u7684\u5b9e\u8df5\u975e\u5e38\u591a\u6837\u5316\u3002\u4ec5\u5728 CSS \u4e2d\uff0c\u5c31\u6709 SCSS\u3001Less\u3001CSS Module\u3001PostCSS\u7b49\u3002React\u3001Vue \u548c Svelte \u7b49\u6846\u67b6\u9700\u8981\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002"),(0,n.kt)("p",null,"\u5728\u6784\u5efa\u6253\u5305\u5de5\u5177\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u5b83\u80fd\u5f00\u7bb1\u5373\u7528\uff0c\u65e0\u9700\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u83b7\u5f97\u4e00\u4e9b\u529f\u80fd\u3002\u76ee\u524d\uff0cTurbopack \u4ecd\u5904\u4e8e alpha \u9636\u6bb5\uff0c\u5728\u5f53\u524d\u72b6\u6001\u4e0b\uff0cTurbopack \u8fd8\u4e0d\u80fd\u914d\u7f6e\uff0c\u6240\u4ee5\u63d2\u4ef6\u4e5f\u8fd8\u4e0d\u53ef\u7528\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b Turbopack \u9ed8\u8ba4\u914d\u7f6e\u4e2d\u54ea\u4e9b\u529f\u80fd\u662f\u5f00\u7bb1\u5373\u7528\u7684\u4ee5\u53ca\u672a\u6765\u5c06\u901a\u8fc7\u63d2\u4ef6\u914d\u7f6e\u7684\u529f\u80fd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JavaScript\uff1a\u652f\u6301\u6240\u6709 ESNext \u529f\u80fd\u3001Browserslist \u548c\u9876\u5c42 await\uff1b"),(0,n.kt)("li",{parentName:"ul"},"TypeScript\uff1a\u5f00\u7bb1\u5373\u7528\u5730\u652f\u6301 TypeScript\uff0c\u5305\u62ec\u89e3\u6790\u8def\u5f84\u548cbaseUrl\uff1b"),(0,n.kt)("li",{parentName:"ul"},"Imports\uff1a\u652f\u6301 require\u3001import\u3001\u52a8\u6001\u5bfc\u5165\u7b49\uff1b"),(0,n.kt)("li",{parentName:"ul"},"Dev Server\uff1a\u4f18\u5316\u7684 Dev Server \u652f\u6301\u70ed\u66f4\u65b0 (HMR) \u548c\u5feb\u901f\u5237\u65b0\uff1b"),(0,n.kt)("li",{parentName:"ul"},"CSS\uff1a\u652f\u6301\u5168\u5c40 CSS\u3001CSS Module\u3001postcss-nested \u548c @import\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\uff1a\u652f\u6301 /public \u76ee\u5f55\u3001JSON \u5bfc\u5165\u548c\u901a\u8fc7 ESM \u5bfc\u5165\u8d44\u6e90\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\uff1a\u901a\u8fc7 .env\u3001.env.local \u7b49\u652f\u6301\u73af\u5883\u53d8\u91cf\u3002")),(0,n.kt)("h2",{id:"turbopack-vs-vite"},"Turbopack vs Vite"),(0,n.kt)("p",null,"Turbopack \u5728\u4ee5\u4e0b\u4e24\u4e2a\u5173\u952e\u6307\u6807\u4e0a\u7684\u8868\u73b0\u4f18\u4e8e Vite\u3002"),(0,n.kt)("p",null,"\uff081\uff09Dev server \u542f\u52a8\u65f6\u95f4"),(0,n.kt)("p",null,"\uff082\uff09\u4ee3\u7801\u66f4\u65b0\n\u5f53\u6587\u4ef6\u66f4\u6539\u65f6\uff0c\u5b83\u9700\u8981\u5c06\u66f4\u6539\u5448\u73b0\u7ed9\u6d4f\u89c8\u5668\u3002 \u5b83\u505a\u5230\u7684\u8d8a\u5feb\uff0c\u53cd\u9988\u5faa\u73af\u5c31\u8d8a\u7d27\u5bc6\uff0c\u53d1\u5e03\u7684\u901f\u5ea6\u5c31\u8d8a\u5feb\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("p",null,"\u5feb\u901f\u521b\u5efa:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npx create-turbo@latest\nyarn workspace web add monaco-editor\nyarn workspace web remove monaco-editor\n")),(0,n.kt)("p",null,"turbo.json \uff0c\u8fd9\u4e2a\u6587\u4ef6\u4e3b\u8981\u53ef\u4ee5\u7528\u6765\u8bbe\u5b9a\u4e00\u4e9b\u6267\u884c\u6307\u4ee4\u7684 pipeline\uff0c\u800c pipeline \u4e3b\u8981\u7684\u529f\u80fd\u5c31\u662f\u5f53\u4f60\u5728\u6267\u884c yarn run xxx \u65f6"),(0,n.kt)("p",null,"dev \u6709\u4e00\u4e2a cache \u4e3a false \u7684\u8bbe\u5b9a\uff0c\u5c31\u4ee3\u8868\u8457\u6bcf\u6b21\u6267\u884c dev \u8fd9\u4e2a\u6307\u4ee4\u65f6\u90fd\u4e0d\u8981\u4f7f\u7528\u5148\u524d\u7684 cache \u4ee5\u786e\u4fdd\u6bcf\u6b21\u7684\u5f00\u53d1\u73af\u5883\u90fd\u4f1a\u662f\u6700\u65b0\u7684\u73af\u5883\u3002"),(0,n.kt)("h2",{id:"\u5728\u5176\u4ed6\u5305\u5f15\u5165packages"},"\u5728\u5176\u4ed6\u5305\u5f15\u5165packages"),(0,n.kt)("p",null,"\u5047\u5982\u8981\u8ba9 packages \u5185\u7684\u67d0\u4e2a\u6587\u4ef6\u5bb9\u7ed9 apps \u5185\u7684\u67d0\u4e2a\u9879\u76ee\u7528\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u5728\u8be5\u9879\u76ee package.json \u4e2d\u586b\u4e0a\u5bf9\u5e94\u5305\u540d\uff0c\u5e76\u4e14\u628a\u7248\u672c\u53f7\u8bbe\u5b9a\u4e3a * \uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u8be5\u9879\u76ee\u5185\u5f15\u7528 packages \u4e2d\u7684\u5185\u5bb9"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003\uff1a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1974147"},"https://cloud.tencent.com/developer/article/1974147")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7129267782515949575"},"https://juejin.cn/post/7129267782515949575")))}s.isMDXComponent=!0}}]);