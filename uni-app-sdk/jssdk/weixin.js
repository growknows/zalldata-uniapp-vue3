"use strict";
var _ = {}, sa = {
	para: {
		name: "sensors",
		server_url: "",
		send_timeout: 1e3,
		show_log: !1,
		launched: !1,
		allow_amend_share_path: !0,
		max_string_length: 500,
		datasend_timeout: 3e3,
		source_channel: [],
		autoTrack: {
			appLaunch: !0,
			appShow: !0,
			appHide: !0,
			pageShow: !0,
			pageShare: !0,
			mpClick: !1,
			mpFavorite: !0,
			pageLeave: !0
		},
		autotrack_exclude_page: {pageShow: []},
		is_persistent_save: {share: !1, utm: !1},
		preset_properties: {url_path: !0},
		preset_events: {moments_page: !1, defer_track: !1, share_info_use_string: !1},
		batch_send: !0,
		storage_store_key: "zalldata_wechat",
		storage_prepare_data_key: "zalldata_mp_prepare_data"
	}
}, mpHook = {
	data: 1,
	onLoad: 1,
	onShow: 1,
	onReady: 1,
	onPullDownRefresh: 1,
	onReachBottom: 1,
	onShareAppMessage: 1,
	onShareTimeline: 1,
	onPullDownRefresh: 1,
	onReachBottom: 1,
	onPageScroll: 1,
	onResize: 1,
	onTabItemTap: 1,
	onHide: 1,
	onUnload: 1
}, logger = "object" == typeof logger ? logger : {};
logger.info = function () {
	if (sa.para.show_log && "object" == typeof console && console.log) try {
		if (3 === arguments.length) return console.log(arguments[0], arguments[1], arguments[2]);
		if (2 === arguments.length) return console.log(arguments[0], arguments[1]);
		if (1 === arguments.length) return console.log(arguments[0])
	} catch (e) {
		console.log(arguments[0])
	}
}, sa.setPara = function (e) {
	sa.para = _.extend2Lev(sa.para, e);
	var t = [];
	if (_.isArray(sa.para.source_channel)) for (var a = sa.para.source_channel.length, r = 0; r < a; r++) -1 === " utm_source utm_medium utm_campaign utm_content utm_term sa_utm utm_activity".indexOf(" " + sa.para.source_channel[r] + " ") && t.push(sa.para.source_channel[r]);
	sa.para.source_channel = t, _.isObject(sa.para.register) && _.extend(_.info.properties, sa.para.register), sa.para.openid_url || (sa.para.openid_url = sa.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/, "$1/mp_login")), "number" != typeof sa.para.send_timeout && (sa.para.send_timeout = 1e3);
	var s = {send_timeout: 6e3, max_length: 6};
	e && e.datasend_timeout || sa.para.batch_send && (sa.para.datasend_timeout = 1e4), !0 === sa.para.batch_send ? sa.para.batch_send = _.extend({}, s) : _.isObject(sa.para.batch_send) && (sa.para.batch_send = _.extend({}, s, sa.para.batch_send));
	var n = {share: !1, utm: !1};
	!0 === sa.para.is_persistent_save ? (sa.para.is_persistent_save = _.extend({}, n), sa.para.is_persistent_save.utm = !0) : _.isObject(sa.para.is_persistent_save) && (sa.para.is_persistent_save = _.extend({}, n, sa.para.is_persistent_save)), sa.para.server_url ? sa.para.preset_properties = _.isObject(sa.para.preset_properties) ? sa.para.preset_properties : {} : logger.info("\u8bf7\u4f7f\u7528 setPara() \u65b9\u6cd5\u8bbe\u7f6e server_url \u6570\u636e\u63a5\u6536\u5730\u5740,\u8be6\u60c5\u53ef\u67e5\u770bhttps://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")
}, sa.getServerUrl = function () {
	return sa.para.server_url
}, sa.status = {};
var ArrayProto = Array.prototype, ObjProto = Object.prototype, slice = ArrayProto.slice, toString = ObjProto.toString,
	hasOwnProperty = ObjProto.hasOwnProperty, LIB_VERSION = "1.14.22", LIB_NAME = "MiniProgram",
	source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term utm_activity",
	latest_source_channel = ["$latest_utm_source", "$latest_utm_medium", "$latest_utm_campaign", "$latest_utm_content", "$latest_utm_term", "$latest_sa_utm","$utm_activity"],
	latest_share_info = ["$latest_share_distinct_id", "$latest_share_url_path", "$latest_share_depth", "$latest_share_method"],
	share_info_key = ["sensors_share_d", "sensors_share_p", "sensors_share_i", "sensors_share_m"],
	page_show_time = Date.now(), mpshow_time = null, query_share_depth = 0, share_distinct_id = "", share_method = "",
	current_scene = "", is_first_launch = !1, wxSDKVersion = "";
