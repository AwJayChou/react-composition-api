(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./demo/index/index.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/_@babel_runtime@7.8.3@@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("react"),c=n.n(a),i=n("./node_modules/_@mdx-js_react@1.5.5@@mdx-js/react/dist/esm.js"),s=n("./src/index.ts"),u=n("./node_modules/_@vue_reactivity@3.0.0-alpha.3@@vue/reactivity/dist/reactivity.esm-bundler.js"),o=Object(s.a)((function(){var e=Object(u.c)({message:"World"}),t=function(){return e.message="Hey"};return function(n){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Hello ",e.message),c.a.createElement("button",{onClick:t},"change"))}}));n.d(t,"default",(function(){return d}));var b={};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u76ee\u7684"},"\u76ee\u7684"),Object(i.b)("p",null,"\u5728React\u4e2d\u5f15\u5165@vue/reactivity\u8fd9\u4e2a\u5e93\uff0c\u4f7f\u7528vue3\u7684\u54cd\u5e94\u5f0f\u80fd\u529b\u6765\u7ba1\u7406\u72b6\u6001\u3002"),Object(i.b)("h2",{id:"\u7b80\u5355\u7528\u6cd5"},"\u7b80\u5355\u7528\u6cd5"),Object(i.b)(o,{mdxType:"Index"}),Object(i.b)("h2",{id:"codes"},"Codes"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { setup } from '../../src';\nimport { reactive } from '@vue/reactivity'\n\nexport default setup(() => {\n  const data = reactive({ message: 'World' });\n\n  const change = () => (data.message = 'Hey');\n\n  return props => (\n    <>\n      <h1>Hello {data.message}</h1>\n      <button onClick={change}>change</button>\n    </>\n  );\n});\n\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"demo\\index\\index.mdx"}}),d.isMDXComponent=!0},"./src/index.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("./node_modules/_@babel_runtime@7.8.3@@babel/runtime/helpers/esm/slicedToArray.js"),a=n("react"),c=n("./node_modules/_@vue_reactivity@3.0.0-alpha.3@@vue/reactivity/dist/reactivity.esm-bundler.js"),i=function(e){var t=e();return function(e){var n=s(),r=null,i=Object(c.b)((function(){r=t(e)}),{scheduler:n}),u=function(){Object(c.e)(i)};return Object(a.useEffect)((function(){return u}),[]),r}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"setup",filename:"src\\index.ts"}});var s=function(){var e=Object(a.useReducer)((function(e){return e+1}),0);return Object(r.a)(e,2)[1]}}}]);