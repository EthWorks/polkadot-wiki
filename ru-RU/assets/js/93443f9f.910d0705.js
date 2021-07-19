(self.webpackChunk=self.webpackChunk||[]).push([[422],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>h,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(u,i(i({ref:t},h),{},{components:n})):r.createElement(u,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>h,default:()=>d});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?"},c=void 0,l={unversionedId:"learn-comparisons",id:"learn-comparisons",isDocsHomePage:!1,title:"Polkadot Comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?",source:"@site/../docs/learn-comparisons.md",sourceDirName:".",slug:"/learn-comparisons",permalink:"/ru-RU/docs/learn-comparisons",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-comparisons.md",version:"current",lastUpdatedBy:"michalisFr",lastUpdatedAt:1626658625,formattedLastUpdatedAt:"19.07.2021",frontMatter:{id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?"},sidebar:"docs",previous:{title:"Cosmos",permalink:"/ru-RU/docs/learn-comparisons-cosmos"},next:{title:"Builder's Portal",permalink:"/ru-RU/docs/build-index"}},h=[{value:"In-Depth Comparisons",id:"in-depth-comparisons",children:[]},{value:"Other Comparisons",id:"other-comparisons",children:[{value:"Ethereum 1.x",id:"ethereum-1x",children:[]}]},{value:"Binance Smart Chain",id:"binance-smart-chain",children:[]}],p={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot is a blockchain technology but makes some innovations that sets it apart from other popular\nchains."),(0,o.kt)("h2",{id:"in-depth-comparisons"},"In-Depth Comparisons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-comparisons-ethereum-2"},"vs Ethereum 2.0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-comparisons-cosmos"},"vs Cosmos")))),(0,o.kt)("h2",{id:"other-comparisons"},"Other Comparisons"),(0,o.kt)("h3",{id:"ethereum-1x"},"Ethereum 1.x"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org"},"Ethereum")," is a smart contract blockchain that allows for general computation\nto be deployed on-chain and operated across the p2p network. Ethereum 1.x refers to the current\nEthereum release and the immediately planned future upgrades."),(0,o.kt)("p",null,"The difference between Ethereum 1.x and Polkadot is quite large. Ethereum is a single chain that\nallows developers to extend its functionality through the deployment of blobs of code onto the chain\n(called smart contracts). Polkadot, as described in the whitepaper, is a fully extensible and\nscalable blockchain network that provides security and interoperability through shared state."),(0,o.kt)("p",null,"In practical terms, this means that the layer of abstraction between these two projects is\nremarkably different for developers. In Ethereum, developers write smart contracts that all execute\non a single virtual machine, called the Ethereum Virtual Machine (EVM). In Polkadot, however,\ndevelopers write their logic into individual blockchains, where the interface is part of the state\ntransition function of the blockchain itself. Polkadot will also support smart contract blockchains\nfor Wasm and EVM to provide compatibility with existing contracts, but will not have smart contract\nfunctionality on its core chain, the Relay Chain."),(0,o.kt)("p",null,"As such, Polkadot is a possible augmentation and scaling method for Ethereum 1.x, rather than\ncompetition."),(0,o.kt)("h2",{id:"binance-smart-chain"},"Binance Smart Chain"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.binance.com"},"Binance Chain")," is a Proof of Stake Authority (PoSA) blockchain used to\nexchange digital assets on Binance DEX. Binance Smart Chain is an EVM-compatible smart contract\nchain bridged to Binance Chain. Together, they form the Binance Dual Chain System. Binance Smart\nChain is also a Proof of Stake Authority chain and allows users to create smart contracts and dapps."),(0,o.kt)("p",null,"Both chains are built with Cosmos SDK and therefore are a part of the\n",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-comparisons-cosmos"},"Cosmos")," ecosystem. Due to specifics of the Cosmos architecture,\ninteroperability of Binance Smart Chain is based on bridges. This means all validators of both\nchains are also bridge operators, therefore the security of the system relies on trusting\nvalidators. At the moment, there are 21 Binance Smart Chain validator nodes."),(0,o.kt)("p",null,"Polkadot has an entirely different purpose, as it was built to connect and secure unique\nblockchains. It is a protocol on which single blockchains (such as Binance Smart Chain) could be\nbuilt and benefit from shared security, interoperability and scalability. Interoperability within\nPolkadot is based on pooled security on Polkadot, and the security of the entire Polkadot network,\nand has much stronger economic security."),(0,o.kt)("p",null,"Scalability based on bridges relies on each bridged chain finding its own set of validators,\ntherefore duplicate resources are required. Scalability on Polkadot is based on the security of the\nRelay Chain, and as the number of validators in the active set on Polkadot are increased, more\nparachains can be supported."))}d.isMDXComponent=!0}}]);