webpackJsonp([13],{"//1T":function(e,t){},KvKp:function(e,t,s){"use strict";t.a={getUrlKey:function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}}},W8fB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("KvKp");var a=s("0w2Z"),i=s("SfSD"),o=s.n(i),n={name:"forget",data:function(){return{username:"",mobile:"",idcode:"",password:"",sure_pwd:"",yzcode:"",InterValObj:"",curCount:60,isGet:!0,title:"",haveTap:0,codeType:6}},components:{},created:function(){},mounted:function(){},methods:{close:function(){o()(".mask").hide(),o()("#logout").hide()},makeIdentifyCode:function(){var e=this,t=this;if(0===this.haveTap){if(/^\d{11}$/.test(this.mobile)){t.haveTap=1;var s={accepter:t.mobile,code_type:t.codeType};o()(".Ehint").hide(),o()("#getVerify a").hide(),o()("#getVerify i").text("获取验证码"),Object(a.i)(s).then(function(s){t.haveTap=0,0===s.data.code?(e.curCount=60,o()("#getVerify i").text(e.curCount+"s"),t.InterValObj=window.setInterval(function(){1==t.curCount?(window.clearInterval(t.InterValObj),o()("#getVerify a").show(),o()("#getVerify a").text("重新发送"),o()("#getVerify i").empty()):(t.curCount=Number(t.curCount)-1,o()("#getVerify i").text(t.curCount+"s"))},1e3),e.$message.success(s.data.msg)):(o()("#getVerify a").show().text("重新发送"),o()("#getVerify i").empty(),o()(".Ehint").text("获取验证码失败，请重试！").show(),setTimeout(function(){o()(".Ehint").hide()},3e3),e.$message.error(s.data.msg))})}else o()(".Ehint").text("提示：请输入正确的手机号码！").show(),setTimeout(function(){o()(".Ehint").hide()},3e3)}else console.log("屏蔽重复点击"),t.$message.error("点击频率过快")},register:function(){var e=this,t=this;if(0===this.haveTap)if(""==this.mobile||""==this.username||""==this.password||""==o()("#verify").val())o()(".mask").show(),o()("#logout").show(),o()(".dialog-content").text("请输入完整信息！");else{if(!/^\d{11}$/.test(this.mobile))return o()(".mask").show(),o()("#logout").show(),o()(".dialog-content").text("请输入正确的手机号！"),!1;if(!/^[a-zA-Z]{1}([a-zA-Z0-9_]){5,24}$/.test(this.username))return t.$message.error("用户名是6-16位的英文大小写数字,首字母必须是字母！"),!1;if(!/^[a-zA-Z0-9_!@#$%^&*()_+-=\[\]{}|;:,.<>]{6,24}$/.test(this.password))return t.$message.error("密码是6-24位的大小写字母和特殊字符！"),!1;if(this.sure_pwd!=this.password)return this.$message.error("密码不一致！"),!1;t.haveTap=1;var s={mobile:t.mobile,username:t.username,code:o()("#verify").val(),new_pwd:t.password};Object(a.q)(s).then(function(s){0===s.data.code?(t.$message.success(s.data.msg),t.haveTap=0,e.$router.push({name:"login"})):(t.haveTap=0,t.$message.error(s.data.msg))})}else console.log("屏蔽重复点击"),t.$message.error("点击频率过快")}},destroyed:function(){this.InterValObj&&clearInterval(this.InterValObj)}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main_content"},[a("el-container",[a("div",{staticClass:"login_bg"},[a("div",{staticClass:"login_bg_img"},[a("img",{attrs:{src:s("aF6v")}})]),e._v(" "),a("div",{staticClass:"login_bg_title"},[e._v("重置密码")]),e._v(" "),a("div",{staticClass:"login_ul"},[a("div",{staticClass:"login_info"},[a("label",[e._v("用户名 "),a("span",[e._v("(6-16位,首位是字母)")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"login_info"},[a("label",[e._v("手机号码")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"login_info"},[a("label",[e._v("验证码")]),e._v(" "),a("div",{staticClass:"login_code"},[a("input",{staticClass:"loan_inut",attrs:{id:"verify",placeholder:"请输入验证码"}}),e._v(" "),a("label",{attrs:{id:"getVerify"}},[a("span",[a("a",{on:{click:e.makeIdentifyCode}},[e._v("获取验证码 ")]),a("i")])])])]),e._v(" "),a("div",{staticClass:"login_info"},[a("label",[e._v("密码 "),a("span",[e._v("(6-24位)")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请设置密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"login_info"},[a("label",[e._v("确认密码")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sure_pwd,expression:"sure_pwd"}],attrs:{type:"password",placeholder:"请再次输入密码"},domProps:{value:e.sure_pwd},on:{input:function(t){t.target.composing||(e.sure_pwd=t.target.value)}}})]),e._v(" "),a("p",{staticClass:"Ehint"}),e._v(" "),a("div",{staticClass:"login_btn"},[a("button",{on:{click:e.register}},[e._v("确定")])]),e._v(" "),a("div",{staticClass:"register_btn"},[a("router-link",{attrs:{to:{name:"login"}}},[a("button",[e._v("登录")])])],1)])])]),e._v(" "),a("div",{staticClass:"mask",on:{click:e.close}}),e._v(" "),a("div",{staticClass:"dialog",attrs:{id:"logout"}},[a("div",{staticClass:"dialog-content"}),e._v(" "),a("div",{staticClass:"dialog-btn clearfix"},[a("a",{staticClass:"dialog_sure2",on:{click:e.close}},[e._v("确认")])])])],1)},staticRenderFns:[]};var l=s("VU/8")(n,r,!1,function(e){s("//1T")},"data-v-0d5aabd1",null);t.default=l.exports}});