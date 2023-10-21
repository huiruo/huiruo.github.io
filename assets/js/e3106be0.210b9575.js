"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8973],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>b});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),g=a,b=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?t.createElement(b,l(l({ref:r},p),{},{components:n})):t.createElement(b,l({ref:r},p))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20102:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={},l=void 0,c={unversionedId:"JavaScript/array\u65b9\u6cd5/10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",id:"JavaScript/array\u65b9\u6cd5/10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",title:"10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",description:"\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",source:"@site/programming-tech/JavaScript/01-array\u65b9\u6cd5/10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5.md",sourceDirName:"JavaScript/01-array\u65b9\u6cd5",slug:"/JavaScript/array\u65b9\u6cd5/10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",permalink:"/JavaScript/array\u65b9\u6cd5/10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/01-array\u65b9\u6cd5/10-1-sort-\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u7ec4\u5408\u7ee7\u627f\u7684\u95ee\u9898",permalink:"/JavaScript/\u7ee7\u627f/\u7ec4\u5408\u7ee7\u627f\u7684\u95ee\u9898"},next:{title:"10-2-sort-\u6392\u5e8f",permalink:"/JavaScript/array\u65b9\u6cd5/10-2-sort-\u6392\u5e8f"}},s={},i=[{value:"\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",id:"\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5",level:3},{value:"\u6bd4\u8f83\u89c4\u5219\uff1a",id:"\u6bd4\u8f83\u89c4\u5219",level:3},{value:"\u5b57\u7b26\u4e32\u6392\u5e8f",id:"\u5b57\u7b26\u4e32\u6392\u5e8f",level:2},{value:"2-1.\u8fdb\u884c\u5bf9\u8c61\u6392\u5e8f",id:"2-1\u8fdb\u884c\u5bf9\u8c61\u6392\u5e8f",level:3},{value:"3.\u5b57\u7b26\u4e32\u6392\u5e8f",id:"3\u5b57\u7b26\u4e32\u6392\u5e8f",level:3}],p={toc:i},u="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5"},"\u91c7\u7528\u5feb\u6392\u548c\u63d2\u5165\u6392\u5e8f\u7b97\u6cd5"),(0,a.kt)("p",null,"\u4f1a\u6539\u53d8\u539f\u59cb\u6570\u7ec4\u3002\u5b83\u4f1a\u6309\u7167\u5347\u5e8f\u6216\u964d\u5e8f\u91cd\u65b0\u6392\u5217\u6570\u7ec4\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u5df2\u6392\u5e8f\u7684\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u4e0d\u60f3\u66f4\u6539\u539f\u59cb\u6570\u7ec4\uff0c\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u526f\u672c\u6765\u6392\u5e8f\u8be5\u526f\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let myArray = [5, 2, 1, 4, 3];\nlet sortedArray = [...myArray].sort();\nconsole.log(sortedArray); // [1, 2, 3, 4, 5]\nconsole.log(myArray); // [5, 2, 1, 4, 3]\n")),(0,a.kt)("h3",{id:"\u6bd4\u8f83\u89c4\u5219"},"\u6bd4\u8f83\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u8d1f\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u5e94\u8be5\u4f4d\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u524d\u9762\n\u4e24\u4e2a\u53c2\u6570\u76f8\u7b49\uff0c\u5219\u8fd4\u56de0\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u6b63\u6570,\u7b2c\u4e00\u4e2a\u53c2\u6570\u5e94\u4f4d\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u4e4b\u540e\n\u9ed8\u8ba4\u662f\u5c06\u6570\u7ec4\u5143\u7d20\u8f6c\u4e3a\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u6839\u636eUnicode\u5b57\u7b26\u96c6\u7f16\u53f7\u7684\u5927\u5c0f\u6392\u5e8f\u3002")),(0,a.kt)("p",null,"charCodeAt(index) \u8fd4\u56de\u6307\u5b9a\u4f4d\u7f6e\u5b57\u7b26\u7684 Unicode \u7f16\u53f7\uff0c\u53d6\u503c\u662f 0 - 65535 \u95f4\u7684\u6574\u6570\uff0c\n\u4e0e charAt() \u65b9\u6cd5\u6267\u884c\u7684\u64cd\u4f5c\u76f8\u4f3c\uff0c\u540e\u8005\u8fd4\u56de\u7684\u662f\u5355\u4e2a\u5b57\u7b26\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u63d0\u4f9b\u6bd4\u8f83\u5668\u800c\u5bf9\u6570\u5b57\u7ec4\u6210\u7684\u6570\u7ec4\u6392\u5e8f\uff0c\u56e0\u4e3a\u4f1a\u5c06\u6570\u5b57\u8f6c\u4e3a\u5b57\u7b26\u4e32\u518d\u6309\u7f16\u53f7\u6392\u5e8f\u800c\u5bfc\u81f4\u9519\u8bef\u3002\n\u8981\u83b7\u5f97\u6b63\u786e\u7684\u987a\u5e8f\uff0c\u53ea\u9700\u63d0\u4f9b\u6bd4\u8f83\u5668\u51fd\u6570\uff1afunction(a,b){return a-b;}\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let testArr = [6, 9, 2, 5]\n\nconsole.log('\u5347\u5e8f\uff1a', testArr.sort((a, b) => {\n    if ((a - b) < 0) {\n        // \u5728\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u4e2d a \u5e94\u8be5\u51fa\u73b0\u5728 b \u4e4b\u524d,\u5219\u8fd4\u56de\u4e00\u4e2a\u5c0f\u4e8e 0 \u7684\u503c\u3002\n        console.log('\u8d1f\u6570\u6570\u4e0d\u9700\u8981\u4ea4\u6362', 'a:', a, 'b:', b)\n    } else {\n        console.log('\u6b63\u6570\u8981\u4ea4\u6362', 'a:', a, 'b:', b)\n    }\n    return a - b\n})) //[2, 5, 6, 9]\nconsole.log('\u662f\u5426\u751f\u6210\u526f\u672c:', testArr) // \u53ef\u89c1\u4e0d\u751f\u6210\u526f\u672c\n\n// console.log('\u5347\u5e8f\uff1a', testArr.sort((a, b) => b - a)) // [9, 6, 5, 2]\n")),(0,a.kt)("h2",{id:"\u5b57\u7b26\u4e32\u6392\u5e8f"},"\u5b57\u7b26\u4e32\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arrStr = ['eeeee', 'b', 'bccc', 'accc', 'afff']\nconsole.log('\u5b57\u7b26\u4e32\u6392\u5e8f\uff1a', arrStr.sort((a, b) => {\n    return a > b ? 1 : -1;\n})) \n\n// ['accc', 'afff', 'b', 'bccc', 'eeeee']\n")),(0,a.kt)("p",null,"\u770b\u8d77\u6765\u4e0d\u5927\u5bf9\uff0c\u662f\u5427\uff1f\u8fd9\u662f\u56e0\u4e3asort\u65b9\u6cd5\u5728\u5bf9\u6570\u7ec4\u505a\u6392\u5e8f\u65f6\uff0c\u628a\u5143\u7d20\u9ed8\u8ba4\u6210\u5b57\u7b26\u4e32\u8fdb\u884c\u76f8\u4e92\u6bd4\u8f83\u3002\u6211\u4eec\u53ef\u4ee5\u4f20\u5165\u81ea\u5df1\u5199\u7684\u6bd4\u8f83\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6570\u7ec4\u91cc\u90fd\u662f\u6570\uff0c\u6240\u4ee5\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u5199\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const numbers2 = [1, 3, 3, 4, -1, 6, 7, 8, -2, 10, 11, 12, 13, 14, 15];\nconst res = numbers2.sort((a, b) => a - b)\nconsole.log('\u4f7f\u7528sort\u8fdb\u884c\u6570\u7ec4\u6392\u5e8f:numbers.sort((a, b) => a - b)', res);\n// [-2, -1, 1, 3, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15]\n")),(0,a.kt)("h3",{id:"2-1\u8fdb\u884c\u5bf9\u8c61\u6392\u5e8f"},"2-1.\u8fdb\u884c\u5bf9\u8c61\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const friends = [\n    { name: 'John', age: 30 },\n    { name: 'Ana', age: 20 },\n    { name: 'Chris', age: 25 },\n];\n\nfunction comparePerson(a, b) {\n    if (a.age < b.age) {\n        return -1;\n    }\n    if (a.age > b.age) {\n        return 1;\n    }\n    return 0;\n}\n\nconsole.log('\u8fdb\u884c\u5bf9\u8c61\u6392\u5e8f\uff1afriends.sort(comparePerson)', friends.sort(comparePerson));\n")),(0,a.kt)("h3",{id:"3\u5b57\u7b26\u4e32\u6392\u5e8f"},"3.\u5b57\u7b26\u4e32\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let names = ['Ana', 'ana', 'john', 'John'];\nconsole.log('3.\u5b57\u7b26\u4e32\u6392\u5e8f:names.sort()', names.sort());\n")),(0,a.kt)("p",null,"JavaScript\u5728\u505a\u5b57\u7b26\u6bd4\u8f83\u7684\u65f6\u5019\uff0c\u662f\u6839\u636e\u5b57\u7b26\u5bf9\u5e94\u7684ASCII\u503c\u6765\u6bd4\u8f83\u7684\u3002\u4f8b\u5982\uff0cA\u3001J\u3001a\u3001j\u5bf9\u5e94\u7684ASCII\u503c\u5206\u522b\u662f65\u300174\u300197\u3001106\u3002\n\u867d\u7136a\u5728\u5b57\u6bcd\u8868\u91cc\u662f\u6700\u9760\u524d\u7684\uff0c\u4f46J\u7684ASCII\u503c\u6bd4a\u7684\u5c0f\uff0c\u6240\u4ee5\u6392\u5728\u4e86a\u524d\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5c0f\u5199\u5b57\u6bcd\u5728\u524d\nnames = ['Ana', 'ana', 'john', 'John'];\n\nconsole.log('3.\u5b57\u7b26\u4e32\u6392\u5e8f:names.sort((a, b) => a.localeCompare(b))', names.sort((a, b) => a.localeCompare(b)));\n")))}m.isMDXComponent=!0}}]);