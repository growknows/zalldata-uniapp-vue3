
## 埋点集成文档(微信小程序)

```bash
  1. 将 SDK 文件放引小程序项目中
  2. 在 app.js(main.ts) 文件中通过 require(path) 引入 SDK; 
  3. 配置全局参数 zall.setPara(options)
  
  4. 初始化 SDK方法 zall.init(),此时业务id是匿名id, 
  真实场景中会通过接口获取 OpenID 后调用 zall.setOpenid(OpenID)
  
  5. 根据业务id的不同, 设置对应的公共属性 zall.registerApp({ $distinctIdType: type })
     // unionid: 3, openId: 4, mobile: 2
  
  6. 上报埋点事件 zall.track(EVENT,{$url_title: '查看详情', $url_path: "pages/goods/detail"});
  
```

## 数据格式
```javascript
const trackEntity = {
	distinct_id: "123456",//业务ID
	anonymous_id: "1678418752658-4421693-0915fe709ce7c9-23344970", // 匿名id, 可能是设备id，openId等
	time: 1609312457,//时间戳
	type: "track",//接口类型 track:上报事件, profile_set: 首次设置用户属性 track_signup：登录关联用户的匿名ID与业务ID
	event: "item_view",//事件名
	time_free: true, //事件发生时间过滤选择
	lib: {
		"$lib": "MiniProgram",
		"$lib_method": "code",
		"$lib_version": "1.14.5"
	},
	properties: {
		"$lib": "Android",//SDK类型
		"$os_version": "9.1.0",//操作系统版本
		"$lib_version": "3.1.5",//SDK版本
		"$os": "Android",//操作系统
		"$maunfacturer": "HUAWEI",//设备制造商
		"$wifi": ture,//是否为Wifi
		"item_id": "09f3k94e903f23e894j2",//物品ID
		"item_classify": "手机",//物品分类
		"item_price": 3999.0,//物品价格
		"item_name": "HUAWEI P20",//物品名称
		"$ip": "180.78.25.13",//IP地址
		"$province": "北京市",//省份
		"$city": "北京市",//城市
        'contnet': '你好'
	}
}
    
```


##  globalData 设置全局变量

```javascript
    import zall from ' JS SDK 路径/index.js';
    zall.setPara({
        server_url:"https://xxxxx",       //数据上报地址 必填 @Platform All
        name:'zall',                 
        autoTrack:{
	        appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
	        appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
	        appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
	        pageShow: true, // 默认为 true，false 则关闭 $MPViewScreen 事件采集
	        pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
	        mpClick: false, // 默认为 false，true 则开启 $MPClick 事件采集
	        mpFavorite: true, // 小程序收藏，默认为 true，false 则关闭 $MPAddFavorites 事件采集
	        pageLeave: false // 默认为 false， true 则开启 $MPPageLeave事件采集
        },
	    // 自定义渠道追踪参数，如 source_channel: ["custom_param"]
	    source_channel: [],
	    // 是否允许控制台打印查看埋点数据(建议开启查看)
	    show_log: true,
	    // 是否允许修改 onShareAppMessage 里 return 的 path，用来增加(登录 ID，分享层级，当前的 path)，在 app onShow 中自动获取这些参数来查看具体分享来源、层级等
	    allow_amend_share_path: true
	    // 是否允许控制台打印查看埋点数据(建议开启查看)
    });
    //初始化方法 @Platform H5、小程序
    zall.identify(id)
    zall.init();
```

## 启动埋点

```javascript
    zall.init();
```

## 用户登录

```javascript
    zall.login(id)
```


## 埋点触达

```javascript
     zall.track('ClickAddFansButton', 
      {title: '',add_fans_way: '',wework_liveqrcode_name:''}
    );
```

## 设置公共属性

```javascript
  	zall.registerApp({
        $distinctIdType: type
    })
```

## 设置用户属性

```javascript
  	zall.setProfile({
	email:'xxx@xx',
    })
```
