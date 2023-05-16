<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch", uni.zalldata);
  const zalldata = uni.zalldata


  // 方案一: 单id上报
  // zalldata.register({
  //   $distinctIdType: 4
  // })
  // zalldata.instance.setOpenid('openid-11111', true)
  // zalldata.init();
  //
  // return


  // 方案二: 关联 OpenID 和 UnionID
  zalldata.register({
    $distinctIdType: 4
  })

  setTimeout(() => {
    zalldata.instance.setOpenid('openid-11111', true)
    zalldata.init();

    zalldata.register({
      $distinctIdType: 3,
      $originalIdType: 4
    })

    zalldata.login('unionid-22222')
  },1000)

  // #ifdef MP-WEIXIN
  wx.login({
    success: (res: any) => {;

      wx.request({
        url: '后端获取 OpenID 的请求',
        success: function(res: any) {
          zalldata.instance.setOpenid('openid-11111', true)
          zalldata.register({
            $distinctIdType: 4
          })
          zalldata.init();

          // 若需要同时设置业务id和匿名id作为id关联
          setTimeout(() => {
            zalldata.register({
              $distinctIdType: 3,
							$originalIdType: 4
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
