var logFn, sd = {};

function isFunction(e) {
	if (!e) return !1;
	var t = Object.prototype.toString.call(e);
	return "[object Function]" == t || "[object AsyncFunction]" == t
}

function now() {
	return Date.now && isFunction(Date.now) ? Date.now() : (new Date).getTime()
}(function() {
	var e = {
			"function": !0,
			object: !0
		},
		t = e[typeof window] && window || this;
	var r = t.JSON,
		i = t.JSON3,
		n = !1,
		a = function s(r, i) {
			r || (r = t.Object()), i || (i = t.Object());
			var n = r.Number || t.Number,
				a = r.String || t.String,
				o = r.Object || t.Object,
				d = r.Date || t.Date,
				c = r.SyntaxError || t.SyntaxError,
				l = r.TypeError || t.TypeError,
				u = r.Math || t.Math,
				p = r.JSON || t.JSON;
			if ("object" == typeof p && p) return i.stringify = p.stringify, i.parse = p.parse, i.runInContext = s,
				i;
			var g, f = o.prototype,
				_ = f.toString,
				h = f.hasOwnProperty;

			function m(e, t) {
				try {
					e()
				} catch (r) {
					t && t()
				}
			}
			var v = new d(-0xc782b5b800cec);

			function y(e) {
				if (null != y[e]) return y[e];
				var t;
				if ("bug-string-char-index" == e) t = "a" != "a" [0];
				else if ("json" == e) t = y("json-stringify") && y("date-serialization") && y("json-parse");
				else if ("date-serialization" == e) {
					if (t = y("json-stringify") && v) {
						var r = i.stringify;
						m(function() {
							t = '"-271821-04-20T00:00:00.000Z"' == r(new d(-864e13)) &&
								'"+275760-09-13T00:00:00.000Z"' == r(new d(864e13)) &&
								'"-000001-01-01T00:00:00.000Z"' == r(new d(-621987552e5)) &&
								'"1969-12-31T23:59:59.999Z"' == r(new d(-1))
						})
					}
				} else {
					var s, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
					if ("json-stringify" == e) {
						var c = "function" == typeof(r = i.stringify);
						c && ((s = function() {
							return 1
						}).toJSON = s, m(function() {
							c = "0" === r(0) && "0" === r(new n) && '""' == r(new a) && r(_) === g && r(
									g) === g && r() === g && "1" === r(s) && "[1]" == r([s]) &&
								"[null]" == r([g]) && "null" == r(null) && "[null,null,null]" == r([g,
									_, null
								]) && r({
									a: [s, !0, !1, null, "\0\b\n\f\r\t"]
								}) == o && "1" === r(null, s) && "[\n 1,\n 2\n]" == r([1, 2], null, 1)
						}, function() {
							c = !1
						})), t = c
					}
					if ("json-parse" == e) {
						var l, u = i.parse;
						"function" == typeof u && m(function() {
							0 !== u("0") || u(!1) || (s = u(o), (l = 5 == s.a.length && 1 === s.a[0]) && (m(
								function() {
									l = !u('"\t"')
								}), l && m(function() {
								l = 1 !== u("01")
							}), l && m(function() {
								l = 1 !== u("1.")
							})))
						}, function() {
							l = !1
						}), t = l
					}
				}
				return y[e] = !!t
			}
			if (m(function() {
				v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 ==
					v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v
						.getUTCMilliseconds()
			}), y["bug-string-char-index"] = y["date-serialization"] = y.json = y["json-stringify"] = y[
				"json-parse"] = null, !y("json")) {
				var b = y("bug-string-char-index"),
					S = function(t, r) {
						var i, n, a, s = 0;
						for (a in (i = function() {
							this.valueOf = 0
						}).prototype.valueOf = 0, n = new i) h.call(n, a) && s++;
						return i = n = null, s ? S = function(e, t) {
							var r, i, n = "[object Function]" == _.call(e);
							for (r in e) n && "prototype" == r || !h.call(e, r) || (i = "constructor" === r) ||
							t(r);
							(i || h.call(e, r = "constructor")) && t(r)
						} : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable",
							"isPrototypeOf", "hasOwnProperty", "constructor"
						], S = function(t, r) {
							var i, a, s = "[object Function]" == _.call(t),
								o = !s && "function" != typeof t.constructor && e[typeof t
									.hasOwnProperty] && t.hasOwnProperty || h;
							for (i in t) s && "prototype" == i || !o.call(t, i) || r(i);
							for (a = n.length; i = n[--a];) o.call(t, i) && r(i)
						}), S(t, r)
					};
				if (!y("json-stringify") && !y("date-serialization")) {
					var k = {
							92: "\\\\",
							34: '\\"',
							8: "\\b",
							12: "\\f",
							10: "\\n",
							13: "\\r",
							9: "\\t"
						},
						$ = function(e, t) {
							return ("000000" + (t || 0)).slice(-e)
						},
						w = function(e) {
							var t, r, i, n, a, s, o, d, c;
							if (v) t = function(e) {
								r = e.getUTCFullYear(), i = e.getUTCMonth(), n = e.getUTCDate(), s = e
									.getUTCHours(), o = e.getUTCMinutes(), d = e.getUTCSeconds(), c = e
									.getUTCMilliseconds()
							};
							else {
								var l = u.floor,
									p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
									g = function(e, t) {
										return p[t] + 365 * (e - 1970) + l((e - 1969 + (t = +(t > 1))) / 4) - l((e -
											1901 + t) / 100) + l((e - 1601 + t) / 400)
									};
								t = function(e) {
									for (n = l(e / 864e5), r = l(n / 365.2425) + 1970 - 1; g(r + 1, 0) <=
									n; r++);
									for (i = l((n - g(r, 0)) / 30.42); g(r, i + 1) <= n; i++);
									n = 1 + n - g(r, i), s = l((a = (e % 864e5 + 864e5) % 864e5) / 36e5) % 24,
										o = l(a / 6e4) % 60, d = l(a / 1e3) % 60, c = a % 1e3
								}
							}
							return (w = function(e) {
								return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (r <= 0 || r >= 1e4 ? (r < 0 ?
										"-" : "+") + $(6, r < 0 ? -r : r) : $(4, r)) + "-" + $(2, i +
										1) + "-" + $(2, n) + "T" + $(2, s) + ":" + $(2, o) + ":" + $(2, d) +
									"." + $(3, c) + "Z", r = i = n = s = o = d = c = null) : e = null, e
							})(e)
						};
					if (y("json-stringify") && !y("date-serialization")) {
						function P(e) {
							return w(this)
						}
						var O = i.stringify;
						i.stringify = function(e, t, r) {
							var i = d.prototype.toJSON;
							d.prototype.toJSON = P;
							var n = O(e, t, r);
							return d.prototype.toJSON = i, n
						}
					} else {
						var I = function(e) {
								var t = e.charCodeAt(0),
									r = k[t];
								return r || "\\u00" + $(2, t.toString(16))
							},
							j = /[\x00-\x1f\x22\x5c]/g,
							C = function(e) {
								return j.lastIndex = 0, '"' + (j.test(e) ? e.replace(j, I) : e) + '"'
							},
							D = function(e, t, r, i, n, a, s) {
								var o, c, u, p, f, h, v, y, b;
								if (m(function() {
									o = t[e]
								}), "object" == typeof o && o && (o.getUTCFullYear && "[object Date]" == _.call(
									o) && o.toJSON === d.prototype.toJSON ? o = w(o) : "function" ==
									typeof o.toJSON && (o = o.toJSON(e))), r && (o = r.call(t, e, o)), o == g)
									return o === g ? o : "null";
								switch ("object" == (c = typeof o) && (u = _.call(o)), u || c) {
									case "boolean":
									case "[object Boolean]":
										return "" + o;
									case "number":
									case "[object Number]":
										return o > -1 / 0 && o < 1 / 0 ? "" + o : "null";
									case "string":
									case "[object String]":
										return C("" + o)
								}
								if ("object" == typeof o) {
									for (v = s.length; v--;)
										if (s[v] === o) throw l();
									if (s.push(o), p = [], y = a, a += n, "[object Array]" == u) {
										for (h = 0, v = o.length; h < v; h++) f = D(h, o, r, i, n, a, s), p.push(
											f === g ? "null" : f);
										b = p.length ? n ? "[\n" + a + p.join(",\n" + a) + "\n" + y + "]" : "[" + p
											.join(",") + "]" : "[]"
									} else S(i || o, function(e) {
										var t = D(e, o, r, i, n, a, s);
										t !== g && p.push(C(e) + ":" + (n ? " " : "") + t)
									}), b = p.length ? n ? "{\n" + a + p.join(",\n" + a) + "\n" + y + "}" :
										"{" + p.join(",") + "}" : "{}";
									return s.pop(), b
								}
							};
						i.stringify = function(t, r, i) {
							var n, a, s, o;
							if (e[typeof r] && r)
								if ("[object Function]" == (o = _.call(r))) a = r;
								else if ("[object Array]" == o) {
									s = {};
									for (var d, c = 0, l = r.length; c < l;) d = r[c++], "[object String]" != (o = _
										.call(d)) && "[object Number]" != o || (s[d] = 1)
								}
							if (i)
								if ("[object Number]" == (o = _.call(i))) {
									if ((i -= i % 1) > 0)
										for (i > 10 && (i = 10), n = ""; n.length < i;) n += " "
								} else "[object String]" == o && (n = i.length <= 10 ? i : i.slice(0, 10));
							return D("", ((d = {})[""] = t, d), a, s, n, "", [])
						}
					}
				}
				if (!y("json-parse")) {
					var x, L, A = a.fromCharCode,
						E = {
							92: "\\",
							34: '"',
							47: "/",
							98: "\b",
							116: "\t",
							110: "\n",
							102: "\f",
							114: "\r"
						},
						N = function() {
							throw x = L = null, c()
						},
						T = function() {
							for (var e, t, r, i, n, a = L, s = a.length; x < s;) switch (n = a.charCodeAt(x)) {
								case 9:
								case 10:
								case 13:
								case 32:
									x++;
									break;
								case 123:
								case 125:
								case 91:
								case 93:
								case 58:
								case 44:
									return e = b ? a.charAt(x) : a[x], x++, e;
								case 34:
									for (e = "@", x++; x < s;)
										if ((n = a.charCodeAt(x)) < 32) N();
										else if (92 == n) switch (n = a.charCodeAt(++x)) {
											case 92:
											case 34:
											case 47:
											case 98:
											case 116:
											case 110:
											case 102:
											case 114:
												e += E[n], x++;
												break;
											case 117:
												for (t = ++x, r = x + 4; x < r; x++)(n = a.charCodeAt(x)) >=
												48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <=
												70 || N();
												e += A("0x" + a.slice(t, x));
												break;
											default:
												N()
										} else {
											if (34 == n) break;
											for (n = a.charCodeAt(x), t = x; n >= 32 && 92 != n && 34 != n;) n =
												a.charCodeAt(++x);
											e += a.slice(t, x)
										}
									if (34 == a.charCodeAt(x)) return x++, e;
									N();
								default:
									if (t = x, 45 == n && (i = !0, n = a.charCodeAt(++x)), n >= 48 && n <= 57) {
										for (48 == n && (n = a.charCodeAt(x + 1)) >= 48 && n <= 57 && N(), i = !
											1; x < s && (n = a.charCodeAt(x)) >= 48 && n <= 57; x++);
										if (46 == a.charCodeAt(x)) {
											for (r = ++x; r < s && !((n = a.charCodeAt(r)) < 48 || n > 57); r++)
												;
											r == x && N(), x = r
										}
										if (101 == (n = a.charCodeAt(x)) || 69 == n) {
											for (43 != (n = a.charCodeAt(++x)) && 45 != n || x++, r = x; r <
											s && !((n = a.charCodeAt(r)) < 48 || n > 57); r++);
											r == x && N(), x = r
										}
										return +a.slice(t, x)
									}
									i && N();
									var o = a.slice(x, x + 4);
									if ("true" == o) return x += 4, !0;
									if ("fals" == o && 101 == a.charCodeAt(x + 4)) return x += 5, !1;
									if ("null" == o) return x += 4, null;
									N()
							}
							return "$"
						},
						U = function(e) {
							var t, r;
							if ("$" == e && N(), "string" == typeof e) {
								if ("@" == (b ? e.charAt(0) : e[0])) return e.slice(1);
								if ("[" == e) {
									for (t = [];
									     "]" != (e = T());) r ? "," == e ? "]" == (e = T()) && N() : N() : r = !0,
									"," == e && N(), t.push(U(e));
									return t
								}
								if ("{" == e) {
									for (t = {};
									     "}" != (e = T());) r ? "," == e ? "}" == (e = T()) && N() : N() : r = !0,
									"," != e && "string" == typeof e && "@" == (b ? e.charAt(0) : e[0]) &&
									":" == T() || N(), t[e.slice(1)] = U(T());
									return t
								}
								N()
							}
							return e
						},
						R = function(e, t, r) {
							var i = B(e, t, r);
							i === g ? delete e[t] : e[t] = i
						},
						B = function(e, t, r) {
							var i, n = e[t];
							if ("object" == typeof n && n)
								if ("[object Array]" == _.call(n))
									for (i = n.length; i--;) R(_, S, n);
								else S(n, function(e) {
									R(n, e, r)
								});
							return r.call(e, t, n)
						};
					i.parse = function(e, t) {
						var r, i;
						return x = 0, L = "" + e, r = U(T()), "$" != T() && N(), x = L = null, t &&
						"[object Function]" == _.call(t) ? B(((i = {})[""] = r, i), "", t) : r
					}
				}
			}
			return i.runInContext = s, i
		}(t, t.JSON3 = {
			noConflict: function() {
				return n || (n = !0, t.JSON = r, t.JSON3 = i, r = i = null), a
			}
		});
	t.JSON = {
		parse: a.parse,
		stringify: a.stringify
	}
}).call(window),
	function(e) {
		if (e.atob) try {
			e.atob(" ")
		} catch (a) {
			e.atob = (t = e.atob, (r = function(e) {
				return t(String(e).replace(/[\t\n\f\r ]+/g, ""))
			}).original = t, r)
		} else {
			var t, r, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				n = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
			e.btoa = function(e) {
				e = String(e);
				for (var t, r, n, a, s = "", o = 0, d = e.length % 3; o < e.length;) {
					if ((r = e.charCodeAt(o++)) > 255 || (n = e.charCodeAt(o++)) > 255 || (a = e.charCodeAt(
						o++)) > 255) return "";
					s += i.charAt((t = r << 16 | n << 8 | a) >> 18 & 63) + i.charAt(t >> 12 & 63) + i.charAt(
						t >> 6 & 63) + i.charAt(63 & t)
				}
				return d ? s.slice(0, d - 3) + "===".substring(d) : s
			}, e.atob = function(e) {
				if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !n.test(e)) return "";
				e += "==".slice(2 - (3 & e.length));
				for (var t, r, a, s = "", o = 0; o < e.length;) t = i.indexOf(e.charAt(o++)) << 18 | i.indexOf(e
					.charAt(o++)) << 12 | (r = i.indexOf(e.charAt(o++))) << 6 | (a = i.indexOf(e.charAt(
					o++))), s += 64 === r ? String.fromCharCode(t >> 16 & 255) : 64 === a ? String
					.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 &
					255, 255 & t);
				return s
			}
		}
	}(window);
var logger = {
		setup: function(e) {
			logFn = e
		},
		log: function() {
			(logFn || console && console.log || function() {}).apply(null, arguments)
		}
	},
	_localStorage = {
		get: function(e) {
			return window.localStorage.getItem(e)
		},
		parse: function(e) {
			var t;
			try {
				t = JSON.parse(_localStorage.get(e)) || null
			} catch (r) {
				logger.log(r)
			}
			return t
		},
		set: function(e, t) {
			try {
				window.localStorage.setItem(e, t)
			} catch (r) {
				logger.log(r)
			}
		},
		remove: function(e) {
			window.localStorage.removeItem(e)
		},
		isSupport: function() {
			var e = !0;
			try {
				var t = "__local_store_support__",
					r = "testIsSupportStorage";
				_localStorage.set(t, r), _localStorage.get(t) !== r && (e = !1), _localStorage.remove(t)
			} catch (i) {
				e = !1
			}
			return e
		}
	};

function isObject(e) {
	return null != e && "[object Object]" == Object.prototype.toString.call(e)
}
var getRandomBasic = function() {
	var e = (new Date).getTime();
	return function(t) {
		return Math.ceil((e = (9301 * e + 49297) % 233280) / 233280 * t)
	}
}();

function getRandom() {
	if ("function" == typeof Uint32Array) {
		var e = "";
		if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto), isObject(e) &&
		e.getRandomValues) {
			var t = new Uint32Array(1);
			return e.getRandomValues(t)[0] / Math.pow(2, 32)
		}
	}
	return getRandomBasic(1e19) / 1e19
}

function safeJSONParse(e) {
	var t = null;
	try {
		t = JSON.parse(e)
	} catch (r) {}
	return t
}

function ConcurrentStorage(e, t) {
	this.lockGetPrefix = e || "lock-get-prefix", this.lockSetPrefix = t || "lock-set-prefix"
}

function isValidListener(e) {
	return "function" == typeof e || !(!e || "object" != typeof e) && isValidListener(e.listener)
}

function EventEmitter() {
	this._events = {}
}

function _decodeURIComponent(e) {
	var t = e;
	try {
		t = decodeURIComponent(e)
	} catch (r) {
		t = e
	}
	return t
}

function getURLSearchParams(e) {
	for (var t = {}, r = (e = e || "").substring(1).split("&"), i = 0; i < r.length; i++) {
		var n = r[i].indexOf("=");
		if (-1 !== n) {
			var a = r[i].substring(0, n),
				s = r[i].substring(n + 1);
			a = _decodeURIComponent(a), s = _decodeURIComponent(s), t[a] = s
		}
	}
	return t
}

function isString(e) {
	return "[object String]" == Object.prototype.toString.call(e)
}

function trim(e) {
	return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}

function urlParse(e) {
	var t = function(e) {
		this._fields = {
			Username: 4,
			Password: 5,
			Port: 7,
			Protocol: 2,
			Host: 6,
			Path: 8,
			URL: 0,
			QueryString: 9,
			Fragment: 10
		}, this._values = {}, this._regex =
			/^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, void 0 !== e &&
		this._parse(e)
	};
	return t.prototype.setUrl = function(e) {
		this._parse(e)
	}, t.prototype._initValues = function() {
		for (var e in this._fields) this._values[e] = ""
	}, t.prototype.addQueryString = function(e) {
		if ("object" != typeof e) return !1;
		var t = this._values.QueryString || "";
		for (var r in e) t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) :
			"&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];
		this._values.QueryString = t
	}, t.prototype.getUrl = function() {
		var e = "";
		return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values
			.Path, e += this._values.QueryString ? "?" + this._values.QueryString : "", e += this._values.Fragment ?
			"#" + this._values.Fragment : ""
	}, t.prototype._parse = function(e) {
		this._initValues();
		var t = this._regex.exec(e);
		t || logger.log("URLParser::_parse -> Invalid URL");
		var r = e.split("#"),
			i = r[0],
			n = r.slice(1).join("#");
		for (var a in t = this._regex.exec(i), this._fields) "undefined" != typeof t[this._fields[a]] && (this
			._values[a] = t[this._fields[a]]);
		this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values
			.Protocol + "://" + this._values.Hostname, this._values.Fragment = n
	}, new t(e)
}

function _URL(e) {
	var t, r = {};
	if ("function" == typeof window.URL && function() {
		try {
			return "https://www.sensorsdata.cn/" === new URL("https://www.sensorsdata.cn/").href
		} catch (e) {
			return !1
		}
	}())(r = new URL(e)).searchParams || (r.searchParams = (t = getURLSearchParams(r.search), {
		get: function(e) {
			return t[e]
		}
	}));
	else {
		isString(e) || (e = String(e)), e = trim(e);
		if (!1 === /^https?:\/\/.+/.test(e)) return void logger.log("Invalid URL");
		var i = urlParse(e);
		r.hash = i._values.Fragment, r.host = i._values.Host ? i._values.Host + (i._values.Port ? ":" + i._values.Port :
			"") : "", r.href = i._values.URL, r.password = i._values.Password, r.pathname = i._values.Path, r.port =
			i._values.Port, r.search = i._values.QueryString ? "?" + i._values.QueryString : "", r.username = i._values
			.Username, r.hostname = i._values.Hostname, r.protocol = i._values.Protocol ? i._values.Protocol + ":" : "",
			r.origin = i._values.Origin ? i._values.Origin + (i._values.Port ? ":" + i._values.Port : "") : "", r
			.searchParams = function() {
			var e = getURLSearchParams("?" + i._values.QueryString);
			return {
				get: function(t) {
					return e[t]
				}
			}
		}()
	}
	return r
}
ConcurrentStorage.prototype.get = function(e, t, r, i) {
	if (!e) throw new Error("key is must");
	t = t || 1e4, r = r || 1e3, i = i || function() {};
	var n = this.lockGetPrefix + e,
		a = _localStorage.get(n),
		s = String(getRandom());
	if (a && (a = safeJSONParse(a) || {
		randomNum: 0,
		expireTime: 0
	}).expireTime > now()) return i(null);
	_localStorage.set(n, JSON.stringify({
		randomNum: s,
		expireTime: now() + t
	})), setTimeout(function() {
		(a = safeJSONParse(_localStorage.get(n)) || {
			randomNum: 0,
			expireTime: 0
		}) && a.randomNum === s ? (i(_localStorage.get(e)), _localStorage.remove(e), _localStorage.remove(
			n)) : i(null)
	}, r)
}, ConcurrentStorage.prototype.set = function(e, t, r, i, n) {
	if (!e || !t) throw new Error("key and val is must");
	r = r || 1e4, i = i || 1e3, n = n || function() {};
	var a = this.lockSetPrefix + e,
		s = _localStorage.get(a),
		o = String(getRandom());
	if (s && (s = safeJSONParse(s) || {
		randomNum: 0,
		expireTime: 0
	}).expireTime > now()) return n({
		status: "fail",
		reason: "This key is locked"
	});
	_localStorage.set(a, JSON.stringify({
		randomNum: o,
		expireTime: now() + r
	})), setTimeout(function() {
		(s = safeJSONParse(_localStorage.get(a)) || {
			randomNum: 0,
			expireTime: 0
		}).randomNum === o ? _localStorage.set(e, t) && n({
			status: "success"
		}) : n({
			status: "fail",
			reason: "This key is locked"
		})
	}, i)
}, EventEmitter.prototype.on = function(e, t) {
	if (!e || !t) return !1;
	if (!isValidListener(t)) throw new Error("listener must be a function");
	this._events[e] = this._events[e] || [];
	var r = "object" == typeof t;
	return this._events[e].push(r ? t : {
		listener: t,
		once: !1
	}), this
}, EventEmitter.prototype.prepend = function(e, t) {
	if (!e || !t) return !1;
	if (!isValidListener(t)) throw new Error("listener must be a function");
	this._events[e] = this._events[e] || [];
	var r = "object" == typeof t;
	return this._events[e].unshift(r ? t : {
		listener: t,
		once: !1
	}), this
}, EventEmitter.prototype.prependOnce = function(e, t) {
	return this.prepend(e, {
		listener: t,
		once: !0
	})
}, EventEmitter.prototype.once = function(e, t) {
	return this.on(e, {
		listener: t,
		once: !0
	})
}, EventEmitter.prototype.off = function(e, t) {
	var r = this._events[e];
	if (!r) return !1;
	if ("number" == typeof t) r.splice(t, 1);
	else if ("function" == typeof t)
		for (var i = 0, n = r.length; i < n; i++) r[i] && r[i].listener === t && r.splice(i, 1);
	return this
}, EventEmitter.prototype.emit = function(e, t) {
	var r = this._events[e];
	if (!r) return !1;
	for (var i = 0; i < r.length; i++) {
		var n = r[i];
		n && (n.listener.call(this, t || {}), n.once && this.off(e, i))
	}
	return this
}, EventEmitter.prototype.removeAllListeners = function(e) {
	e && this._events[e] ? this._events[e] = [] : this._events = {}
}, EventEmitter.prototype.listeners = function(e) {
	return e && "string" == typeof e ? this._events[e] : this._events
};
var UUID = function() {
	var e = function() {
		for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
		return e.toString(16) + t.toString(16)
	};
	return function() {
		var t = String(screen.height * screen.width);
		t = t && /\d{5,}/.test(t) ? t.toString(16) : String(31242 * getRandom()).replace(".", "").slice(0, 8);
		var r = e() + "-" + getRandom().toString(16).replace(".", "") + "-" + function() {
			var e, t, r = navigator.userAgent,
				i = [],
				n = 0;

			function a(e, t) {
				var r, n = 0;
				for (r = 0; r < t.length; r++) n |= i[r] << 8 * r;
				return e ^ n
			}
			for (e = 0; e < r.length; e++) t = r.charCodeAt(e), i.unshift(255 & t), i.length >= 4 && (n = a(
				n, i), i = []);
			return i.length > 0 && (n = a(n, i)), n.toString(16)
		}() + "-" + t + "-" + e();
		return r || (String(getRandom()) + String(getRandom()) + String(getRandom())).slice(2, 15)
	}
}();

function isElement(e) {
	return !(!e || 1 !== e.nodeType)
}

function isUndefined(e) {
	return void 0 === e
}

function isArray(e) {
	return Array.isArray && isFunction(isArray) ? Array.isArray(e) : "[object Array]" === Object.prototype.toString
		.call(e)
}

function ry(e) {
	return new DomElementInfo(e)
}
var DomElementInfo = function(e) {
		this.ele = e
	},
	siblings = function(e, t) {
		for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
		return r
	};

function addEvent(e, t, r, i) {
	function n(e) {
		return e && (e.preventDefault = n.preventDefault, e.stopPropagation = n.stopPropagation, e._getPath = n
			._getPath), e
	}
	n._getPath = function() {
		return this.path || this.composedPath && this.composedPath() || ry(this.target).getParents()
	}, n.preventDefault = function() {
		this.returnValue = !1
	}, n.stopPropagation = function() {
		this.cancelBubble = !0
	};
	(function(e, t, r) {
		if (i === undefined && "click" === t && (i = !0), e && e.addEventListener) e.addEventListener(t, function(
			e) {
			e._getPath = n._getPath, r.call(this, e)
		}, i);
		else {
			var a = "on" + t,
				s = e[a];
			e[a] = function(e, t, r, i) {
				return function(a) {
					if (!(a = a || n(window.event))) return undefined;
					a.target = a.srcElement;
					var s, o, d = !0;
					return "function" == typeof r && (s = r(a)), o = t.call(e, a), "beforeunload" !== i ? (!
						1 !== s && !1 !== o || (d = !1), d) : void 0
				}
			}(e, r, s, t)
		}
	}).apply(null, arguments)
}

function addHashEvent(e) {
	var t = "pushState" in window.history ? "popstate" : "hashchange";
	addEvent(window, t, e)
}

function xhr(e) {
	if (e) return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ?
		new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
	if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest;
	if (window.ActiveXObject) try {
		return new ActiveXObject("Msxml2.XMLHTTP")
	} catch (t) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {
			logger.log(t)
		}
	}
}
DomElementInfo.prototype = {
	addClass: function(e) {
		return -1 === (" " + this.ele.className + " ").indexOf(" " + e + " ") && (this.ele.className = this.ele
			.className + ("" === this.ele.className ? "" : " ") + e), this
	},
	removeClass: function(e) {
		var t = " " + this.ele.className + " ";
		return -1 !== t.indexOf(" " + e + " ") && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -
			1)), this
	},
	hasClass: function(e) {
		return -1 !== (" " + this.ele.className + " ").indexOf(" " + e + " ")
	},
	attr: function(e, t) {
		return "string" == typeof e && isUndefined(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t =
			String(t), this.ele.setAttribute(e, t)), this)
	},
	offset: function() {
		var e = this.ele.getBoundingClientRect();
		if (e.width || e.height) {
			var t = this.ele.ownerDocument.documentElement;
			return {
				top: e.top + window.pageYOffset - t.clientTop,
				left: e.left + window.pageXOffset - t.clientLeft
			}
		}
		return {
			top: 0,
			left: 0
		}
	},
	getSize: function() {
		if (!window.getComputedStyle) return {
			width: this.ele.offsetWidth,
			height: this.ele.offsetHeight
		};
		try {
			var e = this.ele.getBoundingClientRect();
			return {
				width: e.width,
				height: e.height
			}
		} catch (t) {
			return {
				width: 0,
				height: 0
			}
		}
	},
	getStyle: function(e) {
		return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView
			.getComputedStyle(this.ele, null).getPropertyValue(e)
	},
	wrap: function(e) {
		var t = document.createElement(e);
		return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), ry(t)
	},
	getCssStyle: function(e) {
		var t = this.ele.style.getPropertyValue(e);
		if (t) return t;
		var r = null;
		if ("function" == typeof window.getMatchedCSSRules && (r = window.getMatchedCSSRules(this.ele)), !r || !
			isArray(r)) return null;
		for (var i = r.length - 1; i >= 0; i--) {
			if (t = r[i].style.getPropertyValue(e)) return t
		}
	},
	sibling: function(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	},
	next: function() {
		return this.sibling(this.ele, "nextSibling")
	},
	prev: function() {
		return this.sibling(this.ele, "previousSibling")
	},
	siblings: function() {
		return siblings((this.ele.parentNode || {}).firstChild, this.ele)
	},
	children: function() {
		return siblings(this.ele.firstChild)
	},
	parent: function() {
		var e = this.ele.parentNode;
		return ry(e = e && 11 !== e.nodeType ? e : null)
	},
	previousElementSibling: function() {
		var e = this.ele;
		if ("previousElementSibling" in document.documentElement) return ry(e.previousElementSibling);
		for (; e = e.previousSibling;)
			if (1 === e.nodeType) return ry(e);
		return ry(null)
	},
	getSameTypeSiblings: function() {
		for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), i = [], n = 0; n < t.children
			.length; n++) {
			var a = t.children[n];
			1 === a.nodeType && a.tagName.toLowerCase() === r && i.push(t.children[n])
		}
		return i
	},
	getParents: function() {
		try {
			var e = this.ele;
			if (!isElement(e)) return [];
			var t = [e];
			if (null === e || null === e.parentElement) return [];
			for (; null !== e.parentElement;) e = e.parentElement, t.push(e);
			return t
		} catch (r) {
			return []
		}
	}
};
var nativeForEach = Array.prototype.forEach,
	hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function each(e, t, r) {
	if (null == e) return !1;
	if (nativeForEach && e.forEach === nativeForEach) e.forEach(t, r);
	else if (isArray(e))
		for (var i = 0, n = e.length; i < n; i++) i in e && t.call(r, e[i], i, e);
	else
		for (var a in e) hasOwnProperty$2.call(e, a) && t.call(r, e[a], a, e)
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function extend(e) {
	return each(Array.prototype.slice.call(arguments, 1), function(t) {
		for (var r in t) hasOwnProperty$1.call(t, r) && void 0 !== t[r] && (e[r] = t[r])
	}), e
}

function ajax(e) {
	function t(e) {
		if (!e) return "";
		try {
			return JSON.parse(e)
		} catch (t) {
			return {}
		}
	}
	e.timeout = e.timeout || 2e4, e.credentials = "undefined" == typeof e.credentials || e.credentials;
	var r = xhr(e.cors);
	if (!r) return !1;
	e.type || (e.type = e.data ? "POST" : "GET");
	var i, n = (e = extend({
			success: function() {},
			error: function() {}
		}, e)).success,
		a = e.error;
	e.success = function(e) {
		n(e), i && (clearTimeout(i), i = null)
	}, e.error = function(e) {
		a(e), i && (clearTimeout(i), i = null)
	}, i = setTimeout(function() {
		! function() {
			try {
				r && "object" == typeof r && r.abort && r.abort()
			} catch (t) {
				logger.log(t)
			}
			i && (clearTimeout(i), i = null, e.error && e.error(), r.onreadystatechange = null, r.onload = null,
				r.onerror = null)
		}()
	}, e.timeout), "undefined" != typeof XDomainRequest && r instanceof XDomainRequest && (r.onload = function() {
		e.success && e.success(t(r.responseText)), r.onreadystatechange = null, r.onload = null, r.onerror =
			null
	}, r.onerror = function() {
		e.error && e.error(t(r.responseText), r.status), r.onreadystatechange = null, r.onerror = null, r
			.onload = null
	}), r.onreadystatechange = function() {
		try {
			4 == r.readyState && (r.status >= 200 && r.status < 300 || 304 == r.status ? e.success(t(r
				.responseText)) : e.error(t(r.responseText), r.status), r.onreadystatechange = null, r
				.onload = null)
		} catch (i) {
			r.onreadystatechange = null, r.onload = null
		}
	}, r.open(e.type, e.url, !0);
	try {
		e.credentials && (r.withCredentials = !0), isObject(e.header) && each(e.header, function(e, t) {
			r.setRequestHeader && r.setRequestHeader(t, e)
		}), e.data && (e.cors || r.setRequestHeader && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
			"application/json" === e.contentType ? r.setRequestHeader && r.setRequestHeader("Content-type",
				"application/json; charset=UTF-8") : r.setRequestHeader && r.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded"))
	} catch (s) {
		logger.log(s)
	}
	r.send(e.data || null)
}

function map(e, t) {
	var r = [];
	return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (each(e, function(e, i,
	                                                                                                           n) {
		r.push(t(e, i, n))
	}), r)
}

function base64Decode(e) {
	var t = [];
	try {
		t = map(atob(e).split(""), function(e) {
			return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
		})
	} catch (r) {
		t = []
	}
	try {
		return decodeURIComponent(t.join(""))
	} catch (r) {
		return t.join("")
	}
}

function base64Encode(e) {
	var t = "";
	try {
		t = btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
			return String.fromCharCode("0x" + t)
		}))
	} catch (r) {
		t = e
	}
	return t
}

