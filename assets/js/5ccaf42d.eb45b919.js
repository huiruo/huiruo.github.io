"use strict";(self.webpackChunkprogramming_technology=self.webpackChunkprogramming_technology||[]).push([[5820],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),f=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=f(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=f(r),u=o,d=c["".concat(i,".").concat(u)]||c[u]||s[u]||a;return r?t.createElement(d,l(l({ref:n},m),{},{components:r})):t.createElement(d,l({ref:n},m))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var f=2;f<a;f++)l[f]=r[f];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94270:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>f});var t=r(87462),o=(r(67294),r(3905));const a={title:"api-forwardRef",sidebar_position:50},l="forwardRef",p={unversionedId:"React/api-forwardRef",id:"React/api-forwardRef",title:"api-forwardRef",description:"ref\u5fc5\u987b\u6307\u5411dom\u5143\u7d20\u800c\u4e0d\u662fReact\u7ec4\u4ef6",source:"@site/programming-tech/React/api-forwardRef.md",sourceDirName:"React",slug:"/React/api-forwardRef",permalink:"/React/api-forwardRef",draft:!1,editUrl:"https://github.com/huiruo/programming-tech-website/edit/main/programming-tech/React/api-forwardRef.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"api-forwardRef",sidebar_position:50},sidebar:"docs",previous:{title:"\u7c7b\u7ec4\u4ef6\u6e32\u67d3\u6d41\u7a0b-\u7ec4\u4ef6\u5206\u7c7b",permalink:"/React/\u7c7b\u7ec4\u4ef6\u6e32\u67d3\u6d41\u7a0b-\u7ec4\u4ef6\u5206\u7c7b"},next:{title:"api-memo\u548cshouldComponentUpdate",permalink:"/React/api-memo\u548cshouldComponentUpdate"}},i={},f=[{value:"forwardRef \u83b7\u53d6\u5b50\u7ec4\u4ef6\u7684Dom",id:"forwardref-\u83b7\u53d6\u5b50\u7ec4\u4ef6\u7684dom",level:3},{value:"\u5b9e\u6218",id:"\u5b9e\u6218",level:3}],m={toc:f},c="wrapper";function s(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forwardref"},"forwardRef"),(0,o.kt)("p",null,"ref\u5fc5\u987b\u6307\u5411dom\u5143\u7d20\u800c\u4e0d\u662fReact\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e0b\u9762\u5c31\u662f\u5e94\u7528\u5230React\u7ec4\u4ef6\u7684\u9519\u8bef\u793a\u4f8b\uff1a\nconst A=React.forwardRef((props,ref)=><B {...props} ref={ref}/>)\n\n\n// \u524d\u9762\u63d0\u5230ref\u5fc5\u987b\u6307\u5411dom\u5143\u7d20\uff0c\u90a3\u4e48\u6b63\u786e\u65b9\u6cd5\u5c31\u5e94\u7528\u800c\u751f\uff1a\nconst  A=React.forwardRef((props,ref)=>(\n<div ref={ref}>\n    <B {...props} />\n</div>\n))\n")),(0,o.kt)("p",null,"React.forwardRef \u63a5\u53d7 \u6e32\u67d3\u51fd\u6570 \u4f5c\u4e3a\u53c2\u6570\u3002React \u5c06\u4f7f\u7528 props \u548c ref \u4f5c\u4e3a\u53c2\u6570\u6765\u8c03\u7528\u6b64\u51fd\u6570\u3002\u6b64\u51fd\u6570\u5e94\u8fd4\u56de React \u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u7528\u4e8e\u5c06\u7236\u7ec4\u4ef6\u521b\u5efa\u7684 ref \u5f15\u7528\u5173\u8054\u5230\u5b50\u7ec4\u4ef6\u4e2d\u7684\u4efb\u610f\u5143\u7d20\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u66b4\u9732 DOM \u5f15\u7528\u3002"),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u56e0\u4e3a ref \u662f\u4e3a\u4e86\u83b7\u53d6\u67d0\u4e2a\u8282\u70b9\u7684\u5b9e\u4f8b\uff0c\u4f46\u662f\u51fd\u6570\u5f0f\u7ec4\u4ef6\u662f\u6ca1\u6709\u5b9e\u4f8b\u7684\uff0c\u4e0d\u5b58\u5728 this \u7684\uff0c\u8fd9\u79cd\u65f6\u5019\u662f\u62ff\u4e0d\u5230\u51fd\u6570\u5f0f\u7ec4\u4ef6\u7684 ref \u7684\uff0c\u800c React.forwardRef \u4e5f\u80fd\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u573a\u666f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6df1\u5c42\u6b21\u5b50\u5b59\u7ec4\u4ef6\u7684 DOM \u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u76f4\u63a5 ref \u5f15\u7528\u7684\u5b50\u7ec4\u4ef6\u4e3a\u975e class \u58f0\u660e\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u4f20\u9012 refs \u5230\u9ad8\u9636\u7ec4\u4ef6")),(0,o.kt)("h3",{id:"forwardref-\u83b7\u53d6\u5b50\u7ec4\u4ef6\u7684dom"},"forwardRef \u83b7\u53d6\u5b50\u7ec4\u4ef6\u7684Dom"),(0,o.kt)("p",null,"\u7236\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function TemplateModal(props: TemplateModalProps) {\n  const formRef: any = useRef()\n    // \u8c03\u7528\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5\n  const handleCancel = () => {\n    formRef.current.resetForm()\n    onClose()\n    cleanModalCache()\n  }\n\n  return (\n        <AddForm ref={formRef} formValues={formValues} />\n    )\n}\n")),(0,o.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function AddForm(props: AddFormPrps, ref: any) {\n  const [form] = Form.useForm()\n\n    // \u66b4\u9732\u7ec4\u4ef6\u7684\u65b9\u6cd5\n  useImperativeHandle(ref, () => ({\n    submitForm: () => {\n      const values = form.getFieldsValue()\n      return values\n    },\n    resetForm: () => {\n      form.resetFields()\n    }\n  }))\n\n    return (\n          <Form\n        form={form}\n        name='template_form'\n        layout='inline'\n        onFinish={onFinish}\n        initialValues={{ title: '', type: 0, tags: [] }}\n      />\n  )\n}\n\nconst WrappedAddForm = forwardRef(AddForm)\n\nexport default WrappedAddForm\n")),(0,o.kt)("h3",{id:"\u5b9e\u6218"},"\u5b9e\u6218"),(0,o.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useRef } from 'react'\nimport Zoom from './zoom'\n\n// \u5c01\u88c5\u7684Hooks\u2f64\u7528use\u5f00\u5934\nconst useChangeTitle = (title) => {\n  useEffect(() => {\n    document.title = title\n  }, [title])\n}\n\nconst App = ((props) => {\n  useChangeTitle(\"\u2f83\u81ea\u5b9a\u4e49\u4fee\u6539\u6807\u9898Hooks\")\n\n  const zoomComRef = useRef<any>(null)\n\n  const onGetRef = () => {\n    const zoomImgRef = zoomComRef.current.getZoomImg()\n  }\n\n  return (\n    <>\n      <div>\n        \u6d4b\u8bd5\u56fe\u7247\u653e\u5927\n      </div>\n      <div onClick={() => onGetRef()}>\u83b7\u53d6\u5b50\u7ec4\u4ef6</div>\n      <div>\n        <Zoom ref={zoomComRef} />\n      </div>\n    </>\n  );\n})\n\nexport default App;\n")),(0,o.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useRef, useImperativeHandle,forwardRef } from \'react\';\nimport { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";\n\nconst ZoomImg = forwardRef((props, ref) => {\n\n    const zoomImgRef = useRef<any>(\'\');\n\n    useImperativeHandle(ref, () => ({\n        getZoomImg: () => {\n            return zoomImgRef.current\n        }\n    }));\n\n    return (\n        <>\n            <TransformWrapper\n                onZoom={function noRefCheck() {\n                    console.log("ref:", zoomImgRef.current)\n                }}\n                initialScale={0.5}\n                centerOnInit={true}\n                maxScale={2}\n                minScale={0.5}\n                doubleClick={{ step: 0.7, disabled: false, excluded: [], }}\n                panning={{ disabled: false, excluded: [] }}\n                wheel={{ disabled: false, step: 0.2, activationKeys: [], excluded: [], touchPadDisabled: false, }}\n            >\n                <TransformComponent wrapperStyle={{ background: "rgba(0, 0, 0, 0.3)", maxWidth: \'80vw\', maxHeight: \'80vh\' }}>\n                    <img ref={zoomImgRef} src="https://prc5.github.io/react-zoom-pan-pinch/static/media/medium-image.12ec4e94.jpg" alt="test" />\n                </TransformComponent>\n            </TransformWrapper>\n        </>\n    );\n})\nexport default ZoomImg;\n')))}s.isMDXComponent=!0}}]);