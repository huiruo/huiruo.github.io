"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2989],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},g),{},{components:t})):r.createElement(f,i({ref:n},g))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,c={unversionedId:"backend/golang/golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1",id:"backend/golang/golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1",title:"golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1",description:"\u8fd0\u884c\u670d\u52a1\uff1a",source:"@site/programming-tech/backend/golang/01-golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1.md",sourceDirName:"backend/golang",slug:"/backend/golang/golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1",permalink:"/backend/golang/golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/backend/golang/01-golang\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684http\u670d\u52a1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"\u8fdb\u7a0b-\u7ebf\u7a0b-\u534f\u7a0b",permalink:"/backend/\u8fdb\u7a0b-\u7ebf\u7a0b-\u534f\u7a0b"},next:{title:"03-1-function",permalink:"/backend/golang/03-1-function"}},l={},p=[],g={toc:p},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n \nimport (\n    "fmt"\n    "log"\n    "net/http"\n)\n \n// w\u8868\u793aresponse\u5bf9\u8c61\uff0c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u5185\u5bb9\u90fd\u5728\u5bf9\u8c61\u91cc\u5904\u7406\n// r\u8868\u793a\u5ba2\u6237\u7aef\u8bf7\u6c42\u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u8bf7\u6c42\u5934\uff0c\u8bf7\u6c42\u53c2\u6570\u7b49\u7b49\nfunc index(w http.ResponseWriter, r *http.Request) {\n    // \u5f80w\u91cc\u5199\u5165\u5185\u5bb9\uff0c\u5c31\u4f1a\u5728\u6d4f\u89c8\u5668\u91cc\u8f93\u51fa\n    fmt.Fprintf(w, "Hello golang http!")\n}\n \nfunc main() {\n    // \u8bbe\u7f6e\u8def\u7531\uff0c\u5982\u679c\u8bbf\u95ee/\uff0c\u5219\u8c03\u7528index\u65b9\u6cd5\n    http.HandleFunc("/", index)\n \n    // \u542f\u52a8web\u670d\u52a1\uff0c\u76d1\u542c9090\u7aef\u53e3\n    err := http.ListenAndServe(":9090", nil)\n    if err != nil {\n        log.Fatal("ListenAndServe: ", err)\n    }\n}\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go run main.go\n")))}s.isMDXComponent=!0}}]);