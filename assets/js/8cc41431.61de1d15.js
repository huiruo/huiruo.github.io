"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1281],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return t?n.createElement(d,s(s({ref:r},c),{},{components:t})):n.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={title:"\u4f7f\u7528-promise-all",sidebar_position:3},s=void 0,a={unversionedId:"promise-eventLoop-security/promise/\u4f7f\u7528-promise-all-20191121\u65b0",id:"promise-eventLoop-security/promise/\u4f7f\u7528-promise-all-20191121\u65b0",title:"\u4f7f\u7528-promise-all",description:"",source:"@site/programming-tech/promise-eventLoop-security/promise/\u4f7f\u7528-promise-all-20191121\u65b0.md",sourceDirName:"promise-eventLoop-security/promise",slug:"/promise-eventLoop-security/promise/\u4f7f\u7528-promise-all-20191121\u65b0",permalink:"/promise-eventLoop-security/promise/\u4f7f\u7528-promise-all-20191121\u65b0",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/promise-eventLoop-security/promise/\u4f7f\u7528-promise-all-20191121\u65b0.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u4f7f\u7528-promise-all",sidebar_position:3},sidebar:"docs",previous:{title:"\u5b9e\u73b0-promise\u65b9\u6cd5",permalink:"/promise-eventLoop-security/promise/\u5b9e\u73b0-promise\u65b9\u6cd5"},next:{title:"\u4f7f\u7528-promise\u6a21\u62df\u8bf7\u6c42",permalink:"/promise-eventLoop-security/promise/\u4f7f\u7528-promise\u6a21\u62df\u8bf7\u6c42"}},p={},l=[],c={toc:l},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u57fa\u7840\u8bf7\u6c42    \ngetTableData(current = 1, status = 0) {\n      return new Promise((resolve, reject) => {\n        this.$axios\n          .post(\n            `/backstage/ambassador/sales-management/findOrdersAuditRebates`,\n            {\n              pageCount: 10,\n              pageIndex: current,\n              status: status\n            }\n          )\n          .then(res => {\n            if (res.data.code === 0) {\n              resolve(res.data.data);\n            } else {\n              alert('\u8bf7\u6c42\u6570\u636e\u5931\u8d25');\n            }\n          })\n          .catch(error => {\n            console.log(error, 'error');\n          });\n      });\n    }\n\n    //\u8c03\u7528\n    getAllData() {\n      let base = this.getTableData(1, 0);\n      let species = this.getTableData(1, 1);\n      Promise.all([base, species])\n        .then(result => {\n          // \u6570\u636e\u5b58\u5165store\n          this.setAuditListUnDone(result[0]);\n          this.setAuditListDone(result[1]);\n        })\n        .catch(error => {\n          console.log(error, 'errorPromiseAll');\n        });\n    },\n")))}u.isMDXComponent=!0}}]);