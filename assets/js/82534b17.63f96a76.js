"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[9610],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7895:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"item-schema",title:"Item Schema"},l=void 0,s={unversionedId:"item-schema",id:"item-schema",title:"Item Schema",description:"Default schema",source:"@site/docs/item-schema.md",sourceDirName:".",slug:"/item-schema",permalink:"/react-native-dropdown-picker-website/docs/next/item-schema",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/item-schema.md",tags:[],version:"current",frontMatter:{id:"item-schema",title:"Item Schema"},sidebar:"someSidebar",previous:{title:"Usage",permalink:"/react-native-dropdown-picker-website/docs/next/usage"},next:{title:"Placeholder",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/placeholder"}},u=[{value:"Default schema",id:"default-schema",children:[],level:2},{value:"Customize the schema",id:"customize-the-schema",children:[],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-schema"},"Default schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"schema={{\n  label: 'label', // required\n  value: 'value', // required\n  icon: 'icon',\n  parent: 'parent',\n  selectable: 'selectable',\n  disabled: 'disabled',\n  testID: 'testID',\n  containerStyle: 'containerStyle',\n  labelStyle: 'labelStyle'\n}}\n")),(0,o.kt)("h2",{id:"customize-the-schema"},"Customize the schema"),(0,o.kt)("p",null,"You can customize the item keys, therefore you won't need modification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const remoteItems = [\n  {id: 1, title: 'Item 1', val: 'item-1'},\n  {id: 2, title: 'Item 2', val: 'item-2'},\n];\n\n<DropDownPicker\n  schema={{\n    label: 'title',\n    value: 'val'\n  }}\n  ...\n/>\n")))}p.isMDXComponent=!0}}]);