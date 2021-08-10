(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(96)),i={id:"arch-put-call",title:"Appel vs Put",sidebar_label:"Appel vs Put",slug:"/architecture/call-put"},c={unversionedId:"arch-put-call",id:"arch-put-call",isDocsHomePage:!1,title:"Appel vs Put",description:"Les deux types de contrats d'options (pas les styles) sont les Appels et les Puts. Une option d'achat donne au d\xe9tenteur de l'option le droit mais pas l'obligation d'acheter l'actif sous-jacent \xe0 un prix sp\xe9cifi\xe9, par ou \xe0 une certaine date. Une option de vente donne au d\xe9tenteur de l'option le droit mais pas l'obligation de vendre l'actif sous-jacent \xe0 un prix sp\xe9cifi\xe9, par ou \xe0 une certaine date.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/arch-put-call.md",slug:"/architecture/call-put",permalink:"/fr/architecture/call-put",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/arch-put-call.md",version:"current",sidebar_label:"Appel vs Put",sidebar:"someSidebar",previous:{title:"Types d'options",permalink:"/fr/architecture/option-types"},next:{title:"Protocole am\xe9ricain V1 Comment \xe7a marche",permalink:"/fr/american-v1/how-it-works"}},u=[{value:"Sous la capuche",id:"sous-la-capuche",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Les deux types de contrats d'options (pas les styles) sont les Appels et les Puts. Une option d'achat donne au d\xe9tenteur de l'option le droit mais pas l'obligation d'acheter l'actif sous-jacent \xe0 un prix sp\xe9cifi\xe9, par ou \xe0 une certaine date. Une option de vente donne au d\xe9tenteur de l'option le droit mais pas l'obligation de vendre l'actif sous-jacent \xe0 un prix sp\xe9cifi\xe9, par ou \xe0 une certaine date."),Object(a.b)("p",null,"Les positions des options PsyOption sont enti\xe8rement collateralis\xe9es, ce qui signifie que seuls les appels couverts et les mises s\xe9curis\xe9es sont pris en charge. Pour \xe9crire une option d'appel, le cr\xe9ateur d'options verrouille l'actif sous-jacent. De m\xeame, pour \xe9crire un Put, le r\xe9dacteur de l'option verrouille l'actif de cotation."),Object(a.b)("h3",{id:"sous-la-capuche"},"Sous la capuche"),Object(a.b)("p",null,"Au niveau du protocole, il n'y a pas de concept de Call vs Put. Le lecteur astucieux reconna\xeetra que si vous param\xe9trez l'actif sous-jacent et cote pour les options, la fonction de l'appel et de la mise a une relation inverse avec les actifs. Plus clairement, le protocole n'a pas d'instruction pour toucher un Put, seulement une instruction pour passer un appel."),Object(a.b)("p",null,"Le Put est cr\xe9\xe9 en utilisant la paire d'actifs r\xe9ciproques. Donc, un Put for SOL/USDC serait tout simplement un appel \xe0 USDC/SOL."))}l.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);