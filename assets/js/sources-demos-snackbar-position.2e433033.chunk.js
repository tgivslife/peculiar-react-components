(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n(1),r=n.n(o),c=n(7);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,n,o,i=s(p);function p(){var e;a(this,p);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return h(y(e=i.call.apply(i,[this].concat(n))),"state",{open:!1,verticalPosition:"bottom"}),h(y(e),"handleClose",(function(){e.setState({open:!1})})),e}return t=p,(n=[{key:"handleOpen",value:function(e){this.setState({open:!0,verticalPosition:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(c.e,{onClick:function(){return e.handleOpen("top")}},"Top position"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.e,{onClick:function(){return e.handleOpen("bottom")}},"Bottom position"),r.a.createElement(c.v,u({autoHideDuration:4e3,onClose:this.handleClose},this.state,{action:[r.a.createElement(c.e,{size:"small",key:"0",onClick:this.handleClose,bgType:"stroke",color:"success",textColor:"white"},"Close")]}),"I love candy. I love cookies. I love cupcakes."))}}])&&l(t.prototype,n),o&&l(t,o),p}(o.Component)}}]);
//# sourceMappingURL=sources-demos-snackbar-position.2e433033.chunk.js.map