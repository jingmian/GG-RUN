(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"4ef7":function(e,r,t){"use strict";t.r(r);var n=t("b75d"),i=t("9080");for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);t("9dd6");var s,o=t("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);r["default"]=d.exports},"5d0d":function(e,r,t){},"79df":function(e,r,t){"use strict";(function(e){t("7207"),t("921b");n(t("66fd"));var r=n(t("4ef7"));function n(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("6e42")["createPage"])},"7d9f":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(t("4795"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return c(e)||d(e)||o(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,r){if(e){if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return u(e)}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r,t,n,i,a,s){try{var o=e[a](s),d=o.value}catch(c){return void t(c)}o.done?r(d):Promise.resolve(d).then(n,i)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var a=e.apply(r,t);function s(e){l(a,n,i,s,o,"next",e)}function o(e){l(a,n,i,s,o,"throw",e)}s(void 0)}))}}var p=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("8f1d"))}.bind(null,t)).catch(t.oe)},h={onLoad:function(r){var t=this,n=e.createSelectorQuery().in(this);n.select(".scroll-item").boundingClientRect((function(e){t.scrollWidth=e.width})).exec(),this.cancelModelProp(),this.hasFlag=!0,this.orderList=[],this.i=0,this.orderArr=[],this.orderArrLength=0,this.priceArr=[],this.showCancelModel=!1,this.realyCancel=!1,this.initMyInfo(),this.initOrder();var i=getCurrentPages(),a=i[i.length-1];this.currentWebview=a.$getAppWebview()},onShow:function(){var r=this;e.getStorageSync("userSelect")&&(this.currentIndex=e.getStorageSync("userSelect"),this.initOrder(),e.removeStorageSync("userSelect")),e.removeStorageSync("orderDetailInfo"),this.initOrder(),e.getStorageSync("orderRefresh")&&setTimeout((function(){r.handleCurrent(r.currentIndex),e.removeStorageSync("orderRefresh")}),500)},onHide:function(){e.hideLoading(),this.showCancelModel=!1,this.$refs.popupPay.close()},onTabItemTap:function(e){this.initOrder()},components:{uniPopup:p},data:function(){return{scrollList:[{id:"waitpay",name:"待支付",value:1},{id:"waitjiedan",name:"待接单",value:2},{id:"waitshouqu",name:"待收取",value:3},{id:"loding",name:"进行中",value:4},{id:"evaluate",name:"待评价",value:5},{id:"complete",name:"已完成",value:6},{id:"cancel",name:"已取消",value:0},{id:"questions",name:"问题订单",value:7}],currentIndex:0,toChildView:"",swiperHeight:684,orderList:[],orderArr:[],i:0,orderArrLength:0,hasFlag:!0,scrollLeft:0,noOrderText:"",timerId:"",currentWebview:"",switchTabFlag:!0,showCancelModel:!1,realyCancel:!1,cancelTimer:0,cancelPrice:0,orderRealyId:0,priceArr:[],payInfo:[{image:"../../static/img/my/yuezhifu.png",text:"余额支付",sectext:""},{image:"../../static/img/my/Alipaypayment.png",text:"支付宝支付（推荐）\t",sectext:""},{image:"../../static/img/my/weixinzhifu.png",text:"微信支付",sectext:""}],circleShow:0,waitPayamount:0,waitpayOrderId:0,deleteId:0,swiperItem1:[],swiperItem2:[],swiperItem3:[],swiperItem4:[],swiperItem5:[],swiperItem6:[],swiperItem7:[],swiperItem8:[],priceArr1:[],priceArr2:[],priceArr3:[],priceArr4:[],priceArr5:[],priceArr6:[],priceArr7:[],priceArr8:[],resTotal:0,firstPushArr:[]}},computed:{orderListLength:function(){return this.orderList.length},paotuifei:function(e,r){return Number(e-r).toFixed(2)}},methods:{handleCurrent:function(e,r,t){var i=this;return f(n.default.mark((function r(){var t;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:i.currentIndex=e,t=0==e?i.scrollList[i.currentIndex].id:i.scrollList[i.currentIndex-1].id,i.toChildView=t,i.hasFlag=!0,i.orderList=[],i.i=0,i.orderArr=[],i.orderArrLength=0,i.priceArr=[],i.initOrder(),i.switchTabFlag=!1;case 11:case"end":return r.stop()}}),r)})))()},goToSearch:function(){e.navigateTo({url:"../search/search"})},nowpayOrder:function(e,r){this.waitpayOrderId=e,this.waitPayamount=r,this.initMyInfo(),this.$refs.popupPay.open()},handleCircle:function(e){this.circleShow=e},initMyInfo:function(){var e=this;return f(n.default.mark((function r(){var t;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$fetch(e.$api.currentUser,{},"GET","form");case 2:t=r.sent,e.payInfo[0].sectext="("+Number(t.data.amount).toFixed(2)+")";case 4:case"end":return r.stop()}}),r)})))()},goToStorage:function(r,t){var n={addressDetail:t.startAddress.detail,latitude:t.startAddress.latitude,mobile:t.startAddress.mobile,name:t.startAddress.userName,editAddress:{name:t.startAddress.title,address:t.startAddress.name,latitude:t.startAddress.latitude.split(",")[1],longitude:t.startAddress.latitude.split(",")[0]}},i={addressDetail:t.endAddress.detail,latitude:t.endAddress.latitude,mobile:t.endAddress.mobile,name:t.endAddress.userName,editAddress:{name:t.endAddress.title,address:t.endAddress.name,latitude:t.endAddress.latitude.split(",")[1],longitude:t.endAddress.latitude.split(",")[0]}};e.showModal({title:"重新发单",content:"是否确定重新发单",success:function(a){a.confirm?(e.setStorageSync("sendAddress",JSON.stringify(n)),e.setStorageSync("endAddress",JSON.stringify(i)),e.navigateTo({url:"../storage/storage?car="+r+"&scrollIndex="+t.type})):a.cancel}})},refreshOrder:function(r){var t=this;return f(n.default.mark((function i(){return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e.showModal({title:"重新发单",content:"是否确定重新发单",success:function(){var e=f(n.default.mark((function e(i){var a;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=10;break}return t.deleteId=r.id,e.next=4,t.$fetch(t.$api.orderCreate,{buyAddressType:r.buyAddressType,startAddress:JSON.stringify(r.startAddress),endAddress:JSON.stringify(r.endAddress),tip:r.tip,goodsInventory:r.goodsInventory,distance:r.distance,type:r.type,pickUpType:0,carType:r.carType,incubatorFlag:r.incubatorFlag,premiumFlag:r.premiumFlag,urgentExpressPriceFlag:r.urgentExpressPriceFlag,signForCodeFlag:r.signForCodeFlag,goodsPredictAmount:r.goodsPredictAmount,subsidy:r.subsidy,remark:r.remark},"POST");case 4:a=e.sent,t.waitpayOrderId=a.data,t.waitPayamount=r.payAmount,t.$refs.popupPay.open(),e.next=11;break;case 10:i.cancel;case 11:case"end":return e.stop()}}),e)})));function i(r){return e.apply(this,arguments)}return i}()});case 1:case"end":return i.stop()}}),i)})))()},goToDeatail:function(r,t){var i=this;return f(n.default.mark((function a(){return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i.timerId&&clearTimeout(i.timerId),i.timerId=setTimeout(f(n.default.mark((function a(){var s;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.$fetch(i.$api.orderDetail,{id:r},"POST","Form");case 2:s=n.sent,0==s.code&&(3==i.currentIndex||2==i.currentIndex?(e.setStorageSync("orderDetailInfo",JSON.stringify(s.data)),e.navigateTo({url:"../orderDetail/orderDetailing?currentIndex="+i.currentIndex})):e.navigateTo({url:"../orderDetail/orderDetail?orderDetail="+JSON.stringify(s.data)+"&currentIndex="+i.currentIndex+"&payAmount="+t}));case 4:case"end":return n.stop()}}),a)}))),300);case 2:case"end":return a.stop()}}),a)})))()},copyNumber:function(r){e.setClipboardData({data:r,success:function(){}})},goToCancelOrder:function(r,t){this.orderRealyId=r,2===this.currentIndex&&(this.showCancelModel=!this.showCancelModel),t&&e.navigateTo({url:"../cancelOrder/cancelOrder?orderId="+r}),2!==this.currentIndex&&e.navigateTo({url:"../cancelOrder/cancelOrder?orderId="+r})},payOrder:function(r){var t=this;return f(n.default.mark((function i(){var a,s,o;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.showLoading({title:"正在下单中...."}),0!==t.circleShow){n.next=8;break}return n.next=4,t.$fetch(t.$api.orderPay,{orderId:t.waitpayOrderId,payType:t.circleShow},"POST","form");case 4:a=n.sent,0==a.code?(t.initMyInfo(),e.hideLoading(),e.showToast({icon:"success",title:a.msg}),t.$refs.popupPay.close(),setTimeout((function(){6==t.currentIndex&&(t.currentIndex=0),t.handleCurrent(t.currentIndex+1,r)}),1500),setTimeout((function(){6==t.currentIndex&&(t.currentIndex=0),t.handleCurrent(t.currentIndex,r)}),2e3),t.deleteId&&t.deleteOrder(t.deleteId,r,1)):e.showToast({icon:"none",title:a.msg}),n.next=20;break;case 8:if(1!==t.circleShow){n.next=15;break}return n.next=11,t.$fetch(t.$api.orderPay,{orderId:t.waitpayOrderId,payType:t.circleShow},"POST","form");case 11:s=n.sent,e.requestPayment({provider:"alipay",orderInfo:s.msg,success:function(n){e.hideLoading(),e.showToast({icon:"success",title:"支付成功"}),t.$refs.popupPay.close(),setTimeout((function(){6==t.currentIndex&&(t.currentIndex=0),t.handleCurrent(t.currentIndex+1,r)}),1500),setTimeout((function(){6==t.currentIndex&&(t.currentIndex=0),t.handleCurrent(t.currentIndex,r)}),2e3),t.deleteId&&t.deleteOrder(t.deleteId,r,1)},fail:function(r){e.showToast({icon:"none",title:"支付失败"})}}),n.next=20;break;case 15:if(2!==t.circleShow){n.next=20;break}return n.next=18,t.$fetch(t.$api.orderPay,{orderId:t.waitpayOrderId,payType:t.circleShow},"POST","form");case 18:o=n.sent,e.requestPayment({provider:"wxpay",orderInfo:o.data,success:function(n){e.hideLoading(),e.showToast({icon:"success",title:"支付成功"}),t.$refs.popupPay.close(),setTimeout((function(){6==t.currentIndex&&(t.currentIndex=0),t.handleCurrent(t.currentIndex+1,r)}),1500),setTimeout((function(){6==t.currentIndex&&(t.currentIndex=0),t.handleCurrent(t.currentIndex,r)}),2e3),t.deleteId&&t.deleteOrder(t.deleteId,r,1)},fail:function(r){e.showToast({icon:"none",title:"支付失败"})}});case 20:case"end":return n.stop()}}),i)})))()},collectRider:function(r){var t=this;return f(n.default.mark((function i(){var a;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$fetch(t.$api.orderCollection,{riderId:r,type:0},"POST","Form");case 2:a=n.sent,0===a.code&&e.showToast({icon:"success",title:"收藏骑手成功"});case 4:case"end":return n.stop()}}),i)})))()},handleShield:function(r){var t=this;return f(n.default.mark((function i(){return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$fetch(t.$api.orderCollection,{riderId:r,type:1},"POST","Form");case 2:n.sent,e.showToast({icon:"success",title:"屏蔽骑手成功"});case 4:case"end":return n.stop()}}),i)})))()},initOrder:function(){var r=this;return f(n.default.mark((function t(){var i,s;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$fetch(r.$api.orderCustomer,{status:r.scrollList[r.currentIndex].value,displayFlag:1},"POST");case 2:if(i=t.sent,r.resTotal=i.total,0===i.total?r.noOrderText="暂无订单":r.noOrderText="",r.orderList.length<i.total){for(r.hasFlag=!0,r.orderArr=[],s=r.i;s<i.total;s++)r.orderArr=i.rows.slice(r.i,r.i+10);r.orderArrLength+=r.orderArr.length,r.orderArr.forEach((function(e){e.startAddress=JSON.parse(e.startAddress),e.endAddress=JSON.parse(e.endAddress),e.startAddress.addressDetail=e.startAddress.addressDetail.replace("undefined",""),e.endAddress.addressDetail=e.endAddress.addressDetail.replace("undefined","")})),r.orderArrLength<=i.total&&(r.orderList=[].concat(a(r.orderList),a(r.orderArr)),0==r.currentIndex&&(r.swiperItem1=r.orderList),1==r.currentIndex&&(r.swiperItem2=r.orderList),2==r.currentIndex&&(r.swiperItem3=r.orderList),3==r.currentIndex&&(r.swiperItem4=r.orderList),4==r.currentIndex&&(r.swiperItem5=r.orderList),5==r.currentIndex&&(r.swiperItem6=r.orderList),6==r.currentIndex&&(r.swiperItem7=r.orderList),7==r.currentIndex&&(r.swiperItem8=r.orderList),r.orderList.length>=i.total&&(r.hasFlag=!1)),setTimeout((function(){e.hideLoading()}),500)}else 0==r.orderList.length&&0==r.currentIndex&&(r.swiperItem1=[]),0==r.orderList.length&&1==r.currentIndex&&(r.swiperItem2=[]),0==r.orderList.length&&2==r.currentIndex&&(r.swiperItem3=[]),0==r.orderList.length&&3==r.currentIndex&&(r.swiperItem4=[]),0==r.orderList.length&&4==r.currentIndex&&(r.swiperItem5=[]),0==r.orderList.length&&5==r.currentIndex&&(r.swiperItem6=[]),0==r.orderList.length&&6==r.currentIndex&&(r.swiperItem7=[]),r.hasFlag=!1;case 6:case"end":return t.stop()}}),t)})))()},goToEvaluate:function(r){e.navigateTo({url:"../evaluate/evaluate?orderId="+r})},deleteOrder:function(r,t,i){var a=this;return f(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=6;break}return t.next=3,a.$fetch(a.$api.orderDisplay,{id:r},"POST","form");case 3:t.sent,t.next=7;break;case 6:e.showModal({title:"删除订单",content:"确定删除订单么?",success:function(){var e=f(n.default.mark((function e(t){var i,s,o,d;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=7;break}return e.next=3,a.$fetch(a.$api.orderDisplay,{id:r},"POST","form");case 3:if(i=e.sent,i.data){if(4==a.currentIndex)for(s=0;s<a.swiperItem5.length;s++)a.swiperItem5[s].id==r&&a.swiperItem5.splice(s,1);if(5==a.currentIndex)for(o=0;o<a.swiperItem6.length;o++)a.swiperItem6[o].id==r&&a.swiperItem6.splice(o,1);if(6==a.currentIndex)for(d=0;d<a.swiperItem7.length;d++)a.swiperItem7[d].id==r&&a.swiperItem7.splice(d,1)}e.next=8;break;case 7:t.cancel;case 8:case"end":return e.stop()}}),e)})));function t(r){return e.apply(this,arguments)}return t}()});case 7:case"end":return t.stop()}}),t)})))()},swiperChange:function(e){var r=this;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout((function(){if(r.switchTabFlag){r.currentIndex=e.detail.current;var t=0==e.detail.current?r.scrollList[e.detail.current].id:r.scrollList[e.detail.current-1].id;r.toChildView=t,r.hasFlag=!0,r.orderList=[],r.i=0,r.orderArr=[],r.orderArrLength=0,r.priceArr=[],r.scrollLeft=r.currentIndex*r.scrollWidth,r.initOrder()}r.switchTabFlag=!0}),500)},getElSize:function(r){return new Promise((function(t,n){var i=e.createSelectorQuery().select("#"+r);i.fields({size:!0,scrollOffset:!0,rect:!0},(function(e){t(e)})).exec()}))},scrollBottom:function(){this.i+=10,this.hasFlag&&this.initOrder()},watchScrollY:function(e){},closeCancelModel:function(e){this.showCancelModel=!this.showCancelModel},cancelModelProp:function(){var e=this;return f(n.default.mark((function r(){var t;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$fetch(e.$api.orderCancelProp,{},"GET","form");case 2:t=r.sent,e.cancelTimer=t.data.time,e.cancelPrice=t.data.price;case 5:case"end":return r.stop()}}),r)})))()}},onPullDownRefresh:function(){var r=this;setTimeout((function(){r.hasFlag=!0,r.orderList=[],r.i=0,r.orderArr=[],r.orderArrLength=0,r.priceArr=[],r.initOrder(),e.stopPullDownRefresh()}))}};r.default=h}).call(this,t("6e42")["default"])},9080:function(e,r,t){"use strict";t.r(r);var n=t("7d9f"),i=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);r["default"]=i.a},"9dd6":function(e,r,t){"use strict";var n=t("5d0d"),i=t.n(n);i.a},b75d:function(e,r,t){"use strict";var n={"uni-popup":function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"8f1d"))}},i=function(){var e=this,r=e.$createElement;e._self._c},a=[];t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return n}))}},[["79df","common/runtime","common/vendor"]]]);