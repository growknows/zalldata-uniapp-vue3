// 原生SDK提供的API
import zallSDK from '../jssdk/weixin.js';
import popups from '../plugin/wx-popup.esm.min';

// 提供各端一致的公共API
let sa = {
	// 提供扩展性
	instance: zallSDK,
	// 提供初始化和配置参数
	init: zallSDK.init.bind(zallSDK),
	//弹窗初始化
	popupInit: (para) => {
		if (typeof para === "object" && para !== null) {
			zallSDK.usePlugin(popups, para);
		}
	},
	setPara: (para) => {
		para = para || {};
		let defaultValue = {
			autoTrack: false
		};
		Object.assign(defaultValue, para);
		zallSDK.setPara.call(zallSDK, defaultValue);
	},
	// 各端通用的常用API
	getDistinctID: zallSDK.store.getDistinctId.bind(zallSDK.store),
	register: zallSDK.registerApp.bind(zallSDK),
	// 有这个方法但是效果不同的话，需要覆盖一下
	clearRegister: () => {
		console.log('web 中不支持此方法');
	},
	popupLoadSuccess: (callback) => {
		if(popups.CAMPAIGN_ERROR && popups.CAMPAIGN_ERROR['onStart']) {
			delete popups.CAMPAIGN_ERROR['onStart']
		};
		popups.campaign_listener.onStart = callback;
	},
	popupClose: (callback) => {
		if(popups.CAMPAIGN_ERROR && popups.CAMPAIGN_ERROR['onEnd']) {
			delete popups.CAMPAIGN_ERROR['onEnd']
		};
		popups.campaign_listener.onEnd = callback;
	},
	popupClick: (callback) => {
		popups.info.popup_listener.onClick = callback;
	},
	popupLoadFailed: (callback) => {
		if(popups.CAMPAIGN_ERROR && popups.CAMPAIGN_ERROR['onFailed']) {
			delete popups.CAMPAIGN_ERROR['onFailed']
		};
		popups.campaign_listener.onFailed = callback;
	}
};

export default sa;
