"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9057],{3905:(n,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>f});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function l(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function c(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},l=Object.keys(n);for(t=0;t<l.length;t++)o=l[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)o=l[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var a=t.createContext({}),i=function(n){var e=t.useContext(a),o=e;return n&&(o="function"==typeof n?n(e):r(r({},e),n)),o},u=function(n){var e=i(n.components);return t.createElement(a.Provider,{value:e},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,l=n.originalType,a=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),m=i(o),g=s,f=m["".concat(a,".").concat(g)]||m[g]||p[g]||l;return o?t.createElement(f,r(r({ref:e},u),{},{components:o})):t.createElement(f,r({ref:e},u))}));function f(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var l=o.length,r=new Array(l);r[0]=g;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=n,c[m]="string"==typeof n?n:s,r[1]=c;for(var i=2;i<l;i++)r[i]=o[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},19478:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=o(87462),s=(o(67294),o(3905));const l={},r=void 0,c={unversionedId:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee",id:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee",title:"\u9898\u76ee",description:"\u5b9e\u73b0\u4e00\u4e2asleep\u51fd\u6570",source:"@site/programming-tech/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee.md",sourceDirName:"\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise",slug:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/\u9898\u76ee.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"async-await",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/async-await"},next:{title:"promise\u57fa\u7840",permalink:"/\u89e3\u6790-\u89e3\u91ca-\u7f16\u8bd1-\u4e8b\u4ef6\u5faa\u73af-promise-\u5b89\u5168/promise/promise\u57fa\u7840"}},a={},i=[{value:"\u5b9e\u73b0\u4e00\u4e2asleep\u51fd\u6570",id:"\u5b9e\u73b0\u4e00\u4e2asleep\u51fd\u6570",level:2},{value:"\u4f8b\u5b501",id:"\u4f8b\u5b501",level:2},{value:"\u4f8b\u5b502",id:"\u4f8b\u5b502",level:2},{value:"async \u51fd\u6570\u8fd4\u56de\u503c",id:"async-\u51fd\u6570\u8fd4\u56de\u503c",level:2},{value:"return\u7ed3\u679c\u503c\uff1a\u975ethenable\u3001\u975epromise\uff08\u4e0d\u7b49\u5f85\uff09",id:"return\u7ed3\u679c\u503c\u975ethenable\u975epromise\u4e0d\u7b49\u5f85",level:3},{value:"return\u7ed3\u679c\u503c\uff1athenable\uff08\u7b49\u5f85 1\u4e2athen\u7684\u65f6\u95f4\uff09",id:"return\u7ed3\u679c\u503cthenable\u7b49\u5f85-1\u4e2athen\u7684\u65f6\u95f4",level:3},{value:"return\u7ed3\u679c\u503c\uff1apromise\uff08\u7b49\u5f85 2\u4e2athen\u7684\u65f6\u95f4\uff09",id:"return\u7ed3\u679c\u503cpromise\u7b49\u5f85-2\u4e2athen\u7684\u65f6\u95f4",level:3},{value:"\u4f8b\u5b50\uff1a\u9762\u8bd5\u9898",id:"\u4f8b\u5b50\u9762\u8bd5\u9898",level:2},{value:"async",id:"async",level:2},{value:"\u4e0b\u9762\u662f\u9053\u52a0\u5f3a\u7248\u7684\u8003\u9898\uff0c\u5927\u5bb6\u53ef\u4ee5\u8bd5\u4e00\u8bd5\u3002",id:"\u4e0b\u9762\u662f\u9053\u52a0\u5f3a\u7248\u7684\u8003\u9898\u5927\u5bb6\u53ef\u4ee5\u8bd5\u4e00\u8bd5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u4f8b\u5b501",id:"\u4f8b\u5b501-1",level:2},{value:"\u4f8b\u5b502",id:"\u4f8b\u5b502-1",level:2},{value:"\u4f8b\u5b503",id:"\u4f8b\u5b503",level:2},{value:"\u5c0f\u8bd5\u725b\u5200",id:"\u5c0f\u8bd5\u725b\u5200",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-1",level:2}],u={toc:i},m="wrapper";function p(n){let{components:e,...o}=n;return(0,s.kt)(m,(0,t.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5b9e\u73b0\u4e00\u4e2asleep\u51fd\u6570"},"\u5b9e\u73b0\u4e00\u4e2asleep\u51fd\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const sleep = time => {\n  return new Promise(resolve => setTimeout(resolve,time))\n}\n\nsleep(1000).then(()=>{\n  console.log(1)\n})\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function async1() {\n    console.log('async1 start');\n    await async2();\n    console.log('async1 end');\n}\nasync function async2() {\n    console.log('async2');\n}\nconsole.log('script start');\nsetTimeout(function() {\n    console.log('setTimeout');\n}, 0)\nasync1();\nnew Promise(function(resolve) {\n    console.log('promise1');\n    resolve();\n}).then(function() {\n    console.log('promise2');\n});\nconsole.log('script end');\n\n/*\nscript start\nasync1 start\nasync2\npromise1\nscript end\nasync1 end\npromise2\nsetTimeout\n*/\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b501"},"\u4f8b\u5b501"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function async1 () {\n \xa0 \xa0await testFn()\n  \xa0 console.log('A')\n}\nfunction testFn(){\n  return new Promise((resolve, reject) => {\n \xa0 \xa0 \xa0 \xa0resolve()\n \xa0  })\n}\nasync1()\n\nnew Promise((resolve) => {\n \xa0 \xa0console.log('B')\n \xa0 \xa0resolve()\n}).then(() => {\n \xa0 \xa0console.log('C')\n}).then(() => {\n \xa0 \xa0console.log('D')\n})\n// b a c d\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b502"},"\u4f8b\u5b502"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function async1 () {\n \xa0 \xa0await async2()\n \xa0 \xa0console.log('A')\n}\nasync function async2 () {\n \xa0 \xa0return new Promise((resolve, reject) => {\n \xa0 \xa0 \xa0 \xa0resolve()\n \xa0  })\n}\nasync1()\nnew Promise((resolve) => {\n \xa0 \xa0console.log('B')\n \xa0 \xa0resolve()\n}).then(() => {\n \xa0 \xa0console.log('C')\n}).then(() => {\n \xa0 \xa0console.log('D')\n})\n\n// b c d a\n")),(0,s.kt)("h2",{id:"async-\u51fd\u6570\u8fd4\u56de\u503c"},"async \u51fd\u6570\u8fd4\u56de\u503c"),(0,s.kt)("p",null,"\u89e3\u6790\u4f8b\u5b502\uff1a\nasync\u51fd\u6570\u5728\u629b\u51fa\u8fd4\u56de\u503c\u65f6\uff0c\u4f1a\u6839\u636e\u8fd4\u56de\u503c\u7c7b\u578b\u5f00\u542f\u4e0d\u540c\u6570\u76ee\u7684\u5fae\u4efb\u52a1"),(0,s.kt)("h3",{id:"return\u7ed3\u679c\u503c\u975ethenable\u975epromise\u4e0d\u7b49\u5f85"},"return\u7ed3\u679c\u503c\uff1a\u975ethenable\u3001\u975epromise\uff08\u4e0d\u7b49\u5f85\uff09"),(0,s.kt)("p",null,"await\u540e\u9762\u63a5\u975e thenable \u7c7b\u578b\uff0c\u4f1a\u7acb\u5373\u5411\u5fae\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u4e2a\u5fae\u4efb\u52a1then\uff0c\u4f46\u4e0d\u9700\u7b49\u5f85"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function test () {\n    console.log(1);\n    await 1;\n    console.log(2);\n}\ntest();\nconsole.log(3);\n// 1  3 2\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function func () {\n \xa0 \xa0console.log(2);\n}\nasync function test () {\n \xa0 \xa0console.log(1);\n \xa0 \xa0await func();\n \xa0 \xa0console.log(3);\n}\ntest();\nconsole.log(4);\n\n// 1 2 4 3\n")),(0,s.kt)("h3",{id:"return\u7ed3\u679c\u503cthenable\u7b49\u5f85-1\u4e2athen\u7684\u65f6\u95f4"},"return\u7ed3\u679c\u503c\uff1athenable\uff08\u7b49\u5f85 1\u4e2athen\u7684\u65f6\u95f4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function test () {\n \xa0 \xa0console.log(1);\n \xa0 \xa0await {\n \xa0 \xa0 \xa0 \xa0then (cb) {\n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cb();\n \xa0 \xa0 \xa0  },\n \xa0  };\n \xa0 \xa0console.log(2);\n}\ntest();\nconsole.log(3);\nPromise.resolve()\n \xa0  .then(() => console.log(4))\n \xa0  .then(() => console.log(5))\n \xa0  .then(() => console.log(6))\n \xa0  .then(() => console.log(7));\n// 1 3 4 2 5 6 7\n")),(0,s.kt)("h3",{id:"return\u7ed3\u679c\u503cpromise\u7b49\u5f85-2\u4e2athen\u7684\u65f6\u95f4"},"return\u7ed3\u679c\u503c\uff1apromise\uff08\u7b49\u5f85 2\u4e2athen\u7684\u65f6\u95f4\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function test () {\n \xa0 \xa0console.log(1);\n \xa0 \xa0await new Promise((resolve, reject) => {\n \xa0 \xa0 \xa0 \xa0resolve()\n \xa0  })\n \xa0 \xa0console.log(2);\n}\ntest();\nconsole.log(3);\nPromise.resolve()\n \xa0  .then(() => console.log(4))\n \xa0  .then(() => console.log(5))\n \xa0  .then(() => console.log(6))\n \xa0  .then(() => console.log(7));\n\n// 1 3 2 4 5 6 7\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b50\u9762\u8bd5\u9898"},"\u4f8b\u5b50\uff1a\u9762\u8bd5\u9898"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n    console.log("1.async1 start");\n    await async2();\n    console.log("2.async1 end");\n}\n\nasync function async2() {\n    console.log("3.async2");\n}\n\nconsole.log("4.script start");\n\nsetTimeout(() => {\n    console.log(\'5.setTimeout\');\n}, 0);\n\nasync1();\n\nnew Promise((resolve) => {\n    console.log("6.promise1");\n    resolve();\n}).then(() => {\n    console.log("7.promise2");\n})\n\nconsole.log("8.script end");\n\n\n\n/*\n4.script start\n1.async1 start\n3.async2\n6.promise1\n8.script end\n2.async1 end\n7.promise2\n5.setTimeout\n* */\n')),(0,s.kt)("br",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise((resolve, reject) => {\n    console.log(1);\n    resolve();\n    console.log(2);\n    reject('error');\n})\npromise.then(() => {\n    console.log(3);\n}).catch(e => console.log(e))\nconsole.log(4);\n/*\n1\n2\n4\n3\n\u89c4\u5219\u4e00\uff0cpromise\u6784\u9020\u51fd\u6570\u7684\u4ee3\u7801\u4f1a\u7acb\u5373\u6267\u884c\uff0cthen\u6216\u8005reject\u91cc\u9762\u7684\u4ee3\u7801\u4f1a\u653e\u5165\u5f02\u6b65\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5728\u5b8f\u4efb\u52a1\u7ed3\u675f\u540e\u4f1a\u7acb\u5373\u6267\u884c\u3002\u89c4\u5219\u4e8c\uff1apromise\u7684\u72b6\u6001\u4e00\u65e6\u53d8\u66f4\u4e3a\u6210\u529f\u6216\u8005\u5931\u8d25\uff0c\u5219\u4e0d\u4f1a\u518d\u6b21\u6539\u53d8\uff0c\u6240\u4ee5\u6267\u884c\u7ed3\u679c\u4e3a\uff1a1,2,4,3\u3002\n*/\n")),(0,s.kt)("h2",{id:"async"},"async"),(0,s.kt)("p",null,"\u8fd9\u9053\u9898\u7684\u5751\u5c31\u5728\u4e8e async \u4e2d\u5982\u679c\u6ca1\u6709 await\uff0c\u90a3\u4e48\u5b83\u5c31\u662f\u4e00\u4e2a\u7eaf\u540c\u6b65\u51fd\u6570\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("AAAA");\n  async2(); \n  console.log("BBBB");\n}\nasync function async2() {\n  console.log("CCCC");\n}\n\nconsole.log("DDDD");\nsetTimeout(function () {\n  console.log("FFFF");\n}, 0);\nasync1();\nnew Promise(function (resolve) {\n  console.log("GGGG");\n  resolve();\n}).then(function () {\n  console.log("HHHH");\n});\nconsole.log("IIII");\n/*\nDDDD\n\nAAA\n\nCCC\nBBB\n\nGGGG\nIIII\nHHHH\n\u8fd9\u9053\u9898\u7684\u8d77\u59cb\u4ee3\u7801\u5728\u7b2c 9 \u884c\uff0c\u8f93\u51faDDDD\n\u7b2c 10 \u884c\u8ba1\u65f6\u5668\u5f00\u542f\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1 t1\uff08\u4e00\u4e2a\u79f0\u547c\uff09\uff0c\u8fd9\u4e2a\u4efb\u52a1\u4e14\u4e3a\u5b8f\u4efb\u52a1\u3002\n\u7b2c 13 \u884c\u51fd\u6570async1\u6267\u884c\uff0c\u8fd9\u4e2a\u51fd\u6570\u5185\u6ca1\u6709 await \u6240\u4ee5\u5b83\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u7eaf\u540c\u6b65\u51fd\u6570\uff0c\u6253\u5370\u8f93\u51faAAAA,\n\u5728async1\u4e2d\u6267\u884casync2\u51fd\u6570\uff0c\u56e0\u4e3aasync2\u7684\u5185\u90e8\u4e5f\u6ca1\u6709 await\uff0c\u6240\u4ee5\u5b83\u4e5f\u662f\u4e2a\u7eaf\u540c\u6b65\u51fd\u6570\uff0c\u6253\u5370\u8f93\u51faCCCC\n\u7d27\u63a5\u7740\u6253\u5370\u8f93\u51faBBBB\u3002\n\u7b2c 14 \u884c new Promise \u6267\u884c\u91cc\u9762\u7684\u4ee3\u7801\u4e5f\u662f\u540c\u6b65\u7684,\u6240\u4ee5\u6253\u5370\u8f93\u51faGGGG,resolve()\u8c03\u7528\u7684\u65f6\u5019\u5f00\u542f\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1 t2\uff08\u4e00\u4e2a\u79f0\u547c\uff09\uff0c\u4e14\u8fd9\u4e2a\u4efb\u52a1 t2 \u662f\u5fae\u4efb\u52a1\uff0c\u5b83\u7684\u6267\u884c\u4ea4\u7ed9 then()\u4e2d\u7684\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6267\u884c\uff0c\u4e14\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5b8f\u4efb\u52a1\uff08t1\uff09\u6267\u884c\u3002\n\u7b2c 20 \u884c\u6253\u5370\u8f93\u51faIIII,\u6b64\u65f6\u7ebf\u7a0b\u4e0a\u7684\u540c\u6b65\u4efb\u52a1\u5168\u90e8\u6267\u884c\u7ed3\u675f\u3002\n\u5728\u6267\u884c\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u5f02\u6b65\u4efb\u52a1\u65f6\uff0c\u5fae\u4efb\u52a1\u4f18\u5148\u4e8e\u5b8f\u4efb\u52a1\u6267\u884c\uff0c\u6240\u4ee5\u5148\u6267\u884c\u5fae\u4efb\u52a1 t2 \u6253\u5370\u8f93\u51fa HHHH,\u7136\u540e\u6267\u884c\u5b8f\u4efb\u52a1 t1 \u6253\u5370\u8f93\u51fa FFFF\n\u6240\u4ee5\u7efc\u4e0a \u7ed3\u679c\u8f93\u51fa\u662f DDDD AAAA CCCC BBBB GGGG IIII HHHH FFFF\n*/\n')),(0,s.kt)("h2",{id:"\u4e0b\u9762\u662f\u9053\u52a0\u5f3a\u7248\u7684\u8003\u9898\u5927\u5bb6\u53ef\u4ee5\u8bd5\u4e00\u8bd5"},"\u4e0b\u9762\u662f\u9053\u52a0\u5f3a\u7248\u7684\u8003\u9898\uff0c\u5927\u5bb6\u53ef\u4ee5\u8bd5\u4e00\u8bd5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function async1() {\n  await async2()\n  console.log('1.async1 end')\n}\n\nasync function async2() {\n  console.log('2.async2 end')\n}\n\nasync1()\n\nsetTimeout(function() {\n  console.log('3.setTimeout')\n}, 0)\n\nnew Promise(resolve => {\n  console.log('4.Promise')\n  resolve()\n}).then(function() {\n    console.log('5.promise1')\n  }).then(function() {\n    console.log('6.promise2')\n  })\n\n/*\n2.async2 end\n4.Promise\n1.async1 end\n5.promise1\n6.promise2\n3.setTimeout\n*/\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"//\u4f8b\u5b502\uff1a\nconsole.log('\u6253\u5370' + 1);\n\nsetTimeout(function () {\n  console.log('\u6253\u5370setTimeout' + 2);\n})\n\nnew Promise(function (resolve, reject) {\n  console.log('\u6253\u5370' + 3);\n  resolve()\n}).then(function () {\n  console.log('\u6253\u5370then(' + 4)\n});;\n\nconsole.log('\u6253\u5370' + 10);\n\nlet promiseA = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    console.log('\u6253\u5370setTimeout' + 5);\n  });\n  resolve()\n})\n\npromiseA.then(() => {\n  console.log('\u6253\u5370then(' + 6)\n});\n\nsetTimeout(function () {\n  new Promise(function (resolve, reject) {\n    console.log('\u6253\u5370setTimeout' + 7);\n  });\n})\n\n/*\n\u6253\u53701\n\u6253\u53703\n\u6253\u537010\n\u6253\u5370then(4\n\u6253\u5370then(6\n\u6253\u5370setTimeout2\n\u6253\u5370setTimeout5\n\u6253\u5370setTimeout7\n*/\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b501-1"},"\u4f8b\u5b501"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"console.log('\u6253\u5370' + 1);\n\nsetTimeout(function () {\n  console.log('\u6253\u5370setTimeout' + 2);\n})\n\nnew Promise(function (resolve, reject) {\n  console.log('\u6253\u5370' + 3);\n  resolve()\n}).then(function () {\n  console.log('\u6253\u5370then(' + 4)\n});;\n\nconsole.log('\u6253\u5370' + 10);\n\nlet promiseA = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    console.log('\u6253\u5370setTimeout' + 5);\n  });\n  resolve()\n})\n\npromiseA.then(() => {\n  console.log('\u6253\u5370then(' + 6)\n});\n\nsetTimeout(function () {\n  new Promise(function (resolve, reject) {\n    console.log('\u6253\u5370setTimeout' + 7);\n  });\n})\n/*\n\u6253\u53701\n\u6253\u53703\n\u6253\u537010\n\u6253\u5370then(4\n\u6253\u5370then(6\n\u6253\u5370setTimeout2\n\u6253\u5370setTimeout5\n\u6253\u5370setTimeout7\n*/\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b502-1"},"\u4f8b\u5b502"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u56e0\u4e3aPromise\u5b9a\u4e49\u4e4b\u540e\u4fbf\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u5176\u540e\u7684.then()\u662f\u5f02\u6b65\u91cc\u9762\u7684\u5fae\u4efb\u52a1\u3002\nsetTimeout(() => {\n  console.log('1.\u6211\u662f\u5b8f\u4efb\u52a1')\n}, 0);\n\nlet promise = new Promise(resolve => {\n  resolve();\n  console.log('2.\u65b0\u5efapromise')\n});\n\npromise.then(value => {\n  console.log('3.\u6211\u662f\u5fae\u4efb\u52a1')\n});\n\nconsole.log('4.\u4e3b\u6d41\u7a0b');\n\n\n/*\n2.\u65b0\u5efapromise\n4.\u4e3b\u6d41\u7a0b\n3.\u6211\u662f\u5fae\u4efb\u52a1\n1.\u6211\u662f\u5b8f\u4efb\u52a1\n*/ \n")),(0,s.kt)("h2",{id:"\u4f8b\u5b503"},"\u4f8b\u5b503"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'setTimeout(() => {\n  console.log("4");\n\n  setTimeout(() => {\n    console.log("8");\n  }, 0);\n\n  new Promise((r) => {\n    console.log("5");//\u6784\u9020\u51fd\u6570\u662f\u540c\u6b65\u7684\n    r();\n  }).then(() => {\n    console.log("7");//then()\u662f\u5f02\u6b65\u7684\uff0c\u8fd9\u91cc\u5df2\u7ecf\u5165\u961f\n  });\n\n  console.log("6");\n}, 0);\n\nnew Promise((r) => {\n  console.log("1");//\u6784\u9020\u51fd\u6570\u662f\u540c\u6b65\u7684\n  r();\n}).then(() => {\n  console.log("3");//then()\u662f\u5f02\u6b65\u7684\uff0c\u8fd9\u91cc\u5df2\u7ecf\u5165\u961f\n});\n\nconsole.log("2");\n\n/*\n1\n2\n3\n4\n5\n6\n7\n8\n*/\n')),(0,s.kt)("h2",{id:"\u5c0f\u8bd5\u725b\u5200"},"\u5c0f\u8bd5\u725b\u5200"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(function () {\n    console.log('1');\n});\n\nnew Promise(function(resolve,reject){\n    console.log('2:',2)\n    resolve(3)\n}).then(function(val){\n    console.log('3:',val);\n})\n\n/*\n2: 2\n3: 3\n1\n*/\n")),(0,s.kt)("h2",{id:"\u4f8b\u5b50-1"},"\u4f8b\u5b50"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(function () {\n  console.log(\"==a\", a);\n}, 0);\n\nvar a = 10;\n\nconsole.log(\"===b\", b);\nconsole.log(\"=====fn\", fn);\n\nvar b = 20;\n\nfunction fn() {\n  setTimeout(function () {\n    console.log('setTImeout 10ms.');\n  }, 10);\n}\n\nfn.toString = function () {\n  return 30;\n}\n\nsetTimeout(function () {\n  console.log('setTimeout 20ms.');\n}, 20);\n\nfn();\n\n/*\u6253\u5370\uff1a\nfn();\n===b undefined\n=====fn \u0192 fn() {\nsetTimeout(function () {\n    console.log('setTImeout 10ms.');\n  }, 10);\n}\n\n==a 10\nsetTImeout 10ms.\nsetTimeout 20ms.\n*/\n")))}p.isMDXComponent=!0}}]);