"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[1618],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"v-for\u7684key",sidebar_position:2},i=void 0,l={unversionedId:"Vue/v-for\u7684key",id:"Vue/v-for\u7684key",title:"v-for\u7684key",description:"\u901a\u8fc7 key \u7ba1\u7406\u72b6\u6001",source:"@site/programming-tech/Vue/v-for\u7684key.md",sourceDirName:"Vue",slug:"/Vue/v-for\u7684key",permalink:"/Vue/v-for\u7684key",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/Vue/v-for\u7684key.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"v-for\u7684key",sidebar_position:2},sidebar:"docs",previous:{title:"patch-diff",permalink:"/Vue/patch-diff"},next:{title:"proxy",permalink:"/Vue/proxy"}},c={},p=[{value:"\u901a\u8fc7 key \u7ba1\u7406\u72b6\u6001",id:"\u901a\u8fc7-key-\u7ba1\u7406\u72b6\u6001",level:2},{value:"\u76f8\u5173\u51fd\u6570",id:"\u76f8\u5173\u51fd\u6570",level:2},{value:"\u66f4\u65b0\u6d41\u7a0b:",id:"\u66f4\u65b0\u6d41\u7a0b",level:2},{value:"patchChildren\u6267\u884c\u6709key\u548c\u65e0key",id:"patchchildren\u6267\u884c\u6709key\u548c\u65e0key",level:2}],s={toc:p},d="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7-key-\u7ba1\u7406\u72b6\u6001"},"\u901a\u8fc7 key \u7ba1\u7406\u72b6\u6001"),(0,a.kt)("p",null,"key\u7ed9 Vue \u4e00\u4e2a\u63d0\u793a\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u8ddf\u8e2a\u6bcf\u4e2a\u8282\u70b9\u7684\u6807\u8bc6\uff0c\u4ece\u800c\u91cd\u7528\u548c\u91cd\u65b0\u6392\u5e8f\u73b0\u6709\u7684\u5143\u7d20"),(0,a.kt)("p",null,"Vue \u9ed8\u8ba4\u6309\u7167\u201c\u5c31\u5730\u66f4\u65b0\u201d\u7684\u7b56\u7565\u6765\u66f4\u65b0\u901a\u8fc7 v-for \u6e32\u67d3\u7684\u5143\u7d20\u5217\u8868\u3002"),(0,a.kt)("h2",{id:"\u76f8\u5173\u51fd\u6570"},"\u76f8\u5173\u51fd\u6570"),(0,a.kt)("p",null,"\u603b\u7ed3\uff1a\u6dfb\u52a0key\u4ee5\u540e\uff0cvue\u4f1a\u901a\u8fc7key\u6765\u6267\u884cdiff\u7b97\u6cd5\u5339\u914d\u65b0\u65e7\u7ed3\u70b9\uff0c\u8ba1\u7b97\u51fa\u7ed3\u70b9\u6700\u5927\u7684\u590d\u7528\uff0c\u6548\u7387\u66f4\u9ad8\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709key--\x3epatchKeyedChildren"),(0,a.kt)("li",{parentName:"ul"},"\u65e0key--\x3epatchUnkeyedChildren")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"root\">\n    <li v-for=\"item in list\" :key=\"item.key\">\n        {{item.val}}{{item.key}}\n    </li>\n    <button v-on:click='onAdd' class=\"btn\">Add</button>\n    <button v-on:click='onChangeVal(0)' class=\"btn\">Change</button>\n</div>\n<script>\nVue.createApp({\n    data() {\n        return {\n            list: [\n                {\n                    key: 1,\n                    val: 'li a',\n                    isShow: true\n                },\n            ]\n        }\n    },\n    methods: {\n        onAdd() {\n            console.log('=\u70b9\u51fb\u4e86\u6309\u94ae:', this.list)\n            this.list.push({\n                key: 4,\n                val: 'li d',\n                isShow: true\n            })\n        },\n        onChangeVal(index) {\n            console.log('=\u70b9\u51fb\u4e86\u6309\u94ae:', index)\n            this.list[index].val = 'li zzz'\n            this.list.push({\n                key: 4,\n                val: 'li d',\n                isShow: true\n            })\n        }\n    },\n}).mount('#root')\n<\/script>\n")),(0,a.kt)("h2",{id:"\u66f4\u65b0\u6d41\u7a0b"},"\u66f4\u65b0\u6d41\u7a0b:"),(0,a.kt)("mermaid",{value:'flowchart TD\nA1(componentUpdateFn)--nextTree\u6700\u65b0vnode--\x3eA2("patch(prevTree, nextTree")--\u7b2c1\u6b21patch\u8d70case Fragment--\x3eA3("processFragment(n1,n2,container")--\x3eA4("patchBlockChildren(n1.dynamicChildren,dynamicChildren")\n\nA4--\x3eA5("patch(oldVNode,newVNode,container")--\u7b2c2\u6b21patch\u8d70case Fragment--\x3eA6("processFragment(n1,n2,container")--\u8fd9\u91cc\u4e0d\u4e00\u6837--\x3eB1\n\nB1("patchChildren(n1,n2,container")--\x3eB2("\u524d\u63d0patchFlag>0")\n\nB2--\u6709key--\x3eB4("patchKeyedChildren(c1,c2,container")\nB2--\u65e0key--\x3eB5("patchUnkeyedChildren(c1,c2,container")'}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {\n    // \u7701\u7565..\n    if (n1 == null) {\n        // \u521d\u59cb\u5316\u6d41\u7a0b\u7701\u7565..\n        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n    }\n    else {\n        if (patchFlag > 0 &&\n            patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */ &&\n            dynamicChildren &&\n            n1.dynamicChildren) {\n            console.log('=processFragment\u8c03\u7528patchBlockChildren=\u66f4\u65b0')\n            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);\n            if (parentComponent && parentComponent.type.__hmrId) {\n                traverseStaticChildren(n1, n2);\n            }\n            else if (\n                n2.key != null ||\n                (parentComponent && n2 === parentComponent.subTree)) {\n                traverseStaticChildren(n1, n2, true /* shallow */);\n            }\n        }\n        else {\n            patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n        }\n    }\n}; \n")),(0,a.kt)("h2",{id:"patchchildren\u6267\u884c\u6709key\u548c\u65e0key"},"patchChildren\u6267\u884c\u6709key\u548c\u65e0key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {\n        const c1 = n1 && n1.children;\n        const prevShapeFlag = n1 ? n1.shapeFlag : 0;\n        const c2 = n2.children;\n        const { patchFlag, shapeFlag } = n2;\n        // fast path\n        if (patchFlag > 0) {\n            if (patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */) {\n                // this could be either fully-keyed or mixed (some keyed some not)\n                // presence of patchFlag means children are guaranteed to be arrays\n                console.log('=patchChildren\u8c03\u75281,\u6709key->patchKeyedChildren',)\n                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n                return;\n            }\n            else if (patchFlag & 256 /* PatchFlags.UNKEYED_FRAGMENT */) {\n                // unkeyed\n                console.log('=patchChildren\u8c03\u75282,\u6ca1key->patchUnkeyedChildren',)\n                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n                return;\n            }\n        }\n        // children has 3 possibilities: text, array or no children.\n        if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {\n            // text children fast path\n            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {\n                unmountChildren(c1, parentComponent, parentSuspense);\n            }\n            if (c2 !== c1) {\n                hostSetElementText(container, c2);\n            }\n        }\n        else {\n            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {\n                // prev children was array\n                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {\n                    // two arrays, cannot assume anything, do full diff\n                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n                }\n                else {\n                    // no new children, just unmount old\n                    unmountChildren(c1, parentComponent, parentSuspense, true);\n                }\n            }\n            else {\n                // prev children was text OR null\n                // new children is array OR null\n                if (prevShapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {\n                    hostSetElementText(container, '');\n                }\n                // mount new if array\n                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {\n                    console.log('mountChildren=2')\n                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);\n                }\n            }\n        }\n    };\n")))}h.isMDXComponent=!0}}]);