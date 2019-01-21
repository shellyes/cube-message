class CubeMessage extends Component {
	constructor(props) {
		super(props);
		this.data = this.props;
		var isClickAudio = false;
		var curVoiceMessage = '';
		var messageService = window.cube.getMessageService();
		var call_type_name = '语音通话';
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
	// A getter/setter for a disabled property.
	get sendAudio() {
		return this.hasAttribute('sendAudio');
	}

	set sendAudio(val) {
		// Reflect the value of the disabled property as an HTML attribute.
		if(val) {
			this.setAttribute('sendAudio', '');
		} else {
			this.removeAttribute('sendAudio');
		}
	}
	get sendVoice() {
		return this.hasAttribute('sendVoice');
	}

	set sendVoice(val) {
		// Reflect the value of the disabled property as an HTML attribute.
		if(val) {
			this.setAttribute('sendVoice', '');
		} else {
			this.removeAttribute('sendVoice');
		}
	}
	get sendVideo() {
		return this.hasAttribute('sendVideo');
	}

	set sendVideo(val) {
		// Reflect the value of the disabled property as an HTML attribute.
		if(val) {
			this.setAttribute('sendVideo', '');
		} else {
			this.removeAttribute('sendVideo');
		}
	}
	static get observedAttributes() {
		return ['sendImg', 'sendFile', 'sendAudio', 'sendVoice', 'sendVideo'];
	}
	render() {
		let imgActive = '',
			fileActive = '',
			audioActive = '',
			voiceActive = '',
			videoActive = '';
		this.sendImg ? imgActive = 'active' : imgActive = '';
		this.sendFile ? fileActive = 'active' : fileActive = '';
		this.sendAudio ? audioActive = 'active' : audioActive = '';
		this.sendVoice ? voiceActive = 'active' : voiceActive = '';
		this.sendVideo ? videoActive = 'active' : videoActive = '';
		let html = `<div class="message-content mzub mzub-ver">
				<div class="message-show mzub-f1">
				</div>
			<div class="message-type mzub mzub-ac">
			<div class="photo ${imgActive}" sp-click="sendImageMessage"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAgdJREFUOBGtlDFoFEEUhv+3O3vR5ohCBO0sFQUJBMEoJHB7SYSgjYcigoUokYhFFC2v0SpYeLcRQRIIgiGCYg4S5GxsRbEQLGwEEUQCFmoM7MzN8+2FDbvrgRc20+y8nf99896bmQds8yC/ru+AcYPBhTxsAoUgTKsI5uxUe19eoh95gCOPeLddN99QqoWcB5T0jVhO8sd2zFUSUn7Ah9joJRA1mpPe9eRat/NUhGRb/ZL/fjCPdwvI6lIRFvvchZ+rImH3XVbYrZ0CPq3I0QPz/3P2Az6iHNDKBL3PalMpZxc72afnuBesl3TLNMZmuS+rSUWYXexk/17TgVzi5w7hl/5j5pn5JBFtXr1/IizXw6OlQB/vBCvVTUVc+3v3qNvHDqoqAUW/bqaS2hRwtKaHmKlBFovyJG/J7uKzMfwa75PTvy/WBan1enWYDHvqHBFujgbhQKzbBEawFrDoApUepQYkh1Oy+7Oxx1xsi8nMivNM81rhbez86gp9YaIJY/Ek1lH0XBRoOILBxZnmVe915HD5IXufw9Y9wI6QQy+YcUJSHZToRJoeUooZgt0lmrNtoBR5NQlLysuBOW+tvVsgz1+epE/JtXh+cY53fF3Tb6TRHN4AujQURxaLtvotBXwAVn+U06fQKagPWwVk9W4PvkcsKR+moz4mtczVYIXRbrDZjXLbfwGglcZiaeb+fAAAAABJRU5ErkJggg==" alt="图片" title="图片" /></div>
			<div class="file ${fileActive}" sp-click="sendFileMessage"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAPBJREFUOBFjYKAyYHSd8ruV4T9DyX+G/2yoZjN+Z2L8X7Arh20WTNxt8q9cBgZGYRgfnf7HwLKWBWQYEyeL5M4UxnfICjym/1f48+f3HqAh7Lty2SYjy+Flu0z+9R+XApChrpN/P3Od8icQlxp0cUaQgXty2RjRJWB818m/TP4zMO5mYPgvABPDRjMyMP5iYGToYcEmiSy2O5ftDJAviCyGje0+57/Qv+9/njNhkyRHDBQHoIilmoEwR4waCAsJ8unRMCQ/7GA6qR+GoEwNyocwG8ilQWaAzGIBlRCgTA0sddAKWNKMBpoBLm1I00WEagCzaUuZCVMUFAAAAABJRU5ErkJggg==" alt="文件" title="文件"/></div>
			<div class="audio ${audioActive}"><img sp-click="sendAudioMessage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAoZJREFUOBG1VEtoFEEQrerpWWMWf6AeXBU/EEEh+Alogp8c8iMo5KIg6CGH+Ek8eBbRIIKIQQ/ZJCQe/FwSMIKIITEqOUhuxpPgh4gh6EEwWcWs7u70dFl9aJiZnY14cC6vu+rV6+qq6kFY5DvcR6m89i8C6X0EuAEJPgLCy2RSXn3Uit/jQkWc0dgaelVLzvcmWeyNC27Lsw65Blx5gl3zC1lvqq7H2x8Xi3HGhtu0Wee9Cem4tWNncSbKaUzTbk3ecMJx94y0Yyboj82QcqoLSFyIEzPBT8/haxI44Gl1KShm1rGCbK92tzoPo+TgXgo5pIkOBW1mXSRYO0ESgOZGmzEfJQf3JnsEXE9EobIVCVZ8ACTE38HgUmsC0FFfkWCU8K/7/yvYmFYnTUZclFBdSmWJXMQH3Aczs5YTytAHuplZBZprU1RsG2Cxrp9WAFF2YABSpP0z1h4S5Kf1fmEOKhlnm/qh0pLiUHj+AUCccjx/F19o2nJCgoQ0rHz/NA/tda1UbydRyG+DjvRTOZG+gUBdGugUCjFifaGALa7bQ6BrHKAMAb2bTKsn9d20zpINNqepIldQL/jQIUSxjU3ueLsctZyi4jekC3uJYBAdOMrPbycP7hUmzzBOI+J2HvrVAsR5EJTVPtzBMnlwvA0/lRQ0jqa0V80Nug+EgwlH3tLLwXd+wrKlGn7kE5D8lfcvI+kaEu7x5x341ooZLMrQOk0Xhac6uePH+PrfmDrPXV3LEUmelnuppLx2txVzlm+xpKAlGGzqo03KV6/Kl8gdj9vwa9AXXYeaEnXa/UYBX4BA/U3M8BfNsL67UMU/ijEmCb76Sp5P7j54bpmsGm3Dz/bAIP4BKdv4fB1PPSMAAAAASUVORK5CYII=" alt="文件" title="语音消息"/>
			<div class="audioInfo">
					<p>正在录音...</p>
					<div class="mzub">
						<div class="mzub mzub-pac mzub-f1 audio-item" sp-click='stopRecord'>取消</div>
						<div class="mzub mzub-pac mzub-f1 audio-item" sp-click='sendRecord'>发送</div>
						
					</div>
				</div>
			</div>
			<div class="voice ${voiceActive}" sp-click="makeCallVoice"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAoBJREFUOBGtVEtoFEEQrertiax/lOhFUATBQKIgOQTBQ2Rn1yhexEQkKEFDyPck6EGUoIKKF2VnkixiIJiDH4hBIpqsgkRzEUUFEUT8XUQSf0hMYLtnypoxvYwEzC6kL6/6ddXrmqrqAZjnhUavppdK1ZSqR4IGQDySbbcemLNiUATOCUcN6in9AhHX8bYHgM4TUf4y5opbLPir9gaVmCjbUSNJV+8z+2IwzBCJvvyegBUmUMbkMfL9000ZsgxXKIaChPjaA11mgu624HO2n35QqslwhWIoCASPiaAqGiQt6wyX8UStS4uj/Fx2KBiTNOoD2MY50aV3aaUGBdDtHxJihi8YO4mE7eTeJrtpVRDETRmz07nmggUijmGGnYg+AvaBpw+HZ4QXua4HI34Fm39ryO5EstcHauTxiS9fHRtgZgGPzt6ClWYc84LZDvwsEAd+jutzN+vQi0nrkE+U3tFFm4oRzQsGQctK5UkCSqVcVT3cjC/5CbZ5vhpKpKnCiNqu3s81vrTTobWGi+Ks55XqUtt8j/pE3KocbsTvQcfBoytC0KlFZF2fBMUzile5JAcIYJS/5EJ4+YzqPxkG3HCr9YiEOOtNqyfc9fL7rfKOlLLKJ6yZJP2exfr5x3Fcrrc2IIiHvlLXOON7yW61PZrpLJs/rYHf+ETC1XvMYaqHNu/O0EKzDzAcOVcdTTi5Z8F+1icHpFkph7Z4oC6z27gQmNlaFhvqrEZtzg3ajnaQ/DcjHSXp/woGAUEGY65Xz3PVztev4Wfaz816xTX9yKPwKQ7wdVrpd0tAlt9qx29zCposAkxmaCPklA0CKrkhFeDDSgJcigKy2TarLuo7b/YfTEf/J6xjfwgAAAAASUVORK5CYII=" alt="图片" title="语音通话" /></div>
			<div class="video ${videoActive}" sp-click="makeCallVideo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAAAXNSR0IArs4c6QAAA0xJREFUWAntWF9IFEEYn29vVyIkMsIzIiLUoiLU14KePMV8roeoKyGSdJ+CKKKHpYegZ1ezHkI7I8meJIj2hHooqAf7A0FWSKARnA9xkZje7O3XN7ucp6XdXHZ7K+wHdzM395v5fr/vm5mdHcZCCyOwpgiA6N3ajw2OzQeQQQNDdNvWNOo/dAZg0wDKeatbfVBMd0WAXfLIGstFXnBAZDscxER7H1aJ37KmCqAbefquimobR47BT9nO/xMXMzOvEbFxgfE9NO4L2bHdDOQiXy7yHlmYE6WC4HGSVFAUWHJMX2HuFPLV4xqcGYjK2362VXXY3Eg3zIqh1kUGaG1Ac499/Hkvn/xh81Tasb+3mJmzQoAvGWi7ibWc250Kg1eWrg4Lx7LWYvJYzOTXCd9EOxWjPf4zMtxFmq5S2y1fMsAzfJQ2igsOOveI0GEZ8m03sImIW7S1WoI8MPgCitJxSNfqvP4YFaUvAhjAFs+p8LikvtiYrzgMaprNzBDP2uM0dWIU8zQocHF7pVqf7FYHDAAnj/ZpClGU4g7AZUr/+MFzkVGraykFr07Twwsm4jA9kjTCLpBwU9mgXnt8Br792cNr8WUNWLqWJHfiw5K653iF70rRBsgiNNETqKlXxjphagXcsiZfBCzzWOAHAt4d0yviBWCLf/uzBhbdFa4ooGQKo/KIwAnIU5OrhQLk4lQ6VJiB0sVWbuQwA3JxKh0qcBmgw1s7HZ07jCco9ZANjgBg826eEGvomuH2s3d8osW0Tx29j5G/5S8wAujw5j2BFTDoLPSBSNfS8XsgPcMnWnvt+GpCAiMgF2UilKyq1vZDRDlJQj7SKbUu6ziD6RR/H+uzT/wuJHAChBC6Hckmu9QhErKPLrvilJ1P9DJWj1knkU7Z0wIDAF9FGUgBgpgwV4iuJjZHtb10yDtNTZP0OrmN2HOScElgpFa6AJbThBDyP2gYmHizk21KMzb/tAPcRb8uBOSCZxju6yTxz1ugp1Ce5uq1dS/AnUK0omfoBqC6uYc/pBXv3lGurrlk/zSKkSOqmirGgyuAVrZB9y4mle20XZXHPMd3HnXCZDEEKOCeHTFxdxazB+jSpSzTiq57piy94mWOT1iGEfApAr8Axz8VugLPZg4AAAAASUVORK5CYII=" alt="图片" title="视频通话" /></div>
		</div>
		
			<div class="message-send">
				<textarea name="" rows="" placeholder="请输入内容..."  cols=""></textarea>
				<div class="send-btn" sp-click='onSendMessage'>发送</div>
			</div>
		</div>
		<div class="hidden-all"></div>
		<div class="cp-during-voice-call">
			<p>语音通话</p>
			<div class="voice-call-box">
				<p>正在进行语音通话<span>...</span></p>
			</div>
			<div class="quit-button">
				<button type="button" class="el-button el-button--danger" sp-click='quitCall'>
					<span>挂断</span>
				</button>
			</div>
		</div>
		<div class="cp-during-video-call">
		<video id="local_video" autoplay>
		</video>
		<video id="remote_video" autoplay>
		</video>
			<p>视频通话</p>
			<div class="voice-call-box">
				<p>正在进行视频通话<span>...</span></p>
			</div>
			<div class="quit-button">
				<button type="button" class="el-button el-button--danger" sp-click='quitCall'>
					<span>挂断</span>
				</button>
			</div>
		</div>
		<div class="cp-message-bottom-fixed">
			<div class="cp-mbf-header">
				<img src="https://dev.cubeware.shixincube.cn/static/img/user-face.jpg" onerror="this.src='https://dev.cubeware.shixincube.cn/static/img/user-face.jpg'">
				<div class="cp-mbf-header-right">
					<p>10255986</p>
					<p class='user-'>邀请您参加 一对一语音</p>
				</div>
			</div>
			<div class="cp-mbf-footer">
				<button type="button" class="el-button call-action-btn el-button--danger" sp-click='rejectInvite'>
					<span>拒绝</span>
				</button>
				<button type="button" class="el-button call-action-btn el-button--success mr20" sp-click='acceptInvite'>
					<span>接受</span>
				</button>
			</div>
			<video
			id="c_local_video"
			autoplay>
		</video>
		<video
			id="c_remote_video"
			autoplay
			class="conference-video"
		</video>
		<audio
			id="c_bell_audio"
			autoplay>
		</audio>
		<canvas
			id="c_local_canvas"
			autoplay>
		</canvas>
		</div>
		
		`;

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
			oLi = document.createElement('div'),
			oBox = document.createElement('div');
		oP = document.createElement('p'),
			oDiv = document.createElement('div'),
			oImg = document.createElement('img'),
			oFile = document.createElement('a');
		oP.className = 'name';
		oDiv.className = 'content';
		oBox.className = 'contentBox';
		oLi.className = 'container';
		oLi.appendChild(oBox);
		oBox.appendChild(oP);
		oBox.appendChild(oDiv);
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

	//发送语音消息彈窗
	sendAudioMessage() {
		console.log('123456')
		if(!this.isClickAudio) {
			this.isClickAudio = !this.isClickAudio
			document.querySelector('.audioInfo').classList.add('active')
		} else {
			this.isClickAudio = !this.isClickAudio
			document.querySelector('.audioInfo').classList.remove('active')
			this.stopRecord();
			return false;
		}
		this.curVoiceMessage = new CubeVoiceMessage(window.loginInfo.messagePeer);
		console.log(new CubeVoiceMessage(window.loginInfo.messagePeer))
		this.curVoiceMessage.startRecord((error) => {
			console.log('录制中');
			//			this.startCount();
			setTimeout(() => {
				if(this.curVoiceMessage) {
					this.sendRecord();
				}
			}, 60000 - 500)
		})
	};
	//取消发送语音消息
	stopRecord() {
		//		this.curVoiceMessage = new CubeVoiceMessage(window.loginInfo.messagePeer);
		console.log(this.curVoiceMessage)
		this.curVoiceMessage.stopRecord((error) => {
			console.log('取消发送')
			this.isClickAudio = !this.isClickAudio
			document.querySelector('.audioInfo').classList.remove('active')
			this.curVoiceMessage = null;
		})
	};
	//发送语音消息
	sendRecord() {
		this.curVoiceMessage.stopRecord(() => {
			this.isClickAudio = !this.isClickAudio
			document.querySelector('.audioInfo').classList.remove('active')
			window.cube.getMessageService().sendMessage(window.loginInfo.messagePeer + '', this.curVoiceMessage);
			setTimeout(() => {
				this.curVoiceMessage = null;
			}, 100);
		});
	};
	//展示语音弹窗
	showVoice() {
		document.querySelector('.cp-message-bottom-fixed').className = 'cp-message-bottom-fixed'
		document.querySelector('.hidden-all').className = 'hidden-all active';
		document.querySelector('.cp-during-voice-call').className = 'cp-during-voice-call active';
	};
	//展示视频弹窗
	showVideo() {
		document.querySelector('.cp-message-bottom-fixed').className = 'cp-message-bottom-fixed'
		document.querySelector('.hidden-all').className = 'hidden-all active';
		document.querySelector('.cp-during-video-call').className = 'cp-during-video-call active';
	};
	//隐藏语音弹窗
	hiddenVoice() {
		document.querySelector('.hidden-all').className = 'hidden-all';
		document.querySelector('.cp-during-voice-call').className = 'cp-during-voice-call';
	};
	//隐藏视频弹窗
	hiddenVideo() {
		document.querySelector('.hidden-all').className = 'hidden-all';
		document.querySelector('.cp-during-video-call').className = 'cp-during-video-call';
	};
	//发送一对一语音通话
	makeCallVoice() {
		console.log('发送一对一语音通话')
		this.showVoice();
		window.cube.getCallService().makeCall(window.loginInfo.messagePeer, false);
	};
	//发送一对一视频
	makeCallVideo() {
		console.log('发送一对一视频通话')
		this.showVideo();
		window.cube.getCallService().makeCall(window.loginInfo.messagePeer, true);
	};
	//挂断一对一通话
	quitCall() {
		console.log('挂断一对一语音通话')
		this.hiddenVideo();
		this.hiddenVoice();
		window.cube.getCallService().terminateCall();
	};
	//拒绝一对一通话
	rejectInvite() {
		document.querySelector('.cp-message-bottom-fixed').className = 'cp-message-bottom-fixed';
		window.cube.getCallService().terminateCall();
	};
	//接听通话
	acceptInvite() {
		if(window.conferenceNotify.inviteType == 'user-video-call') {
			window.cube.getCallService().answerCall(true);
			this.showVideo();
		}
		if(window.conferenceNotify.inviteType == 'user-voice-call') {
			window.cube.getCallService().answerCall(true);
			this.showVoice();
		}
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