"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?l.createElement(k,r(r({ref:t},d),{},{components:n})):l.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const a={title:"\u5757\u7ea7\u5143\u7d20-css",sidebar_position:1},r=void 0,o={unversionedId:"html-css/css-1-\u5757\u7ea7\u5143\u7d20-css",id:"html-css/css-1-\u5757\u7ea7\u5143\u7d20-css",title:"\u5757\u7ea7\u5143\u7d20-css",description:"1.CSS \u76d2\u6a21\u578b",source:"@site/programming-tech/html-css/css-1-\u5757\u7ea7\u5143\u7d20-css.md",sourceDirName:"html-css",slug:"/html-css/css-1-\u5757\u7ea7\u5143\u7d20-css",permalink:"/html-css/css-1-\u5757\u7ea7\u5143\u7d20-css",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/html-css/css-1-\u5757\u7ea7\u5143\u7d20-css.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5757\u7ea7\u5143\u7d20-css",sidebar_position:1},sidebar:"docs",previous:{title:"requestAnimationFrame\u52a8\u753b",permalink:"/html-css/requestAnimationFrame/requestAnimationFrame\u52a8\u753b"},next:{title:"\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587BFC",permalink:"/html-css/css-2-\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587BFC"}},p={},s=[{value:"1.CSS \u76d2\u6a21\u578b",id:"1css-\u76d2\u6a21\u578b",level:2},{value:"margin\u548cpadding\u533a\u522b",id:"margin\u548cpadding\u533a\u522b",level:2},{value:"dom\u5143\u7d20\u7684\u9ad8\u5ea6",id:"dom\u5143\u7d20\u7684\u9ad8\u5ea6",level:3},{value:"box-sizing",id:"box-sizing",level:2},{value:"W3C\u7684\u6807\u51c6Box Model",id:"w3c\u7684\u6807\u51c6box-model",level:3},{value:"box-sizing:border-box",id:"box-sizingborder-box",level:3},{value:"\u5757\u7ea7\u5143\u7d20",id:"\u5757\u7ea7\u5143\u7d20",level:2},{value:"\u5143\u7d20\u4e92\u76f8\u8f6c\u5316",id:"\u5143\u7d20\u4e92\u76f8\u8f6c\u5316",level:3},{value:"css\u4f18\u5148\u7ea7",id:"css\u4f18\u5148\u7ea7",level:2},{value:"position\u5b9a\u4f4d\u4e0e\u8131\u79bb\u6587\u6863\u6d41",id:"position\u5b9a\u4f4d\u4e0e\u8131\u79bb\u6587\u6863\u6d41",level:2},{value:"absolute  ---&gt;\u8131\u79bb\u6587\u6863\u6d41",id:"absolute-----\u8131\u79bb\u6587\u6863\u6d41",level:3},{value:"relative --&gt;\u672a\u8131\u79bb\u6587\u6863\u6d41",id:"relative---\u672a\u8131\u79bb\u6587\u6863\u6d41",level:3},{value:"\u4e8c\u8005\u533a\u522b",id:"\u4e8c\u8005\u533a\u522b",level:3},{value:"\u54cd\u5e94\u5f0f",id:"\u54cd\u5e94\u5f0f",level:2},{value:"\u9690\u85cf\u5143\u7d20\u7684\u591a\u5c11\u79cd\u65b9\u5f0f",id:"\u9690\u85cf\u5143\u7d20\u7684\u591a\u5c11\u79cd\u65b9\u5f0f",level:2},{value:"\u603b\u7ed3\uff1a\u5dee\u5f02\u6027-\u52a8\u753b\u5c5e\u6027:",id:"\u603b\u7ed3\u5dee\u5f02\u6027-\u52a8\u753b\u5c5e\u6027",level:3},{value:"display:none",id:"displaynone",level:3},{value:"visibility:hidden",id:"visibilityhidden",level:3},{value:"opacity:0",id:"opacity0",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1css-\u76d2\u6a21\u578b"},"1.CSS \u76d2\u6a21\u578b"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(56916).Z,width:"224",height:"195"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Content(\u5185\u5bb9) - \u76d2\u5b50\u7684\u5185\u5bb9\uff0c\u663e\u793a\u6587\u672c\u548c\u56fe\u50cf\u3002\nPadding(\u5185\u8fb9\u8ddd) - \u6e05\u9664\u5185\u5bb9\u5468\u56f4\u7684\u533a\u57df\uff0c\u5185\u8fb9\u8ddd\u662f\u900f\u660e\u7684\u3002\nBorder(\u8fb9\u6846) - \u56f4\u7ed5\u5728\u5185\u8fb9\u8ddd\u548c\u5185\u5bb9\u5916\u7684\u8fb9\u6846\u3002\nMargin(\u5916\u8fb9\u8ddd) - \u6e05\u9664\u8fb9\u6846\u5916\u7684\u533a\u57df\uff0c\u5916\u8fb9\u8ddd\u662f\u900f\u660e\u7684\u3002\n")),(0,i.kt)("h2",{id:"margin\u548cpadding\u533a\u522b"},"margin\u548cpadding\u533a\u522b"),(0,i.kt)("p",null,"margin \u662f\u7528\u6765\u9694\u5f00\u5143\u7d20\u4e0e\u5143\u7d20\u7684\u95f4\u8ddd\uff1b"),(0,i.kt)("p",null,"padding \u662f\u7528\u6765\u9694\u5f00\u5143\u7d20\u4e0e\u5185\u5bb9\u7684\u95f4\u9694\uff0c\u8ba9\u5185\u5bb9\uff08\u6587\u5b57\uff09\u4e0e\uff08\u5305\u88f9\uff09\u5143\u7d20\u4e4b\u95f4\u6709\u4e00\u6bb5 \u547c\u5438\u8ddd\u79bb\u3002"),(0,i.kt)("h3",{id:"dom\u5143\u7d20\u7684\u9ad8\u5ea6"},"dom\u5143\u7d20\u7684\u9ad8\u5ea6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"offsetHeight\uff1a\u5143\u7d20\u7684\u5b8c\u6574\u9ad8\u5ea6:\u53ef\u89c1\u5185\u5bb9+\u8fb9\u6846+\u5185\u8fb9\u8ddd+\u6eda\u52a8\u6761\uff08\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff09\u7684\u9ad8\u5ea6\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"scrollHeight\uff1a\u5143\u7d20\u7684\u5185\u5bb9\u9ad8\u5ea6\uff0c\u5305\u62ec\u56e0\u4e3a\u6ea2\u51fa\u800c\u65e0\u6cd5\u770b\u5230\u7684\u90e8\u5206\uff0c\u4e0d\u5305\u62ec:\u8fb9\u6846+\u5185\u8fb9\u8ddd+\u5916\u8fb9\u8ddd\u6216\u6eda\u52a8\u6761\uff08\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff09\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"clientHeight\uff1a\u5143\u7d20\u7684\u5185\u90e8\u9ad8\u5ea6,\u5305\u62ec:\u53ef\u89c1\u5185\u5bb9+\u5185\u8fb9\u8ddd\uff0c\u4e0d\u5305\u62ec:\u8fb9\u6846+\u5916\u8fb9\u8ddd+\u6eda\u52a8\u6761\uff08\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff09\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"offsetHeight \u548c scrollHeight \u53ef\u4ee5\u770b\u505a\u662f\u5143\u7d20\u5b9e\u9645\u9ad8\u5ea6\u7684\u4e24\u4e2a\u65b9\u9762\uff0c\u5206\u522b\u8003\u8651\u4e86\u5185\u5bb9\u548c\u6ea2\u51fa\u7684\u60c5\u51b5\u3002\n\nclientHeight \u53ea\u8003\u8651\u4e86\u5143\u7d20\u5185\u90e8\u7684\u9ad8\u5ea6\u3002\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <title>index</title>\n  <style>\n    #app {\n      width: 50px;\n      height: 100px;\n      background: yellow;\n      margin: 20px;\n      padding: 10px;\n      border: 2px solid green;\n    }\n  </style>\n</head>\n\n<body>\n  <div id="app">hello world</div>\n  <script type="text/javascript">\n    var dom = document.getElementById(\'app\');\n    console.log(dom.offsetHeight); // 124\n    console.log(dom.clientHeight); // 120\n  <\/script>\n</body>\n\n</html>\n')),(0,i.kt)("h2",{id:"box-sizing"},"box-sizing"),(0,i.kt)("h3",{id:"w3c\u7684\u6807\u51c6box-model"},"W3C\u7684\u6807\u51c6Box Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"width(\u5bbd\u5ea6) + padding(\u5185\u8fb9\u8ddd) + border(\u8fb9\u6846) = \u5143\u7d20\u5b9e\u9645\u5bbd\u5ea6\nheight(\u9ad8\u5ea6) + padding(\u5185\u8fb9\u8ddd) + border(\u8fb9\u6846) = \u5143\u7d20\u5b9e\u9645\u9ad8\u5ea6\n")),(0,i.kt)("p",null,"\u8bed\u6cd5: box-sizing: content-box|border-box|inherit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u9ed8\u8ba4\u503c:    box-sizing: content-box;\n")),(0,i.kt)("h3",{id:"box-sizingborder-box"},"box-sizing:border-box"),(0,i.kt)("p",null,"border-box\uff1a\u6307\u5b9a\u76d2\u6a21\u578b\u4e3aIE\u6a21\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8bbe\u7f6e border\u3001padding \u4e0d\u4f1a\u5f71\u54cd\u5143\u7d20 width \u4e0e height \u7684\u5c3a\u5bf8\uff0c\u5373 border \u4e0e padding \u7531\u5143\u7d20\u5df2\u8bbe\u7a7a\u95f4\u8f6c\u53d8\u3002\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<style type="text/css">\n.box {\n  width: 200px;\n  height: 200px;\n  text-align: center;\n  border: 10px solid black;\n  padding: 15px;\n  box-sizing: border-box;\n}\n</style>\n\n\u6b64\u65f6\u7684\u884c\u9ad8\uff1aline-height = height - border*2 - padding*2 = 200px - 10px*2 - 15px*2 = 150px;\n\n\u3010\u56e0\u4e3a\u6b64\u65f6\uff0c\u5185\u5bb9\u7684\u5176\u4f59\u7a7a\u95f4\u88ab\u8fb9\u6846\u548c\u586b\u5145\u5360\u7528\uff0c\u6240\u4ee5\u662f\u5143\u7d20\u7684\u9ad8\u51cf\u53bb\u8fb9\u6846\u548c\u586b\u5145\u7684\u7a7a\u95f4\uff0c\u5269\u4f59\u5373\u4e3a\u5185\u5bb9\u7a7a\u95f4\u3011\n')),(0,i.kt)("h2",{id:"\u5757\u7ea7\u5143\u7d20"},"\u5757\u7ea7\u5143\u7d20"),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u5757\u7ea7\u5143\u7d20\u6709\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<h1>~<h6>,<p>,<div>,<ul>,<ol>,<li>\n\ndiv/p/<h1>~<h6>/form/table/hr/ul/ol/li\naddress/blockquote/center/dir/dl/menu/pre\n")),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u884c\u5185\u5143\u7d20\u6709\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"span/a/img/input/em/strong/font/br/select/textarea/i/label/\nabbr/acronym/b/big/cite/code/kbd/q/s/small/strike/sub/sup/tt/u\n")),(0,i.kt)("h3",{id:"\u5143\u7d20\u4e92\u76f8\u8f6c\u5316"},"\u5143\u7d20\u4e92\u76f8\u8f6c\u5316"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u884c\u5185\u6807\u7b7e\uff1a\u5757\u7ea7\u6807\u7b7e\u8f6c\u6362\u4e3a\u884c\u5185\u6807\u7b7e\uff1adisplay:inline;")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2.\u5bbd\u9ad8:\n\u884c\u5185\u5143\u7d20\u4e0d\u53ef\u4ee5\u8bbe\u7f6e\u5bbd\u9ad8,\u5bbd\u5ea6\u9ad8\u5ea6\u968f\u6587\u672c\u5185\u5bb9\u7684\u53d8\u5316\u800c\u53d8\u5316,\u4f46\u662f\u53ef\u4ee5\u8bbe\u7f6e\u884c\u9ad8;\n\u5757\u7ea7\u53ef\u8bbe\u7f6e\u9ad8\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"2.\u884c\u5185\u5143\u7d20\u7684display\u5c5e\u6027\u9ed8\u8ba4\u4e3ainline ")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5757\u7ea7\u5143\u7d20\uff1a\u884c\u5185\u6807\u7b7e\u8f6c\u6362\u4e3a\u5757\u7ea7\u6807\u7b7e\uff1adisplay:block;",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1.\u6392\u5217:\n\u884c\u5185\u5143\u7d20\u548c\u5176\u4ed6\u884c\u5185\u5143\u7d20\u90fd\u4f1a\u5728\u4e00\u6761\u6c34\u5e73\u7ebf\u4e0a\u6392\u5217,\u90fd\u662f\u5728\u540c\u4e00\u884c\u7684;\n\u5757\u7ea7\u5143\u7d20\u5374\u603b\u662f\u4f1a\u5728\u65b0\u7684\u4e00\u884c."),(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u5305\u542b\uff1a\n\u5757\u7ea7\u5143\u7d20\u53ef\u4ee5\u5305\u542b\u884c\u5185\u5143\u7d20\u548c\u5757\u7ea7\u5143\u7d20,\u8fd8\u53ef\u4ee5\u5bb9\u7eb3\u5185\u8054\u5143\u7d20\u548c\u5176\u4ed6\u5143\u7d20;\n\u884c\u5185\u5143\u7d20\u4e0d\u80fd\u5305\u542b\u5757\u7ea7"))),(0,i.kt)("li",{parentName:"ol"},"\u8f6c\u6362\u4e3a\u884c\u5185\u5757\u6807\u7b7e\uff1adisplay\uff1ainline-block;\n\u5f53\u5143\u7d20\u6d6e\u52a8\u65f6\uff0c\u65e0\u8bba\u662f\u884c\u5185\u5143\u7d20\u8fd8\u662f\u5757\u5143\u7d20\uff0c\u72b6\u6001\u90fd\u7c7b\u4f3c\u4e8edisplay:inline-block\uff0c\u65e2\u5bbd\u9ad8\u53ef\u8bbe\u7f6e\uff0c\u5185\u5916\u8fb9\u8ddd\u53ef\u8bbe\u7f6e\uff0c\u4e0d\u4f1a\u72ec\u5360\u4e00\u884c\u3002\u9ed8\u8ba4\u72b6\u6001\u4e0b\u5bbd\u9ad8\u7531\u5143\u7d20\u5185\u5bb9\u51b3\u5b9a\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"inline-block\u5143\u7d20\u7684\u5bbd\u5ea6\u59cb\u7ec8\u7b49\u4e8e\u5176\u5185\u5bb9\u5bbd\u5ea6.\n\u5b83\u5177\u6709\u5757\u7ea7\u5143\u7d20\u7684\u7279\u70b9\uff0c\u4e5f\u6709\u884c\u5185\u5143\u7d20\u7684\u884c\u4e3a.\n\n\u4ece\u5757\u7ea7\u5143\u7d20\u89d2\u5ea6\u6765\u8bf4\uff0c\u53ef\u4ee5\u4e3a\u4ed6\u8bbe\u5b9a\u5916\u8fb9\u8ddd\u548c\u5185\u8fb9\u8ddd\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b83\u7b80\u4fbf\u800c\u6709\u6548\u7684\u5305\u56f4\u5176\u4ed6\u5757\u7ea7\u5143\u7d20.\n\n\u4ece\u884c\u5185\u5143\u7d20\u89d2\u5ea6\u770b\uff0c\u4ed6\u4f1a\u6536\u7f29\u5305\u88f9\u81ea\u5df1\u7684\u5185\u5bb9\uff0c\u800c\u4e0d\u662f\u6269\u5c55\u586b\u5145\u7236\u5143\u7d20.\n\n\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u4e3a\u8981\u5c45\u4e2d\u5143\u7d20\u7684\u7236\u5143\u7d20\u5e94\u7528text-align:center\uff0c\u4e3a\u8981\u5c45\u4e2d\u7684\u5143\u7d20\u8bbe\u5b9adisplay:inline-block.\u8fd9\u6837\u8bbe\u5b9a\u5c31\u53ef\u4ee5\u5f97\u5230\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c:\u6ca1\u6709\u5bbd\u5ea6\u7684\u5143\u7d20\u4e5f\u80fd\u5728\u5176\u7236\u5143\u7d20\u5185\u5c45\u4e2d.\n\n.title img{\n    display: inline-block;\n    vertical-align: middle;\n}\n")),(0,i.kt)("h2",{id:"css\u4f18\u5148\u7ea7"},"css\u4f18\u5148\u7ea7"),(0,i.kt)("p",null,"\u6bd4\u8f83\u89c4\u5219"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"1000 > 0100\uff0c\u4ece\u5de6\u5411\u53f3\u9010\u4e2a\u6bd4\u8f83\uff0c\u524d\u4e00\u7ea7\u76f8\u7b49\u624d\u80fd\u5f80\u540e\u6bd4\u8f83"),(0,i.kt)("li",{parentName:"ol"},"\u65e0\u8bba\u662f\u884c\u5185\u6837\u5f0f\u3001\u5185\u90e8\u6837\u5f0f\u8fd8\u662f\u5916\u90e8\u6837\u5f0f\uff0c\u90fd\u662f\u6309\u7167\u4ee5\u4e0a\u63d0\u5230\u7684\u6743\u91cd\u65b9\u5f0f\u8fdb\u884c\u6bd4\u8f83\uff0c\u9762\u8bd5\u7684\u65f6\u5019\u9047\u5230\u4f18\u5148\u7ea7\u6bd4\u8f83\uff0c\u7b54\u6848\u5f80\u5f80\u662f\uff1a\u884c\u5185>id>class>\u5143\u7d20(\u6807\u7b7e)\uff0c\u6211\u4eec\u4ee5\u4e3a\u7ed9\u4e86\u80fd\u4ee4\u9762\u8bd5\u5b98\u6ee1\u610f\u7684\u7b54\u6848\uff0c\u5176\u5b9e\u4e0d\u7136\uff0c\u6bd4\u5982\u5bf9\u540c\u4e00\u4e2a\u5143\u7d20\u64cd\u4f5c\uff0c\u5728\u6743\u91cd\u76f8\u7b49\u7684\u60c5\u51b5\u4e0b\uff0c\u540e\u9762\u7684\u6837\u5f0f\u4f1a\u8986\u76d6\u524d\u9762\u7684\uff0c\u8fd9\u6837\u6211\u4eec\u7ed9\u51fa\u6765\u7684\u7b54\u6848\u5c31\u4e0d\u6210\u7acb\u4e86"),(0,i.kt)("li",{parentName:"ol"},"\u6743\u91cd\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u4f4d\u4e8e\u540e\u9762\u7684\u6837\u5f0f\u4f1a\u8986\u76d6\u524d\u9762\u7684\u6837\u5f0f"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u914d\u7b26\u3001\u5b50\u9009\u62e9\u5668\u3001\u5144\u5f1f\u9009\u62e9\u5668\uff0c\u867d\u7136\u6743\u91cd\u4e3a0000\uff0c\u4f46\u662f\u4f18\u5148\u4e8e\u7ee7\u627f\u7684\u6837\u5f0f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4f18\u5148\u7ea7\uff1a!important"),(0,i.kt)("li",{parentName:"ul"},'1.\u5185\u8054\u6837\u5f0f\uff0c\u5982style="color: green"\uff0c\u6743\u503c\u4e3a1000'),(0,i.kt)("li",{parentName:"ul"},"2.ID\u9009\u62e9\u5668\uff0c\u5982#app\uff0c\u6743\u503c\u4e3a0100"),(0,i.kt)("li",{parentName:"ul"},"3.\u7c7b\u3001\u4f2a\u7c7b\u3001\u5c5e\u6027\u9009\u62e9\u5668\uff0c\u5982.foo, :first-child, div",'[class="foo"]',"\uff0c\u6743\u503c\u4e3a0010"),(0,i.kt)("li",{parentName:"ul"},"4.\u6807\u7b7e\u3001\u4f2a\u5143\u7d20\u9009\u62e9\u5668\uff0c\u5982div::first-line\uff0c\u6743\u503c\u4e3a0001"),(0,i.kt)("li",{parentName:"ul"},"5.\u901a\u914d\u7b26\u3001\u5b50\u7c7b\u9009\u62e9\u5668\u3001\u5144\u5f1f\u9009\u62e9\u5668\uff0c\u5982*, >, +\uff0c\u6743\u503c\u4e3a0000"),(0,i.kt)("li",{parentName:"ul"},"6.\u7ee7\u627f\u7684\u6837\u5f0f\u6ca1\u6709\u6743\u503c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#index{}  id\n.date-post{} \u7c7b\n#nav > li{} \u5b50\u9009\u62e9\u7b26\np{} \u6807\u7b7e\n")),(0,i.kt)("p",null,"\u901a\u914d\u7b26"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'*[lang^=en]{color:green;}\n*.warning {color:red;}\n*#maincontent {border: 1px solid blue;}\n\n<p class="warning">\n  <span lang="en-us">A green span</span> in a red paragraph.\n</p>\n<p id="maincontent" lang="en-gb">\n  <span class="warning">A red span</span> in a green paragraph.\n</p>\n')),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"position\u5b9a\u4f4d\u4e0e\u8131\u79bb\u6587\u6863\u6d41"},"position\u5b9a\u4f4d\u4e0e\u8131\u79bb\u6587\u6863\u6d41"),(0,i.kt)("h3",{id:"absolute-----\u8131\u79bb\u6587\u6863\u6d41"},"absolute  ---\x3e\u8131\u79bb\u6587\u6863\u6d41"),(0,i.kt)("p",null,'\u751f\u6210\u7edd\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\uff0c\u76f8\u5bf9\u4e8e static \u5b9a\u4f4d\u4ee5\u5916\u7684\u7b2c\u4e00\u4e2a\u7236\u5143\u7d20\u8fdb\u884c\u5b9a\u4f4d\u3002\n\u5143\u7d20\u7684\u4f4d\u7f6e\u901a\u8fc7 "left", "top", "right" \u4ee5\u53ca "bottom" \u5c5e\u6027\u8fdb\u884c\u89c4\u5b9a\u3002\n\u5f53\u7236\u7ea7 position \u4e3a static \u65f6\uff0cabsolute\u5143\u7d20\u5c06\u4ee5body\u5750\u6807\u539f\u70b9\u8fdb\u884c\u5b9a\u4f4d\uff0c\u53ef\u4ee5\u901a\u8fc7z-index\u8fdb\u884c\u5c42\u6b21\u5206\u7ea7\u3002'),(0,i.kt)("h3",{id:"relative---\u672a\u8131\u79bb\u6587\u6863\u6d41"},"relative --\x3e\u672a\u8131\u79bb\u6587\u6863\u6d41"),(0,i.kt)("p",null,'\u751f\u6210\u76f8\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\uff0c\u76f8\u5bf9\u4e8e\u5176\u6b63\u5e38\u4f4d\u7f6e\u8fdb\u884c\u5b9a\u4f4d\u3002\n\u56e0\u6b64\uff0c"left:20" \u4f1a\u5411\u5143\u7d20\u7684 LEFT \u4f4d\u7f6e\u6dfb\u52a0 20 \u50cf\u7d20\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8be5\u5143\u7d20\u4ecd\u7136\u4f1a\u5728\u539f\u6765\u7684\u5730\u65b9\u3002\ntop\nright\nbottom\nleft\n\n\u51b3\u5b9a\u5e73\u79fb\u4e00\u5b9a\u8ddd\u79bb\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"static:\u9ed8\u8ba4\u503c\u3002\u6ca1\u6709\u5b9a\u4f4d\uff0c\u5143\u7d20\u51fa\u73b0\u5728\u6b63\u5e38\u7684\u6d41\u4e2d\uff08\u5ffd\u7565 top, bottom, left, right \u6216\u8005 z-index \u58f0\u660e\uff09\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"inherit:\u89c4\u5b9a\u5e94\u8be5\u4ece\u7236\u5143\u7d20\u7ee7\u627f position \u5c5e\u6027\u7684\u503c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'fixed:\u751f\u6210\u7edd\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\uff0c\u76f8\u5bf9\u4e8e\u6d4f\u89c8\u5668\u7a97\u53e3\u8fdb\u884c\u5b9a\u4f4d\u3002\n\u5143\u7d20\u7684\u4f4d\u7f6e\u901a\u8fc7 "left", "top", "right" \u4ee5\u53ca "bottom" \u5c5e\u6027\u8fdb\u884c\u89c4\u5b9a\u3002'))),(0,i.kt)("h3",{id:"\u4e8c\u8005\u533a\u522b"},"\u4e8c\u8005\u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"relative \u4e0d\u8131\u79bb\u6587\u6863\u6d41\uff0c,\u53c2\u7167\u81ea\u5df1\u672c\u8eab\nabsolute \u8131\u79bb\u4e86\u6587\u6863\u6d41\uff0c\u5176\u5728\u6587\u6863\u6d41\u4e2d\u7684\u4f4d\u7f6e\u4e5f\u4e0d\u5b58\u5728")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"relative\u5b9a\u4f4d\u53c2\u8003\u81ea\u8eab\u9759\u6001\u4f4d\u7f6e\u901a\u8fc7 top,bottom,left,right \u5b9a\u4f4d\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7z-index\u8fdb\u884c\u5c42\u6b21\u5206\u7ea7\u3002\n")),(0,i.kt)("p",null,"absolute\u5143\u7d20:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u89c4\u5219\uff1a\u6839\u636edisplay:static \u4e4b\u5916\u4efb\u610f\u503c\u7684\u7236\u7ea7\u5143\u7d20\u3002\u5982\u679c\u6ca1\u6709\u8fd9\u4e48\u4e00\u4e2a\u5b9a\u4f4d\u7956\u5148\u3002\u90a3\u4e48\u5c31\u76f8\u5bf9\u4e8e\u6587\u6863\u7684\u6839\u5143\u7d20\u5b9a\u4f4d\u3002\n")),(0,i.kt)("h2",{id:"\u54cd\u5e94\u5f0f"},"\u54cd\u5e94\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@media (max-width: 1366px) {\n  .room-item {\n    width: calc((100% - 56px) / 4);\n  }\n}\n")),(0,i.kt)("h2",{id:"\u9690\u85cf\u5143\u7d20\u7684\u591a\u5c11\u79cd\u65b9\u5f0f"},"\u9690\u85cf\u5143\u7d20\u7684\u591a\u5c11\u79cd\u65b9\u5f0f"),(0,i.kt)("h3",{id:"\u603b\u7ed3\u5dee\u5f02\u6027-\u52a8\u753b\u5c5e\u6027"},"\u603b\u7ed3\uff1a\u5dee\u5f02\u6027-\u52a8\u753b\u5c5e\u6027:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display:none;\u7684\u5143\u7d20\u4f1a\u76f4\u63a5\u4ece\u9875\u9762\u6d88\u5931\uff0c\u56e0\u6b64\u5b9a\u4e49transition\u6548\u679c\u5b8c\u5168\u65e0\u6548\u3002"),(0,i.kt)("li",{parentName:"ul"},"visibility:hidden;\u7684\u5143\u7d20\u4f1a\u5728transition\u8bbe\u7f6e\u7684\u65f6\u95f4\u5185\u6d88\u5931\uff0c\u4f46\u662f\u6ca1\u6709\u52a8\u753b\u6548\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},"opacity:0;\u7684\u5143\u7d20\u53ef\u4ee5\u548c\u6b63\u5e38\u5143\u7d20\u4e00\u6837\uff0c\u4ece\u9875\u9762\u4ee5\u52a8\u753b\u6548\u679c\u6d88\u5931\u3002")),(0,i.kt)("h3",{id:"displaynone"},"display:none"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u4e3adisplay:none;\u7684\u5143\u7d20\u5c06\u4e0d\u4f1a\u518d\u5360\u7528\u9875\u9762\u7a7a\u95f4\uff0c\u5176\u5360\u7528\u7684\u7a7a\u95f4\u4f1a\u88ab\u5176\u4ed6\u5143\u7d20\u6240\u5360\u6709\uff0c\u4ece\u800c\u4f1a\u5f15\u8d77\u6d4f\u89c8\u5668\u7684\u91cd\u6392\u548c\u91cd\u7ed8\u3002"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u7ed1\u5b9a\uff1a\u8be5\u7d20\u4f1a\u76f4\u63a5\u4ece\u9875\u9762\u4e0a\u6d88\u5931\uff0c\u56e0\u6b64\u5728\u8be5\u5143\u7d20\u4e0a\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u4e0d\u4f1a\u751f\u6548"),(0,i.kt)("h3",{id:"visibilityhidden"},"visibility:hidden"),(0,i.kt)("p",null,"[\u02ccv\u026az\u0259\u02c8b\u026al\u0259ti]"),(0,i.kt)("p",null,"\u8fd9\u79cd\u505a\u6cd5\u867d\u7136\u80fd\u591f\u9690\u85cf\u5143\u7d20\uff0c\u4f46\u662f\u8be5\u5143\u7d20\u4ecd\u4f1a\u5360\u7528\u9875\u9762\u7a7a\u95f4\uff0c\u56e0\u6b64\u53ea\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u7684\u91cd\u7ed8\u800c\u4e0d\u4f1a\u5f15\u8d77\u91cd\u6392\u3002\n\u4e8b\u4ef6\u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u4e0e opacity \u552f\u4e00\u4e0d\u540c\u7684\u662f\u5b83\u4e0d\u4f1a\u54cd\u5e94\u4efb\u4f55\u7528\u6237\u4ea4\u4e92\u3002"),(0,i.kt)("h3",{id:"opacity0"},"opacity:0"),(0,i.kt)("p",null,"[\u0259\u028a\u02c8p\xe6s\u0259ti]"),(0,i.kt)("p",null,"\u548cvisibility:hidden\u4e00\u6837\uff0c\u8bbe\u7f6e\u540e\u8be5\u5143\u7d20\u4ecd\u4f1a\u5360\u7528\u9875\u9762\u7a7a\u95f4\uff0c\u56e0\u6b64\u53ea\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u7684\u91cd\u7ed8\u800c\u4e0d\u4f1a\u5f15\u8d77\u91cd\u6392\u3002\n\u4e8b\u4ef6\u7ed1\u5b9a\uff1a\n\u5143\u7d20\u4f1a\u89e6\u53d1\u7ed1\u5b9a\u7684\u4e8b\u4ef6\uff0c\u4f8b\u5982\u70b9\u51fb\u4f1a\u89e6\u53d1click\u51fd\u6570\u3002"))}u.isMDXComponent=!0},56916:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADDBAMAAABpOwBKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURSAhI62AUuPDgbfEf4eyvAAAAEdDN2xYPH91T5Z6Uaqob2B7gXuhqVIGw8AAAAU7SURBVHja7ZzNU+JIFMCfX4DIwT4MkBuVLdeSk1WpUZaThy4vycEpNzqzJ6I4MugBtBxdTzrUoO4JhhrXI4W1Wx49pLzMhQPl37UvHR1XByIE0jjaD9PFV+dn9/slnUAHABEiRPQ/RnSiv/mqS/qbzwtRfWBnIYLFUkQ31pbCWCyH9fzI8rhdHI68e6WXdSxu63y9q4OFscPqYJFfu6vz9nudBQYk/KI/wAGOwPG+AJ9/Dl+kNKXyE5MmDAbWLfPL4RlZJxlpwD1QWoe/8R8GP8n4CATyp2QU2+AUR5JBMu6lkfyRQMSIlkvlFAkfjiPQR0Yda+5G82TXZQ5xzZJh3TA35XVySqJWC51XFzXcAUu3XWoDU1DOkKN2gLvEHXDhHjB8GEZgkUQeBYYPsQr50DUQc5gh4yyHzsAjXDKS0YU0DBiF9wiUbEsdgTkATEfZvTT3I5L3bNdWarrhe7Zja76nGYdRMTx1OVqMcgSW+n+I8Ur3IpyAsgcx4SCNx8AfpfEYWOpLl3IHAkcg9EWaAEfgQbMcTn3633svOEhzDxjlII2XLWwqzdQx1OQS1CarWzE4k2NQi1W/eCnNVFAejK/EBycH5awckLPxwdiWt9JsyX9N1nD5El+RL+Jb8n6s5rU0J7/K8slkLf4JgQDBWJOVTOFOuHfS7LMW1rB1Z7jIMY+lGYzbOazJQcxhsJdAJo3/IbAIMloqI7AKF2jpSu+AOTE8PY/hyc8R+KKlmdAV/Y9p/Xzk3YxeWHs7q2/vLCf01c9Lv+lD/ywk9cXXj7+hI2kmlK7jdUfSeAN0kOaX7oFKR9J4CASOXSqk6Zs0iYqizJwX+UljAzlK0zPgI9IEYVXJ+ZUkZCoJKJ4fJz9AQTkIZD2TxqccJwszlep5tXKqHCAwkBxKriaCnkkTVP7F7iwcY5f+iV16nFxVsrMVJeuZNEGlqhxA4QSB2VsgppIBE3hS0nNpsIWJgtXC2cq+Mv0dGPRMmoCylyhMF6wcFlkOEZhoP4edSxOAQhIChQTsVWaZpQhUcoGsh9I0jaEugT6HHDaLxLb7Lk09Jk0THPjF8PTkjml8j3Rpp583L7qXxo7faWex2K00vQS2JY1roFtpeg70cezS/kjDvYVCGm+kyVmHUu9bAVNgqjCMK0uNURXS9NJnr7sODQ3G8M7lzfO4tClNPmIQydcKuEmpSq+wMOcaV3RDG1ZNBjTxXqPeoGp63qzTb3jrQBqDhD+2yuGmtaJrSucaqrlBr1UEaSEtRNkr8w38U9PfaP0B0FmaqEH2iq2A4LOB19iWTVrH9oVoHVtGtWH2/HxDQ+BcIwXtS1MqR41iS2kQYTXommoMOKyG2GM6b9IUpg27NH1JL62+bVcabGCJ3AAnAYI2EHfu5wyopa0U3gLRkWHWQga1WpoaS6twaXfxolIF2GbAOI5FNvDmAP9Oml02dBitWqilmSY3ObQeW1lk/wRlr1jF9S2wHWnYzJFWOdTMedNa28aNpRaZWWr1Jp0zkVvHRyFq3utSJ2kk9s1sSyBua3WAxoa9HZoahOztEGBMxdeurI0Ut0ma8onhSQxPngC5HyYOcDzybkuaXp49pV7G2RP3E1LunwgLaYQ0HUvD/YsSIc1LlaaLz7yFNGJPI6QR0ng/+eP5z6fhPkWJ+yQs7tPMhDRCGiHND0Duc/V/EmncTbsW0rxoacSexgHI/VIy7tL0OYe8L3jkcUkn94tWuV+WK375Q0gjpBHSCGlYSA++I3va0nDPoZDm5wcKaZ6BNLx/5E+EiA7jPzkst5LFAzW6AAAAAElFTkSuQmCC"}}]);