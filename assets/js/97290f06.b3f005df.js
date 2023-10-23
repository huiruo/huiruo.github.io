"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",sidebar_position:17},i=void 0,l={unversionedId:"React/\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",id:"React/\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",title:"\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",description:"react 17\u4e4b\u524d\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",source:"@site/programming-tech/React/\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406.md",sourceDirName:"React",slug:"/React/\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",permalink:"/React/\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"\u6e32\u67d3\u5230html-\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",sidebar_position:17},sidebar:"docs",previous:{title:"\u6ce8\u610f\u70b9-hook-setState\u7684interval",permalink:"/React/\u6ce8\u610f\u70b9-hook-setState\u7684interval"},next:{title:"\u751f\u547d\u5468\u671f\u548chooks",permalink:"/React/\u751f\u547d\u5468\u671f\u548chooks"}},c={},p=[{value:"react 17\u4e4b\u524d\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406",id:"react-17\u4e4b\u524d\u539f\u751fdom\u4e8b\u4ef6\u4ee3\u7406",level:3},{value:"react 17\u4e4b\u540e\uff1a\u5408\u6210\u4e8b\u4ef6:ReactDOMEventListeners.js",id:"react-17\u4e4b\u540e\u5408\u6210\u4e8b\u4ef6reactdomeventlistenersjs",level:2},{value:"4.\u6e32\u67d3html",id:"4\u6e32\u67d3html",level:3}],m={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"react-17\u4e4b\u524d\u539f\u751fdom\u4e8b\u4ef6\u4ee3\u7406"},"react 17\u4e4b\u524d\u539f\u751fDOM\u4e8b\u4ef6\u4ee3\u7406"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u7684\u6240\u6709\u4e8b\u4ef6\u90fd\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\u8fdb\u884c\u7edf\u4e00\u5206\u53d1\u3002\u5f53\u771f\u5b9e ",(0,o.kt)("inlineCode",{parentName:"p"},"Dom"),"\u89e6\u53d1\u4e8b\u4ef6\u540e\u5192\u6ce1\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\u540e\u624d\u4f1a\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u4e8b\u4ef6\u8fdb\u884c\u5904\u7406\u3002\n\u6240\u4ee5\u539f\u751f\u7684\u4e8b\u4ef6\u4f1a\u5148\u6267\u884c\uff0c\u7136\u540e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u5408\u6210\u4e8b\u4ef6\uff0c\u6700\u540e\u6267\u884c\u771f\u6b63\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\u4e0a\u6302\u8f7d\u7684\u4e8b\u4ef6\n",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u4e8b\u4ef6\u548c\u539f\u751f\u4e8b\u4ef6\u6700\u597d\u4e0d\u8981\u6df7\u7528\u3002\u539f\u751f\u4e8b\u4ef6\u4e2d\u5982\u679c\u6267\u884c\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"stopPropagation"),"\u65b9\u6cd5\uff0c\u5219\u4f1a\u5bfc\u81f4\u5176\u4ed6 ",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u4e8b\u4ef6\u5931\u6548\u3002\u56e0\u4e3a\u6240\u6709\u5143\u7d20\u7684\u4e8b\u4ef6\u5c06\u65e0\u6cd5\u5192\u6ce1\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\u4e0a\uff0c\u5bfc\u81f4\u6240\u6709\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u4e8b\u4ef6\u90fd\u5c06\u65e0\u6cd5\u88ab\u89e6\u53d1\u3002\u3002"),(0,o.kt)("h2",{id:"react-17\u4e4b\u540e\u5408\u6210\u4e8b\u4ef6reactdomeventlistenersjs"},"react 17\u4e4b\u540e\uff1a\u5408\u6210\u4e8b\u4ef6:ReactDOMEventListeners.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6838\u5fc3\u662fdispatchEvent\u8fdb\u884c\u4e8b\u4ef6\u7684\u5206\u53d1\uff0c17\u4e4b\u540e\u4e0d\u518d\u5c06\u4e8b\u4ef6\u5168\u90e8\u5192\u6ce1\u5230document\u53bb\u4ee3\u7406\uff0c\u8fd9\u548c\u6d4f\u89c8\u5668\u7684\u6539\u8fdb\u6709\u5173\uff0c\u4e0d\u518d\u9700\u8981\u4ee3\u7406\u7ed1\u5b9a\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u5bf9\u66f4\u7ec6\u7c92\u5ea6\u7684\u533a\u57df\u8fdb\u884c\u76d1\u542c\n")),(0,o.kt)("h3",{id:"4\u6e32\u67d3html"},"4.\u6e32\u67d3html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5728mountComponentIntoNode\u51fd\u6570\u4e2d\u8c03\u7528\u5c06\u4e0a\u4e00\u6b65\u751f\u6210\u7684markup\u63d2\u5165container\u5bb9\u5668\u3002\n\u5728\u9996\u6b21\u6e32\u67d3\u65f6\uff0c_mountImageIntoNode\u4f1a\u6e05\u7a7acontainer\u7684\u5b50\u8282\u70b9\u540e\u8c03\u7528DOMLazyTree.insertTreeBefore\uff1a\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var insertTreeBefore = function(parentNode,tree,referenceNode){\n    //\u5224\u65ad\u662f\u5426\u4e3afragment\u8282\u70b9\u6216\u8005<object>\u63d2\u4ef6\uff1a\n    if(tree.node.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE||tree.node.nodeType===ELEMENT_NODE_TYPE&&tree.node.nodeName.toLowerCase()==='object'\n        &&(tree.node.namespaceURI==null||tree.node.namespaceURI===DOMNamespaces.html)){\n        insertTreeChildren(tree)\n        parentNode.insertBefore(tree.node,referenceNode)\n    }else{\n        parentNode.insertBefore(tree.node,referenceNode)\n    }\n}\n\n/*\n\u5224\u65ad\u662f\u5426\u4e3afragment\u8282\u70b9\u6216\u8005<object>\u63d2\u4ef6\uff1a\n+ \u5982\u679c\u662f\u4ee5\u4e0a\u4e24\u79cd\uff0c\u9996\u5148\u8c03\u7528insertTreeChildren\u5c06\u6b64\u8282\u70b9\u7684\u5b69\u5b50\u8282\u70b9\u6e32\u67d3\u5230\u5f53\u524d\u8282\u70b9\u4e0a\uff0c\u518d\u5c06\u6e32\u67d3\u5b8c\u7684\u8282\u70b9\u63d2\u5165\u5230html\n\n+ \u5982\u679c\u662f\u5176\u4ed6\u8282\u70b9\uff0c\u5148\u5c06\u8282\u70b9\u63d2\u5165\u5230\u63d2\u5165\u5230html\uff0c\u518d\u8c03\u7528insertTreeChildren\u5c06\u5b69\u5b50\u8282\u70b9\u63d2\u5165\u5230html\u3002\n\n+ \u82e5\u5f53\u524d\u4e0d\u662fIE\u6216Edge\uff0c\u5219\u4e0d\u9700\u8981\u518d\u9012\u5f52\u63d2\u5165\u5b50\u8282\u70b9\uff0c\u53ea\u9700\u8981\u63d2\u5165\u4e00\u6b21\u5f53\u524d\u8282\u70b9\u3002\n*/\nfunction insertTreeChildren(tree){\n    if(!enableLazy){\n        //\u4e0d\u662fie/bEdge\n        return\n    }\n    var node = tree.node\n    var children = tree.children\n    if(children.length){\n        //\u9012\u5f52\u6e32\u67d3\u5b50\u8282\u70b9\n        for(var i= 0;i<children.length;i++){\n            insertTreeChildren(node,children[i],null)\n        }\n    }else if(tree.html!=null){\n        //\u6e32\u67d3html\u8282\u70b9\n        setInnerHTML(node,tree.html)\n    }else if(tree.text!=null){\n        //\u6e32\u67d3\u6587\u672c\u8282\u70b9\n        setTextContext(node,tree.text)\n    }\n}\n/*\n+ \u5224\u65ad\u4e0d\u662fIE\u6216bEdge\u65f6return\n+ \u82e5children\u4e0d\u4e3a\u7a7a\uff0c\u9012\u5f52insertTreeBefore\u8fdb\u884c\u63d2\u5165\n+ \u6e32\u67d3html\u8282\u70b9\n+ \u6e32\u67d3\u6587\u672c\u8282\u70b9\n*/\n")))}s.isMDXComponent=!0}}]);