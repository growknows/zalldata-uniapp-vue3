import {createSSRApp} from "vue";
import App from "./App.vue";
import zalldata from '../../uni-app-sdk/index'
// 配置初始化参数
zalldata.setPara({
    name: 'zall',
    // server_url: 'https://logcollect.zalldata.cn/a?service=zall&project=z7dsss', // 上报地址
    // 全埋点控制开关
    autoTrack: {
        appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
        appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
        appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
        pageShow: true, // 默认为 true，false 则关闭 $MPViewScreen 事件采集
        pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
        mpClick: true, // 默认为 false，true 则开启 $MPClick 事件采集
        mpFavorite: true, // 小程序收藏，默认为 true，false 则关闭 $MPAddFavorites 事件采集
        pageLeave: true // 默认为 false， true 则开启 $MPPageLeave事件采集
    },
    // 自定义渠道追踪参数，如 source_channel: ["custom_param"]
    source_channel: ['custom_param'],
    // 是否允许控制台打印查看埋点数据(建议开启查看)
    show_log: true,
});

// 挂载在 uni 上
uni.zalldata = zalldata


export function createApp() {
    const app = createSSRApp(App);
    return {
        app,
    };
}
