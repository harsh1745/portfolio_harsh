"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[9294],{448:function(t,e,n){n.d(e,{a:function(){return d},b:function(){return u},g:function(){return l}});var r=n(4942),i=n(3324);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){for(var e,n="",r=Object.entries(t);e=r.shift();){var o=e,a=(0,i.Z)(o,2),s=a[0],u=a[1];if(Array.isArray(u)||u&&u.constructor===Object){var l,d=c(Object.entries(u).reverse());try{for(d.s();!(l=d.n()).done;){var p=(0,i.Z)(l.value,2),h=p[0],v=p[1];r.unshift(["".concat(s,"[").concat(h,"]"),v])}}catch(t){d.e(t)}finally{d.f()}}else void 0!==u&&(null===u&&(u=""),n+="&"+[s,u].map(encodeURIComponent).join("="))}return n.substr(1)}function l(t){return(function(t){var e;try{e=new URL(t,"http://example.com").search.substring(1)}catch(t){}if(e)return e}(t)||"").replace(/\+/g,"%20").split("&").reduce((function(t,e){var n=e.split("=").filter(Boolean).map(decodeURIComponent),r=(0,i.Z)(n,2),o=r[0],c=r[1],s=void 0===c?"":c;return o&&function(t,e,n){for(var r=e.length,i=r-1,o=0;o<r;o++){var c=e[o];!c&&Array.isArray(t)&&(c=t.length.toString());var s=!isNaN(Number(e[o+1]));t[c]=o===i?n:t[c]||(s?[]:{}),Array.isArray(t[c])&&!s&&(t[c]=a({},t[c])),t=t[c]}}(t,o.replace(/\]/g,"").split("["),s),t}),{})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;if(!e||!Object.keys(e).length)return t;var n=t,r=t.indexOf("?");return-1!==r&&(e=Object.assign(l(t),e),n=n.substr(0,r)),n+"?"+u(e)}},2846:function(t,e,n){n.d(e,{i:function(){return o},m:function(){return i},z:function(){return r}});var r=["bif","byr","clp","djf","gnf","isk","jpy","kmf","krw","pyg","rwf","ugx","vnd","vuv","xaf","xag","xau","xba","xbb","xbc","xbd","xdr","xof","xpd","xpf","xpt","xts"],i=function(t,e){return o(e)?t:t/100},o=function(t){var e;return r.includes(null===(e=null==t?void 0:t.toLowerCase)||void 0===e?void 0:e.call(t))}},930:function(t,e,n){n.d(e,{a:function(){return H},h:function(){return Q}});var r=n(5861),i=n(5987),o=n(3324),a=n(4942),c=n(1284),s=n.n(c),u=n(448),l=["rest_route"],d=["path","url"],p=["url","path","data","parse"];function h(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=function(t,e){var n,r,i=t.path;return"string"==typeof t.namespace&&"string"==typeof t.endpoint&&(n=t.namespace.replace(/^\/|\/$/g,""),i=(r=t.endpoint.replace(/^\//,""))?n+"/"+r:n),delete t.namespace,delete t.endpoint,e(m(m({},t),{},{path:i}))};function w(t){for(var e,n="",r=Object.entries(t);e=r.shift();){var i=e,a=(0,o.Z)(i,2),c=a[0],s=a[1];if(Array.isArray(s)||s&&s.constructor===Object){var u,l=h(Object.entries(s).reverse());try{for(l.s();!(u=l.n()).done;){var d=(0,o.Z)(u.value,2),p=d[0],v=d[1];r.unshift(["".concat(c,"[").concat(p,"]"),v])}}catch(t){l.e(t)}finally{l.f()}}else void 0!==s&&(null===s&&(s=""),n+="&"+[c,s].map(encodeURIComponent).join("="))}return n.substr(1)}function y(t){return(function(t){var e;try{e=new URL(t,"http://example.com").search.substring(1)}catch(t){}if(e)return e}(t)||"").replace(/\+/g,"%20").split("&").reduce((function(t,e){var n=e.split("=").filter(Boolean).map(decodeURIComponent),r=(0,o.Z)(n,2),i=r[0],a=r[1],c=void 0===a?"":a;return i&&function(t,e,n){for(var r=e.length,i=r-1,o=0;o<r;o++){var a=e[o];!a&&Array.isArray(t)&&(a=t.length.toString()),a=["__proto__","constructor","prototype"].includes(a)?a.toUpperCase():a;var c=!isNaN(Number(e[o+1]));t[a]=o===i?n:t[a]||(c?[]:{}),Array.isArray(t[a])&&!c&&(t[a]=m({},t[a])),t=t[a]}}(t,i.replace(/\]/g,"").split("["),c),t}),Object.create(null))}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;if(!e||!Object.keys(e).length)return t;var n=t,r=t.indexOf("?");return-1!==r&&(e=Object.assign(y(t),e),n=n.substr(0,r)),n+"?"+w(e)}function _(t,e){return void 0!==function(t,e){return y(t)[e]}(t,e)}function x(t){var e=t.split("?"),n=e[1],r=e[0];return n?r+"?"+n.split("&").map((function(t){return t.split("=")})).map((function(t){return t.map(decodeURIComponent)})).sort((function(t,e){return t[0].localeCompare(e[0])})).map((function(t){return t.map(encodeURIComponent)})).map((function(t){return t.join("=")})).join("&"):r}function O(t,e){return Promise.resolve(e?t.body:new window.Response(JSON.stringify(t.body),{status:200,statusText:"OK",headers:t.headers}))}var j=function(t){return t.json?t.json():Promise.reject(t)},P=function(t){return function(t){if(!t)return{};var e=t.match(/<([^>]+)>; rel="next"/);return e?{next:e[1]}:{}}(t.headers.get("link")).next},k=function(t){var e=!!t.path&&-1!==t.path.indexOf("per_page=-1"),n=!!t.url&&-1!==t.url.indexOf("per_page=-1");return e||n},C=function(){var t=(0,r.Z)(s().mark((function t(e,n){var r,o,a,c,u,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==e.parse){t.next=2;break}return t.abrupt("return",n(e));case 2:if(k(e)){t.next=4;break}return t.abrupt("return",n(e));case 4:return t.next=6,H(m(m({},(p={per_page:100},void 0,void 0,h=(s=e).path,v=s.url,m(m({},(0,i.Z)(s,d)),{},{url:v&&b(v,p),path:h&&b(h,p)}))),{},{parse:!1}));case 6:return r=t.sent,t.next=9,j(r);case 9:if(o=t.sent,Array.isArray(o)){t.next=12;break}return t.abrupt("return",o);case 12:if(a=P(r)){t.next=15;break}return t.abrupt("return",o);case 15:c=[].concat(o);case 16:if(!a){t.next=27;break}return t.next=19,H(m(m({},e),{},{path:void 0,url:a,parse:!1}));case 19:return u=t.sent,t.next=22,j(u);case 22:l=t.sent,c=c.concat(l),a=P(u),t.next=16;break;case 27:return t.abrupt("return",c);case 28:case"end":return t.stop()}var s,p,h,v}),t)})));return function(_x,e){return t.apply(this,arguments)}}(),S=new Set(["PATCH","PUT","DELETE"]),A=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?204===t.status?null:t.json?t.json():Promise.reject(t):t},E=function(t){var e={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!t||!t.json)throw e;return t.json().catch((function(){throw e}))},I=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(A(t,e)).catch((function(t){return Z(t,e)}))};function Z(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)throw t;return E(t).then((function(t){var e={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw t||e}))}var D,T,q,N,L,R,U,M={Accept:"application/json, */*;q=0.1"},z={credentials:"include"},B=[function(t,e){return"string"!=typeof t.url||_(t.url,"_locale")||(t.url=b(t.url,{_locale:"user"})),"string"!=typeof t.path||_(t.path,"_locale")||(t.path=b(t.path,{_locale:"user"})),e(t)},g,function(t,e){var n=t.method,r=void 0===n?"GET":n;return S.has(r.toUpperCase())&&(t=m(m({},t),{},{headers:m(m({},t.headers),{},{"X-HTTP-Method-Override":r,"Content-Type":"application/json"}),method:"POST"})),e(t)},C],V=function(t){if(t.status>=200&&t.status<300)return t;throw t},F=function(t){var e=t.url,n=t.path,r=t.data,o=t.parse,a=void 0===o||o,c=(0,i.Z)(t,p),s=t.body,u=t.headers;return u=m(m({},M),u),r&&(s=JSON.stringify(r),u["Content-Type"]="application/json"),window.fetch(e||n||window.location.href,m(m(m({},z),c),{},{body:s,headers:u})).then((function(t){return Promise.resolve(t).then(V).catch((function(t){return Z(t,a)})).then((function(t){return I(t,a)}))}),(function(t){if(t&&"AbortError"===t.name)throw t;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function H(t){return B.reduceRight((function(t,e){return function(n){return e(n,t)}}),F)(t).catch((function(e){return"rest_cookie_invalid_nonce"!==e.code?Promise.reject(e):window.fetch(H.nonceEndpoint).then(V).then((function(t){return t.text()})).then((function(e){return H.nonceMiddleware.nonce=e,H(t)}))}))}H.use=function(t){B.unshift(t)},H.setFetchHandler=function(t){F=t},H.createNonceMiddleware=function(t){var e=function t(e,n){var r=e.headers,i=void 0===r?{}:r;for(var o in i)if("x-wp-nonce"===o.toLowerCase()&&i[o]===t.nonce)return n(e);return n(m(m({},e),{},{headers:m(m({},i),{},{"X-WP-Nonce":t.nonce})}))};return e.nonce=t,e},H.createPreloadingMiddleware=function(t){var e=Object.fromEntries(Object.entries(t).map((function(t){var e=(0,o.Z)(t,2),n=e[0],r=e[1];return[x(n),r]})));return function(t,n){var r=t.parse,o=void 0===r||r,a=t.path;if(!a&&t.url){var c=y(t.url),s=c.rest_route,u=(0,i.Z)(c,l);"string"==typeof s&&(a=b(s,u))}if("string"!=typeof a)return n(t);var d=t.method||"GET",p=x(a);if("GET"===d&&e[p]){var h=e[p];return delete e[p],O(h,!!o)}if("OPTIONS"===d&&e[d]&&e[d][p]){var v=e[d][p];return delete e[d][p],O(v,!!o)}return n(t)}},H.createRootURLMiddleware=function(t){return function(e,n){return g(e,(function(e){var r,i=e.url,o=e.path;return"string"==typeof o&&(r=t,-1!==t.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof r&&-1!==r.indexOf("?")&&(o=o.replace("?","&")),i=r+o),n(m(m({},e),{},{url:i}))}))}},H.fetchAllMiddleware=C,H.mediaUploadMiddleware=function(t,e){if(!function(t){var e=!!t.method&&"POST"===t.method;return(!!t.path&&-1!==t.path.indexOf("/wp/v2/media")||!!t.url&&-1!==t.url.indexOf("/wp/v2/media"))&&e}(t))return e(t);var n=0,r=function t(r){return n++,e({path:"/wp/v2/media/".concat(r,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return n<5?t(r):(e({path:"/wp/v2/media/".concat(r,"?force=true"),method:"DELETE"}),Promise.reject())}))};return e(m(m({},t),{},{parse:!1})).catch((function(e){var n=e.headers.get("x-wp-upload-attachment-id");return e.status>=500&&e.status<600&&n?r(n).catch((function(){return!1!==t.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(e)})):Z(e,t.parse)})).then((function(e){return I(e,t.parse)}))},H.fetchAllMiddleware=null,H.use(H.createRootURLMiddleware((null===(T=null===(D=null===window||void 0===window?void 0:window.parent)||void 0===D?void 0:D.scData)||void 0===T?void 0:T.root_url)||(null===(q=null===window||void 0===window?void 0:window.scData)||void 0===q?void 0:q.root_url))),(null===(N=null===window||void 0===window?void 0:window.scData)||void 0===N?void 0:N.nonce)&&(H.nonceMiddleware=H.createNonceMiddleware(null===(L=null===window||void 0===window?void 0:window.scData)||void 0===L?void 0:L.nonce),H.use(H.nonceMiddleware)),(null===(R=null===window||void 0===window?void 0:window.scData)||void 0===R?void 0:R.nonce_endpoint)&&(H.nonceEndpoint=null===(U=null===window||void 0===window?void 0:window.scData)||void 0===U?void 0:U.nonce_endpoint),H.use((function(t,e){return t.path=(0,u.a)(t.path,{t:Date.now()}),e(t)}));var J=function(t){var e={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==t?void 0:t.code)&&(null==t?void 0:t.message))throw t;if(!t||!t.json)throw e;return t.json().catch((function(){throw e}))},Q=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:if("rest_cookie_invalid_nonce"===(n=t.sent).code){t.next=5;break}throw n;case 5:return t.abrupt("return",window.fetch(H.nonceEndpoint).then((function(t){if(t.status>=200&&t.status<300)return t;throw t})).then((function(t){return t.text()})).then((function(t){H.nonceMiddleware.nonce=t})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7154:function(t,e,n){n.d(e,{t:function(){return r}});var r=function(t,e){((null===window||void 0===window?void 0:window.dataLayer)||(null===window||void 0===window?void 0:window.gtag))&&e&&((null===window||void 0===window?void 0:window.gtag)?window.gtag("event",t,e):(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:t,ecommerce:e})))}},5842:function(t,e,n){var r=n(4942),i=n(2846),o=n(7154);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}window.addEventListener("scSearched",(function(t){var e;if(null===window||void 0===window?void 0:window.fbq){var n=t.detail;window.fbq("track","Search",c({search_string:n.searchString,content_ids:n.searchResultIds},(null===(e=null==n?void 0:n.searchCollections)||void 0===e?void 0:e.length)?{content_category:n.searchCollections.join(",")}:{}))}})),window.addEventListener("scProductViewed",(function(t){var e,n,r,o,a,c;if(null===window||void 0===window?void 0:window.fbq){var s=t.detail;window.fbq("track","ViewContent",{content_ids:[s.id],content_category:null===(n=null===(e=null==s?void 0:s.product_collections)||void 0===e?void 0:e.data)||void 0===n?void 0:n.map((function(t){return t.name})).join(", "),content_name:(null==s?void 0:s.name)+((null===(r=null==s?void 0:s.variant_options)||void 0===r?void 0:r.length)?" - ".concat(null==s?void 0:s.variant_options.join(" / ")):""),content_type:"product",contents:[{id:s.id,quantity:1}],currency:null===(o=null==s?void 0:s.price)||void 0===o?void 0:o.currency,value:(0,i.m)((null===(a=s.price)||void 0===a?void 0:a.amount)||0,(null===(c=s.price)||void 0===c?void 0:c.currency)||"USD")})}})),window.addEventListener("scSearched",(function(t){var e;(0,o.t)("search",{search_term:null===(e=t.detail)||void 0===e?void 0:e.searchString})})),window.addEventListener("scProductViewed",(function(t){var e,n,r,a,s,u,l,d,p,h,v,f,m=t.detail;(0,o.t)("view_item",{value:(0,i.m)((null===(e=m.price)||void 0===e?void 0:e.amount)||0,(null===(n=m.price)||void 0===n?void 0:n.currency)||"USD"),currency:null===(r=m.price)||void 0===r?void 0:r.currency,items:[c(c({item_id:null==m?void 0:m.id,item_name:null==m?void 0:m.name,currency:null===(a=null==m?void 0:m.price)||void 0===a?void 0:a.currency,discount:(null==m?void 0:m.discount_amount)?(0,i.m)(null==m?void 0:m.discount_amount,null===(s=null==m?void 0:m.price)||void 0===s?void 0:s.currency):0,price:(0,i.m)(null===(u=null==m?void 0:m.price)||void 0===u?void 0:u.amount,null===(l=null==m?void 0:m.price)||void 0===l?void 0:l.currency),quantity:(null==m?void 0:m.quantity)||1},(null===(d=null==m?void 0:m.variant_options)||void 0===d?void 0:d.length)?{item_variant:null==m?void 0:m.variant_options.map((function(t){return t.name})).join(" / ")}:{}),(null===(h=null===(p=null==m?void 0:m.product_collections)||void 0===p?void 0:p.data)||void 0===h?void 0:h.length)?{item_category:null===(f=null===(v=null==m?void 0:m.product_collections)||void 0===v?void 0:v.data)||void 0===f?void 0:f.map((function(t){return t.name})).join(", ")}:{})]})})),window.addEventListener("scProductsViewed",(function(t){var e,n=t.detail;(0,o.t)("view_item_list",c(c({},(null==n?void 0:n.collectionId)?{item_list_id:n.collectionId}:{}),{},{item_list_name:n.pageTitle,items:null===(e=null==n?void 0:n.products)||void 0===e?void 0:e.map((function(t){var e,r,i,o;return c(c(c({item_id:null==t?void 0:t.id,item_name:null==t?void 0:t.name},(null===(r=null===(e=null==t?void 0:t.product_collections)||void 0===e?void 0:e.data)||void 0===r?void 0:r.length)?{item_category:null===(o=null===(i=null==t?void 0:t.product_collections)||void 0===i?void 0:i.data)||void 0===o?void 0:o.map((function(t){return t.name})).join(", ")}:{}),(null==n?void 0:n.collectionId)?{item_list_id:n.collectionId}:{}),{},{item_list_name:n.pageTitle})}))}))}))},7032:function(t,e,n){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",e=document.createElement("div");e.id="a11y-speak-".concat(t),e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");var n=document,r=n.body;return r&&r.appendChild(e),e}n.d(e,{s:function(){return a}});var i,o="";function a(t,e){!function(){for(var t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text"),n=0;n<t.length;n++)t[n].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),o===t&&(t+=" "),o=t,t}(t);var n=document.getElementById("a11y-speak-intro-text"),r=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");r&&"assertive"===e?r.textContent=t:i&&(i.textContent=t),n&&n.removeAttribute("hidden")}i=function(){var t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){var t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=wp.i18n.__("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");var e=document.body;e&&e.appendChild(t)}(),null===e&&r("assertive"),null===n&&r("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",i):i())},9294:function(t,e,n){n.r(e),n.d(e,{sc_product_item_list:function(){return m}});var r=n(4942),i=n(5861),o=n(9062),a=n(5671),c=n(3144),s=n(1284),u=n.n(s),l=n(8860),d=n(7032),p=n(930),h=(n(5842),n(448));function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(){function t(e){(0,a.Z)(this,t),(0,l.r)(this,e),this.scSearched=(0,l.c)(this,"scSearched",7),this.scProductsViewed=(0,l.c)(this,"scProductsViewed",7),this.ids=void 0,this.sort="created_at:desc",this.query=void 0,this.searchEnabled=!0,this.sortEnabled=!0,this.collectionEnabled=!0,this.collectionId=void 0,this.pageTitle=void 0,this.featured=!1,this.paginationEnabled=!0,this.ajaxPagination=!0,this.paginationAutoScroll=!0,this.layoutConfig=void 0,this.paginationAlignment="center",this.limit=15,this.page=1,this.products=void 0,this.loading=!1,this.busy=!1,this.error=void 0,this.currentPage=1,this.currentQuery=void 0,this.pagination={total:0,total_pages:0},this.collections=void 0,this.selectedCollections=[]}var e,n,r,s,v;return(0,c.Z)(t,[{key:"handleProductsChanged",value:function(t,e){var n,r=new Set([].concat((0,o.Z)((e||[]).map((function(t){return t.id}))),(0,o.Z)((t||[]).map((function(t){return t.id})))));if((null==t?void 0:t.length)!==(null==e?void 0:e.length)||r.size!==t.length){var i=[this.pageTitle,this.paginationEnabled?wp.i18n.sprintf(wp.i18n.__("Page %d","surecart"),this.currentPage):void 0,this.sort?this.renderSortName():void 0,this.query||(null===(n=this.selectedCollections)||void 0===n?void 0:n.length)?wp.i18n.__("Search results","surecart"):void 0].filter((function(t){return!!t})).join(" - ");this.scProductsViewed.emit({products:this.products,pageTitle:i,collectionId:this.collectionId})}}},{key:"componentWillLoad",value:function(){var t;(null===(t=null==this?void 0:this.products)||void 0===t?void 0:t.length)?this.handleProductsChanged(this.products):this.getProducts(),this.collectionEnabled&&this.getCollections()}},{key:"doPagination",value:function(t){if(this.ajaxPagination)return this.page=t,this.updateProducts(),void(this.paginationAutoScroll&&this.el.scrollIntoView({behavior:"smooth"}));var e=(0,h.a)(location.href,{"product-page":t});window.location.replace(e)}},{key:"getProducts",value:(v=(0,i.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,h.g)(window.location.href),n=e["product-page"],this.page=this.paginationEnabled&&n?parseInt(n):1,t.prev=2,this.loading=!0,t.next=6,this.fetchProducts();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0);case 11:return t.prev=11,this.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[2,8,11,14]])}))),function(){return v.apply(this,arguments)})},{key:"getCollections",value:(s=(0,i.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.a)({path:(0,h.a)("surecart/v1/product_collections/",{per_page:100})});case 3:this.collections=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return s.apply(this,arguments)})},{key:"handleSortChange",value:(r=(0,i.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.page=1,this.updateProducts();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"updateProducts",value:(n=(0,i.Z)(u().mark((function t(){var e,n,r=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]&&r[0],t.prev=1,this.busy=!0,t.next=5,this.fetchProducts();case 5:this.query&&e&&this.scSearched.emit({searchString:this.query,searchResultCount:null===(n=this.products)||void 0===n?void 0:n.length,searchResultIds:this.products.map((function(t){return t.id}))}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("error"),console.error(t.t0),this.error=t.t0.message||wp.i18n.__("An unknown error occurred.","surecart");case 13:return t.prev=13,this.busy=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,8,13,16]])}))),function(){return n.apply(this,arguments)})},{key:"handleIdsChange",value:function(){var t=this;null!==this.debounce&&(clearTimeout(this.debounce),this.debounce=null),this.debounce=window.setTimeout((function(){t.updateProducts(),t.debounce=null}),200)}},{key:"fetchProducts",value:(e=(0,i.Z)(u().mark((function t(){var e,n,r,i,o=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(null===(e=this.selectedCollections)||void 0===e?void 0:e.map((function(t){return t.id})))||[],this.collectionId&&(r=[this.collectionId]),t.prev=2,t.next=5,(0,p.a)({path:(0,h.a)("surecart/v1/products/",f(f(f({expand:["prices","featured_product_media","product_medias","product_media.media","variants"],archived:!1,status:["published"],per_page:this.limit,page:this.page,sort:this.sort,product_collection_ids:r},this.featured?{featured:!0}:{}),(null===(n=this.ids)||void 0===n?void 0:n.length)?{ids:this.ids}:{}),this.query?{query:this.query}:{})),parse:!1});case 5:return i=t.sent,this.currentQuery=this.query,this.pagination={total:parseInt(i.headers.get("X-WP-Total")),total_pages:parseInt(i.headers.get("X-WP-TotalPages"))},t.next=10,i.json();case 10:this.products=t.sent,(r.length||this.query)&&(0,d.s)(wp.i18n.sprintf(wp.i18n.__("%s products found","surecart"),this.pagination.total)),t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(2),t.next=18,(0,p.h)(t.t0).then((function(){return o.fetchProducts()})).catch((function(t){o.error=t.message||wp.i18n.__("An unknown error occurred.","surecart")}));case 18:case"end":return t.stop()}}),t,this,[[2,14]])}))),function(){return e.apply(this,arguments)})},{key:"renderSortName",value:function(){switch(this.sort){case"created_at:desc":return wp.i18n.__("Latest","surecart");case"created_at:asc":return wp.i18n.__("Oldest","surecart");case"name:asc":return wp.i18n.__("Alphabetical, A-Z","surecart");case"name:desc":return wp.i18n.__("Alphabetical, Z-A","surecart");default:return wp.i18n.__("Sort","surecart")}}},{key:"toggleSelectCollection",value:function(t){this.selectedCollections.find((function(e){return e.id===t.id}))?this.selectedCollections=this.selectedCollections.filter((function(e){return e.id!==t.id})):this.selectedCollections=[].concat((0,o.Z)(this.selectedCollections),[t])}},{key:"getCollectionsAfterFiltered",value:function(){var t,e=this;return(null!==(t=this.collections)&&void 0!==t?t:[]).filter((function(t){return!e.selectedCollections.some((function(e){return e.id===t.id}))}))}},{key:"isPaginationAvailable",value:function(){var t;return!!(null===(t=this.products)||void 0===t?void 0:t.length)&&this.pagination.total>this.products.length&&this.paginationEnabled}},{key:"render",value:function(){var t,e,n,r,i,a,c=this;return(0,l.h)("div",{class:{"product-item-list__wrapper":!0,"product-item-list__has-search":!!this.query}},this.error&&(0,l.h)("sc-alert",{type:"danger",open:!0},this.error),(this.searchEnabled||this.sortEnabled||this.collectionEnabled)&&(0,l.h)("div",{class:"product-item-list__header"},(0,l.h)("div",{class:"product-item-list__controls"},(0,l.h)("div",{class:"product-item-list__sort"},this.sortEnabled&&(0,l.h)("sc-dropdown",{style:{"--panel-width":"15em"}},(0,l.h)("sc-button",{type:"text",caret:!0,slot:"trigger"},(0,l.h)("sc-visually-hidden",null,wp.i18n.__("Dropdown to sort products.","surecart")," "),this.renderSortName(),(0,l.h)("sc-visually-hidden",null," ",wp.i18n.__("selected.","surecart"))),(0,l.h)("sc-menu",{"aria-label":wp.i18n.__("Sort Products","surecart")},(0,l.h)("sc-menu-item",{"aria-label":wp.i18n.__("Sort by latest","surecart"),onClick:function(){return c.sort="created_at:desc"}},wp.i18n.__("Latest","surecart")),(0,l.h)("sc-menu-item",{"aria-label":wp.i18n.__("Sort by oldest","surecart"),onClick:function(){return c.sort="created_at:asc"}},wp.i18n.__("Oldest","surecart")),(0,l.h)("sc-menu-item",{"aria-label":wp.i18n.__("Sort by name, A to Z","surecart"),onClick:function(){return c.sort="name:asc"}},wp.i18n.__("Alphabetical, A-Z","surecart")),(0,l.h)("sc-menu-item",{"aria-label":wp.i18n.__("Sort by name, Z to A","surecart"),onClick:function(){return c.sort="name:desc"}},wp.i18n.__("Alphabetical, Z-A","surecart")))),this.collectionEnabled&&(null!==(t=this.collections)&&void 0!==t?t:[]).length>0&&(0,l.h)("sc-dropdown",{style:{"--panel-width":"15rem"}},(0,l.h)("sc-button",{type:"text",caret:!0,slot:"trigger"},(0,l.h)("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Dropdown to filter products by collection. %s selected.","surecart"),(null===(e=this.selectedCollections)||void 0===e?void 0:e.length)?this.selectedCollections.map((function(t){return null==t?void 0:t.name})).join(","):wp.i18n.__("None","surecart"))),(0,l.h)("span",{"aria-hidden":!0}," ",wp.i18n.__("Filter","surecart"))),(0,l.h)("sc-menu",{"aria-label":wp.i18n.__("Filter products","surecart")},(null!==(n=this.collections)&&void 0!==n?n:[]).map((function(t){return(0,l.h)("sc-menu-item",{checked:c.selectedCollections.some((function(e){return(null==e?void 0:e.id)===(null==t?void 0:t.id)})),onClick:function(){return c.toggleSelectCollection(t)},key:null==t?void 0:t.id,"aria-label":wp.i18n.sprintf(wp.i18n.__("Filter by %s","surecart"),null==t?void 0:t.name)},t.name)}))))),(0,l.h)("div",{class:"product-item-list__search"},this.searchEnabled&&((null===(r=this.query)||void 0===r?void 0:r.length)&&this.query===this.currentQuery?(0,l.h)("div",{class:"product-item-list__search-tag"},(0,l.h)("div",{class:"product-item-list__search-label"},wp.i18n.__("Search Results:","surecart")),(0,l.h)("sc-tag",{clearable:!0,onScClear:function(){c.query="",c.currentQuery="",c.updateProducts()},"aria-label":wp.i18n.sprintf(wp.i18n.__("Searched for %s. Press space to clear search.","surecart"),this.query)},this.query)):(0,l.h)("sc-input",{type:"text",placeholder:wp.i18n.__("Search","surecart"),size:"small",onKeyUp:function(t){"Enter"===t.key&&(c.query=t.target.value,c.updateProducts(!0))},value:this.query,clearable:!0},this.query?(0,l.h)("sc-icon",{class:"clear-button",slot:"prefix",name:"x",onClick:function(){c.query=""}}):(0,l.h)("sc-icon",{slot:"prefix",name:"search"}),(0,l.h)("sc-button",{class:"search-button",type:"link",slot:"suffix",busy:this.busy,onClick:function(){c.updateProducts(!0)}},wp.i18n.__("Search","surecart")))))),this.collectionEnabled&&this.selectedCollections.length>0&&(0,l.h)("div",{class:"product-item-list__search-tag"},this.selectedCollections.map((function(t){return(0,l.h)("sc-tag",{key:null==t?void 0:t.id,clearable:!0,onScClear:function(){c.toggleSelectCollection(t)}},null==t?void 0:t.name)})))),!(null===(i=this.products)||void 0===i?void 0:i.length)&&!this.loading&&(0,l.h)("sc-empty",{class:"product-item-list__empty",icon:"shopping-bag"},wp.i18n.__("No products found.","surecart")),(0,l.h)("section",{class:"product-item-list","aria-label":wp.i18n.__("Product list","surecart")},this.loading?(0,o.Z)(Array((null===(a=this.products)||void 0===a?void 0:a.length)||this.limit||10)).map((function(t,e){return(0,l.h)("div",{class:"product-item-list__loader",key:e},(c.layoutConfig||[]).map((function(t){var e,n;switch(t.blockName){case"surecart/product-item-title":return(0,l.h)("div",{style:{textAlign:"var(--sc-product-title-align)"}},(0,l.h)("sc-skeleton",{style:{width:"80%",display:"inline-block"}}));case"surecart/product-item-image":return(0,l.h)("sc-skeleton",{style:{width:"100%",minHeight:"90%",aspectRatio:null!==(n=null===(e=t.attributes)||void 0===e?void 0:e.ratio)&&void 0!==n?n:"1/1.4","--sc-border-radius-pill":"12px",display:"inline-block"}});case"surecart/product-item-price":return(0,l.h)("div",{style:{textAlign:"var(--sc-product-price-align)"}},(0,l.h)("sc-skeleton",{style:{width:"40%",display:"inline-block"}}));default:return null}})))})):(this.products||[]).map((function(t,e){return(0,l.h)("sc-product-item",f(f({key:null==t?void 0:t.id},c.products.length-1===e?{"aria-label":wp.i18n.sprintf(wp.i18n.__("You have reached the end of product list. %s","surecart"),c.isPaginationAvailable()?wp.i18n.__("Press tab to browse more products using pagination.","surecart"):wp.i18n.__("No more products to browse.","surecart"))}:{}),{},{exportparts:"title, price, image",product:t,layoutConfig:c.layoutConfig}))}))),this.isPaginationAvailable()&&(0,l.h)("div",{class:{"product-item-list__pagination":!0,"--is-aligned-left":"left"===this.paginationAlignment,"--is-aligned-center":"center"===this.paginationAlignment,"--is-aligned-right":"right"===this.paginationAlignment}},(0,l.h)("sc-pagination",{page:this.page,perPage:this.limit,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:this.limit,onScNextPage:function(){return c.doPagination(c.page+1)},onScPrevPage:function(){return c.doPagination(c.page-1)}})),(this.busy||this.loading)&&(0,l.h)("sc-block-ui",null))}},{key:"el",get:function(){return(0,l.a)(this)}}],[{key:"watchers",get:function(){return{products:["handleProductsChanged"],sort:["handleSortChange"],selectedCollections:["handleSortChange"],query:["handleSortChange"],ids:["handleIdsChange"],limit:["handleIdsChange"],featured:["handleIdsChange"]}}}]),t}();m.style=":host {\n  display: block;\n}\n\n.product-item-list {\n  display: grid;\n  grid-template-columns: repeat(var(--sc-product-item-list-column), 1fr);\n  gap: var(--sc-product-item-list-gap);\n}\n.product-item-list__wrapper {\n  container-type: inline-size;\n  display: grid;\n  gap: var(--sc-spacing-medium);\n}\n@container (max-width: 576px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: 1fr;\n  }\n}\n@container (min-width: 576px) and (max-width: 768px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.product-item-list__sort, .product-item-list__empty, .product-item-list__search, .product-item-list__search-tag {\n  font-size: 16px;\n}\n.product-item-list__search, .product-item-list__sort {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-item-list__loader {\n  display: grid;\n  gap: 0.88rem;\n  padding-top: var(--sc-product-item-padding-top);\n  padding-bottom: var(--sc-product-item-padding-bottom);\n  padding-left: var(--sc-product-item-padding-left);\n  padding-right: var(--sc-product-item-padding-right);\n  margin-top: var(--sc-product-item-margin-top);\n  margin-bottom: var(--sc-product-item-margin-bottom);\n  margin-left: var(--sc-product-item-margin-left);\n  margin-right: var(--sc-product-item-margin-right);\n  border: solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);\n  border-radius: var(--sc-product-item-border-radius);\n  color: var(--sc-product-title-text-color);\n  background-color: var(--sc-product-item-background-color);\n  line-height: 1;\n}\n.product-item-list__pagination {\n  padding: 40px 0 0;\n  width: 100%;\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n.product-item-list__search-tag {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__search-label {\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n\n.search-button,\n.clear-button {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--sc-transition-medium) ease-in-out;\n  cursor: pointer;\n}\n\n.product-item-list__has-search .search-button,\n.product-item-list__has-search .clear-button {\n  opacity: 1;\n  visibility: visible;\n}\n\nsc-product-item::part(image) {\n  aspect-ratio: var(--sc-product-image-aspect-ratio);\n}\n\nsc-dropdown sc-button::part(base):focus-visible {\n  border: 1px dashed var(--sc-product-item-border-color, --sc-color-gray-50);\n}\n\nsc-pagination {\n  font-size: var(--sc-pagination-font-size);\n}"},4942:function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},5987:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(3366);function i(t,e){if(null==t)return{};var n,i,o=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},3366:function(t,e,n){function r(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{Z:function(){return r}})}}]);