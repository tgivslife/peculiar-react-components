(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{265:function(t,e,n){"use strict";var r=n(266),i=n(11),o=n(268);function f(t){var e=r(o);e.prototype.options=i(e.prototype.options,this.data("settings"),t),this.Parser=e}t.exports=f,f.Parser=o},268:function(t,e,n){"use strict";var r=n(11),i=n(269),o=n(270),f=n(271),c=n(272),s=n(278);function a(t,e){this.file=e,this.offset={},this.options=r(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=o(e).toOffset,this.unescape=f(this,"escape"),this.decode=c(this)}t.exports=a;var l=a.prototype;function h(t){var e,n=[];for(e in t)n.push(e);return n}l.setOptions=n(279),l.parse=n(282),l.options=n(72),l.exitStart=i("atStart",!0),l.enterList=i("inList",!1),l.enterLink=i("inLink",!1),l.enterBlock=i("inBlock",!1),l.interruptParagraph=[["thematicBreak"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],l.interruptList=[["atxHeading",{pedantic:!1}],["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],l.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],l.blockTokenizers={newline:n(286),indentedCode:n(287),fencedCode:n(288),blockquote:n(289),atxHeading:n(290),thematicBreak:n(291),list:n(292),setextHeading:n(294),html:n(295),footnote:n(296),definition:n(298),table:n(299),paragraph:n(300)},l.inlineTokenizers={escape:n(301),autoLink:n(303),url:n(304),html:n(306),link:n(307),reference:n(308),strong:n(309),emphasis:n(311),deletion:n(314),code:n(316),break:n(318),text:n(320)},l.blockMethods=h(l.blockTokenizers),l.inlineMethods=h(l.inlineTokenizers),l.tokenizeBlock=s("block"),l.tokenizeInline=s("inline"),l.tokenizeFactory=s},271:function(t,e,n){"use strict";t.exports=function(t,e){return function(n){var r,i=0,o=n.indexOf("\\"),f=t[e],c=[];for(;-1!==o;)c.push(n.slice(i,o)),i=o+1,(r=n.charAt(i))&&-1!==f.indexOf(r)||c.push("\\"),o=n.indexOf("\\",i);return c.push(n.slice(i)),c.join("")}}},272:function(t,e,n){"use strict";var r=n(11),i=n(40);t.exports=function(t){return o.raw=function(t,o,f){return i(t,r(f,{position:e(o),warning:n}))},o;function e(e){for(var n=t.offset,r=e.line,i=[];++r&&r in n;)i.push((n[r]||0)+1);return{start:e,indent:i}}function n(e,n,r){3!==r&&t.file.message(e,n)}function o(r,o,f){i(r,{position:e(o),warning:n,text:f,reference:f,textContext:t,referenceContext:t})}}},278:function(t,e,n){"use strict";t.exports=function(t){return function(e,n){var o,f,c,s,a,l,h=this,u=h.offset,p=[],d=h[t+"Methods"],A=h[t+"Tokenizers"],k=n.line,g=n.column;if(!e)return p;b.now=v,b.file=h.file,m("");for(;e;){for(o=-1,f=d.length,a=!1;++o<f&&(s=d[o],!(c=A[s])||c.onlyAtStart&&!h.atStart||c.notInList&&h.inList||c.notInBlock&&h.inBlock||c.notInLink&&h.inLink||(l=e.length,c.apply(h,[b,e]),!(a=l!==e.length))););a||h.file.fail(new Error("Infinite loop"),b.now())}return h.eof=v(),p;function m(t){for(var e=-1,n=t.indexOf("\n");-1!==n;)k++,e=n,n=t.indexOf("\n",n+1);-1===e?g+=t.length:g=t.length-e,k in u&&(-1!==e?g+=u[k]:g<=u[k]&&(g=u[k]+1))}function v(){var t={line:k,column:g};return t.offset=h.toOffset(t),t}function x(t){this.start=t,this.end=v()}function b(t){var n=function(){var t=[],e=k+1;return function(){for(var n=k+1;e<n;)t.push((u[e]||0)+1),e++;return t}}(),o=function(){var t=v();return function(e,n){var r=e.position,i=r?r.start:t,o=[],f=r&&r.end.line,c=t.line;if(e.position=new x(i),r&&n&&r.indent){if(o=r.indent,f<c){for(;++f<c;)o.push((u[f]||0)+1);o.push(t.column)}n=o.concat(n)}return e.position.indent=n||[],e}}(),f=v();return function(t){e.substring(0,t.length)!==t&&h.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"),v())}(t),c.reset=s,s.test=a,c.test=a,e=e.substring(t.length),m(t),n=n(),c;function c(t,e){return o(function(t,e){var n=e?e.children:p,o=n[n.length-1];return o&&t.type===o.type&&t.type in r&&i(o)&&i(t)&&(t=r[t.type].call(h,o,t)),t!==o&&n.push(t),h.atStart&&0!==p.length&&h.exitStart(),t}(o(t),e),n)}function s(){var n=c.apply(null,arguments);return k=f.line,g=f.column,e=t+e,n}function a(){var n=o({});return k=f.line,g=f.column,e=t+e,n.position}}}};var r={text:function(t,e){return t.value+=e.value,t},blockquote:function(t,e){if(this.options.commonmark)return e;return t.children=t.children.concat(e.children),t}};function i(t){var e,n;return"text"!==t.type||!t.position||(e=t.position.start,n=t.position.end,e.line!==n.line||n.column-e.column===t.value.length)}},279:function(t,e,n){"use strict";var r=n(11),i=n(280),o=n(72);t.exports=function(t){var e,n,f=this.options;if(null==t)t={};else{if("object"!==typeof t)throw new Error("Invalid value `"+t+"` for setting `options`");t=r(t)}for(e in o){if(null==(n=t[e])&&(n=f[e]),"blocks"!==e&&"boolean"!==typeof n||"blocks"===e&&"object"!==typeof n)throw new Error("Invalid value `"+n+"` for setting `options."+e+"`");t[e]=n}return this.options=t,this.escape=i(t),this}},281:function(t){t.exports=JSON.parse('["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]')},282:function(t,e,n){"use strict";var r=n(11),i=n(283);t.exports=function(){var t,e=String(this.file),n={line:1,column:1,offset:0},f=r(n);65279===(e=e.replace(o,"\n")).charCodeAt(0)&&(e=e.slice(1),f.column++,f.offset++);t={type:"root",children:this.tokenizeBlock(e,f),position:{start:n,end:this.eof||r(n)}},this.options.position||i(t,!0);return t};var o=/\r\n|\r/g},286:function(t,e,n){"use strict";var r=n(8);t.exports=function(t,e,n){var i,o,f,c,s=e.charAt(0);if("\n"!==s)return;if(n)return!0;c=1,i=e.length,o=s,f="";for(;c<i&&(s=e.charAt(c),r(s));)f+=s,"\n"===s&&(o+=f,f=""),c++;t(o)}},287:function(t,e,n){"use strict";var r=n(41),i=n(42);t.exports=function(t,e,n){var r,f,c,s=-1,a=e.length,l="",h="",u="",p="";for(;++s<a;)if(r=e.charAt(s),c)if(c=!1,l+=u,h+=p,u="",p="","\n"===r)u=r,p=r;else for(l+=r,h+=r;++s<a;){if(!(r=e.charAt(s))||"\n"===r){p=r,u=r;break}l+=r,h+=r}else if(" "===r&&e.charAt(s+1)===r&&e.charAt(s+2)===r&&e.charAt(s+3)===r)u+=o,s+=3,c=!0;else if("\t"===r)u+=r,c=!0;else{for(f="";"\t"===r||" "===r;)f+=r,r=e.charAt(++s);if("\n"!==r)break;u+=f+r,p+=r}if(h)return!!n||t(l)({type:"code",lang:null,value:i(h)})};var o=r(" ",4)},288:function(t,e,n){"use strict";var r=n(42);t.exports=function(t,e,n){var i,o,f,c,s,a,l,h,u,p,d,A=this.options,k=e.length+1,g=0,m="";if(!A.gfm)return;for(;g<k&&(" "===(f=e.charAt(g))||"\t"===f);)m+=f,g++;if(p=g,"~"!==(f=e.charAt(g))&&"`"!==f)return;g++,o=f,i=1,m+=f;for(;g<k&&(f=e.charAt(g))===o;)m+=f,i++,g++;if(i<3)return;for(;g<k&&(" "===(f=e.charAt(g))||"\t"===f);)m+=f,g++;c="",s="";for(;g<k&&"\n"!==(f=e.charAt(g))&&"~"!==f&&"`"!==f;)" "===f||"\t"===f?s+=f:(c+=s+f,s=""),g++;if((f=e.charAt(g))&&"\n"!==f)return;if(n)return!0;(d=t.now()).column+=m.length,d.offset+=m.length,m+=c,c=this.decode.raw(this.unescape(c),d),s&&(m+=s);s="",h="",u="",a="",l="";for(;g<k;)if(f=e.charAt(g),a+=h,l+=u,h="",u="","\n"===f){for(a?(h+=f,u+=f):m+=f,s="",g++;g<k&&" "===(f=e.charAt(g));)s+=f,g++;if(h+=s,u+=s.slice(p),!(s.length>=4)){for(s="";g<k&&(f=e.charAt(g))===o;)s+=f,g++;if(h+=s,u+=s,!(s.length<i)){for(s="";g<k&&(" "===(f=e.charAt(g))||"\t"===f);)h+=f,u+=f,g++;if(!f||"\n"===f)break}}}else a+=f,u+=f,g++;return t(m+=a+h)({type:"code",lang:c||null,value:r(l)})}},289:function(t,e,n){"use strict";var r=n(14),i=n(43);t.exports=function(t,e,n){var o,f,c,s,a,l,h,u,p,d=this.offset,A=this.blockTokenizers,k=this.interruptBlockquote,g=t.now(),m=g.line,v=e.length,x=[],b=[],y=[],w=0;for(;w<v&&(" "===(f=e.charAt(w))||"\t"===f);)w++;if(">"!==e.charAt(w))return;if(n)return!0;w=0;for(;w<v;){for(s=e.indexOf("\n",w),h=w,u=!1,-1===s&&(s=v);w<v&&(" "===(f=e.charAt(w))||"\t"===f);)w++;if(">"===e.charAt(w)?(w++,u=!0," "===e.charAt(w)&&w++):w=h,a=e.slice(w,s),!u&&!r(a)){w=h;break}if(!u&&(c=e.slice(w),i(k,A,this,[t,c,!0])))break;l=h===w?a:e.slice(h,s),y.push(w-h),x.push(l),b.push(a),w=s+1}w=-1,v=y.length,o=t(x.join("\n"));for(;++w<v;)d[m]=(d[m]||0)+y[w],m++;return p=this.enterBlock(),b=this.tokenizeBlock(b.join("\n"),g),p(),o({type:"blockquote",children:b})}},290:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,f=this.options,c=e.length+1,s=-1,a=t.now(),l="",h="";for(;++s<c;){if(" "!==(r=e.charAt(s))&&"\t"!==r){s--;break}l+=r}o=0;for(;++s<=c;){if("#"!==(r=e.charAt(s))){s--;break}l+=r,o++}if(o>6)return;if(!o||!f.pedantic&&"#"===e.charAt(s+1))return;c=e.length+1,i="";for(;++s<c;){if(" "!==(r=e.charAt(s))&&"\t"!==r){s--;break}i+=r}if(!f.pedantic&&0===i.length&&r&&"\n"!==r)return;if(n)return!0;l+=i,i="",h="";for(;++s<c&&(r=e.charAt(s))&&"\n"!==r;)if(" "===r||"\t"===r||"#"===r){for(;" "===r||"\t"===r;)i+=r,r=e.charAt(++s);for(;"#"===r;)i+=r,r=e.charAt(++s);for(;" "===r||"\t"===r;)i+=r,r=e.charAt(++s);s--}else h+=i+r,i="";return a.column+=l.length,a.offset+=l.length,t(l+=h+i)({type:"heading",depth:o,children:this.tokenizeInline(h,a)})}},291:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,f,c=-1,s=e.length+1,a="";for(;++c<s&&("\t"===(r=e.charAt(c))||" "===r);)a+=r;if("*"!==r&&"-"!==r&&"_"!==r)return;i=r,a+=r,o=1,f="";for(;++c<s;)if((r=e.charAt(c))===i)o++,a+=f+i,f="";else{if(" "!==r)return o>=3&&(!r||"\n"===r)?(a+=f,!!n||t(a)({type:"thematicBreak"})):void 0;f+=r}}},292:function(t,e,n){"use strict";var r=n(14),i=n(41),o=n(27),f=n(73),c=n(293),s=n(43);t.exports=function(t,e,n){var i,f,c,a,l,h,u,p,m,v,x,b,y,w,z,O,L,I,B,T,C,j,S,_,E=this.options.commonmark,Z=this.options.pedantic,q=this.blockTokenizers,H=this.interruptList,$=0,M=e.length,R=null,P=0;for(;$<M;){if("\t"===(a=e.charAt($)))P+=4-P%4;else{if(" "!==a)break;P++}$++}if(P>=4)return;if(a=e.charAt($),i=E?k:A,!0===d[a])l=a,c=!1;else{for(c=!0,f="";$<M&&(a=e.charAt($),o(a));)f+=a,$++;if(a=e.charAt($),!f||!0!==i[a])return;R=parseInt(f,10),l=a}if(" "!==(a=e.charAt(++$))&&"\t"!==a)return;if(n)return!0;$=0,w=[],z=[],O=[];for(;$<M;){for(h=e.indexOf("\n",$),u=$,p=!1,_=!1,-1===h&&(h=M),S=$+4,P=0;$<M;){if("\t"===(a=e.charAt($)))P+=4-P%4;else{if(" "!==a)break;P++}$++}if(P>=4&&(_=!0),L&&P>=L.indent&&(_=!0),a=e.charAt($),m=null,!_){if(!0===d[a])m=a,$++,P++;else{for(f="";$<M&&(a=e.charAt($),o(a));)f+=a,$++;a=e.charAt($),$++,f&&!0===i[a]&&(m=a,P+=f.length+1)}if(m)if("\t"===(a=e.charAt($)))P+=4-P%4,$++;else if(" "===a){for(S=$+4;$<S&&" "===e.charAt($);)$++,P++;$===S&&" "===e.charAt($)&&($-=3,P-=3)}else"\n"!==a&&""!==a&&(m=null)}if(m){if(!Z&&l!==m)break;p=!0}else E||_||" "!==e.charAt(u)?E&&L&&(_=P>=L.indent||P>4):_=!0,p=!1,$=u;if(x=e.slice(u,h),v=u===$?x:e.slice($,h),("*"===m||"_"===m||"-"===m)&&q.thematicBreak.call(this,t,x,!0))break;if(b=y,y=!r(v).length,_&&L)L.value=L.value.concat(O,x),z=z.concat(O,x),O=[];else if(p)0!==O.length&&(L.value.push(""),L.trail=O.concat()),L={value:[x],indent:P,trail:[]},w.push(L),z=z.concat(O,x),O=[];else if(y){if(b)break;O.push(x)}else{if(b)break;if(s(H,q,this,[t,x,!0]))break;L.value=L.value.concat(O,x),z=z.concat(O,x),O=[]}$=h+1}C=t(z.join("\n")).reset({type:"list",ordered:c,start:R,loose:null,children:[]}),I=this.enterList(),B=this.enterBlock(),T=!1,$=-1,M=w.length;for(;++$<M;)L=w[$].value.join("\n"),j=t.now(),(L=t(L)(g(this,L,j),C)).loose&&(T=!0),L=w[$].trail.join("\n"),$!==M-1&&(L+="\n"),t(L);return I(),B(),C.loose=T,C};var a=/\n\n(?!\s*$)/,l=/^\[([ \t]|x|X)][ \t]/,h=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,u=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,p=/^( {1,4}|\t)?/gm,d={"*":!0,"+":!0,"-":!0},A={".":!0},k={};function g(t,e,n){var r,i,o=t.offset,f=t.options.pedantic?m:v,c=null;return e=f.apply(null,arguments),t.options.gfm&&(r=e.match(l))&&(i=r[0].length,c="x"===r[1].toLowerCase(),o[n.line]+=i,e=e.slice(i)),{type:"listItem",loose:a.test(e)||"\n"===e.charAt(e.length-1),checked:c,children:t.tokenizeBlock(e,n)}}function m(t,e,n){var r=t.offset,i=n.line;return e=e.replace(u,o),i=n.line,e.replace(p,o);function o(t){return r[i]=(r[i]||0)+t.length,i++,""}}function v(t,e,n){var r,o,s,a,l,u,p,d=t.offset,A=n.line;for(a=(e=e.replace(h,(function(t,e,n,f,c){o=e+n+f,s=c,Number(n)<10&&o.length%2===1&&(n=" "+n);return(r=e+i(" ",n.length)+f)+s}))).split("\n"),(l=c(e,f(r).indent).split("\n"))[0]=s,d[A]=(d[A]||0)+o.length,A++,u=0,p=a.length;++u<p;)d[A]=(d[A]||0)+a[u].length-l[u].length,A++;return l.join("\n")}k["."]=!0,k[")"]=!0},293:function(t,e,n){"use strict";var r=n(14),i=n(41),o=n(73);t.exports=function(t,e){var n,f,c,s,a=t.split("\n"),l=a.length+1,h=1/0,u=[];a.unshift(i(" ",e)+"!");for(;l--;)if(f=o(a[l]),u[l]=f.stops,0!==r(a[l]).length){if(!f.indent){h=1/0;break}f.indent>0&&f.indent<h&&(h=f.indent)}if(h!==1/0)for(l=a.length;l--;){for(c=u[l],n=h;n&&!(n in c);)n--;s=0!==r(a[l]).length&&h&&n!==h?"\t":"",a[l]=s+a[l].slice(n in c?c[n]+1:0)}return a.shift(),a.join("\n")}},294:function(t,e,n){"use strict";t.exports=function(t,e,n){var i,o,f,c,s,a=t.now(),l=e.length,h=-1,u="";for(;++h<l;){if(" "!==(f=e.charAt(h))||h>=3){h--;break}u+=f}i="",o="";for(;++h<l;){if("\n"===(f=e.charAt(h))){h--;break}" "===f||"\t"===f?o+=f:(i+=o+f,o="")}if(a.column+=u.length,a.offset+=u.length,u+=i+o,f=e.charAt(++h),c=e.charAt(++h),"\n"!==f||!r[c])return;u+=f,o=c,s=r[c];for(;++h<l;){if((f=e.charAt(h))!==c){if("\n"!==f)return;h--;break}o+=f}if(n)return!0;return t(u+o)({type:"heading",depth:s,children:this.tokenizeInline(i,a)})};var r={};r["="]=1,r["-"]=2},295:function(t,e,n){"use strict";var r=n(74).openCloseTag;t.exports=function(t,e,n){var i,o,f,c,s,a,l,h=this.options.blocks,u=e.length,p=0,d=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+h.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(r.source+"\\s*$"),/^$/,!1]];for(;p<u&&("\t"===(c=e.charAt(p))||" "===c);)p++;if("<"!==e.charAt(p))return;i=-1===(i=e.indexOf("\n",p+1))?u:i,o=e.slice(p,i),f=-1,s=d.length;for(;++f<s;)if(d[f][0].test(o)){a=d[f];break}if(!a)return;if(n)return a[2];if(p=i,!a[1].test(o))for(;p<u;){if(i=-1===(i=e.indexOf("\n",p+1))?u:i,o=e.slice(p+1,i),a[1].test(o)){o&&(p=i);break}p=i}return l=e.slice(0,p),t(l)({type:"html",value:l})}},296:function(t,e,n){"use strict";var r=n(8),i=n(44);t.exports=f,f.notInList=!0,f.notInBlock=!0;var o=/^( {4}|\t)?/gm;function f(t,e,n){var f,c,s,a,l,h,u,p,d,A,k,g,m=this.offset;if(this.options.footnotes){for(f=0,c=e.length,s="",a=t.now(),l=a.line;f<c&&(d=e.charAt(f),r(d));)s+=d,f++;if("["===e.charAt(f)&&"^"===e.charAt(f+1)){for(f=(s+="[^").length,u="";f<c&&"]"!==(d=e.charAt(f));)"\\"===d&&(u+=d,f++,d=e.charAt(f)),u+=d,f++;if(u&&"]"===e.charAt(f)&&":"===e.charAt(f+1)){if(n)return!0;for(A=i(u),f=(s+=u+"]:").length;f<c&&("\t"===(d=e.charAt(f))||" "===d);)s+=d,f++;for(a.column+=s.length,a.offset+=s.length,u="",h="",p="";f<c;){if("\n"===(d=e.charAt(f))){for(p=d,f++;f<c&&"\n"===(d=e.charAt(f));)p+=d,f++;for(u+=p,p="";f<c&&" "===(d=e.charAt(f));)p+=d,f++;if(0===p.length)break;u+=p}u&&(h+=u,u=""),h+=d,f++}return s+=h,h=h.replace(o,(function(t){return m[l]=(m[l]||0)+t.length,l++,""})),k=t(s),g=this.enterBlock(),h=this.tokenizeBlock(h,a),g(),k({type:"footnoteDefinition",identifier:A,children:h})}}}}},298:function(t,e,n){"use strict";var r=n(8),i=n(44);t.exports=o,o.notInList=!0,o.notInBlock=!0;function o(t,e,n){for(var r,o,s,a,l,h,u,p,d=this.options.commonmark,A=0,k=e.length,g="";A<k&&(" "===(a=e.charAt(A))||"\t"===a);)g+=a,A++;if("["===(a=e.charAt(A))){for(A++,g+=a,s="";A<k&&"]"!==(a=e.charAt(A));)"\\"===a&&(s+=a,A++,a=e.charAt(A)),s+=a,A++;if(s&&"]"===e.charAt(A)&&":"===e.charAt(A+1)){for(h=s,A=(g+=s+"]:").length,s="";A<k&&("\t"===(a=e.charAt(A))||" "===a||"\n"===a);)g+=a,A++;if(s="",r=g,"<"===(a=e.charAt(A))){for(A++;A<k&&f(a=e.charAt(A));)s+=a,A++;if((a=e.charAt(A))===f.delimiter)g+="<"+s+a,A++;else{if(d)return;A-=s.length+1,s=""}}if(!s){for(;A<k&&c(a=e.charAt(A));)s+=a,A++;g+=s}if(s){for(u=s,s="";A<k&&("\t"===(a=e.charAt(A))||" "===a||"\n"===a);)s+=a,A++;if(l=null,'"'===(a=e.charAt(A))?l='"':"'"===a?l="'":"("===a&&(l=")"),l){if(!s)return;for(A=(g+=s+a).length,s="";A<k&&(a=e.charAt(A))!==l;){if("\n"===a){if(A++,"\n"===(a=e.charAt(A))||a===l)return;s+="\n"}s+=a,A++}if((a=e.charAt(A))!==l)return;o=g,g+=s+a,A++,p=s,s=""}else s="",A=g.length;for(;A<k&&("\t"===(a=e.charAt(A))||" "===a);)g+=a,A++;return(a=e.charAt(A))&&"\n"!==a?void 0:!!n||(r=t(r).test().end,u=this.decode.raw(this.unescape(u),r,{nonTerminated:!1}),p&&(o=t(o).test().end,p=this.decode.raw(this.unescape(p),o)),t(g)({type:"definition",identifier:i(h),title:p||null,url:u}))}}}}function f(t){return">"!==t&&"["!==t&&"]"!==t}function c(t){return"["!==t&&"]"!==t&&!r(t)}f.delimiter=">"},299:function(t,e,n){"use strict";var r=n(8);t.exports=function(t,e,n){var i,o,f,c,s,a,l,h,u,p,d,A,k,g,m,v,x,b,y,w,z,O,L,I;if(!this.options.gfm)return;i=0,b=0,a=e.length+1,l=[];for(;i<a;){if(O=e.indexOf("\n",i),L=e.indexOf("|",i+1),-1===O&&(O=e.length),-1===L||L>O){if(b<2)return;break}l.push(e.slice(i,O)),b++,i=O+1}c=l.join("\n"),o=l.splice(1,1)[0]||[],i=0,a=o.length,b--,f=!1,d=[];for(;i<a;){if("|"===(u=o.charAt(i))){if(p=null,!1===f){if(!1===I)return}else d.push(f),f=!1;I=!1}else if("-"===u)p=!0,f=f||null;else if(":"===u)f="left"===f?"center":p&&null===f?"right":"left";else if(!r(u))return;i++}!1!==f&&d.push(f);if(d.length<1)return;if(n)return!0;x=-1,w=[],z=t(c).reset({type:"table",align:d,children:w});for(;++x<b;){for(y=l[x],s={type:"tableRow",children:[]},x&&t("\n"),t(y).reset(s,z),a=y.length+1,i=0,h="",A="",k=!0,g=null,m=null;i<a;)if("\t"!==(u=y.charAt(i))&&" "!==u){if(""===u||"|"===u)if(k)t(u);else{if(u&&m){h+=u,i++;continue}!A&&!u||k||(c=A,h.length>1&&(u?(c+=h.slice(0,h.length-1),h=h.charAt(h.length-1)):(c+=h,h="")),v=t.now(),t(c)({type:"tableCell",children:this.tokenizeInline(A,v)},s)),t(h+u),h="",A=""}else if(h&&(A+=h,h=""),A+=u,"\\"===u&&i!==a-2&&(A+=y.charAt(i+1),i++),"`"===u){for(g=1;y.charAt(i+1)===u;)A+=u,i++,g++;m?g>=m&&(m=0):m=g}k=!1,i++}else A?h+=u:t(u),i++;x||t("\n"+o)}return z}},300:function(t,e,n){"use strict";var r=n(14),i=n(27),o=n(42),f=n(43);t.exports=function(t,e,n){var c,s,a,l,h,u=this.options,p=u.commonmark,d=u.gfm,A=this.blockTokenizers,k=this.interruptParagraph,g=e.indexOf("\n"),m=e.length;for(;g<m;){if(-1===g){g=m;break}if("\n"===e.charAt(g+1))break;if(p){for(l=0,c=g+1;c<m;){if("\t"===(a=e.charAt(c))){l=4;break}if(" "!==a)break;l++,c++}if(l>=4){g=e.indexOf("\n",g+1);continue}}if(s=e.slice(g+1),f(k,A,this,[t,s,!0]))break;if(A.list.call(this,t,s,!0)&&(this.inList||p||d&&!i(r.left(s).charAt(0))))break;if(c=g,-1!==(g=e.indexOf("\n",g+1))&&""===r(e.slice(c,g))){g=c;break}}if(s=e.slice(0,g),""===r(s))return t(s),null;if(n)return!0;return h=t.now(),s=o(s),t(s)({type:"paragraph",children:this.tokenizeInline(s,h)})}},301:function(t,e,n){"use strict";var r=n(302);function i(t,e,n){var r,i;if("\\"===e.charAt(0)&&(r=e.charAt(1),-1!==this.escape.indexOf(r)))return!!n||(i="\n"===r?{type:"break"}:{type:"text",value:r},t("\\"+r)(i))}t.exports=i,i.locator=r},302:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("\\",e)}},303:function(t,e,n){"use strict";var r=n(8),i=n(40),o=n(75);t.exports=c,c.locator=o,c.notInLink=!0;var f="mailto:".length;function c(t,e,n){var o,c,s,a,l,h,u,p,d,A,k;if("<"===e.charAt(0)){for(this,o="",c=e.length,s=0,a="",h=!1,u="",s++,o="<";s<c&&(l=e.charAt(s),!(r(l)||">"===l||"@"===l||":"===l&&"/"===e.charAt(s+1)));)a+=l,s++;if(a){if(u+=a,a="",u+=l=e.charAt(s),s++,"@"===l)h=!0;else{if(":"!==l||"/"!==e.charAt(s+1))return;u+="/",s++}for(;s<c&&(l=e.charAt(s),!r(l)&&">"!==l);)a+=l,s++;if(l=e.charAt(s),a&&">"===l)return!!n||(d=u+=a,o+=u+l,(p=t.now()).column++,p.offset++,h&&("mailto:"===u.slice(0,f).toLowerCase()?(d=d.substr(f),p.column+=f,p.offset+=f):u="mailto:"+u),A=this.inlineTokenizers,this.inlineTokenizers={text:A.text},k=this.enterLink(),d=this.tokenizeInline(d,p),this.inlineTokenizers=A,k(),t(o)({type:"link",title:null,url:i(u,{nonTerminated:!1}),children:d}))}}}},304:function(t,e,n){"use strict";var r=n(40),i=n(8),o=n(305);t.exports=s,s.locator=o,s.notInLink=!0;var f=["http://","https://","mailto:"],c=f.length;function s(t,e,n){var o,s,a,l,h,u,p,d,A,k,g,m;if(this.options.gfm){for(o="",l=-1,d=c;++l<d;)if(u=f[l],(p=e.slice(0,u.length)).toLowerCase()===u){o=p;break}if(o){for(l=o.length,d=e.length,A="",k=0;l<d&&(a=e.charAt(l),!i(a)&&"<"!==a)&&("."!==a&&","!==a&&":"!==a&&";"!==a&&'"'!==a&&"'"!==a&&")"!==a&&"]"!==a||(g=e.charAt(l+1))&&!i(g))&&("("!==a&&"["!==a||k++,")"!==a&&"]"!==a||!(--k<0));)A+=a,l++;if(A){if(s=o+=A,"mailto:"===u){if(-1===(h=A.indexOf("@"))||h===d-1)return;s=s.substr("mailto:".length)}return!!n||(m=this.enterLink(),s=this.tokenizeInline(s,t.now()),m(),t(o)({type:"link",title:null,url:r(o,{nonTerminated:!1}),children:s}))}}}}},305:function(t,e,n){"use strict";t.exports=function(t,e){var n,i=r.length,o=-1,f=-1;if(!this.options.gfm)return-1;for(;++o<i;)-1!==(n=t.indexOf(r[o],e))&&(n<f||-1===f)&&(f=n);return f};var r=["https://","http://","mailto:"]},306:function(t,e,n){"use strict";var r=n(71),i=n(75),o=n(74).tag;t.exports=s,s.locator=i;var f=/^<a /i,c=/^<\/a>/i;function s(t,e,n){var i,s,a=e.length;if(!("<"!==e.charAt(0)||a<3)&&(i=e.charAt(1),(r(i)||"?"===i||"!"===i||"/"===i)&&(s=e.match(o))))return!!n||(s=s[0],!this.inLink&&f.test(s)?this.inLink=!0:this.inLink&&c.test(s)&&(this.inLink=!1),t(s)({type:"html",value:s}))}},307:function(t,e,n){"use strict";var r=n(8),i=n(76);t.exports=s,s.locator=i;var o={}.hasOwnProperty,f={'"':'"',"'":"'"},c={};function s(t,e,n){var i,s,a,l,h,u,p,d,A,k,g,m,v,x,b,y,w,z,O,L="",I=0,B=e.charAt(0),T=this.options.pedantic,C=this.options.commonmark,j=this.options.gfm;if("!"===B&&(A=!0,L=B,B=e.charAt(++I)),"["===B&&(A||!this.inLink)){for(L+=B,b="",I++,m=e.length,x=0,(w=t.now()).column+=I,w.offset+=I;I<m;){if(u=B=e.charAt(I),"`"===B){for(s=1;"`"===e.charAt(I+1);)u+=B,I++,s++;a?s>=a&&(a=0):a=s}else if("\\"===B)I++,u+=e.charAt(I);else if(a&&!j||"["!==B){if((!a||j)&&"]"===B){if(!x){if(!T)for(;I<m&&(B=e.charAt(I+1),r(B));)u+=B,I++;if("("!==e.charAt(I+1))return;u+="(",i=!0,I++;break}x--}}else x++;b+=u,u="",I++}if(i){for(k=b,L+=b+u,I++;I<m&&(B=e.charAt(I),r(B));)L+=B,I++;if(B=e.charAt(I),d=C?c:f,b="",l=L,"<"===B){for(I++,l+="<";I<m&&">"!==(B=e.charAt(I));){if(C&&"\n"===B)return;b+=B,I++}if(">"!==e.charAt(I))return;L+="<"+b+">",y=b,I++}else{for(B=null,u="";I<m&&(B=e.charAt(I),!u||!o.call(d,B));){if(r(B)){if(!T)break;u+=B}else{if("("===B)x++;else if(")"===B){if(0===x)break;x--}b+=u,u="","\\"===B&&(b+="\\",B=e.charAt(++I)),b+=B}I++}y=b,I=(L+=b).length}for(b="";I<m&&(B=e.charAt(I),r(B));)b+=B,I++;if(B=e.charAt(I),L+=b,b&&o.call(d,B))if(I++,L+=B,b="",g=d[B],h=L,C){for(;I<m&&(B=e.charAt(I))!==g;)"\\"===B&&(b+="\\",B=e.charAt(++I)),I++,b+=B;if((B=e.charAt(I))!==g)return;for(v=b,L+=b+B,I++;I<m&&(B=e.charAt(I),r(B));)L+=B,I++}else for(u="";I<m;){if((B=e.charAt(I))===g)p&&(b+=g+u,u=""),p=!0;else if(p){if(")"===B){L+=b+g+u,v=b;break}r(B)?u+=B:(b+=g+u+B,u="",p=!1)}else b+=B;I++}if(")"===e.charAt(I))return!!n||(L+=")",y=this.decode.raw(this.unescape(y),t(l).test().end,{nonTerminated:!1}),v&&(h=t(h).test().end,v=this.decode.raw(this.unescape(v),h)),O={type:A?"image":"link",title:v||null,url:y},A?O.alt=this.decode.raw(this.unescape(k),w)||null:(z=this.enterLink(),O.children=this.tokenizeInline(k,w),z()),t(L)(O))}}}c['"']='"',c["'"]="'",c["("]=")"},308:function(t,e,n){"use strict";var r=n(8),i=n(76),o=n(44);t.exports=f,f.locator=i;function f(t,e,n){var i,f,c,s,a,l,h,u,p=e.charAt(0),d=0,A=e.length,k="",g="",m="link",v="shortcut";if("!"===p&&(m="image",g=p,p=e.charAt(++d)),"["===p){if(d++,g+=p,l="",this.options.footnotes&&"^"===e.charAt(d)){if("image"===m)return;g+="^",d++,m="footnote"}for(u=0;d<A;){if("["===(p=e.charAt(d)))h=!0,u++;else if("]"===p){if(!u)break;u--}"\\"===p&&(l+="\\",p=e.charAt(++d)),l+=p,d++}if(k=l,i=l,"]"===(p=e.charAt(d))){for(d++,k+=p,l="";d<A&&(p=e.charAt(d),r(p));)l+=p,d++;if(p=e.charAt(d),"footnote"!==m&&"["===p){for(f="",l+=p,d++;d<A&&"["!==(p=e.charAt(d))&&"]"!==p;)"\\"===p&&(f+="\\",p=e.charAt(++d)),f+=p,d++;"]"===(p=e.charAt(d))?(v=f?"full":"collapsed",l+=f+p,d++):f="",k+=l,l=""}else{if(!i)return;f=i}if("full"===v||!h)return k=g+k,"link"===m&&this.inLink?null:!!n||("footnote"===m&&-1!==i.indexOf(" ")?t(k)({type:"footnote",children:this.tokenizeInline(i,t.now())}):((c=t.now()).column+=g.length,c.offset+=g.length,s={type:m+"Reference",identifier:o(f="full"===v?f:i)},"link"!==m&&"image"!==m||(s.referenceType=v),"link"===m?(a=this.enterLink(),s.children=this.tokenizeInline(i,c),a()):"image"===m&&(s.alt=this.decode.raw(this.unescape(i),c)||null),t(k)(s)))}}}},309:function(t,e,n){"use strict";var r=n(14),i=n(8),o=n(310);t.exports=f,f.locator=o;function f(t,e,n){var o,f,c,s,a,l,h,u=0,p=e.charAt(u);if(("*"===p||"_"===p)&&e.charAt(++u)===p&&(f=this.options.pedantic,a=(c=p)+c,l=e.length,u++,s="",p="",!f||!i(e.charAt(u))))for(;u<l;){if(h=p,(p=e.charAt(u))===c&&e.charAt(u+1)===c&&(!f||!i(h))&&(p=e.charAt(u+2))!==c){if(!r(s))return;return!!n||((o=t.now()).column+=2,o.offset+=2,t(a+s+a)({type:"strong",children:this.tokenizeInline(s,o)}))}f||"\\"!==p||(s+=p,p=e.charAt(++u)),s+=p,u++}}},310:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("**",e),r=t.indexOf("__",e);if(-1===r)return n;if(-1===n)return r;return r<n?r:n}},311:function(t,e,n){"use strict";var r=n(14),i=n(312),o=n(8),f=n(313);t.exports=c,c.locator=f;function c(t,e,n){var f,c,s,a,l,h,u,p=0,d=e.charAt(p);if(("*"===d||"_"===d)&&(c=this.options.pedantic,l=d,s=d,h=e.length,p++,a="",d="",!c||!o(e.charAt(p))))for(;p<h;){if(u=d,(d=e.charAt(p))===s&&(!c||!o(u))){if((d=e.charAt(++p))!==s){if(!r(a)||u===s)return;if(!c&&"_"===s&&i(d)){a+=s;continue}return!!n||((f=t.now()).column++,f.offset++,t(l+a+s)({type:"emphasis",children:this.tokenizeInline(a,f)}))}a+=s}c||"\\"!==d||(a+=d,d=e.charAt(++p)),a+=d,p++}}},313:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("*",e),r=t.indexOf("_",e);if(-1===r)return n;if(-1===n)return r;return r<n?r:n}},314:function(t,e,n){"use strict";var r=n(8),i=n(315);t.exports=o,o.locator=i;function o(t,e,n){var i,o,f,c="",s="",a="",l="";if(this.options.gfm&&"~"===e.charAt(0)&&"~"===e.charAt(1)&&!r(e.charAt(2)))for(i=1,o=e.length,(f=t.now()).column+=2,f.offset+=2;++i<o;){if("~"===(c=e.charAt(i))&&"~"===s&&(!a||!r(a)))return!!n||t("~~"+l+"~~")({type:"delete",children:this.tokenizeInline(l,f)});l+=s,a=s,s=c}}},315:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("~~",e)}},316:function(t,e,n){"use strict";var r=n(8),i=n(317);t.exports=o,o.locator=i;function o(t,e,n){for(var i,o,f,c,s,a,l,h,u=e.length,p=0,d="",A="";p<u&&"`"===e.charAt(p);)d+="`",p++;if(d){for(s=d,c=p,d="",h=e.charAt(p),f=0;p<u;){if(a=h,h=e.charAt(p+1),"`"===a?(f++,A+=a):(f=0,d+=a),f&&"`"!==h){if(f===c){s+=d+A,l=!0;break}d+=A,A=""}p++}if(!l){if(c%2!==0)return;d=""}if(n)return!0;for(i="",o="",u=d.length,p=-1;++p<u;)a=d.charAt(p),r(a)?o+=a:(o&&(i&&(i+=o),o=""),i+=a);return t(s)({type:"inlineCode",value:i})}}},317:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("`",e)}},318:function(t,e,n){"use strict";var r=n(319);t.exports=i,i.locator=r;function i(t,e,n){for(var r,i=e.length,o=-1,f="";++o<i;){if("\n"===(r=e.charAt(o))){if(o<2)return;return!!n||t(f+=r)({type:"break"})}if(" "!==r)return;f+=r}}},319:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("\n",e);for(;n>e&&" "===t.charAt(n-1);)n--;return n}},320:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,f,c,s,a,l,h,u;if(n)return!0;r=this.inlineMethods,f=r.length,i=this.inlineTokenizers,o=-1,h=e.length;for(;++o<f;)"text"!==(l=r[o])&&i[l]&&((a=i[l].locator)||t.file.fail("Missing locator: `"+l+"`"),-1!==(s=a.call(this,e,1))&&s<h&&(h=s));c=e.slice(0,h),u=t.now(),this.decode(c,u,(function(e,n,r){t(r||e)({type:"text",value:e})}))}},43:function(t,e,n){"use strict";t.exports=function(t,e,n,r){var i,o,f,c,s,a,l=["pedantic","commonmark"],h=l.length,u=t.length,p=-1;for(;++p<u;){for(i=t[p],o=i[1]||{},f=i[0],c=-1,a=!1;++c<h;)if(void 0!==o[s=l[c]]&&o[s]!==n.options[s]){a=!0;break}if(!a&&e[f].apply(n,r))return!0}return!1}},44:function(t,e,n){"use strict";var r=n(297);t.exports=function(t){return r(t).toLowerCase()}},72:function(t,e,n){"use strict";t.exports={position:!0,gfm:!0,commonmark:!1,footnotes:!1,pedantic:!1,blocks:n(281)}},73:function(t,e,n){"use strict";t.exports=function(t){var e,n=0,i=0,o=t.charAt(n),f={};for(;o in r;)i+=e=r[o],e>1&&(i=Math.floor(i/e)*e),f[i]=n,o=t.charAt(++n);return{indent:i,stops:f}};var r={" ":1,"\t":4}},74:function(t,e,n){"use strict";var r="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",i="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";e.openCloseTag=new RegExp("^(?:"+r+"|"+i+")"),e.tag=new RegExp("^(?:"+r+"|"+i+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")},75:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("<",e)}},76:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("[",e),r=t.indexOf("![",e);if(-1===r)return n;return n<r?n:r}}}]);
//# sourceMappingURL=npm.remark-parse.1c7872df.chunk.js.map