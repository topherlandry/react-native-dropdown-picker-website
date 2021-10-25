(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[5536],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2014:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o={id:"list-modes",title:"List Modes"},i={unversionedId:"advanced/list-modes",id:"advanced/list-modes",isDocsHomePage:!1,title:"List Modes",description:"You have 3 options when choosing the list mode.",source:"@site/docs/advanced/list-modes.md",sourceDirName:"advanced",slug:"/advanced/list-modes",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/list-modes",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/docs/advanced/list-modes.md",version:"current",frontMatter:{id:"list-modes",title:"List Modes"},sidebar:"someSidebar",previous:{title:"List and Items",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/list-and-items"},next:{title:"Localization",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/localization"}},d=[{value:"Notes",id:"notes",children:[]},{value:"Change the default list mode",id:"change-the-default-list-mode",children:[]},{value:"Props",id:"props",children:[{value:"<code>flatListProps</code>",id:"flatlistprops",children:[]},{value:"<code>scrollViewProps</code>",id:"scrollviewprops",children:[]},{value:"<code>modalProps</code>",id:"modalprops",children:[]},{value:"<code>modalTitle</code>",id:"modaltitle",children:[]}]},{value:"Styling",id:"styling",children:[{value:"<code>modalContentContainerStyle</code>",id:"modalcontentcontainerstyle",children:[]},{value:"<code>modalTitleStyle</code>",id:"modaltitlestyle",children:[]}]}],p={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You have 3 options when choosing the list mode."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FLATLIST")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SCROLLVIEW")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MODAL")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'listMode="FLATLIST"\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FLATLIST"))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"FlatList")," component shouldn't be nested inside ",(0,l.kt)("inlineCode",{parentName:"p"},"ScrollView")," or you'll come across the ",(0,l.kt)("inlineCode",{parentName:"p"},"VirtualizedLists should never be nested inside plain ScrollViews")," warning.",(0,l.kt)("br",{parentName:"p"}),"\n","If this happens to you and you only have a few items, consider using the ",(0,l.kt)("inlineCode",{parentName:"p"},"SCROLLVIEW")," mode.\nOtherwise you have to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"MODAL")," mode."),(0,l.kt)("h2",{id:"change-the-default-list-mode"},"Change the default list mode"),(0,l.kt)("p",null,"You change the default list mode of the package globally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'DropDownPicker.setListMode("SCROLLVIEW");\n')),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"flatlistprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"flatListProps")),(0,l.kt)("p",null,"Adds native props for the FlatList."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"flatListProps={{\n  initialNumToRender: 10\n}}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/flatlist#props"},"FlatListProps"))))),(0,l.kt)("h3",{id:"scrollviewprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"scrollViewProps")),(0,l.kt)("p",null,"Adds native props for the ScrollView."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'scrollViewProps={{\n  decelerationRate: "fast"\n}}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/scrollview#props"},"ScrollViewProps"))))),(0,l.kt)("h3",{id:"modalprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"modalProps")),(0,l.kt)("p",null,"Adds native props for the Modal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'modalProps={{\n  animationType: "fade"\n}}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/modal#props"},"ModalProps"))))),(0,l.kt)("h3",{id:"modaltitle"},(0,l.kt)("inlineCode",{parentName:"h3"},"modalTitle")),(0,l.kt)("p",null,"Set modal title. ",(0,l.kt)("inlineCode",{parentName:"p"},'listMode="MODAL"')," and ",(0,l.kt)("inlineCode",{parentName:"p"},"searchable={false}")," are required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'modalTitle="Select an item"\n')),(0,l.kt)("h2",{id:"styling"},"Styling"),(0,l.kt)("h3",{id:"modalcontentcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"modalContentContainerStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'modalContentContainerStyle={{\n  backgroundColor: "#fff"\n}}\n')),(0,l.kt)("h3",{id:"modaltitlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"modalTitleStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'modalTitleStyle={{\n  fontWeight: "bold"\n}}\n')))}s.isMDXComponent=!0}}]);