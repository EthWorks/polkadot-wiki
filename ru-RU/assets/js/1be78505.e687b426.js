(self.webpackChunk=self.webpackChunk||[]).push([[9514,4117,9322],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40767:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Pe});var o=n(67294),r=n(3905),a=n(52263),l=n(46291),i=n(52655),c=n(22122),s=n(19756),u=n(86010),m=n(86700),d=n(80944),p=n(31839),h=n(93783),f=n(77898),b=n(36742),y=n(13919),g=n(98030);const v=function(e){return o.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),o.createElement("g",{fill:"#7a7a7a"},o.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var k=n(84478),E=n(24973);const w="sidebar_15mo",N="sidebarWithHideableNavbar_267A",C="sidebarHidden_2kNb",_="sidebarLogo_3h0W",I="menu_Bmed",Z="menuLinkText_2aKo",x="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",j="collapseSidebarButtonIcon_3E-R",O="sidebarMenuIcon_fgN0",P="sidebarMenuCloseIcon_1lpH",S="menuLinkExternal_1OhN";var L=["items"],A=["item","onItemClick","collapsible","activePath"],B=["item","onItemClick","activePath","collapsible"];var F=function e(t,n){return"link"===t.type?(0,m.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},D=(0,o.memo)((function(e){var t=e.items,n=(0,s.Z)(e,L);return t.map((function(e,t){return o.createElement(M,(0,c.Z)({key:t,item:e},n))}))}));function M(e){switch(e.item.type){case"category":return o.createElement(R,e);case"link":default:return o.createElement(z,e)}}function R(e){var t,n,r,a=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=(0,s.Z)(e,A),p=a.items,h=a.label,f=F(a,m),b=(n=f,r=(0,o.useRef)(n),(0,o.useEffect)((function(){r.current=n}),[n]),r.current),y=(0,o.useState)((function(){return!!i&&(!f&&a.collapsed)})),g=y[0],v=y[1],k=(0,o.useRef)(null),E=(0,o.useState)(void 0),w=E[0],N=E[1],C=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,o.useEffect)((function(){f&&!b&&g&&v(!1)}),[f,b,g]);var _=(0,o.useCallback)((function(e){e.preventDefault(),w||C(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[w]);return 0===p.length?null:o.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[Z]=!i,t)),onClick:i?_:void 0,href:i?"#!":void 0},d),h),o.createElement("ul",{className:"menu__list",ref:k,style:{height:w},onTransitionEnd:function(){g||C(!1)}},o.createElement(D,{items:p,tabIndex:g?"-1":"0",onItemClick:l,collapsible:i,activePath:m})))}function z(e){var t,n=e.item,r=e.onItemClick,a=e.activePath,l=(e.collapsible,(0,s.Z)(e,B)),i=n.href,m=n.label,d=F(n,a);return o.createElement("li",{className:"menu__list-item",key:m},o.createElement(b.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":d},t[S]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:r},l),m))}function G(e){var t=e.onClick;return o.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",T),onClick:t},o.createElement(v,{className:j}))}function H(e){var t=e.responsiveSidebarOpened,n=e.onClick;return o.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?o.createElement("span",{className:(0,u.Z)(O,P)},"\xd7"):o.createElement(k.Z,{className:O,height:24,width:24}))}const W=function(e){var t,n,r=e.path,a=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,b=function(){var e=(0,d.Z)().isAnnouncementBarClosed,t=(0,o.useState)(!e),n=t[0],r=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),y=(0,m.LU)(),v=y.navbar.hideOnScroll,k=y.hideableSidebar,E=(0,d.Z)().isAnnouncementBarClosed,Z=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var r=(0,h.Z)();return(0,o.useEffect)((function(){r===h.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,o.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,o.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),T=Z.showResponsiveSidebar,j=Z.closeResponsiveSidebar,O=Z.toggleResponsiveSidebar;return o.createElement("div",{className:(0,u.Z)(w,(t={},t[N]=v,t[C]=s,t))},v&&o.createElement(g.Z,{tabIndex:-1,className:_}),o.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(n={"menu--show":T},n[x]=!E&&b,n))},o.createElement(H,{responsiveSidebarOpened:T,onClick:O}),o.createElement("ul",{className:"menu__list"},o.createElement(D,{items:a,onItemClick:j,collapsible:i,activePath:r}))),k&&o.createElement(G,{onClick:c}))};const U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var q={Prism:n(87410).Z,theme:U};function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var J=/\r\n|\r|\n/,Q=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},V=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Y=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=K({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=K({},n,{backgroundColor:null}),r};function X(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const ee=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),$(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Y(e.theme,e.language):void 0;return t.themeDict=n})),$(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=K({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?K({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),$(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),$(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=K({},X(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?K({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),$(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,i=[],c=[i];l>-1;){for(;(a=o[l]++)<r[l];){var s=void 0,u=t[l],m=n[l][a];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=V(u,m.type),m.alias&&(u=V(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(J),p=d.length;i.push({types:u,content:d[0]});for(var h=1;h<p;h++)Q(i),c.push(i=[]),i.push({types:u,content:d[h]})}else l++,t.push(u),n.push(s),o.push(0),r.push(s.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return Q(i),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var te=n(87594),ne=n.n(te);const oe={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var re=n(85350);const ae=function(){var e=(0,m.LU)().prism,t=(0,re.Z)().isDarkTheme,n=e.theme||oe,o=e.darkTheme||n;return t?o:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",ce="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="codeBlockWithTitle_2JqI",me="copyButton_Ue-o",de="codeBlockLines_39YC";var pe=/{([\d,-]+)}/,he=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function fe(e){var t=e.children,n=e.className,r=e.metastring,a=e.title,l=(0,m.LU)().prism,i=(0,o.useState)(!1),s=i[0],d=i[1],p=(0,o.useState)(!1),h=p[0],f=p[1];(0,o.useEffect)((function(){f(!0)}),[]);var b=(0,m.bc)(r)||a,y=(0,o.useRef)(null),g=[],v=ae(),k=Array.isArray(t)?t.join(""):t;if(r&&pe.test(r)){var w=r.match(pe)[1];g=ne()(w).filter((function(e){return e>0}))}var N=n&&n.replace(/language-/,"");!N&&l.defaultLanguage&&(N=l.defaultLanguage);var C=k.replace(/\n$/,"");if(0===g.length&&void 0!==N){for(var _,I="",Z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return he(["js","jsBlock"]);case"jsx":case"tsx":return he(["js","jsBlock","jsx"]);case"html":return he(["js","jsBlock","html"]);case"python":case"py":return he(["python"]);default:return he()}}(N),x=k.replace(/\n$/,"").split("\n"),T=0;T<x.length;){var j=T+1,O=x[T].match(Z);if(null!==O){switch(O.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=j+",";break;case"highlight-start":_=j;break;case"highlight-end":I+=_+"-"+(j-1)+","}x.splice(T,1)}else T+=1}g=ne()(I),C=x.join("\n")}var P=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(C),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.createElement(ee,(0,c.Z)({},q,{key:String(h),theme:v,code:C,language:N}),(function(e){var t,n=e.className,r=e.style,a=e.tokens,l=e.getLineProps,i=e.getTokenProps;return o.createElement("div",{className:le},b&&o.createElement("div",{style:r,className:ce},b),o.createElement("div",{className:(0,u.Z)(ie,N)},o.createElement("div",{tabIndex:0,className:(0,u.Z)(n,se,"thin-scrollbar",(t={},t[ue]=b,t))},o.createElement("div",{className:de,style:r},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.createElement("div",(0,c.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),o.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(me),onClick:P},s?o.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}const be="enhancedAnchor_2LWZ";var ye=["id"];const ge=function(e){return function(t){var n,r=t.id,a=(0,s.Z)(t,ye),l=(0,m.LU)().navbar.hideOnScroll;return r?o.createElement(e,a,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[be]=!l,n)),id:r}),a.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,E.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(e,a)}};const ve={code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(fe,e):o.createElement("code",e)},a:function(e){return o.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:o.createElement(fe,(0,o.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:ge("h1"),h2:ge("h2"),h3:ge("h3"),h4:ge("h4"),h5:ge("h5"),h6:ge("h6")};var ke=n(24608),Ee=n(5977);const we="docPage_31aa",Ne="docMainContainer_3ufF",Ce="docMainContainerEnhanced_3NYZ",_e="docSidebarContainer_3Kbt",Ie="docSidebarContainerHidden_3pA8",Ze="collapsedDocSidebar_2JMH",xe="expandSidebarButtonIcon_1naQ",Te="docItemWrapperEnhanced_2vyJ",je="docItemWrapper_3FMP";function Oe(e){var t,n,l,c,s,d=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=(0,a.default)(),b=f.siteConfig,y=f.isClient,g=p.pluginId,k=p.permalinkToSidebar,w=p.docsSidebars,N=p.version,C=k[d.path],_=w[C],I=(0,o.useState)(!1),Z=I[0],x=I[1],T=(0,o.useState)(!1),j=T[0],O=T[1],P=(0,o.useCallback)((function(){j&&O(!1),x(!Z)}),[j]);return o.createElement(i.Z,{key:y,wrapperClassName:m.kM.wrapper.docPages,pageClassName:m.kM.page.docPage,searchMetadatas:{version:N,tag:(0,m.os)(g,N)}},o.createElement("div",{className:we},_&&o.createElement("div",{className:(0,u.Z)(_e,(t={},t[Ie]=Z,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(_e)&&Z&&O(!0)},role:"complementary"},o.createElement(W,{key:C,sidebar:_,path:d.path,sidebarCollapsible:null==(n=null==(l=b.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:P,isHidden:j}),j&&o.createElement("div",{className:Ze,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},o.createElement(v,{className:xe}))),o.createElement("main",{className:(0,u.Z)(Ne,(c={},c[Ce]=Z||!_,c))},o.createElement("div",{className:(0,u.Z)("container padding-vert--lg",je,(s={},s[Te]=Z,s))},o.createElement(r.Zo,{components:ve},h)))))}const Pe=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,a=t.find((function(e){return(0,Ee.LX)(r.pathname,e)}));return a?o.createElement(Oe,{currentDocRoute:a,versionMetadata:n},(0,l.Z)(t)):o.createElement(ke.default,e)}},24608:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(67294),r=n(52655),a=n(24973);const l=function(){return o.createElement(r.Z,{title:"Page Not Found"},o.createElement("main",{className:"container margin-vert--xl"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--6 col--offset-3"},o.createElement("h1",{className:"hero__title"},o.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.createElement("p",null,o.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.createElement("p",null,o.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},64731:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o,r=n(67294),a=n(10682),l=n(34051),i=n(31555),c=n(3754),s=n(24973),u=n(52263),m=["title","titleId"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const h=function(e){var t=e.title,n=e.titleId,a=p(e,m);return r.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:176.871,height:42,viewBox:"0 0 185.76 42.01","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,o||(o=r.createElement("path",{fill:"#fff",d:"M43.5 17.55A10.82 10.82 0 0034.62 22a16 16 0 00-3.57 10.35A9.6 9.6 0 0033.29 39a7.45 7.45 0 005.94 2.52 10.78 10.78 0 008.53-4.2 16.61 16.61 0 003.85-10.82 10.55 10.55 0 00-1.89-6.5c-1.33-1.61-3.43-2.45-6.22-2.45zm.14 17.76a6.06 6.06 0 01-4.27 1.82 3.34 3.34 0 01-2.8-1.26 5.31 5.31 0 01-1-3.49 12.41 12.41 0 012.17-7.48 6.45 6.45 0 015.53-3q3.76 0 3.77 4.61a12.66 12.66 0 01-3.4 8.8zM179 28.6a2.13 2.13 0 00-2.66 1.19c-1.95 4.9-4.33 7.34-7.27 7.34-1.54 0-2.31-1.33-2.31-3.84a54.46 54.46 0 011.24-8.46l.63-2.94h6a2.1 2.1 0 002.09-1.75 2.16 2.16 0 00-2.09-2.59h-5l1-4.89a2.26 2.26 0 00-2.17-2.73 2.18 2.18 0 00-2.17 1.75l-1.29 5.8h-14a10.83 10.83 0 00-8.9 4.52 16 16 0 00-3.57 10.35 13 13 0 00.35 3 5 5 0 01-3.64 1.75 2.18 2.18 0 01-1.88-.77 4.42 4.42 0 01-.56-2.51 39.55 39.55 0 011-7.49l3.63-16.92a2.22 2.22 0 10-4.33-1L131 18.74a9.38 9.38 0 00-4.9-1.33 11.57 11.57 0 00-9.09 4.2 16 16 0 00-3.63 10.63 11.94 11.94 0 00.49 3.63 4.87 4.87 0 01-3.08 1.19 2.43 2.43 0 01-2-.77 3.87 3.87 0 01-.63-2.51 26.68 26.68 0 01.7-5 2.3 2.3 0 00-2-2.73 2.22 2.22 0 00-2.44 1.68 19 19 0 01-3.08 6.65 6 6 0 01-4.62 2.72 2.8 2.8 0 01-2.37-1.4 6.93 6.93 0 01-.92-3.7 11.62 11.62 0 012.16-7.34 6.82 6.82 0 015.74-2.94 8.73 8.73 0 013.36.7 2 2 0 002-.14 2.16 2.16 0 00-.28-3.85 9.33 9.33 0 00-1.74-.56 13.37 13.37 0 00-3.29-.49 11.64 11.64 0 00-9 4.2 13.53 13.53 0 00-2.87 5.17C87.34 33.64 84.55 37 81.19 37a2.89 2.89 0 01-2.52-1.12 4.31 4.31 0 01-.77-2.72 3.42 3.42 0 01.07-.91 11.82 11.82 0 005.11-3.85 9.44 9.44 0 002-5.73c0-3.5-1.88-5.25-5.73-5.25a10 10 0 00-7.13 2.94l2.38-11a2.21 2.21 0 00-2.17-2.66 2.18 2.18 0 00-2.17 1.75l-6.5 30.35a2.2 2.2 0 002.16 2.66A2.18 2.18 0 0068 39.65l2-9.3a18.85 18.85 0 011.4-3.57 10.79 10.79 0 012.94-3.35 6.57 6.57 0 014.4-1.61 1.48 1.48 0 011.68 1.68 5 5 0 01-2.1 3.7 8.87 8.87 0 01-4.54 2.17c-.14 1.33-.21 2.31-.21 2.87A11 11 0 0075.52 39a6.54 6.54 0 005.6 2.45 9.75 9.75 0 007.62-3.78l.84-1a7.91 7.91 0 001.33 2.24 6.85 6.85 0 005.59 2.52c3 0 5.53-1.4 7.63-4.34.9 2.94 3 4.34 6.5 4.34a8.53 8.53 0 005.37-1.99 7 7 0 005 1.89c3 0 5.52-1.4 7.62-4.34.91 2.94 3 4.34 6.5 4.34a8.72 8.72 0 006-2.31 7.48 7.48 0 005.66 2.31 10.76 10.76 0 008.53-4.2 16.61 16.61 0 003.85-10.77 12.17 12.17 0 00-.84-4.68h5.81l-.56 2.52a53.62 53.62 0 00-1.4 8.88c0 5.45 2.24 8.25 6.64 8.25 5 0 8.74-3.36 11.4-10A2 2 0 00179 28.6zm-49.58-2.66c-.77 3.85-2 6.65-3.43 8.47s-3.07 2.72-4.75 2.72a2.82 2.82 0 01-2.38-1.4 6.93 6.93 0 01-.91-3.63 11.57 11.57 0 012.17-7.34 6.48 6.48 0 019.79-1.26zm24.34 5.25a20.21 20.21 0 01-2.52 4.05 6 6 0 01-4.27 1.89 3.32 3.32 0 01-2.79-1.26 5.31 5.31 0 01-1-3.49 12.47 12.47 0 012.16-7.48 6.54 6.54 0 015.53-3q3.78 0 3.78 4.61a14.27 14.27 0 01-.94 4.68zM62.45 6.71a2.18 2.18 0 00-2.17 1.75l-6.5 30.35a2.2 2.2 0 002.16 2.66 2.18 2.18 0 002.17-1.75l6.51-30.35a2.24 2.24 0 00-2.17-2.66zM15.94 0A16 16 0 000 15.94a16.38 16.38 0 00.84 5.18 2.28 2.28 0 002.8 1.4A2.27 2.27 0 005 19.72a10.44 10.44 0 01-.62-4.06 11.5 11.5 0 1112.19 11.82s-2.23.14-3.35.28A11.51 11.51 0 0012 28a.15.15 0 01-.21-.21l.35-1.89 2.1-9.51a2.18 2.18 0 00-4.27-.91s-5 23.22-5 23.43a2.12 2.12 0 001.67 2.59 2.13 2.13 0 002.59-1.68c.07-.28.7-3.36.7-3.36A5.66 5.66 0 0114.62 32c.48-.07 2.51-.21 2.51-.21A15.93 15.93 0 0015.94 0zM183.64 36.71a2.67 2.67 0 00-3.15 2.1 2.64 2.64 0 002.1 3.15 2.6 2.6 0 003.14-2.1 2.76 2.76 0 00-2.09-3.15z"})))};function f(e){var t=e.headline,n=e.children;return r.createElement(i.Z,{xs:6,md:3,className:"mb-3 mb-md-0"},r.createElement("h5",{className:"text-white"},t),r.createElement("ul",{className:"list-unstyled"},n))}function b(){var e=function(e){var t=e.href,n=e.className;return r.createElement("li",{className:"text-white"},r.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.createElement("i",{className:n})))},t=function(){return r.createElement("ul",{className:"list-social-links justify-content-around"},r.createElement(e,{href:"https://twitter.com/Polkadot",className:"socicon-twitter"}),r.createElement(e,{href:"https://www.reddit.com/r/polkadot",className:"socicon-reddit"}),r.createElement(e,{href:"https://github.com/paritytech/polkadot",className:"socicon-github"}),r.createElement(e,{href:"https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw",className:"socicon-youtube"}),r.createElement(e,{href:"https://discord.gg/wGUDt2p",className:"socicon-discord"}))},n=function(){return r.createElement(r.Fragment,null,r.createElement("p",{className:"d-block text-white"},r.createElement(s.Z,{id:"footer.subscribeMessage",description:"Subscribe message in Footer"},"Subscribe to the newsletter to hear about Polkadot updates and events.")),r.createElement(c.Z,null,r.createElement("a",{href:"https://info.polkadot.network/subscribe",target:"_blank",style:{color:"white"}},r.createElement(s.Z,{id:"footer.subscribeButton",description:"Label of Subscribe button in Footer"},"Subscribe"))))};return r.createElement(i.Z,{md:3,className:"px-lg-0"},r.createElement(t,null),r.createElement(n,null))}function y(e){var t=e.href,n=e.content;return r.createElement("li",null,r.createElement("a",{href:t,className:"text-white text-small",target:"_blank",rel:"noopener noreferrer"},n))}function g(e){var t=e.href,n=e.content;return r.createElement("li",{className:"py-0 py-md-1"},r.createElement("a",{href:t,className:"text-white",target:"_blank",rel:"noopener noreferrer"},n))}function v(){var e=(0,u.default)().siteConfig.themeConfig.footer;return r.createElement("footer",{className:"nav-footer spacer-y-4 pb-4",id:"footer"},r.createElement(a.Z,null,r.createElement(l.Z,{className:"justify-content-start"},r.createElement(f,{headline:(0,s.I)({message:"General",id:"footer.body.general",description:"Headline of General column in Footer"})},r.createElement(g,{content:(0,s.I)({message:"About",id:"footer.body.general.about",description:"About link in General column in Footer"}),href:"https://polkadot.network/about"}),r.createElement(g,{content:(0,s.I)({message:"FAQ",id:"footer.body.general.faq",description:"FAQ link in General column in Footer"}),href:"https://polkadot.network/faq"}),r.createElement(g,{content:(0,s.I)({message:"Contact",id:"footer.body.general.contact",description:"Contact link in General column in Footer"}),href:"https://polkadot.network/contact"}),r.createElement(g,{content:(0,s.I)({message:"Build",id:"footer.body.general.build",description:"Build link in General column in Footer"}),href:"https://polkadot.network/build"}),r.createElement(g,{content:(0,s.I)({message:"Grants and Bounties",id:"footer.body.general.grantsAndBounties",description:"Grants and Bounties link in General column in Footer"}),href:"https://github.com/w3f/General-Grants-Program"}),r.createElement(g,{content:(0,s.I)({message:"Careers",id:"footer.body.general.careers",description:"Careers link in General column in Footer"}),href:"https://polkadot.network/jobs"})),r.createElement(f,{headline:(0,s.I)({message:"Technology",id:"footer.body.technology",description:"Headline of Technology column in Footer"})},r.createElement(g,{content:(0,s.I)({message:"Technology",id:"footer.body.technology.technology",description:"Technology link in Technology column in Footer"}),href:"https://polkadot.network/technology"}),r.createElement(g,{content:(0,s.I)({message:"Token",id:"footer.body.technology.token",description:"Token link in Technology column in Footer"}),href:"https://polkadot.network/dot-token"}),r.createElement(g,{content:(0,s.I)({message:"Telemetry",id:"footer.body.technology.telemetry",description:"Telemetry link in Technology column in Footer"}),href:"https://telemetry.polkadot.io/"}),r.createElement(g,{content:(0,s.I)({message:"Substrate",id:"footer.body.technology.substrate",description:"Substrate link in Technology column in Footer"}),href:"https://www.parity.io/substrate"}),r.createElement(g,{content:(0,s.I)({message:"Whitepaper",id:"footer.body.technology.whitepaper",description:"Whitepaper link in Technology column in Footer"}),href:"https://polkadot.network/PolkaDotPaper.pdf"}),r.createElement(g,{content:(0,s.I)({message:"Lightpaper",id:"footer.body.technology.lightpaper",description:"Lightpaper link in Technology column in Footer"}),href:"https://polkadot.network/Polkadot-lightpaper.pdf"})),r.createElement(f,{headline:(0,s.I)({message:"Community",id:"footer.body.community",description:"Headline of Community column in Footer"})},r.createElement(g,{content:(0,s.I)({message:"Community",id:"footer.body.community.community",description:"Community link in Community column in Footer"}),href:"https://polkadot.network/community"}),r.createElement(g,{content:(0,s.I)({message:"Documentation",id:"footer.body.community.documentation",description:"Documentation link in Community column in Footer"}),href:"http://wiki.polkadot.network/en/latest/"}),r.createElement(g,{content:(0,s.I)({message:"Brand Assets",id:"footer.body.community.brandAssets",description:"Brand Assets link in Community column in Footer"}),href:"https://polkadot.network/brand-assets"}),r.createElement(g,{content:"Blog",href:"https://polkadot.network/blog"}),r.createElement(g,{content:"Element Chat",href:"https://app.element.io/#/room/!FdCojkeGzZLSEoiecf:web3.foundation?via=matrix.parity.io&via=matrix.org&via=web3.foundation"}),r.createElement(g,{content:"Medium",href:"https://medium.com/polkadot-network"})),r.createElement(b,null)),r.createElement(l.Z,{className:"footer-legal align-items-end mt-5 pt-4"},e&&r.createElement(i.Z,{lg:2,className:"mb-2 mb-lg-0"},r.createElement("a",{className:"navbar-brand",href:"https://polkadot.network/",target:"_blank",rel:"noopener noreferrer"},r.createElement(h,{alt:"Polkadot Network"}))),r.createElement(i.Z,{lg:10},r.createElement("ul",{className:"list-unstyled d-flex flex-wrap list-pipe-separator"},r.createElement(y,{content:e.copyright,href:"https://web3.foundation"}),r.createElement(y,{content:(0,s.I)({message:"Impressum",id:"footer.footerLegal.impressum",description:"Impressum Button Label in Footer Legal"}),href:"https://polkadot.network/impressum"}),r.createElement(y,{content:(0,s.I)({message:"Disclaimer",id:"footer.footerLegal.disclaimer",description:"Disclaimer Button Label in Footer Legal"}),href:"https://polkadot.network/disclaimer"}),r.createElement(y,{content:(0,s.I)({message:"Privacy",id:"footer.footerLegal.privacy",description:"Privacy Button Label in Footer Legal"}),href:"https://polkadot.network/privacy"}),r.createElement("li",null,r.createElement("a",{className:"text-white text-small",href:"#",onClick:function(){return klaro.show()}},(0,s.I)({message:"Cookie Settings",id:"footer.footerLegal.cookieSettings",description:"Cookie Settings Button Label in Footer Legal"}))),r.createElement(y,{content:"PDF version",href:"{{ dot_ipfs_pdf_url }}"}))))))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);