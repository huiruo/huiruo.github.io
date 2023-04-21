"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,u=function(e,n){if(null==e)return{};var t,a,u={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=u,h=p["".concat(i,".").concat(k)]||p[k]||c[k]||o;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var o=t.length,r=new Array(o);r[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:u,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},77476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),u=(t(67294),t(3905));const o={title:"hook\u548c\u95ed\u5305",sidebar_position:7},r=void 0,s={unversionedId:"React/hook\u548c\u95ed\u5305",id:"React/hook\u548c\u95ed\u5305",title:"hook\u548c\u95ed\u5305",description:"hooks:\u95ed\u5305 + \u4e24\u7ea7\u94fe\u8868",source:"@site/programming-tech/React/07-hook\u548c\u95ed\u5305.md",sourceDirName:"React",slug:"/React/hook\u548c\u95ed\u5305",permalink:"/React/hook\u548c\u95ed\u5305",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/07-hook\u548c\u95ed\u5305.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"hook\u548c\u95ed\u5305",sidebar_position:7},sidebar:"docs",previous:{title:"fiberNode-fiber\u7ed3\u6784-RequestIdleCallback",permalink:"/React/fiberNode-fiber\u7ed3\u6784-RequestIdleCallback"},next:{title:"router",permalink:"/React/router"}},i={},l=[{value:"hooks:\u95ed\u5305 + \u4e24\u7ea7\u94fe\u8868",id:"hooks\u95ed\u5305--\u4e24\u7ea7\u94fe\u8868",level:2},{value:"\u9996\u5148\uff0cHooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728 Fiber \u7684 memoizedState \u5c5e\u6027\u8eab\u4e0a",id:"\u9996\u5148hooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728-fiber-\u7684-memoizedstate-\u5c5e\u6027\u8eab\u4e0a",level:3},{value:"\u540c\u65f6\uff0c\u6bcf\u4e2ahooks\u53c8\u62e5\u6709\u81ea\u5df1\u7684\u66f4\u65b0\u961f\u5217queue\uff0cqueue.pending \u4f1a\u6307\u5411\u4e00\u4e2a\u73af\u72b6\u94fe\u8868",id:"\u540c\u65f6\u6bcf\u4e2ahooks\u53c8\u62e5\u6709\u81ea\u5df1\u7684\u66f4\u65b0\u961f\u5217queuequeuepending-\u4f1a\u6307\u5411\u4e00\u4e2a\u73af\u72b6\u94fe\u8868",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u662f\u73af\u72b6\u94fe\u8868\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u662f\u73af\u72b6\u94fe\u8868",level:2},{value:"Hooks \u94fe\u8868\u521b\u5efa\u8fc7\u7a0b",id:"hooks-\u94fe\u8868\u521b\u5efa\u8fc7\u7a0b",level:3},{value:"\u8f85:\u5355\u5411\u94fe\u8868js\u5b9e\u73b0",id:"\u8f85\u5355\u5411\u94fe\u8868js\u5b9e\u73b0",level:3},{value:"\u8f85:\u73af\u72b6\u94fe\u8868js\u5b9e\u73b0",id:"\u8f85\u73af\u72b6\u94fe\u8868js\u5b9e\u73b0",level:3},{value:"\u94fe\u8868hooks,\u5355\u5411\u94fe\u8868\u5b9e\u73b0",id:"\u94fe\u8868hooks\u5355\u5411\u94fe\u8868\u5b9e\u73b0",level:3},{value:"2.\u7b2c\u4e8c\u4e2a\u94fe\u8868\uff1a\u73af\u72b6\u94fe\u8868\u5b9e\u73b0",id:"2\u7b2c\u4e8c\u4e2a\u94fe\u8868\u73af\u72b6\u94fe\u8868\u5b9e\u73b0",level:3},{value:"\u73af\u72b6\u94fe\u8868\u5b9e\u73b0",id:"\u73af\u72b6\u94fe\u8868\u5b9e\u73b0",level:3},{value:"hooks\u7ed3\u6784",id:"hooks\u7ed3\u6784",level:2},{value:"hooks\u4e2d\u7684\u95ed\u5305",id:"hooks\u4e2d\u7684\u95ed\u5305",level:2},{value:"\u4f8b\u5b502:Hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406",id:"\u4f8b\u5b502hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406",level:3},{value:"updateReducer",id:"updatereducer",level:3}],d={toc:l},p="wrapper";function c(e){let{components:n,...o}=e;return(0,u.kt)(p,(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"hooks\u95ed\u5305--\u4e24\u7ea7\u94fe\u8868"},"hooks:\u95ed\u5305 + \u4e24\u7ea7\u94fe\u8868"),(0,u.kt)("h3",{id:"\u9996\u5148hooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728-fiber-\u7684-memoizedstate-\u5c5e\u6027\u8eab\u4e0a"},"\u9996\u5148\uff0cHooks\u662f\u4ee5\u5355\u5411\u94fe\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728 Fiber \u7684 memoizedState \u5c5e\u6027\u8eab\u4e0a"),(0,u.kt)("mermaid",{value:"graph LR\n1[Fiber] --memoized--\x3e 2[useReducer] --next--\x3e3[userState]--next--\x3e4[useEffect]"}),(0,u.kt)("h3",{id:"\u540c\u65f6\u6bcf\u4e2ahooks\u53c8\u62e5\u6709\u81ea\u5df1\u7684\u66f4\u65b0\u961f\u5217queuequeuepending-\u4f1a\u6307\u5411\u4e00\u4e2a\u73af\u72b6\u94fe\u8868"},"\u540c\u65f6\uff0c\u6bcf\u4e2ahooks\u53c8\u62e5\u6709\u81ea\u5df1\u7684\u66f4\u65b0\u961f\u5217queue\uff0cqueue.pending \u4f1a\u6307\u5411\u4e00\u4e2a\u73af\u72b6\u94fe\u8868"),(0,u.kt)("mermaid",{value:"graph LR\n1[Fiber] ==> |memoized|2[useReducer] ==>|next| 3[userState]==>|next| 4[useEffect]\n\n2 -.->|quene.pending| B1((update3))--next--\x3eB2\n\nB2((update1))--next--\x3eB3((update2))--next--\x3eB1"}),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u7531\u56fe\u53ef\u77e5\uff0cqueue.pending \u6c38\u8fdc\u6307\u5411\u6700\u540e\u4e00\u4e2a\u66f4\u65b0"),(0,u.kt)("li",{parentName:"ul"},"\u7531\u56fe\u53ef\u77e5\uff0cpending.next \u6c38\u8fdc\u6307\u5411\u7b2c\u4e00\u4e2a\u66f4\u65b0")),(0,u.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u662f\u73af\u72b6\u94fe\u8868"},"\u4e3a\u4ec0\u4e48\u8981\u662f\u73af\u72b6\u94fe\u8868\uff1f"),(0,u.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u7528\u73af\u72b6\u94fe\u8868\u5462?\n\u56e0\u4e3aReact\u7684\u66f4\u65b0\u4efb\u52a1\u662f\u6709\u4f18\u5148\u7ea7\u7684\u3002"),(0,u.kt)("p",null,"\u5047\u5982\u6709\u4e09\u4e2a update\uff0c\u7b2c\u4e8c\u4e2aupdate\u7684\u4f18\u5148\u7ea7\u6bd4\u8f83\u9ad8\uff0c\u90a3\u4e48\u4f1a\u5148\u6267\u884c\u7b2c\u4e8c\u4e2a update\uff0c\u5355\u5411\u94fe\u8868\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7b2c\u4e00\u4e2aupdate\u4e22\u5931\uff0c\u800c\u73af\u72b6\u94fe\u8868\u7684\u4f18\u52bf\u5728\u4e8e\u53ef\u4ee5\u4ece\u4efb\u4f55\u8282\u70b9\u5f00\u59cb\u5faa\u73af\u94fe\u8868\u3002\u603b\u7ed3\u6765\u8bf4\uff1a\u73af\u72b6\u94fe\u8868\u53ef\u4ee5\u4fdd\u8bc1update\u4e0d\u4e22\u5931\uff0c\u5e76\u4e14\u4fdd\u8bc1\u72b6\u6001\u4f9d\u8d56\u7684\u8fde\u7eed\u6027\u3002"),(0,u.kt)("p",null,"\u5728\u83b7\u53d6\u5934\u90e8\u6216\u8005\u63d2\u5165\u5c3e\u90e8\u7684\u65f6\u5019\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u904d\u5386\u64cd\u4f5c"),(0,u.kt)("p",null,"\uff08\u4e0a\u9762\u63d0\u5230\u7684 fiber.updateQueue \u3001 useEffect \u521b\u5efa\u7684 hook \u5bf9\u8c61\u4e2d\u7684 memoizedState \u5b58\u7684 effect \u73af\u72b6\u94fe\u8868\uff0c\u4ee5\u53ca useState \u7684 queue.pending \u4e0a\u7684 update \u5bf9\u8c61\u7684\u73af\u72b6\u94fe\u8868\uff0c\u90fd\u662f\u8fd9\u4e2a\u539f\u56e0\uff09"),(0,u.kt)("p",null,"\u65b9\u4fbf\u5b9a\u4f4d\u5230\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002updateQueue \u6307\u5411\u5b83\u7684\u6700\u540e\u4e00\u4e2a update\uff0cupdateQueue.next \u6307\u5411\u5b83\u7684\u7b2c\u4e00\u4e2aupdate\u3002"),(0,u.kt)("p",null,"\u82e5\u4e0d\u4f7f\u7528\u73af\u72b6\u94fe\u8868\uff0cupdateQueue \u6307\u5411\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u9700\u8981\u904d\u5386\u624d\u80fd\u83b7\u53d6\u94fe\u8868\u9996\u90e8\u3002\u5373\u4f7f\u5c06updateQueue\u6307\u5411\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u65b0\u589eupdate\u65f6\u4ecd\u7136\u8981\u904d\u5386\u5230\u5c3e\u90e8\u624d\u80fd\u5c06\u65b0\u589e\u7684\u63a5\u5165\u94fe\u8868\u3002"),(0,u.kt)("h3",{id:"hooks-\u94fe\u8868\u521b\u5efa\u8fc7\u7a0b"},"Hooks \u94fe\u8868\u521b\u5efa\u8fc7\u7a0b"),(0,u.kt)("p",null,"\u6bcf\u4e2a useXxx \u7684 hooks \u90fd\u6709 mountXxx \u548c updateXxx \u4e24\u4e2a\u9636\u6bb5\u3002\u94fe\u8868\u53ea\u521b\u5efa\u4e00\u6b21\uff0c\u5728 mountXxx \u5f53\u4e2d\uff0c\u540e\u9762\u90fd\u662f update\u3002"),(0,u.kt)("p",null,"\u4ee5 useState \u4e3a\u4f8b\uff0cmount \u65f6\u4f1a\u8fdb\u5165 HooksDispatcherOnMountInDEV \u7684 useState\u65b9\u6cd5\uff0c\u6700\u7ec8\u6267\u884c mountState"),(0,u.kt)("h3",{id:"\u8f85\u5355\u5411\u94fe\u8868js\u5b9e\u73b0"},"\u8f85:\u5355\u5411\u94fe\u8868js\u5b9e\u73b0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function buildQueue(queue,action){\n    const update = {action,next:null}\n    const pending = queue.pending\n \n    if(!pending){\n        queue.pending = update\n    }else{\n        let current = queue.pending\n        // \u627e\u5230\u672b\u5c3e\u7684\u5143\u7d20\n        while(current.next){\n            current = current.next\n        }\n        // \u5c06update\u6302\u8f7d\u5230\u94fe\u8868\u7684\u672b\u5c3e\n        current.next = update\n    }\n}\n \n// excute\nlet queue = {pending:null}\nbuildQueue(queue,'hooks1')\nbuildQueue(queue,'hooks2')\n \n// output: queue.pending = {action:'hooks1',next:{action:'hooks2',next:null}}\n")),(0,u.kt)("h3",{id:"\u8f85\u73af\u72b6\u94fe\u8868js\u5b9e\u73b0"},"\u8f85:\u73af\u72b6\u94fe\u8868js\u5b9e\u73b0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function dispatchAction(queue,action){\n     const update = {action,next:null}\n     const pending = queue.pending\n     if(pending === null){\n        update.next = update // \u81ea\u5df1\u4e0e\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u73af\u72b6\u94fe\u8868\n     }else{\n        update.next = pending.next\n        pending.next = update\n     }\n     queue.pending = update\n}\n \nlet queue = {pending:null}\n \n/**\n * update.next === update\n * queue.pending === update(action) \n */\ndispatchAction(queue,'action')\n \n \n/**\n * update(action1).next -> update(action).next [update(action)]    \n * update1 \u7684next \u6307\u5411 update\n * queue.pending.next [update(update)] -> update(action1)          \n * update \u6307\u5411 update1\n * queue.pending -> update(action1)                                \n * queue.pending \u6307\u5411 update1\n */\ndispatchAction(queue,'action1')\n")),(0,u.kt)("h3",{id:"\u94fe\u8868hooks\u5355\u5411\u94fe\u8868\u5b9e\u73b0"},"\u94fe\u8868hooks,\u5355\u5411\u94fe\u8868\u5b9e\u73b0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"/*\nHooks are stored as a linked list on the fiber's memoizedState field.  \nhooks \u4ee5\u94fe\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728fiber\u8282\u70b9\u7684memoizedState\u5c5e\u6027\u4e0a\nThe current hook list is the list that belongs to the current fiber.\n\u5f53\u524d\u7684hook\u94fe\u8868\u5c31\u662f\u5f53\u524d\u6b63\u5728\u904d\u5386\u7684fiber\u8282\u70b9\u4e0a\u7684\nThe work-in-progress hook list is a new list that will be added to the work-in-progress fiber.\nwork-in-progress hook \u5c31\u662f\u5373\u5c06\u88ab\u6dfb\u52a0\u5230\u6b63\u5728\u904d\u5386fiber\u8282\u70b9\u7684hooks\u65b0\u94fe\u8868\n*/\nlet currentHook: Hook | null = null;\nlet nextCurrentHook: Hook | null = null;\n")),(0,u.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u6e90\u7801\u6ce8\u91ca\u53ef\u4ee5\u770b\u51fahooks\u94fe\u8868\u4e0efiber\u94fe\u8868\u662f\u6781\u5176\u76f8\u4f3c\u7684\uff1b\u4e5f\u5f97\u77e5hooks \u94fe\u8868\u662f\u4fdd\u5b58\u5728fiber\u8282\u70b9\u7684memoizedState\u5c5e\u6027\u7684, "),(0,u.kt)("p",null,"\u8fd9\u4e2ahooks \u94fe\u8868\u5177\u4f53\u6307\u4ec0\u4e48\uff1f\n\u5176\u5b9e\u5c31\u662f\u6307\u4e00\u4e2a\u7ec4\u4ef6\u5305\u542b\u7684hooks, \u6bd4\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const [count, setCount] = useState(0);\nconst [age, setAge] = useState(18);\nconst self = useRef(0);\nconst onClick = useCallback(() => {\n  setAge(19);\n  setAge(20);\n  setAge(21);\n}, []);\n")),(0,u.kt)("p",null,"\u5f62\u6210\u7684\u94fe\u8868\u5c31\u662f\u4e0b\u9762\u8fd9\u6837\u7684\uff1a"),(0,u.kt)("p",null,(0,u.kt)("img",{src:t(18861).Z,width:"1223",height:"397"})),(0,u.kt)("p",null,"\u6240\u4ee5\u5728\u4e0b\u4e00\u6b21\u66f4\u65b0\u65f6\uff0c\u518d\u6b21\u6267\u884chook\uff0c\u5c31\u4f1a\u53bb\u83b7\u53d6\u5f53\u524d\u8fd0\u884c\u8282\u70b9\u7684hooks\u94fe\u8868\uff1b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const hook = updateWorkInProgressHook();\n// updateWorkInProgressHook \u5c31\u662f\u4e00\u4e2a\u7eaf\u94fe\u8868\u7684\u64cd\u4f5c\uff1a\u6307\u5411\u4e0b\u4e00\u4e2a hook\u8282\u70b9\n")),(0,u.kt)("p",null,"\u5230\u8fd9 hooks \u94fe\u8868\u662f\u4ec0\u4e48\uff0c\u5e94\u8be5\u5c31\u660e\u767d\u4e86\uff1b\u8fd9\u65f6\u4f60\u53ef\u80fd\u4f1a\u66f4\u660e\u767d\uff0c\u4e3a\u4ec0\u4e48hooks\u4e0d\u80fd\u5728\u5faa\u73af\uff0c\u5224\u65ad\u8bed\u53e5\u4e2d\u8c03\u7528\uff0c\u800c\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u4f7f\u7528\uff0c\u56e0\u4e3a\u6302\u8f7d\u6216\u5219\u66f4\u65b0\u65f6\uff0c\u8fd9\u4e2a\u961f\u5217\u9700\u8981\u662f\u4e00\u81f4\u7684\uff0c\u624d\u80fd\u4fdd\u8bc1hooks\u7684\u7ed3\u679c\u6b63\u786e\u3002"),(0,u.kt)("h3",{id:"2\u7b2c\u4e8c\u4e2a\u94fe\u8868\u73af\u72b6\u94fe\u8868\u5b9e\u73b0"},"2.\u7b2c\u4e8c\u4e2a\u94fe\u8868\uff1a\u73af\u72b6\u94fe\u8868\u5b9e\u73b0"),(0,u.kt)("p",null,"state \u94fe\u8868\u4e0d\u662fhooks\u72ec\u6709\u7684\uff0c\u7c7b\u64cd\u4f5c\u7684setState\u4e5f\u5b58\u5728\uff0c\u6b63\u662f\u7531\u4e8e\u8fd9\u4e2a\u94fe\u8868\u5b58\u5728\uff0c\u6240\u4ee5\u6709\u4e00\u4e2a\u7ecf\u5178React \u9762\u8bd5\u9898\uff1a"),(0,u.kt)("p",null,"setState\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u662f\u5f02\u6b65\uff0c\u4ec0\u4e48\u65f6\u5019\u662f\u540c\u6b65\uff1f"),(0,u.kt)("p",null,"\u53c2\u8003\uff1a",(0,u.kt)("a",{parentName:"p",href:"./setState%E5%BC%82%E6%AD%A5-%E5%90%8C%E6%AD%A5"},"React/setState\u7684\u5f02\u6b65\u548c\u540c\u6b65\u95ee\u9898")),(0,u.kt)("h3",{id:"\u73af\u72b6\u94fe\u8868\u5b9e\u73b0"},"\u73af\u72b6\u94fe\u8868\u5b9e\u73b0"),(0,u.kt)("p",null,"\u5efa\u7acb\u8fd9\u4e2a\u94fe\u8868\u7684\u903b\u8f91\u5c31\u5728 dispatchSetState--\x3eenqueueUpdate$1\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"update(action1).next -> update(action).next [update(action)]    \nupdate1 \u7684next \u6307\u5411 update\nqueue.pending.next [update(update)] -> update(action1)          \nupdate \u6307\u5411 update1\nqueue.pending -> update(action1)                                \nqueue.pending \u6307\u5411 update1\n")),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"./dispatchSetState-hooks%E6%BA%90%E7%A0%81"},"dispatchSetState-hooks\u6e90\u7801")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function dispatchSetState(fiber, queue, action) {\n  // \u7701\u7565..\n  // \u521b\u5efa\u4e00\u4e2a update \u66f4\u65b0\u5bf9\u8c61\n  var update = {\n    lane: lane,\n    action: action,\n    hasEagerState: false,\n    eagerState: null,\n    next: null\n  };\n  if (isRenderPhaseUpdate(fiber)) {\n    console.log('=useState=app=dispatchSetState\u8c03\u7528enqueueRenderPhaseUpdate\u6e32\u67d3\u9636\u6bb5\u66f4\u65b0:')\n    enqueueRenderPhaseUpdate(queue, update);\n  } else {\n    enqueueUpdate$1(fiber, queue, update);\n  }\n\n  // \u7701\u7565..\n}\n\nfunction enqueueUpdate$1(fiber, queue, update, lane) {\n  if (isInterleavedUpdate(fiber)) {\n    var interleaved = queue.interleaved;\n\n    if (interleaved === null) {\n      // This is the first update. Create a circular list.\n      update.next = update; // At the end of the current render, this queue's interleaved updates will\n      // be transferred to the pending queue.\n\n      pushInterleavedQueue(queue);\n    } else {\n      update.next = interleaved.next;\n      interleaved.next = update;\n    }\n\n    queue.interleaved = update;\n  } else {\n\n    console.log('=useState=app=enqueueUpdate$1\u5c06update\u5bf9\u8c61\u6dfb\u52a0\u5230hook.queue.pending\u961f\u5217')\n    var pending = queue.pending;\n\n    if (pending === null) {\n      // This is the first update. Create a circular list.\n      console.log('=useState=app=\u9996\u4e2aupdate 2, \u81ea\u5df1\u6307\u5411\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u73af\u72b6\u94fe\u8868,\u521b\u5efa\u4e00\u4e2a\u73af\u5f62\u94fe\u8868')\n      update.next = update;\n    } else {\n      update.next = pending.next;\n      pending.next = update;\n    }\n\n    queue.pending = update;\n  }\n}\n")),(0,u.kt)("p",null,"\u6267\u884csetAge \u53ea\u662f\u5f62\u6210\u4e86\u72b6\u6001\u5f85\u6267\u884c\u4efb\u52a1\u94fe\u8868\uff0c\u771f\u6b63\u5f97\u5230\u6700\u7ec8\u72b6\u6001\uff0c\u5176\u5b9e\u662f\u5728\u4e0b\u4e00\u6b21\u66f4\u65b0(\u83b7\u53d6\u72b6\u6001)\u65f6\uff0c\u5373\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"// \u8bfb\u53d6\u6700\u65b0age\nconst [age, setAge] = useState(18);\n")),(0,u.kt)("p",null,"\u800c\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u7684\u76f8\u5173\u4ee3\u7801\u903b\u8f91\u5b58\u5728\u4e8eupdateReducer\u4e2d\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function updateReducer(reducer, initialArg, init) {\n  var hook = updateWorkInProgressHook();\n  // \u7701\u7565..\n  if (baseQueue !== null) {\n  // We have a queue to process.\n  var first = baseQueue.next;\n  var newState = current.baseState;\n  var newBaseState = null;\n  var newBaseQueueFirst = null;\n  var newBaseQueueLast = null;\n  var update = first;\n\n  do {\n    var updateLane = update.lane;\n\n    if (!isSubsetOfLanes(renderLanes, updateLane)) {\n      // Priority is insufficient. Skip this update. If this is the first\n      // skipped update, the previous update/state is the new base\n      // update/state.\n      var clone = {\n        lane: updateLane,\n        action: update.action,\n        hasEagerState: update.hasEagerState,\n        eagerState: update.eagerState,\n        next: null\n      };\n\n      if (newBaseQueueLast === null) {\n        newBaseQueueFirst = newBaseQueueLast = clone;\n        newBaseState = newState;\n      } else {\n        newBaseQueueLast = newBaseQueueLast.next = clone;\n      } // Update the remaining priority in the queue.\n      // TODO: Don't need to accumulate this. Instead, we can remove\n      // renderLanes from the original lanes.\n\n\n      currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);\n      markSkippedUpdateLanes(updateLane);\n    } else {\n      // This update does have sufficient priority.\n      if (newBaseQueueLast !== null) {\n        var _clone = {\n          // This update is going to be committed so we never want uncommit\n          // it. Using NoLane works because 0 is a subset of all bitmasks, so\n          // this will never be skipped by the check above.\n          lane: NoLane,\n          action: update.action,\n          hasEagerState: update.hasEagerState,\n          eagerState: update.eagerState,\n          next: null\n        };\n        newBaseQueueLast = newBaseQueueLast.next = _clone;\n      } // Process this update.\n\n\n      if (update.hasEagerState) {\n        // If this update is a state update (not a reducer) and was processed eagerly,\n        // we can use the eagerly computed state\n        // \u72b6\u6001\u5df2\u7ecf\u8ba1\u7b97\u8fc7\uff0c\u90a3\u5c31\u76f4\u63a5\u7528\n        newState = update.eagerState;\n      } else {\n        var action = update.action;\n        newState = reducer(newState, action);\n      }\n    }\n\n    update = update.next;\n    // \u7ec8\u6b62\u6761\u4ef6\u662f\u6307\u9488\u4e3a\u7a7a \u6216 \u73af\u5df2\u904d\u5386\u5b8c\n  } while (update !== null && update !== first);\n\n  if (newBaseQueueLast === null) {\n    newBaseState = newState;\n  } else {\n    newBaseQueueLast.next = newBaseQueueFirst;\n  } // Mark that the fiber performed work, but only if the new state is\n  // different from the current state.\n\n\n  if (!objectIs(newState, hook.memoizedState)) {\n    markWorkInProgressReceivedUpdate();\n  }\n\n  hook.memoizedState = newState;\n  hook.baseState = newBaseState;\n  hook.baseQueue = newBaseQueueLast;\n  queue.lastRenderedState = newState;\n}\n  // \u7701\u7565..\n}\n")),(0,u.kt)("h2",{id:"hooks\u7ed3\u6784"},"hooks\u7ed3\u6784"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},'// hook\u7684\u7ed3\u6784\nexport type Hook = {\n  memoizedState: any, //\u4e0a\u4e00\u6b21\u7684state\n  baseState: any,  // \u5f53\u524dstate\n  baseUpdate: Update<any, any> | null,  // update func\n  next: Hook | null, // \u94fe\u8868\n  queue: UpdateQueue<any, any> | null,  // \u7528\u4e8e\u7f13\u5b58\u591a\u6b21action\n};\n\nconst example ={\n  baseQueue:null,\n  baseState:"\u6539\u53d8\u6211",\n  memoizedState:"\u6539\u53d8\u6211",\n  next:{},\n  queue:{},\n}\n')),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},'import { useState, useEffect } from "react";\nexport default function App() {\n  // 1. useState\n  const [a, setA] = useState(1);\n  // 2. useEffect\n  useEffect(() => {\n    console.log(`effect 1 created`);\n  });\n  // 3. useState\n  const [b] = useState(2);\n  // 4. useEffect\n  useEffect(() => {\n    console.log(`effect 2 created`);\n  });\n  return (\n    <>\n      <button onClick={() => setA(a + 1)}>{a}</button>\n      <button>{b}</button>\n    </>\n  );\n}\n')),(0,u.kt)("p",null,"\u672c\u793a\u4f8b\u4e2d, function\u8c03\u7528\u4e4b\u540e\u5219\u4f1a\u521b\u5efa 4 \u4e2ahook, \u8fd9\u65f6\u7684\u5185\u5b58\u7ed3\u6784\u5982\u4e0b:\n",(0,u.kt)("img",{src:t(30145).Z,width:"894",height:"707"})),(0,u.kt)("p",null,"\u72b6\u6001Hook\u6216\u526f\u4f5c\u7528Hook\u90fd\u6309\u7167\u8c03\u7528\u987a\u5e8f\u5b58\u50a8\u5728fiber.memoizedState\u94fe\u8868\u4e2d"),(0,u.kt)("h2",{id:"hooks\u4e2d\u7684\u95ed\u5305"},"hooks\u4e2d\u7684\u95ed\u5305"),(0,u.kt)("p",null,"\u524d\u8a00\uff1a\u5b9a\u4e49\u4e00\u4e2aReact\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u4f7f\u7528\uff0c\u8fd9\u548c\u95ed\u5305\u6709\u5173\u7cfb\u5417\uff1f\n\u5728\u6a21\u5757Counter.jsx\u4e2d\u5b9a\u4e49\u4e00\u4e2aCounter\u7ec4\u4ef6"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"// Counter.jsx\nexport default function Counter() {}\n\n// \u7136\u540e\u5728App\u6a21\u5757\u4e2d\u4f7f\u7528Counter\u7ec4\u4ef6\n// App.jsx\nimport Counter from './Counter';\nexport default function App() {\n // todo\n   return (\n    <Counter />\n  )\n}\n")),(0,u.kt)("p",null,"\u624b\u52a8\u8f6c\u6362\u6210\u4f2a\u4ee3\u7801,\u6211\u4eec\u5c06\u4e0a\u9762\u95ed\u5305\u5b9a\u4e49\u7684A\uff0cB\u7528\u672c\u4f8b\u4e2d\u7684\u540d\u79f0\u66ff\u6362\u4e00\u4e0b\uff1a\n\u81ea\u6267\u884c\u51fd\u6570AppModule\u4ee5\u53ca\u5728AppModule\u4e2d\u521b\u5efa\u7684\u51fd\u6570App\u3002"),(0,u.kt)("p",null,"\u5f53App\u5728render\u4e2d\u6267\u884c\u65f6\uff0c\u8bbf\u95ee\u4e86AppModule\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61(\u5b9a\u4e49\u4e86\u53d8\u91cfCounter)\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const CounterModule = (function() {\n  return function Counter() {}\n})()\n\nconst AppModule = (function() {\n  const Counter = CounterModule;\n  return function App() {\n    return Counter();\n  }\n})()\n")),(0,u.kt)("h3",{id:"\u4f8b\u5b502hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406"},"\u4f8b\u5b502:Hooks\u80fd\u591f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u5185\u90e8\u72b6\u6001\u7684\u57fa\u672c\u539f\u7406"),(0,u.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3aState\u7684\u6a21\u5757"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"// state.js\nlet state = null;\n\nexport const useState = (value: number) => {\n  // \u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u6ca1\u6709\u521d\u59cb\u503c\uff0c\u56e0\u6b64\u4f7f\u7528\u4f20\u5165\u7684\u521d\u59cb\u503c\u8d4b\u503c\n  state = state || value;\n\n  function dispatch(newValue) {\n    state = newValue;\n    // \u5047\u8bbe\u6b64\u65b9\u6cd5\u80fd\u89e6\u53d1\u9875\u9762\u6e32\u67d3\n    render();\n  }\n\n  return [state, dispatch];\n}\n")),(0,u.kt)("p",null,"\u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u5f15\u5165\u5e76\u4f7f\u7528\u3002"),(0,u.kt)("p",null,"\u5f53useState\u5728Demo\u4e2d\u6267\u884c\u65f6\uff0c\u8bbf\u95ee\u4e86state\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61\uff0c\u90a3\u4e48\u95ed\u5305\u5c31\u4f1a\u4ea7\u751f\u3002"),(0,u.kt)("p",null,"\u8fd9\u91cc\u8981\u77e5\u9053\u6e90\u7801\uff1areact \u7ec4\u4ef6\u4f1a\u8fd0\u884c\u4e24\u6b21\uff0c\u521d\u59cb\u5316\u4e00\u6b21\uff0c\u70b9\u51fb\u4e8b\u4ef6\u89e6\u53d1fiber\u66f4\u65b0\u6d41\u7a0b\u7684\u65f6\u5019\u4e00\u6b21,\u7b2c\u4e8c\u6b21\u662f\u4e3a\u4e86\u6784\u5efa\u65b0\u7684fiber tree\n",(0,u.kt)("inlineCode",{parentName:"p"},"\u6839\u636e\u95ed\u5305\u7684\u7279\u6027\uff0cstate\u6a21\u5757\u4e2d\u7684state\u53d8\u91cf\uff0c\u4f1a\u6301\u4e45\u5b58\u5728\u3002\u56e0\u6b64\u5f53Demo\u51fd\u6570\u518d\u6b21\u6267\u884c\u65f6\uff0c\u6211\u4eec\u4e5f\u80fd\u83b7\u53d6\u5230\u4e0a\u4e00\u6b21Demo\u51fd\u6570\u6267\u884c\u7ed3\u675f\u65f6state\u7684\u503c\u3002")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {useState} from './state';\n\nfunction Demo() {\n  // \u4f7f\u7528\u6570\u7ec4\u89e3\u6784\u7684\u65b9\u5f0f\uff0c\u5b9a\u4e49\u53d8\u91cf\n  const [counter, setCounter] = useState(0);\n\n  return (\n    <div onClick={() => setCounter(counter + 1)}>hello world, {counter}</div>\n  )\n}\n\nexport default Demo();\n")),(0,u.kt)("p",null,"\u7b80\u5316\u4e00\u4e0b\u6e90\u4ee3\u7801\uff0c\u53d1\u73b0\u903b\u8f91\u867d\u7136\u590d\u6742\uff0c\u4f46\u662f\u6838\u5fc3\u7684\u4e24\u4e2a\u4e1c\u897f\uff0c\u8fd8\u662f\u5728\u4e8e\u4fee\u6539\u4e86\u4e00\u4e2a\u53eb\u505ahook\u7684\u53d8\u91cf\uff0c\u4ee5\u53ca\u8fd4\u56de\u4e86","[hook.memoizedState, dispatch]","\u3002"),(0,u.kt)("p",null,"\u8fd9\u4e2ahook\u662f\u4ec0\u4e48\u5462\uff1f\u5728updateWorkInProgressHook\u65b9\u6cd5\u4e2d\u53d1\u73b0\uff0chook\u662f\u5305\u542b\u4e86memoizedState, baseState, queue, baseUpdate, next\u5c5e\u6027\u7684\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function updateWorkInProgressHook() {\n  // This function is used both for updates and for re-renders triggered by a\n  // render phase update. It assumes there is either a current hook we can\n  // clone, or a work-in-progress hook from a previous render pass that we can\n  // use as a base. When we reach the end of the base list, we must switch to\n  // the dispatcher used for mounts.\n  var nextCurrentHook;\n\n  if (currentHook === null) {\n    var current = currentlyRenderingFiber$1.alternate;\n\n    if (current !== null) {\n      nextCurrentHook = current.memoizedState;\n    } else {\n      nextCurrentHook = null;\n    }\n  } else {\n    nextCurrentHook = currentHook.next;\n  }\n\n  var nextWorkInProgressHook;\n\n  if (workInProgressHook === null) {\n    nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;\n  } else {\n    nextWorkInProgressHook = workInProgressHook.next;\n  }\n\n  if (nextWorkInProgressHook !== null) {\n    // There's already a work-in-progress. Reuse it.\n    workInProgressHook = nextWorkInProgressHook;\n    nextWorkInProgressHook = workInProgressHook.next;\n    currentHook = nextCurrentHook;\n  } else {\n    // Clone from the current hook.\n    if (nextCurrentHook === null) {\n      throw new Error('Rendered more hooks than during the previous render.');\n    }\n\n    currentHook = nextCurrentHook;\n    var newHook = {\n      memoizedState: currentHook.memoizedState,\n      baseState: currentHook.baseState,\n      baseQueue: currentHook.baseQueue,\n      queue: currentHook.queue,\n      next: null\n    };\n\n    if (workInProgressHook === null) {\n      // This is the first hook in the list.\n      currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;\n    } else {\n      // Append to the end of the list.\n      workInProgressHook = workInProgressHook.next = newHook;\n    }\n  }\n\n  return workInProgressHook;\n}\n")),(0,u.kt)("h3",{id:"updatereducer"},"updateReducer"),(0,u.kt)("p",null,"\u7ee7\u7eed\u627e\u5230updateReducer\uff0cupdateReducer\u7684\u903b\u8f91\u6bd4\u8f83\u590d\u6742\u3002\u4e0d\u8fc7\u6211\u4eec\u57fa\u4e8e\u4e0a\u9762\u63d0\u5230\u8fc7\u7684\u4e24\u4e2a\u601d\u8def\uff0c\u770b\u4ed6\u4fee\u6539\u4e86\u4ec0\u4e48\uff0c\u4e0e\u8fd4\u56de\u4e86\u4ec0\u4e48\u3002"),(0,u.kt)("p",null,"updateReducer\u8fd4\u56de\u7684\u6570\u7ec4\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u503c\u5c31\u662fmemoizedState\u3002"),(0,u.kt)("p",null,"\u56e0\u6b64\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff0c\u5176\u5b9e\u6211\u4eec\u7684\u72b6\u6001\uff0c\u5c31\u7f13\u5b58\u5728hook.memoizedState\u8fd9\u4e2a\u503c\u91cc\u3002"),(0,u.kt)("p",null,"\u7ee7\u7eed\u89c2\u5bdfupdateWorkInProgressHook\u65b9\u6cd5\uff0c\u53d1\u73b0\u8be5\u65b9\u6cd5\u5728\u5185\u90e8\u4fee\u6539\u4e86\u5f88\u591a\u5916\u90e8\u7684\u53d8\u91cf\uff0cworkInProgressHook\uff0cnextWorkInProgressHook\uff0ccurrentHook\u7b49\u3002\u800cmemoizedState: currentHook.memoizedState\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function updateReducer(reducer, initialArg, init) {\n  var hook = updateWorkInProgressHook();\n  console.log('%c=updateState=updateReducer\u8c03\u7528updateWorkInProgressHook,\u62f7\u8d1dhook(current->workInProcess),\u5e76\u8fd4\u56de\u8fd9\u4e2ahook', 'color:cyan', { hook })\n  var queue = hook.queue;\n\n  console.log('%c=updateState=updateReducer\u8bfb\u53d6\u961f\u5217,\u8ba1\u7b97\u51fa\u6700\u65b0\u72b6\u6001\uff0c\u66f4\u65b0hook\u7684\u72b6\u6001', 'color:cyan')\n  if (queue === null) {\n    throw new Error('Should have a queue. This is likely a bug in React. Please file an issue.');\n  }\n\n  queue.lastRenderedReducer = reducer;\n  var current = currentHook; // The last rebase update that is NOT part of the base state.\n\n  var baseQueue = current.baseQueue; // The last pending update that hasn't been processed yet.\n\n  var pendingQueue = queue.pending;\n\n  if (pendingQueue !== null) {\n    // We have new updates that haven't been processed yet.\n    // We'll add them to the base queue.\n    if (baseQueue !== null) {\n      // Merge the pending queue and the base queue.\n      var baseFirst = baseQueue.next;\n      var pendingFirst = pendingQueue.next;\n      baseQueue.next = pendingFirst;\n      pendingQueue.next = baseFirst;\n    }\n\n    {\n      if (current.baseQueue !== baseQueue) {\n        // Internal invariant that should never happen, but feasibly could in\n        // the future if we implement resuming, or some form of that.\n        error('Internal error: Expected work-in-progress queue to be a clone. ' + 'This is a bug in React.');\n      }\n    }\n\n    current.baseQueue = baseQueue = pendingQueue;\n    queue.pending = null;\n  }\n\n  if (baseQueue !== null) {\n    // We have a queue to process.\n    var first = baseQueue.next;\n    var newState = current.baseState;\n    var newBaseState = null;\n    var newBaseQueueFirst = null;\n    var newBaseQueueLast = null;\n    var update = first;\n\n    do {\n      var updateLane = update.lane;\n\n      if (!isSubsetOfLanes(renderLanes, updateLane)) {\n        // Priority is insufficient. Skip this update. If this is the first\n        // skipped update, the previous update/state is the new base\n        // update/state.\n        var clone = {\n          lane: updateLane,\n          action: update.action,\n          hasEagerState: update.hasEagerState,\n          eagerState: update.eagerState,\n          next: null\n        };\n\n        if (newBaseQueueLast === null) {\n          newBaseQueueFirst = newBaseQueueLast = clone;\n          newBaseState = newState;\n        } else {\n          newBaseQueueLast = newBaseQueueLast.next = clone;\n        } // Update the remaining priority in the queue.\n        // TODO: Don't need to accumulate this. Instead, we can remove\n        // renderLanes from the original lanes.\n\n\n        currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);\n        markSkippedUpdateLanes(updateLane);\n      } else {\n        // This update does have sufficient priority.\n        if (newBaseQueueLast !== null) {\n          var _clone = {\n            // This update is going to be committed so we never want uncommit\n            // it. Using NoLane works because 0 is a subset of all bitmasks, so\n            // this will never be skipped by the check above.\n            lane: NoLane,\n            action: update.action,\n            hasEagerState: update.hasEagerState,\n            eagerState: update.eagerState,\n            next: null\n          };\n          newBaseQueueLast = newBaseQueueLast.next = _clone;\n        } // Process this update.\n\n\n        if (update.hasEagerState) {\n          // If this update is a state update (not a reducer) and was processed eagerly,\n          // we can use the eagerly computed state\n          // \u72b6\u6001\u5df2\u7ecf\u8ba1\u7b97\u8fc7\uff0c\u90a3\u5c31\u76f4\u63a5\u7528\n          newState = update.eagerState;\n        } else {\n          var action = update.action;\n          newState = reducer(newState, action);\n        }\n      }\n\n      update = update.next;\n      // \u7ec8\u6b62\u6761\u4ef6\u662f\u6307\u9488\u4e3a\u7a7a \u6216 \u73af\u5df2\u904d\u5386\u5b8c\n    } while (update !== null && update !== first);\n\n    if (newBaseQueueLast === null) {\n      newBaseState = newState;\n    } else {\n      newBaseQueueLast.next = newBaseQueueFirst;\n    } // Mark that the fiber performed work, but only if the new state is\n    // different from the current state.\n\n\n    if (!objectIs(newState, hook.memoizedState)) {\n      markWorkInProgressReceivedUpdate();\n    }\n\n    hook.memoizedState = newState;\n    hook.baseState = newBaseState;\n    hook.baseQueue = newBaseQueueLast;\n    queue.lastRenderedState = newState;\n  } // Interleaved updates are stored on a separate queue. We aren't going to\n  // process them during this render, but we do need to track which lanes\n  // are remaining.\n\n\n  var lastInterleaved = queue.interleaved;\n\n  if (lastInterleaved !== null) {\n    var interleaved = lastInterleaved;\n\n    do {\n      var interleavedLane = interleaved.lane;\n      currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, interleavedLane);\n      markSkippedUpdateLanes(interleavedLane);\n      interleaved = interleaved.next;\n    } while (interleaved !== lastInterleaved);\n  } else if (baseQueue === null) {\n    // `queue.lanes` is used for entangling transitions. We can set it back to\n    // zero once the queue is empty.\n    queue.lanes = NoLanes;\n  }\n\n  var dispatch = queue.dispatch;\n  console.log('%c=updateState=updateReducer\u6700\u7ec8\u8fd4\u56de\u503c', 'color:cyan', [hook.memoizedState, dispatch])\n  return [hook.memoizedState, dispatch];\n}\n")))}c.isMDXComponent=!0},30145:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hooks\u94fe\u8868\u7ed3\u6784-75c957b0b0f7eb1d29c161db4128c18e.png"},18861:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/\u56fe1hooks\u94fe\u8868-5457b99e0b5fe7ea05c58c615a209aa1.png"}}]);