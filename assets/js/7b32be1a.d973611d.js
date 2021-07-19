(self.webpackChunk=self.webpackChunk||[]).push([[4692],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return o?n.createElement(y,i(i({ref:t},p),{},{components:o})):n.createElement(y,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},40220:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var n=o(22122),a=o(19756),r=(o(67294),o(3905)),i=["components"],s={id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts"},l=void 0,c={unversionedId:"learn-proxies",id:"learn-proxies",isDocsHomePage:!1,title:"Proxy Accounts",description:"Polkadot provides a module that allows users to set proxy accounts to perform a limited number of",source:"@site/../docs/learn-proxies.md",sourceDirName:".",slug:"/learn-proxies",permalink:"/docs/learn-proxies",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-proxies.md",version:"current",lastUpdatedBy:"michalisFr",lastUpdatedAt:1626658625,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts"},sidebar:"docs",previous:{title:"Staking",permalink:"/docs/learn-staking"},next:{title:"Availability and Validity",permalink:"/docs/learn-availability"}},p=[{value:"Proxy Types",id:"proxy-types",children:[{value:"Any Proxies",id:"any-proxies",children:[]},{value:"Non-transfer Proxies",id:"non-transfer-proxies",children:[]},{value:"Governance Proxies",id:"governance-proxies",children:[]},{value:"Staking Proxies",id:"staking-proxies",children:[]},{value:"Identity Judgement Proxies",id:"identity-judgement-proxies",children:[]},{value:"Anonymous Proxies",id:"anonymous-proxies",children:[]}]},{value:"Why use a Proxy?",id:"why-use-a-proxy",children:[]},{value:"How to set up a Proxy",id:"how-to-set-up-a-proxy",children:[{value:"Using the Polkadot-JS UI",id:"using-the-polkadot-js-ui",children:[]},{value:"Creating Anonymous Proxies on Polkadot-JS UI",id:"creating-anonymous-proxies-on-polkadot-js-ui",children:[]},{value:"Another way to create Proxies",id:"another-way-to-create-proxies",children:[]},{value:"Removing Proxies",id:"removing-proxies",children:[]}]},{value:"How to view your Proxies",id:"how-to-view-your-proxies",children:[]},{value:"Putting It All Together",id:"putting-it-all-together",children:[]},{value:"Proxy Deposits",id:"proxy-deposits",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot provides a module that allows users to set proxy accounts to perform a limited number of\nactions on their behalf. Much like the Stash and Controller account relationship in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking"),", proxies allow users to keep one account in cold storage and actively\nparticipate in the network with the weight of the tokens in that account."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Check out our Polkadot Youtube video that explains\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=EuaM5dWAJis&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=29&ab_channel=Polkadot"},"what are proxies"),".")),(0,r.kt)("h2",{id:"proxy-types"},"Proxy Types"),(0,r.kt)("p",null,"You can set a proxy account via the Proxy module. When you set a proxy, you must choose a type of\nproxy for the relationship. Polkadot offers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any"),(0,r.kt)("li",{parentName:"ul"},"Non-transfer"),(0,r.kt)("li",{parentName:"ul"},"Governance"),(0,r.kt)("li",{parentName:"ul"},"Staking"),(0,r.kt)("li",{parentName:"ul"},"Identity Judgement")),(0,r.kt)("p",null,"When a proxy account makes a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," transaction, Polkadot filters the desired transaction to ensure\nthat the proxy account has the appropriate permission to make that transaction on behalf of the cold\naccount."),(0,r.kt)("h3",{id:"any-proxies"},"Any Proxies"),(0,r.kt)("p",null,'As implied by the name, a proxy type of "Any" allows the proxy account to make any transaction,\nincuding balance transfers. In most cases, this should be avoided as the proxy account is used more\nfrequently than the cold account and is therefore less secure.'),(0,r.kt)("h3",{id:"non-transfer-proxies"},"Non-transfer Proxies"),(0,r.kt)("p",null,'Proxies that are of the type "non-transfer" are accounts that allow any type of transaction except\nbalance transfers (including vested transfers).'),(0,r.kt)("h3",{id:"governance-proxies"},"Governance Proxies"),(0,r.kt)("p",null,'The "Governance" type will allow proxies to make transactions related to governance (i.e., from the\nDemocracy, Council, Treasury, Technical Committee, and Elections pallets).'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy#governance-proxies"},"Governance")," for more information on\ngovernance proxies or watch our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=q5qLFhG4SDw&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=27&ab_channel=Polkadot"},"technical explainer video that explores this concept"),".")),(0,r.kt)("h3",{id:"staking-proxies"},"Staking Proxies"),(0,r.kt)("p",null,'The "Staking" type allows staking-related transactions, but do not confuse a staking proxy with the\nController account. Within the Staking pallet, some transactions must come from the Stash, while\nothers must come from the Controller. The Stash account is meant to stay in cold storage, while the\nController account makes day-to-day transactions like setting session keys or deciding which\nvalidators to nominate. The Stash account still needs to make some transactions, though, like\nbonding extra funds or designating a new Controller. A proxy doesn\'t change the ',(0,r.kt)("em",{parentName:"p"},"roles")," of Stash and\nController accounts, but does allow the Stash to be accessed even less frequently."),(0,r.kt)("h3",{id:"identity-judgement-proxies"},"Identity Judgement Proxies"),(0,r.kt)("p",null,'"Identity Judgement" proxies are in charge of allowing registars to make judgement on an account\'s\nidentity. If you are unfamiliar with judgements and identities on chain, please refer to\n',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-identity#judgements"},"this page"),"."),(0,r.kt)("h3",{id:"anonymous-proxies"},"Anonymous Proxies"),(0,r.kt)("p",null,"Polkadot includes a function to create an anonymous proxy, an account that can only be accessed via\nproxy. That is, it generates an address but no corresponding private key. Normally, a primary\naccount designates a proxy account, but anonymous proxies are the opposite. The account that creates\nthe proxy relationship is the proxy account and the new account is the primary. Use extreme care\nwith anonymous proxies; once you remove the proxy relationship, the account will be inaccessible."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about anonymous proxies from our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iWq53zXo7dw&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=28&ab_channel=Polkadot"},"technical explainer video"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anonymous proxy",src:o(28095).Z})),(0,r.kt)("h2",{id:"why-use-a-proxy"},"Why use a Proxy?"),(0,r.kt)("p",null,"Proxies are great to use for specific purposes because they add in a layer of security. Rather than\nusing funds in one sole account, smaller accounts with unique roles complete tasks for the main\nstash account. This drives attention away from the main account and to proxies."),(0,r.kt)("p",null,"Anonymous proxies, in particular, can be used for permissionless management. In this example below,\nthere is a multisig with four different accounts inside. Two of the accounts, Alice and Bob, have an\nanonymous proxy attached to them. In the case that the multisig account wanted to add or remove\nAlice or Bob or even add in a new account into the anonymous proxy, the anonymous proxy would take\ncare of that change. If a multisig wanted to modify itself without an anonymous proxy, a whole new\nmultisig would be created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anonymous mutlisig proxy",src:o(56849).Z})),(0,r.kt)("h2",{id:"how-to-set-up-a-proxy"},"How to set up a Proxy"),(0,r.kt)("h3",{id:"using-the-polkadot-js-ui"},"Using the Polkadot-JS UI"),(0,r.kt)("p",null,"To set up a proxy, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Polkadot-JS UI"),' and\nclick on "Developer" > "Extrinsics". Here we will see a page that looks similar to this:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxy generation",src:o(17058).Z})),(0,r.kt)("p",null,'To add a proxy, click on the pallet selection dropdown menu. The dropdown is labeled "submit the\nfollowing extrinsic". Select the ',(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," pallet, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"addProxy")," extrinsic (in the dropdown menu\nnext to it). The ",(0,r.kt)("inlineCode",{parentName:"p"},"addProxy(proxy, proxy_type)")," function will need to be selected in order to add in\na proxy. The chosen proxy account that you set will be the account that has the proxy on it. The\nselected account at the top is the account that will be the primary account."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note: If you see an "unused" option when adding in a proxy, this is not a proxy type. This is an\nempty enum, and if you try to add this in as a proxy, nothing will happen. No new proxy will be\ncreated.')),(0,r.kt)("h3",{id:"creating-anonymous-proxies-on-polkadot-js-ui"},"Creating Anonymous Proxies on Polkadot-JS UI"),(0,r.kt)("p",null,"For anonymous proxies, a different function will need to be called, the\n",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous(proxy_type, index)"),". This will let you select which kind of anonymous proxy you would\nlike to set up if you choose, as well as the index."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxy generation",src:o(80284).Z})),(0,r.kt)("h3",{id:"another-way-to-create-proxies"},"Another way to create Proxies"),(0,r.kt)("p",null,'There is another way you can set up a proxy on Polkadot-JS UI. Go to "Accounts" in the navigation\nand then click the "Accounts" button. For each of the accounts you have on this page, the three dot\nbutton will let you create a proxy by using "Add proxy". This will open up a pop up onto your screen\nwhere you will be able to select the type of proxy for that specific account.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxy generation part 2",src:o(45137).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You cannot create an anonymous function from the Accounts page, you must be on the\nExtrinsics page.")),(0,r.kt)("h3",{id:"removing-proxies"},"Removing Proxies"),(0,r.kt)("p",null,"If you want to remove a proxy, there are a few functions on the extrinsic page that will help do\nthis. The ",(0,r.kt)("inlineCode",{parentName:"p"},"killAnonymous()")," function will let you remove an anonymous proxy. Both the\n",(0,r.kt)("inlineCode",{parentName:"p"},"removeProxies()")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"removeProxy()")," will remove any other type of proxy but the former will\nremove all proxies made while the latter will remove one selected proxy."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"remove proxies",src:o(44806).Z})),(0,r.kt)("h2",{id:"how-to-view-your-proxies"},"How to view your Proxies"),(0,r.kt)("p",null,'To view your proxy, head over to the Chain State (underneath "Developer") page on\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate"},"Polkadot-JS Apps"),". If\nyou've created your proxy on a Kusama account, it is required to change your network accordingly\nusing the top left navigation button. On this page, the proxy pallet should be selected, returning\nthe announcements and proxies functions. The proxies function will allow you to see your created\nproxies for either one account or for all accounts (using the toggle will enable this). Proxy\nannouncements are what time lock proxies do to announce they are going to conduct an action."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"view proxies",src:o(49259).Z})),(0,r.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,r.kt)("p",null,"If the idea of proxy types and their application seems abstract, it is. Here is an example of how\nyou might use these accounts. Imagine you have one account as your primary token-holding account,\nand don't want to access it very often, but you do want to participate in governance and staking.\nYou could set Governance and Staking proxies."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxies",src:o(7059).Z})),(0,r.kt)("p",null,"In this example, the primary account A would only make two transactions to set account B as its\ngovernance proxy and account C as its staking proxy. Now, account B could participate in governance\nactivity on behalf of A."),(0,r.kt)("p",null,"Likewise, account C could perform actions typically associated with a stash account, like bonding\nfunds and setting a Controller, in this case account D. Actions that normally require the Stash,\nlike bonding extra tokens or setting a new Controller, can all be handled by its proxy account C. In\nthe case that account C is compromised, it doesn't have access to transfer-related transactions, so\nthe primary account could just set a new proxy to replace it."),(0,r.kt)("p",null,"By creating multiple accounts that act for a single account, it lets you come up with more granular\nsecurity practices around how you protect private keys while still being able to actively\nparticipate in a network."),(0,r.kt)("h2",{id:"proxy-deposits"},"Proxy Deposits"),(0,r.kt)("p",null,"Proxies require deposits in the native currency (i.e. DOT or KSM) in order to be created. The\ndeposit is required because adding a proxy requires some storage space on-chain, which must be\nreplicated across every peer in the network. Due to the costly nature of this, these functions could\nopen up the network to a Denial-of-Service attack. In order to defend against this attack, proxies\nrequire a deposit to be reserved while the storage space is consumed over the life time of the\nproxy. When the proxy is removed, so is the storage space, and therefore the deposit is returned."),(0,r.kt)("p",null,"The deposits are calculated in the runtime, and the function can be found in the runtime code. For\nexample, the deposits are calculated in Polkadot with the following functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// One storage item; key size 32, value size 8; .\npub const ProxyDepositBase: Balance = deposit(1, 8);\n// Additional storage item size of 33 bytes.\npub const ProxyDepositFactor: Balance = deposit(0, 33);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is the required amount to be reserved for an account to have a proxy list\n(creates one new item in storage). For every proxy the account has, an additonal amount defined by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is reserved as well (appends 33 bytes to storage location)."),(0,r.kt)("p",null,"On Polkadot the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is 20.008 and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is\n0.033."),(0,r.kt)("p",null,"So what this boils down to is that the required deposit amount for one proxy on Polkadot is equal to\n(in DOT):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"20.008 + 0.033 * num_proxies\n")))}d.isMDXComponent=!0},56849:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/multisig_proxy_diagram-94c4da090dc2d8bf9787fd9ea25b2109.png"},45137:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_add_another_proxy-267c2644c7a78704899f26095f515f83.png"},80284:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_anon_proxy-e1b923310ed862d35f2ae1c224f7d383.png"},17058:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_generating_proxy-17fa829dc930ca4b5742fda11a25bd91.png"},44806:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_remove_proxy-bcdf01bfdb4dcc4d049e0aa4bc1f9181.png"},49259:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/polkadot_view_proxies-b136067580a258208b105b05da441ee7.png"},28095:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/proxy_anonymous_diagram-b539913fb66a972847a9b038e043e7a0.png"},7059:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/regular_proxy_diagram-6558bb6be6ff1c749cf9fde1f0d30ff5.png"}}]);