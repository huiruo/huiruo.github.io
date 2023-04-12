"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[6597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),y=a,d=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},87624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"mysql-insert",sidebar_position:1},s=void 0,o={unversionedId:"backend/mysql/mysql-insert",id:"backend/mysql/mysql-insert",title:"mysql-insert",description:"insert\u4e24\u79cd\u65b9\u6cd5",source:"@site/programming-tech/backend/mysql/01-mysql-insert.md",sourceDirName:"backend/mysql",slug:"/backend/mysql/mysql-insert",permalink:"/backend/mysql/mysql-insert",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/backend/mysql/01-mysql-insert.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"mysql-insert",sidebar_position:1},sidebar:"docs",previous:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/backend/golang/\u7c7b\u578b\u8f6c\u6362"},next:{title:"mysql-\u95ee\u9898",permalink:"/backend/mysql/mysql-\u95ee\u9898"}},i={},c=[{value:"insert\u4e24\u79cd\u65b9\u6cd5",id:"insert\u4e24\u79cd\u65b9\u6cd5",level:2},{value:"\u4e0d\u540c\u70b9",id:"\u4e0d\u540c\u70b9",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"insert\u4e24\u79cd\u65b9\u6cd5"},"insert\u4e24\u79cd\u65b9\u6cd5"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u6cd5\u5c06\u5217\u540d\u548c\u5217\u503c\u5206\u5f00\u4e86\uff0c\u5728\u4f7f\u7528\u65f6\uff0c\u5217\u540d\u5fc5\u987b\u548c\u5217\u503c\u7684\u6570\u4e00\u81f4\u3002\u5982\u4e0b\u9762\u7684\u8bed\u53e5\u5411users\u8868\u4e2d\u63d2\u5165\u4e86\u4e00\u6761\u8bb0\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users(id, name, age) VALUES(123, '\u59da\u660e', 25);\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u5141\u8bb8\u5217\u540d\u548c\u5217\u503c\u6210\u5bf9\u51fa\u73b0\u548c\u4f7f\u7528\uff0c\u5982\u4e0b\u9762\u7684\u8bed\u53e5\u5c06\u4ea7\u751f\u540c\u6837\u7684\u6548\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users SET id = 123, name = '\u59da\u660e', age = 25;\n")),(0,a.kt)("h2",{id:"\u4e0d\u540c\u70b9"},"\u4e0d\u540c\u70b9"),(0,a.kt)("p",null,"(1): \u5982\u679c\u4f7f\u7528\u4e86SET\u65b9\u5f0f\uff0c\u5fc5\u987b\u81f3\u5c11\u4e3a\u4e00\u5217\u8d4b\u503c\u3002\u5982\u679c\u67d0\u4e00\u4e2a\u5b57\u6bb5\u4f7f\u7528\u4e86\u7701\u7f3a\u503c\uff08\u5982\u9ed8\u8ba4\u6216\u81ea\u589e\u503c\uff09\uff0c\u8fd9\u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u7701\u7565\u8fd9\u4e9b\u5b57\u6bb5\u3002\u5982id\u5b57\u6bb5\u4e0a\u4f7f\u7528\u4e86\u81ea\u589e\u503c\uff0c\u4e0a\u9762\u4e24\u6761\u8bed\u53e5\u53ef\u4ee5\u5199\u6210\u5982\u4e0b\u5f62\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users (name, age) VALUES('\u59da\u660e',25);\nINSERT INTO uses SET name = '\u59da\u660e', age = 25;\n")),(0,a.kt)("p",null,"(2)MySQL\u5728VALUES\u4e0a\u4e5f\u505a\u4e86\u4e9b\u53d8\u5316\u3002\n\u5982\u679cVALUES\u4e2d\u4ec0\u4e48\u90fd\u4e0d\u5199\uff0c\u90a3MySQL\u5c06\u4f7f\u7528\u8868\u4e2d\u6bcf\u4e00\u5217\u7684\u9ed8\u8ba4\u503c\u6765\u63d2\u5165\u65b0\u8bb0\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users () VALUES();\n")),(0,a.kt)("p",null,"(3)\u6807\u51c6\u7684INSERT\u8bed\u53e5\u5141\u8bb8\u4e00\u6b21\u63d2\u5165\u591a\u6761\u6570\u636e\uff0cset\u4e0d\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users (name, age) VALUES('\u59da\u660e',25),('\u9ea6\u8482',25)\n")))}u.isMDXComponent=!0}}]);