"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8515],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),y=c(t),m=o,g=y["".concat(s,".").concat(m)]||y[m]||b[m]||a;return t?r.createElement(g,p(p({ref:n},i),{},{components:t})):r.createElement(g,p({ref:n},i))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[y]="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"keys-getOwnPropertyNames-defineProperty",sidebar_position:3},p=void 0,l={unversionedId:"JavaScript/for\u5faa\u73af/keys-getOwnPropertyNames-defineProperty",id:"JavaScript/for\u5faa\u73af/keys-getOwnPropertyNames-defineProperty",title:"keys-getOwnPropertyNames-defineProperty",description:"Object.keys()",source:"@site/programming-tech/JavaScript/03-for\u5faa\u73af/03-keys-getOwnPropertyNames-defineProperty.md",sourceDirName:"JavaScript/03-for\u5faa\u73af",slug:"/JavaScript/for\u5faa\u73af/keys-getOwnPropertyNames-defineProperty",permalink:"/JavaScript/for\u5faa\u73af/keys-getOwnPropertyNames-defineProperty",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/03-for\u5faa\u73af/03-keys-getOwnPropertyNames-defineProperty.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"keys-getOwnPropertyNames-defineProperty",sidebar_position:3},sidebar:"docs",previous:{title:"for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d",permalink:"/JavaScript/for\u5faa\u73af/for-in-\u5b9e\u73b0\u6df1\u62f7\u8d1d"},next:{title:"\u6b63\u5411\u904d\u5386-\u53cd\u5411",permalink:"/JavaScript/for\u5faa\u73af/\u6b63\u5411\u904d\u5386-\u53cd\u5411"}},s={},c=[{value:"Object.keys()",id:"objectkeys",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:3},{value:"Object.keys vs for in",id:"objectkeys-vs-for-in",level:3},{value:"\u5b9e\u6218:\u53bb\u6389\u7a7a\u503c\u5c5e\u6027\u5e76\u4e14\u4e0d\u5e0c\u671b\u904d\u5386\u539f\u578b\u94fe\uff0c\u53ef\u4ee5\u4f7f\u7528Object.keys()\u65b9\u6cd5\u7ed3\u5408",id:"\u5b9e\u6218\u53bb\u6389\u7a7a\u503c\u5c5e\u6027\u5e76\u4e14\u4e0d\u5e0c\u671b\u904d\u5386\u539f\u578b\u94fe\u53ef\u4ee5\u4f7f\u7528objectkeys\u65b9\u6cd5\u7ed3\u5408",level:3},{value:"\u5b9e\u6218:\u53bb\u6389\u7a7a\u503c\u5c5e\u6027,\u5355\u7eaf\u4f7f\u7528for in",id:"\u5b9e\u6218\u53bb\u6389\u7a7a\u503c\u5c5e\u6027\u5355\u7eaf\u4f7f\u7528for-in",level:3},{value:"Object.getOwnPropertyNames()",id:"objectgetownpropertynames",level:2},{value:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fd:hasOwnProperty",id:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fdhasownproperty",level:2},{value:"defineProperty",id:"defineproperty",level:2}],i={toc:c},y="wrapper";function b(e){let{components:n,...t}=e;return(0,o.kt)(y,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objectkeys"},"Object.keys()"),(0,o.kt)("h3",{id:"\u7279\u6027"},"\u7279\u6027"),(0,o.kt)("p",null,"keys() \u662f Object \u7684\u9759\u6001\u51fd\u6570\uff0c\u4e13\u95e8\u7528\u6765\u904d\u5386\u5bf9\u8c61\u83b7\u53d6\u952e\u540d\u3002Object.keys() \u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c"),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0ckeys \u529f\u80fd\u6bd4\u8f83\u4e13\u4e00\uff0c\u5e94\u7528\u8303\u56f4\u6bd4\u8f83\u7a84\uff0c\u4f46\u662f\u6267\u884c\u6548\u7387\u6bd4\u8f83\u9ad8\u3002"),(0,o.kt)("p",null,"Object \u7c7b\u578b\u6ca1\u6709\u5b9a\u4e49 length \u539f\u578b\u5c5e\u6027\uff0c\u53ef\u4ee5\u5229\u7528 keys \u65b9\u6cd5\u83b7\u53d6\u5bf9\u8c61\u7684\u957f\u5ea6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [\"A\", \"B\", \"C\"];\nconsole.log(Object.keys(arr));  // ['0', '1', '2']\n\nvar obj = { a: \"A\", b: \"B\", c: \"C\" };\nconsole.log(Object.keys(obj));  // ['a', 'b', 'c']\n")),(0,o.kt)("h3",{id:"objectkeys-vs-for-in"},"Object.keys vs for in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name, age) {\n    this.name = name;\n    this.age = age;\n}\n\nPerson.prototype = { sex: "\u7537" };\nconst man = new Person("\u5f20\u4e09", 18);\n\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027info\nObject.defineProperty(man, "info", { value: "18", enumerable: false });\n\n// \u901a\u8fc7\u539f\u578b\u94fe\u589e\u52a0\u5c5e\u6027\uff0c\u4e3a\u4e00\u4e2a\u51fd\u6570\nObject.prototype.protoPer1 = function () {\n    console.log("name is tom");\n};\n\n// \u901a\u8fc7\u539f\u578b\u94fe\u589e\u52a0\u5c5e\u6027\nObject.prototype.protoPer2 = 2;\n\n// \u4f46\u662fObject.keys \u53ea\u904d\u5386\u81ea\u8eab\u7684\u5c5e\u6027: [ \'name\', \'age\' ]\nconsole.log("Object.keys:", Object.keys(man));\n\n// \u53ef\u89c1for in  \u8fed\u4ee3\u4e86 Person \u7684\u539f\u578b\u5bf9\u8c61: sex \u548c Object \u7684 protoPer1,protoPer2\nfor (let key in man) {\n    console.log("1-3:", key);\n}\n/*\n1-3: name\n1-3: age\n1-3: sex\n1-3: protoPer1\n1-3: protoPer2\n* */\n')),(0,o.kt)("h3",{id:"\u5b9e\u6218\u53bb\u6389\u7a7a\u503c\u5c5e\u6027\u5e76\u4e14\u4e0d\u5e0c\u671b\u904d\u5386\u539f\u578b\u94fe\u53ef\u4ee5\u4f7f\u7528objectkeys\u65b9\u6cd5\u7ed3\u5408"},"\u5b9e\u6218:\u53bb\u6389\u7a7a\u503c\u5c5e\u6027\u5e76\u4e14\u4e0d\u5e0c\u671b\u904d\u5386\u539f\u578b\u94fe\uff0c\u53ef\u4ee5\u4f7f\u7528Object.keys()\u65b9\u6cd5\u7ed3\u5408"),(0,o.kt)("p",null,"\u66f4\u9ad8\u6548\u5730\u5220\u9664\u5bf9\u8c61\u4e2d\u7684\u7a7a\u5b57\u7b26\u4e32\u5c5e\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function removeEmptyStringProperties(obj) {\n  Object.keys(obj).forEach(function(key) {\n    if (obj[key] === '') {\n      delete obj[key];\n    }\n  });\n}\n\n// \u793a\u4f8b\u7528\u6cd5\nvar obj = {\n  name: 'John',\n  age: '',\n  city: 'New York',\n  email: '',\n};\n\nremoveEmptyStringProperties(obj);\n\nconsole.log(obj);\n// \u8f93\u51fa: { name: 'John', city: 'New York' }\n")),(0,o.kt)("h3",{id:"\u5b9e\u6218\u53bb\u6389\u7a7a\u503c\u5c5e\u6027\u5355\u7eaf\u4f7f\u7528for-in"},"\u5b9e\u6218:\u53bb\u6389\u7a7a\u503c\u5c5e\u6027,\u5355\u7eaf\u4f7f\u7528for in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function removeEmptyStringProperties(obj) {\n  for (var key in obj) {\n    if (obj[key] === '') {\n      delete obj[key];\n    }\n  }\n}\n\n// \u793a\u4f8b\u7528\u6cd5\nvar obj = {\n  name: 'John',\n  age: '',\n  city: 'New York',\n  email: '',\n};\n\nremoveEmptyStringProperties(obj);\n\nconsole.log(obj);\n// \u8f93\u51fa: { name: 'John', city: 'New York' }\n")),(0,o.kt)("h2",{id:"objectgetownpropertynames"},"Object.getOwnPropertyNames()"),(0,o.kt)("p",null,"Object.getOwnPropertyNames()\u4e0e keys \u7528\u6cd5\u76f8\u540c\uff0c\u53c2\u6570\u90fd\u662f\u5bf9\u8c61\uff0c\u8fd4\u56de\u503c\u90fd\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u90fd\u662f\u5c5e\u6027\u540d\u3002"),(0,o.kt)("p",null,"\u4e0d\u540c\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"getOwnPropertyNames \u53ef\u4ee5\u8fed\u4ee3\u6240\u6709\u672c\u5730\u5c5e\u6027\u8fd4\u56de\u4e86\u6570\u7ec4\uff1a\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027,\u5305\u62ec\u53ef\u679a\u4e3e\u548c\u4e0d\u53ef\u679a\u4e3e\u7684\u4f46\u4e0d\u5305\u62ecSymbol\u503c\u4f5c\u4e3a\u540d\u79f0\u7684\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ol"},"Object.keys()\u4ec5\u80fd\u8fed\u4ee3\u672c\u5730\u3001\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\uff0c\u8fd4\u56de\u53ef\u679a\u4e3e\u7684\u5c5e\u6027,\u4e0d\u4f1a\u5305\u62ec\u7ee7\u627f\u539f\u578b\u7684\u5c5e\u6027,\u8fd4\u56de\u6570\u7ec4"),(0,o.kt)("li",{parentName:"ol"},"for in :\u904d\u5386\u5bf9\u8c61\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u81ea\u8eab\u5c5e\u6027\uff0c\u4ee5\u53ca\u7ee7\u627f\u81ea\u539f\u578b\u7684\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var o = { a: "A", b: "B", c: "C" };\nconsole.log(Object.keys(o));  // \u8fd4\u56de["a","b","c"]\nconsole.log(Object.getOwnPropertyNames(o));  //\u8fd4\u56de["a","b","c"]\n\nvar a = ["A", "B", "C"];\nconsole.log(Object.keys(a));  // \u8fd4\u56de["0","1","2"]\nconsole.log(Object.getOwnPropertyNames(a));  //\u8fd4\u56de["0","1","2"]\n')),(0,o.kt)("h2",{id:"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fdhasownproperty"},"\u539f\u578b\u94fe\u67e5\u627e\u6027\u80fd:hasOwnProperty"),(0,o.kt)("p",null,"\u662fJavaScript\u4e2d\u552f\u4e00\u4e00\u4e2a\u5904\u7406\u5c5e\u6027\u5e76\u4e14\u4e0d\u4f1a\u904d\u5386\u539f\u578b\u94fe\u7684\u65b9\u6cd5"),(0,o.kt)("p",null,"\u5b9e\u6218\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u65f6\u5ffd\u7565\u6389\u7ee7\u627f\u5c5e\u6027:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u6d4b\u8bd5for in \u501f\u52a9hasOwnProperty()\u904d\u5386\u5bf9\u8c61\nconst object1 = {\n    property1: 42,\n};\n\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(object1, "age", { value: "18", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age2\nObject.defineProperty(object1, "age2", { value: "18", enumerable: true });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(Object, "prototype2", { value: "18", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(Object, "prototype3", { value: "18", enumerable: true });\n\nObject.prototype.protoPer_4 = 2;\n\nfor (let i in object1) {\n    if (object1.hasOwnProperty(i)) {\n        console.log("OwnProperty:", i);\n    } else {\n        console.log("in:", i);\n    }\n}\n/*\nOwnProperty: property1\nOwnProperty: age2\nin: protoPer_4\n* */\n')),(0,o.kt)("h2",{id:"defineproperty"},"defineProperty"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const object1 = { property1: 42 };\n\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027age\nObject.defineProperty(object1, \"age\", { value: \"18\", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027prototype2\nObject.defineProperty(Object, \"prototype2\", { value: \"18\", enumerable: false });\n// \u589e\u52a0\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027prototype3\nObject.defineProperty(Object, \"prototype3\", { value: \"18\", enumerable: true });\n\n// 1-getOwnPropertyNames\u8fd4\u56de\u5bf9\u8c61\u7684\u81ea\u6709\u5c5e\u6027: (2)\xa0['property1', 'age']\nconsole.log('1-getOwnPropertyNames\u8fd4\u56de\u5bf9\u8c61\u7684\u81ea\u6709\u5c5e\u6027:', Object.getOwnPropertyNames(object1)); \n\n// 2-Object.keys()\u8fd4\u56de\u53ef\u679a\u4e3e\u7684\u5c5e\u6027: ['property1']\nconsole.log('2-Object.keys()\u8fd4\u56de\u53ef\u679a\u4e3e\u7684\u5c5e\u6027:',Object.keys(object1)); \n\n// \u8fd4\u56de\u4e86Array\u7684\u5c5e\u6027:[ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]\nconsole.log('4-:',Object.getOwnPropertyNames(Array)); \nconsole.log('5-obj1:', Object.prototype2)\nconsole.log('6-obj2:', Object.length)\nconsole.log('7-obj2:', Object.name)\nconsole.log('8-test1:', Object.getOwnPropertyDescriptors(object1))\n/*\ntest1: {\n  property1: { value: 42, writable: true, enumerable: true, configurable: true },\n  age: {\n    value: '18',\n    writable: false,\n    enumerable: false,\n    configurable: false\n  }\n}\n* */\n\n\nObject.getOwnPropertyNames(Object)\n\u8f93\u51fa\uff1a['length', 'name', 'prototype', 'assign', 'getOwnPropertyDescriptor', 'getOwnPropertyDescriptors', 'getOwnPropertyNames', 'getOwnPropertySymbols', 'hasOwn', 'is', 'preventExtensions', 'seal', 'create', 'defineProperties', 'freeze', 'getPrototypeOf', 'setPrototypeOf', 'isExtensible', 'isFrozen', 'isSealed', 'keys', 'entries', 'fromEntries', 'values', 'defineProperty', 'prototype2', 'prototype3']\n")))}b.isMDXComponent=!0}}]);