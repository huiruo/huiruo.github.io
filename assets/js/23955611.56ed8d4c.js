"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3171],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={},c=void 0,i={unversionedId:"React/react\u51fd\u6570\u89e3\u6790/\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18",id:"React/react\u51fd\u6570\u89e3\u6790/\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18",title:"\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18",description:"",source:"@site/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/04-\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18.md",sourceDirName:"React/00-react\u51fd\u6570\u89e3\u6790",slug:"/React/react\u51fd\u6570\u89e3\u6790/\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18",permalink:"/React/react\u51fd\u6570\u89e3\u6790/\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/04-\u91cd\u70b9-updateContainer\u5f00\u59cb\u6e32\u67d3-18.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"legacyCreateRootFromDOMContainer\u91cd\u70b9\u65b9\u6cd5-18",permalink:"/React/react\u51fd\u6570\u89e3\u6790/legacyCreateRootFromDOMContainer\u91cd\u70b9\u65b9\u6cd5-18"},next:{title:"Pinia \u548c Vuex",permalink:"/Vue/vue3/\u5e93-\u72b6\u6001\u7ba1\u7406"}},l={},u=[],p={toc:u},d="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function updateContainer(element, container, parentComponent, callback) {\n  console.log('\u66f4\u65b0\u6d41\u7a0b--\x3eupdateContainer\u672c\u4f53')\n  {\n    onScheduleRoot(container, element);\n  }\n\n  var current$1 = container.current;\n  var eventTime = requestEventTime();\n  var lane = requestUpdateLane(current$1);\n\n  {\n    markRenderScheduled(lane);\n  }\n\n  var context = getContextForSubtree(parentComponent);\n\n  if (container.context === null) {\n    container.context = context;\n  } else {\n    container.pendingContext = context;\n  }\n\n  {\n    if (isRendering && current !== null && !didWarnAboutNestedUpdates) {\n      didWarnAboutNestedUpdates = true;\n\n      error('Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\\n\\n' + 'Check the render method of %s.', getComponentNameFromFiber(current) || 'Unknown');\n    }\n  }\n\n  var update = createUpdate(eventTime, lane); // Caution: React DevTools currently depends on this property\n  // being called \"element\".\n\n  update.payload = {\n    element: element\n  };\n  callback = callback === undefined ? null : callback;\n\n  if (callback !== null) {\n    {\n      if (typeof callback !== 'function') {\n        error('render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback);\n      }\n    }\n\n    update.callback = callback;\n  }\n\n  console.log('\u66f4\u65b0\u6d41\u7a0b--\x3eupdateContainer\u672c\u4f53,\u8c03\u7528enqueueUpdate\u548cscheduleUpdateOnFiber')\n  enqueueUpdate(current$1, update);\n  var root = scheduleUpdateOnFiber(current$1, lane, eventTime);\n\n  if (root !== null) {\n    entangleTransitions(root, current$1, lane);\n  }\n\n  return lane;\n}\n")))}s.isMDXComponent=!0}}]);