"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"router",sidebar_position:100},i="router\u539f\u7406",l={unversionedId:"React/router",id:"React/router",title:"router",description:"BrowserRouter \u548c HashRouter",source:"@site/programming-tech/React/07-router.md",sourceDirName:"React",slug:"/React/router",permalink:"/React/router",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/07-router.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"router",sidebar_position:100},sidebar:"docs",previous:{title:"hook\u548c\u95ed\u5305",permalink:"/React/hook\u548c\u95ed\u5305"},next:{title:"vue3-Dff",permalink:"/React/vue3-Dff"}},u={},s=[{value:"BrowserRouter \u548c HashRouter",id:"browserrouter-\u548c-hashrouter",level:2},{value:"1. BrowserRouter\uff1ah5\u8def\u7531(history API),url\u7684pathname\u6bb5",id:"1-browserrouterh5\u8def\u7531history-apiurl\u7684pathname\u6bb5",level:3},{value:"2. HashRouter\uff1a\u5728\u8def\u5f84\u4e2d\u5305\u542b\u4e86#\uff0c\u76f8\u5f53\u4e8eHTML\u7684\u951a\u70b9\u5b9a\u4f4d",id:"2-hashrouter\u5728\u8def\u5f84\u4e2d\u5305\u542b\u4e86\u76f8\u5f53\u4e8ehtml\u7684\u951a\u70b9\u5b9a\u4f4d",level:3},{value:"router\u548ccontext\u7ec4\u4ef6\u7ea7\u7684\u6570\u636e\u5171\u4eab",id:"router\u548ccontext\u7ec4\u4ef6\u7ea7\u7684\u6570\u636e\u5171\u4eab",level:2},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:2},{value:"Router.js",id:"routerjs",level:3},{value:"Link.js",id:"linkjs",level:3},{value:"Route.js",id:"routejs",level:3},{value:"\u4f20\u53c2\u65b9\u5f0f",id:"\u4f20\u53c2\u65b9\u5f0f",level:2},{value:"\u4e2a\u4eba\u4f7f\u7528\u603b\u7ed3\uff1a",id:"\u4e2a\u4eba\u4f7f\u7528\u603b\u7ed3",level:2},{value:"1.Switch \u91cd\u547d\u540d\u4e3a Routes",id:"1switch-\u91cd\u547d\u540d\u4e3a-routes",level:3},{value:"Route \u7684\u65b0\u7279\u6027\u53d8\u66f4 ,component/render \u88ab element \u66ff\u4ee3",id:"route-\u7684\u65b0\u7279\u6027\u53d8\u66f4-componentrender-\u88ab-element-\u66ff\u4ee3",level:3},{value:"history \u7684\u7528\u6cd5\u4e5f\u5c06\u88ab\u66ff\u6362\u6210 navigate",id:"history-\u7684\u7528\u6cd5\u4e5f\u5c06\u88ab\u66ff\u6362\u6210-navigate",level:3},{value:"Module &#39;&quot;react-router-dom&quot;&#39; has no exported member &#39;withRouter&#39;.",id:"module-react-router-dom-has-no-exported-member-withrouter",level:3},{value:"Redirect \u4e5f\u6ca1\u6cd5\u4f7f\u7528",id:"redirect-\u4e5f\u6ca1\u6cd5\u4f7f\u7528",level:3},{value:"React Router v6 exact",id:"react-router-v6-exact",level:3},{value:"\u5d4c\u5957\u8def\u7531\u53d8\u5f97\u66f4\u7b80\u5355",id:"\u5d4c\u5957\u8def\u7531\u53d8\u5f97\u66f4\u7b80\u5355",level:3},{value:"\u5b9e\u73b0\u6765\u56de\u5bfc\u822a(\u4f7f\u7528 go\u3001goBack\u3001goForward)",id:"\u5b9e\u73b0\u6765\u56de\u5bfc\u822a\u4f7f\u7528-gogobackgoforward",level:3},{value:"\u83b7\u53d6\u5f53\u524d\u8def\u7531",id:"\u83b7\u53d6\u5f53\u524d\u8def\u7531",level:3},{value:"1.params\u53c2\u6570",id:"1params\u53c2\u6570",level:2},{value:"\u63a5\u6536",id:"\u63a5\u6536",level:3},{value:"2.search\u53c2\u6570",id:"2search\u53c2\u6570",level:2},{value:"\u63a5\u6536",id:"\u63a5\u6536-1",level:3},{value:"3.state \u4f20\u53c2",id:"3state-\u4f20\u53c2",level:2}],p=(c="Router",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const m={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router\u539f\u7406"},"router\u539f\u7406"),(0,o.kt)("h2",{id:"browserrouter-\u548c-hashrouter"},"BrowserRouter \u548c HashRouter"),(0,o.kt)("h3",{id:"1-browserrouterh5\u8def\u7531history-apiurl\u7684pathname\u6bb5"},"1. BrowserRouter\uff1ah5\u8def\u7531(history API),url\u7684pathname\u6bb5"),(0,o.kt)("p",null,"window.history\u662f\u4e00\u4e2a\u5806\u6808\uff0c\u91cc\u9762\u5b58\u653e\u4e86\u5f53\u524d\u6d4f\u89c8\u5668Tab\u7684\u6240\u6709\u6d4f\u89c8url\u5e76\u4f9d\u7167\u6d4f\u89c8\u987a\u5e8f\u5b58\u653e\u5728\u5806\u6808\u4e2d\u3002"),(0,o.kt)("p",null,"BrowserRouter\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000/article/num1"},"http://127.0.0.1:3000/article/num1")),(0,o.kt)("p",null,"HashRouter\u76f8\u5f53\u4e8e\u951a\u70b9\u5b9a\u4f4d\uff0c\u56e0\u6b64\u4e0d\u8bba#\u540e\u9762\u7684\u8def\u5f84\u600e\u4e48\u53d8\u5316\uff0c\u8bf7\u6c42\u7684\u90fd\u76f8\u5f53\u4e8e\u662f#\u4e4b\u524d\u7684\u90a3\u4e2a\u9875\u9762\u3002\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u8fdb\u884c\u524d\u540e\u7aef\u4e0d\u5206\u79bb\u7684\u90e8\u7f72(\u4e5f\u5c31\u662f\u628a\u524d\u7aef\u6253\u5305\u540e\u7684\u6587\u4ef6\u653e\u5230\u670d\u52a1\u5668\u7aef\u7684public\u6216static\u91cc)\uff0c"),(0,o.kt)("p",null,"\u56e0\u4e3a\u8bf7\u6c42\u7684\u94fe\u63a5\u90fd\u662fip\u5730\u5740:\u7aef\u53e3/#/xxxx\uff0c\u56e0\u6b64\u8bf7\u6c42\u7684\u8d44\u6e90\u8def\u5f84\u6c38\u8fdc\u4e3a/\uff0c\u76f8\u5f53\u4e8eindex.html\uff0c\u800c\u5176\u4ed6\u7684\u540e\u7aefAPI\u63a5\u53e3\u90fd\u53ef\u4ee5\u6b63\u5e38\u8bf7\u6c42\uff0c\u4e0d\u4f1a\u548c/\u51b2\u7a81\uff0c\u7531\u4e8e\u524d\u540e\u7aef\u4e0d\u5206\u79bb\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u8de8\u57df\u95ee\u9898\u3002"),(0,o.kt)("p",null,"BrowserRouter\u8fdb\u884c\u7ec4\u4ef6\u8df3\u8f6c\u65f6\u53ef\u4ee5\u4f20\u9012\u4efb\u610f\u53c2\u6570\u5b9e\u73b0\u7ec4\u4ef6\u95f4\u7684\u901a\u4fe1\n\u800cHashRouter\u4e0d\u80fd(\u9664\u975e\u624b\u52a8\u62fc\u63a5URL\u5b57\u7b26\u4e32)\uff0c\u56e0\u6b64\u4e00\u822c\u914d\u5408Redux\u4f7f\u7528\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u95f4\u7684\u6570\u636e\u901a\u4fe1\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3aBrowserRouter\u6a21\u5f0f\u4e0b\u8bf7\u6c42\u7684\u94fe\u63a5\u90fd\u662fip\u5730\u5740:\u7aef\u53e3/xxxx/xxxx\uff0c\u56e0\u6b64\u76f8\u5f53\u4e8e\u6bcf\u4e2aURL\u90fd\u4f1a\u8bbf\u95ee\u4e00\u4e2a\u4e0d\u540c\u7684\u540e\u7aef\u5730\u5740\uff0c\u5982\u679c\u540e\u7aef\u6ca1\u6709\u8986\u76d6\u5230\u8def\u7531\u5c31\u4f1a\u4ea7\u751f404\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u52a0\u5165\u4e2d\u95f4\u4ef6\u89e3\u51b3\uff0c\u653e\u5728\u670d\u52a1\u5668\u7aef\u8def\u7531\u5339\u914d\u7684\u6700\u540e\uff0c\u5982\u679c\u524d\u9762\u7684API\u63a5\u53e3\u90fd\u4e0d\u5339\u914d\uff0c\u5219\u8fd4\u56deindex.html\u9875\u9762\u3002\u4f46\u8fd9\u6837\u4e5f\u6709\u4e00\u4e9b\u5c0f\u95ee\u9898\uff0c\u56e0\u4e3a\u8981\u6c42\u524d\u7aef\u8def\u7531\u548c\u540e\u7aef\u8def\u7531\u7684URL\u4e0d\u80fd\u91cd\u590d\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u5546\u54c1\u5217\u8868\u7ec4\u4ef6\u53eb/product/list\uff0c\u800c\u8bf7\u6c42\u5546\u54c1\u5217\u8868\u7684API\u4e5f\u662f/product/list\uff0c\u90a3\u4e48\u5c31\u4f1a\u8bbf\u95ee\u4e0d\u5230\u9875\u9762\uff0c\u800c\u662f\u88abAPI\u63a5\u53e3\u5339\u914d\u5230\u3002"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5:\n\u8fdb\u884c\u524d\u540e\u7aef\u5206\u79bb\u7684\u90e8\u7f72\uff0c\u6bd4\u5982\u524d\u7aef\u5730\u5740ip1:\u7aef\u53e31\uff0c\u540e\u7aef\u63a5\u53e3\u5730\u5740ip2:\u7aef\u53e32\uff0c\u4f7f\u7528Nginx\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u8fdb\u884c\u8bf7\u6c42\u5206\u53d1\u3002\u524d\u7aef\u5411\u540e\u7aef\u53d1\u8d77\u8bf7\u6c42\u7684URL\u4e3anginx\u6240\u5728\u7684\u670d\u52a1\u5668+/api/xxx\uff0c\u901a\u8fc7NGINX\u7684\u914d\u7f6e\u6587\u4ef6\u5224\u65ad\uff0c\u5982\u679cURL\u4ee5api\u5f00\u5934\u5219\u8f6c\u53d1\u81f3\u540e\u7aef\u63a5\u53e3\uff0c\u5426\u5219\u8f6c\u53d1\u81f3\u524d\u7aef\u7684\u5730\u5740\uff0c\u8bbf\u95ee\u9879\u76ee\u53ea\u9700\u8bbf\u95eeNginx\u670d\u52a1\u5668\u5373\u53ef"),(0,o.kt)("h3",{id:"2-hashrouter\u5728\u8def\u5f84\u4e2d\u5305\u542b\u4e86\u76f8\u5f53\u4e8ehtml\u7684\u951a\u70b9\u5b9a\u4f4d"},"2. HashRouter\uff1a\u5728\u8def\u5f84\u4e2d\u5305\u542b\u4e86#\uff0c\u76f8\u5f53\u4e8eHTML\u7684\u951a\u70b9\u5b9a\u4f4d"),(0,o.kt)("p",null,"HashRouter\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000/#/article/num1"},"http://127.0.0.1:3000/#/article/num1")),(0,o.kt)("p",null,"HashRouter \u53ea\u4f1a\u4fee\u6539URL\u4e2d\u7684\u54c8\u5e0c\u503c\u90e8\u5206\uff1b\u800c BrowserRouter \u4fee\u6539\u7684\u662fURL\u672c\u8eab\nHashRouter \u662f\u7eaf\u524d\u7aef\u8def\u7531\uff0c\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165URL\u76f4\u63a5\u8bbf\u95ee\uff1b"),(0,o.kt)("p",null,"\u4f7f\u7528\u65f6 BrowserRouter \u76f4\u63a5\u8f93\u5165URL\u4f1a\u663e\u793a404\uff0c\u9664\u975e\u914d\u7f6eNginx\u5c06\u8bf7\u6c42\u6307\u5411\u5bf9\u5e94\u7684HTML\u6587\u4ef6\u3002\u521d\u6b21\u8fdb\u5165 / \u8def\u5f84\u65f6\u6216\u70b9\u51fb Link \u7ec4\u4ef6\u8df3\u8f6c\u65f6\u4e0d\u4f1a\u53d1\u9001\u8bf7\u6c42"),(0,o.kt)("h2",{id:"router\u548ccontext\u7ec4\u4ef6\u7ea7\u7684\u6570\u636e\u5171\u4eab"},"router\u548ccontext\u7ec4\u4ef6\u7ea7\u7684\u6570\u636e\u5171\u4eab"),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u7684\u529f\u80fd\u4e0d\u80fd\u5355\u9760\u7ec4\u4ef6\u81ea\u8eab\u6765\u5b8c\u6210\uff0c\u8fd8\u9700\u8981\u4f9d\u8d56\u989d\u5916\u7684\u5b50\u7ec4\u4ef6\uff0c\u90a3\u4e48\u53ef\u4ee5\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u6784\u5efa\u4e00\u4e2a\u7531\u591a\u4e2a\u5b50\u7ec4\u4ef6\u7ec4\u5408\u7684\u7ec4\u4ef6\u3002\u4f8b\u5982\uff0creact-router\u3002"),(0,o.kt)("p",null,"react-router\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u81ea\u8eab\u5e76\u4e0d\u80fd\u72ec\u7acb\u5b8c\u6210\u8def\u7531\u7684\u64cd\u4f5c\u548c\u7ba1\u7406\uff0c\u56e0\u4e3a\u5bfc\u822a\u94fe\u63a5\u548c\u8df3\u8f6c\u7684\u5185\u5bb9\u901a\u5e38\u662f\u5206\u79bb\u7684\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u4f9d\u8d56",(0,o.kt)("inlineCode",{parentName:"p"},"<Link />"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"<Route />"),"\u7b49\u5b50\u7ec4\u4ef6\u6765\u4e00\u540c\u5b8c\u6210\u8def\u7531\u7684\u76f8\u5173\u5de5\u4f5c\u3002\u4e3a\u4e86\u8ba9\u76f8\u5173\u7684\u5b50\u7ec4\u4ef6\u4e00\u540c\u53d1\u6325\u4f5c\u7528\uff0creact-router\u7684\u5b9e\u73b0\u65b9\u6848\u662f\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"<Link />"),"\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"<Route />"),"\u8fd9\u4e9b\u76f8\u5173\u7684\u7ec4\u4ef6\u4e4b\u95f4\u5171\u4eab\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"router"),"\uff0c\u8fdb\u800c\u5b8c\u6210\u8def\u7531\u7684\u7edf\u4e00\u64cd\u4f5c\u548c\u7ba1\u7406\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u622a\u53d6",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"<Link />"),"\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"<Route />"),"\u8fd9\u4e9b\u76f8\u5173\u7684\u7ec4\u4ef6\u90e8\u5206\u6e90\u7801\uff0c\u4ee5\u4fbf\u66f4\u597d\u7684\u7406\u89e3\u4e0a\u8ff0\u6240\u8bf4\u7684\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u7684\u5206\u6790\uff0c\u53ef\u4ee5\u770b\u51fa\uff0c\u6574\u4e2areact-router\u5176\u5b9e\u5c31\u662f\u56f4\u7ed5\u7740",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u6765\u6784\u5efa\u7684\u3002"),(0,o.kt)("p",null,"\u603b\u7ed3\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u76f8\u6bd4",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"\uff0cReact\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u53ef\u4ee5\u5b9e\u73b0\u8de8\u5c42\u7ea7\u7684\u7ec4\u4ef6\u901a\u4fe1\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Context API\u7684\u4f7f\u7528\u57fa\u4e8e\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f\u3002\u751f\u4ea7\u8005\u4e00\u65b9\uff0c\u901a\u8fc7\u7ec4\u4ef6\u9759\u6001\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"childContextTypes"),"\u58f0\u660e\uff0c\u7136\u540e\u901a\u8fc7\u5b9e\u4f8b\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"getChildContext()"),"\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u5bf9\u8c61\u3002\u6d88\u8d39\u8005\u4e00\u65b9\uff0c\u901a\u8fc7\u7ec4\u4ef6\u9759\u6001\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"contextTypes"),"\u7533\u8bf7\u8981\u7528\u5230\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u5c5e\u6027\uff0c\u7136\u540e\u901a\u8fc7\u5b9e\u4f8b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"\u8bbf\u95ee",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u7684\u5c5e\u6027\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u9700\u8981\u591a\u4e00\u4e9b\u601d\u8003\uff0c\u4e0d\u5efa\u8bae\u5728App\u4e2d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\uff0c\u4f46\u5982\u679c\u5f00\u53d1\u7ec4\u4ef6\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u786e\u4fdd\u7ec4\u4ef6\u7684\u5185\u805a\u6027\uff0c\u53ef\u63a7\u53ef\u7ef4\u62a4\uff0c\u4e0d\u7834\u574f\u7ec4\u4ef6\u6811\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5f71\u54cd\u8303\u56f4\u5c0f\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u89e3\u51b3\u4e00\u4e9b\u95ee\u9898\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u66b4\u9732API\u6216\u8bb8\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u7ed9\u89e3\u51b3\u4e00\u4e9b\u95ee\u9898\u5e26\u6765\u4fbf\u5229\uff0c\u4f46\u4e2a\u4eba\u8ba4\u4e3a\u4e0d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u5b9e\u8df5\uff0c\u9700\u8981\u614e\u91cd\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65e7\u7248\u672c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u7684\u66f4\u65b0\u9700\u8981\u4f9d\u8d56",(0,o.kt)("inlineCode",{parentName:"p"},"setState()"),"\uff0c\u662f\u4e0d\u53ef\u9760\u7684\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u95ee\u9898\u5728\u65b0\u7248\u7684API\u4e2d\u5f97\u4ee5\u89e3\u51b3\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u5f53\u505a\u7ec4\u4ef6\u7684\u4f5c\u7528\u57df\u6765\u770b\u5f85\uff0c\u4f46\u662f\u9700\u8981\u5173\u6ce8",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u7684\u53ef\u63a7\u6027\u548c\u5f71\u54cd\u8303\u56f4\uff0c\u4f7f\u7528\u4e4b\u524d\uff0c\u5148\u5206\u6790\u662f\u5426\u771f\u7684\u6709\u5fc5\u8981\u4f7f\u7528\uff0c\u907f\u514d\u8fc7\u5ea6\u4f7f\u7528\u6240\u5e26\u6765\u7684\u4e00\u4e9b\u526f\u4f5c\u7528\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u5f53\u505a\u5a92\u4ecb\uff0c\u8fdb\u884cApp\u7ea7\u6216\u8005\u7ec4\u4ef6\u7ea7\u7684\u6570\u636e\u5171\u4eab\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5982\u679c\u8fd9\u4e2a\u7ec4\u4ef6\u9700\u8981\u591a\u4e2a\u7ec4\u4ef6\u5173\u8054\u7ec4\u5408\u7684\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u6216\u8bb8\u53ef\u4ee5\u66f4\u52a0\u4f18\u96c5\u3002"))),(0,o.kt)("h2",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("h3",{id:"routerjs"},"Router.js"),(0,o.kt)("p",null,"\u5c3d\u7ba1\u6e90\u7801\u8fd8\u6709\u5176\u4ed6\u7684\u903b\u8f91\uff0c\u4f46",(0,o.kt)(p,{mdxType:"Router"}),"\u7684\u6838\u5fc3\u5c31\u662f\u4e3a\u5b50\u7ec4\u4ef6\u63d0\u4f9b\u4e00\u4e2a\u5e26\u6709router\u5c5e\u6027\u7684Context\uff0c\u540c\u65f6\u76d1\u542chistory\uff0c\u4e00\u65e6history\u53d1\u751f\u53d8\u5316\uff0c\u4fbf\u901a\u8fc7setState()\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * The public API for putting history on context.\n */\nclass Router extends React.Component {\n  static propTypes = {\n    history: PropTypes.object.isRequired,\n    children: PropTypes.node\n  };\n\n  static contextTypes = {\n    router: PropTypes.object\n  };\n\n  static childContextTypes = {\n    router: PropTypes.object.isRequired\n  };\n\n  getChildContext() {\n    return {\n      router: {\n        ...this.context.router,\n        history: this.props.history,\n        route: {\n          location: this.props.history.location,\n          match: this.state.match\n        }\n      }\n    };\n  }\n  \n  // ......\n  \n  componentWillMount() {\n    const { children, history } = this.props;\n    \n    // ......\n    \n    this.unlisten = history.listen(() => {\n      this.setState({\n        match: this.computeMatch(history.location.pathname)\n      });\n    });\n  }\n\n  // ......\n}\n")),(0,o.kt)("h3",{id:"linkjs"},"Link.js"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Link />"),"\u7684\u6838\u5fc3\u5c31\u662f\u6e32\u67d3",(0,o.kt)("inlineCode",{parentName:"p"},"<a>"),"\u6807\u7b7e\uff0c\u62e6\u622a",(0,o.kt)("inlineCode",{parentName:"p"},"<a>"),"\u6807\u7b7e\u7684\u70b9\u51fb\u4e8b\u4ef6\uff0c\u7136\u540e\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u5171\u4eab\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"router"),"\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"history"),"\u8fdb\u884c\u8def\u7531\u64cd\u4f5c\uff0c\u8fdb\u800c\u901a\u77e5",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * The public API for rendering a history-aware <a>.\n */\nclass Link extends React.Component {\n  \n  // ......\n  \n  static contextTypes = {\n    router: PropTypes.shape({\n      history: PropTypes.shape({\n        push: PropTypes.func.isRequired,\n        replace: PropTypes.func.isRequired,\n        createHref: PropTypes.func.isRequired\n      }).isRequired\n    }).isRequired\n  };\n\n  handleClick = event => {\n    if (this.props.onClick) this.props.onClick(event);\n\n    if (\n      !event.defaultPrevented &&\n      event.button === 0 &&\n      !this.props.target &&\n      !isModifiedEvent(event)\n    ) {\n      event.preventDefault();\n      // \u4f7f\u7528<Router />\u7ec4\u4ef6\u63d0\u4f9b\u7684router\u5b9e\u4f8b\n      const { history } = this.context.router;\n      const { replace, to } = this.props;\n\n      if (replace) {\n        history.replace(to);\n      } else {\n        history.push(to);\n      }\n    }\n  };\n  \n  render() {\n    const { replace, to, innerRef, ...props } = this.props;\n\n    // ...\n\n    const { history } = this.context.router;\n    const location =\n      typeof to === "string"\n        ? createLocation(to, null, null, history.location)\n        : to;\n\n    const href = history.createHref(location);\n    return (\n      <a {...props} onClick={this.handleClick} href={href} ref={innerRef} />\n    );\n  }\n}\n')),(0,o.kt)("h3",{id:"routejs"},"Route.js"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Route />"),"\u6709\u4e00\u90e8\u5206\u6e90\u7801\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"<Router />"),"\u76f8\u4f3c\uff0c\u53ef\u4ee5\u5b9e\u73b0\u8def\u7531\u7684\u5d4c\u5957\uff0c\u4f46\u5176\u6838\u5fc3\u662f\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u5171\u4eab\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"router"),"\uff0c\u5224\u65ad\u662f\u5426\u5339\u914d\u5f53\u524d\u8def\u7531\u7684\u8def\u5f84\uff0c\u7136\u540e\u6e32\u67d3\u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Route extends React.Component {\n  \n  // ......\n  \n  state = {\n    match: this.computeMatch(this.props, this.context.router)\n  };\n\n  // \u8ba1\u7b97\u5339\u914d\u7684\u8def\u5f84\uff0c\u5339\u914d\u7684\u8bdd\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5339\u914d\u5bf9\u8c61\uff0c\u5426\u5219\u8fd4\u56denull\n  computeMatch(\n    { computedMatch, location, path, strict, exact, sensitive },\n    router\n  ) {\n    if (computedMatch) return computedMatch;\n    \n    // ......\n\n    const { route } = router;\n    const pathname = (location || route.location).pathname;\n    \n    return matchPath(pathname, { path, strict, exact, sensitive }, route.match);\n  }\n \n  // ......\n\n  render() {\n    const { match } = this.state;\n    const { children, component, render } = this.props;\n    const { history, route, staticContext } = this.context.router;\n    const location = this.props.location || route.location;\n    const props = { match, location, history, staticContext };\n\n    if (component) return match ? React.createElement(component, props) : null;\n\n    if (render) return match ? render(props) : null;\n\n    if (typeof children === "function") return children(props);\n\n    if (children && !isEmptyChildren(children))\n      return React.Children.only(children);\n\n    return null;\n  }\n}\n')),(0,o.kt)("h2",{id:"\u4f20\u53c2\u65b9\u5f0f"},"\u4f20\u53c2\u65b9\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"params\u4f20\u53c2:\u8def\u7531\u8868\u914d\u7f6e\uff1a\u53c2\u6570\u5730\u5740\u680f\u663e\u793a;\u52a8\u6001\u8def\u7531,\u63a8\u8350\u4f7f\u7528")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"search\u4f20\u53c2\uff1a\u4f1a\u66b4\u9732\u5728url\u4e2d\uff0c\u5237\u65b0\u9875\u9762\u4e0d\u4f1a\u6d88\u5931\uff0c\u4f46\u53d6\u6570\u636e\u65f6\uff0c\u9700\u5904\u7406")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"query\u4f20\u53c2:\u53c2\u6570\u5730\u5740\u680f\u4e0d\u663e\u793a\uff0c\u5237\u65b0\u5730\u5740\u680f\uff0c\u53c2\u6570\u4e22\u5931,\u7c7b\u4f3c\u4e8e\u8868\u5355\u4e2d\u7684get\u65b9\u6cd5\uff0c\u4f20\u9012\u53c2\u6570\u4e3a\u660e\u6587")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"state\u4f20\u53c2,\u7c7b\u4f3c\u4e8epost\u65b9\u5f0f\uff0c\u4f7f\u7528\u65b9\u5f0f\u548cquery\u7c7b\u4f3c"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"state\u4f20\u53c2\uff1aBrowserRouter(history)\u6a21\u5f0f\u4e0b\uff0c\u5237\u65b0\u9875\u9762\u4e0d\u6d88\u5931\uff1b\n\n\u800cHashRouter(hash)\u6a21\u5f0f\u4e0b\uff0c\u5237\u65b0\u9875\u9762\u4f1a\u6d88\u5931\uff0c\u4f46\u90fd\u4e0d\u4f1a\u66b4\u9732\u5728url\u4e2d\n")),(0,o.kt)("h1",{id:"react-router-v6"},"react router v6"),(0,o.kt)("h2",{id:"\u4e2a\u4eba\u4f7f\u7528\u603b\u7ed3"},"\u4e2a\u4eba\u4f7f\u7528\u603b\u7ed3\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u79fb\u9664\u4e86\u4e4b\u524d\u7684 withRouter\uff0c\u8def\u7531\u7ec4\u4ef6\u4f7f\u7528hooks\u8ba2\u9605histery")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useNavigate } from 'react-router-dom';\n\nfunction App(props: any) {\n  let navigate = useNavigate();\n\n  const onRouter = (type: string) => {\n    console.log('onRouter')\n    navigate(`${type}`)\n  }\n\n  return (\n    <div className=\"container\">\n      <div>\n        <button onClick={() => onRouter('redux')}>ReduxPage</button>\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"useRoutes api\u5b9e\u73b0\u52a8\u6001\u8def\u7531\u66f4\u52a0\u65b9\u4fbf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const RoutesContainer = () => {\n    const GetRoutes = () => {\n        const routes = useRoutes(routesConfig);\n        return routes\n    }\n\n    return (\n        <HashRouter>\n            <GetRoutes />\n        </HashRouter>\n    );\n\n};\n")),(0,o.kt)("h3",{id:"1switch-\u91cd\u547d\u540d\u4e3a-routes"},"1.Switch \u91cd\u547d\u540d\u4e3a Routes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// v5\n<Switch>\n    <Route exact path="/"><Home /></Route>\n    <Route path="/profile"><Profile /></Route>\n</Switch>\n\n// v6\n<Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="profile/*" element={<Profile />} />\n</Routes>\n')),(0,o.kt)("h3",{id:"route-\u7684\u65b0\u7279\u6027\u53d8\u66f4-componentrender-\u88ab-element-\u66ff\u4ee3"},"Route \u7684\u65b0\u7279\u6027\u53d8\u66f4 ,component/render \u88ab element \u66ff\u4ee3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Profile from \'./Profile\';\n\n// v5\n<Route path=":userId" component={Profile} />\n<Route\n  path=":userId"\n  render={routeProps => (\n    <Profile routeProps={routeProps} animate={true} />\n  )}\n/>\n\n// v6\n<Route path=":userId" element={<Profile />} />\n<Route path=":userId" element={<Profile animate={true} />} />\n')),(0,o.kt)("h3",{id:"history-\u7684\u7528\u6cd5\u4e5f\u5c06\u88ab\u66ff\u6362\u6210-navigate"},"history \u7684\u7528\u6cd5\u4e5f\u5c06\u88ab\u66ff\u6362\u6210 navigate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// v5\nhistory.push('/home');\nhistory.replace('/home');\n\n// v6\nnavigate('/home');\nnavigate('/home', { replace: true });\n")),(0,o.kt)("h3",{id:"module-react-router-dom-has-no-exported-member-withrouter"},"Module '\"react-router-dom\"' has no exported member 'withRouter'."),(0,o.kt)("p",null,"react-router-dom v6 \u7248\u672c\u4e2d\u7684 withRouter \u548c Switch \u5df2\u8fc7\u65f6\uff0c\u53ef\u4ee5\u9000\u56de\u5230 v5 \u7248\u672c\u7ee7\u7eed\u4f7f\u7528\uff0c\u6216\u8005\u4f7f\u7528 useNavigate()\u66ff\u4ee3 withRouter\uff0c\u4f7f\u7528 Routes \u66ff\u4ee3 Switch\u3002\n\u4f8b\u5982\uff1a"),(0,o.kt)("p",null,"const navigate = useNavigate()\nnavigate('/test') // \u8df3\u8f6c\u5230/test\nnavigate(-1) // \u8fd4\u56de\u4e0a\u4e00\u7ea7\nnavigate(0, {replace: true})// \u5f3a\u5236\u5237\u65b0\u5f53\u524d\u9875\u9762\u5e76\u4e0d\u52a0\u5165\u8def\u7531\u5386\u53f2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'So basically instead of having somthing like\n...\nfunction handleClick() {\n  history.push("/home");\n}\n...\nuse something like:\n\n// This is a React Router v6 app\nimport { useNavigate } from "react-router-dom";\nfunction App() {\n  let navigate = useNavigate();\n  function handleClick() {\n    navigate("/home");\n  }\n  ...\n')),(0,o.kt)("h3",{id:"redirect-\u4e5f\u6ca1\u6cd5\u4f7f\u7528"},"Redirect \u4e5f\u6ca1\u6cd5\u4f7f\u7528"),(0,o.kt)("p",null,"\u65b0\u7248\u7684\u8def\u7531\u9700\u8981\u5f15\u5165 Navigate \u6807\u7b7e\uff0c\u4ee5\u4e0b\u662f\u6848\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Router>\n  <Routes>\n    <Route path='/login' element={<Login />} />\n    <Route path='/admin' element={<Admin />} />\n    <Route path='*' element={<Navigate to='/login' />} />\n  </Routes>\n</Router>;\n\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b8c\u7f8e\u66ff\u4ee3\u4e4b\u524dRedirect\u7684\u91cd\u5b9a\u5411\u64cd\u4f5c;\n")),(0,o.kt)("p",null,"\u6216\u5219\uff1a\n\u5e9f\u5f03\u4e86 V5 \u4e2d\u7684 Redirect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// v5 \u5e9f\u5f03\u4e86\nconst routers = [{ path: 'home', redirectTo: '/' }];\n\n// 404\u53ef\u4ee5\u8fd9\u4e48\u5199\nconst routers = [\n  {\n    name: '404',\n    path: '*',\n    element: <NoMatch />,\n  },\n];\n")),(0,o.kt)("h3",{id:"react-router-v6-exact"},"React Router v6 exact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Route exact>\u6d88\u5931\u4e86\u3002\u76f8\u53cd\uff0c\u5177\u6709\u540e\u4ee3\u8def\u7531\uff08\u5728\u5176\u4ed6\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\uff09\u7684\u8def\u7531\u5728\u5176\u8def\u5f84\u4e2d\u4f7f\u7528\u4e00\u4e2a\u5c3e\u968f*\u7b26\u53f7\u6765\u6307\u793a\u5b83\u4eec\u7cbe\u786e\u5339\u914d\u3002\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'react router v6 doesn\'t support exact anymore.\n\n// old - v5 <Route exact path="/" component={Home} />\n\n// new - v6 <Route path="/" element={<Home />} />\n\nAs stated in their documentation:\n\nYou don\'t need to use an exact prop on <Route path="/"> anymore. This is because all paths match exactly by default. If you want to match more of the URL because you have child routes use a trailing * as in <Route path="users/*">.\n')),(0,o.kt)("h3",{id:"\u5d4c\u5957\u8def\u7531\u53d8\u5f97\u66f4\u7b80\u5355"},"\u5d4c\u5957\u8def\u7531\u53d8\u5f97\u66f4\u7b80\u5355"),(0,o.kt)("p",null,"\u5177\u4f53\u53d8\u5316\u6709\u4ee5\u4e0b\uff1a\n1.Route children \u5df2\u66f4\u6539\u4e3a\u63a5\u53d7\u5b50\u8def\u7531\u3002 2.\u6bd4 Route exact \u548c Route strict \u66f4\u7b80\u5355\u7684\u5339\u914d\u89c4\u5219\u3002\n3.Route path \u8def\u5f84\u5c42\u6b21\u66f4\u6e05\u6670\u3002"),(0,o.kt)("p",null,"v5 \u4e2d\u7684\u5d4c\u5957\u8def\u7531\u5fc5\u987b\u975e\u5e38\u660e\u786e\u5b9a\u4e49\uff0c\u4e14\u8981\u6c42\u5728\u8fd9\u4e9b\u7ec4\u4ef6\u4e2d\u5305\u542b\u8bb8\u591a\u5b57\u7b26\u4e32\u5339\u914d\u903b\u8f91."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// v5\nimport {\n  BrowserRouter,\n  Switch,\n  Route,\n  Link,\n  useRouteMatch,\n} from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Switch>\n        <Route exact path='/' component={Home} />\n        <Route path='/profile' component={Profile} />\n      </Switch>\n    </BrowserRouter>\n  );\n}\n\nfunction Profile() {\n  let { path, url } = useRouteMatch();\n\n  return (\n    <div>\n      <nav>\n        <Link to={`${url}/me`}>My Profile</Link>\n      </nav>\n\n      <Switch>\n        <Route path={`${path}/me`}>\n          <MyProfile />\n        </Route>\n        <Route path={`${path}/:id`}>\n          <OthersProfile />\n        </Route>\n      </Switch>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"v6 \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5220\u9664\u5b57\u7b26\u4e32\u5339\u914d\u903b\u8f91\u3002\u4e0d\u9700\u8981\u4efb\u4f55 useRouteMatch()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// v6\nimport { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n        <Route path='profile/*' element={<Profile />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nfunction Profile() {\n  return (\n    <div>\n      <nav>\n        <Link to='me'>My Profile</Link>\n      </nav>\n\n      <Routes>\n        <Route path='me' element={<MyProfile />} />\n        <Route path=':id' element={<OthersProfile />} />\n      </Routes>\n    </div>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'        // <HashRouter>\n        <BrowserRouter>\n            <Routes>\n                {/* {routesConfig.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}\n                {/* <Route element={NotFound} /> */}\n                {/* <Route path="/" element={<Home />} > */}\n                <Route path="/">\n                    {/* <Route path="moments" element={<Moments />} /> */}\n                    <Route path="*" element={<NotFound />} />\n                </Route>\n                <Route path="/moments" element={<Moments />} />\n            </Routes>\n        {/* </HashRouter> */}\n')),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u6765\u56de\u5bfc\u822a\u4f7f\u7528-gogobackgoforward"},"\u5b9e\u73b0\u6765\u56de\u5bfc\u822a(\u4f7f\u7528 go\u3001goBack\u3001goForward)"),(0,o.kt)("p",null,"\u5b9e\u73b0\u6765\u56de\u5bfc\u822a(\u4f7f\u7528 go\u3001goBack\u3001goForward)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useHistory } from 'react-router-dom';\n\nfunction App() {\n  const { go, goBack, goForward } = useHistory();\n\n  return (\n    <>\n      <button onClick={() => go(-2)}>Go 2 pages back</button>\n      <button onClick={goBack}>Go back</button>\n      <button onClick={goForward}>Go forward</button>\n      <button onClick={() => go(2)}>Go 2 pages forward</button>\n    </>\n  );\n}\n")),(0,o.kt)("h3",{id:"\u83b7\u53d6\u5f53\u524d\u8def\u7531"},"\u83b7\u53d6\u5f53\u524d\u8def\u7531"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NavLink,useLocation } from \"react-router-dom\";\nimport './index.scss'\n\nconst Header =()=>{\n  const { pathname } = useLocation()\n  ...\n}\n")),(0,o.kt)("h1",{id:"v6-\u4f20\u53c2"},"v6 \u4f20\u53c2"),(0,o.kt)("h2",{id:"1params\u53c2\u6570"},"1.params\u53c2\u6570"),(0,o.kt)("p",null,"\u9700\u8981\u5728Route\u4e0a\u663e\u793a\u5199\u660e :params"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<BrowserRouter>\n  <Routes>\n      <Route path={'/class/:id/:grade'} element={<ToPage/>} />\n  </Routes>\n</BrowserRouter>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { useNavigate } from "react-router-dom";\nconst goTo = () => {\n    navigate(`/class/${id}/${grade}`)\n}\n\nimport { useParams } from "react-router-dom";\n\nconst ToPages = () => {\n  const { id, grade } = useParams();\n  return (<h1>id : {id}, grade : {grade}</h1>)}\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { useNavigate } from "react-router-dom";\nlet navigate = useNavigate();\nfunction navigateToDetail(id){\n    navigate(`detail/${id}`)\n}\n')),(0,o.kt)("h3",{id:"\u63a5\u6536"},"\u63a5\u6536"),(0,o.kt)("p",null,"\u5728detail\u9875\u9762\u9700\u8981\u4f7f\u7528useParams\u63a5\u6536\u8def\u7531params\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {useParams} from "react-router-dom";\nconst {id} = useParams();\n')),(0,o.kt)("h2",{id:"2search\u53c2\u6570"},"2.search\u53c2\u6570"),(0,o.kt)("p",null,"\u5982\u679c\u4f20\u9012\u7684\u662fsearch\u53c2\u6570\uff08\u4f8b\u5982\uff1adetail?id=1&name=\u674e\u56db\uff09\u9700\u8981\u4f7f\u7528useSearchParams\u83b7\u53d6search\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {useSearchParams} from "react-router-dom"\nconst [searchParams] = useSearchParams();\nconst id = searchParams.get("id");\n')),(0,o.kt)("p",null,"1.\u76f4\u63a5\u62fc\u63a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const Pages = () => {\n  const navigate = useNavigate();\n  const id = "1";\n  const grade = "2";\n  const goTo = () => {\n      navigate(`/class?id=${id}&grade=${grade}`)\n  }\n}\n')),(0,o.kt)("p",null,"1.2 pathname + \u62fc\u63a5search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const Pages = () => {\n  const navigate = useNavigate();\n  const id = "1";\n  const grade = "2";\n  const goTo = () => {\n      navigate({\n        pathname: "/class",\n        search: `?id=${id}&grade=${grade}`\n    })\n  }\n}\n')),(0,o.kt)("p",null,"1.3 pathname + \u521b\u5efasearch (\u63a8\u8350)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Pages = () => {\n  const navigate = useNavigate();\n  const params = { id: '1', grade: '2' };\n  const goTo = () => {\n      navigate({\n        pathname: \"/class\",\n        search: `?${createSearchParams(params)}`\n    })\n  }\n}\n")),(0,o.kt)("h3",{id:"\u63a5\u6536-1"},"\u63a5\u6536"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { useSearchParams } from "react-router-dom";\n\nconst ToPages = () => {\n  const [searchParams] = useSearchParams();\n  const id = searchParams.get("id");\n  const grade = searchParams.get("grade");\n  return (<h1>id : {id}, grade : {grade}</h1>)}\n}\n')),(0,o.kt)("h2",{id:"3state-\u4f20\u53c2"},"3.state \u4f20\u53c2"),(0,o.kt)("p",null,"\u5982\u679c\u4f20\u9012\u7684\u662fstate\u53c2\u6570\u9700\u8981\u4f7f\u7528useLocation\u83b7\u53d6\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { useNavigate } from "react-router-dom";\nconst goTo = () => {\n  navigate(`/class`, { state: {id, grade} } )\n}\n\nimport {useLocation} from "react-router-dom";\nconst location = useLocation();\nconst {id} = location.state;\n')))}h.isMDXComponent=!0}}]);