function bindReady(e, t) {
	t = t || window;
	var r = !1,
		i = !0,
		n = t.document,
		a = n.documentElement,
		s = n.addEventListener,
		o = s ? "addEventListener" : "attachEvent",
		d = s ? "removeEventListener" : "detachEvent",
		c = s ? "" : "on",
		l = function(i) {
			"readystatechange" == i.type && "complete" != n.readyState || (("load" == i.type ? t : n)[d](c + i.type, l,
				!1), !r && (r = !0) && e.call(t, i.type || i))
		},
		u = function() {
			try {
				a.doScroll("left")
			} catch (e) {
				return void setTimeout(u, 50)
			}
			l("poll")
		};
	if ("complete" == n.readyState) e.call(t, "lazy");
	else {
		if (!s && a.doScroll) {
			try {
				i = !t.frameElement
			} catch (p) {
				logger.log(p)
			}
			i && u()
		}
		n[o](c + "DOMContentLoaded", l, !1), n[o](c + "readystatechange", l, !1), t[o](c + "load", l, !1)
	}
}
var cookie = {
	get: function(e) {
		for (var t = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
			for (var n = r[i];
			     " " == n.charAt(0);) n = n.substring(1, n.length);
			if (0 == n.indexOf(t)) return _decodeURIComponent(n.substring(t.length, n.length))
		}
		return null
	},
	set: function(e, t, r, i, n, a, s) {
		var o = s,
			d = "",
			c = "",
			l = "";
		if (0 !== (r = null == r ? 73e3 : r)) {
			var u = new Date;
			"s" === String(r).slice(-1) ? u.setTime(u.getTime() + 1e3 * Number(String(r).slice(0, -1))) : u
				.setTime(u.getTime() + 24 * r * 60 * 60 * 1e3), d = "; expires=" + u.toGMTString()
		}

		function p(e) {
			return !!e && e.replace(/\r\n/g, "")
		}
		isString(n) && "" !== n && (l = "; SameSite=" + n), a && (c = "; secure");
		var g = "",
			f = "",
			_ = "";
		e && (g = p(e)), t && (f = p(t)), o && (_ = p(o)), g && f && (document.cookie = g + "=" +
			encodeURIComponent(f) + d + "; path=/" + _ + l + c)
	},
	remove: function(e, t) {
		this.set(e, "1", -1, t)
	},
	isSupport: function(e, t) {
		e = e || "cookie_support_test", t = t || "1";
		var r = this;
		return navigator.cookieEnabled && (r.set(e, t), r.get(e) === t && (r.remove(e), !0))
	}
};

function coverExtend(e) {
	return each(Array.prototype.slice.call(arguments, 1), function(t) {
		for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
	}), e
}

function _decodeURI(e) {
	var t = e;
	try {
		t = decodeURI(e)
	} catch (r) {
		t = e
	}
	return t
}

function dfmapping(e) {
	var t = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",
		r = t.length - 1,
		i = {},
		n = 0;
	for (n = 0; n < t.length; n++) i[t.charAt(n)] = t.charAt(r - n);
	var a = "";
	for (n = 0; n < e.length; n++) e.charAt(n) in i ? a += i[e.charAt(n)] : a += e.charAt(n);
	return a
}

function isDate(e) {
	return "[object Date]" == Object.prototype.toString.call(e)
}

function formatDate(e) {
	function t(e) {
		return e < 10 ? "0" + e : e
	}
	return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e
		.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
}

function encodeDates(e) {
	return each(e, function(t, r) {
		isDate(t) ? e[r] = formatDate(t) : isObject(t) && (e[r] = encodeDates(t))
	}), e
}

function extend2Lev(e) {
	return each(Array.prototype.slice.call(arguments, 1), function(t) {
		for (var r in t) void 0 !== t[r] && (isObject(t[r]) && isObject(e[r]) ? extend(e[r], t[r]) : e[r] = t[
			r])
	}), e
}

function filter(e, t, r) {
	var i = Object.prototype.hasOwnProperty;
	if (e.filter) return e.filter(t);
	for (var n = [], a = 0; a < e.length; a++)
		if (i.call(e, a)) {
			var s = e[a];
			t.call(r, s, a, e) && n.push(s)
		} return n
}

function formatJsonString(e) {
	try {
		return JSON.stringify(e, null, "  ")
	} catch (t) {
		return JSON.stringify(e)
	}
}

function getSafeHostname(e) {
	return "string" == typeof e && e.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/) ? e : ""
}

function getCookieTopLevelDomain(e, t) {
	t = t || "domain_test";
	var r = getSafeHostname(e = e || location.hostname),
		i = r.split(".");
	if (isArray(i) && i.length >= 2 && !/^(\d+\.)+\d+$/.test(r))
		for (var n = "." + i.splice(i.length - 1, 1); i.length > 0;)
			if (n = "." + i.splice(i.length - 1, 1) + n, document.cookie = t + "=true; path=/; domain=" + n, -1 !==
			document.cookie.indexOf(t + "=true")) {
				var a = new Date;
				return a.setTime(a.getTime() - 1e3), document.cookie = t + "=true; expires=" + a.toGMTString() +
					"; path=/; SameSite=Lax; domain=" + n, n
			} return ""
}

function getDomBySelector(e) {
	if (!isString(e)) return null;
	var t, r = e.split(">");
	return (t = function i(e) {
		var t, n = r.shift();
		if (!n) return e;
		try {
			t = function(e, t) {
				var r;
				if ("body" === (e = trim(e))) return document.getElementsByTagName("body")[0];
				if (0 === e.indexOf("#")) e = e.slice(1), r = document.getElementById(e);
				else if (e.indexOf(":nth-of-type") > -1) {
					var i = e.split(":nth-of-type");
					if (!i[0] || !i[1]) return null;
					var n = i[0],
						a = i[1].match(/\(([0-9]+)\)/);
					if (!a || !a[1]) return null;
					var s = Number(a[1]);
					if (!(isElement(t) && t.children && t.children.length > 0)) return null;
					for (var o = t.children, d = 0; d < o.length; d++)
						if (isElement(o[d]) && o[d].tagName.toLowerCase() === n && 0 == --s) {
							r = o[d];
							break
						} if (s > 0) return null
				}
				return r || null
			}(n, e)
		} catch (a) {
			logger.log(a)
		}
		return t && isElement(t) ? i(t) : null
	}()) && isElement(t) ? t : null
}

function getElementContent(e, t) {
	var r = "",
		i = "";
	return e.textContent ? r = trim(e.textContent) : e.innerText && (r = trim(e.innerText)), r && (r = r.replace(
		/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), i = r || "", "input" !== t && "INPUT" !== t || (
		i = e.value || ""), i
}

function getHostname(e, t) {
	t && "string" == typeof t || (t = "hostname\u89e3\u6790\u5f02\u5e38");
	var r = null;
	try {
		r = _URL(e).hostname
	} catch (i) {
		logger.log("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")
	}
	return r || t
}

function getIOSVersion() {
	try {
		var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
		return e && e[1] ? Number.parseInt(e[1], 10) : ""
	} catch (t) {
		return ""
	}
}

function getQueryParamsFromUrl(e) {
	var t = {},
		r = e.split("?")[1] || "";
	return r && (t = getURLSearchParams("?" + r)), t
}

function getQueryParam(e, t) {
	var r = _URL(e),
		i = r.searchParams.get(t) || "";
	if (!i) {
		var n = r.hash;
		if (n) i = getQueryParamsFromUrl(n)[t] || ""
	}
	return i
}

function mediaQueriesSupported() {
	return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
}

function getScreenOrientation() {
	var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
		t = "\u672a\u53d6\u5230\u503c";
	if (e) t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
	else if (mediaQueriesSupported()) {
		var r = window.matchMedia || window.msMatchMedia;
		r("(orientation: landscape)").matches ? t = "landscape" : r("(orientation: portrait)").matches && (t =
			"portrait")
	}
	return t
}

function getUA() {
	var e, t = {},
		r = navigator.userAgent.toLowerCase();
	return (e = r.match(/ qq\/([\d.]+)/)) ? t.qqBuildinBrowser = Number(e[1].split(".")[0]) : (e = r.match(
		/mqqbrowser\/([\d.]+)/)) ? t.qqBrowser = Number(e[1].split(".")[0]) : (e = r.match(/opera.([\d.]+)/)) ? t
		.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e =
		r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t
		.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[
		0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(
		/trident\/([\d.]+)/)) && (t.ie = 11), t
}

function getURL(e) {
	return isString(e) ? _decodeURI(e = trim(e)) : _decodeURI(location.href)
}

function getURLPath(e) {
	return isString(e) ? _decodeURI(e = trim(e)) : _decodeURI(location.pathname)
}

function hasAttribute(e, t) {
	return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) :
		void 0
}

function hasAttributes(e, t) {
	if ("string" == typeof t) return hasAttribute(e, t);
	if (isArray(t)) {
		for (var r = !1, i = 0; i < t.length; i++) {
			if (hasAttribute(e, t[i])) {
				r = !0;
				break
			}
		}
		return r
	}
}

function hashCode(e) {
	if ("string" != typeof e) return 0;
	var t = 0;
	if (0 == e.length) return t;
	for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;
	return t
}

function hashCode53(e) {
	var t = 9007199254740992,
		r = -9007199254740992,
		i = 0;
	if (e.length > 0)
		for (var n = e.split(""), a = 0; a < n.length; a++) {
			var s = n[a].charCodeAt(),
				o = 31 * i + s;
			if (o > t)
				for (i = r + i;
				     (o = 31 * i + s) < r;) i = i / 2 + s;
			if (o < r)
				for (i = t + i;
				     (o = 31 * i + s) > t;) i = i / 2 + s;
			i = 31 * i + s
		}
	return i
}

function indexOf(e, t) {
	var r = e.indexOf;
	if (r) return r.call(e, t);
	for (var i = 0; i < e.length; i++)
		if (t === e[i]) return i;
	return -1
}

function inherit(e, t) {
	return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
}
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArguments(e) {
	return !(!e || !hasOwnProperty.call(e, "callee"))
}

function isBoolean(e) {
	return "[object Boolean]" == Object.prototype.toString.call(e)
}

function isEmptyObject(e) {
	if (isObject(e)) {
		for (var t in e)
			if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
		return !0
	}
	return !1
}

function isHttpUrl(e) {
	if ("string" != typeof e) return !1;
	return !1 !== /^https?:\/\/.+/.test(e) || (logger.log("Invalid URL"), !1)
}

function isIOS() {
	return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
}

function isJSONString(e) {
	try {
		JSON.parse(e)
	} catch (t) {
		return !1
	}
	return !0
}

function isNumber(e) {
	return "[object Number]" == Object.prototype.toString.call(e) && /[\d\.]+/.test(String(e))
}

function isSupportBeaconSend() {
	var e = !1;
	if ("object" != typeof navigator || "function" != typeof navigator.sendBeacon) return e;
	var t = getUA(),
		r = navigator.userAgent.toLowerCase();
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var i = (r.match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".").split(".");
		"undefined" == typeof t.safari && (t.safari = i[0]), i[0] && (t.qqBuildinBrowser || t.qqBrowser) ? e = !1 : i[
			0] && i[0] < 13 ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (e = !0) : (t
			.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (e = !0)
	} else(t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (e = !0);
	return e
}

function isSupportCors() {
	return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest || "undefined" !=
		typeof XDomainRequest)
}

function jsonp(e) {
	if (!isObject(e) || !isString(e.callbackName)) return logger.log("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"), !1;
	e.success = isFunction(e.success) ? e.success : function() {}, e.error = isFunction(e.error) ? e.error :
		function() {}, e.data = e.data || "";
	var t = document.createElement("script"),
		r = document.getElementsByTagName("head")[0],
		i = null,
		n = !1;
	if (r.appendChild(t), isNumber(e.timeout) && (i = setTimeout(function() {
		if (n) return !1;
		e.error("timeout"), window[e.callbackName] = function() {
			logger.log("call jsonp error")
		}, i = null, r.removeChild(t), n = !0
	}, e.timeout)), window[e.callbackName] = function() {
		clearTimeout(i), i = null, e.success.apply(null, arguments), window[e.callbackName] = function() {
			logger.log("call jsonp error")
		}, r.removeChild(t)
	}, e.url.indexOf("?") > -1 ? e.url += "&callbackName=" + e.callbackName : e.url += "?callbackName=" + e
		.callbackName, isObject(e.data)) {
		var a = [];
		each(e.data, function(e, t) {
			a.push(t + "=" + e)
		}), e.data = a.join("&"), e.url += "&" + e.data
	}
	t.onerror = function(a) {
		if (n) return !1;
		window[e.callbackName] = function() {
			logger.log("call jsonp error")
		}, clearTimeout(i), i = null, r.removeChild(t), e.error(a), n = !0
	}, t.src = e.url
}

function listenPageState(e) {
	({
		visibleHandler: isFunction(e.visible) ? e.visible : function() {},
		hiddenHandler: isFunction(e.hidden) ? e.hidden : function() {},
		visibilityChange: null,
		hidden: null,
		isSupport: function() {
			return "undefined" != typeof document[this.hidden]
		},
		init: function() {
			"undefined" != typeof document.hidden ? (this.hidden = "hidden", this.visibilityChange =
				"visibilitychange") : "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden",
				this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (
				this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : "undefined" !=
				typeof document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange =
					"webkitvisibilitychange"), this.listen()
		},
		listen: function() {
			if (this.isSupport()) {
				var e = this;
				addEvent(document, this.visibilityChange, function() {
					document[e.hidden] ? e.hiddenHandler() : e.visibleHandler()
				}, 1)
			} else addEvent(window, "focus", this.visibleHandler), addEvent(window, "blur", this.hiddenHandler)
		}
	}).init()
}

function loadScript(e) {
	e = extend({
		success: function() {},
		error: function() {},
		appendCall: function(e) {
			document.getElementsByTagName("head")[0].appendChild(e)
		}
	}, e);
	var t = null;
	"css" === e.type && ((t = document.createElement("link")).rel = "stylesheet", t.href = e.url), "js" === e.type && ((
		t = document.createElement("script")).async = "async", t.setAttribute("charset", "UTF-8"), t.src = e
		.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function() {
		this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(), t
			.onload = t.onreadystatechange = null)
	}, t.onerror = function() {
		e.error(), t.onerror = null
	}, e.appendCall(t)
}

function removeScriptProtocol(e) {
	if ("string" != typeof e) return "";
	for (var t = /^\s*javascript/i; t.test(e);) e = e.replace(t, "");
	return e
}

function rot13obfs(e, t) {
	t = "number" == typeof t ? t : 13;
	for (var r = (e = String(e)).split(""), i = 0, n = r.length; i < n; i++) {
		r[i].charCodeAt(0) < 126 && (r[i] = String.fromCharCode((r[i].charCodeAt(0) + t) % 126))
	}
	return r.join("")
}

function rot13defs(e) {
	return rot13obfs(e = String(e), 113)
}

function searchObjDate(e) {
	(isObject(e) || isArray(e)) && each(e, function(t, r) {
		isObject(t) || isArray(t) ? searchObjDate(e[r]) : isDate(t) && (e[r] = formatDate(t))
	})
}
var _sessionStorage = {
	isSupport: function() {
		var e = !0,
			t = "testIsSupportStorage";
		try {
			sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem("__session_storage_support__",
				t), sessionStorage.removeItem("__session_storage_support__", t), e = !0) : e = !1
		} catch (r) {
			e = !1
		}
		return e
	}
};

function setCssStyle(e) {
	var t = document.createElement("style");
	t.type = "text/css";
	try {
		t.appendChild(document.createTextNode(e))
	} catch (n) {
		t.styleSheet.cssText = e
	}
	var r = document.getElementsByTagName("head")[0],
		i = document.getElementsByTagName("script")[0];
	r ? r.children.length ? r.insertBefore(t, r.children[0]) : r.appendChild(t) : i.parentNode.insertBefore(t, i)
}

function strToUnicode(e) {
	if ("string" != typeof e) return logger.log("\u8f6c\u6362unicode\u9519\u8bef", e), e;
	for (var t = "", r = 0; r < e.length; r++) t += "\\" + e.charCodeAt(r).toString(16);
	return t
}

function throttle(e, t, r) {
	var i, n, a, s = null,
		o = 0;
	r || (r = {});
	var d = function() {
		o = !1 === r.leading ? 0 : now(), s = null, a = e.apply(i, n), s || (i = n = null)
	};
	return function() {
		var c = now();
		o || !1 !== r.leading || (o = c);
		var l = t - (c - o);
		return i = this, n = arguments, l <= 0 || l > t ? (s && (clearTimeout(s), s = null), o = c, a = e.apply(i,
			n), s || (i = n = null)) : s || !1 === r.trailing || (s = setTimeout(d, l)), a
	}
}

function values(e) {
	var t = [];
	return null == e ? t : (each(e, function(e) {
		t[t.length] = e
	}), t)
}

function toArray(e) {
	return e ? e.toArray ? e.toArray() : isArray(e) || isArguments(e) ? Array.prototype.slice.call(e) : values(e) : []
}

function unique(e) {
	for (var t, r = [], i = {}, n = 0; n < e.length; n++)(t = e[n]) in i || (i[t] = !0, r.push(t));
	return r
}
var ENC = {
		"+": "-",
		"/": "_",
		"=": "."
	},
	DEC = {
		"-": "+",
		_: "/",
		".": "="
	},
	urlSafeBase64 = {
		encode: function(e) {
			return e.replace(/[+\/=]/g, function(e) {
				return ENC[e]
			})
		},
		decode: function(e) {
			return e.replace(/[-_.]/g, function(e) {
				return DEC[e]
			})
		},
		trim: function(e) {
			return e.replace(/[.=]{1,2}$/, "")
		},
		isBase64: function(e) {
			return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
		},
		isUrlSafeBase64: function(e) {
			return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
		}
	},
	W = {
		__proto__: null,
		ConcurrentStorage: ConcurrentStorage,
		EventEmitter: EventEmitter,
		URL: _URL,
		UUID: UUID,
		addEvent: addEvent,
		addHashEvent: addHashEvent,
		ajax: ajax,
		base64Decode: base64Decode,
		base64Encode: base64Encode,
		bindReady: bindReady,
		cookie: cookie,
		coverExtend: coverExtend,
		decodeURI: _decodeURI,
		decodeURIComponent: _decodeURIComponent,
		dfmapping: dfmapping,
		each: each,
		encodeDates: encodeDates,
		extend: extend,
		extend2Lev: extend2Lev,
		filter: filter,
		formatDate: formatDate,
		formatJsonString: formatJsonString,
		getCookieTopLevelDomain: getCookieTopLevelDomain,
		getDomBySelector: getDomBySelector,
		getElementContent: getElementContent,
		getHostname: getHostname,
		getIOSVersion: getIOSVersion,
		getQueryParam: getQueryParam,
		getQueryParamsFromUrl: getQueryParamsFromUrl,
		getRandom: getRandom,
		getRandomBasic: getRandomBasic,
		getScreenOrientation: getScreenOrientation,
		getUA: getUA,
		getURL: getURL,
		getURLPath: getURLPath,
		getURLSearchParams: getURLSearchParams,
		hasAttribute: hasAttribute,
		hasAttributes: hasAttributes,
		hashCode: hashCode,
		hashCode53: hashCode53,
		indexOf: indexOf,
		inherit: inherit,
		isArguments: isArguments,
		isArray: isArray,
		isBoolean: isBoolean,
		isDate: isDate,
		isElement: isElement,
		isEmptyObject: isEmptyObject,
		isFunction: isFunction,
		isHttpUrl: isHttpUrl,
		isIOS: isIOS,
		isJSONString: isJSONString,
		isNumber: isNumber,
		isObject: isObject,
		isString: isString,
		isSupportBeaconSend: isSupportBeaconSend,
		isSupportCors: isSupportCors,
		isUndefined: isUndefined,
		jsonp: jsonp,
		listenPageState: listenPageState,
		loadScript: loadScript,
		localStorage: _localStorage,
		logger: logger,
		map: map,
		mediaQueriesSupported: mediaQueriesSupported,
		now: now,
		removeScriptProtocol: removeScriptProtocol,
		rot13defs: rot13defs,
		rot13obfs: rot13obfs,
		ry: ry,
		safeJSONParse: safeJSONParse,
		searchObjDate: searchObjDate,
		sessionStorage: _sessionStorage,
		setCssStyle: setCssStyle,
		strToUnicode: strToUnicode,
		throttle: throttle,
		toArray: toArray,
		trim: trim,
		unique: unique,
		urlParse: urlParse,
		urlSafeBase64: urlSafeBase64,
		values: values,
		xhr: xhr
	},
	sdPara = {},
	defaultPara = {
		preset_properties: {
			search_keyword_baidu: !1,
			latest_utm: !0,
			latest_traffic_source_type: !0,
			latest_search_keyword: !0,
			latest_referrer: !0,
			latest_referrer_host: !1,
			latest_landing_page: !1,
			latest_wx_ad_click_id: undefined,
			url: !0,
			title: !0
		},
		encrypt_cookie: !1,
		enc_cookie: !1,
		img_use_crossorigin: !1,
		name: "sa",
		max_referrer_string_length: 200,
		max_string_length: 500,
		max_id_length: 255,
		max_key_length: 100,
		cross_subdomain: !0,
		show_log: !1,
		is_debug: !1,
		source_channel: [],
		sdk_id: "",
		vtrack_ignore: {},
		auto_init: !0,
		is_track_single_page: !1,
		is_single_page: !1,
		batch_send: !1,
		source_type: {},
		callback_timeout: 200,
		datasend_timeout: 8e3,
		is_track_device_id: !1,
		ignore_oom: !0,
		app_js_bridge: !1
	};

function sdLog() {
	if ((_sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || sdPara
		.show_log) && (!isObject(arguments[0]) || !0 !== sdPara.show_log && "string" !== sdPara.show_log && !1 !==
	sdPara.show_log || (arguments[0] = formatJsonString(arguments[0])), "object" == typeof console && console
		.log)) try {
		return console.log.apply(console, arguments)
	} catch (e) {
		console.log(arguments[0])
	}
}

function enableLocalLog() {
	if (_sessionStorage.isSupport()) try {
		sessionStorage.setItem("sensorsdata_jssdk_debug", "true")
	} catch (e) {
		console.log("enableLocalLog error: " + e.message)
	}
}

function disableLocalLog() {
	_sessionStorage.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug")
}
var source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
	sdkversion_placeholder = "1.24.13",
	domain_test_key = "sensorsdata_domain_test",
	IDENTITY_KEY = {
		EMAIL: "$identity_email",
		MOBILE: "$identity_mobile",
		LOGIN: "$identity_login_id"
	};

function getCurrentDomain(e) {
	var t = sdPara.current_domain;
	switch (typeof t) {
		case "function":
			var r = t();
			return "" === r || "" === trim(r) ? "url\u89e3\u6790\u5931\u8d25" : -1 !== r.indexOf(".") ? r :
				"url\u89e3\u6790\u5931\u8d25";
		case "string":
			return "" === t || "" === trim(t) ? "url\u89e3\u6790\u5931\u8d25" : -1 !== t.indexOf(".") ? t :
				"url\u89e3\u6790\u5931\u8d25";
		default:
			var i = getCookieTopLevelDomain(null, domain_test_key);
			return "" === e ? "url\u89e3\u6790\u5931\u8d25" : "" === i ? "url\u89e3\u6790\u5931\u8d25" : i
	}
}
var saCookie = {
	get: function(e) {
		return cookie.get(e)
	},
	set: function(e, t, r, i) {
		var n = "";
		if (i = isUndefined(i) ? sdPara.cross_subdomain : i) {
			var a = getCurrentDomain(location.href);
			"url\u89e3\u6790\u5931\u8d25" === a && (a = ""), n = a ? "; domain=" + a : ""
		}
		return cookie.set(e, t, r, i, sdPara.set_cookie_samesite, sdPara.is_secure_cookie, n)
	},
	remove: function(e, t) {
		return t = isUndefined(t) ? sdPara.cross_subdomain : t, cookie.remove(e, t)
	},
	isSupport: function(e, t) {
		return e = e || "sajssdk_2015_cookie_access_test", t = t || "1", cookie.isSupport(e, t)
	}
};

function isBaiduTraffic() {
	var e = document.referrer;
	if (!e) return !1;
	try {
		var t = _URL(e).hostname;
		return t && "baidu.com" === t.substring(t.length - "baidu.com".length)
	} catch (r) {
		return !1
	}
}
var getBaiduKeyword = {
	data: {},
	id: function() {
		return this.data.id ? this.data.id : (this.data.id = getReferrerEqid(), this.data.id)
	},
	type: function() {
		return this.data.type ? this.data.type : (this.data.type = getReferrerEqidType(), this.data.type)
	}
};

function getReferrerEqidType() {
	var e = getQueryParamsFromUrl(document.referrer);
	if (isEmptyObject(e) || !e.eqid) {
		var t = getQueryParamsFromUrl(location.href);
		return e.ck || t.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
	}
	return "baidu_seo_keyword_id"
}

function getReferrerEqid() {
	var e = getQueryParamsFromUrl(document.referrer);
	return isEmptyObject(e) || !e.eqid ? UUID().replace(/-/g, "") : e.eqid
}

function getReferrer(e, t) {
	return isString(e = e || document.referrer) ? (0 !== (e = _decodeURI(e = trim(e))).indexOf(
		"https://www.baidu.com/") || t || (e = e.split("?")[0]), isString(e = e.slice(0, sdPara
		.max_referrer_string_length)) ? e : "") : "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
}

function isReferralTraffic(e) {
	return "" === (e = e || document.referrer) || getCookieTopLevelDomain(getHostname(e), domain_test_key) !==
		getCookieTopLevelDomain(null, domain_test_key)
}

function getKeywordFromReferrer(e, t) {
	e = e || document.referrer;
	var r = sdPara.source_type.keyword;
	if (document && isString(e)) {
		if (0 === e.indexOf("http")) {
			var i = getReferSearchEngine(e),
				n = getQueryParamsFromUrl(e);
			if (isEmptyObject(n)) return sdPara.preset_properties.search_keyword_baidu && isBaiduTraffic() ? void 0 :
				"\u672a\u53d6\u5230\u503c";
			var a = null;
			for (var s in r)
				if (i === s && isObject(n))
					if (isArray(a = r[s]))
						for (s = 0; s < a.length; s++) {
							var o = n[a[s]];
							if (o) return t ? {
								active: o
							} : o
						} else if (n[a]) return t ? {
						active: n[a]
					} : n[a];
			return sdPara.preset_properties.search_keyword_baidu && isBaiduTraffic() ? void 0 :
				"\u672a\u53d6\u5230\u503c"
		}
		return "" === e ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" :
			"\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"
	}
	return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e)
}

