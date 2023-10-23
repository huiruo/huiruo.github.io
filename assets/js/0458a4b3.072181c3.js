"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[2585],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,f=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[g]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80058:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const i={},l=void 0,a={unversionedId:"regular-string/\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50",id:"regular-string/\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50",title:"\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50",description:"",source:"@site/programming-tech/regular-string/\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50.md",sourceDirName:"regular-string",slug:"/regular-string/\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50",permalink:"/regular-string/\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/regular-string/\u6b63\u5219\u9650\u5236-\u9a8c\u8bc1\u4f8b\u5b50.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"string-trim",permalink:"/regular-string/string-trim"},next:{title:"\u4f8b\u5b50\u89e3\u6790",permalink:"/regular-string/\u4f8b\u5b50\u89e3\u6790"}},s={},c=[],u={toc:c},g="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(g,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/*\n* ## 1.\u6b63\u5219\u5339\u914dhtml\n* */\nlet richText = `< div > test < p > <b> </b></p ></div > `\nlet reg = /<([a-z]+?)(?:\\s+?[^>]*?)?>\\s*?<\\/\\1>/ig;\nwhile (reg.test(richText)) {\n    richText = richText.replace(reg, \"\");\n}\nconsole.log(\"1.\u6b63\u5219\u5339\u914dhtml\", richText)\n\n/*\n* \u53bb\u9664\u7a7a\u683c\n* */\nlet str = \" 546546 4564 46 46 88 88 \";\nlet strR = str.replace(/\\s+/g, \"\");\nconsole.log('\u53bb\u9664\u7a7a\u683c:', strR);\n\n/*\n* \u8bf7\u8f93\u5165\u6b63\u786e\u7684\u91d1\u989d,\u5982\u679c\u6709\u5c0f\u6570\u70b9\u4fdd\u7559\u540e\u4e24\u4f4d\n* */\n// let input = 12222\nlet input = 12222.0999\nconst reg2 = /(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)/\nif (reg2.test(input)) {\n    console.log('\u8f93\u5165\u6570\u5b57\u5408\u6cd5')\n} else {\n    console.log('\u8f93\u5165\u4e0d\u5408\u6cd5')\n}\n\n/*\n* \u53d6\u51fa\u6570\u5b57\uff1a\n* */\nconst strN = \"\u4e2d\u56fd\u79fb\u52a8:10086,\u4e2d\u56fd\u8054\u901a:10010,\u4e2d\u56fd\u7535\u4fe1:10000\";\nconst regN = /\\d{5}/g;\n//\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u8fd9\u4e2a\u5b57\u7b26\u4e32\nlet arrayN = regN.exec(str);\nwhile (arrayN != null) {\n    //\u8f93\u51fa\u5339\u914d\u7684\u5185\u5bb9\n    console.log(arrayN[0]);\n    arrayN = regN.exec(strN);  // \u518d\u6b21\u5339\u914d\n}\nconsole.log('arrayN', arrayN)\n\n// \u7528math \u5b9e\u73b0\nconsole.log('\u53d6\u51fa\u6570\u5b57\u7528math\u5b9e\u73b0\uff1a', strN.match(regN))\n\n/*\n*\n*\n* */\nlet sharebyStr = 'lang=en'\nlet regShare = RegExp(/lang=en/);\nif (sharebyStr && sharebyStr.match(regShare)) {\n    console.log(\"\u5e26\u53c2\u4e14\u5e26lang=en\")\n} else {\n    console.log(\"\u4e0d\u5e26\u53c2\u6570\")\n}\n\n/*\n//\u8868\u60c5emoji \u9650\u5236\nconst emojiReg = /\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]/g\nlet customerReviewsFilter = this.customerReviews\nif (emojiReg.test(this.customerReviews)) {\n    // console.log('\u8f93\u5165\u6682\u4e0d\u652f\u6301\u8868\u60c5,\u8fc7\u6ee4')\n    customerReviewsFilter = this.customerReviews.replace(/\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]/g, '')\n    // console.log('customerReviewsFilter__', customerReviewsFilter)\n}\n* */\n")))}p.isMDXComponent=!0}}]);