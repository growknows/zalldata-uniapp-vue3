"use strict";var sdmp=Object.assign({},swan),sdmp_info={storageName:"sensorsdata2015_baidu",lib_name:"SmartProgram",lib_method:"code",select_utm:!0,data_is_store:"sensors_prepare_data"};sdmp.sdmp_request=swan.request,sdmp.sdmp_getSystemInfo=swan.getSystemInfo,sdmp.sdmp_getNetworkType=swan.getNetworkType,sdmp.sdmp_getStorageSync=swan.getStorageSync,sdmp.sdmp_setStorageSync=swan.setStorageSync,sdmp.sdmp_getAppId=swan.getEnvInfoSync,sdmp.sdmp_getStorage=swan.getStorage;const sa={lib_version:"0.15.2",is_first_launch:!1,_queue:[],getSystemInfoComplete:!1,para:{name:"sensors",server_url:"",max_string_length:200,autoTrack:{appLaunch:!0,appShow:!0,appHide:!0,pageShow:!0,mpClick:!0},show_log:!0,batch_send:!0},log:function(){if(sa.para.show_log)try{return console.log.apply(console,arguments)}catch(t){console.log(arguments[0])}}},_={};var ArrayProto=Array.prototype,ObjProto=Object.prototype,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty,nativeForEach=ArrayProto.forEach,nativeIndexOf=ArrayProto.indexOf,nativeIsArray=Array.isArray,breaker={},each=_.each=function(t,e,a){if(null==t)return!1;if(nativeForEach&&t.forEach===nativeForEach)t.forEach(e,a);else if(t.length===+t.length){for(var r=0,s=t.length;r<s;r++)if(r in t&&e.call(a,t[r],r,t)===breaker)return!1}else for(var n in t)if(hasOwnProperty.call(t,n)&&e.call(a,t[n],n,t)===breaker)return!1};_.extend=function(t){return each(slice.call(arguments,1),function(e){for(var a in e)void 0!==e[a]&&(t[a]=e[a])}),t},_.extend2Lev=function(t){return each(slice.call(arguments,1),function(e){for(var a in e)void 0!==e[a]&&(_.isObject(e[a])&&_.isObject(t[a])?_.extend(t[a],e[a]):t[a]=e[a])}),t},_.coverExtend=function(t){return each(slice.call(arguments,1),function(e){for(var a in e)void 0!==e[a]&&void 0===t[a]&&(t[a]=e[a])}),t},_.isArray=nativeIsArray||function(t){return"[object Array]"===toString.call(t)},_.isFunction=function(t){try{return/^\s*\bfunction\b/.test(t)}catch(t){return!1}},_.isArguments=function(t){return!(!t||!hasOwnProperty.call(t,"callee"))},_.toArray=function(t){return t?t.toArray?t.toArray():_.isArray(t)?slice.call(t):_.isArguments(t)?slice.call(t):_.values(t):[]},_.values=function(t){var e=[];return null==t?e:(each(t,function(t){e[e.length]=t}),e)},_.include=function(t,e){var a=!1;return null==t?a:nativeIndexOf&&t.indexOf===nativeIndexOf?-1!=t.indexOf(e):(each(t,function(t){if(a||(a=t===e))return breaker}),a)},_.trim=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},_.isObject=function(t){return"[object Object]"==toString.call(t)&&null!=t},_.isEmptyObject=function(t){if(_.isObject(t)){for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0}return!1},_.isUndefined=function(t){return void 0===t},_.isString=function(t){return"[object String]"==toString.call(t)},_.isDate=function(t){return"[object Date]"==toString.call(t)},_.isBoolean=function(t){return"[object Boolean]"==toString.call(t)},_.isNumber=function(t){return"[object Number]"==toString.call(t)&&/[\d\.]+/.test(String(t))},_.isJSONString=function(t){try{JSON.parse(t)}catch(t){return!1}return!0},_.decodeURIComponent=function(t){var e="";try{e=decodeURIComponent(t)}catch(a){e=t}return e},_.encodeDates=function(t){return _.each(t,function(e,a){_.isDate(e)?t[a]=_.formatDate(e):_.isObject(e)&&(t[a]=_.encodeDates(e))}),t},_.formatDate=function(t){function e(t){return t<10?"0"+t:t}return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())+" "+e(t.getHours())+":"+e(t.getMinutes())+":"+e(t.getSeconds())+"."+e(t.getMilliseconds())},_.searchObjDate=function(t){_.isObject(t)&&_.each(t,function(e,a){_.isObject(e)?_.searchObjDate(t[a]):_.isDate(e)&&(t[a]=_.formatDate(e))})},_.searchObjString=function(t){_.isObject(t)&&_.each(t,function(e,a){_.isObject(e)?_.searchObjString(t[a]):_.isString(e)&&(t[a]=_.formatString(e))})},_.unique=function(t){for(var e,a=[],r={},s=0;s<t.length;s++)(e=t[s])in r||(r[e]=!0,a.push(e));return a},_.strip_sa_properties=function(t){return _.isObject(t)?(_.each(t,function(e,a){if(_.isArray(e)){var r=[];_.each(e,function(t){_.isString(t)?r.push(t):sa.log("\u60a8\u7684\u6570\u636e-",e,"\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")}),0!==r.length?t[a]=r:(delete t[a],sa.log("\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4"))}_.isString(e)||_.isNumber(e)||_.isDate(e)||_.isBoolean(e)||_.isArray(e)||(sa.log("\u60a8\u7684\u6570\u636e-",e,"-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),delete t[a])}),t):t},_.strip_empty_properties=function(t){var e={};return _.each(t,function(t,a){null!=t&&(e[a]=t)}),e},_.utf8Encode=function(t){var e,a,r,s,n="";for(e=a=0,r=(t=(t+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,s=0;s<r;s++){var i=t.charCodeAt(s),o=null;i<128?a++:o=i>127&&i<2048?String.fromCharCode(i>>6|192,63&i|128):String.fromCharCode(i>>12|224,i>>6&63|128,63&i|128),null!==o&&(a>e&&(n+=t.substring(e,a)),n+=o,e=a=s+1)}return a>e&&(n+=t.substring(e,t.length)),n},_.base64Encode=function(t){var e,a,r,s,n,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=0,c=0,p="",u=[];if(!t)return t;t=_.utf8Encode(t);do{e=(n=t.charCodeAt(o++)<<16|t.charCodeAt(o++)<<8|t.charCodeAt(o++))>>18&63,a=n>>12&63,r=n>>6&63,s=63&n,u[c++]=i.charAt(e)+i.charAt(a)+i.charAt(r)+i.charAt(s)}while(o<t.length);switch(p=u.join(""),t.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p},sa._=_;var source_channel_standard="utm_source utm_medium utm_campaign utm_content utm_term";_.getMPScene=function(t){if("number"==typeof t||"string"==typeof t&&""!==t){switch(sdmp_info.lib_name){case"QQMini":t="qq-"+String(t);break;case"SmartProgram":t="baidu-"+String(t);break;case"BytedanceMini":t="byte-"+String(t)}return t}return"\u672a\u53d6\u5230\u503c"},_.getCurrentPath=function(){var t="\u672a\u53d6\u5230";try{var e=getCurrentPages(),a=e[e.length-1];t=a.route?a.route:a.__route__}catch(t){sa.log(t)}return t},_.getPath=function(t){return t="string"==typeof t?t.replace(/^\//,""):"\u53d6\u503c\u5f02\u5e38"},_.setUtm=function(t,e){var a={},r=_.getQuery(t),s=_.getUtmFromQuery(r,"$","_"),n=_.getUtmFromQuery(r,"$latest_","_latest_");return a.pre1=s,a.pre2=n,_.extend(e,s),a},_.getQuery=function(t){var e={};for(var a in t&&_.isObject(t.query)&&(e=_.extend(e,t.query)),e)e[a]=_.decodeURIComponent(e[a]);return e},_.getUtmFromQuery=function(t,e,a){if(!_.isObject(t))return{};var r={};for(var s in t)-1!==(" "+source_channel_standard+" ").indexOf(" "+s+" ")&&(r[e+s]=t[s]),_.isArray(sa.para.source_channel)&&_.include(sa.para.source_channel,s)&&(r[a+s]=t[s]);return r},_.formatString=function(t){return t.length>sa.para.max_string_length?(sa.log("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--"+t),t.slice(0,sa.para.max_string_length)):t},_.getAppId=function(){var t;if(sdmp.sdmp_getAppId&&(t=sdmp.sdmp_getAppId()),_.isObject(t))return t.appKey},_.setUpperCase=function(t){return _.isString(t)?t.toLocaleUpperCase():t},_.info={currentProps:{$distinctIdType:0},properties:{$lib:sdmp_info.lib_name,$lib_version:String(sa.lib_version)},getSystem:function(){var t=this.properties,e=!0;function a(){e&&(e=!0,sdmp.sdmp_getSystemInfo({success:function(e){t.$model=e.model,t.$screen_width=Number(e.screenWidth),t.$screen_height=Number(e.screenHeight),t.$os=function(t){try{var e=t.toLowerCase();return"ios"===e?"iOS":"android"===e?"Android":t}catch(t){sa.log(t)}}(e.platform),t.$os_version=e.system.indexOf(" ")>-1?e.system.split(" ")[1]:e.system,t.$brand=_.setUpperCase(e.brand),t.$manufacturer=e.brand},complete:function(){var e=_.getAppId(),a=(new Date).getTimezoneOffset();e&&(t.$app_id=e),_.isNumber(a)&&(t.$timezone_offset=a),sa.getSystemInfoComplete=!0,sa.checkIsComplete()}}))}sdmp.sdmp_getNetworkType({success:function(e){t.$network_type=_.setUpperCase(e.networkType),a()},complete:function(){a()}})},setStatusComplete:function(){if(sa.getSystemInfoComplete)return!1;sa.getSystemInfoComplete=!0,sa._queue.length>0&&(_.each(sa._queue,function(t){sa.prepareData.apply(sa,Array.prototype.slice.call(t))}),sa._queue=[])}},_.getIsFirstDay=function(){return"object"==typeof sa.store._state&&"number"==typeof sa.store._state.first_visit_day_time&&sa.store._state.first_visit_day_time>(new Date).getTime()};let store={getUUID:function(){return Date.now()+"-"+Math.floor(1e7*Math.random())+"-"+Math.random().toString(16).replace(".","")+"-"+String(31242*Math.random()).replace(".","").slice(0,8)},setStorage:function(){},getStorage:function(){return sdmp.sdmp_getStorageSync(sdmp_info.storageName)||""},_state:{},mem:{mdata:[],getLength:function(){return this.mdata.length},add:function(t){this.mdata.push(t)},clear:function(t){this.mdata.splice(0,t)}},toState:function(t){"object"==typeof t&&t.distinct_id?this._state=t:this.set("distinct_id",this.getUUID())},getFirstId:function(){return this._state.first_id},getDistinctId:function(){return this._state.distinct_id},getProps:function(){return this._state.props||{}},setProps:function(t,e){var a=this._state.props||{};e?this.set("props",t):(_.extend(a,t),this.set("props",a))},set:function(t,e){var a={};for(var r in"string"==typeof t?a[t]=e:"object"==typeof t&&(a=t),this._state=this._state||{},a)this._state[r]=a[r];this.save()},change:function(t,e){this._state[t]=e},save:function(){sdmp.sdmp_setStorageSync(sdmp_info.storageName,this._state)},init:function(){var t=this.getStorage();if(t)this.toState(t);else{sa.is_first_launch=!0;var e=new Date,a=e.getTime();e.setHours(23),e.setMinutes(59),e.setSeconds(60),sa.setOnceProfile({$first_visit_time:new Date}),this.set({distinct_id:this.getUUID(),first_visit_time:a,first_visit_day_time:e.getTime()})}}};sa.store=store;class SendStrategy{constructor(){this.dataHasSend=!0,this.syncStorage=!1,this.is_first_batch_write=!0,this.failTime=0}init(){let t=this;sdmp.sdmp_getStorage({key:sdmp_info.data_is_store,complete:function(e){var a=e.data&&_.isArray(e.data)?e.data:[];sa.store.mem.mdata=a.concat(sa.store.mem.mdata),t.syncStorage=!0}}),this.batchInterval()}onAppHide(){sa.para.batch_send&&this.batchSend()}send(t){return!!sa.para.server_url&&(this.dataHasChange=!0,sa.store.mem.getLength()>=300?(sa.log("\u6570\u636e\u91cf\u5b58\u50a8\u8fc7\u5927\uff0c\u6709\u5f02\u5e38"),!1):(sa.log(t),sa.store.mem.add(t),void(sa.store.mem.getLength()>=sa.para.batch_send.max_length&&this.batchSend())))}batchWrite(){let t=this;this.dataHasChange&&(this.is_first_batch_write&&(this.is_first_batch_write=!1,setTimeout(function(){t.batchSend()},1e3)),this.syncStorage&&(sdmp.sdmp_setStorageSync(sdmp_info.data_is_store,sa.store.mem.mdata),this.dataHasChange=!1))}batchInterval(){let t=this;!function e(){setTimeout(function(){t.batchSend(),e()},sa.para.batch_send.send_timeout*Math.pow(2,t.failTime))}(),function e(){setTimeout(function(){t.batchWrite(),e()},500)}()}batchSend(){if(this.dataHasSend){sa.store.mem.mdata.forEach((v)=>{if(v&&v.properties&&null==v.properties.$distinctIdType){console.log('--request interceptors--',v);Object.assign(v.properties,{$distinctIdType: _.info.currentProps.$distinctIdType || _.info.properties.$distinctIdType})}});let e=this,a=sa.store.mem.mdata,r=a.length;if(_.isArray(a)&&a.length>0){this.dataHasSend=!1;var t=Date.now();a.forEach(function(e){e._flush_time=t}),a=JSON.stringify(a),a="data_list="+encodeURIComponent(_.base64Encode(a)),sdmp.sdmp_request({url:sa.para.server_url,method:"POST",data:a,dataType:"text",success:function(t){e.batchRemove(r)},fail:function(t){e.sendFail()}})}}}batchRemove(t){this.dataHasSend=!0,this.dataHasChange=!0,sa.store.mem.clear(t),this.batchWrite(),this.failTime=0}sendFail(){this.dataHasSend=!0,this.failTime++}}var sendStrategy=new SendStrategy,mpshow_time=null;sa.setPara=function(t){if(sa.para=_.extend2Lev(sa.para,t),_.isObject(sa.para.register)&&_.extend(_.info.properties,sa.para.register),sa.para.name||(sa.para.name="sensors"),sa.para.server_url){var e={send_timeout:6e3,max_length:6};!0===sa.para.batch_send?sa.para.batch_send=_.extend({},e):_.isObject(sa.para.batch_send)?sa.para.batch_send=_.extend({},e,sa.para.batch_send):sa.para.batch_send=!1}else sa.log("\u8bf7\u4f7f\u7528 setPara() \u65b9\u6cd5\u8bbe\u7f6e server_url \u6570\u636e\u63a5\u6536\u5730\u5740,\u8be6\u60c5\u53ef\u67e5\u770bhttps://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")},sa.getServerUrl=function(){return sa.para.server_url},sa.prepareData=function(t,e){if(!sa.isComplete)return sa._queue.push(arguments),!1;var a={distinct_id:this.store.getDistinctId(),lib:{$lib:sdmp_info.lib_name,$lib_method:sdmp_info.lib_method,$lib_version:String(sa.lib_version)},properties:{}};_.extend(a,t),_.isObject(t.properties)&&!_.isEmptyObject(t.properties)&&_.extend(a.properties,t.properties),t.type&&"profile"===t.type.slice(0,7)||(a._track_id=Number(String(Math.random()).slice(2,5)+String(Math.random()).slice(2,4)+String(Date.now()).slice(-4)),a.properties=_.extend({},_.info.properties,sa.store.getProps(),_.info.currentProps,a.properties),"object"==typeof sa.store._state&&"number"==typeof sa.store._state.first_visit_day_time&&sa.store._state.first_visit_day_time>(new Date).getTime()?a.properties.$is_first_day=!0:a.properties.$is_first_day=!1),a.properties.$time&&_.isDate(a.properties.$time)?(a.time=1*a.properties.$time,delete a.properties.$time):a.time=1*new Date,_.searchObjDate(a),_.searchObjString(a),sa.para.batch_send?sendStrategy.send(a):sa.send(a,e)},sa.setProfile=function(t,e){sa.prepareData({type:"profile_set",properties:t},e)},sa.setOnceProfile=function(t,e){sa.prepareData({type:"profile_set_once",properties:t},e)},sa.track=function(t,e,a){this.prepareData({type:"track",event:t,properties:e},a)},sa.identify=function(t,e){if("number"==typeof t)t=String(t);else if("string"!=typeof t)return!1;var a=sa.store.getFirstId();!0===e?a?sa.store.set("first_id",t):sa.store.set("distinct_id",t):a?sa.store.change("first_id",t):sa.store.change("distinct_id",t)},sa.trackSignup=function(t,e,a,r){sa.prepareData({original_id:sa.store.getFirstId()||sa.store.getDistinctId(),distinct_id:t,type:"track_signup",event:e,properties:a},r),sa.store.set("distinct_id",t)},sa.registerApp=function(t){_.isObject(t)&&!_.isEmptyObject(t)&&(_.info.currentProps=_.extend(_.info.currentProps,t))},sa.getPresetProperties=function(){if(_.info&&_.info.properties&&_.info.properties.$lib){var t={};_.each(_.info.currentProps,function(e,a){0===a.indexOf("$")&&(t[a]=e)});var e=_.extend(t,{$url_path:_.getCurrentPath(),$is_first_day:_.getIsFirstDay()},_.info.properties);return delete e.$lib,e}return{}},sa.clearAppRegister=function(t){_.isArray(t)&&_.each(_.info.currentProps,function(e,a){_.include(t,a)&&delete _.info.currentProps[a]})},sa.appLaunch=function(t,e,a){e&&_.isObject(e)||(e={});var r={};t&&t.path&&(r.$url_path=_.getPath(t.path));var s=_.setUtm(t,r);sa.is_first_launch?(r.$is_first_time=!0,_.isEmptyObject(s.pre1)||sa.setOnceProfile(s.pre1)):r.$is_first_time=!1,_.isEmptyObject(s.pre2)||sa.registerApp(s.pre2);var n=_.getMPScene(t.scene);n&&(r.$scene=n,sa.registerApp({$latest_scene:r.$scene})),_.extend(r,e),(!a||sa.para.autoTrack&&sa.para.autoTrack.appLaunch)&&sa.track("$MPLaunch",r)},sa.appShow=function(t,e,a){e&&_.isObject(e)||(e={});var r={};mpshow_time=(new Date).getTime(),t&&t.path&&(r.$url_path=_.getPath(t.path));var s=_.setUtm(t,r);_.isEmptyObject(s.pre2)||sa.registerApp(s.pre2);var n=_.getMPScene(t.scene);n&&(r.$scene=n,sa.registerApp({$latest_scene:r.$scene})),_.extend(r,e),(!a||sa.para.autoTrack&&sa.para.autoTrack.appShow)&&sa.track("$MPShow",r)},sa.appHide=function(t,e){t&&_.isObject(t)||(t={});var a=(new Date).getTime(),r={};r.$url_path=_.getCurrentPath(),mpshow_time&&a-mpshow_time>0&&(a-mpshow_time)/36e5<24&&(r.event_duration=(a-mpshow_time)/1e3),_.extend(r,t),(!e||sa.para.autoTrack&&sa.para.autoTrack.appHide)&&sa.track("$MPHide",r),sendStrategy.onAppHide()},sa.clearAllRegister=function(){sa.store.setProps({},!0)},sa.login=function(t,p){var e=sa.store.getFirstId(),a=sa.store.getDistinctId();p=_.extend(p,{$distinctIdType:1})||{$distinctIdType:1};_.info.currentProps=_.extend(_.info.currentProps,p);t!==a&&(e?sa.trackSignup(t,"$SignUp"):(sa.store.set("first_id",a),sa.trackSignup(t,"$SignUp")))},sa.logout=function(t){var e=sa.store.getFirstId();_.info.currentProps.$distinctIdType=0; e?(sa.store.set("first_id",""),!0===t?sa.store.set("distinct_id",sa.store.getUUID()):sa.store.set("distinct_id",e)):sa.log("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")},sa.getAnonymousID=function(){if(!_.isEmptyObject(sa.store._state))return sa.store._state.first_id||sa.store._state.distinct_id;sa.log("\u8bf7\u5148\u521d\u59cb\u5316SDK")},sa.checkIsComplete=function(){this.isComplete=!1,this.getSystemInfoComplete&&this.hasInit&&(this.isComplete=!0,sa._queue.length>0&&(_.each(sa._queue,function(t){sa.prepareData.apply(sa,Array.prototype.slice.call(t))}),sa._queue=[]))},sa.init=function(){if(!0===this.hasInit)return!1;this.hasInit=!0,sa.para.batch_send&&sendStrategy.init(),sa.checkIsComplete()},sa.initial=function(){this._.info.getSystem(),this.store.init(),_.isObject(this.para.register)&&(_.info.properties=_.extend(_.info.properties,this.para.register))},sa.send=function(t){var e="";t._nocache=(String(Math.random())+String(Math.random())+String(Math.random())).slice(2,15),sa.log(t),t._flush_time=Date.now(),t=JSON.stringify(t),e=-1!==sa.para.server_url.indexOf("?")?sa.para.server_url+"&data="+encodeURIComponent(_.base64Encode(t)):sa.para.server_url+"?data="+encodeURIComponent(_.base64Encode(t));sdmp.sdmp_request({url:e,dataType:"text",method:"GET"})},sa.quick=function(){var t=arguments[0],e=arguments[1],a=arguments[2],r=_.isObject(a)?a:{};"appLaunch"===t||"appShow"===t?e?sa[t](e,r):sa.log("App\u7684launch\u548cshow\uff0c\u5728sensors.quick\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u4f20\u5165App\u7684options\u53c2\u6570"):"appHide"===t&&(r=_.isObject(e)?e:{},sa[t](r))},sa.pageShow=function(t,e){var a={};a.$url_path=_.getCurrentPath(),_.extend(a,t),(!e||sa.para.autoTrack&&sa.para.autoTrack.pageShow)&&sa.track("$MPViewScreen",a)};var mpHook={data:1,onLoad:1,onShow:1,onReady:1,onHide:1,onUnload:1,onPullDownRefresh:1,onReachBottom:1,onShareAppMessage:1,onPageScroll:1,onResize:1,onTabItemTap:1,onURLQueryChange:1,attached:1,created:1,detached:1,methods:1,properties:1,ready:1,__customConstructor__:1};_.getMethods=function(t){var e=[];for(var a in t)"function"!=typeof t[a]||mpHook[a]||e.push(a);return e},_.isClick=function(t){return!!{tap:1,longpress:1,longtap:1}[t]};var click_proxy=function(t,e){var a=t[e];t[e]=function(){var t=a.apply(this,arguments),e={},r="";if(_.isObject(arguments[0])){_.isObject(arguments[0].event_prop)&&(e=_.extend(e,arguments[0].event_prop));var s=arguments[0].currentTarget||{},n=arguments[0].target||{};if(_.isObject(sa.para.framework)&&_.isObject(sa.para.framework.taro)&&!sa.para.framework.taro.createApp&&n.id&&s.id&&n.id!==s.id)return!1;var i=s.dataset||{};r=arguments[0].type,e.$url_path=_.getCurrentPath(),e.$element_id=s.id,e.$element_type=i.type,e.$element_content=i.content,e.$element_name=i.name}return r&&_.isClick(r)&&sa.track("$MPClick",e),t}},oldApp=App,oldPage=Page,oldComponent=Component,oldPageAfter=Page.after;App.after({methods:{onLaunch:function(t){t.thisObject[sa.para.name]=sa,sa.appLaunch(t.args,{},!0)},onShow:function(t){sa.appShow(t.args,{},!0)},onHide:function(){sa.appHide({},!0)}}}),Page.after({methods:{onShow:function(){sa.pageShow({},!0)}}}),Page=function(t){var e=sa.para.autoTrack&&sa.para.autoTrack.mpClick&&_.getMethods(t);if(e)for(let a=0,r=e.length;a<r;a++)click_proxy(t,e[a]);oldPage.apply(this,arguments)},Page.after=function(){oldPageAfter.apply(this,arguments)},Component=function(t){try{var e=sa.para.autoTrack&&sa.para.autoTrack.mpClick&&_.getMethods(t.methods);if(e)for(let a=0,r=e.length;a<r;a++)click_proxy(t.methods,e[a]);var a=sa.para.autoTrack&&sa.para.autoTrack.mpClick&&_.getMethods(t);if(a)for(let e=0,r=a.length;e<r;e++)click_proxy(t,a[e]);oldComponent.apply(this,arguments)}catch(t){oldComponent.apply(this,arguments)}},sa.initial(),module.exports=sa;