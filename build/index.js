module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(0)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,s(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.Component),function(e,t,n){t&&i(e.prototype,t)}(t,[{key:"render",value:function(){var e=this.props,t=e.ifTrue,n=e.show,r=e.elseShow;return o.a.createElement(o.a.Fragment,null,t&&n,r&&!t&&r)}}]),t}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(m(m(n=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}(this,d(t).call(this,e)))),"toggleDropdown",(function(){n.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))})),y(m(m(n)),"openDropdown",(function(){n.setState({dropdownOpen:!0})})),y(m(m(n)),"closeDropdown",(function(){n.setState({dropdownOpen:!1})})),n.state={dropdownOpen:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),function(e,t,n){t&&p(e.prototype,t)}(t,[{key:"render",value:function(){var e=this.state.dropdownOpen;return o.a.createElement(r.Fragment,null,this.props.render(e,this.toggleDropdown,this.openDropdown,this.closeDropdown))}}]),t}();n.d(t,"ConditionallyRender",(function(){return l})),n.d(t,"Dropdown",(function(){return h}));var g={ConditionallyRender:l,Dropdown:h};t.default=g}])},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:y(p,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,m=0;function y(e,t){var n,r,o;if(t.singleton){var a=m++;n=b||(b=u(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r=n(2),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){(t=n(3)(!1)).push([e.i,".user-chat-message-container {\n  display: flex;\n  margin: 15px 0;\n  justify-content: flex-end;\n}\n\n.user-avatar-container {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-left: 12.5px;\n  background-color: #800080;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-avatar-icon {\n  fill: #fff;\n  width: 15px;\n  height: 15px;\n}\n\n.user-chat-message {\n  background-color: #f1f1f1;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  color: #585858;\n  font-weight: medium;\n  position: relative;\n  text-align: left;\n}\n\n.user-chat-message-arrow {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid #f1f1f1;\n  position: absolute;\n  right: -7px;\n  top: 13px;\n}\n",""]),e.exports=t},function(e,t,n){var r=n(2),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){(t=n(3)(!1)).push([e.i,".chat-bot-message-container {\n  display: flex;\n  margin: 15px 0;\n  justify-content: flex-start;\n}\n\n.chat-bot-avatar-container {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 12.5px;\n  background-color: #d8d8d8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.chat-bot-avatar-icon {\n  fill: #494646;\n  width: 22.5px;\n  height: 22.5px;\n}\n\n.chat-bot-message {\n  background-color: #2898ec;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  color: #fff;\n  font-weight: medium;\n  position: relative;\n  width: 184.5px;\n  margin-left: auto;\n  text-align: left;\n}\n\n.chat-bot-message-arrow {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid #2898ec;\n  position: absolute;\n  left: -7px;\n  top: 13px;\n}\n\n.chat-bot-loading-icon-container {\n  height: 17px;\n  width: 25px;\n}\n\n.chatbot-loader-container {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n#chatbot-loader #chatbot-loader-dot1 {\n  animation: load 1s infinite;\n}\n\n#chatbot-loader #chatbot-loader-dot2 {\n  animation: load 1s infinite;\n  animation-delay: 0.2s;\n}\n\n#chatbot-loader #chatbot-loader-dot3 {\n  animation: load 1s infinite;\n  animation-delay: 0.4s;\n}\n\n@keyframes load {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n",""]),e.exports=t},function(e,t,n){var r=n(2),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){(t=n(3)(!1)).push([e.i,".chat-container {\n  position: relative;\n  width: 275px;\n}\n\n.chat {\n  height: 500px;\n  background-color: #fff;\n  border-radius: 3px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.chat-header {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  background-color: #efefef;\n  font-family: Arial;\n  display: flex;\n  align-items: center;\n  font-size: 0.85rem;\n  color: #514f4f;\n  padding: 12.5px;\n  font-weight: bold;\n}\n\n.chat-input-container {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n}\n\n.chat-message-container {\n  padding: 0 17.5px 10px 17.5px;\n  overflow: scroll;\n  height: 424px;\n}\n\n.chat-input {\n  width: 100%;\n  padding: 12.5px;\n  border: none;\n  font-size: 0.85rem;\n  border-top: 1px solid #d8d8d8;\n  border-bottom-left-radius: 5px;\n}\n\n.chat-input-form {\n  width: 100%;\n  display: flex;\n}\n\n.chat-input::placeholder {\n  font-weight: bold;\n  color: #585858;\n}\n\n.chat-btn-send {\n  background-color: #2898ec;\n  width: 100px;\n  border: none;\n  color: #fff;\n  border-bottom-right-radius: 5px;\n}\n\n.chat-btn-send-icon {\n  fill: #fff;\n  width: 15px;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"ChatBot",(function(){return G})),n.d(t,"createChatBotMessage",(function(){return m}));var r=n(0),o=n.n(r);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=({styles:e={},...t})=>o.a.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),o.a.createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),c=(n(4),function(e){var t=e.message;return o.a.createElement("div",{className:"user-chat-message-container"},o.a.createElement("div",{className:"user-chat-message"},t,o.a.createElement("div",{className:"user-chat-message-arrow"})),o.a.createElement("div",{className:"user-avatar"},o.a.createElement("div",{className:"user-avatar-container"},o.a.createElement(i,{className:"user-avatar-icon"}))))}),s=n(1),u=function(){return o.a.createElement("div",{className:"chat-bot-avatar"},o.a.createElement("div",{className:"chat-bot-avatar-container"},o.a.createElement("p",null,"B")))},l=function(){return o.a.createElement("div",{className:"chatbot-loader-container"},o.a.createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{stroke:"none",fill:"none"},o.a.createElement("g",{id:"chatbot-loader",fill:"#fff"},o.a.createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};n(6);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){return Math.random()*Math.random()},b=function(e,t){return{message:e,type:t,id:d()}},m=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b(e,"bot"),{},t,{loading:!0})},y=function(e){if(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t=e.message,n=e.withAvatar,a=e.loading,i=e.messages,c=e.customComponents,f=e.setState,p=e.customStyles,d=e.delay,b=e.id,m=v(Object(r.useState)(!1),2),w=m[0],O=m[1];Object(r.useEffect)((function(){!function(e,t){var n=750;d&&(n+=d),setTimeout((function(){e.find((function(e){return e.id===b})).loading=!1,t((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{messages:e})}))}),n)}(i,f)}),[d,b,i,f]),Object(r.useEffect)((function(){d?setTimeout((function(){return O(!0)}),d):O(!0)}),[d]);var j={},x={};return p&&(j.backgroundColor=p.backgroundColor,x.borderRightColor=p.backgroundColor),o.a.createElement(s.ConditionallyRender,{ifTrue:w,show:o.a.createElement("div",{className:"chat-bot-message-container"},o.a.createElement(s.ConditionallyRender,{ifTrue:n,show:o.a.createElement(s.ConditionallyRender,{ifTrue:c.botAvatar,show:y(c.botAvatar),elseShow:o.a.createElement(u,null)})}),o.a.createElement(s.ConditionallyRender,{ifTrue:c.botChatMessage,show:y(c.botChatMessage,{message:t,loader:o.a.createElement(l,null)}),elseShow:o.a.createElement("div",{className:"chat-bot-message",style:j},o.a.createElement(s.ConditionallyRender,{ifTrue:a,show:o.a.createElement(l,null),elseShow:o.a.createElement("span",null,t)}),o.a.createElement(s.ConditionallyRender,{ifTrue:n,show:o.a.createElement("div",{className:"chat-bot-message-arrow",style:x})}))}))})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function(e){var t=e.passDownProps,n=e.messages,a=e.setState,i=e.scrollIntoView,c=e.state,u=e.customComponents,l=e.customStyles,f=e.widgetRegistry;return o.a.createElement(r.Fragment,null,o.a.createElement(O,P({},t,{customStyles:l.botMessageBox,messages:n,setState:a,customComponents:u})),o.a.createElement(s.ConditionallyRender,{ifTrue:!t.loading,show:f.getWidget(t.widget,x({},c,{scrollIntoView:i}))}))};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=({styles:e={},...t})=>o.a.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),o.a.createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));n(8);function T(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(e){var t=e.state,n=e.setState,a=e.widgetRegistry,i=e.messageParser,s=e.customComponents,u=e.botName,l=e.customStyles,f=t.messages,p=Object(r.useRef)(null),d=k(Object(r.useState)(""),2),m=d[0],y=d[1],h=function(){setTimeout((function(){p.current.scrollIntoView({behavior:"smooth",block:"end"})}),0)};Object(r.useEffect)((function(){h()}));var g={};return l&&(g.backgroundColor=l.chatButton.backgroundColor),o.a.createElement("div",{className:"chat-container"},o.a.createElement("div",{className:"chat"},o.a.createElement("div",{className:"chat-header"},"Conversation with ",u),o.a.createElement("div",{className:"chat-message-container"},f.map((function(e){if("bot"!==e.type)return o.a.createElement(c,{message:e.message,key:e.id});var r={passDownProps:M({},e),setState:n,state:t,customComponents:s,widgetRegistry:a,messages:f};return e.widget?o.a.createElement(E,A({customStyles:l,scrollIntoView:h},r,{key:e.id})):o.a.createElement(O,A({customStyles:l.botMessageBox,key:e.id,withAvatar:!0},r.passDownProps,{customComponents:s,messages:f,setState:n}))})),o.a.createElement("div",{style:{paddingBottom:"15px"},ref:p})),o.a.createElement("div",{className:"chat-input-container"},o.a.createElement("form",{className:"chat-input-form",onSubmit:function(e){e.preventDefault(),n((function(e){return M({},e,{messages:[].concat(T(e.messages),[b(m,"user")])})})),i.parse(m),h(),y("")}},o.a.createElement("input",{className:"chat-input",placeholder:"Write your message here",value:m,onChange:function(e){return y(e.target.value)}}),o.a.createElement("button",{className:"chat-btn-send",style:g},o.a.createElement(D,{className:"chat-btn-send-icon"}))))))};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,"addWidget",(function(e){var t=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,a=e.props,i=e.updateKey;r[t]={widget:n,props:a,mapStateToProps:o,updateKey:i}})),z(this,"getWidget",(function(e,t){var n=r[e];if(n){var o=U({scrollIntoView:t.scrollIntoView},n.props,{},r.mapStateToProps(n.mapStateToProps,t),{setState:r.setState,actionProvider:r.actionProvider});if(n.updateKey)o=U({},o,{updateKey:n.updateKey});return n.widget(o)}})),z(this,"mapStateToProps",(function(e,t){if(e)return e.reduce((function(e,n){return e[n]=t[n],e}),{})})),this.setState=t,this.actionProvider=n};function V(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=function(e){var t=e.ActionProvider,n=e.MessageParser,a=e.config,i=$(Object(r.useState)(W({messages:V(a.initialMessages)},a.state)),2),c=i[0],s=i[1],u=new t(m,s),l=new F(s,u),f=new n(u);a.widgets.forEach((function(e){return l.addWidget(e)}));var p=a.customStyles;return o.a.createElement(B,{state:c,setState:s,widgetRegistry:l,messageParser:f,customComponents:W({},a.customComponents),botName:a.botName,customStyles:p})};t.default=G}]);