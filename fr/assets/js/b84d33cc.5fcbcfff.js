(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(96)),o={id:"glossary",title:"Glossary",sidebar_label:"Glossary",slug:"/glossary"},u={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Option",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/glossary.md",slug:"/glossary",permalink:"/fr/glossary",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/glossary.md",version:"current",sidebar_label:"Glossary",sidebar:"someSidebar",previous:{title:"Mission",permalink:"/fr/mission"},next:{title:"Strat\xe9gies d'options",permalink:"/fr/options-strategies"}},c=[],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"option"},"Option"),Object(i.b)("p",null,"Un ",Object(i.b)("a",{parentName:"p",href:"#call"},"appel")," ou un ",Object(i.b)("a",{parentName:"p",href:"#put"},"put"),", une option est un contrat qui donne au propri\xe9taire le droit d'acheter (dans le cas d'un appel) ou de vendre (dans le cas d'un place) un nombre de ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"actifs sous-jacents")," \xe0 un prix pr\xe9d\xe9termin\xe9 (",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"prix d'exercice"),") au plus tard \xe0 une date d'expiration fixe."),Object(i.b)("h4",{id:"appel"},"Appel"),Object(i.b)("p",null,"Les acheteurs d'options d'achat attendent g\xe9n\xe9ralement que l'actif ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"sous-jacent")," augmente de la valeur, alors que les vendeurs d'appels s'attendent \xe0 une baisse de la valeur ou restent les m\xeames."),Object(i.b)("p",null,"Acheter un appel vous donne le droit, mais pas l'obligation, pour acheter la ",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"taille du contrat")," du montant de l'actif sous-jacent au prix de lev\xe9e de l'option. Le prix de l'option d'achat devrait augmenter \xe0 mesure que le prix de l'actif sous-jacent augmente."),Object(i.b)("p",null,"\xc9crire une option d\u2019appel couvert vous permet de percevoir la prime tout en vous obligeant \xe0 vendre un montant de l\u2019actif sous-jacent au propri\xe9taire au prix de lev\xe9e convenu si le propri\xe9taire du contrat choisit d\u2019exercer le contrat."),Object(i.b)("h4",{id:"mettre-en-place"},"Mettre en place"),Object(i.b)("p",null,"Les acheteurs d'options de mise attendent g\xe9n\xe9ralement que ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"l'actif sous-jacent")," diminue en valeur, alors que les vendeurs de ventes s'attendent \xe0 une augmentation de la valeur ou restent les m\xeames."),Object(i.b)("p",null,"Acheter un put vous donne le droit, mais pas l'obligation, de vendre la taille de ",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"contrat")," du montant de l'actif sous-jacent au prix de lev\xe9e de l'option. Le prix de l\u2019option de vente devrait augmenter \xe0 mesure que le prix de l\u2019actif sous-jacent diminue."),Object(i.b)("p",null,"\xc9crire une option de vente s\xe9curis\xe9e vous permet de percevoir la prime tout en vous obligeant \xe0 acheter un montant de l\u2019actif sous-jacent au propri\xe9taire au prix de lev\xe9e convenu si le propri\xe9taire du contrat choisit d\u2019exercer le contrat."),Object(i.b)("h4",{id:"appel-couvert"},"Appel couvert"),Object(i.b)("p",null,"Une strat\xe9gie d'option compos\xe9e d'une option d'appel court et longue le m\xeame ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"actif sous-jacent"),", g\xe9n\xe9ralement utilis\xe9 si vous vous attendez \xe0 ce que le cours de l'actif sous-jacent reste relativement plat ou augmente mod\xe9r\xe9ment. Par exemple, vous feriez un appel SOL/USDC pendant que vous verrouillez 100 SOL en tant que garantie pour les appels de ",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"taille de contrat")," de 100."),Object(i.b)("h4",{id:"placement-s\xe9curis\xe9"},"Placement s\xe9curis\xe9"),Object(i.b)("p",null,"Une strat\xe9gie d'option compos\xe9e d'une option de mise courte et courte le m\xeame ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"actif sous-jacent"),", g\xe9n\xe9ralement utilis\xe9 si vous vous attendez \xe0 ce que le cours de l'actif sous-jacent reste relativement plat ou augmente mod\xe9r\xe9ment. Par exemple, vous seriez en train de vendre 1 SOL/USDC mis en verrouillant 4000 (taille du contrat du prix de lev\xe9e * *) USDC en tant que garantie pour des mises \xe0 ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"prix de lev\xe9e")," de 40 et ",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"taille du contrat")," de 100."),Object(i.b)("h4",{id:"ressource-sous-jacente"},"Ressource sous-jacente"),Object(i.b)("p",null,"L'actif \xe0 verrouiller lors de l'\xe9criture d'un appel couvert ou re\xe7u lors de l'exercice d'un appel couvert."),Object(i.b)("h4",{id:"actif-de-devis"},"Actif de devis"),Object(i.b)("p",null,"L'actif utilis\xe9 pour \xe9valuer l'actif sous-jacent."),Object(i.b)("h4",{id:"taille-du-contrat"},"Taille du contrat"),Object(i.b)("p",null,"Combien d\u2019actifs sous-jacents le d\xe9tenteur de l\u2019option peut-il exercer. Ou en d'autres termes, combien d'actifs sous-jacents doivent \xeatre verrouill\xe9s lors de l'\xe9criture d'un appel couvert."),Object(i.b)("h4",{id:"bid"},"Bid"),Object(i.b)("p",null,"Le prix auquel un acheteur est pr\xeat \xe0 acheter une option, c'est-\xe0-dire le prix auquel un vendeur peut imm\xe9diatement vendre une option."),Object(i.b)("h4",{id:"demander"},"Demander"),Object(i.b)("p",null,"Le prix auquel un vendeur est pr\xeat \xe0 vendre une option, c'est-\xe0-dire le prix auquel un acheteur peut imm\xe9diatement acheter une option."),Object(i.b)("h4",{id:"prix-de-gr\xe8ve"},"Prix de gr\xe8ve"),Object(i.b)("p",null,"Le prix dans lequel l'exercice peut \xe9changer l'actif de cotation pour l'actif ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"sous-jacent")," verrouill\xe9."),Object(i.b)("h4",{id:"expiration"},"Expiration"),Object(i.b)("p",null,"La derni\xe8re date o\xf9 l'option peut \xeatre exerc\xe9e."),Object(i.b)("h4",{id:"exercice"},"Exercice"),Object(i.b)("p",null,"L'exercice signifie mettre en vigueur le droit d'acheter ou de vendre l'actif ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"sous-jacent")," sp\xe9cifi\xe9 dans un contrat d'options. Lorsqu'un propri\xe9taire d'option d'appel exerce son contrat, ils ach\xe8teront les actifs sous-jacents au vendeur d'options au prix de lev\xe9e ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"convenu"),". Lorsqu'un propri\xe9taire d'option de vente exerce son contrat, il vend l'actif sous-jacent au vendeur d'options au prix de lev\xe9e convenu."),Object(i.b)("h4",{id:"iv"},"IV"),Object(i.b)("p",null,"La volatilit\xe9 implicite (IV) est une estimation de la volatilit\xe9 de l'actif sous-jacent qui est d\xe9riv\xe9e de la valeur marchande d'une option. Il s'agit essentiellement des pr\xe9visions du march\xe9 d'un mouvement probable du prix d'un actif sous-jacent"))}l.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,u(u({ref:t},s),{},{components:r})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);