(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{12:function(n,t,e){"use strict";e.d(t,"a",(function(){return m})),e.d(t,"b",(function(){return h})),e.d(t,"c",(function(){return d}));var a=e(21),o=e(79),r=e(80),i=e(46);function c(n){return"/"===n.charAt(0)?n:"/"+n}function s(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function u(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function f(n){var t=n.pathname,e=n.search,a=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(o+="#"===a.charAt(0)?a:"#"+a),o}function h(n,t,e,r){var i;"string"===typeof n?(i=function(n){var t=n||"/",e="",a="",o=t.indexOf("#");-1!==o&&(a=t.substr(o),t=t.substr(0,o));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===a?"":a}}(n)).state=t:(void 0===(i=Object(a.a)({},n)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return e&&(i.key=e),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=Object(o.a)(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function d(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&Object(r.a)(n.state,t.state)}function l(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,a,o){if(null!=n){var r="function"===typeof n?n(t,e):n;"string"===typeof r?"function"===typeof a?a(r,o):o(!0):o(!1!==r)}else o(!0)},appendListener:function(n){var e=!0;function a(){e&&n.apply(void 0,arguments)}return t.push(a),function(){e=!1,t=t.filter((function(n){return n!==a}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];t.forEach((function(n){return n.apply(void 0,e)}))}}}var p=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(n,t){t(window.confirm(n))}function w(){try{return window.history.state||{}}catch(n){return{}}}function m(n){void 0===n&&(n={}),p||Object(i.a)(!1);var t=window.history,e=function(){var n=window.navigator.userAgent;return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),o=!(-1===window.navigator.userAgent.indexOf("Trident")),r=n,d=r.forceRefresh,m=void 0!==d&&d,y=r.getUserConfirmation,g=void 0===y?v:y,O=r.keyLength,k=void 0===O?6:O,b=n.basename?u(c(n.basename)):"";function A(n){var t=n||{},e=t.key,a=t.state,o=window.location,r=o.pathname+o.search+o.hash;return b&&(r=s(r,b)),h(r,a,e)}function x(){return Math.random().toString(36).substr(2,k)}var P=l();function L(n){Object(a.a)(B,n),B.length=t.length,P.notifyListeners(B.location,B.action)}function E(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||C(A(n.state))}function T(){C(A(w()))}var S=!1;function C(n){if(S)S=!1,L();else{P.confirmTransitionTo(n,"POP",g,(function(t){t?L({action:"POP",location:n}):function(n){var t=B.location,e=U.indexOf(t.key);-1===e&&(e=0);var a=U.indexOf(n.key);-1===a&&(a=0);var o=e-a;o&&(S=!0,H(o))}(n)}))}}var R=A(w()),U=[R.key];function j(n){return b+f(n)}function H(n){t.go(n)}var I=0;function J(n){1===(I+=n)&&1===n?(window.addEventListener("popstate",E),o&&window.addEventListener("hashchange",T)):0===I&&(window.removeEventListener("popstate",E),o&&window.removeEventListener("hashchange",T))}var M=!1;var B={length:t.length,action:"POP",location:R,createHref:j,push:function(n,a){var o=h(n,a,x(),B.location);P.confirmTransitionTo(o,"PUSH",g,(function(n){if(n){var a=j(o),r=o.key,i=o.state;if(e)if(t.pushState({key:r,state:i},null,a),m)window.location.href=a;else{var c=U.indexOf(B.location.key),s=U.slice(0,c+1);s.push(o.key),U=s,L({action:"PUSH",location:o})}else window.location.href=a}}))},replace:function(n,a){var o=h(n,a,x(),B.location);P.confirmTransitionTo(o,"REPLACE",g,(function(n){if(n){var a=j(o),r=o.key,i=o.state;if(e)if(t.replaceState({key:r,state:i},null,a),m)window.location.replace(a);else{var c=U.indexOf(B.location.key);-1!==c&&(U[c]=o.key),L({action:"REPLACE",location:o})}else window.location.replace(a)}}))},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(n){void 0===n&&(n=!1);var t=P.setPrompt(n);return M||(J(1),M=!0),function(){return M&&(M=!1,J(-1)),t()}},listen:function(n){var t=P.appendListener(n);return J(1),function(){J(-1),t()}}};return B}}}]);
//# sourceMappingURL=npm.history.4f12660f.chunk.js.map