(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(1),o=n.n(r),i=n(11);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(p,e);var t,n,r,c=s(p);function p(){var e;a(this,p);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(y(e=c.call.apply(c,[this].concat(n))),"state",{open:!1,verticalPosition:"bottom"}),v(y(e),"handleClose",(function(){e.setState({open:!1})})),e}return t=p,(n=[{key:"handleOpen",value:function(e){this.setState({open:!0,verticalPosition:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(i.e,{onClick:function(){return e.handleOpen("top")}},"Top position"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.e,{onClick:function(){return e.handleOpen("bottom")}},"Bottom position"),o.a.createElement(i.v,u({autoHideDuration:4e3,onClose:this.handleClose},this.state,{action:[o.a.createElement(i.e,{size:"small",key:"0",onClick:this.handleClose,bgType:"stroke",color:"success",textColor:"white"},"Close")]}),"I love candy. I love cookies. I love cupcakes."))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(r.Component)}}]);
//# sourceMappingURL=sources-demos-snackbar-position.ba6b4046.chunk.js.map