"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[6272],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||g[f]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29262:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={},l=void 0,s={unversionedId:"JavaScript/A-1-array\u65b9\u6cd5/slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4",id:"JavaScript/A-1-array\u65b9\u6cd5/slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4",title:"slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4",description:"slice \u4e0d\u6539\u53d8\u539f\u6570\u7ec4",source:"@site/programming-tech/JavaScript/A-1-array\u65b9\u6cd5/13-slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4.md",sourceDirName:"JavaScript/A-1-array\u65b9\u6cd5",slug:"/JavaScript/A-1-array\u65b9\u6cd5/slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4",permalink:"/JavaScript/A-1-array\u65b9\u6cd5/slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/A-1-array\u65b9\u6cd5/13-slice\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"docs",previous:{title:"shift\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20",permalink:"/JavaScript/A-1-array\u65b9\u6cd5/shift\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20"},next:{title:"sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",permalink:"/JavaScript/A-1-array\u65b9\u6cd5/sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5"}},c={},i=[{value:"slice \u4e0d\u6539\u53d8\u539f\u6570\u7ec4",id:"slice-\u4e0d\u6539\u53d8\u539f\u6570\u7ec4",level:3},{value:"2.\u8be5\u65b9\u6cd5\u4e5f \u7528\u4e8e\u5b57\u7b26\u4e32",id:"2\u8be5\u65b9\u6cd5\u4e5f-\u7528\u4e8e\u5b57\u7b26\u4e32",level:3},{value:"\u5e94\u7528\uff1a\u5b57\u7b26\u4e32\u53cd\u8f6c",id:"\u5e94\u7528\u5b57\u7b26\u4e32\u53cd\u8f6c",level:3}],p={toc:i},u="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"slice-\u4e0d\u6539\u53d8\u539f\u6570\u7ec4"},"slice \u4e0d\u6539\u53d8\u539f\u6570\u7ec4"),(0,a.kt)("p",null,"slice \u4e0d\u4f1a\u4fee\u6539\u539f\u6570\u7ec4\uff0c\u53ea\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6d45\u590d\u5236\u4e86\u539f\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7684\u4e00\u4e2a\u65b0\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 slice() \u65b9\u6cd5\u4ece\u6570\u7ec4\u4e2d\u83b7\u53d6\u7247\u6bb5\uff0c\u4f46\u662f\u4e0d\u4f1a\u66f4\u6539\u539f\u6570\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fruits = ['apple', 'banana', 'mango', 'orange'];\n\nconst slicedFruits = fruits.slice(1, 3);\n// slicedFruits \u73b0\u5728\u662f ['banana', 'mango']\n\nconsole.log(fruits);\n// fruits \u4ecd\u7136\u662f ['apple', 'banana', 'mango', 'orange']\n")),(0,a.kt)("p",null,"slice(start,end) \u53c2\u6570\u6709\u4e24\u4e2a\uff0cstart\u4e3a\u5fc5\u586b\u5b57\u6bb5\uff0cend\u4e3a\u9009\u586b\u5b57\u6bb5\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c\u5305\u542b\u4ece start \u5230 end \u7684\u5143\u7d20\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const testArr = new Array();\n\ntestArr[0] = "first";\ntestArr[1] = "second";\ntestArr[2] = "third";\ntestArr[3] = "forth";\n\nconsole.log(testArr.slice(0));\nconsole.log(testArr.slice(2));\nconsole.log(testArr.slice(1, 2));\n\nconsole.log(\'\u539f\u6570\u7ec4\uff1a\', testArr);\n')),(0,a.kt)("h3",{id:"2\u8be5\u65b9\u6cd5\u4e5f-\u7528\u4e8e\u5b57\u7b26\u4e32"},"2.\u8be5\u65b9\u6cd5\u4e5f \u7528\u4e8e\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"start \u8981\u62bd\u53d6\u7684\u7247\u65ad\u7684\u8d77\u59cb\u4e0b\u6807\u3002\u5982\u679c\u662f\u8d1f\u6570\uff0c\u5219\u8be5\u53c2\u6570\u89c4\u5b9a\u7684\u662f\u4ece\u5b57\u7b26\u4e32\u7684\u5c3e\u90e8\u5f00\u59cb\u7b97\u8d77\u7684\u4f4d\u7f6e\u3002\n\u4e5f\u5c31\u662f\u8bf4\uff0c-1 \u6307\u5b57\u7b26\u4e32\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\uff0c-2 \u6307\u5012\u6570\u7b2c\u4e8c\u4e2a\u5b57\u7b26\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,a.kt)("p",null,"end\t\u7d27\u63a5\u7740\u8981\u62bd\u53d6\u7684\u7247\u6bb5\u7684\u7ed3\u5c3e\u7684\u4e0b\u6807\u3002\u82e5\u672a\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u5219\u8981\u63d0\u53d6\u7684\u5b50\u4e32\u5305\u62ec start \u5230\u539f\u5b57\u7b26\u4e32\u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u3002\n\u5982\u679c\u8be5\u53c2\u6570\u662f\u8d1f\u6570\uff0c\u90a3\u4e48\u5b83\u89c4\u5b9a\u7684\u662f\u4ece\u5b57\u7b26\u4e32\u7684\u5c3e\u90e8\u5f00\u59cb\u7b97\u8d77\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const str = "abcdefg";\nconsole.log(str.slice(-1)); // g\nconsole.log(str.slice(2)); // cdefg\nconsole.log(str.slice(0, 3)); // abc\nconsole.log(str.slice(0, -2)); // abcde\nconsole.log(str.slice(-3, -2)); // e\n\nconst testArr = [0, 1, 2, 3, 4, 5]\nconsole.log(testArr.slice(1, 3)); // [1, 2]\nconsole.log(testArr.slice(0, 3)); // [0,1, 2]\n')),(0,a.kt)("h3",{id:"\u5e94\u7528\u5b57\u7b26\u4e32\u53cd\u8f6c"},"\u5e94\u7528\uff1a\u5b57\u7b26\u4e32\u53cd\u8f6c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function reverse(str) {\n    if (str.length === 1) {\n        return str;\n    }\n    return str.slice(-1) + reverse(str.slice(0, -1));\n}\nconst testStr = \"helloworld\";\nconsole.log('\u5b57\u7b26\u4e32\u53cd\u8f6c:', reverse(testStr)); // dlrowolleh\n")))}g.isMDXComponent=!0}}]);