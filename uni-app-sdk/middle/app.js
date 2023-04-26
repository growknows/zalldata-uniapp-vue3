// 原生SDK提供的API,直接实现app对应的所有js的api，在这里再做一次bridge的api封装
let zallSDK = uni.requireNativePlugin('zallSDKdata-UniPlugin-App');

let sa = {
	// 提供扩展性
	instance: zallSDK,

	setPara: (para) => {
		if (typeof para !== 'object') {
			console.log('setPara 的参数必须是 object');
			return false;
		}
		var relation = {
			server_url: 'setServerUrl',
			show_log: 'enableLog',
			app_flush_network_policy: 'setFlushNetworkPolicy',
			app_flush_interval: 'setFlushInterval',
			app_flush_bulkSize: 'setFlushBulkSize',
			app_session_interval_time: 'setSessionIntervalTime',
			app_data_collect: 'enableDataCollect'
		};
		Object.keys(para).forEach(
			(key) => {
				if (key in relation && typeof zallSDK[relation[key]] === 'function') {
					if (key === 'app_data_collect') {
						if (para[key] === true) {
							zallSDK[relation[key]].call(zallSDK, para[key]);
						}
					} else {
						zallSDK[relation[key]].call(zallSDK, para[key]);
					}
				} else {
					console.log('setPara 在 App 中不支持设置' + key);
				}

			}
		);


	},

	// app专用的方法
	getAppFlushInterval: zallSDK.getFlushInterval.bind(zallSDK),
	getAppFlushBulkSize: zallSDK.getFlushBulkSize.bind(zallSDK),
	getAppSessionIntervalTime: zallSDK.getSessionIntervalTime.bind(zallSDK),
	trackAppInstall: zallSDK.trackAppInstall.bind(zallSDK),
	appFlush: zallSDK.flush.bind(zallSDK),

	register: zallSDK.registerSuperProperties.bind(zallSDK),
	unRegister: zallSDK.unregisterSuperProperty.bind(zallSDK),
	clearRegister: zallSDK.clearSuperProperties.bind(zallSDK),
	setProfile: zallSDK.profileSet.bind(zallSDK),
	setOnceProfile: zallSDK.profileSetOnce.bind(zallSDK),
	incrementProfile: zallSDK.profileIncrement.bind(zallSDK),
	appendProfile: zallSDK.profileAppend.bind(zallSDK),
	unsetProfile: zallSDK.profileUnset.bind(zallSDK),
	deleteProfile: zallSDK.profileDelete.bind(zallSDK),

	//
	clearTrackTimer: zallSDK.clearTrackTimer.bind(zallSDK),
	resumeTrackScreenOrientation: zallSDK.resumeTrackScreenOrientation.bind(zallSDK),
	stopTrackScreenOrientation: zallSDK.stopTrackScreenOrientation.bind(zallSDK),
	getScreenOrientation: zallSDK.getScreenOrientation.bind(zallSDK),
	getSuperProperties: zallSDK.getSuperProperties.bind(zallSDK),
	profileUnsetPushId: (pushKey = '') => {
		zallSDK.profileUnsetPushId.call(zallSDK, pushKey)
	},
	profilePushId: (pushKey = '', pushId = '') => {
		zallSDK.profilePushId.call(zallSDK, pushKey, pushId)
	},
	enableTrackScreenOrientation: (enable = false) => {
		zallSDK.enableTrackScreenOrientation.call(zallSDK, enable)
	},
	trackViewScreen: (url = '', properties = {}) => {
		zallSDK.trackViewScreen.call(zallSDK, url, properties)
	},
	trackTimerEnd: (eventName = '', properties = {}) => {
		zallSDK.trackTimerEnd.call(zallSDK, eventName, properties)
	},
	trackTimerResume: (eventName = '') => {
		zallSDK.trackTimerResume.call(zallSDK, eventName)
	},
	trackTimerPause: (eventName = '') => {
		zallSDK.trackTimerPause.call(zallSDK, eventName)
	},
	trackTimerStart: (eventName = '') => {
		return zallSDK.trackTimerStart.call(zallSDK, eventName)
	},
	removeTimer: (eventName = '') => {
		zallSDK.removeTimer.call(zallSDK, eventName)
	},
	enableDeepLinkInstallSource: (enable = false) => {
		zallSDK.enableDeepLinkInstallSource.call(zallSDK, enable);
	},
	trackDeepLinkLaunch: (deepLinkUrl = '', oaid = '') => {
		zallSDK.trackDeepLinkLaunch.call(zallSDK, deepLinkUrl, oaid);
	},
	//
	popupLoadSuccess: (callback) => {
		zallSDK.popupLoadSuccess(callback);
	},
	popupClose: (callback) => {
		zallSDK.popupClose(callback);
	},
	popupClick: (callback) => {
		zallSDK.popupClick(callback);
	},
	popupLoadFailed: (callback) => {
		zallSDK.popupLoadFailed(callback);
	},
	enablePopup: () => {
		zallSDK.enablePopup();
	}

};


export default sa;