sa.lib_version = LIB_VERSION;
var globalTitle = {}, page_route_map = [];
!function () {
	var e = ArrayProto.forEach, t = ArrayProto.indexOf, a = Array.isArray, r = {}, s = _.each = function (t, a, s) {
		if (null == t) return !1;
		if (e && t.forEach === e) t.forEach(a, s); else if (t.length === +t.length) {
			for (var n = 0, i = t.length; n < i; n++) if (n in t && a.call(s, t[n], n, t) === r) return !1
		} else for (var o in t) if (hasOwnProperty.call(t, o) && a.call(s, t[o], o, t) === r) return !1
	};
	_.logger = logger, _.extend = function (e) {
		return s(slice.call(arguments, 1), function (t) {
			for (var a in t) void 0 !== t[a] && (e[a] = t[a])
		}), e
	}, _.extend2Lev = function (e) {
		return s(slice.call(arguments, 1), function (t) {
			for (var a in t) void 0 !== t[a] && null !== t[a] && (_.isObject(t[a]) && _.isObject(e[a]) ? _.extend(e[a], t[a]) : e[a] = t[a])
		}), e
	}, _.coverExtend = function (e) {
		return s(slice.call(arguments, 1), function (t) {
			for (var a in t) void 0 !== t[a] && void 0 === e[a] && (e[a] = t[a])
		}), e
	}, _.isArray = a || function (e) {
		return "[object Array]" === toString.call(e)
	}, _.isFunction = function (e) {
		try {
			return /^\s*\bfunction\b/.test(e)
		} catch (e) {
			return !1
		}
	}, _.isArguments = function (e) {
		return !(!e || !hasOwnProperty.call(e, "callee"))
	}, _.toArray = function (e) {
		return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : []
	}, _.values = function (e) {
		var t = [];
		return null == e ? t : (s(e, function (e) {
			t[t.length] = e
		}), t)
	}, _.include = function (e, a) {
		var n = !1;
		return null == e ? n : t && e.indexOf === t ? -1 != e.indexOf(a) : (s(e, function (e) {
			if (n || (n = e === a)) return r
		}), n)
	}
}(), _.trim = function (e) {
	return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}, _.isObject = function (e) {
	return null != e && "[object Object]" == toString.call(e)
}, _.isEmptyObject = function (e) {
	if (_.isObject(e)) {
		for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
		return !0
	}
	return !1
}, _.isUndefined = function (e) {
	return void 0 === e
}, _.isString = function (e) {
	return "[object String]" == toString.call(e)
}, _.isDate = function (e) {
	return "[object Date]" == toString.call(e)
}, _.isBoolean = function (e) {
	return "[object Boolean]" == toString.call(e)
}, _.isNumber = function (e) {
	return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e))
}, _.isJSONString = function (e) {
	try {
		JSON.parse(e)
	} catch (e) {
		return !1
	}
	return !0
}, _.decodeURIComponent = function (e) {
	var t = "";
	try {
		t = decodeURIComponent(e)
	} catch (a) {
		t = e
	}
	return t
}, _.encodeDates = function (e) {
	return _.each(e, function (t, a) {
		_.isDate(t) ? e[a] = _.formatDate(t) : _.isObject(t) && (e[a] = _.encodeDates(t))
	}), e
}, _.formatDate = function (e) {
	function t(e) {
		return e < 10 ? "0" + e : e
	}

	return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
}, _.searchObjDate = function (e) {
	_.isObject(e) && _.each(e, function (t, a) {
		_.isObject(t) ? _.searchObjDate(e[a]) : _.isDate(t) && (e[a] = _.formatDate(t))
	})
}, _.formatString = function (e) {
	return e.length > sa.para.max_string_length ? (logger.info("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e.slice(0, sa.para.max_string_length)) : e
}, _.searchObjString = function (e) {
	_.isObject(e) && _.each(e, function (t, a) {
		_.isObject(t) ? _.searchObjString(e[a]) : _.isString(t) && (e[a] = _.formatString(t))
	})
}, _.parseSuperProperties = function (e) {
	_.isObject(e) && (_.each(e, function (t, a) {
		if (_.isFunction(t)) try {
			e[a] = t(), _.isFunction(e[a]) && (logger.info("\u60a8\u7684\u5c5e\u6027- " + a + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete e[a])
		} catch (t) {
			delete e[a], logger.info("\u60a8\u7684\u5c5e\u6027- " + a + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
		}
	}), _.strip_sa_properties(e))
}, _.unique = function (e) {
	for (var t, a = [], r = {}, s = 0; s < e.length; s++) (t = e[s]) in r || (r[t] = !0, a.push(t));
	return a
}, _.strip_sa_properties = function (e) {
	return _.isObject(e) ? (_.each(e, function (t, a) {
		if (_.isArray(t)) {
			var r = [];
			_.each(t, function (e) {
				_.isString(e) ? r.push(e) : logger.info("\u60a8\u7684\u6570\u636e-", t, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
			}), 0 !== r.length ? e[a] = r : (delete e[a], logger.info("\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4"))
		}
		_.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("\u60a8\u7684\u6570\u636e-", t, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete e[a])
	}), e) : e
}, _.strip_empty_properties = function (e) {
	var t = {};
	return _.each(e, function (e, a) {
		null != e && (t[a] = e)
	}), t
}, _.utf8Encode = function (e) {
	var t, a, r, s, n = "";
	for (t = a = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, s = 0; s < r; s++) {
		var i = e.charCodeAt(s), o = null;
		i < 128 ? a++ : o = i > 127 && i < 2048 ? String.fromCharCode(i >> 6 | 192, 63 & i | 128) : String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128), null !== o && (a > t && (n += e.substring(t, a)), n += o, t = a = s + 1)
	}
	return a > t && (n += e.substring(t, e.length)), n
}, _.base64Encode = function (e) {
	var t, a, r, s, n, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = 0, c = 0, u = "",
		p = [];
	if (!e) return e;
	e = _.utf8Encode(e);
	do {
		t = (n = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++)) >> 18 & 63, a = n >> 12 & 63, r = n >> 6 & 63, s = 63 & n, p[c++] = i.charAt(t) + i.charAt(a) + i.charAt(r) + i.charAt(s)
	} while (o < e.length);
	switch (u = p.join(""), e.length % 3) {
		case 1:
			u = u.slice(0, -2) + "==";
			break;
		case 2:
			u = u.slice(0, -1) + "="
	}
	return u
}, _.urlSafeBase64 = function () {
	var e = {"+": "-", "/": "_", "=": "."}, t = {"-": "+", _: "/", ".": "="};
	return {
		encode: function (t) {
			return t.replace(/[+\/=]/g, function (t) {
				return e[t]
			})
		}, decode: function (e) {
			return e.replace(/[-_.]/g, function (e) {
				return t[e]
			})
		}, trim: function (e) {
			return e.replace(/[.=]{1,2}$/, "")
		}, isBase64: function (e) {
			return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
		}, isUrlSafeBase64: function (e) {
			return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
		}
	}
}(), _.btoa = function (e) {
	for (var t, a, r, s, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = "", o = 0, _ = (e = String(e)).length % 3; o < e.length;) ((a = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255 || (s = e.charCodeAt(o++)) > 255) && logger.info("Failed to execute 'btoa' : The string to be encoded contains characters outside of the Latin1 range."), i += n.charAt((t = a << 16 | r << 8 | s) >> 18 & 63) + n.charAt(t >> 12 & 63) + n.charAt(t >> 6 & 63) + n.charAt(63 & t);
	return _ ? i.slice(0, _ - 3) + "===".substring(_) : i
}, _.urlBase64Encode = function (e) {
	return _.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
		return String.fromCharCode("0x" + t)
	}))
}, _.rot13obfs = function (e, t) {
	t = "number" == typeof t ? t : 13;
	for (var a = (e = String(e)).split(""), r = 0, s = a.length; r < s; r++) {
		a[r].charCodeAt(0) < 126 && (a[r] = String.fromCharCode((a[r].charCodeAt(0) + t) % 126))
	}
	return a.join("")
}, _.rot13defs = function (e) {
	e = String(e);
	return _.rot13obfs(e, 113)
}, _.getCurrentPage = function () {
	var e = {};
	try {
		var t = getCurrentPages();
		e = t[t.length - 1]
	} catch (e) {
		logger.info(e)
	}
	return e
}, _.getCurrentPath = function () {
	var e = "\u672a\u53d6\u5230";
	try {
		e = _.getCurrentPage().route
	} catch (e) {
		logger.info(e)
	}
	return e
}, _.getIsFirstDay = function () {
	return "object" == typeof sa.store._state && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > (new Date).getTime()
}, _.getCurrentUrl = function (e) {
	var t = _.getCurrentPath(), a = "";
	return _.isObject(e) && e.sensors_mp_encode_url_query && (a = e.sensors_mp_encode_url_query), t ? a ? t + "?" + a : t : "\u672a\u53d6\u5230"
}, _.getPath = function (e) {
	return e = "string" == typeof e ? e.replace(/^\//, "") : "\u53d6\u503c\u5f02\u5e38"
}, _.getMethods = function (e) {
	var t = [];
	for (var a in e) "function" != typeof e[a] || mpHook[a] || t.push(a);
	return t
}, _.isClick = function (e) {
	return !!{tap: 1, longpress: 1, longtap: 1}[e]
}, sa.initialState = {
	queue: [],
	isComplete: !1,
	systemIsComplete: !1,
	storeIsComplete: !1,
	checkIsComplete: function () {
		this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (_.each(this.queue, function (e) {
			sa[e[0]].apply(sa, slice.call(e[1]))
		}), this.queue = []))
	}
}, _.getCustomUtmFromQuery = function (e, t, a, r) {
	if (!_.isObject(e)) return {};
	var s = {};
	if (e.sa_utm) for (var n in e) "sa_utm" !== n ? _.include(sa.para.source_channel, n) && (s[a + n] = e[n]) : s[r + n] = e[n]; else for (var n in e) -1 === (" " + source_channel_standard + " ").indexOf(" " + n + " ") ? _.include(sa.para.source_channel, n) && (s[a + n] = e[n]) : s[t + n] = e[n];
	return s
}, _.getObjFromQuery = function (e) {
	var t = e.split("?"), a = [], r = {};
	return t && t[1] ? (_.each(t[1].split("&"), function (e) {
		(a = e.split("="))[0] && a[1] && (r[a[0]] = a[1])
	}), r) : {}
}, _.setStorageSync = function (e, t) {
	var a = function () {
		wx.setStorageSync(e, t)
	};
	try {
		a()
	} catch (e) {
		logger.info("set Storage fail --", e);
		try {
			a()
		} catch (e) {
			logger.info("set Storage fail again --", e)
		}
	}
}, _.getStorageSync = function (e) {
	var t = "";
	try {
		t = wx.getStorageSync(e)
	} catch (a) {
		try {
			t = wx.getStorageSync(e)
		} catch (e) {
			logger.info("getStorage fail")
		}
	}
	return t
}, _.getMPScene = function (e) {
	return "number" == typeof e || "string" == typeof e && "" !== e ? e = "wx-" + String(e) : "\u672a\u53d6\u5230\u503c"
}, _.objToParam = function (e, t) {
	if ("[object Object]" !== Object.prototype.toString.call(e)) return logger.info("\u8bf7\u4f20\u5165\u6709\u6548\u5bf9\u8c61"), "";
	var a = [];
	for (var r in e) if (e.hasOwnProperty(r)) {
		var s = e[r];
		void 0 === s ? a.push(r + "=") : (s = t ? encodeURIComponent(s) : s, a.push(r + "=" + s))
	}
	return a.join("&")
}, _.delObjectKey = function (e) {
	if ("[object Object]" === Object.prototype.toString.call(e)) for (var t = 0; t < share_info_key.length; t++) delete e[share_info_key[t]]; else logger.info("\u8bf7\u4f20\u5165\u6709\u6548\u5bf9\u8c61")
}, _.shareInfoData = function (e) {
	var t = {}, a = {};
	if (sa.para.preset_events.share_info_use_string) {
		a = e.query;
		for (var r = 0; r < share_info_key.length; r++) {
			if (!a.hasOwnProperty(share_info_key[r])) return {};
			a[share_info_key[r]] = _.decodeURIComponent(a[share_info_key[r]])
		}
		t = {
			depth: Number(a.sensors_share_d),
			path: a.sensors_share_p || "",
			id: a.sensors_share_i || "",
			method: a.sensors_share_m || ""
		}
	} else {
		if (!e.query.sampshare) return {};
		if (a = _.decodeURIComponent(e.query.sampshare), !_.isJSONString(a)) return {};
		t = {depth: (a = JSON.parse(a)).d, path: a.p, id: a.i, method: a.m}
	}
	return t
}, _.setShareInfo = function (e, t) {
	var a = {}, r = {}, s = sa.store.getDistinctId(), n = sa.store.getFirstId();
	if (e && _.isObject(e.query)) {
		if (a = _.shareInfoData(e), _.isEmptyObject(a)) return {};
		var i = a.depth, o = a.path, c = a.id, u = a.method
	}
	"string" == typeof c ? (t.$share_distinct_id = c, share_distinct_id = c, r.$latest_share_distinct_id = c) : t.$share_distinct_id = "\u53d6\u503c\u5f02\u5e38", "number" == typeof i ? !share_distinct_id || share_distinct_id !== s && share_distinct_id !== n ? !share_distinct_id || share_distinct_id === s && share_distinct_id === n ? t.$share_depth = "-1" : (t.$share_depth = i + 1, query_share_depth = i + 1, r.$latest_share_depth = i + 1) : (t.$share_depth = i, query_share_depth = i, r.$latest_share_depth = i) : t.$share_depth = "-1", "string" == typeof o ? (t.$share_url_path = o, r.$latest_share_url_path = o) : t.$share_url_path = "\u53d6\u503c\u5f02\u5e38", "string" == typeof u ? (t.$share_method = u, r.$latest_share_method = u) : t.$share_method = "\u53d6\u503c\u5f02\u5e38", _.setLatestShare(r)
}, _.getShareInfo = function () {
	if (sa.para.preset_events.share_info_use_string) {
		var e = {
			sensors_share_i: sa.store.getDistinctId() || "\u53d6\u503c\u5f02\u5e38",
			sensors_share_p: _.getCurrentPath(),
			sensors_share_d: query_share_depth,
			sensors_share_m: share_method
		};
		return _.objToParam(e, !0)
	}
	var t = JSON.stringify({
		i: sa.store.getDistinctId() || "\u53d6\u503c\u5f02\u5e38",
		p: _.getCurrentPath(),
		d: query_share_depth,
		m: share_method
	});
	return "sampshare=" + encodeURIComponent(t)
}, _.detectOptionQuery = function (e) {
	if (!e || !_.isObject(e.query)) return {};
	var t, a, r, s, n = {};
	return n.query = _.extend({}, e.query), "string" == typeof n.query.scene && (t = n.query, a = ["utm_source", "utm_content", "utm_medium", "utm_campaign", "utm_term", "sa_utm", "utm_activity"].concat(sa.para.source_channel), r = new RegExp("(" + a.join("|") + ")%3D", "i"), 1 === (s = Object.keys(t)).length && "scene" === s[0] && r.test(t.scene)) && (n.scene = n.query.scene, delete n.query.scene), e.query.q && e.query.scancode_time && "101" === String(e.scene).slice(0, 3) && (n.q = String(n.query.q), delete n.query.q, delete n.query.scancode_time), n
}, _.getMixedQuery = function (e) {
	var t = _.detectOptionQuery(e), a = t.scene, r = t.q, s = t.query;
	for (var n in s) s[n] = _.decodeURIComponent(s[n]);
	return a && (a = -1 !== (a = _.decodeURIComponent(a)).indexOf("?") ? "?" + a.replace(/\?/g, "") : "?" + a, _.extend(s, _.getObjFromQuery(a))), r && _.extend(s, _.getObjFromQuery(_.decodeURIComponent(r))), s
}, _.setUtm = function (e, t) {
	var a = {}, r = _.getMixedQuery(e), s = _.getCustomUtmFromQuery(r, "$", "_", "$"),
		n = _.getCustomUtmFromQuery(r, "$latest_", "_latest_", "$latest_");
	return a.pre1 = s, a.pre2 = n, _.extend(t, s), a
}, _.setSfSource = function (e, t) {
	!_.isEmptyObject(e.query) && e.query._sfs && (t.$sf_source = e.query._sfs, sa.registerApp({$latest_sf_source: t.$sf_source}))
}, _.setPageSfSource = function (e) {
	try {
		var t = getCurrentPages(), a = JSON.parse(JSON.stringify(t[t.length - 1].options));
		for (var r in a) a[r] = _.decodeURIComponent(a[r]);
		!_.isEmptyObject(a) && a._sfs && (e.$sf_source = a._sfs)
	} catch (e) {
		logger.info(e)
	}
};
try {
	var oldSetNavigationBarTitle = wx.setNavigationBarTitle;
	Object.defineProperty(wx, "setNavigationBarTitle", {
		get: function () {
			return function (e) {
				var t = getCurrentPages(), a = t[t.length - 1].route || "";
				e = _.isObject(e) ? e : {}, globalTitle[a] = e.title, oldSetNavigationBarTitle.call(this, e)
			}
		}
	})
} catch (e) {
	logger.info(e)
}
_.setRefPage = function () {
	try {
		var e = getCurrentPages();
		if (e && 1 === e.length) {
			var t = e[e.length - 1].route, a = {title: _.getPageTitle(t), route: t};
			page_route_map.length >= 2 ? page_route_map[page_route_map.length - 1].route !== a.route && (page_route_map.push(a), page_route_map.shift()) : page_route_map.push(a)
		}
	} catch (e) {
		logger.info(e)
	}
}, _.getRefPage = function () {
	var e = {route: "\u76f4\u63a5\u6253\u5f00", title: ""};
	try {
		var t = getCurrentPages();
		if (t && t.length >= 2) e.route = t[t.length - 2].route, e.title = _.getPageTitle(e.route); else if (t && t.length >= 1) {
			if (page_route_map.length >= 2) {
				var a = page_route_map;
				e.route = a[a.length - 2].route, e.title = _.getPageTitle(e.route)
			}
			e.route === t[t.length - 1].route && (e = {title: "", route: "\u76f4\u63a5\u6253\u5f00"})
		}
	} catch (e) {
		logger.info(e)
	}
	return e
}, _.setPageRefData = function (e) {
	var t = _.getRefPage();
	_.isObject(e) && (e.$referrer = t.route, e.$referrer_title = t.title)
}, sa._getPageTitle = _.getPageTitle = function (e) {
	if ("\u672a\u53d6\u5230" === e || !e) return !1;
	var t = "";
	try {
		if (__wxConfig) {
			var a = __wxConfig, r = __wxConfig.page || {}, s = r[e] || r[e + ".html"], n = {}, i = {};
			if (a.global && a.global.window && a.global.window.navigationBarTitleText && (n.titleVal = a.global.window.navigationBarTitleText), s && s.window && s.window.navigationBarTitleText && (i.titleVal = s.window.navigationBarTitleText), !i.titleVal && __wxAppCode__) {
				var o = __wxAppCode__[e + ".json"];
				o && o.navigationBarTitleText && (i.titleVal = o.navigationBarTitleText)
			}
			if (_.each(globalTitle, function (a, r) {
				if (r === e) return t = a
			}), 0 === t.length) {
				var c = _.extend(n, i);
				t = c.titleVal
			}
		}
	} catch (e) {
		logger.info(e)
	}
	return t
}, _.wxrequest = function (e) {
	if (_.compareSDKVersion(wxSDKVersion, "2.10.0") >= 0) e.timeout = sa.para.datasend_timeout, wx.request(e); else {
		var t = wx.request(e);
		setTimeout(function () {
			_.isObject(t) && _.isFunction(t.abort) && t.abort()
		}, sa.para.datasend_timeout)
	}
}, _.getAppId = function () {
	var e;
	if (wx.getAccountInfoSync && (e = wx.getAccountInfoSync()), _.isObject(e) && _.isObject(e.miniProgram)) return e.miniProgram.appId
}, _.validId = function (e) {
	return "string" != typeof e && "number" != typeof e || "" === e ? (logger.info("\u8f93\u5165 ID \u7c7b\u578b\u9519\u8bef"), !1) : "number" != typeof e || (e = String(e), /^\d+$/.test(e)) ? e : (logger.info("\u8f93\u5165 ID \u7c7b\u578b\u9519\u8bef"), !1)
}, _.compareSDKVersion = function (e, t) {
	e = e.split("."), t = t.split(".");
	for (var a = Math.max(e.length, t.length); e.length < a;) e.push("0");
	for (; t.length < a;) t.push("0");
	for (var r = 0; r < a; r++) {
		var s = parseInt(e[r]), n = parseInt(t[r]);
		if (s > n) return 1;
		if (s < n) return -1
	}
	return 0
}, _.setUpperCase = function (e) {
	return _.isString(e) ? e.toLocaleUpperCase() : e
}, _.info = {
	currentProps: {$distinctIdType: 0},
	properties: {$lib: LIB_NAME, $lib_version: String(LIB_VERSION)},
	getSystem: function () {
		var e = this.properties;

		function t() {
			wx.getSystemInfo({
				success: function (t) {
					var a, r;
					e.$brand = _.setUpperCase(t.brand), e.$manufacturer = t.brand, e.$model = t.model, e.$screen_width = Number(t.screenWidth), e.$screen_height = Number(t.screenHeight), e.$os = (a = t.platform, "ios" === (r = a.toLowerCase()) ? "iOS" : "android" === r ? "Android" : a), e.$os_version = t.system.indexOf(" ") > -1 ? t.system.split(" ")[1] : t.system, wxSDKVersion = t.SDKVersion
				}, complete: function () {
					var t = (new Date).getTimezoneOffset(), a = _.getAppId();
					_.isNumber(t) && (e.$timezone_offset = t), a && (e.$app_id = a), sa.initialState.systemIsComplete = !0, sa.initialState.checkIsComplete()
				}
			})
		}

		wx.getNetworkType({
			success: function (t) {
				e.$network_type = _.setUpperCase(t.networkType)
			}, complete: t
		})
	}
}, sa._ = _, _.eventEmitter = function () {
	this.sub = []
}, _.eventEmitter.prototype = {
	add: function (e) {
		this.sub.push(e)
	}, emit: function (e, t) {
		this.sub.forEach(function (a) {
			a.on(e, t)
		})
	}
}, _.eventSub = function (e) {
	sa.events.add(this), this._events = [], this.handle = e, this.ready = !1
}, _.eventSub.prototype = {
	on: function (e, t) {
		if (this.ready) {
			if (_.isFunction(this.handle)) try {
				this.handle(e, t)
			} catch (e) {
				logger.info(e)
			}
		} else this._events.push({event: e, data: t})
	}, isReady: function () {
		var e = this;
		e.ready = !0, e._events.forEach(function (t) {
			if (_.isFunction(e.handle)) try {
				e.handle(t.event, t.data)
			} catch (e) {
				logger.info(e)
			}
		})
	}
}, sa.eventSub = _.eventSub, sa.events = new _.eventEmitter, sa.usePlugin = function (e, t) {
	"function" == typeof e.init && e.init(sa, t)
}, sa.prepareData = function (e, t) {
	if (current_scene && 1154 === current_scene && !sa.para.preset_events.moments_page) return !1;
	var a = {
		distinct_id: this.store.getDistinctId(),
		lib: {$lib: LIB_NAME, $lib_method: "code", $lib_version: String(LIB_VERSION)},
		properties: {}
	};
	if (_.extend(a, this.store.getUnionId(), e), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(a.properties, e.properties), !e.type || "profile" !== e.type.slice(0, 7)) {
		a._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(-4)), a.properties = _.extend({}, _.info.properties, sa.store.getProps(), _.info.currentProps, a.properties), "track" === e.type && (a.properties.$is_first_day = _.getIsFirstDay());
		var r = _.getRefPage();
		a.properties.hasOwnProperty("$referrer") || (a.properties.$referrer = r.route), a.properties.hasOwnProperty("$referrer_title") || (a.properties.$referrer_title = r.title)
	}
	a.properties.$time && _.isDate(a.properties.$time) ? (a.time = 1 * a.properties.$time, delete a.properties.$time) : a.time = 1 * new Date, _.parseSuperProperties(a.properties), _.searchObjDate(a), _.searchObjString(a), logger.info(a), sa.events.emit("send", a), sa.sendStrategy.send(a)
}, sa.store = {
	storageInfo: null, getUUID: function () {
		return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8)
	}, getStorage: function () {
		return this.storageInfo ? this.storageInfo : (this.storageInfo = sa._.getStorageSync(sa.para.storage_store_key) || "", this.storageInfo)
	}, _state: {}, mem: {
		mdata: [], getLength: function () {
			return this.mdata.length
		}, add: function (e) {
			this.mdata.push(e)
		}, clear: function (e) {
			this.mdata.splice(0, e)
		}
	}, toState: function (e) {
		var t = null;
		_.isJSONString(e) ? (t = JSON.parse(e)).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID()) : _.isObject(e) && (t = e).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID())
	}, getFirstId: function () {
		return this._state._first_id || this._state.first_id
	}, getDistinctId: function () {
		return this._state._distinct_id || this._state.distinct_id
	}, getUnionId: function () {
		var e = {}, t = this._state._first_id || this._state.first_id,
			a = this._state._distinct_id || this._state.distinct_id;
		return t && a ? (e.login_id = a, e.anonymous_id = t) : e.anonymous_id = a, e
	}, getProps: function () {
		return this._state.props || {}
	}, setProps: function (e, t) {
		var a = this._state.props || {};
		t ? this.set("props", e) : (_.extend(a, e), this.set("props", a))
	}, set: function (e, t) {
		var a = {};
		for (var r in "string" == typeof e ? a[e] = t : "object" == typeof e && (a = e), this._state = this._state || {}, a) this._state[r] = a[r], "first_id" === r ? delete this._state._first_id : "distinct_id" === r && (delete this._state._distinct_id, sa.events.emit("changeDistinctId"));
		this.save()
	}, change: function (e, t) {
		this._state["_" + e] = t
	}, encryptStorage: function () {
		var e = this.getStorage(), t = "data:enc;";
		_.isObject(e) ? e = t + _.rot13obfs(JSON.stringify(e)) : _.isString(e) && -1 === e.indexOf(t) && (e = t + _.rot13obfs(e)), sa._.setStorageSync(sa.para.storage_store_key, e)
	}, save: function () {
		var e = JSON.parse(JSON.stringify(this._state));
		if (delete e._first_id, delete e._distinct_id, sa.para.encrypt_storage) {
			e = "data:enc;" + _.rot13obfs(JSON.stringify(e))
		}
		sa._.setStorageSync(sa.para.storage_store_key, e)
	}, init: function () {
		var e = this.getStorage();
		if (e) _.isString(e) && -1 !== e.indexOf("data:enc;") && (e = e.substring("data:enc;".length), e = JSON.parse(_.rot13defs(e))), this.toState(e); else {
			is_first_launch = !0;
			var t = new Date, a = t.getTime();
			t.setHours(23), t.setMinutes(59), t.setSeconds(60), sa.setOnceProfile({$first_visit_time: new Date}), this.set({
				distinct_id: this.getUUID(),
				first_visit_time: a,
				first_visit_day_time: t.getTime()
			})
		}
	}
}, sa.setProfile = function (e, t) {
	sa.prepareData({type: "profile_set", properties: e}, t)
}, sa.setOnceProfile = function (e, t) {
	sa.prepareData({type: "profile_set_once", properties: e}, t)
}, sa.appendProfile = function (e, t) {
	if (!_.isObject(e)) return !1;
	_.each(e, function (t, a) {
		_.isString(t) ? e[a] = [t] : _.isArray(t) || (delete e[a], logger.info("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))
	}), sa.prepareData({type: "profile_append", properties: e}, t)
}, sa.incrementProfile = function (e, t) {
	if (!_.isObject(e)) return !1;
	var a = e;
	_.isString(e) && ((e = {})[a] = 1), sa.prepareData({type: "profile_increment", properties: e}, t)
}, sa.track = function (e, t, a) {
	this.prepareData({type: "track", event: e, properties: t}, a)
}, sa.identify = function (e, t) {
	if (e = _.validId(e)) {
		var a = sa.store.getFirstId();
		!0 === t ? a ? sa.store.set("first_id", e) : sa.store.set("distinct_id", e) : a ? sa.store.change("first_id", e) : sa.store.change("distinct_id", e)
	}
}, sa.trackSignup = function (e, t, a, r) {
	var s = sa.store.getFirstId() || sa.store.getDistinctId();
	sa.store.set("distinct_id", e), sa.prepareData({
		original_id: s,
		distinct_id: e,
		type: "track_signup",
		event: t,
		properties: a
	}, r)
}, sa.registerApp = function (e) {
	_.isObject(e) && !_.isEmptyObject(e) && (_.info.currentProps = _.extend(_.info.currentProps, e))
}, sa.register = function (e) {
	_.isObject(e) && !_.isEmptyObject(e) && sa.store.setProps(e)
}, sa.clearAllRegister = function () {
	sa.store.setProps({}, !0)
}, sa.clearAllProps = function (e) {
	var t = sa.store.getProps(), a = {};
	_.isArray(e) && (_.each(t, function (t, r) {
		_.include(e, r) || (a[r] = t)
	}), sa.store.setProps(a, !0))
}, sa.clearAppRegister = function (e) {
	_.isArray(e) && _.each(_.info.currentProps, function (t, a) {
		_.include(e, a) && delete _.info.currentProps[a]
	})
}, _.setLatestChannel = function (e) {
	_.isEmptyObject(e) || (function (e, t) {
		var a = !1;
		for (var r in t) e[t[r]] && (a = !0);
		return a
	}(e, latest_source_channel) && (sa.clearAppRegister(latest_source_channel), sa.clearAllProps(latest_source_channel)), sa.para.is_persistent_save.utm ? sa.register(e) : sa.registerApp(e))
}, _.setLatestShare = function (e) {
	(e.$latest_share_depth || e.$latest_share_distinct_id || e.$latest_share_url_path || e.$latest_share_method) && (sa.clearAppRegister(latest_share_info), sa.clearAllProps(latest_share_info), sa.para.is_persistent_save.share ? sa.register(e) : sa.registerApp(e))
}, sa.login = function (e, p) {
	if (e = _.validId(e)) {
		var t = sa.store.getFirstId(), a = sa.store.getDistinctId();
		if (_.isObject(p) && !_.isEmptyObject(p)) _.info.currentProps = _.extend(_.info.currentProps, p);
		e !== a && (t ? sa.trackSignup(e, "$SignUp") : (sa.store.set("first_id", a), sa.trackSignup(e, "$SignUp")))
	}
}, sa.getAnonymousID = function () {
	if (!_.isEmptyObject(sa.store._state)) return sa.store._state._first_id || sa.store._state.first_id || sa.store._state._distinct_id || sa.store._state.distinct_id;
	logger.info("\u8bf7\u5148\u521d\u59cb\u5316SDK")
}, sa.logout = function (e) {
	var t = sa.store.getFirstId();
	_.info.currentProps.$distinctIdType = 0;
	t ? (sa.store.set("first_id", ""), !0 === e ? sa.store.set("distinct_id", sa.store.getUUID()) : sa.store.set("distinct_id", t)) : logger.info("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")
}, sa.getLocation = function () {
}, sa.openid = {
	getRequest: function (e) {
		wx.login({
			success: function (t) {
				t.code && sa.para.appid && sa.para.openid_url ? _.wxrequest({
					url: sa.para.openid_url + "&code=" + t.code + "&appid=" + sa.para.appid,
					method: "GET",
					complete: function (t) {
						_.isObject(t) && _.isObject(t.data) && t.data.openid ? e(t.data.openid) : e()
					}
				}) : e()
			}
		})
	}, getWXStorage: function () {
		var e = sa.store.getStorage();
		if (e && _.isObject(e)) return e.openid
	}, getOpenid: function (e) {
		if (!sa.para.appid) return e(), !1;
		var t = this.getWXStorage();
		t ? e(t) : this.getRequest(e)
	}
}, sa.initial = function () {
	this._.info.getSystem(), this.store.init()
}, sa.init = function (e) {
	if (!0 === this.hasInit) return !1;
	this.hasInit = !0, sa.setPara(e), sa.para.encrypt_storage && this.store.encryptStorage(), sa.para.batch_send && (wx.getStorage({
		key: sa.para.storage_prepare_data_key,
		complete: function (e) {
			var t = e.data && _.isArray(e.data) ? e.data : [];
			sa.store.mem.mdata = t.concat(sa.store.mem.mdata), sa.sendStrategy.syncStorage = !0
		}
	}), sa.sendStrategy.batchInterval()), sa.initialState.storeIsComplete = !0, sa.initialState.checkIsComplete()
}, sa.getPresetProperties = function () {
	if (_.info && _.info.properties && _.info.properties.$lib) {
		var e = {};
		_.each(_.info.currentProps, function (t, a) {
			0 === a.indexOf("$") && (e[a] = t)
		});
		var t = _.extend(e, {
			$url_path: _.getCurrentPath(),
			$is_first_day: _.getIsFirstDay()
		}, _.info.properties, sa.store.getProps());
		return delete t.$lib, t
	}
	return {}
}, sa.setProperties = function (e) {
	let p = sa.getPresetProperties();
	console.log('----------------------', p);
	Object.assign(p, e);
	_.info.properties = p
}, _.autoExeQueue = function () {
	return {
		items: [], enqueue: function (e) {
			this.items.push(e), this.start()
		}, dequeue: function () {
			return this.items.shift()
		}, getCurrentItem: function () {
			return this.items[0]
		}, isRun: !1, start: function () {
			this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start())
		}, close: function () {
			this.dequeue(), this.isRun = !1, this.start()
		}
	}
}, sa.requestQueue = function (e) {
	this.url = e.url
}, sa.requestQueue.prototype.isEnd = function () {
	this.received || (this.received = !0, this.close())
}, sa.requestQueue.prototype.start = function () {
	var e = this;
	_.wxrequest({
		url: this.url, method: "GET", complete: function () {
			e.isEnd()
		}
	})
}, sa.dataQueue = _.autoExeQueue(), sa.sendStrategy = {
	dataHasSend: !0, dataHasChange: !1, syncStorage: !1, failTime: 0, onAppHide: function () {
		sa.para.batch_send && this.batchSend()
	}, send: function (e) {
		if (!sa.para.server_url) return !1;
		sa.para.batch_send ? (this.dataHasChange = !0, sa.store.mem.getLength() >= 500 && (logger.info("\u6570\u636e\u91cf\u5b58\u50a8\u8fc7\u5927\uff0c\u6709\u5f02\u5e38"), sa.store.mem.mdata.shift()), sa.store.mem.add(e), sa.store.mem.getLength() >= sa.para.batch_send.max_length && this.batchSend()) : this.queueSend(e)
	}, queueSend: function (e) {
		e._flush_time = Date.now(), e = JSON.stringify(e), e = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sa.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(e));
		var t = new sa.requestQueue({url: e});
		t.close = function () {
			sa.dataQueue.close()
		}, sa.dataQueue.enqueue(t)
	}, wxrequest: function (e) {
		if (_.isArray(e.data) && e.data.length > 0) {
			var t = Date.now();
			e.data.forEach(function (e) {
				e._flush_time = t
			}), e.data = JSON.stringify(e.data), _.wxrequest({
				url: sa.para.server_url,
				method: "POST",
				dataType: "text",
				data: "data_list=" + encodeURIComponent(_.base64Encode(e.data)),
				success: function () {
					e.success(e.len)
				},
				fail: function () {
					e.fail()
				}
			})
		} else e.success(e.len)
	}, batchSend: function () {
		if (this.dataHasSend) {
			sa.store.mem.mdata.forEach((v) => {
				if (v && v.properties && null == v.properties.$distinctIdType) {
					console.log('--request interceptors--', v);
					Object.assign(v.properties, {$distinctIdType: _.info.currentProps.$distinctIdType})
				}
			});
			var e, t, a = sa.store.mem.mdata;
			(t = (e = a.length >= 100 ? a.slice(0, 100) : a).length) > 0 && (this.dataHasSend = !1, this.wxrequest({
				data: e,
				len: t,
				success: this.batchRemove.bind(this),
				fail: this.sendFail.bind(this)
			}))
		}
	}, sendFail: function () {
		this.dataHasSend = !0, this.failTime++
	}, batchRemove: function (e) {
		sa.store.mem.clear(e), this.dataHasSend = !0, this.dataHasChange = !0, this.batchWrite(), this.failTime = 0
	}, is_first_batch_write: !0, batchWrite: function () {
		var e = this;
		this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, setTimeout(function () {
			e.batchSend()
		}, 1e3)), this.dataHasChange = !1, this.syncStorage && sa._.setStorageSync(sa.para.storage_prepare_data_key, sa.store.mem.mdata))
	}, batchInterval: function () {
		var e = this;
		!function t() {
			setTimeout(function () {
				e.batchWrite(), t()
			}, 500)
		}(), function t() {
			setTimeout(function () {
				e.batchSend(), t()
			}, sa.para.batch_send.send_timeout * Math.pow(2, e.failTime))
		}()
	}
}, sa.setOpenid = function (e, t) {
	sa.store.set("openid", e), t ? sa.store.set("distinct_id", e) : sa.identify(e, !0)
}, sa.initWithOpenid = function (e, t) {
	(e = e || {}).appid && (sa.para.appid = e.appid), sa.openid.getOpenid(function (a) {
		a && sa.setOpenid(a, e.isCoverLogin), t && _.isFunction(t) && t(a), sa.init(e)
	})
}, sa.setWebViewUrl = function (e, t) {
	if (!_.isString(e) || "" === e) return logger.info("error:\u8bf7\u4f20\u5165\u6b63\u786e\u7684 URL \u683c\u5f0f"), !1;
	e = decodeURIComponent(e);
	var a, r = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e), s = r[1] || "", n = r[2] || "", i = r[3] || "", o = "",
		c = sa.store.getDistinctId() || "", u = sa.store.getFirstId() || "";
	_.urlSafeBase64 && _.urlSafeBase64.encode ? c = c ? _.urlSafeBase64.trim(_.urlSafeBase64.encode(_.urlBase64Encode(c))) : "" : this._.rot13obfs && (c = c ? _.rot13obfs(c) : ""), c = encodeURIComponent(c);
	var p = u ? "f" + c : "d" + c;
	t ? (a = i.indexOf("_sasdk"), o = i.indexOf("?") > -1 ? a > -1 ? s + n + "#" + i.substring(1, a) + "_sasdk=" + p : s + n + "#" + i.substring(1) + "&_sasdk=" + p : s + n + "#" + i.substring(1) + "?_sasdk=" + p) : (a = n.indexOf("_sasdk"), o = /^\?(\w)+/.test(n) ? a > -1 ? s + "?" + n.substring(1, a) + "_sasdk=" + p + i : s + "?" + n.substring(1) + "&_sasdk=" + p + i : s + "?" + n.substring(1) + "_sasdk=" + p + i);
	return o
}, _.each(["setProfile", "setOnceProfile", "track", "quick", "incrementProfile", "appendProfile", "login", "logout", "registerApp", "register", "clearAllRegister", "clearAllProps", "clearAppRegister"], function (e) {
	var t = sa[e];
	sa[e] = function () {
		sa.initialState.isComplete ? t.apply(sa, arguments) : sa.initialState.queue.push([e, arguments])
	}
}), _.setQuery = function (e, t) {
	if (e && _.isObject(e) && !_.isEmptyObject(e)) {
		var a = [];
		return _.each(e, function (e, r) {
			"q" === r && _.isString(e) && 0 === e.indexOf("http") || (t ? a.push(r + "=" + e) : a.push(r + "=" + _.decodeURIComponent(e)))
		}), a.join("&")
	}
	return ""
}, _.getUtmFromPage = function () {
	var e = {};
	try {
		var t = getCurrentPages(), a = JSON.parse(JSON.stringify(t[t.length - 1].options));
		for (var r in a) a[r] = _.decodeURIComponent(a[r]);
		e = _.getCustomUtmFromQuery(a, "$", "_", "$")
	} catch (e) {
		logger.info(e)
	}
	return e
}, _.sendPageLeave = function () {
	var e = {};
	try {
		var t = getCurrentPages();
		e = t[t.length - 1]
	} catch (e) {
		logger.info(e)
	}
	var a = e.route;
	if (page_show_time >= 0 && "" !== a) {
		var r = {}, s = _.getPageTitle(a), n = (Date.now() - page_show_time) / 1e3;
		r.$url_query = e.sensors_mp_url_query ? e.sensors_mp_url_query : "", r.$url_path = a, r.$title = s, r.event_duration = n, sa.track("$MPPageLeave", r), page_show_time = -1
	}
};
{
	var mp_proxy = function (e, t, a) {
		var r = sa.autoTrackCustom[a];
		if (e[t]) {
			var s = e[t];
			e[t] = function () {
				"onLaunch" === t && (this[sa.para.name] = sa), !sa.para.autoTrackIsFirst || _.isObject(sa.para.autoTrackIsFirst) && !sa.para.autoTrackIsFirst[a] ? (s.apply(this, arguments), r.apply(this, arguments)) : (!0 === sa.para.autoTrackIsFirst || _.isObject(sa.para.autoTrackIsFirst) && sa.para.autoTrackIsFirst[a]) && (r.apply(this, arguments), s.apply(this, arguments))
			}
		} else e[t] = function () {
			"onLaunch" === t && (this[sa.para.name] = sa), r.apply(this, arguments)
		}
	};

	function clickTrack(e) {
		var t, a = {}, r = {}, s = e.currentTarget || {}, n = e.target || {};
		if (_.isObject(sa.para.framework) && _.isObject(sa.para.framework.taro) && !sa.para.framework.taro.createApp && n.id && s.id && n.id !== s.id) return !1;
		var i = s.dataset || {};
		if (t = e.type, a.$element_id = s.id, a.$element_type = i.type, a.$element_content = i.content, a.$element_name = i.name, _.isObject(e.event_prop) && (r = e.event_prop), t && _.isClick(t)) {
			if (sa.para.preset_events && sa.para.preset_events.collect_element && !1 === sa.para.preset_events.collect_element(arguments[0])) return !1;
			a.$url_path = _.getCurrentPath(), _.setPageRefData(a), a = _.extend(a, r), sa.track("$MPClick", a)
		}
	}

	var click_proxy = function (e, t) {
		var a = e[t];
		e[t] = function () {
			var e = a.apply(this, arguments), t = arguments[0];
			return _.isObject(t) && (sa.para.preset_events.defer_track ? setTimeout(function () {
				clickTrack(t)
			}, 0) : clickTrack(t)), e
		}
	}, tabProxy = function (e) {
		var t = e.onTabItemTap;
		e.onTabItemTap = function (e) {
			t && t.apply(this, arguments);
			var a = {};
			e && (a.$element_content = e.text), a.$element_type = "tabBar", a.$url_path = _.getCurrentPath(), _.setPageRefData(a), sa.track("$MPClick", a)
		}
	}, pageLeaveProxy = function (e) {
		var t = e.onHide;
		e.onHide = function () {
			t && t.apply(this, arguments), _.sendPageLeave()
		};
		var a = e.onUnload;
		e.onUnload = function () {
			a && a.apply(this, arguments), _.sendPageLeave()
		}
	}
}
sa.autoTrackCustom = {
	trackCustom: function (e, t, a) {
		var r = sa.para.autoTrack[e], s = "";
		sa.para.autoTrack && r && ("function" == typeof r ? (s = r(), _.isObject(s) && _.extend(t, s)) : _.isObject(r) && (_.extend(t, r), sa.para.autoTrack[e] = !0), sa.track(a, t))
	}, appLaunch: function (e, t) {
		"object" != typeof this || this.trackCustom || (this[sa.para.name] = sa);
		var a = {};
		e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672a\u53d6\u5230\u503c", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({$url_path: a.$url_path})), _.setShareInfo(e, a);
		var r = _.setUtm(e, a);
		is_first_launch ? (a.$is_first_time = !0, _.isEmptyObject(r.pre1) || sa.setOnceProfile(r.pre1)) : a.$is_first_time = !1, _.setLatestChannel(r.pre2), _.setSfSource(e, a), sa.registerApp({$latest_scene: a.$scene}), a.$url_query = _.setQuery(e.query), _.setPageRefData(a), t ? (a = _.extend(a, t), sa.track("$MPLaunch", a)) : sa.para.autoTrack && sa.para.autoTrack.appLaunch && sa.autoTrackCustom.trackCustom("appLaunch", a, "$MPLaunch")
	}, appShow: function (e, t) {
		var a = {};
		mpshow_time = (new Date).getTime(), e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672a\u53d6\u5230\u503c", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({$url_path: a.$url_path})), !_.isObject(sa.para.preset_properties.location) || "wgs84" !== sa.para.preset_properties.location.type && "gcj02" !== sa.para.preset_properties.location.type || sa.getLocation(), _.setShareInfo(e, a);
		var r = _.setUtm(e, a);
		_.setLatestChannel(r.pre2), _.setSfSource(e, a), _.setPageRefData(a), sa.registerApp({$latest_scene: a.$scene}), a.$url_query = _.setQuery(e.query), t ? (a = _.extend(a, t), sa.track("$MPShow", a)) : sa.para.autoTrack && sa.para.autoTrack.appShow && sa.autoTrackCustom.trackCustom("appShow", a, "$MPShow")
	}, appHide: function (e) {
		var t = (new Date).getTime(), a = {};
		a.$url_path = _.getCurrentPath(), mpshow_time && t - mpshow_time > 0 && (t - mpshow_time) / 36e5 < 24 && (a.event_duration = (t - mpshow_time) / 1e3), _.setPageRefData(a), e ? (a = _.extend(a, e), sa.track("$MPHide", a)) : sa.para.autoTrack && sa.para.autoTrack.appHide && sa.autoTrackCustom.trackCustom("appHide", a, "$MPHide"), sa.sendStrategy.onAppHide()
	}, pageLoad: function (e) {
		current_scene && 1010 === current_scene && e && (e.sampshare && delete e.sampshare, _.delObjectKey(e)), e && _.isObject(e) && (this.sensors_mp_url_query = _.setQuery(e), this.sensors_mp_encode_url_query = _.setQuery(e, !0))
	}, pageShow: function () {
		page_show_time = Date.now();
		var e = {}, t = _.getCurrentPath(), a = _.getPageTitle(t);
		_.setRefPage(), e.$url_path = t, e.$url_query = this.sensors_mp_url_query ? this.sensors_mp_url_query : "", e = _.extend(e, _.getUtmFromPage()), _.setPageRefData(e), _.setPageSfSource(e), a && (e.$title = a), sa.para.onshow ? sa.para.onshow(sa, t, this) : _.isObject(sa.para.autotrack_exclude_page) && _.isArray(sa.para.autotrack_exclude_page.pageShow) && -1 !== sa.para.autotrack_exclude_page.pageShow.indexOf(t) || sa.autoTrackCustom.trackCustom("pageShow", e, "$MPViewScreen"), !0 === sa.para.preset_properties.url_path && sa.registerApp({$url_path: t})
	}, pageShare: function (e) {
		var t = e.onShareAppMessage;
		e.onShareAppMessage = function () {
			share_method = "\u8f6c\u53d1\u6d88\u606f\u5361\u7247";
			var e = t.apply(this, arguments);
			if (sa.para.autoTrack && sa.para.autoTrack.pageShare) {
				var a = {$url_path: _.getCurrentPath(), $share_depth: query_share_depth, $share_method: share_method};
				_.setPageRefData(a), sa.autoTrackCustom.trackCustom("pageShare", a, "$MPShare")
			}
			return sa.para.allow_amend_share_path && ("object" != typeof e && ((e = {}).path = _.getCurrentUrl(this)), "object" != typeof e || void 0 !== e.path && "" !== e.path || (e.path = _.getCurrentUrl(this)), "object" == typeof e && "string" == typeof e.path && (-1 === e.path.indexOf("?") ? e.path = e.path + "?" : "&" !== e.path.slice(-1) && (e.path = e.path + "&")), e.path = e.path + _.getShareInfo()), e
		}
	}, pageShareTimeline: function (e) {
		var t = e.onShareTimeline;
		e.onShareTimeline = function () {
			share_method = "\u670b\u53cb\u5708\u5206\u4eab";
			var e = t.apply(this, arguments);
			if (sa.para.autoTrack && sa.para.autoTrack.pageShare) {
				var a = {$url_path: _.getCurrentPath(), $share_depth: query_share_depth, $share_method: share_method};
				_.setPageRefData(a), sa.autoTrackCustom.trackCustom("pageShare", a, "$MPShare")
			}
			return sa.para.allow_amend_share_path && ("object" != typeof e && (e = {}), "object" == typeof e && void 0 === e.query && (e.query = ""), "object" == typeof e && "string" == typeof e.query && "" !== e.query && "&" !== e.query.slice(-1) && (e.query = e.query + "&"), e.query = e.query + _.getShareInfo()), e
		}
	}, pageAddFavorites: function () {
		var e = {};
		e.$url_path = _.getCurrentPath(), sa.para.autoTrack && sa.para.autoTrack.mpFavorite && sa.autoTrackCustom.trackCustom("mpFavorite", e, "$MPAddFavorites")
	}
}, sa.quick = function () {
	var e = arguments[0], t = arguments[1], a = arguments[2], r = _.isObject(a) ? a : {};
	if ("getAnonymousID" === e) {
		if (!_.isEmptyObject(sa.store._state)) return sa.store._state._first_id || sa.store._state.first_id || sa.store._state._distinct_id || sa.store._state.distinct_id;
		logger.info("\u8bf7\u5148\u521d\u59cb\u5316SDK")
	} else "appLaunch" === e || "appShow" === e ? t ? sa.autoTrackCustom[e](t, r) : logger.info("App\u7684launch\u548cshow\uff0c\u5728sensors.quick\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u4f20\u5165App\u7684options\u53c2\u6570") : "appHide" === e && (r = _.isObject(t) ? t : {}, sa.autoTrackCustom[e](r))
}, sa.appLaunch = function (e, t) {
	var a = {};
	e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672a\u53d6\u5230\u503c", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({$url_path: a.$url_path})), _.setShareInfo(e, a);
	var r = _.setUtm(e, a);
	is_first_launch ? (a.$is_first_time = !0, _.isEmptyObject(r.pre1) || sa.setOnceProfile(r.pre1)) : a.$is_first_time = !1, _.setLatestChannel(r.pre2), _.setSfSource(e, a), sa.registerApp({$latest_scene: a.$scene}), a.$url_query = _.setQuery(e.query), _.setPageRefData(t), _.isObject(t) && (a = _.extend(a, t)), sa.track("$MPLaunch", a)
}, sa.appShow = function (e, t) {
	var a = {};
	mpshow_time = (new Date).getTime(), e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672a\u53d6\u5230\u503c", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({$url_path: a.$url_path})), !_.isObject(sa.para.preset_properties.location) || "wgs84" !== sa.para.preset_properties.location.type && "gcj02" !== sa.para.preset_properties.location.type || sa.getLocation(), _.setShareInfo(e, a);
	var r = _.setUtm(e, a);
	_.setLatestChannel(r.pre2), _.setSfSource(e, a), sa.registerApp({$latest_scene: a.$scene}), a.$url_query = _.setQuery(e.query), _.setPageRefData(a), _.isObject(t) && (a = _.extend(a, t)), sa.track("$MPShow", a)
}, sa.appHide = function (e) {
	var t = (new Date).getTime(), a = {};
	a.$url_path = _.getCurrentPath(), mpshow_time && t - mpshow_time > 0 && (t - mpshow_time) / 36e5 < 24 && (a.event_duration = (t - mpshow_time) / 1e3), _.setPageRefData(a), _.isObject(e) && (a = _.extend(a, e)), sa.track("$MPHide", a), sa.sendStrategy.onAppHide()
}, sa.pageShow = function (e) {
	var t = {}, a = _.getCurrentPath(), r = _.getPageTitle(a), s = {};
	try {
		var n = getCurrentPages();
		s = n[n.length - 1]
	} catch (e) {
		logger.info(e)
	}
	!0 === sa.para.preset_properties.url_path && sa.registerApp({$url_path: a}), r && (t.$title = r), t.$url_path = a, t.$url_query = s.sensors_mp_url_query ? s.sensors_mp_url_query : "", t = _.extend(t, _.getUtmFromPage()), _.setPageSfSource(t), _.setPageRefData(t), _.isObject(e) && (t = _.extend(t, e)), sa.track("$MPViewScreen", t)
};
var oldApp = App;
App = function (e) {
	e[sa.para.name] = sa, oldApp.apply(this, arguments)
}, wx.onAppShow(function (e) {
	if (!sa.para.launched) {
		var t = wx.getLaunchOptionsSync() || {};
		sa.autoTrackCustom.appLaunch(t), sa.para.launched = !0
	}
	sa.autoTrackCustom.appShow(e)
}), wx.onAppHide(function () {
	sa.autoTrackCustom.appHide()
});
var oldPage = Page;
Page = function (e) {
	var t = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(e);
	if (t) for (var a = 0, r = t.length; a < r; a++) click_proxy(e, t[a]);
	sa.para.autoTrack && sa.para.autoTrack.mpClick && tabProxy(e), sa.para.autoTrack && sa.para.autoTrack.pageLeave && pageLeaveProxy(e), mp_proxy(e, "onLoad", "pageLoad"), mp_proxy(e, "onShow", "pageShow"), mp_proxy(e, "onAddToFavorites", "pageAddFavorites"), "function" == typeof e.onShareAppMessage && sa.autoTrackCustom.pageShare(e), "function" == typeof e.onShareTimeline && sa.autoTrackCustom.pageShareTimeline(e), oldPage.apply(this, arguments)
};
var oldComponent = Component;
Component = function (e) {
	try {
		var t = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(e.methods);
		if (t) for (var a = 0, r = t.length; a < r; a++) click_proxy(e.methods, t[a]);
		sa.para.autoTrack && sa.para.autoTrack.mpClick && tabProxy(e.methods), sa.para.autoTrack && sa.para.autoTrack.pageLeave && pageLeaveProxy(e.methods), mp_proxy(e.methods, "onLoad", "pageLoad"), mp_proxy(e.methods, "onShow", "pageShow"), mp_proxy(e.methods, "onAddToFavorites", "pageAddFavorites"), "function" == typeof e.methods.onShareAppMessage && sa.autoTrackCustom.pageShare(e.methods), "function" == typeof e.methods.onShareTimeline && sa.autoTrackCustom.pageShareTimeline(e.methods), oldComponent.apply(this, arguments)
	} catch (e) {
		oldComponent.apply(this, arguments)
	}
}, sa.initial(), module.exports = sa;
