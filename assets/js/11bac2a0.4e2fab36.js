"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[780],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i="\u5b57\u7b26\u4e32",l={unversionedId:"C++-V8/C++/\u5b57\u7b26\u4e32",id:"C++-V8/C++/\u5b57\u7b26\u4e32",title:"\u5b57\u7b26\u4e32",description:"c \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff1a",source:"@site/programming-tech/C++-V8/C++/06-\u5b57\u7b26\u4e32.md",sourceDirName:"C++-V8/C++",slug:"/C++-V8/C++/\u5b57\u7b26\u4e32",permalink:"/C++-V8/C++/\u5b57\u7b26\u4e32",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/C++-V8/C++/06-\u5b57\u7b26\u4e32.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"\u6570\u7ec4",permalink:"/C++-V8/C++/\u6570\u7ec4"},next:{title:"\u6307\u9488-\u5f15\u7528",permalink:"/C++-V8/C++/\u6307\u9488-\u5f15\u7528"}},c={},s=[{value:"C \u98ce\u683c\u5b57\u7b26\u4e32",id:"c-\u98ce\u683c\u5b57\u7b26\u4e32",level:2},{value:"c \u6807\u51c6\u5e93\u63d0\u4f9b\u4e86 string \u7c7b\u7c7b\u578b\uff0c\u652f\u6301\u4e0a\u8ff0\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u53e6\u5916\u8fd8\u589e\u52a0\u4e86\u5176\u4ed6\u66f4\u591a\u7684\u529f\u80fd\u3002",id:"c-\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86-string-\u7c7b\u7c7b\u578b\u652f\u6301\u4e0a\u8ff0\u6240\u6709\u7684\u64cd\u4f5c\u53e6\u5916\u8fd8\u589e\u52a0\u4e86\u5176\u4ed6\u66f4\u591a\u7684\u529f\u80fd",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,o.kt)("p",null,"c \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C \u98ce\u683c\u5b57\u7b26\u4e32"),(0,o.kt)("li",{parentName:"ul"},"c \u5f15\u5165\u7684 string \u7c7b\u7c7b\u578b")),(0,o.kt)("h2",{id:"c-\u98ce\u683c\u5b57\u7b26\u4e32"},"C \u98ce\u683c\u5b57\u7b26\u4e32"),(0,o.kt)("p",null,"\u5b57\u7b26\u4e32\u5b9e\u9645\u4e0a\u662f\u4f7f\u7528 null \u5b57\u7b26 \\0 \u7ec8\u6b62\u7684\u4e00\u7ef4\u5b57\u7b26\u6570\u7ec4\u3002\u56e0\u6b64\uff0c\u4e00\u4e2a\u4ee5 null \u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\uff0c\u5305\u542b\u4e86\u7ec4\u6210\u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u3002\n\u4e0b\u9762\u7684\u58f0\u660e\u548c\u521d\u59cb\u5316\u521b\u5efa\u4e86\u4e00\u4e2a RUNOOB \u5b57\u7b26\u4e32\u3002\u7531\u4e8e\u5728\u6570\u7ec4\u7684\u672b\u5c3e\u5b58\u50a8\u4e86\u7a7a\u5b57\u7b26\uff0c\u6240\u4ee5\u5b57\u7b26\u6570\u7ec4\u7684\u5927\u5c0f\u6bd4\u5355\u8bcd RUNOOB \u7684\u5b57\u7b26\u6570\u591a\u4e00\u4e2a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\\0'};\n// \u4f9d\u636e\u6570\u7ec4\u521d\u59cb\u5316\u89c4\u5219\uff0c\u60a8\u53ef\u4ee5\u628a\u4e0a\u9762\u7684\u8bed\u53e5\u5199\u6210\u4ee5\u4e0b\u8bed\u53e5\uff1a\nchar site[] = \"RUNOOB\";\n")),(0,o.kt)("p",null,"\u4e0d\u9700\u8981\u628a null \u5b57\u7b26\u653e\u5728\u5b57\u7b26\u4e32\u5e38\u91cf\u7684\u672b\u5c3e\u3002c \u7f16\u8bd1\u5668\u4f1a\u5728\u521d\u59cb\u5316\u6570\u7ec4\u65f6\uff0c\u81ea\u52a8\u628a \\0 \u653e\u5728\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\u3002\u8ba9\u6211\u4eec\u5c1d\u8bd5\u8f93\u51fa\u4e0a\u9762\u7684\u5b57\u7b26\u4e32\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#include <iostream>\n \nusing namespace std;\n \nint main ()\n{\n   char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\\0'};\n \n   cout << \"\u83dc\u9e1f\u6559\u7a0b: \";\n   cout << site << endl;\n \n   return 0;\n}\n")),(0,o.kt)("h2",{id:"c-\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86-string-\u7c7b\u7c7b\u578b\u652f\u6301\u4e0a\u8ff0\u6240\u6709\u7684\u64cd\u4f5c\u53e6\u5916\u8fd8\u589e\u52a0\u4e86\u5176\u4ed6\u66f4\u591a\u7684\u529f\u80fd"},"c \u6807\u51c6\u5e93\u63d0\u4f9b\u4e86 string \u7c7b\u7c7b\u578b\uff0c\u652f\u6301\u4e0a\u8ff0\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u53e6\u5916\u8fd8\u589e\u52a0\u4e86\u5176\u4ed6\u66f4\u591a\u7684\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include <iostream>\n#include <string>\n \nusing namespace std;\n \nint main ()\n{\n   string str1 = "runoob";\n   string str2 = "google";\n   string str3;\n   int  len ;\n \n   // \u590d\u5236 str1 \u5230 str3\n   str3 = str1;\n   cout << "str3 : " << str3 << endl;\n \n   // \u8fde\u63a5 str1 \u548c str2\n   str3 = str1 + str2;\n   cout << "str1 + str2 : " << str3 << endl;\n \n   // \u8fde\u63a5\u540e\uff0cstr3 \u7684\u603b\u957f\u5ea6\n   len = str3.size();\n   cout << "str3.size() :  " << len << endl;\n \n   return 0;\n}\n/*\nstr3 : runoob\nstr1 + str2 : runoobgoogle\nstr3.size() :  12\n*/\n')))}m.isMDXComponent=!0}}]);