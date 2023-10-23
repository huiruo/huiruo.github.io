"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.createContext({}),v=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=v(e.components);return r.createElement(f.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=v(n),c=i,m=p["".concat(f,".").concat(c)]||p[c]||s[c]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var f in t)hasOwnProperty.call(t,f)&&(a[f]=t[f]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var v=2;v<o;v++)l[v]=n[v];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>v});var r=n(87462),i=(n(67294),n(3905));const o={title:"\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",sidebar_position:12},l=void 0,a={unversionedId:"Vue/\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",id:"Vue/\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",title:"\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",description:"vue3:v-if \u6bd4 v-for \u7684\u4f18\u5148\u7ea7\u66f4\u9ad8",source:"@site/programming-tech/Vue/\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8.md",sourceDirName:"Vue",slug:"/Vue/\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",permalink:"/Vue/\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u95ee\u9898-v-if\u548cv-for-\u524d\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8",sidebar_position:12},sidebar:"docs",previous:{title:"Reflect\u7528\u6cd5",permalink:"/Vue/Reflect"},next:{title:"api-computed-watch\u533a\u522b",permalink:"/Vue/api-computed-watch\u533a\u522b"}},f={},v=[{value:"vue3:v-if \u6bd4 v-for \u7684\u4f18\u5148\u7ea7\u66f4\u9ad8",id:"vue3v-if-\u6bd4-v-for-\u7684\u4f18\u5148\u7ea7\u66f4\u9ad8",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"vue2\u4e2d:v-for\u6bd4v-if\u4f18\u5148\uff0c\u5373\u6bcf\u4e00\u6b21\u90fd\u9700\u8981\u904d\u5386\u6574\u4e2a\u6570\u7ec4\uff0c\u5f71\u54cd\u901f\u5ea6:",id:"vue2\u4e2dv-for\u6bd4v-if\u4f18\u5148\u5373\u6bcf\u4e00\u6b21\u90fd\u9700\u8981\u904d\u5386\u6574\u4e2a\u6570\u7ec4\u5f71\u54cd\u901f\u5ea6",level:2},{value:"\u7b2c\u4e00\u79cd\uff1a\u89e3\u51b3\u65b9\u6848\uff1a\u5982\u679c v-if \u548c v-for \u53ea\u80fd\u653e\u5728\u540c\u4e00\u7ea7\u6807\u7b7e\u4e2d\uff0c\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u8fdb\u884c\u6539\u9020\uff1a",id:"\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u5982\u679c-v-if-\u548c-v-for-\u53ea\u80fd\u653e\u5728\u540c\u4e00\u7ea7\u6807\u7b7e\u4e2d\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u8fdb\u884c\u6539\u9020",level:3},{value:"\u7b2c\u4e8c\u79cd\uff1a",id:"\u7b2c\u4e8c\u79cd",level:3},{value:"\u5173\u4e8e\u8d4b\u503c",id:"\u5173\u4e8e\u8d4b\u503c",level:2}],u={toc:v},p="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"vue3v-if-\u6bd4-v-for-\u7684\u4f18\u5148\u7ea7\u66f4\u9ad8"},"vue3:v-if \u6bd4 v-for \u7684\u4f18\u5148\u7ea7\u66f4\u9ad8"),(0,i.kt)("p",null,"\u5f53\u5b83\u4eec\u540c\u65f6\u5b58\u5728\u4e8e\u4e00\u4e2a\u8282\u70b9\u4e0a\u65f6\uff0cv-if \u6bd4 v-for \u7684\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\u8fd9\u610f\u5473\u7740 v-if \u7684\u6761\u4ef6\u5c06\u65e0\u6cd5\u8bbf\u95ee\u5230 v-for \u4f5c\u7528\u57df\u5185\u5b9a\u4e49\u7684\u53d8\u91cf\u522b\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n \u8fd9\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u56e0\u4e3a\u5c5e\u6027 todo \u6b64\u65f6\n \u6ca1\u6709\u5728\u8be5\u5b9e\u4f8b\u4e0a\u5b9a\u4e49\n--\x3e\n<li v-for="todo in todos" v-if="!todo.isComplete">\n  {{ todo.name }}\n</li>\n')),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5728\u5916\u65b0\u5305\u88c5\u4e00\u5c42",(0,i.kt)("inlineCode",{parentName:"p"},"<template>"),"\u518d\u5728\u5176\u4e0a\u4f7f\u7528 v-for \u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898 (\u8fd9\u4e5f\u66f4\u52a0\u660e\u663e\u6613\u8bfb)\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<template v-for="todo in todos">\n  <li v-if="!todo.isComplete">\n    {{ todo.name }}\n  </li>\n</template>\n')),(0,i.kt)("h2",{id:"vue2\u4e2dv-for\u6bd4v-if\u4f18\u5148\u5373\u6bcf\u4e00\u6b21\u90fd\u9700\u8981\u904d\u5386\u6574\u4e2a\u6570\u7ec4\u5f71\u54cd\u901f\u5ea6"},"vue2\u4e2d:v-for\u6bd4v-if\u4f18\u5148\uff0c\u5373\u6bcf\u4e00\u6b21\u90fd\u9700\u8981\u904d\u5386\u6574\u4e2a\u6570\u7ec4\uff0c\u5f71\u54cd\u901f\u5ea6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div\n  v-for="(fileMsg,index) in fileMsgList"\n  :key="fileMsg.id"\n  v-if="index < 2"\n>\n  <sys-file-layout :fileMsg="fileMsg"></sys-file-layout>\n</div>\n')),(0,i.kt)("p",null,"\u60f3\u8981\u5faa\u73af\u751f\u6210\u4e00\u7cfb\u5217\u7ec4\u4ef6\u5757\uff0c\u4f46\u662f\u4e0d\u5e0c\u671b\u751f\u6210\u5e8f\u53f71\u4e4b\u540e\u7684\u5185\u5bb9\uff0c\u540c\u65f6\u7528\u4e86v-if\u548cv-for\uff0c\u90a3\u4e48\uff0c\u8fd8\u662f\u4f1a\u6839\u636e\u6574\u4e2a\u6570\u7ec4\u751f\u6210\u6240\u6709\u7ec4\u4ef6\u5757\uff0c\u4e4b\u540e\u624d\u5224\u65adv-if\u8ba9\u591a\u4f59\u7684\u5c0f\u65f6\uff0c\u975e\u5e38\u8017\u8d44\u6e90\u3002"),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u5982\u679c-v-if-\u548c-v-for-\u53ea\u80fd\u653e\u5728\u540c\u4e00\u7ea7\u6807\u7b7e\u4e2d\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u8fdb\u884c\u6539\u9020"},"\u7b2c\u4e00\u79cd\uff1a\u89e3\u51b3\u65b9\u6848\uff1a\u5982\u679c v-if \u548c v-for \u53ea\u80fd\u653e\u5728\u540c\u4e00\u7ea7\u6807\u7b7e\u4e2d\uff0c\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u8fdb\u884c\u6539\u9020\uff1a"),(0,i.kt)("p",null,"1\u3001\u5fc5\u8981\u60c5\u51b5\u4e0b\u5e94\u8be5\u66ff\u6362\u6210computed\u5c5e\u6027:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'computed: {\n  fileMsgListCom() {\n    return this.fileMsgList.filter((item, index) => {\n      return item < 2;\n    });\n  }\n} \n\n<div                                                                  \n  class="file_name"                                     \n  v-for="(fileMsg,index) in fileMsgListCom"             \n  :key="fileMsg.id"                                          \n>                                                       \n  <sys-file-layout :fileMsg="fileMsg"></sys-file-layout>\n</div> \n')),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u79cd"},"\u7b2c\u4e8c\u79cd\uff1a"),(0,i.kt)("p",null,"\u6839\u636e eslint \u6307\u51fa\u7684\u65b9\u6cd5\u8fdb\u884c\u6539\u8fdb\uff1a\n\u5c06 v-if \u548c v-for \u5206\u522b\u653e\u5728\u4e0d\u540c\u6807\u7b7e\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vue"},'<ul v-if="active">\n    <li v-for="item in list" :key="item.id">\n        {{ item.title }}\n    </li>\n</ul>\n')),(0,i.kt)("h2",{id:"\u5173\u4e8e\u8d4b\u503c"},"\u5173\u4e8e\u8d4b\u503c"),(0,i.kt)("p",null,"vue2 \u4e0b\uff0cthis \u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u4e2a\u5927\u5bf9\u8c61\uff0c\u6240\u4ee5\u600e\u4e48\u4fee\u6539\u503c\u90fd\u4e0d\u4f1a\u5207\u65ad\u5f15\u7528\uff0c\u4fdd\u6301\u54cd\u5e94\u6027\u3002\nvue3 \u8d4b\u503c\u8981\u4fdd\u6301\u54cd\u5e94\uff0c\u5c31\u4e0d\u8981\u6539\u53d8\u5f15\u7528\uff0c\u5426\u5219\u65e0\u6cd5\u88ab proxy \u76d1\u542c"))}s.isMDXComponent=!0}}]);