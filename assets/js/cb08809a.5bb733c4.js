"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,h=s["".concat(i,".").concat(f)]||s[f]||d[f]||c;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const c={},o=void 0,p={unversionedId:"backend/Apache/Apache",id:"backend/Apache/Apache",title:"Apache",description:"config:",source:"@site/programming-tech/backend/Apache/Apache.md",sourceDirName:"backend/Apache",slug:"/backend/Apache/",permalink:"/backend/Apache/",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/backend/Apache/Apache.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"redis",permalink:"/backend/redis"},next:{title:"03-1-function",permalink:"/backend/golang/03-1-function"}},i={},l=[{value:"config:",id:"config",level:3},{value:"\u7f51\u7ad9",id:"\u7f51\u7ad9",level:3}],u={toc:l},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8fd0\u884c:\ncd D:\\Apache24\\bin\nhttpd.exe\n\nlocalhost:8089\n")),(0,a.kt)("h3",{id:"config"},"config:"),(0,a.kt)("p",null,"D:\\Apache24\\conf\\httpd.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},'# Define SRVROOT "c:/Apache24"\nDefine SRVROOT "D:/Apache24"\n\nServerRoot "${SRVROOT}"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5Apache\u670d\u52a1\uff1a\uff08\u8981\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u6253\u5f00dos\u7a97\u53e3\uff09\nhttpd -k install -n Apache24\n\n\u5173\u95ed\u548c\u505c\u6b62\uff1a\nhttpd -k stop -n Apache24\nhttpd -k start -n Apache24\n\n\n\u91cd\u542f\u548c\u5378\u8f7dhttp\u7684\u547d\u4ee4\nhttpd -k restart -n Apache24\nhttpd -k uninstall -n Apache24\n\u6ce8\u610f\uff1a\u5378\u8f7d\u65f6\u8981\u5148\u5173\u95ed\u670d\u52a1\uff0c\u518d\u5378\u8f7d\u3002\u5426\u5219\u670d\u52a1\u53ef\u80fd\u4f9d\u7136\u5728\u8fd0\u884c\uff0c\u53ea\u662f\u72b6\u6001\u8bbe\u4e3a\u4e86\u201c\u7981\u7528\u201d\n")),(0,a.kt)("h3",{id:"\u7f51\u7ad9"},"\u7f51\u7ad9"),(0,a.kt)("p",null,"\u5728 D:\\Apache24\\htdocs"))}d.isMDXComponent=!0}}]);