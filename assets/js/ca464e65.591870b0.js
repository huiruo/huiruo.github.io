"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8958],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>b});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),o=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=o(n.components);return a.createElement(p.Provider,{value:e},n.children)},m="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,p=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),m=o(t),d=r,b=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return t?a.createElement(b,i(i({ref:e},c),{},{components:t})):a.createElement(b,i({ref:e},c))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=n,u[m]="string"==typeof n?n:r,i[1]=u;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38304:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={},i=void 0,u={unversionedId:"C++-V8/C++/\u51fd\u6570",id:"C++-V8/C++/\u51fd\u6570",title:"\u51fd\u6570",description:"\u5b9a\u4e49\u51fd\u6570",source:"@site/programming-tech/C++-V8/C++/04-\u51fd\u6570.md",sourceDirName:"C++-V8/C++",slug:"/C++-V8/C++/\u51fd\u6570",permalink:"/C++-V8/C++/\u51fd\u6570",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/C++-V8/C++/04-\u51fd\u6570.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"\u591a\u7ebf\u7a0b",permalink:"/C++-V8/C++/\u591a\u7ebf\u7a0b"},next:{title:"\u7ee7\u627f",permalink:"/C++-V8/C++/\u7ee7\u627f"}},p={},o=[{value:"\u5b9a\u4e49\u51fd\u6570",id:"\u5b9a\u4e49\u51fd\u6570",level:2},{value:"\u51fd\u6570\u58f0\u660e",id:"\u51fd\u6570\u58f0\u660e",level:2},{value:"C++11 \u63d0\u4f9b\u4e86\u5bf9\u533f\u540d\u51fd\u6570\u7684\u652f\u6301,\u79f0\u4e3a Lambda \u51fd\u6570(\u4e5f\u53eb Lambda \u8868\u8fbe\u5f0f)",id:"c11-\u63d0\u4f9b\u4e86\u5bf9\u533f\u540d\u51fd\u6570\u7684\u652f\u6301\u79f0\u4e3a-lambda-\u51fd\u6570\u4e5f\u53eb-lambda-\u8868\u8fbe\u5f0f",level:3},{value:"\u51fd\u6570\u53c2\u6570",id:"\u51fd\u6570\u53c2\u6570",level:2},{value:"\u53c2\u6570\u7684\u9ed8\u8ba4\u503c",id:"\u53c2\u6570\u7684\u9ed8\u8ba4\u503c",level:3},{value:"\u5f53\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u6709\u4e09\u79cd\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\u7684\u65b9\u5f0f\uff1a",id:"\u5f53\u8c03\u7528\u51fd\u6570\u65f6\u6709\u4e09\u79cd\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\u7684\u65b9\u5f0f",level:2},{value:"\u6307\u9488\u8c03\u7528:",id:"\u6307\u9488\u8c03\u7528",level:3},{value:"\u5f15\u7528\u8c03\u7528",id:"\u5f15\u7528\u8c03\u7528",level:3}],c={toc:o},m="wrapper";function s(n){let{components:e,...t}=n;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u51fd\u6570"},"\u5b9a\u4e49\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b\uff1a\u4e00\u4e2a\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u3002return_type \u662f\u51fd\u6570\u8fd4\u56de\u7684\u503c\u7684\u6570\u636e\u7c7b\u578b\u3002\u6709\u4e9b\u51fd\u6570\u6267\u884c\u6240\u9700\u7684\u64cd\u4f5c\u800c\u4e0d\u8fd4\u56de\u503c\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0creturn_type \u662f\u5173\u952e\u5b57 void\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u540d\u79f0\uff1a\u8fd9\u662f\u51fd\u6570\u7684\u5b9e\u9645\u540d\u79f0\u3002\u51fd\u6570\u540d\u548c\u53c2\u6570\u5217\u8868\u4e00\u8d77\u6784\u6210\u4e86\u51fd\u6570\u7b7e\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a\u53c2\u6570\u5c31\u50cf\u662f\u5360\u4f4d\u7b26\u3002\u5f53\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u60a8\u5411\u53c2\u6570\u4f20\u9012\u4e00\u4e2a\u503c\uff0c\u8fd9\u4e2a\u503c\u88ab\u79f0\u4e3a\u5b9e\u9645\u53c2\u6570\u3002\u53c2\u6570\u5217\u8868\u5305\u62ec\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u3001\u987a\u5e8f\u3001\u6570\u91cf\u3002\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u51fd\u6570\u53ef\u80fd\u4e0d\u5305\u542b\u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4e3b\u4f53")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"return_type function_name( parameter list )\n{\n   body of the function\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\nusing namespace std;\n \n// \u51fd\u6570\u58f0\u660e\nint max(int num1, int num2);\n \nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 100;\n   int b = 200;\n   int ret;\n \n   // \u8c03\u7528\u51fd\u6570\u6765\u83b7\u53d6\u6700\u5927\u503c\n   ret = max(a, b);\n \n   cout << "Max value is : " << ret << endl;\n \n   return 0;\n}\n \n// \u51fd\u6570\u8fd4\u56de\u4e24\u4e2a\u6570\u4e2d\u8f83\u5927\u7684\u90a3\u4e2a\u6570\nint max(int num1, int num2) \n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int result;\n \n   if (num1 > num2)\n      result = num1;\n   else\n      result = num2;\n \n   return result; \n}\n/*\nMax value is : 200\n*/\n')),(0,r.kt)("h2",{id:"\u51fd\u6570\u58f0\u660e"},"\u51fd\u6570\u58f0\u660e"),(0,r.kt)("p",null,"\u51fd\u6570\u58f0\u660e\u4f1a\u544a\u8bc9\u7f16\u8bd1\u5668\u51fd\u6570\u540d\u79f0\u53ca\u5982\u4f55\u8c03\u7528\u51fd\u6570\u3002\u51fd\u6570\u7684\u5b9e\u9645\u4e3b\u4f53\u53ef\u4ee5\u5355\u72ec\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u5f53\u60a8\u5728\u4e00\u4e2a\u6e90\u6587\u4ef6\u4e2d\u5b9a\u4e49\u51fd\u6570\u4e14\u5728\u53e6\u4e00\u4e2a\u6587\u4ef6\u4e2d\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u51fd\u6570\u58f0\u660e\u662f\u5fc5\u9700\u7684\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u5e94\u8be5\u5728\u8c03\u7528\u51fd\u6570\u7684\u6587\u4ef6\u9876\u90e8\u58f0\u660e\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u51fd\u6570\u58f0\u660e\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"return_type function_name( parameter list );\n")),(0,r.kt)("p",null,"\u9488\u5bf9\u4e0a\u9762\u5b9a\u4e49\u7684\u51fd\u6570 max()\uff0c\u4ee5\u4e0b\u662f\u51fd\u6570\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int max(int num1, int num2);\n")),(0,r.kt)("p",null,"\u5728\u51fd\u6570\u58f0\u660e\u4e2d\uff0c\u53c2\u6570\u7684\u540d\u79f0\u5e76\u4e0d\u91cd\u8981\uff0c\u53ea\u6709\u53c2\u6570\u7684\u7c7b\u578b\u662f\u5fc5\u9700\u7684\uff0c\u56e0\u6b64\u4e0b\u9762\u4e5f\u662f\u6709\u6548\u7684\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int max(int, int);\n")),(0,r.kt)("h3",{id:"c11-\u63d0\u4f9b\u4e86\u5bf9\u533f\u540d\u51fd\u6570\u7684\u652f\u6301\u79f0\u4e3a-lambda-\u51fd\u6570\u4e5f\u53eb-lambda-\u8868\u8fbe\u5f0f"},"C++11 \u63d0\u4f9b\u4e86\u5bf9\u533f\u540d\u51fd\u6570\u7684\u652f\u6301,\u79f0\u4e3a Lambda \u51fd\u6570(\u4e5f\u53eb Lambda \u8868\u8fbe\u5f0f)"),(0,r.kt)("p",null,"Lambda \u8868\u8fbe\u5f0f\u628a\u51fd\u6570\u770b\u4f5c\u5bf9\u8c61\u3002Lambda \u8868\u8fbe\u5f0f\u53ef\u4ee5\u50cf\u5bf9\u8c61\u4e00\u6837\u4f7f\u7528\uff0c\u6bd4\u5982\u53ef\u4ee5\u5c06\u5b83\u4eec\u8d4b\u7ed9\u53d8\u91cf\u548c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u8fd8\u53ef\u4ee5\u50cf\u51fd\u6570\u4e00\u6837\u5bf9\u5176\u6c42\u503c\u3002"),(0,r.kt)("p",null,"Lambda \u8868\u8fbe\u5f0f\u672c\u8d28\u4e0a\u4e0e\u51fd\u6570\u58f0\u660e\u975e\u5e38\u7c7b\u4f3c\u3002Lambda \u8868\u8fbe\u5f0f\u5177\u4f53\u5f62\u5f0f\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[capture](parameters)->return-type{body}\n")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8fd4\u56de\u503c\u53ef\u4ee5\u8868\u793a\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"[capture](parameters){body}\n\n// \u4f8b\u5982\n[]{ ++global_x; } \n")),(0,r.kt)("p",null,"\u672c\u4f8b\u4e2d\uff0c\u4e00\u4e2a\u4e34\u65f6\u7684\u53c2\u6570 z \u88ab\u521b\u5efa\u7528\u6765\u5b58\u50a8\u4e2d\u95f4\u7ed3\u679c\u3002\u5982\u540c\u4e00\u822c\u7684\u51fd\u6570\uff0cz \u7684\u503c\u4e0d\u4f1a\u4fdd\u7559\u5230\u4e0b\u4e00\u6b21\u8be5\u4e0d\u5177\u540d\u51fd\u6570\u518d\u6b21\u88ab\u8c03\u7528\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"[](int x, int y) -> int { int z = x + y; return z + x; }\n")),(0,r.kt)("p",null,"\u5982\u679c lambda \u51fd\u6570\u6ca1\u6709\u4f20\u56de\u503c\uff08\u4f8b\u5982 void\uff09\uff0c\u5176\u8fd4\u56de\u7c7b\u578b\u53ef\u88ab\u5b8c\u5168\u5ffd\u7565\u3002"),(0,r.kt)("p",null,"\u5728Lambda\u8868\u8fbe\u5f0f\u5185\u53ef\u4ee5\u8bbf\u95ee\u5f53\u524d\u4f5c\u7528\u57df\u7684\u53d8\u91cf\uff0c\u8fd9\u662fLambda\u8868\u8fbe\u5f0f\u7684\u95ed\u5305\uff08Closure\uff09\u884c\u4e3a\u3002 \u4e0eJavaScript\u95ed\u5305\u4e0d\u540c\uff0cC++\u53d8\u91cf\u4f20\u9012\u6709\u4f20\u503c\u548c\u4f20\u5f15\u7528\u7684\u533a\u522b\u3002\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u7684[]\u6765\u6307\u5b9a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"[]      // \u6c92\u6709\u5b9a\u4e49\u4efb\u4f55\u53d8\u91cf\u3002\u4f7f\u7528\u672a\u5b9a\u4e49\u53d8\u91cf\u4f1a\u5f15\u53d1\u9519\u8bef\u3002\n[x, &y] // x\u4ee5\u4f20\u503c\u65b9\u5f0f\u4f20\u5165\uff08\u9ed8\u8ba4\uff09\uff0cy\u4ee5\u5f15\u7528\u65b9\u5f0f\u4f20\u5165\u3002\n[&]     // \u4efb\u4f55\u88ab\u4f7f\u7528\u5230\u7684\u5916\u90e8\u53d8\u91cf\u90fd\u9690\u5f0f\u5730\u4ee5\u5f15\u7528\u65b9\u5f0f\u52a0\u4ee5\u5f15\u7528\u3002\n[=]     // \u4efb\u4f55\u88ab\u4f7f\u7528\u5230\u7684\u5916\u90e8\u53d8\u91cf\u90fd\u9690\u5f0f\u5730\u4ee5\u4f20\u503c\u65b9\u5f0f\u52a0\u4ee5\u5f15\u7528\u3002\n[&, x]  // x\u663e\u5f0f\u5730\u4ee5\u4f20\u503c\u65b9\u5f0f\u52a0\u4ee5\u5f15\u7528\u3002\u5176\u4f59\u53d8\u91cf\u4ee5\u5f15\u7528\u65b9\u5f0f\u52a0\u4ee5\u5f15\u7528\u3002\n[=, &z] // z\u663e\u5f0f\u5730\u4ee5\u5f15\u7528\u65b9\u5f0f\u52a0\u4ee5\u5f15\u7528\u3002\u5176\u4f59\u53d8\u91cf\u4ee5\u4f20\u503c\u65b9\u5f0f\u52a0\u4ee5\u5f15\u7528\u3002\n")),(0,r.kt)("p",null,"\u53e6\u5916\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\u3002\u5bf9\u4e8e","[=]","\u6216","[&]","\u7684\u5f62\u5f0f\uff0clambda \u8868\u8fbe\u5f0f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 this \u6307\u9488\u3002\u4f46\u662f\uff0c\u5bf9\u4e8e[]\u7684\u5f62\u5f0f\uff0c\u5982\u679c\u8981\u4f7f\u7528 this \u6307\u9488\uff0c\u5fc5\u987b\u663e\u5f0f\u4f20\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"[this]() { this->someFunc(); }();\n")),(0,r.kt)("h2",{id:"\u51fd\u6570\u53c2\u6570"},"\u51fd\u6570\u53c2\u6570"),(0,r.kt)("p",null,"\u5982\u679c\u51fd\u6570\u8981\u4f7f\u7528\u53c2\u6570\uff0c\u5219\u5fc5\u987b\u58f0\u660e\u63a5\u53d7\u53c2\u6570\u503c\u7684\u53d8\u91cf\u3002\u8fd9\u4e9b\u53d8\u91cf\u79f0\u4e3a\u51fd\u6570\u7684\u5f62\u5f0f\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\u5f62\u5f0f\u53c2\u6570\u5c31\u50cf\u51fd\u6570\u5185\u7684\u5176\u4ed6\u5c40\u90e8\u53d8\u91cf\uff0c\u5728\u8fdb\u5165\u51fd\u6570\u65f6\u88ab\u521b\u5efa\uff0c\u9000\u51fa\u51fd\u6570\u65f6\u88ab\u9500\u6bc1\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570\u7684\u9ed8\u8ba4\u503c"},"\u53c2\u6570\u7684\u9ed8\u8ba4\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"int sum(int a, int b=20)\n{\n  int result;\n \n  result = a + b;\n  \n  return (result);\n}\n")),(0,r.kt)("h2",{id:"\u5f53\u8c03\u7528\u51fd\u6570\u65f6\u6709\u4e09\u79cd\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\u7684\u65b9\u5f0f"},"\u5f53\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u6709\u4e09\u79cd\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f20\u503c\u8c03\u7528\t\u8be5\u65b9\u6cd5\u628a\u53c2\u6570\u7684\u5b9e\u9645\u503c\u8d4b\u503c\u7ed9\u51fd\u6570\u7684\u5f62\u5f0f\u53c2\u6570\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4fee\u6539\u51fd\u6570\u5185\u7684\u5f62\u5f0f\u53c2\u6570\u5bf9\u5b9e\u9645\u53c2\u6570\u6ca1\u6709\u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u9488\u8c03\u7528\t\u8be5\u65b9\u6cd5\u628a\u53c2\u6570\u7684\u5730\u5740\u8d4b\u503c\u7ed9\u5f62\u5f0f\u53c2\u6570\u3002\u5728\u51fd\u6570\u5185\uff0c\u8be5\u5730\u5740\u7528\u4e8e\u8bbf\u95ee\u8c03\u7528\u4e2d\u8981\u7528\u5230\u7684\u5b9e\u9645\u53c2\u6570\u3002\u8fd9\u610f\u5473\u7740\uff0c\u4fee\u6539\u5f62\u5f0f\u53c2\u6570\u4f1a\u5f71\u54cd\u5b9e\u9645\u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f15\u7528\u8c03\u7528\t\u8be5\u65b9\u6cd5\u628a\u53c2\u6570\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u5f62\u5f0f\u53c2\u6570\u3002\u5728\u51fd\u6570\u5185\uff0c\u8be5\u5f15\u7528\u7528\u4e8e\u8bbf\u95ee\u8c03\u7528\u4e2d\u8981\u7528\u5230\u7684\u5b9e\u9645\u53c2\u6570\u3002\u8fd9\u610f\u5473\u7740\uff0c\u4fee\u6539\u5f62\u5f0f\u53c2\u6570\u4f1a\u5f71\u54cd\u5b9e\u9645\u53c2\u6570")),(0,r.kt)("h3",{id:"\u6307\u9488\u8c03\u7528"},"\u6307\u9488\u8c03\u7528:"),(0,r.kt)("p",null,"\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\u7684\u6307\u9488\u8c03\u7528\u65b9\u6cd5\uff0c\u628a\u53c2\u6570\u7684\u5730\u5740\u590d\u5236\u7ed9\u5f62\u5f0f\u53c2\u6570\u3002\u5728\u51fd\u6570\u5185\uff0c\u8be5\u5730\u5740\u7528\u4e8e\u8bbf\u95ee\u8c03\u7528\u4e2d\u8981\u7528\u5230\u7684\u5b9e\u9645\u53c2\u6570\u3002\u8fd9\u610f\u5473\u7740\uff0c\u4fee\u6539\u5f62\u5f0f\u53c2\u6570\u4f1a\u5f71\u54cd\u5b9e\u9645\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\nusing namespace std;\n\n// \u51fd\u6570\u58f0\u660e\nvoid swap(int *x, int *y);\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 100;\n   int b = 200;\n \n   cout << "\u4ea4\u6362\u524d\uff0ca \u7684\u503c\uff1a" << a << endl;\n   cout << "\u4ea4\u6362\u524d\uff0cb \u7684\u503c\uff1a" << b << endl;\n\n   /* \u8c03\u7528\u51fd\u6570\u6765\u4ea4\u6362\u503c\n    * &a \u8868\u793a\u6307\u5411 a \u7684\u6307\u9488\uff0c\u5373\u53d8\u91cf a \u7684\u5730\u5740 \n    * &b \u8868\u793a\u6307\u5411 b \u7684\u6307\u9488\uff0c\u5373\u53d8\u91cf b \u7684\u5730\u5740 \n    */\n   swap(&a, &b);\n\n   cout << "\u4ea4\u6362\u540e\uff0ca \u7684\u503c\uff1a" << a << endl;\n   cout << "\u4ea4\u6362\u540e\uff0cb \u7684\u503c\uff1a" << b << endl;\n \n   return 0;\n}\n/*\n\u4ea4\u6362\u524d\uff0ca \u7684\u503c\uff1a 100\n\u4ea4\u6362\u524d\uff0cb \u7684\u503c\uff1a 200\n\u4ea4\u6362\u540e\uff0ca \u7684\u503c\uff1a 200\n\u4ea4\u6362\u540e\uff0cb \u7684\u503c\uff1a 100\n*/\n')),(0,r.kt)("h3",{id:"\u5f15\u7528\u8c03\u7528"},"\u5f15\u7528\u8c03\u7528"),(0,r.kt)("p",null,"\u5411\u51fd\u6570\u4f20\u9012\u53c2\u6570\u7684\u5f15\u7528\u8c03\u7528\u65b9\u6cd5\uff0c\u628a\u5f15\u7528\u7684\u5730\u5740\u590d\u5236\u7ed9\u5f62\u5f0f\u53c2\u6570\u3002\u5728\u51fd\u6570\u5185\uff0c\u8be5\u5f15\u7528\u7528\u4e8e\u8bbf\u95ee\u8c03\u7528\u4e2d\u8981\u7528\u5230\u7684\u5b9e\u9645\u53c2\u6570\u3002\u8fd9\u610f\u5473\u7740\uff0c\u4fee\u6539\u5f62\u5f0f\u53c2\u6570\u4f1a\u5f71\u54cd\u5b9e\u9645\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <iostream>\nusing namespace std;\n \n// \u51fd\u6570\u58f0\u660e\nvoid swap(int &x, int &y);\n \nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 100;\n   int b = 200;\n \n   cout << "\u4ea4\u6362\u524d\uff0ca \u7684\u503c\uff1a" << a << endl;\n   cout << "\u4ea4\u6362\u524d\uff0cb \u7684\u503c\uff1a" << b << endl;\n \n   /* \u8c03\u7528\u51fd\u6570\u6765\u4ea4\u6362\u503c */\n   swap(a, b);\n \n   cout << "\u4ea4\u6362\u540e\uff0ca \u7684\u503c\uff1a" << a << endl;\n   cout << "\u4ea4\u6362\u540e\uff0cb \u7684\u503c\uff1a" << b << endl;\n \n   return 0;\n}\n \n// \u51fd\u6570\u5b9a\u4e49\nvoid swap(int &x, int &y)\n{\n   int temp;\n   temp = x; /* \u4fdd\u5b58\u5730\u5740 x \u7684\u503c */\n   x = y;    /* \u628a y \u8d4b\u503c\u7ed9 x */\n   y = temp; /* \u628a x \u8d4b\u503c\u7ed9 y  */\n  \n   return;\n}\n/*\n\u4ea4\u6362\u524d\uff0ca \u7684\u503c\uff1a 100\n\u4ea4\u6362\u524d\uff0cb \u7684\u503c\uff1a 200\n\u4ea4\u6362\u540e\uff0ca \u7684\u503c\uff1a 200\n\u4ea4\u6362\u540e\uff0cb \u7684\u503c\uff1a 100\n*/\n')))}s.isMDXComponent=!0}}]);