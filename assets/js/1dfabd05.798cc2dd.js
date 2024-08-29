"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=a(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,p=new Array(l);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var a=2;a<l;a++)p[a]=r[a];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const l={},p=void 0,i={unversionedId:"docker/\u7406\u89e3\u5fae\u670d\u52a1",id:"docker/\u7406\u89e3\u5fae\u670d\u52a1",title:"\u7406\u89e3\u5fae\u670d\u52a1",description:"\u5f00\u5934",source:"@site/programming-tech/docker/11-\u7406\u89e3\u5fae\u670d\u52a1.md",sourceDirName:"docker",slug:"/docker/\u7406\u89e3\u5fae\u670d\u52a1",permalink:"/docker/\u7406\u89e3\u5fae\u670d\u52a1",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/docker/11-\u7406\u89e3\u5fae\u670d\u52a1.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docs",previous:{title:"docker\u4e2d\u7684nginx\u914d\u7f6e",permalink:"/docker/docker\u4e2d\u7684nginx\u914d\u7f6e"},next:{title:"README",permalink:"/design-patterns/"}},c={},a=[{value:"\u5f00\u5934",id:"\u5f00\u5934",level:3},{value:"\u4e1a\u754c\u5bf9\u5fae\u670d\u52a1\u65e9\u5c31\u6709\u6781\u5176\u660e\u786e\u7684\u89c2\u70b9\uff1a\u4e0d\u8981\u8f7b\u6613\u4f7f\u7528\uff0c\u4f46\u4e5f\u662f\u590d\u6742\u573a\u666f\u4e0b\u552f\u4e00\u7684\u9009\u62e9\u3002",id:"\u4e1a\u754c\u5bf9\u5fae\u670d\u52a1\u65e9\u5c31\u6709\u6781\u5176\u660e\u786e\u7684\u89c2\u70b9\u4e0d\u8981\u8f7b\u6613\u4f7f\u7528\u4f46\u4e5f\u662f\u590d\u6742\u573a\u666f\u4e0b\u552f\u4e00\u7684\u9009\u62e9",level:3},{value:"\u5fae\u670d\u52a1\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u7cfb\u7edf\u590d\u6742\u5ea6\u7684\u95ee\u9898\u3002\u800c\u89e3\u51b3\u91cf\u7684\u95ee\u9898\uff0c\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u4e8b",id:"\u5fae\u670d\u52a1\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u7cfb\u7edf\u590d\u6742\u5ea6\u7684\u95ee\u9898\u800c\u89e3\u51b3\u91cf\u7684\u95ee\u9898\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u4e8b",level:2}],u={toc:a},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5f00\u5934"},"\u5f00\u5934"),(0,o.kt)("p",null,"DHH \u7684\u95ee\u9898\u5728\u4e8e\u6ca1\u6709\u5230\u6709\u590d\u6742\u4e1a\u52a1\u3001\u6d41\u91cf\u6d2a\u5cf0\u7684\u516c\u53f8\u505a\u4e8b\u60c5\uff0c\u6240\u4ee5\u62ff\u7740\u5355\u4f53\u67b6\u6784\u6cbe\u6cbe\u81ea\u559c\u3002\u5355\u4f53\u67b6\u6784\u662f\u4e00\u4e2a\u6781\u4f4e\u6210\u672c\uff0c\u5b9e\u73b0\u8f6f\u4ef6\u529f\u80fd\u7684\u9014\u5f84\uff0c\u867d\u7136\u5927\u516c\u53f8\u4f1a\u641e\u5f88\u591a\u5fae\u670d\u52a1\uff0c\u4f46\u662f\u50cf\u540e\u53f0\u7cfb\u7edf\u8fd9\u79cd\u5728\u5927\u516c\u53f8\u4e5f\u662f\u5355\u4f53\u5b58\u5728\u7684\uff0c\u9009\u62e9\u662f\u57fa\u4e8e\u573a\u666f\u7684\u3002\u8fd9\u626f\u51fa\u4e86\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff0c\u5927\u90e8\u5206\u5728\u8c08\u5fae\u670d\u52a1\u7684\u4eba\u90fd\u5728\u51fa\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u6ca1\u6709\u57fa\u4e8e\u5b9e\u9645\u9700\u8981\u3001\u573a\u666f\u5206\u6790\uff0c\u5c31\u5bf9\u5fae\u670d\u52a1\u4e00\u987f\u72c2\u55b7\uff0c\u6216\u8005\u4e0d\u9650\u5236\u5730\u5439\u6367\u3002"),(0,o.kt)("p",null,"\u4f60\u770b\u770b\u53d1\u8868\u8bc4\u8bba\u7684\u4eba\u662f\u4e0d\u662f\u8fd9\u6837\uff1f\u4e00\u4f1a\u513f\u5206\u5c71\u5934\u3001\u52bf\u529b\u8303\u56f4\u3001\u653f\u6cbb\u6597\u4e89\u3001\u6211\u89c9\u5f97 XX \u597d\uff0c\u5c3d\u55b7\u4e9b\u6ed1\u7a3d\u7684\u8bdd\uff0c\u4e1d\u6beb\u6ca1\u6709\u4ece\u4e1a\u52a1\u3001\u5b9e\u9645\u95ee\u9898\u3001\u89e3\u51b3\u65b9\u6848\u3001\u89e3\u51b3\u6210\u672c\u3001\u5b9e\u9645\u573a\u666f\u53bb\u5206\u6790\u95ee\u9898\uff0c\u7136\u540e\u57fa\u4e8e\u95ee\u9898\u5bf9\u5fae\u670d\u52a1\u3001\u5355\u4f53\u7b49\u67b6\u6784\u6a21\u5f0f\u53d1\u8868\u89c2\u70b9\u3002"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u67d0\u4eba\u6709\u4e00\u7b14\u94b1\uff0c\u95ee\u8be5\u600e\u4e48\u5904\u7406\u597d\u5462\uff1f\u662f\u653e\u4fdd\u9669\u67dc\u3001\u4ea4\u7ed9\u8001\u5a46\u7ba1\u3001\u653e\u94f6\u884c\u3001\u4e70\u80a1\u7968\u57fa\u91d1\u3001\u9ec4\u91d1\u3001\u56fd\u503a\uff1f\u9009\u54ea\u4e2a\u597d\uff0c\u6709\u5f88\u591a\u4eba\u5c31\u5f00\u59cb\u8bf4\u4e86\uff0c\u56fd\u503a\u7a33\u5b9a\u4f4e\u98ce\u9669\u3001\u80a1\u7968\u80fd\u8d5a\u94b1\u3001\u94f6\u884c\u6700\u4fdd\u9669\u8fd8\u80fd\u53d6\xb7\xb7\xb7 \u5c31\u5dee\u6709\u4eba\u95ee\u201c\u4f60\u7684\u94b1\u91d1\u989d\u591a\u5927\uff0c\u4f60\u5bf9\u73b0\u91d1\u9700\u6c42\u662f\u600e\u6837\u7684\uff0c\u4f60\u5bf9\u589e\u503c\u98ce\u9669\u7684\u671f\u671b\u662f\uff1f\xb7\xb7\xb7\u201d"),(0,o.kt)("h3",{id:"\u4e1a\u754c\u5bf9\u5fae\u670d\u52a1\u65e9\u5c31\u6709\u6781\u5176\u660e\u786e\u7684\u89c2\u70b9\u4e0d\u8981\u8f7b\u6613\u4f7f\u7528\u4f46\u4e5f\u662f\u590d\u6742\u573a\u666f\u4e0b\u552f\u4e00\u7684\u9009\u62e9"},"\u4e1a\u754c\u5bf9\u5fae\u670d\u52a1\u65e9\u5c31\u6709\u6781\u5176\u660e\u786e\u7684\u89c2\u70b9\uff1a\u4e0d\u8981\u8f7b\u6613\u4f7f\u7528\uff0c\u4f46\u4e5f\u662f\u590d\u6742\u573a\u666f\u4e0b\u552f\u4e00\u7684\u9009\u62e9\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe\u5c31\u505a\u4e2a\u540e\u53f0\u7cfb\u7edf\uff0c\u903b\u8f91\u7b80\u5355\uff0cQPS \u4e0d\u8db3\u4e00\u5343\uff0c\u5bf9\u7a33\u5b9a\u6027\u8981\u6c42\u4e0d\u9ad8\u3002\u8fd9\u5728\u54ea\u5bb6\u5927\u516c\u53f8\u6211\u50cf\u90fd\u66f4\u5bb9\u6613\u9009\u62e9\u5355\u4f53\u7ed3\u6784\uff0c\u4f46\u73b0\u5b9e\u662f\uff0c\u5927\u516c\u53f8\u5fae\u670d\u52a1\u6784\u5efa\u6210\u672c\u3001\u57fa\u7840\u8bbe\u65bd\u6781\u4e3a\u5065\u5168\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u5f80\u62c6\u5206\u4e0a\u9760\uff0c\u4f46\u76ee\u6807\u662f\u600e\u4e48\u5feb\u600e\u4e48\u6765\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u4f60\u6709\u6708\u6d3b 1 \u4ebf\uff0c\u751a\u81f3\u65e5\u6d3b 1 \u4ebf\u5462\uff1f\u7528\u5355\u4f53\u67b6\u6784\u5c31\u662f\u627e\u6b7b\uff0c\u5728\u7814\u53d1\u6548\u7387\u3001\u786c\u4ef6\u6210\u672c\u3001\u7a33\u5b9a\u6027\u3001\u9c81\u68d2\u6027\u3001\u95ee\u9898\u5206\u6790\xb7\xb7\xb7\u7b49\u5404\u4e2a\u65b9\u9762\u90fd\u662f\u81f4\u547d\u7684\u95ee\u9898\u3002\u5fae\u670d\u52a1\u67b6\u6784\u662f\u552f\u4e00\u7684\u8def\uff0c\u867d\u7136\u6210\u672c\u9ad8\uff0c\u4f46\u53ea\u8981\u57fa\u7840\u8bbe\u65bd\u5065\u5168\uff0c\u597d\u5904\u662f\u6781\u4e3a\u660e\u663e\u7684\u3002"),(0,o.kt)("p",null,"\u5f88\u591a\u4eba\u5c31\u559c\u6b22\u76ef\u7740\u67d0\u7684\u5c0f\u4e1a\u52a1\u9700\u6c42\uff0c\u53bb\u5206\u6790\u601d\u8003\u7528\u4ec0\u4e48\u67b6\u6784\uff0c\u4e00\u4e2a\u5c0f\u7684\u6216\u8005\u72ec\u7acb\u7684\u529f\u80fd\u9700\u6c42\uff0c\u4e0d\u7ba1\u600e\u4e48\u770b\uff0c\u5355\u4f53\u67b6\u6784\u90fd\u548c\u5408\u9002\uff0c\u4e5f\u7b80\u5355\u3002\u4f46\u628a\u773c\u5149\u7a0d\u5fae\u62ac\u9ad8\u4e00\u70b9\u70b9\u770b\uff0c\u5047\u8bbe\u516c\u53f8\u6709\u4e0a\u767e\u4e2a\u8fd9\u79cd\u4e1a\u52a1\u5462\uff1f\u5404\u4e2a\u4e1a\u52a1\u95f4\u90fd\u5173\u8054\uff0c\u6709\u5c42\u6b21\u4e4b\u5206\u5462\uff1f\u6709\u6d41\u91cf\u6d2a\u5cf0\u5462\uff1f\u600e\u4e48\u505a\u8ba9\u6574\u4f53\u67b6\u6784\u7684\u71b5\u6700\u4f4e\uff0c\u7406\u89e3\u6210\u672c\u6700\u4f4e\uff0c\u4e92\u76f8\u8c03\u7528\u6210\u672c\u6700\u4f4e\uff0c\u8fc1\u79fb\u6210\u672c\u6700\u4f4e\u7b49\u7b49 N \u591a\u79cd\u6210\u672c\u8003\u91cf\u5462\uff1f"),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u662f\u4e00\u79cd\u57fa\u4e8e\u5168\u5c40\u7684\u8003\u91cf\uff0c\u4e0d\u662f\u57fa\u4e8e\u5355\u4e2a\u4e1a\u52a1\u3001\u5355\u4e2a\u529f\u80fd\u7684\u3002\u4e5f\u53ea\u662f\u4e00\u79cd\u89e3\u51b3\u95ee\u9898\u7684\u9014\u5f84\u548c\u601d\u7ef4\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u62db\u66f4\u591a\u7684\u4eba\u3001\u7528\u590d\u6742\u7684\u67b6\u6784\uff0c\u90fd\u662f\u4e3a\u4e86\u89e3\u51b3\u5b9e\u9645\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u4efb\u4f55\u5de5\u5177\uff0c\u90fd\u9700\u8981\u601d\u8003\u5bf9\u5e94\u7684\u573a\u666f\u3001\u9700\u6c42\u3001\u6210\u672c\uff0c\u7136\u540e\u624d\u505a\u51fa\u8003\u91cf\u548c\u9009\u62e9\u3002"),(0,o.kt)("p",null,"\u7528\u4e00\u53e5\u8bdd\u603b\u7ed3\uff1a\u5c0f\u516c\u53f8\u7528\u5fae\u670d\u52a1\u7684\u662f sb\uff0c\u5927\u516c\u53f8\u4e0d\u7528\u5fae\u670d\u52a1\u662f\u627e\u6b7b\u3002"),(0,o.kt)("h2",{id:"\u5fae\u670d\u52a1\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u7cfb\u7edf\u590d\u6742\u5ea6\u7684\u95ee\u9898\u800c\u89e3\u51b3\u91cf\u7684\u95ee\u9898\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u4e8b"},"\u5fae\u670d\u52a1\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u7cfb\u7edf\u590d\u6742\u5ea6\u7684\u95ee\u9898\u3002\u800c\u89e3\u51b3\u91cf\u7684\u95ee\u9898\uff0c\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u4e8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.v2ex.com/t/960595#reply51"},"https://www.v2ex.com/t/960595#reply51")),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u4ece\u6765\u6ca1\u6709\u8bf4\u8981\u591a\u5c11\u7528\u6237\u91cf\u624d\u503c\u5f97\u4e0a\uff0c\u5fae\u670d\u52a1\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u7cfb\u7edf\u590d\u6742\u5ea6\u7684\u95ee\u9898\u3002\u89e3\u51b3\u91cf\u7684\u95ee\u9898\uff0c\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u4e8b\uff0c\u53ea\u4e0d\u8fc7\u5fae\u670d\u52a1\u5929\u7136\u5c31\u652f\u6301\u5206\u5e03\u5f0f\u800c\u5df2\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u53ea\u8981\u7cfb\u7edf\u6bd4\u8f83\u590d\u6742\uff0c\u54ea\u6015\u53ea\u662f\u4e3a\u4e86\u80fd\u591f\u65b9\u4fbf\u7ef4\u62a4\u548c\u6269\u5c55\u529f\u80fd\uff0c\u53ea\u8981\u4f1a\u7528\u4e00\u4e9b devOps \u5de5\u5177\uff0c\u8b6c\u5982\u4f1a\u7b80\u5355\u4f7f\u7528 k8s \u6765\u89e3\u51b3\u8fd0\u7ef4\u9886\u57df\u7684\u95ee\u9898\u7684\u8bdd\uff0c\u5fae\u670d\u52a1\u5c31\u662f\u6700\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6ca1\u6709\u4e4b\u4e00\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u5b9a\u4e86\u4e2a\u7528\u6237\u6570\u6216\u8005\u4ea4\u6613\u91cf\u4e00\u5e74\u51b2\u5343\u4e07\u3001\u4e09\u5e74\u7834\u4ebf\u7684\u6307\u6807\uff0c\u4e0d\u641e\u670d\u52a1\u62c6\u5206\u53ef\u80fd\u624d\u662f\u67b6\u6784\u5931\u804c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u662f\u9762\u8bd5\u5b98\uff0c\u5728\u73b0\u5728\u8fd9\u4e2a\u5927\u73af\u5883\u4e0b\u6ca1\u6709\u5fae\u670d\u52a1\u3001\u6ce8\u518c\u4e2d\u5fc3\u5e94\u7528\u7ecf\u9a8c\u7684\u4e2d\u9ad8\u5e74\u8d44\u5458\u5de5\u60a8\u4f1a\u8003\u8651\u5f55\u7528\u4e48\uff1f\u5982\u679c\u5927\u591a\u6570\u9762\u8bd5\u5b98\u90fd\u4e0d\u8003\u8651\u7684\u8bdd\uff0c\u90a3\u4e5f\u522b\u5947\u602a\u5927\u5bb6\u4e3a\u5565\u8981\u5f80\u5fae\u670d\u52a1\u3001\u6ce8\u518c\u4e2d\u5fc3\u4e0a\u9760\u62e2\u4e86\u3002"),(0,o.kt)("p",null,"\u5f88\u591a\u4e1a\u52a1\u5f00\u53d1\uff0c\u53ea\u662f\u4e60\u60ef\u4e0e\u5728\u67d0\u4e2a\u6846\u67b6\u4e0b\u5f00\u53d1\u3002 \u6bd4\u5982\u4e60\u60ef\u4e86\u4f7f\u7528\uff08\u751a\u81f3\u53ea\u4f7f\u7528\u8fc7\uff09 spring cloud \u7684\u6846\u67b6\uff0c\u7136\u540e\u5404\u79cd\u7ec4\u4ef6\u90fd\u662f\u7528\u73b0\u6210\u7684\u3002 \u4f60\u8ba9\u4ed6\u53bb\u5199\u5355\u673a\uff0c\u4ed6\u4e0d\u4e00\u5b9a\u80fd\u5f88\u5feb\u9002\u5e94\u3002"),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u4e0d\u662f\u5565\u9ad8\u9636\u529f\u6cd5\uff0c\u53ea\u662f\u4e00\u79cd\u6280\u672f\u65b9\u6848\u800c\u5df2\uff0c\u8fc7\u5ea6\u4ef0\u89c6\u6216\u9119\u89c6\u4e00\u79cd\u6280\u672f\u65b9\u6848\uff0c\u90fd\u662f\u4e0d\u5408\u7406\u7684\u5fc3\u6001\u3002 \u53ea\u6709\u5f53\u4e00\u4e2a\u6280\u672f\u4eba\u5458\uff0c\u53ef\u4ee5\u6e38\u5203\u6709\u4f59\u7684\u4f7f\u7528\u4efb\u4f55\u4e00\u79cd\u6280\u672f\u65b9\u6848\u5b8c\u6210\u4e1a\u52a1\u65f6\uff0c\u4ed6\u624d\u80fd\u771f\u6b63\u7684\u6839\u636e\u4e1a\u52a1\u9700\u6c42\uff0c\u9009\u62e9\u6700\u5408\u9002\u7684\u6280\u672f\u65b9\u6848\u3002"))}d.isMDXComponent=!0}}]);