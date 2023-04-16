"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4997],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(h,l(l({ref:e},u),{},{components:t})):r.createElement(h,l({ref:e},u))}));function h(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[d]="string"==typeof n?n:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53387:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},l=void 0,o={unversionedId:"structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",id:"structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",title:"\u6811\u8f6carray",description:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386",source:"@site/programming-tech/structure-algorithm/07-\u9012\u5f52/05-\u6811\u8f6carray.md",sourceDirName:"structure-algorithm/07-\u9012\u5f52",slug:"/structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",permalink:"/structure-algorithm/\u9012\u5f52/\u6811\u8f6carray",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/07-\u9012\u5f52/05-\u6811\u8f6carray.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"structureAlgorithm",previous:{title:"array\u8f6c\u6811",permalink:"/structure-algorithm/\u9012\u5f52/array\u8f6c\u6811"},next:{title:"\u5b57\u7b26\u4e32\u67e5\u627e",permalink:"/structure-algorithm/\u5b57\u7b26\u4e32/\u5b57\u7b26\u4e32\u67e5\u627e"}},c={},s=[{value:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386",id:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386",level:2},{value:"\u65b9\u5f0f1\uff1a\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4",id:"\u65b9\u5f0f1\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4",level:2},{value:"\u65b9\u5f0f2",id:"\u65b9\u5f0f2",level:2}],u={toc:s},d="wrapper";function p(n){let{components:e,...t}=n;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"),(0,a.kt)("p",null,"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u7b97\u6cd5\u4f1a\u4ece\u6307\u5b9a\u7684\u7b2c\u4e00\u4e2a\u9876\u70b9\u5f00\u59cb\u904d\u5386\u56fe\uff0c\u5148\u8bbf\u95ee\u5176\u6240\u6709\u7684\u90bb\u70b9\uff08\u76f8\u90bb\u9876\u70b9\uff09\uff0c\u5c31\u50cf\u4e00\u6b21\u8bbf\u95ee\u56fe\u7684\u4e00\u5c42\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u5c31\u662f\u5148\u5bbd\u540e\u6df1\u5730\u8bbf\u95ee\u9876\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const departArrTest = [{\n    id: 1,\n    name: \'\u90e8\u95e81\',\n    pid: 0,\n    children: [{\n        "id": 2,\n        "name": "\u90e8\u95e82",\n        "pid": 1,\n        "children": []\n    },\n    {\n        "id": 3,\n        "name": "\u90e8\u95e83",\n        "pid": 1,\n        "children": []\n    }]\n},\n{\n    id: 10,\n    name: \'\u90e8\u95e81\',\n    pid: 9,\n    children: [\n        {id: 11, name: \'\u90e8\u95e81\', pid: 10},\n    ]\n}]\n\nconst generateList = (data, dataList) => {\n    for (let i = 0; i < data.length; i++) {\n        const node = data[i]\n        if (node.children) {\n            generateList(node.children, dataList, node.id)\n        }\n        delete node[\'children\'];\n        dataList.push(node)\n    }\n\n    return dataList\n}\n\nconsole.log(\'\u5c06\u6811\u5f62\u8282\u70b9\u6539\u4e3a\u4e00\u7ef4\u6570\u7ec4:\',generateList(departArrTest, []))\n')),(0,a.kt)("h2",{id:"\u65b9\u5f0f1\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4"},"\u65b9\u5f0f1\uff1a\u4f7f\u7528\u9012\u5f52\u6765\u5c06\u5d4c\u5957\u7684\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u6241\u5e73\u7684\u6570\u7ec4"),(0,a.kt)("p",null,"\u6b64\u4ee3\u7801\u4f1a\u5c06 testArr \u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\u9012\u5f52\u5730\u904d\u5386\uff0c\u5e76\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230 result \u6570\u7ec4\u4e2d\u3002\u5982\u679c\u5f53\u524d\u5bf9\u8c61\u6709 children \u5c5e\u6027\uff0c\u5219\u9012\u5f52\u5730\u8c03\u7528 flatten \u51fd\u6570\u6765\u5904\u7406\u5b50\u8282\u70b9\uff0c\u5e76\u4f7f\u7528\u5c55\u5f00\u8fd0\u7b97\u7b26\u5c06\u7ed3\u679c\u6dfb\u52a0\u5230 result \u6570\u7ec4\u4e2d\u3002\u6700\u7ec8\u8fd4\u56de result \u6570\u7ec4\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5b9e\u73b0\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\uff0c\u5176\u4e2d n \u662f\u6241\u5e73\u5316\u540e\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u56e0\u6b64\u6027\u80fd\u8f83\u597d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const testArr = [{\n  "id": 1,\n  "p_id": 0,\n  "name": "\u9996\u9875",\n  "children": [{\n    "id": 4,\n    "p_id": 1,\n    "name": "\u6743\u9650\u7ba1\u7406",\n    "children": [{\n      "id": 6,\n      "p_id": 4,\n      "name": "\u89d2\u8272\u5217\u8868",\n      "children": []\n    }]\n  }]\n},\n{\n  "id": 2,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u7ba1\u7406",\n  "children": []\n},\n{\n  "id": 3,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u5217\u8868",\n  "children": []\n}]\n\nfunction flatten(arr) {\n  const result = [];\n\n  arr.forEach(item => {\n    result.push(item);\n    if (item.children && item.children.length) {\n      result.push(...flatten(item.children));\n    }\n  });\n\n  return result;\n}\n\nconsole.log(flatten(testArr))\n')),(0,a.kt)("h2",{id:"\u65b9\u5f0f2"},"\u65b9\u5f0f2"),(0,a.kt)("p",null,"\u8fed\u4ee3\u65b9\u5f0f\u6241\u5e73\u5316\u5bf9\u8c61\u6570\u7ec4\u7684\u5b9e\u73b0\uff0c\u8be5\u5b9e\u73b0\u4f7f\u7528\u4e00\u4e2a\u8f85\u52a9\u6808\u6765\u4fdd\u5b58\u5f85\u5904\u7406\u7684\u8282\u70b9\uff0c\u53ea\u8981\u6808\u4e0d\u4e3a\u7a7a\uff0c\u5c31\u5faa\u73af\u5904\u7406\uff1a"),(0,a.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\uff0c\u5176\u4e2d n \u662f\u6241\u5e73\u5316\u540e\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u4f46\u662f\u5b83\u4f7f\u7528\u8fed\u4ee3\u800c\u4e0d\u662f\u9012\u5f52\uff0c\u56e0\u6b64\u907f\u514d\u4e86\u51fd\u6570\u8c03\u7528\u6808\u6ea2\u51fa\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a\u5b9e\u73b0\u5728\u5904\u7406\u5d4c\u5957\u5f88\u6df1\u7684\u5bf9\u8c61\u6570\u7ec4\u65f6\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a\u6808\u7a7a\u95f4\u4e0d\u8db3\u800c\u51fa\u73b0\u6027\u80fd\u95ee\u9898\uff0c\u56e0\u6b64\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u6d4b\u8bd5\u548c\u4f18\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const testArr = [{\n  "id": 1,\n  "p_id": 0,\n  "name": "\u9996\u9875",\n  "children": [{\n    "id": 4,\n    "p_id": 1,\n    "name": "\u6743\u9650\u7ba1\u7406",\n    "children": [{\n      "id": 6,\n      "p_id": 4,\n      "name": "\u89d2\u8272\u5217\u8868",\n      "children": []\n    }]\n  }]\n},\n{\n  "id": 2,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u7ba1\u7406",\n  "children": []\n},\n{\n  "id": 3,\n  "p_id": 0,\n  "name": "\u83dc\u5355\u5217\u8868",\n  "children": []\n}]\n\nfunction flatten(arr) {\n  const result = [];\n  const stack = [...arr];\n\n  while (stack.length) {\n    const item = stack.pop();\n    result.push(item);\n    if (item.children && item.children.length) {\n      stack.push(...item.children.reverse());\n    }\n  }\n\n  return result;\n}\n\nconsole.log(flatten(testArr))\n')))}p.isMDXComponent=!0}}]);