//全局變量
var userToken = '',
	licenseServer = 'https://dev.license.shixincube.cn/auth/license/get';

class AppAccountListener {
	onLogined(session) {
		document.getElementById('root').innerText = 'Cube Engine 登陆成功!';
	}

	onLogouted(session) {
		document.getElementById('root').innerText = 'Cube Engine 账号已注销!';
	}

	onFailed(error) {
		document.getElementById('root').innerText = 'Cube Engine 登陆失败!';
	}
}
window.cube.setCubeConfig({
	"appid": window.loginInfo.appId,
	"licenseServer": window.licenseServer,
	"showCallMask": false
});

function start() {
	// 启动 Cube Engine
	window.cube.startup(function(error) {
		if(error) throw error
		// 加载即时消息模块
		window.cube.loadMessager();
		let service = window.cube.getUserService()
		// 设置账号监听器
		service.addListener(new AppAccountListener())
		// 设置消息监听器
		window.cube.getMessageService().addListener(new AppMessageListener());
		// 登陆
		let name = window.loginInfo.userId,
			displayName = window.loginInfo.userId,
			token = window.userToken;
		console.log(window.userToken)
		setTimeout(function() {
			service.login(name, token, displayName);
		}, 2000)

	})
}

function getToken() {
	var oAjax = null;
	var oStr = '';
	var postData = {};
	var data = null;
	//post提交的数据
	postData = "appId=" + window.loginInfo.appId + "&appKey=" + window.loginInfo.appKey + "&cube=" + window.loginInfo.userId
	try {　　
		oAjax = new XMLHttpRequest();
	} catch(e) {　　
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	};
	//post方式打开文件
	oAjax.open('post', 'https://dev.user.shixincube.cn/user/login', true);
	//post相比get方式提交多了个这个
	oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//post发送数据
	oAjax.send(postData);
	oAjax.onreadystatechange = function() {　　 //当状态为4的时候，执行以下操作
		if(oAjax.readyState == 4) {
			try {
				if(JSON.parse(oAjax.responseText).state.code == 200) {
					userToken = JSON.parse(oAjax.responseText).data.cubeToken
					// 启动 Cube Engine
					start();
				}
			} catch {
				document.querySelector('cube-message').style.display = 'none'
				alert('请填写正确的登录信息')
			}

		}

	}

}
if(window.loginInfo.appId) {
	getToken();
} else {
	document.querySelector('cube-message').style.display = 'none'
	alert('请填写登录信息')
}