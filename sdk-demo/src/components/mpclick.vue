<template>
  <view>
		<view class="text-btn--inner"	@tap="onEvent(1)"
				>
			<view @tap="onEvent(2)">
				<view @tap="onEvent(3)">
					<view @tap.stop="onEvent(4)">
						我是嵌套的事件mpClick
					</view>
				</view>
			</view>
		</view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		const onEvent = (deep) => {
			console.log('mpClick', deep)
		}
		return {
			onEvent
		}
	}
})
</script>

<style>

.text-btn--inner {
  width: 200px;
	height: 46px;
	line-height: 46px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 18px;
	text-align: center;
	color: #dd524d;
	background-color: transparent;
	border: 1px solid #1aad19;
}
.text-btn--inner:hover {
	background-color: #1aad19;

}
</style>
