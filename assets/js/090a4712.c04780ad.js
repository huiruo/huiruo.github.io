"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"vue3-Dff",sidebar_position:13},i=void 0,l={unversionedId:"Vue/vue3-Dff",id:"Vue/vue3-Dff",title:"vue3-Dff",description:"\u4e3a\u4ec0\u4e48 Vue \u4e0d\u9700\u8981\u65f6\u95f4\u5206\u7247\uff1f",source:"@site/programming-tech/Vue/08-vue3-Dff.md",sourceDirName:"Vue",slug:"/Vue/vue3-Dff",permalink:"/Vue/vue3-Dff",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/08-vue3-Dff.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"vue3-Dff",sidebar_position:13},sidebar:"docs",previous:{title:"Patch\u7b97\u6cd5\u4e4bPatchkeyChildren",permalink:"/Vue/Patch\u7b97\u6cd5\u4e4bPatchkeyChildren"},next:{title:"proxy",permalink:"/Vue/proxy"}},u={},p=[{value:"\u4e3a\u4ec0\u4e48 Vue \u4e0d\u9700\u8981\u65f6\u95f4\u5206\u7247\uff1f",id:"\u4e3a\u4ec0\u4e48-vue-\u4e0d\u9700\u8981\u65f6\u95f4\u5206\u7247",level:2},{value:"vue3 Diff",id:"vue3-diff",level:3}],c={toc:p},f="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-vue-\u4e0d\u9700\u8981\u65f6\u95f4\u5206\u7247"},"\u4e3a\u4ec0\u4e48 Vue \u4e0d\u9700\u8981\u65f6\u95f4\u5206\u7247\uff1f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Vue \u901a\u8fc7\u54cd\u5e94\u5f0f\u4f9d\u8d56\u8ddf\u8e2a\uff0c\u5728\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u505a\u5230\u53ea\u8fdb\u884c\u7ec4\u4ef6\u6811\u7ea7\u522b\u7684\u66f4\u65b0\u8ba1\u7b97\uff0c\u800c\u9ed8\u8ba4\u4e0b React \u662f\u505a\u4e0d\u5230")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65f6\u95f4\u5206\u7247\u662f\u4e3a\u4e86\u89e3\u51b3 CPU \u8fdb\u884c\u5927\u91cf\u8ba1\u7b97\u7684\u95ee\u9898,vue\u6ca1\u6709\uff1f"))),(0,o.kt)("h3",{id:"vue3-diff"},"vue3 Diff"),(0,o.kt)("p",null,"\u53ea\u8bf4\u6570\u7ec4\u548c\u6570\u7ec4\u6bd4\u5bf9\u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e00\u8f6e\uff0c\u5e38\u89c1\u60c5\u51b5\u7684\u6bd4\u5bf9:"),(0,o.kt)("p",null,"\u9996\u5148\u4ece\u5de6\u5f80\u53f3\u8fdb\u884c\u6bd4\u5bf9\uff0c\u5982\u679c\u662f\u76f8\u540c\u7684\u5c31\u8fdb\u884c\u66f4\u65b0\u6bd4\u5bf9\uff0c\u5982\u679c\u4e0d\u76f8\u540c\u5219\u505c\u6b62\u6bd4\u5bf9\uff0c\u5e76\u4e14\u8bb0\u5f55\u505c\u6b62\u7684\u4e0b\u6807\u3002\n\u518d\u4ece\u53f3\u5f80\u5de6\u8fdb\u884c\u6bd4\u5bf9\uff0c\u5982\u679c\u662f\u76f8\u540c\u7684\u5c31\u8fdb\u884c\u66f4\u65b0\u6bd4\u5bf9\uff0c\u5982\u679c\u4e0d\u76f8\u540c\u4e5f\u505c\u6b62\u6bd4\u5bf9\uff0c\u4e5f\u8fdb\u884c\u8bb0\u5f55\u505c\u6b62\u7684\u4e0b\u6807\u3002\n\u901a\u8fc7\u8fd9\u6837\u5de6\u53f3\u8fdb\u884c\u6bd4\u5bf9\uff0c\u6700\u540e\u5c31\u53ef\u4ee5\u628a\u771f\u6b63\u590d\u6742\u90e8\u5206\u8fdb\u884c\u8303\u56f4\u9501\u5b9a\u4e86\u3002\n\u5de6\u53f3\u6bd4\u5bf9\u5b8c\u4e4b\u540e\uff0c\u5982\u679c\u65b0\u8282\u70b9\u5df2\u7ecf\u6bd4\u5bf9\u5b8c\u4e86\uff0c\u8001\u8282\u70b9\u5217\u8868\u8fd8\u5b58\u5728\u8282\u70b9\u672a\u6bd4\u5bf9\uff0c\u5219\u5220\u9664\u8001\u8282\u70b9\u5217\u8868\u4e0a\u7684\u672a\u6bd4\u5bf9\u7684\u8282\u70b9\uff0c\u5982\u679c\u8001\u8282\u70b9\u5df2\u7ecf\u6bd4\u5bf9\u5b8c\u4e86\uff0c\u65b0\u8282\u70b9\u5217\u8868\u8fd8\u5b58\u5728\u672a\u6bd4\u5bf9\u7684\u8282\u70b9\u5219\u8fdb\u884c\u521b\u5efa\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u8f6e\uff0c\u590d\u6742\u60c5\u51b5\u7684\u6bd4\u5bf9\n\u5982\u679c\u65b0\u8282\u70b9\u672a\u6bd4\u5bf9\u5b8c\uff0c\u8001\u8282\u70b9\u4e5f\u672a\u6bd4\u5bf9\u5b8c\uff0c\u5219\u8fdb\u884c\u6700\u540e\u6700\u590d\u6742\u7684\u5904\u7406\u3002"),(0,o.kt)("p",null,"\u5148\u628a\u5269\u4e0b\u7684\u65b0\u8282\u70b9\u5904\u7406\u6210\u8282\u70b9\u7684 key \u4e3a key, \u8282\u70b9\u4e0b\u6807\u4e3a value \u7684 Map\uff1b\n\u63a5\u7740\u521d\u59cb\u5316\u4e00\u4e2a\u957f\u5ea6\u4e3a\u5269\u4e0b\u672a\u6bd4\u5bf9\u7684\u65b0\u8282\u70b9\u7684\u957f\u5ea6\u7684\u6570\u7ec4 newIndexToOldIndexMap\uff0c\u521d\u59cb\u5316\u6bcf\u4e2a\u6570\u7ec4\u7684\u4e0b\u6807\u7684\u9ed8\u8ba4\u503c\u4e3a 0\u3002"),(0,o.kt)("p",null,"\u518d\u5faa\u73af\u5269\u4e0b\u7684\u65e7\u8282\u70b9\uff0c\u901a\u8fc7\u65e7\u8282\u70b9\u7684 key \u53bb\u521a\u521a\u521b\u5efa\u7684 Map \u4e2d\u67e5\u627e\uff0c\u770b\u770b\u65e7\u8282\u70b9\u6709\u6ca1\u6709\u5728\u65b0\u8282\u70b9\u4e2d\uff0c\u5982\u679c\u65e7\u8282\u70b9\u6ca1\u6709 key \u5219\u9700\u8981\u901a\u8fc7\u5faa\u73af\u5269\u4e0b\u7684\u65b0\u8282\u70b9\u8fdb\u884c\u67e5\u627e\u3002\n\u5982\u679c\u65e7\u8282\u70b9\u5728\u65b0\u8282\u70b9\u4e2d\u6ca1\u627e\u5230\uff0c\u5219\u8bf4\u660e\u8be5\u65e7\u8282\u70b9\u9700\u8981\u8fdb\u884c\u5220\u9664\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u627e\u5230\u4e86\uff0c\u5219\u628a\u627e\u5230\u7684\u65b0\u8282\u70b9\u7684\u4e0b\u6807\u5bf9\u5e94\u5b58\u50a8\u5230\u4e0a\u8ff0\u7684\u6570\u7ec4 newIndexToOldIndexMap \u4e2d\uff0c\u7136\u540e\u66f4\u65b0\u6bd4\u5bf9\u5339\u914d\u5230\u7684\u65b0\u8001\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u628a\u6240\u6709\u7684\u65e7\u8282\u70b9\u6bd4\u5bf9\u5b8c\u6210\u540e\uff0c\u5c31\u4f1a\u5f97\u5230\u4e00\u4e2a\u521a\u521a\u6536\u96c6\u7684\u65b0\u8282\u70b9\u7684\u4e0b\u6807\u6570\u7ec4\uff0c\u7136\u540e\u5bf9\u8fd9\u4e2a\u65b0\u8282\u70b9\u7684\u4e0b\u6807\u6570\u7ec4\u8fdb\u884c\u8fdb\u884c\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u67e5\u627e\u5f97\u5230\u4e00\u4e2a\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e0b\u6807\u6570\u636e\u3002\n\u7136\u540e\u518d\u8fdb\u884c\u5faa\u73af\u5de6\u53f3\u5bf9\u6bd4\u5b8c\u4e4b\u540e\u5269\u4f59\u65b0\u8282\u70b9\u7684\u4e0b\u6807\uff0c\u7136\u540e\u5224\u65ad\u5faa\u73af\u7684\u4e0b\u6807\u662f\u5426\u88ab\u4e0a\u8ff0\u7684\u6570\u7ec4 newIndexToOldIndexMap \u8fdb\u884c\u6536\u96c6\u4e86\uff0c\u5982\u679c\u6ca1\u88ab\u6536\u96c6\u5230\u5219\u8bf4\u660e\u8fd9\u4e2a\u65b0\u8282\u70b9\u9700\u8981\u8fdb\u884c\u521b\u5efa\uff0c\u5982\u679c\u5df2\u7ecf\u88ab\u6536\u96c6\u4e86\u5219\u5224\u65ad\u8be5\u5faa\u73af\u7684\u4e0b\u6807\u662f\u5426\u5728\u4e0a\u9762\u8ba1\u7b97\u5f97\u5230\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u4e2d\uff0c\u5982\u679c\u4e0d\u5728\u5219\u9700\u8981\u5bf9\u8be5\u5faa\u73af\u8282\u70b9\u8fdb\u884c\u79fb\u52a8\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f Vue3 Diff \u7b97\u6cd5\u5927\u6982\u8fc7\u7a0b\u4e86\u3002"))}s.isMDXComponent=!0}}]);