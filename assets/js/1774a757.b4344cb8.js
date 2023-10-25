"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1886],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),k=i(o),S=n,u=k["".concat(p,".").concat(S)]||k[S]||d[S]||s;return o?r.createElement(u,a(a({ref:t},l),{},{components:o})):r.createElement(u,a({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=S;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[k]="string"==typeof e?e:n,a[1]=c;for(var i=2;i<s;i++)a[i]=o[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}S.displayName="MDXCreateElement"},11568:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=o(87462),n=(o(67294),o(3905));const s={title:"shadowsocks",sidebar_position:6},a=void 0,c={unversionedId:"http-browserCache/WebSocket-Socks5-shadowsocks/shadowsocks",id:"http-browserCache/WebSocket-Socks5-shadowsocks/shadowsocks",title:"shadowsocks",description:"test 1",source:"@site/programming-tech/http-browserCache/WebSocket-Socks5-shadowsocks/03-shadowsocks.md",sourceDirName:"http-browserCache/WebSocket-Socks5-shadowsocks",slug:"/http-browserCache/WebSocket-Socks5-shadowsocks/shadowsocks",permalink:"/http-browserCache/WebSocket-Socks5-shadowsocks/shadowsocks",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/http-browserCache/WebSocket-Socks5-shadowsocks/03-shadowsocks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"shadowsocks",sidebar_position:6},sidebar:"docs",previous:{title:"HTTP-Socket\u533a\u522b",permalink:"/http-browserCache/WebSocket-Socks5-shadowsocks/00-2-HTTP-Socket\u533a\u522b"},next:{title:"Socks5",permalink:"/http-browserCache/WebSocket-Socks5-shadowsocks/Socks5"}},p={},i=[{value:"test 1",id:"test-1",level:2},{value:"SS\u5b89\u5168\u6027\u4e0e\u52a0\u5bc6",id:"ss\u5b89\u5168\u6027\u4e0e\u52a0\u5bc6",level:2},{value:"Shadowsocks\u6570\u636e\u5305\u5206\u6790",id:"shadowsocks\u6570\u636e\u5305\u5206\u6790",level:2},{value:"SS\u56de\u590d\u6570\u636e\u5305",id:"ss\u56de\u590d\u6570\u636e\u5305",level:2},{value:"SS\u6539\u8fdb",id:"ss\u6539\u8fdb",level:2}],l={toc:i},k="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(k,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"test-1"},"test 1"),(0,n.kt)("p",null,"SS\u5168\u79f0\u662fShadowsocks\uff0c\u662f\u4e00\u79cd\u57fa\u4e8eSocks5\u4ee3\u7406\u65b9\u5f0f\u7684\u52a0\u5bc6\u4f20\u8f93\u534f\u8bae\u3002\n\u7279\u70b9:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1.Shadowsocks\u4f7f\u7528\u81ea\u884c\u8bbe\u8ba1\u7684\u534f\u8bae\u8fdb\u884c\u52a0\u5bc6\u901a\u4fe1\u3002\u52a0\u5bc6\u7b97\u6cd5\u6709AES\u3001Blowfish\u3001IDEA\u3001RC4\u7b49\uff0c\u9664\u521b\u5efaTCP\u8fde\u63a5\u5916\u65e0\u9700\u63e1\u624b\uff0c\u6bcf\u6b21\u8bf7\u6c42\u53ea\u8f6c\u53d1\u4e00\u4e2a\u8fde\u63a5\uff0c\u65e0\u9700\u4fdd\u6301\u201c\u4e00\u76f4\u8fde\u7ebf\u201d\u7684\u72b6\u6001\uff0c\u56e0\u6b64\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u76f8\u5bf9\u8f83\u4e3a\u7701\u7535\u3002\n\n2.\u6240\u6709\u7684\u6d41\u91cf\u90fd\u7ecf\u8fc7\u7b97\u6cd5\u52a0\u5bc6\uff0c\u5141\u8bb8\u81ea\u884c\u9009\u62e9\u7b97\u6cd5\u3002\n\n3.Shadowsocks\u901a\u8fc7\u5f02\u6b65I/O\u548c\u4e8b\u4ef6\u9a71\u52a8\u7a0b\u5e8f\u8fd0\u884c\uff0c\u54cd\u5e94\u901f\u5ea6\u5feb\u3002\n")),(0,n.kt)("p",null,"Shadowsocks\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7aef\u3002 \u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5c06\u670d\u52a1\u5668\u7aef\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u9762\uff0c\u7136\u540e\u901a\u8fc7\u5ba2\u6237\u7aef\u8fde\u63a5\u5e76\u521b\u5efa\u672c\u5730\u4ee3\u7406\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u5ba2\u6237\u7aef\u542f\u52a8\u540e\u4f1a\u5f00\u542f\u4e00\u4e2a\u672c\u5730\u4ee3\u7406\uff08\u4e00\u822c\u7528HTTP Proxy\uff09\uff0c\u901a\u8fc7\u4fee\u6539\u64cd\u4f5c\u7cfb\u7edf\u914d\u7f6e\u6216\u8005\u6d4f\u89c8\u5668\u914d\u7f6e\u628a\u8bbf\u95ee\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u672c\u5730\u4ee3\u7406\u3002\n\n\u5f53\u6211\u4eec\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u67d0\u4e2a\u5730\u5740\u7684\u65f6\u5019:\n    \u7b2c\u4e00\u6b65\uff1a\u6570\u636e\u4f1a\u88ab\u8f6c\u53d1\u5230\u672c\u5730\u4ee3\u7406.\n    \u7b2c\u4e8c\u6b65\uff1a\u7531\u672c\u5730\u4ee3\u7406\u52a0\u5bc6\u540e\u8f6c\u53d1\u5230\u670d\u52a1\u5668\u7aef.\n    \u7b2c\u4e09\u90e8\uff1a\u670d\u52a1\u5668\u7aef\u5904\u7406\u5b8c\u8bf7\u6c42\u540e\u628a\u6570\u636e\u52a0\u5bc6\u540e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u672c\u5730\u4ee3\u7406.\n    \u7b2c\u56db\u6b65\uff1a\u672c\u5730\u4ee3\u7406\u518d\u6b21\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u3002\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1. SS\u534f\u8bae\u548cHttp Proxy\u3001Socks5\u6ca1\u6709\u5173\u7cfb\uff0cHttp Proxy\u3001Socks5\u8fd9\u4e24\u4e2a\u534f\u8bae\u662f\u6d4f\u89c8\u5668\u6216\u8005\u64cd\u4f5c\u7cfb\u7edf\u6240\u652f\u6301\u7684\u6807\u51c6\u4ee3\u7406\u534f\u8bae\uff0cSS\u7684\u67b6\u6784\u4e2d\u53ea\u662f\u7528\u8fd9\u4e24\u79cd\u534f\u8bae\u4f5c\u4e3a\u201c\u83b7\u53d6\u7528\u6237\u8bf7\u6c42\u201d\u7684\u624b\u6bb5\u800c\u5df2\u3002\n2. SS\u534f\u8bae\u4e2d\u6ca1\u6709\u4efb\u4f55\u63a7\u5236\u6d41\uff0c\u672c\u5730\u4ee3\u7406\u83b7\u53d6\u7528\u6237\u539f\u59cbTCP/UDP\u6570\u636e\u5305\u83b7\u53d6\u4e4b\u540e\u4f1a\u76f4\u63a5\u53d6\u51faData\u90e8\u5206\uff0c\u91cd\u65b0\u6784\u9020\u4e00\u4e2aIP\u6570\u636e\u5305\uff08\u53ef\u80fd\u662fTCP\u6216\u8005UDP\uff0c\u548c\u7528\u6237\u539f\u59cb\u8bf7\u6c42\u662fTCP\u8fd8\u662fUDP\u6709\u5173\u7cfb\u3002\uff09\uff0c\u76ee\u6807\u5730\u5740\u548c\u7aef\u53e3\u662f\u670d\u52a1\u5668\u5730\u5740\uff0c\u6570\u636e\u5305\u7684Data\u90e8\u5206\u662f\u52a0\u5bc6\u540e\u7684\u7528\u6237\u539f\u59cbData\u3002\n")),(0,n.kt)("h2",{id:"ss\u5b89\u5168\u6027\u4e0e\u52a0\u5bc6"},"SS\u5b89\u5168\u6027\u4e0e\u52a0\u5bc6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SS\u4e2d\u672c\u5730\u4ee3\u7406\u548c\u670d\u52a1\u5668\u901a\u8baf\u6570\u636e\u5305\u90fd\u662f\u7ecf\u8fc7\u52a0\u5bc6\u7684\uff0cDPI\uff08\u6df1\u5ea6\u6570\u636e\u5305\u68c0\u6d4b\uff09\u53ea\u80fd\u68c0\u6d4b\u5230IP\u5934\u90e8\u548cTCP/UDP\u5934\u90e8\uff0c\u65e0\u6cd5\u5bf9\u5185\u5bb9\u8fdb\u884c\u68c0\u6d4b\uff0c\u800cVPN\u4e4b\u7c7b\u7684\u5c31\u7279\u522b\u5bb9\u6613\u88ab\u68c0\u6d4b\u5230\u4e86\u3002\u60f3\u68c0\u6d4bSS\u53ea\u80fd\u901a\u8fc7\u201c\u6d41\u91cf\u7279\u5f81\u201d\uff08\u6570\u636e\u5305\u7684\u7ed3\u6784\uff09\u63a8\u6d4b\uff0c\u4f46\u662f\u4f7f\u7528SS\u4e00\u822c\u9009\u62e9\u5e26IV\u6a21\u5f0f\u7684AES\u52a0\u5bc6\u7b97\u6cd5\u4f5c\u4e3a\u52a0\u5bc6\u65b9\u6cd5\uff08\u4e0d\u4e86\u89e3AES\u7684\u670b\u53cb\u8bf7\u53c2\u8003\u516c\u4f17\u53f7\u7684\u300a\u6df1\u5165\u6d45\u51faAES\u52a0\u5bc6\u300b\uff09\uff0c\u5229\u7528IV\u5bf9\u6570\u636e\u505a\u968f\u673a\u5316\uff0c\u4f7f\u6bcf\u6b21\u8bf7\u6c42\u7684\u6570\u636e\u5305\u90fd\u4e0d\u4e00\u6837\uff0c\u4e00\u822c\u5f88\u96be\u5f62\u6210\u201c\u6d41\u91cf\u7279\u5f81\u201d\u3002\u5982\u679cSS\u65e0\u6cd5\u4f7f\u7528\u90a3\u4e48\u4e00\u5b9a\u662f\u7531\u4e8e\u670d\u52a1\u5668\u7aefIP\u5730\u5740\u88ab\u9650\u5236\u4e86\uff0c\u88ab\u9650\u5236\u7684\u539f\u56e0\u4e5f\u7edd\u5bf9\u4e0d\u662f\u7531\u4e8eSS\u88ab\u8bc6\u522b\u5230\u4e86\uff08\u9664\u975e\u8c01\u6709\u901a\u5929\u7684\u80fd\u8010\u7834\u89e3AES\uff09\u3002\n")),(0,n.kt)("h2",{id:"shadowsocks\u6570\u636e\u5305\u5206\u6790"},"Shadowsocks\u6570\u636e\u5305\u5206\u6790"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u524d\u4e09\u6761\u662fTCP\u63e1\u624b\u6211\u4eec\u65e0\u89c6\u540e\u9762\u662f162\u5b57\u8282\u7684\u8bf7\u6c42\u6570\u636e\u5305\uff0c\u63a5\u7740\u662f\u670d\u52a1\u5668\u7aef\u56de\u590d\u4e00\u4e2aACK\u786e\u8ba4\uff0860\uff09\u5b57\u8282\uff0c\u63a5\u7740\u662f\u670d\u52a1\u5668\u8fd4\u56de651\u5b57\u8282\u7684\u56de\u590d\u6570\u636e\u5305\uff1b\u7d27\u63a5\u7740\u670d\u52a1\u5668\u53d1\u900160\u5b57\u8282\u7684TCP\u63a7\u5236\u6570\u636e\u5305\u6269\u5927\u6570\u636e\u7a97\u53e3\uff1b\u5ba2\u6237\u7aef\u56de\u590d54\u5b57\u8282\u7684ACK\u786e\u8ba4\u6570\u636e\u5305\u3002\u540e\u97624\u6761\u662fTCP\u7684\u5173\u95ed\u52a8\u4f5c\u3002\n\n\u6211\u4eec\u5173\u6ce8\u7684\u91cd\u70b9\u662f162\u5b57\u8282\u7684\u8bf7\u6c42\u548c651\u5b57\u8282\u7684\u56de\u590d\u662f\u4ec0\u4e48\u5185\u5bb9\uff1a\nSS\u8bf7\u6c42\u6570\u636e\u5305\n\u5173\u6ce8IP\u5934\u90e8\u548cTCP\u5934\u90e8\uff0c\u8fd9\u4e24\u90e8\u5206\u4fe1\u606f\u662f\u6e90\u5730\u5740\u662f\u672c\u5730\u4ee3\u7406\u7684IP\u5730\u5740\u548c\u7aef\u53e3\uff1b\u76ee\u6807\u5730\u5740\u662f\u670d\u52a1\u5668\u7aef\u7684IP\u5730\u5740\u548c\u7aef\u53e3\uff0cData\u90e8\u5206108\u5b57\u8282\u662f\u901a\u8fc7AES\u52a0\u5bc6\u7684\u539f\u59cb\u8bf7\u6c42\u3002\n")),(0,n.kt)("h2",{id:"ss\u56de\u590d\u6570\u636e\u5305"},"SS\u56de\u590d\u6570\u636e\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u8fd9\u662fSS\u670d\u52a1\u5668\u56de\u590d\u7ed9\u672c\u5730\u4ee3\u7406\u7684\u6570\u636e\u5305\u3002IP\u548cTCP\u5934\u90e8\u6ca1\u6709\u4ec0\u4e48\u7279\u6b8a\u7684\uff0c\u76f4\u63a5\u770bData\u90e8\u5206\uff0c\u4e00\u5171597\u5b57\u8282\u3002\u4e5f\u662f\u52a0\u5bc6\u540e\u7684\u6570\u636e\uff0c\u6211\u4eec\u628a\u5b83\u89e3\u51fa\u6765\u3002\n\u670d\u52a1\u5668\u7aef\u6ca1\u6709\u589e\u52a0\u7279\u6b8a\u5934\u90e8\uff0c\u76f4\u63a5\u628a\u539f\u59cb\u6570\u636e\u8fd4\u56de\u3002\n\n")),(0,n.kt)("h2",{id:"ss\u6539\u8fdb"},"SS\u6539\u8fdb"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SS\u7684\u8bbe\u8ba1\u5f88low\uff08\u597d\u5427\uff0c\u5176\u5b9e\u4e5f\u6ca1\u5565\u8bbe\u8ba1\uff09\uff0c\u6548\u7387\u4e5f\u5f88\u5dee\uff0c\u7279\u522b\u662fHTTP\u4e4b\u7c7b\u7684\u77ed\u8fde\u63a5\u7b80\u76f4\u662f\u707e\u96be\u3002\u4e00\u4e2aWeb\u9875\u9762\u4e2d\u53ef\u80fd\u5305\u542b40-50\u4e2a\u8bf7\u6c42\u90a3\u4e48\u76f8\u5f53\u4e8eSS\u4e2d\u8f6c40-50\u6b21\uff0c\u6240\u4ee5\u5e76\u53d1\u538b\u529b\u5f88\u5927\u3002\u4f46\u662f\u5b83\u5b9e\u73b0\u8d77\u6765\u7279\u522b\u7b80\u5355\uff0c\u800c\u4e14\u884c\u4e4b\u6709\u6548\uff0c\u8fd9\u4e5f\u8bb8\u5c31\u662f\u5b83\u7f8e\u5999\u7684\u5730\u65b9\u3002\n")))}d.isMDXComponent=!0}}]);