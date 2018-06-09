!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=26)}([function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty;function r(e,t){return i.call(e,t)}function a(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function o(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var s=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,l=new RegExp(s.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),u=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,c=n(15);var d=/[&<>"]/,p=/[&<>"]/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function g(e){return h[e]}var m=/[.?*+^$[\]\\(){}|-]/g;var f=n(1);t.lib={},t.lib.mdurl=n(17),t.lib.ucmicro=n(49),t.assign=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object");Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e},t.isString=function(e){return"[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},t.has=r,t.unescapeMd=function(e){return e.indexOf("\\")<0?e:e.replace(s,"$1")},t.unescapeAll=function(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(l,function(e,t,n){return t||function(e,t){var n=0;return r(c,t)?c[t]:35===t.charCodeAt(0)&&u.test(t)&&a(n="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10))?o(n):e}(e,n)})},t.isValidEntityCode=a,t.fromCodePoint=o,t.escapeHtml=function(e){return d.test(e)?e.replace(p,g):e},t.arrayReplaceAt=function(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))},t.isSpace=function(e){switch(e){case 9:case 32:return!0}return!1},t.isWhiteSpace=function(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},t.isMdAsciiPunct=function(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},t.isPunctChar=function(e){return f.test(e)},t.escapeRE=function(e){return e.replace(m,"\\$&")},t.normalizeReference=function(e){return e.trim().replace(/\s+/g," ").toUpperCase()}},function(e,t){e.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E49\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},function(e,t,n){"use strict";function i(){this.__rules__=[],this.__cache__=null}i.prototype.__find__=function(e){for(var t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},i.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},i.prototype.at=function(e,t,n){var i=this.__find__(e),r=n||{};if(-1===i)throw new Error("Parser rule not found: "+e);this.__rules__[i].fn=t,this.__rules__[i].alt=r.alt||[],this.__cache__=null},i.prototype.before=function(e,t,n,i){var r=this.__find__(e),a=i||{};if(-1===r)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},i.prototype.after=function(e,t,n,i){var r=this.__find__(e),a=i||{};if(-1===r)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},i.prototype.push=function(e,t,n){var i=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null},i.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);var n=[];return e.forEach(function(e){var i=this.__find__(e);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[i].enabled=!0,n.push(e)},this),this.__cache__=null,n},i.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},i.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);var n=[];return e.forEach(function(e){var i=this.__find__(e);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[i].enabled=!1,n.push(e)},this),this.__cache__=null,n},i.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},e.exports=i},function(e,t,n){"use strict";function i(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}i.prototype.attrIndex=function(e){var t,n,i;if(!this.attrs)return-1;for(n=0,i=(t=this.attrs).length;n<i;n++)if(t[n][0]===e)return n;return-1},i.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},i.prototype.attrSet=function(e,t){var n=this.attrIndex(e),i=[e,t];n<0?this.attrPush(i):this.attrs[n]=i},i.prototype.attrGet=function(e){var t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},i.prototype.attrJoin=function(e,t){var n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t},e.exports=i},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(a).concat([r]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){e.exports=n.p+"bd6d7f73eae8942c50f7e04da75eae57.eot"},function(e,t,n){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(35),a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},d=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(f(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(f(n.parts[r]));a[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function f(e){var t,n,i=document.querySelector("style["+p+'~="'+e.id+'"]');if(i){if(u)return c;i.parentNode.removeChild(i)}if(h){var r=l++;i=s||(s=m()),t=v.bind(null,i,r,!1),n=v.bind(null,i,r,!0)}else i=m(),t=function(e,t){var n=t.css,i=t.media,r=t.sourceMap;i&&e.setAttribute("media",i);d.ssrId&&e.setAttribute(p,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}e.exports=function(e,t,n,i){u=n,d=i||{};var o=r(e,t);return g(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i];(l=a[s.id]).refs--,n.push(l)}t?g(o=r(e,t)):o=[];for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete a[l.id]}}}};var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function v(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e,t,n,i,r,a){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var u,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=i),u){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,u):[u]}return{esModule:o,exports:s,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=g(n(9)),r=n(36),a=n(39),o=g(n(40)),s=g(n(41)),l=g(n(14)),u=g(n(42)),c=g(n(298)),d=g(n(303)),p=g(n(304)),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(308));function g(e){return e&&e.__esModule?e:{default:e}}n(309),n(314),t.default={name:"md-editor",props:["height"],data:function(){return{editor:null,editSession:null,undoManager:null,toolbar:[],markdown:"",content:"",lines:0,words:0,slugCache:{},tableOfContent:[],isSideBySide:!0,isReadmode:!1,showToc:!1,showHtmlCode:!1,htmlCode:"",orderNum:1,lastFocusRow:0}},created:function(){var e=this;this.$nextTick(function(){e.createToolbar(),e.createEditor()})},methods:{createToolbar:function(){this.toolbar=s.default},createEditor:function(){this.editor=h.edit(this.$refs.editor),this.editSession=this.editor.getSession(),this.selection=this.editSession.getSelection(),this.undoManager=this.editSession.getUndoManager(),this.editor.setTheme("ace/theme/chrome"),this.editor.$blockScrolling=1/0,this.editor.setShowPrintMargin(!1),this.editor.setShowFoldWidgets(!1),console.log(this.editor),this.editSession.setMode("ace/mode/markdown"),this.editSession.setUseWrapMode(!0),this.markdownAnchor(),this.markdownInline(),this.editorEvent(),this.editorKeybindings(),this.editSession.setValue(o.default),this.editor.focus()},editorEvent:function(){var e=this;this.editSession.on("change",(0,a.debounce)(function(){var t=e.editSession.getValue();e.slugCache={},e.tableOfContent=[],e.lines=e.editSession.getLength(),e.words=t.replace(/\s*/g,"").length,i.default.patch(e.$refs.preview,u.default.renderToIncrementalDOM(t)),e.$emit("change",t)},300));var t=!1,n=!1,r=document.querySelector(".ace_scroller").clientHeight;this.editSession.on("changeScrollTop",function(i){if(t)t=!1;else{n=!0;var a=e.editor.renderer.lineHeight,o=e.editSession.getScreenLength()*a-r,s=parseFloat(i)/o,l=(e.$refs.preview.scrollHeight-e.$refs.preview.clientHeight)*s;e.$refs.preview.scrollTop=l}}),this.$refs.preview.addEventListener("scroll",function(){if(n)n=!1;else{t=!0;var i=e.$refs.preview.scrollHeight-e.$refs.preview.clientHeight,a=parseFloat(e.$refs.preview.scrollTop)/i,o=e.editor.renderer.lineHeight,s=(e.editSession.getScreenLength()*o-r)*a;s>0&&e.editSession.setScrollTop(s)}})},editorKeybindings:function(){for(var e in l.default)this[e]&&"function"==typeof this[e]?this.editor.commands.addCommand({name:e,bindKey:l.default[e],exec:this[e]}):console.error(e,"is not found")},markdownAnchor:function(){var e=this,t={h1:1,h2:2,h3:3,h4:4,h5:5,h6:6};u.default.use(c.default,{level:1,permalink:!1,permalinkBefore:!1,permalinkSymbol:"#",slugify:function(t){var n=(0,r.slugify)(t,{lowercase:!0,separator:"-",ignore:[]});return e.slugCache[n]?n=n+"-"+e.slugCache[n]++:e.slugCache[n]=1,n},callback:function(n,i){var r=i.slug,a=i.title,o=e.tableOfContent.length,s=t[n.tag];if(o>=1&&e.tableOfContent[o-1].level<s){!function t(n,i,r){var a=r.numbers[0]-1,o=void 0,s=void 0,l=void 0,u=void 0,c=void 0;if(5===i)return o=r.numbers[1],s=r.numbers[2],l=r.numbers[3],u=r.numbers[4],c=e.tableOfContent[a].children[o-1].children[s-1].children[l-1].children[u-1].children.length,r.numbers.push(c+1),void e.tableOfContent[a].children[o-1].children[s-1].children[l-1].children[u-1].children.push(r);switch(i){case 1:if(!((o=e.tableOfContent[a].children.length)>=1&&e.tableOfContent[a].children[o-1].level<n))return r.numbers.push(o+1),void e.tableOfContent[a].children.push(r);r.numbers.push(o),t(n,2,r);break;case 2:if(o=r.numbers[1],!((s=e.tableOfContent[a].children[o-1].children.length)>=1&&e.tableOfContent[a].children[o-1].children[s-1].level<n))return r.numbers.push(s+1),void e.tableOfContent[a].children[o-1].children.push(r);r.numbers.push(s),t(n,3,r);break;case 3:if(o=r.numbers[1],s=r.numbers[2],!((l=e.tableOfContent[a].children[o-1].children[s-1].children.length)>=1&&e.tableOfContent[a].children[o-1].children[s-1].children[l-1].level<n))return r.numbers.push(l+1),void e.tableOfContent[a].children[o-1].children[s-1].children.push(r);r.numbers.push(l),t(n,4,r);break;case 4:if(o=r.numbers[1],s=r.numbers[2],l=r.numbers[3],!((u=e.tableOfContent[a].children[o-1].children[s-1].children[l-1].children.length)>=1&&e.tableOfContent[a].children[o-1].children[s-1].children[l-1].children[u-1].level<n))return r.numbers.push(u+1),void e.tableOfContent[a].children[o-1].children[s-1].children[l-1].children.push(r);r.numbers.push(u),t(n,5,r)}}(s,1,{id:r,title:a,level:s,numbers:[o],children:[]})}else e.tableOfContent.push({id:r,title:a,level:s,numbers:[o+1],children:[]})}})},markdownInline:function(){u.default.use(d.default,"url_new_win","link_open",function(e,t){e[t].attrPush(["target","_blank"])})},_resize:function(){var e=this;setTimeout(function(){e.editor.resize(!0)},1)},_moveCursor:function(e,t){this.editor.moveCursorTo(e,t),this.editor.focus()},_toggleClass:function(e,t){t?this.editor.unsetStyle(e):this.editor.setStyle(e)},executeAction:function(e){if(""===e||!this[e]||"function"!=typeof this[e])throw Error("command does not exist");(this.isReadmode||this.showHtmlCode)&&["toggleSideBySide","toggleReadmode","toggleHtmlCode"].indexOf(e)<0||(this.showHtmlCode&&"toggleHtmlCode"!==e&&this.toggleHtmlCode(),this[e]())},toggleReadmode:function(){this.isSideBySide&&(this.editor.unsetStyle("is-side"),this.isSideBySide=!1,this._resize()),this._toggleClass("is-readmode",this.isReadmode),this.isReadmode=!this.isReadmode},toggleSideBySide:function(){this.isReadmode&&(this.editor.unsetStyle("is-readmode"),this.isReadmode=!1),this._toggleClass("is-side",this.isSideBySide),this.isSideBySide=!this.isSideBySide,this._resize()},toggleTocPreview:function(){this.showToc=!this.showToc},toggleBold:function(){if(!this.selection.isEmpty()){var e=this.selection.getRange(),t=this.editSession.getTextRange(e);return this.editSession.replace(e,"**"+t+"**"),void this.selection.clearSelection()}var n=this.selection.getCursor(),i=n.row,r=n.column;this.editor.insert("****"),this._moveCursor(i,r+2)},toggleItalic:function(){var e=this.editor.getSelection();if(e.isEmpty()){var t=e.getCursor();this.editor.insert("**"),this._moveCursor(t.row,t.column+1)}else{var n=e.getRange(),i=this.editSession.getTextRange(n);this.editSession.replace(n,"*"+i+"*")}},toggleStrikeThrough:function(){var e=this.editor.getSelection();if(e.isEmpty()){var t=e.getCursor();this.editor.insert("~~~~"),this._moveCursor(t.row,t.column+2)}else{var n=e.getRange(),i=this.editSession.getTextRange(n);this.editSession.replace(n,"~~"+i+"~~")}},toggleMarked:function(){var e=this.editor.getSelection();if(e.isEmpty()){var t=e.getCursor();this.editor.insert("===="),this._moveCursor(t.row,t.column+2)}else{var n=e.getRange(),i=this.editSession.getTextRange(n);this.editSession.replace(n,"=="+i+"==")}},toggleUnderline:function(){var e=this.editor.getSelection();if(e.isEmpty()){var t=e.getCursor();this.editor.insert("++++"),this._moveCursor(t.row,t.column+2)}else{var n=e.getRange(),i=this.editSession.getTextRange(n);this.editSession.replace(n,"++"+i+"++")}},toggleSuperscript:function(){var e=this.editor.getSelection();if(e.isEmpty()){var t=e.getCursor();this.editor.insert("^^"),this._moveCursor(t.row,t.column+1)}else{var n=e.getRange(),i=this.editSession.getTextRange(n);this.editSession.replace(n,"^"+i+"^")}},toggleSubscript:function(){var e=this.editor.getSelection();if(e.isEmpty()){var t=e.getCursor();this.editor.insert("~~"),this._moveCursor(t.row,t.column+1)}else{var n=e.getRange(),i=this.editSession.getTextRange(n);this.editSession.replace(n,"~"+i+"~")}},toggleHeading:function(){var e=this.editor.getSelection().getCursor().row,t=this.editSession.getLine(e),n=t.length,i=t.search(/[^#]/),r={start:{row:e,column:0},end:{row:e,column:n}};if(!(i>=6)){var a=i<=0?"# ":"#";this.editSession.replace(r,a+t),this.editor.focus()}},toggleBlockquote:function(){var e=this.editor.getSelection().getCursor().row,t=this.editSession.getLine(e),n={start:{row:e,column:0},end:{row:e,column:t.length}};t.search(/[^>]/)<=0?this.editSession.replace(n,"> "+t):this.editSession.replace(n,t.replace(/^(\s*)>\s+/,"")),this.editor.focus()},toggleUnorderedList:function(){var e=this.editor.getSelection().getCursor().row,t=this.editSession.getLine(e),n={start:{row:e,column:0},end:{row:e,column:t.length}};t.search(/[^\*]/)<=0?this.editSession.replace(n,"* "+t):this.editSession.replace(n,t.replace(/^(\s*)\*\s+/,"")),this.editor.focus()},toggleOrderedList:function(){var e=this.editor.getSelection().getCursor().row,t=this.editSession.getLine(e),n={start:{row:e,column:0},end:{row:e,column:t.length}};t.search(/[^\d{1}]/)<=0?(this.lastFocusRow+1===e?(this.orderNum+=1,this.lastFocusRow+=1):(this.lastFocusRow=e,this.orderNum=1),this.editSession.replace(n,this.orderNum+". "+t)):(this.lastFocusRow=e,this.orderNum=1,this.editSession.replace(n,t.replace(/^(\s*)\d{1}\.\s+/,""))),this.editor.focus()},insertHorizontalRule:function(){var e=this.selection;if(!e.isEmpty()){var t=e.getRange();return this.editSession.replace(t,"\n\n----------\n\n"),e.clearSelection(),void this.editor.focus()}this.editor.insert("\n\n----------\n\n"),this.editor.focus()},insertLink:function(){var e=this.editor.getSelection();if(!e.isEmpty()){var t=e.getRange();this.editSession.replace(t,"[](http://)");var n=e.getSelectionAnchor(),i=n.row,r=n.column;return e.clearSelection(),void this._moveCursor(i,r-10)}this.editor.insert("[](http://)");var a=e.getSelectionAnchor(),o=a.row,s=a.column;this._moveCursor(o,s-10)},insertImage:function(){var e=this.selection;if(!e.isEmpty()){var t=e.getRange();this.editSession.replace(t,"![](http://)");var n=e.getSelectionAnchor(),i=n.row,r=n.column;return e.clearSelection(),void this._moveCursor(i,r-10)}this.editor.insert("![](http://)");var a=e.getSelectionAnchor(),o=a.row,s=a.column;this._moveCursor(o,s-10)},insertCode:function(){var e=this.selection;if(!e.isEmpty()){var t=e.getRange();this.editSession.replace(t,"\n```\n```\n");var n=e.getSelectionAnchor(),i=n.row,r=n.column;return e.clearSelection(),void this._moveCursor(i-2,r+3)}this.editor.insert("\n```\n```\n");var a=e.getSelectionAnchor(),o=a.row,s=a.column;this._moveCursor(o-2,s+3)},insertTable:function(){var e="\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n",t=this.editor.getSelection();if(!t.isEmpty()){var n=t.getRange();return this.editSession.replace(n,e),t.clearSelection(),void this.editor.focus()}this.editor.insert(e),this.editor.focus()},redo:function(){this.undoManager.hasRedo()&&this.undoManager.redo()},undo:function(){this.undoManager.hasUndo()&&this.undoManager.undo()},clear:function(){this.editSession.setValue(""),this.undoManager.reset(),this.editor.focus()},downloadFile:function(){var e=document.createElement("a"),t=new Blob([this.editSession.getValue()]);e.download="markdown.md",e.href=URL.createObjectURL(t),e.click(),URL.revokeObjectURL(t)},toggleHtmlCode:function(){this.showHtmlCode?this.showHtmlCode=!1:(this.htmlCode=this.$refs.preview.innerHTML,this.showHtmlCode=!0)}},components:{Toc:p.default}}},function(e,t,n){"use strict";
/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.