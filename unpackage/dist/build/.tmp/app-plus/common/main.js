(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0d3e":function(e,t,n){"use strict";var o=n("2369"),r=n.n(o);r.a},"13d1":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("3427"));n("80ce");function u(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{provider:[]}},onLaunch:function(){var t=this;e.getProvider({service:"push",success:function(e){t.provider=e.provider,t.openPush()},fail:function(e){o("log","获取推送通道失败",e," at App.vue:18")}}),plus.push.addEventListener("click",(function(t){var n,o=e.getSystemInfoSync().platform;"android"==o?e.switchTab({url:"./pages/index/index"}):(n="click"==t.type?t.payload:JSON.parse(t.payload),null==n&&void 0==n||e.switchTab({url:"./pages/index/index"}))}),!1),plus.push.addEventListener("receive",(function(t){o("log","(receive):"+JSON.stringify(t)," at App.vue:48");var n=e.getSystemInfoSync().platform;if("android"==n){var r=JSON.parse(t.payload),u=r.title,a=r.titleText;plus.push.createMessage(a,t.payload,{title:u})}else{r=t.payload;if(null==t.aps&&"receive"==t.type){u=r.title,a=r.titleText;plus.push.createMessage(a,JSON.stringify(r),{title:u})}}}),!1),plus.screen.lockOrientation("portrait-primary"),o("log","App Launch"," at App.vue:75"),e.removeStorageSync("sendAddress"),e.removeStorageSync("endAddress"),e.removeStorageSync("shopInfo"),e.removeStorageSync("discount"),e.removeStorageSync("takeTimer")},onShow:function(){o("log","App Show"," at App.vue:83");var t=e.getSystemInfoSync();"android"===t.platform?this.$fetch(this.$api.version,{type:1,userType:2},"GET","form").then((function(e){if(0!==e.code)throw e.msg;r.default.init(JSON.parse(e.msg))})):"ios"===t.platform&&this.$fetch(this.$api.version,{type:2,userType:2},"GET","form").then((function(e){if(0!==e.code)throw e.msg;r.default.init(JSON.parse(e.msg))}))},onHide:function(){o("log","App Hide"," at App.vue:103")},methods:{openPush:function(){e.subscribePush({provider:this.provider[0],success:function(e){}})}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},2369:function(e,t,n){},"895d":function(e,t,n){"use strict";(function(e){n("7207"),n("921b");var t=s(n("66fd")),o=s(n("e201")),r=s(n("28d3")),u=s(n("9478")),a=s(n("2c27")),i=s(n("149b")),c=s(n("769c"));n("36c4");var l=s(n("d626"));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){n.e("pages/components/status/status").then(function(){return resolve(n("e8dd"))}.bind(null,n)).catch(n.oe)};t.default.config.productionTip=!1,t.default.component("Status",v),o.default.mpType="app";var m=function(){n.e("components/lyzml-datepicker/lyzml-datepicker").then(function(){return resolve(n("e614"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("f373"))}.bind(null,n)).catch(n.oe)};t.default.use(r.default),t.default.component("lyzml-datepicker",m),t.default.component("uniLoadMore",y),t.default.prototype.$fetch=u.default,t.default.prototype.$api=a.default,i.default.locale("zh-cn"),i.default.extend(c.default),t.default.prototype.$dayjs=i.default,t.default.use(l.default);var h=new t.default(d({},o.default));e(h).$mount()}).call(this,n("6e42")["createApp"])},c308:function(e,t,n){"use strict";n.r(t);var o=n("13d1"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},e201:function(e,t,n){"use strict";n.r(t);var o=n("c308");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("0d3e");var u,a,i,c,l=n("f0c5"),s=Object(l["a"])(o["default"],u,a,!1,null,null,null,!1,i,c);t["default"]=s.exports}},[["895d","common/runtime","common/vendor"]]]);