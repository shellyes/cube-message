//滚动到底部
function toBottom() {
	setTimeout(() => {
		let cell = document.getElementsByClassName('message-show')[0];
		cell.scrollTop = cell.scrollHeight+100;
	}, 100)
}
//获取历史消息
function queryHistory() {
	let cubeId = window.loginInfo.messagePeer,
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
		oP.innerHTML = window.loginInfo.userId;
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
		queryHistory();
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