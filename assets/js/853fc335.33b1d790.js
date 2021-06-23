(self.webpackChunk=self.webpackChunk||[]).push([[7513],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||n;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81805:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var r=a(22122),o=a(19756),n=(a(67294),a(3905)),l=["components"],i={id:"learn-collator",title:"Collator",sidebar_label:"Collator"},s=void 0,c={unversionedId:"learn-collator",id:"learn-collator",isDocsHomePage:!1,title:"Collator",description:"Collators maintain parachains by collecting parachain transactions from users and producing state",source:"@site/../docs/learn-collator.md",sourceDirName:".",slug:"/learn-collator",permalink:"/docs/learn-collator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-collator.md",version:"current",lastUpdatedBy:"Nam Hoang Le",lastUpdatedAt:1624446778,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"learn-collator",title:"Collator",sidebar_label:"Collator"},sidebar:"docs",previous:{title:"Validator",permalink:"/docs/learn-validator"},next:{title:"Governance",permalink:"/docs/learn-governance"}},p=[{value:"XCMP",id:"xcmp",children:[]},{value:"Collators in the Wild",id:"collators-in-the-wild",children:[]},{value:"Guides and Tools",id:"guides-and-tools",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Collators maintain parachains by collecting parachain transactions from users and producing state\ntransition proofs for Relay Chain validators. In other words, collators maintain parachains by\naggregating parachain transactions into parachain block candidates and producing state transition\nproofs for validators based on those blocks."),(0,n.kt)("p",null,"A collator cannot continue building blocks on a parachain until the block candidate they proposed to\nthe Relay Chain validators has been validated."),(0,n.kt)("p",null,"Collators maintain a full-node for the Relay Chain, and a full-node for their particular parachain;\nmeaning they retain all necessary information to be able to author new blocks and execute\ntransactions in much the same way as miners do on current PoW blockchains. Under normal\ncircumstances, they will collate and execute transactions to create an unsealed block and provide\nit, together with a proof of state transition, to one or more validators responsible for proposing a\nparachain block."),(0,n.kt)("p",null,"Unlike validators, collator nodes do not secure the network. If a parachain block is invalid, it\nwill get rejected by validators. Therefore the assumption that having more collators is better or\nmore secure is not correct. On the contrary, too many collators may slow down the network. The only\nnefarious power collators have is transaction censorship. To prevent censorship, a parachain only\nneed ensure that there exist some neutral collators - but not necessarily a majority. Theoretically\nthe censorship problem is solved with having just one honest collator."),(0,n.kt)("h3",{id:"xcmp"},"XCMP"),(0,n.kt)("p",null,"Collators are a key element of ",(0,n.kt)("a",{parentName:"p",href:"learn-crosschain"},"XCMP (Cross-Chain Message Passing)"),". By being\nfull-nodes of the Relay Chain, they are all aware of each other as peers. This makes it possible for\nthem to send messages from parachain A to parachain B."),(0,n.kt)("h3",{id:"collators-in-the-wild"},"Collators in the Wild"),(0,n.kt)("p",null,"Collators are being used on the ",(0,n.kt)("a",{parentName:"p",href:"build-parachains-rococo"},"Rococo")," testnet, and you can learn more\nabout how they are used with Cumulus via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/"},"Cumulus"),"\nrepository."),(0,n.kt)("h3",{id:"guides-and-tools"},"Guides and Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://substrate.dev/cumulus-workshop/"},"Workshop covering Cumulus and Collators")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/build-parachains-rococo"},"Rococo tesnet guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shawntabrizi/polkadot-launch"},"polkadot-launch")," - a tool to quickly spin up a\nlocal Polkadot testnet based on some parameters like number of parachains, collator setup, etc.")))}d.isMDXComponent=!0}}]);