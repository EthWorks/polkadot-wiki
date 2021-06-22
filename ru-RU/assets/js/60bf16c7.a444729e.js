(self.webpackChunk=self.webpackChunk||[]).push([[4642],{3905:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>p,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?t.createElement(m,i(i({ref:a},p),{},{components:n})):t.createElement(m,i({ref:a},p))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2992:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>c,metadata:()=>l,toc:()=>s,default:()=>d});var t=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],c={id:"mirror-learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"},l={unversionedId:"mirror-learn-crowdloans",id:"mirror-learn-crowdloans",isDocsHomePage:!1,title:"Parachain Crowdloans",description:"{{ polkadotpolkadot }} {{ kusamakusama }} allows parachains to source tokens",source:"@site/../docs/mirror-learn-crowdloans.md",sourceDirName:".",slug:"/mirror-learn-crowdloans",permalink:"/ru-RU/docs/mirror-learn-crowdloans",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/mirror-learn-crowdloans.md",version:"current",sidebar_label:"Parachain Crowdloans",frontMatter:{id:"mirror-learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"}},s=[],p={toc:s};function d(e){var a=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot  allows parachains to source tokens\nfor their parachain bids in a decentralized crowdloan."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ",(0,o.kt)("a",{parentName:"p",href:"build-parachains-rococo"},"Rococo page")," >\n",".")),(0,o.kt)("p",null,"Anyone can create a new crowdloan campaign for a parachain slot\n. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,o.kt)("a",{parentName:"p",href:"learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration. The\nduration can last over several auctions, meaning that the team will not need to restart the campaign\njust because they do not secure a slot on their first attempt."),(0,o.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Important: All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by index, not by address. ",(0,o.kt)("strong",{parentName:"p"},"Never transfer tokens to an address in support\nof a campaign."))),(0,o.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,o.kt)("p",null,"During some point of the crowdloan campaign the owner will upload the parachain data. Ideally, the\nowner does this before soliciting contributions to the campaign so that the contributors can verify\nit. The data can only be uploaded once during the course of the campaign and it will be what is\ndeployed as the parachain's runtime. Of course, once the parachain is running it can always change\nvia runtime upgrades (as determined through its own local governance)."),(0,o.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,o.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,o.kt)("li",{parentName:"ul"},"If the campaign was not successful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,o.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. All contributions must be returned before the crowdloan is fully deleted from the system."),(0,o.kt)("p",null,"Several teams in the ecosystem are preparing dashboards to track auctions and crowdloan campaigns.\nCheck back with this page for updates as these are released."))}d.isMDXComponent=!0}}]);