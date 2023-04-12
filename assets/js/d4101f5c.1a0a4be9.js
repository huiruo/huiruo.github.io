"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},l=void 0,a={unversionedId:"JavaScript/jsdom\u64cd\u4f5c/js\u64cd\u4f5cdom",id:"JavaScript/jsdom\u64cd\u4f5c/js\u64cd\u4f5cdom",title:"js\u64cd\u4f5cdom",description:"\u83b7\u53d6dom\u8282\u70b9:\u901a\u8fc7\u6807\u7b7e\u7684\u5c5e\u6027\u503c\u83b7\u53d6\u540e\u4ee3\u8282\u70b9",source:"@site/programming-tech/JavaScript/04-jsdom\u64cd\u4f5c/04-js\u64cd\u4f5cdom.md",sourceDirName:"JavaScript/04-jsdom\u64cd\u4f5c",slug:"/JavaScript/jsdom\u64cd\u4f5c/js\u64cd\u4f5cdom",permalink:"/JavaScript/jsdom\u64cd\u4f5c/js\u64cd\u4f5cdom",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/04-jsdom\u64cd\u4f5c/04-js\u64cd\u4f5cdom.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"trim",permalink:"/JavaScript/String\u65b9\u6cd5/trim"},next:{title:"jsDom\u64cd\u4f5c",permalink:"/JavaScript/jsdom\u64cd\u4f5c/jsDom\u64cd\u4f5c"}},c={},s=[{value:"\u83b7\u53d6dom\u8282\u70b9:\u901a\u8fc7\u6807\u7b7e\u7684\u5c5e\u6027\u503c\u83b7\u53d6\u540e\u4ee3\u8282\u70b9",id:"\u83b7\u53d6dom\u8282\u70b9\u901a\u8fc7\u6807\u7b7e\u7684\u5c5e\u6027\u503c\u83b7\u53d6\u540e\u4ee3\u8282\u70b9",level:2},{value:"\u4f8b\u5b50\uff1a",id:"\u4f8b\u5b50",level:3},{value:"child\u5c5e\u6027",id:"child\u5c5e\u6027",level:2},{value:"querySelector\u65b9\u6cd5\uff0c\u5f3a\u70c8\u63a8\u8350\uff01",id:"queryselector\u65b9\u6cd5\u5f3a\u70c8\u63a8\u8350",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u83b7\u53d6dom\u8282\u70b9\u901a\u8fc7\u6807\u7b7e\u7684\u5c5e\u6027\u503c\u83b7\u53d6\u540e\u4ee3\u8282\u70b9"},"\u83b7\u53d6dom\u8282\u70b9:\u901a\u8fc7\u6807\u7b7e\u7684\u5c5e\u6027\u503c\u83b7\u53d6\u540e\u4ee3\u8282\u70b9"),(0,o.kt)("p",null,"1.getElementById         id    \u5982\u679c\u5b58\u5728\u591a\u4e2aid\u76f8\u540c\u7684\u5143\u7d20\uff0c\u53ea\u4f1a\u8fd4\u56de\u7b2c\u4e00\u4e2a\n2.getElementsByTagName   \u6807\u7b7e\u540d  \u8fd4\u56de\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u7684\u96c6\u5408\n3.getElementsByName       name \u8fd4\u56de\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u7684\u96c6\u5408\n4.getElementsByClassName  class  \u8fd4\u56de\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\u7684\u96c6\u5408"),(0,o.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n    <p id='Jan' class='test'>1</p>\n    <p id='Jan' class='test'>2</p>\n    <p id='Mar'>3</p>\n</body>\n<script type=\"text/javascript\">\n    var j=document.getElementById('Jan');\n    console.log(j);\n<\/script>\n")),(0,o.kt)("h2",{id:"child\u5c5e\u6027"},"child\u5c5e\u6027"),(0,o.kt)("p",null,"\u6bcf\u4e2adom\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5728dom\u5143\u7d20\u5bf9\u8c61\u4e2d\u6709\u56db\u4e2a\u4e13\u95e8\u7528\u4e8e\u83b7\u53d6\u5b50\u5143\u7d20\u7684\u5c5e\u6027\uff1a\n\u5c5e\u6027\u540d \u4f5c\u7528  \u5176\u4ed6\nchildNodes  \u83b7\u53d6\u6240\u6709\u5b50\u8282\u70b9     \u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u5982\u679c\u6709\u7a7a\u683c\uff0c\u4f1a\u4f5c\u4e3a\u6587\u672c\u8282\u70b9\u83b7\u53d6\u5230\nchild       \u83b7\u53d6\u6240\u6709\u5b50\u8282\u70b9     \u63a8\u8350\u4f7f\u7528\nfirstChild  \u83b7\u53d6\u9996\u4e2a\u5b50\u8282\u70b9     \u63a8\u8350\u4f7f\u7528\nlastChild   \u83b7\u53d6\u6700\u540e\u4e00\u4e2a\u5b50\u8282\u70b9  \u63a8\u8350\u4f7f\u7528"),(0,o.kt)("h2",{id:"queryselector\u65b9\u6cd5\u5f3a\u70c8\u63a8\u8350"},"querySelector\u65b9\u6cd5\uff0c\u5f3a\u70c8\u63a8\u8350\uff01"),(0,o.kt)("p",null,"querySelector\u7684\u53c2\u6570\u662fcss\u9009\u62e9\u5668\uff0c\u4efb\u4f55\u9009\u62e9\u5668\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5b83\u7684\u53c2\u6570\uff0c\u8fd9\u6837\u5c31\u4f7f\u5f97\u5b83\u975e\u5e38\u65b9\u4fbf\u7075\u6d3b\uff1a"),(0,o.kt)("p",null,"\u6bd4\u5982\u83b7\u53d6class=\u2018test\u2019\u7684\u6807\u7b7e\u4e0b\u7684\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199querySelector('.test  > * ')\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5b50\u5143\u7d20\u7684\u7c7b\u578bquerySelector('.test  > span ')\uff0c\u6216\u8005\u662f\uff1aclassquerySelector('.test  > #f_div')"),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528querySelectorAll\u65b9\u6cd5\uff0c\u8fd9\u6837\u4f1a\u83b7\u53d6\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u5143\u7d20\uff0c\u800c\u4e0d\u53ea\u662f\u83b7\u53d6\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div class=\"first\">\n    <span>\u5f20\u4e09</span>\n</div>\n<div id=\"second\">\n    <div id=f_div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n</div>\n<script>\n    //\u901a\u8fc7\u7c7b\u9009\u62e9\u5668\u83b7\u53d6\u8282\u70b9\n    doucument.querySelector('.first');\n    //\u901a\u8fc7id\u9009\u62e9\u5668\u83b7\u53d6\u8282\u70b9\n    doucument.querySelector('#second');\n    //\u901a\u8fc7\u4f2a\u7c7b\u9009\u62e9\u5668\u83b7\u53d6\u5b50\u8282\u70b9\n    document.querySelector('.first>span');\n    //\u786e\u8ba4selectAll\u6279\u91cf\u83b7\u53d6\u8282\u70b9\n    document.querySelectorAll('#second>div');\n<\/script>\n")),(0,o.kt)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0c\u6211\u6bd4\u8f83\u63a8\u8350\u4f7f\u7528querySelector\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b83\u66f4\u52a0\u7075\u6d3b\uff0c\u4f7f\u7528\u4f5c\u4e3acss\u9009\u62e9\u5668\u8fdb\u884c\u9009\u62e9\u975e\u5e38\u65b9\u4fbf\u3002\u5f53\u7136querySelector\u65b9\u6cd5\u4e0d\u53ea\u53ef\u4ee5\u83b7\u53d6\u5143\u7d20\u7684\u5b50\u8282\u70b9\uff0c\u5b83\u53ef\u4ee5\u83b7\u53d6\u4efb\u4f55\u8282\u70b9\u3002querySelector\u65b9\u6cd5\u53ef\u4ee5\u517c\u5bb9\u5230IE8\uff0c\u57fa\u672c\u80fd\u6ee1\u8db3\u524d\u7aef\u5f00\u53d1\u517c\u5bb9\u6027\u7684\u9700\u8981\u3002"))}u.isMDXComponent=!0}}]);