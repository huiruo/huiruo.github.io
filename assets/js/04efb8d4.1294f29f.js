"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[8253],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),d=i,b=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={},a=void 0,c={unversionedId:"build-webpack/dynamic-import/\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801",id:"build-webpack/dynamic-import/\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801",title:"\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801",description:"webpack_require.e",source:"@site/programming-tech/build-webpack/dynamic-import/\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801.md",sourceDirName:"build-webpack/dynamic-import",slug:"/build-webpack/dynamic-import/\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801",permalink:"/build-webpack/dynamic-import/\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/build-webpack/dynamic-import/\u6784\u5efa\u52a8\u6001\u7ec4\u4ef6\u6e90\u7801.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u52a8\u6001\u52a0\u8f7d",permalink:"/build-webpack/dynamic-import/\u52a8\u6001\u52a0\u8f7d"},next:{title:"\uff08\u61d2\u52a0\u8f7d\uff09\u5b9e\u73b0",permalink:"/build-webpack/dynamic-import/vue-react-\u61d2\u52a0\u8f7d"}},s={},u=[],p={toc:u},l="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"__webpack_require__.e"),"\nwebpack\\lib\\runtime\\EnsureChunkRuntimeModule.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    /**\n     * @returns {string} runtime code\n     */\n    generate() {\n        const { runtimeTemplate } = this.compilation;\n        // Check if there are non initial chunks which need to be imported using require-ensure\n        if (this.runtimeRequirements.has(RuntimeGlobals.ensureChunkHandlers)) {\n            const handlers = RuntimeGlobals.ensureChunkHandlers;\n            console.log(\'\u7f16\u8bd1\u7684\u65f6\u5019:generate====>\')\n            return Template.asString([\n                `${handlers} = {};`,\n                "// This file contains only the entry chunk.",\n                "// The chunk loading function for additional chunks",\n                `${RuntimeGlobals.ensureChunk} = ${runtimeTemplate.basicFunction(\n                    "chunkId",\n                    [\n                        `return Promise.all(Object.keys(${handlers}).reduce(${runtimeTemplate.basicFunction(\n                            "promises, key",\n                            [`${handlers}[key](chunkId, promises);`, "return promises;"]\n                        )}, []));`\n                    ]\n                )};`\n            ]);\n        } else {\n            // There ensureChunk is used somewhere in the tree, so we need an empty requireEnsure\n            // function. This can happen with multiple entrypoints.\n            return Template.asString([\n                "// The chunk loading function for additional chunks",\n                "// Since all referenced chunks are already included",\n                "// in this file, this function is empty here.",\n                `${RuntimeGlobals.ensureChunk} = ${runtimeTemplate.returningFunction(\n                    "Promise.resolve()"\n                )};`\n            ]);\n        }\n    }\n')),(0,i.kt)("p",null,"\u7f16\u8bd1\u7684\u65f6\u5019\u6784\u5efajsonp,webpack\\lib\\runtime\\LoadScriptRuntimeModule.js"),(0,i.kt)("p",null,"log\u6253\u5370code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\u7f16\u8bd1\u7684\u65f6\u5019\u6784\u5efajsonp\u8bf7\u6c42: script = document.createElement('script');\n\nscript.charset = 'utf-8';\nscript.timeout = 120;\nif (__webpack_require__.nc) {\n        script.setAttribute(\"nonce\", __webpack_require__.nc);\n}\nscript.setAttribute(\"data-webpack\", dataWebpackPrefix + key);\nscript.src = url;\n")),(0,i.kt)("p",null,"\u6784\u5efa\u4e2d\u7684\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    generate() {\n        const { compilation } = this;\n        const { runtimeTemplate, outputOptions } = compilation;\n        const {\n            scriptType,\n            chunkLoadTimeout: loadTimeout,\n            crossOriginLoading,\n            uniqueName,\n            charset\n        } = outputOptions;\n        const fn = RuntimeGlobals.loadScript;\n\n        const { createScript } =\n            LoadScriptRuntimeModule.getCompilationHooks(compilation);\n\n        const code = Template.asString([\n            "script = document.createElement(\'script\');",\n            scriptType ? `script.type = ${JSON.stringify(scriptType)};` : "",\n            charset ? "script.charset = \'utf-8\';" : "",\n            `script.timeout = ${loadTimeout / 1000};`,\n            `if (${RuntimeGlobals.scriptNonce}) {`,\n            Template.indent(\n                `script.setAttribute("nonce", ${RuntimeGlobals.scriptNonce});`\n            ),\n            "}",\n            uniqueName\n                ? \'script.setAttribute("data-webpack", dataWebpackPrefix + key);\'\n                : "",\n            `script.src = ${this._withCreateScriptUrl\n                ? `${RuntimeGlobals.createScriptUrl}(url)`\n                : "url"\n            };`,\n            crossOriginLoading\n                ? crossOriginLoading === "use-credentials"\n                    ? \'script.crossOrigin = "use-credentials";\'\n                    : Template.asString([\n                        "if (script.src.indexOf(window.location.origin + \'/\') !== 0) {",\n                        Template.indent(\n                            `script.crossOrigin = ${JSON.stringify(crossOriginLoading)};`\n                        ),\n                        "}"\n                    ])\n                : ""\n        ]);\n        console.log(\'\u7f16\u8bd1\u7684\u65f6\u5019\u6784\u5efajsonp\u8bf7\u6c42:\', code)\n    // ...\n')))}m.isMDXComponent=!0}}]);