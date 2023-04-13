"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createContext({}),p=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(f.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=p(n),g=a,d=i["".concat(f,".").concat(g)]||i[g]||u[g]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l[i]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},c=void 0,l={unversionedId:"Vue/Reactivity\u7b80\u5355\u4f8b\u5b50",id:"Vue/Reactivity\u7b80\u5355\u4f8b\u5b50",title:"Reactivity\u7b80\u5355\u4f8b\u5b50",description:"\u5f53\u6211\u628a text \u7684\u503c\u6539\u53d8\u540e\uff0c\u624b\u52a8\u89e6\u53d1\u4e86\u4e00\u4e0beffect()\uff0c\u9875\u9762\u4e0a\u7684\u503c\u5c31\u66f4\u65b0\u4e86\uff0c\u8fd9\u54cd\u5e94\u5f0f\u600e\u4e48\u8fd8\u8981\u624b\u52a8\u89e6\u53d1\uff1f",source:"@site/programming-tech/Vue/12-Reactivity\u7b80\u5355\u4f8b\u5b50.md",sourceDirName:"Vue",slug:"/Vue/Reactivity\u7b80\u5355\u4f8b\u5b50",permalink:"/Vue/Reactivity\u7b80\u5355\u4f8b\u5b50",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/12-Reactivity\u7b80\u5355\u4f8b\u5b50.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"docs",previous:{title:"\u54cd\u5e94\u5f0f\u539f\u7406\u4e0ereactive",permalink:"/Vue/\u54cd\u5e94\u5f0f\u539f\u7406\u4e0ereactive"},next:{title:"patch",permalink:"/Vue/patch"}},f={},p=[{value:"\u4e0d\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50",id:"\u4e0d\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50",level:3},{value:"\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50",id:"\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50",level:3},{value:"\u7c7b\u4f3c\u5b9e\u73b0",id:"\u7c7b\u4f3c\u5b9e\u73b0",level:2},{value:"\u7b2c1\u6b65,\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u5bf9\u8c61",id:"\u7b2c1\u6b65\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u5bf9\u8c61",level:3},{value:"\u7b2c2\u6b65,\u6536\u96c6\u4f9d\u8d56(\u53d1\u5e03\u8ba2\u9605)",id:"\u7b2c2\u6b65\u6536\u96c6\u4f9d\u8d56\u53d1\u5e03\u8ba2\u9605",level:3},{value:"get\u51fd\u6570\u8c03\u7528\u8ffd\u8e2a\u5668track\u5e76\u4f20\u5165(person,name)",id:"get\u51fd\u6570\u8c03\u7528\u8ffd\u8e2a\u5668track\u5e76\u4f20\u5165personname",level:3},{value:"\u63a5\u4e0b\u6765\u662f\u89e6\u53d1\u7684\u8fc7\u7a0b",id:"\u63a5\u4e0b\u6765\u662f\u89e6\u53d1\u7684\u8fc7\u7a0b",level:3}],s={toc:p},i="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u6211\u628a text \u7684\u503c\u6539\u53d8\u540e\uff0c\u624b\u52a8\u89e6\u53d1\u4e86\u4e00\u4e0beffect()\uff0c\u9875\u9762\u4e0a\u7684\u503c\u5c31\u66f4\u65b0\u4e86\uff0c\u8fd9\u54cd\u5e94\u5f0f\u600e\u4e48\u8fd8\u8981\u624b\u52a8\u89e6\u53d1\uff1f"),(0,a.kt)("p",null,"\u89e3\u51b3\u5c31\u662f\u628a\u6240\u6709\u5f15\u7528\u4e86text\u8fd9\u4e2a\u503c\u7684effect\u770b\u4f5c\u4e3atext\u7684\u4f9d\u8d56\u6536\u96c6\u8d77\u6765\uff0c\u5f53\u6211\u4eec\u6539\u53d8text\u7684\u503c\u7684\u65f6\u5019\uff0c\u628a\u8fd9\u4e9b\u4f9d\u8d56\u90fd\u6267\u884c\u4e00\u904d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n</head>\n\n<body>\n  <script>\n    // \u6302\u8f7d\u5230 window \u4e0a\u65b9\u4fbf\u6f14\u793a\n    window.text = \'\'\n    window.effect = effect\n\n    function effect() {\n      const root = document.getElementById(\'app\')\n      root.innerText = window.text\n    }\n  <\/script>\n  <div id="app">Hello!</div>\n</body>\n\n</html>\n')),(0,a.kt)("h3",{id:"\u4e0d\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50"},"\u4e0d\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u526f\u4f5c\u7528\u51fd\u6570\uff0c\u5982\u679cobj.name\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u4e2a\u51fd\u6570\u5c31\u4f1a\u81ea\u52a8\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"effect(() => {\n  document.body.innerHTML = obj.name;\n});\n\nsetTimeout(() => {\n  obj.name = 'Hello, w';\n}, 2000);\n")),(0,a.kt)("p",null,"effect \u526f\u4f5c\u7528\u51fd\u6570\u4e0d\u6b62\u4e00\u4e2a\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u6709\u4e2a\u6570\u7ec4\u53bb\u5b58\u653e\u6240\u6709\u7684\u526f\u4f5c\u7528\u51fd\u6570\uff0c\u5148\u7528 Set \u6765\u5b58\u653e\u597d\u4e86"),(0,a.kt)("p",null,"\u4ece\u4f7f\u7528\u4e0a\u6765\u770b effect \u5165\u53c2\u63a5\u6536\u7684\u662f\u4e00\u4e2a\u51fd\u6570 fn\uff0c\u6240\u4ee5 effect \u662f\u4e2a\u9ad8\u9636\u51fd\u6570\u3002\u5f53 obj \u89e6\u53d1 set \u65f6\u9700\u8981\u6267\u884c\u8fd9\u4e2a fn\uff0c\u6240\u4ee5 fn \u51fd\u6570\u9700\u8981\u66b4\u9732\u51fa\u6765\u4ee5\u4fbf\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5b58\u653e\u6240\u6709\u7684\u526f\u4f5c\u7528\n\u89e6\u53d1get\u7684\u65f6\u5019\u53bb\u6536\u96c6\uff0c\u89e6\u53d1set\u7684\u65f6\u5019\u53bb\u6267\u884c\uff0c\u8fd9\u79cd\u4f9d\u8d56\u6536\u96c6\u548c\u89e6\u53d1\u7684\u6a21\u5f0f\u4e5f\u662f\u6211\u4eec\u5e38\u8bf4\u7684\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u95ee\u9898\uff1a\n\u6211\u4eec\u53d1\u73b0\u867d\u7136 effect \u4e2d\u6ca1\u6709\u4f9d\u8d56 obj.age ,\u4f46\u5f53\u6211\u4eec\u6539\u53d8 obj.age \u65f6\uff0ceffect \u8fd8\u662f\u4f1a\u91cd\u65b0\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u7684\u54cd\u5e94\u5f0f\u7cfb\u7edf\u7684\u4f9d\u8d56\u6536\u96c6\u548c\u89e6\u53d1\u7684\u9897\u7c92\u5ea6\u4e0d\u591f\uff0c\u6211\u4eec\u73b0\u5728\u7684\u89e3\u51b3\u65b9\u6848\u662f\u53ea\u8981 obj \u91cc\u9762\u7684\u503c\u53d1\u751f\u53d8\u5316\u90fd\u4f1a\u89e6\u53d1\u526f\u4f5c\u7528\u7684\u66f4\u65b0\uff0c\u8fd9\u663e\u7136\u662f\u4e0d\u5bf9\u7684\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u6536\u96c6\u4f9d\u8d56\u65f6\uff0c\u5fc5\u987b\u7cbe\u786e\u5230 obj \u7684key\uff0c\u5927\u81f4\u7684\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u5982\u4e0b\u6240\u793a\uff1a\n\u5728 vue3 \u4e2d\uff0c\u4f7f\u7528\u7684\u662f WeakMap\u6765\u63cf\u8ff0\u8fd9\u4e00\u5173\u7cfb"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u63cf\u8ff0\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let data = {\n  name: 'js',\n};\n\nconst obj1 = new Proxy(data, {\n  get(target, key) {\n    return target[key];\n  },\n  set(target, key, val) {\n    target[key] = val;\n    console.log('\u76d1\u542c\u8d4b\u503c\u6210\u529f', key, 'val:', val)\n    // render();\n  },\n});\n\nobj1.name = 'java';\nconsole.log('\u5206\u5272\u7ebf\uff1a==============\u300b')\n\nlet activeEffect;\nlet effects = new Set();\nconst obj = new Proxy(data, {\n  get(target, key) {\n    if (activeEffect) {\n      // \u6536\u96c6\u526f\u4f5c\u7528\n      effects.add(activeEffect);\n    }\n    return target[key];\n  },\n  set(target, key, val) {\n    target[key] = val;\n    //\u6267\u884c\u6240\u6709\u7684\u526f\u4f5c\u7528\n    effects.forEach((effect) => effect());\n  },\n});\n\nfunction effect(fn) {\n  activeEffect = fn;\n  fn();\n}\n\n// \u5f53 obj.name \u6539\u53d8\u7684\u65f6\u5019\uff0c\u5e0c\u671b effect\u53ef\u4ee5\u518d\u6b21\u88ab\u6267\u884c\neffect(() => {\n  console.log('\u6a21\u62dfdom\u66f4\u65b0===\u300b')\n  // document.body.innerHTML = obj.name;\n});\n\n// \u53ef\u4ee5\u5b58\u5728\u591a\u4e2aeffect\neffect(() => {\n  console.log('\u5f53\u524dobj:', obj.name);\n});\n\nsetTimeout(() => {\n  obj.name = 'hello world';\n}, 2000);\n")),(0,a.kt)("h3",{id:"\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50"},"\u5b8c\u5584\u7684\u526f\u4f5c\u7528\u4f8b\u5b50"),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u95ee\u9898\uff1a\u867d\u7136 effect \u4e2d\u6ca1\u6709\u4f9d\u8d56 obj.age ,\u4f46\u5f53\u6211\u4eec\u6539\u53d8 obj.age \u65f6\uff0ceffect \u8fd8\u662f\u4f1a\u91cd\u65b0\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u7684\u54cd\u5e94\u5f0f\u7cfb\u7edf\u7684\u4f9d\u8d56\u6536\u96c6\u548c\u89e6\u53d1\u7684\u9897\u7c92\u5ea6\u4e0d\u591f\uff0c\u6211\u4eec\u73b0\u5728\u7684\u89e3\u51b3\u65b9\u6848\u662f\u53ea\u8981 obj \u91cc\u9762\u7684\u503c\u53d1\u751f\u53d8\u5316\u90fd\u4f1a\u89e6\u53d1\u526f\u4f5c\u7528\u7684\u66f4\u65b0\uff0c\u8fd9\u663e\u7136\u662f\u4e0d\u5bf9\u7684\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u6536\u96c6\u4f9d\u8d56\u65f6\uff0c\u5fc5\u987b\u7cbe\u786e\u5230 obj \u7684key\uff0c\u5927\u81f4\u7684\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("p",null,"\u5728 vue3 \u4e2d\uff0c\u4f7f\u7528\u7684\u662f WeakMap\u6765\u63cf\u8ff0\u8fd9\u4e00\u5173\u7cfb"),(0,a.kt)("p",null,"Vue3 \u54cd\u5e94\u5f0f\u8bbe\u8ba1\u7684\u5de7\u5999\u4e4b\u5904\u5c31\u5728\u4e8e\u6b64\uff0c\u901a\u8fc7\u8fd9\u6837\u4e00\u79cd\u6570\u636e\u7ed3\u6784\u5c31\u628a\u6574\u4e2a\u54cd\u5e94\u5f0f\u7684\u4f9d\u8d56\u6536\u96c6\u4ee5\u53ca\u5bf9\u5e94\u5173\u7cfb\u63cf\u8ff0\u7684\u6e05\u6e05\u695a\u695a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let data = {\n  name: 'js',\n};\n\nlet activeEffect;\nlet effects = new WeakMap(); // \u5b58\u653e\u6240\u6709\u7684\u5bf9\u8c61\u53ca\u526f\u4f5c\u7528\u7684\u5173\u7cfb\n\nconst obj = new Proxy(data, {\n  get(target, key) {\n    // \u5224\u65ad\uff0c\u6709\u6ca1\u6709 target\u7684\u5173\u7cfb\u6811\n    let depsMap = effects.get(target);\n    //\u5982\u679c\u6ca1\u6709\u5c31\u521b\u5efa\uff0c\u4ee5\u5f53\u524d obj \u4e3a key\n    if (!depsMap) {\n      effects.set(target, (depsMap = new Map()));\n    }\n    // \u770b obj.xxx \u5177\u4f53\u7684key\u6709\u6ca1\u6709\u521b\u5efa\u4f9d\u8d56\u5173\u7cfb\n    let deps = depsMap.get(key);\n    // \u5982\u679c\u6ca1\u6709\u5c31\u521b\u5efa\n    if (!deps) {\n      depsMap.set(key, (deps = new Set()));\n    }\n    // \u5982\u679c\u6709\u4f9d\u8d56 \u5c31\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684 key\u4e0a\n    if (activeEffect) {\n      deps.add(activeEffect);\n    }\n    return target[key];\n  },\n  set(target, key, val) {\n    target[key] = val;\n    // \u4eceWeakMap\u4e2d\u53d6\u51fa\u5bf9\u5e94\u7684\u4f9d\u8d56\u5173\u7cfb\n    const depsMap = effects.get(target);\n    if (depsMap) {\n      // \u53d6\u51faobj\u5bf9\u5e94\u7684key\n      const effect = depsMap.get(key);\n      //\u5982\u679c\u6709\u526f\u4f5c\u7528\u51fd\u6570\u5c31\u6267\u884c\u6240\u6709\u7684\u526f\u4f5c\u7528\u51fd\u6570\n      effect && effect.forEach((fn) => fn());\n    }\n  },\n});\n\nfunction effect(fn) {\n  activeEffect = fn;\n  fn();\n}\n\neffect(() => {\n  console.log('\u6a21\u62dfdom\u66f4\u65b0===\u300b')\n  // document.body.innerHTML = obj.name;\n});\n\nsetTimeout(() => {\n  obj.age = 18;\n}, 2000);\n")),(0,a.kt)("h2",{id:"\u7c7b\u4f3c\u5b9e\u73b0"},"\u7c7b\u4f3c\u5b9e\u73b0"),(0,a.kt)("h3",{id:"\u7b2c1\u6b65\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u5bf9\u8c61"},"\u7b2c1\u6b65,\u8bbe\u7f6e\u54cd\u5e94\u5f0f\u5bf9\u8c61"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efaProxy\uff0c\u4f20\u5165\u5c06\u8981\u76d1\u542c\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7handler\u8bbe\u7f6e\u5bf9\u8c61\u7684\u76d1\u542c,\u901a\u8fc7get\u7b49\u51fd\u6570\u7684\u5f62\u53c2\u5bf9\u6570\u636e\u8fdb\u884c\u52ab\u6301\u5904\u7406\uff0c\u7136\u540e\u521b\u5efa\u4e24\u4e2aWeakMap\u5b9e\u4f8btoProxy,toRow\u6765\u8bb0\u5f55\u5f53\u524d\u5bf9\u8c61\u7684\u4ee3\u7406\u72b6\u6001\uff0c\u9632\u6b62\u91cd\u590d\u4ee3\u7406\uff0c\u5728set\u51fd\u6570\u4e2d\uff0c\u901a\u8fc7\u5224\u65ad\u5c5e\u6027\u7684\u7c7b\u522b\uff08\u65b0\u589e\u5c5e\u6027/\u4fee\u6539\u5c5e\u6027\uff09\u6765\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u64cd\u4f5c\u3002\n\u975evue3 \u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* ----------------\u54cd\u5e94\u5f0f\u5bf9\u8c61---------------- */\nfunction reactive(target) {\n    /* \u521b\u5efa\u54cd\u5e94\u5f0f\u5bf9\u8c61 */\n    return createReactiveObject(target);\n}\n/* \u9632\u6b62\u91cd\u590d\u8bbe\u7f6e\u4ee3\u7406(target,observer) */\nlet toProxy = new WeakMap();\n/* \u9632\u6b62\u91cd\u590d\u88ab\u4ee3\u7406(observer,target) */\nlet toRow = new WeakMap();\n/* \u8bbe\u7f6e\u54cd\u5e94\u76d1\u542c */\nfunction createReactiveObject(target) {\n    /* \u975e\u5bf9\u8c61\u6216\u88ab\u4ee3\u7406\u8fc7\u5219\u76f4\u63a5\u8fd4\u56de */\n    if (!isObject(target) || toRow.has(target)) return target;\n    /* \u5df2\u7ecf\u6709\u4ee3\u7406\u5219\u76f4\u63a5\u8fd4\u56de */\n    let proxy = toProxy.get(target);\n    if (proxy) {\n        return proxy;\n    }\n    /* \u76d1\u542c */\n    let handler = {\n        get(target, key) {\n            console.log(`get---key(${key})`);\n            let res = Reflect.get(target, key);\n            /* \u6dfb\u52a0\u8ffd\u8e2a */\n            track(target, key);\n            /* \u5982\u679c\u662f\u5bf9\u8c61\u5219\u7ee7\u7eed\u5f80\u4e0b\u8bbe\u7f6e\u54cd\u5e94 */\n            return isObject(res) ? reactive(res) : res;\n        },/* \u83b7\u53d6\u5c5e\u6027 */\n        set(target, key, val, receiver) {\n            console.log(`set---key(${key})`);\n            /* \u5224\u65ad\u662f\u5426\u4e3a\u65b0\u589e\u5c5e\u6027 */\n            let hasKey = hasOwn(target, key);\n            /* \u5b58\u50a8\u65e7\u503c\u7528\u4e8e\u6bd4\u5bf9 */\n            let oldVal = target[key];\n            let res = Reflect.set(target, key, val, receiver);\n            if (!hasKey) {\n                console.log(`\u65b0\u589e\u5c5e\u6027---key(${key})`);\n                /* \u8c03\u7528\u8ffd\u8e2a\u5668,\u7ed1\u5b9a\u65b0\u589e\u5c5e\u6027 */\n                track(target, key);\n                /* \u8c03\u7528\u89e6\u53d1\u5668,\u66f4\u6539\u89c6\u56fe */\n                trigger(target, key);\n            } else if (val !== oldVal) {\n                console.log(`\u4fee\u6539\u5c5e\u6027---key(${key})`);\n                trigger(target, key);\n            }\n            return res;\n        },/* \u4fee\u6539\u5c5e\u6027 */\n        deleteProperty(target, key) {\n            console.log(`delete---key(${key})`);\n            let res = Reflect.deleteProperty(target, key);\n            return res;\n        }/* \u5220\u9664\u5c5e\u6027 */\n    }\n    /* \u521b\u5efa\u4ee3\u7406 */\n    let observer = new Proxy(target, handler);\n    /* \u8bb0\u5f55\u4e0etarget\u7684\u8054\u7cfb */\n    toProxy.set(target, observer);\n    toRow.set(observer, target);\n    return observer;\n}\n")),(0,a.kt)("h3",{id:"\u7b2c2\u6b65\u6536\u96c6\u4f9d\u8d56\u53d1\u5e03\u8ba2\u9605"},"\u7b2c2\u6b65,\u6536\u96c6\u4f9d\u8d56(\u53d1\u5e03\u8ba2\u9605)"),(0,a.kt)("p",null,"\u6bcf\u6b21\u5411effect\u51fd\u6570\u4f20\u5165\u4e00\u4e2afun----console.log(person.name)\u540e\uff0c\u4f1a\u5148\u6267\u884c\u4e00\u904drun\u51fd\u6570\uff0c\u5c06effect\u63a8\u5165\u6808\u4e2d\uff0c\u7136\u540e\u6267\u884cfun\uff0c\u5728\u6267\u884cfun\u7684\u8fc7\u7a0b\u4e2d,\u4f1a\u8bfb\u53d6person\u5bf9\u8c61\uff0c\u8fdb\u800c\u89e6\u53d1get\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* \u4e8b\u4ef6\u6808 */\nlet effectStack = [];\n/* ----effect\u51fd\u6570---- */\nfunction effect(fun) {\n    /* \u5c06fun\u538b\u5165\u6808 */\n    let effect = createReactiveEffect(fun);\n    /* \u521d\u59cb\u5316\u6267\u884c\u4e00\u6b21 */\n    effect();//\u5b9e\u9645\u4e0a\u662f\u8fd0\u884crun\n}\nfunction createReactiveEffect(fun) {\n    /* \u521b\u5efa\u54cd\u5e94\u5f0feffect */\n    let effect = function () {\n        return run(effect, fun);\n    }\n    return effect;\n}\nfunction run(effect, fun) {\n    /* \u9632\u6b62\u62a5\u9519\u5bfc\u81f4\u6808\u5185\u5143\u7d20\u65e0\u6cd5\u5f39\u51fa */\n    try {\n        effectStack.push(effect);\n        fun();\n    } finally {\n        effectStack.pop();\n    }\n}\n")),(0,a.kt)("h3",{id:"get\u51fd\u6570\u8c03\u7528\u8ffd\u8e2a\u5668track\u5e76\u4f20\u5165personname"},"get\u51fd\u6570\u8c03\u7528\u8ffd\u8e2a\u5668track\u5e76\u4f20\u5165(person,name)"),(0,a.kt)("p",null,"\u5728track\u4e2d\u5148\u83b7\u53d6\u6808\u9876\u5143\u7d20\uff0c\u4e5f\u5c31\u662f\u521a\u521a\u89e6\u53d1\u7684fun,\u5047\u8bbe\u5f53\u524dtargetsMap\u662f\u7a7a\u7684\uff0c\u90a3\u4e48\u6b64\u65f6\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6620\u5c04target->new Map(),\u6b64\u65f6depsMap\u5fc5\u7136\u4e5f\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6620\u5c04\uff0c\u628akey\u6620\u5c04\u5230new Set(),\u7136\u540e\u5411key\u5bf9\u5e94\u7684deps\u4e2d\u653e\u5165effect\uff0c\u6b64\u65f6\uff0cname\u548cfun\u51fd\u6570\u4e4b\u95f4\u7684\u7ed1\u5b9a\u5df2\u7ecf\u5b9e\u73b0\uff0c\u6267\u884c\u5b8c\u540eeffectStack\u5c06\u4f1a\u628afun\u51fd\u6570\u5f39\u51fa\uff0c\u9632\u6b62\u8d8a\u5806\u8d8a\u591a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* \u76ee\u6807Map */\nlet targetsMap = new WeakMap();\n/* ----\u8ffd\u8e2a\u5668---- */\nfunction track(target, key) {\n    /* \u83b7\u53d6\u89e6\u53d1track\u7684\u4e8b\u4ef6 */\n    let effect = effectStack[effectStack.length - 1];\n    if (effect) {\n        /* \u83b7\u53d6\u4ee5target\u4f5c\u4e3a\u6807\u8bc6\u7684depsMap */\n        let depsMap = targetsMap.get(target);\n        if (!depsMap) {\n            /* \u5982\u679c\u4e0d\u5b58\u5728\u5c31\u521b\u5efa\u4e00\u4e2a\u65b0Map */\n            targetsMap.set(target, depsMap = new Map());\n        }\n        /* \u83b7\u53d6\u4ee5key\u4e3a\u6807\u8bc6\u7684deps */\n        let deps = depsMap.get(key);\n        if (!deps) {\n            depsMap.set(key, deps = new Set());\n        }\n        /* \u5411deps\u4e2d\u52a0\u5165\u4e8b\u4ef6 */\n        if (!deps.has(effect)) {\n            deps.add(effect);\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"\u63a5\u4e0b\u6765\u662f\u89e6\u53d1\u7684\u8fc7\u7a0b"},"\u63a5\u4e0b\u6765\u662f\u89e6\u53d1\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u5f53\u6bcf\u6b21\u8fdb\u884c\u7c7b\u4f3cperson.name='tom'\u8fd9\u6837\u7684\u6539\u503c\u64cd\u4f5c\u65f6"),(0,a.kt)("p",null,"\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u7684set\u51fd\u6570\uff0cset\u51fd\u6570\u5bf9\u6bd4\u5c5e\u6027\u7684\u65b0\u65e7\u503c\u540e\u8c03\u7528trigger\u51fd\u6570\u5c06(person,name)\u4f20\u5165\uff0ctrigger\u6839\u636e\u4e24\u4e2a\u4f20\u5165\u503c\u7ed3\u5408targetsMap->depsMap->deps\u7684\u987a\u5e8f\u627e\u5230name\u5bf9\u5e94\u7684\u4e8b\u4ef6\u6570\u7ec4\uff0c\u7136\u540e\u6267\u884c\u6240\u6709\u4e8b\u4ef6\u8fbe\u5230\u54cd\u5e94\u66f4\u65b0\u7684\u76ee\u7684\uff0c\u81f3\u6b64\uff0c\u7b80\u5316\u7248\u7684vue3\u54cd\u5e94\u673a\u5236\u5c31\u5b9e\u73b0\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* ----\u89e6\u53d1\u5668---- */\nfunction trigger(target, key) {\n    /* \u83b7\u53d6depsMap */\n    let depsMap = targetsMap.get(target);\n    if (depsMap) {\n        /* \u83b7\u53d6deps */\n        let deps = depsMap.get(key);\n        /* \u6267\u884cdeps\u6570\u7ec4\u4e2d\u6240\u6709\u7684\u4e8b\u4ef6 */\n        deps.forEach(effect => {\n            effect();\n        });\n    }\n}\n")))}u.isMDXComponent=!0}}]);