"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[1694],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=l,k=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"list-and-items",title:"List and Items"},o=void 0,d={unversionedId:"advanced/list-and-items",id:"version-5.2/advanced/list-and-items",title:"List and Items",description:"Disable an Item",source:"@site/versioned_docs/version-5.2/advanced/list-and-items.md",sourceDirName:"advanced",slug:"/advanced/list-and-items",permalink:"/react-native-dropdown-picker-website/docs/5.2/advanced/list-and-items",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.2/advanced/list-and-items.md",tags:[],version:"5.2",frontMatter:{id:"list-and-items",title:"List and Items"},sidebar:"version-5.2/someSidebar",previous:{title:"Dropdown Box",permalink:"/react-native-dropdown-picker-website/docs/5.2/advanced/dropdown-box"},next:{title:"List Modes",permalink:"/react-native-dropdown-picker-website/docs/5.2/advanced/list-modes"}},c=[{value:"Disable an Item",id:"disable-an-item",children:[],level:2},{value:"Item-specific styles",id:"item-specific-styles",children:[],level:2},{value:"Test ID",id:"test-id",children:[],level:2},{value:"Props",id:"props",children:[{value:"<code>itemKey</code>",id:"itemkey",children:[],level:3},{value:"<code>closeAfterSelecting</code>",id:"closeafterselecting",children:[],level:3},{value:"<code>itemSeparator</code>",id:"itemseparator",children:[],level:3}],level:2},{value:"Callbacks",id:"callbacks",children:[{value:"<code>renderListItem</code>",id:"renderlistitem",children:[],level:3},{value:"<code>ListEmptyComponent</code>",id:"listemptycomponent",children:[],level:3}],level:2},{value:"Styling",id:"styling",children:[{value:"<code>listItemContainerStyle</code>",id:"listitemcontainerstyle",children:[],level:3},{value:"<code>listItemLabelStyle</code>",id:"listitemlabelstyle",children:[],level:3},{value:"<code>selectedItemContainerStyle</code>",id:"selecteditemcontainerstyle",children:[],level:3},{value:"<code>selectedItemLabelStyle</code>",id:"selecteditemlabelstyle",children:[],level:3}],level:2},{value:"<code>customItemContainerStyle</code>",id:"customitemcontainerstyle",children:[],level:2},{value:"<code>customItemLabelStyle</code>",id:"customitemlabelstyle",children:[{value:"<code>disabledItemContainerStyle</code>",id:"disableditemcontainerstyle",children:[],level:3},{value:"<code>disabledItemLabelStyle</code>",id:"disableditemlabelstyle",children:[],level:3},{value:"<code>listMessageContainerStyle</code>",id:"listmessagecontainerstyle",children:[],level:3},{value:"<code>listMessageTextStyle</code>",id:"listmessagetextstyle",children:[],level:3},{value:"<code>itemSeparatorStyle</code>",id:"itemseparatorstyle",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"disable-an-item"},"Disable an Item"),(0,i.kt)("p",null,"You may want to disable an item, The item will be unselectable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{label: 'Item', value: 1, disabled: true}\n")),(0,i.kt)("h2",{id:"item-specific-styles"},"Item-specific styles"),(0,i.kt)("p",null,"Each item can have its own label and container styles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...\n  containerStyle: {\n    backgroundColor: "#000"\n  },\n  labelStyle: {\n    color: "#fff"\n  }\n}\n')),(0,i.kt)("h2",{id:"test-id"},"Test ID"),(0,i.kt)("p",null,"Used to locate the item in end-to-end tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...\n  testID: "item-testid"\n}\n')),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"itemkey"},(0,i.kt)("inlineCode",{parentName:"h3"},"itemKey")),(0,i.kt)("p",null,"Specifies which item key should be used as a key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'itemKey="value"\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value"))))),(0,i.kt)("h3",{id:"closeafterselecting"},(0,i.kt)("inlineCode",{parentName:"h3"},"closeAfterSelecting")),(0,i.kt)("p",null,"Closes the drop-down menu after selecting an item.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"closeAfterSelecting={true}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This only works with ",(0,i.kt)("strong",{parentName:"p"},"single")," item pickers."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h3",{id:"itemseparator"},(0,i.kt)("inlineCode",{parentName:"h3"},"itemSeparator")),(0,i.kt)("p",null,"Specifies if the item separater should be visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"itemSeparator={true}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"callbacks"},"Callbacks"),(0,i.kt)("h3",{id:"renderlistitem"},(0,i.kt)("inlineCode",{parentName:"h3"},"renderListItem")),(0,i.kt)("p",null,"Customizes the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderListItem"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"renderListItem={(props) => <Item {...props} />}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"See: ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/hossein-zare/react-native-dropdown-picker/blob/5.x/src/components/RenderListItem.js"},"RenderListItem.js")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function")))),(0,i.kt)("h3",{id:"listemptycomponent"},(0,i.kt)("inlineCode",{parentName:"h3"},"ListEmptyComponent")),(0,i.kt)("p",null,"Changes the default ",(0,i.kt)("inlineCode",{parentName:"p"},"ListEmptyComponent"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"ListEmptyComponent={({\n  listMessageContainerStyle, listMessageTextStyle, ActivityIndicatorComponent, loading, message\n}) => (\n  <View style={listMessageContainerStyle}>\n    {loading ? (\n      <ActivityIndicatorComponent />\n    ) : (\n      <Text style={listMessageTextStyle}>\n        {message}\n      </Text>\n    )}\n  </View>\n)}}\n")),(0,i.kt)("h2",{id:"styling"},"Styling"),(0,i.kt)("h3",{id:"listitemcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"listItemContainerStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"listItemContainer={{\n  height: 40\n}}\n")),(0,i.kt)("h3",{id:"listitemlabelstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"listItemLabelStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'listItemLabelStyle={{\n  color: "#000"\n}}\n')),(0,i.kt)("h3",{id:"selecteditemcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectedItemContainerStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'selectedItemContainerStyle={{\n  backgroundColor: "grey"\n}}\n')),(0,i.kt)("h3",{id:"selecteditemlabelstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectedItemLabelStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'selectedItemLabelStyle={{\n  fontWeight: "bold"\n}}\n')),(0,i.kt)("h2",{id:"customitemcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h2"},"customItemContainerStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"customItemContainerStyle={{\n  //\n}}\n")),(0,i.kt)("h2",{id:"customitemlabelstyle"},(0,i.kt)("inlineCode",{parentName:"h2"},"customItemLabelStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'customItemLabelStyle={{\n  fontStyle: "italic"\n}}\n')),(0,i.kt)("h3",{id:"disableditemcontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"disabledItemContainerStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"disabledItemContainerStyle={{\n  //\n}}\n")),(0,i.kt)("h3",{id:"disableditemlabelstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"disabledItemLabelStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"disabledItemLabelStyle={{\n  opacity: 0.5\n}}\n")),(0,i.kt)("h3",{id:"listmessagecontainerstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"listMessageContainerStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"listMessageContainerStyle={{\n  //\n}}\n")),(0,i.kt)("h3",{id:"listmessagetextstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"listMessageTextStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"listMessageTextStyle={{\n  //\n}}\n")),(0,i.kt)("h3",{id:"itemseparatorstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"itemSeparatorStyle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'itemSeparatorStyle={{\n  backgroundColor: "#000"\n}}\n')))}p.isMDXComponent=!0}}]);