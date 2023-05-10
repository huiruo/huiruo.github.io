"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[7425],{3905:(e,r,o)=>{o.d(r,{Zo:()=>i,kt:()=>u});var n=o(67294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?c(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var a=n.createContext({}),k=function(e){var r=n.useContext(a),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},i=function(e){var r=k(e.components);return n.createElement(a.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=k(o),s=t,u=d["".concat(a,".").concat(s)]||d[s]||m[s]||c;return o?n.createElement(u,p(p({ref:r},i),{},{components:o})):n.createElement(u,p({ref:r},i))}));function u(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=o.length,p=new Array(c);p[0]=s;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l[d]="string"==typeof e?e:t,p[1]=l;for(var k=2;k<c;k++)p[k]=o[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},56924:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>k});var n=o(87462),t=(o(67294),o(3905));const c={},p=void 0,l={unversionedId:"docker/Docker\u57fa\u7840",id:"docker/Docker\u57fa\u7840",title:"Docker\u57fa\u7840",description:"docker\u7684\u6982\u5ff5",source:"@site/programming-tech/docker/03-Docker\u57fa\u7840.md",sourceDirName:"docker",slug:"/docker/Docker\u57fa\u7840",permalink:"/docker/Docker\u57fa\u7840",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/programming-tech/docker/03-Docker\u57fa\u7840.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Dockerfile\u547d\u4ee4",permalink:"/docker/Dockerfile\u547d\u4ee4"},next:{title:"README",permalink:"/\u8bbe\u8ba1\u6a21\u5f0f/"}},a={},k=[{value:"docker\u7684\u6982\u5ff5",id:"docker\u7684\u6982\u5ff5",level:2},{value:"\u5e38\u7528\u7684\u6307\u4ee4",id:"\u5e38\u7528\u7684\u6307\u4ee4",level:3},{value:".dockerignore",id:"dockerignore",level:2},{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"Docker Compose",id:"docker-compose",level:2}],i={toc:k},d="wrapper";function m(e){let{components:r,...o}=e;return(0,t.kt)(d,(0,n.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"docker\u7684\u6982\u5ff5"},"docker\u7684\u6982\u5ff5"),(0,t.kt)("p",null,"image: \u955c\u50cf\uff0c\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u8bf4\u660e\u4e66\uff0c\u544a\u8bc9docker\u600e\u4e48\u53bb\u505a\u51fa\u4e00\u4e2a\u8fd9\u6837\u7684\u5e94\u7528\u51fa\u6765\uff1b\ncontainer\uff1a \u5bb9\u5668\uff0c\u6839\u636e\u8fd9\u4e2aimage\u751f\u6210\uff0c\u751f\u6210\u4ee5\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u53bb\u4f7f\u7528\uff1b"),(0,t.kt)("h3",{id:"\u5e38\u7528\u7684\u6307\u4ee4"},"\u5e38\u7528\u7684\u6307\u4ee4"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"docker image ls <\u67e5\u770b\u955c\u50cf\u5217\u8868>"),(0,t.kt)("li",{parentName:"ul"},"docker run -d -p 3000:8000 \u5217\u8868\u540d <\u5c06\u955c\u50cf8000\u8fd0\u884c\u5728\u672c\u673a\u76843000\u7aef\u53e3\u540e\u53f0\u8fd0\u884c\uff0c\u4ea7\u751f\u4e00\u4e2a\u5bb9\u5668>"),(0,t.kt)("li",{parentName:"ul"},"docker ps -a <\u67e5\u770b\u5bb9\u5668\u7684\u6267\u884c\u60c5\u51b5>"),(0,t.kt)("li",{parentName:"ul"},"docker build -t \u955c\u50cf\u540d\u79f0 . <\u521b\u5efa\u4e00\u4e2a\u955c\u50cf\uff0c\u70b9\u6807\u793a\u6587\u4ef6\u7684\u6587\u4ef6\u4f4d\u7f6e>"),(0,t.kt)("li",{parentName:"ul"},"docker container stop \u5bb9\u5668id <\u6682\u505c\u4e00\u4e2a\u670d\u52a1>")),(0,t.kt)("h2",{id:"dockerignore"},".dockerignore"),(0,t.kt)("p",null,"Docker \u8fd0\u884c\u65f6\uff0c\u4f1a\u5ffd\u7565\u6389\u672c\u5730\u5de5\u4f5c\u7a7a\u95f4\u91cc\u88ab\u914d\u7f6e\u5230 .dockerignore \u4e2d\u7684\u6587\u4ef6\u3002\n\u5ffd\u7565\u6389\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u4e5f\u53ef\u4ee5\u63d0\u9ad8 docker \u7684\u6784\u5efa\u901f\u5ea6\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"node_modules\n")),(0,t.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 compose_test\n    \u251c\u2500\u2500 docker\n    \u2502   \u2514\u2500\u2500 docker-compose.yml\n    \u251c\u2500\u2500 Dockerfile\n    \u251c\u2500\u2500 node_modules\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 server.js\n")),(0,t.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,t.kt)("p",null,"Docker Compose \u662f Docker \u7684\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 YML \u6587\u4ef6\u914d\u7f6e\u6765\u8fd0\u884c Docker\u3002\n\u5c31\u662f\u53ef\u4ee5\u8ba9\u4f60\u628a docker \u547d\u4ee4\u914d\u7f6e\u5199\u5728\u914d\u7f6e\u6587\u4ef6\u91cc\u7136\u540e\u8fd0\u884c\u7684\u5de5\u5177\u3002"),(0,t.kt)("p",null,"\u5b9a\u4e49docker-compose\u811a\u672c\n\u6587\u6863\uff1a"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"docker-compose.yml:"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre"},"# compose \u4f9d\u8d56\u7684\u7248\u672c\nversion: '3'\n# \u6307\u5b9a\u5bb9\u5668\u540d\u79f0\ncontainer_name: 'my-docker'\n# \u6784\u5efa\u8bbe\u7f6e\nservices:\n  web:\n    # \u5f53\u524d\u76ee\u5f55\u6784\u5efa\n    build: .\n    # \u7aef\u53e3\u6620\u5c04\n    ports:\n      - '80:80'\n"))),(0,t.kt)("p",null,"\u5b9e\u4f8b\uff1a"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"docker-compose.yml:"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre"},"version: '3'\nservices:\n  web:\n    build: ../\n    ports:\n     - \"5000:5000\"\n  redis:\n    image: redis:3.0.7\n")),(0,t.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2acompose\u6587\u4ef6\u5b9a\u4e49\u4e86\u4e24\u4e2a\u670d\u52a1\uff0c\u5373\u5b9a\u4e49\u4e86web\u548credis\u4e24\u4e2a\u5bb9\u5668\u3002\n\u60a8\u4e0d\u9700\u8981\u5b89\u88c5Redis\uff0c\u7531Docker\u955c\u50cf\u63d0\u4f9b\u7684\u3002"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre"},"web\u5bb9\u5668\uff1a \n    \u4f7f\u7528\u5f53\u524ddocker-compose.yml\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u7684\u4e0a\u7ea7\u76ee\u5f55\uff08compose_test/Dockerfile\uff09\u4e2d\u7684Dockerfile\u6784\u5efa\u6620\u50cf\u3002 \n    \u5c06\u5bb9\u5668\u4e0a\u7684\u66b4\u9732\u7aef\u53e35000\u6620\u5c04\u5230\u4e3b\u673a\u4e0a\u7684\u7aef\u53e35000\u3002 \u6211\u4eec\u4f7f\u7528Flask Web\u670d\u52a1\u5668\u7684\u9ed8\u8ba4\u7aef\u53e35000\u3002 \n"))),(0,t.kt)("p",null,"redis\u5bb9\u5668\uff1a\nredis\u670d\u52a1\u4f7f\u7528\u4eceDocker Hub\u63d0\u53d6\u7684\u5b98\u65b9redis\u955c\u50cf3.0.7\u7248\u672c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\n## Dockerfile\n\u4e00\u4e2a\u5bb9\u5668\u4e00\u4e2aDockerfile\u6587\u4ef6\nDockerfile \u5c31\u662f\u6765\u544a\u8bc9 Docker \u600e\u4e48\u521b\u5efa\u955c\u50cf\u4ee5\u53ca\u521b\u5efa\u5b8c\u6210\u540e\u7684\u5404\u79cd\u64cd\u4f5c\n\n> Dockerfile\n")),(0,t.kt)("p",null,"FROM        node            <\u7ee7\u6210>\nCOpy        app/app         <\u62f7\u8d1d>\nWORKDIR     /app            <\u5de5\u4f5c\u76ee\u5f55>\nRUN         npm install     <\u6267\u884c\u547d\u4ee4\uff0c\u5728\u7f16\u8bd1\u9636\u6bb5\u6267\u884c>\nEXPOSE      3000            <\u66b4\u9732\u4e00\u4e2a\u7aef\u53e3>\nCMD         node app.js     <\u547d\u4ee4\uff0c\u5bb9\u5668\u8fd0\u884c\u9636\u6bb5\u7684\u547d\u4ee4>"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"")),(0,t.kt)("h1",{id:"\u955c\u50cf\u662f-node-\u7684-1490-\u7248\u672c\u540e\u7eed\u6307\u4ee4\u90fd\u5c06\u5728\u8fd9\u4e2a\u73af\u5883\u4e0b\u8fd0\u884c"},"\u955c\u50cf\u662f node \u7684 14.9.0 \u7248\u672c\uff0c\u540e\u7eed\u6307\u4ee4\u90fd\u5c06\u5728\u8fd9\u4e2a\u73af\u5883\u4e0b\u8fd0\u884c"),(0,t.kt)("p",null,"FROM node:14.9.0"),(0,t.kt)("h1",{id:"\u5de5\u4f5c\u7a7a\u95f4\u8bbe\u7f6e\u4e3a-app\u8fd9\u6307\u7684\u662f\u5bb9\u5668\u5185\u7684\u5de5\u4f5c\u7a7a\u95f4"},"\u5de5\u4f5c\u7a7a\u95f4\u8bbe\u7f6e\u4e3a /app\uff0c\u8fd9\u6307\u7684\u662f\u5bb9\u5668\u5185\u7684\u5de5\u4f5c\u7a7a\u95f4"),(0,t.kt)("p",null,"WORKDIR /app"),(0,t.kt)("h1",{id:"\u62f7\u8d1d\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684-packagejson---\u5bb9\u5668\u7684\u5de5\u4f5c\u7a7a\u95f4-app"},"\u62f7\u8d1d\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684 package.json -> \u5bb9\u5668\u7684\u5de5\u4f5c\u7a7a\u95f4 /app"),(0,t.kt)("p",null,"COPY package.json /app"),(0,t.kt)("h1",{id:"\u8bbe\u7f6e\u955c\u50cf\u6e90\u5e76\u5b89\u88c5\u5305"},"\u8bbe\u7f6e\u955c\u50cf\u6e90\u5e76\u5b89\u88c5\u5305"),(0,t.kt)("p",null,"RUN npm i --registry=",(0,t.kt)("a",{parentName:"p",href:"http://r.npm.taobao.com"},"http://r.npm.taobao.com")," && npm install"),(0,t.kt)("h1",{id:"\u590d\u5236\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u5230-app"},"\u590d\u5236\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u5230 /app"),(0,t.kt)("p",null,"COPY . /app"),(0,t.kt)("h1",{id:"\u58f0\u660e-80-\u7aef\u53e3\u4ec5\u4ec5\u544a\u8bc9\u955c\u50cf\u4f7f\u7528\u8005\u9ed8\u8ba4\u7aef\u53e3\u5b9e\u9645\u6620\u5c04\u5728\u4e0b\u6587\u544a\u77e5"},"\u58f0\u660e 80 \u7aef\u53e3\uff0c\u4ec5\u4ec5\u544a\u8bc9\u955c\u50cf\u4f7f\u7528\u8005\u9ed8\u8ba4\u7aef\u53e3\uff0c\u5b9e\u9645\u6620\u5c04\u5728\u4e0b\u6587\u544a\u77e5"),(0,t.kt)("p",null,"EXPOSE 80"),(0,t.kt)("h1",{id:"\u8fd0\u884c-node-\u811a\u672c"},"\u8fd0\u884c node \u811a\u672c"),(0,t.kt)("p",null,"CMD node server.js"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"## \u5728compose_test/docker/\u76ee\u5f55\u4e0b\u6267\u884cdocker-compose.yml\u6587\u4ef6\uff1a\n\u7136\u540e\u5c31\u53ef\u4ee5\u521b\u5efa\u8fd0\u884c docker \u5bb9\u5668\u4e86\uff0c\u8fd0\u884c\uff1a docker-compose up \u6b64\u65f6\uff0c\u4f60\u7684\u670d\u52a1\u5c31\u53ef\u4ee5\u901a\u8fc7 localhost \u8bbf\u95ee\u5230\u4e86\n")),(0,t.kt)("p",null,"$ docker-compose up"),(0,t.kt)("h1",{id:"\u82e5\u662f\u8981\u540e\u53f0\u8fd0\u884c--docker-compose-up--d"},"\u82e5\u662f\u8981\u540e\u53f0\u8fd0\u884c\uff1a $ docker-compose up -d"),(0,t.kt)("h1",{id:"\u82e5\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u7684docker-composeyml-\u6587\u4ef6\u540d"},"\u82e5\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u7684docker-compose.yml \u6587\u4ef6\u540d\uff1a"),(0,t.kt)("p",null,"$ docker-compose -f server.yml up -d "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\n### \u8fdb\u5165\u5bb9\u5668\n\u53ef\u4ee5\u8fd0\u884c docker ps \u547d\u4ee4\u770b\u5230\u5f53\u524d\u8fd0\u884c\u7684\u5bb9\u5668\u3002\n\u6267\u884c docker image ls \u53ef\u4ee5\u770b\u5230\u521b\u5efa\u7684\u5bb9\u5668\n\n\u4e4b\u540e\uff0c\u901a\u8fc7 docker exec -it container-id /bin/bash \u8fdb\u5165\u5bb9\u5668\u5185\u90e8\n\u4fee\u6539\u4e86\u4ee3\u7801\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 docker-compose up --build \u518d\u91cd\u65b0\u6784\u5efa\u5bb9\u5668\uff0c\u56e0\u4e3a\u6709\u7f13\u5b58\u673a\u5236\uff0c\u8fd9\u6b21\u6784\u5efa\u4f1a\u5f88\u5feb\u901f\uff01\n\n## \u91cd\u65b0\u6784\u5efa\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\n\u4f7f\u7528\u66f4\u65b0\u7684compose\u6587\u4ef6\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u7136\u540e\u8fd0\u884c\u5b83\u3002\n$ docker-compose up -d\n")))}m.isMDXComponent=!0}}]);