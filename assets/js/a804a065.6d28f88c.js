(self.webpackChunk=self.webpackChunk||[]).push([[7471],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,r(r({ref:e},p),{},{components:a})):n.createElement(m,r({ref:e},p))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19741:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>c});var n=a(22122),o=a(19756),i=(a(67294),a(3905)),r=["components"],s={id:"maintain-guides-how-to-nominate-polkadot",title:"How to Nominate on Polkadot",sidebar_label:"How to Nominate on Polkadot"},l=void 0,d={unversionedId:"maintain-guides-how-to-nominate-polkadot",id:"maintain-guides-how-to-nominate-polkadot",isDocsHomePage:!1,title:"How to Nominate on Polkadot",description:"The following information applies to the Polkadot network. If you want to nominate on Kusama,",source:"@site/../docs/maintain-guides-how-to-nominate-polkadot.md",sourceDirName:".",slug:"/maintain-guides-how-to-nominate-polkadot",permalink:"/docs/maintain-guides-how-to-nominate-polkadot",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-nominate-polkadot.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1625621723,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"maintain-guides-how-to-nominate-polkadot",title:"How to Nominate on Polkadot",sidebar_label:"How to Nominate on Polkadot"},sidebar:"docs",previous:{title:"Resolving Errors",permalink:"/docs/maintain-errors"},next:{title:"Unbonding and Rebonding",permalink:"/docs/maintain-guides-how-to-unbond"}},p=[{value:"Setting up Stash and Controller keys",id:"setting-up-stash-and-controller-keys",children:[]},{value:"Using Polkadot-JS UI",id:"using-polkadot-js-ui",children:[{value:"Step 1: Bond your tokens",id:"step-1-bond-your-tokens",children:[]},{value:"Step 2: Nominate a validator",id:"step-2-nominate-a-validator",children:[]},{value:"Step 3: Stop nominating",id:"step-3-stop-nominating",children:[]}]},{value:"Using Command-Line Interface (CLI)",id:"using-command-line-interface-cli",children:[{value:"Step 1: Install @polkadot/api-cli",id:"step-1-install-polkadotapi-cli",children:[]},{value:"Step 2. Bond your DOT",id:"step-2-bond-your-dot",children:[]},{value:"Step 3. Nominate a validator",id:"step-3-nominate-a-validator",children:[]}]}],u={toc:p};function c(t){var e=t.components,s=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following information applies to the Polkadot network. If you want to nominate on Kusama,\ncheck out the\n",(0,i.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/mirror-maintain-guides-how-to-nominate-kusama"},"Kusama guide"),"\ninstead.")),(0,i.kt)("p",null,"Nominators are one type of participant in the staking subsystem of Polkadot. They are responsible\nfor appointing their stake to the validators who are the second type of participant. By appointing\ntheir stake, they are able to elect the active set of validators and share in the rewards that are\npaid out."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"validators")," are active participants in the network that engage in the block production\nand finality mechanisms, nominators take a slightly more passive role.\nBeing a nominator does not require running a node of your own or worrying about online uptime.\nHowever, a good nominator performs due diligence on the validators that they elect. When looking for\nvalidators to nominate, a nominator should pay attention to their own reward percentage for\nnominating a specific validator - as well as the risk that they bare of being slashed if the\nvalidator gets slashed."),(0,i.kt)("h2",{id:"setting-up-stash-and-controller-keys"},"Setting up Stash and Controller keys"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you prefer a video format, the following videos related to staking are available:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=VN4S8MofEW8"},"Staking with a Ledger and PolkadotJS Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=obZyGeHrm_M&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=43"},"Staking with a Ledger and Ledger Live")))),(0,i.kt)("p",null,"Nominators are recommended to set up separate stash and controller accounts. Explanation and\nreasoning for generating distinct accounts for this purpose is elaborated in the ",(0,i.kt)("a",{parentName:"p",href:"learn-keys#controller-and-stash-keys.md"},"keys")," section of\nthe Wiki."),(0,i.kt)("p",null,"You can generate your stash and controller account via any of the recommended methods that are\ndetailed on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"account generation")," page."),(0,i.kt)("p",null,"Starting with runtime version v23 natively included in client version\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases/tag/v0.8.23"},"0.8.23"),", payouts can go to any custom\naddress. If you'd like to redirect payments to an account that is neither the controller nor the\nstash account, set one up. Note that it is extremely unsafe to set an exchange address as the\nrecipient of the staking rewards."),(0,i.kt)("h2",{id:"using-polkadot-js-ui"},"Using Polkadot-JS UI"),(0,i.kt)("h3",{id:"step-1-bond-your-tokens"},"Step 1: Bond your tokens"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' navigate to the "Staking" tab (within the\n"Network" menu).'),(0,i.kt)("p",null,'The "Staking Overview" subsection will show you all the active validators and their information -\ntheir identities, the amount of DOT that are staking for them, amount that is their own provided\nstake, how much they charge in commission, the era points they\'ve earned in the current era, and the\nlast block number that they produced. If you click on the chart button it will take you to the\n"Validator Stats" page for that validator that shows you more detailed and historical information\nabout the validator\'s stake, rewards and slashes.'),(0,i.kt)("p",null,'The "Account actions" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"link"),") allows you\nto stake and nominate."),(0,i.kt)("p",null,'The "Payouts" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payouts"},"link"),") allows you to\nclaim rewards from staking."),(0,i.kt)("p",null,'The "Targets" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"link"),") will help you\nestimate your earnings and this is where it's good to start picking favorites."),(0,i.kt)("p",null,'The "Waiting" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/waiting"},"link"),") lists all pending\nvalidators that are awaiting more nominations to enter the active validator set. Validators will\nstay in the waiting queue until they have enough DOT backing them (as allocated through the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n election mechanism"),"). It is possible\nvalidator can remain in the queue for a very long time if they never get enough backing."),(0,i.kt)("p",null,'The "Validator Stats" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query"},"link"),") allows you\nto query a validator's stash address and see historical charts on era points, elected stake,\nrewards, and slashes."),(0,i.kt)("p",null,'Pick "Account actions", then click the "+ Nominator" button.'),(0,i.kt)("p",null,"You will see a modal window that looks like the below:\n",(0,i.kt)("img",{alt:"nominator-update-1",src:a(53246).Z})),(0,i.kt)("p",null,'Select a "value bonded" that is ',(0,i.kt)("strong",{parentName:"p"},"less")," than the total amount of DOT you have, so you have some\nleft over to pay transaction fees. Transaction fees are currently around 0.01 DOT, but they are\ndynamic based on a variety of factors including the load of recent blocks."),(0,i.kt)("p",null,"Also be mindful of the reaping threshold - the amount that must remain in an account lest it be\nburned. That amount is 1 DOT on Polkadot, so it's recommended to keep at least 1.5 DOT in your\naccount to be on the safe side."),(0,i.kt)("p",null,"Choose whatever payment destination that makes sense to you. If you're unsure, you can choose \"Stash\naccount (increase amount at stake)\" to simply accrue the rewards into the amount you're staking and\nearn compound interest."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payout account selection dropdown with the custom account option highlighted",src:a(62585).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These concepts have been further explained in Polkadot's\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mNStMPZjiHM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8"},"UI Walkthrough Video"))),(0,i.kt)("h3",{id:"step-2-nominate-a-validator"},"Step 2: Nominate a validator"),(0,i.kt)("p",null,"You are now bonded. Being bonded means your tokens are locked and could be\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#slashing"},"slashed")," if the validators you nominate misbehave. All bonded funds can now\nbe distributed to up to 16 validators. Be careful about the validators you choose since you will be\nslashed if your validator commits an offence."),(0,i.kt)("p",null,'Click on "Nominate" on an account you\'ve bonded and you will be presented with another popup asking\nyou to select up to 16 validators. Although you may choose up to 16 validators, due to the\n',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n")," election algorithm your stake may be dispersed in different proportions\nto any subset or all of the validators your choose."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominating validators",src:a(90490).Z})),(0,i.kt)("p",null,"Select them, confirm the transaction, and you're done - you are now nominating. Your nominations\nwill become active in the next era. Eras last twenty-four hours on Polkadot - depending on when you\ndo this, your nominations may become active almost immediately, or you may have to wait almost the\nentire twenty-four hours before your nominations are active. You can check how far along Polkadot is\nin the current era on the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking"},"Staking page"),"."),(0,i.kt)("p",null,"Assuming at least one of your nominations ends up in the active validator set, you will start to get\nrewards allocated to you. In order to claim them (i.e., add them to your account), you must manually\nclaim them. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#claiming-rewards"},"Claiming Rewards")," section of the Staking wiki\npage for more details."),(0,i.kt)("h3",{id:"step-3-stop-nominating"},"Step 3: Stop nominating"),(0,i.kt)("p",null,"At some point, you might decide to stop nominating one or more validators. You can always change who\nyou're nominating, but you cannot withdraw your tokens unless you unbond them. Detailed instructions\nare available ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"here"),"."),(0,i.kt)("h2",{id:"using-command-line-interface-cli"},"Using Command-Line Interface (CLI)"),(0,i.kt)("p",null,"Apart from using Polkadot-JS Apps to participate in staking, you can do all these things in CLI\ninstead. The CLI approach allows you to interact with the Polkadot network without going to the\nPolkadot-JS Apps dashboard."),(0,i.kt)("h3",{id:"step-1-install-polkadotapi-cli"},"Step 1: Install @polkadot/api-cli"),(0,i.kt)("p",null,"We assume you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS with npm"),". Run the following command to\ninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-cli")," globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @polkadot/api-cli\n")),(0,i.kt)("h3",{id:"step-2-bond-your-dot"},"Step 2. Bond your DOT"),(0,i.kt)("p",null,"Executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.bond CONTROLLER_ADDRESS NUMBER_OF_TOKENS REWARD_DESTINATION --ws WEBSOCKET_ENDPOINT\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONTROLLER_ADDRESS"),": An address you would like to bond to the stash account. Stash and Controller\ncan be the same address but it is not recommended since it defeats the security of the two-account\nstaking model."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_TOKENS"),": The number of DOT you would like to stake to the network."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": DOT has ten decimal places and is always represented as an integer with zeroes at the\nend. So 1 DOT = 10_000_000_000 Plancks.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"REWARD_DESTINATION"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," - Pay into the stash account, increasing the amount at stake accordingly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," - Pay into the stash account, not increasing the amount at stake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," - Pay into a custom account, like so:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Account DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," - Pay into the controller account.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.bond DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX 1000000000000 Staked --ws wss://rpc.polkadot.io\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\n...\n    "status": {\n      "InBlock": "0x0ed1ec0ba69564e8f98958d69f826adef895b5617366a32a3aa384290e98514e"\n    }\n')),(0,i.kt)("p",null,"You can check the transaction status by using the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InBlock")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://polkascan.io/polkadot-cc1"},"Polkascan"),". Also, you can verify the bonding state under the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking")," page on the Polkadot-JS Apps Dashboard."),(0,i.kt)("h3",{id:"step-3-nominate-a-validator"},"Step 3. Nominate a validator"),(0,i.kt)("p",null,"To nominate a validator, you can execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.nominate \'["VALIDATOR_ADDRESS"]\' --ws WS_ENDPOINT\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.nominate \'["CmD9vaMYoiKe7HiFnfkftwvhKbxN9bhyjcDrfFRGbifJEG8","E457XaKbj2yTB2URy8N4UuzmyuFRkcdxYs67UvSgVr7HyFb"]\' --ws wss://rpc.polkadot.io\n')),(0,i.kt)("p",null,"After a few seconds, you should see the hash of the transaction and if you would like to verify the\nnomination status, you can check that on the Polkadot-JS UI as well."))}c.isMDXComponent=!0},62585:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/01-cc60f0cb7494041501c0ed80e5dca352.png"},53246:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_nominate_button-e1ed061df8ad060f6691bd2ff18a22cf.png"},90490:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_setup_nominator2-20c7f5518b08c72789da3fd2cc07346b.png"}}]);