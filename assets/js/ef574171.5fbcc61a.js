"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[210],{3905:(n,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>d});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},g=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},i="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,g=l(n,["components","mdxType","originalType","parentName"]),i=p(t),m=a,d=i["".concat(c,".").concat(m)]||i[m]||u[m]||o;return t?r.createElement(d,s(s({ref:e},g),{},{components:t})):r.createElement(d,s({ref:e},g))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[i]="string"==typeof n?n:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31678:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},s=void 0,l={unversionedId:"JavaScript/ts/\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668",id:"JavaScript/ts/\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668",title:"\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668",description:"\u4e00\u3001\u88c5\u9970\u5668\u7684\u79cd\u7c7b",source:"@site/programming-tech/JavaScript/06-ts/\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668.md",sourceDirName:"JavaScript/06-ts",slug:"/JavaScript/ts/\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668",permalink:"/JavaScript/ts/\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/JavaScript/06-ts/\u5176\u4ed6-typeScript-TypeScript\u88c5\u9970\u5668.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5176\u4ed6-typeScript",permalink:"/JavaScript/ts/\u5176\u4ed6-typeScript"},next:{title:"interface-type\u533a\u522b",permalink:"/JavaScript/ts/interface-type\u533a\u522b"}},c={},p=[],g={toc:p},i="wrapper";function u(n){let{components:e,...t}=n;return(0,a.kt)(i,(0,r.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u3001\u88c5\u9970\u5668\u7684\u79cd\u7c7b\n1\u3001\u6839\u636e\u88c5\u9970\u5668\u7684\u4f4d\u7f6e\n\u7c7b\u88c5\u9970\u5668\n\u7c7b\u51fd\u6570\u88c5\u9970\u5668\n\u7c7b\u5c5e\u6027\u88c5\u9970\u5668\n\u7c7b\u51fd\u6570\u53c2\u6570\u88c5\u9970\u5668"),(0,a.kt)("p",null,"2\u3001\u6839\u636e\u88c5\u9970\u5668\u662f\u5426\u6709\u53c2\u6570\n\u65e0\u53c2\u88c5\u9970\u5668(\u4e00\u822c\u88c5\u9970\u5668)\n\u6709\u53c2\u88c5\u9970\u5668(\u88c5\u9970\u5668\u5de5\u5382)"),(0,a.kt)("h1",{id:"\u7c7b\u7684\u88c5\u9970\u5668"},"\u7c7b\u7684\u88c5\u9970\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target) {\n  console.log('---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 start------------------');\n  console.log(target); // \u8f93\u51fa [Function: Person]\u8868\u793a\u5f53\u524d\u88c5\u9970\u7684\u7c7b\n  console.log('---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 end------------------');\n}\n\n@desc // \u4f7f\u7528\u88c5\u9970\u5668\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\nlet p = new Person('\u54c8\u54c8', 20);\n")),(0,a.kt)("p",null,"2\u3001\u5e94\u7528\uff1a\u4f7f\u7528\u7c7b\u7684\u88c5\u9970\u5668\u6269\u5c55\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target) {\n  console.log('---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 start------------------');\n  console.log(target);\n  console.log('---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 end------------------');\n  return class extends target{ // \u5728react\u9ad8\u9636\u7ec4\u4ef6\u4e2d\u7ecf\u5e38\u770b\u5230\u8fd9\u79cd\u5199\u6cd5\n    gender = '\u7537';\n    say() {\n      console.log(this.name, this.age, this.gender);\n    }\n  }\n}\n\n@desc\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\np.say();\n\n/*\n---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 start------------------\n[Function: Person]\n---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 end------------------\nclass_1 { name: '\u54c8\u54c8', age: 20, gender: '\u7537' }\n\u54c8\u54c8 20 \u7537\n*/\n")),(0,a.kt)("p",null,"3.\u5e94\u7528\uff1a\u4f7f\u7528\u88c5\u9970\u5668\u4fee\u6539\u7c7b\u7684\u6784\u9020\u51fd\u6570(\u6784\u9020\u51fd\u6570\u7684\u91cd\u8f7d\u3001\u65b9\u6cd5\u91cd\u8f7d)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target) {\n  return class extends target{\n    name = '\u6211\u662f\u91cd\u8f7d\u540e\u7684';\n    sayHell() {\n      console.log('\u6211\u662f\u91cd\u8f7d\u540e\u7684', this.name);\n    }\n  }\n}\n\n@desc\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor() {\n    this.name = '\u54c8\u54c8';\n    this.age = 20;\n  }\n\n  sayHell() {\n    console.log('hello word', this.name);\n  }\n}\n\nlet p = new Person();\nconsole.log(p);\np.sayHell();\n")),(0,a.kt)("p",null,"4\u3001\u5e94\u7528\uff1a\u88c5\u9970\u5668\u5de5\u5382\u7684\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(params: string) {\n  return function (targe: any) {\n    console.log('---------------\u53c2\u6570\u8bf4\u660e start------------------');\n    console.log('params', params);\n    console.log('target', targe);\n    console.log('---------------\u53c2\u6570\u8bf4\u660e end------------------');\n    // \u76f4\u63a5\u5728\u539f\u578b\u4e0a\u6269\u5c55\u4e00\u4e2a\u5c5e\u6027\n    targe.prototype.apiUrl = params;\n  }\n}\n\n@desc('http://www.baidu.com')\nclass P {\n  say() {\n    console.log('\u8bf4\u8bdd')\n  }\n}\n\nlet p:any = new P();\nconsole.log(p.apiUrl);\n")),(0,a.kt)("p",null,"\u4e09\u3001\u7c7b\u51fd\u6570\u88c5\u9970\u5668\n\u5b83\u5e94\u7528\u5230\u65b9\u6cd5\u4e0a\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\u3001\u4fee\u6539\u3001\u66ff\u6362\u8be5\u65b9\u6cd5"),(0,a.kt)("p",null,"1\u3001\u5b9a\u4e49\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target, key, descriptor) {\n  console.log('---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 start------------------');\n  console.log('target', target); // Person { say: [Function] } \u8868\u793a\u7c7b\u7684\u539f\u578b\n  console.log('key', key); // \u88ab\u88c5\u9970\u7684\u51fd\u6570\u540d\n  console.log('descriptor', descriptor); // \u88ab\u88c5\u9970\u7684\u51fd\u6570\u7684\u5bf9\u8c61\u5c5e\u6027\n  console.log('---------------\u7c7b\u7684\u88c5\u9970\u5668\u53c2\u6570 end------------------');\n}\n")),(0,a.kt)("p",null,"2.\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  @desc\n  say() {\n    console.log('\u8bf4\u7684\u65b9\u6cd5')\n  }\n}\n")),(0,a.kt)("p",null,"3\u3001\u5728\u88c5\u9970\u5668\u4e2d\u6dfb\u52a0\u7c7b\u7684\u539f\u578b\u5c5e\u6027\u548c\u539f\u578b\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target, key, descriptor) {\n  target.gender = '\u7537';\n  target.foo = function () {\n    console.log('\u6211\u662f\u539f\u578b\u4e0a\u7684\u65b9\u6cd5')\n  }\n}\n\n// \u6d4b\u8bd5\u4ee3\u7801\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\nconsole.log(Person.prototype);\np.say();\nconsole.log(p.gender); // \u4f7f\u7528p\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\np.foo() // \u8c03\u7528\u4e86p\u539f\u578b\u94fe\u4e0a\u7684\u65b9\u6cd5\n")),(0,a.kt)("p",null,"4\u3001\u4f7f\u7528\u88c5\u9970\u5668\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528(\u66ff\u6362)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(params: string) {\n  return function (target: any, key: string, descriptor: {[propsName: string]: any}) {\n    // \u4fee\u6539\u88ab\u88c5\u9970\u7684\u51fd\u6570\u7684\n    let method = descriptor.value;\n    descriptor.value = function (...args: Array<any>) {\n      args = args.map(it => String(it));\n      console.log(args);\n      // method.apply(this, args);\n    }\n  }\n}\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  @desc('\u88c5\u9970\u5668\u4e0a\u7684\u53c2\u6570')\n  say() {\n    console.log('\u8bf4\u7684\u65b9\u6cd5')\n  }\n}\n\n\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\np.say(123, 23, '\u4f60\u597d');\n")),(0,a.kt)("p",null,"5\u3001\u4f7f\u7528\u88c5\u9970\u5668\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528(\u9644\u52a0\u65b0\u7684\u529f\u80fd)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(params: string) {\n  return function (target: any, key: string, descriptor: {[propsName: string]: any}) {\n    // \u4fee\u6539\u88ab\u88c5\u9970\u7684\u51fd\u6570\u7684\n    let method = descriptor.value;\n    descriptor.value = function (...args: Array<any>) {\n      args = args.map(it => String(it));\n      console.log(args);\n      method.apply(this, args);\n    }\n  }\n}\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  @desc('\u88c5\u9970\u5668\u4e0a\u7684\u53c2\u6570')\n  say(...args) {\n    console.log('\u8bf4\u7684\u65b9\u6cd5', args)\n  }\n}\n\n\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\np.say(123, 23, '\u4f60\u597d');\n")),(0,a.kt)("p",null,"\u56db\u3001\u7c7b\u5c5e\u6027\u88c5\u9970\u5668\n1\u3001\u5b9a\u4e49\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target, name) {\n  console.log('---------------\u7c7b\u5c5e\u6027\u88c5\u9970\u5668\u7684\u53c2\u6570 start------------------');\n  console.log('target', target, target.constructor); // \u8868\u793a\u7c7b\u7684\u539f\u578b\n  console.log('name', name); // \u8868\u793a\u88ab\u88c5\u9970\u5c5e\u6027\u540d\n  console.log('---------------\u7c7b\u5c5e\u6027\u88c5\u9970\u5668\u7684\u53c2\u6570 end------------------');\n}\n\n\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  @desc\n  private gender: string | undefined;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\n")),(0,a.kt)("p",null,"2\u3001\u5728\u88c5\u9970\u5668\u4e2d\u4fee\u6539\u5c5e\u6027\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(target, name) {\n  target[name] = '\u5973';\n}\n\n\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  @desc\n  public gender: string | undefined;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  say() {\n    console.log(this.name, this.age, this.gender);\n  }\n}\n\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\np.say();\n")),(0,a.kt)("p",null,"\u4e94\u3001\u7c7b\u51fd\u6570\u53c2\u6570\u7684\u88c5\u9970\u5668\n\u53c2\u6570\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5019\u5f53\u505a\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4ee5\u4f7f\u7528\u53c2\u6570\u88c5\u9970\u5668\u4e3a\u7c7b\u7684\u539f\u578b\u4e0a\u9644\u52a0\u4e00\u4e9b\u5143\u6570\u636e\n1\u3001\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(params: string) {\n  return function (target: any, key, index) {\n    console.log('---------------\u53c2\u6570\u88c5\u9970\u5668 start------------------');\n    console.log(target); // \u7c7b\u7684\u539f\u578b\n    console.log(key); // \u88ab\u88c5\u9970\u7684\u540d\u5b57\n    console.log(index); // \u5e8f\u5217\u5316\n    console.log('---------------\u53c2\u6570\u88c5\u9970\u5668 end------------------');\n  } \n}\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  say(@desc('\u53c2\u6570\u88c5\u9970\u5668') age: number) {\n    console.log('\u8bf4\u7684\u65b9\u6cd5')\n  }\n}\n\nlet p = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\np.say(20);\n")),(0,a.kt)("p",null,"2\u3001\u4e3a\u7c7b\u7684\u539f\u578b\u4e0a\u6dfb\u52a0\u4e00\u4e9b\u4e1c\u897f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function desc(params: string) {\n  return function (target: any, key, index) {\n    console.log('---------------\u53c2\u6570\u88c5\u9970\u5668 start------------------');\n    console.log(target); // \u7c7b\u7684\u539f\u578b\n    console.log(key); // \u88ab\u88c5\u9970\u7684\u540d\u5b57\n    console.log(index); // \u5e8f\u5217\u5316\n    target.message = params;\n    console.log('---------------\u53c2\u6570\u88c5\u9970\u5668 end------------------');\n  } \n}\nclass Person {\n  public name: string | undefined;\n  public age: number | 0;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  say(@desc('\u53c2\u6570\u88c5\u9970\u5668') age: number) {\n    console.log('\u8bf4\u7684\u65b9\u6cd5')\n  }\n}\n\n\nlet p: any = new Person('\u54c8\u54c8', 20);\nconsole.log(p);\np.say(20);\nconsole.log(p.message)\n")),(0,a.kt)("p",null,"\u516d\u3001\u51e0\u79cd\u88c5\u9970\u5668\u7684\u6267\u884c\u987a\u5e8f\n1\u3001\u6d4b\u8bd5\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function logCls(params: string) {\n  return function (target: any) {\n    console.log('4.\u7c7b\u7684\u88c5\u9970\u5668');\n  }\n}\n\nfunction logMehod(params: string) {\n  return function (target: any, key: string, descriptor: {[propsName: string]: any}) {\n    console.log('3.\u7c7b\u7684\u51fd\u6570\u88c5\u9970\u5668');\n  }\n}\n\nfunction logParams(params: string) {\n  return function (target: any, name: string) {\n    console.log('1.\u7c7b\u5c5e\u6027\u88c5\u9970\u5668');\n  }\n}\n\nfunction logQuery(params: string) {\n  return function (target: any, key: string, index: number) {\n    console.log('2.\u51fd\u6570\u53c2\u6570\u88c5\u9970\u5668');\n  }\n}\n\n@logCls('\u7c7b\u7684\u88c5\u9970\u5668')\nclass Person{\n  @logParams('\u5c5e\u6027\u88c5\u9970\u5668')\n  public name: string | undefined;\n\n  @logMehod('\u51fd\u6570\u88c5\u9970\u5668')\n  getData(@logQuery('\u51fd\u6570\u53c2\u6570\u88c5\u9970\u5668') age: number, @logQuery('\u51fd\u6570\u53c2\u6570\u88c5\u9970\u5668') gender: string) {\n    console.log('----');\n  }\n}\n2\u3001\u8fd0\u884c\u7ed3\u679c\n1.\u7c7b\u5c5e\u6027\u88c5\u9970\u5668\n2.\u51fd\u6570\u53c2\u6570\u88c5\u9970\u5668\n3.\u7c7b\u7684\u51fd\u6570\u88c5\u9970\u5668\n4.\u7c7b\u7684\u88c5\u9970\u5668\n")))}u.isMDXComponent=!0}}]);