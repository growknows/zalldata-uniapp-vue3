<template>
  <view class="container">
		<view class="wrapper">
			<text>哈喽，我是child组件</text>
		</view>
		<view class="btn-item">
			<button
					type="primary"
							@tap="onEvent"
							data-name="我是child"
							data-content="这是一个任意点击的采集事件"
			>
				我是child
			</button>
		</view>
		<mpclick />
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mpclick from "@/components/mpclick"
export default defineComponent({
	components: { mpclick },
	setup() {

		const onEvent = () => {
			console.log('child')
		}
		return {
			onEvent
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
  background: #2c405a;
	padding: 5% 0;
	color: #ffffff;
}

.btn-item {
  margin: 10px;
}

.btn-item button {
  width: 200px;
}
</style>
