"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4997],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>h});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?t.createElement(h,l(l({ref:n},s),{},{components:r})):t.createElement(h,l({ref:n},s))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53387:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const i={},l=void 0,o={unversionedId:"structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",id:"structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",title:"\u6811\u8f6carray",description:"\u65b9\u5f0f1\uff1a\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4",source:"@site/programming-tech/structure-algorithm/07-\u9012\u5f52/05-\u6811\u8f6carray.md",sourceDirName:"structure-algorithm/07-\u9012\u5f52",slug:"/structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",permalink:"/structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/07-\u9012\u5f52/05-\u6811\u8f6carray.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"structureAlgorithm",previous:{title:"array\u8f6c\u6811",permalink:"/structure-algorithm/\u9012\u5f52/array\u8f6c\u6811"},next:{title:"\u961f\u5217-\u6808\u548c\u961f\u5217\u7684\u533a\u522b",permalink:"/structure-algorithm/\u961f\u5217\u548c\u53cc\u7aef\u961f\u5217/\u961f\u5217-\u6808\u548c\u961f\u5217\u7684\u533a\u522b"}},c={},u=[{value:"\u65b9\u5f0f1\uff1a\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4",id:"\u65b9\u5f0f1\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4",level:2},{value:"\u65b9\u5f0f2",id:"\u65b9\u5f0f2",level:2}],s={toc:u},p="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b9\u5f0f1\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4"},"\u65b9\u5f0f1\uff1a\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4"),(0,a.kt)("p",null,"\u6b64\u4ee3\u7801\u4f1a\u5c06 testArr \u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\u9012\u5f52\u5730\u904d\u5386\uff0c\u5e76\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230 result \u6570\u7ec4\u4e2d\u3002\u5982\u679c\u5f53\u524d\u5bf9\u8c61\u6709 children \u5c5e\u6027\uff0c\u5219\u9012\u5f52\u5730\u8c03\u7528 flatten \u51fd\u6570\u6765\u5904\u7406\u5b50\u8282\u70b9\uff0c\u5e76\u4f7f\u7528\u5c55\u5f00\u8fd0\u7b97\u7b26\u5c06\u7ed3\u679c\u6dfb\u52a0\u5230 result \u6570\u7ec4\u4e2d\u3002\u6700\u7ec8\u8fd4\u56de result \u6570\u7ec4\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5b9e\u73b0\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\uff0c\u5176\u4e2d n \u662f\u6241\u5e73\u5316\u540e\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u56e0\u6b64\u6027\u80fd\u8f83\u597d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const testArr = [{\n  "id": 1,\n  "p_id": 0,\n  "name": "\u9996\u9875",\n  "children": [{\n    "id": 4,\n    "p_id": 1,\n    "name": "\u6743\u9650\u7ba1\u7406",\n    "children": [{\n      "id": 6,\n      "p_id": 4,\n      "name": "\u89d2\u8272\u5217\u8868",\n      "children": []\n    }]\n  }]\n},\n{\n  "id": 2,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u7ba1\u7406",\n  "children": []\n},\n{\n  "id": 3,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u5217\u8868",\n  "children": []\n}]\n\nfunction flatten(arr) {\n  const result = [];\n\n  arr.forEach(item => {\n    result.push(item);\n    if (item.children && item.children.length) {\n      result.push(...flatten(item.children));\n    }\n  });\n\n  return result;\n}\n\nconsole.log(flatten(testArr))\n')),(0,a.kt)("h2",{id:"\u65b9\u5f0f2"},"\u65b9\u5f0f2"),(0,a.kt)("p",null,"\u8fed\u4ee3\u65b9\u5f0f\u6241\u5e73\u5316\u5bf9\u8c61\u6570\u7ec4\u7684\u5b9e\u73b0\uff0c\u8be5\u5b9e\u73b0\u4f7f\u7528\u4e00\u4e2a\u8f85\u52a9\u6808\u6765\u4fdd\u5b58\u5f85\u5904\u7406\u7684\u8282\u70b9\uff0c\u53ea\u8981\u6808\u4e0d\u4e3a\u7a7a\uff0c\u5c31\u5faa\u73af\u5904\u7406\uff1a"),(0,a.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\uff0c\u5176\u4e2d n \u662f\u6241\u5e73\u5316\u540e\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u4f46\u662f\u5b83\u4f7f\u7528\u8fed\u4ee3\u800c\u4e0d\u662f\u9012\u5f52\uff0c\u56e0\u6b64\u907f\u514d\u4e86\u51fd\u6570\u8c03\u7528\u6808\u6ea2\u51fa\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a\u5b9e\u73b0\u5728\u5904\u7406\u5d4c\u5957\u5f88\u6df1\u7684\u5bf9\u8c61\u6570\u7ec4\u65f6\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a\u6808\u7a7a\u95f4\u4e0d\u8db3\u800c\u51fa\u73b0\u6027\u80fd\u95ee\u9898\uff0c\u56e0\u6b64\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u6d4b\u8bd5\u548c\u4f18\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const testArr = [{\n  "id": 1,\n  "p_id": 0,\n  "name": "\u9996\u9875",\n  "children": [{\n    "id": 4,\n    "p_id": 1,\n    "name": "\u6743\u9650\u7ba1\u7406",\n    "children": [{\n      "id": 6,\n      "p_id": 4,\n      "name": "\u89d2\u8272\u5217\u8868",\n      "children": []\n    }]\n  }]\n},\n{\n  "id": 2,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u7ba1\u7406",\n  "children": []\n},\n{\n  "id": 3,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u5217\u8868",\n  "children": []\n}]\n\nfunction flatten(arr) {\n  const result = [];\n  const stack = [...arr];\n\n  while (stack.length) {\n    const item = stack.pop();\n    result.push(item);\n    if (item.children && item.children.length) {\n      stack.push(...item.children.reverse());\n    }\n  }\n\n  return result;\n}\n\nconsole.log(flatten(testArr))\n')))}m.isMDXComponent=!0}}]);