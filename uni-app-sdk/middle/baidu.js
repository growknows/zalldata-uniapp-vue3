// 原生SDK提供的API
let zallSDK = require('../jssdk/baidu.js');

// 提供各端一致的公共API

let sa = {
	// 提供扩展性
	instance: zallSDK,
	// 提供初始化和配置参数
	init: zallSDK.init.bind(zallSDK),
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
	clearRegister: () => {
		console.log('web 中不支持此方法');
	}
};





export default sa;
