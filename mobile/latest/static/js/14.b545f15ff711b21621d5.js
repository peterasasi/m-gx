webpackJsonp([14],{TUWT:function(e,t){},"er+a":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("0w2Z"),s=i("SfSD"),o=i.n(s),n={name:"loginPass",data:function(){return{mobile:"",password:"",yzcode:"",InterValObj:"",curCount:60,haveTap:0,codeType:5}},components:{},created:function(){},mounted:function(){},methods:{close:function(){o()(".mask").hide(),o()("#logout").hide()},makeIdentifyCode:function(){var e=this,t=this;if(0===this.haveTap){if(/^\d{11}$/.test(this.mobile)){t.haveTap=1;var i={accepter:t.mobile,code_type:t.codeType};o()(".Ehint").hide(),o()("#getVerify a").hide(),o()("#getVerify i").text("获取验证码"),Object(a.i)(i).then(function(i){t.haveTap=0,0===i.data.code?(e.curCount=60,o()("#getVerify i").text(e.curCount+"s"),t.InterValObj=window.setInterval(function(){1==t.curCount?(window.clearInterval(t.InterValObj),o()("#getVerify a").show(),o()("#getVerify a").text("重新发送"),o()("#getVerify i").empty()):(t.curCount=Number(t.curCount)-1,o()("#getVerify i").text(t.curCount+"s"))},1e3),e.$message.success(i.data.msg)):(o()("#getVerify a").show().text("重新发送"),o()("#getVerify i").empty(),o()(".Ehint").text("获取验证码失败，请重试！").show(),setTimeout(function(){o()(".Ehint").hide()},3e3),e.$message.error(i.data.msg))})}else o()(".Ehint").text("提示：请输入正确的手机号码！").show(),setTimeout(function(){o()(".Ehint").hide()},3e3)}else console.log("屏蔽重复点击"),t.$message.error("点击频率过快")},login:function(){var e=this;if(0===this.haveTap)if(""==this.mobile||""==o()("#verify").val())e.$message.error({message:"请输入手机号和验证码！"});else{if(!/^\d{11}$/.test(this.mobile))return e.$message.error("请输入正确的手机号！"),!1;e.haveTap=1;var t={mobile:e.mobile,code:o()("#verify").val()};Object(a.j)(t).then(function(t){0===t.data.code?(e.haveTap=0,e.$cookies.set("status","logined","7d"),e.$message.success("登陆成功"),e.$router.push({name:"home"}),localStorage.setItem("loginData",JSON.stringify(t.data.data)),e.loginData=JSON.parse(localStorage.getItem("loginData"))):(e.haveTap=0,e.$message.error(t.data.msg))})}else console.log("屏蔽重复点击"),e.$message.error("点击频率过快")}},destroyed:function(){this.InterValObj&&clearInterval(this.InterValObj)}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main_content"},[a("el-container",[a("div",{staticClass:"login_bg"},[a("div",{staticClass:"login_bg_img"},[a("img",{attrs:{src:i("aF6v")}})]),e._v(" "),a("div",{staticClass:"login_bg_title"},[e._v("登录")]),e._v(" "),a("div",{staticClass:"login_ul"},[a("div",{staticClass:"login_info"},[a("label",[e._v("手机号")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"login_info"},[a("label",[e._v("验证码")]),e._v(" "),a("div",{staticClass:"login_code"},[a("input",{staticClass:"loan_inut",attrs:{id:"verify",placeholder:"请输入验证码"}}),e._v(" "),a("label",{attrs:{id:"getVerify"}},[a("span",[a("a",{on:{click:e.makeIdentifyCode}},[e._v("获取验证码 ")]),a("i")])])])]),e._v(" "),a("div",{staticClass:"pass_login"},[a("router-link",{attrs:{to:{name:"login"}}},[a("span",[e._v("密码登录")]),e._v(" "),a("img",{attrs:{src:i("1TIZ")}})])],1),e._v(" "),a("p",{staticClass:"Ehint"}),e._v(" "),a("div",{staticClass:"login_btn"},[a("button",{on:{click:e.login}},[e._v("登录")])]),e._v(" "),a("div",{staticClass:"register_btn"},[a("router-link",{attrs:{to:{name:"register"}}},[a("button",[e._v("注册")])])],1)])]),e._v(" "),a("div",{staticClass:"mask",on:{click:e.close}}),e._v(" "),a("div",{staticClass:"dialog",attrs:{id:"logout"}},[a("div",{staticClass:"dialog-content"}),e._v(" "),a("div",{staticClass:"dialog-btn clearfix"},[a("a",{staticClass:"dialog_sure2",on:{click:e.close}},[e._v("确认")])])])])],1)},staticRenderFns:[]};var r=i("VU/8")(n,l,!1,function(e){i("TUWT")},"data-v-e893537a",null);t.default=r.exports}});