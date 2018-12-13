class AppCallListener {
    onCall(direction, session, video) { 
        console.log('发起新呼叫或者收到呼叫!')
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
    }

    onCallFailed(session, error) {
        console.log('通话处理失败!')
    }
}
