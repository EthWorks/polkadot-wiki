(self.webpackChunk=self.webpackChunk||[]).push([[3861],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),d=c(a),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(m,i(i({ref:e},h),{},{components:a})):n.createElement(m,i({ref:e},h))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14365:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>d});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"build-build-with-polkadot",title:"Polkadot Builders Starter's Guide",sidebar_label:"Polkadot Builders Starter's Guide"},s=void 0,c={unversionedId:"build-build-with-polkadot",id:"build-build-with-polkadot",isDocsHomePage:!1,title:"Polkadot Builders Starter's Guide",description:"_This article is the maintained version of the blog post:",source:"@site/../docs/build-build-with-polkadot.md",sourceDirName:".",slug:"/build-build-with-polkadot",permalink:"/zh-CN/docs/build-build-with-polkadot",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-build-with-polkadot.md",version:"current",lastUpdatedBy:"Bruno \u0160kvorc",lastUpdatedAt:1624433979,formattedLastUpdatedAt:"2021/6/23",frontMatter:{id:"build-build-with-polkadot",title:"Polkadot Builders Starter's Guide",sidebar_label:"Polkadot Builders Starter's Guide"},sidebar:"docs",previous:{title:"Builder's Portal",permalink:"/zh-CN/docs/build-index"},next:{title:"Parachain Development Kits (PDKs)",permalink:"/zh-CN/docs/build-pdk"}},h=[{value:"Polkadot Ecosystem Networks",id:"polkadot-ecosystem-networks",children:[]},{value:"What is the difference between building a parachain, a parathread, or a smart contract?",id:"what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract",children:[{value:"Parachains &amp; Parathreads",id:"parachains--parathreads",children:[]},{value:"Smart Contracts",id:"smart-contracts",children:[]}]},{value:"So you want to build a parachain or parathread...",id:"so-you-want-to-build-a-parachain-or-parathread",children:[{value:"Get started with Substrate",id:"get-started-with-substrate",children:[]},{value:"How to set up your parachain",id:"how-to-set-up-your-parachain",children:[]},{value:"How to deploy your parachain or parathread in Polkadot",id:"how-to-deploy-your-parachain-or-parathread-in-polkadot",children:[]}]},{value:"So you want to build a smart contract...",id:"so-you-want-to-build-a-smart-contract",children:[{value:"Frontier EVM Contracts",id:"frontier-evm-contracts",children:[]},{value:"Contracts Pallet",id:"contracts-pallet",children:[]},{value:"Ink",id:"ink",children:[]},{value:"It&#39;s still early",id:"its-still-early",children:[]},{value:"Moonbeam",id:"moonbeam",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:h};function d(t){var e=t.components,l=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This article is the maintained version of the blog post:\n",(0,r.kt)("a",{parentName:"em",href:"https://medium.com/polkadot-network/everything-you-need-to-know-to-prepare-for-polkadot-32d08b929735"},"Everything you Need to Know to Prepare for Polkadot"),".")),(0,r.kt)("p",null,"Polkadot is a blockchain protocol with two goals: providing ",(0,r.kt)("strong",{parentName:"p"},"shared security")," among all connected\nparachains and allowing all connected chains to ",(0,r.kt)("strong",{parentName:"p"},"interoperate")," by using ",(0,r.kt)("a",{parentName:"p",href:"learn-crosschain"},"XCMP"),".\nWith the advent of ",(0,r.kt)("a",{parentName:"p",href:"build-pdk"},"PDKs")," like Parity Substrate and Cumulus, the time it takes to develop\nand launch a new chain has dropped significantly. While before it would take years to launch a new\nchain, now it may only take weeks or even days."),(0,r.kt)("p",null,"This guide will walk you through the steps you can take today to get started building your vision\nwith Polkadot. It will explain the difference between a parachain and a smart contract (and why one\nmay be better suited for your application over the other)."),(0,r.kt)("h2",{id:"polkadot-ecosystem-networks"},"Polkadot Ecosystem Networks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainnet: ",(0,r.kt)("strong",{parentName:"li"},"Polkadot")),(0,r.kt)("li",{parentName:"ul"},"Canary network: ",(0,r.kt)("strong",{parentName:"li"},"Kusama"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.network/"},"Kusama")," is a value-bearing canary network that gets features before\nPolkadot does... ",(0,r.kt)("em",{parentName:"li"},"expect chaos"),"..."))),(0,r.kt)("li",{parentName:"ul"},"Official testnets:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Westend")," - Functionality equal to the current Polkadot mainnet, with possible next-generation\ntesting of features from time to time that will eventually migrate onto Polkadot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Canvas")," - Wasm based Smart Contract enabled testnet, primarily for ",(0,r.kt)("inlineCode",{parentName:"li"},"ink!")," development."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rococo")," - Parachains and XCM testnet.")))),(0,r.kt)("p",null,"Polkadot mainnet has been running since May 2020 and has\n",(0,r.kt)("a",{parentName:"p",href:"learn-implementations"},"implementations in various programming languages")," ranging from Rust to\nJavaScript. Currently, the leading implementation is built in Rust and built using the Substrate\nframework."),(0,r.kt)("p",null,"Tooling is rapidly evolving to interact with the network; there are so many ways to get started!"),(0,r.kt)("p",null,"But before you jump head-first into the code, you should consider the ",(0,r.kt)("em",{parentName:"p"},"kind")," of decentralized\napplication you want to make and understand the different paradigms available to developers who want\nto build on Polkadot."),(0,r.kt)("h2",{id:"what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract"},"What is the difference between building a parachain, a parathread, or a smart contract?"),(0,r.kt)("p",null,"Polkadot provides a few ways for you to deploy your application: as a smart contract on an existing\nparachain, as your own parachain, or as a parathread. There are trade-offs when working with each of\nthese and reading this section will help you understand them."),(0,r.kt)("h3",{id:"parachains--parathreads"},"Parachains & Parathreads"),(0,r.kt)("p",null,'Parachains are "parallel" chains containing their own runtime logic and can benefit from the shared\nsecurity and the cross-chain messaging provided by the Polkadot Relay Chain. Parachains permit a\nhigh degree of flexibility and customization but require more effort to create and maintain over\ntime.'),(0,r.kt)("p",null,"Parathreads are like parachains and enable the developer to have lower-level control of the logic of\ntheir application. The main difference between the two is economic since parathreads will be much\nless expensive to secure than a parachain. The lower costs of parathreads are due to the fact that\nparathreads will only produce a block when they need to, unlike parachains, which have secured a\nslot to produce a block at every block of the Relay Chain. When building a parathread, you will use\nthe same tools (like PDKs) and you get all of the benefits of building a parachain, without the\ndrawback of the cost."),(0,r.kt)("p",null,"Parachains grant the creators more space to build the monetary system and other aspects of the chain\nfrom the ground up. They will allow for more succinct and efficient execution of complex logic than\ncould ever be offered by a smart contract platform. Parachains also offer more flexibility in the\nform of governance and can perform complete upgrades in a less controversial way than the current\nprocess of hard-forks."),(0,r.kt)("p",null,"Some examples of features you can have on a parachain or parathread:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom fee structure (for example, pay a flat fee for transactions or pay per byte)."),(0,r.kt)("li",{parentName:"ul"},"Custom monetary policy for the native token and local economy."),(0,r.kt)("li",{parentName:"ul"},"Treasury to be funded through transitions in your state function."),(0,r.kt)("li",{parentName:"ul"},"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build 1",src:a(74722).Z})),(0,r.kt)("p",null,"Parachains open possibilities to construct complex runtime logic that would be too expensive to\nexecute with smart contracts. However, unlike smart contracts, parachains lack a mandatory gas\nmetering system entirely and could potentially be vulnerable to bugs that cause infinite loops\n(something that is prevented by design in smart contracts). This vulnerability is mitigated by the\nweight system that is implemented in Substrate -- although it places more of a burden on the\ndeveloper of the parachain to properly perform benchmarks."),(0,r.kt)("p",null,"You may also decide to harness a combination of parachain, parathread, and smart contract. If you\nhave certain logic that requires loops and it cannot be removed, use the native parachain runtime to\nhandle all complex logic and the smart contract to call iteration. If you require off-chain data\nfrom an oracle, you may want to use a parathread as an oracle feed that only triggers once every 24\nhours (this makes the most sense if the data is useful to other players in the Polkadot ecosystem\ntoo)."),(0,r.kt)("p",null,"Most likely you\u2019ve already realized that your application is better suited to be one or the other\n(or a hybrid of them both), but if you need a quick recap to digest the information, you can use\nthis comparison chart as a cheat sheet:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build 2",src:a(46347).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The image above does not include parathreads, but as we mentioned before all the\nbenefits of parachains apply just as well to parathreads. Parathreads, however, ",(0,r.kt)("em",{parentName:"p"},"are"),' cheaper to\ndeploy and maintain. So if they had a column on the table above, it would look like the parachain\ncolumn with "Ease of deployment" and "Maintenance overhead" changed to ',(0,r.kt)("inlineCode",{parentName:"p"},"+"),".")),(0,r.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("p",null,"A smart contract is simply some code that exists at an address on a chain and is callable by\nexternal actors. The key part is that you actually have to put the code on chain before anyone can\nstart executing it!"),(0,r.kt)("p",null,"Deploying your smart contract on chain will vary slightly for whichever specific parachain you will\nuse, but generally you will send a special transaction that will create the smart contract on the\nledger. You will likely need to pay an associated fee for the initialization logic and any storage\nthat your contract consumes."),(0,r.kt)("p",null,"On the Polkadot mainnet, there will be parachains that act as smart contract platforms. Smart\ncontracts are executable programs that exist on only a single chain and are limited in complexity.\nBecause they exist on a single chain, they can have smooth interoperability with other smart\ncontracts on the same chain. However, they will always be constrained and limited by the inherent\ncharacteristics of their host chain."),(0,r.kt)("p",null,"If there is a need to have a large amount of control over the design and features of your\napplication, a parachain is a better choice. Keep in mind, smart contracts can be used as a testing\nground before later being turned into full-fledged parachains. Smart contract platforms will usually\nhave convenient tooling like IDEs to facilitate quick iterations. A smart contract MVP could be\ncreated to gauge user interest before putting in the work to build out a parachain."),(0,r.kt)("p",null,"Each platform will have a different way of paying for and maintaining the state of your smart\ncontract. The different patterns you may see for paying for your smart contract include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A transaction fee associated with deploying each transaction."),(0,r.kt)("li",{parentName:"ul"},"A subscription model in which you pay some chain entity routinely for the usage of the platform."),(0,r.kt)("li",{parentName:"ul"},"An access token model for which you need to hold a threshold of native tokens to use the platform\n(EOS has something similar). Storage rent."),(0,r.kt)("li",{parentName:"ul"},"Free trial or developer promotion."),(0,r.kt)("li",{parentName:"ul"},"Most smart contract platforms use some form of gas to limit the number of operations a user can\nperform. Users will be required to pay for the gas upfront and will be refunded for what they\ndon\u2019t use.")),(0,r.kt)("p",null,"You will need to consider the storage and complexity of your smart contract to ensure that gas usage\nstays within reasonable bounds. Storage will likely be expensive for whichever smart contract\nplatform you use, so it is necessary to keep as much data off-chain as possible. You may consider\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," or ",(0,r.kt)("a",{parentName:"p",href:"https://storj.io/"},"Storj")," to keep the data and submitting only\nthe content address on chain."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This guide now splits into two sections depending on whether you\u2019ve decided on a smart contract or a\nparachain to build your application. Feel free to read both sections or just the one that is\napplicable to you."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#so-you-want-to-build-a-parachain-or-parathread"},"I want to build a parachain or parathread!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#so-you-want-to-build-a-smart-contract"},"I want to build a smart contract!"))),(0,r.kt)("h2",{id:"so-you-want-to-build-a-parachain-or-parathread"},"So you want to build a parachain or parathread..."),(0,r.kt)("p",null,"Now that you have determined that building a parachain or parathread is the right approach for your\nnew project, the next step is to decide which framework to use. Frameworks for building a parachain\nor parathread are known as parachain development kits (",(0,r.kt)("a",{parentName:"p",href:"build-pdk"},"PDK"),"s). Currently, the only PDK\navailable is Substrate and Cumulus from Parity Technologies."),(0,r.kt)("p",null,"In the future, there will be many different PDKs available in different programming languages, just\nlike there are multiple ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-implementations"},"implementations of the Polkadot Host"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Call to Action:")," Do you want to build a Parachain Development Kit from scratch? The Web3\nFoundation is giving grants to teams who are doing this, learn more and apply on the\n",(0,r.kt)("a",{parentName:"p",href:"https://grants.web3.foundation"},"W3F grants page"),".")),(0,r.kt)("h3",{id:"get-started-with-substrate"},"Get started with Substrate"),(0,r.kt)("p",null,"Substrate is the underlying framework on which Polkadot itself is built. It is a toolset for\nblockchain innovators that provides the necessary building blocks for constructing a chain. It\nincludes a library of modular runtime plug-ins from which you can compose your chain logic."),(0,r.kt)("p",null,"The best way to get started with Substrate is to explore the\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate Developer Hub"),", an online resource built and maintained\nby ",(0,r.kt)("a",{parentName:"p",href:"https://parity.io"},"Parity Technologies"),"."),(0,r.kt)("h3",{id:"how-to-set-up-your-parachain"},"How to set up your parachain"),(0,r.kt)("p",null,"After creating your chain runtime logic with Substrate, you will be able to compile it down to a\nWasm executable. This Wasm code blob will contain the entire state transition function of your\nchain, and is what you will need to deploy your project to Polkadot as either a parachain or\nparathread."),(0,r.kt)("p",null,"Validators on Polkadot will use the submitted Wasm code to validate the state transitions of your\nchain or thread, but doing this requires some additional infrastructure. A validator needs some way\nto stay up to date with the most recent state transitions, since Polkadot nodes will not be required\nto also be nodes of your chain."),(0,r.kt)("p",null,"This is where the collator node comes into play. A collator is a maintainer of your parachain and\nperforms the critical action of producing new block candidates for your chain and passing them to\nPolkadot validators for inclusion in the Polkadot relay chain."),(0,r.kt)("p",null,"Substrate comes with its own networking layer built-in but unfortunately only supports solo chains\n(that is, chains that do not connect to the relay chain). However, there is the Cumulus extension\nthat includes a collator node and allows for your Substrate-built logic to be compatible with\nPolkadot as either a parachain or parathread."),(0,r.kt)("h4",{id:"cumulus"},"Cumulus"),(0,r.kt)("p",null,"The goal of ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-cumulus"},"Cumulus")," is to be an extension of\nSubstrate that will make any Substrate runtime compatible with Polkadot."),(0,r.kt)("p",null,"It handles the network compatibility overhead that any parachain would need to implement to be\nconnected to Polkadot. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cross-chain message passing (XCMP)."),(0,r.kt)("li",{parentName:"ul"},"Out-of-the-box Collator node setup."),(0,r.kt)("li",{parentName:"ul"},"An embedded full client of the Relay Chain."),(0,r.kt)("li",{parentName:"ul"},"Polkadot block authorship compatibility.")),(0,r.kt)("p",null,"Integrating Cumulus with your Substrate chain will port it into a parachain capable of working on\nPolkadot with minimal modification, possibly as little work as importing a crate and adding a few\nlines!"),(0,r.kt)("h3",{id:"how-to-deploy-your-parachain-or-parathread-in-polkadot"},"How to deploy your parachain or parathread in Polkadot"),(0,r.kt)("h4",{id:"parachain"},"Parachain"),(0,r.kt)("p",null,"In order to include your parachain into the Polkadot network, you will need to acquire a parachain\nslot."),(0,r.kt)("p",null,"Parachain slots will be sold in open auctions, the mechanics of which can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"learn-auction"},"parachain auction"),"\n"," page of the wiki."),(0,r.kt)("h4",{id:"parathread"},"Parathread"),(0,r.kt)("p",null,"Parathreads will not require a parachain slot, so you will not need to engage in the candle auction\nmechanism. Instead, you will be able to register your parathread code to the relay chain for a fee\nand from then be able to start participating in the per-block auctions for inclusion of your state\ntransition into the relay chain."),(0,r.kt)("p",null,"For more information on how parathread per-block auctions work, see the more detailed\n",(0,r.kt)("a",{parentName:"p",href:"learn-parathreads"},"parathread"),"\n"," page."),(0,r.kt)("h2",{id:"so-you-want-to-build-a-smart-contract"},"So you want to build a smart contract..."),(0,r.kt)("p",null,"The Polkadot relay chain itself will not support smart contracts. However, since the parachains that\nconnect to Polkadot can support arbitrary state transitions, they can support smart contracts."),(0,r.kt)("p",null,"Substrate presently supports smart contracts out-of-the-box in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The EVM pallet offered by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/frontier"},"Frontier"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},"Contracts pallet")," in the FRAME library for Wasm based contracts.")),(0,r.kt)("h3",{id:"frontier-evm-contracts"},"Frontier EVM Contracts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier"},"Frontier")," is the suite of tools that enables a Substrate chain to run Ethereum contacts (EVM)\nnatively with the same API/RPC interface Ethereum exposes on Substrate. Ethereum Addresses can also\nbe mapped directly to and from Substrate's SS58 sceme from existing accounts."),(0,r.kt)("h3",{id:"contracts-pallet"},"Contracts Pallet"),(0,r.kt)("p",null,"The experience of deploying to an EVM-based chain may be more familiar to developers that have\nwritten smart contracts before. However, the Contracts pallet makes some notable improvements to the\ndesign of the EVM:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wasm"),". The Contracts pallet uses WebAssembly as its compilation target. Any language that\ncompiles to Wasm can potentially be used to write smart contracts. Although it's better to have a\ndedicated domain-specific language and for that reason Parity offers the ",(0,r.kt)("a",{parentName:"p",href:"#ink"},"ink!")," language.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rent"),". Contracts must pay rent or else hold a deposit suitably large enough in order to\njustify its existence on-chain. When a contract does not uphold this, it may create what's called\na ",(0,r.kt)("em",{parentName:"p"},"tombstone")," which is a reference to the contract. In some conditions, the contract will be\ndeleted outright along with its storage if it does not maintain these requirements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Caching"),". Contracts are cached by default and therefore means they only need to be deployed\nonce and afterward be instantiated as many times as you want. This helps to keep the storage load\non the chain down to the minimum. On top of this, when a contract is no longer being used and the\n",(0,r.kt)("em",{parentName:"p"},"existential deposit")," is drained, the code will be erased from storage (known as reaping)."))),(0,r.kt)("h3",{id:"ink"},"Ink"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},"ink!")," is a domain specific language for writing smart contracts\nin Rust and compiles to Wasm code. As it states in its README, it is still in an experimental phase\nso brave developers should be aware that they might have a bumpy - but workable - development\nexperience. There are some projects that have built projects in ink! with a decent level of\ncomplexity such as Plasm's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/staketechnologies/Plasm"},"Plasma contracts"),", so it is mature enough to start\nbuilding interesting things."),(0,r.kt)("p",null,"For interested developers, they can get started writing smart contracts using ink! by studying the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples"},"examples")," that were already written. These\ncan be used as guideposts to writing more complex logic that will be deployable on smart contract\nparachains."),(0,r.kt)("p",null,"ink! has laid much of the groundwork for a new smart contract stack that is based on a Wasm virtual\nmachine and compatible with Substrate chains."),(0,r.kt)("h3",{id:"its-still-early"},"It's still early"),(0,r.kt)("p",null,"It\u2019s still very early for smart contracts on Polkadot and the development is only now stabilizing.\nWe are actively producing content to help developers get up to speed and will maintain the wiki with\nthe latest resources. You should also keep up to date with the following links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://edgewa.re"},"Edgeware"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://moonbeam.network"},"Moonbeam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"ink!"),". (Keep an eye out for content on the wiki tab.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},"Substrate contracts pallet"),".")),(0,r.kt)("h4",{id:"edgeware"},"Edgeware"),(0,r.kt)("p",null,"One project that is live today with the smart contracts pallet is ",(0,r.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),". Edgeware is\na permissionless platform for smart contracts and is conducting experiments with on-chain\ngovernance. It is currently the best option for developers who have created their smart contracts\nand want to deploy to a live environment."),(0,r.kt)("p",null,"Edgeware intends to at some point connect to Polkadot as a parachain that allows for smart\ncontracts. At this point, the smart contracts would be able to interact with other pieces of the\nPolkadot ecosystem through ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crosschain"},"XCMP"),"."),(0,r.kt)("p",null,"Edgeware general documentation can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.edgewa.re/"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://contracts.edgewa.re/"},"how to deploy smart\ncontracts on Edgeware here"),"."),(0,r.kt)("h3",{id:"moonbeam"},"Moonbeam"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moonbeam.network"},"Moonbeam")," is another project that is planning to deploy to Polkadot as a parachain and will\nsupport smart contracts. Since Moonbeam uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier"},"Frontier"),", an interoperability layer with existing\nEthereum tooling, it will support all applications that are written to target the EVM environment\nwith little friction."),(0,r.kt)("p",null,"Try deploying a contract to Moonbeam by following their ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moonbeam.network/"},"documentation"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This guide has given you a mental model and shown the requisite resources to help you determine and\nstart building your project as a parachain or smart contract today. Even though the tooling is still\nmaturing, the advantage of being early will be the familiarity and head start on your project,\nallowing you to innovate and create something truly new."),(0,r.kt)("p",null,"If you have interesting ideas for parachains or smart contracts on Polkadot feel free to drop into\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:matrix.org"},"Polkadot Watercooler")," to talk about them.\nDevelopers may be interested in joining the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadotnoobs:matrix.org"},"Polkadot Beginners Lounge")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#substrate-technical:matrix.org"},"Substrate Technical")," to ask their questions.\nAs always, keep up to date with Polkadot and Kusama by following the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/community"},"social channels"),"."),(0,r.kt)("p",null,"Good luck!"))}d.isMDXComponent=!0},74722:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/build-1-706b8858ef80594b1c9d2cd9c4ce0421.png"},46347:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/build-2-0b8f4288c205d78acc331e706d3462b4.png"}}]);