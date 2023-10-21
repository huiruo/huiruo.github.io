"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[641],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),u=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(f.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,d=p["".concat(f,".").concat(m)]||p[m]||s[m]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var f in r)hasOwnProperty.call(r,f)&&(c[f]=r[f]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35424:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"React/react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork",id:"React/react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork",title:"05-2-performUnitOfWork",description:"performUnitOfWork \u4f5c\u7528",source:"@site/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork.md",sourceDirName:"React/00-react\u51fd\u6570\u89e3\u6790",slug:"/React/react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork",permalink:"/React/react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",permalink:"/React/react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot"},next:{title:"FiberRootNode-18",permalink:"/React/react\u51fd\u6570\u89e3\u6790/FiberRootNode-18"}},f={},u=[{value:"performUnitOfWork \u4f5c\u7528",id:"performunitofwork-\u4f5c\u7528",level:2}],l={toc:u},p="wrapper";function s(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"performunitofwork-\u4f5c\u7528"},"performUnitOfWork \u4f5c\u7528"),(0,o.kt)("p",null,"\u521b\u5efa\u4e0b\u4e00\u4e2a Fiber \u8282\u70b9\uff0c\u5e76\u8d4b\u503c\u7ed9 workInProgress\uff0c\u540c\u65f6\u628a workInProgress \u4e0e\u5df2\u521b\u5efa\u7684 Fiber \u8282\u70b9\u8fde\u63a5\u8d77\u6765\u6784\u6210 Fiber \u6811\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  function performUnitOfWork(unitOfWork) {\n    // The current, flushed, state of this fiber is the alternate. Ideally\n    // nothing should rely on this, but relying on it here means that we don't\n    // need an additional field on the work in progress.\n    var current = unitOfWork.alternate;\n    setCurrentFiber(unitOfWork);\n    var next;\n\n    if ((unitOfWork.mode & ProfileMode) !== NoMode) {\n      startProfilerTimer(unitOfWork);\n      //\u5bf9\u5f53\u524d\u8282\u70b9\u8fdb\u884c\u534f\u8c03\uff0c\u5982\u679c\u5b58\u5728\u5b50\u8282\u70b9\uff0c\u5219\u8fd4\u56de\u5b50\u8282\u70b9\u7684\u5f15\u7528\n      next = beginWork$1(current, unitOfWork, subtreeRenderLanes);\n      stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);\n    } else {\n      next = beginWork$1(current, unitOfWork, subtreeRenderLanes);\n    }\n\n    resetCurrentFiber();\n    unitOfWork.memoizedProps = unitOfWork.pendingProps;\n\n    //\u5982\u679c\u65e0\u5b50\u8282\u70b9\uff0c\u5219\u4ee3\u8868\u5f53\u524d\u7684child\u94fe\u8868\u5df2\u7ecf\u904d\u5386\u5b8c\n    if (next === null) {\n      // If this doesn't spawn new work, complete the current work.\n      //\u6b64\u51fd\u6570\u5185\u90e8\u4f1a\u5e2e\u6211\u4eec\u627e\u5230\u4e0b\u4e00\u4e2a\u53ef\u6267\u884c\u7684\u8282\u70b9\n      completeUnitOfWork(unitOfWork);\n    } else {\n      workInProgress = next;\n    }\n\n    ReactCurrentOwner$2.current = null;\n  }\n")))}s.isMDXComponent=!0}}]);