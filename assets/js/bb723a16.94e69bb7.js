"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9344],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||c;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79477:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const c={},a=void 0,i={unversionedId:"docker/docker\u5b9e\u6218",id:"docker/docker\u5b9e\u6218",title:"docker\u5b9e\u6218",description:"",source:"@site/programming-tech/docker/04-docker\u5b9e\u6218.md",sourceDirName:"docker",slug:"/docker/docker\u5b9e\u6218",permalink:"/docker/docker\u5b9e\u6218",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/docker/04-docker\u5b9e\u6218.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{}},p={},l=[],u={toc:l},s="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  web git:(main) \u2717 docker ps\nCONTAINER ID   IMAGE                COMMAND                   CREATED              STATUS              PORTS      NAMES\ne4edc18a2b87   node-client:latest   "docker-entrypoint.s\u2026"   About a minute ago   Up About a minute   3008/tcp   competent_elion\n\n\ndocker cp ./package.json competent_elion:/usr/share\n\ndocker cp ./project.tt.json competent_elion:/usr/share\n')))}m.isMDXComponent=!0}}]);