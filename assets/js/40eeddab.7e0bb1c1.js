"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,k=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(k,u(u({ref:t},c),{},{components:n})):a.createElement(k,u({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,u=new Array(r);u[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,u[1]=s;for(var i=2;i<r;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={title:"hook\u548c\u95ed\u5305",sidebar_position:7},u=void 0,s={unversionedId:"React/hook\u548c\u95ed\u5305",id:"React/hook\u548c\u95ed\u5305",title:"hook\u548c\u95ed\u5305",description:"hooks\u539f\u7406:\u95ed\u5305\u548c\u94fe\u8868",source:"@site/programming-tech/React/07-hook\u548c\u95ed\u5305.md",sourceDirName:"React",slug:"/React/hook\u548c\u95ed\u5305",permalink:"/React/hook\u548c\u95ed\u5305",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/07-hook\u548c\u95ed\u5305.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"hook\u548c\u95ed\u5305",sidebar_position:7},sidebar:"docs",previous:{title:"hooks\u7684\u521d\u59cb\u5316\u548csetState\u7ec4\u4ef6\u66f4\u65b0",permalink:"/React/hooks\u7684\u521d\u59cb\u5316\u548csetState\u7ec4\u4ef6\u66f4\u65b0"},next:{title:"mountIndeterminateComponent\u6784\u5efafiber\u6811",permalink:"/React/mountIndeterminateComponent\u6784\u5efafiber\u6811"}},l={},i=[{value:"hooks\u539f\u7406:\u95ed\u5305\u548c\u94fe\u8868",id:"hooks\u539f\u7406\u95ed\u5305\u548c\u94fe\u8868",level:2},{value:"hooks\u4e2d\u7684\u95ed\u5305",id:"hooks\u4e2d\u7684\u95ed\u5305",level:2},{value:"\u4f8b\u5b50-Hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406",id:"\u4f8b\u5b50-hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406",level:3},{value:"updateReducer",id:"updatereducer",level:3},{value:"Hooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u5728 Fiber memoizedState \u5c5e\u6027\u8eab\u4e0a",id:"hooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u5728-fiber-memoizedstate-\u5c5e\u6027\u8eab\u4e0a",level:2},{value:"hook\u7ed3\u6784",id:"hook\u7ed3\u6784",level:2},{value:"\u5efa\u7acb\u94fe\u8868\u7684\u903b\u8f91\u5728dispatchSetState--&gt;enqueueUpdate$1",id:"\u5efa\u7acb\u94fe\u8868\u7684\u903b\u8f91\u5728dispatchsetstate--enqueueupdate1",level:2},{value:"\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u7684\u76f8\u5173\u4ee3\u7801\u903b\u8f91\u5b58\u5728\u4e8eupdateReducer\u4e2d\uff1a",id:"\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u7684\u76f8\u5173\u4ee3\u7801\u903b\u8f91\u5b58\u5728\u4e8eupdatereducer\u4e2d",level:2},{value:"\u8f85-\u5355\u5411\u94fe\u8868js\u5b9e\u73b0",id:"\u8f85-\u5355\u5411\u94fe\u8868js\u5b9e\u73b0",level:3},{value:"useEffect \u7ed3\u6784",id:"useeffect-\u7ed3\u6784",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hooks\u539f\u7406\u95ed\u5305\u548c\u94fe\u8868"},"hooks\u539f\u7406:\u95ed\u5305\u548c\u94fe\u8868"),(0,o.kt)("p",null,"\u6d4b\u8bd5\u5b9e\u4f8b\uff1a\u4f8b9-\u6d4b\u8bd5\u7236\u5b50\u7ec4\u4ef6.html"),(0,o.kt)("p",null,"state \u94fe\u8868\u4e0d\u662fhooks\u72ec\u6709\u7684\uff0c\u64cd\u4f5c\u7684setState\u4e5f\u5b58\u5728\uff0c\u6b63\u662f\u7531\u4e8e\u8fd9\u4e2a\u94fe\u8868\u5b58\u5728\uff0c\u6240\u4ee5\u6709\u4e00\u4e2a\u7ecf\u5178React \u9762\u8bd5\u9898\uff1a"),(0,o.kt)("p",null,"setState\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u662f\u5f02\u6b65\uff0c\u4ec0\u4e48\u65f6\u5019\u662f\u540c\u6b65\uff1f"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"./setState%E5%BC%82%E6%AD%A5-%E5%90%8C%E6%AD%A5"},"React/setState\u7684\u5f02\u6b65\u548c\u540c\u6b65\u95ee\u9898")),(0,o.kt)("h2",{id:"hooks\u4e2d\u7684\u95ed\u5305"},"hooks\u4e2d\u7684\u95ed\u5305"),(0,o.kt)("p",null,"\u524d\u8a00\uff1a\u5b9a\u4e49\u4e00\u4e2aReact\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u4f7f\u7528\uff0c\u8fd9\u548c\u95ed\u5305\u6709\u5173\u7cfb\u5417\uff1f"),(0,o.kt)("p",null,"\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"Sub"),"\u5728render\u4e2d\u6267\u884c\u65f6\uff0c\u8bbf\u95ee\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"Test"),"\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002\n\u53c2\u8003\uff1a\u7236\u5b50\u7ec4\u4ef6\u7f16\u8bd1\u540e.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(Sub, { obj: obj })\n")),(0,o.kt)("h3",{id:"\u4f8b\u5b50-hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406"},"\u4f8b\u5b50-Hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406"),(0,o.kt)("p",null,"\u5f53useState\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Test()"),"\u7ec4\u4ef6\u4e2d\u6267\u884c\u65f6\uff0c\u8bbf\u95ee\u4e86state\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002"),(0,o.kt)("p",null,"\u6839\u636e\u95ed\u5305\u7684\u7279\u6027\uff0cstate\u6a21\u5757\u4e2d\u7684state\u53d8\u91cf\uff0c\u4f1a\u6301\u4e45\u5b58\u5728\u3002\u56e0\u6b64\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"Test()"),"\u518d\u6b21\u6267\u884c\u65f6\uff0c\u6211\u4eec\u4e5f\u80fd\u83b7\u53d6\u5230\u4e0a\u4e00\u6b21",(0,o.kt)("inlineCode",{parentName:"p"},"Test()"),"\u6267\u884c\u7ed3\u675f\u65f6state\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"updatereducer"},"updateReducer"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765updateReducer\uff0c\u903b\u8f91\u6bd4\u8f83\u590d\u6742"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"./hooks%E7%9A%84%E5%88%9D%E5%A7%8B%E5%8C%96%E5%92%8CsetState%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0"},"hooks\u7684\u521d\u59cb\u5316\u548csetState\u7ec4\u4ef6\u66f4\u65b0-\u66f4\u65b0\u9636\u6bb5-updateReducer")),(0,o.kt)("h2",{id:"hooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u5728-fiber-memoizedstate-\u5c5e\u6027\u8eab\u4e0a"},"Hooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u5728 Fiber memoizedState \u5c5e\u6027\u8eab\u4e0a"),(0,o.kt)("p",null,"\u4ece\u6e90\u7801\u6ce8\u91ca\u53ef\u4ee5\u770b\u51fahooks\u94fe\u8868\u4e0efiber\u94fe\u8868\u662f\u6781\u5176\u76f8\u4f3c\u7684\uff1b\u4e5f\u5f97\u77e5hooks \u94fe\u8868\u662f\u4fdd\u5b58\u5728fiber\u8282\u70b9\u7684memoizedState\u5c5e\u6027\u7684, "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/*\nHooks are stored as a linked list on the fiber's memoizedState field.  \nhooks \u4ee5\u94fe\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728fiber\u8282\u70b9\u7684memoizedState\u5c5e\u6027\u4e0a\nThe current hook list is the list that belongs to the current fiber.\n\u5f53\u524d\u7684hook\u94fe\u8868\u5c31\u662f\u5f53\u524d\u6b63\u5728\u904d\u5386\u7684fiber\u8282\u70b9\u4e0a\u7684\nThe work-in-progress hook list is a new list that will be added to the work-in-progress fiber.\nwork-in-progress hook \u5c31\u662f\u5373\u5c06\u88ab\u6dfb\u52a0\u5230\u6b63\u5728\u904d\u5386fiber\u8282\u70b9\u7684hooks\u65b0\u94fe\u8868\n*/\n")),(0,o.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21\u66f4\u65b0\u65f6\uff0c\u518d\u6b21\u6267\u884chook\uff0c\u5c31\u4f1a\u53bb\u83b7\u53d6\u5f53\u524d\u8fd0\u884c\u8282\u70b9\u7684hooks\u94fe\u8868\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const hook = updateWorkInProgressHook();\n// updateWorkInProgressHook \u5c31\u662f\u4e00\u4e2a\u7eaf\u94fe\u8868\u7684\u64cd\u4f5c\uff1a\u6307\u5411\u4e0b\u4e00\u4e2a hook\u8282\u70b9\n")),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48hooks\u4e0d\u80fd\u5728\u5faa\u73af\u6216\u5219\u5224\u65ad\u8bed\u53e5\u4e2d\u8c03\u7528\uff0c\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u4f7f\u7528\uff0c\u56e0\u4e3a\u6302\u8f7d\u6216\u5219\u66f4\u65b0\u65f6\uff0c\u8fd9\u4e2a\u961f\u5217\u9700\u8981\u662f\u4e00\u81f4\u7684\uff0c\u624d\u80fd\u4fdd\u8bc1hooks\u7684\u7ed3\u679c\u6b63\u786e\u3002"),(0,o.kt)("mermaid",{value:"graph LR\n1[Fiber] --memoized--\x3e 2[userState] --next--\x3e3[userState]--next--\x3e4[userState]--next--\x3e5[useEffect]--\x3e6[useEffect]"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<script type=\"text/babel\">\n  function Test() {\n    const [data, setData] = React.useState('\u6539\u53d8\u6211')\n    const [showDiv, setShowDiv] = React.useState(false)\n    const [obj, setObj] = React.useState({ test: 1, test2: 2 })\n\n    // \u7701\u7565\n  }\n<\/script> \n")),(0,o.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e09\u4e2auseState hooks,\u5982\u56fe\u53ef\u89c1\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u6307\u5411\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"next:null"),"\n",(0,o.kt)("img",{src:n(65341).Z,width:"903",height:"768"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<script type=\"text/babel\">\n  function Test() {\n    const [data, setData] = React.useState('\u6539\u53d8\u6211')\n    const [showDiv, setShowDiv] = React.useState(false)\n    const [obj, setObj] = React.useState({ test: 1, test2: 2 })\n\n    React.useEffect(() => {\n      console.log('=\u526f\u4f5c\u7528-useEffect--\x3e\u8fd0\u884c');\n      return () => {\n        console.log('useEffect\u9500\u6bc1\u65f6\u89e6\u53d1\u7684\u56de\u8c03');\n      };\n    }, [])\n\n    React.useLayoutEffect(() => {\n      console.log('=\u526f\u4f5c\u7528-useLayoutEffect--\x3e\u8fd0\u884c');\n    }, [])\n    // \u7701\u7565\n  }\n<\/script> \n")),(0,o.kt)("p",null,"\u5b9a\u4e49\u4e863\u4e2auseState hooks,2\u4e2aeffect hooks,\u5982\u56fe\u53ef\u89c1effect hooks\u7684memoizedState\n\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a\u73af\u5f62"),",next\u53c8\u6307\u5411\u4e86\u53e6\u4e00\u4e2aeffect hook\u8282\u70b9"),(0,o.kt)("h2",{id:"hook\u7ed3\u6784"},"hook\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function mountWorkInProgressHook() {\n  var hook = {\n    memoizedState: null, // \u4e0a\u6b21\u6e32\u67d3\u65f6\u6240\u7528\u7684 state\n    baseState: null, // \u5df2\u5904\u7406\u7684 update \u8ba1\u7b97\u51fa\u7684 state\n    baseQueue: null, // \u672a\u5904\u7406\u7684 update \u961f\u5217\uff08\u4e00\u822c\u662f\u4e0a\u4e00\u8f6e\u6e32\u67d3\u672a\u5b8c\u6210\u7684 update\uff09\n    queue: null, // \u5f53\u524d\u51fa\u53d1\u7684 update \u961f\u5217\n    next: null // \u6307\u5411\u4e0b\u4e00\u4e2a hook\uff0c\u5f62\u6210\u94fe\u8868\u7ed3\u6784\n  };\n\n  if (workInProgressHook === null) {\n    // This is the first hook in the list\n    console.log('=useState=dom=\u8c03\u7528workInProgressHook \u521d\u59cb\u5316 1:', { hook, workInProgressHook })\n    currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;\n  } else {\n    // Append to the end of the list\n    workInProgressHook = workInProgressHook.next = hook;\n    console.log('=useState=dom=\u8c03\u7528workInProgressHook 2 \u6dfb\u52a0\u5230list \u672b\u5c3e:', { hook, workInProgressHook })\n  }\n\n  return workInProgressHook;\n}\n")),(0,o.kt)("h2",{id:"\u5efa\u7acb\u94fe\u8868\u7684\u903b\u8f91\u5728dispatchsetstate--enqueueupdate1"},"\u5efa\u7acb\u94fe\u8868\u7684\u903b\u8f91\u5728dispatchSetState--\x3eenqueueUpdate$1"),(0,o.kt)("p",null,"\u6bcf\u4e2a useXxx \u7684 hooks \u90fd\u6709 mountXxx \u548c updateXxx \u4e24\u4e2a\u9636\u6bb5\u3002\u94fe\u8868\u53ea\u521b\u5efa\u4e00\u6b21\uff0c\u5728 mountXxx \u5f53\u4e2d\uff0c\u540e\u9762\u90fd\u662f update\u3002"),(0,o.kt)("p",null,"\u4ee5 useState \u4e3a\u4f8b\uff0cmount \u65f6\u4f1a\u8fdb\u5165 HooksDispatcherOnMountInDEV \u7684 useState\u65b9\u6cd5\uff0c\u6700\u7ec8\u6267\u884c mountState"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./dispatchSetState-hooks%E6%BA%90%E7%A0%81"},"dispatchSetState-hooks\u6e90\u7801")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function dispatchSetState(fiber, queue, action) {\n  // \u7701\u7565..\n  // \u521b\u5efa\u4e00\u4e2a update \u66f4\u65b0\u5bf9\u8c61\n  var update = {\n    lane: lane,\n    action: action,\n    hasEagerState: false,\n    eagerState: null,\n    next: null\n  };\n  if (isRenderPhaseUpdate(fiber)) {\n    console.log('=useState=app=dispatchSetState\u8c03\u7528enqueueRenderPhaseUpdate\u6e32\u67d3\u9636\u6bb5\u66f4\u65b0:')\n    enqueueRenderPhaseUpdate(queue, update);\n  } else {\n    enqueueUpdate$1(fiber, queue, update);\n  }\n\n  // \u7701\u7565..\n}\n\nfunction enqueueUpdate$1(fiber, queue, update, lane) {\n  if (isInterleavedUpdate(fiber)) {\n    var interleaved = queue.interleaved;\n\n    if (interleaved === null) {\n      // This is the first update. Create a circular list.\n      update.next = update; // At the end of the current render, this queue's interleaved updates will\n      // be transferred to the pending queue.\n\n      pushInterleavedQueue(queue);\n    } else {\n      update.next = interleaved.next;\n      interleaved.next = update;\n    }\n\n    queue.interleaved = update;\n  } else {\n\n    console.log('=useState=app=enqueueUpdate$1\u5c06update\u5bf9\u8c61\u6dfb\u52a0\u5230hook.queue.pending\u961f\u5217')\n    var pending = queue.pending;\n\n    if (pending === null) {\n      // This is the first update. Create a circular list.\n      console.log('=useState=app=\u9996\u4e2aupdate 2, \u81ea\u5df1\u6307\u5411\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u73af\u72b6\u94fe\u8868,\u521b\u5efa\u4e00\u4e2a\u73af\u5f62\u94fe\u8868')\n      update.next = update;\n    } else {\n      update.next = pending.next;\n      pending.next = update;\n    }\n\n    queue.pending = update;\n  }\n}\n")),(0,o.kt)("h2",{id:"\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u7684\u76f8\u5173\u4ee3\u7801\u903b\u8f91\u5b58\u5728\u4e8eupdatereducer\u4e2d"},"\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u7684\u76f8\u5173\u4ee3\u7801\u903b\u8f91\u5b58\u5728\u4e8eupdateReducer\u4e2d\uff1a"),(0,o.kt)("p",null,"\u6267\u884csetData \u53ea\u662f\u5f62\u6210\u4e86\u72b6\u6001\u5f85\u6267\u884c\u4efb\u52a1\u94fe\u8868\uff0c\u771f\u6b63\u5f97\u5230\u6700\u7ec8\u72b6\u6001\uff0c\u5176\u5b9e\u662f\u5728\u4e0b\u4e00\u6b21\u66f4\u65b0(\u83b7\u53d6\u72b6\u6001)\u65f6\uff0c\u5373\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u8bfb\u53d6\u6700\u65b0data\nconst [data, setData] = React.useState('\u6539\u53d8\u6211')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function updateReducer(reducer, initialArg, init) {\n  var hook = updateWorkInProgressHook();\n  // \u7701\u7565..\n  if (baseQueue !== null) {\n  // We have a queue to process.\n  var first = baseQueue.next;\n  var newState = current.baseState;\n  var newBaseState = null;\n  var newBaseQueueFirst = null;\n  var newBaseQueueLast = null;\n  var update = first;\n\n  do {\n    var updateLane = update.lane;\n\n    if (!isSubsetOfLanes(renderLanes, updateLane)) {\n      // Priority is insufficient. Skip this update. If this is the first\n      // skipped update, the previous update/state is the new base\n      // update/state.\n      var clone = {\n        lane: updateLane,\n        action: update.action,\n        hasEagerState: update.hasEagerState,\n        eagerState: update.eagerState,\n        next: null\n      };\n\n      if (newBaseQueueLast === null) {\n        newBaseQueueFirst = newBaseQueueLast = clone;\n        newBaseState = newState;\n      } else {\n        newBaseQueueLast = newBaseQueueLast.next = clone;\n      } // Update the remaining priority in the queue.\n      // TODO: Don't need to accumulate this. Instead, we can remove\n      // renderLanes from the original lanes.\n\n\n      currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);\n      markSkippedUpdateLanes(updateLane);\n    } else {\n      // This update does have sufficient priority.\n      if (newBaseQueueLast !== null) {\n        var _clone = {\n          // This update is going to be committed so we never want uncommit\n          // it. Using NoLane works because 0 is a subset of all bitmasks, so\n          // this will never be skipped by the check above.\n          lane: NoLane,\n          action: update.action,\n          hasEagerState: update.hasEagerState,\n          eagerState: update.eagerState,\n          next: null\n        };\n        newBaseQueueLast = newBaseQueueLast.next = _clone;\n      } // Process this update.\n\n\n      if (update.hasEagerState) {\n        // If this update is a state update (not a reducer) and was processed eagerly,\n        // we can use the eagerly computed state\n        // \u72b6\u6001\u5df2\u7ecf\u8ba1\u7b97\u8fc7\uff0c\u90a3\u5c31\u76f4\u63a5\u7528\n        newState = update.eagerState;\n      } else {\n        var action = update.action;\n        newState = reducer(newState, action);\n      }\n    }\n\n    update = update.next;\n    // \u7ec8\u6b62\u6761\u4ef6\u662f\u6307\u9488\u4e3a\u7a7a \u6216 \u73af\u5df2\u904d\u5386\u5b8c\n  } while (update !== null && update !== first);\n\n  if (newBaseQueueLast === null) {\n    newBaseState = newState;\n  } else {\n    newBaseQueueLast.next = newBaseQueueFirst;\n  } // Mark that the fiber performed work, but only if the new state is\n  // different from the current state.\n\n\n  if (!objectIs(newState, hook.memoizedState)) {\n    markWorkInProgressReceivedUpdate();\n  }\n\n  hook.memoizedState = newState;\n  hook.baseState = newBaseState;\n  hook.baseQueue = newBaseQueueLast;\n  queue.lastRenderedState = newState;\n}\n  // \u7701\u7565..\n}\n")),(0,o.kt)("h3",{id:"\u8f85-\u5355\u5411\u94fe\u8868js\u5b9e\u73b0"},"\u8f85-\u5355\u5411\u94fe\u8868js\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function buildQueue(queue,action){\n    const update = {action,next:null}\n    const pending = queue.pending\n \n    if(!pending){\n        queue.pending = update\n    }else{\n        let current = queue.pending\n        // \u627e\u5230\u672b\u5c3e\u7684\u5143\u7d20\n        while(current.next){\n            current = current.next\n        }\n        // \u5c06update\u6302\u8f7d\u5230\u94fe\u8868\u7684\u672b\u5c3e\n        current.next = update\n    }\n}\n \n// execute\nlet queue = {pending:null}\nbuildQueue(queue,'hooks1')\nbuildQueue(queue,'hooks2')\n \n// output: queue.pending = {action:'hooks1',next:{action:'hooks2',next:null}}\n")),(0,o.kt)("h2",{id:"useeffect-\u7ed3\u6784"},"useEffect \u7ed3\u6784"),(0,o.kt)("p",null,"\u4e0d\u540c\u7684 hooks \u65b9\u6cd5\uff0cmemoizedState \u5b58\u50a8\u7684\u5185\u5bb9\u4e0d\u540c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"useState: state"),(0,o.kt)("li",{parentName:"ul"},"useEffect: effect \u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"useMemo/useCallback: callback, deps"),(0,o.kt)("li",{parentName:"ul"},"useRef: { current: xxx }")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n  console.log('=\u526f\u4f5c\u7528-useEffect--\x3e\u8fd0\u884c');\n  return () => {\n    console.log('useEffect\u9500\u6bc1\u65f6\u89e6\u53d1\u7684\u56de\u8c03');\n  };\n}, []);\n\n|\n|\nV\n\n{\n  memoizedState: {\n    create: function () {\n      console.log('=\u526f\u4f5c\u7528-useEffect--\x3e\u8fd0\u884c');\n    },\n    destroy: function () {\n      console.log('useEffect\u9500\u6bc1\u65f6\u89e6\u53d1\u7684\u56de\u8c03');\n    },\n    deps: [],\n    // ...\n  },\n  baseState: null,\n  baseQueue: null,\n  queue: null,\n  next: null,\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function pushEffect(tag, create, destroy, deps) {\n  var effect = {\n    tag: tag, // \u6807\u8bb0\u662f\u5426\u6709 effect \u9700\u8981\u6267\u884c \n    create: create, // \u56de\u8c03\u51fd\u6570\n    destroy: destroy, // \u9500\u6bc1\u65f6\u89e6\u53d1\u7684\u56de\u8c03\n    deps: deps, // \u4f9d\u8d56\u7684\u6570\u7ec4\n    next: null  // \u4e0b\u4e00\u4e2a\u8981\u6267\u884c\u7684 Effect\n  };\n  var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;\n\n  if (componentUpdateQueue === null) {\n    componentUpdateQueue = createFunctionComponentUpdateQueue();\n    currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;\n    console.log('%c=\u526f\u4f5c\u7528:pushEffect-effect.next = effect\u5f62\u6210\u73af\u5f62\u94fe\u88681', 'color:chartreuse')\n    componentUpdateQueue.lastEffect = effect.next = effect;\n  } else {\n    var lastEffect = componentUpdateQueue.lastEffect;\n\n    if (lastEffect === null) {\n      console.log('%c=\u526f\u4f5c\u7528:pushEffect-effect.next = effect\u5f62\u6210\u73af\u5f62\u94fe\u88682', 'color:chartreuse')\n      componentUpdateQueue.lastEffect = effect.next = effect;\n    } else {\n      console.log('%c=\u526f\u4f5c\u7528:pushEffect-effect.next = effect\u5f62\u6210\u73af\u5f62\u94fe\u88683', 'color:chartreuse')\n      var firstEffect = lastEffect.next;\n      lastEffect.next = effect;\n      effect.next = firstEffect;\n      componentUpdateQueue.lastEffect = effect;\n    }\n  }\n  console.log('=\u526f\u4f5c\u7528:pushEffect-\u8fd4\u56de\u503c', { effect })\n  return effect;\n}\n")))}d.isMDXComponent=!0},65341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/useState\u94fe\u8868-cc8b606056910f76d9a8ca512e2b3898.png"}}]);