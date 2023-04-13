"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},c=void 0,s={unversionedId:"\u6b63\u5219/test",id:"\u6b63\u5219/test",title:"test",description:"",source:"@site/programming-tech/\u6b63\u5219/03-test.md",sourceDirName:"\u6b63\u5219",slug:"/\u6b63\u5219/test",permalink:"/\u6b63\u5219/test",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/\u6b63\u5219/03-test.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"\u6821\u9a8c\u5b57\u7b26\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/\u6b63\u5219/\u6b63\u5219\u4f8b\u5b50/\u6821\u9a8c\u5b57\u7b26\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"}},l={},i=[],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/*\n* \u6267\u884c\u4e00\u4e2a\u68c0\u7d22\uff0c\u7528\u6765\u67e5\u770b\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u662f\u5426\u5339\u914d\u3002\u8fd4\u56de true \u6216 false\n* */\n\nconst text = "000-00-0000";\nconst pattern = /\\d{3}-\\d{2}-\\d{4}/;\nif (pattern.test(text)) {\n    console.log("The pattern was matched.");\n} else {\n    console.log(\'not ok\');\n}\n\n/*\n/[^0-9]/g\n/[^\\d]/g\n*/\n\n// \u9700\u6c42\uff1a\u5fc5\u987b\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d\n// const pattern2 = /^([0-9]{1,}[.][0-9]{4})$/;\n// const pattern2 = /^([0-9]{3}[.][0-9]{4})$/;\nconst pattern2 = /^(([1-9][0-9]*){3}[.][0-9]{4})$/;\n// const text2 = 12.333\n// const text2 = 12.3334\n// const text2 = 123.3334\n// const text2 = 123.333455\nconst text2 = \'023.3334\'\nif (pattern2.test(text2)) {\n    console.log("\u5fc5\u987b\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d,The pattern was matched.");\n} else {\n    console.log(\'not ok\');\n}\n\nconsole.log(\'=======\');\n// let reg = /^[\\d]{2}$/g;\n// let reg = /^([1-9][0-9]*)$/;\nlet reg = /^[1-9][0-9]*$/;\nlet str = "12";\n// let str = "012";\n// let str = "0";\nconsole.log(reg.test(str));     //\u8fd4\u56detrue\n')))}m.isMDXComponent=!0}}]);