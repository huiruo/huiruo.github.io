"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,v=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"JavaScript/ts/react\u4e2d\u7684ts",id:"JavaScript/ts/react\u4e2d\u7684ts",title:"react\u4e2d\u7684ts",description:"event ts\u8b66\u544a",source:"@site/programming-tech/JavaScript/06-ts/26-react\u4e2d\u7684ts.md",sourceDirName:"JavaScript/06-ts",slug:"/JavaScript/ts/react\u4e2d\u7684ts",permalink:"/JavaScript/ts/react\u4e2d\u7684ts",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/JavaScript/06-ts/26-react\u4e2d\u7684ts.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{},sidebar:"docs",previous:{title:"\u6cdb\u578b\u53c2\u6570",permalink:"/JavaScript/ts/\u6cdb\u578b\u53c2\u6570"},next:{title:"\u6570\u636e\u7c7b\u578b-\u7c7b\u578b\u8f6c\u6362",permalink:"/JavaScript/\u6570\u636e\u7c7b\u578b-\u7c7b\u578b\u8f6c\u6362"}},p={},s=[{value:"event ts\u8b66\u544a",id:"event-ts\u8b66\u544a",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-ts\u8b66\u544a"},"event ts\u8b66\u544a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function ChildComponent(props: any) {\n  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {\n    event.stopPropagation?.();\n    // \u5904\u7406\u70b9\u51fb\u4e8b\u4ef6\n  }\n\n  return (\n    <div onClick={handleClick}>\n      \u5b50\u7ec4\u4ef6\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0}}]);