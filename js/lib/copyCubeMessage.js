//滚动到底部
function toBottom() {
	setTimeout(() => {
		let cell = document.getElementsByClassName('message-show')[0];
		cell.scrollTop = cell.scrollHeight;
	}, 100)
}

//去掉两边空格
function fontTrim(str) { //去掉两边空格
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

//发送消息

function onSendMessage() {
	var messageShow = document.querySelector('.message-show'),
		message = fontTrim(document.querySelector('.message-send textarea').value);
	console.log("messagem  = " + message.length)
	if(message.length <= 0) {
		document.querySelector('.message-send textarea').value = '';
		return
	};
	messageReceived(message, 'text')
	window.cube.getMessageService().sendMessage('10255986', message);
	document.querySelector('.message-send textarea').value = '';
	toBottom();
};
//回车事件
document.onkeydown = function(event) {
	var e = event || window.event;
	if(e && e.keyCode == 13) { //回车键的键值为13
		onSendMessage(); //调用登录按钮的登录事件
	}
};
//发送img

function sendImageMessage() {
	let image = new CubeImageMessage(window.messagePeer);

	image.chooseFile((file) => {
		window.cube.getMessageService().sendMessage(window.messagePeer + '', image);
	});
};

function sendFileMessage() {
	let message = new CubeFileMessage(window.messagePeer);
	message.chooseFile((file) => {
		let fileName = message.file.name;
		window.cube.getMessageService().sendMessage(window.messagePeer + '', message);
	});
};
//获取历史消息
function queryHistory() {
	console.log('获取历史消息')
	let cubeId = '10255986',
		offset = 1,
		cubeCallback = function(messages) {
			messages.forEach((message) => {
				console.log(message)
				messageReceived(message)
			})
		};
	window.cube.getMessageService().queryHistoryMessage({
		cubeId,
		offset,
		cubeCallback
	})
};

//接收消息填充页面
function messageReceived(message, type) {
	if(!message.content && message.type == 'text') return false;
	var messageShow = document.querySelector('.message-show'),
		oLi = document.createElement('li'),
		oP = document.createElement('p'),
		oDiv = document.createElement('div'),
		oImg = document.createElement('img'),
		oFile = document.createElement('a');
	oP.className = 'name';
	oDiv.className = 'content';

	oLi.appendChild(oP);
	oLi.appendChild(oDiv);
	if(type) {
		oP.innerHTML = window.userId;
		if(type == 'text') {
			oDiv.innerHTML = message
			messageShow.appendChild(oLi);
		}
		if(type == 'image') {
			oImg.src = message.file.url
			oDiv.appendChild(oImg)
			messageShow.appendChild(oLi);
		}
		if(type == 'file') {
			oFile.href = message.file.url
			oFile.innerHTML = '文件'
			oFile.target = "_blank"
			oDiv.appendChild(oFile)
			messageShow.appendChild(oLi);
		}
	} else {
		oP.innerHTML = message.sender.name;
		if(message.type == 'text') {
			oDiv.innerHTML = message.content
			messageShow.appendChild(oLi);
		}
		if(message.type == 'image') {
			oImg.src = message.file.url
			oDiv.appendChild(oImg)
			messageShow.appendChild(oLi);
		}
		if(message.type == 'file') {
			oFile.href = message.file.url
			oFile.innerHTML = '文件'
			oFile.target = "_blank"
			oDiv.appendChild(oFile)
			messageShow.appendChild(oLi);
		}
	}

	toBottom();
};
class AppMessageListener {
	onMessageSent(message) {
		console.log('消息发送成功')
		console.log(message)
		if(message.type == 'image') {
			messageReceived(message, 'image')
		}
		if(message.type == 'file') {
			messageReceived(message, 'file')
		}

	}

	onMessageUploading(message, progress, total) {
		console.log('文件消息进度变更')
	}

	onMessageUploadCompleted(message) {
		console.log('文件消息文件上传完成')
	}

	onMessageRecalled(message) {
		console.log('消息撤回成功')
	}

	onMessageReceived(message) {
		messageReceived(message);
		console.log('收到消息')
		console.log(message)
	}

	onMessageCanceled(message) {
		console.log('文件消息被取消')
	}

	onMessagePaused(message) {
		console.log('文件消息暂停')
	}

	onMessageResumed(message) {
		console.log('文件消息恢复')
	}

	onMessageSyncBegin() {
		console.log('开始同步消息')
	}

	onMessagesSyncing(messageMap) {
		console.log('正在同步消息')
	}

	onMessageSyncEnd() {
		console.log('结束同步消息')
	}

	onMessageFailed(message, error) {
		console.log('消息处理发生错误')
	}
}