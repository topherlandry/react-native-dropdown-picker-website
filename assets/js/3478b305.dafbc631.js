"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[1732],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),c=t(6010),s="tabItem_vU9c";function p(e){var n,t,r,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),w=g.tabGroupChoices,k=g.setTabGroupChoices,O=(0,a.useState)(y),N=O[0],T=O[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==N&&b.some((function(e){return e.value===j}))&&T(j)}var _=function(e){var n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==N&&(E(n),T(r),null!=m&&k(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":N===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:_,onClick:_},null!=t?t:n)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},4768:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(6396),i=t(8215),u=["components"],c={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},s=void 0,p={unversionedId:"installation",id:"version-5.3/installation",title:"Installation",description:"<Tabs",source:"@site/versioned_docs/version-5.3/installation.mdx",sourceDirName:".",slug:"/",permalink:"/react-native-dropdown-picker-website/docs/",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.3/installation.mdx",tags:[],version:"5.3",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},sidebar:"someSidebar",previous:{title:"Changelog",permalink:"/react-native-dropdown-picker-website/docs/changelog"},next:{title:"Rules",permalink:"/react-native-dropdown-picker-website/docs/rules"}},d=[],m={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-dropdown-picker\n"))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-dropdown-picker\n")))),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Read the ",(0,o.kt)("a",{parentName:"p",href:"docs/rules"},"Rules")," before using this package."))))}v.isMDXComponent=!0}}]);