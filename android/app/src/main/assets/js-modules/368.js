__d(function(e,t,i,o){"use strict";var n,a,c=t(60),r=t(40).PushNotificationManager,l=t(22),s=new c(r),u=new Map,f="remoteNotificationReceived",d="remoteNotificationsRegistered",v="remoteNotificationRegistrationError",g="localNotificationReceived",N=(a=n=function(){function e(t){var i=this;babelHelpers.classCallCheck(this,e),this._data={},this._remoteNotificationCompleteCalllbackCalled=!1,this._isRemote=t.remote,this._isRemote&&(this._notificationId=t.notificationId),t.remote?Object.keys(t).forEach(function(e){var o=t[e];"aps"===e?(i._alert=o.alert,i._sound=o.sound,i._badgeCount=o.badge):i._data[e]=o}):(this._badgeCount=t.applicationIconBadgeNumber,this._sound=t.soundName,this._alert=t.alertBody,this._data=t.userInfo)}return babelHelpers.createClass(e,null,[{key:"presentLocalNotification",value:function(e){r.presentLocalNotification(e)}},{key:"scheduleLocalNotification",value:function(e){r.scheduleLocalNotification(e)}},{key:"cancelAllLocalNotifications",value:function(){r.cancelAllLocalNotifications()}},{key:"removeAllDeliveredNotifications",value:function(){r.removeAllDeliveredNotifications()}},{key:"getDeliveredNotifications",value:function(e){r.getDeliveredNotifications(e)}},{key:"removeDeliveredNotifications",value:function(e){r.removeDeliveredNotifications(e)}},{key:"setApplicationIconBadgeNumber",value:function(e){r.setApplicationIconBadgeNumber(e)}},{key:"getApplicationIconBadgeNumber",value:function(e){r.getApplicationIconBadgeNumber(e)}},{key:"cancelLocalNotifications",value:function(e){r.cancelLocalNotifications(e)}},{key:"getScheduledLocalNotifications",value:function(e){r.getScheduledLocalNotifications(e)}},{key:"addEventListener",value:function(t,i){l("notification"===t||"register"===t||"registrationError"===t||"localNotification"===t,"PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");var o;"notification"===t?o=s.addListener(f,function(t){i(new e(t))}):"localNotification"===t?o=s.addListener(g,function(t){i(new e(t))}):"register"===t?o=s.addListener(d,function(e){i(e.deviceToken)}):"registrationError"===t&&(o=s.addListener(v,function(e){i(e)})),u.set(t,o)}},{key:"removeEventListener",value:function(e,t){l("notification"===e||"register"===e||"registrationError"===e||"localNotification"===e,"PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events");var i=u.get(e);i&&(i.remove(),u.delete(e))}},{key:"requestPermissions",value:function(e){var t={};return t=e?{alert:!!e.alert,badge:!!e.badge,sound:!!e.sound}:{alert:!0,badge:!0,sound:!0},r.requestPermissions(t)}},{key:"abandonPermissions",value:function(){r.abandonPermissions()}},{key:"checkPermissions",value:function(e){l("function"==typeof e,"Must provide a valid callback"),r.checkPermissions(e)}},{key:"getInitialNotification",value:function(){return r.getInitialNotification().then(function(t){return t&&new e(t)})}}]),babelHelpers.createClass(e,[{key:"finish",value:function(e){this._isRemote&&this._notificationId&&!this._remoteNotificationCompleteCalllbackCalled&&(this._remoteNotificationCompleteCalllbackCalled=!0,r.onFinishRemoteNotification(this._notificationId,e))}},{key:"getMessage",value:function(){return this._alert}},{key:"getSound",value:function(){return this._sound}},{key:"getAlert",value:function(){return this._alert}},{key:"getBadgeCount",value:function(){return this._badgeCount}},{key:"getData",value:function(){return this._data}}]),e}(),n.FetchResult={NewData:"UIBackgroundFetchResultNewData",NoData:"UIBackgroundFetchResultNoData",ResultFailed:"UIBackgroundFetchResultFailed"},a);i.exports=N},368);