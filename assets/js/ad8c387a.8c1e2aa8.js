"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7256],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),k=o,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=k;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},89706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const l={title:"\u4f8b3-\u7ea2\u9ed1\u6811",sidebar_position:1},i=void 0,a={unversionedId:"structure-algorithm/\u6811/\u7ea2\u9ed1\u6811",id:"structure-algorithm/\u6811/\u7ea2\u9ed1\u6811",title:"\u4f8b3-\u7ea2\u9ed1\u6811",description:"1.\u7ea2\u9ed1\u6811\u4e5f\u662f\u4e00\u4e2a\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811",source:"@site/programming-tech/structure-algorithm/08-\u6811/08-\u7ea2\u9ed1\u6811.md",sourceDirName:"structure-algorithm/08-\u6811",slug:"/structure-algorithm/\u6811/\u7ea2\u9ed1\u6811",permalink:"/structure-algorithm/\u6811/\u7ea2\u9ed1\u6811",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/08-\u6811/08-\u7ea2\u9ed1\u6811.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4f8b3-\u7ea2\u9ed1\u6811",sidebar_position:1},sidebar:"structureAlgorithm",previous:{title:"\u4f8b2-\u81ea\u5e73\u8861\u6811",permalink:"/structure-algorithm/\u6811/\u81ea\u5e73\u8861\u6811"},next:{title:"\u4f8b4-AVL\u6811",permalink:"/structure-algorithm/\u6811/AVL\u6811"}},s={},c=[{value:"1.\u7ea2\u9ed1\u6811\u4e5f\u662f\u4e00\u4e2a\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811",id:"1\u7ea2\u9ed1\u6811\u4e5f\u662f\u4e00\u4e2a\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u7ea2\u9ed1\u6811\u7684\u81ea\u5e73\u8861\u64cd\u4f5c",id:"\u7ea2\u9ed1\u6811\u7684\u81ea\u5e73\u8861\u64cd\u4f5c",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2},{value:"3.\u5411\u7ea2\u9ed1\u6811\u4e2d\u63d2\u5165\u8282\u70b9",id:"3\u5411\u7ea2\u9ed1\u6811\u4e2d\u63d2\u5165\u8282\u70b9",level:2},{value:"4.\u5728\u63d2\u5165\u8282\u70b9\u540e\u9a8c\u8bc1\u7ea2\u9ed1\u6811\u5c5e\u6027",id:"4\u5728\u63d2\u5165\u8282\u70b9\u540e\u9a8c\u8bc1\u7ea2\u9ed1\u6811\u5c5e\u6027",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...l}=e;return(0,o.kt)(u,(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1\u7ea2\u9ed1\u6811\u4e5f\u662f\u4e00\u4e2a\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811"},"1.\u7ea2\u9ed1\u6811\u4e5f\u662f\u4e00\u4e2a\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811"),(0,o.kt)("p",null,"\u5bf9AVL\u6811\u63d2\u5165\u548c\u79fb\u9664\u8282\u70b9\u53ef\u80fd\u4f1a\u9020\u6210\u65cb\u8f6c\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5305\u542b\u591a\u6b21\u63d2\u5165\u548c\u5220\u9664\u7684\u81ea\u5e73\u8861\u6811\uff0c\u7ea2\u9ed1\u6811\u662f\u6bd4\u8f83\u597d\u7684\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u63d2\u5165\u548c\u5220\u9664\u9891\u7387\u8f83\u4f4e\uff08\u6211\u4eec\u66f4\u9700\u8981\u591a\u6b21\u8fdb\u884c\u641c\u7d22\u64cd\u4f5c\uff09\uff0c\u90a3\u4e48AVL\u6811\u6bd4\u7ea2\u9ed1\u6811\u66f4\u597d\u3002"),(0,o.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u7ea2\u9ed1\u6811\uff08Red-Black Tree\uff09\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u7684\u4e8c\u53c9\u67e5\u627e\u6811\uff08Binary Search Tree\uff09\uff0c\u5b83\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90fd\u5e26\u6709\u989c\u8272\u5c5e\u6027\uff0c\u53ef\u4ee5\u662f\u7ea2\u8272\u6216\u9ed1\u8272\u3002\u7ea2\u9ed1\u6811\u662f\u4e00\u79cd\u7279\u5316\u7684AVL\u6811\uff08\u5e73\u8861\u4e8c\u53c9\u6811\uff09\uff0c\u90fd\u662f\u5728\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u65f6\u901a\u8fc7\u7279\u5b9a\u64cd\u4f5c\u4fdd\u6301\u4e8c\u53c9\u67e5\u627e\u6811\u7684\u5e73\u8861\uff0c\u4ece\u800c\u83b7\u5f97\u8f83\u9ad8\u7684\u67e5\u627e\u6027\u80fd\u3002\n\u7ea2\u9ed1\u6811\u6ee1\u8db3\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8282\u70b9\u662f\u7ea2\u8272\u6216\u9ed1\u8272\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6839\u8282\u70b9\u662f\u9ed1\u8272\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u53f6\u8282\u70b9\uff08NIL\u8282\u70b9\uff0c\u7a7a\u8282\u70b9\uff09\u662f\u9ed1\u8272\u7684\u3002(\u7528NULL\u5f15\u7528\u8868\u793a\u7684\u8282\u70b9\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u662f\u7ea2\u8272\u7684\uff0c\u5219\u5b83\u7684\u5b50\u8282\u70b9\u5fc5\u987b\u662f\u9ed1\u8272\u7684\u3002(\u4e0d\u80fd\u6709\u4e24\u4e2a\u76f8\u90bb\u7684\u7ea2\u8282\u70b9\uff0c\u4e00\u4e2a\u7ea2\u8282\u70b9\u4e0d\u80fd\u6709\u7ea2\u7684\u7236\u8282\u70b9\u6216\u5b50\u8282\u70b9\uff1b)"),(0,o.kt)("li",{parentName:"ol"},"\u4ece\u4efb\u610f\u8282\u70b9\u5230\u5176\u6bcf\u4e2a\u53f6\u5b50\u8282\u70b9\u7684\u6240\u6709\u8def\u5f84\u90fd\u5305\u542b\u76f8\u540c\u6570\u76ee\u7684\u9ed1\u8272\u8282\u70b9\u3002\n\u4ece\u6027\u8d285\u53c8\u53ef\u4ee5\u63a8\u51fa\uff1a\u6027\u8d285.1\uff1a\u5982\u679c\u4e00\u4e2a\u7ed3\u70b9\u5b58\u5728\u9ed1\u5b50\u7ed3\u70b9\uff0c\u90a3\u4e48\u8be5\u7ed3\u70b9\u80af\u5b9a\u6709\u4e24\u4e2a\u5b50\u7ed3\u70b9\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"         11(B)\n        /     \\\n      2(B)    14(R)\n     /   \\   /   \\\n  1(B)  7(B)13(B)15(B)\n         \\\n         8(R)\n\u5728\u8fd9\u4e2a\u6811\u4e2d\uff0c\u8282\u70b911\u30012\u30011\u30017\u300113\u548c15\u90fd\u662f\u9ed1\u8272\u8282\u70b9\uff0c\u8282\u70b914\u548c8\u662f\u7ea2\u8272\u8282\u70b9\u3002\u6bcf\u4e2a\u7ea2\u8272\u8282\u70b9\u7684\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u662f\u9ed1\u8272\u7684\uff0c\u4ece\u6839\u8282\u70b9\u5230\u4efb\u4f55\u4e00\u4e2a\u53f6\u5b50\u8282\u70b9\u7684\u8def\u5f84\u4e0a\u7684\u9ed1\u8272\u8282\u70b9\u6570\u91cf\u662f\u76f8\u540c\u7684\uff0c\u53733\u4e2a\u3002\u8fd9\u6ee1\u8db3\u4e86\u7ea2\u9ed1\u6811\u7684\u6240\u6709\u89c4\u5219\u3002\n\n")),(0,o.kt)("p",null,"Q1.\u7ea2\u9ed1\u6811\u53ef\u4e0d\u53ef\u4ee5\u5168\u4e3a\u9ed1\u7ed3\u70b9\uff1f"),(0,o.kt)("p",null,"A\uff1a\u4e0d\u53ef\u4ee5\u3002\n\u53cd\u8bc1\u6cd5\uff1a\u5047\u8bbe\u6709\u4e00\u9897\u7ea2\u9ed1\u6ee1\u4e8c\u53c9\u6811\u7ed3\u70b9\u90fd\u4e3a\u9ed1\u8272\u7ed3\u70b9\u65f6\uff0c\u6b64\u65f6\u6dfb\u52a0\u4e00\u4e2a\u9ed1\u8272\u7ed3\u70b9\uff0c\u4e0d\u6ee1\u8db3\uff085\uff09\u7279\u6027\uff0c\u4f46\u662f\u5c31\u7b97\u7ecf\u8fc7\u65cb\u8f6c\uff0c\u4e5f\u65e0\u6cd5\u6ee1\u8db3\uff085\uff09\u7279\u6027\uff0c\u5927\u5bb6\u90fd\u662f\u9ed1\u8272\uff0c\u53d8\u4e0d\u4e86\u7ea2\u9ed1\u6811\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u89c4\u5219\u4fdd\u8bc1\u4e86\u7ea2\u9ed1\u6811\u7684\u5e73\u8861\u6027\u8d28\uff0c\u4f7f\u5f97\u5b83\u7684\u6700\u574f\u60c5\u51b5\u4e0b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n)\uff0c\u5176\u4e2d n \u4e3a\u6811\u4e2d\u8282\u70b9\u7684\u6570\u91cf\u3002\u56e0\u6b64\uff0c\u7ea2\u9ed1\u6811\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u9700\u8981\u9ad8\u6548\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u64cd\u4f5c\u7684\u6570\u636e\u7ed3\u6784\u9886\u57df\uff0c\u6bd4\u5982\u5728 C++ STL \u4e2d\u7684 map \u548c set \u5bb9\u5668\u5c31\u662f\u57fa\u4e8e\u7ea2\u9ed1\u6811\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("p",null,"\u6027\u8d284\uff1a\u6bcf\u4e2a\u7ea2\u8272\u7ed3\u70b9\u7684\u4e24\u4e2a\u5b50\u7ed3\u70b9\u4e00\u5b9a\u90fd\u662f\u9ed1\u8272\u3002(\u4e0d\u80fd\u6709\u4e24\u4e2a\u8fde\u7eed\u7684\u7ea2\u8272\u8282\u70b9)\n2000\u7684\u5b50\u8282\u70b9\u4e0d\u662f\u9ed1\u8272\uff0c\u4e0d\u6ee1\u8db3\u6027\u8d284\uff0c\u9700\u8981\u8fdb\u884c\u201c\u81ea\u5e73\u8861\u201d\u64cd\u4f5c\u3002\n",(0,o.kt)("img",{src:t(20198).Z,width:"525",height:"464"})),(0,o.kt)("p",null,"\u5e73\u8861\u540e\n",(0,o.kt)("img",{src:t(58550).Z,width:"538",height:"410"})),(0,o.kt)("h2",{id:"\u7ea2\u9ed1\u6811\u7684\u81ea\u5e73\u8861\u64cd\u4f5c"},"\u7ea2\u9ed1\u6811\u7684\u81ea\u5e73\u8861\u64cd\u4f5c"),(0,o.kt)("p",null,"\u524d\u9762\u8bb2\u5230\u7ea2\u9ed1\u6811\u80fd\u81ea\u5e73\u8861\uff0c\u5b83\u9760\u7684\u662f\u4ec0\u4e48\uff1f\n\u4e09\u79cd\u64cd\u4f5c\uff1a\u5de6\u65cb\u3001\u53f3\u65cb\u548c\u53d8\u8272\u3002"),(0,o.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,o.kt)("p",null,"(1) \u67e5\u627e\u4ee3\u4ef7\uff1a\n\u7531\u4e8e\u7ea2\u9ed1\u6811\u7684\u6027\u8d28(\u6700\u957f\u8def\u5f84\u957f\u5ea6\u4e0d\u8d85\u8fc7\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u76842\u500d)\uff0c\u53ef\u4ee5\u8bf4\u660e\u7ea2\u9ed1\u6811\u867d\u7136\u4e0d\u50cfAVL\u4e00\u6837\u662f\u4e25\u683c\u5e73\u8861\u7684\uff0c\u4f46\u5e73\u8861\u6027\u80fd\u8fd8\u662f\u8981\u6bd4BST\u8981\u597d\u3002\u5176\u67e5\u627e\u4ee3\u4ef7\u57fa\u672c\u7ef4\u6301\u5728O(logN)\u5de6\u53f3\uff0c\u4f46\u5728\u6700\u5dee\u60c5\u51b5\u4e0b(\u6700\u957f\u8def\u5f84\u662f\u6700\u77ed\u8def\u5f84\u76842\u500d\u5c111)\uff0c\u6bd4AVL\u8981\u7565\u900a\u8272\u4e00\u70b9"),(0,o.kt)("p",null,"(2) \u63d2\u5165\u4ee3\u4ef7\uff1a\nRBT\u63d2\u5165\u7ed3\u70b9\u65f6\uff0c\u9700\u8981\u65cb\u8f6c\u64cd\u4f5c\u548c\u53d8\u8272\u64cd\u4f5c\u3002\u4f46\u7531\u4e8e\u53ea\u9700\u8981\u4fdd\u8bc1RBT\u57fa\u672c\u5e73\u8861\u5c31\u53ef\u4ee5\u4e86\u3002\u56e0\u6b64\u63d2\u5165\u7ed3\u70b9\u6700\u591a\u53ea\u9700\u89812\u6b21\u65cb\u8f6c\uff0c\u8fd9\u4e00\u70b9\u548cAVL\u7684\u63d2\u5165\u64cd\u4f5c\u4e00\u6837\u3002\u867d\u7136\u53d8\u8272\u64cd\u4f5c\u9700\u8981O(logN)\uff0c\u4f46\u662f\u53d8\u8272\u64cd\u4f5c\u5341\u5206\u7b80\u5355\uff0c\u4ee3\u4ef7\u5f88\u5c0f\u3002"),(0,o.kt)("p",null,"(3) \u5220\u9664\u4ee3\u4ef7\uff1a\nRBT\u7684\u5220\u9664\u64cd\u4f5c\u4ee3\u4ef7\u8981\u6bd4AVL\u8981\u597d\u7684\u591a\uff0c\u5220\u9664\u4e00\u4e2a\u7ed3\u70b9\u6700\u591a\u53ea\u9700\u89813\u6b21\u65cb\u8f6c\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u7684\u6700\u5927\u8def\u5f84\u4e0d\u80fd\u5927\u4e8e\u6700\u77ed\u8def\u5f84\u7684\u4e24\u500d\u957f,\u5927\u81f4\u4e0a\u662f\u5e73\u8861\u7684\uff0c\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u67d0\u4e2a\u503c\u7684\u6700\u574f\u60c5\u51b5\u65f6\u95f4\u90fd\u8981\u6c42\u4e0e\u6811\u7684\u9ad8\u5ea6\u6210\u6bd4\u4f8b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u67e5\u627e\u3001\u63d2\u5165\u3001\u5220\u9664\u9891\u7387\u5dee\u4e0d\u591a\uff0c\u90a3\u4e48\u9009\u62e9\u7ea2\u9ed1\u6811\u3002"),(0,o.kt)("h2",{id:"3\u5411\u7ea2\u9ed1\u6811\u4e2d\u63d2\u5165\u8282\u70b9"},"3.\u5411\u7ea2\u9ed1\u6811\u4e2d\u63d2\u5165\u8282\u70b9"),(0,o.kt)("p",null,"\u5411\u7ea2\u9ed1\u6811\u63d2\u5165\u8282\u70b9\u548c\u5728\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u662f\u4e00\u6837\u7684\u3002\u9664\u4e86\u63d2\u5165\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u8fd8\u8981\u5728\u63d2\u5165\u540e\u7ed9\u8282\u70b9\u5e94\u7528\u4e00\u79cd\u989c\u8272\uff0c\n\u5e76\u4e14\u9a8c\u8bc1\u6811\u662f\u5426\u6ee1\u8db3\u7ea2\u9ed1\u6811\u7684\u6761\u4ef6\u4ee5\u53ca\u662f\u5426\u8fd8\u662f\u81ea\u5e73\u8861\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"insert(key: T) { \n    // special case: first key\n    if (this.root == null) { // 1\n      this.root = new RedBlackNode(key); // 2\n      this.root.color = Colors.BLACK; // 3\n    } else {\n      const newNode = this.insertNode(this.root, key); // 4\n      this.fixTreeProperties(newNode); // 5\n    }\n}\n/*\n\u4e3a\u4e86\u6ee1\u8db3\u89c4\u52192\uff0c\u6211\u4eec\u8981\u5c06\u8fd9\u4e2a\u6839\u8282\u70b9\u7684\u989c\u8272\u8bbe\u4e3a\u9ed1\u8272\uff08\u884c{3}\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u521b\u5efa\u7684\u8282\u70b9\u989c\u8272\u662f\u7ea2\u8272\uff08\u884c{6}\uff09\u3002\n\u5982\u679c\u6811\u4e0d\u662f\u7a7a\u7684\uff0c\u6211\u4eec\u4f1a\u50cf\u4e8c\u53c9\u641c\u7d22\u6811\u4e00\u6837\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u63d2\u5165\u8282\u70b9\uff08\u884c{4}\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cinsertNode\u65b9\u6cd5\n\u9700\u8981\u8fd4\u56de\u65b0\u63d2\u5165\u7684\u8282\u70b9\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u9a8c\u8bc1\u5728\u63d2\u5165\u540e\uff0c\u7ea2\u9ed1\u6811\u7684\u89c4\u5219\u662f\u5426\u5f97\u5230\u4e86\u6ee1\u8db3\uff08\u884c{5}\uff09\u3002\n* */\n")),(0,o.kt)("p",null,"\u5bf9\u7ea2\u9ed1\u6811\u6765\u8bf4\uff0c\u8282\u70b9\u548c\u4e4b\u524d\u6bd4\u8d77\u6765\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u5c5e\u6027\uff1a\u8282\u70b9\u7684\u989c\u8272\uff08\u884c{6}\uff09\u548c\u6307\u5411\u7236\u8282\u70b9\u7684\u5f15\u7528\uff08\u884c{7}\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Node } from './node';\n\nexport enum Colors {\n  RED = 0,\n  BLACK = 1\n}\n\nexport class RedBlackNode<K> extends Node<K> {\n  left: RedBlackNode<K>;\n  right: RedBlackNode<K>;\n  parent: RedBlackNode<K>;\n  color: Colors;\n\n  constructor(public key: K) {\n    super(key);\n    this.color = Colors.RED; // 6\n  }\n\n  isRed() {\n    return this.color === Colors.RED;\n  }\n\n  flipColor() {\n    if (this.color === Colors.RED) {\n      this.color = Colors.BLACK;\n    } else {\n      this.color = Colors.RED;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u91cd\u5199insertNode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u903b\u8f91\u548c\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e00\u6837\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u6211\u4eec\u4fdd\u5b58\u4e86\u6307\u5411\u88ab\u63d2\u5165\u8282\u70b9\u7236\u8282\u70b9\u7684\u5f15\u7528\uff08\u884c{8}\u548c\u884c{10}\uff09\uff0c\u5e76\u4e14\u8fd4\u56de\u4e86\u8282\u70b9\u7684\u5f15\u7528\uff08\u884c{9}\u548c\u884c{11}\uff09\uff0c\n\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u5728\u540e\u9762\u9a8c\u8bc1\u6811\u7684\u5c5e\u6027\u3002\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \nprotected insertNode(node: RedBlackNode<T>, key: T): RedBlackNode<T> {\n    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {\n        if (node.left == null) {\n            node.left = new RedBlackNode(key);\n            node.left.parent = node; // 8\n            return node.left; // 9\n        } else {\n            return this.insertNode(node.left, key);\n        }\n    } else if (node.right == null) {\n        node.right = new RedBlackNode(key);\n        node.right.parent = node; // 10\n        return node.right; // 11\n    } else {\n        return this.insertNode(node.right, key);\n    }\n}\n\n// BinarySearchTree\ninsertNode(node, key) {\n    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {\n      if (node.left == null) {\n        node.left = new Node(key);\n      } else {\n        this.insertNode(node.left, key);\n      }\n    } else if (node.right == null) {\n      node.right = new Node(key);\n    } else {\n      this.insertNode(node.right, key);\n    }\n}\n")),(0,o.kt)("h2",{id:"4\u5728\u63d2\u5165\u8282\u70b9\u540e\u9a8c\u8bc1\u7ea2\u9ed1\u6811\u5c5e\u6027"},"4.\u5728\u63d2\u5165\u8282\u70b9\u540e\u9a8c\u8bc1\u7ea2\u9ed1\u6811\u5c5e\u6027"),(0,o.kt)("p",null,"\u8981\u9a8c\u8bc1\u7ea2\u9ed1\u6811\u662f\u5426\u8fd8\u662f\u5e73\u8861\u7684\u4ee5\u53ca\u6ee1\u8db3\u5b83\u7684\u6240\u6709\u8981\u6c42\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u6982\u5ff5\uff1a\u91cd\u65b0\u586b\u8272\u548c\u65cb\u8f6c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5728\u5411\u6811\u4e2d\u63d2\u5165\u8282\u70b9\u540e\uff0c\u65b0\u8282\u70b9\u5c06\u4f1a\u662f\u7ea2\u8272\u3002\u8fd9\u4e0d\u4f1a\u5f71\u54cd\u9ed1\u8272\u8282\u70b9\u6570\u91cf\u7684\u89c4\u5219\uff08\u89c4\u52196\uff09\uff0c\n\u4f46\u4f1a\u5f71\u54cd\u89c4\u52195\uff1a\u4e24\u4e2a\u540e\u4ee3\u7ea2\u8282\u70b9\u4e0d\u80fd\u5171\u5b58\u3002\u5982\u679c\u63d2\u5165\u8282\u70b9\u7684\u7236\u8282\u70b9\u662f\u9ed1\u8272\uff0c\u90a3\u6ca1\u6709\u95ee\u9898\u3002\n\n\u4f46\u662f\u5982\u679c\u63d2\u5165\u8282\u70b9\u7684\u7236\u8282\u70b9\u662f\u7ea2\u8272\uff0c\u90a3\u4e48\u4f1a\u8fdd\u53cd\u89c4\u52195\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u51b2\u7a81\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6539\u53d8\u7236\u8282\u70b9\u3001\u7956\u7236\u8282\u70b9\u548c\u53d4\u8282\u70b9\uff08\u56e0\u4e3a\u6211\u4eec\u540c\u6837\u6539\u53d8\u4e86\u7236\u8282\u70b9\u7684\u989c\u8272\uff09\u3002\n")))}d.isMDXComponent=!0},20198:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/\u7ea2\u9ed11-5faa06c936e82b865b7175c67ae5ce99.png"},58550:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/\u7ea2\u9ed12-531a2c950e1e4e15339c1cfa85c5b62f.png"}}]);