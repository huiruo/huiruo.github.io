"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[9155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),v=r,d=p["".concat(c,".").concat(v)]||p[v]||m[v]||o;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},92818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i="vuex\u4f7f\u7528",s={unversionedId:"Vue/vue2/vuex\u72b6\u6001\u7ba1\u7406",id:"Vue/vue2/vuex\u72b6\u6001\u7ba1\u7406",title:"vuex\u4f7f\u7528",description:"vuex\u6709\u54ea\u51e0\u79cd\u5c5e\u6027",source:"@site/programming-tech/Vue/vue2/03-vuex\u72b6\u6001\u7ba1\u7406.md",sourceDirName:"Vue/vue2",slug:"/Vue/vue2/vuex\u72b6\u6001\u7ba1\u7406",permalink:"/Vue/vue2/vuex\u72b6\u6001\u7ba1\u7406",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/Vue/vue2/03-vuex\u72b6\u6001\u7ba1\u7406.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"\u8fc7\u6e21\u52a8\u753b\u5b9e\u73b0\u539f\u7406",permalink:"/Vue/vue2/vue\u52a8\u753b"},next:{title:"watch",permalink:"/Vue/vue2/watch"}},c={},u=[{value:"1.Mutation\uff1a\u4e13\u6ce8\u4e8e\u4fee\u6539State\uff0c\u7406\u8bba\u4e0a\u662f\u4fee\u6539State\u7684\u552f\u4e00\u9014\u5f84\u3002",id:"1mutation\u4e13\u6ce8\u4e8e\u4fee\u6539state\u7406\u8bba\u4e0a\u662f\u4fee\u6539state\u7684\u552f\u4e00\u9014\u5f84",level:3},{value:"2. Action",id:"2-action",level:3},{value:"mapActions \u4f7f\u7528\u65b9\u6cd5",id:"mapactions-\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"vuex\u7684state\u548cgetters\u662f\u5982\u4f55\u6620\u5c04\u5230\u5404\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u54cd\u5e94\u5f0f\u66f4\u65b0\u72b6\u6001\u5462\uff1f",id:"vuex\u7684state\u548cgetters\u662f\u5982\u4f55\u6620\u5c04\u5230\u5404\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u54cd\u5e94\u5f0f\u66f4\u65b0\u72b6\u6001\u5462",level:2}],l={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vuex\u4f7f\u7528"},"vuex\u4f7f\u7528"),(0,r.kt)("p",null,"vuex\u6709\u54ea\u51e0\u79cd\u5c5e\u6027\nstate => \u57fa\u672c\u6570\u636e(\u6570\u636e\u6e90\u5b58\u653e\u5730)\ngetters => \u4ece\u57fa\u672c\u6570\u636e\u6d3e\u751f\u51fa\u6765\u7684\u6570\u636e\nmutations => \u63d0\u4ea4\u66f4\u6539\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u540c\u6b65\uff01\nactions => \u50cf\u4e00\u4e2a\u88c5\u9970\u5668\uff0c\u5305\u88f9mutations\uff0c\u4f7f\u4e4b\u53ef\u4ee5\u5f02\u6b65\u3002\nmodules => \u6a21\u5757\u5316Vuex"),(0,r.kt)("p",null,"\u8f85\u52a9\u51fd\u6570\uff1a\nVuex\u63d0\u4f9b\u4e86mapState\u3001MapGetters\u3001MapActions\u3001mapMutations\u7b49\u8f85\u52a9\u51fd\u6570"),(0,r.kt)("h3",{id:"1mutation\u4e13\u6ce8\u4e8e\u4fee\u6539state\u7406\u8bba\u4e0a\u662f\u4fee\u6539state\u7684\u552f\u4e00\u9014\u5f84"},"1.Mutation\uff1a\u4e13\u6ce8\u4e8e\u4fee\u6539State\uff0c\u7406\u8bba\u4e0a\u662f\u4fee\u6539State\u7684\u552f\u4e00\u9014\u5f84\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u4e2a\u56fa\u6709\u53c2\u6570 state\uff0c\u63a5\u6536\u7684\u662f Vuex \u4e2d\u7684 state \u5bf9\u8c61"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u4e2d\u63d0\u4ea4 Mutation\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"this.$store.commit('mutation\u51fd\u6570\u540d'\uff0cdata)\n")),(0,r.kt)("h3",{id:"2-action"},"2. Action"),(0,r.kt)("p",null,"\u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8emutations \u53ea\u80fd\u662f\u540c\u6b65\u64cd\u4f5c,action \u53ef\u4ee5\u5305\u542b\u5f02\u6b65\u64cd\u4f5c\uff0c\u800c\u4e14\u53ef\u4ee5\u901a\u8fc7 action \u6765\u63d0\u4ea4 mutations"),(0,r.kt)("p",null,"action \u4e5f\u6709\u4e00\u4e2a\u56fa\u6709\u53c2\u6570 context\uff0c\u4f46\u662f context \u662f state \u7684\u7236\u7ea7\uff0c\u5305\u542b state\u3001getters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.$store.dispatch('action\u4e2d\u7684\u51fd\u6570\u540d'\uff0cdata)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment (state) {\n      state.count++\n    }\n  },\n  actions: {\n    increment (context) {    //\u5b98\u65b9\u7ed9\u51fa\u7684\u6307\u5b9a\u5bf9\u8c61, \u6b64\u5904context\u53ef\u4ee5\u7406\u89e3\u4e3astore\u5bf9\u8c61\n      context.commit('increment');\n    }\n  }\n})\n")),(0,r.kt)("h2",{id:"mapactions-\u4f7f\u7528\u65b9\u6cd5"},"mapActions \u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// mapActions \u4f7f\u7528\u65b9\u6cd5\u4e00\n...mapActions([\n   'asyncDecrease' // \u5c06 `this.asyncDecrease()` \u6620\u5c04\u4e3a `this.$store.dispatch('asyncDecrease')`\n]),\n\n// mapActions \u4f7f\u7528\u65b9\u6cd5\u4e8c\n...mapActions({\n    asyncDecrease: 'asyncDecrease' // \u5c06 `this.asyncDecrease()` \u6620\u5c04\u4e3a `this.$store.dispatch('asyncDecrease')`\n}),\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"methods: {\n...mapActions('examine', [\n  'setDialogInnerDataDepart',\n  'setDialogRightCustomer',\n  'setUniqueCheckedListRight',\n  'setCheckedListRight',\n  'setDivLogicTypeNull',\n  'setDivStaffSelectNull',\n  'selectStaffAction',\n  'selectDepartAction',\n  'setCheckedList',\n  'setInitDataRightAdjust'\n]),\n")),(0,r.kt)("h1",{id:"vuex-\u539f\u7406"},"vuex \u539f\u7406"),(0,r.kt)("h2",{id:"vuex\u7684state\u548cgetters\u662f\u5982\u4f55\u6620\u5c04\u5230\u5404\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u54cd\u5e94\u5f0f\u66f4\u65b0\u72b6\u6001\u5462"},"vuex\u7684state\u548cgetters\u662f\u5982\u4f55\u6620\u5c04\u5230\u5404\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u54cd\u5e94\u5f0f\u66f4\u65b0\u72b6\u6001\u5462\uff1f"),(0,r.kt)("p",null,"\u4ece\u6e90\u7801\uff0c\u53ef\u4ee5\u770b\u51faVuex\u7684state\u72b6\u6001\u662f\u54cd\u5e94\u5f0f\uff0c\u662f\u501f\u52a9vue\u7684data\u662f\u54cd\u5e94\u5f0f\uff0c\u5c06state\u5b58\u5165vue\u5b9e\u4f8b\u7ec4\u4ef6\u7684data\u4e2d\uff1bVuex\u7684getters\u5219\u662f\u501f\u52a9vue\u7684\u8ba1\u7b97\u5c5e\u6027computed\u5b9e\u73b0\u6570\u636e\u5b9e\u65f6\u76d1\u542c\u3002"))}m.isMDXComponent=!0}}]);