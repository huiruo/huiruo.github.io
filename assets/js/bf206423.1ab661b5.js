"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"setState\u5f02\u6b65-\u540c\u6b65",sidebar_position:5},l=void 0,c={unversionedId:"React/setState\u5f02\u6b65-\u540c\u6b65",id:"React/setState\u5f02\u6b65-\u540c\u6b65",title:"setState\u5f02\u6b65-\u540c\u6b65",description:"\u5f02\u6b65",source:"@site/programming-tech/React/setState\u5f02\u6b65-\u540c\u6b65.md",sourceDirName:"React",slug:"/React/setState\u5f02\u6b65-\u540c\u6b65",permalink:"/React/setState\u5f02\u6b65-\u540c\u6b65",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/setState\u5f02\u6b65-\u540c\u6b65.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"setState\u5f02\u6b65-\u540c\u6b65",sidebar_position:5},sidebar:"docs",previous:{title:"setState",permalink:"/React/setState"},next:{title:"useEffect",permalink:"/React/useEffect"}},i={},u=[{value:"\u5f02\u6b65",id:"\u5f02\u6b65",level:2},{value:"\u4e3a\u4ec0\u4e48\u662f\u5f02\u6b65\uff1f",id:"\u4e3a\u4ec0\u4e48\u662f\u5f02\u6b65",level:2},{value:"\u540c\u6b65-\u5728setTimeout\uff0cPromise.then\u7b49\u5f02\u6b65\u4e8b\u4ef6\u6216\u8005\u539f\u751f\u4e8b\u4ef6\u4e2d",id:"\u540c\u6b65-\u5728settimeoutpromisethen\u7b49\u5f02\u6b65\u4e8b\u4ef6\u6216\u8005\u539f\u751f\u4e8b\u4ef6\u4e2d",level:2},{value:"\u5173\u4e8eReact17\u7684\u6027\u80fd\u4f18\u5316:React17\u6839\u636e\u60c5\u51b5\u800c\u91c7\u7528\u4e0d\u540c\u7684\u66f4\u65b0\u7b56\u7565",id:"\u5173\u4e8ereact17\u7684\u6027\u80fd\u4f18\u5316react17\u6839\u636e\u60c5\u51b5\u800c\u91c7\u7528\u4e0d\u540c\u7684\u66f4\u65b0\u7b56\u7565",level:2},{value:"legacy\u6a21\u5f0f\u548cconcurrent\u6a21\u5f0f(\u5e76\u53d1)",id:"legacy\u6a21\u5f0f\u548cconcurrent\u6a21\u5f0f\u5e76\u53d1",level:2},{value:"concurrent\u6a21\u5f0f",id:"concurrent\u6a21\u5f0f",level:3},{value:"legacy\u6a21\u5f0f",id:"legacy\u6a21\u5f0f",level:3}],s=(p="App",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const d={toc:u},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f02\u6b65"},"\u5f02\u6b65"),(0,a.kt)("p",null,"\u5982\u679csetState\u662f\u540c\u6b65\u7684\uff0c\u610f\u5473\u7740\u6bcf\u6267\u884c\u4e00\u6b21setState\u65f6\uff0c\u90fd\u91cd\u65b0diff + dom\u4fee\u6539\uff0c\u8fd9\u5bf9\u6027\u80fd\u6765\u8bf4\u662f\u6781\u4e3a\u4e0d\u597d\u7684"),(0,a.kt)("p",null,"\u7531React\u63a7\u5236\u5185\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570(onChange\u3001onClick\u7b49\u5408\u6210\u4e8b\u4ef6)\uff0c\u4ee5\u53ca\u751f\u547d\u5468\u671f\u51fd\u6570\u8c03\u7528setState()\u4e3a\u5f02\u6b65\xa0\u3002\u53ea\u8981\u8fdb\u5165\u4e86 react \u7684\u8c03\u5ea6\u6d41\u7a0b\uff0c\u90a3\u5c31\u662f\u5f02\u6b65\u7684\uff1b"),(0,a.kt)("p",null,"\u4ee3\u7801\u6ca1\u6709\u8fdb\u5165react\u7684\u8c03\u5ea6\u6d41\u7a0b\uff0c\u90a3\u5c31\u662f\u540c\u6b65\u7684,\u8fd9\u4e9b\u90fd\u4e0d\u4f1a\u8d70 React \u7684\u8c03\u5ea6\u6d41\u7a0b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8c03\u7528 setState \uff0c\u90a3\u8fd9\u6b21 setState \u5c31\u662f\u540c\u6b65\u7684:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setTimeout,setInterval"),(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5728 DOM \u4e0a\u7ed1\u5b9a\u539f\u751f\u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"Promise \u7684\u56de\u8c03\u7b49")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u662f\u5f02\u6b65"},"\u4e3a\u4ec0\u4e48\u662f\u5f02\u6b65\uff1f"),(0,a.kt)("p",null,'setState \u91cc\u7684\u903b\u8f91\u5176\u5b9e\u662f\u540c\u6b65\u7684\uff0c\u4f46\u662f\uff0c\u8c03\u7528 setState \u65f6\uff0creact \u4f1a\u5bf9\u8fd9\u4e00\u7cfb\u5217\u7684 setter \u505a\u5408\u5e76\u5904\u7406\uff0c\u5f02\u6b65\u66f4\u65b0\u8be5\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5bf9\u5e94\u7684 hooks \u94fe\u8868\u91cc\u9762\u7684\u503c\uff0c\u7136\u540e\u89e6\u53d1\u91cd\u6e32\u67d3\uff08re-renders\uff09\uff0c\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u4e0a\u6765\u8bf4\uff0csetState \u786e\u5b9e\u662f\u4e00\u4e2a"\u5f02\u6b65"\u64cd\u4f5c\uff1b'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u591a\u6b21\u6267\u884csetState \u548c useState\u7684set\u51fd\u6570\uff0c\u7ec4\u4ef6\u53ea\u4f1a\u91cd\u65b0\u6e32\u67d3\u4e00\u6b21,",(0,a.kt)("br",null),"\n\u5373\u662f\u628a\u4e00\u4e2a\u540c\u6b65\u4ee3\u7801\u4e2d\u7684\u591a\u4e2asetState\u5408\u5e76\u6210\u4e00\u6b21\u8fdb\u884c\u6279\u91cf\u66f4\u65b0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"setState \u548c useState\u4e2d\u7684set\u51fd\u6570\u662f\u5f02\u6b65\u6267\u884c\u7684\uff08\u4e0d\u4f1a\u7acb\u5373\u66f4\u65b0state\u7684\u7ed3\u679c\uff09",(0,a.kt)("br",null),"\n\u4e0d\u540c\u7684\u662f\uff0csetState\u4f1a\u66f4\u65b0\u5f53\u524d\u4f5c\u7528\u57df\u4e0b\u7684\u72b6\u6001\uff0c\u4f46\u662fset\u51fd\u6570\u4e0d\u4f1a\u66f4\u65b0\uff0c\u53ea\u80fd\u5728\u65b0\u6e32\u67d3\u7684\u7ec4\u4ef6\u4f5c\u7528\u57df\u4e2d\u8bbf\u95ee\u5230\u3002",(0,a.kt)("br",null),"\n\u5982\u679c\u6211\u4eec\u5728\u540c\u6b65\u51fd\u6570\u6216\u8005\u5728\u5f02\u6b65\u56de\u8c03\u4e2d\u8c03\u7528 setCount \u540e\uff0c\u6253\u5370 count\uff0c\u90fd\u662f\u65e7\u503c\u3002\n\u62ff\u66f4\u65b0\u540e\u7684\u503c\u7684\u65b9\u6cd5:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [count, setCount] = useState(0);\n\nconst handleClick = () => {\n  setCount(val => {\n    // do something\n    return val + 1\n  })\n};\n")),(0,a.kt)("h2",{id:"\u540c\u6b65-\u5728settimeoutpromisethen\u7b49\u5f02\u6b65\u4e8b\u4ef6\u6216\u8005\u539f\u751f\u4e8b\u4ef6\u4e2d"},"\u540c\u6b65-\u5728setTimeout\uff0cPromise.then\u7b49\u5f02\u6b65\u4e8b\u4ef6\u6216\u8005\u539f\u751f\u4e8b\u4ef6\u4e2d"),(0,a.kt)("p",null,"setState\u548cuseState\u7684set\u51fd\u6570\u662f\u540c\u6b65\u6267\u884c\u7684\uff08\u7acb\u5373\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff09,\u6bcf\u4e00\u6b21\u7684\u6267\u884c\u90fd\u4f1a\u8c03\u7528\u4e00\u6b21render"),(0,a.kt)("p",null,"\u7ed3\u5408\u5b9e\u4f8b\u6765\u770b\uff0c\u5f53\u70b9\u51fb\u589e\u52a0\u4f1a\u6267\u884c\u4e09\u6b21setAge"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const onClick = useCallback(() => {\n  setAge(19);\n  setAge(20);\n  setAge(21);\n}, []);\n")),(0,a.kt)("h2",{id:"\u5173\u4e8ereact17\u7684\u6027\u80fd\u4f18\u5316react17\u6839\u636e\u60c5\u51b5\u800c\u91c7\u7528\u4e0d\u540c\u7684\u66f4\u65b0\u7b56\u7565"},"\u5173\u4e8eReact17\u7684\u6027\u80fd\u4f18\u5316:React17\u6839\u636e\u60c5\u51b5\u800c\u91c7\u7528\u4e0d\u540c\u7684\u66f4\u65b0\u7b56\u7565"),(0,a.kt)("p",null,"React17 \u548c React18 \u6279\u91cf\u66f4\u65b0\u7684\u7b56\u7565\u662f\u4e0d\u540c\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React18\u5c31\u7edf\u4e00\u7684\u91c7\u7528\u66f4\u65b0\u7b56\u7565\uff0c\u53ef\u4ee5\u4e0d\u7528\u8003\u8651render\u6e32\u67d3\u6b21\u6570\uff0c\u5e26\u6765\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"React17\u6839\u636e\u60c5\u51b5\u800c\u91c7\u7528\u4e0d\u540c\u7684\u66f4\u65b0\u7b56\u7565\uff0c",(0,a.kt)("br",null),"\nsetState \u540c\u6b65\u6267\u884c\u7684\u60c5\u51b5\u4e0b\uff0c DOM\u4e5f\u4f1a\u88ab\u540c\u6b65\u66f4\u65b0\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5982\u679c\u591a\u6b21 setState \uff0c\u4f1a\u5bfc\u81f4\u591a\u6b21\u66f4\u65b0\uff0c\u8fd9\u662f\u6beb\u65e0\u610f\u4e49\u5e76\u4e14\u6d6a\u8d39\u6027\u80fd\u7684\u3002")),(0,a.kt)("p",null,"\u5728react17\u4e2d\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"unstable_batchedUpdates")," \u51fd\u6570\uff0c\u7528\u6765\u5408\u5e76\u6279\u91cf\u64cd\u4f5c\u3002\u5728\u8bf7\u6c42\u540e\u53f0\u63a5\u53e3\uff0c\u8fd4\u56de\u6570\u636e\u65f6\u4f7f\u7528unstable_batchedUpdates\u51fd\u6570\u6765\u51cf\u5c11\u6e32\u67d3\u6b21\u6570\uff0c\u4f18\u5316,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const btn2 = () => {\n  setTimeout(() => {\n    unstable_batchedUpdates(() => {\n      setCount(prev => prev + 1)\n      setCount(prev => prev + 2)\n    })\n  }, 0)\n}\n")),(0,a.kt)("h2",{id:"legacy\u6a21\u5f0f\u548cconcurrent\u6a21\u5f0f\u5e76\u53d1"},"legacy\u6a21\u5f0f\u548cconcurrent\u6a21\u5f0f(\u5e76\u53d1)"),(0,a.kt)("p",null,"\u5728legacy\u6a21\u5f0f\u4e2d\uff0c\u66f4\u65b0\u53ef\u80fd\u4e3a\u540c\u6b65\uff0c\u4e5f\u53ef\u80fd\u4e3a\u5f02\u6b65\uff1b"),(0,a.kt)("p",null,"\u5728concurrent\u6a21\u5f0f\u4e2d\uff0c\u4e00\u5b9a\u662f\u5f02\u6b65\u3002"),(0,a.kt)("h3",{id:"concurrent\u6a21\u5f0f"},"concurrent\u6a21\u5f0f"),(0,a.kt)("p",null,"\u901a\u8fc7ReactDOM.unstable_createRoot(rootNode).render(",(0,a.kt)(s,{mdxType:"App"}),")\u65b9\u5f0f\u521b\u5efa\u7684\u5e94\u7528\uff0c\u5219\u4e3aconcurrent\u6a21\u5f0f\uff0c\u8fd9\u4e2a\u6a21\u5f0f\u76ee\u524d\u53ea\u662f\u4e00\u4e2a\u5b9e\u9a8c\u9636\u6bb5\u7684\u4ea7\u7269"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createRoot\u8c03\u7528createRootImpl\u521b\u5efafiberRootNode\u548crootNode"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5b8cFiber\u8282\u70b9\u540e\uff0c\u8c03\u7528ReactDOMRoot.prototype.render\u6267\u884cupdateContainer\uff0c\u7136\u540escheduleUpdateOnFiber\u5f02\u6b65\u8c03\u5ea6performConcurrentWorkOnRoot\u8fdb\u5165render\u9636\u6bb5\u548ccommit\u9636\u6bb5")),(0,a.kt)("h3",{id:"legacy\u6a21\u5f0f"},"legacy\u6a21\u5f0f"),(0,a.kt)("p",null,"\u901a\u8fc7ReactDOM.render(",(0,a.kt)(s,{mdxType:"App"}),", rootNode)\u65b9\u5f0f\u521b\u5efa\u5e94\u7528\uff0c\u5219\u4e3a legacy \u6a21\u5f0f"),(0,a.kt)("p",null,"legacy \u6a21\u5f0f\u5728\u5408\u6210\u4e8b\u4ef6\u4e2d\u6709\u81ea\u52a8\u6279\u5904\u7406\u7684\u529f\u80fd\uff0c\u4f46\u4ec5\u9650\u4e8e\u4e00\u4e2a\u6d4f\u89c8\u5668\u4efb\u52a1\u3002\u975e React \u4e8b\u4ef6\u60f3\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u5fc5\u987b\u4f7f\u7528 unstable_batchedUpdates"),(0,a.kt)("p",null,"legacy\u6a21\u5f0f\u662f\u6211\u4eec\u5e38\u7528\u7684\uff0c\u5b83\u6784\u5efadom\u7684\u8fc7\u7a0b\u662f\u540c\u6b65\u7684\uff0c\u6240\u4ee5\u5728render\u7684reconciler\u4e2d\uff0c\u5982\u679cdiff\u7684\u8fc7\u7a0b\u7279\u522b\u8017\u65f6\uff0c\u90a3\u4e48\u5bfc\u81f4\u7684\u7ed3\u679c\u5c31\u662fjs\u4e00\u76f4\u963b\u585e\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1(\u4f8b\u5982\u7528\u6237\u7684\u70b9\u51fb\u4e8b\u4ef6)\uff0c\u8868\u73b0\u4e3a\u9875\u9762\u7684\u5361\u987f\uff0c\u65e0\u6cd5\u54cd\u5e94"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"render\u8c03\u7528legacyRenderSubtreeIntoContainer\uff0c\u6700\u540ecreateRootImpl\u4f1a\u8c03\u7528\u5230createFiberRoot\u521b\u5efafiberRootNode,\u7136\u540e\u8c03\u7528createHostRootFiber\u521b\u5efarootFiber\uff0c\u5176\u4e2dfiberRootNode\u662f\u6574\u4e2a\u9879\u76ee\u7684\u7684\u6839\u8282\u70b9\uff0crootFiber\u662f\u5f53\u524d\u5e94\u7528\u6302\u5728\u7684\u8282\u70b9\uff0c\u4e5f\u5c31\u662fReactDOM.render\u8c03\u7528\u540e\u7684\u6839\u8282\u70b9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5b8cFiber\u8282\u70b9\u540e\uff0clegacyRenderSubtreeIntoContainer\u8c03\u7528updateContainer\u521b\u5efa\u521b\u5efaUpdate\u5bf9\u8c61\u6302\u8f7d\u5230updateQueue\u7684\u73af\u5f62\u94fe\u8868\u4e0a\uff0c\u7136\u540e\u6267\u884cscheduleUpdateOnFiber\u8c03\u7528performSyncWorkOnRoot\u8fdb\u5165render\u9636\u6bb5\u548ccommit\u9636\u6bb5"))))}k.isMDXComponent=!0}}]);