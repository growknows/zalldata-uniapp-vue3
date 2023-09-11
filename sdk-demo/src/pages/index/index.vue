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
		<view class="btn-item">
			<button type="default"
							plain="true"
							@tap="onEvent"
							data-name="采集任意点击"
							data-content="这是一个任意点击的采集事件"
			>
				采集任意点击
			</button>
		</view>
		<child />
  </view>
</template>

<script lang="ts">
import { ref } from 'vue'
import { onShareAppMessage } from "@dcloudio/uni-app";
import child from "@/components/child"
import { defineComponent } from 'vue'

export default defineComponent({
	components: { child },
	setup() {
		const title = ref('Hello')
		const onLogin = () => {
			uni.zalldata.register({
				$distinctIdType: 2,
				$originalIdType: 4
			})
			uni.zalldata.login('mobile-123456')
		}

		const onTrack = () => {
			uni.zalldata.track('ClickAddFans', {
				name: 'oscar'
			})
		}

		const onChange = () => {
			uni.zalldata.register({
				$app_name: '测试小程序'
			})
			console.log('公共属性设置成功！')
		}

		const onChangeProfile = () => {
			uni.zalldata.setProfile({
				$title: '你好111'
			})
		}
		const onEvent = () => {
			console.log('1111111')
		}
		// 开启分享, 此时可上报分享事件
		onShareAppMessage(() => {
			return {
				title: '埋点采集',
				path: "pages/index/index"
			}
		})

		return {
			onLogin,
			onTrack,
			onChange,
			onEvent,
			onChangeProfile,
			onShareAppMessage
		}
	}
})
</script>

<style>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
