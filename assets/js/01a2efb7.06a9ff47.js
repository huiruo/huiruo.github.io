"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(r),g=o,m=s["".concat(p,".").concat(g)]||s[g]||f[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},55357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,u={unversionedId:"Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-\u914d\u7f6e\u8de8\u57df",id:"Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-\u914d\u7f6e\u8de8\u57df",title:"\u4f8b-\u914d\u7f6e\u8de8\u57df",description:"//\u8bf7\u6c42",source:"@site/programming-tech/Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-\u914d\u7f6e\u8de8\u57df.md",sourceDirName:"Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50",slug:"/Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-\u914d\u7f6e\u8de8\u57df",permalink:"/Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-\u914d\u7f6e\u8de8\u57df",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-\u914d\u7f6e\u8de8\u57df.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u4f8b-2021-04-vue\u4e8b\u4ef6\u4f20\u53c2",permalink:"/Vue/vue2/vue2\u5f00\u53d1\u4f8b\u5b50/\u4f8b-2021-04-vue\u4e8b\u4ef6\u4f20\u53c2"},next:{title:"keys-hasOwnProperty-defineProperty-forin",permalink:"/JavaScript/keys-hasOwnProperty-defineProperty-forin"}},p={},l=[],c={toc:l},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u914d\u7f6e\nproxyTable: {\n  '/api':{\n    target:'http://192.168.191.1:8184', ////go\u63a5\u53e3 \u63a5\u53e3\u7684\u57df\u540d\u5fc5\u987b\u80fd\u8bbf\u95ee,\u5426\u5219\n    changeOrigin: true,// \u5982\u679c\u63a5\u53e3\u8de8\u57df\uff0c\u9700\u8981\u8fdb\u884c\u8fd9\u4e2a\u53c2\u6570\u914d\u7f6e\n    pathRewrite:{\n      '^/api': ''   // axios\u63a5\u53e3   url:\"/api/org/gongsi/findAllJiaFang\", \u6d4f\u89c8\u5668\u63a5\u53e3\uff1a http://192.168.191.1:8184/org/gongsi/findAllJiaFang\n    }\n  }\n},\n")),(0,o.kt)("p",null,"//\u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"mounted(){ \n    var aid=this.$route.params;\n    console.log(\"id:\",aid.aid)\n    this.$http.get('/list/api_detail/detail?key=' +aid.aid).then(function (response) {\n      // this.list=response.body\n      console.log(response)\n      this.result=response.data;\n      console.log(this.data)\n    },function (err) {\n      console.log(err)\n    })\n},\n")))}f.isMDXComponent=!0}}]);