(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(1),o=n.n(r),i=n(11);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(s,e);var t,n,r,c=f(s);function s(){var e;u(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(p(e=c.call.apply(c,[this].concat(n))),"state",{open:!1}),b(p(e),"handleOpen",(function(){e.setState({open:!0})})),b(p(e),"handleClose",(function(){e.setState({open:!1})})),e}return t=s,(n=[{key:"render",value:function(){var e=this.state.open;return o.a.createElement("div",null,o.a.createElement(i.e,{onClick:this.handleOpen},"Open"),o.a.createElement(i.v,{autoHideDuration:4e3,onClose:this.handleClose,open:e,action:[o.a.createElement(i.e,{size:"small",key:"0",onClick:this.handleClose,bgType:"stroke",color:"success",textColor:"white"},"Close")]},"I love candy. I love cookies. I love cupcakes."))}}])&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component)}}]);
//# sourceMappingURL=sources-demos-snackbar-basic.e52d3080.chunk.js.map