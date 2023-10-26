"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3487],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>v});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,v=m["".concat(a,".").concat(d)]||m[d]||u[d]||s;return r?t.createElement(v,l(l({ref:n},p),{},{components:r})):t.createElement(v,l({ref:n},p))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<s;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3556:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const s={title:"promise\u57fa\u7840",sidebar_position:1},l=void 0,i={unversionedId:"promise-eventLoop-security/promise/promise\u57fa\u7840",id:"promise-eventLoop-security/promise/promise\u57fa\u7840",title:"promise\u57fa\u7840",description:"Promise \u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d,\u88ab\u8c03\u7528",source:"@site/programming-tech/promise-eventLoop-security/promise/01-promise\u57fa\u7840.md",sourceDirName:"promise-eventLoop-security/promise",slug:"/promise-eventLoop-security/promise/promise\u57fa\u7840",permalink:"/promise-eventLoop-security/promise/promise\u57fa\u7840",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/promise-eventLoop-security/promise/01-promise\u57fa\u7840.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"promise\u57fa\u7840",sidebar_position:1},sidebar:"docs",previous:{title:"\u65e7-\u53d8\u91cf\u5bf9\u8c61",permalink:"/parsing-interpretation-compilation/\u65e7-\u53d8\u91cf\u5bf9\u8c61"},next:{title:"promise\u5b9e\u73b0\u539f\u7406",permalink:"/promise-eventLoop-security/promise/promise\u5b9e\u73b0\u539f\u7406"}},a={},c=[{value:"Promise \u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d,\u88ab\u8c03\u7528",id:"promise-\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u88ab\u8c03\u7528",level:2},{value:"\u5b9e\u4f8b-promise \u6a21\u62df\u8bf7\u6c42",id:"\u5b9e\u4f8b-promise-\u6a21\u62df\u8bf7\u6c42",level:3},{value:"\u89e3\u6790",id:"\u89e3\u6790",level:3},{value:"promise \u548c await",id:"promise-\u548c-await",level:3},{value:"\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5",id:"\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5",level:3},{value:"promise \u65b9\u6cd5",id:"promise-\u65b9\u6cd5",level:2},{value:"Promise.resolve(value)",id:"promiseresolvevalue",level:3},{value:"Promise.reject(reason)",id:"promiserejectreason",level:3},{value:"Promise.allSettled(iterable)",id:"promiseallsettlediterable",level:3},{value:"promise all",id:"promise-all",level:3},{value:"Promise.prototype",id:"promiseprototype",level:3},{value:"Promise.race(iterable)",id:"promiseraceiterable",level:3}],p={toc:c},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"promise-\u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u88ab\u8c03\u7528"},"Promise \u4e00\u822c\u662f\u5305\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d,\u88ab\u8c03\u7528"),(0,o.kt)("p",null,"Promise \u7684\u6784\u9020\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u662f\u51fd\u6570\uff0c\u5e76\u4e14\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff1aresolve\uff0creject\uff0c\u5206\u522b\u8868\u793a\u5f02\u6b65\u64cd\u4f5c\u6267\u884c\u6210\u529f\u540e\u7684\u56de\u8c03\u51fd\u6570"),(0,o.kt)("h3",{id:"\u5b9e\u4f8b-promise-\u6a21\u62df\u8bf7\u6c42"},"\u5b9e\u4f8b-promise \u6a21\u62df\u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function requestWork(val) {\n  console.log(val);\n  return new Promise((resolve, reject) => {\n    setTimeout(function () {\n      const res = {\n        code: 200,\n        message: "ok",\n        data: {},\n      };\n\n      const { code, message } = res;\n\n      if (code === 200) {\n        console.log("Request success", res);\n        resolve(res);\n      } else {\n        console.log("Request failed");\n        reject(message);\n      }\n    }, 2000);\n  }).catch((error) => {\n    console.log(error);\n  });\n}\n\nrequestWork("Use normal function request");\n\nconst requestWorkUseAsync = async () => {\n  const res = await requestWork("requestWorkUseAsync");\n  console.log("requestWorkUseAsync return", res);\n};\n\nrequestWorkUseAsync();\n')),(0,o.kt)("h3",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("p",null,"promise \u6709\u4e09\u4e2a\u72b6\u6001\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"pending","[\u5f85\u5b9a]","\u521d\u59cb\u72b6\u6001"),(0,o.kt)("li",{parentName:"ol"},"fulfilled","[\u5b9e\u73b0]","\u64cd\u4f5c\u6210\u529f"),(0,o.kt)("li",{parentName:"ol"},"rejected","[\u88ab\u5426\u51b3]","\u64cd\u4f5c\u5931\u8d25\n\u5f53 promise \u72b6\u6001\u53d1\u751f\u6539\u53d8\uff0c\u5c31\u4f1a\u89e6\u53d1 then()\u91cc\u7684\u54cd\u5e94\u51fd\u6570\u5904\u7406\u540e\u7eed\u6b65\u9aa4\uff1b")),(0,o.kt)("p",null,"Promise \u4e0a\u8fd8\u6709 then \u65b9\u6cd5\uff0cthen \u65b9\u6cd5\u5c31\u662f\u7528\u6765\u6307\u5b9a Promise \u5bf9\u8c61\u7684\u72b6\u6001\u6539\u53d8\u65f6\u786e\u5b9a\u6267\u884c\u7684\u64cd\u4f5c\uff0cresolve \u65f6\u6267\u884c\u7b2c\u4e00\u4e2a\u51fd\u6570\uff08onFulfilled\uff09\uff0creject \u65f6\u6267\u884c\u7b2c\u4e8c\u4e2a\u51fd\u6570\uff08onRejected\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function getNumber() {\n  const p = new Promise(function (resolve, reject) {\n    // \u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n    setTimeout(function () {\n      const num = Math.ceil(Math.random() * 10); //\u751f\u62101-10\u7684\u968f\u673a\u6570\n      if (num <= 5) {\n        resolve(num);\n      } else {\n        reject("\u6570\u5b57\u592a\u5927\u4e86");\n      }\n    }, 2000);\n  });\n  return p;\n}\n\ngetNumber().then(\n  function (data) {\n    console.log("resolved");\n    console.log(data);\n  },\n  function (reason, data) {\n    console.log("rejected");\n    console.log(reason);\n  }\n);\n')),(0,o.kt)("h3",{id:"promise-\u548c-await"},"promise \u548c await"),(0,o.kt)("p",null,"await \u5728\u7b49\u4ec0\u4e48\uff1f\n\u4e00\u53e5\u8bdd\u6982\u62ec\uff1a await \u7b49\u7684\u662f\u53f3\u4fa7\u300c\u8868\u8fbe\u5f0f\u300d\u7684\u7ed3\u679c"),(0,o.kt)("h3",{id:"\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5"},"\u94fe\u5f0f\u64cd\u4f5c\u7684\u7528\u6cd5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece\u8868\u9762\u4e0a\u770b\uff0cPromise \u53ea\u662f\u80fd\u591f\u7b80\u5316\u5c42\u5c42\u56de\u8c03\u7684\u5199\u6cd5\uff0c\u800c\u5b9e\u8d28\u4e0a\uff0cPromise \u7684\u7cbe\u9ad3\u662f\u201c\u72b6\u6001\u201d\uff0c\u7528\u7ef4\u62a4\u72b6\u6001\u3001\u4f20\u9012\u72b6\u6001\u7684\u65b9\u5f0f\u6765\u4f7f\u5f97\u56de\u8c03\u51fd\u6570\u80fd\u591f\u53ca\u65f6\u8c03\u7528\uff0c\u5b83\u6bd4\u4f20\u9012 callback \u51fd\u6570\u8981\u7b80\u5355\u3001\u7075\u6d3b\u7684\u591a\u3002\u6240\u4ee5\u4f7f\u7528 Promise \u7684\u6b63\u786e\u573a\u666f\u662f\u8fd9\u6837\u7684\uff1a")),(0,o.kt)("p",null,"promise \u94fe\u5f0f\u8c03\u7528\uff1a\u56e0\u4e3a then()\u65b9\u6cd5\u5185\u90e8\u8fd4\u56de\u4e86\u4e00\u4e2a Promise \u5b9e\u4f8b\uff0c\u800c\u8fd4\u56de\u7684\u8fd9\u4e2a Promise \u5b9e\u4f8b\u5728\u7ee7\u7eed\u8c03\u7528\u4e86\u7b2c\u4e8c\u4e2a then()\u65b9\u6cd5\u3002\u5e76\u4e14\u7b2c\u4e8c\u4e2a then \u7684 resolve \u56de\u8c03\u7684\u53c2\u6570\uff0c\u662f\u4e0a\u4e00\u4e2a then \u7684 resolve \u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise((resolve, reject) => {\n  resolve(123);\n})\n  .then((res) => {\n    console.log(res);\n    return 456;\n  })\n  .then((res) => {\n    console.log(res);\n    return 789;\n  })\n  .then((res) => {\n    console.log(res);\n  });\n/*\n123\n456\n789\n*/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function runAsync1() {\n  var p = new Promise(function (resolve, reject) {\n    //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n    setTimeout(function () {\n      console.log("\u5f02\u6b65\u4efb\u52a11\u6267\u884c\u5b8c\u6210");\n      resolve("\u968f\u4fbf\u4ec0\u4e48\u6570\u636e1");\n    }, 1000);\n  });\n  return p;\n}\nfunction runAsync2() {\n  var p = new Promise(function (resolve, reject) {\n    //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n    setTimeout(function () {\n      console.log("\u5f02\u6b65\u4efb\u52a12\u6267\u884c\u5b8c\u6210");\n      resolve("\u968f\u4fbf\u4ec0\u4e48\u6570\u636e2");\n    }, 2000);\n  });\n  return p;\n}\nfunction runAsync3() {\n  var p = new Promise(function (resolve, reject) {\n    //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n    setTimeout(function () {\n      console.log("\u5f02\u6b65\u4efb\u52a13\u6267\u884c\u5b8c\u6210");\n      resolve("\u968f\u4fbf\u4ec0\u4e48\u6570\u636e3");\n    }, 2000);\n  });\n  return p;\n}\n\nrunAsync1()\n  .then(function (data) {\n    console.log(data);\n    return runAsync2();\n  })\n  .then(function (data) {\n    console.log(data);\n    return runAsync3();\n  })\n  .then(function (data) {\n    console.log(data);\n  });\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u80fd\u591f\u6309\u987a\u5e8f\uff0c\u6bcf\u9694\u4e24\u79d2\u8f93\u51fa\u6bcf\u4e2a\u5f02\u6b65\u56de\u8c03\u4e2d\u7684\u5185\u5bb9\uff0c\u5728 runAsync2 \u4e2d\u4f20\u7ed9 resolve \u7684\u6570\u636e\uff0c\u80fd\u5728\u63a5\u4e0b\u6765\u7684 then \u65b9\u6cd5\u4e2d\u62ff\u5230.")),(0,o.kt)("h2",{id:"promise-\u65b9\u6cd5"},"promise \u65b9\u6cd5"),(0,o.kt)("h3",{id:"promiseresolvevalue"},"Promise.resolve(value)"),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u89e3\u51b3\u7684 Promise \u5bf9\u8c61\uff0c\u5176\u72b6\u6001\u4e3a\u5df2\u5b8c\u6210\uff08fulfilled\uff09\uff0c\u5e76\u4e14\u5e26\u6709\u7ed9\u5b9a\u7684\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Promise.resolve("Hello, world").then((result) => {\n  console.log(result); // \u8f93\u51fa "Hello, world"\n});\n')),(0,o.kt)("h3",{id:"promiserejectreason"},"Promise.reject(reason)"),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u62d2\u7edd\u7684 Promise \u5bf9\u8c61\uff0c\u5176\u72b6\u6001\u4e3a\u5df2\u62d2\u7edd\uff08rejected\uff09\uff0c\u5e76\u4e14\u5e26\u6709\u7ed9\u5b9a\u7684\u62d2\u7edd\u539f\u56e0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Promise.reject(new Error("Something went wrong")).catch((error) => {\n  console.error(error); // \u8f93\u51fa\u9519\u8bef\u4fe1\u606f\n});\n')),(0,o.kt)("h3",{id:"promiseallsettlediterable"},"Promise.allSettled(iterable)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u8be5 Promise \u5728\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u7684\u6240\u6709 Promise \u90fd\u5df2\u89e3\u51b3\uff08\u65e0\u8bba\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff09\u540e\u624d\u89e3\u51b3\uff0c\u5e76\u63d0\u4f9b\u6bcf\u4e2a Promise \u7684\u89e3\u51b3\u72b6\u6001\u548c\u503c\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a\u4e0a\u4f20\u7684\u65f6\u5019\u77e5\u9053\u51e0\u4e2a\u6210\u529f\u51e0\u4e2a\u5931\u8d25"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject(new Error("Rejected"));\nconst promise3 = Promise.resolve(3);\n\nPromise.allSettled([promise1, promise2, promise3]).then((results) => {\n  console.log(results);\n  // \u8f93\u51fa: [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error: "Rejected"}, {status: "fulfilled", value: 3}]\n});\n')),(0,o.kt)("h3",{id:"promise-all"},"promise all"),(0,o.kt)("p",null,"\u4f8b\u5b50 1, \u5b9e\u4f8b-promise-all-20191121:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u57fa\u7840\u8bf7\u6c42\ngetTableData(current = 1, status = 0) {\n      return new Promise((resolve, reject) => {\n        this.$axios\n          .post(\n            `/backstage/ambassador/sales-management/findOrdersAuditRebates`,\n            {\n              pageCount: 10,\n              pageIndex: current,\n              status: status\n            }\n          )\n          .then(res => {\n            if (res.data.code === 0) {\n              resolve(res.data.data);\n            } else {\n              alert('\u8bf7\u6c42\u6570\u636e\u5931\u8d25');\n            }\n          })\n          .catch(error => {\n            console.log(error, 'error');\n          });\n      });\n    }\n\n    //\u8c03\u7528\n    getAllData() {\n      let base = this.getTableData(1, 0);\n      let species = this.getTableData(1, 1);\n      Promise.all([base, species])\n        .then(result => {\n          // \u6570\u636e\u5b58\u5165store\n          this.setAuditListUnDone(result[0]);\n          this.setAuditListDone(result[1]);\n        })\n        .catch(error => {\n          console.log(error, 'errorPromiseAll');\n        });\n    },\n")),(0,o.kt)("p",null,"\u4f8b\u5b50 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function test(val) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      let res = Math.random() + 1;\n      if (res < 1.5) {\n        resolve("<0.5");\n      } else {\n        reject(">0.5");\n      }\n      resolve(res);\n    }, 1000);\n  });\n}\n\nPromise.all([test(1), test(2)]).then(\n  (x) => {\n    console.log(x);\n  },\n  (y) => {\n    console.log(y);\n  }\n);\n')),(0,o.kt)("h3",{id:"promiseprototype"},"Promise.prototype"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then(onFulfilled, onRejected)"),"\uff1a\u6dfb\u52a0\u89e3\u51b3\uff08fulfilled\uff09\u548c\u62d2\u7edd\uff08rejected\uff09\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve) => {\n  setTimeout(() => resolve("Success!"), 1000);\n});\n\npromise.then((result) => {\n  console.log(result); // \u8f93\u51fa "Success!"\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Promise.prototype.catch(onRejected)"),"\uff1a\u6dfb\u52a0\u62d2\u7edd\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7528\u4e8e\u5904\u7406 Promise \u62d2\u7edd\u65f6\u7684\u60c5\u51b5\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  setTimeout(() => reject(new Error("Something went wrong")), 1000);\n});\n\npromise.catch((error) => {\n  console.error(error); // \u8f93\u51fa\u9519\u8bef\u4fe1\u606f\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Promise.prototype.finally(onFinally)"))),(0,o.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u65e0\u8bba Promise \u662f\u5426\u89e3\u51b3\u6216\u62d2\u7edd\uff0c\u90fd\u4f1a\u6267\u884c\u3002\u8fd9\u5728\u9700\u8981\u6267\u884c\u6e05\u7406\u64cd\u4f5c\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve) => {\n  setTimeout(() => resolve("Success!"), 1000);\n});\n\npromise.finally(() => {\n  console.log("Finally block executed."); // \u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u6267\u884c\n});\n')),(0,o.kt)("h3",{id:"promiseraceiterable"},"Promise.race(iterable)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u8be5 Promise \u5728\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a Promise \u89e3\u51b3\u6216\u62d2\u7edd\u65f6\u5c31\u89e3\u51b3\u6216\u62d2\u7edd\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "first"));\nconst promise2 = new Promise((resolve) => setTimeout(resolve, 200, "second"));\n\nPromise.race([promise1, promise2]).then((value) => {\n  console.log(value); // \u8f93\u51fa "first"\uff0c\u56e0\u4e3a\u5b83\u89e3\u51b3\u5f97\u66f4\u5feb\n});\n')))}u.isMDXComponent=!0}}]);