webpackJsonp([14],{116:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"registration",data:function(){return{loginStatus:0,wrongTip:"",loadState:0,tipTimer:null,loginway:0}},directives:{focus:{inserted:function(t){t.focus()}}},mounted:function(){GaHelper.sendPageView(),localStorage.getItem("huang")?(localStorage.removeItem("huang"),$(".login-full-name").val(localStorage.getItem("username")),$(".login-institution-name").val(localStorage.getItem("usercompany")),$(".login-business-email").val(localStorage.getItem("useremail")),this.loginway=1):this.loginway=0;var t=location.origin+"/view/bind/excessive.html";if("www.eversight.ai"==location.hostname){new WxLogin({id:"login_container_really",appid:"wx4ff7c9952429c23c",scope:"snsapi_login",redirect_uri:encodeURIComponent(t),state:Math.round(1e7*Math.random()),style:"",href:"https://"+location.hostname+"/view/bind/css/bind.css"})}else if("data-dev.modeling.ai"==location.hostname){new WxLogin({id:"login_container_really",appid:"wx6e4329dacb96437c",scope:"snsapi_login",redirect_uri:encodeURIComponent(t),state:Math.round(1e7*Math.random()),style:"",href:"https://"+location.hostname+"/view/bind/css/bind.css"})}},computed:{lang:function(){return this.$store.state.introduction.lang}},methods:{direct:function(t){this.$router.push({name:t})},verify:function(){return $(".login-full-name").val().trim()?/^[^\s][A-Za-z0-9_\-\u4e00-\u9fa5\s]*[^\s]*$/.test($(".login-full-name").val())?$(".login-institution-name").val().trim()?/^[^\s][A-Za-z0-9_\-\u4e00-\u9fa5\s]*[^\s]*$/.test($(".login-institution-name").val())?$(".login-business-email").val().trim()?$(".login-business-email").val().trim().indexOf("@")>=0?$(".login-password").val().trim()?!($(".login-password").val().trim().length<6)||(this.wrongTip="Password can't be shorter than six",!1):(this.wrongTip="Your password can't be empty",!1):(this.wrongTip="illegal email",!1):(this.wrongTip="Your Business Email can't be empty",!1):(this.wrongTip="Your Institution Name is illegal",!1):(this.wrongTip="Your Institution Name can't be empty",!1):(this.wrongTip="Your Full Name is illegal",!1):(this.wrongTip="Your Full Name can't be empty",!1)},register:function(){var t=this;if(!this.verify())return!1;localStorage.setItem("huangjian",!1),localStorage.setItem("黄健",!0);var e=localStorage.getItem("lang");$.post({url:U.getApiPre()+"/api/v1/account/register",data:{email:$(".login-business-email").val(),username:$(".login-full-name").val(),company:$(".login-institution-name").val(),password:$.md5($(".login-password").val()),lang:e},timeout:1e3,success:function(e){e.success?(console.log(e),localStorage.setItem("status",e.status),localStorage.setItem("uid",e.data.user.id),localStorage.setItem("useremail",e.data.user.email),localStorage.setItem("usercompany",e.data.company),localStorage.setItem("username",e.data.user.username),localStorage.setItem("huang",!0),location.href=location.origin+"/view/bind/email-bind.html"):t.wrongTip=e.message||"Wrong E-mail or password"},complete:function(){t.loadState=0}})},openNewPageWx:function(){var t=location.origin+"/view/bind/excessive.html",e="wx4ff7c9952429c23c";"data-dev.modeling.ai"==location.hostname&&(e="wx6e4329dacb96437c"),window.location.href="https://open.weixin.qq.com/connect/qrconnect?appid="+e+"&redirect_uri="+encodeURIComponent(t)+"&response_type=code&scope=snsapi_login&state="+Math.round(1e7*Math.random())+"#wechat_redirect"},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(e);return null!=a?decodeURI(a[2]):""}},watch:{wrongTip:function(t){var e=this;this.tipTimer&&clearTimeout(this.tipTimer),this.tipTimer=setTimeout(function(){e.wrongTip=""},1800)}}}},141:function(t,e,a){e=t.exports=a(72)(),e.push([t.i,".login-wrap[data-v-5fa0aaed]{position:relative;height:100%;width:100%;background:url(/images/login-bg.jpg) no-repeat 50%;background-size:cover}.login-head[data-v-5fa0aaed]{padding:20px 80px}.login-head .logo[data-v-5fa0aaed]{width:110px;height:110px;background:url(/images/img-icon.png) no-repeat;background-position:0 0}.login-container[data-v-5fa0aaed]{color:#fff;width:500px;min-height:400px;position:absolute;left:50%;top:45%;margin-left:-200px;margin-top:-200px}.login-welcome[data-v-5fa0aaed]{font-family:goodTimes;margin-bottom:45px;text-align:center;font-size:30px;color:#fff}.login-form[data-v-5fa0aaed]{width:400px;margin:0 auto}.login-form-control[data-v-5fa0aaed]{position:relative;height:55px;margin-bottom:10px}.login-form-control[data-v-5fa0aaed]:first-child{margin-top:20px}.login-form-control-huang[data-v-5fa0aaed]{margin-bottom:0!important}.login-form-control .login-label[data-v-5fa0aaed]{transition:all .1s linear;position:absolute;color:#5a7c8e;top:20px;left:0;font-size:16px;pointer-events:none}.login-form-control .login-label.up[data-v-5fa0aaed]{top:3px;font-size:14px}.login-form-control input[data-v-5fa0aaed]{height:30px;line-height:30px;width:400px;margin:0 auto;font-size:14px;border-bottom:1px solid gray}.login-form-control input[data-v-5fa0aaed]::-webkit-input-placeholder{color:#456d7f;font-size:14px;font-weight:700}.login-input[data-v-5fa0aaed]{width:400px;height:30px;margin-top:20px;font-size:16px;color:#92bdd2;border-bottom:1px solid hsla(0,0%,100%,.06)}.login-form-control.wrong-tip[data-v-5fa0aaed]{height:15px;font-size:12px;color:#fb5252;margin-bottom:18px}.btn-login[data-v-5fa0aaed]{width:400px;margin-left:50px;background:#355867;font-size:16px;line-height:50px;border-radius:3px;color:#92bdd2;transition:all .3s linear}.btn-login[data-v-5fa0aaed]:hover{background:#456d7f}.Logging[data-v-5fa0aaed]{margin-left:-30px}.Logging .loader[data-v-5fa0aaed]{font-size:12px;margin-right:30px;vertical-align:middle}.login-footer[data-v-5fa0aaed]{border-top:1px solid hsla(0,0%,100%,.06);position:absolute;bottom:0;left:50%;margin-left:-590px;line-height:100px;color:#5a7c8e;font-size:12px}.login-footer .copyright[data-v-5fa0aaed]{float:left}.login-footer .contact[data-v-5fa0aaed]{float:right;padding-right:10px}.login-footer .contact .contact-email[data-v-5fa0aaed]{color:#5a7c8e}.forgot_password[data-v-5fa0aaed]{color:#5a7c8e;text-align:center;padding-top:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.forgot_password span[data-v-5fa0aaed]{cursor:pointer}.login[data-v-5fa0aaed]{position:fixed;top:35px;right:80px;width:110px;height:36px;line-height:36px;text-align:center;cursor:pointer;border:1px solid #fff;color:#fff;border-radius:5px;transition:background .2s linear;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.icon-login[data-v-5fa0aaed]{width:10px;height:12px;display:inline-block;vertical-align:0;margin-right:10px;background-position:0 -445px}.login[data-v-5fa0aaed]:hover{color:#0a1e27;background:#fff}.login:hover .icon-login[data-v-5fa0aaed]{background-position:-11px -444px}.switch_bar[data-v-5fa0aaed]{height:60px;width:80%;margin:0 auto;position:relative}.switch_btn[data-v-5fa0aaed]{height:67px;float:left;width:50%;cursor:pointer;line-height:67px;color:gray;text-align:center}.active[data-v-5fa0aaed]{color:#fff;font-weight:700}.btn_underline[data-v-5fa0aaed]{height:2px;display:block;width:100px;background-color:#fff;position:absolute;bottom:0;transition:left .3s}.atLeft[data-v-5fa0aaed]{left:52px}.atRight[data-v-5fa0aaed]{left:251px}.account[data-v-5fa0aaed]{display:block;color:#92bdd2;padding-top:15px;cursor:pointer}.loginway[data-v-5fa0aaed]{height:360px;width:100%}.loginway form[data-v-5fa0aaed]{width:300px;margin:0 auto}.wechart[data-v-5fa0aaed]{text-align:center}.wechart p[data-v-5fa0aaed]{margin-top:25px;line-height:25px;color:#666}#login_container[data-v-5fa0aaed]{overflow:hidden;position:relative}#login_container_really[data-v-5fa0aaed]{overflow:hidden;height:100%}.wxlogintext[data-v-5fa0aaed]{font-size:12px;color:#999;position:absolute;left:0;bottom:95px;width:100%;height:15px;line-height:15px;text-align:center}.wxlogintext i[data-v-5fa0aaed]{font-style:normal}.wxlogintext .i[data-v-5fa0aaed]{text-decoration:underline;cursor:pointer;white-space:nowrap}.wxloginErrortext[data-v-5fa0aaed]{font-size:12px;color:#666;position:absolute;left:0;bottom:30px;width:100%;text-align:center;cursor:pointer}.wxloginErrortext[data-v-5fa0aaed]:hover{color:#fff}",""])},212:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"login-head"},[a("div",{staticClass:"logo pointer",on:{click:function(e){t.direct("introduction")}}})]),t._v(" "),0==t.loginStatus?a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-welcome"},[t._v("WELCOME")]),t._v(" "),a("div",{staticClass:"switch_bar",staticStyle:{"font-size":"14px"}},[a("div",{staticClass:"switch_btn",class:{active:0==t.loginway},domProps:{textContent:t._s("zh_CN"==t.lang?"微信注册":"Wechat Register")},on:{click:function(e){t.loginway=0}}}),t._v(" "),a("div",{staticClass:"switch_btn",class:{active:1==t.loginway},domProps:{textContent:t._s("zh_CN"==t.lang?"邮箱注册":"Email Register")},on:{click:function(e){t.loginway=1}}}),t._v(" "),a("span",{staticClass:"btn_underline",class:{atLeft:0==t.loginway,atRight:1==t.loginway}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.loginway,expression:"loginway==0"}],staticClass:"loginway wechart",attrs:{id:"login_container"}},[a("div",{attrs:{id:"login_container_really"}}),t._v(" "),a("span",{staticClass:"wxlogintext"},[a("i",{domProps:{textContent:t._s("zh_CN"==t.lang?"微信扫一扫即可注册，":"Scan here to register,")}}),a("i",{staticClass:"i",domProps:{textContent:t._s("zh_CN"==t.lang?"海外版微信用户建议使用邮箱注册":" Email registration is HIGHLY RECOMMENDED for users overseas.")},on:{click:function(e){t.loginway=1}}})]),t._v(" "),a("span",{staticClass:"wxloginErrortext",domProps:{textContent:t._s("zh_CN"==t.lang?"二维码异常？":"Having troubles with QR code?")},on:{click:t.openNewPageWx}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.loginway,expression:"loginway==1"}],staticClass:"login-form"},[a("div",{staticClass:"login-form-control"},[a("input",{staticClass:"login-full-name",attrs:{type:"text",placeholder:"zh_CN"==t.lang?"您的姓名":"Your Full Name"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.register()}}})]),t._v(" "),a("div",{staticClass:"login-form-control"},[a("input",{staticClass:"login-institution-name",attrs:{type:"text",placeholder:"zh_CN"==t.lang?"机构名称":"Institution Name"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.register()}}})]),t._v(" "),a("div",{staticClass:"login-form-control"},[a("input",{staticClass:"login-business-email",attrs:{type:"text",placeholder:"zh_CN"==t.lang?"公司邮箱":"Business Email"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.register()}}})]),t._v(" "),a("div",{staticClass:"login-form-control login-form-control-huang"},[a("input",{staticClass:"login-password",attrs:{type:"password",placeholder:"zh_CN"==t.lang?"设置密码":"Password"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.register()}}})]),t._v(" "),a("div",{staticClass:"login-form-control wrong-tip"},[a("transition",{attrs:{name:"component-fade"}},[t.wrongTip?a("span",{domProps:{textContent:t._s(t.wrongTip)}}):t._e()])],1)]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:1==t.loginway,expression:"loginway == 1"}],staticClass:"btn-login",on:{click:function(e){t.register()}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:0===t.loadState,expression:"loadState === 0"}],domProps:{textContent:t._s("zh_CN"==t.lang?"注册":"Create an Account")}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1===t.loadState,expression:"loadState === 1"}],staticClass:"Logging"},[a("i",{staticClass:"loader"}),t._v("\n\t\t\t\tRegistering...\n\t\t\t")])])]):t._e(),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-footer item-1180"},[a("div",{staticClass:"copyright"},[t._v("\n\t\t\tCopyright © 2016 - 2017 Eversight.AI. All Rights Reserved. \n\t\t")]),t._v(" "),a("div",{staticClass:"contact"},[a("a",{staticClass:"contact-email",attrs:{href:"mailto:service@Eversight.ai"}},[t._v("Email:service@Eversight.ai")])])])}]}},250:function(t,e,a){var o=a(141);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(73)("abac3a48",o,!0)},69:function(t,e,a){a(250);var o=a(10)(a(116),a(212),"data-v-5fa0aaed",null);t.exports=o.exports},72:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var a=this[e];a[2]?t.push("@media "+a[2]+"{"+a[1]+"}"):t.push(a[1])}return t.join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&o[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),t.push(r))}},t}},73:function(t,e,a){function o(t){for(var e=0;e<t.length;e++){var a=t[e],o=d[a.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](a.parts[n]);for(;n<a.parts.length;n++)o.parts.push(i(a.parts[n]));o.parts.length>a.parts.length&&(o.parts.length=a.parts.length)}else{for(var r=[],n=0;n<a.parts.length;n++)r.push(i(a.parts[n]));d[a.id]={id:a.id,refs:1,parts:r}}}}function n(){var t=document.createElement("style");return t.type="text/css",g.appendChild(t),t}function i(t){var e,a,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(f)return h;o.parentNode.removeChild(o)}if(m){var i=u++;o=p||(p=n()),e=r.bind(null,o,i,!1),a=r.bind(null,o,i,!0)}else o=n(),e=s.bind(null,o),a=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else a()}}function r(t,e,a,o){var n=a?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,n);else{var i=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}function s(t,e){var a=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=a(74),d={},g=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,u=0,f=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a){f=a;var n=c(t,e);return o(n),function(e){for(var a=[],i=0;i<n.length;i++){var r=n[i],s=d[r.id];s.refs--,a.push(s)}e?(n=c(t,e),o(n)):n=[];for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var v=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},74:function(t,e){t.exports=function(t,e){for(var a=[],o={},n=0;n<e.length;n++){var i=e[n],r=i[0],s=i[1],l=i[2],c=i[3],d={id:t+":"+n,css:s,media:l,sourceMap:c};o[r]?o[r].parts.push(d):a.push(o[r]={id:r,parts:[d]})}return a}}});