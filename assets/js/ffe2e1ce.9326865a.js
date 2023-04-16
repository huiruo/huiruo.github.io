"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={title:"\u4f8b2-\u81ea\u5e73\u8861\u6811",sidebar_position:1},i=void 0,o={unversionedId:"structure-algorithm/\u6811/\u81ea\u5e73\u8861\u6811",id:"structure-algorithm/\u6811/\u81ea\u5e73\u8861\u6811",title:"\u4f8b2-\u81ea\u5e73\u8861\u6811",description:"\u81ea\u5e73\u8861\u6811:Adelson-Velskii-Landi\u6811\uff08AVL\u6811\uff09",source:"@site/programming-tech/structure-algorithm/08-\u6811/07-\u81ea\u5e73\u8861\u6811.md",sourceDirName:"structure-algorithm/08-\u6811",slug:"/structure-algorithm/\u6811/\u81ea\u5e73\u8861\u6811",permalink:"/structure-algorithm/\u6811/\u81ea\u5e73\u8861\u6811",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/08-\u6811/07-\u81ea\u5e73\u8861\u6811.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4f8b2-\u81ea\u5e73\u8861\u6811",sidebar_position:1},sidebar:"structureAlgorithm",previous:{title:"\u4f8b1-\u4e8c\u53c9\u641c\u7d22\u6811-BST",permalink:"/structure-algorithm/\u6811/\u4e8c\u53c9\u641c\u7d22\u6811-BST"},next:{title:"\u4f8b3-\u7ea2\u9ed1\u6811",permalink:"/structure-algorithm/\u6811/\u7ea2\u9ed1\u6811"}},c={},p=[{value:"\u81ea\u5e73\u8861\u6811:Adelson-Velskii-Landi\u6811\uff08AVL\u6811\uff09",id:"\u81ea\u5e73\u8861\u6811adelson-velskii-landi\u6811avl\u6811",level:2},{value:"2.\u5b9e\u73b0\uff1aAVL\u6811",id:"2\u5b9e\u73b0avl\u6811",level:2},{value:"2-1.\u76f8\u5173\u672f\u8bed",id:"2-1\u76f8\u5173\u672f\u8bed",level:2},{value:"2-1-1.\u8282\u70b9\u7684\u9ad8\u5ea6\u548c\u5e73\u8861\u56e0\u5b50",id:"2-1-1\u8282\u70b9\u7684\u9ad8\u5ea6\u548c\u5e73\u8861\u56e0\u5b50",level:2},{value:"2-1-2.\u5e73\u8861\u64cd\u4f5c\u2014\u2014AVL\u65cb\u8f6c",id:"2-1-2\u5e73\u8861\u64cd\u4f5cavl\u65cb\u8f6c",level:2},{value:"2-1-2-a.\u5de6-\u5de6\uff08LL\uff09\uff1a\u5411\u53f3\u7684\u5355\u65cb\u8f6c",id:"2-1-2-a\u5de6-\u5de6ll\u5411\u53f3\u7684\u5355\u65cb\u8f6c",level:2},{value:"2-1-2-b.\u53f3-\u53f3\uff08RR\uff09\uff1a\u5411\u5de6\u7684\u5355\u65cb\u8f6c",id:"2-1-2-b\u53f3-\u53f3rr\u5411\u5de6\u7684\u5355\u65cb\u8f6c",level:2},{value:"2-1-2-c.\u5de6-\u53f3\uff08LR\uff09\uff1a\u5411\u53f3\u7684\u53cc\u65cb\u8f6c\uff08\u5148LL\u65cb\u8f6c\uff0c\u518dRR\u65cb\u8f6c\uff09",id:"2-1-2-c\u5de6-\u53f3lr\u5411\u53f3\u7684\u53cc\u65cb\u8f6c\u5148ll\u65cb\u8f6c\u518drr\u65cb\u8f6c",level:2},{value:"2-1-2-d.\u53f3-\u5de6\uff08RL\uff09\uff1a\u5411\u5de6\u7684\u53cc\u65cb\u8f6c\uff08\u5148RR\u65cb\u8f6c\uff0c\u518dLL\u65cb\u8f6c\uff09",id:"2-1-2-d\u53f3-\u5de6rl\u5411\u5de6\u7684\u53cc\u65cb\u8f6c\u5148rr\u65cb\u8f6c\u518dll\u65cb\u8f6c",level:2},{value:"1.\u5411AVL\u6811\u63d2\u5165\u8282\u70b9",id:"1\u5411avl\u6811\u63d2\u5165\u8282\u70b9",level:2},{value:"2.\u4eceAVL\u6811\u4e2d\u79fb\u9664\u8282\u70b9",id:"2\u4eceavl\u6811\u4e2d\u79fb\u9664\u8282\u70b9",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u81ea\u5e73\u8861\u6811adelson-velskii-landi\u6811avl\u6811"},"\u81ea\u5e73\u8861\u6811:Adelson-Velskii-Landi\u6811\uff08AVL\u6811\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u4e8c\u53c9\u641c\u7d22\u6811BST \u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff1a\u53d6\u51b3\u4e8e\u4f60\u6dfb\u52a0\u7684\u8282\u70b9\u6570\uff0c\u6811\u7684\u4e00\u6761\u8fb9\u53ef\u80fd\u4f1a\u975e\u5e38\u6df1\uff1b\u4e5f\u5c31\u662f\u8bf4\uff0c\u6811\u7684\u4e00\u6761\u5206\u652f\u4f1a\u6709\u5f88\u591a\u5c42\uff0c\u800c\u5176\u4ed6\u7684\u5206\u652f\u5374\u53ea\u6709\u51e0\u5c42\n\n\u8fd9\u4f1a\u5728\u9700\u8981\u5728\u67d0\u6761\u8fb9\u4e0a\u6dfb\u52a0\u3001\u79fb\u9664\u548c\u641c\u7d22\u67d0\u4e2a\u8282\u70b9\u65f6\u5f15\u8d77\u4e00\u4e9b\u6027\u80fd\u95ee\u9898\u3002\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6709\u4e00\u79cd\u6811\u53eb\u4f5cAdelson-Velskii-Landi\u6811\uff08AVL\u6811\uff09\u3002\nAVL\u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u610f\u601d\u662f\u4efb\u4f55\u4e00\u4e2a\u8282\u70b9\u5de6\u53f3\u4e24\u4fa7\u5b50\u6811\u7684\u9ad8\u5ea6\u4e4b\u5dee\u6700\u591a\u4e3a1\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(71924).Z,width:"378",height:"357"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AVL\u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u6811\u3002\u6dfb\u52a0\u6216\u79fb\u9664\u8282\u70b9\u65f6\uff0cAVL\u6811\u4f1a\u5c1d\u8bd5\u4fdd\u6301\u81ea\u5e73\u8861\u3002\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\uff08\u4e0d\u8bba\u6df1\u5ea6\uff09\u7684\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u9ad8\u5ea6\u6700\u591a\u76f8\u5dee1\u3002\n\u6dfb\u52a0\u6216\u79fb\u9664\u8282\u70b9\u65f6\uff0cAVL\u6811\u4f1a\u5c3d\u53ef\u80fd\u5c1d\u8bd5\u8f6c\u6362\u4e3a\u5b8c\u5168\u6811\u3002\n")),(0,l.kt)("h2",{id:"2\u5b9e\u73b0avl\u6811"},"2.\u5b9e\u73b0\uff1aAVL\u6811"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65e2\u7136AVL\u6811\u662f\u4e00\u4e2aBST\uff0c\u6211\u4eec\u53ef\u4ee5\u6269\u5c55\u6211\u4eec\u5199\u7684BST\u7c7b\uff0c\u53ea\u9700\u8981\u8986\u76d6\u7528\u6765\u7ef4\u6301AVL\u6811\u5e73\u8861\u7684\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662finsert\u3001insertNode\u548cremoveNode\u65b9\u6cd5\u3002\n\u6240\u6709\u5176\u4ed6\u7684BST\u65b9\u6cd5\u5c06\u4f1a\u88abAVLTree\u7c7b\u7ee7\u627f\u3002\n\n\u5728AVL\u6811\u4e2d\u63d2\u5165\u6216\u79fb\u9664\u8282\u70b9\u548cBST\u5b8c\u5168\u76f8\u540c\u3002\u7136\u800c\uff0cAVL\u6811\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u6211\u4eec\u9700\u8981\u68c0\u9a8c\u5b83\u7684\u5e73\u8861\u56e0\u5b50\uff0c\u5982\u679c\u6709\u9700\u8981\uff0c\u4f1a\u5c06\u5176\u903b\u8f91\u5e94\u7528\u4e8e\u6811\u7684\u81ea\u5e73\u8861\u3002\n")),(0,l.kt)("h2",{id:"2-1\u76f8\u5173\u672f\u8bed"},"2-1.\u76f8\u5173\u672f\u8bed"),(0,l.kt)("h2",{id:"2-1-1\u8282\u70b9\u7684\u9ad8\u5ea6\u548c\u5e73\u8861\u56e0\u5b50"},"2-1-1.\u8282\u70b9\u7684\u9ad8\u5ea6\u548c\u5e73\u8861\u56e0\u5b50"),(0,l.kt)("p",null,"\u6811\u7684\u8282\u70b9\u7684\u9ad8\u5ea6\uff1a\u662f\u4ece\u8282\u70b9\u5230\u5176\u4efb\u610f\u5b50\u8282\u70b9\u7684\u8fb9\u7684\u6700\u5927\u503c\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u4e00\u4e2a\u5305\u542b\u6bcf\u4e2a\u8282\u70b9\u9ad8\u5ea6\u7684\u6811\u3002\n",(0,l.kt)("img",{src:r(33219).Z,width:"431",height:"496"})),(0,l.kt)("p",null,"\u5e73\u8861\u56e0\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5728AVL\u6811\u4e2d\uff0c\u9700\u8981\u5bf9\u6bcf\u4e2a\u8282\u70b9\u8ba1\u7b97\u53f3\u5b50\u6811\u9ad8\u5ea6\uff08hr\uff09\u548c\u5de6\u5b50\u6811\u9ad8\u5ea6\uff08hl\uff09\u4e4b\u95f4\u7684\u5dee\u503c\uff0c\n\u8be5\u503c\uff08hr\uff0dhl\uff09\u5e94\u4e3a0\u30011\u6216-1\u3002\u5982\u679c\u7ed3\u679c\u4e0d\u662f\u8fd9\u4e09\u4e2a\u503c\u4e4b\u4e00\uff0c\u5219\u9700\u8981\u5e73\u8861\u8be5AVL\u6811\u3002\u8fd9\u5c31\u662f\u5e73\u8861\u56e0\u5b50\u7684\u6982\u5ff5\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(39884).Z,width:"462",height:"626"})),(0,l.kt)("h2",{id:"2-1-2\u5e73\u8861\u64cd\u4f5cavl\u65cb\u8f6c"},"2-1-2.\u5e73\u8861\u64cd\u4f5c\u2014\u2014AVL\u65cb\u8f6c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5728\u5bf9AVL\u6811\u6dfb\u52a0\u6216\u79fb\u9664\u8282\u70b9\u540e\uff0c\u6211\u4eec\u8981\u8ba1\u7b97\u8282\u70b9\u7684\u9ad8\u5ea6\u5e76\u9a8c\u8bc1\u6811\u662f\u5426\u9700\u8981\u8fdb\u884c\u5e73\u8861\u3002\n")),(0,l.kt)("p",null,"\u5411AVL\u6811\u63d2\u5165\u8282\u70b9\u65f6\uff0c\u53ef\u4ee5\u6267\u884c\u5355\u65cb\u8f6c\u6216\u53cc\u65cb\u8f6c\u4e24\u79cd\u5e73\u8861\u64cd\u4f5c\uff0c\u5206\u522b\u5bf9\u5e94\u56db\u79cd\u573a\u666f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5de6-\u5de6\uff08LL\uff09\uff1a\u5411\u53f3\u7684\u5355\u65cb\u8f6c\n\u53f3-\u53f3\uff08RR\uff09\uff1a\u5411\u5de6\u7684\u5355\u65cb\u8f6c\n\u5de6-\u53f3\uff08LR\uff09\uff1a\u5411\u53f3\u7684\u53cc\u65cb\u8f6c\uff08\u5148LL\u65cb\u8f6c\uff0c\u518dRR\u65cb\u8f6c\uff09\n\u53f3-\u5de6\uff08RL\uff09\uff1a\u5411\u5de6\u7684\u53cc\u65cb\u8f6c\uff08\u5148RR\u65cb\u8f6c\uff0c\u518dLL\u65cb\u8f6c\uff09\n")),(0,l.kt)("h2",{id:"2-1-2-a\u5de6-\u5de6ll\u5411\u53f3\u7684\u5355\u65cb\u8f6c"},"2-1-2-a.\u5de6-\u5de6\uff08LL\uff09\uff1a\u5411\u53f3\u7684\u5355\u65cb\u8f6c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd9\u79cd\u60c5\u51b5\u51fa\u73b0\u4e8e\u8282\u70b9\u7684\u5de6\u4fa7\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u5927\u4e8e\u53f3\u4fa7\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u65f6\uff0c\u5e76\u4e14\u5de6\u4fa7\u5b50\u8282\u70b9\u4e5f\u662f\u5e73\u8861\u6216\u5de6\u4fa7\u8f83\u91cd\u7684\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(22436).Z,width:"425",height:"351"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5047\u8bbe\u5411AVL\u6811\u63d2\u5165\u8282\u70b95\uff0c\u8fd9\u4f1a\u9020\u6210\u6811\u5931\u8861\uff08\u8282\u70b950-Y\u9ad8\u5ea6\u4e3a+2\uff09\uff0c\u9700\u8981\u6062\u590d\u6811\u7684\u5e73\u8861\u3002\u4e0b\u9762\u662f\u6211\u4eec\u6267\u884c\u7684\u64cd\u4f5c\uff1a\na.\u4e0e\u5e73\u8861\u64cd\u4f5c\u76f8\u5173\u7684\u8282\u70b9\u6709\u4e09\u4e2a\uff08X\u3001Y\u3001Z\uff09\uff0c\u5c06\u8282\u70b9X\u7f6e\u4e8e\u8282\u70b9Y\uff08\u5e73\u8861\u56e0\u5b50\u4e3a+2\uff09\u6240\u5728\u7684\u4f4d\u7f6e\uff08\u884c{1}\uff09\uff1b\n\nb.\u8282\u70b9X\u7684\u5de6\u5b50\u6811\u4fdd\u6301\u4e0d\u53d8\uff1b\n\nc.\u5c06\u8282\u70b9Y\u7684\u5de6\u5b50\u8282\u70b9\u7f6e\u4e3a\u8282\u70b9X\u7684\u53f3\u5b50\u8282\u70b9Z\uff08\u884c{2}\uff09\uff1b\n\nd.\u5c06\u8282\u70b9X\u7684\u53f3\u5b50\u8282\u70b9\u7f6e\u4e3a\u8282\u70b9Y\uff08\u884c{3}\uff09\u3002\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u4e3e\u4f8b\u8bf4\u660e\u4e86\u6574\u4e2a\u8fc7\u7a0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"rotationLL(node) {   \n    const tmp = node.left; // {1}   \n    node.left = tmp.right; // {2}   \n    tmp.right = node; // {3}   \n    return tmp; \n}\n")),(0,l.kt)("h2",{id:"2-1-2-b\u53f3-\u53f3rr\u5411\u5de6\u7684\u5355\u65cb\u8f6c"},"2-1-2-b.\u53f3-\u53f3\uff08RR\uff09\uff1a\u5411\u5de6\u7684\u5355\u65cb\u8f6c"),(0,l.kt)("h2",{id:"2-1-2-c\u5de6-\u53f3lr\u5411\u53f3\u7684\u53cc\u65cb\u8f6c\u5148ll\u65cb\u8f6c\u518drr\u65cb\u8f6c"},"2-1-2-c.\u5de6-\u53f3\uff08LR\uff09\uff1a\u5411\u53f3\u7684\u53cc\u65cb\u8f6c\uff08\u5148LL\u65cb\u8f6c\uff0c\u518dRR\u65cb\u8f6c\uff09"),(0,l.kt)("h2",{id:"2-1-2-d\u53f3-\u5de6rl\u5411\u5de6\u7684\u53cc\u65cb\u8f6c\u5148rr\u65cb\u8f6c\u518dll\u65cb\u8f6c"},"2-1-2-d.\u53f3-\u5de6\uff08RL\uff09\uff1a\u5411\u5de6\u7684\u53cc\u65cb\u8f6c\uff08\u5148RR\u65cb\u8f6c\uff0c\u518dLL\u65cb\u8f6c\uff09"),(0,l.kt)("h2",{id:"1\u5411avl\u6811\u63d2\u5165\u8282\u70b9"},"1.\u5411AVL\u6811\u63d2\u5165\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5411AVL\u6811\u63d2\u5165\u8282\u70b9\u548c\u5728BST\u4e2d\u662f\u4e00\u6837\u7684\u3002\u9664\u4e86\u63d2\u5165\u8282\u70b9\u5916\uff0c\u6211\u4eec\u8fd8\u8981\u9a8c\u8bc1\u63d2\u5165\u540e\u6811\u662f\u5426\u8fd8\u662f\u5e73\u8861\u7684\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u5c31\u8981\u8fdb\u884c\u5fc5\u8981\u7684\u65cb\u8f6c\u64cd\u4f5c\u3002\n\n\u5728\u5411AVL\u6811\u63d2\u5165\u8282\u70b9\u540e\uff0c\u6211\u4eec\u9700\u8981\u68c0\u67e5\u6811\u662f\u5426\u9700\u8981\u8fdb\u884c\u5e73\u8861\uff0c\u56e0\u6b64\u8981\u4f7f\u7528\u9012\u5f52\u8ba1\u7b97\u4ee5\u6bcf\u4e2a\u63d2\u5165\u6811\u7684\u8282\u70b9\u4e3a\u6839\u7684\u8282\u70b9\u7684\u5e73\u8861\u56e0\u5b50\uff08\u884c{1}\uff09\uff0c\n\u7136\u540e\u5bf9\u6bcf\u79cd\u60c5\u51b5\u5e94\u7528\u6b63\u786e\u7684\u65cb\u8f6c\u3002\n")),(0,l.kt)("h2",{id:"2\u4eceavl\u6811\u4e2d\u79fb\u9664\u8282\u70b9"},"2.\u4eceAVL\u6811\u4e2d\u79fb\u9664\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u4eceAVL\u6811\u79fb\u9664\u8282\u70b9\u548c\u5728BST\u4e2d\u662f\u4e00\u6837\u7684\u3002\u9664\u4e86\u79fb\u9664\u8282\u70b9\u5916\uff0c\u6211\u4eec\u8fd8\u8981\u9a8c\u8bc1\u79fb\u9664\u540e\u6811\u662f\u5426\u8fd8\u662f\u5e73\u8861\u7684\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u5c31\u8981\u8fdb\u884c\u5fc5\u8981\u7684\u65cb\u8f6c\u64cd\u4f5c\u3002\n\n\u65e2\u7136AVLTree\u7c7b\u662fBinarySearchTree\u7c7b\u7684\u5b50\u7c7b\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528BST\u7684removeNode\u65b9\u6cd5\u6765\u4eceAVL\u6811\u4e2d\u79fb\u9664\u8282\u70b9\uff08\u884c{1}\uff09\u3002\u5728\u4eceAVL\u6811\u4e2d\u79fb\u9664\u8282\u70b9\u540e\uff0c\n\u6211\u4eec\u9700\u8981\u68c0\u67e5\u6811\u662f\u5426\u9700\u8981\u8fdb\u884c\u5e73\u8861\uff0c\u6240\u4ee5\u4f7f\u7528\u9012\u5f52\u8ba1\u7b97\u4ee5\u6bcf\u4e2a\u79fb\u9664\u7684\u8282\u70b9\u4e3a\u6839\u7684\u8282\u70b9\u7684\u5e73\u8861\u56e0\u5b50\uff08\u884c{2}\uff09\uff0c\u7136\u540e\u9700\u8981\u5bf9\u6bcf\u79cd\u60c5\u51b5\u5e94\u7528\u6b63\u786e\u7684\u65cb\u8f6c\u3002\n")))}s.isMDXComponent=!0},71924:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u56fe4\u6811-a50b79a0f3f46edfc8080dfd5a19423a.png"},33219:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u56fe5\u6811-16a2f86635f0b0412d2b785c3ea167af.png"},39884:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u56fe6\u6811-07dc83aece38cda1473f0098e1b51ee7.png"},22436:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u56fe7\u6811-32de7ec966ae3917c71a4c79cff67b06.png"}}]);