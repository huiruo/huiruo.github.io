"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=a,h=p["".concat(i,".").concat(k)]||p[k]||c[k]||o;return t?r.createElement(h,u(u({ref:n},d),{},{components:t})):r.createElement(h,u({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},77476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"hook\u548c\u95ed\u5305",sidebar_position:7},u="hooks\u4e2d\u7684\u95ed\u5305",s={unversionedId:"React/hook\u548c\u95ed\u5305",id:"React/hook\u548c\u95ed\u5305",title:"hook\u548c\u95ed\u5305",description:"\u524d\u8a00\uff1a\u5b9a\u4e49\u4e00\u4e2aReact\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u4f7f\u7528\uff0c\u8fd9\u548c\u95ed\u5305\u6709\u5173\u7cfb\u5417\uff1f",source:"@site/programming-tech/React/07-hook\u548c\u95ed\u5305.md",sourceDirName:"React",slug:"/React/hook\u548c\u95ed\u5305",permalink:"/React/hook\u548c\u95ed\u5305",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/07-hook\u548c\u95ed\u5305.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"hook\u548c\u95ed\u5305",sidebar_position:7},sidebar:"docs",previous:{title:"fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",permalink:"/React/fiberNode-fiber\u7ed3\u6784-RequestIdleCallback"},next:{title:"router",permalink:"/React/router"}},i={},l=[{value:"\u4f8b\u5b502:Hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406",id:"\u4f8b\u5b502hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406",level:3},{value:"updateReducer",id:"updatereducer",level:3}],d={toc:l},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hooks\u4e2d\u7684\u95ed\u5305"},"hooks\u4e2d\u7684\u95ed\u5305"),(0,a.kt)("p",null,"\u524d\u8a00\uff1a\u5b9a\u4e49\u4e00\u4e2aReact\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u4f7f\u7528\uff0c\u8fd9\u548c\u95ed\u5305\u6709\u5173\u7cfb\u5417\uff1f\n\u5728\u6a21\u5757Counter.jsx\u4e2d\u5b9a\u4e49\u4e00\u4e2aCounter\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Counter.jsx\nexport default function Counter() {}\n\n// \u7136\u540e\u5728App\u6a21\u5757\u4e2d\u4f7f\u7528Counter\u7ec4\u4ef6\n// App.jsx\nimport Counter from './Counter';\nexport default function App() {\n // todo\n   return (\n    <Counter />\n  )\n}\n")),(0,a.kt)("p",null,"\u624b\u52a8\u8f6c\u6362\u6210\u4f2a\u4ee3\u7801,\u6211\u4eec\u5c06\u4e0a\u9762\u95ed\u5305\u5b9a\u4e49\u7684A\uff0cB\u7528\u672c\u4f8b\u4e2d\u7684\u540d\u79f0\u66ff\u6362\u4e00\u4e0b\uff1a\n\u81ea\u6267\u884c\u51fd\u6570AppModule\u4ee5\u53ca\u5728AppModule\u4e2d\u521b\u5efa\u7684\u51fd\u6570App\u3002"),(0,a.kt)("p",null,"\u5f53App\u5728render\u4e2d\u6267\u884c\u65f6\uff0c\u8bbf\u95ee\u4e86AppModule\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61(\u5b9a\u4e49\u4e86\u53d8\u91cfCounter)\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const CounterModule = (function() {\n  return function Counter() {}\n})()\n\nconst AppModule = (function() {\n  const Counter = CounterModule;\n  return function App() {\n    return Counter();\n  }\n})()\n")),(0,a.kt)("h3",{id:"\u4f8b\u5b502hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406"},"\u4f8b\u5b502:Hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3aState\u7684\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// state.js\nlet state = null;\n\nexport const useState = (value: number) => {\n  // \u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u6ca1\u6709\u521d\u59cb\u503c\uff0c\u56e0\u6b64\u4f7f\u7528\u4f20\u5165\u7684\u521d\u59cb\u503c\u8d4b\u503c\n  state = state || value;\n\n  function dispatch(newValue) {\n    state = newValue;\n    // \u5047\u8bbe\u6b64\u65b9\u6cd5\u80fd\u89e6\u53d1\u9875\u9762\u6e32\u67d3\n    render();\n  }\n\n  return [state, dispatch];\n}\n")),(0,a.kt)("p",null,"\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u5f15\u5165\u5e76\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5f53useState\u5728Demo\u4e2d\u6267\u884c\u65f6\uff0c\u8bbf\u95ee\u4e86state\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u8981\u77e5\u9053\u6e90\u7801\uff1areact \u7ec4\u4ef6\u4f1a\u8fd0\u884c\u4e24\u6b21\uff0c\u521d\u59cb\u5316\u4e00\u6b21\uff0c\u70b9\u51fb\u4e8b\u4ef6\u89e6\u53d1fiber\u66f4\u65b0\u6d41\u7a0b\u7684\u65f6\u5019\u4e00\u6b21,\u7b2c\u4e8c\u6b21\u662f\u4e3a\u4e86\u6784\u5efa\u65b0\u7684fiber tree\n",(0,a.kt)("inlineCode",{parentName:"p"},"\u6839\u636e\u95ed\u5305\u7684\u7279\u6027\uff0cstate\u6a21\u5757\u4e2d\u7684state\u53d8\u91cf\uff0c\u4f1a\u6301\u4e45\u5b58\u5728\u3002\u56e0\u6b64\u5f53Demo\u51fd\u6570\u518d\u6b21\u6267\u884c\u65f6\uff0c\u6211\u4eec\u4e5f\u80fd\u83b7\u53d6\u5230\u4e0a\u4e00\u6b21Demo\u51fd\u6570\u6267\u884c\u7ed3\u675f\u65f6state\u7684\u503c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {useState} from './state';\n\nfunction Demo() {\n  // \u4f7f\u7528\u6570\u7ec4\u89e3\u6784\u7684\u65b9\u5f0f\uff0c\u5b9a\u4e49\u53d8\u91cf\n  const [counter, setCounter] = useState(0);\n\n  return (\n    <div onClick={() => setCounter(counter + 1)}>hello world, {counter}</div>\n  )\n}\n\nexport default Demo();\n")),(0,a.kt)("p",null,"\u7b80\u5316\u4e00\u4e0b\u6e90\u4ee3\u7801\uff0c\u53d1\u73b0\u903b\u8f91\u867d\u7136\u590d\u6742\uff0c\u4f46\u662f\u6838\u5fc3\u7684\u4e24\u4e2a\u4e1c\u897f\uff0c\u8fd8\u662f\u5728\u4e8e\u4fee\u6539\u4e86\u4e00\u4e2a\u53eb\u505ahook\u7684\u53d8\u91cf\uff0c\u4ee5\u53ca\u8fd4\u56de\u4e86","[hook.memoizedState, dispatch]","\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2ahook\u662f\u4ec0\u4e48\u5462\uff1f\u5728updateWorkInProgressHook\u65b9\u6cd5\u4e2d\u53d1\u73b0\uff0chook\u662f\u5305\u542b\u4e86memoizedState, baseState, queue, baseUpdate, next\u5c5e\u6027\u7684\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function updateWorkInProgressHook() {\n  // This function is used both for updates and for re-renders triggered by a\n  // render phase update. It assumes there is either a current hook we can\n  // clone, or a work-in-progress hook from a previous render pass that we can\n  // use as a base. When we reach the end of the base list, we must switch to\n  // the dispatcher used for mounts.\n  var nextCurrentHook;\n\n  if (currentHook === null) {\n    var current = currentlyRenderingFiber$1.alternate;\n\n    if (current !== null) {\n      nextCurrentHook = current.memoizedState;\n    } else {\n      nextCurrentHook = null;\n    }\n  } else {\n    nextCurrentHook = currentHook.next;\n  }\n\n  var nextWorkInProgressHook;\n\n  if (workInProgressHook === null) {\n    nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;\n  } else {\n    nextWorkInProgressHook = workInProgressHook.next;\n  }\n\n  if (nextWorkInProgressHook !== null) {\n    // There's already a work-in-progress. Reuse it.\n    workInProgressHook = nextWorkInProgressHook;\n    nextWorkInProgressHook = workInProgressHook.next;\n    currentHook = nextCurrentHook;\n  } else {\n    // Clone from the current hook.\n    if (nextCurrentHook === null) {\n      throw new Error('Rendered more hooks than during the previous render.');\n    }\n\n    currentHook = nextCurrentHook;\n    var newHook = {\n      memoizedState: currentHook.memoizedState,\n      baseState: currentHook.baseState,\n      baseQueue: currentHook.baseQueue,\n      queue: currentHook.queue,\n      next: null\n    };\n\n    if (workInProgressHook === null) {\n      // This is the first hook in the list.\n      currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;\n    } else {\n      // Append to the end of the list.\n      workInProgressHook = workInProgressHook.next = newHook;\n    }\n  }\n\n  return workInProgressHook;\n}\n")),(0,a.kt)("h3",{id:"updatereducer"},"updateReducer"),(0,a.kt)("p",null,"\u7ee7\u7eed\u627e\u5230updateReducer\uff0cupdateReducer\u7684\u903b\u8f91\u6bd4\u8f83\u590d\u6742\u3002\u4e0d\u8fc7\u6211\u4eec\u57fa\u4e8e\u4e0a\u9762\u63d0\u5230\u8fc7\u7684\u4e24\u4e2a\u601d\u8def\uff0c\u770b\u4ed6\u4fee\u6539\u4e86\u4ec0\u4e48\uff0c\u4e0e\u8fd4\u56de\u4e86\u4ec0\u4e48\u3002"),(0,a.kt)("p",null,"updateReducer\u8fd4\u56de\u7684\u6570\u7ec4\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u503c\u5c31\u662fmemoizedState\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff0c\u5176\u5b9e\u6211\u4eec\u7684\u72b6\u6001\uff0c\u5c31\u7f13\u5b58\u5728hook.memoizedState\u8fd9\u4e2a\u503c\u91cc\u3002"),(0,a.kt)("p",null,"\u7ee7\u7eed\u89c2\u5bdfupdateWorkInProgressHook\u65b9\u6cd5\uff0c\u53d1\u73b0\u8be5\u65b9\u6cd5\u5728\u5185\u90e8\u4fee\u6539\u4e86\u5f88\u591a\u5916\u90e8\u7684\u53d8\u91cf\uff0cworkInProgressHook\uff0cnextWorkInProgressHook\uff0ccurrentHook\u7b49\u3002\u800cmemoizedState: currentHook.memoizedState\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function updateReducer(reducer, initialArg, init) {\n  var hook = updateWorkInProgressHook();\n  console.log('%c=updateState=updateReducer\u8c03\u7528updateWorkInProgressHook,\u62f7\u8d1dhook(current->workInProcess),\u5e76\u8fd4\u56de\u8fd9\u4e2ahook', 'color:cyan', { hook })\n  var queue = hook.queue;\n\n  console.log('%c=updateState=updateReducer\u8bfb\u53d6\u961f\u5217,\u8ba1\u7b97\u51fa\u6700\u65b0\u72b6\u6001\uff0c\u66f4\u65b0hook\u7684\u72b6\u6001', 'color:cyan')\n  if (queue === null) {\n    throw new Error('Should have a queue. This is likely a bug in React. Please file an issue.');\n  }\n\n  queue.lastRenderedReducer = reducer;\n  var current = currentHook; // The last rebase update that is NOT part of the base state.\n\n  var baseQueue = current.baseQueue; // The last pending update that hasn't been processed yet.\n\n  var pendingQueue = queue.pending;\n\n  if (pendingQueue !== null) {\n    // We have new updates that haven't been processed yet.\n    // We'll add them to the base queue.\n    if (baseQueue !== null) {\n      // Merge the pending queue and the base queue.\n      var baseFirst = baseQueue.next;\n      var pendingFirst = pendingQueue.next;\n      baseQueue.next = pendingFirst;\n      pendingQueue.next = baseFirst;\n    }\n\n    {\n      if (current.baseQueue !== baseQueue) {\n        // Internal invariant that should never happen, but feasibly could in\n        // the future if we implement resuming, or some form of that.\n        error('Internal error: Expected work-in-progress queue to be a clone. ' + 'This is a bug in React.');\n      }\n    }\n\n    current.baseQueue = baseQueue = pendingQueue;\n    queue.pending = null;\n  }\n\n  if (baseQueue !== null) {\n    // We have a queue to process.\n    var first = baseQueue.next;\n    var newState = current.baseState;\n    var newBaseState = null;\n    var newBaseQueueFirst = null;\n    var newBaseQueueLast = null;\n    var update = first;\n\n    do {\n      var updateLane = update.lane;\n\n      if (!isSubsetOfLanes(renderLanes, updateLane)) {\n        // Priority is insufficient. Skip this update. If this is the first\n        // skipped update, the previous update/state is the new base\n        // update/state.\n        var clone = {\n          lane: updateLane,\n          action: update.action,\n          hasEagerState: update.hasEagerState,\n          eagerState: update.eagerState,\n          next: null\n        };\n\n        if (newBaseQueueLast === null) {\n          newBaseQueueFirst = newBaseQueueLast = clone;\n          newBaseState = newState;\n        } else {\n          newBaseQueueLast = newBaseQueueLast.next = clone;\n        } // Update the remaining priority in the queue.\n        // TODO: Don't need to accumulate this. Instead, we can remove\n        // renderLanes from the original lanes.\n\n\n        currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);\n        markSkippedUpdateLanes(updateLane);\n      } else {\n        // This update does have sufficient priority.\n        if (newBaseQueueLast !== null) {\n          var _clone = {\n            // This update is going to be committed so we never want uncommit\n            // it. Using NoLane works because 0 is a subset of all bitmasks, so\n            // this will never be skipped by the check above.\n            lane: NoLane,\n            action: update.action,\n            hasEagerState: update.hasEagerState,\n            eagerState: update.eagerState,\n            next: null\n          };\n          newBaseQueueLast = newBaseQueueLast.next = _clone;\n        } // Process this update.\n\n\n        if (update.hasEagerState) {\n          // If this update is a state update (not a reducer) and was processed eagerly,\n          // we can use the eagerly computed state\n          // \u72b6\u6001\u5df2\u7ecf\u8ba1\u7b97\u8fc7\uff0c\u90a3\u5c31\u76f4\u63a5\u7528\n          newState = update.eagerState;\n        } else {\n          var action = update.action;\n          newState = reducer(newState, action);\n        }\n      }\n\n      update = update.next;\n      // \u7ec8\u6b62\u6761\u4ef6\u662f\u6307\u9488\u4e3a\u7a7a \u6216 \u73af\u5df2\u904d\u5386\u5b8c\n    } while (update !== null && update !== first);\n\n    if (newBaseQueueLast === null) {\n      newBaseState = newState;\n    } else {\n      newBaseQueueLast.next = newBaseQueueFirst;\n    } // Mark that the fiber performed work, but only if the new state is\n    // different from the current state.\n\n\n    if (!objectIs(newState, hook.memoizedState)) {\n      markWorkInProgressReceivedUpdate();\n    }\n\n    hook.memoizedState = newState;\n    hook.baseState = newBaseState;\n    hook.baseQueue = newBaseQueueLast;\n    queue.lastRenderedState = newState;\n  } // Interleaved updates are stored on a separate queue. We aren't going to\n  // process them during this render, but we do need to track which lanes\n  // are remaining.\n\n\n  var lastInterleaved = queue.interleaved;\n\n  if (lastInterleaved !== null) {\n    var interleaved = lastInterleaved;\n\n    do {\n      var interleavedLane = interleaved.lane;\n      currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, interleavedLane);\n      markSkippedUpdateLanes(interleavedLane);\n      interleaved = interleaved.next;\n    } while (interleaved !== lastInterleaved);\n  } else if (baseQueue === null) {\n    // `queue.lanes` is used for entangling transitions. We can set it back to\n    // zero once the queue is empty.\n    queue.lanes = NoLanes;\n  }\n\n  var dispatch = queue.dispatch;\n  console.log('%c=updateState=updateReducer\u6700\u7ec8\u8fd4\u56de\u503c', 'color:cyan', [hook.memoizedState, dispatch])\n  return [hook.memoizedState, dispatch];\n}\n")))}c.isMDXComponent=!0}}]);