function getReferSearchEngine(e) {
	var t = getHostname(e);
	if (!t || "hostname\u89e3\u6790\u5f02\u5e38" === t) return "";
	var r = {
		baidu: [/^.*\.baidu\.com$/],
		bing: [/^.*\.bing\.com$/],
		google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
		sm: [/^m\.sm\.cn$/],
		so: [/^.+\.so\.com$/],
		sogou: [/^.*\.sogou\.com$/],
		yahoo: [/^.*\.yahoo\.com$/]
	};
	for (var i in r)
		for (var n = r[i], a = 0, s = n.length; a < s; a++)
			if (n[a].test(t)) return i;
	return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce"
}
var debug = {
		distinct_id: function() {},
		jssdkDebug: function() {},
		_sendDebug: function(e) {},
		apph5: function(e) {
			var t = "app_h5\u6253\u901a\u5931\u8d25-",
				r = {
					1: t + "use_app_track\u4e3afalse",
					2: t + "Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",
					3.1: t + "Android\u6821\u9a8cserver_url\u5931\u8d25",
					3.2: t + "iOS\u6821\u9a8cserver_url\u5931\u8d25",
					4.1: t + "H5 \u6821\u9a8c iOS server_url \u5931\u8d25",
					4.2: t + "H5 \u6821\u9a8c Android server_url \u5931\u8d25"
				},
				i = e.output,
				n = e.step,
				a = e.data || "";
			"all" !== i && "console" !== i || sdLog(r[n]), ("all" === i || "code" === i) && isObject(sdPara
				.is_debug) && sdPara.is_debug.apph5 && (a.type && "profile" === a.type.slice(0, 7) || (a
				.properties._jssdk_debug_info = "apph5-" + String(n)))
		},
		defineMode: function(e) {
			var t = {
				1: {
					title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
					message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 App SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
					link_text: "\u914d\u7f6e\u6587\u6863",
					link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
				},
				2: {
					title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
					message: "App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 Web JS SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
					link_text: "\u914d\u7f6e\u6587\u6863",
					link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
				},
				3: {
					title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
					message: "Web JS SDK \u6ca1\u6709\u5f00\u542f\u5168\u57cb\u70b9\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
					link_text: "\u914d\u7f6e\u6587\u6863",
					link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
				},
				4: {
					title: "\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",
					message: "Web JS SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0e App SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",
					link_text: "\u914d\u7f6e\u6587\u6863",
					link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
				}
			};
			return !(!e || !t[e]) && t[e]
		},
		protocol: {
			protocolIsSame: function(e, t) {
				try {
					if (_URL(e).protocol !== _URL(t).protocol) return !1
				} catch (r) {
					return sdLog("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"), !1
				}
				return !0
			},
			serverUrl: function() {
				isString(sdPara.server_url) && "" !== sdPara.server_url && !this.protocolIsSame(sdPara.server_url,
					location.href) && sdLog(
					"SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"
				)
			},
			ajax: function(e) {
				if (e === sdPara.server_url) return !1;
				isString(e) && "" !== e && !this.protocolIsSame(e, location.href) && sdLog(
					"SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"
				)
			}
		}
	},
	pageInfo = {
		initPage: function() {
			var e = getReferrer(),
				t = getURL(),
				r = getCurrentDomain(t);
			r || debug.jssdkDebug("url_domain\u5f02\u5e38_" + t + "_" + r), this.pageProp = {
				referrer: e,
				referrer_host: e ? getHostname(e) : "",
				url: t,
				url_host: getHostname(t, "url_host\u53d6\u503c\u5f02\u5e38"),
				url_domain: r
			}
		},
		pageProp: {},
		campaignParams: function() {
			return sd.kit.getUtmData()
		},
		campaignParamsStandard: function(e, t) {
			e = e || "", t = t || "";
			var r = pageInfo.campaignParams(),
				i = {},
				n = {};
			return each(r, function(r, a, s) {
				-1 !== (" " + source_channel_standard + " ").indexOf(" " + a + " ") ? i[e + a] = s[a] : n[
				t + a] = s[a]
			}), {
				$utms: i,
				otherUtms: n
			}
		},
		properties: function() {
			var e = window.innerHeight || document.documentElement.clientHeight || document.body && document.body
					.clientHeight || 0,
				t = window.innerWidth || document.documentElement.clientWidth || document.body && document.body
					.clientWidth || 0;
			return {
				$timezone_offset: (new Date).getTimezoneOffset(),
				$screen_height: Number(screen.height) || 0,
				$screen_width: Number(screen.width) || 0,
				$viewport_height: e,
				$viewport_width: t,
				$lib: "js",
				$lib_version: sdkversion_placeholder
			}
		},
		currentProps: {},
		register: function(e) {
			extend(pageInfo.currentProps, e)
		}
	};

function getNewUserFlagKey(e, t) {
	var r = "";
	if (t = t || location.href, !1 === sdPara.cross_subdomain) {
		try {
			r = _URL(t).hostname
		} catch (i) {
			sdLog(i)
		}
		r = "string" == typeof r && "" !== r ? "sajssdk_2015_" + sdPara.sdk_id + e + "_" + r.replace(/\./g, "_") :
			"sajssdk_2015_root_" + sdPara.sdk_id + e
	} else r = "sajssdk_2015_cross_" + sdPara.sdk_id + e;
	return r
}

