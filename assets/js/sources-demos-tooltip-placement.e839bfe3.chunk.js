(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{166:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n(0),o=n.n(r),u=n(6);function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],h=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,n,a,p=f(y);function y(){var t;c(this,y);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return b(s(t=p.call.apply(p,[this].concat(n))),"state",{placement:m[0]}),t}return e=y,(n=[{key:"render",value:function(){var t=this,e=this.state.placement;return o.a.createElement(r.Fragment,null,o.a.createElement(u.Select,{style:{maxWidth:300,marginBottom:40},onChange:function(e){t.setState({placement:e.target.value})},options:m.map((function(t){return{label:t,value:t}})),defaultValue:e}),o.a.createElement(u.Tooltip,{placement:e,content:o.a.createElement("p",null,"Tooltip content"),style:{width:100,margin:"0 auto"}},o.a.createElement(u.Button,null,"Hover me")))}}])&&i(e.prototype,n),a&&i(e,a),y}(r.Component)}}]);
//# sourceMappingURL=sources-demos-tooltip-placement.e839bfe3.chunk.js.map