"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2584],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),g=o,m=s["".concat(c,".").concat(g)]||s[g]||d[g]||l;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},12925:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const l={},a=void 0,i={unversionedId:"backend/golang/\u534f\u7a0b/helloworld",id:"backend/golang/\u534f\u7a0b/helloworld",title:"helloworld",description:"hello world",source:"@site/programming-tech/backend/08-golang/01-\u534f\u7a0b/01-helloworld.md",sourceDirName:"backend/08-golang/01-\u534f\u7a0b",slug:"/backend/golang/\u534f\u7a0b/helloworld",permalink:"/backend/golang/\u534f\u7a0b/helloworld",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/backend/08-golang/01-\u534f\u7a0b/01-helloworld.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/backend/golang/\u7c7b\u578b\u8f6c\u6362"},next:{title:"\u6307\u9488",permalink:"/backend/golang/\u6307\u9488"}},c={},p=[{value:"hello world",id:"hello-world",level:2}],u={toc:p},s="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(s,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hello-world"},"hello world"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\n    fmt.Println("init====>")\n    // \u534f\u7a0btest\n    fmt.Println("\u5f00\u542f\u534f\u7a0b\uff1a")\n    go say("world")\n    say("hello")\n}\n\nfunc say(s string) {\n    fmt.Println("\u6267\u884c")\n    for i := 0; i < 5; i++ {\n        time.Sleep(10)\n        fmt.Println(s)\n    }\n}\n')))}d.isMDXComponent=!0}}]);