"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"api-watch",sidebar_position:8},l=void 0,o={unversionedId:"Vue/api-watch",id:"Vue/api-watch",title:"api-watch",description:"watch \u7279\u6027",source:"@site/programming-tech/Vue/api-watch.md",sourceDirName:"Vue",slug:"/Vue/api-watch",permalink:"/Vue/api-watch",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/api-watch.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"api-watch",sidebar_position:8},sidebar:"docs",previous:{title:"api-lifecycle-vue3-vue2\u533a\u522b",permalink:"/Vue/api-lifecycle-vue3-vue2\u533a\u522b"},next:{title:"api-computed-data\u533a\u522b",permalink:"/Vue/api-computed-data\u533a\u522b"}},c={},p=[{value:"watch \u7279\u6027",id:"watch-\u7279\u6027",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"watchEffect\u6709\u70b9\u50cfcomputed:",id:"watcheffect\u6709\u70b9\u50cfcomputed",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"watch-\u7279\u6027"},"watch \u7279\u6027"),(0,r.kt)("p",null,"\u6267\u884c\u65f6\u673a\uff1awatch \u7684\u4e00\u4e2a\u7279\u70b9\u662f\uff0c\u9ed8\u8ba4\u6700\u521d\u7ed1\u5b9a\u7684\u65f6\u5019\u662f\u4e0d\u4f1a\u6267\u884c\u7684\uff0c\u8981\u7b49\u5230\u503c\u6539\u53d8\u65f6\u624d\u6267\u884c\u76d1\u542c\u8ba1\u7b97\u3002 \u8bbe\u7f6eimmediate\u4e3atrue\u540e\uff0c\u88ab\u76d1\u542c\u503c\u521d\u59cb\u5316\u7684\u65f6\u5019\u5c31\u4f1a\u6267\u884c\u76d1\u542c\u51fd\u6570\uff0c\u4e5f\u5c31\u9875\u9762\u4e0a\u7684\u6570\u636e\u8fd8\u672a\u53d8\u5316\u7684\u65f6\u5019"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"watch: {\n  // \u76d1\u89c6\u7684\u5c5e\u6027\u540d\n  propertyName: {\n    // \u56de\u8c03\u51fd\u6570\uff0c\u5f53\u5c5e\u6027\u53d8\u5316\u65f6\u89e6\u53d1\n    handler(newVal, oldVal) {\n      // \u5728\u8fd9\u91cc\u5904\u7406\u5c5e\u6027\u53d8\u5316\u65f6\u7684\u903b\u8f91\n    },\n    // immediate\u9009\u9879\u53ef\u9009\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u5728\u7ec4\u4ef6\u521b\u5efa\u65f6\u4f1a\u7acb\u5373\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\n    immediate: false,\n    // deep\u9009\u9879\u53ef\u9009\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u5c06\u6df1\u5ea6\u9012\u5f52\u76d1\u89c6\u5bf9\u8c61\u7684\u53d8\u5316\n    deep: false\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u7f13\u5b58\uff0c\u6570\u636e\u53d8\uff0c\u76f4\u63a5\u4f1a\u89e6\u53d1\u76f8\u5e94\u7684\u64cd\u4f5c(\u65e0\u7f13\u5b58\u6027\uff0c\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u65f6\u503c\u4e0d\u53d8\u5316\u4e5f\u4f1a\u6267\u884c)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5177\u6709\u4e00\u5b9a\u7684\u60f0\u6027\uff0c\u7b2c\u4e00\u6b21\u9875\u9762\u5c55\u793a\u7684\u65f6\u5019\u4e0d\u4f1a\u6267\u884c\uff0c\u53ea\u6709\u6570\u636e\u53d8\u5316\u7684\u65f6\u5019\u624d\u4f1a\u6267\u884c,\u4f46\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6eimmediate\u4e3atrue, \u6765\u6307\u5b9a\u521d\u59cb\u65f6\u7acb\u5373\u6267\u884c\u7b2c\u4e00\u6b21")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u540c\u65f6\u76d1\u542c\u591a\u4e2a\u6570\u636e\u7684\u53d8\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e00\u4e2a\u503c\u53d8\u5316\u540e\u4f1a\u5f15\u8d77\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u6216\u8005\u4e00\u4e2a\u503c\u53d8\u5316\u4f1a\u5f15\u8d77\u4e00\u7cfb\u5217\u503c\u7684\u53d8\u5316\uff08\u4e00\u5bf9\u591a\uff09\uff0c\u7528watch\u66f4\u52a0\u65b9\u4fbf\u4e00\u4e9b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"watch \u652f\u6301\u5f02\u6b65\u4ee3\u7801\u800c computed \u4e0d\u652f\u6301\u3002"))),(0,r.kt)("p",null,"\u53ef\u8bbe\u7f6e\u5c5e\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"immediate\uff1a\u7ec4\u4ef6\u52a0\u8f7d\u7acb\u5373\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u6267\u884c\uff0c"),(0,r.kt)("li",{parentName:"ul"},"deep: \u6df1\u5ea6\u76d1\u542c\uff0c\u4e3a\u4e86\u53d1\u73b0\u5bf9\u8c61\u5185\u90e8\u503c\u7684\u53d8\u5316\uff0c\u590d\u6742\u7c7b\u578b\u7684\u6570\u636e\u65f6\u4f7f\u7528\uff0c\u4f8b\u5982\u6570\u7ec4\u4e2d\u7684\u5bf9\u8c61\u5185\u5bb9\u7684\u6539\u53d8\uff0c\u6ce8\u610f\u76d1\u542c\u6570\u7ec4\u7684\u53d8\u52a8\u4e0d\u9700\u8981\u8fd9\u4e48\u505a\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1adeep\u65e0\u6cd5\u76d1\u542c\u5230\u6570\u7ec4\u7684\u53d8\u52a8\u548c\u5bf9\u8c61\u7684\u65b0\u589e\uff0c\u53c2\u8003vue\u6570\u7ec4\u53d8\u5f02,\u53ea\u6709\u4ee5\u54cd\u5e94\u5f0f\u7684\u65b9\u5f0f\u89e6\u53d1\u624d\u4f1a\u88ab\u76d1\u542c\u5230\u3002")))),(0,r.kt)("p",null,"\u6ce8\u610f:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u76d1\u89c6reactive\u5b9a\u4e49\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u65f6\uff0coldValue\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6\uff0c\u5f3a\u5236\u5f00\u542f\u4e86\u6df1\u5ea6\u76d1\u89c6\uff08deep\u914d\u7f6e\u5931\u6548\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u76d1\u89c6reactive\u5b9a\u4e49\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u4e2d\u67d0\u4e2a\u5c5e\u6027\u65f6\uff0cdeep\u914d\u7f6e\u6709\u6548\u3002")),(0,r.kt)("p",null,"\u5e38\u7528\u573a\u666f\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," \u8fd8\u53ef\u4ee5\u505a\u4e00\u4e9b\u7279\u522b\u7684\u4e8b\u60c5\uff0c\u4f8b\u5982\u76d1\u542c\u9875\u9762\u8def\u7531\uff0c\u5f53\u9875\u9762\u8df3\u8f6c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u76f8\u5e94\u7684\u6743\u9650\u63a7\u5236\uff0c\u62d2\u7edd\u6ca1\u6709\u6743\u9650\u7684\u7528\u6237\u8bbf\u95ee\u9875\u9762\u3002"),(0,r.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8e\uff1a\u5f53\u4f60\u9700\u8981\u5728\u6570\u636e\u53d8\u5316\u65f6\u6267\u884c\u5f02\u6b65\u6216\u5177\u6709\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\u65f6\uff0c\u901a\u5e38\u7528\u4e8e\u76d1\u542c\u6570\u636e\u7684\u53d8\u5316\u5e76\u89e6\u53d1\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528watch\u6765\u76d1\u542c\u8f93\u5165\u5b57\u6bb5\u7684\u53d8\u5316\uff0c\u7136\u540e\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u6216\u6267\u884c\u590d\u6742\u7684\u903b\u8f91\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8e\uff1a\u5f53\u4f60\u9700\u8981\u6d3e\u751f\u8ba1\u7b97\u5c5e\u6027\uff08computed properties\uff09\u6216\u6839\u636e\u4e00\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027\u7684\u53d8\u5316\u6765\u8ba1\u7b97\u5176\u4ed6\u5c5e\u6027\u65f6\uff0ccomputed\u975e\u5e38\u6709\u7528\u3002\u8ba1\u7b97\u5c5e\u6027\u5177\u6709\u7f13\u5b58\u673a\u5236\uff0c\u53ea\u6709\u4f9d\u8d56\u7684\u5c5e\u6027\u53d8\u5316\u65f6\uff0c\u5b83\u4eec\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\uff1a\u8ba1\u7b97\u5c5e\u6027\u7528\u4e8e\u6d3e\u751f\u5c5e\u6027\u503c\uff0c\u6bd4\u5982\u8ba1\u7b97\u5546\u54c1\u7684\u603b\u4ef7")))),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"vue3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <script src=\"./vue3.global.js\"><\/script>\n  <div id=\"root\">\n    <div>\n      <button v-on:click='onClickText' class=\"btn\">Hello world,Click me</button>\n      <span>{{refData.myName}}-{{msg}}-{{info.msg2}}</span>\n      <div v-if=\"showDiv\">\n        \u88ab\u4f60\u53d1\u73b0\u4e86\n      </div>\n    </div>\n  </div>\n  <script>\n    const { ref, reactive, nextTick, watch } = Vue\n\n    Vue.createApp({\n      data() {\n        return {\n          msg: '\u6539\u53d8\u6211',\n          showDiv: false\n        }\n      },\n      methods: {\n        onClickText() {\n          console.log('test:', this, '-', this.refData)\n          this.msg = '\u52aa\u529b'\n          this.showDiv = !this.showDiv\n          this.info.msg2 = this.showDiv ? '\u76f4\u63a5\u70b9' : '\u5176\u4ed6\u9009\u62e9'\n        }\n      },\n\n      setup(props) {\n        const refData = ref({\n          myName: 'Ruo'\n        })\n\n        const info = reactive({\n          msg2: 'hello',\n        });\n\n        const ins = Vue.getCurrentInstance();\n\n        // \u76d1\u542c\u7684\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6700\u65b0\u7684\u503c\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8f93\u5165\u4e4b\u524d\u7684\u503c\n        watch(() => info.msg2, (value, oldValue) => {\n          console.log('watch value:', value, 'oldValue:', oldValue)\n          // immediate: true \u8868\u793a\u7b2c\u4e00\u6b21\u6e32\u67d3\u4e5f\u4f1a\u6267\u884c\n        }, { immediate: true }\n        )\n\n        return {\n          info,\n          refData\n        };\n      },\n\n    }).mount('#root')\n  <\/script>\n</body>\n")),(0,r.kt)("p",null,"vue2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js\"><\/script>\n</head>\n<body>\n  <div id=\"root\">\n    <div>\n      <button @click=\"onClickText\" class=\"btn\">Hello world, Click me</button>\n      <span>{{ msg }} - {{ refData.myName }} - {{ info.msg2 }}</span>\n      <div v-if=\"showDiv\">\n        \u88ab\u4f60\u53d1\u73b0\u4e86\n      </div>\n    </div>\n  </div>\n  <script>\n    new Vue({\n      el: '#root',\n      data: {\n        msg: '\u6539\u53d8\u6211',\n        showDiv: false,\n        refData: {\n          myName: 'Ruo'\n        },\n        info: {\n          msg2: 'hello'\n        }\n      },\n      methods: {\n        onClickText: function () {\n          console.log('test:', this);\n          this.msg = '\u52aa\u529b';\n          this.showDiv = !this.showDiv;\n          this.info.msg2 = this.showDiv ? '\u76f4\u63a5\u70b9' : '\u5176\u4ed6\u9009\u62e9';\n        }\n      },\n      watch: {\n        'info.msg2': function (value, oldValue) {\n          console.log('watch value:', value, 'oldValue:', oldValue);\n        }\n      }\n    });\n  <\/script>\n</body>\n</html>\n")),(0,r.kt)("h2",{id:"watcheffect\u6709\u70b9\u50cfcomputed"},"watchEffect\u6709\u70b9\u50cfcomputed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"computed\u6ce8\u91cd\u7684\u8ba1\u7b97\u51fa\u6765\u7684\u503c\uff08\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff09\uff0c\u6240\u4ee5\u5fc5\u987b\u8981\u5199\u8fd4\u56de\u503c"),(0,r.kt)("li",{parentName:"ol"},"watchEffect\u66f4\u6ce8\u91cd\u7684\u662f\u8fc7\u7a0b\uff08\u56de\u8c03\u51fd\u6570\u7684\u51fd\u6570\u4f53\uff09\uff0c\u6240\u4ee5\u4e0d\u7528\u5199\u8fd4\u56de\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. \u9996\u6b21\u52a0\u8f7d\u5c31\u4f1a\u76d1\u542c\n\n2. \u4e0d\u9700\u8981\u6307\u5b9a\u76d1\u542c\u7684\u6570\u636e\uff0c\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u5019\u5c31\u4f1a\u6267\u884c\u4e00\u6b21\u7528\u4ee5\u6536\u96c6\u4f9d\u8d56\uff0c\u800c\u540e\u6536\u96c6\u5230\u7684\u4f9d\u8d56\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u4e2a\u56de\u8c03\u624d\u4f1a\u518d\u6b21\u6267\u884c\n\n3. \u4e0d\u7528\u6307\u660e\u76d1\u89c6\u54ea\u4e2a\u5c5e\u6027\uff0c\u76d1\u89c6\u7684\u56de\u8c03\u4e2d\u7528\u5230\u54ea\u4e2a\u5c5e\u6027\uff0c\u90a3\u5c31\u76d1\u89c6\u54ea\u4e2a\u5c5e\u6027\n\u4e0d\u9700\u8981\u624b\u52a8\u4f20\u5165\u4f9d\u8d56\n\n4. \u9875\u9762\u7684\u9996\u6b21\u52a0\u8f7d\u5c31\u4f1a\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\uff0c\u6765\u81ea\u52a8\u83b7\u53d6\u4f9d\u8d56\n\u65e0\u6cd5\u83b7\u53d6\u5230\u539f\u503c\uff0c\u53ea\u80fd\u5f97\u5230\u6700\u65b0\u503c\n")))}m.isMDXComponent=!0}}]);