<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch", uni.zalldata);
  const zalldata = uni.zalldata
  // 初始化 SDK
  // 直接 init  埋点 id 会随机生成UUID
  // sensors.init()

  zalldata.register({
    $distinctIdType: 4
  })
  zalldata.identify('openid-11111')

  zalldata.init();

  // 若需要同时设置业务id和匿名id作为id关联
  setTimeout(() => {
    zalldata.register({
      $distinctIdType: 3
    })

    zalldata.login('unionid-22222')
  })
	
  // 发送 res.code 到后台换取 openId, sessionKey, unionId

  // #ifdef MP-WEIXIN
  wx.login({
    success: (res: any) => {;

      wx.request({
        url: '后端获取 OpenID 的请求',
        success: function(res: any) {
          zalldata.identify('openid-11111')
          zalldata.register({
            $distinctIdType: 4
          })
          zalldata.init();

          // 若需要同时设置业务id和匿名id作为id关联
          setTimeout(() => {
            zalldata.register({
              $distinctIdType: 3
            })
            zalldata.login('unionid-22222')
          })
        },
        error: function() {
          // 如果获取 openid 失败，SDK 会以 UUID 作为匿名 ID 发数据
          zalldata.init();
        }
      });
    }
  })
  //#endif
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
