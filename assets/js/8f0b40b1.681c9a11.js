"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4754],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69060:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"React/react\u51fd\u6570\u89e3\u6790/beginWork\u7684\u5b9e\u73b0",id:"React/react\u51fd\u6570\u89e3\u6790/beginWork\u7684\u5b9e\u73b0",title:"beginWork\u7684\u5b9e\u73b0",description:"\u5728 beginWork \u4e2d\u6709\u5f88\u591a\u9488\u5bf9 fiber \u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u5728\u6b63\u5f0f\u770b beginWork \u7684\u6d41\u7a0b\u4e4b\u524d\uff0c\u5148\u7814\u7a76\u4e00\u4e0b Fiber \u7684\u7ed3\u6784\u3002",source:"@site/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/06-beginWork\u7684\u5b9e\u73b0.md",sourceDirName:"React/00-react\u51fd\u6570\u89e3\u6790",slug:"/React/react\u51fd\u6570\u89e3\u6790/beginWork\u7684\u5b9e\u73b0",permalink:"/React/react\u51fd\u6570\u89e3\u6790/beginWork\u7684\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/06-beginWork\u7684\u5b9e\u73b0.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"FiberRootNode-18",permalink:"/React/react\u51fd\u6570\u89e3\u6790/FiberRootNode-18"},next:{title:"legacyCreateRootFromDOMContainer\u91cd\u70b9\u65b9\u6cd5-18",permalink:"/React/react\u51fd\u6570\u89e3\u6790/legacyCreateRootFromDOMContainer\u91cd\u70b9\u65b9\u6cd5-18"}},c={},p=[{value:"beginWork \u903b\u8f91",id:"beginwork-\u903b\u8f91",level:2},{value:"updateFunctionComponent",id:"updatefunctioncomponent",level:2}],u={toc:p},s="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(s,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 beginWork \u4e2d\u6709\u5f88\u591a\u9488\u5bf9 fiber \u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u5728\u6b63\u5f0f\u770b beginWork \u7684\u6d41\u7a0b\u4e4b\u524d\uff0c\u5148\u7814\u7a76\u4e00\u4e0b Fiber \u7684\u7ed3\u6784\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\xa0type Fiber = {|\n\xa0 \xa0// \u8868\u793aFiber\u7684\u7c7b\u578b\n\xa0 \xa0tag: WorkTag,\n\xa0\n\xa0 \xa0// child \u7684\u552f\u4e00\u6807\u8bc6\u7b26\n\xa0 \xa0key: null | string,\n\xa0\n\xa0 \xa0// element.type \u7684\u503c\uff0c\u7528\u4e8e\u5728 diff \u5b50\u9879\u671f\u95f4\u4fdd\u7559\u6807\u8bc6\n\xa0 \xa0elementType: any,\n\xa0 \xa0\n\xa0 \xa0// \u4e0e fiber \u5173\u8054\u7684\u51fd\u6570\u6216\u7c7b\n\xa0 \xa0type: any,\n\xa0\n\xa0 \xa0// fiber \u5173\u8054\u7684\u5c40\u90e8\u72b6\u6001\n\xa0 \xa0stateNode: any,\n\xa0\n\xa0 \xa0// \u6211\u4eec\u6b63\u5728\u5904\u7406\u7684\u4e1c\u897f\u7684\u7236\u5bf9\u8c61\u3002\u6982\u5ff5\u4e0a\u4e0e\u5806\u6808\u5e27\u7684\u8fd4\u56de\u5730\u5740\u76f8\u540c\u3002\n\xa0 \xa0return: Fiber | null,\n\xa0\n\xa0 \xa0// \u7528\u957f\u5b50-\u5144\u5f1f\u94fe\u8868\u8868\u793a\u6cd5\u8868\u793a\u4e00\u68f5Fiber\u6811\n\xa0 \xa0child: Fiber | null,\n\xa0 \xa0sibling: Fiber | null,\n\xa0 \xa0index: number,\n\xa0 \xa0\n\xa0 \xa0// \u6700\u540e\u4e00\u4e2a\u7528\u4e8e\u7ed1\u5b9a\u672c\u7ed3\u70b9\u7684 ref\uff0c\u4e0d\u80fd\u7ed1\u5b9a\u5230\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0a\u3002\n\xa0 \xa0ref:\n\xa0 \xa0 \xa0| null\n\xa0 \xa0 \xa0| (((handle: mixed) => void) & {_stringRef: ?string, ...})\n\xa0 \xa0 \xa0| RefObject,\n\xa0\n\xa0 \xa0// \u7b49\u5f85 Fiber \u5904\u7406\u7684 props\n\xa0 \xa0pendingProps: any,\n\xa0 \xa0memoizedProps: any, //\u7528\u4e8e\u521b\u5efa\u4ea7\u51fa\u7684 props\n\xa0\n\xa0 \xa0// \u72b6\u6001\u66f4\u65b0\u548c\u56de\u8c03\u7684\u961f\u5217\n\xa0 \xa0updateQueue: mixed,\n\xa0\n\xa0 \xa0// \u7528\u4e8e\u521b\u5efa\u8f93\u51fa\u7684\u72b6\u6001\n\xa0 \xa0memoizedState: any,\n\xa0\n\xa0 \xa0// fiber \u7684\u4f9d\u8d56\u9879\u53ef\u80fd\u662f context \u6216 event\n\xa0 \xa0dependencies: Dependencies | null,\n\xa0\n\xa0 \xa0// \u63cf\u8ff0 fiber \u548c\u5b83\u7684\u5b50\u6811\u7684\u6027\u8d28\u7684\u4f4d\u57df\u3002\u6bd4\u5982 ConcurrentMode flag \u8868\u793a\u5b50\u6811\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5f02\u6b65\u7684\u3002\u5f53 fiber \u88ab\u521b\u5efa\u65f6\uff0c\u5b83\u7684 mode \u4f1a\u7ee7\u627f\u7236 fiber \u7684 mode\uff0c\u4e5f\u53ef\u4ee5\u5728\u521b\u5efa\u7684\u65f6\u5019\u6dfb\u52a0\u66f4\u591a\u7684 flag\uff0c\u4f46\u662f\u521b\u5efa\u4e4b\u540e\uff0c\u5728 fiber \u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u90fd\u4e0d\u5e94\u8be5\u518d\u88ab\u6539\u53d8\u3002\n\xa0 \xa0mode: TypeOfMode,\n\xa0\n\xa0 \xa0// Effect\n\xa0 \xa0flags: Flags,\n\xa0 \xa0subtreeFlags: Flags,\n\xa0 \xa0deletions: Array<Fiber> | null,\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\n\xa0 \xa0// \u526f\u4f5c\u7528 fiber \u94fe\u8868\u4e2d\u5f53\u524d fiber \u7684 next \u6307\u9488 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\n\xa0 \xa0nextEffect: Fiber | null,\n\xa0 \xa0// \u526f\u4f5c\u7528 fiber \u94fe\u8868\u7684\u5934\u6307\u9488 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n\xa0 \xa0firstEffect: Fiber | null,\n\xa0 \xa0// \u526f\u4f5c\u7528 fiber \u94fe\u8868\u7684\u5c3e\u6307\u9488\n\xa0 \xa0lastEffect: Fiber | null,\n\xa0\n\xa0 \xa0lanes: Lanes,\n\xa0 \xa0childLanes: Lanes,\n\xa0\n\xa0 \xa0// \u8fd9\u662f fiber \u7684\u66f4\u65b0\u5408\u5e76\u540e\u7684\u7248\u672c \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n\xa0 \xa0alternate: Fiber | null,\n\xa0\n\xa0 \xa0// \u7701\u7565\u8c03\u8bd5\u76f8\u5173\u548c profiler \u76f8\u5173\u5b57\u6bb5\n\xa0|};\n")),(0,o.kt)("h2",{id:"beginwork-\u903b\u8f91"},"beginWork \u903b\u8f91"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u65b0\u65e7 props \u53d1\u751f\u53d8\u5316\u6216\u8005\u6d88\u8d39\u7684 context \u53d1\u751f\u4e86\u6539\u53d8\uff0c\u5219 didReceiveUpdate = true")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u8c03 checkScheduledUpdateOrContext \u51fd\u6570\uff0c\u5982\u679c\u8fd4\u56de\u503c\u4e3a false \u5e76\u4e14 workInProgress.flags & DidCapture) === NoFlags\uff0c\u5219\u8bbe\u7f6e didReceiveUpdate \u4e3a false\uff0c\u8c03\u7528attemptEarlyBailoutIfNoScheduledUpdate \u5e76\u8fd4\u56de\u5176\u8fd4\u56de\u503c")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6839\u636e workInProgress.tag \u7684\u503c\u8c03\u7528\u4e0d\u540c\u7684\u64cd\u4f5c\uff0c\u5176\u4e2d\u51fd\u6570\u7ec4\u4ef6\u7684\u64cd\u4f5c\u5982\u4e0b\uff0c\u5173\u952e\u662f\u8c03\u7528\u4e86 updateFunctionComponent \u51fd\u6570"))),(0,o.kt)("p",null,"PS\uff1a\u65b0 props \u6307 workInProgress.pendingProps\uff0c\u65e7 props \u6307 current.memoizedProps\uff0c\u5373\u4fbf\u65b0\u65e7 props \u6ca1\u6709\u53d8\u5316\u6216\u8005 context \u6ca1\u6709\u6539\u53d8\uff0c\u4e5f\u4e0d\u80fd\u7acb\u5373\u5f97\u51fa fiber \u4e0d\u9700\u8981\u66f4\u65b0\u7684\u7ed3\u8bba\uff0c\u56e0\u4e3a\u5982\u679c\u7b2c\u4e8c\u6b21\u4f20\u9012 error \u6216 suspense \u8fb9\u754c\uff0c\u53ef\u80fd\u5728 current \u4e0a\u4e0d\u5b58\u5728 work \u7684\u8c03\u5ea6\u3002\u6240\u4ee5\u9700\u8981\u8c03\u7528 checkScheduledUpdateOrContext \u8fdb\u884c\u68c0\u67e5\u3002"),(0,o.kt)("h2",{id:"updatefunctioncomponent"},"updateFunctionComponent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," function updateFunctionComponent (\n   current,\n   workInProgress,\n   Component,\n   nextProps: any,\n   renderLanes,\n ) {}\n")),(0,o.kt)("p",null,"\u6838\u5fc3\u903b\u8f91\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5904\u7406 context\uff08\u8c03 getUnmaskedContext\u3001getMaskedContext \u548c prepareToReadContext\uff09\uff0c\u7136\u540e\u6267\u884c renderWithHooks \u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c current \u4e0d\u4e3a null \u4e14 didReceiveUpdate \u4e3afalse\uff0c\u5219\u6267\u884c bailoutHooks \u51fd\u6570\u548c bailoutOnAlreadyFinishedWork \u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u540e\u8005\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c getIsHydrating() \u4e3a true\uff0c\u5e76\u4e14 checkDidRenderIdHook() \u4e3a true\uff0c\u5219\u8c03\u7528 pushMaterializedTreeId(workInProgress) \u51fd\u6570"),(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c reconcileChildren \u51fd\u6570\n\u8fd4\u56de workInProgress.child")))}d.isMDXComponent=!0}}]);