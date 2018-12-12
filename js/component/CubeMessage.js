class CubeMessage extends Component {
	constructor(props) {
		super(props);
		this.data = this.props;
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
			<div class="photo ${imgActive}" sp-click="sendImageMessage"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAgdJREFUOBGtlDFoFEEUhv+3O3vR5ohCBO0sFQUJBMEoJHB7SYSgjYcigoUokYhFFC2v0SpYeLcRQRIIgiGCYg4S5GxsRbEQLGwEEUQCFmoM7MzN8+2FDbvrgRc20+y8nf99896bmQds8yC/ru+AcYPBhTxsAoUgTKsI5uxUe19eoh95gCOPeLddN99QqoWcB5T0jVhO8sd2zFUSUn7Ah9joJRA1mpPe9eRat/NUhGRb/ZL/fjCPdwvI6lIRFvvchZ+rImH3XVbYrZ0CPq3I0QPz/3P2Az6iHNDKBL3PalMpZxc72afnuBesl3TLNMZmuS+rSUWYXexk/17TgVzi5w7hl/5j5pn5JBFtXr1/IizXw6OlQB/vBCvVTUVc+3v3qNvHDqoqAUW/bqaS2hRwtKaHmKlBFovyJG/J7uKzMfwa75PTvy/WBan1enWYDHvqHBFujgbhQKzbBEawFrDoApUepQYkh1Oy+7Oxx1xsi8nMivNM81rhbez86gp9YaIJY/Ek1lH0XBRoOILBxZnmVe915HD5IXufw9Y9wI6QQy+YcUJSHZToRJoeUooZgt0lmrNtoBR5NQlLysuBOW+tvVsgz1+epE/JtXh+cY53fF3Tb6TRHN4AujQURxaLtvotBXwAVn+U06fQKagPWwVk9W4PvkcsKR+moz4mtczVYIXRbrDZjXLbfwGglcZiaeb+fAAAAABJRU5ErkJggg==" alt="图片" titl="图片" /></div>
			<div class="file ${fileActive}" sp-click="sendFileMessage"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAPBJREFUOBFjYKAyYHSd8ruV4T9DyX+G/2yoZjN+Z2L8X7Arh20WTNxt8q9cBgZGYRgfnf7HwLKWBWQYEyeL5M4UxnfICjym/1f48+f3HqAh7Lty2SYjy+Flu0z+9R+XApChrpN/P3Od8icQlxp0cUaQgXty2RjRJWB818m/TP4zMO5mYPgvABPDRjMyMP5iYGToYcEmiSy2O5ftDJAviCyGje0+57/Qv+9/njNhkyRHDBQHoIilmoEwR4waCAsJ8unRMCQ/7GA6qR+GoEwNyocwG8ilQWaAzGIBlRCgTA0sddAKWNKMBpoBLm1I00WEagCzaUuZCVMUFAAAAABJRU5ErkJggg==" alt="文件" title="文件"/></div>
		</div>
			<div class="message-send">
				<textarea name="" rows="" placeholder="请输入内容..."  cols=""></textarea>
				<div class="send-btn" sp-click='onSendMessage'>发送</div>
			</div>
		</div>`;

		return html;
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
	};
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

		this.toBottom();
	};
	//发送图片消息
	sendImageMessage() {
		let image = new CubeImageMessage(window.loginInfo.messagePeer);

		image.chooseFile((file) => {
			window.cube.getMessageService().sendMessage(window.loginInfo.messagePeer + '', image);
		});

	};
	//发送文件消息
	sendFileMessage() {
		let message = new CubeFileMessage(window.loginInfo.messagePeer);
		message.chooseFile((file) => {
			let fileName = message.file.name;
			window.cube.getMessageService().sendMessage(window.loginInfo.messagePeer + '', message);
		});
	};
	onLoad() {
		var _this = this;
		//回车事件
		document.onkeydown = function(event) {
			var e = event || window.event;
			if(e && e.keyCode == 13) { //回车键的键值为13
				_this.onSendMessage(); //调用登录按钮的登录事件
				document.querySelector('.message-send textarea').value = '';
			}
		};
	};

}

CubeMessage.Register();