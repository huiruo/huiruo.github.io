"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8627],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},y="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(t),u=o,b=y["".concat(i,".").concat(u)]||y[u]||f[u]||a;return t?n.createElement(b,p(p({ref:r},c),{},{components:t})):n.createElement(b,p({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[y]="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48081:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"keys-hasOwnProperty-defineProperty-forin",sidebar_position:7},p=void 0,s={unversionedId:"JavaScript/keys-hasOwnProperty-defineProperty-forin",id:"JavaScript/keys-hasOwnProperty-defineProperty-forin",title:"keys-hasOwnProperty-defineProperty-forin",description:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fd:hasOwnProperty",source:"@site/programming-tech/JavaScript/06-keys-hasOwnProperty-defineProperty-forin.md",sourceDirName:"JavaScript",slug:"/JavaScript/keys-hasOwnProperty-defineProperty-forin",permalink:"/JavaScript/keys-hasOwnProperty-defineProperty-forin",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/06-keys-hasOwnProperty-defineProperty-forin.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"keys-hasOwnProperty-defineProperty-forin",sidebar_position:7},sidebar:"docs",previous:{title:"js\u9519\u8bef\u5904\u7406",permalink:"/JavaScript/js\u9519\u8bef\u5904\u7406"},next:{title:"map\u6570\u636e\u7c7b\u578b-\u54c8\u5e0c\u8868",permalink:"/JavaScript/map\u6570\u636e\u7c7b\u578b-\u54c8\u5e0c\u8868"}},i={},l=[{value:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fd:hasOwnProperty",id:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fdhasownproperty",level:2},{value:"Object.keys vs for in",id:"objectkeys-vs-for-in",level:3},{value:"\u4f8b\u5b502-\u4f7f\u7528 hasOwnProperty()\u6765\u8fc7\u6ee4\u8be5\u5bf9\u8c61\u4e0a\u7684\u7ee7\u627f\u5c5e\u6027",id:"\u4f8b\u5b502-\u4f7f\u7528-hasownproperty\u6765\u8fc7\u6ee4\u8be5\u5bf9\u8c61\u4e0a\u7684\u7ee7\u627f\u5c5e\u6027",level:3}],c={toc:l},y="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(y,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fdhasownproperty"},"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fd:hasOwnProperty"),(0,o.kt)("p",null,"\u662fJavaScript\u4e2d\u552f\u4e00\u4e00\u4e2a\u5904\u7406\u5c5e\u6027\u5e76\u4e14\u4e0d\u4f1a\u904d\u5386\u539f\u578b\u94fe\u7684\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log(object1.hasOwnProperty("property1")); // true\n')),(0,o.kt)("p",null,"\u6269\u5c55\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Object.getOwnPropertyNames(Object) \u8fd4\u56de\u4e86\u6570\u7ec4\uff1a\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027,\u5305\u62ec\u53ef\u679a\u4e3e\u548c\u4e0d\u53ef\u679a\u4e3e\u7684\u4f46\u4e0d\u5305\u62ecSymbol\u503c\u4f5c\u4e3a\u540d\u79f0\u7684\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ol"},"Object.keys()\u8fd4\u56de\u53ef\u679a\u4e3e\u7684\u5c5e\u6027,\u4e0d\u4f1a\u5305\u62ec\u7ee7\u627f\u539f\u578b\u7684\u5c5e\u6027,\u8fd4\u56de\u6570\u7ec4"),(0,o.kt)("li",{parentName:"ol"},"for in :\u904d\u5386\u5bf9\u8c61\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u81ea\u8eab\u5c5e\u6027\uff0c\u4ee5\u53ca\u7ee7\u627f\u81ea\u539f\u578b\u7684\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const object1 = { property1: 42 };\n\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(object1, \"age\", { value: \"18\", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027prototype2\nObject.defineProperty(Object, \"prototype2\", { value: \"18\", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027prototype3\nObject.defineProperty(Object, \"prototype3\", { value: \"18\", enumerable: true });\n\n// 1-getOwnPropertyNames\u8fd4\u56de\u5bf9\u8c61\u7684\u81ea\u6709\u5c5e\u6027: (2)\xa0['property1', 'age']\nconsole.log('1-getOwnPropertyNames\u8fd4\u56de\u5bf9\u8c61\u7684\u81ea\u6709\u5c5e\u6027:', Object.getOwnPropertyNames(object1)); \n\n// 2-Object.keys()\u8fd4\u56de\u53ef\u679a\u4e3e\u7684\u5c5e\u6027: ['property1']\nconsole.log('2-Object.keys()\u8fd4\u56de\u53ef\u679a\u4e3e\u7684\u5c5e\u6027:',Object.keys(object1)); \n\n// \u8fd4\u56de\u4e86Array\u7684\u5c5e\u6027:[ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]\nconsole.log('4-:',Object.getOwnPropertyNames(Array)); \nconsole.log('5-obj1:', Object.prototype2)\nconsole.log('6-obj2:', Object.length)\nconsole.log('7-obj2:', Object.name)\nconsole.log('8-test1:', Object.getOwnPropertyDescriptors(object1))\n/*\ntest1: {\n  property1: { value: 42, writable: true, enumerable: true, configurable: true },\n  age: {\n    value: '18',\n    writable: false,\n    enumerable: false,\n    configurable: false\n  }\n}\n* */\n\n\nObject.getOwnPropertyNames(Object)\n\u8f93\u51fa\uff1a['length', 'name', 'prototype', 'assign', 'getOwnPropertyDescriptor', 'getOwnPropertyDescriptors', 'getOwnPropertyNames', 'getOwnPropertySymbols', 'hasOwn', 'is', 'preventExtensions', 'seal', 'create', 'defineProperties', 'freeze', 'getPrototypeOf', 'setPrototypeOf', 'isExtensible', 'isFrozen', 'isSealed', 'keys', 'entries', 'fromEntries', 'values', 'defineProperty', 'prototype2', 'prototype3']\n")),(0,o.kt)("h3",{id:"objectkeys-vs-for-in"},"Object.keys vs for in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name, age) {\n    this.name = name;\n    this.age = age;\n}\n\nPerson.prototype = { sex: "\u7537" };\nconst man = new Person("\u5f20\u4e09", 18);\n\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027info\nObject.defineProperty(man, "info", { value: "18", enumerable: false });\n\n// \u901a\u8fc7\u539f\u578b\u94fe\u589e\u52a0\u5c5e\u6027\uff0c\u4e3a\u4e00\u4e2a\u51fd\u6570\nObject.prototype.protoPer1 = function () {\n    console.log("name is tom");\n};\n\n// \u901a\u8fc7\u539f\u578b\u94fe\u589e\u52a0\u5c5e\u6027\nObject.prototype.protoPer2 = 2;\n\n// \u4f46\u662fObject.keys \u53ea\u904d\u5386\u81ea\u8eab\u7684\u5c5e\u6027: [ \'name\', \'age\' ]\nconsole.log("Object.keys:", Object.keys(man));\n\n// \u53ef\u89c1for in  \u8fed\u4ee3\u4e86 Person \u7684\u539f\u578b\u5bf9\u8c61: sex \u548c Object \u7684 protoPer1,protoPer2\nfor (let key in man) {\n    console.log("1-3:", key);\n}\n/*\n1-3: name\n1-3: age\n1-3: sex\n1-3: protoPer1\n1-3: protoPer2\n* */\n')),(0,o.kt)("h3",{id:"\u4f8b\u5b502-\u4f7f\u7528-hasownproperty\u6765\u8fc7\u6ee4\u8be5\u5bf9\u8c61\u4e0a\u7684\u7ee7\u627f\u5c5e\u6027"},"\u4f8b\u5b502-\u4f7f\u7528 hasOwnProperty()\u6765\u8fc7\u6ee4\u8be5\u5bf9\u8c61\u4e0a\u7684\u7ee7\u627f\u5c5e\u6027"),(0,o.kt)("p",null,"\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u65f6\u5ffd\u7565\u6389\u7ee7\u627f\u5c5e\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u6d4b\u8bd5for in \u501f\u52a9hasOwnProperty()\u904d\u5386\u5bf9\u8c61\nconst object1 = {\n    property1: 42,\n};\n\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(object1, "age", { value: "18", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age2\nObject.defineProperty(object1, "age2", { value: "18", enumerable: true });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(Object, "prototype2", { value: "18", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(Object, "prototype3", { value: "18", enumerable: true });\n\nObject.prototype.protoPer_4 = 2;\n\nfor (let i in object1) {\n    if (object1.hasOwnProperty(i)) {\n        console.log("OwnProperty:", i);\n    } else {\n        console.log("in:", i);\n    }\n}\n/*\nOwnProperty: property1\nOwnProperty: age2\nin: protoPer_4\n* */\n')))}f.isMDXComponent=!0}}]);