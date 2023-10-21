"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},i),{},{components:n})):a.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"React\u4f18\u5316",sidebar_position:1},o=void 0,p={unversionedId:"\u4f18\u5316/React",id:"\u4f18\u5316/React",title:"React\u4f18\u5316",description:"React \u7ec4\u4ef6\u6027\u80fd\u4f18\u5316\u7684\u6838\u5fc3\u662f\u51cf\u5c11\u6e32\u67d3\u771f\u5b9e DOM \u8282\u70b9\u7684\u9891\u7387\uff0c\u51cf\u5c11 Virtual DOM \u6bd4\u5bf9\u7684\u9891\u7387\u3002",source:"@site/programming-tech/\u4f18\u5316/01-React.md",sourceDirName:"\u4f18\u5316",slug:"/\u4f18\u5316/React",permalink:"/\u4f18\u5316/React",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/\u4f18\u5316/01-React.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"React\u4f18\u5316",sidebar_position:1},sidebar:"docs",previous:{title:"TypeORM\u548cPrisma",permalink:"/ssr\u670d\u52a1\u7aef\u6e32\u67d3-nodejs/TypeORM\u548cPrisma"},next:{title:"Vue\u4f18\u5316",permalink:"/\u4f18\u5316/Vue\u4f18\u5316"}},c={},u=[{value:"\u4f18\u5316\u65b9\u5f0f",id:"\u4f18\u5316\u65b9\u5f0f",level:2},{value:"\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c\u4e86\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97\uff0c\u53ef\u4ee5\u4f7f\u7528 <code>useMemo</code> \u6765\u8fdb\u884c\u4f18\u5316",id:"\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c\u4e86\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97\u53ef\u4ee5\u4f7f\u7528-usememo-\u6765\u8fdb\u884c\u4f18\u5316",level:3},{value:"\u51cf\u5c11\u5d4c\u5957\u8282\u70b9/\u7ec4\u4ef6",id:"\u51cf\u5c11\u5d4c\u5957\u8282\u70b9\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u53ef\u4ee5\u51cf\u5c11bundle\u6587\u4ef6\u5927\u5c0f",id:"\u4f7f\u7528\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u53ef\u4ee5\u51cf\u5c11bundle\u6587\u4ef6\u5927\u5c0f",level:2},{value:"\u6839\u636e\u6761\u4ef6\u8fdb\u884c\u7ec4\u4ef6\u61d2\u52a0\u8f7d",id:"\u6839\u636e\u6761\u4ef6\u8fdb\u884c\u7ec4\u4ef6\u61d2\u52a0\u8f7d",level:3},{value:"react\u4f18\u5316\u4e4b\u5176\u4ed6: \u907f\u514d\u4f7f\u7528\u5185\u8054\u6837\u5f0f\u5c5e\u6027",id:"react\u4f18\u5316\u4e4b\u5176\u4ed6-\u907f\u514d\u4f7f\u7528\u5185\u8054\u6837\u5f0f\u5c5e\u6027",level:2},{value:"\u4f7f\u7528 Fragment \u907f\u514d\u989d\u5916\u6807\u8bb0",id:"\u4f7f\u7528-fragment-\u907f\u514d\u989d\u5916\u6807\u8bb0",level:2},{value:"react\u4f18\u5316\u4e4b\u4e3a\u5217\u8868\u6570\u636e\u6dfb\u52a0\u552f\u4e00\u6807\u8bc6",id:"react\u4f18\u5316\u4e4b\u4e3a\u5217\u8868\u6570\u636e\u6dfb\u52a0\u552f\u4e00\u6807\u8bc6",level:2},{value:"react\u4f18\u5316\u4e4b\u5176\u4ed6\uff1a\u5378\u8f7d\u7ec4\u4ef6\u524d\u8fdb\u884c\u6e05\u7406\u64cd\u4f5c",id:"react\u4f18\u5316\u4e4b\u5176\u4ed6\u5378\u8f7d\u7ec4\u4ef6\u524d\u8fdb\u884c\u6e05\u7406\u64cd\u4f5c",level:2},{value:"react\u4f18\u5316. \u5728react17\u4e2d \u5728\u8bf7\u6c42\u7684async \u6216promise then\u51fd\u6570,\u4f7f\u7528unstable_batchedUpdates",id:"react\u4f18\u5316-\u5728react17\u4e2d-\u5728\u8bf7\u6c42\u7684async-\u6216promise-then\u51fd\u6570\u4f7f\u7528unstable_batchedupdates",level:2},{value:"react\u4f18\u5316\u4e4b\u6269\u5c55\uff1a\u4f7f\u7528react18 \u80fd\u589e\u5f3a\u6e32\u67d3\u6027\u80fd",id:"react\u4f18\u5316\u4e4b\u6269\u5c55\u4f7f\u7528react18-\u80fd\u589e\u5f3a\u6e32\u67d3\u6027\u80fd",level:2},{value:"react\u4f18\u5316\u4e4b2.\u4f7f\u7528 Fragment \u6807\u7b7e\u907f\u514d\u989d\u5916\u6807\u8bb0",id:"react\u4f18\u5316\u4e4b2\u4f7f\u7528-fragment-\u6807\u7b7e\u907f\u514d\u989d\u5916\u6807\u8bb0",level:2},{value:"react\u4f18\u5316\u4e4bHooks\u4f18\u5316",id:"react\u4f18\u5316\u4e4bhooks\u4f18\u5316",level:2},{value:"react\u4f18\u5316\u4e4bshouldComponentUpdate \u6216\u5219 React.memo",id:"react\u4f18\u5316\u4e4bshouldcomponentupdate-\u6216\u5219-reactmemo",level:3},{value:"react\u4f18\u5316\u4e4b\u6269\u5c55\uff1aPureComponent",id:"react\u4f18\u5316\u4e4b\u6269\u5c55purecomponent",level:2}],i={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React \u7ec4\u4ef6\u6027\u80fd\u4f18\u5316\u7684\u6838\u5fc3\u662f\u51cf\u5c11\u6e32\u67d3\u771f\u5b9e DOM \u8282\u70b9\u7684\u9891\u7387\uff0c\u51cf\u5c11 Virtual DOM \u6bd4\u5bf9\u7684\u9891\u7387\u3002"),(0,r.kt)("h2",{id:"\u4f18\u5316\u65b9\u5f0f"},"\u4f18\u5316\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c\u4e86\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97\u53ef\u4ee5\u4f7f\u7528-usememo-\u6765\u8fdb\u884c\u4f18\u5316"},"\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c\u4e86\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"useMemo")," \u6765\u8fdb\u884c\u4f18\u5316"),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"../React/api-memo%E5%92%8CshouldComponentUpdate"},"api-memo\u548cshouldComponentUpdate")),(0,r.kt)("h3",{id:"\u51cf\u5c11\u5d4c\u5957\u8282\u70b9\u7ec4\u4ef6"},"\u51cf\u5c11\u5d4c\u5957\u8282\u70b9/\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u56e0\u4e3areact \u6bcf\u4e2a\u8282\u70b9\u90fd\u4f1a\u89e6\u53d1beginWork;"),(0,r.kt)("p",null,"vue\u4e2d,\u521b\u5efa\u597dvnode,\u8c03\u7528patch\u8fdb\u884c\u7ec4\u4ef6\u5185\u5bb9\u7684\u6e32\u67d3,vnode.children\u9012\u5f52\u8c03\u7528 patch(null,child,container)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62c6\u5206\u7ec4\u4ef6:\u5f53\u89e6\u53d1\u66f4\u65b0\u7684\u65f6\u5019\u8282\u70b9\u90fd\u4f1abeginWork--\x3ecompleteWork,\u6240\u4ee5\u5c3d\u91cf\u628a\u5927\u7ec4\u4ef6\u62bd\u79bb\u6210\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u51cf\u5c11\u5d4c\u5957\u7ec4\u4ef6\uff0c\u5d4c\u5957\u8282\u70b9\u5f88\u91cd\u8981"),(0,r.kt)("li",{parentName:"ul"},"\u6216\u5219\u4f7f\u7528\u865a\u62df\u5217\u8868")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u53ef\u4ee5\u51cf\u5c11bundle\u6587\u4ef6\u5927\u5c0f"},"\u4f7f\u7528\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u53ef\u4ee5\u51cf\u5c11bundle\u6587\u4ef6\u5927\u5c0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u89c1webpack\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { lazy, Suspense } from "react"\nimport { BrowserRouter, Link, Route, Switch } from "react-router-dom"\n\nconst Home = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"))\nconst List = lazy(() => import(/* webpackChunkName: "List" */ "./List"))\n\nconst App = () => (\n  <BrowserRouter>\n    <Link to="/">Home</Link>\n    <Link to="/list">List</Link>\n\n    <Switch>\n      <Suspense fallback={ <div>Loading</div> }>\n        <Route path="/" component={ Home } exact />\n        <Route path="/list" component={ List } />\n      </Suspense>\n    </Switch>\n  </BrowserRouter>\n);\n')),(0,r.kt)("h3",{id:"\u6839\u636e\u6761\u4ef6\u8fdb\u884c\u7ec4\u4ef6\u61d2\u52a0\u8f7d"},"\u6839\u636e\u6761\u4ef6\u8fdb\u884c\u7ec4\u4ef6\u61d2\u52a0\u8f7d"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e\u7ec4\u4ef6\u4e0d\u4f1a\u968f\u6761\u4ef6\u9891\u7e41\u5207\u6362\u7684\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const App = () => {\n  let LazyComponent = null\n  if (xxx) {\n    LazyComponent = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"))\n  } else {\n    LazyComponent = lazy(() => import(/* webpackChunkName: "List" */ "./List"))\n  }\n  return (\n    <Suspense fallback={ <div>Loading</div> }>\n      <LazyComponent />\n    </Suspense>\n  )\n}\n\nexport default App\n')),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4b\u5176\u4ed6-\u907f\u514d\u4f7f\u7528\u5185\u8054\u6837\u5f0f\u5c5e\u6027"},"react\u4f18\u5316\u4e4b\u5176\u4ed6: \u907f\u514d\u4f7f\u7528\u5185\u8054\u6837\u5f0f\u5c5e\u6027"),(0,r.kt)("p",null,"\u5185\u8054 style \u4f1a\u88ab\u7f16\u8bd1\u4e3a JavaScript \u4ee3\u7801, \u901a\u8fc7 JavaScript \u4ee3\u7801\u5c06\u6837\u5f0f\u89c4\u5219\u6620\u5c04\u5230\u5143\u7d20\u7684\u8eab\u4e0a, \u6d4f\u89c8\u5668\u5c31\u4f1a\u82b1\u8d39\u66f4\u591a\u7684\u65f6\u95f4\u6267\u884c\u811a\u672c\u548c\u6e32\u67d3 UI, \u4ece\u800c\u589e\u52a0\u4e86\u7ec4\u4ef6\u7684\u6e32\u67d3\u65f6\u95f4."),(0,r.kt)("p",null,"\u5185\u8054\u6837\u5f0f\u4e3a JavaScript \u5bf9\u8c61, backgroundColor \u9700\u8981\u88ab\u8f6c\u6362\u4e3a\u7b49\u6548\u7684 CSS \u6837\u5f0f\u89c4\u5219, \u7136\u540e\u5c06\u5176\u5e94\u7528\u5230\u5143\u7d20, \u8fd9\u6837\u6d89\u53ca\u5230\u811a\u672c\u7684\u6267\u884c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return <div style={{ backgroundColor: "yellow" }}>App works</div>\n}\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528-fragment-\u907f\u514d\u989d\u5916\u6807\u8bb0"},"\u4f7f\u7528 Fragment \u907f\u514d\u989d\u5916\u6807\u8bb0"),(0,r.kt)("p",null,"React \u63a8\u51fa\u4e86 fragment \u5360\u4f4d\u7b26\u6807\u8bb0\u66ff\u4ee3\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),". \u4f7f\u7528\u5360\u4f4d\u7b26\u6807\u8bb0\u65e2\u6ee1\u8db3\u4e86\u62e5\u6709\u5171\u540c\u7236\u7ea7\u7684\u8981\u6c42\u53c8\u4e0d\u4f1a\u591a\u51fa\u989d\u5916\u7684\u65e0\u610f\u4e49\u6807\u8bb0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const App = () => (\n  <>\n    <div>message a</div>\n    <div>message b</div>\n  </>\n)\n")),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4b\u4e3a\u5217\u8868\u6570\u636e\u6dfb\u52a0\u552f\u4e00\u6807\u8bc6"},"react\u4f18\u5316\u4e4b\u4e3a\u5217\u8868\u6570\u636e\u6dfb\u52a0\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u5f53\u9700\u8981\u6e32\u67d3\u5217\u8868\u6570\u636e\u65f6\uff0c\u6211\u4eec\u5e94\u8be5\u4e3a\u6bcf\u4e00\u4e2a\u5217\u8868\u9879\u6dfb\u52a0key \u5c5e\u6027\uff0ckey \u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u552f\u4e00\u7684\nkey\u5c5e\u6027\u53ef\u4ee5\u8ba9 React \u76f4\u63a5\u4e86\u5f53\u7684\u77e5\u9053\u54ea\u4e9b\u5217\u8868\u9879\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4ece\u800c\u907f\u514d\u4e86React \u5185\u90e8\u9010\u4e00\u904d\u5386 Virtual DOM \u67e5\u627e\u53d8\u5316\u6240\u5e26\u6765\u7684\u6027\u80fd\u6d88\u8017\uff0c\u907f\u514d\u4e86\u5143\u7d20\u56e0\u4e3a\u4f4d\u7f6e\u53d8\u5316\u800c\u5bfc\u81f4\u7684\u91cd\u65b0\u521b\u5efa\n\u5f53\u5217\u8868\u6570\u636e\u6ca1\u6709\u552f\u4e00\u6807\u8bc6\u65f6\uff0c\u53ef\u4ee5\u4e34\u65f6\u4f7f\u7528\u7d22\u5f15\u4f5c\u4e3a key\u5c5e\u6027\u7684\u503c\uff0c\u4f46\u662f\u4ec5\u9650\u4e8e\u5217\u8868\u9879\u662f\u9759\u6001\u7684\uff0c\u4e0d\u4f1a\u88ab\u52a8\u6001\u6539\u53d8\n\u6bd4\u5982\u4e0d\u4f1a\u5bf9\u5217\u8868\u9879\u8fdb\u884c\u6392\u5e8f\u6216\u8005\u8fc7\u6ee4\uff0c\u4e0d\u4f1a\u4ece\u9876\u90e8\u6216\u8005\u4e2d\u95f4\u6dfb\u52a0\u6216\u8005\u5220\u9664\u9879\u76ee\n\u5982\u679c\u6ca1\u6709\u552f\u4e00\u6807\u8bc6\u53d1\u751f\u4ee5\u4e0a\u884c\u4e3a\u65f6\uff0c\u7d22\u5f15\u4f1a\u88ab\u66f4\u6539\uff0c\u66f4\u65b0\u5c31\u4e0d\u4f1a\u53d8\u9ad8\u6548\n")),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4b\u5176\u4ed6\u5378\u8f7d\u7ec4\u4ef6\u524d\u8fdb\u884c\u6e05\u7406\u64cd\u4f5c"},"react\u4f18\u5316\u4e4b\u5176\u4ed6\uff1a\u5378\u8f7d\u7ec4\u4ef6\u524d\u8fdb\u884c\u6e05\u7406\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u4e2d\u4e3a window \u6ce8\u518c\u7684\u5168\u5c40\u4e8b\u4ef6\u3001\u5b9a\u65f6\u5668\u7b49\uff0c\u5728\u7ec4\u4ef6\u5378\u8f7d\u524d\u8981\u6e05\u7406\u6389\uff0c\u9632\u6b62\u7ec4\u4ef6\u5378\u8f7d\u540e\u7ee7\u7eed\u6267\u884c\u5f71\u54cd\u5e94\u7528\u6027\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const App = () => {\n  useEffect(() => {\n    let timer = setInterval(() => {\n      // ...\n    }, 1000);\n\n    return () => clearInterval(timer);    // \u6e05\u7406\uff01\n  }, [])\n  return (\n    <button onClick={\n      () => ReactDOM.unmountComponentAtNode(document.getElementById("root"))\n    }>\n      unmount!!\n    </button>\n  )\n}\n')),(0,r.kt)("h2",{id:"react\u4f18\u5316-\u5728react17\u4e2d-\u5728\u8bf7\u6c42\u7684async-\u6216promise-then\u51fd\u6570\u4f7f\u7528unstable_batchedupdates"},"react\u4f18\u5316. \u5728react17\u4e2d \u5728\u8bf7\u6c42\u7684async \u6216promise then\u51fd\u6570,\u4f7f\u7528unstable_batchedUpdates"),(0,r.kt)("p",null,"legacy \u6a21\u5f0f\u5728\u5408\u6210\u4e8b\u4ef6\u4e2d\u6709\u81ea\u52a8\u6279\u5904\u7406\u7684\u529f\u80fd\uff0c\u4f46\u4ec5\u9650\u4e8e\u4e00\u4e2a\u6d4f\u89c8\u5668\u4efb\u52a1\u3002\u975e React \u4e8b\u4ef6\u60f3\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u5fc5\u987b\u4f7f\u7528 unstable_batchedUpdates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.\u5f53\u76f4\u63a5\u8c03\u7528\u65f6this.setState\u65f6\uff0c\u4e3a\u5f02\u6b65\u66f4\u65b0\uff1b"),(0,r.kt)("li",{parentName:"ul"},"2.\u5f53\u5728\u5f02\u6b65\u51fd\u6570\u7684\u56de\u8c03\u4e2d\u8c03\u7528this.setState\uff0c\u5219\u4e3a\u540c\u6b65\u66f4\u65b0\uff1b"),(0,r.kt)("li",{parentName:"ul"},"3.\u5f53\u653e\u5728\u81ea\u5b9a\u4e49 DOM \u4e8b\u4ef6\u7684\u5904\u7406\u51fd\u6570\u4e2d\u65f6\uff0c\u4e5f\u662f\u540c\u6b65\u66f4\u65b0\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u89c1\nA-setState-\u540c\u6b65\u548c\u5f02\u6b65.md\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ea\u8981\u8fdb\u5165\u4e86 react \u7684\u8c03\u5ea6\u6d41\u7a0b\uff0c\u90a3\u5c31\u662f\u5f02\u6b65\u7684\uff1b\u53ea\u8981\u4f60\u6ca1\u6709\u8fdb\u5165 react \u7684\u8c03\u5ea6\u6d41\u7a0b\uff0c\u90a3\u5c31\u662f\u540c\u6b65\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u4e1c\u897f\u4e0d\u4f1a\u8fdb\u5165 react \u7684\u8c03\u5ea6\u6d41\u7a0b\uff1f setTimeout\u3001 setInterval \u3001\u76f4\u63a5\u5728 DOM \u4e0a\u7ed1\u5b9a\u539f\u751f\u4e8b\u4ef6\u3001Promise \u7684\u56de\u8c03\u7b49\uff0c\u8fd9\u4e9b\u90fd\u4e0d\u4f1a\u8d70 React \u7684\u8c03\u5ea6\u6d41\u7a0b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8c03\u7528 setState \uff0c\u90a3\u8fd9\u6b21 setState \u5c31\u662f\u540c\u6b65\u7684\u3002 \u5426\u5219\u5c31\u662f\u5f02\u6b65\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"setState \u540c\u6b65\u6267\u884c\u7684\u60c5\u51b5\u4e0b\uff0c DOM\u4e5f\u4f1a\u88ab\u540c\u6b65\u66f4\u65b0\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5982\u679c\u591a\u6b21 setState \uff0c\u4f1a\u5bfc\u81f4\u591a\u6b21\u66f4\u65b0\uff0c\u8fd9\u662f\u6beb\u65e0\u610f\u4e49\u5e76\u4e14\u6d6a\u8d39\u6027\u80fd\u7684\u3002")),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u5728\u8bf7\u6c42\u7684asynn \u6216promise then\u51fd\u6570,\u4f7f\u7528unstable_batchedUpdates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const btn2 = () => {\n  setTimeout(() => {\n    unstable_batchedUpdates(() => {\n      setCount(prev => prev + 1)\n      setCount(prev => prev + 2)\n    })\n  }, 0)\n}\n")),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4b\u6269\u5c55\u4f7f\u7528react18-\u80fd\u589e\u5f3a\u6e32\u67d3\u6027\u80fd"},"react\u4f18\u5316\u4e4b\u6269\u5c55\uff1a\u4f7f\u7528react18 \u80fd\u589e\u5f3a\u6e32\u67d3\u6027\u80fd"),(0,r.kt)("p",null,"react 18\u4e2d\u662f\u6279\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6bcf\u5f53\u4f60\u4f7f\u7528setState\u6765\u6539\u53d8\u4efb\u4f55\u51fd\u6570\u4e2d\u7684\u53d8\u91cf\u65f6\uff0cReact\u4e0d\u662f\u5728\u6bcf\u4e2asetState\u4e0a\u8fdb\u884c\u6e32\u67d3\uff0c\u800c\u662f\u6536\u96c6\u6240\u6709\u7684setStates\uff0c\u7136\u540e\u4e00\u8d77\u6267\u884c\u5b83\u4eec\u3002\u8fd9\u5c31\u662f\u6240\u8c13\u7684\u6279\u5904\u7406\u3002\n\n\u56e0\u4e3a\u5b83\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002\u5b83\u8fd8\u53ef\u4ee5\u9632\u6b62\u4f60\u7684\u7ec4\u4ef6\u5448\u73b0 \u534a\u6210\u54c1\u72b6\u6001\uff0c\u5373\u53ea\u6709\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\u88ab\u66f4\u65b0\n")),(0,r.kt)("p",null,"react18\u5176\u4ed6\u5c5e\u6027:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React18\u5c31\u7edf\u4e00\u7684\u91c7\u7528\u66f4\u65b0\u7b56\u7565\uff0c\u53ef\u4ee5\u4e0d\u7528\u8003\u8651render\u6e32\u67d3\u6b21\u6570\uff0c\u5e26\u6765\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528Transition API\u8fdb\u884c\u5e76\u53d1\u63a7\u5236,\u5176\u4e2d\u4e00\u4e2aAPI\u662f startTransition\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u5411React\u6307\u51fa\u54ea\u4e9b\u52a8\u4f5c\u53ef\u80fd\u4f1a\u963b\u585e\u7ebf\u7a0b\u5e76\u5bfc\u81f4\u5c4f\u5e55\u4e0a\u7684\u6ede\u540e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u8c03\u7528\u548c\u4e8b\u4ef6\u7684\u81ea\u52a8\u6279\u5904\u7406\uff0c\u4ee5\u63d0\u9ad8\u5e94\u7528\u5185\u7684\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u7528Suspense\u4e3aSSR\u63d0\u4f9b\u66f4\u5feb\u7684\u9875\u9762\u52a0\u8f7d\u3002")),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4b2\u4f7f\u7528-fragment-\u6807\u7b7e\u907f\u514d\u989d\u5916\u6807\u8bb0"},"react\u4f18\u5316\u4e4b2.\u4f7f\u7528 Fragment \u6807\u7b7e\u907f\u514d\u989d\u5916\u6807\u8bb0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  return (\n    <>\n      <div>message a</div>\n      <div>message b</div>\n    </>\n  );\n}\n\nimport { Fragment } from "react";\nfunction App() {\n  return (\n    <Fragment>\n      <div>message a</div>\n      <div>message b</div>\n    </Fragment>\n  );\n}\n')),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4bhooks\u4f18\u5316"},"react\u4f18\u5316\u4e4bHooks\u4f18\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4f7f\u7528 useMemo \u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u76d1\u6d4b\u503c\u4e0d\u53d8\u5316\u4e0d\u91cd\u65b0\u8ba1\u7b97\n\n\u4f7f\u7528 useCallback \u7f13\u5b58\u51fd\u6570\uff0c\u4f7f\u5f97\u91cd\u65b0\u6e32\u67d3\u603b\u5f97\u5230\u76f8\u540c\u7684\u51fd\u6570\n")),(0,r.kt)("h3",{id:"react\u4f18\u5316\u4e4bshouldcomponentupdate-\u6216\u5219-reactmemo"},"react\u4f18\u5316\u4e4bshouldComponentUpdate \u6216\u5219 React.memo"),(0,r.kt)("p",null,"\u901a\u8fc7compare\u6bd4\u8f83\u65b0\u65e7props\u662f\u5426\u201c\u76f8\u540c\u201d\uff0c\u9009\u62e9\u662f\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u8fd8\u662f\u8df3\u8fc7\u6e32\u67d3\u7ec4\u4ef6\u7684\u64cd\u4f5c\u5e76\u76f4\u63a5\u590d\u7528\u6700\u8fd1\u4e00\u6b21\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u7eaf\u7ec4\u4ef6\u53ea\u80fd\u8fdb\u884c\u6d45\u5c42\u6bd4\u8f83\uff0c\u8981\u8fdb\u884c\u6df1\u5c42\u6bd4\u8f83\uff0c\u4f7f\u7528 shouldComponentUpdate\uff0c\u5b83\u7528\u4e8e\u7f16\u5199\u81ea\u5b9a\u4e49\u6bd4\u8f83\u903b\u8f91"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1ashouldComponentUpdate \u521a\u597d\u4e0ememo\u76f8\u53cd,\nshouldComponentUpdate\u8fd4\u56detrue \u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff0c\u8fd4\u56defalse\u963b\u6b62\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function isEqual(prevProps, nextProps) {\n    if(prevProps.seconds===nextProps.seconds){\n        // isEqual \u8fd4\u56de true \u65f6\uff0c\u4e0d\u4f1a\u89e6\u53d1 render\n        return true\n    }else {\n        // false render\n        return false\n    }\n\n}\nexport default React.memo(Child,isEqual)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u67e5\u770b\uff1a\n05-memo.md\n")),(0,r.kt)("h2",{id:"react\u4f18\u5316\u4e4b\u6269\u5c55purecomponent"},"react\u4f18\u5316\u4e4b\u6269\u5c55\uff1aPureComponent"),(0,r.kt)("p",null,"\u4ec0\u4e48\u662f\u7eaf\u7ec4\u4ef6?"),(0,r.kt)("p",null,"\u7eaf\u7ec4\u4ef6\u4f1a\u5bf9\u7ec4\u4ef6\u8f93\u5165\u6570\u636e\u8fdb\u884c\u6d45\u5c42\u6bd4\u8f83\uff0c\u5982\u679c\u5f53\u524d\u8f93\u5165\u6570\u636e\u548c\u4e0a\u6b21\u8f93\u5165\u6570\u636e\u76f8\u540c\uff0c\u7ec4\u4ef6\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("p",null,"\u4ec0\u4e48\u662f\u6d45\u5c42\u6bd4\u8f83?"),(0,r.kt)("p",null,"\u6bd4\u8f83\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5728\u5185\u5b58\u4e2d\u7684\u5f15\u7528\u5730\u5740\u662f\u5426\u76f8\u540c\uff0c\u6bd4\u8f83\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u503c\u662f\u5426\u76f8\u540c"),(0,r.kt)("p",null,"\u5982\u4f55\u5b9e\u73b0\u7eaf\u7ec4\u4ef6?"),(0,r.kt)("p",null,"\u7c7b\u7ec4\u4ef6\u7ee7\u627f PureComponent \u7c7b\uff0c\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528 memo \u65b9\u6cd5"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u8fdb\u884cdiff\u64cd\u4f5c\uff0c\u800c\u662f\u8981\u5148\u8fdb\u884c\u6d45\u5c42\u6bd4\u8f83\uff0c\u6d45\u5c42\u6bd4\u8f83\u96be\u9053\u6ca1\u6709\u6027\u80fd\u6d88\u8017\u5417"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u548c\u8fdb\u884cdff \u6bd4\u8f83\u64cd\u4f5c\u76f8\u6bd4\uff0c\u6d45\u5c42\u6bd4\u8f83\u5c06\u6d88\u8017\u66f4\u5c11\u7684\u6027\u80fd\u3002diff \u64cd\u4f5c\u4f1a\u91cd\u65b0\u904d\u5386\u6574\u9897 virtualDOM \u6811,\u800c\u6d45\u5c42\u6bd4\u8f83\u53ea\u64cd\u4f5c\u5f53\u524d\u7ec4\u4ef6\u7684state\u548cprops\n")))}m.isMDXComponent=!0}}]);