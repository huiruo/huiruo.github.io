"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=o(n),f=a,y=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(y,p(p({ref:t},u),{},{components:n})):r.createElement(y,p({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},p=void 0,c={unversionedId:"JavaScript/ts/interface-type\u533a\u522b",id:"JavaScript/ts/interface-type\u533a\u522b",title:"interface-type\u533a\u522b",description:"\u4e0d\u540c\u70b9\uff1a",source:"@site/programming-tech/JavaScript/06-ts/03-interface-type\u533a\u522b.md",sourceDirName:"JavaScript/06-ts",slug:"/JavaScript/ts/interface-type\u533a\u522b",permalink:"/JavaScript/ts/interface-type\u533a\u522b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/06-ts/03-interface-type\u533a\u522b.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"TypeScript\u88c5\u9970\u5668",permalink:"/JavaScript/ts/TypeScript\u88c5\u9970\u5668"},next:{title:"interface-\u9650\u5236\u51fd\u6570",permalink:"/JavaScript/ts/interface-\u9650\u5236\u51fd\u6570"}},l={},o=[{value:"\u540c\u540d interface \u4f1a\u5408\u5e76\uff0c\u800c\u540c\u540d type \u4f1a\u62a5\u9519",id:"\u540c\u540d-interface-\u4f1a\u5408\u5e76\u800c\u540c\u540d-type-\u4f1a\u62a5\u9519",level:2},{value:"\u4e00\u4e2a\u4e0d\u592a\u91cd\u8981\u4f46\u662f\u503c\u5f97\u8bf4\u7ed9\u9762\u8bd5\u5b98\u7684\u533a\u522b\uff1atype \u58f0\u660e\u7684\u662f\u7c7b\u578b\u522b\u540d\uff0c\u800c interface \u58f0\u660e\u7684\u662f\u65b0\u7c7b\u578b\u3002",id:"\u4e00\u4e2a\u4e0d\u592a\u91cd\u8981\u4f46\u662f\u503c\u5f97\u8bf4\u7ed9\u9762\u8bd5\u5b98\u7684\u533a\u522btype-\u58f0\u660e\u7684\u662f\u7c7b\u578b\u522b\u540d\u800c-interface-\u58f0\u660e\u7684\u662f\u65b0\u7c7b\u578b",level:2},{value:"\u58f0\u660e\u51fd\u6570\u50cf\u5e26\u6709\u5c5e\u6027\u7684\u51fd\u6570\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a",id:"\u58f0\u660e\u51fd\u6570\u50cf\u5e26\u6709\u5c5e\u6027\u7684\u51fd\u6570\u53ef\u4ee5\u8fd9\u6837\u5199",level:3},{value:"type \u53ef\u4ee5 interface \u4e0d\u884c,type \u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u522b\u540d\uff0c\u8054\u5408\u7c7b\u578b\uff0c\u5143\u7ec4\u7c7b\u578b",id:"type-\u53ef\u4ee5-interface-\u4e0d\u884ctype-\u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u522b\u540d\u8054\u5408\u7c7b\u578b\u5143\u7ec4\u7c7b\u578b",level:2},{value:"\u76f8\u540c\u70b9\uff1a",id:"\u76f8\u540c\u70b9",level:2},{value:"\u63a8\u8350\uff1a\u80fd\u7528interface\u5c31\u7528interface",id:"\u63a8\u8350\u80fd\u7528interface\u5c31\u7528interface",level:2}],u={toc:o},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0d\u540c\u70b9\uff1a\ntype \u662f \u7c7b\u578b\u522b\u540d\uff0c\u7ed9\u4e00\u4e9b\u7c7b\u578b\u7684\u7ec4\u5408\u8d77\u522b\u540d\uff0c\u8fd9\u6837\u80fd\u591f\u66f4\u65b9\u4fbf\u5730\u5728\u5404\u4e2a\u5730\u65b9\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Point {\n  x: number;\n  y: number;\n}\n\ntype Point = {\n  x: number;\n  y: number;\n};\n")),(0,a.kt)("p",null,"interface \u662f \u63a5\u53e3\u3002\u6709\u70b9\u50cf type\uff0c\u53ef\u4ee5\u7528\u6765\u4ee3\u8868\u4e00\u79cd\u7c7b\u578b\u7ec4\u5408\uff0c\u4f46\u5b83\u8303\u56f4\u66f4\u5c0f\u4e00\u4e9b\uff0c\u53ea\u80fd\u63cf\u8ff0\u5bf9\u8c61\u7ed3\u6784\u3002interface \u53ea\u80fd\u8868\u793a\u5bf9\u8c61\u7ed3\u6784\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// 1\u3001\u90fd\u53ef\u4ee5\u63cf\u8ff0\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u51fd\u6570\ninterface User {\n    name: string,\n    age: number\n}\n\ninterface SetUser {\n    (name: string, age: number) : void\n}\n\ntype User = {\n    name: string,\n    age: number\n}\n\ntype SetUser = (name: string, age: number) => void\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"type \u53ef\u7528\u4e8e string\u3001number\u3001bool\u3001undefined\u3001null\uff0c\u800c interface \u53ea\u80fd\u63cf\u8ff0\u5bf9\u8c61\uff08\u542b\u6570\u7ec4\u3001\u51fd\u6570\u3001\u5305\u88c5\u5bf9\u8c61\u3001\u5143\u7ec4; type \u540e\u9762\u6709 =\uff0cinterface \u6ca1\u6709\uff1b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// id \u53ef\u4ee5\u4e3a\u5b57\u7b26\u4e32\u6216\u6570\u5b57\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u8fd9\u4e48\u4e00\u4e2a\u540d\u4e3a ID \u7684 type\ntype ID = string | number;\n\n\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a Circle \u7684\u5bf9\u8c61\u7ed3\u6784 type\uff1a\n\ntype Circle = {\n  x: number;\n  y: number;\n  radius: number;\n}\n")),(0,a.kt)("h2",{id:"\u540c\u540d-interface-\u4f1a\u5408\u5e76\u800c\u540c\u540d-type-\u4f1a\u62a5\u9519"},"\u540c\u540d interface \u4f1a\u5408\u5e76\uff0c\u800c\u540c\u540d type \u4f1a\u62a5\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"interface Point {\n  x: number;\n}\n\ninterface Point {\n  y: number;\n}\n\nconst point: Point = { x: 10, y: 30 };\n")),(0,a.kt)("h2",{id:"\u4e00\u4e2a\u4e0d\u592a\u91cd\u8981\u4f46\u662f\u503c\u5f97\u8bf4\u7ed9\u9762\u8bd5\u5b98\u7684\u533a\u522btype-\u58f0\u660e\u7684\u662f\u7c7b\u578b\u522b\u540d\u800c-interface-\u58f0\u660e\u7684\u662f\u65b0\u7c7b\u578b"},"\u4e00\u4e2a\u4e0d\u592a\u91cd\u8981\u4f46\u662f\u503c\u5f97\u8bf4\u7ed9\u9762\u8bd5\u5b98\u7684\u533a\u522b\uff1atype \u58f0\u660e\u7684\u662f\u7c7b\u578b\u522b\u540d\uff0c\u800c interface \u58f0\u660e\u7684\u662f\u65b0\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"\u58f0\u660e\u51fd\u6570\u50cf\u5e26\u6709\u5c5e\u6027\u7684\u51fd\u6570\u53ef\u4ee5\u8fd9\u6837\u5199"},"\u58f0\u660e\u51fd\u6570\u50cf\u5e26\u6709\u5c5e\u6027\u7684\u51fd\u6570\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"interface Fn {\n  (): void; // \u51fd\u6570\u7684\u63cf\u8ff0\n  a: string; // \u5c5e\u6027\n}\n")),(0,a.kt)("h2",{id:"type-\u53ef\u4ee5-interface-\u4e0d\u884ctype-\u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u522b\u540d\u8054\u5408\u7c7b\u578b\u5143\u7ec4\u7c7b\u578b"},"type \u53ef\u4ee5 interface \u4e0d\u884c,type \u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u522b\u540d\uff0c\u8054\u5408\u7c7b\u578b\uff0c\u5143\u7ec4\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type Name = string\n\ninterface Dog {\n  wong();\n}\ninterface Cat {\n  miao();\n}\n\ntype Pet = Dog | Cat;\n\nlet a: Pet = {\n  wong() {},\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u901a\u8fc7typeof\u83b7\u53d6\u5b9e\u4f8b\u7684\u7c7b\u578b\u8fdb\u884c\u8d4b\u503c\nlet div = document.createElement('div')\ntype B = typeof div\n")),(0,a.kt)("h2",{id:"\u76f8\u540c\u70b9"},"\u76f8\u540c\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u90fd\u80fd\u63cf\u8ff0\u5bf9\u8c61\uff08\u542b\u6570\u7ec4\u3001\u51fd\u6570\u3001\u5305\u88c5\u5bf9\u8c61\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u90fd\u80fd\u7528\u4e8e\u6269\u5c55\u4e00\u4e2a\u7c7b\u578b\u3002type \u7528\u4ea4\u53c9\u7c7b\u578b\u505a\u5230\u8fd9\u4e00\u70b9\uff0cinterface \u7528 extends \u505a\u5230\u8fd9\u4e00\u70b9\u3002\n\u63a5\u53e3\u662f\u901a\u8fc7\u7ee7\u627f\u7684\u65b9\u5f0f\u6765\u6269\u5c55\uff0c\u7c7b\u578b\u522b\u540d\u662f\u901a\u8fc7 & \u6765\u6269\u5c55\u3002"))),(0,a.kt)("p",null,"type \u53ef\u4ee5\u901a\u8fc7 & \u7684\u5199\u6cd5\u6765\u7ee7\u627f type \u6216 interface\uff0c\u5f97\u5230\u4e00\u4e2a\u4ea4\u53c9\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type Shape = {\n    x: number;\n    y: number;\n}\n\ntype Circle = Shape & { r: number }\n\nconst circle: Circle = { x: 0, y: 0, r: 8 }\n")),(0,a.kt)("h2",{id:"\u63a8\u8350\u80fd\u7528interface\u5c31\u7528interface"},"\u63a8\u8350\uff1a\u80fd\u7528interface\u5c31\u7528interface"),(0,a.kt)("p",null,"\u5176\u5b9e\u8fd9\u4e2a\u89e3\u91ca\u5b98\u65b9\u8bf4\u7684\u4e5f\u6bd4\u8f83\u660e\u786e\uff0c\u8fd9\u6837\u4f7f\u7528\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u66f4\u8d34\u5408 JavaScript \u5bf9\u8c61\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u518d\u6e05\u6670\u4e00\u4e9b\uff0c\u5982\u679c\u6211\u4eec\u662f\u5b9a\u4e49\u4e00\u4e2a object\uff0c\u90a3\u4e48\u6700\u597d\u662f\u4f7f\u7528 interface \u53bb\u505a\u7c7b\u578b\u58f0\u660e\uff0c\u4ec0\u4e48\u65f6\u5019\u7528 type \u5462\uff0c\u5f53\u5b9a\u4e49\u4e00\u4e2a function \u7684\u65f6\u5019\uff0c\u7528 type \u4f1a\u66f4\u597d\u4e00\u4e9b\uff1a"))}m.isMDXComponent=!0}}]);