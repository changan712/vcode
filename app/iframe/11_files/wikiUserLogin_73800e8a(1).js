F.module("/static/common/ui/wikiUserLogin/wikiUserLogin.js",function(b,a){var e=b("/static/common/ui/jquery/jquery.js");var f={onLogin:function(){return},onUnlogin:function(){return},onLoginSuccess:function(){window.location.href=window.location.href.replace(/#.*$/g,"")},onLoginFail:function(){return}};var d={api:{login:function(g,h){e.ajax({type:"GET",url:"/api/login/?t="+(new Date()).getTime()+"&fr="+(g.patchment?(g.patchment):""),dataType:"JSON",success:function(i){h(i)}})},loginPop:function(g,h){e.getScript("http://passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion="+(new Date()).getTime(),function(){h()})}}};var c={checkIfLogin:function(g){var j=g||{};var h=j.onLogin||f.onLogin,i=j.onUnlogin||f.onUnlogin;d.api.login(g,function(k){if(e.trim(k)==0){i()}else{h(k)}})},showLoginPop:function(g){var k=g||{};var h=k.onLoginSuccess||f.onLoginSuccess,j=k.onLoginFail||f.onLoginFail;var l=function(){window.passport._loginPop=window.passport.pop.init({tangram:true,apiOpt:{product:"wk",staticPage:"http://baike.baidu.com/static/common/html/v3Jump.html",memberPass:true,safeFlag:0,u:window.location.href.replace(/#.*$/g,"")},authsiteCfg:{act:"implicit"},cache:true,authsite:["renren","tsina","tqq","qzone","fetion"],registerLink:"https://passport.baidu.com/v2/?reg&regType=1&tpl=wk",onLoginSuccess:function(m){h();window.passport._loginPop.hide();m.returnValue=false},onSubmitedErr:function(m){j()}});window.passport._loginPop.show()};var i=function(){window.passport.hook.login.loginSuccess=function(n,m){h();window.passport._loginPop.hide();m.returnValue=false};window.passport.hook.login.loginErr=function(n,m){j()};window.passport._loginPop.show()};if(!window.passport){d.api.loginPop({},l)}else{i()}},logout:function(){window.location.href="https://passport.baidu.com/?logout&u="+encodeURIComponent(window.location.href)}};a=c;return a},["/static/common/ui/jquery/jquery.js"]);