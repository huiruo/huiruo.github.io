"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return t?l.createElement(h,o(o({ref:n},u),{},{components:t})):l.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=t(87462),a=(t(67294),t(3905));const r={title:"v8\u7f16\u8bd1",sidebar_position:2},o=void 0,i={unversionedId:"C++-V8/v8\u7f16\u8bd1",id:"C++-V8/v8\u7f16\u8bd1",title:"v8\u7f16\u8bd1",description:"\u7cfb\u7edf\u73af\u5883\u8981\u6c42",source:"@site/programming-tech/C++-V8/03-v8\u7f16\u8bd1.md",sourceDirName:"C++-V8",slug:"/C++-V8/v8\u7f16\u8bd1",permalink:"/C++-V8/v8\u7f16\u8bd1",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/C++-V8/03-v8\u7f16\u8bd1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"v8\u7f16\u8bd1",sidebar_position:2},sidebar:"docs",previous:{title:"\u7f16\u8bd1\u5de5\u5177-depot_tools",permalink:"/C++-V8/\u7f16\u8bd1\u5de5\u5177-depot_tools"},next:{title:"chromium\u7f16\u8bd1",permalink:"/C++-V8/chromium/chromium\u7f16\u8bd1"}},s={},c=[{value:"\u7cfb\u7edf\u73af\u5883\u8981\u6c42",id:"\u7cfb\u7edf\u73af\u5883\u8981\u6c42",level:2},{value:"python",id:"python",level:2},{value:"git",id:"git",level:2},{value:"\u6267\u884c",id:"\u6267\u884c",level:2},{value:"\u62a5\u9519",id:"\u62a5\u9519",level:2},{value:"\u7f16\u8bd1\u4ee3\u7801,\u4e24\u79cd\u65b9\u5f0f\uff1a",id:"\u7f16\u8bd1\u4ee3\u7801\u4e24\u79cd\u65b9\u5f0f",level:2},{value:"\u65b9\u5f0f1\uff1a\u547d\u4ee4\u65b9\u5f0f",id:"\u65b9\u5f0f1\u547d\u4ee4\u65b9\u5f0f",level:3},{value:"\u65b9\u5f0f2\uff1avs\u5de5\u7a0b\u65b9\u5f0f",id:"\u65b9\u5f0f2vs\u5de5\u7a0b\u65b9\u5f0f",level:3},{value:"\u751f\u6210GN\u5de5\u7a0b\u6587\u4ef6",id:"\u751f\u6210gn\u5de5\u7a0b\u6587\u4ef6",level:5},{value:"build gn_all",id:"build-gn_all",level:4},{value:"\u4f8b\u5b501:hellow world",id:"\u4f8b\u5b501hellow-world",level:3},{value:"\u4f8b\u5b502:\u8c03\u8bd5shell.cc",id:"\u4f8b\u5b502\u8c03\u8bd5shellcc",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,l.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7cfb\u7edf\u73af\u5883\u8981\u6c42"},"\u7cfb\u7edf\u73af\u5883\u8981\u6c42"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf win 10 64bit,VS2019\u793e\u533a\u7248\nwindows 10 SDK"),(0,a.kt)("p",null,"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DEPOT_TOOLS_WIN_TOOLCHAIN = 0\n")),(0,a.kt)("h2",{id:"python"},"python"),(0,a.kt)("p",null,"C:\\Users\\chenh\\AppData\\Local\\Programs\\Python\\Python311"),(0,a.kt)("h2",{id:"git"},"git"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7981\u7528\u81ea\u52a8\u8f6c\u6362\ngit config --global core.autocrlf false\n\ngit config --global core.filemode false\n\n# \u975e\u5fc5\u987b\uff0c\u5728 config \u4e2d\u8bbe\u7f6e rebase \u9009\u9879\uff0c\u4f7f\u5f97 git pull \u4f7f\u7528 rebase \u6574\u5408\u6240\u505a\u4fee\u6539\n# https://www.jianshu.com/p/280a04fc2e2b\ngit config --global pull.rebase true\ngit config --global branch.autosetuprebase always\n")),(0,a.kt)("p",null,"Git\u5bf9\u6587\u4ef6\u7684\u8bbf\u95ee\u6743\u9650\u7684\u7ba1\u7406\u4e0e\u914d\u7f6e\u9009\u9879core.filemode\u6709\u5173\u3002core.filemode\u9009\u9879\u9ed8\u8ba4true\uff0c\u5373\u533a\u5206\u6587\u4ef6\u7684\u6267\u884c\u6743\u9650\uff0c\u6821\u9a8cGit\u7684Index\u4e2d\u548c\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u6743\u9650\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770bfilemode\u9009\u9879\ngit config --get core.filemode\n\u6216\ngit config core.filemode")),(0,a.kt)("h2",{id:"\u6267\u884c"},"\u6267\u884c"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u62a5\u9519\u65e0\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},">gclient sync\nUpdating depot_tools...\nC:\\zip-app\\depot_tools\\.versions\\.cipd_client.exe.cipd_version\nC:\\zip-app\\depot_tools\\.versions\\.cipd_client.exe.cipd_version\nSyncing projects: 100% (29/29), done.\n\n________ running 'cipd ensure -log-level error -root C:\\C-workspace\\V8-2 -ensure-file C:\\Users\\chenh\\AppData\\Local\\Temp\\tmpzkxe1n2g.ensure' in '.'\nC:\\zip-app\\depot_tools\\.versions\\.cipd_client.exe.cipd_version\nRunning hooks: 100% (32/32), done.\n")),(0,a.kt)("h2",{id:"\u62a5\u9519"},"\u62a5\u9519"),(0,a.kt)("p",null,"Windows Software Development Kit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Exception: Path "C:\\Program Files (x86)\\Windows Kits\\10\\include\\10.0.20348.0\\shared" from environment variable "include" does not exist. Make sure the necessary SDK is installed.\n')),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u5728Visual Studio Installer-\u5355\u4e2a\u7ec4\u4ef6-\u4e2d\u5b89\u88c510.0.20348.0\u7248\u672c\u7684SDK,\u6ce8\u610f\uff1a 10.0.20348.0\u7248\u672c\u7684SDK\u5b89\u88c5\u6210\u529f\u540e\u522b\u5fd8\u4e86\u5b89\u88c5SDK\u8c03\u8bd5\u5de5\u5177"),(0,a.kt)("p",null,"\u5de5\u7a0b\u751f\u6210\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"E:\\webrtc\\webrtc\\src>gn gen --ide=vs2019 out/Default\nGenerating Visual Studio projects took 1226ms\nDone. Made 1520 targets from 282 files in 9194ms\n")),(0,a.kt)("p",null,"\u6253\u5f00out/Default\u76ee\u5f55\u5c31\u80fd\u770b\u89c1vs\u5de5\u7a0b\u6587\u4ef6\u4e86\uff01\n",(0,a.kt)("img",{src:t(58681).Z,width:"806",height:"212"})),(0,a.kt)("p",null,"\u5728\u6b64\u4e4b\u540e\uff0c\u5c31\u53ef\u5728Visual Studio\u4e2d\u5bf9webrtc\u8fdb\u884c\u8c03\u8bd5\u4e86"),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u4ee3\u7801\u4e24\u79cd\u65b9\u5f0f"},"\u7f16\u8bd1\u4ee3\u7801,\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("h3",{id:"\u65b9\u5f0f1\u547d\u4ee4\u65b9\u5f0f"},"\u65b9\u5f0f1\uff1a\u547d\u4ee4\u65b9\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/docs/embed"},"https://v8.dev/docs/embed")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"gn args out.gn/x64.release.sample\uff08\u4f1a\u5f39\u51fa\u4e00\u4e2a\u6587\u4ef6\u9700\u8981\u4f60\u7f16\u8f91\uff0c\u7f16\u8f91\u5b8c\u540e\u5173\u95ed\u5c31\u4f1a\u6839\u636e\u4f60\u586b\u5199\u7684\u53c2\u6570\u751f\u6210\u4e00\u4e9b\u914d\u7f6e\u6587\u4ef6\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ninja -C out.gn/x64.release.sample v8_monolith\uff0c\u518d\u901a\u8fc7\u547d\u4ee4\u5c31\u53ef\u4ee5\u751f\u6210\u9759\u6001\u5e93\u4e86\uff0c\u5927\u6982\u9700\u8981\u7f16\u8bd1\u5341\u51e0\u5206\u949f"))),(0,a.kt)("h3",{id:"\u65b9\u5f0f2vs\u5de5\u7a0b\u65b9\u5f0f"},"\u65b9\u5f0f2\uff1avs\u5de5\u7a0b\u65b9\u5f0f"),(0,a.kt)("h5",{id:"\u751f\u6210gn\u5de5\u7a0b\u6587\u4ef6"},"\u751f\u6210GN\u5de5\u7a0b\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~\\v8\\src # \u8fdb\u5165v8 src\u76ee\u5f55\ngn gen --ide=vs out\\default --args="is_component_build = true is_debug = true v8_optimized_debug = false"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'C:\\C-workspace\\V8-2\\v8\\src>gn gen --ide=vs out\\default --args="is_component_build = true is_debug = true v8_optimized_debug = false"\nGenerating Visual Studio projects took 148ms\nDone. Made 187 targets from 100 files in 4770ms\n')),(0,a.kt)("p",null,"gn\u547d\u4ee4\u4e0d\u662f\u672c\u6587\u91cd\u70b9\uff0c\u53ef\u81ea\u884c\u67e5\u9605\uff0c\u53c2\u6570\uff1ais_debug = true \u8ba9v8\u53ef\u4ee5\u88ab\u8c03\u8bd5\uff0cv8_optimized_debug = false \u53bb\u6389\u5bf9\u8c03\u8bd5v8\u6709\u5e72\u6270\u7684\u4ee3\u7801\u4f18\u5316\uff0c\u8fd9\u4e0d\u4f1a\u5f71\u54cdv8\u7684\u6b63\u786e\u6027\uff0c\u53ea\u53ef\u80fd\u5bf9\u6027\u80fd\u6709\u70b9\u5f71\u54cd,\u4e0b\u6587\u662f\u6211\u7684\u7f16\u8bd1\u914d\u7f6e\u6587\u4ef6args.gn\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"is_component_build = true  \nis_debug = true  \nv8_optimized_debug = false  \nv8_use_snapshot = false\n")),(0,a.kt)("p",null,"\u6216\u5219\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u547d\u4ee4\u751f\u6210vs\u5de5\u7a0ball.sln")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gn gen --ide=vs out.gn\\x64_solution\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00\u5de5\u7a0b\u7136\u540e\u7f16\u8bd1\u4f60\u9700\u8981\u7684\u9879\u76ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vs\u5de5\u7a0b\u65b9\u5f0f\u7684\u8bdd\uff0c\u76f4\u63a5\u7f16\u8bd1v8_hello_world\u8fd9\u4e2a\u9879\u76ee\uff0c\u7136\u540e\u4f1a\u5728out.gn\\x64_solution\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u751f\u6210\nv8_hello_world.exe\n")),(0,a.kt)("h4",{id:"build-gn_all"},"build gn_all"),(0,a.kt)("p",null,"\u7f16\u8bd1\u4e4b\uff0c\u6700\u540e\u5373\u53ef\u8c03\u8bd5out\\Default\\d8.exe\u3002"),(0,a.kt)("h3",{id:"\u4f8b\u5b501hellow-world"},"\u4f8b\u5b501:hellow world"),(0,a.kt)("p",null,"V8\u4ee3\u7801\u91cf\u5927\u3001\u7ed3\u6784\u590d\u6742\u3001\u7c7b\u5f15\u7528\u7684\u5c42\u7ea7\u5173\u7cfb\u591a\uff0c\u8981\u6709\u4e00\u4e2a\u5408\u7406\u7684\u5165\u53e3\u624d\u597d\uff0cv8\u7684\u6e90\u7801\u90fd\u5728src\u76ee\u5f55\u4e0b\uff0c\u5982\u4e0b\u56fe\u3002"),(0,a.kt)("p",null,"\u9664\u4e86src\u76ee\u5f55\uff0c\u6211\u4eec\u770b\u5230\u8fd8\u6709\u4e00\u4e2asamples\u76ee\u5f55\uff0c\u5b83\u5c31\u662f\u6211\u4eec\u5f00\u59cb\u5b66\u4e60\u7684\u5730\u65b9\uff0c\u56fe1\u4e2d\u6253\u5f00\u7684\u6587\u4ef6(hello-world.cc)\u6b63\u662f\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\uff0c\u8fd9\u4e2ahello world\u7a0b\u5e8f\u662f\u7528C++\u7f16\u5199\u7684\uff0c\u5305\u62ec\u4e86\u542f\u52a8V8\uff0c\u7136\u540e\u8fd0\u884c\u4e00\u4e2ajavascript\u8bed\u8a00\u7684hello world\uff0c\u8fd8\u6709\u4e00\u4e2a\u52a0\u6cd5\u8fd0\u7b97\u3002\u51c6\u786e\u5730\u8bf4\uff0cV8\u662f\u4e00\u4e2ajavascript\u865a\u62df\u673a\uff0c\u8fd9\u4e2ahello word.cc\u4e2d\u4ec5\u6709\u201dhello world\u201d\u548c\u52a0\u6cd5\u7b97\u6cd5\u662f\u4e00\u4e2a\u771f\u6b63\u7684javascript\u7a0b\u5e8f\uff0c\u5176\u5b83\u7684\u4ee3\u7801\u90fd\u662f\u4e3a\u4e86\u8fd0\u884cjavascript\u7a0b\u5e8f\u800c\u505a\u7684\u51c6\u5907\u5de5\u4f5c(\u542f\u52a8V8\u865a\u62df\u673a)\uff0c\u5305\u62ec\u4e86V8\u7684\u521b\u5efa\u3001Isolate\u521b\u5efa\u3001handle\u521b\u5efa\uff0c\u7f16\u8bd1\uff0c\u8f93\u51fahello world\uff0c\u518d\u7ed3\u675fV8\u7684\u5168\u8fc7\u7a0b\u3002\u8fd9\u91cc\u53ea\u5305\u62ec\u4e86V8\u6700\u7b80\u5355\u6700\u5fc5\u8981\u7684\u529f\u80fd\u96c6\uff0c\u6240\u4ee5\uff0c\u4ece\u8ddf\u8e2ahello-world.cc\u5165\u624b\u5b66\u4e60V8\u662f\u6700\u7b80\u5355\u7684\u3002"),(0,a.kt)("p",null,"\u5728src\\out\\default\u4e0b\uff0c\u80fd\u770b\u5230all.sln\uff0c\u53cc\u51fb\u6253\u5f00,\u5982\u56fe-1\u3002\n\u80fd\u770b\u5230v8_hello_world\u8fd9\u4e2a\u65b9\u6848\uff0c\u9f20\u6807\u53f3\u51fb\u201c\u8bbe\u4e3a\u542f\u52a8\u9879\u76ee\u201d\uff0c\u518d\u6b21\u9f20\u6807\u53f3\u51fb\u201c\u751f\u6210\u201d\uff0c\u8fd9\u6837\u5c31\u5f00\u59cb\u7f16\u8bd1\u4e86\uff0c\u5728\u56fe1\u4e0b\u65b9\u7684\u8f93\u51fa\u7a97\u53e3\uff0c\u80fd\u770b\u5230\u7f16\u8bd1\u8fc7\u7a0b\u3002\u7f16\u8bd1\u65f6\u95f4\u957f\u77ed\u8981\u770b\u673a\u5668\u6027\u80fd\uff1aCPU\u548c\u5185\u5b58\u9891\u7387\u3001\u786c\u76d8\u8bfb\u5199\u901f\u5ea6\u3002\n",(0,a.kt)("img",{src:t(22091).Z,width:"1913",height:"1036"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"1>[1966/1967] LINK(DLL) v8.dll v8.dll.lib v8.dll.pdb\n1>[1967/1967] LINK v8_hello_world.exe v8_hello_world.exe.pdb\n========== \u751f\u6210: \u6210\u529f 1 \u4e2a\uff0c\u5931\u8d25 0 \u4e2a\uff0c\u6700\u65b0 0 \u4e2a\uff0c\u8df3\u8fc7 0 \u4e2a ==========\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(56607).Z,width:"574",height:"68"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"      // Create a string containing the JavaScript source code.\n      v8::Local<v8::String> source =\n          v8::String::NewFromUtf8Literal(isolate, \"'Hello' + ', World!'\");\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include "include/libplatform/libplatform.h"\n#include "include/v8-context.h"\n#include "include/v8-initialization.h"\n#include "include/v8-isolate.h"\n#include "include/v8-local-handle.h"\n#include "include/v8-primitive.h"\n#include "include/v8-script.h"\n\nint main(int argc, char* argv[]) {\n  // Initialize V8.\n  v8::V8::InitializeICUDefaultLocation(argv[0]);\n  v8::V8::InitializeExternalStartupData(argv[0]);\n  std::unique_ptr<v8::Platform> platform = v8::platform::NewDefaultPlatform();\n  v8::V8::InitializePlatform(platform.get());\n  v8::V8::Initialize();\n\n  // Create a new Isolate and make it the current one.\n  v8::Isolate::CreateParams create_params;\n  create_params.array_buffer_allocator =\n      v8::ArrayBuffer::Allocator::NewDefaultAllocator();\n  v8::Isolate* isolate = v8::Isolate::New(create_params);\n  {\n    v8::Isolate::Scope isolate_scope(isolate);\n\n    // Create a stack-allocated handle scope.\n    v8::HandleScope handle_scope(isolate);\n\n    // Create a new context.\n    v8::Local<v8::Context> context = v8::Context::New(isolate);\n\n    // Enter the context for compiling and running the hello world script.\n    v8::Context::Scope context_scope(context);\n\n    {\n      // Create a string containing the JavaScript source code.\n      v8::Local<v8::String> source =\n          v8::String::NewFromUtf8Literal(isolate, "\'Hello\' + \', World!\'");\n\n      // Compile the source code.\n      v8::Local<v8::Script> script =\n          v8::Script::Compile(context, source).ToLocalChecked();\n\n      // Run the script to get the result.\n      v8::Local<v8::Value> result = script->Run(context).ToLocalChecked();\n\n      // Convert the result to an UTF8 string and print it.\n      v8::String::Utf8Value utf8(isolate, result);\n      printf("%s\\n", *utf8);\n    }\n\n    {\n      // Use the JavaScript API to generate a WebAssembly module.\n      //\n      // |bytes| contains the binary format for the following module:\n      //\n      //     (func (export "add") (param i32 i32) (result i32)\n      //       get_local 0\n      //       get_local 1\n      //       i32.add)\n      //\n      const char csource[] = R"(\n        let bytes = new Uint8Array([\n          0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01,\n          0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07,\n          0x07, 0x01, 0x03, 0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01,\n          0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b\n        ]);\n        let module = new WebAssembly.Module(bytes);\n        let instance = new WebAssembly.Instance(module);\n        instance.exports.add(3, 4);\n      )";\n\n      // Create a string containing the JavaScript source code.\n      v8::Local<v8::String> source =\n          v8::String::NewFromUtf8Literal(isolate, csource);\n\n      // Compile the source code.\n      v8::Local<v8::Script> script =\n          v8::Script::Compile(context, source).ToLocalChecked();\n\n      // Run the script to get the result.\n      v8::Local<v8::Value> result = script->Run(context).ToLocalChecked();\n\n      // Convert the result to a uint32 and print it.\n      uint32_t number = result->Uint32Value(context).ToChecked();\n      printf("3 + 4 = %u\\n", number);\n    }\n  }\n\n  // Dispose the isolate and tear down V8.\n  isolate->Dispose();\n  v8::V8::Dispose();\n  v8::V8::DisposePlatform();\n  delete create_params.array_buffer_allocator;\n  return 0;\n}\n')),(0,a.kt)("h3",{id:"\u4f8b\u5b502\u8c03\u8bd5shellcc"},"\u4f8b\u5b502:\u8c03\u8bd5shell.cc"),(0,a.kt)("p",null,"\u5b83\u7684\u4f4d\u7f6e\u5728samples\\\u4e0b,\u53ea\u662f\u56e0\u4e3ashell\u7684\u4ea4\u4e92\u6027\u66f4\u5f3a\uff0c\u8ba9\u4f60\u770b\u5230\u201d\u52a8\u8d77\u6765\u201d\u7684\u6548\u679c\u66f4\u660e\u663e,\u8fd9\u4e2a\u5de5\u7a0b\u8bbe\u7f6e\u4e3a\u542f\u52a8\u9879\uff0c\u7136\u540e\u751f\u6210;\n\u8fd9\u65f6\uff0c\u6211\u4eec\u5728elements.cc\u4e2d\u4e0b\u65ad\u70b9\uff0c\u5982\u4e0b\u56fe\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u6837\u56fe\u4e2d\uff0c\u80fd\u770b\u5230\u65ad\u70b9\uff0c\u8fd8\u6709\u8c03\u7528\u5806\u6808\uff0c\u4ece\u4e2d\u80fd\u770b\u5230\u51fd\u6570\u7684\u8c03\u7528\u8fc7\u7a0b\uff0c\u5728shell\u7a97\u53e3\u4e2d\u6267\u884c\u5982\u4e0b\u6307\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"a=[1,2,3,4]\na.length = 10 // \u7279\u610f\u6539\u53d8\u6570\u7ec4\u957f\u5ea6\uff0c\u4e3a\u4e86\u80fd\u89e6\u53d1\u65ad\u70b9\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},"static Maybe<bool> SetLengthImpl(Isolate* isolate, Handle<JSArray> array,\n                                  uint32_t length,\n                                  Handle<FixedArrayBase> backing_store) {\n  DCHECK(!array->SetLengthWouldNormalize(length));\n  DCHECK(IsFastElementsKind(array->GetElementsKind()));\n  uint32_t old_length = 0;\n  CHECK(array->length().ToArrayIndex(&old_length));\n\n  if (old_length < length) {\n    ElementsKind kind = array->GetElementsKind();\n    if (!IsHoleyElementsKind(kind)) {\n      kind = GetHoleyElementsKind(kind);\n      JSObject::TransitionElementsKind(array, kind);\n    }\n  }\n  // \u7701\u7565\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(24048).Z,width:"1705",height:"866"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[1,2,3,4].join(\"-\")\n// 1-2-3-4\n'1-2-3-4'.split('-')\n\n[1,2,3,4].map((value, key, arr) => {console.log(value);return value * value;})\n// 1,4,9,16\n")))}d.isMDXComponent=!0},58681:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/\u7528VS2019\u7f16\u8bd1V8-1-672bde41c1139dae8e8b64fa2362bbdc.png"},56607:(e,n,t)=>{t.d(n,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj4AAABECAYAAACBFD8iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABSQSURBVHhe7Z1rqFXF+8eX/8K7pJmlZmleKjQytdKszJ+amRrSFV+IWhFICooFKSX9pIR8UWEk9qa84AtFX2RIhVhqJGopqNiNMq3ECykqVmaR/n+f56w5rb3OXmvNPmedc/Y5+/uBYd3XPDPzzMyznpm9p0X79u0vBUIIIYQQFcD/hVshhBBCiGaPDB8hhBBCVAwyfIQQQghRMeRu+IwbNy545513grvuuis8I8qZplheDSlzueWP5BFCiLqRu+Hz8ccfB507dw4mTZoUnmk+0MATmhNNsbwaUuZyy5/GkOfmm282A6cYdZFn69atwQsvvBAelQ7Prlu3zt5DyNP4Ir3uvVlypuVPOZJHO+aTP6XkYVOiLulqTvnQlKlh+FCoS5YsqS5UGpZSC2r37t3BsGHDrEFII4+4RN3JKq+XX37ZyqdLly7hmSpcA/D444/bMddfe+214MMPP7TzbGtTnnRgcb1wcTh8dSwLH5nziisvGloejJp58+aFRzVpjPyhjB588MHg1KlTwUcffWThhx9+CK/WnT179pheELLIyp+8yKt+5YFP/pSSh02J5pquSqLA8KFzoQJ36tQpWLp0qRXswYMHg/vuu6+kRu29994L/vjjj9SvwLziEnUnq7w2bdpk25EjR9rWMXToUNtimMBLL71kHSDHlOe2bdusc5o1a5Zd92XBggWmFytXrrT3HD16NJg5c2aBXvjomA8+MucVV15IniC4/fbbg59//jmYMWNGsHjxYgu//vpreLXu8C68WYS6gnGSR5uWV/3KA5/8yTMPy4nmmq5KosDweeKJJ6wxee6556xyUbAYJ9OmTQu+/fbb8K4qqGx8dfDVHwfF2L9/vxkxcS+Bo5S4kqBBQYboPvE5T0RUNq67LyXii3oQ3P0EPA1PPvlk9b14O9JYtWpVgduY+ImLONw7CbzT4VzNzpNCoCGL5lVUJtfQFctL0oEM7l7kj7v842mPygJZ5bVjxw7r2Pr37x+eqaJPnz7Bvn37wqMgaNWqlZXd8uXLrTzpjKBfv3629WXu3LnB1KlTq9+zbNkyOz9mzBjbQpbM5AHpjaeVfOS8e8ZHZh995nxauZeiY1ll6iMPpOk8cD6qu/F6w/Mc07kC+y5wzeEjDx0/cfEsMsXLxZGlqw7i+eqrr8KjQnzqDtfS0u6Db/6QL67OF0tPnrpaCtH2p1g751sWeRCPK66rWbiyiO6Tb8XKNS2uqO6U2hfE8dV5H9LKgnTSXhAcxM39pCFK2nsqiWrDhwInA7ds2WINWZT4MfTo0cO23bp1s22cFStWBG3btg0mTpwYnvmXUuNKwnW6vKt169b27JAhQ4KBAwfaeVySQOHSOGFo4RIHPAiuMjjXJddpXPBk0Lgg33/+85+CShOFeK+//vrg2LFj4ZkgeOqppywuvBTOBU/AeIjCvIgrr7zS4uU6X3LPPvtseDUIDh8+XP0s7+L6K6+8El6tggpLOtq0aWP3IS+NIIaDA0VHHr4OiYthCYzLeMOSVl5Ax3bLLbeER/+m/fvvvw/PBJYPnOPdXHdfop9//rltfYkbvnh/ipEmM/mNPtx2223hmSpuvfVW0xunZ74yZ+VPVrn76phPmUKWPFk678OGDRtM5p07d9ox+y5wLUqWPHPmzLF8xotHuuPlAlm6SmOO/C4N6IU7jhqGPnUnD3zzZ/z48ZbuCxcuWHroeOhESQ/kras+0P6gY05+dDDaCfq2G3mQh642dl9QDB+d9yGrLEgrH4fExb1A3L///nvw6quv2jE0ZJmWOzXm+EQ78TTwzpB5FGgx6LxQRip9EmlxoWBYpUkhCgqOAcZQWdQQcw0GCsu+c4szlAJu6IZrfEHh1aAxQlGxhteuXWvXXeWJ4wyVXbt22RZuuOEG26JwxOVCvDNv165dMHv27OovN/LKDR0B97tnuW/9+vUmGxXb8dBDD5nsyMF9CxcutAY+akAxJEDDxnUXF+++5557wjuqyCqv7777zuJ2jbXr4DZv3mxbIH73ZUP+8S6GMdmHUso0yogRI2wbjQuyZD5w4ICVncszOkc6571799oxZMnsyIorq9x9dcynTCFLniyd94E4kPn06dN2zL4LLl2ONHlIL4F8pr0g3WvWrAmv/kuWrjKURrtDAAwad0wD7uAZniUk1Z08KCV/SDeyUB50PNT1qMcpT131gfaHfENWl59XX321bcG33ciDPHTV0Vh9QRxfnffBpywwnjHkMGycUf3uu+9WpxsaskzLnRqGTymQeWlQEFTk2liUzvJOCu4eB18wHFN5sfijDQ+WMBXBwTUs+o4dO4ZnCnFf6dxHhUBBHMSD5UyjRSVCkaL58Mknn9gWRece7kUJ4xB/FL5MaegcPIMC8w7CnXfeaeep2A7SRYMZVW739egg/+kgogYG7+ZrJk5aeW3cuNG2brjppptusnii+UyD/Nhjj5khyLvwEnEu/jWVFIpBB8BQAV9c0bgcaTLH5yaNHTvWGrSosZ4lc5S0uHzL3ZGkYz5l6kiTp1Sdz4MkeXr16mXb6ORjl/4oPJumq+QReeXKk/jcMR2Zw6fuNAbIRf2hA6KuR9uAvHU1i3j7EyerLPIkD11tjL4gDV+d98G3LJCNtNAv0V7G++eGLNNyp4bhkzR0VRvIeApi9OjR4ZlC0uKioef5pODuAfeec+fOBd27d7dj3Mr1AcqDVY3CAMoThY6PRpivTGRw4/vFOqckiOONN96woaVDhw5ZwDAqBu7qLDDO4kYGXzJxyNek8nJGjptPgBueDtqBzHx1U+H4MqUS8iXJUNjTTz9t9/iUaRQadL7ITp48ae8sBs8lyewMBtfhkZ90Fg4fmaOkxZVHuTt8yhTS5GkM8pDHV1eTKKXuNBQYJ8y1QB/w0tDxzp8/3+axOfLW1Tyoa1k0JI3RFzQkvmWBsZxGUyrT+qTa8KHRItOomFQyH3y+NKioGAnRMfjaxJUECo/3gZ+1YuU76zXa2NEYMxHXgTxY/mfOnAnP+OMsfzo00lCs0eGet99+21zbzgUfdycSfxTmKzilpfHjixBXJQ0cgaGmOKQLAyQtD8kfvmbI82hI+vooVl4ODB0MH+eGjw7x9e3b17Z//vmnbR3nz583t3opkB48JjTsxBHtIIqRJTN5xHXeG/0yrI3MaXH5lHsWPmUaJUme2ui8y48keEcWxeQ5e/asbaPvL5Z/pepqMXzrTpystCfNM4uSlD/oAu0SHQxtHnpdLE1562pdKLUsfPIn6Z682ueG7gscxdLlq/NRkvpT37JwXmbqIF6f+PvyqF/Nhctatmz533A/+N9+MHz4cHOHkUFdu3YNBg0aZPMOtm/fHt5VBZbi5MmTgxYtWhSMQ8fh2oQJE8ztGJ2jUUpcafB1ySRhFJrxVOZCXHHFFcGXX35ZLRfvd3ENGDAgmDJlijUWq1evNlckyoL7efDgwfbs8ePHreE5cuSIPe9w81oY9sFIQeHvuOOO4JprrqmWGRc78dDhER555JHgqquusgmIX3zxhd3Dey6//PLqTvHRRx81RaWykkfEjUucewj33nuvTYwjjzhGLrwg7N999932PiqYi/fGG28sKBMaW/K2Q4cOVsnZv3jxor0jTlJ5wWWXXWbeLia207lEvTDINGrUKPvlF2WLrPF0+YLXhPdQpswDc3lJKKYbaTKfOHEiePjhhy1/kPnFF18Mr9RO5qS4ssrdV8d8y9SRJE+WzgN6gGehZ8+eZszTISBzVMcAXUEfmZfSu3dvk4dnnT5HKSaPy2fmR5DPGM/oJPmNLNEy9dXV6dOn13gWfOuOb9oB2clD7iU/eT/zdBxZ+cNXNpO/i5VflLx1NYloO+Yolp++ZZGVP5B2j4+u+tCQfYEjKV2l6Dxk9adZZYFRhceZIdBFixaZLLQjjEi4D2rwLdPmToHhQ4ZT0HRsDzzwgFVgxsf/+eefgkoCKAiVEIsxSzlpDKigNAAug0uJK43777/frHy+tlEmGjrcm1G5iAvjBCVEZhSBhuiDDz6w63htcEej6IAsyBWXI95g0LDRyKPUjNHzXgwD0so5wqVLl4LPPvssePPNN+0Z4D18qf3yyy8WL/eRN6+//rq9g0qDvDSkvIvKjLxUKuTCACGtX3/9tc3cv+6666xxd3EyydRVHncPaSevSBsNPrInVeZi5QXcT3qp5LyXPI7yzTff2LOUAc9fe+211vG/9dZbBZUvi2eeeca2lIdLkwvkQzGSZGafBoiOrVgHURuZi8WVVe6+OuZTpnGKyZOl88BXKTJgvDMcgEcirmNAudMgIwfvY/v333/XKH9HMXmo60wA5/3o36effmrG3E8//VQdTym6mmT4+NYd37QDsiMTHRxp51dj0Y49K3+i+phGfehqMXwMn1LKIit/IO0eH131oSH7Akdaunx03pHWn2aVBYYZRjI6/fzzz9szvAMnAvc5PSylTJs7Ldq3b38p3K83KBgaFhQC13Olw1g/RCdklhNNsbwaUuZyyx/JI4ChDYbRknATp5sazTVdovEo8PjUF1jVuPsA67LSKfbFVU40xfJqSJnLLX8kjwC++H/88UfzAhULcU9CU6G5pks0Hg3i8RGFlLvHRwghhGiuyPARQgghRMVQpz8wFEIIIYRoSsjwEUIIIUTFIMNHCCGEEBWDDB8hhBBCVAy5Gz7850J0ETT+RjuOzz3NlbqkvdLySgghhMibAsOnWMfKT6/dz6994B9H3eJnSfjc05CkpZE8YTmCvKiPtDtjiq0QQgghksnd48NCaPxFtvub7GL43NPQsDZOEvGFAetCfaadv0sXQgghRDK1MnzwCrEIHF6GdevW2dom9UU8LlZFz5tDhw7Zgm3AYm/EydopbjVd/jXUkSZPdBhryZIlli/u3lK9RsSPF4pneYdPHrNGjRBCCCGSKdnwoeNnQUbW4WG4Zvfu3cG0adPqxSChsycuVttl1VmYOXNmvQ7pjBgxwuLs1atX9UJ1586ds22WPG4Yi+utWrWyhRKXL18ebNmyxRYVLEXuOXPmmDHGmke8gwUrhRBCCFE3ahg+rCaLceNC586dwytVsGQ/qy6z+CDDNWzxNLDSa95gLDA0xNIOxLNgwQI7n/eidM6jg4ene/fulh5WsGXpfnBDSFnyuGEs1irCY4PRgldo7dq1dp13+sCzBDw9GD28Y82aNeFVIYQQQtSWGoYPHS5eDRdYaTkKx8OGDase0iHwDB6OvMHjcfDgwfCoaigHb0rHjh3DM/ngPDp4eEjHsWPHgtatWwe9e/e2824IqVR5duzYYVvuwzjyXakabxNEF99z7xJCCCFE7alh+DCEQyftguv0o+Dxcb9McgHvRlOFISrAw4MRt2vXrqBbt252Di9OuYNHyg29CSGEECKZkuf4YAjg4XC/THIhySPRqVOncC+ZpHvwpvTp0yc8qvJG4XU5c+ZMeCYfnHHTv39/G6bCkGCIj2GvU6dO2TWoD3mKpf3s2bO27du3r23BTbQuBsbpvn37wiMhhBBCJHFZy5Yt/xvuB9OnT7fhle3bt4dngmDixIm23bhxo21h/PjxwaBBg8xDQsfP/sWLF4OTJ0+Gd1QxatSoYMCAAUHPnj1teGzMmDE2KTpK2j0YWMOHD7fz3DNlypSgXbt2werVqwuGgYD5SIsWLQqOHz9e45oPEyZMsPSQhhUrVtik5b/++iv47bffzLCDLHkwhJgDNXjwYBs2QxaGBo8cOWLPx0lKO/dzjTlB/yufoF+/fpbnXbt2rVE+gMdt8uTJQYsWLYK9e/eGZ4UQQggRp2SPDxNtly5dap4KjIN58+bZr52KeS6WLVtm3hQmBTNfqBhp9zCxlyEcjCt3jbidIVKMtGtp4NkhngsXLtgxMnF89OhRO4YseSZNmmT5wXVgn1+8JZGWdq7hYeJ58heDBm9UMZxhxdwkIYQQQiTTon379pfC/SYN/3nD8FR9/KxeCCGEEM2Dkj0+5UzUOyOEEEIIEafZGD7Mr5HhI4QQQog0ms1QlxBCCCFEFs1qqEsIIYQQIg0ZPkIIIYSoGGT4CCGEEKJikOEjhBBCiIpBho8QQgghKoaCX3WxHhRLH7BEQtu2be2fglmwc+HCheEdDQ9LUbAOFf+OPG7cOPs3ZJZoqO0/NNcWF3cS/IMz/2othBBCiPKlwOPD8gitWrWyDhzjYv/+/bacAksm1AaMlq1bt5rRUBswxFjKIbpYZ2PDgqAsW+ECxiHLTsjoEUIIIcqfAsNnxowZFliTCo/Khg0b7DwLdTYG/Ckh1GbRUQdGF8ZXUiiVQ4cOBYsXL7ZA/uAZO3DgQHhVCCGEEOVM0Tk+GBx4eebOnRts2bKl0bwZbrHPugxr7dmzx7xXScGXw4cPm4eHYTcHq6nDpk2bbCuEEEKI8qbGPzdH57IwrPP++++XZHhkzYUZOXJkuJcNC4/iUZk6daodu3djsDT0HJ9irFq1KmjTpo0WRhVCCCGaCDU8PhgUGCfz588PLly4YIZGKXN0oh6WnTt32rn169eX7GGBcl5/i/lHeKS2bdsWnhFCCCFEuZP4c/YdO3YEs2fPtv2hQ4fa1gcm+mI8EU6fPm3nmKPjzvmCYeHA8CK4Sc5su3TpYvtZ8FyxuT0u1JaxY8fadvPmzbYVQgghRPmTukgpxgXze5jnU5uftPOrLn6VVZuhKeYY8SuzJHzfSRqGDBkSHtWkVLkc5Mv58+erh+GEEEIIUf4UGD6zZs0KTpw4EZw7dy7o0KFDMHr0aBtuqo3hAnhbBg4caL9+Yr5QXeF95TDHhzk9M2fODFauXGm/gBNCCCFE06BgqKtHjx7WoWNcsAX+mK+2RgbP8bPvPIyecsJ5kDZu3GhbIYQQQjQNUoe6hBBCCCGaE4mTm4UQQgghmhsyfIQQQghRMcjwEUIIIUTFIMNHCCGEEBWDDB8hhBBCVAwyfIQQQghRMcjwEUIIIUTFIMNHCCGEEBWDDB8hhBBCVAwyfIQQQghRMcjwEUIIIUTFIMNHCCGEEBWDDB8hhBBCVAhB8P/R/14MiOj5vgAAAABJRU5ErkJggg=="},24048:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/\u7528VS2019\u7f16\u8bd1V8-3-6d3bb3226384e4c9a2fcfa588f533c27.png"},22091:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/\u7528VS2019\u7f16\u8bd1V8-0ac4423434510a03480bd1dbcb5a0df0.png"}}]);