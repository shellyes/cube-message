//全局变量
var conferenceNotify = {}
class AppCallListener {
	onCall(direction, session, video) {
		console.log('发起新呼叫或者收到呼叫!')
		if(direction == 'outgoing') {
			return false;
		}
		document.querySelector('.cp-message-bottom-fixed').className = 'cp-message-bottom-fixed active'
		let inviteType = video ? 'user-video-call' : 'user-voice-call';
		conferenceNotify = {
			id: session.callPeer.name,
			name: session.callPeer.name,
			inviteType: inviteType,
			inviteList: []
		}
	}

	onNewCall(direction, session, video) {
		console.log('正在发起呼叫或收到呼叫时被呼叫!')
	}

	onInProgress(session) {
		console.log('正在接通!')
	}

	onCallRinging(session) {
		console.log('正在振铃!')
	}

	onCallConnected(session) {
		console.log('通话已连接!')
	}

	onCallEnded(session, action) {
		console.log('通话已结束!')
		document.querySelector('.cp-message-bottom-fixed').className = 'cp-message-bottom-fixed'
		document.querySelector('.hidden-all').className = 'hidden-all';
		document.querySelector('.cp-during-voice-call').className = 'cp-during-voice-call';
		document.querySelector('.hidden-all').className = 'hidden-all';
		document.querySelector('.cp-during-video-call').className = 'cp-during-video-call';
	}

	onCallFailed(session, error) {
		console.log('通话处理失败!')
	}
}