function isNewUser() {
	return saCookie.isSupport() ? null !== saCookie.get("sensorsdata_is_new_user") || null !== saCookie.get(
		getNewUserFlagKey("new_user")) : null !== memory.get(memory.getNewUserFlagMemoryKey("new_user"))
}
saCookie.getNewUser = isNewUser;
var memory = {
		data: {},
		get: function(e) {
			var t = this.data[e];
			return t === undefined ? null : t._expirationTimestamp_ !== undefined ? (new Date).getTime() > t
				._expirationTimestamp_ ? null : t.value : t
		},
		set: function(e, t, r) {
			if (r) {
				var i = new Date;
				t = {
					value: t,
					_expirationTimestamp_: "s" === String(r).slice(-1) ? i.getTime() + 1e3 * Number(String(r)
						.slice(0, -1)) : i.getTime() + 24 * r * 60 * 60 * 1e3
				}
			}
			this.data[e] = t
		},
		getNewUserFlagMemoryKey: function(e) {
			return "sajssdk_2015_" + sdPara.sdk_id + e
		}
	},
	saNewUser = {
		checkIsAddSign: function(e) {
			"track" === e.type && (isNewUser() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
		},
		is_first_visit_time: !1,
		is_page_first_visited: !1,
		checkIsFirstTime: function(e) {
			"track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties
				.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
		},
		setDeviceId: function(e, t) {
			var r = null,
				i = saCookie.get("sensorsdata2015jssdkcross" + sd.para.sdk_id),
				n = {};
			null != (i = sd.kit.userDecryptIfNeeded(i)) && isJSONString(i) && (n = JSON.parse(i)).$device_id && (r =
				n.$device_id), r = r || e, !0 === sd.para.cross_subdomain ? t.set("$device_id", r) : (n
				.$device_id = r, n = JSON.stringify(n), sd.para.encrypt_cookie && (n = sd.kit.userEncrypt(n)),
				saCookie.set("sensorsdata2015jssdkcross" + sd.para.sdk_id, n, null, !0)), sd.para
				.is_track_device_id && (pageInfo.currentProps.$device_id = r)
		},
		storeInitCheck: function() {
			if (sd.is_first_visitor) {
				var e = new Date,
					t = {
						h: 23 - e.getHours(),
						m: 59 - e.getMinutes(),
						s: 59 - e.getSeconds()
					};
				saCookie.isSupport() ? saCookie.set(getNewUserFlagKey("new_user"), "1", 3600 * t.h + 60 * t.m + t
					.s + "s") : memory.set(memory.getNewUserFlagMemoryKey("new_user"), "1", 3600 * t.h + 60 * t
					.m + t.s + "s"), this.is_first_visit_time = !0, this.is_page_first_visited = !0
			} else isNewUser() || (this.checkIsAddSign = function(e) {
				"track" === e.type && (e.properties.$is_first_day = !1)
			}), this.checkIsFirstTime = function(e) {
				"track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1)
			}
		}
	};

function saAddEvent(e, t, r) {
	var i = !(!isObject(sdPara.heatmap) || !sdPara.heatmap.useCapture);
	return isObject(sdPara.heatmap) && isUndefined(sdPara.heatmap.useCapture) && "click" === t && (i = !0), addEvent(e,
		t, r, i)
}
var EventEmitterSa = function() {
	this._events = [], this.pendingEvents = []
};

function getSourceFromReferrer() {
	function e(e, t) {
		for (var r = 0; r < e.length; r++)
			if (-1 !== t.split("?")[0].indexOf(e[r])) return !0
	}
	var t = "(" + sdPara.source_type.utm.join("|") + ")\\=[^&]+",
		r = sdPara.source_type.search,
		i = sdPara.source_type.social,
		n = document.referrer || "",
		a = pageInfo.pageProp.url;
	if (a) {
		var s = a.match(new RegExp(t));
		return s && s[0] ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf" : e(r, n) ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf" :
			e(i, n) ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf" : "" === n ? "\u76f4\u63a5\u6d41\u91cf" :
				"\u5f15\u8350\u6d41\u91cf"
	}
	return "\u83b7\u53d6url\u5f02\u5e38"
}

function getWxAdIdFromUrl(e) {
	var t = getQueryParam(e, "gdt_vid"),
		r = getQueryParam(e, "hash_key"),
		i = getQueryParam(e, "callbacks"),
		n = {
			click_id: "",
			hash_key: "",
			callbacks: ""
		};
	return isString(t) && t.length && (n.click_id = 16 == t.length || 18 == t.length ? t :
		"\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5", isString(r) && r.length && (n.hash_key = r), isString(i) && i
		.length && (n.callbacks = i)), n
}

function parseSuperProperties(e) {
	var t = e.properties,
		r = JSON.parse(JSON.stringify(e));
	isObject(t) && each(t, function(e, i) {
		if (isFunction(e)) try {
			t[i] = e(r), isFunction(t[i]) && (sdLog("\u60a8\u7684\u5c5e\u6027- " + i +
				" \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"
			), delete t[i])
		} catch (n) {
			delete t[i], sdLog("\u60a8\u7684\u5c5e\u6027- " + i +
				" \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
		}
	})
}

function searchConfigData(e) {
	if (isObject(e) && e.$option) {
		var t = e.$option;
		return delete e.$option, t
	}
	return {}
}

function strip_empty_properties(e) {
	var t = {};
	return each(e, function(e, r) {
		null != e && (t[r] = e)
	}), t
}

function addReferrerHost(e) {
	var t = !e.type || "profile" !== e.type.slice(0, 7);
	isObject(e.properties) && t && ("$referrer" in e.properties && (e.properties.$referrer_host = "" === e.properties
		.$referrer ? "" : getHostname(e.properties.$referrer, "\u53d6\u503c\u5f02\u5e38")), sdPara
		.preset_properties.latest_referrer && sdPara.preset_properties.latest_referrer_host && (e.properties
		.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : getHostname(e.properties
		.$latest_referrer, "\u53d6\u503c\u5f02\u5e38")))
}

function addPropsHook(e) {
	var t = !e.type || "profile" !== e.type.slice(0, 7),
		r = sdPara.preset_properties && t;
	r && sdPara.preset_properties.url && isUndefined(e.properties.$url) && (e.properties.$url = getURL()), r && sdPara
		.preset_properties.title && isUndefined(e.properties.$title) && (e.properties.$title = document.title)
}

function getEleInfo(e) {
	if (!e.target) return !1;
	var t = e.target,
		r = t.tagName.toLowerCase(),
		i = {};
	return i.$element_type = r, i.$element_name = t.getAttribute("name"), i.$element_id = t.getAttribute("id"), i
		.$element_class_name = isString(t.className) ? t.className : null, i.$element_target_url = t.getAttribute(
		"href"), i.$element_content = getElementContent$1(t, r), (i = strip_empty_properties(i)).$url = getURL(), i
		.$url_path = getURLPath(), i.$title = document.title, i
}

function getInputElementValue(e) {
	var t = sdPara.heatmap && isFunction(sdPara.heatmap.collect_input) && sdPara.heatmap.collect_input(e);
	return ("button" === e.type || "submit" === e.type || t) && e.value || ""
}

function getElementContent$1(e, t) {
	return isString(t) && "input" === t.toLowerCase() ? getInputElementValue(e) : getElementContent(e, t)
}

function ajax$1(e) {
	return debug.protocol.ajax(e.url), ajax(e)
}

function optimizeServerUrl(e) {
	if ("string" == typeof e && (e = trim(e)) && ("://" === e.slice(0, 3) ? e = location.protocol.slice(0, -1) + e :
		"//" === e.slice(0, 2) ? e = location.protocol + e : "http" !== e.slice(0, 4) && (e = "")), isArray(e) && e
		.length)
		for (var t = 0; t < e.length; t++) /sa\.gif[^\/]*$/.test(e[t]) || (e[t] = e[t].replace(/\/sa$/, "/sa.gif")
			.replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
	else /sa\.gif[^\/]*$/.test(e) || "string" != typeof e || (e = e.replace(/\/sa$/, "/sa.gif").replace(
		/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
	return e
}

function encodeTrackData(e) {
	isString(e) || (e = JSON.stringify(e));
	var t = base64Encode(e),
		r = "crc=" + hashCode(t);
	return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r)
}
EventEmitterSa.prototype = {
	emit: function(e) {
		var t = [].slice.call(arguments, 1);
		each(this._events, function(r) {
			r.type === e && r.callback.apply(r.context, t)
		}), this.pendingEvents.push({
			type: e,
			data: t
		}), this.pendingEvents.length > 20 && this.pendingEvents.shift()
	},
	on: function(e, t, r, i) {
		isFunction(t) && (this._events.push({
			type: e,
			callback: t,
			context: r || this
		}), i = !1 !== i, this.pendingEvents.length > 0 && i && each(this.pendingEvents, function(i) {
			i.type === e && t.apply(r, i.data)
		}))
	},
	tempAdd: function(e, t) {
		if (t && e) return this.emit(e, t)
	},
	isReady: function() {}
};
var AjaxSend = function(e) {
	this.callback = e.callback, this.server_url = e.server_url, this.data = e.data
};
AjaxSend.prototype.start = function() {
	var e = this;
	ajax$1({
		url: this.server_url,
		type: "POST",
		data: this.data,
		credentials: !1,
		timeout: sdPara.datasend_timeout,
		cors: !0,
		success: function() {
			e.end()
		},
		error: function() {
			e.end()
		}
	})
}, AjaxSend.prototype.end = function() {
	this.callback && this.callback()
};
var dataStoragePrefix = "sawebjssdk-",
	tabStoragePrefix = "tab-sawebjssdk-";

function BatchSend() {
	this.sendTimeStamp = 0, this.timer = null, this.serverUrl = "", this.hasTabStorage = !1
}
BatchSend.prototype = {
	batchInterval: function() {
		"" === this.serverUrl && this.getServerUrl(), this.hasTabStorage || (this.generateTabStorage(), this
			.hasTabStorage = !0);
		var e = this;
		e.timer = setTimeout(function() {
			e.updateExpireTime(), e.recycle(), e.send(), clearTimeout(e.timer), e.batchInterval()
		}, sdPara.batch_send.send_interval)
	},
	getServerUrl: function() {
		if (!(isString(sdPara.server_url) && "" !== sdPara.server_url || isArray(sdPara.server_url) && sdPara
			.server_url.length)) return sd.log(
			"\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"
		);
		this.serverUrl = isArray(sdPara.server_url) ? sdPara.server_url[0] : sdPara.server_url
	},
	send: function() {
		if (!(this.sendTimeStamp && now() - this.sendTimeStamp < sdPara.batch_send.datasend_timeout)) {
			var e = _localStorage.get(this.tabKey);
			if (e) {
				this.sendTimeStamp = now();
				var t = unique((e = safeJSONParse(e) || this.generateTabStorageVal()).data);
				if (t.length) {
					for (var r = [], i = 0; i < t.length; i++) r.push(sd.store.readObjectVal(t[i]));
					this.request(r, e.data)
				}
			}
		}
	},
	updateExpireTime: function() {
		var e = _localStorage.get(this.tabKey);
		e && ((e = safeJSONParse(e) || this.generateTabStorageVal()).expireTime = now() + 2 * sdPara.batch_send
			.send_interval, e.serverUrl = this.serverUrl, _localStorage.set(this.tabKey, JSON.stringify(e)))
	},
	request: function(e, t) {
		var r = this;
		ajax$1({
			url: this.serverUrl,
			type: "POST",
			data: "data_list=" + encodeURIComponent(base64Encode(JSON.stringify(e))),
			credentials: !1,
			timeout: sdPara.batch_send.datasend_timeout,
			cors: !0,
			success: function() {
				r.remove(t), r.sendTimeStamp = 0
			},
			error: function() {
				r.sendTimeStamp = 0
			}
		})
	},
	remove: function(e) {
		var t = _localStorage.get(this.tabKey);
		if (t) {
			for (var r = (safeJSONParse(t) || this.generateTabStorageVal()).data, i = 0; i < e.length; i++) {
				var n = indexOf(r, e[i]);
				n > -1 && r.splice(n, 1), _localStorage.remove(e[i])
			}
			r = unique(r), _localStorage.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(r)))
		}
	},
	add: function(e) {
		var t = dataStoragePrefix + String(getRandom()),
			r = _localStorage.get(this.tabKey);
		null === r ? (this.tabKey = tabStoragePrefix + String(getRandom()), r = this.generateTabStorageVal()) :
			r = safeJSONParse(r) || this.generateTabStorageVal(), r.data.push(t), r.expireTime = now() + 2 *
			sdPara.batch_send.send_interval, _localStorage.set(this.tabKey, JSON.stringify(r)), sd.store
			.saveObjectVal(t, e), "track_signup" !== e.type && "$pageview" !== e.event || this.sendImmediately()
	},
	generateTabStorage: function() {
		this.tabKey = tabStoragePrefix + String(getRandom()), _localStorage.set(this.tabKey, JSON.stringify(this
			.generateTabStorageVal()))
	},
	generateTabStorageVal: function(e) {
		return {
			data: e = e || [],
			expireTime: now() + 2 * sdPara.batch_send.send_interval,
			serverUrl: this.serverUrl
		}
	},
	sendImmediately: function() {
		this.send()
	},
	recycle: function() {
		for (var e = {}, t = 0; t < localStorage.length; t++) {
			var r = localStorage.key(t),
				i = this;
			if (0 === r.indexOf(tabStoragePrefix)) {
				for (var n = safeJSONParse(_localStorage.get(r)) || this.generateTabStorageVal(), a = 0; a < n
					.data.length; a++) e[n.data[a]] = !0;
				if (r !== i.tabKey && now() > n.expireTime && this.serverUrl === n.serverUrl)
					new ConcurrentStorage("sajssdk-lock-get-").get(r, 1e4, 1e3, function(e) {
						if (e) {
							null === _localStorage.get(i.tabKey) && i.generateTabStorage();
							var t = safeJSONParse(e) || i.generateTabStorageVal(),
								r = safeJSONParse(_localStorage.get(i.tabKey)) || i.generateTabStorageVal();
							r.data = unique(r.data.concat(t.data)), _localStorage.set(i.tabKey, JSON
								.stringify(r))
						}
					})
			} else if (0 === r.indexOf("sajssdk-lock-get-")) {
				var s = safeJSONParse(_localStorage.get(r)) || {
					expireTime: 0
				};
				now() - s.expireTime > 1e4 && _localStorage.remove(r)
			}
		}
		for (var o = 0; o < localStorage.length; o++) {
			var d = localStorage.key(o);
			0 !== d.indexOf(dataStoragePrefix) || e[d] || _localStorage.remove(d)
		}
	}
};
var BeaconSend = function(e) {
	this.callback = e.callback, this.server_url = e.server_url, this.data = e.data
};

function getUA$1() {
	var e, t = {},
		r = navigator.userAgent.toLowerCase();
	return (e = r.match(/ qq\/([\d.]+)/)) ? t.qqBuildinBrowser = Number(e[1].split(".")[0]) : (e = r.match(
		/mqqbrowser\/([\d.]+)/)) ? t.qqBrowser = Number(e[1].split(".")[0]) : (e = r.match(/opera.([\d.]+)/)) ? t
		.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e =
		r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t
		.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[
		0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(
		/trident\/([\d.]+)/)) && (t.ie = 11), t
}
BeaconSend.prototype.start = function() {
	var e = this;
	"object" == typeof navigator && "function" == typeof navigator.sendBeacon && navigator.sendBeacon(this
		.server_url, this.data), setTimeout(function() {
		e.end()
	}, 40)
}, BeaconSend.prototype.end = function() {
	this.callback && this.callback()
};
var ImageSend = function(e) {
	this.callback = e.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1,
	sdPara.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.server_url = e.data
};
ImageSend.prototype.start = function() {
	var e = this;
	sdPara.ignore_oom && (this.img.onload = function() {
		this.onload = null, this.onerror = null, this.onabort = null, e.end()
	}, this.img.onerror = function() {
		this.onload = null, this.onerror = null, this.onabort = null, e.end()
	}, this.img.onabort = function() {
		this.onload = null, this.onerror = null, this.onabort = null, e.end()
	}), this.img.src = this.server_url
}, ImageSend.prototype.lastClear = function() {
	getUA$1().ie !== undefined ? this.img.src = "about:blank" : this.img.src = ""
}, ImageSend.prototype.end = function() {
	this.callback && this.callback();
	var e = this;
	setTimeout(function() {
		e.lastClear && e.lastClear()
	}, sdPara.datasend_timeout - sdPara.callback_timeout)
};
var business = {
		__proto__: null,
		addEvent: saAddEvent,
		EventEmitterSa: EventEmitterSa,
		cookie: saCookie,
		info: pageInfo,
		getReferrer: getReferrer,
		getCurrentDomain: getCurrentDomain,
		isBaiduTraffic: isBaiduTraffic,
		getReferrerEqid: getReferrerEqid,
		getReferrerEqidType: getReferrerEqidType,
		getBaiduKeyword: getBaiduKeyword,
		isReferralTraffic: isReferralTraffic,
		getKeywordFromReferrer: getKeywordFromReferrer,
		getReferSearchEngine: getReferSearchEngine,
		getSourceFromReferrer: getSourceFromReferrer,
		getWxAdIdFromUrl: getWxAdIdFromUrl,
		parseSuperProperties: parseSuperProperties,
		searchConfigData: searchConfigData,
		strip_empty_properties: strip_empty_properties,
		getEleInfo: getEleInfo,
		getElementContent: getElementContent$1,
		ajax: ajax$1,
		optimizeServerUrl: optimizeServerUrl,
		encodeTrackData: encodeTrackData,
		AjaxSend: AjaxSend,
		BatchSend: BatchSend,
		BeaconSend: BeaconSend,
		ImageSend: ImageSend
	},
	events = new EventEmitterSa,
	store = {
		requests: [],
		_sessionState: {},
		_state: {
			distinct_id: "",
			first_id: "",
			props: {},
			identities: {}
		},
		getProps: function() {
			return this._state.props || {}
		},
		getSessionProps: function() {
			return this._sessionState
		},
		getOriginDistinctId: function() {
			return this._state._distinct_id || this._state.distinct_id
		},
		getOriginUnionId: function(e) {
			var t = {},
				r = (e = e || this._state)._first_id || e.first_id,
				i = e._distinct_id || e.distinct_id;
			return r && i ? (t.login_id = i, t.anonymous_id = r) : t.anonymous_id = i, t
		},
		getDistinctId: function() {
			var e = this.getUnionId();
			return e.login_id || e.anonymous_id
		},
		getUnionId: function(e) {
			var t = this.getOriginUnionId(e);
			return t.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state
				.history_login_id.name !== IDENTITY_KEY.LOGIN && (t.login_id = this._state.history_login_id.name +
				"+" + t.login_id), t
		},
		getFirstId: function() {
			return this._state._first_id || this._state.first_id
		},
		initSessionState: function() {
			var e = saCookie.get("sensorsdata2015session"),
				t = null;
			null !== (e = sd.kit.userDecryptIfNeeded(e)) && "object" == typeof(t = safeJSONParse(e)) && (this
				._sessionState = t || {})
		},
		setOnce: function(e, t) {
			e in this._state || this.set(e, t)
		},
		set: function(e, t) {
			this._state = this._state || {};
			var r = this._state.distinct_id;
			this._state[e] = t, "first_id" === e ? delete this._state._first_id : "distinct_id" === e && delete this
				._state._distinct_id, this.save(), "distinct_id" === e && r && events.tempAdd("changeDistinctId", t)
		},
		change: function(e, t) {
			this._state["_" + e] = t
		},
		setSessionProps: function(e) {
			sd.log(
				"initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee");
			var t = this._sessionState;
			extend(t, e), this.sessionSave(t)
		},
		setSessionPropsOnce: function(e) {
			sd.log(
				"initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee");
			var t = this._sessionState;
			coverExtend(t, e), this.sessionSave(t)
		},
		setProps: function(e, t) {
			var r = {};
			for (var i in r = t ? e : extend(this._state.props || {}, e)) "string" == typeof r[i] && (r[i] = r[i]
				.slice(0, sd.para.max_referrer_string_length));
			this.set("props", r)
		},
		setPropsOnce: function(e) {
			var t = this._state.props || {};
			coverExtend(t, e), this.set("props", t)
		},
		clearAllProps: function(e) {
			var t;
			if (this._sessionState = {}, isArray(e) && e.length > 0)
				for (t = 0; t < e.length; t++) isString(e[t]) && -1 === e[t].indexOf("latest_") && isObject(this
					._state.props) && e[t] in this._state.props && delete this._state.props[e[t]];
			else if (isObject(this._state.props))
				for (t in this._state.props) 1 !== t.indexOf("latest_") && delete this._state.props[t];
			this.sessionSave({}), this.save()
		},
		sessionSave: function(e) {
			sd.log(
				"initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee"),
				this._sessionState = e;
			var t = JSON.stringify(this._sessionState);
			sd.para.encrypt_cookie && (t = sd.kit.userEncrypt(t)), saCookie.set("sensorsdata2015session", t, 0)
		},
		save: function() {
			var e = JSON.parse(JSON.stringify(this._state));
			delete e._first_id, delete e._distinct_id, e.identities && (e.identities = base64Encode(JSON.stringify(e
				.identities)));
			var t = JSON.stringify(e);
			sd.para.encrypt_cookie && (t = sd.kit.userEncrypt(t)), saCookie.set(this.getCookieName(), t, 73e3, sd
				.para.cross_subdomain)
		},
		getCookieName: function() {
			var e = "";
			if (!1 === sd.para.cross_subdomain) {
				try {
					e = _URL(location.href).hostname
				} catch (t) {
					sd.log(t)
				}
				e = "string" == typeof e && "" !== e ? "sa_jssdk_2015_" + sd.para.sdk_id + e.replace(/\./g, "_") :
					"sa_jssdk_2015_root" + sd.para.sdk_id
			} else e = "sensorsdata2015jssdkcross" + sd.para.sdk_id;
			return e
		},
		init: function() {
			this.initSessionState();
			var e, t, r = UUID();
			saCookie.isSupport() && (e = saCookie.get(this.getCookieName()), t = safeJSONParse(e = sd.kit
				.userDecryptIfNeeded(e))), saCookie.isSupport() && null !== e && isJSONString(e) && isObject(
				t) && (!isObject(t) || t.distinct_id) ? (store._state = extend(function(e) {
				var t;
				e.identities && (0 === e.identities.indexOf("\n/") ? e.identities = safeJSONParse(
					rot13defs(e.identities)) : e.identities = safeJSONParse(base64Decode(e
					.identities)));
				var r = store.getOriginUnionId(e);
				e.identities && isObject(e.identities) && !isEmptyObject(e.identities) || (e
					.identities = {}, e.identities.$identity_cookie_id = UUID()), e
					.history_login_id = e.history_login_id || {};
				var i = e.history_login_id.name;
				if (r.login_id)
					if (i && e.identities.hasOwnProperty(i)) {
						if (e.identities[i] !== r.login_id) {
							for (t in e.identities[i] = r.login_id, e.identities) e.identities
								.hasOwnProperty(t) && "$identity_cookie_id" !== t && t !== i && delete e
								.identities[t];
							e.history_login_id.value = r.login_id
						}
					} else {
						var n = i || IDENTITY_KEY.LOGIN;
						for (t in e.identities[n] = r.login_id, e.identities) e.identities
							.hasOwnProperty(t) && "$identity_cookie_id" !== t && t !== n && delete e
							.identities[t];
						e.history_login_id = {
							name: n,
							value: r.login_id
						}
					}
				else {
					if (e.identities.hasOwnProperty("$identity_login_id") || e.identities
						.hasOwnProperty(i))
						for (t in e.identities) e.identities.hasOwnProperty(t) &&
						"$identity_cookie_id" !== t && "$identity_anonymous_id" !== t && delete e
							.identities[t];
					e.history_login_id = {
						name: "",
						value: ""
					}
				}
				return e
			}(t)), store.save()) : (sd.is_first_visitor = !0, function(e) {
				store.set("distinct_id", e), store.set("identities", {
					$identity_cookie_id: e
				}), store.set("history_login_id", {
					name: "",
					value: ""
				})
			}(r)), saNewUser.setDeviceId(r, this), saNewUser.storeInitCheck()
		},
		saveObjectVal: function(e, t) {
			isString(t) || (t = JSON.stringify(t)), 1 == sd.para.encrypt_cookie && (t = sd.kit.userEncrypt(t)),
				_localStorage.set(e, t)
		},
		readObjectVal: function(e) {
			var t = _localStorage.get(e);
			return t ? safeJSONParse(t = sd.kit.userDecryptIfNeeded(t)) : null
		}
	},
	checkLog = {
		string: function(e) {
			sdLog(e + " must be string")
		},
		emptyString: function(e) {
			sdLog(e + "'s is empty")
		},
		regexTest: function(e) {
			sdLog(e + " is invalid")
		},
		idLength: function(e) {
			sdLog(e + " length is longer than " + sdPara.max_id_length)
		},
		keyLength: function(e) {
			sdLog(e + " length is longer than " + sdPara.max_key_length)
		},
		stringLength: function(e) {
			sdLog(e + " length is longer than " + sdPara.max_string_length)
		},
		voidZero: function(e) {
			sdLog(e + "'s is undefined")
		},
		reservedLoginId: function(e) {
			sdLog(e + " is invalid")
		},
		reservedBind: function(e) {
			sdLog(e + " is invalid")
		},
		reservedUnbind: function(e) {
			sdLog(e + " is invalid")
		}
	},
	ruleOption = {
		regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
		loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
		bindReservedNames: ["$identity_login_id", "$identity_anonymous_id", "$identity_cookie_id"],
		unbindReservedNames: ["$identity_anonymous_id", IDENTITY_KEY.LOGIN],
		string: function(e) {
			return !!isString(e)
		},
		emptyString: function(e) {
			return !(!isString(e) || 0 === trim(e).length)
		},
		regexTest: function(e) {
			return !(!isString(e) || !this.regName.test(e))
		},
		idLength: function(e) {
			return !(!isString(e) || e.length > sdPara.max_id_length)
		},
		keyLength: function(e) {
			return !(!isString(e) || e.length > sdPara.max_key_length)
		},
		stringLength: function(e) {
			return !(!isString(e) || e.length > sdPara.max_string_length)
		},
		voidZero: function(e) {
			return void 0 !== e
		},
		reservedLoginId: function(e) {
			return !(indexOf(this.loginIDReservedNames, e) > -1)
		},
		reservedUnbind: function(e) {
			return !(indexOf(this.unbindReservedNames, e) > -1)
		},
		reservedBind: function(e) {
			var t = store._state.history_login_id;
			return (!t || !t.name || t.name !== e) && !(indexOf(this.bindReservedNames, e) > -1)
		}
	},
	checkOption = {
		distinct_id: {
			rules: ["string", "emptyString", "idLength"],
			onComplete: function(e, t, r) {
				return !e && ("emptyString" === r && (t = "Id"), isFunction(checkLog[r]) && checkLog[r](t),
				"idLength" === r) || e
			}
		},
		event: {
			rules: ["string", "emptyString", "keyLength", "regexTest"],
			onComplete: function(e, t, r) {
				return e || ("emptyString" === r && (t = "eventName"), isFunction(checkLog[r]) && checkLog[r](t)), !
					0
			}
		},
		propertyKey: {
			rules: ["string", "emptyString", "keyLength", "regexTest"],
			onComplete: function(e, t, r) {
				return e || ("emptyString" === r && (t = "Property key"), isFunction(checkLog[r]) && checkLog[r](
					t)), !0
			}
		},
		propertyValue: {
			rules: ["voidZero"],
			onComplete: function(e, t, r) {
				return e || ("Property Value", isFunction(checkLog[r]) && checkLog[r]("Property Value")), !0
			}
		},
		properties: function(e) {
			return isObject(e) ? each(e, function(e, t) {
				check({
					propertyKey: t
				});
				check({
					propertyValue: e
				}, function(e, r, i) {
					return e || (r = t + "'s Value", isFunction(checkLog[i]) && checkLog[i](r)), !0
				})
			}) : ruleOption.voidZero(e) && sdLog(
				"properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"
			), !0
		},
		propertiesMust: function(e) {
			return e !== undefined && isObject(e) && !isEmptyObject(e) ? this.properties.call(this, e) : sdLog(
				"properties\u5fc5\u987b\u662f\u5bf9\u8c61"), !0
		},
		item_type: {
			rules: ["string", "emptyString", "keyLength", "regexTest"],
			onComplete: function(e, t, r) {
				return e || ("emptyString" === r && (t = "item_type"), isFunction(checkLog[r]) && checkLog[r](t)), !
					0
			}
		},
		item_id: {
			rules: ["string", "emptyString", "stringLength"],
			onComplete: function(e, t, r) {
				return e || ("emptyString" === r && (t = "item_id"), isFunction(checkLog[r]) && checkLog[r](t)), !0
			}
		},
		loginIdKey: {
			rules: ["string", "emptyString", "keyLength", "regexTest", "reservedLoginId"],
			onComplete: function(e, t, r) {
				return !e && ("emptyString" === r && (t = "login_id_key"), isFunction(checkLog[r]) && checkLog[r](
					t), "keyLength" === r) || e
			}
		},
		bindKey: {
			rules: ["string", "emptyString", "keyLength", "regexTest", "reservedBind"],
			onComplete: function(e, t, r) {
				return !e && ("emptyString" === r && (t = "Key"), isFunction(checkLog[r]) && checkLog[r](t),
				"keyLength" === r) || e
			}
		},
		unbindKey: {
			rules: ["string", "emptyString", "keyLength", "regexTest", "reservedUnbind"],
			onComplete: function(e, t, r) {
				return !e && ("emptyString" === r && (t = "Key"), isFunction(checkLog[r]) && checkLog[r](t),
				"keyLength" === r) || e
			}
		},
		bindValue: {
			rules: ["string", "emptyString", "idLength"],
			onComplete: function(e, t, r) {
				return !e && ("emptyString" === r && (t = "Value"), isFunction(checkLog[r]) && checkLog[r](t),
				"idLength" === r) || e
			}
		},
		check: function(e, t, r) {
			var i = this[e];
			if (isFunction(i)) return i.call(this, t);
			if (!i) return !1;
			for (var n = 0; n < i.rules.length; n++) {
				var a = i.rules[n],
					s = ruleOption[a](t),
					o = isFunction(r) ? r(s, t, a) : i.onComplete(s, t, a);
				if (!s) return o
			}
			return !0
		}
	};

function check(e, t) {
	for (var r in e)
		if (Object.prototype.hasOwnProperty.call(e, r) && !checkOption.check(r, e[r], t)) return !1;
	return !0
}

function strip_sa_properties(e, t) {
	return isObject(e) ? (each(e, function(r, i) {
		if (isArray(r)) {
			var n = [];
			each(r, function(e) {
				if (isString(e)) n.push(e);
				else if (isUndefined(e)) n.push("null");
				else try {
						n.push(JSON.stringify(e))
					} catch (t) {
						sdLog("\u60a8\u7684\u6570\u636e-", i, r,
							"\u6570\u7ec4\u91cc\u503c\u6709\u9519\u8bef,\u5df2\u5c06\u5176\u5220\u9664"
						)
					}
			}), e[i] = n
		}
		var a = indexOf(t || [], i) > -1;
		if (isObject(r) && "$option" !== i && !a) try {
			e[i] = JSON.stringify(r)
		} catch (s) {
			delete e[i], sdLog("\u60a8\u7684\u6570\u636e-", i, r,
				"\u6570\u636e\u503c\u6709\u9519\u8bef\uff0c\u5df2\u5c06\u5176\u5220\u9664")
		} else isString(r) || isNumber(r) || isDate(r) || isBoolean(r) || isArray(r) || isFunction(r) ||
		"$option" === i || a || (sdLog("\u60a8\u7684\u6570\u636e-", i, r,
			"-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"
		), delete e[i])
	}), e) : e
}

function formatString(e, t) {
	return isNumber(t) && e.length > t ? (sdLog(
		"\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e
		.slice(0, t)) : e
}

function filterReservedProperties(e, t) {
	isObject(e) && each(["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id",
		"original_id", "device_id", "properties", "second_id", "time", "users"
	], function(r, i) {
		r in e && (indexOf(t || [], r) > -1 || (i < 3 ? (delete e[r], sdLog("\u60a8\u7684\u5c5e\u6027- " + r +
			"\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"
		)) : sdLog("\u60a8\u7684\u5c5e\u6027- " + r +
			"\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d"
		)))
	})
}

function searchObjString(e) {
	var t = ["$element_selector", "$element_path"],
		r = ["sensorsdata_app_visual_properties"];
	isObject(e) && each(e, function(i, n) {
		if (isObject(i)) searchObjString(e[n]);
		else if (isString(i)) {
			if (indexOf(r, n) > -1) return;
			e[n] = formatString(i, indexOf(t, n) > -1 ? 1024 : sdPara.max_string_length)
		}
	})
}

function searchZZAppStyle(e) {
	"undefined" != typeof e.properties.$project && (e.project = e.properties.$project, delete e.properties.$project),
	"undefined" != typeof e.properties.$token && (e.token = e.properties.$token, delete e.properties.$token)
}

function formatItem(e) {
	if ("item_type" in e) {
		check({
			item_type: e.item_type
		}, function(t) {
			return t || delete e.item_type, !0
		})
	}
	if ("item_id" in e) {
		check({
			item_id: e.item_id
		}, function(t, r, i) {
			return t || "string" !== i || delete e.item_id, !0
		})
	}
}

function formatProperties(e, t) {
	each(e, function(r, i) {
		-1 === indexOf(t || [], i) && check({
			propertyKey: i
		}, function(t, r, n) {
			return t || "keyLength" === n || delete e[i], !0
		})
	})
}

function formatData(e) {
	var t = e.properties;
	searchObjDate(e), isObject(t) ? (strip_sa_properties(t), filterReservedProperties(t), searchZZAppStyle(e),
		formatProperties(t), searchObjString(t)) : "properties" in e && (e.properties = {}), formatItem(e)
}

function addFinalData(e, t) {
	var r = t.sensors;
	return e._track_id = Number(String(getRandom()).slice(2, 5) + String(getRandom()).slice(2, 4) + String((new Date)
		.getTime()).slice(-4)), e._flush_time = (new Date).getTime(), r.events.tempAdd("send", e), e
}
var vtrackBase = {
		initUrl: function() {
			var e, t, r = {
				server_url: {
					project: "",
					host: ""
				},
				page_url: {
					host: "",
					pathname: ""
				}
			};
			if (!isHttpUrl(sd.para.server_url)) return sd.log(
				"----vcollect---server_url\u5fc5\u987b\u4e3a\u6709\u6548 URL \u5b57\u7b26\u4e32"), !1;
			try {
				e = _URL(sd.para.server_url), r.server_url.project = e.searchParams.get("project") || "default", r
					.server_url.host = e.host
			} catch (i) {
				return sd.log("----vcollect---server_url\u89e3\u6790\u5f02\u5e38", i), !1
			}
			try {
				t = _URL(location.href), r.page_url.host = t.hostname, r.page_url.pathname = t.pathname
			} catch (i) {
				return sd.log("----vcollect---\u9875\u9762\u5730\u5740\u89e3\u6790\u5f02\u5e38", i), !1
			}
			return r
		},
		isDiv: function(e) {
			if (e.element_path && "div" !== trim(e.element_path.split(">").pop()).slice(0, 3)) return !1;
			return !0
		},
		configIsMatchNew: function(e, t) {
			if (isString(e.$element_selector) && isString(t.element_selector)) {
				if ("element_selector" === t.element_field && "equal" === t["function"]) return e
					.$element_selector === t.element_selector;
				if ("element_selector" === t.element_field && "contain" === t["function"]) return e
					.$element_selector.indexOf(t.element_selector) > -1
			}
			if (isString(e.$element_path) && isString(t.element_path)) {
				if ("element_path" === t.element_field && "equal" === t["function"]) return e.$element_path === t
					.element_path;
				if ("element_path" === t.element_field && "contain" === t["function"]) return e.$element_path
					.indexOf(t.element_path) > -1
			}
			return !1
		},
		configIsMatch: function(e, t) {
			return (!t.limit_element_content || t.element_content === e.$element_content) && ((!t
				.limit_element_position || t.element_position === String(e.$element_position)) && (t
				.element_field && t["function"] ? vtrackBase.configIsMatchNew(e, t) : vtrackBase
				.configIsMatchOldVersion(e, t)))
		},
		configIsMatchOldVersion: function(e, t) {
			if (!t.element_path) return !1;
			if (e.$element_position !== undefined) {
				if (t.element_path !== e.$element_path) return !1
			} else if (vtrackBase.isDiv({
				element_path: t.element_path
			})) {
				if (e.$element_path.indexOf(t.element_path) < 0) return !1
			} else if (t.element_path !== e.$element_path) return !1;
			return !0
		},
		filterConfig: function(e, t, r) {
			var i = [];
			if (!r) {
				var n = vtrackBase.initUrl();
				if (!n) return [];
				r = n.page_url
			}
			return "$WebClick" === e.event && each(t, function(t) {
				isObject(t) && ("webclick" === t.event_type || "appclick" === t.event_type) && isObject(t
					.event) && t.event.url_host === r.host && t.event.url_path === r.pathname &&
				vtrackBase.configIsMatch(e.properties, t.event) && i.push(t)
			}), i
		},
		getPropElInLi: function(e, t) {
			if (!(e && isElement(e) && isString(t))) return null;
			if ("li" !== e.tagName.toLowerCase()) return null;
			var r = sd.heatmap.getDomSelector(e);
			if (r) {
				var i = getDomBySelector(r + t);
				return i || null
			}
			return sd.log(
				"----custom---\u83b7\u53d6\u540c\u7ea7\u5c5e\u6027\u5143\u7d20\u5931\u8d25\uff0cselector\u4fe1\u606f\u5f02\u5e38",
				r, t), null
		},
		getProp: function(e, t) {
			if (!isObject(e)) return !1;
			if (!(isString(e.name) && e.name.length > 0)) return sd.log(
				"----vcustom----\u5c5e\u6027\u540d\u4e0d\u5408\u6cd5,\u5c5e\u6027\u629b\u5f03", e.name), !1;
			var r, i, n = {};
			if ("content" === e.method) {
				var a;
				if (isString(e.element_selector) && e.element_selector.length > 0) a = getDomBySelector(e
					.element_selector);
				else {
					if (!t || !isString(e.list_selector)) return sd.log(
						"----vcustom----\u5c5e\u6027\u914d\u7f6e\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03",
						e.name), !1;
					var s = getDomBySelector(t.properties.$element_selector);
					if (!s) return sd.log(
						"----vcustom----\u70b9\u51fb\u5143\u7d20\u83b7\u53d6\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03",
						e.name), !1;
					var o = sd.heatmap.getClosestLi(s);
					a = vtrackBase.getPropElInLi(o, e.list_selector)
				}
				if (!a || !isElement(a)) return sd.log(
					"----vcustom----\u5c5e\u6027\u5143\u7d20\u83b7\u53d6\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",
					e.name), !1;
				if ("input" === a.tagName.toLowerCase()) r = a.value || "";
				else if ("select" === a.tagName.toLowerCase()) {
					var d = a.selectedIndex;
					isNumber(d) && isElement(a[d]) && (r = getElementContent$1(a[d], "select"))
				} else r = getElementContent$1(a, a.tagName.toLowerCase());
				if (e.regular) {
					try {
						i = new RegExp(e.regular).exec(r)
					} catch (c) {
						return sd.log(
							"----vcustom----\u6b63\u5219\u5904\u7406\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",
							e.name), !1
					}
					if (null === i) return sd.log(
						"----vcustom----\u5c5e\u6027\u89c4\u5219\u5904\u7406\uff0c\u672a\u5339\u914d\u5230\u7ed3\u679c,\u5c5e\u6027\u629b\u5f03",
						e.name), !1;
					if (!isArray(i) || !isString(i[0])) return sd.log(
						"----vcustom----\u6b63\u5219\u5904\u7406\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03",
						e.name, i), !1;
					r = i[0]
				}
				if ("STRING" === e.type) n[e.name] = r;
				else if ("NUMBER" === e.type) {
					if (r.length < 1) return sd.log(
						"----vcustom----\u672a\u83b7\u53d6\u5230\u6570\u5b57\u5185\u5bb9\uff0c\u5c5e\u6027\u629b\u5f03",
						e.name, r), !1;
					if (isNaN(Number(r))) return sd.log(
						"----vcustom----\u6570\u5b57\u7c7b\u578b\u5c5e\u6027\u8f6c\u6362\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",
						e.name, r), !1;
					n[e.name] = Number(r)
				}
				return n
			}
			return sd.log("----vcustom----\u5c5e\u6027\u4e0d\u652f\u6301\u6b64\u83b7\u53d6\u65b9\u5f0f", e.name, e
				.method), !1
		},
		getAssignConfigs: function(e, t) {
			var r = vtrackBase.initUrl();
			if (!r || !r.page_url) return [];
			if (!isObject(t)) return [];
			var i = [];
			return t.events = t.events || t.eventList, isArray(t.events) && t.events.length > 0 ? (each(t.events,
				function(t) {
					isObject(t) && isObject(t.event) && t.event.url_host === r.page_url.host && t.event
						.url_path === r.page_url.pathname && e(t) && i.push(t)
				}), i) : []
		}
	},
	vapph5CustomProp = {
		events: [],
		getAssignConfigs: vtrackBase.getAssignConfigs,
		filterConfig: vtrackBase.filterConfig,
		getProp: vtrackBase.getProp,
		initUrl: vtrackBase.initUrl,
		updateEvents: function(e) {
			isArray(e) && (this.events = e)
		},
		init: function() {
			this.initAppGetPropsBridge()
		},
		geth5Props: function(e) {
			var t = {},
				r = [],
				i = this;
			if (!this.events.length) return {};
			if ("$WebClick" === e.event) {
				var n = this.filterConfig(e, this.events);
				if (!n.length) return {};
				each(n, function(n) {
					isObject(n) && (isArray(n.properties) && n.properties.length > 0 && each(n.properties,
						function(r) {
							if (isObject(r))
								if (!1 === r.h5) isArray(t.sensorsdata_app_visual_properties) || (t
									.sensorsdata_app_visual_properties = []), t
									.sensorsdata_app_visual_properties.push(r);
								else {
									var n = i.getProp(r, e);
									isObject(n) && (t = extend(t, n))
								}
						}), isString(n.event_name) && r.push(n.event_name))
				}), sd.bridge.hasVisualModeBridge() && (t.sensorsdata_web_visual_eventName = r)
			}
			return t.sensorsdata_app_visual_properties && (t.sensorsdata_app_visual_properties = base64Encode(JSON
				.stringify(t.sensorsdata_app_visual_properties))), t
		},
		initAppGetPropsBridge: function() {
			var e = this,
				t = new sd.SDKJSBridge("getJSVisualProperties");
			return t.onAppNotify(function(r) {
				var i = {};
				try {
					r = JSON.parse(base64Decode(r))
				} catch (s) {
					sd.log("getJSVisualProperties data parse error!")
				}
				if (isObject(r)) {
					var n = r.sensorsdata_js_visual_properties,
						a = e.initUrl();
					a && (a = a.page_url, isArray(n) && n.length > 0 && each(n, function(t) {
						if (isObject(t) && t.url_host === a.host && t.url_path === a.pathname &&
							t.h5) {
							var r = e.getProp(t);
							isObject(r) && (i = extend(i, r))
						}
					}))
				}
				return "android" === sd.bridge.bridge_info.platform && t.notifyApp({
					data: i
				}, r.message_id), i
			}), t
		}
	},
	vapph5collect = {
		events: [],
		customProp: vapph5CustomProp,
		getAssignConfigs: vtrackBase.getAssignConfigs,
		initUrl: vtrackBase.initUrl,
		init: function() {
			if (this.initUrl()) {
				var e = this.getConfigFromApp();
				e && this.updateConfigs(e), this.customProp.init(), this.initAppUpdateConfigBridge()
			}
		},
		initAppUpdateConfigBridge: function() {
			var e = this;
			return new sd.SDKJSBridge("updateH5VisualConfig").onAppNotify(function(t) {
				if (t) {
					try {
						t = JSON.parse(base64Decode(t))
					} catch (r) {
						return void sd.log("updateH5VisualConfig result parse error\uff01")
					}
					e.updateConfigs(t)
				}
			})
		},
		getConfigFromApp: function() {
			var e = new sd.SDKJSBridge("sensorsdata_get_app_visual_config").notifyApp();
			if (e) try {
				e = JSON.parse(base64Decode(e))
			} catch (t) {
				e = null, sd.log("getAppVisualConfig result parse error\uff01")
			}
			return e
		},
		updateConfigs: function(e) {
			this.events = this.filterConfigs(e), this.customProp.updateEvents(this.events)
		},
		filterConfigs: function(e) {
			return this.getAssignConfigs(function(e) {
				return !(!isObject(e) || !1 === e.h5)
			}, e)
		}
	},
	unlimitedDiv = {
		events: [],
		init: function(e) {
			this.filterWebClickEvents(e)
		},
		filterWebClickEvents: function(e) {
			this.events = vtrackcollect.getAssignConfigs(function(e) {
				return !(!isObject(e) || !0 !== e.event.unlimited_div || "webclick" !== e.event_type)
			}, e)
		},
		isTargetEle: function(e) {
			var t = sd.heatmap.getEleDetail(e);
			if (!isObject(t) || !isString(t.$element_path)) return !1;
			for (var r = 0; r < this.events.length; r++)
				if (isObject(this.events[r]) && isObject(this.events[r].event) && vtrackcollect.configIsMatch(t,
					this.events[r].event)) return !0;
			return !1
		}
	},
	customProp = {
		events: [],
		configSwitch: !1,
		collectAble: function() {
			return this.configSwitch && isObject(sd.para.heatmap) && sd.para.heatmap.get_vtrack_config
		},
		updateEvents: function(e) {
			this.events = vtrackcollect.getAssignConfigs(function(e) {
				return !!(isObject(e) && isArray(e.properties) && e.properties.length > 0)
			}, e), this.events.length ? this.configSwitch = !0 : this.configSwitch = !1
		},
		getVtrackProps: function(e) {
			var t = {};
			return this.collectAble() ? ("$WebClick" === e.event && (t = this.clickCustomPropMaker(e, this.events)),
				t) : {}
		},
		clickCustomPropMaker: function(e, t, r) {
			var i = this;
			r = r || this.filterConfig(e, t, vtrackcollect.url_info.page_url);
			var n = {};
			return r.length ? (each(r, function(t) {
				isArray(t.properties) && t.properties.length > 0 && each(t.properties, function(t) {
					var r = i.getProp(t, e);
					isObject(r) && extend(n, r)
				})
			}), n) : {}
		},
		getProp: vtrackBase.getProp,
		getPropElInLi: vtrackBase.getPropElInLi,
		filterConfig: vtrackBase.filterConfig
	},
	vtrackcollect = {
		unlimitedDiv: unlimitedDiv,
		config: {},
		storageEnable: !0,
		storage_name: "webjssdkvtrackcollect",
		para: {
			session_time: 18e5,
			timeout: 5e3,
			update_interval: 18e5
		},
		url_info: {},
		timer: null,
		update_time: null,
		customProp: customProp,
		initUrl: function() {
			var e = vtrackBase.initUrl();
			if (e) {
				var t;
				try {
					(t = new urlParse(sd.para.server_url))._values.Path = "/config/visualized/Web.conf", e.api_url =
						t.getUrl()
				} catch (r) {
					return sd.log("----vtrackcollect---API\u5730\u5740\u89e3\u6790\u5f02\u5e38", r), !1
				}
				this.url_info = e
			}
			return e
		},
		init: function() {
			if (!isObject(sd.para.heatmap) || !sd.para.heatmap.get_vtrack_config) return !1;
			if (_localStorage.isSupport() || (this.storageEnable = !1), !this.initUrl()) return sd.log(
				"----vtrackcustom----\u521d\u59cb\u5316\u5931\u8d25\uff0curl\u4fe1\u606f\u89e3\u6790\u5931\u8d25"
			), !1;
			if (this.storageEnable) {
				var e = store.readObjectVal(this.storage_name);
				if (isObject(e) && isObject(e.data))
					if (this.serverUrlIsSame(e.serverUrl)) {
						this.config = e.data, this.update_time = e.updateTime, this.updateConfig(e.data);
						var t = (new Date).getTime() - this.update_time;
						if (isNumber(t) && t > 0 && t < this.para.session_time) {
							var r = this.para.update_interval - t;
							this.setNextFetch(r)
						} else this.getConfigFromServer()
					} else this.getConfigFromServer();
				else this.getConfigFromServer()
			} else this.getConfigFromServer();
			this.pageStateListenner()
		},
		serverUrlIsSame: function(e) {
			return !!isObject(e) && (e.host === this.url_info.server_url.host && e.project === this.url_info
				.server_url.project)
		},
		getConfigFromServer: function() {
			var e = this;
			this.sendRequest(function(t, r) {
				e.update_time = (new Date).getTime();
				var i = {};
				200 === t ? r && isObject(r) && "Web" === r.os && (i = r, e.updateConfig(i)) : 205 === t ? e
					.updateConfig(i) : 304 === t ? i = e.config : (sd.log(
					"----vtrackcustom----\u6570\u636e\u5f02\u5e38", t), e.updateConfig(i)), e
					.updateStorage(i), e.setNextFetch()
			}, function(t) {
				e.update_time = (new Date).getTime(), sd.log(
					"----vtrackcustom----\u914d\u7f6e\u62c9\u53d6\u5931\u8d25", t), e.setNextFetch()
			})
		},
		setNextFetch: function(e) {
			var t = this;
			this.timer && (clearTimeout(this.timer), this.timer = null), e = e || this.para.update_interval, this
				.timer = setTimeout(function() {
				t.getConfigFromServer()
			}, e)
		},
		pageStateListenner: function() {
			var e = this;
			listenPageState({
				visible: function() {
					var t = (new Date).getTime() - e.update_time;
					if (isNumber(t) && t > 0 && t < e.para.update_interval) {
						var r = e.para.update_interval - t;
						e.setNextFetch(r)
					} else e.getConfigFromServer()
				},
				hidden: function() {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
			})
		},
		updateConfig: function(e) {
			if (!isObject(e)) return !1;
			this.config = e, this.customProp.updateEvents(e), this.unlimitedDiv.init(e)
		},
		updateStorage: function(e) {
			if (!this.storageEnable) return !1;
			if (!isObject(e)) return !1;
			var t;
			if (this.url_info.server_url) t = this.url_info.server_url;
			else {
				var r = vtrackcollect.initUrl();
				if (!r) return !1;
				t = r.server_url
			}
			var i = {
				updateTime: (new Date).getTime(),
				data: e,
				serverUrl: t
			};
			store.saveObjectVal(this.storage_name, i)
		},
		sendRequest: function(e, t) {
			var r = {
				app_id: this.url_info.page_url.host
			};
			this.config.version && (r.v = this.config.version), jsonp({
				url: this.url_info.api_url,
				callbackName: "saJSSDKVtrackCollectConfig",
				data: r,
				timeout: this.para.timeout,
				success: function(t, r) {
					e(t, r)
				},
				error: function(e) {
					t(e)
				}
			})
		},
		getAssignConfigs: vtrackBase.getAssignConfigs,
		configIsMatch: vtrackBase.configIsMatch
	};

function addBasicProps(e, t) {
	var r = t.sensors,
		i = {};
	isObject(e) && isObject(e.identities) && !isEmptyObject(e.identities) ? extend(i, e.identities) : extend(i, store
		._state.identities);
	var n = {
		identities: i,
		distinct_id: store.getDistinctId(),
		lib: {
			$lib: "js",
			$lib_method: "code",
			$lib_version: String(r.lib_version)
		},
		properties: {}
	};
	return isObject(e) && isObject(e.properties) && !isEmptyObject(e.properties) && (e.properties.$lib_detail && (n.lib
		.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), e.properties.$lib_method && (
		n.lib.$lib_method = e.properties.$lib_method, delete e.properties.$lib_method)), extend2Lev(n, store
		.getUnionId(), e), isObject(e.properties) && !isEmptyObject(e.properties) && extend(n.properties, e
		.properties), e.type && "profile" === e.type.slice(0, 7) || (n.properties = extend({}, pageInfo
		.properties(), store.getProps(), store.getSessionProps(), pageInfo.currentProps, n.properties), r.para
		.preset_properties.latest_referrer && !isString(n.properties.$latest_referrer) && (n.properties
		.$latest_referrer = "\u53d6\u503c\u5f02\u5e38"), r.para.preset_properties.latest_search_keyword && !
		isString(n.properties.$latest_search_keyword) && (r.para.preset_properties.search_keyword_baidu && isString(
		n.properties.$search_keyword_id) && isNumber(n.properties.$search_keyword_id_hash) && isString(n
		.properties.$search_keyword_id_type) || (n.properties.$latest_search_keyword =
		"\u53d6\u503c\u5f02\u5e38")), r.para.preset_properties.latest_traffic_source_type && !isString(n
		.properties.$latest_traffic_source_type) && (n.properties.$latest_traffic_source_type =
		"\u53d6\u503c\u5f02\u5e38"), r.para.preset_properties.latest_landing_page && !isString(n.properties
		.$latest_landing_page) && (n.properties.$latest_landing_page = "\u53d6\u503c\u5f02\u5e38"),
		"not_collect" === r.para.preset_properties.latest_wx_ad_click_id ? (delete n.properties
			._latest_wx_ad_click_id, delete n.properties._latest_wx_ad_hash_key, delete n.properties
			._latest_wx_ad_callbacks) : r.para.preset_properties.latest_wx_ad_click_id && !isString(n.properties
			._latest_wx_ad_click_id) && (n.properties._latest_wx_ad_click_id = "\u53d6\u503c\u5f02\u5e38", n
			.properties._latest_wx_ad_hash_key = "\u53d6\u503c\u5f02\u5e38", n.properties._latest_wx_ad_callbacks =
			"\u53d6\u503c\u5f02\u5e38"), isString(n.properties._latest_wx_ad_click_id) && (n.properties.$url =
		getURL())), n.properties.$time && isDate(n.properties.$time) ? (n.time = 1 * n.properties.$time,
		delete n.properties.$time) : n.time = 1 * new Date,
		function(e) {
			if (r.bridge && "success" === r.bridge.bridge_info.verify_success) {
				var t = vapph5collect.customProp.geth5Props(JSON.parse(JSON.stringify(e)));
				isObject(t) && !isEmptyObject(t) && (e.properties = extend(e.properties, t))
			}
			var i = vtrackcollect.customProp.getVtrackProps(JSON.parse(JSON.stringify(e)));
			isObject(i) && !isEmptyObject(i) && (e.properties = extend(e.properties, i))
		}(n), parseSuperProperties(n), saNewUser.checkIsAddSign(n), saNewUser.checkIsFirstTime(n), addReferrerHost(n),
		addPropsHook(n), n
}
var interceptors = {
		basicProps: {
			priority: 0,
			entry: addBasicProps
		},
		formatData: {
			priority: 0,
			entry: formatData
		},
		finalAdjustData: {
			priority: 0,
			entry: addFinalData
		}
	},
	buildDataStageImpl = {
		stage: null,
		init: function(e) {
			this.stage = e
		},
		interceptor: interceptors
	};

function processBasicProps(e) {
	return buildDataStageImpl.stage.process("basicProps", e)
}

function processFormatData(e) {
	return buildDataStageImpl.stage.process("formatData", e)
}
var saEvent = {};

function trackLinkByCustomTrackFunc(e, t, r, i) {
	var n = null;
	if ((e = e || {}).ele && (n = e.ele), e.event && (n = e.target ? e.target : e.event.target), r = r || {}, !n ||
	"object" != typeof n) return !1;
	if (!n.href || /^javascript/.test(n.href) || n.target || n.download || n.onclick) return i(t, r), !1;

	function a(e) {
		e.stopPropagation(), e.preventDefault();
		var a = !1;

		function s() {
			a || (a = !0, location.href = n.href)
		}
		setTimeout(s, 1e3), i(t, r, s)
	}
	e.event && a(e.event), e.ele && saAddEvent(e.ele, "click", function(e) {
		a(e)
	})
}

function getSafeHttpProtocol() {
	var e = location.protocol;
	return "http:" === e || "https:" === e ? e : "http:"
}
saEvent.check = check, saEvent.sendItem = function(e) {
	var t = {
		lib: {
			$lib: "js",
			$lib_method: "code",
			$lib_version: String(sd.lib_version)
		},
		time: 1 * new Date
	};
	extend(t, e), processFormatData(t), sd.kit.sendData(t)
}, saEvent.send = function(e, t) {
	var r = sd.kit.buildData(e);
	sd.kit.sendData(r, t)
};
var viewStageImpl = {
	stage: null,
	init: function(e) {
		this.stage = e
	}
};

function processWebClickEvent(e) {
	return viewStageImpl.stage.process("webClickEvent", e)
}

function processWebStayEvent(e) {
	return viewStageImpl.stage.process("webStayEvent", e)
}
var UNLIMITED_TAGS_MAP = {
		label: !1,
		li: !1,
		a: !0,
		button: !0
	},
	heatmap = {
		otherTags: [],
		initUnlimitedTags: function() {
			each(heatmap.otherTags, function(e) {
				e in UNLIMITED_TAGS_MAP && (UNLIMITED_TAGS_MAP[e] = !0)
			})
		},
		isUnlimitedTag: function(e) {
			if (!e || 1 !== e.nodeType) return !1;
			var t = e.nodeName.toLowerCase();
			return UNLIMITED_TAGS_MAP[t] || hasAttributes(e, sd.para.heatmap.track_attr)
		},
		getTargetElement: function(e, t) {
			var r = this,
				i = e;
			if ("object" != typeof i) return null;
			if ("string" != typeof i.tagName) return null;
			var n = i.tagName.toLowerCase();
			if ("body" === n.toLowerCase() || "html" === n.toLowerCase()) return null;
			if (!i || !i.parentNode || !i.parentNode.children) return null;
			var a = i.parentNode,
				s = r.otherTags;
			if ("a" === n || "button" === n || "input" === n || "textarea" === n) return i;
			if (indexOf(s, n) > -1) return i;
			if ("area" === n && "map" === a.tagName.toLowerCase() && ry(a).prev().tagName && "img" === ry(a).prev()
				.tagName.toLowerCase()) return ry(a).prev();
			if ("div" === n && sd.para.heatmap.collect_tags.div && r.isDivLevelValid(i) && ((sd.para.heatmap && sd
				.para.heatmap.collect_tags && sd.para.heatmap.collect_tags.div && sd.para.heatmap
				.collect_tags.div.max_level || 1) > 1 || r.isCollectableDiv(i))) return i;
			if (r.isStyleTag(n) && sd.para.heatmap.collect_tags.div) {
				var o = r.getCollectableParent(i);
				if (o && r.isDivLevelValid(o)) return o
			}
			return r.hasElement({
				event: t && t.originalEvent || t,
				element: e
			}, function(e) {
				return r.isUnlimitedTag(e)
			}) || null
		},
		getDivLevels: function(e, t) {
			var r = heatmap.getElementPath(e, !0, t).split(" > "),
				i = 0;
			return each(r, function(e) {
				"div" === e && i++
			}), i
		},
		isDivLevelValid: function(e) {
			for (var t = sd.para.heatmap && sd.para.heatmap.collect_tags && sd.para.heatmap.collect_tags.div && sd
				.para.heatmap.collect_tags.div.max_level || 1, r = e.getElementsByTagName("div"), i = r.length -
				1; i >= 0; i--)
				if (heatmap.getDivLevels(r[i], e) > t) return !1;
			return !0
		},
		getElementPath: function(e, t, r) {
			for (var i = []; e.parentNode;) {
				if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
					i.unshift(e.tagName.toLowerCase() + "#" + e.id);
					break
				}
				if (r && e === r) {
					i.unshift(e.tagName.toLowerCase());
					break
				}
				if (e === document.body) {
					i.unshift("body");
					break
				}
				i.unshift(e.tagName.toLowerCase()), e = e.parentNode
			}
			return i.join(" > ")
		},
		getClosestLi: function(e) {
			return function(e, t) {
				for (; e && e !== document && 1 === e.nodeType; e = e.parentNode)
					if (e.tagName.toLowerCase() === t) return e;
				return null
			}(e, "li")
		},
		getElementPosition: function(e, t, r) {
			var i = sd.heatmap.getClosestLi(e);
			if (!i) return null;
			var n = e.tagName.toLowerCase(),
				a = i.getElementsByTagName(n),
				s = a.length,
				o = [];
			if (s > 1) {
				for (var d = 0; d < s; d++) {
					sd.heatmap.getElementPath(a[d], r) === t && o.push(a[d])
				}
				if (o.length > 1) return indexOf(o, e)
			}
			return function(e) {
				if (!e.parentNode) return "";
				if (1 === ry(e).getSameTypeSiblings().length) return 0;
				for (var t = 0, r = e; ry(r).previousElementSibling().ele; r = ry(r).previousElementSibling()
					.ele, t++);
				return t
			}(i)
		},
		setNotice: function(e) {
			sd.is_heatmap_render_mode = !0, sd.para.heatmap || (sd.errorMsg =
					"\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"
			), e && "http:" === e.slice(0, 5) && "https:" === location.protocol && (sd.errorMsg =
					"\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"
			), sd.para.heatmap_url || (sd.para.heatmap_url = getSafeHttpProtocol() +
				"//static.sensorsdata.cn/sdk/" + sd.lib_version + "/heatmap.min.js")
		},
		getDomIndex: function(e) {
			if (!e.parentNode) return -1;
			for (var t = 0, r = e.tagName, i = e.parentNode.children, n = 0; n < i.length; n++)
				if (i[n].tagName === r) {
					if (e === i[n]) return t;
					t++
				} return -1
		},
		selector: function(e, t) {
			var r = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
			return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute(
				"id")) && (!sd.para.heatmap || sd.para.heatmap && "not_use_id" !== sd.para.heatmap
				.element_selector) && !t ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~r ?
				":nth-of-type(" + (r + 1) + ")" : "")
		},
		getDomSelector: function(e, t, r) {
			if (!e || !e.parentNode || !e.parentNode.children) return !1;
			t = t && t.join ? t : [];
			var i = e.nodeName.toLowerCase();
			return e && "body" !== i && 1 == e.nodeType ? (t.unshift(this.selector(e, r)), e.getAttribute && e
				.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && sd.para
				.heatmap && "not_use_id" !== sd.para.heatmap.element_selector && !r ? t.join(" > ") : this
				.getDomSelector(e.parentNode, t, r)) : (t.unshift("body"), t.join(" > "))
		},
		na: function() {
			var e = document.documentElement.scrollLeft || window.pageXOffset;
			return parseInt(isNaN(e) ? 0 : e, 10)
		},
		i: function() {
			var e = 0;
			try {
				e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e
			} catch (t) {
				e = 0
			}
			return parseInt(e, 10)
		},
		getBrowserWidth: function() {
			var e = window.innerWidth || document.body.clientWidth;
			return isNaN(e) ? 0 : parseInt(e, 10)
		},
		getBrowserHeight: function() {
			var e = window.innerHeight || document.body.clientHeight;
			return isNaN(e) ? 0 : parseInt(e, 10)
		},
		getScrollWidth: function() {
			var e = parseInt(document.body.scrollWidth, 10);
			return isNaN(e) ? 0 : e
		},
		getEleDetail: function(e) {
			var t = this.getDomSelector(e),
				r = getEleInfo({
					target: e
				});
			r.$element_selector = t || "", r.$element_path = sd.heatmap.getElementPath(e, sd.para.heatmap &&
				"not_use_id" === sd.para.heatmap.element_selector);
			var i = sd.heatmap.getElementPosition(e, r.$element_path, sd.para.heatmap && "not_use_id" === sd.para
				.heatmap.element_selector);
			return isNumber(i) && (r.$element_position = i), r
		},
		getPointerEventProp: function(e, t) {
			if (!e) return {};

			function r() {
				return {
					scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft || 0,
					scrollTop: document.body.scrollTop || document.documentElement.scrollTop || 0
				}
			}

			function i(e) {
				if (document.documentElement.getBoundingClientRect) {
					var t = e.getBoundingClientRect();
					return {
						targetEleX: t.left + r().scrollLeft || 0,
						targetEleY: t.top + r().scrollTop || 0
					}
				}
			}

			function n(e) {
				return Number(Number(e).toFixed(3))
			}
			return function(e) {
				var a = e.pageX || e.clientX + r().scrollLeft || e.offsetX + i(t).targetEleX || 0,
					s = e.pageY || e.clientY + r().scrollTop || e.offsetY + i(t).targetEleY || 0;
				return {
					$page_x: n(a),
					$page_y: n(s)
				}
			}(e)
		},
		start: function(e, t, r, i, n) {
			if (isObject(sd.para.heatmap) && isFunction(sd.para.heatmap.collect_element) && !sd.para.heatmap
				.collect_element(t)) return !1;
			processWebClickEvent(heatmap.getBasicEleInfo(e, t, r, i, n))
		},
		getBasicEleInfo: function(e, t, r, i, n) {
			var a = isObject(i) ? i : {},
				s = isFunction(n) ? n : isFunction(i) ? i : undefined,
				o = this.getEleDetail(t);
			if (sd.para.heatmap && sd.para.heatmap.custom_property) {
				var d = sd.para.heatmap.custom_property(t);
				isObject(d) && (o = extend(o, d))
			}
			return {
				event: e,
				target: t,
				props: o = extend(o, this.getPointerEventProp(e, t), a),
				tagName: r,
				callback: s
			}
		},
		hasElement: function(e, t) {
			var r;
			if (e.event) {
				var i = e.event;
				r = i.path || i._getPath && i._getPath()
			} else e.element && (r = ry(e.element).getParents());
			if (r && isArray(r) && r.length > 0)
				for (var n = 0; n < r.length; n++)
					if ("object" == typeof r[n] && 1 === r[n].nodeType && t(r[n])) return r[n]
		},
		isStyleTag: function(e, t) {
			return !(indexOf(["a", "div", "input", "button", "textarea"], e) > -1) && (!t || sd.para.heatmap && sd
				.para.heatmap.collect_tags && sd.para.heatmap.collect_tags.div ? !!(isObject(sd.para.heatmap) &&
				isObject(sd.para.heatmap.collect_tags) && isObject(sd.para.heatmap.collect_tags.div) &&
				isArray(sd.para.heatmap.collect_tags.div.ignore_tags) && indexOf(sd.para.heatmap
					.collect_tags.div.ignore_tags, e) > -1) : indexOf(["mark", "/mark", "strong", "b", "em",
				"i", "u", "abbr", "ins", "del", "s", "sup"
			], e) > -1)
		},
		isCollectableDiv: function(e, t) {
			try {
				if (0 === e.children.length) return !0;
				for (var r = 0; r < e.children.length; r++)
					if (1 === e.children[r].nodeType) {
						var i = e.children[r].tagName.toLowerCase(),
							n = sd.para && sd.para.heatmap && sd.para.heatmap.collect_tags && sd.para.heatmap
								.collect_tags.div && sd.para.heatmap.collect_tags.div.max_level;
						if (!("div" === i && n > 1 || this.isStyleTag(i, t))) return !1;
						if (!this.isCollectableDiv(e.children[r], t)) return !1
					} return !0
			} catch (a) {
				sd.log(a)
			}
			return !1
		},
		getCollectableParent: function(e, t) {
			try {
				var r = e.parentNode,
					i = r ? r.tagName.toLowerCase() : "";
				if ("body" === i) return !1;
				var n = sd.para && sd.para.heatmap && sd.para.heatmap.collect_tags && sd.para.heatmap.collect_tags
					.div && sd.para.heatmap.collect_tags.div.max_level;
				if (i && "div" === i && (n > 1 || this.isCollectableDiv(r, t))) return r;
				if (r && this.isStyleTag(i, t)) return this.getCollectableParent(r, t)
			} catch (a) {
				sd.log(a)
			}
			return !1
		},
		listenUrlChange: function(e) {
			e(), sd.ee.spa.on("switch", function() {
				e()
			})
		},
		initScrollmap: function() {
			if (!isObject(sd.para.heatmap) || "default" !== sd.para.heatmap.scroll_notice_map) return !1;
			var e = !0;
			sd.para.scrollmap && isFunction(sd.para.scrollmap.collect_url) && this.listenUrlChange(function() {
				e = !!sd.para.scrollmap.collect_url()
			});
			var t = function(e) {
				var t = {};
				return t.timeout = e.timeout || 1e3, t.func = e.func, t.hasInit = !1, t.inter = null, t.main =
					function(e, t) {
						this.func(e, t), this.inter = null
					}, t.go = function(e) {
					var r = {};
					this.inter || (r.$viewport_position = document.documentElement && document
							.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop ||
						0, r.$viewport_position = Math.round(r.$viewport_position) || 0, e ? t.main(r, !
						0) : this.inter = setTimeout(function() {
						t.main(r)
					}, this.timeout))
				}, t
			}({
				timeout: 1e3,
				func: function(e, t) {
					var r = document.documentElement && document.documentElement.scrollTop || window
							.pageYOffset || document.body.scrollTop || 0,
						i = new Date,
						n = i - this.current_time;
					(n > sd.para.heatmap.scroll_delay_time && r - e.$viewport_position != 0 || t) && (e
						.$url = getURL(), e.$title = document.title, e.$url_path = getURLPath(), e
						.event_duration = Math.min(sd.para.heatmap.scroll_event_duration, parseInt(n) /
						1e3), e.event_duration = e.event_duration < 0 ? 0 : e.event_duration,
						processWebStayEvent(e)), this.current_time = i
				}
			});
			t.current_time = new Date, saAddEvent(window, "scroll", function() {
				if (!e) return !1;
				t.go()
			}), saAddEvent(window, "unload", function() {
				if (!e) return !1;
				t.go("notime")
			})
		},
		initHeatmap: function() {
			var e = this,
				t = !0;
			if (!isObject(sd.para.heatmap) || "default" !== sd.para.heatmap.clickmap) return !1;
			isFunction(sd.para.heatmap.collect_url) && this.listenUrlChange(function() {
				t = !!sd.para.heatmap.collect_url()
			}), "all" === sd.para.heatmap.collect_elements ? sd.para.heatmap.collect_elements = "all" : sd.para
				.heatmap.collect_elements = "interact", "all" === sd.para.heatmap.collect_elements ? saAddEvent(
				document, "click",
				function(r) {
					if (!t) return !1;
					var i = r || window.event;
					if (!i) return !1;
					var n = i.target || i.srcElement;
					if ("object" != typeof n) return !1;
					if ("string" != typeof n.tagName) return !1;
					var a = n.tagName.toLowerCase();
					if ("body" === a || "html" === a) return !1;
					if (!n || !n.parentNode || !n.parentNode.children) return !1;
					var s = n.parentNode.tagName.toLowerCase();
					"a" === s || "button" === s ? e.start(i, n.parentNode, s) : e.start(i, n, a)
				}) : saAddEvent(document, "click", function(r) {
				if (!t) return !1;
				var i = r || window.event;
				if (!i) return !1;
				var n = i.target || i.srcElement,
					a = sd.heatmap.getTargetElement(n, r);
				a ? e.start(i, a, a.tagName.toLowerCase()) : isElement(n) && "div" === n.tagName
						.toLowerCase() && isObject(sd.para.heatmap) && sd.para.heatmap.get_vtrack_config &&
					unlimitedDiv.events.length > 0 && unlimitedDiv.isTargetEle(n) && e.start(i, n, n.tagName
						.toLowerCase(), {
						$lib_method: "vtrack"
					})
			})
		}
	};

function getClassifiedUtms() {
	var e = pageInfo.campaignParams(),
		t = {};
	return each(e, function(e, r, i) {
		-1 !== (" " + sd.source_channel_standard + " ").indexOf(" " + r + " ") ? t["$" + r] = i[r] : t[r] = i[r]
	}), t
}

function sendFirstProfile(e, t, r) {
	if (sd.is_first_visitor && r) {
		var i = {};
		sd.para.preset_properties.search_keyword_baidu && isReferralTraffic(document.referrer) && isBaiduTraffic() && (i
			.$search_keyword_id = getBaiduKeyword.id(), i.$search_keyword_id_type = getBaiduKeyword.type(), i
			.$search_keyword_id_hash = hashCode53(i.$search_keyword_id));
		var n = getReferrer(null, t);
		e(extend({
			$first_visit_time: new Date,
			$first_referrer: n,
			$first_referrer_host: n ? getHostname(n, "\u53d6\u503c\u5f02\u5e38") : "",
			$first_browser_language: isString(navigator.language) ? navigator.language.toLowerCase() :
				"\u53d6\u503c\u5f02\u5e38",
			$first_browser_charset: isString(document.charset) ? document.charset.toUpperCase() :
				"\u53d6\u503c\u5f02\u5e38",
			$first_traffic_source_type: getSourceFromReferrer(),
			$first_search_keyword: getKeywordFromReferrer()
		}, getClassifiedUtms(), i)), sd.is_first_visitor = !1
	}
}
var commonWays = {
	autoTrackIsUsed: !1,
	isReady: function(e) {
		e()
	},
	getUtm: function() {
		return pageInfo.campaignParams()
	},
	getStayTime: function() {
		return (new Date - sd._t) / 1e3
	},
	setProfileLocal: function(e) {
		if (!_localStorage.isSupport()) return sd.setProfile(e), !1;
		if (!isObject(e) || isEmptyObject(e)) return !1;
		var t = store.readObjectVal("sensorsdata_2015_jssdk_profile"),
			r = !1;
		if (isObject(t) && !isEmptyObject(t)) {
			for (var i in e) !(i in t && t[i] !== e[i]) && i in t || (t[i] = e[i], r = !0);
			r && (store.saveObjectVal("sensorsdata_2015_jssdk_profile", t), sd.setProfile(e))
		} else store.saveObjectVal("sensorsdata_2015_jssdk_profile", e), sd.setProfile(e)
	},
	setInitReferrer: function() {
		var e = getReferrer();
		sd.setOnceProfile({
			_init_referrer: e,
			_init_referrer_host: pageInfo.pageProp.referrer_host
		})
	},
	setSessionReferrer: function() {
		var e = getReferrer();
		store.setSessionPropsOnce({
			_session_referrer: e,
			_session_referrer_host: pageInfo.pageProp.referrer_host
		})
	},
	setDefaultAttr: function() {
		pageInfo.register({
			_current_url: location.href,
			_referrer: getReferrer(),
			_referring_host: pageInfo.pageProp.referrer_host
		})
	},
	trackHeatMap: function(e, t, r) {
		if ("object" == typeof e && e.tagName) {
			var i = e.tagName.toLowerCase(),
				n = e.parentNode.tagName.toLowerCase(),
				a = sd.para.heatmap && sd.para.heatmap.track_attr ? sd.para.heatmap.track_attr : [
					"data-sensors-click"
				];
			"button" === i || "a" === i || "a" === n || "button" === n || "input" === i || "textarea" === i ||
			hasAttributes(e, a) || heatmap.start(null, e, i, t, r)
		}
	},
	trackAllHeatMap: function(e, t, r) {
		if ("object" == typeof e && e.tagName) {
			var i = e.tagName.toLowerCase();
			heatmap.start(null, e, i, t, r)
		}
	},
	autoTrackSinglePage: function(e, t) {
		var r;
		r = this.autoTrackIsUsed ? pageInfo.pageProp.url : pageInfo.pageProp.referrer;
		var i = !(e = isObject(e) ? e : {}).not_set_profile;

		function n(e, t) {
			sd.track("$pageview", extend({
				$referrer: r,
				$url: getURL(),
				$url_path: getURLPath(),
				$title: document.title
			}, e, getClassifiedUtms()), t), r = getURL()
		}
		e.not_set_profile && delete e.not_set_profile, n(e, t), this.autoTrackSinglePage = n, sendFirstProfile(
			sd.setOnceProfile, !1, i)
	},
	autoTrackWithoutProfile: function(e, t) {
		e = isObject(e) ? e : {}, this.autoTrack(extend(e, {
			not_set_profile: !0
		}), t)
	},
	autoTrack: function(e, t) {
		e = isObject(e) ? e : {};
		var r = getClassifiedUtms(),
			i = !e.not_set_profile;
		e.not_set_profile && delete e.not_set_profile;
		var n = location.href;
		sd.para.is_single_page && addHashEvent(function() {
			var i = getReferrer(n, !0);
			sd.track("$pageview", extend({
				$referrer: i,
				$url: getURL(),
				$url_path: getURLPath(),
				$title: document.title
			}, r, e), t), n = getURL()
		}), sd.track("$pageview", extend({
			$referrer: getReferrer(null, !0),
			$url: getURL(),
			$url_path: getURLPath(),
			$title: document.title
		}, r, e), t), sendFirstProfile(sd.setOnceProfile, !0, i), this.autoTrackIsUsed = !0
	},
	getAnonymousID: function() {
		return isEmptyObject(store._state) ? "SDK is not initialized." : store._state._first_id || store._state
			.first_id || store._state._distinct_id || store._state.distinct_id
	},
	setPlugin: function(e) {
		if (!isObject(e)) return !1;
		each(e, function(e, t) {
			isFunction(e) && (isObject(window.SensorsDataWebJSSDKPlugin) && window
				.SensorsDataWebJSSDKPlugin[t] ? e(window.SensorsDataWebJSSDKPlugin[t]) : isObject(sd
				.modules) && sd.modules[t] ? e(window.SensorsDataWebJSSDKPlugin[t]) : sd.log(t +
				"is not found,please check sensorsdata documents."))
		})
	},
	useModulePlugin: function() {
		sd.use.apply(sd, arguments)
	},
	useAppPlugin: function() {
		this.setPlugin.apply(this, arguments)
	}
};

function addSinglePageEvent(e) {
	var t, r = location.href,
		i = window.history.pushState,
		n = window.history.replaceState;
	isFunction(window.history.pushState) && (window.history.pushState = function() {
		i.apply(window.history, arguments), e(r), r = location.href
	}), isFunction(window.history.replaceState) && (window.history.replaceState = function() {
		n.apply(window.history, arguments), e(r), r = location.href
	}), t = window.document.documentMode ? "hashchange" : i ? "popstate" : "hashchange", addEvent(window, t,
		function() {
			e(r), r = location.href
		})
}
var spa = new EventEmitter,
	sdk = new EventEmitter,
	ee = {};

function eventEmitterFacade(e, t) {
	var r = [];
	"string" == typeof e && e in ee.EVENT_LIST && (r = ee.EVENT_LIST[e], ee[r[0]].on(r[1], t))
}

function loginBody(e, t) {
	var r = e.id,
		i = e.callback,
		n = e.name,
		a = store.getFirstId(),
		s = store.getOriginDistinctId();
	if (!check({
		distinct_id: r
	})) return sdLog("login id is invalid"), !1;
	if (r === store.getOriginDistinctId() && !a) return sdLog("login id is equal to distinct_id"), !1;
	if (isObject(store._state.identities) && store._state.identities.hasOwnProperty(n) && r === store._state.first_id)
		return !1;
	if (store._state.history_login_id.name !== n || r !== store._state.history_login_id.value) {
		store._state.identities[n] = r, store.set("history_login_id", {
			name: n,
			value: r
		}), a || store.set("first_id", s), t(r, "$SignUp", {}, i);
		var o = {
			$identity_cookie_id: store._state.identities.$identity_cookie_id
		};
		return o[n] = r, resetIdentities(o), !0
	}
	return !1
}

function resetIdentities(e) {
	var t = {};
	for (var r in e) t[r] = e[r];
	store._state.identities = t, store.save()
}

function deleteBindIDData(e, t) {
	if (!check({
		unbindKey: e,
		bindValue: t
	})) return !1;
	if (isObject(store._state.identities) && store._state.identities.hasOwnProperty(e) && store._state.identities[e] ===
		t) {
		var r = store.getUnionId().login_id;
		r && e + "+" + t === r && (store._state.distinct_id = store._state.first_id, store._state.first_id = "", store
			.set("history_login_id", {
				name: "",
				value: ""
			})), "$identity_cookie_id" !== e && (delete store._state.identities[e], store.save())
	}
	var i = {};
	return i[e] = t, i
}

function setInitVar() {
	sd._t = sd._t || 1 * new Date, sd.is_first_visitor = !1, sd.source_channel_standard = source_channel_standard
}

function initPara(e) {
	extend(sdPara, e || sd.para || {}), sd.para = sdPara;
	var t, r = {};
	if (isObject(sd.para.is_track_latest))
		for (var i in sd.para.is_track_latest) r["latest_" + i] = sd.para.is_track_latest[i];
	for (t in sd.para.preset_properties = extend({}, defaultPara.preset_properties, r, sd.para.preset_properties || {}),
		defaultPara) void 0 === sd.para[t] && (sd.para[t] = defaultPara[t]);
	"string" != typeof sd.para.web_url || "://" !== sd.para.web_url.slice(0, 3) && "//" !== sd.para.web_url.slice(0,
		2) || ("://" === sd.para.web_url.slice(0, 3) ? sd.para.web_url = location.protocol.slice(0, -1) + sd.para
		.web_url : sd.para.web_url = location.protocol + sd.para.web_url), debug.protocol.serverUrl(), sd.bridge &&
	sd.bridge.initPara();
	var n = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
		a = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/",
			"bing.com/", "ask.com/"
		],
		s = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com",
			"weixin.qq.com"
		],
		o = {
			baidu: ["wd", "word", "kw", "keyword"],
			google: "q",
			bing: "q",
			yahoo: "p",
			sogou: ["query", "keyword"],
			so: "q",
			sm: "q"
		};
	"object" == typeof sd.para.source_type && (sd.para.source_type.utm = isArray(sd.para.source_type.utm) ? sd.para
		.source_type.utm.concat(n) : n, sd.para.source_type.search = isArray(sd.para.source_type.search) ? sd.para
		.source_type.search.concat(a) : a, sd.para.source_type.social = isArray(sd.para.source_type.social) ? sd
		.para.source_type.social.concat(s) : s, sd.para.source_type.keyword = isObject(sd.para.source_type
		.keyword) ? extend(o, sd.para.source_type.keyword) : o);
	var d = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
	if (sd.para.heatmap && !isObject(sd.para.heatmap) && (sd.para.heatmap = {}), isObject(sd.para.heatmap)) {
		sd.para.heatmap.clickmap = sd.para.heatmap.clickmap || "default", sd.para.heatmap.scroll_notice_map = sd.para
			.heatmap.scroll_notice_map || "default", sd.para.heatmap.scroll_delay_time = sd.para.heatmap
			.scroll_delay_time || 4e3, sd.para.heatmap.scroll_event_duration = sd.para.heatmap.scroll_event_duration ||
			18e3, sd.para.heatmap.renderRefreshTime = sd.para.heatmap.renderRefreshTime || 1e3, sd.para.heatmap
			.loadTimeout = sd.para.heatmap.loadTimeout || 1e3, !0 !== sd.para.heatmap.get_vtrack_config && (sd.para
			.heatmap.get_vtrack_config = !1);
		var c = isArray(sd.para.heatmap.track_attr) ? filter(sd.para.heatmap.track_attr, function(e) {
			return e && "string" == typeof e
		}) : [];
		if (c.push("data-sensors-click"), sd.para.heatmap.track_attr = c, isObject(sd.para.heatmap.collect_tags))
			if (!0 === sd.para.heatmap.collect_tags.div) sd.para.heatmap.collect_tags.div = {
				ignore_tags: d,
				max_level: 1
			};
			else if (isObject(sd.para.heatmap.collect_tags.div)) {
				if (sd.para.heatmap.collect_tags.div.ignore_tags ? isArray(sd.para.heatmap.collect_tags.div.ignore_tags) ||
					(sd.log("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"), sd.para.heatmap
						.collect_tags.div.ignore_tags = d) : sd.para.heatmap.collect_tags.div.ignore_tags = d, sd.para
					.heatmap.collect_tags.div.max_level) {
					-1 === indexOf([1, 2, 3], sd.para.heatmap.collect_tags.div.max_level) && (sd.para.heatmap.collect_tags
						.div.max_level = 1)
				}
			} else sd.para.heatmap.collect_tags.div = !1;
		else sd.para.heatmap.collect_tags = {
			div: !1
		}
	}
	sd.para.server_url = optimizeServerUrl(sd.para.server_url), !0 === sd.para.noCache ? sd.para.noCache = "?" + (
		new Date).getTime() : sd.para.noCache = "", sd.para.callback_timeout > sd.para.datasend_timeout && (sd.para
		.datasend_timeout = sd.para.callback_timeout), sd.para.heatmap && sd.para.heatmap.collect_tags && isObject(
		sd.para.heatmap.collect_tags) && each(sd.para.heatmap.collect_tags, function(e, t) {
		"div" !== t && e && sd.heatmap.otherTags.push(t)
	}), sd.para.heatmap && "default" === sd.para.heatmap.clickmap && sd.heatmap.initUnlimitedTags()
}
ee.spa = spa, ee.sdk = sdk, ee.initSystemEvent = function() {
	addSinglePageEvent(function(e) {
		spa.emit("switch", e)
	})
}, ee.EVENT_LIST = {
	spaSwitch: ["spa", "switch"],
	sdkBeforeInit: ["sdk", "beforeInit"],
	sdkInitPara: ["sdk", "initPara"],
	sdkAfterInitPara: ["sdk", "afterInitPara"],
	sdkInitAPI: ["sdk", "initAPI"],
	sdkAfterInitAPI: ["sdk", "afterInitAPI"],
	sdkAfterInit: ["sdk", "afterInit"],
	sdkReady: ["sdk", "ready"]
};
var readyState = {
	state: 0,
	historyState: [],
	stateType: {
		1: "1-init\u672a\u5f00\u59cb",
		2: "2-init\u5f00\u59cb",
		3: "3-store\u5b8c\u6210"
	},
	getState: function() {
		return this.historyState.join("\n")
	},
	setState: function(e) {
		String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e])
	}
};

