class CubeMessage extends HTMLElement {
	constructor(props) {
		super(props);
		this.data = this.props;
		console.log('this.data', this.data)
	}

	// A getter/setter for a disabled property.
	get sendImg() {
		return this.hasAttribute('sendImg');
	}

	set sendImg(val) {
		// Reflect the value of the disabled property as an HTML attribute.
		if(val) {
			this.setAttribute('sendImg', '');
		} else {
			this.removeAttribute('sendImg');
		}
	}
	// A getter/setter for a disabled property.
	get sendFile() {
		return this.hasAttribute('sendFile');
	}

	set sendFile(val) {
		// Reflect the value of the disabled property as an HTML attribute.
		if(val) {
			this.setAttribute('sendFile', '');
		} else {
			this.removeAttribute('sendFile');
		}
	}
	static get observedAttributes() {
		return ['sendImg', 'open'];
	}
	render() {
		let imgActive = '',
			fileActive = '';
		this.sendImg ? imgActive = 'active' : imgActive = '';
		this.sendFile ? fileActive = 'active' : fileActive = '';

		let html = `<div class="message-content mzub mzub-ver">
				<ul class="message-show mzub-f1">
				</ul>
			<div class="message-type mzub mzub-ac">
			<div class="photo ${imgActive}" onclick="sendImageMessage()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAgdJREFUOBGtlDFoFEEUhv+3O3vR5ohCBO0sFQUJBMEoJHB7SYSgjYcigoUokYhFFC2v0SpYeLcRQRIIgiGCYg4S5GxsRbEQLGwEEUQCFmoM7MzN8+2FDbvrgRc20+y8nf99896bmQds8yC/ru+AcYPBhTxsAoUgTKsI5uxUe19eoh95gCOPeLddN99QqoWcB5T0jVhO8sd2zFUSUn7Ah9joJRA1mpPe9eRat/NUhGRb/ZL/fjCPdwvI6lIRFvvchZ+rImH3XVbYrZ0CPq3I0QPz/3P2Az6iHNDKBL3PalMpZxc72afnuBesl3TLNMZmuS+rSUWYXexk/17TgVzi5w7hl/5j5pn5JBFtXr1/IizXw6OlQB/vBCvVTUVc+3v3qNvHDqoqAUW/bqaS2hRwtKaHmKlBFovyJG/J7uKzMfwa75PTvy/WBan1enWYDHvqHBFujgbhQKzbBEawFrDoApUepQYkh1Oy+7Oxx1xsi8nMivNM81rhbez86gp9YaIJY/Ek1lH0XBRoOILBxZnmVe915HD5IXufw9Y9wI6QQy+YcUJSHZToRJoeUooZgt0lmrNtoBR5NQlLysuBOW+tvVsgz1+epE/JtXh+cY53fF3Tb6TRHN4AujQURxaLtvotBXwAVn+U06fQKagPWwVk9W4PvkcsKR+moz4mtczVYIXRbrDZjXLbfwGglcZiaeb+fAAAAABJRU5ErkJggg==" alt="图片" titl="图片" /></div>
			<div class="file ${fileActive}" onclick="sendFileMessage()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAPBJREFUOBFjYKAyYHSd8ruV4T9DyX+G/2yoZjN+Z2L8X7Arh20WTNxt8q9cBgZGYRgfnf7HwLKWBWQYEyeL5M4UxnfICjym/1f48+f3HqAh7Lty2SYjy+Flu0z+9R+XApChrpN/P3Od8icQlxp0cUaQgXty2RjRJWB818m/TP4zMO5mYPgvABPDRjMyMP5iYGToYcEmiSy2O5ftDJAviCyGje0+57/Qv+9/njNhkyRHDBQHoIilmoEwR4waCAsJ8unRMCQ/7GA6qR+GoEwNyocwG8ilQWaAzGIBlRCgTA0sddAKWNKMBpoBLm1I00WEagCzaUuZCVMUFAAAAABJRU5ErkJggg==" alt="文件" title="文件"/></div>
		</div>
			<div class="message-send">
				<textarea name="" rows="" placeholder="请输入内容..."  cols=""></textarea>
				<div class="send-btn" >发送</div>
			</div>
		</div>`;

		return html
	}

	//发送消息
	onSendMessage() {
		var messageShow = document.querySelector('.message-show'),
			message = this.fontTrim(document.querySelector('.message-send textarea').value);
		if(message.length <= 0) {
			document.querySelector('.message-send textarea').value = '';
			return
		};
		this.messageReceived(message, 'text')
		window.cube.getMessageService().sendMessage('10255986', message);
		document.querySelector('.message-send textarea').value = '';
		this.toBottom();
	};
	//滚动到底部
	toBottom() {
		setTimeout(() => {
			let cell = document.getElementsByClassName('message-show')[0];
			cell.scrollTop = cell.scrollHeight;
		}, 100)
	};
	//去掉两边空格
	fontTrim(str) { //去掉两边空格
		return str.replace(/(^\s*)|(\s*$)/g, "");
	}
	//接收消息填充页面
	messageReceived(message, type) {
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

		this.toBottom();
	};
	connectedCallback() {
		var _this = this;
		let html = _this.render();
		this.innerHTML = html;
		let sendBtn = document.querySelector('.send-btn');
		sendBtn.addEventListener('click', function() {
			_this.onSendMessage();
		})
		//回车事件
		document.onkeydown = function(event) {
			var e = event || window.event;
			if(e && e.keyCode == 13) { //回车键的键值为13
				_this.onSendMessage(); //调用登录按钮的登录事件
			}
		};
	}
}

customElements.define('cube-message', CubeMessage);

//
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
//document.onkeydown = function(event) {
//	var e = event || window.event;
//	if(e && e.keyCode == 13) { //回车键的键值为13
//		onSendMessage(); //调用登录按钮的登录事件
//	}
//};
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