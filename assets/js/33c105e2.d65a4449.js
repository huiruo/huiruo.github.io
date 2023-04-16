"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=c(r),m=l,p=g["".concat(i,".").concat(m)]||g[m]||h[m]||o;return r?n.createElement(p,s(s({ref:t},u),{},{components:r})):n.createElement(p,s({ref:t},u))}));function p(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[g]="string"==typeof e?e:l,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={},s=void 0,a={unversionedId:"structure-algorithm/\u5b57\u7b26\u4e32/\u53bb\u6389\u9996\u5c3e\u7a7a\u683c",id:"structure-algorithm/\u5b57\u7b26\u4e32/\u53bb\u6389\u9996\u5c3e\u7a7a\u683c",title:"\u53bb\u6389\u9996\u5c3e\u7a7a\u683c",description:"1.\u4f7f\u7528\u539f\u751f\u65b9\u6cd5",source:"@site/programming-tech/structure-algorithm/01-\u5b57\u7b26\u4e32/01-\u53bb\u6389\u9996\u5c3e\u7a7a\u683c.md",sourceDirName:"structure-algorithm/01-\u5b57\u7b26\u4e32",slug:"/structure-algorithm/\u5b57\u7b26\u4e32/\u53bb\u6389\u9996\u5c3e\u7a7a\u683c",permalink:"/structure-algorithm/\u5b57\u7b26\u4e32/\u53bb\u6389\u9996\u5c3e\u7a7a\u683c",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/01-\u5b57\u7b26\u4e32/01-\u53bb\u6389\u9996\u5c3e\u7a7a\u683c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"structureAlgorithm",previous:{title:"\u5b57\u7b26\u4e32\u67e5\u627e",permalink:"/structure-algorithm/\u5b57\u7b26\u4e32/\u5b57\u7b26\u4e32\u67e5\u627e"},next:{title:"\u961f\u5217-\u6808\u548c\u961f\u5217\u7684\u533a\u522b",permalink:"/structure-algorithm/\u961f\u5217\u548c\u53cc\u7aef\u961f\u5217/\u961f\u5217-\u6808\u548c\u961f\u5217\u7684\u533a\u522b"}},i={},c=[{value:"1.\u4f7f\u7528\u539f\u751f\u65b9\u6cd5",id:"1\u4f7f\u7528\u539f\u751f\u65b9\u6cd5",level:2},{value:"2.\u4f7f\u7528\u5faa\u73af",id:"2\u4f7f\u7528\u5faa\u73af",level:2}],u={toc:c},g="wrapper";function h(e){let{components:t,...r}=e;return(0,l.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u4f7f\u7528\u539f\u751f\u65b9\u6cd5"},"1.\u4f7f\u7528\u539f\u751f\u65b9\u6cd5"),(0,l.kt)("p",null,"trim() \u65b9\u6cd5\u7528\u4e8e\u5220\u9664\u5b57\u7b26\u4e32\u7684\u5934\u5c3e\u7a7a\u767d\u7b26\uff0c\u7a7a\u767d\u7b26\u5305\u62ec\uff1a\u7a7a\u683c\u3001\u5236\u8868\u7b26 tab\u3001\u6362\u884c\u7b26\u7b49\u5176\u4ed6\u7a7a\u767d\u7b26\u7b49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let str = `  hello world haha   hhhhhha  `;\nconsole.log('trim:',str.trim());\n")),(0,l.kt)("p",null,"\u6b63\u5219\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function _trim(targetStr){\n    let reg = /^\\s*|\\s*$/g;\n    return targetStr.replace(reg, "");\n}\n\nconsole.log(`\u5b9e\u73b02${_trim(str)}`)\n')),(0,l.kt)("p",null,"\u4f7f\u7528\u5b57\u7b26\u4e32\u65b9\u6cd5\u5b9e\u73b0:\u67e5\u627e\u51fa\u7b2c\u4e00\u4e2a\u4e0d\u662f\u7a7a\u683c\u7684\u5b57\u7b26\n\u67e5\u51fa\u6700\u540e\u4e00\u4e2a\u4e0d\u662f\u7a7a\u683c\u7684\u5b57\u7b26\uff0c\u622a\u53d6\u4e2d\u95f4\u7684\u5185\u5bb9\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/*\n* \\s\u7528\u4e8e\u5339\u914d\u7a7a\u767d\u5b57\u7b26\u3002\n*\n* [\\s]\u8868\u793a\uff0c\u53ea\u8981\u51fa\u73b0\u7a7a\u767d\u5c31\u5339\u914d\n* [\\S]\u8868\u793a\uff0c\u975e\u7a7a\u767d\u5c31\u5339\u914d\n* \u662f\u5b8c\u5168\u901a\u914d\u7684\u610f\u601d\uff0c\\s\u662f\u6307\u7a7a\u767d\uff0c\u5305\u62ec\u7a7a\u683c\u3001\u6362\u884c\u3001tab\u7f29\u8fdb\u7b49\u6240\u6709\u7684\u7a7a\u767d\uff0c\u800c\\S\u521a\u597d\u76f8\u53cd\n*\n* substring()   \u63d0\u53d6\u5b57\u7b26\u4e32\u4e2d\u4e24\u4e2a\u6307\u5b9a\u7684\u7d22\u5f15\u53f7\u4e4b\u95f4\u7684\u5b57\u7b26\u3002\n* slice \u540c\n* */\nfunction _trim2(targetStr){\n    console.log(`${targetStr.search(/\\S/)}`)\n\n    let startIndex = Math.max(targetStr.search(/\\S/), 0);\n    // test\n    console.log('test:',targetStr.match(/\\S\\s*$/g)); // test: [ 'a  ' ]\n\n    let endIndex = targetStr.search(/\\S\\s*$/) + 1;\n\n    console.log(`startIndex:${startIndex},endIndex:${endIndex}`)\n    // return targetStr.substring(startIndex, endIndex);\n    return targetStr.slice(startIndex, endIndex);\n}\nconsole.log(`\u5b9e\u73b03${_trim2(str)}`)\n")),(0,l.kt)("h2",{id:"2\u4f7f\u7528\u5faa\u73af"},"2.\u4f7f\u7528\u5faa\u73af"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n\u7528js\u53bb\u6389\u9996\u5c3e\u90e8\u7a7a\u683c\nlet testStr = `  hello world,ruo  `;\n\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u6700\u574f\uff1ao(n),\u548c\u6536\u5c3e\u7a7a\u683c\u6570\u76f8\u5173\n */\nlet testStr = `  hello world,ruo  `;\n\nfunction fn(str) {\n    const strArr = str.split('')\n    const blankW = ` `\n    let sumsTest = 0\n\n    for (let i = 0; i < strArr.length; i++) {\n        sumsTest = sumsTest + 1\n\n        const element = strArr[i]\n        if (element !== blankW) {\n            console.log('h:', element, i)\n            // \u5b9a\u4f4d\u4e86\u524d\u9762\u5b57\u7b26,\u53bb\u6389\u4e86\u524d\u9762\u7684\u7a7a\u683c\n            strArr.splice(0, i)\n            // console.log('\u53bb\u6389\u4e4b\u540estrArr', strArr, strArr.length)\n\n            /*\n            * \u53cd\u5411\u5faa\u73af\u53bb\u6389\u540e\u9762\u7a7a\u683c\n            * */\n            let whileLength = strArr.length\n            while (whileLength !== 0) {\n                // console.log('\u53cd\u5411\u5faa\u73af\uff1a', strArr[whileLength - 1], 'index:', whileLength - 1)\n                let forWileElement = strArr[whileLength - 1]\n                if (forWileElement !== blankW) {\n                    strArr.splice(whileLength, strArr.length - whileLength)\n                    break\n                }\n\n                whileLength = whileLength - 1\n                sumsTest = sumsTest + 1\n            }\n\n            console.log(`n\u4e3a\uff1a${str.length}\u8ba1\u7b97\u6b21\u6570:', ${sumsTest}`)\n            console.log('\u5206\u5272\u7ebf========\u300b')\n            break\n        }\n    }\n\n    return strArr.join('')\n}\n\nlet testStr2 = `  hello world haha   hhhhhh  `;\nlet testStr3 = `                         hh          hhhh                                    `;\nlet testStr4 = `                         h                                    `;\nlet testStr5 = `                                                                 `;\nconsole.log('target:', fn(testStr))\nconsole.log('target:', fn(testStr2))\nconsole.log('target:', fn(testStr3))\nconsole.log('target:', fn(testStr4))\nconsole.log('target:', fn(testStr5))\n")))}h.isMDXComponent=!0}}]);