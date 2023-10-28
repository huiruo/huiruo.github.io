"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(t),g=r,v=m["".concat(o,".").concat(g)]||m[g]||u[g]||l;return t?a.createElement(v,c(c({ref:n},p),{},{components:t})):a.createElement(v,c({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<l;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const l={},c=void 0,s={unversionedId:"html-css/webgl3d/webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b",id:"html-css/webgl3d/webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b",title:"webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b",description:"\u53ef\u6269\u5c55\uff1aSVG\u4e0eCanvas\u533a\u522b",source:"@site/programming-tech/html-css/01-webgl3d/00-webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b.md",sourceDirName:"html-css/01-webgl3d",slug:"/html-css/webgl3d/webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b",permalink:"/html-css/webgl3d/webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/html-css/01-webgl3d/00-webgl\u4e0ecanvas-\u6027\u80fd-\u52a8\u753b\u533a\u522b.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"docs",previous:{title:"webgl\u5165\u95e8",permalink:"/html-css/webgl3d/webgl\u5165\u95e8"},next:{title:"\u5757\u7ea7\u5143\u7d20-css",permalink:"/html-css/css-1-\u5757\u7ea7\u5143\u7d20-css"}},o={},i=[{value:"\u53ef\u6269\u5c55\uff1aSVG\u4e0eCanvas\u533a\u522b",id:"\u53ef\u6269\u5c55svg\u4e0ecanvas\u533a\u522b",level:2},{value:"html\u6e32\u67d3\u6587\u6863\u67093\u79cd\u65b9\u5f0f:dom\uff0ccanvas\uff082d\uff09\uff0cwebgl",id:"html\u6e32\u67d3\u6587\u6863\u67093\u79cd\u65b9\u5f0fdomcanvas2dwebgl",level:3},{value:"webgl \u4e0e canvas \u7684\u533a\u522b",id:"webgl-\u4e0e-canvas-\u7684\u533a\u522b",level:2},{value:"html\u52a8\u753b",id:"html\u52a8\u753b",level:3},{value:"\u52a8\u753b\u57fa\u7840",id:"\u52a8\u753b\u57fa\u7840",level:3}],p={toc:i},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u53ef\u6269\u5c55svg\u4e0ecanvas\u533a\u522b"},"\u53ef\u6269\u5c55\uff1aSVG\u4e0eCanvas\u533a\u522b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"programming-technology\\html-css\\00-html5\u5c5e\u6027.md\n")),(0,r.kt)("h3",{id:"html\u6e32\u67d3\u6587\u6863\u67093\u79cd\u65b9\u5f0fdomcanvas2dwebgl"},"html\u6e32\u67d3\u6587\u6863\u67093\u79cd\u65b9\u5f0f:dom\uff0ccanvas\uff082d\uff09\uff0cwebgl"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/350323062"},"https://zhuanlan.zhihu.com/p/350323062")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dom\u662f\u4e00\u79cd\u4e2d\u95f4\u4ee3\u7406\u6a21\u5f0f\uff0c\u7ef4\u62a4\u6587\u6863\u6811\u3001\u5904\u7406\u4e8b\u4ef6\u4ea4\u4e92\u3001\u6837\u5f0f\u548c\u7ed8\u5236\uff0c\u5bf9\u5f00\u53d1\u8005\u6700\u53cb\u597d\uff0c\u5b9e\u73b0\u4e0a\u6700\u5bb9\u6613\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff0c\u6837\u5f0f\u4e30\u5bcc\uff0c\u4ea4\u4e92\u63a7\u4ef6\u591a\uff0c\u754c\u9762\u4f53\u9a8c\u597d\uff0c\u901a\u8fc7keyframes\u6765\u5b9e\u73b0\u52a8\u753b\u4e5f\u5f88\u4fbf\u6377\u3002\u7f3a\u70b9\u662f\u4e0d\u7ba1\u4f60\u7684\u5b9e\u9645\u5e94\u7528\u8981\u4e0d\u8981\u8fd9\u4e9b\u670d\u52a1\uff0c\u5b83\u90fd\u662f\u6807\u914d\uff0c\u6ca1\u6cd5\u7ed5\u8fc7\u53bb\uff0c\u5bfc\u81f4\u5f00\u9500\u5927\uff0c\u6027\u80fd\u5dee\uff0c\u4e0d\u9002\u7528\u4e8e\u5143\u7d20\u6570\u91cf\u5f88\u591a\u7684\u60c5\u51b5\u3002\n\ncanvas\u5219\u662f\u7ed9\u5f00\u53d1\u8005\u5f00\u653e\u4e86\u4e00\u79cd\u76f4\u63a5\u8bbf\u95ee\u5e95\u5c42\u7ed8\u56fe\u529f\u80fd\u7684\u63a5\u53e3\uff0c\u53bb\u9664\u4e86\u4e2d\u95f4\u4ee3\u7406\uff0c\u597d\u5904\u5f53\u7136\u662f\u66f4\u5feb\u4e86\uff0c\u574f\u5904\u662f\u4ec0\u4e48\u90fd\u5f97\u81ea\u5df1\u6765\uff0c\u4ea4\u4e92\u3001\u5237\u65b0\u3001\u7ef4\u62a4\u6570\u636e\u548c\u6e32\u67d3\uff0c\u6b64\u5916canvas\u5728\u5904\u7406\u5927\u5206\u8fa8\u7387\u8bbe\u5907\u65f6\u6bd4\u8f83\u5403\u529b\uff08\u6bd4\u5982\u5730\u56fe\u8fd9\u65b9\u9762\u4e0d\u5982\u57fa\u4e8edom\u7684svg, svg\u662fdraw\uff0ccanvas\u662fpaint \uff09\uff0c\u5904\u7406\u6587\u672c\u548c\u5c4f\u5e55\u9002\u914d\u65b9\u9762\u4e5f\u4e0d\u592a\u597d\u3002\n\nwebgl\u5b9e\u9645\u4e0a\u7528\u4e86canvas\u7684\u4e00\u4e2a3d\u6e32\u67d3\u4e0a\u4e0b\u6587\uff0c\u5728\u7ed8\u5236\u5e73\u9762\u5185\u5bb9\u65f6\uff0c\u548ccanvas 2d\u76f8\u6bd4\uff0cwebgl\u66f4\u4e3a\u76f4\u63a5\u7684\u5229\u7528\u4e86gpu\u786c\u4ef6\uff0c\u5728\u67d0\u4e9b\u573a\u5408\uff0c\u51e0\u4e4e\u53ef\u4ee5\u6446\u8131cpu\u7684\u9650\u5236\uff0c\u8fbe\u5230\u6027\u80fd\u6781\u81f4\u3002\n\n\u7b80\u8a00\u4e4b\uff0c\u5c3d\u7ba1\u73b0\u4ee3\u6d4f\u89c8\u5668\u90fd\u5c3d\u91cf\u4e3adom\uff08\u6bd4\u5982\u6d89\u53cavideo\u3001image\u5143\u7d20\u4ee5\u53ca\u50cf\u7d20\u53d8\u6362\u65b9\u9762\uff09\u3001canvas 2d\u548cwebgl\u63d0\u4f9b\u786c\u4ef6\u52a0\u901f\u7684\u652f\u6301\uff0c\u4f46webgl\u5728\u6e32\u67d3\u6570\u91cf\u4f17\u591a\u7684\u5143\u7d20\u6216\u50cf\u7d20\u65f6\uff0c\u6027\u80fd\u6beb\u65e0\u7591\u95ee\u7684\u9065\u9065\u9886\u5148\u3002\n")),(0,r.kt)("h2",{id:"webgl-\u4e0e-canvas-\u7684\u533a\u522b"},"webgl \u4e0e canvas \u7684\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Canvas\u53ea\u652f\u6301\u4e00\u4e9b\u7b80\u5355\u76842D\u7ed8\u5236\uff0c\u4e0d\u652f\u63013D\uff0c\u66f4\u91cd\u8981\u7684\u662f\u6027\u80fd\u6709\u9650\uff0cWebGL\u5f25\u8865\u4e86\u8fd9\u4e24\u65b9\u4fbf\u7684\u4e0d\u8db3\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4 WEBGL \u4e4b\u524d\u9700\u8981\u5148\u4e86\u89e3\u4e0b OpenGL, \u65e2\u7136\u6d89\u53ca\u5230\u7ed8\u56fe\u80fd\u529b\uff0c\u5e95\u5c42\u65b9\u9762\u6765\u8bf4\u5b9e\u9645\u4e0a\u662f\u4e0e\u663e\u5361\u7684\u4ea4\u4e92\uff0cOpenGL\u662f \u5e95\u5c42\u7684\u9a71\u52a8\u7ea7\u7684\u56fe\u5f62\u63a5\u53e3"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"webgl\u662f\u57fa\u4e8eOpenGL\u548cJavaScript\u6280\u672f\u7ed3\u5408\n\nwebgl \u4e0e canvas \u7684\u533a\u522b\uff0c\u4ed6\u4e24\u90fd\u80fd\u505a 3D \u4e5f\u90fd\u80fd\u505a 2D\uff0c\u53ea\u662f\u8c01\u66f4\u9002\u5408\u800c\u5df2\u3002\u6027\u80fd\u4e0a\u6765\u8bf4\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b webgl \u9ad8\u51fa\u4e0d\u5c11\uff0c\u6bd5\u7adf\u76f4\u63a5\u8d70 gpu\u3002canvas \u5728\u56fe\u50cf\u5408\u6210\u4e0a\u4e5f\u4f1a\u8d70 gpu\uff0c\u5176\u4ed6\u7684 API \u8fd8\u662f\u5728 cpu \u901a\u8fc7 skia \u7ed8\u5236\u3002\u867d\u7136 webgl \u6027\u80fd\u597d\uff0c\u4f46\u662f\u5b66\u4e60\u95e8\u69db\u9ad8\u591a\u4e86\uff0c\u5982\u679c\u4e0d\u7528\u73b0\u6709\u7684\u5e93\u5f00\u53d1\uff0c\u9700\u8981\u4e0d\u5c11\u7684\u6570\u5b66\u548c\u56fe\u5f62\u5b66\u77e5\u8bc6\u3002\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CSS3 \u7684 animation \u4e0e HTML5 \u7684 Canvas \u5e94\u7528\u7684\u573a\u666f\u5e76\u4e0d\u76f8\u540c\uff0c\u5982\u679c\u4e00\u4e9b\u7b80\u5355\u7684\u52a8\u753b\u5728 animation \u91cc\u4f1a\u6bd4\u8f83\u9002\u5408\u800c\u4e14\u5f88\u96be\u6709\u590d\u6742\u4ea4\u4e92\uff0c canvas \u7684\u8bdd\u529f\u80fd\u4f1a\u591a\u5f88\u591a\u4f46\u662f\u9700\u8981 Js \u811a\u672c\u914d\u5408\u3002\n\u6027\u80fd\u95ee\u9898\u7684\u8bdd\uff0c\u6211\u4e2a\u4eba\u89c9\u5f97CSS3\u7684\u52a8\u753b\u4f1a\u6bd4 webGL \u6d88\u8017\u5c0f\u4e00\u4e9b\uff0c\u540e\u8005\u9700\u8981CPU\u8ba1\u7b97\u7136\u540e\u518d\u7ed9\u5230GPU\uff0c\u4f46\u662f\u53ef\u518d\u53d8\u52a8\u7684\u7a7a\u95f4\u5c31\u5f88\u5c0f\uff0c\u6bd4\u5982\u4e00\u4e9b\u968f\u5373\u52a8\u4f5c\u6216\u8005\u8ddf\u968f\u6548\u679c\u3002\n\n\u4e4b\u524d\u6709\u4e00\u4e2a\u9879\u76ee\u540c\u65f6\u6e32\u67d32500\u4e2a\u968f\u673a\u5143\u7d20\u7684\u573a\u666f\u4e0b( i5 + GTX 960 )\uff0c\u4f7f\u7528 canvas \u7684 FPS \u5728 25 \u5e27\u5de6\u53f3\uff0c\u800c\u4f7f\u7528 CSS 3D Sprite \u53ef\u4ee5\u7ef4\u6301\u5728 45 \u5de6\u53f3\u7684\u5e27\u6570\u3002\n\n\u5f53\u7136\u6211\u89c9\u5f97\u5982\u679c\u5728\u590d\u6742\u52a8\u753b\u4e0b animation \u53ef\u80fd\u4e00\u76f4\u4f1a\u64cd\u4f5cDOM\u6539\u53d8Style\uff0c\u6240\u4ee5\u5e76\u4e0d\u5982 canvas \uff0c\u540e\u8005\u76f4\u63a5\u91cd\u7ed8\u753b\u5e03\u5185\u5bb9\u5373\u53ef\u3002\n")),(0,r.kt)("h3",{id:"html\u52a8\u753b"},"html\u52a8\u753b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4f7f\u7528 requestAnimationFrame\n\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u90fd\u4e60\u60ef\u4e8e\u4f7f\u7528 setInterval\u3001setTimeout \u6765\u5b9e\u73b0\u9875\u9762\u4e2d\u7684\u52a8\u753b\u3002\u4e5f\u6709\u5f88\u591a\u5c0f\u4f19\u4f34\u53d1\u73b0\u8fd9\u79cd\u5b9e\u73b0\u4f1a\u51fa\u73b0\u4e22\u5e27\u7684\u73b0\u8c61\u3002\u539f\u56e0\u6709\u4e8c:\n\n1.setInterval\u3001setTimeout \u4f9d\u8d56\u4e8e\u6d4f\u89c8\u5668\u7684\u5f02\u6b65\u5faa\u73af\uff0c\u56e0\u800c\u6211\u4eec\u8bbe\u5b9a\u7684\u52a8\u753b\u6267\u884c\u65f6\u95f4\u53ef\u80fd\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u52a8\u753b\u6267\u884c\u65f6\u95f4\uff0c\u53ef\u80fd\u8fd9\u4e2a\u65f6\u5019\u7684 js\u5f15\u64ce \u6b63\u5728\u6267\u884c\u5176\u4ed6\u4ee3\u7801\uff0c\u6240\u4ee5\u5c31\u4f1a\u51fa\u73b0\u4e22\u5e27\u7684\u60c5\u51b5\u3002\n2.\u5237\u65b0\u9891\u7387\u6536\u5c4f\u5e55\u5206\u8fa8\u7387\u548c\u5c4f\u5e55\u5c3a\u5bf8\u5f71\u54cd\u3002\u4e0d\u540c\u8bbe\u5907\u7684\u5c4f\u5e55\u5237\u65b0\u7387\u53ef\u80fd\u4e0d\u540c\u3002\n\n\u9488\u5bf9\u4ee5\u4e0a\u4e24\u70b9\u5185\u5bb9\uff0c\u6211\u4eec\u4f7f\u7528 requestAnimationFrame \u6765\u4f18\u5316\u52a8\u753b\u5b9e\u73b0\u3002\u76f8\u5bf9\u4e8e\u524d\u8005\uff0c\u5b83\u6709\u4e24\u70b9\u660e\u663e\u7684\u4f18\u52bf\n\n1.\u7531\u7cfb\u7edf\u6765\u51b3\u5b9a\u56de\u8c03\u7684\u6267\u884c\u65f6\u673a\uff0c\u5728\u6267\u884c\u65f6\u6d4f\u89c8\u5668\u4f1a\u4f18\u5316\u65b9\u6cd5\u7684\u8c03\u7528\u3002\n2.\u6309\u5e27\u8fdb\u884c\u91cd\u7ed8\uff0c\u901a\u8fc7 requestAnimationFrame \u8c03\u7528\u56de\u8c03\u51fd\u6570\u5f15\u8d77\u7684\u9875\u9762\u91cd\u7ed8\u6216\u56de\u6d41\u7684\u65f6\u95f4\u95f4 \u9694\u548c\u663e\u793a\u5668\u7684\u5237\u65b0\u65f6\u95f4\u95f4\u9694\u76f8\u540c\u3002\u6240\u4ee5 requestAnimationFrame \u4e0d\u9700\u8981\u50cf setTimeout \u90a3\u6837\u4f20\u9012\u65f6\u95f4\u95f4\u9694\uff0c\u800c\u662f\u6d4f\u89c8\u5668\u901a\u8fc7\u7cfb\u7edf\u83b7\u53d6\u5e76\u4f7f\u7528\u663e\u793a\u5668\u5237\u65b0\u9891\u7387\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1.\u57fa\u4e8e gpu \u7684 css \u52a8\u753b\uff0c\u5b83\u7684\u4e3b\u8981\u5f00\u9500\u6709\uff1a\n\nCPU \u4e0e GPU \u901a\u4fe1\u7684\u5f00\u9500\ncomposite \u7684\u5f00\u9500\n2.\u57fa\u4e8e cpu \u7684 css \u52a8\u753b\uff0c\u5b83\u7684\u4e3b\u8981\u5f00\u9500\u6709\uff1a\n\nlayout\uff0c\u91cd\u65b0\u8ba1\u7b97\u5e03\u5c40\u7684\u5f00\u9500\nrepaint\uff0c\u91cd\u65b0\u7ed8\u5236\u56fe\u5c42\u7684\u5f00\u9500\ncomposite \u7684\u5f00\u9500\n\u800c canvas \u7684\u4e3b\u8981\u5f00\u9500\u4e3b\u8981\u662f\u5728\uff1a\n\n3.\u6267\u884c Javascript \u7684\u5f00\u9500\nSkia \u7ed8\u5236\u7684\u5f00\u9500\ncomposite \u7684\u5f00\u9500\n\n\u770b\u8d77\u6765\uff0c\u597d\u50cf\u597d\u50cf\u786e\u5b9e\u662f canvas \u7684\u5f00\u9500\u66f4\u591a\u5440\u3002\u4f46\u662f\u7531\u4e8e\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u5927\u91cf\u7684 DOM \u5143\u7d20\u610f\u5473\u7740\u5927\u91cf\u56fe\u5c42\u9700\u8981\u8fdb\u884c\u5408\u6210\u5de5\u4f5c\uff0c\u8fd9\u624d\u662f\u62d6\u57ae\u6027\u80fd\u7684\u5173\u952e\u3002\n\n\u5f53\u7136\uff0c\u8ba8\u8bba\u5b8c\u6027\u80fd\uff0c\u66f4\u91cd\u8981\u7684\u533a\u522b\u5728\u4e8e\u4e24\u8005\u662f\u9002\u5e94\u4e0d\u540c\u573a\u666f\u7684\u3002\u5f53\u6211\u4eec\u9700\u8981\u5bf9\u5df2\u6709\u7684\u590d\u6742 DOM \u5143\u7d20\u505a\u52a8\u753b\uff0c\u4f8b\u5982\u6574\u4e2a\u9875\u9762\u7684\u52a8\u753b\u6548\u679c\uff0c\u6211\u4eec\u4f1a\u8003\u8651\u628a\u5b83\u7ed8\u5236\u5230 canvas \u4e0a\u518d\u53bb\u505a\u52a8\u753b\u5417\uff1f\u90a3\u663e\u7136\u4e0d\u4f1a\uff0c\u6210\u672c\u592a\u9ad8\u4e86\uff0c\u8fd9\u4e2a\u6210\u672c\u5012\u4e0d\u662f\u6307\u6e32\u67d3\u7684\u6210\u672c\uff0c\u800c\u662f\u6211\u4eec\u9700\u8981\u201c\u590d\u523b\u201d\u8fd9\u4e2a DOM \u5143\u7d20\u7684\u6210\u672c\uff1b\u5f53\u6211\u4eec\u9700\u8981\u5b8c\u6210\u4e00\u4e9b DOM \u65e0\u6cd5\u5b8c\u6210\u7684\u9ad8\u8868\u73b0\u529b\u7684\u4ea4\u4e92\u65f6\uff0c\u6bd4\u5982\u505a\u4e00\u4e2a\u753b\u677f\uff0c\u7eaf\u7cb9\u7684 DOM \u80fd\u505a\u5417\uff1f\u6216\u8bb8 SVG \u662f\u4e00\u4e2a\u9009\u62e9\uff0c\u90a3\u5982\u679c\u662f\u66f4\u590d\u6742\u7684\u573a\u666f\u5462\uff1f\u7406\u8bba\u4e0a\u6765\u8bf4 css3 \u52a8\u753b\u80fd\u505a\u7684canvas \u90fd\u80fd\u505a\uff0c\u53cd\u4e4b\u5c31\u4e0d\u662f\u8fd9\u6837\u3002\n")),(0,r.kt)("h3",{id:"\u52a8\u753b\u57fa\u7840"},"\u52a8\u753b\u57fa\u7840"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4e09\u89d2\u5f62\u8f6c\u52a8\uff1a\u4e0d\u65ad\u64e6\u9664\u548c\u91cd\u7ed8\u4e09\u89d2\u5f62\uff0c\u5e76\u4e14\u5728\u6bcf\u6b21\u91cd\u7ed8\u65f6\u8f7b\u5fae\u6539\u53d8\u89d2\u5ea6\n1.\u5728t0,t1,t2,t3,\u7b49\u65f6\u523b\u8fd4\u56de\u8c03\u7528\u51fd\u6570\u7ed8\u5236\u4e09\u89d2\u5f62\n2.\u5728\u6bcf\u6b21\u7ed8\u5236\u4e4b\u524d\u8c03\u7528gl.clear(),\u5e76\u4f7f\u4e09\u89d2\u5f62\u65cb\u8f6c\u89d2\u5ea6\n")),(0,r.kt)("p",null,"\u5b9e\u4f8b\uff1a\nRotatingTriangle.html"))}u.isMDXComponent=!0}}]);