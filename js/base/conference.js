//定义会议监听器
class AppConferenceListener {
  onConferenceCreated(conference, from) {
    console.log('会议创建成功')
  }

  onConferenceDestroyed(conference, from) {
    console.log('会议销毁成功')
  }

  onConferenceInvited(conference, from, invites) {
    console.log('收到会议邀请')
  }

  onConferenceRejectInvited(conference, from, rejectMember) {
    console.log('会议邀请已拒绝')
  }

  onConferenceAcceptInvited(conference, from, joinedMember) {
    console.log('会议邀请已同意')
  }

  onVideoEnabled(conference, videoEnabled) {
    console.log('会议视频开启/关闭')
  }

  onAudioEnabled(conference, audioEnabled) {
    console.log('会议音频开启/关闭')
  }

  onConferenceUpdated(conference) {
    console.log('会议发生了改变')
  }

  onConferenceQuited(conference, quitMember){
    console.log('有人退出了会议');
  }

  onConferenceFailed(conference, error){
    console.log('会议发生了错误');
  }

  onConferenceCreatedOther(conference, from){
    console.log('同账号其他端创建了会议');
  }

  onConferenceDestroyedOther(conference, from){
    console.log('同账号其他端销毁了会议');
  }

  onConferenceInvitedOther(conference, from, invites){
    console.log('同账号其他端发起了邀请');
  }

  onConferenceRejectInvitedOther(conference, from, rejectMember){
    console.log('同账号其他端拒绝了邀请');
  }

  onConferenceAcceptInvitedOther(conference, from, joinedMember){
    console.log('同账号其他端同意了邀请');
  }

  onConferenceJoinedOther(conference, joinedMember){
    console.log('同账号其他端加入了会议');
  }

  onConferenceQuitedOther(conference, quitMember){
    console.log('同账号其他端退出了会议');
  }
}
