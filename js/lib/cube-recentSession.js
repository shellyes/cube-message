!function(e){function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=146)}({146:function(e,n,t){"use strict";var s=t(90),o=t(57);!function(e){e.CubeRecentSessionServiceWorker=s.RecentSessionServiceWorker,e.CubeRecentSession=o.RecentSession}(window)},147:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}();n.RecentSessionListener=function(e){function n(){return s(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),r(n,[{key:"onRecentSessionAdded",value:function(e){}},{key:"onRecentSessionDeleted",value:function(e){}},{key:"onRecentSessionChanged",value:function(e){}}]),n}(CubeListener)},148:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}();n.RecentSessionService=function(e){function n(){return s(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),r(n,[{key:"queryRecentSessions",value:function(e){}},{key:"addRecentSession",value:function(e){}},{key:"deleteRecentSession",value:function(e){}},{key:"setRecentSessionTop",value:function(e,n){}},{key:"getAllUnreadCount",value:function(){}},{key:"clearUnreadCount",value:function(e,n){}}]),n}(CubeService)},149:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.DBRecentSessionService=void 0;var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}(),i=t(150);n.DBRecentSessionService=function(){function e(n){s(this,e),this.engine=n,this.dbm=null}return o(e,[{key:"startup",value:function(){this.dbm=new CubeDBManager("CubeRecentDataBase_"+this.engine.accName),console.log("链接最近会话数据库"),this.dbm.loadEntity(i.CubeDBRecentSession),this.dbm.connect(function(){})}},{key:"shutdown",value:function(){this.dbm&&this.dbm.disconnect(function(){}),this.dbm=null}},{key:"storageRecent",value:function(e){var n=this;if(!this.dbm)return void setTimeout(function(){n.storageRecent(e)},500);var t=new i.CubeDBRecentSession(e);this.dbm.setEntity(t,function(e){})}},{key:"queryRecentById",value:function(e,n){var t=new i.CubeDBRecentSession({sessionId:e});e=e instanceof Array?e:[e],this.dbm.getEntitysByColumns(t,"id",e,function(e,t){e?n(e):(t=t.filter(function(e){return null!=e}),t&&t.length>0?n(!1,t):n(!1,null))})}},{key:"queryAllRecent",value:function(e){var n=new i.CubeDBRecentSession;this.dbm.getAllEntity(n,function(n,t){n?e(n):t&&t.length>0?e(!1,t):e(!1,null)})}}]),e}()},150:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});n.CubeDBRecentSession=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e.sessionId,"CubeDBRecentSession"));return t.sessionId=e.sessionId,t.sessionType=e.sessionType,t.displayName=e.displayName,t.content=e.content,t.messageType=e.messageType,t.messageSN=e.messageSN,t.messageJson=e.messageJson,t.messageStatus=e.messageStatus,t.unreadCount=e.unreadCount,t.time=e.time,t.topTime=e.topTime,t.extension=e.extension,t}return i(n,e),n}(CubeDBEntity)},57:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.RecentSession=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.sessionId=n.sessionId,this.sessionType=n.sessionType,this.displayName=n.displayName,this.content=n.content,this.messageType=n.messageType,this.messageSN=n.messageSN,this.messageJson=n.messageJson,this.messageStatus=n.messageStatus,this.unreadCount=n.unreadCount,this.time=n.time,this.topTime=n.topTime,this.extension=n.extension}},90:function(e,n,t){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.RecentSessionServiceWorker=void 0;var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}(),u=t(148),a=t(147),c=t(149),l=t(57);n.RecentSessionServiceWorker=function(e){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];s(this,n);var i=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,a.RecentSessionListener,CELLET.RecentSession));return i.dbService=new c.DBRecentSessionService(e),i.skipMessages=t,i}return i(n,e),r(n,[{key:"setSkipMessages",value:function(e){return e instanceof Array&&(this.skipMessages=e,!0)}},{key:"queryRecentSessions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.dbService.queryAllRecent(function(n,t){e(n,t)})}},{key:"addRecentSession",value:function(e){this.dbService.storageRecent(e),this.delegate.onRecentSessionAdded(e)}},{key:"updateRecentSession",value:function(e){this.dbService.storageRecent(e),this.delegate.onRecentSessionChanged(e)}},{key:"_saveRecents",value:function(e){var n=this,t=this._messagesToRecentSession(e),s=void 0;for(var o in t)!function(e){s=0;var o=t[e];n.dbService.queryRecentById(e,function(s,i){null!=i&&(i=i[0],o=i.time>t[e].time?i:t[e],o.unreadCount=i.unreadCount+t[e].unreadCount),n.dbService.storageRecent(o)})}(o)}},{key:"_messagesToRecentSession",value:function(e){var n={},t=void 0,s=0,o=!0,i=!1,r=void 0;try{for(var u,a=e[Symbol.iterator]();!(o=(u=a.next()).done);o=!0){var c=u.value;if(t=this._getMessageRecent(c),s=n[t.name]?n[t.name].unreadCount:0,this._messageIsRead(c)||s++,n[t.name]){if(this._isSkip(c))continue;n[t.name].unreadCount=s,n[t.name]=this._updateRecentByMessage(c,n[t.name])}else n[t.name]=new l.RecentSession({sessionId:t.name,sessionType:t.sessionType,displayName:t.displayName,content:this._getMessageContent(c),messageType:c.type,messageSN:c.sn,messageJson:c.toJSON(),messageStatus:null,unreadCount:0,time:c.sendTime,topTime:0}),this._isSkip(c)&&(n[t.name].content="",n[t.name].unreadCount=0)}}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}return console.log(n),n}},{key:"_updateRecent",value:function(e){var n=this,t=this._getMessageRecent(e);this.dbService.queryRecentById(t.name,function(s,o){if(null!=o){if(o=o[0],e.type==CubeMessageType.Receipt)o.unreadCount=0;else{if(n._isSkip(e))return;o=n._updateRecentByMessage(e,o),n._messageIsRead(e)||(o.unreadCount?o.unreadCount++:o.unreadCount=1)}n.delegate.onRecentSessionChanged(o)}else{var i=n._messageIsRead(e)?0:1;o=new l.RecentSession({sessionId:t.name,sessionType:t.sessionType,displayName:t.displayName||t.name,content:n._getMessageContent(e),messageType:e.type,messageSN:e.sn,messageJson:e.toJSON(),messageStatus:null,unreadCount:i,time:e.sendTime,topTime:0}),n._isSkip(e)&&(o.content="",o.unreadCount=0),n.delegate.onRecentSessionAdded(o)}n.dbService.storageRecent(o)})}},{key:"_isSkip",value:function(e){return this.skipMessages.includes(e.type)}},{key:"_updateRecentByMessage",value:function(e,n){var t=new l.RecentSession(n);return e.sendTime>t.time&&(t.content=this._getMessageContent(e),t.messageType=e.type,t.messageSN=e.sn,t.messageJson=e.toJSON(),t.time=e.sendTime),t}},{key:"_getMessageRecent",value:function(e){var n=e.group||e.receiver;return n=n.name==this.engine.session.name?e.sender:n,n.sessionType="C2C",null!=n.name&&n.name.includes("g")&&(n.sessionType="GROUP"),n}},{key:"_getMessageContent",value:function(e){var n={};return n[CubeMessageType.Text]=e.content,n[CubeMessageType.Custom]="[自定义消息]",n[CubeMessageType.File]="[文件]",n[CubeMessageType.Image]="[图片]",n[CubeMessageType.Voice]="[短语音]",n[CubeMessageType.Video]="[短视频]",n[CubeMessageType.Whiteboard]="[白板]",n[CubeMessageType.WhiteboardClip]="[白板剪辑]",n[CubeMessageType.Card]="[卡片]",n[CubeMessageType.History]="[历史]",n[CubeMessageType.Location]="[位置]",n[CubeMessageType.RichContent]="[富文本]",n[CubeMessageType.Reply]="[消息回复]",n[CubeMessageType.Receipt]="[消息回执]",n[CubeMessageType.UnKnown]="[未知]",n[e.type]}},{key:"_messageIsRead",value:function(e){return e.sender.name==this.engine.session.name||e.receipted}},{key:"deleteRecentSession",value:function(e){}},{key:"setRecentSessionTop",value:function(e,n){}},{key:"getAllUnreadCount",value:function(){}},{key:"clearUnreadCount",value:function(e,n){}},{key:"onRegisterStateChanged",value:function(e){this.engine.registered&&this.dbService.startup()}}]),n}(u.RecentSessionService)}});
//# sourceMappingURL=cube-recentSession.js.map