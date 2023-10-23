"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7712],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=c(t),m=o,f=y["".concat(i,".").concat(m)]||y[m]||s[m]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[y]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98923:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"proxy",sidebar_position:5},l=void 0,p={unversionedId:"Vue/proxy",id:"Vue/proxy",title:"proxy",description:"ES6\u7279\u6027:Proxy",source:"@site/programming-tech/Vue/04-proxy.md",sourceDirName:"Vue",slug:"/Vue/proxy",permalink:"/Vue/proxy",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/04-proxy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"proxy",sidebar_position:5},sidebar:"docs",previous:{title:"v-for\u7684key",permalink:"/Vue/v-for\u7684key"},next:{title:"proxy-defineProperty\u533a\u522b",permalink:"/Vue/proxy-defineProperty\u533a\u522b"}},i={},c=[{value:"ES6\u7279\u6027:Proxy",id:"es6\u7279\u6027proxy",level:2},{value:"Proxy \u5bf9\u8c61\u80fd\u591f\u5229\u7528 handler \u9677\u9631\u5728 get\u3001set \u65f6\u6355\u83b7\u5230\u4efb\u4f55\u53d8\u52a8\uff0c\u4e5f\u80fd\u76d1\u542c\u5bf9\u6570\u7ec4\u7d22\u5f15\u7684\u6539\u52a8\u4ee5\u53ca \u6570\u7ec4 length \u7684\u6539\u52a8",id:"proxy-\u5bf9\u8c61\u80fd\u591f\u5229\u7528-handler-\u9677\u9631\u5728-getset-\u65f6\u6355\u83b7\u5230\u4efb\u4f55\u53d8\u52a8\u4e5f\u80fd\u76d1\u542c\u5bf9\u6570\u7ec4\u7d22\u5f15\u7684\u6539\u52a8\u4ee5\u53ca-\u6570\u7ec4-length-\u7684\u6539\u52a8",level:2}],u={toc:c},y="wrapper";function s(e){let{components:r,...t}=e;return(0,o.kt)(y,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"es6\u7279\u6027proxy"},"ES6\u7279\u6027:Proxy"),(0,o.kt)("p",null,"Proxy \u5bf9\u8c61\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7684\u4ee3\u7406\uff0c\u4ece\u800c\u5b9e\u73b0\u57fa\u672c\u64cd\u4f5c\u7684\u62e6\u622a\u548c\u81ea\u5b9a\u4e49\uff08\u5982\u5c5e\u6027\u67e5\u627e\u3001\u8d4b\u503c\u3001\u679a\u4e3e\u3001\u51fd\u6570\u8c03\u7528\u7b49\uff09\u3002"),(0,o.kt)("p",null,"\u8bed\u6cd5\uff1atarget: \u8981\u4f7f\u7528 Proxy \u5305\u88c5\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u539f\u751f\u6570\u7ec4\uff0c\u51fd\u6570\uff0c\u751a\u81f3\u53e6\u4e00\u4e2a\u4ee3\u7406\uff09\u3002\nhandler: \u4e00\u4e2a\u901a\u5e38\u4ee5\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u5bf9\u8c61"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u533a\u522b1:proxy \u5bf9\u6574\u4e2a\u5bf9\u8c61\u8fdb\u884c\u76d1\u542c\u7684\u65b9\u5f0f\u6bd4defineProperty\u662f\u5faa\u73af\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u76d1\u542c\u6027\u80fd\u597d")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"proxy\u53bb\u4ee3\u7406\u4e86ob\u4e0d\u4f1a\u6c61\u67d3\u539f\u5bf9\u8c61\uff08\u5173\u952e\u533a\u522b\uff09,\u4ed6\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4ee3\u7406\u5bf9\u8c61\u4e0d\u4f1a\u5bf9\u539f\u5bf9\u8c61ob\u8fdb\u884c\u6539\u52a8")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"proxy \u53ef\u4ee5\u76d1\u542c\u5bf9\u8c61\u65b0\u589e\u5c5e\u6027\uff0cdefineProperty\u4e0d\u53ef\u4ee5")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"proxy \u53ef\u4ee5\u4e14\u4e0d\u9700\u8981\u5bf9\u6570\u7ec4\u7684\u65b9\u6cd5\u8fdb\u884c\u91cd\u8f7d,defineProperty \u4e0d\u80fd\u76d1\u542c\u6570\u7ec4\u4e0b\u6807\u6539\u53d8\u503c\u7684\u53d8\u5316\uff0c"))),(0,o.kt)("p",null,"\u5e38\u7528\u4f5c\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u4f7f\u7528 Proxy \u7684\u6838\u5fc3\u4f18\u70b9\u662f\u53ef\u4ee5\u4ea4\u7531\u5b83\u6765\u5904\u7406\u4e00\u4e9b\u975e\u6838\u5fc3\u903b\u8f91\uff08\u5982\uff1a\u8bfb\u53d6\u6216\u8bbe\u7f6e\u5bf9\u8c61\u7684\u67d0\u4e9b\u5c5e\u6027\u524d\u8bb0\u5f55\u65e5\u5fd7\uff1b\u8bbe\u7f6e\u5bf9\u8c61\u7684\u67d0\u4e9b\u5c5e\u6027\u503c\u524d\uff0c\u9700\u8981\u9a8c\u8bc1\uff1b\u67d0\u4e9b\u5c5e\u6027\u7684\u8bbf\u95ee\u63a7\u5236\u7b49\uff09\u3002\u4ece\u800c\u53ef\u4ee5\u8ba9\u5bf9\u8c61\u53ea\u9700\u5173\u6ce8\u4e8e\u6838\u5fc3\u903b\u8f91\uff0c\u8fbe\u5230\u5173\u6ce8\u70b9\u5206\u79bb\uff0c\u964d\u4f4e\u5bf9\u8c61\u590d\u6742\u5ea6\u7b49\u76ee\u7684\u3002\n\n\u5176\u5b9e\u5c31\u662f\u5728\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u64cd\u4f5c\u4e4b\u524d\u63d0\u4f9b\u4e86\u62e6\u622a\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u64cd\u4f5c\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199\uff0c\u4fee\u6539\u67d0\u4e9b\u64cd\u4f5c\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u4e0d\u76f4\u63a5\u64cd\u4f5c\u5bf9\u8c61\u672c\u8eab\uff0c\u800c\u662f\u901a\u8fc7\u64cd\u4f5c\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\u6765\u95f4\u63a5\u6765\u64cd\u4f5c\u5bf9\u8c61\uff0c\u8fbe\u5230\u9884\u671f\u7684\u76ee\u7684\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let obj = { name: 'iphone', price: 99 }\n\nlet proxyObj = new Proxy(obj, {\n  get: function (target, key) {\n    console.log('get\u89e6\u53d1',{target, key})\n    // \u5bf9\u8c61\u4e2d\u4e0d\u5b58\u5728\u5c5e\u6027\u540d\u65f6\u8fd4\u56de0\n    return key in target ? target[key] : 0\n  },\n  // \u901a\u8fc7\u4ee3\u7406\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u9a8c\u8bc1\u5411\u4e00\u4e2a\u5bf9\u8c61\u7684\u4f20\u503c\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u501f\u6b64\u5c55\u793a\u4e86 set handler \u7684\u4f5c\u7528\u3002\n  set: function (target, key, value) {\n    console.log('\u89e6\u53d1set:', { target, key, value })\n    if (key === 'price') {\n      if (value > 100) {\n        console.log(\"\u62a5\u4ef7\u8fc7\u9ad8\")\n        return true\n      }\n    }\n\n    // obj[prop] = value;\n    // return false; // \u5fc5\u987btrue \u624d\u6210\u529f\u8d4b\u503c\n    // \u7b49\u540c\u4e0b\u9762\n    return Reflect.set(target, key, value)\n  }\n})\n\nconsole.log('1:', proxyObj.name); // iphone\nconsole.log('2:', proxyObj.namex); // 0\nproxyObj.price = 666;\nconsole.log('3:', proxyObj.price) // 99\nproxyObj.price = 98;\nconsole.log('4:', proxyObj.price) // 98\n")),(0,o.kt)("p",null,"\u89e3\u6790\uff1a\n\u5f53\u6211\u4eec\u8bbf\u95ee\u5bf9\u8c61\u5185\u539f\u672c\u5b58\u5728\u7684\u5c5e\u6027\u65f6\uff0c\u4f1a\u8fd4\u56de\u539f\u6709\u5c5e\u6027\u5185\u5bf9\u5e94\u7684\u503c;\n\u5982\u679c\u8bd5\u56fe\u8bbf\u95ee\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u65f6\uff0c\u4f1a\u8fd4\u56de0 \uff0c\u5373\u6211\u4eec\u8bbf\u95ee proxyObj.a \u65f6\uff0c\u539f\u672c\u5bf9\u8c61\u4e2d\u6709 a \u5c5e\u6027\uff0c\u56e0\u6b64\u4f1a\u8fd4\u56de 1 \uff0c\n\u5f53\u6211\u4eec\u8bd5\u56fe\u8bbf\u95ee\u5bf9\u8c61\u4e2d\u4e0d\u5b58\u5728\u7684 b \u5c5e\u6027\u65f6\uff0c\u4e0d\u4f1a\u518d\u8fd4\u56de undefined \uff0c\u800c\u662f\u8fd4\u56de\u4e86 0 ;"),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u8bd5\u56fe\u53bb\u8bbe\u7f6e\u65b0\u7684\u5c5e\u6027\u503c\u7684\u65f6\u5019\uff0c\u603b\u662f\u4f1a\u8fd4\u56de 888\uff0c\u56e0\u6b64\uff0c\u5373\u4fbf\u6211\u4eec\u5bf9 proxyObj.a \u8d4b\u503c\u4e3a 666 \uff0c\u4f46\u662f\u5e76\u4e0d\u4f1a\u751f\u6548\uff0c\u4f9d\u65e7\u4f1a\u8fd4\u56de 888"),(0,o.kt)("h2",{id:"proxy-\u5bf9\u8c61\u80fd\u591f\u5229\u7528-handler-\u9677\u9631\u5728-getset-\u65f6\u6355\u83b7\u5230\u4efb\u4f55\u53d8\u52a8\u4e5f\u80fd\u76d1\u542c\u5bf9\u6570\u7ec4\u7d22\u5f15\u7684\u6539\u52a8\u4ee5\u53ca-\u6570\u7ec4-length-\u7684\u6539\u52a8"},"Proxy \u5bf9\u8c61\u80fd\u591f\u5229\u7528 handler \u9677\u9631\u5728 get\u3001set \u65f6\u6355\u83b7\u5230\u4efb\u4f55\u53d8\u52a8\uff0c\u4e5f\u80fd\u76d1\u542c\u5bf9\u6570\u7ec4\u7d22\u5f15\u7684\u6539\u52a8\u4ee5\u53ca \u6570\u7ec4 length \u7684\u6539\u52a8"))}s.isMDXComponent=!0}}]);