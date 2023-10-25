"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[3139],{3905:(r,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>u});var t=o(67294);function n(r,e,o){return e in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}function a(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function l(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function c(r,e){if(null==r)return{};var o,t,n=function(r,e){if(null==r)return{};var o,t,n={},a=Object.keys(r);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(n[o]=r[o]);return n}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(r,o)&&(n[o]=r[o])}return n}var p=t.createContext({}),i=function(r){var e=t.useContext(p),o=e;return r&&(o="function"==typeof r?r(e):l(l({},e),r)),o},s=function(r){var e=i(r.components);return t.createElement(p.Provider,{value:e},r.children)},h="mdxType",m={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},b=t.forwardRef((function(r,e){var o=r.components,n=r.mdxType,a=r.originalType,p=r.parentName,s=c(r,["components","mdxType","originalType","parentName"]),h=i(o),b=n,u=h["".concat(p,".").concat(b)]||h[b]||m[b]||a;return o?t.createElement(u,l(l({ref:e},s),{},{components:o})):t.createElement(u,l({ref:e},s))}));function u(r,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var a=o.length,l=new Array(a);l[0]=b;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=r,c[h]="string"==typeof r?r:n,l[1]=c;for(var i=2;i<a;i++)l[i]=o[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},31932:(r,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=o(87462),n=(o(67294),o(3905));const a={},l=void 0,c={unversionedId:"docker/Harbor",id:"docker/Harbor",title:"Harbor",description:"Harbor \u662f\u7531 VMware \u516c\u53f8\u4e2d\u56fd\u56e2\u961f\u4e3a\u4f01\u4e1a\u7528\u6237\u8bbe\u8ba1\u7684 Registry server \u5f00\u6e90\u9879\u76ee\uff0c\u5305\u62ec\u4e86\u6743\u9650\u7ba1\u7406 (RBAC)\u3001LDAP\u3001\u5ba1\u8ba1\u3001\u7ba1\u7406\u754c\u9762\u3001\u81ea\u6211\u6ce8\u518c\u3001HA \u7b49\u4f01\u4e1a\u5fc5\u9700\u7684\u529f\u80fd\uff0c\u540c\u65f6\u9488\u5bf9\u4e2d\u56fd\u7528\u6237\u7684\u7279\u70b9\uff0c\u8bbe\u8ba1\u955c\u50cf\u590d\u5236\u548c\u4e2d\u6587\u652f\u6301\u7b49\u529f\u80fd\u3002",source:"@site/programming-tech/docker/10-Harbor.md",sourceDirName:"docker",slug:"/docker/Harbor",permalink:"/docker/Harbor",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/docker/10-Harbor.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"docs",previous:{title:"\u5982\u4f55\u83b7\u53d6docker\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001",permalink:"/docker/\u5982\u4f55\u83b7\u53d6docker\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001"},next:{title:"K8S\u57fa\u7840",permalink:"/docker/K8S\u57fa\u7840"}},p={},i=[{value:"1.harbor\u5b89\u88c5\u53ca\u914d\u7f6e",id:"1harbor\u5b89\u88c5\u53ca\u914d\u7f6e",level:2},{value:"\u7528docker-compose\u67e5\u770bHarbor\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001",id:"\u7528docker-compose\u67e5\u770bharbor\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001",level:2}],s={toc:i},h="wrapper";function m(r){let{components:e,...o}=r;return(0,n.kt)(h,(0,t.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Harbor \u662f\u7531 VMware \u516c\u53f8\u4e2d\u56fd\u56e2\u961f\u4e3a\u4f01\u4e1a\u7528\u6237\u8bbe\u8ba1\u7684 Registry server \u5f00\u6e90\u9879\u76ee\uff0c\u5305\u62ec\u4e86\u6743\u9650\u7ba1\u7406 (RBAC)\u3001LDAP\u3001\u5ba1\u8ba1\u3001\u7ba1\u7406\u754c\u9762\u3001\u81ea\u6211\u6ce8\u518c\u3001HA \u7b49\u4f01\u4e1a\u5fc5\u9700\u7684\u529f\u80fd\uff0c\u540c\u65f6\u9488\u5bf9\u4e2d\u56fd\u7528\u6237\u7684\u7279\u70b9\uff0c\u8bbe\u8ba1\u955c\u50cf\u590d\u5236\u548c\u4e2d\u6587\u652f\u6301\u7b49\u529f\u80fd\u3002"),(0,n.kt)("p",null,"\u524d\u7f6e\u6761\u4ef6\uff1a\u5df2\u5b89\u88c5docker\u3001Docker Compose"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 - \u7528\u6237\u4e0e Docker \u955c\u50cf\u4ed3\u5e93\u901a\u8fc7 \u201c\u9879\u76ee\u201d \u8fdb\u884c\u7ec4\u7ec7\u7ba1\u7406\uff0c\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u5bf9\u591a\u4e2a\u955c\u50cf\u4ed3\u5e93\u5728\u540c\u4e00\u547d\u540d\u7a7a\u95f4\uff08project\uff09\u91cc\u6709\u4e0d\u540c\u7684\u6743\u9650\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u590d\u5236 - \u955c\u50cf\u53ef\u4ee5\u5728\u591a\u4e2a Registry \u5b9e\u4f8b\u4e2d\u590d\u5236\uff08\u540c\u6b65\uff09\u3002\u5c24\u5176\u9002\u5408\u4e8e\u8d1f\u8f7d\u5747\u8861\uff0c\u9ad8\u53ef\u7528\uff0c\u6df7\u5408\u4e91\u548c\u591a\u4e91\u7684\u573a\u666f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56fe\u5f62\u5316\u7528\u6237\u754c\u9762 - \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u6765\u6d4f\u89c8\uff0c\u68c0\u7d22\u5f53\u524d Docker \u955c\u50cf\u4ed3\u5e93\uff0c\u7ba1\u7406\u9879\u76ee\u548c\u547d\u540d\u7a7a\u95f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"AD/LDAP \u652f\u6301 - Harbor \u53ef\u4ee5\u96c6\u6210\u4f01\u4e1a\u5185\u90e8\u5df2\u6709\u7684 AD/LDAP\uff0c\u7528\u4e8e\u9274\u6743\u8ba4\u8bc1\u7ba1\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u8ba1\u7ba1\u7406 - \u6240\u6709\u9488\u5bf9\u955c\u50cf\u4ed3\u5e93\u7684\u64cd\u4f5c\u90fd\u53ef\u4ee5\u88ab\u8bb0\u5f55\u8ffd\u6eaf\uff0c\u7528\u4e8e\u5ba1\u8ba1\u7ba1\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56fd\u9645\u5316 - \u5df2\u62e5\u6709\u82f1\u6587\u3001\u4e2d\u6587\u3001\u5fb7\u6587\u3001\u65e5\u6587\u548c\u4fc4\u6587\u7684\u672c\u5730\u5316\u7248\u672c\u3002\u66f4\u591a\u7684\u8bed\u8a00\u5c06\u4f1a\u6dfb\u52a0\u8fdb\u6765\u3002"),(0,n.kt)("li",{parentName:"ul"},"RESTful API - RESTful API \u63d0\u4f9b\u7ed9\u7ba1\u7406\u5458\u5bf9\u4e8e Harbor \u66f4\u591a\u7684\u64cd\u63a7\uff0c\u4f7f\u5f97\u4e0e\u5176\u5b83\u7ba1\u7406\u8f6f\u4ef6\u96c6\u6210\u53d8\u5f97\u66f4\u5bb9\u6613\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u7b80\u5355 - \u63d0\u4f9b\u5728\u7ebf\u548c\u79bb\u7ebf\u4e24\u79cd\u5b89\u88c5\u5de5\u5177\uff0c \u4e5f\u53ef\u4ee5\u5b89\u88c5\u5230 vSphere \u5e73\u53f0 (OVA \u65b9\u5f0f) \u865a\u62df\u8bbe\u5907\u3002")),(0,n.kt)("h2",{id:"1harbor\u5b89\u88c5\u53ca\u914d\u7f6e"},"1.harbor\u5b89\u88c5\u53ca\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wget https://github.com/goharbor/harbor/releases/download/v2.3.4/harbor-offline-installer-v2.3.4.tgz\ntar xf harbor-offline-installer-v2.3.4.tgz -C /usr/local/\ncd /usr/local/harbor\n\n#\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\n\n[root@localhost harbor]# ll\n\u603b\u7528\u91cf 596292\n-rw-r--r-- 1 root root      3361 11\u6708  9 2021 common.sh\n-rw-r--r-- 1 root root 610560420 11\u6708  9 2021 harbor.v2.3.4.tar.gz\n-rw-r--r-- 1 root root      7844 6\u6708  13 12:31 harbor.yml\n-rw-r--r-- 1 root root      7840 11\u6708  9 2021 harbor.yml.tmpl\n-rwxr-xr-x 1 root root      2500 11\u6708  9 2021 install.sh\n-rw-r--r-- 1 root root     11347 11\u6708  9 2021 LICENSE\n-rwxr-xr-x 1 root root      1881 11\u6708  9 2021 prepare\n\ncp harbor.yml.tmpl harbor.yml\n\n#\u4fee\u6539hostname\u3001harbor\u767b\u5f55\u5bc6\u7801\u3001\u5173\u95edhttps\u3002\n\nvim harbor.yml\nhostname: www.myharbor.com\nharbor_admin_password: harbor12345\n#https:\n  # https port for harbor, default is 443\n  #  port: 443\n  # The path of cert and key files for nginx\n  #  certificate: /your/certificate/path\n  # private_key: /your/private/key/path\ndata_volume: /data  #\u8fd9\u4e2a\u8def\u5f84\u662f\u5bbf\u4e3b\u673a\u7684\u8def\u5f84\uff0c\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u6210\u7a7a\u95f4\u5927\u7684\u5730\u65b9\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#\u6267\u884c\u5b89\u88c5\u7a0b\u5e8f\uff0c\u53ea\u5b89\u88c5harbor\n./install.sh  (\u524d\u63d0\u6761\u4ef6\uff1adocker\u9700\u8981\u542f\u52a8)\n\n# \u9664\u4e86\u5b89\u88c5harbor\u5916\uff0c\u8fd8\u5b89\u88c5\u516c\u6b63\u670d\u52a1 notary \u4ee5\u53ca\u6f0f\u6d1e\u626b\u63cf\u5668 trivy\uff0c\n./install.sh --with-notary --with-trivy --with-chartmuseum\n\n[root@localhost harbor]# ll\n\u603b\u7528\u91cf 596300\ndrwxr-xr-x 3 root root        20 6\u6708  13 12:34 common\n-rw-r--r-- 1 root root      3361 11\u6708  9 2021 common.sh\n-rw-r--r-- 1 root root      5996 6\u6708  13 12:34 docker-compose.yml\n-rw-r--r-- 1 root root 610560420 11\u6708  9 2021 harbor.v2.3.4.tar.gz\n-rw-r--r-- 1 root root      7844 6\u6708  13 12:31 harbor.yml\n-rw-r--r-- 1 root root      7840 11\u6708  9 2021 harbor.yml.tmpl\n-rwxr-xr-x 1 root root      2500 11\u6708  9 2021 install.sh\n-rw-r--r-- 1 root root     11347 11\u6708  9 2021 LICENSE\n-rwxr-xr-x 1 root root      1881 11\u6708  9 2021 prepare\n")),(0,n.kt)("h2",{id:"\u7528docker-compose\u67e5\u770bharbor\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001"},"\u7528docker-compose\u67e5\u770bHarbor\u5bb9\u5668\u7684\u8fd0\u884c\u72b6\u6001"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[root@localhost harbor]# docker-compose ps\n      Name                     Command                  State                      Ports                \n--------------------------------------------------------------------------------------------------------\nharbor-core         /harbor/entrypoint.sh            Up (healthy)                                       \nharbor-db           /docker-entrypoint.sh 96 13      Up (healthy)                                       \nharbor-jobservice   /harbor/entrypoint.sh            Up (healthy)                                       \nharbor-log          /bin/sh -c /usr/local/bin/ ...   Up (healthy)   127.0.0.1:1514->10514/tcp\nharbor-portal       nginx -g daemon off;             Up (healthy)                                       \nnginx               nginx -g daemon off;             Up (healthy)   0.0.0.0:80->8080/tcp,:::80->8080/tcp\nredis               redis-server /etc/redis.conf     Up (healthy)                                       \nregistry            /home/harbor/entrypoint.sh       Up (healthy)                                       \nregistryctl         /home/harbor/start.sh            Up (healthy) \n\ndocker-compose\u57fa\u672c\u547d\u4ee4\n\n# \u542f\u52a8Harbor\u5bb9\u5668\ndocker-compose start\n\n# \u505c\u6b62Harbor\u5bb9\u5668\ndocker-compose stop\n\n# \u6682\u505cHarbor\u5bb9\u5668\ndocker-compose pause\n\n# \u7ee7\u7eed\u8fd0\u884cHarbor\u5bb9\u5668\ndocker-compose unpause\n\n# \u91cd\u542fHarbor\u5bb9\u5668\ndocker-compose restart\n\n# \u505c\u6b62\u5e76\u5220\u9664Harbor\u5bb9\u5668\uff0c\u52a0\u4e0a-v\u53c2\u6570\u53ef\u4ee5\u540c\u65f6\u79fb\u9664\u6302\u8f7d\u5728\u5bb9\u5668\u4e0a\u7684\u76ee\u5f55\ndocker-compose down\n\n# \u521b\u5efa\u5e76\u542f\u52a8Harbo\u5bb9\u5668\uff0c\u53c2\u6570\u201c-d\u201d\u8868\u793a\u540e\u53f0\u8fd0\u884c\u547d\u4ee4\ndocker-compose up -d\n")))}m.isMDXComponent=!0}}]);