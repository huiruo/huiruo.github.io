"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5949],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=m(t),p=o,b=s["".concat(c,".").concat(p)]||s[p]||l[p]||a;return t?r.createElement(b,i(i({ref:n},d),{},{components:t})):r.createElement(b,i({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u547d\u4ee4\u6a21\u5f0f",sidebar_position:9},i=void 0,u={unversionedId:"design-patterns/a-\u547d\u4ee4\u6a21\u5f0f",id:"design-patterns/a-\u547d\u4ee4\u6a21\u5f0f",title:"\u547d\u4ee4\u6a21\u5f0f",description:"",source:"@site/programming-tech/design-patterns/a-\u547d\u4ee4\u6a21\u5f0f.md",sourceDirName:"design-patterns",slug:"/design-patterns/a-\u547d\u4ee4\u6a21\u5f0f",permalink:"/design-patterns/a-\u547d\u4ee4\u6a21\u5f0f",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/design-patterns/a-\u547d\u4ee4\u6a21\u5f0f.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u547d\u4ee4\u6a21\u5f0f",sidebar_position:9},sidebar:"docs",previous:{title:"\u7b56\u7565\u6a21\u5f0f",permalink:"/design-patterns/a-\u7b56\u7565\u6a21\u5f0f"},next:{title:"\u6b63\u5219-\u57fa\u7840",permalink:"/regular-string/\u6b63\u5219-\u57fa\u7840"}},c={},m=[],d={toc:m},s="wrapper";function l(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n\n<body>\n\n  <button id="button1">\u70b9\u51fb\u6309\u94ae1</button>\n  <button id="button2">\u70b9\u51fb\u6309\u94ae2</button>\n  <button id="button3">\u70b9\u51fb\u6309\u94ae3</button>\n\n  <script>\n    var button1 = document.getElementById(\'button1\');\n    var button2 = document.getElementById(\'button2\');\n    var button3 = document.getElementById(\'button3\');\n\n    var setCommand = function (button, command) {\n      button.onclick = function () {\n        command.execute();\n      }\n    };\n\n    var MenuBar = {\n      refresh: function () {\n        console.log(\'\u5237\u65b0\u83dc\u5355\u76ee\u5f55\');\n      }\n    };\n    var SubMenu = {\n      add: function () {\n        console.log(\'\u589e\u52a0\u5b50\u83dc\u5355\');\n      },\n      del: function () {\n        console.log(\'\u5220\u9664\u5b50\u83dc\u5355\');\n      }\n    };\n    {/* \u5728\u8ba9button \u53d8\u5f97\u6709\u7528\u8d77\u6765\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u5148\u628a\u8fd9\u4e9b\u884c\u4e3a\u90fd\u5c01\u88c5\u5728\u547d\u4ee4\u7c7b\u4e2d\uff1a */ }\n    var RefreshMenuBarCommand = function (receiver) {\n      this.receiver = receiver;\n    };\n    RefreshMenuBarCommand.prototype.execute = function () {\n      this.receiver.refresh();\n    };\n    var AddSubMenuCommand = function (receiver) {\n      this.receiver = receiver;\n    };\n\n    AddSubMenuCommand.prototype.execute = function () {\n      this.receiver.add();\n    };\n    var DelSubMenuCommand = function (receiver) {\n      this.receiver = receiver;\n    };\n    DelSubMenuCommand.prototype.execute = function () {\n      console.log(\'\u5220\u9664\u5b50\u83dc\u5355\');\n    };\n\n    var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar);\n    var addSubMenuCommand = new AddSubMenuCommand(SubMenu);\n    var delSubMenuCommand = new DelSubMenuCommand(SubMenu);\n    setCommand(button1, refreshMenuBarCommand);\n    setCommand(button2, addSubMenuCommand);\n    setCommand(button3, delSubMenuCommand);\n  <\/script>\n</body>\n\n</html>\n')))}l.isMDXComponent=!0}}]);