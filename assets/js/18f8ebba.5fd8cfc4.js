"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9890],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>h});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),k=o,h=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return r?t.createElement(h,i(i({ref:n},u),{},{components:r})):t.createElement(h,i({ref:n},u))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},60413:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"React/react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",id:"React/react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",title:"05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",description:"1",source:"@site/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot.md",sourceDirName:"React/00-react\u51fd\u6570\u89e3\u6790",slug:"/React/react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",permalink:"/React/react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render",permalink:"/React/react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render"},next:{title:"05-2-performUnitOfWork",permalink:"/React/react\u51fd\u6570\u89e3\u6790/05-2-performUnitOfWork"}},l={},c=[{value:"1",id:"1",level:2},{value:"\u4e24\u4e2a\u51fd\u6570\u533a\u522b workLoopConcurrent workLoopSync",id:"\u4e24\u4e2a\u51fd\u6570\u533a\u522b-workloopconcurrent-workloopsync",level:2},{value:"\u51fd\u6570\u5185\u6267\u884c\u7684\u5173\u952e\u51fd\u6570",id:"\u51fd\u6570\u5185\u6267\u884c\u7684\u5173\u952e\u51fd\u6570",level:2},{value:"renderRootConcurrent",id:"renderrootconcurrent",level:2},{value:"workLoopConcurrent",id:"workloopconcurrent",level:2},{value:"performUnitOfWork",id:"performunitofwork",level:2},{value:"beginWork",id:"beginwork",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1"},"1"),(0,o.kt)("p",null,"\u4e24\u79cd\u6a21\u5f0f\u4f1a\u8fdb\u5165performSyncWorkOnRoot\u6216\u8005performConcurrentWorkOnRoot\uff0c\n\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u5206\u522b\u4f1a\u8c03\u7528workLoopSync\u6216\u8005workLoopConcurrent"),(0,o.kt)("p",null,"scheduleCallback \u8fdb\u884c\u5bf9\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8fdb\u884c\u8c03\u5ea6\uff0cperformConcurrentWorkOnRoot.bind(null, root) \u6700\u7ec8\u4f1a\u5728\u67d0\u4e2a\u65f6\u673a\u88ab\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/*\n\u5728 ensureRootIsScheduled \u4e2d\uff0c\u5982\u679c getHighestPriorityLane \u8c03\u7528\u7684\u8fd4\u56de\u503c\u4e0d\u662f SyncLane\u7684\u65f6\u5019\uff0c\u5219\u6709\u4ee5\u4e0b\u4ee3\u7801\uff1a\n*/\nfunction ensureRootIsScheduled(){\n  // ...\n\xa0 newCallbackNode = scheduleCallback(schedulerPriorityLevel,performConcurrentWorkOnRoot.bind(null, root))\n\n\xa0 root.callbackNode = newCallbackNode\n}\n")),(0,o.kt)("h2",{id:"\u4e24\u4e2a\u51fd\u6570\u533a\u522b-workloopconcurrent-workloopsync"},"\u4e24\u4e2a\u51fd\u6570\u533a\u522b workLoopConcurrent workLoopSync"),(0,o.kt)("p",null,"\u5b83\u4eec\u552f\u4e00\u7684\u533a\u522b\u662f\u662f\u5426\u8c03\u7528shouldYield\u3002\u5982\u679c\u5f53\u524d\u6d4f\u89c8\u5668\u5e27\u6ca1\u6709\u5269\u4f59\u65f6\u95f4\uff0cshouldYield\u4f1a\u4e2d\u6b62\u5faa\u73af\uff0c\u76f4\u5230\u6d4f\u89c8\u5668\u6709\u7a7a\u95f2\u65f6\u95f4\u540e\u518d\u7ee7\u7eed\u904d\u5386\u3002"),(0,o.kt)("p",null,"workInProgress\u4ee3\u8868\u5f53\u524d\u5df2\u521b\u5efa\u7684 workInProgress fiber\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function workLoopConcurrent() {\n  // Perform work until Scheduler asks us to yield\n  while (workInProgress !== null && !shouldYield()) {\n    performUnitOfWork(workInProgress);\n  }\n}\n\nfunction workLoopSync() {\n  // Already timed out, so perform work without checking if we need to yield.\n  while (workInProgress !== null) {\n    performUnitOfWork(workInProgress);\n  }\n}\n")),(0,o.kt)("h2",{id:"\u51fd\u6570\u5185\u6267\u884c\u7684\u5173\u952e\u51fd\u6570"},"\u51fd\u6570\u5185\u6267\u884c\u7684\u5173\u952e\u51fd\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"flushPassiveEffects \uff1a\u6267\u884c\u67d0\u4e9b\u526f\u4f5c\u7528"),(0,o.kt)("li",{parentName:"ul"},"ensureRootIsScheduled \uff1a\u5f62\u6210\u9012\u5f52\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"renderRootConcurrent \uff1a\u4e0e renderRootSync \u53ea\u80fd\u4e24\u9009\u4e00\uff0c\u5982\u679c\u6267\u884c\u7684\u662frenderRootConcurrent \uff0c\u6700\u540e\u4f1a\u6267\u884c finishConcurrentRender"),(0,o.kt)("li",{parentName:"ul"},"renderRootSync \uff1a \u4e0e renderRootConcurrent \u4e8c\u9009\u4e00"),(0,o.kt)("li",{parentName:"ul"},"finishConcurrentRender \uff1a\u6267\u884c\u5b8c\u6210\u5e76\u53d1\u6e32\u67d3\u7684\u540e\u7f6e\u64cd\u4f5c\uff08\u6211\u4f30\u8ba1\u662f\u8fd9\u6837\u7684\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function performConcurrentWorkOnRoot(root, didTimeout) {\n  {\n    resetNestedUpdateFlag();\n  } // Since we know we're in a React event, we can clear the current\n  // event time. The next update will compute a new event time.\n\n  console.log('performConcurrentWorkOnRoot:\u540c\u6b65\u66f4\u65b0concurrent\u6a21\u5f0f');\n  currentEventTime = NoTimestamp;\n  currentEventTransitionLane = NoLanes;\n\n  if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {\n    throw new Error('Should not already be working.');\n  } // Flush any pending passive effects before deciding which lanes to work on,\n  // in case they schedule additional work.\n\n\n  var originalCallbackNode = root.callbackNode;\n  var didFlushPassiveEffects = flushPassiveEffects();\n\n  if (didFlushPassiveEffects) {\n    // Something in the passive effect phase may have canceled the current task.\n    // Check if the task node for this root was changed.\n    if (root.callbackNode !== originalCallbackNode) {\n      // The current task was canceled. Exit. We don't need to call\n      // `ensureRootIsScheduled` because the check above implies either that\n      // there's a new task, or that there's no remaining work on this root.\n      return null;\n    }\n  } // Determine the next lanes to work on, using the fields stored\n  // on the root.\n\n\n  var lanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);\n\n  if (lanes === NoLanes) {\n    // Defensive coding. This is never expected to happen.\n    return null;\n  } // We disable time-slicing in some cases: if the work has been CPU-bound\n  // for too long (\"expired\" work, to prevent starvation), or we're in\n  // sync-updates-by-default mode.\n  // TODO: We only check `didTimeout` defensively, to account for a Scheduler\n  // bug we're still investigating. Once the bug in Scheduler is fixed,\n  // we can remove this, since we track expiration ourselves.\n\n\n  var shouldTimeSlice = !includesBlockingLane(root, lanes) && !includesExpiredLane(root, lanes) && (!didTimeout);\n  var exitStatus = shouldTimeSlice ? renderRootConcurrent(root, lanes) : renderRootSync(root, lanes);\n\n  if (exitStatus !== RootInProgress) {\n    if (exitStatus === RootErrored) {\n      // If something threw an error, try rendering one more time. We'll\n      // render synchronously to block concurrent data mutations, and we'll\n      // includes all pending updates are included. If it still fails after\n      // the second attempt, we'll give up and commit the resulting tree.\n      var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);\n\n      if (errorRetryLanes !== NoLanes) {\n        lanes = errorRetryLanes;\n        exitStatus = recoverFromConcurrentError(root, errorRetryLanes);\n      }\n    }\n\n    if (exitStatus === RootFatalErrored) {\n      var fatalError = workInProgressRootFatalError;\n      prepareFreshStack(root, NoLanes);\n      markRootSuspended$1(root, lanes);\n      ensureRootIsScheduled(root, now());\n      throw fatalError;\n    }\n\n    if (exitStatus === RootDidNotComplete) {\n      // The render unwound without completing the tree. This happens in special\n      // cases where need to exit the current render without producing a\n      // consistent tree or committing.\n      //\n      // This should only happen during a concurrent render, not a discrete or\n      // synchronous update. We should have already checked for this when we\n      // unwound the stack.\n      markRootSuspended$1(root, lanes);\n    } else {\n      // The render completed.\n      // Check if this render may have yielded to a concurrent event, and if so,\n      // confirm that any newly rendered stores are consistent.\n      // TODO: It's possible that even a concurrent render may never have yielded\n      // to the main thread, if it was fast enough, or if it expired. We could\n      // skip the consistency check in that case, too.\n      var renderWasConcurrent = !includesBlockingLane(root, lanes);\n      var finishedWork = root.current.alternate;\n\n      if (renderWasConcurrent && !isRenderConsistentWithExternalStores(finishedWork)) {\n        // A store was mutated in an interleaved event. Render again,\n        // synchronously, to block further mutations.\n        exitStatus = renderRootSync(root, lanes); // We need to check again if something threw\n\n        if (exitStatus === RootErrored) {\n          var _errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);\n\n          if (_errorRetryLanes !== NoLanes) {\n            lanes = _errorRetryLanes;\n            exitStatus = recoverFromConcurrentError(root, _errorRetryLanes); // We assume the tree is now consistent because we didn't yield to any\n            // concurrent events.\n          }\n        }\n\n        if (exitStatus === RootFatalErrored) {\n          var _fatalError = workInProgressRootFatalError;\n          prepareFreshStack(root, NoLanes);\n          markRootSuspended$1(root, lanes);\n          ensureRootIsScheduled(root, now());\n          throw _fatalError;\n        }\n      } // We now have a consistent tree. The next step is either to commit it,\n      // or, if something suspended, wait to commit it after a timeout.\n\n\n      root.finishedWork = finishedWork;\n      root.finishedLanes = lanes;\n      finishConcurrentRender(root, exitStatus, lanes);\n    }\n  }\n\n  ensureRootIsScheduled(root, now());\n\n  if (root.callbackNode === originalCallbackNode) {\n    // The task node scheduled for this root is the same one that's\n    // currently executed. Need to return a continuation.\n    return performConcurrentWorkOnRoot.bind(null, root);\n  }\n\n  return null;\n}\n")),(0,o.kt)("h2",{id:"renderrootconcurrent"},"renderRootConcurrent"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5b9e\u73b0\u7684\u903b\u8f91\u4e3b\u8981\u5982\u4e0b:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8bb0\u5f55\u539f\u6765\u7684 executionContext\uff0c \u7136\u540e\u7ed9 executionContext \u589e\u52a0\u6e32\u67d3\u4e0a\u4e0b\u6587 RenderContext"),(0,o.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u73b0\u573a\u2014\u2014\u5c06 dispatcher \u5b58\u5165\u6808"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u95ee\u9898\u5219\u91cd\u7f6e timer\uff0c\u5e76 prepareFreshStack"),(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u4e00\u770b\u5c31\u5f88\u5173\u952e\u7684 workLoopConcurrent"),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u7f6e\u4e0a\u4e0b\u6587\u4f9d\u8d56\uff0c\u5373\u8c03\u7528 resetContextDependencies"),(0,o.kt)("li",{parentName:"ol"},"\u56de\u590d\u73b0\u573a\u2014\u2014\u4ece\u6808\u4e2d pop dispatcher"),(0,o.kt)("li",{parentName:"ol"},"\u6062\u590d\u539f\u6765\u7684 executionContext"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c workInProgress \u4e0d\u4e3a null\uff0c\u7136\u540e\u8fd4\u56de RootIncomplete \u72b6\u6001\uff0c\u5426\u5219\u91cd\u7f6e workInProgressRoot \u548c workInProgressRootRenderLanes\uff0c\u8fd4\u56de workInProgressRootExitStatus \u72b6\u6001")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function renderRootConcurrent(root, lanes) {\n  var prevExecutionContext = executionContext;\n  executionContext |= RenderContext;\n  var prevDispatcher = pushDispatcher(); // If the root or lanes have changed, throw out the existing stack\n  // and prepare a fresh one. Otherwise we'll continue where we left off.\n\n  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {\n    {\n      if (isDevToolsPresent) {\n        var memoizedUpdaters = root.memoizedUpdaters;\n\n        if (memoizedUpdaters.size > 0) {\n          restorePendingUpdaters(root, workInProgressRootRenderLanes);\n          memoizedUpdaters.clear();\n        } // At this point, move Fibers that scheduled the upcoming work from the Map to the Set.\n        // If we bailout on this work, we'll move them back (like above).\n        // It's important to move them now in case the work spawns more work at the same priority with different updaters.\n        // That way we can keep the current update and future updates separate.\n\n\n        movePendingFibersToMemoized(root, lanes);\n      }\n    }\n\n    workInProgressTransitions = getTransitionsForLanes();\n    resetRenderTimer();\n    prepareFreshStack(root, lanes);\n  }\n\n  {\n    markRenderStarted(lanes);\n  }\n\n  do {\n    try {\n      workLoopConcurrent();\n      break;\n    } catch (thrownValue) {\n      handleError(root, thrownValue);\n    }\n  } while (true);\n\n  resetContextDependencies();\n  popDispatcher(prevDispatcher);\n  executionContext = prevExecutionContext;\n\n\n  if (workInProgress !== null) {\n    // Still work remaining.\n    {\n      markRenderYielded();\n    }\n\n    return RootInProgress;\n  } else {\n    // Completed the tree.\n    {\n      markRenderStopped();\n    } // Set this to null to indicate there's no in-progress render.\n\n\n    workInProgressRoot = null;\n    workInProgressRootRenderLanes = NoLanes; // Return the final exit status.\n\n    return workInProgressRootExitStatus;\n  }\n}\n")),(0,o.kt)("h2",{id:"workloopconcurrent"},"workLoopConcurrent"),(0,o.kt)("p",null,"\u4f5c\u7528: \u6301\u7eed\u8c03\u7528 performUnitOfWork \u76f4\u5230 workInProgress \u4e3a\u7a7a\u6216\u8005 shouldYield \u51fd\u6570\u8fd4\u56de false\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shouldYield \u5c31\u662f scheduler \u5e93\u91cc\u7684 unstable_shouldYield \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u7684\u4f5c\u7528\u662f\u5f53\u5904\u4e8e\u9700\u8981\u4e2d\u65ad react\u7684\u6e32\u67d3\uff0c\u5c06\u63a7\u5236\u4ea4\u8fd8\u7ed9\u201c\u4e3b\u7ebf\u7a0b\u201d\u7684\u573a\u666f\u65f6\u8fd4\u56de true\uff0c\u5177\u4f53\u6765\u8bf4\u5c31\u662f\u5f53\u524d\u65f6\u95f4\u8ddd\u79bb\u5168\u5c40\u53d8\u91cf startTime \u7684\u95f4\u9694\u5c0f\u4e8e\u5e27\u6700\u5c0f\u95f4\u9694\uff08\u7ea6\u4e3a 5ms\uff09\u7684\u65f6\u5019\u8fd4\u56de true\u3002\n")),(0,o.kt)("h2",{id:"performunitofwork"},"performUnitOfWork"),(0,o.kt)("p",null,"\u4e3b\u8981\u662f\u6267\u884c beginWork \u903b\u8f91\uff0c\u7136\u540e\u5c06 workInProgress.pedingProps \u7684\u5185\u5bb9\u590d\u5236\u7ed9 workInProgress.memoizedProps, \u6700\u540e ReactCurrentOwner.current \u91cd\u7f6e\u4e3a null\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function performUnitOfWork (unitOfWork: Fiber): void {\n  const current = unitOfWork.alternate\n  setCurrentDebugFiberInDEV(unitOfWork)\n  let next = beginWork(current, unitOfWork, subtreeRenderLanes)\n  unitOfWork.memoizedProps = unitOfWork.pendingProps\n  if (next === null) {\n    completeUnitOfWork(unitOfWork)\n  } else {\n    workInProgress = next\n  }\n\n  ReactCurrentOwner.current = null\n}\n")),(0,o.kt)("h2",{id:"beginwork"},"beginWork"),(0,o.kt)("p",null,"\u76f4\u5230\u73b0\u5728\uff0c\u6211\u4eec\u4ecd\u6ca1\u770b\u5230 react \u662f\u5982\u4f55\u5b9e\u73b0 dom \u7684\u66f4\u65b0\u7684\uff0cdom diff \u53c8\u662f\u5982\u4f55\u8fdb\u884c\u7684\uff0c\u800c\u8fd9\u90e8\u5206\u903b\u8f91\u9690\u85cf\u5728 beginWork \u4e4b\u4e0b\uff0c\u660e\u5929\u6211\u4eec\u518d\u6765\u7785\u4e00\u7785 beginWork \u7684\u5b9e\u73b0\u3002"))}p.isMDXComponent=!0}}]);