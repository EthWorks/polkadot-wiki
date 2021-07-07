(self.webpackChunk=self.webpackChunk||[]).push([[2278],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26713:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>c});var o=n(22122),i=n(19756),a=(n(67294),n(3905)),r=["components"],l={id:"maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating"},s=void 0,d={unversionedId:"maintain-guides-how-to-stop-validating",id:"maintain-guides-how-to-stop-validating",isDocsHomePage:!1,title:"How to Stop Validating",description:"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or",source:"@site/../docs/maintain-guides-how-to-stop-validating.md",sourceDirName:".",slug:"/maintain-guides-how-to-stop-validating",permalink:"/docs/maintain-guides-how-to-stop-validating",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-stop-validating.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1625621723,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"maintain-guides-how-to-stop-validating",title:"How to Stop Validating",sidebar_label:"How to Stop Validating"},sidebar:"docs",previous:{title:"How to Chill",permalink:"/docs/maintain-guides-how-to-chill"},next:{title:"Participate in Democracy",permalink:"/docs/maintain-guides-democracy"}},p=[{value:"Chill Validator",id:"chill-validator",children:[]},{value:"Purge validator session keys",id:"purge-validator-session-keys",children:[]},{value:"Unbond your tokens",id:"unbond-your-tokens",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you wish to remain a validator or nominator (e.g. you're only stopping for planned downtime or\nserver maintenance), submitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,a.kt)("inlineCode",{parentName:"p"},"staking")," pallet should suffice. It is\nonly if you wish to unbond funds or reap an account that you should continue with the following."),(0,a.kt)("p",null,"To ensure a smooth stop to validation, make sure you should do the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chill your validator"),(0,a.kt)("li",{parentName:"ul"},"Purge validator session keys"),(0,a.kt)("li",{parentName:"ul"},"Unbond your tokens")),(0,a.kt)("p",null,"These can all be done with ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," interface or with\nextrinsics."),(0,a.kt)("h2",{id:"chill-validator"},"Chill Validator"),(0,a.kt)("p",null,"To chill your validator or nominator, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"staking.chill()")," extrinsic. See the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-chill"},"How to Chill")," page for more information. You can also\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-simple-payouts#claiming-rewards"},"claim your rewards")," at this time."),(0,a.kt)("h2",{id:"purge-validator-session-keys"},"Purge validator session keys"),(0,a.kt)("p",null,"Purging the validator's session keys removes the key reference to your stash. This can be done\nthrough the ",(0,a.kt)("inlineCode",{parentName:"p"},"session.purgeKeys()")," extrinsic with the controller account."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,a.kt)("strong",{parentName:"p"},"If you skip this step, you will not be able to reap your stash account"),", and you will\nneed to rebond, purge the session keys, unbond, and wait the unbonding period again before being\nable to transfer your tokens. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," for\nmore details.")),(0,a.kt)("h2",{id:"unbond-your-tokens"},"Unbond your tokens"),(0,a.kt)("p",null,"Unbonding your tokens can be done through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network > Staking > Account actions"),' page in\nPolkadotJS Apps by clicking the corrosponding stash account dropdown and selecting "Unbond funds".\nThis can also be done through the ',(0,a.kt)("inlineCode",{parentName:"p"},"staking.unbond()")," extrinsic with the controller account."))}c.isMDXComponent=!0}}]);