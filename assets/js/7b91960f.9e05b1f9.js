"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8083],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),v=o,m=s["".concat(a,".").concat(v)]||s[v]||d[v]||u;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,i=new Array(u);i[0]=v;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<u;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},30017:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const u={},i=void 0,l={unversionedId:"Vue/vue2/router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9",id:"Vue/vue2/router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9",title:"router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9",description:"router-link\u5bf9\u5e94\u7684router-view\u89c4\u5f8b\u4e3a\uff1a",source:"@site/programming-tech/Vue/vue2/07-router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9.md",sourceDirName:"Vue/vue2",slug:"/Vue/vue2/router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9",permalink:"/Vue/vue2/router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/vue2/07-router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"\u7236\u6267\u884c\u5b50\u7ec4\u4ef6-\u5b50\u6267\u884c\u7236",permalink:"/Vue/vue2/\u7236\u6267\u884c\u5b50\u7ec4\u4ef6-\u5b50\u6267\u884c\u7236"},next:{title:"\u8fc7\u6e21\u52a8\u753b\u5b9e\u73b0\u539f\u7406",permalink:"/Vue/vue2/vue\u52a8\u753b"}},a={},p=[{value:"1 router-link",id:"1-router-link",level:2},{value:"2.router-view",id:"2router-view",level:2}],c={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"router-link\u5bf9\u5e94\u7684router-view\u89c4\u5f8b\u4e3a\uff1a\n1.\u6839\u636eto\u7684\u503c\u800c\u5b9a\uff0c\u503c\u4e3a\u4e00\u5c42\uff08\u5982 /child\uff09\u5219\u5bf9\u5e94app.vue\u4e2d\u7684router-view\uff1b\n\u3000\u503c\u4e3a\u4e24\u5c42\uff0c\u5982 /second/child\uff0c\u5219\u5bf9\u5e94\u7684\u662f/second\u7ec4\u4ef6\u4e2d\u7684router-view\uff1b\u4ee5\u6b64\u7c7b\u63a8\n2.router-link\u6620\u5c04\u7684\u7ed3\u679c\u4e3a\u5176\u5bf9\u5e94\u7ec4\u4ef6\u7684\u6574\u4e2a\u9875\u9762\u5185\u5bb9\uff0c\u5982 to='/second/child'\uff0c\u5219\u5176\u5bf9\u5e94\u7684view\u4f1a\u663e\u793aapp.vue\u548c/second\u548c/second/child\u7b49\u7236\u5b50\u7ec4\u4ef6\u7684\u6574\u4e2a\u9875\u9762\u5185\u5bb9\uff1b\n\u3000\u540c\u6837\u7684\uff0c\u82e5to='/child'\uff0c\u5219\u5f97\u5230\u7684\u9875\u9762\u7ed3\u679c\u4e3aapp.vue\u548c/child\u7236\u5b50\u7ec4\u4ef6\u7684\u6574\u4e2a\u9875\u9762"),(0,o.kt)("p",null,"\u4e8c\u8005\u533a\u522b\uff1a"),(0,o.kt)("h2",{id:"1-router-link"},"1 router-link"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<router-link :to=\"{ path: '/hello', component: HelloWorld }\">hello</router-link>\n<router-link :to=\"{ path: '/user/useradd' }\">user</router-link>\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u662f\u4e24\u79cd\u5199\u6cd5\uff0c\u6839\u636e\u53c2\u6570\u8fd8\u4f1a\u6709\u66f4\u591a\u4e2d\u5199\u6cd5\u3002\n\u7ecf\u8fc7\u6d4b\u8bd5\uff1a\uff081\uff09\u6709component\u53c2\u6570\u65f6\u4f18\u5148router-link\u4e2d\u914d\u7f6e\u7684component\uff0c\u6ca1\u6709\u65f6\u4ecejs\u4e2d\u914d\u7f6e\u53d6\n\u3000\u3000\u3000\u3000\u3000\uff082\uff09path\u53c2\u6570\u81f3\u5173\u91cd\u8981\uff0c\u7075\u6d3b\u6240\u5728\uff0c/user/useradd \u5b9e\u9645\u5339\u914d\u4e86\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u5206\u522b\u662fuser\u548cuseradd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ path: '/user', component:user,\n  children:[\n    {path:'/user/useradd', component:useradd},\n    {path:'/user/userdelete', component:userdelete}\n  ]\n}\n")),(0,o.kt)("h2",{id:"2router-view"},"2.router-view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<router-view> \u662f\u7528\u6765\u6e32\u67d3\u901a\u8fc7\u8def\u7531\u6620\u5c04\u8fc7\u6765\u7684\u7ec4\u4ef6\uff0c\u5f53\u8def\u5f84\u66f4\u6539\u65f6\uff0c<router-view> \u4e2d\u7684\u5185\u5bb9\u4e5f\u4f1a\u53d1\u751f\u66f4\u6539\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<router-link :to=\"{ path: '/hello', component: HelloWorld }\">hello</router-link>\n<router-link :to=\"{ path: '/user/useradd' }\">user</router-link>\n<router-view/>\n")),(0,o.kt)("p",null,"\u5f53\u524d\u770b\u4e3b\u8981\u5e94\u7528\u4e8e\u5355\u9875\u9762\u4e2d\uff0c\u4e0erouter-link\u914d\u5408\uff0c\u6e32\u67d3router-link \u6620\u5c04\u8fc7\u6765\u7684\u7ec4\u4ef6\u3002"))}d.isMDXComponent=!0}}]);