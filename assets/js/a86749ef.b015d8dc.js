"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=p,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:p,a[1]=l;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),p=(t(67294),t(3905));const o={title:"\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",sidebar_position:16},a=void 0,l={unversionedId:"React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",id:"React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",title:"\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",description:"\u9ad8\u9636\u51fd\u6570",source:"@site/programming-tech/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6.md",sourceDirName:"React",slug:"/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",permalink:"/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",sidebar_position:16},sidebar:"docs",previous:{title:"\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",permalink:"/React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks"},next:{title:"\u5e93-redux-mobx",permalink:"/React/\u5e93-redux-mobx"}},s={},i=[{value:"\u9ad8\u9636\u51fd\u6570",id:"\u9ad8\u9636\u51fd\u6570",level:2},{value:"\u9ad8\u9636\u7ec4\u4ef6(high-order component)",id:"\u9ad8\u9636\u7ec4\u4ef6high-order-component",level:2},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u9ad8\u9636\u7ec4\u4ef6\u7684\u5b9e\u73b0\u65b9\u6cd5-\u5c5e\u6027\u4ee3\u7406",id:"\u9ad8\u9636\u7ec4\u4ef6\u7684\u5b9e\u73b0\u65b9\u6cd5-\u5c5e\u6027\u4ee3\u7406",level:2},{value:"\u5c5e\u6027\u4ee3\u7406\u7684\u7528\u9014",id:"\u5c5e\u6027\u4ee3\u7406\u7684\u7528\u9014",level:3},{value:"1.\u5c5e\u6027\u4ee3\u7406\u5b9e\u73b0\u9ad8\u9636\u51fd\u6570",id:"1\u5c5e\u6027\u4ee3\u7406\u5b9e\u73b0\u9ad8\u9636\u51fd\u6570",level:3},{value:"\u65b9\u5f0f\u4e00\uff1a",id:"\u65b9\u5f0f\u4e00",level:3},{value:"\u65b9\u5f0f\u4e8c\uff1a",id:"\u65b9\u5f0f\u4e8c",level:3},{value:"\u529f\u80fd\u4e0a\uff0c\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u63a7\u5236 props\u3001\u901a\u8fc7 refs \u4f7f\u7528\u5f15\u7528\u3001\u62bd\u8c61 state \u548c\u4f7f\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9",id:"\u529f\u80fd\u4e0a\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u63a7\u5236-props\u901a\u8fc7-refs-\u4f7f\u7528\u5f15\u7528\u62bd\u8c61-state-\u548c\u4f7f\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9",level:2},{value:"1.\u63a7\u5236 props",id:"1\u63a7\u5236-props",level:3},{value:"2.\u901a\u8fc7 refs \u4f7f\u7528\u5f15\u7528",id:"2\u901a\u8fc7-refs-\u4f7f\u7528\u5f15\u7528",level:3},{value:"3.  \u8c03\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u7b80\u5355\u65b9\u5f0f\u5b9e\u73b0\u3002",id:"3--\u8c03\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\u53ef\u4ee5\u7528\u7b80\u5355\u65b9\u5f0f\u5b9e\u73b0",level:3},{value:"4.\u5305\u88f9WrappedComponent",id:"4\u5305\u88f9wrappedcomponent",level:3},{value:"\u53cd\u5411\u7ee7\u627f",id:"\u53cd\u5411\u7ee7\u627f",level:2}],c={toc:i},m="wrapper";function u(e){let{components:n,...t}=e;return(0,p.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u9ad8\u9636\u51fd\u6570"},"\u9ad8\u9636\u51fd\u6570"),(0,p.kt)("p",null,"\u5c06\u5176\u4ed6\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u6216\u5c06\u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\uff0c\u5c06\u5176\u79f0\u4e3a\u9ad8\u9636\u51fd\u6570\u3002"),(0,p.kt)("h2",{id:"\u9ad8\u9636\u7ec4\u4ef6high-order-component"},"\u9ad8\u9636\u7ec4\u4ef6(high-order component)"),(0,p.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u9ad8\u9636\u51fd\u6570\uff0c\u63a5\u6536 React \u7ec4\u4ef6\u4f5c\u4e3a\u8f93\u5165\uff0c\u8f93\u51fa\u4e00\u4e2a\u65b0\u7684 React \u7ec4\u4ef6\u3002"),(0,p.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u8ba9\u4ee3\u7801\u66f4\u5177\u6709\u590d\u7528\u6027\u3001\u903b\u8f91\u6027\u4e0e\u62bd\u8c61\u7279\u5f81\u3002\u53ef\u4ee5\u5bf9 render \u65b9\u6cd5\u4f5c\u52ab\u6301\uff0c\u4e5f\u53ef\u4ee5\u63a7\u5236 props \u4e0e state\u3002"),(0,p.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u5176\u5b9e\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u6536\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u88c5\u7ec4\u4ef6\u4f5c\u4e3a\u8fd4\u56de\u503c\uff0c\u7c7b\u4f3c\u4e8e\u9ad8\u9636\u51fd\u6570\u3002\u9ad8\u9636\u7ec4\u4ef6\u548c\u88c5\u9970\u5668\u5c31\u662f\u4e00\u4e2a\u6a21\u5f0f\uff0c\u56e0\u6b64\uff0c\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u4f5c\u4e3a\n\u88c5\u9970\u5668\u6765\u4f7f\u7528\u3002"),(0,p.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\uff08HOC\uff09\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e14\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\uff0c\u5b83\u53ea\u662f\u4e00\u79cd\u7ec4\u4ef6\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u662f\u7531react\u81ea\u8eab\u7684\u7ec4\u5408\u6027\u8d28\u5fc5\u7136\u4ea7\u751f\u7684\u3002\u6211\u4eec\u5c06\u5b83\u4eec\u79f0\u4e3a\u7eaf\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ef\u4ee5\u63a5\u53d7\u4efb\u4f55\u52a8\u6001\u63d0\u4f9b\u7684\u5b50\u7ec4\u4ef6\uff0c\u4f46\u5b83\u4eec\u4e0d\u4f1a\u4fee\u6539\u6216\u590d\u5236\u5176\u8f93\u5165\u7ec4\u4ef6\u4e2d\u7684\u4efb\u4f55\u884c\u4e3a\u3002"),(0,p.kt)("h3",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5c5e\u6027\u4ee3\u7406\uff1a\u53ef\u4ee5\u5c06 HOC \u63a5\u6536\u5230\u7684 props \u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\uff0c\u6216\u8005\u5c06\u989d\u5916\u7684 props \u4f20\u9012\u7ed9\u88ab\u5305\u88c5\u7ec4\u4ef6\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6e32\u67d3\u52ab\u6301\uff1a\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u7ec4\u4ef6\u7684\u6e32\u67d3\u903b\u8f91\u6765\u5b9e\u73b0\u4e00\u4e9b\u7279\u5b9a\u7684\u9700\u6c42\uff0c\u4f8b\u5982\uff1a\u6e32\u67d3\u6761\u4ef6\u5224\u65ad\u3001\u9519\u8bef\u5904\u7406\u7b49\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u884c\u4e3a\u6ce8\u5165\uff1a\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u6ce8\u5165\u4e00\u4e9b\u884c\u4e3a\uff0c\u4f8b\u5982\uff1a\u8ba2\u9605/\u53d6\u6d88\u8ba2\u9605\u4e8b\u4ef6\u3001\u83b7\u53d6/\u91ca\u653e\u6570\u636e\u7b49\u3002"))),(0,p.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,p.kt)("p",null,"withLogging \u662f\u4e00\u4e2a HOC \u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u3002\u65b0\u7684\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u5728 componentDidMount \u548c componentWillUnmount \u65b9\u6cd5\u4e2d\u6253\u5370\u65e5\u5fd7\uff0c\u7528\u6765\u8ddf\u8e2a\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u3002\u7136\u540e\uff0c\u6211\u4eec\u5c06\u539f\u7ec4\u4ef6\u901a\u8fc7 {...this.props} \u7684\u65b9\u5f0f\u4f20\u9012\u7ed9\u65b0\u7684\u7ec4\u4ef6\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u5e38\u6e32\u67d3\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n\nfunction withLogging(WrappedComponent) {\n  return class extends React.Component {\n    componentDidMount() {\n      console.log(`Component ${WrappedComponent.name} mounted`);\n    }\n\n    componentWillUnmount() {\n      console.log(`Component ${WrappedComponent.name} will unmount`);\n    }\n\n    render() {\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n}\n\nfunction MyComponent(props) {\n  return <div>{props.text}</div>;\n}\n\nexport default withLogging(MyComponent);\n")),(0,p.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e HOC \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u65b0\u7ec4\u4ef6\uff0c\u56e0\u6b64\u5b83\u4f1a\u8986\u76d6\u539f\u7ec4\u4ef6\u7684 displayName \u5c5e\u6027\u3002\u5982\u679c\u9700\u8981\u5728\u5f00\u53d1\u5de5\u5177\u4e2d\u6b63\u786e\u5730\u663e\u793a\u7ec4\u4ef6\u540d\u79f0\uff0c\u53ef\u4ee5\u5728 HOC \u4e2d\u624b\u52a8\u8bbe\u7f6e displayName \u5c5e\u6027\uff0c\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function withLogging(WrappedComponent) {\n  class WithLogging extends React.Component {\n    // ...\n  }\n\n  WithLogging.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name})`;\n\n  return WithLogging;\n}\n")),(0,p.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport withLogging from './withLogging';\n\nfunction App() {\n  return <div><MyComponent text=\"Hello, world!\" /></div>;\n}\n\nexport default withLogging(App);\n")),(0,p.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 App \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u88ab\u5305\u88c5\u540e\u7684 MyComponent \u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u6253\u5370\u65e5\u5fd7\uff0c\u4ee5\u4fbf\u4e8e\u8c03\u8bd5\u548c\u8ddf\u8e2a\u7ec4\u4ef6\u7684\u72b6\u6001\u53d8\u5316\u3002"),(0,p.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528 HOC \u5305\u88c5\u7ec4\u4ef6\u65f6\uff0c\u8981\u6ce8\u610f props \u7684\u4f20\u9012\u95ee\u9898\u3002\u7531\u4e8e HOC \u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u539f\u7ec4\u4ef6\u7684 props \u4f20\u9012\u7ed9\u65b0\u7ec4\u4ef6\uff0c\u5426\u5219\u65b0\u7ec4\u4ef6\u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 {...this.props} \u5c06\u539f\u7ec4\u4ef6\u7684 props \u4f20\u9012\u7ed9\u4e86\u65b0\u7ec4\u4ef6\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u539f\u7ec4\u4ef6\u7684 props \u80fd\u591f\u6b63\u5e38\u5730\u4f20\u9012\u7ed9\u5305\u88c5\u540e\u7684\u7ec4\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u9ad8\u9636\u7ec4\u4ef6\u7684\u5b9e\u73b0\u65b9\u6cd5-\u5c5e\u6027\u4ee3\u7406"},"\u9ad8\u9636\u7ec4\u4ef6\u7684\u5b9e\u73b0\u65b9\u6cd5-\u5c5e\u6027\u4ee3\u7406"),(0,p.kt)("p",null,"\u5173\u4e8e\u53cd\u5411\u7ee7\u627f\uff0c\u6bd4\u8f83\u590d\u6742,\u5b9e\u9645\u4e0a\uff0c\u56e0\u4e3a\u73b0\u5728\u7c7b\u7ec4\u4ef6\u7528\u7684\u5e76\u4e0d\u591a\uff0c\u53cd\u5411\u7ee7\u627f\u4e5f\u5c31\u7528\u7684\u4e0d\u591a\u4e86\u3002 \u4e00\u822c\u7684\uff0c\u6211\u4eec\u901a\u8fc7\u5c5e\u6027\u4ee3\u7406\u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u89e3\u51b3\u5927\u90e8\u5206\u95ee\u9898\u3002"),(0,p.kt)("p",null,"\u5c5e\u6027\u7ec4\u4ef6\u901a\u8fc7\u88ab\u5305\u88f9\u7684 React \u7ec4\u4ef6\u6765\u64cd\u4f5c props\u3002"),(0,p.kt)("p",null,"\u5c5e\u6027\u4ee3\u7406\u7ec4\u4ef6\u7ee7\u627f\u81eaReact.Component\uff0c\u901a\u8fc7\u4f20\u9012\u7ed9\u88ab\u5305\u88c5\u7684\u7ec4\u4ef6props\u5f97\u540d"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// \u5c5e\u6027\u4ee3\u7406\uff0c\u628a\u9ad8\u9636\u7ec4\u4ef6\u63a5\u6536\u5230\u7684\u5c5e\u6027\u4f20\u9012\u7ed9\u4f20\u8fdb\u6765\u7684\u7ec4\u4ef6\nfunction HOC(WrappedComponent) {\n  return class PP extends React.Component {\n    render() {\n      return <WrappedComponent {...this.props}/>\n    }\n  }\n}\n")),(0,p.kt)("h3",{id:"\u5c5e\u6027\u4ee3\u7406\u7684\u7528\u9014"},"\u5c5e\u6027\u4ee3\u7406\u7684\u7528\u9014"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u628a WrappedComponent \u4e0e\u5176\u5b83 elements \u5305\u88c5\u5728\u4e00\u8d77"),(0,p.kt)("li",{parentName:"ul"},"\u66f4\u6539 props\uff0c\u53ef\u4ee5\u5bf9\u4f20\u9012\u7684\u5305\u88f9\u7ec4\u4ef6\u7684WrappedComponent\u7684props\u8fdb\u884c\u63a7\u5236"),(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7 refs \u83b7\u53d6\u7ec4\u4ef6\u5b9e\u4f8b")),(0,p.kt)("h3",{id:"1\u5c5e\u6027\u4ee3\u7406\u5b9e\u73b0\u9ad8\u9636\u51fd\u6570"},"1.\u5c5e\u6027\u4ee3\u7406\u5b9e\u73b0\u9ad8\u9636\u51fd\u6570"),(0,p.kt)("p",null,"\u5728 render \u65b9\u6cd5\u4e2d\u8fd4\u56de\u4f20\u5165 WrappedComponent \u7684 React \u7ec4\u4ef6\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7\u9ad8\u9636\u7ec4\u4ef6\u6765\u4f20\u9012 props\uff0c\u8fd9\u79cd\u65b9\u6cd5\u5373\u4e3a\u5c5e\u6027\u4ee3\u7406\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const MyContainer = (WrappedComponent) => {\n    return class extends Component {\n        render() {\n            return (\n                <WrappedComponent\n                    {...props}\n                />\n            )\n        }\n    }\n}\nexport default MyContainer;\n")),(0,p.kt)("p",null,"\u539f\u59cb\u7ec4\u4ef6\u60f3\u8981\u5177\u5907\u9ad8\u9636\u7ec4\u4ef6\u5bf9\u5b83\u7684\u4fee\u9970\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u3002"),(0,p.kt)("h3",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"export default MyContainer;\n\nclass MyComponent extends Component {\n}\n\nexport default MyContainer(MyComponent);\n")),(0,p.kt)("h3",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// ES7 \u6dfb\u52a0\u4e86 decorator \u7684\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 decorator \u6765\u8f6c\u6362\uff0c\u4ee5\u6b64\u7b80\u5316\u9ad8\u9636\u7ec4\u4ef6\u7684\u8c03\u7528\u3002\n@MyContainer\nclass MyComponent extends Component {\n}\n\nexport default MyComponent;\n")),(0,p.kt)("h2",{id:"\u529f\u80fd\u4e0a\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u63a7\u5236-props\u901a\u8fc7-refs-\u4f7f\u7528\u5f15\u7528\u62bd\u8c61-state-\u548c\u4f7f\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9"},"\u529f\u80fd\u4e0a\uff0c\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u63a7\u5236 props\u3001\u901a\u8fc7 refs \u4f7f\u7528\u5f15\u7528\u3001\u62bd\u8c61 state \u548c\u4f7f\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9"),(0,p.kt)("p",null,"\u5c5e\u6027\u4ee3\u7406\u6709\u5982\u4e0b4\u70b9\u5e38\u89c1\u4f5c\u7528\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u64cd\u4f5cprops"),(0,p.kt)("li",{parentName:"ol"},"\u901a\u8fc7refs\u8bbf\u95ee\u7ec4\u4ef6\u5b9e\u4f8b"),(0,p.kt)("li",{parentName:"ol"},"\u63d0\u53d6state"),(0,p.kt)("li",{parentName:"ol"},"\u7528\u5176\u4ed6\u5143\u7d20\u5305\u88f9WrappedComponent\uff0c\u5b9e\u73b0\u5e03\u5c40\u7b49\u76ee\u7684")),(0,p.kt)("h3",{id:"1\u63a7\u5236-props"},"1.\u63a7\u5236 props"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8bfb\u53d6\u3001\u589e\u52a0\u3001\u7f16\u8f91\u6216\u662f\u79fb\u9664\u4ece WrappedComponent \u4f20\u8fdb\u6765\u7684 props\uff0c\u9700\u8981\u8003\u8651\u5230\u4e0d\u80fd\u7834\u574f\u539f\u7ec4\u4ef6\u3002\u5e94\u8be5\u5c3d\u91cf\u5bf9\u9ad8\u9636\u7ec4\u4ef6\u7684 props \u4f5c\u65b0\u7684\u547d\u540d\u4ee5\u9632\u6b62\u6df7\u6dc6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f53\u8c03\u7528\u8be5\u9ad8\u9636\u7ec4\u4ef6\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 text \u8fd9\u4e2a\u65b0\u7684 props\u4e86\u3002\nconst MyContainer = (WrappedComponent) => {\n    return class extends Component {\n        render() {\n            const newProps = {\n                text: newText\n            };\n            return (\n                <WrappedComponent\n                    {...props}\n                    {...newProps}\n                />\n            )\n        }\n    }\n}\n\nexport default MyContainer;\n")),(0,p.kt)("h3",{id:"2\u901a\u8fc7-refs-\u4f7f\u7528\u5f15\u7528"},"2.\u901a\u8fc7 refs \u4f7f\u7528\u5f15\u7528"),(0,p.kt)("p",null,"\u5728\u9ad8\u9636\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u63a5\u53d7 refs \u4f7f\u7528 WrappedComponent \u7684\u5f15\u7528\u3002\n\u53ef\u4ee5\u901a\u8fc7ref\u56de\u8c03\u51fd\u6570\u7684\u5f62\u5f0f\u6765\u8bbf\u95ee\u4f20\u5165\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u8fdb\u800c\u8c03\u7528\u7ec4\u4ef6\u76f8\u5173\u65b9\u6cd5\u6216\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"/*\n\u5f53 WrappedComponent \u88ab\u6e32\u67d3\u65f6\uff0crefs \u56de\u8c03\u51fd\u6570\u5c31\u4f1a\u88ab\u6267\u884c\uff0c\u8fd9\u6837\u5c31\u4f1a\u62ff\u5230\u4e00\u4efd WrappedComponent \u5b9e\u4f8b\u7684\u5f15\u7528\u3002\u8fd9\u5c31\u53ef\u4ee5\u65b9\u4fbf\u5730\u7528\u4e8e\u8bfb\u53d6\u6216\u589e\u52a0\u5b9e\u4f8b\u7684 props\uff0c\u5e76\u8c03\u7528\u5b9e\u4f8b\u7684\u65b9\u6cd5\u3002\n*/\nconst MyContainer = (WrappedComponent) => {\n    return class extends Component {\n        ref = (view) => {\n            view.mentod();\n        }\n        render() {\n            const props = Object.assign({}, this.props, {\n                ref: this.ref\n            });\n            return (\n                <WrappedComponent\n                    {...props}\n                />\n            )\n        }\n    }\n}\n\nexport default MyContainer;\n")),(0,p.kt)("h3",{id:"3--\u8c03\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\u53ef\u4ee5\u7528\u7b80\u5355\u65b9\u5f0f\u5b9e\u73b0"},"3.  \u8c03\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u7b80\u5355\u65b9\u5f0f\u5b9e\u73b0\u3002"),(0,p.kt)("p",null,"\u8c03\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u7b80\u5355\u65b9\u5f0f\u5b9e\u73b0\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function HOCFactoryFactory(...params) {\n    return function HOCFactory(WrappedComponent) {\n        return class HOC extends Component {\n            render() {\n                return (\n                    <WrappedComponent \n                        {...this.props}\n                    />\n                );\n            }\n        }\n    }\n}\n")),(0,p.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"HOCFactoryFactory(params)(WrappedComponent)\n\n\u6216\u8005\n\n@HOCFactoryFactory(params)\nclass WrappedComponent extends Component {\n}\n")),(0,p.kt)("h3",{id:"4\u5305\u88f9wrappedcomponent"},"4.\u5305\u88f9WrappedComponent"),(0,p.kt)("p",null,"\u4e3a\u4e86\u5c01\u88c5\u6837\u5f0f\u3001\u5e03\u5c40\u7b49\u76ee\u7684\uff0c\u53ef\u4ee5\u5c06WrappedComponent\u7528\u7ec4\u4ef6\u6216\u5143\u7d20\u5305\u88f9\u8d77\u6765\u3002\n\u4f8b\u5982:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function ppHOC(WrappedComponent) {\n  return class PP extends React.Component {\n    render() {\n      return (\n        <div style={{display: 'block'}}>\n          <WrappedComponent {...this.props}/>\n        </div>\n      )\n    }\n  }\n}\n")),(0,p.kt)("h2",{id:"\u53cd\u5411\u7ee7\u627f"},"\u53cd\u5411\u7ee7\u627f"),(0,p.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u7ee7\u627f\u4e8e\u88ab\u5305\u88f9\u7684 React \u7ec4\u4ef6\u3002"),(0,p.kt)("p",null,"\u53cd\u5411\u7ee7\u627f\u662f\u7ee7\u627f\u81ea\u4f20\u9012\u8fc7\u6765\u7684\u7ec4\u4ef6\n\u53cd\u5411\u7ee7\u627f\u5141\u8bb8\u9ad8\u9636\u7ec4\u4ef6\u901a\u8fc7 this \u5173\u952e\u8bcd\u83b7\u53d6 WrappedComponent\uff0c\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u83b7\u53d6\u5230 state\uff0cprops\uff0c\u7ec4\u4ef6\u751f\u547d\u5468\u671f\uff08component lifecycle\uff09\u94a9\u5b50\uff0c\u4ee5\u53ca\u6e32\u67d3\u65b9\u6cd5\uff08render\uff09\uff0c\u6240\u4ee5\u6211\u4eec\u4e3b\u8981\u7528\u5b83\u6765\u505a\u6e32\u67d3\u52ab\u6301\uff0c\u6bd4\u5982\u5728\u6e32\u67d3\u65b9\u6cd5\u4e2d\u8bfb\u53d6\u6216\u66f4\u6539 React Elements tree\uff0c\u6216\u8005\u6709\u6761\u4ef6\u7684\u6e32\u67d3\u7b49\u3002"))}u.isMDXComponent=!0}}]);