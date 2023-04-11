"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3652],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=l.createContext({}),c=function(e){var n=l.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return l.createElement(m.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),s=r,h=p["".concat(m,".").concat(s)]||p[s]||u[s]||a;return t?l.createElement(h,o(o({ref:n},d),{},{components:t})):l.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},69754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=t(87462),r=(t(67294),t(3905));const a={title:"\u91cd\u8981\u7684html-dom\u5c5e\u6027",sidebar_position:3},o="DOM\u5bf9\u8c61\u7684\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5",i={unversionedId:"html-css/\u91cd\u8981\u7684html-dom\u5c5e\u6027",id:"html-css/\u91cd\u8981\u7684html-dom\u5c5e\u6027",title:"\u91cd\u8981\u7684html-dom\u5c5e\u6027",description:"createElement(Tag)\uff1a\u521b\u5efa\u4e00\u4e2a HTML \u6807\u7b7e\u5bf9\u8c61",source:"@site/programming-tech/html-css/00-\u91cd\u8981\u7684html-dom\u5c5e\u6027.md",sourceDirName:"html-css",slug:"/html-css/\u91cd\u8981\u7684html-dom\u5c5e\u6027",permalink:"/html-css/\u91cd\u8981\u7684html-dom\u5c5e\u6027",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/html-css/00-\u91cd\u8981\u7684html-dom\u5c5e\u6027.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u91cd\u8981\u7684html-dom\u5c5e\u6027",sidebar_position:3},sidebar:"docs",previous:{title:"html5\u5c5e\u6027",permalink:"/html-css/html5\u5c5e\u6027"},next:{title:"flex-direction-wrap",permalink:"/html-css/flex-direction-wrap"}},m={},c=[{value:"1. document\u5bf9\u8c61\u5c5e\u6027",id:"1-document\u5bf9\u8c61\u5c5e\u6027",level:2},{value:"2. document.location",id:"2-documentlocation",level:3},{value:"1.Element\u7684\u51e0\u4e2a\u5fc5\u8981\u91cd\u8981\u7684\u5c5e\u6027",id:"1element\u7684\u51e0\u4e2a\u5fc5\u8981\u91cd\u8981\u7684\u5c5e\u6027",level:2},{value:"2.\u521b\u5efa\u548c\u6dfb\u52a0\u5143\u7d20 Element",id:"2\u521b\u5efa\u548c\u6dfb\u52a0\u5143\u7d20-element",level:3},{value:"3.innerText \u548c innerHTML",id:"3innertext-\u548c-innerhtml",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dom\u5bf9\u8c61\u7684\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5"},"DOM\u5bf9\u8c61\u7684\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,"createElement(Tag)\uff1a\u521b\u5efa\u4e00\u4e2a HTML \u6807\u7b7e\u5bf9\u8c61\ngetElementById(ID)\uff1a\u83b7\u5f97\u6307\u5b9a id \u7684\u5bf9\u8c61\ngetElementsByName(Name)\uff1a\u83b7\u5f97\u4e4b\u524d Name \u7684\u5bf9\u8c61\nbody.appendChild(oTag)\uff1a\u5411 HTML \u4e2d\u63d2\u5165\u5143\u7d20\u5bf9\u8c61"),(0,r.kt)("h2",{id:"1-document\u5bf9\u8c61\u5c5e\u6027"},"1. document\u5bf9\u8c61\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.doctype // \u53ef\u4ee5\u77e5\u9053\u6587\u6863\u58f0\u660e\uff0c\u5982\u679c\u6ca1\u6709return null;\u8fd9\u91cc\u662f<!DOCTYPE html>\ndocument.doctype.name // \u77e5\u9053\u6587\u6863\u58f0\u660e\u7684\u540d\u5b57.\ndocument.head // \u5f88\u660e\u663e\u9009\u53d6head\u8282\u70b9.\u5c31\u662f<head></head>\u8fd9\u6bb5\ndocument.body // \u9009\u53d6body\u8282\u70b9.\n\ncookie \u8bbe\u7f6e\u6216\u8fd4\u56de\u4e0e\u5f53\u524d\u6587\u6863\u6709\u5173\u7684\u6240\u6709 cookie\u3002\ndomain \u8fd4\u56de\u5f53\u524d\u6587\u6863\u7684\u57df\u540d\u3002\nlastModified \u8fd4\u56de\u6587\u6863\u88ab\u6700\u540e\u4fee\u6539\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002\n")),(0,r.kt)("h3",{id:"2-documentlocation"},"2. document.location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'document.location.href // \u83b7\u53d6\u5f53\u524d\u5730\u5740\ndocument.location.assign(http://www.baidu.com) // \u5206\u914d\u4e00\u4e2a\u5730\u5740\n\n// \u53e6\u5916\u5982\u679chref\u662f\u83b7\u53d6\u5f53\u524d\u5730\u5740\uff0c\u5982\u679c\u7ed9\u4ed6\u8d4b\u503c\uff0c\u628a\u4e00\u4e2a\u5730\u5740\u7ed9\u4ed6\uff0c\u4e5f\u80fd\u8fbe\u5230assign\u7684\u6548\u679c\uff1b\n\ndocument.location="http://www.baidu.com"\n// \u6216\u8005\ndocument.location.href="http://www.baidu.com"\n')),(0,r.kt)("h2",{id:"1element\u7684\u51e0\u4e2a\u5fc5\u8981\u91cd\u8981\u7684\u5c5e\u6027"},"1.Element\u7684\u51e0\u4e2a\u5fc5\u8981\u91cd\u8981\u7684\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Z-one</title>\n</head>\n<body>\n    <p id="p1" class="p">\u6d4b\u8bd5</p>\n    <p id="p2" class="p">\u6d4b\u8bd5</p>\n    <p id="p3" class="p">\u6d4b\u8bd5</p>\n  <script>\n    var a=document.getElementById("p1") // \u83b7\u53d6\u4e0a\u9762\u90a3\u4e2a\u4f8b\u5b50\u7684p1\u5143\u7d20.\n    console.log(\'1:\',a.id)  // \u83b7\u53d6\u8be5\u5143\u7d20\u7684id... "p1" (\u8c8c\u4f3c\u5c31\u662f\u901a\u8fc7p1\u627e\u5230\u7684\u4ed6- -)\n    console.log(\'2:\',a.nodeName) // \u83b7\u53d6\u5230\u8282\u70b9\u7684\u540d\u5b57(\u5c31\u662f\u6807\u7b7e\u540d\u5b57) \u8fd9\u91cc\u662f"p"\n    console.log(\'3:\',a.className) // \u83b7\u53d6\u8282\u70b9\u7684class\u540d\u5b57\uff0c\u8fd9\u91cc\u56e0\u4e3a\u5173\u952e\u5b57\u7684\u539f\u56e0\uff0c\u53ea\u80fd\u7528className;\n\n    // \u53e6\u5916\u8fd8\u6709\u4e00\u4e9b\n    console.log(\'4:\',a.child) // \u83b7\u53d6\u5b50\u5143\u7d20  \u8fd9\u91cc\u6ca1\u6709\n    console.log(\'5:\',a.lastchild) // \u6700\u540e\u4e00\u4e2a\u5b50\u5143\u7d20.\n    console.log(\'6:\',a.firstchild) // \u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20.\n    console.log(\'7:\',a.nextSibling) // \u4e0b\u4e00\u4e2a\u5144\u5f1f\u5143\u7d20.\n    console.log(\'8:\',a.previousSibing) // \u4e0a\u4e00\u4e2a\u5144\u5f1f\u5143\u7d20.\n    /*\n    1: p1\n    2: P\n    3: p\n    4: undefined\n    5: undefined\n    6: undefined\n    7: #text\n    8: undefined\n    */\n<\/script>\n</body>\n</html>\n')),(0,r.kt)("h3",{id:"2\u521b\u5efa\u548c\u6dfb\u52a0\u5143\u7d20-element"},"2.\u521b\u5efa\u548c\u6dfb\u52a0\u5143\u7d20 Element"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"createElement"),(0,r.kt)("li",{parentName:"ul"},"appendChild"),(0,r.kt)("li",{parentName:"ul"},"append()"),(0,r.kt)("li",{parentName:"ul"},"innerHTML")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"append()\n\u53ef\u4ee5\u540c\u65f6\u4f20\u5165\u591a\u4e2a\u8282\u70b9\u6216\u5b57\u7b26\u4e32\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\uff1b\n\u636e\u8bf4 append \u8fd8\u662f\u8bd5\u7528\u671f\u7684\u65b9\u6cd5\uff0c\u6709\u517c\u5bb9\u95ee\u9898\uff0c\uff08\u4f46\u6211\u7528\u4e86\u6682\u65f6\u706b\u72d0\uff0c\u8c37\u6b4c\uff0ciE\u90fd\u80fd\u4f7f\u7528\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"appendChild() "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1.\u53ea\u80fd\u4f20\u4e00\u4e2a\u8282\u70b9\uff0c\u4e14\u4e0d\u76f4\u63a5\u652f\u6301\u4f20\u5b57\u7b26\u4e32\u3010\u9700\u8981 appendChild(document.createTextElement(\'\u5b57\u7b26\u4e32\'))\u4ee3\u66ff\u3011\n2.\u8fd4\u56de\u8ffd\u52a0\u7684 Node \u8282\u70b9\uff1b\n\n3.\u82e5 appendChild() \u7684\u53c2\u6570\u662f\u9875\u9762\u5b58\u5728\u7684\u4e00\u4e2a\u5143\u7d20\uff0c\u5219\u6267\u884c\u540e\u539f\u6765\u7684\u5143\u7d20\u4f1a\u88ab\u79fb\u9664\uff1b\n\u4f8b\u5982\uff1adocument.getElement("a").appendChild(document.getElementByIdx("b"))\uff0c\u6267\u884c\u540e\uff0cb \u5143\u7d20\u4f1a\u5148\u88ab\u79fb\u9664\uff0c\u7136\u540e\u518d\u6dfb\u52a0\u5230 a \u4e2d\u3002\n')),(0,r.kt)("p",null,"\u6027\u80fd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+ innerHTML \u6bd4 appendChild \u8981\u65b9\u4fbf\uff0c\u7279\u522b\u662f\u521b\u5efa\u7684\u8282\u70b9\u5c5e\u6027\u591a\uff0c\u540c\u65f6\u8fd8\u5305\u542b\u6587\u672c\u7684\u65f6\u5019\uff1b\n+ \u4f46\u6267\u884c\u901f\u5ea6\u7684\u6bd4\u8f83\u4e0a\uff0c\u4f7f\u7528 appendChild \u6bd4 innerHTML \u8981\u5feb\uff0c\u7279\u522b\u662f\u5185\u5bb9\u5305\u62ec html \u6807\u8bb0\u65f6\uff0cappendChild \u660e\u663e\u8981\u5feb\u4e8e  innerHTML\uff0c\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a innerHTML \u5728\u94fa\u5230\u9875\u9762\u4e4b\u524d\u8fd8\u8981\u5bf9\u5185\u5bb9\u8fdb\u884c\u89e3\u6790\u624d\u80fd\u94fa\u5230\u9875\u9762\u4e0a\uff0c\u5f53\u5305\u542b html \u6807\u8bb0\u8fc7\u591a\u65f6\uff0c innerHTML\u901f\u5ea6\u4f1a\u660e\u663e\u53d8\u6162\u3002\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>\u521b\u5efa\u5143\u7d20</title>\n</head>\n<script>\n    window.onload=function(){\n        var a=document.createElement("div");\n        a.className="p1"\n        a.innerHTML=("<span>\u6d4b\u8bd5\u4e0b</span>");\n        //\u6dfb\u52a0\u5230\u6587\u6863\u4e2d\n        document.body.appendChild(a);//\u8fd9\u4e0b\u5b50\u5143\u7d20\u5c31\u5199\u8fdb\u53bb\u4e86\n        //\u5982\u679c\u8fd8\u8981\u6dfb\u52a0 \u53ef\u4ee5\u7167\u7740\u4e0a\u9762\u6765\uff0c\u6211\u4eec\u73b0\u5728\u5c31\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u8fdb\u53bb\n        var b=document.createElement("div");\n        b.innerHTML="<p>\u6d4b\u8bd5\u7b2c\u4e8c\u5f39</p>";\n        //\u8fd9\u6b21\u6211\u4eec\u6dfb\u52a0\u5728\u4e0a\u4e00\u4e2a\u5143\u7d20\u524d\u9762\n        document.body.insertBefore(b,a);//\u628ab\u63d2\u5728a\u524d\u9762- -\n        //\u8fd9\u65f6\u5019\u4e0d\u60f3\u8981b\u4e86\uff0c\u60f3\u66ff\u6362\u6389\uff0c\u53ef\u4ee5\u8fd9\u4e48\u505a!\n        var c=document.createElement("div");\n        c.innerHTML="\u6211\u5c31\u662f\u6765\u66ff\u6362\u7684";\n        document.body.replaceChild(c,b);//\uff08new,old\uff09\n    }\n<\/script>\n<body>\n\n</body>\n</html>\n')),(0,r.kt)("h3",{id:"3innertext-\u548c-innerhtml"},"3.innerText \u548c innerHTML"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"innerHTML"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5143\u7d20\u7684\u5185\u5bb9\uff1aelement.innerHTML;"),(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u5143\u7d20\u8bbe\u7f6e\u5185\u5bb9\uff1aelement.innerHTML =htmlString;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"innerTEXT\n\u6253\u5370\u6807\u7b7e\u4e4b\u95f4\u7684\u7eaf\u6587\u672c\u4fe1\u606f\uff0c\u663e\u793a\u6807\u7b7e\uff0c\u6807\u7b7e\u65e0\u6548\uff0c\u4f4e\u7248\u672c\u7684\u706b\u72d0\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5143\u7d20\u7684\u5185\u5bb9\uff1aelement.innerText;"),(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u5143\u7d20\u8bbe\u7f6e\u5185\u5bb9\uff1aelement.innerText = string;")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n    <html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n</head>\n<body>\n    <p id="demo">my first demo</p>\n</body>\n<script>\n    document.getElementById("demo").innerHTML="<b>hello world</b>"\n    document.body.innerHTML="<b>hello world</b>"\n\n    document.getElementById("demo").innerText="<h1>My First JavaScript</h1>";\n    document.body.innerTEXT\n<\/script>\n</html>\n')))}u.isMDXComponent=!0}}]);