"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[809],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,s(s({ref:n},i),{},{components:t})):o.createElement(f,s({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:r,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"Vue\u6982\u89c8",sidebar_position:-2},s=void 0,p={unversionedId:"Vue\u6982\u89c8",id:"Vue\u6982\u89c8",title:"Vue\u6982\u89c8",description:"vue \u7279\u70b9",source:"@site/programming-tech/Vue\u6982\u89c8.md",sourceDirName:".",slug:"/Vue\u6982\u89c8",permalink:"/Vue\u6982\u89c8",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue\u6982\u89c8.md",tags:[],version:"current",sidebarPosition:-2,frontMatter:{title:"Vue\u6982\u89c8",sidebar_position:-2},sidebar:"docs",previous:{title:"React\u6982\u89c8",permalink:"/React\u6982\u89c8"},next:{title:"jsx-ast-render\u9636\u6bb5",permalink:"/React/jsx-ast-render\u9636\u6bb5"}},l={},c=[{value:"vue \u7279\u70b9",id:"vue-\u7279\u70b9",level:2},{value:"\u5b8f\u89c2\u6d41\u7a0b",id:"\u5b8f\u89c2\u6d41\u7a0b",level:2},{value:"\u9996\u6b21\u6e32\u67d3\u6d41\u7a0b",id:"\u9996\u6b21\u6e32\u67d3\u6d41\u7a0b",level:2},{value:"1\u9636\u6bb5\u51fd\u6570",id:"1\u9636\u6bb5\u51fd\u6570",level:3},{value:"2\u9636\u6bb5\u51fd\u6570",id:"2\u9636\u6bb5\u51fd\u6570",level:3},{value:"data\u53d1\u751f\u6539\u53d8dom\u66f4\u65b0\u6d41\u7a0b",id:"data\u53d1\u751f\u6539\u53d8dom\u66f4\u65b0\u6d41\u7a0b",level:2},{value:"v-for\u7684<code>:key</code>",id:"v-for\u7684key",level:2}],i={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-\u7279\u70b9"},"vue \u7279\u70b9"),(0,r.kt)("p",null,"\u91cd\u70b9\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"render.call(proxyToUse,..)\u8c03\u7528ast\u751f\u6210\u7684render\u751f\u6210vnode")),(0,r.kt)("mermaid",{value:'flowchart LR\n\ntemplate--\x3east--\x3ea1("render()")--\u6267\u884crender--\x3eVNode--\x3eA1("\u521b\u5efa\u597dvnode\u8c03\u7528patch(prevTree,nextTree)\u8fdb\u884c\u6e32\u67d3")'}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vue\u7684template\u3001script\u3001style\u662f\u5206\u79bb\u7684\uff0c\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u6bd4\u8f83\u597d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u6a21\u677f\u547d\u4ee4"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vue \u7528v-if \u6761\u4ef6\u6e32\u67d3div\n\u8fd8\u6709v-model,v-on:click,v-for\n\nreact\u4e2d\u7528js\uff0c\u8fd0\u7b97\u7b26\u53bb\u5b9e\u73b0 v-if, array.map() \u53bb\u5b9e\u73b0 v-for\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86computed,watch \u526f\u4f5c\u7528\u7684\u94a9\u5b50\uff0c\u5728react \u7edf\u4e00\u4f7f\u7528useEffect\u53bb\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd"),(0,r.kt)("li",{parentName:"ol"},"\u6539\u53d8\u7ec4\u4ef6\u72b6\u6001\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"vue: this.data = x;\nreact: setState(x);\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u6a21\u677f\u5f15\u64ce\u548c\u751f\u6210\u865a\u62dfdom\u65b9\u5f0f\u4e0d\u540c;vue\u548creact\u540c\u6837\u91c7\u7528\u7684\u662f\u865a\u62dfdom\u7f16\u8bd1\u65f6+\u8fd0\u884c\u65f6 \u90fd\u662f\u627e\u51fa\u5dee\u5f02\u4fee\u6539")),(0,r.kt)("h2",{id:"\u5b8f\u89c2\u6d41\u7a0b"},"\u5b8f\u89c2\u6d41\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"compiler\u8868\u793atemplate--\x3eAST\u62bd\u8c61\u8bed\u6cd5\u6811")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"reactivity\u8868\u793a\u54cd\u5e94\u5f0f,effect \u526f\u4f5c\u7528\u51fd\u6570\uff08Vue3\u4e2d\u5df2\u7ecf\u6ca1\u6709\u4e86watcher\u6982\u5ff5,\u7531effect\u53d6\u800c\u4ee3\u4e4b\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. Vue3 \u7528 ES6\u7684Proxy \u91cd\u6784\u4e86\u54cd\u5e94\u5f0f\uff0cnew Proxy(target, handler)\n2. Proxy \u7684 get handle \u91cc \u6267\u884ctrack() \u7528\u6765\u6536\u96c6\u4f9d\u8d56(\u6536\u96c6 activeEffect\uff0c\u4e5f\u5c31\u662f effect )\n3. Proxy \u7684 set handle \u91cc\u6267\u884c trigger() \u7528\u6765\u89e6\u53d1\u54cd\u5e94(\u6267\u884c\u6536\u96c6\u7684 effect)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"runtime\u8868\u793a\u8fd0\u884c\u65f6\u76f8\u5173\u529f\u80fd\uff0c\u865a\u62dfDOM(\u5373\uff1aVNode)\u3001diff\u7b97\u6cd5\u3001\u771f\u5b9eDOM\u64cd\u4f5c\u7b49")),(0,r.kt)("h2",{id:"\u9996\u6b21\u6e32\u67d3\u6d41\u7a0b"},"\u9996\u6b21\u6e32\u67d3\u6d41\u7a0b"),(0,r.kt)("p",null,"renderComponentRoot \u6267\u884c\u6784\u5efaast\u751f\u6210\u7684render() \u751f\u6210vnode\n\u7ec4\u4ef6\u6302\u8f7d\u524d:onBeforeMount\u5728\u4ec0\u4e48\u65f6\u5019\u6267\u884c?"),(0,r.kt)("mermaid",{value:'flowchart TD\nz1(createApp)--\x3ez2("ensureRenderer()")--\x3ez3("createRenderer(rendererOptions)")--\x3ez4("baseCreateRenderer(options, createHydrationFns)")\n\nz4--\x3ez6("return {render,createApp:createAppAPI(render, hydrate)}")\n\nz6--\x3eA1("createAppAPI(render, hydrate){return app}")\n\nA1("createAppAPI")--\x3eA1A("\u91cd\u70b9:\u9875\u9762\u4e0a\u7684.mount(\'#root\')\u8c03\u7528createAppAPI\u8fd4\u56de\u7684mount")--\x3eA2("mount(rootContainer")--\x3eA3("render=(vnode,container,\u5f00\u59cb\u521b\u5efacode\u7b49\u4e00\u7cfb\u5217\u6d41\u7a0b")--\x3eA4("patch()patch\u9636\u6bb5")--\x3eB1\n\nB1("processComponent()")--\x3eB2("mountComponent(n2, container")\n\nB2--1\u521d\u59cb\u5316\u6784\u5efaast-code\u51fd\u6570--\x3eB31("setupComponent(instance)")--\x3eB33("\u89c1:baseCompile\u751f\u6210ast-\u9759\u6001\u63d0\u5347-vnode-patch.md")\n\nB2--2\u6784\u5efavnode\u7b49\u6d41\u7a0b--\x3eB32("setupRenderEffect(instance, initialVNode")--\x3eC1("effect.run()\u89e6\u53d1\u4f9d\u8d56\u6536\u96c6")--\x3eC2("componentUpdateFn()\u91cd\u70b9\u51fd\u6570")--1\u521b\u5efavnode--\x3eC3("renderComponentRoot(instance)\u8fd4\u56devnode")--\x3eC4\n\nC4("render.call(proxyToUse,..)\u8c03\u7528ast\u751f\u6210\u7684render\u751f\u6210vnode")--\x3eC41("\u6267\u884cast render\u51fd\u6570\u4e5f\u4f1a\u89e6\u53d1\u4f9d\u8d56\u6536\u96c6")\n\nC2--2\u521b\u5efa\u597dvnode:nextTree--\x3eD1("\u8c03\u7528patch(prevTree,nextTree)\u8fdb\u884c\u6e32\u67d3")--path\u4e4b\u521d\u59cb\u5316:shapeFlag&6--\x3eD12("processComponent(n1, n2")--\x3eD2("mountElement(n2, container")\n\n%% mountComponent--1--\x3eD21("createComponentInstance\u521b\u5efa\u5b9e\u4f8b")\n%% mountComponent--2--\x3eD22("setupComponent\u8bbe\u7f6e\u7ec4\u4ef6\u5b9e\u4f8b")\n%% mountComponent--3--\x3eD23("setupRenderEffect,\u6267\u884c\u4f9d\u8d56\u6536\u96c6")\n\nD2--\x3eD3("mountChildren(vnode.children,..)\u8fdb\u884c\u9012\u5f52")--vnode.children\u9012\u5f52\u8c03\u7528--\x3eD5("patch(null,child,container")\n\nC2--3\u6e32\u67d3\u5b8c\u6bd5\u6700\u540e--\x3eE1("\u5904\u7406\u751f\u547d\u5468\u671f\u51fd\u6570")--1--\x3eE21("onMounted()")\n\nE1--2--\x3eE2(nextTick)'}),(0,r.kt)("h3",{id:"1\u9636\u6bb5\u51fd\u6570"},"1\u9636\u6bb5\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"mount(rootContainer, isHydrate, isSVG) {\n    // \u7701\u7565\u51fd\u6570\n    // \u672a\u6302\u8f7d\u6267\u884c\n    if (!isMounted) {\n        // \u6c34\u5408\u6216\u8005\u6e32\u67d3\u865a\u62df\u8282\u70b9\n        if (isHydrate && hydrate) {\n            hydrate(vnode, rootContainer);\n        }\n        else {\n            console.log('%c\u8fd0\u884c\u65f6==>createAppAPI--mount\u4e2d\u8c03\u7528render:\u6e32\u67d3\u865a\u62df\u8282\u70b9,render\u51fd\u6570\u53ef\u4ee5\u8bf4\u662fvue\u91cd\u70b9\u4e2d\u7684\u91cd\u70b9,vue\u7684patch\u7b97\u6cd5\u4fbf\u662f\u5728\u8fd9\u91cc\u6267\u884c\uff1a', 'color:yellow')\n            render(vnode, rootContainer, isSVG);\n        }\n    }\n    // \u7701\u7565\u51fd\u6570\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const render = (vnode, container, isSVG) => {\n    if (vnode == null) {\n        // \u6ca1\u6709\u4f20\u5165\u65b0\u7684\u865a\u62df\u8282\u70b9\uff0c\u5f53\u5b58\u5728\u65e7\u865a\u62df\u8282\u70b9\uff0c\u5219\u5378\u8f7d\u65e7\u865a\u62df\u8282\u70b9\n        if (container._vnode) {\n            console.log('%crender:--\x3e\u865a\u62df\u8282\u70b9\u4e0d\u5b58\u5728\uff0c\u5219\u9500\u6bc1', 'color:red', '')\n            unmount(container._vnode, null, null, true);\n        }\n    }\n    else {\n        // \u521b\u5efa\u3001\u6216\u8005\u66f4\u65b0\u8282\u70b9\uff0c\u521b\u5efa\u7684\u65f6\u5019\u8fd9\u91cccontainer._vnode\u662f\u4e0d\u5b58\u5728\u7684\n        // \u7b2c\u4e00\u4e2a\u53c2\u6570: \u65e7\u7684\u865a\u62df\u8282\u70b9\n        // \u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u65b0\u7684vnode\n        // \u7b2c\u4e09\u4e2a\u53c2\u6570\uff1avnode\u8f6c\u5316\u4e3adom\uff0c\u6700\u7ec8\u8981\u6302\u8f7d\u7684dom\u5bb9\u5668\n        console.log('%crender:--\x3e\u5b58\u5728\u65b0\u865a\u62df\u8282\u70b9\uff0c\u5219\u6267\u884cpatch\u7b97\u6cd5\uff0c\u6bd4\u8f83\u65b0\u65e7\u865a\u62df\u8282\u70b9,\u865a\u62df\u8282\u70b9\u5b58\u5728\uff0c\u521b\u5efa\u6216\u66f4\u65b0', 'color:red')\n        patch(container._vnode || null, vnode, container, null, null, null, isSVG);\n    }\n    flushPreFlushCbs();\n    flushPostFlushCbs();\n    // \u7f13\u5b58\u865a\u62df\u8282\u70b9\u6570\u636e\uff0c\u4f5c\u4e3a\u5df2\u5b8c\u6210\u6e32\u67d3\u7684\u6807\u8bc6,\u5bb9\u5668\u6307\u5411\u65b0\u7684\u865a\u62df\u7684\u8282\u70b9\n    container._vnode = vnode;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {\n    // \u7701\u7565\u51fd\u6570\n    // \u6839\u636evNode\u7c7b\u578b\uff0c\u6267\u884c\u4e0d\u540c\u7684\u7b97\u6cd5\n    switch (type) {\n            default:\n            if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {\n                console.log(`%c\u8fd0\u884c\u65f6==>patch--\x3e\u8f83\u4e3a\u91cd\u70b9\u76841:ELEMENT\u7c7b\u578b:\u8c03\u7528processElement\u5904\u7406DOM\u5143\u7d20:`, 'color:red')\n                processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n            }\n            else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {\n                console.log(`%c\u8fd0\u884c\u65f6==>patch--\x3e\u8f83\u4e3a\u91cd\u70b9\u76842:COMPONENT:\u8c03\u7528processComponent\u5904\u7406\u7ec4\u4ef6\u5143\u7d20:`, 'color:red')\n                processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n            }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {\n    n2.slotScopeIds = slotScopeIds;\n    if (n1 == null) {\n        if (n2.shapeFlag & 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */) {\n            parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);\n        }\n        else {\n            console.log(`%cpath\u4e4bprocessComponent:1\u8c03\u7528mountComponent:`, 'color:magenta')\n            mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);\n        }\n    }\n    else {\n        console.log(`%cpath\u4e4bprocessComponent:2\u8c03\u7528updateComponent:`, 'color:magenta')\n        updateComponent(n1, n2, optimized);\n    }\n};\n\nconst mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {\n    const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));\n    console.log(`%c\u7ec4\u4ef6\u6302\u8f7d\uff1amountComponent:1\u8c03\u7528createComponentInstance\u521b\u5efa\u7ec4\u4ef6\u5b9e\u4f8b:`, 'color:magenta', instance)\n    if (instance.type.__hmrId) {\n        registerHMR(instance);\n    }\n    {\n        pushWarningContext(initialVNode);\n        startMeasure(instance, `mount`);\n    }\n    // inject renderer internals for keepAlive\n    // \u5c06keepAlive\u6ce8\u5165\u6e32\u67d3\u5668\u5185\u90e8\n    if (isKeepAlive(initialVNode)) {\n        instance.ctx.renderer = internals;\n    }\n    // resolve props and slots for setup context\n    {\n        {\n            startMeasure(instance, `init`);\n        }\n\n        console.log(`%c\u7ec4\u4ef6\u6302\u8f7d\uff1amountComponent:2\u8c03\u7528setupComponent\u8bbe\u7f6e\u7ec4\u4ef6\u5b9e\u4f8b:`, 'color:magenta')\n        console.log('test:\u5b9a\u4e49\u5728data\u7684\u54cd\u5e94\u5f0fstart==>mountComponent\u8c03\u7528setupComponent')\n        setupComponent(instance);\n        {\n            endMeasure(instance, `init`);\n        }\n    }\n    // setup() is async. This component relies on async logic to be resolved\n    // before proceeding\n    if (instance.asyncDep) {\n        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);\n        // Give it a placeholder if this is not hydration\n        // TODO handle self-defined fallback\n        if (!initialVNode.el) {\n            const placeholder = (instance.subTree = createVNode(Comment));\n            processCommentNode(null, placeholder, container, anchor);\n        }\n        return;\n    }\n    console.log(`%c\u7ec4\u4ef6\u6302\u8f7d\uff1a==end mountComponent:3\u8c03\u7528setupRenderEffect \u6267\u884c\u5e26\u526f\u4f5c\u7528\u7684\u6e32\u67d3\u51fd\u6570setupRenderEffect:`, 'color:magenta')\n    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);\n    {\n        popWarningContext();\n        endMeasure(instance, `mount`);\n    }\n};\n")),(0,r.kt)("p",null,"renderComponentRoot \u521b\u5efa\u597dvnode --\x3epatch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const componentUpdateFn = () => {\n    console.log('effect.run==>:\u8c03\u7528componentUpdateFn\u7ec4\u4ef6\u7684\u521d\u59cb\u6302\u8f7d\u548c\u66f4\u65b0')\n  if (!instance.isMounted) {\n          if (el && hydrateNode) {\n                        // \u7701\u7565\u51fd\u6570\n            }\n            else {\n                {\n                    startMeasure(instance, `render`);\n                }\n                console.log('$ceffect.run==>\u8c03\u7528renderComponentRoot\uff0c\u83b7\u53d6\u7ec4\u4ef6\u5f53\u524d\u7684 VNode', 'color:chartreuse')\n                console.log('$ceffect.run==>\u8c03\u7528renderComponentRoot\uff0cast \u521b\u5efarender\u51fd\u6570\u6267\u884c\u65f6\u4f1a\u8bfb\u53d6\u7ec4\u4ef6\u7684\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u8fd9\u4f1a\u89e6\u53d1\u4f9d\u8d56\u6536\u96c6', 'color:chartreuse')\n                const subTree = (instance.subTree = renderComponentRoot(instance));\n                {\n                    endMeasure(instance, `render`);\n                }\n                {\n                    startMeasure(instance, `patch`);\n                }\n                console.log(\"effect.run==>\u521b\u5efa\u597dvnode,\u8c03\u7528patch\u8fdb\u884c\u7ec4\u4ef6\u5185\u5bb9\u7684\u6e32\u67d3,\u628a\u5b50\u6811\u6302\u8f7d\u5230container\u4e0a\")\n                patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);\n                {\n                    endMeasure(instance, `patch`);\n                }\n                initialVNode.el = subTree.el;\n            }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {\n    // \u7701\u7565\u51fd\u6570\n    console.log('\u4f9d\u8d56\u6536\u96c6==>setupRenderEffect:3\u8c03\u7528ReactiveEffect \u521b\u5efa\u4e00\u4e2a\u526f\u4f5c\u7528:', { componentUpdateFn })\n    const effect = (instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope // track it in component's effect scope\n    ));\n    console.log('\u4f9d\u8d56\u6536\u96c6==>a,\u5173\u952e\uff1a\u8c03\u7528effect.run()\u4e3a\u4e86\u89e6\u53d1\u4e00\u4e0b\u4f9d\u8d56\u6536\u96c6')\n    const update = (instance.update = () => effect.run());\n    // \u7701\u7565\u51fd\u6570\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function renderComponentRoot(instance) {\n    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;\n    let result;\n    let fallthroughAttrs;\n    const prev = setCurrentRenderingInstance(instance);\n    {\n      accessedAttrs = false;\n    }\n    try {\n      if (vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */) {\n        // withProxy is a proxy with a different `has` trap only for\n        // runtime-compiled render functions using `with` block.\n        const proxyToUse = withProxy || proxy;\n        console.log('vnode-\u6784\u5efa:start--\x3e\u8c03\u7528Ast\u751f\u6210render\u51fd\u6570', { render })\n        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));\n        console.log('vnode-\u6784\u5efa:end--\x3e\u8c03\u7528Ast\u751f\u6210render\u51fd\u6570render\u8fd4\u56devnode:', { result })\n        fallthroughAttrs = attrs;\n      }\n        // \u7701\u7565\u51fd\u6570\n\n}\n")),(0,r.kt)("h3",{id:"2\u9636\u6bb5\u51fd\u6570"},"2\u9636\u6bb5\u51fd\u6570"),(0,r.kt)("p",null,"\u521d\u59cb\u5316\uff1apath--\x3eprocessComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {\n    /*\n    n1,\u65e7\u8282\u70b9\n    n2,\u65b0\u8282\u70b9\n    container,DOM\u5bb9\u5668\uff0cvNode\u6e32\u67d3\u6210dom\u4f1a\u6302\u8f7d\u5230\u8be5\u8282\u70b9\u4e0b \n    */\n\n    // \u7701\u7565\u51fd\u6570\n\n    const { type, ref, shapeFlag } = n2;\n\n    console.log(`%c\u8fd0\u884c\u65f6==>patch\u5f00\u542f,n1\u65e7\u8282\u70b9\u3001n2\u65b0\u8282\u70b9:`, 'color:yellow', { type, n1, n2 })\n    // \u6839\u636evNode\u7c7b\u578b\uff0c\u6267\u884c\u4e0d\u540c\u7684\u7b97\u6cd5\n    switch (type) {\n\n        // \u7701\u7565\u51fd\u6570\n\n        default:\n            if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {\n                console.log(`%c\u8fd0\u884c\u65f6==>patch--\x3e\u8f83\u4e3a\u91cd\u70b9\u76841:ELEMENT\u7c7b\u578b:\u8c03\u7528processElement\u5904\u7406DOM\u5143\u7d20:`, 'color:red')\n                processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n            }\n            else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {\n                console.log(`%c\u8fd0\u884c\u65f6==>patch--\x3e\u8f83\u4e3a\u91cd\u70b9\u76842:COMPONENT:\u8c03\u7528processComponent\u5904\u7406\u7ec4\u4ef6\u5143\u7d20:`, 'color:red')\n                processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n            }\n            else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {\n                console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406TELEPORT:`, 'color:red')\n                type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);\n            }\n            else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {\n                console.log(`%c\u8fd0\u884c\u65f6==>patch\u5904\u7406SUSPENSE:`, 'color:red')\n                type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);\n            }\n            else {\n                warn$1('Invalid VNode type:', type, `(${typeof type})`);\n            }\n    }\n    // set ref\n    if (ref != null && parentComponent) {\n        setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);\n    }\n")),(0,r.kt)("p",null,"mountElement--\x3emountChildren"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {\n    let el;\n    let vnodeHook;\n    const { type, props, shapeFlag, transition, dirs } = vnode;\n\n    el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);\n    console.log('%c\u6302\u8f7ddom\u5143\u7d20mountElement\u8c03\u7528hostCreateElement\u521b\u5efa\u65b0\u5143\u7d20', 'color:magenta', el)\n    // mount children first, since some props may rely on child content\n    // being already rendered, e.g. `<select value>`\n    if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {\n        console.log('\u6302\u8f7ddom\u5143\u7d20mountElement:\u5904\u7406\u5b50\u8282\u70b9\u662f\u6587\u672c\u5185\u5bb9\u7684\u60c5\u51b5')\n        hostSetElementText(el, vnode.children);\n    }\n    else if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {\n        console.log('%c\u6302\u8f7ddom\u5143\u7d20mountElement:\u5904\u7406\u5b50\u8282\u70b9\u662f\u6570\u7ec4\u7684\u60c5\u51b5,\u8c03\u7528mountChildren\u5bf9vnode.children\u8fdb\u884c\u9012\u5f52', 'color:magenta', vnode.children)\n        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);\n    }\n    // \u7701\u7565\u51fd\u6570\n}\n")),(0,r.kt)("p",null,"mountChildren\u5f00\u59cb\u9012\u5f52"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {\n    for (let i = start; i < children.length; i++) {\n        const child = (children[i] = optimized\n            ? cloneIfMounted(children[i])\n            : normalizeVNode(children[i]));\n        console.log('%c\u8c03\u7528mountChildren\u9012\u5f52\u8c03\u7528patch', 'color:cyan')\n        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n    }\n};\n")),(0,r.kt)("p",null,"\u5904\u7406\u751f\u547d\u5468\u671f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const componentUpdateFn = () => {\n\n    // \u7701\u7565\n\n    else {\n        console.log(\"effect.run==>\u521b\u5efa\u597dvnode,\u8c03\u7528patch\u8fdb\u884c\u7ec4\u4ef6\u5185\u5bb9\u7684\u6e32\u67d3,\u628a\u5b50\u6811\u6302\u8f7d\u5230container\u4e0a\")\n        patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);\n    }\n\n    // \u7701\u7565\n\n    console.log('%ceffect.run==>:\u8c03\u7528patch\u8fdb\u884c\u7ec4\u4ef6\u6e32\u67d3\u7ed3\u675f,\u5f00\u59cb\u5904\u7406\u751f\u547d\u5468\u671f\u51fd\u6570', 'color:yellow')\n    // mounted hook\n    if (m) {\n        console.log('effect.run==>:\u751f\u547d\u5468\u671fmounted')\n        queuePostRenderEffect(m, parentSuspense);\n    }\n    // onVnodeMounted\n    if (!isAsyncWrapperVNode &&\n        (vnodeHook = props && props.onVnodeMounted)) {\n        const scopedInitialVNode = initialVNode;\n        queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);\n    }\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"data\u53d1\u751f\u6539\u53d8dom\u66f4\u65b0\u6d41\u7a0b"},"data\u53d1\u751f\u6539\u53d8dom\u66f4\u65b0\u6d41\u7a0b"),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"./Vue/data%E5%8F%91%E7%94%9F%E6%94%B9%E5%8F%98dom%E6%9B%B4%E6%96%B0%E6%B5%81%E7%A8%8B"},"data\u53d1\u751f\u6539\u53d8dom\u66f4\u65b0\u6d41\u7a0b")),(0,r.kt)("h2",{id:"v-for\u7684key"},"v-for\u7684",(0,r.kt)("inlineCode",{parentName:"h2"},":key")),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"./Vue/v-for%E7%9A%84key"},"v-for\u7684key")))}u.isMDXComponent=!0}}]);