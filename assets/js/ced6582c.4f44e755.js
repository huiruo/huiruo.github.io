"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[980],{3905:(e,r,t)=>{t.d(r,{Zo:()=>k,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},k=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,k=a(e,["components","mdxType","originalType","parentName"]),u=p(t),s=o,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||c;return t?n.createElement(m,l(l({ref:r},k),{},{components:t})):n.createElement(m,l({ref:r},k))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=s;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},17120:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const c={},l=void 0,a={unversionedId:"docker/dockerSwarm",id:"docker/dockerSwarm",title:"dockerSwarm",description:"Docker compose \u3001Swarm\u771f\u7684\u5f88\u4e0d\u597d\u7528\u3002k8s\u4e0d\u96be\uff0c\u53ea\u662f\u9700\u8981\u5b66\u4e60\u7684\u6982\u5ff5\u5f88\u591a\uff0c\u4e0d\u8fc7\uff0c\u4e00\u65e6\u4f60\u7406\u89e3\u4e86\u90a3\u4e9b\u6982\u5ff5\uff0ck8s\u5c06\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u3001\u7a33\u5b9a\u7684\u3001\u4e13\u4e1a\u7684\u5bb9\u5668\u7f16\u6392\u5de5\u5177\u3002",source:"@site/programming-tech/docker/05-dockerSwarm.md",sourceDirName:"docker",slug:"/docker/dockerSwarm",permalink:"/docker/dockerSwarm",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/docker/05-dockerSwarm.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docker/Kubernetes"},next:{title:"dockerignore\u4f5c\u7528",permalink:"/docker/dockerignore\u4f5c\u7528"}},i={},p=[{value:"docker",id:"docker",level:2},{value:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Docker\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981docker",level:2},{value:"docker",id:"docker-1",level:2}],k={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docker compose \u3001Swarm\u771f\u7684\u5f88\u4e0d\u597d\u7528\u3002k8s\u4e0d\u96be\uff0c\u53ea\u662f\u9700\u8981\u5b66\u4e60\u7684\u6982\u5ff5\u5f88\u591a\uff0c\u4e0d\u8fc7\uff0c\u4e00\u65e6\u4f60\u7406\u89e3\u4e86\u90a3\u4e9b\u6982\u5ff5\uff0ck8s\u5c06\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u3001\u7a33\u5b9a\u7684\u3001\u4e13\u4e1a\u7684\u5bb9\u5668\u7f16\u6392\u5de5\u5177\u3002"),(0,o.kt)("p",null,"Swarm\u5bf9\u4e8e\u4e2d\u578b\u4e1a\u52a1\uff0c\u7b80\u5355\u9ad8\u6548\u6210\u672c\u4f4e\uff0c\u7b26\u5408\u77ed\u5e73\u5feb\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u800c\u8fd9\u79cd\u6a21\u5f0f\uff0c\u5f00\u53d1\u4eba\u5458\u5e76\u4e0d\u9700\u8981\u670d\u52a1\u63d0\u4f9b\u5546\u63d0\u4f9b\u592a\u591a\u670d\u52a1,k8s\u6bd4\u8f83\u5360\u7528\u8d44\u6e90\uff0c\u642d\u5efa\u8fd0\u7ef4\u6210\u672c\u8fc7\u9ad8\u3002"),(0,o.kt)("h2",{id:"docker"},"docker"),(0,o.kt)("p",null,"namespace\u662fkernel\u7684\uff0ccgroup\u4e5f\u662fkernel\u7684\uff0cdocker\u5bb6\u81ea\u5df1\u6ca1\u6709\u4efb\u4f55\u6280\u672f\u95e8\u69db\u3002"),(0,o.kt)("p",null,"Docker\u521b\u65b0\u7684\u662f\u955c\u50cf\uff0c\u955c\u50cf\u6784\u5efa\u65b9\u5f0f;\u955c\u50cf\uff0c\u4e4b\u524d\u7c7b\u4f3c\u7684\u6280\u672f\u5f88\u591a\uff0c\u4f46\u90fd\u6ca1\u80fd\u89e3\u51b3\u73af\u5883\u5f88\u9ebb\u70e6\u7684\u75db\u70b9."),(0,o.kt)("p",null,"docker\u7684\u5e95\u5c42\u662fcontainerd+runc\uff0c\u8fd9\u4e9b\u90fd\u662f\u5f00\u653e\u7684\u6807\u51c6\uff0c\u5305\u62ecoci image spec\u548coci runtime spec\u3002\u6240\u4ee5\u5c31\u57fa\u7840\u529f\u80fd\uff0c\u76f4\u63a5\u901a\u8fc7cri\u4f7f\u7528containerd\u6216docker shim\u4f7f\u7528docker\uff0c\u5e76\u6ca1\u6709\u5f88\u5927\u533a\u522b\u3002"),(0,o.kt)("p",null,"kubernetes\u76f4\u63a5\u5bf9\u63a5containerd\uff0c\u5176\u5b9e\u66f4\u52a0\u5408\u7406\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981docker"},"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Docker\uff1f"),(0,o.kt)("p",null,"\u5728Docker\u5bb9\u5668\u6280\u672f\u51fa\u73b0\u4e4b\u524d\uff0c\u6211\u4eec\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u53d1\u5e03\u670d\u52a1\u9700\u8981\u591a\u4e2a\u73af\u5883\uff0c\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u5f00\u53d1\u4eba\u5458\u5199\u4ee3\u7801\u3001\u8c03\u8bd5\u3001\u81ea\u6d4b\uff0c\u6d4b\u8bd5\u73af\u5883\u7528\u4e8e\u6d4b\u8bd5\u4eba\u5458\u8fdb\u884c\u529f\u80fd\u6d4b\u8bd5\u3001\u6027\u80fd\u6d4b\u8bd5\uff0c\u751f\u4ea7\u73af\u5883\u7528\u4e8e\u53d1\u5e03\u6b63\u5f0f\u7248\u672c\uff0c\u7ed9\u7528\u6237\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u7136\u540e\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 Web Server \uff08\u4f8b\u5982\uff1aNginx \u6216\u8005 Apache Server\uff09\u3002\u63a5\u7740\uff0c\u6839\u636e\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u8981\u6c42\uff0c\u5b89\u88c5\u5bf9\u5e94\u7684\u8f6f\u4ef6\u5305\uff08\u4f8b\u5982\uff1a\u5982\u679c\u4ee3\u7801\u662f\u7528 Node.js \u7f16\u5199\uff0c\u5c31\u9700\u8981\u5b89\u88c5 Node.js \u8fd0\u884c\u65f6\u73af\u5883\uff09\u3002\u6700\u540e\uff0c\u6839\u636e\u5e94\u7528\u7684\u5176\u4ed6\u529f\u80fd\uff0c\u5b89\u88c5\u5bf9\u5e94\u7684\u8f6f\u4ef6\uff0c\u5982\u6570\u636e\u5e93\u4e4b\u7c7b\u7684\u3002"),(0,o.kt)("p",null,"\u73b0\u4ee3\u670d\u52a1\u5668\u6027\u80fd\u975e\u5e38\u5f3a\u608d\uff0c\u5982\u679c\u4e00\u53f0\u4e3b\u673a\u4e0a\u4ec5\u8fd0\u884c\u51e0\u4e2a\u7a0b\u5e8f\uff0c\u5c31\u53ef\u80fd\u9020\u6210\u673a\u5668\u8d44\u6e90\u5229\u7528\u7387\u504f\u4f4e\u3002\u800c\u4e14\uff0c\u7531\u4e8e\u7a0b\u5e8f\u662f\u76f4\u63a5\u8fd0\u884c\u5728\u5bbf\u4e3b\u673a\u4e0a\u7684\uff0c\u7a0b\u5e8f\u4e4b\u95f4\u5b58\u5728\u8d44\u6e90\u7ade\u4e89\u5173\u7cfb\uff0c\u4f1a\u4e92\u76f8\u5f71\u54cd\u3002\u5982\u679c\u67d0\u4e2a\u7a0b\u5e8f\u9020\u6210\u5bbf\u4e3b\u673a\u5361\u987f\u6216\u6302\u6389\uff0c\u90a3\u4e48\u5176\u4ed6\u7a0b\u5e8f\u4e5f\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u4e86\u3002"),(0,o.kt)("p",null,"\u5728 2013 \u5e74\u51fa\u73b0 Docker \u5bb9\u5668\u6280\u672f\u4e4b\u540e\uff0c\u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u9010\u6e10\u88ab\u6dd8\u6c70\u4e86\u3002"),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u4ece\u5f00\u53d1\u5230\u4e0a\u7ebf\u7684\u8fc7\u7a0b\u4e2d\uff0c\u90fd\u5728\u548c\u73af\u5883\u6253\u4ea4\u9053\uff0c\u5728\u88c5\u73af\u5883\u4e4b\u524d\u8fd8\u5f97\u5148\u7533\u8bf7\u8d44\u6e90\uff0c\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf\u3001\u6570\u636e\u5e93\u3001\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u94fe\u63a5\u8d77\u6765\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u975e\u5e38\u7e41\u7410\u7684\uff0c\u6bcf\u6b21\u4fee\u6539\u5185\u5bb9\u90fd\u8fd8\u5f97\u91cd\u65b0\u90e8\u7f72\u4e00\u6b21\uff0c\u5982\u679c\u6362\u4e2a\u673a\u5668\uff0c\u4e0d\u597d\u610f\u601d\uff0c\u90a3\u5c31\u8fd8\u5f97\u518d\u6765\u4e00\u8f6e\u3002"),(0,o.kt)("p",null,"Docker\u7684\u51fa\u73b0\u89e3\u653e\u4e86\u8fd9\u4e2a\u8fc7\u7a0b\u3002Docker\u5c06\u5e94\u7528\u8fd0\u884c\u7684\u4e00\u6574\u5957\u73af\u5883\uff0c\u5305\u62ec\u64cd\u4f5c\u7cfb\u7edf\u3001\u6570\u636e\u5e93\u3001\u6d88\u606f\u961f\u5217\u7b49\u5168\u90fd\u5c01\u88c5\u6210\u955c\u50cf\uff0c\u7814\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u5c01\u88c5\u7684\u955c\u50cf\u4e0a\u9762\u7ee7\u7eed\u5c01\u88c5\u4e1a\u52a1\u6a21\u5757\uff0c\u4ea4\u4ed8\u7ed9\u6d4b\u8bd5\u548c\u8fd0\u7ef4\u4eba\u5458\u3002\u6d4b\u8bd5\u5f00\u5c55\u6d4b\u8bd5\u5de5\u4f5c\u65f6\uff0c\u53ea\u805a\u7126\u4e8e\u4e1a\u52a1\u5c31\u597d\uff0c\u7531\u4e8e\u73af\u5883\u4e0d\u540c\u5e26\u6765\u7684\u95ee\u9898\u5df2\u7ecf\u4e0d\u5b58\u5728\u4e86\u3002\u5e76\u4e14Docker\u5bb9\u5668\u4e4b\u95f4\u662f\u8fdb\u7a0b\u9694\u79bb\u7684\uff0c\u5728\u5229\u7528\u597d\u670d\u52a1\u5668\u8d44\u6e90\u7684\u540c\u65f6\uff0c\u8c01\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5230\u8c01\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u963f\u91cc\u3001\u5934\u6761\u3001\u7f8e\u56e2\u7b49\u4e92\u8054\u7f51\u5de8\u5934\u90fd\u7eb7\u7eb7\u628a\u57fa\u7840\u8bbe\u65bd\u5bb9\u5668\u5316\u7684\u539f\u56e0\u3002"),(0,o.kt)("h2",{id:"docker-1"},"docker"),(0,o.kt)("p",null,"Docker \u65b9\u5f0f\u8fd0\u884c\u7684\u5bb9\u5668\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u865a\u62df\u673a\uff08\u4f46\u548c\u865a\u62df\u673a\u8fd8\u662f\u6709\u533a\u522b\u7684\uff0c\u865a\u62df\u673a\u662f\u5bf9\u786c\u4ef6\u7684\u865a\u62df\u5316\uff1bDocker \u662f\u64cd\u4f5c\u7cfb\u7edf\u5c42\u7684\u865a\u62df\u5316\uff09\u3002\u5b83\u5305\u542b\u4e86\u8fd0\u884c\u7a0b\u5e8f\u6240\u9700\u7684\u8fd0\u884c\u65f6\u73af\u5883\u548c\u7a0b\u5e8f\u4ee3\u7801\uff0c\u542f\u52a8\u540e\u80fd\u591f\u4ee5\u7aef\u53e3\u6620\u5c04\u7684\u65b9\u5f0f\uff0c\u5c06\u5bb9\u5668\u81ea\u8eab\u7684\u670d\u52a1\u66b4\u9732\u7ed9\u5bbf\u4e3b\u673a\u548c\u5916\u90e8\u7528\u6237\u3002"),(0,o.kt)("p",null,"\u5bb9\u5668\u4e4b\u95f4\u9664\u4e86\u5f7c\u6b64\u9694\u79bb\u4e4b\u5916\uff0c\u4e5f\u80fd\u591f\u901a\u8fc7 Docker \u5f15\u64ce\u5b9e\u73b0\u4e92\u8054\u3002\u5bb9\u5668\u4e4b\u95f4\u7684\u8bbf\u95ee\u901a\u5e38\u662f\u4ee5\u5185\u90e8 IP \u7684\u65b9\u5f0f\u8fdb\u884c\u7684\u3002"),(0,o.kt)("p",null,"\u968f\u7740 web \u5e94\u7528\u89c4\u6a21\u7684\u7ee7\u7eed\u6269\u5927\uff0c\u5355\u4e3b\u673a\u4e0d\u518d\u80fd\u6ee1\u8db3\u6027\u80fd\u8981\u6c42\u3002\u73b0\u5728\u7684\u90e8\u7f72\u662f\u57fa\u4e8e\u591a\u4e3b\u673a\u3001\u591a\u5bb9\u5668\u8fdb\u884c\u7684,\u6b64\u65f6\u7528\u5230k8s\u3002"))}d.isMDXComponent=!0}}]);