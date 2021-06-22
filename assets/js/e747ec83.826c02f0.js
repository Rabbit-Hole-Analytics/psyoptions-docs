(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(91)),i={id:"glossary",title:"Glossary",sidebar_label:"Glossary",slug:"/glossary"},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Option",source:"@site/docs/glossary.md",slug:"/glossary",permalink:"/glossary",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/glossary.md",version:"current",sidebar_label:"Glossary",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Options Strategies",permalink:"/options-strategies"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"option"},"Option"),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"#call"},"call")," or a ",Object(o.b)("a",{parentName:"p",href:"#put"},"put"),", an option is a contract that gives the owner the right to buy (in the case of a call) or sell (in the case of a put) a number of the ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," at a predetermined price (",Object(o.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),") on or before a fixed expiration date."),Object(o.b)("h4",{id:"call"},"Call"),Object(o.b)("p",null,"Buyers of call options generally expect the ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to increase in value, whereas sellers of calls expect a decrease in value or remain the same."),Object(o.b)("p",null,"Buying a call gives you the right, but not the obligation, to buy the ",Object(o.b)("a",{parentName:"p",href:"#contract-size"},"contract size")," amount of underlying asset at the option's strike price. Price of the call option should increase as the price of the underlying asset increases."),Object(o.b)("p",null,"Writing a covered call option allows you to collect the premium while obligating you to sell a contract size amount of the underlying asset to the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract."),Object(o.b)("h4",{id:"put"},"Put"),Object(o.b)("p",null,"Buyers of put options generally expect the ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to decrease in value, whereas sellers of puts expect an increase in value or remain the same."),Object(o.b)("p",null,"Buying a put gives you the right, but not the obligation, to sell the ",Object(o.b)("a",{parentName:"p",href:"#contract-size"},"contract size")," amount of underlying asset at the option's strike price. Price of the put option should increase as the price of the underlying asset decreases."),Object(o.b)("p",null,"Writing a secured put option allows you to collect the premium while obligating you to buy a contract size amount of the underlying asset from the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract."),Object(o.b)("h4",{id:"covered-call"},"Covered Call"),Object(o.b)("p",null,"An option strategy composed of a short call option and long the same ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),", generally used if you expect the underlying asset price to stay relatively flat or increase moderately. For example, you would mint/sell 1 SOL/USDC call while locking up 100 SOL as collateral for calls with ",Object(o.b)("a",{parentName:"p",href:"#contract-size"},"contract size")," of 100."),Object(o.b)("h4",{id:"secured-put"},"Secured Put"),Object(o.b)("p",null,"An option strategy composed of a short put option and short the same ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),", generally used if you expect the underlying asset price to stay relatively flat or increase moderately. For example, you would mint/sell 1 SOL/USDC put while locking up 4000 (strike price * contract size) USDC as collateral for puts at ",Object(o.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," of 40 and ",Object(o.b)("a",{parentName:"p",href:"#contract-size"},"contract size")," of 100."),Object(o.b)("h4",{id:"underlying-asset"},"Underlying asset"),Object(o.b)("p",null,"The asset to be locked when writing a covered call, or received when exercising a covered call."),Object(o.b)("h4",{id:"quote-asset"},"Quote asset"),Object(o.b)("p",null,"The asset used to price the underlying asset."),Object(o.b)("h4",{id:"contract-size"},"Contract size"),Object(o.b)("p",null,"How many of the underlying asset can the option holder exercise for.\nOr in other words, how many underlying asset need to be locked when writing a covered call."),Object(o.b)("h4",{id:"bid"},"Bid"),Object(o.b)("p",null,"The price at which a buyer is willing to buy an option, meaning the price at which a seller can immediately sell an option."),Object(o.b)("h4",{id:"ask"},"Ask"),Object(o.b)("p",null,"The price at which a seller is willing to sell an option, meaning the price at which a buyer can immediately purchase an option. "),Object(o.b)("h4",{id:"strike-price"},"Strike price"),Object(o.b)("p",null,"The price in which the exerciser may exchange quote asset for the locked ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),"."),Object(o.b)("h4",{id:"expiration"},"Expiration"),Object(o.b)("p",null,"The last date where the option may be exercised."),Object(o.b)("h4",{id:"exercise"},"Exercise"),Object(o.b)("p",null,"Exercise means to put into effect the right to buy or sell the ",Object(o.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," specified in an options contract. When a call option owner exercises their contract, they will buy the underlying assets from the option writer at the agreed upon ",Object(o.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),". When a put option owner exercises their contract, they will sell the underlying asset to the option writer at the agreed upon strike price."),Object(o.b)("h4",{id:"iv"},"IV"),Object(o.b)("p",null,"Implied Volatility(IV) is an estimate of the volatility of the underlying asset that is derived from the market value of an option. It is essentially the market's forecast of a likely movement in an underlying asset's price"))}p.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return r?a.a.createElement(d,s(s({ref:t},l),{},{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);