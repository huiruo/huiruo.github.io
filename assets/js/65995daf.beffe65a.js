"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2387],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=r,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return t?o.createElement(d,i(i({ref:n},p),{},{components:t})):o.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const a={title:"\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",sidebar_position:58},i=void 0,l={unversionedId:"React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",id:"React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",title:"\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",description:"\u81ea\u5b9a\u4e49hooks",source:"@site/programming-tech/React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks.md",sourceDirName:"React",slug:"/React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",permalink:"/React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/\u57fa\u7840-\u81ea\u5b9a\u4e49hooks.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{title:"\u57fa\u7840-\u81ea\u5b9a\u4e49hooks",sidebar_position:58},sidebar:"docs",previous:{title:"useEffect",permalink:"/React/useEffect"},next:{title:"\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6",permalink:"/React/\u57fa\u7840-\u9ad8\u9636\u7ec4\u4ef6"}},s={},u=[{value:"\u81ea\u5b9a\u4e49hooks",id:"\u81ea\u5b9a\u4e49hooks",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49hooks"},"\u81ea\u5b9a\u4e49hooks"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u4e4b\u95f4\u91cd\u7528\u4e00\u4e9b\u72b6\u6001\u903b\u8f91\u3002\u6709\u4e24\u79cd\u4e3b\u6d41\u65b9\u6848\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ad8\u9636\u7ec4\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49 Hook \u53ef\u4ee5\u8ba9\u4f60\u5728\u4e0d\u589e\u52a0\u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\u8fbe\u5230\u540c\u6837\u7684\u76ee\u7684\u3002"))),(0,r.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,'\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u81ea\u5b9a\u4e49 Hook \u7684\u540d\u79f0\u5fc5\u987b\u4ee5 "use" \u5f00\u5934\uff0c\u5e76\u4e14\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002\u8fd9\u662f\u56e0\u4e3a React \u4f1a\u6839\u636e Hook \u7684\u540d\u79f0\u6765\u5224\u65ad\u5b83\u662f\u5426\u662f\u4e00\u4e2a Hook'),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u81ea\u5b9a\u4e49 Hook\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u52a0\u65b9\u4fbf\u5730\u5b9e\u73b0\u7c7b\u4f3c\u4e8e HOC \u7684\u529f\u80fd\uff0c\u4ece\u800c\u907f\u514d\u4e86 HOC \u5e26\u6765\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u4f8b\u5982\uff1a\u547d\u540d\u51b2\u7a81\u3001props \u7684\u4f20\u9012\u95ee\u9898\u7b49\u3002\u540c\u65f6\uff0c\u81ea\u5b9a\u4e49 Hook \u4e5f\u53ef\u4ee5\u66f4\u52a0\u65b9\u4fbf\u5730\u590d\u7528\u903b\u8f91\u4ee3\u7801\uff0c\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u3001\u6613\u4e8e\u7ef4\u62a4\u548c\u91cd\u7528\u3002"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a useLogging Hook\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a componentName \u53c2\u6570\uff0c\u5e76\u4f7f\u7528 useEffect Hook \u6765\u6a21\u62df componentDidMount \u548c componentWillUnmount \u65b9\u6cd5\u3002\u5728 useEffect \u56de\u8c03\u51fd\u6570\u4e2d\u6253\u5370\u65e5\u5fd7\uff0c\u4ee5\u4fbf\u4e8e\u8ddf\u8e2a\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("p",null,"\u5728 MyComponent \u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u8c03\u7528\u4e86 useLogging \u81ea\u5b9a\u4e49 Hook\uff0c\u5e76\u5c06\u7ec4\u4ef6\u540d\u79f0\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u5b83\u3002\u8fd9\u6837\uff0c\u5728 MyComponent \u7ec4\u4ef6\u6e32\u67d3\u65f6\uff0cuseLogging Hook \u5c31\u4f1a\u88ab\u8c03\u7528\uff0c\u5e76\u5728 useEffect \u56de\u8c03\u51fd\u6570\u4e2d\u6253\u5370\u65e5\u5fd7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction useLogging(componentName) {\n  useEffect(() => {\n    console.log(`Component ${componentName} mounted`);\n    return () => {\n      console.log(`Component ${componentName} will unmount`);\n    };\n  }, [componentName]);\n}\n\nfunction MyComponent(props) {\n  useLogging('MyComponent');\n\n  return <div>{props.text}</div>;\n}\n\nexport default MyComponent;\n")),(0,r.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\n\u6211\u4eec\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendStatus")," \u7684\u7ec4\u4ef6\uff0c\u5b83\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7684 Hook \u6765\u8ba2\u9605\u4e00\u4e2a\u597d\u53cb\u7684\u5728\u7ebf\u72b6\u6001\u3002\u5047\u8bbe\u6211\u4eec\u60f3\u5728\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u91cc\u91cd\u7528\u8fd9\u4e2a\u8ba2\u9605\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u628a\u8fd9\u4e2a\u903b\u8f91\u62bd\u53d6\u5230\u4e00\u4e2a\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"useFriendStatus")," \u7684\u81ea\u5b9a\u4e49 Hook \u91cc\uff1a"),(0,r.kt)("p",null,"\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u7684 state \u662f\u5b8c\u5168\u72ec\u7acb\u7684\u3002Hook \u662f\u4e00\u79cd\u590d\u7528",(0,r.kt)("em",{parentName:"p"},"\u72b6\u6001\u903b\u8f91"),"\u7684\u65b9\u5f0f\uff0c\u5b83\u4e0d\u590d\u7528 state \u672c\u8eab\u3002\u4e8b\u5b9e\u4e0a Hook \u7684\u6bcf\u6b21",(0,r.kt)("em",{parentName:"p"},"\u8c03\u7528"),"\u90fd\u6709\u4e00\u4e2a\u5b8c\u5168\u72ec\u7acb\u7684 state \u2014\u2014 \u56e0\u6b64\u4f60\u53ef\u4ee5\u5728\u5355\u4e2a\u7ec4\u4ef6\u4e2d\u591a\u6b21\u8c03\u7528\u540c\u4e00\u4e2a\u81ea\u5b9a\u4e49 Hook\u3002"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 Hook \u66f4\u50cf\u662f\u4e00\u79cd\u7ea6\u5b9a\u800c\u4e0d\u662f\u529f\u80fd\u3002\u5982\u679c\u51fd\u6570\u7684\u540d\u5b57\u4ee5 \u201c",(0,r.kt)("inlineCode",{parentName:"p"},"use"),"\u201d \u5f00\u5934\u5e76\u8c03\u7528\u5176\u4ed6 Hook\uff0c\u6211\u4eec\u5c31\u8bf4\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49 Hook\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSomething")," \u7684\u547d\u540d\u7ea6\u5b9a\u53ef\u4ee5\u8ba9\u6211\u4eec\u7684 linter \u63d2\u4ef6\u5728\u4f7f\u7528 Hook \u7684\u4ee3\u7801\u4e2d\u627e\u5230 bug\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u521b\u5efa\u6db5\u76d6\u5404\u79cd\u573a\u666f\u7684\u81ea\u5b9a\u4e49 Hook\uff0c\u5982\u8868\u5355\u5904\u7406\u3001\u52a8\u753b\u3001\u8ba2\u9605\u58f0\u660e\u3001\u8ba1\u65f6\u5668\uff0c\u751a\u81f3\u53ef\u80fd\u8fd8\u6709\u66f4\u591a\u6211\u4eec\u6ca1\u60f3\u5230\u7684\u573a\u666f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction useFriendStatus(friendID) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  function handleStatusChange(status) {\n    setIsOnline(status.isOnline);\n  }\n\n  useEffect(() => {\n    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);\n    return () => {\n      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);\n    };\n  });\n\n  return isOnline;\n}\n\n//\u5b83\u5c06 friendID \u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u8be5\u597d\u53cb\u662f\u5426\u5728\u7ebf\uff1a\n")),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5728\u4e24\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function FriendStatus(props) {\n  const isOnline = useFriendStatus(props.friend.id);\n\n  if (isOnline === null) {\n    return 'Loading...';\n  }\n  return isOnline ? 'Online' : 'Offline';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function FriendListItem(props) {\n  const isOnline = useFriendStatus(props.friend.id);\n\n  return (\n    <li style={{ color: isOnline ? 'green' : 'black' }}>\n      {props.friend.name}\n    </li>\n  );\n}\n")),(0,r.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("p",null,"\u8fd8\u662f\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u628a\u53d6\u6570\u636e\u7684\u903b\u8f91\u62bd\u51fa\u6765\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// useFetch.tsx\nimport { useState, useEffect } from "react";\n\nexport default function useFetch(url) {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    fetch(url)\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, [] );\n\n  return data;\n}\n')),(0,r.kt)("p",null,"\u5728\u5176\u4ed6\u7ec4\u4ef6\u4e2d\u5f15\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport useFetch from "./useFetch";\n\nexport default function DataLoader(props) {\n\n  const data = useFetch("http://localhost:3001/links/");\n\n  return (\n    <div>\n      <ul>\n        {data.map(el => (\n          <li key={el.id}>{el.title}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n')))}m.isMDXComponent=!0}}]);