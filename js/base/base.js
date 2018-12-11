//全局變量
var messagePeer = '10255986',
	userId = '10255984',
	userToken = '3537A9F75D09D6F13F2A34E14ECFF30E94C20E2BBFB2AFD3AF154E1EA4E2ACA55F3B3A951FF8DABAE57FE5D494EB285977E9927670241DE2A1D65F85366B875C20206F02AE207DBB3349C498969E26984EFBF455D5D2C184E3462C0B558F342B5326D595530DC75739CE86798908061897392E8E84F09D07',
	appid = '9c2ed36ae5d34131b3768ea432da6cea005',
	licenseServer = 'https://dev.license.shixincube.cn/auth/license/get';


class AppAccountListener {
	onLogined(session) {
		queryHistory();
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
	"appid": window.appid,
	"licenseServer": window.licenseServer,
	"showCallMask": false
});
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
	let name = window.userId,
		displayName = window.userId,
		token = userToken;
	service.login(name, token, displayName);
})