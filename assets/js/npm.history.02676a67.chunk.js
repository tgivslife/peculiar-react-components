(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{10:function(n,t,e){"use strict";e.d(t,"a",(function(){return m})),e.d(t,"b",(function(){return x})),e.d(t,"d",(function(){return A})),e.d(t,"c",(function(){return d})),e.d(t,"f",(function(){return l})),e.d(t,"e",(function(){return h}));var o=e(6),i=e(62),a=e(63),r=e(8);function c(n){return"/"===n.charAt(0)?n:"/"+n}function u(n){return"/"===n.charAt(0)?n.substr(1):n}function f(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function s(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function h(n){var t=n.pathname,e=n.search,o=n.hash,i=t||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}function d(n,t,e,a){var r;"string"===typeof n?(r=function(n){var t=n||"/",e="",o="",i=t.indexOf("#");-1!==i&&(o=t.substr(i),t=t.substr(0,i));var a=t.indexOf("?");return-1!==a&&(e=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}(n)).state=t:(void 0===(r=Object(o.a)({},n)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==t&&void 0===r.state&&(r.state=t));try{r.pathname=decodeURI(r.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return e&&(r.key=e),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=Object(i.a)(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function l(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&Object(a.a)(n.state,t.state)}function v(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,i){if(null!=n){var a="function"===typeof n?n(t,e):n;"string"===typeof a?"function"===typeof o?o(a,i):i(!0):i(!1!==a)}else i(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var p=!("undefined"===typeof window||!window.document||!window.document.createElement);function w(n,t){t(window.confirm(n))}function g(){try{return window.history.state||{}}catch(n){return{}}}function m(n){void 0===n&&(n={}),p||Object(r.a)(!1);var t=window.history,e=function(){var n=window.navigator.userAgent;return(-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=n,u=a.forceRefresh,l=void 0!==u&&u,m=a.getUserConfirmation,P=void 0===m?w:m,y=a.keyLength,O=void 0===y?6:y,b=n.basename?s(c(n.basename)):"";function x(n){var t=n||{},e=t.key,o=t.state,i=window.location,a=i.pathname+i.search+i.hash;return b&&(a=f(a,b)),d(a,o,e)}function k(){return Math.random().toString(36).substr(2,O)}var A=v();function L(n){Object(o.a)(B,n),B.length=t.length,A.notifyListeners(B.location,B.action)}function E(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||C(x(n.state))}function T(){C(x(g()))}var S=!1;function C(n){if(S)S=!1,L();else{A.confirmTransitionTo(n,"POP",P,(function(t){t?L({action:"POP",location:n}):function(n){var t=B.location,e=R.indexOf(t.key);-1===e&&(e=0);var o=R.indexOf(n.key);-1===o&&(o=0);var i=e-o;i&&(S=!0,j(i))}(n)}))}}var U=x(g()),R=[U.key];function H(n){return b+h(n)}function j(n){t.go(n)}var I=0;function M(n){1===(I+=n)&&1===n?(window.addEventListener("popstate",E),i&&window.addEventListener("hashchange",T)):0===I&&(window.removeEventListener("popstate",E),i&&window.removeEventListener("hashchange",T))}var F=!1;var B={length:t.length,action:"POP",location:U,createHref:H,push:function(n,o){var i=d(n,o,k(),B.location);A.confirmTransitionTo(i,"PUSH",P,(function(n){if(n){var o=H(i),a=i.key,r=i.state;if(e)if(t.pushState({key:a,state:r},null,o),l)window.location.href=o;else{var c=R.indexOf(B.location.key),u=R.slice(0,c+1);u.push(i.key),R=u,L({action:"PUSH",location:i})}else window.location.href=o}}))},replace:function(n,o){var i=d(n,o,k(),B.location);A.confirmTransitionTo(i,"REPLACE",P,(function(n){if(n){var o=H(i),a=i.key,r=i.state;if(e)if(t.replaceState({key:a,state:r},null,o),l)window.location.replace(o);else{var c=R.indexOf(B.location.key);-1!==c&&(R[c]=i.key),L({action:"REPLACE",location:i})}else window.location.replace(o)}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=A.setPrompt(n);return F||(M(1),F=!0),function(){return F&&(F=!1,M(-1)),t()}},listen:function(n){var t=A.appendListener(n);return M(1),function(){M(-1),t()}}};return B}var P={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+u(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function y(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function O(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function b(n){window.location.replace(y(window.location.href)+"#"+n)}function x(n){void 0===n&&(n={}),p||Object(r.a)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),i=e.getUserConfirmation,a=void 0===i?w:i,u=e.hashType,l=void 0===u?"slash":u,g=n.basename?s(c(n.basename)):"",m=P[l],x=m.encodePath,k=m.decodePath;function A(){var n=k(O());return g&&(n=f(n,g)),d(n)}var L=v();function E(n){Object(o.a)(J,n),J.length=t.length,L.notifyListeners(J.location,J.action)}var T=!1,S=null;function C(){var n,t,e=O(),o=x(e);if(e!==o)b(o);else{var i=A(),r=J.location;if(!T&&(t=i,(n=r).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(S===h(i))return;S=null,function(n){if(T)T=!1,E();else{L.confirmTransitionTo(n,"POP",a,(function(t){t?E({action:"POP",location:n}):function(n){var t=J.location,e=j.lastIndexOf(h(t));-1===e&&(e=0);var o=j.lastIndexOf(h(n));-1===o&&(o=0);var i=e-o;i&&(T=!0,I(i))}(n)}))}}(i)}}var U=O(),R=x(U);U!==R&&b(R);var H=A(),j=[h(H)];function I(n){t.go(n)}var M=0;function F(n){1===(M+=n)&&1===n?window.addEventListener("hashchange",C):0===M&&window.removeEventListener("hashchange",C)}var B=!1;var J={length:t.length,action:"POP",location:H,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=y(window.location.href)),e+"#"+x(g+h(n))},push:function(n,t){var e=d(n,void 0,void 0,J.location);L.confirmTransitionTo(e,"PUSH",a,(function(n){if(n){var t=h(e),o=x(g+t);if(O()!==o){S=t,function(n){window.location.hash=n}(o);var i=j.lastIndexOf(h(J.location)),a=j.slice(0,i+1);a.push(t),j=a,E({action:"PUSH",location:e})}else E()}}))},replace:function(n,t){var e=d(n,void 0,void 0,J.location);L.confirmTransitionTo(e,"REPLACE",a,(function(n){if(n){var t=h(e),o=x(g+t);O()!==o&&(S=t,b(o));var i=j.indexOf(h(J.location));-1!==i&&(j[i]=t),E({action:"REPLACE",location:e})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return B||(F(1),B=!0),function(){return B&&(B=!1,F(-1)),t()}},listen:function(n){var t=L.appendListener(n);return F(1),function(){F(-1),t()}}};return J}function k(n,t,e){return Math.min(Math.max(n,t),e)}function A(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,i=t.initialEntries,a=void 0===i?["/"]:i,r=t.initialIndex,c=void 0===r?0:r,u=t.keyLength,f=void 0===u?6:u,s=v();function l(n){Object(o.a)(y,n),y.length=y.entries.length,s.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,f)}var w=k(c,0,a.length-1),g=a.map((function(n){return d(n,void 0,"string"===typeof n?p():n.key||p())})),m=h;function P(n){var t=k(y.index+n,0,y.entries.length-1),o=y.entries[t];s.confirmTransitionTo(o,"POP",e,(function(n){n?l({action:"POP",location:o,index:t}):l()}))}var y={length:g.length,action:"POP",location:g[w],index:w,entries:g,createHref:m,push:function(n,t){var o=d(n,t,p(),y.location);s.confirmTransitionTo(o,"PUSH",e,(function(n){if(n){var t=y.index+1,e=y.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),l({action:"PUSH",location:o,index:t,entries:e})}}))},replace:function(n,t){var o=d(n,t,p(),y.location);s.confirmTransitionTo(o,"REPLACE",e,(function(n){n&&(y.entries[y.index]=o,l({action:"REPLACE",location:o}))}))},go:P,goBack:function(){P(-1)},goForward:function(){P(1)},canGo:function(n){var t=y.index+n;return t>=0&&t<y.entries.length},block:function(n){return void 0===n&&(n=!1),s.setPrompt(n)},listen:function(n){return s.appendListener(n)}};return y}}}]);
//# sourceMappingURL=npm.history.02676a67.chunk.js.map