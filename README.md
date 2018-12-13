魔方实时通信/协作引擎(Web SDK)是一个全能力的实时云端协作引擎

[魔方实时通信，请点击这个](https://www.shixincube.com/)

这个SDK可以是实现的功能有很多，目前我就先写一个聊天的组件，后续组件慢慢来~ ~ ~

[项目的源代码在这里](https://github.com/shellyes/cube-message.git)
项目结构如下：


![](https://user-gold-cdn.xitu.io/2018/12/12/167a155519fa1673?w=1186&h=824&f=png&s=147975)

直接打开浏览器访问index.html页面，效果图如下：


![](https://user-gold-cdn.xitu.io/2018/12/12/167a05ee72b1d217?w=853&h=928&f=png&s=42168)

index.html:
```
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/reset.css" />
		<link rel="stylesheet" type="text/css" href="css/grid.css" />
		<link rel="stylesheet" type="text/css" href="css/message.css" />
	</head>

	<body>
		<div id="root">登录中。。。</div>
		<!--sendImg 发送图片按钮 sendFile 发送文件按钮-->
		<cube-message class="app-drawer" sendImg sendFile sendAudio></cube-message>
		
	</body>
	<script type="text/javascript">
		//必填登录信息
		var loginInfo = {
			'messagePeer': '10255986', //接收方的userId
			'userId': '10255984', //登录用户的userId
			'appId': '9c2ed36ae5d34131b3768ea432da6cea005',
			'appKey': '5df6d5495fb74b35ad157c94977527ff005',
		};
	</script>
	<!-- 引擎js -->
	<script type="text/javascript" src="js/lib/Genie-min.js"></script>
	<script type="text/javascript" src="js/lib/cube-core.js"></script>
	<script type="text/javascript" src="js/lib/cube-message.js"></script>
	<script type="text/javascript" src="js/lib/cube-signaling.js"></script>
	<!-- 自定义元素 -->
	<script type="text/javascript" src="js/component/Component.js"></script>
	<script type="text/javascript" src="js/component/CubeMessage.js"></script>
	<script type="text/javascript" src="js/base/message.js"></script>
	<!--<script type="text/javascript" src="js/base/signaling.js"></script>-->
	
	<script type="text/javascript" src="js/base/base.js"></script>

</html>
```

在启动之前，你只需要引入需要的各个js文件。

lib/Genie-min.js 为引擎依赖库

lib/cube-core.js 引擎核心库

lib/cube-message.js 即时消息库

base/base.js 用户登录的相关信息配置（loginInfo里面的信息去[时信魔方官网注册获取](https://www.shixincube.com/)）

base/message.js 定义一个 AppMessageListener 来监听消息的收取、发送、文件上传、消息撤回等各种事件

component/CubeMessage.js 自定义元素的js

在html引入我们所需要的js，使用`<cube-message class="app-drawer" sendImg sendFile></cube-message>`聊天界面就搭建好了。

你可以根据需求是否需要发送图片，文件等消息类型

在cube-message标签上添加 **sendImg**属性就可以发送图片

在cube-message标签上添加 **sendFile**属性就可以发送文件




