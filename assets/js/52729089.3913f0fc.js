"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,c={unversionedId:"React/react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render",id:"React/react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render",title:"01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render",description:"html",source:"@site/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render.md",sourceDirName:"React/00-react\u51fd\u6570\u89e3\u6790",slug:"/React/react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render",permalink:"/React/react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/00-react\u51fd\u6570\u89e3\u6790/01-18\u7248\u672c\u4e2d\u521d\u59cb\u5316\u8c03\u7528render-ReactDOMRoot.prototype.render.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",permalink:"/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6"},next:{title:"05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot",permalink:"/React/react\u51fd\u6570\u89e3\u6790/05-1-\u6e32\u67d3\u6d41\u7a0b-performConcurrentWorkOnRoot"}},l={},s=[{value:"html",id:"html",level:2},{value:"\u7b2c\u4e00\u6b65\uff1acreateRoot",id:"\u7b2c\u4e00\u6b65createroot",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5728 return new ReactDOMRoot(root) \u8c03\u7528\u4e0b\u9762\u51fd\u6570",id:"\u7b2c\u4e8c\u6b65\u5728-return-new-reactdomrootroot-\u8c03\u7528\u4e0b\u9762\u51fd\u6570",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"html"},"html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script type=\"text/babel\">\n  function Test() {\n    const [data, setData] = React.useState('\u6539\u53d8\u6211')\n\n    const onClickText = () => {\n      console.log('onClick');\n      setData('\u52aa\u529b')\n    }\n\n    return (\n      <div>\n        <button onClick={onClickText} className=\"btn\">Click Me</button>\n        <span>{data}</span>\n      </div>\n    )\n  }\n\n  // 17 \u5199\u6cd5\n  // ReactDOM.render(<Test />, document.getElementById('root'))\n\n  // 18 \u5199\u6cd5\n  const root = ReactDOM.createRoot(document.getElementById('root'))\n  root.render(<Test />);\n<\/script>\n")),(0,o.kt)("h2",{id:"\u7b2c\u4e00\u6b65createroot"},"\u7b2c\u4e00\u6b65\uff1acreateRoot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function createRoot(container, options) {\n  if (!isValidContainer(container)) {\n    throw new Error('createRoot(...): Target container is not a DOM element.');\n  }\n\n  warnIfReactDOMContainerInDEV(container);\n  var isStrictMode = false;\n  var concurrentUpdatesByDefaultOverride = false;\n  var identifierPrefix = '';\n  var onRecoverableError = defaultOnRecoverableError;\n  var transitionCallbacks = null;\n\n  if (options !== null && options !== undefined) {\n    {\n      if (options.hydrate) {\n        warn('hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.');\n      } else {\n        if (typeof options === 'object' && options !== null && options.$$typeof === REACT_ELEMENT_TYPE) {\n          error('You passed a JSX element to createRoot. You probably meant to ' + 'call root.render instead. ' + 'Example usage:\\n\\n' + '  let root = createRoot(domContainer);\\n' + '  root.render(<App />);');\n        }\n      }\n    }\n\n    if (options.unstable_strictMode === true) {\n      isStrictMode = true;\n    }\n\n    if (options.identifierPrefix !== undefined) {\n      identifierPrefix = options.identifierPrefix;\n    }\n\n    if (options.onRecoverableError !== undefined) {\n      onRecoverableError = options.onRecoverableError;\n    }\n\n    if (options.transitionCallbacks !== undefined) {\n      transitionCallbacks = options.transitionCallbacks;\n    }\n  }\n\n  console.log('\u521d\u59cb--\x3ecreateRoot')\n  var root = createContainer(container, ConcurrentRoot, null, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);\n  markContainerAsRoot(root.current, container);\n  var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;\n  listenToAllSupportedEvents(rootContainerElement);\n  return new ReactDOMRoot(root);\n}\n")),(0,o.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u5728-return-new-reactdomrootroot-\u8c03\u7528\u4e0b\u9762\u51fd\u6570"},"\u7b2c\u4e8c\u6b65\uff1a\u5728 return new ReactDOMRoot(root) \u8c03\u7528\u4e0b\u9762\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function (children) {\n  var root = this._internalRoot;\n\n  if (root === null) {\n    throw new Error('Cannot update an unmounted root.');\n  }\n\n  {\n    if (typeof arguments[1] === 'function') {\n      error('render(...): does not support the second callback argument. ' + 'To execute a side effect after rendering, declare it in a component body with useEffect().');\n    } else if (isValidContainer(arguments[1])) {\n      error('You passed a container to the second argument of root.render(...). ' + \"You don't need to pass it again since you already passed it to create the root.\");\n    } else if (typeof arguments[1] !== 'undefined') {\n      error('You passed a second argument to root.render(...) but it only accepts ' + 'one argument.');\n    }\n\n    var container = root.containerInfo;\n\n    if (container.nodeType !== COMMENT_NODE) {\n      var hostInstance = findHostInstanceWithNoPortals(root.current);\n\n      if (hostInstance) {\n        if (hostInstance.parentNode !== container) {\n          error('render(...): It looks like the React-rendered content of the ' + 'root container was removed without using React. This is not ' + 'supported and will cause errors. Instead, call ' + \"root.unmount() to empty a root's container.\");\n        }\n      }\n    }\n  }\n\n  console.log('\u521d\u59cb--\x3eReactDOMRoot.prototype.render');\n  console.log('update-Container 1');\n  updateContainer(children, root, null, null);\n};\n")))}u.isMDXComponent=!0}}]);