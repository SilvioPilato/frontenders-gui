import{_ as h}from"./iframe-1777b9bd.js";import{d as l,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-63d006c3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-a04a29e8.js";import"./index-356e4a49.js";var c={},i=l;c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},T=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},u=y;return new Promise((m,p)=>{h(()=>import("./index-d7f1664e.js"),["./index-d7f1664e.js","./index-b0c5e21e.js","./index-63d006c3.js","./iframe-1777b9bd.js","./_commonjsHelpers-725317a4.js","./index-d37d4223.js","./index-a04a29e8.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(C,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(u,{context:t,docsParameter:e}))),r)).then(()=>m())})},this.unmount=t=>{v(t)}}};export{T as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-9547ea8d.js.map
