"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return t?o.createElement(u,l(l({ref:n},i),{},{components:t})):o.createElement(u,l({ref:n},i))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={title:"patch",sidebar_position:-2},l=void 0,p={unversionedId:"Vue/patch",id:"Vue/patch",title:"patch",description:"patch\u51fd\u6570\u91cc\u4e3b\u8981\u5bf9\u65b0\u65e7\u8282\u70b9\u4e5f\u5c31\u662f\u865a\u62dfDOM\u7684\u5bf9\u6bd4",source:"@site/programming-tech/Vue/patch.md",sourceDirName:"Vue",slug:"/Vue/patch",permalink:"/Vue/patch",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/patch.md",tags:[],version:"current",sidebarPosition:-2,frontMatter:{title:"patch",sidebar_position:-2},sidebar:"docs",previous:{title:"mockData-compile\u8c03\u7528baseParse\u8fd4\u56deast",permalink:"/Vue/mockData-compile\u8c03\u7528baseParse\u8fd4\u56deast"},next:{title:"Patch\u7b97\u6cd5\u4e4bPatchkeyChildren",permalink:"/Vue/Patch\u7b97\u6cd5\u4e4bPatchkeyChildren"}},c={},s=[{value:"patch\u51fd\u6570\u91cc\u4e3b\u8981\u5bf9\u65b0\u65e7\u8282\u70b9\u4e5f\u5c31\u662f\u865a\u62dfDOM\u7684\u5bf9\u6bd4",id:"patch\u51fd\u6570\u91cc\u4e3b\u8981\u5bf9\u65b0\u65e7\u8282\u70b9\u4e5f\u5c31\u662f\u865a\u62dfdom\u7684\u5bf9\u6bd4",level:2},{value:"processElement-patchElement\u66f4\u65b0dom\u5143\u7d20",id:"processelement-patchelement\u66f4\u65b0dom\u5143\u7d20",level:3},{value:"patchElement",id:"patchelement",level:3},{value:"patchBlockChildren",id:"patchblockchildren",level:2}],i={toc:s},d="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"patch\u51fd\u6570\u91cc\u4e3b\u8981\u5bf9\u65b0\u65e7\u8282\u70b9\u4e5f\u5c31\u662f\u865a\u62dfdom\u7684\u5bf9\u6bd4"},"patch\u51fd\u6570\u91cc\u4e3b\u8981\u5bf9\u65b0\u65e7\u8282\u70b9\u4e5f\u5c31\u662f\u865a\u62dfDOM\u7684\u5bf9\u6bd4"),(0,a.kt)("p",null,"\u5e38\u8bf4\u7684vue\u91cc\u7684diff\u7b97\u6cd5\uff0c\u4fbf\u662f\u4ecepatch\u5f00\u59cb\u3002\u7ed3\u5408render\u51fd\u6570\u6765\u770b\uff0c\u6211\u4eec\u77e5\u9053\uff0c\u65e7\u7684\u865a\u62dfDOM\u5b58\u50a8\u5728container._vnode\u4e0a\u3002\u90a3\u4e48diff\u7684\u65b9\u5f0f\u5c31\u5728patch\u4e2d\u4e86\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u65e7\u8282\u70b9\u76f8\u540c\uff0c\u76f4\u63a5\u8fd4\u56de\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u65e7\u8282\u70b9\u5b58\u5728\uff0c\u4e14\u65b0\u65e7\u8282\u70b9\u7c7b\u578b\u4e0d\u540c\uff0c\u5219\u65e7\u8282\u70b9\u4e0d\u53ef\u590d\u7528\uff0c\u5c06\u5176\u5378\u8f7d(unmount)\uff0c\u951a\u70b9anchor\u79fb\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u8282\u70b9\u662f\u5426\u9759\u6001\u8282\u70b9\u6807\u8bb0\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u65b0\u8282\u70b9\u7684\u7c7b\u578b\uff0c\u76f8\u5e94\u5730\u8c03\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u5904\u7406\u65b9\u6cd5\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6587\u672c\uff1aprocessText\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1aprocessCommentNode\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9759\u6001\u8282\u70b9\uff1amountStaticNode\u6216patchStaticNode\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u6863\u7247\u6bb5\uff1aprocessFragment\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u5b83\u3002")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u65b0\u65e7\u865a\u62df\u8282\u70b9\u76f8\u540c (n1 === n2)\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\uff0c\u4e0d\u505a Diff \u6bd4\u8f83\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u65b0\u65e7\u865a\u62df\u8282\u70b9\u4e0d\u76f8\u540c\uff0c\u5219\u76f4\u63a5\u5378\u8f7d\u65e7\u7684\u865a\u62df\u8282\u70b9\u53ca\u5176\u5b50\u8282\u70b9\u3002\u540c\u65f6\u5c06\u65e7\u865a\u62df\u8282\u70b9n1 \u7f6e\u4e3a null\uff0c\u8fd9\u6837\u5c31\u4fdd\u8bc1\u4e86\u65b0\u8282\u70b9\u53ef\u4ee5\u6b63\u5e38\u6302\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5224\u65ad\u65b0\u865a\u62df\u8282\u70b9\u7684 patchFlag \u7c7b\u578b\u662f\u5426\u4e3a PatchFlags.BAIL\uff0c\u5219\u5c06 optimized \u7f6e\u4e3a false\uff0c\u90a3\u4e48\u5728\u540e\u7eed\u7684 Diff \u8fc7\u7a0b\u4e2d\u5c31\u4e0d\u4f1a\u542f\u7528 diff \u4f18\u5316\u3002\u540c\u65f6\u4e5f\u5c06\u65b0\u865a\u62df\u8282\u70b9\u7684\u52a8\u6001\u5b50\u8282\u70b9\u6570\u7ec4 dynamicChildren \u7f6e\u4e3a null\uff0c\u5728\u540e\u7eed Diff \u8fc7\u7a0b\u4e2d\u4e5f\u4e0d\u4f1a\u542f\u7528 diff \u4f18\u5316\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\u6839\u636e\u65b0\u865a\u62df\u8282\u70b9\u7684 type \u7c7b\u578b\uff0c\u5206\u522b\u5bf9\u6587\u672c\u8282\u70b9\u3001\u6ce8\u91ca\u8282\u70b9\u3001\u9759\u6001\u8282\u70b9\u4ee5\u53caFragment\u8282\u70b9\u8c03\u7528\u76f8\u5e94\u7684\u5904\u7406\u51fd\u6570\u5bf9\u5176\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u7740\u6839\u636e shapeFlag \u7684\u7c7b\u578b\uff0c\u8c03\u7528\u4e0d\u540c\u7684\u5904\u7406\u51fd\u6570\uff0c\u5206\u522b\u5bf9 Element\u7c7b\u578b\u7684\u8282\u70b9\u3001Component \u7ec4\u4ef6\u3001Teleport \u7ec4\u4ef6\u3001Suspense \u5f02\u6b65\u7ec4\u4ef6\u8fdb\u884c\u5904\u7406\u3002\n\u6700\u540e\uff0c\u8c03\u7528\u4e86 setRef \u51fd\u6570\u6765\u8bbe\u7f6e ref \u5f15\u7528\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {\n\n  // container, DOM\u5bb9\u5668\uff0cvNode\u6e32\u67d3\u6210dom\u4f1a\u6302\u8f7d\u5230\u8be5\u8282\u70b9\u4e0b\n  // \u65b0\u65e7\u8282\u70b9\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u76f4\u63a5\u8fd4\u56de\n  if (n1 === n2) {\n    console.log(`%c\u8fd0\u884c\u65f6==>patch\uff1a\u65b0\u65e7\u8282\u70b9\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u76f4\u63a5\u8fd4\u56de:`, 'color:red')\n    return;\n  }\n  // patching & not same type, unmount old tree\n  // \u4e0d\u662f\u76f8\u540c\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u76f4\u63a5\u5378\u8f7d\u65e7\u8282\u70b9\n  if (n1 && !isSameVNodeType(n1, n2)) {\n    anchor = getNextHostNode(n1);\n    unmount(n1, parentComponent, parentSuspense, true);\n    n1 = null;\n  }\n\n  // \u88ab\u6253\u8fc7BAIL\u7c7b\u578b\u6807\u8bb0\u7684\u8282\u70b9\u9000\u51fa\u4f18\u5316\u6a21\u5f0f\u3002\n  // \u6bd4\u5982\u975e\u7f16\u8bd1\u5668\u751f\u6210\uff0c\u800c\u662f\u624b\u52a8\u7f16\u5199\u7684\u6e32\u67d3\u51fd\u6570\uff0c\u8ba4\u4e3a\u603b\u662f\u65b0\u7684\uff0c\u65e0\u6cd5\u8fdb\u884c\u4f18\u5316\n  if (n2.patchFlag === -2 /* PatchFlags.BAIL */) {\n    optimized = false;\n    n2.dynamicChildren = null;\n  }\n\n  const { type, ref, shapeFlag } = n2;\n\n  console.log(`%c\u8fd0\u884c\u65f6==>patch\u5f00\u542f,n1\u65e7\u8282\u70b9\u3001n2\u65b0\u8282\u70b9:`, 'color:yellow', { type, n1, n2 })\n  // \u6839\u636evNode\u7c7b\u578b\uff0c\u6267\u884c\u4e0d\u540c\u7684\u7b97\u6cd5\n  switch (type) {\n    case Text:\n      console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406\u6587\u672c\u8282\u70b9:`, 'color:red')\n      processText(n1, n2, container, anchor);\n      break;\n    case Comment:\n      console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406\u6ce8\u91ca\u8282\u70b9:`, 'color:red')\n      processCommentNode(n1, n2, container, anchor);\n      break;\n    case Static:\n      console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406\u9759\u6001\u8282\u70b9:`, 'color:red')\n      if (n1 == null) {\n        mountStaticNode(n2, container, anchor, isSVG);\n      }\n      else {\n        patchStaticNode(n1, n2, container, isSVG);\n      }\n      break;\n    case Fragment:\n      console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406Fragment\u5143\u7d20:`, 'color:red')\n      processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n      break;\n    default:\n      if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {\n        console.log(`%c\u8fd0\u884c\u65f6==>patch--\x3e\u8f83\u4e3a\u91cd\u70b9\u76841:ELEMENT\u7c7b\u578b:\u8c03\u7528processElement\u5904\u7406DOM\u5143\u7d20:`, 'color:red')\n        processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n      }\n      else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {\n        console.log(`%c\u8fd0\u884c\u65f6==>patch--\x3e\u8f83\u4e3a\u91cd\u70b9\u76842:COMPONENT:\u8c03\u7528processComponent\u5904\u7406\u7ec4\u4ef6\u5143\u7d20:`, 'color:red')\n        processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n      }\n      else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {\n        console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406TELEPORT:`, 'color:red')\n        type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);\n      }\n      else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {\n        console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406SUSPENSE:`, 'color:red')\n        type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);\n      }\n      else {\n        warn$1('Invalid VNode type:', type, `(${typeof type})`);\n      }\n  }\n  // set ref\n  if (ref != null && parentComponent) {\n    setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);\n  }\n};\n")),(0,a.kt)("h3",{id:"processelement-patchelement\u66f4\u65b0dom\u5143\u7d20"},"processElement-patchElement\u66f4\u65b0dom\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {\n  isSVG = isSVG || n2.type === 'svg';\n  if (n1 == null) {\n    console.log('%c=patch\u4e4bprocessElement1:\u6302\u8f7ddom\u5143\u7d20\u7684\u8fc7\u7a0b\uff0c\u8c03\u7528mountElement', 'color:magenta')\n    mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n  }\n  else {\n    console.log('%c=patch\u4e4bprocessElement2:\u66f4\u65b0dom\u5143\u7d20\u7684\u8fc7\u7a0b\uff0c\u8c03\u7528patchElement', 'color:magenta')\n    patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n  }\n};\n")),(0,a.kt)("h3",{id:"patchelement"},"patchElement"),(0,a.kt)("p",null,"patchElemengt\u76f8\u5f53\u91cd\u8981\uff0c\u56e0\u4e3a\u5176\u5b83\u548c\u4f60\u591a\u5185\u5bb9\u7684patch\uff0c\u6700\u7ec8\u7ecf\u8fc7\u9012\u5f52\uff0c\u4f9d\u7136\u4f1a\u8d70\u5230patchElement\u3002\u5f53\u65b0\u65e7\u5143\u7d20\u8282\u70b9\u90fd\u5b58\u5728\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528patchElement\u8fdb\u884c\u5bf9\u6bd4\u3002\u53ef\u4ee5\u770b\u5230\u987a\u5e8f\uff1a"),(0,a.kt)("p",null,"\u5728patchElement\u4e2d\uff0c\u6ce8\u610f\u5230\u5f53\u65b0\u8282\u70b9\u5177\u6709\u52a8\u6001\u5b50\u8282\u70b9\u65f6\uff0c\u8c03\u7528\u4e86patchBlockChildren\u6765\u8fdb\u884c\u5b50\u8282\u70b9\u7684\u6bd4\u8f83\uff0c\u800c\u5728\u6ca1\u6709\u52a8\u6001\u5b50\u8282\u70b9\u4e14\u4e0d\u7b26\u5408\u4f18\u5316\u6761\u4ef6\u65f6\uff0c\u5219\u4f7f\u7528patchChildren\u6765\u6bd4\u8f83\u3002\u8fd9\u4e0eprocessFragment\u7c7b\u4f3c\u3002\n\u800c\u5f53patchFlag <= 0\u4e14\u6ca1\u6709\u8bbe\u7f6e\u4f18\u5316\u65f6\uff0c\u5bf9props\u8fdb\u884c\u5168\u91cfdiff\u3002\u5206\u522b\u904d\u5386\u65b0\u7684props\u548c\u65e7\u7684props\uff0c\u6700\u540e\u5237\u65b0value\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {\n  const el = (n2.el = n1.el);\n  let { patchFlag, dynamicChildren, dirs } = n2;\n  // #1426 take the old vnode's patch flag into account since user may clone a\n  // compiler-generated vnode, which de-opts to FULL_PROPS\n  patchFlag |= n1.patchFlag & 16 /* PatchFlags.FULL_PROPS */;\n  const oldProps = n1.props || EMPTY_OBJ;\n  const newProps = n2.props || EMPTY_OBJ;\n  let vnodeHook;\n  // \u5173\u95edrecurse\uff0c\u5728 beforeUpdated \u9636\u6bb5\u4e0d\u5141\u8bb8\u81ea\u5df1\u8c03\u7528\n  // disable recurse in beforeUpdate hooks\n  parentComponent && toggleRecurse(parentComponent, false);\n  if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {\n    invokeVNodeHook(vnodeHook, parentComponent, n2, n1);\n  }\n  // \u6307\u4ee4\u7684 beforeUpdated \u94a9\u5b50\n  if (dirs) {\n    invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');\n  }\n  // \u5141\u8bb8\u81ea\u5df1\u8c03\u7528\n  parentComponent && toggleRecurse(parentComponent, true);\n  if (isHmrUpdating) {\n    // HMR updated, force full diff\n    patchFlag = 0;\n    optimized = false;\n    dynamicChildren = null;\n  }\n  const areChildrenSVG = isSVG && n2.type !== 'foreignObject';\n  if (dynamicChildren) {\n    console.log('%c=patchElement=\u65b0\u8282\u70b9\u7684\u52a8\u6001\u5b50\u8282\u70b9\u4e0d\u4e3a\u7a7a\uff0c\u5219\u6bd4\u8f83\u65b0\u65e7\u8282\u70b9\u7684\u52a8\u6001\u5b50\u8282\u70b9,\u8c03\u7528patchBlockChildren')\n    patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);\n    if (parentComponent && parentComponent.type.__hmrId) {\n      traverseStaticChildren(n1, n2);\n    }\n  }\n  else if (!optimized) {\n    console.log('%c=patchElement=\u8c03\u7528patchChildren,\u6ca1\u6709\u4f18\u5316\uff0c\u5168\u91cf diff')\n    // full diff\n    patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);\n  }\n\n  // \u6ce8\u91ca\uff1apatchFlag \u6807\u8bc6\u7684\u5b58\u5728\u610f\u5473\u7740\u5143\u7d20\u7684 render \u4ee3\u7801\u662f\u7531 compiler \u751f\u6210\u7684\uff0c\n  // \u4e14\u53ef\u4ee5\u5728 patch \u65f6\u8d70\u5feb\u9053\uff0c\u6b64\u65f6\u80fd\u4fdd\u8bc1\u65b0\u65e7\u8282\u70b9\u5f62\u72b6\u76f8\u540c\uff0c\u5373\u5b83\u4eec\u5728\u6e90\u6a21\u677f\u4e2d\u6b63\u597d\u5904\u4e8e\u76f8\u540c\u7684\u4f4d\u7f6e\n  // \u6b64\u65f6\u7684\u5bf9\u6bd4\u662f\u6709\u7740\u5404\u79cd\u4f18\u5316\u7684\n  if (patchFlag > 0) {\n    // the presence of a patchFlag means this element's render code was\n    // generated by the compiler and can take the fast path.\n    // in this path old node and new node are guaranteed to have the same shape\n    // (i.e. at the exact same position in the source template)\n    if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {\n      console.log('%c=patchElement=\u8c03\u7528patchProps,\u5f53props\u4e2d\u542b\u6709\u52a8\u6001\u7684key\uff0c\u9700\u8981\u8fdb\u884c\u5168\u91cf diff')\n      // element props contain dynamic keys, full diff needed\n      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);\n    }\n    else {\n      // class\n      // this flag is matched when the element has dynamic class bindings.\n      if (patchFlag & 2 /* PatchFlags.CLASS */) {\n        if (oldProps.class !== newProps.class) {\n          console.log('%c=patchElement=\u8c03\u7528hostPatchProp,\u5904\u7406\u52a8\u6001\u7c7b\u540d\u7ed1\u5b9a')\n          hostPatchProp(el, 'class', null, newProps.class, isSVG);\n        }\n      }\n      // style\n      // this flag is matched when the element has dynamic style bindings\n      if (patchFlag & 4 /* PatchFlags.STYLE */) {\n        console.log('%c=patchElement=\u8c03\u7528hostPatchProp,\u5904\u7406\u52a8\u6001\u7684 style \u7ed1\u5b9a')\n        hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);\n      }\n      // props\n      // This flag is matched when the element has dynamic prop/attr bindings\n      // other than class and style. The keys of dynamic prop/attrs are saved for\n      // faster iteration.\n      // Note dynamic keys like :[foo]=\"bar\" will cause this optimization to\n      // bail out and go through a full diff because we need to unset the old key\n      if (patchFlag & 8 /* PatchFlags.PROPS */) {\n        // if the flag is present then dynamicProps must be non-null\n        // \u5904\u7406\u52a8\u6001\u7684 prop/attr \u7ed1\u5b9a\uff0c\u6709\u8fed\u4ee3\u7f13\u5b58\uff0c\u4f18\u5316\u6bd4\u8f83\u901f\u5ea6\n        // \u5982\u679c `prop/attr`\u7684 key \u662f\u52a8\u6001\u7684\uff0c\u90a3\u4e48\u8fd9\u79cd\u4f18\u5316\u5219\u4f1a\u5931\u6548\n        console.log('%c=patchElement=\u8c03\u7528hostPatchProp,\u7406\u52a8\u6001\u7684 prop/attr \u7ed1\u5b9a\uff0c\u6709\u8fed\u4ee3\u7f13\u5b58\uff0c\u4f18\u5316\u6bd4\u8f83\u901f\u5ea6')\n        const propsToUpdate = n2.dynamicProps;\n        for (let i = 0; i < propsToUpdate.length; i++) {\n          const key = propsToUpdate[i];\n          const prev = oldProps[key];\n          const next = newProps[key];\n          // #1471 force patch value\n          if (next !== prev || key === 'value') {\n            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);\n          }\n        }\n      }\n    }\n    // text\n    // This flag is matched when the element has only dynamic text children.\n    if (patchFlag & 1 /* PatchFlags.TEXT */) {\n      if (n1.children !== n2.children) {\n        hostSetElementText(el, n2.children);\n      }\n    }\n  }\n  else if (!optimized && dynamicChildren == null) {\n    console.log('%c=patchElement=\u8c03\u7528patchProps,\u6ca1\u6709\u4f18\u5316\uff0c\u5168\u91cf diff')\n    // unoptimized, full diff\n    patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);\n  }\n  if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {\n    console.log('%c=patchElement=updated \u94a9\u5b50 \u5165\u961f')\n    queuePostRenderEffect(() => {\n      vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);\n      dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');\n    }, parentSuspense);\n  }\n};\n")),(0,a.kt)("h2",{id:"patchblockchildren"},"patchBlockChildren"),(0,a.kt)("p",null,"\u5728\u6587\u6863\u7247\u6bb5\u4e2d\u7684diff\u4e2d\uff0c\u5f53\u7b26\u5408\u4f18\u5316\u6761\u4ef6\u65f6\uff0c\u5219\u8c03\u7528patchBlockChildren\u6765\u8fdb\u884c\u4f18\u5316\u7684diff\u3002\u8fd9\u91cc\u4e3b\u8981\u4ee5\u65b0\u8282\u70b9\u7684\u5b50\u8282\u70b9\u957f\u5ea6\u4e3a\u51c6\uff0c\u904d\u5386\u65b0\u65e7\u8282\u70b9\u7684\u5b50\u8282\u70b9\uff0c\u66f4\u65b0\u4e86\u6bcf\u4e2a\u5b50\u8282\u70b9\u7684container\u7136\u540e\u8fdb\u884cpatch\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {\n  console.log('%c=patchBlockChildren=\u5f00\u59cb\u5faa\u73af')\n  for (let i = 0; i < newChildren.length; i++) {\n    const oldVNode = oldChildren[i];\n    const newVNode = newChildren[i];\n    // Determine the container (parent element) for the patch.\n    const container =\n      // oldVNode may be an errored async setup() component inside Suspense\n      // which will not have a mounted element\n      oldVNode.el &&\n        // - In the case of a Fragment, we need to provide the actual parent\n        // of the Fragment itself so it can move its children.\n        (oldVNode.type === Fragment ||\n          // - In the case of different nodes, there is going to be a replacement\n          // which also requires the correct parent container\n          !isSameVNodeType(oldVNode, newVNode) ||\n          // - In the case of a component, it could contain anything.\n          oldVNode.shapeFlag & (6 /* ShapeFlags.COMPONENT */ | 64 /* ShapeFlags.TELEPORT */))\n        ? hostParentNode(oldVNode.el)\n        : // In other cases, the parent container is not actually used so we\n        // just pass the block element here to avoid a DOM parentNode call.\n        fallbackContainer;\n\n    console.log('%c=patchBlockChildren=\u5faa\u73af\u4e2d\u8c03\u7528patch')\n    patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);\n  }\n};\n")),(0,a.kt)("h1",{id:"\u518d\u6b21\u8fdb\u5165patch\u4ee5\u66f4\u65b0\u6587\u672c\u8282\u70b9\u4e3a\u4f8b--processtextn1-n2"},"\u518d\u6b21\u8fdb\u5165patch:\u4ee5\u66f4\u65b0\u6587\u672c\u8282\u70b9\u4e3a\u4f8b:--\x3eprocessText(n1, n2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {\n  // \u7701\u7565...\n  const { type, ref, shapeFlag } = n2;\n\n  console.log(`%c\u8fd0\u884c\u65f6==>patch\u5f00\u542f,n1\u65e7\u8282\u70b9\u3001n2\u65b0\u8282\u70b9:`, 'color:yellow', { type, n1, n2 })\n  // \u6839\u636evNode\u7c7b\u578b\uff0c\u6267\u884c\u4e0d\u540c\u7684\u7b97\u6cd5\n  switch (type) {\n    case Text:\n      console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406\u6587\u672c\u8282\u70b9:`, 'color:red')\n      processText(n1, n2, container, anchor);\n      break;\n    case Comment:\n  }\n  // \u7701\u7565..\n}\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u4f60\u628a debugger \u6253\u5728 hostSetText(el, n2.children),\u4e00\u6b65\u4e00\u6b65\u8c03\u8bd5\uff0c\u53ef\u4ee5\u770b\u5230\nsetText: (node, text) \u9875\u9762\u5c31\u66f4\u65b0\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const processText = (n1, n2, container, anchor) => {\n  if (n1 == null) {\n    console.log('=processText=1,\u521b\u5efa\u6587\u672c\u8282\u70b9')\n    hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);\n  }\n  else {\n    const el = (n2.el = n1.el);\n    console.log('=processText=2,', { el })\n    if (n2.children !== n1.children) {\n      console.log(`=processText=3,n2.children !== n1.children\uff0c\u8c03\u7528hostSetText`, el, n2.children)\n      debugger\n      hostSetText(el, n2.children);\n    }\n  }\n};\n")),(0,a.kt)("p",null,"hostSetText\u5c31\u662fsetText"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;\n\nconst nodeOps = {\n    insert: (child, parent, anchor) => {\n      parent.insertBefore(child, anchor || null);\n    },\n    remove: child => {\n      const parent = child.parentNode;\n      if (parent) {\n        parent.removeChild(child);\n      }\n    },\n    createElement: (tag, isSVG, is, props) => {\n      const el = isSVG\n        ? doc.createElementNS(svgNS, tag)\n        : doc.createElement(tag, is ? { is } : undefined);\n      if (tag === 'select' && props && props.multiple != null) {\n        el.setAttribute('multiple', props.multiple);\n      }\n      return el;\n    },\n    createText: text => doc.createTextNode(text),\n    createComment: text => doc.createComment(text),\n    setText: (node, text) => {\n      node.nodeValue = text;\n    },\n    // \u7701\u7565\n}\n")))}h.isMDXComponent=!0}}]);