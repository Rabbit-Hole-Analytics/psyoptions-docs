(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{135:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/PsyOrderbook-2202f4ebd11df4bb4c5f64811776b2d4.png"},136:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/PsyOpenPositions-057a8a22104130e84785ec2484dbeda3.png"},137:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tempsnip_1-f571a69586ef3eec7315b5fa9e8a8fbb.png"},138:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tempsnip_2-84b93ebc9f5f8dd4022da945248530ce.png"},139:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tempsnip_3-0f5f7335659f1ea69518af3dd4ac7424.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),r=(n(0),n(89)),a={id:"devnet-beta-testing",title:"Beta Testing",sidebar_label:"Beta Testing",slug:"/devnet-testing/beta-testing"},s={unversionedId:"devnet-beta-testing",id:"devnet-beta-testing",isDocsHomePage:!1,title:"Beta Testing",description:"PsyOptions is a vanilla options protocol built on the Solana blockchain.",source:"@site/docs/beta-testing.mdx",slug:"/devnet-testing/beta-testing",permalink:"/devnet-testing/beta-testing",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/beta-testing.mdx",version:"current",sidebar_label:"Beta Testing",sidebar:"someSidebar",previous:{title:"What to Test",permalink:"/devnet-testing/what-to-test"}},l=[{value:"Trading Options",id:"trading-options",children:[{value:"Buy to open",id:"buy-to-open",children:[]},{value:"Sell to open",id:"sell-to-open",children:[]},{value:"Order types",id:"order-types",children:[]}]},{value:"Checking Open Positions",id:"checking-open-positions",children:[{value:"Exercising",id:"exercising",children:[]}]},{value:"Initializing Markets",id:"initializing-markets",children:[{value:"How to Initialize a Market:",id:"how-to-initialize-a-market",children:[]}]}],c={toc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PsyOptions is a vanilla options protocol built on the Solana blockchain.\nThe principles that have guided the architecture and development of the core protocol are flexibility and composability.\nIt is completely trustless. The core protocol makes no assumptions on how the options should be traded or priced.\nOptions are represented as SPL Tokens, which means they can be traded on any DEX that supports SPL Tokens."),Object(r.b)("p",null,"V1 will support 100% collateralized, asset settled, covered calls and secured puts."),Object(r.b)("h2",{id:"trading-options"},"Trading Options"),Object(r.b)("p",null,"To buy or sell an option, select ",Object(r.b)("inlineCode",{parentName:"p"},"Markets")," in the navbar. You may adjust the expiration date and the underlying asset.\nThe team recommends using the May 28, 2021 BTC/USDC option markets."),Object(r.b)("p",null,"After selecting the parameters, the page will populate with data from Serum if there is an orderbook for the indivual market.\nNote that each row represents a different option market and thus a different Serum market."),Object(r.b)("p",null,Object(r.b)("img",{alt:"PsyOrderbook",src:n(135).default})),Object(r.b)("h3",{id:"buy-to-open"},"Buy to open"),Object(r.b)("p",null,"Buying an option (call/put) requires no collateral. It is simply a transaction on Serum's orderbook to purchase an option from the open market."),Object(r.b)("h3",{id:"sell-to-open"},"Sell to open"),Object(r.b)("p",null,"Selling an option is a bit more complex as an option may need to be minted. If the connected wallet does not have enough options to sell,\nthen options will be written prior to selling."),Object(r.b)("p",null,"When options are written, the wallet will have it's underlying asset deducted as it's sent\nto the program to mint the options. The amount deducted is the contract ",Object(r.b)("inlineCode",{parentName:"p"},"size"),", which may differ based\non the selected parameters."),Object(r.b)("h3",{id:"order-types"},"Order types"),Object(r.b)("p",null,"Both market and limit orders are supported."),Object(r.b)("h2",{id:"checking-open-positions"},"Checking Open Positions"),Object(r.b)("p",null,'Click on the "Open Positions" option at the top left bar to view all current positions in the options market.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"PsyOpenPositions",src:n(136).default})),Object(r.b)("h3",{id:"exercising"},"Exercising"),Object(r.b)("p",null,"If the option has not expired, clicking the ",Object(r.b)("inlineCode",{parentName:"p"},"Exercise")," button will prompt a transaction to exercise the option."),Object(r.b)("p",null,"The owning wallet must have enough of the quote asset (",Object(r.b)("inlineCode",{parentName:"p"},"contract size * strike price"),") to successfully exercise."),Object(r.b)("h2",{id:"initializing-markets"},"Initializing Markets"),Object(r.b)("p",null,"To create fungible option SPL Tokens for trading in the options markets, one will have to initializing a market by\nsupplying the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Underlying asset"),Object(r.b)("li",{parentName:"ul"},"Quote asset"),Object(r.b)("li",{parentName:"ul"},"Contract size"),Object(r.b)("li",{parentName:"ul"},"Strike price"),Object(r.b)("li",{parentName:"ul"},"Expiration")),Object(r.b)("h3",{id:"how-to-initialize-a-market"},"How to Initialize a Market:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click on Initialize")),Object(r.b)("p",null,Object(r.b)("img",{alt:"tempsnip_1",src:n(137).default})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Select the following parameters: Expiration Date (as per expiration of option), Underlying Asset (to be traded in the option), Quote Asset (to be supplied in the trade), Contract Size (size of option), Base Price (strike price of option)")),Object(r.b)("p",null,Object(r.b)("img",{alt:"tempsnip_2",src:n(138).default})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},'Select "Multi Strikes" if you wish to list multiple contracts at designated strike price intervals')),Object(r.b)("p",null,Object(r.b)("img",{alt:"tempsnip_3",src:n(139).default})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},'Click "Initialize Market"')))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);