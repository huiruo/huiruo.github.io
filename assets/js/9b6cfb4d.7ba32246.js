"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),x=a,d=u["".concat(s,".").concat(x)]||u[x]||g[x]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=x;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},69317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"exec-test"},o=void 0,c={unversionedId:"regular-string/exec-test",id:"regular-string/exec-test",title:"exec-test",description:"JavaScript RegExp \u5bf9\u8c61\u662f\u6709\u72b6\u6001\u7684\u3002\u4ed6\u4eec\u4f1a\u5c06\u4e0a\u6b21\u6210\u529f\u5339\u914d\u540e\u7684\u4f4d\u7f6e\u8bb0\u5f55\u5728 lastIndex \u5c5e\u6027\u4e2d\u3002\u4f7f\u7528\u6b64\u7279\u6027\uff0c",source:"@site/programming-tech/regular-string/02-exec-test.md",sourceDirName:"regular-string",slug:"/regular-string/exec-test",permalink:"/regular-string/exec-test",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/regular-string/02-exec-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"exec-test"},sidebar:"docs",previous:{title:"\u6b63\u5219-\u57fa\u7840",permalink:"/regular-string/\u6b63\u5219-\u57fa\u7840"},next:{title:"string-match-\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4",permalink:"/regular-string/string-match-\u641c\u7d22\u6307\u5b9a\u503c\u5e76\u8fd4\u56de\u6570\u7ec4"}},s={},p=[{value:"test() \u65b9\u6cd5\u548c exec() \u65b9\u6cd5\u6bd4\u8f83",id:"test-\u65b9\u6cd5\u548c-exec-\u65b9\u6cd5\u6bd4\u8f83",level:2},{value:"test()",id:"test",level:3},{value:"exec()",id:"exec",level:3},{value:"exec\u4f8b\u5b50",id:"exec\u4f8b\u5b50",level:3}],i={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JavaScript RegExp \u5bf9\u8c61\u662f\u6709\u72b6\u6001\u7684\u3002\u4ed6\u4eec\u4f1a\u5c06\u4e0a\u6b21\u6210\u529f\u5339\u914d\u540e\u7684\u4f4d\u7f6e\u8bb0\u5f55\u5728 lastIndex \u5c5e\u6027\u4e2d\u3002\u4f7f\u7528\u6b64\u7279\u6027\uff0c"),(0,a.kt)("p",null,"exec() \u53ef\u7528\u6765\u5bf9\u5355\u4e2a\u5b57\u7b26\u4e32\u4e2d\u7684\u591a\u6b21 * \u5339\u914d\u7ed3\u679c\u8fdb\u884c\u9010\u6761\u7684\u904d\u5386\uff08\u5305\u62ec\u6355\u83b7\u5230\u7684\u5339\u914d\uff09\uff0c"),(0,a.kt)("p",null,"\u800c\u76f8\u6bd4\u4e4b\u4e0b\uff0c String.prototype.match() \u53ea\u4f1a\u8fd4\u56de\u5339\u914d\u5230\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u662f\u4e3a\u4e86\u5224\u65ad\u662f\u5426\u5339\u914d\uff08true\u6216 false\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 RegExp.test() \u65b9\u6cd5\uff0c\u6216\u8005 String.search() \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const regex1 = RegExp('foo*', 'g');\nconst str1 = 'table football, foosball';\nlet array1;\n\nwhile ((array1 = regex1.exec(str1)) !== null) {\n  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);\n  // expected output: \"Found foo. Next starts at 9.\"\n  // expected output: \"Found foo. Next starts at 19.\"\n}\n")),(0,a.kt)("h2",{id:"test-\u65b9\u6cd5\u548c-exec-\u65b9\u6cd5\u6bd4\u8f83"},"test() \u65b9\u6cd5\u548c exec() \u65b9\u6cd5\u6bd4\u8f83"),(0,a.kt)("h3",{id:"test"},"test()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b57\u7b26\u4e32\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff0ctest()\u65b9\u6cd5\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const pattern = /abc/;\nconst text = "abcdef";\nconst result = pattern.test(text);\nconsole.log(result); // \u8f93\u51fa true\uff0c\u56e0\u4e3a "abcdef" \u5305\u542b "abc"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/*\n* \u6267\u884c\u4e00\u4e2a\u68c0\u7d22\uff0c\u7528\u6765\u67e5\u770b\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u662f\u5426\u5339\u914d\u3002\u8fd4\u56de true \u6216 false\n* */\n\nconst text = "000-00-0000";\nconst pattern = /\\d{3}-\\d{2}-\\d{4}/;\nif (pattern.test(text)) {\n    console.log("The pattern was matched.");\n} else {\n    console.log(\'not ok\');\n}\n\n/*\n/[^0-9]/g\n/[^\\d]/g\n*/\n\n// \u9700\u6c42\uff1a\u5fc5\u987b\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d\n// const pattern2 = /^([0-9]{1,}[.][0-9]{4})$/;\n// const pattern2 = /^([0-9]{3}[.][0-9]{4})$/;\nconst pattern2 = /^(([1-9][0-9]*){3}[.][0-9]{4})$/;\n// const text2 = 12.333\n// const text2 = 12.3334\n// const text2 = 123.3334\n// const text2 = 123.333455\nconst text2 = \'023.3334\'\nif (pattern2.test(text2)) {\n    console.log("\u5fc5\u987b\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d,The pattern was matched.");\n} else {\n    console.log(\'not ok\');\n}\n\nconsole.log(\'=======\');\n// let reg = /^[\\d]{2}$/g;\n// let reg = /^([1-9][0-9]*)$/;\nlet reg = /^[1-9][0-9]*$/;\nlet str = "12";\n// let str = "012";\n// let str = "0";\nconsole.log(reg.test(str));     //\u8fd4\u56detrue\n')),(0,a.kt)("h3",{id:"exec"},"exec()"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"exec()\u65b9\u6cd5\u7528\u4e8e\u5728\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u5339\u914d\u7684\u6587\u672c\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u5305\u542b\u5339\u914d\u7684\u5b50\u4e32\u548c\u6355\u83b7\u7ec4\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u627e\u5230\u5339\u914d\uff0cexec()\u8fd4\u56denull\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u627e\u5230\u5339\u914d\uff0c\u8fd4\u56de\u7684\u6570\u7ec4\u5305\u542b\u5339\u914d\u7684\u6587\u672c\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u662f\u6355\u83b7\u7ec4\u7684\u5339\u914d\u7ed3\u679c\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"exec()\u65b9\u6cd5\u7528\u4e8e\u67e5\u627e\u5339\u914d\uff0c\u8fd4\u56de\u5339\u914d\u7684\u6587\u672c\u548c\u6355\u83b7\u7ec4\u4fe1\u606f\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\uff0c\u8fd4\u56denull\u3002\n\nexec()\u65b9\u6cd5\u66f4\u9002\u5408\u5728\u9700\u8981\u83b7\u53d6\u5339\u914d\u7684\u8be6\u7ec6\u4fe1\u606f\u65f6\u4f7f\u7528\uff0c\u800ctest()\u65b9\u6cd5\u901a\u5e38\u7528\u4e8e\u7b80\u5355\u7684\u5e03\u5c14\u5339\u914d\u68c0\u67e5\u3002\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const pattern = /ab(c)/;\nconst text = "abcdef";\nconst result = pattern.exec(text);\nif (result) {\n  console.log(result[0]); // \u8f93\u51fa "abc"\uff0c\u5339\u914d\u7684\u6587\u672c\n  console.log(result[1]); // \u8f93\u51fa "c"\uff0c\u6355\u83b7\u7ec4\u4e2d\u7684\u5339\u914d\n} else {\n  console.log("No match found");\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* \n\u6b63\u5219\u8868\u8fbe\u5f0f\"g\"\u6807\u8bc6\u4f7f\u7528\n\u6b63\u5219\u8868\u8fbe\u5f0f\u4f7f\u7528\"g\"\u6807\u8bc6\u65f6\uff0c\u5982\u679c\u8981\u67e5\u627e\u76ee\u6807\u5b57\u7b26\u4e32\u4e2d\u6240\u6709\u7684\u5339\u914d\uff0c\u9700\u8981\u591a\u6b21\u6267\u884cexec()\u65b9\u6cd5\uff0c\n\u6bcf\u6b21\u6267\u884c\u65f6\uff0c\u90fd\u662f\u4ece lastIndex\u5c5e\u6027\u6307\u5b9a\u7684\u4f4d\u7f6e\u5f00\u59cb\u5339\u914d\n* */\nlet str = 'hell word';\nlet pattern = /o/;\nconsole.log(pattern.exec(str));\n// [ 'o', index: 6, input: 'hell word', groups: undefined ]\n\nlet reg2 = /hello hu(\\w+)/;\nlet str2 = 'hello huxiao6, balabala, hello huDi, 724';\nlet result = reg2.exec(str2);\nconsole.log(result)\n/*\n[\n  'hello huxiao6',\n  'xiao6',\n  index: 0,\n  input: 'hello huxiao6, balabala, hello huDi, 724',\n  groups: undefined\n]\n* */\n")),(0,a.kt)("h3",{id:"exec\u4f8b\u5b50"},"exec\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/*\n* \u89c4\u5219\uff1a\u5bf9\u4e8e exec() \u65b9\u6cd5\n\u5728\u6a21\u5f0f\u4e2d\u8bbe\u7f6e\u4e86\u5168\u5c40\u6807\u5fd7\uff08 g \uff09\uff0c\u5b83\u6bcf\u6b21\u4e5f\u53ea\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5339\u914d\u9879\uff0c\u591a\u6b21\u8c03\u7528exec() \uff0c\u6bcf\u6b21\u8c03\u7528\u5219\u90fd\u4f1a\u5728\u5b57\u7b26\u4e32\u4e2d\u7ee7\u7eed\u67e5\u627e\u65b0\u5339\u914d\u9879\uff1b\n* */\nconst text = "cat, bat, sat, fat";\nconst pattern2 = /.at/g;\nlet matches = pattern2.exec(text);   // \u8fd4\u56de\u6570\u7ec4 ["cat", index: 0, input: "cat, bat, sat, fat", groups: undefined]\nconsole.log(matches.index);                // 0\nconsole.log(matches[0]);                   // cat\nconsole.log(pattern2.lastIndex);           // 3\n\nmatches = pattern2.exec(text);       // \u8fd4\u56de\u6570\u7ec4 ["bat", index: 5, input: "cat, bat, sat, fat", groups: undefined]\nconsole.log(matches.index);                // 5\nconsole.log(matches[0]);                   // bat\nconsole.log(pattern2.lastIndex);           // 8\n\nconsole.log(\'\u5206\u5272\u7ebf=====\u300bend\')\nconsole.log(\'\u5206\u5272\u7ebf=====\u300bend\')\n\n/*\n* \u5728\u4e0d\u8bbe\u7f6e\u5168\u5c40\u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u540c\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e0a\u591a\u6b21\u8c03\u7528 exec() \u5c06\u59cb\u7ec8\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u7684\u4fe1\u606f\u3002\n* */\nlet text2 = "cat, bat, sat, fat";\nlet pattern1 = /.at/;\nlet matches2 = pattern1.exec(text2);    // \u8fd4\u56de\u6570\u7ec4 ["cat", index: 0, input: "cat, bat, sat, fat", groups: undefined]\nconsole.log(matches2.index);                 // 0\nconsole.log(matches2[0]);                    // cat\nconsole.log(pattern1.lastIndex);            // 0\n\nmatches2 = pattern1.exec(text);\nconsole.log(matches2.index);                 // 0\nconsole.log(matches2[0]);                    // cat\nconsole.log(pattern1.lastIndex);            // 0\n')))}g.isMDXComponent=!0}}]);