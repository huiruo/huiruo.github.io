"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(n),y=o,d=p["".concat(i,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},95927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={title:"mysql\u884c\u683c\u5f0f",sidebar_position:1},l=void 0,c={unversionedId:"backend/mysql/mysql\u884c\u683c\u5f0f",id:"backend/mysql/mysql\u884c\u683c\u5f0f",title:"mysql\u884c\u683c\u5f0f",description:"\u4ee5\u8bb0\u5f55\u4e3a\u5355\u4f4d\u6765\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u7684\uff0c\u8fd9\u4e9b\u8bb0\u5f55\u5728\u78c1\u76d8\u4e0a\u7684\u5b58\u653e\u65b9\u5f0f\u4e5f\u88ab\u79f0\u4e3a \u884c\u683c\u5f0f \u6216\u8005 \u8bb0\u5f55\u683c\u5f0f \u3002 InnoDB \u5230\u73b0\u5728\u4e3a\u6b62\u8bbe\u8ba1\u4e864\u79cd\u4e0d\u540c\u7c7b\u578b\u7684 \u884c\u683c\u5f0f \uff0c\u5206\u522b\u662f Compact \u3001 Redundant \u3001Dynamic \u548c Compressed \u884c\u683c\u5f0f\u3002",source:"@site/programming-tech/backend/mysql/03-mysql\u884c\u683c\u5f0f.md",sourceDirName:"backend/mysql",slug:"/backend/mysql/mysql\u884c\u683c\u5f0f",permalink:"/backend/mysql/mysql\u884c\u683c\u5f0f",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/backend/mysql/03-mysql\u884c\u683c\u5f0f.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"mysql\u884c\u683c\u5f0f",sidebar_position:1},sidebar:"docs",previous:{title:"mysql8\u5b89\u88c5",permalink:"/backend/mysql/mysql8\u5b89\u88c5"},next:{title:"\u67e5\u770b\u5df2\u767b\u5f55\u5bc6\u7801",permalink:"/backend/mysql/\u67e5\u770b\u5df2\u767b\u5f55\u5bc6\u7801"}},i={},m=[{value:"Dynamic\u548cCompressed\u884c\u683c\u5f0f",id:"dynamic\u548ccompressed\u884c\u683c\u5f0f",level:3},{value:"Compact \u884c\u683c\u5f0f",id:"compact-\u884c\u683c\u5f0f",level:3},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:3}],s={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ee5\u8bb0\u5f55\u4e3a\u5355\u4f4d\u6765\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u7684\uff0c\u8fd9\u4e9b\u8bb0\u5f55\u5728\u78c1\u76d8\u4e0a\u7684\u5b58\u653e\u65b9\u5f0f\u4e5f\u88ab\u79f0\u4e3a \u884c\u683c\u5f0f \u6216\u8005 \u8bb0\u5f55\u683c\u5f0f \u3002 InnoDB \u5230\u73b0\u5728\u4e3a\u6b62\u8bbe\u8ba1\u4e864\u79cd\u4e0d\u540c\u7c7b\u578b\u7684 \u884c\u683c\u5f0f \uff0c\u5206\u522b\u662f Compact \u3001 Redundant \u3001Dynamic \u548c Compressed \u884c\u683c\u5f0f\u3002"),(0,o.kt)("p",null,"mysql5.0\u4e4b\u540e\u7684\u9ed8\u8ba4\u884c\u683c\u5f0f\u4e3aCompact \uff0c 5.7\u4e4b\u540e\u7684\u9ed8\u8ba4\u884c\u683c\u5f0f\u4e3adynamic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `coin`  (\n  `ranked` int(0) NOT NULL COMMENT '\u6392\u540d',\n  PRIMARY KEY (`id`) USING BTREE\n) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;\n-- ) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;\n")),(0,o.kt)("p",null,"Compact\u6539\u6210Dynamic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," Row size too large (> 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED ma\n")),(0,o.kt)("h3",{id:"dynamic\u548ccompressed\u884c\u683c\u5f0f"},"Dynamic\u548cCompressed\u884c\u683c\u5f0f"),(0,o.kt)("p",null,"\u53ea\u4e0d\u8fc7\u5728\u5904\u7406\u884c\u6ea2\u51fa\u6570\u636e\u65f6\u4e0d\u540c\uff0c\u5b83\u4eec\u4e0d\u4f1a\u5728\u8bb0\u5f55\u7684\u771f\u5b9e\u6570\u636e\u5904\u5b58\u50a8\u5b57\u6bb5\u771f\u5b9e\u6570\u636e\u7684\u524d 768 \u4e2a\u5b57\u8282\uff0c\u800c\u662f\u628a\u6240\u6709\u7684\u5b57\u8282\u90fd\u5b58\u50a8\u5230\u5176\u4ed6\u9875\u9762\u4e2d\uff0c\u53ea\u5728\u8bb0\u5f55\u7684\u771f\u5b9e\u6570\u636e\u5904\u5b58\u50a8\u5176\u4ed6\u9875\u9762\u7684\u5730\u5740"),(0,o.kt)("h3",{id:"compact-\u884c\u683c\u5f0f"},"Compact \u884c\u683c\u5f0f"),(0,o.kt)("p",null,"Compact\u884c\u683c\u5f0f\u5728MySQL 5.0\u4e2d\u88ab\u5f15\u5165\uff0c\u5176\u76ee\u6807\u662f\u4e3a\u4e86\u66f4\u9ad8\u6548\u7684\u5b58\u50a8\u6570\u636e\u8bb0\u5f55\u3002\u5728\u8be5\u683c\u5f0f\u4e0b\uff0c\u4e00\u6761\u6570\u636e\u8bb0\u5f55\u7684\u7ec4\u6210\u90e8\u5206\u5982\u4e0b\u6240\u793a\u3002\u5176\u5927\u4f53\u5206\u4e3a\u4e24\u90e8\u5206\u2014\u2014\u8bb0\u5f55\u7684\u989d\u5916\u4fe1\u606f\u3001\u8bb0\u5f55\u7684\u6570\u636e\u5185\u5bb9\u3002\u540e\u8005\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u5176\u5373\u662f\u6211\u4eec\u5b58\u50a8\u5230\u6570\u636e\u5e93\u7684\u5404\u5217(\u5b57\u6bb5)\u6570\u636e\u503c\u3002\u800c\u524d\u8005\u5219\u662fMySQL\u4e3a\u4e86\u66f4\u597d\u63cf\u8ff0\u8be5\u6761\u8bb0\u5f55\u800c\u6dfb\u52a0\u7684\u989d\u5916\u4fe1\u606f"),(0,o.kt)("h3",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4fee\u6539\u884c\u683c\u5f0f\nalter table task2\n    row_format = dynamic;\n\n-- \u67e5\u770b\u884c\u683c\u5f0f\nshow table status from test1 like 'task2';\n")))}u.isMDXComponent=!0}}]);