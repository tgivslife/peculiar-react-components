(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(0),r=n.n(o),c=n(6);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,o,u=f(s);function s(){var e;i(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return b(p(e=u.call.apply(u,[this].concat(n))),"state",{open:!1}),b(p(e),"handleOpen",(function(){e.setState({open:!0})})),b(p(e),"handleClose",(function(){e.setState({open:!1})})),e}return t=s,(n=[{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",null,r.a.createElement(c.e,{onClick:this.handleOpen},"Open"),r.a.createElement(c.v,{autoHideDuration:4e3,onClose:this.handleClose,open:e,action:[r.a.createElement(c.e,{size:"small",key:"0",onClick:this.handleClose,bgType:"stroke",color:"success",textColor:"white"},"Close")]},"I love candy. I love cookies. I love cupcakes."))}}])&&a(t.prototype,n),o&&a(t,o),s}(o.Component)}}]);
//# sourceMappingURL=sources-demos-snackbar-basic.f48d98ed.chunk.js.map