function quick() {
	var e = Array.prototype.slice.call(arguments),
		t = e[0],
		r = e.slice(1);
	if ("string" == typeof t && commonWays[t]) return commonWays[t].apply(commonWays, r);
	"function" == typeof t ? t.apply(sd, r) : sd.log("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd" + e[
		0])
}
var nonameCount = 1;

function use(e, t) {
	var r, i = sd.log || function() {};
	if (!isString(e) && !isObject(e)) return i("use's first arguments must be string or object."), !1;
	if (isObject(e)) {
		var n = sd.modules && sd.modules[e.plugin_name];
		n && n !== e && i(e.plugin_name + " plugin_name is conflict with loaded plugin, sdk uses loaded plugin."), r =
			n || e
	}
	if (isString(e) && (isObject(sd.modules) && isObject(sd.modules[e]) ? r = sd.modules[e] : isObject(window
		.SensorsDataWebJSSDKPlugin) && isObject(window.SensorsDataWebJSSDKPlugin[e]) ? r = window
		.SensorsDataWebJSSDKPlugin[e] : window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505
		.modules[e] && (r = window.sensorsDataAnalytic201505.modules[e])), !r || !isFunction(r.init)) return i((e
			.plugin_name || e) +
		" is not found or it's not a standard plugin. Please check sensorsdata official documents."), r;
	if (r.plugin_is_init) return r;
	return r.plugin_name || i("warning: invalid plugin, plugin_name required."), r.plugin_version ? r.plugin_version !==
		sd.lib_version && i("warning: plugin version not match SDK version. plugin may not work correctly. ") : i(
		"warning: invalid plugin, plugin version required."), !r.plugin_is_init && r.init(sd, t), r
		.plugin_is_init = !0, sd.modules = sd.modules || {}, sd.modules[r.plugin_name || "unnamed_" + nonameCount++] =
		r, r
}

function track(e, t, r) {
	check({
		event: e,
		properties: t
	}) && saEvent.send({
		type: "track",
		event: e,
		properties: t
	}, r)
}

function bind(e, t) {
	if (!check({
		bindKey: e,
		bindValue: t
	})) return !1;
	store._state.identities[e] = t, store.save(), saEvent.send({
		type: "track_id_bind",
		event: "$BindID",
		properties: {}
	})
}

function unbind(e, t) {
	var r = deleteBindIDData(e, t);
	r && saEvent.send({
		identities: r,
		type: "track_id_unbind",
		event: "$UnbindID",
		properties: {}
	})
}

function trackLink(e, t, r) {
	"object" == typeof e && e.tagName ? trackLinkByCustomTrackFunc({
		ele: e
	}, t, r, sd.track) : "object" == typeof e && e.target && e.event && trackLinkByCustomTrackFunc(e, t, r, sd
		.track)
}

function trackLinks(e, t, r) {
	return r = r || {}, !(!e || "object" != typeof e) && (!(!e.href || /^javascript/.test(e.href) || e.target) &&
		void saAddEvent(e, "click", function(i) {
			i.preventDefault();
			var n = !1;

			function a() {
				n || (n = !0, location.href = e.href)
			}
			setTimeout(a, 1e3), sd.track(t, r, a)
		}))
}

function setItem(e, t, r) {
	check({
		item_type: e,
		item_id: t,
		properties: r
	}) && saEvent.sendItem({
		type: "item_set",
		item_type: e,
		item_id: t,
		properties: r || {}
	})
}

