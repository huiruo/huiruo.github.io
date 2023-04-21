"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[639],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||p;return t?r.createElement(h,a(a({ref:n},i),{},{components:t})):r.createElement(h,a({ref:n},i))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=d;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const p={title:"api-memo()\u548cshouldComponentUpdate()",sidebar_position:51},a=void 0,l={unversionedId:"React/api-memo()\u548cshouldComponentUpdate()",id:"React/api-memo()\u548cshouldComponentUpdate()",title:"api-memo()\u548cshouldComponentUpdate()",description:"React.memo()\u548cshouldComponentUpdate()",source:"@site/programming-tech/React/api-memo()\u548cshouldComponentUpdate().md",sourceDirName:"React",slug:"/React/api-memo()\u548cshouldComponentUpdate()",permalink:"/React/api-memo()\u548cshouldComponentUpdate()",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/React/api-memo()\u548cshouldComponentUpdate().md",tags:[],version:"current",sidebarPosition:51,frontMatter:{title:"api-memo()\u548cshouldComponentUpdate()",sidebar_position:51},sidebar:"docs",previous:{title:"api-forwardRef",permalink:"/React/api-forwardRef"},next:{title:"api-useCallback",permalink:"/React/api-useCallback"}},m={},s=[{value:"React.memo()\u548cshouldComponentUpdate()",id:"reactmemo\u548cshouldcomponentupdate",level:2},{value:"\u6ce8\u610f\uff1ashouldComponentUpdate return true \u5c31\u4f1arender",id:"\u6ce8\u610fshouldcomponentupdate-return-true-\u5c31\u4f1arender",level:3},{value:"memo\u8fd4\u56detrue\u65f6\uff0c\u4e0d\u4f1a\u89e6\u53d1render",id:"memo\u8fd4\u56detrue\u65f6\u4e0d\u4f1a\u89e6\u53d1render",level:3},{value:"memo\u6e90\u7801",id:"memo\u6e90\u7801",level:3},{value:"\u5728beginWork\u4e2d, \u901a\u8fc7updateMemoComponent\u5bf9<code>REACT_MEMO_TYPE</code>\u7c7b\u578b\u7684\u5143\u7d20 \u8fdb\u884c\u5904\u7406",id:"\u5728beginwork\u4e2d-\u901a\u8fc7updatememocomponent\u5bf9react_memo_type\u7c7b\u578b\u7684\u5143\u7d20-\u8fdb\u884c\u5904\u7406",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3}],i={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"reactmemo\u548cshouldcomponentupdate"},"React.memo()\u548cshouldComponentUpdate()"),(0,o.kt)("p",null,"React.memo(type, compare)\u662f\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u9700\u8981\u4f18\u5316\u7684\u7ec4\u4ef6\uff0c\u7b2c\u4e8c\u4e2a\u662f\u975e\u5fc5\u586b\u7684\u81ea\u5b9a\u4e49\u7684compare\u51fd\u6570\uff0c\u5982\u679c\u4e0d\u4f20\u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684compare\u51fd\u6570\u3002\u901a\u8fc7compare\u6bd4\u8f83\u65b0\u65e7props\u662f\u5426\u201c\u76f8\u540c\u201d\uff0c\u9009\u62e9\u662f\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u8fd8\u662f\u8df3\u8fc7\u6e32\u67d3\u7ec4\u4ef6\u7684\u64cd\u4f5c\u5e76\u76f4\u63a5\u590d\u7528\u6700\u8fd1\u4e00\u6b21\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5176\u53ea\u4f1a\u5bf9 props \u505a\u6d45\u5c42\u5bf9\u6bd4\uff0c\u9047\u5230\u5c42\u7ea7\u6bd4\u8f83\u6df1\u7684\u590d\u6742\u5bf9\u8c61\u65f6\u5931\u6548\u3002\u5bf9\u4e8e\u7279\u5b9a\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u80fd\u9700\u8981\u7c7b\u4f3c shouldComponentUpdate \u8fd9\u6837\u7684 API\uff0c\u8fd9\u65f6\u901a\u8fc7 memo \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u5b9e\u73b0\uff1a"),(0,o.kt)("h3",{id:"\u6ce8\u610fshouldcomponentupdate-return-true-\u5c31\u4f1arender"},"\u6ce8\u610f\uff1ashouldComponentUpdate return true \u5c31\u4f1arender"),(0,o.kt)("p",null,"\u5728render\u51fd\u6570\u8c03\u7528\u524d\u5224\u65ad\uff1a\u5982\u679c\u524d\u540estate\u4e2dNumber\u4e0d\u53d8\uff0c\u901a\u8fc7return false\u963b\u6b62render\u8c03\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"shouldComponentUpdate(nextProps,nextState){\n    if(nextState.Number == this.state.Number){\n      return false\n    }\n}\n")),(0,o.kt)("h3",{id:"memo\u8fd4\u56detrue\u65f6\u4e0d\u4f1a\u89e6\u53d1render"},"memo\u8fd4\u56detrue\u65f6\uff0c\u4e0d\u4f1a\u89e6\u53d1render"),(0,o.kt)("p",null,"React.memo\uff0cReact\u5c06\u8df3\u8fc7\u6e32\u67d3\u7ec4\u4ef6\u7684\u64cd\u4f5c\u5e76\u76f4\u63a5\u590d\u7528\u6700\u8fd1\u4e00\u6b21\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff0cReact.memo \u4ec5\u68c0\u67e5 props \u7684\u53d8\u66f4\uff0cReact.memo\u5305\u88f9\u7684\u7ec4\u4ef6\u5176\u5b9e\u73b0\u4e2d\u62e5\u6709useState\u6216useContext\u7684 hook\uff0c\u5f53context/state\u53d8\u5316\u65f6\uff0c\u5b83\u4ecd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("h3",{id:"memo\u6e90\u7801"},"memo\u6e90\u7801"),(0,o.kt)("p",null,"\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f React \u7ec4\u4ef6\uff0c\u7b2c\u4e8c\u4e2a\u662f\u4e00\u4e2a\u6bd4\u8f83\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u662f\u65e7\u7684 props \u548c\u65b0\u7684 props\uff0c\u8fd4\u56de\u503c\u5982\u679c\u4e3a false \u8868\u793a\u91cd\u65b0\u6e32\u67d3\u8be5\u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function memo(type, compare) {\n{\n    if (!isValidElementType(type)) {\n    error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);\n    }\n}\n\nvar elementType = {\n    $$typeof: REACT_MEMO_TYPE,\n    type: type,\n    compare: compare === undefined ? null : compare\n};\n\n{\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n    enumerable: false,\n    configurable: true,\n    get: function () {\n        return ownName;\n    },\n    set: function (name) {\n        ownName = name; // The inner component shouldn't inherit this display name in most cases,\n        // because the component may be used elsewhere.\n        // But it's nice for anonymous functions to inherit the name,\n        // so that our component-stack generation logic will display their frames.\n        // An anonymous function generally suggests a pattern like:\n        //   React.memo((props) => {...});\n        // This kind of inner function is not used elsewhere so the side effect is okay.\n\n        if (!type.name && !type.displayName) {\n        type.displayName = name;\n        }\n    }\n    });\n}\n\nreturn elementType;\n}\n")),(0,o.kt)("p",null,"\u521d\u6b21\u6e32\u67d3:updateMemoComponent\u6216\u8005 updateSimpleMemoComponent \u8fdb\u884c\u5904\u7406"),(0,o.kt)("p",null,"updateMemoComponent\u548cupdateSimpleMemoComponent\u5185\u90e8\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"compare"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"shallowEqual"),"\u5bf9\u6bd4 props, \u6765\u786e\u5b9amemo\u5305\u88f9\u7684\u7ec4\u4ef6\u662f\u5426\u547d\u4e2d bailoutOnAlreadyFinishedWork."),(0,o.kt)("h3",{id:"\u5728beginwork\u4e2d-\u901a\u8fc7updatememocomponent\u5bf9react_memo_type\u7c7b\u578b\u7684\u5143\u7d20-\u8fdb\u884c\u5904\u7406"},"\u5728beginWork\u4e2d, \u901a\u8fc7updateMemoComponent\u5bf9",(0,o.kt)("inlineCode",{parentName:"h3"},"REACT_MEMO_TYPE"),"\u7c7b\u578b\u7684\u5143\u7d20 \u8fdb\u884c\u5904\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679ccompare === null \u5e76\u4e14 isSimpleFunctionComponent===true(\u5373sampleMemoComponent) ",(0,o.kt)("br",null),"\n\u5219\u4fee\u6539fiber.tag === SimpleMemoComponent,\u5728\u66f4\u65b0\u9636\u6bb5\u4f7f\u7528 updateSimpleMemoComponent \u66f4\u65b0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u6ee1\u8db3\u4e0a\u9762\u7684\u6761\u4ef6, \u5219\u4f7f\u7528createFiberFromTypeAndProps\u521b\u5efa\u5b50fiber,\u7ee7\u7eed\u5411\u4e0b\u8c03\u548c\u5b50\u6811"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function updateMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {\nif (current === null) {\n    var type = Component.type;\n\n    if (isSimpleFunctionComponent(type) && Component.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.\n    Component.defaultProps === undefined) {\n    var resolvedType = type;\n\n    {\n        resolvedType = resolveFunctionForHotReloading(type);\n    } // If this is a plain function component without default props,\n    // and with only the default shallow comparison, we upgrade it\n    // to a SimpleMemoComponent to allow fast path updates.\n\n\n    workInProgress.tag = SimpleMemoComponent;\n    workInProgress.type = resolvedType;\n\n    {\n        validateFunctionComponentInDev(workInProgress, type);\n    }\n\n    return updateSimpleMemoComponent(current, workInProgress, resolvedType, nextProps, renderLanes);\n    }\n\n    {\n    var innerPropTypes = type.propTypes;\n\n    if (innerPropTypes) {\n        // Inner memo component props aren't currently validated in createElement.\n        // We could move it there, but we'd still need this for lazy code path.\n        checkPropTypes(innerPropTypes, nextProps, // Resolved props\n        'prop', getComponentNameFromType(type));\n    }\n    }\n\n    console.log('%c=updateMemoComponent\u8c03\u7528createFiberFromTypeAndProps--\x3ereturn', 'color:yellow', { child });\n    var child = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);\n    child.ref = workInProgress.ref;\n    child.return = workInProgress;\n    workInProgress.child = child;\n    return child;\n}\n\n{\n    var _type = Component.type;\n    var _innerPropTypes = _type.propTypes;\n\n    if (_innerPropTypes) {\n    // Inner memo component props aren't currently validated in createElement.\n    // We could move it there, but we'd still need this for lazy code path.\n    checkPropTypes(_innerPropTypes, nextProps, // Resolved props\n        'prop', getComponentNameFromType(_type));\n    }\n}\n\nvar currentChild = current.child; // This is always exactly one child\n\nvar hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current, renderLanes);\n\nif (!hasScheduledUpdateOrContext) {\n    // This will be the props with resolved defaultProps,\n    // unlike current.memoizedProps which will be the unresolved ones.\n    var prevProps = currentChild.memoizedProps; // Default to shallow comparison\n\n    var compare = Component.compare;\n    compare = compare !== null ? compare : shallowEqual;\n\n    if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {\n    return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);\n    }\n} // React DevTools reads this flag.\n\n\nworkInProgress.flags |= PerformedWork;\nvar newChild = createWorkInProgress(currentChild, nextProps);\nnewChild.ref = workInProgress.ref;\nnewChild.return = workInProgress;\nworkInProgress.child = newChild;\nreturn newChild;\n}\n")),(0,o.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\n\nfunction Child({seconds}){\n    console.log('I am rendering');\n    return (\n        <div>I am update every {seconds} seconds</div>\n    )\n};\n\nfunction isEqual(prevProps, nextProps) {\n    if(prevProps.seconds===nextProps.seconds){\n        // isEqual \u8fd4\u56de true \u65f6\uff0c\u4e0d\u4f1a\u89e6\u53d1 render\n        return true\n    }else {\n        // false render\n        return false\n    }\n\n}\n\nexport default React.memo(Child,isEqual)\n")))}c.isMDXComponent=!0}}]);