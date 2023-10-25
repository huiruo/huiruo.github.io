"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,g=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,c={unversionedId:"C++-V8/C++/\u7ee7\u627f",id:"C++-V8/C++/\u7ee7\u627f",title:"\u7ee7\u627f",description:"\u7ee7\u627f\u7c7b\u578b",source:"@site/programming-tech/C++-V8/C++/11-\u7ee7\u627f.md",sourceDirName:"C++-V8/C++",slug:"/C++-V8/C++/\u7ee7\u627f",permalink:"/C++-V8/C++/\u7ee7\u627f",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/C++-V8/C++/11-\u7ee7\u627f.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"10-2-\u63a5\u53e3\u62bd\u8c61\u7c7b",permalink:"/C++-V8/C++/10-2-\u63a5\u53e3\u62bd\u8c61\u7c7b"},next:{title:"\u91cd\u8f7d\u8fd0\u7b97\u7b26\u548c\u91cd\u8f7d\u51fd\u6570",permalink:"/C++-V8/C++/\u91cd\u8f7d\u8fd0\u7b97\u7b26\u548c\u91cd\u8f7d\u51fd\u6570"}},l={},p=[{value:"\u7ee7\u627f\u7c7b\u578b",id:"\u7ee7\u627f\u7c7b\u578b",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// \u57fa\u7c7b\nclass Animal {\n    // eat() \u51fd\u6570\n    // sleep() \u51fd\u6570\n};\n\n\n//\u6d3e\u751f\u7c7b\nclass Dog : public Animal {\n    // bark() \u51fd\u6570\n};\n")),(0,a.kt)("h2",{id:"\u7ee7\u627f\u7c7b\u578b"},"\u7ee7\u627f\u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u7c7b\u6d3e\u751f\u81ea\u57fa\u7c7b\uff0c\u8be5\u57fa\u7c7b\u53ef\u4ee5\u88ab\u7ee7\u627f\u4e3a public\u3001protected \u6216 private \u51e0\u79cd\u7c7b\u578b\u3002\u7ee7\u627f\u7c7b\u578b\u662f\u901a\u8fc7\u4e0a\u9762\u8bb2\u89e3\u7684\u8bbf\u95ee\u4fee\u9970\u7b26 access-specifier \u6765\u6307\u5b9a\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u51e0\u4e4e\u4e0d\u4f7f\u7528 protected \u6216 private \u7ee7\u627f\uff0c\u901a\u5e38\u4f7f\u7528 public \u7ee7\u627f\u3002\u5f53\u4f7f\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u7ee7\u627f\u65f6\uff0c\u9075\u5faa\u4ee5\u4e0b\u51e0\u4e2a\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u516c\u6709\u7ee7\u627f\uff08public\uff09\uff1a\u5f53\u4e00\u4e2a\u7c7b\u6d3e\u751f\u81ea\u516c\u6709\u57fa\u7c7b\u65f6\uff0c\u57fa\u7c7b\u7684\u516c\u6709\u6210\u5458\u4e5f\u662f\u6d3e\u751f\u7c7b\u7684\u516c\u6709\u6210\u5458\uff0c\u57fa\u7c7b\u7684\u4fdd\u62a4\u6210\u5458\u4e5f\u662f\u6d3e\u751f\u7c7b\u7684\u4fdd\u62a4\u6210\u5458\uff0c\u57fa\u7c7b\u7684\u79c1\u6709\u6210\u5458\u4e0d\u80fd\u76f4\u63a5\u88ab\u6d3e\u751f\u7c7b\u8bbf\u95ee\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u57fa\u7c7b\u7684\u516c\u6709\u548c\u4fdd\u62a4\u6210\u5458\u6765\u8bbf\u95ee\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u62a4\u7ee7\u627f\uff08protected\uff09\uff1a \u5f53\u4e00\u4e2a\u7c7b\u6d3e\u751f\u81ea\u4fdd\u62a4\u57fa\u7c7b\u65f6\uff0c\u57fa\u7c7b\u7684\u516c\u6709\u548c\u4fdd\u62a4\u6210\u5458\u5c06\u6210\u4e3a\u6d3e\u751f\u7c7b\u7684\u4fdd\u62a4\u6210\u5458\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u79c1\u6709\u7ee7\u627f\uff08private\uff09\uff1a\u5f53\u4e00\u4e2a\u7c7b\u6d3e\u751f\u81ea\u79c1\u6709\u57fa\u7c7b\u65f6\uff0c\u57fa\u7c7b\u7684\u516c\u6709\u548c\u4fdd\u62a4\u6210\u5458\u5c06\u6210\u4e3a\u6d3e\u751f\u7c7b\u7684\u79c1\u6709\u6210\u5458\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <iostream>\n \nusing namespace std;\n \n// \u57fa\u7c7b\nclass Shape \n{\n   public:\n      void setWidth(int w)\n      {\n         width = w;\n      }\n      void setHeight(int h)\n      {\n         height = h;\n      }\n   protected:\n      int width;\n      int height;\n};\n \n// \u6d3e\u751f\u7c7b\nclass Rectangle: public Shape\n{\n   public:\n      int getArea()\n      { \n         return (width * height); \n      }\n};\n \nint main(void)\n{\n   Rectangle Rect;\n \n   Rect.setWidth(5);\n   Rect.setHeight(7);\n \n   // \u8f93\u51fa\u5bf9\u8c61\u7684\u9762\u79ef\n   cout << "Total area: " << Rect.getArea() << endl;\n \n   return 0;\n}\n/*\nTotal area: 35\n*/\n')))}m.isMDXComponent=!0}}]);