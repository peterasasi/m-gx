webpackJsonp([15],{HNMB:function(t,e){},QUSU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("GgDs"),i=(a("mtWM"),a("7+uW"),a("8X1o"),a("0w2Z")),n=a("SfSD"),o=a.n(n),r=(a("fxnj"),a("PJh5"),{name:"updateList",data:function(){return{loginData:"",allProjects:[],page:1,ismore:!1}},components:{"Index-header":s.a},beforeDestroy:function(){document.querySelector("html").removeAttribute("style")},created:function(){this.$store.state.title="升级记录",this.$store.state.linkName="updateLevel"},mounted:function(){document.querySelector("html").setAttribute("style","background-color:#F5F5F5"),this.loginData=JSON.parse(localStorage.getItem("loginData")),this.getAllData();var t=this;o()(window).scroll(function(){var e=o()(this).scrollTop(),a=o()(document).height();e+o()(this).height()==a&&1==t.ismore&&t.getAllData()})},methods:{getAllData:function(){var t=this,e={uid:this.loginData.id,sid:this.loginData.sid,page_index:this.page,page_size:10};Object(i.t)(e).then(function(e){if(0===e.data.code){var a=e.data.data.list;if(a.length>0){for(var s=0;s<a.length;s++){"1"==a[s].pay_status?a[s].pay_status="已支付":"0"==a[s].pay_status&&(a[s].pay_status="待支付"),a[s].amount=Number(a[s].amount).toFixed(2);var i=new Date;i.setTime(1e3*a[s].paid_time),a[s].paid_time=t.$moment(i).format("YYYY-MM-DD HH:mm:ss");var n=new Date;n.setTime(1e3*a[s].create_time),a[s].create_time=t.$moment(n).format("YYYY-MM-DD HH:mm:ss"),t.allProjects.push(a[s])}a.length<10?t.ismore=!1:(t.page++,t.ismore=!0)}else t.ismore=!1}else t.$message.error(e.data.msg)})}}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Index-header"),t._v(" "),a("div",{attrs:{id:"tab"}},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-content-item"},t._l(t.allProjects,function(e,s){return a("div",{key:s,staticClass:"tab-content-item-div"},[a("div",{staticClass:"tab-content-item-left"},[a("label",[t._v(t._s(e.remark))]),t._v(" "),"已支付"==e.pay_status?a("span",[t._v(t._s(e.paid_time))]):a("span",[t._v(t._s(e.create_time))])]),t._v(" "),a("div",{staticClass:"tab-content-item-right"},["已支付"==e.pay_status?a("label",[t._v(t._s(e.pay_status))]):a("label",{staticClass:"wait_status"},[t._v(t._s(e.pay_status))]),t._v(" "),a("span",[t._v("-"+t._s(e.amount))])])])}))])]),t._v(" "),a("div",[t.ismore?a("div",{staticClass:"nodata"},[t._v("上拉加载更多")]):a("div",{staticClass:"nodata"},[t._v("无更多数据")])])],1)},staticRenderFns:[]};var c=a("VU/8")(r,l,!1,function(t){a("HNMB")},"data-v-7ea0636d",null);e.default=c.exports}});