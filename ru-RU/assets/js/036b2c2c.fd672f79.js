(self.webpackChunk=self.webpackChunk||[]).push([[7170],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>p,kt:()=>h});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=o,w=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return t?n.createElement(w,i(i({ref:a},p),{},{components:t})):n.createElement(w,i({ref:a},p))}));function h(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65547:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>u});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),i=["components"],l={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"},c=void 0,s={unversionedId:"learn-crowdloans",id:"learn-crowdloans",isDocsHomePage:!1,title:"Parachain Crowdloans",description:"{{ polkadotpolkadot }} {{ kusamakusama }} allows parachains to source tokens",source:"@site/../docs/learn-crowdloans.md",sourceDirName:".",slug:"/learn-crowdloans",permalink:"/ru-RU/docs/learn-crowdloans",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-crowdloans.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1625263534,formattedLastUpdatedAt:"02.07.2021",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"},sidebar:"docs",previous:{title:"Parachain Slots Auction",permalink:"/ru-RU/docs/learn-auction"},next:{title:"Teleporting Assets",permalink:"/ru-RU/docs/learn-teleport"}},p=[],d={toc:p};function u(e){var a=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot  allows parachains to source tokens\nfor their parachain bids in a decentralized crowdloan."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ",(0,r.kt)("a",{parentName:"p",href:"build-parachains-rococo"},"Rococo page")," >\n",".")),(0,r.kt)("p",null,"Anyone can create a new crowdloan campaign for a parachain slot\n. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,r.kt)("a",{parentName:"p",href:"learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration. The\nduration can last over several auctions, meaning that the team will not need to restart the campaign\njust because they do not secure a slot on their first attempt."),(0,r.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Important: All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by index, not by address. ",(0,r.kt)("strong",{parentName:"p"},"Never transfer tokens to an address in support\nof a campaign."))),(0,r.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,r.kt)("p",null,"During some point of the crowdloan campaign the owner will upload the parachain data. Ideally, the\nowner does this before soliciting contributions to the campaign so that the contributors can verify\nit. The data can only be uploaded once during the course of the campaign and it will be what is\ndeployed as the parachain's runtime. Of course, once the parachain is running it can always change\nvia runtime upgrades (as determined through its own local governance)."),(0,r.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,r.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,r.kt)("li",{parentName:"ul"},"If the campaign was not successful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,r.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. All contributions must be returned before the crowdloan is fully deleted from the system."),(0,r.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans. PolkadotJS apps also offers\na breakdown of ongoing crowdloans on the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,r.kt)("p",null,"Here is an exmaple of the crowdloans in play during the very first Kusama auction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"crowdloan dashboard",src:t(83700).Z})),(0,r.kt)("p",null,"Furthermore, check out this video on ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans"),"\nfor steps on how to access available crowdloans on PolkadotJS apps."))}u.isMDXComponent=!0},83700:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"}}]);