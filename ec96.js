window.i18nLocale = "en-US";
/*********/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).i18next=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(n){return(t="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(n)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?s(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,p(t))}},h=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.init(t,n)}return a(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||g,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){return r&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,r({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),d=function(){function e(){o(this,e),this.observers={}}return a(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)}),this}},{key:"off",value:function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach(function(){if(t){var r=n.observers[e].indexOf(t);r>-1&&n.observers[e].splice(r,1)}else delete n.observers[e]})}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,n)});this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(n))})}}]),e}();function v(){var e,t,n=new Promise(function(n,r){e=n,t=r});return n.resolve=e,n.reject=t,n}function y(e){return null==e?"":""+e}function m(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function o(){return!e||"string"==typeof e}for(var i="string"!=typeof t?[].concat(t):t.split(".");i.length>1;){if(o())return{};var a=r(i.shift());!e[a]&&n&&(e[a]=new n),e=e[a]}return o()?{}:{obj:e,k:r(i.shift())}}function b(e,t,n){var r=m(e,t,Object);r.obj[r.k]=n}function k(e,t){var n=m(e,t),r=n.obj,o=n.k;if(r)return r[o]}function x(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function w(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return S[e]}):e}var O=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return o(this,t),n=u(this,l(t).call(this)),d.call(s(n)),n.data=e||{},n.options=r,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return f(t,d),a(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,i=[e,t];return n&&"string"!=typeof n&&(i=i.concat(n)),n&&"string"==typeof n&&(i=i.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(i=e.split(".")),k(this.data,i)}},{key:"addResource",value:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},i=this.options.keySeparator;void 0===i&&(i=".");var a=[e,t];n&&(a=a.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(r=t,t=(a=e.split("."))[1]),this.addNamespaces(t),b(this.data,a,r),o.silent||this.emit("added",e,t,n,r)}},{key:"addResources",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in n)"string"!=typeof n[o]&&"[object Array]"!==Object.prototype.toString.apply(n[o])||this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,o,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(o=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var u=k(this.data,s)||{};o?function e(t,n,r){for(var o in n)o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof n[o]||n[o]instanceof String?r&&(t[o]=n[o]):e(t[o],n[o],r):t[o]=n[o];return t}(u,n,i):u=r({},u,n),b(this.data,s,u),a.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?r({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(),R={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,o){var i=this;return e.forEach(function(e){i.processors[e]&&(t=i.processors[e].process(t,n,r,o))}),t}},j=function(e){function n(e){var t,r,i,a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,n),t=u(this,l(n).call(this)),d.call(s(t)),r=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat"],i=e,a=s(t),r.forEach(function(e){i[e]&&(a[e]=i[e])}),t.options=c,void 0===t.options.keySeparator&&(t.options.keySeparator="."),t.logger=h.create("translator"),t}return f(n,d),a(n,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var i=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(i[0])>-1)&&(o=i.shift()),e=i.join(r)}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o}}},{key:"translate",value:function(e,n){var o=this;if("object"!==t(n)&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),n||(n={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var i=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=this.extractFromKey(e[e.length-1],n),s=a.key,u=a.namespaces,l=u[u.length-1],c=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(f){var p=n.nsSeparator||this.options.nsSeparator;return l+p+s}return s}var g=this.resolve(e,n),h=g&&g.res,d=g&&g.usedKey||s,v=g&&g.exactUsedKey||s,y=Object.prototype.toString.apply(h),m=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject;if(b&&h&&("string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(y)<0&&("string"!=typeof m||"[object Array]"!==y)){if(!n.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,h,n):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(i){var k="[object Array]"===y,x=k?[]:{},S=k?v:d;for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var O="".concat(S).concat(i).concat(w);x[w]=this.translate(O,r({},n,{joinArrays:!1,ns:u})),x[w]===O&&(x[w]=h[w])}h=x}}else if(b&&"string"==typeof m&&"[object Array]"===y)(h=h.join(m))&&(h=this.extendTranslation(h,e,n));else{var R=!1,j=!1;if(!this.isValidLookup(h)&&void 0!==n.defaultValue){if(R=!0,void 0!==n.count){var L=this.pluralResolver.getSuffix(c,n.count);h=n["defaultValue".concat(L)]}h||(h=n.defaultValue)}this.isValidLookup(h)||(j=!0,h=s);var N=n.defaultValue&&n.defaultValue!==h&&this.options.updateMissing;if(j||R||N){this.logger.log(N?"updateKey":"missingKey",c,l,s,N?n.defaultValue:h);var C=[],E=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&E&&E[0])for(var P=0;P<E.length;P++)C.push(E[P]);else"all"===this.options.saveMissingTo?C=this.languageUtils.toResolveHierarchy(n.lng||this.language):C.push(n.lng||this.language);var F=function(e,t){o.options.missingKeyHandler?o.options.missingKeyHandler(e,l,t,N?n.defaultValue:h,N,n):o.backendConnector&&o.backendConnector.saveMissing&&o.backendConnector.saveMissing(e,l,t,N?n.defaultValue:h,N,n),o.emit("missingKey",e,l,t,h)};if(this.options.saveMissing){var A=void 0!==n.count&&"string"!=typeof n.count;this.options.saveMissingPlurals&&A?C.forEach(function(e){o.pluralResolver.getPluralFormsOfKey(e,s).forEach(function(t){return F([e],t)})}):F(C,s)}}h=this.extendTranslation(h,e,n,g),j&&h===s&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(s)),j&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,o){var i=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(r({},n,{interpolation:r({},this.options.interpolation,n.interpolation)}));var a=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(a=r({},this.options.interpolation.defaultVariables,a)),e=this.interpolator.interpolate(e,a,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,function(){return i.translate.apply(i,arguments)},n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,u="string"==typeof s?[s]:s;return null!=e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=R.handle(u,e,t,n,this)),e}},{key:"resolve",value:function(e){var t,n,r,o,i,a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!a.isValidLookup(t)){var u=a.extractFromKey(e,s),l=u.key;n=l;var c=u.namespaces;a.options.fallbackNS&&(c=c.concat(a.options.fallbackNS));var f=void 0!==s.count&&"string"!=typeof s.count,p=void 0!==s.context&&"string"==typeof s.context&&""!==s.context,g=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);c.forEach(function(e){a.isValidLookup(t)||(i=e,g.forEach(function(n){if(!a.isValidLookup(t)){o=n;var i,u,c=l,g=[c];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(g,l,n,e,s);else f&&(i=a.pluralResolver.getSuffix(n,s.count)),f&&p&&g.push(c+i),p&&g.push(c+="".concat(a.options.contextSeparator).concat(s.context)),f&&g.push(c+=i);for(;u=g.pop();)a.isValidLookup(t)||(r=u,t=a.getResource(n,e,u,s))}}))})}}),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:i}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}}]),n}();function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}var N=function(){function e(t){o(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=h.create("languageUtils")}return a(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map(function(e){return e.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=L(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=L(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=L(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,r=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],i=function(e){e&&(n.isWhitelisted(e)?o.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(e))):"string"==typeof e&&i(this.formatLanguageCode(e)),r.forEach(function(e){o.indexOf(e)<0&&i(n.formatLanguageCode(e))}),o}}]),e}(),C=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],E={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||e>10)&&e%10==0?2:3)}};var P=function(){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.languageUtils=t,this.options=r,this.logger=h.create("pluralResolver"),this.rules=(n={},C.forEach(function(e){e.lngs.forEach(function(t){n[t]={numbers:e.nr,plurals:E[e.fc]}})}),n)}return a(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,r=[],o=this.getRule(e);return o?(o.numbers.forEach(function(o){var i=n.getSuffix(e,o);r.push("".concat(t).concat(i))}),r):r}},{key:"getSuffix",value:function(e,t){var n=this,r=this.getRule(e);if(r){var o=r.noAbs?r.plurals(t):r.plurals(Math.abs(t)),i=r.numbers[o];this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var a=function(){return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_".concat(i.toString()):a():"v2"===this.options.compatibilityJSON?a():this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.logger=h.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return a(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:w,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?x(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?x(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?x(t.nestingPrefix):t.nestingPrefixEscaped||x("$t("),this.nestingSuffix=t.nestingSuffix?x(t.nestingSuffix):t.nestingSuffixEscaped||x(")"),this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,o){var i,a,s,u=this,l=r({},this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},t);function c(e){return e.replace(/\$/g,"$$$$")}var f=function(e){if(e.indexOf(u.formatSeparator)<0)return k(l,e);var t=e.split(u.formatSeparator),r=t.shift().trim(),o=t.join(u.formatSeparator).trim();return u.format(k(l,r),o,n)};this.resetRegExp();var p=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler;for(s=0;i=this.regexpUnescape.exec(e);){if(void 0===(a=f(i[1].trim())))if("function"==typeof p){var g=p(e,i,o);a="string"==typeof g?g:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),a="";else"string"==typeof a||this.useRawValueToEscape||(a=y(a));if(e=e.replace(i[0],c(a)),this.regexpUnescape.lastIndex=0,++s>=this.maxReplaces)break}for(s=0;i=this.regexp.exec(e);){if(void 0===(a=f(i[1].trim())))if("function"==typeof p){var h=p(e,i,o);a="string"==typeof h?h:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),a="";else"string"==typeof a||this.useRawValueToEscape||(a=y(a));if(a=this.escapeValue?c(this.escape(a)):c(a),e=e.replace(i[0],a),this.regexp.lastIndex=0,++s>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,o,i=r({},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});function a(e,t){if(e.indexOf(",")<0)return e;var n=e.split(",");e=n.shift();var o=n.join(",");o=(o=this.interpolate(o,i)).replace(/'/g,'"');try{i=JSON.parse(o),t&&(i=r({},t,i))}catch(t){this.logger.error("failed parsing options string in nesting for key ".concat(e),t)}return e}for(i.applyPostProcessor=!1;n=this.nestingRegexp.exec(e);){if((o=t(a.call(this,n[1].trim(),i),i))&&n[0]===e&&"string"!=typeof o)return o;"string"!=typeof o&&(o=y(o)),o||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),o=""),e=e.replace(n[0],o),this.regexp.lastIndex=0}return e}}]),e}();function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=function(e){function t(e,n,r){var i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o(this,t),i=u(this,l(t).call(this)),d.call(s(i)),i.backend=e,i.store=n,i.languageUtils=r.languageUtils,i.options=a,i.logger=h.create("backendConnector"),i.state={},i.queue=[],i.backend&&i.backend.init&&i.backend.init(r,a.backend,a),i}return f(t,d),a(t,[{key:"queueLoad",value:function(e,t,n,r){var o=this,i=[],a=[],s=[],u=[];return e.forEach(function(e){var r=!0;t.forEach(function(t){var s="".concat(e,"|").concat(t);!n.reload&&o.store.hasResourceBundle(e,t)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?a.indexOf(s)<0&&a.push(s):(o.state[s]=1,r=!1,a.indexOf(s)<0&&a.push(s),i.indexOf(s)<0&&i.push(s),u.indexOf(t)<0&&u.push(t)))}),r||s.push(e)}),(i.length||a.length)&&this.queue.push({pending:a,loaded:{},errors:[],callback:r}),{toLoad:i,pending:a,toLoadLanguages:s,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var r=A(e.split("|"),2),o=r[0],i=r[1];t&&this.emit("failedLoading",o,i,t),n&&this.store.addResourceBundle(o,i,n),this.state[e]=t?-1:2;var a={};this.queue.forEach(function(n){var r,s,u,l,c,f;r=n.loaded,s=i,l=m(r,[o],Object),c=l.obj,f=l.k,c[f]=c[f]||[],u&&(c[f]=c[f].concat(s)),u||c[f].push(s),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach(function(e){a[e]||(a[e]=[]),n.loaded[e].length&&n.loaded[e].forEach(function(t){a[e].indexOf(t)<0&&a[e].push(t)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,a=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,function(s,u){s&&u&&o<5?setTimeout(function(){r.read.call(r,e,t,n,o+1,2*i,a)},i):a(s,u)}):a(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var i=this.queueLoad(e,t,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(function(e){n.loadOne(e)})}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=A(e.split("|"),2),o=r[0],i=r[1];this.read(o,i,"read",null,null,function(r,a){r&&t.logger.warn("".concat(n,"loading namespace ").concat(i," for language ").concat(o," failed"),r),!r&&a&&t.logger.log("".concat(n,"loaded namespace ").concat(i," for language ").concat(o),a),t.loaded(e,r,a)})}},{key:"saveMissing",value:function(e,t,n,o,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(e,t,n,o,null,r({},a,{isUpdate:i})),e&&e[0]&&this.store.addResource(e[0],t,n,o)}}]),t}();function V(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function U(){}return new(function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(o(this,n),e=u(this,l(n).call(this)),d.call(s(e)),e.options=V(t),e.services={},e.logger=h,e.modules={external:[]},r&&!e.isInitialized&&!t.isClone){if(!e.options.initImmediate)return e.init(t,r),u(e,s(e));setTimeout(function(){e.init(t,r)},0)}return e}return f(n,d),a(n,[{key:"init",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;function i(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof n&&(o=n,n={}),this.options=r({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var n={};if("object"===t(e[1])&&(n=e[1]),"string"==typeof e[1]&&(n.defaultValue=e[1]),"string"==typeof e[2]&&(n.tDescription=e[2]),"object"===t(e[2])||"object"===t(e[3])){var r=e[3]||e[2];Object.keys(r).forEach(function(e){n[e]=r[e]})}return n},interpolation:{escapeValue:!0,format:function(e,t,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}},this.options,V(n)),this.format=this.options.interpolation.format,o||(o=U),!this.options.isClone){this.modules.logger?h.init(i(this.modules.logger),this.options):h.init(null,this.options);var a=new N(this.options);this.store=new O(this.options.resources,this.options);var s=this.services;s.logger=h,s.resourceStore=this.store,s.languageUtils=a,s.pluralResolver=new P(a,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),s.interpolator=new F(this.options),s.backendConnector=new T(i(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))}),this.modules.languageDetector&&(s.languageDetector=i(this.modules.languageDetector),s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=i(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new j(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}});var u=v(),l=function(){e.changeLanguage(e.options.lng,function(t,n){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(n),o(t,n)})};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;if(!this.options.resources||this.options.partialBundledLanguages){if(this.language&&"cimode"===this.language.toLowerCase())return t();var n=[],r=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach(function(e){n.indexOf(e)<0&&n.push(e)})};if(this.language)r(this.language);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return r(e)});this.options.preload&&this.options.preload.forEach(function(e){return r(e)}),this.services.backendConnector.load(n,this.options.ns,t)}else t(null)}},{key:"reloadResources",value:function(e,t,n){var r=v();return e||(e=this.languages),t||(t=this.options.ns),n||(n=U),this.services.backendConnector.reload(e,t,function(e){r.resolve(),n(e)}),r}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&R.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,r=v();this.emit("languageChanging",e);var o=function(e){e&&(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources(function(o){!function(e,o){n.translator.changeLanguage(o),o&&(n.emit("languageChanged",o),n.logger.log("languageChanged",o)),r.resolve(function(){return n.t.apply(n,arguments)}),t&&t(e,function(){return n.t.apply(n,arguments)})}(o,e)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),r}},{key:"getFixedT",value:function(e,n){var o=this,i=function e(n,i){var a;if("object"!==t(i)){for(var s=arguments.length,u=new Array(s>2?s-2:0),l=2;l<s;l++)u[l-2]=arguments[l];a=o.options.overloadTranslationOptionHandler([n,i].concat(u))}else a=r({},i);return a.lng=a.lng||e.lng,a.lngs=a.lngs||e.lngs,a.ns=a.ns||e.ns,o.t(n,a)};return"string"==typeof e?i.lng=e:i.lngs=e,i.ns=n,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"loadNamespaces",value:function(e,t){var n=this,r=v();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),this.loadResources(function(e){r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=v();"string"==typeof e&&(e=[e]);var r=this.options.preload||[],o=e.filter(function(e){return r.indexOf(e)<0});return o.length?(this.options.preload=r.concat(o),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){return new n(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,i=r({},this.options,t,{isClone:!0}),a=new n(i);return["store","services","language"].forEach(function(t){a[t]=e[t]}),a.translator=new j(a.services,a.options),a.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.emit.apply(a,[e].concat(n))}),a.init(i,o),a.translator.options=a.options,a}}]),n}())});

/*********/
(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (typeof exports !== 'undefined') {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {
        this.jsbn = {
          BigInteger: BigInteger,
          SecureRandom: SecureRandom
        };
    }

}).call(this);

/*********/
(function (factory) {
    "use strict";

    var root = (typeof self === "object" && self.self === self && self) ||
                (typeof global === "object" && global.global === global && global);


    if (typeof exports !== "undefined") {
        var BigInteger = require("jsbn").BigInteger;
        factory(root, exports, BigInteger);
    } else {
        var BigInt = root.BigInteger ? root.BigInteger : root.jsbn.BigInteger;
        root.Money = factory(root, {}, BigInt);
    }
}(function (root, Money, BigInteger) {
    "use strict";

    var Currency = function (code) {
            this.code = code;
        },

        separateThousands = function (inStr, withStr) {
            var sign = "",
                src = inStr,
                ret = "",
                appendix;

            if (inStr[0] === "-") {
                sign = "-";
                src = src.substr(1);
            }


            while (src.length > 0) {
                if (ret.length > 0) {
                    ret = withStr + ret;
                }

                if (src.length <= 3) {
                    ret = src + ret;
                    break;
                }

                appendix = src.substr(src.length - 3, 3);
                ret = appendix + ret;
                src = src.substr(0, src.length - 3);
            }

            return sign + ret;
        },

        integerValue = function (amount) {
            return (/^(\-?\d+)\.\d\d$/).exec(amount)[1];
        },

        isString = function (obj) {
            return Object.prototype.toString.call(obj) === "[object String]";
        },

        round = function (amount) {
            var fraction = parseInt(amount.substr(-2), 10),
                wholeAmount = integerValue(amount) + ".00";

            return (
                fraction < 50 ?
                    wholeAmount :
                    Money.add(wholeAmount, "1.00")
            );
        };

    Currency.prototype.format = function (amount) {
        switch (this.code) {
        case "JPY":
            return separateThousands(integerValue(amount), ",");

        case "EUR":
        case "GBP":
            return separateThousands(integerValue(amount), ".") + "," + amount.substr(-2);

        case "CHF":
        case "USD":
            return separateThousands(integerValue(amount), ",") + "." + amount.substr(-2);

        case "SEK":
        case "LTL":
        case "PLN":
        case "SKK":
        case "UAH":
            return separateThousands(integerValue(amount), " ") + "," + amount.substr(-2);

        default:
            return amount;
        }
    };

    Money.amountToCents = function (amount) {
        return amount.replace(".", "");
    };

    Money.centsToAmount = function (cents) {
        var sign,
            abs;

        if (!isString(cents)) {
            return undefined;
        }

        sign = (cents[0] === "-" ? "-" : "");
        abs = (sign === "-" ? cents.substr(1) : cents);

        while (abs.length < 3) {
            abs = ["0", abs].join("");
        }

        return sign + abs.substr(0, abs.length - 2) + "." + abs.substr(-2);
    };

    Money.floatToAmount = function (f) {
        return ("" + (Math.round(f * 100.0) / 100.0))
            .replace(/^-(\d+)$/, "-$1.00")              //-xx
            .replace(/^(\d+)$/, "$1.00")                //xx
            .replace(/^-(\d+)\.(\d)$/, "-$1.$20")       //-xx.xx
            .replace(/^(\d+)\.(\d)$/, "$1.$20");        //xx.xx
    };

    Money.integralPart = function (amount) {
        return integerValue(amount);
    };

    Money.format = function (currency, amount) {
        return new Currency(currency).format(amount);
    };

    Money.add = function (a, b) {
        return Money.centsToAmount(
            new BigInteger(
                Money.amountToCents(a)
            ).add(
                new BigInteger(Money.amountToCents(b))
            ).toString()
        );
    };

    Money.subtract = function (a, b) {
        return Money.centsToAmount(
            new BigInteger(
                Money.amountToCents(a)
            ).subtract(
                new BigInteger(Money.amountToCents(b))
            ).toString()
        );
    };

    Money.mul = function (a, b) {
        var hundredthsOfCents = new BigInteger(
                Money.amountToCents(a)
            ).multiply(
                new BigInteger(Money.amountToCents(b))
            ),

            remainder = parseInt(hundredthsOfCents.toString().substr(-2), 10);

        return Money.centsToAmount(
            hundredthsOfCents.divide(
                new BigInteger("100")
            ).add(
                new BigInteger(remainder >= 50 ? "1" : "0")
            ).toString()
        );
    };

    Money.div = function (a, b) {
        var hundredthsOfCents = new BigInteger(
                Money.amountToCents(a)
            ).multiply(
                new BigInteger("10000")
            ).divide(
                new BigInteger(Money.amountToCents(b))
            ),

            remainder = parseInt(hundredthsOfCents.toString().substr(-2), 10);

        return Money.centsToAmount(
            hundredthsOfCents.divide(
                new BigInteger("100")
            ).add(
                new BigInteger(remainder >= 50 ? "1" : "0")
            ).toString()
        );
    };

    Money.percent = function (value, percent) {
        var p = new BigInteger(
                Money.amountToCents(value)
            ).multiply(
                new BigInteger(Money.amountToCents(percent))
            ),

            q = p.divide(new BigInteger("10000")),
            r = p.mod(new BigInteger("10000"));

        return Money.centsToAmount(
            (r.compareTo(new BigInteger("4999")) > 0 ? q.add(new BigInteger("1")) : q).toString()
        );
    };

    Money.roundUpTo5Cents = function (amount) {
        var lastDigit = parseInt(amount.substr(-1), 10),
            additon = "0.00";

        if ((lastDigit % 5) !== 0) {
            additon = "0.0" + (5 - (lastDigit % 5));
        }

        return Money.add(amount, additon);
    };

    Money.roundTo5Cents = function (amount) {
        return Money.div(
            round(Money.mul(amount, "20.00")),
            "20.00"
        );
    };

    Money.cmp = function (a, b) {
        return new BigInteger(a.replace(".", "")).compareTo(new BigInteger(b.replace(".", "")));
    };

    Money.isEqual = function (a, b) {
        return Money.cmp(a, b) === 0;
    };

    Money.isZero = function (a) {
        return Money.isEqual(a, "0.00");
    };

    Money.isNegative = function (a) {
        return Money.cmp(a, "0.00") < 0;
    };

    Money.isPositive = function (a) {
        return Money.cmp(a, "0.00") > 0;
    };

    return Money;
}));

/*********/
!function(){"use strict";if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),n=!!t&&16<=parseInt(t[1],10);if(!("objectFit"in document.documentElement.style!=!1)||n){var o=function(t,e,i){var n,o,l,a,d;if((i=i.split(" ")).length<2&&(i[1]=i[0]),"x"===t)n=i[0],o=i[1],l="left",a="right",d=e.clientWidth;else{if("y"!==t)return;n=i[1],o=i[0],l="top",a="bottom",d=e.clientHeight}if(n!==l&&o!==l){if(n!==a&&o!==a)return"center"===n||"50%"===n?(e.style[l]="50%",void(e.style["margin-"+l]=d/-2+"px")):void(0<=n.indexOf("%")?(n=parseInt(n))<50?(e.style[l]=n+"%",e.style["margin-"+l]=d*(n/-100)+"px"):(n=100-n,e.style[a]=n+"%",e.style["margin-"+a]=d*(n/-100)+"px"):e.style[l]=n);e.style[a]="0"}else e.style[l]="0"},l=function(t){var e=t.dataset?t.dataset.objectFit:t.getAttribute("data-object-fit"),i=t.dataset?t.dataset.objectPosition:t.getAttribute("data-object-position");e=e||"cover",i=i||"50% 50%";var n=t.parentNode;return function(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("position"),n=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");i&&"static"!==i||(t.style.position="relative"),"hidden"!==n&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")}(n),function(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i)e.getPropertyValue(n)!==i[n]&&(t.style[n]=i[n])}(t),t.style.position="absolute",t.style.width="auto",t.style.height="auto","scale-down"===e&&(e=t.clientWidth<n.clientWidth&&t.clientHeight<n.clientHeight?"none":"contain"),"none"===e?(o("x",t,i),void o("y",t,i)):"fill"===e?(t.style.width="100%",t.style.height="100%",o("x",t,i),void o("y",t,i)):(t.style.height="100%",void("cover"===e&&t.clientWidth>n.clientWidth||"contain"===e&&t.clientWidth<n.clientWidth?(t.style.top="0",t.style.marginTop="0",o("x",t,i)):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",o("y",t,i))))},e=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;t=t}for(var e=0;e<t.length;e++)if(t[e].nodeName){var i=t[e].nodeName.toLowerCase();if("img"===i){if(n)continue;t[e].complete?l(t[e]):t[e].addEventListener("load",function(){l(this)})}else"video"===i?0<t[e].readyState?l(t[e]):t[e].addEventListener("loadedmetadata",function(){l(this)}):l(t[e])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e(),window.addEventListener("resize",e),window.objectFitPolyfill=e}else window.objectFitPolyfill=function(){return!1}}}();
/*********/
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

window.i18next.init({
  nsSeparator: false,
  keySeparator: false,

  /* eslint-disable max-len */
  resources: {
    'en-US': {
      translation: {
        'contact.requiredField': 'This field is required.',
        'contact.invalidEmail': 'Invalid Email Address',
        'contact.error': 'There was an error. Please try',
        'contact.error.blacklisted': 'There was an error. The site owner\'s email has been unsubscribed or blacklisted.',
        'contact.error.recaptcha.unavailable': 'The Google Recaptcha service needed to submit this form is not available right now.',
        'contact.resubmit': 'resubmitting your message.',
        'contact.tryAgain': 'If the problem persists, please try again in 5 minutes.',
        'lightbox.close': 'Close lightbox',
        'lightbox.next': 'Next image',
        'lightbox.previous': 'Previous image',
        'lightbox.pause': 'Pause',
        'lightbox.play': 'Play',
        'wts.homePageName': 'Home'
      }
    }
  },

  /* eslint-enable max-len */
  lng: window.i18nLocale,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
    prefix: '__',
    suffix: '__'
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9pMThuUHVibGlzaGVkLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImkxOG5leHQiLCJpbml0IiwibnNTZXBhcmF0b3IiLCJrZXlTZXBhcmF0b3IiLCJyZXNvdXJjZXMiLCJ0cmFuc2xhdGlvbiIsImxuZyIsImkxOG5Mb2NhbGUiLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsInByZWZpeCIsInN1ZmZpeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQ0VDLElBREYsQ0FDTztBQUNMQyxFQUFBQSxXQUFXLEVBQUUsS0FEUjtBQUVMQyxFQUFBQSxZQUFZLEVBQUUsS0FGVDs7QUFHTDtBQUNBQyxFQUFBQSxTQUFTLEVBQUU7QUFDVixhQUFTO0FBQ1JDLE1BQUFBLFdBQVcsRUFBRTtBQUNaLGlDQUF5Qix5QkFEYjtBQUVaLGdDQUF3Qix1QkFGWjtBQUdaLHlCQUFpQixnQ0FITDtBQUlaLHFDQUE2QixtRkFKakI7QUFLWiwrQ0FBdUMscUZBTDNCO0FBTVosNEJBQW9CLDRCQU5SO0FBT1osNEJBQW9CLHlEQVBSO0FBUVosMEJBQWtCLGdCQVJOO0FBU1oseUJBQWlCLFlBVEw7QUFVWiw2QkFBcUIsZ0JBVlQ7QUFXWiwwQkFBa0IsT0FYTjtBQVlaLHlCQUFpQixNQVpMO0FBYVosNEJBQW9CO0FBYlI7QUFETDtBQURDLEdBSk47O0FBdUJMO0FBQ0FDLEVBQUFBLEdBQUcsRUFBRVAsTUFBTSxDQUFDUSxVQXhCUDtBQXlCTEMsRUFBQUEsV0FBVyxFQUFFLE9BekJSO0FBMEJMQyxFQUFBQSxhQUFhLEVBQUU7QUFDZEMsSUFBQUEsV0FBVyxFQUFFLEtBREM7QUFFZEMsSUFBQUEsTUFBTSxFQUFFLElBRk07QUFHZEMsSUFBQUEsTUFBTSxFQUFFO0FBSE07QUExQlYsQ0FEUCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby12YXI6IDAsIHByZWZlci1jb25zdDogMCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuaTE4bmV4dFxuXHQuaW5pdCh7XG5cdFx0bnNTZXBhcmF0b3I6IGZhbHNlLFxuXHRcdGtleVNlcGFyYXRvcjogZmFsc2UsXG5cdFx0LyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXHRcdHJlc291cmNlczoge1xuXHRcdFx0J2VuLVVTJzoge1xuXHRcdFx0XHR0cmFuc2xhdGlvbjoge1xuXHRcdFx0XHRcdCdjb250YWN0LnJlcXVpcmVkRmllbGQnOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuXHRcdFx0XHRcdCdjb250YWN0LmludmFsaWRFbWFpbCc6ICdJbnZhbGlkIEVtYWlsIEFkZHJlc3MnLFxuXHRcdFx0XHRcdCdjb250YWN0LmVycm9yJzogJ1RoZXJlIHdhcyBhbiBlcnJvci4gUGxlYXNlIHRyeScsXG5cdFx0XHRcdFx0J2NvbnRhY3QuZXJyb3IuYmxhY2tsaXN0ZWQnOiAnVGhlcmUgd2FzIGFuIGVycm9yLiBUaGUgc2l0ZSBvd25lclxcJ3MgZW1haWwgaGFzIGJlZW4gdW5zdWJzY3JpYmVkIG9yIGJsYWNrbGlzdGVkLicsXG5cdFx0XHRcdFx0J2NvbnRhY3QuZXJyb3IucmVjYXB0Y2hhLnVuYXZhaWxhYmxlJzogJ1RoZSBHb29nbGUgUmVjYXB0Y2hhIHNlcnZpY2UgbmVlZGVkIHRvIHN1Ym1pdCB0aGlzIGZvcm0gaXMgbm90IGF2YWlsYWJsZSByaWdodCBub3cuJyxcblx0XHRcdFx0XHQnY29udGFjdC5yZXN1Ym1pdCc6ICdyZXN1Ym1pdHRpbmcgeW91ciBtZXNzYWdlLicsXG5cdFx0XHRcdFx0J2NvbnRhY3QudHJ5QWdhaW4nOiAnSWYgdGhlIHByb2JsZW0gcGVyc2lzdHMsIHBsZWFzZSB0cnkgYWdhaW4gaW4gNSBtaW51dGVzLicsXG5cdFx0XHRcdFx0J2xpZ2h0Ym94LmNsb3NlJzogJ0Nsb3NlIGxpZ2h0Ym94Jyxcblx0XHRcdFx0XHQnbGlnaHRib3gubmV4dCc6ICdOZXh0IGltYWdlJyxcblx0XHRcdFx0XHQnbGlnaHRib3gucHJldmlvdXMnOiAnUHJldmlvdXMgaW1hZ2UnLFxuXHRcdFx0XHRcdCdsaWdodGJveC5wYXVzZSc6ICdQYXVzZScsXG5cdFx0XHRcdFx0J2xpZ2h0Ym94LnBsYXknOiAnUGxheScsXG5cdFx0XHRcdFx0J3d0cy5ob21lUGFnZU5hbWUnOiAnSG9tZScsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0LyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cdFx0bG5nOiB3aW5kb3cuaTE4bkxvY2FsZSxcblx0XHRmYWxsYmFja0xuZzogJ2VuLVVTJyxcblx0XHRpbnRlcnBvbGF0aW9uOiB7XG5cdFx0XHRlc2NhcGVWYWx1ZTogZmFsc2UsXG5cdFx0XHRwcmVmaXg6ICdfXycsXG5cdFx0XHRzdWZmaXg6ICdfXycsXG5cdFx0fSxcblx0fSk7XG4iXX0=

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  var queryParams = window.location.search;
  var isVRT = queryParams.indexOf('vrt=true') !== -1;
  var IMAGE_SELECTOR = '.imageMedia-pip';
  var SVG_SELECTOR = '.svgMedia-pip';
  var selectors = [IMAGE_SELECTOR, SVG_SELECTOR];

  function convertToArray(nodelist) {
    return [].slice.call(nodelist);
  }

  function setUpLazyLoad(target) {
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        var item = entry.target; // Detect when the item intersects with the viewport

        if (entry.isIntersecting) {
          var dataLazyUrl = item.getAttribute('data-lazy-url');

          if (dataLazyUrl) {
            // We want to preload the image and only remove the blur when it's loaded
            var img = new Image();

            img.onload = function () {
              var mediaImg = item.querySelector('img');
              mediaImg.setAttribute('src', dataLazyUrl);
              item.classList.add('gaussian-blur--loaded');
              item.style.backgroundImage = '';
              item.style.backgroundSize = '';
            };

            img.src = dataLazyUrl;
          }

          observer.disconnect();
        } else if (!entry.isIntersecting && !isVRT) {
          // Apply a blur effect
          item.classList.add('gaussian-blur--initial');
          var thumbnail = item.getAttribute('data-lazy-thumbnail');

          if (thumbnail && mediaImg) {
            item.style.backgroundImage = 'url(' + thumbnail + ')';
            item.style.backgroundSize = 'cover';
          }
        }
      });
    });
    observer.observe(target);
  }

  var itemsToLazyLoad = [];

  for (var j = 0; j < selectors.length; j++) {
    itemsToLazyLoad = itemsToLazyLoad.concat(convertToArray(document.querySelectorAll(selectors[j])));
  }

  for (var i = 0; i < itemsToLazyLoad.length; i++) {
    var item = itemsToLazyLoad[i];
    var fullUrl = item.getAttribute('data-lazy-url');
    var mediaImg = item.querySelector('img'); // We may want to skip lazy loading for testing purposes

    if (isVRT && mediaImg) {
      mediaImg.setAttribute('src', fullUrl);
    } else if (!isVRT) {
      setUpLazyLoad(item);
    }
  }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9sYXp5TG9hZC5qcyJdLCJuYW1lcyI6WyJxdWVyeVBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaXNWUlQiLCJpbmRleE9mIiwiSU1BR0VfU0VMRUNUT1IiLCJTVkdfU0VMRUNUT1IiLCJzZWxlY3RvcnMiLCJjb252ZXJ0VG9BcnJheSIsIm5vZGVsaXN0Iiwic2xpY2UiLCJjYWxsIiwic2V0VXBMYXp5TG9hZCIsInRhcmdldCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXRlbSIsImlzSW50ZXJzZWN0aW5nIiwiZGF0YUxhenlVcmwiLCJnZXRBdHRyaWJ1dGUiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIm1lZGlhSW1nIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJzcmMiLCJkaXNjb25uZWN0IiwidGh1bWJuYWlsIiwib2JzZXJ2ZSIsIml0ZW1zVG9MYXp5TG9hZCIsImoiLCJsZW5ndGgiLCJjb25jYXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiZnVsbFVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSxDQUFDLFlBQVk7QUFDWixNQUFJQSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBbEM7QUFDQSxNQUFJQyxLQUFLLEdBQUdKLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQixVQUFwQixNQUFvQyxDQUFDLENBQWpEO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLGlCQUFyQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxlQUFuQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFDRixjQUFELEVBQWlCQyxZQUFqQixDQUFoQjs7QUFFQSxX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QUFJdUIsUUFBYixFQUF1QjtBQUN0QkEsTUFBQUEsUUFBUSxDQUFDRSxZQUFULENBQXNCLEtBQXRCLEVBQTZCaUIsT0FBN0I7QUFDQSxLQUZELE1BRU8sSUFBSSxDQUFDMUMsS0FBTCxFQUFZO0FBQ2xCUyxNQUFBQSxhQUFhLENBQUNPLElBQUQsQ0FBYjtBQUNBO0FBQ0Q7QUFDRCxDQWhFRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby12YXI6IDAsIHByZWZlci1jb25zdDogMCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHR2YXIgcXVlcnlQYXJhbXMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHR2YXIgaXNWUlQgPSBxdWVyeVBhcmFtcy5pbmRleE9mKCd2cnQ9dHJ1ZScpICE9PSAtMTtcblx0dmFyIElNQUdFX1NFTEVDVE9SID0gJy5pbWFnZU1lZGlhLXBpcCc7XG5cdHZhciBTVkdfU0VMRUNUT1IgPSAnLnN2Z01lZGlhLXBpcCc7XG5cdHZhciBzZWxlY3RvcnMgPSBbSU1BR0VfU0VMRUNUT1IsIFNWR19TRUxFQ1RPUl07XG5cblx0ZnVuY3Rpb24gY29udmVydFRvQXJyYXkobm9kZWxpc3QpIHtcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChub2RlbGlzdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRVcExhenlMb2FkKHRhcmdldCkge1xuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcblx0XHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHRcdHZhciBpdGVtID0gZW50cnkudGFyZ2V0O1xuXG5cdFx0XHRcdC8vIERldGVjdCB3aGVuIHRoZSBpdGVtIGludGVyc2VjdHMgd2l0aCB0aGUgdmlld3BvcnRcblx0XHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0dmFyIGRhdGFMYXp5VXJsID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF6eS11cmwnKTtcblx0XHRcdFx0XHRpZiAoZGF0YUxhenlVcmwpIHtcblx0XHRcdFx0XHRcdC8vIFdlIHdhbnQgdG8gcHJlbG9hZCB0aGUgaW1hZ2UgYW5kIG9ubHkgcmVtb3ZlIHRoZSBibHVyIHdoZW4gaXQncyBsb2FkZWRcblx0XHRcdFx0XHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBtZWRpYUltZyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cdFx0XHRcdFx0XHRcdG1lZGlhSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YUxhenlVcmwpO1xuXHRcdFx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2dhdXNzaWFuLWJsdXItLWxvYWRlZCcpO1xuXHRcdFx0XHRcdFx0XHRpdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRpdGVtLnN0eWxlLmJhY2tncm91bmRTaXplID0gJyc7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0aW1nLnNyYyA9IGRhdGFMYXp5VXJsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdFx0fSBlbHNlIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgIWlzVlJUKSB7XG5cdFx0XHRcdFx0Ly8gQXBwbHkgYSBibHVyIGVmZmVjdFxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnZ2F1c3NpYW4tYmx1ci0taW5pdGlhbCcpO1xuXHRcdFx0XHRcdHZhciB0aHVtYm5haWwgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5LXRodW1ibmFpbCcpO1xuXHRcdFx0XHRcdGlmICh0aHVtYm5haWwgJiYgbWVkaWFJbWcpIHtcblx0XHRcdFx0XHRcdGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgdGh1bWJuYWlsICsgJyknO1xuXHRcdFx0XHRcdFx0aXRlbS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG5cdH1cblxuXHR2YXIgaXRlbXNUb0xhenlMb2FkID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0b3JzLmxlbmd0aDsgaisrKSB7XG5cdFx0aXRlbXNUb0xhenlMb2FkID0gaXRlbXNUb0xhenlMb2FkLmNvbmNhdChjb252ZXJ0VG9BcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yc1tqXSkpKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNUb0xhenlMb2FkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBpdGVtc1RvTGF6eUxvYWRbaV07XG5cdFx0dmFyIGZ1bGxVcmwgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXp5LXVybCcpO1xuXHRcdHZhciBtZWRpYUltZyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cblx0XHQvLyBXZSBtYXkgd2FudCB0byBza2lwIGxhenkgbG9hZGluZyBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuXHRcdGlmIChpc1ZSVCAmJiBtZWRpYUltZykge1xuXHRcdFx0bWVkaWFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBmdWxsVXJsKTtcblx0XHR9IGVsc2UgaWYgKCFpc1ZSVCkge1xuXHRcdFx0c2V0VXBMYXp5TG9hZChpdGVtKTtcblx0XHR9XG5cdH1cbn0pKCk7XG4iXX0=

/*********/
"use strict";

/* eslint no-var: 0, prefer-const: 0 */

/* exported throttle */

/**************
 * UTILITY
 *************/
// lodash.throttle, copy/pasted here to avoid including all of lodash
var _now = Date.now || function () {
  return new Date().getTime();
};

var throttle = function throttle(func, wait, options) {
  var context;
  var args;
  var result;
  var timeout = null;
  var previous = 0;

  if (!options) {
    options = {};
  }

  var later = function later() {
    previous = options.leading === false ? 0 : _now();
    timeout = null;
    result = func.apply(context, args);

    if (!timeout) {
      context = args = null;
    }
  };

  return function () {
    var now = _now();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC91dGlscy5qcyJdLCJuYW1lcyI6WyJfbm93IiwiRGF0ZSIsIm5vdyIsImdldFRpbWUiLCJ0aHJvdHRsZSIsImZ1bmMiLCJ3YWl0Iiwib3B0aW9ucyIsImNvbnRleHQiLCJhcmdzIiwicmVzdWx0IiwidGltZW91dCIsInByZXZpb3VzIiwibGF0ZXIiLCJsZWFkaW5nIiwiYXBwbHkiLCJyZW1haW5pbmciLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7OztBQUlBO0FBRUEsSUFBSUEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsSUFBWSxZQUFXO0FBQ2pDLFNBQU8sSUFBSUQsSUFBSixHQUFXRSxPQUFYLEVBQVA7QUFDQSxDQUZEOztBQUlBLElBQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQkMsT0FBckIsRUFBOEI7QUFDNUMsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxNQUFKO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFDQSxNQUFJLENBQUNMLE9BQUwsRUFBYztBQUNiQSxJQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBOztBQUNELE1BQUlNLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDdEJELElBQUFBLFFBQVEsR0FBR0wsT0FBTyxDQUFDTyxPQUFSLEtBQW9CLEtBQXBCLEdBQTRCLENBQTVCLEdBQWdDZCxJQUFJLEVBQS9DO0FBQ0FXLElBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0FELElBQUFBLE1BQU0sR0FBR0wsSUFBSSxDQUFDVSxLQUFMLENBQVdQLE9BQVgsRUFBb0JDLElBQXBCLENBQVQ7O0FBQ0EsUUFBSSxDQUFDRSxPQUFMLEVBQWM7QUFDYkgsTUFBQUEsT0FBTyxHQUFHQyxJQUFJLEdBQUcsSUFBakI7QUFDQTtBQUNELEdBUEQ7O0FBUUEsU0FBTyxZQUFXO0FBQ2pCLFFBQUlQLEdBQUcsR0FBR0YsSUFBSSxFQUFkOztBQUNBLFFBQUksQ0FBQ1ksUUFBRCxJQUFhTCxPQUFPLENBQUNPLE9BQVIsS0FBb0IsS0FBckMsRUFBNEM7QUFDM0NGLE1BQUFBLFFBQVEsR0FBR1YsR0FBWDtBQUNBOztBQUNELFFBQUljLFNBQVMsR0FBR1YsSUFBSSxJQUFJSixHQUFHLEdBQUdVLFFBQVYsQ0FBcEI7QUFDQUosSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQUMsSUFBQUEsSUFBSSxHQUFHUSxTQUFQOztBQUNBLFFBQUlELFNBQVMsSUFBSSxDQUFiLElBQWtCQSxTQUFTLEdBQUdWLElBQWxDLEVBQXdDO0FBQ3ZDWSxNQUFBQSxZQUFZLENBQUNQLE9BQUQsQ0FBWjtBQUNBQSxNQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNBQyxNQUFBQSxRQUFRLEdBQUdWLEdBQVg7QUFDQVEsTUFBQUEsTUFBTSxHQUFHTCxJQUFJLENBQUNVLEtBQUwsQ0FBV1AsT0FBWCxFQUFvQkMsSUFBcEIsQ0FBVDs7QUFDQSxVQUFJLENBQUNFLE9BQUwsRUFBYztBQUNiSCxRQUFBQSxPQUFPLEdBQUdDLElBQUksR0FBRyxJQUFqQjtBQUNBO0FBQ0QsS0FSRCxNQVFPLElBQUksQ0FBQ0UsT0FBRCxJQUFZSixPQUFPLENBQUNZLFFBQVIsS0FBcUIsS0FBckMsRUFBNEM7QUFDbERSLE1BQUFBLE9BQU8sR0FBR1MsVUFBVSxDQUFDUCxLQUFELEVBQVFHLFNBQVIsQ0FBcEI7QUFDQTs7QUFDRCxXQUFPTixNQUFQO0FBQ0EsR0FwQkQ7QUFxQkEsQ0F0Q0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdmFyOiAwLCBwcmVmZXItY29uc3Q6IDAgKi9cbi8qIGV4cG9ydGVkIHRocm90dGxlICovXG4vKioqKioqKioqKioqKipcbiAqIFVUSUxJVFlcbiAqKioqKioqKioqKioqL1xuXG4vLyBsb2Rhc2gudGhyb3R0bGUsIGNvcHkvcGFzdGVkIGhlcmUgdG8gYXZvaWQgaW5jbHVkaW5nIGFsbCBvZiBsb2Rhc2hcblxudmFyIF9ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxudmFyIHRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuXHR2YXIgY29udGV4dDtcblx0dmFyIGFyZ3M7XG5cdHZhciByZXN1bHQ7XG5cdHZhciB0aW1lb3V0ID0gbnVsbDtcblx0dmFyIHByZXZpb3VzID0gMDtcblx0aWYgKCFvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IHt9O1xuXHR9XG5cdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfbm93KCk7XG5cdFx0dGltZW91dCA9IG51bGw7XG5cdFx0cmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdGNvbnRleHQgPSBhcmdzID0gbnVsbDtcblx0XHR9XG5cdH07XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgbm93ID0gX25vdygpO1xuXHRcdGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkge1xuXHRcdFx0cHJldmlvdXMgPSBub3c7XG5cdFx0fVxuXHRcdHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcblx0XHRjb250ZXh0ID0gdGhpcztcblx0XHRhcmdzID0gYXJndW1lbnRzO1xuXHRcdGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdHByZXZpb3VzID0gbm93O1xuXHRcdFx0cmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHRjb250ZXh0ID0gYXJncyA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59O1xuIl19

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';
/*
 * ANIMATED INTERNAL LINK SCROLLING
 */

var anchorScrolling = function anchorScrolling() {
  var navigationPipLinks = document.querySelectorAll('.navigation-pip .link a');
  var IE = navigator.userAgent.indexOf('Trident') >= 0;
  var FF = navigator.userAgent.indexOf('Gecko/') >= 0;

  function getViewportNode() {
    if (document.scrollingElement) {
      return document.scrollingElement;
    } else if (IE || FF) {
      return document.documentElement;
    } else {
      return document.body;
    }
  }

  function linkClickHandler(event) {
    event.preventDefault();
    var href = event.currentTarget.getAttribute('href');
    var targetName = event.currentTarget.getAttribute('data-destination-block');

    if (!targetName) {
      targetName = href.substring(1);
      event.currentTarget.setAttribute('data-destination-block', target);
    }

    var target = document.querySelector('[name="' + targetName + '"]'); // The bounding rect's top is relative to the viewport, so it represents the delta
    // in scroll position (top > 0 : scroll down, top < 0 : scroll up)

    var delta = target.getBoundingClientRect().top; // Number of pixels we want to "ease" the block into view when scrolling

    var BLOCK_SCROLL_EASE_AMOUNT = 750;
    window.doScroll(getViewportNode(), delta, BLOCK_SCROLL_EASE_AMOUNT, function () {
      window.location.hash = href;
    });
  }

  for (var i = 0; i < navigationPipLinks.length; i++) {
    var link = navigationPipLinks.item(i);
    var href = link.getAttribute('href');

    if (href.indexOf('#') === 0) {
      if (link.addEventListener) {
        link.addEventListener('click', linkClickHandler);
      } else {
        // IE8
        link.attachEvent('onclick', linkClickHandler);
      }
    }
  }
};

anchorScrolling();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9hbmltYXRlQmxvY2tMaW5rcy5qcyJdLCJuYW1lcyI6WyJhbmNob3JTY3JvbGxpbmciLCJuYXZpZ2F0aW9uUGlwTGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJJRSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJGRiIsImdldFZpZXdwb3J0Tm9kZSIsInNjcm9sbGluZ0VsZW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwibGlua0NsaWNrSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldE5hbWUiLCJzdWJzdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwiZGVsdGEiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJCTE9DS19TQ1JPTExfRUFTRV9BTU9VTlQiLCJ3aW5kb3ciLCJkb1Njcm9sbCIsImxvY2F0aW9uIiwiaGFzaCIsImkiLCJsZW5ndGgiLCJsaW5rIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBOzs7O0FBR0EsSUFBSUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBRWpDLE1BQUlDLGtCQUFrQixHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHlCQUExQixDQUF6QjtBQUNBLE1BQUlDLEVBQUUsR0FBR0MsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixTQUE1QixLQUEwQyxDQUFuRDtBQUNBLE1BQUlDLEVBQUUsR0FBR0gsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixLQUF5QyxDQUFsRDs7QUFFQSxXQUFTRSxlQUFULEdBQTJCO0FBQzFCLFFBQUlQLFFBQVEsQ0FBQ1EsZ0JBQWIsRUFBK0I7QUFDOUIsYUFBT1IsUUFBUSxDQUFDUSxnQkFBaEI7QUFDQSxLQUZELE1BRU8sSUFBSU4sRUFBRSxJQUFJSSxFQUFWLEVBQWM7QUFDcEIsYUFBT04sUUFBUSxDQUFDUyxlQUFoQjtBQUNBLEtBRk0sTUFFQTtBQUNOLGFBQU9ULFFBQVEsQ0FBQ1UsSUFBaEI7QUFDQTtBQUNEOztBQUVELFdBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUNoQ0EsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixLQUFLLENBQUNHLGFBQU4sQ0FBb0JDLFlBQXBCLENBQWlDLE1BQWpDLENBQVg7QUFDQSxRQUFJQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ0csYUFBTixDQUFvQkMsWUFBcEIsQ0FBaUMsd0JBQWpDLENBQWpCOztBQUNBLFFBQUksQ0FBQ0MsVUFBTCxFQUFpQjtBQUNoQkEsTUFBQUEsVUFBVSxHQUFHSCxJQUFJLENBQUNJLFNBQUwsQ0FBZSxDQUFmLENBQWI7QUFDQU4sTUFBQUEsS0FBSyxDQUFDRyxhQUFOLENBQW9CSSxZQUFwQixDQUFpQyx3QkFBakMsRUFBMkRDLE1BQTNEO0FBQ0E7O0FBQ0QsUUFBSUEsTUFBTSxHQUFHcEIsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixZQUFZSixVQUFaLEdBQXlCLElBQWhELENBQWIsQ0FSZ0MsQ0FVaEM7QUFDQTs7QUFDQSxRQUFJSyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0cscUJBQVAsR0FBK0JDLEdBQTNDLENBWmdDLENBY2hDOztBQUNBLFFBQUlDLHdCQUF3QixHQUFHLEdBQS9CO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnBCLGVBQWUsRUFBL0IsRUFBbUNlLEtBQW5DLEVBQTBDRyx3QkFBMUMsRUFBb0UsWUFBWTtBQUMvRUMsTUFBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxJQUFoQixHQUF1QmYsSUFBdkI7QUFDQSxLQUZEO0FBR0E7O0FBRUQsT0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9CLGtCQUFrQixDQUFDZ0MsTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDbkQsUUFBSUUsSUFBSSxHQUFHakMsa0JBQWtCLENBQUNrQyxJQUFuQixDQUF3QkgsQ0FBeEIsQ0FBWDtBQUNBLFFBQUloQixJQUFJLEdBQUdrQixJQUFJLENBQUNoQixZQUFMLENBQWtCLE1BQWxCLENBQVg7O0FBQ0EsUUFBSUYsSUFBSSxDQUFDVCxPQUFMLENBQWEsR0FBYixNQUFzQixDQUExQixFQUE2QjtBQUM1QixVQUFJMkIsSUFBSSxDQUFDRSxnQkFBVCxFQUEyQjtBQUMxQkYsUUFBQUEsSUFBSSxDQUFDRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQnZCLGdCQUEvQjtBQUNBLE9BRkQsTUFFTztBQUNOO0FBQ0FxQixRQUFBQSxJQUFJLENBQUNHLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEJ4QixnQkFBNUI7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxDQWpERDs7QUFtREFiLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdmFyOiAwLCBwcmVmZXItY29uc3Q6IDAgKi9cbid1c2Ugc3RyaWN0JztcblxuLypcbiAqIEFOSU1BVEVEIElOVEVSTkFMIExJTksgU0NST0xMSU5HXG4gKi9cbnZhciBhbmNob3JTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIG5hdmlnYXRpb25QaXBMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLXBpcCAubGluayBhJyk7XG5cdHZhciBJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID49IDA7XG5cdHZhciBGRiA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignR2Vja28vJykgPj0gMDtcblxuXHRmdW5jdGlvbiBnZXRWaWV3cG9ydE5vZGUoKSB7XG5cdFx0aWYgKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50O1xuXHRcdH0gZWxzZSBpZiAoSUUgfHwgRkYpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGxpbmtDbGlja0hhbmRsZXIoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBocmVmID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblx0XHR2YXIgdGFyZ2V0TmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlc3RpbmF0aW9uLWJsb2NrJyk7XG5cdFx0aWYgKCF0YXJnZXROYW1lKSB7XG5cdFx0XHR0YXJnZXROYW1lID0gaHJlZi5zdWJzdHJpbmcoMSk7XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1kZXN0aW5hdGlvbi1ibG9jaycsIHRhcmdldCk7XG5cdFx0fVxuXHRcdHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIicgKyB0YXJnZXROYW1lICsgJ1wiXScpO1xuXG5cdFx0Ly8gVGhlIGJvdW5kaW5nIHJlY3QncyB0b3AgaXMgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0LCBzbyBpdCByZXByZXNlbnRzIHRoZSBkZWx0YVxuXHRcdC8vIGluIHNjcm9sbCBwb3NpdGlvbiAodG9wID4gMCA6IHNjcm9sbCBkb3duLCB0b3AgPCAwIDogc2Nyb2xsIHVwKVxuXHRcdHZhciBkZWx0YSA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cblx0XHQvLyBOdW1iZXIgb2YgcGl4ZWxzIHdlIHdhbnQgdG8gXCJlYXNlXCIgdGhlIGJsb2NrIGludG8gdmlldyB3aGVuIHNjcm9sbGluZ1xuXHRcdHZhciBCTE9DS19TQ1JPTExfRUFTRV9BTU9VTlQgPSA3NTA7XG5cdFx0d2luZG93LmRvU2Nyb2xsKGdldFZpZXdwb3J0Tm9kZSgpLCBkZWx0YSwgQkxPQ0tfU0NST0xMX0VBU0VfQU1PVU5ULCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7XG5cdFx0fSk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5hdmlnYXRpb25QaXBMaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBsaW5rID0gbmF2aWdhdGlvblBpcExpbmtzLml0ZW0oaSk7XG5cdFx0dmFyIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXHRcdGlmIChocmVmLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuXHRcdFx0aWYgKGxpbmsuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlua0NsaWNrSGFuZGxlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJRThcblx0XHRcdFx0bGluay5hdHRhY2hFdmVudCgnb25jbGljaycsIGxpbmtDbGlja0hhbmRsZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuYW5jaG9yU2Nyb2xsaW5nKCk7XG4iXX0=

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  var currentLightboxImage = 0;
  var lightboxVisible = false;
  var preloaded = false;
  var preloadUrls = [];
  var preloadedImages = [];
  var imagesToShowInLightbox = [];
  var NON_MEDIA_GALLERY_IMAGES_SELECTOR = 'section.lightbox-mode' + ' .graphic-pip-container:not(.force-disable-lightbox)' + ' img[data-lightbox-url], .force-lightbox img[data-lightbox-url]:not([data-media-gallery-index])';
  var MEDIA_GALLERY_IMAGES_SELECTOR = 'img[data-lightbox-url][data-media-gallery-index]';
  var MEDIA_GALLERY_COLUMNS_SELECTOR = '.media-gallery__column';
  var autoplayInterval;
  var autoplayTime;
  var autoplayOn; // Run a function for each lightbox image

  function forEachLightboxImage(images, callback) {
    for (var i = 0; i < images.length; i++) {
      callback(images[i]);
    }
  } // 1. Attach listeners to the lightbox component


  function attachListenersToLightbox() {
    var closeButton = document.querySelector('.lightbox__close-btn');
    closeButton.addEventListener('click', closeLightbox);
    closeButton.setAttribute('aria-label', window.i18next.t('lightbox.close'));
    var cover = document.querySelector('.lightbox__cover');
    cover.addEventListener('click', closeLightbox);
    var next = document.querySelector('.lightbox__nav-btn--next');
    next.addEventListener('click', nextLightboxImage);
    next.setAttribute('aria-label', window.i18next.t('lightbox.next'));
    var previous = document.querySelector('.lightbox__nav-btn--previous');
    previous.addEventListener('click', previousLightboxImage);
    previous.setAttribute('aria-label', window.i18next.t('lightbox.previous'));
    var image = document.querySelector('.lightbox__image');
    image.addEventListener('click', nextLightboxImage);
  } // 2a. Run the first time setup for all lightbox images


  function prepImagesForLightbox() {
    var nonGalleryImages = document.querySelectorAll(NON_MEDIA_GALLERY_IMAGES_SELECTOR);
    forEachLightboxImage(nonGalleryImages, setupLightboxImage);
    var galleryImages = document.querySelectorAll(MEDIA_GALLERY_IMAGES_SELECTOR);
    forEachLightboxImage(galleryImages, setupLightboxImage);
  } // 2b. Do a first time setup for lightbox images


  function setupLightboxImage(thisImage) {
    if (thisImage.dataset.lightboxUrl) {
      preloadUrls.push(thisImage.dataset.lightboxUrl);
      thisImage.addEventListener('click', getImagesForLightbox.bind(thisImage, thisImage));
      thisImage.addEventListener('mouseenter', handlePreload.bind(thisImage, thisImage));
    }
  } // Preload all lightbox images when called. Only works on first call.


  function preloadImages() {
    if (!preloaded) {
      for (var i = 0; i < preloadUrls.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = preloadUrls[i];
      }

      preloaded = true;
    }
  } // Handler for on hover on lightbox images


  function handlePreload(thisImage) {
    thisImage.removeEventListener('mouseenter', handlePreload);
    preloadImages();
  }

  function convertToArray(nodeList) {
    return [].slice.call(nodeList);
  }
  /* e.g. 3 columns with 4 images with displayed Tower index as such:
  * 1 3 4
  * 2
  * But to the user, it should read left to right and should open the gallery like
  * 1 2 3
  * 4
  * This function picks off the top image of each column
  */


  function orderGalleryImages(columns) {
    var orderedImages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var hasRemainingImages = false; // Go through each column and pick off the first image

    for (var i = 0; i < columns.length; i++) {
      var image = columns[i].shift();

      if (image) {
        orderedImages.push(image);
        hasRemainingImages = true;
      }
    } // If any column has remaining images, recursively call again


    if (hasRemainingImages) {
      return orderGalleryImages(columns, orderedImages);
    } else {
      return orderedImages;
    }
  } // 2c. When an image is clicked, it figures out which images should be loaded in the lightbox


  function getImagesForLightbox(imageEl) {
    var mediaGalleryIndex = imageEl.dataset.mediaGalleryIndex;

    if (mediaGalleryIndex) {
      var mediaGallery = document.querySelector('[data-tower-id="' + mediaGalleryIndex + '"]');

      if (mediaGallery.dataset.lightboxAutoplay === 'true') {
        autoplayTime = mediaGallery.dataset.lightboxAutoplayTime;
        setAutoplayOn();
        setupPauseAndPlayButton();
      }

      var mediaGalleryImages;

      if (mediaGallery.classList.contains('media-gallery--masonry')) {
        var mediaGalleryColumns = convertToArray(mediaGallery.querySelectorAll(MEDIA_GALLERY_COLUMNS_SELECTOR));
        var convertedColumns = [];

        for (var i = 0; i < mediaGalleryColumns.length; i++) {
          convertedColumns.push(convertToArray(mediaGalleryColumns[i].querySelectorAll(MEDIA_GALLERY_IMAGES_SELECTOR)));
        } // Because media gallery arranges the images in column, we need to sequentially get the first image
        // in each column to order them correctly


        mediaGalleryImages = orderGalleryImages(convertedColumns, []);
      } else {
        mediaGalleryImages = convertToArray(mediaGallery.querySelectorAll(MEDIA_GALLERY_IMAGES_SELECTOR));
      }

      for (var j = 0; j < mediaGalleryImages.length; j++) {
        var image = mediaGalleryImages[j];
        image.dataset.lightBoxImageIndex = j;
        imagesToShowInLightbox.push(constructImageData(image, j));
      }
    } else {
      var nonGalleryImages = document.querySelectorAll(NON_MEDIA_GALLERY_IMAGES_SELECTOR);

      for (var k = 0; k < nonGalleryImages.length; k++) {
        nonGalleryImages[k].dataset.lightBoxImageIndex = k;
        imagesToShowInLightbox.push(constructImageData(nonGalleryImages[k], k));
      }
    }

    currentLightboxImage = parseInt(imageEl.dataset.lightBoxImageIndex);
    showLightboxImage(imagesToShowInLightbox[currentLightboxImage]);
    updateSlideCounter(currentLightboxImage);
    var total = document.querySelector('.lightbox__slide-counter__total');
    total.innerHTML = imagesToShowInLightbox.length;
    lightboxVisible = true;
    document.querySelector('.lightbox').classList.add('lightbox--visible');
    document.querySelector('body').classList.add('overflow-hidden');
  } // 2d. Construct image data for the lightbox


  function constructImageData(imageEl, index) {
    var displayTitle = imageEl.dataset.displayTitle;
    var displayDescription = imageEl.dataset.displayDescription;
    var imageData = {
      index: index,
      url: imageEl.dataset.lightboxUrl
    };

    if (displayTitle) {
      imageData.displayTitle = displayTitle;
    }

    if (displayDescription) {
      imageData.displayDescription = displayDescription;
    }

    return imageData;
  } // 2e. Show a given image element in the lightbox


  function showLightboxImage(imageData) {
    document.querySelector('.lightbox__image').src = imageData.url;
    var displayTitle = imageData.displayTitle;
    var displayDescription = imageData.displayDescription;

    if (displayTitle || displayDescription) {
      document.querySelector('.lightbox__info').classList.add('lightbox__info--visible');
    } else {
      document.querySelector('.lightbox__info').classList.remove('lightbox__info--visible');
    }

    document.querySelector('.lightbox__title').innerHTML = displayTitle || '';
    document.querySelector('.lightbox__description').innerHTML = displayDescription || '';
  } // Show the next lightbox image


  function nextLightboxImage() {
    currentLightboxImage += 1;

    if (autoplayOn) {
      resetAutoplay();
    }

    if (currentLightboxImage >= imagesToShowInLightbox.length) {
      currentLightboxImage = 0;
    }

    updateSlideCounter(currentLightboxImage);
    showLightboxImage(imagesToShowInLightbox.filter(function (image) {
      return image.index === currentLightboxImage;
    })[0]);
  } // Show the previous lightbox image


  function previousLightboxImage() {
    currentLightboxImage -= 1;

    if (autoplayOn) {
      resetAutoplay();
    }

    if (currentLightboxImage < 0) {
      currentLightboxImage = imagesToShowInLightbox.length - 1;
    }

    updateSlideCounter(currentLightboxImage);
    showLightboxImage(imagesToShowInLightbox.filter(function (image) {
      return image.index === currentLightboxImage;
    })[0]);
  }

  function updateSlideCounter() {
    var current = document.querySelector('.lightbox__slide-counter__current');
    current.innerHTML = currentLightboxImage + 1;
  } // Close the lightbox


  function closeLightbox() {
    setAutoplayOff();
    lightboxVisible = false;
    imagesToShowInLightbox = [];
    currentLightboxImage = 0;
    document.querySelector('.lightbox__image').src = '';
    document.querySelector('.lightbox__title').innerHTML = '';
    document.querySelector('.lightbox__description').innerHTML = '';
    document.querySelector('.lightbox').classList.remove('lightbox--visible');
    document.querySelector('body').classList.remove('overflow-hidden');
  }

  function setAutoplayOn() {
    autoplayOn = true;
    autoplayInterval = setInterval(function () {
      nextLightboxImage();
    }, autoplayTime * 1000);
    document.querySelector('.lightbox__play-btn').classList.remove('lightbox__btn--visible');
    document.querySelector('.lightbox__pause-btn').classList.add('lightbox__btn--visible');
  }

  function setAutoplayOff() {
    autoplayOn = false;
    clearInterval(autoplayInterval);
    document.querySelector('.lightbox__pause-btn').classList.remove('lightbox__btn--visible');
    document.querySelector('.lightbox__play-btn').classList.add('lightbox__btn--visible');
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(function () {
      nextLightboxImage();
    }, autoplayTime * 1000);
  } // Add autoplay pause/play button


  function setupPauseAndPlayButton() {
    var pause = document.querySelector('.lightbox__pause-btn');
    pause.addEventListener('click', setAutoplayOff);
    pause.setAttribute('aria-label', window.i18next.t('lightbox.pause'));
    var play = document.querySelector('.lightbox__play-btn');
    play.addEventListener('click', setAutoplayOn);
    play.setAttribute('aria-label', window.i18next.t('lightbox.play'));
  } // 4. Add the keyboard listeners


  function setupKeyboardLightboxControls() {
    window.addEventListener('keydown', function (keyboardEvent) {
      if (lightboxVisible) {
        switch (keyboardEvent.keyCode) {
          case 37:
            previousLightboxImage();
            break;

          case 39:
            nextLightboxImage();
            break;

          case 27:
            closeLightbox();
            break;
        }
      }
    });
  } // 1. Attach the listeners to the lightbox component


  attachListenersToLightbox(); // 2. Prep each lightbox by attaching click handlers and preloading the images

  prepImagesForLightbox(); // 3. Add keyboard listeners for the lightbox

  setupKeyboardLightboxControls();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9saWdodGJveC5qcyJdLCJuYW1lcyI6WyJjdXJyZW50TGlnaHRib3hJbWFnZSIsImxpZ2h0Ym94VmlzaWJsZSIsInByZWxvYWRlZCIsInByZWxvYWRVcmxzIiwicHJlbG9hZGVkSW1hZ2VzIiwiaW1hZ2VzVG9TaG93SW5MaWdodGJveCIsIk5PTl9NRURJQV9HQUxMRVJZX0lNQUdFU19TRUxFQ1RPUiIsIk1FRElBX0dBTExFUllfSU1BR0VTX1NFTEVDVE9SIiwiTUVESUFfR0FMTEVSWV9DT0xVTU5TX1NFTEVDVE9SIiwiYXV0b3BsYXlJbnRlcnZhbCIsImF1dG9wbGF5VGltZSIsImF1dG9wbGF5T24iLCJmb3JFYWNoTGlnaHRib3hJbWFnZSIsImltYWdlcyIsImNhbGxiYWNrIiwiaSIsImxlbmd0aCIsImF0dGFjaExpc3RlbmVyc1RvTGlnaHRib3giLCJjbG9zZUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZUxpZ2h0Ym94Iiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiaTE4bmV4dCIsInQiLCJjb3ZlciIsIm5leHQiLCJuZXh0TGlnaHRib3hJbWFnZSIsInByZXZpb3VzIiwicHJldmlvdXNMaWdodGJveEltYWdlIiwiaW1hZ2UiLCJwcmVwSW1hZ2VzRm9yTGlnaHRib3giLCJub25HYWxsZXJ5SW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInNldHVwTGlnaHRib3hJbWFnZSIsImdhbGxlcnlJbWFnZXMiLCJ0aGlzSW1hZ2UiLCJkYXRhc2V0IiwibGlnaHRib3hVcmwiLCJwdXNoIiwiZ2V0SW1hZ2VzRm9yTGlnaHRib3giLCJiaW5kIiwiaGFuZGxlUHJlbG9hZCIsInByZWxvYWRJbWFnZXMiLCJJbWFnZSIsInNyYyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb252ZXJ0VG9BcnJheSIsIm5vZGVMaXN0Iiwic2xpY2UiLCJjYWxsIiwib3JkZXJHYWxsZXJ5SW1hZ2VzIiwiY29sdW1ucyIsIm9yZGVyZWRJbWFnZXMiLCJoYXNSZW1haW5pbmdJbWFnZXMiLCJzaGlmdCIsImltYWdlRWwiLCJtZWRpYUdhbGxlcnlJbmRleCIsIm1lZGlhR2FsbGVyeSIsImxpZ2h0Ym94QXV0b3BsYXkiLCJsaWdodGJveEF1dG9wbGF5VGltZSIsInNldEF1dG9wbGF5T24iLCJzZXR1cFBhdXNlQW5kUGxheUJ1dHRvbiIsIm1lZGlhR2FsbGVyeUltYWdlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibWVkaWFHYWxsZXJ5Q29sdW1ucyIsImNvbnZlcnRlZENvbHVtbnMiLCJqIiwibGlnaHRCb3hJbWFnZUluZGV4IiwiY29uc3RydWN0SW1hZ2VEYXRhIiwiayIsInBhcnNlSW50Iiwic2hvd0xpZ2h0Ym94SW1hZ2UiLCJ1cGRhdGVTbGlkZUNvdW50ZXIiLCJ0b3RhbCIsImlubmVySFRNTCIsImFkZCIsImluZGV4IiwiZGlzcGxheVRpdGxlIiwiZGlzcGxheURlc2NyaXB0aW9uIiwiaW1hZ2VEYXRhIiwidXJsIiwicmVtb3ZlIiwicmVzZXRBdXRvcGxheSIsImZpbHRlciIsImN1cnJlbnQiLCJzZXRBdXRvcGxheU9mZiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBhdXNlIiwicGxheSIsInNldHVwS2V5Ym9hcmRMaWdodGJveENvbnRyb2xzIiwia2V5Ym9hcmRFdmVudCIsImtleUNvZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUEsQ0FBQyxZQUFZO0FBQ1osTUFBSUEsb0JBQW9CLEdBQUcsQ0FBM0I7QUFDQSxNQUFJQyxlQUFlLEdBQUcsS0FBdEI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxlQUFlLEdBQUcsRUFBdEI7QUFDQSxNQUFJQyxzQkFBc0IsR0FBRyxFQUE3QjtBQUNBLE1BQUlDLGlDQUFpQyxHQUFHLDBCQUN2QyxzREFEdUMsR0FFdkMs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LFlBQUFBLGFBQWE7QUFDYjtBQVRGO0FBV0E7QUFDRCxLQWREO0FBZUEsR0FsVFcsQ0FvVFo7OztBQUNBTCxFQUFBQSx5QkFBeUIsR0FyVGIsQ0FzVFo7O0FBQ0FnQixFQUFBQSxxQkFBcUIsR0F2VFQsQ0F3VFo7O0FBQ0E2RCxFQUFBQSw2QkFBNkI7QUFDN0IsQ0ExVEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdmFyOiAwLCBwcmVmZXItY29uc3Q6IDAgKi9cbid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0dmFyIGN1cnJlbnRMaWdodGJveEltYWdlID0gMDtcblx0dmFyIGxpZ2h0Ym94VmlzaWJsZSA9IGZhbHNlO1xuXHR2YXIgcHJlbG9hZGVkID0gZmFsc2U7XG5cdHZhciBwcmVsb2FkVXJscyA9IFtdO1xuXHR2YXIgcHJlbG9hZGVkSW1hZ2VzID0gW107XG5cdHZhciBpbWFnZXNUb1Nob3dJbkxpZ2h0Ym94ID0gW107XG5cdHZhciBOT05fTUVESUFfR0FMTEVSWV9JTUFHRVNfU0VMRUNUT1IgPSAnc2VjdGlvbi5saWdodGJveC1tb2RlJyArXG5cdFx0JyAuZ3JhcGhpYy1waXAtY29udGFpbmVyOm5vdCguZm9yY2UtZGlzYWJsZS1saWdodGJveCknICtcblx0XHQnIGltZ1tkYXRhLWxpZ2h0Ym94LXVybF0sIC5mb3JjZS1saWdodGJveCBpbWdbZGF0YS1saWdodGJveC11cmxdOm5vdChbZGF0YS1tZWRpYS1nYWxsZXJ5LWluZGV4XSknO1xuXHR2YXIgTUVESUFfR0FMTEVSWV9JTUFHRVNfU0VMRUNUT1IgPSAnaW1nW2RhdGEtbGlnaHRib3gtdXJsXVtkYXRhLW1lZGlhLWdhbGxlcnktaW5kZXhdJztcblx0dmFyIE1FRElBX0dBTExFUllfQ09MVU1OU19TRUxFQ1RPUiA9ICcubWVkaWEtZ2FsbGVyeV9fY29sdW1uJztcblx0dmFyIGF1dG9wbGF5SW50ZXJ2YWw7XG5cdHZhciBhdXRvcGxheVRpbWU7XG5cdHZhciBhdXRvcGxheU9uO1xuXG5cdC8vIFJ1biBhIGZ1bmN0aW9uIGZvciBlYWNoIGxpZ2h0Ym94IGltYWdlXG5cdGZ1bmN0aW9uIGZvckVhY2hMaWdodGJveEltYWdlKGltYWdlcywgY2FsbGJhY2spIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FsbGJhY2soaW1hZ2VzW2ldKTtcblx0XHR9XG5cdH1cblxuXHQvLyAxLiBBdHRhY2ggbGlzdGVuZXJzIHRvIHRoZSBsaWdodGJveCBjb21wb25lbnRcblx0ZnVuY3Rpb24gYXR0YWNoTGlzdGVuZXJzVG9MaWdodGJveCgpIHtcblx0XHR2YXIgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX2Nsb3NlLWJ0bicpO1xuXHRcdGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaWdodGJveCk7XG5cdFx0Y2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgd2luZG93LmkxOG5leHQudCgnbGlnaHRib3guY2xvc2UnKSk7XG5cblx0XHR2YXIgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX2NvdmVyJyk7XG5cdFx0Y292ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpZ2h0Ym94KTtcblxuXHRcdHZhciBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19uYXYtYnRuLS1uZXh0Jyk7XG5cdFx0bmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRMaWdodGJveEltYWdlKTtcblx0XHRuZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHdpbmRvdy5pMThuZXh0LnQoJ2xpZ2h0Ym94Lm5leHQnKSk7XG5cblx0XHR2YXIgcHJldmlvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX25hdi1idG4tLXByZXZpb3VzJyk7XG5cdFx0cHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2aW91c0xpZ2h0Ym94SW1hZ2UpO1xuXHRcdHByZXZpb3VzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHdpbmRvdy5pMThuZXh0LnQoJ2xpZ2h0Ym94LnByZXZpb3VzJykpO1xuXG5cdFx0dmFyIGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19pbWFnZScpO1xuXHRcdGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dExpZ2h0Ym94SW1hZ2UpO1xuXHR9XG5cblx0Ly8gMmEuIFJ1biB0aGUgZmlyc3QgdGltZSBzZXR1cCBmb3IgYWxsIGxpZ2h0Ym94IGltYWdlc1xuXHRmdW5jdGlvbiBwcmVwSW1hZ2VzRm9yTGlnaHRib3goKSB7XG5cdFx0dmFyIG5vbkdhbGxlcnlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE5PTl9NRURJQV9HQUxMRVJZX0lNQUdFU19TRUxFQ1RPUik7XG5cdFx0Zm9yRWFjaExpZ2h0Ym94SW1hZ2Uobm9uR2FsbGVyeUltYWdlcywgc2V0dXBMaWdodGJveEltYWdlKTtcblxuXHRcdHZhciBnYWxsZXJ5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChNRURJQV9HQUxMRVJZX0lNQUdFU19TRUxFQ1RPUik7XG5cdFx0Zm9yRWFjaExpZ2h0Ym94SW1hZ2UoZ2FsbGVyeUltYWdlcywgc2V0dXBMaWdodGJveEltYWdlKTtcblx0fVxuXG5cdC8vIDJiLiBEbyBhIGZpcnN0IHRpbWUgc2V0dXAgZm9yIGxpZ2h0Ym94IGltYWdlc1xuXHRmdW5jdGlvbiBzZXR1cExpZ2h0Ym94SW1hZ2UodGhpc0ltYWdlKSB7XG5cdFx0aWYgKHRoaXNJbWFnZS5kYXRhc2V0LmxpZ2h0Ym94VXJsKSB7XG5cdFx0XHRwcmVsb2FkVXJscy5wdXNoKHRoaXNJbWFnZS5kYXRhc2V0LmxpZ2h0Ym94VXJsKTtcblx0XHRcdHRoaXNJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEltYWdlc0ZvckxpZ2h0Ym94LmJpbmQodGhpc0ltYWdlLCB0aGlzSW1hZ2UpKTtcblx0XHRcdHRoaXNJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlUHJlbG9hZC5iaW5kKHRoaXNJbWFnZSwgdGhpc0ltYWdlKSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUHJlbG9hZCBhbGwgbGlnaHRib3ggaW1hZ2VzIHdoZW4gY2FsbGVkLiBPbmx5IHdvcmtzIG9uIGZpcnN0IGNhbGwuXG5cdGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoKSB7XG5cdFx0aWYgKCFwcmVsb2FkZWQpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHJlbG9hZFVybHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cHJlbG9hZGVkSW1hZ2VzW2ldID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdHByZWxvYWRlZEltYWdlc1tpXS5zcmMgPSBwcmVsb2FkVXJsc1tpXTtcblx0XHRcdH1cblxuXHRcdFx0cHJlbG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHQvLyBIYW5kbGVyIGZvciBvbiBob3ZlciBvbiBsaWdodGJveCBpbWFnZXNcblx0ZnVuY3Rpb24gaGFuZGxlUHJlbG9hZCh0aGlzSW1hZ2UpIHtcblx0XHR0aGlzSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhhbmRsZVByZWxvYWQpO1xuXHRcdHByZWxvYWRJbWFnZXMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbnZlcnRUb0FycmF5KG5vZGVMaXN0KSB7XG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuXHR9XG5cblx0LyogZS5nLiAzIGNvbHVtbnMgd2l0aCA0IGltYWdlcyB3aXRoIGRpc3BsYXllZCBUb3dlciBpbmRleCBhcyBzdWNoOlxuXHQqIDEgMyA0XG5cdCogMlxuXHQqIEJ1dCB0byB0aGUgdXNlciwgaXQgc2hvdWxkIHJlYWQgbGVmdCB0byByaWdodCBhbmQgc2hvdWxkIG9wZW4gdGhlIGdhbGxlcnkgbGlrZVxuXHQqIDEgMiAzXG5cdCogNFxuXHQqIFRoaXMgZnVuY3Rpb24gcGlja3Mgb2ZmIHRoZSB0b3AgaW1hZ2Ugb2YgZWFjaCBjb2x1bW5cblx0Ki9cblx0ZnVuY3Rpb24gb3JkZXJHYWxsZXJ5SW1hZ2VzKGNvbHVtbnMsIG9yZGVyZWRJbWFnZXMgPSBbXSkge1xuXHRcdHZhciBoYXNSZW1haW5pbmdJbWFnZXMgPSBmYWxzZTtcblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggY29sdW1uIGFuZCBwaWNrIG9mZiB0aGUgZmlyc3QgaW1hZ2Vcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpbWFnZSA9IGNvbHVtbnNbaV0uc2hpZnQoKTtcblx0XHRcdGlmIChpbWFnZSkge1xuXHRcdFx0XHRvcmRlcmVkSW1hZ2VzLnB1c2goaW1hZ2UpO1xuXHRcdFx0XHRoYXNSZW1haW5pbmdJbWFnZXMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBJZiBhbnkgY29sdW1uIGhhcyByZW1haW5pbmcgaW1hZ2VzLCByZWN1cnNpdmVseSBjYWxsIGFnYWluXG5cdFx0aWYgKGhhc1JlbWFpbmluZ0ltYWdlcykge1xuXHRcdFx0cmV0dXJuIG9yZGVyR2FsbGVyeUltYWdlcyhjb2x1bW5zLCBvcmRlcmVkSW1hZ2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9yZGVyZWRJbWFnZXM7XG5cdFx0fVxuXHR9XG5cblx0Ly8gMmMuIFdoZW4gYW4gaW1hZ2UgaXMgY2xpY2tlZCwgaXQgZmlndXJlcyBvdXQgd2hpY2ggaW1hZ2VzIHNob3VsZCBiZSBsb2FkZWQgaW4gdGhlIGxpZ2h0Ym94XG5cdGZ1bmN0aW9uIGdldEltYWdlc0ZvckxpZ2h0Ym94KGltYWdlRWwpIHtcblx0XHR2YXIgbWVkaWFHYWxsZXJ5SW5kZXggPSBpbWFnZUVsLmRhdGFzZXQubWVkaWFHYWxsZXJ5SW5kZXg7XG5cblx0XHRpZiAobWVkaWFHYWxsZXJ5SW5kZXgpIHtcblx0XHRcdHZhciBtZWRpYUdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b3dlci1pZD1cIicgKyBtZWRpYUdhbGxlcnlJbmRleCArICdcIl0nKTtcblxuXHRcdFx0aWYgKG1lZGlhR2FsbGVyeS5kYXRhc2V0LmxpZ2h0Ym94QXV0b3BsYXkgPT09ICd0cnVlJykge1xuXHRcdFx0XHRhdXRvcGxheVRpbWUgPSBtZWRpYUdhbGxlcnkuZGF0YXNldC5saWdodGJveEF1dG9wbGF5VGltZTtcblx0XHRcdFx0c2V0QXV0b3BsYXlPbigpO1xuXHRcdFx0XHRzZXR1cFBhdXNlQW5kUGxheUJ1dHRvbigpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWVkaWFHYWxsZXJ5SW1hZ2VzO1xuXG5cdFx0XHRpZiAobWVkaWFHYWxsZXJ5LmNsYXNzTGlzdC5jb250YWlucygnbWVkaWEtZ2FsbGVyeS0tbWFzb25yeScpKSB7XG5cdFx0XHRcdHZhciBtZWRpYUdhbGxlcnlDb2x1bW5zID0gY29udmVydFRvQXJyYXkobWVkaWFHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3JBbGwoTUVESUFfR0FMTEVSWV9DT0xVTU5TX1NFTEVDVE9SKSk7XG5cdFx0XHRcdHZhciBjb252ZXJ0ZWRDb2x1bW5zID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWFHYWxsZXJ5Q29sdW1ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnZlcnRlZENvbHVtbnNcblx0XHRcdFx0XHRcdC5wdXNoKGNvbnZlcnRUb0FycmF5KG1lZGlhR2FsbGVyeUNvbHVtbnNbaV0ucXVlcnlTZWxlY3RvckFsbChNRURJQV9HQUxMRVJZX0lNQUdFU19TRUxFQ1RPUikpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEJlY2F1c2UgbWVkaWEgZ2FsbGVyeSBhcnJhbmdlcyB0aGUgaW1hZ2VzIGluIGNvbHVtbiwgd2UgbmVlZCB0byBzZXF1ZW50aWFsbHkgZ2V0IHRoZSBmaXJzdCBpbWFnZVxuXHRcdFx0XHQvLyBpbiBlYWNoIGNvbHVtbiB0byBvcmRlciB0aGVtIGNvcnJlY3RseVxuXHRcdFx0XHRtZWRpYUdhbGxlcnlJbWFnZXMgPSBvcmRlckdhbGxlcnlJbWFnZXMoY29udmVydGVkQ29sdW1ucywgW10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVkaWFHYWxsZXJ5SW1hZ2VzID0gY29udmVydFRvQXJyYXkobWVkaWFHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3JBbGwoTUVESUFfR0FMTEVSWV9JTUFHRVNfU0VMRUNUT1IpKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtZWRpYUdhbGxlcnlJbWFnZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0dmFyIGltYWdlID0gbWVkaWFHYWxsZXJ5SW1hZ2VzW2pdO1xuXHRcdFx0XHRpbWFnZS5kYXRhc2V0LmxpZ2h0Qm94SW1hZ2VJbmRleCA9IGo7XG5cdFx0XHRcdGltYWdlc1RvU2hvd0luTGlnaHRib3gucHVzaChjb25zdHJ1Y3RJbWFnZURhdGEoaW1hZ2UsIGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG5vbkdhbGxlcnlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE5PTl9NRURJQV9HQUxMRVJZX0lNQUdFU19TRUxFQ1RPUik7XG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IG5vbkdhbGxlcnlJbWFnZXMubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0bm9uR2FsbGVyeUltYWdlc1trXS5kYXRhc2V0LmxpZ2h0Qm94SW1hZ2VJbmRleCA9IGs7XG5cdFx0XHRcdGltYWdlc1RvU2hvd0luTGlnaHRib3gucHVzaChjb25zdHJ1Y3RJbWFnZURhdGEobm9uR2FsbGVyeUltYWdlc1trXSwgaykpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN1cnJlbnRMaWdodGJveEltYWdlID0gcGFyc2VJbnQoaW1hZ2VFbC5kYXRhc2V0LmxpZ2h0Qm94SW1hZ2VJbmRleCk7XG5cdFx0c2hvd0xpZ2h0Ym94SW1hZ2UoaW1hZ2VzVG9TaG93SW5MaWdodGJveFtjdXJyZW50TGlnaHRib3hJbWFnZV0pO1xuXHRcdHVwZGF0ZVNsaWRlQ291bnRlcihjdXJyZW50TGlnaHRib3hJbWFnZSk7XG5cblx0XHR2YXIgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX3NsaWRlLWNvdW50ZXJfX3RvdGFsJyk7XG5cdFx0dG90YWwuaW5uZXJIVE1MID0gaW1hZ2VzVG9TaG93SW5MaWdodGJveC5sZW5ndGg7XG5cblx0XHRsaWdodGJveFZpc2libGUgPSB0cnVlO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveCcpLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94LS12aXNpYmxlJyk7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XG5cdH1cblxuXHQvLyAyZC4gQ29uc3RydWN0IGltYWdlIGRhdGEgZm9yIHRoZSBsaWdodGJveFxuXHRmdW5jdGlvbiBjb25zdHJ1Y3RJbWFnZURhdGEoaW1hZ2VFbCwgaW5kZXgpIHtcblx0XHR2YXIgZGlzcGxheVRpdGxlID0gaW1hZ2VFbC5kYXRhc2V0LmRpc3BsYXlUaXRsZTtcblx0XHR2YXIgZGlzcGxheURlc2NyaXB0aW9uID0gaW1hZ2VFbC5kYXRhc2V0LmRpc3BsYXlEZXNjcmlwdGlvbjtcblx0XHR2YXIgaW1hZ2VEYXRhID0ge1xuXHRcdFx0aW5kZXgsXG5cdFx0XHR1cmw6IGltYWdlRWwuZGF0YXNldC5saWdodGJveFVybCxcblx0XHR9O1xuXG5cdFx0aWYgKGRpc3BsYXlUaXRsZSkge1xuXHRcdFx0aW1hZ2VEYXRhLmRpc3BsYXlUaXRsZSA9IGRpc3BsYXlUaXRsZTtcblx0XHR9XG5cblx0XHRpZiAoZGlzcGxheURlc2NyaXB0aW9uKSB7XG5cdFx0XHRpbWFnZURhdGEuZGlzcGxheURlc2NyaXB0aW9uID0gZGlzcGxheURlc2NyaXB0aW9uO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbWFnZURhdGE7XG5cdH1cblxuXHQvLyAyZS4gU2hvdyBhIGdpdmVuIGltYWdlIGVsZW1lbnQgaW4gdGhlIGxpZ2h0Ym94XG5cdGZ1bmN0aW9uIHNob3dMaWdodGJveEltYWdlKGltYWdlRGF0YSkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveF9faW1hZ2UnKS5zcmMgPSBpbWFnZURhdGEudXJsO1xuXG5cdFx0dmFyIGRpc3BsYXlUaXRsZSA9IGltYWdlRGF0YS5kaXNwbGF5VGl0bGU7XG5cdFx0dmFyIGRpc3BsYXlEZXNjcmlwdGlvbiA9IGltYWdlRGF0YS5kaXNwbGF5RGVzY3JpcHRpb247XG5cblx0XHRpZiAoZGlzcGxheVRpdGxlIHx8IGRpc3BsYXlEZXNjcmlwdGlvbikge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19pbmZvJykuY2xhc3NMaXN0LmFkZCgnbGlnaHRib3hfX2luZm8tLXZpc2libGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19pbmZvJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3hfX2luZm8tLXZpc2libGUnKTtcblx0XHR9XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX3RpdGxlJykuaW5uZXJIVE1MID0gZGlzcGxheVRpdGxlIHx8ICcnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveF9fZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkaXNwbGF5RGVzY3JpcHRpb24gfHwgJyc7XG5cdH1cblxuXHQvLyBTaG93IHRoZSBuZXh0IGxpZ2h0Ym94IGltYWdlXG5cdGZ1bmN0aW9uIG5leHRMaWdodGJveEltYWdlKCkge1xuXHRcdGN1cnJlbnRMaWdodGJveEltYWdlICs9IDE7XG5cdFx0aWYgKGF1dG9wbGF5T24pIHtcblx0XHRcdHJlc2V0QXV0b3BsYXkoKTtcblx0XHR9XG5cdFx0aWYgKGN1cnJlbnRMaWdodGJveEltYWdlID49IGltYWdlc1RvU2hvd0luTGlnaHRib3gubGVuZ3RoKSB7XG5cdFx0XHRjdXJyZW50TGlnaHRib3hJbWFnZSA9IDA7XG5cdFx0fVxuXG5cdFx0dXBkYXRlU2xpZGVDb3VudGVyKGN1cnJlbnRMaWdodGJveEltYWdlKTtcblxuXHRcdHNob3dMaWdodGJveEltYWdlKGltYWdlc1RvU2hvd0luTGlnaHRib3guZmlsdGVyKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0cmV0dXJuIGltYWdlLmluZGV4ID09PSBjdXJyZW50TGlnaHRib3hJbWFnZTtcblx0XHR9KVswXSk7XG5cdH1cblxuXHQvLyBTaG93IHRoZSBwcmV2aW91cyBsaWdodGJveCBpbWFnZVxuXHRmdW5jdGlvbiBwcmV2aW91c0xpZ2h0Ym94SW1hZ2UoKSB7XG5cdFx0Y3VycmVudExpZ2h0Ym94SW1hZ2UgLT0gMTtcblx0XHRpZiAoYXV0b3BsYXlPbikge1xuXHRcdFx0cmVzZXRBdXRvcGxheSgpO1xuXHRcdH1cblx0XHRpZiAoY3VycmVudExpZ2h0Ym94SW1hZ2UgPCAwKSB7XG5cdFx0XHRjdXJyZW50TGlnaHRib3hJbWFnZSA9IGltYWdlc1RvU2hvd0luTGlnaHRib3gubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHR1cGRhdGVTbGlkZUNvdW50ZXIoY3VycmVudExpZ2h0Ym94SW1hZ2UpO1xuXG5cdFx0c2hvd0xpZ2h0Ym94SW1hZ2UoaW1hZ2VzVG9TaG93SW5MaWdodGJveC5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHRyZXR1cm4gaW1hZ2UuaW5kZXggPT09IGN1cnJlbnRMaWdodGJveEltYWdlO1xuXHRcdH0pWzBdKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlQ291bnRlcigpIHtcblx0XHR2YXIgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveF9fc2xpZGUtY291bnRlcl9fY3VycmVudCcpO1xuXHRcdGN1cnJlbnQuaW5uZXJIVE1MID0gY3VycmVudExpZ2h0Ym94SW1hZ2UgKyAxO1xuXHR9XG5cblx0Ly8gQ2xvc2UgdGhlIGxpZ2h0Ym94XG5cdGZ1bmN0aW9uIGNsb3NlTGlnaHRib3goKSB7XG5cdFx0c2V0QXV0b3BsYXlPZmYoKTtcblx0XHRsaWdodGJveFZpc2libGUgPSBmYWxzZTtcblx0XHRpbWFnZXNUb1Nob3dJbkxpZ2h0Ym94ID0gW107XG5cdFx0Y3VycmVudExpZ2h0Ym94SW1hZ2UgPSAwO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveF9faW1hZ2UnKS5zcmMgPSAnJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX3RpdGxlJykuaW5uZXJIVE1MID0gJyc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9ICcnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LS12aXNpYmxlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0QXV0b3BsYXlPbigpIHtcblx0XHRhdXRvcGxheU9uID0gdHJ1ZTtcblx0XHRhdXRvcGxheUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0bmV4dExpZ2h0Ym94SW1hZ2UoKTtcblx0XHR9LCBhdXRvcGxheVRpbWUgKiAxMDAwKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX3BsYXktYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3hfX2J0bi0tdmlzaWJsZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodGJveF9fcGF1c2UtYnRuJykuY2xhc3NMaXN0LmFkZCgnbGlnaHRib3hfX2J0bi0tdmlzaWJsZScpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0QXV0b3BsYXlPZmYoKSB7XG5cdFx0YXV0b3BsYXlPbiA9IGZhbHNlO1xuXHRcdGNsZWFySW50ZXJ2YWwoYXV0b3BsYXlJbnRlcnZhbCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19wYXVzZS1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodGJveF9fYnRuLS12aXNpYmxlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0Ym94X19wbGF5LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94X19idG4tLXZpc2libGUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2V0QXV0b3BsYXkoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbChhdXRvcGxheUludGVydmFsKTtcblx0XHRhdXRvcGxheUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0bmV4dExpZ2h0Ym94SW1hZ2UoKTtcblx0XHR9LCBhdXRvcGxheVRpbWUgKiAxMDAwKTtcblx0fVxuXG5cdC8vIEFkZCBhdXRvcGxheSBwYXVzZS9wbGF5IGJ1dHRvblxuXHRmdW5jdGlvbiBzZXR1cFBhdXNlQW5kUGxheUJ1dHRvbigpIHtcblx0XHR2YXIgcGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX3BhdXNlLWJ0bicpO1xuXHRcdHBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0QXV0b3BsYXlPZmYpO1xuXHRcdHBhdXNlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHdpbmRvdy5pMThuZXh0LnQoJ2xpZ2h0Ym94LnBhdXNlJykpO1xuXG5cdFx0dmFyIHBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRib3hfX3BsYXktYnRuJyk7XG5cdFx0cGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEF1dG9wbGF5T24pO1xuXHRcdHBsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgd2luZG93LmkxOG5leHQudCgnbGlnaHRib3gucGxheScpKTtcblx0fVxuXG5cdC8vIDQuIEFkZCB0aGUga2V5Ym9hcmQgbGlzdGVuZXJzXG5cdGZ1bmN0aW9uIHNldHVwS2V5Ym9hcmRMaWdodGJveENvbnRyb2xzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGtleWJvYXJkRXZlbnQpIHtcblx0XHRcdGlmIChsaWdodGJveFZpc2libGUpIHtcblx0XHRcdFx0c3dpdGNoIChrZXlib2FyZEV2ZW50LmtleUNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDM3OlxuXHRcdFx0XHRcdFx0cHJldmlvdXNMaWdodGJveEltYWdlKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM5OlxuXHRcdFx0XHRcdFx0bmV4dExpZ2h0Ym94SW1hZ2UoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMjc6XG5cdFx0XHRcdFx0XHRjbG9zZUxpZ2h0Ym94KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gMS4gQXR0YWNoIHRoZSBsaXN0ZW5lcnMgdG8gdGhlIGxpZ2h0Ym94IGNvbXBvbmVudFxuXHRhdHRhY2hMaXN0ZW5lcnNUb0xpZ2h0Ym94KCk7XG5cdC8vIDIuIFByZXAgZWFjaCBsaWdodGJveCBieSBhdHRhY2hpbmcgY2xpY2sgaGFuZGxlcnMgYW5kIHByZWxvYWRpbmcgdGhlIGltYWdlc1xuXHRwcmVwSW1hZ2VzRm9yTGlnaHRib3goKTtcblx0Ly8gMy4gQWRkIGtleWJvYXJkIGxpc3RlbmVycyBmb3IgdGhlIGxpZ2h0Ym94XG5cdHNldHVwS2V5Ym9hcmRMaWdodGJveENvbnRyb2xzKCk7XG59KSgpO1xuIl19

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  /* polyfill for closest() */
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  var CAROUSEL_BLOCK_SELECTOR = '[data-is-carousel-block="true"]';
  var CAROUSEL_SELECTOR = '.block-content.carousel';
  var FACE_WRAPPER_SELECTOR = '.carousel-faces';
  var BACKGROUND_SELECTOR = '.block-background';
  var FACE_SELECTOR = FACE_WRAPPER_SELECTOR + ' .carousel-face';
  var CURRENT_FACE_SELECTOR = FACE_WRAPPER_SELECTOR + ' .current';
  var SWIPE_THRESHOLD = 50;

  function getCarouselBlocks() {
    return document.querySelectorAll(CAROUSEL_SELECTOR);
  }

  function getCarouselFaces(blockContent) {
    return blockContent.querySelectorAll(FACE_SELECTOR);
  } // Run a function for each element in the array


  function forEachElement(elements, callback) {
    for (var i = 0; i < elements.length; i++) {
      callback(elements[i], i);
    }
  } // Set the transitioning class on the face wrapper and attach listener for its transitionend


  function setTransitionState(block, currentFace) {
    var faceWrapper = block.querySelector(FACE_WRAPPER_SELECTOR);
    faceWrapper.classList.add('transitioning');
    currentFace.addEventListener(currentFace.style.WebkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend', removeTransitionState.bind(null, block));
  } // Remove the transition class and event when the animation has ended


  function removeTransitionState(block, transitionEvent) {
    if (!transitionEvent.target.classList.contains('carousel-face')) {
      return;
    }

    transitionEvent.target.parentNode.classList.remove('transitioning');
    transitionEvent.target.removeEventListener(transitionEvent.type, this.removeTransitionState);
  } // Returns the currently selected block face index


  function getCurrentFaceIndex(blockContent) {
    var faces = getCarouselFaces(blockContent);
    var currentFace = blockContent.querySelector(CURRENT_FACE_SELECTOR);
    return Array.prototype.indexOf.call(faces, currentFace);
  }

  function selectNextCarouselFace(blockContent) {
    selectCarouselFace(getCurrentFaceIndex(blockContent) + 1, blockContent);
  }

  function selectPreviousCarouselFace(blockContent) {
    selectCarouselFace(getCurrentFaceIndex(blockContent) - 1, blockContent);
  } // Handles the selection of a carousel face


  function selectCarouselFace(selectedIndex, blockContent) {
    var faces = getCarouselFaces(blockContent);
    var previousFace = blockContent.querySelector(CURRENT_FACE_SELECTOR);
    var previousIndex = Array.prototype.indexOf.call(faces, previousFace);
    var backgrounds = blockContent.closest(CAROUSEL_BLOCK_SELECTOR).querySelectorAll(BACKGROUND_SELECTOR); // Cycle through faces if we're at the end

    if (selectedIndex < 0) {
      selectedIndex = faces.length - 1;
    } else if (selectedIndex >= faces.length) {
      selectedIndex = 0;
    } // only hide/show backgrounds if the carousel has multiple backgrounds set


    if (backgrounds.length > 1) {
      forEachElement(backgrounds, function (background, index) {
        if (selectedIndex === index) {
          // show current background
          background.removeAttribute('hidden');
        } else {
          // hide background
          background.setAttribute('hidden', true);
        }
      });
    }

    setTransitionState(blockContent, faces[selectedIndex]);
    forEachElement(getCarouselFaces(blockContent), function (face, index) {
      if (index === selectedIndex) {
        face.classList.add('current');
        face.classList.remove('left');
        face.classList.remove('right');
        face.classList.remove('previous');
      } else {
        face.classList.remove('current');

        if (index === previousIndex) {
          face.classList.add('previous');
        } else {
          face.classList.remove('previous');
        }

        if (index > selectedIndex) {
          face.classList.remove('left');
          face.classList.add('right');
        } else {
          face.classList.add('left');
          face.classList.remove('right');
        }
      }
    });
  }

  function setContainerHeight(blockContent) {
    // Set the height of the faces container to equal the height of the tallest face
    var maxFaceHeight = 0;
    forEachElement(blockContent.querySelectorAll('.carousel-face'), function (face) {
      var faceHeight = face.getBoundingClientRect().height;

      if (faceHeight > maxFaceHeight) {
        maxFaceHeight = faceHeight;
      }
    });
    blockContent.querySelector('.carousel-faces').style.height = maxFaceHeight + 'px';
  } // Initialize all the listeners we need for clickable elements


  forEachElement(getCarouselBlocks(), function (blockContent) {
    var swipeStartX = 0;
    blockContent.addEventListener('touchstart', function (event) {
      var touchInfo = event.changedTouches[0];
      swipeStartX = touchInfo.pageX;
    });
    blockContent.addEventListener('touchend', function (event) {
      var touchInfo = event.changedTouches[0];
      var swipeEndX = touchInfo.pageX;
      var swipeDiff = swipeStartX - swipeEndX; // Swipe right

      if (swipeDiff > SWIPE_THRESHOLD) {
        selectNextCarouselFace(blockContent);
      } else if (swipeDiff < -1 * SWIPE_THRESHOLD) {
        selectPreviousCarouselFace(blockContent);
      }
    });
    var dataset = blockContent.dataset;

    if (dataset.autoplayDelayTime) {
      var autoplayDelayTime = dataset.autoplayDelayTime;
      setInterval(selectNextCarouselFace.bind(null, blockContent), autoplayDelayTime * 1000);
    } // Attach click listners for the side controls.


    forEachElement(blockContent.querySelectorAll('.face-control-side'), function (control) {
      if (control.classList.contains('left')) {
        control.addEventListener('click', selectPreviousCarouselFace.bind(null, blockContent));
      } else if (control.classList.contains('right')) {
        control.addEventListener('click', selectNextCarouselFace.bind(null, blockContent));
      }
    });
    window.setTimeout(setContainerHeight.bind(null, blockContent), 1);
    window.addEventListener('resize', setContainerHeight.bind(null, blockContent));
    var imagesInCarousel = blockContent.querySelectorAll('.carousel-face img');
    var imagesLoaded = 0;
    forEachElement(imagesInCarousel, function (image) {
      var imageToLoad = new Image();

      imageToLoad.onload = function () {
        imagesLoaded++;

        if (imagesLoaded === imagesInCarousel.length) {
          setContainerHeight(blockContent);
        }
      };

      imageToLoad.src = image.getAttribute('src');
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9jYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicHJvdG90eXBlIiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiY2xvc2VzdCIsInMiLCJlbCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwibm9kZVR5cGUiLCJDQVJPVVNFTF9CTE9DS19TRUxFQ1RPUiIsIkNBUk9VU0VMX1NFTEVDVE9SIiwiRkFDRV9XUkFQUEVSX1NFTEVDVE9SIiwiQkFDS0dST1VORF9TRUxFQ1RPUiIsIkZBQ0VfU0VMRUNUT1IiLCJDVVJSRU5UX0ZBQ0VfU0VMRUNUT1IiLCJTV0lQRV9USFJFU0hPTEQiLCJnZXRDYXJvdXNlbEJsb2NrcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdldENhcm91c2VsRmFjZXMiLCJibG9ja0NvbnRlbnQiLCJmb3JFYWNoRWxlbWVudCIsImVsZW1lbnRzIiwiY2FsbGJhY2siLCJpIiwibGVuZ3RoIiwic2V0VHJhbnNpdGlvblN0YXRlIiwiYmxvY2siLCJjdXJyZW50RmFjZSIsImZhY2VXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJyZW1vdmVUcmFuc2l0aW9uU3RhdGUiLCJiaW5kIiwidHJhbnNpdGlvbkV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHlwZSIsImdldEN1cnJlbnRGYWNlSW5kZXgiLCJmYWNlcyIsIkFycmF5IiwiaW5kZXhPZiIsImNhbGwiLCJzZWxlY3ROZXh0Q2Fyb3VzZWxGYWNlIiwic2VsZWN0Q2Fyb3VzZWxGYWNlIiwic2VsZWN0UHJldmlvdXNDYXJvdXNlbEZhY2UiLCJzZWxlY3RlZEluZGV4IiwicHJldmlvdXNGYWNlIiwicHJldmlvdXNJbmRleCIsImJhY2tncm91bmRzIiwiYmFja2dyb3VuZCIsImluZGV4IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZmFjZSIsInNldENvbnRhaW5lckhlaWdodCIsIm1heEZhY2VIZWlnaHQiLCJmYWNlSGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3dpcGVTdGFydFgiLCJldmVudCIsInRvdWNoSW5mbyIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJzd2lwZUVuZFgiLCJzd2lwZURpZmYiLCJkYXRhc2V0IiwiYXV0b3BsYXlEZWxheVRpbWUiLCJzZXRJbnRlcnZhbCIsImNvbnRyb2wiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaW1hZ2VzSW5DYXJvdXNlbCIsImltYWdlc0xvYWRlZCIsImltYWdlIiwiaW1hZ2VUb0xvYWQiLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSxDQUFDLFlBQVk7QUFFWjtBQUNBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxPQUF2QixFQUFnQztBQUMvQkYsSUFBQUEsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxPQUFsQixHQUE0QkYsT0FBTyxDQUFDQyxTQUFSLENBQWtCRSxpQkFBbEIsSUFDckJILE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkcscUJBRHpCO0FBRUE7O0FBRUQsTUFBSSxDQUFDSixPQUFPLENBQUNDLFNBQVIsQ0FBa0JJLE9BQXZCLEVBQWdDO0FBQy9CTCxJQUFBQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JJLE9BQWxCLEdBQTRCLFVBQVVDLENBQVYsRUFBYTtBQUN4QyxVQUFJQyxFQUFFLEdBQUcsSUFBVDs7QUFFQSxTQUFHO0FBQ0YsWUFBSUEsRUFBRSxDQUFDTCxPQUFILENBQVdJLENBQVgsQ0FBSixFQUFtQjtBQUNsQixpQkFBT0MsRUFBUDtBQUNBOztB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Z0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NpQixzQkFBc0IsQ0FBQ1osSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NsQixZQUFsQyxDQUFsQztBQUNBO0FBQ0QsS0FOYSxDQUFkO0FBUUEwRCxJQUFBQSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JqQixrQkFBa0IsQ0FBQ3hCLElBQW5CLENBQXdCLElBQXhCLEVBQThCbEIsWUFBOUIsQ0FBbEIsRUFBK0QsQ0FBL0Q7QUFDQTBELElBQUFBLE1BQU0sQ0FBQzdDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDNkIsa0JBQWtCLENBQUN4QixJQUFuQixDQUF3QixJQUF4QixFQUE4QmxCLFlBQTlCLENBQWxDO0FBQ0EsUUFBSTRELGdCQUFnQixHQUFHNUQsWUFBWSxDQUFDRixnQkFBYixDQUE4QixvQkFBOUIsQ0FBdkI7QUFDQSxRQUFJK0QsWUFBWSxHQUFHLENBQW5CO0FBQ0E1RCxJQUFBQSxjQUFjLENBQUMyRCxnQkFBRCxFQUFtQixVQUFVRSxLQUFWLEVBQWlCO0FBQ2pELFVBQUlDLFdBQVcsR0FBRyxJQUFJQyxLQUFKLEVBQWxCOztBQUNBRCxNQUFBQSxXQUFXLENBQUNFLE1BQVosR0FBcUIsWUFBWTtBQUNoQ0osUUFBQUEsWUFBWTs7QUFDWixZQUFJQSxZQUFZLEtBQUtELGdCQUFnQixDQUFDdkQsTUFBdEMsRUFBOEM7QUFDN0NxQyxVQUFBQSxrQkFBa0IsQ0FBQzFDLFlBQUQsQ0FBbEI7QUFDQTtBQUNELE9BTEQ7O0FBTUErRCxNQUFBQSxXQUFXLENBQUNHLEdBQVosR0FBa0JKLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixLQUFuQixDQUFsQjtBQUNBLEtBVGEsQ0FBZDtBQVVBLEdBbERhLENBQWQ7QUFtREEsQ0F2TUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdmFyOiAwLCBwcmVmZXItY29uc3Q6IDAgKi9cbid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQvKiBwb2x5ZmlsbCBmb3IgY2xvc2VzdCgpICovXG5cdGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXHR9XG5cblx0aWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG5cdFx0RWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChzKSB7XG5cdFx0XHR2YXIgZWwgPSB0aGlzO1xuXG5cdFx0XHRkbyB7XG5cdFx0XHRcdGlmIChlbC5tYXRjaGVzKHMpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsID0gZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlO1xuXHRcdFx0fSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fTtcblx0fVxuXG5cdHZhciBDQVJPVVNFTF9CTE9DS19TRUxFQ1RPUiA9ICdbZGF0YS1pcy1jYXJvdXNlbC1ibG9jaz1cInRydWVcIl0nO1xuXHR2YXIgQ0FST1VTRUxfU0VMRUNUT1IgPSAnLmJsb2NrLWNvbnRlbnQuY2Fyb3VzZWwnO1xuXHR2YXIgRkFDRV9XUkFQUEVSX1NFTEVDVE9SID0gJy5jYXJvdXNlbC1mYWNlcyc7XG5cdHZhciBCQUNLR1JPVU5EX1NFTEVDVE9SID0gJy5ibG9jay1iYWNrZ3JvdW5kJztcblx0dmFyIEZBQ0VfU0VMRUNUT1IgPSBGQUNFX1dSQVBQRVJfU0VMRUNUT1IgKyAnIC5jYXJvdXNlbC1mYWNlJztcblx0dmFyIENVUlJFTlRfRkFDRV9TRUxFQ1RPUiA9IEZBQ0VfV1JBUFBFUl9TRUxFQ1RPUiArICcgLmN1cnJlbnQnO1xuXHR2YXIgU1dJUEVfVEhSRVNIT0xEID0gNTA7XG5cblx0ZnVuY3Rpb24gZ2V0Q2Fyb3VzZWxCbG9ja3MoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ0FST1VTRUxfU0VMRUNUT1IpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2Fyb3VzZWxGYWNlcyhibG9ja0NvbnRlbnQpIHtcblx0XHRyZXR1cm4gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRkFDRV9TRUxFQ1RPUik7XG5cdH1cblxuXHQvLyBSdW4gYSBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheVxuXHRmdW5jdGlvbiBmb3JFYWNoRWxlbWVudChlbGVtZW50cywgY2FsbGJhY2spIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYWxsYmFjayhlbGVtZW50c1tpXSwgaSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSB0cmFuc2l0aW9uaW5nIGNsYXNzIG9uIHRoZSBmYWNlIHdyYXBwZXIgYW5kIGF0dGFjaCBsaXN0ZW5lciBmb3IgaXRzIHRyYW5zaXRpb25lbmRcblx0ZnVuY3Rpb24gc2V0VHJhbnNpdGlvblN0YXRlKGJsb2NrLCBjdXJyZW50RmFjZSkge1xuXHRcdHZhciBmYWNlV3JhcHBlciA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoRkFDRV9XUkFQUEVSX1NFTEVDVE9SKTtcblx0XHRmYWNlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uaW5nJyk7XG5cdFx0Y3VycmVudEZhY2UuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdChjdXJyZW50RmFjZS5zdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpID8gJ3dlYmtpdFRyYW5zaXRpb25FbmQnIDogJ3RyYW5zaXRpb25lbmQnLFxuXHRcdFx0cmVtb3ZlVHJhbnNpdGlvblN0YXRlLmJpbmQobnVsbCwgYmxvY2spKTtcblx0fVxuXG5cdC8vIFJlbW92ZSB0aGUgdHJhbnNpdGlvbiBjbGFzcyBhbmQgZXZlbnQgd2hlbiB0aGUgYW5pbWF0aW9uIGhhcyBlbmRlZFxuXHRmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uU3RhdGUoYmxvY2ssIHRyYW5zaXRpb25FdmVudCkge1xuXHRcdGlmICghdHJhbnNpdGlvbkV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsLWZhY2UnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cmFuc2l0aW9uRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbmluZycpO1xuXHRcdHRyYW5zaXRpb25FdmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQudHlwZSwgdGhpcy5yZW1vdmVUcmFuc2l0aW9uU3RhdGUpO1xuXHR9XG5cblx0Ly8gUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGJsb2NrIGZhY2UgaW5kZXhcblx0ZnVuY3Rpb24gZ2V0Q3VycmVudEZhY2VJbmRleChibG9ja0NvbnRlbnQpIHtcblx0XHR2YXIgZmFjZXMgPSBnZXRDYXJvdXNlbEZhY2VzKGJsb2NrQ29udGVudCk7XG5cdFx0dmFyIGN1cnJlbnRGYWNlID0gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoQ1VSUkVOVF9GQUNFX1NFTEVDVE9SKTtcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChmYWNlcywgY3VycmVudEZhY2UpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0TmV4dENhcm91c2VsRmFjZShibG9ja0NvbnRlbnQpIHtcblx0XHRzZWxlY3RDYXJvdXNlbEZhY2UoZ2V0Q3VycmVudEZhY2VJbmRleChibG9ja0NvbnRlbnQpICsgMSwgYmxvY2tDb250ZW50KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdFByZXZpb3VzQ2Fyb3VzZWxGYWNlKGJsb2NrQ29udGVudCkge1xuXHRcdHNlbGVjdENhcm91c2VsRmFjZShnZXRDdXJyZW50RmFjZUluZGV4KGJsb2NrQ29udGVudCkgLSAxLCBibG9ja0NvbnRlbnQpO1xuXHR9XG5cblx0Ly8gSGFuZGxlcyB0aGUgc2VsZWN0aW9uIG9mIGEgY2Fyb3VzZWwgZmFjZVxuXHRmdW5jdGlvbiBzZWxlY3RDYXJvdXNlbEZhY2Uoc2VsZWN0ZWRJbmRleCwgYmxvY2tDb250ZW50KSB7XG5cdFx0dmFyIGZhY2VzID0gZ2V0Q2Fyb3VzZWxGYWNlcyhibG9ja0NvbnRlbnQpO1xuXHRcdHZhciBwcmV2aW91c0ZhY2UgPSBibG9ja0NvbnRlbnQucXVlcnlTZWxlY3RvcihDVVJSRU5UX0ZBQ0VfU0VMRUNUT1IpO1xuXHRcdHZhciBwcmV2aW91c0luZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChmYWNlcywgcHJldmlvdXNGYWNlKTtcblxuXHRcdHZhciBiYWNrZ3JvdW5kcyA9IGJsb2NrQ29udGVudFxuXHRcdFx0LmNsb3Nlc3QoQ0FST1VTRUxfQkxPQ0tfU0VMRUNUT1IpXG5cdFx0XHQucXVlcnlTZWxlY3RvckFsbChCQUNLR1JPVU5EX1NFTEVDVE9SKTtcblxuXHRcdC8vIEN5Y2xlIHRocm91Z2ggZmFjZXMgaWYgd2UncmUgYXQgdGhlIGVuZFxuXHRcdGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuXHRcdFx0c2VsZWN0ZWRJbmRleCA9IGZhY2VzLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID49IGZhY2VzLmxlbmd0aCkge1xuXHRcdFx0c2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gb25seSBoaWRlL3Nob3cgYmFja2dyb3VuZHMgaWYgdGhlIGNhcm91c2VsIGhhcyBtdWx0aXBsZSBiYWNrZ3JvdW5kcyBzZXRcblx0XHRpZiAoYmFja2dyb3VuZHMubGVuZ3RoID4gMSkge1xuXHRcdFx0Zm9yRWFjaEVsZW1lbnQoYmFja2dyb3VuZHMsIGZ1bmN0aW9uIChiYWNrZ3JvdW5kLCBpbmRleCkge1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgpIHtcblx0XHRcdFx0XHQvLyBzaG93IGN1cnJlbnQgYmFja2dyb3VuZFxuXHRcdFx0XHRcdGJhY2tncm91bmQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoaWRlIGJhY2tncm91bmRcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHNldFRyYW5zaXRpb25TdGF0ZShibG9ja0NvbnRlbnQsIGZhY2VzW3NlbGVjdGVkSW5kZXhdKTtcblxuXHRcdGZvckVhY2hFbGVtZW50KGdldENhcm91c2VsRmFjZXMoYmxvY2tDb250ZW50KSwgZnVuY3Rpb24gKGZhY2UsIGluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPT09IHNlbGVjdGVkSW5kZXgpIHtcblx0XHRcdFx0ZmFjZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdFx0XHRcdGZhY2UuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpO1xuXHRcdFx0XHRmYWNlLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0Jyk7XG5cdFx0XHRcdGZhY2UuY2xhc3NMaXN0LnJlbW92ZSgncHJldmlvdXMnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZhY2UuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXG5cdFx0XHRcdGlmIChpbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuXHRcdFx0XHRcdGZhY2UuY2xhc3NMaXN0LmFkZCgncHJldmlvdXMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmYWNlLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXZpb3VzJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGluZGV4ID4gc2VsZWN0ZWRJbmRleCkge1xuXHRcdFx0XHRcdGZhY2UuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpO1xuXHRcdFx0XHRcdGZhY2UuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmYWNlLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcblx0XHRcdFx0XHRmYWNlLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldENvbnRhaW5lckhlaWdodChibG9ja0NvbnRlbnQpIHtcblx0XHQvLyBTZXQgdGhlIGhlaWdodCBvZiB0aGUgZmFjZXMgY29udGFpbmVyIHRvIGVxdWFsIHRoZSBoZWlnaHQgb2YgdGhlIHRhbGxlc3QgZmFjZVxuXHRcdHZhciBtYXhGYWNlSGVpZ2h0ID0gMDtcblx0XHRmb3JFYWNoRWxlbWVudChibG9ja0NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWZhY2UnKSwgZnVuY3Rpb24gKGZhY2UpIHtcblx0XHRcdHZhciBmYWNlSGVpZ2h0ID0gZmFjZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0XHRpZiAoZmFjZUhlaWdodCA+IG1heEZhY2VIZWlnaHQpIHtcblx0XHRcdFx0bWF4RmFjZUhlaWdodCA9IGZhY2VIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1mYWNlcycpLnN0eWxlLmhlaWdodCA9IG1heEZhY2VIZWlnaHQgKyAncHgnO1xuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBhbGwgdGhlIGxpc3RlbmVycyB3ZSBuZWVkIGZvciBjbGlja2FibGUgZWxlbWVudHNcblx0Zm9yRWFjaEVsZW1lbnQoZ2V0Q2Fyb3VzZWxCbG9ja3MoKSwgZnVuY3Rpb24gKGJsb2NrQ29udGVudCkge1xuXHRcdHZhciBzd2lwZVN0YXJ0WCA9IDA7XG5cblx0XHRibG9ja0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0dmFyIHRvdWNoSW5mbyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdFx0c3dpcGVTdGFydFggPSB0b3VjaEluZm8ucGFnZVg7XG5cdFx0fSk7XG5cblx0XHRibG9ja0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciB0b3VjaEluZm8gPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdHZhciBzd2lwZUVuZFggPSB0b3VjaEluZm8ucGFnZVg7XG5cdFx0XHR2YXIgc3dpcGVEaWZmID0gc3dpcGVTdGFydFggLSBzd2lwZUVuZFg7XG5cblx0XHRcdC8vIFN3aXBlIHJpZ2h0XG5cdFx0XHRpZiAoc3dpcGVEaWZmID4gU1dJUEVfVEhSRVNIT0xEKSB7XG5cdFx0XHRcdHNlbGVjdE5leHRDYXJvdXNlbEZhY2UoYmxvY2tDb250ZW50KTtcblx0XHRcdH0gZWxzZSBpZiAoc3dpcGVEaWZmIDwgLTEgKiBTV0lQRV9USFJFU0hPTEQpIHtcblx0XHRcdFx0c2VsZWN0UHJldmlvdXNDYXJvdXNlbEZhY2UoYmxvY2tDb250ZW50KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHZhciBkYXRhc2V0ID0gYmxvY2tDb250ZW50LmRhdGFzZXQ7XG5cdFx0aWYgKGRhdGFzZXQuYXV0b3BsYXlEZWxheVRpbWUpIHtcblx0XHRcdHZhciBhdXRvcGxheURlbGF5VGltZSA9IGRhdGFzZXQuYXV0b3BsYXlEZWxheVRpbWU7XG5cdFx0XHRzZXRJbnRlcnZhbChzZWxlY3ROZXh0Q2Fyb3VzZWxGYWNlLmJpbmQobnVsbCwgYmxvY2tDb250ZW50KSwgYXV0b3BsYXlEZWxheVRpbWUgKiAxMDAwKTtcblx0XHR9XG5cblx0XHQvLyBBdHRhY2ggY2xpY2sgbGlzdG5lcnMgZm9yIHRoZSBzaWRlIGNvbnRyb2xzLlxuXHRcdGZvckVhY2hFbGVtZW50KGJsb2NrQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjZS1jb250cm9sLXNpZGUnKSwgZnVuY3Rpb24gKGNvbnRyb2wpIHtcblx0XHRcdGlmIChjb250cm9sLmNsYXNzTGlzdC5jb250YWlucygnbGVmdCcpKSB7XG5cdFx0XHRcdGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmV2aW91c0Nhcm91c2VsRmFjZS5iaW5kKG51bGwsIGJsb2NrQ29udGVudCkpO1xuXHRcdFx0fSBlbHNlIGlmIChjb250cm9sLmNsYXNzTGlzdC5jb250YWlucygncmlnaHQnKSkge1xuXHRcdFx0XHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0TmV4dENhcm91c2VsRmFjZS5iaW5kKG51bGwsIGJsb2NrQ29udGVudCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoc2V0Q29udGFpbmVySGVpZ2h0LmJpbmQobnVsbCwgYmxvY2tDb250ZW50KSwgMSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldENvbnRhaW5lckhlaWdodC5iaW5kKG51bGwsIGJsb2NrQ29udGVudCkpO1xuXHRcdHZhciBpbWFnZXNJbkNhcm91c2VsID0gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1mYWNlIGltZycpO1xuXHRcdHZhciBpbWFnZXNMb2FkZWQgPSAwO1xuXHRcdGZvckVhY2hFbGVtZW50KGltYWdlc0luQ2Fyb3VzZWwsIGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0dmFyIGltYWdlVG9Mb2FkID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGltYWdlc0xvYWRlZCsrO1xuXHRcdFx0XHRpZiAoaW1hZ2VzTG9hZGVkID09PSBpbWFnZXNJbkNhcm91c2VsLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNldENvbnRhaW5lckhlaWdodChibG9ja0NvbnRlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuXG4iXX0=

/*********/
"use strict";

/* eslint no-var: 0, prefer-const: 0 */

/* eslint camelcase: 0 */
(function () {
  var PAYPAL_ENDPOINT = 'https://www.paypal.com/cgi-bin/webscr';
  var Money = window.Money;
  var validMoneyRegex = /^\-?\d+\.\d\d$/;

  function Cart() {
    this.items = [];
    this.cartNode = document.getElementsByClassName('shoppingCart')[0];
    this.pipNodes = document.getElementsByClassName('paypal-pip');
    this.business = this.cartNode && this.cartNode.getAttribute('data-publishedjs-merchant-id');
    this.currency = this.cartNode && this.cartNode.getAttribute('data-publishedjs-currency');
    this.currencySymbol = this.cartNode && this.cartNode.getAttribute('data-publishedjs-currency-symbol'); // abort cart creation in the case of no cart or business

    if (!this.cartNode || !this.business) {
      return false;
    }

    if (typeof window.localStorage !== 'undefined') {
      this.fromJSON(window.localStorage.getItem('shoppingCart'));
    } // attach event listeners to payment buttons


    for (var i = 0; i < this.pipNodes.length; i++) {
      var paypalPip = this.pipNodes[i];
      var paypalPipButton = paypalPip.getElementsByClassName('paypal-addToCart')[0];
      paypalPipButton.addEventListener('click', function (event) {
        var item = getItemData(event.target);
        this.addItem(item);
        event.preventDefault();
        return false;
      }.bind(this));
    } // attach event listener to cart widget


    var cartHandler = this.cartNode.querySelector('.shoppingCart__openHandler');
    cartHandler.addEventListener('click', this.toggleCartOpen.bind(this));
    var continueShoppingButton = this.cartNode.querySelector('.shoppingCart__button__continue');
    continueShoppingButton.addEventListener('click', this.toggleCartOpen.bind(this));
    var closeButton = this.cartNode.querySelector('.shoppingCart__close');
    closeButton.addEventListener('click', this.toggleCartOpen.bind(this));
    var checkoutButton = this.cartNode.querySelector('.shoppingCart__button__checkout');
    checkoutButton.addEventListener('click', this.checkout.bind(this));
    document.addEventListener('click', function (e) {
      if (this.cartNode.classList.contains('shoppingCart--open') && !this.cartNode.contains(e.target)) {
        this.toggleCartOpen(e);
      }
    }.bind(this));
    this.updateCartContents();
  }

  Cart.prototype.toggleCartOpen = function (event) {
    this.cartNode.classList.toggle('shoppingCart--open');
    document.body.classList.toggle('no-scroll');
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  Cart.prototype.fromJSON = function (json) {
    if (!json) {
      return;
    }

    if (typeof json === 'string') {
      try {
        json = JSON.parse(json);
      } catch (e) {
        console.error(e);
        return;
      }
    }

    if (json.items) {
      this.items = json.items;
    }
  };

  Cart.prototype.toJSON = function () {
    return {
      items: this.items
    };
  };

  Cart.prototype.addItem = function (item) {
    // If an entry already exists for this item, combine quantity
    var itemExists = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        this.items[i].quantity += item.quantity;
        itemExists = true;
        break;
      }
    } // Otherwise add entry for item


    if (!itemExists) {
      this.items.push(item);
    }

    this.updateCartContents();
  };

  Cart.prototype.removeItemAtIndex = function (index) {
    this.items.splice(index, 1);
    this.updateCartContents();
  };

  Cart.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  Cart.prototype.removeAllItems = function () {
    this.items = [];
    this.updateCartContents();
  };
  /*
   * Returns an object that represents the cart and the items in it.
   * The attributes in the object conform directly to the paypal cart upload command:
   * https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/cart_upload/
   */


  Cart.prototype.getCart = function () {
    var cart = this.items.reduce(function (result, item, index) {
      for (var key in item) {
        result[[key, index + 1].join('_')] = item[key];
      }

      return result;
    }, {});
    cart.cmd = '_cart';
    cart.upload = '1';
    cart.business = this.business;
    cart.currency_code = this.currency;
    return cart;
  };

  Cart.prototype.getQuantity = function () {
    return this.items.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);
  };

  Cart.prototype.updateCartContents = function () {
    var contentsNode = this.cartNode.querySelector('.shoppingCart__contents');

    if (this.items.length) {
      contentsNode.classList.remove('shoppingCart__contents--empty');
    } else {
      contentsNode.classList.add('shoppingCart__contents--empty');
    }

    var itemsNode = this.cartNode.querySelector('.shoppingCart__items');
    itemsNode.innerHTML = '';

    for (var i = 0; i < this.items.length; i++) {
      var item = this.createItemNode(this.items[i], i);
      itemsNode.appendChild(item);
    }

    var removeButtons = this.cartNode.querySelectorAll('.shoppingCart__item .item-remove');

    for (i = 0; i < removeButtons.length; i++) {
      var button = removeButtons[i];
      button.addEventListener('click', function (e) {
        var itemIndex = e.target.getAttribute('data-item-index');
        this.removeItemAtIndex(itemIndex);
        e.preventDefault();
        e.stopPropagation();
        return false;
      }.bind(this));
    }

    this.updateLabel();
    this.updateTotal();

    if (this.items.length > 0) {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('shoppingCart', JSON.stringify(this.toJSON()));
      }
    } else {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.removeItem('shoppingCart');
      }
    }
  };

  Cart.prototype.createItemNode = function (item, index) {
    var totalItemAmount = Money.mul(item.amount, Money.floatToAmount(item.quantity));
    var itemNode = this.cartNode.querySelector('.shoppingCart__item__template').firstChild.cloneNode(true);

    if (item.quantity > 1) {
      itemNode.classList.add('hasQuantity');
      itemNode.querySelector('.item-quantity').innerHTML = item.quantity + ' x ' + this.currencySymbol + Money.format(this.currency_code, item.amount);
    } else {
      var quantityNode = itemNode.querySelector('.item-quantity');
      quantityNode.parentNode.removeChild(quantityNode);
    }

    itemNode.querySelector('.item-name').innerHTML = item.item_name;
    itemNode.querySelector('.item-price').innerHTML = this.currencySymbol + Money.format(this.currency_code, totalItemAmount);
    itemNode.querySelector('.item-remove').setAttribute('data-item-index', index);
    return itemNode;
  };

  Cart.prototype.updateLabel = function () {
    var quantity = this.getQuantity();
    this.cartNode.setAttribute('data-quantity', quantity);

    if (quantity >= 100) {
      this.cartNode.classList.add('shoppingCart--large');
    } else {
      this.cartNode.classList.remove('shoppingCart--large');
    }
  };

  Cart.prototype.updateTotal = function () {
    if (!this.items.length) {
      return;
    }

    var total = this.items.reduce(function (sum, item) {
      return Money.add(Money.floatToAmount(sum), Money.mul(item.amount, Money.floatToAmount(item.quantity)));
    }, 0);
    var totalNode = this.cartNode.querySelector('.shoppingCart__total .total-amount');
    totalNode.innerHTML = this.currencySymbol + Money.format(this.currency_code, total);
  };

  Cart.prototype.checkout = function (event) {
    if (this.isEmpty()) {
      return false;
    }

    post(PAYPAL_ENDPOINT, this.getCart());
    this.removeAllItems();
    event.preventDefault();
    return false;
  };
  /*
   *  Ensure that the amount is in the format xx.xx
   * This is a requirement for the money-math library.
   */


  function getMoneyAmount(value) {
    if (!value || value.match(validMoneyRegex)) {
      return value;
    }

    value = parseFloat(value);
    return Money.floatToAmount(value);
  }

  function getItemData(element) {
    return {
      id: element.getAttribute('data-publishedjs-id'),
      item_name: element.getAttribute('data-publishedjs-item-name'),
      amount: getMoneyAmount(element.getAttribute('data-publishedjs-amount')),
      shipping: getMoneyAmount(element.getAttribute('data-publishedjs-shipping')),
      tax: getMoneyAmount(element.getAttribute('data-publishedjs-tax')),
      quantity: parseInt(element.getAttribute('data-publishedjs-quantity'), 10)
    };
  }

  function post(path, params) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('target', '_blank');

    if (path) {
      form.setAttribute('action', path);
    }

    for (var key in params) {
      var name = key;
      var value = params[key];
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', name);
      hiddenField.setAttribute('value', value);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }

  new Cart();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9wYXlwYWxDYXJ0LmpzIl0sIm5hbWVzIjpbIlBBWVBBTF9FTkRQT0lOVCIsIk1vbmV5Iiwid2luZG93IiwidmFsaWRNb25leVJlZ2V4IiwiQ2FydCIsIml0ZW1zIiwiY2FydE5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwaXBOb2RlcyIsImJ1c2luZXNzIiwiZ2V0QXR0cmlidXRlIiwiY3VycmVuY3kiLCJjdXJyZW5jeVN5bWJvbCIsImxvY2FsU3RvcmFnZSIsImZyb21KU09OIiwiZ2V0SXRlbSIsImkiLCJsZW5ndGgiLCJwYXlwYWxQaXAiLCJwYXlwYWxQaXBCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpdGVtIiwiZ2V0SXRlbURhdGEiLCJ0YXJnZXQiLCJhZGRJdGVtIiwicHJldmVudERlZmF1bHQiLCJiaW5kIiwiY2FydEhhbmRsZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlQ2FydE9wZW4iLCJjb250aW51ZVNob3BwaW5nQnV0dG9uIiwiY2xvc2VCdXR0b24iLCJjaGVja291dEJ1dHRvbiIsImNoZWNrb3V0IiwiZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXBkYXRlQ2FydENvbnRlbnRzIiwicHJvdG90eXBlIiwidG9nZ2xlIiwiYm9keSIsInN0b3BQcm9wYWdhdGlvbiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJ0b0pTT04iLCJpdGVtRXhpc3RzIiwiaWQiLCJxdWFudGl0eSIsInB1c2giLCJyZW1vdmVJdGVtQXRJbmRleCIsImluZGV4Iiwic3BsaWNlIiwiaXNFbXB0eSIsInJlbW92ZUFsbEl0ZW1zIiwiZ2V0Q2FydCIsImNhcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJqb2luIiwiY21kIiwidXBsb2FkIiwiY3VycmVuY3lfY29kZSIsImdldFF1YW50aXR5Iiwic3VtIiwiY29udGVudHNOb2RlIiwicmVtb3ZlIiwiYWRkIiwiaXRlbXNOb2RlIiwiaW5uZXJIVE1MIiwiY3JlYXRlSXRlbU5vZGUiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiaXRlbUluZGV4IiwidXBkYXRlTGFiZWwiLCJ1cGRhdGVUb3RhbCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwidG90YWxJdGVtQW1vdW50IiwibXVsIiwiYW1vdW50IiwiZmxvYXRUb0Ftb3VudCIsIml0ZW1Ob2RlIiwiZmlyc3RDaGlsZCIsImNsb25lTm9kZSIsImZvcm1hdCIsInF1YW50aXR5Tm9kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIml0ZW1fbmFtZSIsInNldEF0dHJpYnV0ZSIsInRvdGFsIiwidG90YWxOb2RlIiwicG9zdCIsImdldE1vbmV5QW1vdW50IiwidmFsdWUiLCJtYXRjaCIsInBhcnNlRmxvYXQiLCJlbGVtZW50Iiwic2hpcHBpbmciLCJ0YXgiLCJwYXJzZUludCIsInBhdGgiLCJwYXJhbXMiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJoaWRkZW5GaWVsZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTtBQUNBLENBQUMsWUFBWTtBQUVaLE1BQUlBLGVBQWUsR0FBRyx1Q0FBdEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0QsS0FBbkI7QUFDQSxNQUFJRSxlQUFlLEdBQUcsZ0JBQXRCOztBQUVBLFdBQVNDLElBQVQsR0FBZ0I7QUFDZixTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsY0FBaEMsRUFBZ0QsQ0FBaEQsQ0FBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCRixRQUFRLENBQUNDLHNCQUFULENBQWdDLFlBQWhDLENBQWhCO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixLQUFLSixRQUFMLElBQWlCLEtB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QUFnQmdELE1BQWhCLEVBQXdCO0FBQ3ZCLFVBQUlHLElBQUksR0FBR25ELEdBQVg7QUFDQSxVQUFJd0MsS0FBSyxHQUFHUSxNQUFNLENBQUNoRCxHQUFELENBQWxCO0FBQ0EsVUFBSW9ELFdBQVcsR0FBRzVHLFFBQVEsQ0FBQzBHLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUFDQUUsTUFBQUEsV0FBVyxDQUFDakIsWUFBWixDQUF5QixNQUF6QixFQUFpQyxRQUFqQztBQUNBaUIsTUFBQUEsV0FBVyxDQUFDakIsWUFBWixDQUF5QixNQUF6QixFQUFpQ2dCLElBQWpDO0FBQ0FDLE1BQUFBLFdBQVcsQ0FBQ2pCLFlBQVosQ0FBeUIsT0FBekIsRUFBa0NLLEtBQWxDO0FBQ0FTLE1BQUFBLElBQUksQ0FBQ3BDLFdBQUwsQ0FBaUJ1QyxXQUFqQjtBQUNBOztBQUVENUcsSUFBQUEsUUFBUSxDQUFDbUMsSUFBVCxDQUFja0MsV0FBZCxDQUEwQm9DLElBQTFCO0FBQ0FBLElBQUFBLElBQUksQ0FBQ0ksTUFBTDtBQUNBOztBQUVELE1BQUloSCxJQUFKO0FBQ0EsQ0FsU0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdmFyOiAwLCBwcmVmZXItY29uc3Q6IDAgKi9cbi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbihmdW5jdGlvbiAoKSB7XG5cblx0dmFyIFBBWVBBTF9FTkRQT0lOVCA9ICdodHRwczovL3d3dy5wYXlwYWwuY29tL2NnaS1iaW4vd2Vic2NyJztcblx0dmFyIE1vbmV5ID0gd2luZG93Lk1vbmV5O1xuXHR2YXIgdmFsaWRNb25leVJlZ2V4ID0gL15cXC0/XFxkK1xcLlxcZFxcZCQvO1xuXG5cdGZ1bmN0aW9uIENhcnQoKSB7XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMuY2FydE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaG9wcGluZ0NhcnQnKVswXTtcblx0XHR0aGlzLnBpcE5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5cGFsLXBpcCcpO1xuXHRcdHRoaXMuYnVzaW5lc3MgPSB0aGlzLmNhcnROb2RlICYmIHRoaXMuY2FydE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXB1Ymxpc2hlZGpzLW1lcmNoYW50LWlkJyk7XG5cdFx0dGhpcy5jdXJyZW5jeSA9IHRoaXMuY2FydE5vZGUgJiYgdGhpcy5jYXJ0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVibGlzaGVkanMtY3VycmVuY3knKTtcblx0XHR0aGlzLmN1cnJlbmN5U3ltYm9sID0gdGhpcy5jYXJ0Tm9kZSAmJiB0aGlzLmNhcnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wdWJsaXNoZWRqcy1jdXJyZW5jeS1zeW1ib2wnKTtcblxuXHRcdC8vIGFib3J0IGNhcnQgY3JlYXRpb24gaW4gdGhlIGNhc2Ugb2Ygbm8gY2FydCBvciBidXNpbmVzc1xuXHRcdGlmICghdGhpcy5jYXJ0Tm9kZSB8fCAhdGhpcy5idXNpbmVzcykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuZnJvbUpTT04od2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaG9wcGluZ0NhcnQnKSk7XG5cdFx0fVxuXG5cdFx0Ly8gYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBwYXltZW50IGJ1dHRvbnNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGlwTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwYXlwYWxQaXAgPSB0aGlzLnBpcE5vZGVzW2ldO1xuXHRcdFx0dmFyIHBheXBhbFBpcEJ1dHRvbiA9IHBheXBhbFBpcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXlwYWwtYWRkVG9DYXJ0JylbMF07XG5cblx0XHRcdHBheXBhbFBpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHR2YXIgaXRlbSA9IGdldEl0ZW1EYXRhKGV2ZW50LnRhcmdldCk7XG5cblx0XHRcdFx0dGhpcy5hZGRJdGVtKGl0ZW0pO1xuXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0fVxuXG5cdFx0Ly8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGNhcnQgd2lkZ2V0XG5cdFx0dmFyIGNhcnRIYW5kbGVyID0gdGhpcy5jYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmdDYXJ0X19vcGVuSGFuZGxlcicpO1xuXHRcdGNhcnRIYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDYXJ0T3Blbi5iaW5kKHRoaXMpKTtcblxuXHRcdHZhciBjb250aW51ZVNob3BwaW5nQnV0dG9uID0gdGhpcy5jYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmdDYXJ0X19idXR0b25fX2NvbnRpbnVlJyk7XG5cdFx0Y29udGludWVTaG9wcGluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ2FydE9wZW4uYmluZCh0aGlzKSk7XG5cblx0XHR2YXIgY2xvc2VCdXR0b24gPSB0aGlzLmNhcnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wcGluZ0NhcnRfX2Nsb3NlJyk7XG5cdFx0Y2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNhcnRPcGVuLmJpbmQodGhpcykpO1xuXG5cdFx0dmFyIGNoZWNrb3V0QnV0dG9uID0gdGhpcy5jYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmdDYXJ0X19idXR0b25fX2NoZWNrb3V0Jyk7XG5cdFx0Y2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoZWNrb3V0LmJpbmQodGhpcykpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKHRoaXMuY2FydE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG9wcGluZ0NhcnQtLW9wZW4nKSAmJiAhdGhpcy5jYXJ0Tm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHRcdFx0dGhpcy50b2dnbGVDYXJ0T3BlbihlKTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy51cGRhdGVDYXJ0Q29udGVudHMoKTtcblx0fVxuXG5cdENhcnQucHJvdG90eXBlLnRvZ2dsZUNhcnRPcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0dGhpcy5jYXJ0Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdzaG9wcGluZ0NhcnQtLW9wZW4nKTtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdENhcnQucHJvdG90eXBlLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcblx0XHRpZiAoIWpzb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBqc29uID09PSAnc3RyaW5nJykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0anNvbiA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGpzb24uaXRlbXMpIHtcblx0XHRcdHRoaXMuaXRlbXMgPSBqc29uLml0ZW1zO1xuXHRcdH1cblx0fTtcblxuXHRDYXJ0LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGl0ZW1zOiB0aGlzLml0ZW1zLFxuXHRcdH07XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUuYWRkSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cblx0XHQvLyBJZiBhbiBlbnRyeSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBpdGVtLCBjb21iaW5lIHF1YW50aXR5XG5cdFx0dmFyIGl0ZW1FeGlzdHMgPSBmYWxzZTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLml0ZW1zW2ldLmlkID09PSBpdGVtLmlkKSB7XG5cdFx0XHRcdHRoaXMuaXRlbXNbaV0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eTtcblx0XHRcdFx0aXRlbUV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSBhZGQgZW50cnkgZm9yIGl0ZW1cblx0XHRpZiAoIWl0ZW1FeGlzdHMpIHtcblx0XHRcdHRoaXMuaXRlbXMucHVzaChpdGVtKTtcblx0XHR9XG5cblx0XHR0aGlzLnVwZGF0ZUNhcnRDb250ZW50cygpO1xuXHR9O1xuXG5cdENhcnQucHJvdG90eXBlLnJlbW92ZUl0ZW1BdEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0dGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdHRoaXMudXBkYXRlQ2FydENvbnRlbnRzKCk7XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPT09IDA7XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUucmVtb3ZlQWxsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMudXBkYXRlQ2FydENvbnRlbnRzKCk7XG5cdH07XG5cblx0Lypcblx0ICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBjYXJ0IGFuZCB0aGUgaXRlbXMgaW4gaXQuXG5cdCAqIFRoZSBhdHRyaWJ1dGVzIGluIHRoZSBvYmplY3QgY29uZm9ybSBkaXJlY3RseSB0byB0aGUgcGF5cGFsIGNhcnQgdXBsb2FkIGNvbW1hbmQ6XG5cdCAqIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9jbGFzc2ljL3BheXBhbC1wYXltZW50cy1zdGFuZGFyZC9pbnRlZ3JhdGlvbi1ndWlkZS9jYXJ0X3VwbG9hZC9cblx0ICovXG5cdENhcnQucHJvdG90eXBlLmdldENhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGNhcnQgPSB0aGlzLml0ZW1zLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBpdGVtLCBpbmRleCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGl0ZW0pIHtcblx0XHRcdFx0cmVzdWx0W1trZXksIGluZGV4ICsgMV0uam9pbignXycpXSA9IGl0ZW1ba2V5XTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSwge30pO1xuXG5cdFx0Y2FydC5jbWQgPSAnX2NhcnQnO1xuXHRcdGNhcnQudXBsb2FkID0gJzEnO1xuXHRcdGNhcnQuYnVzaW5lc3MgPSB0aGlzLmJ1c2luZXNzO1xuXHRcdGNhcnQuY3VycmVuY3lfY29kZSA9IHRoaXMuY3VycmVuY3k7XG5cblx0XHRyZXR1cm4gY2FydDtcblx0fTtcblxuXHRDYXJ0LnByb3RvdHlwZS5nZXRRdWFudGl0eSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgaXRlbSkge1xuXHRcdFx0cmV0dXJuIHN1bSArIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCk7XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUudXBkYXRlQ2FydENvbnRlbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjb250ZW50c05vZGUgPSB0aGlzLmNhcnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wcGluZ0NhcnRfX2NvbnRlbnRzJyk7XG5cdFx0aWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRjb250ZW50c05vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvcHBpbmdDYXJ0X19jb250ZW50cy0tZW1wdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGVudHNOb2RlLmNsYXNzTGlzdC5hZGQoJ3Nob3BwaW5nQ2FydF9fY29udGVudHMtLWVtcHR5Jyk7XG5cdFx0fVxuXHRcdHZhciBpdGVtc05vZGUgPSB0aGlzLmNhcnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wcGluZ0NhcnRfX2l0ZW1zJyk7XG5cdFx0aXRlbXNOb2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW1Ob2RlKHRoaXMuaXRlbXNbaV0sIGkpO1xuXHRcdFx0aXRlbXNOb2RlLmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdH1cblxuXHRcdHZhciByZW1vdmVCdXR0b25zID0gdGhpcy5jYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvcHBpbmdDYXJ0X19pdGVtIC5pdGVtLXJlbW92ZScpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCByZW1vdmVCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYnV0dG9uID0gcmVtb3ZlQnV0dG9uc1tpXTtcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdHZhciBpdGVtSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1pbmRleCcpO1xuXHRcdFx0XHR0aGlzLnJlbW92ZUl0ZW1BdEluZGV4KGl0ZW1JbmRleCk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVMYWJlbCgpO1xuXHRcdHRoaXMudXBkYXRlVG90YWwoKTtcblxuXHRcdGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaG9wcGluZ0NhcnQnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzaG9wcGluZ0NhcnQnKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUuY3JlYXRlSXRlbU5vZGUgPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHR2YXIgdG90YWxJdGVtQW1vdW50ID0gTW9uZXkubXVsKGl0ZW0uYW1vdW50LCBNb25leS5mbG9hdFRvQW1vdW50KGl0ZW0ucXVhbnRpdHkpKTtcblx0XHR2YXIgaXRlbU5vZGUgPSB0aGlzLmNhcnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zaG9wcGluZ0NhcnRfX2l0ZW1fX3RlbXBsYXRlJykuZmlyc3RDaGlsZC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0aWYgKGl0ZW0ucXVhbnRpdHkgPiAxKSB7XG5cdFx0XHRpdGVtTm9kZS5jbGFzc0xpc3QuYWRkKCdoYXNRdWFudGl0eScpO1xuXHRcdFx0aXRlbU5vZGUucXVlcnlTZWxlY3RvcignLml0ZW0tcXVhbnRpdHknKS5pbm5lckhUTUwgPSBpdGVtLnF1YW50aXR5ICsgJyB4ICcgK1xuXHRcdFx0XHR0aGlzLmN1cnJlbmN5U3ltYm9sICtcblx0XHRcdFx0TW9uZXkuZm9ybWF0KHRoaXMuY3VycmVuY3lfY29kZSwgaXRlbS5hbW91bnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcXVhbnRpdHlOb2RlID0gaXRlbU5vZGUucXVlcnlTZWxlY3RvcignLml0ZW0tcXVhbnRpdHknKTtcblx0XHRcdHF1YW50aXR5Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHF1YW50aXR5Tm9kZSk7XG5cdFx0fVxuXHRcdGl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLW5hbWUnKS5pbm5lckhUTUwgPSBpdGVtLml0ZW1fbmFtZTtcblx0XHRpdGVtTm9kZS5xdWVyeVNlbGVjdG9yKCcuaXRlbS1wcmljZScpLmlubmVySFRNTCA9IHRoaXMuY3VycmVuY3lTeW1ib2wgK1xuXHRcdFx0TW9uZXkuZm9ybWF0KHRoaXMuY3VycmVuY3lfY29kZSwgdG90YWxJdGVtQW1vdW50KTtcblx0XHRpdGVtTm9kZS5xdWVyeVNlbGVjdG9yKCcuaXRlbS1yZW1vdmUnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1pbmRleCcsIGluZGV4KTtcblx0XHRyZXR1cm4gaXRlbU5vZGU7XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUudXBkYXRlTGFiZWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHF1YW50aXR5ID0gdGhpcy5nZXRRdWFudGl0eSgpO1xuXHRcdHRoaXMuY2FydE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXF1YW50aXR5JywgcXVhbnRpdHkpO1xuXG5cdFx0aWYgKHF1YW50aXR5ID49IDEwMCkge1xuXHRcdFx0dGhpcy5jYXJ0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaG9wcGluZ0NhcnQtLWxhcmdlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2FydE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvcHBpbmdDYXJ0LS1sYXJnZScpO1xuXHRcdH1cblx0fTtcblxuXHRDYXJ0LnByb3RvdHlwZS51cGRhdGVUb3RhbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRoaXMuaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciB0b3RhbCA9IHRoaXMuaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGl0ZW0pIHtcblx0XHRcdHJldHVybiBNb25leS5hZGQoTW9uZXkuZmxvYXRUb0Ftb3VudChzdW0pLFxuXHRcdFx0XHRNb25leS5tdWwoaXRlbS5hbW91bnQsIE1vbmV5LmZsb2F0VG9BbW91bnQoaXRlbS5xdWFudGl0eSkpKTtcblx0XHR9LCAwKTtcblx0XHR2YXIgdG90YWxOb2RlID0gdGhpcy5jYXJ0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmdDYXJ0X190b3RhbCAudG90YWwtYW1vdW50Jyk7XG5cdFx0dG90YWxOb2RlLmlubmVySFRNTCA9IHRoaXMuY3VycmVuY3lTeW1ib2wgKyBNb25leS5mb3JtYXQodGhpcy5jdXJyZW5jeV9jb2RlLCB0b3RhbCk7XG5cdH07XG5cblx0Q2FydC5wcm90b3R5cGUuY2hlY2tvdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRwb3N0KFBBWVBBTF9FTkRQT0lOVCwgdGhpcy5nZXRDYXJ0KCkpO1xuXHRcdHRoaXMucmVtb3ZlQWxsSXRlbXMoKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHQvKlxuXHQgKiAgRW5zdXJlIHRoYXQgdGhlIGFtb3VudCBpcyBpbiB0aGUgZm9ybWF0IHh4Lnh4XG5cdCAqIFRoaXMgaXMgYSByZXF1aXJlbWVudCBmb3IgdGhlIG1vbmV5LW1hdGggbGlicmFyeS5cblx0ICovXG5cdGZ1bmN0aW9uIGdldE1vbmV5QW1vdW50KHZhbHVlKSB7XG5cdFx0aWYgKCF2YWx1ZSB8fCB2YWx1ZS5tYXRjaCh2YWxpZE1vbmV5UmVnZXgpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0cmV0dXJuIE1vbmV5LmZsb2F0VG9BbW91bnQodmFsdWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0SXRlbURhdGEoZWxlbWVudCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVibGlzaGVkanMtaWQnKSxcblx0XHRcdGl0ZW1fbmFtZTogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVibGlzaGVkanMtaXRlbS1uYW1lJyksXG5cdFx0XHRhbW91bnQ6IGdldE1vbmV5QW1vdW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXB1Ymxpc2hlZGpzLWFtb3VudCcpKSxcblx0XHRcdHNoaXBwaW5nOiBnZXRNb25leUFtb3VudChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wdWJsaXNoZWRqcy1zaGlwcGluZycpKSxcblx0XHRcdHRheDogZ2V0TW9uZXlBbW91bnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVibGlzaGVkanMtdGF4JykpLFxuXHRcdFx0cXVhbnRpdHk6IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXB1Ymxpc2hlZGpzLXF1YW50aXR5JyksIDEwKSxcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcG9zdChwYXRoLCBwYXJhbXMpIHtcblx0XHR2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcblx0XHRmb3JtLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdGlmIChwYXRoKSB7XG5cdFx0XHRmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgcGF0aCk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuXHRcdFx0dmFyIG5hbWUgPSBrZXk7XG5cdFx0XHR2YXIgdmFsdWUgPSBwYXJhbXNba2V5XTtcblx0XHRcdHZhciBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHRoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcblx0XHRcdGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG5cdFx0XHRmb3JtLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcblx0XHR9XG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXHRcdGZvcm0uc3VibWl0KCk7XG5cdH1cblxuXHRuZXcgQ2FydCgpO1xufSkoKTtcbiJdfQ==

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

(function () {
  function toggleMenuClasses() {
    var mobileContent = document.querySelector('.mobile-content');
    document.body.classList.toggle('no-scroll');
    document.body.classList.toggle('mobile-menu-active');
    mobileContent.classList.toggle('active');
  }

  function handleMenuClick(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    toggleMenuClasses();
  }

  function setUpButtonHandler() {
    // Set the block containing the mobile nav to have a higher z index.
    // This guarantees that the mobile menu overlay will be above all other site content.
    var blockWithFirstNavPip = document.querySelector('.mobile-menu-button--firstnav');

    if (blockWithFirstNavPip) {
      var blockId = blockWithFirstNavPip.getAttribute('data-parent-block-id');
      var parentBlock = document.querySelector("[data-tower-id=\"".concat(blockId, "\"]"));
      parentBlock.style.zIndex = '10';
    }

    var menuButton = document.querySelectorAll('.pip.navigation-pip .mobile-menu-button');

    for (var m = 0; m < menuButton.length; m++) {
      menuButton[m].onclick = handleMenuClick;
    }

    var navLinks = document.querySelectorAll('.mobile-wrapper a');

    for (var i = 0; i < navLinks.length; i++) {
      // Only apply a click handler to internal block links
      if (navLinks[i].getAttribute('href').indexOf('#') === 0) {
        navLinks[i].addEventListener('click', toggleMenuClasses);
      }
    }
  }

  setUpButtonHandler();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInRvZ2dsZU1lbnVDbGFzc2VzIiwibW9iaWxlQ29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoYW5kbGVNZW51Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0VXBCdXR0b25IYW5kbGVyIiwiYmxvY2tXaXRoRmlyc3ROYXZQaXAiLCJibG9ja0lkIiwiZ2V0QXR0cmlidXRlIiwicGFyZW50QmxvY2siLCJzdHlsZSIsInpJbmRleCIsIm1lbnVCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwibSIsImxlbmd0aCIsIm9uY2xpY2siLCJuYXZMaW5rcyIsImkiLCJpbmRleE9mIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSxDQUFDLFlBQVk7QUFDWixXQUFTQSxpQkFBVCxHQUE2QjtBQUM1QixRQUFJQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBcEI7QUFFQUQsSUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFdBQS9CO0FBQ0FKLElBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUErQixvQkFBL0I7QUFDQUwsSUFBQUEsYUFBYSxDQUFDSSxTQUFkLENBQXdCQyxNQUF4QixDQUErQixRQUEvQjtBQUNBOztBQUVELFdBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQy9CLFFBQUlBLEtBQUosRUFBVztBQUNWQSxNQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQUQsTUFBQUEsS0FBSyxDQUFDRSxlQUFOO0FBQ0E7O0FBRURWLElBQUFBLGlCQUFpQjtBQUNqQjs7QUFFRCxXQUFTVyxrQkFBVCxHQUE4QjtBQUM3QjtBQUNBO0FBQ0EsUUFBSUMsb0JBQW9CLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwrQkFBdkIsQ0FBM0I7O0FBRUEsUUFBSVMsb0JBQUosRUFBMEI7QUFDekIsVUFBSUMsT0FBTyxHQUFHRCxvQkFBb0IsQ0FBQ0UsWUFBckIsQ0FBa0Msc0JBQWxDLENBQWQ7QUFDQSxVQUFJQyxXQUFXLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCw0QkFBMENVLE9BQTFDLFNBQWxCO0FBQ0FFLE1BQUFBLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQTs7QUFFRCxRQUFJQyxVQUFVLEdBQUdoQixRQUFRLENBQUNpQixnQkFBVCxDQUNoQix5Q0FEZ0IsQ0FBakI7O0FBSUEsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixVQUFVLENBQUNHLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzNDRixNQUFBQSxVQUFVLENBQUNFLENBQUQsQ0FBVixDQUFjRSxPQUFkLEdBQXdCZixlQUF4QjtBQUNBOztBQUVELFFBQUlnQixRQUFRLEdBQUdyQixRQUFRLENBQUNpQixnQkFBVCxDQUEwQixtQkFBMUIsQ0FBZjs7QUFFQSxTQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0YsTUFBN0IsRUFBcUNHLENBQUMsRUFBdEMsRUFBMEM7QUFDekM7QUFDQSxVQUFJRCxRQUFRLENBQUNDLENBQUQsQ0FBUixDQUFZVixZQUFaLENBQXlCLE1BQXpCLEVBQWlDVyxPQUFqQyxDQUF5QyxHQUF6QyxNQUFrRCxDQUF0RCxFQUF5RDtBQUN4REYsUUFBQUEsUUFBUSxDQUFDQyxDQUFELENBQVIsQ0FBWUUsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MxQixpQkFBdEM7QUFDQTtBQUNEO0FBQ0Q7O0FBRURXLEVBQUFBLGtCQUFrQjtBQUNsQixDQWhERCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby12YXI6IDAsIHByZWZlci1jb25zdDogMCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiB0b2dnbGVNZW51Q2xhc3NlcygpIHtcblx0XHR2YXIgbW9iaWxlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtY29udGVudCcpO1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vYmlsZS1tZW51LWFjdGl2ZScpO1xuXHRcdG1vYmlsZUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2soZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0b2dnbGVNZW51Q2xhc3NlcygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0VXBCdXR0b25IYW5kbGVyKCkge1xuXHRcdC8vIFNldCB0aGUgYmxvY2sgY29udGFpbmluZyB0aGUgbW9iaWxlIG5hdiB0byBoYXZlIGEgaGlnaGVyIHogaW5kZXguXG5cdFx0Ly8gVGhpcyBndWFyYW50ZWVzIHRoYXQgdGhlIG1vYmlsZSBtZW51IG92ZXJsYXkgd2lsbCBiZSBhYm92ZSBhbGwgb3RoZXIgc2l0ZSBjb250ZW50LlxuXHRcdHZhciBibG9ja1dpdGhGaXJzdE5hdlBpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1idXR0b24tLWZpcnN0bmF2Jyk7XG5cblx0XHRpZiAoYmxvY2tXaXRoRmlyc3ROYXZQaXApIHtcblx0XHRcdHZhciBibG9ja0lkID0gYmxvY2tXaXRoRmlyc3ROYXZQaXAuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudC1ibG9jay1pZCcpO1xuXHRcdFx0dmFyIHBhcmVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG93ZXItaWQ9XCIke2Jsb2NrSWR9XCJdYCk7XG5cdFx0XHRwYXJlbnRCbG9jay5zdHlsZS56SW5kZXggPSAnMTAnO1xuXHRcdH1cblxuXHRcdHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcucGlwLm5hdmlnYXRpb24tcGlwIC5tb2JpbGUtbWVudS1idXR0b24nXG5cdFx0KTtcblxuXHRcdGZvciAodmFyIG0gPSAwOyBtIDwgbWVudUJ1dHRvbi5sZW5ndGg7IG0rKykge1xuXHRcdFx0bWVudUJ1dHRvblttXS5vbmNsaWNrID0gaGFuZGxlTWVudUNsaWNrO1xuXHRcdH1cblxuXHRcdHZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2JpbGUtd3JhcHBlciBhJyk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5hdkxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBPbmx5IGFwcGx5IGEgY2xpY2sgaGFuZGxlciB0byBpbnRlcm5hbCBibG9jayBsaW5rc1xuXHRcdFx0aWYgKG5hdkxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuXHRcdFx0XHRuYXZMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnVDbGFzc2VzKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzZXRVcEJ1dHRvbkhhbmRsZXIoKTtcbn0pKCk7XG4iXX0=

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

function shouldDockRight(elm) {
  if (!elm) {
    return false;
  }

  var rect = elm.getBoundingClientRect();
  var elmWidth = rect.width;
  var elmLeft = rect.left;
  return elmWidth + elmLeft > window.pageXOffset + window.innerWidth;
}

function shouldDockVerticalLeft(elm) {
  if (!elm) {
    return false;
  }

  var rect = elm.getBoundingClientRect();
  return rect.left < 0;
}

function positionChildNav(elm) {
  if (shouldDockRight(elm)) {
    elm.classList.add('nav-children--right');
  }

  if (shouldDockVerticalLeft(elm)) {
    elm.classList.add('nav-children--vertical--left');
  }
}

function applyPositionToSubnav(elm) {
  if (elm.tagName === 'LI' && elm.classList.contains('link')) {
    return positionChildNav(elm.querySelector('.nav-children'));
  } else if (elm.parentNode) {
    // recursively call to check if the parent node is `li.link`
    return applyPositionToSubnav(elm.parentNode);
  }
}

function handleSubnavEvent(event) {
  applyPositionToSubnav(event.target);
}

function setupSubNavPositioningEventHandlers() {
  var desktopLinkList = document.querySelector('.desktopLinks');

  if (!desktopLinkList) {
    return;
  }

  desktopLinkList.addEventListener('mouseover', handleSubnavEvent);
  desktopLinkList.addEventListener('click', handleSubnavEvent);
  var topLevelLinks = document.querySelectorAll('.desktopLinks > li > a');

  if (!topLevelLinks) {
    return;
  }

  for (var i = 0; i < topLevelLinks.length; i++) {
    topLevelLinks[i].addEventListener('focus', handleSubnavEvent);
  }
} // only execute when in preview or publish mode


if (typeof window !== 'undefined' && window.towerData === undefined) {
  setupSubNavPositioningEventHandlers();
}

if (typeof module !== 'undefined') {
  module.exports = {
    shouldDockRight: shouldDockRight
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9zdWJuYXYuanMiXSwibmFtZXMiOlsic2hvdWxkRG9ja1JpZ2h0IiwiZWxtIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsbVdpZHRoIiwid2lkdGgiLCJlbG1MZWZ0IiwibGVmdCIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0IiwiaW5uZXJXaWR0aCIsInNob3VsZERvY2tWZXJ0aWNhbExlZnQiLCJwb3NpdGlvbkNoaWxkTmF2IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHlQb3NpdGlvblRvU3VibmF2IiwidGFnTmFtZSIsImNvbnRhaW5zIiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJoYW5kbGVTdWJuYXZFdmVudCIsImV2ZW50IiwidGFyZ2V0Iiwic2V0dXBTdWJOYXZQb3NpdGlvbmluZ0V2ZW50SGFuZGxlcnMiLCJkZXNrdG9wTGlua0xpc3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b3BMZXZlbExpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJ0b3dlckRhdGEiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzdCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1QsV0FBTyxLQUFQO0FBQ0E7O0FBQ0QsTUFBSUMsSUFBSSxHQUFHRCxHQUFHLENBQUNFLHFCQUFKLEVBQVg7QUFDQSxNQUFJQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csS0FBcEI7QUFDQSxNQUFJQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssSUFBbkI7QUFFQSxTQUFTSCxRQUFRLEdBQUdFLE9BQVosR0FBd0JFLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkQsTUFBTSxDQUFDRSxVQUE1RDtBQUNBOztBQUVELFNBQVNDLHNCQUFULENBQWdDVixHQUFoQyxFQUFxQztBQUNwQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNULFdBQU8sS0FBUDtBQUNBOztBQUVELE1BQUlDLElBQUksR0FBR0QsR0FBRyxDQUFDRSxxQkFBSixFQUFYO0FBRUEsU0FBT0QsSUFBSSxDQUFDSyxJQUFMLEdBQVksQ0FBbkI7QUFFQTs7QUFFRCxTQUFTSyxnQkFBVCxDQUEwQlgsR0FBMUIsRUFBK0I7QUFDOUIsTUFBSUQsZUFBZSxDQUFDQyxHQUFELENBQW5CLEVBQTBCO0FBQ3pCQSxJQUFBQSxHQUFHLENBQUNZLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixxQkFBbEI7QUFDQTs7QUFFRCxNQUFJSCxzQkFBc0IsQ0FBQ1YsR0FBRCxDQUExQixFQUFpQztBQUNoQ0EsSUFBQUEsR0FBRyxDQUFDWSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsOEJBQWxCO0FBQ0E7QUFDRDs7QUFFRCxTQUFTQyxxQkFBVCxDQUErQmQsR0FBL0IsRUFBb0M7QUFDbkMsTUFBSUEsR0FBRyxDQUFDZSxPQUFKLEtBQWdCLElBQWhCLElBQXdCZixHQUFHLENBQUNZLFNBQUosQ0FBY0ksUUFBZCxDQUF1QixNQUF2QixDQUE1QixFQUE0RDtBQUMzRCxXQUFPTCxnQkFBZ0IsQ0FBQ1gsR0FBRyxDQUFDaUIsYUFBSixDQUFrQixlQUFsQixDQUFELENBQXZCO0FBQ0EsR0FGRCxNQUVPLElBQUlqQixHQUFHLENBQUNrQixVQUFSLEVBQW9CO0FBQzFCO0FBQ0EsV0FBT0oscUJBQXFCLENBQUNkLEdBQUcsQ0FBQ2tCLFVBQUwsQ0FBNUI7QUFDQTtBQUNEOztBQUVELFNBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUNqQ04sRUFBQUEscUJBQXFCLENBQUNNLEtBQUssQ0FBQ0MsTUFBUCxDQUFyQjtBQUNBOztBQUVELFNBQVNDLG1DQUFULEdBQStDO0FBQzlDLE1BQUlDLGVBQWUsR0FBR0MsUUFBUSxDQUFDUCxhQUFULENBQXVCLGVBQXZCLENBQXRCOztBQUVBLE1BQUksQ0FBQ00sZUFBTCxFQUFzQjtBQUNyQjtBQUNBOztBQUVEQSxFQUFBQSxlQUFlLENBQUNFLGdCQUFoQixDQUFpQyxXQUFqQyxFQUE4Q04saUJBQTlDO0FBQ0FJLEVBQUFBLGVBQWUsQ0FBQ0UsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDTixpQkFBMUM7QUFFQSxNQUFJTyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQXBCOztBQUVBLE1BQUksQ0FBQ0QsYUFBTCxFQUFvQjtBQUNuQjtBQUNBOztBQUVELE9BQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsYUFBYSxDQUFDRyxNQUFsQyxFQUEwQ0QsQ0FBQyxFQUEzQyxFQUErQztBQUM5Q0YsSUFBQUEsYUFBYSxDQUFDRSxDQUFELENBQWIsQ0FBaUJILGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ04saUJBQTNDO0FBQ0E7QUFDRCxDLENBRUQ7OztBQUNBLElBQUksT0FBT1osTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxDQUFDdUIsU0FBUCxLQUFxQkMsU0FBMUQsRUFBcUU7QUFDcEVULEVBQUFBLG1DQUFtQztBQUNuQzs7QUFFRCxJQUFJLE9BQU9VLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDbENBLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQmxDLElBQUFBLGVBQWUsRUFBZkE7QUFEZ0IsR0FBakI7QUFHQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby12YXI6IDAsIHByZWZlci1jb25zdDogMCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNob3VsZERvY2tSaWdodChlbG0pIHtcblx0aWYgKCFlbG0pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0dmFyIHJlY3QgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHZhciBlbG1XaWR0aCA9IHJlY3Qud2lkdGg7XG5cdHZhciBlbG1MZWZ0ID0gcmVjdC5sZWZ0O1xuXG5cdHJldHVybiAoKGVsbVdpZHRoICsgZWxtTGVmdCkgPiAod2luZG93LnBhZ2VYT2Zmc2V0ICsgd2luZG93LmlubmVyV2lkdGgpKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRG9ja1ZlcnRpY2FsTGVmdChlbG0pIHtcblx0aWYgKCFlbG0pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgcmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRyZXR1cm4gcmVjdC5sZWZ0IDwgMDtcblxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkNoaWxkTmF2KGVsbSkge1xuXHRpZiAoc2hvdWxkRG9ja1JpZ2h0KGVsbSkpIHtcblx0XHRlbG0uY2xhc3NMaXN0LmFkZCgnbmF2LWNoaWxkcmVuLS1yaWdodCcpO1xuXHR9XG5cblx0aWYgKHNob3VsZERvY2tWZXJ0aWNhbExlZnQoZWxtKSkge1xuXHRcdGVsbS5jbGFzc0xpc3QuYWRkKCduYXYtY2hpbGRyZW4tLXZlcnRpY2FsLS1sZWZ0Jyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlQb3NpdGlvblRvU3VibmF2KGVsbSkge1xuXHRpZiAoZWxtLnRhZ05hbWUgPT09ICdMSScgJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucygnbGluaycpKSB7XG5cdFx0cmV0dXJuIHBvc2l0aW9uQ2hpbGROYXYoZWxtLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY2hpbGRyZW4nKSk7XG5cdH0gZWxzZSBpZiAoZWxtLnBhcmVudE5vZGUpIHtcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRvIGNoZWNrIGlmIHRoZSBwYXJlbnQgbm9kZSBpcyBgbGkubGlua2Bcblx0XHRyZXR1cm4gYXBwbHlQb3NpdGlvblRvU3VibmF2KGVsbS5wYXJlbnROb2RlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJuYXZFdmVudChldmVudCkge1xuXHRhcHBseVBvc2l0aW9uVG9TdWJuYXYoZXZlbnQudGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBTdWJOYXZQb3NpdGlvbmluZ0V2ZW50SGFuZGxlcnMoKSB7XG5cdHZhciBkZXNrdG9wTGlua0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcExpbmtzJyk7XG5cblx0aWYgKCFkZXNrdG9wTGlua0xpc3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRkZXNrdG9wTGlua0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlU3VibmF2RXZlbnQpO1xuXHRkZXNrdG9wTGlua0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdWJuYXZFdmVudCk7XG5cblx0dmFyIHRvcExldmVsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVza3RvcExpbmtzID4gbGkgPiBhJyk7XG5cblx0aWYgKCF0b3BMZXZlbExpbmtzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b3BMZXZlbExpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dG9wTGV2ZWxMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZVN1Ym5hdkV2ZW50KTtcblx0fVxufVxuXG4vLyBvbmx5IGV4ZWN1dGUgd2hlbiBpbiBwcmV2aWV3IG9yIHB1Ymxpc2ggbW9kZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy50b3dlckRhdGEgPT09IHVuZGVmaW5lZCkge1xuXHRzZXR1cFN1Yk5hdlBvc2l0aW9uaW5nRXZlbnRIYW5kbGVycygpO1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdFx0c2hvdWxkRG9ja1JpZ2h0LFxuXHR9O1xufVxuIl19

/*********/
/* eslint no-var: 0, prefer-const: 0 */
'use strict';

var MEDIA_GALLERY_SLIDESHOW_SELECTOR = '.media-gallery--slideshow';
var SLIDESHOW_CONTAINER_SELECTOR = '[data-slideshow]';
var THUMBNAIL_CONTAINER_SELECTOR = '[data-media-gallery-list]';
var THUMBNAIL_WRAPPER_SELECTOR = '[data-slideshow-thumb-selected]';
var SLIDESHOW_TRANSLATE_MULTIPLIER = 100;

function scrollToSelected(slideshow) {
  var container = slideshow.querySelector(THUMBNAIL_CONTAINER_SELECTOR);
  var image = slideshow.querySelector('[data-slideshow-thumb-selected="true"]');
  container.scrollLeft = image.offsetLeft - container.offsetWidth / 2 + image.offsetWidth / 2;
}

function incrementSlideCount(slideshow, increment) {
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var numOfSlides = parseInt(column.dataset.slideCount);
  var currentSlide = parseInt(column.dataset.currentSlide);
  var newCurrentSlide = currentSlide + increment;

  if (newCurrentSlide < 0) {
    scrollToSlide(slideshow, numOfSlides - 1);
  } else if (newCurrentSlide + 1 > numOfSlides) {
    scrollToSlide(slideshow, 0);
  } else {
    scrollToSlide(slideshow, newCurrentSlide);
  }
}

function toggleSlideshowPause(slideshow) {
  var playButton = slideshow.querySelector('.slideshow__control--play');
  var pauseButton = slideshow.querySelector('.slideshow__control--pause');

  if (slideshow.dataset.slideshowAutoplayPaused === 'true') {
    playButton.classList.add('slideshow__control--invisible');
    pauseButton.classList.remove('slideshow__control--invisible');
    slideshow.dataset.slideshowAutoplayPaused = 'false';
  } else if (slideshow.dataset.slideshowAutoplayPaused === 'false') {
    pauseButton.classList.add('slideshow__control--invisible');
    playButton.classList.remove('slideshow__control--invisible');
    slideshow.dataset.slideshowAutoplayPaused = 'true';
  }
}

function setUpAutoPlay(slideshow) {
  if (slideshow.dataset.slideshowAutoplay === 'true') {
    var playButton = slideshow.querySelector('.slideshow__control--play');
    var pauseButton = slideshow.querySelector('.slideshow__control--pause');
    playButton.addEventListener('click', toggleSlideshowPause.bind(null, slideshow));
    pauseButton.addEventListener('click', toggleSlideshowPause.bind(null, slideshow));
    var autoplayTime = slideshow.dataset.slideshowAutoplayTime;
    setInterval(function () {
      if (slideshow.dataset.slideshowAutoplayPaused === 'false') {
        incrementSlideCount(slideshow, 1);
      }
    }, autoplayTime * 1000);
  }
}

function scrollToSlide(slideshow, value) {
  var column = slideshow.querySelector(SLIDESHOW_CONTAINER_SELECTOR);
  var numOfSlides = parseInt(column.dataset.slideCount);
  column.dataset.currentSlide = value;
  setTranslateValue(column, SLIDESHOW_TRANSLATE_MULTIPLIER * (1 / numOfSlides), '%');
  var thumbnailContainer = slideshow.querySelector(THUMBNAIL_CONTAINER_SELECTOR);
  thumbnailContainer.dataset.currentSlide = value;
  setThumbnailHighlight(thumbnailContainer);
  scrollToSelected(slideshow);
}

function setTranslateValue(wrapper, multiplier, unit) {
  var newTranslateValue = 'translateX(-' + parseInt(wrapper.dataset.currentSlide) * multiplier + unit + ')';
  wrapper.style.transform = newTranslateValue;
}

function setThumbnailHighlight(thumbnailContainer) {
  var currentSlide = thumbnailContainer.dataset.currentSlide;
  var thumbnails = thumbnailContainer.querySelectorAll(THUMBNAIL_WRAPPER_SELECTOR);

  for (var i = 0; i < thumbnails.length; i++) {
    var thumbnail = thumbnails[i];
    var slide = thumbnail.dataset.slide;

    if (slide === currentSlide) {
      thumbnail.classList.add('media-gallery-option--highlighted');
      thumbnail.dataset.slideshowThumbSelected = 'true';
    } else {
      thumbnail.classList.remove('media-gallery-option--highlighted');
      thumbnail.dataset.slideshowThumbSelected = 'false';
    }
  }
}

function setUpSlideshows() {
  var slideshows = document.querySelectorAll(MEDIA_GALLERY_SLIDESHOW_SELECTOR);

  for (var i = 0; i < slideshows.length; i++) {
    var slideshow = slideshows[i];
    setUpAutoPlay(slideshow);
    var leftButton = slideshow.querySelector('[data-slideshow-left]');
    var rightButton = slideshow.querySelector('[data-slideshow-right]');

    if (leftButton && rightButton) {
      leftButton.addEventListener('click', incrementSlideCount.bind(null, slideshow, -1));
      rightButton.addEventListener('click', incrementSlideCount.bind(null, slideshow, 1));
    }

    var thumbnails = slideshow.querySelectorAll(THUMBNAIL_WRAPPER_SELECTOR);

    for (var j = 0; j < thumbnails.length; j++) {
      var thumbnail = thumbnails[j];
      var slideNum = thumbnail.dataset.slide;
      thumbnail.addEventListener('click', scrollToSlide.bind(null, slideshow, slideNum));
    }
  }
}

setUpSlideshows();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYXNvbi9zY3JpcHQvcHVibGljLXNjcmlwdC9zbGlkZXNob3cuanMiXSwibmFtZXMiOlsiTUVESUFfR0FMTEVSWV9TTElERVNIT1dfU0VMRUNUT1IiLCJTTElERVNIT1dfQ09OVEFJTkVSX1NFTEVDVE9SIiwiVEhVTUJOQUlMX0NPTlRBSU5FUl9TRUxFQ1RPUiIsIlRIVU1CTkFJTF9XUkFQUEVSX1NFTEVDVE9SIiwiU0xJREVTSE9XX1RSQU5TTEFURV9NVUxUSVBMSUVSIiwic2Nyb2xsVG9TZWxlY3RlZCIsInNsaWRlc2hvdyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZSIsInNjcm9sbExlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJpbmNyZW1lbnRTbGlkZUNvdW50IiwiaW5jcmVtZW50IiwiY29sdW1uIiwibnVtT2ZTbGlkZXMiLCJwYXJzZUludCIsImRhdGFzZXQiLCJzbGlkZUNvdW50IiwiY3VycmVudFNsaWRlIiwibmV3Q3VycmVudFNsaWRlIiwic2Nyb2xsVG9TbGlkZSIsInRvZ2dsZVNsaWRlc2hvd1BhdXNlIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwic2xpZGVzaG93QXV0b3BsYXlQYXVzZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRVcEF1dG9QbGF5Iiwic2xpZGVzaG93QXV0b3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImF1dG9wbGF5VGltZSIsInNsaWRlc2hvd0F1dG9wbGF5VGltZSIsInNldEludGVydmFsIiwidmFsdWUiLCJzZXRUcmFuc2xhdGVWYWx1ZSIsInRodW1ibmFpbENvbnRhaW5lciIsInNldFRodW1ibmFpbEhpZ2hsaWdodCIsIndyYXBwZXIiLCJtdWx0aXBsaWVyIiwidW5pdCIsIm5ld1RyYW5zbGF0ZVZhbHVlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0aHVtYm5haWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJ0aHVtYm5haWwiLCJzbGlkZSIsInNsaWRlc2hvd1RodW1iU2VsZWN0ZWQiLCJzZXRVcFNsaWRlc2hvd3MiLCJzbGlkZXNob3dzIiwiZG9jdW1lbnQiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJqIiwic2xpZGVOdW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7O0FBRUEsSUFBSUEsZ0NBQWdDLEdBQUcsMkJBQXZDO0FBQ0EsSUFBSUMsNEJBQTRCLEdBQUcsa0JBQW5DO0FBQ0EsSUFBSUMsNEJBQTRCLEdBQUcsMkJBQW5DO0FBQ0EsSUFBSUMsMEJBQTBCLEdBQUcsaUNBQWpDO0FBQ0EsSUFBSUMsOEJBQThCLEdBQUcsR0FBckM7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMEJDLFNBQTFCLEVBQXFDO0FBRXBDLE1BQU1DLFNBQVMsR0FBR0QsU0FBUyxDQUFDRSxhQUFWLENBQXdCTiw0QkFBeEIsQ0FBbEI7QUFDQSxNQUFNTyxLQUFLLEdBQUdILFNBQVMsQ0FBQ0UsYUFBVixDQUF3Qix3Q0FBeEIsQ0FBZDtBQUNBRCxFQUFBQSxTQUFTLENBQUNHLFVBQVYsR0FBdUJELEtBQUssQ0FBQ0UsVUFBTixHQUFvQkosU0FBUyxDQUFDSyxXQUFWLEdBQXdCLENBQTVDLEdBQWtESCxLQUFLLENBQUNHLFdBQU4sR0FBb0IsQ0FBN0Y7QUFDQTs7QUFFRCxTQUFTQyxtQkFBVCxDQUE2QlAsU0FBN0IsRUFBd0NRLFNBQXhDLEVBQW1EO0FBQ2xELE1BQUlDLE1BQU0sR0FBR1QsU0FBUyxDQUFDRSxhQUFWLENBQXdCUCw0QkFBeEIsQ0FBYjtBQUNBLE1BQUllLFdBQVcsR0FBR0MsUUFBUSxDQUFDRixNQUFNLENBQUNHLE9BQVAsQ0FBZUMsVUFBaEIsQ0FBMUI7QUFDQSxNQUFJQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0YsTUFBTSxDQUFDRyxPQUFQLENBQWVFLFlBQWhCLENBQTNCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHRCxZQUFZLEdBQUdOLFNBQXJDOztBQUNBLE1BQUlPLGVBQWUsR0FBRyxDQUF0QixFQUF5QjtB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VixDQUEyQjdDLDBCQUEzQixDQUFqQjs7QUFFQSxTQUFLLElBQUl3RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixVQUFVLENBQUNHLE1BQS9CLEVBQXVDUyxDQUFDLEVBQXhDLEVBQTRDO0FBQzNDLFVBQUlSLFNBQVMsR0FBR0osVUFBVSxDQUFDWSxDQUFELENBQTFCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHVCxTQUFTLENBQUNqQyxPQUFWLENBQWtCa0MsS0FBakM7QUFDQUQsTUFBQUEsU0FBUyxDQUFDbkIsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0NWLGFBQWEsQ0FBQ1csSUFBZCxDQUFtQixJQUFuQixFQUF5QjNCLFNBQXpCLEVBQW9Dc0QsUUFBcEMsQ0FBcEM7QUFDQTtBQUNEO0FBQ0Q7O0FBRUROLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdmFyOiAwLCBwcmVmZXItY29uc3Q6IDAgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVESUFfR0FMTEVSWV9TTElERVNIT1dfU0VMRUNUT1IgPSAnLm1lZGlhLWdhbGxlcnktLXNsaWRlc2hvdyc7XG52YXIgU0xJREVTSE9XX0NPTlRBSU5FUl9TRUxFQ1RPUiA9ICdbZGF0YS1zbGlkZXNob3ddJztcbnZhciBUSFVNQk5BSUxfQ09OVEFJTkVSX1NFTEVDVE9SID0gJ1tkYXRhLW1lZGlhLWdhbGxlcnktbGlzdF0nO1xudmFyIFRIVU1CTkFJTF9XUkFQUEVSX1NFTEVDVE9SID0gJ1tkYXRhLXNsaWRlc2hvdy10aHVtYi1zZWxlY3RlZF0nO1xudmFyIFNMSURFU0hPV19UUkFOU0xBVEVfTVVMVElQTElFUiA9IDEwMDtcblxuZnVuY3Rpb24gc2Nyb2xsVG9TZWxlY3RlZChzbGlkZXNob3cpIHtcblxuXHRjb25zdCBjb250YWluZXIgPSBzbGlkZXNob3cucXVlcnlTZWxlY3RvcihUSFVNQk5BSUxfQ09OVEFJTkVSX1NFTEVDVE9SKTtcblx0Y29uc3QgaW1hZ2UgPSBzbGlkZXNob3cucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVzaG93LXRodW1iLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xuXHRjb250YWluZXIuc2Nyb2xsTGVmdCA9IGltYWdlLm9mZnNldExlZnQgLSAoY29udGFpbmVyLm9mZnNldFdpZHRoIC8gMikgKyAoaW1hZ2Uub2Zmc2V0V2lkdGggLyAyKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50U2xpZGVDb3VudChzbGlkZXNob3csIGluY3JlbWVudCkge1xuXHR2YXIgY29sdW1uID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoU0xJREVTSE9XX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cdHZhciBudW1PZlNsaWRlcyA9IHBhcnNlSW50KGNvbHVtbi5kYXRhc2V0LnNsaWRlQ291bnQpO1xuXHR2YXIgY3VycmVudFNsaWRlID0gcGFyc2VJbnQoY29sdW1uLmRhdGFzZXQuY3VycmVudFNsaWRlKTtcblx0dmFyIG5ld0N1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZSArIGluY3JlbWVudDtcblx0aWYgKG5ld0N1cnJlbnRTbGlkZSA8IDApIHtcblx0XHRzY3JvbGxUb1NsaWRlKHNsaWRlc2hvdywgbnVtT2ZTbGlkZXMgLSAxKTtcblx0fSBlbHNlIGlmIChuZXdDdXJyZW50U2xpZGUgKyAxID4gbnVtT2ZTbGlkZXMpIHtcblx0XHRzY3JvbGxUb1NsaWRlKHNsaWRlc2hvdywgMCk7XG5cdH0gZWxzZSB7XG5cdFx0c2Nyb2xsVG9TbGlkZShzbGlkZXNob3csIG5ld0N1cnJlbnRTbGlkZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2xpZGVzaG93UGF1c2Uoc2xpZGVzaG93KSB7XG5cdHZhciBwbGF5QnV0dG9uID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXNob3dfX2NvbnRyb2wtLXBsYXknKTtcblx0dmFyIHBhdXNlQnV0dG9uID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXNob3dfX2NvbnRyb2wtLXBhdXNlJyk7XG5cblx0aWYgKHNsaWRlc2hvdy5kYXRhc2V0LnNsaWRlc2hvd0F1dG9wbGF5UGF1c2VkID09PSAndHJ1ZScpIHtcblx0XHRwbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NsaWRlc2hvd19fY29udHJvbC0taW52aXNpYmxlJyk7XG5cdFx0cGF1c2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVzaG93X19jb250cm9sLS1pbnZpc2libGUnKTtcblx0XHRzbGlkZXNob3cuZGF0YXNldC5zbGlkZXNob3dBdXRvcGxheVBhdXNlZCA9ICdmYWxzZSc7XG5cdH0gZWxzZSBpZiAoc2xpZGVzaG93LmRhdGFzZXQuc2xpZGVzaG93QXV0b3BsYXlQYXVzZWQgPT09ICdmYWxzZScpIHtcblx0XHRwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXNob3dfX2NvbnRyb2wtLWludmlzaWJsZScpO1xuXHRcdHBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVzaG93X19jb250cm9sLS1pbnZpc2libGUnKTtcblx0XHRzbGlkZXNob3cuZGF0YXNldC5zbGlkZXNob3dBdXRvcGxheVBhdXNlZCA9ICd0cnVlJztcblx0fVxufVxuXG5mdW5jdGlvbiBzZXRVcEF1dG9QbGF5KHNsaWRlc2hvdykge1xuXHRpZiAoc2xpZGVzaG93LmRhdGFzZXQuc2xpZGVzaG93QXV0b3BsYXkgPT09ICd0cnVlJykge1xuXHRcdHZhciBwbGF5QnV0dG9uID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXNob3dfX2NvbnRyb2wtLXBsYXknKTtcblx0XHR2YXIgcGF1c2VCdXR0b24gPSBzbGlkZXNob3cucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvd19fY29udHJvbC0tcGF1c2UnKTtcblxuXHRcdHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTbGlkZXNob3dQYXVzZS5iaW5kKG51bGwsIHNsaWRlc2hvdykpO1xuXHRcdHBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2xpZGVzaG93UGF1c2UuYmluZChudWxsLCBzbGlkZXNob3cpKTtcblxuXHRcdHZhciBhdXRvcGxheVRpbWUgPSBzbGlkZXNob3cuZGF0YXNldC5zbGlkZXNob3dBdXRvcGxheVRpbWU7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHNsaWRlc2hvdy5kYXRhc2V0LnNsaWRlc2hvd0F1dG9wbGF5UGF1c2VkID09PSAnZmFsc2UnKSB7XG5cdFx0XHRcdGluY3JlbWVudFNsaWRlQ291bnQoc2xpZGVzaG93LCAxKTtcblx0XHRcdH1cblx0XHR9LCBhdXRvcGxheVRpbWUgKiAxMDAwKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzY3JvbGxUb1NsaWRlKHNsaWRlc2hvdywgdmFsdWUpIHtcblxuXHR2YXIgY29sdW1uID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoU0xJREVTSE9XX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cdHZhciBudW1PZlNsaWRlcyA9IHBhcnNlSW50KGNvbHVtbi5kYXRhc2V0LnNsaWRlQ291bnQpO1xuXHRjb2x1bW4uZGF0YXNldC5jdXJyZW50U2xpZGUgPSB2YWx1ZTtcblx0c2V0VHJhbnNsYXRlVmFsdWUoY29sdW1uLCBTTElERVNIT1dfVFJBTlNMQVRFX01VTFRJUExJRVIgKiAoMSAvIG51bU9mU2xpZGVzKSwgJyUnKTtcblxuXHR2YXIgdGh1bWJuYWlsQ29udGFpbmVyID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoVEhVTUJOQUlMX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cdHRodW1ibmFpbENvbnRhaW5lci5kYXRhc2V0LmN1cnJlbnRTbGlkZSA9IHZhbHVlO1xuXG5cdHNldFRodW1ibmFpbEhpZ2hsaWdodCh0aHVtYm5haWxDb250YWluZXIpO1xuXHRzY3JvbGxUb1NlbGVjdGVkKHNsaWRlc2hvdyk7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZVZhbHVlKHdyYXBwZXIsIG11bHRpcGxpZXIsIHVuaXQpIHtcblx0dmFyIG5ld1RyYW5zbGF0ZVZhbHVlID0gJ3RyYW5zbGF0ZVgoLScgKyAocGFyc2VJbnQod3JhcHBlci5kYXRhc2V0LmN1cnJlbnRTbGlkZSkgKiBtdWx0aXBsaWVyKSArIHVuaXQgKyAnKSc7XG5cdHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldFRodW1ibmFpbEhpZ2hsaWdodCh0aHVtYm5haWxDb250YWluZXIpIHtcblxuXHR2YXIgY3VycmVudFNsaWRlID0gdGh1bWJuYWlsQ29udGFpbmVyLmRhdGFzZXQuY3VycmVudFNsaWRlO1xuXHR2YXIgdGh1bWJuYWlscyA9IHRodW1ibmFpbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFRIVU1CTkFJTF9XUkFQUEVSX1NFTEVDVE9SKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aHVtYm5haWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRodW1ibmFpbCA9IHRodW1ibmFpbHNbaV07XG5cdFx0dmFyIHNsaWRlID0gdGh1bWJuYWlsLmRhdGFzZXQuc2xpZGU7XG5cdFx0aWYgKHNsaWRlID09PSBjdXJyZW50U2xpZGUpIHtcblx0XHRcdHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCdtZWRpYS1nYWxsZXJ5LW9wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcblx0XHRcdHRodW1ibmFpbC5kYXRhc2V0LnNsaWRlc2hvd1RodW1iU2VsZWN0ZWQgPSAndHJ1ZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1ibmFpbC5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpYS1nYWxsZXJ5LW9wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcblx0XHRcdHRodW1ibmFpbC5kYXRhc2V0LnNsaWRlc2hvd1RodW1iU2VsZWN0ZWQgPSAnZmFsc2UnO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRVcFNsaWRlc2hvd3MoKSB7XG5cblx0dmFyIHNsaWRlc2hvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE1FRElBX0dBTExFUllfU0xJREVTSE9XX1NFTEVDVE9SKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc2hvd3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgc2xpZGVzaG93ID0gc2xpZGVzaG93c1tpXTtcblxuXHRcdHNldFVwQXV0b1BsYXkoc2xpZGVzaG93KTtcblxuXHRcdHZhciBsZWZ0QnV0dG9uID0gc2xpZGVzaG93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlc2hvdy1sZWZ0XScpO1xuXHRcdHZhciByaWdodEJ1dHRvbiA9IHNsaWRlc2hvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXNob3ctcmlnaHRdJyk7XG5cblx0XHRpZiAobGVmdEJ1dHRvbiAmJiByaWdodEJ1dHRvbikge1xuXHRcdFx0bGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudFNsaWRlQ291bnQuYmluZChudWxsLCBzbGlkZXNob3csIC0xKSk7XG5cdFx0XHRyaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudFNsaWRlQ291bnQuYmluZChudWxsLCBzbGlkZXNob3csIDEpKTtcblx0XHR9XG5cblx0XHR2YXIgdGh1bWJuYWlscyA9IHNsaWRlc2hvdy5xdWVyeVNlbGVjdG9yQWxsKFRIVU1CTkFJTF9XUkFQUEVSX1NFTEVDVE9SKTtcblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgdGh1bWJuYWlscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIHRodW1ibmFpbCA9IHRodW1ibmFpbHNbal07XG5cdFx0XHR2YXIgc2xpZGVOdW0gPSB0aHVtYm5haWwuZGF0YXNldC5zbGlkZTtcblx0XHRcdHRodW1ibmFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRvU2xpZGUuYmluZChudWxsLCBzbGlkZXNob3csIHNsaWRlTnVtKSk7XG5cdFx0fVxuXHR9XG59XG5cbnNldFVwU2xpZGVzaG93cygpO1xuIl19

/*********/
var tower = {"document":{"documentStyle":{"backgroundColor":"#002248","colorPalette":{"colors":{"color1":{"name":"Custom1","value":"#002248"},"color2":{"name":"Custom2","value":"#043965"},"color3":{"name":"Custom3","value":"#FFFFFF"},"color4":{"name":"Default - White","value":"#ffffff"},"color5":{"name":"Default - Black","value":"#333333"}},"name":"Custom","slug":"custom","matchingDefault":false},"customColorPalette":["#002248","#043965","#FFFFFF"],"fontPack":{"fontSizes":{"fontSize1":{"name":"Smallest","value":"60%"},"fontSize2":{"name":"Smaller","value":"80%"},"fontSize3":{"name":"Normal","value":"100%"},"fontSize4":{"name":"Larger","value":"120%"},"fontSize5":{"name":"Largest","value":"140%"}},"fonts":{"font1":{"name":"Cabin","value":"Cabin"},"font2":{"name":"Cabin","value":"Cabin"}},"imports":{"google":["Cabin","Cabin"]},"name":"Cabin & Cabin","slug":"cabin_cabin"},"width":"1100px","align":"center","buttonStyle":{"style":"depth","radius":"soft","userSet":true},"siteAlignment":"center","backgroundImage":{"url":"https://assets.digital.vistaprint.com/production/6f798ab0-69c1-4b68-bd84-54661fdd9dba","cropData":{"x":0,"y":0,"width":8192,"height":4537},"rotation":0},"backgroundOpacity":0.5,"backgroundGradient":true,"favicon":{"url":"https://imageprocessor.digital.vistaprint.com/crop/35,1,179x179/resize/32x32/png/https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1078430385-6e01d90177-eee510&use_crop=1&croptop=0.0752903957708308&cropleft=0.00446091488931431&cropbottom=0.0752903957708308&cropright=0.00446091488931431&png=1","cropData":{"x":35,"y":1,"width":179,"height":179},"rotation":0,"altText":"","titleText":"","previousTab":1,"displayDescription":"","displayTitle":"","type":"image","style":"cover","parallax":false},"layout":{"slug":"standard"}},"headerBlock":{"props":{"type":"header","nameable":true,"name":"","moveable":false,"position":"top","background":{"color":{"value":"color1","opacity":0.5},"image":{"url":"https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1085350399-6e01d900fe-dcf44e&png=1","originalUrl":"https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1085350399-6e01d900fe-dcf44e&png=1","cropData":{"verticalOffset":50},"imageSearchText":"","imageId":"","forceChangeImage":false,"previousTab":1,"style":"cover","parallax":false},"className":"h-auto","backgroundType":"image","imageTransparency":true},"userHeight":{"top":0,"bottom":6},"fluid":true},"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":5,"contentPadding":{"top":10,"left":10,"bottom":10,"right":5},"alignment":"center","uid":"8174121ee9484ba9987e7a9b4f933921","backgrounds":[{"color":"rgba(0, 34, 72, 0.78)","size":"cover","position":{"x":"center","y":"center"}}],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"subGrid","children":[{"pip":"subGridCol","props":{"size":4,"contentPadding":{"top":10,"bottom":10,"right":5,"left":5},"alignment":"center","uid":"93b1e7aa687c44a7a93d23582e5973b4","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"props":{"uid":"124b621cf86f49788b1d155f5ece3b32","percentWidth":60,"originalUrl":"https://assets.digital.vistaprint.com/production/e0781bbe-f237-4b89-b967-ed0083ded8b5","openLinkInNewTab":false,"lightboxStatus":"default","url":"https://imageprocessor.digital.vistaprint.com/crop/0,0,4531x4500/maxWidth/2000/https://assets.digital.vistaprint.com/production/e0781bbe-f237-4b89-b967-ed0083ded8b5","cropData":{"x":0,"y":0,"width":4531,"height":4500},"linkUrl":"/","previousTab":1,"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"right":"auto","left":"auto"}},"tag":"div","mode":{},"documentStyle":{},"blockData":{}},"pip":"imageMedia"}]},{"pip":"subGridCol","props":{"size":8,"contentPadding":{"top":10,"bottom":10,"right":10,"left":5},"alignment":"center","uid":"657d05e6ed8743e5b797a05607bcaa49","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":3,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p style=\"text-align: right;\"><span class=\"font-size6\" style=\"\">Mr. Process&nbsp;Server</span><span class=\"font-size8\" style=\"font-weight: bold;\">&nbsp;</span></p><p style=\"text-align: right;\"><span class=\"font-size8\" style=\"font-weight: bold;\">&nbsp;&nbsp; &nbsp;<span class=\"font-size7\">Flat Rate&nbsp;</span></span><b><span data-font-required=\"google:Aclonica\" class=\"font-aclonica font-size7\">$95 !</span></b><span class=\"font-size7\">&nbsp;</span></p><p style=\"text-align: right;\"><br></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","defaultColor":"","lineHeightClassName":"lineHeight-1-1","uid":"b2dca8dd33fa49b199341384d123f2f6","defaultAlignment":"left","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"defaultFont":"font1","requiresCustomization":true,"contentBinding":null,"fontRequired":["google:Aclonica"],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]}],"props":{"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":null,"mobileOverrides":null,"uid":"753896423313477daa6832293cdbec54"}},{"pip":"button","props":{"uid":"d0592cddf23c4dcfa17b83cf3b11deac","buttonStyle":{"radius":"rounded","style":"depth"},"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"content":"<p></p><p><span class=\"font-size7\"><b>604-618-4100</b></span></p><p></p>","fontRequired":[],"href":"tel:604-618-4100","newWindow":false,"internalPageId":"","isDonateButton":false,"customized":true,"paragraphWrappedContent":true}}]},{"pip":"gridCol","props":{"size":7,"contentPadding":{"top":10,"right":20,"bottom":10,"left":0},"alignment":"center","uid":"7d7b5e30447c41fb97a2f782c1747cf8","backgrounds":[{"color":"rgba(0, 34, 72, 0.5)","size":"cover","position":{"x":"center","y":"center"}}],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"navigation","props":{"mobileMenuInactiveButtonColor":"color4","mobileMenu":"tablet","backgroundColor":"","linkColor":"","fontSize":"size1","bold":false,"italic":false,"adjustableMobileMenuColor":true,"decoration":"underscore","uid":"475ee92573cb464196b654b61d487279","contentMargin":{"left":"auto","right":0,"top":0,"bottom":20},"tabletOverrides":null,"mobileOverrides":null,"defaultFontSize":"fontSize3","defaultFont":"font2","spacing":10}}]}],"props":{"uid":"1f8669bc2b06460ab65227357c90f70c"}}],"slug":"grid-navigation-normal","displayName":"Normal Navigation","version":3,"_uid":"2b1dc3d144094167aad19d17c9f9625d"},"footerBlock":{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":12,"contentPadding":{"top":14,"right":10,"bottom":10,"left":10},"alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[],"uid":"27e0d43f1bea4d8cbf59f42ca3ea97c4"},"children":[{"pip":"paragraph","props":{"uid":"c57353610af2451caf9ea1cff8371f73","defaultFontSize":"size3","defaultFont":"font2","content":"<p><b><span style=\"font-size: 1rem; background-color: transparent; font-variant-ligatures: inherit; font-variant-caps: inherit; text-transform: inherit;\" class=\"font-color1 font-size7\">97 % Success Rate on our First Attempts &amp; 105+ GOOGLE Reviews&nbsp;</span></b></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}},{"pip":"navigation","props":{"defaultFontSize":"fontSize3","defaultFont":"font2","decoration":"underscore","fontSize":"size1","bold":false,"italic":false,"mobileMenu":"tablet","contentMargin":{"top":0,"right":"auto","bottom":38,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto","bottom":0}},"mobileOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto","bottom":0}},"adjustableMobileMenuColor":false,"spacing":10,"uid":"bd686f5c30b7426094f883d5d988d541"}},{"pip":"paragraph","props":{"level":5,"defaultFont":"font2","requiresCustomization":true,"content":"<p><b>© 2010 Mr. Process Server</b></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"uid":"ff74f0e42914402c8a03a1da0c49a7fc","customized":true,"fontRequired":[]}}]}],"props":{"uid":"e13601f138964691a8999645980f4f31"}}],"props":{"nameable":false,"moveable":false,"position":"bottom","positionOverlay":true,"background":{"color":{"value":"color4","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":70,"bottom":70},"type":"footer"},"slug":"grid-footer-navigation","displayName":"Navigation Footer","version":3,"_uid":"bc4fc99dfbe0431ca60da9968a9a7029"},"homePageId":2684877875,"multipage":true,"pages":{"2684877875":{"id":2684877875,"name":"Home","path":"","order":0,"hidden":false,"seoTitle":"Home","seoDescription":"","seoKeywords":"","noIndex":false,"ogImage":{"url":"https://imageprocessor.digital.vistaprint.com/jpeg/80/http://uploads.documents.cimpress.io/v1/uploads/105fc5e8-e8b6-448f-ba59-beacb6ebd849~110/original?tenant=vbu-digital","cropData":{"verticalOffset":50},"mimeType":"image/jpeg","previousTab":1,"type":"image","style":"cover","parallax":false},"blockLinks":[],"currentLayoutSlug":"default","hideGlobalBlocks":false},"1647305878178164":{"id":1647305878178164,"name":"About","path":"about","order":1,"hidden":false,"seoTitle":"About","blockLinks":[],"currentLayoutSlug":"default","hideGlobalBlocks":false},"1647305878895775":{"id":1647305878895775,"name":"Services","path":"services","order":2,"hidden":false,"seoTitle":"Services","seoDescription":"","seoKeywords":"","noIndex":false,"blockLinks":[],"currentLayoutSlug":"default","hideGlobalBlocks":false},"1647305878557674":{"id":1647305878557674,"name":"Contact","path":"contact","order":4,"hidden":false,"seoTitle":"Contact","blockLinks":[]},"1647384375964045":{"id":1647384375964045,"name":"For Landlords & Tenants","path":"for-landlords-and-tenants","order":3,"hidden":false,"external":false,"url":"","seoTitle":"For Landlords & Tenants","blockLinks":[],"currentLayoutSlug":"default","hideGlobalBlocks":false},"1647384893764193":{"id":1647384893764193,"name":"Terms & Policy","path":"terms-and-policy","order":5,"hidden":false,"external":false,"url":"","seoTitle":"Terms & Policy","currentLayoutSlug":"default","hideGlobalBlocks":false,"blockLinks":[]},"1647414224472354":{"id":1647414224472354,"name":"Blog","path":"blog","order":6,"hidden":false,"external":false,"url":"","seoTitle":"Blog","currentLayoutSlug":"2-column-right","hideGlobalBlocks":false,"blockLinks":[]}},"metadata":{"email":"eddie_petrossian@yahoo.com","industry":null,"businessName":null,"hasBeenEdited":true,"injectedScripts":{"googleAnalytics":"<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-149845372-1\"><" + "/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-149845372-1');\n<" + "/script>\n<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-149845372-1\"><" + "/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-149845372-1');\n<" + "/script>\n\n<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-149910267-1\">\n<" + "/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-149910267-1');\n<" + "/script>","genericThirdParty":""},"publishedUrl":"http://mr-process-server.vpweb.ca","paypalDonateMerchantId":"eddie_petrossian@yahoo.com","paypalDonateCurrency":"CAD","paypalDonateOrg":"Mr. Process Server","contentBinding":{"headerBackgroundImage":{"url":"https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1085350399-6e01d900fe-dcf44e&png=1","originalUrl":"https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1085350399-6e01d900fe-dcf44e&png=1","cropData":{"verticalOffset":50},"imageSearchText":"","imageId":"","forceChangeImage":false,"previousTab":1,"style":"cover","parallax":false}},"headerStyle":"full","towerVersion":"17.0.0","hideGlobalBlocks":false},"builderData":{"recentFonts":[{"name":"Arbutus","slug":"arbutus","public":true,"source":"google","fontFamily":"Arbutus","imageUrl":"/images/fonts/arbutus.png"},{"name":"Alfa Slab One","slug":"alfa_slab_one","public":true,"source":"google","imageUrl":"/images/fonts/alfa_slab_one.png","fontFamily":"Alfa Slab One"}]},"id":2684877875,"blocks":[{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":4,"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"uid":"bce32f7196ff4915a99a4b147c2ddf16","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[]},{"pip":"gridCol","props":{"size":8,"contentPadding":{"right":40,"left":20,"top":10,"bottom":10},"uid":"694efd1182e44142a262c86ff1c4f5f6","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":1,"defaultFontSize":"fontSize4","content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p style=\"text-align: right;\"><span style=\"font-size: 48.96px; text-align: left; background-color: transparent; font-variant-ligatures: inherit; font-variant-caps: inherit; text-transform: inherit;\">Serving All Types of Legal Documents&nbsp;</span></p><p style=\"text-align: right;\"><span style=\"font-size: 48.96px; text-align: left; background-color: transparent; font-variant-ligatures: inherit; font-variant-caps: inherit; text-transform: inherit;\">for a Flat Rate of $95</span><br></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","lineHeightClassName":"lineHeight-undefined","defaultColor":"foreground","uid":"c18ebdd3c712440aa23945d178c921b9","contentMargin":{"top":0,"right":"auto","bottom":40,"left":"auto"},"defaultAlignment":"left","tabletOverrides":{},"mobileOverrides":{},"defaultFont":"font1","requiresCustomization":true,"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}},{"pip":"button","props":{"uid":"fcd4e2a163dc453ab6a148c9151e1a5c","buttonStyle":{"radius":"rounded","style":"outline"},"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"content":"<p></p><p>Call now  604-618-4100</p><p></p>","fontRequired":[],"buttonFontColor":"color3","color":"color3","paragraphWrappedContent":true}}]}],"props":{"uid":"2e75e5ea49194d99891d2280905a0113"}}],"props":{"userHeight":{"top":218,"bottom":249},"background":{"tags":["printBackground"],"color":{"value":"color1","opacity":0.9},"image":{"url":"https://assets.digital.vistaprint.com/production/36cf0069-6829-4d14-a866-92c29e9f2913","flop":false,"imageId":"S000010052","rotation":0,"zoomRatio":1.104172661870503,"imageOffset":{"x":-150.62,"y":-68.86000000000001},"originalUrl":"https://assets.digital.vistaprint.com/production/36cf0069-6829-4d14-a866-92c29e9f2913","previewSize":{"width":1100,"height":661},"isInlineCrop":true,"imageSearchText":"law","originalImageSize":{"width":8192,"height":3620}},"backgroundType":"image","imageTransparency":true}},"slug":"grid-hero-header-dark","displayName":"Dark Header","version":3,"_uid":"09634bba67564224b557650295c6b1c8"},{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":12,"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"uid":"eb2718e49b044915b3d752189d668d1f","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":2,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class=\"font-color3 font-size9\"><b>EXPERIENCED, EFFECTIVE, &amp; TRUSTED.</b></span></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"5e5ce7beb8184009a2f347cf7497afc3","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"defaultFont":"font1","requiresCustomization":true,"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]}],"props":{"uid":"a182f30e0d0147fb8bf26e07b1d290fb"}}],"props":{"background":{"color":{"value":"color1","opacity":1},"image":{"url":"","style":"cover","parallax":false,"savedUrl":"https://assets.digital.vistaprint.com/production/d2eb9b0a-240d-4c62-ac8c-a3032aaf0632","originalUrl":"","savedOriginalUrl":"https://assets.digital.vistaprint.com/production/d2eb9b0a-240d-4c62-ac8c-a3032aaf0632"},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":73,"bottom":62},"layoutConfig":{"id":0,"label":"Top Shadow","embellishments":{"elements":{"topEdges":[{"width":"100%","height":75,"component":{"url":"\thttps://assets.digital.vistaprint.com/production/f06cf11f-22dc-4be6-925b-8852e5fc185a"},"backgroundSize":"contain"}],"leftEdges":[],"rightEdges":[],"bottomEdges":[],"topLeftCorners":[],"topRightCorners":[],"bottomLeftCorners":[],"bottomRightCorners":[]},"container":{}},"userSelectable":true}},"slug":"grid-title-text-v2","displayName":"Title & Text","version":3,"_uid":"d66a86ce6c1542738e7f7304f4902603"},{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":6,"alignment":"center","contentPadding":{"left":20,"right":20,"top":10,"bottom":10},"uid":"8e23107509f64cc8bb0661b38a6fe7ca","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":3,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p style=\"text-align: left;\"><span class=\"font-size7\">More than 25 years of experience</span></p><p style=\"text-align: left;\"><span class=\"font-size7\">working with Lawyers &amp; the Public to Serve Legal Documents in BC.&nbsp;</span></p><p style=\"text-align: left;\"><span class=\"font-size7 font-color4\">____________________</span></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"c6d157acc13f43f1bd58241a217fc5b6","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"defaultFont":"font1","requiresCustomization":true,"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}},{"pip":"paragraph","props":{"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p style=\"text-align: left; \">As an experienced and trusted legal Process Server Eddie personally delivers legal documents at the directive of lawyers, Legal Assistants, individuals, and business owners.</p><p style=\"text-align: left; \">If you are in need of having papers served or have any further questions please give Eddie a call at 604-618-4100 directly.</p><p style=\"text-align: left;\"><br></p><p style=\"text-align: left;\"><a href=\"/about\" data-page-id=\"1627918975414233\"><span class=\"font-color4 font-size3\">Meet Eddie &gt;&gt;</span></a><br></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"85e648eb1b8d4876b53cdcbd4c22b512","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]},{"pip":"gridCol","props":{"size":6,"contentPadding":{"left":20,"right":20,"top":0,"bottom":0},"uid":"c5d2a25ad1ce403495a03046024262ad","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"props":{"uid":"1e7e26a7c27148a68caf2971b5c10643","percentWidth":100,"originalUrl":"https://stockservice.digital.vistaprint.com/7a4cf98c90e311a015486818d4dcbf39.jpg","openLinkInNewTab":true,"lightboxStatus":"default","url":"https://imageprocessor.digital.vistaprint.com/crop/1012,1014,2485x1786/maxWidth/2000/https://stockservice.digital.vistaprint.com/7a4cf98c90e311a015486818d4dcbf39.jpg","cropData":{"x":1012,"y":1014,"width":2485,"height":1786},"previousTab":1,"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"right":"auto","left":"auto"}},"tag":"div","mode":{},"documentStyle":{},"blockData":{}},"pip":"imageMedia"}]}],"props":{"uid":"2df15a2ed21e4d0ca321193f885687a1"}}],"props":{"background":{"color":{"value":"color1","opacity":0.8},"image":{"url":"https://assets.digital.vistaprint.com/production/fdce0e5e-108a-4a8b-86b6-e58046bb00e4","flop":false,"imageId":"","rotation":0,"zoomRatio":1.521309090909091,"imageOffset":{"x":-264.38,"y":-567.71},"originalUrl":"https://assets.digital.vistaprint.com/production/fdce0e5e-108a-4a8b-86b6-e58046bb00e4","previewSize":{"width":1100,"height":505},"isInlineCrop":true,"imageSearchText":"","originalImageSize":{"width":8192,"height":8192}},"backgroundType":"image","imageTransparency":true},"userHeight":{"top":70,"bottom":70}},"slug":"grid-paragraph-graphic","displayName":"Paragraph & Graphic","version":3,"_uid":"280caec0785a45c785c4aa42ab59b684"},{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":12,"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"uid":"d300fa31e1d94781b20d22084062c339","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":2,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p style=\"text-align: left;\">Our Services:&nbsp;</p><p style=\"text-align: left;\"><span class=\"font-color2\">____________________:</span></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"ce57146bcd9e4b5bab7e418ea45c54aa","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"defaultFont":"font1","requiresCustomization":true,"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]}],"props":{"uid":"26fdb151f58c49f28bffd1ac431237f7"}}],"props":{"background":{"color":{"value":"color1","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":80,"bottom":31}},"slug":"grid-title-text-v2","displayName":"Title & Text","version":3,"_uid":"6f27181dad7048bf86225150cc3783f5"},{"props":{"background":{"color":{"value":"color1","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":31,"bottom":0}},"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":4,"spacing":{"top":10,"bottom":10,"left":10,"right":10},"contentPadding":{"top":0,"bottom":0,"left":0,"right":0},"backgrounds":[{"color":"#ffffff","position":{"x":"center","y":"center"},"size":"cover"}],"uid":"9b49827e25844b2dbefe64a0c0e4a70a","alignment":"top","mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[],"border":{"top":{"width":0,"style":"solid","color":"#000"},"right":{"width":0,"style":"solid","color":"#000"},"bottom":{"width":0,"style":"solid","color":"#000"},"left":{"width":0,"style":"solid","color":"#000"},"radius":50}},"children":[{"pip":"subGrid","children":[{"pip":"subGridCol","props":{"size":12,"contentPadding":{"top":10,"bottom":0,"left":20,"right":0},"alignment":"center","uid":"b113a2b0eef6477892196833a3fb14d3","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"svgMedia","props":{"uid":"be92bdb2580f485b8402bb8e23178829","previousTab":1,"percentWidth":20,"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"maxWidth":48,"contentMargin":{"top":0,"right":"auto","left":"auto"}},"stockSearchText":"fast","stockId":"2183332","svgData":"<svg xmlns=\"http://www.w3.org/2000/svg\" data-name=\"Layer 1\" viewBox=\"0 0 128 128\"><path d=\"M35.87 68.19a2 2 0 00-2-2H2a2 2 0 100 3.95h31.88a2 2 0 001.99-1.95zM43.85 56.34H12a2 2 0 100 3.95h31.85a2 2 0 100-3.95zM43.85 76.09H12A2 2 0 1012 80h31.85a2 2 0 100-3.95zM127.52 54.79a5.18 5.18 0 00-6.2-2.81 128.61 128.61 0 01-14.22 3.23h-.1c-2.75 0-24.89-6-29-7.23a4.64 4.64 0 00-1.36-.23 6.2 6.2 0 00-2.91 1c-2.16 1.15-8.79 4.35-13.68 6.79a5.06 5.06 0 004.21 9.19c5.13-2.17 12-4.74 13.65-5.46-.37.36-3.49 5.66-7.15 9.08A11.29 11.29 0 0067.24 75c-.35 2.32-1.43 12.31-1.73 15a37.85 37.85 0 01-9.91 1.22c-1.28 0-2.64-.06-4.05-.2L51 91a5.05 5.05 0 00-5 5.05v1.16a5.07 5.07 0 004.21 5 39.24 39.24 0 006.65.52c8.87 0 18.87-2.4 18.92-6.73.78-2.7.16-6.84.88-9.56.17-.65.43-.86 1-.86h.14c2.35.11 15.53 5.31 27.4 7a4.41 4.41 0 00.63 0 5.4 5.4 0 004.91-3.4 5 5 0 00-3.05-6.41c-7.51-2.63-20.43-7.44-21.29-7.53.17-.22 11.23-9.91 11.62-9.92h.4c3.49 0 8.37.83 11.75.89 1.58 0 9.09-2.52 14.4-4.47a5.19 5.19 0 002.95-6.95zM71 37.25h20.2a10 10 0 001.8 4H80a2 2 0 000 4h20a2 2 0 00.35 0h.65a10 10 0 002.21-19.76 10.17 10.17 0 00-2.21-.24H81a2 2 0 000 4h12a9.9 9.9 0 00-1.76 3.87v.15H71a2 2 0 000 4zM95.14 34a6 6 0 015.86-4.75 6.19 6.19 0 011.34.15 5.89 5.89 0 013.71 2.6 6 6 0 01-5 9.23 6.11 6.11 0 01-1.31-.14 6 6 0 01-4.6-7.09z\"/></svg>","tag":"div"}},{"pip":"title","props":{"level":3,"defaultFontSize":"fontSize2","defaultFont":"font1","requiresCustomization":true,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class=\"font-size6 font-color1\">Flat Rate Service in GVRD</span></p><p><span class=\"font-size6 font-color1\">&nbsp;</span></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"fb6a1169b0414a1f98a496fe1b3b4653","defaultAlignment":"left","defaultColor":"#000000","contentMargin":{"bottom":0,"top":0,"right":"auto","left":"auto"},"lineHeightClassName":"lineHeight-2","tabletOverrides":{},"mobileOverrides":{},"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]},{"pip":"subGridCol","props":{"size":12,"contentPadding":{"top":0,"bottom":10,"left":20,"right":0},"uid":"9afa6c68558f4f208c452d1b33edafb9","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"paragraph","props":{"defaultFontSize":"fontSize2","defaultFont":"font2","content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><font color=\"#002248\" class=\"\"><span class=\"font-size3\"><span style=\"font-size: 28px;\">95.00 CAD</span></span></font></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"f7c89242be5c40d6b4e2407d28b02ffe","defaultAlignment":"left","defaultColor":"#000000","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]}],"props":{"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":null,"mobileOverrides":null,"uid":"b4b906a341e94df7a49edc677e7ef73a"}},{"pip":"paragraph","props":{"uid":"547df4bb82934aca8f19c4a3ac9452a6","defaultFontSize":"size3","defaultFont":"font2","content":"<p>3 Attempts</p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]},{"pip":"gridCol","props":{"size":4,"spacing":{"top":10,"bottom":10,"left":10,"right":10},"contentPadding":{"top":0,"bottom":0,"left":0,"right":0},"backgrounds":[{"color":"#ffffff","position":{"x":"center","y":"center"},"size":"cover"}],"uid":"7aad9a6fed3f4bb09106d0b5b51a9a84","alignment":"top","mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[],"border":{"top":{"width":0,"style":"solid","color":"#000"},"right":{"width":0,"style":"solid","color":"#000"},"bottom":{"width":0,"style":"solid","color":"#000"},"left":{"width":0,"style":"solid","color":"#000"},"radius":46}},"children":[{"pip":"svgMedia","props":{"uid":"ea00c4d93ba24ba7841cb9073081ecba","previousTab":1,"defaultDrawerTab":"myImages","linkUrl":"/services","openLinkInNewTab":false,"percentWidth":13.352954090542099,"contentMargin":{"bottom":0,"top":0,"right":"auto","left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"right":"auto","left":"auto"}},"stockSearchText":"papers","stockId":"127451","svgData":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M12.1 88.252a1.06 1.06 0 001.499 0l1.518-1.519c.47.534.954 1.062 1.461 1.569 2.419 2.417 5.06 4.344 7.438 5.424 2.695 1.227 4.849 1.234 6.056.025.006-.007.007-.015.014-.021.006-.007.015-.009.02-.015.195-.214 18.929-20.729 29.696-31.631-.387.683-.685 1.336-.742 1.831-.107.92.15 1.825.725 2.552a3.444 3.444 0 002.32 1.291 3.474 3.474 0 003.842-3.044c.004-.038-.006-.091-.002-.13.167.381.314.773.414 1.178a1.06 1.06 0 002.058-.508 8.995 8.995 0 00-.389-1.197c1.028.344 2.186.562 3.468.562a1.061 1.061 0 000-2.122 8.635 8.635 0 01-2.902-.508c.026-.002.056-.001.081-.004a3.474 3.474 0 003.042-3.844 3.463 3.463 0 00-3.84-3.043c-.436.05-.996.289-1.59.607 11.031-10.613 26.883-25.071 27.07-25.241.007-.007.009-.015.016-.021.006-.006.014-.007.02-.013l.027-.032c.01-.011.023-.017.033-.027.02-.02.027-.048.045-.068 1.664-1.774 1.959-4.622.813-8.055-1.09-3.266-3.368-6.742-6.418-9.791-3.048-3.049-6.524-5.328-9.79-6.417-1.385-.463-2.675-.691-3.838-.691-1.788 0-3.275.541-4.345 1.609-.007.009-.013.018-.021.026-.003.003-.009.005-.011.008-.176.193-15.142 16.561-26.055 27.886-1.366.168-2.504.672-3.364 1.533-.898.896-1.419 2.091-1.564 3.509l-.257.258C28.416 50.41 6.851 70.049 6.635 70.245c-.007.007-.01.015-.016.021-.007.006-.015.008-.021.014-3.496 3.496-1.079 11.39 5.502 17.972zm12.793 3.545c-2.153-.979-4.573-2.752-6.816-4.994a32.62 32.62 0 01-1.457-1.572l30.117-30.116c3.613 3.387 7.537 5.533 10.886 6.163C46.87 72.223 29.193 91.57 28.567 92.256c-.389.383-1.584.49-3.674-.459zm16.103-50.975c8.164-8.237 21.371-22.514 27.344-29.007.057 1.028.268 2.138.664 3.325a18.95 18.95 0 00.875 2.133c1.111 2.335 2.762 4.702 4.811 6.889L46.735 52.117c-2.447-2.625-4.273-5.501-5.174-8.196-.379-1.137-.559-2.178-.565-3.099zM81.459 23.42c-4.866-4.866-6.479-9.465-5.452-10.495l.001-.002c.373-.374 1.393-.305 2.593.177 1.563.627 3.294 1.843 4.873 3.421 1.427 1.427 2.577 3.016 3.239 4.455l-3.973 3.651c-.424-.38-.851-.776-1.281-1.207zm-7.699-8.143c.65 2.918 3.139 6.582 6.199 9.643 3.031 3.03 6.654 5.504 9.56 6.183-6.002 5.502-21.75 20.009-29.995 28.254l-.023.022c-3.062-.031-7.404-2.166-11.266-5.763L76.92 24.93a1.06 1.06 0 000-1.499c-2.027-2.027-3.673-4.242-4.81-6.427l1.65-1.727zM62.504 65.662a1.33 1.33 0 01-1.056-.51 1.332 1.332 0 01-.282-.992c.051-.436.797-1.643 1.686-2.869.58 1.392 1.038 2.752.988 3.18a1.347 1.347 0 01-1.336 1.191zm5.614-8.455a1.343 1.343 0 011.491 1.182c.085.737-.445 1.407-1.219 1.494-.572 0-1.896-.467-3.144-.988 1.229-.89 2.436-1.637 2.872-1.688zM77.433 8.05c2.958.987 6.142 3.085 8.962 5.905 2.82 2.821 4.918 6.004 5.906 8.963.883 2.645.742 4.815-.377 5.974-.853.775-3.904-.092-7.541-2.895l4.311-3.963c0-.001 0-.002.002-.003.103-.095.186-.209.243-.334.026-.06.03-.124.046-.187.018-.07.047-.137.05-.209a1.058 1.058 0 00-.062-.409l-.001-.003c-.697-1.904-2.117-3.987-3.998-5.869-1.776-1.776-3.76-3.157-5.582-3.889-.945-.38-1.814-.568-2.58-.568-.945 0-1.73.288-2.303.86a.008.008 0 00-.002.004l-.008.009-.007.005-3.311 3.467c-.054-.146-.118-.294-.166-.44-.888-2.658-.743-4.841.392-5.994a.513.513 0 01.021-.022c1.15-1.145 3.338-1.291 6.005-.402zM39.075 42.742c.114.599.261 1.211.475 1.853 1 2.994 3.009 6.163 5.687 9.021l-32.37 32.368C7.842 80.59 5.652 74.24 8.093 71.785c.691-.629 20.49-18.67 30.982-29.043z\"/></svg>","tag":"div"}},{"pip":"subGrid","children":[{"pip":"subGridCol","props":{"size":12,"contentPadding":{"top":10,"bottom":0,"left":20,"right":0},"alignment":"center","uid":"c2ed9b2325994b4781e1e6d68d8c6d92","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":3,"defaultFontSize":"fontSize2","defaultFont":"font1","requiresCustomization":true,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span style=\"color: rgb(0, 34, 72); font-size: 1.5rem; text-decoration-line: inherit; background-color: transparent; font-variant-ligatures: inherit; font-variant-caps: inherit; text-transform: inherit;\">Court Filing &amp; Registry Services</span><br></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"73aad411ec784793ad3cc3a030c4b74f","defaultAlignment":"left","defaultColor":"#000000","contentMargin":{"bottom":0,"top":0,"right":"auto","left":"auto"},"lineHeightClassName":"lineHeight-2","tabletOverrides":{},"mobileOverrides":{},"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]},{"pip":"subGridCol","props":{"size":12,"contentPadding":{"top":0,"bottom":10,"left":20,"right":0},"uid":"c45e0047390d4ae3a494875aa3f1b355","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"paragraph","props":{"defaultFontSize":"fontSize2","defaultFont":"font2","content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><font color=\"#002248\"><span class=\"font-size7\">40.00 C​​AD&nbsp;</span></font></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"d9c74350a1d74a049b0578c9d7fcc786","defaultAlignment":"left","defaultColor":"#000000","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]}],"props":{"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":null,"mobileOverrides":null,"uid":"c2f6ecb26720405fb2dfc84a4da93bfc"}},{"pip":"paragraph","props":{"uid":"4779e18879b34865a4b2adf9d2eff158","defaultFontSize":"size3","defaultFont":"font2","content":"<p>includes 15 min. wait time</p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]},{"pip":"gridCol","props":{"size":4,"spacing":{"top":10,"bottom":10,"left":10,"right":10},"contentPadding":{"top":0,"bottom":0,"left":0,"right":0},"backgrounds":[{"color":"#ffffff","position":{"x":"center","y":"center"},"size":"cover"}],"uid":"bbd5dea80fca4c068fbb26c690732f91","alignment":"top","mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[],"border":{"top":{"width":0,"style":"solid","color":"#000"},"right":{"width":0,"style":"solid","color":"#000"},"bottom":{"width":0,"style":"solid","color":"#000"},"left":{"width":0,"style":"solid","color":"#000"},"radius":45}},"children":[{"pip":"svgMedia","props":{"uid":"534367b2419e46b18470888a522041db","previousTab":1,"defaultDrawerTab":"myImages","linkUrl":"/services","openLinkInNewTab":false,"percentWidth":14.485299055868502,"contentMargin":{"bottom":0,"top":0,"right":"auto","left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"right":"auto","left":"auto"}},"stockSearchText":"doc","stockId":"395960","svgData":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M37.7 22.5L28.3 33v45.3h42V22.5H37.7zm-.8 3.9v6h-5.4l5.4-6zm31.4 49.9h-38V34.4h8.6v-9.9h29.4v51.8z\"/><path d=\"M39.9 36H59v2H39.9zM39.9 40.9H59v2H39.9zM39.9 45.8H59v2H39.9zM39.9 50.6H59v2H39.9z\"/></svg>","tag":"div"}},{"pip":"subGrid","children":[{"pip":"subGridCol","props":{"size":12,"contentPadding":{"top":10,"bottom":0,"left":20,"right":0},"alignment":"center","uid":"4e913b4f314d47e89e63464d9d6ecaef","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":3,"defaultFontSize":"fontSize2","defaultFont":"font1","requiresCustomization":true,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class=\"font-size6 font-color1\">Affidavit of Service- Commissioned.</span></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"a12a6fad4e874b999200819fb016c7d4","defaultAlignment":"left","defaultColor":"#000000","contentMargin":{"bottom":0,"top":0,"right":"auto","left":"auto"},"lineHeightClassName":"lineHeight-2","tabletOverrides":{},"mobileOverrides":{},"contentBinding":null,"fontRequired":[],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]},{"pip":"subGridCol","props":{"size":12,"contentPadding":{"top":0,"bottom":10,"left":20,"right":0},"uid":"ddce7c38175c4d6ebfb5eb174dff0c1e","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"paragraph","props":{"defaultFontSize":"fontSize2","defaultFont":"font2","content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><font color=\"#002248\"><span class=\"font-size7\">35$ CAD&nbsp;</span></font></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","uid":"b8d347e426a0402785cf4ebdd61e178e","defaultAlignment":"left","defaultColor":"#000000","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}}]}],"props":{"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":null,"mobileOverrides":null,"uid":"8c1006aff5dc42e2bcdd4264bc622ae9"}}]}],"props":{"uid":"89e847a4f1374323851bfbf04163caed"}}],"slug":"grid-menu-buckets-image","displayName":"Menu w/ Images","version":3,"_uid":"d28830c7356e4fd094c73b7e795ab902"},{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":12,"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"uid":"8ccd4de1d0fe4935ac3417ab11d0465b","alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"button","props":{"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>View More</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","color":"color3","href":"/services","isDonateButton":false,"uid":"a497cfa7fc1346eea6fe22b6161af676","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"paragraphWrappedContent":true,"newWindow":false,"internalPageId":"/services","customized":true,"fontRequired":[]}}]}],"props":{"uid":"f4264a7dd9784494ac5cc94493ff5fb7"}}],"props":{"background":{"color":{"value":"color1","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":41,"bottom":80}},"slug":"grid-title-title-button-v2","displayName":"Title, Title & Button","version":3,"_uid":"9ac3d0da40d74c10a526774cabe61124"},{"props":{"type":"header","nameable":true,"name":"","moveable":false,"position":"top","background":{"color":{"value":"color1","opacity":0.5},"image":{"url":"https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1085350399-6e01d900fe-dcf44e&png=1","originalUrl":"https://www.vistaprint.com/preview/image.aspx?image_type=upload&image_token=1085350399-6e01d900fe-dcf44e&png=1","cropData":{"verticalOffset":50},"imageSearchText":"","imageId":"","forceChangeImage":false,"previousTab":1,"style":"cover","parallax":false},"className":"h-auto","backgroundType":"image","imageTransparency":true},"userHeight":{"top":0,"bottom":6},"fluid":true},"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":5,"contentPadding":{"top":10,"left":10,"bottom":10,"right":5},"alignment":"center","uid":"8174121ee9484ba9987e7a9b4f933921","backgrounds":[{"color":"rgba(0, 34, 72, 0.78)","size":"cover","position":{"x":"center","y":"center"}}],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"subGrid","children":[{"pip":"subGridCol","props":{"size":4,"contentPadding":{"top":10,"bottom":10,"right":5,"left":5},"alignment":"center","uid":"93b1e7aa687c44a7a93d23582e5973b4","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"props":{"uid":"124b621cf86f49788b1d155f5ece3b32","percentWidth":60,"originalUrl":"https://assets.digital.vistaprint.com/production/e0781bbe-f237-4b89-b967-ed0083ded8b5","openLinkInNewTab":false,"lightboxStatus":"default","url":"https://imageprocessor.digital.vistaprint.com/crop/0,0,4531x4500/maxWidth/2000/https://assets.digital.vistaprint.com/production/e0781bbe-f237-4b89-b967-ed0083ded8b5","cropData":{"x":0,"y":0,"width":4531,"height":4500},"linkUrl":"/","previousTab":1,"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"percentWidth":100,"contentMargin":{"top":0,"right":"auto","left":"auto"}},"tag":"div","mode":{},"documentStyle":{},"blockData":{}},"pip":"imageMedia"}]},{"pip":"subGridCol","props":{"size":8,"contentPadding":{"top":10,"bottom":10,"right":10,"left":5},"alignment":"center","uid":"657d05e6ed8743e5b797a05607bcaa49","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"title","props":{"level":3,"content":"<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p style=\"text-align: right;\"><span class=\"font-size6\" style=\"\">Mr. Process&nbsp;Server</span><span class=\"font-size8\" style=\"font-weight: bold;\">&nbsp;</span></p><p style=\"text-align: right;\"><span class=\"font-size8\" style=\"font-weight: bold;\">&nbsp;&nbsp; &nbsp;<span class=\"font-size7\">Flat Rate&nbsp;</span></span><b><span data-font-required=\"google:Aclonica\" class=\"font-aclonica font-size7\">$95 !</span></b><span class=\"font-size7\">&nbsp;</span></p><p style=\"text-align: right;\"><br></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>","defaultColor":"","lineHeightClassName":"lineHeight-1-1","uid":"b2dca8dd33fa49b199341384d123f2f6","defaultAlignment":"left","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"defaultFont":"font1","requiresCustomization":true,"contentBinding":null,"fontRequired":["google:Aclonica"],"websafeFonts":[],"className":"","paragraphWrappedContent":true,"customized":true}}]}],"props":{"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":null,"mobileOverrides":null,"uid":"753896423313477daa6832293cdbec54"}},{"pip":"button","props":{"uid":"d0592cddf23c4dcfa17b83cf3b11deac","buttonStyle":{"radius":"rounded","style":"depth"},"contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"mobileOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto"}},"content":"<p></p><p><span class=\"font-size7\"><b>604-618-4100</b></span></p><p></p>","fontRequired":[],"href":"tel:604-618-4100","newWindow":false,"internalPageId":"","isDonateButton":false,"customized":true,"paragraphWrappedContent":true}}]},{"pip":"gridCol","props":{"size":7,"contentPadding":{"top":10,"right":20,"bottom":10,"left":0},"alignment":"center","uid":"7d7b5e30447c41fb97a2f782c1747cf8","backgrounds":[{"color":"rgba(0, 34, 72, 0.5)","size":"cover","position":{"x":"center","y":"center"}}],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[]},"children":[{"pip":"navigation","props":{"mobileMenuInactiveButtonColor":"color4","mobileMenu":"tablet","backgroundColor":"","linkColor":"","fontSize":"size1","bold":false,"italic":false,"adjustableMobileMenuColor":true,"decoration":"underscore","uid":"475ee92573cb464196b654b61d487279","contentMargin":{"left":"auto","right":0,"top":0,"bottom":20},"tabletOverrides":null,"mobileOverrides":null,"defaultFontSize":"fontSize3","defaultFont":"font2","spacing":10}}]}],"props":{"uid":"1f8669bc2b06460ab65227357c90f70c"}}],"slug":"grid-navigation-normal","displayName":"Normal Navigation","version":3,"_uid":"2b1dc3d144094167aad19d17c9f9625d"},{"children":[{"pip":"grid","children":[{"pip":"gridCol","props":{"size":12,"contentPadding":{"top":14,"right":10,"bottom":10,"left":10},"alignment":"top","backgrounds":[],"spacing":{},"mobileOverrides":{"contentPadding":{"top":10,"right":10,"bottom":10,"left":10},"spacing":{"top":0,"right":0,"bottom":0,"left":0}},"pipToHighlight":[],"pipToMoveIndex":[],"uid":"27e0d43f1bea4d8cbf59f42ca3ea97c4"},"children":[{"pip":"paragraph","props":{"uid":"c57353610af2451caf9ea1cff8371f73","defaultFontSize":"size3","defaultFont":"font2","content":"<p><b><span style=\"font-size: 1rem; background-color: transparent; font-variant-ligatures: inherit; font-variant-caps: inherit; text-transform: inherit;\" class=\"font-color1 font-size7\">97 % Success Rate on our First Attempts &amp; 105+ GOOGLE Reviews&nbsp;</span></b></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"customized":true,"fontRequired":[]}},{"pip":"navigation","props":{"defaultFontSize":"fontSize3","defaultFont":"font2","decoration":"underscore","fontSize":"size1","bold":false,"italic":false,"mobileMenu":"tablet","contentMargin":{"top":0,"right":"auto","bottom":38,"left":"auto"},"tabletOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto","bottom":0}},"mobileOverrides":{"contentMargin":{"top":0,"right":"auto","left":"auto","bottom":0}},"adjustableMobileMenuColor":false,"spacing":10,"uid":"bd686f5c30b7426094f883d5d988d541"}},{"pip":"paragraph","props":{"level":5,"defaultFont":"font2","requiresCustomization":true,"content":"<p><b>© 2010 Mr. Process Server</b></p>","contentMargin":{"top":0,"right":"auto","bottom":20,"left":"auto"},"tabletOverrides":{},"mobileOverrides":{},"paragraphWrappedContent":true,"uid":"ff74f0e42914402c8a03a1da0c49a7fc","customized":true,"fontRequired":[]}}]}],"props":{"uid":"e13601f138964691a8999645980f4f31"}}],"props":{"nameable":false,"moveable":false,"position":"bottom","positionOverlay":true,"background":{"color":{"value":"color4","opacity":1},"backgroundType":"color","imageTransparency":true},"userHeight":{"top":70,"bottom":70},"type":"footer"},"slug":"grid-footer-navigation","displayName":"Navigation Footer","version":3,"_uid":"bc4fc99dfbe0431ca60da9968a9a7029"}],"title":"Home"},"service":{}};
/*********/
window.doScroll = function scroll(element, change, easeAmount, callback) {
    // Maximum scroll duration to ensure that scrolling doesn't take forever on long sites
    var MAX_SCROLL_DURATION = 2500;

    if (typeof easeAmount === 'function') {
      callback = easeAmount;
      easeAmount = undefined;
    }

    if (easeAmount) {
      /*
       * We may not want to fully animate the scroll.
       * On long documents, this can be dizzying. Instead, we can
       *  jump to just before the element, then scroll the rest of the way.
       */
      if (Math.abs(change) < easeAmount) {
        easeAmount = change;
      }

      if (change < 0) {
        easeAmount = -easeAmount;
      }

      element.scrollTop += change - easeAmount;
      change = easeAmount;
    }

    var move = function move(amount) {
      element.scrollTop = amount;
    }; // quadratic easing in/out - acceleration until halfway, then deceleration


    var ease = function ease(t, b, c, d) {
      t = t / (d / 2);

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t = t - 1;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (cb) {
      window.setTimeout(cb, 1000 / 60);
    };

    var start = element.scrollTop;
    var currentTime = 0;
    var increment = 20;
    var duration = Math.abs(change) * 500 / 1000;

    if (duration > MAX_SCROLL_DURATION) {
      duration = MAX_SCROLL_DURATION;
    }

    var animateScroll = function animateScroll() {
      currentTime = currentTime + increment; // Don't call ease if currentTime > duration, it gives wacky results.

      if (currentTime < duration) {
        move(ease(currentTime, start, change, duration));
        requestAnimationFrame.call(window, animateScroll);
      } else {
        move(start + change);

        if (typeof callback === 'function') {
          callback();
        }
      }
    };

    requestAnimationFrame.call(window, animateScroll);
  }