function deleteItem(e, t) {
	check({
		item_type: e,
		item_id: t
	}) && saEvent.sendItem({
		type: "item_delete",
		item_type: e,
		item_id: t
	})
}

function setProfile(e, t) {
	check({
		propertiesMust: e
	}) && saEvent.send({
		type: "profile_set",
		properties: e
	}, t)
}

function setOnceProfile(e, t) {
	check({
		propertiesMust: e
	}) && saEvent.send({
		type: "profile_set_once",
		properties: e
	}, t)
}

function appendProfile(e, t) {
	check({
		propertiesMust: e
	}) && (each(e, function(t, r) {
		isString(t) ? e[r] = [t] : isArray(t) ? e[r] = t : (delete e[r], sd.log(
			"appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"
		))
	}), isEmptyObject(e) || saEvent.send({
		type: "profile_append",
		properties: e
	}, t))
}

function incrementProfile(e, t) {
	var r = e;
	isString(e) && ((e = {})[r] = 1), check({
		propertiesMust: e
	}) && (! function(e) {
		for (var t in e)
			if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) return !1;
		return !0
	}(e) ? sd.log("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57") : saEvent.send({
		type: "profile_increment",
		properties: e
	}, t))
}

function deleteProfile(e) {
	saEvent.send({
		type: "profile_delete"
	}, e), store.set("distinct_id", UUID()), store.set("first_id", "")
}

function unsetProfile(e, t) {
	var r = e,
		i = {};
	isString(e) && (e = []).push(r), isArray(e) ? (each(e, function(e) {
		isString(e) ? i[e] = !0 : sd.log(
			"profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389",
			e)
	}), saEvent.send({
		type: "profile_unset",
		properties: i
	}, t)) : sd.log("profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4")
}

function identify(e, t) {
	"number" == typeof e && (e = String(e));
	var r = store.getFirstId();
	if (void 0 === e) {
		var i = UUID();
		r ? store.set("first_id", i) : store.set("distinct_id", i)
	} else check({
		distinct_id: e
	}) && (!0 === t ? r ? store.set("first_id", e) : store.set("distinct_id", e) : r ? store.change("first_id", e) :
		store.change("distinct_id", e))
}

function sendSignup(e, t, r, i) {
	var n = store.getFirstId() || store.getDistinctId();
	store.set("distinct_id", e), saEvent.send({
		original_id: n,
		distinct_id: store.getDistinctId(),
		type: "track_signup",
		event: t,
		properties: r
	}, i)
}

function trackSignup(e, t, r, i) {
	"number" == typeof e && (e = String(e)), check({
		distinct_id: e,
		event: t,
		properties: r
	}) && sendSignup(e, t, r, i)
}

function registerPage(e) {
	check({
		properties: e
	}) ? extend(pageInfo.currentProps, e) : sd.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
}

function clearAllRegister(e) {
	store.clearAllProps(e)
}

function clearPageRegister(e) {
	var t;
	if (isArray(e) && e.length > 0)
		for (t = 0; t < e.length; t++) isString(e[t]) && e[t] in pageInfo.currentProps && delete pageInfo.currentProps[
			e[t]];
	else if (!0 === e)
		for (t in pageInfo.currentProps) delete pageInfo.currentProps[t]
}

function register(e) {
	check({
		properties: e
	}) ? store.setProps(e) : sd.log("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
}

function registerOnce(e) {
	check({
		properties: e
	}) ? store.setPropsOnce(e) : sd.log("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
}

function registerSession(e) {
	sd.log(
		"registerSession \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u6709\u95ee\u9898\u8054\u7cfb\u6280\u672f\u987e\u95ee"),
		check({
			properties: e
		}) ? store.setSessionProps(e) : sd.log("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
}

function registerSessionOnce(e) {
	sd.log(
		"registerSessionOnce \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u6709\u95ee\u9898\u8054\u7cfb\u6280\u672f\u987e\u95ee"),
		check({
			properties: e
		}) ? store.setSessionPropsOnce(e) : sd.log("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")
}

function login(e, t) {
	"number" == typeof e && (e = String(e)), !loginBody({
		id: e,
		callback: t,
		name: IDENTITY_KEY.LOGIN
	}, sendSignup) && isFunction(t) && t()
}

function loginWithKey(e, t) {
	return "number" == typeof t && (t = String(t)), "number" == typeof e && (e = String(e)), !!check({
		loginIdKey: e
	}) && (IDENTITY_KEY.LOGIN === e ? (login(t), !1) : void loginBody({
		id: t,
		callback: null,
		name: e
	}, sendSignup))
}

function logout(e) {
	var t = store.getFirstId();
	if (t)
		if (store.set("first_id", ""), !0 === e) {
			var r = UUID();
			store.set("distinct_id", r)
		} else store.set("distinct_id", t);
	resetIdentities({
		$identity_cookie_id: store._state.identities.$identity_cookie_id
	}), store.set("history_login_id", {
		name: "",
		value: ""
	})
}

function getPresetProperties() {
	var e, t, r = {
			$is_first_day: isNewUser(),
			$is_first_time: saNewUser.is_page_first_visited,
			$referrer: pageInfo.pageProp.referrer || "",
			$referrer_host: pageInfo.pageProp.referrer ? getHostname(pageInfo.pageProp.referrer) : "",
			$url: getURL(),
			$url_path: getURLPath(),
			$title: document.title || "",
			_distinct_id: store.getDistinctId(),
			identities: JSON.parse(JSON.stringify(store._state.identities))
		},
		i = extend({}, pageInfo.properties(), store.getProps(), (e = pageInfo.campaignParams(), t = {}, each(e,
			function(e, r, i) {
				-1 !== (" " + sd.source_channel_standard + " ").indexOf(" " + r + " ") ? t["$" + r] = i[r] : t[
					r] = i[r]
			}), t), r);
	return sd.para.preset_properties.latest_referrer && sd.para.preset_properties.latest_referrer_host && (i
		.$latest_referrer_host = "" === i.$latest_referrer ? "" : getHostname(i.$latest_referrer)), i
}
var functions = {
	__proto__: null,
	setInitVar: setInitVar,
	initPara: initPara,
	quick: quick,
	use: use,
	track: track,
	bind: bind,
	unbind: unbind,
	trackLink: trackLink,
	trackLinks: trackLinks,
	setItem: setItem,
	deleteItem: deleteItem,
	setProfile: setProfile,
	setOnceProfile: setOnceProfile,
	appendProfile: appendProfile,
	incrementProfile: incrementProfile,
	deleteProfile: deleteProfile,
	unsetProfile: unsetProfile,
	identify: identify,
	trackSignup: trackSignup,
	registerPage: registerPage,
	clearAllRegister: clearAllRegister,
	clearPageRegister: clearPageRegister,
	register: register,
	registerOnce: registerOnce,
	registerSession: registerSession,
	registerSessionOnce: registerSessionOnce,
	login: login,
	loginWithKey: loginWithKey,
	logout: logout,
	getPresetProperties: getPresetProperties,
	readyState: readyState,
	log: sdLog,
	debug: debug,
	on: eventEmitterFacade,
	disableLocalLog: disableLocalLog,
	enableLocalLog: enableLocalLog
};
logger.setup(sdLog);
var _ = extend({}, W, business);

function iOSWebClickPolyfill() {
	var e = "",
		t = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
	sd.heatmap && isArray(sd.heatmap.otherTags) && each(sd.heatmap.otherTags, function(r) {
		e += r + t
	}), isIOS() && getIOSVersion() && getIOSVersion() < 13 && (sd.para.heatmap && sd.para.heatmap.collect_tags && sd
		.para.heatmap.collect_tags.div && setCssStyle("div, [data-sensors-click]" + t), sd.para.heatmap && sd.para
		.heatmap.track_attr && setCssStyle("[" + sd.para.heatmap.track_attr.join("], [") + "]" + t), "" !== e &&
	setCssStyle(e))
}
var bridge = {
	bridge_info: {
		touch_app_bridge: !1,
		verify_success: !1,
		platform: "",
		support_two_way_call: !1
	},
	is_verify_success: !1,
	initPara: function() {
		var e = {
			is_send: !1 !== sd.para.use_app_track_is_send && "only" !== sd.para.use_app_track,
			white_list: [],
			is_mui: "mui" === sd.para.use_app_track
		};
		"object" == typeof sd.para.app_js_bridge ? sd.para.app_js_bridge = extend({}, e, sd.para
			.app_js_bridge) : !0 !== sd.para.use_app_track && !0 !== sd.para.app_js_bridge && "only" !== sd.para
			.use_app_track && "mui" !== sd.para.use_app_track || (sd.para.app_js_bridge = extend({}, e)), !1 ===
		sd.para.app_js_bridge.is_send && sd.log(
			"\u8bbe\u7f6e\u4e86 is_send:false,\u5982\u679c\u6253\u901a\u5931\u8d25\uff0c\u6570\u636e\u5c06\u88ab\u4e22\u5f03!"
		)
	},
	app_js_bridge_v1: function() {
		var e = null,
			t = null;
		window.sensorsdata_app_js_bridge_call_js = function(r) {
			! function(r) {
				isJSONString(e = r) && (e = JSON.parse(e)), t && (t(e), t = null, e = null)
			}(r)
		}, sd.getAppStatus = function(r) {
			if (function() {
				if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
					var e = document.createElement("iframe");
					e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement
						.appendChild(e), e.parentNode.removeChild(e), e = null
				}
			}(), "object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge
				.sensorsdata_call_app && isJSONString(e = window.SensorsData_APP_JS_Bridge
				.sensorsdata_call_app()) && (e = JSON.parse(e)), !r) return e;
			null === e ? t = r : (r(e), e = null)
		}
	},
	hasVisualModeBridge: function() {
		var e = window.SensorsData_App_Visual_Bridge,
			t = "sensorsdata_visualized_mode";
		return isObject(e) && e[t] && (!0 === e[t] || e[t]())
	},
	validateAppUrl: validateAppUrl
};

function SDKJSBridge(e) {
	var t = this;
	this.type = e, this.resultCbs = {}, this.timeoutCbs = {}, this.timerId = null, this.appCallJsCallback = null, window
		.sensorsdata_app_call_js || (window.sensorsdata_app_call_js = function(e, t) {
		if (e in window.sensorsdata_app_call_js.modules) return window.sensorsdata_app_call_js.modules[e](t)
	}), window.sensorsdata_app_call_js.modules = window.sensorsdata_app_call_js.modules || {}, window
		.sensorsdata_app_call_js.modules[this.type] = function(e) {
		try {
			var r = base64Decode(e) || e;
			try {
				r = JSON.parse(r)
			} catch (a) {}
			var i = r && r.message_id;
			if (i && t.resultCbs[i]) {
				if (e = r, t.timeoutCbs[i] && t.timeoutCbs[i].isTimeout) return void(t.resultCbs[i].callbacks
					.length = 0);
				if (t.resultCbs[i])
					for (var n in t.resultCbs[i].result = e, clearTimeout(t.timerId), t.timeoutCbs[i].callbacks
						.length = 0, t.resultCbs[i].callbacks) t.resultCbs[i].callbacks[n].call(null, e), t
						.resultCbs[i].callbacks.splice(n, 1);
				return
			}
			return t.appCallJsCallback && t.appCallJsCallback.call(null, e)
		} catch (s) {
			console.log("app \u56de\u8c03 js \u5f02\u5e38", e)
		}
	}
}

function handleCommands(e) {
	try {
		if (sd.bridge.activeBridge && isFunction(sd.bridge.activeBridge.handleCommand)) return sd.bridge.activeBridge
			.handleCommand(e)
	} catch (t) {
		sd.log("Error: handle command exception:" + t)
	}
	return sd.log("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge,type:" + e.callType),
		!1
}

function validateAppUrl(e) {
	function t(e) {
		var t = {
			hostname: "",
			project: ""
		};
		try {
			e = _URL(e), t.hostname = e.hostname, t.project = e.searchParams.get("project") || "default"
		} catch (r) {
			sd.log(r)
		}
		return t
	}
	var r = t(e),
		i = t(sd.para.server_url);
	if (r.hostname === i.hostname && r.project === i.project) return !0;
	if (isArray(sd.para.app_js_bridge.white_list))
		for (var n = 0; n < sd.para.app_js_bridge.white_list.length; n++) {
			var a = t(sd.para.app_js_bridge.white_list[n]);
			if (a.hostname === r.hostname && a.project === r.project) return !0
		}
	return !1
}

function DeprecatedJSBridge(e) {
	this.bridge = new SDKJSBridge(e.type)
}

function initLatestProps() {
	var e = pageInfo.pageProp.url_domain,
		t = {};
	"" === e && (e = "url\u89e3\u6790\u5931\u8d25");
	var r = getKeywordFromReferrer(document.referrer, !0);
	if (sdPara.preset_properties.search_keyword_baidu ? isReferralTraffic(document.referrer) && (!isBaiduTraffic() ||
	isObject(r) && r.active ? store._state && store._state.props && (store._state.props.$search_keyword_id &&
	delete store._state.props.$search_keyword_id, store._state.props.$search_keyword_id_type && delete store
		._state.props.$search_keyword_id_type, store._state.props.$search_keyword_id_hash && delete store._state
		.props.$search_keyword_id_hash) : (t.$search_keyword_id = getBaiduKeyword.id(), t
		.$search_keyword_id_type = getBaiduKeyword.type(), t.$search_keyword_id_hash = hashCode53(t
		.$search_keyword_id))) : store._state && store._state.props && (store._state.props
		.$search_keyword_id && delete store._state.props.$search_keyword_id, store._state.props
		.$search_keyword_id_type && delete store._state.props.$search_keyword_id_type, store._state.props
		.$search_keyword_id_hash && delete store._state.props.$search_keyword_id_hash), store.save(), each(sdPara
			.preset_properties,
		function(r, i) {
			if (-1 === i.indexOf("latest_")) return !1;
			if (i = i.slice(7), r) {
				if ("wx_ad_click_id" === i && "not_collect" === r) return !1;
				if ("utm" !== i && "url\u89e3\u6790\u5931\u8d25" === e) "wx_ad_click_id" === i ? (t
					._latest_wx_ad_click_id = "url\u7684domain\u89e3\u6790\u5931\u8d25", t
					._latest_wx_ad_hash_key = "url\u7684domain\u89e3\u6790\u5931\u8d25", t
					._latest_wx_ad_callbacks = "url\u7684domain\u89e3\u6790\u5931\u8d25") : t["$latest_" + i] =
					"url\u7684domain\u89e3\u6790\u5931\u8d25";
				else if (isReferralTraffic(document.referrer)) switch (i) {
					case "traffic_source_type":
						t.$latest_traffic_source_type = getSourceFromReferrer();
						break;
					case "referrer":
						t.$latest_referrer = pageInfo.pageProp.referrer;
						break;
					case "search_keyword":
						getKeywordFromReferrer() ? t.$latest_search_keyword = getKeywordFromReferrer() :
							isObject(store._state) && isObject(store._state.props) && store._state.props
								.$latest_search_keyword && delete store._state.props.$latest_search_keyword;
						break;
					case "landing_page":
						t.$latest_landing_page = getURL();
						break;
					case "wx_ad_click_id":
						var n = getWxAdIdFromUrl(location.href);
						t._latest_wx_ad_click_id = n.click_id, t._latest_wx_ad_hash_key = n.hash_key, t
							._latest_wx_ad_callbacks = n.callbacks
				}
			} else if ("utm" === i && store._state && store._state.props)
				for (var a in store._state.props)(0 === a.indexOf("$latest_utm") || 0 === a.indexOf("_latest_") && a
					.indexOf("_latest_wx_ad_") < 0) && delete store._state.props[a];
			else if (store._state && store._state.props && "$latest_" + i in store._state.props) delete store._state
				.props["$latest_" + i];
			else if ("wx_ad_click_id" == i && store._state && store._state.props && !1 === r) {
				each(["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"], function(e) {
					e in store._state.props && delete store._state.props[e]
				})
			}
		}), sdPara.preset_properties.latest_utm) {
		var i = pageInfo.campaignParamsStandard("$latest_", "_latest_"),
			n = i.$utms,
			a = i.otherUtms;
		isEmptyObject(n) || extend(t, n), isEmptyObject(a) || extend(t, a)
	}
	register(t)
}

function getFlagValue(e) {
	var t = null;
	try {
		var r = JSON.parse(window.name);
		t = r[e] ? _decodeURIComponent(r[e]) : null
	} catch (i) {
		t = null
	}
	return null === t && (t = getQueryParam(location.href, e) || null), t
}
SDKJSBridge.prototype.call = function(e, t) {
	var r = this,
		i = (new Date).getTime().toString(16) + String(getRandom()).replace(".", "").slice(1, 8);
	this.resultCbs[i] = r.resultCbs[i] || {
		result: null,
		callbacks: []
	}, this.timeoutCbs[i] = r.timeoutCbs[i] || {
		isTimeout: !1,
		callbacks: []
	}, (e = e.data ? e : {
		data: e
	}).data.message_id = i;
	var n = extend({
		callType: this.type
	}, e);
	return t && (this.timerId = setTimeout(function() {
		for (var e in r.timeoutCbs[i].isTimeout = !0, r.timeoutCbs[i].callbacks) r.timeoutCbs[i]
			.callbacks[e].call(null), r.timeoutCbs[i].callbacks.splice(e, 1)
	}, t)), handleCommands(n), {
		onResult: function(e) {
			return r.resultCbs[i].result ? (e(r.resultCbs[i].result), this) : (!r.timeoutCbs[i].isTimeout &&
			r.resultCbs[i].callbacks.push(e), this)
		},
		onTimeout: function(e) {
			return r.timeoutCbs[i].isTimeout ? (e(), this) : (!r.resultCbs[i].result && r.timeoutCbs[i]
				.callbacks.push(e), this)
		}
	}
}, SDKJSBridge.prototype.onAppNotify = function(e) {
	this.appCallJsCallback = e
}, SDKJSBridge.prototype.notifyApp = function(e, t) {
	var r = extend({
		callType: this.type
	}, e);
	return t && (r.message_id = t), handleCommands(r)
}, DeprecatedJSBridge.prototype = {
	double: function() {},
	getAppData: function() {},
	hasAppBridge: function() {
		return sd.bridge.bridge_info.support_two_way_call
	},
	init: function() {},
	jsCallApp: function() {},
	requestToApp: function(e) {
		this.bridge.call(e, e.timeout.time).onResult(function(t) {
			isFunction(e.callback) && e.callback(t)
		}).onTimeout(function() {
			isFunction(e.timeout.callback) && e.timeout.callback()
		})
	}
};
var heatmapMode = {
		isSeachHasKeyword: function() {
			return "" !== getQueryParam(location.href, "sa-request-id") && ("string" == typeof sessionStorage
				.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), !0)
		},
		hasKeywordHandle: function() {
			var e = location.href,
				t = getQueryParam(e, "sa-request-id") || null,
				r = getQueryParam(e, "sa-request-type") || null,
				i = getQueryParam(e, "sa-request-url") || null;
			if (heatmap.setNotice(i), _sessionStorage.isSupport())
				if (null !== i && sessionStorage.setItem("sensors_heatmap_url", i), sessionStorage.setItem(
					"sensors_heatmap_id", t), null !== r) "1" === r || "2" === r || "3" === r ? sessionStorage
					.setItem("sensors_heatmap_type", r) : r = null;
				else {
					var n = sessionStorage.getItem("sensors_heatmap_type");
					r = null !== n ? n : null
				} this.isReady(t, r)
		},
		isReady: function(e, t, r) {
			sd.para.heatmap_url ? loadScript({
				success: function() {
					setTimeout(function() {
						"undefined" != typeof sa_jssdk_heatmap_render && (
							sa_jssdk_heatmap_render(sd, e, t, r), "object" ==
							typeof console && "function" == typeof console.log && (sd
									.heatmap_version && sd.heatmap_version === sd.lib_version ||
								console.log(
									"heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!"
								)))
					}, 0)
				},
				error: function() {},
				type: "js",
				url: sd.para.heatmap_url
			}) : sd.log("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")
		},
		isStorageHasKeyword: function() {
			return _sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id")
		},
		storageHasKeywordHandle: function() {
			heatmap.setNotice(), heatmapMode.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage
				.getItem("sensors_heatmap_type"), location.href)
		},
		isWindowNameHasKeyword: function() {
			try {
				var e = JSON.parse(window.name),
					t = isString(e["sa-request-page-url"]) ? _decodeURIComponent(e["sa-request-page-url"]) : null;
				return e["sa-request-id"] && isString(e["sa-request-id"]) && t === location.href
			} catch (r) {
				return !1
			}
		},
		windowNameHasKeywordHandle: function() {
			var e = JSON.parse(window.name);

			function t(t) {
				var r = e[t];
				return isString(r) ? _decodeURIComponent(r) : null
			}
			var r = t("sa-request-id"),
				i = t("sa-request-type"),
				n = t("sa-request-url");
			heatmap.setNotice(n), _sessionStorage.isSupport() && (null !== n && sessionStorage.setItem(
				"sensors_heatmap_url", n), sessionStorage.setItem("sensors_heatmap_id", r), null !== i ?
				"1" === i || "2" === i || "3" === i ? sessionStorage.setItem("sensors_heatmap_type", i) : i =
					null : i = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem(
					"sensors_heatmap_type") : null), heatmapMode.isReady(r, i)
		}
	},
	vtrackMode = {
		isStorageHasKeyword: function() {
			return _sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode")
		},
		isSearchHasKeyword: function() {
			return (!0 === getFlagValue("sa-visual-mode") || "true" === getFlagValue("sa-visual-mode")) && (
				"string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem(
					"sensors_heatmap_id"), !0)
		},
		loadVtrack: function() {
			loadScript({
				success: function() {},
				error: function() {},
				type: "js",
				url: sd.para.vtrack_url ? sd.para.vtrack_url : getSafeHttpProtocol() +
					"//static.sensorsdata.cn/sdk/" + sd.lib_version + "/vtrack.min.js"
			})
		},
		messageListener: function(e) {
			if (!e || !e.data || "sa-fe" !== e.data.source) return !1;
			if ("v-track-mode" === e.data.type) {
				if (e.data.data && e.data.data.isVtrack)
					if (_sessionStorage.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), e.data
						.data.userURL && location.href.match(/sa-visual-mode=true/)) {
						var t = isHttpUrl(r = e.data.data.userURL) ? removeScriptProtocol(r) : (sd.log(
							"\u53ef\u89c6\u5316\u6a21\u5f0f\u68c0\u6d4b URL \u5931\u8d25"), !1);
						t && (window.location.href = t)
					} else vtrackMode.loadVtrack();
				window.removeEventListener("message", vtrackMode.messageListener, !1)
			}
			var r
		},
		removeMessageHandle: function() {
			window.removeEventListener && window.removeEventListener("message", vtrackMode.messageListener, !1)
		},
		verifyVtrackMode: function() {
			window.addEventListener && window.addEventListener("message", vtrackMode.messageListener, !1),
				vtrackMode.postMessage()
		},
		postMessage: function() {
			try {
				window.parent && window.parent.postMessage && window.parent.postMessage({
					source: "sa-web-sdk",
					type: "v-is-vtrack",
					data: {
						sdkversion: sdkversion_placeholder
					}
				}, "*")
			} catch (e) {
				sd.log("\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301 postMessage API")
			}
		},
		notifyUser: function() {
			var e = function(t) {
				if (!t || !t.data || "sa-fe" !== t.data.source) return !1;
				"v-track-mode" === t.data.type && (t.data.data && t.data.data.isVtrack && alert(
					"\u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\uff0c\u8bf7\u5347\u7ea7\u90e8\u7f72\u795e\u7b56\u6570\u636e\u6cbb\u7406"
				), window.removeEventListener("message", e, !1))
			};
			window.addEventListener && window.addEventListener("message", e, !1), vtrackMode.postMessage()
		}
	};

function defineMode(e) {
	var t = sd.bridge.bridge_info;

	function r() {
		var e = [];
		t.touch_app_bridge || e.push(debug.defineMode("1")), isObject(sd.para.app_js_bridge) || (e.push(debug
			.defineMode("2")), t.verify_success = !1), isObject(sd.para.heatmap) && "default" == sd.para.heatmap
			.clickmap || e.push(debug.defineMode("3")), "fail" === t.verify_success && e.push(debug.defineMode("4")),
			new sd.SDKJSBridge("app_alert").notifyApp({
				data: e
			})
	}
	if (sd.bridge.hasVisualModeBridge())
		if (isObject(sd.para.heatmap) && "default" == sd.para.heatmap.clickmap)
			if (isObject(sd.para.app_js_bridge) && "success" === t.verify_success)
				if (e) window.sa_jssdk_app_define_mode(sd, e);
				else {
					var i = location.protocol;
					loadScript({
						success: function() {
							setTimeout(function() {
								"undefined" != typeof sa_jssdk_app_define_mode && window
									.sa_jssdk_app_define_mode(sd, e)
							}, 0)
						},
						error: function() {},
						type: "js",
						url: (i = indexOf(["http:", "https:"], i) > -1 ? i : "https:") +
							"//static.sensorsdata.cn/sdk/" + sd.lib_version + "/vapph5define.min.js"
					})
				}
			else r();
		else r()
}

function listenSinglePage(e) {
	sd.para.is_track_single_page && spa.on("switch", function(t) {
		var r = function(r) {
			if (r = r || {}, t !== location.href) {
				pageInfo.pageProp.referrer = getURL(t);
				var i = extend({
					$url: getURL(),
					$referrer: getURL(t)
				}, r);
				isFunction(e) ? e(i) : sd.quick && sd.quick("autoTrack", i)
			}
		};
		if ("boolean" == typeof sd.para.is_track_single_page) r();
		else if ("function" == typeof sd.para.is_track_single_page) {
			var i = sd.para.is_track_single_page();
			isObject(i) ? r(i) : !0 === i && r()
		}
	})
}

function enterFullTrack() {
	sd._q && isArray(sd._q) && sd._q.length > 0 && each(sd._q, function(e) {
		sd[e[0]].apply(sd, Array.prototype.slice.call(e[1]))
	}), isObject(sd.para.heatmap) && (heatmap.initHeatmap(), heatmap.initScrollmap())
}

function trackMode() {
	sd.readyState.setState(3), new sd.SDKJSBridge("visualized").onAppNotify(function() {
		"undefined" != typeof sa_jssdk_app_define_mode ? defineMode(!0) : defineMode(!1)
	}), defineMode(!1), sd.bridge.app_js_bridge_v1(), pageInfo.initPage(), listenSinglePage(), store.init(),
		initLatestProps(), initVtrack(), sd.readyState.setState(4), enterFullTrack()
}

function detectMode() {
	heatmapMode.isSeachHasKeyword() ? heatmapMode.hasKeywordHandle() : window.parent !== self && vtrackMode
		.isSearchHasKeyword() ? vtrackMode.verifyVtrackMode() : heatmapMode.isWindowNameHasKeyword() ? heatmapMode
		.windowNameHasKeywordHandle() : heatmapMode.isStorageHasKeyword() ? heatmapMode.storageHasKeywordHandle() :
		window.parent !== self && vtrackMode.isStorageHasKeyword() ? vtrackMode.verifyVtrackMode() : (trackMode(),
			vtrackMode.notifyUser())
}

function initVtrack() {
	vtrackcollect.init(), "success" === sd.bridge.bridge_info.verify_success && vapph5collect.init()
}
var methods = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce",
	"trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile",
	"unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister", "bind",
	"unbind", "loginWithKey"
];

function checkState() {
	each(methods, function(e) {
		var t = sd[e];
		sd[e] = function() {
			if (sd.readyState.state < 3) return isArray(sd._q) || (sd._q = []), sd._q.push([e, arguments]),
				!1;
			if (!isFunction(sd.getDisabled) || !sd.getDisabled()) {
				if (sd.readyState.getState()) return t.apply(sd, arguments);
				try {
					console.error("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK")
				} catch (r) {
					sd.log(r)
				}
			}
		}
	})
}
var saEmpty = {
	track: function(e, t, r) {},
	quick: function(e, t, r, i) {},
	register: function(e) {},
	registerPage: function(e) {},
	registerOnce: function(e) {},
	clearAllRegister: function(e) {},
	trackSignup: function(e, t, r, i) {},
	setProfile: function(e, t) {},
	setOnceProfile: function(e, t) {},
	appendProfile: function(e, t) {},
	incrementProfile: function(e, t) {},
	deleteProfile: function(e) {},
	unsetProfile: function(e, t) {},
	identify: function(e, t) {},
	login: function(e, t) {},
	logout: function(e) {},
	trackLink: function(e, t, r) {},
	deleteItem: function(e, t) {},
	setItem: function(e, t, r) {},
	getAppStatus: function(e) {},
	clearPageRegister: function(e) {}
};

function CancellationToken(e, t) {
	this.cancel = function() {
		e = !0
	}, this.getCanceled = function() {
		return e || !1
	}, this.stop = function() {
		t = !0
	}, this.getStopped = function() {
		return t || !1
	}
}

function InterceptorContext(e, t, r) {
	var i = null;
	try {
		i = JSON.parse(JSON.stringify(e || null))
	} catch (n) {}
	this.getOriginalData = function() {
		return i
	}, this.getPosition = function() {
		return t
	}, this.cancellationToken = new CancellationToken, this.sensors = r
}

function Stage(e) {
	if (!isObject(e)) throw "error: Stage constructor requires arguments.";
	this.processDef = e, this.registeredInterceptors = {}
}
Stage.prototype.process = function(e, t) {
	if (e && e in this.processDef) {
		var r = this.registeredInterceptors[e];
		if (r && isArray(r) && r.length > 0)
			for (var i = {
				current: 0,
				total: r.length
			}, n = new InterceptorContext(t, i, sd), a = 0; a < r.length; a++) try {
				if (i.current = a + 1, t = r[a].call(null, t, n) || t, n.cancellationToken.getCanceled()) break;
				if (n.cancellationToken.getStopped()) return
			} catch (s) {
				sdLog("interceptor error:" + s)
			}
		return this.processDef[e] && this.processDef[e] in this.processDef && (t = this.process(this.processDef[e],
			t)), t
	}
	sdLog("process [" + e + "] is not supported")
}, Stage.prototype.registerStageImplementation = function(e) {
	e && e.init && isFunction(e.init) && (e.init(this), e.interceptor && this.registerInterceptor(e.interceptor))
}, Stage.prototype.registerInterceptor = function(e) {
	if (e)
		for (var t in e) {
			var r = e[t];
			if (r && isObject(r) && isFunction(r.entry)) {
				isNumber(r.priority) || (r.priority = Number.MAX_VALUE), this.registeredInterceptors[t] || (this
					.registeredInterceptors[t] = []);
				var i = this.registeredInterceptors[t];
				r.entry.priority = r.priority, i.push(r.entry), i.sort(function(e, t) {
					return e.priority - t.priority
				})
			}
		}
};
var processDef = {
		basicProps: "extendProps",
		extendProps: "formatData",
		formatData: "finalAdjustData",
		finalAdjustData: null
	},
	buildDataStage = new Stage(processDef),
	processDef$1 = {
		send: null
	},
	sendDataStage = new Stage(processDef$1),
	processDef$2 = {
		getUtmData: null,
		callSchema: null
	},
	businessStage = new Stage(processDef$2),
	processDef$3 = {
		webClickEvent: null,
		webStayEvent: null
	},
	viewStage = new Stage(processDef$3);

