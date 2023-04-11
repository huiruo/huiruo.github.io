"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),k=l,y=m["".concat(u,".").concat(k)]||m[k]||s[k]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},32023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={},o=void 0,i={unversionedId:"structure-algorithm/\u641c\u7d22\u7b97\u6cd5/\u524d\u8a00",id:"structure-algorithm/\u641c\u7d22\u7b97\u6cd5/\u524d\u8a00",title:"\u524d\u8a00",description:"* \u987a\u5e8f\u641c\u7d22",source:"@site/programming-tech/structure-algorithm/12-\u641c\u7d22\u7b97\u6cd5/00-\u524d\u8a00.md",sourceDirName:"structure-algorithm/12-\u641c\u7d22\u7b97\u6cd5",slug:"/structure-algorithm/\u641c\u7d22\u7b97\u6cd5/\u524d\u8a00",permalink:"/structure-algorithm/\u641c\u7d22\u7b97\u6cd5/\u524d\u8a00",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/12-\u641c\u7d22\u7b97\u6cd5/00-\u524d\u8a00.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"structureAlgorithm",previous:{title:"\u6811",permalink:"/structure-algorithm/\u641c\u7d22\u7b97\u6cd5/\u7b26\u53f7\u8868-\u6811-\u4e8c\u53c9\u6811-\u4e8c\u53c9\u67e5\u627e\u6811/\u6811"},next:{title:"01-1-\u5206\u6cbb\u7b97\u6cd5",permalink:"/structure-algorithm/\u7b97\u6cd5\u8bbe\u8ba1\u4e0e\u6280\u5de7/01-1-\u5206\u6cbb\u7b97\u6cd5"}},u={},p=[{value:"\u4ec0\u4e48\u662f\u7b26\u53f7\u8868\uff0c\u4e5f\u79f0\u4e3a\u5b57\u5178\uff0c\u4e5f\u79f0\u4e3a\u7d22\u5f15",id:"\u4ec0\u4e48\u662f\u7b26\u53f7\u8868\u4e5f\u79f0\u4e3a\u5b57\u5178\u4e5f\u79f0\u4e3a\u7d22\u5f15",level:2},{value:"3.1\u3000\u7b26\u53f7\u8868-\u91cd\u8981\u7684\u6570\u636e\u7ed3\u6784",id:"31\u7b26\u53f7\u8868-\u91cd\u8981\u7684\u6570\u636e\u7ed3\u6784",level:2},{value:"\u7b26\u53f7\u8868\u662f\u7f16\u7a0b\u8bed\u8a00\u7f16\u8bd1\u5668\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u6570\u636e\u7ed3\u6784\uff0c\u5e38\u7528\u7684\u7b26\u53f7\u8868\u6570\u636e\u7ed3\u6784\u6709\uff1a",id:"\u7b26\u53f7\u8868\u662f\u7f16\u7a0b\u8bed\u8a00\u7f16\u8bd1\u5668\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u6570\u636e\u7ed3\u6784\u5e38\u7528\u7684\u7b26\u53f7\u8868\u6570\u636e\u7ed3\u6784\u6709",level:3},{value:"3.1-1 \u4e00\u79cd\u7b80\u5355\u7684\u6cdb\u578b\u7b26\u53f7\u8868",id:"31-1-\u4e00\u79cd\u7b80\u5355\u7684\u6cdb\u578b\u7b26\u53f7\u8868",level:2}],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u63d2\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u5206\u641c\u7d22\u7b97\u6cd5\u3002")),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u7b26\u53f7\u8868\u4e5f\u79f0\u4e3a\u5b57\u5178\u4e5f\u79f0\u4e3a\u7d22\u5f15"},"\u4ec0\u4e48\u662f\u7b26\u53f7\u8868\uff0c\u4e5f\u79f0\u4e3a\u5b57\u5178\uff0c\u4e5f\u79f0\u4e3a\u7d22\u5f15"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u6211\u4eec\u4f1a\u4f7f\u7528\u7b26\u53f7\u8868\u8fd9\u4e2a\u8bcd\u6765\u63cf\u8ff0\u4e00\u5f20\u62bd\u8c61\u7684\u8868\u683c\uff0c\u6211\u4eec\u4f1a\u5c06\u4fe1\u606f\uff08\u503c\uff09\u5b58\u50a8\u5728\u5176\u4e2d\uff0c\u7136\u540e\u6309\u7167\u6307\u5b9a\u7684\u952e\u6765\u641c\u7d22\u5e76\u83b7\u53d6\u8fd9\u4e9b\u4fe1\u606f\u3002\u952e\u548c\u503c\u7684\u5177\u4f53\u610f\u4e49\u53d6\u51b3\u4e8e\u4e0d\u540c\u7684\u5e94\u7528\u3002\n\n\u7b26\u53f7\u8868\u6709\u65f6\u88ab\u79f0\u4e3a\u5b57\u5178\u3002\u5728\u82f1\u8bed\u5b57\u5178\u91cc\uff0c\u952e\u5c31\u662f\u5355\u8bcd\uff0c\u503c\u5c31\u662f\u5355\u8bcd\u5bf9\u5e94\u7684\u5b9a\u4e49\u3001\u53d1\u97f3\u548c\u8bcd\u6e90\u3002\n\n\u7b26\u53f7\u8868\u6709\u65f6\u53c8\u53eb\u505a\u7d22\u5f15\uff0c\u5373\u4e66\u672c\u6700\u540e\u5c06\u672f\u8bed\u6309\u7167\u5b57\u6bcd\u987a\u5e8f\u5217\u51fa\u4ee5\u65b9\u4fbf\u67e5\u627e\u7684\u90a3\u90e8\u5206\u3002\u5728\u4e00\u672c\u4e66\u7684\u7d22\u5f15\u4e2d\uff0c\u952e\u5c31\u662f\u672f\u8bed\uff0c\u800c\u503c\u5c31\u662f\u4e66\u4e2d\u8be5\u672f\u8bed\u51fa\u73b0\u7684\u6240\u6709\u9875\u7801\u3002\n")),(0,l.kt)("h2",{id:"31\u7b26\u53f7\u8868-\u91cd\u8981\u7684\u6570\u636e\u7ed3\u6784"},"3.1\u3000\u7b26\u53f7\u8868-\u91cd\u8981\u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,"\u5b9a\u4e49\u3002 \u7b26\u53f7\u8868\u662f\u4e00\u79cd\u5178\u578b\u7684\u62bd\u8c61\u6570\u636e\u7c7b\u578b\uff08\u8bf7\u89c1\u7b2c 1 \u7ae0\uff09\uff1a\u5b83\u4ee3\u8868\u7740\u4e00\u7ec4\u5b9a\u4e49\u6e05\u6670\u7684\u503c\u4ee5\u53ca\u76f8\u5e94\u7684\u64cd\u4f5c\uff0c\u4f7f\u5f97\u6211\u4eec\u80fd\u591f\u5c06\u7c7b\u578b\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u533a\u5206\u5f00\u6765\u3002"),(0,l.kt)("p",null,"\u7b26\u53f7\u8868\u662f\u4e00\u79cd\u5b58\u50a8\u952e\u503c\u5bf9\u7684\u6570\u636e\u7ed3\u6784\uff0c\u652f\u6301\u4e24\u79cd\u64cd\u4f5c\uff1a\u63d2\u5165\uff08put\uff09\uff0c\u5373\u5c06\u4e00\u7ec4\u65b0\u7684\u952e\u503c\u5bf9\u5b58\u5165\u8868\u4e2d\uff1b\u67e5\u627e\uff08get\uff09\uff0c\u5373\u6839\u636e\u7ed9\u5b9a\u7684\u952e\u5f97\u5230\u76f8\u5e94\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u7b26\u53f7\u8868\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5c31\u662f\u5c06\u4e00\u4e2a\u952e\u548c\u4e00\u4e2a\u503c\u8054\u7cfb\u8d77\u6765\u3002"),(0,l.kt)("p",null,"\u7528\u4f8b\u80fd\u591f\u5c06\u4e00\u4e2a\u952e\u503c\u5bf9\u63d2\u5165\u7b26\u53f7\u8868\u5e76\u5e0c\u671b\u5728\u4e4b\u540e\u80fd\u591f\u4ece\u7b26\u53f7\u8868\u7684\u6240\u6709\u952e\u503c\u5bf9\u4e2d\u6309\u7167\u952e\u76f4\u63a5\u627e\u5230\u76f8\u5bf9\u5e94\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u7b26\u53f7\u8868\u901a\u5e38\u662f\u4ee5\u54c8\u5e0c\u8868\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u7b49\u6570\u636e\u7ed3\u6784\u6765\u5b9e\u73b0\uff0c\u4ee5\u652f\u6301\u5feb\u901f\u7684\u67e5\u627e\u548c\u66f4\u65b0\u64cd\u4f5c\u3002\u7b26\u53f7\u8868\u7684\u6784\u5efa\u8fc7\u7a0b\u901a\u5e38\u53d1\u751f\u5728\u7f16\u8bd1\u5668\u7684\u524d\u7aef\uff0c\u5373\u8bcd\u6cd5\u5206\u6790\u548c\u8bed\u6cd5\u5206\u6790\u9636\u6bb5\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4f1a\u5b66\u4e60\u7528\u4e09\u79cd\u7ecf\u5178\u7684\u6570\u636e\u7c7b\u578b\u6765\u5b9e\u73b0\u9ad8\u6548\u7684\u7b26\u53f7\u8868"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u53c9\u67e5\u627e\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u7ea2\u9ed1\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u6563\u5217\u8868")),(0,l.kt)("h3",{id:"\u7b26\u53f7\u8868\u662f\u7f16\u7a0b\u8bed\u8a00\u7f16\u8bd1\u5668\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u6570\u636e\u7ed3\u6784\u5e38\u7528\u7684\u7b26\u53f7\u8868\u6570\u636e\u7ed3\u6784\u6709"},"\u7b26\u53f7\u8868\u662f\u7f16\u7a0b\u8bed\u8a00\u7f16\u8bd1\u5668\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u6570\u636e\u7ed3\u6784\uff0c\u5e38\u7528\u7684\u7b26\u53f7\u8868\u6570\u636e\u7ed3\u6784\u6709\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u54c8\u5e0c\u8868\uff08Hash Table\uff09\uff1a\u54c8\u5e0c\u8868\u662f\u4e00\u79cd\u57fa\u4e8e\u54c8\u5e0c\u51fd\u6570\u5b9e\u73b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u53ef\u4ee5\u5feb\u901f\u5730\u8fdb\u884c\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u64cd\u4f5c\u3002\u5728\u7b26\u53f7\u8868\u4e2d\uff0c\u54c8\u5e0c\u8868\u901a\u5e38\u7528\u4e8e\u5b58\u50a8\u5168\u5c40\u53d8\u91cf\u3001\u51fd\u6570\u548c\u5e38\u91cf\u7b49\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e8c\u53c9\u641c\u7d22\u6811\uff08Binary Search Tree\uff09\uff1a\u4e8c\u53c9\u641c\u7d22\u6811\u662f\u4e00\u79cd\u5177\u6709\u5de6\u53f3\u5b50\u6811\u6709\u5e8f\u6027\u7684\u4e8c\u53c9\u6811\uff0c\u5b83\u53ef\u4ee5\u5feb\u901f\u5730\u8fdb\u884c\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u64cd\u4f5c\u3002\u5728\u7b26\u53f7\u8868\u4e2d\uff0c\u4e8c\u53c9\u641c\u7d22\u6811\u901a\u5e38\u7528\u4e8e\u5b58\u50a8\u5c40\u90e8\u53d8\u91cf\u3001\u53c2\u6570\u7b49\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"AVL\u6811\uff1aAVL\u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5b83\u53ef\u4ee5\u4fdd\u6301\u6811\u7684\u9ad8\u5ea6\u5e73\u8861\uff0c\u4ece\u800c\u4fdd\u8bc1\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u7b49\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662fO(log n)\u7ea7\u522b\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7ea2\u9ed1\u6811\uff08Red-Black Tree\uff09\uff1a\u7ea2\u9ed1\u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5b83\u5177\u6709\u8f83\u597d\u7684\u5e73\u8861\u6027\u548c\u6027\u80fd\uff0c\u5e76\u4e14\u80fd\u591f\u5728O(log n)\u7684\u65f6\u95f4\u5185\u5b8c\u6210\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u7b49\u64cd\u4f5c\u3002\u5728\u7b26\u53f7\u8868\u4e2d\uff0c\u7ea2\u9ed1\u6811\u901a\u5e38\u7528\u4e8e\u5b58\u50a8\u7c7b\u548c\u51fd\u6570\u7b49\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"B\u6811\uff08B-Tree\uff09\uff1aB\u6811\u662f\u4e00\u79cd\u591a\u8def\u641c\u7d22\u6811\uff0c\u5b83\u53ef\u4ee5\u5728\u4e00\u4e2a\u8282\u70b9\u4e2d\u5b58\u50a8\u591a\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14\u5177\u6709\u8f83\u597d\u7684\u78c1\u76d8\u8bbf\u95ee\u6027\u80fd\u3002\u5728\u7b26\u53f7\u8868\u4e2d\uff0cB\u6811\u901a\u5e38\u7528\u4e8e\u5b58\u50a8\u5927\u578b\u7b26\u53f7\u8868\u7684\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Trie\u6811\uff08\u5b57\u5178\u6811\uff09\uff1aTrie\u6811\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6811\u578b\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u7528\u4e8e\u5b58\u50a8\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u652f\u6301\u9ad8\u6548\u7684\u5b57\u7b26\u4e32\u67e5\u627e\u548c\u5339\u914d\u64cd\u4f5c\u3002\u5728\u7b26\u53f7\u8868\u4e2d\uff0cTrie\u6811\u901a\u5e38\u7528\u4e8e\u5b58\u50a8\u5173\u952e\u5b57\u548c\u6807\u8bc6\u7b26\u7b49\u4fe1\u606f\u3002"))),(0,l.kt)("h2",{id:"31-1-\u4e00\u79cd\u7b80\u5355\u7684\u6cdb\u578b\u7b26\u53f7\u8868"},"3.1-1 \u4e00\u79cd\u7b80\u5355\u7684\u6cdb\u578b\u7b26\u53f7\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"API public class  ST<Key, Value> {\n\nST()\u521b\u5efa\u4e00\u5f20\u7b26\u53f7\u8868\nvoid  put(Key key, Value val)\u5c06\u952e\u503c\u5bf9\u5b58\u5165\u8868\u4e2d\uff08\u82e5\u503c\u4e3a\u7a7a\u5219\u5c06\u952e key \u4ece\u8868\u4e2d\u5220\u9664\uff09\nValue  get(Key key)\u83b7\u53d6\u952e key \u5bf9\u5e94\u7684\u503c\uff08\u82e5\u952e key \u4e0d\u5b58\u5728\u5219\u8fd4\u56de null\uff09\nvoid  delete(Key key)\u4ece\u8868\u4e2d\u5220\u53bb\u952e key\uff08\u53ca\u5176\u5bf9\u5e94\u7684\u503c\uff09\nboolean  contains(Key key)\u952e key \u5728\u8868\u4e2d\u662f\u5426\u6709\u5bf9\u5e94\u7684\u503c\nboolean  isEmpty()\u8868\u662f\u5426\u4e3a\u7a7a\nint  size()\u8868\u4e2d\u7684\u952e\u503c\u5bf9\u6570\u91cf\nIterable<Key>  keys()\u8868\u4e2d\u7684\u6240\u6709\u952e\u7684\u96c6\u5408\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6211\u4eec\u7684\u6240\u6709\u5b9e\u73b0\u90fd\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a\n1.\u6bcf\u4e2a\u952e\u53ea\u5bf9\u5e94\u7740\u4e00\u4e2a\u503c\uff08\u8868\u4e2d\u4e0d\u5141\u8bb8\u5b58\u5728\u91cd\u590d\u7684\u952e\uff09\uff1b\n2.\u5f53\u7528\u4f8b\u4ee3\u7801\u5411\u8868\u4e2d\u5b58\u5165\u7684\u952e\u503c\u5bf9\u548c\u8868\u4e2d\u5df2\u6709\u7684\u952e\uff08\u53ca\u5173\u8054\u7684\u503c\uff09\u51b2\u7a81\u65f6\uff0c\u65b0\u7684\u503c\u4f1a\u66ff\u4ee3\u65e7\u7684\u503c\u3002\u8fd9\u4e9b\u89c4\u5219\u5b9a\u4e49\u4e86\u5173\u8054\u6570\u7ec4\u7684\u62bd\u8c61\u5f62\u5f0f\u3002\n\n\u4f60\u53ef\u4ee5\u5c06\u7b26\u53f7\u8868\u60f3\u8c61\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u952e\u5373\u7d22\u5f15\uff0c\u503c\u5373\u6570\u7ec4\u7684\u5143\u7d20\u3002\n\u5728\u4e00\u4e2a\u4e00\u822c\u7684\u6570\u7ec4\u4e2d\uff0c\u952e\u5c31\u662f\u6574\u578b\u7684\u7d22\u5f15\uff0c\u6211\u4eec\u7528\u5b83\u6765\u5feb\u901f\u8bbf\u95ee\u6570\u7ec4\u7684\u5185\u5bb9\uff1b\n\n\u5728\u4e00\u4e2a\u5173\u8054\u6570\u7ec4\uff08\u7b26\u53f7\u8868\uff09\u4e2d\uff0c\u952e\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u7528\u5b83\u6765\u5feb\u901f\u8bbf\u95ee\u6570\u7ec4\u7684\u5185\u5bb9\u3002\n")))}s.isMDXComponent=!0}}]);