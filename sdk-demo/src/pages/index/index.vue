<template>
  <view class="container">
    <view class="btn-item">
      <button type="primary" plain="true" @tap="onLogin">登录</button>
    </view>

    <view class="btn-item">
      <button type="primary" @tap="onTrack">上报事件</button>
    </view>
    <view class="btn-item">
      <button type="default" plain="true" @tap="onChange">设置公共属性</button>
    </view>
    <view class="btn-item">
      <button type="default" plain="true" @tap="onChangeProfile">设置用户属性</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
const onLogin = () => {
  // #ifdef H5
  uni.zalldata.register({
    $distinctIdType: 2
  })
  // #endif

  // #ifdef MP-WEIXIN
  uni.zalldata.registerApp({
    $distinctIdType: 2
  })
  // #endif

  uni.zalldata.login('mobile-123456')
}

const onTrack = () => {
  uni.zalldata.track('ClickAddFans', {
    name: 'oscar'
  })
}

const onChange = () => {
// #ifdef H5
  uni.zalldata.register({
    $platform: 'miniapp'
  })
  //#endif
  // #ifdef MP-WEIXIN
  uni.zalldata.instance.registerApp({
    $platform: 'miniapp'
  })
  //#endif
}

const onChangeProfile = () => {
  uni.zalldata.setProfile({
    $title: '你好111'
  })
}

</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  box-sizing: border-box;
  background: #F7F6F6;
}

.btn-item {
  margin: 10px;
}

.btn-item button {
  width: 200px;
}
</style>