function registerFeature(e) {
	e && e.buildDataStage && buildDataStage.registerStageImplementation(e.buildDataStage), e && e.businessStage &&
	businessStage.registerStageImplementation(e.businessStage), e && e.sendDataStage && sendDataStage
		.registerStageImplementation(e.sendDataStage), e && e.viewStage && viewStage.registerStageImplementation(e
		.viewStage)
}
var interceptorRegisters = {
	buildDataStage: function(e) {
		e && buildDataStage.registerInterceptor(e)
	},
	businessStage: function(e) {
		e && businessStage.registerInterceptor(e)
	},
	sendDataStage: function(e) {
		e && sendDataStage.registerInterceptor(e)
	},
	viewStage: function(e) {
		e && viewStage.registerInterceptor(e)
	}
};

function registerInterceptor(e, t) {
	interceptorRegisters[e] && interceptorRegisters[e](t)
}
var businessStageImpl = {
	stage: null,
	init: function(e) {
		this.stage = e
	}
};

function processGetUtmData() {
	return businessStageImpl.stage && businessStageImpl.stage.process("getUtmData")
}
var sendDataStageImpl = {
	stage: null,
	init: function(e) {
		this.stage = e
	},
	interceptor: {
		send: {
			entry: function(e) {
				return e
			}
		}
	}
};

function processSend(e) {
	return sendDataStageImpl.stage.process("send", e)
}
var kit = {};

function CoreFeature(e) {
	e.kit = kit, e.saEvent = saEvent, this.buildDataStage = buildDataStageImpl, this.sendDataStage = sendDataStageImpl,
		this.businessStage = businessStageImpl
}

function HeatCollectFeature(e) {
	e.heatmap = heatmap, this.viewStage = viewStageImpl
}
kit.buildData = function(e) {
	return processBasicProps(e)
}, kit.sendData = function(e, t) {
	var r = searchConfigData(e.properties);
	processSend({
		server_url: sd.para.server_url,
		data: e,
		config: r || {},
		callback: t
	}), sd.log(e)
}, kit.encodeTrackData = function(e) {
	return encodeTrackData(e)
}, kit.getUtmData = function() {
	return processGetUtmData()
};
var heatCollectInterceptor = {
		webClickEvent: {
			entry: function(e, t) {
				var r = t.sensors;
				"a" === e.tagName && r.para.heatmap && !0 === r.para.heatmap.isTrackLink ? r.trackLink({
					event: e.event,
					target: e.target
				}, "$WebClick", e.props) : r.track("$WebClick", e.props, e.callback)
			}
		},
		webStayEvent: {
			entry: function(e, t) {
				t.sensors.track("$WebStay", e)
			}
		}
	},
	preCfg = window.sensors_data_pre_config,
	is_compliance_enabled = !!_.isObject(preCfg) && preCfg.is_compliance_enabled;

function implementCore(e) {
	e && (sd.events = events, sd.bridge = bridge, sd.SDKJSBridge = SDKJSBridge, sd.JSBridge = DeprecatedJSBridge, sd
		.store = store, sd.unlimitedDiv = unlimitedDiv, sd.customProp = customProp, sd.vtrackcollect =
		vtrackcollect, sd.vapph5collect = vapph5collect, sd.detectMode = detectMode, sd.registerFeature =
		registerFeature, sd.registerInterceptor = registerInterceptor, sd.commonWays = commonWays, registerFeature(
		new CoreFeature(sd)), registerFeature(new HeatCollectFeature(sd)), registerInterceptor("viewStage",
		heatCollectInterceptor));
	var t = e ? functions : saEmpty;
	for (var r in t) sd[r] = t[r];
	sd._ = _, sd.on = eventEmitterFacade, sd.ee = ee, sd.use = use, sd.lib_version = sdkversion_placeholder
}
sd.init = function(e) {
	if (ee.sdk.emit("beforeInit"), sd.readyState && sd.readyState.state && sd.readyState.state >= 2) return !1;
	is_compliance_enabled && (implementCore(!0), checkState()), ee.initSystemEvent(), sd.setInitVar(), sd.readyState
		.setState(2), sd.initPara(e), ee.sdk.emit("initPara"), ee.sdk.emit("afterInitPara"), ee.sdk.emit("initAPI"),
		ee.sdk.emit("afterInitAPI"), sd.detectMode(), iOSWebClickPolyfill(), ee.sdk.emit("afterInit"), ee.sdk.emit(
		"ready")
}, is_compliance_enabled ? implementCore(!1) : (implementCore(!0), checkState());
var sdkversion_placeholder$1 = "1.24.13";

