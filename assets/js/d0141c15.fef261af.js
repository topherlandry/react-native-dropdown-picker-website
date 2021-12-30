"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[2626],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"themes",title:"Themes"},c=void 0,p={unversionedId:"advanced/themes",id:"version-5.3/advanced/themes",title:"Themes",description:"Change the theme",source:"@site/versioned_docs/version-5.3/advanced/themes.md",sourceDirName:"advanced",slug:"/advanced/themes",permalink:"/react-native-dropdown-picker-website/docs/advanced/themes",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.3/advanced/themes.md",tags:[],version:"5.3",frontMatter:{id:"themes",title:"Themes"},sidebar:"someSidebar",previous:{title:"Localization",permalink:"/react-native-dropdown-picker-website/docs/advanced/localization"},next:{title:"Close other pickers",permalink:"/react-native-dropdown-picker-website/docs/tutorials/close-other-pickers"}},d=[{value:"Change the theme",id:"change-the-theme",children:[],level:2},{value:"Change the default theme",id:"change-the-default-theme",children:[],level:2},{value:"Add a theme",id:"add-a-theme",children:[],level:2}],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"change-the-theme"},"Change the theme"),(0,i.kt)("p",null,"Currently ",(0,i.kt)("inlineCode",{parentName:"p"},"LIGHT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DARK")," themes are available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LIGHT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DARK"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'theme="DARK"\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LIGHT"))))),(0,i.kt)("h2",{id:"change-the-default-theme"},"Change the default theme"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'DropDownPicker.setTheme("DARK");\n')),(0,i.kt)("h2",{id:"add-a-theme"},"Add a theme"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("inlineCode",{parentName:"p"},"LIGHT")," theme styles as a starting point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const myTheme = require("./my-theme");\n\nDropDownPicker.addTheme("MyThemeName", myTheme);\nDropDownPicker.setTheme("MyThemeName");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/hossein-zare/react-native-dropdown-picker/blob/5.x/src/themes/light/index.js"},"themes/light/index.js")))))}s.isMDXComponent=!0}}]);