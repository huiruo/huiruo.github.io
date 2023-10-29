"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=o,d=s["".concat(i,".").concat(b)]||s[b]||y[b]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},34895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={title:"proxy-defineProperty\u533a\u522b",sidebar_position:4},l=void 0,p={unversionedId:"Vue/proxy-defineProperty\u533a\u522b",id:"Vue/proxy-defineProperty\u533a\u522b",title:"proxy-defineProperty\u533a\u522b",description:"Object.defineProperty",source:"@site/programming-tech/Vue/06-proxy-defineProperty\u533a\u522b.md",sourceDirName:"Vue",slug:"/Vue/proxy-defineProperty\u533a\u522b",permalink:"/Vue/proxy-defineProperty\u533a\u522b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/06-proxy-defineProperty\u533a\u522b.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"proxy-defineProperty\u533a\u522b",sidebar_position:4},sidebar:"docs",previous:{title:"\u7406\u89e3reactive\u548ceffect",permalink:"/Vue/\u7406\u89e3reactive\u548ceffect"},next:{title:"Reactivity\u6a21\u62df\u5b9e\u73b0",permalink:"/Vue/Reactivity\u6a21\u62df\u5b9e\u73b0"}},i={},u=[{value:"Object.defineProperty",id:"objectdefineproperty",level:2},{value:"defineProperty\u57fa\u7840\uff1a\u5bf9\u8c61\u91cc\u76ee\u524d\u5b58\u5728\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u4e24\u79cd\u4e3b\u8981\u5f62\u5f0f\uff1a\u6570\u636e\u63cf\u8ff0\u7b26 \u548c \u5b58\u53d6\u63cf\u8ff0\u7b26",id:"defineproperty\u57fa\u7840\u5bf9\u8c61\u91cc\u76ee\u524d\u5b58\u5728\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u4e24\u79cd\u4e3b\u8981\u5f62\u5f0f\u6570\u636e\u63cf\u8ff0\u7b26-\u548c-\u5b58\u53d6\u63cf\u8ff0\u7b26",level:3},{value:"Object.defineProperty \u4e0d\u8db3",id:"objectdefineproperty-\u4e0d\u8db3",level:3},{value:"ES6\u7279\u6027:Proxy\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61",id:"es6\u7279\u6027proxy\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61",level:2},{value:"\u7528\u6cd5-\u4f5c\u7528",id:"\u7528\u6cd5-\u4f5c\u7528",level:3},{value:"\u4f18\u70b9/\u7279\u6027",id:"\u4f18\u70b9\u7279\u6027",level:3},{value:"\u4e0d\u540c\u70b9",id:"\u4e0d\u540c\u70b9",level:2},{value:"\u4e0d\u540c\u70b91:defineProperty\u76d1\u542c\u6570\u7ec4,defineProperty\u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u957f\u5ea6\u53d8\u5316-Proxy\u53ef\u4ee5\u76d1\u542c",id:"\u4e0d\u540c\u70b91defineproperty\u76d1\u542c\u6570\u7ec4defineproperty\u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u957f\u5ea6\u53d8\u5316-proxy\u53ef\u4ee5\u76d1\u542c",level:3},{value:"\u90a3\u6211\u4eec\u600e\u4e48\u6765\u5b9e\u73b0\u5bf9\u6570\u7ec4\u7684\u76d1\u542c\u5462?\u7b54\u6848\u5c31\u662f\u91cd\u5199Array\u7684\u539f\u578b\u65b9\u6cd5",id:"\u90a3\u6211\u4eec\u600e\u4e48\u6765\u5b9e\u73b0\u5bf9\u6570\u7ec4\u7684\u76d1\u542c\u5462\u7b54\u6848\u5c31\u662f\u91cd\u5199array\u7684\u539f\u578b\u65b9\u6cd5",level:3},{value:"\u76f8\u540c\u70b9:\u90fd\u4e0d\u652f\u6301\u5d4c\u5957",id:"\u76f8\u540c\u70b9\u90fd\u4e0d\u652f\u6301\u5d4c\u5957",level:3}],c={toc:u},s="wrapper";function y(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objectdefineproperty"},"Object.defineProperty"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 Vue2 \u91cc\u5185\u90e8\u901a\u8fc7 Object.defineProperty API \u52ab\u6301\u6570\u636e\u7684\u53d8\u5316\uff0c\u6df1\u5ea6\u904d\u5386 data \u51fd\u6570\u91cc\u7684\u5bf9\u8c61\uff0c\u7ed9\u5bf9\u8c61\u91cc\u6bcf\u4e00\u4e2a\u5c5e\u6027\u8bbe\u7f6e getter\u3001setter\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u89e6\u53d1 getter \u4f1a\u901a\u8fc7 Dep \u7c7b\u505a\u4f9d\u8d56\u6536\u96c6\u64cd\u4f5c\uff0c\u6536\u96c6\u5f53\u524d Dep.target, \u4e5f\u5c31\u662f watcher\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u89e6\u53d1 setter\uff0c\u6267\u884c dep.notify \u901a\u77e5\u6536\u96c6\u5230\u7684\u5404\u7c7b watcher \u66f4\u65b0\uff0c\u5982 computed watcher\u3001user watcher \u3001\u6e32\u67d3 watcher\u3002")),(0,o.kt)("h3",{id:"defineproperty\u57fa\u7840\u5bf9\u8c61\u91cc\u76ee\u524d\u5b58\u5728\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u4e24\u79cd\u4e3b\u8981\u5f62\u5f0f\u6570\u636e\u63cf\u8ff0\u7b26-\u548c-\u5b58\u53d6\u63cf\u8ff0\u7b26"},"defineProperty\u57fa\u7840\uff1a\u5bf9\u8c61\u91cc\u76ee\u524d\u5b58\u5728\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u4e24\u79cd\u4e3b\u8981\u5f62\u5f0f\uff1a\u6570\u636e\u63cf\u8ff0\u7b26 \u548c \u5b58\u53d6\u63cf\u8ff0\u7b26"),(0,o.kt)("p",null,"\u63cf\u8ff0\u7b26\u9ed8\u8ba4\u503c\u6c47\u603b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u62e5\u6709\u5e03\u5c14\u503c\u7684\u952e configurable\u3001enumerable \u548c writable \u7684\u9ed8\u8ba4\u503c\u90fd\u662f false\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5c5e\u6027\u503c\u548c\u51fd\u6570\u7684\u952e value\u3001get \u548c set \u5b57\u6bb5\u7684\u9ed8\u8ba4\u503c\u4e3a undefined\u3002"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"configurable: configurable:true\uff0c\u8be5\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\u624d\u80fd\u591f\u88ab\u6539\u53d8\uff0c\u540c\u65f6\u8be5\u5c5e\u6027\u4e5f\u80fd\u4ece\u5bf9\u5e94\u7684\u5bf9\u8c61\u4e0a\u88ab\u5220\u9664\u3002 \u9ed8\u8ba4\u4e3a false\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"enumerable: enumerable:true\uff0c\u8be5\u5c5e\u6027\u624d\u4f1a\u51fa\u73b0\u5728\u5bf9\u8c61\u7684\u679a\u4e3e\u5c5e\u6027\u4e2d\u3002 \u9ed8\u8ba4\u4e3a false\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"writable: writable:true\uff0c\u5c5e\u6027\u7684\u503c\u4e5f\u5c31\u662f\u4e0a\u9762\u7684 value\uff0c\u624d\u80fd\u88ab\u8d4b\u503c\u8fd0\u7b97\u7b26 \u6539\u53d8\u3002 \u9ed8\u8ba4\u4e3a false\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"value: \u8be5\u5c5e\u6027\u5bf9\u5e94\u7684\u503c\u3002\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684 JavaScript \u503c\uff08\u6570\u503c\uff0c\u5bf9\u8c61\uff0c\u51fd\u6570\u7b49\uff09\u3002 \u9ed8\u8ba4\u4e3a undefined\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b58\u53d6\u63cf\u8ff0\u7b26: get \u5c5e\u6027\u7684 getter \u51fd\u6570\uff0c\u5982\u679c\u6ca1\u6709 getter\uff0c\u5219\u4e3a undefined\u3002\u5f53\u8bbf\u95ee\u8be5\u5c5e\u6027\u65f6\uff0c\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\u3002\u6267\u884c\u65f6\u4e0d\u4f20\u5165\u4efb\u4f55\u53c2\u6570\uff0c\u4f46\u662f\u4f1a\u4f20\u5165 this \u5bf9\u8c61\uff08\u7531\u4e8e\u7ee7\u627f\u5173\u7cfb\uff0c\u8fd9\u91cc\u7684this\u5e76\u4e0d\u4e00\u5b9a\u662f\u5b9a\u4e49\u8be5\u5c5e\u6027\u7684\u5bf9\u8c61\uff09\u3002\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u88ab\u7528\u4f5c\u5c5e\u6027\u7684\u503c\u3002\u9ed8\u8ba4\u4e3a undefined\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b58\u53d6\u63cf\u8ff0\u7b26: set \u5c5e\u6027\u7684 setter \u51fd\u6570\uff0c\u5982\u679c\u6ca1\u6709 setter\uff0c\u5219\u4e3a undefined\u3002\u5f53\u5c5e\u6027\u503c\u88ab\u4fee\u6539\u65f6\uff0c\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\u3002\u8be5\u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff08\u4e5f\u5c31\u662f\u88ab\u8d4b\u4e88\u7684\u65b0\u503c\uff09\uff0c\u4f1a\u4f20\u5165\u8d4b\u503c\u65f6\u7684 this \u5bf9\u8c61\u3002 \u9ed8\u8ba4\u4e3a undefined\u3002"))),(0,o.kt)("p",null,"defineProperty\u57fa\u7840\uff1a\u9700\u8981\u6ce8\u610f\u7684\u662f:value,writable \u548cget,set\u4e0d\u80fd\u540c\u65f6\u8fdb\u884c\u914d\u7f6e"),(0,o.kt)("p",null,"\u53c2\u6570\uff1a\n\u8fd4\u56de\u503c:\u88ab\u4f20\u9012\u7ed9\u51fd\u6570\u7684\u5bf9\u8c61\nobj:\u8981\u5b9a\u4e49\u5c5e\u6027\u7684\u5bf9\u8c61\nprop:\u76d1\u542c\u5c5e\u6027\ndescriptor:\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {}\nObject.defineProperty(obj, 'name', {\n  configurable: true, // \u53ef\u5220\u9664\n  enumerable: true, // \u53ef\u679a\u4e3e\n  writable: true,   // \u53ef\u4fee\u6539\n  value: 'val1'\n})\n\nconsole.log('test:', obj.name) // test: val1\n\n// \u540c\u7406\uff1a\u4e0a\u9762\u7684\u4f8b\u5b50\u8fd8\u53ef\u4ee5\u5199\u6210\nlet obj2 = {}\nlet name = 'val1'\nObject.defineProperty(obj2, 'name', {\n  configurable: true, // \u53ef\u5220\u9664\n  enumerable: true, //\u53ef\u679a\u4e3e\n  get() {\n    return name\n  },\n  set(newVal) {\n    name = newVal\n  }\n})\n\nconsole.log('test:', obj2.name) // test: val1\n\n// \u4f8b\u5b50\uff1a\u6ce8\u610f\uff1a \u5e94\u5f53\u76f4\u63a5\u5728 Object \u6784\u9020\u5668\u5bf9\u8c61\u4e0a\u8c03\u7528\u6b64\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u5728\u4efb\u610f\u4e00\u4e2a Object \u7c7b\u578b\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\u3002\nconst object1 = {};\nObject.defineProperty(object1, 'property1', {\n    value: 42,\n    writable: false\n});\n\n// object1.property1 = 77;\n// throws an error in strict mode\n\nconsole.log(object1.property1);\n// expected output: 42\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"objectdefineproperty-\u4e0d\u8db3"},"Object.defineProperty \u4e0d\u8db3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"defineProperty \u76d1\u542c\u67d0\u4e2a\u5c5e\u6027\u4e0d\u80fd\u5168\u5bf9\u8c61\u76d1\u542c,Object.defineProperty() \u65b9\u6cd5\u4f1a\u76f4\u63a5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u6b64\u5bf9\u8c61\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Vue 2.x \u91cc\uff0c\u662f\u901a\u8fc7 \u9012\u5f52 + \u904d\u5386 data \u5bf9\u8c61\u6765\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u76d1\u63a7\u7684"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u68c0\u6d4b\u5bf9\u8c61\u7684 property \u7684\u6dfb\u52a0\u6216\u79fb\u9664\u3002\u800c\u5bf9\u4e8e\u8fd9\u4e2a\u7f3a\u9677\uff0cVue2 \u63d0\u4f9b\u4e86 vm.$set \u548c\u5168\u5c40\u7684 Vue.set API \u8ba9\u6211\u4eec\u80fd\u591f\u5411\u5bf9\u8c61\u6dfb\u52a0\u54cd\u5e94\u5f0f\u7684 property")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Object.defineProperty \u7684\u4e0d\u80fd\u76d1\u542c\u5bf9\u6570\u7ec4\u7d22\u5f15\u7684\u6539\u52a8\u4ee5\u53ca\u6570\u7ec4 length \u7684\u6539\u52a8,\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u7ecf\u8fc7 vue \u5185\u90e8\u5904\u7406\u540e\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\u6765\u76d1\u542c\u6570\u7ec4"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"push()\npop()\nshift()\nunshift()\nsplice()\nsort()\nreverse()\n")),(0,o.kt)("p",null,"\u7531\u4e8e\u53ea\u9488\u5bf9\u4e86\u4ee5\u4e0a\u516b\u79cd\u65b9\u6cd5\u8fdb\u884c\u4e86 hack \u5904\u7406,\u6240\u4ee5\u5176\u4ed6\u6570\u7ec4\u7684\u5c5e\u6027\u4e5f\u662f\u68c0\u6d4b\u4e0d\u5230\u7684\uff0c\u8fd8\u662f\u5177\u6709\u4e00\u5b9a\u7684\u5c40\u9650\u6027\u3002"),(0,o.kt)("p",null,"obj\u7684\u5c5e\u6027\u4e5f\u53ef\u80fd\u662f\u5bf9\u8c61\u6216\u8005\u6570\u7ec4,\u53ef\u80fd\u9700\u8981\u9012\u5f52"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u80fd\u7ed9obj\u8d4b\u503c\u65b0\u7684\u5c5e\u6027,\u8fd9\u79cd\u60c5\u51b5\u53ef\u80fd\u9700\u8981\u5355\u72ec\u5904\u7406"),(0,o.kt)("p",null,"\u7528Object.defineProperty\u5b9e\u73b0\u6570\u636e\u54cd\u5e94\u5f0f\u65f6\u6211\u4eec\u5fc5\u987b\u8981\u904d\u5386\u6240\u6709\u7684\u6570\u636e,\u8fd8\u9700\u8981\u91cd\u5199\u6570\u7ec4\u7684\u65b9\u6cd5,\u6027\u80fd\u6d88\u8017\u4e5f\u6bd4\u8f83\u5927,\u6211\u4eec\u77e5\u9053Vue2.x\u5c31\u662f\u57fa\u4e8eObject.defineProperty\u5b9e\u73b0\u6570\u636e\u54cd\u5e94\u5f0f\u7684\u4f46\u65b0\u7248\u672c\u7684Vue3\u653e\u5f03\u4e86Object.defineProperty\u91c7\u7528Proxy\u91cd\u5199\u4e86\u54cd\u5e94\u5f0f\u7cfb\u7edf"),(0,o.kt)("h2",{id:"es6\u7279\u6027proxy\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61"},"ES6\u7279\u6027:Proxy\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61"),(0,o.kt)("h3",{id:"\u7528\u6cd5-\u4f5c\u7528"},"\u7528\u6cd5-\u4f5c\u7528"),(0,o.kt)("p",null,"Proxy \u5bf9\u8c61\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7684\u4ee3\u7406\uff0c\u4ece\u800c\u5b9e\u73b0\u57fa\u672c\u64cd\u4f5c\u7684\u62e6\u622a\u548c\u81ea\u5b9a\u4e49\uff08\u5982\u5c5e\u6027\u67e5\u627e\u3001\u8d4b\u503c\u3001\u679a\u4e3e\u3001\u51fd\u6570\u8c03\u7528\u7b49\uff09\u3002"),(0,o.kt)("p",null,"\u5e38\u7528\u4f5c\u7528\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u64cd\u4f5c\u4e4b\u524d\u63d0\u4f9b\u4e86\u62e6\u622a\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u64cd\u4f5c\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199\uff0c\u4fee\u6539\u67d0\u4e9b\u64cd\u4f5c\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u4e0d\u76f4\u63a5\u64cd\u4f5c\u5bf9\u8c61\u672c\u8eab\uff0c\u800c\u662f\u901a\u8fc7\u64cd\u4f5c\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\u6765\u95f4\u63a5\u6765\u64cd\u4f5c\u5bf9\u8c61\uff0c\u8fbe\u5230\u9884\u671f\u7684\u76ee\u7684")),(0,o.kt)("p",null,"\u8bed\u6cd5\uff1atarget: \u8981\u4f7f\u7528 Proxy \u5305\u88c5\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u539f\u751f\u6570\u7ec4\uff0c\u51fd\u6570\uff0c\u751a\u81f3\u53e6\u4e00\u4e2a\u4ee3\u7406\uff09\u3002\nhandler: \u4e00\u4e2a\u901a\u5e38\u4ee5\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let obj = { name: 'iphone', price: 99 }\n\nlet proxyObj = new Proxy(obj, {\n  get: function (target, key) {\n    console.log('get\u89e6\u53d1',{target, key})\n    // \u5bf9\u8c61\u4e2d\u4e0d\u5b58\u5728\u5c5e\u6027\u540d\u65f6\u8fd4\u56de0\n    return key in target ? target[key] : 0\n  },\n  // \u901a\u8fc7\u4ee3\u7406\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u9a8c\u8bc1\u5411\u4e00\u4e2a\u5bf9\u8c61\u7684\u4f20\u503c\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u501f\u6b64\u5c55\u793a\u4e86 set handler \u7684\u4f5c\u7528\u3002\n  set: function (target, key, value) {\n    console.log('\u89e6\u53d1set:', { target, key, value })\n    if (key === 'price') {\n      if (value > 100) {\n        console.log(\"\u62a5\u4ef7\u8fc7\u9ad8\")\n        return true\n      }\n    }\n\n    // obj[prop] = value;\n    // return false; // \u5fc5\u987btrue \u624d\u6210\u529f\u8d4b\u503c\n    // \u7b49\u540c\u4e0b\u9762\n    return Reflect.set(target, key, value)\n  }\n})\n\nconsole.log('1:', proxyObj.name); // iphone\nconsole.log('2:', proxyObj.namex); // 0\nproxyObj.price = 666;\nconsole.log('3:', proxyObj.price) // 99\nproxyObj.price = 98;\nconsole.log('4:', proxyObj.price) // 98\n")),(0,o.kt)("p",null,"\u89e3\u6790\uff1a\n\u5f53\u6211\u4eec\u8bbf\u95ee\u5bf9\u8c61\u5185\u539f\u672c\u5b58\u5728\u7684\u5c5e\u6027\u65f6\uff0c\u4f1a\u8fd4\u56de\u539f\u6709\u5c5e\u6027\u5185\u5bf9\u5e94\u7684\u503c;\n\u5982\u679c\u8bd5\u56fe\u8bbf\u95ee\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u65f6\uff0c\u4f1a\u8fd4\u56de0 \uff0c\u5373\u6211\u4eec\u8bbf\u95ee proxyObj.a \u65f6\uff0c\u539f\u672c\u5bf9\u8c61\u4e2d\u6709 a \u5c5e\u6027\uff0c\u56e0\u6b64\u4f1a\u8fd4\u56de 1 \uff0c\n\u5f53\u6211\u4eec\u8bd5\u56fe\u8bbf\u95ee\u5bf9\u8c61\u4e2d\u4e0d\u5b58\u5728\u7684 b \u5c5e\u6027\u65f6\uff0c\u4e0d\u4f1a\u518d\u8fd4\u56de undefined \uff0c\u800c\u662f\u8fd4\u56de\u4e86 0 ;"),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u8bd5\u56fe\u53bb\u8bbe\u7f6e\u65b0\u7684\u5c5e\u6027\u503c\u7684\u65f6\u5019\uff0c\u603b\u662f\u4f1a\u8fd4\u56de 888\uff0c\u56e0\u6b64\uff0c\u5373\u4fbf\u6211\u4eec\u5bf9 proxyObj.a \u8d4b\u503c\u4e3a 666 \uff0c\u4f46\u662f\u5e76\u4e0d\u4f1a\u751f\u6548\uff0c\u4f9d\u65e7\u4f1a\u8fd4\u56de 888"),(0,o.kt)("h3",{id:"\u4f18\u70b9\u7279\u6027"},"\u4f18\u70b9/\u7279\u6027"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u533a\u522b1:proxy \u5bf9\u6574\u4e2a\u5bf9\u8c61\u8fdb\u884c\u76d1\u542c\u7684\u65b9\u5f0f\u6bd4defineProperty\u662f\u5faa\u73af\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u76d1\u542c\u6027\u80fd\u597d")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"proxy\u53bb\u4ee3\u7406\u4e86ob\u4e0d\u4f1a\u6c61\u67d3\u539f\u5bf9\u8c61\uff08\u5173\u952e\u533a\u522b\uff09,\u4ed6\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4ee3\u7406\u5bf9\u8c61\u4e0d\u4f1a\u5bf9\u539f\u5bf9\u8c61ob\u8fdb\u884c\u6539\u52a8")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"proxy \u53ef\u4ee5\u76d1\u542c\u5bf9\u8c61\u65b0\u589e\u5c5e\u6027\uff0cdefineProperty\u4e0d\u53ef\u4ee5;\u52ab\u6301\u6570\u636e\u7684get,set,deleteProperty,has,own")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"proxy \u53ef\u4ee5\u4e14\u4e0d\u9700\u8981\u5bf9\u6570\u7ec4\u7684\u65b9\u6cd5\u8fdb\u884c\u91cd\u8f7d,defineProperty \u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u4e0b\u6807\u6539\u53d8\u503c\u7684\u53d8\u5316\uff0c")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Proxy \u5bf9\u8c61\u80fd\u591f\u5229\u7528 handler \u9677\u9631\u5728 get\u3001set \u65f6\u6355\u83b7\u5230\u4efb\u4f55\u53d8\u52a8\uff0c\u4e5f\u80fd\u76d1\u542c\u5bf9\u6570\u7ec4\u7d22\u5f15\u7684\u6539\u52a8\u4ee5\u53ca \u6570\u7ec4 length \u7684\u6539\u52a8")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5229\u7528 WeakMap,Map,Set \u6765\u5b9e\u73b0\u4f9d\u8d56\u6536\u96c6"))),(0,o.kt)("h2",{id:"\u4e0d\u540c\u70b9"},"\u4e0d\u540c\u70b9"),(0,o.kt)("h3",{id:"\u4e0d\u540c\u70b91defineproperty\u76d1\u542c\u6570\u7ec4defineproperty\u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u957f\u5ea6\u53d8\u5316-proxy\u53ef\u4ee5\u76d1\u542c"},"\u4e0d\u540c\u70b91:defineProperty\u76d1\u542c\u6570\u7ec4,defineProperty\u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u957f\u5ea6\u53d8\u5316-Proxy\u53ef\u4ee5\u76d1\u542c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  name: 'js',\n  age: 1,\n  level: [1, 2, 3, 4, 5, 6]\n}\n\nfunction defineProperty(obj, key, val) {\n  // obj\u7684\u5c5e\u6027\u4e5f\u53ef\u80fd\u662f\u5bf9\u8c61\u6216\u8005\u6570\u7ec4,\u8fd9\u91cc\u9012\u5f52\u5b9e\u73b0\u975e\u5e38\u7b80\u5355,\u53ea\u9700\u8981\u628a`observer`\u51fd\u6570\u5728`defineProperty` \u91cd\u65b0\u8c03\u7528\u4e00\u904d\u5373\u53ef,\n  // \u5728\u6b64\u5224\u65ad\u4f20\u8fc7\u6765\u7684`val`\u662f\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61,\u5982\u679c\u662f\u4e00\u4e2a\u5bf9\u8c61\u5728\u904d\u5386\u4e0b\u8fd9\u4e2a\u5bf9\u8c61\u8fdb\u884c\u54cd\u5e94\u5f0f\u6536\u96c6\n  observer(val)\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get() {\n      // \u8bfb\u53d6\u65b9\u6cd5\n      console.log('test1:\u8bfb\u53d6', key, '\u6210\u529f')\n      return val\n    },\n    set(newVal) {\n      // \u8d4b\u503c\u76d1\u542c\u65b9\u6cd5\n      if (newVal === val) return\n      // observer(newVal)\n      console.log('test1:\u76d1\u542c\u8d4b\u503c\u6210\u529f', key, 'key:', newVal)\n      val = newVal\n      // \u53ef\u4ee5\u6267\u884c\u6e32\u67d3\u64cd\u4f5c\n    }\n  })\n}\n\nfunction observer(obj) {\n  if (typeof obj !== 'object' || obj == null) {\n    return\n  }\n\n  for (const key in obj) {\n    // \u7ed9\u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u90fd\u8bbe\u7f6e\u54cd\u5e94\u5f0f\n    defineProperty(obj, key, obj[key])\n  }\n}\n\nobserver(obj)\n// \u8fd9\u91ccpush \u5e76\u4e0d\u80fd\u5b9e\u73b0\u76d1\u542c\nobj.level.push(10)\nobj.level[0] = 100\nobj.name = 'java'\n\nconst arr = [1, 2, 3, 4]\nconsole.log('test:', Object.getOwnPropertyDescriptors(arr))\n/*\n\u53ef\u89c1\uff1aconfigurable: false,\u6240\u4ee5\u9020\u6210\u4e86pop,push\u8fd9\u79cd\u4f1a\u4fee\u6539\u539f\u6570\u7ec4\u957f\u5ea6\u7684\u503c\u90fd\u65e0\u6cd5\u88ab\u76d1\u542c\u5230\ntest: {\n  '0': { value: 1, writable: true, enumerable: true, configurable: true },\n  '1': { value: 2, writable: true, enumerable: true, configurable: true },\n  '2': { value: 3, writable: true, enumerable: true, configurable: true },\n  '3': { value: 4, writable: true, enumerable: true, configurable: true },\n  length: { value: 4, writable: true, enumerable: false, configurable: false }\n}\n* */\n")),(0,o.kt)("p",null,"\u4f7f\u7528Proxy\u76d1\u542c\u6570\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let handler = {\n  set(target, key, value) {\n    // \u5982\u679c\u662f\u6570\u7ec4\uff0c\u5ffd\u7565\u66f4\u65b0length\n    if (key === 'length') return true\n    console.log('\u76d1\u542c\u8d4b\u503c\u6210\u529f', key, 'key:', value)\n    return Reflect.set(target, key, value)\n  },\n  get(target, key) {\n    if (typeof target[key] === 'object') {\n      return new Proxy(target[key], handler)\n    }\n    console.log('\u8bfb\u53d6', key, '\u6210\u529f', target[key])\n    return Reflect.get(target, key)\n  }\n}\n\nconst list2 = [1, 2, 3, 4]\nconst proxyFn2 = new Proxy(list2, handler)\nproxyFn2.push(1)\nlist2[0] = 100\n")),(0,o.kt)("h3",{id:"\u90a3\u6211\u4eec\u600e\u4e48\u6765\u5b9e\u73b0\u5bf9\u6570\u7ec4\u7684\u76d1\u542c\u5462\u7b54\u6848\u5c31\u662f\u91cd\u5199array\u7684\u539f\u578b\u65b9\u6cd5"},"\u90a3\u6211\u4eec\u600e\u4e48\u6765\u5b9e\u73b0\u5bf9\u6570\u7ec4\u7684\u76d1\u542c\u5462?\u7b54\u6848\u5c31\u662f\u91cd\u5199Array\u7684\u539f\u578b\u65b9\u6cd5"),(0,o.kt)("p",null,"\u539f\u7406\u5c31\u662f\u91cd\u5199\u6570\u7ec4\u7684\u4e03\u4e2a\u539f\u59cb\u65b9\u6cd5,\u5f53\u4f7f\u7528\u8005\u6267\u884c\u8fd9\u4e9b\u65b9\u6cd5\u65f6,\u6211\u4eec\u5c31\u53ef\u4ee5\u76d1\u542c\u5230\u6570\u636e\u7684\u53d8\u5316,\u7136\u540e\u505a\u4e9b\u8ddf\u65b0\u64cd\u4f5c,\u4e0b\u9762\u6211\u4eec\u5728observer\u4e2d\u52a0\u4e0a\u5173\u4e8e\u5bf9\u6570\u7ec4\u7684\u5224\u65ad"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const originalProto = Array.prototype;\nconst arrayProto = Object.create(originalProto); // \u5148\u514b\u9686\u4e00\u4efdArray\u7684\u539f\u578b\u51fa\u6765\nconst methodsToPatch = [\n    'push',\n    'pop',\n    'shift',\n    'unshift',\n    'splice',\n    'sort',\n    'reverse'\n]\n\nmethodsToPatch.forEach(method => {\n    arrayProto[method] = function () {\n        // \u6267\u884c\u539f\u59cb\u64cd\u4f5c\n        originalProto[method].apply(this, arguments)\n        console.log('\u76d1\u542c\u8d4b\u503c\u6210\u529f', method)\n    }\n})\n\nfunction observer(obj) {\n    if (typeof obj !== 'object' || obj == null) {\n        return\n    }\n    if (Array.isArray(obj)) {\n        // /*\n        // \u5982\u679c\u662f\u6570\u7ec4, \u91cd\u5199\u539f\u578b\n        obj.__proto__ = arrayProto\n        // \u4f20\u5165\u7684\u6570\u636e\u53ef\u80fd\u662f\u591a\u7ef4\u5ea6\u7684,\u4e5f\u9700\u8981\u6267\u884c\u54cd\u5e94\u5f0f\n        for (let i = 0; i < obj.length; i++) {\n            observer(obj[i])\n        }\n        // */\n    } else {\n        for (const key in obj) {\n            // \u7ed9\u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u90fd\u8bbe\u7f6e\u54cd\u5e94\u5f0f\n            defineProperty(obj, key, obj[key])\n        }\n    }\n}\n\nfunction defineProperty(obj, key, val){\n    // obj\u7684\u5c5e\u6027\u4e5f\u53ef\u80fd\u662f\u5bf9\u8c61\u6216\u8005\u6570\u7ec4,\u8fd9\u91cc\u9012\u5f52\u5b9e\u73b0\u975e\u5e38\u7b80\u5355,\u53ea\u9700\u8981\u628a`observer`\u51fd\u6570\u5728`defineProperty` \u91cd\u65b0\u8c03\u7528\u4e00\u904d\u5373\u53ef,\n    // \u5728\u6b64\u5224\u65ad\u4f20\u8fc7\u6765\u7684`val`\u662f\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61,\u5982\u679c\u662f\u4e00\u4e2a\u5bf9\u8c61\u5728\u904d\u5386\u4e0b\u8fd9\u4e2a\u5bf9\u8c61\u8fdb\u884c\u54cd\u5e94\u5f0f\u6536\u96c6\n    observer(val)\n    Object.defineProperty(obj, key, {\n        enumerable: true,\n        configurable: true,\n        get() {\n            // \u8bfb\u53d6\u65b9\u6cd5\n            console.log('\u8bfb\u53d6', key, '\u6210\u529f')\n            return val\n        },\n        set(newVal) {\n            // \u8d4b\u503c\u76d1\u542c\u65b9\u6cd5\n            if (newVal === val) return\n            // observer(newVal)\n            console.log('\u76d1\u542c\u8d4b\u503c\u6210\u529f', newVal)\n            val = newVal\n            // \u53ef\u4ee5\u6267\u884c\u6e32\u67d3\u64cd\u4f5c\n        }\n    })\n}\n\nlet obj3 = {\n    name:'js',\n    age:1,\n    item:{\n     name:'golang'\n    },\n    level:[1,2,3,4,5,6]\n}\n\nobserver(obj3)\nobj3.name = 'java'\nobj3.item.name = 'test'\nconsole.log('\u6570\u7ec4\u76d1\u542c\u6d4b\u8bd5o-----\x3e')\nobj3.level.push(10)\n/*\n*\n\u6570\u7ec4\u76d1\u542c\u6d4b\u8bd5o-----\x3e\n\u8bfb\u53d6 level \u6210\u529f\n\u76d1\u542c\u8d4b\u503c\u6210\u529f push\n* */\n")),(0,o.kt)("h3",{id:"\u76f8\u540c\u70b9\u90fd\u4e0d\u652f\u6301\u5d4c\u5957"},"\u76f8\u540c\u70b9:\u90fd\u4e0d\u652f\u6301\u5d4c\u5957"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u539f\u59cb\u6570\u636e\nconst data = {\n  name: 'Jane',\n  age: 21,\n  obj: {\n    name: 'Tom'\n  }\n}\n\n// defineProperty\nObject.keys(data).forEach(key => {\n  let oldValue = data[key]\n  Object.defineProperty(data, key, {\n    get() {\n      console.log('%c \u8c03\u7528get', 'color: green', key)\n      return oldValue\n    },\n    set(value) {\n      console.log('%c \u8c03\u7528set', 'color: blue')\n      oldValue = value\n    }\n  })\n})\n\n// console.log(data.obj.name)\ndata.obj.name = 'Tom01'    // \u5e76\u4e0d\u4f1a\u89e6\u53d1set\ndata.name = 'Chen' // \u89e6\u53d1 set\nconsole.log(data.obj.name)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u539f\u59cb\u6570\u636e\nconst data = {\n  name: 'Jane',\n  age: 21,\n  obj: {\n    name: 'Tom'\n  }\n}\n\n// proxy\nconst proxyData = new Proxy(data, {\n  get(target, prop) {\n    console.log('%c \u8c03\u7528get', 'color: green', prop)\n    return Reflect.get(target, prop)\n  },\n  set(target, prop, value) {\n    console.log('%c \u8c03\u7528set', 'color: blue')\n    return Reflect.set(target, prop, value)\n  },\n  deleteProperty(target, prop) {\n    console.log('%c \u8c03\u7528delete', 'color: red')\n    Reflect.deleteProperty(target, prop)\n    return true\n  }\n})\n\n// console.log(proxyData.obj.name)\nproxyData.obj.name = 'Tom02' // \u5e76\u4e0d\u4f1a\u89e6\u53d1set\nproxyData.name = 'Chen' // \u89e6\u53d1 set\nconsole.log('1:',proxyData.obj.name)\n")))}y.isMDXComponent=!0}}]);