function wrapPluginInitFn(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin(e, t, r) {
	return wrapPluginInitFn(e, t, r), e.plugin_version = sdkversion_placeholder$1, e
}
var userEncryptDefault = {
		init: function(e) {
			var t = e._.isString,
				r = e._.rot13defs,
				i = e._.dfmapping,
				n = "data:enc;";
			e.ee.sdk.on("afterInitPara", function() {
				e.kit.userEncrypt = function(e) {
					return "dfm-enc-" + i(e)
				}, e.kit.userDecrypt = function(e) {
					return 0 === e.indexOf(n) ? (e = e.substring(n.length), e = r(e)) : 0 === e.indexOf(
						"dfm-enc-") && (e = e.substring("dfm-enc-".length), e = i(e)), e
				}, e.kit.userDecryptIfNeeded = function(r) {
					return !t(r) || 0 !== r.indexOf(n) && 0 !== r.indexOf("dfm-enc-") || (r = e.kit
						.userDecrypt(r)), r
				}
			})
		},
		plugin_name: "UserEncryptDefault"
	},
	index = createPlugin(userEncryptDefault),
	sdkversion_placeholder$2 = "1.24.13";

function wrapPluginInitFn$1(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$1(e, t, r) {
	return wrapPluginInitFn$1(e, t, r), e.plugin_version = sdkversion_placeholder$2, e
}
var amp = {
		sd: null,
		init: function(e) {
			if (this.sd) return !1;
			if (this.sd = e, !this.sd || !this.sd._) return !1;
			var t = this.sd._.cookie.get("sensors_amp_id"),
				r = this.sd.store._state.distinct_id;
			if (t && t.length > 0) {
				var i = "amp-" === t.slice(0, 4);
				if (t !== r) {
					if (!i) return !1;
					this.sd.store._state.first_id ? (this.sd.identify(t, !0), this.sd.saEvent.send({
						original_id: t,
						distinct_id: r,
						type: "track_signup",
						event: "$SignUp",
						properties: {}
					}, null), this.setAmpId(r)) : this.sd.identify(t, !0)
				}
			} else this.setAmpId(r);
			this.addListener()
		},
		addListener: function() {
			var e = this;
			this.sd.events.on("changeDistinctId", function(t) {
				e.setAmpId(t)
			}), this.sd.events.isReady()
		},
		setAmpId: function(e) {
			this.sd._.cookie.set("sensors_amp_id", e)
		}
	},
	index$1 = createPlugin$1(amp, "Amp", "sdkReady"),
	vbridge = window.SensorsData_App_Visual_Bridge,
	vmode = vbridge && vbridge.sensorsdata_visualized_mode,
	valert = vbridge && vbridge.sensorsdata_visualized_alert_info,
	vhover = vbridge && vbridge.sensorsdata_hover_web_nodes;

function alertApp(e) {
	return valert && valert.call(vbridge, JSON.stringify(e))
}

function hoverNode(e) {
	return vmode.call(vbridge) && vhover && vhover.call(vbridge, JSON.stringify(e))
}

function callBridge(e, t) {
	return t && "function" == typeof t[e.callType] && t[e.callType]()
}
var anBridge, anTrack, anServerUrl, sd$1, _$1, log, vbridge$1 = {
		isVerify: function() {
			return vmode && (!0 === vmode || vmode.call(vbridge))
		},
		commands: {
			app_alert: alertApp,
			visualized_track: hoverNode,
			page_info: hoverNode,
			sensorsdata_get_app_visual_config: callBridge
		}
	},
	sdkversion_placeholder$3 = "1.24.13";

function wrapPluginInitFn$2(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$2(e, t, r) {
	return wrapPluginInitFn$2(e, t, r), e.plugin_version = sdkversion_placeholder$3, e
}
var AndroidBridge = {
	init: function(e) {
		_$1 = (sd$1 = e) && sd$1._, log = sd$1 && sd$1.log || console && console.log || function() {},
			initBridge()
	},
	handleCommand: handleCommand
};

function initBridge() {
	anBridge = window.SensorsData_APP_New_H5_Bridge, anTrack = anBridge && anBridge.sensorsdata_track, anServerUrl =
		anTrack && anBridge.sensorsdata_get_server_url && anBridge.sensorsdata_get_server_url(), sd$1 && !sd$1.bridge
		.activeBridge && anServerUrl && (sd$1.bridge.activeBridge = AndroidBridge, sd$1.para.app_js_bridge && !sd$1.para
		.app_js_bridge.is_mui && (sd$1.bridge.is_verify_success = anServerUrl && sd$1.bridge.validateAppUrl(
		anServerUrl)), sd$1.bridge.bridge_info = {
		touch_app_bridge: !0,
		platform: "android",
		verify_success: sd$1.bridge.is_verify_success ? "success" : "fail",
		support_two_way_call: !!anBridge.sensorsdata_js_call_app
	}, sd$1.para.app_js_bridge ? (sd$1.registerInterceptor("sendDataStage", {
		send: {
			priority: 60,
			entry: sendData
		}
	}), log("Android bridge inits succeed.")) : log(
		"app_js_bridge is not configured, data will not be sent by android bridge."))
}

function sendData(e, t) {
	if (sd$1.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
	var r = e.callback;
	return sd$1.bridge.is_verify_success ? (anTrack && anTrack.call(anBridge, JSON.stringify(_$1.extend({
		server_url: sd$1.para.server_url
	}, e.data))), _$1.isFunction(r) && r(), t.cancellationToken.cancel(), e) : sd$1.para.app_js_bridge.is_send ? (
		sd$1.debug.apph5({
			data: e.data,
			step: "4.2",
			output: "all"
		}), e) : (_$1.isFunction(r) && r(), t.cancellationToken.cancel(), e)
}

function handleCommand(e) {
	var t = e.callType;
	if (t in vbridge$1.commands) return vbridge$1.commands[t](e, anBridge);
	anBridge && _$1.isFunction(anBridge.sensorsdata_js_call_app) && anBridge.sensorsdata_js_call_app(JSON.stringify(e))
}
var index$2 = createPlugin$2(AndroidBridge, "AndroidBridge", "sdkAfterInitPara"),
	vbridge$2 = window.SensorsData_App_Visual_Bridge,
	vmode$1 = vbridge$2 && vbridge$2.sensorsdata_visualized_mode,
	valert$1 = vbridge$2 && vbridge$2.sensorsdata_visualized_alert_info,
	vhover$1 = vbridge$2 && vbridge$2.sensorsdata_hover_web_nodes;

function alertApp$1(e) {
	return valert$1 && valert$1.call(vbridge$2, JSON.stringify(e))
}

function hoverNode$1(e) {
	return vmode$1.call(vbridge$2) && vhover$1 && vhover$1.call(vbridge$2, JSON.stringify(e))
}

function callBridge$1(e, t) {
	return t && "function" == typeof t[e.callType] && t[e.callType]()
}
var anBridge$1, anTrack$1, anVerify, anVisualVerify, sd$2, _$2, log$1, vbridge$1$1 = {
		isVerify: function() {
			return vmode$1 && (!0 === vmode$1 || vmode$1.call(vbridge$2))
		},
		commands: {
			app_alert: alertApp$1,
			visualized_track: hoverNode$1,
			page_info: hoverNode$1,
			sensorsdata_get_app_visual_config: callBridge$1
		}
	},
	sdkversion_placeholder$4 = "1.24.13";

function wrapPluginInitFn$3(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$3(e, t, r) {
	return wrapPluginInitFn$3(e, t, r), e.plugin_version = sdkversion_placeholder$4, e
}
var AndroidObsoleteBridge = {
	init: function(e) {
		_$2 = (sd$2 = e) && sd$2._, log$1 = sd$2 && sd$2.log || console && console.log || function() {},
			initBridge$1()
	},
	handleCommand: handleCommand$1
};

function initBridge$1() {
	if (anBridge$1 = window.SensorsData_APP_JS_Bridge, anTrack$1 = anBridge$1 && anBridge$1.sensorsdata_track,
		anVerify = anBridge$1 && anBridge$1.sensorsdata_verify, anVisualVerify = anBridge$1 && anBridge$1
		.sensorsdata_visual_verify, sd$2 && !sd$2.bridge.activeBridge && (anVerify || anTrack$1 || anVisualVerify)) {
		sd$2.bridge.activeBridge = AndroidObsoleteBridge;
		var e = anVerify || anTrack$1;
		anVisualVerify && (e = !!anVisualVerify.call(anBridge$1, JSON.stringify({
			server_url: sd$2.para.server_url
		}))), sd$2.bridge.bridge_info = {
			touch_app_bridge: !0,
			platform: "android",
			verify_success: e ? "success" : "fail"
		}, sd$2.para.app_js_bridge ? (sd$2.registerInterceptor("sendDataStage", {
			send: {
				priority: 80,
				entry: sendData$1
			}
		}), log$1("Android obsolete bridge inits succeed.")) : log$1(
			"app_js_bridge is not configured, data will not be sent by android obsolete bridge.")
	}
}

function sendData$1(e, t) {
	if (sd$2.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
	var r = e.callback;
	return anVerify ? anVerify && anVerify.call(anBridge$1, JSON.stringify(_$2.extend({
		server_url: sd$2.para.server_url
	}, e.data))) ? (_$2.isFunction(r) && r(), t.cancellationToken.cancel(), e) : sd$2.para.app_js_bridge.is_send ? (
		sd$2.debug.apph5({
			data: e.data,
			step: "3.1",
			output: "all"
		}), e) : (_$2.isFunction(r) && r(), t.cancellationToken.cancel(), e) : (anTrack$1 && anTrack$1.call(
		anBridge$1, JSON.stringify(_$2.extend({
			server_url: sd$2.para.server_url
		}, e.data))), _$2.isFunction(r) && r(), t.cancellationToken.cancel(), e)
}

function handleCommand$1(e) {
	var t = e.callType;
	return t in vbridge$1$1.commands ? vbridge$1$1.commands[t](e, anBridge$1) : anBridge$1 && _$2.isFunction(anBridge$1
		.sensorsdata_js_call_app) ? anBridge$1.sensorsdata_js_call_app(JSON.stringify(e)) : void 0
}
var _$3, sd$3, store$1, cookie_name, index$3 = createPlugin$3(AndroidObsoleteBridge, "AndroidObsoleteBridge",
		"sdkAfterInitPara"),
	sdkversion_placeholder$5 = "1.24.13";

function wrapPluginInitFn$4(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$4(e, t, r) {
	return wrapPluginInitFn$4(e, t, r), e.plugin_version = sdkversion_placeholder$5, e
}
var hidden, Channel = {
		event_list: [],
		latest_event_initial_time: null,
		max_save_time: 2592e6,
		init: function(e, t) {
			if (sd$3 || !e) return !1;
			cookie_name = (t = t || {}).cookie_name || "sensorsdata2015jssdkchannel", sd$3 = e;
			var r = this;
			! function() {
				if (_$3 = sd$3._, store$1 = sd$3.store, !_$3.localStorage.isSupport()) return !1;
				sd$3.para.max_string_length = 1024, r.eventList.init(), r.addLatestChannelUrl(), r
					.addIsChannelCallbackEvent()
			}()
		},
		addIsChannelCallbackEvent: function() {
			sd$3.registerPage({
				$is_channel_callback_event: function(e) {
					if (_$3.isObject(e) && e.event && "$WebClick" !== e.event && "$pageview" !== e
						.event && "$WebStay" !== e.event && "$SignUp" !== e.event) return !Channel
						.eventList.hasEvent(e.event) && (Channel.eventList.add(e.event), !0)
				}
			})
		},
		addLatestChannelUrl: function() {
			var e = this.getUrlDomain(),
				t = this.cookie.getChannel();
			if ("url\u89e3\u6790\u5931\u8d25" === e) this.registerAndSave({
				_sa_channel_landing_url: "",
				_sa_channel_landing_url_error: "url\u7684domain\u89e3\u6790\u5931\u8d25"
			});
			else if (_$3.isReferralTraffic(document.referrer)) {
				var r = _$3.getQueryParam(location.href, "sat_cf");
				_$3.isString(r) && r.length > 0 ? (this.registerAndSave({
					_sa_channel_landing_url: location.href
				}), Channel.channelLinkHandler()) : this.registerAndSave({
					_sa_channel_landing_url: ""
				})
			} else t ? sd$3.registerPage(t) : sd$3.registerPage({
				_sa_channel_landing_url: "",
				_sa_channel_landing_url_error: "\u53d6\u503c\u5f02\u5e38"
			})
		},
		registerAndSave: function(e) {
			sd$3.registerPage(e), this.cookie.saveChannel(e)
		},
		cookie: {
			getChannel: function() {
				var e = sd$3.kit.userDecryptIfNeeded(_$3.cookie.get(cookie_name));
				return e = _$3.safeJSONParse(e), !(!_$3.isObject(e) || !e.prop) && e.prop
			},
			saveChannel: function(e) {
				var t = {
						prop: e
					},
					r = JSON.stringify(t);
				sd$3.para.encrypt_cookie && (r = sd$3.kit.userEncrypt(r)), _$3.cookie.set(cookie_name, r)
			}
		},
		channelLinkHandler: function() {
			this.eventList.reset(), sd$3.track("$ChannelLinkReaching")
		},
		getUrlDomain: function() {
			var e = _$3.info.pageProp.url_domain;
			return "" === e && (e = "url\u89e3\u6790\u5931\u8d25"), e
		},
		eventList: {
			init: function() {
				var e = this.get(),
					t = (new Date).getTime();
				if (e && _$3.isNumber(e.latest_event_initial_time) && _$3.isArray(e.eventList)) {
					var r = t - e.latest_event_initial_time;
					r > 0 && r < Channel.max_save_time ? (Channel.event_list = e.eventList, Channel
						.latest_event_initial_time = e.latest_event_initial_time) : this.reset()
				} else this.reset()
			},
			get: function() {
				var e = {};
				try {
					e = store$1.readObjectVal("sawebjssdkchannel")
				} catch (t) {
					sd$3.log(t)
				}
				return e
			},
			add: function(e) {
				Channel.event_list.push(e), this.save()
			},
			save: function() {
				var e = {
					latest_event_initial_time: Channel.latest_event_initial_time,
					eventList: Channel.event_list
				};
				store$1.saveObjectVal("sawebjssdkchannel", e)
			},
			reset: function() {
				Channel.event_list = [], Channel.latest_event_initial_time = (new Date).getTime(), this.save()
			},
			hasEvent: function(e) {
				var t = !1;
				return _$3.each(Channel.event_list, function(r) {
					r === e && (t = !0)
				}), t
			}
		}
	},
	index$4 = createPlugin$4(Channel, "SensorsChannel", "sdkAfterInitAPI"),
	sdkversion_placeholder$6 = "1.24.13";

function wrapPluginInitFn$5(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$5(e, t, r) {
	return wrapPluginInitFn$5(e, t, r), e.plugin_version = sdkversion_placeholder$6, e
}
var isWechat = /micromessenger\/([\d.]+)/i.test(navigator.userAgent || ""),
	getSupportedProperty = function() {
		var e = {};
		return "undefined" != typeof document.hidden ? (e.hidden = "hidden", e.visibilityChange = "visibilitychange") :
			"undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange =
				"msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e
				.visibilityChange = "webkitvisibilitychange"), e
	};

function isPageHidden() {
	return void 0 !== hidden && document[hidden]
}
hidden = getSupportedProperty().hidden;
var iosServerUrl, iosTracker, sd$4, _$4, log$2, OSs = {
		android: /Android/i,
		iOS: /iPhone|iPad|iPod/i
	},
	getOS = function() {
		for (var e in OSs)
			if (navigator.userAgent.match(OSs[e])) return e;
		return ""
	},
	currentOS = getOS(),
	isSupportedOS = function() {
		return OSs.hasOwnProperty(currentOS)
	},
	isObject$1 = function(e) {
		return null != e && "[object Object]" == Object.prototype.toString.call(e)
	},
	parseShortURL = function(e) {
		return e.match(/\/sd\/(\w+)\/(\w+)$/)
	},
	parseAPIURL = function(e) {
		var t = e._.URL(e.para.server_url);
		return {
			origin: t.origin,
			project: t.searchParams.get("project") || "default"
		}
	},
	handleAndroidLinks = function(e, t, r) {
		e.log("\u5c1d\u8bd5\u5524\u8d77 android app");
		var i = t;
		e.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + i), window.location = i, e.timer = setTimeout(function() {
			var t = isPageHidden();
			if (e.log("hide:" + hidden + ":" + document[hidden]), t) return e.log(
				"The page is hidden, stop navigating to download page"), !1;
			e.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"), window
				.location = r
		}, e.timeout)
	},
	handleIOSLinks = function(e, t, r) {
		e.log("\u5c1d\u8bd5\u5524\u8d77 iOS app:" + t), window.location.href = t, e.timer = setTimeout(function() {
			if (isPageHidden()) return e.log("The page is hidden, stop navigating to download page"), !1;
			e.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"), window
				.location.href = r
		}, e.timeout), e.log("new timer:" + e.timer)
	},
	SADeepLink = {
		key: null,
		timer: null,
		sd: null,
		data: null,
		timeout: 2500,
		apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
		init: function(e) {
			if (this.sd) return this.log("deeplink\u5df2\u7ecf\u521d\u59cb\u5316"), !1;
			if (this.sd = e, this.log("deeplink init called"), null === this.sd) return this.log(
				"\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165"), !1;
			var t = {};
			if (arguments.length > 0 && (1 === arguments.length && isObject$1(arguments[0]) ? t = arguments[0] :
				arguments.length >= 2 && isObject$1(arguments[1]) && (t = arguments[1])), !isSupportedOS())
				return this.log(
					"\u4e0d\u652f\u6301\u5f53\u524d\u7cfb\u7edf\uff0c\u76ee\u524d\u53ea\u652f\u6301Android\u548ciOS"
				), !1;
			if (isObject$1(t) && this.sd._.isNumber(t.timeout) && t.timeout >= 2500 && (this.timeout = t.timeout), !
				this.sd.para.server_url) return this.log(
				"\u795e\u7b56JS SDK\u914d\u7f6e\u9879server_url\u672a\u6b63\u786e\u914d\u7f6e"), !1;
			var r = parseAPIURL(this.sd);
			this.apiURL = this.apiURL.replace("{origin}", r.origin).replace("{project}", r.project);
			var i = this.sd._.getQueryParam(window.location.href, "deeplink");
			if (!i) return this.log("\u5f53\u524d\u9875\u9762\u7f3a\u5c11deeplink\u53c2\u6570"), !1;
			i = window.decodeURIComponent(i);
			var n = parseShortURL(i);
			if (!n) return this.log("\u5f53\u524d\u9875\u9762\u7684deeplink\u53c2\u6570\u65e0\u6548"), !1;
			this.key = n[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(n[2])), this.sd._
				.ajax({
					url: this.apiURL,
					type: "GET",
					cors: !0,
					credentials: !1,
					success: function(e) {
						if (e.errorMsg) return SADeepLink.log("API\u62a5\u9519\uff1a" + e.errorMsg), !1;
						SADeepLink.data = e, SADeepLink.log(
							"API\u67e5\u8be2\u6210\u529f\uff0c\u6570\u636e\uff1a" + JSON.stringify(e,
								null, "  ")), this.data.app_key && (this.data.android_info && this.data
							.android_info.url_schemes && (this.data.android_info.url_schemes +=
							"://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data
							.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info
							.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this
							.key))
					}.bind(this),
					error: function() {
						SADeepLink.log("API\u67e5\u8be2\u51fa\u9519")
					}
				}), this.addListeners()
		},
		openDeepLink: function() {
			if (this.log("openDeeplink()"), !this.data) return this.log("\u6ca1\u6709Deep link\u6570\u636e!"), !1;
			if ("iOS" === currentOS) {
				this.log("\u5f53\u524d\u7cfb\u7edf\u662fiOS");
				var e = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ?
					this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
				this.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a" + e), handleIOSLinks(this, e, this.data.ios_info
					.download_url)
			} else this.log("\u5f53\u524d\u7cfb\u7edf\u662f android"), handleAndroidLinks(this, this.data
				.android_info.url_schemes, this.data.android_info.download_url)
		},
		log: function(e) {
			this.sd && this.sd.log(e)
		},
		addListeners: function() {
			var e = getSupportedProperty().visibilityChange;
			e && document.addEventListener(e, function() {
				clearTimeout(this.timer), this.log("visibilitychange, clear timeout:" + this.timer)
			}.bind(this), !1), window.addEventListener("pagehide", function() {
				this.log("page hide, clear timeout:" + this.timer), clearTimeout(this.timer)
			}.bind(this), !1)
		}
	},
	index$5 = createPlugin$5(SADeepLink, "Deeplink", "sdkReady"),
	sdkversion_placeholder$7 = "1.24.13";

function wrapPluginInitFn$6(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$6(e, t, r) {
	return wrapPluginInitFn$6(e, t, r), e.plugin_version = sdkversion_placeholder$7, e
}
var IOSBridge = {
	init: function(e) {
		_$4 = (sd$4 = e) && sd$4._, log$2 = sd$4 && sd$4.log || console && console.log || function() {},
			initBridge$2()
	},
	handleCommand: handleCommand$2
};

function initBridge$2() {
	iosServerUrl = window.SensorsData_iOS_JS_Bridge && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url,
		iosTracker = function() {
			return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers
				.sensorsdataNativeTracker
		}, sd$4 && !sd$4.bridge.activeBridge && iosTracker() && iosTracker().postMessage && (sd$4.bridge.activeBridge =
		IOSBridge, sd$4.para.app_js_bridge && !sd$4.para.app_js_bridge.is_mui && (sd$4.bridge.is_verify_success =
		iosServerUrl && sd$4.bridge.validateAppUrl(iosServerUrl)), sd$4.bridge.bridge_info = {
		touch_app_bridge: !0,
		platform: "ios",
		verify_success: sd$4.bridge.is_verify_success ? "success" : "fail",
		support_two_way_call: !0
	}, sd$4.para.app_js_bridge ? (sd$4.registerInterceptor("sendDataStage", {
		send: {
			priority: 70,
			entry: sendData$2
		}
	}), log$2("IOS bridge inits succeed.")) : log$2(
		"app_js_bridge is not configured, data will not be sent by iOS bridge."))
}

function sendData$2(e, t) {
	if (sd$4.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
	var r = e.callback;
	return sd$4.bridge.is_verify_success ? (iosTracker() && iosTracker().postMessage(JSON.stringify({
		callType: "app_h5_track",
		data: _$4.extend({
			server_url: sd$4.para.server_url
		}, e.data)
	})), _$4.isFunction(r) && r(), t.cancellationToken.cancel(), e) : sd$4.para.app_js_bridge.is_send ? (sd$4.debug
		.apph5({
			data: e.data,
			step: "4.1",
			output: "all"
		}), e) : (_$4.isFunction(r) && r(), t.cancellationToken.cancel(), e)
}

function handleCommand$2(e) {
	var t = e.callType;
	return "page_info" !== t && "visualized_track" !== t || sd$4.bridge.hasVisualModeBridge() ?
		"sensorsdata_get_app_visual_config" === t ? _$4.isObject(window.SensorsData_APP_New_H5_Bridge) && window
			.SensorsData_APP_New_H5_Bridge[t] : iosTracker() && iosTracker().postMessage(JSON.stringify(e)) : null
}
var sd$5, _$5, log$3, index$6 = createPlugin$6(IOSBridge, "IOSBridge", "sdkAfterInitPara"),
	sdkversion_placeholder$8 = "1.24.13";

function wrapPluginInitFn$7(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$7(e, t, r) {
	return wrapPluginInitFn$7(e, t, r), e.plugin_version = sdkversion_placeholder$8, e
}
var IOSObsoleteBridge = {
	init: function(e) {
		_$5 = (sd$5 = e) && sd$5._, log$3 = sd$5 && sd$5.log || console && console.log || function() {},
			initBridge$3()
	}
};

function initBridge$3() {
	sd$5 && !sd$5.bridge.activeBridge && hasBridge() && (sd$5.bridge.activeBridge = IOSObsoleteBridge, sd$5.bridge
		.bridge_info = {
		touch_app_bridge: !0,
		platform: "ios",
		verify_success: verifyIOSObsoleteBridge() ? "success" : "fail"
	}, sd$5.para.app_js_bridge ? (sd$5.registerInterceptor("sendDataStage", {
		send: {
			priority: 90,
			entry: sendData$3
		}
	}), log$3("IOS obsolete bridge inits succeed.")) : log$3(
		"app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."))
}

function hasBridge() {
	return (/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream
}

function verifyIOSObsoleteBridge() {
	if (/sensors-verify/.test(navigator.userAgent)) {
		var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
		if (e && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
			e = e[1].split("?");
			var t = null,
				r = null;
			try {
				t = _$5.URL(sd$5.para.server_url).hostname, r = _$5.URL(sd$5.para.server_url).searchParams.get(
					"project") || "default"
			} catch (i) {
				sd$5.log(i)
			}
			return !(!t || t !== e[0] || !r || r !== e[1])
		}
		return !1
	}
	return !!/sa-sdk-ios/.test(navigator.userAgent)
}

function sendData$3(e, t) {
	if (sd$5.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) return e;
	var r, i, n = e.callback;
	if (sd$5.bridge.bridge_info.verify_success) {
		var a = document.createElement("iframe"),
			s = (r = e.data, i = (i = JSON.stringify(_$5.extend({
				server_url: sd$5.para.server_url
			}, r))).replace(/\r\n/g, ""), "sensorsanalytics://trackEvent?event=" + (i = encodeURIComponent(i)));
		return a.setAttribute("src", s), document.documentElement.appendChild(a), a.parentNode.removeChild(a), a = null,
		_$5.isFunction(n) && n(), t.cancellationToken.cancel(), !0
	}
	return sd$5.para.app_js_bridge.is_send ? (sd$5.debug.apph5({
		data: e.data,
		step: "3.2",
		output: "all"
	}), e) : (_$5.isFunction(n) && n(), t.cancellationToken.cancel(), e)
}
var index$7 = createPlugin$7(IOSObsoleteBridge, "IOSObsoleteBridge", "sdkAfterInitPara"),
	sdkversion_placeholder$9 = "1.24.13";

function wrapPluginInitFn$8(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$8(e, t, r) {
	return wrapPluginInitFn$8(e, t, r), e.plugin_version = sdkversion_placeholder$9, e
}
var page_hidden_status_refresh_time = 5e3,
	MAX_DURATION = 432e3;

function PageLeave() {
	this.sd = null, this.start_time = +new Date, this.page_show_status = !0, this.page_hidden_status = !1, this._ = {},
		this.timer = null, this.current_page_url = document.referrer, this.url = location.href, this.option = {}, this
		.heartbeat_interval_time = 5e3, this.heartbeat_interval_timer = null, this.page_id = null, this.storage_name =
		"sawebjssdkpageleave", this.max_duration = MAX_DURATION
}
PageLeave.prototype.init = function(e, t) {
	if (e) {
		if (this.sd = e, this._ = this.sd._, t) {
			this.option = t;
			var r = t.heartbeat_interval_time;
			r && (this._.isNumber(r) || this._.isNumber(1 * r)) && 1 * r > 0 && (this.heartbeat_interval_time =
				1e3 * r);
			var i = t.max_duration;
			i && (this._.isNumber(i) || this._.isNumber(1 * i)) && 1 * i > 0 && (this.max_duration = i)
		}
		this.page_id = Number(String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) +
			String((new Date).getTime()).slice(-4)), this.addEventListener(), !0 === document.hidden ? this
			.page_show_status = !1 : this.addHeartBeatInterval(), this.log(
			"PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5")
	} else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
}, PageLeave.prototype.log = function(e) {
	this.sd && this.sd.log(e)
}, PageLeave.prototype.refreshPageEndTimer = function() {
	var e = this;
	this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
		e.page_hidden_status = !1
	}, page_hidden_status_refresh_time)
}, PageLeave.prototype.hiddenStatusHandler = function() {
	clearTimeout(this.timer), this.timer = null, this.page_hidden_status = !1
}, PageLeave.prototype.pageStartHandler = function() {
	this.start_time = +new Date, !0 == !document.hidden ? this.page_show_status = !0 : this.page_show_status = !1,
		this.url = location.href
}, PageLeave.prototype.pageEndHandler = function() {
	if (!0 !== this.page_hidden_status) {
		var e = this.getPageLeaveProperties();
		!1 === this.page_show_status && delete e.event_duration, this.page_show_status = !1, this
			.page_hidden_status = !0, this.isCollectUrl(this.url) && this.sd.track("$WebPageLeave", e), this
			.refreshPageEndTimer(), this.delHeartBeatData()
	}
}, PageLeave.prototype.addEventListener = function() {
	this.addPageStartListener(), this.addPageSwitchListener(), this.addSinglePageListener(), this
		.addPageEndListener()
}, PageLeave.prototype.addPageStartListener = function() {
	var e = this;
	"onpageshow" in window && this._.addEvent(window, "pageshow", function() {
		e.pageStartHandler(), e.hiddenStatusHandler()
	})
}, PageLeave.prototype.isCollectUrl = function(e) {
	return "function" != typeof this.option.isCollectUrl || ("string" != typeof e || "" === e || this.option
		.isCollectUrl(e))
}, PageLeave.prototype.addSinglePageListener = function() {
	var e = this;
	this.sd.ee && this.sd.ee.spa.prepend("switch", function(t) {
		t !== location.href && (e.url = t, e.pageEndHandler(), e.stopHeartBeatInterval(), e
			.current_page_url = e.url, e.pageStartHandler(), e.hiddenStatusHandler(), e
			.startHeartBeatInterval())
	})
}, PageLeave.prototype.addPageEndListener = function() {
	var e = this;
	this._.each(["pagehide", "beforeunload", "unload"], function(t) {
		"on" + t in window && e._.addEvent(window, t, function() {
			e.pageEndHandler(), e.stopHeartBeatInterval()
		})
	})
}, PageLeave.prototype.addPageSwitchListener = function() {
	var e = this;
	this._.listenPageState({
		visible: function() {
			e.pageStartHandler(), e.hiddenStatusHandler(), e.startHeartBeatInterval()
		},
		hidden: function() {
			e.url = location.href, e.pageEndHandler(), e.stopHeartBeatInterval()
		}
	})
}, PageLeave.prototype.addHeartBeatInterval = function() {
	this._.localStorage.isSupport() && this.startHeartBeatInterval()
}, PageLeave.prototype.startHeartBeatInterval = function() {
	var e = this;
	this.heartbeat_interval_timer && this.stopHeartBeatInterval();
	var t = !0;
	this.isCollectUrl(this.url) || (t = !1), this.heartbeat_interval_timer = setInterval(function() {
		t && e.saveHeartBeatData()
	}, this.heartbeat_interval_time), t && this.saveHeartBeatData("is_first_heartbeat"), this
		.reissueHeartBeatData()
}, PageLeave.prototype.stopHeartBeatInterval = function() {
	clearInterval(this.heartbeat_interval_timer), this.heartbeat_interval_timer = null
}, PageLeave.prototype.saveHeartBeatData = function(e) {
	var t = this.getPageLeaveProperties(),
		r = new Date;
	t.$time = r, "is_first_heartbeat" === e && (t.event_duration = 3.14);
	var i = this.sd.kit.buildData({
		type: "track",
		event: "$WebPageLeave",
		properties: t
	});
	try {
		"success" === this.sd.bridge.bridge_info.verify_success && (i.properties.$time = 1 * r)
	} catch (n) {
		this.log(n.message)
	}
	i.heartbeat_interval_time = this.heartbeat_interval_time, this.sd.store.saveObjectVal(this.storage_name + "-" +
		this.page_id, i)
}, PageLeave.prototype.delHeartBeatData = function(e) {
	this._.localStorage.remove(e || this.storage_name + "-" + this.page_id)
}, PageLeave.prototype.reissueHeartBeatData = function() {
	for (var e = window.localStorage.length - 1; e >= 0; e--) {
		var t = window.localStorage.key(e);
		if (t && t !== this.storage_name + "-" + this.page_id && 0 === t.indexOf(this.storage_name + "-")) {
			var r = this.sd.store.readObjectVal(t);
			this._.isObject(r) && 1 * new Date - r.time > r.heartbeat_interval_time + 5e3 && (delete r
				.heartbeat_interval_time, this.sd.kit.sendData(r), this.delHeartBeatData(t))
		}
	}
}, PageLeave.prototype.getPageLeaveProperties = function() {
	var e = (+new Date - this.start_time) / 1e3;
	(isNaN(e) || e < 0 || e > this.max_duration) && (e = 0), e = Number(e.toFixed(3));
	var t = this._.getReferrer(this.current_page_url),
		r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body &&
			document.body.scrollTop || 0;
	r = Math.round(r) || 0;
	var i = {
		$title: document.title,
		$url: this._.getURL(this.url),
		$url_path: this._.getURLPath(this._.URL(this.url).pathname),
		$referrer_host: t ? this._.getHostname(t) : "",
		$referrer: t,
		$viewport_position: r
	};
	return 0 !== e && (i.event_duration = e), i = this._.extend(i, this.option.custom_props)
};
var pageLeave = new PageLeave,
	index$8 = createPlugin$8(pageLeave, "PageLeave", "sdkReady"),
	sdkversion_placeholder$a = "1.24.13";

function wrapPluginInitFn$9(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$9(e, t, r) {
	return wrapPluginInitFn$9(e, t, r), e.plugin_version = sdkversion_placeholder$a, e
}
var PageLoad = {
		init: function(e) {
			function t() {
				var r = window.performance || window.webkitPerformance || window.msPerformance || window
						.mozPerformance,
					i = 0,
					n = {
						$url: e._.getURL(),
						$title: document.title,
						$url_path: e._.getURLPath(),
						$referrer: e._.getReferrer(null, !0)
					};
				if (r && r.timing) {
					var a = r.timing;
					0 === a.fetchStart || 0 === a.domContentLoadedEventEnd ? e.log(
						"performance \u6570\u636e\u83b7\u53d6\u5f02\u5e38") : i = a.domContentLoadedEventEnd - a
						.fetchStart,
						function(t, r) {
							if (t.getEntries && "function" == typeof t.getEntries) {
								for (var i = t.getEntries(), n = null, a = 0; a < i.length; a++) "transferSize" in
								i[a] && (n += i[a].transferSize);
								e._.isNumber(n) && n >= 0 && n < 10737418240 && (r.$page_resource_size = Number((n /
									1024).toFixed(3)))
							}
						}(r, n)
				} else e.log("\u6d4f\u89c8\u5668\u672a\u652f\u6301 performance API.");
				i > 0 && (n.event_duration = Number((i / 1e3).toFixed(3))), e.track("$WebPageLoad", n), window
					.removeEventListener ? window.removeEventListener("load", t) : window.detachEvent && window
					.detachEvent("onload", t)
			}
			"complete" == document.readyState ? t() : window.addEventListener ? window.addEventListener("load", t) :
				window.attachEvent && window.attachEvent("onload", t)
		}
	},
	index$9 = createPlugin$9(PageLoad, "PageLoad", "sdkReady");

function addProperties(e, t) {
	if ("track" !== e.type) return e;
	var r = t.sd,
		i = r._,
		n = r.saEvent.check,
		a = i.extend2Lev({
			properties: {}
		}, e),
		s = t.customRegister,
		o = a.properties,
		d = a.event,
		c = {};
	return i.each(s, function(e) {
		if (i.isObject(e)) i.indexOf(e.events, d) > -1 && n({
			properties: e.properties
		}) && (c = i.extend(c, e.properties));
		else if (i.isFunction(e)) {
			var t = e({
				event: d,
				properties: o,
				data: a
			});
			i.isObject(t) && !i.isEmptyObject(t) && n({
				properties: t
			}) && (c = i.extend(c, t))
		}
	}), e.properties = i.extend(o, c), e
}

function RegisterProperties() {
	this.sd = null, this.log = window.console && window.console.log || function() {}, this.customRegister = []
}
RegisterProperties.prototype.init = function(e) {
	if (e) {
		this.sd = e, this._ = e._, this.log = e.log;
		var t = this;
		e.registerInterceptor("buildDataStage", {
			extendProps: {
				priority: 0,
				entry: function(e) {
					return addProperties(e, t)
				}
			}
		})
	} else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
}, RegisterProperties.prototype.register = function(e) {
	this.sd ? this._.isObject(e) && this._.isArray(e.events) && e.events.length > 0 && this._.isObject(e
		.properties) && !this._.isEmptyObject(e.properties) ? this.customRegister.push(e) : this.log(
		"RegisterProperties: register \u53c2\u6570\u9519\u8bef") : this.log(
		"\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
}, RegisterProperties.prototype.hookRegister = function(e) {
	this.sd ? this._.isFunction(e) ? this.customRegister.push(e) : this.log(
		"RegisterProperties: hookRegister \u53c2\u6570\u9519\u8bef") : this.log(
		"\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")
};
var sdkversion_placeholder$b = "1.24.13";

function wrapPluginInitFn$a(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$a(e, t, r) {
	return wrapPluginInitFn$a(e, t, r), e.plugin_version = sdkversion_placeholder$b, e
}
RegisterProperties.prototype.plugin_name = "RegisterProperties";
var instance = new RegisterProperties,
	index$a = createPlugin$a(instance),
	sdkversion_placeholder$c = "1.24.13";

function wrapPluginInitFn$b(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$b(e, t, r) {
	return wrapPluginInitFn$b(e, t, r), e.plugin_version = sdkversion_placeholder$c, e
}
var _sd, _oldBuildData, _log = window.console && window.console.log || function() {};

function buildData(e) {
	try {
		if ("$pageview" !== e.event && (!e.type || "profile" !== e.type.slice(0, 7))) {
			var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
				r = document.documentElement.scrollHeight || 0,
				i = {
					$page_height: Math.max(t, r) || 0
				};
			e.properties = _sd._.extend(e.properties || {}, i)
		}
	} catch (n) {
		_log("\u9875\u9762\u9ad8\u5ea6\u83b7\u53d6\u5f02\u5e38\u3002")
	}
	return _oldBuildData.call(_sd.kit, e)
}
var RegisterPropertyPageHeight = {
		init: function(e) {
			_log = (_sd = e) && _sd.log || _log, e && e.kit && e.kit.buildData ? (_oldBuildData = _sd.kit.buildData,
				_sd.kit.buildData = buildData, _log(
				"RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")) : _log(
				"RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301 RegisterPropertyPageHeight \u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk"
			)
		}
	},
	index$b = createPlugin$b(RegisterPropertyPageHeight, "RegisterPropertyPageHeight", "sdkReady"),
	sdkversion_placeholder$d = "1.24.13";

function wrapPluginInitFn$c(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$c(e, t, r) {
	return wrapPluginInitFn$c(e, t, r), e.plugin_version = sdkversion_placeholder$d, e
}
var sd$6, siteLinker = {
		getPart: function(e) {
			var t = this.option.length;
			if (t)
				for (var r = 0; r < t; r++)
					if (e.indexOf(this.option[r].part_url) > -1) return !0;
			return !1
		},
		getPartHash: function(e) {
			var t = this.option.length;
			if (t)
				for (var r = 0; r < t; r++)
					if (e.indexOf(this.option[r].part_url) > -1) return this.option[r].after_hash;
			return !1
		},
		getCurrenId: function() {
			var e = this.store.getDistinctId() || "",
				t = this.store.getFirstId() || "";
			return this._.urlSafeBase64 && this._.urlSafeBase64.encode ? e = e ? this._.urlSafeBase64.trim(this._
				.urlSafeBase64.encode(this._.base64Encode(e))) : "" : this._.rot13obfs && (e = e ? this._
				.rot13obfs(e) : ""), encodeURIComponent(t ? "f" + e : "d" + e)
		},
		rewriteUrl: function(e, t) {
			var r = this,
				i = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e),
				n = "";
			if (i) {
				var a, s = i[1] || "",
					o = i[2] || "",
					d = i[3] || "",
					c = "_sasdk=" + this.getCurrenId(),
					l = function(e) {
						var t = e.split("&"),
							i = [];
						return r._.each(t, function(e) {
							e.indexOf("_sasdk=") > -1 ? i.push(c) : i.push(e)
						}), i.join("&")
					};
				if (this.getPartHash(e)) a = d.indexOf("_sasdk"), n = d.indexOf("?") > -1 ? a > -1 ? s + o + "#" + d
					.substring(1, a) + l(d.substring(a, d.length)) : s + o + d + "&" + c : s + o + "#" + d
					.substring(1) + "?" + c;
				else a = o.indexOf("_sasdk"), n = /^\?(\w)+/.test(o) ? a > -1 ? s + "?" + l(o.substring(1)) + d :
					s + o + "&" + c + d : s + "?" + c + d;
				return t && (t.href = n), n
			}
		},
		getUrlId: function() {
			var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
			if (this._.isArray(e) && e[1]) {
				var t = decodeURIComponent(e[1]);
				return !t || "f" !== t.substring(0, 1) && "d" !== t.substring(0, 1) || (this._.urlSafeBase64 && this
					._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(t) ? t = t
					.substring(0, 1) + this._.base64Decode(this._.urlSafeBase64.decode(t.substring(1))) : this._
					.rot13defs && (t = t.substring(0, 1) + this._.rot13defs(t.substring(1)))), t
			}
			return ""
		},
		setRefferId: function(e) {
			var t = this.store.getDistinctId(),
				r = this.getUrlId();
			if (r && "" !== r) {
				var i = "a" === r.substring(0, 1) || "d" === r.substring(0, 1);
				(r = r.substring(1)) !== t && (i ? (this.sd.identify(r, !0), this.store.getFirstId() && this.sd
					.saEvent.send({
						original_id: r,
						distinct_id: t,
						type: "track_signup",
						event: "$SignUp",
						properties: {}
					}, null)) : this.store.getFirstId() && !e.re_login || this.sd.login(r))
			}
		},
		addListen: function() {
			var e = this,
				t = function(t) {
					var r, i, n = t.target,
						a = n.tagName.toLowerCase(),
						s = n.parentNode;
					if ("a" === a && n.href || s && s.tagName && "a" === s.tagName.toLowerCase() && s.href) {
						"a" === a && n.href ? (r = n.href, i = n) : (r = s.href, i = s);
						var o = e._.URL(r).protocol;
						"http:" !== o && "https:" !== o || e.getPart(r) && e.rewriteUrl(r, i)
					}
				};
			e._.addEvent(document, "mousedown", t), window.PointerEvent && "maxTouchPoints" in window.navigator &&
			window.navigator.maxTouchPoints >= 0 && e._.addEvent(document, "pointerdown", t)
		},
		init: function(e, t) {
			this.sd = e, this._ = e._, this.store = e.store, this.para = e.para, this._.isObject(t) && this._
				.isArray(t.linker) && t.linker.length > 0 ? (this.setRefferId(t), this.addListen(), this.option = t
				.linker, this.option = function(t) {
				for (var r = t.length, i = [], n = 0; n < r; n++) /[A-Za-z0-9]+\./.test(t[n].part_url) &&
				"[object Boolean]" == Object.prototype.toString.call(t[n].after_hash) ? i.push(t[n]) : e
					.log("linker \u914d\u7f6e\u7684\u7b2c " + (n + 1) +
						" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01"
					);
				return i
			}(this.option)) : e.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")
		}
	},
	index$c = createPlugin$c(siteLinker, "SiteLinker", "sdkReady"),
	source_channel_standard$1 = "utm_source utm_medium utm_campaign utm_content utm_term",
	sdkversion_placeholder$e = "1.24.13";

function wrapPluginInitFn$d(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$d(e, t, r) {
	return wrapPluginInitFn$d(e, t, r), e.plugin_version = sdkversion_placeholder$e, e
}
var utm = {
		init: function(e) {
			e && !sd$6 && (sd$6 = e).registerInterceptor("businessStage", {
				getUtmData: {
					priority: 0,
					entry: function() {
						return function() {
							var e = source_channel_standard$1.split(" "),
								t = "",
								r = {};
							sd$6._.isArray(sd$6.para.source_channel) && sd$6.para.source_channel
								.length > 0 && (e = e.concat(sd$6.para.source_channel), e = sd$6._
								.unique(e));
							return sd$6._.each(e, function(e) {
								(t = sd$6._.getQueryParam(location.href, e)).length && (r[
									e] = t)
							}), r
						}()
					}
				}
			})
		}
	},
	index$d = createPlugin$d(utm, "Utm", "sdkAfterInitPara"),
	sdkversion_placeholder$f = "1.24.13";

function wrapPluginInitFn$e(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$e(e, t, r) {
	return wrapPluginInitFn$e(e, t, r), e.plugin_version = sdkversion_placeholder$f, e
}
var isDisabled = !1,
	sd$7 = null,
	disableSDKPlugin = {
		init: function(e) {
			(sd$7 = e).disableSDK = disableSDK, sd$7.enableSDK = enableSDK, sd$7.getDisabled = getDisabled
		}
	};

function disableSDK() {
	isDisabled = !0
}

function enableSDK() {
	isDisabled = !1
}

function getDisabled() {
	return isDisabled
}
var sd$8, _$6, index$e = createPlugin$e(disableSDKPlugin, "DisableSDK", "sdkInitAPI"),
	sdkversion_placeholder$g = "1.24.13";

function wrapPluginInitFn$f(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$f(e, t, r) {
	return wrapPluginInitFn$f(e, t, r), e.plugin_version = sdkversion_placeholder$g, e
}

function debugPath(e) {
	var t = e,
		r = "";
	r = -1 !== sd$8.para.debug_mode_url.indexOf("?") ? sd$8.para.debug_mode_url + "&" + sd$8.kit.encodeTrackData(e) :
		sd$8.para.debug_mode_url + "?" + sd$8.kit.encodeTrackData(e), _$6.ajax({
		url: r,
		type: "GET",
		cors: !0,
		header: {
			"Dry-Run": String(sd$8.para.debug_mode_upload)
		},
		success: function(e) {
			!0 === _$6.isEmptyObject(e) ? alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f" + t) : alert(
				"debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0" + JSON.stringify(e))
		}
	})
}

function sendData$4(e, t) {
	if (!0 === sd$8.para.debug_mode) {
		var r = e.data;
		e.callback;
		debugPath(JSON.stringify(r)), t.cancellationToken.stop()
	}
	return e
}

function initPara$1() {
	!0 === sd$8.para.debug_mode && (sd$8.para.debug_mode_upload = sd$8.para.debug_mode_upload || !1, _$6.isString(sd$8
		.para.debug_mode_url) || (_$6.isString(sd$8.para.server_url) ? sd$8.para.debug_mode_url = sd$8.para
		.server_url.replace("sa.gif", "debug") : _$6.isArray(sd$8.para.server_url) && _$6.isString(sd$8.para
		.server_url[0]) ? sd$8.para.debug_mode_url = sd$8.para.server_url[0].replace("sa.gif", "debug") :
		sd$8.para.debug_mode = !1))
}

function senderInit() {
	sd$8.on("sdkInitPara", function() {
		initPara$1()
	}), sd$8.on("sdkAfterInitPara", function() {
		sd$8.registerInterceptor("sendDataStage", {
			send: {
				priority: 30,
				entry: sendData$4
			}
		})
	})
}
var sd$9, _$7, DebugSender = {
		plugin_name: "DebugSender",
		init: function(e) {
			_$6 = (sd$8 = e)._, senderInit()
		}
	},
	index$f = createPlugin$f(DebugSender),
	sdkversion_placeholder$h = "1.24.13";

function wrapPluginInitFn$g(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$g(e, t, r) {
	return wrapPluginInitFn$g(e, t, r), e.plugin_version = sdkversion_placeholder$h, e
}

function sendData$5(e, t) {
	if (_$7.isObject(sd$9.para.jsapp) && !sd$9.para.jsapp.isOnline && "function" == typeof sd$9.para.jsapp.setData) {
		var r = e;
		delete r.callback, r = JSON.stringify(r), sd$9.para.jsapp.setData(r), t.cancellationToken.stop()
	}
	return e
}

function senderInit$1() {
	sd$9.on("sdkAfterInitAPI", function() {
		_$7.isObject(sd$9.commonWays) && (sd$9.commonWays.setOnlineState = setOnlineState), sd$9
			.registerInterceptor("sendDataStage", {
				send: {
					priority: 40,
					entry: sendData$5
				}
			})
	})
}

function setOnlineState(e) {
	if (!0 === e && _$7.isObject(sd$9.para.jsapp) && "function" == typeof sd$9.para.jsapp.getData) {
		sd$9.para.jsapp.isOnline = !0;
		var t = sd$9.para.jsapp.getData();
		_$7.isArray(t) && t.length > 0 && _$7.each(t, function(e) {
			_$7.isJSONString(e) && sd$9.kit.sendData(JSON.parse(e))
		})
	} else sd$9.para.jsapp.isOnline = !1
}
var sd$a, _$8, JsappSender = {
		plugin_name: "JsappSender",
		init: function(e) {
			_$7 = (sd$9 = e)._, senderInit$1()
		}
	},
	index$g = createPlugin$g(JsappSender),
	sdkversion_placeholder$i = "1.24.13";

function wrapPluginInitFn$h(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$h(e, t, r) {
	return wrapPluginInitFn$h(e, t, r), e.plugin_version = sdkversion_placeholder$i, e
}
var batchInstance = null;

function sendData$6(e, t) {
	return !sd$a.para.app_js_bridge && sd$a.para.batch_send && _$8.localStorage.isSupport() && localStorage.length <
	sd$a.para.batch_send.storage_length && (batchInstance.add(e.data), t.cancellationToken.stop()), e
}

function initPara$2() {
	var e = {
		datasend_timeout: 6e3,
		send_interval: 6e3,
		storage_length: 200
	};
	_$8.localStorage.isSupport() && _$8.isSupportCors() && "object" == typeof localStorage ? !0 === sd$a.para
		.batch_send ? sd$a.para.batch_send = _$8.extend({}, e) : "object" == typeof sd$a.para.batch_send && (sd$a.para
		.batch_send = _$8.extend({}, e, sd$a.para.batch_send)) : sd$a.para.batch_send = !1
}

function senderInit$2() {
	sd$a.on("sdkInitPara", function() {
		initPara$2()
	}), sd$a.on("sdkAfterInitPara", function() {
		!sd$a.para.app_js_bridge && sd$a.para.batch_send && _$8.localStorage.isSupport() && (batchInstance || (
			batchInstance = new _$8.BatchSend), batchInstance.batchInterval(), sd$a.registerInterceptor(
			"sendDataStage", {
				send: {
					priority: 100,
					entry: sendData$6
				}
			}))
	})
}
var sd$b, _$9, BatchSender = {
		plugin_name: "BatchSender",
		init: function(e) {
			_$8 = (sd$a = e)._, senderInit$2()
		}
	},
	index$h = createPlugin$h(BatchSender),
	sdkversion_placeholder$j = "1.24.13";

function wrapPluginInitFn$i(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$i(e, t, r) {
	return wrapPluginInitFn$i(e, t, r), e.plugin_version = sdkversion_placeholder$j, e
}

function sendData$7(e) {
	new _$9.BeaconSend(e).start()
}

function sendInterceptor(e, t) {
	if ("beacon" === sd$b.para.send_type) {
		var r = e.server_url;
		e.data = sd$b.kit.encodeTrackData(e.data), _$9.isArray(r) && r.length ? _$9.each(r, function(t) {
			e.callback = null, e.server_url = t, sendData$7(e)
		}) : "string" == typeof sd$b.para.server_url && "" !== sd$b.para.server_url ? sendData$7(e) : sd$b.log(
			"\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"
		), t.cancellationToken.stop()
	}
	return e
}

function initPara$3() {
	"beacon" !== sd$b.para.send_type || _$9.isSupportBeaconSend() || (sd$b.para.send_type = "image")
}

function senderInit$3() {
	sd$b.on("sdkInitPara", function() {
		initPara$3()
	}), sd$b.on("sdkAfterInitPara", function() {
		sd$b.registerInterceptor("sendDataStage", {
			send: {
				priority: 110,
				entry: sendInterceptor
			}
		})
	})
}
var sd$c, _$a, BeaconSender = {
		plugin_name: "BeaconSender",
		init: function(e) {
			_$9 = (sd$b = e)._, senderInit$3()
		}
	},
	index$i = createPlugin$i(BeaconSender),
	sdkversion_placeholder$k = "1.24.13";

function wrapPluginInitFn$j(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$j(e, t, r) {
	return wrapPluginInitFn$j(e, t, r), e.plugin_version = sdkversion_placeholder$k, e
}

function sendData$8(e) {
	new _$a.AjaxSend(e).start()
}

function sendInterceptor$1(e, t) {
	if ("ajax" === sd$c.para.send_type) {
		var r = e.server_url;
		e.data = sd$c.kit.encodeTrackData(e.data), _$a.isArray(r) && r.length ? _$a.each(r, function(t) {
			e.callback = null, e.server_url = t, sendData$8(e)
		}) : "string" == typeof sd$c.para.server_url && "" !== sd$c.para.server_url ? sendData$8(e) : sd$c.log(
			"\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"
		), t.cancellationToken.stop()
	}
	return e
}

function initPara$4() {
	"ajax" !== sd$c.para.send_type || _$a.isSupportCors() || (sd$c.para.send_type = "image")
}

function senderInit$4() {
	sd$c.on("sdkInitPara", function() {
		initPara$4()
	}), sd$c.on("sdkAfterInitPara", function() {
		sd$c.registerInterceptor("sendDataStage", {
			send: {
				priority: 120,
				entry: sendInterceptor$1
			}
		})
	})
}
var sd$d, _$b, AjaxSender = {
		plugin_name: "AjaxSender",
		init: function(e) {
			_$a = (sd$c = e)._, senderInit$4()
		}
	},
	index$j = createPlugin$j(AjaxSender),
	sdkversion_placeholder$l = "1.24.13";

function wrapPluginInitFn$k(e, t, r) {
	if (t && (e.plugin_name = t), r && e.init) {
		var i = e.init;
		e.init = function(t, n) {
			if (t.readyState && t.readyState.state >= 3 || !t.on) return a();

			function a() {
				i.call(e, t, n)
			}
			t.on(r, a)
		}
	}
	return e
}

function createPlugin$k(e, t, r) {
	return wrapPluginInitFn$k(e, t, r), e.plugin_version = sdkversion_placeholder$l, e
}

function getSendUrl(e, t) {
	var r = sd$d.kit.encodeTrackData(t);
	return -1 !== e.indexOf("?") ? e + "&" + r : e + "?" + r
}

function sendData$9(e) {
	new _$b.ImageSend(e).start()
}

function sendInterceptor$2(e, t) {
	var r = e.server_url;
	e.data = getSendUrl(r, e.data), _$b.isArray(r) && r.length ? _$b.each(r, function(t) {
		e.callback = null, e.server_url = t, sendData$9(e)
	}) : "string" == typeof sd$d.para.server_url && "" !== sd$d.para.server_url ? sendData$9(e) : sd$d.log(
		"\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"
	), t.cancellationToken.stop()
}

function initPara$5() {
	"image" !== sd$d.para.send_type && "ajax" !== sd$d.para.send_type && "beacon" !== sd$d.para.send_type && (sd$d.para
		.send_type = "image")
}

function senderInit$5() {
	sd$d.on("sdkInitPara", function() {
		initPara$5()
	}), sd$d.on("sdkAfterInitPara", function() {
		sd$d.registerInterceptor("sendDataStage", {
			send: {
				priority: 130,
				entry: sendInterceptor$2
			}
		})
	})
}
var ImageSender = {
		plugin_name: "ImageSender",
		init: function(e) {
			_$b = (sd$d = e)._, senderInit$5()
		}
	},
	index$k = createPlugin$k(ImageSender);
sd.modules = sd.modules || {};
for (var builtinPlugins = [index$1, index$2, index$3, index$4, index$5, index$6, index$7, index$8, index$9, index$a,
	index$b, index$c, index$d, index$e, index$f, index$g, index$h, index$i, index$j, index$k
], autoUsePlugins = [index, index$d, index$e, index$g, index$f, index$2, index$6, index$3, index$7, index$h,
	index$i, index$j, index$k
], i = 0; i < builtinPlugins.length; i++) {
	var p = builtinPlugins[i];
	sd._.isString(p.plugin_name) ? sd.modules[p.plugin_name] = p : sd._.isArray(p.plugin_name) && sd._.each(p
			.plugin_name,
		function(e) {
			sd.modules[e] = p
		})
}
for (i = 0; i < autoUsePlugins.length; i++) sd.use(autoUsePlugins[i]);
var _sd$1 = sd;
try {
	"string" == typeof window.sensorsDataAnalytic201505 ? (sd.para = window[sensorsDataAnalytic201505].para, sd._q =
		window[sensorsDataAnalytic201505]._q, window[sensorsDataAnalytic201505] = sd, window
		.sensorsDataAnalytic201505 = sd, sd.init()) : "undefined" == typeof window.sensorsDataAnalytic201505 ?
		window.sensorsDataAnalytic201505 = sd : _sd$1 = window.sensorsDataAnalytic201505
} catch (err) {
	if ("object" == typeof console && console.log) try {
		console.log(err)
	} catch (e) {
		sd.log(e)
	}
}
var sd$e = _sd$1;
export default sd$e
