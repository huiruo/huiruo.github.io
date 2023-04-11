"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[4110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=l,m=p["".concat(u,".").concat(d)]||p[d]||b[d]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(87462),l=(t(67294),t(3905));const o={title:"babel-\u7f16\u8bd1\u6784\u5efa",sidebar_position:7},a=void 0,s={unversionedId:"build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa",id:"build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa",title:"babel-\u7f16\u8bd1\u6784\u5efa",description:"\u5728\u5347\u7ea7@babel/preset-env\u4e4b\u524d\uff0c\u9879\u76ee\u4e2d\u7684\u914d\u7f6e\u662f\u8fd9\u6837\u7684\uff1a",source:"@site/programming-tech/build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa.md",sourceDirName:"build-AST-Babel",slug:"/build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa",permalink:"/build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/build-AST-Babel/babel-\u7f16\u8bd1\u6784\u5efa.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"babel-\u7f16\u8bd1\u6784\u5efa",sidebar_position:7},sidebar:"docs",previous:{title:"babel",permalink:"/build-AST-Babel/babel"},next:{title:"babel-loader",permalink:"/build-AST-Babel/babel-loader"}},u={},i=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2}],c={toc:i},p="wrapper";function b(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u5347\u7ea7@babel/preset-env\u4e4b\u524d\uff0c\u9879\u76ee\u4e2d\u7684\u914d\u7f6e\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  test: /\\.(ts|js)x?$/,\n  include: [\n    path.resolve(__dirname, '../src'),\n    /node_modules[\\\\/]antd/,\n  ],\n  use: [\n    {\n      loader: 'babel-loader',\n      options: {\n        cacheDirectory: true,\n        cacheCompression: false,\n      },\n    }, \n    {\n      loader: 'ts-loader',\n      options: {\n        transpileOnly: true,\n      },\n    }\n  ],\n}\n")),(0,l.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,l.kt)("p",null,"\u5347\u7ea7@babel/preset-env\u4e4b\u540e\uff0cbabel-loader\u7684\u914d\u7f6e\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,l.kt)("p",null,"babel.config.js\u4e2d@babel/preset-env\u7684\u914d\u7f6emodules\u53d8\u4e3aauto\u3002"),(0,l.kt)("p",null,"\u8fd9\u65f6\u5c31\u51fa\u73b0\u4e86\u6587\u7ae0\u5f00\u5934\u63d0\u5230\u7684\u5f02\u5e38\uff1aexports is undefined\u3002"),(0,l.kt)("p",null,"\u5f53\u8fd9\u4e2a\u5f02\u5e38\u51fa\u73b0\u540e\uff0c\u628amodules\u7684\u503c\u6539\u56de\u53bb\u53d8\u4e3acommonjs\uff0c\u5f02\u5e38\u53c8\u6d88\u5931\u4e86\u3002"),(0,l.kt)("p",null,"\u63a8\u8bba\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u95ee\u9898\u51fa\u5728\u6a21\u5757\u5305\u88c5\u4e0a\uff0c\u5177\u4f53\u5c31\u662fwebpack\u6253\u5305\u7684\u65f6\u5019\u6ce8\u5165\u7684\u5f62\u53c2\u53d8\u91cf\u4e2d\u6ca1\u6709exports\u3002\u800c\u5f15\u8d77webpack\u672a\u5728\u5305\u88c5\u65f6\u6ce8\u5165\u5f62\u53c2\u7684\u539f\u56e0\u5f88\u53ef\u80fd\u662f@babel/preset-env\u7684\u914d\u7f6emodules\u5bfc\u81f4\u7684\n")),(0,l.kt)("p",null,"babel.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const plugins = [\n  ['@babel/plugin-transform-runtime', {\n    corejs: 3,\n  }],\n  [\n    'import',\n    {\n      libraryName: 'antd',\n      libraryDirectory: 'lib',\n      style: true,\n    },\n    'ant',\n  ],\n];\n\nmodule.exports = {\n  presets: [\n    [\n      '@babel/preset-react', \n      {\n        runtime: 'automatic',\n      }\n    ],\n    [\n      '@babel/preset-env',\n      {\n        modules: 'commonjs', // \u5347\u7ea7\u4e4b\u540e\u8fd9\u91cc\u53d8\u4e3a'auto'\n        useBuiltIns: 'usage',\n        corejs: '3.9',\n      },\n    ],\n  ],\n  plugins,\n};\n")),(0,l.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u6a21\u5757\u8f6c\u6362\u7684\u5730\u65b9\n\u5173\u6ce8\u70b9\u8f6c\u79fb\u5230@babel/preset-env\u7684\u914d\u7f6e\u9879modules\u4e0a\u6765"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'modules:\n\n"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto".\n\nmodules\u503c\u4e3aumd:\n\u5176\u542b\u4e49\u4e3a\u5c06es module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\u8f6c\u6362\u6210umd\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027;\n\u5982\u679c\u662f\u975ees module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\uff0c\u5219\u4e0d\u4f1a\u8f6c\u6362\u5176\u6a21\u5757\u8bed\u6cd5\u548c\u6a21\u5757\u7279\u6027\uff0c\u53ea\u662f\u505a\u4e00\u5c42umd\u7684\u6a21\u5757\u5305\u88c5\u3002\n\nmodules\u503c\u4e3asystemjs:\n\u5176\u542b\u4e49\u4e3a\u5c06es module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\u8f6c\u6362\u6210systemjs\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027;\n\u5982\u679c\u662f\u975ees module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\uff0c\u5219\u4e0d\u4f1a\u8f6c\u6362\u5176\u6a21\u5757\u8bed\u6cd5\u548c\u6a21\u5757\u7279\u6027\uff0c\u53ea\u662f\u505a\u4e00\u5c42systemjs\u7684\u6a21\u5757\u5305\u88c5\u3002\n\nmodules\u503c\u4e3acommonjs\u6216\u8005cjs\uff08\u4e8c\u8005\u7b49\u4ef7\uff09:\n\u5176\u542b\u4e49\u4e3a\u5c06es module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\u8f6c\u6362\u6210commonjs\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\u3002\n\u5982\u679c\u662f\u975ees module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\uff0c\u5219\u539f\u6837\u8f93\u51fa\n\nmodules\u503c\u4e3afalse:\n\u5176\u542b\u4e49\u4e3a\uff1a\u4e0d\u8f6c\u6362es module;\u5982\u679c\u662f\u975ees module\u7684\u6a21\u5757\u8bed\u6cd5\u3001\u6a21\u5757\u7279\u6027\uff0c\u5219\u539f\u6837\u8f93\u51fa\u3002\n\nmodules\u503c\u4e3aauto:\n\u5176\u542b\u4e49\u4e3a\uff1a\u6839\u636ecaller\u53c2\u6570supportsStaticESM\u6765\u51b3\u5b9a\u8981\u4e0d\u8981\u8f6c\u6362es module\uff0c\u4e3atrue\u5219\u4e0d\u8f6c\u6362\uff0c\u4e3afalse\u5219\u8f6c\u6362\u6210commonjs\u3002caller\u53ef\u4ee5\u624b\u52a8\u4f20\u5165\uff0c\u4e5f\u53ef\u4ee5\u662floader\u6216\u8005plugin\u4f20\u5165\u7684\uff08\u5982babel-loader\uff09\u3002\u975e\u5fc5\u8981\u4e0d\u8981\u624b\u52a8\u4f20\u5165\uff0c\u56e0\u4e3a\u4f1a\u5f71\u54cdloader\u6216\u8005plugin\u7684\u884c\u4e3a\uff0c\u5bfc\u81f4\u4ea7\u7269\u548c\u9884\u671f\u6709\u5dee\u522b\u3002\n')),(0,l.kt)("p",null,"\u5c06babel-loader\u4e2d\u5904\u7406node_modules\u4e0b\u7684\u6a21\u5757\u7684\u914d\u7f6e\u5355\u72ec\u62ce\u51fa\u53bb\uff0c\u8986\u76d6\u516c\u5171\u7684babel.config.js\u914d\u7f6e"),(0,l.kt)("p",null,"\u7528babel-loader\u53bb\u5904\u7406node_modules\u7684\u539f\u56e0\u662f\u505a\u8bed\u6cd5\u517c\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    test: /\\.(ts|js)x?$/,\n    include: [\n      path.resolve(__dirname, '../src'),\n      // /node_modules[\\\\/]antd/, // \u4ece\u8fd9\u91cc\u53bb\u6389\n    ],\n    use: [\n      {\n        loader: 'babel-loader',\n        options: {\n          cacheDirectory: true,\n          cacheCompression: false,\n        },\n      }, {\n        loader: 'ts-loader',\n        options: {\n          transpileOnly: true,\n        },\n      }\n    ],\n  },\n  {\n    test: /\\.(ts|js)x?$/,\n    include: [\n      /node_modules[\\\\/]antd/,\n    ],\n    use: [\n      {\n        loader: 'babel-loader',\n        options: {\n          cacheDirectory: true,\n          cacheCompression: false,\n          presets: [\n            ['@babel/preset-env', {\n              modules: 'cjs',\n              useBuiltIns: 'usage',\n              corejs: '3.9',\n            }],\n          ],\n        },\n      },\n      {\n        loader: 'ts-loader',\n        options: {\n          transpileOnly: true,\n        },\n      }\n    ],\n  }\n]\n")))}b.isMDXComponent=!0}}]);