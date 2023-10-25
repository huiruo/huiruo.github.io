"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4115],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"\u5355\u4f8b\u6a21\u5f0f",sidebar_position:2},i=void 0,s={unversionedId:"design-patterns/\u5355\u4f8b\u6a21\u5f0f",id:"design-patterns/\u5355\u4f8b\u6a21\u5f0f",title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u5355\u4f8b\u6a21\u5f0f",source:"@site/programming-tech/design-patterns/01-\u5355\u4f8b\u6a21\u5f0f.md",sourceDirName:"design-patterns",slug:"/design-patterns/\u5355\u4f8b\u6a21\u5f0f",permalink:"/design-patterns/\u5355\u4f8b\u6a21\u5f0f",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/design-patterns/01-\u5355\u4f8b\u6a21\u5f0f.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5355\u4f8b\u6a21\u5f0f",sidebar_position:2},sidebar:"docs",previous:{title:"README",permalink:"/design-patterns/"},next:{title:"\u4ee3\u7406\u6a21\u5f0f",permalink:"/design-patterns/\u4ee3\u7406\u6a21\u5f0f"}},l={},c=[{value:"\u5355\u4f8b\u6a21\u5f0f",id:"\u5355\u4f8b\u6a21\u5f0f",level:2},{value:"\u5e94\u7528\uff1a",id:"\u5e94\u7528",level:2},{value:"JavaScript\u4e2d\uff0c\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u6765\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f,\u4f46\u662f\u5168\u5c40\u53d8\u91cf\u5e26\u6765\u547d\u540d\u6c61\u67d3\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a",id:"javascript\u4e2d\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u6765\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f\u4f46\u662f\u5168\u5c40\u53d8\u91cf\u5e26\u6765\u547d\u540d\u6c61\u67d3\u7684\u95ee\u9898\u89e3\u51b3\u65b9\u6848\u5982\u4e0b",level:2},{value:"1.\u4f7f\u7528\u547d\u540d\u7a7a\u95f4",id:"1\u4f7f\u7528\u547d\u540d\u7a7a\u95f4",level:3},{value:"2.\u4f7f\u7528\u95ed\u5305\u5c01\u88c5\u79c1\u6709\u53d8\u91cf",id:"2\u4f7f\u7528\u95ed\u5305\u5c01\u88c5\u79c1\u6709\u53d8\u91cf",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5355\u4f8b\u6a21\u5f0f"},"\u5355\u4f8b\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5355\u4f8b\u6a21\u5f0f\u7684\u5b9a\u4e49\uff1a\u4fdd\u8bc1\u4e00\u4e2a\u7c7b\u4ec5\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u8bbf\u95ee\u5b83\u7684\u5168\u5c40\u8bbf\u95ee\u70b9"),(0,a.kt)("p",null,"\u5355\u4f8b\u6a21\u5f0f\u5373\u4e00\u4e2a\u7c7b\u53ea\u80fd\u6784\u9020\u51fa\u552f\u4e00\u5b9e\u4f8b\uff0c\u5355\u4f8b\u6a21\u5f0f\u7684\u610f\u4e49\u5728\u4e8e\u5171\u4eab\u3001\u552f\u4e00\uff0cRedux/Vuex\u4e2d\u7684store\u3001jQuery\u7684$\u6216\u8005\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u8d2d\u7269\u8f66\u3001\u767b\u5f55\u6846\u90fd\u662f\u5355\u4f8b\u6a21\u5f0f\u7684\u5e94\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class SingletonLogin {\n  constructor(name, password) {\n    this.name = name\n    this.password = password\n  }\n  static getInstance(name, password) {\n    //\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u88ab\u521b\u5efa,\u82e5\u521b\u5efa\u5219\u8fd4\u56de\u65e7\u5bf9\u8c61\n    if (!this.instance) this.instance = new SingletonLogin(name, password)\n    return this.instance\n  }\n}\nlet obj1 = SingletonLogin.getInstance('CXK', '123')\nlet obj2 = SingletonLogin.getInstance('CXK', '321')\nconsole.log(obj1 === obj2)    // true\nconsole.log(obj1)           // {name:CXK,password:123}\nconsole.log(obj2)           // \u8f93\u51fa\u7684\u4f9d\u7136\u662f{ name:CXK,password: 123}\n")),(0,a.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e2d\u7684window\u5bf9\u8c61\u7b49")),(0,a.kt)("h2",{id:"javascript\u4e2d\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u6765\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f\u4f46\u662f\u5168\u5c40\u53d8\u91cf\u5e26\u6765\u547d\u540d\u6c61\u67d3\u7684\u95ee\u9898\u89e3\u51b3\u65b9\u6848\u5982\u4e0b"},"JavaScript\u4e2d\uff0c\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u6765\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f,\u4f46\u662f\u5168\u5c40\u53d8\u91cf\u5e26\u6765\u547d\u540d\u6c61\u67d3\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u6848\u5982\u4e0b\uff1a"),(0,a.kt)("h3",{id:"1\u4f7f\u7528\u547d\u540d\u7a7a\u95f4"},"1.\u4f7f\u7528\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var namespace1 = {\n  a: function () {\n    alert(1);\n  },\n  b: function () {\n    alert(2);\n  }\n}\n")),(0,a.kt)("h3",{id:"2\u4f7f\u7528\u95ed\u5305\u5c01\u88c5\u79c1\u6709\u53d8\u91cf"},"2.\u4f7f\u7528\u95ed\u5305\u5c01\u88c5\u79c1\u6709\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var user = (function () {\n  var _name = 'sven', _age = 29;\n  return {\n    getUserInfo: function () {\n      return _name + '-' + '_age';\n    }\n  }\n})\n")))}m.isMDXComponent=!0}}]);