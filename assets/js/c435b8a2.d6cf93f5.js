"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1878],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=l,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(k,a(a({ref:n},c),{},{components:t})):r.createElement(k,a({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const o={title:"\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",sidebar_position:1},a="\u4e8c\u53c9\u6811\u7684\u79cd\u7c7b",i={unversionedId:"structure-algorithm/\u6811/\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",id:"structure-algorithm/\u6811/\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",title:"\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",description:"\u4e8c\u53c9\u6811\u7684\u5b9a\u4e49",source:"@site/programming-tech/structure-algorithm/08-\u6811/02-\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b.md",sourceDirName:"structure-algorithm/08-\u6811",slug:"/structure-algorithm/\u6811/\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",permalink:"/structure-algorithm/\u6811/\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/structure-algorithm/08-\u6811/02-\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4e8c\u53c9\u6811-\u4e8c\u53c9\u6811\u79cd\u7c7b",sidebar_position:1},sidebar:"structureAlgorithm",previous:{title:"\u6811",permalink:"/structure-algorithm/\u6811/\u6811"},next:{title:"\u4e8c\u53c9\u641c\u7d22\u6811-BST",permalink:"/structure-algorithm/\u6811/\u4e8c\u53c9\u641c\u7d22\u6811-BST"}},u={},p=[{value:"\u4e8c\u53c9\u6811\u7684\u5b9a\u4e49",id:"\u4e8c\u53c9\u6811\u7684\u5b9a\u4e49",level:2},{value:"1.\u4e8c\u53c9\u641c\u7d22\u6811",id:"1\u4e8c\u53c9\u641c\u7d22\u6811",level:2},{value:"2.\u81ea\u5e73\u8861\u6811",id:"2\u81ea\u5e73\u8861\u6811",level:2},{value:"3.\u81ea\u5e73\u8861\u6811\u4e4b\u7ea2\u9ed1\u6811",id:"3\u81ea\u5e73\u8861\u6811\u4e4b\u7ea2\u9ed1\u6811",level:2},{value:"4.\u81ea\u5e73\u8861\u6811\u4e4bAVL \u6811",id:"4\u81ea\u5e73\u8861\u6811\u4e4bavl-\u6811",level:2},{value:"\u5b9e\u4f8b\uff1a\u4e8c\u53c9\u641c\u7d22\u6811",id:"\u5b9e\u4f8b\u4e8c\u53c9\u641c\u7d22\u6811",level:2},{value:"\u598203\u4f8b\u5b50",id:"\u598203\u4f8b\u5b50",level:2},{value:"\u8981\u5411\u6811\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u8282\u70b9\uff08\u6216\u952e\uff09\uff0c\u8981\u7ecf\u5386\u4e09\u4e2a\u6b65\u9aa4",id:"\u8981\u5411\u6811\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u8282\u70b9\u6216\u952e\u8981\u7ecf\u5386\u4e09\u4e2a\u6b65\u9aa4",level:2},{value:"\u6811\u7684\u904d\u5386",id:"\u6811\u7684\u904d\u5386",level:2}],c={toc:p},s="wrapper";function d(e){let{components:n,...o}=e;return(0,l.kt)(s,(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e8c\u53c9\u6811\u7684\u79cd\u7c7b"},"\u4e8c\u53c9\u6811\u7684\u79cd\u7c7b"),(0,l.kt)("h2",{id:"\u4e8c\u53c9\u6811\u7684\u5b9a\u4e49"},"\u4e8c\u53c9\u6811\u7684\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      1\n    /   \\\n  2     3\n  / \\   / \\\n4   5 6   7\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u6bcf\u4e2a\u8282\u70b9\u6700\u591a\u6709\u4e24\u4e2a\u5b50\u8282\u70b9\uff0c\u79f0\u4e3a\u5de6\u5b50\u8282\u70b9\u548c\u53f3\u5b50\u8282\u70b9\u3002\u5982\u679c\u67d0\u4e2a\u8282\u70b9\u6ca1\u6709\u5b50\u8282\u70b9\uff0c\u5219\u5b83\u88ab\u79f0\u4e3a\u53f6\u8282\u70b9\u6216\u53f6\u5b50\u3002\u6811\u7684\u6700\u4e0a\u5c42\u8282\u70b9\u88ab\u79f0\u4e3a\u6839\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u5728\u4e8c\u53c9\u6811\u4e2d\uff0c\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u4e5f\u662f\u4e8c\u53c9\u6811\uff0c\u5b83\u4eec\u7531\u6839\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u8282\u70b9\u5f62\u6210\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5b9a\u4e49\u6709\u52a9\u4e8e\u6211\u4eec\u5199\u51fa\u66f4\u9ad8\u6548\u5730\u5728\u6811\u4e2d\u63d2\u5165\u3001\u67e5\u627e\u548c\u5220\u9664\u8282\u70b9\u7684\u7b97\u6cd5\u3002\u4e8c\u53c9\u6811\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\u7684\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. \u5b58\u50a8\u6709\u5c42\u7ea7\u5173\u7cfb\u7684\u6570\u636e\u3002\u4e8c\u53c9\u6811\u53ef\u4ee5\u7528\u6765\u8868\u793a\u5177\u6709\u5c42\u7ea7\u5173\u7cfb\u7684\u6570\u636e\uff0c\u4f8b\u5982\u7ec4\u7ec7\u673a\u6784\u3001\u6587\u4ef6\u7cfb\u7edf\u7b49\u3002\u6bcf\u4e2a\u8282\u70b9\u8868\u793a\u4e00\u4e2a\u5b9e\u4f53\uff0c\u8282\u70b9\u4e4b\u95f4\u7684\u5c42\u7ea7\u5173\u7cfb\u8868\u793a\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\n\n2. \u5feb\u901f\u67e5\u627e\u3001\u63d2\u5165\u3001\u5220\u9664\u6570\u636e\u3002\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e4b\u95f4\u5b58\u5728\u4e00\u5b9a\u7684\u6709\u5e8f\u6027\uff0c\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u7279\u70b9\u8fdb\u884c\u5feb\u901f\u7684\u67e5\u627e\u3001\u63d2\u5165\u3001\u5220\u9664\u64cd\u4f5c\u3002\u4e8c\u53c9\u641c\u7d22\u6811\u662f\u4e00\u79cd\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u53ef\u4ee5\u5b9e\u73b0\u5feb\u901f\u7684\u67e5\u627e\u3001\u63d2\u5165\u3001\u5220\u9664\u64cd\u4f5c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n)\u3002\n\n3. \u63d0\u4f9b\u6392\u5e8f\u529f\u80fd\u3002\u4e8c\u53c9\u641c\u7d22\u6811\u53ef\u4ee5\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\uff0c\u6392\u5e8f\u540e\u7684\u6570\u636e\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fdb\u884c\u67e5\u627e\u548c\u904d\u5386\u64cd\u4f5c\u3002\n\n4. \u4f5c\u4e3a\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u7684\u57fa\u7840\u3002\u4e8c\u53c9\u6811\u662f\u8bb8\u591a\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u7684\u57fa\u7840\uff0c\u4f8b\u5982\u7ea2\u9ed1\u6811\u3001AVL\u6811\u3001\u5806\u7b49\u3002\u8fd9\u4e9b\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u9ad8\u6548\u5730\u7ef4\u62a4\u6709\u5e8f\u6570\u636e\u3001\u5b9e\u73b0\u4f18\u5148\u961f\u5217\u7b49\u3002\n")),(0,l.kt)("p",null,"\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f\u5305\u62ec\u524d\u5e8f\u904d\u5386\u3001\u4e2d\u5e8f\u904d\u5386\u548c\u540e\u5e8f\u904d\u5386\u3002"),(0,l.kt)("h2",{id:"1\u4e8c\u53c9\u641c\u7d22\u6811"},"1.\u4e8c\u53c9\u641c\u7d22\u6811"),(0,l.kt)("p",null,"BST \u6811\uff0c\u5168\u79f0\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811\uff08Binary Search Tree\uff09\uff0c\u662f\u4e00\u79cd\u57fa\u4e8e\u4e8c\u5206\u67e5\u627e\u7684\u4e8c\u53c9\u6811\u7ed3\u6784\uff0c\u5b83\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u5305\u542b\u4e00\u4e2a\u5173\u952e\u5b57\uff0c\u4e14\u6240\u6709\u8282\u70b9\u7684\u5173\u952e\u5b57\u90fd\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8282\u70b9\u7684\u503c\u90fd\u5927\u4e8e\u5176\u5de6\u5b50\u6811\u4e2d\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\u7684\u503c"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8282\u70b9\u7684\u503c\u90fd\u5c0f\u4e8e\u5176\u53f3\u5b50\u6811\u4e2d\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\u7684\u503c"),(0,l.kt)("li",{parentName:"ol"},"\u5de6\u53f3\u5b50\u6811\u90fd\u662f\u4e8c\u53c9\u641c\u7d22\u6811")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      6\n    /   \\\n  4     9\n  / \\   / \\\n2   5 8  10\n")),(0,l.kt)("p",null,"BST \u6811\u7684\u4e3b\u8981\u7279\u70b9\u662f\u652f\u6301\u5feb\u901f\u7684\u67e5\u627e\u3001\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u5747\u4e3a O(log n)\uff0c\u5176\u4e2d n \u662f\u6811\u4e2d\u8282\u70b9\u7684\u6570\u91cf\u3002\u5177\u4f53\u5730\uff0c\u5bf9\u4e8e\u67e5\u627e\u64cd\u4f5c\uff0c\u4ece\u6839\u8282\u70b9\u5f00\u59cb\uff0c\u4e0d\u65ad\u4e0e\u76ee\u6807\u5173\u952e\u5b57\u6bd4\u8f83\uff0c\u6839\u636e\u6bd4\u8f83\u7ed3\u679c\u9009\u62e9\u5de6\u5b50\u6811\u6216\u53f3\u5b50\u6811\u7ee7\u7eed\u67e5\u627e\uff0c\u76f4\u5230\u627e\u5230\u76ee\u6807\u8282\u70b9\u6216\u9047\u5230\u7a7a\u8282\u70b9\u4e3a\u6b62\u3002\u5bf9\u4e8e\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\uff0c\u9996\u5148\u9700\u8981\u6309\u7167\u67e5\u627e\u7684\u65b9\u5f0f\u627e\u5230\u5f85\u63d2\u5165\u6216\u5f85\u5220\u9664\u8282\u70b9\uff0c\u7136\u540e\u6839\u636e\u5177\u4f53\u60c5\u51b5\u8fdb\u884c\u8282\u70b9\u7684\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c\uff0c\u6700\u540e\u901a\u8fc7\u8c03\u6574\u6811\u7684\u7ed3\u6784\u4fdd\u6301\u6811\u7684\u5e73\u8861\u6027\u3002"),(0,l.kt)("p",null,"BST \u6811\u7684\u7f3a\u70b9\u662f\uff0c\u5982\u679c\u8282\u70b9\u7684\u63d2\u5165\u987a\u5e8f\u4e0d\u5408\u7406\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6811\u7684\u4e0d\u5e73\u8861\uff0c\u4ece\u800c\u5f71\u54cd\u6811\u7684\u6027\u80fd\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5c06\u8282\u70b9\u6309\u7167\u9012\u589e\u6216\u9012\u51cf\u7684\u987a\u5e8f\u63d2\u5165\uff0c\u5219 BST \u6811\u4f1a\u9000\u5316\u6210\u4e00\u6761\u94fe\u8868\uff0c\u4f7f\u5f97\u67e5\u627e\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u9000\u5316\u4e3a O(n)\uff0c\u5176\u4e2d n \u662f\u6811\u4e2d\u8282\u70b9\u7684\u6570\u91cf\u3002\u56e0\u6b64\uff0c\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u9700\u8981\u91c7\u53d6\u4e00\u4e9b\u63aa\u65bd\u6765\u4fdd\u8bc1 BST \u6811\u7684\u5e73\u8861\u6027\uff0c\u6bd4\u5982\u4f7f\u7528 AVL \u6811\u3001\u7ea2\u9ed1\u6811\u7b49\u81ea\u5e73\u8861\u4e8c\u53c9\u6811\u3002"),(0,l.kt)("h2",{id:"2\u81ea\u5e73\u8861\u6811"},"2.\u81ea\u5e73\u8861\u6811"),(0,l.kt)("p",null,"\u81ea\u5e73\u8861\u6811\uff08Self-Balancing Tree\uff09\u662f\u4e00\u7c7b\u5177\u6709\u81ea\u52a8\u5e73\u8861\u6027\u8d28\u7684\u4e8c\u53c9\u67e5\u627e\u6811\uff08Binary Search Tree\uff09\uff0c\u5b83\u80fd\u591f\u5728\u6bcf\u6b21\u63d2\u5165\u6216\u5220\u9664\u8282\u70b9\u65f6\u81ea\u52a8\u8c03\u6574\u6811\u7684\u7ed3\u6784\uff0c\u4f7f\u5f97\u6574\u68f5\u6811\u59cb\u7ec8\u4fdd\u6301\u5e73\u8861\u72b6\u6001\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e86\u6811\u4e2d\u64cd\u4f5c\u7684\u6700\u574f\u65f6\u95f4\u590d\u6742\u5ea6\u4e0d\u8d85\u8fc7 O(log n)\uff0c\u5176\u4e2d n \u4e3a\u6811\u4e2d\u8282\u70b9\u7684\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u81ea\u5e73\u8861\u6811\u5305\u62ec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AVL \u6811"),(0,l.kt)("li",{parentName:"ul"},"\u7ea2\u9ed1\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u66ff\u7f6a\u7f8a\u6811"),(0,l.kt)("li",{parentName:"ul"},"Treap \u6811\u7b49\u3002\u8fd9\u4e9b\u6811\u7684\u81ea\u5e73\u8861\u7b56\u7565\u4e0d\u540c\uff0c\u4f46\u5b83\u4eec\u90fd\u5177\u6709\u4e00\u5b9a\u7684\u81ea\u52a8\u5e73\u8861\u6027\u8d28\uff0c\u80fd\u591f\u4fdd\u6301\u6811\u7684\u5e73\u8861\u72b6\u6001\u3002")),(0,l.kt)("p",null,"\u81ea\u5e73\u8861\u6811\u7684\u5e94\u7528\u5341\u5206\u5e7f\u6cdb\uff0c\u5b83\u4eec\u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0\u9ad8\u6548\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bd4\u5982\u5173\u8054\u6570\u7ec4\u3001\u96c6\u5408\u3001\u6709\u5e8f\u96c6\u5408\u7b49\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u81ea\u5e73\u8861\u6811\u5f80\u5f80\u6bd4\u666e\u901a\u7684\u4e8c\u53c9\u67e5\u627e\u6811\u6548\u7387\u66f4\u9ad8\uff0c\u56e0\u4e3a\u5b83\u4eec\u80fd\u591f\u4fdd\u6301\u6811\u7684\u5e73\u8861\u72b6\u6001\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u6811\u7684\u9ad8\u5ea6\uff0c\u4f7f\u5f97\u67e5\u627e\u3001\u63d2\u5165\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u7684\u590d\u6742\u5ea6\u66f4\u4f4e\u3002"),(0,l.kt)("h2",{id:"3\u81ea\u5e73\u8861\u6811\u4e4b\u7ea2\u9ed1\u6811"},"3.\u81ea\u5e73\u8861\u6811\u4e4b\u7ea2\u9ed1\u6811"),(0,l.kt)("p",null,"\u8be6\u89c1\u53e6\u5916\u6587\u4ef6:\u4f8b3-1-\u7ea2\u9ed1\u6811.md"),(0,l.kt)("h2",{id:"4\u81ea\u5e73\u8861\u6811\u4e4bavl-\u6811"},"4.\u81ea\u5e73\u8861\u6811\u4e4bAVL \u6811"),(0,l.kt)("p",null,"AVL \u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u4e8c\u53c9\u67e5\u627e\u6811\uff0c\u5b83\u80fd\u591f\u5728\u6bcf\u6b21\u63d2\u5165\u6216\u5220\u9664\u8282\u70b9\u65f6\u81ea\u52a8\u8c03\u6574\u6811\u7684\u7ed3\u6784\uff0c\u4f7f\u5f97\u6574\u68f5\u6811\u59cb\u7ec8\u4fdd\u6301\u5e73\u8861\u72b6\u6001\u3002AVL \u6811\u7684\u5e73\u8861\u6027\u662f\u901a\u8fc7\u6811\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u5e73\u8861\u56e0\u5b50\u6765\u7ef4\u62a4\u7684\uff0c\u5e73\u8861\u56e0\u5b50\u662f\u8be5\u8282\u70b9\u7684\u5de6\u5b50\u6811\u9ad8\u5ea6\u51cf\u53bb\u53f3\u5b50\u6811\u9ad8\u5ea6\u7684\u5dee\u503c\uff0c\u56e0\u6b64\u5e73\u8861\u56e0\u5b50\u7684\u53d6\u503c\u8303\u56f4\u4e3a -1\u30010\u30011\u3002"),(0,l.kt)("p",null,"AVL \u6811\u7684\u5e73\u8861\u7ef4\u62a4\u7b56\u7565\u662f\uff1a\u5bf9\u4e8e\u4efb\u610f\u8282\u70b9\uff0c\u5176\u5de6\u53f3\u5b50\u6811\u7684\u9ad8\u5ea6\u5dee\u4e0d\u8d85\u8fc71\uff0c\u5982\u679c\u4e0d\u5e73\u8861\uff0c\u5219\u901a\u8fc7\u65cb\u8f6c\u64cd\u4f5c\u4f7f\u4e4b\u6062\u590d\u5e73\u8861\u72b6\u6001\u3002AVL \u6811\u7684\u65cb\u8f6c\u64cd\u4f5c\u5305\u62ec\u5de6\u65cb\u548c\u53f3\u65cb\uff0c\u5de6\u65cb\u662f\u5c06\u67d0\u4e2a\u8282\u70b9\u7684\u53f3\u5b50\u6811\u63d0\u5347\u4e3a\u65b0\u7684\u7236\u8282\u70b9\uff0c\u800c\u53f3\u65cb\u662f\u5c06\u67d0\u4e2a\u8282\u70b9\u7684\u5de6\u5b50\u6811\u63d0\u5347\u4e3a\u65b0\u7684\u7236\u8282\u70b9\u3002"),(0,l.kt)("p",null,"AVL \u6811\u7684\u4f18\u70b9\u662f\uff1a\u67e5\u8be2\u3001\u63d2\u5165\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662f O(log n)\uff0c\u5176\u4e2d n \u662f\u6811\u4e2d\u8282\u70b9\u7684\u6570\u91cf\u3002\u7f3a\u70b9\u662f\uff0c\u7531\u4e8e AVL \u6811\u9700\u8981\u7ef4\u62a4\u5e73\u8861\u72b6\u6001\uff0c\u6240\u4ee5\u63d2\u5165\u548c\u5220\u9664\u8282\u70b9\u65f6\u9700\u8981\u8fdb\u884c\u9891\u7e41\u7684\u65cb\u8f6c\u64cd\u4f5c\uff0c\u5bfc\u81f4\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u7684\u6548\u7387\u8f83\u4f4e\u3002"),(0,l.kt)("p",null,"AVL\u6811\u662f\u53e6\u4e00\u79cd\u5e38\u89c1\u7684\u81ea\u5e73\u8861\u6811\uff0c\u5b83\u7684\u5e73\u8861\u6761\u4ef6\u6bd4\u7ea2\u9ed1\u6811\u66f4\u4e3a\u4e25\u683c\uff0c\u4fdd\u8bc1\u4e86\u6811\u7684\u9ad8\u5ea6\u4e0d\u4f1a\u8d85\u8fc71.44log(N+2)-0.328\uff0c\u5176\u4e2dN\u662f\u6811\u4e2d\u8282\u70b9\u7684\u4e2a\u6570\u3002\u5728AVL\u6811\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u5e73\u8861\u56e0\u5b50\uff08balance factor\uff09\uff0c\u8868\u793a\u5de6\u5b50\u6811\u9ad8\u5ea6\u548c\u53f3\u5b50\u6811\u9ad8\u5ea6\u7684\u5dee\u3002\u6ee1\u8db3\u4ee5\u4e0b\u6027\u8d28\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u7684\u5e73\u8861\u56e0\u5b50\u53ea\u80fd\u662f-1\u30010\u30011\u4e09\u79cd\u4e4b\u4e00"),(0,l.kt)("li",{parentName:"ul"},"\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u7684\u9ad8\u5ea6\u5dee\u4e0d\u80fd\u8d85\u8fc71")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"          10(-1)\n        /      \\\n       5(0)     20(0)\n              /     \\\n            15(0)   30(1)\n                   /   \\\n                  25(0) 40(0)\n")),(0,l.kt)("h2",{id:"\u5b9e\u4f8b\u4e8c\u53c9\u641c\u7d22\u6811"},"\u5b9e\u4f8b\uff1a\u4e8c\u53c9\u641c\u7d22\u6811"),(0,l.kt)("p",null,"\u4e8c\u53c9\u641c\u7d22\u6811\uff08BST\uff09\u662f\u4e8c\u53c9\u6811\u7684\u4e00\u79cd\uff0c\u4f46\u662f\u53ea\u5141\u8bb8\u4f60\u5728\u5de6\u4fa7\u8282\u70b9\u5b58\u50a8\uff08\u6bd4\u7236\u8282\u70b9\uff09\u5c0f\u7684\u503c\uff0c\u5728\u53f3\u4fa7\u8282\u70b9\u5b58\u50a8\uff08\u6bd4\u7236\u8282\u70b9\uff09\u5927\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u4e8c\u53c9\u641c\u7d22\u6811\u6570\u636e\u7ed3\u6784\u7684\u7ec4\u7ec7\u65b9\u5f0f\u3002\n",(0,l.kt)("img",{src:t(60282).Z,width:"428",height:"196"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u548c\u94fe\u8868\u4e00\u6837\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6307\u9488\uff08\u5f15\u7528\uff09\u6765\u8868\u793a\u8282\u70b9\u4e4b\u95f4\u7684\u5173\u7cfb\uff08\u6811\u76f8\u5173\u7684\u672f\u8bed\u79f0\u5176\u4e3a\u8fb9\uff09\u3002\n\n\u5728\u53cc\u5411\u94fe\u8868\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u5305\u542b\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u53e6\u4e00\u4e2a\u6307\u5411\u4e0a\u4e00\u4e2a\u8282\u70b9\u3002\n\n\u5bf9\u4e8e\u6811\uff0c\u4f7f\u7528\u540c\u6837\u7684\u65b9\u5f0f\uff08\u4e5f\u4f7f\u7528\u4e24\u4e2a\u6307\u9488\uff09\uff0c\u4f46\u662f\u4e00\u4e2a\u6307\u5411\u5de6\u4fa7\u5b50\u8282\u70b9\uff0c\u53e6\u4e00\u4e2a\u6307\u5411\u53f3\u4fa7\u5b50\u8282\u70b9\u3002\n\u56e0\u6b64\uff0c\u5c06\u58f0\u660e\u4e00\u4e2aNode\u7c7b\u6765\u8868\u793a\u6811\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u3002\n\n\u503c\u5f97\u6ce8\u610f\u7684\u4e00\u4e2a\u5c0f\u7ec6\u8282\u662f\uff0c\u4e0d\u540c\u4e8e\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u5c06\u8282\u70b9\u672c\u8eab\u79f0\u4f5c\u8282\u70b9\u6216\u9879\uff0c\u6211\u4eec\u5c06\u4f1a\u79f0\u5176\u4e3a\u952e\uff08\u884c{1}\uff09\u3002\u952e\u662f\u6811\u76f8\u5173\u7684\u672f\u8bed\u4e2d\u5bf9\u8282\u70b9\u7684\u79f0\u547c\u3002\n")),(0,l.kt)("h2",{id:"\u598203\u4f8b\u5b50"},"\u598203\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"insert(key)\uff1a\u5411\u6811\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u952e\u3002\nsearch(key)\uff1a\u5728\u6811\u4e2d\u67e5\u627e\u4e00\u4e2a\u952e\u3002\u5982\u679c\u8282\u70b9\u5b58\u5728\uff0c\u5219\u8fd4\u56detrue\uff1b\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56defalse\u3002\ninOrderTraverse()\uff1a\u901a\u8fc7\u4e2d\u5e8f\u904d\u5386\u65b9\u5f0f\u904d\u5386\u6240\u6709\u8282\u70b9\u3002\npreOrderTraverse()\uff1a\u901a\u8fc7\u5148\u5e8f\u904d\u5386\u65b9\u5f0f\u904d\u5386\u6240\u6709\u8282\u70b9\u3002\npostOrderTraverse()\uff1a\u901a\u8fc7\u540e\u5e8f\u904d\u5386\u65b9\u5f0f\u904d\u5386\u6240\u6709\u8282\u70b9\u3002\nmin()\uff1a\u8fd4\u56de\u6811\u4e2d\u6700\u5c0f\u7684\u503c/\u952e\u3002\nmax()\uff1a\u8fd4\u56de\u6811\u4e2d\u6700\u5927\u7684\u503c/\u952e\u3002\nremove(key)\uff1a\u4ece\u6811\u4e2d\u79fb\u9664\u67d0\u4e2a\u952e\n")),(0,l.kt)("h2",{id:"\u8981\u5411\u6811\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u8282\u70b9\u6216\u952e\u8981\u7ecf\u5386\u4e09\u4e2a\u6b65\u9aa4"},"\u8981\u5411\u6811\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u8282\u70b9\uff08\u6216\u952e\uff09\uff0c\u8981\u7ecf\u5386\u4e09\u4e2a\u6b65\u9aa4"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\u662f\u9a8c\u8bc1\u63d2\u5165\u64cd\u4f5c\u662f\u5426\u662f\u7279\u6b8a\u60c5\u51b5\u3002\u5bf9\u4e8e\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u7279\u6b8a\u60c5\u51b5\u662f\uff0c\u6211\u4eec\u5c1d\u8bd5\u63d2\u5165\u7684\u6811\u8282\u70b9\u662f\u5426\u4e3a\u7b2c\u4e00\u4e2a\u8282\u70b9\uff08\u884c{1}\uff09\u3002\n\u5982\u679c\u662f\uff0c\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u521b\u5efa\u4e00\u4e2aNode\u7c7b\u7684\u5b9e\u4f8b\u5e76\u5c06\u5b83\u8d4b\u503c\u7ed9root\u5c5e\u6027\u6765\u5c06root\u6307\u5411\u8fd9\u4e2a\u65b0\u8282\u70b9\uff08\u884c{2}\uff09\u3002\n\u56e0\u4e3a\u5728Node\u6784\u5efa\u51fd\u6570\u7684\u5c5e\u6027\u91cc\uff0c\u53ea\u9700\u8981\u5411\u6784\u9020\u51fd\u6570\u4f20\u9012\u6211\u4eec\u60f3\u7528\u6765\u63d2\u5165\u6811\u7684\u8282\u70b9\u503c\uff08key\uff09\uff0c\u5b83\u7684\u5de6\u6307\u9488\u548c\u53f3\u6307\u9488\u7684\u503c\u4f1a\u7531\u6784\u9020\u51fd\u6570\u81ea\u52a8\u8bbe\u7f6e\u4e3anull\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\u662f\u5c06\u8282\u70b9\u6dfb\u52a0\u5230\u6839\u8282\u70b9\u4ee5\u5916\u7684\u5176\u4ed6\u4f4d\u7f6e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u8f85\u52a9\u65b9\u6cd5\uff08\u884c{3}\uff09\u6765\u5e2e\u52a9\u6211\u4eec\u505a\u8fd9\u4ef6\u4e8b\uff0c\u5b83\u7684\u58f0\u660e\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insert(key) {\n    // special case: first key\n    if (this.root == null) { // 1\n        this.root = new Node(key); //2\n    } else {\n        this.insertNode(this.root, key); //3\n    }\n}\n\n// insertNode\u65b9\u6cd5\u4f1a\u5e2e\u52a9\u6211\u4eec\u627e\u5230\u65b0\u8282\u70b9\u5e94\u8be5\u63d2\u5165\u7684\u6b63\u786e\u4f4d\u7f6e\u3002\n/*\n\u5982\u679c\u6811\u975e\u7a7a\uff0c\u9700\u8981\u627e\u5230\u63d2\u5165\u65b0\u8282\u70b9\u7684\u4f4d\u7f6e\u3002\u56e0\u6b64\uff0c\u5728\u8c03\u7528insertNode\u65b9\u6cd5\u65f6\u8981\u901a\u8fc7\u53c2\u6570\u4f20\u5165\u6811\u7684\u6839\u8282\u70b9\u548c\u8981\u63d2\u5165\u7684\u8282\u70b9\u3002\n\n\u5982\u679c\u65b0\u8282\u70b9\u7684\u952e\u5c0f\u4e8e\u5f53\u524d\u8282\u70b9\u7684\u952e\uff08\u73b0\u5728\uff0c\u5f53\u524d\u8282\u70b9\u5c31\u662f\u6839\u8282\u70b9\uff09\uff08\u884c{4}\uff09\uff0c\u90a3\u4e48\u9700\u8981\u68c0\u67e5\u5f53\u524d\u8282\u70b9\u7684\u5de6\u4fa7\u5b50\u8282\u70b9\u3002\n\u6ce8\u610f\u5728\u8fd9\u91cc\uff0c\u7531\u4e8e\u952e\u53ef\u80fd\u662f\u590d\u6742\u7684\u5bf9\u8c61\u800c\u4e0d\u662f\u6570\uff0c\u6211\u4eec\u4f7f\u7528\u4f20\u5165\u4e8c\u53c9\u641c\u7d22\u6811\u6784\u9020\u51fd\u6570\u7684compareFn\u51fd\u6570\u6765\u6bd4\u8f83\u503c\u3002\n\u5982\u679c\u5b83\u6ca1\u6709\u5de6\u4fa7\u5b50\u8282\u70b9\uff08\u884c{5}\uff09\uff0c\u5c31\u5728\u90a3\u91cc\u63d2\u5165\u65b0\u7684\u8282\u70b9\uff08\u884c{6}\uff09\u3002\u5982\u679c\u6709\u5de6\u4fa7\u5b50\u8282\u70b9\uff0c\u9700\u8981\u901a\u8fc7\u9012\u5f52\u8c03\u7528\ninsertNode\u65b9\u6cd5\uff08\u884c{7}\uff09\u7ee7\u7eed\u627e\u5230\u6811\u7684\u4e0b\u4e00\u5c42\u3002\n\u5728\u8fd9\u91cc\uff0c\u4e0b\u6b21\u8981\u6bd4\u8f83\u7684\u8282\u70b9\u5c06\u4f1a\u662f\u5f53\u524d\u8282\u70b9\u7684\u5de6\u4fa7\u5b50\u8282\u70b9\uff08\u5de6\u4fa7\u8282\u70b9\u5b50\u6811\uff09\u3002\n\n\u5982\u679c\u8282\u70b9\u7684\u952e\u6bd4\u5f53\u524d\u8282\u70b9\u7684\u952e\u5927\uff0c\u540c\u65f6\u5f53\u524d\u8282\u70b9\u6ca1\u6709\u53f3\u4fa7\u5b50\u8282\u70b9\uff08\u884c{8}\uff09\uff0c\u5c31\u5728\u90a3\u91cc\u63d2\u5165\u65b0\u7684\u8282\u70b9\uff08\u884c{9}\uff09\u3002\n\u5982\u679c\u6709\u53f3\u4fa7\u5b50\u8282\u70b9\uff0c\u540c\u6837\u9700\u8981\u9012\u5f52\u8c03\u7528insertNode\u65b9\u6cd5\uff0c\u4f46\u662f\u8981\u7528\u6765\u548c\u65b0\u8282\u70b9\u6bd4\u8f83\u7684\u8282\u70b9\u5c06\u4f1a\u662f\u53f3\u4fa7\u5b50\u8282\u70b9\uff08\u53f3\u4fa7\u8282\u70b9\u5b50\u6811\uff09\uff08\u884c{10}\uff09\u3002\n* */\ninsertNode(node, key) {\n    if (this.compareFn(key, node.key) === Compare.LESS_THAN) { //4\n      if (node.left == null) {  //5\n        node.left = new Node(key); //6\n      } else {\n        this.insertNode(node.left, key); // 7\n      }\n    } else if (node.right == null) { //8\n      node.right = new Node(key); // 9\n    } else {\n      this.insertNode(node.right, key); // 10\n    }\n}\n")),(0,l.kt)("h2",{id:"\u6811\u7684\u904d\u5386"},"\u6811\u7684\u904d\u5386"),(0,l.kt)("p",null,"\u8bbf\u95ee\u6811\u7684\u6240\u6709\u8282\u70b9\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a\u4e2d\u5e8f\u3001\u5148\u5e8f\u548c\u540e\u5e8f\u3002"))}d.isMDXComponent=!0},60282:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/\u56fe2\u6811-5f94f22cebffe13f550c8dca8ec13aa8.png"}}]);