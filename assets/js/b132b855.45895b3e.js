"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5853],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(67294);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,u=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=u,h=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return t?n.createElement(h,a(a({ref:r},p),{},{components:t})):n.createElement(h,a({ref:r},p))}));function h(e,r){var t=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[s]="string"==typeof e?e:u,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),u=(t(67294),t(3905));const o={},a=void 0,i={unversionedId:"Vue/vue2/Vue-router",id:"Vue/vue2/Vue-router",title:"Vue-router",description:"Vue-router\u8df3\u8f6c\u548clocation.href\u6709\u4ec0\u4e48\u533a\u522b",source:"@site/programming-tech/Vue/vue2/06-Vue-router.md",sourceDirName:"Vue/vue2",slug:"/Vue/vue2/Vue-router",permalink:"/Vue/vue2/Vue-router",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/vue2/06-Vue-router.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9",permalink:"/Vue/vue2/router-link\u4e0erouter-view\u7684\u5bf9\u5e94\u5173\u7cfb\u548c\u6620\u5c04\u7279\u70b9"},next:{title:"\u8fc7\u6e21\u52a8\u753b\u5b9e\u73b0\u539f\u7406",permalink:"/Vue/vue2/vue\u52a8\u753b"}},l={},c=[{value:"Vue-router\u8df3\u8f6c\u548clocation.href\u6709\u4ec0\u4e48\u533a\u522b",id:"vue-router\u8df3\u8f6c\u548clocationhref\u6709\u4ec0\u4e48\u533a\u522b",level:2},{value:"router \u548c route \u7684\u533a\u522b",id:"router-\u548c-route-\u7684\u533a\u522b",level:2},{value:"\u8df3\u8f6c1\uff1a",id:"\u8df3\u8f6c1",level:2},{value:"\u8df3\u8f6c2\uff1a",id:"\u8df3\u8f6c2",level:2},{value:"\u8df3\u8f6c3\uff1a",id:"\u8df3\u8f6c3",level:2}],p={toc:c},s="wrapper";function m(e){let{components:r,...t}=e;return(0,u.kt)(s,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"vue-router\u8df3\u8f6c\u548clocationhref\u6709\u4ec0\u4e48\u533a\u522b"},"Vue-router\u8df3\u8f6c\u548clocation.href\u6709\u4ec0\u4e48\u533a\u522b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u7b54\uff1a\u4f7f\u7528location.href='/url'\u6765\u8df3\u8f6c\uff0c\u7b80\u5355\u65b9\u4fbf\uff0c\u4f46\u662f\u5237\u65b0\u4e86\u9875\u9762\uff1b\n   \u4f7f\u7528history.pushState('/url')\uff0c\u65e0\u5237\u65b0\u9875\u9762\uff0c\u9759\u6001\u8df3\u8f6c\uff1b\n   \n\u5f15\u8fdbrouter\uff0c\u7136\u540e\u4f7f\u7528router.push('/url')\u6765\u8df3\u8f6c\uff0c\u4f7f\u7528\u4e86diff\u7b97\u6cd5\uff0c\u5b9e\u73b0\u4e86\u6309\u9700\u52a0\u8f7d\uff0c\u51cf\u5c11\u4e86dom\u7684\u6d88\u8017\u3002\n\u5176\u5b9e\u4f7f\u7528router\u8df3\u8f6c\u548c\u4f7f\u7528history.pushState()\u6ca1\u4ec0\u4e48\u5dee\u522b\u7684\uff0c\u56e0\u4e3avue-router\u5c31\u662f\u7528\u4e86history.pushState()\uff0c\u5c24\u5176\u662f\u5728history\u6a21\u5f0f\u4e0b\u3002\n")),(0,u.kt)("h2",{id:"router-\u548c-route-\u7684\u533a\u522b"},"router \u548c route \u7684\u533a\u522b"),(0,u.kt)("p",null,"router \u662fVueRouter\u7684\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7Vue.use(VueRouter)\u548cVueRouter\u6784\u9020\u51fd\u6570\u7684\u5230\u7684\u4e00\u4e2arouter\u5bf9\u8c61\nroute\u662f\u4e00\u4e2a\u8df3\u8f6c\u8def\u7531\u5bf9\u8c61\uff0c\u6bcf\u4e00\u4e2a\u8def\u7531\u90fd\u4f1a\u6709\u4e00\u4e2arouter\u5bf9\u8c61\uff0c\u662f\u4e00\u4e2a\u5c40\u90e8\u7684\u5bf9\u8c61\uff0c\u53ef\u4ee5\u83b7\u53d6\u5bf9\u5e94\u7684name\u3001path\u3001params\u3001query\u7b49"),(0,u.kt)("h1",{id:"vue\u8def\u7531\u4f20\u53c2\u7684\u4e09\u79cd\u65b9\u5f0f"},"vue\u8def\u7531\u4f20\u53c2\u7684\u4e09\u79cd\u65b9\u5f0f"),(0,u.kt)("h2",{id:"\u8df3\u8f6c1"},"\u8df3\u8f6c1\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"getDescribe(id) {\n// \u76f4\u63a5\u8c03\u7528$router.push \u5b9e\u73b0\u643a\u5e26\u53c2\u6570\u7684\u8df3\u8f6c\nthis.$router.push({\n  path: `/describe/${id}`,\n})\n\n// \u914d\u7f6e\uff1a\n{\n  path: '/describe/:id',\n  name: 'Describe',\n  component: Describe\n}\n// \u8bfb\u53d6\uff1a\n// \u5f88\u663e\u7136\uff0c\u9700\u8981\u5728path\u4e2d\u6dfb\u52a0/:id\u6765\u5bf9\u5e94 $router.push \u4e2dpath\u643a\u5e26\u7684\u53c2\u6570\u3002\u5728\u5b50\u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u4f7f\u7528\u6765\u83b7\u53d6\u4f20\u9012\u7684\u53c2\u6570\u503c\u3002\nthis.$route.params.id\n")),(0,u.kt)("h2",{id:"\u8df3\u8f6c2"},"\u8df3\u8f6c2\uff1a"),(0,u.kt)("p",null,"\u7236\u7ec4\u4ef6\u4e2d\uff1a\u901a\u8fc7\u8def\u7531\u5c5e\u6027\u4e2d\u7684name\u6765\u786e\u5b9a\u5339\u914d\u7684\u8def\u7531\uff0c\u901a\u8fc7params\u6765\u4f20\u9012\u53c2\u6570\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"this.$router.push({\n  name: 'Describe',\n  params: {\n    id: id\n  }\n})\n// \u914d\u7f6e\uff1a\n// \u5bf9\u5e94\u8def\u7531\u914d\u7f6e: \u6ce8\u610f\u8fd9\u91cc\u4e0d\u80fd\u4f7f\u7528:/id\u6765\u4f20\u9012\u53c2\u6570\u4e86\uff0c\u56e0\u4e3a\u7236\u7ec4\u4ef6\u4e2d\uff0c\u5df2\u7ecf\u4f7f\u7528params\u6765\u643a\u5e26\u53c2\u6570\u4e86\u3002\n{\n  path: '/describe',\n  name: 'Describe',\n  component: Describe\n}\n// \u8bfb\u53d6\uff1a\nthis.$route.params.id\n")),(0,u.kt)("h2",{id:"\u8df3\u8f6c3"},"\u8df3\u8f6c3\uff1a"),(0,u.kt)("p",null,"\u7236\u7ec4\u4ef6\uff1a\u4f7f\u7528path\u6765\u5339\u914d\u8def\u7531\uff0c\u7136\u540e\u901a\u8fc7query\u6765\u4f20\u9012\u53c2\u6570\n\u8fd9\u79cd\u60c5\u51b5\u4e0b query\u4f20\u9012\u7684\u53c2\u6570\u4f1a\u663e\u793a\u5728url\u540e\u9762?id=\uff1f"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"this.$router.push({\n          path: '/describe',\n          query: {\n            id: id\n          }\n})\n\n// \u5bf9\u5e94\u8def\u7531\u914d\u7f6e\uff1a\n{\n  path: '/describe',\n  name: 'Describe',\n  component: Describe\n}\n// \u8bfb\u53d6\uff1a\nthis.$route.query.id\n")))}m.isMDXComponent=!0}}]);