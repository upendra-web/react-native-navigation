(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),i=t(6),o=(t(0),t(180)),a={id:"sideMenu",title:"Side Menu",sidebar_label:"Side Menu"},c={id:"sideMenu",title:"Side Menu",description:"SideMenu provides access to destinations in the app from an easy to access menu which is accessible to the user via horizontal swipe gesture or a menu button.",source:"@site/docs/docs-sideMenu.mdx",permalink:"/react-native-navigation/docs/sideMenu",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-sideMenu.mdx",sidebar_label:"Side Menu",sidebar:"docs",previous:{title:"Bottom tabs",permalink:"/react-native-navigation/docs/bottomTabs"},next:{title:"External Component",permalink:"/react-native-navigation/docs/externalComponent"}},s=[{value:"Opening programmatically",id:"opening-programmatically",children:[]},{value:"Opening via the hamburger menu",id:"opening-via-the-hamburger-menu",children:[]},{value:"Pushing to the center layout from a menu",id:"pushing-to-the-center-layout-from-a-menu",children:[]}],u={rightToc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"SideMenu provides access to destinations in the app from an easy to access menu which is accessible to the user via horizontal swipe gesture or a menu button."),Object(o.b)("h2",{id:"opening-programmatically"},"Opening programmatically"),Object(o.b)("p",null,"To open the side menu programmatically, you'll need to update the visible property of the side menu you'd like to open."),Object(o.b)("p",null,"The following snippet shows how to open the left side menu. The menu is opened by setting its visible option to visible."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"Navigation.mergeOptions(componentId, {\n  sideMenu: {\n    left: {\n      visible: true,\n    },\n  },\n});\n")),Object(o.b)("h2",{id:"opening-via-the-hamburger-menu"},"Opening via the hamburger menu"),Object(o.b)("p",null,"The most common use case is to open the side menu by pressing the hamburger button at the TopBar. To achieve this, listen to the press event of the burger button, and open the side menu as shown above."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst Navigation = require('react-native-navigation');\nconst { View, Text } = require('react-native');\n\nclass SideMenuCenterScreen extends React.Component {\n  static options() {\n    return {\n      topBar: {\n        leftButtons: {\n          id: 'sideMenu',\n          icon: require('./menuIcon.png')\n        }\n      }\n    };\n  }\n\n  constructor(props) {\n    super(props);\n    Navigation.events().bindComponent(this);\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Click the hamburger icon to open the side menu</Text>\n      </View>\n    );\n  }\n\n  navigationButtonPressed({ buttonId }) {\n    if (buttonId === 'sideMenu') {\n      Navigation.mergeOptions(this, {\n        sideMenu: {\n          left: {\n            visible: true\n          }\n        }\n      });\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"pushing-to-the-center-layout-from-a-menu"},"Pushing to the center layout from a menu"),Object(o.b)("p",null,"A common use case when using SideMenus is to interact with the center layout, e.g. pushing a screen to a stack in the center layout when a user clicks on a button from one of the menus."),Object(o.b)("p",null,"In order to interact with the stack, we'll first assign it a predefined id. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sideMenu: {\n  center: {\n    stack: {\n      id: 'CenterStack',\n      children: []\n    }\n  },\n  left: {\n    ...\n  }\n}\n")),Object(o.b)("p",null,"Now that we've defined an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," for out stack, we can go ahead and push our screen to it. If we're pushing while the SideMenu is open, we'll need to make sure we close it by updating the visibility option of the relevant menu (left or right)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"Navigation.push('CenterStack', {\n  component: {\n    name: Screens.Pushed,\n    options: {\n      sideMenu: {\n        left: {\n          visible: false\n        }\n      }\n    }\n  }\n});\n")))}l.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return t?i.a.createElement(m,c({ref:n},u,{components:t})):i.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);